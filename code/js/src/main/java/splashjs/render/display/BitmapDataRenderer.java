package splashjs.render.display;

import def.js.*;
import def.dom.*;
import static def.js.Globals.*;
//import splashjs.def.js.*;

import splashjs.render.display.iface.*;
import splashjs.render.events.*;
import splashjs.events.iface.*;
import splashjs.display.iface.*;
import splashjs.utils.iface.*;
import splashjs.utils.*;
import splashjs.media.iface.*;
import splashjs.render.media.iface.*;
import splashjs.render.utils.iface.*;

public class BitmapDataRenderer extends EventDispatcherRenderer implements IBitmapDataRenderer {

	private Blob blob;

	public BitmapDataRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		
	}
	
	public void draw(IBitmapDrawable bitmapDrawable) {
		
		if(bitmapDrawable instanceof IVideo) {
			IVideo video = (IVideo)bitmapDrawable;
			def.js.Object mediaStream = ((ICameraRenderer)video.getCamera().getRenderer()).getMediaStream();
			def.js.Object imageCapture = eval("new ImageCapture(mediaStream.getVideoTracks()[0]);");
			Promise photoPromise = (def.js.Promise)eval("imageCapture.takePhoto();");
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