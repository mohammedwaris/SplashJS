package splashjs;

import splashjs.iface.IGlobal;
import splashjs.render.iface.IRendererCreator;
import splashjs.render.RendererCreator;
import splashjs.events.EventDispatcher;
import splashjs.render.iface.IGlobalRenderer;

public class Global extends EventDispatcher implements IGlobal {
	
	public static IGlobal global = new Global();

	//private IApplication application = null; //new Application;
	private IRendererCreator rendererCreator = new RendererCreator();
	
	private Global() {
		super.setRenderer(getRendererCreator().createRenderer(Global.class, this));
	}
	
	public void render(Object divID, Object jsClass, int width, int height) {
		((IGlobalRenderer)super.getRenderer()).render(divID, jsClass, width, height);
	}

/*
	public IApplication getApplication() {
		if(application == null) {
			application = splashjs.application.Application.getApplicationInstance();
		}
		
		return application;
	}*/
	
	public IRendererCreator getRendererCreator() {
		return rendererCreator;
	}
	
	
}