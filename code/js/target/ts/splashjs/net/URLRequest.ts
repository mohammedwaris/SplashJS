/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IURLRequest } from './iface/IURLRequest';
import { IURLRequestHeader } from './iface/IURLRequestHeader';
import { URLRequestMethod } from './URLRequestMethod';

export class URLRequest implements IURLRequest {
    /*private*/ url : string;

    /*private*/ contentType : string;

    /*private*/ data : any;

    /*private*/ followRedirects : boolean;

    /*private*/ method : string;

    /*private*/ requestHeaders : Array<IURLRequestHeader> = <any>([]);

    public constructor(url : string) {
        if(this.url===undefined) this.url = null;
        if(this.contentType===undefined) this.contentType = null;
        if(this.data===undefined) this.data = null;
        if(this.followRedirects===undefined) this.followRedirects = false;
        if(this.method===undefined) this.method = null;
        this.url = url;
        this.method = URLRequestMethod.GET;
    }

    public getURL() : string {
        return this.url;
    }

    public setMethod(method : string) {
        this.method = method;
    }

    public getMethod() : string {
        return this.method;
    }

    public setRequestHeaders(requestHeaders : Array<IURLRequestHeader>) {
        this.requestHeaders = requestHeaders;
    }

    public getRequestHeaders() : Array<IURLRequestHeader> {
        return this.requestHeaders;
    }

    public setContentType(contentType : string) {
        this.contentType = contentType;
    }

    public getContentType() : string {
        return this.contentType;
    }

    public setData(data : any) {
        this.data = data;
    }

    public getData() : any {
        return this.data;
    }
}
URLRequest["__class"] = "splashjs.net.URLRequest";
URLRequest["__interfaces"] = ["splashjs.net.iface.IURLRequest"];




