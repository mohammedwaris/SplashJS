/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IURLVariable } from './iface/IURLVariable';
import { URLVariableRenderer } from '../render/net/URLVariableRenderer';

export class URLVariable implements IURLVariable {
    /*private*/ name : string = "";

    /*private*/ value : string = "";

    public constructor(name : string, value : string) {
        this.name = name;
        this.value = value;
    }

    public getName() : string {
        return this.name;
    }

    public getValue() : string {
        return this.value;
    }

    public getEncodedValue() : string {
        return URLVariable.getEncodedString(this.value);
    }

    public static getEncodedString(str : string) : string {
        return URLVariableRenderer.getEncodedString(str);
    }

    public static encode(...urlVariables : IURLVariable[]) : string {
        return URLVariableRenderer.encode.apply(null, urlVariables);
    }

    public static decode(encodedString : string) : Array<IURLVariable> {
        return URLVariableRenderer.decode(encodedString);
    }
}
URLVariable["__class"] = "splashjs.net.URLVariable";
URLVariable["__interfaces"] = ["splashjs.net.iface.IURLVariable"];




