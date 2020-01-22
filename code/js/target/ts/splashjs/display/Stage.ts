/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { Event } from '../events/Event';
import { Color } from '../utils/Color';
import { UnsupportedOperationError } from '../lang/UnsupportedOperationError';
import { IStageOwner } from '../application/iface/IStageOwner';
import { StageOwner } from '../application/StageOwner';
import { IEvent } from '../events/iface/IEvent';
import { IStage } from './iface/IStage';
import { IDisplayObject } from './iface/IDisplayObject';
import { IColor } from '../utils/iface/IColor';
import { IStageRenderer } from '../render/display/iface/IStageRenderer';
import { IDisplayObjectRenderer } from '../render/display/iface/IDisplayObjectRenderer';
import { DisplayObjectContainer } from './DisplayObjectContainer';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';
import { StageScaleMode } from './StageScaleMode';

export class Stage extends DisplayObjectContainer implements IStage {
    /*private*/ stageOwner : IStageOwner;

    /*private*/ scaleMode : string;

    /*private*/ align : string;

    /*private*/ color : IColor;

    public constructor(stageOwnerName? : any, width? : any, height? : any) {
        if(((typeof stageOwnerName === 'string') || stageOwnerName === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
            let __args = arguments;
            super("stage");
            if(this.stageOwner===undefined) this.stageOwner = null;
            if(this.scaleMode===undefined) this.scaleMode = null;
            if(this.align===undefined) this.align = null;
            if(this.color===undefined) this.color = null;
            if(this.stageOwner===undefined) this.stageOwner = null;
            if(this.scaleMode===undefined) this.scaleMode = null;
            if(this.align===undefined) this.align = null;
            if(this.color===undefined) this.color = null;
            (() => {
                super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(Stage, this));
                this.stageOwner = new StageOwner(stageOwnerName, this, width, height);
                super.setWidth(width);
                super.setHeight(height);
                this.setColor(Color.WHITE_$LI$());
                this.scaleMode = StageScaleMode.SHOW_ALL;
                (<IStageRenderer><any>super.getRenderer()).startEnterFrameExitFrameDispatcherLoop();
                this.stageOwner.addEventListener(Event.RESIZE, (event) => {
                    console.info("resized");
                    this.handleResize();
                });
                this.stageOwner.getRenderer().appendChild(this.getRenderer());
                this.render();
            })();
        } else if(stageOwnerName === undefined && width === undefined && height === undefined) {
            let __args = arguments;
            super("stage");
            if(this.stageOwner===undefined) this.stageOwner = null;
            if(this.scaleMode===undefined) this.scaleMode = null;
            if(this.align===undefined) this.align = null;
            if(this.color===undefined) this.color = null;
            if(this.stageOwner===undefined) this.stageOwner = null;
            if(this.scaleMode===undefined) this.scaleMode = null;
            if(this.align===undefined) this.align = null;
            if(this.color===undefined) this.color = null;
        } else throw new Error('invalid overload');
    }

    public getStageOwner() : IStageOwner {
        return this.stageOwner;
    }

    /**
     * 
     * @param {number} x
     */
    public setX(x : number) {
        throw new UnsupportedOperationError();
    }

    /**
     * 
     * @param {number} y
     */
    public setY(y : number) {
        throw new UnsupportedOperationError();
    }

    /**
     * 
     * @param {number} x
     * @param {number} y
     */
    public setXY(x : number, y : number) {
        throw new UnsupportedOperationError();
    }

    /**
     * 
     * @return {*}
     */
    public getStage() : IStage {
        return null;
    }

    public setWidth(width : number) {
        this.width = width;
    }

    public setHeight(height : number) {
        this.height = height;
    }

    public setSize(width : number, height : number) {
    }

    public getWidth() : number {
        return this.width;
    }

    public getHeight() : number {
        return this.height;
    }

    /**
     * 
     */
    public render() {
        super.render();
        (<IStageRenderer><any>super.getRenderer()).setBorder("0px solid red");
        (<IStageRenderer><any>super.getRenderer()).setOverflow("hidden");
        (<IStageRenderer><any>super.getRenderer()).setPosition("relative");
        (<IStageRenderer><any>super.getRenderer()).setDisplay("inline-block");
        (<IStageRenderer><any>super.getRenderer()).setWidth();
        (<IStageRenderer><any>super.getRenderer()).setHeight();
        (<IStageRenderer><any>super.getRenderer()).setColor();
        this.handleResize();
    }

