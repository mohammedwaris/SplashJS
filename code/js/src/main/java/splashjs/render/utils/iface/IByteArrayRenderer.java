package splashjs.render.utils.iface;

import def.js.DataView;

import splashjs.render.events.iface.IEventDispatcherRenderer;
import splashjs.utils.iface.IByteArray;

public interface IByteArrayRenderer extends IEventDispatcherRenderer {
	
	public void writeBytes(IByteArray byteArray, int offset, int length);
	public int getLength();
	public void setDataView(DataView dataView);
	
}