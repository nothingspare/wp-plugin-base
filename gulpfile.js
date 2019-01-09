// create docs
// generate classes, hooks
// test
const gulp = require('gulp');
const _ = require('lodash');
const argv = require('yargs').argv;
const fs = require('fs');

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
// run API tests

/****** packaging ******/
// create zip
// generate docs
