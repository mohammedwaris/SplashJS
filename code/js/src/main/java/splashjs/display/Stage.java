package splashjs.display;



import java.util.ArrayList;
import java.util.Timer;
import java.util.TimerTask;
import java.util.function.Consumer;

import splashjs.Global;
import splashjs.events.Event;
import splashjs.events.MouseEvent;
import splashjs.utils.Color;
import splashjs.geom.Point;

import splashjs.lang.UnsupportedOperationError;
import splashjs.application.iface.IStageOwner;
import splashjs.application.StageOwner;
import splashjs.geom.iface.IPoint;
import splashjs.events.iface.IEvent;
import splashjs.events.iface.IMouseEvent;
import splashjs.display.iface.IStage;
import splashjs.display.iface.ISprite;
import splashjs.display.iface.IDisplayObject;
import splashjs.utils.iface.IColor;
import splashjs.render.display.iface.IStageRenderer;
import splashjs.render.display.iface.IDisplayObjectRenderer;


public class Stage extends DisplayObjectContainer implements IStage {

	
	private IStageOwner stageOwner;
	private String scaleMode;
	private String align;
	
	//private boolean isReady = false;
	
	private IColor color; // = Color.WHITE;
	
	public Stage() {
		super("stage");
	}
	
	public Stage(String stageOwnerName, int width, int height) {
		super("stage");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Stage.class, this));
		this.stageOwner = new StageOwner(stageOwnerName, this, width, height);
		
		super.setWidth(width);
		super.setHeight(height);
		setColor(Color.WHITE);
		this.scaleMode = StageScaleMode.SHOW_ALL;
		((IStageRenderer)super.getRenderer()).startEnterFrameExitFrameDispatcherLoop();
		//this.stageOwner.getRenderer().appendChild(super.getRenderer());
		//render();
		this.stageOwner.addEventListener(Event.RESIZE, (event) -> {
			System.out.println("resized");
			handleResize();
		});
		this.stageOwner.getRenderer().appendChild(this.getRenderer());
		render();
	}
	
	
	
	public IStageOwner getStageOwner() {
		return this.stageOwner;
	}
	
	@Override
	public void setX(int x) {
		throw new UnsupportedOperationError();
	}
	
	@Override
	public void setY(int y) {
		throw new UnsupportedOperationError();
	}
	
	@Override
	public void setXY(int x, int y) {
		throw new UnsupportedOperationError();
	}
	
	@Override
	public IStage getStage() {
		return null;
	}
	
	public void setWidth(int width) {
		this.width = width;
	}
	
	public void setHeight(int height) {
		this.height = height;
	}
	
	public void setSize(int width, int height) {
		//this.width = 
	}
	
	public int getWidth() {
		return this.width;
	}
	
	public int getHeight() {
		return this.height;
	}
	
	
	
	//DisplayObjectContainer method
	@Override
	public void render() {
		
		super.render();
		
		((IStageRenderer)super.getRenderer()).setBorder("0px solid red");
		((IStageRenderer)super.getRenderer()).setOverflow("hidden");
		((IStageRenderer)super.getRenderer()).setPosition("relative");
		((IStageRenderer)super.getRenderer()).setDisplay("inline-block");
		
		((IStageRenderer)super.getRenderer()).setWidth();
		((IStageRenderer)super.getRenderer()).setHeight();
		((IStageRenderer)super.getRenderer()).setColor();
		
		handleResize();
		
	}
	
	
	//DisplayObjectContainer method
	@Override
	public void addChild(IDisplayObject child) {
		
		super.addChild(child);
		
		IEvent addedToStageEvent = new Event(Event.ADDED_TO_STAGE, child, child);
		addedToStageEvent.setData(this);
		child.dispatchEvent(addedToStageEvent);
		
	}
	
	//DisplayObjectContainer method
	@Override
	public void addChildAt(IDisplayObject child, int index) {
		
		super.addChildAt(child, index);

		IEvent addedToStageEvent = new Event(Event.ADDED_TO_STAGE, child, child);
		addedToStageEvent.setData(this);
		child.dispatchEvent(addedToStageEvent);
	}
	
	//DisplayObjectContainer method
	@Override
	public void removeChild(IDisplayObject child) {
		
		super.removeChild(child);

		IEvent removedFromStageEvent = new Event(Event.REMOVED_FROM_STAGE, child, child);
		child.dispatchEvent(removedFromStageEvent);

	}
	
	//DisplayObjectContainer method
	@Override
	public void removeChildAt(int index) {
		
		IDisplayObject child = getChildAt(index);
		super.removeChildAt(index);
		
		IEvent removedFromStageEvent = new Event(Event.REMOVED_FROM_STAGE, child, child);
		child.dispatchEvent(removedFromStageEvent);
	}
	
	
	public void setScaleMode(String stageScaleMode) {
		this.scaleMode = stageScaleMode;
		//resize();
	}
	
	public void setAlign(String stageAlign) {
		this.align = stageAlign;
		//resize();
	}
	
	@Override
	public boolean dispatchEvent(IEvent event) {
		//super.dispatchEvent(event)
		if(event.getType().equalsIgnoreCase(Event.RESIZE)) {
			//System.out.println("resize");
			handleResize();
		}else if(event.getType().equalsIgnoreCase(Event.ENTER_FRAME)) {
			//this.render();
		}else if(event.getType().equalsIgnoreCase(MouseEvent.MOUSE_MOVE)) {
			ISprite child = (ISprite)getDraggableChild();
			if(child != null) {
				IMouseEvent mouseEvent = (IMouseEvent)event;
				IPoint point = new Point((int)(mouseEvent.getLocalX()/this.getScaleX()), (int)(mouseEvent.getLocalY()/this.getScaleY()));
				//IPoint childPoint = child.globalToLocal(point);
				child.setX(point.getX());
				child.setY(point.getY());
				//System.out.println(this.getScaleX() + " " + this.getScaleY() + " " + child + " " + mouseEvent.getLocalX() + " " + mouseEvent.getLocalY());
			}
		}
		
		return super.dispatchEvent(event);
	}
	
	private ISprite getDraggableChild() {
		ISprite child = null;
		for(int i=0;i<children.size();i++) {
			if(children.get(i) instanceof ISprite) {
				child = (ISprite)children.get(i);
				if(child.getDraggable() == true) {
					break;
				}
			}
			child = null;
		}
		return child;
	}
	
	private void handleResize() {
		
		int stageOwnerWidth = stageOwner.getWidth();
		int stageOwnerHeight = stageOwner.getHeight();
		double stageWidth = getWidth();
		double stageHeight = getHeight();
		
		//System.out.println(stageOwnerWidth + " " + stageOwnerHeight + "," + stageWidth + " " + stageHeight);// + " " + getScaledWidth() + " " + getScaledHeight());
		
		
		if(scaleMode.equalsIgnoreCase(StageScaleMode.EXACT_FIT)) {
			this.setScaleX((double)stageOwnerWidth/stageWidth);
			this.setScaleY((double)stageOwnerHeight/stageHeight);
		}else if(scaleMode.equalsIgnoreCase(StageScaleMode.NO_BORDER)) {
			double widthRatio = (double)stageOwnerWidth/stageWidth;
			double heightRatio = (double)stageOwnerHeight/stageHeight;
			setScaleX(widthRatio);
			setScaleY(widthRatio);
			int px = (int) ((stageOwnerWidth - stageWidth*widthRatio)/2);
			int py = (int) ((stageOwnerHeight - stageHeight*widthRatio)/2);
			super.setX(px);
			super.setY(py);
		}else if(scaleMode.equalsIgnoreCase(StageScaleMode.SHOW_ALL)) {
			double widthRatio = (double)stageOwnerWidth/stageWidth;
			double heightRatio = (double)stageOwnerHeight/stageHeight;
			double ratio = Math.min(widthRatio, heightRatio);
			setScaleX(ratio);
			setScaleY(ratio);
			int px = (int) ((stageOwnerWidth - stageWidth*ratio)/2);
			int py = (int) ((stageOwnerHeight - stageHeight*ratio)/2);
			super.setX(px);
			super.setY(py);
		}
		
		
	}
	
	
	
	@Override
	public void setScaleX(double scaleX) {
		super.setScaleX(scaleX);
	}
	
	@Override
	public void setScaleY(double scaleY) {
		super.setScaleY(scaleY);
	}	
	
	public void setColor(IColor color) {
		this.color = color;
		if(super.getRenderer() != null) 
			((IStageRenderer)super.getRenderer()).setColor();
	}
	
	public IColor getColor() {
		return this.color;
	}
	
	
	
}//end of class