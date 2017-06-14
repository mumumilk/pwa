const gulp = require('gulp'),
      browserSync = require('browser-sync'),
      paths = require('./paths')

module.exports = gulp.task('browserSync:default', () => {
  browserSync({
    open: false,
    notify: false,
    server: "./"
  })
})

module.exports = gulp.task('browserSync:reload', () => {
  browserSync.reload()
})
