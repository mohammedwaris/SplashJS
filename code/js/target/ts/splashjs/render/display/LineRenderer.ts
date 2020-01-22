/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { RenderElement } from '../RenderElement';
import { IDisplayObject } from '../../display/iface/IDisplayObject';
import { ILine } from '../../display/iface/ILine';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { ShapeRenderer } from './ShapeRenderer';

export class LineRenderer extends ShapeRenderer {
    public constructor(renderObject : IEventDispatcher) {
        super();
        super.setRenderObject(renderObject);
        super.setRenderElement(new RenderElement(<SVGElement>document.createElementNS(this.SVGNS, "svg")));
        this.create();
    }

    /**
     * 
     */
    public create() {
        this.childSVGElement = <SVGLineElement>document.createElementNS(this.SVGNS, "line");
        this.setLineAttributes();
        super.getSVGElement().appendChild(this.childSVGElement);
    }

    public update() {
        if(this.childSVGElement != null) {
            this.setLineAttributes();
        }
    }

    /*private*/ setLineAttributes() {
        this.childSVGElement.setAttributeNS(null, "x1", "0");
        this.childSVGElement.setAttributeNS(null, "y1", this.getSVGLineY1Text());
        this.childSVGElement.setAttributeNS(null, "x2", this.getSVGLineX2Text());
        this.childSVGElement.setAttributeNS(null, "y2", this.getSVGLineY2Text());
        this.childSVGElement.setAttributeNS(null, "stroke", this.getSVGShapeStrokeColorNameText());
        this.childSVGElement.setAttributeNS(null, "stroke-width", this.getSVGShapeStrokeWidthText());
        this.getSVGElement().setAttributeNS(null, "height", this.getSVGLineHeightText());
        this.getSVGElement().setAttributeNS(null, "width", this.getSVGLineWidthText());
        (<IDisplayObject><any>super.getRenderObject()).setWidth(/* parseInt */parseInt(this.getWidthAsString()));
        (<IDisplayObject><any>super.getRenderObject()).setHeight(/* parseInt */parseInt(this.getHeightAsString()));
    }

    public getOriginalWidth() : number {
        return /* parseInt */parseInt(this.getSVGLineWidthText());
    }

    public getOriginalHeight() : number {
        return /* parseInt */parseInt(this.getSVGLineHeightText());
    }

    /*private*/ getWidthAsString() : string {
        let width : string = "0";
        width = (<ILine><any>super.getRenderObject()).getLength() + "";
        return width;
    }

    /*private*/ getHeightAsString() : string {
        let height : string = "0";
        height = this.getStrokeWidthAsString();
        return height;
    }
}
LineRenderer["__class"] = "splashjs.render.display.LineRenderer";
LineRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.display.iface.IShapeRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




