package splashjs.events;

import splashjs.events.iface.*;
import splashjs.permissions.*;

public class PermissionEvent extends Event implements IPermissionEvent {
	
	public static final String PERMISSION_STATUS = "permission_status";
	
	private String status = PermissionStatus.UNKNOWN;
	
	public PermissionEvent(String type) {
		super(type);
	}
	
	public PermissionEvent(String type, IEventDispatcher target, IEventDispatcher currentTarget) {
		super(type, target, currentTarget);
	}
	
	public String getStatus() {
		return this.status;
	}
	
	public void setStatus(String status) {
		this.status = status;
	}
}