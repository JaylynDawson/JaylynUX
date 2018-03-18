module.exports = {
    hbs: {
        files: [
            'src/**/*.hbs'
        ],
        tasks: [
            'assemble:build'
        ],
        spawn: false
    },
    less: {
        files: [
            'src/**/*.less'
        ],
        tasks: [
            'less'
        ],
        spawn: false
    }
}