/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Color } from '../utils/Color';
import { IColor } from '../utils/iface/IColor';
import { InteractiveObject } from './InteractiveObject';
import { IRenderer } from '../render/iface/IRenderer';

export abstract class Shape extends InteractiveObject {
    /*private*/ strokeColor : IColor;

    /*private*/ fillColor : IColor;

    /*private*/ strokeWidth : number;

    public constructor(id : string) {
        super(id);
        if(this.strokeColor===undefined) this.strokeColor = null;
        if(this.fillColor===undefined) this.fillColor = null;
        if(this.strokeWidth===undefined) this.strokeWidth = 0;
        this.strokeWidth = 1;
        this.strokeColor = Color.BLACK_$LI$();
        this.fillColor = Color.BLACK_$LI$();
    }

    public setStrokeWidth(strokeWidth : number) {
        this.strokeWidth = strokeWidth;
        super.getRenderer().update();
    }

    public getStrokeWidth() : number {
        return this.strokeWidth;
    }

    public setStrokeColor(strokeColor : IColor) {
        this.strokeColor = strokeColor;
        super.getRenderer().update();
    }

    public getStrokeColor() : IColor {
        return this.strokeColor;
    }

    public setFillColor(fillColor : IColor) {
        this.fillColor = fillColor;
        super.getRenderer().update();
    }

    public getFillColor() : IColor {
        return this.fillColor;
    }

    /**
     * 
     * @param {number} width
     */
    public setWidth(width : number) {
    }

    /**
     * 
     * @param {number} height
     */
    public setHeight(height : number) {
    }
}
Shape["__class"] = "splashjs.display.Shape";
Shape["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




