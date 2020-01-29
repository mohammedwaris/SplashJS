package splashjs.animation.iface;

import splashjs.display.iface.IDisplayObject;

public interface ITransition extends IAnimation {

	public String getTransitionState();
	
	public boolean getAutoReverse();
	public ITransition setAutoReverse(boolean autoReverse);
	
	public int getLoopCount();
	public ITransition setLoopCount(int loopCount);
	
	public ITransition setDuration(int duration);
	public int getDuration();
	
	public ITransition setDelay(int delay);
	public int getDelay();
	
	public double getTo();
	public ITransition setTo(double to);
	
	public ITransition setFrom(double from);
	public double getFrom();
	
	public ITransition setEasing(String easing);
	public String getEasing();
	
	public IDisplayObject getTargetObject();
	public ITransition setTargetObject(IDisplayObject targetObject);
	
	public ITransition update(double nextValue);
	
	public ITransition play();
	
	public ITransition stop();
	
}