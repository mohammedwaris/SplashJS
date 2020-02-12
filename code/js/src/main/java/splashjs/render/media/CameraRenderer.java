package splashjs.render.media;

import static def.dom.Globals.*;
import static def.js.Globals.*;
import def.dom.*;
import def.js.Promise;
import splashjs.def.js.MediaStream;


import splashjs.media.iface.*;
import splashjs.media.*;
import splashjs.events.iface.*;
import splashjs.render.media.iface.*;
import splashjs.render.events.*;

public class CameraRenderer extends EventDispatcherRenderer implements ICameraRenderer {

	private splashjs.def.js.MediaStream mediaStream;

	public CameraRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
	}


	public static ICamera getCamera() {
		ICamera camera = new Camera();
		
		//def.js.Object mediaDevices = ;((def.js.Object)navigator).$get("mediaDevices");
		//def.js.Function getUserMedia =  //(def.js.Function)((def.js.Object)mediaDevices).$get("getUserMedia");
		def.js.Promise cameraPromise = (def.js.Promise) eval("navigator.mediaDevices.getUserMedia({video: true});"); //getUserMedia.$apply();
		cameraPromise.then(mStream -> {
			def.js.Object mediaStream = (def.js.Object)mStream;
			System.out.println((splashjs.def.js.MediaStream)mediaStream);
			((ICameraRenderer)camera.getRenderer()).setMediaStream((splashjs.def.js.MediaStream)mediaStream);
		}).Catch(error -> {
			System.out.println(error);
		});
		
		/*
		def.js.Promise promise = null;
		String js = "var pr = navigator.mediaDevices.getUserMedia({video:true});";
		js += "pr.then(stream => {console.log(stream);}).catch(error => {console.log(error);});";
		eval(js);
		*/
		return camera;
	}
	
	public void setMediaStream(splashjs.def.js.MediaStream mediaStream) {
		this.mediaStream = mediaStream;
	}
	
	public MediaStream getMediaStream() {
		return this.mediaStream;
	}

}