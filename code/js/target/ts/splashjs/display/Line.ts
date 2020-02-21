/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { Event } from '../events/Event';
import { IColor } from '../utils/iface/IColor';
import { IEvent } from '../events/iface/IEvent';
import { ILine } from './iface/ILine';
import { ILineRenderer } from '../render/display/iface/ILineRenderer';
import { Shape } from './Shape';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class Line extends Shape implements ILine {
    /*private*/ length : number;

    public constructor(length? : any) {
        if(((typeof length === 'number') || length === null)) {
            let __args = arguments;
            {
                let __args = arguments;
                super("line");
                this.length = 0;
                (() => {
                    super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Line, this));
                })();
            }
            (() => {
                this.length = length;
            })();
        } else if(length === undefined) {
            let __args = arguments;
            super("line");
            this.length = 0;
            (() => {
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Line, this));
            })();
        } else throw new Error('invalid overload');
    }

    public setLength(length : number) {
        this.length = length;
    }

    public getLength() : number {
        return this.length;
    }

    public dispatchEvent(event : IEvent) : boolean {
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED_TO_STAGE)) {
            this.originalWidth = (<ILineRenderer><any>super.getRenderer()).getOriginalWidth();
            this.originalHeight = (<ILineRenderer><any>super.getRenderer()).getOriginalHeight();
            this.width = this.originalWidth;
            this.height = this.originalHeight;
        }
        let val : boolean = super.dispatchEvent(event);
        return val;
    }

    /**
     * 
     * @param {*} fillColor
     */
    public setFillColor(fillColor : IColor) {
    }

    /**
     * 
     * @return {*}
     */
    public getFillColor() : IColor {
        return null;
    }

    /**
     * 
     * @param {number} width
     */
    public setWidth(width : number) {
    }

    public setHeight(height : number) {
    }
}
Line["__class"] = "splashjs.display.Line";
Line["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.display.iface.IShape","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.display.iface.ILine"];




