module.exports = {
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
    }
}