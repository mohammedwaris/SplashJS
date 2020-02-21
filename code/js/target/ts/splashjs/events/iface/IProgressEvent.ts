/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEvent } from './IEvent';

export interface IProgressEvent extends IEvent {
    setBytesLoaded(bytesLoaded : number);

    setBytesTotal(bytesTotal : number);

    getBytesLoaded() : number;

    getBytesTotal() : number;
}


