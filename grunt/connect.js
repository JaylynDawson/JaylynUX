module.exports = {
    options: {
        port:       9000,
        livereload: true,
        hostname:   '0.0.0.0'
    },
    livereload: {
        options: {
            open: {
                target: 'http://localhost:9000/page-about.html'
            },
            base: [
                'build'
            ]
        }
    }
}