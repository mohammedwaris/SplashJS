package splashjs.render.display;

import def.dom.*;
import def.js.*;
import static def.dom.Globals.*;
import static def.js.Globals.*;

import splashjs.display.*;
import splashjs.display.iface.*;
import splashjs.render.display.iface.*;
import splashjs.events.iface.*;
import splashjs.render.*;

public class BitmapRenderer extends DisplayObjectRenderer implements IBitmapRenderer {

	private HTMLImageElement imageElement;
	private IBitmap bitmap;

	public BitmapRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		bitmap = (IBitmap)renderObject;
		imageElement = (HTMLImageElement)document.createElement("img");
		super.setRenderElement(new RenderElement(imageElement));
		create();
	}
	
	public void create() {
		IBitmapData bitmapData = bitmap.getBitmapData();
		int bitmapDataWidth = bitmapData.getBitmapDataWidth();
		int bitmapDataHeight = bitmapData.getBitmapDataHeight();
		Blob blob = ((IBitmapDataRenderer)bitmapData.getRenderer()).getBlob();
		imageElement.src = URL.createObjectURL(blob);
		imageElement.width = bitmapDataWidth;
		imageElement.height = bitmapDataHeight;
	}
}