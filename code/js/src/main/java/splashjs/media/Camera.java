package splashjs.media;

import java.util.*;

import splashjs.*;
import splashjs.events.iface.*;
import splashjs.events.*;
import splashjs.render.media.*;
import splashjs.media.iface.*;
import splashjs.render.media.iface.*;

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