package splashjs.animation.iface;

import splashjs.display.iface.IDisplayObject;

public interface ITransition extends IAnimation {

	public String getTransitionState();
	public boolean getAutoReverse();
	public int getLoopCount();
	public int getDuration();
	public int getDelay();
	public double getToValue();
	public double getFromValue();
	public String getEasing();
	public IDisplayObject getTargetObject();
	public void update(IDisplayObject targetObject, double nextValue);
	public void play();
	public void stop();
	
}