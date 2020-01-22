package splashjs.lang;

import splashjs.lang.iface.IEOFError;

public class EOFError extends IOError implements IEOFError {

	public EOFError(String message) {
		super(message);
		super.name = this.getClass().getName();
	}
}