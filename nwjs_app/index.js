
console.log(process.argv);

const path = require('path');
var PARENT_EXECUTABLE = process.argv[0];
/*
if(process.argv.length == 2)
	PARENT_EXECUTABLE = process.argv[0];
if(process.argv.length == 3)
	PARENT_EXECUTABLE = process.argv[2];
*/


var PARENT_EXECUTABLE_FOLDER = path.dirname(path.resolve(PARENT_EXECUTABLE));
//var appFolderURL = url.pathToFileURL(appFolder) + '/';

const EXECUTABLE_PATH = path.resolve(PARENT_EXECUTABLE_FOLDER + "/" + "runtimes/win32/");
const EXECUTABLE_NAME = path.resolve(EXECUTABLE_PATH + "/" + "nw");
const EXECUTABLE_CONFIGURATION_PATH = path.resolve(PARENT_EXECUTABLE_FOLDER + "/" + "runtimes/configuration/");
var userAppPath = path.resolve(".");
if(process.argv.length === 3)
	userAppPath = path.resolve(process.argv[2]);


//console.log(EXECUTABLE_PATH, EXECUTABLE_NAME, EXECUTABLE_CONFIGURATION_PATH, userAppPath);


const { execFile } = require('child_process');
const child = execFile(EXECUTABLE_NAME, [EXECUTABLE_CONFIGURATION_PATH, userAppPath], {cwd : EXECUTABLE_CONFIGURATION_PATH}, (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
