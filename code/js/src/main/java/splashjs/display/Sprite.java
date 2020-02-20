package splashjs.display;

import splashjs.Global;
import splashjs.display.iface.ISprite;
import splashjs.display.iface.IDisplayObject;
import splashjs.render.display.iface.ISpriteRenderer;
import splashjs.display.iface.IDraggable;

public class Sprite extends DisplayObjectContainer implements ISprite, IDraggable {

	private boolean draggable = false;
	
	public Sprite() {
		this("sprite");
	}
	
	public Sprite(String id) {
		super(id);
		super.setRenderer(Global.global.getRendererCreator().createRenderer(Sprite.class, this));
		
	}
	
	
	
	@Override
	public void render() {
		super.render();
		((ISpriteRenderer)super.getRenderer()).setBorder("0px solid olive");
	}
	
	public void startDrag() {
		this.draggable = true;
	}
	
	public void stopDrag() {
		this.draggable = false;
	}
	
	public boolean getDraggable() {
		return this.draggable;
	}
	

	@Override
	public int getWidth() {
		int leftX = 0;
		int rightX = 0;
		if(children.size() > 0) {
			leftX = children.get(0).getX();
			rightX = children.get(0).getX() + children.get(0).getWidth();
			for(IDisplayObject child : children) {
				if(leftX > child.getX())
					leftX = child.getX();
				if(rightX < (child.getX() + child.getWidth()))
					rightX = (child.getX() + child.getWidth());
			}
			//System.out.println(leftX + " " + rightX + " "  + (rightX - leftX));
		}
		return (rightX - leftX);
	}
	
	@Override
	public int getHeight() {
		int topY = 0;
		int bottomY = 0;
		if(children.size() > 0) {
			topY = children.get(0).getY();
			bottomY = children.get(0).getY() + children.get(0).getHeight();
			for(IDisplayObject child : children) {
				if(topY > child.getY())
					topY = child.getY();
				if(bottomY < (child.getY() + child.getHeight()))
					bottomY = (child.getY() + child.getHeight());
			}
			//System.out.println(leftX + " " + rightX + " "  + (rightX - leftX));
		}
		return (bottomY - topY);
	}

/*
	@Override	
	public int getHeight() {
		
		if(children.size() == 0)
			return -1;
		
		int y1 = children.get(0).getY();
		int y2 = y1 + children.get(0).getHeight() - (children.get(0).getRegY());
		for(int i=1;i<children.size();i++) {
			int ty = children.get(i).getY();
			int regY = (children.get(i).getRegY());
			int height = children.get(i).getHeight();
			if(y1 > ty - regY)
				y1 = ty - regY;
			
			if(y2 < (ty + height - regY))
				y2 = ty + height - regY;
		}
		return Math.abs(y2 - y1);
	}
	
	@Override	
	public void setWidth(Integer width) {
		setScaleX((double)width/getWidth());
	}
	
	@Override
	public void setHeight(Integer height) {
		setScaleY((double)height/getHeight());
	}

	@Override
	public int getScaledWidth() {
		int value = -1;
		value = (int)(getWidth() * super.getScaleX());
		return value;
	}
	
	@Override
	public int getScaledHeight() {
		int value = -1;
		value = (int)(getHeight() * super.getScaleY());
		return value;
	}*/
	

	
	
}