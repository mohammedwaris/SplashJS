package splashjs.sdk;

import static java.nio.file.StandardCopyOption.*;
import java.nio.*;
import java.nio.file.*;
import java.io.*;

public class DesktopBuildAndRun {
	
	AppJSON appJSON;
	Message message = new Message();

	public void build() {
		checkAndCreateDirectoryForDesktopPlatform();
		copyJSFolder();
		copyImagesFolder();
		copyVideosFolder();
		copySoundsFolder();
		copyMainJSFile();
	}
	
	private void checkAndCreateDirectoryForDesktopPlatform() {
		File platformsDir = new File("platforms");
		File desktopDir = null;
		File jsDir = null;
		File imagesDir = null;
		File soundsDir = null;
		File videosDir = null;
		if(!platformsDir.exists() || !platformsDir.isDirectory()) {
			platformsDir.mkdir();
			desktopDir = new File("platforms" + File.separator + "desktop");
			desktopDir.mkdir();
			jsDir = new File("platforms" + File.separator + "desktop" + File.separator + "js");
			jsDir.mkdir();
			imagesDir = new File("platforms" + File.separator + "desktop" + File.separator + "images");
			imagesDir.mkdir();
			soundsDir = new File("platforms" + File.separator + "desktop" + File.separator + "sounds");
			soundsDir.mkdir();
			videosDir = new File("platforms" + File.separator + "desktop" + File.separator + "videosDir");
			videosDir.mkdir();
		}else {
			desktopDir = new File("platforms" + File.separator + "desktop");
			if(!desktopDir.exists() || !desktopDir.isDirectory()) {
				desktopDir.mkdir();
				jsDir = new File("platforms" + File.separator + "desktop" + File.separator + "js");
				jsDir.mkdir();
				imagesDir = new File("platforms" + File.separator + "desktop" + File.separator + "images");
				imagesDir.mkdir();
				soundsDir = new File("platforms" + File.separator + "desktop" + File.separator + "sounds");
				soundsDir.mkdir();
				videosDir = new File("platforms" + File.separator + "desktop" + File.separator + "videosDir");
				videosDir.mkdir();
			}else{
				for(File f: desktopDir.listFiles())
					deleteFolder(f);
				jsDir = new File("platforms" + File.separator + "desktop" + File.separator + "js");
				jsDir.mkdir();
				imagesDir = new File("platforms" + File.separator + "desktop" + File.separator + "images");
				imagesDir.mkdir();
				soundsDir = new File("platforms" + File.separator + "desktop" + File.separator + "sounds");
				soundsDir.mkdir();
				videosDir = new File("platforms" + File.separator + "desktop" + File.separator + "videosDir");
				videosDir.mkdir();
			}
		}
	}
	
	private void copyJSFolder() {
		File source = new File("js");
		File dest;
		if(source.exists() && source.isDirectory()) {
			dest = new File("platforms" + File.separator + "desktop" + File.separator + "js");
			copyFolder(source.toPath(), dest.toPath());
		}
	}
	
	private void copyImagesFolder() {
		File source = new File("images");
		File dest;
		if(source.exists() && source.isDirectory()) {
			dest = new File("platforms" + File.separator + "desktop" + File.separator + "images");
			copyFolder(source.toPath(), dest.toPath());
		}
	}
	
	private void copySoundsFolder() {
		File source = new File("sounds");
		File dest;
		if(source.exists() && source.isDirectory()) {
			dest = new File("platforms" + File.separator + "desktop" + File.separator + "sounds");
			copyFolder(source.toPath(), dest.toPath());
		}
	}
	
	private void copyVideosFolder() {
		File source = new File("videos");
		File dest;
		if(source.exists() && source.isDirectory()) {
			dest = new File("platforms" + File.separator + "desktop" + File.separator + "videos");
			copyFolder(source.toPath(), dest.toPath());
		}
	}
	
	private void copyMainJSFile() {
		File copiedMainJSFile = new File("platforms" + File.separator + "desktop" + File.separator + AppJSON.getMainJS());
		File originalMainJSFile = new File(AppJSON.getMainJS());
		try {
			Files.copy(originalMainJSFile.toPath(), copiedMainJSFile.toPath(), StandardCopyOption.REPLACE_EXISTING);
		}catch(IOException e) {
			e.printStackTrace();
		}
	}
	
	private  void copyFolder(Path src, Path dest) {
		try {
			Files.walk(src)
				.forEach(source -> copy(source, dest.resolve(src.relativize(source))));
		}catch(IOException e) {
			e.printStackTrace();
		}
	}

	private void copy(Path source, Path dest) {
		try {
			Files.copy(source, dest, REPLACE_EXISTING);
		} catch (Exception e) {
			throw new RuntimeException(e.getMessage(), e);
		}
	}
	/*
	private void readAppJSONFile() {
		File file = new File(".");
		String fileName = "app.json";
		for(File f : file.listFiles()){
			if(f.getName().toLowerCase().endsWith("-conf.json")) {
				fileName = f.getName();
				break;
			}
		}
		message.print("Reading configuration file... " + fileName);
		appJSON = new AppJSON(fileName);
	}*/
	
	private void deleteFolder(File f) {
		try {
			if (f.isDirectory()) {
				for (File c : f.listFiles())
					deleteFolder(c);
			}
			if (!f.delete())
				throw new FileNotFoundException("Failed to delete file: " + f);
		}catch(IOException e) {
			e.printStackTrace();
		}
	}

}