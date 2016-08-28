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
		express:{
            all:{
                options:{
                    port:9000,
                    hostname:'localhost',
                    bases:['./non-inline/'], //where yout localhost:9000/ is
                    livereload:true 
                }
            }
        },
		
	}); //CLOSE grunt.initConfig
	// load the plug in
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-express');  
	grunt.loadNpmTasks('grunt-email-builder');
	// do the task
	grunt.registerTask('server', ['express','watch']);

};//CLOSE FUNCTION