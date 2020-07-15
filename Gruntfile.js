module.exports = (grunt) => {

  require('load-grunt-tasks')(grunt)

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    qunit: {
      all: { src: ['tests/tests.html'] }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: {
        src: ['./js/bootstrap-datetimepicker.js']
      }
    },
    versioncheck: {
      target: {
        options: {
          hideUpToDate: true
        }
      }
    }
  })

  grunt.registerTask('default', ['jshint', 'versioncheck']);

  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.registerTask('test', ['qunit:all'])
}
