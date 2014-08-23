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
                rect: ['0px', '0px','638px','638px','auto', 'auto'],
                fill: ["rgba(201,199,196,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","solid"]
            },
            {
                id: 'stage-playhead',
                type: 'rect',
                rect: ['34px', '27px','0px','612px','auto', 'auto'],
                fill: ["rgba(185,182,173,1)"],
                stroke: [1,"rgba(225,2,2,1.00)","solid"]
            },
            {
                id: 'zero',
                type: 'text',
                rect: ['31px', '13px','18px','22px','auto', 'auto'],
                text: "0",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'ten',
                type: 'text',
                rect: ['596px', '13px','18px','22px','auto', 'auto'],
                text: "10",
                align: "left",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'horiz-rule',
                type: 'rect',
                rect: ['34px', '27px','576px','0px','auto', 'auto'],
                fill: ["rgba(185,182,173,1)"],
                stroke: [1,"rgba(41,41,41,1.00)","solid"]
            },
            {
                id: 'stop-marker-7',
                type: 'rect',
                rect: ['433px', '577px','0px','20px','auto', 'auto'],
                fill: ["rgba(185,182,173,1)"],
                stroke: [1,"rgba(78,81,84,1.00)","solid"]
            },
            {
                id: 'stop-marker-6',
                type: 'rect',
                rect: ['205px', '541px','0px','20px','auto', 'auto'],
                fill: ["rgba(185,182,173,1)"],
                stroke: [1,"rgba(78,81,84,1.00)","solid"]
            },
            {
                id: 'stop-marker-5',
                type: 'rect',
                rect: ['433px', '505px','0px','20px','auto', 'auto'],
                fill: ["rgba(185,182,173,1)"],
                stroke: [1,"rgba(78,81,84,1.00)","solid"]
            },
            {
                id: 'stop-marker-4',
                type: 'rect',
                rect: ['433px', '433px','0px','20px','auto', 'auto'],
                fill: ["rgba(185,182,173,1)"],
                stroke: [1,"rgba(78,81,84,1.00)","solid"]
            },
            {
                id: 'stop-marker-3',
                type: 'rect',
                rect: ['433px', '361px','0px','20px','auto', 'auto'],
                fill: ["rgba(185,182,173,1)"],
                stroke: [1,"rgba(78,81,84,1.00)","solid"]
            },
            {
                id: 'stop-marker-2',
                type: 'rect',
                rect: ['433px', '181px','0px','20px','auto', 'auto'],
                fill: ["rgba(185,182,173,1)"],
                stroke: [1,"rgba(78,81,84,1.00)","solid"]
            },
            {
                id: 'stop-marker-1',
                type: 'rect',
                rect: ['433px', '145px','0px','20px','auto', 'auto'],
                fill: ["rgba(185,182,173,1)"],
                stroke: [1,"rgba(78,81,84,1.00)","solid"]
            },
            {
                id: 'sym-looping',
                type: 'rect',
                rect: ['34', '448px','auto','auto','auto', 'auto'],
                opacity: 1,
                transform: [[],[],[],['1','0.64288']]
            },
            {
                id: 'sym-partial-stop-at',
                type: 'rect',
                rect: ['91', '578px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-stop-at-label',
                type: 'rect',
                rect: ['34px', '542px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-stop-at-time',
                type: 'rect',
                rect: ['34px', '506px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-play-from-label',
                type: 'rect',
                rect: ['34px', '470px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-play-from-1-stopped',
                type: 'rect',
                rect: ['34px', '434px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-play-from-1',
                type: 'rect',
                rect: ['34px', '398px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-reverse-partial-stopped',
                type: 'rect',
                rect: ['91px', '362px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-reverse-partial',
                type: 'rect',
                rect: ['91px', '326px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-reverse',
                type: 'rect',
                rect: ['1', '290px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-child',
                type: 'rect',
                rect: ['34', '378px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-partial-twice',
                type: 'rect',
                rect: ['91px', '268px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-partialCopy',
                type: 'rect',
                rect: ['91', '182px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-full-manual-stopped',
                type: 'rect',
                rect: ['34px', '146px','auto','auto','auto', 'auto'],
                clip: ['rect(0px 571px 20px 0px)'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-partial',
                type: 'rect',
                rect: ['91', '240px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'sym-full-manual',
                type: 'rect',
                rect: ['34px', '178px','auto','auto','auto', 'auto'],
                transform: [[],[],[],['1','0.7']]
            },
            {
                id: 'dotted-line-3',
                type: 'rect',
                rect: ['319px', '581px','0px','12px','auto', 'auto'],
                opacity: 0.55741869918699,
                fill: ["rgba(185,182,173,1)"],
                stroke: [1,"rgba(78,81,84,1.00)","dotted"]
            },
            {
                id: 'dotted-line-2',
                type: 'rect',
                rect: ['319px', '545px','0px','12px','auto', 'auto'],
                opacity: 0.55741869918699,
                fill: ["rgba(185,182,173,1)"],
                stroke: [1,"rgba(78,81,84,1.00)","dotted"]
            },
            {
                id: 'dotted-line-1',
                type: 'rect',
                rect: ['319px', '509px','0px','12px','auto', 'auto'],
                opacity: 0.55741869918699,
                fill: ["rgba(185,182,173,1)"],
                stroke: [1,"rgba(78,81,84,1.00)","dotted"]
            },
            {
                id: 'text-symbol-partialCopy',
                type: 'text',
                rect: ['43px', '274px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "7) Edge's Play Reverse",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy7',
                type: 'text',
                rect: ['43px', '310px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "8) Edge's Play Reverse, shorter duration",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy8',
                type: 'text',
                rect: ['43px', '346px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "9) Edge's Play Reverse, stopped prematurely",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy5',
                type: 'text',
                rect: ['43px', '382px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "10) Edge's playFrom(time) starting at 1 sec",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy10',
                type: 'text',
                rect: ['43px', '418px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "11) Edge's playFrom(time) starting at 1 sec, stopped prematurely",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy9',
                type: 'text',
                rect: ['43px', '454px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "12) Edge's playFrom(label) starting at 1 sec",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy13',
                type: 'text',
                rect: ['43px', '562px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "15) Edge's stopAt(time) called at dotted line to stop at symbol's 6sec (started late)",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy12',
                type: 'text',
                rect: ['43px', '490px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "13) Edge's stopAt(time) called at dotted line to stop at 7sec",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-looping',
                type: 'text',
                rect: ['43px', '598px','auto','15px','auto', 'auto'],
                opacity: 1,
                text: "16) Symbol Looping",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy11',
                type: 'text',
                rect: ['43px', '526px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "14) Edge's stopAt(label) called at dotted line to stop at 3sec",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy2',
                type: 'text',
                rect: ['43px', '238px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "6) Nested symbols with different start times",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy3',
                type: 'text',
                rect: ['43px', '202px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "5) Shorter duration, triggered twice",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy14',
                type: 'text',
                rect: ['43px', '166px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "4) Start late, end early",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partialCopy4',
                type: 'text',
                rect: ['43px', '130px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "3) Full duration, stopped prematurely",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-partial',
                type: 'text',
                rect: ['43px', '94px','auto','auto','auto', 'auto'],
                opacity: 1,
                text: "2) Shorter duration, triggered at 1 sec",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-full-man',
                type: 'text',
                rect: ['43px', '57px','auto','auto','auto', 'auto'],
                text: "1) Full length of timeline",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "normal", "none", "italic"]
            },
            {
                id: 'text-symbol-use-cases',
                type: 'text',
                rect: ['30px', '36px','auto','auto','auto', 'auto'],
                text: "Symbol use cases:",
                font: ['Arial, Helvetica, sans-serif', 14, "rgba(0,0,0,1)", "700", "none", "italic"]
            },
            {
                id: 'text-stage-time',
                type: 'text',
                rect: ['498px', '12px','auto','auto','auto', 'auto'],
                text: "Stage Time",
                font: ['Arial, Helvetica, sans-serif', 12, "rgba(0,0,0,1)", "normal", "none", "italic"]
            }],
            symbolInstances: [
            {
                id: 'sym-partialCopy',
                symbolName: 'sym-partial',
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
                id: 'sym-play-from-1-stopped',
                symbolName: 'sym-full-manual',
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
                id: 'sym-partial',
                symbolName: 'sym-partial',
                autoPlay: {

                }
            },
            {
                id: 'sym-partial-stop-at',
                symbolName: 'sym-partial',
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
                id: 'sym-child',
                symbolName: 'sym-child',
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
                id: 'sym-stop-at-time',
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
                id: 'sym-play-from-1',
                symbolName: 'sym-full-manual',
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
                id: 'sym-stop-at-label',
                symbolName: 'sym-full-manual',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_text-symbol-partialCopy3}": [
                ["style", "top", '202px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_sym-partial-twice}": [
                ["style", "top", '218px'],
                ["style", "left", '91px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_text-symbol-looping}": [
                ["style", "top", '598px'],
                ["style", "height", '15px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "font-style", 'italic'],
                ["style", "opacity", '1'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_stop-marker-6}": [
                ["style", "top", '541px'],
                ["style", "height", '20px'],
                ["style", "border-style", 'solid'],
                ["style", "left", '205px'],
                ["color", "border-color", 'rgb(78, 81, 84)']
            ],
            "${_sym-stop-at-time}": [
                ["style", "top", '506px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_stop-marker-5}": [
                ["style", "height", '20px'],
                ["color", "border-color", 'rgb(78, 81, 84)'],
                ["style", "border-style", 'solid'],
                ["style", "top", '505px']
            ],
            "${_text-symbol-partialCopy4}": [
                ["style", "top", '130px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_text-symbol-partial}": [
                ["style", "top", '94px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_sym-full-manual-stopped}": [
                ["style", "top", '146px'],
                ["style", "clip", [0,571,20,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '34px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_text-symbol-partialCopy}": [
                ["style", "top", '274px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_sym-child}": [
                ["style", "top", '254px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_text-symbol-partialCopy7}": [
                ["style", "top", '310px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_text-symbol-partialCopy14}": [
                ["style", "top", '166px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_text-symbol-partialCopy2}": [
                ["style", "top", '238px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_text-symbol-partialCopy8}": [
                ["style", "top", '346px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_sym-play-from-1}": [
                ["style", "top", '398px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_zero}": [
                ["style", "top", '13px'],
                ["style", "font-style", 'normal'],
                ["style", "font-size", '12px']
            ],
            "${_sym-play-from-label}": [
                ["style", "top", '470px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_sym-partial-stop-at}": [
                ["style", "top", '578px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_stop-marker-7}": [
                ["style", "height", '20px'],
                ["color", "border-color", 'rgb(78, 81, 84)'],
                ["style", "top", '577px'],
                ["style", "border-style", 'solid']
            ],
            "${_text-symbol-partialCopy11}": [
                ["style", "top", '526px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_stop-marker-1}": [
                ["style", "height", '20px'],
                ["color", "border-color", 'rgba(78,81,84,1.00)'],
                ["style", "top", '145px'],
                ["style", "border-style", 'solid']
            ],
            "${_text-symbol-partialCopy5}": [
                ["style", "top", '382px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_text-symbol-partialCopy10}": [
                ["style", "top", '418px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_text-symbol-partialCopy12}": [
                ["style", "top", '490px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_sym-reverse-partial}": [
                ["style", "top", '326px'],
                ["transform", "scaleY", '0.7'],
                ["style", "left", '91px']
            ],
            "${_stop-marker-2}": [
                ["style", "height", '20px'],
                ["color", "border-color", 'rgb(78, 81, 84)'],
                ["style", "border-style", 'solid'],
                ["style", "top", '181px']
            ],
            "${_sym-play-from-1-stopped}": [
                ["style", "top", '434px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_sym-partialCopy}": [
                ["style", "top", '182px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_stop-marker-3}": [
                ["style", "height", '20px'],
                ["color", "border-color", 'rgb(78, 81, 84)'],
                ["style", "border-style", 'solid'],
                ["style", "top", '361px']
            ],
            "${_sym-full-manual}": [
                ["style", "top", '74px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_text-symbol-partialCopy9}": [
                ["style", "top", '454px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_stage-playhead}": [
                ["style", "top", '27px'],
                ["style", "height", '612px'],
                ["color", "border-color", 'rgba(225,2,2,1.00)'],
                ["style", "left", '34px'],
                ["style", "border-width", '1px']
            ],
            "${_text-symbol-partialCopy13}": [
                ["style", "top", '562px'],
                ["style", "opacity", '1'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_dotted-line-2}": [
                ["style", "top", '545px'],
                ["color", "border-color", 'rgb(78, 81, 84)'],
                ["style", "left", '319px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.557418704032898'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'dotted']
            ],
            "${_ten}": [
                ["style", "font-style", 'normal'],
                ["style", "top", '13px'],
                ["style", "left", '596px'],
                ["style", "font-size", '12px']
            ],
            "${_dotted-line-1}": [
                ["style", "top", '509px'],
                ["style", "opacity", '0.55741869918699'],
                ["style", "border-width", '1px'],
                ["style", "height", '12px'],
                ["style", "border-style", 'dotted'],
                ["style", "left", '319px'],
                ["color", "border-color", 'rgb(78, 81, 84)']
            ],
            "${_sym-reverse}": [
                ["style", "top", '290px'],
                ["style", "left", '35px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_text-symbol-use-cases}": [
                ["style", "top", '36px'],
                ["style", "font-weight", '700'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '30px'],
                ["style", "font-size", '14px']
            ],
            "${_text-symbol-fullCopy2}": [
                ["style", "top", '154px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '29px'],
                ["style", "font-style", 'italic']
            ],
            "${_sym-looping}": [
                ["style", "top", '615px'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '0.64288']
            ],
            "${_text-stage-time}": [
                ["style", "top", '12px'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '498px'],
                ["style", "font-size", '12px']
            ],
            "${_text-symbol-full-man}": [
                ["style", "top", '57px'],
                ["style", "font-style", 'italic'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '43px'],
                ["style", "font-size", '14px']
            ],
            "${_sym-stop-at-label}": [
                ["style", "top", '542px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_sym-partial}": [
                ["style", "top", '110px'],
                ["transform", "scaleY", '0.7']
            ],
            "${_dotted-line-3}": [
                ["style", "top", '581px'],
                ["color", "border-color", 'rgb(78, 81, 84)'],
                ["style", "left", '319px'],
                ["style", "height", '12px'],
                ["style", "opacity", '0.557418704032898'],
                ["style", "border-width", '1px'],
                ["style", "border-style", 'dotted']
            ],
            "${_horiz-rule}": [
                ["style", "top", '27px'],
                ["color", "border-color", 'rgba(41,41,41,1.00)'],
                ["style", "left", '34px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(89,107,124,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '642px'],
                ["style", "width", '638px']
            ],
            "${_stop-marker-4}": [
                ["style", "height", '20px'],
                ["color", "border-color", 'rgb(78, 81, 84)'],
                ["style", "top", '433px'],
                ["style", "border-style", 'solid']
            ],
            "${_sym-reverse-partial-stopped}": [
                ["style", "top", '362px'],
                ["transform", "scaleY", '0.7'],
                ["style", "left", '91px']
            ],
            "${_Background}": [
                ["color", "background-color", 'rgba(201,199,196,1.00)'],
                ["style", "top", '0px'],
                ["style", "border-style", 'solid'],
                ["style", "height", '638px'],
                ["color", "border-color", 'rgba(41,41,41,1.00)'],
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
                { id: "eid95", tween: [ "style", "${_sym-child}", "top", '254px', { fromValue: '254px'}], position: 0, duration: 0 },
                { id: "eid92", tween: [ "style", "${_sym-partial}", "top", '110px', { fromValue: '110px'}], position: 1000, duration: 0 },
                { id: "eid99", tween: [ "style", "${_sym-full-manual}", "top", '74px', { fromValue: '74px'}], position: 0, duration: 0 },
                { id: "eid102", tween: [ "style", "${_sym-looping}", "top", '615px', { fromValue: '615px'}], position: 0, duration: 0 },
                { id: "eid50", tween: [ "style", "${_sym-partial-twice}", "left", '376px', { fromValue: '91px'}], position: 4250, duration: 590 },
                { id: "eid31", tween: [ "style", "${_stage-playhead}", "left", '604px', { fromValue: '34px'}], position: 0, duration: 10000 },
                { id: "eid94", tween: [ "style", "${_sym-partial-twice}", "top", '218px', { fromValue: '218px'}], position: 0, duration: 0 },
                { id: "eid62", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-looping}', [] ], ""], position: 0 },
                { id: "eid118", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-full-manual-stopped}', [] ], ""], position: 0 },
                { id: "eid155", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-stop-at-label}', [] ], ""], position: 0 },
                { id: "eid153", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-stop-at-time}', [] ], ""], position: 0 },
                { id: "eid131", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_sym-reverse}', [] ], ""], position: 0 },
                { id: "eid41", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-full-manual}', [] ], ""], position: 0 },
                { id: "eid157", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-partial-stop-at}', [] ], ""], position: 1000 },
                { id: "eid83", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-child}', [] ], ""], position: 1000 },
                { id: "eid150", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-play-from-label}', ['oneSec'] ], ""], position: 1000 },
                { id: "eid145", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_sym-reverse-partial-stopped}', [] ], ""], position: 1000 },
                { id: "eid100", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-partial}', [] ], ""], position: 1000 },
                { id: "eid144", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${_sym-reverse-partial}', [] ], ""], position: 1000 },
                { id: "eid45", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-partial-twice}', [] ], ""], position: 1000 },
                { id: "eid159", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-partialCopy}', [] ], ""], position: 1000 },
                { id: "eid147", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-play-from-1}', [1000] ], ""], position: 1000 },
                { id: "eid151", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-play-from-1-stopped}', [1000] ], ""], position: 1000 },
                { id: "eid156", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_sym-stop-at-label}', ['stopHere'] ], ""], position: 5000 },
                { id: "eid158", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_sym-partial-stop-at}', [6000] ], ""], position: 5000 },
                { id: "eid154", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_sym-stop-at-time}', [7000] ], ""], position: 5000 },
                { id: "eid47", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym-partial-twice}', [] ], ""], position: 6000 },
                { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_sym-play-from-1-stopped}', [] ], ""], position: 7000 },
                { id: "eid160", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_sym-partialCopy}', [] ], ""], position: 7000 },
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
                "oneSec": 1000,
                "stopHere": 3000
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
                    rect: ['1px', '0px', '115px', '20px', 'auto', 'auto'],
                    id: 'symbol-bkgCopy',
                    stroke: [1, 'rgb(225, 2, 2)', 'none'],
                    type: 'rect',
                    fill: ['rgba(172,172,172,1.00)']
                },
                {
                    rect: ['-57px', '0px', '0px', '18px', 'auto', 'auto'],
                    id: 'symbol-playheadCopy',
                    stroke: [1, 'rgba(1,108,225,1.00)', 'solid'],
                    type: 'rect',
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
                    rect: ['1px', '0px', '570px', '20px', 'auto', 'auto'],
                    id: 'symbol-bkg',
                    stroke: [1, 'rgb(225, 2, 2)', 'none'],
                    type: 'rect',
                    fill: ['rgba(172,172,172,1.00)']
                },
                {
                    rect: ['0px', '0px', '0px', '18px', 'auto', 'auto'],
                    id: 'symbol-playhead',
                    stroke: [1, 'rgba(1,108,225,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(185,182,173,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_symbol-playhead}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(1,108,225,1.00)'],
                ["style", "left", '0px'],
                ["color", "border-color", 'rgb(1, 108, 225)'],
                ["style", "height", '18px'],
                ["style", "opacity", '1'],
                ["style", "border-width", '1px'],
                ["style", "width", '15px']
            ],
            "${_symbol-bkg}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(172,172,172,1.00)'],
                ["style", "border-style", 'none'],
                ["style", "left", '1px'],
                ["style", "width", '570px']
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
                    rect: ['57px', '0px', '458px', '20px', 'auto', 'auto'],
                    id: 'symbol-bkgCopy',
                    stroke: [1, 'rgb(225, 2, 2)', 'none'],
                    type: 'rect',
                    fill: ['rgba(172,172,172,1.00)']
                },
                {
                    rect: ['57px', '0px', '0px', '18px', 'auto', 'auto'],
                    id: 'symbol-playheadCopy',
                    stroke: [1, 'rgba(1,108,225,1.00)', 'solid'],
                    type: 'rect',
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
                    rect: ['57px', '10px', '344px', '10px', 'auto', 'auto'],
                    id: 'symbol-bkg',
                    stroke: [1, 'rgb(225, 2, 2)', 'none'],
                    type: 'rect',
                    fill: ['rgba(133,133,133,1.00)']
                },
                {
                    rect: ['0px', '10px', '0px', '8px', 'auto', 'auto'],
                    id: 'symbol-playhead',
                    stroke: [1, 'rgba(1,225,201,1.00)', 'solid'],
                    type: 'rect',
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
                ["style", "width", '344px']
            ],
            "${_symbol-bkg}": [
                ["style", "top", '10px'],
                ["color", "background-color", 'rgba(133,133,133,1.00)'],
                ["style", "height", '10px'],
                ["style", "border-style", 'none'],
                ["style", "left", '57px'],
                ["style", "width", '344px']
            ],
            "${_symbol-playhead}": [
                ["style", "top", '10px'],
                ["style", "height", '8px'],
                ["color", "border-color", 'rgba(1,225,201,1.00)'],
                ["style", "left", '57px'],
                ["style", "border-width", '1px']
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
                    rect: ['0px', '0px', '458px', '20px', 'auto', 'auto'],
                    id: 'symbol-bkgCopy',
                    stroke: [1, 'rgb(225, 2, 2)', 'none'],
                    type: 'rect',
                    fill: ['rgba(172,172,172,1.00)']
                },
                {
                    rect: ['0px', '0px', '0px', '18px', 'auto', 'auto'],
                    id: 'symbol-playheadCopy',
                    stroke: [1, 'rgba(1,108,225,1.00)', 'solid'],
                    type: 'rect',
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
                    rect: ['0px', '0px', '570px', '20px', 'auto', 'auto'],
                    id: 'symbol-bkg',
                    stroke: [1, 'rgb(225, 2, 2)', 'none'],
                    type: 'rect',
                    fill: ['rgba(172,172,172,1.00)']
                },
                {
                    rect: ['-1px', '0px', '0px', '18px', 'auto', 'auto'],
                    id: 'symbol-playhead',
                    stroke: [1, 'rgba(1,108,225,1.00)', 'solid'],
                    type: 'rect',
                    fill: ['rgba(185,182,173,1)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_symbol-playhead}": [
                ["style", "top", '0px'],
                ["style", "height", '18px'],
                ["color", "border-color", 'rgba(1,108,225,1.00)'],
                ["style", "left", '569px'],
                ["style", "border-width", '1px']
            ],
            "${_symbol-bkg}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(172,172,172,1.00)'],
                ["style", "border-style", 'none'],
                ["style", "left", '0px'],
                ["style", "width", '570px']
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
