package splashjs.animation;

import splashjs.animation.iface.IFrame;

public class Frame implements IFrame {
	
	private String type = FrameType.FIXED;
	private int index = -1;
	private int width = -1;
	private int height = -1;
	private int x = 0;
	private int y = 0;
	
	public Frame(int width, int height, int index) {
		this.width = width;
		this.height = height;
		this.index = index;
	}

	public Frame(int width, int height) {
		this.width = width;
		this.height = height;
	}
	
	public Frame(int x, int y, int width, int height) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}
	
	public int getX() {
		return this.x;
	}
	
	public int getY() {
		return this.y;
	}
	
	public int getWidth() {
		return this.width;
	}
	
	public int getHeight() {
		return this.height;
	}
	
	public int getIndex() {
		return this.index;
	}

	class FrameType {
		public static final String FIXED = "fixed";
	}
}