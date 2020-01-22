package splashjs.sdk;


import java.io.*;


public class Splash {
	
	public static void main(String args[]) {
		AppJSON.init("app-conf.json");
		String command = "";
		CommandExecutor ce = new CommandExecutor();
		if(args.length >= 2){
			command = args[0];
			if(command.equalsIgnoreCase("create")) {
				String appName = args[1];
				ce.executeCreateCommand(appName);
			}else if(command.equalsIgnoreCase("view")) {
				String platform = args[1];
				ce.executeViewCommand(platform);
			}else if(command.equalsIgnoreCase("run")) {
				String platform = args[1];
				ce.executeRunCommand(platform);
			}else if(command.equalsIgnoreCase("build")) {
				String platform = args[1];
				ce.executeBuildCommand(platform);
			}
		}else{
			System.out.println("Insufficient arguments");
		}
	}

}