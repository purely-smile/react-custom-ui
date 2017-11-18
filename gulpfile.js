const gulp = require("gulp");
const ts = require("gulp-typescript");
const gulpif = require("gulp-if");
const del = require('del');

gulp.task("default", () => {
  del.sync('./dist/**/*');
  return gulp
    .src("./src/components/**/*")
    .pipe(
      gulpif(
        file => {
          return /tsx?$/.test(file.path);
        },
        ts({
          sourceMap: true,
          module: "commonjs",
          target: "es5",
          jsx: "react",
          declaration: true
        })
      )
    )
    .pipe(gulp.dest("./dist"));
});
