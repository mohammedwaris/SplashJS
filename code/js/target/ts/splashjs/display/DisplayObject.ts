/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { EventDispatcher } from '../events/EventDispatcher';
import { Event } from '../events/Event';
import { IEvent } from '../events/iface/IEvent';
import { IDisplayObject } from './iface/IDisplayObject';
import { IStage } from './iface/IStage';
import { IDisplayObjectContainer } from './iface/IDisplayObjectContainer';
import { IFilter } from '../filters/iface/IFilter';
import { IMouseCursor } from '../ui/iface/IMouseCursor';
import { MouseCursor } from '../ui/MouseCursor';
import { Point } from '../geom/Point';
import { IPoint } from '../geom/iface/IPoint';
import { IDisplayObjectRenderer } from '../render/display/iface/IDisplayObjectRenderer';
import { IBitmapDrawable } from './iface/IBitmapDrawable';
import { IRenderer } from '../render/iface/IRenderer';

export abstract class DisplayObject extends EventDispatcher implements IDisplayObject, IBitmapDrawable {
    /*private*/ x : number;

    /*private*/ y : number;

    width : number;

    height : number;

    /*private*/ regX : number;

    /*private*/ regY : number;

    scaleX : number;

    scaleY : number;

    /*private*/ rotation : number;

    /*private*/ visible : boolean;

    /*private*/ alpha : number;

    /*private*/ name : string;

    parent : IDisplayObjectContainer;

    /*private*/ mouseX : number;

    /*private*/ mouseY : number;

    /*private*/ mouseVisible : boolean;

    /*private*/ mouseCursor : IMouseCursor;

    originalWidth : number;

    originalHeight : number;

    /*private*/ filters : Array<IFilter>;

