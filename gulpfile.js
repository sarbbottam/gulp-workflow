var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

gulp.task('jshint', function () {
  return gulp.src(['assets/js/**/*.js'])
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('uglify', ['jshint'], function() {
  return gulp.src('assets/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('assets-min/js/'));
});

gulp.task('watch', function() {
  gulp.watch('assets/js/**/*.js', ['jshint', 'uglify']);
});

gulp.task('default', ['jshint', 'uglify']);
