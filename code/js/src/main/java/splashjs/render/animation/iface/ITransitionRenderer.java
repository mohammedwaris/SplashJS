package splashjs.render.animation.iface;

import splashjs.render.events.iface.IEventDispatcherRenderer;

public interface ITransitionRenderer extends IEventDispatcherRenderer {

	public void play();
	public void stop();
	public boolean isRunning();
	public String getTransitionState();

}