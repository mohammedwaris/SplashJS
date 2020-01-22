package splashjs.lang;

public class NoSuchFileError extends FileSystemError {

	public NoSuchFileError(String message) {
		super(message);
	}
	
	public NoSuchFileError() {
		super("No such file");
	}
}