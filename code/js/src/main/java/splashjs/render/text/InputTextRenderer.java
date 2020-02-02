package splashjs.render.text;

import def.dom.*;
import static def.dom.Globals.*;

import splashjs.events.iface.*;
import splashjs.render.*;
import splashjs.text.iface.*;
import splashjs.text.*;
import splashjs.render.text.iface.*;
import splashjs.render.text.*;
import splashjs.utils.*;
import splashjs.utils.iface.*;

public class InputTextRenderer extends TextRenderer implements IInputTextRenderer {
	
	private HTMLInputElement htmlInputElement;
	
	public InputTextRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		htmlInputElement = (HTMLInputElement)document.createElement("input");
		htmlInputElement.setAttribute("type", "text");
		super.setRenderElement(new RenderElement(htmlInputElement));

		applyCSS();
		createEventListeners();
	}
	
	public void create() {
		
	}

	public void createEventListeners() {

		super.createEventListeners();

		htmlInputElement.addEventListener(HTMLDomEventName.CHANGE, (event) -> {
			System.out.println("change");
			IEvent changeEvent = new splashjs.events.Event(splashjs.events.Event.CHANGE, getRenderObject(), getRenderObject());
			getRenderObject().dispatchEvent(changeEvent);
		});
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

	public void setBackgroundColor() {
		IColor backgroundColor = ((IInputText)super.getRenderObject()).getBackgroundColor();
		if(backgroundColor.getColorType().equalsIgnoreCase(ColorType.NAME)) {
			String colorName = backgroundColor.getColorName();
			if(colorName.equalsIgnoreCase(ColorName.NONE)) {
				htmlInputElement.style.background = "none";
			}else{
				htmlInputElement.style.backgroundColor = colorName;
			}
		}
	}

	public void setBorderColor() {
		IColor borderColor = ((IInputText)super.getRenderObject()).getBorderColor();
		if(borderColor.getColorType().equalsIgnoreCase(ColorType.NAME)) {
			String colorName = borderColor.getColorName();
			if(colorName.equalsIgnoreCase(ColorName.NONE)) {
				htmlInputElement.style.border = "none";
			}else{
				htmlInputElement.style.borderColor = colorName;
			}
		}
	}
	
	public int getClientWidth() {
		return (int)((HTMLElement)getDOMElement()).clientWidth;
	}
	
	public int getClientHeight() {
		return (int)((HTMLElement)getDOMElement()).clientHeight;
	}

	@Override
	public void applyCSS() {
		htmlInputElement.style.background = "none";
		htmlInputElement.style.borderWidth = "1px";
		htmlInputElement.style.borderColor = "#000000";
	}
}