package splashjs.animation.iface;

import splashjs.events.iface.IEventDispatcher;

public interface IMovieClipData extends IEventDispatcher {

	public String getLabel();
	public IFrame[] getFrames();
	public ISpriteSheet getSpriteSheet();

}