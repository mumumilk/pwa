const gulp = require('gulp'),
      stylus = require('gulp-stylus'),
      rupture = require('rupture'),
      gride = require('gride'),
      paths = require('./paths')

module.exports = gulp.task('compile:stylus', () => {
  gulp.src(paths.stylus.src)
    // .pipe(sourcemaps.init())
    .pipe(stylus({ use: [rupture(), gride()] }))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.stylus.dist));
})
