module.exports = {
	options: {
		livereload: true
    },
    hbs: {
        files: [
            'src/**/*.hbs'
        ],
        tasks: [
            'assemble:build'
        ]
    },
    less: {
        files: [
            'src/**/*.less'
        ],
        tasks: [
            'less'
        ]
    }
}