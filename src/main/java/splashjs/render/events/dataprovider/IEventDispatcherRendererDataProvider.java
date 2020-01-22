package splashjs.render.events.dataprovider;


import splashjs.events.iface.*;


public interface IEventDispatcherRendererDataProvider {

	public void setRenderObject(IEventDispatcher renderObject);
	public IEventDispatcher getRenderObject();
	public String getRenderObjectID();

}