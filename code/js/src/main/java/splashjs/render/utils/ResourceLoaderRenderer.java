package splashjs.render.utils;

import def.dom.HTMLImageElement;
import def.dom.HTMLAudioElement;
import static def.dom.Globals.document;
import def.dom.Blob;
import def.dom.FileReader;
import def.dom.XMLHttpRequest;

import java.util.ArrayList;

import splashjs.events.iface.IEvent;
import splashjs.events.Event;
import splashjs.utils.ResourceType;
import splashjs.utils.iface.IResource;
import splashjs.utils.iface.IResourceLoader;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.events.EventDispatcherRenderer;
import splashjs.render.utils.iface.IResourceLoaderRenderer;
import splashjs.render.utils.iface.IResourceRenderer;
import splashjs.render.HTMLDomEventName;

public class ResourceLoaderRenderer extends EventDispatcherRenderer implements IResourceLoaderRenderer {

	private int totalNumberOfResource;
	private int numberOfResourceLoaded;

	public ResourceLoaderRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		
	}
	
	public void loadAll(ArrayList<IResource> resources) {
		totalNumberOfResource = resources.size();
		numberOfResourceLoaded = 0;
		IResource resource = null;
		for(int i=0;i<resources.size();i++) {
			resource = resources.get(i);
			if(resource.getResourceType().equalsIgnoreCase(ResourceType.IMAGE)) {
				loadImage(resource);
			}
			else if(resource.getResourceType().equalsIgnoreCase(ResourceType.SOUND)) {
				loadSound(resource);
			}
		}
	}
	
	private void loadImage(IResource imageResource) {
		XMLHttpRequest xmlHttpRequest = new XMLHttpRequest();
		xmlHttpRequest.responseType = "blob";
		xmlHttpRequest.addEventListener(HTMLDomEventName.LOAD, (xmlLoadEvent) -> {
				FileReader fileReader = new FileReader();
				fileReader.addEventListener(HTMLDomEventName.LOAD, (fileReaderLoadEvent) -> {
					((IResourceRenderer)imageResource.getRenderer()).setResourceBase64((String)fileReader.result);
					numberOfResourceLoaded += 1;
					checkIfResourceLoaded();
				});
				fileReader.readAsDataURL((def.dom.Blob)xmlHttpRequest.response);
		});
		xmlHttpRequest.open("get", imageResource.getResourcePath());
		xmlHttpRequest.send();
		/*
		HTMLImageElement image = (HTMLImageElement)document.createElement("img");
		image.src = imageResource.getResourcePath();
		image.addEventListener(HTMLDomEventName.LOAD, (event) -> {
			numberOfResourceLoaded += 1;
			checkIfResourceLoaded();
			//System.out.println(event);
			//document.body.appendChild((HTMLImageElement)event.target);
		});*/
	}
	
	private void loadSound(IResource soundResource) {
		
		XMLHttpRequest xmlHttpRequest = new XMLHttpRequest();
		xmlHttpRequest.responseType = "blob";
		xmlHttpRequest.addEventListener(HTMLDomEventName.LOAD, (xmlLoadEvent) -> {
				FileReader fileReader = new FileReader();
				fileReader.addEventListener(HTMLDomEventName.LOAD, (fileReaderLoadEvent) -> {
					((IResourceRenderer)soundResource.getRenderer()).setResourceBase64((String)fileReader.result);
					numberOfResourceLoaded += 1;
					checkIfResourceLoaded();
				});
				fileReader.readAsDataURL((def.dom.Blob)xmlHttpRequest.response);
		});
		xmlHttpRequest.open("get", soundResource.getResourcePath());
		xmlHttpRequest.send();
		
		/*
		HTMLAudioElement sound = (HTMLAudioElement)document.createElement("audio");
		sound.src = soundResource.getResourcePath();
		sound.addEventListener("canplaythrough", (event) -> {
			numberOfResourceLoaded += 1;
			checkIfResourceLoaded();
			//System.out.println(event);
			//document.body.appendChild((HTMLImageElement)event.target);
		});*/
	}
	
	private void checkIfResourceLoaded() {
		if(totalNumberOfResource == numberOfResourceLoaded) {
			IResourceLoader resourceLoader = (IResourceLoader)super.getRenderObject();
			IEvent loadedEvent = new splashjs.events.Event(splashjs.events.Event.LOAD, resourceLoader, resourceLoader);
			resourceLoader.dispatchEvent(loadedEvent);
		}
	}
}