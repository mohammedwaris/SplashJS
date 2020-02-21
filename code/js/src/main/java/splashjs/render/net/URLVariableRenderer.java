package splashjs.render.net;

import static def.js.Globals.encodeURI;
import static def.js.Globals.encodeURIComponent;
import static def.js.Globals.decodeURI;
import static def.js.Globals.decodeURIComponent;

import java.util.ArrayList;


import splashjs.net.iface.IURLVariable;
import splashjs.net.URLVariable;

public class URLVariableRenderer {

	
	
	public static String encode(IURLVariable...urlVariables) {
		String encodedString = "";
		for(int i=0;i<urlVariables.length;i++){
			IURLVariable urlVariable = urlVariables[i];
			encodedString += urlVariable.getName() + "=" + encodeURIComponent(urlVariable.getValue());
			if(i < urlVariables.length - 1)
				encodedString += "&";
		}
		return encodedString;
	}
	
	public static ArrayList<IURLVariable> decode(String encodedString) {
		ArrayList<IURLVariable> urlVariables = new ArrayList<IURLVariable>();
		String decodedString = decodeURI(encodedString);
		String[] variables = decodedString.split("&");
		for(int i=0;i<variables.length;i++) {
			String variable = variables[i];
			String[] nameValue = variable.split("=");
			IURLVariable urlVariable = new URLVariable(nameValue[0], decodeURIComponent(nameValue[1]));
			urlVariables.add(urlVariable);
		}
		return urlVariables;
	}
	
	public static String getEncodedString(String str) {
		return encodeURIComponent(str);
	}

}