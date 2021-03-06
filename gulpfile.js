var del = require('del');
var utilities = require('gulp-util');
var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var buildProduction = utilities.env.production;
var jshint = require('gulp-jshint');
var lib = require('bower-files')();

gulp.task('bowerJS', function(){
  return gulp.src(lib.ext('js').files)
  .pipe(concat('vendor.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./build/js'));
});
gulp.task('concatInterface', function () {
  return gulp.src(['./js/*-interface.js'])
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'));
});
gulp.task('jsBrowserify', ['concatInterface'], function () {
  return browserify({entries: ['./tmp/allConcat.js']})
  .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
gulp.task("minifyScripts", ["jsBrowserify"], function () {
  return gulp.src(".build/js/app.js")
  .pipe(uglify())
  .pipe(gulp.dest("./buid/js"));
});
gulp.task("clean", function(){
  return del(['build', 'tmp']);
});
gulp.task("build", ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
});
gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('default'));
});
