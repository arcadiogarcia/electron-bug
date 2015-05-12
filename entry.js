var electronpath = require('electron-prebuilt');
var path = require('path');
var spawn = require('child_process').spawn;
var cwd = path.resolve(__dirname, 'spawned');
console.log('cwd = ' + electronpath);
var child = spawn(electronpath, ['.'], {cwd: cwd});
