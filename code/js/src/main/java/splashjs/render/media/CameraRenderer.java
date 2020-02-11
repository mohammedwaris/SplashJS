package splashjs.render.media;

import static def.dom.Globals.*;
import static def.js.Globals.*;
import def.dom.*;


import splashjs.media.iface.*;
import splashjs.media.*;

public class CameraRenderer {


	public static ICamera getCamera() {
		//def.js.Object mediaDevices = ;((def.js.Object)navigator).$get("mediaDevices");
		//def.js.Function getUserMedia =  //(def.js.Function)((def.js.Object)mediaDevices).$get("getUserMedia");
		//def.js.Promise cameraPromise = (def.js.Promise) eval("navigator.mediaDevices.getUserMedia();"); //getUserMedia.$apply();
		/*cameraPromise.then(mediaStream -> {
			System.out.println(mediaStream);
		}).Catch(error -> {
			System.out.println(error);
		});*/
		
		String js = "var pr = navigator.mediaDevices.getUserMedia({video:true});";
		js += "pr.then(stream => {console.log(stream);}).catch(error => {console.log(error);});";
		eval(js);
		return new Camera();
	}

}