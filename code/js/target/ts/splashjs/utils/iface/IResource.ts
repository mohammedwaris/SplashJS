/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';

export interface IResource extends IEventDispatcher {
    getResourcePath() : string;

    getResourceName() : string;

    getResourceType() : string;

    getResourceBase64() : string;
}


