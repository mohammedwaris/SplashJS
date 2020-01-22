package splashjs.application;

import splashjs.Global;
import splashjs.events.EventDispatcher;

import splashjs.application.iface.IApplication;
import splashjs.render.application.iface.IApplicationRenderer;

public class Application extends EventDispatcher implements IApplication {
	
	private static IApplication application = null;
	
	private Application() {
		super("browserApp");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Application.class, this));
	}
	
	public static IApplication getApplicationInstance() {
		if(application == null)
			application = new Application();
		return application;
	}
	
	/*
	public IStage createStage(String stageOwnerName, int width, int height) {
		IStageOwner stageOwner = new StageOwner(stageOwnerName, width, height);
		super.addStageOwner(stageOwner);
		return stageOwner.getStage();
	}*/
	
	public boolean isOnline() {
		return ((IApplicationRenderer)super.getRenderer()).isOnline();
	}
	
	/*
	public IRenderer createRenderer(Class clazz, IEventDispatcher renderObject) {
		
		IRenderer renderer = null;
		
		if(clazz == Stage.class)
			renderer = new StageRenderer(renderObject);
		else if(clazz == Line.class)
			renderer = new LineRenderer(renderObject);
		else if(clazz == Circle.class)
			renderer = new CircleRenderer(renderObject);
		else if(clazz == Rectangle.class)
			renderer = new RectangleRenderer(renderObject);
		else if(clazz == Image.class)
			renderer = new ImageRenderer(renderObject);
		else if(clazz == Sprite.class) 
			renderer = new SpriteRenderer(renderObject);
		else if(clazz == StaticText.class) 
			renderer = new StaticTextRenderer(renderObject);
		else if(clazz == Sound.class) 
			renderer = new SoundRenderer(renderObject);
		else if(clazz == Video.class) 
			renderer = new VideoRenderer(renderObject);
		else if(clazz == SimpleButton.class) 
			renderer = new SimpleButtonRenderer(renderObject);
		else if(clazz == FileReference.class) 
			renderer = new FileReferenceRenderer(renderObject);
		else if(clazz == Label.class) 
			renderer = new LabelRenderer(renderObject);
		else if(clazz == Button.class) 
			renderer = new ButtonRenderer(renderObject);
		else if(clazz == TextInput.class) 
			renderer = new TextInputRenderer(renderObject);
		else if(clazz == TextArea.class) 
			renderer = new TextAreaRenderer(renderObject);
		else if(clazz == RadioButton.class) 
			renderer = new RadioButtonRenderer(renderObject);
		else if(clazz == List.class) 
			renderer = new ListRenderer(renderObject);
		
		
		return renderer;
	}*/
	
}// end of class