package splashjs.render;


import splashjs.events.iface.IEventDispatcher;
import splashjs.render.events.EventDispatcherRenderer;
import splashjs.render.iface.IGlobalRenderer;
import splashjs.display.iface.IStage;
import splashjs.display.Stage;
import splashjs.display.iface.ISprite;
import splashjs.display.iface.IDisplayObject;

public class GlobalRenderer extends EventDispatcherRenderer implements IGlobalRenderer {

	public GlobalRenderer(IEventDispatcher renderObject) {
		super.setRenderObject(renderObject);
	}
	
	public void render(Object divID, Object jsClass, int width, int height) {
		
		
		IStage stage = new Stage((String)divID, width, height);
		//def.js.Object sprite = null;
		String js = "";
		try {
			js = "new " + jsClass.toString() + "();";
			//sprite = (def.js.Object) def.js.Object.create(jsClass);
			stage.addChild(def.js.Globals.eval(js));
		}catch(Exception e) {
			e.printStackTrace();
		}
	}

}