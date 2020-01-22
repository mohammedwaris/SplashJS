/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Event } from '../events/Event';
import { ColorType } from '../utils/ColorType';
import { ColorName } from '../utils/ColorName';
import { IColor } from '../utils/iface/IColor';
import { MouseEvent } from '../events/MouseEvent';
import { IDisplayObject } from '../display/iface/IDisplayObject';
import { IShape } from '../display/iface/IShape';
import { ILine } from '../display/iface/ILine';
import { ICircle } from '../display/iface/ICircle';
import { IRenderer } from './iface/IRenderer';
import { IRenderElement } from './iface/IRenderElement';
import { IEventDispatcher } from '../events/iface/IEventDispatcher';
import { IEvent } from '../events/iface/IEvent';
import { IMouseEvent } from '../events/iface/IMouseEvent';
import { IDropShadowFilter } from '../filters/iface/IDropShadowFilter';
import { IBlurFilter } from '../filters/iface/IBlurFilter';
import { IFilter } from '../filters/iface/IFilter';
import { FilterType } from '../filters/FilterType';
import { MouseCursorType } from '../ui/MouseCursorType';
import { MouseCursor } from '../ui/MouseCursor';
import { IMouseCursor } from '../ui/iface/IMouseCursor';
import { HTMLDomEventName } from './HTMLDomEventName';
import { RenderElement } from './RenderElement';

export abstract class Renderer implements IRenderer {
    SVGNS : string = "http://www.w3.org/2000/svg";

    UNIT : string = "px";

    ENDLINE_CHAR : string = "\r\n";

    IMAGES_FOLDER_PATH : string = "images/";

    SOUNDS_FOLDER_PATH : string = "sounds/";

    VIDEOS_FOLDER_PATH : string = "videos/";

    renderObjectID : string;

    renderObject : IEventDispatcher;

    renderElement : IRenderElement;

    setRenderObject(renderObject : IEventDispatcher) {
        this.renderObject = renderObject;
        this.renderObjectID = renderObject.getUniqueID();
    }

    public getRenderObjectID() : string {
        return this.renderObjectID;
    }

    public getRenderObject() : IEventDispatcher {
        return this.renderObject;
    }

    public setRenderElement(renderElement : IRenderElement) {
        this.renderElement = renderElement;
        this.createEventListeners();
    }

    public getRenderElement() : IRenderElement {
        return this.renderElement;
    }

    public create() {
    }

    public update() {
    }

    public refresh() {
    }

    public getDOMElement() : Element {
        let element : Element = this.renderElement.getDOMElement();
        return element;
    }

