/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { RenderElement } from '../RenderElement';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { ICircleRenderer } from './iface/ICircleRenderer';
import { ShapeRenderer } from './ShapeRenderer';

export class CircleRenderer extends ShapeRenderer implements ICircleRenderer {
    public constructor(renderObject : IEventDispatcher) {
        super();
        super.setRenderObject(renderObject);
        super.setRenderElement(new RenderElement(<SVGElement>document.createElementNS(this.SVGNS, "svg")));
        this.create();
    }

    public create() {
        this.childSVGElement = <SVGCircleElement>document.createElementNS(this.SVGNS, "circle");
        this.setCircleAttributes();
        this.getSVGElement().appendChild(this.childSVGElement);
    }

    public update() {
        this.setCircleAttributes();
    }

    /*private*/ setCircleAttributes() {
        this.childSVGElement.setAttributeNS(null, "r", this.getSVGCircleRadiusText());
        this.childSVGElement.setAttributeNS(null, "cx", this.getSVGCircleCenterXText());
        this.childSVGElement.setAttributeNS(null, "cy", this.getSVGCircleCenterYText());
        this.childSVGElement.setAttributeNS(null, "stroke", this.getSVGShapeStrokeColorNameText());
        this.childSVGElement.setAttributeNS(null, "fill", this.getSVGShapeFillColorNameText());
        this.childSVGElement.setAttributeNS(null, "stroke-width", this.getSVGShapeStrokeWidthText());
        this.getSVGElement().setAttributeNS(null, "height", this.getSVGCircleHeightText());
        this.getSVGElement().setAttributeNS(null, "width", this.getSVGCircleWidthText());
    }

    /**
     * 
     */
    public setRadius() {
        this.childSVGElement.setAttributeNS(null, "r", this.getSVGCircleRadiusText());
        this.childSVGElement.setAttributeNS(null, "cx", this.getSVGCircleCenterXText());
        this.childSVGElement.setAttributeNS(null, "cy", this.getSVGCircleCenterYText());
        this.getSVGElement().setAttributeNS(null, "height", this.getSVGCircleHeightText());
        this.getSVGElement().setAttributeNS(null, "width", this.getSVGCircleWidthText());
    }

    public getOriginalWidth() : number {
        return /* parseInt */parseInt(this.getSVGCircleWidthText());
    }

    public getOriginalHeight() : number {
        return /* parseInt */parseInt(this.getSVGCircleHeightText());
    }
}
CircleRenderer["__class"] = "splashjs.render.display.CircleRenderer";
CircleRenderer["__interfaces"] = ["splashjs.render.display.iface.ICircleRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.display.iface.IShapeRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




