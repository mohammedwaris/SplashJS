package splashjs.display;

import splashjs.Global;

public class Scene extends DisplayObjectContainer {

	public Scene() {
		super("scene");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Scene.class, this));
	}

}