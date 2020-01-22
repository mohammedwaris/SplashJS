/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IIOError } from './iface/IIOError';
import { SplashError } from './SplashError';

export class IOError extends SplashError implements IIOError {
    public constructor(message : string) {
        super(message);
        (<any>Object).setPrototypeOf(this, IOError.prototype);
        this.name = /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor));
    }
}
IOError["__class"] = "splashjs.lang.IOError";
IOError["__interfaces"] = ["splashjs.lang.iface.ISplashError","splashjs.lang.iface.IIOError","java.io.Serializable"];




