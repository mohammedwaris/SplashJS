/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IRangeError } from './iface/IRangeError';
import { SplashError } from './SplashError';

export class RangeError extends SplashError implements IRangeError {
    public constructor(message : string) {
        super(message);
        (<any>Object).setPrototypeOf(this, RangeError.prototype);
        this.name = /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor));
    }
}
RangeError["__class"] = "splashjs.lang.RangeError";
RangeError["__interfaces"] = ["splashjs.lang.iface.ISplashError","splashjs.lang.iface.IRangeError","java.io.Serializable"];




