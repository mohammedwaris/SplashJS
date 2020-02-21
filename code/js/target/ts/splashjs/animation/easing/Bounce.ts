/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
export class Bounce {
    public static EASE_IN : string = "bounce_ease_in";

    public static EASE_OUT : string = "bounce_ease_out";

    public static EASE_IN_OUT : string = "bounce_ease_in_out";

    public static easeIn(t : number, b : number, c : number, d : number) : number {
        return c - Bounce.easeOut(d - t, 0, c, d) + b;
    }

    public static easeOut(t : number, b : number, c : number, d : number) : number {
        if((t /= d) < ((<any>Math).fround(1 / 2.75))) {
            return c * (7.5625 * t * t) + b;
        } else if(t < ((<any>Math).fround(2 / 2.75))) {
            return c * (7.5625 * (t -= ((<any>Math).fround(1.5 / 2.75))) * t + 0.75) + b;
        } else if(t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= ((<any>Math).fround(2.25 / 2.75))) * t + 0.9375) + b;
        } else {
            return c * (7.5625 * (t -= ((<any>Math).fround(2.625 / 2.75))) * t + 0.984375) + b;
        }
    }

    public static easeInOut(t : number, b : number, c : number, d : number) : number {
        if(t < d / 2) return Bounce.easeIn(t * 2, 0, c, d) * 0.5 + b; else return Bounce.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    }
}
Bounce["__class"] = "splashjs.animation.easing.Bounce";



