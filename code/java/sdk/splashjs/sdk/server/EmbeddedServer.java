package splashjs.sdk.server;

import org.eclipse.jetty.server.*;
import org.eclipse.jetty.server.handler.*;
import org.eclipse.jetty.server.nio.*;
import org.eclipse.jetty.util.resource.*;

import java.io.*;

public class EmbeddedServer {

	Server server;
	
	public EmbeddedServer(String path) {
		server = new Server();
		ServerConnector connector = new ServerConnector(server);
        connector.setPort(8090);
        server.setConnectors(new Connector[] {connector});

		ResourceHandler resource_handler = new ResourceHandler();
		resource_handler.setDirectoriesListed(false);
		//resource_handler.setWelcomeFiles(new String[]{"splashjs.wf"});

		//System.out.println(Resource.newResource(getClass().getClassLoader().getResource("index.html")));
		
		resource_handler.setResourceBase(path);
		//resource_handler.setBaseResource(Resource.newResource(getClass().getClassLoader().getResource("index.html")));

		HandlerList handlers = new HandlerList();
		handlers.setHandlers(new Handler[] { resource_handler, new DefaultHandler() });
		
		server.setHandler(handlers);
	}

	public void start() {
		try{
		server.start();
		//server.join();
		}catch(Exception e) {
		}
	
	}
	
	public void stop() {
		try{
		server.stop();
		}catch(Exception e){}
	}

}