package splashjs;

import splashjs.render.EmbeddedLibraryRenderer;
import splashjs.lang.NoSuchFileError;

public class EmbeddedLibrary {

	public static void setEmbeddedLibraryJSON(Object json) {
		EmbeddedLibraryRenderer.setEmbeddedLibraryJSON(json);
	}
	
	public static String get(String filename) throws NoSuchFileError {
		return EmbeddedLibraryRenderer.get(filename);
	}

}