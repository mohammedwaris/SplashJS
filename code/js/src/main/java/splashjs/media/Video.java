package splashjs.media;

import splashjs.Global;
import splashjs.display.DisplayObject;
import splashjs.events.Event;
import splashjs.events.iface.IEvent;
import splashjs.utils.iface.IResource;
import splashjs.media.iface.IVideo;
import splashjs.media.iface.ICamera;
import splashjs.net.iface.INetStream;
import splashjs.render.media.iface.IVideoRenderer;

public class Video extends Media implements IVideo {
	
	private IResource resource;
	private String videoPath;
	private ICamera camera;
	private INetStream netStream;


	public Video(int width, int height) {
		super("video");
		super.width = width;
		super.height = height;
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Video.class, this));
	}
	
	public Video(IResource resource) {
		super("video");
		this.videoPath = resource.getResourcePath();
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Video.class, this));
		
	}
	
	public Video(String videoPath) {
		super("video");
		this.videoPath = videoPath;
	}

	public void attachCamera(ICamera camera) {
		this.camera = camera;
		((IVideoRenderer)super.getRenderer()).attachCamera(camera);
	}
	
	public void attachNetStream(INetStream netStream) {
		this.netStream = netStream;
		this.netStream.setVideoAttached(this);
		((IVideoRenderer)super.getRenderer()).attachNetStream(netStream);
	}
	
	public ICamera getCamera() {
		return this.camera;
	}

	public boolean dispatchEvent(IEvent event) {
		boolean val = super.dispatchEvent(event);
		
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			
		}
		
		return val;
	}
	
	
	
	
	
	@Override
	public void render() {
		super.render();
		//super.getRenderer().setProperty(ElementProperty.BORDER, "1px solid blue");
		//super.getRenderer().setProperty(ElementProperty.WIDTH);
		//super.getRenderer().setProperty(ElementProperty.HEIGHT);
	}
	
	public void play() {
		((IVideoRenderer)super.getRenderer()).playVideo();
	}
	
	public String toString() {
		return "[object Video]";
	}
	


}