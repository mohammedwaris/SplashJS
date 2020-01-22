/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { Event } from '../events/Event';
import { IEvent } from '../events/iface/IEvent';
import { IRectangle } from './iface/IRectangle';
import { Shape } from './Shape';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';

export class Rectangle extends Shape implements IRectangle {
    /*private*/ rectangleWidth : number;

    /*private*/ rectangleHeight : number;

    /*private*/ cornerRadiusX : number;

    /*private*/ cornerRadiusY : number;

    public constructor(rectangleWidth? : any, rectangleHeight? : any, cornerRadiusX? : any, cornerRadiusY? : any) {
        if(((typeof rectangleWidth === 'number') || rectangleWidth === null) && ((typeof rectangleHeight === 'number') || rectangleHeight === null) && ((typeof cornerRadiusX === 'number') || cornerRadiusX === null) && ((typeof cornerRadiusY === 'number') || cornerRadiusY === null)) {
            let __args = arguments;
            super("rectangle");
            this.rectangleWidth = 0;
            this.rectangleHeight = 0;
            this.cornerRadiusX = 0;
            this.cornerRadiusY = 0;
            (() => {
                this.rectangleWidth = rectangleWidth;
                this.rectangleHeight = rectangleHeight;
                this.cornerRadiusX = cornerRadiusX;
                this.cornerRadiusY = cornerRadiusY;
            })();
        } else if(((typeof rectangleWidth === 'number') || rectangleWidth === null) && ((typeof rectangleHeight === 'number') || rectangleHeight === null) && cornerRadiusX === undefined && cornerRadiusY === undefined) {
            let __args = arguments;
            super("rectangle");
            this.rectangleWidth = 0;
            this.rectangleHeight = 0;
            this.cornerRadiusX = 0;
            this.cornerRadiusY = 0;
            (() => {
                this.rectangleWidth = rectangleWidth;
                this.rectangleHeight = rectangleHeight;
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Rectangle, this));
            })();
        } else throw new Error('invalid overload');
    }

    public getCornerRadiusX() : number {
        return this.cornerRadiusX;
    }

    public setCornerRadiusX(cornerRadiusX : number) {
        this.cornerRadiusX = cornerRadiusX;
    }

    public getCornerRadiusY() : number {
        return this.cornerRadiusY;
    }

    public setCornerRadiusY(cornerRadiusY : number) {
        this.cornerRadiusY = cornerRadiusY;
    }

    public getRectangleWidth() : number {
        return this.rectangleWidth;
    }

    public setRectangleWidth(rectangleWidth : number) {
        this.rectangleWidth = rectangleWidth;
    }

    public getRectangleHeight() : number {
        return this.rectangleHeight;
    }

    public setRectangleHeight(rectangleHeight : number) {
        this.rectangleHeight = rectangleHeight;
    }

    /**
     * 
     * @param {*} event
     * @return {boolean}
     */
    public dispatchEvent(event : IEvent) : boolean {
        let val : boolean = super.dispatchEvent(event);
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED_TO_STAGE)) {
        }
        return val;
    }
}
Rectangle["__class"] = "splashjs.display.Rectangle";
Rectangle["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IInteractiveObject","splashjs.display.iface.IShape","splashjs.lang.iface.ISplashObject","splashjs.display.iface.IRectangle","splashjs.events.iface.IEventDispatcher"];




