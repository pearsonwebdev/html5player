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
                            id: 'Ellipse2',
                            type: 'ellipse',
                            rect: ['48px', '81px', '87px', '87px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0.20696773373984,
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2Copy',
                            type: 'ellipse',
                            rect: ['248', '21', '87px', '87px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0.20696772634983063,
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2Copy3',
                            type: 'ellipse',
                            rect: ['334', '294', '87px', '87px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0.20696772634983063,
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2Copy11',
                            type: 'ellipse',
                            rect: ['64', '300', '55', '55', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0.20696772634983063,
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2Copy9',
                            type: 'ellipse',
                            rect: ['439', '287', '313', '313', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0.11378937269129,
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2Copy14',
                            type: 'ellipse',
                            rect: ['359', '-144', '582', '582', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0.037220520520113,
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2Copy7',
                            type: 'ellipse',
                            rect: ['378', '51', '121', '121', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0.20696772634983063,
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2Copy4',
                            type: 'ellipse',
                            rect: ['527', '200', '55', '55', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0.20696772634983063,
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2Copy13',
                            type: 'ellipse',
                            rect: ['279', '180', '87', '87', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0.12671493902439,
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2Copy12',
                            type: 'ellipse',
                            rect: ['555', '-56', '135', '135', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0.10318215724414,
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2Copy8',
                            type: 'ellipse',
                            rect: ['461', '51', '55', '55', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0.20696772634983063,
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2Copy5',
                            type: 'ellipse',
                            rect: ['640', '38', '87px', '87px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0.20696772634983063,
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2Copy6',
                            type: 'ellipse',
                            rect: ['602', '213', '135', '135', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0.20696772634983063,
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2Copy2',
                            type: 'ellipse',
                            rect: ['71', '95', '221', '221', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0.20696772634983063,
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2Copy10',
                            type: 'ellipse',
                            rect: ['-131', '-137', '404', '404', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: 0.12010924057747,
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'sym_one',
                            symbolName: 'sym_one',
                            type: 'rect',
                            rect: ['177', '163', '52', '52', 'auto', 'auto']
                        },
                        {
                            id: 'sym_two',
                            symbolName: 'sym_two',
                            type: 'rect',
                            rect: ['374', '163', '52', '52', 'auto', 'auto']
                        },
                        {
                            id: 'sym_three',
                            symbolName: 'sym_three',
                            type: 'rect',
                            rect: ['579', '163', '52', '52', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '800', '400', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(72,88,103,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1",
                            "background-color",
                            0,
                            4000,
                            "linear",
                            "${Stage}",
                            'rgba(72,88,103,1)',
                            'rgba(212,217,220,1.00)'
                        ],
                            [ "eid15", "trigger", 750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym_one}', [] ] ],
                            [ "eid16", "trigger", 1750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym_two}', [] ] ],
                            [ "eid17", "trigger", 2750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym_three}', [] ] ]
                    ]
                }
            },
            "sym_one": {
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
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: [-17, -17, '87px', '87px', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.6', '0.6', 1], ['50%', '50%']],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            fill: ['rgba(46,46,46,1.00)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [48, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', '', ''],
                                type: 'text',
                                id: 'Text',
                                text: '1',
                                align: 'center',
                                rect: [28, 17, 29, '38px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 52, 52]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid10",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid12",
                            "scaleY",
                            259,
                            241,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0.6'
                        ],
                        [
                            "eid8",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid11",
                            "scaleX",
                            259,
                            241,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0.6'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "sym_two": {
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
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: [-17, -17, '87px', '87px', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.6', '0.6', 1], ['50%', '50%']],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            fill: ['rgba(46,46,46,1.00)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [48, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', '', ''],
                                type: 'text',
                                id: 'Text',
                                text: '2',
                                align: 'center',
                                rect: [28, 17, 29, '38px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 52, 52]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid10",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid12",
                            "scaleY",
                            259,
                            241,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0.6'
                        ],
                        [
                            "eid8",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid11",
                            "scaleX",
                            259,
                            241,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0.6'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "sym_three": {
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
                            id: 'RoundRect',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: [-17, -17, '87px', '87px', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.6', '0.6', 1], ['50%', '50%']],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            fill: ['rgba(46,46,46,1.00)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [48, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', '', ''],
                                type: 'text',
                                id: 'Text',
                                text: '3',
                                align: 'center',
                                rect: [28, 17, 29, '38px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 52, 52]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid10",
                            "scaleY",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid12",
                            "scaleY",
                            259,
                            241,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0.6'
                        ],
                        [
                            "eid8",
                            "scaleX",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0.6',
                            '1'
                        ],
                        [
                            "eid11",
                            "scaleX",
                            259,
                            241,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0.6'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("width-test_edgeActions.js");
})("EDGE-342396983");
