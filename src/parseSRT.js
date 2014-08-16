var _srt;
var _nextSubtitleTime = 0;
var _lastSubtitleTime = 0;
var _lastSubtitle = "";

function initSubtitles(srtData) {
  _srt = parseSRT({text: srtData});
}

function getSubtitle(time) {
  if (time > _lastSubtitleTime && time < _nextSubtitleTime) return _lastSubtitle;

  for (var i = _srt.data.length - 1; i >= 0; i--) {
    if (time >= _srt.data[i].subtitle.start && time <= _srt.data[i].subtitle.end) {
      _lastSubtitleTime = _srt.data[i].subtitle.start;
      _nextSubtitleTime = _srt.data[i].subtitle.end;
      _lastSubtitle = _srt.data[i].subtitle.text;
      return _srt.data[i].subtitle.text;
    }
  }
}

// ParseSRT method from popcorn.js's SRT Parsing plugin:
// https://github.com/mozilla/popcorn-js
function parseSRT( data ) {

  // declare needed variables
  var retObj = {
        title: "",
        remote: "",
        data: []
      },
      subs = [],
      i = 0,
      idx = 0,
      lines,
      time,
      text,
      endIdx,
      sub;

  // Here is where the magic happens
  // Split on line breaks
  lines = data.text.split( /(?:\r\n|\r|\n)/gm );
  endIdx = lastNonEmptyLine( lines ) + 1;

  for( i=0; i < endIdx; i++ ) {
    sub = {};
    text = [];

    sub.id = parseInt( lines[i++], 10 );

    // Split on '-->' delimiter, trimming spaces as well
    time = lines[i++].split( /[\t ]*-->[\t ]*/ );

    sub.start = toSeconds( time[0] );

    // So as to trim positioning information from end
    idx = time[1].indexOf( " " );
    if ( idx !== -1) {
      time[1] = time[1].substr( 0, idx );
    }
    sub.end = toSeconds( time[1] );

    // Build single line of text from multi-line subtitle in file
    while ( i < endIdx && lines[i] ) {
      text.push( lines[i++] );
    }

    // Join into 1 line, SSA-style linebreaks
    // Strip out other SSA-style tags
    sub.text = text.join( "\\N" ).replace( /\{(\\[\w]+\(?([\w\d]+,?)+\)?)+\}/gi, "" );
    
    // Escape HTML entities
    sub.text = sub.text.replace( /</g, "&lt;" ).replace( />/g, "&gt;" );

    // Unescape great than and less than when it makes a valid html tag of a supported style (font, b, u, s, i)
    // Modified version of regex from Phil Haack's blog: http://haacked.com/archive/2004/10/25/usingregularexpressionstomatchhtml.aspx
    // Later modified by kev: http://kevin.deldycke.com/2007/03/ultimate-regular-expression-for-html-tag-parsing-with-php/
    sub.text = sub.text.replace( /&lt;(\/?(font|b|u|i|s))((\s+(\w|\w[\w\-]*\w)(\s*=\s*(?:\".*?\"|'.*?'|[^'\">\s]+))?)+\s*|\s*)(\/?)&gt;/gi, "<$1$3$7>" );
    sub.text = sub.text.replace( /\\N/gi, "<br />" );
    subs.push( createTrack( "subtitle", sub ) );
  }

  retObj.data = subs;
  return retObj;
}

function createTrack( name, attributes ) {
  var track = {};
  track[name] = attributes;
  return track;
}

// Simple function to convert HH:MM:SS,MMM or HH:MM:SS.MMM to SS.MMM
// Assume valid, returns 0 on error
function toSeconds( t_in ) {
  var t = t_in.split( ':' );

  try {
    var s = t[2].split( ',' );

    // Just in case a . is decimal seperator
    if ( s.length === 1 ) {
      s = t[2].split( '.' );
    }

    return parseFloat( t[0], 10 ) * 3600 + parseFloat( t[1], 10 ) * 60 + parseFloat( s[0], 10 ) + parseFloat( s[1], 10 ) / 1000;
  } catch ( e ) {
    return 0;
  }
}

function lastNonEmptyLine( linesArray ) {
  var idx = linesArray.length - 1;

  while ( idx >= 0 && !linesArray[idx] ) {
    idx--;
  }

  return idx;
}