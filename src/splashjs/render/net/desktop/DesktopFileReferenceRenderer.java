package flashjs.render.net.desktop;

import org.w3c.dom.*;
import org.w3c.dom.html.*;

import flashjs.render.desktop.*;
import flashjs.display.*;
import flashjs.render.*;
import flashjs.events.*;
import flashjs.net.*;
import flashjs.render.events.*;
import flashjs.render.events.desktop.*;
import flashjs.render.net.*;

public class DesktopFileReferenceRenderer extends DesktopEventDispatcherRenderer implements IFileReferenceRenderer {
	
	
	private String htmlSpanElementID;
	private String htmlInputElementID;
	private String htmlAnchorElementID;
	
	private IRenderElement inputRenderElement;
	private IRenderElement anchorRenderElement;
	
	private HTMLInputElement htmlInputElement;
	private HTMLAnchorElement htmlAnchorElement;

	public DesktopFileReferenceRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setWebEngine(webEngine);
		
		htmlSpanElementID = super.getRenderObjectID();;
		htmlInputElementID = "input" + super.getRenderObjectID();
		htmlAnchorElementID = "anchor" + super.getRenderObjectID();
		
		js = "var " + htmlSpanElementID + " = document.createElement(\"span\");";
		js += htmlSpanElementID + ".id = \"" + htmlSpanElementID + "\";"; 
		webEngine.executeScript(js);
		
		js = "var " + htmlInputElementID + " = document.createElement(\"input\");";
		js += htmlInputElementID + ".id = \"" + htmlInputElementID + "\";"; 
		js += htmlInputElementID + ".type = \"file\";"; 
		webEngine.executeScript(js);
		
		js = "var " + htmlAnchorElementID + " = document.createElement(\"a\");";
		js += htmlAnchorElementID + ".id = \"" + htmlAnchorElementID + "\";"; 
		webEngine.executeScript(js);
		
		inputRenderElement = new DesktopRenderElement((HTMLInputElement)webEngine.executeScript(htmlInputElementID));
		anchorRenderElement = new DesktopRenderElement((HTMLAnchorElement)webEngine.executeScript(htmlAnchorElementID));
		
		super.setRenderElement(new DesktopRenderElement((HTMLElement)webEngine.executeScript(htmlSpanElementID)));
	}
	
	public void create() {
		super.setRenderElement(inputRenderElement);
		super.getRenderObject().getStage().getRenderer().appendChild(this);
		//super.setDisplay("none");
		
		super.setRenderElement(anchorRenderElement);
		super.getRenderObject().getStage().getRenderer().appendChild(this);
		//super.setDisplay("none");
	}
	
	public void download(IURLRequest urlRequest, String defaultFileName) {
		
		htmlAnchorElement.setAttribute("href", urlRequest.getURL());
		htmlAnchorElement.setAttribute("download", defaultFileName);
		
		
		js = htmlAnchorElementID + ".click();"; 
		webEngine.executeScript(js);
	}
	
	public void browse() {
		
		htmlInputElement.click();
	}



}//end of class