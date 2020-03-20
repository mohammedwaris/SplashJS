const { BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');
const fs = require('fs');

module.exports = class WebPlayer extends BrowserWindow {
	
	constructor(userAppPath) {
		super({
				show: false, 
				webPreferences: {
      				nodeIntegration: true
    			}
    	});
    	if(userAppPath === undefined)
    		this.userAppPath = "./";
    	else
    		this.userAppPath = userAppPath;
		super.setTitle("SplashJS WebPlayer");
		super.loadFile("player.html");
		this.evalJS(this.getInitJSText());
		//console.log(this.getSplashJSFileAsText());
		//this.evalJS(this.getSplashJSFileAsText());
	}


	evalJS(jsText) {
		super.webContents.executeJavaScript(jsText)
		.then((result) => {
			//console.log(result);
		})
		.catch((error)=>{
			//console.log(error);
		});
	}

	getInitJSText() {
		var splashJSFilePathWithName = path.join(__dirname, "splashjs.js");
		var initJSText = `document.body.style.overflow = "hidden";
							document.body.width = "100%";
							document.body.height = "100%";
							document.head.innerHTML = '<base href=${this.getUserAppBaseURL()} >';
							`;
		return initJSText;
	}
	
	getSplashJSFileAsText() {
		var splashJSFilePathWithName = path.join(__dirname, "splashjs.lib.js");
		var jsText = fs.readFileSync(splashJSFilePathWithName, "utf8");
		return jsText;
	}

	getUserAppBaseURL() {
		var baseURL = url.pathToFileURL(path.resolve(this.userAppPath) + "/");
		return baseURL;
	}

	setSize(width, height) {
		super.setSize(width, height);
	}
}