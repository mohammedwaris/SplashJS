package splashjs.sdk;

import netscape.javascript.JSObject;

import javafx.stage.*;
import javafx.scene.*;
import javafx.scene.web.*;
import javafx.scene.control.TextArea;

import splashjs.sdk.iface.*;

public class ConsoleWindow extends Stage implements IConsoleWindow {
	
	private TextArea textArea;
	private String js = "";
	private WebView webView;
	private WebEngine webEngine;
	
	public ConsoleWindow(Stage parentStage) {
		this.webView = new javafx.scene.web.WebView();
		this.webEngine = this.webView.getEngine();
		this.webEngine.loadContent(getHTMLText(), "text/html");
		ConsoleWindow self = this;
		this.webEngine.getLoadWorker().stateProperty().addListener(new javafx.beans.value.ChangeListener() {
			@Override
			public void changed(javafx.beans.value.ObservableValue observable, Object oldValue, Object newValue)  {
				if (newValue == javafx.concurrent.Worker.State.SUCCEEDED) {		
					//JSObject window = (JSObject)webEngine.executeScript("window");
					//window.setMember("console", self);
						
				}
			}
		});
		
		
		
		textArea = new TextArea();
		textArea.setEditable(false);
		setScene(new Scene(this.webView, 300, 150));
		setTitle("Console");
		initStyle(StageStyle.UTILITY);
		initOwner(parentStage);
	}

	public void printError(String text) {
		js  = "var p = document.createElement(\"p\");";
		js += "p.innerText = '" + text + "';";
		js += "p.style.color = \"red\";";
		js += "document.body.appendChild(p);";
		this.webEngine.executeScript(js);
	}
	
	public void printWarning(String text) {
		js  = "var p = document.createElement(\"p\");";
		js += "p.innerText = '" + text + "';";
		js += "p.style.color = \"yellow\";";
		js += "document.body.appendChild(p);";
		this.webEngine.executeScript(js);
	}
	
	public void printLog(String text) {
		js  = "var p = document.createElement(\"p\");";
		js += "p.innerText = '" + text + "';";
		js += "p.style.color = \"black\";";
		js += "document.body.appendChild(p);";
		this.webEngine.executeScript(js);
	}
	
	public void printText(String text) {
		printLog(text);
	}
	
	private String getHTMLText() {
		String ENDLINE_CHAR = "\r\n";
		
		String scriptText  = "";
		String styleText  = "<style>";
			   styleText += "html {";
			   styleText += "width: 100%;";
			   styleText += "height: 100%;";
			   styleText += "}";
			   styleText += "body {";
			   styleText += "width:100%;";
			   styleText += "height: 100%;";
			   styleText += "margin: 0;";
			   styleText += "padding: 0;";
			   styleText += "overflow: hidden;";
			   styleText += "border: 0px solid red;";
			   styleText += "}";
			   styleText += "p {";
			   styleText += "margin: 0;";
			   styleText += "padding: 0;";
			   styleText += "}";
			   styleText += "</style>";
		
		String htmlText  = "<!Doctype html>" + ENDLINE_CHAR;
			   htmlText += "<head>" + ENDLINE_CHAR;
			   htmlText += "<base href=\"" + "" + "\">";
			   htmlText += styleText;
			   htmlText += "</head>" + ENDLINE_CHAR;
			   htmlText += "<body>" + ENDLINE_CHAR;
			   //htmlText += "<div id=\"splashDiv\"></div>";
			    htmlText += scriptText;
			   htmlText += "</body>" + ENDLINE_CHAR;
			   htmlText += "</html>" + ENDLINE_CHAR;
			   
		return htmlText;
	}



}