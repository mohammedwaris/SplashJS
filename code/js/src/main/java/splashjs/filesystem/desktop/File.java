package splashjs.filesystem;


import splashjs.filesystem.desktop.stubs.FileStub;

public class File { //extends EventDispatcher implements IFile {

	private  FileStub fileStub;
	private String path;
	
	public File() {
		this(null);
	}
	
	public File(String path) {
		this.path = path;
		fileStub = FileStub.newInstance();
	}
	
	public void browseForDirectory(String title) {
		fileStub.browseForDirectory(title, null);
	}
	
	//public void browseForDirectory(IStage stage);
	public void browseForDirectory(Object stage) {
		fileStub.browseForDirectory(null, stage);
	}
	
	public void browseForDirectory() {
		fileStub.browseForDirectory(null, null);
	}		
	
	//public void browseForDirectory(String title, IStage stage);
	public void browseForDirectory(String title, Object stage) {
		fileStub.browseForDirectory(title, stage);
	}
}