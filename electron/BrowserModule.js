const url = require('url');
const fs = require('fs');
const path = require('path');
const AppJSON = require('./AppJSON');
const Log = require('./Log');
const WebPlayer = require('./webplayer/WebPlayer');

var defaultAppJSONObject = {
	name: "app",
	main: "App.js",
	width: 600,
	height: 400,
	browser : {
		parent: "splashJSDiv"
	}
};




class BrowserModule {
	
	constructor(userAppPath) {
		this.userAppPath = userAppPath;
		this.appJSON = new AppJSON(this.readAppConfFileAsJSONObject());
		this.webPlayer = new WebPlayer(this.userAppPath);
		this.webPlayer.setSize(this.appJSON.getWidth(), this.appJSON.getHeight());
		//this.webPlayer.evalJS(this.getBundleJSFileAsText());
	}
	
	getAppJSON() {
		return this.appJSON;
	}
	
	getUserAppBaseURL() {
		var baseURL = url.pathToFileURL(path.resolve(this.userAppPath) + "/");
		return baseURL;
	}
	
	getBundleJSFileAsText() {
		var bundleJSFilePathWithName = path.join(this.userAppPath, this.appJSON.getBundleJSFileName());
		var jsText = fs.readFileSync(bundleJSFilePathWithName, "utf8");
		return jsText;
	}
	
	getMainJSFileAsText() {
		var mainJSFilePathWithName = path.join(this.userAppPath, this.appJSON.getMainJSFileName());
		var jsText = fs.readFileSync(mainJSFilePathWithName);
		return jsText;
	}
	
	readAppConfFileAsJSONObject() {
		var appConfFilePathWithName = path.join(this.userAppPath, "app-conf.json");
		var jsonString = fs.readFileSync(appConfFilePathWithName);
		var appJSONObject = JSON.parse(jsonString);
		return appJSONObject;
	}

	showWebPlayer() {
		this.webPlayer.webContents.openDevTools();
		this.webPlayer.show();
	}
	
}

module.exports = BrowserModule;