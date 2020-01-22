/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { IEvent } from '../events/iface/IEvent';
import { Event } from '../events/Event';
import { IStaticText } from './iface/IStaticText';
import { IStaticTextRenderer } from '../render/text/iface/IStaticTextRenderer';
import { Text } from './Text';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class StaticText extends Text implements IStaticText {
    public constructor(text : string) {
        super("staticText");
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(StaticText, this));
        super.setText(text);
    }

    public dispatchEvent(event : IEvent) : boolean {
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED_TO_STAGE)) {
            this.width = (<IStaticTextRenderer><any>super.getRenderer()).getOriginalWidth();
            this.height = (<IStaticTextRenderer><any>super.getRenderer()).getOriginalHeight();
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
StaticText["__class"] = "splashjs.text.StaticText";
StaticText["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.text.iface.IText","splashjs.text.iface.IStaticText"];




