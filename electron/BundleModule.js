const webpack = require('webpack');
const AppJSON = require('./AppJSON');
const path = require('path');
const fs = require('fs');
const Log = require('./Log');






class BundleModule {

	constructor(userAppPath) {
		this.userAppPath = userAppPath;
		console.log(this.userAppPath);
		this.appJSON = new AppJSON(this.readAppConfFileAsJSONObject());
		this.mainJSFilePathWithName = path.join(this.userAppPath, this.appJSON.getMainJSFileName());
		this.outputDir = path.resolve(this.userAppPath, 'dist');
		this.outputFileName = this.appJSON.getAppName() + ".web.js";
		this.outputFilePathWithName = path.join(this.outputDir, this.outputFileName);
		this.appJSONObject = this.appJSON.getAppJSONObject();
		var initJSText = 
		`//import EmbeddedLibraryJSON from "./EmbeddedLibrary.json";
		import splashjs from './bundle';
		import ${this.appJSON.getMainJSClassName()} from './${this.appJSON.getMainJSClassName()}';
		//splashjs.EmbeddedLibrary.setEmbeddedLibraryJSON(EmbeddedLibraryJSON);
		splashjs.SplashJS.render(${this.appJSON.getMainJSClassName()}, "${this.appJSONObject.browser.parent}", ${this.appJSON.getWidth()}, ${this.appJSON.getHeight()});`;
		
		this.initJSFilePathWithName = path.join(this.userAppPath, this.outputFileName);
		fs.writeFileSync(this.initJSFilePathWithName, initJSText);
		this.bundleObject = {
			entry: this.initJSFilePathWithName,
			output: {
				path: this.outputDir,
				filename: this.outputFileName
			},
			mode: 'production'
		};
		webpack(this.bundleObject,
			(err,stats) => {
				fs.unlinkSync(this.initJSFilePathWithName);
				if(err) {
					Log.error(err);
				}
				else if(stats.hasErrors()) {
					Log.error(stats);
					Log.error("bundle creation failed.");
				}else{
					fs.writeFileSync(path.join(this.outputDir, "app-conf.json"), JSON.stringify(this.appJSON.getAppJSONObject()));
					//startPlayerProcess();
					console.log("bundle created");
				}
			});
			
		
	}
	
	readAppConfFileAsJSONObject() {
		var appConfFilePathWithName = path.join(this.userAppPath, "app-conf.json");
		var jsonString = fs.readFileSync(appConfFilePathWithName);
		var appJSONObject = JSON.parse(jsonString);
		return appJSONObject;
	}
}

module.exports = BundleModule;