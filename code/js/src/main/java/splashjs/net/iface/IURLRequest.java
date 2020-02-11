package splashjs.net.iface;

public interface IURLRequest {

	public String getURL();
		
	public void setMethod(String method);
	public String getMethod(); 
	public Object getData();
	public void setData(Object data);

}