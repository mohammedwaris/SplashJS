package splashjs;

import splashjs.render.EmbeddedLibraryRenderer;

public class EmbeddedLibrary {

	public static void setEmbeddedLibraryJSON(Object json) {
		EmbeddedLibraryRenderer.setEmbeddedLibraryJSON(json);
	}
	
	public static String get(String filename) {
		return EmbeddedLibraryRenderer.get(filename);
	}

}