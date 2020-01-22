package splashjs.events.iface;

public interface IMouseEvent extends IEvent {
	
	public void setLocalX(int localX);
	public int getLocalX();
	public void setLocalY(int localY);
	public int getLocalY();

}