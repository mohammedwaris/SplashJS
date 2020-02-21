/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IURLRequest } from './IURLRequest';

export interface IURLLoader extends IEventDispatcher {
    load(urlRequest? : any) : any;

    close();

    getBytesLoaded() : number;

    getBytesTotal() : number;

    getData() : any;

    setDataFormat(dataFormat : string);

    getDataFormat() : string;

    getURLRequest() : IURLRequest;
}


