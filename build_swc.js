var File = java.io.File;
readFileAsString = function(filename) {
	return new java.lang.String(
                    java.nio.file.Files.readAllBytes(
                      java.nio.file.Paths.get(filename)
                    )
                  );
}

writeStringAsFile = function(str, filename) {
	java.nio.file.Files.write(java.nio.file.Paths.get(filename), str.getBytes());
}


load("dom/target/js/bundle.js");
load("dom/target/js/browser_globals.js");

console.log("Loaded Browser polyfill...");

load("code/js/target/js/bundle_es5.js");

load("libs/js/browser-polyfill.min.js");
load("libs/js/babel.min.js");


//var txt = Babel.transform(readFileAsString("demo/MyCircle.js"), {presets:['es2015']}).code;
//writeStringAsFile(txt, "demo/MyCircleES5.js");

load("demo/MyCircleES5.js");

trace(splashjs.Class.classes.length);
trace(new com.silverbrain.MyCircle());

/* function(result, error) {
	trace(result.code);
	trace(error);
});*/

//var jsText = "splashjs";

//trace(eval(jsText));
//console.log(Babel);
