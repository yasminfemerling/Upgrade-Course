var gulp = require('gulp');
var stylus = require('gulp-stylus'); 

gulp.task('styles', function(){
    gulp.src('style.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./'));
});

//Watch for changes to run the test
gulp.task('watch:styles', function(){
    gulp.watch('**/*.stylus',['styles']);
});