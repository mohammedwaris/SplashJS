/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { RenderElement } from '../RenderElement';
import { IImage } from '../../display/iface/IImage';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IImageRenderer } from './iface/IImageRenderer';
import { InteractiveObjectRenderer } from './InteractiveObjectRenderer';

export class ImageRenderer extends InteractiveObjectRenderer {
    /*private*/ htmlImageElement : HTMLImageElement;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.htmlImageElement===undefined) this.htmlImageElement = null;
        super.setRenderObject(renderObject);
        this.htmlImageElement = <HTMLImageElement>document.createElement("img");
        super.setRenderElement(new RenderElement(this.htmlImageElement));
        this.create();
    }

    public create() {
        this.setImagePath();
    }

    public setImagePath() {
        let imagePath : string = (<IImage><any>super.getRenderObject()).getImagePath();
        if(imagePath != null && !/* isEmpty */(imagePath.length === 0)) this.htmlImageElement.src = imagePath;
    }

    public getOriginalWidth() : number {
        return (<number>this.htmlImageElement.naturalWidth|0);
    }

    public getOriginalHeight() : number {
        return (<number>this.htmlImageElement.naturalHeight|0);
    }
}
ImageRenderer["__class"] = "splashjs.render.display.ImageRenderer";
ImageRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




