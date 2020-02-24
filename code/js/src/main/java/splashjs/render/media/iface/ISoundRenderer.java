package splashjs.render.media.iface;

import splashjs.render.display.iface.IDisplayObjectRenderer;

public interface ISoundRenderer extends IDisplayObjectRenderer {

	public void setSoundPath();
	public void playSound();
	public void pauseSound();

}