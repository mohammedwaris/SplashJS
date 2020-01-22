/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IBaseText } from './iface/IBaseText';
import { IBaseTextRenderer } from '../render/controls/iface/IBaseTextRenderer';
import { Control } from './Control';
import { IRenderer } from '../render/iface/IRenderer';

export abstract class BaseText extends Control implements IBaseText {
    text : string;

    public constructor(id : string) {
        super(id);
        if(this.text===undefined) this.text = null;
    }

    public setText(text : string) {
        this.text = text;
        if(super.getRenderer() != null) (<IBaseTextRenderer><any>super.getRenderer()).setText();
    }

    public getText() : string {
        return this.text;
    }
}
BaseText["__class"] = "splashjs.controls.BaseText";
BaseText["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl","splashjs.controls.iface.IBaseText"];




