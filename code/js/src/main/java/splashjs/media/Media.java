package splashjs.media;

import splashjs.events.EventDispatcher;
import splashjs.display.DisplayObject;
import splashjs.media.iface.IMedia;
import splashjs.render.media.iface.IMediaRenderer;

public class Media extends DisplayObject implements IMedia {
	
	private String mediaPath;
	
	public Media(String id) {
		super(id);
	}
	
	public String getPath() {
		return this.mediaPath;
	}
	
	public void setPath(String path) {
		this.mediaPath = path;
		((IMediaRenderer)super.getRenderer()).setPath();
	}

}