/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { RenderElement } from '../RenderElement';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { ILabelRenderer } from './iface/ILabelRenderer';
import { BaseTextRenderer } from './BaseTextRenderer';

export class LabelRenderer extends BaseTextRenderer implements ILabelRenderer {
    /*private*/ htmlParagraphElement : HTMLParagraphElement;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.htmlParagraphElement===undefined) this.htmlParagraphElement = null;
        super.setRenderObject(renderObject);
        this.htmlParagraphElement = <HTMLParagraphElement>document.createElement("p");
        super.setRenderElement(new RenderElement(this.htmlParagraphElement));
        this.create();
    }

    public create() {
        super.setText();
    }
}
LabelRenderer["__class"] = "splashjs.render.controls.LabelRenderer";
LabelRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.controls.iface.IBaseTextRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.controls.iface.ILabelRenderer"];




