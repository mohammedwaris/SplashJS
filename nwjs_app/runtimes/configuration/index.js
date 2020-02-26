"use strict"

const fs = require("fs");
const path = require("path");
const url = require("url");

const SPLASHJS_LIB_PATH = "../../../demo/walk/bundle-min.js";

var mainJSLibPath = "../../../demo/walk/Walk.js";

var appFolder = path.dirname(path.resolve(mainJSLibPath));
var appFolderURL = url.pathToFileURL(appFolder) + '/';

const splashJSLibText = fs.readFileSync(SPLASHJS_LIB_PATH, "utf8");
const mainJSLibText = fs.readFileSync(mainJSLibPath, "utf8");

const initJSText = "splashjs.SplashJS.render(Walk, 'myDiv', 550, 400);";

//var myJS = "console.log(document.head);";
//var baseURLText = 
//var myJS = "console.log(\"document.head.innerText = '<base href=" + appFolderURL + " target=_blank>';\")";

var myJS = "document.head.innerHTML = '<base href=" + appFolderURL + " target=_blank>';";

//var stage = new splashjs.display.Stage("myDiv", 550, 400);
//stage.addChild(new Walk());


nw.Window.open('index.html', {}, function(win) {
		win.showDevTools();
		win.title = "SplashJS";
		win.width = 550;
		win.height = 400;
		win.on('loaded' , () => {
			win.eval(null, myJS);
			win.eval(null, splashJSLibText);
			win.eval(null, mainJSLibText);
			win.eval(null, initJSText);
			
		});

	});

if(fs.existsSync('app-conf.json')) {
	let rawdata = fs.readFileSync('app-conf.json');
	let appJSON = JSON.parse(rawdata);
	console.log(appJSON);
	
}else{
	console.log("app-conf.json file not found");
	
}


