/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { EventDispatcher } from '../events/EventDispatcher';
import { IEvent } from '../events/iface/IEvent';
import { IProgressEvent } from '../events/iface/IProgressEvent';
import { IURLLoader } from './iface/IURLLoader';
import { IURLRequest } from './iface/IURLRequest';
import { IURLLoaderRenderer } from '../render/net/iface/IURLLoaderRenderer';
import { URLLoaderDataFormat } from './URLLoaderDataFormat';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class URLLoader extends EventDispatcher implements IURLLoader {
    /*private*/ bytesLoaded : number;

    /*private*/ bytesTotal : number;

    /*private*/ data : any;

    /*private*/ dataFormat : string;

    /*private*/ urlRequest : IURLRequest;

    public constructor(urlRequest? : any) {
        if(((urlRequest != null && (urlRequest["__interfaces"] != null && urlRequest["__interfaces"].indexOf("splashjs.net.iface.IURLRequest") >= 0 || urlRequest.constructor != null && urlRequest.constructor["__interfaces"] != null && urlRequest.constructor["__interfaces"].indexOf("splashjs.net.iface.IURLRequest") >= 0)) || urlRequest === null)) {
            let __args = arguments;
            super();
            if(this.bytesLoaded===undefined) this.bytesLoaded = 0;
            if(this.bytesTotal===undefined) this.bytesTotal = 0;
            if(this.data===undefined) this.data = null;
            if(this.dataFormat===undefined) this.dataFormat = null;
            if(this.urlRequest===undefined) this.urlRequest = null;
            if(this.bytesLoaded===undefined) this.bytesLoaded = 0;
            if(this.bytesTotal===undefined) this.bytesTotal = 0;
            if(this.data===undefined) this.data = null;
            if(this.dataFormat===undefined) this.dataFormat = null;
            if(this.urlRequest===undefined) this.urlRequest = null;
            (() => {
                this.urlRequest = urlRequest;
                this.dataFormat = URLLoaderDataFormat.TEXT;
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(URLLoader, this));
            })();
        } else if(urlRequest === undefined) {
            let __args = arguments;
            super();
            if(this.bytesLoaded===undefined) this.bytesLoaded = 0;
            if(this.bytesTotal===undefined) this.bytesTotal = 0;
            if(this.data===undefined) this.data = null;
            if(this.dataFormat===undefined) this.dataFormat = null;
            if(this.urlRequest===undefined) this.urlRequest = null;
            if(this.bytesLoaded===undefined) this.bytesLoaded = 0;
            if(this.bytesTotal===undefined) this.bytesTotal = 0;
            if(this.data===undefined) this.data = null;
            if(this.dataFormat===undefined) this.dataFormat = null;
            if(this.urlRequest===undefined) this.urlRequest = null;
            (() => {
                this.dataFormat = URLLoaderDataFormat.TEXT;
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(URLLoader, this));
            })();
        } else throw new Error('invalid overload');
    }

    /**
     * 
     */
    public close() {
        (<IURLLoaderRenderer><any>super.getRenderer()).close();
    }

    public load$splashjs_net_iface_IURLRequest(urlRequest : IURLRequest) {
        this.urlRequest = urlRequest;
        this.load();
    }

    /**
     * 
     * @param {*} urlRequest
     */
    public load(urlRequest? : any) : any {
        if(((urlRequest != null && (urlRequest["__interfaces"] != null && urlRequest["__interfaces"].indexOf("splashjs.net.iface.IURLRequest") >= 0 || urlRequest.constructor != null && urlRequest.constructor["__interfaces"] != null && urlRequest.constructor["__interfaces"].indexOf("splashjs.net.iface.IURLRequest") >= 0)) || urlRequest === null)) {
            return <any>this.load$splashjs_net_iface_IURLRequest(urlRequest);
        } else if(urlRequest === undefined) {
            return <any>this.load$();
        } else throw new Error('invalid overload');
    }

    public load$() {
        (<IURLLoaderRenderer><any>super.getRenderer()).load();
    }

    public getURLRequest() : IURLRequest {
        return this.urlRequest;
    }

    public setDataFormat(dataFormat : string) {
        this.dataFormat = dataFormat;
    }

    public getDataFormat() : string {
        return this.dataFormat;
    }

    /**
     * 
     * @return {number}
     */
    public getBytesTotal() : number {
        return (<IURLLoaderRenderer><any>super.getRenderer()).getBytesTotal();
    }

    /**
     * 
     * @return {number}
     */
    public getBytesLoaded() : number {
        return (<IURLLoaderRenderer><any>super.getRenderer()).getBytesLoaded();
    }

    /**
     * 
     * @return {*}
     */
    public getData() : any {
        return (<IURLLoaderRenderer><any>super.getRenderer()).getData();
    }
}
URLLoader["__class"] = "splashjs.net.URLLoader";
URLLoader["__interfaces"] = ["splashjs.net.iface.IURLLoader","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




