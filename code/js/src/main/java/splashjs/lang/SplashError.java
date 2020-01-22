package splashjs.lang;

import splashjs.lang.iface.ISplashError;

public abstract class SplashError extends java.lang.Exception implements ISplashError {
	
	private int errorID;
	private String message;
	protected String name;
	
	public SplashError(String message) {
		this.message = message;
		this.name = this.getClass().getName();
	}
	
	public SplashError(String message, int errorID) {
		this.message = message;
		this.errorID = errorID;
		this.name = this.getClass().getName();
	}
	
	public int getErrorID() {
		return this.errorID;
	}
	
	public String getMessage() {
		return this.message;
	}
	
	public String getName() {
		return this.name;
	}

}