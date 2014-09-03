// If we expect animation authors to create content that is not 640x480 then we will
// need to scale the video to fit that resolution.  Currrently we are assuming that
// videos will be at 640x480.  So we don't need this code.  Moving it out of the main
// javascript file for cleanliness.


var playerWidth = _playerContent.width();
var playerHeight = _playerContent.height();
var animWidth = _anim.width();
var animHeight = _anim.height();

if (animWidth===0)
   animWidth = playerWidth;

var scale = playerWidth/animWidth;

var transform = 'scale(' + scale + ', ' + scale + ')';
_anim.css('transform', transform);
_anim.css('-webkit-transform', transform);
_anim.css('-moz-transform', transform);
_anim.css('-o-transform', transform);
_anim.css('-ms-transform', transform);

if (playerHeight > animHeight * scale)
anim.css('top',(playerHeight-animHeight*scale)/2 + 'px');