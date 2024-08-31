import { src, dest, watch, series } from "gulp";
import gulpSass from "gulp-sass";
import * as sass from "sass";

// Initialize gulp-sass with the Sass compiler
const sassCompiler = gulpSass(sass);

const buildStyles = () => {
  return src("scss/**/*.scss")
    .pipe(sassCompiler()) // Call the initialized gulp-sass function
    .pipe(dest("css"));
};

const watchTask = () => {
  watch(["scss/index.scss"], buildStyles);
};

export default series(buildStyles, watchTask);
