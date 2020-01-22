/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { FileSystemError } from './FileSystemError';

export class NoSuchFileError extends FileSystemError {
    public constructor(message? : any) {
        if(((typeof message === 'string') || message === null)) {
            let __args = arguments;
            super(message);
            (<any>Object).setPrototypeOf(this, NoSuchFileError.prototype);
        } else if(message === undefined) {
            let __args = arguments;
            super("No such file");
            (<any>Object).setPrototypeOf(this, NoSuchFileError.prototype);
        } else throw new Error('invalid overload');
    }
}
NoSuchFileError["__class"] = "splashjs.lang.NoSuchFileError";
NoSuchFileError["__interfaces"] = ["splashjs.lang.iface.ISplashError","splashjs.lang.iface.IIOError","java.io.Serializable"];




