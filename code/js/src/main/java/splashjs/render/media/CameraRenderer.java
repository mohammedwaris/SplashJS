package splashjs.render.media;

import static def.dom.Globals.*;
import static def.js.Globals.*;
import def.dom.*;
import jsweet.lang.*;
import def.js.*;



import splashjs.media.iface.*;
import splashjs.media.*;
import splashjs.events.iface.*;
import splashjs.events.*;
import splashjs.render.media.iface.*;
import splashjs.render.events.*;
import splashjs.permissions.*;

public class CameraRenderer extends EventDispatcherRenderer implements ICameraRenderer {

	private def.webrtc.MediaStream mediaStream;
	private ICamera camera;

	public CameraRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		camera = (ICamera)renderObject;
	}
	
	public void requestPermission() {
		def.js.Promise cameraPromise = (def.js.Promise) eval("navigator.mediaDevices.getUserMedia({video: true});");
		cameraPromise.then(mStream -> {
			mediaStream = (def.webrtc.MediaStream)mStream;
			IPermissionEvent permissionEvent = new PermissionEvent(PermissionEvent.PERMISSION_STATUS, camera, camera);
			permissionEvent.setStatus(PermissionStatus.GRANTED);
			camera.dispatchEvent(permissionEvent);
		}).Catch(error -> {
			//System.out.println(error);
			IPermissionEvent permissionEvent = new PermissionEvent(PermissionEvent.PERMISSION_STATUS, camera, camera);
			permissionEvent.setStatus(PermissionStatus.DENIED);
			camera.dispatchEvent(permissionEvent);
		});
	}
	
	public void setMediaStream(def.webrtc.MediaStream mediaStream) {
		this.mediaStream = mediaStream;
	}
	
	public def.webrtc.MediaStream getMediaStream() {
		return this.mediaStream;
	}

}