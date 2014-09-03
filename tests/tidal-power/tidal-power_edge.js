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
                id: 'background_layer',
                type: 'image',
                rect: ['0px', '-128px','638px','638px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"background_layer.png",'0px','0px'],
                transform: [[],[],[],['0.9','0.9']]
            },
            {
                id: 'water',
                type: 'image',
                rect: ['-1833px', '154px','3306px','432px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"water.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'back_glowballs1_symb',
                display: 'none',
                type: 'rect',
                rect: ['346', '102','auto','auto','auto', 'auto']
            },
            {
                id: 'back_glowballs2_symb',
                display: 'none',
                type: 'rect',
                rect: ['346', '102','auto','auto','auto', 'auto']
            },
            {
                id: 'back_glowballs3_symb',
                display: 'none',
                type: 'rect',
                rect: ['346', '102','auto','auto','auto', 'auto']
            },
            {
                id: 'back_glowballs4_symb',
                display: 'none',
                type: 'rect',
                rect: ['346', '102','auto','auto','auto', 'auto']
            },
            {
                id: 'power_lines',
                type: 'image',
                rect: ['-603px', '-428px','2148px','1019px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"power_lines.png",'0px','0px'],
                transform: [[],[],[],['0.128','0.128']]
            },
            {
                id: 'front_glowballs1_symb',
                display: 'none',
                type: 'rect',
                rect: ['375', '101','auto','auto','auto', 'auto']
            },
            {
                id: 'front_glowballs2_symb',
                display: 'none',
                type: 'rect',
                rect: ['375', '101','auto','auto','auto', 'auto']
            },
            {
                id: 'front_glowballs3_symb',
                display: 'none',
                type: 'rect',
                rect: ['375', '101','auto','auto','auto', 'auto']
            },
            {
                id: 'front_glowballs4_symb',
                display: 'none',
                type: 'rect',
                rect: ['375', '101','auto','auto','auto', 'auto']
            },
            {
                id: 'foreground_layer',
                type: 'image',
                tag: 'img',
                rect: ['276px', '4px','139px','592px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"foreground_layer.png",'0px','0px'],
                transform: [[],[],[],['0.6','0.6']]
            },
            {
                id: 'turbine_left',
                type: 'image',
                tag: 'img',
                rect: ['263px', '354px','157px','57px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"turbine_1.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'left_blades_symb',
                type: 'rect',
                rect: ['292', '317','auto','auto','auto', 'auto']
            },
            {
                id: 'turbine_L_to_M',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['297px', '259px','96px','233px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"turbine_2.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'turbine_middle',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['317px', '259px','60px','233px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"turbine_3.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'turbine_M_to_R',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['300px', '259px','96px','233px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"turbine_4.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'turbine_right',
                display: 'none',
                type: 'image',
                tag: 'img',
                rect: ['271px', '354px','157px','57px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"turbine_5.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'right_blades_symb',
                display: 'none',
                type: 'rect',
                rect: ['366', '317','auto','auto','auto', 'auto']
            },
            {
                id: 'generator_glow_symb',
                display: 'none',
                type: 'rect',
                rect: ['311', '193','auto','auto','auto', 'auto']
            },
            {
                id: 'tide_in',
                type: 'image',
                rect: ['-4px', '341px','223px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tide_in.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'tide_out',
                type: 'image',
                rect: ['418px', '341px','224px','75px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tide_out.png",'0px','0px'],
                transform: [[],[],[],['0.5','0.5']]
            },
            {
                id: 'labels_static',
                type: 'rect',
                rect: ['82', '144','auto','auto','auto', 'auto']
            },
            {
                id: 'left_letterbox',
                type: 'rect',
                rect: ['0px', '0px','32px','478px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,0.00)","none"]
            },
            {
                id: 'right_letterbox',
                type: 'rect',
                rect: ['606px', '0px','32px','478px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,0.00)","none"]
            }],
            symbolInstances: [
            {
                id: 'back_glowballs1_symb',
                symbolName: 'back_glowballs_symb',
                autoPlay: {

                }
            },
            {
                id: 'labels_static',
                symbolName: 'labels_symb',
                autoPlay: {

                }
            },
            {
                id: 'back_glowballs4_symb',
                symbolName: 'back_glowballs_symb',
                autoPlay: {

                }
            },
            {
                id: 'front_glowballs3_symb',
                symbolName: 'front_glowballs_symb',
                autoPlay: {

                }
            },
            {
                id: 'left_blades_symb',
                symbolName: 'left_blades_symb',
                autoPlay: {

                }
            },
            {
                id: 'back_glowballs2_symb',
                symbolName: 'back_glowballs_symb',
                autoPlay: {

                }
            },
            {
                id: 'generator_glow_symb',
                symbolName: 'generator_glow_symb',
                autoPlay: {

                }
            },
            {
                id: 'front_glowballs1_symb',
                symbolName: 'front_glowballs_symb',
                autoPlay: {

                }
            },
            {
                id: 'front_glowballs4_symb',
                symbolName: 'front_glowballs_symb',
                autoPlay: {

                }
            },
            {
                id: 'right_blades_symb',
                symbolName: 'right_blades_symb',
                autoPlay: {

                }
            },
            {
                id: 'back_glowballs3_symb',
                symbolName: 'back_glowballs_symb',
                autoPlay: {

                }
            },
            {
                id: 'front_glowballs2_symb',
                symbolName: 'front_glowballs_symb',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${_power_lines}": [
                ["style", "top", '-428px'],
                ["transform", "scaleY", '0.128'],
                ["transform", "scaleX", '0.128'],
                ["style", "height", '1019px'],
                ["style", "left", '-603px'],
                ["style", "width", '2148px']
            ],
            "${_turbine_left}": [
                ["style", "top", '354px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '263px']
            ],
            "${_back_glowballs2_symb}": [
                ["style", "display", 'none']
            ],
            "${_front_glowballs1_symb}": [
                ["style", "display", 'none']
            ],
            "${_water}": [
                ["transform", "scaleX", '0.5'],
                ["style", "top", '154px'],
                ["transform", "scaleY", '0.5'],
                ["style", "left", '-1833px']
            ],
            "${_back_glowballs3_symb}": [
                ["style", "display", 'none']
            ],
            "${_background_layer}": [
                ["transform", "scaleX", '0.9'],
                ["style", "top", '-128px'],
                ["transform", "scaleY", '0.9'],
                ["style", "left", '0px']
            ],
            "${_front_glowballs3_symb}": [
                ["style", "display", 'none']
            ],
            "${_tide_in}": [
                ["style", "top", '341px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '-4px']
            ],
            "${_back_glowballs4_symb}": [
                ["style", "display", 'none']
            ],
            "${_foreground_layer}": [
                ["transform", "scaleX", '0.6'],
                ["style", "top", '4px'],
                ["transform", "scaleY", '0.6'],
                ["style", "left", '276px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '477px'],
                ["style", "max-width", '638px'],
                ["style", "width", '638px']
            ],
            "${_front_glowballs2_symb}": [
                ["style", "display", 'none']
            ],
            "${_generator_glow_symb}": [
                ["style", "display", 'none'],
                ["style", "opacity", '0.85']
            ],
            "${_right_blades_symb}": [
                ["style", "display", 'none'],
                ["style", "opacity", '1']
            ],
            "${_turbine_right}": [
                ["style", "top", '354px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '271px'],
                ["style", "display", 'none']
            ],
            "${_left_letterbox}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '0px'],
                ["style", "width", '32px']
            ],
            "${_tide_out}": [
                ["style", "top", '341px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0.000000'],
                ["style", "left", '418px']
            ],
            "${_front_glowballs4_symb}": [
                ["style", "display", 'none']
            ],
            "${_turbine_L_to_M}": [
                ["style", "top", '259px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '297px'],
                ["style", "display", 'none']
            ],
            "${_right_letterbox}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '606px'],
                ["style", "width", '32px']
            ],
            "${_left_blades_symb}": [
                ["style", "opacity", '1']
            ],
            "${_labels_static}": [
                ["style", "opacity", '1']
            ],
            "${_back_glowballs1_symb}": [
                ["style", "display", 'none']
            ],
            "${_turbine_M_to_R}": [
                ["style", "top", '259px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '300px'],
                ["style", "display", 'none']
            ],
            "${_turbine_middle}": [
                ["style", "top", '259px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '317px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14500,
            autoPlay: false,
            timeline: [
                { id: "eid115", tween: [ "style", "${_turbine_M_to_R}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid176", tween: [ "style", "${_turbine_M_to_R}", "display", 'block', { fromValue: 'none'}], position: 7800, duration: 0 },
                { id: "eid279", tween: [ "style", "${_back_glowballs3_symb}", "display", 'block', { fromValue: 'none'}], position: 2723, duration: 0, easing: "easeInOutCubic" },
                { id: "eid280", tween: [ "style", "${_back_glowballs3_symb}", "display", 'none', { fromValue: 'block'}], position: 5391, duration: 0, easing: "easeInOutCubic" },
                { id: "eid281", tween: [ "style", "${_back_glowballs3_symb}", "display", 'block', { fromValue: 'none'}], position: 9809, duration: 0, easing: "easeInOutCubic" },
                { id: "eid282", tween: [ "style", "${_back_glowballs3_symb}", "display", 'none', { fromValue: 'block'}], position: 12477, duration: 0, easing: "easeInOutCubic" },
                { id: "eid178", tween: [ "style", "${_turbine_middle}", "opacity", '1', { fromValue: '1'}], position: 7700, duration: 0 },
                { id: "eid179", tween: [ "style", "${_turbine_middle}", "opacity", '0.5', { fromValue: '1'}], position: 7800, duration: 0 },
                { id: "eid183", tween: [ "style", "${_turbine_middle}", "opacity", '0', { fromValue: '0.5'}], position: 7900, duration: 0 },
                { id: "eid234", tween: [ "style", "${_right_blades_symb}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid255", tween: [ "style", "${_generator_glow_symb}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
                { id: "eid256", tween: [ "style", "${_generator_glow_symb}", "display", 'none', { fromValue: 'block'}], position: 5258, duration: 0 },
                { id: "eid257", tween: [ "style", "${_generator_glow_symb}", "display", 'block', { fromValue: 'none'}], position: 8350, duration: 0 },
                { id: "eid258", tween: [ "style", "${_generator_glow_symb}", "display", 'none', { fromValue: 'block'}], position: 12358, duration: 0 },
                { id: "eid287", tween: [ "style", "${_back_glowballs1_symb}", "display", 'block', { fromValue: 'none'}], position: 1390, duration: 0, easing: "easeInOutCubic" },
                { id: "eid288", tween: [ "style", "${_back_glowballs1_symb}", "display", 'none', { fromValue: 'block'}], position: 6725, duration: 0, easing: "easeInOutCubic" },
                { id: "eid289", tween: [ "style", "${_back_glowballs1_symb}", "display", 'block', { fromValue: 'none'}], position: 8476, duration: 0, easing: "easeInOutCubic" },
                { id: "eid290", tween: [ "style", "${_back_glowballs1_symb}", "display", 'none', { fromValue: 'block'}], position: 13811, duration: 0, easing: "easeInOutCubic" },
                { id: "eid124", tween: [ "style", "${_tide_in}", "opacity", '1', { fromValue: '0.000000'}], position: 1000, duration: 500 },
                { id: "eid139", tween: [ "style", "${_tide_in}", "opacity", '0', { fromValue: '1'}], position: 4750, duration: 500 },
                { id: "eid144", tween: [ "style", "${_tide_out}", "opacity", '1', { fromValue: '0.000000'}], position: 7283, duration: 500 },
                { id: "eid212", tween: [ "style", "${_tide_out}", "opacity", '0', { fromValue: '1'}], position: 11611, duration: 500, easing: "easeInOutCubic" },
                { id: "eid169", tween: [ "style", "${_turbine_left}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid167", tween: [ "style", "${_turbine_left}", "opacity", '0.5', { fromValue: '1'}], position: 7600, duration: 0 },
                { id: "eid175", tween: [ "style", "${_turbine_left}", "opacity", '0', { fromValue: '0.5'}], position: 7700, duration: 0 },
                { id: "eid240", tween: [ "style", "${_turbine_left}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid126", tween: [ "style", "${_water}", "left", '-1404px', { fromValue: '-1833px'}], position: 250, duration: 6000, easing: "easeInOutQuad" },
                { id: "eid141", tween: [ "style", "${_water}", "left", '-1833px', { fromValue: '-1404px'}], position: 6250, duration: 7561, easing: "easeInOutQuad" },
                { id: "eid207", tween: [ "style", "${_right_blades_symb}", "display", 'block', { fromValue: 'none'}], position: 7900, duration: 0 },
                { id: "eid275", tween: [ "style", "${_back_glowballs4_symb}", "display", 'block', { fromValue: 'none'}], position: 3390, duration: 0, easing: "easeInOutCubic" },
                { id: "eid276", tween: [ "style", "${_back_glowballs4_symb}", "display", 'none', { fromValue: 'block'}], position: 6057, duration: 0, easing: "easeInOutCubic" },
                { id: "eid277", tween: [ "style", "${_back_glowballs4_symb}", "display", 'block', { fromValue: 'none'}], position: 10476, duration: 0, easing: "easeInOutCubic" },
                { id: "eid278", tween: [ "style", "${_back_glowballs4_symb}", "display", 'none', { fromValue: 'block'}], position: 13143, duration: 0, easing: "easeInOutCubic" },
                { id: "eid263", tween: [ "style", "${_front_glowballs2_symb}", "display", 'block', { fromValue: 'none'}], position: 2057, duration: 0, easing: "easeInOutCubic" },
                { id: "eid264", tween: [ "style", "${_front_glowballs2_symb}", "display", 'none', { fromValue: 'block'}], position: 7390, duration: 0, easing: "easeInOutCubic" },
                { id: "eid265", tween: [ "style", "${_front_glowballs2_symb}", "display", 'block', { fromValue: 'none'}], position: 9143, duration: 0, easing: "easeInOutCubic" },
                { id: "eid266", tween: [ "style", "${_front_glowballs2_symb}", "display", 'none', { fromValue: 'block'}], position: 14476, duration: 0, easing: "easeInOutCubic" },
                { id: "eid259", tween: [ "style", "${_front_glowballs1_symb}", "display", 'block', { fromValue: 'none'}], position: 1390, duration: 0, easing: "easeInOutCubic" },
                { id: "eid260", tween: [ "style", "${_front_glowballs1_symb}", "display", 'none', { fromValue: 'block'}], position: 6725, duration: 0, easing: "easeInOutCubic" },
                { id: "eid261", tween: [ "style", "${_front_glowballs1_symb}", "display", 'block', { fromValue: 'none'}], position: 8476, duration: 0, easing: "easeInOutCubic" },
                { id: "eid262", tween: [ "style", "${_front_glowballs1_symb}", "display", 'none', { fromValue: 'block'}], position: 13811, duration: 0, easing: "easeInOutCubic" },
                { id: "eid242", tween: [ "style", "${_turbine_right}", "opacity", '0', { fromValue: '1'}], position: 14000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid108", tween: [ "style", "${_turbine_L_to_M}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid165", tween: [ "style", "${_turbine_L_to_M}", "display", 'block', { fromValue: 'none'}], position: 7600, duration: 0 },
                { id: "eid245", tween: [ "style", "${_labels_static}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500, easing: "easeInOutCubic" },
                { id: "eid248", tween: [ "style", "${_labels_static}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid114", tween: [ "style", "${_turbine_right}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid182", tween: [ "style", "${_turbine_right}", "display", 'block', { fromValue: 'none'}], position: 7900, duration: 0 },
                { id: "eid283", tween: [ "style", "${_back_glowballs2_symb}", "display", 'block', { fromValue: 'none'}], position: 2057, duration: 0, easing: "easeInOutCubic" },
                { id: "eid284", tween: [ "style", "${_back_glowballs2_symb}", "display", 'none', { fromValue: 'block'}], position: 7390, duration: 0, easing: "easeInOutCubic" },
                { id: "eid285", tween: [ "style", "${_back_glowballs2_symb}", "display", 'block', { fromValue: 'none'}], position: 9143, duration: 0, easing: "easeInOutCubic" },
                { id: "eid286", tween: [ "style", "${_back_glowballs2_symb}", "display", 'none', { fromValue: 'block'}], position: 14476, duration: 0, easing: "easeInOutCubic" },
                { id: "eid267", tween: [ "style", "${_front_glowballs3_symb}", "display", 'block', { fromValue: 'none'}], position: 2723, duration: 0, easing: "easeInOutCubic" },
                { id: "eid268", tween: [ "style", "${_front_glowballs3_symb}", "display", 'none', { fromValue: 'block'}], position: 5391, duration: 0, easing: "easeInOutCubic" },
                { id: "eid269", tween: [ "style", "${_front_glowballs3_symb}", "display", 'block', { fromValue: 'none'}], position: 9809, duration: 0, easing: "easeInOutCubic" },
                { id: "eid274", tween: [ "style", "${_front_glowballs3_symb}", "display", 'none', { fromValue: 'block'}], position: 12477, duration: 0, easing: "easeInOutCubic" },
                { id: "eid177", tween: [ "style", "${_turbine_M_to_R}", "opacity", '1', { fromValue: '1'}], position: 7800, duration: 0 },
                { id: "eid181", tween: [ "style", "${_turbine_M_to_R}", "opacity", '0.5', { fromValue: '1'}], position: 7900, duration: 0 },
                { id: "eid184", tween: [ "style", "${_turbine_M_to_R}", "opacity", '0', { fromValue: '0.5'}], position: 8000, duration: 0 },
                { id: "eid116", tween: [ "style", "${_turbine_middle}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid171", tween: [ "style", "${_turbine_middle}", "display", 'block', { fromValue: 'none'}], position: 7700, duration: 0 },
                { id: "eid168", tween: [ "style", "${_left_blades_symb}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 },
                { id: "eid166", tween: [ "style", "${_left_blades_symb}", "opacity", '0.5', { fromValue: '1'}], position: 7600, duration: 0 },
                { id: "eid174", tween: [ "style", "${_left_blades_symb}", "opacity", '0', { fromValue: '0.5'}], position: 7700, duration: 0 },
                { id: "eid237", tween: [ "style", "${_left_blades_symb}", "opacity", '1', { fromValue: '0'}], position: 14000, duration: 500, easing: "easeInOutCubic" },
                { id: "eid172", tween: [ "style", "${_turbine_L_to_M}", "opacity", '1', { fromValue: '1'}], position: 7600, duration: 0 },
                { id: "eid173", tween: [ "style", "${_turbine_L_to_M}", "opacity", '0.5', { fromValue: '1'}], position: 7700, duration: 0 },
                { id: "eid180", tween: [ "style", "${_turbine_L_to_M}", "opacity", '0', { fromValue: '0.5'}], position: 7800, duration: 0 },
                { id: "eid270", tween: [ "style", "${_front_glowballs4_symb}", "display", 'block', { fromValue: 'none'}], position: 3390, duration: 0, easing: "easeInOutCubic" },
                { id: "eid271", tween: [ "style", "${_front_glowballs4_symb}", "display", 'none', { fromValue: 'block'}], position: 6057, duration: 0, easing: "easeInOutCubic" },
                { id: "eid272", tween: [ "style", "${_front_glowballs4_symb}", "display", 'block', { fromValue: 'none'}], position: 10476, duration: 0, easing: "easeInOutCubic" },
                { id: "eid273", tween: [ "style", "${_front_glowballs4_symb}", "display", 'none', { fromValue: 'block'}], position: 13143, duration: 0, easing: "easeInOutCubic" },
                { id: "eid117", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_left_blades_symb}', [0] ], ""], position: 1000 },
                { id: "eid134", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_generator_glow_symb}', [0] ], ""], position: 1250 },
                { id: "eid82", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_left_blades_symb}', ['loop'] ], ""], position: 1376 },
                { id: "eid146", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_back_glowballs1_symb}', [0] ], ""], position: 1389.7963960501 },
                { id: "eid145", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_front_glowballs1_symb}', [0] ], ""], position: 1389.7963960501 },
                { id: "eid84", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_left_blades_symb}', ['loop'] ], ""], position: 1701 },
                { id: "eid127", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_generator_glow_symb}', [0] ], ""], position: 1917 },
                { id: "eid85", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_left_blades_symb}', ['loop'] ], ""], position: 2024 },
                { id: "eid152", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_front_glowballs2_symb}', [0] ], ""], position: 2056.7963960501 },
                { id: "eid151", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_back_glowballs2_symb}', [0] ], ""], position: 2056.7963960501 },
                { id: "eid86", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_left_blades_symb}', ['loop'] ], ""], position: 2347 },
                { id: "eid128", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_generator_glow_symb}', [0] ], ""], position: 2577 },
                { id: "eid87", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_left_blades_symb}', ['loop'] ], ""], position: 2670 },
                { id: "eid154", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_front_glowballs3_symb}', [0] ], ""], position: 2722.7963960501 },
                { id: "eid153", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_back_glowballs3_symb}', [0] ], ""], position: 2722.7963960501 },
                { id: "eid88", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_left_blades_symb}', ['loop'] ], ""], position: 2993 },
                { id: "eid129", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_generator_glow_symb}', [0] ], ""], position: 3244 },
                { id: "eid99", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_left_blades_symb}', ['loop'] ], ""], position: 3316 },
                { id: "eid155", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_front_glowballs4_symb}', [0] ], ""], position: 3389.7963960501 },
                { id: "eid156", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_back_glowballs4_symb}', [0] ], ""], position: 3389.7963960501 },
                { id: "eid100", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_left_blades_symb}', ['loop'] ], ""], position: 3639 },
                { id: "eid131", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_generator_glow_symb}', [0] ], ""], position: 3911 },
                { id: "eid101", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_left_blades_symb}', ['loop'] ], ""], position: 3962 },
                { id: "eid102", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_left_blades_symb}', ['loop'] ], ""], position: 4285 },
                { id: "eid133", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_generator_glow_symb}', [0] ], ""], position: 4578 },
                { id: "eid103", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_left_blades_symb}', ['loop'] ], ""], position: 4608 },
                { id: "eid161", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_back_glowballs3_symb}', [] ], ""], position: 5390.7963960501 },
                { id: "eid162", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_front_glowballs3_symb}', [] ], ""], position: 5390.7963960501 },
                { id: "eid164", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_front_glowballs4_symb}', [] ], ""], position: 6056.7963960501 },
                { id: "eid163", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_back_glowballs4_symb}', [0] ], ""], position: 6056.7963960501 },
                { id: "eid158", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_front_glowballs1_symb}', [] ], ""], position: 6724.7963960501 },
                { id: "eid157", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_back_glowballs1_symb}', [0] ], ""], position: 6724.7963960501 },
                { id: "eid159", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_front_glowballs2_symb}', [] ], ""], position: 7389.7963960501 },
                { id: "eid160", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_back_glowballs2_symb}', [0] ], ""], position: 7389.7963960501 },
                { id: "eid208", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_right_blades_symb}', [0] ], ""], position: 8100 },
                { id: "eid213", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_generator_glow_symb}', [0] ], ""], position: 8350 },
                { id: "eid216", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_back_glowballs1_symb}', [0] ], ""], position: 8476 },
                { id: "eid104", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_right_blades_symb}', ['loop'] ], ""], position: 8476 },
                { id: "eid215", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_front_glowballs1_symb}', [0] ], ""], position: 8476 },
                { id: "eid105", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_right_blades_symb}', ['loop'] ], ""], position: 8799 },
                { id: "eid136", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_generator_glow_symb}', [0] ], ""], position: 9017 },
                { id: "eid106", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_right_blades_symb}', ['loop'] ], ""], position: 9122 },
                { id: "eid218", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_back_glowballs2_symb}', [0] ], ""], position: 9143 },
                { id: "eid217", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_front_glowballs2_symb}', [0] ], ""], position: 9143 },
                { id: "eid107", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_right_blades_symb}', ['loop'] ], ""], position: 9445 },
                { id: "eid137", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_generator_glow_symb}', [0] ], ""], position: 9684 },
                { id: "eid109", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_right_blades_symb}', ['loop'] ], ""], position: 9768 },
                { id: "eid219", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_front_glowballs3_symb}', [0] ], ""], position: 9809 },
                { id: "eid220", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_back_glowballs3_symb}', [0] ], ""], position: 9809 },
                { id: "eid113", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_right_blades_symb}', ['loop'] ], ""], position: 10091 },
                { id: "eid138", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_generator_glow_symb}', [0] ], ""], position: 10344 },
                { id: "eid119", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_right_blades_symb}', ['loop'] ], ""], position: 10414 },
                { id: "eid221", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_back_glowballs4_symb}', [0] ], ""], position: 10476 },
                { id: "eid222", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_front_glowballs4_symb}', [0] ], ""], position: 10476 },
                { id: "eid121", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_right_blades_symb}', ['loop'] ], ""], position: 10737 },
                { id: "eid140", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_generator_glow_symb}', [0] ], ""], position: 11011 },
                { id: "eid122", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_right_blades_symb}', ['loop'] ], ""], position: 11060 },
                { id: "eid123", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_right_blades_symb}', ['loop'] ], ""], position: 11383 },
                { id: "eid142", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_generator_glow_symb}', [0] ], ""], position: 11678 },
                { id: "eid125", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_right_blades_symb}', ['loop'] ], ""], position: 11706 },
                { id: "eid224", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_back_glowballs3_symb}', [] ], ""], position: 12477 },
                { id: "eid223", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_front_glowballs3_symb}', [] ], ""], position: 12477 },
                { id: "eid225", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_front_glowballs4_symb}', [] ], ""], position: 13143 },
                { id: "eid226", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_back_glowballs4_symb}', [0] ], ""], position: 13143 },
                { id: "eid227", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_front_glowballs1_symb}', [] ], ""], position: 13811 },
                { id: "eid228", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_back_glowballs1_symb}', [0] ], ""], position: 13811 },
                { id: "eid230", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_back_glowballs2_symb}', [0] ], ""], position: 14476 },
                { id: "eid229", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_front_glowballs2_symb}', [] ], ""], position: 14476 }            ]
        }
    }
},
"left_blades_symb": {
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
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    tag: 'img',
                    id: 'blades_L_1',
                    type: 'image',
                    rect: ['7px', '-59px', '22px', '235px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blades_1_1.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    tag: 'img',
                    display: 'none',
                    id: 'blades_L_2',
                    rect: ['-9px', '-15px', '51px', '145px', 'auto', 'auto'],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/blades_1_2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    tag: 'img',
                    display: 'none',
                    id: 'blades_L_3',
                    rect: ['-17px', '47px', '67px', '22px', 'auto', 'auto'],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/blades_1_3.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    tag: 'img',
                    display: 'none',
                    id: 'blades_L_4',
                    rect: ['-9px', '-17px', '52px', '151px', 'auto', 'auto'],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/blades_1_4.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    tag: 'img',
                    display: 'none',
                    id: 'blades_L_1Copy',
                    rect: ['7px', '-59px', '22px', '235px', 'auto', 'auto'],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/blades_1_1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blades_L_3}": [
                ["style", "top", '47px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '-17px'],
                ["style", "display", 'none']
            ],
            "${_blades_L_1Copy}": [
                ["style", "top", '-59px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '7px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '118px'],
                ["style", "width", '34px']
            ],
            "${_blades_L_4}": [
                ["style", "top", '-17px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '-9px'],
                ["style", "display", 'none']
            ],
            "${_blades_L_1}": [
                ["style", "top", '-59px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '7px']
            ],
            "${_blades_L_2}": [
                ["style", "top", '-15px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '-9px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 376,
            autoPlay: false,
            labels: {
                "loop": 53
            },
            timeline: [
                { id: "eid97", tween: [ "style", "${_blades_L_3}", "display", 'block', { fromValue: 'none'}], position: 174, duration: 0 },
                { id: "eid90", tween: [ "style", "${_blades_L_3}", "opacity", '1', { fromValue: '1'}], position: 174, duration: 0 },
                { id: "eid91", tween: [ "style", "${_blades_L_3}", "opacity", '0', { fromValue: '0.5'}], position: 255, duration: 40 },
                { id: "eid96", tween: [ "style", "${_blades_L_2}", "display", 'block', { fromValue: 'none'}], position: 95, duration: 0 },
                { id: "eid83", tween: [ "style", "${_blades_L_4}", "opacity", '1', { fromValue: '1'}], position: 255, duration: 0 },
                { id: "eid89", tween: [ "style", "${_blades_L_4}", "opacity", '0', { fromValue: '0.5'}], position: 336, duration: 40 },
                { id: "eid94", tween: [ "style", "${_blades_L_1}", "opacity", '1', { fromValue: '1'}], position: 10, duration: 0 },
                { id: "eid95", tween: [ "style", "${_blades_L_1}", "opacity", '0', { fromValue: '0.5'}], position: 95, duration: 40 },
                { id: "eid98", tween: [ "style", "${_blades_L_4}", "display", 'block', { fromValue: 'none'}], position: 255, duration: 0 },
                { id: "eid120", tween: [ "style", "${_blades_L_1Copy}", "display", 'block', { fromValue: 'none'}], position: 336, duration: 0 },
                { id: "eid118", tween: [ "style", "${_blades_L_1Copy}", "opacity", '1', { fromValue: '1'}], position: 336, duration: 0 },
                { id: "eid92", tween: [ "style", "${_blades_L_2}", "opacity", '1', { fromValue: '1'}], position: 95, duration: 0 },
                { id: "eid93", tween: [ "style", "${_blades_L_2}", "opacity", '0', { fromValue: '0.5'}], position: 174, duration: 40 }            ]
        }
    }
},
"back_glowballs_symb": {
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
                    rect: ['-8px', '-2px', '47px', '47px', 'auto', 'auto'],
                    id: 'glowballCopy5',
                    transform: [[], [], [], ['0.5', '0.5']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/glowball.png', '0px', '0px']
                },
                {
                    rect: ['-8px', '-2px', '47px', '47px', 'auto', 'auto'],
                    id: 'glowballCopy4',
                    transform: [[], [], [], ['0.5', '0.5']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/glowball.png', '0px', '0px']
                },
                {
                    rect: ['-8px', '-2px', '47px', '47px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.5', '0.5']],
                    id: 'glowballCopy3',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/glowball.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_glowballCopy3}": [
                ["transform", "scaleY", '0.25'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["transform", "scaleX", '0.25'],
                ["motion", "location", '-12.1985546875px 22.118076171875px']
            ],
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '24px']
            ],
            "${_glowballCopy5}": [
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.25'],
                ["motion", "location", '-11.6985546875px 21.618076171875px']
            ],
            "${_glowballCopy4}": [
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.25'],
                ["motion", "location", '-11.8785546875px 21.838076171875px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2668,
            autoPlay: false,
            timeline: [
                { id: "eid149", tween: [ "style", "${_glowballCopy3}", "display", 'block', { fromValue: 'block'}], position: 2668, duration: 0 },
                { id: "eid63", tween: [ "transform", "${_glowballCopy4}", "scaleY", '0.5', { fromValue: '0.25'}], position: 0, duration: 100 },
                { id: "eid64", tween: [ "transform", "${_glowballCopy4}", "scaleY", '0.15', { fromValue: '0.5'}], position: 100, duration: 1911 },
                { id: "eid62", tween: [ "style", "${_glowballCopy4}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid50", tween: [ "transform", "${_glowballCopy3}", "scaleY", '0.5', { fromValue: '0.25'}], position: 0, duration: 100 },
                { id: "eid51", tween: [ "transform", "${_glowballCopy3}", "scaleY", '0.15', { fromValue: '0.5'}], position: 100, duration: 1911 },
                { id: "eid68", tween: [ "motion", "${_glowballCopy5}", [[-11.7, 21.62, 127.91, -8.08],[113.08, -9.22, 135.78, -64.31]]], position: 100, duration: 618 },
                { id: "eid69", tween: [ "motion", "${_glowballCopy5}", [[113.08, -9.22, 58.26, 77.19],[170.22, 12.71, 84.66, -14.35]]], position: 718, duration: 513 },
                { id: "eid70", tween: [ "motion", "${_glowballCopy5}", [[170.22, 12.71, 91.04, 81.36],[219.56, 29.45, 17.58, -1.75]]], position: 1231, duration: 452 },
                { id: "eid71", tween: [ "motion", "${_glowballCopy5}", [[219.56, 29.45, 60.76, 39.12],[264.98, 35.03, 9.77, -4.17]]], position: 1683, duration: 328 },
                { id: "eid65", tween: [ "transform", "${_glowballCopy4}", "scaleX", '0.5', { fromValue: '0.25'}], position: 0, duration: 100 },
                { id: "eid66", tween: [ "transform", "${_glowballCopy4}", "scaleX", '0.15', { fromValue: '0.5'}], position: 100, duration: 1911 },
                { id: "eid75", tween: [ "transform", "${_glowballCopy5}", "scaleX", '0.5', { fromValue: '0.25'}], position: 0, duration: 100 },
                { id: "eid76", tween: [ "transform", "${_glowballCopy5}", "scaleX", '0.15', { fromValue: '0.5'}], position: 100, duration: 1911 },
                { id: "eid53", tween: [ "motion", "${_glowballCopy3}", [[-12.2, 22.12, 273.93, -111.09],[116.58, -58.07, 36.72, -42.25]]], position: 100, duration: 618 },
                { id: "eid54", tween: [ "motion", "${_glowballCopy3}", [[116.58, -58.07, 28.15, 71.67],[172.91, -23.61, 58.37, -57.77]]], position: 718, duration: 513 },
                { id: "eid55", tween: [ "motion", "${_glowballCopy3}", [[172.91, -23.61, 72.1, 116.56],[221.65, -0.4, 16.31, -4.75]]], position: 1231, duration: 452 },
                { id: "eid56", tween: [ "motion", "${_glowballCopy3}", [[221.65, -0.4, 13.05, 15.52],[263.98, 13.54, 61.33, -38.49]]], position: 1683, duration: 328 },
                { id: "eid47", tween: [ "transform", "${_glowballCopy3}", "scaleX", '0.5', { fromValue: '0.25'}], position: 0, duration: 100 },
                { id: "eid48", tween: [ "transform", "${_glowballCopy3}", "scaleX", '0.15', { fromValue: '0.5'}], position: 100, duration: 1911 },
                { id: "eid49", tween: [ "style", "${_glowballCopy3}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid72", tween: [ "style", "${_glowballCopy5}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid73", tween: [ "transform", "${_glowballCopy5}", "scaleY", '0.5', { fromValue: '0.25'}], position: 0, duration: 100 },
                { id: "eid74", tween: [ "transform", "${_glowballCopy5}", "scaleY", '0.15', { fromValue: '0.5'}], position: 100, duration: 1911 },
                { id: "eid58", tween: [ "motion", "${_glowballCopy4}", [[-11.88, 21.84, 283.56, -86.9],[108.4, -31.49, 78.3, -46.45]]], position: 100, duration: 618 },
                { id: "eid59", tween: [ "motion", "${_glowballCopy4}", [[108.4, -31.49, 97.84, 114.25],[166.7, -3.54, 55.23, -30.85]]], position: 718, duration: 513 },
                { id: "eid60", tween: [ "motion", "${_glowballCopy4}", [[166.7, -3.54, 86.35, 98.62],[216.56, 16.57, 16.31, -4.75]]], position: 1231, duration: 452 },
                { id: "eid61", tween: [ "motion", "${_glowballCopy4}", [[216.56, 16.57, 23.91, 12.73],[265.24, 24.09, 75.94, -30.75]]], position: 1683, duration: 328 }            ]
        }
    }
},
"front_glowballs_symb": {
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
                    rect: ['-37px', '-1px', '47px', '47px', 'auto', 'auto'],
                    id: 'glowball',
                    transform: [[], [], [], ['0.5', '0.5']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/glowball.png', '0px', '0px']
                },
                {
                    rect: ['-37px', '-1px', '47px', '47px', 'auto', 'auto'],
                    id: 'glowballCopy',
                    transform: [[], [], [], ['0.5', '0.5']],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/glowball.png', '0px', '0px']
                },
                {
                    rect: ['-37px', '-1px', '47px', '47px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.5', '0.5']],
                    id: 'glowballCopy2',
                    type: 'image',
                    display: 'block',
                    fill: ['rgba(0,0,0,0)', 'images/glowball.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_glowballCopy2}": [
                ["transform", "scaleY", '0.25'],
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["transform", "scaleX", '0.25'],
                ["motion", "location", '-12.91833984375px 22.59228515625px']
            ],
            "${symbolSelector}": [
                ["style", "height", '31px'],
                ["style", "width", '23px']
            ],
            "${_glowballCopy}": [
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.25'],
                ["motion", "location", '-12.91833984375px 22.59228515625px']
            ],
            "${_glowball}": [
                ["transform", "scaleX", '0.25'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0.25'],
                ["motion", "location", '-13.29833984375px 22.59228515625px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 2668,
            autoPlay: false,
            timeline: [
                { id: "eid26", tween: [ "style", "${_glowballCopy}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid18", tween: [ "style", "${_glowball}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid39", tween: [ "style", "${_glowballCopy2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 250 },
                { id: "eid150", tween: [ "style", "${_glowballCopy2}", "display", 'block', { fromValue: 'block'}], position: 2668, duration: 0 },
                { id: "eid46", tween: [ "motion", "${_glowball}", [[-13.3, 22.59, 0, 0],[-13.3, 22.59, 0, 0]]], position: 0, duration: 0 },
                { id: "eid3", tween: [ "motion", "${_glowball}", [[-13.3, 22.59, 78.51, -6.98],[122.7, -7.41, 135.78, -64.31]]], position: 100, duration: 618 },
                { id: "eid4", tween: [ "motion", "${_glowball}", [[122.7, -7.41, 29.11, 38.99],[171.07, 13.34, 84.66, -14.35]]], position: 718, duration: 513 },
                { id: "eid5", tween: [ "motion", "${_glowball}", [[171.07, 13.34, 59.97, 69.5],[215.7, 31.59, 17.58, -1.75]]], position: 1231, duration: 452 },
                { id: "eid6", tween: [ "motion", "${_glowball}", [[215.7, 31.59, 29.22, 10.76],[236.7, 32.59, 9.77, -4.17]]], position: 1683, duration: 167 },
                { id: "eid40", tween: [ "transform", "${_glowballCopy2}", "scaleY", '0.5', { fromValue: '0.25'}], position: 0, duration: 100 },
                { id: "eid41", tween: [ "transform", "${_glowballCopy2}", "scaleY", '0.15', { fromValue: '0.5'}], position: 100, duration: 1750 },
                { id: "eid21", tween: [ "transform", "${_glowball}", "scaleY", '0.5', { fromValue: '0.25'}], position: 0, duration: 100 },
                { id: "eid12", tween: [ "transform", "${_glowball}", "scaleY", '0.15', { fromValue: '0.5'}], position: 100, duration: 1750 },
                { id: "eid29", tween: [ "motion", "${_glowballCopy}", [[-12.92, 22.59, 0, 0],[-12.92, 22.59, 0, 0]]], position: 0, duration: 0 },
                { id: "eid30", tween: [ "motion", "${_glowballCopy}", [[-13.3, 22.59, 110.24, -26.43],[128.46, -29.93, 78.3, -46.45]]], position: 100, duration: 618 },
                { id: "eid31", tween: [ "motion", "${_glowballCopy}", [[128.46, -29.93, 47.75, 46.78],[174.7, -1.66, 84.66, -14.35]]], position: 718, duration: 513 },
                { id: "eid32", tween: [ "motion", "${_glowballCopy}", [[174.7, -1.66, 27.33, 77.9],[218.7, 17.84, 16.31, -4.75]]], position: 1231, duration: 452 },
                { id: "eid33", tween: [ "motion", "${_glowballCopy}", [[218.7, 17.84, 23.91, 12.73],[236.96, 21.98, 29.56, -7.07]]], position: 1683, duration: 167 },
                { id: "eid42", tween: [ "transform", "${_glowballCopy2}", "scaleX", '0.5', { fromValue: '0.25'}], position: 0, duration: 100 },
                { id: "eid43", tween: [ "transform", "${_glowballCopy2}", "scaleX", '0.15', { fromValue: '0.5'}], position: 100, duration: 1750 },
                { id: "eid34", tween: [ "motion", "${_glowballCopy2}", [[-12.92, 22.59, 0, 0],[-12.92, 22.59, 0, 0]]], position: 0, duration: 0 },
                { id: "eid35", tween: [ "motion", "${_glowballCopy2}", [[-13.3, 22.59, 179.25, -74.7],[119.82, -56.6, 36.72, -42.25]]], position: 100, duration: 618 },
                { id: "eid36", tween: [ "motion", "${_glowballCopy2}", [[119.82, -56.6, 17.43, 19.8],[168.25, -21.7, 84.66, -14.35]]], position: 718, duration: 513 },
                { id: "eid37", tween: [ "motion", "${_glowballCopy2}", [[168.25, -21.7, 46.51, 64.61],[213.93, 1.49, 16.31, -4.75]]], position: 1231, duration: 452 },
                { id: "eid38", tween: [ "motion", "${_glowballCopy2}", [[213.93, 1.49, 13.05, 15.52],[234.7, 9.68, 43.61, -4.43]]], position: 1683, duration: 167 },
                { id: "eid24", tween: [ "transform", "${_glowballCopy}", "scaleX", '0.5', { fromValue: '0.25'}], position: 0, duration: 100 },
                { id: "eid25", tween: [ "transform", "${_glowballCopy}", "scaleX", '0.15', { fromValue: '0.5'}], position: 100, duration: 1750 },
                { id: "eid20", tween: [ "transform", "${_glowball}", "scaleX", '0.5', { fromValue: '0.25'}], position: 0, duration: 100 },
                { id: "eid11", tween: [ "transform", "${_glowball}", "scaleX", '0.15', { fromValue: '0.5'}], position: 100, duration: 1750 },
                { id: "eid27", tween: [ "transform", "${_glowballCopy}", "scaleY", '0.5', { fromValue: '0.25'}], position: 0, duration: 100 },
                { id: "eid28", tween: [ "transform", "${_glowballCopy}", "scaleY", '0.15', { fromValue: '0.5'}], position: 100, duration: 1750 }            ]
        }
    }
},
"generator_glow_symb": {
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
                    rect: ['-34px', '-36px', '138px', '145px', 'auto', 'auto'],
                    transform: [[], [], [], ['0.5', '0.5']],
                    fill: ['rgba(0,0,0,0)', 'images/generator_glow.png', '0px', '0px'],
                    id: 'generator_glow',
                    opacity: 1,
                    type: 'image',
                    tag: 'img'
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_generator_glow}": [
                ["style", "top", '-36px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '0'],
                ["style", "left", '-34px']
            ],
            "${symbolSelector}": [
                ["style", "height", '73px'],
                ["style", "width", '69px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 667,
            autoPlay: false,
            timeline: [
                { id: "eid130", tween: [ "style", "${_generator_glow}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 333, easing: "easeInOutSine" },
                { id: "eid132", tween: [ "style", "${_generator_glow}", "opacity", '0', { fromValue: '1'}], position: 333, duration: 334, easing: "easeInOutSine" }            ]
        }
    }
},
"right_blades_symb": {
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
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    tag: 'img',
                    id: 'blades_R_1',
                    type: 'image',
                    rect: ['7px', '-58px', '21px', '233px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,0)', 'images/blades_2_1.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    tag: 'img',
                    display: 'none',
                    id: 'blades_R_2',
                    rect: ['-6px', '-14px', '51px', '145px', 'auto', 'auto'],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/blades_2_2.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    tag: 'img',
                    display: 'none',
                    id: 'blades_R_3',
                    rect: ['-17px', '46px', '67px', '22px', 'auto', 'auto'],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/blades_2_3.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    tag: 'img',
                    display: 'none',
                    id: 'blades_R_4',
                    rect: ['-11px', '-18px', '56px', '151px', 'auto', 'auto'],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/blades_2_4.png', '0px', '0px']
                },
                {
                    transform: [[0, 0], [], [], ['0.5', '0.5']],
                    tag: 'img',
                    display: 'none',
                    id: 'blades_R_1Copy',
                    rect: ['7px', '-58px', '21px', '233px', 'auto', 'auto'],
                    type: 'image',
                    fill: ['rgba(0,0,0,0)', 'images/blades_2_1.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_blades_R_3}": [
                ["style", "top", '46px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '-17px'],
                ["style", "display", 'none']
            ],
            "${symbolSelector}": [
                ["style", "height", '117px'],
                ["style", "width", '34px']
            ],
            "${_blades_R_1Copy}": [
                ["style", "top", '-58px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '7px'],
                ["style", "display", 'none']
            ],
            "${_blades_R_1}": [
                ["style", "top", '-58px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '7px']
            ],
            "${_blades_R_2}": [
                ["style", "top", '-14px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '-6px'],
                ["style", "display", 'none']
            ],
            "${_blades_R_4}": [
                ["style", "top", '-18px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "scaleX", '0.5'],
                ["style", "opacity", '1'],
                ["style", "left", '-11px'],
                ["style", "display", 'none']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 376,
            autoPlay: false,
            labels: {
                "loop": 53
            },
            timeline: [
                { id: "eid110", tween: [ "style", "${_blades_R_4}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid198", tween: [ "style", "${_blades_R_4}", "display", 'block', { fromValue: 'none'}], position: 255, duration: 0 },
                { id: "eid111", tween: [ "style", "${_blades_R_3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid194", tween: [ "style", "${_blades_R_3}", "display", 'block', { fromValue: 'none'}], position: 174, duration: 0 },
                { id: "eid206", tween: [ "style", "${_blades_R_1Copy}", "display", 'block', { fromValue: 'none'}], position: 336, duration: 0 },
                { id: "eid199", tween: [ "style", "${_blades_R_4}", "opacity", '1', { fromValue: '1'}], position: 255, duration: 0 },
                { id: "eid205", tween: [ "style", "${_blades_R_4}", "opacity", '0', { fromValue: '0.5'}], position: 336, duration: 40 },
                { id: "eid191", tween: [ "style", "${_blades_R_2}", "opacity", '1', { fromValue: '1'}], position: 96, duration: 0 },
                { id: "eid193", tween: [ "style", "${_blades_R_2}", "opacity", '0', { fromValue: '0.5'}], position: 174, duration: 41 },
                { id: "eid112", tween: [ "style", "${_blades_R_2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid189", tween: [ "style", "${_blades_R_2}", "display", 'block', { fromValue: 'none'}], position: 96, duration: 0 },
                { id: "eid196", tween: [ "style", "${_blades_R_3}", "opacity", '1', { fromValue: '1'}], position: 174, duration: 0 },
                { id: "eid200", tween: [ "style", "${_blades_R_3}", "opacity", '0', { fromValue: '0.5'}], position: 255, duration: 40 },
                { id: "eid185", tween: [ "style", "${_blades_R_1}", "opacity", '1', { fromValue: '1'}], position: 10, duration: 0 },
                { id: "eid188", tween: [ "style", "${_blades_R_1}", "opacity", '0', { fromValue: '0.5'}], position: 96, duration: 39 }            ]
        }
    }
},
"labels_symb": {
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
                    rect: ['43px', '219px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Turbine',
                    text: 'Turbine',
                    font: ['Arial, Helvetica, sans-serif', 20, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['19px', '78px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Generator',
                    text: 'Generator',
                    font: ['Arial, Helvetica, sans-serif', 20, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text'
                },
                {
                    rect: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Transformer',
                    text: 'Transformer',
                    font: ['Arial, Helvetica, sans-serif', 20, 'rgba(0,0,0,1)', 'normal', 'none', ''],
                    type: 'text'
                },
                {
                    type: 'rect',
                    id: 'Rectangle',
                    stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                    rect: ['113px', '11px', '148px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy',
                    stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                    rect: ['113px', '90px', '138px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                },
                {
                    type: 'rect',
                    id: 'RectangleCopy2',
                    stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                    rect: ['113px', '230px', '108px', '1px', 'auto', 'auto'],
                    fill: ['rgba(0,0,0,1.00)']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_RectangleCopy2}": [
                ["style", "top", '230px'],
                ["style", "height", '1px'],
                ["style", "left", '113px'],
                ["style", "width", '108px']
            ],
            "${_Transformer}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "font-size", '20px']
            ],
            "${symbolSelector}": [
                ["style", "height", '242px'],
                ["style", "width", '261px']
            ],
            "${_Rectangle}": [
                ["style", "top", '11px'],
                ["style", "height", '1px'],
                ["style", "left", '113px'],
                ["style", "width", '148px']
            ],
            "${_Turbine}": [
                ["style", "top", '219px'],
                ["style", "left", '43px'],
                ["style", "font-size", '20px']
            ],
            "${_RectangleCopy}": [
                ["style", "height", '1px'],
                ["style", "top", '90px'],
                ["style", "left", '113px'],
                ["style", "width", '138px']
            ],
            "${_Generator}": [
                ["style", "top", '78px'],
                ["style", "left", '19px'],
                ["style", "font-size", '20px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            timeline: [
            ]
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
})(jQuery, AdobeEdge, "EDGE-15288829");
