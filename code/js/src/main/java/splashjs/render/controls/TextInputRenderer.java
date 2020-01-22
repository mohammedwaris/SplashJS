package splashjs.render.controls;

import def.dom.Element;
import def.dom.HTMLElement;
import def.dom.HTMLInputElement;
import static def.dom.Globals.document;


import splashjs.render.RenderElement;
import splashjs.controls.iface.ITextInput;
import splashjs.controls.iface.IBaseText;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.controls.iface.ITextInputRenderer;

public class TextInputRenderer extends BaseInputRenderer implements ITextInputRenderer {

	private HTMLInputElement htmlInputElement;
	
	public TextInputRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		htmlInputElement = (HTMLInputElement)document.createElement("input");
		htmlInputElement.type = "text";
		super.setRenderElement (new RenderElement(htmlInputElement));
	}
	
	public void create() {
		
	}
	
	public void setDisplayAsPassword() {
		boolean displayAsPassword = ((ITextInput)super.getRenderObject()).getDisplayAsPassword();
		if(displayAsPassword == true)
			htmlInputElement.type = "password";
		else if(displayAsPassword == false)
			htmlInputElement.type = "text";
	}
	
	public void setSelection() {
		int beginIndex = ((ITextInput)super.getRenderObject()).getSelectionBeginIndex();
		int endIndex = ((ITextInput)super.getRenderObject()).getSelectionEndIndex();
		htmlInputElement.focus();
		htmlInputElement.setSelectionRange(beginIndex, endIndex);
	}
	
	@Override
	public void setText() {
		
		String text = ((IBaseText)super.getRenderObject()).getText();
		
		if(text != null)
			htmlInputElement.value = text;
		else
			htmlInputElement.value = "";
	}
}