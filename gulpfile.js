// Requirements
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css');
// Gulp task


//Sass compiler
gulp.task('sass-to-css', function() {
  return sass('main.scss', { sourcemap: true })
   .pipe(autoprefixer({
      browsers: ['last 15 versions'],
      cascade: false
  }))
  .pipe(gulp.dest(''));
});

//Sass compiler - watcher
gulp.task('watch-sass', function(){
    // What to watch
  gulp.watch('**/*.scss', function(){
      // What to run
      gulp.run('sass-to-css');
  });
});
//CSS Minifier
gulp.task('minify-css', function() {
  return gulp.src('main.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest(''));
});
//CSS Minifier - watcher
gulp.task('minification', function(){
    gulp.watch('main.css', function(){
    gulp.run('minify-css');
  })
});
//Default task
gulp.task('default', ['watch-sass', 'minification']);
