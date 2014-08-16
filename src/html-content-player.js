(function($) {

  // Get the current path of this file. Used to load other dependent files like the player structure html.
  // In the moment when the current script is being executed, it will be the last script element in the DOM
  var scripts = document.getElementsByTagName('script'),
  _jsPath = scripts[scripts.length-1].src;
  _jsPath = _jsPath.replace(/[^\/]*$/,'');

  // initialize player plugin
  $.widget("ui.htmlcontentplayer", {

    // default options
    options: {
      playableElement: null, // animation's stage (required)
      duration: null,        // in seconds (required)
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
      fullScreen: false
    },

    _create: function() {
      if (this.options.duration === null)
        throw(": Please set the htmlcontentplayer's \"duration\" property manually to the length of the audio track in seconds");

      if (this.options.playableElement === null)
        throw(": Please set the htmlcontentplayer's \"playableElement\" property to the animation's stage");

      // Switch to module pattern
      this.options.element = this.element;
      this.htmlContentPlayer = HtmlContentPlayer(this.options, this); // instance
    },

    play: function(time) {
      if (time)
        this.htmlContentPlayer.playFrom(time);
      else
        this.htmlContentPlayer.play();
    },

    stop: function(){
     this.htmlContentPlayer.stop();
    },

    destroy: function() {return this.htmlContentPlayer.destroy();}

    //windowResized: function() { return this.htmlContentPlayer.windowResized(); }
  });

  //-------------------------------------------------------------
  //   Html5ContentPlayer "class"
  //-------------------------------------------------------------
  //
  //    The pattern is switched to the Module Pattern to facilitate
  //    writing and maintaining the code.
  //
  // -----------------------------------------------------
  //
  // Audio Kludge (Jan 2013) ----------
  //
  // We have a major kludge in here for making Safari (desktop and iOS) behave with repect to
  // changing time on the timeslider.  The issue is that when we manually set the currentTime
  // of the audio object, such as when the user click on the time slider, Safari would jump to
  // the wrong point in the audio file.  We were not able to get to the heart of the problem,
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

  function HtmlContentPlayer(_options, widget){

    // Cache frequently used elements
    var _playerContent;
    var _playerControls;
    var _anim = $('#Stage');
    var _playButton;
    var _muteButton;
    var _audioTrack;
    var _progressBar;
    var _subtitles;
    var _currentTime;
    var _timeThumb;
    var _volThumb;

    // Useful member variables
    var _stage = _options.playableElement;
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
    var _totalButtonWidth = 0;
    var _lastVolume = 0.75;
    var _safariTimeSliderDiff = 0;
    var _playerScale = 1.0;

    function init(){

      // Load SRT file, if available
      // if (_options.srt) {
      //   $.getScript(_jsPath + 'parseSRT.js', function(data, textStatus, jqxhr){
      //     $.get(_options.srt, function(srtData) {
      //       initSubtitles(srtData);
      //     });
      //   });
      // }

      // Load the html template and build the player DOM
      $.get(_jsPath + 'html-content-player-structure.html', function(template) {
        $(_options.element).append(template);

        // Check if Stage has "Responsive Scaling" set
        if (_stage.options.data.scaleToFit !== undefined && _stage.options.data.scaleToFit !== 'none') {
          _anim.hide();
          $('#player-base').addClass('no-spin');
          $('.player-alert').html('Your stage has "Responsive Scaling" set, please disable that option in Edge Animate.').show();
          return;
        }

        // Check if Stage has "Center Stage" set
        if (_stage.options.data.centerStage !== undefined && _stage.options.data.centerStage !== 'none') {
          _anim.hide();
          $('#player-base').addClass('no-spin');
          $('.player-alert').html('Your stage has the "Center Stage" option set, please disable that option in Edge Animate.').show();
          return;
        }
        layoutReady();
        widget._trigger('playerDOMReady', null, null);
      });
    }

    function layoutReady() {
      // Cache frequently used elements
      _playerContent = $('.player-content');
      _playerControls = $('.player-controls');
      _playButton = $('.player-play-button');
      _muteButton = $('.player-mute-button');
      _audioTrack = $('#narration')[0];
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
      $(_audioTrack).on('timeupdate', timeUpdated);
      $(_audioTrack).on('ended', playEnded);
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

      // Reparent the animation div
      _playerContent.append(_anim);

      // Set initial Volume
      adjustVolume(0.75);

      // detect Safari on Windows
      if (navigator.vendor && navigator.vendor.match(/Apple/i) && navigator.userAgent.match(/Windows/i)){
        _safariTimeSliderDiff = 42;
      }

      // detect iOS
      if(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i)) {
         $('.player-inner').addClass('ios');
         $('.player-vol-button').remove();
      }

      // detect Android
      if (navigator.userAgent.match(/Android/i)) {
        $('.player-inner').addClass('android');
        $('.player-vol-button').remove();
      }

      // Start our Safari audioFix kludge
      if (navigator.vendor && navigator.vendor.match(/Apple/i)) {
        _audioTrack.play();
        _audioTrack.pause();
        _useAudioKludge = true;
      }

      // use kludge on Windows Vista IE9 
      if (navigator.userAgent.match(/Windows NT 6.0/i) && navigator.userAgent.match(/MSIE 9.0/i)){
        _useAudioKludge = true;
      }

      // Init slider accessibility
      _timeThumb.attr('aria-valuemin', 0);
      _timeThumb.attr('aria-valuemax', _options.duration);
      _volThumb.attr('aria-valuenow', 75);

      // Javascript-based flexible timeslider width (for Accessibility & IE9 doesn't support flexible box model)
      setTimeSliderWidth();

      // Set inital states using arguments ----

      if (_options.autoPlay)
        playButtonClicked();

      if (_options.mute)
        muteButtonClicked();

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

      $('.animation').show();

      if (_options.startTime)
        playFrom(_options.startTime);

      if (_options.fullScreen) {
        goFullscreen();
        windowResized();
      }

      //hide loading spinner
      $('#player-base, .player-inner').css('background-image', 'none');
    }


    /* --- Core Methods ---------------------------------- */

    // -- Animation "ticks" -----------
    function _timeUpdated(event) {
      
      var currentTime = (_audioTrack.currentTime * 1000 - _timelineDifference)/1000;

      // Small accomodation for IE, where it reports the incorrect duration, but doesn't need the full audio kludge.
      if (currentTime >= _options.duration) {
        _audioTrack.pause();
        _subtitles.html('');
        playEnded();
        return;
      }

      // Keep audio and video in sync.  We're essentially using a similar technique
      // that real video uses.  Every so often the player will sync the video to the
      // audio's current time.  Real video stores a keyframe value that says how many
      // frames are between these syncs.  We are using a set value of 40, which works
      // out to arround 7 secs on most browsers.
      if (_keyframeElapsed > 40) {

        if (_isPlaying) {
          playAll(currentTime * 1000);
          if (_options.triggerOnSync)
            widget._trigger('played', null, currentTime * 1000);
        }
        else {
          stopAll(currentTime * 1000);
          if (_options.triggerOnSync)
            widget._trigger('paused', null, currentTime * 1000);
        }

        _keyframeElapsed = 0;
      }

      _keyframeElapsed = _keyframeElapsed + 1;

      _progressBar.width(currentTime/_options.duration * 100 + '%');

      if (_showSubtitles)
        _subtitles.html(getSubtitle(currentTime));

      var mins = Math.floor(currentTime/60)<10?"" + Math.floor(currentTime/60):Math.floor(currentTime/60);
      var secs = Math.floor(currentTime-(mins*60))<10?"" + Math.floor(currentTime-(mins*60)):Math.floor(currentTime-(mins*60));

      if (_options.showTime)
        _currentTime.text(pad(mins,2) + ':' + pad(secs,2));

      _timeThumb.attr('aria-valuenow', Math.floor(currentTime));
      _timeThumb.attr('aria-valuetext', mins + ' minutes ' + secs + ' seconds');
    }

    function timeUpdated(event) {
      try {
        _timeUpdated(event);
      } catch(e) {
        console.log("error during timeUpdated:", e);
      }
      
    }

    // --- gotoTimeAsPercentage() ----------------
    function gotoTimeAsPercentage(percentage) {

      if (percentage <= 0 ) {
        _subtitles.html('');
        percentage = 0.001;
      }

      // Update progress bar position
      _progressBar.width(percentage * 100 + '%');

      // Change the audio track's current time.  Safari needs a
      // kludge to correctly report the audio's currentTime
      if (_useAudioKludge && _audioTrack.duration && !isNaN(_audioTrack.duration))
        _audioTrack.currentTime = _audioTrack.duration * percentage;
      else
        _audioTrack.currentTime = _options.duration * percentage;

      // Change the stage's current time
      if (_isPlaying) {
        playAll(_options.duration * percentage * 1000);
        widget._trigger('played', null, _options.duration * percentage * 1000);
      }
      else {
        stopAll(_options.duration * percentage * 1000);
        widget._trigger('paused', null, _options.duration * percentage * 1000);
      }

      // Keep track of the necessary offset required to make Safari happy
      if (_useAudioKludge && _audioTrack.duration && !isNaN(_audioTrack.duration))
        _timelineDifference = _audioTrack.currentTime * 1000 - _stage.getPosition();

      _playEnded = false;
    }

    function play() {
      if (_playEnded) {
        playAgain();
        _playEnded = false;
      }

      $('.player-poster').hide();
      _isPlaying = true;
      playAll();
      _audioTrack.play();
      widget._trigger('played', null, null);
      _playButton.addClass('paused');
      _playButton.html('Pause');
    }

    function playFrom(time) {
      _isPlaying = true;
      gotoTimeAsPercentage((time/1000)/_options.duration);
    }

    function stop() {
      _isPlaying = false;
      _audioTrack.pause();
      stopAll();
      widget._trigger('paused', null, null);
      _playButton.removeClass('paused');
      _playButton.html('Play');
    }

    function playAgain() {
      gotoTimeAsPercentage(0);
    }

    function playEnded() {
      stopAll();
      widget._trigger('paused', null, null);
      _playButton.removeClass('paused');
      _isPlaying = false;
      _playEnded = true;
    }


    function playAll(newTime, symbol) {
      //  Support for:
      //    + Play
      //    - playFrom
      //    - playReverse
      //    + play triggers from correct time after seek
      //    + multiple trigger scenarios on the same symbol?
      //    + looping symbols (action within to go to a position) - we stop these, but can't play
      //    + prematurely stopped symbol (with trigger)
      //    + grandchildren
      //    - auto play?

      symbol = symbol || _stage;
      newTime = newTime || symbol.getPosition();

      symbol.play(newTime);

      // Get child symbols that should be playing right now (based on their trigger values)
      var playableSymbols = getPlayableSymbols(newTime, symbol);

      // loop through the array of playableSymbols and play them
      for (var k = 0, len = playableSymbols.length; k < len; k++) {
        var childSymbol = playableSymbols[k].symbol;
        var triggerPosition = playableSymbols[k].position;

        // get the child's 
        var childNewTime = newTime - triggerPosition;

        // Play the symbol and its children
        playAll(childNewTime, childSymbol);
      }
    }

    function stopAll(newTime, symbol) {
      symbol = symbol || _stage;
      newTime = newTime || symbol.getPosition();

      symbol.stop(newTime);

      // Get child symbols that should be playing right now (based on their trigger values)
      var playableSymbols = getPlayableSymbols(newTime, symbol);

      // loop through the array of playableSymbols and stop them
      for (var k = 0, len = playableSymbols.length; k < len; k++) {
        var childSymbol = playableSymbols[k].symbol;
        var triggerPosition = playableSymbols[k].position;

        // get the child's 
        var childNewTime = newTime - triggerPosition;

        // stop the symbol and its children
        stopAll(childNewTime, childSymbol);
      }

      // Stop any remaining symbols, such as looping symbols
      symbol.stopAll();

    }

    function getPlayableSymbols(newTime, symbol) {
      // By looping through the triggers, determine what child symbols need to be playing and
      // calculate the time that they should play from.
      var playableSymbols = [];

      // get all of the timelines for this symbol, sort them by position
      var timelines = symbol.timelines['Default Timeline'].timeline.sort();

      // Go through the timeline and focus on triggers (as opposed to tweens)
      for (var i = 0, length = timelines.length; i < length; i++) {
        var timeline = timelines[i];
        if (!timeline.trigger) continue;

        // Get the action (play, stop) from the trigger. How we are doing this is brittle. Unfortunately Edge does not give us any helpers here.
        var triggerAction = timeline.trigger[1][0];

        // Get the selector name from the trigger (strip off extra junk)
        var selector = timeline.trigger[1][1].replace(/[\$\{\}]/g, '').replace(/^_/, '');
        var triggerSymbol = symbol.getSymbol(selector);

        if (triggerAction === 'play' || triggerAction === 'playReverse') {

          var timelineEnd = timeline.position + triggerSymbol.getDuration();

          // if the newTime falls within the symbol, add the symbol name to the array of symbols to play.
          // TODO: take into account stop triggers
          if (newTime > timeline.position && newTime < timelineEnd) {
            // TODO: check if duplicate, only push if not.
            playableSymbols.push({ symbol: triggerSymbol,
                                   position: timeline.position });
          }

          // if the newTime is before the symbol, set the symbol time to 0
          else if (newTime <= timeline.position) {
            triggerSymbol.seek(0);
          }

          // if the newTime is after the symbol, set the symbol time to the duration
          // TODO: take into account stop triggers
          else if (newTime >= timelineEnd) {
            triggerSymbol.seek(timelineEnd);
          }
        }

        if (triggerAction === 'stop') {

          if (newTime > timeline.position) {
            
            // Make symbol's time match the stop trigger time
            triggerSymbol.seek(timeline.position);

            // Remove the symbol from the playableSymbol's array (if its there)
            for (var k=0; k < playableSymbols.length; k++) {
              if (playableSymbols[k].symbol === triggerSymbol) {
                playableSymbols.splice(k,1);
              }
            }
          }
        }

      }

      return playableSymbols;
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

    /* --- Event Handlers -------------------------------- */

    function playButtonClicked() {      
      if (_isPlaying)
        stop();
      else
        play();
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
      // var y = (event.offsetY) ? event.offsetY : event.originalEvent.layerY;
      // var percentage = y/$('.player-vol-slider .player-track').height();
      var eventY = getEventY(event);
      var percentage = getVolSliderPercentageFor(eventY);

      adjustVolume(1-percentage);
    }

    // Keyboard control of the time slider ----------

    function timeThumbKeyDown(event) {
      event.stopPropagation();

      // Hide poster if it is any key anything except tab or shift + tab
      if (!((event.keyCode === 9) || (event.shiftKey === true && event.keyCode === 9)))
        $('.player-poster').hide();

      var currentTime = (_audioTrack.currentTime * 1000 - _timelineDifference)/1000;
      var newTime;

      switch(event.keyCode)
      {
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

    // Keyboard control of the volume slider ----------

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

    function backButtonClicked(event) {
      if (!_isPlaying)
        $('.player-poster').show();
      gotoTimeAsPercentage(0);
    }

    function nextButtonClicked(event) {
      // console.log("next button clicked");
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
        // var x = eventX - $('.player-time-slider .player-track').offset().left;
        // var percentage = x/$('.player-time-slider .player-track').width();
        var percentage = getTimeTrackPercentageFor(eventX);
        gotoTimeAsPercentage(Math.min(percentage, 1));
      }
      else if (_isVolThumbDown) {
        event.stopPropagation();
        event.preventDefault();
        var eventY = getEventY(event);
        // var y = eventY - $('.player-vol-slider .player-track').offset().top;
        // var percentage = y/$('.player-vol-slider .player-track').height();
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
        $('.player-vol-slider').animate({bottom: '-170px'}, 400, 'easeInQuad', function() {$('.player-vol-slider').hide();});
        $(document).off('mousedown', documentMouseDown);
        $('.player-vol-button').html('Show volume controls');
      }
      else {
        $('.player-vol-slider').show();
        $('.player-vol-slider').animate({bottom: '40px'}, 600, 'easeOutExpo');
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

      $('.player-controls *').hide();
      _subtitles.hide();

      var bodyWidth = $(window).width();
      var bodyHeight = $(window).height() - $('.player-controls').height();

      var scale = Math.min(bodyWidth/_anim.width(), bodyHeight/_anim.height());
      scalePlayer(scale);

      $('#player-base').addClass('no-shadow');
      $('.player-inner').appendTo('body');
      $('.player-inner').addClass('fullscreen');
      $('#player-base').css('opacity', 0);

      $('.player-fullscreen-button').addClass('on');
      $('.player-fullscreen-button').html('Restore from full screen');

      if (_showSubtitles) {
        _subtitles.addClass('fullscreen');
        _subtitles.show();
      }

      scalePlayer(1.0);
      scaleElem(_anim, scale);
      scaleElem(_subtitles, scale, 'left ' + (_subtitles.height()) + 'px');

      _anim.css('left', (bodyWidth - _anim.width()*scale)/2);
      _subtitles.css('left', (bodyWidth - _anim.width()*scale)/2);
      _subtitles.css('bottom', 42-$('.player-controls').height()*scale);

      setTimeSliderWidth();

      $('.player-controls *').show();

      if(showFocus)
        $('.player-fullscreen-button').focus();

      _isFullscreen = true;
      widget._trigger('maximizeComplete', null, null);
    }

    function restoreFromFullscreen() {

      var showFocus = (document.activeElement === $('.player-fullscreen-button')[0]);

      $('.player-controls *').hide();
      _subtitles.hide();

      $('.player-fullscreen-button').removeClass('on');
      $('.player-fullscreen-button').html('Go to full screen');
      $('.player-inner').appendTo(_options.element);
      $('.player-inner').removeClass('fullscreen');
      $('#player-base').removeClass('no-shadow');
      $('#player-base').css('opacity', 1);

      _anim.css('left',0);
      _subtitles.css('left', 0);
      _subtitles.css('bottom', 0);

      var scale = _anim.width()/_playerContent.width();
      // scaleElem($('#player-base'), scale);
      scalePlayer(scale);
      scaleElem(_anim, 1.0);
      scaleElem(_subtitles, 1.0);

      _subtitles.removeClass('fullscreen');

      if (_showSubtitles)
        _subtitles.show();

      setTimeSliderWidth();
      $('.player-controls *').show();

      if(showFocus)
        $('.player-fullscreen-button').focus();

      _isFullscreen = false;
      widget._trigger('restoreComplete', null, null);
    }


    function windowResized() {
      if (_isFullscreen) {
        var bodyWidth = $(window).width();
        var bodyHeight = $(window).height() - $('.player-controls').height();

        var scale = Math.min(bodyWidth/_anim.width(), bodyHeight/_anim.height());
        var _subs = $(".player-subtitles");

        scalePlayer(1.0);
        scaleElem(_anim, scale);
        scaleElem(_subs, scale, 'left ' + (_subs.height()) + 'px');

        _anim.css('left', (bodyWidth - _anim.width()*scale)/2);
        _subs.css('left', (bodyWidth - _anim.width()*scale)/2);
        _subs.css('bottom', 42-$('.player-controls').height()*scale);

        setTimeSliderWidth();

        // Notify the outside world. Send the scaled stage dimensions.
        // Currently used by the iframe in the Habitat CMS environment.
        widget._trigger('windowResized', null, { 
          stageWidth: _anim.width() * scale,
          stageHeight: _anim.height() * scale,
          controlsWidth: _playerControls.width(),
          controlsHeight: _playerControls.height(),
        });

      } else {
        var win = $(window);
        var w = Math.min(win.width(), 638);
        var h = Math.min(win.height(), 523);
        var s = Math.min(w/638.0, h/523.0);

        scalePlayer(s);
        $("#animation-container").height(523 * s);
      }

    }

    /* --- Helpers --------------------------------------- */
    function getVolSliderPercentageFor(eventY) {
      var playerBaseOffset = $("#player-base").offset().top;
      var trackTop = $('.player-vol-slider .player-track').offset().top;
      var y = eventY - trackTop;
      var trackHeight =   $('.player-vol-slider .player-track').height();
      var trackHeightActual = trackHeight * _playerScale;
      // var y = (event.offsetY) ? event.offsetY : event.originalEvent.layerY;
      var percentage = y/trackHeightActual;
      return percentage;
    }


    function getTimeTrackPercentageFor(eventX) {
        // left side of the player
        var playerBaseOffset = $("#player-base").offset().left;

        // unscaled left side of the track
        var trackLeft = $('.player-time-slider .player-track').offset().left;

        // scaled position of the left side of the track
        // var trackLeftActual = playerBaseOffset + (trackLeft - playerBaseOffset) * _playerScale;

        // position of cursor relative to the track
        var x = eventX - trackLeft;

        // unscaled width of the track
        var trackWidth = $('.player-time-slider .player-track').width();

        // scaled width of the track
        var trackWidthActual = trackWidth * _playerScale;

        var percentage = x / trackWidthActual;

        return percentage;
    }


   function transElem(element, transform) 
    {
      element.css('-webkit-transform', transform);
      element.css('-moz-transform', transform);
      element.css('-o-transform', transform);
      element.css('transform', transform);
      element.css('-ms-transform', transform);
    }

    function transOrigin(element, origin) 
    {
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

    function scalePlayer(scale) {
      _playerScale = scale;
      scaleElem($("#player-base"), scale);
      scaleElem($("#player-subtitles"), scale, 'bottom left');
    }

    function clearScalePlayer() {
      scalePlayer(1.0);
    }

    function clearScaleElem(element) {
      transElem(element, 'none');
    }


    function getEventX(eve) {
      if (eve.originalEvent.touches && eve.originalEvent.touches[0].pageX)
        return eve.originalEvent.touches[0].pageX;
      if(eve.clientX)
        return eve.clientX;
      if (eve.originalEvent.layerX)
        return eve.originalEvent.layerX;

      return 0;
    }

    function getEventY(eve) {
      if (eve.originalEvent.touches && eve.originalEvent.touches[0].pageY)
        return eve.originalEvent.touches[0].pageY;
      if(eve.pageY)
        return eve.pageY;
      if(eve.clientY)
        return eve.clientY;
      if (eve.originalEvent.layerY)
        return eve.originalEvent.layerY;

      return 0;
    }

    function pad(n, width, z) {
      z = z || '0';
      n = n + '';
      return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    function setTimeSliderWidth() {
      if (_totalButtonWidth === 0 ) {
        $('.player-controls > button').each(function(){
          _totalButtonWidth += $(this).outerWidth(true);
        });
      }

      $('.player-time-slider').width($('.player-controls').innerWidth() - _totalButtonWidth - _safariTimeSliderDiff);
    }

    // -- Destroy --------------------------------------

    function destroy() {

    }

    // -- Make init the constructor --------------------

    init();

    // -- Public Functions -----------------------------
    return {
      destroy: destroy,
      playButtonClicked: playButtonClicked,
      play: play,
      playFrom: playFrom,
      stop: stop,
      init: init,
      windowResized: windowResized
    };

  }

})(jQuery);
