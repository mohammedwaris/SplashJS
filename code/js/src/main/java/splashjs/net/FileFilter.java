package splashjs.net;

import splashjs.net.iface.IFileFilter;

public class FileFilter implements IFileFilter {
	
	private String description = "";
	private String extension = "";
	
	public FileFilter(String description, String extension) {
		this.description = description;
		this.extension = extension;
	}
	
	public String getDescription() {
		return this.description;
	}
	
	public String getExtension() {
		return this.extension;
	}
	
}