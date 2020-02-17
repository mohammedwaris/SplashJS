package splashjs.render.display.iface;

import def.js.*;
import def.dom.*;

import splashjs.render.events.iface.*;
import splashjs.display.iface.*;

public interface IBitmapDataRenderer extends IEventDispatcherRenderer {

	public void draw(IBitmapDrawable bitmapDrawable);
	public Blob getBlob();
	
}