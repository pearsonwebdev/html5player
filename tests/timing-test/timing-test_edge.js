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
                rect: ['0px', '1px','624px','470px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","solid"]
            },
            {
                id: 'Ellipse',
                type: 'ellipse',
                rect: ['18px', '185px','59px','58px','auto', 'auto'],
                borderRadius: ["50%", "50%", "50%", "50%"],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'TimeReadout',
                type: 'text',
                rect: ['264px', '308px','111px','74px','auto', 'auto'],
                text: "0",
                align: "center",
                font: ['Arial, Helvetica, sans-serif', 60, "rgba(41,41,41,1.00)", "normal", "none", ""]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '478px'],
                ["style", "width", '638px']
            ],
            "${_Background}": [
                ["color", "background-color", 'rgba(185,182,173,1.00)'],
                ["color", "border-color", 'rgba(41,41,41,1.00)'],
                ["style", "height", '470px'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '7px'],
                ["style", "width", '624px']
            ],
            "${_Ellipse}": [
                ["style", "top", '182px'],
                ["style", "left", '18px'],
                ["color", "background-color", 'rgba(130,130,130,1.00)']
            ],
            "${_TimeReadout}": [
                ["style", "top", '308px'],
                ["style", "text-align", 'center'],
                ["color", "color", 'rgba(41,41,41,1.00)'],
                ["style", "height", '74px'],
                ["style", "font-family", 'Arial, Helvetica, sans-serif'],
                ["style", "left", '264px'],
                ["style", "font-size", '60px']
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
                { id: "eid1", tween: [ "style", "${_Ellipse}", "left", '563px', { fromValue: '18px'}], position: 0, duration: 30000 },
                { id: "eid6", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(130,130,130,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(130,130,130,1.00)'}], position: 30000, duration: 0 }            ]
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
