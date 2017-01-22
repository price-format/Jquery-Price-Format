// Variables
var gulp        = require('gulp');
var minify      = require('gulp-minify');
var ghPages     = require('gulp-gh-pages');
var htmlmin     = require('gulp-htmlmin');
var cssnano     = require('gulp-cssnano');
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

gulp.task('docs:css', () => gulp.src('./docs/stylesheets/*.css')
  .pipe(cssnano())
  .pipe(gulpSize({ title: 'Minify CSS doc files...', gzip: false, showFiles: true }))
  .pipe(gulp.dest('.dist/stylesheets/')));

gulp.task('docs:images', () => gulp.src('./docs/images/*')
  .pipe(gulpSize({ title: 'Minify CSS doc files...', gzip: false, showFiles: true }))
  .pipe(gulp.dest('.dist/images/')));

gulp.task('docs:js', () => gulp.src('./docs/javascripts/demo.js')
  .pipe(minify({
    ext:{
      min:'.min.js'
    }
  }))
  .pipe(gulpSize({ title: 'Minify javascripts demo file...', gzip: false, showFiles: true }))
  .pipe(gulp.dest('.dist/javascripts/')));

gulp.task('docs:html', () => gulp.src('./docs/**/*.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
  .pipe(gulpSize({ title: 'Minify HTML doc files...', gzip: false, showFiles: true }))
  .pipe(gulp.dest('.dist/')));

gulp.task('build', ['javascripts', 'docs:html', 'docs:css', 'docs:images', 'docs:js']);

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