    /**
     * 
     * @param {*} child
     */
    public addChild(child : IDisplayObject) {
        super.addChild(child);
        let addedToStageEvent : IEvent = new Event(Event.ADDED_TO_STAGE, child, child);
        addedToStageEvent.setData(this);
        child.dispatchEvent(addedToStageEvent);
    }

    /**
     * 
     * @param {*} child
     * @param {number} index
     */
    public addChildAt(child : IDisplayObject, index : number) {
        super.addChildAt(child, index);
        let addedToStageEvent : IEvent = new Event(Event.ADDED_TO_STAGE, child, child);
        addedToStageEvent.setData(this);
        child.dispatchEvent(addedToStageEvent);
    }

    /**
     * 
     * @param {*} child
     */
    public removeChild(child : IDisplayObject) {
        super.removeChild(child);
        let removedFromStageEvent : IEvent = new Event(Event.REMOVED_FROM_STAGE, child, child);
        child.dispatchEvent(removedFromStageEvent);
    }

    /**
     * 
     * @param {number} index
     */
    public removeChildAt(index : number) {
        let child : IDisplayObject = this.getChildAt(index);
        super.removeChildAt(index);
        let removedFromStageEvent : IEvent = new Event(Event.REMOVED_FROM_STAGE, child, child);
        child.dispatchEvent(removedFromStageEvent);
    }

    public setScaleMode(stageScaleMode : string) {
        this.scaleMode = stageScaleMode;
    }

    public setAlign(stageAlign : string) {
        this.align = stageAlign;
    }

    /**
     * 
     * @param {*} event
     * @return {boolean}
     */
    public dispatchEvent(event : IEvent) : boolean {
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.RESIZE)) {
            this.handleResize();
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ENTER_FRAME)) {
        }
        return super.dispatchEvent(event);
    }

    /*private*/ handleResize() {
        let stageOwnerWidth : number = this.stageOwner.getWidth();
        let stageOwnerHeight : number = this.stageOwner.getHeight();
        let stageWidth : number = this.getWidth();
        let stageHeight : number = this.getHeight();
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.scaleMode, StageScaleMode.EXACT_FIT)) {
            this.setScaleX(<number>stageOwnerWidth / stageWidth);
            this.setScaleY(<number>stageOwnerHeight / stageHeight);
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.scaleMode, StageScaleMode.NO_BORDER)) {
            let widthRatio : number = <number>stageOwnerWidth / stageWidth;
            let heightRatio : number = <number>stageOwnerHeight / stageHeight;
            this.setScaleX(widthRatio);
            this.setScaleY(widthRatio);
            let px : number = (<number>((stageOwnerWidth - stageWidth * widthRatio) / 2)|0);
            let py : number = (<number>((stageOwnerHeight - stageHeight * widthRatio) / 2)|0);
            super.setX(px);
            super.setY(py);
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.scaleMode, StageScaleMode.SHOW_ALL)) {
            let widthRatio : number = <number>stageOwnerWidth / stageWidth;
            let heightRatio : number = <number>stageOwnerHeight / stageHeight;
            let ratio : number = Math.min(widthRatio, heightRatio);
            this.setScaleX(ratio);
            this.setScaleY(ratio);
            let px : number = (<number>((stageOwnerWidth - stageWidth * ratio) / 2)|0);
            let py : number = (<number>((stageOwnerHeight - stageHeight * ratio) / 2)|0);
            super.setX(px);
            super.setY(py);
        }
    }

    /**
     * 
     * @param {number} scaleX
     */
    public setScaleX(scaleX : number) {
        super.setScaleX(scaleX);
    }

    /**
     * 
     * @param {number} scaleY
     */
    public setScaleY(scaleY : number) {
        super.setScaleY(scaleY);
    }

    public setColor(color : IColor) {
        this.color = color;
        if(super.getRenderer() != null) (<IStageRenderer><any>super.getRenderer()).setColor();
    }

    public getColor() : IColor {
        return this.color;
    }
}
Stage["__class"] = "splashjs.display.Stage";
Stage["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IStage","splashjs.display.iface.IDisplayObjectContainer","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




