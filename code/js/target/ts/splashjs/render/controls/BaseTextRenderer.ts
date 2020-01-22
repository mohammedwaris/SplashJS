/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IBaseText } from '../../controls/iface/IBaseText';
import { IBaseTextRenderer } from './iface/IBaseTextRenderer';
import { ControlRenderer } from './ControlRenderer';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';

export abstract class BaseTextRenderer extends ControlRenderer implements IBaseTextRenderer {
    public setText() {
        let text : string = (<IBaseText><any>super.getRenderObject()).getText();
        if(text != null) (<HTMLElement>super.getDOMElement()).innerText = text; else (<HTMLElement>super.getDOMElement()).innerText = "";
    }

    constructor() {
        super();
    }
}
BaseTextRenderer["__class"] = "splashjs.render.controls.BaseTextRenderer";
BaseTextRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.controls.iface.IBaseTextRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




