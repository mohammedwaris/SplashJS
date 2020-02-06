package splashjs;

import splashjs.display.iface.IDisplayObject;
import splashjs.display.iface.IStage;
import splashjs.display.iface.IScene;
import splashjs.display.Stage;

public class SplashJS {

	public static void render(Class AppClass, String containerName, int stageWidth, int stageHeight) {
		IStage stage = new Stage(containerName, stageWidth, stageHeight);
		IScene scene = null;
		try {
			scene = (IScene)AppClass.newInstance();
			stage.setScene(scene);
		}catch(Exception e) {
			e.printStackTrace();
		}
		
	}
}