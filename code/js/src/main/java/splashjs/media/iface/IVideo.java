package splashjs.media.iface;

import splashjs.display.iface.IDisplayObject;

public interface IVideo extends IDisplayObject {
	
	public String getVideoPath();
	public void setVideoPath(String videoPath);
	public ICamera getCamera();

}