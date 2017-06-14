const gulp = require('gulp'),
      paths = require('./tasks/paths')
      compile = require('./tasks/compile')
      reload = require('./tasks/reload')

gulp.task('default', ["browserSync:default"], () => {
  gulp.watch(paths.stylus.watch, ["compile:stylus"])
  gulp.watch(paths.stylesheets.src, ["browserSync:reload"])
})

gulp.task('build', [
  "compile:stylus"
])
