package flashjs.render.application.desktop;

import org.w3c.dom.*;
import org.w3c.dom.html.*;

import flashjs.application.*;
import flashjs.events.*;
import flashjs.render.*;
import flashjs.render.desktop.*;
import flashjs.render.application.*;
import flashjs.render.events.desktop.*;
import flashjs.render.display.desktop.*;


public class DesktopStageOwnerRenderer extends DesktopEventDispatcherRenderer implements IStageOwnerRenderer {

	
	public DesktopStageOwnerRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
		super.webEngine = webEngine;
		super.renderObject = renderObject;
		super.renderObjectID = renderObject.getUniqueID();
		
		//String js = "document.getElementById(\"" + super.renderObjectID + "\");";
		//System.out.println("ID: " + js);
		//HTMLElement htmlElement = (HTMLElement) webEngine.executeScript(js);
		//if(htmlElement == null) {
		String js = "var " + super.getRenderObjectID() + " = document.createElement(\"div\");";
			   js += super.getRenderObjectID() + ".id = '" + super.getRenderObjectID() + "';"; 
		System.out.println(js);
		webEngine.executeScript(js);
		
		js = super.getRenderObjectID();
		
		this.renderElement = new DesktopRenderElement((HTMLElement)webEngine.executeScript(js));
			if(super.getRenderObject() instanceof IStageOwner) {
				IStageOwner stageOwner = (IStageOwner) super.getRenderObject();
				//htmlElement.style.position = "absolute";
				//htmlElement.style.top = "0" + UNIT; // stageOwner.getWidth() + UNIT;
				//htmlElement.style.left = "0" + UNIT; //stageOwner.getHeight() + UNIT;
				//htmlElement.style.bottom = "0" + UNIT;
				//htmlElement.style.right = "0" + UNIT;
			}
		//}
		
		//if(htmlElement instanceof HTMLDivElement) {
			//System.out.println((int) ((HTMLDivElement) htmlElement).clientWidth);
			//IStageOwner stageOwner = ((IStageOwner)super.getRenderObject());
			//stageOwner.setWidth((int) ((HTMLDivElement) htmlElement).clientWidth);
			//stageOwner.setHeight((int) ((HTMLDivElement) htmlElement).clientHeight);
		//}
		
		
	}
	
	

}