package splashjs.render.media.iface;

import splashjs.render.events.iface.*;

public interface ICameraRenderer extends IEventDispatcherRenderer {

	public void setMediaStream(def.webrtc.MediaStream mediaStream);
	public def.webrtc.MediaStream getMediaStream();
	public void requestPermission();
}