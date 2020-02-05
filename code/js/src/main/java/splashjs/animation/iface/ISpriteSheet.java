package splashjs.animation.iface;

import splashjs.events.iface.IEventDispatcher;
import splashjs.utils.iface.IResource;

public interface ISpriteSheet extends IEventDispatcher {

	public String getImagePath();
	public ISpriteData getSpriteDataByLabel(String name);
	public IMovieClipData getMovieClipDataByLabel(String name);
	public int getWidth();
	public int getHeight();
	public void setImageBase64(String imageBase64);
	public String getImageBase64();
	public IResource getResource();
}