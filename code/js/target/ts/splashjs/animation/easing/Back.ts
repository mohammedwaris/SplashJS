/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
export class Back {
    public static EASE_IN : string = "back_ease_in";

    public static EASE_OUT : string = "back_ease_out";

    public static EASE_IN_OUT : string = "back_ease_in_out";

    public static easeIn$double$double$double$double(t : number, b : number, c : number, d : number) : number {
        let s : number = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    }

    public static easeIn$double$double$double$double$double(t : number, b : number, c : number, d : number, s : number) : number {
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    }

    public static easeIn(t? : any, b? : any, c? : any, d? : any, s? : any) : any {
        if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && ((typeof s === 'number') || s === null)) {
            return <any>Back.easeIn$double$double$double$double$double(t, b, c, d, s);
        } else if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && s === undefined) {
            return <any>Back.easeIn$double$double$double$double(t, b, c, d);
        } else throw new Error('invalid overload');
    }

    public static easeOut$double$double$double$double(t : number, b : number, c : number, d : number) : number {
        let s : number = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }

    public static easeOut$double$double$double$double$double(t : number, b : number, c : number, d : number, s : number) : number {
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }

    public static easeOut(t? : any, b? : any, c? : any, d? : any, s? : any) : any {
        if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && ((typeof s === 'number') || s === null)) {
            return <any>Back.easeOut$double$double$double$double$double(t, b, c, d, s);
        } else if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && s === undefined) {
            return <any>Back.easeOut$double$double$double$double(t, b, c, d);
        } else throw new Error('invalid overload');
    }

    public static easeInOut$double$double$double$double(t : number, b : number, c : number, d : number) : number {
        let s : number = 1.70158;
        if((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    }

    public static easeInOut$double$double$double$double$double(t : number, b : number, c : number, d : number, s : number) : number {
        if((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    }

    public static easeInOut(t? : any, b? : any, c? : any, d? : any, s? : any) : any {
        if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && ((typeof s === 'number') || s === null)) {
            return <any>Back.easeInOut$double$double$double$double$double(t, b, c, d, s);
        } else if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && s === undefined) {
            return <any>Back.easeInOut$double$double$double$double(t, b, c, d);
        } else throw new Error('invalid overload');
    }
}
Back["__class"] = "splashjs.animation.easing.Back";



