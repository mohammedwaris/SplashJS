package splashjs.application.iface;



import splashjs.events.iface.IEventDispatcher;


public interface IApplication extends IEventDispatcher {
	
	//public void addStageOwner(IStageOwner stageOwner);
	//public void removeStageOwner(IStageOwner stageOwner);
	//public IStage createStage(String stageOwnerName, int width, int height);
	
	//public ArrayList<IStageOwner> getStageOwners();
	

	
	public boolean isOnline();
	
	
}