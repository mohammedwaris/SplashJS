package flashjs.render.display.desktop;

import org.w3c.dom.*;
import org.w3c.dom.html.*;

import flashjs.render.desktop.*;
import flashjs.display.*;
import flashjs.render.*;
import flashjs.events.*;
import flashjs.render.display.*;

public class DesktopImageRenderer extends DesktopInteractiveObjectRenderer implements IImageRenderer {
	
	private String htmlImageElementID;

	public DesktopImageRenderer(javafx.scene.web.WebEngine webEngine, IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		super.setWebEngine(webEngine);
		
		htmlImageElementID = super.getRenderObjectID();
		
		js = "var " + htmlImageElementID + " = document.createElement(\"img\");";
		js += htmlImageElementID + ".id = \"" + htmlImageElementID + "\";"; 
		webEngine.executeScript(js);
		super.setRenderElement(new DesktopRenderElement((HTMLElement)webEngine.executeScript(htmlImageElementID)));
		
	}
	
	public void create() {
		setImagePath();
	}
	
	public void setImagePath() {
		IImage image = (IImage)super.getRenderObject();
		js = htmlImageElementID +".src = '" + IMAGES_FOLDER_PATH + image.getImagePath() + "';" + ENDLINE_CHAR; 
		webEngine.executeScript(js);
	}
	
	public int getOriginalWidth() {
		js = htmlImageElementID +".naturalWidth;" + ENDLINE_CHAR; 
		return (int)webEngine.executeScript(js);
	}
	
	public int getOriginalHeight() {
		js = htmlImageElementID +".naturalHeight;" + ENDLINE_CHAR; 
		return (int)webEngine.executeScript(js);
	}



}//end of class