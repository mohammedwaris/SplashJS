/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IResourceRenderer } from './iface/IResourceRenderer';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { EventDispatcherRenderer } from '../events/EventDispatcherRenderer';

export class ResourceRenderer extends EventDispatcherRenderer implements IResourceRenderer {
    /*private*/ resourceBase64 : string;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.resourceBase64===undefined) this.resourceBase64 = null;
        super.setRenderObject(renderObject);
    }

    public setResourceBase64(resourceBase64 : string) {
        this.resourceBase64 = resourceBase64;
    }

    public getResourceBase64() : string {
        return this.resourceBase64;
    }
}
ResourceRenderer["__class"] = "splashjs.render.utils.ResourceRenderer";
ResourceRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.utils.iface.IResourceRenderer"];




