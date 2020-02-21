/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from './iface/IEventDispatcher';
import { Event } from './Event';

export class TimerEvent extends Event {
    public static TIMER : string = "timer";

    public static TIMER_COMPLETE : string = "timer_complete";

    public constructor(type : string, target : IEventDispatcher, currentTarget : IEventDispatcher) {
        super(type, target, currentTarget);
    }
}
TimerEvent["__class"] = "splashjs.events.TimerEvent";
TimerEvent["__interfaces"] = ["splashjs.events.iface.IEvent"];




