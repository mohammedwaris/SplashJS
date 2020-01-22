/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { TextRenderer } from './TextRenderer';

export class DynamicTextRenderer extends TextRenderer {
    public getClientWidth() : number {
        return (<number>(<HTMLElement>this.getDOMElement()).clientWidth|0);
    }

    public getClientHeight() : number {
        return (<number>(<HTMLElement>this.getDOMElement()).clientHeight|0);
    }

    constructor() {
        super();
    }
}
DynamicTextRenderer["__class"] = "splashjs.render.text.DynamicTextRenderer";
DynamicTextRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.text.iface.ITextRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




