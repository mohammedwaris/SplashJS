/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { Global } from '../Global';
import { Event } from '../events/Event';
import { MouseEvent } from '../events/MouseEvent';
import { IEvent } from '../events/iface/IEvent';
import { ISimpleButton } from './iface/ISimpleButton';
import { IDisplayObject } from './iface/IDisplayObject';
import { IDisplayObjectContainer } from './iface/IDisplayObjectContainer';
import { ISimpleButtonRenderer } from '../render/display/iface/ISimpleButtonRenderer';
import { InteractiveObject } from './InteractiveObject';
import { IRenderer } from '../render/iface/IRenderer';
import { IRendererCreator } from '../render/iface/IRendererCreator';
import { IGlobal } from '../iface/IGlobal';
import { IEventDispatcher } from '../events/iface/IEventDispatcher';

export class SimpleButton extends InteractiveObject implements ISimpleButton {
    /*private*/ upState : IDisplayObject = null;

    /*private*/ downState : IDisplayObject = null;

    /*private*/ overState : IDisplayObject = null;

    /*private*/ disabledState : IDisplayObject = null;

    /*private*/ enabled : boolean = true;

    public constructor() {
        super("button");
        super.setRenderer(Global.global_$LI$().getRendererCreator().createRenderer(SimpleButton, this));
    }

    /**
     * 
     * @param {*} event
     * @return {boolean}
     */
    public dispatchEvent(event : IEvent) : boolean {
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.ADDED)) {
            this.parent = <IDisplayObjectContainer><any>event.getTarget();
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), Event.REMOVED)) {
            this.parent = null;
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), MouseEvent.MOUSE_OVER)) {
            if(this.enabled === true && this.overState != null) {
                if(this.upState != null) this.upState.setVisible(false);
                if(this.downState != null) this.downState.setVisible(false);
                this.overState.setVisible(true);
            }
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), MouseEvent.MOUSE_DOWN)) {
            if(this.enabled === true && this.downState != null) {
                if(this.upState != null) this.upState.setVisible(false);
                if(this.overState != null) this.overState.setVisible(false);
                this.downState.setVisible(true);
            }
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), MouseEvent.MOUSE_UP)) {
            if(this.enabled === true && this.overState != null) {
                if(this.upState != null) this.upState.setVisible(false);
                if(this.downState != null) this.downState.setVisible(false);
                this.overState.setVisible(true);
            }
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), MouseEvent.MOUSE_OUT)) {
            if(this.enabled === true && this.upState != null) {
                if(this.overState != null) this.overState.setVisible(false);
                if(this.downState != null) this.downState.setVisible(false);
                this.upState.setVisible(true);
            }
        }
        return super.dispatchEvent(event);
    }

    public setUpState(upState : IDisplayObject) {
        this.upState = upState;
        if(super.getRenderer() != null) {
            (<ISimpleButtonRenderer><any>super.getRenderer()).setUpState();
        }
    }

    public getUpState() : IDisplayObject {
        return this.upState;
    }

    public setDownState(downState : IDisplayObject) {
        this.downState = downState;
        if(super.getRenderer() != null) {
            (<ISimpleButtonRenderer><any>super.getRenderer()).setDownState();
        }
    }

    public getDownState() : IDisplayObject {
        return this.downState;
    }

    public setOverState(overState : IDisplayObject) {
        this.overState = overState;
        if(super.getRenderer() != null) {
            (<ISimpleButtonRenderer><any>super.getRenderer()).setOverState();
        }
    }

    public getOverState() : IDisplayObject {
        return this.overState;
    }

    public setDisabledState(disabledState : IDisplayObject) {
        this.disabledState = disabledState;
        if(super.getRenderer() != null) {
            (<ISimpleButtonRenderer><any>super.getRenderer()).setDisabledState();
        }
    }

    public getDisabledState() : IDisplayObject {
        return this.disabledState;
    }

    public setEnabled(enabled : boolean) {
        this.enabled = enabled;
        if(super.getRenderer() != null) {
            (<ISimpleButtonRenderer><any>super.getRenderer()).setEnabled();
        }
    }

    public getEnabled() : boolean {
        return this.enabled;
    }

    public isEnabled() : boolean {
        return this.enabled;
    }

    public render() {
        super.render();
    }
}
SimpleButton["__class"] = "splashjs.display.SimpleButton";
SimpleButton["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.display.iface.ISimpleButton","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




