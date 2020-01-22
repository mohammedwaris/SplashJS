package splashjs.lang;

import splashjs.lang.iface.IRangeError;

public class RangeError extends SplashError implements IRangeError {

	public RangeError(String message) {
		super(message);
		super.name = this.getClass().getName();
	}
}