/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IProgressEvent } from './iface/IProgressEvent';
import { Event } from './Event';

export class ProgressEvent extends Event implements IProgressEvent {
    public static PROGRESS : string = "progress";

    /*private*/ bytesLoaded : number = -1;

    /*private*/ bytesTotal : number = -1;

    public constructor(type : string) {
        super(type);
    }

    public setBytesLoaded(bytesLoaded : number) {
        this.bytesLoaded = bytesLoaded;
    }

    public getBytesLoaded() : number {
        return this.bytesLoaded;
    }

    public setBytesTotal(bytesTotal : number) {
        this.bytesTotal = bytesTotal;
    }

    public getBytesTotal() : number {
        return this.bytesTotal;
    }
}
ProgressEvent["__class"] = "splashjs.events.ProgressEvent";
ProgressEvent["__interfaces"] = ["splashjs.events.iface.IEvent","splashjs.events.iface.IProgressEvent"];




