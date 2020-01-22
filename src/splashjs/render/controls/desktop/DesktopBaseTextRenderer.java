package flashjs.render.controls.desktop;

import org.w3c.dom.html.*;

import flashjs.display.*;
import flashjs.events.*;
import flashjs.controls.*;
import flashjs.render.*;
import flashjs.render.desktop.*;
import flashjs.render.controls.*;

public abstract class DesktopBaseTextRenderer extends DesktopControlRenderer implements IBaseTextRenderer {

	
	
	public void setText() {
		
		String text = ((IBaseText)super.getRenderObject()).getText();
		if(text != null) {
			js = super.getRenderObjectID() + ".innerText = \"" + text + "\";"; 
			webEngine.executeScript(js);
		}
		else {
			js = super.getRenderObjectID() + ".innerText = \"\";";
			webEngine.executeScript(js);
		}
		
	}
	
	

	
	
}//end of class