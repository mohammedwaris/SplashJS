/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEOFError } from './iface/IEOFError';
import { IOError } from './IOError';

export class EOFError extends IOError implements IEOFError {
    public constructor(message : string) {
        super(message);
        (<any>Object).setPrototypeOf(this, EOFError.prototype);
        this.name = /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor));
    }
}
EOFError["__class"] = "splashjs.lang.EOFError";
EOFError["__interfaces"] = ["splashjs.lang.iface.IEOFError","splashjs.lang.iface.ISplashError","splashjs.lang.iface.IIOError","java.io.Serializable"];




