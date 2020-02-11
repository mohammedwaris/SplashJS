package splashjs.render.media;

import static def.dom.Globals.*;
import static def.js.Globals.*;
import def.dom.*;
import def.js.Promise;


import splashjs.media.iface.*;
import splashjs.media.*;
import splashjs.events.iface.*;
import splashjs.render.media.iface.*;
import splashjs.render.events.*;

public class CameraRenderer extends EventDispatcherRenderer implements ICameraRenderer {

	private def.js.Object mediaStream;

	public CameraRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
	}


	public static ICamera getCamera() {
		//def.js.Object mediaDevices = ;((def.js.Object)navigator).$get("mediaDevices");
		//def.js.Function getUserMedia =  //(def.js.Function)((def.js.Object)mediaDevices).$get("getUserMedia");
		def.js.Promise cameraPromise = (def.js.Promise) eval("navigator.mediaDevices.getUserMedia({video: true});"); //getUserMedia.$apply();
		cameraPromise.then(mStream -> {
			mediaStream = mStream;
		}).Catch(error -> {
			System.out.println(error);
		});
		
		/*
		def.js.Promise promise = null;
		String js = "var pr = navigator.mediaDevices.getUserMedia({video:true});";
		js += "pr.then(stream => {console.log(stream);}).catch(error => {console.log(error);});";
		eval(js);
		*/
		return new Camera();
	}

}