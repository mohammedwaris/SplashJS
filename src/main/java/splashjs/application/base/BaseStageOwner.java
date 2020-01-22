package splashjs.application.base;

import java.util.function.Consumer;
import java.util.ArrayList;

import splashjs.display.*;
import splashjs.render.*;
import splashjs.events.*;

import splashjs.application.iface.*;
import splashjs.display.iface.*;
import splashjs.render.iface.*;
import splashjs.display.iface.*;
import splashjs.events.iface.*;

public abstract class BaseStageOwner extends EventDispatcher implements IStageOwner {
	
	private IRenderer renderer;
	private IStage stage;
	protected int width;
	protected int height;
	
	
	public BaseStageOwner(String id) {
		super(id);
	}
	
	public void setStageAsChild() {
		this.renderer.appendChild(getStage().getRenderer());
		this.getStage().render();
	}
	
	public void setRendererAndStage(IRenderer renderer, IStage stage) {
		setRenderer(renderer);
		setStage(stage);
	}
	
	public void setRenderer(IRenderer renderer) {
		this.renderer = renderer;
	}
	
	public IRenderer getRenderer() {
		return renderer;
	}
	
	public IStage getStage() {
		return stage;
	}
	
	public void setStage(IStage stage) {
		this.stage = stage;
	}
	
	public void setWidth(int width) {
		this.width = width;
	}
	
	public void setHeight(int height) {
		this.height = height;
	}
	
	public int getWidth() {
		return this.width;
	}
	
	public int getHeight() {
		return this.height;
	}
	
	
	
	public void dispatchResizeEvent(IEvent resizeEvent, int newWidth, int newHeight) {
		this.width = newWidth;
		this.height = newHeight;
		getStage().dispatchEvent(resizeEvent);
	}
}