/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { Event } from '../events/Event';
import { ITextInput } from './iface/ITextInput';
import { IEvent } from '../events/iface/IEvent';
import { ITextInputRenderer } from '../render/controls/iface/ITextInputRenderer';
import { BaseInput } from './BaseInput';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class TextInput extends BaseInput implements ITextInput {
    /*private*/ displayAsPassword : boolean = false;

    public constructor() {
        super("textInput");
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(TextInput, this));
    }

    public setDisplayAsPassword(displayAsPassword : boolean) {
        this.displayAsPassword = displayAsPassword;
    }

    public getDisplayAsPassword() : boolean {
        return this.displayAsPassword;
    }

    public dispatchEvent(event : IEvent) : boolean {
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED_TO_STAGE)) {
            this.originalWidth = (<ITextInputRenderer><any>super.getRenderer()).getOriginalWidth();
            this.originalHeight = (<ITextInputRenderer><any>super.getRenderer()).getOriginalHeight();
            if(this.width === 0 && this.originalWidth !== 0) super.setWidth(this.originalWidth);
            if(this.height === 0 && this.originalHeight !== 0) super.setHeight(this.originalHeight);
        }
        return super.dispatchEvent(event);
    }

    /**
     * 
     * @param {string} text
     */
    public setText(text : string) {
        this.text = text;
        if(super.getRenderer() != null) (<ITextInputRenderer><any>super.getRenderer()).setText();
    }

    /**
     * 
     */
    public render() {
        super.render();
        (<ITextInputRenderer><any>super.getRenderer()).setDisplayAsPassword();
        (<ITextInputRenderer><any>super.getRenderer()).setText();
    }
}
TextInput["__class"] = "splashjs.controls.TextInput";
TextInput["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.controls.iface.IBaseInput","splashjs.display.iface.IInteractiveObject","splashjs.controls.iface.ITextInput","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl","splashjs.controls.iface.IBaseText"];




