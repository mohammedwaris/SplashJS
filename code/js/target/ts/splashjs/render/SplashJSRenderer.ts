/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IURLRequest } from '../net/iface/IURLRequest';
import { URLRequestMethod } from '../net/URLRequestMethod';
import { URLVariable } from '../net/URLVariable';
import { IURLVariable } from '../net/iface/IURLVariable';

export class SplashJSRenderer {
    public static navigateToURL(urlRequest : IURLRequest) {
        let url : string = urlRequest.getURL();
        let method : string = urlRequest.getMethod();
        let data : any = urlRequest.getData();
        let toURL : string = url;
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(method, URLRequestMethod.GET)) {
            if(data != null) toURL += "?" + <string>data;
            window.open(toURL, "_blank");
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(method, URLRequestMethod.POST)) {
            let formElement : HTMLFormElement = <HTMLFormElement>document.createElement("form");
            formElement.method = "POST";
            formElement.action = url;
            formElement.id = "newForm";
            formElement.enctype = "application/x-www-form-urlencoded";
            formElement.encoding = "application/x-www-form-urlencoded";
            if(data != null) {
                let urlVariables : Array<IURLVariable> = URLVariable.decode(<string>data);
                for(let i : number = 0; i < /* size */(<number>urlVariables.length); i++) {{
                    let urlVariable : IURLVariable = /* get */urlVariables[i];
                    let inputElement : HTMLInputElement = <HTMLInputElement>document.createElement("input");
                    inputElement.setAttribute("type", "hidden");
                    inputElement.setAttribute("name", urlVariable.getName());
                    inputElement.setAttribute("value", urlVariable.getValue());
                    formElement.appendChild(inputElement);
                };}
            }
            formElement.target = "newWindow";
            let newWindow : Window = <Window>window.open("", "newWindow");
            newWindow.document.body.appendChild(formElement);
            formElement.submit();
        }
        console.info(toURL);
    }
}
SplashJSRenderer["__class"] = "splashjs.render.SplashJSRenderer";



