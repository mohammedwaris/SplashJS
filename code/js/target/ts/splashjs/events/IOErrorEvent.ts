/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IIOErrorEvent } from './iface/IIOErrorEvent';
import { Event } from './Event';

export class IOErrorEvent extends Event implements IIOErrorEvent {
    public static IO_ERROR : string = "io_error";

    /*private*/ text : string = null;

    public constructor(type : string) {
        super(type);
    }

    public setText(text : string) {
        this.text = text;
    }

    public getText() : string {
        return this.text;
    }
}
IOErrorEvent["__class"] = "splashjs.events.IOErrorEvent";
IOErrorEvent["__interfaces"] = ["splashjs.events.iface.IEvent","splashjs.events.iface.IIOErrorEvent"];




