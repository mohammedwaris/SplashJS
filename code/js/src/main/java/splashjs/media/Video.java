package splashjs.media;

import splashjs.Global;
import splashjs.display.DisplayObject;
import splashjs.events.Event;
import splashjs.events.iface.IEvent;
import splashjs.utils.iface.IResource;
import splashjs.media.iface.IVideo;
import splashjs.render.media.iface.IVideoRenderer;

public class Video extends DisplayObject implements IVideo {
	
	private IResource resource;
	private String videoPath;

	
	public Video(IResource resource) {
		super("video");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Sound.class, this));
		this.videoPath = resource.getResourcePath();
	}
	
	public Video(String videoPath) {
		super("video");
		this.videoPath = videoPath;
	}

	

	public boolean dispatchEvent(IEvent event) {
		boolean val = super.dispatchEvent(event);
		
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			
		}
		
		return val;
	}
	
	@Override
	public String getVideoPath() {
		return videoPath;
	}
	
	@Override
	public void setVideoPath(String videoPath) {
		this.videoPath = videoPath;
		//if(super.getRenderer() != null)
			//super.getRenderer().setProperty(ElementProperty.SRC);
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