var gulp 		= require('gulp'),
	gutil 		= require('gulp-util'),
	coffee		= require('gulp-coffee');

var coffeeSources = ['components/coffee/tagline.coffee'];

gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({ bare: true }).on('error', gutil.log))	//compiles to js w/o putting it into a secured wrapper.
		.pipe(gulp.dest('components/scripts'));
});
