package flashjs.render.controls.desktop;

import org.w3c.dom.html.*;

import flashjs.events.*;
import flashjs.controls.*;
import flashjs.render.*;
import flashjs.render.desktop.*;
import flashjs.render.controls.*;
import flashjs.render.display.desktop.*;

public class DesktopRadioButtonRenderer extends DesktopControlRenderer implements IRadioButtonRenderer {

	private HTMLInputElement htmlInputElement;
	private String htmlInputElementID;
	
	public DesktopRadioButtonRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setWebEngine(webEngine);
		
		htmlInputElementID = super.getRenderObjectID();
		
		js = "var " + htmlInputElementID + " = document.createElement(\"input\");";
		js += htmlInputElementID + ".id = \"" + htmlInputElementID + "\";"; 
		js += htmlInputElementID + ".type = \"radio\";";
		webEngine.executeScript(js);
		htmlInputElement = (HTMLInputElement)webEngine.executeScript(htmlInputElementID);
		super.setRenderElement(new DesktopRenderElement(htmlInputElement));
		
	}
	
	public void create() {
		
	}
	
	
	public void setSelected() {
		boolean selected = ((IRadioButton)super.getRenderObject()).getSelected();
		if(selected == true)
			htmlInputElement.setAttribute("checked", "true");
		else if(selected == false)
			htmlInputElement.setAttribute("checked", "false");
	}
	
	public void setGroup() {
		IRadioButtonGroup group = ((IRadioButton)super.getRenderObject()).getGroup();
		if(group != null)
			htmlInputElement.setAttribute("name", group.getName());
		else if(group == null)
			htmlInputElement.removeAttribute("name");
	}
	
	
	
	
}