package splashjs.render.net.iface;


import splashjs.net.iface.IFileFilter;
import splashjs.render.events.iface.IEventDispatcherRenderer;
import splashjs.net.iface.IURLRequest;

public interface IFileReferenceRenderer extends IEventDispatcherRenderer {

	public void download(IURLRequest urlRequest, String defaultFileName);
	public boolean browse();
	public boolean browse(IFileFilter[] fileFilters);
	
	
	public void load();
}