(function($) {

  // initialize player plugin
  $.widget("ui.texturesheetanim", {

    // default options
    options: {
      cellWidth: 16,
      cellHeight: 16,
      rows: 1,
      columns: 1,
      frames: 0,
      frameRate: 24,
      src: null
    },

    // Switch to module pattern
    _create: function() {
      this.options.element = this.element;
      this.textureSheetAnim = TextureSheetAnim(this.options); // instance
    },

    destroy: function() {return this.textureSheetAnim.destroy();},

    start: function() {return this.textureSheetAnim.start();},

    stop: function() {return this.textureSheetAnim.stop();},

    reset: function() {return this.textureSheetAnim.reset();}

  });

  // ----------------------------------------------------
  // The pattern is switched to the Module Pattern in
  // order to improve code cleanliness and to avoid 'this'
  // -----------------------------------------------------
  function TextureSheetAnim(_options) {

    var _el,
        _curRow = 0,
        _curCol = 0,
        _curFrame = 0,
        _running = false;

    function init(){
      _el = _options.element[0];

      _el.style.backgroundRepeat = 'no-repeat';
      _el.style.backgroundImage = 'url(' + _options.src + ')';

      _el.style.backgroundPosition = '0px 0px';

      $(window).blur(function() {
        _running = false;
      });
    }

    function start() {
      if (!_running) {
        _running = true;
        animate();
      }
    }

    function stop() {
      _running = false;
    }

    function reset() {
      _curRow = 0;
      _curCol = 0;
      _curFrame = 0;
      _el.style.backgroundPosition = '0px 0px';
    }

    function animate(){

      setTimeout(function() {

        if (_running) {
          animate();
          nextFrame();
        }

      }, 1000/_options.frameRate);
    }

    function nextFrame() {
      var nextRow = false;

      _curCol++;

      if (_curCol >= _options.columns) {
        _curCol = 0;
        nextRow = true;
      }

      if (nextRow) {
        _curRow++;
        if (_curRow >= _options.rows)
          _curRow = 0;
      }

      _curFrame++;

      if (_curFrame >= _options.frames) {
        _curFrame = 0;
        _curRow = 0;
        _curCol = 0;
      }

      _el.style.backgroundPosition = '-' + _curCol * _options.cellWidth + 'px -' + _curRow * _options.cellHeight + 'px';
    }

    // -- Destroy --------------------------------------

    function destroy() {

    }

    // -- Make init the constructor --------------------

    init();

    // -- Public Functions -----------------------------

    return {
      destroy: destroy,
      start: start,
      stop: stop,
      reset: reset
    };

  }
})(jQuery);