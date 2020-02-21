/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { IInputText } from './iface/IInputText';
import { Event } from '../events/Event';
import { IEvent } from '../events/iface/IEvent';
import { IInputTextRenderer } from '../render/text/iface/IInputTextRenderer';
import { ITextRenderer } from '../render/text/iface/ITextRenderer';
import { IColor } from '../utils/iface/IColor';
import { Color } from '../utils/Color';
import { Text } from './Text';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class InputText extends Text implements IInputText {
    /*private*/ placeholder : string;

    /*private*/ backgroundColor : IColor;

    /*private*/ borderColor : IColor;

    public constructor(text? : any) {
        if(((typeof text === 'string') || text === null)) {
            let __args = arguments;
            super("inputText");
            this.placeholder = "";
            this.backgroundColor = Color.NONE_$LI$();
            this.borderColor = Color.BLACK_$LI$();
            (() => {
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(InputText, this));
                super.setText(text);
            })();
        } else if(text === undefined) {
            let __args = arguments;
            super("inputText");
            this.placeholder = "";
            this.backgroundColor = Color.NONE_$LI$();
            this.borderColor = Color.BLACK_$LI$();
            (() => {
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(InputText, this));
            })();
        } else throw new Error('invalid overload');
    }

    public dispatchEvent(event : IEvent) : boolean {
        let val : boolean = super.dispatchEvent(event);
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED_TO_STAGE)) {
            this.width = (<ITextRenderer><any>super.getRenderer()).getOriginalWidth();
            this.height = (<ITextRenderer><any>super.getRenderer()).getOriginalHeight();
        }
        return val;
    }

    public setPlaceholder(placeholder : string) {
        this.placeholder = placeholder;
        (<IInputTextRenderer><any>super.getRenderer()).setPlaceholder();
    }

    public getPlaceholder() : string {
        return this.placeholder;
    }

    public setBackgroundColor(backgroundColor : IColor) {
        this.backgroundColor = backgroundColor;
        (<IInputTextRenderer><any>super.getRenderer()).setBackgroundColor();
    }

    public getBackgroundColor() : IColor {
        return this.backgroundColor;
    }

    public setBorderColor(borderColor : IColor) {
        this.borderColor = borderColor;
        (<IInputTextRenderer><any>super.getRenderer()).setBorderColor();
    }

    public getBorderColor() : IColor {
        return this.borderColor;
    }

    /**
     * 
     * @return {number}
     */
    public getWidth() : number {
        return (<ITextRenderer><any>super.getRenderer()).getWidth();
    }

    /**
     * 
     * @return {number}
     */
    public getHeight() : number {
        return (<ITextRenderer><any>super.getRenderer()).getHeight();
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
InputText["__class"] = "splashjs.text.InputText";
InputText["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.text.iface.IInputText","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.text.iface.IText"];




