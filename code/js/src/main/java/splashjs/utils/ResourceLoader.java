package splashjs.utils;

import java.util.ArrayList;

import splashjs.Global;
import splashjs.events.EventDispatcher;
import splashjs.utils.iface.IResourceLoader;
import splashjs.utils.iface.IResource;
import splashjs.render.utils.iface.IResourceLoaderRenderer;


public class ResourceLoader extends EventDispatcher implements IResourceLoader {

	private ArrayList<IResource> resources = new ArrayList<IResource>();
	
	public ResourceLoader() {
		super("resourceLoader");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(ResourceLoader.class, this));
	}
	
	public void addResource(IResource resource) {
		resources.add(resource);
	}
	
	public IResource getResourceByName(String resourceName) {
		IResource rsrc = null;
		for(int i=0;i<resources.size();i++) {
			if(resources.get(i).getResourceName().equals(resourceName)) {
				rsrc = resources.get(i);
				break;
			}
		}
		return rsrc;
	}
	
	public void loadAll() {
		((IResourceLoaderRenderer)super.getRenderer()).loadAll(resources);
	}

}