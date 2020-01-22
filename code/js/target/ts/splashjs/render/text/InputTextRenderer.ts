/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { TextRenderer } from './TextRenderer';

export class InputTextRenderer extends TextRenderer {
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
InputTextRenderer["__class"] = "splashjs.render.text.InputTextRenderer";
InputTextRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.text.iface.ITextRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




