module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: { separator: ';' },
      dist: {
        src: ['js/**/*.js', '!js/vendor/**/*.js', '!js/main.min.js'],
        dest: 'js/main.min.js'
      }
    },

    sass: {
      dev: {
        files: { 'css/main.css': 'css/main.scss' }
      },
      build: {
        options: { style: 'compressed' },
        files: { 'css/main.min.css': 'css/main.scss' }
      }
    },

    watch: {
      css: {
        files: ['css/**/*.scss'],
        tasks: ['sass:dev']
      },
      js: {
        files: ['js/**/*.js', '!js/vendor/*.js'],
        tasks: ['jshint']
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js', '!js/vendor/*.js', '!js/main.min.js'],
      options: {
        globals: { console: true }
      }
    },

    uglify: {
      options: {
        report: 'gzip',
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                'Built: <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      build: {
        files: {
          'js/main.min.js': ['<%= concat.dist.dest %>']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('s', ['sass']);

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass:build']);

};

