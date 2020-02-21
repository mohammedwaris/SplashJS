/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
export class Quint {
    public static EASE_IN : string = "quint_ease_in";

    public static EASE_OUT : string = "quint_ease_out";

    public static EASE_IN_OUT : string = "quint_ease_in_out";

    public static easeIn(t : number, b : number, c : number, d : number) : number {
        return c * (t /= d) * t * t * t * t + b;
    }

    public static easeOut(t : number, b : number, c : number, d : number) : number {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }

    public static easeInOut(t : number, b : number, c : number, d : number) : number {
        if((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }
}
Quint["__class"] = "splashjs.animation.easing.Quint";



