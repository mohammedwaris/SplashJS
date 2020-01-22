package splashjs.text.iface;

import splashjs.events.iface.IEventDispatcher;

public interface IFont extends IEventDispatcher {
	
	public String getFontID();
	public IFontPath getFontPath();

}