package splashjs.render.utils.iface;

import java.util.ArrayList;

import splashjs.utils.iface.IResource;
import splashjs.render.events.iface.IEventDispatcherRenderer;

public interface IResourceLoaderRenderer extends IEventDispatcherRenderer  {

	public void loadAll(ArrayList<IResource> resources);

}