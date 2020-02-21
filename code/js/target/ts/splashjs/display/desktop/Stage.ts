/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { INativeWindow } from './iface/INativeWindow';
import { IStage } from './iface/IStage';

export class Stage extends splashjs.display.Stage implements splashjs.display.desktop.iface.IStage {
    nativeWindow : INativeWindow;

    public constructor(stageOwnerName : string, width : number, height : number) {
        super(stageOwnerName, width, height);
        if(this.nativeWindow===undefined) this.nativeWindow = null;
    }

    public setNativeWindow(nativeWindow : INativeWindow) {
        this.nativeWindow = nativeWindow;
    }

    public getNativeWindow() : INativeWindow {
        return this.nativeWindow;
    }
}
Stage["__class"] = "splashjs.display.desktop.Stage";
Stage["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IStage","splashjs.display.iface.IDisplayObjectContainer","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.display.desktop.iface.IStage"];




