/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IBitmap } from '../../display/iface/IBitmap';
import { IBitmapData } from '../../display/iface/IBitmapData';
import { IBitmapRenderer } from './iface/IBitmapRenderer';
import { IBitmapDataRenderer } from './iface/IBitmapDataRenderer';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { RenderElement } from '../RenderElement';
import { IBitmapDrawable } from '../../display/iface/IBitmapDrawable';
import { DisplayObjectRenderer } from './DisplayObjectRenderer';
import { IRenderer } from '../iface/IRenderer';

export class BitmapRenderer extends DisplayObjectRenderer implements IBitmapRenderer {
    /*private*/ imageElement : HTMLImageElement;

    /*private*/ bitmap : IBitmap;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.imageElement===undefined) this.imageElement = null;
        if(this.bitmap===undefined) this.bitmap = null;
        super.setRenderObject(renderObject);
        this.bitmap = <IBitmap><any>renderObject;
        this.imageElement = <HTMLImageElement>document.createElement("img");
        super.setRenderElement(new RenderElement(this.imageElement));
        this.create();
    }

    public create() {
        let bitmapData : IBitmapData = this.bitmap.getBitmapData();
        let bitmapDataWidth : number = bitmapData.getBitmapDataWidth();
        let bitmapDataHeight : number = bitmapData.getBitmapDataHeight();
        let blob : Blob = (<IBitmapDataRenderer><any>bitmapData.getRenderer()).getBlob();
        this.imageElement.src = URL.createObjectURL(blob);
        this.imageElement.width = bitmapDataWidth;
        this.imageElement.height = bitmapDataHeight;
    }
}
BitmapRenderer["__class"] = "splashjs.render.display.BitmapRenderer";
BitmapRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.display.iface.IBitmapRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




