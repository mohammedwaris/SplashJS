package splashjs.render.display;

import def.dom.HTMLImageElement;
import def.dom.URL;
import def.dom.Blob;
import static def.dom.Globals.document;

import splashjs.display.iface.IBitmap;
import splashjs.display.iface.IBitmapData;
import splashjs.render.display.iface.IBitmapRenderer;
import splashjs.render.display.iface.IBitmapDataRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.RenderElement;
import splashjs.display.iface.IBitmapDrawable;

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