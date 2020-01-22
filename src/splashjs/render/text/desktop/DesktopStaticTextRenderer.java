package flashjs.render.text.desktop;

import org.w3c.dom.html.*;

import flashjs.display.*;
import flashjs.render.*;
import flashjs.utils.*;
import flashjs.text.*;
import flashjs.events.*;
import flashjs.render.text.*;
import flashjs.render.desktop.*;
import flashjs.render.display.desktop.*;

public class DesktopStaticTextRenderer extends DesktopTextRenderer implements IStaticTextRenderer {


	
	public DesktopStaticTextRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
		super.webEngine = webEngine;
		super.renderObject = renderObject;
		super.renderObjectID = renderObject.getUniqueID();
		
		String js = "var " + super.getRenderObjectID() + " = document.createElement(\"p\");";
			   js += super.getRenderObjectID() + ".id = '" + super.getRenderObjectID() + "';"; 
		System.out.println(js);
		webEngine.executeScript(js);
		
		js = super.getRenderObjectID();
		
		super.renderElement = new DesktopRenderElement((HTMLParagraphElement)webEngine.executeScript(js));
		//super.renderElement = new BrowserRenderElement((HTMLParagraphElement)document.createElement("p"));
	}
	

	public void create() {
		js = super.getRenderObjectID() +".innerText = '" + ((IStaticText) super.getRenderObject()).getText() + "';\r\n"; 
		webEngine.executeScript(js);
	}
	
	
	public int getOriginalWidth() {
		js = super.getRenderObjectID() + ".clientWidth;";
		int width = (int)webEngine.executeScript(js);
		return width;
	}
	
	public int getOriginalHeight() {
		js = super.getRenderObjectID() + ".clientHeight;";
		int height = (int)webEngine.executeScript(js);
		return height;
	}
	
	private HTMLParagraphElement getHTMLParagraphElement() {
		HTMLParagraphElement htmlParagraphElement = (HTMLParagraphElement) getDesktopDOMElement();
		return htmlParagraphElement;
	}

}