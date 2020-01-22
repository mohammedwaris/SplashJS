package splashjs.render.iface;

import splashjs.events.iface.IEventDispatcher;

public interface IRendererCreator {

	public IRenderer createRenderer(Class clazz, IEventDispatcher renderObject);
	
}

