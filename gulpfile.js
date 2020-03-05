const {
  src,
  dest,
  watch
} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');


// Static server
function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass); // отслеживать все файлы, и в подпапках /**/тоже   
  watch("./sass/**/*.scss", serveSass); // отслеживать все файлы, и в подпапках /**/тоже   
  watch("./js/*.js").on('change', browserSync.reload);
};

// Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.scss") // без gulp.
    .pipe(sass())
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
};

exports.serve = bs;