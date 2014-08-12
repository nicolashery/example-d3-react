var gulp = require('gulp');
var react = require('gulp-react');
var jshint = require('gulp-jshint');

var jsFiles = [
  'src/**/*.js',
  'build.js',
  'gulpfile.js',
  'webpack.config.js',
  'webpack.config.prod.js'
];

gulp.task('jshint', function(cb) {
  var stream = gulp.src(jsFiles)
    .pipe(react())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));

  if (process.env.CI) {
    stream = stream.pipe(jshint.reporter('fail'));
  }

  stream.on('end', cb);
});

gulp.task('jshint-watch', ['jshint'], function(cb){
  gulp.watch(jsFiles, ['jshint']);

  cb();
  console.log('Watching files for changes...');
});

gulp.task('default', ['jshint']);
