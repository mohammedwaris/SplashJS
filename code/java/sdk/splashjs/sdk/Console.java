package splashjs.sdk;

import splashjs.sdk.iface.IConsole;
import splashjs.sdk.iface.IConsoleWindow;

public class Console implements IConsole {
	
	private IConsoleWindow consoleWindow;
	
	public Console(IConsoleWindow consoleWindow) {
		this.consoleWindow = consoleWindow;
	}

	public void error(String text) {
			consoleWindow.printError(text);
	}
	
	public void warning(String text) {
		consoleWindow.printWarning(text);
	}
	
	public void log(String text) {
		consoleWindow.printLog(text);
	}



}