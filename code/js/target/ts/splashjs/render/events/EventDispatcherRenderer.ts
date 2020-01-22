/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEventDispatcherRenderer } from './iface/IEventDispatcherRenderer';
import { SplashObjectRenderer } from '../lang/SplashObjectRenderer';

export class EventDispatcherRenderer extends SplashObjectRenderer implements IEventDispatcherRenderer {
    /*private*/ htmlElement : HTMLElement;

    public setDisplay(value : string) {
        this.htmlElement = <HTMLElement>this.getDOMElement();
        this.htmlElement.style.display = value;
    }

    constructor() {
        super();
        if(this.htmlElement===undefined) this.htmlElement = null;
    }
}
EventDispatcherRenderer["__class"] = "splashjs.render.events.EventDispatcherRenderer";
EventDispatcherRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




