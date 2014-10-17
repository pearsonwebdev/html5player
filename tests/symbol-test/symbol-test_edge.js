/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-2.0.3.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Background',
                            type: 'rect',
                            rect: ['0px', '0', '624', '638', 'auto', 'auto'],
                            fill: ["rgba(201,199,196,1.00)"],
                            stroke: [7,"rgba(41,41,41,1.00)","solid"]
                        },
                        {
                            id: 'stage-playhead',
                            type: 'rect',
                            rect: ['34', '27', '0px', '612', 'auto', 'auto'],
                            fill: ["rgba(185,182,173,1)"],
                            stroke: [1,"rgba(225,2,2,1.00)","solid"]
                        },
                        {
                            id: 'zero',
                            type: 'text',
                            rect: ['31px', '13', '18px', '22px', 'auto', 'auto'],
                            text: "0",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'ten',
                            type: 'text',
                            rect: ['596', '13', '18px', '22px', 'auto', 'auto'],
                            text: "10",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'horiz-rule',
                            type: 'rect',
                            rect: ['34', '27', '576px', '0px', 'auto', 'auto'],
                            fill: ["rgba(185,182,173,1)"],
                            stroke: [1,"rgba(41,41,41,1.00)","solid"]
                        },
                        {
                            id: 'stop-marker-7',
                            type: 'rect',
                            rect: ['433px', '577', '0px', '20', 'auto', 'auto'],
                            fill: ["rgba(185,182,173,1)"],
                            stroke: [1,"rgb(78, 81, 84)","solid"]
                        },
                        {
                            id: 'stop-marker-6',
                            type: 'rect',
                            rect: ['205', '541', '0px', '20', 'auto', 'auto'],
                            fill: ["rgba(185,182,173,1)"],
                            stroke: [1,"rgb(78, 81, 84)","solid"]
                        },
                        {
                            id: 'stop-marker-5',
                            type: 'rect',
                            rect: ['433px', '505', '0px', '20', 'auto', 'auto'],
                            fill: ["rgba(185,182,173,1)"],
                            stroke: [1,"rgb(78, 81, 84)","solid"]
                        },
                        {
                            id: 'stop-marker-4',
                            type: 'rect',
                            rect: ['433px', '433', '0px', '20', 'auto', 'auto'],
                            fill: ["rgba(185,182,173,1)"],
                            stroke: [1,"rgb(78, 81, 84)","solid"]
                        },
                        {
                            id: 'stop-marker-3',
                            type: 'rect',
                            rect: ['433px', '361', '0px', '20', 'auto', 'auto'],
                            fill: ["rgba(185,182,173,1)"],
                            stroke: [1,"rgb(78, 81, 84)","solid"]
                        },
                        {
                            id: 'stop-marker-2',
                            type: 'rect',
                            rect: ['433px', '181', '0px', '20', 'auto', 'auto'],
                            fill: ["rgba(185,182,173,1)"],
                            stroke: [1,"rgb(78, 81, 84)","solid"]
                        },
                        {
                            id: 'stop-marker-1',
                            type: 'rect',
                            rect: ['433px', '145', '0px', '20', 'auto', 'auto'],
                            fill: ["rgba(185,182,173,1)"],
                            stroke: [1,"rgba(78,81,84,1.00)","solid"]
                        },
                        {
                            id: 'sym-looping',
                            symbolName: 'sym-looping',
                            type: 'rect',
                            rect: ['34', '615', '571', '20', 'auto', 'auto'],
                            opacity: 1,
                            transform: [[],[],[],['1','0.64288']]
                        },
                        {
                            id: 'sym-partial-stop-at',
                            symbolName: 'sym-partial',
                            type: 'rect',
                            rect: ['91', '578', '458', '20', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.7']]
                        },
                        {
                            id: 'sym-stop-at-label',
                            symbolName: 'sym-full-manual',
                            type: 'rect',
                            rect: ['34px', '542', '571', '20', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.7']]
                        },
                        {
                            id: 'sym-stop-at-time',
                            symbolName: 'sym-full-manual',
                            type: 'rect',
                            rect: ['34px', '506', '571', '20', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.7']]
                        },
                        {
                            id: 'sym-play-from-label',
                            symbolName: 'sym-full-manual',
                            type: 'rect',
                            rect: ['34px', '470', '571', '20', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.7']]
                        },
                        {
                            id: 'sym-play-from-1-stopped',
                            symbolName: 'sym-full-manual',
                            type: 'rect',
                            rect: ['34px', '434', '571', '20', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.7']]
                        },
                        {
                            id: 'sym-play-from-1',
                            symbolName: 'sym-full-manual',
                            type: 'rect',
                            rect: ['34px', '398', '571', '20', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.7']]
                        },
                        {
                            id: 'sym-reverse-partial-stopped',
                            symbolName: 'sym-reverse-partial',
                            type: 'rect',
                            rect: ['91', '362', '458', '20', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.7']]
                        },
                        {
                            id: 'sym-reverse-partial',
                            symbolName: 'sym-reverse-partial',
                            type: 'rect',
                            rect: ['91', '326', '458', '20', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.7']]
                        },
                        {
                            id: 'sym-reverse',
                            symbolName: 'sym-reverse',
                            type: 'rect',
                            rect: ['35', '290', '571', '20', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.7']]
                        },
                        {
                            id: 'sym-child',
                            symbolName: 'sym-child',
                            type: 'rect',
                            rect: ['34', '254', '571', '20', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.7']]
                        },
                        {
                            id: 'sym-partial-twice',
                            symbolName: 'sym-partial-twice',
                            type: 'rect',
                            rect: ['91', '218', '116', '20', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.7']]
                        },
                        {
                            id: 'sym-partialCopy',
                            symbolName: 'sym-partial',
                            type: 'rect',
                            rect: ['91', '182', '458', '20', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.7']]
                        },
                        {
                            id: 'sym-full-manual-stopped',
                            symbolName: 'sym-full-manual',
                            type: 'rect',
                            rect: ['34', '146', '571', '20', 'auto', 'auto'],
                            clip: 'rect(0px 571px 20px 0px)',
                            transform: [[],[],[],['1','0.7']]
                        },
                        {
                            id: 'sym-partial',
                            symbolName: 'sym-partial',
                            type: 'rect',
                            rect: ['91', '110', '458', '20', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.7']]
                        },
                        {
                            id: 'sym-full-manual',
                            symbolName: 'sym-full-manual',
                            type: 'rect',
                            rect: ['34px', '74', '571', '20', 'auto', 'auto'],
                            transform: [[],[],[],['1','0.7']]
                        },
                        {
                            id: 'dotted-line-3',
                            type: 'rect',
                            rect: ['319', '581', '0px', '12', 'auto', 'auto'],
                            opacity: 0.5574187040329,
                            fill: ["rgba(185,182,173,1)"],
                            stroke: [1,"rgb(78, 81, 84)","dotted"]
                        },
                        {
                            id: 'dotted-line-2',
                            type: 'rect',
                            rect: ['319', '545', '0px', '12', 'auto', 'auto'],
                            opacity: 0.5574187040329,
                            fill: ["rgba(185,182,173,1)"],
                            stroke: [1,"rgb(78, 81, 84)","dotted"]
                        },
                        {
                            id: 'dotted-line-1',
                            type: 'rect',
                            rect: ['319', '509', '0px', '12', 'auto', 'auto'],
                            opacity: 0.55741869918699,
                            fill: ["rgba(185,182,173,1)"],
                            stroke: [1,"rgb(78, 81, 84)","dotted"]
                        },
                        {
                            id: 'text-symbol-partialCopy',
                            type: 'text',
                            rect: ['43', '274', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 1,
                            text: "7) Edge's Play Reverse",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'text-symbol-partialCopy7',
                            type: 'text',
                            rect: ['43', '310', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 1,
                            text: "8) Edge's Play Reverse, shorter duration",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'text-symbol-partialCopy8',
                            type: 'text',
                            rect: ['43', '346', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 1,
                            text: "9) Edge's Play Reverse, stopped prematurely",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'text-symbol-partialCopy5',
                            type: 'text',
                            rect: ['43', '382', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 1,
                            text: "10) Edge's playFrom(time) starting at 1 sec",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'text-symbol-partialCopy10',
                            type: 'text',
                            rect: ['43', '418', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 1,
                            text: "11) Edge's playFrom(time) starting at 1 sec, stopped prematurely",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'text-symbol-partialCopy9',
                            type: 'text',
                            rect: ['43', '454', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 1,
                            text: "12) Edge's playFrom(label) starting at 1 sec",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'text-symbol-partialCopy13',
                            type: 'text',
                            rect: ['43', '562', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 1,
                            text: "15) Edge's stopAt(time) called at dotted line to stop at symbol's 6sec (started late)",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'text-symbol-partialCopy12',
                            type: 'text',
                            rect: ['43', '490', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 1,
                            text: "13) Edge's stopAt(time) called at dotted line to stop at 7sec",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'text-symbol-looping',
                            type: 'text',
                            rect: ['43', '598', 'auto', '15', 'auto', 'auto'],
                            opacity: 1,
                            text: "16) Symbol Looping",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", ""]
                        },
                        {
                            id: 'text-symbol-partialCopy11',
                            type: 'text',
                            rect: ['43', '526', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 1,
                            text: "14) Edge's stopAt(label) called at dotted line to stop at 3sec",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'text-symbol-partialCopy2',
                            type: 'text',
                            rect: ['43', '238', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 1,
                            text: "6) Nested symbols with different start times",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'text-symbol-partialCopy3',
                            type: 'text',
                            rect: ['43', '202', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 1,
                            text: "5) Shorter duration, triggered twice",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'text-symbol-partialCopy14',
                            type: 'text',
                            rect: ['43', '166', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 1,
                            text: "4) Start late, end early",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'text-symbol-partialCopy4',
                            type: 'text',
                            rect: ['43', '130', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 1,
                            text: "3) Full duration, stopped prematurely",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'text-symbol-partial',
                            type: 'text',
                            rect: ['43', '94', 'auto', 'auto', 'auto', 'auto'],
                            opacity: 1,
                            text: "2) Shorter duration, triggered at 1 sec",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'text-symbol-full-man',
                            type: 'text',
                            rect: ['43', '57', 'auto', 'auto', 'auto', 'auto'],
                            text: "1) Full length of timeline",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'text-symbol-use-cases',
                            type: 'text',
                            rect: ['30', '36', 'auto', 'auto', 'auto', 'auto'],
                            text: "Symbol use cases:",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(0,0,0,1)", "700", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'text-stage-time',
                            type: 'text',
                            rect: ['498', '12', 'auto', 'auto', 'auto', 'auto'],
                            text: "Stage Time",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '638', '642', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(89,107,124,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: false,
                    data: [
                        [
                            "eid95",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sym-child}",
                            '254px',
                            '254px'
                        ],
                        [
                            "eid50",
                            "left",
                            4250,
                            590,
                            "linear",
                            "${sym-partial-twice}",
                            '91px',
                            '376px'
                        ],
                        [
                            "eid92",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${sym-partial}",
                            '110px',
                            '110px'
                        ],
                        [
                            "eid99",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sym-full-manual}",
                            '74px',
                            '74px'
                        ],
                        [
                            "eid31",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${stage-playhead}",
                            '34px',
                            '604px'
                        ],
                        [
                            "eid94",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sym-partial-twice}",
                            '218px',
                            '218px'
                        ],
                        [
                            "eid102",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sym-looping}",
                            '615px',
                            '615px'
                        ],
                            [ "eid62", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym-looping}', [] ] ],
                            [ "eid131", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${sym-reverse}', [] ] ],
                            [ "eid155", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym-stop-at-label}', [] ] ],
                            [ "eid153", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym-stop-at-time}', [] ] ],
                            [ "eid118", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym-full-manual-stopped}', [] ] ],
                            [ "eid41", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym-full-manual}', [] ] ],
                            [ "eid151", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym-play-from-1-stopped}', [1000] ] ],
                            [ "eid144", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${sym-reverse-partial}', [] ] ],
                            [ "eid83", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym-child}', [] ] ],
                            [ "eid159", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym-partialCopy}', [] ] ],
                            [ "eid100", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym-partial}', [] ] ],
                            [ "eid147", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym-play-from-1}', [1000] ] ],
                            [ "eid150", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym-play-from-label}', ['oneSec'] ] ],
                            [ "eid157", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym-partial-stop-at}', [] ] ],
                            [ "eid45", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym-partial-twice}', [] ] ],
                            [ "eid145", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['playReverse', '${sym-reverse-partial-stopped}', [] ] ],
                            [ "eid154", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sym-stop-at-time}', [7000] ] ],
                            [ "eid158", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sym-partial-stop-at}', [6000] ] ],
                            [ "eid156", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sym-stop-at-label}', ['stopHere'] ] ],
                            [ "eid47", "trigger", 6000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym-partial-twice}', [] ] ],
                            [ "eid152", "trigger", 7000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sym-play-from-1-stopped}', [] ] ],
                            [ "eid160", "trigger", 7000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sym-partialCopy}', [] ] ],
                            [ "eid146", "trigger", 7000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sym-reverse-partial-stopped}', [] ] ],
                            [ "eid119", "trigger", 7000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sym-full-manual-stopped}', [] ] ],
                            [ "eid42", "trigger", 10000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${sym-full-manual}', [] ] ]
                    ]
                }
            },
            "MySymbol": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '76px', '24px', 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 76, 24]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: false,
                    data: [
                        [
                            "eid2",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${RectangleCopy}",
                            '0px',
                            '560px'
                        ]
                    ]
                }
            },
            "PartialSymbol": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: [141, 0, '76px', '24px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 76, 24]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid13",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${RectangleCopy}",
                            '141px',
                            '422px'
                        ]
                    ]
                }
            },
            "sym-full-manual": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [1, 0, 570, '20px', 'auto', 'auto'],
                            id: 'symbol-bkgCopy2',
                            stroke: [1, 'rgb(225, 2, 2)', 'none'],
                            type: 'rect',
                            fill: ['rgba(172,172,172,1.00)']
                        },
                        {
                            rect: [0, 0, '0px', 18, 'auto', 'auto'],
                            id: 'symbol-playheadCopy2',
                            stroke: ['1px', 'rgba(1,108,225,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(185,182,173,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 571, 20]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: false,
                    labels: {
                        "oneSec": 1000,
                        "stopHere": 3000
                    },
                    data: [
                        [
                            "eid40",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${symbol-playheadCopy2}",
                            '0px',
                            '570px'
                        ]
                    ]
                }
            },
            "sym-partial-twice": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'symbol-bkgCopy',
                            stroke: [1, 'rgb(225, 2, 2)', 'none'],
                            rect: [1, 0, 115, '20px', 'auto', 'auto'],
                            fill: ['rgba(172,172,172,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'symbol-playheadCopy',
                            stroke: ['1px', 'rgba(1,108,225,1.00)', 'solid'],
                            rect: [0, 0, '0px', 18, 'auto', 'auto'],
                            fill: ['rgba(185,182,173,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 116, 20]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid37",
                            "left",
                            0,
                            2000,
                            "linear",
                            "${symbol-playheadCopy}",
                            '0px',
                            '114px'
                        ]
                    ]
                }
            },
            "sym-looping": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'symbol-bkg',
                            stroke: [1, 'rgb(225, 2, 2)', 'none'],
                            rect: [1, 0, 570, '20px', 'auto', 'auto'],
                            fill: ['rgba(172,172,172,1.00)']
                        },
                        {
                            type: 'rect',
                            opacity: '1',
                            id: 'symbol-playhead',
                            stroke: ['1px', 'rgb(1, 108, 225)', 'solid'],
                            rect: [0, 0, 15, 18, 'auto', 'auto'],
                            fill: ['rgba(1,108,225,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 571, 20]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid57",
                            "width",
                            0,
                            1000,
                            "linear",
                            "${symbol-playhead}",
                            '15px',
                            '0px'
                        ],
                        [
                            "eid54",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${symbol-playhead}",
                            '0px',
                            '570px'
                        ],
                        [
                            "eid55",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${symbol-playhead}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "sym-child": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'symbol-bkgCopy',
                            stroke: [1, 'rgb(225, 2, 2)', 'none'],
                            rect: [57, 0, 458, '20px', 'auto', 'auto'],
                            fill: ['rgba(172,172,172,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'symbol-playheadCopy',
                            stroke: ['1px', 'rgb(1, 108, 225)', 'solid'],
                            rect: [57, 0, '0px', 18, 'auto', 'auto'],
                            fill: ['rgba(185,182,173,1)']
                        },
                        {
                            rect: ['57px', '0', 344, 20, 'auto', 'auto'],
                            id: 'sym-grand-child',
                            symbolName: 'sym-grand-child',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 571, 20]
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: false,
                    data: [
                        [
                            "eid82",
                            "left",
                            0,
                            8000,
                            "linear",
                            "${symbol-playheadCopy}",
                            '57px',
                            '513px'
                        ],
                            [ "eid85", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym-grand-child}', [] ] ]
                    ]
                }
            },
            "sym-grand-child": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'symbol-bkg',
                            stroke: [1, 'rgb(225, 2, 2)', 'none'],
                            rect: [57, 10, 344, 10, 'auto', 'auto'],
                            fill: ['rgba(133,133,133,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'symbol-playhead',
                            stroke: ['1px', 'rgba(1,225,201,1.00)', 'solid'],
                            rect: [57, 10, '0px', 8, 'auto', 'auto'],
                            fill: ['rgba(185,182,173,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 344, 20]
                        }
                    }
                },
                timeline: {
                    duration: 6000,
                    autoPlay: false,
                    data: [
                        [
                            "eid84",
                            "left",
                            0,
                            6000,
                            "linear",
                            "${symbol-playhead}",
                            '57px',
                            '399px'
                        ]
                    ]
                }
            },
            "sym-partial": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'symbol-bkgCopy',
                            stroke: [1, 'rgb(225, 2, 2)', 'none'],
                            rect: [0, 0, 458, '20px', 'auto', 'auto'],
                            fill: ['rgba(172,172,172,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'symbol-playheadCopy',
                            stroke: ['1px', 'rgb(1, 108, 225)', 'solid'],
                            rect: [0, 0, '0px', 18, 'auto', 'auto'],
                            fill: ['rgba(185,182,173,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 458, 20]
                        }
                    }
                },
                timeline: {
                    duration: 8000,
                    autoPlay: false,
                    data: [
                        [
                            "eid90",
                            "left",
                            0,
                            8000,
                            "linear",
                            "${symbol-playheadCopy}",
                            '0px',
                            '456px'
                        ]
                    ]
                }
            },
            "sym-reverse": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'symbol-bkg',
                            stroke: [1, 'rgb(225, 2, 2)', 'none'],
                            rect: [0, 0, 570, '20px', 'auto', 'auto'],
                            fill: ['rgba(172,172,172,1.00)']
                        },
                        {
                            type: 'rect',
                            id: 'symbol-playhead',
                            stroke: ['1px', 'rgba(1,108,225,1.00)', 'solid'],
                            rect: [569, 0, '0px', 18, 'auto', 'auto'],
                            fill: ['rgba(185,182,173,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 571, 20]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: false,
                    data: [
                        [
                            "eid125",
                            "left",
                            0,
                            10000,
                            "linear",
                            "${symbol-playhead}",
                            '569px',
                            '-1px'
                        ]
                    ]
                }
            },
            "sym-reverse-partial": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, 458, '20px', 'auto', 'auto'],
                            id: 'symbol-bkgCopy',
                            stroke: [1, 'rgb(225, 2, 2)', 'none'],
                            type: 'rect',
                            fill: ['rgba(172,172,172,1.00)']
                        },
                        {
                            rect: [456, 0, '0px', 18, 'auto', 'auto'],
                            id: 'symbol-playheadCopy',
                            stroke: ['1px', 'rgb(1, 108, 225)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(185,182,173,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 458, 20]
                        }
                    }
                },
                timeline: {
                    duration: 9000,
                    autoPlay: false,
                    data: [
                        [
                            "eid143",
                            "left",
                            1000,
                            8000,
                            "linear",
                            "${symbol-playheadCopy}",
                            '456px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("symbol-test_edgeActions.js");
})("EDGE-126256608");
