/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { INativeWindow } from './desktop/iface/INativeWindow';
import { NativeWindowSystemChrome } from './NativeWindowSystemChrome';
import { NativeWindowType } from './NativeWindowType';

export class NativeWindowInitOptions {
    /*private*/ maximizable : boolean = true;

    /*private*/ minimizable : boolean = true;

    /*private*/ owner : INativeWindow = null;

    /*private*/ renderMode : string = null;

    /*private*/ resizable : boolean = true;

    /*private*/ systemChrome : string = NativeWindowSystemChrome.STANDARD;

    /*private*/ transparent : boolean = false;

    /*private*/ type : string = NativeWindowType.NORMAL;

    public constructor() {
    }

    public setMaximizable(maximizable : boolean) {
        this.maximizable = maximizable;
    }

    public getMaximizable() : boolean {
        return this.maximizable;
    }

    public setMinizable(minimizable : boolean) {
        this.minimizable = minimizable;
    }

    public setOwner(owner : INativeWindow) {
        this.owner = owner;
    }

    public getOwner() : INativeWindow {
        return this.owner;
    }
}
NativeWindowInitOptions["__class"] = "splashjs.display.NativeWindowInitOptions";



