/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { HTMLDomEventName } from '../HTMLDomEventName';
import { IMouseEvent } from '../../events/iface/IMouseEvent';
import { IDisplayObject } from '../../display/iface/IDisplayObject';
import { IDisplayObjectRenderer } from './iface/IDisplayObjectRenderer';
import { EventDispatcherRenderer } from '../events/EventDispatcherRenderer';
import { MouseEvent } from '../../events/MouseEvent';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';

export abstract class DisplayObjectRenderer extends EventDispatcherRenderer implements IDisplayObjectRenderer {
    /*private*/ __splashjs_render_display_DisplayObjectRenderer_htmlElement : HTMLElement;

    public constructor() {
        super();
        if(this.__splashjs_render_display_DisplayObjectRenderer_htmlElement===undefined) this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = null;
    }

    public createEventListeners() {
        super.createEventListeners();
        this.getDOMElement().addEventListener(HTMLDomEventName.MOUSEMOVE, (event) => {
            let mouseEvent : IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_MOVE, null, this.getRenderObject());
            let domMouseEvent : MouseEvent = <MouseEvent>event;
            mouseEvent.setLocalX((<number>domMouseEvent.clientX|0) - (<IDisplayObject><any>this.getRenderObject()).getX());
            mouseEvent.setLocalY((<number>domMouseEvent.clientY|0) - (<IDisplayObject><any>this.getRenderObject()).getY());
            this.getRenderObject().dispatchEvent(mouseEvent);
        });
    }

    public create() {
    }

    public getOriginalWidth() : number {
        return 0;
    }

    public getOriginalHeight() : number {
        return 0;
    }

    public setX() {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
    }

    public setY() {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
    }

    public setXY() {
        this.setX();
        this.setY();
    }

    public setRegX() {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
    }

    public setRegY() {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
    }

    public setRegXY() {
        this.setRegX();
        this.setRegY();
    }

    public setScaleX() {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
    }

    public setScaleY() {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
    }

    public setScaleXY() {
        this.setScaleX();
        this.setScaleY();
    }

    public setRotation() {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
    }

    public setAlpha() {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.opacity = super.getCSSOpacityText();
    }

    public addFilter() {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.setProperty("filter", super.getCSSFilterText());
    }

    public removeFilter() {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.filter = super.getCSSFilterText();
    }

    public setVisible() {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.visibility = super.getCSSVisibilityText();
    }

    public setMouseVisible() {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.cursor = super.getCSSCursorVisibleText();
    }

    public setMouseCursor() {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.cursor = super.getCSSCursorText();
    }

    public setID() {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.id = super.getCSSIDText();
    }

    public setWidth() {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.width = super.getCSSWidthText();
    }

    public setHeight() {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.height = super.getCSSHeightText();
    }

    public getWidth() : number {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        return (<number>this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.clientWidth|0);
    }

    public getHeight() : number {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        return (<number>this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.clientHeight|0);
    }

    public setBorder(value : string) {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.border = value;
    }

    public setPosition(value : string) {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.position = value;
    }

    public setMargin(value : string) {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.margin = value;
    }

    public setPadding(value : string) {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.padding = value;
    }

    public setZIndex(value : string) {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.zIndex = value;
    }

    public setOverflow(value : string) {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.overflow = value;
    }

    public setResize(value : string) {
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.setProperty("resize", value);
    }
}
DisplayObjectRenderer["__class"] = "splashjs.render.display.DisplayObjectRenderer";
DisplayObjectRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




