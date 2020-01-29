package splashjs.animation.iface;

import splashjs.events.iface.IEventDispatcher;

public interface ISpriteSheet extends IEventDispatcher {

	public String getImagePath();
	public ISpriteData getSpriteDataByLabel(String name);
	public IMovieClipData getMovieClipDataByLabel(String name);
	public int getWidth();
	public int getHeight();
	
}