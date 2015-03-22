// ##################################################################################################################################
/* Author: Iacob Silviu - Iulian
/* Project: WorkflowWithGulp
/* Date: 3 / 21 / 2015
// ################################################################################################################################*/
// Nodejs Requires 
// ##################################################################################################################################

var gulp 		= require('gulp'),
	gutil 		= require('gulp-util'),
	coffee		= require('gulp-coffee'),
	compass		= require('gulp-compass'),
	browserify	= require('gulp-browserify'),
	concat		= require('gulp-concat');

// ##################################################################################################################################
// File locations
// ##################################################################################################################################

var coffeeSources = ['components/coffee/tagline.coffee'],
    jsSources	  = ['components/scripts/rclick.js', 
					 'components/scripts/pixgrid.js',
				 	 'components/scripts/tagline.js',
				 	 'components/scripts/template.js'],
 	sassSources	  = ['components/sass/style.scss'];

// ##################################################################################################################################
// CoffeeScript Task
// ##################################################################################################################################

gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({ bare: true }).on('error', gutil.log))	//compiles to js w/o putting it into a secured wrapper.
		.pipe(gulp.dest('components/scripts'));
});

// ##################################################################################################################################
// JavaScript Task
// ##################################################################################################################################

gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('script.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'));
});

// ##################################################################################################################################
// Compass Task
// ##################################################################################################################################

gulp.task('compass', function() {
	gulp.src(sassSources)
		.pipe(compass({
			sass: 'components/sass',
			image: 'builds/development/images',
			style: 'expanded'
		}).on('error', gutil.log))
		.pipe(gulp.dest('builds/development/css'));
});

// ##################################################################################################################################
// Watch Task
// ##################################################################################################################################

gulp.task('watch', function() {
	gulp.watch(coffeeSources, ['coffee']);
	gulp.watch(jsSources, ['js']);
	gulp.watch('components/sass/*.scss', ['compass']);
});

// ##################################################################################################################################
// Default Task
// ##################################################################################################################################

gulp.task('default', ['coffee', 'js', 'compass', 'watch']); // Process all of this. Yell 'gulp' in console.