package splashjs.display;

import splashjs.Global;
import splashjs.events.Event;
import splashjs.events.iface.IEvent;
import splashjs.display.iface.IDisplayObjectContainer;
import splashjs.display.iface.IImage;
import splashjs.utils.iface.IResource;
import splashjs.render.display.iface.IImageRenderer;


public class Image extends InteractiveObject implements IImage {

	private String imagePath = "";
	private String imageType = "";
	private IResource resource;
	private Integer originalWidth;
	private Integer originalHeight;
	
	public Image() {
		this("");
	}
	
	public Image(String imagePath) {
		super("image");
		this.imagePath = imagePath;
		String type = this.imagePath.substring(this.imagePath.lastIndexOf(".") + 1);
		if(type.equalsIgnoreCase("jpg") || type.equalsIgnoreCase("jpeg"))
			this.imageType = "jpeg";
		else if(type.equalsIgnoreCase("png"))
			this.imageType = "png";
		else if(type.equalsIgnoreCase("gif"))
			this.imageType = "gif";
		
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Image.class, this));
	}
	
	public Image(IResource resource) {
		super("image");
		this.resource = resource;
		this.imagePath = resource.getResourcePath();
		
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Image.class, this));
	}
	
	@Override
	public String getImagePath() {
		return imagePath;
	}
	
	@Override
	public String getImageType() {
		return imageType;
	}
	
	@Override
	public boolean dispatchEvent(IEvent event) {
		
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			//System.out.println("in image dispatch event method");
		}else if(event.getType().equalsIgnoreCase(Event.REMOVED_FROM_STAGE)) {
			
		}else if(event.getType().equalsIgnoreCase(Event.ADDED)) {
			super.parent = (IDisplayObjectContainer) event.getTarget();
		}else if(event.getType().equalsIgnoreCase(Event.REMOVED)) {
			super.parent = null;
		}else if(event.getType().equalsIgnoreCase(Event.LOADED)) {
			super.originalWidth = ((IImageRenderer)super.getRenderer()).getOriginalWidth();
			super.originalHeight = ((IImageRenderer)super.getRenderer()).getOriginalHeight();
			if(super.width == 0 && super.originalWidth != 0) {
				super.width = super.originalWidth;
				((IImageRenderer)super.getRenderer()).setWidth();
			}
			
			if(super.height == 0 && super.originalHeight != 0) {
				super.height = super.originalHeight;
				 ((IImageRenderer)super.getRenderer()).setHeight();
			}
		}
		
		boolean retValue = super.dispatchEvent(event);
		return retValue;
	}
	
	/*
	public void setRendererFromStage(IStage stage) {
		super.stage = stage;
		super.setRenderer(stage.createRenderer(Image.class, this));
		((IImageRenderer)super.getRenderer()).create();
	}*/
	
	@Override
	public int getWidth() {
		return super.getWidth();
	}
	
	@Override
	public int getHeight() {
		return super.getHeight();
	}

	@Override
	public void setWidth(int width) {
		super.width = width;
		super.setScaleX((double)width/super.originalWidth);
	}
	
	@Override
	public void setHeight(int height) {
		super.height = height;
		super.setScaleY((double)height/super.originalHeight);
	}
	


	
}