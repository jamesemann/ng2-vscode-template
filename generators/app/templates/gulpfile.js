var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');
var sass = require('gulp-sass');
var jasmine = require('gulp-jasmine');

gulp.task('scripts', function () {
    var tsResult = gulp.src('*.ts')
        .pipe(ts({
            declarationFiles: true,
            noExternalResolve: true,
            noImplicitAny: true,
            out: 'main.js'
        }));

    return merge([
        tsResult.dts.pipe(gulp.dest('release/definitions')),
        tsResult.js.pipe(gulp.dest('release/js'))
    ]);
});

gulp.task('sass', function () {
    gulp.src('*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('*.scss', ['sass']);
    gulp.watch('*.ts', ['scripts']);
});

gulp.task('test', function(){
    	gulp.src('spec/1st.spec.js')
		// gulp-jasmine works on filepaths so you can't have any plugins before it 
		.pipe(jasmine())
});

gulp.task('default', function(){
    // transpile 
    var tsResult = gulp.src('*.ts')
        .pipe(ts({
            declarationFiles: true,
            noExternalResolve: true,
            noImplicitAny: true,
            out: 'main.js'
        }));

    merge([
        tsResult.dts.pipe(gulp.dest('release/definitions')),
        tsResult.js.pipe(gulp.dest('release/js'))
    ]);
    
    // run unit tests
    gulp.src('spec/1st.spec.js').pipe(jasmine())
});