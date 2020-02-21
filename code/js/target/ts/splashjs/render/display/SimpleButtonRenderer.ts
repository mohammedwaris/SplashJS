/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ISprite } from '../../display/iface/ISprite';
import { IDisplayObject } from '../../display/iface/IDisplayObject';
import { ISimpleButton } from '../../display/iface/ISimpleButton';
import { Sprite } from '../../display/Sprite';
import { IEventDispatcher } from '../../events/iface/IEventDispatcher';
import { ISimpleButtonRenderer } from './iface/ISimpleButtonRenderer';
import { RenderElement } from '../RenderElement';
import { InteractiveObjectRenderer } from './InteractiveObjectRenderer';
import { IRenderer } from '../iface/IRenderer';

export class SimpleButtonRenderer extends InteractiveObjectRenderer implements ISimpleButtonRenderer {
    /*private*/ container : ISprite = new Sprite();

    /*private*/ upState : IDisplayObject;

    /*private*/ downState : IDisplayObject;

    /*private*/ overState : IDisplayObject;

    /*private*/ disabledState : IDisplayObject;

    public constructor(renderObject : IEventDispatcher) {
        super();
        if(this.upState===undefined) this.upState = null;
        if(this.downState===undefined) this.downState = null;
        if(this.overState===undefined) this.overState = null;
        if(this.disabledState===undefined) this.disabledState = null;
        super.setRenderObject(renderObject);
        super.setRenderElement(new RenderElement(<HTMLImageElement>document.createElement("span")));
    }

    public create() {
        this.appendChild(this.container.getRenderer());
        this.setDownState();
        this.setOverState();
        this.setUpState();
        this.setDisabledState();
    }

    public setUpState() {
        let visible : boolean = true;
        if(this.upState == null) {
            this.upState = (<ISimpleButton><any>super.getRenderObject()).getUpState();
        } else if(this.upState != null) {
            visible = this.upState.getVisible();
            this.upState.setRenderer(null);
            this.container.removeChild(this.upState);
        }
        if(this.upState != null) {
            this.container.addChild(this.upState);
            this.upState.setVisible(visible);
        }
    }

    public setDownState() {
        let visible : boolean = false;
        if(this.downState == null) {
            this.downState = (<ISimpleButton><any>super.getRenderObject()).getDownState();
        } else if(this.downState != null) {
            visible = this.downState.getVisible();
            this.downState.setRenderer(null);
            this.container.removeChild(this.downState);
        }
        if(this.downState != null) {
            this.container.addChild(this.downState);
            this.downState.setVisible(visible);
        }
    }

    public setOverState() {
        let visible : boolean = false;
        if(this.overState == null) {
            this.overState = (<ISimpleButton><any>super.getRenderObject()).getOverState();
        } else if(this.overState != null) {
            visible = this.overState.getVisible();
            this.overState.setRenderer(null);
            this.container.removeChild(this.overState);
        }
        if(this.overState != null) {
            this.container.addChild(this.overState);
            this.overState.setVisible(visible);
        }
    }

    public setDisabledState() {
        let visible : boolean = false;
        if(this.disabledState == null) {
            this.disabledState = (<ISimpleButton><any>super.getRenderObject()).getDisabledState();
        } else if(this.disabledState != null) {
            visible = this.disabledState.getVisible();
            this.disabledState.setRenderer(null);
            this.container.removeChild(this.disabledState);
        }
        if(this.disabledState != null) {
            this.container.addChild(this.disabledState);
            this.disabledState.setVisible(visible);
        }
    }

    public setEnabled() {
        let enabled : boolean = (<ISimpleButton><any>super.getRenderObject()).isEnabled();
        if(this.disabledState == null) {
            if(enabled === true) {
                (<IDisplayObject><any>super.getRenderObject()).setAlpha(1.0);
            } else if(enabled === false) {
                if(this.downState != null) this.downState.setVisible(false);
                if(this.upState != null) this.upState.setVisible(true);
                if(this.overState != null) this.overState.setVisible(false);
                (<IDisplayObject><any>super.getRenderObject()).setAlpha(0.5);
            }
        } else {
            if(enabled === false) {
                this.disabledState.setVisible(true);
                if(this.downState != null) this.downState.setVisible(false);
                if(this.upState != null) this.upState.setVisible(false);
                if(this.overState != null) this.overState.setVisible(false);
            } else {
                this.disabledState.setVisible(false);
                if(this.upState != null) this.upState.setVisible(true);
            }
        }
    }
}
SimpleButtonRenderer["__class"] = "splashjs.render.display.SimpleButtonRenderer";
SimpleButtonRenderer["__interfaces"] = ["splashjs.render.display.iface.ISimpleButtonRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];




