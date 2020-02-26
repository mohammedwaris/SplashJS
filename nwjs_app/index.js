
const EXECUTABLE_NAME = "nw";
const EXECUTABLE_PATH = "runtimes/win32_sdk/"
const EXECUTABLE_CONFIGURATION_PATH = "../configuration/";

const { execFile } = require('child_process');
const child = execFile(EXECUTABLE_NAME, [EXECUTABLE_CONFIGURATION_PATH], {cwd: EXECUTABLE_PATH}, (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});
