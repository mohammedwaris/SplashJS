/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { RenderElement } from '../RenderElement';
import { IDisplayObject } from '../../display/iface/IDisplayObject';
import { IRectangle } from '../../display/iface/IRectangle';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IRectangleRenderer } from './iface/IRectangleRenderer';
import { ShapeRenderer } from './ShapeRenderer';

export class RectangleRenderer extends ShapeRenderer implements IRectangleRenderer {
    public constructor(renderObject : IEventDispatcher) {
        super();
        super.setRenderObject(renderObject);
        super.setRenderElement(new RenderElement(<SVGElement>document.createElementNS(this.SVGNS, "svg")));
    }

    public create() {
        this.childSVGElement = <SVGRectElement>document.createElementNS(this.SVGNS, "rect");
        this.setRectangleAttributes();
        this.getSVGElement().appendChild(this.childSVGElement);
    }

    public update() {
        this.setRectangleAttributes();
    }

    /*private*/ setRectangleAttributes() {
        this.childSVGElement.setAttributeNS(null, "x", "0");
        this.childSVGElement.setAttributeNS(null, "y", "0");
        this.childSVGElement.setAttributeNS(null, "rx", this.getCornerRadiusXAsString());
        this.childSVGElement.setAttributeNS(null, "ry", this.getCornerRadiusYAsString());
        this.childSVGElement.setAttributeNS(null, "height", this.getRectangleHeightAsString());
        this.childSVGElement.setAttributeNS(null, "width", this.getRectangleWidthAsString());
        this.childSVGElement.setAttributeNS(null, "stroke", this.getStrokeColorNameAsString());
        this.childSVGElement.setAttributeNS(null, "fill", this.getFillColorNameAsString());
        this.childSVGElement.setAttributeNS(null, "stroke-width", this.getStrokeWidthAsString());
        this.getSVGElement().setAttributeNS(null, "height", this.getRectangleHeightAsString());
        this.getSVGElement().setAttributeNS(null, "width", this.getRectangleWidthAsString());
        (<IDisplayObject><any>super.getRenderObject()).setWidth(/* parseInt */parseInt(this.getRectangleWidthAsString()));
        (<IDisplayObject><any>super.getRenderObject()).setHeight(/* parseInt */parseInt(this.getRectangleHeightAsString()));
    }

    /*private*/ getCornerRadiusXAsString() : string {
        let cornerRadiusX : string = "0";
        cornerRadiusX = (<IRectangle><any>super.getRenderObject()).getCornerRadiusX() + "";
        return cornerRadiusX;
    }

    /*private*/ getCornerRadiusYAsString() : string {
        let cornerRadiusY : string = "0";
        cornerRadiusY = (<IRectangle><any>super.getRenderObject()).getCornerRadiusY() + "";
        return cornerRadiusY;
    }

    /*private*/ getRectangleWidthAsString() : string {
        let width : string = "0";
        width = (<IRectangle><any>super.getRenderObject()).getRectangleWidth() + "";
        return width;
    }

    /*private*/ getRectangleHeightAsString() : string {
        let height : string = "0";
        height = (<IRectangle><any>super.getRenderObject()).getRectangleHeight() + "";
        return height;
    }

    public setCornerRadiusX() {
        this.childSVGElement.setAttributeNS(null, "rx", this.getCornerRadiusXAsString());
    }

    public setCorcnerRadiusY() {
        this.childSVGElement.setAttributeNS(null, "ry", this.getCornerRadiusYAsString());
    }

    public setRectangleWidth() {
        this.childSVGElement.setAttributeNS(null, "width", this.getRectangleWidthAsString());
    }

    public setRectangleHeight() {
        this.childSVGElement.setAttributeNS(null, "height", this.getRectangleHeightAsString());
    }
}
RectangleRenderer["__class"] = "splashjs.render.display.RectangleRenderer";
RectangleRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.display.iface.IShapeRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.display.iface.IRectangleRenderer"];




