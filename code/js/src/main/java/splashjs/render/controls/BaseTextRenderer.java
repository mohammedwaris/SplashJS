package splashjs.render.controls;

import def.dom.HTMLElement;

import splashjs.controls.iface.IBaseText;
import splashjs.render.controls.iface.IBaseTextRenderer;

public abstract class BaseTextRenderer extends ControlRenderer implements IBaseTextRenderer {

	public void setText() {
		
		String text = ((IBaseText)super.getRenderObject()).getText();
		if(text != null)
			((HTMLElement)super.getDOMElement()).innerText = text;
		else
			((HTMLElement)super.getDOMElement()).innerText = "";
		
	}
}