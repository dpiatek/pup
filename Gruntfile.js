module.exports = function(grunt) {

  // Config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      src: {
        files: ['js/**/*.js', 'css/**/*.scss'],
        tasks: ['jshint', 'sass'],
        options: {
          livereload: true
        }
      }
    },

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
      },
      build: {
        options: {
          style: 'compressed'
        },
        files: {
          'build/css/main.css': 'css/main.scss'
        }
      }
    },

    preprocess: {
      build: {
        src: 'index.html',
        options: {
          inline: true,
          context: {
            APP_DEV: false
          }
        }
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },

    copy: {
      main: {
        src: ['index.html'],
        dest: 'build/'
      },
      js: {
        expand: true,
        flatten: true,
        src: [
          'bower_components/jquery/jquery.min.js'
        ],
        dest: 'build/js/vendor/'
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
          src: ['*.{png,jpg,gif}'],
          dest: 'build/img/'
        }]
      }
    },

  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-karma');

  // Tasks
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('test', ['karma']);
  grunt.registerTask('build', ['preprocess:build']);

};
