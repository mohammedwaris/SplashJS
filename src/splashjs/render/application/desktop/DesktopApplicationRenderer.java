package flashjs.render.application.desktop;

import java.io.*;
import java.net.*;
import org.w3c.dom.*;
import org.w3c.dom.html.*;

import flashjs.application.*;
import flashjs.events.*;
import flashjs.render.*;
import flashjs.render.desktop.*;
import flashjs.render.application.*;
import flashjs.render.events.desktop.*;
import flashjs.render.display.desktop.*;


public class DesktopApplicationRenderer extends DesktopEventDispatcherRenderer implements IApplicationRenderer {

	
	public DesktopApplicationRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		
		
		
	}
	
	public boolean isOnline() {
		boolean online = false;
		try {
			final URL url = new URL("http://www.google.com");
			final URLConnection conn = url.openConnection();
			conn.connect();
			conn.getInputStream().close();
			online = true;
		} catch (MalformedURLException e) {
			
		} catch (IOException e) {
			
		}
		return online;
	}
	
	

}