module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        assemble: {
            options: {
                data: 'data.json',
                flatten: true,
                layout: 'src/hbs/layouts/template.hbs',
                partials: ['src/hbs/partials/**/*.hbs'],
                prettify: {
                    indent: 4
                }
            },
            build: {
                options: {
                    layout: 'src/hbs/layouts/template.hbs',
                    partials: ['src/hbs/partials/**/*.hbs'],
                },
                files: {
                    'build/pages/': 'src/hbs/content/**/*.hbs'
                }
            },
        },
        clean: {
            all_build: ['build/*'],
            dist: ['dist/*']
        },
        concat: {
            'options': {
                'separator': ';'
            },
            'build': {
                'src': [
                    '____.less',
                    '____.less'
                ],
                'dest': 'template.less'
            }
        },
        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                hostname:   '0.0.0.0',
                keepalive: true
            },
            livereload: {
                options: {
                    open: {
                        target: 'http://localhost:9000/page-about.html'
                    },
                    base: 'build/pages/'
                }
            }
        },
        watch: {
            scripts: {
                files: [
                    '**/*.hbs',
                    '**/*.js',
                    '**/*.less'
                ],
                tasks: ['jshint'],
                options: {
                    spawn: false,
                },
            },
            less: {
                // We watch and compile sass files as normal but don't live reload here
                files: ['src/template/less/*.less'],
                tasks: ['less'],
            },
            livereload: {
                // Here we watch the files the sass task will compile to
                // These files are sent to the live reload server after sass compiles to them
                options: { livereload: true },
                files: ['dest/**/*'],
            },
        },
    });

    // Load required modules
    grunt.loadNpmTasks('assemble-less');
    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Task definitions
    grunt.registerTask('serve', function(target) {
        grunt.task.run([
            'build',
            'connect',
            'watch'
        ]);
    });
    grunt.registerTask('build', [
        'clean:all_build',
        'ass'
    ]);
};