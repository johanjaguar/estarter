const gulp = require('gulp'),
	pug = require('gulp-pug'),
  plumber = require('gulp-plumber');

gulp.task('pug', () => 
	gulp.src('index.pug')
    .pipe(plumber())
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(''))
);