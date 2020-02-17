package splashjs.display;

import splashjs.*;
import splashjs.display.iface.*;
import splashjs.render.display.iface.*;

public class Bitmap extends DisplayObject implements IBitmap {

	private IBitmapData bitmapData;
	
	public Bitmap() {
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Bitmap.class, this));
	}
	
	public Bitmap(IBitmapData bitmapData) {
		this.bitmapData = bitmapData;
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Bitmap.class, this));
	}
	
	public void setBitmapData(IBitmapData bitmapData) {
		this.bitmapData = bitmapData;
	}
	
	public IBitmapData getBitmapData() {
		return this.bitmapData;
	}
}