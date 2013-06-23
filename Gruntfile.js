module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      dev: {
        src: ['js/**/*.js', '!js/main.min.js'],
        dest: 'js/main.min.js'
      },
      build: {
        src: ['js/**/*.js', '!js/main.min.js'],
        dest: 'build/js/main.min.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
                'Built: <%= grunt.template.today("yyyy-mm-dd") %> */'
      },
      build: {
        files: {
          'build/js/main.min.js': 'js/main.min.js'
        }
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        background: true
      }
    },

    jshint: {
      files: ['js/**/*.js', '!js/main.min.js'],
      options: {
        globals: { console: true }
      }
    },

    sass: {
      dev: {
        files: { 'css/main.css': 'css/main.scss' }
      },
      build: {
        options: { style: 'compressed' },
        files: { 'build/css/main.min.css': 'css/main.scss' }
      }
    },

    copy: {
      build: {
        files: [
          {
            src: ['index.html'],
            dest: 'build/'
          }
        ]
      }
    },

    clean: ['build/**/*'],

    watch: {
      css: {
        files: ['css/**/*.scss'],
        tasks: ['sass:dev']
      },
      js: {
        files: ['js/**/*.js', '!js/main.min.js'],
        tasks: ['browserify:dev', 'jshint']
      },
      karma: {
        files: ['js/main.min.js'],
        tasks: ['karma:unit:run']
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('h', ['jshint']);
  grunt.registerTask('s', ['sass:dev']);
  grunt.registerTask('b', ['browserify:dev']);
  grunt.registerTask('c', ['clean']);
  grunt.registerTask('test', ['karma']);

  grunt.registerTask('default', ['jshint', 'browserify:dev', 'sass:dev']);
  grunt.registerTask('build', ['copy:build', 'browserify', 'uglify', 'sass:build']);

};

