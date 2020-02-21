/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IURLVariable } from '../../net/iface/IURLVariable';
import { URLVariable } from '../../net/URLVariable';

export class URLVariableRenderer {
    public static encode(...urlVariables : IURLVariable[]) : string {
        let encodedString : string = "";
        for(let i : number = 0; i < urlVariables.length; i++) {{
            let urlVariable : IURLVariable = urlVariables[i];
            encodedString += urlVariable.getName() + "=" + encodeURIComponent(urlVariable.getValue());
            if(i < urlVariables.length - 1) encodedString += "&";
        };}
        return encodedString;
    }

    public static decode(encodedString : string) : Array<IURLVariable> {
        let urlVariables : Array<IURLVariable> = <any>([]);
        let decodedString : string = decodeURI(encodedString);
        let variables : string[] = decodedString.split("&");
        for(let i : number = 0; i < variables.length; i++) {{
            let variable : string = variables[i];
            let nameValue : string[] = variable.split("=");
            let urlVariable : IURLVariable = new URLVariable(nameValue[0], decodeURIComponent(nameValue[1]));
            /* add */(urlVariables.push(urlVariable)>0);
        };}
        return urlVariables;
    }

    public static getEncodedString(str : string) : string {
        return encodeURIComponent(str);
    }
}
URLVariableRenderer["__class"] = "splashjs.render.net.URLVariableRenderer";



