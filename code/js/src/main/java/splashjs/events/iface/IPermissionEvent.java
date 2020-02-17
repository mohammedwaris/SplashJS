package splashjs.events.iface;

public interface IPermissionEvent extends IEvent {
	
	public String getStatus();
	public void setStatus(String status);
	
}