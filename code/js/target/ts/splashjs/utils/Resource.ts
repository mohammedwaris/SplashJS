/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { EventDispatcher } from '../events/EventDispatcher';
import { IResource } from './iface/IResource';
import { IResourceRenderer } from '../render/utils/iface/IResourceRenderer';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class Resource extends EventDispatcher implements IResource {
    /*private*/ resourceName : string;

    /*private*/ resourcePath : string;

    /*private*/ resourceType : string;

    public constructor(resourceName : string, resourcePath : string, resourceType : string) {
        super();
        if(this.resourceName===undefined) this.resourceName = null;
        if(this.resourcePath===undefined) this.resourcePath = null;
        if(this.resourceType===undefined) this.resourceType = null;
        this.resourceName = resourceName;
        this.resourcePath = resourcePath;
        this.resourceType = resourceType;
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Resource, this));
    }

    public getResourcePath() : string {
        return this.resourcePath;
    }

    public getResourceName() : string {
        return this.resourceName;
    }

    public getResourceType() : string {
        return this.resourceType;
    }

    public getResourceBase64() : string {
        return (<IResourceRenderer><any>super.getRenderer()).getResourceBase64();
    }
}
Resource["__class"] = "splashjs.utils.Resource";
Resource["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.utils.iface.IResource"];




