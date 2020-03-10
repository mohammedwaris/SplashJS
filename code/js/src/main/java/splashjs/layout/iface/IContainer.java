package splashjs.layout.iface;


import splashjs.display.iface.IDisplayObject;

public interface IContainer extends IDisplayObject {

	public IDisplayObject getTheOnlyMember();
		
}