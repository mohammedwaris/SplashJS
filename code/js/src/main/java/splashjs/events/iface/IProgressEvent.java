package splashjs.events.iface;

public interface IProgressEvent extends IEvent {
	
	public void setBytesLoaded(int bytesLoaded);
	public void setBytesTotal(int bytesTotal);
	public int getBytesLoaded();
	public int getBytesTotal();
}