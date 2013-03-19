module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: { separator: ';' },
      dist: {
        src: ['js/**/*.js', '!js/vendor/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },

    sass: {
      dist: {
        files: { 'css/main.css': 'css/main.scss' }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('concat', ['concat']);
  grunt.registerTask('s', ['sass']);

  grunt.registerTask('default', ['concat']);

};

