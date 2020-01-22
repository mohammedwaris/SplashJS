/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IURLRequest } from './iface/IURLRequest';
import { URLRequestMethod } from './URLRequestMethod';

export class URLRequest implements IURLRequest {
    /*private*/ url : string;

    /*private*/ contentType : string;

    /*private*/ data : any;

    /*private*/ followRedirects : boolean;

    /*private*/ urlRequestMethod : string;

    public constructor(url : string) {
        if(this.url===undefined) this.url = null;
        if(this.contentType===undefined) this.contentType = null;
        if(this.data===undefined) this.data = null;
        if(this.followRedirects===undefined) this.followRedirects = false;
        if(this.urlRequestMethod===undefined) this.urlRequestMethod = null;
        this.url = url;
        this.urlRequestMethod = URLRequestMethod.GET;
    }

    public getURL() : string {
        return this.url;
    }

    public getURLRequestMethod() : string {
        return this.urlRequestMethod;
    }
}
URLRequest["__class"] = "splashjs.net.URLRequest";
URLRequest["__interfaces"] = ["splashjs.net.iface.IURLRequest"];




