package splashjs.display.iface;

import java.util.ArrayList;

import splashjs.animation.iface.ISpriteSheet;
import splashjs.animation.iface.IMovieClipData;

public interface IMovieClip extends ISprite {

	public IMovieClipData getMovieClipDataByLabel(String label);
	public int getFrameRate();
	public void play();
	public void stop();
	public String getCurrentLabel();
	public int getCurrentFrameIndex();
	public int getCurrentLoopCount();
	public ArrayList<String> getAllLabels();
}