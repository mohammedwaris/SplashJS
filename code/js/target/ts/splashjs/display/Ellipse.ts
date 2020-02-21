/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IEllipse } from './iface/IEllipse';
import { Shape } from './Shape';

export class Ellipse extends Shape implements IEllipse {
    /*private*/ radiusX : number;

    /*private*/ radiusY : number;

    public constructor(radiusX? : any, radiusY? : any) {
        if(((typeof radiusX === 'number') || radiusX === null) && ((typeof radiusY === 'number') || radiusY === null)) {
            let __args = arguments;
            {
                let __args = arguments;
                super("ellipse");
                this.radiusX = 0;
                this.radiusY = 0;
            }
            (() => {
                this.radiusX = radiusX;
                this.radiusY = radiusY;
            })();
        } else if(radiusX === undefined && radiusY === undefined) {
            let __args = arguments;
            super("ellipse");
            this.radiusX = 0;
            this.radiusY = 0;
        } else throw new Error('invalid overload');
    }
}
Ellipse["__class"] = "splashjs.display.Ellipse";
Ellipse["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.display.iface.IShape","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.display.iface.IEllipse"];




