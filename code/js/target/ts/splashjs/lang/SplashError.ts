/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ISplashError } from './iface/ISplashError';

export abstract class SplashError extends Error implements ISplashError {
    /*private*/ errorID : number;

    /*private*/ message : string;

    name : string;

    public constructor(message? : any, errorID? : any) {
        if(((typeof message === 'string') || message === null) && ((typeof errorID === 'number') || errorID === null)) {
            let __args = arguments;
            super();
            if(this.errorID===undefined) this.errorID = 0;
            if(this.message===undefined) this.message = null;
            if(this.name===undefined) this.name = null;
            (<any>Object).setPrototypeOf(this, SplashError.prototype);
            if(this.errorID===undefined) this.errorID = 0;
            if(this.message===undefined) this.message = null;
            if(this.name===undefined) this.name = null;
            (() => {
                this.message = message;
                this.errorID = errorID;
                this.name = /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor));
            })();
        } else if(((typeof message === 'string') || message === null) && errorID === undefined) {
            let __args = arguments;
            super();
            if(this.errorID===undefined) this.errorID = 0;
            if(this.message===undefined) this.message = null;
            if(this.name===undefined) this.name = null;
            (<any>Object).setPrototypeOf(this, SplashError.prototype);
            if(this.errorID===undefined) this.errorID = 0;
            if(this.message===undefined) this.message = null;
            if(this.name===undefined) this.name = null;
            (() => {
                this.message = message;
                this.name = /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor));
            })();
        } else throw new Error('invalid overload');
    }

    public getErrorID() : number {
        return this.errorID;
    }

    public getMessage() : string {
        return this.message;
    }

    public getName() : string {
        return this.name;
    }
}
SplashError["__class"] = "splashjs.lang.SplashError";
SplashError["__interfaces"] = ["splashjs.lang.iface.ISplashError","java.io.Serializable"];




