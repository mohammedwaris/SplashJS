package splashjs.animation;

import splashjs.display.iface.IDisplayObject;


import splashjs.animation.iface.ITransition;
import splashjs.render.animation.iface.ITransitionRenderer;

import splashjs.animation.easing.Linear;

public abstract class Transition extends Animation implements ITransition {

	protected IDisplayObject targetObject;
	protected double fromValue;
	protected double toValue;
	protected int duration;
	private boolean autoReverse = false;
	private int loopCount = 1;
	protected int delay = 0;
	protected String easing = Linear.EASE_NONE;
	
	public Transition() {
		
	}
	
	public void setTargetObject(IDisplayObject targetObject) {
		this.targetObject = targetObject;
	}
	
	public IDisplayObject getTargetObject() {
		return this.targetObject;
	}
	
	public void setAutoReverse(boolean autoReverse) {
		this.autoReverse = autoReverse;
	}
	
	public boolean getAutoReverse() {
		return this.autoReverse;
	}
	
	public void setLoopCount(int loopCount) {
		this.loopCount = loopCount;
	}
	
	public int getLoopCount() {
		return this.loopCount;
	}
	
	public void setEasing(String easing) {
		this.easing = easing;
	}
	
	public String getEasing() {
		return this.easing;
	}
	
	public void setFromValue(double fromValue) {
		this.fromValue = fromValue;
	}
	
	public double getFromValue() {
		return this.fromValue;
	}
		
	public void setToValue(double toValue) {
		this.toValue = toValue;
	}
	
	public double getToValue() {
		return this.toValue;
	}
	
	public void setDuration(int duration) {
		this.duration = duration;
		
	}
	
	public String getTransitionState() {
		return ((ITransitionRenderer)super.getRenderer()).getTransitionState();
	}
	
	public int getDuration() {
		return this.duration;
	}
	
	public void setDelay(int delay) {
		this.delay = delay;
	}
	
	public int getDelay() {
		return this.delay;
	}
	
	public boolean isRunning() {
		return ((ITransitionRenderer)super.getRenderer()).isRunning();
	}
	
	public void play() {
		((ITransitionRenderer)super.getRenderer()).play();
	}
	
	public void stop() {
		((ITransitionRenderer)super.getRenderer()).stop();
	}
	
	public abstract void update(IDisplayObject targetObject, double nextValue);
}