/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEvent } from './iface/IEvent';
import { IEventDispatcher } from './iface/IEventDispatcher';

export class Event implements IEvent {
    public static ONLINE : string = "online";

    public static OFFLINE : string = "offline";

    public static LOADED : string = "loaded";

    public static ADDED_TO_STAGE : string = "added_to_stage";

    public static REMOVED_FROM_STAGE : string = "removed_from_stage";

    public static ADDED : string = "added";

    public static REMOVED : string = "removed";

    public static ENTER_FRAME : string = "enter_frame";

    public static EXIT_FRAME : string = "exit_frame";

    public static SELECT : string = "select";

    public static CANCEL : string = "cancel";

    public static COMPLETE : string = "complete";

    public static RESIZE : string = "resize";

    /*private*/ type : string;

    /*private*/ target : IEventDispatcher;

    /*private*/ currentTarget : IEventDispatcher;

    /*private*/ data : any;

    /*private*/ altKey : boolean;

    public constructor(type? : any, target? : any, currentTarget? : any) {
        if(((typeof type === 'string') || type === null) && ((target != null && (target["__interfaces"] != null && target["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || target.constructor != null && target.constructor["__interfaces"] != null && target.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || target === null) && ((currentTarget != null && (currentTarget["__interfaces"] != null && currentTarget["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || currentTarget.constructor != null && currentTarget.constructor["__interfaces"] != null && currentTarget.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || currentTarget === null)) {
            let __args = arguments;
            if(this.type===undefined) this.type = null;
            if(this.target===undefined) this.target = null;
            if(this.currentTarget===undefined) this.currentTarget = null;
            if(this.data===undefined) this.data = null;
            if(this.altKey===undefined) this.altKey = false;
            if(this.type===undefined) this.type = null;
            if(this.target===undefined) this.target = null;
            if(this.currentTarget===undefined) this.currentTarget = null;
            if(this.data===undefined) this.data = null;
            if(this.altKey===undefined) this.altKey = false;
            (() => {
                this.type = type;
                this.target = target;
                this.currentTarget = currentTarget;
            })();
        } else if(((typeof type === 'string') || type === null) && target === undefined && currentTarget === undefined) {
            let __args = arguments;
            if(this.type===undefined) this.type = null;
            if(this.target===undefined) this.target = null;
            if(this.currentTarget===undefined) this.currentTarget = null;
            if(this.data===undefined) this.data = null;
            if(this.altKey===undefined) this.altKey = false;
            if(this.type===undefined) this.type = null;
            if(this.target===undefined) this.target = null;
            if(this.currentTarget===undefined) this.currentTarget = null;
            if(this.data===undefined) this.data = null;
            if(this.altKey===undefined) this.altKey = false;
            (() => {
                this.type = type;
            })();
        } else throw new Error('invalid overload');
    }

    public getType() : string {
        return this.type;
    }

    public setTarget(target : IEventDispatcher) {
        this.target = target;
    }

    public getTarget() : IEventDispatcher {
        return this.target;
    }

    public setCurrentTarget(currentTarget : IEventDispatcher) {
        this.currentTarget = currentTarget;
    }

    public getCurrentTarget() : IEventDispatcher {
        return this.currentTarget;
    }

    public setData(data : any) {
        this.data = data;
    }

    public getData() : any {
        return this.data;
    }

    public toString() : string {
        let info : string = "[object " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor)) + "]";
        return info;
    }
}
Event["__class"] = "splashjs.events.Event";
Event["__interfaces"] = ["splashjs.events.iface.IEvent"];




