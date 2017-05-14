//All of these require('****') need to be installed using 'npm install **** --save-dev'
var gulp = require('gulp');
var sass = require('gulp-sass');   // Precompile SASS into CSS
var browserSync = require('browser-sync').create();  // Browser sync for live automatic reloading. .Create() creates the server
var cssnano = require('gulp-cssnano'); // CSSNANO for minifying CSS

// Task to compile SASS into CSS
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss') // Match any file with an .scss extension in src/scss and child directories (globbing)
        .pipe(sass())  // using gulp-sass
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// BrowserSync task describing base directory
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        },
    })
});

// Watch for changes to scss, html or js and reload if found
gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('src/scss/**/*.scss', ['sass']);
    //Reload whenever HTML or JS files change
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', browserSync.reload);    
});

// Task to minify css for production
gulp.task('mini', function() {
    return gulp.src('src/css/**/*.css')
        .pipe(cssnano())
        .pipe(gulp.dest('dist/css'))
});