/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
export class Circ {
    public static EASE_IN : string = "circ_ease_in";

    public static EASE_OUT : string = "circ_ease_out";

    public static EASE_IN_OUT : string = "circ_ease_in_out";

    public static easeIn(t : number, b : number, c : number, d : number) : number {
        return -c * (<number>Math.sqrt(1 - (t /= d) * t) - 1) + b;
    }

    public static easeOut(t : number, b : number, c : number, d : number) : number {
        return c * <number>Math.sqrt(1 - (t = t / d - 1) * t) + b;
    }

    public static easeInOut(t : number, b : number, c : number, d : number) : number {
        if((t /= d / 2) < 1) return -c / 2 * (<number>Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (<number>Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
}
Circ["__class"] = "splashjs.animation.easing.Circ";



