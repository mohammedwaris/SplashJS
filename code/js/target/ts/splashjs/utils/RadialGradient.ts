/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IRadialGradient } from './iface/IRadialGradient';
import { Gradient } from './Gradient';
import { GradientShape } from './GradientShape';

export class RadialGradient extends Gradient implements IRadialGradient {
    /*private*/ gradientShape : string = GradientShape.ELLIPSE;

    /*private*/ gradientSize : string;

    public setGradientShape(gradientShape : string) {
        this.gradientShape = gradientShape;
    }

    public getGradientShape() : string {
        return this.gradientShape;
    }

    public setGradientSize(gradientSize : string) {
        this.gradientSize = gradientSize;
    }

    public getGradientSize() : string {
        return this.gradientSize;
    }

    constructor() {
        super();
        if(this.gradientSize===undefined) this.gradientSize = null;
    }
}
RadialGradient["__class"] = "splashjs.utils.RadialGradient";
RadialGradient["__interfaces"] = ["splashjs.utils.iface.IGradient","splashjs.utils.iface.IRadialGradient"];




