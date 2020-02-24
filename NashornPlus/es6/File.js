var sb = sb || {};
sb.filesystem = sb.filesystem || {};

sb.filesystem.File = class File {

	constructor(args) {
		if(typeof(args) == undefined)
			this.nativeFile = new java.io.File();
		else if(typeof(args) == 'string') 
			this.nativeFile = new java.io.File(args);
		
	}
	
	getAbsolutePath() {
		return this.nativeFile.getAbsolutePath();
	}
	
	static readFileAsString(fileName) {
		return new java.lang.String(
                    java.nio.file.Files.readAllBytes(
                      java.nio.file.Paths.get(fileName)
                    )
                  );
	}
	
	static writeStringAsFile(str, filename) {
		java.nio.file.Files.write(java.nio.file.Paths.get(filename), str.getBytes());
	}
};