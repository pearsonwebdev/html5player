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
                            id: 'new-bkg',
                            type: 'image',
                            rect: ['0', '0', '640px', '480px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"new-bkg.jpg",'0px','0px']
                        },
                        {
                            id: 'stage_offset',
                            display: 'block',
                            type: 'rect',
                            rect: ['-1', '0px', '638px', '478px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,0.00)","none"]
                        },
                        {
                            id: '_00_wires',
                            type: 'image',
                            tag: 'img',
                            rect: ['-717', '-437', '2460px', '1260px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"00_wires.svg",'0px','0px'],
                            transform: [[],[],[],['0.1','0.1']]
                        },
                        {
                            id: 'glowballs1_parent',
                            display: 'none',
                            type: 'rect',
                            rect: ['383', '127', '108px', '82px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,0.00)","none"],
                            c: [
                            {
                                id: '_03_glowballCopy5',
                                type: 'image',
                                rect: ['14px', '-12px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.87,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            },
                            {
                                id: '_03_glowballCopy4',
                                type: 'image',
                                rect: ['14px', '-12px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.85,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            },
                            {
                                id: '_03_glowballCopy3',
                                type: 'image',
                                rect: ['14px', '-12px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.85,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            },
                            {
                                id: '_03_glowballCopy2',
                                type: 'image',
                                rect: ['-13px', '-14px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.84,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            },
                            {
                                id: '_03_glowballCopy',
                                type: 'image',
                                rect: ['-13px', '-14px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.85,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            },
                            {
                                id: '_03_glowball',
                                display: 'block',
                                type: 'image',
                                rect: ['-13px', '-14px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.85,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            }]
                        },
                        {
                            id: 'glowballs2_parent',
                            display: 'none',
                            type: 'rect',
                            rect: ['-385', '-128', '108px', '82px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,0.00)","none"],
                            c: [
                            {
                                id: '_03_glowballCopy11',
                                type: 'image',
                                rect: ['782px', '242px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.87,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            },
                            {
                                id: '_03_glowballCopy10',
                                type: 'image',
                                rect: ['782px', '242px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.85,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            },
                            {
                                id: '_03_glowballCopy9',
                                type: 'image',
                                rect: ['782px', '242px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.85,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            },
                            {
                                id: '_03_glowballCopy8',
                                type: 'image',
                                rect: ['755px', '240px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.84,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            },
                            {
                                id: '_03_glowballCopy7',
                                type: 'image',
                                rect: ['755px', '240px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.85,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            },
                            {
                                id: '_03_glowballCopy6',
                                display: 'block',
                                type: 'image',
                                rect: ['755px', '240px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.85,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            }]
                        },
                        {
                            id: 'glowballs3_parent',
                            display: 'none',
                            type: 'rect',
                            rect: ['-385', '-127', '108px', '82px', 'auto', 'auto'],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,0.00)","none"],
                            c: [
                            {
                                id: '_03_glowballCopy17',
                                type: 'image',
                                rect: ['782px', '242px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.87,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            },
                            {
                                id: '_03_glowballCopy16',
                                type: 'image',
                                rect: ['782px', '242px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.85,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            },
                            {
                                id: '_03_glowballCopy15',
                                type: 'image',
                                rect: ['782px', '242px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.85,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            },
                            {
                                id: '_03_glowballCopy14',
                                type: 'image',
                                rect: ['755px', '240px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.84,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            },
                            {
                                id: '_03_glowballCopy13',
                                type: 'image',
                                rect: ['755px', '240px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.85,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            },
                            {
                                id: '_03_glowballCopy12',
                                display: 'block',
                                type: 'image',
                                rect: ['755px', '240px', '47px', '47px', 'auto', 'auto'],
                                opacity: 0.85,
                                fill: ["rgba(0,0,0,0)",im+"03_glowball.png",'0px','0px'],
                                transform: [[],[],[],['0.4','0.4']]
                            }]
                        },
                        {
                            id: '_00_water_front_RIGHT_TOP',
                            type: 'image',
                            tag: 'img',
                            rect: ['19', '121', '601px', '358px', 'auto', 'auto'],
                            clip: 'rect(106px 111px 247px 111px)',
                            opacity: 0.9,
                            fill: ["rgba(0,0,0,0)",im+"00_water_front.png",'0px','0px']
                        },
                        {
                            id: '_00_water_front_RIGHT_TOPCopy',
                            type: 'image',
                            tag: 'img',
                            rect: ['19', '121', '601px', '358px', 'auto', 'auto'],
                            clip: 'rect(39px 405px 247px 111px)',
                            opacity: 0.9,
                            fill: ["rgba(0,0,0,0)",im+"00_water_front.png",'0px','0px']
                        },
                        {
                            id: '_00_water_surface_right',
                            type: 'image',
                            rect: ['28', '333', '601px', '45px', 'auto', 'auto'],
                            clip: 'rect(0px 601px 45px 474.46533203125px)',
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"00_water_surface_right.png",'0px','0px'],
                            transform: [[],[],[],['1.16473','0.75'],['79%']]
                        },
                        {
                            id: '_00_water_surface_left',
                            type: 'image',
                            rect: ['-487', '88', '601px', '45px', 'auto', 'auto'],
                            clip: 'rect(0px 601px 83.71517181396484px 486.6435546875px)',
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"00_water_surface_left.png",'0px','0px'],
                            transform: [[],[],[],['1','0.75']]
                        },
                        {
                            id: 'dam-face-new',
                            type: 'image',
                            rect: ['124', '130', '344px', '276px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"dam-face-new.png",'0px','0px']
                        },
                        {
                            id: '_00_water_cover',
                            type: 'image',
                            tag: 'img',
                            rect: ['502', '299', '51px', '69px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"00_water_cover.png",'0px','0px'],
                            transform: [[],[],[],['0.99']]
                        },
                        {
                            id: '_00_generator',
                            type: 'image',
                            tag: 'img',
                            rect: ['320', '216', '86px', '121px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"00_generator.png",'0px','0px']
                        },
                        {
                            id: '_00_sluice_gate',
                            type: 'image',
                            tag: 'img',
                            rect: ['126', '115', '9px', '112px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"00_sluice_gate.png",'0px','0px']
                        },
                        {
                            id: '_00_sluice_gate2',
                            type: 'image',
                            tag: 'img',
                            rect: ['126', '58', '9px', '112px', 'auto', 'auto'],
                            opacity: 1,
                            fill: ["rgba(0,0,0,0)",im+"00_sluice_gate.png",'0px','0px']
                        },
                        {
                            id: 'turbine_spritesheet',
                            type: 'image',
                            rect: ['336', '322', '405px', '52px', 'auto', 'auto'],
                            clip: 'rect(0px 52.66552734375px 52px 0px)',
                            fill: ["rgba(0,0,0,0)",im+"turbine_spritesheet.png",'0px','0px']
                        },
                        {
                            id: '_00_generator_glow',
                            type: 'image',
                            rect: ['309', '183', '108px', '114px', 'auto', 'auto'],
                            opacity: 0,
                            fill: ["rgba(0,0,0,0)",im+"00_generator_glow.png",'0px','0px'],
                            transform: [[],[],[],['0.65','0.65']]
                        },
                        {
                            id: '_00_wiresCopy',
                            type: 'image',
                            tag: 'img',
                            rect: ['-717', '-437', '2460px', '1260px', 'auto', 'auto'],
                            opacity: 0.15,
                            fill: ["rgba(0,0,0,0)",im+"00_wires.svg",'0px','0px'],
                            transform: [[],[],[],['0.1','0.1']]
                        },
                        {
                            id: 'static_electricity',
                            symbolName: 'static_electricity',
                            type: 'rect',
                            rect: ['-385', '-128px', '876', '337', 'auto', 'auto'],
                            opacity: 1
                        },
                        {
                            id: 'txt_leaders_symb',
                            symbolName: 'txt_leaders_symb',
                            type: 'rect',
                            rect: ['28', '30', '554', '399', 'auto', 'auto'],
                            opacity: 1
                        },
                        {
                            id: 'powerline-cover',
                            type: 'image',
                            rect: ['551', '119', '89px', '203px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"powerline-cover.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '640', '480', 'auto', 'auto'],
                            sizeRange: ['null','640px','undefined','undefined'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 9778,
                    autoPlay: false,
                    data: [
                        [
                            "dg176",
                            "location",
                            3775,
                            667,
                            "linear",
                            "${_03_glowballCopy8}",
                            [[778.4, 263.4, 138.38, 109.06, 0, 0,0],[888.66, 286.34, 0, 0, 19.24, -7.85,116.32]]
                        ],
                        [
                            "dg177",
                            "location",
                            4442,
                            500,
                            "linear",
                            "${_03_glowballCopy8}",
                            [[888.66, 286.34, 2.55, -1.16, 0, 0,0],[888.88, 286.5, 113.29, 69.36, -0.11, -0.08,0.82],[962.55, 309.16, 0, 0, 0, 0,78.7]]
                        ],
                        [
                            "dg178",
                            "location",
                            4942,
                            499,
                            "linear",
                            "${_03_glowballCopy8}",
                            [[962.55, 309.16, 0, 0, 0, 0,0],[1006.83, 325.5, 0, 0, 84.68, 12.28,47.56]]
                        ],
                        [
                            "dg179",
                            "location",
                            5775,
                            667,
                            "linear",
                            "${_03_glowballCopy8}",
                            [[778.4, 263.4, 138.38, 109.06, 0, 0,0],[888.66, 286.34, 0, 0, 19.24, -7.85,116.32]]
                        ],
                        [
                            "dg180",
                            "location",
                            6442,
                            500,
                            "linear",
                            "${_03_glowballCopy8}",
                            [[888.66, 286.34, 2.55, -1.16, 0, 0,0],[888.88, 286.5, 113.29, 69.36, -0.11, -0.08,0.82],[962.55, 309.16, 0, 0, 0, 0,78.7]]
                        ],
                        [
                            "dg181",
                            "location",
                            6942,
                            499,
                            "linear",
                            "${_03_glowballCopy8}",
                            [[962.55, 309.16, 0, 0, 0, 0,0],[1006.83, 325.5, 0, 0, 84.68, 12.28,47.56]]
                        ],
                        [
                            "dg182",
                            "location",
                            7775,
                            667,
                            "linear",
                            "${_03_glowballCopy8}",
                            [[778.4, 263.4, 138.38, 109.06, 0, 0,0],[888.66, 286.34, 0, 0, 19.24, -7.85,116.32]]
                        ],
                        [
                            "dg183",
                            "location",
                            8442,
                            500,
                            "linear",
                            "${_03_glowballCopy8}",
                            [[888.66, 286.34, 2.55, -1.16, 0, 0,0],[888.88, 286.5, 113.29, 69.36, -0.11, -0.08,0.82],[962.55, 309.16, 0, 0, 0, 0,78.7]]
                        ],
                        [
                            "dg184",
                            "location",
                            8942,
                            499,
                            "linear",
                            "${_03_glowballCopy8}",
                            [[962.55, 309.16, 0, 0, 0, 0,0],[1006.83, 325.5, 0, 0, 84.68, 12.28,47.56]]
                        ],
                        [
                            "dg163",
                            "scaleX",
                            3112,
                            1666,
                            "linear",
                            "${_03_glowballCopy}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg164",
                            "scaleX",
                            5112,
                            1666,
                            "linear",
                            "${_03_glowballCopy}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg165",
                            "scaleX",
                            7112,
                            1666,
                            "linear",
                            "${_03_glowballCopy}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg219",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_00_sluice_gate}",
                            '0',
                            '1'
                        ],
                        [
                            "dg56",
                            "opacity",
                            2749,
                            333,
                            "easeInOutSine",
                            "${_00_generator_glow}",
                            '0',
                            '0.8'
                        ],
                        [
                            "dg57",
                            "opacity",
                            3082,
                            333,
                            "linear",
                            "${_00_generator_glow}",
                            '0.8',
                            '0'
                        ],
                        [
                            "dg58",
                            "opacity",
                            3415,
                            333,
                            "easeInOutSine",
                            "${_00_generator_glow}",
                            '0',
                            '0.8'
                        ],
                        [
                            "dg59",
                            "opacity",
                            3748,
                            333,
                            "linear",
                            "${_00_generator_glow}",
                            '0.8',
                            '0'
                        ],
                        [
                            "dg60",
                            "opacity",
                            4081,
                            333,
                            "easeInOutSine",
                            "${_00_generator_glow}",
                            '0',
                            '0.8'
                        ],
                        [
                            "dg61",
                            "opacity",
                            4414,
                            333,
                            "linear",
                            "${_00_generator_glow}",
                            '0.8',
                            '0'
                        ],
                        [
                            "dg62",
                            "opacity",
                            4747,
                            333,
                            "easeInOutSine",
                            "${_00_generator_glow}",
                            '0',
                            '0.8'
                        ],
                        [
                            "dg63",
                            "opacity",
                            5080,
                            333,
                            "linear",
                            "${_00_generator_glow}",
                            '0.8',
                            '0'
                        ],
                        [
                            "dg64",
                            "opacity",
                            5413,
                            333,
                            "easeInOutSine",
                            "${_00_generator_glow}",
                            '0',
                            '0.8'
                        ],
                        [
                            "dg65",
                            "opacity",
                            5746,
                            333,
                            "linear",
                            "${_00_generator_glow}",
                            '0.8',
                            '0'
                        ],
                        [
                            "dg66",
                            "opacity",
                            6079,
                            333,
                            "easeInOutSine",
                            "${_00_generator_glow}",
                            '0',
                            '0.8'
                        ],
                        [
                            "dg67",
                            "opacity",
                            6412,
                            333,
                            "linear",
                            "${_00_generator_glow}",
                            '0.8',
                            '0'
                        ],
                        [
                            "dg68",
                            "opacity",
                            6745,
                            333,
                            "easeInOutSine",
                            "${_00_generator_glow}",
                            '0',
                            '0.8'
                        ],
                        [
                            "dg69",
                            "opacity",
                            7078,
                            333,
                            "linear",
                            "${_00_generator_glow}",
                            '0.8',
                            '0'
                        ],
                        [
                            "dg70",
                            "opacity",
                            7411,
                            333,
                            "easeInOutSine",
                            "${_00_generator_glow}",
                            '0',
                            '0.8'
                        ],
                        [
                            "dg71",
                            "opacity",
                            7744,
                            333,
                            "linear",
                            "${_00_generator_glow}",
                            '0.8',
                            '0'
                        ],
                        [
                            "dg72",
                            "opacity",
                            8077,
                            333,
                            "easeInOutSine",
                            "${_00_generator_glow}",
                            '0',
                            '0.8'
                        ],
                        [
                            "dg73",
                            "opacity",
                            8410,
                            333,
                            "linear",
                            "${_00_generator_glow}",
                            '0.8',
                            '0'
                        ],
                        [
                            "dg160",
                            "scaleY",
                            3112,
                            1666,
                            "linear",
                            "${_03_glowballCopy}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg161",
                            "scaleY",
                            5112,
                            1666,
                            "linear",
                            "${_03_glowballCopy}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg162",
                            "scaleY",
                            7112,
                            1666,
                            "linear",
                            "${_03_glowballCopy}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg136",
                            "display",
                            5112,
                            0,
                            "linear",
                            "${_03_glowball}",
                            'block',
                            'block'
                        ],
                        [
                            "dg137",
                            "display",
                            7112,
                            0,
                            "linear",
                            "${_03_glowball}",
                            'block',
                            'block'
                        ],
                        [
                            "dg138",
                            "display",
                            9112,
                            0,
                            "linear",
                            "${_03_glowball}",
                            'block',
                            'block'
                        ],
                        [
                            "dg74",
                            "display",
                            0,
                            0,
                            "linear",
                            "${stage_offset}",
                            'block',
                            'block'
                        ],
                        [
                            "dg204",
                            "background-position",
                            1000,
                            8652,
                            "easeInOutQuad",
                            "${_00_water_surface_left}",
                            [0,0],
                            [250,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg433",
                            "display",
                            3112,
                            0,
                            "linear",
                            "${glowballs1_parent}",
                            'none',
                            'block'
                        ],
                        [
                            "dg235",
                            "clip",
                            1000,
                            1163,
                            "linear",
                            "${_00_water_front_RIGHT_TOP}",
                            [106,111,247,111],
                            [39,405,247,111],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "dg236",
                            "clip",
                            2163,
                            7489,
                            "easeInOutQuad",
                            "${_00_water_front_RIGHT_TOP}",
                            [39,405,247,111],
                            [39,405,242,111],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "dg31",
                            "location",
                            3112,
                            667,
                            "linear",
                            "${_03_glowballCopy5}",
                            [[37.34, 11.96, 136.46, 132.05, 0, 0,0],[151.61, 32.88, 0, 0, 19.24, -7.85,122.16]]
                        ],
                        [
                            "dg32",
                            "location",
                            3779,
                            500,
                            "linear",
                            "${_03_glowballCopy5}",
                            [[151.61, 32.88, 1.16, -0.47, 0, 0,0],[152.57, 32.65, 150.37, 99.91, -3.86, 0.67,1.9],[212.73, 55.83, 0, 0, 0, 0,68.22]]
                        ],
                        [
                            "dg33",
                            "location",
                            4279,
                            499,
                            "linear",
                            "${_03_glowballCopy5}",
                            [[212.73, 55.83, 0, 0, 0, 0,0],[251.5, 72.5, 0, 0, 28.55, -11.64,43.03]]
                        ],
                        [
                            "dg34",
                            "location",
                            5112,
                            667,
                            "linear",
                            "${_03_glowballCopy5}",
                            [[37.34, 11.96, 136.46, 132.05, 0, 0,0],[151.61, 32.88, 0, 0, 19.24, -7.85,122.16]]
                        ],
                        [
                            "dg35",
                            "location",
                            5779,
                            500,
                            "linear",
                            "${_03_glowballCopy5}",
                            [[151.61, 32.88, 1.16, -0.47, 0, 0,0],[152.57, 32.65, 150.37, 99.91, -3.86, 0.67,1.9],[212.73, 55.83, 0, 0, 0, 0,68.22]]
                        ],
                        [
                            "dg36",
                            "location",
                            6279,
                            499,
                            "linear",
                            "${_03_glowballCopy5}",
                            [[212.73, 55.83, 0, 0, 0, 0,0],[251.5, 72.5, 0, 0, 28.55, -11.64,43.03]]
                        ],
                        [
                            "dg37",
                            "location",
                            7112,
                            667,
                            "linear",
                            "${_03_glowballCopy5}",
                            [[37.34, 11.96, 136.46, 132.05, 0, 0,0],[151.61, 32.88, 0, 0, 19.24, -7.85,122.16]]
                        ],
                        [
                            "dg38",
                            "location",
                            7779,
                            500,
                            "linear",
                            "${_03_glowballCopy5}",
                            [[151.61, 32.88, 1.16, -0.47, 0, 0,0],[152.57, 32.65, 150.37, 99.91, -3.86, 0.67,1.9],[212.73, 55.83, 0, 0, 0, 0,68.22]]
                        ],
                        [
                            "dg39",
                            "location",
                            8279,
                            499,
                            "linear",
                            "${_03_glowballCopy5}",
                            [[212.73, 55.83, 0, 0, 0, 0,0],[251.5, 72.5, 0, 0, 28.55, -11.64,43.03]]
                        ],
                        [
                            "dg444",
                            "display",
                            4441,
                            0,
                            "linear",
                            "${glowballs3_parent}",
                            'none',
                            'block'
                        ],
                        [
                            "dg93",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${_00_sluice_gate2}",
                            '1',
                            '0'
                        ],
                        [
                            "dg94",
                            "opacity",
                            8898,
                            511,
                            "linear",
                            "${_00_sluice_gate2}",
                            '0',
                            '1'
                        ],
                        [
                            "dg50",
                            "location",
                            4441,
                            667,
                            "linear",
                            "${_03_glowballCopy14}",
                            [[778.4, 263.4, 138.38, 109.06, 0, 0,0],[888.66, 286.34, 0, 0, 19.24, -7.85,116.32]]
                        ],
                        [
                            "dg51",
                            "location",
                            5108,
                            500,
                            "linear",
                            "${_03_glowballCopy14}",
                            [[888.66, 286.34, 2.55, -1.16, 0, 0,0],[888.88, 286.5, 113.29, 69.36, -0.11, -0.08,0.82],[962.55, 309.16, 0, 0, 0, 0,78.7]]
                        ],
                        [
                            "dg52",
                            "location",
                            5608,
                            499,
                            "linear",
                            "${_03_glowballCopy14}",
                            [[962.55, 309.16, 0, 0, 0, 0,0],[1006.83, 325.5, 0, 0, 84.68, 12.28,47.56]]
                        ],
                        [
                            "dg53",
                            "location",
                            6441,
                            667,
                            "linear",
                            "${_03_glowballCopy14}",
                            [[778.4, 263.4, 138.38, 109.06, 0, 0,0],[888.66, 286.34, 0, 0, 19.24, -7.85,116.32]]
                        ],
                        [
                            "dg54",
                            "location",
                            7108,
                            500,
                            "linear",
                            "${_03_glowballCopy14}",
                            [[888.66, 286.34, 2.55, -1.16, 0, 0,0],[888.88, 286.5, 113.29, 69.36, -0.11, -0.08,0.82],[962.55, 309.16, 0, 0, 0, 0,78.7]]
                        ],
                        [
                            "dg55",
                            "location",
                            7608,
                            499,
                            "linear",
                            "${_03_glowballCopy14}",
                            [[962.55, 309.16, 0, 0, 0, 0,0],[1006.83, 325.5, 0, 0, 84.68, 12.28,47.56]]
                        ],
                        [
                            "dg451",
                            "location",
                            3775,
                            667,
                            "linear",
                            "${_03_glowballCopy9}",
                            [[805.67, 265.96, 139.61, 171.5, 0, 0,0],[923.7, 331.07, 0, 0, 19.24, -7.85,138.6]]
                        ],
                        [
                            "dg452",
                            "location",
                            4442,
                            500,
                            "linear",
                            "${_03_glowballCopy9}",
                            [[923.7, 331.07, 1.16, -0.47, 0, 0,0],[924.18, 331.1, 141.2, 49.08, -0.11, -0.08,0.51],[983.01, 336.54, 0, 0, 0, 0,61.04]]
                        ],
                        [
                            "dg453",
                            "location",
                            4942,
                            499,
                            "linear",
                            "${_03_glowballCopy9}",
                            [[983.01, 336.54, 0, 0, 0, 0,0],[1020.62, 341.85, 0, 0, 26.34, -17.2,38.65]]
                        ],
                        [
                            "dg454",
                            "location",
                            5775,
                            667,
                            "linear",
                            "${_03_glowballCopy9}",
                            [[805.67, 265.96, 139.61, 171.5, 0, 0,0],[923.7, 331.07, 0, 0, 19.24, -7.85,138.6]]
                        ],
                        [
                            "dg455",
                            "location",
                            6442,
                            500,
                            "linear",
                            "${_03_glowballCopy9}",
                            [[923.7, 331.07, 1.16, -0.47, 0, 0,0],[924.18, 331.1, 141.2, 49.08, -0.11, -0.08,0.51],[983.01, 336.54, 0, 0, 0, 0,61.04]]
                        ],
                        [
                            "dg456",
                            "location",
                            6942,
                            499,
                            "linear",
                            "${_03_glowballCopy9}",
                            [[983.01, 336.54, 0, 0, 0, 0,0],[1020.62, 341.85, 0, 0, 26.34, -17.2,38.65]]
                        ],
                        [
                            "dg457",
                            "location",
                            7775,
                            667,
                            "linear",
                            "${_03_glowballCopy9}",
                            [[805.67, 265.96, 139.61, 171.5, 0, 0,0],[923.7, 331.07, 0, 0, 19.24, -7.85,138.6]]
                        ],
                        [
                            "dg458",
                            "location",
                            8442,
                            500,
                            "linear",
                            "${_03_glowballCopy9}",
                            [[923.7, 331.07, 1.16, -0.47, 0, 0,0],[924.18, 331.1, 141.2, 49.08, -0.11, -0.08,0.51],[983.01, 336.54, 0, 0, 0, 0,61.04]]
                        ],
                        [
                            "dg459",
                            "location",
                            8942,
                            499,
                            "linear",
                            "${_03_glowballCopy9}",
                            [[983.01, 336.54, 0, 0, 0, 0,0],[1020.62, 341.85, 0, 0, 26.34, -17.2,38.65]]
                        ],
                        [
                            "dg133",
                            "scaleX",
                            3112,
                            1666,
                            "linear",
                            "${_03_glowball}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg134",
                            "scaleX",
                            5112,
                            1666,
                            "linear",
                            "${_03_glowball}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg135",
                            "scaleX",
                            7112,
                            1666,
                            "linear",
                            "${_03_glowball}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg122",
                            "display",
                            3775,
                            0,
                            "linear",
                            "${glowballs2_parent}",
                            'none',
                            'block'
                        ],
                        [
                            "dg166",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${static_electricity}",
                            '1',
                            '0'
                        ],
                        [
                            "dg167",
                            "opacity",
                            9267,
                            511,
                            "linear",
                            "${static_electricity}",
                            '0',
                            '1'
                        ],
                        [
                            "dg208",
                            "location",
                            4441,
                            667,
                            "linear",
                            "${_03_glowballCopy16}",
                            [[805.34, 265.96, 178.69, 146.7, 0, 0,0],[928, 311.42, 0, 0, 19.24, -7.85,134.02]]
                        ],
                        [
                            "dg209",
                            "location",
                            5108,
                            500,
                            "linear",
                            "${_03_glowballCopy16}",
                            [[928, 311.42, 1.16, -0.47, 0, 0,0],[928.32, 310.9, 144.81, 61.64, -0.11, -0.08,0.67],[985.53, 324.81, 0, 0, 0, 0,60.38]]
                        ],
                        [
                            "dg210",
                            "location",
                            5608,
                            499,
                            "linear",
                            "${_03_glowballCopy16}",
                            [[985.53, 324.81, 0, 0, 0, 0,0],[1021.86, 334.5, 0, 0, 19.74, -10.95,38.01]]
                        ],
                        [
                            "dg211",
                            "location",
                            6441,
                            667,
                            "linear",
                            "${_03_glowballCopy16}",
                            [[805.34, 265.96, 178.69, 146.7, 0, 0,0],[928, 311.42, 0, 0, 19.24, -7.85,134.02]]
                        ],
                        [
                            "dg212",
                            "location",
                            7108,
                            500,
                            "linear",
                            "${_03_glowballCopy16}",
                            [[928, 311.42, 1.16, -0.47, 0, 0,0],[928.32, 310.9, 144.81, 61.64, -0.11, -0.08,0.67],[985.53, 324.81, 0, 0, 0, 0,60.38]]
                        ],
                        [
                            "dg213",
                            "location",
                            7608,
                            499,
                            "linear",
                            "${_03_glowballCopy16}",
                            [[985.53, 324.81, 0, 0, 0, 0,0],[1021.86, 334.5, 0, 0, 19.74, -10.95,38.01]]
                        ],
                        [
                            "dg168",
                            "clip",
                            0,
                            0,
                            "linear",
                            "${_00_water_front_RIGHT_TOPCopy}",
                            [39,405,247,111],
                            [39,405,247,111],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "dg169",
                            "opacity",
                            0,
                            500,
                            "easeInOutQuad",
                            "${_00_water_front_RIGHT_TOPCopy}",
                            '0.9',
                            '0'
                        ],
                        [
                            "dg238",
                            "background-position",
                            2089,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg239",
                            "background-position",
                            2122,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg240",
                            "background-position",
                            2155,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg241",
                            "background-position",
                            2188,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg242",
                            "background-position",
                            2221,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg243",
                            "background-position",
                            2254,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg244",
                            "background-position",
                            2287,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg245",
                            "background-position",
                            2320,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg246",
                            "background-position",
                            2353,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg247",
                            "background-position",
                            2386,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg248",
                            "background-position",
                            2419,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg249",
                            "background-position",
                            2452,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg250",
                            "background-position",
                            2485,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg251",
                            "background-position",
                            2518,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg252",
                            "background-position",
                            2551,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg253",
                            "background-position",
                            2584,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg254",
                            "background-position",
                            2617,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg255",
                            "background-position",
                            2650,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg256",
                            "background-position",
                            2683,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg257",
                            "background-position",
                            2716,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg258",
                            "background-position",
                            2749,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg259",
                            "background-position",
                            2782,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg260",
                            "background-position",
                            2815,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg261",
                            "background-position",
                            2848,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg262",
                            "background-position",
                            2881,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg263",
                            "background-position",
                            2914,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg264",
                            "background-position",
                            2947,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg265",
                            "background-position",
                            2980,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg266",
                            "background-position",
                            3013,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg267",
                            "background-position",
                            3046,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg268",
                            "background-position",
                            3079,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg269",
                            "background-position",
                            3112,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg270",
                            "background-position",
                            3145,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg271",
                            "background-position",
                            3178,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg272",
                            "background-position",
                            3211,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg273",
                            "background-position",
                            3244,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg274",
                            "background-position",
                            3277,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg275",
                            "background-position",
                            3310,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg276",
                            "background-position",
                            3343,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg277",
                            "background-position",
                            3376,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg278",
                            "background-position",
                            3409,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg279",
                            "background-position",
                            3442,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg280",
                            "background-position",
                            3475,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg281",
                            "background-position",
                            3508,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg282",
                            "background-position",
                            3541,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg283",
                            "background-position",
                            3574,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg284",
                            "background-position",
                            3607,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg285",
                            "background-position",
                            3640,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg286",
                            "background-position",
                            3673,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg287",
                            "background-position",
                            3706,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg288",
                            "background-position",
                            3739,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg289",
                            "background-position",
                            3772,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg290",
                            "background-position",
                            3805,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg291",
                            "background-position",
                            3838,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg292",
                            "background-position",
                            3871,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg293",
                            "background-position",
                            3904,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg294",
                            "background-position",
                            3937,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg295",
                            "background-position",
                            3970,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg296",
                            "background-position",
                            4003,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg297",
                            "background-position",
                            4035,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg298",
                            "background-position",
                            4069,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg299",
                            "background-position",
                            4102,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg300",
                            "background-position",
                            4135,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg301",
                            "background-position",
                            4168,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg302",
                            "background-position",
                            4201,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg303",
                            "background-position",
                            4234,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg304",
                            "background-position",
                            4267,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg305",
                            "background-position",
                            4300,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg306",
                            "background-position",
                            4333,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg307",
                            "background-position",
                            4366,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg308",
                            "background-position",
                            4399,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg309",
                            "background-position",
                            4432,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg310",
                            "background-position",
                            4465,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg311",
                            "background-position",
                            4498,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg312",
                            "background-position",
                            4531,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg313",
                            "background-position",
                            4564,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg314",
                            "background-position",
                            4597,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg315",
                            "background-position",
                            4630,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg316",
                            "background-position",
                            4663,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg317",
                            "background-position",
                            4696,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg318",
                            "background-position",
                            4729,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg319",
                            "background-position",
                            4762,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg320",
                            "background-position",
                            4795,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg321",
                            "background-position",
                            4828,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg322",
                            "background-position",
                            4861,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg323",
                            "background-position",
                            4894,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg324",
                            "background-position",
                            4927,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg325",
                            "background-position",
                            4960,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg326",
                            "background-position",
                            4993,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg327",
                            "background-position",
                            5026,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg328",
                            "background-position",
                            5059,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg329",
                            "background-position",
                            5092,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg330",
                            "background-position",
                            5125,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg331",
                            "background-position",
                            5158,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg332",
                            "background-position",
                            5191,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg333",
                            "background-position",
                            5224,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg334",
                            "background-position",
                            5257,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg335",
                            "background-position",
                            5290,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg336",
                            "background-position",
                            5323,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg337",
                            "background-position",
                            5356,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg338",
                            "background-position",
                            5389,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg339",
                            "background-position",
                            5422,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg340",
                            "background-position",
                            5455,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg341",
                            "background-position",
                            5488,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg342",
                            "background-position",
                            5521,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg343",
                            "background-position",
                            5554,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg344",
                            "background-position",
                            5587,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg345",
                            "background-position",
                            5620,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg346",
                            "background-position",
                            5653,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg347",
                            "background-position",
                            5686,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg348",
                            "background-position",
                            5719,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg349",
                            "background-position",
                            5752,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg350",
                            "background-position",
                            5785,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg351",
                            "background-position",
                            5818,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg352",
                            "background-position",
                            5851,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg353",
                            "background-position",
                            5884,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg354",
                            "background-position",
                            5917,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg355",
                            "background-position",
                            5950,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg356",
                            "background-position",
                            5983,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg357",
                            "background-position",
                            6016,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg358",
                            "background-position",
                            6049,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg359",
                            "background-position",
                            6082,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg360",
                            "background-position",
                            6115,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg361",
                            "background-position",
                            6148,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg362",
                            "background-position",
                            6181,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg363",
                            "background-position",
                            6214,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg364",
                            "background-position",
                            6247,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg365",
                            "background-position",
                            6280,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg366",
                            "background-position",
                            6313,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg367",
                            "background-position",
                            6346,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg368",
                            "background-position",
                            6379,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg369",
                            "background-position",
                            6412,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg370",
                            "background-position",
                            6445,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg371",
                            "background-position",
                            6478,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg372",
                            "background-position",
                            6511,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg373",
                            "background-position",
                            6544,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg374",
                            "background-position",
                            6577,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg375",
                            "background-position",
                            6610,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg376",
                            "background-position",
                            6643,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg377",
                            "background-position",
                            6676,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg378",
                            "background-position",
                            6709,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg379",
                            "background-position",
                            6742,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg380",
                            "background-position",
                            6775,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg381",
                            "background-position",
                            6808,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg382",
                            "background-position",
                            6841,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg383",
                            "background-position",
                            6874,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg384",
                            "background-position",
                            6907,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg385",
                            "background-position",
                            6940,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg386",
                            "background-position",
                            6973,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg387",
                            "background-position",
                            7006,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg388",
                            "background-position",
                            7039,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg389",
                            "background-position",
                            7072,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg390",
                            "background-position",
                            7105,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg391",
                            "background-position",
                            7138,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg392",
                            "background-position",
                            7171,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg393",
                            "background-position",
                            7204,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg394",
                            "background-position",
                            7237,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg395",
                            "background-position",
                            7270,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg396",
                            "background-position",
                            7303,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg397",
                            "background-position",
                            7336,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg398",
                            "background-position",
                            7369,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg399",
                            "background-position",
                            7402,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg400",
                            "background-position",
                            7435,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg401",
                            "background-position",
                            7468,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg402",
                            "background-position",
                            7501,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg403",
                            "background-position",
                            7534,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg404",
                            "background-position",
                            7567,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg405",
                            "background-position",
                            7600,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg406",
                            "background-position",
                            7633,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg407",
                            "background-position",
                            7666,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg408",
                            "background-position",
                            7699,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg409",
                            "background-position",
                            7732,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg410",
                            "background-position",
                            7765,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg411",
                            "background-position",
                            7798,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg412",
                            "background-position",
                            7831,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg413",
                            "background-position",
                            7864,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg414",
                            "background-position",
                            7897,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg415",
                            "background-position",
                            7930,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg416",
                            "background-position",
                            7963,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg417",
                            "background-position",
                            7996,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg418",
                            "background-position",
                            8029,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg419",
                            "background-position",
                            8061,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg420",
                            "background-position",
                            8095,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg421",
                            "background-position",
                            8128,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg422",
                            "background-position",
                            8161,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg423",
                            "background-position",
                            8194,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg424",
                            "background-position",
                            8227,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg425",
                            "background-position",
                            8260,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-101,0],
                            [-152,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg426",
                            "background-position",
                            8293,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-152,0],
                            [-202,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg427",
                            "background-position",
                            8326,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-202,0],
                            [-252,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg428",
                            "background-position",
                            8359,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-252,0],
                            [-302,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg429",
                            "background-position",
                            8392,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-302,0],
                            [-353,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg430",
                            "background-position",
                            8425,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-353,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg431",
                            "background-position",
                            8458,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,0],
                            [-51,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg432",
                            "background-position",
                            8491,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [-51,0],
                            [-101,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg232",
                            "scaleX",
                            3112,
                            1666,
                            "linear",
                            "${_03_glowballCopy2}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg233",
                            "scaleX",
                            5112,
                            1666,
                            "linear",
                            "${_03_glowballCopy2}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg234",
                            "scaleX",
                            7112,
                            1666,
                            "linear",
                            "${_03_glowballCopy2}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg479",
                            "scaleX",
                            3775,
                            1666,
                            "linear",
                            "${_03_glowballCopy11}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg480",
                            "scaleX",
                            5775,
                            1666,
                            "linear",
                            "${_03_glowballCopy11}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg481",
                            "scaleX",
                            7775,
                            1666,
                            "linear",
                            "${_03_glowballCopy11}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg110",
                            "location",
                            4441,
                            667,
                            "linear",
                            "${_03_glowballCopy17}",
                            [[805.34, 265.96, 136.46, 132.05, 0, 0,0],[919.61, 286.88, 0, 0, 19.24, -7.85,122.16]]
                        ],
                        [
                            "dg111",
                            "location",
                            5108,
                            500,
                            "linear",
                            "${_03_glowballCopy17}",
                            [[919.61, 286.88, 1.16, -0.47, 0, 0,0],[920.57, 286.65, 150.37, 99.91, -3.86, 0.67,1.9],[980.73, 309.83, 0, 0, 0, 0,68.22]]
                        ],
                        [
                            "dg112",
                            "location",
                            5608,
                            499,
                            "linear",
                            "${_03_glowballCopy17}",
                            [[980.73, 309.83, 0, 0, 0, 0,0],[1019.5, 326.5, 0, 0, 28.55, -11.64,43.03]]
                        ],
                        [
                            "dg113",
                            "location",
                            6441,
                            667,
                            "linear",
                            "${_03_glowballCopy17}",
                            [[805.34, 265.96, 136.46, 132.05, 0, 0,0],[919.61, 286.88, 0, 0, 19.24, -7.85,122.16]]
                        ],
                        [
                            "dg114",
                            "location",
                            7108,
                            500,
                            "linear",
                            "${_03_glowballCopy17}",
                            [[919.61, 286.88, 1.16, -0.47, 0, 0,0],[920.57, 286.65, 150.37, 99.91, -3.86, 0.67,1.9],[980.73, 309.83, 0, 0, 0, 0,68.22]]
                        ],
                        [
                            "dg115",
                            "location",
                            7608,
                            499,
                            "linear",
                            "${_03_glowballCopy17}",
                            [[980.73, 309.83, 0, 0, 0, 0,0],[1019.5, 326.5, 0, 0, 28.55, -11.64,43.03]]
                        ],
                        [
                            "dg127",
                            "location",
                            4441,
                            667,
                            "linear",
                            "${_03_glowballCopy15}",
                            [[805.67, 265.96, 139.61, 171.5, 0, 0,0],[923.7, 331.07, 0, 0, 19.24, -7.85,138.6]]
                        ],
                        [
                            "dg128",
                            "location",
                            5108,
                            500,
                            "linear",
                            "${_03_glowballCopy15}",
                            [[923.7, 331.07, 1.16, -0.47, 0, 0,0],[924.18, 331.1, 141.2, 49.08, -0.11, -0.08,0.51],[983.01, 336.54, 0, 0, 0, 0,61.04]]
                        ],
                        [
                            "dg129",
                            "location",
                            5608,
                            499,
                            "linear",
                            "${_03_glowballCopy15}",
                            [[983.01, 336.54, 0, 0, 0, 0,0],[1020.62, 341.85, 0, 0, 26.34, -17.2,38.65]]
                        ],
                        [
                            "dg130",
                            "location",
                            6441,
                            667,
                            "linear",
                            "${_03_glowballCopy15}",
                            [[805.67, 265.96, 139.61, 171.5, 0, 0,0],[923.7, 331.07, 0, 0, 19.24, -7.85,138.6]]
                        ],
                        [
                            "dg131",
                            "location",
                            7108,
                            500,
                            "linear",
                            "${_03_glowballCopy15}",
                            [[923.7, 331.07, 1.16, -0.47, 0, 0,0],[924.18, 331.1, 141.2, 49.08, -0.11, -0.08,0.51],[983.01, 336.54, 0, 0, 0, 0,61.04]]
                        ],
                        [
                            "dg132",
                            "location",
                            7608,
                            499,
                            "linear",
                            "${_03_glowballCopy15}",
                            [[983.01, 336.54, 0, 0, 0, 0,0],[1020.62, 341.85, 0, 0, 26.34, -17.2,38.65]]
                        ],
                        [
                            "dg116",
                            "scaleY",
                            4441,
                            1666,
                            "linear",
                            "${_03_glowballCopy17}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg117",
                            "scaleY",
                            6441,
                            1666,
                            "linear",
                            "${_03_glowballCopy17}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "eid108",
                            "top",
                            1000,
                            8652,
                            "easeInOutQuad",
                            "${_00_water_cover}",
                            '299px',
                            '291px'
                        ],
                        [
                            "dg78",
                            "scaleX",
                            3775,
                            1666,
                            "linear",
                            "${_03_glowballCopy6}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg79",
                            "scaleX",
                            5775,
                            1666,
                            "linear",
                            "${_03_glowballCopy6}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg80",
                            "scaleX",
                            7775,
                            1666,
                            "linear",
                            "${_03_glowballCopy6}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg22",
                            "location",
                            3775,
                            667,
                            "linear",
                            "${_03_glowballCopy10}",
                            [[805.34, 265.96, 178.69, 146.7, 0, 0,0],[928, 311.42, 0, 0, 19.24, -7.85,134.02]]
                        ],
                        [
                            "dg23",
                            "location",
                            4442,
                            500,
                            "linear",
                            "${_03_glowballCopy10}",
                            [[928, 311.42, 1.16, -0.47, 0, 0,0],[928.32, 310.9, 144.81, 61.64, -0.11, -0.08,0.67],[985.53, 324.81, 0, 0, 0, 0,60.38]]
                        ],
                        [
                            "dg24",
                            "location",
                            4942,
                            499,
                            "linear",
                            "${_03_glowballCopy10}",
                            [[985.53, 324.81, 0, 0, 0, 0,0],[1021.86, 334.5, 0, 0, 19.74, -10.95,38.01]]
                        ],
                        [
                            "dg25",
                            "location",
                            5775,
                            667,
                            "linear",
                            "${_03_glowballCopy10}",
                            [[805.34, 265.96, 178.69, 146.7, 0, 0,0],[928, 311.42, 0, 0, 19.24, -7.85,134.02]]
                        ],
                        [
                            "dg26",
                            "location",
                            6442,
                            500,
                            "linear",
                            "${_03_glowballCopy10}",
                            [[928, 311.42, 1.16, -0.47, 0, 0,0],[928.32, 310.9, 144.81, 61.64, -0.11, -0.08,0.67],[985.53, 324.81, 0, 0, 0, 0,60.38]]
                        ],
                        [
                            "dg27",
                            "location",
                            6942,
                            499,
                            "linear",
                            "${_03_glowballCopy10}",
                            [[985.53, 324.81, 0, 0, 0, 0,0],[1021.86, 334.5, 0, 0, 19.74, -10.95,38.01]]
                        ],
                        [
                            "dg28",
                            "location",
                            7775,
                            667,
                            "linear",
                            "${_03_glowballCopy10}",
                            [[805.34, 265.96, 178.69, 146.7, 0, 0,0],[928, 311.42, 0, 0, 19.24, -7.85,134.02]]
                        ],
                        [
                            "dg29",
                            "location",
                            8442,
                            500,
                            "linear",
                            "${_03_glowballCopy10}",
                            [[928, 311.42, 1.16, -0.47, 0, 0,0],[928.32, 310.9, 144.81, 61.64, -0.11, -0.08,0.67],[985.53, 324.81, 0, 0, 0, 0,60.38]]
                        ],
                        [
                            "dg30",
                            "location",
                            8942,
                            499,
                            "linear",
                            "${_03_glowballCopy10}",
                            [[985.53, 324.81, 0, 0, 0, 0,0],[1021.86, 334.5, 0, 0, 19.74, -10.95,38.01]]
                        ],
                        [
                            "dg229",
                            "scaleY",
                            3112,
                            1666,
                            "linear",
                            "${_03_glowballCopy2}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg230",
                            "scaleY",
                            5112,
                            1666,
                            "linear",
                            "${_03_glowballCopy2}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg231",
                            "scaleY",
                            7112,
                            1666,
                            "linear",
                            "${_03_glowballCopy2}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg185",
                            "location",
                            3112,
                            667,
                            "linear",
                            "${_03_glowballCopy3}",
                            [[37.67, 11.96, 139.61, 171.5, 0, 0,0],[155.7, 77.07, 0, 0, 19.24, -7.85,138.6]]
                        ],
                        [
                            "dg186",
                            "location",
                            3779,
                            500,
                            "linear",
                            "${_03_glowballCopy3}",
                            [[155.7, 77.07, 1.16, -0.47, 0, 0,0],[156.18, 77.1, 141.2, 49.08, -0.11, -0.08,0.51],[215.01, 82.54, 0, 0, 0, 0,61.04]]
                        ],
                        [
                            "dg187",
                            "location",
                            4279,
                            499,
                            "linear",
                            "${_03_glowballCopy3}",
                            [[215.01, 82.54, 0, 0, 0, 0,0],[252.62, 87.85, 0, 0, 26.34, -17.2,38.65]]
                        ],
                        [
                            "dg188",
                            "location",
                            5112,
                            667,
                            "linear",
                            "${_03_glowballCopy3}",
                            [[37.67, 11.96, 139.61, 171.5, 0, 0,0],[155.7, 77.07, 0, 0, 19.24, -7.85,138.6]]
                        ],
                        [
                            "dg189",
                            "location",
                            5779,
                            500,
                            "linear",
                            "${_03_glowballCopy3}",
                            [[155.7, 77.07, 1.16, -0.47, 0, 0,0],[156.18, 77.1, 141.2, 49.08, -0.11, -0.08,0.51],[215.01, 82.54, 0, 0, 0, 0,61.04]]
                        ],
                        [
                            "dg190",
                            "location",
                            6279,
                            499,
                            "linear",
                            "${_03_glowballCopy3}",
                            [[215.01, 82.54, 0, 0, 0, 0,0],[252.62, 87.85, 0, 0, 26.34, -17.2,38.65]]
                        ],
                        [
                            "dg191",
                            "location",
                            7112,
                            667,
                            "linear",
                            "${_03_glowballCopy3}",
                            [[37.67, 11.96, 139.61, 171.5, 0, 0,0],[155.7, 77.07, 0, 0, 19.24, -7.85,138.6]]
                        ],
                        [
                            "dg192",
                            "location",
                            7779,
                            500,
                            "linear",
                            "${_03_glowballCopy3}",
                            [[155.7, 77.07, 1.16, -0.47, 0, 0,0],[156.18, 77.1, 141.2, 49.08, -0.11, -0.08,0.51],[215.01, 82.54, 0, 0, 0, 0,61.04]]
                        ],
                        [
                            "dg193",
                            "location",
                            8279,
                            499,
                            "linear",
                            "${_03_glowballCopy3}",
                            [[215.01, 82.54, 0, 0, 0, 0,0],[252.62, 87.85, 0, 0, 26.34, -17.2,38.65]]
                        ],
                        [
                            "dg96",
                            "location",
                            4441,
                            667,
                            "linear",
                            "${_03_glowballCopy12}",
                            [[778.4, 263.4, 112.55, 164.85, 0, 0,0],[885.23, 330.84, 0, 0, 43.28, 2.87,130.1]]
                        ],
                        [
                            "dg97",
                            "location",
                            5108,
                            500,
                            "linear",
                            "${_03_glowballCopy12}",
                            [[885.23, 330.84, 16.51, 5.9, 0, 0,0],[960.32, 335.8, 0, 0, 76.05, -6.67,75.43]]
                        ],
                        [
                            "dg98",
                            "location",
                            5608,
                            499,
                            "linear",
                            "${_03_glowballCopy12}",
                            [[960.32, 335.8, 0, 0, 0, 0,0],[1006.5, 341.5, 0, 0, 57.64, 0.66,46.58]]
                        ],
                        [
                            "dg99",
                            "location",
                            6441,
                            667,
                            "linear",
                            "${_03_glowballCopy12}",
                            [[778.4, 263.4, 112.55, 164.85, 0, 0,0],[885.23, 330.84, 0, 0, 43.28, 2.87,130.1]]
                        ],
                        [
                            "dg100",
                            "location",
                            7108,
                            500,
                            "linear",
                            "${_03_glowballCopy12}",
                            [[885.23, 330.84, 16.51, 5.9, 0, 0,0],[960.32, 335.8, 0, 0, 76.05, -6.67,75.43]]
                        ],
                        [
                            "dg101",
                            "location",
                            7608,
                            499,
                            "linear",
                            "${_03_glowballCopy12}",
                            [[960.32, 335.8, 0, 0, 0, 0,0],[1006.5, 341.5, 0, 0, 57.64, 0.66,46.58]]
                        ],
                        [
                            "dg125",
                            "scaleY",
                            4441,
                            1666,
                            "linear",
                            "${_03_glowballCopy15}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg126",
                            "scaleY",
                            6441,
                            1666,
                            "linear",
                            "${_03_glowballCopy15}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg438",
                            "location",
                            4441,
                            667,
                            "linear",
                            "${_03_glowballCopy13}",
                            [[778.4, 263.4, 163.93, 155.03, 0, 0,0],[881.2, 311.25, 0, 0, 19.24, -7.85,116.9]]
                        ],
                        [
                            "dg439",
                            "location",
                            5108,
                            500,
                            "linear",
                            "${_03_glowballCopy13}",
                            [[881.2, 311.25, 2.55, -1.16, 0, 0,0],[881.19, 311.11, 124.44, 66.78, -0.11, -0.08,0.79],[957.05, 325, 0, 0, 7.66, -13.77,80.39]]
                        ],
                        [
                            "dg440",
                            "location",
                            5608,
                            499,
                            "linear",
                            "${_03_glowballCopy13}",
                            [[957.05, 325, 0, 0, 0, 0,0],[1005.5, 335.5, 0, 0, 50.87, -17.79,50.46]]
                        ],
                        [
                            "dg441",
                            "location",
                            6441,
                            667,
                            "linear",
                            "${_03_glowballCopy13}",
                            [[778.4, 263.4, 163.93, 155.03, 0, 0,0],[881.2, 311.25, 0, 0, 19.24, -7.85,116.9]]
                        ],
                        [
                            "dg442",
                            "location",
                            7108,
                            500,
                            "linear",
                            "${_03_glowballCopy13}",
                            [[881.2, 311.25, 2.55, -1.16, 0, 0,0],[881.19, 311.11, 124.44, 66.78, -0.11, -0.08,0.79],[957.05, 325, 0, 0, 7.66, -13.77,80.39]]
                        ],
                        [
                            "dg443",
                            "location",
                            7608,
                            499,
                            "linear",
                            "${_03_glowballCopy13}",
                            [[957.05, 325, 0, 0, 0, 0,0],[1005.5, 335.5, 0, 0, 50.87, -17.79,50.46]]
                        ],
                        [
                            "dg463",
                            "background-position",
                            1000,
                            8652,
                            "easeInOutQuad",
                            "${_00_water_surface_right}",
                            [0,0],
                            [250,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "dg48",
                            "scaleY",
                            4441,
                            1666,
                            "linear",
                            "${_03_glowballCopy14}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg49",
                            "scaleY",
                            6441,
                            1666,
                            "linear",
                            "${_03_glowballCopy14}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg216",
                            "scaleX",
                            4441,
                            1666,
                            "linear",
                            "${_03_glowballCopy16}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg217",
                            "scaleX",
                            6441,
                            1666,
                            "linear",
                            "${_03_glowballCopy16}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg16",
                            "scaleX",
                            3775,
                            1666,
                            "linear",
                            "${_03_glowballCopy10}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg17",
                            "scaleX",
                            5775,
                            1666,
                            "linear",
                            "${_03_glowballCopy10}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg18",
                            "scaleX",
                            7775,
                            1666,
                            "linear",
                            "${_03_glowballCopy10}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg200",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${txt_leaders_symb}",
                            '1',
                            '0'
                        ],
                        [
                            "dg201",
                            "opacity",
                            9267,
                            511,
                            "linear",
                            "${txt_leaders_symb}",
                            '0',
                            '1'
                        ],
                        [
                            "dg13",
                            "scaleX",
                            3112,
                            1666,
                            "linear",
                            "${_03_glowballCopy4}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg14",
                            "scaleX",
                            5112,
                            1666,
                            "linear",
                            "${_03_glowballCopy4}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg15",
                            "scaleX",
                            7112,
                            1666,
                            "linear",
                            "${_03_glowballCopy4}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg197",
                            "scaleX",
                            3112,
                            1666,
                            "linear",
                            "${_03_glowballCopy3}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg198",
                            "scaleX",
                            5112,
                            1666,
                            "linear",
                            "${_03_glowballCopy3}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg199",
                            "scaleX",
                            7112,
                            1666,
                            "linear",
                            "${_03_glowballCopy3}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg84",
                            "location",
                            3775,
                            667,
                            "linear",
                            "${_03_glowballCopy6}",
                            [[778.4, 263.4, 112.55, 164.85, 0, 0,0],[885.23, 330.84, 0, 0, 43.28, 2.87,130.1]]
                        ],
                        [
                            "dg85",
                            "location",
                            4442,
                            500,
                            "linear",
                            "${_03_glowballCopy6}",
                            [[885.23, 330.84, 16.51, 5.9, 0, 0,0],[960.32, 335.8, 0, 0, 76.05, -6.67,75.43]]
                        ],
                        [
                            "dg86",
                            "location",
                            4942,
                            499,
                            "linear",
                            "${_03_glowballCopy6}",
                            [[960.32, 335.8, 0, 0, 0, 0,0],[1006.5, 341.5, 0, 0, 57.64, 0.66,46.58]]
                        ],
                        [
                            "dg87",
                            "location",
                            5775,
                            667,
                            "linear",
                            "${_03_glowballCopy6}",
                            [[778.4, 263.4, 112.55, 164.85, 0, 0,0],[885.23, 330.84, 0, 0, 43.28, 2.87,130.1]]
                        ],
                        [
                            "dg88",
                            "location",
                            6442,
                            500,
                            "linear",
                            "${_03_glowballCopy6}",
                            [[885.23, 330.84, 16.51, 5.9, 0, 0,0],[960.32, 335.8, 0, 0, 76.05, -6.67,75.43]]
                        ],
                        [
                            "dg89",
                            "location",
                            6942,
                            499,
                            "linear",
                            "${_03_glowballCopy6}",
                            [[960.32, 335.8, 0, 0, 0, 0,0],[1006.5, 341.5, 0, 0, 57.64, 0.66,46.58]]
                        ],
                        [
                            "dg90",
                            "location",
                            7775,
                            667,
                            "linear",
                            "${_03_glowballCopy6}",
                            [[778.4, 263.4, 112.55, 164.85, 0, 0,0],[885.23, 330.84, 0, 0, 43.28, 2.87,130.1]]
                        ],
                        [
                            "dg91",
                            "location",
                            8442,
                            500,
                            "linear",
                            "${_03_glowballCopy6}",
                            [[885.23, 330.84, 16.51, 5.9, 0, 0,0],[960.32, 335.8, 0, 0, 76.05, -6.67,75.43]]
                        ],
                        [
                            "dg92",
                            "location",
                            8942,
                            499,
                            "linear",
                            "${_03_glowballCopy6}",
                            [[960.32, 335.8, 0, 0, 0, 0,0],[1006.5, 341.5, 0, 0, 57.64, 0.66,46.58]]
                        ],
                        [
                            "dg95",
                            "display",
                            6441,
                            0,
                            "linear",
                            "${_03_glowballCopy12}",
                            'block',
                            'block'
                        ],
                        [
                            "dg142",
                            "location",
                            3112,
                            667,
                            "linear",
                            "${_03_glowball}",
                            [[10.4, 9.4, 112.55, 164.85, 0, 0,0],[117.23, 76.84, 0, 0, 43.28, 2.87,130.1]]
                        ],
                        [
                            "dg143",
                            "location",
                            3779,
                            500,
                            "linear",
                            "${_03_glowball}",
                            [[117.23, 76.84, 16.51, 5.9, 0, 0,0],[192.32, 81.8, 0, 0, 76.05, -6.67,75.43]]
                        ],
                        [
                            "dg144",
                            "location",
                            4279,
                            499,
                            "linear",
                            "${_03_glowball}",
                            [[192.32, 81.8, 0, 0, 0, 0,0],[238.5, 87.5, 0, 0, 57.64, 0.66,46.58]]
                        ],
                        [
                            "dg145",
                            "location",
                            5112,
                            667,
                            "linear",
                            "${_03_glowball}",
                            [[10.4, 9.4, 112.55, 164.85, 0, 0,0],[117.23, 76.84, 0, 0, 43.28, 2.87,130.1]]
                        ],
                        [
                            "dg146",
                            "location",
                            5779,
                            500,
                            "linear",
                            "${_03_glowball}",
                            [[117.23, 76.84, 16.51, 5.9, 0, 0,0],[192.32, 81.8, 0, 0, 76.05, -6.67,75.43]]
                        ],
                        [
                            "dg147",
                            "location",
                            6279,
                            499,
                            "linear",
                            "${_03_glowball}",
                            [[192.32, 81.8, 0, 0, 0, 0,0],[238.5, 87.5, 0, 0, 57.64, 0.66,46.58]]
                        ],
                        [
                            "dg148",
                            "location",
                            7112,
                            667,
                            "linear",
                            "${_03_glowball}",
                            [[10.4, 9.4, 112.55, 164.85, 0, 0,0],[117.23, 76.84, 0, 0, 43.28, 2.87,130.1]]
                        ],
                        [
                            "dg149",
                            "location",
                            7779,
                            500,
                            "linear",
                            "${_03_glowball}",
                            [[117.23, 76.84, 16.51, 5.9, 0, 0,0],[192.32, 81.8, 0, 0, 76.05, -6.67,75.43]]
                        ],
                        [
                            "dg150",
                            "location",
                            8279,
                            499,
                            "linear",
                            "${_03_glowball}",
                            [[192.32, 81.8, 0, 0, 0, 0,0],[238.5, 87.5, 0, 0, 57.64, 0.66,46.58]]
                        ],
                        [
                            "dg237",
                            "clip",
                            2089,
                            0,
                            "linear",
                            "${turbine_spritesheet}",
                            [0,52.66552734375,52,0],
                            [0,52.66552734375,52,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "dg102",
                            "scaleY",
                            4441,
                            1666,
                            "linear",
                            "${_03_glowballCopy12}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg103",
                            "scaleY",
                            6441,
                            1666,
                            "linear",
                            "${_03_glowballCopy12}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg173",
                            "scaleY",
                            3775,
                            1666,
                            "linear",
                            "${_03_glowballCopy8}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg174",
                            "scaleY",
                            5775,
                            1666,
                            "linear",
                            "${_03_glowballCopy8}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg175",
                            "scaleY",
                            7775,
                            1666,
                            "linear",
                            "${_03_glowballCopy8}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg485",
                            "location",
                            3775,
                            667,
                            "linear",
                            "${_03_glowballCopy11}",
                            [[805.34, 265.96, 136.46, 132.05, 0, 0,0],[919.61, 286.88, 0, 0, 19.24, -7.85,122.16]]
                        ],
                        [
                            "dg486",
                            "location",
                            4442,
                            500,
                            "linear",
                            "${_03_glowballCopy11}",
                            [[919.61, 286.88, 1.16, -0.47, 0, 0,0],[920.57, 286.65, 150.37, 99.91, -3.86, 0.67,1.9],[980.73, 309.83, 0, 0, 0, 0,68.22]]
                        ],
                        [
                            "dg487",
                            "location",
                            4942,
                            499,
                            "linear",
                            "${_03_glowballCopy11}",
                            [[980.73, 309.83, 0, 0, 0, 0,0],[1019.5, 326.5, 0, 0, 28.55, -11.64,43.03]]
                        ],
                        [
                            "dg488",
                            "location",
                            5775,
                            667,
                            "linear",
                            "${_03_glowballCopy11}",
                            [[805.34, 265.96, 136.46, 132.05, 0, 0,0],[919.61, 286.88, 0, 0, 19.24, -7.85,122.16]]
                        ],
                        [
                            "dg489",
                            "location",
                            6442,
                            500,
                            "linear",
                            "${_03_glowballCopy11}",
                            [[919.61, 286.88, 1.16, -0.47, 0, 0,0],[920.57, 286.65, 150.37, 99.91, -3.86, 0.67,1.9],[980.73, 309.83, 0, 0, 0, 0,68.22]]
                        ],
                        [
                            "dg490",
                            "location",
                            6942,
                            499,
                            "linear",
                            "${_03_glowballCopy11}",
                            [[980.73, 309.83, 0, 0, 0, 0,0],[1019.5, 326.5, 0, 0, 28.55, -11.64,43.03]]
                        ],
                        [
                            "dg491",
                            "location",
                            7775,
                            667,
                            "linear",
                            "${_03_glowballCopy11}",
                            [[805.34, 265.96, 136.46, 132.05, 0, 0,0],[919.61, 286.88, 0, 0, 19.24, -7.85,122.16]]
                        ],
                        [
                            "dg492",
                            "location",
                            8442,
                            500,
                            "linear",
                            "${_03_glowballCopy11}",
                            [[919.61, 286.88, 1.16, -0.47, 0, 0,0],[920.57, 286.65, 150.37, 99.91, -3.86, 0.67,1.9],[980.73, 309.83, 0, 0, 0, 0,68.22]]
                        ],
                        [
                            "dg493",
                            "location",
                            8942,
                            499,
                            "linear",
                            "${_03_glowballCopy11}",
                            [[980.73, 309.83, 0, 0, 0, 0,0],[1019.5, 326.5, 0, 0, 28.55, -11.64,43.03]]
                        ],
                        [
                            "dg46",
                            "scaleX",
                            4441,
                            1666,
                            "linear",
                            "${_03_glowballCopy14}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg47",
                            "scaleX",
                            6441,
                            1666,
                            "linear",
                            "${_03_glowballCopy14}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg467",
                            "scaleY",
                            3775,
                            1666,
                            "linear",
                            "${_03_glowballCopy7}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg468",
                            "scaleY",
                            5775,
                            1666,
                            "linear",
                            "${_03_glowballCopy7}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg469",
                            "scaleY",
                            7775,
                            1666,
                            "linear",
                            "${_03_glowballCopy7}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg19",
                            "scaleY",
                            3775,
                            1666,
                            "linear",
                            "${_03_glowballCopy10}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg20",
                            "scaleY",
                            5775,
                            1666,
                            "linear",
                            "${_03_glowballCopy10}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg21",
                            "scaleY",
                            7775,
                            1666,
                            "linear",
                            "${_03_glowballCopy10}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg118",
                            "scaleX",
                            4441,
                            1666,
                            "linear",
                            "${_03_glowballCopy17}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg119",
                            "scaleX",
                            6441,
                            1666,
                            "linear",
                            "${_03_glowballCopy17}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg464",
                            "scaleX",
                            3775,
                            1666,
                            "linear",
                            "${_03_glowballCopy7}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg465",
                            "scaleX",
                            5775,
                            1666,
                            "linear",
                            "${_03_glowballCopy7}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg466",
                            "scaleX",
                            7775,
                            1666,
                            "linear",
                            "${_03_glowballCopy7}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg1",
                            "location",
                            3112,
                            667,
                            "linear",
                            "${_03_glowballCopy4}",
                            [[37.34, 11.96, 178.69, 146.7, 0, 0,0],[160, 57.42, 0, 0, 19.24, -7.85,134.02]]
                        ],
                        [
                            "dg2",
                            "location",
                            3779,
                            500,
                            "linear",
                            "${_03_glowballCopy4}",
                            [[160, 57.42, 1.16, -0.47, 0, 0,0],[160.32, 56.9, 144.81, 61.64, -0.11, -0.08,0.67],[217.53, 70.81, 0, 0, 0, 0,60.38]]
                        ],
                        [
                            "dg3",
                            "location",
                            4279,
                            499,
                            "linear",
                            "${_03_glowballCopy4}",
                            [[217.53, 70.81, 0, 0, 0, 0,0],[253.86, 80.5, 0, 0, 19.74, -10.95,38.01]]
                        ],
                        [
                            "dg4",
                            "location",
                            5112,
                            667,
                            "linear",
                            "${_03_glowballCopy4}",
                            [[37.34, 11.96, 178.69, 146.7, 0, 0,0],[160, 57.42, 0, 0, 19.24, -7.85,134.02]]
                        ],
                        [
                            "dg5",
                            "location",
                            5779,
                            500,
                            "linear",
                            "${_03_glowballCopy4}",
                            [[160, 57.42, 1.16, -0.47, 0, 0,0],[160.32, 56.9, 144.81, 61.64, -0.11, -0.08,0.67],[217.53, 70.81, 0, 0, 0, 0,60.38]]
                        ],
                        [
                            "dg6",
                            "location",
                            6279,
                            499,
                            "linear",
                            "${_03_glowballCopy4}",
                            [[217.53, 70.81, 0, 0, 0, 0,0],[253.86, 80.5, 0, 0, 19.74, -10.95,38.01]]
                        ],
                        [
                            "dg7",
                            "location",
                            7112,
                            667,
                            "linear",
                            "${_03_glowballCopy4}",
                            [[37.34, 11.96, 178.69, 146.7, 0, 0,0],[160, 57.42, 0, 0, 19.24, -7.85,134.02]]
                        ],
                        [
                            "dg8",
                            "location",
                            7779,
                            500,
                            "linear",
                            "${_03_glowballCopy4}",
                            [[160, 57.42, 1.16, -0.47, 0, 0,0],[160.32, 56.9, 144.81, 61.64, -0.11, -0.08,0.67],[217.53, 70.81, 0, 0, 0, 0,60.38]]
                        ],
                        [
                            "dg9",
                            "location",
                            8279,
                            499,
                            "linear",
                            "${_03_glowballCopy4}",
                            [[217.53, 70.81, 0, 0, 0, 0,0],[253.86, 80.5, 0, 0, 19.74, -10.95,38.01]]
                        ],
                        [
                            "dg75",
                            "display",
                            5775,
                            0,
                            "linear",
                            "${_03_glowballCopy6}",
                            'block',
                            'block'
                        ],
                        [
                            "dg76",
                            "display",
                            7775,
                            0,
                            "linear",
                            "${_03_glowballCopy6}",
                            'block',
                            'block'
                        ],
                        [
                            "dg77",
                            "display",
                            9775,
                            0,
                            "linear",
                            "${_03_glowballCopy6}",
                            'block',
                            'block'
                        ],
                        [
                            "dg81",
                            "scaleY",
                            3775,
                            1666,
                            "linear",
                            "${_03_glowballCopy6}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg82",
                            "scaleY",
                            5775,
                            1666,
                            "linear",
                            "${_03_glowballCopy6}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg83",
                            "scaleY",
                            7775,
                            1666,
                            "linear",
                            "${_03_glowballCopy6}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg470",
                            "location",
                            3775,
                            667,
                            "linear",
                            "${_03_glowballCopy7}",
                            [[778.4, 263.4, 163.93, 155.03, 0, 0,0],[881.2, 311.25, 0, 0, 19.24, -7.85,116.9]]
                        ],
                        [
                            "dg471",
                            "location",
                            4442,
                            500,
                            "linear",
                            "${_03_glowballCopy7}",
                            [[881.2, 311.25, 2.55, -1.16, 0, 0,0],[881.19, 311.11, 124.44, 66.78, -0.11, -0.08,0.79],[957.05, 325, 0, 0, 7.66, -13.77,80.39]]
                        ],
                        [
                            "dg472",
                            "location",
                            4942,
                            499,
                            "linear",
                            "${_03_glowballCopy7}",
                            [[957.05, 325, 0, 0, 0, 0,0],[1005.5, 335.5, 0, 0, 50.87, -17.79,50.46]]
                        ],
                        [
                            "dg473",
                            "location",
                            5775,
                            667,
                            "linear",
                            "${_03_glowballCopy7}",
                            [[778.4, 263.4, 163.93, 155.03, 0, 0,0],[881.2, 311.25, 0, 0, 19.24, -7.85,116.9]]
                        ],
                        [
                            "dg474",
                            "location",
                            6442,
                            500,
                            "linear",
                            "${_03_glowballCopy7}",
                            [[881.2, 311.25, 2.55, -1.16, 0, 0,0],[881.19, 311.11, 124.44, 66.78, -0.11, -0.08,0.79],[957.05, 325, 0, 0, 7.66, -13.77,80.39]]
                        ],
                        [
                            "dg475",
                            "location",
                            6942,
                            499,
                            "linear",
                            "${_03_glowballCopy7}",
                            [[957.05, 325, 0, 0, 0, 0,0],[1005.5, 335.5, 0, 0, 50.87, -17.79,50.46]]
                        ],
                        [
                            "dg476",
                            "location",
                            7775,
                            667,
                            "linear",
                            "${_03_glowballCopy7}",
                            [[778.4, 263.4, 163.93, 155.03, 0, 0,0],[881.2, 311.25, 0, 0, 19.24, -7.85,116.9]]
                        ],
                        [
                            "dg477",
                            "location",
                            8442,
                            500,
                            "linear",
                            "${_03_glowballCopy7}",
                            [[881.2, 311.25, 2.55, -1.16, 0, 0,0],[881.19, 311.11, 124.44, 66.78, -0.11, -0.08,0.79],[957.05, 325, 0, 0, 7.66, -13.77,80.39]]
                        ],
                        [
                            "dg478",
                            "location",
                            8942,
                            499,
                            "linear",
                            "${_03_glowballCopy7}",
                            [[957.05, 325, 0, 0, 0, 0,0],[1005.5, 335.5, 0, 0, 50.87, -17.79,50.46]]
                        ],
                        [
                            "dg43",
                            "scaleX",
                            3112,
                            1666,
                            "linear",
                            "${_03_glowballCopy5}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg44",
                            "scaleX",
                            5112,
                            1666,
                            "linear",
                            "${_03_glowballCopy5}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg45",
                            "scaleX",
                            7112,
                            1666,
                            "linear",
                            "${_03_glowballCopy5}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg202",
                            "top",
                            1000,
                            8652,
                            "easeInOutQuad",
                            "${_00_water_surface_left}",
                            '88px',
                            '93px'
                        ],
                        [
                            "dg123",
                            "scaleX",
                            4441,
                            1666,
                            "linear",
                            "${_03_glowballCopy15}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg124",
                            "scaleX",
                            6441,
                            1666,
                            "linear",
                            "${_03_glowballCopy15}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg170",
                            "scaleX",
                            3775,
                            1666,
                            "linear",
                            "${_03_glowballCopy8}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg171",
                            "scaleX",
                            5775,
                            1666,
                            "linear",
                            "${_03_glowballCopy8}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg172",
                            "scaleX",
                            7775,
                            1666,
                            "linear",
                            "${_03_glowballCopy8}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg10",
                            "scaleY",
                            3112,
                            1666,
                            "linear",
                            "${_03_glowballCopy4}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg11",
                            "scaleY",
                            5112,
                            1666,
                            "linear",
                            "${_03_glowballCopy4}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg12",
                            "scaleY",
                            7112,
                            1666,
                            "linear",
                            "${_03_glowballCopy4}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg448",
                            "scaleY",
                            3775,
                            1666,
                            "linear",
                            "${_03_glowballCopy9}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg449",
                            "scaleY",
                            5775,
                            1666,
                            "linear",
                            "${_03_glowballCopy9}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg450",
                            "scaleY",
                            7775,
                            1666,
                            "linear",
                            "${_03_glowballCopy9}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg482",
                            "scaleY",
                            3775,
                            1666,
                            "linear",
                            "${_03_glowballCopy11}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg483",
                            "scaleY",
                            5775,
                            1666,
                            "linear",
                            "${_03_glowballCopy11}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg484",
                            "scaleY",
                            7775,
                            1666,
                            "linear",
                            "${_03_glowballCopy11}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg461",
                            "top",
                            1000,
                            8652,
                            "easeInOutQuad",
                            "${_00_water_surface_right}",
                            '333px',
                            '328px'
                        ],
                        [
                            "dg194",
                            "scaleY",
                            3112,
                            1666,
                            "linear",
                            "${_03_glowballCopy3}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg195",
                            "scaleY",
                            5112,
                            1666,
                            "linear",
                            "${_03_glowballCopy3}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg196",
                            "scaleY",
                            7112,
                            1666,
                            "linear",
                            "${_03_glowballCopy3}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg220",
                            "location",
                            3112,
                            667,
                            "linear",
                            "${_03_glowballCopy2}",
                            [[10.4, 9.4, 138.38, 109.06, 0, 0,0],[120.66, 32.34, 0, 0, 19.24, -7.85,116.32]]
                        ],
                        [
                            "dg221",
                            "location",
                            3779,
                            500,
                            "linear",
                            "${_03_glowballCopy2}",
                            [[120.66, 32.34, 2.55, -1.16, 0, 0,0],[120.88, 32.5, 113.29, 69.36, -0.11, -0.08,0.82],[194.55, 55.16, 0, 0, 0, 0,78.7]]
                        ],
                        [
                            "dg222",
                            "location",
                            4279,
                            499,
                            "linear",
                            "${_03_glowballCopy2}",
                            [[194.55, 55.16, 0, 0, 0, 0,0],[238.83, 71.5, 0, 0, 84.68, 12.28,47.56]]
                        ],
                        [
                            "dg223",
                            "location",
                            5112,
                            667,
                            "linear",
                            "${_03_glowballCopy2}",
                            [[10.4, 9.4, 138.38, 109.06, 0, 0,0],[120.66, 32.34, 0, 0, 19.24, -7.85,116.32]]
                        ],
                        [
                            "dg224",
                            "location",
                            5779,
                            500,
                            "linear",
                            "${_03_glowballCopy2}",
                            [[120.66, 32.34, 2.55, -1.16, 0, 0,0],[120.88, 32.5, 113.29, 69.36, -0.11, -0.08,0.82],[194.55, 55.16, 0, 0, 0, 0,78.7]]
                        ],
                        [
                            "dg225",
                            "location",
                            6279,
                            499,
                            "linear",
                            "${_03_glowballCopy2}",
                            [[194.55, 55.16, 0, 0, 0, 0,0],[238.83, 71.5, 0, 0, 84.68, 12.28,47.56]]
                        ],
                        [
                            "dg226",
                            "location",
                            7112,
                            667,
                            "linear",
                            "${_03_glowballCopy2}",
                            [[10.4, 9.4, 138.38, 109.06, 0, 0,0],[120.66, 32.34, 0, 0, 19.24, -7.85,116.32]]
                        ],
                        [
                            "dg227",
                            "location",
                            7779,
                            500,
                            "linear",
                            "${_03_glowballCopy2}",
                            [[120.66, 32.34, 2.55, -1.16, 0, 0,0],[120.88, 32.5, 113.29, 69.36, -0.11, -0.08,0.82],[194.55, 55.16, 0, 0, 0, 0,78.7]]
                        ],
                        [
                            "dg228",
                            "location",
                            8279,
                            499,
                            "linear",
                            "${_03_glowballCopy2}",
                            [[194.55, 55.16, 0, 0, 0, 0,0],[238.83, 71.5, 0, 0, 84.68, 12.28,47.56]]
                        ],
                        [
                            "dg214",
                            "scaleY",
                            4441,
                            1666,
                            "linear",
                            "${_03_glowballCopy16}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg215",
                            "scaleY",
                            6441,
                            1666,
                            "linear",
                            "${_03_glowballCopy16}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg151",
                            "location",
                            3112,
                            667,
                            "linear",
                            "${_03_glowballCopy}",
                            [[10.4, 9.4, 163.93, 155.03, 0, 0,0],[113.2, 57.25, 0, 0, 19.24, -7.85,116.9]]
                        ],
                        [
                            "dg152",
                            "location",
                            3779,
                            500,
                            "linear",
                            "${_03_glowballCopy}",
                            [[113.2, 57.25, 2.55, -1.16, 0, 0,0],[113.19, 57.11, 124.44, 66.78, -0.11, -0.08,0.79],[189.05, 71, 0, 0, 7.66, -13.77,80.39]]
                        ],
                        [
                            "dg153",
                            "location",
                            4279,
                            499,
                            "linear",
                            "${_03_glowballCopy}",
                            [[189.05, 71, 0, 0, 0, 0,0],[237.5, 81.5, 0, 0, 50.87, -17.79,50.46]]
                        ],
                        [
                            "dg154",
                            "location",
                            5112,
                            667,
                            "linear",
                            "${_03_glowballCopy}",
                            [[10.4, 9.4, 163.93, 155.03, 0, 0,0],[113.2, 57.25, 0, 0, 19.24, -7.85,116.9]]
                        ],
                        [
                            "dg155",
                            "location",
                            5779,
                            500,
                            "linear",
                            "${_03_glowballCopy}",
                            [[113.2, 57.25, 2.55, -1.16, 0, 0,0],[113.19, 57.11, 124.44, 66.78, -0.11, -0.08,0.79],[189.05, 71, 0, 0, 7.66, -13.77,80.39]]
                        ],
                        [
                            "dg156",
                            "location",
                            6279,
                            499,
                            "linear",
                            "${_03_glowballCopy}",
                            [[189.05, 71, 0, 0, 0, 0,0],[237.5, 81.5, 0, 0, 50.87, -17.79,50.46]]
                        ],
                        [
                            "dg157",
                            "location",
                            7112,
                            667,
                            "linear",
                            "${_03_glowballCopy}",
                            [[10.4, 9.4, 163.93, 155.03, 0, 0,0],[113.2, 57.25, 0, 0, 19.24, -7.85,116.9]]
                        ],
                        [
                            "dg158",
                            "location",
                            7779,
                            500,
                            "linear",
                            "${_03_glowballCopy}",
                            [[113.2, 57.25, 2.55, -1.16, 0, 0,0],[113.19, 57.11, 124.44, 66.78, -0.11, -0.08,0.79],[189.05, 71, 0, 0, 7.66, -13.77,80.39]]
                        ],
                        [
                            "dg159",
                            "location",
                            8279,
                            499,
                            "linear",
                            "${_03_glowballCopy}",
                            [[189.05, 71, 0, 0, 0, 0,0],[237.5, 81.5, 0, 0, 50.87, -17.79,50.46]]
                        ],
                        [
                            "dg104",
                            "scaleX",
                            4441,
                            1666,
                            "linear",
                            "${_03_glowballCopy12}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg105",
                            "scaleX",
                            6441,
                            1666,
                            "linear",
                            "${_03_glowballCopy12}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg436",
                            "scaleY",
                            4441,
                            1666,
                            "linear",
                            "${_03_glowballCopy13}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg437",
                            "scaleY",
                            6441,
                            1666,
                            "linear",
                            "${_03_glowballCopy13}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg218",
                            "top",
                            1000,
                            1163,
                            "linear",
                            "${_00_sluice_gate}",
                            '115px',
                            '58px'
                        ],
                        [
                            "dg40",
                            "scaleY",
                            3112,
                            1666,
                            "linear",
                            "${_03_glowballCopy5}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg41",
                            "scaleY",
                            5112,
                            1666,
                            "linear",
                            "${_03_glowballCopy5}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg42",
                            "scaleY",
                            7112,
                            1666,
                            "linear",
                            "${_03_glowballCopy5}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg445",
                            "scaleX",
                            3775,
                            1666,
                            "linear",
                            "${_03_glowballCopy9}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg446",
                            "scaleX",
                            5775,
                            1666,
                            "linear",
                            "${_03_glowballCopy9}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg447",
                            "scaleX",
                            7775,
                            1666,
                            "linear",
                            "${_03_glowballCopy9}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg139",
                            "scaleY",
                            3112,
                            1666,
                            "linear",
                            "${_03_glowball}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg140",
                            "scaleY",
                            5112,
                            1666,
                            "linear",
                            "${_03_glowball}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg141",
                            "scaleY",
                            7112,
                            1666,
                            "linear",
                            "${_03_glowball}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg434",
                            "scaleX",
                            4441,
                            1666,
                            "linear",
                            "${_03_glowballCopy13}",
                            '0.4',
                            '0.1'
                        ],
                        [
                            "dg435",
                            "scaleX",
                            6441,
                            1666,
                            "linear",
                            "${_03_glowballCopy13}",
                            '0.4',
                            '0.1'
                        ]
                    ]
                }
            },
            "txt_leaders_symb": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'text',
                            r: null,
                            id: 'Reservoir_txt',
                            t: 'text',
                            rect: [0, 0, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', 'nowrap'],
                            align: 'center',
                            text: 'Reservoir',
                            n: null
                        },
                        {
                            type: 'text',
                            r: null,
                            id: 'Dam_txt',
                            t: 'text',
                            rect: [127, 82, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', 'nowrap'],
                            align: 'left',
                            text: 'Dam',
                            n: null
                        },
                        {
                            type: 'text',
                            r: null,
                            id: 'Sldng_gate_txt',
                            t: 'text',
                            rect: [109, 0, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', 'nowrap'],
                            align: 'center',
                            text: 'Sliding gate',
                            n: null
                        },
                        {
                            type: 'text',
                            r: null,
                            id: 'Generator_txt',
                            t: 'text',
                            rect: [265, 139, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', 'nowrap'],
                            align: 'left',
                            text: 'Generator',
                            n: null
                        },
                        {
                            type: 'text',
                            r: null,
                            id: 'Transformer_txt',
                            t: 'text',
                            rect: [331, 41, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', 'nowrap'],
                            align: 'left',
                            text: 'Transformer',
                            n: null
                        },
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'Transformer_leader',
                            t: 'rect',
                            f: null,
                            rect: [380, 61, '1px', 66, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], [1, 1, 1], ['50%', '0%']],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'Sldng_gate_leader',
                            t: 'rect',
                            f: null,
                            tf: null,
                            rect: [151, 20, '1px', 59, 'auto', 'auto'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            transform: [[0, 0, 0], ['55', 0, 0], [0, 0], ['1', '1', 1], ['0%', '0%']],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'text',
                            r: null,
                            id: 'Pwr_trans_cbl_txt',
                            t: 'text',
                            rect: [453, 41, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', 'nowrap'],
                            align: 'left',
                            text: 'Power<br>transmission<br>cables',
                            n: null
                        },
                        {
                            type: 'text',
                            r: null,
                            id: 'Turbine_txt',
                            t: 'text',
                            rect: [203, 361, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [18, ''], 'rgba(0,0,0,1)', '400', 'none', 'normal', '', 'nowrap'],
                            align: 'right',
                            text: 'Turbine',
                            n: null
                        },
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'Generator_leader',
                            t: 'rect',
                            f: null,
                            tf: null,
                            rect: [316, 159, 1, 40, 'auto', 'auto'],
                            stroke: [0, 'rgba(0,0,0,0.00)', 'none'],
                            transform: [[0, 0, 0], ['-28', 0, 0], [0, 0], [1, 1, 1], ['50%', '0%']],
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'Reservoir_leader',
                            t: 'rect',
                            f: null,
                            rect: [38, 20, '1px', 79, 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], [1, 1, 1], ['50%', '0%']],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'rect',
                            s: null,
                            r: null,
                            id: 'Turbine_leader',
                            t: 'rect',
                            f: null,
                            tf: null,
                            rect: [267, 373, '1px', 72, 'auto', 'auto'],
                            stroke: [0, 'rgba(0, 0, 0, 0)', 'none'],
                            transform: [[0, 0, 0], ['231', 0, 0], [0, 0], [1, 1, 1], ['0%', '0%']],
                            fill: ['rgba(0,0,0,1)']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'black_arrow1',
                            t: 'image',
                            f: null,
                            rect: [69, 225, '530px', '190px', 'auto', 'auto'],
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.09', '0.09', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/black_arrow1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'blue_arrow1',
                            t: 'image',
                            f: null,
                            rect: [-612, -159, '1450px', '690px', 'auto', 'auto'],
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.09', '0.09', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/blue_arrow1.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'blue_arrow2',
                            t: 'image',
                            f: null,
                            rect: [-59, -20, '540px', '540px', 'auto', 'auto'],
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.09', '0.09', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/blue_arrow2.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'blue_arrow3',
                            t: 'image',
                            f: null,
                            rect: [-9, 108, '560px', '390px', 'auto', 'auto'],
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.09', '0.09', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/blue_arrow3.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'blue_arrow4',
                            t: 'image',
                            f: null,
                            rect: [63, 55, '590px', '630px', 'auto', 'auto'],
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.09', '0.09', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/blue_arrow4.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: 'blue_arrow5',
                            t: 'image',
                            f: null,
                            rect: [-197, 317, '1300px', '150px', 'auto', 'auto'],
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.09', '0.09', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/blue_arrow5.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 554, 399]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "static_electricity": {
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
                            r: null,
                            id: '_03_glowballCopy56',
                            t: 'image',
                            f: null,
                            rect: [975, 301, '47px', '47px', 'auto', 'auto'],
                            opacity: '0.84',
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.11', '0.11', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: '_03_glowballCopy55',
                            t: 'image',
                            f: null,
                            rect: [974, 314, '47px', '47px', 'auto', 'auto'],
                            opacity: '0.85',
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.11', '0.11', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: '_03_glowballCopy54',
                            t: 'image',
                            f: null,
                            rect: [975, 319, '47px', '47px', 'auto', 'auto'],
                            opacity: '0.85',
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.11', '0.11', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: '_03_glowballCopy53',
                            t: 'image',
                            f: null,
                            rect: [926, 280, '47px', '47px', 'auto', 'auto'],
                            opacity: '0.87',
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.23415', '0.23415', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: '_03_glowballCopy52',
                            t: 'image',
                            f: null,
                            rect: [933, 298, '47px', '47px', 'auto', 'auto'],
                            opacity: '0.85',
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.23415', '0.23415', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: '_03_glowballCopy51',
                            t: 'image',
                            f: null,
                            rect: [930, 315, '47px', '47px', 'auto', 'auto'],
                            opacity: '0.85',
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.23415', '0.23415', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: '_03_glowballCopy50',
                            t: 'image',
                            f: null,
                            rect: [901, 279, '47px', '47px', 'auto', 'auto'],
                            opacity: '0.84',
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.21', '0.23415', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: '_03_glowballCopy49',
                            t: 'image',
                            f: null,
                            rect: [895, 302, '47px', '47px', 'auto', 'auto'],
                            opacity: '0.85',
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.23415', '0.23415', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: '_03_glowballCopy48',
                            t: 'image',
                            f: null,
                            rect: [900, 312, '47px', '47px', 'auto', 'auto'],
                            opacity: '0.85',
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.23415', '0.23415', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: '_03_glowballCopy47',
                            t: 'image',
                            f: null,
                            rect: [822, 267, '47px', '47px', 'auto', 'auto'],
                            opacity: '0.87',
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.35408', '0.35408', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: '_03_glowballCopy46',
                            t: 'image',
                            f: null,
                            rect: [825, 272, '47px', '47px', 'auto', 'auto'],
                            opacity: '0.85',
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.35408', '0.35408', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: '_03_glowballCopy45',
                            t: 'image',
                            f: null,
                            rect: [821, 280, '47px', '47px', 'auto', 'auto'],
                            opacity: '0.85',
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.35408', '0.35408', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: '_03_glowballCopy44',
                            t: 'image',
                            f: null,
                            rect: [794, 262, '47px', '47px', 'auto', 'auto'],
                            opacity: '0.84',
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.35408', '0.35408', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: '_03_glowballCopy43',
                            t: 'image',
                            f: null,
                            rect: [790, 269, '47px', '47px', 'auto', 'auto'],
                            opacity: '0.85',
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.35408', '0.35408', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            r: null,
                            id: '_03_glowballCopy42',
                            t: 'image',
                            f: null,
                            rect: [789, 277, '47px', '47px', 'auto', 'auto'],
                            opacity: '0.85',
                            tf: null,
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0.35408', '0.35408', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/03_glowball.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, 876, 337]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    labels: {
                        "time0": 0
                    },
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("hydroelectric_edgeActions.js");
})("EDGE-179879352");
