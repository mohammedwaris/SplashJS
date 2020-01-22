/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { HTMLDomEventName } from '../HTMLDomEventName';
import { IBaseInputRenderer } from './iface/IBaseInputRenderer';
import { IBaseInput } from '../../controls/iface/IBaseInput';
import { BaseTextRenderer } from './BaseTextRenderer';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';

export abstract class BaseInputRenderer extends BaseTextRenderer implements IBaseInputRenderer {
    public createEventListeners() {
        super.createEventListeners();
        super.getDOMElement().addEventListener(HTMLDomEventName.SELECT, (event) => {
        });
    }

    public setPlaceHolderText() {
        let placeHolderText : string = (<IBaseInput><any>super.getRenderObject()).getPlaceHolderText();
        if(placeHolderText != null) super.getDOMElement().setAttribute("placeHolder", placeHolderText); else super.getDOMElement().setAttribute("placeHolder", "");
    }

    public setMaxChars() {
        let maxChars : number = (<IBaseInput><any>super.getRenderObject()).getMaxChars();
        if(maxChars >= 1) super.getDOMElement().setAttribute("maxLength", maxChars + "");
    }

    public setEditable() {
        let editable : boolean = (<IBaseInput><any>super.getRenderObject()).getEditable();
        if(editable === true) super.getDOMElement().removeAttribute("readOnly"); else if(editable === false) super.getDOMElement().setAttribute("readOnly", "readonly");
    }

    public abstract setSelection();

    constructor() {
        super();
    }
}
BaseInputRenderer["__class"] = "splashjs.render.controls.BaseInputRenderer";
BaseInputRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.controls.iface.IBaseTextRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.controls.iface.IBaseInputRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




