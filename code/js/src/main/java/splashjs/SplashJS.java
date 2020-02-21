package splashjs;

import splashjs.display.iface.IDisplayObject;
import splashjs.display.iface.IStage;
import splashjs.display.iface.IScene;
import splashjs.display.Stage;
import splashjs.render.SplashJSRenderer;
import splashjs.net.iface.IURLRequest;

public class SplashJS {

	public static void render(java.lang.Class AppClass, String containerName, int stageWidth, int stageHeight) {
		IStage stage = new Stage(containerName, stageWidth, stageHeight);
		try {
			stage.addChild((IDisplayObject)AppClass.newInstance());
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}
	
	public static void navigateToURL(IURLRequest urlRequest) {
		SplashJSRenderer.navigateToURL(urlRequest);
	}
}