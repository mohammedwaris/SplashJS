/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { RenderElement } from '../RenderElement';
import { IButton } from '../../controls/iface/IButton';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IButtonRenderer } from './iface/IButtonRenderer';
import { BaseTextRenderer } from './BaseTextRenderer';

export class ButtonRenderer extends BaseTextRenderer implements IButtonRenderer {
    /*private*/ htmlInputElement : HTMLInputElement;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.htmlInputElement===undefined) this.htmlInputElement = null;
        super.setRenderObject(renderObject);
        this.htmlInputElement = <HTMLInputElement>document.createElement("input");
        this.htmlInputElement.type = "button";
        super.setRenderElement(new RenderElement(this.htmlInputElement));
    }

    public create() {
        this.setText();
    }

    public setText() {
        let text : string = (<IButton><any>super.getRenderObject()).getText();
        if(text != null) this.htmlInputElement.value = text;
    }
}
ButtonRenderer["__class"] = "splashjs.render.controls.ButtonRenderer";
ButtonRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.controls.iface.IBaseTextRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.controls.iface.IButtonRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




