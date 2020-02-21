/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
export class Sine {
    public static EASE_IN : string = "sine_ease_in";

    public static EASE_OUT : string = "sine_ease_out";

    public static EASE_IN_OUT : string = "sine_ease_in_out";

    public static easeIn(t : number, b : number, c : number, d : number) : number {
        return -c * <number>Math.cos(t / d * (Math.PI / 2)) + c + b;
    }

    public static easeOut(t : number, b : number, c : number, d : number) : number {
        return c * <number>Math.sin(t / d * (Math.PI / 2)) + b;
    }

    public static easeInOut(t : number, b : number, c : number, d : number) : number {
        return -c / 2 * (<number>Math.cos(Math.PI * t / d) - 1) + b;
    }
}
Sine["__class"] = "splashjs.animation.easing.Sine";



