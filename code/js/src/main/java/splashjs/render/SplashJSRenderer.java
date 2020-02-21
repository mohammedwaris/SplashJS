package splashjs.render;

import static def.dom.Globals.window;
import static def.dom.Globals.document;
import def.dom.HTMLInputElement;
import def.dom.HTMLFormElement;
import def.dom.Window;

import java.util.ArrayList;

import splashjs.net.iface.IURLRequest;
import splashjs.net.URLRequestMethod;
import splashjs.net.URLVariable;
import splashjs.net.iface.IURLVariable;

public class SplashJSRenderer {

	public static void navigateToURL(IURLRequest urlRequest) {
		
		String url = urlRequest.getURL();
		String method = urlRequest.getMethod();
		Object data = urlRequest.getData();
		
		
		String toURL = url; 
		if(method.equalsIgnoreCase(URLRequestMethod.GET)) {
			if(data != null) 
				toURL += "?" + (String)data;
			window.open(toURL, "_blank");
		}else if(method.equalsIgnoreCase(URLRequestMethod.POST)) {
			HTMLFormElement formElement = (HTMLFormElement) document.createElement("form");
			formElement.method = "POST";
			formElement.action = url;
			formElement.id = "newForm";
			formElement.enctype = "application/x-www-form-urlencoded"; //multipart/form-data;
			formElement.encoding = "application/x-www-form-urlencoded";
			if(data != null) {
				ArrayList<IURLVariable> urlVariables = URLVariable.decode((String)data);
				for(int i=0;i<urlVariables.size();i++) {
					IURLVariable urlVariable = urlVariables.get(i);
					HTMLInputElement inputElement = (HTMLInputElement)document.createElement("input");
					inputElement.setAttribute("type", "hidden");
					inputElement.setAttribute("name", urlVariable.getName());
					inputElement.setAttribute("value", urlVariable.getValue());
					formElement.appendChild(inputElement);
				}
			}
			formElement.target = "newWindow";
			Window newWindow = (Window) window.open("", "newWindow"); // "location=yes,width=400,height=400");
			newWindow.document.body.appendChild(formElement);
			formElement.submit();
		}
		
		System.out.println(toURL);
		
	}

}