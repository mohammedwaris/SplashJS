package splashjs.render.display.iface;


public interface IMovieClipRenderer extends ISpriteRenderer {
	
	public void play();
	public void gotoAndStop(String label, int frameIndex);
	public void gotoAndPlay(String label, int loopCount);
	public void stop();
	public boolean isPlaying();
	public boolean isPlaying(String label);
	public String getCurrentLabel();
	public int getCurrentFrameIndex();
	public int getCurrentLoopCount();
	public boolean isLooping();
	
}