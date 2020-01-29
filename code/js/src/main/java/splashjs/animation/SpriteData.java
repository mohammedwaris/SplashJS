package splashjs.animation;

import splashjs.animation.iface.IFrame;
import splashjs.animation.iface.ISpriteSheet;
import splashjs.animation.iface.ISpriteData;

public class SpriteData implements ISpriteData {

	private ISpriteSheet spriteSheet;
	private IFrame frame;
	private String label;
	
	public SpriteData(ISpriteSheet spriteSheet, String label, IFrame frame) {
		this.spriteSheet = spriteSheet;
		this.frame = frame;
		this.label = label;
	}
	
	public String getLabel() {
		return this.label;
	}
	
	public IFrame getFrame() {
		return this.frame;
	}
	
	public ISpriteSheet getSpriteSheet() {
		return this.spriteSheet;
	}
}