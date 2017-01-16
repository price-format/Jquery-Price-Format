// Variables
var gulp        = require('gulp');
var minify      = require('gulp-minify');
var ghPages     = require('gulp-gh-pages');
var gulpSize    = require('gulp-size');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Compress javascripts
gulp.task('javascripts', () => gulp.src([
    'jquery.priceformat.js',
    'prototype.priceformat.js'
  ])
  .pipe(minify({
    ext:{
      min:'.min.js'
    },
    ignoreFiles: ['gulpfile.js', '*min.js']
  }))
  .pipe(gulpSize({ title: 'Compress javascripts...', gzip: false, showFiles: true }))
  .pipe(gulp.dest('.dist/javascripts'))
  .pipe(gulp.dest('.')));

gulp.task('build', ['javascripts'], () => gulp.src('./docs/**/*')
  .pipe(gulpSize({ title: 'Copying doc files...', gzip: false, showFiles: true }))
  .pipe(gulp.dest('.dist/')));

gulp.task('watch', ['build'], () => {
  gulp.watch(['*.priceformat.js'], ['javascripts']);
  gulp.watch(['docs/**/*'], ['build']);
  gulp.watch(['docs/*.html', 'docs/**/*.css', 'docs/**/*.js']).on('change', reload);
});

gulp.task('server', ['watch'], () => {
  browserSync.init({
    server: {
      baseDir: './.dist'
    }
  });
});

gulp.task('deploy', ['build'], () => gulp.src('./.dist/**/*')
  .pipe(ghPages()));

gulp.task('default', ['server']);
