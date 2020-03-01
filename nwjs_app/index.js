
//console.log(process.argv);

const path = require('path');
const os   = require('os');
const webpack = require('webpack');

var PARENT_EXECUTABLE = process.argv[0];
if(String(process.argv[0]).endsWith("node"))
	PARENT_EXECUTABLE = process.argv[1];


/*
if(process.argv.length == 2)
	PARENT_EXECUTABLE = process.argv[0];
if(process.argv.length == 3)
	PARENT_EXECUTABLE = process.argv[2];
*/

webpack({
	entry: "../demo/walk/AppLauncher.js",
	output: {
		filename: "Walk.sdist.js",
		path: path.resolve("../demo/walk")
	}

}, (err,stats) => {
	if(err)
		console.error(err);
	if(stats.hasErrors())
		console.error(stats);
});

var EXECUTABLE_RELATIVE_PATH = "/runtimes/win32_sdk/";
if(os.type() == "Darwin") {
	EXECUTABLE_RELATIVE_PATH = "/runtimes/macos64_sdk/";
}else if(os.type() == "Linux") {

}


var PARENT_EXECUTABLE_FOLDER = path.dirname(path.resolve(PARENT_EXECUTABLE));
//var appFolderURL = url.pathToFileURL(appFolder) + '/';

const EXECUTABLE_PATH = path.resolve(PARENT_EXECUTABLE_FOLDER + EXECUTABLE_RELATIVE_PATH);
const EXECUTABLE_NAME = path.resolve(EXECUTABLE_PATH + "/nwjs.app/Contents/MacOS/nwjs");
const EXECUTABLE_CONFIGURATION_PATH = path.resolve(PARENT_EXECUTABLE_FOLDER + "/runtimes/configuration/");
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
  console.log(stderr);
});
