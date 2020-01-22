/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Event } from '../events/Event';
import { IEvent } from '../events/iface/IEvent';
import { IDisplayObjectContainer } from './iface/IDisplayObjectContainer';
import { IImage } from './iface/IImage';
import { IResource } from '../utils/iface/IResource';
import { IImageRenderer } from '../render/display/iface/IImageRenderer';
import { InteractiveObject } from './InteractiveObject';
import { IEventDispatcher } from '../events/iface/IEventDispatcher';
import { IRenderer } from '../render/iface/IRenderer';

export class Image extends InteractiveObject implements IImage {
    /*private*/ imagePath : string;

    /*private*/ imageType : string;

    /*private*/ resource : IResource;

    /*private*/ originalWidth : number;

    /*private*/ originalHeight : number;

    public constructor(imagePath? : any) {
        if(((typeof imagePath === 'string') || imagePath === null)) {
            let __args = arguments;
            super("image");
            if(this.resource===undefined) this.resource = null;
            if(this.originalWidth===undefined) this.originalWidth = null;
            if(this.originalHeight===undefined) this.originalHeight = null;
            this.imagePath = "";
            this.imageType = "";
            if(this.resource===undefined) this.resource = null;
            if(this.originalWidth===undefined) this.originalWidth = null;
            if(this.originalHeight===undefined) this.originalHeight = null;
            (() => {
                this.imagePath = imagePath;
                let type : string = this.imagePath.substring(this.imagePath.lastIndexOf(".") + 1);
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "jpg") || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "jpeg")) this.imageType = "jpeg"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "png")) this.imageType = "png"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "gif")) this.imageType = "gif";
            })();
        } else if(((imagePath != null && (imagePath["__interfaces"] != null && imagePath["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0 || imagePath.constructor != null && imagePath.constructor["__interfaces"] != null && imagePath.constructor["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0)) || imagePath === null)) {
            let __args = arguments;
            let resource : any = __args[0];
            super("image");
            if(this.resource===undefined) this.resource = null;
            if(this.originalWidth===undefined) this.originalWidth = null;
            if(this.originalHeight===undefined) this.originalHeight = null;
            this.imagePath = "";
            this.imageType = "";
            if(this.resource===undefined) this.resource = null;
            if(this.originalWidth===undefined) this.originalWidth = null;
            if(this.originalHeight===undefined) this.originalHeight = null;
            (() => {
                this.resource = resource;
                this.imagePath = resource.getResourcePath();
            })();
        } else if(imagePath === undefined) {
            let __args = arguments;
            super();
            if(this.resource===undefined) this.resource = null;
            if(this.originalWidth===undefined) this.originalWidth = null;
            if(this.originalHeight===undefined) this.originalHeight = null;
            this.imagePath = "";
            this.imageType = "";
            if(this.resource===undefined) this.resource = null;
            if(this.originalWidth===undefined) this.originalWidth = null;
            if(this.originalHeight===undefined) this.originalHeight = null;
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @return {string}
     */
    public getImagePath() : string {
        return this.imagePath;
    }

    /**
     * 
     * @return {string}
     */
    public getImageType() : string {
        return this.imageType;
    }

    /**
     * 
     * @param {*} event
     * @return {boolean}
     */
    public dispatchEvent(event : IEvent) : boolean {
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED_TO_STAGE)) {
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.REMOVED_FROM_STAGE)) {
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED)) {
            this.parent = <IDisplayObjectContainer><any>event.getTarget();
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.REMOVED)) {
            this.parent = null;
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.LOADED)) {
            this.originalWidth = (<IImageRenderer><any>super.getRenderer()).getOriginalWidth();
            this.originalHeight = (<IImageRenderer><any>super.getRenderer()).getOriginalHeight();
            if(this.width === 0 && this.originalWidth !== 0) {
                this.width = this.originalWidth;
                (<IImageRenderer><any>super.getRenderer()).setWidth();
            }
            if(this.height === 0 && this.originalHeight !== 0) {
                this.height = this.originalHeight;
                (<IImageRenderer><any>super.getRenderer()).setHeight();
            }
        }
        let retValue : boolean = super.dispatchEvent(event);
        return retValue;
    }

    /**
     * 
     * @return {number}
     */
    public getWidth() : number {
        return super.getWidth();
    }

    /**
     * 
     * @return {number}
     */
    public getHeight() : number {
        return super.getHeight();
    }

    /**
     * 
     * @param {number} width
     */
    public setWidth(width : number) {
        this.width = width;
        super.setScaleX(<number>width / this.originalWidth);
    }

    /**
     * 
     * @param {number} height
     */
    public setHeight(height : number) {
        this.height = height;
        super.setScaleY(<number>height / this.originalHeight);
    }
}
Image["__class"] = "splashjs.display.Image";
Image["__interfaces"] = ["splashjs.display.iface.IImage","splashjs.display.iface.IDisplayObject","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




