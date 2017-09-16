module.exports = function( grunt ) {

  'use strict';

  var SRC = 'source';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/**\n' +
        ' * <%= pkg.description %>\n' +
        ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
        ' * @link <%= pkg.homepage %>\n' +
        ' * @license MIT License, http://www.opensource.org/licenses/MIT\n' +
        ' */\n'
    },

    concat : { 
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: [ SRC + '/angular-nonlossyascii.js' ],
        dest: '<%= pkg.name %>.js'
      }
    },

    uglify : {
      production : {
        src: [ 'angular-nonlossyascii.js' ],
        dest: 'angular-nonlossyascii.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['concat', 'uglify']);
};
