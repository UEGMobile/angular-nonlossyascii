module.exports = function( grunt ) {

  'use strict';

  var SRC = 'source';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify : {
      production : {
        src: [ SRC + '/**/*.js' ],
        dest: 'angular-nonlossyascii.min.js'
      }
    },

    copy : {
      production : {
        files : [
          { src: SRC + '/angular-nonlossyascii.js', dest : 'angular-nonlossyascii.js' }
        ]
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', [ 'copy', 'uglify']);
};
