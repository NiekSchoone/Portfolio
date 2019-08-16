var gulp = require('gulp');
var htmlImport = require('gulp-html-import');
var browserSync = require('browser-sync').create();

gulp.task('serve', ['import'], function() {

    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch('./src/html/**/*.html',['import']);
    gulp.watch('./src/html/components/**/*.html',['import']);
}); 


gulp.task('import', function () {
    gulp.src(['./src/html/**/*.html', './src/html/components/**/*.html'])
        .pipe(gulp.src('./src/html/components/**/*.html').pipe(htmlImport('./src/html/components/')))
        .pipe(htmlImport('./src/html/components/'))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
})

gulp.task('default', ['serve']);