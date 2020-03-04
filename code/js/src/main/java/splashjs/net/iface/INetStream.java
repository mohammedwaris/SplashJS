package splashjs.net.iface;

import splashjs.events.iface.IEventDispatcher;
import splashjs.media.iface.IVideo;

public interface INetStream extends IEventDispatcher {
	
	public void setVideoAttached(IVideo videoAttached);
	public IVideo getVideoAttached();

}