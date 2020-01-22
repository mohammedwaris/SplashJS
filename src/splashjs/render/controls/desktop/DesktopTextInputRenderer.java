package flashjs.render.controls.desktop;

import org.w3c.dom.html.*;

import flashjs.events.*;
import flashjs.controls.*;
import flashjs.render.*;
import flashjs.render.desktop.*;
import flashjs.render.controls.*;
import flashjs.render.display.desktop.*;

public class DesktopTextInputRenderer extends DesktopBaseInputRenderer implements ITextInputRenderer {

	private HTMLInputElement htmlInputElement;
	private String htmlInputElementID;
	
	public DesktopTextInputRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setWebEngine(webEngine);
		
		htmlInputElementID = super.getRenderObjectID();
		
		js = "var " + htmlInputElementID + " = document.createElement(\"input\");";
		js += htmlInputElementID + ".id = \"" + htmlInputElementID + "\";"; 
		js += htmlInputElementID + ".type = \"text\";";
		webEngine.executeScript(js);
		htmlInputElement = (HTMLInputElement)webEngine.executeScript(htmlInputElementID);
		super.setRenderElement(new DesktopRenderElement(htmlInputElement));
	}
	
	public void create() {
		
	}
	
	public void setDisplayAsPassword() {
		boolean displayAsPassword = ((ITextInput)super.getRenderObject()).getDisplayAsPassword();
		if(displayAsPassword == true)
			htmlInputElement.setAttribute("type", "password");
		else if(displayAsPassword == false)
			htmlInputElement.setAttribute("type", "text");
	}
	
	public void setSelection() {
		int beginIndex = ((ITextInput)super.getRenderObject()).getSelectionBeginIndex();
		int endIndex = ((ITextInput)super.getRenderObject()).getSelectionEndIndex();
		htmlInputElement.focus();
		js = htmlInputElementID + ".setSelectionRange(" + beginIndex + ", " + endIndex + ");";
		webEngine.executeScript(js);
	}
	
	@Override
	public void setText() {
		
		String text = ((IBaseText)super.getRenderObject()).getText();
		
		if(text != null)
			htmlInputElement.setAttribute("value", text);
		else
			htmlInputElement.setAttribute("value",  "");
	}
}