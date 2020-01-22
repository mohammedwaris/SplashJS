/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { RenderElement } from '../RenderElement';
import { ITextInput } from '../../controls/iface/ITextInput';
import { IBaseText } from '../../controls/iface/IBaseText';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { ITextInputRenderer } from './iface/ITextInputRenderer';
import { BaseInputRenderer } from './BaseInputRenderer';

export class TextInputRenderer extends BaseInputRenderer implements ITextInputRenderer {
    /*private*/ htmlInputElement : HTMLInputElement;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.htmlInputElement===undefined) this.htmlInputElement = null;
        super.setRenderObject(renderObject);
        this.htmlInputElement = <HTMLInputElement>document.createElement("input");
        this.htmlInputElement.type = "text";
        super.setRenderElement(new RenderElement(this.htmlInputElement));
    }

    public create() {
    }

    public setDisplayAsPassword() {
        let displayAsPassword : boolean = (<ITextInput><any>super.getRenderObject()).getDisplayAsPassword();
        if(displayAsPassword === true) this.htmlInputElement.type = "password"; else if(displayAsPassword === false) this.htmlInputElement.type = "text";
    }

    public setSelection() {
        let beginIndex : number = (<ITextInput><any>super.getRenderObject()).getSelectionBeginIndex();
        let endIndex : number = (<ITextInput><any>super.getRenderObject()).getSelectionEndIndex();
        this.htmlInputElement.focus();
        this.htmlInputElement.setSelectionRange(beginIndex, endIndex);
    }

    /**
     * 
     */
    public setText() {
        let text : string = (<IBaseText><any>super.getRenderObject()).getText();
        if(text != null) this.htmlInputElement.value = text; else this.htmlInputElement.value = "";
    }
}
TextInputRenderer["__class"] = "splashjs.render.controls.TextInputRenderer";
TextInputRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.controls.iface.IBaseTextRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.controls.iface.ITextInputRenderer","splashjs.render.controls.iface.IBaseInputRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




