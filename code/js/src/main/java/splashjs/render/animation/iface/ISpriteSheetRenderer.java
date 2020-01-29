package splashjs.render.animation.iface;

import splashjs.render.events.iface.IEventDispatcherRenderer;
import splashjs.display.iface.ISprite;
import splashjs.display.iface.IMovieClip;

public interface ISpriteSheetRenderer extends IEventDispatcherRenderer {

	public ISprite getSprite(String label);
	public IMovieClip getMovieClip(String label);
	public int getWidth();
	public int getHeight();
}