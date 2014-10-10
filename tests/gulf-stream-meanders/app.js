/*
* PEARSON CONFIDENTIAL
*
* Copyright 2013 Pearson Education, Inc.
* All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Pearson Education, Inc. and/or its subsidiaries,
* affiliates, or assigns (collectively “Pearson Education”), and are
* protected, without limitations, pursuant to U.S. and foreign
* copyright and trademark laws. Dissemination of this information or
* reproduction of this material is strictly forbidden unless prior
* written permission is obtained from Pearson Education, Inc.
* See website how to request for permission:
* http://www.pearsoned.com/permissions/.
*
*/

// Module pattern
var app = (function($){
'use strict';

  // See Notes at bottom of this document

  var _stage;

  // Texture sheet variables
  var _flowFramesWide;
  var _flowFramesCloseUp;
  var _flowWideParent;
  var _flowCloseUpParent;
  var _isFlowWideStarted = false;
  var _isFlowCloseUpStarted = false;

  // 3D animation variables
  var _is3dPaused = false;
  var _supports3d = false;
  var _earthParent;
  var _rotationHelper;
  var _titleOpacityHelper;
  var _titleMaterial;
  var camera, scene, renderer, composer, earthMesh, cloudsMesh, meshGroup;
  var parent3d;


  // ---------------------------------------------------
  //   "Constructor" ---
  // ---------------------------------------------------

  function init(opts) {
    var onMaximizeComplete = opts.onMaximizeComplete;
    var onRestoreComplete = opts.onRestoreComplete;
    var onPlayerDOMReady = opts.onPlayerDOMReady;

    AdobeEdge.bootstrapCallback(function (compId) {

      _is3dPaused = false;
      _earthParent = $('#Stage_EarthParent');
      _rotationHelper = $('#Stage_Earth3DRotationHelper')[0];
      _titleOpacityHelper = $('#Stage_Title3DOpacityHelper')[0];
      _stage = AdobeEdge.getComposition(compId).getStage();

      // TODO: Make 3D work again
      _supports3d = false; //browserSupportsWebGL();

      // Instantiate Player
      var player = new HtmlContentPlayer({duration: 144, 
                                          animation: _stage,
                                          audio: ['Narration.ogg', 'Narration.mp3'],
                                          poster: './images/Poster.jpg',
                                          srt: './images/Narration.srt',
                                          mute: false});

      player.on('played', playerPlayed);
      player.on('paused', playerPaused);
      player.on('maximizeComplete', onMaximizeComplete);
      player.on('restoreComplete', onRestoreComplete);
      player.on('playerDOMReady', onPlayerDOMReady);

      // Start 3D scene, if WebGL is supported
      if (_supports3d) {
        $('#Stage_EarthNot3D').css("opacity", 0);
        $('#Stage_EarthNot3D').css("visibility", "hidden");
        $('#Stage_TextGulfStream').css("visibility", "hidden");
        parent3d = document.getElementById('Stage_EarthParent');
        parent3d.appendChild( $('<canvas class="webgl-canvas" width="640" height="480" style="width: 640px; height: 480px;"></canvas>')[0] );
        init3DScene();
        renderer.domElement.addEventListener("webglcontextlost", handleContextLost, false);
        renderer.domElement.addEventListener("webglcontextrestored", handleContextRestored, false);
      }
      else {
        _earthParent.css("visibility", "hidden");
        $('#Stage_TextGulfStream').css("visibility", "visible");
      }

      // detect iOS and if so, load a reduced-size texture sheet
      if(navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Silk/i)) {
        _flowWideParent = $('#Stage_FlowWideParentiOS');
        _flowCloseUpParent = $('#Stage_FlowCloseUpParentiOS');
        
        _flowFramesWide = _flowWideParent.texturesheetanim({src:'./images/FlowFramesWideiOS.png', columns: 6, rows: 4, frames: 24, frameRate: 12, cellWidth: 320, cellHeight: 240}).data('ui-texturesheetanim');
        _flowFramesCloseUp = _flowCloseUpParent.texturesheetanim({src:'./images/FlowFramesCloseUpiOS.jpg', columns: 6, rows: 7, frames: 42, frameRate: 8, cellWidth: 320, cellHeight: 240}).data('ui-texturesheetanim');
      }
      else {
        _flowWideParent = $('#Stage_FlowWideParent');
        _flowCloseUpParent = $('#Stage_FlowCloseUpParent');

        _flowFramesWide = _flowWideParent.texturesheetanim({src:'./images/FlowFramesWide.png', columns: 6, rows: 4, frames: 24, frameRate: 12,cellWidth: 640, cellHeight: 480}).data('ui-texturesheetanim');
        _flowFramesCloseUp = _flowCloseUpParent.texturesheetanim({src:'./images/FlowFramesCloseUp.jpg', columns: 6, rows: 7, frames: 42, frameRate: 8, cellWidth: 640, cellHeight: 480}).data('ui-texturesheetanim');
      }

      // replace svgs with pngs
      $("#Stage_MapDetails").css("background-image", "url(./images/MapDetails.png)");
      $("#Stage_WarmWaterFlow").css("background-image", "url(./images/WarmWaterFlow.png)");
      // $("#").css("-webkit-transform", "translateZ(3px)");
      // console.log(navigator.userAgent, navigator.userAgent.match('/Chrome/i'));
      // if(navigator.userAgent.indexOf('Chrome') == -1) {
      transElem($("#Stage_TextWarmWater"), "translateZ(1px)");
      $("#Stage_TextWarmWater").css("pointer-events", "none");
      //}
      

      // replace all SVGs with PNGs on IE for resizing bug
      if(navigator.userAgent.match(/MSIE 9/i)) {
        $("#Stage_BlackArrowsWithEddies").css("background-image", "url(./images/BlackArrowsWithEddies.png)");
        $("#Stage_CapeHatteras").css("background-image", "url(./images/CapeHatteras.png)");
        $("#Stage_ColdCoreCallout").css("background-image", "url(./images/ColdCoreCallout.png)");
        $("#Stage_ColdCores").css("background-image", "url(./images/ColdCores.png)");
        $("#Stage_Florida").css("background-image", "url(./images/Florida.png)");
        $("#Stage_GulfDottedLine").css("background-image", "url(./images/GulfDottedLine.png)");
        $("#Stage_GulfStreamCallout").css("background-image", "url(./images/GulfStreamCallout.png)");
        $("#Stage_HeatMapLegend").css("background-image", "url(./images/HeatMapLegend.png)");
        $("#Stage_MapScale").css("background-image", "url(./images/MapScale.png)");
        $("#Stage_WarmCore").css("background-image", "url(./images/WarmCore.png)");
        $("#Stage_WarmCoreCallout").css("background-image", "url(./images/WarmCoreCallout.png)");
        $("#Stage_WarmLabel").css("background-image", "url(./images/WarmLabel.png)");
        $("#Stage_WarmWaterFlowWithEddiesCopy").css("background-image", "url(./images/WarmWaterFlowWithEddies.png)");
      }
      

      // Events for testing the loss and restoration of the WebGL context
      // $('.destroy-context-btn').on('click', destroyContext);
      // $('.restore-context-btn').on('click', restoreContext);
    });
  }

  // ---------------------------------------------------
  //   Handle Player Events ---
  // ---------------------------------------------------

  function playerPlayed(e, time) {

    if (_flowWideParent.is(':visible'))
      startFlowWideAnim();
    else
      stopFlowWideAnim();

    if (_flowCloseUpParent.is(':visible'))
      startFlowCloseUpAnim();
    else
      stopFlowCloseUpAnim();

    if (_earthParent.is(':visible'))
      _is3dPaused = false;
    else
      _is3dPaused = true;
  }

  function playerPaused(e) {
    _flowFramesWide.stop();
    _flowFramesCloseUp.stop();

    _isFlowWideStarted = false;
    _isFlowCloseUpStarted = false;
  }


  // ---------------------------------------------------
  //   3D Earth Animation ---
  // ---------------------------------------------------

  function init3DScene() {

    var sceneWidth = $('#Stage_EarthParent').width();
    var sceneHeight = $('#Stage_EarthParent').height();

    camera = new THREE.PerspectiveCamera( 60, sceneWidth / sceneHeight, 1, 10000 );
    camera.position.x = -200;
    camera.position.y = 200;
    camera.position.z = 315;
    scene = new THREE.Scene();
    meshGroup = new THREE.Object3D();
    scene.add( meshGroup );

    var cloudsOverdraw = true;

    // Renderer --------------------

    renderer = new THREE.WebGLRenderer({antialias: true, canvas: $('.webgl-canvas')[0]});
    renderer.setSize( sceneWidth, sceneHeight );

    // Lights ---------------------

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 1.2 );
    directionalLight.position.set( -4, 1, 1 );
    meshGroup.add( directionalLight );

    var ambientLight = new THREE.AmbientLight( 0x000000 );
    meshGroup.add( ambientLight );

    // earth ----------------------

    var earthGeometry = new THREE.SphereGeometry( 200, 40, 40 );
    var earthMaterial = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('images/textures/Earth_Diffuse_sm.jpg'),
                                             specularMap: THREE.ImageUtils.loadTexture('images/textures/E_spec_sm.jpg'),
                                                specular: 0xFFFFFF, overdraw: true});

    earthMesh = new THREE.Mesh( earthGeometry, earthMaterial );
    meshGroup.add( earthMesh );

    // Cloud Cover -----------------

    var cloudsGeometry = new THREE.SphereGeometry( 202, 40, 40 );
    var cloudsMaterial = new THREE.MeshPhongMaterial({color: 0xFFFFFF,
                                                        map: THREE.ImageUtils.loadTexture('images/textures/E_clouds_sm.png'),
                                                        opacity: 1, overdraw: true, transparent: true,
                                                        shading: THREE.SmoothShading,
                                                        blending: THREE.NormalBlending});

    cloudsMesh = new THREE.Mesh( cloudsGeometry, cloudsMaterial );
    meshGroup.add( cloudsMesh );

    // Title -----------------------

    var titleGeometry = new THREE.PlaneGeometry( 400, 72, 40, 7 );
    _titleMaterial = new THREE.MeshPhongMaterial({map: THREE.ImageUtils.loadTexture('images/textures/title.png'), opacity: 1, transparent: true});
    var titleMesh = new THREE.Mesh( titleGeometry, _titleMaterial );
    meshGroup.add( titleMesh );

    titleMesh.position.x = -140;
    titleMesh.position.y = 130;
    titleMesh.position.z = 270;
    titleMesh.rotation.x = deg2rad(-32);
    titleMesh.rotation.y = deg2rad(-26);
    titleMesh.rotation.z = deg2rad(-16.8);
    titleMesh.scale.x = 0.3;
    titleMesh.scale.y = 0.3;
    titleMesh.scale.z = 1;
  }

  // ---------------------------------------------------
  //   Update (animation ticks) ---
  // ---------------------------------------------------

  function update(time) {
    if (!_is3dPaused && _supports3d) {
      var rotation = deg2rad(_rotationHelper.style.transform.match(/rotate\((.*)deg\) /)[1]);
      cloudsMesh.rotation.y = (rotation + 0.4) * 1.15;
      earthMesh.rotation.y = rotation;

      _titleMaterial.opacity = _titleOpacityHelper.style.opacity;

      camera.lookAt( scene.position );
      renderer.render( scene, camera );
    }
  }

  // ---------------------------------------------------
  //   WebGL context loss events ---
  // ---------------------------------------------------

  function handleContextLost(event) {
    event.preventDefault();
    _is3dPaused = true;
  }

  function handleContextRestored(event) {
    init3DScene();
    _is3dPaused = false;
  }

  function destroyContext(event) {
    var gl = renderer.domElement.getContext("webgl") || renderer.domElement.getContext('experimental-webgl');
    ext = gl.getExtension('WEBGL_lose_context');
    ext.loseContext(); // trigger a context loss
  }

  function restoreContext(event) {
    ext.restoreContext(); // restores the context
  }

  // ---------------------------------------------------
  //   Flow Animation Helpers ---
  // ---------------------------------------------------

  function startFlowWideAnim() {
    if (!_isFlowWideStarted) {
      _flowFramesWide.start();
      _isFlowWideStarted = true;
    }
  }

  function startFlowCloseUpAnim() {
    if (!_isFlowCloseUpStarted) {
      _flowFramesCloseUp.start();
      _isFlowCloseUpStarted = true;
    }
  }

  function stopFlowWideAnim() {
    _flowFramesWide.stop();
    _isFlowWideStarted = false;
  }

  function stopFlowCloseUpAnim() {
    _flowFramesCloseUp.stop();
    _isFlowCloseUpStarted = false;
  }

  // ---------------------------------------------------
  //   Utils ---
  // ---------------------------------------------------

  function deg2rad(degrees) {
    return degrees * 0.017453293;
  }

  // borrowed from media player
  function transElem(element, transform) {
    element.css('-webkit-transform', transform);
    element.css('-moz-transform', transform);
    element.css('-o-transform', transform);
    element.css('transform', transform);
    element.css('-ms-transform', transform);
  }

  // ---------------------------------------------------
  //   Detect WebGL ---
  // ---------------------------------------------------

  function browserSupportsWebGL() {
    var canvas = document.createElement('canvas');
    document.body.appendChild(canvas);
    var support = false;
    try {
     support = !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
    }
    catch (e) {
      console.log("webgl failed to initialize");
    }
    document.body.removeChild(canvas);
    return support;
  }

  // ---------------------------------------------------
  //   Expose Public Properties and Methods ---
  // ---------------------------------------------------

  return {
    // Public Properties
    is3dPaused: _is3dPaused,
    flowFramesCloseUp: _flowFramesCloseUp,
    flowFramesWide: _flowFramesWide,

    // Public Methods
    startFlowWideAnim: startFlowWideAnim,
    startFlowCloseUpAnim: startFlowCloseUpAnim,
    stopFlowWideAnim: stopFlowWideAnim,
    stopFlowCloseUpAnim: stopFlowCloseUpAnim,
    update: update,
    init: init
  };


})(jQuery);

/*  We need to instantiate the player.  Since we are using AdobeEdge for this animation,
    lets listen for when AdobeEdge is fully loaded and ready.  Then get access to the
    stage which becomes our "playable element" which we use to call events like play and
    stop.  The player does not require Adobe Edge, but you need to pass an element to it
    that has the following methods:
      - play()
      - play(time) - play from a specific time in milliseconds
      - stop()
      - getPosition() - returns current timeline time                                */
