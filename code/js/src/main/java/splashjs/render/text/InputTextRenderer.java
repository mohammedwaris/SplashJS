package splashjs.render.text;

import def.dom.*;
import static def.dom.Globals.*;

import splashjs.events.iface.*;
import splashjs.render.*;
import splashjs.text.iface.*;
import splashjs.text.*;
import splashjs.render.text.iface.*;
import splashjs.render.text.*;

public class InputTextRenderer extends TextRenderer implements IInputTextRenderer {
	
	private HTMLInputElement htmlInputElement;
	
	public InputTextRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		htmlInputElement = (HTMLInputElement)document.createElement("input");
		htmlInputElement.setAttribute("type", "text");
		super.setRenderElement(new RenderElement(htmlInputElement));
	}
	
	public void create() {
		
	}
	
	public void setText() {
		String txt = ((IText)super.getRenderObject()).getText();
		if(txt != null)
			htmlInputElement.setAttribute("value", txt);
	}
	
	public void setPlaceholder() {
		String placeholder = ((IInputText)super.getRenderObject()).getPlaceholder();
		if(placeholder != null)
			htmlInputElement.setAttribute("placeholder", placeholder);
	}
	
	public int getClientWidth() {
		return (int)((HTMLElement)getDOMElement()).clientWidth;
	}
	
	public int getClientHeight() {
		return (int)((HTMLElement)getDOMElement()).clientHeight;
	}
}