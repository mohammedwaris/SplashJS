package splashjs.render;

import static def.js.Globals.undefined;
import splashjs.lang.NoSuchFileError;

public class EmbeddedLibraryRenderer {

	private static def.js.Object embeddedLibraryJSON;
	
	public static void setEmbeddedLibraryJSON(Object json) {
		embeddedLibraryJSON = (def.js.Object)json;
	}
	
	public static String get(String filename) throws NoSuchFileError {
		String data = embeddedLibraryJSON.$get(filename);
		if(data == undefined || data == null) {
			throw new NoSuchFileError(filename + " not found in embedded library");
		}
		return data;
	}

}