const path = require('path');
const fs = require('fs');
const { execFile } = require('child_process');
const { spawnSync } = require('child_process');

console.log("SplashJSRuntimeWin32");
console.log(__dirname);
console.log(__filename);

const EXECUTABLE_PATH_WITH_NAME = path.join(__dirname, "win32/nw.exe");
const EXECUTABLE_CONFIGURATION_PATH = path.join(__dirname, "configuration");
var userAppPath = "";
console.log(EXECUTABLE_PATH_WITH_NAME);
console.log(EXECUTABLE_CONFIGURATION_PATH);

//const nw = spawnSync(EXECUTABLE_PATH_WITH_NAME, [EXECUTABLE_CONFIGURATION_PATH]);


const child = execFile(EXECUTABLE_PATH_WITH_NAME, [EXECUTABLE_CONFIGURATION_PATH, userAppPath], {cwd : EXECUTABLE_CONFIGURATION_PATH}, (error, stdout, stderr) => {
  		if (error) {
    		throw error;
  		}
  		console.log(stdout);
  		console.log(stderr);
});

