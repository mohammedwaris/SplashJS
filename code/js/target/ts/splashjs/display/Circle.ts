/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { Event } from '../events/Event';
import { IEvent } from '../events/iface/IEvent';
import { ICircle } from './iface/ICircle';
import { ICircleRenderer } from '../render/display/iface/ICircleRenderer';
import { Shape } from './Shape';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class Circle extends Shape implements ICircle {
    /*private*/ radius : number = 50;

    public constructor(radius : number) {
        super("circle");
        this.radius = radius;
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Circle, this));
    }

    public dispatchEvent(event : IEvent) : boolean {
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED_TO_STAGE)) {
            this.originalWidth = (<ICircleRenderer><any>super.getRenderer()).getOriginalWidth();
            this.originalHeight = (<ICircleRenderer><any>super.getRenderer()).getOriginalHeight();
            this.width = this.originalWidth;
            this.height = this.originalHeight;
        }
        return super.dispatchEvent(event);
    }

    public setRadius(radius : number) {
        this.radius = radius;
        (<ICircleRenderer><any>super.getRenderer()).setRadius();
        this.originalWidth = (<ICircleRenderer><any>super.getRenderer()).getOriginalWidth();
        this.originalHeight = (<ICircleRenderer><any>super.getRenderer()).getOriginalHeight();
    }

    public getRadius() : number {
        return this.radius;
    }
}
Circle["__class"] = "splashjs.display.Circle";
Circle["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IInteractiveObject","splashjs.display.iface.IShape","splashjs.lang.iface.ISplashObject","splashjs.display.iface.ICircle","splashjs.events.iface.IEventDispatcher"];




