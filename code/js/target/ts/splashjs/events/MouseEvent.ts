/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IMouseEvent } from './iface/IMouseEvent';
import { IEventDispatcher } from './iface/IEventDispatcher';
import { Event } from './Event';

export class MouseEvent extends Event implements IMouseEvent {
    public static CLICK : string = "click";

    public static DOUBLE_CLICK : string = "double_click";

    public static MOUSE_DOWN : string = "mouse_down";

    public static MOUSE_ENTER : string = "mouse_enter";

    public static MOUSE_LEAVE : string = "mouse_leave";

    public static MOUSE_MOVE : string = "mouse_move";

    public static MOUSE_OUT : string = "mouse_out";

    public static MOUSE_OVER : string = "mouse_over";

    public static MOUSE_UP : string = "mouse_up";

    /*private*/ __splashjs_events_MouseEvent_altKey : boolean;

    public constructor(name : string, target : IEventDispatcher, currentTarget : IEventDispatcher) {
        super(name, target, currentTarget);
        if(this.__splashjs_events_MouseEvent_altKey===undefined) this.__splashjs_events_MouseEvent_altKey = false;
        this.__splashjs_events_MouseEvent_altKey = this.__splashjs_events_MouseEvent_altKey;
    }

    public getAltKey() : boolean {
        return this.__splashjs_events_MouseEvent_altKey;
    }

    public setAltKey(altKey : boolean) {
        this.__splashjs_events_MouseEvent_altKey = altKey;
    }
}
MouseEvent["__class"] = "splashjs.events.MouseEvent";
MouseEvent["__interfaces"] = ["splashjs.events.iface.IEvent","splashjs.events.iface.IMouseEvent"];




