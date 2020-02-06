package splashjs.display.iface;


import splashjs.application.iface.IStageOwner;
import splashjs.utils.iface.IColor;

public interface IStage extends IDisplayObjectContainer {

	public void setScaleMode(String scaleMode);
	public void setAlign(String stageAlign);
	
	//public IRenderer createRenderer();
	//public IRenderer createRenderer(Class clazz, IEventDispatcher eventDispatcher);

	//public boolean isReady();
	//public Timer getTimer();
	
	public void setColor(IColor color);
	public IColor getColor();
	
	public IStageOwner getStageOwner();
	
	public void setScene(IScene scene);
	public IScene getScene();
	//public void resize(int width, int height);
}