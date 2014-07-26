var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

gulp.task('jshint', function () {
  return gulp.src(['assets/js/**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('uglify', ['jshint'], function() {
  return gulp.src('assets/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets-min/js/'));
});

gulp.task('default', ['jshint', 'uglify']);
