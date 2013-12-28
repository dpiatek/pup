module.exports = function(grunt) {

  // Config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      src: [
        'js/**/*.js',
        'Gruntfile.js'
      ]
    },

    sass: {
      src: {
        files: {
          'css/main.css': 'css/main.scss'
        }
      }
    }

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Tasks
  grunt.registerTask('default', []);

};
