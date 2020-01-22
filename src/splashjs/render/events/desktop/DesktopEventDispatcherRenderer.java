package flashjs.render.events.desktop;

import org.w3c.dom.*;
import org.w3c.dom.html.*;

import flashjs.display.*;
import flashjs.media.*;
import flashjs.render.*;
import flashjs.events.*;
import flashjs.render.media.*;
import flashjs.render.events.*;
import flashjs.render.lang.desktop.*;


public class DesktopEventDispatcherRenderer extends DesktopSplashObjectRenderer implements IEventDispatcherRenderer {

	public void setDisplay(String value) {
		js = super.getRenderObjectID() + ".style.display = '" + value + "';\r\n";
		webEngine.executeScript(js);
	}
	
}