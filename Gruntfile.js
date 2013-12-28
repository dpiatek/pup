module.exports = function(grunt) {

  // Config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      src: [
        'js/**/*.js',
        'Gruntfile.js'
      ]
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Tasks
  grunt.registerTask('default', []);

};
