package splashjs.render.media;


import static def.js.Globals.eval;
import static def.dom.Globals.navigator;
import splashjs.def.webrtc.MediaStream;
//import static splashjs.def.js.Globals.navigator;



import splashjs.media.iface.ICamera;
import splashjs.events.iface.IPermissionEvent;
import splashjs.events.iface.IEventDispatcher;
import splashjs.events.PermissionEvent;
import splashjs.render.media.iface.ICameraRenderer;
import splashjs.render.events.EventDispatcherRenderer;
import splashjs.permissions.PermissionStatus;

public class CameraRenderer extends EventDispatcherRenderer implements ICameraRenderer {

	private MediaStream mediaStream;
	private ICamera camera;

	public CameraRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
		camera = (ICamera)renderObject;
	}
	
	public void requestPermission() {
		//def.js.Object paramObject = def.js.Object.create(null);
		//paramObject.$set("video", true);
		def.js.Promise cameraPromise = (def.js.Promise) eval("navigator.mediaDevices.getUserMedia({video: true});");
		cameraPromise.then(mStream -> {
			
			mediaStream = (MediaStream)mStream;
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
	
	public void setMediaStream(MediaStream mediaStream) {
		this.mediaStream = mediaStream;
	}
	
	public splashjs.def.webrtc.MediaStream getMediaStream() {
		return this.mediaStream;
	}

}