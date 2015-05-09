var browsersync = require('browser-sync');
var reload      = browsersync.reload;
var gulp        = require('gulp');
var runSequence = require('run-sequence');
var autoprefixerBrowsers = ['last 2 version']

module.exports = {
  'browsersync': {
    server: './gh-pages',
    open: 'external'
  },
  'uninstall': {
    files: [
      './gh-pages',
      './src/css'
    ]
  },
  'rubysass': {
    src: './src/scss/docs.scss',
    dest: './src/css',
    rubySassOptions: {
      sourcemap: true,
      noCache: true
    },
    autoprefixer: autoprefixerBrowsers,
    fallback:false,
    filter:'**/*.css',
    headerBanner : false,
    notify :"Compiled Sass"
  },
  'ghpage' : {
    src : './gh-pages/**/*',
    remoteUrl : 'git@github.com:blivesta/animsition.git',
    branch : 'gh-pages'
  },
};

gulp.task('rubysass', require('gulptasks/lib/rubysass'));
gulp.task('deploy', require('gulptasks/lib/ghpage'));
gulp.task('jekyll', require('gulptasks/lib/jekyll'));
gulp.task('browsersync', require('gulptasks/lib/browsersync'));
gulp.task('uninstall', require('gulptasks/lib/uninstall'));

gulp.task('default',['browsersync'],function() {
  gulp.watch(['./src/scss/*.scss'], ['rubysass']);
  gulp.watch(['./src/**/*.{html,css,js}'], ['jekyll']);
  gulp.watch(['./gh-pages'], reload);
});

gulp.task('build', function() {
  runSequence(
    'uninstall',
    ['rubysass'],
    'jekyll',
    ['default']
  );
});
