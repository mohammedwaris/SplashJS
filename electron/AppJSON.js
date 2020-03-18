module.exports = class AppJSON {
	
	constructor(appJSONObject) {
		this.appJSONObject = appJSONObject;
		this.processAppJSONObject();
	}
	
	getAppJSONObject() {
		return this.appJSONObject;
	}
	
	getAppName() {
		return this.appJSONObject.name;
	}
	
	getMainJSFileName() {
		return this.appJSONObject.main;
	}
	
	getBundleJSFileName() {
		return this.getAppName() + ".web.js";
	}
	
	getMainJSClassName() {
		var mainJSFileName = this.appJSONObject.main;
		var mainJSClassName = mainJSFileName.substring(0, mainJSFileName.indexOf("."));
		return mainJSClassName;
	}
	
	getWidth() {
		return this.appJSONObject.width;
	}
	
	getHeight() {
		return this.appJSONObject.height;
	}
	
	
	
	processAppJSONObject() {
		if(this.appJSONObject.name == undefined)
			this.appJSONObject.name = defaultAppJSONObject.name;
		if(this.appJSONObject.main == undefined)
			this.appJSONObject.main = defaultAppJSONObject.main;
		if(this.appJSONObject.width == undefined)
			this.appJSONObject.width = defaultAppJSONObject.width;
		if(this.appJSONObject.height == undefined)
			this.appJSONObject.height = defaultAppJSONObject.height;
		
		if(this.appJSONObject.browser == undefined)
			this.appJSONObject.browser = defaultAppJSONObject.browser;
		else{
			if(this.appJSONObject.browser.parent == undefined)
				this.appJSONObject.browser.parent = defaultAppJSONObject.browser.parent;
		}
	}
	
}

