package splashjs.media;

import java.util.ArrayList;

import splashjs.Global;
import splashjs.events.EventDispatcher;
import splashjs.media.iface.ICamera;
import splashjs.render.media.iface.ICameraRenderer;

public class Camera extends EventDispatcher implements ICamera {

	public Camera() {
		super("camera");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Camera.class, this));
	}
	
	public static ICamera getCamera() {
		return new Camera();
	}
	
	public void requestPermission() {
		((ICameraRenderer)super.getRenderer()).requestPermission();
	}
	
	public static ArrayList<String> getNames() {
		return null;
	}


}