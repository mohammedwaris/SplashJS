package splashjs.display;

import splashjs.Global;
import splashjs.display.iface.IScene;

public class Scene extends DisplayObject implements IScene  {

	public Scene() {
		super("scene");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Scene.class, this));
	}

}