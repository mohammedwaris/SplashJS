package splashjs.net.iface;

import splashjs.events.iface.IEventDispatcher;

public interface IURLLoader extends IEventDispatcher {

	public void load();
	public void load(IURLRequest urlRequest);
	public void close();
	public int getBytesLoaded();
	public int getBytesTotal();
	public Object getData();
	public void setDataFormat(String dataFormat);
	public String getDataFormat();
	public IURLRequest getURLRequest();
	
}
