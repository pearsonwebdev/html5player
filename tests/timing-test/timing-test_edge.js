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
                            id: 'sym_timing_full',
                            symbolName: 'sym_timing_full',
                            type: 'rect',
                            rect: ['18', '182', '59', '58', 'auto', 'auto']
                        },
                        {
                            id: 'TimeReadout',
                            type: 'text',
                            rect: ['264', '308', '111px', '74', 'auto', 'auto'],
                            opacity: 0.58279344512195,
                            text: "0",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [60, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'sym_five',
                            symbolName: 'sym_five',
                            type: 'rect',
                            rect: ['210', '149', '59', '20', 'auto', 'auto']
                        },
                        {
                            id: 'sym_fifteen',
                            symbolName: 'sym_fifteen',
                            type: 'rect',
                            rect: ['407', '149', '59', '20', 'auto', 'auto']
                        },
                        {
                            id: 'sym_twenty_five',
                            symbolName: 'sym_twenty_five',
                            type: 'rect',
                            rect: ['588', '149', '59', '20', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '638', '478', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(72,88,103,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    data: [
                            [ "eid9", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym_timing_full}', [] ] ],
                            [ "eid22", "trigger", 3169.7071316061, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym_five}', [] ] ],
                            [ "eid23", "trigger", 13169.707131606, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym_fifteen}', [] ] ],
                            [ "eid24", "trigger", 23169.707131606, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${sym_twenty_five}', [] ] ]
                    ]
                }
            },
            "sym_timing_full": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: [0, 0, '59px', '58px', 'auto', 'auto'],
                            opacity: '0.43454650044441',
                            fill: ['rgba(255,255,255,1.00)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [44, 'px'], 'rgba(41,41,41,1.00)', 'normal', 'none', '', '', ''],
                                type: 'text',
                                id: 'TimeReadoutSymbolFull',
                                text: '0',
                                align: 'center',
                                rect: [-26, 4, '111px', 74, 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 59, 58]
                        }
                    }
                },
                timeline: {
                    duration: 30000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1",
                            "left",
                            0,
                            30000,
                            "linear",
                            "${Ellipse}",
                            '0px',
                            '545px'
                        ]
                    ]
                }
            },
            "sym_five": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [-277, 0, '59px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(201,223,226,1)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(41,41,41,1)', '400', 'none', 'normal', '', ''],
                                opacity: '0',
                                type: 'text',
                                id: 'Text2',
                                text: '5',
                                align: 'center',
                                rect: [12, 3, '32px', '12px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 59, 20]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: false,
                    data: [
                        [
                            "eid20",
                            "opacity",
                            1500,
                            500,
                            "easeOutQuad",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            2000,
                            500,
                            "easeInQuad",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid15",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${Rectangle}",
                            '-277px',
                            '49px'
                        ],
                        [
                            "eid17",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            2000,
                            2000,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "sym_fifteen": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [-277, 0, '59px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(201,223,226,1)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(41,41,41,1)', '400', 'none', 'normal', '', ''],
                                opacity: '0',
                                type: 'text',
                                id: 'Text2',
                                text: '15',
                                align: 'center',
                                rect: [12, 3, '32px', '12px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 59, 20]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: false,
                    data: [
                        [
                            "eid20",
                            "opacity",
                            1500,
                            500,
                            "easeOutQuad",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            2000,
                            500,
                            "easeInQuad",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            2000,
                            2000,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid15",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${Rectangle}",
                            '-277px',
                            '49px'
                        ]
                    ]
                }
            },
            "sym_twenty_five": {
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
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: [-277, 0, '59px', '20px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(201,223,226,1)'],
                            c: [
                            {
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(41,41,41,1)', '400', 'none', 'normal', '', ''],
                                opacity: '0',
                                type: 'text',
                                id: 'Text2',
                                text: '25',
                                align: 'center',
                                rect: [12, 3, '32px', '12px', 'auto', 'auto']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 59, 20]
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: false,
                    data: [
                        [
                            "eid20",
                            "opacity",
                            1500,
                            500,
                            "easeOutQuad",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            2000,
                            500,
                            "easeInQuad",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid15",
                            "left",
                            0,
                            4000,
                            "linear",
                            "${Rectangle}",
                            '-277px',
                            '49px'
                        ],
                        [
                            "eid17",
                            "opacity",
                            0,
                            2000,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            2000,
                            2000,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("timing-test_edgeActions.js");
})("EDGE-40695230");
