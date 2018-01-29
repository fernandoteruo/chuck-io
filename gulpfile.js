var gulp = require("gulp");
var shell = require("gulp-shell");
var rename = require("gulp-rename");
var minimist = require("minimist");

var knownOptions = {
    string: ["env"],
    "default": {
        env: "dev"
    }
};

var options = minimist(process.argv.slice(2), knownOptions);

gulp.task("startClient", function() {
    return gulp.src("").pipe(shell(["yarn start"]));
});

gulp.task("lessCompile", function() {
    return gulp.src("").pipe(shell(["lessc-each src/styles/less src/styles/css"]));
});

gulp.task("lessWatch", function() {
    return gulp.src("").pipe(shell(["less-watch-compiler src/styles/less src/styles/css"]));
});

gulp.task("config", function() {
    return gulp.src("config/" + options.env + ".config.js").pipe(rename("config.js")).pipe(gulp.dest("src/utils"));
});

gulp.task("start", ["config", "startClient", "lessWatch"]);

gulp.task("build", ["config", "lessCompile"], function() {
    return gulp.src("").pipe(shell(["yarn build"]));
});

gulp.task("deploy", ["build"], function() {
    return gulp.src("").pipe(shell(["yarn deploy"]));
});