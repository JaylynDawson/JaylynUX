module.exports = function(grunt) {
    var tasks = {scope: ['devDependencies','dependencies']};
    var options = {config: {src: "grunt/*.js"}};
    var configs = require('load-grunt-configs')(grunt, options);
    require('load-grunt-tasks')(grunt, tasks);
    grunt.initConfig(configs);

    grunt.registerTask('default', [
        'serve'
    ]);
    grunt.registerTask('serve', [
        'build',
        'connect',
        'watch'
    ]);
    grunt.registerTask('build', [
        'clean:all_build',
        'assemble',
        'less'
    ]);
    grunt.registerTask('dist', [
        'clean:all_dist'
    ]);
}