/* eslint-env node */
/* eslint no-unused-vars: 1 */

// create docs
// generate classes, hooks
// test
const gulp = require('gulp');
const _ = require('lodash');
const argv = require('yargs').argv;
const fs = require('fs');
const source = require('env-file-reader').parse;
const archiver = new require('archiver');

let local = source('./.env');

/****** setup ******/
gulp.task('init', () => {
	console.log('require slug and nicename of plugin');
});


/****** generating ******/
// generate post types (post|page|RESTful)
// generate taxonomy (tag|category)
// generate field groups
// generate classes
// generate hooks


/****** database ******/
// regenerate base sql
gulp.task('reset', () => {});
// save sql
gulp.task('capture', () => {});

/****** testing ******/
// run js API tests
gulp.task('test')
// run selenium tests

/****** packaging ******/
// replace all __PLUGIN_NAME__ in plugin dir
// create zip
gulp.task('zip', (done) => {
  let output = fs.createWriteStream('./' + local.PLUGIN_NAME + '.zip');
  let archive = archiver('zip', {
    zlib: { level: 9 } 
  });
  
  output.on('close', function() {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
    done();
  });
  
  archive.on('error', function(err) {
    throw err;
  });
  archive.pipe(output);

  archive.directory('plugin', local.PLUGIN_NAME);
  archive.finalize();
});
// generate jsdocs
// generate phpdocs
