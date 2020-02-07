package splashjs.display;

import splashjs.display.iface.*;

public class Bitmap extends DisplayObject implements IBitmap {

	private IBitmapData bitmapData;
	
	public Bitmap() {
	}
	
	public Bitmap(IBitmapData bitmapData) {
		this.bitmapData = bitmapData;
	}
	
	public void setBitmapData(IBitmapData bitmapData) {
		this.bitmapData = bitmapData;
	}
	
	public IBitmapData getBitmapData() {
		return this.bitmapData;
	}
}