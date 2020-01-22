/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { RenderElement } from '../RenderElement';
import { ITextArea } from '../../controls/iface/ITextArea';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { ITextAreaRenderer } from './iface/ITextAreaRenderer';
import { BaseInputRenderer } from './BaseInputRenderer';

export class TextAreaRenderer extends BaseInputRenderer implements ITextAreaRenderer {
    /*private*/ htmlTextAreaElement : HTMLTextAreaElement;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.htmlTextAreaElement===undefined) this.htmlTextAreaElement = null;
        super.setRenderObject(renderObject);
        this.htmlTextAreaElement = <HTMLTextAreaElement>document.createElement("textarea");
        super.setRenderElement(new RenderElement(this.htmlTextAreaElement));
    }

    public create() {
    }

    public setSelection() {
        let beginIndex : number = (<ITextArea><any>super.getRenderObject()).getSelectionBeginIndex();
        let endIndex : number = (<ITextArea><any>super.getRenderObject()).getSelectionEndIndex();
        this.htmlTextAreaElement.focus();
        this.htmlTextAreaElement.setSelectionRange(beginIndex, endIndex);
    }
}
TextAreaRenderer["__class"] = "splashjs.render.controls.TextAreaRenderer";
TextAreaRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.controls.iface.IBaseTextRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.controls.iface.IBaseInputRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.controls.iface.ITextAreaRenderer"];