    public constructor(id? : any) {
        if(((typeof id === 'string') || id === null)) {
            let __args = arguments;
            super(id);
            if(this.x===undefined) this.x = 0;
            if(this.y===undefined) this.y = 0;
            if(this.width===undefined) this.width = 0;
            if(this.height===undefined) this.height = 0;
            if(this.regX===undefined) this.regX = null;
            if(this.regY===undefined) this.regY = null;
            if(this.scaleX===undefined) this.scaleX = 0;
            if(this.scaleY===undefined) this.scaleY = 0;
            if(this.rotation===undefined) this.rotation = 0;
            if(this.visible===undefined) this.visible = null;
            if(this.alpha===undefined) this.alpha = null;
            if(this.name===undefined) this.name = null;
            if(this.parent===undefined) this.parent = null;
            if(this.mouseX===undefined) this.mouseX = null;
            if(this.mouseY===undefined) this.mouseY = null;
            if(this.mouseVisible===undefined) this.mouseVisible = false;
            if(this.mouseCursor===undefined) this.mouseCursor = null;
            if(this.originalWidth===undefined) this.originalWidth = 0;
            if(this.originalHeight===undefined) this.originalHeight = 0;
            if(this.filters===undefined) this.filters = null;
            if(this.x===undefined) this.x = 0;
            if(this.y===undefined) this.y = 0;
            if(this.width===undefined) this.width = 0;
            if(this.height===undefined) this.height = 0;
            if(this.regX===undefined) this.regX = null;
            if(this.regY===undefined) this.regY = null;
            if(this.scaleX===undefined) this.scaleX = 0;
            if(this.scaleY===undefined) this.scaleY = 0;
            if(this.rotation===undefined) this.rotation = 0;
            if(this.visible===undefined) this.visible = null;
            if(this.alpha===undefined) this.alpha = null;
            if(this.name===undefined) this.name = null;
            if(this.parent===undefined) this.parent = null;
            if(this.mouseX===undefined) this.mouseX = null;
            if(this.mouseY===undefined) this.mouseY = null;
            if(this.mouseVisible===undefined) this.mouseVisible = false;
            if(this.mouseCursor===undefined) this.mouseCursor = null;
            if(this.originalWidth===undefined) this.originalWidth = 0;
            if(this.originalHeight===undefined) this.originalHeight = 0;
            if(this.filters===undefined) this.filters = null;
            (() => {
                this.x = 0;
                this.y = 0;
                this.width = 0;
                this.height = 0;
                this.regX = 0;
                this.regY = 0;
                this.scaleX = 1.0;
                this.scaleY = 1.0;
                this.rotation = 0.0;
                this.visible = true;
                this.alpha = 1.0;
                this.name = null;
                this.parent = null;
                this.mouseX = null;
                this.mouseY = null;
                this.mouseVisible = true;
                this.mouseCursor = MouseCursor.AUTO_$LI$();
                this.filters = <any>([]);
            })();
        } else if(id === undefined) {
            let __args = arguments;
            {
                let __args = arguments;
                let id : any = "splashjs";
                super(id);
                if(this.x===undefined) this.x = 0;
                if(this.y===undefined) this.y = 0;
                if(this.width===undefined) this.width = 0;
                if(this.height===undefined) this.height = 0;
                if(this.regX===undefined) this.regX = null;
                if(this.regY===undefined) this.regY = null;
                if(this.scaleX===undefined) this.scaleX = 0;
                if(this.scaleY===undefined) this.scaleY = 0;
                if(this.rotation===undefined) this.rotation = 0;
                if(this.visible===undefined) this.visible = null;
                if(this.alpha===undefined) this.alpha = null;
                if(this.name===undefined) this.name = null;
                if(this.parent===undefined) this.parent = null;
                if(this.mouseX===undefined) this.mouseX = null;
                if(this.mouseY===undefined) this.mouseY = null;
                if(this.mouseVisible===undefined) this.mouseVisible = false;
                if(this.mouseCursor===undefined) this.mouseCursor = null;
                if(this.originalWidth===undefined) this.originalWidth = 0;
                if(this.originalHeight===undefined) this.originalHeight = 0;
                if(this.filters===undefined) this.filters = null;
                if(this.x===undefined) this.x = 0;
                if(this.y===undefined) this.y = 0;
                if(this.width===undefined) this.width = 0;
                if(this.height===undefined) this.height = 0;
                if(this.regX===undefined) this.regX = null;
                if(this.regY===undefined) this.regY = null;
                if(this.scaleX===undefined) this.scaleX = 0;
                if(this.scaleY===undefined) this.scaleY = 0;
                if(this.rotation===undefined) this.rotation = 0;
                if(this.visible===undefined) this.visible = null;
                if(this.alpha===undefined) this.alpha = null;
                if(this.name===undefined) this.name = null;
                if(this.parent===undefined) this.parent = null;
                if(this.mouseX===undefined) this.mouseX = null;
                if(this.mouseY===undefined) this.mouseY = null;
                if(this.mouseVisible===undefined) this.mouseVisible = false;
                if(this.mouseCursor===undefined) this.mouseCursor = null;
                if(this.originalWidth===undefined) this.originalWidth = 0;
                if(this.originalHeight===undefined) this.originalHeight = 0;
                if(this.filters===undefined) this.filters = null;
                (() => {
                    this.x = 0;
                    this.y = 0;
                    this.width = 0;
                    this.height = 0;
                    this.regX = 0;
                    this.regY = 0;
                    this.scaleX = 1.0;
                    this.scaleY = 1.0;
                    this.rotation = 0.0;
                    this.visible = true;
                    this.alpha = 1.0;
                    this.name = null;
                    this.parent = null;
                    this.mouseX = null;
                    this.mouseY = null;
                    this.mouseVisible = true;
                    this.mouseCursor = MouseCursor.AUTO_$LI$();
                    this.filters = <any>([]);
                })();
            }
        } else throw new Error('invalid overload');
    }

    public getX() : number {
        return this.x;
    }

    public setX(x : number) {
        this.x = x;
        (<IDisplayObjectRenderer><any>super.getRenderer()).setX();
    }

    public getY() : number {
        return this.y;
    }

    public setY(y : number) {
        this.y = y;
        (<IDisplayObjectRenderer><any>super.getRenderer()).setY();
    }

    public setXY(x : number, y : number) {
        this.setX(x);
        this.setY(y);
    }

    public getWidth() : number {
        return this.width;
    }

    public setWidth(width : number) {
        this.width = width;
        (<IDisplayObjectRenderer><any>super.getRenderer()).setWidth();
    }

    public getHeight() : number {
        return this.height;
    }

    public setHeight(height : number) {
        this.height = height;
        (<IDisplayObjectRenderer><any>super.getRenderer()).setHeight();
    }

    public setSize(width : number, height : number) {
        this.setWidth(width);
        this.setHeight(height);
    }

    public getRegX() : number {
        return this.regX;
    }

    public setRegX(regX : number) {
        this.regX = regX;
        (<IDisplayObjectRenderer><any>super.getRenderer()).setRegX();
    }

    public getRegY() : number {
        return this.regY;
    }

