package splashjs.render.display;

import splashjs.render.display.iface.*;
import splashjs.events.iface.*;

public class BitmapRenderer extends DisplayObjectRenderer implements IBitmapRenderer {

	public BitmapRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
	}
}