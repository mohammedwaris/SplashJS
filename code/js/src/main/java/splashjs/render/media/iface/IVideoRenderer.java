package splashjs.render.media.iface;

import splashjs.media.iface.ICamera;
import splashjs.render.display.iface.IDisplayObjectRenderer;

public interface IVideoRenderer extends IDisplayObjectRenderer {

	public void playVideo();
	
	public void attachCamera(ICamera camera);

}