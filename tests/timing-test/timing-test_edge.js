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
                id: 'sym_timing_full',
                type: 'rect',
                rect: ['18', '182','auto','auto','auto', 'auto']
            },
            {
                id: 'TimeReadout',
                type: 'text',
                rect: ['264px', '308px','111px','74px','auto', 'auto'],
                opacity: 0.58279344512195,
                text: "0",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 60, "rgba(255,255,255,1.00)", "normal", "none", ""]
            },
            {
                id: 'sym_five',
                type: 'rect',
                rect: ['210', '149','auto','auto','auto', 'auto']
            },
            {
                id: 'sym_fifteen',
                type: 'rect',
                rect: ['407px', '149px','auto','auto','auto', 'auto']
            },
            {
                id: 'sym_twenty_five',
                type: 'rect',
                rect: ['588px', '149px','auto','auto','auto', 'auto']
            }],
            symbolInstances: [
            {
                id: 'sym_twenty_five',
                symbolName: 'sym_twenty_five'
            },
            {
                id: 'sym_timing_full',
                symbolName: 'sym_timing_full',
                autoPlay: {

                }
            },
            {
                id: 'sym_five',
                symbolName: 'sym_five'
            },
            {
                id: 'sym_fifteen',
                symbolName: 'sym_fifteen'
            }
            ]
        },
    states: {
        "Base State": {
            "${_sym_twenty_five}": [
                ["style", "top", '149px'],
                ["style", "left", '588px']
            ],
            "${_TimeReadout}": [
                ["style", "top", '308px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "text-align", 'center'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "height", '74px'],
                ["style", "opacity", '0.58279344512195'],
                ["style", "left", '264px'],
                ["style", "font-size", '60px']
            ],
            "${_sym_fifteen}": [
                ["style", "top", '149px'],
                ["style", "left", '407px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(72,88,103,1.00)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '478px'],
                ["style", "width", '638px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 30000,
            autoPlay: false,
            timeline: [
                { id: "eid9", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym_timing_full}', [] ], ""], position: 0 },
                { id: "eid22", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym_five}', [] ], ""], position: 3169.7071316061 },
                { id: "eid23", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym_fifteen}', [] ], ""], position: 13169.707131606 },
                { id: "eid24", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_sym_twenty_five}', [] ], ""], position: 23169.707131606 }            ]
        }
    }
},
"sym_timing_full": {
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
                    rect: ['0px', '3px', '59px', '58px', 'auto', 'auto'],
                    borderRadius: ['50%', '50%', '50%', '50%'],
                    stroke: [0, 'rgba(0,0,0,1)', 'none'],
                    id: 'Ellipse',
                    opacity: 0.43454650044441,
                    type: 'ellipse',
                    fill: ['rgba(192,192,192,1)'],
                    c: [
                    {
                        rect: ['-26px', '4px', '111px', '74px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 44, 'rgba(41,41,41,1.00)', 'normal', 'none', ''],
                        id: 'TimeReadoutSymbolFull',
                        text: '0',
                        align: 'center',
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_TimeReadoutSymbolFull}": [
                ["style", "top", '4px'],
                ["style", "text-align", 'center'],
                ["style", "height", '74px'],
                ["color", "color", 'rgba(41,41,41,1.00)'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '-26px'],
                ["style", "font-size", '44px']
            ],
            "${_Ellipse}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0.43454650044441'],
                ["style", "left", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)']
            ],
            "${symbolSelector}": [
                ["style", "height", '58px'],
                ["style", "width", '59px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 30000,
            autoPlay: false,
            timeline: [
                { id: "eid1", tween: [ "style", "${_Ellipse}", "left", '545px', { fromValue: '0px'}], position: 0, duration: 30000 }            ]
        }
    }
},
"sym_five": {
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
                    rect: ['79px', '0px', '59px', '20px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(201,223,226,1)'],
                    c: [
                    {
                        rect: ['12px', '3px', '32px', '12px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 16, 'rgba(41,41,41,1)', '400', 'none', 'normal'],
                        id: 'Text2',
                        text: '5',
                        align: 'center',
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-277px']
            ],
            "${_Text2}": [
                ["style", "top", '3px'],
                ["style", "opacity", '0'],
                ["style", "left", '12px'],
                ["style", "font-size", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '59px']
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
                { id: "eid20", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500, easing: "easeOutQuad" },
                { id: "eid21", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500, easing: "easeInQuad" },
                { id: "eid15", tween: [ "style", "${_Rectangle}", "left", '49px', { fromValue: '-277px'}], position: 0, duration: 4000 },
                { id: "eid17", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2000 },
                { id: "eid18", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 2000 }            ]
        }
    }
},
"sym_fifteen": {
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
                    rect: ['79px', '0px', '59px', '20px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(201,223,226,1)'],
                    c: [
                    {
                        rect: ['12px', '3px', '32px', '12px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 16, 'rgba(41,41,41,1)', '400', 'none', 'normal'],
                        id: 'Text2',
                        text: '15',
                        align: 'center',
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-277px']
            ],
            "${_Text2}": [
                ["style", "top", '3px'],
                ["style", "opacity", '0'],
                ["style", "left", '12px'],
                ["style", "font-size", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '59px']
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
                { id: "eid20", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500, easing: "easeOutQuad" },
                { id: "eid21", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500, easing: "easeInQuad" },
                { id: "eid17", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2000 },
                { id: "eid18", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 2000 },
                { id: "eid15", tween: [ "style", "${_Rectangle}", "left", '49px', { fromValue: '-277px'}], position: 0, duration: 4000 }            ]
        }
    }
},
"sym_twenty_five": {
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
                    rect: ['79px', '0px', '59px', '20px', 'auto', 'auto'],
                    id: 'Rectangle',
                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                    type: 'rect',
                    fill: ['rgba(201,223,226,1)'],
                    c: [
                    {
                        rect: ['12px', '3px', '32px', '12px', 'auto', 'auto'],
                        font: ['Arial, Helvetica, sans-serif', 16, 'rgba(41,41,41,1)', '400', 'none', 'normal'],
                        id: 'Text2',
                        text: '25',
                        align: 'center',
                        type: 'text'
                    }]
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["style", "opacity", '0'],
                ["style", "left", '-277px']
            ],
            "${_Text2}": [
                ["style", "top", '3px'],
                ["style", "opacity", '0'],
                ["style", "left", '12px'],
                ["style", "font-size", '16px']
            ],
            "${symbolSelector}": [
                ["style", "height", '20px'],
                ["style", "width", '59px']
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
                { id: "eid20", tween: [ "style", "${_Text2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 500, easing: "easeOutQuad" },
                { id: "eid21", tween: [ "style", "${_Text2}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 500, easing: "easeInQuad" },
                { id: "eid15", tween: [ "style", "${_Rectangle}", "left", '49px', { fromValue: '-277px'}], position: 0, duration: 4000 },
                { id: "eid17", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 2000 },
                { id: "eid18", tween: [ "style", "${_Rectangle}", "opacity", '0', { fromValue: '1'}], position: 2000, duration: 2000 }            ]
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
})(jQuery, AdobeEdge, "EDGE-40695230");
