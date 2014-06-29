module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %>.js v<%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/<%= pkg.name %>.js',
				dest: '<%= pkg.name %>.js'
			}
		},
		sass: {	
			dist: { 
				options: { 
					style: 'expanded'
				},
				files: {
					'facefeed.css': 'src/facefeed.scss'
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Default task(s).
	grunt.registerTask('default', ['uglify', 'sass']);

};