package splashjs.render.controls;

import def.dom.Element;
import def.dom.HTMLElement;
import def.dom.HTMLTextAreaElement;
import static def.dom.Globals.document;


import splashjs.render.RenderElement;


import splashjs.controls.iface.ITextArea;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.controls.iface.ITextAreaRenderer;

public class TextAreaRenderer extends BaseInputRenderer implements ITextAreaRenderer {

	private HTMLTextAreaElement htmlTextAreaElement;
	
	public TextAreaRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		htmlTextAreaElement = (HTMLTextAreaElement)document.createElement("textarea");
		super.setRenderElement (new RenderElement(htmlTextAreaElement));
	}
	
	public void create() {
		
	}
	
	public void setSelection() {
		int beginIndex = ((ITextArea)super.getRenderObject()).getSelectionBeginIndex();
		int endIndex = ((ITextArea)super.getRenderObject()).getSelectionEndIndex();
		htmlTextAreaElement.focus();
		htmlTextAreaElement.setSelectionRange(beginIndex, endIndex);
	}
	
/*
	@Override
	public void setText() {
		
		String text = ((IBaseText)super.getRenderObject()).getText();
		
		if(text != null)
			htmlInputElement.value = text;
		else
			htmlInputElement.value = "";
	}*/
}