    public setRegY(regY : number) {
        this.regY = regY;
        (<IDisplayObjectRenderer><any>super.getRenderer()).setRegX();
    }

    public setRegXY(regX : number, regY : number) {
        this.setRegX(regX);
        this.setRegY(regY);
    }

    public getScaleX() : number {
        return this.scaleX;
    }

    public setScaleX(scaleX : number) {
        this.scaleX = scaleX;
        (<IDisplayObjectRenderer><any>super.getRenderer()).setScaleX();
    }

    public getScaleY() : number {
        return this.scaleY;
    }

    public setScaleY(scaleY : number) {
        this.scaleY = scaleY;
        (<IDisplayObjectRenderer><any>super.getRenderer()).setScaleY();
    }

    public setScaleXY(scaleX : number, scaleY : number) {
        this.setScaleX(scaleX);
        this.setScaleY(scaleY);
    }

    public getRotation() : number {
        return this.rotation;
    }

    public setRotation(rotation : number) {
        this.rotation = rotation;
        (<IDisplayObjectRenderer><any>super.getRenderer()).setRotation();
    }

    public getVisible() : boolean {
        return this.visible;
    }

    public setVisible(visible : boolean) {
        this.visible = visible;
        (<IDisplayObjectRenderer><any>super.getRenderer()).setVisible();
    }

    public getAlpha() : number {
        return this.alpha;
    }

    public setAlpha(alpha : number) {
        this.alpha = alpha;
        (<IDisplayObjectRenderer><any>super.getRenderer()).setAlpha();
    }

    public getName() : string {
        return this.name;
    }

    public setName(name : string) {
        this.name = name;
    }

    public getParent() : IDisplayObjectContainer {
        return this.parent;
    }

    public getMouseX() : number {
        return this.mouseX;
    }

    public getMouseY() : number {
        return this.mouseY;
    }

    public setMouseVisible(mouseVisible : boolean) {
        this.mouseVisible = mouseVisible;
        (<IDisplayObjectRenderer><any>super.getRenderer()).setMouseVisible();
    }

    public getMouseVisible() : boolean {
        return this.mouseVisible;
    }

    public setMouseCursor(mouseCursor : IMouseCursor) {
        this.mouseCursor = mouseCursor;
        (<IDisplayObjectRenderer><any>super.getRenderer()).setMouseCursor();
    }

    public getMouseCursor() : IMouseCursor {
        return this.mouseCursor;
    }

    public addFilter(filter : IFilter) {
        /* add */(this.filters.push(filter)>0);
        (<IDisplayObjectRenderer><any>super.getRenderer()).addFilter();
    }

