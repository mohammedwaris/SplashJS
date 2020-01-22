package splashjs.net;

import java.util.Date;

import splashjs.Global;
import splashjs.events.EventDispatcher;
import splashjs.net.iface.IFileReference;
import splashjs.net.iface.IFileFilter;
import splashjs.utils.iface.IByteArray;
import splashjs.display.iface.IStage;
import splashjs.render.net.iface.IFileReferenceRenderer;
import splashjs.net.iface.IURLRequest;

public class FileReference extends EventDispatcher implements IFileReference {

	private Date creationDate;
	private String creator;
	private IByteArray data;
	private String extension;
	private Date modificationDate;
	private String name;
	private String permissionStatus;
	private int size = -1;
	private String type;
	
	public FileReference(IStage stage) {
		super("fileReference");
		super.stage = stage;
		super.setRenderer(Global.global.getRendererCreator().createRenderer(FileReference.class, this));
		
	}
	
	public Date getCreationDate() {
		return creationDate;
	}
	
	public String getCreator() {
		return creator;
	}
	
	public void setData(IByteArray data) {
		this.data = data;
	}
	
	public IByteArray getData() {
		return this.data;
	}
	
	public void setExtension(String extension) {
		this.extension = extension;
	}
	
	public String getExtension() {
		return extension;
	}
	
	public void setModificationDate(Date modificationDate) {
		this.modificationDate = modificationDate;
	}
	
	public Date getModificationDate() {
		return modificationDate;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public String getPermissionStatus() {
		return permissionStatus;
	}
	
	public void setSize(int size) {
		this.size = size;
	}
	public int getSize() {
		return size;
	}
	
	public void setType(String type) {
		this.type = type;
	}
	public String getType() {
		return type;
	}
	
	public boolean browse() {
		boolean value = false;
		value = ((IFileReferenceRenderer)super.getRenderer()).browse();
		return value;
	}
	
	public boolean browse(IFileFilter[] typeFilters) {
		boolean value = false;
		value = ((IFileReferenceRenderer)super.getRenderer()).browse(typeFilters);
		return value;
	}
	
	public void cancel() {
	}
	
	public void download(IURLRequest urlRequest, String defaultFileName) {
		((IFileReferenceRenderer)super.getRenderer()).download(urlRequest, defaultFileName);
	}
	
	public void load() {
		((IFileReferenceRenderer)super.getRenderer()).load();
	}
	
	public void requestPermission() {
	}
	
	public void save(Object data, String defaultFileName) {
	}
	
	public void upload(IURLRequest urlRequest, String uploadDataFieldName, boolean testUpload) {
	}
	
	public void uploadUnencoded(IURLRequest urlRequest) {
	}
	
	
	
	
}