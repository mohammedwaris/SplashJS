/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IPermissionEvent } from './iface/IPermissionEvent';
import { PermissionStatus } from '../permissions/PermissionStatus';
import { IEventDispatcher } from './iface/IEventDispatcher';
import { Event } from './Event';

export class PermissionEvent extends Event implements IPermissionEvent {
    public static PERMISSION_STATUS : string = "permission_status";

    /*private*/ status : string;

    public constructor(type? : any, target? : any, currentTarget? : any) {
        if(((typeof type === 'string') || type === null) && ((target != null && (target["__interfaces"] != null && target["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || target.constructor != null && target.constructor["__interfaces"] != null && target.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || target === null) && ((currentTarget != null && (currentTarget["__interfaces"] != null && currentTarget["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || currentTarget.constructor != null && currentTarget.constructor["__interfaces"] != null && currentTarget.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || currentTarget === null)) {
            let __args = arguments;
            super(type, target, currentTarget);
            this.status = PermissionStatus.UNKNOWN;
        } else if(((typeof type === 'string') || type === null) && target === undefined && currentTarget === undefined) {
            let __args = arguments;
            super(type);
            this.status = PermissionStatus.UNKNOWN;
        } else throw new Error('invalid overload');
    }

    public getStatus() : string {
        return this.status;
    }

    public setStatus(status : string) {
        this.status = status;
    }
}
PermissionEvent["__class"] = "splashjs.events.PermissionEvent";
PermissionEvent["__interfaces"] = ["splashjs.events.iface.IEvent","splashjs.events.iface.IPermissionEvent"];




