module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        srcDir: 'src',
        releaseDir: 'release',
        testsDir: 'tests',

        // Run a server for testing work
        connect: {
            server: {
                options: {
                    port: 8000,
                    host: 'localhost',
                    base: ['<%= srcDir %>', '<%= testDir %>'],
                    middleware: function(connect, options, middlewares) {
                        // Lets set the correct headers for our file types.
                        // This allows audio/anim sync to work as expected
                        middlewares.unshift(function(req, res, next) {
                            if (req.url.match(/\.(mp3|ogg)$/)) {
                                res.setHeader('Accept-Ranges', 'bytes');
                            }
                            if (req.url.match(/\.svg$/)) {
                                res.setHeader('Content-Type', 'image/svg+xml');
                            }
                            if (req.url.match(/\.oga$/)) {
                                res.setHeader('Content-Type', 'audio/ogg');
                            }
                            if (req.url.match(/\.ogv$/)) {
                                res.setHeader('Content-Type', 'video/ogg');
                            }
                            if (req.url.match(/\.ogg$/)) {
                                res.setHeader('Content-Type', 'application/ogg');
                            }
                            if (req.url.match(/\.mp4$/)) {
                                res.setHeader('Content-Type', 'video/mp4');
                            }
                            if (req.url.match(/\.ttf$/)) {
                                res.setHeader('Content-Type', 'font/ttf');
                            }
                            if (req.url.match(/\.(ttf|otf|eot)$/)) {
                                res.setHeader('Access-Control-Allow-Origin', '*');
                            }
                            
                            return next();
                        });

                        return middlewares;
                    }
                }
            }
        },

        // Minify CSS files
        cssmin: {
            options: {
                banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */'
            },
            '<%= releaseDir %>/html-content-player.min.css': ['<%= srcDir %>/html-content-player.css'],
        },

        // Minify Javascript files
        uglify: {
            js: {
                options: {
                    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' + '<%= grunt.template.today("yyyy-mm-dd") %> */\n',
                    compress: false,
                    mangle: false,
                    beautify: true
                },
                files: {
                    '<%= releaseDir %>/html-content-player.min.js': ['<%= srcDir %>/html-content-player.js', '<%= srcDir %>/parseSRT.js']
                }
            }
        },

        // Copy images and markup to 'release' dir
        copy: {
            images: {
                files: [{
                    expand: true,
                    cwd: '<%= srcDir %>',
                    src: ['*.png',
                          '*.gif'],
                    dest: '<%= releaseDir %>',
                    filter: 'isFile',
                    nonull: true
                }]
            },
            markup: {
                files: [{
                    expand: true,
                    cwd: '<%= srcDir %>',
                    src: ['*.html'],
                    dest: '<%= releaseDir %>',
                    filter: 'isFile',
                    nonull: true
                }]
            }
        },

        // When running, watch for file changes and produce the 'release' dir output
        watch: {
            options: {
                atBegin: true
            },
            styles: {
                files: [
                    '<%= srcDir %>/**/*.css'
                ],
                tasks: ['cssmin']
            },
            js: {
                files: [
                    '<%= srcDir %>/html-content-player.js',
                    '<%= srcDir %>/parseSRT.js'
                ],
                tasks: ['uglify:js']
            },
            images: {
                files: [
                    '<%= srcDir %>/*.png',
                    '<%= srcDir %>/*.gif'
                ],
                tasks: ['copy:images']
            },
            markup: {
                files: [
                    '<%= srcDir %>/*.html'
                ],
                tasks: ['copy:markup']
            }
        },

        open: {
            dev: {
                path: 'http://localhost:8000/tests/index.html'
            }
        },

    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-bump');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-open');

    // Default task(s).
    grunt.registerTask('start', ['connect:server', 'open:dev', 'watch']);

};