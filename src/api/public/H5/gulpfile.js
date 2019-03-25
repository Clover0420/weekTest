var gulp = require('gulp');

var sass = require("gulp-sass");
var mincss = require("gulp-clean-css");

var webserver = require('gulp-webserver');

gulp.task('css', () => {
    return gulp.src("./src/sass/*scss")
        .pipe(sass())
        .pipe(mincss())
        .pipe(gulp.dest('./src/css/'))
})

gulp.task('server', () => {
    return gulp.src('./src')
        .pipe(webserver({
            port: 8888,
            livereload: true,
            proxies: [
                { source: "/getData", target: "http://localhost:3000/getData" },
                { source: "/getMsg", target: "http://localhost:3000/getMsg" }
            ]
        }))
})

gulp.task('default', gulp.series('css', 'server'))