/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ISecurityError } from './iface/ISecurityError';
import { SplashError } from './SplashError';

export class SecurityError extends SplashError implements ISecurityError {
    public constructor(message : string) {
        super(message);
        (<any>Object).setPrototypeOf(this, SecurityError.prototype);
        this.name = /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor));
    }
}
SecurityError["__class"] = "splashjs.lang.SecurityError";
SecurityError["__interfaces"] = ["splashjs.lang.iface.ISplashError","splashjs.lang.iface.ISecurityError","java.io.Serializable"];




