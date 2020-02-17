package splashjs.display;

import splashjs.*;
import splashjs.events.*;
import splashjs.display.iface.*;
import splashjs.render.display.iface.*;

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