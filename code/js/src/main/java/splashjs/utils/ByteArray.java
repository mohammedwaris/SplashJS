package splashjs.utils;



import splashjs.Global;
import splashjs.render.utils.iface.IByteArrayRenderer;
import splashjs.utils.iface.IByteArray;
import splashjs.events.EventDispatcher;

public class ByteArray extends EventDispatcher implements IByteArray {
	
	public ByteArray() {
		super("byteArray");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(ByteArray.class, this));
	}
	
	public int getLength() {
		return ((IByteArrayRenderer)super.getRenderer()).getLength();
	}
	
	public void writeBytes(IByteArray byteArray, int offset, int length) {
		((IByteArrayRenderer)super.getRenderer()).writeBytes(byteArray, offset, length);
	}
}