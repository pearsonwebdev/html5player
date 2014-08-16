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
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'stage_offset',
                display: 'block',
                type: 'rect',
                rect: ['-1px', '0px','638px','478px','auto', 'auto'],
                opacity: 1,
                fill: ["rgba(192,192,192,0.00)"],
                stroke: [0,"rgba(0,0,0,0.00)","none"],
                c: [
                {
                    id: '_00_background',
                    type: 'image',
                    tag: 'img',
                    rect: ['19px', '0','601px','480px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"00_background.png",'0px','0px']
                },
                {
                    id: '_00_back_terrain',
                    type: 'image',
                    tag: 'img',
                    rect: ['132px', '91px','488px','389px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"00_back_terrain.png",'0px','0px']
                },
                {
                    id: '_00_wires',
                    type: 'image',
                    tag: 'img',
                    rect: ['-716px', '-437px','2460px','1260px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"00_wires.svg",'0px','0px'],
                    transform: [[],[],[],['0.1','0.1']]
                },
                {
                    id: 'glowballs1_parent',
                    display: 'none',
                    type: 'rect',
                    rect: ['384px', '127px','108px','82px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0.00)"],
                    stroke: [0,"rgba(0,0,0,0.00)","none"],
                    c: [
                    {
                        id: '_03_glowballCopy5',
                        type: 'image',
                        rect: ['14px', '-12px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    },
                    {
                        id: '_03_glowballCopy4',
                        type: 'image',
                        rect: ['14px', '-12px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    },
                    {
                        id: '_03_glowballCopy3',
                        type: 'image',
                        rect: ['14px', '-12px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    },
                    {
                        id: '_03_glowballCopy2',
                        type: 'image',
                        rect: ['-13px', '-14px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    },
                    {
                        id: '_03_glowballCopy',
                        type: 'image',
                        rect: ['-13px', '-14px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    },
                    {
                        id: '_03_glowball',
                        display: 'block',
                        type: 'image',
                        rect: ['-13px', '-14px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    }]
                },
                {
                    id: 'glowballs2_parent',
                    display: 'none',
                    type: 'rect',
                    rect: ['-384px', '-128px','108px','82px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0.00)"],
                    stroke: [0,"rgba(0,0,0,0.00)","none"],
                    c: [
                    {
                        id: '_03_glowballCopy11',
                        type: 'image',
                        rect: ['782px', '242px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    },
                    {
                        id: '_03_glowballCopy10',
                        type: 'image',
                        rect: ['782px', '242px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    },
                    {
                        id: '_03_glowballCopy9',
                        type: 'image',
                        rect: ['782px', '242px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    },
                    {
                        id: '_03_glowballCopy8',
                        type: 'image',
                        rect: ['755px', '240px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    },
                    {
                        id: '_03_glowballCopy7',
                        type: 'image',
                        rect: ['755px', '240px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    },
                    {
                        id: '_03_glowballCopy6',
                        display: 'block',
                        type: 'image',
                        rect: ['755px', '240px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    }]
                },
                {
                    id: 'glowballs3_parent',
                    display: 'none',
                    type: 'rect',
                    rect: ['-384px', '-127px','108px','82px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0.00)"],
                    stroke: [0,"rgba(0,0,0,0.00)","none"],
                    c: [
                    {
                        id: '_03_glowballCopy17',
                        type: 'image',
                        rect: ['782px', '242px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    },
                    {
                        id: '_03_glowballCopy16',
                        type: 'image',
                        rect: ['782px', '242px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    },
                    {
                        id: '_03_glowballCopy15',
                        type: 'image',
                        rect: ['782px', '242px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    },
                    {
                        id: '_03_glowballCopy14',
                        type: 'image',
                        rect: ['755px', '240px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    },
                    {
                        id: '_03_glowballCopy13',
                        type: 'image',
                        rect: ['755px', '240px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    },
                    {
                        id: '_03_glowballCopy12',
                        display: 'block',
                        type: 'image',
                        rect: ['755px', '240px','47px','47px','auto', 'auto'],
                        fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                        transform: [[],[],[],['0.4','0.4']]
                    }]
                },
                {
                    id: '_00_water_front_LEFT',
                    type: 'image',
                    tag: 'img',
                    rect: ['20px', '121px','601px','358px','auto', 'auto'],
                    clip: ['rect(0px 111px 358px 0px)'],
                    opacity: 0.9,
                    fill: ["rgba(0,0,0,0)",im+"00_water_front.png",'0px','0px']
                },
                {
                    id: '_00_water_front_RIGHT_TOP',
                    type: 'image',
                    tag: 'img',
                    rect: ['20px', '121px','601px','358px','auto', 'auto'],
                    clip: ['rect(0px 111px 247px 111px)'],
                    opacity: 0.9,
                    fill: ["rgba(0,0,0,0)",im+"00_water_front.png",'0px','0px']
                },
                {
                    id: '_00_water_front_RIGHT_TOPCopy',
                    type: 'image',
                    tag: 'img',
                    rect: ['20px', '121px','601px','358px','auto', 'auto'],
                    clip: ['rect(0px 111px 247px 111px)'],
                    opacity: 0.9,
                    fill: ["rgba(0,0,0,0)",im+"00_water_front.png",'0px','0px']
                },
                {
                    id: '_00_water_front_RIGHT_BOTTOM',
                    type: 'image',
                    tag: 'img',
                    rect: ['20px', '121px','601px','358px','auto', 'auto'],
                    clip: ['rect(247px 601px 358px 111px)'],
                    opacity: 0.9,
                    fill: ["rgba(0,0,0,0)",im+"00_water_front.png",'0px','0px']
                },
                {
                    id: '_00_water_surface_right',
                    type: 'image',
                    rect: ['19px', '333px','601px','45px','auto', 'auto'],
                    clip: ['rect(0px 601px 45px 474.46533203125px)'],
                    fill: ["rgba(0,0,0,0)",im+"00_water_surface_right.png",'0px','0px'],
                    transform: [[],[],[],['1','0.75']]
                },
                {
                    id: '_00_water_surface_rightCopy',
                    type: 'image',
                    rect: ['19px', '333px','601px','45px','auto', 'auto'],
                    clip: ['rect(0px 601px 45px 474.46533203125px)'],
                    fill: ["rgba(0,0,0,0)",im+"00_water_surface_right.png",'0px','0px'],
                    transform: [[],[],[],['1','0.75']]
                },
                {
                    id: '_00_water_surface_left',
                    type: 'image',
                    rect: ['-486px', '88px','601px','45px','auto', 'auto'],
                    clip: ['rect(0px 601px 45px 486.6435546875px)'],
                    fill: ["rgba(0,0,0,0)",im+"00_water_surface_left.png",'0px','0px'],
                    transform: [[],[],[],['1','0.75']]
                },
                {
                    id: '_00_water_surface_leftCopy',
                    type: 'image',
                    rect: ['-486px', '88px','601px','45px','auto', 'auto'],
                    clip: ['rect(0px 601px 45px 486.6435546875px)'],
                    fill: ["rgba(0,0,0,0)",im+"00_water_surface_left.png",'0px','0px'],
                    transform: [[],[],[],['1','0.75']]
                },
                {
                    id: '_00_lakebed',
                    type: 'image',
                    tag: 'img',
                    rect: ['19px', '421px','601px','59px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"00_lakebed.png",'0px','0px']
                },
                {
                    id: '_00_water_cover',
                    type: 'image',
                    tag: 'img',
                    rect: ['503px', '299px','51px','69px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"00_water_cover.png",'0px','0px'],
                    transform: [[],[],[],['0.99']]
                },
                {
                    id: '_00_dam_face',
                    type: 'image',
                    tag: 'img',
                    rect: ['115px', '91px','402px','389px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"00_dam_face.png",'0px','0px']
                },
                {
                    id: '_00_generator',
                    type: 'image',
                    tag: 'img',
                    rect: ['321px', '216px','86px','121px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"00_generator.png",'0px','0px']
                },
                {
                    id: '_00_front_hilites',
                    type: 'image',
                    tag: 'img',
                    rect: ['114px', '90px','404px','390px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"00_front_hilites.png",'0px','0px']
                },
                {
                    id: '_00_sluice_gate',
                    type: 'image',
                    tag: 'img',
                    rect: ['127px', '115px','9px','112px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"00_sluice_gate.png",'0px','0px']
                },
                {
                    id: '_00_sluice_gate2',
                    type: 'image',
                    tag: 'img',
                    rect: ['127', '58px','9px','112px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"00_sluice_gate.png",'0px','0px']
                },
                {
                    id: 'turbine_spritesheet',
                    type: 'image',
                    rect: ['334px', '322px','405px','52px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"turbine_spritesheet.png",'0px','0px']
                },
                {
                    id: '_00_generator_glow',
                    type: 'image',
                    rect: ['310px', '183px','108px','114px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"00_generator_glow.png",'0px','0px'],
                    transform: [[],[],[],['0.65','0.65']]
                },
                {
                    id: '_00_wiresCopy',
                    type: 'image',
                    tag: 'img',
                    rect: ['-716px', '-437px','2460px','1260px','auto', 'auto'],
                    opacity: 0.15,
                    fill: ["rgba(0,0,0,0)",im+"00_wires.svg",'0px','0px'],
                    transform: [[],[],[],['0.1','0.1']]
                },
                {
                    id: 'static_electricity',
                    type: 'rect',
                    rect: ['-384', '-128','auto','auto','auto', 'auto']
                },
                {
                    id: 'txt_leaders_symb',
                    type: 'rect',
                    rect: ['29px', '30px','auto','auto','auto', 'auto']
                },
                {
                    id: 'white_letterbox_left',
                    type: 'rect',
                    rect: ['0px', '0px','20px','480px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                },
                {
                    id: 'white_letterbox_right',
                    type: 'rect',
                    rect: ['620px', '0px','20px','480px','auto', 'auto'],
                    fill: ["rgba(255,255,255,1.00)"],
                    stroke: [0,"rgba(0, 0, 0, 0)","none"]
                }]
            }],
            symbolInstances: [
            {
                id: 'static_electricity',
                symbolName: 'static_electricity',
                autoPlay: {

                }
            },
            {
                id: 'txt_leaders_symb',
                symbolName: 'txt_leaders_symb',
                autoPlay: {

                }
            }
            ]
        },
    states: {
        "Base State": {
            "${__03_glowballCopy4}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["motion", "location", '37.34px 11.96px'],
                ["style", "opacity", '0.85'],
                ["transform", "scaleX", '0.4']
            ],
            "${__03_glowballCopy10}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '0.85'],
                ["motion", "location", '805.34px 265.96px']
            ],
            "${__03_glowballCopy5}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["motion", "location", '37.34px 11.96px'],
                ["style", "opacity", '0.87'],
                ["transform", "scaleX", '0.4']
            ],
            "${__03_glowballCopy14}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '0.84'],
                ["motion", "location", '778.4px 263.4px']
            ],
            "${__00_generator_glow}": [
                ["style", "top", '183px'],
                ["transform", "scaleY", '0.65'],
                ["transform", "scaleX", '0.65'],
                ["style", "opacity", '0'],
                ["style", "left", '310px']
            ],
            "${_stage_offset}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "display", 'block'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '-1px'],
                ["style", "opacity", '1']
            ],
            "${__03_glowballCopy6}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["style", "display", 'block'],
                ["style", "opacity", '0.85'],
                ["motion", "location", '778.4px 263.4px'],
                ["transform", "scaleX", '0.4']
            ],
            "${__00_sluice_gate2}": [
                ["style", "top", '58px'],
                ["style", "opacity", '1']
            ],
            "${__03_glowballCopy12}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["style", "display", 'block'],
                ["style", "opacity", '0.85'],
                ["transform", "scaleX", '0.4'],
                ["motion", "location", '778.4px 263.4px']
            ],
            "${__00_water_surface_rightCopy}": [
                ["style", "top", '333px'],
                ["transform", "scaleY", '0.75'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "clip", [0,601,45,474.46533203125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '19px']
            ],
            "${__00_background}": [
                ["style", "left", '19px']
            ],
            "${__00_wiresCopy}": [
                ["style", "top", '-437px'],
                ["style", "opacity", '0.15'],
                ["style", "left", '-716px']
            ],
            "${__00_front_hilites}": [
                ["transform", "scaleX", '1'],
                ["style", "top", '90px'],
                ["style", "left", '114px'],
                ["transform", "scaleY", '1']
            ],
            "${__00_water_cover}": [
                ["transform", "scaleX", '0.99'],
                ["style", "left", '503px'],
                ["style", "top", '299px']
            ],
            "${_glowballs2_parent}": [
                ["style", "top", '-128px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '-384px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${__03_glowballCopy15}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '0.85'],
                ["motion", "location", '805.67px 265.96px']
            ],
            "${__03_glowball}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '0.85'],
                ["motion", "location", '10.4px 9.4px'],
                ["style", "display", 'block']
            ],
            "${__00_dam_face}": [
                ["style", "top", '91px'],
                ["style", "left", '115px']
            ],
            "${_white_letterbox_left}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '480px'],
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '0px'],
                ["style", "width", '20px']
            ],
            "${__00_water_front_RIGHT_TOPCopy}": [
                ["style", "top", '121px'],
                ["style", "opacity", '0.9'],
                ["style", "left", '20px'],
                ["style", "clip", [39,405,247,111], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__00_generator}": [
                ["style", "top", '216px'],
                ["style", "left", '321px']
            ],
            "${__00_wires}": [
                ["style", "left", '-716px'],
                ["style", "top", '-437px']
            ],
            "${__03_glowballCopy3}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["motion", "location", '37.67px 11.96px'],
                ["style", "opacity", '0.85'],
                ["transform", "scaleX", '0.4']
            ],
            "${__03_glowballCopy11}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '0.87'],
                ["motion", "location", '805.34px 265.96px']
            ],
            "${__03_glowballCopy7}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '0.85'],
                ["motion", "location", '778.4px 263.4px']
            ],
            "${__00_water_surface_right}": [
                ["style", "top", '333px'],
                ["transform", "scaleY", '0.75'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "left", '19px'],
                ["style", "clip", [0,601,45,474.46533203125], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_txt_leaders_symb}": [
                ["style", "top", '30px'],
                ["style", "opacity", '1'],
                ["style", "left", '29px']
            ],
            "${__00_water_surface_left}": [
                ["style", "top", '88px'],
                ["transform", "scaleY", '0.75'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '1'],
                ["style", "left", '-486px'],
                ["style", "clip", [0,601,83.71517181396484,486.6435546875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__00_water_front_RIGHT_BOTTOM}": [
                ["style", "top", '121px'],
                ["style", "opacity", '0.9'],
                ["style", "left", '20px'],
                ["style", "clip", [247,601,358,111], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__03_glowballCopy}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["motion", "location", '10.4px 9.4px'],
                ["style", "opacity", '0.85'],
                ["transform", "scaleX", '0.4']
            ],
            "${_static_electricity}": [
                ["style", "opacity", '1']
            ],
            "${__03_glowballCopy13}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '0.85'],
                ["motion", "location", '778.4px 263.4px']
            ],
            "${_glowballs1_parent}": [
                ["style", "top", '127px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '384px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${__00_water_surface_leftCopy}": [
                ["style", "top", '88px'],
                ["transform", "scaleY", '0.75'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "opacity", '0'],
                ["style", "clip", [0,601,83.715171813965,486.6435546875], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-486px']
            ],
            "${__03_glowballCopy16}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["motion", "location", '805.34px 265.96px'],
                ["style", "opacity", '0.85'],
                ["transform", "scaleX", '0.4']
            ],
            "${_turbine_spritesheet}": [
                ["style", "top", '322px'],
                ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "left", '337px'],
                ["style", "clip", [0,52.66552734375,52,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__00_water_front_RIGHT_TOP}": [
                ["style", "top", '121px'],
                ["style", "opacity", '0.9'],
                ["style", "left", '20px'],
                ["style", "clip", [106,111,247,111], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__03_glowballCopy2}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["motion", "location", '10.4px 9.4px'],
                ["style", "opacity", '0.84'],
                ["transform", "scaleX", '0.4']
            ],
            "${__00_sluice_gate}": [
                ["style", "top", '115px'],
                ["style", "opacity", '0'],
                ["style", "left", '127px']
            ],
            "${__03_glowballCopy8}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '0.84'],
                ["motion", "location", '778.4px 263.4px']
            ],
            "${_white_letterbox_right}": [
                ["style", "top", '0px'],
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "height", '480px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "left", '620px'],
                ["style", "width", '20px']
            ],
            "${__00_lakebed}": [
                ["style", "left", '19px'],
                ["style", "top", '421px']
            ],
            "${_glowballs3_parent}": [
                ["style", "top", '-127px'],
                ["style", "display", 'none'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '-384px'],
                ["color", "background-color", 'rgba(192,192,192,0.00)']
            ],
            "${__03_glowballCopy9}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["transform", "scaleX", '0.4'],
                ["style", "opacity", '0.85'],
                ["motion", "location", '805.67px 265.96px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '478px'],
                ["style", "max-width", '640px'],
                ["style", "width", '638px']
            ],
            "${__03_glowballCopy17}": [
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '0.4'],
                ["motion", "location", '805.34px 265.96px'],
                ["style", "opacity", '0.87'],
                ["transform", "scaleX", '0.4']
            ],
            "${__00_water_front_LEFT}": [
                ["style", "top", '121px'],
                ["style", "opacity", '0.9'],
                ["style", "left", '20px'],
                ["style", "clip", [0,111,358,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${__00_back_terrain}": [
                ["style", "top", '91px'],
                ["style", "left", '132px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 9778,
            autoPlay: false,
            timeline: [
                { id: "dg109", tween: [ "style", "${__00_water_front_LEFT}", "clip", [0,111,358,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,111,358,0]}], position: 1000, duration: 0 },
                { id: "dg205", tween: [ "style", "${__00_water_surface_leftCopy}", "top", '88px', { fromValue: '88px'}], position: 1000, duration: 0 },
                { id: "dg120", tween: [ "style", "${__00_water_cover}", "top", '294px', { fromValue: '299px'}], position: 1000, duration: 8141, easing: "easeInOutQuad" },
                { id: "dg121", tween: [ "style", "${__00_water_cover}", "top", '299px', { fromValue: '294px'}], position: 9141, duration: 511, easing: "easeInOutQuad" },
                { id: "dg460", tween: [ "style", "${__00_water_front_RIGHT_BOTTOM}", "clip", [242,601,358,111], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [247,601,358,111]}], position: 2163, duration: 7489, easing: "easeInOutQuad" },
                { id: "dg142", tween: [ "motion", "${__03_glowball}", [[10.4, 9.4, 112.55, 164.85],[117.23, 76.84, 43.28, 2.87]]], position: 3112, duration: 667 },
                { id: "dg143", tween: [ "motion", "${__03_glowball}", [[117.23, 76.84, 16.51, 5.9],[192.32, 81.8, 76.05, -6.67]]], position: 3779, duration: 500 },
                { id: "dg144", tween: [ "motion", "${__03_glowball}", [[192.32, 81.8, 0, 0],[238.5, 87.5, 57.64, 0.66]]], position: 4279, duration: 499 },
                { id: "dg145", tween: [ "motion", "${__03_glowball}", [[10.4, 9.4, 112.55, 164.85],[117.23, 76.84, 43.28, 2.87]]], position: 5112, duration: 667 },
                { id: "dg146", tween: [ "motion", "${__03_glowball}", [[117.23, 76.84, 16.51, 5.9],[192.32, 81.8, 76.05, -6.67]]], position: 5779, duration: 500 },
                { id: "dg147", tween: [ "motion", "${__03_glowball}", [[192.32, 81.8, 0, 0],[238.5, 87.5, 57.64, 0.66]]], position: 6279, duration: 499 },
                { id: "dg148", tween: [ "motion", "${__03_glowball}", [[10.4, 9.4, 112.55, 164.85],[117.23, 76.84, 43.28, 2.87]]], position: 7112, duration: 667 },
                { id: "dg149", tween: [ "motion", "${__03_glowball}", [[117.23, 76.84, 16.51, 5.9],[192.32, 81.8, 76.05, -6.67]]], position: 7779, duration: 500 },
                { id: "dg150", tween: [ "motion", "${__03_glowball}", [[192.32, 81.8, 0, 0],[238.5, 87.5, 57.64, 0.66]]], position: 8279, duration: 499 },
                { id: "dg202", tween: [ "style", "${__00_water_surface_left}", "top", '93px', { fromValue: '88px'}], position: 1000, duration: 8652, easing: "easeInOutQuad" },
                { id: "dg200", tween: [ "style", "${_txt_leaders_symb}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "dg201", tween: [ "style", "${_txt_leaders_symb}", "opacity", '1', { fromValue: '0'}], position: 9267, duration: 511 },
                { id: "dg31", tween: [ "motion", "${__03_glowballCopy5}", [[37.34, 11.96, 136.46, 132.05],[151.61, 32.88, 19.24, -7.85]]], position: 3112, duration: 667 },
                { id: "dg32", tween: [ "motion", "${__03_glowballCopy5}", [[151.61, 32.88, 1.16, -0.47],[152.57, 32.65, 150.37, 99.91, -3.86, 0.67],[212.73, 55.83, 0, 0]]], position: 3779, duration: 500 },
                { id: "dg33", tween: [ "motion", "${__03_glowballCopy5}", [[212.73, 55.83, 0, 0],[251.5, 72.5, 28.55, -11.64]]], position: 4279, duration: 499 },
                { id: "dg34", tween: [ "motion", "${__03_glowballCopy5}", [[37.34, 11.96, 136.46, 132.05],[151.61, 32.88, 19.24, -7.85]]], position: 5112, duration: 667 },
                { id: "dg35", tween: [ "motion", "${__03_glowballCopy5}", [[151.61, 32.88, 1.16, -0.47],[152.57, 32.65, 150.37, 99.91, -3.86, 0.67],[212.73, 55.83, 0, 0]]], position: 5779, duration: 500 },
                { id: "dg36", tween: [ "motion", "${__03_glowballCopy5}", [[212.73, 55.83, 0, 0],[251.5, 72.5, 28.55, -11.64]]], position: 6279, duration: 499 },
                { id: "dg37", tween: [ "motion", "${__03_glowballCopy5}", [[37.34, 11.96, 136.46, 132.05],[151.61, 32.88, 19.24, -7.85]]], position: 7112, duration: 667 },
                { id: "dg38", tween: [ "motion", "${__03_glowballCopy5}", [[151.61, 32.88, 1.16, -0.47],[152.57, 32.65, 150.37, 99.91, -3.86, 0.67],[212.73, 55.83, 0, 0]]], position: 7779, duration: 500 },
                { id: "dg39", tween: [ "motion", "${__03_glowballCopy5}", [[212.73, 55.83, 0, 0],[251.5, 72.5, 28.55, -11.64]]], position: 8279, duration: 499 },
                { id: "dg106", tween: [ "style", "${__00_water_surface_rightCopy}", "top", '333px', { fromValue: '333px'}], position: 1000, duration: 0 },
                { id: "dg110", tween: [ "motion", "${__03_glowballCopy17}", [[805.34, 265.96, 136.46, 132.05],[919.61, 286.88, 19.24, -7.85]]], position: 4441, duration: 667 },
                { id: "dg111", tween: [ "motion", "${__03_glowballCopy17}", [[919.61, 286.88, 1.16, -0.47],[920.57, 286.65, 150.37, 99.91, -3.86, 0.67],[980.73, 309.83, 0, 0]]], position: 5108, duration: 500 },
                { id: "dg112", tween: [ "motion", "${__03_glowballCopy17}", [[980.73, 309.83, 0, 0],[1019.5, 326.5, 28.55, -11.64]]], position: 5608, duration: 499 },
                { id: "dg113", tween: [ "motion", "${__03_glowballCopy17}", [[805.34, 265.96, 136.46, 132.05],[919.61, 286.88, 19.24, -7.85]]], position: 6441, duration: 667 },
                { id: "dg114", tween: [ "motion", "${__03_glowballCopy17}", [[919.61, 286.88, 1.16, -0.47],[920.57, 286.65, 150.37, 99.91, -3.86, 0.67],[980.73, 309.83, 0, 0]]], position: 7108, duration: 500 },
                { id: "dg115", tween: [ "motion", "${__03_glowballCopy17}", [[980.73, 309.83, 0, 0],[1019.5, 326.5, 28.55, -11.64]]], position: 7608, duration: 499 },
                { id: "dg107", tween: [ "style", "${__00_water_surface_rightCopy}", "opacity", '1', { fromValue: '0'}], position: 9141, duration: 511, easing: "easeInOutQuad" },
                { id: "dg204", tween: [ "style", "${__00_water_surface_left}", "background-position", [250,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1000, duration: 8652, easing: "easeInOutQuad" },
                { id: "dg16", tween: [ "transform", "${__03_glowballCopy10}", "scaleX", '0.1', { fromValue: '0.4'}], position: 3775, duration: 1666 },
                { id: "dg17", tween: [ "transform", "${__03_glowballCopy10}", "scaleX", '0.1', { fromValue: '0.4'}], position: 5775, duration: 1666 },
                { id: "dg18", tween: [ "transform", "${__03_glowballCopy10}", "scaleX", '0.1', { fromValue: '0.4'}], position: 7775, duration: 1666 },
                { id: "dg185", tween: [ "motion", "${__03_glowballCopy3}", [[37.67, 11.96, 139.61, 171.5],[155.7, 77.07, 19.24, -7.85]]], position: 3112, duration: 667 },
                { id: "dg186", tween: [ "motion", "${__03_glowballCopy3}", [[155.7, 77.07, 1.16, -0.47],[156.18, 77.1, 141.2, 49.08, -0.11, -0.08],[215.01, 82.54, 0, 0]]], position: 3779, duration: 500 },
                { id: "dg187", tween: [ "motion", "${__03_glowballCopy3}", [[215.01, 82.54, 0, 0],[252.62, 87.85, 26.34, -17.2]]], position: 4279, duration: 499 },
                { id: "dg188", tween: [ "motion", "${__03_glowballCopy3}", [[37.67, 11.96, 139.61, 171.5],[155.7, 77.07, 19.24, -7.85]]], position: 5112, duration: 667 },
                { id: "dg189", tween: [ "motion", "${__03_glowballCopy3}", [[155.7, 77.07, 1.16, -0.47],[156.18, 77.1, 141.2, 49.08, -0.11, -0.08],[215.01, 82.54, 0, 0]]], position: 5779, duration: 500 },
                { id: "dg190", tween: [ "motion", "${__03_glowballCopy3}", [[215.01, 82.54, 0, 0],[252.62, 87.85, 26.34, -17.2]]], position: 6279, duration: 499 },
                { id: "dg191", tween: [ "motion", "${__03_glowballCopy3}", [[37.67, 11.96, 139.61, 171.5],[155.7, 77.07, 19.24, -7.85]]], position: 7112, duration: 667 },
                { id: "dg192", tween: [ "motion", "${__03_glowballCopy3}", [[155.7, 77.07, 1.16, -0.47],[156.18, 77.1, 141.2, 49.08, -0.11, -0.08],[215.01, 82.54, 0, 0]]], position: 7779, duration: 500 },
                { id: "dg193", tween: [ "motion", "${__03_glowballCopy3}", [[215.01, 82.54, 0, 0],[252.62, 87.85, 26.34, -17.2]]], position: 8279, duration: 499 },
                { id: "dg19", tween: [ "transform", "${__03_glowballCopy10}", "scaleY", '0.1', { fromValue: '0.4'}], position: 3775, duration: 1666 },
                { id: "dg20", tween: [ "transform", "${__03_glowballCopy10}", "scaleY", '0.1', { fromValue: '0.4'}], position: 5775, duration: 1666 },
                { id: "dg21", tween: [ "transform", "${__03_glowballCopy10}", "scaleY", '0.1', { fromValue: '0.4'}], position: 7775, duration: 1666 },
                { id: "dg461", tween: [ "style", "${__00_water_surface_right}", "top", '328px', { fromValue: '333px'}], position: 1000, duration: 8652, easing: "easeInOutQuad" },
                { id: "dg485", tween: [ "motion", "${__03_glowballCopy11}", [[805.34, 265.96, 136.46, 132.05],[919.61, 286.88, 19.24, -7.85]]], position: 3775, duration: 667 },
                { id: "dg486", tween: [ "motion", "${__03_glowballCopy11}", [[919.61, 286.88, 1.16, -0.47],[920.57, 286.65, 150.37, 99.91, -3.86, 0.67],[980.73, 309.83, 0, 0]]], position: 4442, duration: 500 },
                { id: "dg487", tween: [ "motion", "${__03_glowballCopy11}", [[980.73, 309.83, 0, 0],[1019.5, 326.5, 28.55, -11.64]]], position: 4942, duration: 499 },
                { id: "dg488", tween: [ "motion", "${__03_glowballCopy11}", [[805.34, 265.96, 136.46, 132.05],[919.61, 286.88, 19.24, -7.85]]], position: 5775, duration: 667 },
                { id: "dg489", tween: [ "motion", "${__03_glowballCopy11}", [[919.61, 286.88, 1.16, -0.47],[920.57, 286.65, 150.37, 99.91, -3.86, 0.67],[980.73, 309.83, 0, 0]]], position: 6442, duration: 500 },
                { id: "dg490", tween: [ "motion", "${__03_glowballCopy11}", [[980.73, 309.83, 0, 0],[1019.5, 326.5, 28.55, -11.64]]], position: 6942, duration: 499 },
                { id: "dg491", tween: [ "motion", "${__03_glowballCopy11}", [[805.34, 265.96, 136.46, 132.05],[919.61, 286.88, 19.24, -7.85]]], position: 7775, duration: 667 },
                { id: "dg492", tween: [ "motion", "${__03_glowballCopy11}", [[919.61, 286.88, 1.16, -0.47],[920.57, 286.65, 150.37, 99.91, -3.86, 0.67],[980.73, 309.83, 0, 0]]], position: 8442, duration: 500 },
                { id: "dg493", tween: [ "motion", "${__03_glowballCopy11}", [[980.73, 309.83, 0, 0],[1019.5, 326.5, 28.55, -11.64]]], position: 8942, duration: 499 },
                { id: "dg482", tween: [ "transform", "${__03_glowballCopy11}", "scaleY", '0.1', { fromValue: '0.4'}], position: 3775, duration: 1666 },
                { id: "dg483", tween: [ "transform", "${__03_glowballCopy11}", "scaleY", '0.1', { fromValue: '0.4'}], position: 5775, duration: 1666 },
                { id: "dg484", tween: [ "transform", "${__03_glowballCopy11}", "scaleY", '0.1', { fromValue: '0.4'}], position: 7775, duration: 1666 },
                { id: "dg479", tween: [ "transform", "${__03_glowballCopy11}", "scaleX", '0.1', { fromValue: '0.4'}], position: 3775, duration: 1666 },
                { id: "dg480", tween: [ "transform", "${__03_glowballCopy11}", "scaleX", '0.1', { fromValue: '0.4'}], position: 5775, duration: 1666 },
                { id: "dg481", tween: [ "transform", "${__03_glowballCopy11}", "scaleX", '0.1', { fromValue: '0.4'}], position: 7775, duration: 1666 },
                { id: "dg48", tween: [ "transform", "${__03_glowballCopy14}", "scaleY", '0.1', { fromValue: '0.4'}], position: 4441, duration: 1666 },
                { id: "dg49", tween: [ "transform", "${__03_glowballCopy14}", "scaleY", '0.1', { fromValue: '0.4'}], position: 6441, duration: 1666 },
                { id: "dg467", tween: [ "transform", "${__03_glowballCopy7}", "scaleY", '0.1', { fromValue: '0.4'}], position: 3775, duration: 1666 },
                { id: "dg468", tween: [ "transform", "${__03_glowballCopy7}", "scaleY", '0.1', { fromValue: '0.4'}], position: 5775, duration: 1666 },
                { id: "dg469", tween: [ "transform", "${__03_glowballCopy7}", "scaleY", '0.1', { fromValue: '0.4'}], position: 7775, duration: 1666 },
                { id: "dg464", tween: [ "transform", "${__03_glowballCopy7}", "scaleX", '0.1', { fromValue: '0.4'}], position: 3775, duration: 1666 },
                { id: "dg465", tween: [ "transform", "${__03_glowballCopy7}", "scaleX", '0.1', { fromValue: '0.4'}], position: 5775, duration: 1666 },
                { id: "dg466", tween: [ "transform", "${__03_glowballCopy7}", "scaleX", '0.1', { fromValue: '0.4'}], position: 7775, duration: 1666 },
                { id: "dg75", tween: [ "style", "${__03_glowballCopy6}", "display", 'block', { fromValue: 'block'}], position: 5775, duration: 0 },
                { id: "dg76", tween: [ "style", "${__03_glowballCopy6}", "display", 'block', { fromValue: 'block'}], position: 7775, duration: 0 },
                { id: "dg77", tween: [ "style", "${__03_glowballCopy6}", "display", 'block', { fromValue: 'block'}], position: 9775, duration: 0 },
                { id: "dg463", tween: [ "style", "${__00_water_surface_right}", "background-position", [250,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1000, duration: 8652, easing: "easeInOutQuad" },
                { id: "dg118", tween: [ "transform", "${__03_glowballCopy17}", "scaleX", '0.1', { fromValue: '0.4'}], position: 4441, duration: 1666 },
                { id: "dg119", tween: [ "transform", "${__03_glowballCopy17}", "scaleX", '0.1', { fromValue: '0.4'}], position: 6441, duration: 1666 },
                { id: "dg237", tween: [ "style", "${_turbine_spritesheet}", "clip", [0,52.66552734375,52,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,52.66552734375,52,0]}], position: 2089, duration: 0 },
                { id: "dg166", tween: [ "style", "${_static_electricity}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "dg167", tween: [ "style", "${_static_electricity}", "opacity", '1', { fromValue: '0'}], position: 9267, duration: 511 },
                { id: "dg206", tween: [ "style", "${__00_water_surface_leftCopy}", "opacity", '1', { fromValue: '0'}], position: 9141, duration: 511, easing: "easeInOutQuad" },
                { id: "dg448", tween: [ "transform", "${__03_glowballCopy9}", "scaleY", '0.1', { fromValue: '0.4'}], position: 3775, duration: 1666 },
                { id: "dg449", tween: [ "transform", "${__03_glowballCopy9}", "scaleY", '0.1', { fromValue: '0.4'}], position: 5775, duration: 1666 },
                { id: "dg450", tween: [ "transform", "${__03_glowballCopy9}", "scaleY", '0.1', { fromValue: '0.4'}], position: 7775, duration: 1666 },
                { id: "dg445", tween: [ "transform", "${__03_glowballCopy9}", "scaleX", '0.1', { fromValue: '0.4'}], position: 3775, duration: 1666 },
                { id: "dg446", tween: [ "transform", "${__03_glowballCopy9}", "scaleX", '0.1', { fromValue: '0.4'}], position: 5775, duration: 1666 },
                { id: "dg447", tween: [ "transform", "${__03_glowballCopy9}", "scaleX", '0.1', { fromValue: '0.4'}], position: 7775, duration: 1666 },
                { id: "dg444", tween: [ "style", "${_glowballs3_parent}", "display", 'block', { fromValue: 'none'}], position: 4441, duration: 0 },
                { id: "dg235", tween: [ "style", "${__00_water_front_RIGHT_TOP}", "clip", [39,405,247,111], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [106,111,247,111]}], position: 1000, duration: 1163 },
                { id: "dg236", tween: [ "style", "${__00_water_front_RIGHT_TOP}", "clip", [39,405,242,111], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [39,405,247,111]}], position: 2163, duration: 7489, easing: "easeInOutQuad" },
                { id: "dg436", tween: [ "transform", "${__03_glowballCopy13}", "scaleY", '0.1', { fromValue: '0.4'}], position: 4441, duration: 1666 },
                { id: "dg437", tween: [ "transform", "${__03_glowballCopy13}", "scaleY", '0.1', { fromValue: '0.4'}], position: 6441, duration: 1666 },
                { id: "dg434", tween: [ "transform", "${__03_glowballCopy13}", "scaleX", '0.1', { fromValue: '0.4'}], position: 4441, duration: 1666 },
                { id: "dg435", tween: [ "transform", "${__03_glowballCopy13}", "scaleX", '0.1', { fromValue: '0.4'}], position: 6441, duration: 1666 },
                { id: "dg133", tween: [ "transform", "${__03_glowball}", "scaleX", '0.1', { fromValue: '0.4'}], position: 3112, duration: 1666 },
                { id: "dg134", tween: [ "transform", "${__03_glowball}", "scaleX", '0.1', { fromValue: '0.4'}], position: 5112, duration: 1666 },
                { id: "dg135", tween: [ "transform", "${__03_glowball}", "scaleX", '0.1', { fromValue: '0.4'}], position: 7112, duration: 1666 },
                { id: "dg433", tween: [ "style", "${_glowballs1_parent}", "display", 'block', { fromValue: 'none'}], position: 3112, duration: 0 },
                { id: "dg125", tween: [ "transform", "${__03_glowballCopy15}", "scaleY", '0.1', { fromValue: '0.4'}], position: 4441, duration: 1666 },
                { id: "dg126", tween: [ "transform", "${__03_glowballCopy15}", "scaleY", '0.1', { fromValue: '0.4'}], position: 6441, duration: 1666 },
                { id: "dg451", tween: [ "motion", "${__03_glowballCopy9}", [[805.67, 265.96, 139.61, 171.5],[923.7, 331.07, 19.24, -7.85]]], position: 3775, duration: 667 },
                { id: "dg452", tween: [ "motion", "${__03_glowballCopy9}", [[923.7, 331.07, 1.16, -0.47],[924.18, 331.1, 141.2, 49.08, -0.11, -0.08],[983.01, 336.54, 0, 0]]], position: 4442, duration: 500 },
                { id: "dg453", tween: [ "motion", "${__03_glowballCopy9}", [[983.01, 336.54, 0, 0],[1020.62, 341.85, 26.34, -17.2]]], position: 4942, duration: 499 },
                { id: "dg454", tween: [ "motion", "${__03_glowballCopy9}", [[805.67, 265.96, 139.61, 171.5],[923.7, 331.07, 19.24, -7.85]]], position: 5775, duration: 667 },
                { id: "dg455", tween: [ "motion", "${__03_glowballCopy9}", [[923.7, 331.07, 1.16, -0.47],[924.18, 331.1, 141.2, 49.08, -0.11, -0.08],[983.01, 336.54, 0, 0]]], position: 6442, duration: 500 },
                { id: "dg456", tween: [ "motion", "${__03_glowballCopy9}", [[983.01, 336.54, 0, 0],[1020.62, 341.85, 26.34, -17.2]]], position: 6942, duration: 499 },
                { id: "dg457", tween: [ "motion", "${__03_glowballCopy9}", [[805.67, 265.96, 139.61, 171.5],[923.7, 331.07, 19.24, -7.85]]], position: 7775, duration: 667 },
                { id: "dg458", tween: [ "motion", "${__03_glowballCopy9}", [[923.7, 331.07, 1.16, -0.47],[924.18, 331.1, 141.2, 49.08, -0.11, -0.08],[983.01, 336.54, 0, 0]]], position: 8442, duration: 500 },
                { id: "dg459", tween: [ "motion", "${__03_glowballCopy9}", [[983.01, 336.54, 0, 0],[1020.62, 341.85, 26.34, -17.2]]], position: 8942, duration: 499 },
                { id: "dg438", tween: [ "motion", "${__03_glowballCopy13}", [[778.4, 263.4, 163.93, 155.03],[881.2, 311.25, 19.24, -7.85]]], position: 4441, duration: 667 },
                { id: "dg439", tween: [ "motion", "${__03_glowballCopy13}", [[881.2, 311.25, 2.55, -1.16],[881.19, 311.11, 124.44, 66.78, -0.11, -0.08],[957.05, 325, 7.66, -13.77]]], position: 5108, duration: 500 },
                { id: "dg440", tween: [ "motion", "${__03_glowballCopy13}", [[957.05, 325, 0, 0],[1005.5, 335.5, 50.87, -17.79]]], position: 5608, duration: 499 },
                { id: "dg441", tween: [ "motion", "${__03_glowballCopy13}", [[778.4, 263.4, 163.93, 155.03],[881.2, 311.25, 19.24, -7.85]]], position: 6441, duration: 667 },
                { id: "dg442", tween: [ "motion", "${__03_glowballCopy13}", [[881.2, 311.25, 2.55, -1.16],[881.19, 311.11, 124.44, 66.78, -0.11, -0.08],[957.05, 325, 7.66, -13.77]]], position: 7108, duration: 500 },
                { id: "dg443", tween: [ "motion", "${__03_glowballCopy13}", [[957.05, 325, 0, 0],[1005.5, 335.5, 50.87, -17.79]]], position: 7608, duration: 499 },
                { id: "dg74", tween: [ "style", "${_stage_offset}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "dg232", tween: [ "transform", "${__03_glowballCopy2}", "scaleX", '0.1', { fromValue: '0.4'}], position: 3112, duration: 1666 },
                { id: "dg233", tween: [ "transform", "${__03_glowballCopy2}", "scaleX", '0.1', { fromValue: '0.4'}], position: 5112, duration: 1666 },
                { id: "dg234", tween: [ "transform", "${__03_glowballCopy2}", "scaleX", '0.1', { fromValue: '0.4'}], position: 7112, duration: 1666 },
                { id: "dg229", tween: [ "transform", "${__03_glowballCopy2}", "scaleY", '0.1', { fromValue: '0.4'}], position: 3112, duration: 1666 },
                { id: "dg230", tween: [ "transform", "${__03_glowballCopy2}", "scaleY", '0.1', { fromValue: '0.4'}], position: 5112, duration: 1666 },
                { id: "dg231", tween: [ "transform", "${__03_glowballCopy2}", "scaleY", '0.1', { fromValue: '0.4'}], position: 7112, duration: 1666 },
                { id: "dg203", tween: [ "style", "${__00_water_surface_left}", "opacity", '0', { fromValue: '1'}], position: 9131, duration: 521, easing: "easeInOutQuad" },
                { id: "dg220", tween: [ "motion", "${__03_glowballCopy2}", [[10.4, 9.4, 138.38, 109.06],[120.66, 32.34, 19.24, -7.85]]], position: 3112, duration: 667 },
                { id: "dg221", tween: [ "motion", "${__03_glowballCopy2}", [[120.66, 32.34, 2.55, -1.16],[120.88, 32.5, 113.29, 69.36, -0.11, -0.08],[194.55, 55.16, 0, 0]]], position: 3779, duration: 500 },
                { id: "dg222", tween: [ "motion", "${__03_glowballCopy2}", [[194.55, 55.16, 0, 0],[238.83, 71.5, 84.68, 12.28]]], position: 4279, duration: 499 },
                { id: "dg223", tween: [ "motion", "${__03_glowballCopy2}", [[10.4, 9.4, 138.38, 109.06],[120.66, 32.34, 19.24, -7.85]]], position: 5112, duration: 667 },
                { id: "dg224", tween: [ "motion", "${__03_glowballCopy2}", [[120.66, 32.34, 2.55, -1.16],[120.88, 32.5, 113.29, 69.36, -0.11, -0.08],[194.55, 55.16, 0, 0]]], position: 5779, duration: 500 },
                { id: "dg225", tween: [ "motion", "${__03_glowballCopy2}", [[194.55, 55.16, 0, 0],[238.83, 71.5, 84.68, 12.28]]], position: 6279, duration: 499 },
                { id: "dg226", tween: [ "motion", "${__03_glowballCopy2}", [[10.4, 9.4, 138.38, 109.06],[120.66, 32.34, 19.24, -7.85]]], position: 7112, duration: 667 },
                { id: "dg227", tween: [ "motion", "${__03_glowballCopy2}", [[120.66, 32.34, 2.55, -1.16],[120.88, 32.5, 113.29, 69.36, -0.11, -0.08],[194.55, 55.16, 0, 0]]], position: 7779, duration: 500 },
                { id: "dg228", tween: [ "motion", "${__03_glowballCopy2}", [[194.55, 55.16, 0, 0],[238.83, 71.5, 84.68, 12.28]]], position: 8279, duration: 499 },
                { id: "dg95", tween: [ "style", "${__03_glowballCopy12}", "display", 'block', { fromValue: 'block'}], position: 6441, duration: 0 },
                { id: "dg1", tween: [ "motion", "${__03_glowballCopy4}", [[37.34, 11.96, 178.69, 146.7],[160, 57.42, 19.24, -7.85]]], position: 3112, duration: 667 },
                { id: "dg2", tween: [ "motion", "${__03_glowballCopy4}", [[160, 57.42, 1.16, -0.47],[160.32, 56.9, 144.81, 61.64, -0.11, -0.08],[217.53, 70.81, 0, 0]]], position: 3779, duration: 500 },
                { id: "dg3", tween: [ "motion", "${__03_glowballCopy4}", [[217.53, 70.81, 0, 0],[253.86, 80.5, 19.74, -10.95]]], position: 4279, duration: 499 },
                { id: "dg4", tween: [ "motion", "${__03_glowballCopy4}", [[37.34, 11.96, 178.69, 146.7],[160, 57.42, 19.24, -7.85]]], position: 5112, duration: 667 },
                { id: "dg5", tween: [ "motion", "${__03_glowballCopy4}", [[160, 57.42, 1.16, -0.47],[160.32, 56.9, 144.81, 61.64, -0.11, -0.08],[217.53, 70.81, 0, 0]]], position: 5779, duration: 500 },
                { id: "dg6", tween: [ "motion", "${__03_glowballCopy4}", [[217.53, 70.81, 0, 0],[253.86, 80.5, 19.74, -10.95]]], position: 6279, duration: 499 },
                { id: "dg7", tween: [ "motion", "${__03_glowballCopy4}", [[37.34, 11.96, 178.69, 146.7],[160, 57.42, 19.24, -7.85]]], position: 7112, duration: 667 },
                { id: "dg8", tween: [ "motion", "${__03_glowballCopy4}", [[160, 57.42, 1.16, -0.47],[160.32, 56.9, 144.81, 61.64, -0.11, -0.08],[217.53, 70.81, 0, 0]]], position: 7779, duration: 500 },
                { id: "dg9", tween: [ "motion", "${__03_glowballCopy4}", [[217.53, 70.81, 0, 0],[253.86, 80.5, 19.74, -10.95]]], position: 8279, duration: 499 },
                { id: "dg219", tween: [ "style", "${__00_sluice_gate}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 500 },
                { id: "dg84", tween: [ "motion", "${__03_glowballCopy6}", [[778.4, 263.4, 112.55, 164.85],[885.23, 330.84, 43.28, 2.87]]], position: 3775, duration: 667 },
                { id: "dg85", tween: [ "motion", "${__03_glowballCopy6}", [[885.23, 330.84, 16.51, 5.9],[960.32, 335.8, 76.05, -6.67]]], position: 4442, duration: 500 },
                { id: "dg86", tween: [ "motion", "${__03_glowballCopy6}", [[960.32, 335.8, 0, 0],[1006.5, 341.5, 57.64, 0.66]]], position: 4942, duration: 499 },
                { id: "dg87", tween: [ "motion", "${__03_glowballCopy6}", [[778.4, 263.4, 112.55, 164.85],[885.23, 330.84, 43.28, 2.87]]], position: 5775, duration: 667 },
                { id: "dg88", tween: [ "motion", "${__03_glowballCopy6}", [[885.23, 330.84, 16.51, 5.9],[960.32, 335.8, 76.05, -6.67]]], position: 6442, duration: 500 },
                { id: "dg89", tween: [ "motion", "${__03_glowballCopy6}", [[960.32, 335.8, 0, 0],[1006.5, 341.5, 57.64, 0.66]]], position: 6942, duration: 499 },
                { id: "dg90", tween: [ "motion", "${__03_glowballCopy6}", [[778.4, 263.4, 112.55, 164.85],[885.23, 330.84, 43.28, 2.87]]], position: 7775, duration: 667 },
                { id: "dg91", tween: [ "motion", "${__03_glowballCopy6}", [[885.23, 330.84, 16.51, 5.9],[960.32, 335.8, 76.05, -6.67]]], position: 8442, duration: 500 },
                { id: "dg92", tween: [ "motion", "${__03_glowballCopy6}", [[960.32, 335.8, 0, 0],[1006.5, 341.5, 57.64, 0.66]]], position: 8942, duration: 499 },
                { id: "dg139", tween: [ "transform", "${__03_glowball}", "scaleY", '0.1', { fromValue: '0.4'}], position: 3112, duration: 1666 },
                { id: "dg140", tween: [ "transform", "${__03_glowball}", "scaleY", '0.1', { fromValue: '0.4'}], position: 5112, duration: 1666 },
                { id: "dg141", tween: [ "transform", "${__03_glowball}", "scaleY", '0.1', { fromValue: '0.4'}], position: 7112, duration: 1666 },
                { id: "dg168", tween: [ "style", "${__00_water_front_RIGHT_TOPCopy}", "clip", [39,405,247,111], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [39,405,247,111]}], position: 0, duration: 0 },
                { id: "dg218", tween: [ "style", "${__00_sluice_gate}", "top", '58px', { fromValue: '115px'}], position: 1000, duration: 1163 },
                { id: "dg216", tween: [ "transform", "${__03_glowballCopy16}", "scaleX", '0.1', { fromValue: '0.4'}], position: 4441, duration: 1666 },
                { id: "dg217", tween: [ "transform", "${__03_glowballCopy16}", "scaleX", '0.1', { fromValue: '0.4'}], position: 6441, duration: 1666 },
                { id: "dg214", tween: [ "transform", "${__03_glowballCopy16}", "scaleY", '0.1', { fromValue: '0.4'}], position: 4441, duration: 1666 },
                { id: "dg215", tween: [ "transform", "${__03_glowballCopy16}", "scaleY", '0.1', { fromValue: '0.4'}], position: 6441, duration: 1666 },
                { id: "dg151", tween: [ "motion", "${__03_glowballCopy}", [[10.4, 9.4, 163.93, 155.03],[113.2, 57.25, 19.24, -7.85]]], position: 3112, duration: 667 },
                { id: "dg152", tween: [ "motion", "${__03_glowballCopy}", [[113.2, 57.25, 2.55, -1.16],[113.19, 57.11, 124.44, 66.78, -0.11, -0.08],[189.05, 71, 7.66, -13.77]]], position: 3779, duration: 500 },
                { id: "dg153", tween: [ "motion", "${__03_glowballCopy}", [[189.05, 71, 0, 0],[237.5, 81.5, 50.87, -17.79]]], position: 4279, duration: 499 },
                { id: "dg154", tween: [ "motion", "${__03_glowballCopy}", [[10.4, 9.4, 163.93, 155.03],[113.2, 57.25, 19.24, -7.85]]], position: 5112, duration: 667 },
                { id: "dg155", tween: [ "motion", "${__03_glowballCopy}", [[113.2, 57.25, 2.55, -1.16],[113.19, 57.11, 124.44, 66.78, -0.11, -0.08],[189.05, 71, 7.66, -13.77]]], position: 5779, duration: 500 },
                { id: "dg156", tween: [ "motion", "${__03_glowballCopy}", [[189.05, 71, 0, 0],[237.5, 81.5, 50.87, -17.79]]], position: 6279, duration: 499 },
                { id: "dg157", tween: [ "motion", "${__03_glowballCopy}", [[10.4, 9.4, 163.93, 155.03],[113.2, 57.25, 19.24, -7.85]]], position: 7112, duration: 667 },
                { id: "dg158", tween: [ "motion", "${__03_glowballCopy}", [[113.2, 57.25, 2.55, -1.16],[113.19, 57.11, 124.44, 66.78, -0.11, -0.08],[189.05, 71, 7.66, -13.77]]], position: 7779, duration: 500 },
                { id: "dg159", tween: [ "motion", "${__03_glowballCopy}", [[189.05, 71, 0, 0],[237.5, 81.5, 50.87, -17.79]]], position: 8279, duration: 499 },
                { id: "dg462", tween: [ "style", "${__00_water_surface_right}", "opacity", '0', { fromValue: '1'}], position: 9131, duration: 521, easing: "easeInOutQuad" },
                { id: "dg160", tween: [ "transform", "${__03_glowballCopy}", "scaleY", '0.1', { fromValue: '0.4'}], position: 3112, duration: 1666 },
                { id: "dg161", tween: [ "transform", "${__03_glowballCopy}", "scaleY", '0.1', { fromValue: '0.4'}], position: 5112, duration: 1666 },
                { id: "dg162", tween: [ "transform", "${__03_glowballCopy}", "scaleY", '0.1', { fromValue: '0.4'}], position: 7112, duration: 1666 },
                { id: "dg163", tween: [ "transform", "${__03_glowballCopy}", "scaleX", '0.1', { fromValue: '0.4'}], position: 3112, duration: 1666 },
                { id: "dg164", tween: [ "transform", "${__03_glowballCopy}", "scaleX", '0.1', { fromValue: '0.4'}], position: 5112, duration: 1666 },
                { id: "dg165", tween: [ "transform", "${__03_glowballCopy}", "scaleX", '0.1', { fromValue: '0.4'}], position: 7112, duration: 1666 },
                { id: "dg102", tween: [ "transform", "${__03_glowballCopy12}", "scaleY", '0.1', { fromValue: '0.4'}], position: 4441, duration: 1666 },
                { id: "dg103", tween: [ "transform", "${__03_glowballCopy12}", "scaleY", '0.1', { fromValue: '0.4'}], position: 6441, duration: 1666 },
                { id: "dg197", tween: [ "transform", "${__03_glowballCopy3}", "scaleX", '0.1', { fromValue: '0.4'}], position: 3112, duration: 1666 },
                { id: "dg198", tween: [ "transform", "${__03_glowballCopy3}", "scaleX", '0.1', { fromValue: '0.4'}], position: 5112, duration: 1666 },
                { id: "dg199", tween: [ "transform", "${__03_glowballCopy3}", "scaleX", '0.1', { fromValue: '0.4'}], position: 7112, duration: 1666 },
                { id: "dg194", tween: [ "transform", "${__03_glowballCopy3}", "scaleY", '0.1', { fromValue: '0.4'}], position: 3112, duration: 1666 },
                { id: "dg195", tween: [ "transform", "${__03_glowballCopy3}", "scaleY", '0.1', { fromValue: '0.4'}], position: 5112, duration: 1666 },
                { id: "dg196", tween: [ "transform", "${__03_glowballCopy3}", "scaleY", '0.1', { fromValue: '0.4'}], position: 7112, duration: 1666 },
                { id: "dg208", tween: [ "motion", "${__03_glowballCopy16}", [[805.34, 265.96, 178.69, 146.7],[928, 311.42, 19.24, -7.85]]], position: 4441, duration: 667 },
                { id: "dg209", tween: [ "motion", "${__03_glowballCopy16}", [[928, 311.42, 1.16, -0.47],[928.32, 310.9, 144.81, 61.64, -0.11, -0.08],[985.53, 324.81, 0, 0]]], position: 5108, duration: 500 },
                { id: "dg210", tween: [ "motion", "${__03_glowballCopy16}", [[985.53, 324.81, 0, 0],[1021.86, 334.5, 19.74, -10.95]]], position: 5608, duration: 499 },
                { id: "dg211", tween: [ "motion", "${__03_glowballCopy16}", [[805.34, 265.96, 178.69, 146.7],[928, 311.42, 19.24, -7.85]]], position: 6441, duration: 667 },
                { id: "dg212", tween: [ "motion", "${__03_glowballCopy16}", [[928, 311.42, 1.16, -0.47],[928.32, 310.9, 144.81, 61.64, -0.11, -0.08],[985.53, 324.81, 0, 0]]], position: 7108, duration: 500 },
                { id: "dg213", tween: [ "motion", "${__03_glowballCopy16}", [[985.53, 324.81, 0, 0],[1021.86, 334.5, 19.74, -10.95]]], position: 7608, duration: 499 },
                { id: "dg238", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2089, duration: 0 },
                { id: "dg239", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2122, duration: 0 },
                { id: "dg240", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 2155, duration: 0 },
                { id: "dg241", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 2188, duration: 0 },
                { id: "dg242", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 2221, duration: 0 },
                { id: "dg243", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 2254, duration: 0 },
                { id: "dg244", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 2287, duration: 0 },
                { id: "dg245", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 2320, duration: 0 },
                { id: "dg246", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 2353, duration: 0 },
                { id: "dg247", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2386, duration: 0 },
                { id: "dg248", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 2419, duration: 0 },
                { id: "dg249", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 2452, duration: 0 },
                { id: "dg250", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 2485, duration: 0 },
                { id: "dg251", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 2518, duration: 0 },
                { id: "dg252", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 2551, duration: 0 },
                { id: "dg253", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 2584, duration: 0 },
                { id: "dg254", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 2617, duration: 0 },
                { id: "dg255", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2650, duration: 0 },
                { id: "dg256", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 2683, duration: 0 },
                { id: "dg257", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 2716, duration: 0 },
                { id: "dg258", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 2749, duration: 0 },
                { id: "dg259", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 2782, duration: 0 },
                { id: "dg260", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 2815, duration: 0 },
                { id: "dg261", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 2848, duration: 0 },
                { id: "dg262", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 2881, duration: 0 },
                { id: "dg263", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 2914, duration: 0 },
                { id: "dg264", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 2947, duration: 0 },
                { id: "dg265", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 2980, duration: 0 },
                { id: "dg266", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 3013, duration: 0 },
                { id: "dg267", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 3046, duration: 0 },
                { id: "dg268", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 3079, duration: 0 },
                { id: "dg269", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 3112, duration: 0 },
                { id: "dg270", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 3145, duration: 0 },
                { id: "dg271", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 3178, duration: 0 },
                { id: "dg272", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 3211, duration: 0 },
                { id: "dg273", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 3244, duration: 0 },
                { id: "dg274", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 3277, duration: 0 },
                { id: "dg275", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 3310, duration: 0 },
                { id: "dg276", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 3343, duration: 0 },
                { id: "dg277", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 3376, duration: 0 },
                { id: "dg278", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 3409, duration: 0 },
                { id: "dg279", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 3442, duration: 0 },
                { id: "dg280", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 3475, duration: 0 },
                { id: "dg281", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 3508, duration: 0 },
                { id: "dg282", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 3541, duration: 0 },
                { id: "dg283", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 3574, duration: 0 },
                { id: "dg284", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 3607, duration: 0 },
                { id: "dg285", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 3640, duration: 0 },
                { id: "dg286", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 3673, duration: 0 },
                { id: "dg287", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 3706, duration: 0 },
                { id: "dg288", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 3739, duration: 0 },
                { id: "dg289", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 3772, duration: 0 },
                { id: "dg290", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 3805, duration: 0 },
                { id: "dg291", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 3838, duration: 0 },
                { id: "dg292", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 3871, duration: 0 },
                { id: "dg293", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 3904, duration: 0 },
                { id: "dg294", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 3937, duration: 0 },
                { id: "dg295", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 3970, duration: 0 },
                { id: "dg296", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 4003, duration: 0 },
                { id: "dg297", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 4035, duration: 0 },
                { id: "dg298", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 4069, duration: 0 },
                { id: "dg299", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 4102, duration: 0 },
                { id: "dg300", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 4135, duration: 0 },
                { id: "dg301", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 4168, duration: 0 },
                { id: "dg302", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 4201, duration: 0 },
                { id: "dg303", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4234, duration: 0 },
                { id: "dg304", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 4267, duration: 0 },
                { id: "dg305", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 4300, duration: 0 },
                { id: "dg306", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 4333, duration: 0 },
                { id: "dg307", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 4366, duration: 0 },
                { id: "dg308", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 4399, duration: 0 },
                { id: "dg309", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 4432, duration: 0 },
                { id: "dg310", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 4465, duration: 0 },
                { id: "dg311", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4498, duration: 0 },
                { id: "dg312", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 4531, duration: 0 },
                { id: "dg313", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 4564, duration: 0 },
                { id: "dg314", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 4597, duration: 0 },
                { id: "dg315", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 4630, duration: 0 },
                { id: "dg316", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 4663, duration: 0 },
                { id: "dg317", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 4696, duration: 0 },
                { id: "dg318", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 4729, duration: 0 },
                { id: "dg319", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 4762, duration: 0 },
                { id: "dg320", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 4795, duration: 0 },
                { id: "dg321", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 4828, duration: 0 },
                { id: "dg322", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 4861, duration: 0 },
                { id: "dg323", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 4894, duration: 0 },
                { id: "dg324", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 4927, duration: 0 },
                { id: "dg325", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 4960, duration: 0 },
                { id: "dg326", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 4993, duration: 0 },
                { id: "dg327", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 5026, duration: 0 },
                { id: "dg328", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 5059, duration: 0 },
                { id: "dg329", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 5092, duration: 0 },
                { id: "dg330", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 5125, duration: 0 },
                { id: "dg331", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 5158, duration: 0 },
                { id: "dg332", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 5191, duration: 0 },
                { id: "dg333", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 5224, duration: 0 },
                { id: "dg334", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 5257, duration: 0 },
                { id: "dg335", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 5290, duration: 0 },
                { id: "dg336", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 5323, duration: 0 },
                { id: "dg337", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 5356, duration: 0 },
                { id: "dg338", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 5389, duration: 0 },
                { id: "dg339", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 5422, duration: 0 },
                { id: "dg340", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 5455, duration: 0 },
                { id: "dg341", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 5488, duration: 0 },
                { id: "dg342", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 5521, duration: 0 },
                { id: "dg343", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 5554, duration: 0 },
                { id: "dg344", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 5587, duration: 0 },
                { id: "dg345", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 5620, duration: 0 },
                { id: "dg346", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 5653, duration: 0 },
                { id: "dg347", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 5686, duration: 0 },
                { id: "dg348", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 5719, duration: 0 },
                { id: "dg349", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 5752, duration: 0 },
                { id: "dg350", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 5785, duration: 0 },
                { id: "dg351", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 5818, duration: 0 },
                { id: "dg352", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 5851, duration: 0 },
                { id: "dg353", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 5884, duration: 0 },
                { id: "dg354", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 5917, duration: 0 },
                { id: "dg355", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 5950, duration: 0 },
                { id: "dg356", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 5983, duration: 0 },
                { id: "dg357", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 6016, duration: 0 },
                { id: "dg358", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 6049, duration: 0 },
                { id: "dg359", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 6082, duration: 0 },
                { id: "dg360", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 6115, duration: 0 },
                { id: "dg361", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 6148, duration: 0 },
                { id: "dg362", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 6181, duration: 0 },
                { id: "dg363", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 6214, duration: 0 },
                { id: "dg364", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 6247, duration: 0 },
                { id: "dg365", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 6280, duration: 0 },
                { id: "dg366", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 6313, duration: 0 },
                { id: "dg367", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 6346, duration: 0 },
                { id: "dg368", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 6379, duration: 0 },
                { id: "dg369", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 6412, duration: 0 },
                { id: "dg370", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 6445, duration: 0 },
                { id: "dg371", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 6478, duration: 0 },
                { id: "dg372", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 6511, duration: 0 },
                { id: "dg373", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 6544, duration: 0 },
                { id: "dg374", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 6577, duration: 0 },
                { id: "dg375", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 6610, duration: 0 },
                { id: "dg376", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 6643, duration: 0 },
                { id: "dg377", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 6676, duration: 0 },
                { id: "dg378", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 6709, duration: 0 },
                { id: "dg379", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 6742, duration: 0 },
                { id: "dg380", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 6775, duration: 0 },
                { id: "dg381", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 6808, duration: 0 },
                { id: "dg382", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 6841, duration: 0 },
                { id: "dg383", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 6874, duration: 0 },
                { id: "dg384", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 6907, duration: 0 },
                { id: "dg385", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 6940, duration: 0 },
                { id: "dg386", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 6973, duration: 0 },
                { id: "dg387", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 7006, duration: 0 },
                { id: "dg388", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 7039, duration: 0 },
                { id: "dg389", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 7072, duration: 0 },
                { id: "dg390", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 7105, duration: 0 },
                { id: "dg391", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 7138, duration: 0 },
                { id: "dg392", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 7171, duration: 0 },
                { id: "dg393", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 7204, duration: 0 },
                { id: "dg394", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 7237, duration: 0 },
                { id: "dg395", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 7270, duration: 0 },
                { id: "dg396", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 7303, duration: 0 },
                { id: "dg397", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 7336, duration: 0 },
                { id: "dg398", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 7369, duration: 0 },
                { id: "dg399", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 7402, duration: 0 },
                { id: "dg400", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 7435, duration: 0 },
                { id: "dg401", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 7468, duration: 0 },
                { id: "dg402", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 7501, duration: 0 },
                { id: "dg403", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 7534, duration: 0 },
                { id: "dg404", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 7567, duration: 0 },
                { id: "dg405", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 7600, duration: 0 },
                { id: "dg406", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 7633, duration: 0 },
                { id: "dg407", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 7666, duration: 0 },
                { id: "dg408", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 7699, duration: 0 },
                { id: "dg409", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 7732, duration: 0 },
                { id: "dg410", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 7765, duration: 0 },
                { id: "dg411", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 7798, duration: 0 },
                { id: "dg412", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 7831, duration: 0 },
                { id: "dg413", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 7864, duration: 0 },
                { id: "dg414", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 7897, duration: 0 },
                { id: "dg415", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 7930, duration: 0 },
                { id: "dg416", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 7963, duration: 0 },
                { id: "dg417", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 7996, duration: 0 },
                { id: "dg418", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 8029, duration: 0 },
                { id: "dg419", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 8061, duration: 0 },
                { id: "dg420", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 8095, duration: 0 },
                { id: "dg421", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 8128, duration: 0 },
                { id: "dg422", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 8161, duration: 0 },
                { id: "dg423", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 8194, duration: 0 },
                { id: "dg424", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 8227, duration: 0 },
                { id: "dg425", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-152,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-101,0]}], position: 8260, duration: 0 },
                { id: "dg426", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-202,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-152,0]}], position: 8293, duration: 0 },
                { id: "dg427", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-252,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-202,0]}], position: 8326, duration: 0 },
                { id: "dg428", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-302,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-252,0]}], position: 8359, duration: 0 },
                { id: "dg429", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-353,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-302,0]}], position: 8392, duration: 0 },
                { id: "dg430", tween: [ "style", "${_turbine_spritesheet}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-353,0]}], position: 8425, duration: 0 },
                { id: "dg431", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-51,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 8458, duration: 0 },
                { id: "dg432", tween: [ "style", "${_turbine_spritesheet}", "background-position", [-101,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-51,0]}], position: 8491, duration: 0 },
                { id: "dg173", tween: [ "transform", "${__03_glowballCopy8}", "scaleY", '0.1', { fromValue: '0.4'}], position: 3775, duration: 1666 },
                { id: "dg174", tween: [ "transform", "${__03_glowballCopy8}", "scaleY", '0.1', { fromValue: '0.4'}], position: 5775, duration: 1666 },
                { id: "dg175", tween: [ "transform", "${__03_glowballCopy8}", "scaleY", '0.1', { fromValue: '0.4'}], position: 7775, duration: 1666 },
                { id: "dg170", tween: [ "transform", "${__03_glowballCopy8}", "scaleX", '0.1', { fromValue: '0.4'}], position: 3775, duration: 1666 },
                { id: "dg171", tween: [ "transform", "${__03_glowballCopy8}", "scaleX", '0.1', { fromValue: '0.4'}], position: 5775, duration: 1666 },
                { id: "dg172", tween: [ "transform", "${__03_glowballCopy8}", "scaleX", '0.1', { fromValue: '0.4'}], position: 7775, duration: 1666 },
                { id: "dg176", tween: [ "motion", "${__03_glowballCopy8}", [[778.4, 263.4, 138.38, 109.06],[888.66, 286.34, 19.24, -7.85]]], position: 3775, duration: 667 },
                { id: "dg177", tween: [ "motion", "${__03_glowballCopy8}", [[888.66, 286.34, 2.55, -1.16],[888.88, 286.5, 113.29, 69.36, -0.11, -0.08],[962.55, 309.16, 0, 0]]], position: 4442, duration: 500 },
                { id: "dg178", tween: [ "motion", "${__03_glowballCopy8}", [[962.55, 309.16, 0, 0],[1006.83, 325.5, 84.68, 12.28]]], position: 4942, duration: 499 },
                { id: "dg179", tween: [ "motion", "${__03_glowballCopy8}", [[778.4, 263.4, 138.38, 109.06],[888.66, 286.34, 19.24, -7.85]]], position: 5775, duration: 667 },
                { id: "dg180", tween: [ "motion", "${__03_glowballCopy8}", [[888.66, 286.34, 2.55, -1.16],[888.88, 286.5, 113.29, 69.36, -0.11, -0.08],[962.55, 309.16, 0, 0]]], position: 6442, duration: 500 },
                { id: "dg181", tween: [ "motion", "${__03_glowballCopy8}", [[962.55, 309.16, 0, 0],[1006.83, 325.5, 84.68, 12.28]]], position: 6942, duration: 499 },
                { id: "dg182", tween: [ "motion", "${__03_glowballCopy8}", [[778.4, 263.4, 138.38, 109.06],[888.66, 286.34, 19.24, -7.85]]], position: 7775, duration: 667 },
                { id: "dg183", tween: [ "motion", "${__03_glowballCopy8}", [[888.66, 286.34, 2.55, -1.16],[888.88, 286.5, 113.29, 69.36, -0.11, -0.08],[962.55, 309.16, 0, 0]]], position: 8442, duration: 500 },
                { id: "dg184", tween: [ "motion", "${__03_glowballCopy8}", [[962.55, 309.16, 0, 0],[1006.83, 325.5, 84.68, 12.28]]], position: 8942, duration: 499 },
                { id: "dg10", tween: [ "transform", "${__03_glowballCopy4}", "scaleY", '0.1', { fromValue: '0.4'}], position: 3112, duration: 1666 },
                { id: "dg11", tween: [ "transform", "${__03_glowballCopy4}", "scaleY", '0.1', { fromValue: '0.4'}], position: 5112, duration: 1666 },
                { id: "dg12", tween: [ "transform", "${__03_glowballCopy4}", "scaleY", '0.1', { fromValue: '0.4'}], position: 7112, duration: 1666 },
                { id: "dg13", tween: [ "transform", "${__03_glowballCopy4}", "scaleX", '0.1', { fromValue: '0.4'}], position: 3112, duration: 1666 },
                { id: "dg14", tween: [ "transform", "${__03_glowballCopy4}", "scaleX", '0.1', { fromValue: '0.4'}], position: 5112, duration: 1666 },
                { id: "dg15", tween: [ "transform", "${__03_glowballCopy4}", "scaleX", '0.1', { fromValue: '0.4'}], position: 7112, duration: 1666 },
                { id: "dg136", tween: [ "style", "${__03_glowball}", "display", 'block', { fromValue: 'block'}], position: 5112, duration: 0 },
                { id: "dg137", tween: [ "style", "${__03_glowball}", "display", 'block', { fromValue: 'block'}], position: 7112, duration: 0 },
                { id: "dg138", tween: [ "style", "${__03_glowball}", "display", 'block', { fromValue: 'block'}], position: 9112, duration: 0 },
                { id: "dg78", tween: [ "transform", "${__03_glowballCopy6}", "scaleX", '0.1', { fromValue: '0.4'}], position: 3775, duration: 1666 },
                { id: "dg79", tween: [ "transform", "${__03_glowballCopy6}", "scaleX", '0.1', { fromValue: '0.4'}], position: 5775, duration: 1666 },
                { id: "dg80", tween: [ "transform", "${__03_glowballCopy6}", "scaleX", '0.1', { fromValue: '0.4'}], position: 7775, duration: 1666 },
                { id: "dg43", tween: [ "transform", "${__03_glowballCopy5}", "scaleX", '0.1', { fromValue: '0.4'}], position: 3112, duration: 1666 },
                { id: "dg44", tween: [ "transform", "${__03_glowballCopy5}", "scaleX", '0.1', { fromValue: '0.4'}], position: 5112, duration: 1666 },
                { id: "dg45", tween: [ "transform", "${__03_glowballCopy5}", "scaleX", '0.1', { fromValue: '0.4'}], position: 7112, duration: 1666 },
                { id: "dg207", tween: [ "style", "${__00_water_surface_leftCopy}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1000, duration: 0, easing: "easeInOutQuad" },
                { id: "dg108", tween: [ "style", "${__00_water_surface_rightCopy}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 1000, duration: 0, easing: "easeInOutQuad" },
                { id: "dg104", tween: [ "transform", "${__03_glowballCopy12}", "scaleX", '0.1', { fromValue: '0.4'}], position: 4441, duration: 1666 },
                { id: "dg105", tween: [ "transform", "${__03_glowballCopy12}", "scaleX", '0.1', { fromValue: '0.4'}], position: 6441, duration: 1666 },
                { id: "dg81", tween: [ "transform", "${__03_glowballCopy6}", "scaleY", '0.1', { fromValue: '0.4'}], position: 3775, duration: 1666 },
                { id: "dg82", tween: [ "transform", "${__03_glowballCopy6}", "scaleY", '0.1', { fromValue: '0.4'}], position: 5775, duration: 1666 },
                { id: "dg83", tween: [ "transform", "${__03_glowballCopy6}", "scaleY", '0.1', { fromValue: '0.4'}], position: 7775, duration: 1666 },
                { id: "dg96", tween: [ "motion", "${__03_glowballCopy12}", [[778.4, 263.4, 112.55, 164.85],[885.23, 330.84, 43.28, 2.87]]], position: 4441, duration: 667 },
                { id: "dg97", tween: [ "motion", "${__03_glowballCopy12}", [[885.23, 330.84, 16.51, 5.9],[960.32, 335.8, 76.05, -6.67]]], position: 5108, duration: 500 },
                { id: "dg98", tween: [ "motion", "${__03_glowballCopy12}", [[960.32, 335.8, 0, 0],[1006.5, 341.5, 57.64, 0.66]]], position: 5608, duration: 499 },
                { id: "dg99", tween: [ "motion", "${__03_glowballCopy12}", [[778.4, 263.4, 112.55, 164.85],[885.23, 330.84, 43.28, 2.87]]], position: 6441, duration: 667 },
                { id: "dg100", tween: [ "motion", "${__03_glowballCopy12}", [[885.23, 330.84, 16.51, 5.9],[960.32, 335.8, 76.05, -6.67]]], position: 7108, duration: 500 },
                { id: "dg101", tween: [ "motion", "${__03_glowballCopy12}", [[960.32, 335.8, 0, 0],[1006.5, 341.5, 57.64, 0.66]]], position: 7608, duration: 499 },
                { id: "dg50", tween: [ "motion", "${__03_glowballCopy14}", [[778.4, 263.4, 138.38, 109.06],[888.66, 286.34, 19.24, -7.85]]], position: 4441, duration: 667 },
                { id: "dg51", tween: [ "motion", "${__03_glowballCopy14}", [[888.66, 286.34, 2.55, -1.16],[888.88, 286.5, 113.29, 69.36, -0.11, -0.08],[962.55, 309.16, 0, 0]]], position: 5108, duration: 500 },
                { id: "dg52", tween: [ "motion", "${__03_glowballCopy14}", [[962.55, 309.16, 0, 0],[1006.83, 325.5, 84.68, 12.28]]], position: 5608, duration: 499 },
                { id: "dg53", tween: [ "motion", "${__03_glowballCopy14}", [[778.4, 263.4, 138.38, 109.06],[888.66, 286.34, 19.24, -7.85]]], position: 6441, duration: 667 },
                { id: "dg54", tween: [ "motion", "${__03_glowballCopy14}", [[888.66, 286.34, 2.55, -1.16],[888.88, 286.5, 113.29, 69.36, -0.11, -0.08],[962.55, 309.16, 0, 0]]], position: 7108, duration: 500 },
                { id: "dg55", tween: [ "motion", "${__03_glowballCopy14}", [[962.55, 309.16, 0, 0],[1006.83, 325.5, 84.68, 12.28]]], position: 7608, duration: 499 },
                { id: "dg123", tween: [ "transform", "${__03_glowballCopy15}", "scaleX", '0.1', { fromValue: '0.4'}], position: 4441, duration: 1666 },
                { id: "dg124", tween: [ "transform", "${__03_glowballCopy15}", "scaleX", '0.1', { fromValue: '0.4'}], position: 6441, duration: 1666 },
                { id: "dg22", tween: [ "motion", "${__03_glowballCopy10}", [[805.34, 265.96, 178.69, 146.7],[928, 311.42, 19.24, -7.85]]], position: 3775, duration: 667 },
                { id: "dg23", tween: [ "motion", "${__03_glowballCopy10}", [[928, 311.42, 1.16, -0.47],[928.32, 310.9, 144.81, 61.64, -0.11, -0.08],[985.53, 324.81, 0, 0]]], position: 4442, duration: 500 },
                { id: "dg24", tween: [ "motion", "${__03_glowballCopy10}", [[985.53, 324.81, 0, 0],[1021.86, 334.5, 19.74, -10.95]]], position: 4942, duration: 499 },
                { id: "dg25", tween: [ "motion", "${__03_glowballCopy10}", [[805.34, 265.96, 178.69, 146.7],[928, 311.42, 19.24, -7.85]]], position: 5775, duration: 667 },
                { id: "dg26", tween: [ "motion", "${__03_glowballCopy10}", [[928, 311.42, 1.16, -0.47],[928.32, 310.9, 144.81, 61.64, -0.11, -0.08],[985.53, 324.81, 0, 0]]], position: 6442, duration: 500 },
                { id: "dg27", tween: [ "motion", "${__03_glowballCopy10}", [[985.53, 324.81, 0, 0],[1021.86, 334.5, 19.74, -10.95]]], position: 6942, duration: 499 },
                { id: "dg28", tween: [ "motion", "${__03_glowballCopy10}", [[805.34, 265.96, 178.69, 146.7],[928, 311.42, 19.24, -7.85]]], position: 7775, duration: 667 },
                { id: "dg29", tween: [ "motion", "${__03_glowballCopy10}", [[928, 311.42, 1.16, -0.47],[928.32, 310.9, 144.81, 61.64, -0.11, -0.08],[985.53, 324.81, 0, 0]]], position: 8442, duration: 500 },
                { id: "dg30", tween: [ "motion", "${__03_glowballCopy10}", [[985.53, 324.81, 0, 0],[1021.86, 334.5, 19.74, -10.95]]], position: 8942, duration: 499 },
                { id: "dg40", tween: [ "transform", "${__03_glowballCopy5}", "scaleY", '0.1', { fromValue: '0.4'}], position: 3112, duration: 1666 },
                { id: "dg41", tween: [ "transform", "${__03_glowballCopy5}", "scaleY", '0.1', { fromValue: '0.4'}], position: 5112, duration: 1666 },
                { id: "dg42", tween: [ "transform", "${__03_glowballCopy5}", "scaleY", '0.1', { fromValue: '0.4'}], position: 7112, duration: 1666 },
                { id: "dg470", tween: [ "motion", "${__03_glowballCopy7}", [[778.4, 263.4, 163.93, 155.03],[881.2, 311.25, 19.24, -7.85]]], position: 3775, duration: 667 },
                { id: "dg471", tween: [ "motion", "${__03_glowballCopy7}", [[881.2, 311.25, 2.55, -1.16],[881.19, 311.11, 124.44, 66.78, -0.11, -0.08],[957.05, 325, 7.66, -13.77]]], position: 4442, duration: 500 },
                { id: "dg472", tween: [ "motion", "${__03_glowballCopy7}", [[957.05, 325, 0, 0],[1005.5, 335.5, 50.87, -17.79]]], position: 4942, duration: 499 },
                { id: "dg473", tween: [ "motion", "${__03_glowballCopy7}", [[778.4, 263.4, 163.93, 155.03],[881.2, 311.25, 19.24, -7.85]]], position: 5775, duration: 667 },
                { id: "dg474", tween: [ "motion", "${__03_glowballCopy7}", [[881.2, 311.25, 2.55, -1.16],[881.19, 311.11, 124.44, 66.78, -0.11, -0.08],[957.05, 325, 7.66, -13.77]]], position: 6442, duration: 500 },
                { id: "dg475", tween: [ "motion", "${__03_glowballCopy7}", [[957.05, 325, 0, 0],[1005.5, 335.5, 50.87, -17.79]]], position: 6942, duration: 499 },
                { id: "dg476", tween: [ "motion", "${__03_glowballCopy7}", [[778.4, 263.4, 163.93, 155.03],[881.2, 311.25, 19.24, -7.85]]], position: 7775, duration: 667 },
                { id: "dg477", tween: [ "motion", "${__03_glowballCopy7}", [[881.2, 311.25, 2.55, -1.16],[881.19, 311.11, 124.44, 66.78, -0.11, -0.08],[957.05, 325, 7.66, -13.77]]], position: 8442, duration: 500 },
                { id: "dg478", tween: [ "motion", "${__03_glowballCopy7}", [[957.05, 325, 0, 0],[1005.5, 335.5, 50.87, -17.79]]], position: 8942, duration: 499 },
                { id: "dg56", tween: [ "style", "${__00_generator_glow}", "opacity", '0.8', { fromValue: '0'}], position: 2749, duration: 333, easing: "easeInOutSine" },
                { id: "dg57", tween: [ "style", "${__00_generator_glow}", "opacity", '0', { fromValue: '0.8'}], position: 3082, duration: 333 },
                { id: "dg58", tween: [ "style", "${__00_generator_glow}", "opacity", '0.8', { fromValue: '0'}], position: 3415, duration: 333, easing: "easeInOutSine" },
                { id: "dg59", tween: [ "style", "${__00_generator_glow}", "opacity", '0', { fromValue: '0.8'}], position: 3748, duration: 333 },
                { id: "dg60", tween: [ "style", "${__00_generator_glow}", "opacity", '0.8', { fromValue: '0'}], position: 4081, duration: 333, easing: "easeInOutSine" },
                { id: "dg61", tween: [ "style", "${__00_generator_glow}", "opacity", '0', { fromValue: '0.8'}], position: 4414, duration: 333 },
                { id: "dg62", tween: [ "style", "${__00_generator_glow}", "opacity", '0.8', { fromValue: '0'}], position: 4747, duration: 333, easing: "easeInOutSine" },
                { id: "dg63", tween: [ "style", "${__00_generator_glow}", "opacity", '0', { fromValue: '0.8'}], position: 5080, duration: 333 },
                { id: "dg64", tween: [ "style", "${__00_generator_glow}", "opacity", '0.8', { fromValue: '0'}], position: 5413, duration: 333, easing: "easeInOutSine" },
                { id: "dg65", tween: [ "style", "${__00_generator_glow}", "opacity", '0', { fromValue: '0.8'}], position: 5746, duration: 333 },
                { id: "dg66", tween: [ "style", "${__00_generator_glow}", "opacity", '0.8', { fromValue: '0'}], position: 6079, duration: 333, easing: "easeInOutSine" },
                { id: "dg67", tween: [ "style", "${__00_generator_glow}", "opacity", '0', { fromValue: '0.8'}], position: 6412, duration: 333 },
                { id: "dg68", tween: [ "style", "${__00_generator_glow}", "opacity", '0.8', { fromValue: '0'}], position: 6745, duration: 333, easing: "easeInOutSine" },
                { id: "dg69", tween: [ "style", "${__00_generator_glow}", "opacity", '0', { fromValue: '0.8'}], position: 7078, duration: 333 },
                { id: "dg70", tween: [ "style", "${__00_generator_glow}", "opacity", '0.8', { fromValue: '0'}], position: 7411, duration: 333, easing: "easeInOutSine" },
                { id: "dg71", tween: [ "style", "${__00_generator_glow}", "opacity", '0', { fromValue: '0.8'}], position: 7744, duration: 333 },
                { id: "dg72", tween: [ "style", "${__00_generator_glow}", "opacity", '0.8', { fromValue: '0'}], position: 8077, duration: 333, easing: "easeInOutSine" },
                { id: "dg73", tween: [ "style", "${__00_generator_glow}", "opacity", '0', { fromValue: '0.8'}], position: 8410, duration: 333 },
                { id: "dg93", tween: [ "style", "${__00_sluice_gate2}", "opacity", '0', { fromValue: '1'}], position: 0, duration: 500 },
                { id: "dg94", tween: [ "style", "${__00_sluice_gate2}", "opacity", '1', { fromValue: '0'}], position: 8898, duration: 511 },
                { id: "dg127", tween: [ "motion", "${__03_glowballCopy15}", [[805.67, 265.96, 139.61, 171.5],[923.7, 331.07, 19.24, -7.85]]], position: 4441, duration: 667 },
                { id: "dg128", tween: [ "motion", "${__03_glowballCopy15}", [[923.7, 331.07, 1.16, -0.47],[924.18, 331.1, 141.2, 49.08, -0.11, -0.08],[983.01, 336.54, 0, 0]]], position: 5108, duration: 500 },
                { id: "dg129", tween: [ "motion", "${__03_glowballCopy15}", [[983.01, 336.54, 0, 0],[1020.62, 341.85, 26.34, -17.2]]], position: 5608, duration: 499 },
                { id: "dg130", tween: [ "motion", "${__03_glowballCopy15}", [[805.67, 265.96, 139.61, 171.5],[923.7, 331.07, 19.24, -7.85]]], position: 6441, duration: 667 },
                { id: "dg131", tween: [ "motion", "${__03_glowballCopy15}", [[923.7, 331.07, 1.16, -0.47],[924.18, 331.1, 141.2, 49.08, -0.11, -0.08],[983.01, 336.54, 0, 0]]], position: 7108, duration: 500 },
                { id: "dg132", tween: [ "motion", "${__03_glowballCopy15}", [[983.01, 336.54, 0, 0],[1020.62, 341.85, 26.34, -17.2]]], position: 7608, duration: 499 },
                { id: "dg169", tween: [ "style", "${__00_water_front_RIGHT_TOPCopy}", "opacity", '0', { fromValue: '0.9'}], position: 0, duration: 500, easing: "easeInOutQuad" },
                { id: "dg116", tween: [ "transform", "${__03_glowballCopy17}", "scaleY", '0.1', { fromValue: '0.4'}], position: 4441, duration: 1666 },
                { id: "dg117", tween: [ "transform", "${__03_glowballCopy17}", "scaleY", '0.1', { fromValue: '0.4'}], position: 6441, duration: 1666 },
                { id: "dg122", tween: [ "style", "${_glowballs2_parent}", "display", 'block', { fromValue: 'none'}], position: 3775, duration: 0 },
                { id: "dg46", tween: [ "transform", "${__03_glowballCopy14}", "scaleX", '0.1', { fromValue: '0.4'}], position: 4441, duration: 1666 },
                { id: "dg47", tween: [ "transform", "${__03_glowballCopy14}", "scaleX", '0.1', { fromValue: '0.4'}], position: 6441, duration: 1666 }            ]
        }
    }
},
"txt_leaders_symb": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    align: 'center',
                    r: ['0px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Reservoir_txt',
                    text: 'Reservoir',
                    t: 'text',
                    n: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', 'normal', 'none', '']
                },
                {
                    align: 'left',
                    r: ['127px', '82px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Dam_txt',
                    text: 'Dam',
                    t: 'text',
                    n: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                },
                {
                    align: 'center',
                    r: ['109px', '0px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Sldng_gate_txt',
                    text: 'Sliding gate',
                    t: 'text',
                    n: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                },
                {
                    align: 'left',
                    r: ['265px', '139px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Generator_txt',
                    text: 'Generator',
                    t: 'text',
                    n: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                },
                {
                    align: 'left',
                    r: ['331px', '41px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Transformer_txt',
                    text: 'Transformer',
                    t: 'text',
                    n: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                },
                {
                    s: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    r: ['380px', '61px', '1px', '66px', 'auto', 'auto'],
                    id: 'Transformer_leader',
                    t: 'rect',
                    f: ['rgba(0,0,0,1)']
                },
                {
                    tf: [[0, 0], ['55'], [], [], ['0%', '0%']],
                    s: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    r: ['151px', '20px', '1px', '59px', 'auto', 'auto'],
                    id: 'Sldng_gate_leader',
                    t: 'rect',
                    f: ['rgba(0,0,0,1)']
                },
                {
                    align: 'left',
                    r: ['453px', '41px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Pwr_trans_cbl_txt',
                    text: 'Power<br>transmission<br>cables',
                    t: 'text',
                    n: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                },
                {
                    align: 'right',
                    r: ['203px', '361px', 'auto', 'auto', 'auto', 'auto'],
                    id: 'Turbine_txt',
                    text: 'Turbine',
                    t: 'text',
                    n: ['Arial, Helvetica, sans-serif', 18, 'rgba(0,0,0,1)', '400', 'none', 'normal']
                },
                {
                    tf: [[0, 0], ['-28']],
                    s: [0, 'rgba(0,0,0,0.00)', 'none'],
                    r: ['316px', '159px', '1px', '40px', 'auto', 'auto'],
                    id: 'Generator_leader',
                    t: 'rect',
                    f: ['rgba(0,0,0,1.00)']
                },
                {
                    s: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    r: ['38px', '20px', '1px', '79px', 'auto', 'auto'],
                    id: 'Reservoir_leader',
                    t: 'rect',
                    f: ['rgba(0,0,0,1)']
                },
                {
                    tf: [[0, 0], ['231'], [], [], ['0%', '0%']],
                    s: [0, 'rgba(0, 0, 0, 0)', 'none'],
                    r: ['267px', '373px', '1px', '72px', 'auto', 'auto'],
                    id: 'Turbine_leader',
                    t: 'rect',
                    f: ['rgba(0,0,0,1)']
                },
                {
                    tf: [[0, 0], [], [], ['0.09', '0.09']],
                    r: ['69px', '225px', '530px', '190px', 'auto', 'auto'],
                    id: 'black_arrow1',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/black_arrow1.svg', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.09', '0.09']],
                    r: ['-612px', '-159px', '1450px', '690px', 'auto', 'auto'],
                    id: 'blue_arrow1',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/blue_arrow1.svg', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.09', '0.09']],
                    r: ['-59px', '-20px', '540px', '540px', 'auto', 'auto'],
                    id: 'blue_arrow2',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/blue_arrow2.svg', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.09', '0.09']],
                    r: ['-9px', '108px', '560px', '390px', 'auto', 'auto'],
                    id: 'blue_arrow3',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/blue_arrow3.svg', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.09', '0.09']],
                    r: ['63px', '55px', '590px', '630px', 'auto', 'auto'],
                    id: 'blue_arrow4',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/blue_arrow4.svg', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.09', '0.09']],
                    r: ['-197px', '317px', '1300px', '150px', 'auto', 'auto'],
                    id: 'blue_arrow5',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/blue_arrow5.svg', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${_Dam_txt}": [
                ["style", "top", '82px'],
                ["style", "left", '127px']
            ],
            "${_Transformer_txt}": [
                ["style", "left", '331px'],
                ["style", "top", '41px']
            ],
            "${_blue_arrow1}": [
                ["style", "top", '-159px'],
                ["transform", "scaleX", '0.09'],
                ["transform", "scaleY", '0.09'],
                ["style", "left", '-612px']
            ],
            "${_Generator_leader}": [
                ["color", "background-color", 'rgba(0,0,0,1.00)'],
                ["style", "top", '159px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '-28deg'],
                ["style", "height", '40px'],
                ["color", "border-color", 'rgba(0,0,0,0.00)'],
                ["style", "left", '316px'],
                ["style", "width", '1px']
            ],
            "${_Reservoir_txt}": [
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "text-align", 'center'],
                ["style", "font-size", '18px']
            ],
            "${symbolSelector}": [
                ["style", "height", '399px'],
                ["style", "width", '554px']
            ],
            "${_blue_arrow2}": [
                ["style", "top", '-20px'],
                ["transform", "scaleX", '0.09'],
                ["transform", "scaleY", '0.09'],
                ["style", "left", '-59px']
            ],
            "${_Pwr_trans_cbl_txt}": [
                ["style", "left", '453px'],
                ["style", "top", '41px']
            ],
            "${_Turbine_txt}": [
                ["style", "top", '361px'],
                ["style", "left", '203px'],
                ["style", "text-align", 'right']
            ],
            "${_Transformer_leader}": [
                ["style", "top", '61px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '380px'],
                ["style", "height", '66px']
            ],
            "${_Sldng_gate_txt}": [
                ["style", "top", '0px'],
                ["style", "left", '109px'],
                ["style", "text-align", 'center']
            ],
            "${_Reservoir_leader}": [
                ["style", "height", '79px'],
                ["style", "top", '20px'],
                ["style", "left", '38px'],
                ["style", "-webkit-transform-origin", [50,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,0],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${_blue_arrow5}": [
                ["style", "top", '317px'],
                ["transform", "scaleX", '0.09'],
                ["transform", "scaleY", '0.09'],
                ["style", "left", '-197px']
            ],
            "${_blue_arrow3}": [
                ["style", "top", '108px'],
                ["transform", "scaleX", '0.09'],
                ["transform", "scaleY", '0.09'],
                ["style", "left", '-9px']
            ],
            "${_Turbine_leader}": [
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "top", '373px'],
                ["transform", "rotateZ", '231deg'],
                ["style", "height", '72px'],
                ["style", "right", 'auto'],
                ["style", "left", '267px'],
                ["style", "bottom", 'auto']
            ],
            "${_blue_arrow4}": [
                ["style", "top", '55px'],
                ["transform", "scaleX", '0.09'],
                ["transform", "scaleY", '0.09'],
                ["style", "left", '63px']
            ],
            "${_black_arrow1}": [
                ["style", "top", '225px'],
                ["transform", "scaleX", '0.09'],
                ["transform", "scaleY", '0.09'],
                ["style", "left", '69px']
            ],
            "${_Generator_txt}": [
                ["style", "top", '139px'],
                ["style", "left", '265px']
            ],
            "${_Sldng_gate_leader}": [
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '55deg'],
                ["style", "height", '59px'],
                ["transform", "scaleX", '1'],
                ["style", "left", '151px'],
                ["style", "top", '20px']
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
},
"static_electricity": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
                {
                    tf: [[0, 0], [], [], ['0.4', '0.4']],
                    r: ['975px', '301px', '47px', '47px', 'auto', 'auto'],
                    id: '_03_glowballCopy56',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.4', '0.4']],
                    r: ['974px', '314px', '47px', '47px', 'auto', 'auto'],
                    id: '_03_glowballCopy55',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.4', '0.4']],
                    r: ['975px', '319px', '47px', '47px', 'auto', 'auto'],
                    id: '_03_glowballCopy54',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.4', '0.4']],
                    r: ['926px', '280px', '47px', '47px', 'auto', 'auto'],
                    id: '_03_glowballCopy53',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.4', '0.4']],
                    r: ['933px', '298px', '47px', '47px', 'auto', 'auto'],
                    id: '_03_glowballCopy52',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.4', '0.4']],
                    r: ['930px', '315px', '47px', '47px', 'auto', 'auto'],
                    id: '_03_glowballCopy51',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.4', '0.4']],
                    r: ['901px', '279px', '47px', '47px', 'auto', 'auto'],
                    id: '_03_glowballCopy50',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.4', '0.4']],
                    r: ['895px', '302px', '47px', '47px', 'auto', 'auto'],
                    id: '_03_glowballCopy49',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.4', '0.4']],
                    r: ['900px', '312px', '47px', '47px', 'auto', 'auto'],
                    id: '_03_glowballCopy48',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.4', '0.4']],
                    r: ['822px', '267px', '47px', '47px', 'auto', 'auto'],
                    id: '_03_glowballCopy47',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.4', '0.4']],
                    r: ['825px', '272px', '47px', '47px', 'auto', 'auto'],
                    id: '_03_glowballCopy46',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.4', '0.4']],
                    r: ['821px', '280px', '47px', '47px', 'auto', 'auto'],
                    id: '_03_glowballCopy45',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.4', '0.4']],
                    r: ['794px', '262px', '47px', '47px', 'auto', 'auto'],
                    id: '_03_glowballCopy44',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.4', '0.4']],
                    r: ['790px', '269px', '47px', '47px', 'auto', 'auto'],
                    id: '_03_glowballCopy43',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                },
                {
                    tf: [[0, 0], [], [], ['0.4', '0.4']],
                    r: ['789px', '277px', '47px', '47px', 'auto', 'auto'],
                    id: '_03_glowballCopy42',
                    t: 'image',
                    f: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                }
            ],
            symbolInstances: [
            ]
        },
    states: {
        "Base State": {
            "${__03_glowballCopy53}": [
                ["style", "top", '280px'],
                ["transform", "scaleY", '0.23415'],
                ["transform", "scaleX", '0.23415'],
                ["style", "opacity", '0.87'],
                ["style", "left", '926px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__03_glowballCopy48}": [
                ["style", "top", '312px'],
                ["transform", "scaleY", '0.23415'],
                ["transform", "scaleX", '0.23415'],
                ["style", "opacity", '0.85'],
                ["style", "left", '900px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__03_glowballCopy44}": [
                ["style", "top", '262px'],
                ["transform", "scaleY", '0.35408'],
                ["transform", "scaleX", '0.35408'],
                ["style", "opacity", '0.84'],
                ["style", "left", '794px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__03_glowballCopy49}": [
                ["style", "top", '302px'],
                ["transform", "scaleY", '0.23415'],
                ["transform", "scaleX", '0.23415'],
                ["style", "opacity", '0.85'],
                ["style", "left", '895px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__03_glowballCopy54}": [
                ["style", "top", '319px'],
                ["transform", "scaleY", '0.11'],
                ["transform", "scaleX", '0.11'],
                ["style", "opacity", '0.85'],
                ["style", "left", '975px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__03_glowballCopy52}": [
                ["style", "top", '298px'],
                ["transform", "scaleY", '0.23415'],
                ["transform", "scaleX", '0.23415'],
                ["style", "opacity", '0.85'],
                ["style", "left", '933px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__03_glowballCopy46}": [
                ["style", "top", '272px'],
                ["transform", "scaleY", '0.35408'],
                ["transform", "scaleX", '0.35408'],
                ["style", "opacity", '0.85'],
                ["style", "left", '825px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__03_glowballCopy56}": [
                ["style", "top", '301px'],
                ["transform", "scaleY", '0.11'],
                ["transform", "scaleX", '0.11'],
                ["style", "opacity", '0.84'],
                ["style", "left", '975px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__03_glowballCopy50}": [
                ["style", "top", '279px'],
                ["transform", "scaleY", '0.23415'],
                ["transform", "scaleX", '0.21'],
                ["style", "opacity", '0.84'],
                ["style", "left", '901px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__03_glowballCopy45}": [
                ["style", "top", '280px'],
                ["transform", "scaleY", '0.35408'],
                ["transform", "scaleX", '0.35408'],
                ["style", "opacity", '0.85'],
                ["style", "left", '821px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__03_glowballCopy47}": [
                ["style", "top", '267px'],
                ["transform", "scaleY", '0.35408'],
                ["transform", "scaleX", '0.35408'],
                ["style", "opacity", '0.87'],
                ["style", "left", '822px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${symbolSelector}": [
                ["style", "height", '337px'],
                ["style", "width", '876px']
            ],
            "${__03_glowballCopy51}": [
                ["style", "top", '315px'],
                ["transform", "scaleY", '0.23415'],
                ["transform", "scaleX", '0.23415'],
                ["style", "opacity", '0.85'],
                ["style", "left", '930px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__03_glowballCopy42}": [
                ["style", "top", '277px'],
                ["transform", "scaleY", '0.35408'],
                ["transform", "scaleX", '0.35408'],
                ["style", "opacity", '0.85'],
                ["style", "left", '789px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__03_glowballCopy43}": [
                ["style", "top", '269px'],
                ["transform", "scaleY", '0.35408'],
                ["transform", "scaleX", '0.35408'],
                ["style", "opacity", '0.85'],
                ["style", "left", '790px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ],
            "${__03_glowballCopy55}": [
                ["style", "top", '314px'],
                ["transform", "scaleY", '0.11'],
                ["transform", "scaleX", '0.11'],
                ["style", "opacity", '0.85'],
                ["style", "left", '974px'],
                ["style", "-webkit-transform-origin", [50,50], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}]
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 0,
            autoPlay: false,
            labels: {
                "time0": 0
            },
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
})(jQuery, AdobeEdge, "EDGE-179879352");