    public removeFilter(filter : IFilter) {
        /* remove */(a => { let index = a.indexOf(filter); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.filters);
        (<IDisplayObjectRenderer><any>super.getRenderer()).removeFilter();
    }

    public removeAllFilters() {
        /* clear */(this.filters.length = 0);
        (<IDisplayObjectRenderer><any>super.getRenderer()).removeFilter();
    }

    public hasFilter(filter : IFilter) : boolean {
        return /* contains */(this.filters.indexOf(<any>(filter)) >= 0);
    }

    public getAllFilters() : Array<IFilter> {
        return this.filters;
    }

    public localToGlobal(localPoint : IPoint) : IPoint {
        let globalPoint : IPoint = new Point();
        let x : number = this.x + localPoint.getX();
        let y : number = this.y + localPoint.getY();
        globalPoint.setX(x);
        globalPoint.setY(y);
        return globalPoint;
    }

    public globalToLocal(globalPoint : IPoint) : IPoint {
        let localPoint : IPoint = new Point();
        localPoint.setX(globalPoint.getX() - this.x);
        localPoint.setY(globalPoint.getY() - this.y);
        return localPoint;
    }

    public hitTestObject(displayObject : IDisplayObject) : boolean {
        let hit : boolean = false;
        let dox1 : number = (<number>(displayObject.getX() * displayObject.getStage().getScaleX())|0);
        let doy1 : number = (<number>(displayObject.getY() * displayObject.getStage().getScaleY())|0);
        let dox2 : number = (<number>(displayObject.getX() * displayObject.getStage().getScaleX() + displayObject.getWidth() * displayObject.getStage().getScaleX())|0);
        let doy2 : number = (<number>(displayObject.getY() * displayObject.getStage().getScaleY() + displayObject.getHeight() * displayObject.getStage().getScaleY())|0);
        let myx1 : number = (<number>(this.getX() * this.getStage().getScaleX())|0);
        let myy1 : number = (<number>(this.getY() * this.getStage().getScaleY())|0);
        let myx2 : number = (<number>(this.getX() * this.getStage().getScaleX() + this.getWidth() * this.getStage().getScaleX())|0);
        let myy2 : number = (<number>(this.getY() * this.getStage().getScaleY() + this.getHeight() * this.getStage().getScaleY())|0);
        let displayObjectGlobalStartPoint : IPoint = displayObject.localToGlobal(new Point(dox1, doy1));
        let displayObjectGlobalEndPoint : IPoint = displayObject.localToGlobal(new Point(dox2, doy2));
        let myGlobalStartPoint : IPoint = this.localToGlobal(new Point(myx1, myy1));
        let myGlobalEndPoint : IPoint = this.localToGlobal(new Point(myx2, myy2));
        let displayObjectStartX : number = displayObjectGlobalStartPoint.getX();
        let displayObjectStartY : number = displayObjectGlobalStartPoint.getY();
        let displayObjectEndX : number = displayObjectGlobalEndPoint.getX();
        let displayObjectEndY : number = displayObjectGlobalEndPoint.getY();
        let myStartX : number = myGlobalStartPoint.getX();
        let myStartY : number = myGlobalStartPoint.getY();
        let myEndX : number = myGlobalEndPoint.getX();
        let myEndY : number = myGlobalEndPoint.getY();
        console.info("x1: " + displayObjectStartX + ", y1: " + displayObjectStartY);
        console.info("x2: " + displayObjectEndX + ", y2: " + displayObjectEndY);
        console.info("------------");
        console.info("x1: " + myStartX + ", y1: " + myStartY);
        console.info("x2: " + myEndX + ", y2: " + myEndY);
        if(myStartX >= displayObjectStartX && myStartX <= displayObjectEndX && myStartY >= displayObjectStartY && myStartY <= displayObjectEndY) hit = true; else if(myEndX >= displayObjectStartX && myEndX <= displayObjectEndX && myEndY >= displayObjectStartY && myEndY <= displayObjectEndY) hit = true;
        return hit;
    }

    public hitTestPoint(x : number, y : number) : boolean {
        let out : boolean = false;
        let localPoint : IPoint = this.globalToLocal(new Point(x, y));
        let x1 : number = this.x - this.regX;
        let y1 : number = this.y - this.regY;
        let x2 : number = x1 + this.getWidth();
        let y2 : number = y1 + this.getHeight();
        console.info(localPoint.getX() + " " + y1 + "-" + x2 + " " + y2 + "-" + x + " " + y);
        if((x >= x1 && x <= x2) && (y >= y1 && y <= y2)) out = true;
        return out;
    }

    /**
     * 
     */
    public render() {
        super.render();
        (<IDisplayObjectRenderer><any>super.getRenderer()).setPosition("absolute");
        (<IDisplayObjectRenderer><any>super.getRenderer()).setDisplay("inline-blick");
        (<IDisplayObjectRenderer><any>super.getRenderer()).setMargin("0");
        (<IDisplayObjectRenderer><any>super.getRenderer()).setPadding("0");
        (<IDisplayObjectRenderer><any>super.getRenderer()).setID();
        (<IDisplayObjectRenderer><any>super.getRenderer()).setRegXY();
        (<IDisplayObjectRenderer><any>super.getRenderer()).setXY();
        (<IDisplayObjectRenderer><any>super.getRenderer()).setScaleXY();
        (<IDisplayObjectRenderer><any>super.getRenderer()).setRotation();
        (<IDisplayObjectRenderer><any>super.getRenderer()).addFilter();
        (<IDisplayObjectRenderer><any>super.getRenderer()).setVisible();
        (<IDisplayObjectRenderer><any>super.getRenderer()).setAlpha();
        (<IDisplayObjectRenderer><any>super.getRenderer()).setMouseCursor();
        (<IDisplayObjectRenderer><any>super.getRenderer()).setMouseVisible();
    }

    public dispatchEvent(event : IEvent) : boolean {
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED_TO_STAGE)) {
            this.stage = <IStage><any>event.getData();
            this.render();
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.REMOVED_FROM_STAGE)) {
            this.stage = null;
        }
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED)) {
            this.parent = <IDisplayObjectContainer><any>event.getData();
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.REMOVED)) {
            this.parent = null;
        }
        return super.dispatchEvent(event);
    }
}
DisplayObject["__class"] = "splashjs.display.DisplayObject";
DisplayObject["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




