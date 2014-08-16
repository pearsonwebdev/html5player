/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};    fonts['Archivo Narrow']='<link href=\'../fonts/fonts.css\' rel=\'stylesheet\' type=\'text/css\'>';

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
    gpuAccelerate: true,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'starfield',
                display: 'block',
                type: 'image',
                rect: ['0px', '0px','640px','480px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"starfield.jpg",'0px','0px']
            },
            {
                id: 'EarthNot3D',
                display: 'block',
                type: 'image',
                rect: ['-6px', '-55px','622px','622px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"EarthNot3D.png",'0px','0px']
            },
            {
                id: 'EarthParent',
                display: 'block',
                type: 'image',
                rect: ['0', '0px','640px','480px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"EarthGlow.png",'0px','0px']
            },
            {
                id: 'HeatParent',
                type: 'group',
                rect: ['0', '0','640','480','auto', 'auto'],
                c: [
                {
                    id: 'HeatMap',
                    type: 'image',
                    rect: ['0', '0','640px','480px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"HeatMap.jpg",'0px','0px']
                },
                {
                    id: 'HeatMapLegend',
                    type: 'image',
                    rect: ['373px', '428px','250px','34px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"HeatMapLegend.svg",'0px','0px']
                },
                {
                    id: 'DottedLineParent',
                    type: 'group',
                    rect: ['1', '56','555','400','auto', 'auto'],
                    c: [
                    {
                        id: 'GulfDottedLine',
                        type: 'image',
                        rect: ['96px', '1px','555px','400px','auto', 'auto'],
                        clip: ['rect(0px 555px 400px 0px)'],
                        fill: ["rgba(0,0,0,0)",im+"GulfDottedLine.svg",'0px','0px'],
                        transform: [[],['36']]
                    }]
                },
                {
                    id: 'GulfStreamCallout',
                    type: 'image',
                    rect: ['200px', '227px','109px','74px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"GulfStreamCallout.svg",'0px','0px']
                },
                {
                    id: 'Florida',
                    type: 'image',
                    rect: ['59px', '335','56px','47px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"Florida.svg",'0px','0px']
                },
                {
                    id: 'TextNorthAtlanticOcean',
                    type: 'text',
                    rect: ['363px', '285px','222px','64px','auto', 'auto'],
                    text: "North Atlantic<br>Ocean",
                    align: "center",
                    font: ['\'Archivo Narrow\'', 28, "rgba(255,255,255,1)", "normal", "none", "normal"],
                    textShadow: ["rgba(0,0,0,0.80)", 2, 2, 2]
                },
                {
                    id: 'TextNorthAmerica',
                    type: 'text',
                    rect: ['34px', '144','auto','auto','auto', 'auto'],
                    text: "North<br>America",
                    align: "center",
                    font: ['\'Archivo Narrow\'', 28, "rgba(255,255,255,1)", "normal", "none", "normal"],
                    textShadow: ["rgba(0,0,0,0.80)", 2, 2, 2]
                }]
            },
            {
                id: 'MapParent',
                type: 'group',
                rect: ['-1px', '2px','640px','480px','auto', 'auto'],
                c: [
                {
                    id: 'NormalMap',
                    type: 'image',
                    rect: ['-4px', '-4px','645px','484px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"NormalMap.png",'0px','0px']
                },
                {
                    id: 'MapDetails',
                    type: 'image',
                    rect: ['-320px', '-242px','1280px','960px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"MapDetails.svg",'0px','0px'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'MapScale',
                    type: 'image',
                    rect: ['27px', '34px','164px','46px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"MapScale.svg",'0px','0px']
                },
                {
                    id: 'WarmLabel',
                    type: 'image',
                    rect: ['144px', '152px','156px','222px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"WarmLabel.svg",'0px','0px'],
                    transform: [[],['10'],[],['0.5','0.5']]
                },
                {
                    id: 'ColdWaterShape',
                    type: 'image',
                    rect: ['163px', '-5px','400px','214px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"ColdWaterShape.png",'0px','0px']
                },
                {
                    id: 'TextColdWaterLabel',
                    type: 'text',
                    rect: ['226px', '93px','auto','auto','auto', 'auto'],
                    opacity: 0.74835205078125,
                    text: "Cold water",
                    font: ['Archivo Narrow', 20, "rgba(12,45,83,1.00)", "normal", "none", ""],
                    transform: [[],['-39']]
                },
                {
                    id: 'WarmWaterFlow',
                    type: 'image',
                    rect: ['-3px', '52px','545px','428px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"WarmWaterFlow.svg",'0px','0px']
                },
                {
                    id: 'FlowWideParent',
                    display: 'none',
                    type: 'rect',
                    rect: ['-3px', '0px','640px','480px','auto', 'auto'],
                    fill: ["rgba(192,192,192,0.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"]
                },
                {
                    id: 'FlowWideParentiOS',
                    display: 'none',
                    type: 'rect',
                    rect: ['-3px', 'auto','320px','240px','auto', '0px'],
                    fill: ["rgba(192,192,192,0.00)"],
                    stroke: [0,"rgba(0,0,0,1)","none"],
                    transform: [[],[],[],['2','2']]
                },
                {
                    id: 'WarmWaterFlowWithEddiesCopy',
                    type: 'image',
                    rect: ['-285px', '-169px','1106px','869px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"WarmWaterFlowWithEddies.svg",'0px','0px'],
                    transform: [[],[],[],['0.49','0.49']]
                },
                {
                    id: 'WarmCore',
                    type: 'image',
                    rect: ['376px', '87px','20px','19px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"WarmCore.svg",'0px','0px']
                },
                {
                    id: 'ColdCores',
                    type: 'image',
                    rect: ['333px', '111px','127px','102px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"ColdCores.svg",'0px','0px']
                },
                {
                    id: 'ZoomRectangle',
                    type: 'rect',
                    rect: ['auto', '50px','246px','187px','134px', 'auto'],
                    fill: ["rgba(192,192,192,0.00)"],
                    stroke: [2,"rgba(217,2,2,1.00)","solid"]
                },
                {
                    id: 'CapeHatteras',
                    type: 'image',
                    rect: ['73px', '118px','230px','100px','auto', 'auto'],
                    fill: ["rgba(0,0,0,0)",im+"CapeHatteras.svg",'0px','0px'],
                    transform: [[],[],[],['0.5','0.5']]
                },
                {
                    id: 'CircleEddie',
                    type: 'ellipse',
                    rect: ['354px', '148px','54px','54px','auto', 'auto'],
                    borderRadius: ["50%", "50%", "50%", "50%"],
                    fill: ["rgba(192,192,192,0.00)"],
                    stroke: [2,"rgba(0,91,251,1.00)","solid"]
                }]
            },
            {
                id: 'BlackArrowsWithEddies',
                type: 'image',
                rect: ['-475px', '-83px','560px','532px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"BlackArrowsWithEddies.svg",'0px','0px']
            },
            {
                id: 'ColdCoreCallout',
                type: 'image',
                rect: ['319px', '202px','177px','184px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ColdCoreCallout.svg",'0px','0px'],
                boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0)"],
                transform: [[],[],[],['0.49','0.49']]
            },
            {
                id: 'WarmCoreCallout',
                type: 'image',
                rect: ['353px', '22px','195px','111px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"WarmCoreCallout.svg",'0px','0px'],
                transform: [[],[],[],['0.49','0.49']]
            },
            {
                id: 'FlowCloseUpParent',
                display: 'block',
                type: 'rect',
                rect: ['-1px', '0px','640px','480px','auto', 'auto'],
                fill: ["rgba(98,164,194,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'FlowCloseUpParentiOS',
                display: 'block',
                type: 'rect',
                rect: ['-1px', '0px','320px','240px','auto', 'auto'],
                fill: ["rgba(98,164,194,0.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"],
                transform: [[],[],[],['2','2']]
            },
            {
                id: 'FlowCloseUpOverlay',
                display: 'block',
                type: 'image',
                rect: ['-1px', '0px','640px','480px','auto', 'auto'],
                fill: ["rgba(98,164,194,0.00)",im+"grad-overlay.png",'0px','0px']
            },
            {
                id: 'TextWarmWater',
                type: 'text',
                rect: ['420px', '309px','auto','auto','auto', 'auto'],
                text: "Warm water",
                font: ['Archivo Narrow', 32, "rgba(206,60,0,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextColdWater',
                type: 'text',
                rect: ['79px', '117px','auto','auto','auto', 'auto'],
                text: "Cold water",
                font: ['Archivo Narrow', 32, "rgba(29,87,136,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextAVHRR',
                type: 'text',
                rect: ['322px', '349px','309px','113px','auto', 'auto'],
                text: "Advanced Very High Resolution Radiometer (AVHRR)",
                userClass: "text-with-bkg",
                font: ['Archivo Narrow', 32, "rgba(255,255,255,1.00)", "normal", "none", ""],
                textShadow: ["rgba(0,0,0,1.00)", 1, 2, 8]
            },
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['0px', '0px','640px','480px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgb(0, 0, 0)","none"]
            },
            {
                id: 'TextGulfStream',
                type: 'text',
                rect: ['161px', '329px','445px','82px','auto', 'auto'],
                text: "The Gulf Stream",
                align: "left",
                userClass: "text-with-bkg",
                font: ['Archivo Narrow', 64, "rgba(255,255,255,1.00)", "normal", "none", ""]
            },
            {
                id: 'Title3DOpacityHelper',
                type: 'rect',
                rect: ['-117px', '275px','78px','50px','auto', 'auto'],
                fill: ["rgba(192,192,192,1)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'TextMeanders',
                type: 'text',
                rect: ['338', '358','302px','62px','auto', 'auto'],
                text: "Meanders",
                userClass: "text-with-bkg",
                font: ['Archivo Narrow', 46, "rgba(255,255,255,1.00)", "normal", "none", ""]
            },
            {
                id: 'TextEddies',
                type: 'text',
                rect: ['338', '358','302px','62px','auto', 'auto'],
                text: "Eddies",
                userClass: "text-with-bkg",
                font: ['Archivo Narrow', 46, "rgba(255,255,255,1.00)", "normal", "none", ""]
            },
            {
                id: 'FadeIn',
                type: 'rect',
                rect: ['0px', '0px','640px','480px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Rectangle2',
                type: 'rect',
                rect: ['0px', '0px','640px','480px','auto', 'auto'],
                fill: ["rgba(255,255,255,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Earth3DRotationHelper',
                type: 'rect',
                rect: ['-115px', '-60px','60px','60px','auto', 'auto'],
                fill: ["rgba(86,86,86,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"],
                transform: [[],['-60']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_ColdCores}": [
                ["style", "top", '111px'],
                ["style", "opacity", '0'],
                ["style", "left", '333px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_TextColdWaterLabel}": [
                ["style", "top", '93px'],
                ["style", "letter-spacing", '2px'],
                ["style", "font-family", 'Archivo Narrow'],
                ["transform", "rotateZ", '-39deg'],
                ["color", "color", 'rgba(12,45,83,1.00)'],
                ["style", "opacity", '0.74835205078125'],
                ["style", "left", '226px'],
                ["style", "font-size", '20px']
            ],
            "${_TextMeanders}": [
                ["style", "top", '362px'],
                ["style", "width", '302px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "font-family", 'Archivo Narrow'],
                ["style", "height", '62px'],
                ["style", "opacity", '1'],
                ["style", "left", '652px'],
                ["style", "font-size", '46px']
            ],
            "${_CapeHatteras}": [
                ["style", "top", '118px'],
                ["transform", "scaleX", '0.5'],
                ["transform", "scaleY", '0.5'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '100px'],
                ["style", "opacity", '0'],
                ["style", "left", '73px'],
                ["style", "width", '230px']
            ],
            "${_WarmWaterFlowWithEddiesCopy}": [
                ["style", "top", '-169px'],
                ["transform", "scaleX", '0.49'],
                ["transform", "scaleY", '0.49'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '869px'],
                ["style", "opacity", '0'],
                ["style", "left", '-285px'],
                ["style", "width", '1106px']
            ],
            "${_ColdCoreCallout}": [
                ["style", "top", '202px'],
                ["style", "height", '184px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '319px'],
                ["style", "width", '177px']
            ],
            "${_GulfStreamCallout}": [
                ["style", "top", '228px'],
                ["style", "opacity", '0'],
                ["style", "left", '202px']
            ],
            "${_Florida}": [
                ["style", "left", '59px'],
                ["style", "opacity", '0']
            ],
            "${_BlackArrowsWithEddies}": [
                ["style", "top", '125px'],
                ["style", "height", '532px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '5px'],
                ["style", "width", '560px']
            ],
            "${_TextAVHRR}": [
                ["subproperty", "textShadow.blur", '8px'],
                ["subproperty", "textShadow.offsetH", '1px'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["subproperty", "textShadow.offsetV", '2px'],
                ["style", "left", '641px'],
                ["style", "width", '309px'],
                ["style", "top", '349px'],
                ["style", "font-size", '32px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,1.00)'],
                ["style", "height", '113px'],
                ["style", "font-family", 'Archivo Narrow'],
                ["style", "line-height", '34px'],
                ["style", "opacity", '0.36920166015625']
            ],
            "${_ColdWaterShape}": [
                ["style", "top", '-5px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '214px'],
                ["style", "opacity", '0'],
                ["style", "left", '163px'],
                ["style", "width", '400px']
            ],
            "${_MapScale}": [
                ["style", "top", '34px'],
                ["style", "opacity", '1'],
                ["style", "left", '27px']
            ],
            "${_ZoomRectangle}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "rotateZ", '0deg'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '246px'],
                ["style", "top", '50px'],
                ["style", "left", 'auto'],
                ["style", "height", '187px'],
                ["color", "border-color", 'rgba(217,2,2,1.00)'],
                ["style", "opacity", '0'],
                ["style", "right", '134px']
            ],
            "${_TextEddies}": [
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '1'],
                ["style", "left", '652px'],
                ["style", "width", '302px'],
                ["style", "top", '362px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '62px'],
                ["style", "font-family", 'Archivo Narrow'],
                ["transform", "scaleX", '1'],
                ["style", "font-size", '46px']
            ],
            "${_CircleEddie}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "rotateZ", '0deg'],
                ["style", "border-style", 'solid'],
                ["style", "border-width", '2px'],
                ["style", "width", '54px'],
                ["style", "top", '148px'],
                ["style", "height", '54px'],
                ["color", "border-color", 'rgba(0,91,251,1.00)'],
                ["style", "left", '354px'],
                ["style", "opacity", '0']
            ],
            "${_FlowWideParentiOS}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '2'],
                ["style", "opacity", '1'],
                ["style", "left", '-3px'],
                ["style", "width", '320px'],
                ["style", "top", 'auto'],
                ["transform", "scaleY", '2'],
                ["style", "height", '240px'],
                ["style", "-webkit-transform-origin", [0,100], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "bottom", '0px'],
                ["style", "display", 'none']
            ],
            "${_Rectangle2}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '480px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '640px']
            ],
            "${_TextNorthAtlanticOcean}": [
                ["style", "line-height", '28px'],
                ["subproperty", "textShadow.offsetH", '1px'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "left", '443px'],
                ["style", "font-size", '28px'],
                ["style", "top", '186px'],
                ["style", "text-align", 'center'],
                ["subproperty", "textShadow.blur", '6px'],
                ["style", "height", '68px'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,1.00)'],
                ["style", "opacity", '0'],
                ["style", "width", '188px']
            ],
            "${_FlowCloseUpParentiOS}": [
                ["style", "-webkit-transform-origin", [0,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [0,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "scaleX", '2'],
                ["style", "opacity", '0'],
                ["style", "left", '-1px'],
                ["style", "width", '320px'],
                ["transform", "scaleY", '2'],
                ["style", "height", '240px'],
                ["color", "background-color", 'rgba(98,164,194,0.00)'],
                ["style", "display", 'block']
            ],
            "${_EarthParent}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["transform", "scaleY", '2.18'],
                ["transform", "rotateZ", '1deg'],
                ["transform", "scaleX", '2.18'],
                ["style", "height", '480px'],
                ["style", "left", '0px'],
                ["style", "width", '640px']
            ],
            "${_NormalMap}": [
                ["style", "top", '-4px'],
                ["style", "bottom", 'auto'],
                ["style", "height", '484px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "left", '-4px'],
                ["style", "width", '645px']
            ],
            "${_Title3DOpacityHelper}": [
                ["style", "opacity", '0']
            ],
            "${_Earth3DRotationHelper}": [
                ["style", "top", '181px'],
                ["style", "overflow", 'visible'],
                ["transform", "rotateZ", '-150deg'],
                ["style", "height", '60px'],
                ["color", "background-color", 'rgba(86,86,86,1.00)'],
                ["style", "left", '-115px'],
                ["style", "width", '60px']
            ],
            "${_EarthNot3D}": [
                ["style", "top", '-55px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '1deg'],
                ["transform", "scaleX", '1'],
                ["style", "-webkit-transform-origin", [60,41], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [60,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [60,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [60,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [60,41],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "left", '-6px'],
                ["style", "display", 'block']
            ],
            "${_HeatMap}": [
                ["style", "height", '480px'],
                ["style", "width", '640px']
            ],
            "${_TextWarmWater}": [
                ["style", "top", '309px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(206,60,0,1.00)'],
                ["style", "font-family", 'Archivo Narrow'],
                ["style", "left", '420px'],
                ["style", "font-size", '32px']
            ],
            "${_MapParent}": [
                ["style", "-webkit-transform-origin", [63,0], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [63,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [63,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [63,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [63,0],{valueTemplate:'@@0@@% @@1@@%'}],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '-1px'],
                ["style", "width", '640px'],
                ["style", "top", '2px'],
                ["transform", "scaleY", '1'],
                ["style", "height", '480px']
            ],
            "${_WarmWaterFlow}": [
                ["style", "top", '52px'],
                ["style", "bottom", 'auto'],
                ["transform", "rotateZ", '0deg'],
                ["style", "opacity", '0'],
                ["style", "left", '-3px'],
                ["style", "overflow", 'visible']
            ],
            "${_WarmCoreCallout}": [
                ["style", "top", '22px'],
                ["style", "height", '111px'],
                ["transform", "scaleY", '1'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["style", "left", '353px'],
                ["style", "width", '195px']
            ],
            "${_FlowWideParent}": [
                ["color", "background-color", 'rgba(192,192,192,0.00)'],
                ["style", "top", '0px'],
                ["style", "height", '480px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "display", 'none'],
                ["style", "opacity", '1'],
                ["style", "left", '-3px'],
                ["style", "width", '640px']
            ],
            "${_TextNorthAmerica}": [
                ["style", "line-height", '28px'],
                ["subproperty", "textShadow.offsetH", '1px'],
                ["subproperty", "textShadow.offsetV", '1px'],
                ["style", "left", '34px'],
                ["style", "font-size", '28px'],
                ["style", "top", '144px'],
                ["style", "text-align", 'center'],
                ["subproperty", "textShadow.color", 'rgba(0,0,0,1.00)'],
                ["subproperty", "textShadow.blur", '6px'],
                ["style", "opacity", '0']
            ],
            "${_FlowCloseUpParent}": [
                ["style", "display", 'block'],
                ["style", "opacity", '0'],
                ["style", "left", '-1px'],
                ["color", "background-color", 'rgba(98,164,194,0.00)']
            ],
            "${_TextGulfStream}": [
                ["transform", "rotateZ", '0deg'],
                ["color", "color", 'rgba(255,255,255,1.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '161px'],
                ["style", "font-size", '64px'],
                ["style", "top", '335px'],
                ["transform", "scaleX", '1'],
                ["style", "text-align", 'left'],
                ["transform", "skewX", '0deg'],
                ["style", "height", '86px'],
                ["style", "font-family", 'Archivo Narrow'],
                ["transform", "scaleY", '1'],
                ["style", "width", '463px']
            ],
            "${_TextColdWater}": [
                ["style", "top", '117px'],
                ["style", "opacity", '0'],
                ["color", "color", 'rgba(29,87,136,1.00)'],
                ["style", "font-family", 'Archivo Narrow'],
                ["style", "left", '79px'],
                ["style", "font-size", '32px']
            ],
            "${_MapDetails}": [
                ["style", "top", '-242px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "rotateZ", '0deg'],
                ["transform", "scaleX", '0.5'],
                ["style", "height", '960px'],
                ["style", "left", '-320px'],
                ["style", "width", '1280px']
            ],
            "${_HeatParent}": [
                ["style", "-webkit-transform-origin", [64,7], {valueTemplate:'@@0@@% @@1@@%'} ],
                ["style", "-moz-transform-origin", [64,7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-ms-transform-origin", [64,7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "msTransformOrigin", [64,7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "-o-transform-origin", [64,7],{valueTemplate:'@@0@@% @@1@@%'}],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1'],
                ["transform", "scaleX", '1']
            ],
            "${_FlowCloseUpOverlay}": [
                ["color", "background-color", 'rgba(98,164,194,0.00)'],
                ["style", "opacity", '0'],
                ["style", "left", '-1px'],
                ["style", "display", 'block']
            ],
            "${_starfield}": [
                ["style", "top", '0px'],
                ["style", "display", 'block'],
                ["style", "height", '480px'],
                ["style", "left", '0px'],
                ["style", "width", '640px']
            ],
            "${_FadeIn}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px'],
                ["style", "height", '480px']
            ],
            "${_HeatMapLegend}": [
                ["style", "top", '428px'],
                ["style", "opacity", '0'],
                ["style", "left", '373px']
            ],
            "${_WarmLabel}": [
                ["style", "top", '152px'],
                ["transform", "scaleY", '0.5'],
                ["transform", "rotateZ", '10deg'],
                ["transform", "scaleX", '0.5'],
                ["style", "height", '222px'],
                ["style", "left", '144px'],
                ["style", "width", '156px']
            ],
            "${_WarmCore}": [
                ["style", "top", '87px'],
                ["style", "opacity", '0'],
                ["style", "left", '376px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '640px'],
                ["style", "height", '480px'],
                ["style", "overflow", 'hidden']
            ],
            "${_GulfDottedLine}": [
                ["style", "top", '1px'],
                ["transform", "rotateZ", '36deg'],
                ["style", "opacity", '1'],
                ["style", "clip", [0,555,400,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '96px']
            ],
            "${_Rectangle}": [
                ["style", "top", '0px'],
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "height", '480px'],
                ["style", "opacity", '0'],
                ["style", "left", '0px'],
                ["style", "width", '640px']
            ],
            "${_DottedLineParent}": [
                ["style", "top", '57px'],
                ["transform", "rotateZ", '-36deg'],
                ["style", "clip", [0,26.78359603881836,400,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "left", '-95px'],
                ["style", "width", '749px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 140803,
            autoPlay: false,
            labels: {
                "Fade In": 995
            },
            timeline: [
                { id: "eid65", tween: [ "style", "${_TextGulfStream}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 500 },
                { id: "eid66", tween: [ "style", "${_TextGulfStream}", "opacity", '0', { fromValue: '1'}], position: 11500, duration: 500 },
                { id: "eid987", tween: [ "style", "${_EarthParent}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0, easing: "easeOutQuad" },
                { id: "eid988", tween: [ "style", "${_EarthParent}", "display", 'block', { fromValue: 'none'}], position: 125000, duration: 0, easing: "easeOutQuad" },
                { id: "eid435", tween: [ "style", "${_BlackArrowsWithEddies}", "opacity", '1', { fromValue: '0'}], position: 77930, duration: 228 },
                { id: "eid923", tween: [ "style", "${_BlackArrowsWithEddies}", "opacity", '0', { fromValue: '1'}], position: 91340, duration: 500 },
                { id: "eid884", tween: [ "transform", "${_WarmCoreCallout}", "scaleY", '1', { fromValue: '1'}], position: 91340, duration: 0 },
                { id: "eid491", tween: [ "style", "${_ColdWaterShape}", "opacity", '1', { fromValue: '0'}], position: 71897, duration: 100 },
                { id: "eid410", tween: [ "style", "${_DottedLineParent}", "clip", [0,749,400,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,26.78359603881836,400,0]}], position: 35357, duration: 12206, easing: "easeOutSine" },
                { id: "eid840", tween: [ "style", "${_EarthParent}", "left", '-93px', { fromValue: '0px'}], position: 11500, duration: 5393, easing: "easeInQuint" },
                { id: "eid868", tween: [ "style", "${_EarthParent}", "left", '0px', { fromValue: '-93px'}], position: 125000, duration: 0, easing: "easeInQuint" },
                { id: "eid75", tween: [ "style", "${_TextMeanders}", "opacity", '0', { fromValue: '1'}], position: 66250, duration: 500, easing: "easeOutCirc" },
                { id: "eid212", tween: [ "style", "${_GulfStreamCallout}", "opacity", '1', { fromValue: '0'}], position: 38500, duration: 500 },
                { id: "eid341", tween: [ "style", "${_GulfStreamCallout}", "opacity", '0', { fromValue: '1'}], position: 117414, duration: 0 },
                { id: "eid897", tween: [ "style", "${_BlackArrowsWithEddies}", "left", '5px', { fromValue: '5px'}], position: 80498, duration: 0 },
                { id: "eid210", tween: [ "style", "${_CapeHatteras}", "opacity", '1', { fromValue: '0'}], position: 47563, duration: 500 },
                { id: "eid604", tween: [ "style", "${_CapeHatteras}", "opacity", '0', { fromValue: '1'}], position: 53000, duration: 371 },
                { id: "eid606", tween: [ "style", "${_CapeHatteras}", "opacity", '0', { fromValue: '0'}], position: 115750, duration: 0 },
                { id: "eid993", tween: [ "style", "${_FlowCloseUpParent}", "display", 'none', { fromValue: 'block'}], position: 10, duration: 0 },
                { id: "eid995", tween: [ "style", "${_FlowCloseUpParent}", "display", 'block', { fromValue: 'none'}], position: 94009, duration: 0 },
                { id: "eid997", tween: [ "style", "${_FlowCloseUpParent}", "display", 'none', { fromValue: 'block'}], position: 116669, duration: 0 },
                { id: "eid1233", tween: [ "style", "${_MapParent}", "top", '-122px', { fromValue: '2px'}], position: 94292, duration: 2090, easing: "easeInOutQuad" },
                { id: "eid1242", tween: [ "style", "${_MapParent}", "top", '2px', { fromValue: '-122px'}], position: 97382, duration: 0, easing: "easeInOutQuad" },
                { id: "eid239", tween: [ "transform", "${_EarthNot3D}", "rotateZ", '1deg', { fromValue: '1deg'}], position: 14000, duration: 0 },
                { id: "eid77", tween: [ "style", "${_TextEddies}", "opacity", '0', { fromValue: '1'}], position: 80498, duration: 500, easing: "easeOutCirc" },
                { id: "eid707", tween: [ "style", "${_MapScale}", "opacity", '0', { fromValue: '1'}], position: 70000, duration: 931 },
                { id: "eid774", tween: [ "style", "${_MapScale}", "opacity", '1', { fromValue: '0'}], position: 115750, duration: 0 },
                { id: "eid779", tween: [ "transform", "${_EarthParent}", "scaleX", '0.93', { fromValue: '2.18'}], position: 995, duration: 9005, easing: "easeOutCirc" },
                { id: "eid780", tween: [ "transform", "${_EarthParent}", "scaleX", '2', { fromValue: '0.93'}], position: 11500, duration: 5393, easing: "easeInQuad" },
                { id: "eid781", tween: [ "transform", "${_EarthParent}", "scaleX", '0.77', { fromValue: '2'}], position: 126500, duration: 14303 },
                { id: "eid1000", tween: [ "style", "${_FlowWideParent}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1002", tween: [ "style", "${_FlowWideParent}", "display", 'block', { fromValue: 'none'}], position: 47563, duration: 0 },
                { id: "eid1004", tween: [ "style", "${_FlowWideParent}", "display", 'none', { fromValue: 'block'}], position: 71997, duration: 0 },
                { id: "eid1238", tween: [ "style", "${_MapParent}", "left", '-29px', { fromValue: '-1px'}], position: 94292, duration: 2090, easing: "easeInOutQuad" },
                { id: "eid1241", tween: [ "style", "${_MapParent}", "left", '-1px', { fromValue: '-29px'}], position: 97382, duration: 0, easing: "easeInOutQuad" },
                { id: "eid1176", tween: [ "style", "${_starfield}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
                { id: "eid1177", tween: [ "style", "${_starfield}", "display", 'block', { fromValue: 'none'}], position: 125000, duration: 0 },
                { id: "eid14", tween: [ "style", "${_MapParent}", "opacity", '1', { fromValue: '0'}], position: 47563, duration: 981, easing: "easeInOutQuad" },
                { id: "eid21", tween: [ "style", "${_MapParent}", "opacity", '0', { fromValue: '1'}], position: 96382, duration: 1000, easing: "easeInOutQuad" },
                { id: "eid327", tween: [ "style", "${_MapParent}", "opacity", '1', { fromValue: '0'}], position: 115750, duration: 419, easing: "easeInOutQuad" },
                { id: "eid339", tween: [ "style", "${_MapParent}", "opacity", '0', { fromValue: '1'}], position: 121500, duration: 806, easing: "easeInOutQuad" },
                { id: "eid499", tween: [ "transform", "${_MapParent}", "scaleX", '1.4', { fromValue: '1'}], position: 69593, duration: 1157, easing: "easeInOutQuad" },
                { id: "eid50", tween: [ "transform", "${_MapParent}", "scaleX", '2.49', { fromValue: '1.4'}], position: 94292, duration: 2090, easing: "easeOutQuad" },
                { id: "eid328", tween: [ "transform", "${_MapParent}", "scaleX", '1', { fromValue: '2.49'}], position: 115750, duration: 0, easing: "easeOutCirc" },
                { id: "eid883", tween: [ "transform", "${_WarmCoreCallout}", "scaleX", '1', { fromValue: '1'}], position: 91340, duration: 0 },
                { id: "eid149", tween: [ "style", "${_TextGulfStream}", "height", '86px', { fromValue: '86px'}], position: 7250, duration: 0 },
                { id: "eid501", tween: [ "transform", "${_MapParent}", "scaleY", '1.4', { fromValue: '1'}], position: 69593, duration: 1157, easing: "easeInOutQuad" },
                { id: "eid51", tween: [ "transform", "${_MapParent}", "scaleY", '2.49', { fromValue: '1.4'}], position: 94292, duration: 2090, easing: "easeOutQuad" },
                { id: "eid329", tween: [ "transform", "${_MapParent}", "scaleY", '1', { fromValue: '2.49'}], position: 115750, duration: 0, easing: "easeOutCirc" },
                { id: "eid497", tween: [ "style", "${_Rectangle2}", "opacity", '1', { fromValue: '0'}], position: 71643, duration: 254 },
                { id: "eid498", tween: [ "style", "${_Rectangle2}", "opacity", '0', { fromValue: '1'}], position: 71897, duration: 250 },
                { id: "eid42", tween: [ "style", "${_FlowCloseUpParent}", "opacity", '1', { fromValue: '0'}], position: 95382, duration: 1000 },
                { id: "eid61", tween: [ "style", "${_FlowCloseUpParent}", "opacity", '0', { fromValue: '1'}], position: 116169, duration: 500 },
                { id: "eid594", tween: [ "style", "${_TextColdWater}", "opacity", '1', { fromValue: '0'}], position: 95382, duration: 1000 },
                { id: "eid595", tween: [ "style", "${_TextColdWater}", "opacity", '0', { fromValue: '1'}], position: 116169, duration: 500 },
                { id: "eid1245", tween: [ "style", "${_Title3DOpacityHelper}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 500 },
                { id: "eid1246", tween: [ "style", "${_Title3DOpacityHelper}", "opacity", '0', { fromValue: '1'}], position: 11500, duration: 500 },
                { id: "eid849", tween: [ "style", "${_EarthParent}", "top", '53px', { fromValue: '0px'}], position: 11500, duration: 5393, easing: "easeInQuad" },
                { id: "eid869", tween: [ "style", "${_EarthParent}", "top", '0px', { fromValue: '53px'}], position: 125000, duration: 0, easing: "easeInQuint" },
                { id: "eid999", tween: [ "style", "${_FlowWideParentiOS}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid1001", tween: [ "style", "${_FlowWideParentiOS}", "display", 'block', { fromValue: 'none'}], position: 47563, duration: 0 },
                { id: "eid1003", tween: [ "style", "${_FlowWideParentiOS}", "display", 'none', { fromValue: 'block'}], position: 71997, duration: 0 },
                { id: "eid44", tween: [ "style", "${_TextAVHRR}", "opacity", '0.9727783203125', { fromValue: '0.36920166015625'}], position: 19000, duration: 500 },
                { id: "eid45", tween: [ "style", "${_TextAVHRR}", "opacity", '0', { fromValue: '0.9727783203125'}], position: 24250, duration: 500 },
                { id: "eid72", tween: [ "style", "${_TextMeanders}", "left", '338px', { fromValue: '652px'}], position: 60750, duration: 522, easing: "easeOutCirc" },
                { id: "eid47", tween: [ "style", "${_ZoomRectangle}", "opacity", '1', { fromValue: '0'}], position: 93000, duration: 260 },
                { id: "eid48", tween: [ "style", "${_ZoomRectangle}", "opacity", '0', { fromValue: '1'}], position: 93260, duration: 339 },
                { id: "eid49", tween: [ "style", "${_ZoomRectangle}", "opacity", '1', { fromValue: '0.000000'}], position: 93600, duration: 409 },
                { id: "eid331", tween: [ "style", "${_ZoomRectangle}", "opacity", '0', { fromValue: '1'}], position: 115750, duration: 0 },
                { id: "eid366", tween: [ "style", "${_GulfDottedLine}", "opacity", '1', { fromValue: '1'}], position: 27846, duration: 0 },
                { id: "eid342", tween: [ "style", "${_GulfDottedLine}", "opacity", '0', { fromValue: '1'}], position: 118916, duration: 0 },
                { id: "eid592", tween: [ "style", "${_TextWarmWater}", "opacity", '1', { fromValue: '0'}], position: 95382, duration: 1000 },
                { id: "eid593", tween: [ "style", "${_TextWarmWater}", "opacity", '0', { fromValue: '1'}], position: 116169, duration: 500 },
                { id: "eid933", tween: [ "style", "${_FlowCloseUpParentiOS}", "opacity", '1', { fromValue: '0'}], position: 95382, duration: 1000 },
                { id: "eid934", tween: [ "style", "${_FlowCloseUpParentiOS}", "opacity", '0', { fromValue: '1'}], position: 116169, duration: 500 },
                { id: "eid218", tween: [ "style", "${_TextNorthAtlanticOcean}", "opacity", '0.96124231815338', { fromValue: '0'}], position: 25410, duration: 500 },
                { id: "eid344", tween: [ "style", "${_TextNorthAtlanticOcean}", "opacity", '0', { fromValue: '0.96124231815338'}], position: 118916, duration: 0 },
                { id: "eid882", tween: [ "transform", "${_ColdCoreCallout}", "scaleY", '1', { fromValue: '1'}], position: 91340, duration: 0 },
                { id: "eid63", tween: [ "style", "${_Rectangle}", "opacity", '1', { fromValue: '0'}], position: 138000, duration: 1000 },
                { id: "eid39", tween: [ "style", "${_WarmCoreCallout}", "opacity", '1', { fromValue: '0'}], position: 87000, duration: 500 },
                { id: "eid53", tween: [ "style", "${_WarmCoreCallout}", "opacity", '0', { fromValue: '1'}], position: 91340, duration: 500 },
                { id: "eid1188", tween: [ "style", "${_FlowCloseUpOverlay}", "display", 'none', { fromValue: 'block'}], position: 10, duration: 0 },
                { id: "eid1189", tween: [ "style", "${_FlowCloseUpOverlay}", "display", 'block', { fromValue: 'none'}], position: 94009, duration: 0 },
                { id: "eid1190", tween: [ "style", "${_FlowCloseUpOverlay}", "display", 'none', { fromValue: 'block'}], position: 116669, duration: 0 },
                { id: "eid11", tween: [ "style", "${_HeatParent}", "opacity", '1', { fromValue: '0'}], position: 16250, duration: 643, easing: "easeInQuad" },
                { id: "eid12", tween: [ "style", "${_HeatParent}", "opacity", '0', { fromValue: '1'}], position: 49171, duration: 268 },
                { id: "eid55", tween: [ "style", "${_HeatParent}", "opacity", '1', { fromValue: '0.000000'}], position: 114331, duration: 500 },
                { id: "eid56", tween: [ "style", "${_HeatParent}", "opacity", '0', { fromValue: '1'}], position: 126750, duration: 1000 },
                { id: "eid67", tween: [ "style", "${_CircleEddie}", "opacity", '1', { fromValue: '0'}], position: 74250, duration: 260 },
                { id: "eid68", tween: [ "style", "${_CircleEddie}", "opacity", '0', { fromValue: '1'}], position: 74510, duration: 339 },
                { id: "eid69", tween: [ "style", "${_CircleEddie}", "opacity", '1', { fromValue: '0.000000'}], position: 74850, duration: 409 },
                { id: "eid70", tween: [ "style", "${_CircleEddie}", "opacity", '0', { fromValue: '1'}], position: 76950, duration: 761 },
                { id: "eid477", tween: [ "style", "${_FlowWideParent}", "opacity", '0', { fromValue: '1'}], position: 71897, duration: 100 },
                { id: "eid184", tween: [ "transform", "${_EarthNot3D}", "scaleX", '0.72', { fromValue: '1'}], position: 995, duration: 9005, easing: "easeOutCirc" },
                { id: "eid193", tween: [ "transform", "${_EarthNot3D}", "scaleX", '1.42', { fromValue: '0.72'}], position: 11500, duration: 5393, easing: "easeInQuad" },
                { id: "eid573", tween: [ "transform", "${_EarthNot3D}", "scaleX", '0.77', { fromValue: '1.42'}], position: 126500, duration: 14303 },
                { id: "eid881", tween: [ "transform", "${_ColdCoreCallout}", "scaleX", '1', { fromValue: '1'}], position: 91340, duration: 0 },
                { id: "eid214", tween: [ "style", "${_TextNorthAmerica}", "opacity", '0.96124231815338', { fromValue: '0'}], position: 25410, duration: 500 },
                { id: "eid343", tween: [ "style", "${_TextNorthAmerica}", "opacity", '0', { fromValue: '0.96124231815338'}], position: 118916, duration: 0 },
                { id: "eid994", tween: [ "style", "${_FlowCloseUpParentiOS}", "display", 'none', { fromValue: 'block'}], position: 10, duration: 0 },
                { id: "eid996", tween: [ "style", "${_FlowCloseUpParentiOS}", "display", 'block', { fromValue: 'none'}], position: 94009, duration: 0 },
                { id: "eid998", tween: [ "style", "${_FlowCloseUpParentiOS}", "display", 'none', { fromValue: 'block'}], position: 116669, duration: 0 },
                { id: "eid216", tween: [ "style", "${_Florida}", "opacity", '1', { fromValue: '0'}], position: 36250, duration: 500 },
                { id: "eid340", tween: [ "style", "${_Florida}", "opacity", '0', { fromValue: '1'}], position: 118916, duration: 0 },
                { id: "eid898", tween: [ "style", "${_BlackArrowsWithEddies}", "top", '125px', { fromValue: '125px'}], position: 80498, duration: 0 },
                { id: "eid852", tween: [ "style", "${_GulfStreamCallout}", "left", '202px', { fromValue: '202px'}], position: 42000, duration: 0 },
                { id: "eid928", tween: [ "style", "${_FlowWideParentiOS}", "opacity", '0', { fromValue: '1'}], position: 71897, duration: 100 },
                { id: "eid151", tween: [ "style", "${_TextGulfStream}", "width", '463px', { fromValue: '463px'}], position: 7250, duration: 0 },
                { id: "eid782", tween: [ "transform", "${_EarthParent}", "scaleY", '0.93', { fromValue: '2.18'}], position: 995, duration: 9005, easing: "easeOutCirc" },
                { id: "eid783", tween: [ "transform", "${_EarthParent}", "scaleY", '2', { fromValue: '0.93'}], position: 11500, duration: 5393, easing: "easeInQuad" },
                { id: "eid784", tween: [ "transform", "${_EarthParent}", "scaleY", '0.77', { fromValue: '2'}], position: 126500, duration: 14303 },
                { id: "eid274", tween: [ "style", "${_TextAVHRR}", "left", '322px', { fromValue: '641px'}], position: 19000, duration: 618, easing: "easeOutCirc" },
                { id: "eid850", tween: [ "style", "${_GulfStreamCallout}", "top", '228px', { fromValue: '228px'}], position: 42000, duration: 0 },
                { id: "eid35", tween: [ "style", "${_ColdCoreCallout}", "opacity", '1', { fromValue: '0'}], position: 84000, duration: 500 },
                { id: "eid54", tween: [ "style", "${_ColdCoreCallout}", "opacity", '0', { fromValue: '1'}], position: 91340, duration: 500 },
                { id: "eid185", tween: [ "transform", "${_EarthNot3D}", "scaleY", '0.72', { fromValue: '1'}], position: 995, duration: 9005, easing: "easeOutCirc" },
                { id: "eid194", tween: [ "transform", "${_EarthNot3D}", "scaleY", '1.42', { fromValue: '0.72'}], position: 11500, duration: 5393, easing: "easeInQuad" },
                { id: "eid574", tween: [ "transform", "${_EarthNot3D}", "scaleY", '0.77', { fromValue: '1.42'}], position: 126500, duration: 14303 },
                { id: "eid1115", tween: [ "transform", "${_Earth3DRotationHelper}", "rotateZ", '-65deg', { fromValue: '-150deg'}], position: 0, duration: 8000, easing: "easeOutSine" },
                { id: "eid1116", tween: [ "transform", "${_Earth3DRotationHelper}", "rotateZ", '-60deg', { fromValue: '-65deg'}], position: 8000, duration: 9000 },
                { id: "eid208", tween: [ "style", "${_HeatMapLegend}", "opacity", '1', { fromValue: '0'}], position: 25410, duration: 500 },
                { id: "eid345", tween: [ "style", "${_HeatMapLegend}", "opacity", '0', { fromValue: '1'}], position: 119098, duration: 0 },
                { id: "eid150", tween: [ "style", "${_TextGulfStream}", "top", '335px', { fromValue: '335px'}], position: 7250, duration: 0 },
                { id: "eid76", tween: [ "style", "${_TextEddies}", "left", '338px', { fromValue: '652px'}], position: 74750, duration: 522, easing: "easeOutCirc" },
                { id: "eid524", tween: [ "style", "${_WarmWaterFlowWithEddiesCopy}", "opacity", '1', { fromValue: '0'}], position: 71898, duration: 99 },
                { id: "eid1191", tween: [ "style", "${_FlowCloseUpOverlay}", "opacity", '1', { fromValue: '0'}], position: 95382, duration: 1000 },
                { id: "eid1192", tween: [ "style", "${_FlowCloseUpOverlay}", "opacity", '0', { fromValue: '1'}], position: 116169, duration: 500 },
                { id: "eid294", tween: [ "style", "${_ColdCores}", "opacity", '1', { fromValue: '0'}], position: 71898, duration: 99 },
                { id: "eid1178", tween: [ "style", "${_EarthNot3D}", "display", 'none', { fromValue: 'block'}], position: 17500, duration: 0 },
                { id: "eid1179", tween: [ "style", "${_EarthNot3D}", "display", 'block', { fromValue: 'none'}], position: 125000, duration: 0 },
                { id: "eid132", tween: [ "style", "${_FadeIn}", "opacity", '0', { fromValue: '1'}], position: 995, duration: 1255 },
                { id: "eid293", tween: [ "style", "${_WarmCore}", "opacity", '1', { fromValue: '0'}], position: 71898, duration: 99 },
                { id: "eid785", tween: [ "transform", "${_EarthParent}", "rotateZ", '1deg', { fromValue: '1deg'}], position: 14000, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-2305382");
