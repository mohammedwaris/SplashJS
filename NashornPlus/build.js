load("libs/browser-polyfill.min.js");
load("libs/babel.min.js");

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

var jsText = "";
try {
	jsText = Babel.transform(readFileAsString("es6/File.js"), {presets:['es2015']}).code;
}catch(error) {
	print(error);
}

writeStringAsFile(jsText, "es5/File.js");