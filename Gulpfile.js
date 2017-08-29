/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in ./gulp/tasks. Any files in that directory get
  automatically required below.

  To add a new task, simply add a new task file that directory.
  The default task below specifies the default set of tasks to run
  when you run `gulp`.

  Make sure that you run 'gulp' from outside of the vagrant machine.
  Saves a ton of time that way.
*/

var requireDir    = require('require-dir');
var gulp          = require('gulp');

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });
