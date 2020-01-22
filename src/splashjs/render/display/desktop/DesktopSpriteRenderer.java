package flashjs.render.display.desktop;

import org.w3c.dom.*;
import org.w3c.dom.html.*;

import flashjs.render.desktop.*;
import flashjs.display.*;
import flashjs.render.*;
import flashjs.events.*;
import flashjs.render.display.*;


public class DesktopSpriteRenderer extends DesktopDisplayObjectContainerRenderer implements ISpriteRenderer {

	public DesktopSpriteRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setWebEngine(webEngine);
		
		String js = "var " + super.getRenderObjectID() + " = document.createElement(\"span\");";
			   js += super.getRenderObjectID() + ".id = '" + super.getRenderObjectID() + "';"; 
		System.out.println(js);
		webEngine.executeScript(js);
		
		js = super.getRenderObjectID();
		
		this.renderElement = new DesktopRenderElement((HTMLElement)webEngine.executeScript(js));
	}
}