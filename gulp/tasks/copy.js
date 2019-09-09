module.exports = function () {
    $.gulp.task('copy', function(){
        return $.gulp.src([
            'fonts/**/*.{woff.wof2}',
            'img/**',
            '*.html'
        ],  {
            base: '.'
        })
            .pipe($.gulp.dest('build'))
        })
}
