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


// fix for IE
if(!window.console) {
	console = { log: function() {} };
}


// save transcript button implementation (data url does not work on IE 9)
/*
$(function() {
	var transcript_body = $("#transcript").html();
	var transcript_html = "<!doctype html><html><head></head><body><h2>Transcript for \"" + document.title + "\"</h2>" + transcript_body + "</body></html>"
	var data_url = "data:text/html;utf-8,"+transcript_html;
	$("#download-transcript-link").attr("href", data_url); // .click(function() { window.location.href = data_url; });

});
*/

$(function() {
	// IE doesn't support download attribute, so set target attr to _blank to force new tab
	var a = document.createElement("a");
	if (typeof a.download == "undefined") {
		$("#download-transcript-link").attr("target", "_blank");
	}
});


// functions to deal with switching in and out of fullscreen mode.
var _utils = (function($) {
	var utils = {};

	utils.requestFullScreen = function(el) {
		if (el.requestFullscreen) {
		  el.requestFullscreen();
		} else if (el.mozRequestFullScreen) {
		  el.mozRequestFullScreen();
		} else if (el.webkitRequestFullscreen) {
		  el.webkitRequestFullscreen();
		}
	}

	utils.exitFullScreen = function() {
		if(document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if(document.exitFullScreen) {
			document.exitFullScreen();
		} else if(document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if(document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	}

	return utils;
}());


// initialize the html5 media player if present.
$(function () {
	// make sure we have an app object.
	if(undefined === window.app) {
		return;
	}

	var in_fullscreen = false;

	var animation_frame = $("#player-base")[0];
	var bod = $("body");
	var win = $(window);
	var player;


	var onmaximize = function() {
		bod.addClass("fullscreen");
		_utils.requestFullScreen(bod[0]);
		in_fullscreen = true;
		win.resize();
		// $("#template-page-wrap").offset({top: 0, left: 0});
	}

	var onrestore = function() {
		_utils.exitFullScreen();
		animation_frame.width = 638;
		animation_frame.height = 523;
		bod.removeClass("fullscreen");
		in_fullscreen = false;
		win.resize();

		// fix page being offset by 50px on chrome.
		$("#template-page-wrap").offset({top: 0, left: 50});
		$("#template-page-wrap").css("top", "0px");
	}

	var onplayerdomready = function() {
		win.resize();
	}

	app.init({
		onMaximizeComplete: onmaximize,
		onRestoreComplete:  onrestore,
		onPlayerDOMReady: onplayerdomready
	});

	win.resize();
});



// initialize collapsable help items.
// TODO: determine if this will work recursively.
$(function() {
	$(".template-collapsable-row").each(function() {
		// get the stuff we need
		var root = $(this);
		var icon = $(".template-collapsable-icon", root);
		var container = $(".template-collapsable-container", root);

		// initialize the data; we want it open by default in case javascript is disabled.
		root.data("collapsed", true);
		container.hide();
		icon.removeClass("icon-chevron-down icon-chevron-right").addClass("icon-chevron-right");

		// hook up click event to toggle collapsed state.
		$(".template-collapsable-label", root).click(function() { 
			var collapsed = !root.data('collapsed');
			root.data('collapsed', collapsed);
			icon.removeClass("icon-chevron-down icon-chevron-right");
			$(this).removeClass("template-collapsable-label-open");
			if(collapsed) {
				icon.addClass("icon-chevron-right");
				container.hide();
			} else {
				$(this).addClass("template-collapsable-label-open");
				icon.addClass("icon-chevron-down");
				container.show();
			}

		});
	});
});


// print icon click handler.
$(function() {
	$("#print-icon").click(function() {
		window.print();
	});
});


// help icon click handler.
$(function() { 
	$("#help-icon").click(function() {
		$('html, body').animate({
			scrollTop: $("#faq-title").offset().top
		}, 500)
	});
});


var PLAYER_HEIGHT = 543;
var PLAYER_WIDTH = 668;
// use javascript to resize the instruction container, because css3's calc() function isn't supported on all platforms.
// TODO: we might need multiple versions of this to accomodate different container sizes.
$(function () {
	var container = $(".auto-resize .instruction-container");

	if(container.length) {
	    $(window).resize(function() {
	    	if(!Modernizr.mq("only screen and (max-width: 1024px)")) {
		    	var w = container.parent().width();
		    	container.width(w-PLAYER_WIDTH);
		    } else {
		    	container.css("width", "100%");
		    }
	    }).resize();
    }
});


/*
$(function() {
	console.log("setting timeout");
	var func = function() {
		console.log($("#template-page-wrap").position(), $("#template-page-wrap").offset()); 
		setTimeout(func, 1000)
	};
	func();
});
*/

