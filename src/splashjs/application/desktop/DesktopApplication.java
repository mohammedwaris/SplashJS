package flashjs.application.desktop;

import flashjs.display.*;
import flashjs.display.impl.*;
import flashjs.events.*;
import flashjs.events.impl.*;
import flashjs.application.*;
import flashjs.application.base.*;
import flashjs.layout.*;
import flashjs.layout.impl.*;
import flashjs.utils.*;
import flashjs.utils.impl.*;
import flashjs.media.*;
import flashjs.media.impl.*;
import flashjs.render.*;
import flashjs.render.desktop.*;
import flashjs.render.application.*;
import flashjs.render.application.desktop.*;


public class DesktopApplication extends BaseApplication {
	
	private static IApplication application = null;
	
	/*public static class JavaFXApp extends javafx.application.Application {
			
		public static void main(String args[]) {
			launch(args);
		}
		
		public void start(javafx.stage.Stage primaryStage) {
				
		}
			
			
	}*/
	
	private DesktopApplication() {
		super("desktopApp");
		super.setRenderer(new DesktopApplicationRenderer(this));
	}
	
	public static IApplication getApplicationInstance() {
		if(application == null)
			application = new DesktopApplication();
		return application;
	}
	
	public IStage createStage(String stageOwnerName, int width, int height) {
		IStageOwner stageOwner = new DesktopStageOwner(stageOwnerName, width, height);
		super.addStageOwner(stageOwner);
		return stageOwner.getStage();
	}
	
	public boolean isOnline() {
		return ((IApplicationRenderer)super.getRenderer()).isOnline();
	}
	
	public IRenderer createRenderer(Class clazz, IEventDispatcher eventDispatcher) {
		return null;
	}
	
	
	/*
	public IImage createImage(String path) {
		IImage image = new Image(path);
		//image.setRenderer(new DesktopRenderer());
		return image;
	}
	
	public IImage createImage(IResource resource) {
		IImage image = new Image(resource);
		//image.setRenderer(new DesktopRenderer());
		return image;
	}
	
	public ISprite createSprite() {
		ISprite sprite = new Sprite();
		//sprite.setRenderer(new DesktopRenderer());
		return sprite;
	}
	
	public ISound createSound(IResource resource) {
		ISound sound = new Sound(resource);
		//sound.setRenderer(new DesktopRenderer());
		return sound;
	}
	
	public IGridLayout createGridLayout(int row, int col) {
		IGridLayout gridLayout = new GridLayout(row, col);
		//gridLayout.setRenderer(new DesktopRenderer());
		return gridLayout;
	}
	
	public IResourceLoader createResourceLoader() {
		IResourceLoader resourceLoader = new ResourceLoader();
		return resourceLoader;
	}
	
	public IResource createResource(String resourceName, String resourcePath, String resourceType) {
		IResource resource = new Resource(resourceName, resourcePath, resourceType);
		return resource;
	}*/
	
	
	
	
	

	
	
	
	
	


	


	
	
	
}// end of class