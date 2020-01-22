package splashjs.render.net;

import java.util.Date;

import def.dom.HTMLInputElement;
import def.dom.HTMLAnchorElement;
import static def.dom.Globals.document;
import static def.dom.Globals.console;
import static def.js.Globals.eval;
import def.js.Promise;
import def.js.ArrayBuffer;
import def.js.DataView;

import splashjs.render.RenderElement;
import splashjs.render.HTMLDomEventName;
import splashjs.render.events.EventDispatcherRenderer;
import splashjs.render.iface.IRenderElement;
import splashjs.net.iface.IFileReference;
import splashjs.utils.iface.IByteArray;
import splashjs.utils.ByteArray;
import splashjs.net.iface.IURLRequest;
import splashjs.net.iface.IFileFilter;
import splashjs.events.iface.IEventDispatcher;
import splashjs.events.iface.IEvent;
import splashjs.events.iface.IProgressEvent;
import splashjs.events.iface.IIOErrorEvent;
import splashjs.events.ProgressEvent;
import splashjs.events.IOErrorEvent;
import splashjs.events.Event;
import splashjs.render.net.iface.IFileReferenceRenderer;
import splashjs.render.utils.iface.IByteArrayRenderer;


public class FileReferenceRenderer extends EventDispatcherRenderer implements IFileReferenceRenderer {

	HTMLInputElement htmlInputElement;
	HTMLAnchorElement htmlAnchorElement;
	def.dom.File selectedFile = null; 
	
	IRenderElement inputRenderElement;
	IRenderElement anchorRenderElement;
	
	public FileReferenceRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		
		htmlInputElement = (HTMLInputElement)document.createElement("input");
		htmlInputElement.type = "file";
		inputRenderElement = new RenderElement(htmlInputElement);
		
		htmlAnchorElement = (HTMLAnchorElement)document.createElement("a");
		anchorRenderElement = new RenderElement(htmlAnchorElement);

		
		
		create();
	}
	
	public void createEventListeners() {
		super.createEventListeners();
		
		htmlInputElement.addEventListener(HTMLDomEventName.CHANGE, (event) -> {
			if(htmlInputElement.files.length == 1) {
				//make existing values null
				((IFileReference)getRenderObject()).setName(null);
				((IFileReference)getRenderObject()).setExtension(null);
				((IFileReference)getRenderObject()).setSize(-1);
				((IFileReference)getRenderObject()).setType(null);
				((IFileReference)getRenderObject()).setModificationDate(null);
				
				//Populate values
				selectedFile = htmlInputElement.files.item(0);
				String name = htmlInputElement.files.item(0).name;
				((IFileReference)getRenderObject()).setName(name);
				String ext = name.substring(name.lastIndexOf(".")+1);
				((IFileReference)getRenderObject()).setExtension(ext);
				((IFileReference)getRenderObject()).setSize(htmlInputElement.files.item(0).$get("size"));
				((IFileReference)getRenderObject()).setType(htmlInputElement.files.item(0).$get("type"));
				Date modificationDate = new Date((long)htmlInputElement.files.item(0).$get("lastModified"));
				((IFileReference)getRenderObject()).setModificationDate(modificationDate);
				getRenderObject().dispatchEvent(new splashjs.events.Event(splashjs.events.Event.SELECT, getRenderObject(), getRenderObject()));
				
			}
		});
	}
	
	public void create() {
		super.setRenderElement(inputRenderElement);
		super.getRenderObject().getStage().getRenderer().appendChild(this);
		super.setDisplay("none");
		
		super.setRenderElement(anchorRenderElement);
		super.getRenderObject().getStage().getRenderer().appendChild(this);
		super.setDisplay("none");
		
	}
	
	public void download(IURLRequest urlRequest, String defaultFileName) {
		
		htmlAnchorElement.href = urlRequest.getURL();
		htmlAnchorElement.setAttribute("download", defaultFileName);
		
		
		htmlAnchorElement.click();
	}
	
	public boolean browse() {
		htmlInputElement.click();
		return true;
	}
	
	public boolean browse(IFileFilter[] fileFilters) {
		htmlInputElement.click();
		return true;
	}
	
	public void load() {
		if(selectedFile != null) {
			def.dom.FileReader fileReader = new def.dom.FileReader();
			fileReader.addEventListener("loadstart", (event) -> {
				IEvent loadStartEvent = new Event(Event.OPEN, getRenderObject(), getRenderObject());
				getRenderObject().dispatchEvent(loadStartEvent);
			});
			fileReader.addEventListener("progress", (event) -> {
				IProgressEvent progressEvent = new ProgressEvent(ProgressEvent.PROGRESS);
				progressEvent.setTarget(getRenderObject());
				progressEvent.setCurrentTarget(getRenderObject());
				progressEvent.setBytesLoaded((int)(((def.dom.ProgressEvent)event).loaded));
				progressEvent.setBytesTotal((int)(((def.dom.ProgressEvent)event).total));
				getRenderObject().dispatchEvent(progressEvent);
			});
			fileReader.addEventListener("error", (event) -> {
				IIOErrorEvent ioErrorEvent = new IOErrorEvent(IOErrorEvent.IO_ERROR);
				ioErrorEvent.setTarget(getRenderObject());
				ioErrorEvent.setCurrentTarget(getRenderObject());
				ioErrorEvent.setText(fileReader.error.name);
				getRenderObject().dispatchEvent(ioErrorEvent);
			});
			fileReader.addEventListener("load", (event) -> {
				IByteArray byteArray = new ByteArray();
				((IByteArrayRenderer)byteArray.getRenderer()).setDataView(new DataView((ArrayBuffer)fileReader.result));
				((IFileReference)getRenderObject()).setData(byteArray);
				getRenderObject().dispatchEvent(new Event(Event.COMPLETE, getRenderObject(), getRenderObject()));
			});
			fileReader.readAsArrayBuffer(selectedFile);
		}
	}
	
	
}