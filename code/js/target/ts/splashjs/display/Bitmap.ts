/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { IBitmap } from './iface/IBitmap';
import { IBitmapData } from './iface/IBitmapData';
import { IBitmapRenderer } from '../render/display/iface/IBitmapRenderer';
import { DisplayObject } from './DisplayObject';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class Bitmap extends DisplayObject implements IBitmap {
    /*private*/ bitmapData : IBitmapData;

    public constructor(bitmapData? : any) {
        if(((bitmapData != null && (bitmapData["__interfaces"] != null && bitmapData["__interfaces"].indexOf("splashjs.display.iface.IBitmapData") >= 0 || bitmapData.constructor != null && bitmapData.constructor["__interfaces"] != null && bitmapData.constructor["__interfaces"].indexOf("splashjs.display.iface.IBitmapData") >= 0)) || bitmapData === null)) {
            let __args = arguments;
            super();
            if(this.bitmapData===undefined) this.bitmapData = null;
            if(this.bitmapData===undefined) this.bitmapData = null;
            (() => {
                this.bitmapData = bitmapData;
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Bitmap, this));
            })();
        } else if(bitmapData === undefined) {
            let __args = arguments;
            super();
            if(this.bitmapData===undefined) this.bitmapData = null;
            if(this.bitmapData===undefined) this.bitmapData = null;
            (() => {
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Bitmap, this));
            })();
        } else throw new Error('invalid overload');
    }

    public setBitmapData(bitmapData : IBitmapData) {
        this.bitmapData = bitmapData;
    }

    public getBitmapData() : IBitmapData {
        return this.bitmapData;
    }
}
Bitmap["__class"] = "splashjs.display.Bitmap";
Bitmap["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.display.iface.IBitmap"];




