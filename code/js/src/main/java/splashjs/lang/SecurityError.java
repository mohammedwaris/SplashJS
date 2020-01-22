package splashjs.lang;

import splashjs.lang.iface.ISecurityError;

public class SecurityError extends SplashError implements ISecurityError {

	public SecurityError(String message) {
		super(message);
		super.name = this.getClass().getName();
	}
}