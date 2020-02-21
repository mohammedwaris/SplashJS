/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { Event } from '../events/Event';
import { IEvent } from '../events/iface/IEvent';
import { IButton } from './iface/IButton';
import { IDisplayObjectRenderer } from '../render/display/iface/IDisplayObjectRenderer';
import { IButtonRenderer } from '../render/controls/iface/IButtonRenderer';
import { BaseText } from './BaseText';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class Button extends BaseText implements IButton {
    public constructor(text : string) {
        super("button");
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Button, this));
        super.setText(text);
    }

    public dispatchEvent(event : IEvent) : boolean {
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED_TO_STAGE)) {
            this.originalWidth = (<IButtonRenderer><any>super.getRenderer()).getOriginalWidth();
            if(this.width === 0 && this.originalWidth !== 0) {
                super.setWidth(this.originalWidth);
            }
            this.originalHeight = (<IButtonRenderer><any>super.getRenderer()).getOriginalHeight();
            if(this.height === 0 && this.originalHeight !== 0) {
                super.setHeight(this.originalHeight);
            }
            (<IButtonRenderer><any>super.getRenderer()).refresh();
        }
        return super.dispatchEvent(event);
    }

    /**
     * 
     * @param {number} width
     */
    public setWidth(width : number) {
        super.setWidth(width);
    }

    /**
     * 
     * @return {number}
     */
    public getWidth() : number {
        return super.getWidth();
    }

    /**
     * 
     * @param {number} height
     */
    public setHeight(height : number) {
        super.setHeight(height);
    }

    /**
     * 
     * @return {number}
     */
    public getHeight() : number {
        return super.getHeight();
    }

    /**
     * 
     * @param {number} scaleX
     */
    public setScaleX(scaleX : number) {
        this.scaleX = scaleX;
        super.setWidth(((<number>scaleX|0) * this.originalWidth));
    }

    /**
     * 
     * @return {number}
     */
    public getScaleX() : number {
        return this.scaleX;
    }

    /**
     * 
     * @param {number} scaleY
     */
    public setScaleY(scaleY : number) {
        this.scaleY = scaleY;
        super.setHeight(((<number>scaleY|0) * this.originalHeight));
    }

    /**
     * 
     * @return {number}
     */
    public getScaleY() : number {
        return this.scaleY;
    }

    /**
     * 
     * @param {number} width
     * @param {number} height
     */
    public setSize(width : number, height : number) {
        super.setWidth(width);
        super.setHeight(height);
    }

    /**
     * 
     * @param {number} scaleX
     * @param {number} scaleY
     */
    public setScaleXY(scaleX : number, scaleY : number) {
        this.setScaleX(scaleX);
        this.setScaleY(scaleY);
    }

    public render() {
        super.render();
        if(super.getWidth() !== 0) (<IDisplayObjectRenderer><any>super.getRenderer()).setWidth();
        if(super.getHeight() !== 0) (<IDisplayObjectRenderer><any>super.getRenderer()).setHeight();
    }
}
Button["__class"] = "splashjs.controls.Button";
Button["__interfaces"] = ["splashjs.controls.iface.IButton","splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl","splashjs.controls.iface.IBaseText"];




