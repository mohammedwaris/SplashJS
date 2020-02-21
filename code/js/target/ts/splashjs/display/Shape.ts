/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Color } from '../utils/Color';
import { IColor } from '../utils/iface/IColor';
import { ICircle } from './iface/ICircle';
import { IRectangle } from './iface/IRectangle';
import { ILine } from './iface/ILine';
import { IEllipse } from './iface/IEllipse';
import { InteractiveObject } from './InteractiveObject';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { Line } from './Line';
import { Ellipse } from './Ellipse';
import { IRenderer } from '../render/iface/IRenderer';

export abstract class Shape extends InteractiveObject {
    public static CIRCLE : string = "circle";

    public static RECTANGLE : string = "rectangle";

    public static LINE : string = "line";

    public static ELLIPSE : string = "ellipse";

    /*private*/ strokeColor : IColor = Color.BLACK_$LI$();

    /*private*/ fillColor : IColor = Color.BLACK_$LI$();

    /*private*/ strokeWidth : number = 1;

    public static createCircle$() : ICircle {
        let circle : ICircle = new Circle();
        return circle;
    }

    public static createCircle$int(radius : number) : ICircle {
        let circle : ICircle = new Circle(radius);
        return circle;
    }

    public static createCircle(radius? : any) : any {
        if(((typeof radius === 'number') || radius === null)) {
            return <any>Shape.createCircle$int(radius);
        } else if(radius === undefined) {
            return <any>Shape.createCircle$();
        } else throw new Error('invalid overload');
    }

    public static createRectangle$() : IRectangle {
        let rectangle : IRectangle = new Rectangle();
        return rectangle;
    }

    public static createRectangle$int$int(rectangleWidth : number, rectangleHeight : number) : IRectangle {
        let rectangle : IRectangle = new Rectangle(rectangleWidth, rectangleHeight);
        return rectangle;
    }

    public static createRectangle$int$int$int$int(rectangleWidth : number, rectangleHeight : number, cornerRadiusX : number, cornerRadiusY : number) : IRectangle {
        let rectangle : IRectangle = new Rectangle(rectangleWidth, rectangleHeight, cornerRadiusX, cornerRadiusY);
        return rectangle;
    }

    public static createRectangle(rectangleWidth? : any, rectangleHeight? : any, cornerRadiusX? : any, cornerRadiusY? : any) : any {
        if(((typeof rectangleWidth === 'number') || rectangleWidth === null) && ((typeof rectangleHeight === 'number') || rectangleHeight === null) && ((typeof cornerRadiusX === 'number') || cornerRadiusX === null) && ((typeof cornerRadiusY === 'number') || cornerRadiusY === null)) {
            return <any>Shape.createRectangle$int$int$int$int(rectangleWidth, rectangleHeight, cornerRadiusX, cornerRadiusY);
        } else if(((typeof rectangleWidth === 'number') || rectangleWidth === null) && ((typeof rectangleHeight === 'number') || rectangleHeight === null) && cornerRadiusX === undefined && cornerRadiusY === undefined) {
            return <any>Shape.createRectangle$int$int(rectangleWidth, rectangleHeight);
        } else if(rectangleWidth === undefined && rectangleHeight === undefined && cornerRadiusX === undefined && cornerRadiusY === undefined) {
            return <any>Shape.createRectangle$();
        } else throw new Error('invalid overload');
    }

    public static createLine$() : ILine {
        let line : ILine = new Line();
        return line;
    }

    public static createLine$int(length : number) : ILine {
        let line : ILine = new Line(length);
        return line;
    }

    public static createLine(length? : any) : any {
        if(((typeof length === 'number') || length === null)) {
            return <any>Shape.createLine$int(length);
        } else if(length === undefined) {
            return <any>Shape.createLine$();
        } else throw new Error('invalid overload');
    }

    public static createEllipse$() : IEllipse {
        let ellipse : IEllipse = new Ellipse();
        return ellipse;
    }

    public static createEllipse$int$int(radiusX : number, radiusY : number) : IEllipse {
        let ellipse : IEllipse = new Ellipse(radiusX, radiusY);
        return ellipse;
    }

    public static createEllipse(radiusX? : any, radiusY? : any) : any {
        if(((typeof radiusX === 'number') || radiusX === null) && ((typeof radiusY === 'number') || radiusY === null)) {
            return <any>Shape.createEllipse$int$int(radiusX, radiusY);
        } else if(radiusX === undefined && radiusY === undefined) {
            return <any>Shape.createEllipse$();
        } else throw new Error('invalid overload');
    }

    public constructor(id : string) {
        super(id);
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
     * @return {number}
     */
    public getWidth() : number {
        return super.getRenderer().getOriginalWidth();
    }

    /**
     * 
     * @return {number}
     */
    public getHeight() : number {
        return super.getRenderer().getOriginalHeight();
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
Shape["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




