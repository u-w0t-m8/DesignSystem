"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var minifyCSS = require("gulp-clean-css");
var rename = require("gulp-rename");
var changed = require("gulp-changed");

sass.compiler = require("node-sass");
var scss_src = "./src/Assets/scss/**/*.scss";
var scss_dest = "./src/Assets/css";

gulp.task("sass", function() {
  return gulp
    .src(scss_src)
    .pipe(sass().on("error", sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(changed(scss_dest))
    .pipe(gulp.dest(scss_dest));
});

gulp.task("sass:watch", function() {
  gulp.watch(scss_src, gulp.series("sass"));
});
