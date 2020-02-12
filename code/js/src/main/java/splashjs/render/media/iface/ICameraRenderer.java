package splashjs.render.media.iface;

import splashjs.render.events.iface.*;
import splashjs.def.js.MediaStream;

public interface ICameraRenderer extends IEventDispatcherRenderer {

	public void setMediaStream(splashjs.def.js.MediaStream mediaStream);
	public splashjs.def.js.MediaStream getMediaStream();
}