package splashjs.net;

import splashjs.Global;
import splashjs.net.iface.INetStream;
import splashjs.net.iface.INetConnection;
import splashjs.events.EventDispatcher;
import splashjs.media.iface.IVideo;
import splashjs.render.net.iface.INetStreamRenderer;

public class NetStream extends EventDispatcher implements INetStream {

	private INetConnection netConnection;
	private IVideo videoAttached = null;
	
	public NetStream(INetConnection netConnection) {
		this.netConnection = netConnection;
		super.setRenderer(Global.global.getRendererCreator().createRenderer(NetStream.class, this));
	}
	
	public void play(String...params) {
		((INetStreamRenderer)super.getRenderer()).play(params);
	}
	
	public void setVideoAttached(IVideo videoAttached) {
		this.videoAttached = videoAttached;
	}
	
	public IVideo getVideoAttached() {
		return this.videoAttached;
	}
		
}