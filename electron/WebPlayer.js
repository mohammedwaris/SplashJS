const { BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

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
		this.evalJS(this.getInitJSText())
		
	}


	evalJS(jsText) {
		super.webContents.executeJavaScript(jsText)
		.then((result) => {
			console.log(result);
		})
		.catch((error)=>{
			console.log(error);
		});
	}

	getInitJSText() {
		var initJSText = `document.body.style.overflow = "hidden";
							document.body.width = "100%";
							document.body.height = "100%";
							document.head.innerHTML = '<base href=${this.getUserAppBaseURL()} >';`;
		return initJSText;
	}

	getUserAppBaseURL() {
		var baseURL = url.pathToFileURL(path.resolve(this.userAppPath) + "/");
		return baseURL;
	}

	setSize(width, height) {
		super.setSize(width, height);
	}
}