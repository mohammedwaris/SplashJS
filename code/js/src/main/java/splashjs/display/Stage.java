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
import splashjs.display.iface.IScene;
import splashjs.display.iface.IDraggable;
import splashjs.display.iface.IDisplayObject;
import splashjs.display.iface.IDisplayObjectContainer;
import splashjs.utils.iface.IColor;
import splashjs.render.display.iface.IStageRenderer;
import splashjs.render.display.iface.IDisplayObjectRenderer;



public class Stage extends DisplayObjectContainer implements IStage {

	
	private IStageOwner stageOwner;
	private String scaleMode = StageScaleMode.SHOW_ALL;
	private String align = StageAlign.TOP_LEFT;
	private IScene scene;
	
	
	//private boolean isReady = false;
	
	private IColor color; // = Color.WHITE;
	
	public Stage() {
		super("stage");
	}
	
	public Stage(String stageOwnerName, int width, int height) {
		super("stage");
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Stage.class, this));
		this.stageOwner = new StageOwner(stageOwnerName, this, width, height);
		//this.scaleMode = StageScaleMode.SHOW_ALL;
		//this.align = StageAlign.TOP_LEFT;
		super.setWidth(width);
		super.setHeight(height);
		setColor(Color.WHITE);
		
		((IStageRenderer)super.getRenderer()).startEnterFrameExitFrameDispatcherLoop();
		//this.stageOwner.getRenderer().appendChild(super.getRenderer());
		//render();
		this.stageOwner.addEventListener(Event.RESIZE, (event) -> {
			//System.out.println("resized");
			handleResize();
			IEvent resizeEvent = new splashjs.events.Event(splashjs.events.Event.RESIZE, this, this);
			this.dispatchEvent(resizeEvent);
		});
		this.stageOwner.getRenderer().appendChild(this.getRenderer());
		render();
	}
	
	public void setScene(IScene scene) {
		
		if(this.scene != null)
			((IStageRenderer)super.getRenderer()).removeScene();
		
		this.scene = scene;
		((IStageRenderer)super.getRenderer()).setScene();
	}
	
	public IScene getScene() {
		return this.scene;
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
	
	public int getStageWidth() {
		int stageWidth = this.width;
		if(scaleMode.equalsIgnoreCase(StageScaleMode.NO_SCALE))
			stageWidth = ((IStageRenderer)super.getRenderer()).getStageWidth();
		return stageWidth;
	}
	
	public int getStageHeight() {
		int stageHeight = this.height;
		if(scaleMode.equalsIgnoreCase(StageScaleMode.NO_SCALE))
			stageHeight = ((IStageRenderer)super.getRenderer()).getStageHeight();
		return stageHeight;
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
		//System.out.println("In Stage addChild(): " + this);
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
		if(scaleMode.equalsIgnoreCase(StageScaleMode.NO_SCALE)) {
			((IStageRenderer)super.getRenderer()).setWidth();
			((IStageRenderer)super.getRenderer()).setHeight();
			super.setWidth(this.width);
			super.setHeight(this.height);
			super.setScaleX(1);
			super.setScaleY(1);
			if(align.equalsIgnoreCase(StageAlign.TOP_LEFT)) {
				super.setX(0);
				super.setY(0);
			}else if(align.equalsIgnoreCase(StageAlign.TOP_RIGHT)){
				super.setX(this.getStageWidth() - this.getWidth());
				super.setY(0);
			}else if(align.equalsIgnoreCase(StageAlign.BOTTOM_LEFT)){
				super.setX(0);
				super.setY(this.getStageHeight() - this.getHeight());
			}else if(align.equalsIgnoreCase(StageAlign.BOTTOM_RIGHT)){
				super.setX(this.getStageWidth() - this.getWidth());
				super.setY(this.getStageHeight() - this.getHeight());
			}else if(align.equalsIgnoreCase(StageAlign.TOP)){
				super.setX((this.getStageWidth() - this.getWidth())/2);
				super.setY(0);
			}else if(align.equalsIgnoreCase(StageAlign.BOTTOM)){
				super.setX((this.getStageWidth() - this.getWidth())/2);
				super.setY(this.getStageHeight() - this.getHeight());
			}else if(align.equalsIgnoreCase(StageAlign.LEFT)){
				super.setX(0);
				super.setY((this.getStageHeight() - this.getHeight())/2);
			}else if(align.equalsIgnoreCase(StageAlign.RIGHT)){
				super.setX(this.getStageWidth() - this.getWidth());
				super.setY((this.getStageHeight() - this.getHeight())/2);
			}else if(align.equalsIgnoreCase(StageAlign.CENTER)){
				super.setX((this.getStageWidth() - this.getWidth())/2);
				super.setY((this.getStageHeight() - this.getHeight())/2);
			}
		}else {
			handleResize();
		}
		
	}
	
	public String getScaleMode() {
		return this.scaleMode;
	}
	
	public void setAlign(String stageAlign) {
		this.align = stageAlign;
		handleResize();
	}
	
	@Override
	public boolean dispatchEvent(IEvent event) {
		//super.dispatchEvent(event)
		//System.out.println(event);
		if(event.getType().equalsIgnoreCase(Event.RESIZE)) {
			//System.out.println("resize");
			handleResize();
		}else if(event.getType().equalsIgnoreCase(Event.ENTER_FRAME)) {
			//this.render();
		}else if(event.getType().equalsIgnoreCase(MouseEvent.MOUSE_MOVE)) {
			IDraggable child = (IDraggable)getDraggableChild(this.getAllChildren());
			//System.out.println(child);
			if(child != null) {
				IMouseEvent mouseEvent = (IMouseEvent)event;
				IPoint point = new Point((int)(mouseEvent.getLocalX()/this.getScaleX()), (int)(mouseEvent.getLocalY()/this.getScaleY()));
				//IPoint childPoint = child.globalToLocal(point);
				child.setX(point.getX());
				child.setY(point.getY());
				//System.out.println(point);
				//System.out.println(this.getScaleX() + " " + this.getScaleY() + " " + child + " " + mouseEvent.getLocalX() + " " + mouseEvent.getLocalY());
			}
		}
		
		return super.dispatchEvent(event);
	}
	
	private IDraggable getDraggableChild(ArrayList<IDisplayObject> children) {
		IDraggable child = null;
		for(int i=0;i<children.size();i++) {
			if(children.get(i) instanceof IDraggable) {
				child = (IDraggable)children.get(i);
				if(child.getDraggable() == true)
					break;
			}
			if(children.get(i) instanceof IDisplayObjectContainer) {
				child = getDraggableChild(((IDisplayObjectContainer)children.get(i)).getAllChildren());
				if(child != null)
					break;
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
		}else if(scaleMode.equalsIgnoreCase(StageScaleMode.NO_SCALE)) {
			((IStageRenderer)super.getRenderer()).setWidth();
			((IStageRenderer)super.getRenderer()).setHeight();
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