var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('build', function(){
	gulp.src('src/dehumanizer.js')
		.pipe(uglify())
		.pipe(rename('dehumanizer.min.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('copy', function(){
	gulp.src('src/dehumanizer.js')
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['copy', 'build']);