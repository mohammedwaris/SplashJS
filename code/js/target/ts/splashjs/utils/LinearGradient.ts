/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { ILinearGradient } from './iface/ILinearGradient';
import { Gradient } from './Gradient';
import { GradientDirection } from './GradientDirection';

export class LinearGradient extends Gradient implements ILinearGradient {
    /*private*/ gradientDirection : string = GradientDirection.TOP_TO_BOTTOM;

    /*private*/ gradientAngle : number = null;

    public setGradientDirection(gradientDirection : string) {
        this.gradientAngle = null;
        this.gradientDirection = gradientDirection;
    }

    public getGradientDirection() : string {
        return this.gradientDirection;
    }

    public setGradientAngle(gradientAngle : number) {
        this.gradientDirection = null;
        this.gradientAngle = gradientAngle;
    }

    public getGradientAngle() : number {
        return this.gradientAngle;
    }

    constructor() {
        super();
    }
}
LinearGradient["__class"] = "splashjs.utils.LinearGradient";
LinearGradient["__interfaces"] = ["splashjs.utils.iface.IGradient","splashjs.utils.iface.ILinearGradient"];




