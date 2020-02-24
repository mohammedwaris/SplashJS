var trace = print;
var console = console || {};
console.log = print;
console.info = print;

readFileAsString = function(filename) {
	return new java.lang.String(
                    java.nio.file.Files.readAllBytes(
                      java.nio.file.Paths.get(filename)
                    )
                  );
}
getAbsolutePath = function(filename) {
	return new java.io.File(filename).getAbsolutePath();
}
load("NashornPlus/libs/browser-polyfill.min.js");
load("NashornPlus/libs/babel.min.js");

trace("Loaded Babel...");

load("NashornPlus/es5/File.js");



var loadES6 = function(filename) {
	var jsTextES6 = readFileAsString(filename);
	var jsTextES5 = "";
	try {
		jsTextES5 = Babel.transform(jsTextES6, {presets:['es2015']}).code;
		//trace(jsTextES5);
	}catch(error) {
		print(error);
	}

	load({name: "", script: jsTextES5});
}

var loadES5 = function(filename) {
	load(filename);
}



load("dom/target/js/bundle.js");
load("dom/target/js/browser_globals.js");
trace("Loaded Browser Polyfill...");

//Loading splashjs library
loadES5("code/js/target/js/bundle_es5.js");
trace("Loaded SplashJS Library...");

loadES6("demo/MyCircle.js");



trace(com.silverbrain.MyCircle);
trace(new com.silverbrain.MyCircle());

