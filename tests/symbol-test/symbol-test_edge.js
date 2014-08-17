/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Background',
                type: 'rect',
                rect: ['0px', '1px','638px','539px','auto', 'auto'],
                fill: ["rgba(201,199,196,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","solid"]
            },
            {
                id: 'stage-playhead',
                type: 'rect',
                rect: ['34px', '45px','0px','484px','auto', 'auto'],
                fill: ["rgba(185,182,173,1)"],
                stroke: [1,"rgba(225,2,2,1.00)","solid"]
            },
            {
                id: 'zero',
                type: 'text',
                rect: ['31px', '28px','18px','22px','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'ten',
                type: 'text',
                rect: ['596px', '28px','18px','22px','auto', 'auto'],
                text: "10",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'horiz-rule',
                type: 'rect',
                rect: ['34px', '45px','576px','0px','auto', 'auto'],
                fill: ["rgba(185,182,173,1)"],
                stroke: [1,"rgba(41,41,41,1.00)","solid"]
            },
            {
                id: 'sym-reverse',
                type: 'rect',
                rect: ['1', '294px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-reverse-partial',
                type: 'rect',
                rect: ['91px', '335px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-child',
                type: 'rect',
                rect: ['34', '378px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-looping',
                type: 'rect',
                rect: ['34', '448px','auto','auto','auto', 'auto'],
                opacity: 1,
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-full-manual',
                type: 'rect',
                rect: ['34px', '178px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-play-from-1',
                type: 'rect',
                rect: ['34px', '419px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['433px', '170px','0px','20px','auto', 'auto'],
                fill: ["rgba(185,182,173,1)"],
                stroke: [1,"rgba(78,81,84,1.00)","solid"]
            },
            {
                id: 'RectangleCopy',
                type: 'rect',
                rect: ['433px', '376px','0px','20px','auto', 'auto'],
                fill: ["rgba(185,182,173,1)"],
                stroke: [1,"rgba(78,81,84,1.00)","solid"]
            },
            {
                id: 'sym-full-manual-stopped',
                type: 'rect',
                rect: ['34px', '171px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 571px 20px 0px)'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-partial',
                type: 'rect',
                rect: ['91', '240','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-partial-twice',
                type: 'rect',
                rect: ['91', '268px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'text-symbol-partialCopy',
                type: 'text',
                rect: ['43px', '278px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "6) Edge's Play Reverse",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy7',
                type: 'text',
                rect: ['43px', '319px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "7) Edge's Play Reverse, shorter duration",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'sym-reverse-partial-stopped',
                type: 'rect',
                rect: ['91px', '377px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'text-symbol-partialCopy8',
                type: 'text',
                rect: ['43px', '361px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "8) Edge's Play Reverse, stopped prematurely",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy5',
                type: 'text',
                rect: ['43px', '403px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "9) Edge's Play From a time function starting at 1 sec",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'sym-play-from-label',
                type: 'rect',
                rect: ['34px', '459px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'text-symbol-partialCopy9',
                type: 'text',
                rect: ['43px', '443px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "10) Edge's Play From a label function starting at 1 sec",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy6',
                type: 'text',
                rect: ['43px', '483px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "8) Symbol Looping (Support for Stop, but not restart)",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy2',
                type: 'text',
                rect: ['43px', '237px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "5) Nested symbols with different start times",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partial',
                type: 'text',
                rect: ['43px', '116px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "2) Shorter duration, triggered at 1 sec",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy4',
                type: 'text',
                rect: ['43px', '155px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "3) Full duration, stopped prematurely",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy3',
                type: 'text',
                rect: ['43px', '196px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "4) Shorter duration, triggered twice",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-full-man',
                type: 'text',
                rect: ['43px', '75px','auto','auto','auto', 'auto'],
                text: "1) Full length of timeline",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbols',
                type: 'text',
                rect: ['30px', '54px','auto','auto','auto', 'auto'],
                text: "Symbol use cases:",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "700", "none", "italic"]
            },
            {
                id: 'text-not-symbol',
                type: 'text',
                rect: ['498px', '27px','auto','auto','auto', 'auto'],
                text: "Stage Time",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            }],
            symbolInstances: [
            {
                id: 'sym-partial',
                symbolName: 'sym-partial',
                autoPlay: {

                }
            },
            {
                id: 'sym-play-from-label',
                symbolName: 'sym-full-manual',
                autoPlay: {

                }
            },
            {
                id: 'sym-partial-twice',
                symbolName: 'sym-partial-twice',
                autoPlay: {

                }
            },
            {
                id: 'sym-full-manual-stopped',
                symbolName: 'sym-full-manual',
                autoPlay: {

                }
            },
            {
                id: 'sym-reverse-partial-stopped',
                symbolName: 'sym-reverse-partial',
                autoPlay: {

                }
            },
            {
                id: 'sym-full-manual',
                symbolName: 'sym-full-manual',
                autoPlay: {

                }
            },
            {
                id: 'sym-looping',
                symbolName: 'sym-looping',
                autoPlay: {

                }
            },
            {
                id: 'sym-reverse-partial',
                symbolName: 'sym-reverse-partial',
                autoPlay: {

                }
            },
            {
                id: 'sym-child',
                symbolName: 'sym-child',
                autoPlay: {

                }
            },
            {
                id: 'sym-reverse',
                symbolName: 'sym-reverse',
                autoPlay: {

                }
            },
            {
                id: 'sym-play-from-1',
                symbolName: 'sym-full-manual',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_text-symbol-partialCopy3}": [
                ["style", "top", '196px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_text-not-symbol}": [
                ["style", "top", '27px'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '498px'],
                ["style", "font-size", '14px']
            ],
            "${_sym-partial-twice}": [
                ["style", "top", '212px'],
                ["style", "left", '91px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_text-symbol-partialCopy6}": [
                ["style", "top", '483px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_stage-playhead}": [
                ["style", "top", '45px'],
                ["style", "height", '484px'],
                ["color", "border-color", 'rgba(225,2,2,1.00)'],
                ["style", "left", '34px'],
                ["style", "border-width", '1px']
            ],
            "${_text-symbol-partialCopy4}": [
                ["style", "top", '155px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_text-symbol-partial}": [
                ["style", "top", '116px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_sym-full-manual-stopped}": [
                ["style", "top", '171px'],
                ["style", "left", '34px'],
                ["transform", "scaleY", '0.7'],
                ["style", "clip", [0,571,20,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_text-symbol-partialCopy}": [
                ["style", "top", '278px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_sym-child}": [
                ["style", "top", '253px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_text-symbol-partialCopy7}": [
                ["style", "top", '319px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_text-symbol-partialCopy2}": [
                ["style", "top", '237px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_text-symbol-partialCopy8}": [
                ["style", "top", '361px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_sym-play-from-1}": [
                ["style", "top", '419px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_zero}": [
                ["style", "font-style", 'normal'],
                ["style", "top", '28px'],
                ["style", "font-size", '14px']
            ],
            "${_sym-play-from-label}": [
                ["style", "top", '459px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_text-symbol-partialCopy9}": [
                ["style", "top", '443px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_text-symbol-partialCopy5}": [
                ["style", "top", '403px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_RectangleCopy}": [
                ["style", "height", '20px'],
                ["color", "border-color", 'rgb(78, 81, 84)'],
                ["style", "top", '376px'],
                ["style", "border-style", 'solid']
            ],
            "${_Rectangle}": [
                ["style", "height", '20px'],
                ["color", "border-color", 'rgba(78,81,84,1.00)'],
                ["style", "border-style", 'solid'],
                ["style", "top", '170px']
            ],
            "${_ten}": [
                ["style", "top", '28px'],
                ["style", "font-style", 'normal'],
                ["style", "left", '596px'],
                ["style", "font-size", '14px']
            ],
            "${_text-symbol-full-man}": [
                ["style", "top", '75px'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_sym-looping}": [
                ["style", "top", '500px'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '0.7']
            ],
            "${_text-symbols}": [
                ["style", "top", '54px'],
                ["style", "font-weight", '700'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '30px'],
                ["style", "font-size", '14px']
            ],
            "${_sym-reverse}": [
                ["style", "top", '294px'],
                ["style", "left", '35px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_horiz-rule}": [
                ["style", "top", '45px'],
                ["color", "border-color", 'rgba(41,41,41,1.00)'],
                ["style", "left", '34px']
            ],
            "${_sym-partial}": [
                ["style", "top", '132px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_text-symbol-fullCopy2}": [
                ["style", "top", '154px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '29px'],
                ["style", "font-style", 'italic']
            ],
            "${_sym-full-manual}": [
                ["style", "top", '92px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(89,107,124,1.00)'],
                ["style", "width", '638px'],
                ["style", "height", '548px'],
                ["style", "overflow", 'hidden']
            ],
            "${_sym-reverse-partial}": [
                ["style", "top", '335px'],
                ["transform", "scaleY", '0.7'],
                ["style", "left", '91px']
            ],
            "${_sym-reverse-partial-stopped}": [
                ["style", "top", '377px'],
                ["transform", "scaleY", '0.7'],
                ["style", "left", '91px']
            ],
            "${_Background}": [
                ["color", "background-color", 'rgba(201,199,196,1.00)'],
                ["color", "border-color", 'rgba(41,41,41,1.00)'],
                ["style", "height", '539px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '7px'],
                ["style", "width", '624px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: false,
            timeline: [
                { id: "eid95", tween: [ "style", "${_sym-child}", "top", '253px', { fromValue: '253px'}], position: 0, duration: 0 },
                { id: "eid92", tween: [ "style", "${_sym-partial}", "top", '132px', { fromValue: '132px'}], position: 1000, duration: 0 },
                { id: "eid99", tween: [ "style", "${_sym-full-manual}", "top", '92px', { fromValue: '92px'}], position: 0, duration: 0 },
                { id: "eid102", tween: [ "style", "${_sym-looping}", "top", '500px', { fromValue: '500px'}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_sym-partial-twice}", "left", '376px', { fromValue: '91px'}], position: 4250, duration: 590 },
                { id: "eid31", tween: [ "style", "${_stage-playhead}", "left", '604px', { fromValue: '34px'}], position: 0, duration: 10000 },
                { id: "eid94", tween: [ "style", "${_sym-partial-twice}", "top", '212px', { fromValue: '212px'}], position: 0, duration: 0 },
                { id: "eid62", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-looping}', [] ], ""], position: 0 },
                { id: "eid41", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-full-manual}', [] ], ""], position: 0 },
                { id: "eid131", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_sym-reverse}', [] ], ""], position: 0 },
                { id: "eid118", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-full-manual-stopped}', [] ], ""], position: 0 },
                { id: "eid145", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_sym-reverse-partial-stopped}', [] ], ""], position: 1000 },
                { id: "eid147", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-play-from-1}', [1000] ], ""], position: 1000 },
                { id: "eid45", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-partial-twice}', [] ], ""], position: 1000 },
                { id: "eid150", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-play-from-label}', ['oneSec'] ], ""], position: 1000 },
                { id: "eid144", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_sym-reverse-partial}', [] ], ""], position: 1000 },
                { id: "eid83", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-child}', [] ], ""], position: 1000 },
                { id: "eid100", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-partial}', [] ], ""], position: 1000 },
                { id: "eid47", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-partial-twice}', [] ], ""], position: 6000 },
                { id: "eid146", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_sym-reverse-partial-stopped}', [] ], ""], position: 7000 },
                { id: "eid119", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_sym-full-manual-stopped}', [] ], ""], position: 7000 },
                { id: "eid42", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_sym-full-manual}', [] ], ""], position: 10000 }            ]
        }
    }
},
"MySymbol": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    rect: ['0px', '0px', '76px', '24px', 'auto', 'auto'],
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    type: 'rect',
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy}": [
                ["style", "left", '0px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '76px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 4000,
            autoPlay: false,
            timeline: [
                { id: "eid2", tween: [ "style", "${_RectangleCopy}", "left", '560px', { fromValue: '0px'}], position: 0, duration: 4000 }            ]
        }
    }
},
"PartialSymbol": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    rect: ['0px', '0px', '76px', '24px', 'auto', 'auto'],
                    fill: ['rgba(192,192,192,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy}": [
                ["style", "left", '141px'],
                ["style", "top", '0px']
            ],
            "${symbolSelector}": [
                ["style", "height", '24px'],
                ["style", "width", '76px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            timeline: [
                { id: "eid13", tween: [ "style", "${_RectangleCopy}", "left", '422px', { fromValue: '141px'}], position: 0, duration: 2000 }            ]
        }
    }
},
"sym-full-manual": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'symbol-bkgCopy2',
                    stroke: [1, 'rgb(225, 2, 2)', 'none'],
                    rect: ['1px', '0px', '570px', '20px', 'auto', 'auto'],
                    fill: ['rgba(172,172,172,1.00)']
                },
                {
                    type: 'rect',
                    id: 'symbol-playheadCopy2',
                    stroke: [1, 'rgba(1,108,225,1.00)', 'solid'],
                    rect: ['0px', '0px', '0px', '18px', 'auto', 'auto'],
                    fill: ['rgba(185,182,173,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_symbol-bkgCopy2}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(172,172,172,1.00)'],
                ["style", "border-style", 'none'],
                ["style", "left", '1px'],
                ["style", "width", '570px']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '571px']
            ],
            "${_symbol-playheadCopy2}": [
                ["style", "top", '0px'],
                ["style", "height", '18px'],
                ["color", "border-color", 'rgba(1,108,225,1.00)'],
                ["style", "left", '0px'],
                ["style", "border-width", '1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: false,
            labels: {
                "oneSec": 1000
            },
            timeline: [
                { id: "eid40", tween: [ "style", "${_symbol-playheadCopy2}", "left", '570px', { fromValue: '0px'}], position: 0, duration: 10000 }            ]
        }
    }
},
"sym-partial-twice": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'symbol-bkgCopy',
                    stroke: [1, 'rgb(225, 2, 2)', 'none'],
                    rect: ['1px', '0px', '115px', '20px', 'auto', 'auto'],
                    fill: ['rgba(172,172,172,1.00)']
                },
                {
                    type: 'rect',
                    id: 'symbol-playheadCopy',
                    stroke: [1, 'rgba(1,108,225,1.00)', 'solid'],
                    rect: ['-57px', '0px', '0px', '18px', 'auto', 'auto'],
                    fill: ['rgba(185,182,173,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_symbol-bkgCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(172,172,172,1.00)'],
                ["style", "border-style", 'none'],
                ["style", "left", '1px'],
                ["style", "width", '115px']
            ],
            "${_symbol-playheadCopy}": [
                ["style", "top", '0px'],
                ["style", "height", '18px'],
                ["color", "border-color", 'rgba(1,108,225,1.00)'],
                ["style", "left", '0px'],
                ["style", "border-width", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '116px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2000,
            autoPlay: false,
            timeline: [
                { id: "eid37", tween: [ "style", "${_symbol-playheadCopy}", "left", '114px', { fromValue: '0px'}], position: 0, duration: 2000 }            ]
        }
    }
},
"sym-looping": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'symbol-bkg',
                    stroke: [1, 'rgb(225, 2, 2)', 'none'],
                    rect: ['1px', '0px', '570px', '20px', 'auto', 'auto'],
                    fill: ['rgba(172,172,172,1.00)']
                },
                {
                    type: 'rect',
                    id: 'symbol-playhead',
                    stroke: [1, 'rgba(1,108,225,1.00)', 'solid'],
                    rect: ['0px', '0px', '0px', '18px', 'auto', 'auto'],
                    fill: ['rgba(185,182,173,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '571px']
            ],
            "${_symbol-bkg}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(172,172,172,1.00)'],
                ["style", "border-style", 'none'],
                ["style", "left", '1px'],
                ["style", "width", '570px']
            ],
            "${_symbol-playhead}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(1,108,225,1.00)'],
                ["style", "border-width", '1px'],
                ["style", "opacity", '1'],
                ["style", "height", '18px'],
                ["color", "border-color", 'rgb(1, 108, 225)'],
                ["style", "left", '0px'],
                ["style", "width", '15px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1000,
            autoPlay: false,
            timeline: [
                { id: "eid57", tween: [ "style", "${_symbol-playhead}", "width", '0px', { fromValue: '15px'}], position: 0, duration: 1000 },
                { id: "eid54", tween: [ "style", "${_symbol-playhead}", "left", '570px', { fromValue: '0px'}], position: 0, duration: 1000 },
                { id: "eid55", tween: [ "style", "${_symbol-playhead}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 1000 }            ]
        }
    }
},
"sym-child": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'symbol-bkgCopy',
                    stroke: [1, 'rgb(225, 2, 2)', 'none'],
                    rect: ['57px', '0px', '458px', '20px', 'auto', 'auto'],
                    fill: ['rgba(172,172,172,1.00)']
                },
                {
                    type: 'rect',
                    id: 'symbol-playheadCopy',
                    stroke: [1, 'rgba(1,108,225,1.00)', 'solid'],
                    rect: ['57px', '0px', '0px', '18px', 'auto', 'auto'],
                    fill: ['rgba(185,182,173,1)']
                },
                {
                    id: 'sym-grand-child',
                    type: 'rect',
                    rect: ['57px', '0', 'auto', 'auto', 'auto', 'auto']
                }
            ],
            symbolInstances: [
            {
                id: 'sym-grand-child',
                symbolName: 'sym-grand-child',
                autoPlay: {

               }
            }            ]
        },
    states: {
        "Base State": {
            "${_symbol-bkgCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(172,172,172,1.00)'],
                ["style", "border-style", 'none'],
                ["style", "left", '57px'],
                ["style", "width", '458px']
            ],
            "${_symbol-playheadCopy}": [
                ["style", "top", '0px'],
                ["style", "height", '18px'],
                ["color", "border-color", 'rgb(1, 108, 225)'],
                ["style", "left", '57px'],
                ["style", "border-width", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '571px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8000,
            autoPlay: false,
            timeline: [
                { id: "eid82", tween: [ "style", "${_symbol-playheadCopy}", "left", '513px', { fromValue: '57px'}], position: 0, duration: 8000 },
                { id: "eid85", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-grand-child}', [] ], ""], position: 1000 }            ]
        }
    }
},
"sym-grand-child": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'symbol-bkg',
                    stroke: [1, 'rgb(225, 2, 2)', 'none'],
                    rect: ['57px', '10px', '344px', '10px', 'auto', 'auto'],
                    fill: ['rgba(133,133,133,1.00)']
                },
                {
                    type: 'rect',
                    id: 'symbol-playhead',
                    stroke: [1, 'rgba(1,225,201,1.00)', 'solid'],
                    rect: ['0px', '10px', '0px', '8px', 'auto', 'auto'],
                    fill: ['rgba(185,182,173,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_symbol-playhead}": [
                ["style", "top", '10px'],
                ["style", "height", '8px'],
                ["color", "border-color", 'rgba(1,225,201,1.00)'],
                ["style", "left", '57px'],
                ["style", "border-width", '1px']
            ],
            "${_symbol-bkg}": [
                ["style", "top", '10px'],
                ["color", "background-color", 'rgba(133,133,133,1.00)'],
                ["style", "height", '10px'],
                ["style", "border-style", 'none'],
                ["style", "left", '57px'],
                ["style", "width", '344px']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '344px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 6000,
            autoPlay: false,
            timeline: [
                { id: "eid84", tween: [ "style", "${_symbol-playhead}", "left", '399px', { fromValue: '57px'}], position: 0, duration: 6000 }            ]
        }
    }
},
"sym-partial": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'symbol-bkgCopy',
                    stroke: [1, 'rgb(225, 2, 2)', 'none'],
                    rect: ['0px', '0px', '458px', '20px', 'auto', 'auto'],
                    fill: ['rgba(172,172,172,1.00)']
                },
                {
                    type: 'rect',
                    id: 'symbol-playheadCopy',
                    stroke: [1, 'rgba(1,108,225,1.00)', 'solid'],
                    rect: ['0px', '0px', '0px', '18px', 'auto', 'auto'],
                    fill: ['rgba(185,182,173,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_symbol-bkgCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(172,172,172,1.00)'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '458px']
            ],
            "${_symbol-playheadCopy}": [
                ["style", "top", '0px'],
                ["style", "height", '18px'],
                ["color", "border-color", 'rgb(1, 108, 225)'],
                ["style", "left", '0px'],
                ["style", "border-width", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '458px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 8000,
            autoPlay: false,
            timeline: [
                { id: "eid90", tween: [ "style", "${_symbol-playheadCopy}", "left", '456px', { fromValue: '0px'}], position: 0, duration: 8000 }            ]
        }
    }
},
"sym-reverse": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'symbol-bkg',
                    stroke: [1, 'rgb(225, 2, 2)', 'none'],
                    rect: ['0px', '0px', '570px', '20px', 'auto', 'auto'],
                    fill: ['rgba(172,172,172,1.00)']
                },
                {
                    type: 'rect',
                    id: 'symbol-playhead',
                    stroke: [1, 'rgba(1,108,225,1.00)', 'solid'],
                    rect: ['-1px', '0px', '0px', '18px', 'auto', 'auto'],
                    fill: ['rgba(185,182,173,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '571px']
            ],
            "${_symbol-bkg}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(172,172,172,1.00)'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '570px']
            ],
            "${_symbol-playhead}": [
                ["style", "top", '0px'],
                ["style", "height", '18px'],
                ["color", "border-color", 'rgba(1,108,225,1.00)'],
                ["style", "left", '569px'],
                ["style", "border-width", '1px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: false,
            timeline: [
                { id: "eid125", tween: [ "style", "${_symbol-playhead}", "left", '-1px', { fromValue: '569px'}], position: 0, duration: 10000 }            ]
        }
    }
},
"sym-reverse-partial": {
    version: "4.0.1",
    minimumCompatibleVersion: "4.0.1",
    build: "4.0.1.365",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    type: 'rect',
                    id: 'symbol-bkgCopy',
                    stroke: [1, 'rgb(225, 2, 2)', 'none'],
                    rect: ['0px', '0px', '458px', '20px', 'auto', 'auto'],
                    fill: ['rgba(172,172,172,1.00)']
                },
                {
                    type: 'rect',
                    id: 'symbol-playheadCopy',
                    stroke: [1, 'rgba(1,108,225,1.00)', 'solid'],
                    rect: ['0px', '0px', '0px', '18px', 'auto', 'auto'],
                    fill: ['rgba(185,182,173,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_symbol-bkgCopy}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(172,172,172,1.00)'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '458px']
            ],
            "${_symbol-playheadCopy}": [
                ["style", "top", '0px'],
                ["style", "height", '18px'],
                ["color", "border-color", 'rgb(1, 108, 225)'],
                ["style", "left", '456px'],
                ["style", "border-width", '1px']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '458px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9000,
            autoPlay: false,
            timeline: [
                { id: "eid143", tween: [ "style", "${_symbol-playheadCopy}", "left", '0px', { fromValue: '456px'}], position: 1000, duration: 8000 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-126256608");
