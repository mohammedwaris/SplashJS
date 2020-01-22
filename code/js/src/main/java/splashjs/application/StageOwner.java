package splashjs.application;

import java.util.function.Consumer;
import java.util.ArrayList;

import splashjs.Global;
import splashjs.display.iface.IStage;
import splashjs.render.iface.IRenderer;
import splashjs.events.EventDispatcher;
import splashjs.application.iface.IStageOwner;

public class StageOwner extends EventDispatcher implements IStageOwner  {
	

	private IRenderer renderer;
	private IStage stage;
	protected int width;
	protected int height;
	
	public StageOwner(String stageOwnerName, IStage stage, int width, int height) {
		super(stageOwnerName);
		this.stage = stage;
		this.width = width;
		this.height = height;
		super.setRenderer(Global.global.getRendererCreator().createRenderer(StageOwner.class, this));

		
		
		
	}
	
	public IStage getStage() {
		return this.stage;
	}
	
	
	public void setWidth(int width) {
		this.width = width;
	}
	
	public int getWidth() {
		return this.width;
	}
	
	public void setHeight(int height) {
		this.height = height;
	}
	
	public int getHeight() {
		return this.height;
	}
	
	
	
	
	
	
}