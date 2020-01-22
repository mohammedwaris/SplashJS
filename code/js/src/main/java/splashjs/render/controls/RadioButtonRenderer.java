package splashjs.render.controls;

import def.dom.Element;
import def.dom.HTMLElement;
import def.dom.HTMLInputElement;
import static def.dom.Globals.document;


import splashjs.render.RenderElement;


import splashjs.controls.iface.IRadioButton;
import splashjs.controls.iface.IRadioButtonGroup;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.controls.iface.IRadioButtonRenderer;

public class RadioButtonRenderer extends ControlRenderer implements IRadioButtonRenderer {

	private HTMLInputElement htmlInputElement;
	
	public RadioButtonRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		htmlInputElement = (HTMLInputElement)document.createElement("input");
		htmlInputElement.type = "radio";
		super.setRenderElement (new RenderElement(htmlInputElement));
		
	}
	
	public void create() {
		
	}
	
	
	public void setSelected() {
		boolean selected = ((IRadioButton)super.getRenderObject()).getSelected();
		if(selected == true)
			htmlInputElement.checked = true;
		else if(selected == false)
			htmlInputElement.checked = false;
	}
	
	public void setGroup() {
		IRadioButtonGroup group = ((IRadioButton)super.getRenderObject()).getGroup();
		if(group != null)
			htmlInputElement.name = group.getName();
		else if(group == null)
			htmlInputElement.removeAttribute("name");
	}
	
	
	
	
}