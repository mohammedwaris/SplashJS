package splashjs.media;

import splashjs.Global;
import splashjs.display.DisplayObject;
import splashjs.display.iface.IStage;
import splashjs.events.Event;
import splashjs.events.iface.IEvent;
import splashjs.utils.iface.IResource;
import splashjs.media.iface.ISound;
import splashjs.render.media.iface.ISoundRenderer;

public class Sound extends DisplayObject implements ISound {
	
	private IResource resource;
	private String soundPath;

	
	public Sound(IResource resource) {
		super("sound");
		this.soundPath = resource.getResourcePath();
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Sound.class, this));
	}
	
	public Sound(IStage stage) {
		super("sound");
		
	
	}
	
	public Sound(String soundPath) {
		super("sound");
		this.soundPath = soundPath;
	}
	
	
	
	public void setSoundPath(String soundPath) {
		this.soundPath = soundPath;
		if(super.getRenderer() != null)
			((ISoundRenderer)super.getRenderer()).setSoundPath();
	}
	

	public boolean dispatchEvent(IEvent event) {

		
		
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			
		}
		
		return super.dispatchEvent(event);
	}
	
	@Override
	public String getSoundPath() {
		return soundPath;
	}
	
	@Override
	public void render() {
		super.render();
		//super.getRenderer().setProperty(ElementProperty.BORDER, "1px solid blue");
	}
	
	public void play() {
		if(super.getRenderer() != null)
			((ISoundRenderer)super.getRenderer()).playSound();
	}
	
	public void pause() {
		if(super.getRenderer() != null)
			((ISoundRenderer)super.getRenderer()).pauseSound();
	}
	
	public String toString() {
		return "[object Sound]";
	}
	


}