package splashjs.render.utils;

import def.js.ArrayBuffer;
import def.js.DataView;

import splashjs.utils.iface.IByteArray;
import splashjs.events.iface.IEventDispatcher;
import splashjs.render.utils.iface.IByteArrayRenderer;
import splashjs.render.events.EventDispatcherRenderer;

public class ByteArrayRenderer extends EventDispatcherRenderer implements IByteArrayRenderer {
	
	private DataView dataView;
	
	public ByteArrayRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		dataView = new DataView(new ArrayBuffer(0));
	}
	
	public void setDataView(DataView dataView) {
		this.dataView = dataView;
	}
	
	public int getLength() {
		return (int)dataView.byteLength;
	}
	
	public void writeBytes(IByteArray byteArray, int offset, int length) {
		
	}
}