package splashjs.render;

public class EmbeddedLibraryRenderer {

	private static def.js.Object embeddedLibraryJSON;
	
	public static void setEmbeddedLibraryJSON(Object json) {
		embeddedLibraryJSON = (def.js.Object)json;
	}
	
	public static String get(String filename) {
		return embeddedLibraryJSON.$get(filename);
	}

}