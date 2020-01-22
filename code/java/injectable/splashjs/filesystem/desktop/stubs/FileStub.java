package splashjs.filesystem.desktop.stubs;

import netscape.javascript.JSObject;
import java.io.*;

public class FileStub {

	private String path;
	private java.io.File javaFile;
	
	public FileStub() {
		
	}
	
	public FileStub(String path) {
		this.path = path;
		this.javaFile = new java.io.File(path);
	}
	
	public void browseForDirectory(String title) {
		browseForDirectory(title, null);
	}
	
	public void browseForDirectory(Object stage) {
		browseForDirectory(null, stage);
	}
	
	public void browseForDirectory() {
		browseForDirectory(null, null);
	}		
	
	public void browseForDirectory(String title, Object stage) {
		
		FileStub self = this;
		javafx.application.Platform.runLater(new Runnable() {
			public void run() {
				javafx.stage.DirectoryChooser directoryChooser = new javafx.stage.DirectoryChooser();
				directoryChooser.setTitle(title);
				java.io.File jFile = directoryChooser.showDialog(null);
				/*javafx.stage.Window window = null;
				if(stage != null)
					window = ((IDesktopStageOwner)stage.getStageOwner()).getNativeWindow();
				
				if(jFile == null) {
					IEvent cancelEvent = new Event(EventName.CANCEL, null, self);
					dispatchEvent(cancelEvent);
				}else{
					File selectedDir = File.createSplashFileObjectFromJavaFileObject(jFile);
					IEvent selectEvent = new Event(EventName.SELECT, selectedDir, self);
					dispatchEvent(selectEvent);
				}*/
			}
		});
	}
	/*
	public void deleteFile() throws IOError, SecurityError {
		
		try {
			if(!exists()) {
				throw new NoSuchFileError();
			}
			if(!javaFile.isDirectory()) {
				java.nio.file.Path path = javaFile.toPath();
				java.nio.file.Files.delete(path);
			}
		}catch(java.io.IOException e) {
			throw new IOError(e.getMessage());
		}catch(java.lang.SecurityException e) {
			throw new SecurityError(e.getMessage());
		}
	}
	
	public void deleteFileAsync() {
		javafx.application.Platform.runLater(new Runnable() {
			public void run() {
				javaFile.delete();
			}
		});
	}
	
	public String getNativePath() {
		return javaFile.getPath();
	}
	
	public boolean isDirectory() {
		return javaFile.isDirectory();
	}
	
	public boolean exists() {
		return javaFile.exists();
	}
	
	public File getParent() {
		File parent = new File(javaFile.getParent());
		return parent;
	}
	
	public static String getSeparator() {
		return java.io.File.separator;
	}
	
	public void createDirectory() {
		javaFile.mkdirs();
	}
	
	public static File createTempFile() {
		java.nio.file.Path path = null;
		File file = null;
		try {
			path = java.nio.file.Files.createTempFile("SplashJS", "TempFile");
			file = File.createSplashFileObjectFromJavaPathObject(path);
		}catch(Exception e) {
		}
		return file;
	}
	
	private static File createSplashFileObjectFromJavaPathObject(java.nio.file.Path path) {
		return new File(path.toFile().getPath());
	}
	
	private static File createSplashFileObjectFromJavaFileObject(java.io.File jFile) {
		return new File(jFile.getPath());
	}*/
}