/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
export class Quad {
    public static EASE_IN : string = "quad_cubic_ease_in";

    public static EASE_OUT : string = "quad_cubic_ease_out";

    public static EASE_IN_OUT : string = "quad_cubic_ease_in_out";

    public static easeIn(t : number, b : number, c : number, d : number) : number {
        return c * (t /= d) * t + b;
    }

    public static easeOut(t : number, b : number, c : number, d : number) : number {
        return -c * (t /= d) * (t - 2) + b;
    }

    public static easeInOut(t : number, b : number, c : number, d : number) : number {
        if((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
}
Quad["__class"] = "splashjs.animation.easing.Quad";



