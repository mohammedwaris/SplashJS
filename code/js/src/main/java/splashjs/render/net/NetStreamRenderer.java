package splashjs.render.net;

import splashjs.render.events.EventDispatcherRenderer;
import splashjs.render.media.iface.IVideoRenderer;
import splashjs.render.net.iface.INetStreamRenderer;
import splashjs.net.iface.INetStream;
import splashjs.media.iface.IVideo;
import splashjs.events.iface.IEventDispatcher;

public class NetStreamRenderer extends EventDispatcherRenderer implements INetStreamRenderer {

	private INetStream netStream;
	
	public NetStreamRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		netStream = (INetStream)renderObject;
	}
	
	public void play(String...params) {
		if(params.length == 1) {
			String fileURI = params[0];
			IVideo video = netStream.getVideoAttached();
			video.setPath(fileURI);
		}
	}
	
}//end of class