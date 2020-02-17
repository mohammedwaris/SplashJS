package splashjs.render.media.iface;

import splashjs.render.events.iface.*;
import splashjs.def.js.MediaStream;

public interface ICameraRenderer extends IEventDispatcherRenderer {

	public void setMediaStream(def.js.Object mediaStream);
	public def.js.Object getMediaStream();
	public void requestPermission();
}