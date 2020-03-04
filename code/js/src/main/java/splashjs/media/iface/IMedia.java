package splashjs.media.iface;

import splashjs.display.iface.IDisplayObject;

public interface IMedia extends IDisplayObject {
	
	public String getPath();
	public void setPath(String videoPath);
	
}