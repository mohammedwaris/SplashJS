/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
export class Expo {
    public static EASE_IN : string = "expo_ease_in";

    public static EASE_OUT : string = "expo_ease_out";

    public static EASE_IN_OUT : string = "expo_ease_in_out";

    public static easeIn(t : number, b : number, c : number, d : number) : number {
        return (t === 0)?b:c * <number>Math.pow(2, 10 * (t / d - 1)) + b;
    }

    public static easeOut(t : number, b : number, c : number, d : number) : number {
        return (t === d)?b + c:c * (-<number>Math.pow(2, -10 * t / d) + 1) + b;
    }

    public static easeInOut(t : number, b : number, c : number, d : number) : number {
        if(t === 0) return b;
        if(t === d) return b + c;
        if((t /= d / 2) < 1) return c / 2 * <number>Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-<number>Math.pow(2, -10 * --t) + 2) + b;
    }
}
Expo["__class"] = "splashjs.animation.easing.Expo";



