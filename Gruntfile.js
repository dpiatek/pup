module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      'js/main.js': ['js/**/*.js', '!js/main.js']
    }

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
        files: ['js/**/*.js'],
        tasks: ['jshint']
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js'],
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
          'js/main.min.js': 'js/main.js'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('s', ['sass']);

  grunt.registerTask('default', ['jshint', 'uglify', 'sass:build']);

};

