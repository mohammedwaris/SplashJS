/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { IDynamicText } from './iface/IDynamicText';
import { Event } from '../events/Event';
import { IEvent } from '../events/iface/IEvent';
import { ITextRenderer } from '../render/text/iface/ITextRenderer';
import { Text } from './Text';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class DynamicText extends Text implements IDynamicText {
    public constructor(text : string) {
        super("dynamicText");
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(DynamicText, this));
        super.setText(text);
    }

    public dispatchEvent(event : IEvent) : boolean {
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED_TO_STAGE)) {
            this.width = (<ITextRenderer><any>super.getRenderer()).getOriginalWidth();
            this.height = (<ITextRenderer><any>super.getRenderer()).getOriginalHeight();
        }
        let val : boolean = super.dispatchEvent(event);
        return val;
    }

    /**
     * 
     * @param {number} width
     */
    public setWidth(width : number) {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    /**
     * 
     * @param {number} height
     */
    public setHeight(height : number) {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    /**
     * 
     * @param {number} width
     * @param {number} height
     */
    public setSize(width : number, height : number) {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }
}
DynamicText["__class"] = "splashjs.text.DynamicText";
DynamicText["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.text.iface.IDynamicText","splashjs.text.iface.IText"];




