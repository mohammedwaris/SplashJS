package splashjs.events.iface;

public interface IEvent {
	
	public String getType();
	public IEventDispatcher getTarget();
	public IEventDispatcher getCurrentTarget();
	
	public void setData(Object data);
	public Object getData();
	
	public void setTarget(IEventDispatcher target);
	public void setCurrentTarget(IEventDispatcher currentTarget);
}