package splashjs.animation;

import splashjs.Global;
import splashjs.display.iface.IDisplayObject;
import splashjs.animation.iface.ITransition;

public class TranslateTransition extends Transition {
	
	private int fromX = -1;
	private int toX   = -1;
	private int fromY = -1;
	private int toY   = -1;
	
	public TranslateTransition() {
		super.setRenderer(Global.global.getRendererCreator().createRenderer(ScaleTransition.class, this));
	}
	
	public ITransition setFromX(int fromX) {
		this.fromX = fromX;
		return this;
	}
	
	public int getFromX() {
		return this.fromX;
	}
	
	public ITransition setFromY(int fromY) {
		this.fromY = fromY;
		return this;
	}
	
	public int getFromY() {
		return this.fromY;
	}
	
	public ITransition setToX(int toX) {
		this.toX = toX;
		return this;
	}
	
	public int getToX() {
		return this.toX;
	}
	
	public ITransition setToY(int toY) {
		this.toY = toY;
		return this;
	}
	
	public int getToY() {
		return this.toY;
	}
	
	public ITransition setFromXY(int fromX, int fromY) {
		this.fromX = fromX;
		this.fromY = fromY;
		return this;
	}
	
	public ITransition setToXY(int toX, int toY) {
		this.toX = toX;
		this.toY = toY;
		return this;
	}
	
	@Override
	public ITransition update(double nextValue) {
		IDisplayObject targetObject = super.getTargetObject();
		return this;
	}
	
	
	
}