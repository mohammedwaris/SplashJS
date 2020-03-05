package splashjs.render.controls;

import def.dom.Element;
import def.dom.HTMLElement;
import def.dom.HTMLInputElement;
import static def.dom.Globals.document;


import splashjs.render.RenderElement;

import splashjs.controls.iface.IButton;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.controls.iface.IButtonRenderer;

public class ButtonRenderer extends BaseTextRenderer implements IButtonRenderer {

	private HTMLInputElement htmlInputElement;
	

	public ButtonRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		htmlInputElement = (HTMLInputElement)document.createElement("input");
		htmlInputElement.type="button";
		super.setRenderElement (new RenderElement(htmlInputElement));
	}
	
	public void create() {
		this.setText();
		
	}
	
	public void setText() {
		String text = ((IButton)super.getRenderObject()).getText();
		if(text != null)
			htmlInputElement.value = text;
	}
	
	public int getWidth() {
		return (int)htmlInputElement.clientWidth;
	}
	
	public int getHeight() {
		return (int)htmlInputElement.clientHeight;
	}
	

	

	

	
	
}//end of class