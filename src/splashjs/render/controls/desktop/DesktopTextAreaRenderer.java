package flashjs.render.controls.desktop;

import org.w3c.dom.html.*;

import flashjs.events.*;
import flashjs.controls.*;
import flashjs.render.*;
import flashjs.render.desktop.*;
import flashjs.render.controls.*;
import flashjs.render.display.desktop.*;

public class DesktopTextAreaRenderer extends DesktopBaseInputRenderer implements ITextAreaRenderer {

	private HTMLTextAreaElement htmlTextAreaElement;
	private String htmlTextAreaElementID;
	
	public DesktopTextAreaRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setWebEngine(webEngine);
		
		htmlTextAreaElementID = super.getRenderObjectID();
		
		js = "var " + htmlTextAreaElementID + " = document.createElement(\"textarea\");";
		js += htmlTextAreaElementID + ".id = \"" + htmlTextAreaElementID + "\";"; 
		webEngine.executeScript(js);
		htmlTextAreaElement = (HTMLTextAreaElement)webEngine.executeScript(htmlTextAreaElementID);
		super.setRenderElement(new DesktopRenderElement(htmlTextAreaElement));
	}
	
	public void create() {
		
	}
	
	public void setSelection() {
		int beginIndex = ((ITextArea)super.getRenderObject()).getSelectionBeginIndex();
		int endIndex = ((ITextArea)super.getRenderObject()).getSelectionEndIndex();
		htmlTextAreaElement.focus();
		js = htmlTextAreaElementID + ".setSelectionRange(" + beginIndex + ", " + endIndex + ");";
		webEngine.executeScript(js);
	}
	

	@Override
	public void setText() {
		
		String text = ((ITextArea)super.getRenderObject()).getText();
		
		if(text != null) {
			js = htmlTextAreaElementID + ".innerText = \"" + text + "\";";
			webEngine.executeScript(js);
		}else {
			js = htmlTextAreaElementID + ".innerText = \"\";";
			webEngine.executeScript(js);
		}
	}
}