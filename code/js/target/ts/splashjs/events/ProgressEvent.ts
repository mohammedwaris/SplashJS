/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IProgressEvent } from './iface/IProgressEvent';
import { Event } from './Event';

export class ProgressEvent extends Event implements IProgressEvent {
    public constructor(type : string) {
        super(type);
    }
}
ProgressEvent["__class"] = "splashjs.events.ProgressEvent";
ProgressEvent["__interfaces"] = ["splashjs.events.iface.IEvent","splashjs.events.iface.IProgressEvent"];




