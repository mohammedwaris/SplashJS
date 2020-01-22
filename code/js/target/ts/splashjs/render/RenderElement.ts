/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IRenderElement } from './iface/IRenderElement';

export class RenderElement implements IRenderElement {
    /*private*/ element : Element;

    public constructor(element : Element) {
        if(this.element===undefined) this.element = null;
        this.element = element;
    }

    public getDOMElement() : Element {
        return this.element;
    }
}
RenderElement["__class"] = "splashjs.render.RenderElement";
RenderElement["__interfaces"] = ["splashjs.render.iface.IRenderElement"];




