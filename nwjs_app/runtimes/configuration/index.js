"use strict"


const fs = require("fs");
const path = require("path");
const url = require("url");


//openWindow();


function openWindow() {
	nw.Window.open('index.html', {}, function(win) {
		//win.eval(null, 'document.write("' + nw.App.argv + '");');
	});
}

const SPLASHJS_LIB_FILE_NAME = "bundle-min.js";
const USER_APP_PATH = nw.App.argv[0];
const APPJSON_PATH_WITH_NAME = path.resolve(USER_APP_PATH + "/" + "app-conf.json");

const SPLASHJS_LIB_PATH = path.resolve(USER_APP_PATH + "/" + SPLASHJS_LIB_FILE_NAME);
var mainJSClassName = "App";
var mainJSFileName = "App.js"
var windowWidth = 600;
var windowHeight = 400;
if(fs.existsSync(APPJSON_PATH_WITH_NAME)) {
	let rawdata = fs.readFileSync(APPJSON_PATH_WITH_NAME);
	let appJSON = JSON.parse(rawdata);

	if(appJSON.width != undefined)
		windowWidth = appJSON.width;
	if(appJSON.height != undefined)
		windowHeight = appJSON.height;
	if(appJSON.main != undefined) {
		mainJSFileName = appJSON.main;
		if(mainJSFileName.endsWith(".js"))
			mainJSClassName = mainJSFileName.substring(0, mainJSFileName.lastIndexOf("."));
		else {
			mainJSClassName = mainJSFileName;
			mainJSFileName = mainJSFileName + ".js";
		}
	}
}else{
	console.log("app-conf.json file not found");	
}

//console.log(USER_APP_PATH, APPJSON_PATH_WITH_NAME, mainJSClassName, mainJSFileName);

const MAIN_JS_FILE_PATH_WITH_NAME = path.resolve(USER_APP_PATH + "/" + mainJSFileName);

const USER_APP_DIR_URL = url.pathToFileURL(USER_APP_PATH) + '/';

const splashJSLibText = fs.readFileSync(SPLASHJS_LIB_PATH, "utf8");
const mainJSText = fs.readFileSync(MAIN_JS_FILE_PATH_WITH_NAME, "utf8");

const initUserAppJSText = "splashjs.SplashJS.render(" + mainJSClassName + ", 'myDiv', " + windowWidth + ", " + windowHeight + ");";


const initJSText = `let baseTag = document.createElement('base');
					baseTag.setAttribute('href', '${USER_APP_DIR_URL}');
					document.head.appendChild(baseTag);
					document.body.style.overflow = 'hidden';
					document.body.style.width = '100%';
					document.body.style.height = '100';`;

				
//const updateBaseURL = "updateBaseURL('" + USER_APP_DIR_URL + "');";



nw.Window.open('index.html', {}, function(win) {
		win.title = "SplashJS WebPlayer";
		win.width = windowWidth;
		win.height = windowHeight;
		win.on('loaded' , () => {
			win.eval(null, initJSText);
			win.eval(null, splashJSLibText);
			win.eval(null, mainJSText);
			win.eval(null, initUserAppJSText);
			
		});
});









