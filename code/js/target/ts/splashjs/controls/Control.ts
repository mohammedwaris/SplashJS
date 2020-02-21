/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IControl } from './iface/IControl';
import { InteractiveObject } from '../display/InteractiveObject';

export abstract class Control extends InteractiveObject implements IControl {
    /*private*/ enabled : boolean;

    public constructor(id : string) {
        super(id);
        if(this.enabled===undefined) this.enabled = false;
    }

    public setEnabled(enabled : boolean) {
        this.enabled = enabled;
    }

    public getEnabled() : boolean {
        return this.enabled;
    }

    public isEnabled() : boolean {
        return this.getEnabled();
    }
}
Control["__class"] = "splashjs.controls.Control";
Control["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl"];




