var gulp = require('gulp');
var htmlImport = require('gulp-html-import');
var browserSync = require('browser-sync').create();
var modifyHTMLlinks = require("gulp-processhtml");  // or try gulp-useref


gulp.task('import', function (done) {

    gulp.src('./src/html/**/*.html')
    .pipe(modifyHTMLlinks())
    .pipe(htmlImport('./src/html/components/'))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());

    // gulp.src(['./src/html/**/*.html', './src/html/components/**/*.html'])
    //     .pipe(gulp.src('./src/html/components/**/*.html')
    //     .pipe(htmlImport('./src/html/components/')))
    //     .pipe(htmlImport('./src/html/components/'))
    //     .pipe(gulp.dest('./dist'))
    //     .pipe(browserSync.stream());
    done();
});

gulp.task('serve', gulp.series('import', function(done) {

    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });

    gulp.watch('./src/html/**/*.html', gulp.series('import'));
    gulp.watch('./src/html/components/**/*.html',gulp.series('import'));

    done();
})); 


gulp.task('default', gulp.series('serve'));