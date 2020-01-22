package splashjs.filesystem.desktop.stubs;

import java.io.*;

public class FileStreamStub {
/*
	private java.io.RandomAccessFile randomAccessFile; 
	private java.io.File javaFile;

	public FileStreamStub() {
	}
	
	public void close() {
		if(randomAccessFile != null){
			try{
				randomAccessFile.close();
			}catch(java.io.IOException e){}
		}
		
	}
	
	public void open(IFile file, String fileMode) throws java.io.FileNotFoundException, java.io.IOException {
		if(fileMode.equalsIgnoreCase(FileMode.READ)) {
			javaFile = new java.io.File(file.getNativePath());
			randomAccessFile = new java.io.RandomAccessFile(javaFile, "r");
		}else if(fileMode.equalsIgnoreCase(FileMode.WRITE))	{
		}else if(fileMode.equalsIgnoreCase(FileMode.APPEND)) {
		}else if(fileMode.equalsIgnoreCase(FileMode.UPDATE)) {
		}
	}
	
	public void openAsync(IFile file, String fileMode) {
		javafx.application.Platform.runLater(new Runnable() {
			public void run()  {
				try {
					open(file, fileMode);
				}catch(java.io.FileNotFoundException e) {
					
				}catch(java.io.IOException e) {
					
				}
			}
		});
	}
	
	public boolean readBoolean() throws java.io.IOException {
		boolean value = randomAccessFile.readBoolean();
		return value;
	}
	
	public int readByte() throws java.io.IOException {
		byte value = randomAccessFile.readByte();
		return value;
	}
	
	public void readBytes(IByteArray byteArray, int offset, int length) throws java.io.IOException {
		byte bytes[] = new byte[length];
		randomAccessFile.read(bytes , offset, length);
		((IDesktopByteArray)byteArray).setBytes(bytes);
	}
	
	public double readDouble() throws java.io.IOException {
		double value = randomAccessFile.readDouble();
		return value;
	}
	
	public float readFloat() throws java.io.IOException {
		float value = randomAccessFile.readFloat();
		return value;
	}
	
	public int readInt() throws java.io.IOException {
		int value = randomAccessFile.readInt();
		return value;
	}
	
	*/

}