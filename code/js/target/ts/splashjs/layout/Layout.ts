/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { InteractiveObject } from '../display/InteractiveObject';
import { ILayout } from './iface/ILayout';

export abstract class Layout extends InteractiveObject implements ILayout {
    public constructor(id? : any) {
        if(((typeof id === 'string') || id === null)) {
            let __args = arguments;
            super(id);
        } else if(id === undefined) {
            let __args = arguments;
            super();
        } else throw new Error('invalid overload');
    }
}
Layout["__class"] = "splashjs.layout.Layout";
Layout["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.layout.iface.ILayout","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];




