//-------------------------------------------------------------
//   HtmlContentPlayer module
//-------------------------------------------------------------
//
//    
//
// -----------------------------------------------------
//
// Audio Kludge (Jan 2013) ----------
//
// We have a major kludge in here for making Safari (desktop and iOS) behave with repect to
// changing time on the timeslider.  The issue is that when we manually set the currentTime
// of the audio object, such as when the user click on the time slider, Safari would jump to
// the wrong point in the audio file.  We were not able to get to the root of the problem,
// but found a workaround.  Safari reports the duration of the audio track as longer than
// it really is.  The difference between the real duration and the Safari duration has a
// direct correlation with the amount of offset that we were seeing when changing time on
// the time slider.  So only on Safari...
//
// We are creating a delta:
//    _timelineDifference = The difference between audio track and video track after timeline change.
//
// Whenever we reference the audio track's currentTime, we subtract the delta:
//    currentTime = (_audioTrack.currentTime * 1000 - _timelineDifference)/1000;
//
// This solves the problem.

'use strict';
(function() {

    // Hide the stage content until player is loaded, this eliminates flashing.
    // We are doing this in javascript so that the contents are not hidden in 
    // Adobe Edge's authoring environment.
    if (!window.edge_authoring_mode) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = '.player-container > div { display: none; }';
        document.getElementsByTagName('head')[0].appendChild(style);
    }

    window.HtmlContentPlayer = function(args) {

        var defaults = {
            animation: null, // animation's stage (required)
            duration: null,        // in seconds (required)
            audio: null,
            elem: null,
            srt: null,             // url
            poster: null,          // url
            autoPlay: false,       // Only use during animation authoring
            mute: false,
            showControls: true,
            showTime: false,       // Only use during animation authoring
            triggerOnSync: true,
            startTime: null,
            hidePrevButton: false,
            hideNextButton: false,
            hideVolButton: false,
            hideCCButton: false,
            hideFullScreenButton: false,
            fullScreen: false,
            isAdobeEdge: true
        };

        var _options = $.extend({}, defaults, args);

        if (!_options.duration ) {
            throw(': Please set the htmlcontentplayer\'s "duration" property manually to the length of the audio track or animation (in seconds)');
        }

        if (!_options.animation) {
            throw(': Please set the htmlcontentplayer\'s "animation" property to the animation\'s stage');
        }

        // Cache frequently used elements
        var _playerBase;
        var _playerContent;
        var _playerControls;
        var _playButton;
        var _muteButton;
        var _audioTrack;
        var _progressBar;
        var _subtitles;
        var _currentTime;
        var _timeThumb;
        var _volThumb;

        // Useful member variables
        var _stage = _options.animation;
        var _stageElem = _stage.getSymbolElement() || $(_options.elem) || $('#Stage');
        var _isPlaying = false;
        var _isMuted = false;
        var _isFullscreen = false;
        var _keyframeElapsed = 0;
        var _playEnded = false;
        var _useAudioKludge = false;
        var _timelineDifference = 0;  // This is part of the Safari audio kludge
        var _isThumbDown = false;
        var _isVolThumbDown = false;
        var _showSubtitles = false;
        var _volShowing = false;
        var _lastVolume = 0.75;
        var _safariTimeSliderDiff = 0;
        var _baseContentHeight;
        var _baseContentWidth;
        var _parseSRT;
        var _keyframeMax = 20; // Constant, this is the number of ticks between audio/animation sync

        // Load SRT file, if available
        if (_options.srt) {
            _parseSRT = new window.Subtitles(_options.srt);
        }

        // Load and append the player template structure
        appendTemplate();


        function appendTemplate() {

            // Our Player html is stored in "html-content-player-structure.html" for editing, but we have a task
            // in Gruntfile.js that converts that external file into a javascript string and concatenates with the 
            // file you're looking at right now. This happens at build-time when you run "grunt start" and anytime
            // one of the src files changes while the server is running. The player structure string gets assigned 
            // to window.HtmlContentPlayer.structure in the final minified file. Below we are appending that to
            // the stage element's parent.
            _stageElem.wrap('<div class="temp-wrapper"></div>');
            _stageElem.parent().append(window.HtmlContentPlayer.structure);

            // Cache the base elements
            _playerBase = $('#player-base');
            _playerContent = $('.player-content');

            // Reparent the animation div
            _playerContent.append(_stageElem);
            _playerBase.unwrap();

            // Check if Stage has "Responsive Scaling" set
            if (_stage.data.stage.scaleToFit !== undefined && _stage.data.stage.scaleToFit !== 'none') {
                _stageElem.hide();
                window.alert('Your stage has "Responsive Scaling" set, please disable that option in Edge Animate.');
                return;
            }

            try {

                // Check if Stage has "Center Stage" set
                if (_stage.data.stage.centerStage !== undefined && _stage.data.stage.centerStage !== 'none') {
                    _stageElem.hide();
                    window.alert('Your stage has the "Center Stage" option set, please disable that option in Edge Animate.');
                    return;
                }

                // Check if Stage has "Center Stage" set
                if (_stage.data.stage.centerStage !== undefined && _stage.data.stage.centerStage !== 'none') {
                    _stageElem.hide();
                    window.alert('Your stage has the "Center Stage" option set, please disable that option in Edge Animate.');
                    return;
                }

            }
            catch(e) {
                console.log('Edge stage not found');
            }
            // Call layoutReady() after the DOM is built. This setTimeout usage is a trick to
            // ensure that the DOM is built and we can query things like element widths.
            window.setTimeout(layoutReady, 0);
        }

        function layoutReady() {

            // Cache frequently used elements
            _playerControls = $('.player-controls');
            _playButton = $('.player-play-button');
            _muteButton = $('.player-mute-button');
            _progressBar = $('.player-time-slider .player-progress');
            _subtitles = $('.player-subtitles');
            _currentTime = $('.player-current-time');
            _volThumb = $('.player-vol-slider .player-thumb');
            _timeThumb = $('.player-time-slider .player-thumb');

            // Wire up events
            _playButton.on('click', playButtonClicked);
            _muteButton.on('click', muteButtonClicked);
            _muteButton.on('mousedown', muteButtonMouseDown);
            _muteButton.on('keydown', muteButtonKeyDown);
            _volThumb.on('keydown', volThumbKeyDown);
            _volThumb.on('mousedown', volThumbMouseDown);
            _volThumb.on('touchstart', volThumbMouseDown);
            $('.player-fullscreen-button').on('click', fullscreenButtonClicked);
            $('.player-time-slider .player-track').on('mousedown', timeTrackMouseDown);
            $('.player-time-slider .player-thumb').on('keydown', timeThumbKeyDown);
            $('.player-time-slider .player-thumb').on('mousedown', timeThumbMouseDown);
            $('.player-time-slider .player-thumb').on('touchstart', timeThumbMouseDown);
            $('.player-vol-button').on('click', volumeButtonClicked);
            $('.player-vol-button').on('mousedown', volumeButtonMouseDown);
            $('.player-back-button').on('click', backButtonClicked);
            $('.player-next-button').on('click', nextButtonClicked);
            $('.player-CC-button').on('click', CCButtonClicked);
            $('.player-vol-slider .player-track').on('mousedown', volTrackMouseDown);
            $('.player-vol-slider .player-track').on('touchstart', volTrackMouseDown);
            $(document).on('mousemove', documentMouseMove);
            $(document).on('touchmove', documentMouseMove);
            $(document).on('mouseup', documentMouseUp);
            $(document).on('touchend', documentMouseUp);
            $(document).on('keyup', documentKeyUp);
            $(window).on('resize', windowResized);

            // Remove buttons if specified to do so
            if (_options.hidePrevButton)
                $('.player-back-button').remove();

            if (_options.hideNextButton)
                $('.player-next-button').remove();

            if (_options.hideVolButton)
                $('.player-vol-button').remove();

            if (_options.hideCCButton)
                $('.player-CC-button').remove();

            if (_options.hideFullScreenButton)
                $('.player-fullscreen-button').remove();

            _baseContentHeight = _playerContent.height();
            _baseContentWidth = _playerContent.width();

            // If audio is present, initialize it and perform other audio-related setup
            if (_options.audio) {

                // Initialize Audio
                createAudio();
                adjustVolume(0.75);
                
                // Wire audio events
                $(_audioTrack).on('timeupdate', timeUpdated);
                $(_audioTrack).on('ended', playEnded);

                // detect Safari on Windows
                if (navigator.vendor && navigator.vendor.match(/Apple/i) && navigator.userAgent.match(/Windows/i)){
                    _safariTimeSliderDiff = 42;
                }

                // Start our Safari audioFix kludge
                if (navigator.vendor && navigator.vendor.match(/Apple/i)) {
                    playAudio();
                    pauseAudio();
                    _useAudioKludge = true;
                }

                // use kludge on Windows Vista IE9 
                if (navigator.userAgent.match(/Windows NT 6.0/i) && navigator.userAgent.match(/MSIE 9.0/i)){
                    _useAudioKludge = true;
                }
            }
            else if (_options.isAdobeEdge && window.AdobeEdge) {
                // Since there is no audio in this condition, listen to stage events
                window.AdobeEdge.Symbol.bindTimelineAction(_stage.getComposition().getCompId(), 'stage', 'Default Timeline', 'update', timeUpdated);
                window.AdobeEdge.Symbol.bindTimelineAction(_stage.getComposition().getCompId(), 'stage', 'Default Timeline', 'complete', playEnded);
                $('.player-vol-button').remove();
            }
            else {
                // Handle this condition for non-Adobe Edge animations that have no audio.
                // The player will have to listen to 'update' and 'complete' events from the Non-edge animation
            }


            // detect iOS
            if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) {
                $('.player-inner').addClass('ios');
                $('.player-vol-button').remove();
            }

            // detect Android
            if (navigator.userAgent.match(/Android/i)) {
                $('.player-inner').addClass('android');
                $('.player-vol-button').remove();
            }

            // Init slider accessibility
            _timeThumb.attr('aria-valuemin', 0);
            _timeThumb.attr('aria-valuemax', _options.duration);
            _volThumb.attr('aria-valuenow', 75);

            // Set inital states using arguments ----

            if (_options.autoPlay) {
                playButtonClicked();
            }

            if (_options.mute) {
                muteButtonClicked();
            }

            if(!_options.showControls) {
                $('.player-controls').hide();
                _playerContent.addClass('controls-hidden');
            }

            if(_options.poster !== null) {
                $('.player-poster').css('background-image', 'url('+_options.poster+')');
                $('.player-poster').show();
            }

            if (_options.showTime)
                _currentTime.show();

            if (_options.startTime)
                playFrom(_options.startTime);

            if (_options.fullScreen) {
                goFullscreen();
            }
            else {
                fitIntoWindow();
            }

            //hide loading spinner
            $('.player-container').removeClass('player-container');

            trigger('playerDOMReady', null);
        }

        // -- CORE FUNCTIONALITY ----------------------------------

        // -- Animation "ticks" -----------
        function _timeUpdated(event) {

            var currentTime = getCurrentTime();

            // Specific tasks if audio is present
            if (_options.audio) {

                // Small accomodation for IE, where it reports the incorrect duration, but doesn't need the full audio kludge.
                if (currentTime >= _options.duration) {
                    pauseAudio();
                    _subtitles.html('');
                    playEnded();
                    return;
                }

                // Keep audio and video in sync. We're essentially using a similar technique
                // that real video uses. Every so often the player will sync the video to the
                // audio's current time. Real video stores a keyframe value that says how many
                // frames are between these syncs. We are using a set value of 40, which works
                // out to around 7 secs on most browsers.
                if (_keyframeElapsed > _keyframeMax || _keyframeElapsed === -1) {

                    if (_isPlaying) {
                        playFromTime(currentTime * 1000);
                        if (_options.triggerOnSync)
                            trigger('played', null, currentTime * 1000);
                    }
                    else {
                        stopAtTime(currentTime * 1000);
                        if (_options.triggerOnSync)
                            trigger('paused', null, currentTime * 1000);
                    }

                    _keyframeElapsed = 0;
                }

                _keyframeElapsed = _keyframeElapsed + 1;

            }

            _progressBar.width(currentTime/_options.duration * 100 + '%');

            if (_showSubtitles){
                _subtitles.html(_parseSRT.getSubtitle(currentTime));
            }

            var mins = Math.floor(currentTime/60)<10?'' + Math.floor(currentTime/60):Math.floor(currentTime/60);
            var secs = Math.floor(currentTime-(mins*60))<10?'' + Math.floor(currentTime-(mins*60)):Math.floor(currentTime-(mins*60));

            if (_options.showTime)
                _currentTime.text(pad(mins,2) + ':' + pad(secs,2));

            _timeThumb.attr('aria-valuenow', Math.floor(currentTime));
            _timeThumb.attr('aria-valuetext', mins + ' minutes ' + secs + ' seconds');
        }

        function timeUpdated(event) {
            try {
                _timeUpdated(event);
            } catch(e) {
                console.log('error during timeUpdated:', e);
            }
        }

        // --- gotoTimeAsPercentage() ----------------
        function gotoTimeAsPercentage(percentage) {

            // Determine if the playing has reached the end
            _playEnded = false;

            if (percentage > 0.99) {
                pauseAudio();
                _subtitles.html('');
                playEnded();
            }

            if (percentage <= 0 ) {
                _subtitles.html('');
                percentage = 0.001;
            }

            // Update progress bar position
            _progressBar.width(percentage * 100 + '%');

            // On some platforms, setting the animation to the same time as the audio
            // still leaves the two a little out of sync. To help with that we are setting
            // keyframeElapsed to almost its maximum value (keyframeMax). When keyframeElapsed
            // hits keyframeMax, the audio and animation sync.
            _keyframeElapsed = _keyframeMax - 2;

            if (_options.audio) {
                // Change the audio track's current time. Safari needs a
                // kludge to correctly report the audio's currentTime
                if (_useAudioKludge && _audioTrack.duration && !isNaN(_audioTrack.duration)) {
                    _audioTrack.currentTime = _audioTrack.duration * percentage;
                }
                else {
                    _audioTrack.currentTime = _options.duration * percentage;
                }
            }
            
            // Change the stage's current time
            if (_isPlaying) {
                playFromTime(_options.duration * percentage * 1000);
                trigger('played', null, _options.duration * percentage * 1000);
            }
            else {
                stopAtTime(_options.duration * percentage * 1000);
                trigger('paused', null, _options.duration * percentage * 1000);
            }

            if (_options.audio) {
                // Keep track of the necessary offset required to make Safari happy
                if (_useAudioKludge && _audioTrack.duration && !isNaN(_audioTrack.duration)) {
                    _timelineDifference = _audioTrack.currentTime * 1000 - _stage.getPosition();
                }
            }

        }

        function play(time) {
            if (time){
                playFrom(time);
            }
            else {
                playFromStart();
            }
        }

        function playFromStart() {
            if (_playEnded) {
                playAgain();
                _playEnded = false;
            }

            _keyframeElapsed = -1;

            $('.player-poster').hide();
            _isPlaying = true;

            if (!_options.audio) {
                playFromTime();
            }

            playAudio();
            trigger('played', null, null);

            _playButton.addClass('paused');
            _playButton.html('Pause');
        }

        // Public function exposed in the API
        function playFrom(time) {
            _isPlaying = true;
            gotoTimeAsPercentage((time/1000)/_options.duration);
        }

        function stop() {
            _isPlaying = false;
            pauseAudio();
            stopAtTime();
            trigger('paused', null, null);
            _playButton.removeClass('paused');
            _playButton.html('Play');
        }

        function playAgain() {
            gotoTimeAsPercentage(0);
        }

        function playEnded(symbol, event) {
            // For some reason, Edge triggers the "complete" event when its 
            // first told to play. Lets look for that and return if so.
            if (event && event.elapsed === 0) return;
            
            stopAtTime();
            trigger('paused', null, null);
            _playButton.removeClass('paused');
            _isPlaying = false;
            _playEnded = true;
        }

        // private function used internally
        function playFromTime(newTime) {
            if (_options.isAdobeEdge) {
                playAll(newTime);
            }
            else {
                _stage.play(newTime);
            }
        }

        // private function used internally
        function stopAtTime(newTime) {
            if (_options.isAdobeEdge) {
                stopAll(newTime);
            }
            else {
                _stage.stop(newTime);
            }
        }

        // Adobe Edge specific play with support for symbol use cases
        function playAll(newTime, symbol, isReverse) {
            symbol = symbol || _stage;
            newTime = newTime || symbol.getPosition();

            if (isReverse) {
                symbol.playReverse(newTime);
            }
            else {
                symbol.play(newTime);
            }

            // Get child symbols that should be playing right now (based on their trigger values)
            var playableSymbols = getPlayableSymbols(newTime, symbol);

            // loop through the array of playableSymbols and play them
            for (var key in playableSymbols) {
                var childSymbol = playableSymbols[key].symbol;
                var triggerPosition = playableSymbols[key].position;
                var childIsReverse = playableSymbols[key].isReverse;

                // figure out what time the child needs to play from
                var childNewTime = newTime - triggerPosition;

                // if the symbol was played in reverse, figure out that time
                if (childIsReverse) {
                    childNewTime = childSymbol.getDuration() - childNewTime;
                }

                // Play the symbol and its children
                playAll(childNewTime, childSymbol, childIsReverse);
            }
        }

        // Adobe Edge-specific stop with support for symbol use cases
        // stopAll is also used when seeking.
        function stopAll(newTime, symbol) {
            symbol = symbol || _stage;
            newTime = newTime || symbol.getPosition();

            symbol.stop(newTime);

            // Get child symbols that should be playing right now (based on their trigger values)
            var playableSymbols = getPlayableSymbols(newTime, symbol);

            // loop through the array of playableSymbols and stop them
            for (var i in playableSymbols) {

                var childSymbol = playableSymbols[i].symbol;
                var triggerPosition = playableSymbols[i].position;
                var isReverse = playableSymbols[i].isReverse;

                // figure out what time the child needs to play from
                var childNewTime = newTime - triggerPosition;

                // if the symbol was played in reverse, figure out that time
                if (isReverse) {
                    childNewTime = childSymbol.getDuration() - childNewTime;
                }

                // stop the symbol and its children
                stopAll(childNewTime, childSymbol);
            }

            // Stop any remaining symbols, such as looping symbols
            symbol.stopAll();

        }

        //  getPlayableSymbols(newTime, symbol)
        //
        //  Supports the playAll and stopAll functions and allows the user to
        //  manipulate the timeline and have child symbols respond correctly.
        //  We are looping through a symbol's triggers, determining which child symbols
        //  need to be playing, and calculate the time that they should play from.
        //
        //  In some scenarios, such as if the new time is after a stop trigger
        //
        //  Support for:
        //    + Play
        //    + playFrom time
        //    + playFrom label
        //    + playReverse
        //    + playReverse, stopped prematurely
        //    + multiple trigger scenarios on the same symbol?
        //    + looping symbols (action within to go to a position) - we stop these, but can't play
        //    + prematurely stopped symbol (with trigger)
        //    + grandchildren
        //    + stop at time
        //    + stop at label
        //
        function getPlayableSymbols(newTime, symbol) {

            var playableSymbols = {};

            // for any reverse-playing symbols, temporarily store their trigger positions
            var revSymbolPositions = {};

            // Store all positions during play triggers, so that stop triggers can stop at the correct time.
            var triggerPositions = {};

            // get all of the timelines for this symbol, sort them by "position", aka time.
            var timelines = getTimelineData(symbol).sort();
            
            // Loop through timelines and act on triggers
            for (var i = 0, length = timelines.length; i < length; i++) {
                var timeline = timelines[i];

                if (timeline[1] !== 'trigger') continue; // skip tweens

                // Get the trigger data, this is somewhat brittle but Edge does not give us helpers to retrieve this info.
                var triggerData = timeline[4];

                if (!triggerData) {
                    continue;
                }

                // Get the action (play, stop) from the trigger. How we are doing this is brittle. Unfortunately Edge does not give us any helpers here.
                var triggerAction = triggerData[0];

                // Get the selector name and then the symbol itself
                var selector = triggerData[1];
                var triggerSymbol = symbol.getSymbol(selector);

                // Is it playing in reverse?
                var isReverse = (triggerAction === 'playReverse');

                var timelinePosition = timeline[2];

                if (isReverse) {
                    revSymbolPositions[selector] = timelinePosition;
                }

                // PLAY & PLAY REVERSE ACTIONS ---------
                if (triggerAction === 'play' || triggerAction === 'playReverse') {

                    // index 2 is the playFrom time or label, in most cases this is 0
                    var playFromTime = getPlayFromOrStopAtTime(triggerSymbol, triggerData[2]);

                    var timelineStart = timelinePosition - playFromTime;
                    var timelineEnd = timelineStart + triggerSymbol.getDuration();

                    triggerPositions[selector] = timelineStart;

                    // if the newTime falls within the symbol, add the symbol to the array of symbols to play.
                    if (newTime > timelinePosition && newTime < timelineEnd) {

                        playableSymbols[selector] = { symbol: triggerSymbol,
                                                      position: timelineStart,
                                                      isReverse: isReverse };
                    }
                    // if the newTime is before the symbol, set the symbol time to 0
                    else if (newTime <= timelinePosition) {
                        var beforeTime = (isReverse) ? triggerSymbol.getDuration() : 0;
                        stopAllChildSymbols(triggerSymbol, beforeTime);
                    }
                    // if the newTime is after the symbol, set the symbol time to the duration
                    else if (newTime >= timelineEnd) {
                        var afterTime = (isReverse) ? 0 : triggerSymbol.getDuration();
                        stopAllChildSymbols(triggerSymbol, afterTime);
                    }
                }

                // STOP ACTION --------------------
                if (triggerAction === 'stop') {

                    if (newTime > timelinePosition) {

                        var playTime = triggerPositions[selector] || 0;

                        // Remove the symbol from the playableSymbol's array (if its there)
                        delete playableSymbols[selector];

                        // index 2 is the stopAt time or label, in most cases this doesn't exist, therefore its 0
                        var stopAtTime = getPlayFromOrStopAtTime(triggerSymbol, triggerData[2]);

                        // position to stop at
                        var symbolPosition = (stopAtTime > 0) ? stopAtTime : timelinePosition - playTime;

                        // If symbol is playing in reverse figure out the stop time.
                        if (revSymbolPositions[selector]) {
                            symbolPosition = triggerSymbol.getDuration() - timelinePosition + revSymbolPositions[selector];
                        }

                        // Make symbol's time match the stop trigger time
                        triggerSymbol.stop(symbolPosition);
                    }
                }

            }
            return playableSymbols;
        }

        // Edge's playFrom and stopAt triggers take a time or a label, 
        // return that time and lookup the time if its a label
        function getPlayFromOrStopAtTime(triggerSymbol, data) {

            if (data.length > 0) {
                // The actual value is also an array, we'll use index 0. I've never been able to produce a usecase where it contains more than a single value.
                if (typeof data[0] === 'string') {
                    // look up the label
                    var labels = getTimelineDefn(triggerSymbol).labels;
                    if (labels) {
                        return labels[data[0]];
                    }
                }
                return data[0];
            }
            return 0;
        }

        function getTimelineData(sym) {
            var s = sym.data[sym.name];
            return s.timeline ? s.timeline.data : null;
        }

        function getTimelineDefn(sym) {
            return sym.data[sym.name].timeline;
        }

        function stopAllChildSymbols(symbol, time) {
            symbol.stop(time);
            var childSymbols = symbol.getChildSymbols();
            for(var i=0; i<childSymbols.length; i++) {
                stopAllChildSymbols(childSymbols[i], time); // stop all of the children
            }
            return;
        }

        function adjustVolume(volume){
            // fix for kindle
            if (volume === 0)
                volume = 0.001;

            _volThumb.attr('aria-valuenow', Math.round(volume*100));
            _audioTrack.volume = volume;
            var trackHeight = $('.player-vol-slider .player-track').height();
            var y = trackHeight - trackHeight * volume;
            $('.player-vol-slider .player-progress').css('top', y + 'px');
        }

        // -- Event Handlers -------------------------------- 

        function playButtonClicked() {
            if (_isPlaying) {
                stop();
            }
            else {
                playFromStart();
            }
        }

        function muteButtonClicked(event) {
            if (_isMuted) {
                adjustVolume(_lastVolume);  // Restore

                $('.player-vol-button').removeClass('muted');
                $('.player-vol-slider .player-track').css('opacity', 1);

                _volThumb.on('keydown', volThumbKeyDown)
                .on('mousedown', volThumbMouseDown)
                .on('touchstart', volThumbMouseDown)
                .show();

                _muteButton.html('Mute')
                .removeClass('muted');
            }
            else {
                _lastVolume = _audioTrack.volume;
                adjustVolume(0); // Mute w/volume change


                $('.player-vol-button').addClass('muted');
                $('.player-vol-slider .player-track').css('opacity', 0.4);

                _volThumb.off('keydown', volThumbKeyDown)
                .off('mousedown', volThumbMouseDown)
                .off('touchstart', volThumbMouseDown)
                .hide();

                _muteButton.html('Un mute')
                .addClass('muted');
            }

            _isMuted = !_isMuted;
        }

        function timeTrackMouseDown(event) {
            $('.player-poster').hide();

            if (_isThumbDown) return;
            _isThumbDown = true;
            var x = (event.offsetX) ? event.offsetX : event.originalEvent.layerX;
            var percentage = x/$('.player-time-slider .player-track').width();
            gotoTimeAsPercentage(percentage);
        }

        function volTrackMouseDown(event) {
            event.stopPropagation();
            if (_isVolThumbDown) return;

            _isVolThumbDown = true;
            var eventY = getEventY(event);
            var percentage = getVolSliderPercentageFor(eventY);

            adjustVolume(1-percentage);
        }

        // -- Keyboard control of the time slider ----------

        function timeThumbKeyDown(event) {
            event.stopPropagation();

            // Hide poster if it is any key anything except tab or shift + tab
            if (!((event.keyCode === 9) || (event.shiftKey === true && event.keyCode === 9))) {
                $('.player-poster').hide();
            }

            var currentTime = getCurrentTime();

            var newTime;

            switch(event.keyCode) {

            case 13: // space
                playButtonClicked();
                break;
            case 33: // page up
                newTime = Math.min(currentTime/_options.duration + 0.1, 1);
                gotoTimeAsPercentage(newTime);
                break;
            case 34: // page down
                newTime = Math.max(currentTime/_options.duration - 0.1, 0);
                gotoTimeAsPercentage(newTime);
                break;
            case 39: // right
                newTime = Math.min(currentTime + 5, _options.duration);
                gotoTimeAsPercentage(newTime/_options.duration);
                break;
            case 37: // left
                newTime = Math.max(currentTime - 5, 0);
                gotoTimeAsPercentage(newTime/_options.duration);
                break;
            case 38: // up
                event.stopPropagation();
                event.preventDefault();
                newTime = Math.min(currentTime + 5, _options.duration);
                gotoTimeAsPercentage(newTime/_options.duration);
                break;
            case 40: // down
                event.stopPropagation();
                event.preventDefault();
                newTime = Math.max(currentTime - 5, 0);
                gotoTimeAsPercentage(newTime/_options.duration);
                break;
            case 36: // home
                if (_isPlaying)
                    $('.player-poster').hide();
                else
                    $('.player-poster').show();
                gotoTimeAsPercentage(0);
                break;
            case 35: // end
                gotoTimeAsPercentage(1);
                break;
            case 32: // space
                playButtonClicked();
                break;
            case 49: // 1
                gotoTimeAsPercentage(0.1);
                break;
            case 50: // 2
                gotoTimeAsPercentage(0.2);
                break;
            case 51: // 3
                gotoTimeAsPercentage(0.3);
                break;
            case 52: // 4
                gotoTimeAsPercentage(0.4);
                break;
            case 53: // 5
                gotoTimeAsPercentage(0.5);
                break;
            case 54: // 6
                gotoTimeAsPercentage(0.6);
                break;
            case 55: // 7
                gotoTimeAsPercentage(0.7);
                break;
            case 56: // 8
                gotoTimeAsPercentage(0.8);
                break;
            case 57: // 9
                gotoTimeAsPercentage(0.9);
                break;
            case 48: // 0
                if (_isPlaying)
                    $('.player-poster').hide();
                else
                    $('.player-poster').show();
                gotoTimeAsPercentage(0);
                break;
            }
        }

        // -- Keyboard control of the volume slider ----------

        function volThumbKeyDown(event) {

            if (event.keyCode !== 9) { // not tab
                event.stopPropagation();
                event.preventDefault();
            }

            if (event.shiftKey === true && event.keyCode === 9) { // shift + tab
                $('.player-vol-button').focus();
            }
            else if (event.keyCode === 38 || event.keyCode === 39) { // up / right
                adjustVolume(Math.min(_audioTrack.volume + 0.05, 1));
            }
            else if (event.keyCode === 40 || event.keyCode === 37) { // down / left
                adjustVolume(Math.max(_audioTrack.volume - 0.05, 0));
            }
            else if (event.keyCode === 33) { // page Up
                adjustVolume(Math.min(_audioTrack.volume + 0.1, 1));
            }
            else if (event.keyCode === 34) { // page Down
                adjustVolume(Math.max(_audioTrack.volume - 0.1, 0));
            }
        }

        // -- Handle other playback controls ----------

        function backButtonClicked(event) {
            if (!_isPlaying)
                $('.player-poster').show();
            gotoTimeAsPercentage(0);
        }

        function nextButtonClicked(event) {
            $('.player-poster').hide();
            gotoTimeAsPercentage(1);
            playEnded();
        }

        function timeThumbMouseDown() {
            $('.player-poster').hide();
            _isThumbDown = true;
        }

        function volThumbMouseDown(event) {
            event.stopPropagation();
            _isVolThumbDown = true;
        }

        function volumeButtonMouseDown(event){
            event.stopPropagation();
        }

        function muteButtonMouseDown(event){
            event.stopPropagation();
        }

        function muteButtonKeyDown(event) {
            if (event.shiftKey === true && event.keyCode === 9) { //shift + tab
                event.preventDefault();
                event.stopPropagation();
                if ($('.player-vol-slider .player-thumb').is(':visible'))
                    $('.player-vol-slider .player-thumb').focus();
                else
                    $('.player-next-button').focus();
            }
            else if (event.keyCode === 9) { //tab
                event.stopPropagation();
                $('.player-vol-button').focus();
            }
        }

        function documentKeyUp(event) {

            if (event.keyCode === 9) //tab
                $('.player-all-controls button').addClass('accessible');

            if (_volShowing) {
                var hideVolume = true;

                $('.vol-group').each(function(){
                    if (document.activeElement === this)
                        hideVolume = false;
                });

                if (hideVolume){
                    _volShowing = true;
                    volumeButtonClicked(null);
                }
            }
        }

        function documentMouseUp() {
            _isThumbDown = false;
            _isVolThumbDown = false;
        }

        function documentMouseDown() {
            volumeButtonClicked(null);
        }

        function documentMouseMove(event) {

            if (_isThumbDown) {
                event.stopPropagation();
                event.preventDefault();
                var eventX = getEventX(event);
                var percentage = getTimeTrackPercentageFor(eventX);
                gotoTimeAsPercentage(Math.min(percentage, 1));
            }
            else if (_isVolThumbDown) {
                event.stopPropagation();
                event.preventDefault();
                var eventY = getEventY(event);
                var percentage = getVolSliderPercentageFor(eventY);
                adjustVolume(1 - Math.max(0,Math.min(1,percentage)));
            }
        }

        function CCButtonClicked(event) {
            _showSubtitles = !_showSubtitles;

            if (_showSubtitles) {
                _subtitles.show();
                $('.player-CC-button').addClass('on');
                $('.player-CC-button').html('Turn off closed captioning');
            }
            else {
                _subtitles.hide();
                $('.player-CC-button').removeClass('on');
                $('.player-CC-button').html('Turn on closed captioning');
            }
        }

        function volumeButtonClicked(event) {

            if (_volShowing) {
                $('.player-vol-slider').animate({bottom: '-170px'}, 400, 'swing', function() {$('.player-vol-slider').hide();});
                $(document).off('mousedown', documentMouseDown);
                $('.player-vol-button').html('Show volume controls');
            }
            else {
                $('.player-vol-slider').show();
                $('.player-vol-slider').animate({bottom: '40px'}, 400, 'swing');
                $(document).on('mousedown', documentMouseDown);
                setTimeout( function() {
                    if (_isMuted)
                        $('.player-mute-button').focus();
                    else
                        $('.player-vol-slider .player-thumb').focus();
                }, 400);
                $('.player-vol-button').html('Hide volume controls');
            }
            _volShowing = !_volShowing;
        }

        // --- Fullscreen and resizing methods --------------------- 

        function fullscreenButtonClicked() {
            if (_isFullscreen)
                restoreFromFullscreen();
            else
                goFullscreen();
        }

        function goFullscreen() {
            var showFocus = (document.activeElement === $('.player-fullscreen-button')[0]);

            _subtitles.hide();

            _playerBase.addClass('no-shadow');
            $('.player-inner').appendTo('body');
            $('.player-inner').addClass('fullscreen');
            _playerBase.css('opacity', 0);

            $('.player-fullscreen-button').addClass('on');
            $('.player-fullscreen-button').html('Restore from full screen');

            if (_showSubtitles) {
                _subtitles.addClass('fullscreen');
                _subtitles.show();
            }

            _isFullscreen = true;

            fitIntoWindow();

            if(showFocus) {
                $('.player-fullscreen-button').focus();
            }
            trigger('maximizeComplete', null, null);
        }

        function restoreFromFullscreen() {

            var showFocus = (document.activeElement === $('.player-fullscreen-button')[0]);

            _subtitles.hide();

            $('.player-fullscreen-button').removeClass('on');
            $('.player-fullscreen-button').html('Go to full screen');
            $('.player-inner').appendTo('#player-base');
            $('.player-inner').removeClass('fullscreen');
            _playerBase.removeClass('no-shadow');
            _playerBase.css('opacity', 1);

            _subtitles.removeClass('fullscreen');

            if (_showSubtitles)
                _subtitles.show();

            _isFullscreen = false;

            fitIntoWindow();

            if(showFocus) {
                $('.player-fullscreen-button').focus();
            }

            trigger('restoreComplete', null, null);
        }

        function windowResized() {
            fitIntoWindow();
        }

        // -- Helpers --------------------------------------- 

        function fitIntoWindow() {

            var winWidth = $(window).innerWidth();
            var winHeight = $(window).innerHeight();
            var w;
            var h;
            var wScale;
            var hScale;
            var contentScale;

            // Scale and Set dimensions -------

            if (_isFullscreen) {

                w = Math.min(winWidth);
                h = Math.min(winHeight + 6 - _playerControls.height());
                wScale = w/_baseContentWidth;
                hScale = h/_baseContentHeight;

                contentScale = Math.min(wScale, hScale) + 0.005;

                scaleElem(_playerContent, contentScale);

                // Clear any hardwired widths
                _playerContent.css('width', '');
                $('.player-inner').css('width', '');
            }
            else {

                w = Math.min(winWidth + 2, _baseContentWidth);
                h = Math.min(winHeight + 6 - _playerControls.height(), _baseContentHeight);
                wScale = w/_baseContentWidth;
                hScale = h/_baseContentHeight;

                contentScale = Math.min(wScale, hScale);

                scaleElem(_playerContent, contentScale);

                // Elements' bounding boxes don't automatically resize when scaled, do that now
                _playerContent.height(_baseContentHeight * contentScale);
                _playerContent.width(_baseContentWidth * wScale);
                $('.player-inner').width(_baseContentWidth * wScale);

                // Hide Fullscreen button if the width takes up the window width
                if (wScale < 1) {
                    $('.player-fullscreen-button').hide();
                }
                else {
                    $('.player-fullscreen-button').show();
                }
            }

            // Center the animation -------------

            if (winWidth < _baseContentWidth){
                _playerContent.css('margin-left', (winWidth - (_baseContentWidth * contentScale))/2);
                _playerContent.css('margin-right', -(winWidth - (_baseContentWidth * contentScale))/2);
            }
            else  {
                _playerContent.css('margin-left', ($('.player-inner').width() - (_baseContentWidth * contentScale))/2);
                _playerContent.css('margin-right', -($('.player-inner').width() - (_baseContentWidth * contentScale))/2);
            }
            
            // Layout the controls -------------

            setTimeSliderWidth();
        }

        function setTimeSliderWidth() {

            var totalButtonWidth = 0;

            $('.player-controls > button').filter(':visible').each(function(){
                totalButtonWidth += $(this).outerWidth(true);
            });

            $('.player-time-slider').width($('.player-inner').innerWidth() - totalButtonWidth - _safariTimeSliderDiff);
        }

        function transElem(element, transform) {
            element.css('-webkit-transform', transform);
            element.css('-moz-transform', transform);
            element.css('-o-transform', transform);
            element.css('transform', transform);
            element.css('-ms-transform', transform);
        }

        function transOrigin(element, origin) {
            element.css('-webkit-transform-origin', origin);
            element.css('-moz-transform-origin', origin);
            element.css('-o-transform-origin', origin);
            element.css('transform-origin', origin);
            element.css('-ms-transform-origin', origin);
        }

        function scaleElem(element, scale, _origin) {
            var transform = 'scale(' + scale + ', ' + scale + ')';
            var origin = _origin || 'top left';
            transElem(element, transform);
            transOrigin(element, origin);
        }

        function clearScaleElem(element) {
            transElem(element, 'none');
        }

        function getVolSliderPercentageFor(eventY) {
            var playerBaseOffset = _playerBase.offset().top;
            var trackTop = $('.player-vol-slider .player-track').offset().top;
            var y = eventY - trackTop;
            var trackHeight =   $('.player-vol-slider .player-track').height();
            var percentage = y/trackHeight;
            return percentage;
        }

        function getTimeTrackPercentageFor(eventX) {
            // left side of the player
            var playerBaseOffset = _playerBase.offset().left;

            // unscaled left side of the track
            var trackLeft = $('.player-time-slider .player-track').offset().left;

            // position of cursor relative to the track
            var x = eventX - trackLeft;

            // unscaled width of the track
            var trackWidth = $('.player-time-slider .player-track').width();

            var percentage = x / trackWidth;

            return percentage;
        }

        function getEventX(event) {
            if (event.originalEvent.touches && event.originalEvent.touches[0].pageX)
                return event.originalEvent.touches[0].pageX;
            if(event.clientX)
                return event.clientX;
            if (event.originalEvent.layerX)
                return event.originalEvent.layerX;

            return 0;
        }

        function getEventY(event) {
            if (event.originalEvent.touches && event.originalEvent.touches[0].pageY)
                return event.originalEvent.touches[0].pageY;
            if(event.pageY)
                return event.pageY;
            if(event.clientY)
                return event.clientY;
            if (event.originalEvent.layerY)
                return event.originalEvent.layerY;

            return 0;
        }

        function pad(n, width, z) {
            z = z || '0';
            n = n + '';
            return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
        }

        // -- Audio Helpers ---------------------

        function createAudio() {
            _audioTrack = new Audio();
            _audioTrack.preload = 'auto';

            for (var i=0; i<_options.audio.length; i++) {
                var file = _options.audio[i];

                if (file.indexOf('.ogg') !== -1) {
                    if (_audioTrack.canPlayType('audio/ogg;')) {
                        _audioTrack.src = file;
                        break;
                    }
                }
                else if (file.indexOf('.mp3') !== -1) {
                    if (_audioTrack.canPlayType('audio/mpeg;')) {
                        _audioTrack.src = file;
                        break;
                    }
                }
            }
        }

        function playAudio() {
            if (_options.audio) {
                _audioTrack.play();
            }
        }

        function pauseAudio() {
            if (_options.audio) {
                _audioTrack.pause();
            }
        }

        function getCurrentTime() {
            if (_options.audio) {
                return (_audioTrack.currentTime * 1000 - _timelineDifference)/1000;
            }
            else {
                return _stage.getPosition() / 1000;
            }
        }

        // -- Event Plumbing -------------------

        function trigger(type, data) {
            $('#player-base').trigger(type, data);
        }

        function on(type, data, fn) {
            $('#player-base').on(type, data, fn);
        }

        function off(type, data, fn) {
            $('#player-base').off(type, data, fn);
        }

        function one(type, data, fn) {
            $('#player-base').one(type, data, fn);
        }

        function bind(type, data, fn) {
            $('#player-base').bind(type, data, fn);
        }

        function unbind(type, data, fn) {
            $('#player-base').unbind(type, data, fn);
        }

        // -- Expose Public functions ----------
        this.on = on;
        this.off = off;
        this.one = one;
        this.bind = bind;
        this.unbind = unbind;
        this.playButtonClicked = playButtonClicked;
        this.play = play;
        this.stop = stop;
        this.windowResized = windowResized;

    };

})();
