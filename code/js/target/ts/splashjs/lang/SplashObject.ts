/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ISplashObject } from './iface/ISplashObject';

export class SplashObject implements ISplashObject {
    public toString() : string {
        let value : string = "[instance of " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor)) + "]";
        return value;
    }

    constructor() {
    }
}
SplashObject["__class"] = "splashjs.lang.SplashObject";
SplashObject["__interfaces"] = ["splashjs.lang.iface.ISplashObject"];