    public createEventListeners() {
        let htmlElement : HTMLElement = <HTMLElement>this.getDOMElement();
        htmlElement.addEventListener(HTMLDomEventName.LOAD, (event) => {
            let evt : IEvent = new splashjs.events.Event(splashjs.events.Event.LOADED);
            this.getRenderObject().dispatchEvent(evt);
        });
        htmlElement.addEventListener(HTMLDomEventName.CLICK, (event) => {
            let mouseEvent : IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.CLICK, null, this.getRenderObject());
            this.getRenderObject().dispatchEvent(mouseEvent);
        });
        htmlElement.addEventListener(HTMLDomEventName.DBLCLICK, (event) => {
            let mouseEvent : IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.DOUBLE_CLICK, null, this.getRenderObject());
            this.getRenderObject().dispatchEvent(mouseEvent);
        });
        htmlElement.addEventListener(HTMLDomEventName.MOUSEMOVE, (event) => {
            let mouseEvent : IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_MOVE, null, this.getRenderObject());
            this.getRenderObject().dispatchEvent(mouseEvent);
        });
        htmlElement.addEventListener(HTMLDomEventName.MOUSEENTER, (event) => {
            let mouseEvent : IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_ENTER, null, this.getRenderObject());
            this.getRenderObject().dispatchEvent(mouseEvent);
        });
        htmlElement.addEventListener(HTMLDomEventName.MOUSELEAVE, (event) => {
            let mouseEvent : IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_LEAVE, null, this.getRenderObject());
            this.getRenderObject().dispatchEvent(mouseEvent);
        });
        htmlElement.addEventListener(HTMLDomEventName.MOUSEOVER, (event) => {
            let mouseEvent : IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_OVER, null, this.getRenderObject());
            this.getRenderObject().dispatchEvent(mouseEvent);
        });
        htmlElement.addEventListener(HTMLDomEventName.MOUSEOUT, (event) => {
            let mouseEvent : IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_OUT, null, this.getRenderObject());
            this.getRenderObject().dispatchEvent(mouseEvent);
        });
        htmlElement.addEventListener(HTMLDomEventName.MOUSEDOWN, (event) => {
            let mouseEvent : IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_DOWN, null, this.getRenderObject());
            this.getRenderObject().dispatchEvent(mouseEvent);
        });
        htmlElement.addEventListener(HTMLDomEventName.MOUSEUP, (event) => {
            let mouseEvent : IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_UP, null, this.getRenderObject());
            this.getRenderObject().dispatchEvent(mouseEvent);
        });
    }

    public appendChild(childRenderer : IRenderer) {
        let childRenderElement : IRenderElement = childRenderer.getRenderElement();
        let childElement : Element = (<RenderElement><any>childRenderElement).getDOMElement();
        this.getDOMElement().insertBefore(childElement, this.getDOMElement().firstChild);
    }

    public removeChild(childRenderer : IRenderer) {
        let childRenderElement : IRenderElement = childRenderer.getRenderElement();
        let childElement : Element = (<RenderElement><any>childRenderElement).getDOMElement();
        this.getDOMElement().removeChild(childElement);
    }

    public getOriginalWidth() : number {
        return (<number>(<HTMLElement>this.getDOMElement()).clientWidth|0);
    }

    public getOriginalHeight() : number {
        return (<number>(<HTMLElement>this.getDOMElement()).clientHeight|0);
    }

    public appendToBody() {
        document.body.appendChild(this.getDOMElement());
    }

    /**
     * CSS methods
     * @return {string}
     */
    getCSSIDText() : string {
        return (<IDisplayObject><any>this.getRenderObject()).getUniqueID();
    }

    getCSSTransformText() : string {
        let renderObject : IDisplayObject = <IDisplayObject><any>this.getRenderObject();
        let scale : string = "scale(" + renderObject.getScaleX() + ", " + renderObject.getScaleY() + ")";
        let rotate : string = "rotate(" + renderObject.getRotation() + "deg)";
        let skew : string = "skew(0deg, 0deg)";
        let transformText : string = scale + " " + skew + " " + rotate;
        return transformText;
    }

    getCSSTransformOriginText() : string {
        let renderObject : IDisplayObject = <IDisplayObject><any>this.getRenderObject();
        let text : string = renderObject.getRegX() + this.UNIT + " " + renderObject.getRegY() + this.UNIT;
        return text;
    }

    getCSSLeftText() : string {
        let renderObject : IDisplayObject = <IDisplayObject><any>this.getRenderObject();
        return (renderObject.getX() - renderObject.getRegX()) + this.UNIT;
    }

    getCSSTopText() : string {
        let renderObject : IDisplayObject = <IDisplayObject><any>this.getRenderObject();
        return (renderObject.getY() - renderObject.getRegY()) + this.UNIT;
    }

    getCSSWidthText() : string {
        let renderObject : IDisplayObject = <IDisplayObject><any>this.getRenderObject();
        return renderObject.getWidth() + this.UNIT;
    }

    getCSSHeightText() : string {
        let renderObject : IDisplayObject = <IDisplayObject><any>this.getRenderObject();
        return renderObject.getHeight() + this.UNIT;
    }

    getCSSOpacityText() : string {
        let renderObject : IDisplayObject = <IDisplayObject><any>this.getRenderObject();
        return renderObject.getAlpha() + "";
    }

    getCSSVisibilityText() : string {
        let renderObject : IDisplayObject = <IDisplayObject><any>this.getRenderObject();
        let text : string;
        if(renderObject.getVisible() === true) text = "visible"; else text = "hidden";
        return text;
    }

    getCSSCursorVisibleText() : string {
        let renderObject : IDisplayObject = <IDisplayObject><any>this.getRenderObject();
        let mouseCursor : IMouseCursor = renderObject.getMouseCursor();
        let text : string = this.getCSSCursorText();
        if(renderObject.getMouseVisible() === false) text = "none";
        return text;
    }

    getCSSCursorText() : string {
        let renderObject : IDisplayObject = <IDisplayObject><any>this.getRenderObject();
        let mouseCursor : IMouseCursor = renderObject.getMouseCursor();
        let text : string = MouseCursor.AUTO_$LI$().getMouseCursorName();
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(mouseCursor.getMouseCursorType(), MouseCursorType.SYSTEM)) {
            text = mouseCursor.getMouseCursorName();
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(mouseCursor.getMouseCursorType(), MouseCursorType.IMAGE)) {
            let imagePath : string = mouseCursor.getMouseCursorImagePath();
            text = "url(" + this.IMAGES_FOLDER_PATH + imagePath + "), auto";
        }
        return text;
    }

    getCSSFilterText() : string {
        let renderObject : IDisplayObject = <IDisplayObject><any>this.getRenderObject();
        let filterText : string = "";
        {
            let array129 = renderObject.getFilters();
            for(let index128=0; index128 < array129.length; index128++) {
                let filter = array129[index128];
                {
                    if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(filter.getType(), FilterType.BLUR)) filterText += "blur(" + (<IBlurFilter><any>filter).getBlur() + "px) ";
                    if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(filter.getType(), FilterType.DROP_SHADOW)) {
                        let dropShadowFilter : IDropShadowFilter = <IDropShadowFilter><any>filter;
                        filterText += "drop-shadow(" + dropShadowFilter.getHorizontalShadow() + "px ";
                        filterText += dropShadowFilter.getVerticalShadow() + "px ";
                        filterText += dropShadowFilter.getBlur() + "px ";
                        filterText += dropShadowFilter.getSpread() + "px)";
                    }
                }
            }
        }
        return filterText;
    }

    getSVGCircleRadiusText() : string {
        let radius : string = "10";
        radius = (<ICircle><any>this.renderObject).getRadius() + "";
        return radius;
    }

    getSVGCircleCenterXText() : string {
        let cx : string = "0";
        let strokeWidth : number = (<IShape><any>this.renderObject).getStrokeWidth();
        let radius : number = (<ICircle><any>this.renderObject).getRadius();
        cx = Math.ceil((<number>(radius + <number>strokeWidth / 2))) + "";
        return cx;
    }

    getSVGCircleCenterYText() : string {
        let cy : string = "0";
        let strokeWidth : number = (<IShape><any>this.renderObject).getStrokeWidth();
        let radius : number = (<ICircle><any>this.renderObject).getRadius();
        cy = Math.ceil((<number>(radius + <number>strokeWidth / 2))) + "";
        return cy;
    }

    getSVGCircleWidthText() : string {
        let width : string = "0";
        let radius : number = (<ICircle><any>this.renderObject).getRadius();
        width = Math.ceil(<number>(/* parseDouble */parseFloat(this.getSVGCircleCenterXText()) * 2)) + "";
        return width;
    }

    getSVGCircleHeightText() : string {
        let height : string = "0";
        let radius : number = (<ICircle><any>this.renderObject).getRadius();
        height = Math.ceil(<number>(/* parseDouble */parseFloat(this.getSVGCircleCenterYText()) * 2)) + "";
        return height;
    }

    getSVGLineX2Text() : string {
        let x2 : string = "0";
        let length : number = (<ILine><any>this.renderObject).getLength();
        x2 = length + "";
        return x2;
    }

    getSVGLineY2Text() : string {
        return this.getSVGLineY1Text();
    }

    getSVGLineY1Text() : string {
        let y1 : string = (/* parseInt */parseInt(this.getSVGShapeStrokeWidthText()) / 2|0) + "";
        return y1;
    }

    getSVGLineWidthText() : string {
        let width : string = "0";
        width = (<ILine><any>this.renderObject).getLength() + "";
        return width;
    }

    getSVGLineHeightText() : string {
        let height : string = "0";
        height = this.getSVGShapeStrokeWidthText();
        return height;
    }

    getSVGShapeStrokeColorNameText() : string {
        let strokeColorName : string = ColorName.BLACK;
        let strokeColor : IColor = (<IShape><any>this.renderObject).getStrokeColor();
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(strokeColor.getColorType(), ColorType.NAME)) strokeColorName = strokeColor.getColorName(); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(strokeColor.getColorType(), ColorType.HEX)) strokeColorName = strokeColor.getHEX();
        return strokeColorName;
    }

    getSVGShapeFillColorNameText() : string {
        let fillColorName : string = ColorName.BLACK;
        let fillColor : IColor = (<IShape><any>this.renderObject).getFillColor();
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(fillColor.getColorType(), ColorType.NAME)) fillColorName = fillColor.getColorName(); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(fillColor.getColorType(), ColorType.HEX)) fillColorName = fillColor.getHEX();
        return fillColorName;
    }

    getSVGShapeStrokeWidthText() : string {
        let strokeWidth : string = "1";
        strokeWidth = (<IShape><any>this.renderObject).getStrokeWidth() + "";
        return strokeWidth;
    }

    constructor() {
        if(this.renderObjectID===undefined) this.renderObjectID = null;
        if(this.renderObject===undefined) this.renderObject = null;
        if(this.renderElement===undefined) this.renderElement = null;
    }
}
Renderer["__class"] = "splashjs.render.Renderer";
Renderer["__interfaces"] = ["splashjs.render.iface.IRenderer"];




