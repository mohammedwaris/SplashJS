package splashjs.display;

import java.util.ArrayList;

import splashjs.Global;
import splashjs.animation.iface.ISpriteSheet;
import splashjs.display.iface.IMovieClip;
import splashjs.animation.iface.IMovieClipData;
import splashjs.render.display.iface.IMovieClipRenderer;

public class MovieClip extends Sprite implements IMovieClip {
	
	
	private ArrayList<IMovieClipData> movieClipsData;
	private int frameRate = 10;
	
	
	
	public MovieClip(IMovieClipData movieClipData) {
		super("movieClip");
		movieClipsData = new ArrayList<IMovieClipData>();
		movieClipsData.add(movieClipData);
		super.setRenderer(Global.global.getRendererCreator().createRenderer(MovieClip.class, this));
		init();
	}
	
	public MovieClip(ArrayList<IMovieClipData> movieClipsData) {
		super("movieClip");
		this.movieClipsData = movieClipsData;
		super.setRenderer(Global.global.getRendererCreator().createRenderer(MovieClip.class, this));
		init();
	}
	
	private void init() {
		if(getAllLabels().size() > 0) {
			this.gotoAndStop(getAllLabels().get(0));
		}
	}
	
	public IMovieClipData getMovieClipDataByLabel(String label) {
		IMovieClipData movieClipData = null;
		for(int i=0;i<movieClipsData.size();i++) {
			if(movieClipsData.get(i).getLabel().equalsIgnoreCase(label)) {
				movieClipData = movieClipsData.get(i);
				break;
			}
		}
		return movieClipData;
	}
	
	public void setFrameRate(int frameRate) {
		this.frameRate = frameRate;
	}
	
	public int getFrameRate() {
		return this.frameRate;
	}
	
	public void gotoAndStop(String label) {
		this.gotoAndStop(label, 0);
	}
	
	public void gotoAndStop(String label, int frameIndex) {
		((IMovieClipRenderer)super.getRenderer()).gotoAndStop(label, frameIndex);
	}
	
	public void gotoAndPlay(String label) {
		this.gotoAndPlay(label, 1);
	}
	
	public void gotoAndPlay(String label, int loopCount) {
		((IMovieClipRenderer)super.getRenderer()).gotoAndPlay(label, loopCount);
	}
	
	public String getCurrentLabel() {
		return ((IMovieClipRenderer)super.getRenderer()).getCurrentLabel();
	}
	
	public int getCurrentFrameIndex() {
		return ((IMovieClipRenderer)super.getRenderer()).getCurrentFrameIndex();
	}
	
	public boolean isPlaying() {
		return ((IMovieClipRenderer)super.getRenderer()).isPlaying();
	}
	
	public boolean isPlaying(String label) {
		return ((IMovieClipRenderer)super.getRenderer()).isPlaying(label);
	}
	
	public int getCurrentLoopCount() {
		return ((IMovieClipRenderer)super.getRenderer()).getCurrentLoopCount();
	}
	
	public boolean isLooping() {
		return ((IMovieClipRenderer)super.getRenderer()).isLooping();
	}
	
	public ArrayList<String> getAllLabels() {
		ArrayList<String> labels = new ArrayList<String>();
		for(int i=0;i<movieClipsData.size();i++) {
			labels.add(movieClipsData.get(i).getLabel());
		}
		return labels;
	}
	
	public void play() {
		((IMovieClipRenderer)super.getRenderer()).play();
	}
	
	public void stop() {
		((IMovieClipRenderer)super.getRenderer()).stop();
	}
	
	
}