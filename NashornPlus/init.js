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
load("libs/browser-polyfill.min.js");
load("libs/babel.min.js");
load("es5/File.js");

var trace = print;
var console = console || {};
console.log = print;
console.info = print;

var loadJS = function(filename) {
	var jsTextES6 = sb.filesystem.File.readFileAsString(filename);
	var jsTextES5 = "";
	try {
		jsTextES5 = Babel.transform(jsTextES6, {presets:['es2015']}).code;
	}catch(error) {
		print(error);
	}

	load({name: "", script: jsTextES5});
}

