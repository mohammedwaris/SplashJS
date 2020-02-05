package splashjs.animation;

import java.util.ArrayList;

import splashjs.Global;
import splashjs.events.EventDispatcher;
import splashjs.animation.iface.ISpriteSheet;
import splashjs.animation.iface.IMovieClipData;
import splashjs.animation.iface.ISpriteData;
import splashjs.animation.iface.IFrame;
import splashjs.display.iface.ISprite;
import splashjs.display.iface.IMovieClip;
import splashjs.render.animation.iface.ISpriteSheetRenderer;
import splashjs.utils.iface.IResource;

public class SpriteSheet extends EventDispatcher implements ISpriteSheet {

	private String imagePath;
	private String imageBase64;
	private IResource resource;
	
	private ArrayList<IMovieClipData> movieClipsData = new ArrayList<IMovieClipData>();
	private ArrayList<ISpriteData> spritesData = new ArrayList<ISpriteData>();
	
	public SpriteSheet(String imagePath) {
		super("spriteSheet");
		this.imagePath = imagePath;
		super.setRenderer(Global.global.getRendererCreator().createRenderer(SpriteSheet.class, this));
		
	
	
	}
	
	public SpriteSheet(IResource resource) {
		super("spriteSheet");
		this.resource = resource;
		this.imagePath = resource.getResourcePath();
		super.setRenderer(Global.global.getRendererCreator().createRenderer(SpriteSheet.class, this));
	}
	
	public String getImagePath() {
		return this.imagePath;
	}
	
	public IResource getResource() {
		return this.resource;
	}
	
	public void setImageBase64(String imageBase64) {
		this.imageBase64 = imageBase64;
	}
	
	public String getImageBase64() {
		return this.imageBase64;
	}
	
	public int getWidth() {
		return ((ISpriteSheetRenderer)super.getRenderer()).getWidth();
	}
	
	public int getHeight() {
		return ((ISpriteSheetRenderer)super.getRenderer()).getHeight();
	}
	
	
	
	public void defineSprite(String label, IFrame frame) {
		spritesData.add(new SpriteData(this, label, frame));
	}
	
	public void defineMovieClip(String label, int frameWidth, int frameHeight, int...frameIndices) {
		
		IFrame[] frames = new Frame[frameIndices.length];
		IFrame frame = null;
		for(int i=0;i<frameIndices.length;i++){
			frame = new Frame(frameWidth, frameHeight, frameIndices[i]);
			frames[i] = frame;
		}
		movieClipsData.add(new MovieClipData(this, label, frames));
	}
	
	/*
	public void defineMovieClip(String name, IFrame...frames) {
		movieClipsData.add(new MovieClipData(this, name, frames));
	}*/
	
	private ISprite getSprite(String name) {
		return ((ISpriteSheetRenderer)super.getRenderer()).getSprite(name);
	}
	
	public IMovieClip getMovieClip(String name) {
		return ((ISpriteSheetRenderer)super.getRenderer()).getMovieClip(name);
	}
	
	public ISpriteData getSpriteDataByLabel(String label) {
		ISpriteData spriteData = null;
		for(int i=0;i<spritesData.size();i++) {
			if(spritesData.get(i).getLabel().equalsIgnoreCase(label)) {
				spriteData = spritesData.get(i);
				break;
			}
		}
		return spriteData;
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
	
	public ArrayList<IMovieClipData> getAllAnimations() {
		return this.movieClipsData;
	}
	
	
	
}