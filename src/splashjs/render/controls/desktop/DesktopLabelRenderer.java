package flashjs.render.controls.desktop;

import org.w3c.dom.html.*;

import flashjs.events.*;
import flashjs.controls.*;
import flashjs.render.*;
import flashjs.render.controls.*;
import flashjs.render.desktop.*;

public class DesktopLabelRenderer extends DesktopBaseTextRenderer implements ILabelRenderer {

	private HTMLParagraphElement htmlParagraphElement;
	private String htmlParagraphElementID;
	
	public DesktopLabelRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setWebEngine(webEngine);
		
		htmlParagraphElementID = super.getRenderObjectID();
		
		js = "var " + htmlParagraphElementID + " = document.createElement(\"p\");";
		js += htmlParagraphElementID + ".id = \"" + htmlParagraphElementID + "\";"; 
		webEngine.executeScript(js);
		htmlParagraphElement = (HTMLParagraphElement)webEngine.executeScript(htmlParagraphElementID);
		super.setRenderElement(new DesktopRenderElement(htmlParagraphElement));
	}
	
	public void create() {
		super.setText();
	}
	
	

}