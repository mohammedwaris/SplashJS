/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEvent } from '../../events/iface/IEvent';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { RenderElement } from '../RenderElement';
import { HTMLDomEventName } from '../HTMLDomEventName';
import { IInputText } from '../../text/iface/IInputText';
import { IText } from '../../text/iface/IText';
import { IInputTextRenderer } from './iface/IInputTextRenderer';
import { ColorName } from '../../utils/ColorName';
import { ColorType } from '../../utils/ColorType';
import { IColor } from '../../utils/iface/IColor';
import { TextRenderer } from './TextRenderer';
import { Event } from '../../events/Event';

export class InputTextRenderer extends TextRenderer implements IInputTextRenderer {
    /*private*/ htmlInputElement : HTMLInputElement;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.htmlInputElement===undefined) this.htmlInputElement = null;
        super.setRenderObject(renderObject);
        this.htmlInputElement = <HTMLInputElement>document.createElement("input");
        this.htmlInputElement.setAttribute("type", "text");
        super.setRenderElement(new RenderElement(this.htmlInputElement));
        this.applyCSS();
        this.createEventListeners();
    }

    public create() {
    }

    public createEventListeners() {
        super.createEventListeners();
        this.htmlInputElement.addEventListener(HTMLDomEventName.CHANGE, (event) => {
            console.info("change");
            let changeEvent : IEvent = new splashjs.events.Event(splashjs.events.Event.CHANGE, this.getRenderObject(), this.getRenderObject());
            this.getRenderObject().dispatchEvent(changeEvent);
        });
    }

    public setText() {
        let txt : string = (<IText><any>super.getRenderObject()).getText();
        if(txt != null) this.htmlInputElement.setAttribute("value", txt);
    }

    public setPlaceholder() {
        let placeholder : string = (<IInputText><any>super.getRenderObject()).getPlaceholder();
        if(placeholder != null) this.htmlInputElement.setAttribute("placeholder", placeholder);
    }

    public setBackgroundColor() {
        let backgroundColor : IColor = (<IInputText><any>super.getRenderObject()).getBackgroundColor();
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(backgroundColor.getColorType(), ColorType.NAME)) {
            let colorName : string = backgroundColor.getColorName();
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(colorName, ColorName.NONE)) {
                this.htmlInputElement.style.background = "none";
            } else {
                this.htmlInputElement.style.backgroundColor = colorName;
            }
        }
    }

    public setBorderColor() {
        let borderColor : IColor = (<IInputText><any>super.getRenderObject()).getBorderColor();
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(borderColor.getColorType(), ColorType.NAME)) {
            let colorName : string = borderColor.getColorName();
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(colorName, ColorName.NONE)) {
                this.htmlInputElement.style.border = "none";
            } else {
                this.htmlInputElement.style.borderColor = colorName;
            }
        }
    }

    public getClientWidth() : number {
        return (<number>(<HTMLElement>this.getDOMElement()).clientWidth|0);
    }

    public getClientHeight() : number {
        return (<number>(<HTMLElement>this.getDOMElement()).clientHeight|0);
    }

    /**
     * 
     */
    public applyCSS() {
        this.htmlInputElement.style.background = "none";
        this.htmlInputElement.style.borderWidth = "1px";
        this.htmlInputElement.style.borderColor = "#000000";
    }
}
InputTextRenderer["__class"] = "splashjs.render.text.InputTextRenderer";
InputTextRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.text.iface.ITextRenderer","splashjs.render.iface.IRenderer","splashjs.render.text.iface.IInputTextRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




