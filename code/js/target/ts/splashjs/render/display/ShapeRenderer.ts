/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ColorName } from '../../utils/ColorName';
import { ColorType } from '../../utils/ColorType';
import { IColor } from '../../utils/iface/IColor';
import { IShape } from '../../display/iface/IShape';
import { IShapeRenderer } from './iface/IShapeRenderer';
import { InteractiveObjectRenderer } from './InteractiveObjectRenderer';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';

export abstract class ShapeRenderer extends InteractiveObjectRenderer implements IShapeRenderer {
    childSVGElement : SVGElement;

    public getStrokeColorNameAsString() : string {
        let strokeColorName : string = ColorName.BLACK;
        let strokeColor : IColor = (<IShape><any>super.getRenderObject()).getStrokeColor();
        if(strokeColor.getColorType() === ColorType.NAME) strokeColorName = strokeColor.getColorName(); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(strokeColor.getColorType(), ColorType.HEX)) strokeColorName = strokeColor.getHEX();
        return strokeColorName;
    }

    public getFillColorNameAsString() : string {
        let fillColorName : string = ColorName.BLACK;
        let fillColor : IColor = (<IShape><any>super.getRenderObject()).getFillColor();
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(fillColor.getColorType(), ColorType.NAME)) fillColorName = fillColor.getColorName(); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(fillColor.getColorType(), ColorType.HEX)) fillColorName = fillColor.getHEX();
        return fillColorName;
    }

    public getStrokeWidthAsString() : string {
        let strokeWidth : string = "1";
        strokeWidth = (<IShape><any>super.getRenderObject()).getStrokeWidth() + "";
        return strokeWidth;
    }

    public getSVGElement() : SVGElement {
        return <SVGElement>super.getDOMElement();
    }

    constructor() {
        super();
        if(this.childSVGElement===undefined) this.childSVGElement = null;
    }
}
ShapeRenderer["__class"] = "splashjs.render.display.ShapeRenderer";
ShapeRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.display.iface.IShapeRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




