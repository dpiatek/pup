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
    },

    watch: {
      css: {
        files: ['css/**/*.scss'],
        tasks: ['sass']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('concat', ['concat']);
  grunt.registerTask('s', ['sass']);

  grunt.registerTask('default', ['concat']);

};
