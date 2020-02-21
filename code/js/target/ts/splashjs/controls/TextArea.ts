/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { Event } from '../events/Event';
import { ITextArea } from './iface/ITextArea';
import { IEvent } from '../events/iface/IEvent';
import { ITextAreaRenderer } from '../render/controls/iface/ITextAreaRenderer';
import { BaseInput } from './BaseInput';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class TextArea extends BaseInput implements ITextArea {
    public constructor() {
        super("textArea");
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(TextArea, this));
    }

    public dispatchEvent(event : IEvent) : boolean {
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED_TO_STAGE)) {
            this.originalWidth = (<ITextAreaRenderer><any>super.getRenderer()).getOriginalWidth();
            this.originalHeight = (<ITextAreaRenderer><any>super.getRenderer()).getOriginalHeight();
            if(this.width === 0 && this.originalWidth !== 0) super.setWidth(this.originalWidth);
            if(this.height === 0 && this.originalHeight !== 0) super.setHeight(this.originalHeight);
        }
        return super.dispatchEvent(event);
    }

    /**
     * 
     */
    public render() {
        super.render();
        (<ITextAreaRenderer><any>super.getRenderer()).setResize("none");
    }
}
TextArea["__class"] = "splashjs.controls.TextArea";
TextArea["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.controls.iface.IBaseInput","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl","splashjs.controls.iface.ITextArea","splashjs.controls.iface.IBaseText"];




