package splashjs.render.display.iface;

import def.dom.Blob;

import splashjs.render.events.iface.IEventDispatcherRenderer;
import splashjs.display.iface.IBitmapDrawable;

public interface IBitmapDataRenderer extends IEventDispatcherRenderer {

	public void draw(IBitmapDrawable bitmapDrawable);
	public Blob getBlob();
	
}