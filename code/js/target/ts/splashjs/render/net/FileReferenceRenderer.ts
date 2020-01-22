/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { RenderElement } from '../RenderElement';
import { HTMLDomEventName } from '../HTMLDomEventName';
import { EventDispatcherRenderer } from '../events/EventDispatcherRenderer';
import { IRenderElement } from '../iface/IRenderElement';
import { IURLRequest } from '../../net/iface/IURLRequest';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IFileReferenceRenderer } from './iface/IFileReferenceRenderer';
import { IRenderer } from '../iface/IRenderer';
import { IStage } from '../../display/iface/IStage';

export class FileReferenceRenderer extends EventDispatcherRenderer implements IFileReferenceRenderer {
    htmlInputElement : HTMLInputElement;

    htmlAnchorElement : HTMLAnchorElement;

    inputRenderElement : IRenderElement;

    anchorRenderElement : IRenderElement;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.htmlInputElement===undefined) this.htmlInputElement = null;
        if(this.htmlAnchorElement===undefined) this.htmlAnchorElement = null;
        if(this.inputRenderElement===undefined) this.inputRenderElement = null;
        if(this.anchorRenderElement===undefined) this.anchorRenderElement = null;
        super.setRenderObject(renderObject);
        this.htmlInputElement = <HTMLInputElement>document.createElement("input");
        this.htmlInputElement.type = "file";
        this.inputRenderElement = new RenderElement(this.htmlInputElement);
        this.htmlAnchorElement = <HTMLAnchorElement>document.createElement("a");
        this.anchorRenderElement = new RenderElement(this.htmlAnchorElement);
        this.create();
    }

    public createEventListeners() {
        super.createEventListeners();
        this.htmlInputElement.addEventListener(HTMLDomEventName.CHANGE, (event) => {
            if(this.htmlInputElement.files.length === 1) {
                console.info(this.htmlInputElement.files);
            }
        });
    }

    public create() {
        super.setRenderElement(this.inputRenderElement);
        super.getRenderObject().getStage().getRenderer().appendChild(this);
        super.setDisplay("none");
        super.setRenderElement(this.anchorRenderElement);
        super.getRenderObject().getStage().getRenderer().appendChild(this);
        super.setDisplay("none");
    }

    public download(urlRequest : IURLRequest, defaultFileName : string) {
        this.htmlAnchorElement.href = urlRequest.getURL();
        this.htmlAnchorElement.setAttribute("download", defaultFileName);
        this.htmlAnchorElement.click();
    }

    public browse() {
        this.htmlInputElement.click();
    }
}
FileReferenceRenderer["__class"] = "splashjs.render.net.FileReferenceRenderer";
FileReferenceRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.net.iface.IFileReferenceRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




