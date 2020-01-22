/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { RenderElement } from '../RenderElement';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { DisplayObjectContainerRenderer } from './DisplayObjectContainerRenderer';

export class SpriteRenderer extends DisplayObjectContainerRenderer {
    public constructor(renderObject : IEventDispatcher) {
        super();
        super.setRenderObject(renderObject);
        super.setRenderElement(new RenderElement(<HTMLSpanElement>document.createElement("span")));
    }
}
SpriteRenderer["__class"] = "splashjs.render.display.SpriteRenderer";
SpriteRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.display.iface.IDisplayObjectContainerRenderer"];




