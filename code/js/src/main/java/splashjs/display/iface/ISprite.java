package splashjs.display.iface;

public interface ISprite extends IDisplayObjectContainer {

	public void startDrag();
	public void stopDrag();
	public void setDraggable(boolean draggable);
	public boolean getDraggable();
	
}