/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IURLRequestHeader } from './iface/IURLRequestHeader';

export class URLRequestHeader implements IURLRequestHeader {
    /*private*/ name : string = "";

    /*private*/ value : string = "";

    public constructor(name : string, value : string) {
        this.name = name;
        this.value = value;
    }

    public setName(name : string) {
        this.name = name;
    }

    public getName() : string {
        return this.name;
    }

    public setValue(value : string) {
        this.value = value;
    }

    public getValue() : string {
        return this.value;
    }
}
URLRequestHeader["__class"] = "splashjs.net.URLRequestHeader";
URLRequestHeader["__interfaces"] = ["splashjs.net.iface.IURLRequestHeader"];




