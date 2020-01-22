/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { INativeWindow } from './desktop/iface/INativeWindow';
import { NativeWindowStub } from './desktop/stubs/NativeWindowStub';
import { NativeWindowInitOptions } from './NativeWindowInitOptions';

export class NativeWindow implements INativeWindow {
    /*private*/ initOptions : NativeWindowInitOptions;

    /*private*/ nativeWindowStub : NativeWindowStub;

    public constructor(initOptions? : any) {
        if(((initOptions != null && initOptions instanceof <any>NativeWindowInitOptions) || initOptions === null)) {
            let __args = arguments;
            if(this.initOptions===undefined) this.initOptions = null;
            if(this.nativeWindowStub===undefined) this.nativeWindowStub = null;
            if(this.initOptions===undefined) this.initOptions = null;
            if(this.nativeWindowStub===undefined) this.nativeWindowStub = null;
            (() => {
                this.initOptions = initOptions;
                this.nativeWindowStub = NativeWindowStub.newInstance();
            })();
        } else if(initOptions === undefined) {
            let __args = arguments;
            {
                let __args = arguments;
                let initOptions : any = new NativeWindowInitOptions();
                if(this.initOptions===undefined) this.initOptions = null;
                if(this.nativeWindowStub===undefined) this.nativeWindowStub = null;
                if(this.initOptions===undefined) this.initOptions = null;
                if(this.nativeWindowStub===undefined) this.nativeWindowStub = null;
                (() => {
                    this.initOptions = initOptions;
                    this.nativeWindowStub = NativeWindowStub.newInstance();
                })();
            }
        } else throw new Error('invalid overload');
    }

    public activate() {
        this.nativeWindowStub.show();
    }

    public getStage() : any {
        return this.nativeWindowStub.getStage();
    }
}
NativeWindow["__class"] = "splashjs.display.NativeWindow";
NativeWindow["__interfaces"] = ["splashjs.display.desktop.iface.INativeWindow"];




