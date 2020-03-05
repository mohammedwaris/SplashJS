
//console.log(process.argv);

const fs = require("fs");
const path = require('path');
const os   = require('os');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

var PARENT_EXECUTABLE_PATH_WITH_NAME = process.argv[0];
if(String(process.argv[0]).endsWith("node") || String(process.argv[0]).endsWith("node.exe"))
	PARENT_EXECUTABLE_PATH_WITH_NAME = process.argv[1];



var EXECUTABLE_RELATIVE_PATH = "/runtimes/win32_sdk/";
var PARENT_EXECUTABLE_PATH = path.dirname(path.resolve(PARENT_EXECUTABLE_PATH_WITH_NAME));
var EXECUTABLE_PATH = path.resolve(PARENT_EXECUTABLE_PATH + EXECUTABLE_RELATIVE_PATH);
var EXECUTABLE_PATH_WITH_NAME = path.resolve(EXECUTABLE_PATH + "/nw");
var EXECUTABLE_CONFIGURATION_PATH = path.resolve(PARENT_EXECUTABLE_PATH + "/runtimes/configuration/");
if(os.type() == "Darwin") {
	EXECUTABLE_RELATIVE_PATH = "/runtimes/macos64_sdk/";
	EXECUTABLE_PATH = path.resolve(PARENT_EXECUTABLE_PATH + EXECUTABLE_RELATIVE_PATH);
	EXECUTABLE_PATH_WITH_NAME = path.resolve(EXECUTABLE_PATH + "/nwjs.app/Contents/MacOS/nwjs");
}else if(os.type() == "Linux") {

}

var userAppPath = path.resolve(".");

if(process.argv.length === 3)
	userAppPath = path.resolve(process.argv[2]);

var defaultAppJSON = {
	name:    "app",
	main:    "App.js",
	width:   600,
	height:  400,
	browser: {
		parent: "myDiv"
	}
};

var APPJSON_PATH_WITH_NAME = path.resolve(userAppPath + "/app-conf.json");
var mainJSClassName;
var mainJSFileName;
var appJSON;

if(fs.existsSync(APPJSON_PATH_WITH_NAME)) {
	let rawdata = fs.readFileSync(APPJSON_PATH_WITH_NAME);
	appJSON = JSON.parse(rawdata);

	if(appJSON.width == undefined)
		appJSON.width = defaultAppJSON.width;
	
	if(appJSON.height == undefined)
		appJSON.height = defaultAppJSON.height;
	
	if(appJSON.browser == undefined) {
		appJSON.browser = defaultAppJSON.browser;
	}else {
		if(appJSON.browser.parent == undefined)
			appJSON.browser.parent = defaultAppJSON.browser.parent;
	}
	
	if(appJSON.main == undefined) {
		appJSON.main = defaultAppJSON.main;
		mainJSClassName = "App";
		mainJSFileName = "App.js"
	}else{
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
	//exit(0);
}

var outputFilename = mainJSClassName + ".sdist.js";
var entryJSFilePathWithName = userAppPath + "/" + mainJSClassName + ".smain.js";
var smainJSText = 
`import splashjs from './bundle';
import ${mainJSClassName} from './${mainJSClassName}';
splashjs.SplashJS.render(${mainJSClassName}, "${appJSON.browser.parent}", ${appJSON.width}, ${appJSON.height});`;
				   
fs.writeFileSync(entryJSFilePathWithName, smainJSText);

webpack({
	entry: entryJSFilePathWithName,
	output: {
		filename: outputFilename,
		path: userAppPath
	},
	mode: 'production',
	module: {
		rules: [
			{
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
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						},
					},
				],
			},
		],
	},
	plugins: [

		
		
  	]

}, (err,stats) => {
	fs.unlinkSync(entryJSFilePathWithName);
	if(err) {
		console.error(err);
	}
	else if(stats.hasErrors()) {
		console.error(stats);
	}else{
		startPlayerProcess();
	}
});



//console.log(EXECUTABLE_PATH, EXECUTABLE_NAME, EXECUTABLE_CONFIGURATION_PATH, userAppPath);

function startPlayerProcess() {

	const { execFile } = require('child_process');
	const child = execFile(EXECUTABLE_PATH_WITH_NAME, [EXECUTABLE_CONFIGURATION_PATH, userAppPath], {cwd : EXECUTABLE_CONFIGURATION_PATH}, (error, stdout, stderr) => {
  		if (error) {
    		throw error;
  		}
  		console.log(stdout);
  		console.log(stderr);
	});

}
