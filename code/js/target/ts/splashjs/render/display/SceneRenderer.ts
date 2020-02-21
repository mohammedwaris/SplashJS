/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { DisplayObjectContainerRenderer } from './DisplayObjectContainerRenderer';
import { RenderElement } from '../RenderElement';

export class SceneRenderer extends DisplayObjectContainerRenderer {
    htmlDivElement : HTMLDivElement;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.htmlDivElement===undefined) this.htmlDivElement = null;
        super.setRenderObject(renderObject);
        this.htmlDivElement = <HTMLDivElement>document.createElement("div");
        super.setRenderElement(new RenderElement(this.htmlDivElement));
    }

    public applyCSS() {
        this.htmlDivElement.style.display = "inline-block";
    }
}
SceneRenderer["__class"] = "splashjs.render.display.SceneRenderer";
SceneRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.display.iface.IDisplayObjectContainerRenderer"];




