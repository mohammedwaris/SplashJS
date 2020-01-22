package flashjs.render.controls.desktop;

import org.w3c.dom.html.*;

import flashjs.display.*;
import flashjs.events.*;
import flashjs.controls.*;
import flashjs.render.*;
import flashjs.render.desktop.*;
import flashjs.render.controls.*;

public class DesktopButtonRenderer extends DesktopBaseTextRenderer implements IButtonRenderer {

	private HTMLInputElement htmlInputElement;
	private String htmlInputElementID;
	

	public DesktopButtonRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
	
		
		super.setRenderObject(renderObject);
		super.setWebEngine(webEngine);
		
		htmlInputElementID = super.getRenderObjectID();
		
		js = "var " + htmlInputElementID + " = document.createElement(\"input\");";
		js += htmlInputElementID + ".id = \"" + htmlInputElementID + "\";"; 
		js += htmlInputElementID + ".type = \"button\";";
		webEngine.executeScript(js);
		htmlInputElement = (HTMLInputElement)webEngine.executeScript(htmlInputElementID);
		super.setRenderElement(new DesktopRenderElement(htmlInputElement));
	}
	
	public void create() {
		this.setText();
		
	}
	
	public void setText() {
		String text = ((IButton)super.getRenderObject()).getText();
		if(text != null)
			htmlInputElement.setAttribute("value", text);
	}
	

	

	

	

	
	
}//end of class