package splashjs.display;

import splashjs.Global;
import splashjs.events.EventDispatcher;
import splashjs.display.iface.IBitmapData;
import splashjs.display.iface.IBitmapDrawable;
import splashjs.render.display.iface.IBitmapDataRenderer;

public class BitmapData extends EventDispatcher implements IBitmapData {

	private int bitmapDataWidth;
	private int bitmapDataHeight;
	
	public BitmapData(int bitmapDataWidth, int bitmapDataHeight) {
		this.bitmapDataWidth = bitmapDataWidth;
		this.bitmapDataHeight = bitmapDataHeight;
		super.setRenderer(Global.global.getRendererCreator().createRenderer(BitmapData.class, this));
	}
	
	public int getBitmapDataWidth() {
		return this.bitmapDataWidth;
	}
	
	public int getBitmapDataHeight() {
		return this.bitmapDataHeight;
	}
	
	public void draw(IBitmapDrawable bitmapDrawable) {
			((IBitmapDataRenderer)super.getRenderer()).draw(bitmapDrawable);
	}
}