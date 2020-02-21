/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
export class Linear {
    public static EASE_NONE : string = "linear_ease_none";

    public static EASE_IN : string = "linear_ease_in";

    public static EASE_OUT : string = "linear_ease_out";

    public static EASE_IN_OUT : string = "linear_ease_in_out";

    public static easeNone(t : number, b : number, c : number, d : number) : number {
        return c * t / d + b;
    }

    public static easeIn(t : number, b : number, c : number, d : number) : number {
        return c * t / d + b;
    }

    public static easeOut(t : number, b : number, c : number, d : number) : number {
        return c * t / d + b;
    }

    public static easeInOut(t : number, b : number, c : number, d : number) : number {
        return c * t / d + b;
    }
}
Linear["__class"] = "splashjs.animation.easing.Linear";



