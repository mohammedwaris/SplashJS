/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
export class Elastic {
    public static EASE_IN : string = "elastic_ease_in";

    public static EASE_OUT : string = "elastic_ease_out";

    public static EASE_IN_OUT : string = "elastic_ease_in_out";

    public static easeIn$double$double$double$double(t : number, b : number, c : number, d : number) : number {
        if(t === 0) return b;
        if((t /= d) === 1) return b + c;
        let p : number = d * 0.3;
        let a : number = c;
        let s : number = p / 4;
        return -(a * <number>Math.pow(2, 10 * (t -= 1)) * <number>Math.sin((t * d - s) * (2 * <number>Math.PI) / p)) + b;
    }

    public static easeIn$double$double$double$double$double$double(t : number, b : number, c : number, d : number, a : number, p : number) : number {
        let s : number;
        if(t === 0) return b;
        if((t /= d) === 1) return b + c;
        if(a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p / (2 * <number>Math.PI) * <number>Math.asin(c / a);
        }
        return -(a * <number>Math.pow(2, 10 * (t -= 1)) * <number>Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }

    public static easeIn(t? : any, b? : any, c? : any, d? : any, a? : any, p? : any) : any {
        if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && ((typeof a === 'number') || a === null) && ((typeof p === 'number') || p === null)) {
            return <any>Elastic.easeIn$double$double$double$double$double$double(t, b, c, d, a, p);
        } else if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && a === undefined && p === undefined) {
            return <any>Elastic.easeIn$double$double$double$double(t, b, c, d);
        } else throw new Error('invalid overload');
    }

    public static easeOut$double$double$double$double(t : number, b : number, c : number, d : number) : number {
        if(t === 0) return b;
        if((t /= d) === 1) return b + c;
        let p : number = d * 0.3;
        let a : number = c;
        let s : number = p / 4;
        return (a * <number>Math.pow(2, -10 * t) * <number>Math.sin((t * d - s) * (2 * <number>Math.PI) / p) + c + b);
    }

    public static easeOut$double$double$double$double$double$double(t : number, b : number, c : number, d : number, a : number, p : number) : number {
        let s : number;
        if(t === 0) return b;
        if((t /= d) === 1) return b + c;
        if(a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p / (2 * <number>Math.PI) * <number>Math.asin(c / a);
        }
        return (a * <number>Math.pow(2, -10 * t) * <number>Math.sin((t * d - s) * (2 * <number>Math.PI) / p) + c + b);
    }

    public static easeOut(t? : any, b? : any, c? : any, d? : any, a? : any, p? : any) : any {
        if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && ((typeof a === 'number') || a === null) && ((typeof p === 'number') || p === null)) {
            return <any>Elastic.easeOut$double$double$double$double$double$double(t, b, c, d, a, p);
        } else if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && a === undefined && p === undefined) {
            return <any>Elastic.easeOut$double$double$double$double(t, b, c, d);
        } else throw new Error('invalid overload');
    }

    public static easeInOut$double$double$double$double(t : number, b : number, c : number, d : number) : number {
        if(t === 0) return b;
        if((t /= d / 2) === 2) return b + c;
        let p : number = d * ((<any>Math).fround(0.3 * 1.5));
        let a : number = c;
        let s : number = p / 4;
        if(t < 1) return -0.5 * (a * <number>Math.pow(2, 10 * (t -= 1)) * <number>Math.sin((t * d - s) * (2 * <number>Math.PI) / p)) + b;
        return a * <number>Math.pow(2, -10 * (t -= 1)) * <number>Math.sin((t * d - s) * (2 * <number>Math.PI) / p) * 0.5 + c + b;
    }

    public static easeInOut$double$double$double$double$double$double(t : number, b : number, c : number, d : number, a : number, p : number) : number {
        let s : number;
        if(t === 0) return b;
        if((t /= d / 2) === 2) return b + c;
        if(a < Math.abs(c)) {
            a = c;
            s = p / 4;
        } else {
            s = p / (2 * <number>Math.PI) * <number>Math.asin(c / a);
        }
        if(t < 1) return -0.5 * (a * <number>Math.pow(2, 10 * (t -= 1)) * <number>Math.sin((t * d - s) * (2 * <number>Math.PI) / p)) + b;
        return a * <number>Math.pow(2, -10 * (t -= 1)) * <number>Math.sin((t * d - s) * (2 * <number>Math.PI) / p) * 0.5 + c + b;
    }

    public static easeInOut(t? : any, b? : any, c? : any, d? : any, a? : any, p? : any) : any {
        if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && ((typeof a === 'number') || a === null) && ((typeof p === 'number') || p === null)) {
            return <any>Elastic.easeInOut$double$double$double$double$double$double(t, b, c, d, a, p);
        } else if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && a === undefined && p === undefined) {
            return <any>Elastic.easeInOut$double$double$double$double(t, b, c, d);
        } else throw new Error('invalid overload');
    }
}
Elastic["__class"] = "splashjs.animation.easing.Elastic";



