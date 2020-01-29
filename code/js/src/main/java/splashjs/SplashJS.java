package splashjs;

import splashjs.display.iface.IDisplayObject;
import splashjs.display.iface.IStage;
import splashjs.display.Stage;

public class SplashJS {

	public static void render(Class AppClass, String containerName, int stageWidth, int stageHeight) {
		IStage stage = new Stage(containerName, stageWidth, stageHeight);
		IDisplayObject displayObject = null;
		try {
			displayObject = (IDisplayObject)AppClass.newInstance();
			stage.addChild(displayObject);
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}
}