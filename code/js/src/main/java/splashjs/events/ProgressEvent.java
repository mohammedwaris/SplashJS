package splashjs.events;

import splashjs.events.iface.IProgressEvent;

public class ProgressEvent extends Event implements IProgressEvent {

	public static final String PROGRESS = "progress";
	
	private int bytesLoaded = -1;
	private int bytesTotal = -1;
	
	public ProgressEvent(String type) {
		super(type);
		
		
	}
	
	public void setBytesLoaded(int bytesLoaded) {
		this.bytesLoaded = bytesLoaded;
	}
	
	public int getBytesLoaded() {
		return this.bytesLoaded;
	}
	
	public void setBytesTotal(int bytesTotal) {
		this.bytesTotal = bytesTotal;
	}
	
	public int getBytesTotal() {
		return this.bytesTotal;
	}
	
	
}