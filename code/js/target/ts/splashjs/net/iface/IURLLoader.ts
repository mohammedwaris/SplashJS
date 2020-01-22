/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';

export interface IURLLoader extends IEventDispatcher {
    load();

    close();

    getBytesLoaded() : number;

    getBytesTotal() : number;

    getData() : any;
}


