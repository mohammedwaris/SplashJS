package splashjs.lang;

import splashjs.lang.iface.IIOError;

public class IOError extends SplashError implements IIOError {

	public IOError(String message) {
		super(message);
		super.name = this.getClass().getName();
	}
}