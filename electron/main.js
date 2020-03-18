const { app, BrowserWindow, Menu } = require('electron');
const BrowserModule = require('./BrowserModule');
const path = require('path');
const fs = require('fs');
const Log = require('./Log');
const asar = require('asar');
const BundleModule = require('./BundleModule');

app.applicationMenu = null;


var browserModule;
var bundleModule;
var userAppPath = ".";
var command = "view";
var platform = "browser";

function processCommandLineArguments() {

	if(process.argv[2] !== undefined)
		command = process.argv[2];
	if(process.argv[3] !== undefined)
		platform = process.argv[3];
	if(process.argv[4] !== undefined)
		userAppPath = process.argv[4];

	if(command == "view") {
		if(platform == "browser") {
			if(isAppConfFileExists(userAppPath)){
				var appJSONObject = readAppConfFileAsJSONObject(userAppPath);
				browserModule = new BrowserModule(userAppPath);
				var appJSON = browserModule.getAppJSON();
				createSplashJSPlayerWindow(
					appJSON.getWidth(), appJSON.getHeight(), 
					browserModule.getBundleJSFileAsText(), 
					browserModule.getUserAppBaseURL()
				);
			}else{
				Log.warning("app-conf.json not found at " + path.resolve(userAppPath));
				app.quit();
			}
		}else if(platform == "desktop") {
			
		}
	}else if(command == "build") {
		if(platform == "browser") {
			bundleModule = new BundleModule(userAppPath);
		}
	} else {
		Log.error("invalid command");
		app.quit();
	}

}

function isAppConfFileExists(userAppPath) {
	var appConfFilePathWithName = path.join(userAppPath, "app-conf.json");
	return fs.existsSync(appConfFilePathWithName);
}

function readAppConfFileAsJSONObject(userAppPath) {
	var appConfFilePathWithName = path.join(userAppPath, "app-conf.json");
	var jsonString = fs.readFileSync(appConfFilePathWithName);
	var appJSONObject = JSON.parse(jsonString);
	return appJSONObject;
}



function createSplashJSPlayerWindow (width, height, jsText, baseURL) {
	
	const initJSText = 
`
	document.body.style.overflow = "hidden";
	document.body.width = "100%";
	document.body.height = "100%";
	document.head.innerHTML = '<base href=${baseURL} >';
`;
  // Create the browser window.
  const win = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      nodeIntegration: true
    }
  });

	win.loadFile("player.html");
	win.setTitle("SplashJS Player");
	win.webContents.executeJavaScript(initJSText, true).then(()=>{});
	win.webContents.executeJavaScript(jsText).then((result) => {
		console.log("script executed.");
	}).catch((error) => {
		console.log(error);
	});
	

	
  // Open the DevTools.
  //win.webContents.openDevTools();
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	processCommandLineArguments();
	//createWindow();
});



// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    //createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.