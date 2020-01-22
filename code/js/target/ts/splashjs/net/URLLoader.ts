/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { EventDispatcher } from '../events/EventDispatcher';
import { IEvent } from '../events/iface/IEvent';
import { IProgressEvent } from '../events/iface/IProgressEvent';
import { IURLLoader } from './iface/IURLLoader';
import { IURLRequest } from './iface/IURLRequest';
import { URLLoaderDataFormat } from './URLLoaderDataFormat';
import { URLRequestMethod } from './URLRequestMethod';

export class URLLoader extends EventDispatcher implements IURLLoader {
    /*private*/ bytesLoaded : number;

    /*private*/ bytesTotal : number;

    /*private*/ data : any;

    /*private*/ dataFormat : string;

    /*private*/ urlRequest : IURLRequest;

    public constructor(urlRequest : IURLRequest) {
        super();
        if(this.bytesLoaded===undefined) this.bytesLoaded = 0;
        if(this.bytesTotal===undefined) this.bytesTotal = 0;
        if(this.data===undefined) this.data = null;
        if(this.dataFormat===undefined) this.dataFormat = null;
        if(this.urlRequest===undefined) this.urlRequest = null;
        this.urlRequest = urlRequest;
        this.dataFormat = URLLoaderDataFormat.TEXT;
    }

    /**
     * 
     */
    public close() {
    }

    /**
     * 
     */
    public load() {
        let urlRequestMethod : string = this.urlRequest.getURLRequestMethod();
        let method : string = "get";
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, URLRequestMethod.GET)) method = "get"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, URLRequestMethod.POST)) method = "post"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, URLRequestMethod.DELETE)) method = "delete"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, URLRequestMethod.PUT)) method = "put"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, URLRequestMethod.HEAD)) method = "head"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, URLRequestMethod.OPTIONS)) method = "options";
        let url : string = this.urlRequest.getURL();
    }

    /**
     * 
     * @return {number}
     */
    public getBytesTotal() : number {
        return this.bytesTotal;
    }

    /**
     * 
     * @return {number}
     */
    public getBytesLoaded() : number {
        return this.bytesLoaded;
    }

    /**
     * 
     * @return {*}
     */
    public getData() : any {
        return this.data;
    }

    /*private*/ dispatchCompleteEvent(completeEvent : IEvent) {
        this.dispatchEvent(completeEvent);
    }

    /*private*/ dispatchProgressEvent(progressEvent : IProgressEvent) {
        this.dispatchEvent(progressEvent);
    }
}
URLLoader["__class"] = "splashjs.net.URLLoader";
URLLoader["__interfaces"] = ["splashjs.net.iface.IURLLoader","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




