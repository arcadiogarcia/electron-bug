var electronpath = require('electron-prebuilt');
var spawn = require('child_process').spawn;
var child = spawn(electronpath);
process.send("pid is " + child.pid);
