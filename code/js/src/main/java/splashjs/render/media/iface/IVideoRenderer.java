package splashjs.render.media.iface;

import splashjs.media.iface.ICamera;
import splashjs.net.iface.INetStream;


public interface IVideoRenderer extends IMediaRenderer {

	public void playVideo();
	
	public void attachCamera(ICamera camera);
	public void attachNetStream(INetStream netStream);

}