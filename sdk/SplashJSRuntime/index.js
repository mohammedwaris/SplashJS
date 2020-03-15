
if(process.env["splashjs.runtime"] == undefined) 
	process.env["splashjs.runtime"] = "/Application/splashjs-rt.app/MacOS/splashjs-rt";
else
	console.log(process.env["splashjs.runtime"]);
const path = require('path');
const fs = require('fs-extra');
const os = require('os');
//const { execFile } = require('child_process');
//const { spawnSync } = require('child_process');

console.log("SplashJSRuntime");
console.log(__dirname);
console.log(__filename);

var EXECUTABLE_PATH_WITH_NAME = ""; //path.join(__dirname, "win32/nw.exe");
var EXECUTABLE_CONFIGURATION_PATH = ""; //path.join(__dirname, "configuration");
var userAppPath = "";

if(os.type() == "Darwin") {
	EXECUTABLE_PATH_WITH_NAME = path.join(__dirname, "macos64/splashjs-rt.app/Contents/MacOS/nwjs");
	EXECUTABLE_CONFIGURATION_PATH = path.join(__dirname, "configuration");
	userAppPath = "";
}else if(os.type() == "Linux") {

}

console.log(fs.existsSync(path.join(__dirname, "macos64/splashjs-rt.zip")));
console.log(EXECUTABLE_PATH_WITH_NAME);
console.log(EXECUTABLE_CONFIGURATION_PATH);
//fs.copy(path.join(__dirname, "macos64/splashjs-rt.zip"), "./splashjs-rt.zip");

//const nw = spawnSync(EXECUTABLE_PATH_WITH_NAME, [EXECUTABLE_CONFIGURATION_PATH]);

/*
const child = execFile(EXECUTABLE_PATH_WITH_NAME, [EXECUTABLE_CONFIGURATION_PATH, userAppPath], {cwd : EXECUTABLE_CONFIGURATION_PATH}, (error, stdout, stderr) => {
  		if (error) {
    		throw error;
  		}
  		console.log(stdout);
  		console.log(stderr);
});

*/

