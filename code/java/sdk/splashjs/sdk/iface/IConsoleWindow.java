package splashjs.sdk.iface;

public interface IConsoleWindow {
	
	public void showAndWait();
	public void show();
	public void printText(String text);
	public void printError(String text);
	public void printWarning(String text);
	public void printLog(String text);

}