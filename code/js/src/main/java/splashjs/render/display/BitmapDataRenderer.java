package splashjs.render.display;

import def.dom.Blob;
import static def.js.Globals.eval;

import splashjs.render.display.iface.IBitmapDataRenderer;
import splashjs.render.events.EventDispatcherRenderer;
import splashjs.events.iface.IEventDispatcher;
import splashjs.display.iface.IBitmapDrawable;
import splashjs.media.iface.IVideo;
import splashjs.render.media.iface.ICameraRenderer;

public class BitmapDataRenderer extends EventDispatcherRenderer implements IBitmapDataRenderer {

	private Blob blob;

	public BitmapDataRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		
	}
	
	public void draw(IBitmapDrawable bitmapDrawable) {
		
		if(bitmapDrawable instanceof IVideo) {
			IVideo video = (IVideo)bitmapDrawable;
			splashjs.def.webrtc.MediaStream mediaStream = ((ICameraRenderer)video.getCamera().getRenderer()).getMediaStream();
			def.js.Object imageCapture = eval("new ImageCapture(mediaStream.getVideoTracks()[0]);");
			def.js.Promise photoPromise = (def.js.Promise)eval("imageCapture.takePhoto();");
			photoPromise.then((blobData) -> {
				blob = (def.dom.Blob)blobData;
			}).Catch((error) -> {
				System.out.println(error);
			});
		}
		
	}// end of draw()
	
	public Blob getBlob() {
		return this.blob;
	}
}