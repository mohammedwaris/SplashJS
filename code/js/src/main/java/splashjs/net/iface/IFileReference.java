package splashjs.net.iface;

import java.util.Date;

import splashjs.net.iface.IFileFilter;
import splashjs.utils.iface.IByteArray;
import splashjs.events.iface.IEventDispatcher;

public interface IFileReference extends IEventDispatcher {
	
	public Date getCreationDate();
	public String getCreator();
	public void setData(IByteArray data);
	public IByteArray getData();
	public void setExtension(String extension);
	public String getExtension();
	public void setModificationDate(Date modificationDate);
	public Date getModificationDate();
	public String getName();
	public void setName(String name);
	public String getPermissionStatus();
	public void setSize(int size);
	public int getSize();
	public void setType(String type);
	public String getType();
	
	public boolean browse(IFileFilter[] typeFilters);
	public void cancel();
	public void download(IURLRequest urlRequest, String defaultFileName);
	public void load();
	public void requestPermission();
	public void save(Object data, String defaultFileName);
	public void upload(IURLRequest urlRequest, String uploadDataFieldName, boolean testUpload);
	public void uploadUnencoded(IURLRequest urlRequest);
	
}