/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IEvent } from '../../events/iface/IEvent';
import { EventDispatcherRenderer } from '../events/EventDispatcherRenderer';
import { IURLLoaderRenderer } from './iface/IURLLoaderRenderer';
import { URLRequestMethod } from '../../net/URLRequestMethod';
import { URLLoaderDataFormat } from '../../net/URLLoaderDataFormat';
import { IURLLoader } from '../../net/iface/IURLLoader';
import { IURLRequest } from '../../net/iface/IURLRequest';
import { IByteArray } from '../../utils/iface/IByteArray';
import { ByteArray } from '../../utils/ByteArray';
import { IByteArrayRenderer } from '../utils/iface/IByteArrayRenderer';
import { HTMLDomEventName } from '../HTMLDomEventName';
import { IRenderer } from '../iface/IRenderer';

export class URLLoaderRenderer extends EventDispatcherRenderer implements IURLLoaderRenderer {
    /*private*/ xmlHttpRequest : XMLHttpRequest;

    /*private*/ urlLoader : IURLLoader;

    /*private*/ bytesLoaded : number;

    /*private*/ bytesTotal : number;

    /*private*/ data : any;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.xmlHttpRequest===undefined) this.xmlHttpRequest = null;
        if(this.urlLoader===undefined) this.urlLoader = null;
        if(this.bytesLoaded===undefined) this.bytesLoaded = 0;
        if(this.bytesTotal===undefined) this.bytesTotal = 0;
        if(this.data===undefined) this.data = null;
        super.setRenderObject(renderObject);
        this.xmlHttpRequest = new XMLHttpRequest();
        this.urlLoader = <IURLLoader><any>renderObject;
    }

    public load() {
        let urlRequest : IURLRequest = this.urlLoader.getURLRequest();
        let urlRequestMethod : string = urlRequest.getMethod();
        let method : string = "get";
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, URLRequestMethod.GET)) method = "get"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, URLRequestMethod.POST)) method = "post"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, URLRequestMethod.DELETE)) method = "delete"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, URLRequestMethod.PUT)) method = "put"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, URLRequestMethod.HEAD)) method = "head"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, URLRequestMethod.OPTIONS)) method = "options";
        let dataFormat : string = this.urlLoader.getDataFormat();
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(dataFormat, URLLoaderDataFormat.BINARY)) this.xmlHttpRequest.responseType = "arraybuffer"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(dataFormat, URLLoaderDataFormat.TEXT)) this.xmlHttpRequest.responseType = "text"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(dataFormat, URLLoaderDataFormat.VARIABLES)) this.xmlHttpRequest.responseType = "";
        let url : string = urlRequest.getURL();
        this.xmlHttpRequest.open(method, url);
        this.xmlHttpRequest.setRequestHeader("Content-Type", "text/html");
        this.xmlHttpRequest.addEventListener(HTMLDomEventName.LOAD, ((dataFormat) => {
            return (event) => {
                let progressEvent : ProgressEvent = <ProgressEvent>event;
                this.bytesLoaded = (<number>progressEvent.loaded|0);
                this.bytesTotal = (<number>progressEvent.total|0);
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(dataFormat, URLLoaderDataFormat.BINARY)) {
                    let byteArray : IByteArray = new ByteArray();
                    (<IByteArrayRenderer><any>byteArray.getRenderer()).setDataView(new DataView(<ArrayBuffer>this.xmlHttpRequest.response));
                    this.data = byteArray;
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(dataFormat, URLLoaderDataFormat.TEXT)) {
                    this.data = <string>this.xmlHttpRequest.responseText;
                }
                let completeEvent : IEvent = new splashjs.events.Event(splashjs.events.Event.COMPLETE, this.urlLoader, this.urlLoader);
                this.urlLoader.dispatchEvent(completeEvent);
                console.info(event);
            }
        })(dataFormat));
        this.xmlHttpRequest.send();
    }

    public getData() : any {
        return this.data;
    }

    public getBytesTotal() : number {
        return this.bytesTotal;
    }

    public getBytesLoaded() : number {
        return this.bytesLoaded;
    }

    public close() {
        if(this.xmlHttpRequest != null) this.xmlHttpRequest.abort();
    }
}
URLLoaderRenderer["__class"] = "splashjs.render.net.URLLoaderRenderer";
URLLoaderRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.net.iface.IURLLoaderRenderer"];




