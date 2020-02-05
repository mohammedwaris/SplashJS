package splashjs.net.iface;

import splashjs.events.iface.IEventDispatcher;

public interface IURLLoader extends IEventDispatcher {

	public void load();
	//public void load(URLRequest urlRequest);
	public void close();
	public int getBytesLoaded();
	public int getBytesTotal();
	public Object getData();
	public void setData(Object data);
	public void setDataFormat(String dataFormat);
	public String getDataFormat();
	public void setURLRequest(IURLRequest urlRequest);
	public IURLRequest getURLRequest();
	
}
