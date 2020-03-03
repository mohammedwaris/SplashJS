package splashjs.render.display.iface;

public interface IStageRenderer extends IDisplayObjectContainerRenderer {

	public void setColor();
	public void startEnterFrameExitFrameDispatcherLoop();
	public void setScene();
	public void removeScene();
	public int getStageWidth();
	public int getStageHeight();
} 