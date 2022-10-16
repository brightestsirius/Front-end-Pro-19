// gulp
// gulp-file-include

// gulp-dart-sass
// gulp-autoprefixer
// gulp-clean-css
// gulp-sourcemaps

// gulp-uglify

// gulp-mode

// browser-sync
// del v.6.0.0

const {src, dest, series, parallel, watch} = require(`gulp`),
    del = require(`del`),
    fileinclude = require('gulp-file-include'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-dart-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    mode = require('gulp-mode')();

const clear = async () => {
    await del([`./dist`]);
}

const html = async () => {
    await src(`./src/*.html`)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(dest(`./dist`))
        .pipe(browserSync.stream());
}

const style = async () => {
    await src(`./src/css/style.sass`)
        .pipe(mode.development(sourcemaps.init()))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(cleanCSS())
        .pipe(mode.development(sourcemaps.write()))
        .pipe(dest(`./dist/css`))
        .pipe(browserSync.stream());
}

const script = async () => {
    await src(`./src/js/*.js`)
        .pipe(mode.production(uglify()))
        .pipe(dest(`./dist/js`))
        .pipe(browserSync.stream());
}

const server = () => {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });

    watch("./src/**/*.html", series('html'));
    watch("./src/css/style.sass", series('style'));
    watch("./src/js/*.js", series('script'));
}

exports.html = html;
exports.style = style;
exports.clear = clear;
exports.script = script;

exports.default = series(clear, parallel(html, style, script), server);