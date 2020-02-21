/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { EventDispatcher } from '../events/EventDispatcher';
import { IResourceLoader } from './iface/IResourceLoader';
import { IResource } from './iface/IResource';
import { IResourceLoaderRenderer } from '../render/utils/iface/IResourceLoaderRenderer';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class ResourceLoader extends EventDispatcher implements IResourceLoader {
    /*private*/ resources : Array<IResource> = <any>([]);

    public constructor() {
        super("resourceLoader");
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(ResourceLoader, this));
    }

    public addResource(resource : IResource) {
        /* add */(this.resources.push(resource)>0);
    }

    public getResourceByName(resourceName : string) : IResource {
        let rsrc : IResource = null;
        for(let i : number = 0; i < /* size */(<number>this.resources.length); i++) {{
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(/* get */this.resources[i].getResourceName(),resourceName))) {
                rsrc = /* get */this.resources[i];
                break;
            }
        };}
        return rsrc;
    }

    public loadAll() {
        (<IResourceLoaderRenderer><any>super.getRenderer()).loadAll(this.resources);
    }
}
ResourceLoader["__class"] = "splashjs.utils.ResourceLoader";
ResourceLoader["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.utils.iface.IResourceLoader"];




