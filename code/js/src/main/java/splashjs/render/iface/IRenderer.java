package splashjs.render.iface;

import def.dom.Element;

import splashjs.events.iface.IEventDispatcher;


public interface IRenderer {
	
	public String getRenderObjectID();
	public IEventDispatcher getRenderObject();
	public Element getDOMElement();
	public IRenderElement getRenderElement();
	public void setRenderElement(IRenderElement renderElement);
	
	public void appendChild(IRenderer childRenderer);
	public void appendToBody();
	public void removeChild(IRenderer childRenderer);
	
	public void initialize();
	public void applyStyle();
	public void createEventListeners();





	public void create();
	public void update();
	
	public void applyCSS();
	public void refresh();
	
	public int getOriginalWidth();
	public int getOriginalHeight();

	
	
}