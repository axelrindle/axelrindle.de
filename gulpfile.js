/*
  Require modules
*/
const pump = require('pump');
const gulp = require('gulp');
const gutil = require('gulp-util');
const sassLint = require('gulp-sass-lint');
const coffeeLint = require('gulp-coffeelint');
const stylish = require('coffeelint-stylish');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const autoPrefixer = require('gulp-autoprefixer');
const coffeescript = require('gulp-coffeescript');
const uglifyJs = require('gulp-uglify');
const del = require('del');


/*
  Data
*/
var paths = require('./paths');


/*
  Tasks
*/
gulp.task('html', function (cb) {
  pump([
    gulp.src(paths.pug.src),
    pug({
      pretty: true
    }),
    gulp.dest(paths.pug.dest)
  ], cb);
});

gulp.task('css', function (cb) {
  pump([
    gulp.src(paths.sass.src),
    sass(),
    cleanCss({compatibility: 'ie8'}),
    autoPrefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }),
    gulp.dest(paths.sass.dest)
  ], cb);
});

gulp.task('js', function (cb) {
  pump([
    gulp.src(paths.coffee.src),
    coffeescript().on('error', gutil.log),
    //uglifyJs(),
    gulp.dest(paths.coffee.dest)
  ], cb);
});

gulp.task('sasslint', function (cb) {
  pump([
    gulp.src(paths.sass.src),
    sassLint({
      configFile: 'sass-lint.yml'
    }),
    sassLint.format(),
    sassLint.failOnError()
  ], cb);
});

gulp.task('coffeelint', function (cb) {
  pump([
    gulp.src(paths.coffee.src),
    coffeeLint(),
    coffeeLint.reporter(stylish)
  ], cb);
});

gulp.task('clean', function () {
  del.sync(paths.clean);
});

gulp.task('lint', ['sasslint', 'coffeelint']);
gulp.task('compile', ['clean', 'html', 'css', 'js']);
gulp.task('default', ['lint', 'compile']);
