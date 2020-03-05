package splashjs.controls;

import splashjs.Global;
import splashjs.events.Event;
import splashjs.events.iface.IEvent;
import splashjs.controls.iface.IButton;
import splashjs.render.display.iface.IDisplayObjectRenderer;
import splashjs.render.controls.iface.IButtonRenderer;

public class Button extends BaseText implements IButton {

	
	public Button(String text) {
		super("button");
		
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Button.class, this));
		super.setText(text);
	}
	
	
	
	public boolean dispatchEvent(IEvent event) {
		
		if(event.getType().equalsIgnoreCase(Event.ADDED_TO_STAGE)) {
			
			super.originalWidth = ((IButtonRenderer)super.getRenderer()).getOriginalWidth();
			if(super.width == 0 && super.originalWidth != 0) {
				super.setWidth(super.originalWidth);
			}
			super.originalHeight = ((IButtonRenderer)super.getRenderer()).getOriginalHeight();
			if(super.height == 0 && super.originalHeight != 0) {
				super.setHeight(super.originalHeight);
			}
			
			((IButtonRenderer)super.getRenderer()).refresh();
		}
		
		return super.dispatchEvent(event);
	}
	
	
	/*
	public void setRendererFromStage(IStage stage) {
		super.stage = stage;
		super.setRenderer(stage.createRenderer(Button.class, this));
		((IButtonRenderer)super.getRenderer()).create();
		
	}*/
	
	@Override
	public void setWidth(int width) {
		super.setWidth(width);
	}
	
	@Override
	public int getWidth() {
		return ((IButtonRenderer)super.getRenderer()).getWidth();
	}
	
	@Override
	public void setHeight(int height) {
		super.setHeight(height);
	}
	
	@Override
	public int getHeight() {
		//return super.getHeight();
		return ((IButtonRenderer)super.getRenderer()).getHeight();
	}
	
	@Override
	public void setScaleX(double scaleX) {
		super.scaleX = scaleX;
		super.setWidth(((int)scaleX * super.originalWidth));
		
	}
	
	@Override
	public double getScaleX() {
		return super.scaleX;
	}
	
	@Override 
	public void setScaleY(double scaleY) {
		super.scaleY = scaleY;
		super.setHeight(((int)scaleY * super.originalHeight));
	}
	
	@Override
	public double getScaleY() {
		return super.scaleY;
	}
	
	@Override
	public void setSize(int width, int height){
		super.setWidth(width);
		super.setHeight(height);
	}
	
	@Override
	public void setScaleXY(double scaleX, double scaleY) {
		this.setScaleX(scaleX);
		this.setScaleY(scaleY);
		
	}
	
	public void render() {
		super.render();
		if(super.getWidth() != 0)
			((IDisplayObjectRenderer)super.getRenderer()).setWidth();
		if(super.getHeight() != 0)
			((IDisplayObjectRenderer)super.getRenderer()).setHeight();
	}
}