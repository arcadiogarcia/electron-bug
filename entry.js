var child_process = require('child_process');
child = child_process.fork(__dirname + '/child.js');
child.on('message', function(message) {
  console.log(message)
})
