import gulp from 'gulp';
import concat from 'gulp-concat'


gulp.task('default', function() {
    return gulp.src(['src/files/api.json', 'src/files/index.html', 'src/files/new.js','src/files/style.css'])
      .pipe(concat('all.js'))
      .pipe(gulp.dest('dest/files'));
  });