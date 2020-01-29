package splashjs.animation;

import splashjs.display.iface.IDisplayObject;


import splashjs.animation.iface.ITransition;
import splashjs.render.animation.iface.ITransitionRenderer;
import splashjs.render.animation.TransitionRenderer;

import splashjs.animation.easing.Linear;

public abstract class Transition extends Animation implements ITransition {

	protected IDisplayObject targetObject;
	protected double from;
	protected double to;
	protected int duration;
	private boolean autoReverse = false;
	private int loopCount = 1;
	protected int delay = 0;
	protected String easing = Linear.EASE_NONE;
	
	public Transition() {
		
	}
	
	public ITransition setTargetObject(IDisplayObject targetObject) {
		this.targetObject = targetObject;
		return this;
	}
	
	public IDisplayObject getTargetObject() {
		return this.targetObject;
	}
	
	public ITransition setAutoReverse(boolean autoReverse) {
		this.autoReverse = autoReverse;
		return this;
	}
	
	public boolean getAutoReverse() {
		return this.autoReverse;
	}
	
	public ITransition setLoopCount(int loopCount) {
		this.loopCount = loopCount;
		return this;
	}
	
	public int getLoopCount() {
		return this.loopCount;
	}
	
	public ITransition setEasing(String easing) {
		this.easing = easing;
		return this;
	}
	
	public String getEasing() {
		return this.easing;
	}
	
	public ITransition setFrom(double from) {
		this.from = from;
		return this;
	}
	
	public double getFrom() {
		return this.from;
	}
		
	public ITransition setTo(double to) {
		this.to = to;
		return this;
	}
	
	public double getTo() {
		return this.to;
	}
	
	public ITransition setDuration(int duration) {
		this.duration = duration;
		return this;
		
	}
	
	public String getTransitionState() {
		return ((ITransitionRenderer)super.getRenderer()).getTransitionState();
	}
	
	public int getDuration() {
		return this.duration;
	}
	
	public ITransition setDelay(int delay) {
		this.delay = delay;
		return this;
	}
	
	public int getDelay() {
		return this.delay;
	}
	
	public boolean isRunning() {
		return ((ITransitionRenderer)super.getRenderer()).isRunning();
	}
	
	public ITransition play() {
		((ITransitionRenderer)super.getRenderer()).play();
		return this;
	}
	
	public ITransition stop() {
		((ITransitionRenderer)super.getRenderer()).stop();
		return this;
	}
	
	public abstract ITransition update(double nextValue);
	
	public static ITransition create(Object params) {
		ITransition transition = TransitionRenderer.create(params);
		return transition;
	}
}