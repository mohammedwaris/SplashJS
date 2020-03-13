const { exec } = require('pkg');

//exec(args) takes an array of command line arguments and returns a promise. For example:

exec([ 'index.js', '--target', 'win32', '--output', 'index.exe' ])
// do something with app.exe, run, test, upload, deploy, etc