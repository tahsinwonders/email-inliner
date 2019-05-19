module.exports = function(grunt) {
	grunt.initConfig ({
		// basic setting 
		pkg: grunt.file.readJSON('package.json'),
		emailBuilder: {
		  files: {
                expand  : true,
                flatten : true,
                ext     : '.html', 
                // root directory
                src     : ['./non-inline/*.html'],
                // dstination
                dest    : './generated-inline/'
            }
        },
      
		
		watch: {
		    'normal': {
	    	  options:{livereload:true},
		      files: ['./non-inline/*.html', './non-inline/css/*.css'],
		      tasks: ['emailBuilder'],
		    },
		},
		
		
	}); //CLOSE grunt.initConfig
	// load the plug in
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-email-builder');
	// do the task
	grunt.registerTask('default', ['watch']);

};//CLOSE FUNCTION