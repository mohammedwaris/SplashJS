package splashjs.application.base;

import java.util.ArrayList;

import splashjs.display.*;
import splashjs.display.iface.*;
import splashjs.render.*;
import splashjs.events.*;
import splashjs.events.iface.*;
import splashjs.application.*;
import splashjs.application.iface.*;


public abstract class BaseApplication extends EventDispatcher implements IApplication {
	
	private ArrayList<IStageOwner> stageOwners = new ArrayList<IStageOwner>();

	private ArrayList<IDisplayObject> displayObjects = new ArrayList<IDisplayObject>();
	
	
	
	public BaseApplication(String id) {
		super(id);
	}
	
	
	
	public ArrayList<IStageOwner> getStageOwners() {
		return this.stageOwners;
	}
	
	public void addStageOwner(IStageOwner stageOwner) {
		this.stageOwners.add(stageOwner);
	}
	
	public void removeStageOwner(IStageOwner stageOwner) {
		this.stageOwners.remove(stageOwner);
	}
	
}// end of class