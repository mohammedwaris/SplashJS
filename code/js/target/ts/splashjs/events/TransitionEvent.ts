/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ITransitionEvent } from './iface/ITransitionEvent';
import { IEventDispatcher } from './iface/IEventDispatcher';
import { Event } from './Event';

export class TransitionEvent extends Event implements ITransitionEvent {
    public static DELAY_COMPLETE : string = "delay_complete";

    public static COMPLETE : string = "complete";

    public static DURATION_COMPLETE : string = "duration_complete";

    public static LOOP_INTERVAL_COMPLETE : string = "loop_interval_complete";

    public constructor(type? : any, e1? : any, e2? : any) {
        if(((typeof type === 'string') || type === null) && ((e1 != null && (e1["__interfaces"] != null && e1["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || e1.constructor != null && e1.constructor["__interfaces"] != null && e1.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || e1 === null) && ((e2 != null && (e2["__interfaces"] != null && e2["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || e2.constructor != null && e2.constructor["__interfaces"] != null && e2.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || e2 === null)) {
            let __args = arguments;
            super(type, e1, e2);
        } else if(((typeof type === 'string') || type === null) && e1 === undefined && e2 === undefined) {
            let __args = arguments;
            super(type);
        } else throw new Error('invalid overload');
    }
}
TransitionEvent["__class"] = "splashjs.events.TransitionEvent";
TransitionEvent["__interfaces"] = ["splashjs.events.iface.IEvent","splashjs.events.iface.ITransitionEvent"];




