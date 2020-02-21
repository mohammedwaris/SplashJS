package splashjs.render.media.iface;

import splashjs.render.events.iface.IEventDispatcherRenderer;

public interface ICameraRenderer extends IEventDispatcherRenderer {

	public void setMediaStream(splashjs.def.webrtc.MediaStream mediaStream);
	public splashjs.def.webrtc.MediaStream getMediaStream();
	public void requestPermission();
}