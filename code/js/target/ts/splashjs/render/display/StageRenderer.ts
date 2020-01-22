/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { RenderElement } from '../RenderElement';
import { HTMLDomEventName } from '../HTMLDomEventName';
import { ColorName } from '../../utils/ColorName';
import { ColorType } from '../../utils/ColorType';
import { KeyLocation } from '../../ui/KeyLocation';
import { IStage } from '../../display/iface/IStage';
import { IColor } from '../../utils/iface/IColor';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { IKeyboardEvent } from '../../events/iface/IKeyboardEvent';
import { IStageRenderer } from './iface/IStageRenderer';
import { DisplayObjectContainerRenderer } from './DisplayObjectContainerRenderer';
import { Timer } from '../../../java/util/Timer';
import { TimerTask } from '../../../java/util/TimerTask';

export class StageRenderer extends DisplayObjectContainerRenderer implements IStageRenderer {
    /*private*/ timer : java.util.Timer;

    /*private*/ htmlSpanElement : HTMLSpanElement;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.timer===undefined) this.timer = null;
        if(this.htmlSpanElement===undefined) this.htmlSpanElement = null;
        super.setRenderObject(renderObject);
        this.htmlSpanElement = <HTMLSpanElement>document.createElement("span");
        super.setRenderElement(new RenderElement(this.htmlSpanElement));
        this.timer = new java.util.Timer();
    }

    /**
     * 
     */
    public createEventListeners() {
        super.createEventListeners();
        this.htmlSpanElement.tabIndex = 0;
        this.htmlSpanElement.addEventListener(HTMLDomEventName.KEYPRESS, (event) => {
            let domKeyboardEvent : KeyboardEvent = <KeyboardEvent>event;
            let loc : number = /* intValue */(new Number(domKeyboardEvent.location).valueOf()|0);
            let location : string = loc + "";
            if(loc === domKeyboardEvent.DOM_KEY_LOCATION_STANDARD) location = KeyLocation.STANDARD; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_LEFT) location = KeyLocation.LEFT; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_RIGHT) location = KeyLocation.RIGHT; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_NUMPAD) location = KeyLocation.NUMPAD;
            let charCode : number = /* intValue */(new Number(domKeyboardEvent.charCode).valueOf()|0);
            let keyCode : number = /* intValue */(new Number(domKeyboardEvent.keyCode).valueOf()|0);
            let which : number = /* intValue */(new Number(domKeyboardEvent.which).valueOf()|0);
            let keyboardEvent : IKeyboardEvent = new splashjs.events.KeyboardEvent(splashjs.events.KeyboardEvent.KEY_PRESS, domKeyboardEvent.altKey, charCode, domKeyboardEvent.char, domKeyboardEvent.ctrlKey, domKeyboardEvent.key, keyCode, location, domKeyboardEvent.metaKey, domKeyboardEvent.repeat, domKeyboardEvent.shiftKey, which);
            this.getRenderObject().dispatchEvent(keyboardEvent);
        });
        this.htmlSpanElement.addEventListener(HTMLDomEventName.KEYUP, (event) => {
            let domKeyboardEvent : KeyboardEvent = <KeyboardEvent>event;
            let loc : number = /* intValue */(new Number(domKeyboardEvent.location).valueOf()|0);
            let location : string = loc + "";
            if(loc === domKeyboardEvent.DOM_KEY_LOCATION_STANDARD) location = KeyLocation.STANDARD; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_LEFT) location = KeyLocation.LEFT; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_RIGHT) location = KeyLocation.RIGHT; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_NUMPAD) location = KeyLocation.NUMPAD;
            let charCode : number = /* intValue */(new Number(domKeyboardEvent.charCode).valueOf()|0);
            let keyCode : number = /* intValue */(new Number(domKeyboardEvent.keyCode).valueOf()|0);
            let which : number = /* intValue */(new Number(domKeyboardEvent.which).valueOf()|0);
            let keyboardEvent : IKeyboardEvent = new splashjs.events.KeyboardEvent(splashjs.events.KeyboardEvent.KEY_UP, domKeyboardEvent.altKey, charCode, domKeyboardEvent.char, domKeyboardEvent.ctrlKey, domKeyboardEvent.key, keyCode, location, domKeyboardEvent.metaKey, domKeyboardEvent.repeat, domKeyboardEvent.shiftKey, which);
            this.getRenderObject().dispatchEvent(keyboardEvent);
        });
        this.htmlSpanElement.addEventListener(HTMLDomEventName.KEYDOWN, (event) => {
            let domKeyboardEvent : KeyboardEvent = <KeyboardEvent>event;
            let loc : number = /* intValue */(new Number(domKeyboardEvent.location).valueOf()|0);
            let location : string = loc + "";
            if(loc === domKeyboardEvent.DOM_KEY_LOCATION_STANDARD) location = KeyLocation.STANDARD; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_LEFT) location = KeyLocation.LEFT; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_RIGHT) location = KeyLocation.RIGHT; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_NUMPAD) location = KeyLocation.NUMPAD;
            let charCode : number = /* intValue */(new Number(domKeyboardEvent.charCode).valueOf()|0);
            let keyCode : number = /* intValue */(new Number(domKeyboardEvent.keyCode).valueOf()|0);
            let which : number = /* intValue */(new Number(domKeyboardEvent.which).valueOf()|0);
            let keyboardEvent : IKeyboardEvent = new splashjs.events.KeyboardEvent(splashjs.events.KeyboardEvent.KEY_DOWN, domKeyboardEvent.altKey, charCode, domKeyboardEvent.char, domKeyboardEvent.ctrlKey, domKeyboardEvent.key, keyCode, location, domKeyboardEvent.metaKey, domKeyboardEvent.repeat, domKeyboardEvent.shiftKey, which);
            this.getRenderObject().dispatchEvent(keyboardEvent);
        });
    }

    /**
     * 
     */
    public setColor() {
        let color : IColor = (<IStage><any>this.getRenderObject()).getColor();
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(color.getColorType(), ColorType.GRADIENT)) {
        } else {
            (<HTMLElement>this.getDOMElement()).style.backgroundColor = this.getCSSColorText();
        }
    }

    /**
     * 
     */
    public startEnterFrameExitFrameDispatcherLoop() {
        this.timer.scheduleAtFixedRate$java_util_TimerTask$long$long(new StageRenderer.StageRenderer$0(this), 0, 15);
    }

    public getCSSColorText() : string {
        let colorName : string = ColorName.BLACK;
        let color : IColor = (<IStage><any>super.getRenderObject()).getColor();
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(color.getColorType(), ColorType.NAME)) colorName = color.getColorName(); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(color.getColorType(), ColorType.HEX)) colorName = color.getHEX();
        return colorName;
    }
}
StageRenderer["__class"] = "splashjs.render.display.StageRenderer";
StageRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.display.iface.IStageRenderer","splashjs.render.display.iface.IDisplayObjectContainerRenderer"];



export namespace StageRenderer {

    export class StageRenderer$0 extends java.util.TimerTask {
        public __parent: any;
        public run() {
            this.__parent.getRenderObject().dispatchEvent(new splashjs.events.Event(splashjs.events.Event.ENTER_FRAME));
            this.__parent.getRenderObject().dispatchEvent(new splashjs.events.Event(splashjs.events.Event.EXIT_FRAME));
        }

        constructor(__parent: any) {
            super();
            this.__parent = __parent;
        }
    }
    StageRenderer$0["__interfaces"] = ["java.lang.Runnable"];


}



