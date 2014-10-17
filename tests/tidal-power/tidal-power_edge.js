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
                            id: 'background_layer',
                            type: 'image',
                            rect: ['0', '-128', '638px', '638px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"background_layer.png",'0px','0px'],
                            transform: [[],[],[],['0.9','0.9']]
                        },
                        {
                            id: 'water',
                            type: 'image',
                            rect: ['-1833', '154', '3306px', '432px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"water.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'back_glowballs1_symb',
                            symbolName: 'back_glowballs_symb',
                            display: 'none',
                            type: 'rect',
                            rect: ['346', '102', '24', '31', 'auto', 'auto']
                        },
                        {
                            id: 'back_glowballs2_symb',
                            symbolName: 'back_glowballs_symb',
                            display: 'none',
                            type: 'rect',
                            rect: ['346', '102', '24', '31', 'auto', 'auto']
                        },
                        {
                            id: 'back_glowballs3_symb',
                            symbolName: 'back_glowballs_symb',
                            display: 'none',
                            type: 'rect',
                            rect: ['346', '102', '24', '31', 'auto', 'auto']
                        },
                        {
                            id: 'back_glowballs4_symb',
                            symbolName: 'back_glowballs_symb',
                            display: 'none',
                            type: 'rect',
                            rect: ['346', '102', '24', '31', 'auto', 'auto']
                        },
                        {
                            id: 'power_lines',
                            type: 'image',
                            rect: ['-603', '-428', '2148', '1019', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"power_lines.png",'0px','0px'],
                            transform: [[],[],[],['0.128','0.128']]
                        },
                        {
                            id: 'front_glowballs1_symb',
                            symbolName: 'front_glowballs_symb',
                            display: 'none',
                            type: 'rect',
                            rect: ['375', '101', '23', '31', 'auto', 'auto']
                        },
                        {
                            id: 'front_glowballs2_symb',
                            symbolName: 'front_glowballs_symb',
                            display: 'none',
                            type: 'rect',
                            rect: ['375', '101', '23', '31', 'auto', 'auto']
                        },
                        {
                            id: 'front_glowballs3_symb',
                            symbolName: 'front_glowballs_symb',
                            display: 'none',
                            type: 'rect',
                            rect: ['375', '101', '23', '31', 'auto', 'auto']
                        },
                        {
                            id: 'front_glowballs4_symb',
                            symbolName: 'front_glowballs_symb',
                            display: 'none',
                            type: 'rect',
                            rect: ['375', '101', '23', '31', 'auto', 'auto']
                        },
                        {
                            id: 'foreground_layer',
                            type: 'image',
                            tag: 'img',
                            rect: ['276', '4', '139px', '592px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"foreground_layer.png",'0px','0px'],
                            transform: [[],[],[],['0.6','0.6']]
                        },
                        {
                            id: 'turbine_left',
                            type: 'image',
                            tag: 'img',
                            rect: ['263', '354', '157px', '57px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"turbine_1.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'left_blades_symb',
                            symbolName: 'left_blades_symb',
                            type: 'rect',
                            rect: ['292', '317', '34', '118', 'auto', 'auto'],
                            opacity: 1
                        },
                        {
                            id: 'turbine_L_to_M',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['297', '259', '96px', '233px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"turbine_2.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'turbine_middle',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['317', '259', '60px', '233px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"turbine_3.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'turbine_M_to_R',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['300', '259', '96px', '233px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"turbine_4.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'turbine_right',
                            display: 'none',
                            type: 'image',
                            tag: 'img',
                            rect: ['271', '354', '157px', '57px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"turbine_5.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'right_blades_symb',
                            symbolName: 'right_blades_symb',
                            display: 'none',
                            type: 'rect',
                            rect: ['366', '317', '34', '117', 'auto', 'auto'],
                            opacity: 1
                        },
                        {
                            id: 'generator_glow_symb',
                            symbolName: 'generator_glow_symb',
                            display: 'none',
                            type: 'rect',
                            rect: ['311', '193', '69', '73', 'auto', 'auto'],
                            opacity: 0.85
                        },
                        {
                            id: 'tide_in',
                            type: 'image',
                            rect: ['-4', '341', '223px', '75px', 'auto', 'auto'],
                            opacity: 0.000000,
                            fill: ["rgba(0,0,0,0)",im+"tide_in.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'tide_out',
                            type: 'image',
                            rect: ['418', '341', '224px', '75px', 'auto', 'auto'],
                            opacity: 0.000000,
                            fill: ["rgba(0,0,0,0)",im+"tide_out.png",'0px','0px'],
                            transform: [[],[],[],['0.5','0.5']]
                        },
                        {
                            id: 'labels_static',
                            symbolName: 'labels_symb',
                            type: 'rect',
                            rect: ['82', '144', '261', '242', 'auto', 'auto'],
                            opacity: 1
                        },
                        {
                            id: 'left_letterbox',
                            type: 'rect',
                            rect: ['0', '0px', '32', '478px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,0.00)","none"]
                        },
                        {
                            id: 'right_letterbox',
                            type: 'rect',
                            rect: ['606', '0px', '32', '478px', 'auto', 'auto'],
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,0.00)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '638', '477', 'auto', 'auto'],
                            sizeRange: ['null','638px','undefined','undefined'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 14500,
                    autoPlay: false,
                    data: [
                        [
                            "eid242",
                            "opacity",
                            14000,
                            500,
                            "easeInOutCubic",
                            "${turbine_right}",
                            '1',
                            '0'
                        ],
                        [
                            "eid287",
                            "display",
                            1390,
                            0,
                            "easeInOutCubic",
                            "${back_glowballs1_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid288",
                            "display",
                            6725,
                            0,
                            "easeInOutCubic",
                            "${back_glowballs1_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid289",
                            "display",
                            8476,
                            0,
                            "easeInOutCubic",
                            "${back_glowballs1_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid290",
                            "display",
                            13811,
                            0,
                            "easeInOutCubic",
                            "${back_glowballs1_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid245",
                            "opacity",
                            0,
                            500,
                            "easeInOutCubic",
                            "${labels_static}",
                            '1',
                            '0'
                        ],
                        [
                            "eid248",
                            "opacity",
                            14000,
                            500,
                            "easeInOutCubic",
                            "${labels_static}",
                            '0',
                            '1'
                        ],
                        [
                            "eid169",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${turbine_left}",
                            '1',
                            '1'
                        ],
                        [
                            "eid167",
                            "opacity",
                            7600,
                            0,
                            "linear",
                            "${turbine_left}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid175",
                            "opacity",
                            7700,
                            0,
                            "linear",
                            "${turbine_left}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid240",
                            "opacity",
                            14000,
                            500,
                            "easeInOutCubic",
                            "${turbine_left}",
                            '0',
                            '1'
                        ],
                        [
                            "eid263",
                            "display",
                            2057,
                            0,
                            "easeInOutCubic",
                            "${front_glowballs2_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid264",
                            "display",
                            7390,
                            0,
                            "easeInOutCubic",
                            "${front_glowballs2_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid265",
                            "display",
                            9143,
                            0,
                            "easeInOutCubic",
                            "${front_glowballs2_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid266",
                            "display",
                            14476,
                            0,
                            "easeInOutCubic",
                            "${front_glowballs2_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid144",
                            "opacity",
                            7283,
                            500,
                            "linear",
                            "${tide_out}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid212",
                            "opacity",
                            11611,
                            500,
                            "easeInOutCubic",
                            "${tide_out}",
                            '1',
                            '0'
                        ],
                        [
                            "eid177",
                            "opacity",
                            7800,
                            0,
                            "linear",
                            "${turbine_M_to_R}",
                            '1',
                            '1'
                        ],
                        [
                            "eid181",
                            "opacity",
                            7900,
                            0,
                            "linear",
                            "${turbine_M_to_R}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid184",
                            "opacity",
                            8000,
                            0,
                            "linear",
                            "${turbine_M_to_R}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid115",
                            "display",
                            0,
                            0,
                            "linear",
                            "${turbine_M_to_R}",
                            'none',
                            'none'
                        ],
                        [
                            "eid176",
                            "display",
                            7800,
                            0,
                            "linear",
                            "${turbine_M_to_R}",
                            'none',
                            'block'
                        ],
                        [
                            "eid178",
                            "opacity",
                            7700,
                            0,
                            "linear",
                            "${turbine_middle}",
                            '1',
                            '1'
                        ],
                        [
                            "eid179",
                            "opacity",
                            7800,
                            0,
                            "linear",
                            "${turbine_middle}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid183",
                            "opacity",
                            7900,
                            0,
                            "linear",
                            "${turbine_middle}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid234",
                            "opacity",
                            14000,
                            500,
                            "easeInOutCubic",
                            "${right_blades_symb}",
                            '1',
                            '0'
                        ],
                        [
                            "eid270",
                            "display",
                            3390,
                            0,
                            "easeInOutCubic",
                            "${front_glowballs4_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid271",
                            "display",
                            6057,
                            0,
                            "easeInOutCubic",
                            "${front_glowballs4_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid272",
                            "display",
                            10476,
                            0,
                            "easeInOutCubic",
                            "${front_glowballs4_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid273",
                            "display",
                            13143,
                            0,
                            "easeInOutCubic",
                            "${front_glowballs4_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid126",
                            "left",
                            250,
                            6000,
                            "easeInOutQuad",
                            "${water}",
                            '-1833px',
                            '-1404px'
                        ],
                        [
                            "eid141",
                            "left",
                            6250,
                            7561,
                            "easeInOutQuad",
                            "${water}",
                            '-1404px',
                            '-1833px'
                        ],
                        [
                            "eid172",
                            "opacity",
                            7600,
                            0,
                            "linear",
                            "${turbine_L_to_M}",
                            '1',
                            '1'
                        ],
                        [
                            "eid173",
                            "opacity",
                            7700,
                            0,
                            "linear",
                            "${turbine_L_to_M}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid180",
                            "opacity",
                            7800,
                            0,
                            "linear",
                            "${turbine_L_to_M}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid168",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${left_blades_symb}",
                            '1',
                            '1'
                        ],
                        [
                            "eid166",
                            "opacity",
                            7600,
                            0,
                            "linear",
                            "${left_blades_symb}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid174",
                            "opacity",
                            7700,
                            0,
                            "linear",
                            "${left_blades_symb}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid237",
                            "opacity",
                            14000,
                            500,
                            "easeInOutCubic",
                            "${left_blades_symb}",
                            '0',
                            '1'
                        ],
                        [
                            "eid116",
                            "display",
                            0,
                            0,
                            "linear",
                            "${turbine_middle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid171",
                            "display",
                            7700,
                            0,
                            "linear",
                            "${turbine_middle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid279",
                            "display",
                            2723,
                            0,
                            "easeInOutCubic",
                            "${back_glowballs3_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid280",
                            "display",
                            5391,
                            0,
                            "easeInOutCubic",
                            "${back_glowballs3_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid281",
                            "display",
                            9809,
                            0,
                            "easeInOutCubic",
                            "${back_glowballs3_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid282",
                            "display",
                            12477,
                            0,
                            "easeInOutCubic",
                            "${back_glowballs3_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid267",
                            "display",
                            2723,
                            0,
                            "easeInOutCubic",
                            "${front_glowballs3_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid268",
                            "display",
                            5391,
                            0,
                            "easeInOutCubic",
                            "${front_glowballs3_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid269",
                            "display",
                            9809,
                            0,
                            "easeInOutCubic",
                            "${front_glowballs3_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid274",
                            "display",
                            12477,
                            0,
                            "easeInOutCubic",
                            "${front_glowballs3_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid283",
                            "display",
                            2057,
                            0,
                            "easeInOutCubic",
                            "${back_glowballs2_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid284",
                            "display",
                            7390,
                            0,
                            "easeInOutCubic",
                            "${back_glowballs2_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid285",
                            "display",
                            9143,
                            0,
                            "easeInOutCubic",
                            "${back_glowballs2_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid286",
                            "display",
                            14476,
                            0,
                            "easeInOutCubic",
                            "${back_glowballs2_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid259",
                            "display",
                            1390,
                            0,
                            "easeInOutCubic",
                            "${front_glowballs1_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid260",
                            "display",
                            6725,
                            0,
                            "easeInOutCubic",
                            "${front_glowballs1_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid261",
                            "display",
                            8476,
                            0,
                            "easeInOutCubic",
                            "${front_glowballs1_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid262",
                            "display",
                            13811,
                            0,
                            "easeInOutCubic",
                            "${front_glowballs1_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid255",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${generator_glow_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid256",
                            "display",
                            5258,
                            0,
                            "linear",
                            "${generator_glow_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid257",
                            "display",
                            8350,
                            0,
                            "linear",
                            "${generator_glow_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid258",
                            "display",
                            12358,
                            0,
                            "linear",
                            "${generator_glow_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid114",
                            "display",
                            0,
                            0,
                            "linear",
                            "${turbine_right}",
                            'none',
                            'none'
                        ],
                        [
                            "eid182",
                            "display",
                            7900,
                            0,
                            "linear",
                            "${turbine_right}",
                            'none',
                            'block'
                        ],
                        [
                            "eid207",
                            "display",
                            7900,
                            0,
                            "linear",
                            "${right_blades_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid124",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${tide_in}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            4750,
                            500,
                            "linear",
                            "${tide_in}",
                            '1',
                            '0'
                        ],
                        [
                            "eid275",
                            "display",
                            3390,
                            0,
                            "easeInOutCubic",
                            "${back_glowballs4_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid276",
                            "display",
                            6057,
                            0,
                            "easeInOutCubic",
                            "${back_glowballs4_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid277",
                            "display",
                            10476,
                            0,
                            "easeInOutCubic",
                            "${back_glowballs4_symb}",
                            'none',
                            'block'
                        ],
                        [
                            "eid278",
                            "display",
                            13143,
                            0,
                            "easeInOutCubic",
                            "${back_glowballs4_symb}",
                            'block',
                            'none'
                        ],
                        [
                            "eid108",
                            "display",
                            0,
                            0,
                            "linear",
                            "${turbine_L_to_M}",
                            'none',
                            'none'
                        ],
                        [
                            "eid165",
                            "display",
                            7600,
                            0,
                            "linear",
                            "${turbine_L_to_M}",
                            'none',
                            'block'
                        ],
                            [ "eid117", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${left_blades_symb}', [0] ] ],
                            [ "eid134", "trigger", 1250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${generator_glow_symb}', [0] ] ],
                            [ "eid82", "trigger", 1376, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${left_blades_symb}', ['loop'] ] ],
                            [ "eid145", "trigger", 1389.7963960501, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${front_glowballs1_symb}', [0] ] ],
                            [ "eid146", "trigger", 1389.7963960501, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${back_glowballs1_symb}', [0] ] ],
                            [ "eid84", "trigger", 1701, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${left_blades_symb}', ['loop'] ] ],
                            [ "eid127", "trigger", 1917, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${generator_glow_symb}', [0] ] ],
                            [ "eid85", "trigger", 2024, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${left_blades_symb}', ['loop'] ] ],
                            [ "eid152", "trigger", 2056.7963960501, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${front_glowballs2_symb}', [0] ] ],
                            [ "eid151", "trigger", 2056.7963960501, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${back_glowballs2_symb}', [0] ] ],
                            [ "eid86", "trigger", 2347, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${left_blades_symb}', ['loop'] ] ],
                            [ "eid128", "trigger", 2577, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${generator_glow_symb}', [0] ] ],
                            [ "eid87", "trigger", 2670, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${left_blades_symb}', ['loop'] ] ],
                            [ "eid153", "trigger", 2722.7963960501, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${back_glowballs3_symb}', [0] ] ],
                            [ "eid154", "trigger", 2722.7963960501, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${front_glowballs3_symb}', [0] ] ],
                            [ "eid88", "trigger", 2993, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${left_blades_symb}', ['loop'] ] ],
                            [ "eid129", "trigger", 3244, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${generator_glow_symb}', [0] ] ],
                            [ "eid99", "trigger", 3316, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${left_blades_symb}', ['loop'] ] ],
                            [ "eid155", "trigger", 3389.7963960501, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${front_glowballs4_symb}', [0] ] ],
                            [ "eid156", "trigger", 3389.7963960501, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${back_glowballs4_symb}', [0] ] ],
                            [ "eid100", "trigger", 3639, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${left_blades_symb}', ['loop'] ] ],
                            [ "eid131", "trigger", 3911, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${generator_glow_symb}', [0] ] ],
                            [ "eid101", "trigger", 3962, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${left_blades_symb}', ['loop'] ] ],
                            [ "eid102", "trigger", 4285, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${left_blades_symb}', ['loop'] ] ],
                            [ "eid133", "trigger", 4578, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${generator_glow_symb}', [0] ] ],
                            [ "eid103", "trigger", 4608, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${left_blades_symb}', ['loop'] ] ],
                            [ "eid162", "trigger", 5390.7963960501, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${front_glowballs3_symb}', [] ] ],
                            [ "eid161", "trigger", 5390.7963960501, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${back_glowballs3_symb}', [] ] ],
                            [ "eid163", "trigger", 6056.7963960501, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${back_glowballs4_symb}', [0] ] ],
                            [ "eid164", "trigger", 6056.7963960501, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${front_glowballs4_symb}', [] ] ],
                            [ "eid158", "trigger", 6724.7963960501, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${front_glowballs1_symb}', [] ] ],
                            [ "eid157", "trigger", 6724.7963960501, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${back_glowballs1_symb}', [0] ] ],
                            [ "eid159", "trigger", 7389.7963960501, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${front_glowballs2_symb}', [] ] ],
                            [ "eid160", "trigger", 7389.7963960501, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${back_glowballs2_symb}', [0] ] ],
                            [ "eid208", "trigger", 8100, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${right_blades_symb}', [0] ] ],
                            [ "eid213", "trigger", 8350, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${generator_glow_symb}', [0] ] ],
                            [ "eid215", "trigger", 8476, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${front_glowballs1_symb}', [0] ] ],
                            [ "eid104", "trigger", 8476, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${right_blades_symb}', ['loop'] ] ],
                            [ "eid216", "trigger", 8476, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${back_glowballs1_symb}', [0] ] ],
                            [ "eid105", "trigger", 8799, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${right_blades_symb}', ['loop'] ] ],
                            [ "eid136", "trigger", 9017, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${generator_glow_symb}', [0] ] ],
                            [ "eid106", "trigger", 9122, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${right_blades_symb}', ['loop'] ] ],
                            [ "eid218", "trigger", 9143, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${back_glowballs2_symb}', [0] ] ],
                            [ "eid217", "trigger", 9143, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${front_glowballs2_symb}', [0] ] ],
                            [ "eid107", "trigger", 9445, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${right_blades_symb}', ['loop'] ] ],
                            [ "eid137", "trigger", 9684, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${generator_glow_symb}', [0] ] ],
                            [ "eid109", "trigger", 9768, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${right_blades_symb}', ['loop'] ] ],
                            [ "eid220", "trigger", 9809, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${back_glowballs3_symb}', [0] ] ],
                            [ "eid219", "trigger", 9809, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${front_glowballs3_symb}', [0] ] ],
                            [ "eid113", "trigger", 10091, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${right_blades_symb}', ['loop'] ] ],
                            [ "eid138", "trigger", 10344, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${generator_glow_symb}', [0] ] ],
                            [ "eid119", "trigger", 10414, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${right_blades_symb}', ['loop'] ] ],
                            [ "eid221", "trigger", 10476, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${back_glowballs4_symb}', [0] ] ],
                            [ "eid222", "trigger", 10476, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${front_glowballs4_symb}', [0] ] ],
                            [ "eid121", "trigger", 10737, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${right_blades_symb}', ['loop'] ] ],
                            [ "eid140", "trigger", 11011, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${generator_glow_symb}', [0] ] ],
                            [ "eid122", "trigger", 11060, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${right_blades_symb}', ['loop'] ] ],
                            [ "eid123", "trigger", 11383, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${right_blades_symb}', ['loop'] ] ],
                            [ "eid142", "trigger", 11678, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${generator_glow_symb}', [0] ] ],
                            [ "eid125", "trigger", 11706, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${right_blades_symb}', ['loop'] ] ],
                            [ "eid224", "trigger", 12477, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${back_glowballs3_symb}', [] ] ],
                            [ "eid223", "trigger", 12477, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${front_glowballs3_symb}', [] ] ],
                            [ "eid225", "trigger", 13143, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${front_glowballs4_symb}', [] ] ],
                            [ "eid226", "trigger", 13143, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${back_glowballs4_symb}', [0] ] ],
                            [ "eid227", "trigger", 13811, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${front_glowballs1_symb}', [] ] ],
                            [ "eid228", "trigger", 13811, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${back_glowballs1_symb}', [0] ] ],
                            [ "eid230", "trigger", 14476, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${back_glowballs2_symb}', [0] ] ],
                            [ "eid229", "trigger", 14476, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${front_glowballs2_symb}', [] ] ]
                    ]
                }
            },
            "left_blades_symb": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: [7, -59, '22px', '235px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/blades_1_1.png', '0px', '0px'],
                            id: 'blades_L_1',
                            opacity: '1',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            id: 'blades_L_2',
                            opacity: '1',
                            rect: [-9, -15, '51px', '145px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/blades_1_2.png', '0px', '0px'],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            id: 'blades_L_3',
                            opacity: '1',
                            rect: [-17, 47, '67px', '22px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/blades_1_3.png', '0px', '0px'],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            id: 'blades_L_4',
                            opacity: '1',
                            rect: [-9, -17, '52px', '151px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/blades_1_4.png', '0px', '0px'],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            id: 'blades_L_1Copy',
                            opacity: '1',
                            rect: [7, -59, '22px', '235px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/blades_1_1.png', '0px', '0px'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 34, 118]
                        }
                    }
                },
                timeline: {
                    duration: 376,
                    autoPlay: false,
                    labels: {
                        "loop": 53
                    },
                    data: [
                        [
                            "eid98",
                            "display",
                            255,
                            0,
                            "linear",
                            "${blades_L_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid83",
                            "opacity",
                            255,
                            0,
                            "linear",
                            "${blades_L_4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid89",
                            "opacity",
                            336,
                            40,
                            "linear",
                            "${blades_L_4}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid92",
                            "opacity",
                            95,
                            0,
                            "linear",
                            "${blades_L_2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid93",
                            "opacity",
                            174,
                            40,
                            "linear",
                            "${blades_L_2}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid94",
                            "opacity",
                            10,
                            0,
                            "linear",
                            "${blades_L_1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid95",
                            "opacity",
                            95,
                            40,
                            "linear",
                            "${blades_L_1}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid118",
                            "opacity",
                            336,
                            0,
                            "linear",
                            "${blades_L_1Copy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid96",
                            "display",
                            95,
                            0,
                            "linear",
                            "${blades_L_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid120",
                            "display",
                            336,
                            0,
                            "linear",
                            "${blades_L_1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid90",
                            "opacity",
                            174,
                            0,
                            "linear",
                            "${blades_L_3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            255,
                            40,
                            "linear",
                            "${blades_L_3}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid97",
                            "display",
                            174,
                            0,
                            "linear",
                            "${blades_L_3}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "back_glowballs_symb": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.25', '0.25', 1], ['50%', '50%']],
                            type: 'image',
                            id: 'glowballCopy5',
                            opacity: '0',
                            rect: ['-8px', '-2px', '47px', '47px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/glowball.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.25', '0.25', 1], ['50%', '50%']],
                            type: 'image',
                            id: 'glowballCopy4',
                            opacity: '0',
                            rect: ['-8px', '-2px', '47px', '47px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/glowball.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.25', '0.25', 1], ['50%', '50%']],
                            display: 'block',
                            type: 'image',
                            id: 'glowballCopy3',
                            opacity: '0',
                            rect: ['-8px', '-2px', '47px', '47px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/glowball.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 24, 31]
                        }
                    }
                },
                timeline: {
                    duration: 2668,
                    autoPlay: false,
                    data: [
                        [
                            "eid50",
                            "scaleY",
                            0,
                            100,
                            "linear",
                            "${glowballCopy3}",
                            '0.25',
                            '0.5'
                        ],
                        [
                            "eid51",
                            "scaleY",
                            100,
                            1911,
                            "linear",
                            "${glowballCopy3}",
                            '0.5',
                            '0.15'
                        ],
                        [
                            "eid68",
                            "location",
                            100,
                            618,
                            "linear",
                            "${glowballCopy5}",
                            [[-11.7, 21.62, 127.91, -8.08, 0, 0,0],[113.08, -9.22, 0, 0, 135.78, -64.31,129.36]]
                        ],
                        [
                            "eid69",
                            "location",
                            718,
                            513,
                            "linear",
                            "${glowballCopy5}",
                            [[113.08, -9.22, 58.26, 77.19, 0, 0,0],[170.22, 12.71, 0, 0, 84.66, -14.35,66.28]]
                        ],
                        [
                            "eid70",
                            "location",
                            1231,
                            452,
                            "linear",
                            "${glowballCopy5}",
                            [[170.22, 12.71, 91.04, 81.36, 0, 0,0],[219.56, 29.45, 0, 0, 17.58, -1.75,54.93]]
                        ],
                        [
                            "eid71",
                            "location",
                            1683,
                            328,
                            "linear",
                            "${glowballCopy5}",
                            [[219.56, 29.45, 60.76, 39.12, 0, 0,0],[264.98, 35.03, 0, 0, 9.77, -4.17,47.14]]
                        ],
                        [
                            "eid149",
                            "display",
                            2668,
                            0,
                            "linear",
                            "${glowballCopy3}",
                            'block',
                            'block'
                        ],
                        [
                            "eid49",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${glowballCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid65",
                            "scaleX",
                            0,
                            100,
                            "linear",
                            "${glowballCopy4}",
                            '0.25',
                            '0.5'
                        ],
                        [
                            "eid66",
                            "scaleX",
                            100,
                            1911,
                            "linear",
                            "${glowballCopy4}",
                            '0.5',
                            '0.15'
                        ],
                        [
                            "eid58",
                            "location",
                            100,
                            618,
                            "linear",
                            "${glowballCopy4}",
                            [[-11.88, 21.84, 283.56, -86.9, 0, 0,0],[108.4, -31.49, 0, 0, 78.3, -46.45,132.28]]
                        ],
                        [
                            "eid59",
                            "location",
                            718,
                            513,
                            "linear",
                            "${glowballCopy4}",
                            [[108.4, -31.49, 97.84, 114.25, 0, 0,0],[166.7, -3.54, 0, 0, 55.23, -30.85,72.39]]
                        ],
                        [
                            "eid60",
                            "location",
                            1231,
                            452,
                            "linear",
                            "${glowballCopy4}",
                            [[166.7, -3.54, 86.35, 98.62, 0, 0,0],[216.56, 16.57, 0, 0, 16.31, -4.75,58.11]]
                        ],
                        [
                            "eid61",
                            "location",
                            1683,
                            328,
                            "linear",
                            "${glowballCopy4}",
                            [[216.56, 16.57, 23.91, 12.73, 0, 0,0],[265.24, 24.09, 0, 0, 75.94, -30.75,51.57]]
                        ],
                        [
                            "eid73",
                            "scaleY",
                            0,
                            100,
                            "linear",
                            "${glowballCopy5}",
                            '0.25',
                            '0.5'
                        ],
                        [
                            "eid74",
                            "scaleY",
                            100,
                            1911,
                            "linear",
                            "${glowballCopy5}",
                            '0.5',
                            '0.15'
                        ],
                        [
                            "eid62",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${glowballCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "scaleX",
                            0,
                            100,
                            "linear",
                            "${glowballCopy3}",
                            '0.25',
                            '0.5'
                        ],
                        [
                            "eid48",
                            "scaleX",
                            100,
                            1911,
                            "linear",
                            "${glowballCopy3}",
                            '0.5',
                            '0.15'
                        ],
                        [
                            "eid72",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${glowballCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid53",
                            "location",
                            100,
                            618,
                            "linear",
                            "${glowballCopy3}",
                            [[-12.2, 22.12, 273.93, -111.09, 0, 0,0],[116.58, -58.07, 0, 0, 36.72, -42.25,153.12]]
                        ],
                        [
                            "eid54",
                            "location",
                            718,
                            513,
                            "linear",
                            "${glowballCopy3}",
                            [[116.58, -58.07, 28.15, 71.67, 0, 0,0],[172.91, -23.61, 0, 0, 58.37, -57.77,76.9]]
                        ],
                        [
                            "eid55",
                            "location",
                            1231,
                            452,
                            "linear",
                            "${glowballCopy3}",
                            [[172.91, -23.61, 72.1, 116.56, 0, 0,0],[221.65, -0.4, 0, 0, 16.31, -4.75,60.35]]
                        ],
                        [
                            "eid56",
                            "location",
                            1683,
                            328,
                            "linear",
                            "${glowballCopy3}",
                            [[221.65, -0.4, 13.05, 15.52, 0, 0,0],[263.98, 13.54, 0, 0, 61.33, -38.49,49.09]]
                        ],
                        [
                            "eid75",
                            "scaleX",
                            0,
                            100,
                            "linear",
                            "${glowballCopy5}",
                            '0.25',
                            '0.5'
                        ],
                        [
                            "eid76",
                            "scaleX",
                            100,
                            1911,
                            "linear",
                            "${glowballCopy5}",
                            '0.5',
                            '0.15'
                        ],
                        [
                            "eid63",
                            "scaleY",
                            0,
                            100,
                            "linear",
                            "${glowballCopy4}",
                            '0.25',
                            '0.5'
                        ],
                        [
                            "eid64",
                            "scaleY",
                            100,
                            1911,
                            "linear",
                            "${glowballCopy4}",
                            '0.5',
                            '0.15'
                        ]
                    ]
                }
            },
            "front_glowballs_symb": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.25', '0.25', 1], ['50%', '50%']],
                            type: 'image',
                            id: 'glowball',
                            opacity: '0',
                            rect: ['-37px', '-1px', '47px', '47px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/glowball.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.25', '0.25', 1], ['50%', '50%']],
                            type: 'image',
                            id: 'glowballCopy',
                            opacity: '0',
                            rect: ['-37px', '-1px', '47px', '47px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/glowball.png', '0px', '0px']
                        },
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.25', '0.25', 1], ['50%', '50%']],
                            display: 'block',
                            type: 'image',
                            id: 'glowballCopy2',
                            opacity: '0',
                            rect: ['-37px', '-1px', '47px', '47px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/glowball.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 23, 31]
                        }
                    }
                },
                timeline: {
                    duration: 2668,
                    autoPlay: false,
                    data: [
                        [
                            "eid40",
                            "scaleY",
                            0,
                            100,
                            "linear",
                            "${glowballCopy2}",
                            '0.25',
                            '0.5'
                        ],
                        [
                            "eid41",
                            "scaleY",
                            100,
                            1750,
                            "linear",
                            "${glowballCopy2}",
                            '0.5',
                            '0.15'
                        ],
                        [
                            "eid46",
                            "location",
                            0,
                            0,
                            "linear",
                            "${glowball}",
                            [[-13.3, 22.59, 0, 0, 0, 0,0],[-13.3, 22.59, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid3",
                            "location",
                            100,
                            618,
                            "linear",
                            "${glowball}",
                            [[-13.3, 22.59, 78.51, -6.98, 0, 0,0],[122.7, -7.41, 0, 0, 135.78, -64.31,139.88]]
                        ],
                        [
                            "eid4",
                            "location",
                            718,
                            513,
                            "linear",
                            "${glowball}",
                            [[122.7, -7.41, 29.11, 38.99, 0, 0,0],[171.07, 13.34, 0, 0, 84.66, -14.35,56.26]]
                        ],
                        [
                            "eid5",
                            "location",
                            1231,
                            452,
                            "linear",
                            "${glowball}",
                            [[171.07, 13.34, 59.97, 69.5, 0, 0,0],[215.7, 31.59, 0, 0, 17.58, -1.75,50.56]]
                        ],
                        [
                            "eid6",
                            "location",
                            1683,
                            167,
                            "linear",
                            "${glowball}",
                            [[215.7, 31.59, 29.22, 10.76, 0, 0,0],[236.7, 32.59, 0, 0, 9.77, -4.17,21.42]]
                        ],
                        [
                            "eid39",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${glowballCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid42",
                            "scaleX",
                            0,
                            100,
                            "linear",
                            "${glowballCopy2}",
                            '0.25',
                            '0.5'
                        ],
                        [
                            "eid43",
                            "scaleX",
                            100,
                            1750,
                            "linear",
                            "${glowballCopy2}",
                            '0.5',
                            '0.15'
                        ],
                        [
                            "eid27",
                            "scaleY",
                            0,
                            100,
                            "linear",
                            "${glowballCopy}",
                            '0.25',
                            '0.5'
                        ],
                        [
                            "eid28",
                            "scaleY",
                            100,
                            1750,
                            "linear",
                            "${glowballCopy}",
                            '0.5',
                            '0.15'
                        ],
                        [
                            "eid21",
                            "scaleY",
                            0,
                            100,
                            "linear",
                            "${glowball}",
                            '0.25',
                            '0.5'
                        ],
                        [
                            "eid12",
                            "scaleY",
                            100,
                            1750,
                            "linear",
                            "${glowball}",
                            '0.5',
                            '0.15'
                        ],
                        [
                            "eid20",
                            "scaleX",
                            0,
                            100,
                            "linear",
                            "${glowball}",
                            '0.25',
                            '0.5'
                        ],
                        [
                            "eid11",
                            "scaleX",
                            100,
                            1750,
                            "linear",
                            "${glowball}",
                            '0.5',
                            '0.15'
                        ],
                        [
                            "eid24",
                            "scaleX",
                            0,
                            100,
                            "linear",
                            "${glowballCopy}",
                            '0.25',
                            '0.5'
                        ],
                        [
                            "eid25",
                            "scaleX",
                            100,
                            1750,
                            "linear",
                            "${glowballCopy}",
                            '0.5',
                            '0.15'
                        ],
                        [
                            "eid18",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${glowball}",
                            '0',
                            '1'
                        ],
                        [
                            "eid150",
                            "display",
                            2668,
                            0,
                            "linear",
                            "${glowballCopy2}",
                            'block',
                            'block'
                        ],
                        [
                            "eid34",
                            "location",
                            0,
                            0,
                            "linear",
                            "${glowballCopy2}",
                            [[-12.92, 22.59, 0, 0, 0, 0,0],[-12.92, 22.59, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid35",
                            "location",
                            100,
                            618,
                            "linear",
                            "${glowballCopy2}",
                            [[-13.3, 22.59, 179.25, -74.7, 0, 0,0],[119.82, -56.6, 0, 0, 36.72, -42.25,155.52]]
                        ],
                        [
                            "eid36",
                            "location",
                            718,
                            513,
                            "linear",
                            "${glowballCopy2}",
                            [[119.82, -56.6, 17.43, 19.8, 0, 0,0],[168.25, -21.7, 0, 0, 84.66, -14.35,63.5]]
                        ],
                        [
                            "eid37",
                            "location",
                            1231,
                            452,
                            "linear",
                            "${glowballCopy2}",
                            [[168.25, -21.7, 46.51, 64.61, 0, 0,0],[213.93, 1.49, 0, 0, 16.31, -4.75,53.26]]
                        ],
                        [
                            "eid38",
                            "location",
                            1683,
                            167,
                            "linear",
                            "${glowballCopy2}",
                            [[213.93, 1.49, 13.05, 15.52, 0, 0,0],[234.7, 9.68, 0, 0, 43.61, -4.43,23.8]]
                        ],
                        [
                            "eid29",
                            "location",
                            0,
                            0,
                            "linear",
                            "${glowballCopy}",
                            [[-12.92, 22.59, 0, 0, 0, 0,0],[-12.92, 22.59, 0, 0, 0, 0,0]]
                        ],
                        [
                            "eid30",
                            "location",
                            100,
                            618,
                            "linear",
                            "${glowballCopy}",
                            [[-13.3, 22.59, 110.24, -26.43, 0, 0,0],[128.46, -29.93, 0, 0, 78.3, -46.45,151.46]]
                        ],
                        [
                            "eid31",
                            "location",
                            718,
                            513,
                            "linear",
                            "${glowballCopy}",
                            [[128.46, -29.93, 47.75, 46.78, 0, 0,0],[174.7, -1.66, 0, 0, 84.66, -14.35,58.1]]
                        ],
                        [
                            "eid32",
                            "location",
                            1231,
                            452,
                            "linear",
                            "${glowballCopy}",
                            [[174.7, -1.66, 27.33, 77.9, 0, 0,0],[218.7, 17.84, 0, 0, 16.31, -4.75,52.94]]
                        ],
                        [
                            "eid33",
                            "location",
                            1683,
                            167,
                            "linear",
                            "${glowballCopy}",
                            [[218.7, 17.84, 23.91, 12.73, 0, 0,0],[236.96, 21.98, 0, 0, 29.56, -7.07,19.52]]
                        ],
                        [
                            "eid26",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${glowballCopy}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "generator_glow_symb": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            tag: 'img',
                            type: 'image',
                            id: 'generator_glow',
                            opacity: '0',
                            rect: [-34, -36, '138px', '145px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/generator_glow.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 69, 73]
                        }
                    }
                },
                timeline: {
                    duration: 667,
                    autoPlay: false,
                    data: [
                        [
                            "eid130",
                            "opacity",
                            0,
                            333,
                            "easeInOutSine",
                            "${generator_glow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            333,
                            334,
                            "easeInOutSine",
                            "${generator_glow}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "right_blades_symb": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            rect: [7, -58, '21px', '233px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/blades_2_1.png', '0px', '0px'],
                            id: 'blades_R_1',
                            opacity: '1',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            id: 'blades_R_2',
                            opacity: '1',
                            rect: [-6, -14, '51px', '145px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/blades_2_2.png', '0px', '0px'],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            id: 'blades_R_3',
                            opacity: '1',
                            rect: [-17, 46, '67px', '22px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/blades_2_3.png', '0px', '0px'],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            id: 'blades_R_4',
                            opacity: '1',
                            rect: [-11, -18, '56px', '151px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/blades_2_4.png', '0px', '0px'],
                            tag: 'img'
                        },
                        {
                            type: 'image',
                            id: 'blades_R_1Copy',
                            opacity: '1',
                            rect: [7, -58, '21px', '233px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.5', '0.5', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/blades_2_1.png', '0px', '0px'],
                            tag: 'img'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 34, 117]
                        }
                    }
                },
                timeline: {
                    duration: 376,
                    autoPlay: false,
                    labels: {
                        "loop": 53
                    },
                    data: [
                        [
                            "eid206",
                            "display",
                            336,
                            0,
                            "linear",
                            "${blades_R_1Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid185",
                            "opacity",
                            10,
                            0,
                            "linear",
                            "${blades_R_1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid188",
                            "opacity",
                            96,
                            39,
                            "linear",
                            "${blades_R_1}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid196",
                            "opacity",
                            174,
                            0,
                            "linear",
                            "${blades_R_3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid200",
                            "opacity",
                            255,
                            40,
                            "linear",
                            "${blades_R_3}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid110",
                            "display",
                            0,
                            0,
                            "linear",
                            "${blades_R_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid198",
                            "display",
                            255,
                            0,
                            "linear",
                            "${blades_R_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid112",
                            "display",
                            0,
                            0,
                            "linear",
                            "${blades_R_2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid189",
                            "display",
                            96,
                            0,
                            "linear",
                            "${blades_R_2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid199",
                            "opacity",
                            255,
                            0,
                            "linear",
                            "${blades_R_4}",
                            '1',
                            '1'
                        ],
                        [
                            "eid205",
                            "opacity",
                            336,
                            40,
                            "linear",
                            "${blades_R_4}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid191",
                            "opacity",
                            96,
                            0,
                            "linear",
                            "${blades_R_2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid193",
                            "opacity",
                            174,
                            41,
                            "linear",
                            "${blades_R_2}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid111",
                            "display",
                            0,
                            0,
                            "linear",
                            "${blades_R_3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid194",
                            "display",
                            174,
                            0,
                            "linear",
                            "${blades_R_3}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "labels_symb": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', 'nowrap'],
                            id: 'Turbine',
                            text: 'Turbine',
                            type: 'text',
                            rect: [43, 219, 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', 'nowrap'],
                            id: 'Generator',
                            text: 'Generator',
                            type: 'text',
                            rect: [19, 78, 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', 'nowrap'],
                            id: 'Transformer',
                            text: 'Transformer',
                            type: 'text',
                            rect: [0, 0, 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: [113, 11, 148, 1, 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: [113, 90, 138, 1, 'auto', 'auto'],
                            id: 'RectangleCopy',
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: [113, 230, 108, 1, 'auto', 'auto'],
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 261, 242]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("tidal-power_edgeActions.js");
})("EDGE-15288829");
