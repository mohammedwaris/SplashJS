/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { RenderElement } from '../RenderElement';
import { IStaticText } from '../../text/iface/IStaticText';
import { IStaticTextRenderer } from './iface/IStaticTextRenderer';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { TextRenderer } from './TextRenderer';
import { IRenderElement } from '../iface/IRenderElement';

export class StaticTextRenderer extends TextRenderer implements IStaticTextRenderer {
    htmlParagraphElement : HTMLParagraphElement;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.htmlParagraphElement===undefined) this.htmlParagraphElement = null;
        super.setRenderObject(renderObject);
        this.htmlParagraphElement = <HTMLParagraphElement>document.createElement("p");
        this.renderElement = new RenderElement(this.htmlParagraphElement);
    }

    public create() {
        this.htmlParagraphElement.innerText = (<IStaticText><any>super.getRenderObject()).getText();
    }

    public getOriginalWidth() : number {
        return (<number>(<HTMLElement>this.getDOMElement()).clientWidth|0);
    }

    public getOriginalHeight() : number {
        return (<number>(<HTMLElement>this.getDOMElement()).clientHeight|0);
    }

    public setText() {
        this.htmlParagraphElement.innerText = (<IStaticText><any>super.getRenderObject()).getText();
    }

    /*private*/ getHTMLParagraphElement() : HTMLParagraphElement {
        let htmlParagraphElement : HTMLParagraphElement = <HTMLParagraphElement>this.getDOMElement();
        return htmlParagraphElement;
    }
}
StaticTextRenderer["__class"] = "splashjs.render.text.StaticTextRenderer";
StaticTextRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.text.iface.ITextRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.text.iface.IStaticTextRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




