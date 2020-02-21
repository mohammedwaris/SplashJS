/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { EventDispatcher } from '../events/EventDispatcher';
import { IBitmapData } from './iface/IBitmapData';
import { IBitmapDrawable } from './iface/IBitmapDrawable';
import { IBitmapDataRenderer } from '../render/display/iface/IBitmapDataRenderer';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class BitmapData extends EventDispatcher implements IBitmapData {
    /*private*/ bitmapDataWidth : number;

    /*private*/ bitmapDataHeight : number;

    public constructor(bitmapDataWidth : number, bitmapDataHeight : number) {
        super();
        if(this.bitmapDataWidth===undefined) this.bitmapDataWidth = 0;
        if(this.bitmapDataHeight===undefined) this.bitmapDataHeight = 0;
        this.bitmapDataWidth = bitmapDataWidth;
        this.bitmapDataHeight = bitmapDataHeight;
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(BitmapData, this));
    }

    public getBitmapDataWidth() : number {
        return this.bitmapDataWidth;
    }

    public getBitmapDataHeight() : number {
        return this.bitmapDataHeight;
    }

    public draw(bitmapDrawable : IBitmapDrawable) {
        (<IBitmapDataRenderer><any>super.getRenderer()).draw(bitmapDrawable);
    }
}
BitmapData["__class"] = "splashjs.display.BitmapData";
BitmapData["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.display.iface.IBitmapData"];




