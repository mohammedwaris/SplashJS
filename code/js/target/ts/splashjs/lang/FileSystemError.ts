/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IOError } from './IOError';

export class FileSystemError extends IOError {
    public constructor(message : string) {
        super(message);
        (<any>Object).setPrototypeOf(this, FileSystemError.prototype);
    }
}
FileSystemError["__class"] = "splashjs.lang.FileSystemError";
FileSystemError["__interfaces"] = ["splashjs.lang.iface.ISplashError","splashjs.lang.iface.IIOError","java.io.Serializable"];




