const webpack = require('webpack');
const AppJSON = require('./AppJSON');
const path = require('path');
const fs = require('fs');
const Log = require('./Log');






class BundleModule {

	constructor(userAppPath) {
		this.userAppPath = userAppPath;
		//console.log(this.userAppPath);
		this.appJSON = new AppJSON(this.readAppConfFileAsJSONObject());
		this.mainJSFilePathWithName = path.join(this.userAppPath, this.appJSON.getMainJSFileName());
		this.outputDir = path.resolve(this.userAppPath, 'dist');
		this.outputFileName = this.appJSON.getAppName() + ".web.js";
		this.outputFilePathWithName = path.join(this.outputDir, this.outputFileName);
		this.appJSONObject = this.appJSON.getAppJSONObject();
		this.getEmbeddedLibraryJSON();
		var initJSText = 
		`${this.importResourceStatements}
		import ${this.appJSON.getMainJSClassName()} from './${this.appJSON.getMainJSClassName()}';
		splashjs.EmbeddedLibrary.setEmbeddedLibraryJSON(${this.embeddedLibraryJSONString});
		splashjs.SplashJS.render(${this.appJSON.getMainJSClassName()}, "${this.appJSONObject.browser.parent}", ${this.appJSON.getWidth()}, ${this.appJSON.getHeight()});`;
		
		//console.log(initJSText);
		this.initJSFilePathWithName = path.join(this.userAppPath, this.outputFileName);
		fs.writeFileSync(this.initJSFilePathWithName, initJSText);
		this.bundleObject = {
			entry: this.initJSFilePathWithName,
			output: {
				path: this.outputDir,
				filename: this.outputFileName
			},
			mode: 'production',
			externals: {
				splashjs: {
					commonjs: 'splashjs',
					amd: 'splashjs',
					root: 'splashjs'
				}
			},
			module: {
				rules: [
						/*	{
								test: /\.js$/,
								exclude: /node_modules/,
								loader: 'eslint-loader',
								options: {
									emitError: true,
									failOnError: true,
									outputReport: {
										filePath: 'checkstyle.xml'
									}
								}
							}, */
							{
								test: /\.(png|jpg|gif|svg)$/i,
								use: [
										{
											loader: 'url-loader',
											options: {
							
											},
										},
								],
							},
				],
			}
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
	
	getEmbeddedLibraryJSON() {
		var embeddedLibraryPathWithName = path.join(this.userAppPath, "EmbeddedLibrary");
		if(fs.existsSync(embeddedLibraryPathWithName)) {
			this.embeddedLibraryJSONString = "{";
			this.importResourceStatements = "";
			this.processDiectoryForResources(embeddedLibraryPathWithName);
			this.embeddedLibraryJSONString += "}";
			console.log(this.embeddedLibraryJSONString, this.importResourceStatements);
		}else{
			this.embeddedLibraryJSONString = "{}";
			this.importResourceStatements = "";
		}
			
	}
	
	processDiectoryForResources(directory) {
		fs.readdirSync(directory).forEach(file => {
				
				var filePathWithName = path.join(this.userAppPath, './EmbeddedLibrary/', file);
				if(fs.statSync(filePathWithName).isDirectory()) {
					this.processDiectoryForResources(filePathWithName);
				}else{
					var resource = filePathWithName.replace(/[^a-zA-Z0-9]/g, '');
					this.importResourceStatements += `import ${resource} from '${'./EmbeddedLibrary/' + file}';`;
					this.embeddedLibraryJSONString += `"${file}": ${resource},`;
				}
				
				//console.log(file);
				//fs.statSync(
			});
	}
	
	getSplashJSFileAsText() {
		var splashJSFilePathWithName = path.join(__dirname, "splashjs.js");
		var jsText = fs.readFileSync(splashJSFilePathWithName, "utf8");
		return jsText;
	}
	
	readAppConfFileAsJSONObject() {
		var appConfFilePathWithName = path.join(this.userAppPath, "app-conf.json");
		var jsonString = fs.readFileSync(appConfFilePathWithName);
		var appJSONObject = JSON.parse(jsonString);
		return appJSONObject;
	}
}

module.exports = BundleModule;