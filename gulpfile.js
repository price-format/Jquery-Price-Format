// Variables
var gulp = require('gulp');
var minify = require('gulp-minify');

// Compress
gulp.task('compress', function() {
  gulp.src('*.*.js')
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
        ignoreFiles: ['gulpfile.js', '*min.js']
    }))
    .pipe(gulp.dest('.'))
});

// Default Task
gulp.task('default',['compress']);