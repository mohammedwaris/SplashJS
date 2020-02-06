package splashjs.sdk.server;

import java.io.*;
import java.util.*;

import org.nanohttpd.protocols.http.*;
import org.nanohttpd.protocols.http.response.*;
import org.nanohttpd.webserver.SimpleWebServer;
import org.nanohttpd.util.*;

public class SplashJSWebServer extends SimpleWebServer {

	private String path;
	private NanoHTTPD httpd;
	private int localPort = -1;
	
	public SplashJSWebServer(String path)  {
		super("", 0, new File(path), true);
		this.path = path;
	}
	
	public int startServer() {
		this.localPort = ServerRunner.executeInstance(this);
		return this.localPort;
	}
	
	public int getLocalPort() {
		return this.localPort;
	}
	
	public void stopServer() {
		super.stop();
	}
	
	@Override
    public Response serve(IHTTPSession session) {
		return super.serve(session);
		//return Response.newFixedLengthResponse(Status.OK, NanoHTTPD.MIME_HTML, "<!Doctype html><html><head></head><body></body></html>");
	}
	
	/*
	public static void main(String args[]) throws IOException {
		new SplashJSWebServer();
	}*/
}