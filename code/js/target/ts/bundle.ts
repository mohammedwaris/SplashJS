/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace splashjs.animation.easing {
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
                return <any>splashjs.animation.easing.Back.easeIn$double$double$double$double$double(t, b, c, d, s);
            } else if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && s === undefined) {
                return <any>splashjs.animation.easing.Back.easeIn$double$double$double$double(t, b, c, d);
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
                return <any>splashjs.animation.easing.Back.easeOut$double$double$double$double$double(t, b, c, d, s);
            } else if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && s === undefined) {
                return <any>splashjs.animation.easing.Back.easeOut$double$double$double$double(t, b, c, d);
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
                return <any>splashjs.animation.easing.Back.easeInOut$double$double$double$double$double(t, b, c, d, s);
            } else if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && s === undefined) {
                return <any>splashjs.animation.easing.Back.easeInOut$double$double$double$double(t, b, c, d);
            } else throw new Error('invalid overload');
        }
    }
    Back["__class"] = "splashjs.animation.easing.Back";

}
namespace splashjs.animation.easing {
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

}
namespace splashjs.animation.easing {
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

}
namespace splashjs.animation.easing {
    export class Cubic {
        public static EASE_IN : string = "cubic_ease_in";

        public static EASE_OUT : string = "cubic_ease_out";

        public static EASE_IN_OUT : string = "cubic_ease_in_out";

        public static easeIn(t : number, b : number, c : number, d : number) : number {
            return c * (t /= d) * t * t + b;
        }

        public static easeOut(t : number, b : number, c : number, d : number) : number {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        }

        public static easeInOut(t : number, b : number, c : number, d : number) : number {
            if((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
    }
    Cubic["__class"] = "splashjs.animation.easing.Cubic";

}
namespace splashjs.animation.easing {
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
                return <any>splashjs.animation.easing.Elastic.easeIn$double$double$double$double$double$double(t, b, c, d, a, p);
            } else if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && a === undefined && p === undefined) {
                return <any>splashjs.animation.easing.Elastic.easeIn$double$double$double$double(t, b, c, d);
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
                return <any>splashjs.animation.easing.Elastic.easeOut$double$double$double$double$double$double(t, b, c, d, a, p);
            } else if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && a === undefined && p === undefined) {
                return <any>splashjs.animation.easing.Elastic.easeOut$double$double$double$double(t, b, c, d);
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
                return <any>splashjs.animation.easing.Elastic.easeInOut$double$double$double$double$double$double(t, b, c, d, a, p);
            } else if(((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && a === undefined && p === undefined) {
                return <any>splashjs.animation.easing.Elastic.easeInOut$double$double$double$double(t, b, c, d);
            } else throw new Error('invalid overload');
        }
    }
    Elastic["__class"] = "splashjs.animation.easing.Elastic";

}
namespace splashjs.animation.easing {
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

}
namespace splashjs.animation.easing {
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

}
namespace splashjs.animation.easing {
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

}
namespace splashjs.animation.easing {
    export class Quart {
        public static EASE_IN : string = "quart_ease_in";

        public static EASE_OUT : string = "quart_ease_out";

        public static EASE_IN_OUT : string = "quart_ease_in_out";

        public static easeIn(t : number, b : number, c : number, d : number) : number {
            return c * (t /= d) * t * t * t + b;
        }

        public static easeOut(t : number, b : number, c : number, d : number) : number {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        }

        public static easeInOut(t : number, b : number, c : number, d : number) : number {
            if((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
    }
    Quart["__class"] = "splashjs.animation.easing.Quart";

}
namespace splashjs.animation.easing {
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

}
namespace splashjs.animation.easing {
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

}
namespace splashjs.animation {
    export class Frame implements splashjs.animation.iface.IFrame {
        /*private*/ type : string = Frame.FrameType.FIXED;

        /*private*/ index : number = -1;

        /*private*/ width : number = -1;

        /*private*/ height : number = -1;

        /*private*/ x : number = 0;

        /*private*/ y : number = 0;

        public constructor(x? : any, y? : any, width? : any, height? : any) {
            if(((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
                let __args = arguments;
                this.type = Frame.FrameType.FIXED;
                this.index = -1;
                this.width = -1;
                this.height = -1;
                this.x = 0;
                this.y = 0;
                (() => {
                    this.x = x;
                    this.y = y;
                    this.width = width;
                    this.height = height;
                })();
            } else if(((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && height === undefined) {
                let __args = arguments;
                let width : any = __args[0];
                let height : any = __args[1];
                let index : any = __args[2];
                this.type = Frame.FrameType.FIXED;
                this.index = -1;
                this.width = -1;
                this.height = -1;
                this.x = 0;
                this.y = 0;
                (() => {
                    this.width = width;
                    this.height = height;
                    this.index = index;
                })();
            } else if(((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && width === undefined && height === undefined) {
                let __args = arguments;
                let width : any = __args[0];
                let height : any = __args[1];
                this.type = Frame.FrameType.FIXED;
                this.index = -1;
                this.width = -1;
                this.height = -1;
                this.x = 0;
                this.y = 0;
                (() => {
                    this.width = width;
                    this.height = height;
                })();
            } else throw new Error('invalid overload');
        }

        public getX() : number {
            return this.x;
        }

        public getY() : number {
            return this.y;
        }

        public getWidth() : number {
            return this.width;
        }

        public getHeight() : number {
            return this.height;
        }

        public getIndex() : number {
            return this.index;
        }
    }
    Frame["__class"] = "splashjs.animation.Frame";
    Frame["__interfaces"] = ["splashjs.animation.iface.IFrame"];



    export namespace Frame {

        export class FrameType {
            public __parent: any;
            public static FIXED : string = "fixed";

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        FrameType["__class"] = "splashjs.animation.Frame.FrameType";

    }

}
namespace splashjs.animation.iface {
    export interface IAnimation extends splashjs.events.iface.IEventDispatcher {    }
}
namespace splashjs.animation.iface {
    export interface ICircularTransition extends splashjs.animation.iface.ITransition {    }
}
namespace splashjs.animation.iface {
    export interface IFrame {
        getX() : number;

        getY() : number;

        getWidth() : number;

        getHeight() : number;

        getIndex() : number;
    }
}
namespace splashjs.animation.iface {
    export interface IMovieClipData extends splashjs.events.iface.IEventDispatcher {
        getLabel() : string;

        getFrames() : splashjs.animation.iface.IFrame[];

        getSpriteSheet() : splashjs.animation.iface.ISpriteSheet;
    }
}
namespace splashjs.animation.iface {
    export interface IParallelTransition extends splashjs.animation.iface.ITransition {    }
}
namespace splashjs.animation.iface {
    export interface IScaleTransition extends splashjs.animation.iface.ITransition {
        setScaleTransitionType(scaleTransitionType : string);

        getScaleTransitionType() : string;
    }
}
namespace splashjs.animation.iface {
    export interface ISpriteData {
        getLabel() : string;

        getFrame() : splashjs.animation.iface.IFrame;

        getSpriteSheet() : splashjs.animation.iface.ISpriteSheet;
    }
}
namespace splashjs.animation.iface {
    export interface ISpriteSheet extends splashjs.events.iface.IEventDispatcher {
        getImagePath() : string;

        getSpriteDataByLabel(name : string) : splashjs.animation.iface.ISpriteData;

        getMovieClipDataByLabel(name : string) : splashjs.animation.iface.IMovieClipData;

        getWidth() : number;

        getHeight() : number;

        setImageBase64(imageBase64 : string);

        getImageBase64() : string;

        getResource() : splashjs.utils.iface.IResource;
    }
}
namespace splashjs.animation.iface {
    export interface ITransition extends splashjs.animation.iface.IAnimation {
        getTransitionState() : string;

        getAutoReverse() : boolean;

        setAutoReverse(autoReverse : boolean) : ITransition;

        getLoopCount() : number;

        setLoopCount(loopCount : number) : ITransition;

        setDuration(duration : number) : ITransition;

        getDuration() : number;

        setDelay(delay : number) : ITransition;

        getDelay() : number;

        getTo() : number;

        setTo(to : number) : ITransition;

        setFrom(from : number) : ITransition;

        getFrom() : number;

        setEasing(easing : string) : ITransition;

        getEasing() : string;

        getTargetObject() : splashjs.display.iface.IDisplayObject;

        setTargetObject(targetObject : splashjs.display.iface.IDisplayObject) : ITransition;

        update(nextValue : number) : ITransition;

        play() : ITransition;

        stop() : ITransition;
    }
}
namespace splashjs.animation {
    export class ScaleTransitionType {
        public static X : string = "x";

        public static Y : string = "y";

        public static XY : string = "xy";
    }
    ScaleTransitionType["__class"] = "splashjs.animation.ScaleTransitionType";

}
namespace splashjs.animation {
    export class SpriteData implements splashjs.animation.iface.ISpriteData {
        /*private*/ spriteSheet : splashjs.animation.iface.ISpriteSheet;

        /*private*/ frame : splashjs.animation.iface.IFrame;

        /*private*/ label : string;

        public constructor(spriteSheet : splashjs.animation.iface.ISpriteSheet, label : string, frame : splashjs.animation.iface.IFrame) {
            if(this.spriteSheet===undefined) this.spriteSheet = null;
            if(this.frame===undefined) this.frame = null;
            if(this.label===undefined) this.label = null;
            this.spriteSheet = spriteSheet;
            this.frame = frame;
            this.label = label;
        }

        public getLabel() : string {
            return this.label;
        }

        public getFrame() : splashjs.animation.iface.IFrame {
            return this.frame;
        }

        public getSpriteSheet() : splashjs.animation.iface.ISpriteSheet {
            return this.spriteSheet;
        }
    }
    SpriteData["__class"] = "splashjs.animation.SpriteData";
    SpriteData["__interfaces"] = ["splashjs.animation.iface.ISpriteData"];


}
namespace splashjs.animation {
    export class TransitionState {
        public static NONE : string = "none";

        public static NORMAL : string = "normal";

        public static REVERSE : string = "reverse";
    }
    TransitionState["__class"] = "splashjs.animation.TransitionState";

}
namespace splashjs.animation {
    export class TransitionType {
        public static SCALE_X : string = "scale_x";

        public static SCALE_Y : string = "scale_y";

        public static SCALE_XY : string = "scale_xy";

        public static TRANSLATE_X : string = "translate_x";

        public static TRANSLATE_Y : string = "translate_y";

        public static TRANSLATE_XY : string = "translate_xy";

        public static FADE : string = "fade";

        public static ROTATION : string = "rotation";

        public static PARALLEL : string = "parallel";

        public static SEQUENTIAL : string = "sequential";

        public static PAUSE : string = "pause";
    }
    TransitionType["__class"] = "splashjs.animation.TransitionType";

}
namespace splashjs.application.iface {
    export interface IApplication extends splashjs.events.iface.IEventDispatcher {
        isOnline() : boolean;
    }
}
namespace splashjs.application.iface {
    export interface IStageOwner extends splashjs.events.iface.IEventDispatcher {
        setWidth(width : number);

        setHeight(height : number);

        getWidth() : number;

        getHeight() : number;

        getStage() : splashjs.display.iface.IStage;
    }
}
namespace splashjs {
    export class Class {
        /*private*/ packageID : string;

        /*private*/ userClassName : string;

        /*private*/ userClass : any;

        static classes : Array<splashjs.Class>; public static classes_$LI$() : Array<splashjs.Class> { if(Class.classes == null) Class.classes = <any>([]); return Class.classes; };

        public constructor(packageID : string, userClassName : string, userClass : any) {
            if(this.packageID===undefined) this.packageID = null;
            if(this.userClassName===undefined) this.userClassName = null;
            if(this.userClass===undefined) this.userClass = null;
            this.packageID = packageID;
            this.userClassName = userClassName;
            this.userClass = userClass;
        }

        public static define(packageID : string, classInFunc : Function) {
            let userClass : Object = <any>(classInFunc());
            let userClassName : string = <any>(userClass["name"]);
            if(packageID == null || /* isEmpty */(packageID.length === 0)) {
                window[userClassName] = userClass;
            } else {
                let words : string[] = packageID.split(".");
                let js : string = "";
                let str : string = "";
                for(let i : number = 0; i < words.length; i++) {{
                    if(i === 0) {
                        window[words[i]] = <Object>new Object();
                        js = words[0] + " = " + words[0] + " || {};";
                        eval(js);
                        str = words[0];
                        console.info(js);
                    } else if(i > 0) {
                        str += "." + words[i];
                        js = str + " = " + str + " || {};";
                        eval(js);
                        console.info(js);
                    }
                };}
                let fullPackage : Object = <any>(eval(str));
                fullPackage[userClassName] = userClass;
                console.info(str);
            }
            /* add */(Class.classes_$LI$().push(new splashjs.Class(packageID, userClassName, userClass))>0);
        }

        public static get(className : string) : any {
            return <any>(eval(className));
        }
    }
    Class["__class"] = "splashjs.Class";

}
namespace splashjs.controls {
    export class BaseItem implements splashjs.controls.iface.IBaseItem {
        constructor() {
        }
    }
    BaseItem["__class"] = "splashjs.controls.BaseItem";
    BaseItem["__interfaces"] = ["splashjs.controls.iface.IBaseItem"];


}
namespace splashjs.controls.iface {
    export interface IBaseInput extends splashjs.controls.iface.IBaseText {
        setPlaceHolderText(placeHolderText : string);

        getPlaceHolderText() : string;

        setMaxChars(maxChars : number);

        getMaxChars() : number;

        getSelectionBeginIndex() : number;

        getSelectionEndIndex() : number;

        setSelection(beginIndex : number, endIndex : number);

        setEditable(editable : boolean);

        getEditable() : boolean;

        isEditable() : boolean;
    }
}
namespace splashjs.controls.iface {
    export interface IBaseItem {    }
}
namespace splashjs.controls.iface {
    export interface IBaseList extends splashjs.controls.iface.IControl {    }
}
namespace splashjs.controls.iface {
    export interface IBaseText extends splashjs.controls.iface.IControl {
        setText(text : string);

        getText() : string;
    }
}
namespace splashjs.controls.iface {
    export interface IButton extends splashjs.controls.iface.IBaseText {    }
}
namespace splashjs.controls.iface {
    export interface IControl extends splashjs.display.iface.IInteractiveObject {
        setEnabled(enabled : boolean);

        getEnabled() : boolean;

        isEnabled() : boolean;
    }
}
namespace splashjs.controls.iface {
    export interface IItem extends splashjs.controls.iface.IBaseItem {
        getText() : string;
    }
}
namespace splashjs.controls.iface {
    export interface IItemGroup extends splashjs.controls.iface.IBaseItem {
        addItem(item : splashjs.controls.iface.IItem);

        removeItem(item : splashjs.controls.iface.IItem);

        getAllItems() : Array<splashjs.controls.iface.IItem>;

        setTitle(title : string);

        getTitle() : string;
    }
}
namespace splashjs.controls.iface {
    export interface ILabel extends splashjs.controls.iface.IBaseText {    }
}
namespace splashjs.controls.iface {
    export interface IList extends splashjs.controls.iface.IBaseList {
        getAllItems() : Array<splashjs.controls.iface.IBaseItem>;
    }
}
namespace splashjs.controls.iface {
    export interface IRadioButton extends splashjs.controls.iface.IControl {
        setValue(value : splashjs.lang.iface.ISplashObject);

        getValue() : splashjs.lang.iface.ISplashObject;

        getGroup() : splashjs.controls.iface.IRadioButtonGroup;

        setGroup(group : splashjs.controls.iface.IRadioButtonGroup);

        setSelected(selected : boolean);

        getSelected() : boolean;

        isSelected() : boolean;
    }
}
namespace splashjs.controls.iface {
    export interface IRadioButtonGroup {
        getName() : string;

        getNumRadioButtons() : number;

        getSelectedData() : splashjs.lang.iface.ISplashObject;

        setSelection(radioButton : splashjs.controls.iface.IRadioButton);

        getSelection() : splashjs.controls.iface.IRadioButton;
    }
}
namespace splashjs.controls.iface {
    export interface ISpacer extends splashjs.controls.iface.IControl {    }
}
namespace splashjs.controls.iface {
    export interface ITextArea extends splashjs.controls.iface.IBaseInput {    }
}
namespace splashjs.controls.iface {
    export interface ITextInput extends splashjs.controls.iface.IBaseInput {
        setDisplayAsPassword(displayAsPassword : boolean);

        getDisplayAsPassword() : boolean;
    }
}
namespace splashjs.controls.iface {
    export interface ITree extends splashjs.controls.iface.IControl {
        getTreeData() : any;
    }
}
namespace splashjs.controls {
    export class LabelAlignment {
        public static TOP : string = "top";

        public static BOTTOM : string = "bottom";

        public static LEFT : string = "left";

        public static RIGHT : string = "right";
    }
    LabelAlignment["__class"] = "splashjs.controls.LabelAlignment";

}
namespace splashjs.controls {
    export class RadioButtonGroup implements splashjs.controls.iface.IRadioButtonGroup {
        /*private*/ name : string;

        /*private*/ radioButtons : Array<splashjs.controls.iface.IRadioButton> = <any>([]);

        /*private*/ eventHandlers : Array<(p1: splashjs.events.iface.IEvent) => void> = <any>([]);

        public constructor(name : string) {
            if(this.name===undefined) this.name = null;
            this.name = name;
        }

        public getName() : string {
            return this.name;
        }

        public getNumRadioButtons() : number {
            return /* size */(<number>this.radioButtons.length);
        }

        public getSelectedData() : splashjs.lang.iface.ISplashObject {
            return this.getSelection().getValue();
        }

        public setSelection(selection : splashjs.controls.iface.IRadioButton) {
            let radioButton : splashjs.controls.iface.IRadioButton = null;
            for(let i : number = 0; i < /* size */(<number>this.radioButtons.length); i++) {{
                radioButton = /* get */this.radioButtons[i];
                if(radioButton === selection) {
                    this.setAllSelected(false);
                    radioButton.setSelected(true);
                    break;
                }
            };}
        }

        public getSelection() : splashjs.controls.iface.IRadioButton {
            let selectedRadioButton : splashjs.controls.iface.IRadioButton = null;
            let radioButton : splashjs.controls.iface.IRadioButton = null;
            for(let i : number = 0; i < /* size */(<number>this.radioButtons.length); i++) {{
                radioButton = /* get */this.radioButtons[i];
                if(radioButton.getSelected() === true) {
                    selectedRadioButton = radioButton;
                    break;
                }
            };}
            return selectedRadioButton;
        }

        public addRadioButton(radioButton : splashjs.controls.iface.IRadioButton) {
            let eventHandler : (p1: splashjs.events.iface.IEvent) => void = (event) => {
                this.setAllSelected(false);
                (<splashjs.controls.iface.IRadioButton><any>event.getCurrentTarget()).setSelected(true);
            };
            radioButton.addEventListener(splashjs.events.MouseEvent.CLICK, <any>(eventHandler));
            radioButton.setGroup(this);
            /* add */(this.radioButtons.push(radioButton)>0);
            /* add */(this.eventHandlers.push(eventHandler)>0);
        }

        public removeRadioButton(radioButton : splashjs.controls.iface.IRadioButton) {
            let pos : number = -1;
            for(let i : number = 0; i < /* size */(<number>this.radioButtons.length); i++) {{
                if(radioButton === /* get */this.radioButtons[i]) {
                    pos = i;
                    break;
                }
            };}
            if(pos >= 0) {
                /* get */this.radioButtons[pos].setGroup(null);
                /* get */this.radioButtons[pos].removeEventListener(splashjs.events.MouseEvent.CLICK, <any>(/* get */this.eventHandlers[pos]));
                /* remove */this.radioButtons.splice(pos, 1)[0];
                /* remove */this.eventHandlers.splice(pos, 1)[0];
            }
        }

        /*private*/ setAllSelected(selected : boolean) {
            for(let i : number = 0; i < /* size */(<number>this.radioButtons.length); i++) {{
                /* get */this.radioButtons[i].setSelected(selected);
            };}
        }
    }
    RadioButtonGroup["__class"] = "splashjs.controls.RadioButtonGroup";
    RadioButtonGroup["__interfaces"] = ["splashjs.controls.iface.IRadioButtonGroup"];


}
namespace splashjs.def.js {
    export let navigator : splashjs.def.js.Navigator = null;

}
namespace splashjs.def.js {
    export class MediaDevices extends EventTarget {
        public getUserMedia(param : Object) : Promise<any> {
            return null;
        }
    }
    MediaDevices["__class"] = "splashjs.def.js.MediaDevices";

}
namespace splashjs.def.js {
    export class Navigator {
        public mediaDevices : splashjs.def.js.MediaDevices;

        constructor() {
            if(this.mediaDevices===undefined) this.mediaDevices = null;
        }
    }
    Navigator["__class"] = "splashjs.def.js.Navigator";

}
namespace splashjs.def.webrtc {
    export class MediaStream {    }
    MediaStream["__class"] = "splashjs.def.webrtc.MediaStream";

}
namespace splashjs.display.iface {
    export interface IDesktopWindow {    }
}
namespace splashjs.display.desktop.iface {
    export interface INativeWindow {    }
}
namespace splashjs.display.desktop.iface {
    export interface IStage extends splashjs.display.iface.IStage {
        getNativeWindow() : splashjs.display.desktop.iface.INativeWindow;
    }
}
namespace splashjs.display {
    export class NativeWindow implements splashjs.display.desktop.iface.INativeWindow {
        /*private*/ initOptions : splashjs.display.NativeWindowInitOptions;

        /*private*/ nativeWindowStub : splashjs.display.desktop.stubs.NativeWindowStub;

        public constructor(initOptions? : any) {
            if(((initOptions != null && initOptions instanceof <any>splashjs.display.NativeWindowInitOptions) || initOptions === null)) {
                let __args = arguments;
                if(this.initOptions===undefined) this.initOptions = null;
                if(this.nativeWindowStub===undefined) this.nativeWindowStub = null;
                if(this.initOptions===undefined) this.initOptions = null;
                if(this.nativeWindowStub===undefined) this.nativeWindowStub = null;
                (() => {
                    this.initOptions = initOptions;
                    this.nativeWindowStub = splashjs.display.desktop.stubs.NativeWindowStub.newInstance();
                })();
            } else if(initOptions === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let initOptions : any = new splashjs.display.NativeWindowInitOptions();
                    if(this.initOptions===undefined) this.initOptions = null;
                    if(this.nativeWindowStub===undefined) this.nativeWindowStub = null;
                    if(this.initOptions===undefined) this.initOptions = null;
                    if(this.nativeWindowStub===undefined) this.nativeWindowStub = null;
                    (() => {
                        this.initOptions = initOptions;
                        this.nativeWindowStub = splashjs.display.desktop.stubs.NativeWindowStub.newInstance();
                    })();
                }
            } else throw new Error('invalid overload');
        }

        public activate() {
            this.nativeWindowStub.show();
        }

        public getStage() : any {
            return this.nativeWindowStub.getStage();
        }
    }
    NativeWindow["__class"] = "splashjs.display.NativeWindow";
    NativeWindow["__interfaces"] = ["splashjs.display.desktop.iface.INativeWindow"];


}
namespace splashjs.display {
    export class NativeWindowDisplayState {
        public static MAXIMIZED : string = "maximized";

        public static MINIMIZED : string = "minimized";

        public static NORMAL : string = "normal";
    }
    NativeWindowDisplayState["__class"] = "splashjs.display.NativeWindowDisplayState";

}
namespace splashjs.display {
    export class NativeWindowInitOptions {
        /*private*/ maximizable : boolean = true;

        /*private*/ minimizable : boolean = true;

        /*private*/ owner : splashjs.display.desktop.iface.INativeWindow = null;

        /*private*/ renderMode : string = null;

        /*private*/ resizable : boolean = true;

        /*private*/ systemChrome : string = splashjs.display.NativeWindowSystemChrome.STANDARD;

        /*private*/ transparent : boolean = false;

        /*private*/ type : string = splashjs.display.NativeWindowType.NORMAL;

        public constructor() {
        }

        public setMaximizable(maximizable : boolean) {
            this.maximizable = maximizable;
        }

        public getMaximizable() : boolean {
            return this.maximizable;
        }

        public setMinizable(minimizable : boolean) {
            this.minimizable = minimizable;
        }

        public setOwner(owner : splashjs.display.desktop.iface.INativeWindow) {
            this.owner = owner;
        }

        public getOwner() : splashjs.display.desktop.iface.INativeWindow {
            return this.owner;
        }
    }
    NativeWindowInitOptions["__class"] = "splashjs.display.NativeWindowInitOptions";

}
namespace splashjs.display {
    export class NativeWindowRenderMode {
        public static AUTO : string = "auto";

        public static CPU : string = "cpu";

        public static DIRECT : string = "direct";

        public static GPU : string = "gpu";
    }
    NativeWindowRenderMode["__class"] = "splashjs.display.NativeWindowRenderMode";

}
namespace splashjs.display {
    export class NativeWindowResize {
        public static BOTTOM : string = "bottom";

        public static BOTTOM_LEFT : string = "bottom_left";

        public static BOTTOM_RIGHT : string = "bottom_right";

        public static LEFT : string = "left";

        public static NONE : string = "none";

        public static RIGHT : string = "right";

        public static TOP : string = "top";

        public static TOP_LEFT : string = "top_left";

        public static TOP_RIGHT : string = "top_right";
    }
    NativeWindowResize["__class"] = "splashjs.display.NativeWindowResize";

}
namespace splashjs.display {
    export class NativeWindowSystemChrome {
        public static ALTERNATE : string = "alternate";

        public static NONE : string = "none";

        public static STANDARD : string = "standard";
    }
    NativeWindowSystemChrome["__class"] = "splashjs.display.NativeWindowSystemChrome";

}
namespace splashjs.display {
    export class NativeWindowType {
        public static LIGHTWEIGHT : string = "lightweight";

        public static NORMAL : string = "normal";

        public static UTILITY : string = "utility";
    }
    NativeWindowType["__class"] = "splashjs.display.NativeWindowType";

}
namespace splashjs.display.desktop.stubs {
    export class NativeWindowStub {
        public static newInstance() : NativeWindowStub {
            return new NativeWindowStub();
        }

        public show() {
        }

        public getStage() : any {
            return null;
        }
    }
    NativeWindowStub["__class"] = "splashjs.display.desktop.stubs.NativeWindowStub";

}
namespace splashjs.display.iface {
    export interface IBitmap extends splashjs.display.iface.IDisplayObject {
        setBitmapData(bitmapData : splashjs.display.iface.IBitmapData);

        getBitmapData() : splashjs.display.iface.IBitmapData;
    }
}
namespace splashjs.display.iface {
    export interface IBitmapData extends splashjs.events.iface.IEventDispatcher {
        getBitmapDataWidth() : number;

        getBitmapDataHeight() : number;
    }
}
namespace splashjs.display.iface {
    export interface IBitmapDrawable {    }
}
namespace splashjs.display.iface {
    export interface ICircle extends splashjs.display.iface.IShape {
        setRadius(radius : number);

        getRadius() : number;
    }
}
namespace splashjs.display.iface {
    export interface IDisplayObject extends splashjs.events.iface.IEventDispatcher {
        getX() : number;

        setX(x : number);

        getY() : number;

        setY(y : number);

        setXY(x : number, y : number);

        getWidth() : number;

        setWidth(width : number);

        getHeight() : number;

        setHeight(height : number);

        setSize(width : number, height : number);

        getRegX() : number;

        setRegX(regX : number);

        getRegY() : number;

        setRegY(regY : number);

        setRegXY(regX : number, regY : number);

        getScaleX() : number;

        setScaleX(scaleX : number);

        getScaleY() : number;

        setScaleY(scaleY : number);

        setScaleXY(scaleX : number, scaleY : number);

        getRotation() : number;

        setRotation(rotation : number);

        getVisible() : boolean;

        setVisible(visible : boolean);

        getAlpha() : number;

        setAlpha(alpha : number);

        getName() : string;

        setName(name : string);

        getParent() : splashjs.display.iface.IDisplayObjectContainer;

        getMouseX() : number;

        getMouseY() : number;

        setMouseVisible(mouseVisible : boolean);

        getMouseVisible() : boolean;

        setMouseCursor(mouseCursor : splashjs.ui.iface.IMouseCursor);

        getMouseCursor() : splashjs.ui.iface.IMouseCursor;

        addFilter(filter : splashjs.filters.iface.IFilter);

        removeFilter(filter : splashjs.filters.iface.IFilter);

        removeAllFilters();

        hasFilter(filter : splashjs.filters.iface.IFilter) : boolean;

        getAllFilters() : Array<splashjs.filters.iface.IFilter>;

        localToGlobal(point : splashjs.geom.iface.IPoint) : splashjs.geom.iface.IPoint;

        globalToLocal(point : splashjs.geom.iface.IPoint) : splashjs.geom.iface.IPoint;

        hitTestObject(displayObject : IDisplayObject) : boolean;

        hitTestPoint(x : number, y : number) : boolean;
    }
}
namespace splashjs.display.iface {
    export interface IDisplayObjectContainer extends splashjs.display.iface.IInteractiveObject {
        addChild(displayObject : splashjs.display.iface.IDisplayObject);

        addChildAt(displayObject : splashjs.display.iface.IDisplayObject, index : number);

        removeChild(displayObject : splashjs.display.iface.IDisplayObject);

        removeChildAt(index : number);

        getChildByName(name : string) : splashjs.display.iface.IDisplayObject;

        getChildAt(index : number) : splashjs.display.iface.IDisplayObject;

        getChildIndex(displayObject : splashjs.display.iface.IDisplayObject) : number;

        setChildIndex(displayObject : splashjs.display.iface.IDisplayObject, index : number);

        swapChildren(displayObject1 : splashjs.display.iface.IDisplayObject, displayObject2 : splashjs.display.iface.IDisplayObject);

        swapChildrenAt(index1 : number, index2 : number);

        contains(displayObject : splashjs.display.iface.IDisplayObject) : boolean;

        getNumChildren() : number;

        getAllChildren() : Array<splashjs.display.iface.IDisplayObject>;
    }
}
namespace splashjs.display.iface {
    export interface IDraggable {
        setX(x : number);

        setY(y : number);

        getDraggable() : boolean;
    }
}
namespace splashjs.display.iface {
    export interface IEllipse extends splashjs.display.iface.IShape {    }
}
namespace splashjs.display.iface {
    export interface IImage extends splashjs.display.iface.IInteractiveObject {
        getImagePath() : string;

        getImageType() : string;
    }
}
namespace splashjs.display.iface {
    export interface IInteractiveObject extends splashjs.display.iface.IDisplayObject {
        dispatchClickEvent(mouseEvent : splashjs.events.iface.IMouseEvent);

        dispatchDoubleClickEvent(mouseEvent : splashjs.events.iface.IMouseEvent);

        dispatchMouseMoveEvent();

        dispatchMouseEnterEvent();

        dispatchMouseLeaveEvent();

        dispatchMouseOverEvent();

        dispatchMouseOutEvent();

        dispatchMouseUpEvent();
    }
}
namespace splashjs.display.iface {
    export interface ILine extends splashjs.display.iface.IShape {
        setLength(length : number);

        getLength() : number;
    }
}
namespace splashjs.display.iface {
    export interface IMovieClip extends splashjs.display.iface.ISprite {
        getMovieClipDataByLabel(label : string) : splashjs.animation.iface.IMovieClipData;

        getFrameRate() : number;

        play();

        stop();

        getCurrentLabel() : string;

        getCurrentFrameIndex() : number;

        getCurrentLoopCount() : number;

        getAllLabels() : Array<string>;
    }
}
namespace splashjs.display.iface {
    export interface IRectangle extends splashjs.display.iface.IShape {
        setCornerRadiusX(rx : number);

        getCornerRadiusX() : number;

        setCornerRadiusY(ry : number);

        getCornerRadiusY() : number;

        getRectangleWidth() : number;

        setRectangleWidth(rectangleWidth : number);

        getRectangleHeight() : number;

        setRectangleHeight(rectangleHeight : number);
    }
}
namespace splashjs.display.iface {
    export interface IScene extends splashjs.display.iface.IDisplayObject {    }
}
namespace splashjs.display.iface {
    export interface IShape extends splashjs.display.iface.IInteractiveObject {
        setStrokeWidth(strokeWidth : number);

        getStrokeWidth() : number;

        setFillColor(fillColor : splashjs.utils.iface.IColor);

        getFillColor() : splashjs.utils.iface.IColor;

        setStrokeColor(strokeColor : splashjs.utils.iface.IColor);

        getStrokeColor() : splashjs.utils.iface.IColor;
    }
}
namespace splashjs.display.iface {
    export interface ISimpleButton extends splashjs.display.iface.IInteractiveObject {
        setUpState(upState : splashjs.display.iface.IDisplayObject);

        getUpState() : splashjs.display.iface.IDisplayObject;

        setDownState(downState : splashjs.display.iface.IDisplayObject);

        getDownState() : splashjs.display.iface.IDisplayObject;

        setOverState(OverState : splashjs.display.iface.IDisplayObject);

        getOverState() : splashjs.display.iface.IDisplayObject;

        setDisabledState(disabledState : splashjs.display.iface.IDisplayObject);

        getDisabledState() : splashjs.display.iface.IDisplayObject;

        setEnabled(enabled : boolean);

        getEnabled() : boolean;

        isEnabled() : boolean;
    }
}
namespace splashjs.display.iface {
    export interface ISprite extends splashjs.display.iface.IDisplayObjectContainer {
        startDrag();

        stopDrag();
    }
}
namespace splashjs.display.iface {
    export interface IStage extends splashjs.display.iface.IDisplayObjectContainer {
        setScaleMode(scaleMode : string);

        setAlign(stageAlign : string);

        setColor(color : splashjs.utils.iface.IColor);

        getColor() : splashjs.utils.iface.IColor;

        getStageOwner() : splashjs.application.iface.IStageOwner;

        setScene(scene : splashjs.display.iface.IScene);

        getScene() : splashjs.display.iface.IScene;

        getStageWidth() : number;

        getStageHeight() : number;
    }
}
namespace splashjs.display {
    export class StageAlign {
        public static BOTTOM : string = "bottom";

        public static BOTTOM_LEFT : string = "bottom_left";

        public static BOTTOM_RIGHT : string = "bottom_right";

        public static LEFT : string = "left";

        public static RIGHT : string = "right";

        public static TOP : string = "top";

        public static CENTER : string = "center";

        public static TOP_LEFT : string = "top_left";

        public static TOP_RIGHT : string = "top_right";
    }
    StageAlign["__class"] = "splashjs.display.StageAlign";

}
namespace splashjs.display {
    export class StageScaleMode {
        public static EXACT_FIT : string = "exact_fit";

        public static NO_BORDER : string = "no_border";

        public static NO_SCALE : string = "no_scale";

        public static SHOW_ALL : string = "show_all";
    }
    StageScaleMode["__class"] = "splashjs.display.StageScaleMode";

}
namespace splashjs.events {
    export class Event implements splashjs.events.iface.IEvent {
        public static OPEN : string = "open";

        public static LOAD : string = "load";

        public static ONLINE : string = "online";

        public static OFFLINE : string = "offline";

        public static LOADED : string = "loaded";

        public static ADDED_TO_STAGE : string = "added_to_stage";

        public static REMOVED_FROM_STAGE : string = "removed_from_stage";

        public static ADDED : string = "added";

        public static REMOVED : string = "removed";

        public static ENTER_FRAME : string = "enter_frame";

        public static EXIT_FRAME : string = "exit_frame";

        public static SELECT : string = "select";

        public static CANCEL : string = "cancel";

        public static COMPLETE : string = "complete";

        public static RESIZE : string = "resize";

        public static CHANGE : string = "change";

        /*private*/ type : string;

        /*private*/ target : splashjs.events.iface.IEventDispatcher;

        /*private*/ currentTarget : splashjs.events.iface.IEventDispatcher;

        /*private*/ data : any;

        /*private*/ altKey : boolean;

        public constructor(type? : any, target? : any, currentTarget? : any) {
            if(((typeof type === 'string') || type === null) && ((target != null && (target["__interfaces"] != null && target["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || target.constructor != null && target.constructor["__interfaces"] != null && target.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || target === null) && ((currentTarget != null && (currentTarget["__interfaces"] != null && currentTarget["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || currentTarget.constructor != null && currentTarget.constructor["__interfaces"] != null && currentTarget.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || currentTarget === null)) {
                let __args = arguments;
                if(this.type===undefined) this.type = null;
                if(this.target===undefined) this.target = null;
                if(this.currentTarget===undefined) this.currentTarget = null;
                if(this.data===undefined) this.data = null;
                if(this.altKey===undefined) this.altKey = false;
                if(this.type===undefined) this.type = null;
                if(this.target===undefined) this.target = null;
                if(this.currentTarget===undefined) this.currentTarget = null;
                if(this.data===undefined) this.data = null;
                if(this.altKey===undefined) this.altKey = false;
                (() => {
                    this.type = type;
                    this.target = target;
                    this.currentTarget = currentTarget;
                })();
            } else if(((typeof type === 'string') || type === null) && target === undefined && currentTarget === undefined) {
                let __args = arguments;
                if(this.type===undefined) this.type = null;
                if(this.target===undefined) this.target = null;
                if(this.currentTarget===undefined) this.currentTarget = null;
                if(this.data===undefined) this.data = null;
                if(this.altKey===undefined) this.altKey = false;
                if(this.type===undefined) this.type = null;
                if(this.target===undefined) this.target = null;
                if(this.currentTarget===undefined) this.currentTarget = null;
                if(this.data===undefined) this.data = null;
                if(this.altKey===undefined) this.altKey = false;
                (() => {
                    this.type = type;
                })();
            } else throw new Error('invalid overload');
        }

        public getType() : string {
            return this.type;
        }

        public setTarget(target : splashjs.events.iface.IEventDispatcher) {
            this.target = target;
        }

        public getTarget() : splashjs.events.iface.IEventDispatcher {
            return this.target;
        }

        public setCurrentTarget(currentTarget : splashjs.events.iface.IEventDispatcher) {
            this.currentTarget = currentTarget;
        }

        public getCurrentTarget() : splashjs.events.iface.IEventDispatcher {
            return this.currentTarget;
        }

        public setData(data : any) {
            this.data = data;
        }

        public getData() : any {
            return this.data;
        }

        public toString() : string {
            let info : string = "[object " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor)) + "]";
            return info;
        }
    }
    Event["__class"] = "splashjs.events.Event";
    Event["__interfaces"] = ["splashjs.events.iface.IEvent"];


}
namespace splashjs.events {
    export class EventName {
        public static PROGRESS : string = "progress";

        public static ONLINE : string = "online";

        public static OFFLINE : string = "offline";

        public static IO_ERROR : string = "io_error";

        public static LOADED : string = "loaded";

        public static ABOUT_TO_BE_ADDED_TO_STAGE : string = "about_to_be_added_to_stage";

        public static STAGE_READY : string = "stage_ready";

        public static STAGE_RENDERED : string = "stage_rendered";

        public static WINDOW_CREATED : string = "window_created";
    }
    EventName["__class"] = "splashjs.events.EventName";

}
namespace splashjs.events.iface {
    export interface IEvent {
        getType() : string;

        getTarget() : splashjs.events.iface.IEventDispatcher;

        getCurrentTarget() : splashjs.events.iface.IEventDispatcher;

        setData(data : any);

        getData() : any;

        setTarget(target : splashjs.events.iface.IEventDispatcher);

        setCurrentTarget(currentTarget : splashjs.events.iface.IEventDispatcher);
    }
}
namespace splashjs.events.iface {
    export interface IEventDispatcher {
        addEventListener(eventName : string, eventHandler : (p1: splashjs.events.iface.IEvent) => void);

        removeEventListener(eventName : string, eventHandler : (p1: splashjs.events.iface.IEvent) => void);

        removeAllEventListeners(eventName : string);

        setRenderer(renderer : splashjs.render.iface.IRenderer);

        getRenderer() : splashjs.render.iface.IRenderer;

        getStage() : splashjs.display.iface.IStage;

        dispatchEvent(event : splashjs.events.iface.IEvent) : boolean;

        getUniqueID() : string;

        getID() : string;

        render();
    }
}
namespace splashjs.events.iface {
    export interface IIOErrorEvent extends splashjs.events.iface.IEvent {
        setText(text : string);

        getText() : string;
    }
}
namespace splashjs.events.iface {
    export interface IKeyboardEvent extends splashjs.events.iface.IEvent {    }
}
namespace splashjs.events.iface {
    export interface IMouseEvent extends splashjs.events.iface.IEvent {
        setLocalX(localX : number);

        getLocalX() : number;

        setLocalY(localY : number);

        getLocalY() : number;
    }
}
namespace splashjs.events.iface {
    export interface IPermissionEvent extends splashjs.events.iface.IEvent {
        getStatus() : string;

        setStatus(status : string);
    }
}
namespace splashjs.events.iface {
    export interface IProgressEvent extends splashjs.events.iface.IEvent {
        setBytesLoaded(bytesLoaded : number);

        setBytesTotal(bytesTotal : number);

        getBytesLoaded() : number;

        getBytesTotal() : number;
    }
}
namespace splashjs.events.iface {
    export interface ITimerEvent extends splashjs.events.iface.IEvent {    }
}
namespace splashjs.events.iface {
    export interface ITransitionEvent extends splashjs.events.iface.IEvent {    }
}
namespace splashjs.filesystem {
    export class File {
        /*private*/ fileStub : splashjs.filesystem.desktop.stubs.FileStub;

        /*private*/ path : string;

        public constructor(path? : any) {
            if(((typeof path === 'string') || path === null)) {
                let __args = arguments;
                if(this.fileStub===undefined) this.fileStub = null;
                if(this.path===undefined) this.path = null;
                if(this.fileStub===undefined) this.fileStub = null;
                if(this.path===undefined) this.path = null;
                (() => {
                    this.path = path;
                    this.fileStub = splashjs.filesystem.desktop.stubs.FileStub.newInstance();
                })();
            } else if(path === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let path : any = null;
                    if(this.fileStub===undefined) this.fileStub = null;
                    if(this.path===undefined) this.path = null;
                    if(this.fileStub===undefined) this.fileStub = null;
                    if(this.path===undefined) this.path = null;
                    (() => {
                        this.path = path;
                        this.fileStub = splashjs.filesystem.desktop.stubs.FileStub.newInstance();
                    })();
                }
            } else throw new Error('invalid overload');
        }

        public browseForDirectory$java_lang_String(title : string) {
            this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(title, null);
        }

        public browseForDirectory$java_lang_Object(stage : any) {
            this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(null, stage);
        }

        public browseForDirectory$() {
            this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(null, null);
        }

        public browseForDirectory$java_lang_String$java_lang_Object(title : string, stage : any) {
            this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(title, stage);
        }

        public browseForDirectory(title? : any, stage? : any) : any {
            if(((typeof title === 'string') || title === null) && ((stage != null) || stage === null)) {
                return <any>this.browseForDirectory$java_lang_String$java_lang_Object(title, stage);
            } else if(((typeof title === 'string') || title === null) && stage === undefined) {
                return <any>this.browseForDirectory$java_lang_String(title);
            } else if(((title != null) || title === null) && stage === undefined) {
                return <any>this.browseForDirectory$java_lang_Object(title);
            } else if(title === undefined && stage === undefined) {
                return <any>this.browseForDirectory$();
            } else throw new Error('invalid overload');
        }
    }
    File["__class"] = "splashjs.filesystem.File";

}
namespace splashjs.filesystem {
    export class FileMode {
        public static APPEND : string = "append";

        public static READ : string = "read";

        public static UPDATE : string = "update";

        public static WRITE : string = "write";
    }
    FileMode["__class"] = "splashjs.filesystem.FileMode";

}
namespace splashjs.filesystem.iface {
    export interface IFile {    }
}
namespace splashjs.filesystem.desktop.stubs {
    export class FileStub {
        public static newInstance() : FileStub {
            return new FileStub();
        }

        public constructor(path? : any) {
            if(((typeof path === 'string') || path === null)) {
                let __args = arguments;
            } else if(path === undefined) {
                let __args = arguments;
            } else throw new Error('invalid overload');
        }

        public browseForDirectory$java_lang_String(title : string) {
        }

        public browseForDirectory$java_lang_Object(stage : any) {
        }

        public browseForDirectory$() {
        }

        public browseForDirectory$java_lang_String$java_lang_Object(title : string, stage : any) {
        }

        public browseForDirectory(title? : any, stage? : any) : any {
            if(((typeof title === 'string') || title === null) && ((stage != null) || stage === null)) {
                return <any>this.browseForDirectory$java_lang_String$java_lang_Object(title, stage);
            } else if(((typeof title === 'string') || title === null) && stage === undefined) {
                return <any>this.browseForDirectory$java_lang_String(title);
            } else if(((title != null) || title === null) && stage === undefined) {
                return <any>this.browseForDirectory$java_lang_Object(title);
            } else if(title === undefined && stage === undefined) {
                return <any>this.browseForDirectory$();
            } else throw new Error('invalid overload');
        }
    }
    FileStub["__class"] = "splashjs.filesystem.desktop.stubs.FileStub";

}
namespace splashjs.filters {
    export class Filter implements splashjs.filters.iface.IFilter {
        constructor() {
        }
    }
    Filter["__class"] = "splashjs.filters.Filter";
    Filter["__interfaces"] = ["splashjs.filters.iface.IFilter"];


}
namespace splashjs.filters {
    export class FilterType {
        public static BLUR : string = "blur";

        public static BRIGHTNESS : string = "brightness";

        public static CONTRAST : string = "contrast";

        public static HUE_ROTATE : string = "hue_rotate";

        public static INVERT : string = "invert";

        public static DROP_SHADOW : string = "drop_shadow";

        public static GRAYSCALE : string = "grayscale";

        public static SATURATE : string = "saturate";

        public static SEPIA : string = "sepia";
    }
    FilterType["__class"] = "splashjs.filters.FilterType";

}
namespace splashjs.filters.iface {
    export interface IBlurFilter extends splashjs.filters.iface.IFilter {
        setBlur(blur : number) : IBlurFilter;

        getBlur() : number;
    }
}
namespace splashjs.filters.iface {
    export interface IBrightnessFilter extends splashjs.filters.iface.IFilter {
        setBrightness(brightness : number) : IBrightnessFilter;

        getBrightness() : number;
    }
}
namespace splashjs.filters.iface {
    export interface IContrastFilter extends splashjs.filters.iface.IFilter {
        setContrast(contrast : number) : IContrastFilter;

        getContrast() : number;
    }
}
namespace splashjs.filters.iface {
    export interface IDropShadowFilter extends splashjs.filters.iface.IFilter {
        setOffsetX(offsetX : number) : IDropShadowFilter;

        getOffsetX() : number;

        setOffsetY(offsetY : number) : IDropShadowFilter;

        getOffsetY() : number;

        setBlur(blur : number) : IDropShadowFilter;

        getBlur() : number;

        setSpread(spread : number) : IDropShadowFilter;

        getSpread() : number;

        setColor(color : splashjs.utils.iface.IColor) : IDropShadowFilter;

        getColor() : splashjs.utils.iface.IColor;
    }
}
namespace splashjs.filters.iface {
    export interface IFilter {    }
}
namespace splashjs.filters.iface {
    export interface IGlowFilter extends splashjs.filters.iface.IFilter {
        setBlur(blur : number) : IGlowFilter;

        getBlur() : number;

        setColor(color : splashjs.utils.iface.IColor) : IGlowFilter;

        getColor() : splashjs.utils.iface.IColor;
    }
}
namespace splashjs.filters.iface {
    export interface IGrayscaleFilter extends splashjs.filters.iface.IFilter {
        setGrayscale(grayscale : number) : IGrayscaleFilter;

        getGrayscale() : number;
    }
}
namespace splashjs.filters.iface {
    export interface IHueRotateFilter extends splashjs.filters.iface.IFilter {
        setHueRotate(hueRotate : number) : IHueRotateFilter;

        getHueRotate() : number;
    }
}
namespace splashjs.filters.iface {
    export interface IInvertFilter extends splashjs.filters.iface.IFilter {
        setInvert(amount : number) : IInvertFilter;

        getInvert() : number;
    }
}
namespace splashjs.filters.iface {
    export interface ISaturateFilter extends splashjs.filters.iface.IFilter {
        setSaturate(saturate : number) : ISaturateFilter;

        getSaturate() : number;
    }
}
namespace splashjs.filters.iface {
    export interface ISepiaFilter extends splashjs.filters.iface.IFilter {
        setSepia(sepia : number) : ISepiaFilter;

        getSepia() : number;
    }
}
namespace splashjs.geom {
    export class Circle implements splashjs.geom.iface.ICircle {
        /*private*/ centerX : number;

        /*private*/ centerY : number;

        /*private*/ radius : number;

        public constructor(centerX? : any, centerY? : any, radius? : any) {
            if(((typeof centerX === 'number') || centerX === null) && ((typeof centerY === 'number') || centerY === null) && ((typeof radius === 'number') || radius === null)) {
                let __args = arguments;
                if(this.centerX===undefined) this.centerX = 0;
                if(this.centerY===undefined) this.centerY = 0;
                if(this.radius===undefined) this.radius = 0;
                if(this.centerX===undefined) this.centerX = 0;
                if(this.centerY===undefined) this.centerY = 0;
                if(this.radius===undefined) this.radius = 0;
                (() => {
                    this.centerX = centerX;
                    this.centerY = centerY;
                    this.radius = radius;
                })();
            } else if(centerX === undefined && centerY === undefined && radius === undefined) {
                let __args = arguments;
                if(this.centerX===undefined) this.centerX = 0;
                if(this.centerY===undefined) this.centerY = 0;
                if(this.radius===undefined) this.radius = 0;
                if(this.centerX===undefined) this.centerX = 0;
                if(this.centerY===undefined) this.centerY = 0;
                if(this.radius===undefined) this.radius = 0;
            } else throw new Error('invalid overload');
        }

        public setCenterX(centerX : number) : splashjs.geom.iface.ICircle {
            this.centerX = centerX;
            return this;
        }

        public getCenterX() : number {
            return this.centerX;
        }

        public setCenterY(centerY : number) : splashjs.geom.iface.ICircle {
            this.centerY = centerY;
            return this;
        }

        public getCenterY() : number {
            return this.centerY;
        }

        public setRadius(radius : number) : splashjs.geom.iface.ICircle {
            this.radius = radius;
            return this;
        }

        public getRadius() : number {
            return this.radius;
        }
    }
    Circle["__class"] = "splashjs.geom.Circle";
    Circle["__interfaces"] = ["splashjs.geom.iface.ICircle"];


}
namespace splashjs.geom.iface {
    export interface ICircle {
        setCenterX(centerX : number) : ICircle;

        getCenterX() : number;

        setCenterY(centerY : number) : ICircle;

        getCenterY() : number;

        setRadius(radius : number) : ICircle;

        getRadius() : number;
    }
}
namespace splashjs.geom.iface {
    export interface IPoint {
        setX(x : number);

        getX() : number;

        setY(y : number);

        getY() : number;
    }
}
namespace splashjs.geom.iface {
    export interface IRectangle {
        getX() : number;

        getY() : number;

        getWidth() : number;

        getHeight() : number;
    }
}
namespace splashjs.geom {
    export class Point implements splashjs.geom.iface.IPoint {
        /*private*/ x : number;

        /*private*/ y : number;

        public constructor(x? : any, y? : any) {
            if(((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                let __args = arguments;
                if(this.x===undefined) this.x = 0;
                if(this.y===undefined) this.y = 0;
                if(this.x===undefined) this.x = 0;
                if(this.y===undefined) this.y = 0;
                (() => {
                    this.x = x;
                    this.y = y;
                })();
            } else if(x === undefined && y === undefined) {
                let __args = arguments;
                if(this.x===undefined) this.x = 0;
                if(this.y===undefined) this.y = 0;
                if(this.x===undefined) this.x = 0;
                if(this.y===undefined) this.y = 0;
            } else throw new Error('invalid overload');
        }

        public setX(x : number) {
            this.x = x;
        }

        public getX() : number {
            return this.x;
        }

        public setY(y : number) {
            this.y = y;
        }

        public getY() : number {
            return this.y;
        }
    }
    Point["__class"] = "splashjs.geom.Point";
    Point["__interfaces"] = ["splashjs.geom.iface.IPoint"];


}
namespace splashjs.geom {
    export class Rectangle implements splashjs.geom.iface.IRectangle {
        /*private*/ x : number;

        /*private*/ y : number;

        /*private*/ width : number;

        /*private*/ height : number;

        public constructor(x : number, y : number, width : number, height : number) {
            if(this.x===undefined) this.x = 0;
            if(this.y===undefined) this.y = 0;
            if(this.width===undefined) this.width = 0;
            if(this.height===undefined) this.height = 0;
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }

        public getX() : number {
            return this.x;
        }

        public getY() : number {
            return this.y;
        }

        public getWidth() : number {
            return this.width;
        }

        public getHeight() : number {
            return this.height;
        }
    }
    Rectangle["__class"] = "splashjs.geom.Rectangle";
    Rectangle["__interfaces"] = ["splashjs.geom.iface.IRectangle"];


}
namespace splashjs.iface {
    export interface IGlobal {
        getRendererCreator() : splashjs.render.iface.IRendererCreator;
    }
}
namespace splashjs {
    export class Import {
        static className : Array<string>; public static className_$LI$() : Array<string> { if(Import.className == null) Import.className = <any>([]); return Import.className; };

        static packageName : Array<string>; public static packageName_$LI$() : Array<string> { if(Import.packageName == null) Import.packageName = <any>([]); return Import.packageName; };

        public constructor() {
        }

        public static clazz(clazz : any) : any {
            return clazz;
        }

        public static clazzAs(clazz : any, alias : any) : any {
            return clazz;
        }

        public static getClassName(index : number) : string {
            return /* get */Import.className_$LI$()[index];
        }

        public static getPackageName(index : number) : string {
            return /* get */Import.packageName_$LI$()[index];
        }
    }
    Import["__class"] = "splashjs.Import";

}
namespace splashjs.lang.iface {
    export interface IEOFError extends splashjs.lang.iface.IIOError {    }
}
namespace splashjs.lang.iface {
    export interface IIOError extends splashjs.lang.iface.ISplashError {    }
}
namespace splashjs.lang.iface {
    export interface IRangeError extends splashjs.lang.iface.ISplashError {    }
}
namespace splashjs.lang.iface {
    export interface ISecurityError extends splashjs.lang.iface.ISplashError {    }
}
namespace splashjs.lang.iface {
    export interface ISplashError {    }
}
namespace splashjs.lang.iface {
    export interface ISplashObject {    }
}
namespace splashjs.lang {
    export class RuntimeError extends Error {
        public constructor(message : string) {
            super(message); this.message=message;
            (<any>Object).setPrototypeOf(this, RuntimeError.prototype);
        }
    }
    RuntimeError["__class"] = "splashjs.lang.RuntimeError";
    RuntimeError["__interfaces"] = ["java.io.Serializable"];


}
namespace splashjs.lang {
    export abstract class SplashError extends Error implements splashjs.lang.iface.ISplashError {
        /*private*/ errorID : number;

        /*private*/ message : string;

        name : string;

        public constructor(message? : any, errorID? : any) {
            if(((typeof message === 'string') || message === null) && ((typeof errorID === 'number') || errorID === null)) {
                let __args = arguments;
                super();
                if(this.errorID===undefined) this.errorID = 0;
                if(this.message===undefined) this.message = null;
                if(this.name===undefined) this.name = null;
                (<any>Object).setPrototypeOf(this, SplashError.prototype);
                if(this.errorID===undefined) this.errorID = 0;
                if(this.message===undefined) this.message = null;
                if(this.name===undefined) this.name = null;
                (() => {
                    this.message = message;
                    this.errorID = errorID;
                    this.name = /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor));
                })();
            } else if(((typeof message === 'string') || message === null) && errorID === undefined) {
                let __args = arguments;
                super();
                if(this.errorID===undefined) this.errorID = 0;
                if(this.message===undefined) this.message = null;
                if(this.name===undefined) this.name = null;
                (<any>Object).setPrototypeOf(this, SplashError.prototype);
                if(this.errorID===undefined) this.errorID = 0;
                if(this.message===undefined) this.message = null;
                if(this.name===undefined) this.name = null;
                (() => {
                    this.message = message;
                    this.name = /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor));
                })();
            } else throw new Error('invalid overload');
        }

        public getErrorID() : number {
            return this.errorID;
        }

        public getMessage() : string {
            return this.message;
        }

        public getName() : string {
            return this.name;
        }
    }
    SplashError["__class"] = "splashjs.lang.SplashError";
    SplashError["__interfaces"] = ["splashjs.lang.iface.ISplashError","java.io.Serializable"];


}
namespace splashjs.lang {
    export class SplashObject implements splashjs.lang.iface.ISplashObject {
        public toString() : string {
            let value : string = "[instance of " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor)) + "]";
            return value;
        }

        constructor() {
        }
    }
    SplashObject["__class"] = "splashjs.lang.SplashObject";
    SplashObject["__interfaces"] = ["splashjs.lang.iface.ISplashObject"];


}
namespace splashjs.layout {
    export class HAlign {
        public static CENTER : string = "center";

        public static LEFT : string = "left";

        public static RIGHT : string = "right";
    }
    HAlign["__class"] = "splashjs.layout.HAlign";

}
namespace splashjs.layout.iface {
    export interface IBoxLayout extends splashjs.layout.iface.ILayout {
        setHAlign(hALign : string);
    }
}
namespace splashjs.layout.iface {
    export interface IContainer extends splashjs.display.iface.IDisplayObject {
        getTheOnlyMember() : splashjs.display.iface.IDisplayObject;
    }
}
namespace splashjs.layout.iface {
    export interface IGridLayout extends splashjs.layout.iface.ILayout {
        getRow() : number;

        getCol() : number;
    }
}
namespace splashjs.layout.iface {
    export interface IHBoxLayout extends splashjs.layout.iface.IBoxLayout {    }
}
namespace splashjs.layout.iface {
    export interface ILayout extends splashjs.display.iface.IDisplayObject {
        refreshLayout();
    }
}
namespace splashjs.layout.iface {
    export interface IVBoxLayout extends splashjs.layout.iface.IBoxLayout {    }
}
namespace splashjs.media.iface {
    export interface ICamera extends splashjs.events.iface.IEventDispatcher {
        requestPermission();
    }
}
namespace splashjs.media.iface {
    export interface IMedia extends splashjs.display.iface.IDisplayObject {
        getPath() : string;

        setPath(videoPath : string);
    }
}
namespace splashjs.media.iface {
    export interface ISound extends splashjs.media.iface.IMedia {    }
}
namespace splashjs.media.iface {
    export interface IVideo extends splashjs.media.iface.IMedia {
        getCamera() : splashjs.media.iface.ICamera;
    }
}
namespace splashjs.net {
    export class FileFilter implements splashjs.net.iface.IFileFilter {
        /*private*/ description : string = "";

        /*private*/ extension : string = "";

        public constructor(description : string, extension : string) {
            this.description = description;
            this.extension = extension;
        }

        public getDescription() : string {
            return this.description;
        }

        public getExtension() : string {
            return this.extension;
        }
    }
    FileFilter["__class"] = "splashjs.net.FileFilter";
    FileFilter["__interfaces"] = ["splashjs.net.iface.IFileFilter"];


}
namespace splashjs.net.iface {
    export interface IFileFilter {
        getDescription() : string;

        getExtension() : string;
    }
}
namespace splashjs.net.iface {
    export interface IFileReference extends splashjs.events.iface.IEventDispatcher {
        getCreationDate() : Date;

        getCreator() : string;

        setData(data : splashjs.utils.iface.IByteArray);

        getData() : splashjs.utils.iface.IByteArray;

        setExtension(extension : string);

        getExtension() : string;

        setModificationDate(modificationDate : Date);

        getModificationDate() : Date;

        getName() : string;

        setName(name : string);

        getPermissionStatus() : string;

        setSize(size : number);

        getSize() : number;

        setType(type : string);

        getType() : string;

        browse(typeFilters : splashjs.net.iface.IFileFilter[]) : boolean;

        cancel();

        download(urlRequest : splashjs.net.iface.IURLRequest, defaultFileName : string);

        load();

        requestPermission();

        save(data : any, defaultFileName : string);

        upload(urlRequest : splashjs.net.iface.IURLRequest, uploadDataFieldName : string, testUpload : boolean);

        uploadUnencoded(urlRequest : splashjs.net.iface.IURLRequest);
    }
}
namespace splashjs.net.iface {
    export interface INetConnection extends splashjs.events.iface.IEventDispatcher {    }
}
namespace splashjs.net.iface {
    export interface INetStream extends splashjs.events.iface.IEventDispatcher {
        setVideoAttached(videoAttached : splashjs.media.iface.IVideo);

        getVideoAttached() : splashjs.media.iface.IVideo;
    }
}
namespace splashjs.net.iface {
    export interface IURLLoader extends splashjs.events.iface.IEventDispatcher {
        load(urlRequest? : any) : any;

        close();

        getBytesLoaded() : number;

        getBytesTotal() : number;

        getData() : any;

        setDataFormat(dataFormat : string);

        getDataFormat() : string;

        getURLRequest() : splashjs.net.iface.IURLRequest;
    }
}
namespace splashjs.net.iface {
    export interface IURLRequest {
        getURL() : string;

        setMethod(method : string);

        getMethod() : string;

        getData() : any;

        setData(data : any);
    }
}
namespace splashjs.net.iface {
    export interface IURLRequestHeader {
        setName(name : string);

        getName() : string;

        setValue(value : string);

        getValue() : string;
    }
}
namespace splashjs.net.iface {
    export interface IURLVariable {
        getName() : string;

        getValue() : string;
    }
}
namespace splashjs.net {
    export class URLLoaderDataFormat {
        public static TEXT : string = "text";

        public static BINARY : string = "binary";

        public static VARIABLES : string = "variables";
    }
    URLLoaderDataFormat["__class"] = "splashjs.net.URLLoaderDataFormat";

}
namespace splashjs.net {
    export class URLRequest implements splashjs.net.iface.IURLRequest {
        /*private*/ url : string;

        /*private*/ contentType : string;

        /*private*/ data : any;

        /*private*/ followRedirects : boolean;

        /*private*/ method : string;

        /*private*/ requestHeaders : Array<splashjs.net.iface.IURLRequestHeader> = <any>([]);

        public constructor(url : string) {
            if(this.url===undefined) this.url = null;
            if(this.contentType===undefined) this.contentType = null;
            if(this.data===undefined) this.data = null;
            if(this.followRedirects===undefined) this.followRedirects = false;
            if(this.method===undefined) this.method = null;
            this.url = url;
            this.method = splashjs.net.URLRequestMethod.GET;
        }

        public getURL() : string {
            return this.url;
        }

        public setMethod(method : string) {
            this.method = method;
        }

        public getMethod() : string {
            return this.method;
        }

        public setRequestHeaders(requestHeaders : Array<splashjs.net.iface.IURLRequestHeader>) {
            this.requestHeaders = requestHeaders;
        }

        public getRequestHeaders() : Array<splashjs.net.iface.IURLRequestHeader> {
            return this.requestHeaders;
        }

        public setContentType(contentType : string) {
            this.contentType = contentType;
        }

        public getContentType() : string {
            return this.contentType;
        }

        public setData(data : any) {
            this.data = data;
        }

        public getData() : any {
            return this.data;
        }
    }
    URLRequest["__class"] = "splashjs.net.URLRequest";
    URLRequest["__interfaces"] = ["splashjs.net.iface.IURLRequest"];


}
namespace splashjs.net {
    export class URLRequestHeader implements splashjs.net.iface.IURLRequestHeader {
        /*private*/ name : string = "";

        /*private*/ value : string = "";

        public constructor(name : string, value : string) {
            this.name = name;
            this.value = value;
        }

        public setName(name : string) {
            this.name = name;
        }

        public getName() : string {
            return this.name;
        }

        public setValue(value : string) {
            this.value = value;
        }

        public getValue() : string {
            return this.value;
        }
    }
    URLRequestHeader["__class"] = "splashjs.net.URLRequestHeader";
    URLRequestHeader["__interfaces"] = ["splashjs.net.iface.IURLRequestHeader"];


}
namespace splashjs.net {
    export class URLRequestMethod {
        public static DELETE : string = "delete";

        public static GET : string = "get";

        public static HEAD : string = "head";

        public static OPTIONS : string = "options";

        public static POST : string = "post";

        public static PUT : string = "put";
    }
    URLRequestMethod["__class"] = "splashjs.net.URLRequestMethod";

}
namespace splashjs.net {
    export class URLVariable implements splashjs.net.iface.IURLVariable {
        /*private*/ name : string = "";

        /*private*/ value : string = "";

        public constructor(name : string, value : string) {
            this.name = name;
            this.value = value;
        }

        public getName() : string {
            return this.name;
        }

        public getValue() : string {
            return this.value;
        }

        public getEncodedValue() : string {
            return URLVariable.getEncodedString(this.value);
        }

        public static getEncodedString(str : string) : string {
            return splashjs.render.net.URLVariableRenderer.getEncodedString(str);
        }

        public static encode(...urlVariables : splashjs.net.iface.IURLVariable[]) : string {
            return splashjs.render.net.URLVariableRenderer.encode.apply(null, urlVariables);
        }

        public static decode(encodedString : string) : Array<splashjs.net.iface.IURLVariable> {
            return splashjs.render.net.URLVariableRenderer.decode(encodedString);
        }
    }
    URLVariable["__class"] = "splashjs.net.URLVariable";
    URLVariable["__interfaces"] = ["splashjs.net.iface.IURLVariable"];


}
namespace splashjs {
    export class Package {
        static clazz : any = null;

        static packageData : Array<Package.PackageData>; public static packageData_$LI$() : Array<Package.PackageData> { if(Package.packageData == null) Package.packageData = <any>([]); return Package.packageData; };

        public static define(packageID : string, imports : Array<any>, classInFunc : Function) {
            let numImports : number = <any>(imports["length"]);
            let importJSText : string = "";
            for(let i : number = 0; i < numImports; i++) {{
                let fullClazzName : string = <string>imports[i];
                let onlyClazzName : string = fullClazzName.substring(fullClazzName.lastIndexOf(".") + 1);
                importJSText += "var " + onlyClazzName + " = " + fullClazzName + ";\r\n";
            };}
            let userClass : Object = <any>(classInFunc());
            let userClassName : string = <any>(userClass["name"]);
            if(packageID == null || /* isEmpty */(packageID.length === 0)) {
                window[userClassName] = userClass;
            } else {
                let words : string[] = packageID.split(".");
                let js : string = "";
                let str : string = "";
                for(let i : number = 0; i < words.length; i++) {{
                    if(i === 0) {
                        window[words[i]] = <Object>new Object();
                        js = words[0] + " = " + words[0] + " || {};";
                        eval(js);
                        str = words[0];
                        console.info(js);
                    } else if(i > 0) {
                        str += "." + words[i];
                        js = str + " = " + str + " || {};";
                        eval(js);
                        console.info(js);
                    }
                };}
                let fullPackage : Object = <any>(eval(str));
                fullPackage[userClassName] = userClass;
                console.info(str);
            }
            /* add */(Package.packageData_$LI$().push(new Package.PackageData(packageID, Package.clazz))>0);
        }
    }
    Package["__class"] = "splashjs.Package";


    export namespace Package {

        export class PackageData {
            packageID : any;

            clazz : any;

            constructor(packageID : string, clazz : any) {
                if(this.packageID===undefined) this.packageID = null;
                if(this.clazz===undefined) this.clazz = null;
                this.packageID = packageID;
                this.clazz = clazz;
            }
        }
        PackageData["__class"] = "splashjs.Package.PackageData";

    }

}
namespace splashjs.permissions {
    export class PermissionStatus {
        public static DENIED : string = "denied";

        public static GRANTED : string = "granted";

        public static ONLY_WHEN_IN_USE : string = "only_when_in_use";

        public static UNKNOWN : string = "unknown";
    }
    PermissionStatus["__class"] = "splashjs.permissions.PermissionStatus";

}
namespace splashjs.render.animation.iface {
    export interface ISpriteSheetRenderer extends splashjs.render.events.iface.IEventDispatcherRenderer {
        getSprite(label : string) : splashjs.display.iface.ISprite;

        getMovieClip(label : string) : splashjs.display.iface.IMovieClip;

        getWidth() : number;

        getHeight() : number;
    }
}
namespace splashjs.render.animation.iface {
    export interface ITransitionRenderer extends splashjs.render.events.iface.IEventDispatcherRenderer {
        play();

        stop();

        isRunning() : boolean;

        getTransitionState() : string;
    }
}
namespace splashjs.render.application.iface {
    export interface IApplicationRenderer extends splashjs.render.events.iface.IEventDispatcherRenderer {
        isOnline() : boolean;
    }
}
namespace splashjs.render.application.iface {
    export interface IStageOwnerRenderer extends splashjs.render.events.iface.IEventDispatcherRenderer {    }
}
namespace splashjs.render.controls.iface {
    export interface IBaseInputRenderer extends splashjs.render.controls.iface.IBaseTextRenderer {
        setPlaceHolderText(placeHolderText : string);

        getPlaceHolderText() : string;

        setMaxChars(maxChars : number);

        getMaxChars() : number;

        setSelection();

        setEditable(editable : boolean);

        getEditable() : boolean;
    }
}
namespace splashjs.render.controls.iface {
    export interface IBaseListRenderer extends splashjs.render.controls.iface.IControlRenderer {    }
}
namespace splashjs.render.controls.iface {
    export interface IBaseTextRenderer extends splashjs.render.controls.iface.IControlRenderer {
        setText();
    }
}
namespace splashjs.render.controls.iface {
    export interface IButtonRenderer extends splashjs.render.controls.iface.IBaseTextRenderer {    }
}
namespace splashjs.render.controls.iface {
    export interface IControlRenderer extends splashjs.render.display.iface.IInteractiveObjectRenderer {    }
}
namespace splashjs.render.controls.iface {
    export interface ILabelRenderer extends splashjs.render.controls.iface.IBaseTextRenderer {    }
}
namespace splashjs.render.controls.iface {
    export interface IListRenderer extends splashjs.render.controls.iface.IBaseListRenderer {
        addAllItems();

        addItemGroup(itemGroup : splashjs.controls.iface.IItemGroup);

        addItem(item : splashjs.controls.iface.IItem);
    }
}
namespace splashjs.render.controls.iface {
    export interface IRadioButtonRenderer extends splashjs.render.controls.iface.IControlRenderer {
        setSelected();

        setGroup();
    }
}
namespace splashjs.render.controls.iface {
    export interface ISpacerRenderer extends splashjs.render.controls.iface.IControlRenderer {    }
}
namespace splashjs.render.controls.iface {
    export interface ITextAreaRenderer extends splashjs.render.controls.iface.IBaseInputRenderer {    }
}
namespace splashjs.render.controls.iface {
    export interface ITextInputRenderer extends splashjs.render.controls.iface.IBaseInputRenderer {
        setDisplayAsPassword();
    }
}
namespace splashjs.render.controls.iface {
    export interface ITreeRenderer extends splashjs.render.controls.iface.IControlRenderer {    }
}
namespace splashjs.render.display.iface {
    export interface IBitmapDataRenderer extends splashjs.render.events.iface.IEventDispatcherRenderer {
        draw(bitmapDrawable : splashjs.display.iface.IBitmapDrawable);

        getBlob() : Blob;
    }
}
namespace splashjs.render.display.iface {
    export interface IBitmapRenderer extends splashjs.render.display.iface.IDisplayObjectRenderer {    }
}
namespace splashjs.render.display.iface {
    export interface ICircleRenderer extends splashjs.render.display.iface.IShapeRenderer {
        setRadius();
    }
}
namespace splashjs.render.display.iface {
    export interface IDisplayObjectContainerRenderer extends splashjs.render.display.iface.IInteractiveObjectRenderer {    }
}
namespace splashjs.render.display.iface {
    export interface IDisplayObjectRenderer extends splashjs.render.events.iface.IEventDispatcherRenderer {
        setBorder(value : string);

        setPosition(value : string);

        setMargin(value : string);

        setPadding(value : string);

        setZIndex(value : string);

        setOverflow(value : string);

        setResize(value : string);

        setX();

        setY();

        setXY();

        setRegX();

        setRegY();

        setRegXY();

        setScaleX();

        setScaleY();

        setScaleXY();

        setRotation();

        setAlpha();

        setVisible();

        setMouseVisible();

        setMouseCursor();

        setID();

        setWidth();

        setHeight();

        addFilter();

        removeFilter();

        getOriginalWidth() : number;

        getOriginalHeight() : number;

        getWidth() : number;

        getHeight() : number;
    }
}
namespace splashjs.render.display.iface {
    export interface IImageRenderer extends splashjs.render.display.iface.IInteractiveObjectRenderer {
        setImagePath();
    }
}
namespace splashjs.render.display.iface {
    export interface IInteractiveObjectRenderer extends splashjs.render.display.iface.IDisplayObjectRenderer {    }
}
namespace splashjs.render.display.iface {
    export interface ILineRenderer extends splashjs.render.display.iface.IShapeRenderer {    }
}
namespace splashjs.render.display.iface {
    export interface IMovieClipRenderer extends splashjs.render.display.iface.ISpriteRenderer {
        play();

        gotoAndStop(label : string, frameIndex : number);

        gotoAndPlay(label : string, loopCount : number);

        stop();

        isPlaying(label? : any) : any;

        getCurrentLabel() : string;

        getCurrentFrameIndex() : number;

        getCurrentLoopCount() : number;

        isLooping() : boolean;
    }
}
namespace splashjs.render.display.iface {
    export interface IRectangleRenderer extends splashjs.render.display.iface.IShapeRenderer {    }
}
namespace splashjs.render.display.iface {
    export interface ISceneRenderer extends splashjs.render.display.iface.IDisplayObjectContainerRenderer {    }
}
namespace splashjs.render.display.iface {
    export interface IShapeRenderer extends splashjs.render.display.iface.IInteractiveObjectRenderer {    }
}
namespace splashjs.render.display.iface {
    export interface ISimpleButtonRenderer extends splashjs.render.display.iface.IInteractiveObjectRenderer {
        setUpState();

        setDownState();

        setOverState();

        setDisabledState();

        setEnabled();
    }
}
namespace splashjs.render.display.iface {
    export interface ISpriteRenderer extends splashjs.render.display.iface.IDisplayObjectContainerRenderer {    }
}
namespace splashjs.render.display.iface {
    export interface IStageRenderer extends splashjs.render.display.iface.IDisplayObjectContainerRenderer {
        setColor();

        startEnterFrameExitFrameDispatcherLoop();

        setScene();

        removeScene();

        getStageWidth() : number;

        getStageHeight() : number;
    }
}
namespace splashjs.render.events.iface {
    export interface IEventDispatcherRenderer extends splashjs.render.lang.iface.ISplashObjectRenderer {
        setDisplay(value : string);
    }
}
namespace splashjs.render {
    export class HTMLDomEventName {
        public static LOAD : string = "load";

        public static CLICK : string = "click";

        public static DBLCLICK : string = "dblclick";

        public static MOUSEDOWN : string = "mousedown";

        public static MOUSEENTER : string = "mouseenter";

        public static MOUSELEAVE : string = "mouseleave";

        public static MOUSEMOVE : string = "mousemove";

        public static MOUSEOUT : string = "mouseout";

        public static MOUSEOVER : string = "mouseover";

        public static MOUSEUP : string = "mouseup";

        public static KEYPRESS : string = "keypress";

        public static KEYUP : string = "keyup";

        public static KEYDOWN : string = "keydown";

        public static FOCUS : string = "focus";

        public static SELECT : string = "select";

        public static CHANGE : string = "change";
    }
    HTMLDomEventName["__class"] = "splashjs.render.HTMLDomEventName";

}
namespace splashjs.render.iface {
    export interface IGlobalRenderer extends splashjs.render.events.iface.IEventDispatcherRenderer {
        render(divID : any, jsClass : any, width : number, height : number);
    }
}
namespace splashjs.render.iface {
    export interface IRenderElement {
        getDOMElement() : Element;
    }
}
namespace splashjs.render.iface {
    export interface IRenderer {
        getRenderObjectID() : string;

        getRenderObject() : splashjs.events.iface.IEventDispatcher;

        getDOMElement() : Element;

        getRenderElement() : splashjs.render.iface.IRenderElement;

        setRenderElement(renderElement : splashjs.render.iface.IRenderElement);

        appendChild(childRenderer : IRenderer);

        appendToBody();

        removeChild(childRenderer : IRenderer);

        initialize();

        applyStyle();

        createEventListeners();

        create();

        update();

        applyCSS();

        refresh();

        getOriginalWidth() : number;

        getOriginalHeight() : number;
    }
}
namespace splashjs.render.iface {
    export interface IRendererCreator {
        createRenderer(clazz : any, renderObject : splashjs.events.iface.IEventDispatcher) : splashjs.render.iface.IRenderer;
    }
}
namespace splashjs.render.lang.iface {
    export interface ISplashObjectRenderer extends splashjs.render.iface.IRenderer {    }
}
namespace splashjs.render.layout.iface {
    export interface IBoxLayoutRenderer extends splashjs.render.layout.iface.ILayoutRenderer {
        add(container : splashjs.layout.iface.IContainer);

        setHAlign(hAlign : string);
    }
}
namespace splashjs.render.layout.iface {
    export interface IContainerRenderer extends splashjs.render.display.iface.IDisplayObjectRenderer {    }
}
namespace splashjs.render.layout.iface {
    export interface IHBoxLayoutRenderer extends splashjs.render.layout.iface.IBoxLayoutRenderer {    }
}
namespace splashjs.render.layout.iface {
    export interface ILayoutRenderer extends splashjs.render.display.iface.IDisplayObjectRenderer {
        refreshLayout();

        setPadding(left? : any, top? : any, right? : any, bottom? : any) : any;

        setLeftPadding(left : number);

        setTopPadding(top : number);

        setRightPadding(right : number);

        setBottomPadding(bottom : number);
    }
}
namespace splashjs.render.layout.iface {
    export interface IVBoxLayoutRenderer extends splashjs.render.layout.iface.IBoxLayoutRenderer {    }
}
namespace splashjs.render.media.iface {
    export interface ICameraRenderer extends splashjs.render.events.iface.IEventDispatcherRenderer {
        setMediaStream(mediaStream : splashjs.def.webrtc.MediaStream);

        getMediaStream() : splashjs.def.webrtc.MediaStream;

        requestPermission();
    }
}
namespace splashjs.render.media.iface {
    export interface IMediaRenderer extends splashjs.render.display.iface.IDisplayObjectRenderer {
        setPath();
    }
}
namespace splashjs.render.media.iface {
    export interface ISoundRenderer extends splashjs.render.media.iface.IMediaRenderer {
        playSound();

        pauseSound();
    }
}
namespace splashjs.render.media.iface {
    export interface IVideoRenderer extends splashjs.render.media.iface.IMediaRenderer {
        playVideo();

        attachCamera(camera : splashjs.media.iface.ICamera);

        attachNetStream(netStream : splashjs.net.iface.INetStream);
    }
}
namespace splashjs.render.net.iface {
    export interface IFileReferenceRenderer extends splashjs.render.events.iface.IEventDispatcherRenderer {
        download(urlRequest : splashjs.net.iface.IURLRequest, defaultFileName : string);

        browse(fileFilters? : any) : any;

        load();
    }
}
namespace splashjs.render.net.iface {
    export interface INetStreamRenderer extends splashjs.render.events.iface.IEventDispatcherRenderer {
        play(...params : string[]);
    }
}
namespace splashjs.render.net.iface {
    export interface IURLLoaderRenderer {
        load();

        getBytesTotal() : number;

        getBytesLoaded() : number;

        getData() : any;

        close();
    }
}
namespace splashjs.render.net {
    export class URLVariableRenderer {
        public static encode(...urlVariables : splashjs.net.iface.IURLVariable[]) : string {
            let encodedString : string = "";
            for(let i : number = 0; i < urlVariables.length; i++) {{
                let urlVariable : splashjs.net.iface.IURLVariable = urlVariables[i];
                encodedString += urlVariable.getName() + "=" + encodeURIComponent(urlVariable.getValue());
                if(i < urlVariables.length - 1) encodedString += "&";
            };}
            return encodedString;
        }

        public static decode(encodedString : string) : Array<splashjs.net.iface.IURLVariable> {
            let urlVariables : Array<splashjs.net.iface.IURLVariable> = <any>([]);
            let decodedString : string = decodeURI(encodedString);
            let variables : string[] = decodedString.split("&");
            for(let i : number = 0; i < variables.length; i++) {{
                let variable : string = variables[i];
                let nameValue : string[] = variable.split("=");
                let urlVariable : splashjs.net.iface.IURLVariable = new splashjs.net.URLVariable(nameValue[0], decodeURIComponent(nameValue[1]));
                /* add */(urlVariables.push(urlVariable)>0);
            };}
            return urlVariables;
        }

        public static getEncodedString(str : string) : string {
            return encodeURIComponent(str);
        }
    }
    URLVariableRenderer["__class"] = "splashjs.render.net.URLVariableRenderer";

}
namespace splashjs.render {
    export class RenderElement implements splashjs.render.iface.IRenderElement {
        /*private*/ element : Element;

        public constructor(element : Element) {
            if(this.element===undefined) this.element = null;
            this.element = element;
        }

        public getDOMElement() : Element {
            return this.element;
        }
    }
    RenderElement["__class"] = "splashjs.render.RenderElement";
    RenderElement["__interfaces"] = ["splashjs.render.iface.IRenderElement"];


}
namespace splashjs.render {
    export abstract class Renderer implements splashjs.render.iface.IRenderer {
        SVGNS : string = "http://www.w3.org/2000/svg";

        UNIT : string = "px";

        ENDLINE_CHAR : string = "\r\n";

        IMAGES_FOLDER_PATH : string = "images/";

        SOUNDS_FOLDER_PATH : string = "sounds/";

        VIDEOS_FOLDER_PATH : string = "videos/";

        renderObjectID : string;

        renderObject : splashjs.events.iface.IEventDispatcher;

        renderElement : splashjs.render.iface.IRenderElement;

        public constructor() {
            if(this.renderObjectID===undefined) this.renderObjectID = null;
            if(this.renderObject===undefined) this.renderObject = null;
            if(this.renderElement===undefined) this.renderElement = null;
        }

        public initialize() {
        }

        public applyStyle() {
            this.applyCSS();
        }

        setRenderObject(renderObject : splashjs.events.iface.IEventDispatcher) {
            this.renderObject = renderObject;
            this.renderObjectID = renderObject.getUniqueID();
        }

        public getRenderObjectID() : string {
            return this.renderObjectID;
        }

        public getRenderObject() : splashjs.events.iface.IEventDispatcher {
            return this.renderObject;
        }

        public setRenderElement(renderElement : splashjs.render.iface.IRenderElement) {
            this.renderElement = renderElement;
        }

        public getRenderElement() : splashjs.render.iface.IRenderElement {
            return this.renderElement;
        }

        public create() {
        }

        public update() {
        }

        public refresh() {
        }

        public applyCSS() {
        }

        public getDOMElement() : Element {
            let element : Element = this.renderElement.getDOMElement();
            return element;
        }

        public createEventListeners() {
            let htmlElement : HTMLElement = <HTMLElement>this.getDOMElement();
            htmlElement.addEventListener(splashjs.render.HTMLDomEventName.LOAD, (event) => {
                let evt : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.LOADED);
                this.getRenderObject().dispatchEvent(evt);
            });
            htmlElement.addEventListener(splashjs.render.HTMLDomEventName.CLICK, (event) => {
                let mouseEvent : splashjs.events.iface.IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.CLICK, null, this.getRenderObject());
                this.getRenderObject().dispatchEvent(mouseEvent);
            });
            htmlElement.addEventListener(splashjs.render.HTMLDomEventName.DBLCLICK, (event) => {
                let mouseEvent : splashjs.events.iface.IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.DOUBLE_CLICK, null, this.getRenderObject());
                this.getRenderObject().dispatchEvent(mouseEvent);
            });
            htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSEENTER, (event) => {
                let mouseEvent : splashjs.events.iface.IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_ENTER, null, this.getRenderObject());
                this.getRenderObject().dispatchEvent(mouseEvent);
            });
            htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSELEAVE, (event) => {
                let mouseEvent : splashjs.events.iface.IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_LEAVE, null, this.getRenderObject());
                this.getRenderObject().dispatchEvent(mouseEvent);
            });
            htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSEOVER, (event) => {
                let mouseEvent : splashjs.events.iface.IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_OVER, null, this.getRenderObject());
                this.getRenderObject().dispatchEvent(mouseEvent);
            });
            htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSEOUT, (event) => {
                let mouseEvent : splashjs.events.iface.IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_OUT, null, this.getRenderObject());
                this.getRenderObject().dispatchEvent(mouseEvent);
            });
            htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSEDOWN, (event) => {
                let mouseEvent : splashjs.events.iface.IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_DOWN, null, this.getRenderObject());
                this.getRenderObject().dispatchEvent(mouseEvent);
            });
            htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSEUP, (event) => {
                let mouseEvent : splashjs.events.iface.IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_UP, null, this.getRenderObject());
                this.getRenderObject().dispatchEvent(mouseEvent);
            });
        }

        public appendChild(childRenderer : splashjs.render.iface.IRenderer) {
            let childRenderElement : splashjs.render.iface.IRenderElement = childRenderer.getRenderElement();
            let childElement : Element = (<splashjs.render.RenderElement><any>childRenderElement).getDOMElement();
            this.getDOMElement().insertBefore(childElement, this.getDOMElement().firstChild);
        }

        public removeChild(childRenderer : splashjs.render.iface.IRenderer) {
            let childRenderElement : splashjs.render.iface.IRenderElement = childRenderer.getRenderElement();
            let childElement : Element = (<splashjs.render.RenderElement><any>childRenderElement).getDOMElement();
            this.getDOMElement().removeChild(childElement);
        }

        public getOriginalWidth() : number {
            return (<number>(<HTMLElement>this.getDOMElement()).clientWidth|0);
        }

        public getOriginalHeight() : number {
            return (<number>(<HTMLElement>this.getDOMElement()).clientHeight|0);
        }

        public appendToBody() {
            document.body.appendChild(this.getDOMElement());
        }

        /**
         * CSS methods
         * @return {string}
         */
        getCSSIDText() : string {
            return (<splashjs.display.iface.IDisplayObject><any>this.getRenderObject()).getUniqueID();
        }

        getCSSTransformText() : string {
            let renderObject : splashjs.display.iface.IDisplayObject = <splashjs.display.iface.IDisplayObject><any>this.getRenderObject();
            let scale : string = "scale(" + renderObject.getScaleX() + ", " + renderObject.getScaleY() + ")";
            let rotate : string = "rotate(" + renderObject.getRotation() + "deg)";
            let skew : string = "skew(0deg, 0deg)";
            let transformText : string = scale + " " + skew + " " + rotate;
            return transformText;
        }

        getCSSTransformOriginText() : string {
            let renderObject : splashjs.display.iface.IDisplayObject = <splashjs.display.iface.IDisplayObject><any>this.getRenderObject();
            let text : string = renderObject.getRegX() + this.UNIT + " " + renderObject.getRegY() + this.UNIT;
            return text;
        }

        getCSSLeftText() : string {
            let renderObject : splashjs.display.iface.IDisplayObject = <splashjs.display.iface.IDisplayObject><any>this.getRenderObject();
            return (renderObject.getX() - renderObject.getRegX()) + this.UNIT;
        }

        getCSSTopText() : string {
            let renderObject : splashjs.display.iface.IDisplayObject = <splashjs.display.iface.IDisplayObject><any>this.getRenderObject();
            return (renderObject.getY() - renderObject.getRegY()) + this.UNIT;
        }

        getCSSWidthText() : string {
            let renderObject : splashjs.display.iface.IDisplayObject = <splashjs.display.iface.IDisplayObject><any>this.getRenderObject();
            return renderObject.getWidth() + this.UNIT;
        }

        getCSSHeightText() : string {
            let renderObject : splashjs.display.iface.IDisplayObject = <splashjs.display.iface.IDisplayObject><any>this.getRenderObject();
            return renderObject.getHeight() + this.UNIT;
        }

        getCSSOpacityText() : string {
            let renderObject : splashjs.display.iface.IDisplayObject = <splashjs.display.iface.IDisplayObject><any>this.getRenderObject();
            return renderObject.getAlpha() + "";
        }

        getCSSVisibilityText() : string {
            let renderObject : splashjs.display.iface.IDisplayObject = <splashjs.display.iface.IDisplayObject><any>this.getRenderObject();
            let text : string;
            if(renderObject.getVisible() === true) text = "visible"; else text = "hidden";
            return text;
        }

        getCSSCursorVisibleText() : string {
            let renderObject : splashjs.display.iface.IDisplayObject = <splashjs.display.iface.IDisplayObject><any>this.getRenderObject();
            let mouseCursor : splashjs.ui.iface.IMouseCursor = renderObject.getMouseCursor();
            let text : string = this.getCSSCursorText();
            if(renderObject.getMouseVisible() === false) text = "none";
            return text;
        }

        getCSSCursorText() : string {
            let renderObject : splashjs.display.iface.IDisplayObject = <splashjs.display.iface.IDisplayObject><any>this.getRenderObject();
            let mouseCursor : splashjs.ui.iface.IMouseCursor = renderObject.getMouseCursor();
            let text : string = splashjs.ui.MouseCursor.AUTO_$LI$().getMouseCursorName();
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(mouseCursor.getMouseCursorType(), splashjs.ui.MouseCursorType.SYSTEM)) {
                text = mouseCursor.getMouseCursorName();
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(mouseCursor.getMouseCursorType(), splashjs.ui.MouseCursorType.IMAGE)) {
                let imagePath : string = mouseCursor.getMouseCursorImagePath();
                text = "url(" + this.IMAGES_FOLDER_PATH + imagePath + "), auto";
            }
            return text;
        }

        getCSSFilterText() : string {
            let renderObject : splashjs.display.iface.IDisplayObject = <splashjs.display.iface.IDisplayObject><any>this.getRenderObject();
            let filterText : string = "";
            {
                let array122 = renderObject.getAllFilters();
                for(let index121=0; index121 < array122.length; index121++) {
                    let filter = array122[index121];
                    {
                        if(filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.IBlurFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.IBlurFilter") >= 0)) {
                            filterText += "blur(" + (<splashjs.filters.iface.IBlurFilter><any>filter).getBlur() + "px) ";
                        } else if(filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.IDropShadowFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.IDropShadowFilter") >= 0)) {
                            let dropShadowFilter : splashjs.filters.iface.IDropShadowFilter = <splashjs.filters.iface.IDropShadowFilter><any>filter;
                            filterText += "drop-shadow(" + dropShadowFilter.getOffsetX() + "px ";
                            filterText += dropShadowFilter.getOffsetY() + "px ";
                            filterText += dropShadowFilter.getBlur() + "px ";
                            let color : splashjs.utils.iface.IColor = dropShadowFilter.getColor();
                            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(color.getColorType(), splashjs.utils.ColorType.NAME)) {
                                filterText += color.getColorName() + ") ";
                            } else {
                                filterText += "black) ";
                            }
                        } else if(filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.IBrightnessFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.IBrightnessFilter") >= 0)) {
                            filterText += "brightness(" + (<splashjs.filters.iface.IBrightnessFilter><any>filter).getBrightness() + ") ";
                        } else if(filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.IContrastFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.IContrastFilter") >= 0)) {
                            filterText += "contrast(" + (<splashjs.filters.iface.IContrastFilter><any>filter).getContrast() + ") ";
                        } else if(filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.IHueRotateFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.IHueRotateFilter") >= 0)) {
                            filterText += "hue-rotate(" + (<splashjs.filters.iface.IHueRotateFilter><any>filter).getHueRotate() + "deg) ";
                        } else if(filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.IInvertFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.IInvertFilter") >= 0)) {
                            filterText += "invert(" + (<splashjs.filters.iface.IInvertFilter><any>filter).getInvert() + ") ";
                        } else if(filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.IGrayscaleFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.IGrayscaleFilter") >= 0)) {
                            filterText += "grayscale(" + (<splashjs.filters.iface.IGrayscaleFilter><any>filter).getGrayscale() + ") ";
                        } else if(filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.ISaturateFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.ISaturateFilter") >= 0)) {
                            filterText += "saturate(" + (<splashjs.filters.iface.ISaturateFilter><any>filter).getSaturate() + ") ";
                        } else if(filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.ISepiaFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.ISepiaFilter") >= 0)) {
                            filterText += "sepia(" + (<splashjs.filters.iface.ISepiaFilter><any>filter).getSepia() + ") ";
                        }
                    }
                }
            }
            if(/* isEmpty */(filterText.length === 0)) filterText = "none";
            return filterText;
        }

        getSVGCircleRadiusText() : string {
            let radius : string = "10";
            radius = (<splashjs.display.iface.ICircle><any>this.renderObject).getRadius() + "";
            return radius;
        }

        getSVGCircleCenterXText() : string {
            let cx : string = "0";
            let strokeWidth : number = (<splashjs.display.iface.IShape><any>this.renderObject).getStrokeWidth();
            let radius : number = (<splashjs.display.iface.ICircle><any>this.renderObject).getRadius();
            cx = Math.ceil((<number>(radius + <number>strokeWidth / 2))) + "";
            return cx;
        }

        getSVGCircleCenterYText() : string {
            let cy : string = "0";
            let strokeWidth : number = (<splashjs.display.iface.IShape><any>this.renderObject).getStrokeWidth();
            let radius : number = (<splashjs.display.iface.ICircle><any>this.renderObject).getRadius();
            cy = Math.ceil((<number>(radius + <number>strokeWidth / 2))) + "";
            return cy;
        }

        getSVGCircleWidthText() : string {
            let width : string = "0";
            let radius : number = (<splashjs.display.iface.ICircle><any>this.renderObject).getRadius();
            width = Math.ceil(<number>(/* parseDouble */parseFloat(this.getSVGCircleCenterXText()) * 2)) + "";
            return width;
        }

        getSVGCircleHeightText() : string {
            let height : string = "0";
            let radius : number = (<splashjs.display.iface.ICircle><any>this.renderObject).getRadius();
            height = Math.ceil(<number>(/* parseDouble */parseFloat(this.getSVGCircleCenterYText()) * 2)) + "";
            return height;
        }

        getSVGLineX2Text() : string {
            let x2 : string = "0";
            let length : number = (<splashjs.display.iface.ILine><any>this.renderObject).getLength();
            x2 = length + "";
            return x2;
        }

        getSVGLineY2Text() : string {
            return this.getSVGLineY1Text();
        }

        getSVGLineY1Text() : string {
            let y1 : string = (/* parseInt */parseInt(this.getSVGShapeStrokeWidthText()) / 2|0) + "";
            return y1;
        }

        getSVGLineWidthText() : string {
            let width : string = "0";
            width = (<splashjs.display.iface.ILine><any>this.renderObject).getLength() + "";
            return width;
        }

        getSVGLineHeightText() : string {
            let height : string = "0";
            height = this.getSVGShapeStrokeWidthText();
            return height;
        }

        getSVGShapeStrokeColorNameText() : string {
            let strokeColorName : string = splashjs.utils.ColorName.BLACK;
            let strokeColor : splashjs.utils.iface.IColor = (<splashjs.display.iface.IShape><any>this.renderObject).getStrokeColor();
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(strokeColor.getColorType(), splashjs.utils.ColorType.NAME)) strokeColorName = strokeColor.getColorName(); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(strokeColor.getColorType(), splashjs.utils.ColorType.HEX)) strokeColorName = strokeColor.getHEX();
            return strokeColorName;
        }

        getSVGShapeFillColorNameText() : string {
            let fillColorName : string = splashjs.utils.ColorName.BLACK;
            let fillColor : splashjs.utils.iface.IColor = (<splashjs.display.iface.IShape><any>this.renderObject).getFillColor();
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(fillColor.getColorType(), splashjs.utils.ColorType.NAME)) fillColorName = fillColor.getColorName(); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(fillColor.getColorType(), splashjs.utils.ColorType.HEX)) fillColorName = fillColor.getHEX();
            return fillColorName;
        }

        getSVGShapeStrokeWidthText() : string {
            let strokeWidth : string = "1";
            strokeWidth = (<splashjs.display.iface.IShape><any>this.renderObject).getStrokeWidth() + "";
            return strokeWidth;
        }
    }
    Renderer["__class"] = "splashjs.render.Renderer";
    Renderer["__interfaces"] = ["splashjs.render.iface.IRenderer"];


}
namespace splashjs.render {
    export class RendererCreator implements splashjs.render.iface.IRendererCreator {
        public createRenderer(clazz : any, renderObject : splashjs.events.iface.IEventDispatcher) : splashjs.render.iface.IRenderer {
            let renderer : splashjs.render.iface.IRenderer = null;
            if(clazz === splashjs.Global) renderer = new splashjs.render.GlobalRenderer(renderObject); else if(clazz === splashjs.application.Application) renderer = new splashjs.render.application.ApplicationRenderer(renderObject); else if(clazz === splashjs.application.StageOwner) renderer = new splashjs.render.application.StageOwnerRenderer(renderObject); else if(clazz === splashjs.display.Stage) renderer = new splashjs.render.display.StageRenderer(renderObject); else if(clazz === splashjs.display.Scene) renderer = new splashjs.render.display.SceneRenderer(renderObject); else if(clazz === splashjs.display.Sprite) renderer = new splashjs.render.display.SpriteRenderer(renderObject); else if(clazz === splashjs.display.MovieClip) renderer = new splashjs.render.display.MovieClipRenderer(renderObject); else if(clazz === splashjs.display.Image) renderer = new splashjs.render.display.ImageRenderer(renderObject); else if(clazz === splashjs.display.Bitmap) renderer = new splashjs.render.display.BitmapRenderer(renderObject); else if(clazz === splashjs.display.BitmapData) renderer = new splashjs.render.display.BitmapDataRenderer(renderObject); else if(clazz === splashjs.display.Line) renderer = new splashjs.render.display.LineRenderer(renderObject); else if(clazz === splashjs.display.Circle) renderer = new splashjs.render.display.CircleRenderer(renderObject); else if(clazz === splashjs.controls.Spacer) renderer = new splashjs.render.controls.SpacerRenderer(renderObject); else if(clazz === splashjs.controls.Label) renderer = new splashjs.render.controls.LabelRenderer(renderObject); else if(clazz === splashjs.controls.Button) renderer = new splashjs.render.controls.ButtonRenderer(renderObject); else if(clazz === splashjs.controls.TextInput) renderer = new splashjs.render.controls.TextInputRenderer(renderObject); else if(clazz === splashjs.controls.Tree) renderer = new splashjs.render.controls.TreeRenderer(renderObject); else if(clazz === splashjs.text.StaticText) renderer = new splashjs.render.text.StaticTextRenderer(renderObject); else if(clazz === splashjs.text.InputText) renderer = new splashjs.render.text.InputTextRenderer(renderObject); else if(clazz === splashjs.net.FileReference) renderer = new splashjs.render.net.FileReferenceRenderer(renderObject); else if(clazz === splashjs.net.URLLoader) renderer = new splashjs.render.net.URLLoaderRenderer(renderObject); else if(clazz === splashjs.utils.Resource) renderer = new splashjs.render.utils.ResourceRenderer(renderObject); else if(clazz === splashjs.utils.ResourceLoader) renderer = new splashjs.render.utils.ResourceLoaderRenderer(renderObject); else if(clazz === splashjs.media.Sound) renderer = new splashjs.render.media.SoundRenderer(renderObject); else if(clazz === splashjs.media.Video) renderer = new splashjs.render.media.VideoRenderer(renderObject); else if(clazz === splashjs.media.Camera) renderer = new splashjs.render.media.CameraRenderer(renderObject); else if(clazz === splashjs.controls.List) renderer = new splashjs.render.controls.ListRenderer(renderObject); else if(clazz === splashjs.utils.ByteArray) renderer = new splashjs.render.utils.ByteArrayRenderer(renderObject); else if(clazz === splashjs.animation.FadeTransition) renderer = new splashjs.render.animation.FadeTransitionRenderer(renderObject); else if(clazz === splashjs.animation.ScaleTransition) renderer = new splashjs.render.animation.ScaleTransitionRenderer(renderObject); else if(clazz === splashjs.animation.CircularTransition) renderer = new splashjs.render.animation.CircularTransitionRenderer(renderObject); else if(clazz === splashjs.animation.RotationTransition) renderer = new splashjs.render.animation.RotationTransitionRenderer(renderObject); else if(clazz === splashjs.animation.TranslateTransition) renderer = new splashjs.render.animation.TranslateTransitionRenderer(renderObject); else if(clazz === splashjs.animation.SpriteSheet) renderer = new splashjs.render.animation.SpriteSheetRenderer(renderObject); else if(clazz === splashjs.net.NetStream) renderer = new splashjs.render.net.NetStreamRenderer(renderObject); else if(clazz === splashjs.net.NetConnection) renderer = new splashjs.render.net.NetConnectionRenderer(renderObject); else if(clazz === splashjs.layout.Container) renderer = new splashjs.render.layout.ContainerRenderer(renderObject); else if(clazz === splashjs.layout.VBoxLayout) renderer = new splashjs.render.layout.VBoxLayoutRenderer(renderObject); else if(clazz === splashjs.layout.HBoxLayout) renderer = new splashjs.render.layout.HBoxLayoutRenderer(renderObject); else {
                console.info("Error: " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(clazz) + " renderer not found");
            }
            if(renderer != null) {
                renderer.initialize();
                renderer.applyStyle();
                renderer.createEventListeners();
            }
            return renderer;
        }

        constructor() {
        }
    }
    RendererCreator["__class"] = "splashjs.render.RendererCreator";
    RendererCreator["__interfaces"] = ["splashjs.render.iface.IRendererCreator"];


}
namespace splashjs.render {
    export class SplashJSRenderer {
        public static navigateToURL(urlRequest : splashjs.net.iface.IURLRequest) {
            let url : string = urlRequest.getURL();
            let method : string = urlRequest.getMethod();
            let data : any = urlRequest.getData();
            let toURL : string = url;
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(method, splashjs.net.URLRequestMethod.GET)) {
                if(data != null) toURL += "?" + <string>data;
                window.open(toURL, "_blank");
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(method, splashjs.net.URLRequestMethod.POST)) {
                let formElement : HTMLFormElement = <HTMLFormElement>document.createElement("form");
                formElement.method = "POST";
                formElement.action = url;
                formElement.id = "newForm";
                formElement.enctype = "application/x-www-form-urlencoded";
                formElement.encoding = "application/x-www-form-urlencoded";
                if(data != null) {
                    let urlVariables : Array<splashjs.net.iface.IURLVariable> = splashjs.net.URLVariable.decode(<string>data);
                    for(let i : number = 0; i < /* size */(<number>urlVariables.length); i++) {{
                        let urlVariable : splashjs.net.iface.IURLVariable = /* get */urlVariables[i];
                        let inputElement : HTMLInputElement = <HTMLInputElement>document.createElement("input");
                        inputElement.setAttribute("type", "hidden");
                        inputElement.setAttribute("name", urlVariable.getName());
                        inputElement.setAttribute("value", urlVariable.getValue());
                        formElement.appendChild(inputElement);
                    };}
                }
                formElement.target = "newWindow";
                let newWindow : Window = <Window>window.open("", "newWindow");
                newWindow.document.body.appendChild(formElement);
                formElement.submit();
            }
            console.info(toURL);
        }
    }
    SplashJSRenderer["__class"] = "splashjs.render.SplashJSRenderer";

}
namespace splashjs.render.text.iface {
    export interface IFontRenderer extends splashjs.render.events.iface.IEventDispatcherRenderer {
        load();
    }
}
namespace splashjs.render.text.iface {
    export interface IInputTextRenderer extends splashjs.render.text.iface.ITextRenderer {
        setPlaceholder();

        setBackgroundColor();

        setBorderColor();
    }
}
namespace splashjs.render.text.iface {
    export interface IStaticTextRenderer extends splashjs.render.text.iface.ITextRenderer {    }
}
namespace splashjs.render.text.iface {
    export interface ITextRenderer extends splashjs.render.display.iface.IInteractiveObjectRenderer {
        setColor();

        setFont();

        setFontSize();

        setFontWeight();

        setFontStyle();

        setText();

        setSelectable();

        setTextFormat();
    }
}
namespace splashjs.render.utils.iface {
    export interface IByteArrayRenderer extends splashjs.render.events.iface.IEventDispatcherRenderer {
        writeBytes(byteArray : splashjs.utils.iface.IByteArray, offset : number, length : number);

        getLength() : number;

        setDataView(dataView : DataView);
    }
}
namespace splashjs.render.utils.iface {
    export interface IResourceLoaderRenderer extends splashjs.render.events.iface.IEventDispatcherRenderer {
        loadAll(resources : Array<splashjs.utils.iface.IResource>);
    }
}
namespace splashjs.render.utils.iface {
    export interface IResourceRenderer extends splashjs.render.events.iface.IEventDispatcherRenderer {
        setResourceBase64(resourceBase64 : string);

        getResourceBase64() : string;
    }
}
namespace splashjs {
    export class SplashJS {
        public static render(AppClass : any, containerName : string, stageWidth : number, stageHeight : number) {
            let stage : splashjs.display.iface.IStage = new splashjs.display.Stage(containerName, stageWidth, stageHeight);
            try {
                stage.addChild(<splashjs.display.iface.IDisplayObject><any>/* newInstance */new (AppClass)());
            } catch(e) {
                console.error(e.message, e);
            };
        }

        public static navigateToURL(urlRequest : splashjs.net.iface.IURLRequest) {
            splashjs.render.SplashJSRenderer.navigateToURL(urlRequest);
        }
    }
    SplashJS["__class"] = "splashjs.SplashJS";

}
namespace splashjs.text {
    export class FontPath {
        /*private*/ normalFontPath : string;

        /*private*/ italicFontPath : string;

        /*private*/ boldFontPath : string;

        /*private*/ boldItalicFontPath : string;

        public constructor(normalFontPath? : any) {
            if(((typeof normalFontPath === 'string') || normalFontPath === null)) {
                let __args = arguments;
                if(this.normalFontPath===undefined) this.normalFontPath = null;
                if(this.italicFontPath===undefined) this.italicFontPath = null;
                if(this.boldFontPath===undefined) this.boldFontPath = null;
                if(this.boldItalicFontPath===undefined) this.boldItalicFontPath = null;
                if(this.normalFontPath===undefined) this.normalFontPath = null;
                if(this.italicFontPath===undefined) this.italicFontPath = null;
                if(this.boldFontPath===undefined) this.boldFontPath = null;
                if(this.boldItalicFontPath===undefined) this.boldItalicFontPath = null;
                (() => {
                    this.normalFontPath = normalFontPath;
                })();
            } else if(normalFontPath === undefined) {
                let __args = arguments;
                if(this.normalFontPath===undefined) this.normalFontPath = null;
                if(this.italicFontPath===undefined) this.italicFontPath = null;
                if(this.boldFontPath===undefined) this.boldFontPath = null;
                if(this.boldItalicFontPath===undefined) this.boldItalicFontPath = null;
                if(this.normalFontPath===undefined) this.normalFontPath = null;
                if(this.italicFontPath===undefined) this.italicFontPath = null;
                if(this.boldFontPath===undefined) this.boldFontPath = null;
                if(this.boldItalicFontPath===undefined) this.boldItalicFontPath = null;
            } else throw new Error('invalid overload');
        }

        public setNormalFontPath(normalFontPath : string) : FontPath {
            this.normalFontPath = normalFontPath;
            return this;
        }

        public setBoldFontPath(boldFontPath : string) : FontPath {
            this.boldFontPath = boldFontPath;
            return this;
        }

        public setItalicFontPath(italicFontPath : string) : FontPath {
            this.italicFontPath = italicFontPath;
            return this;
        }

        public setBoldItalicFontPath(boldItalicFontPath : string) : FontPath {
            this.boldItalicFontPath = boldItalicFontPath;
            return this;
        }

        public getNormalFontPath() : string {
            return this.normalFontPath;
        }

        public getBoldFontPath() : string {
            return this.boldFontPath;
        }

        public getItalicFontPath() : string {
            return this.italicFontPath;
        }

        public getBoldItalicFontPath() : string {
            return this.boldItalicFontPath;
        }
    }
    FontPath["__class"] = "splashjs.text.FontPath";

}
namespace splashjs.text {
    export class FontStyle {
        public static ITALIC : string = "italic";

        public static NORMAL : string = "normal";

        public static OBLIQUE : string = "oblique";
    }
    FontStyle["__class"] = "splashjs.text.FontStyle";

}
namespace splashjs.text {
    export class FontWeight {
        public static NORMAL : string = "normal";

        public static LIGHTER : string = "lighter";

        public static BOLD : string = "bold";

        public static BOLDER : string = "bolder";
    }
    FontWeight["__class"] = "splashjs.text.FontWeight";

}
namespace splashjs.text.iface {
    export interface IDynamicText extends splashjs.text.iface.IText {    }
}
namespace splashjs.text.iface {
    export interface IFont extends splashjs.events.iface.IEventDispatcher {
        getFontID() : string;

        getFontPath() : splashjs.text.iface.IFontPath;
    }
}
namespace splashjs.text.iface {
    export interface IFontPath {
        setNormalFontPath(normalFontPath : string) : IFontPath;

        setBoldFontPath(boldFontPath : string) : IFontPath;

        setItalicFontPath(italicFontPath : string) : IFontPath;

        setBoldItalicFontPath(boldItalicFontPath : string) : IFontPath;

        getNormalFontPath() : string;

        getBoldFontPath() : string;

        getItalicFontPath() : string;

        getBoldItalicFontPath() : string;
    }
}
namespace splashjs.text.iface {
    export interface IInputText extends splashjs.text.iface.IText {
        setPlaceholder(placeholder : string);

        getPlaceholder() : string;

        setBackgroundColor(backgroundColor : splashjs.utils.iface.IColor);

        getBackgroundColor() : splashjs.utils.iface.IColor;

        setBorderColor(borderColor : splashjs.utils.iface.IColor);

        getBorderColor() : splashjs.utils.iface.IColor;
    }
}
namespace splashjs.text.iface {
    export interface IStaticText extends splashjs.text.iface.IText {    }
}
namespace splashjs.text.iface {
    export interface IText extends splashjs.display.iface.IDisplayObject {
        setText(text : string);

        getText() : string;

        setFontSize(size : number);

        getFontSize() : number;

        setFontStyle(fontStyle : string);

        getFontStyle() : string;

        setFontWeight(fontWeight : string);

        getFontWeight() : string;

        setFont(font : splashjs.text.iface.IFont);

        getFont() : splashjs.text.iface.IFont;

        setColor(color : splashjs.utils.iface.IColor);

        getColor() : splashjs.utils.iface.IColor;

        setSelectable(selectable : boolean);

        isSelectable() : boolean;

        setTextFormat(textFormat : splashjs.text.iface.ITextFormat);

        getTextFormat() : splashjs.text.iface.ITextFormat;
    }
}
namespace splashjs.text.iface {
    export interface ITextFormat {
        setFont(font : splashjs.text.iface.IFont);

        getFont() : splashjs.text.iface.IFont;

        setFontStyle(fontStyle : string);

        getFontStyle() : string;

        setFontWeight(fontWeight : string);

        getFontWeight() : string;

        setFontSize(fontSize : number);

        getFontSize() : number;
    }
}
namespace splashjs.text {
    export class TextFormat implements splashjs.text.iface.ITextFormat {
        public font : splashjs.text.iface.IFont;

        public fontStyle : string;

        /*private*/ fontWeight : string;

        public fontSize : number;

        public constructor(font? : any, fontStyle? : any, fontWeight? : any, fontSize? : any) {
            if(((font != null && (font["__interfaces"] != null && font["__interfaces"].indexOf("splashjs.text.iface.IFont") >= 0 || font.constructor != null && font.constructor["__interfaces"] != null && font.constructor["__interfaces"].indexOf("splashjs.text.iface.IFont") >= 0)) || font === null) && ((typeof fontStyle === 'string') || fontStyle === null) && ((typeof fontWeight === 'string') || fontWeight === null) && ((typeof fontSize === 'number') || fontSize === null)) {
                let __args = arguments;
                if(this.font===undefined) this.font = null;
                if(this.fontStyle===undefined) this.fontStyle = null;
                if(this.fontWeight===undefined) this.fontWeight = null;
                if(this.fontSize===undefined) this.fontSize = 0;
                if(this.font===undefined) this.font = null;
                if(this.fontStyle===undefined) this.fontStyle = null;
                if(this.fontWeight===undefined) this.fontWeight = null;
                if(this.fontSize===undefined) this.fontSize = 0;
                (() => {
                    this.font = font;
                    this.fontStyle = fontStyle;
                    this.fontWeight = fontWeight;
                    this.fontSize = fontSize;
                })();
            } else if(font === undefined && fontStyle === undefined && fontWeight === undefined && fontSize === undefined) {
                let __args = arguments;
                if(this.font===undefined) this.font = null;
                if(this.fontStyle===undefined) this.fontStyle = null;
                if(this.fontWeight===undefined) this.fontWeight = null;
                if(this.fontSize===undefined) this.fontSize = 0;
                if(this.font===undefined) this.font = null;
                if(this.fontStyle===undefined) this.fontStyle = null;
                if(this.fontWeight===undefined) this.fontWeight = null;
                if(this.fontSize===undefined) this.fontSize = 0;
            } else throw new Error('invalid overload');
        }

        public setFont(font : splashjs.text.iface.IFont) {
            this.font = font;
        }

        public getFont() : splashjs.text.iface.IFont {
            return this.font;
        }

        public setFontStyle(fontStyle : string) {
            this.fontStyle = fontStyle;
        }

        public getFontStyle() : string {
            return this.fontStyle;
        }

        public setFontWeight(fontWeight : string) {
            this.fontWeight = fontWeight;
        }

        public getFontWeight() : string {
            return this.fontWeight;
        }

        public setFontSize(fontSize : number) {
            this.fontSize = fontSize;
        }

        public getFontSize() : number {
            return this.fontSize;
        }
    }
    TextFormat["__class"] = "splashjs.text.TextFormat";
    TextFormat["__interfaces"] = ["splashjs.text.iface.ITextFormat"];


}
namespace splashjs.ui.iface {
    export interface IMouseCursor {
        getMouseCursorType() : string;

        getMouseCursorName() : string;

        getMouseCursorImagePath() : string;
    }
}
namespace splashjs.ui {
    export class KeyLocation {
        public static STANDARD : string = "standard";

        public static LEFT : string = "left";

        public static RIGHT : string = "right";

        public static NUMPAD : string = "numpad";
    }
    KeyLocation["__class"] = "splashjs.ui.KeyLocation";

}
namespace splashjs.ui {
    export class MouseCursorName {
        public static ALIAS : string = "alias";

        public static ALL_SCROLL : string = "all-scroll";

        public static AUTO : string = "auto";

        public static CELL : string = "cell";

        public static CONTEXT_MENU : string = "context-menu";

        public static COL_RESIZE : string = "col-resize";

        public static COPY : string = "copy";

        public static CROSSHAIR : string = "crosshair";

        public static DEFAULT : string = "default";

        public static E_RESIZE : string = "e-resize";

        public static EW_RESIZE : string = "ew-resize";

        public static GRAB : string = "grab";

        public static GRABBING : string = "grabbing";

        public static HELP : string = "help";

        public static MOVE : string = "move";

        public static N_RESIZE : string = "n-resize";

        public static NE_RESIZE : string = "ne-resize";

        public static NESW_RESIZE : string = "nesw-resize";

        public static NS_RESIZE : string = "ns-resize";

        public static NW_RESIZE : string = "nw-resize";

        public static NWSE_RESIZE : string = "nwse-resize";

        public static NO_DROP : string = "no-drop";

        public static NOT_ALLOWED : string = "not-allowed";

        public static POINTER : string = "pointer";

        public static PROGRESS : string = "progress";

        public static ROW_RESIZE : string = "row-resize";

        public static S_RESIZE : string = "s-resize";

        public static SE_RESIZE : string = "se-resize";

        public static SW_RESIZE : string = "sw-resize";

        public static W_RESIZE : string = "w-resize";

        public static TEXT : string = "text";

        public static WAIT : string = "wait";

        public static ZOOM_IN : string = "zoom-in";

        public static ZOOM_OUT : string = "zoom-out";
    }
    MouseCursorName["__class"] = "splashjs.ui.MouseCursorName";

}
namespace splashjs.ui {
    export class MouseCursorType {
        public static SYSTEM : string = "system";

        public static IMAGE : string = "image";
    }
    MouseCursorType["__class"] = "splashjs.ui.MouseCursorType";

}
namespace splashjs.utils {
    export class ColorName {
        public static WHITE : string = "White";

        public static TOMATO : string = "Tomato";

        public static ORANGE : string = "Orange";

        public static DODGER_BLUE : string = "DodgerBlue";

        public static MEDIUM_SEA_GREEN : string = "MediumSeaGreen";

        public static GRAY : string = "Gray";

        public static SLATE_BLUE : string = "SlateBlue";

        public static VIOLET : string = "Violet";

        public static LIGHT_GRAY : string = "LightGray";

        public static ALICE_BLUE : string = "AliceBlue";

        public static ANTIQUE_WHITE : string = "AntiqueWhite";

        public static AQUA : string = "Aqua";

        public static AQUAMARINE : string = "Aquamarine";

        public static AZURE : string = "Azure";

        public static BEIGE : string = "Beige";

        public static BISQUE : string = "Bisque";

        public static BLACK : string = "Black";

        public static BLANCHED_ALMOND : string = "BlanchedAlmond";

        public static BLUE : string = "Blue";

        public static BLUE_VIOLET : string = "BlueViolet";

        public static BROWN : string = "Brown";

        public static BURLY_WOOD : string = "BurlyWood";

        public static CADET_BLUE : string = "CadetBlue";

        public static RED : string = "red";

        public static YELLOW : string = "yellow";

        public static GREEN : string = "green";

        public static NONE : string = "none";
    }
    ColorName["__class"] = "splashjs.utils.ColorName";

}
namespace splashjs.utils {
    export class ColorType {
        public static NAME : string = "name";

        public static RGB : string = "rgb";

        public static RGBA : string = "rgba";

        public static HSL : string = "hsl";

        public static HSLA : string = "hsla";

        public static HEX : string = "hex";

        public static GRADIENT : string = "gradient";
    }
    ColorType["__class"] = "splashjs.utils.ColorType";

}
namespace splashjs.utils.desktop {
    export class ByteArray implements splashjs.utils.desktop.IDesktopByteArray {
        constructor() {
        }
    }
    ByteArray["__class"] = "splashjs.utils.desktop.ByteArray";
    ByteArray["__interfaces"] = ["splashjs.utils.desktop.IDesktopByteArray"];


}
namespace splashjs.utils.desktop {
    export interface IDesktopByteArray {    }
}
namespace splashjs.utils {
    export abstract class Gradient implements splashjs.utils.iface.IGradient {
        /*private*/ colors : Array<splashjs.utils.iface.IColor> = <any>([]);

        /*private*/ repeat : boolean = false;

        public addColor(color : splashjs.utils.iface.IColor) {
            /* add */(this.colors.push(color)>0);
        }

        public addColors(...colors : splashjs.utils.iface.IColor[]) {
            for(let index123=0; index123 < colors.length; index123++) {
                let color = colors[index123];
                {
                    /* add */(this.colors.push(color)>0);
                }
            }
        }

        public getColors() : Array<splashjs.utils.iface.IColor> {
            return this.colors;
        }

        public setRepeat(repeat : boolean) {
            this.repeat = repeat;
        }

        public getRepeat() : boolean {
            return this.repeat;
        }

        constructor() {
        }
    }
    Gradient["__class"] = "splashjs.utils.Gradient";
    Gradient["__interfaces"] = ["splashjs.utils.iface.IGradient"];


}
namespace splashjs.utils {
    export class GradientDirection {
        public static TOP_TO_BOTTOM : string = "top_to_bottom";

        public static BOTTOM_TO_TOP : string = "bottom_to_top";

        public static LEFT_TO_RIGHT : string = "left_to_right";

        public static RIGHT_TO_LEFT : string = "right_to_left";

        public static TOP_TO_LEFT : string = "top_to_left";

        public static TOP_TO_RIGHT : string = "top_to_right";

        public static BOTTOM_TO_LEFT : string = "bottom_to_left";

        public static BOTTOM_TO_RIGHT : string = "bottom_to_right";

        public static LEFT_TO_TOP : string = "left_to_top";

        public static LEFT_TO_BOTTOM : string = "left_to_bottom";

        public static RIGHT_TO_TOP : string = "right_to_top";

        public static RIGHT_TO_BOTTOM : string = "right_to_bottom";
    }
    GradientDirection["__class"] = "splashjs.utils.GradientDirection";

}
namespace splashjs.utils {
    export class GradientShape {
        public static CIRCLE : string = "circle";

        public static ELLIPSE : string = "ellipse";
    }
    GradientShape["__class"] = "splashjs.utils.GradientShape";

}
namespace splashjs.utils {
    export class GradientSize {
        public static CLOSEST_SIDE : string = "closest-side";

        public static FARTHEST_SIDE : string = "farthest-side";

        public static CLOSEST_CORNER : string = "closest-corner";

        public static FARTHEST_CORNER : string = "farthest-corner";
    }
    GradientSize["__class"] = "splashjs.utils.GradientSize";

}
namespace splashjs.utils.iface {
    export interface IByteArray extends splashjs.events.iface.IEventDispatcher {    }
}
namespace splashjs.utils.iface {
    export interface IColor {
        getColorName() : string;

        getColorType() : string;

        getRed() : number;

        getGreen() : number;

        getBlue() : number;

        getHue() : number;

        getSaturation() : number;

        getLightness() : number;

        getAlpha() : number;

        getHEX() : string;

        getGradient() : splashjs.utils.iface.IGradient;
    }
}
namespace splashjs.filesystem.iface {
    export interface IFileStream {    }
}
namespace splashjs.utils.iface {
    export interface IGradient {
        addColor(color : splashjs.utils.iface.IColor);

        addColors(...colors : splashjs.utils.iface.IColor[]);

        getColors() : Array<splashjs.utils.iface.IColor>;

        setRepeat(repeat : boolean);

        getRepeat() : boolean;
    }
}
namespace splashjs.utils.iface {
    export interface ILinearGradient extends splashjs.utils.iface.IGradient {
        setGradientDirection(gradientDirection : string);

        getGradientDirection() : string;

        setGradientAngle(gradientAngle : number);

        getGradientAngle() : number;
    }
}
namespace splashjs.utils.iface {
    export interface IRadialGradient extends splashjs.utils.iface.IGradient {    }
}
namespace splashjs.utils.iface {
    export interface IResource extends splashjs.events.iface.IEventDispatcher {
        getResourcePath() : string;

        getResourceName() : string;

        getResourceType() : string;

        getResourceBase64() : string;
    }
}
namespace splashjs.utils.iface {
    export interface IResourceLoader extends splashjs.events.iface.IEventDispatcher {
        addResource(resource : splashjs.utils.iface.IResource);

        getResourceByName(resourceName : string) : splashjs.utils.iface.IResource;

        loadAll();
    }
}
namespace splashjs.utils.iface {
    export interface ITimer extends splashjs.events.iface.IEventDispatcher {
        start();

        reset();

        stop();

        getCurrentCount() : number;

        getDelay() : number;

        setDelay(delay : number);

        getRepeatCount() : number;

        setRepeatCount(repeatCount : number);

        isRunning() : boolean;
    }
}
namespace splashjs.utils {
    export class ResourceType {
        public static SOUND : string = "sound";

        public static IMAGE : string = "image";

        public static VIDEO : string = "video";
    }
    ResourceType["__class"] = "splashjs.utils.ResourceType";

}
namespace java.util {
    export abstract class TimerTask {
        static VIRGIN : number = 0;

        static SCHEDULED : number = 1;

        static EXECUTED : number = 2;

        static CANCELLED : number = 3;

        state : number = TimerTask.VIRGIN;

        nextExecutionTime : number;

        period : number = 0;

        handle : number;

        constructor() {
            if(this.nextExecutionTime===undefined) this.nextExecutionTime = 0;
            if(this.handle===undefined) this.handle = 0;
        }

        public abstract run();

        public cancel() : boolean {
            let success : boolean = this.state === TimerTask.SCHEDULED;
            this.state = TimerTask.CANCELLED;
            this.nextExecutionTime = 0;
            this.period = 0;
            return success;
        }

        public scheduledExecutionTime() : number {
            return this.period < 0?this.nextExecutionTime + this.period:this.nextExecutionTime - this.period;
        }
    }
    TimerTask["__class"] = "java.util.TimerTask";
    TimerTask["__interfaces"] = ["java.lang.Runnable"];


}
namespace splashjs.controls {
    export class Item extends splashjs.controls.BaseItem implements splashjs.controls.iface.IItem {
        /*private*/ text : string;

        /*private*/ value : any;

        public constructor(text : string, value : any) {
            super();
            if(this.text===undefined) this.text = null;
            if(this.value===undefined) this.value = null;
            this.text = text;
            this.value = value;
        }

        public setText(text : string) {
            this.text = text;
        }

        public getText() : string {
            return this.text;
        }

        public setValue(value : any) {
            this.value = value;
        }

        public getValue() : any {
            return this.value;
        }
    }
    Item["__class"] = "splashjs.controls.Item";
    Item["__interfaces"] = ["splashjs.controls.iface.IItem","splashjs.controls.iface.IBaseItem"];


}
namespace splashjs.controls {
    export class ItemGroup extends splashjs.controls.BaseItem implements splashjs.controls.iface.IItemGroup {
        /*private*/ title : string;

        /*private*/ items : Array<splashjs.controls.iface.IItem> = <any>([]);

        public constructor(title : string) {
            super();
            if(this.title===undefined) this.title = null;
            this.title = title;
        }

        public addItem(item : splashjs.controls.iface.IItem) {
            /* add */(this.items.push(item)>0);
        }

        public removeItem(item : splashjs.controls.iface.IItem) {
            /* remove */(a => { let index = a.indexOf(item); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.items);
        }

        public setTitle(title : string) {
            this.title = title;
        }

        public getTitle() : string {
            return this.title;
        }

        public getAllItems() : Array<splashjs.controls.iface.IItem> {
            return this.items;
        }
    }
    ItemGroup["__class"] = "splashjs.controls.ItemGroup";
    ItemGroup["__interfaces"] = ["splashjs.controls.iface.IItemGroup","splashjs.controls.iface.IBaseItem"];


}
namespace splashjs.events {
    export class IOErrorEvent extends splashjs.events.Event implements splashjs.events.iface.IIOErrorEvent {
        public static IO_ERROR : string = "io_error";

        /*private*/ text : string = null;

        public constructor(type : string) {
            super(type);
        }

        public setText(text : string) {
            this.text = text;
        }

        public getText() : string {
            return this.text;
        }
    }
    IOErrorEvent["__class"] = "splashjs.events.IOErrorEvent";
    IOErrorEvent["__interfaces"] = ["splashjs.events.iface.IEvent","splashjs.events.iface.IIOErrorEvent"];


}
namespace splashjs.events {
    export class KeyboardEvent extends splashjs.events.Event implements splashjs.events.iface.IKeyboardEvent {
        public static KEY_UP : string = "key_up";

        public static KEY_DOWN : string = "key_down";

        public static KEY_PRESS : string = "key_press";

        /*private*/ __splashjs_events_KeyboardEvent_altKey : boolean;

        /*private*/ charCode : number;

        /*private*/ code : string;

        /*private*/ ctrlKey : boolean;

        /*private*/ key : string;

        /*private*/ keyCode : number;

        /*private*/ location : string;

        /*private*/ metaKey : boolean;

        /*private*/ repeat : boolean;

        /*private*/ shiftKey : boolean;

        /*private*/ which : number;

        public constructor(name : string, altKey : boolean, charCode : number, code : string, ctrlKey : boolean, key : string, keyCode : number, location : string, metaKey : boolean, repeat : boolean, shiftKey : boolean, which : number) {
            super(name);
            if(this.__splashjs_events_KeyboardEvent_altKey===undefined) this.__splashjs_events_KeyboardEvent_altKey = null;
            if(this.charCode===undefined) this.charCode = null;
            if(this.code===undefined) this.code = null;
            if(this.ctrlKey===undefined) this.ctrlKey = null;
            if(this.key===undefined) this.key = null;
            if(this.keyCode===undefined) this.keyCode = null;
            if(this.location===undefined) this.location = null;
            if(this.metaKey===undefined) this.metaKey = null;
            if(this.repeat===undefined) this.repeat = null;
            if(this.shiftKey===undefined) this.shiftKey = null;
            if(this.which===undefined) this.which = null;
            this.__splashjs_events_KeyboardEvent_altKey = altKey;
            this.charCode = charCode;
            this.code = code;
            this.ctrlKey = ctrlKey;
            this.key = key;
            this.keyCode = keyCode;
            this.location = location;
            this.metaKey = metaKey;
            this.repeat = repeat;
            this.shiftKey = shiftKey;
            this.which = which;
        }

        public getAltKey() : boolean {
            return this.__splashjs_events_KeyboardEvent_altKey;
        }

        public getCharCode() : number {
            return this.charCode;
        }

        public getCode() : string {
            return this.code;
        }

        public getCtrlKey() : boolean {
            return this.ctrlKey;
        }

        public getKey() : string {
            return this.key;
        }

        public getKeyCode() : number {
            return this.keyCode;
        }

        public getLocation() : string {
            return this.location;
        }

        public getMetaKey() : boolean {
            return this.metaKey;
        }

        public getRepeat() : boolean {
            return this.repeat;
        }

        public getShiftKey() : boolean {
            return this.shiftKey;
        }

        public getWhich() : number {
            return this.which;
        }

        public toString() : string {
            let properties : string = "";
            properties += "name=" + this.getType() + ", altKey=" + this.__splashjs_events_KeyboardEvent_altKey + ", charCode=" + this.charCode + ", code=" + this.code + ", ctrlKey=" + this.ctrlKey + ", key=" + this.key + ", keyCode=" + this.keyCode + ", location=" + this.location + ", metaKey=" + this.metaKey + ", repeat=" + this.repeat + ", shifKey=" + this.shiftKey + ", which=" + this.which;
            return "KeyboardEvent[" + properties + "]";
        }
    }
    KeyboardEvent["__class"] = "splashjs.events.KeyboardEvent";
    KeyboardEvent["__interfaces"] = ["splashjs.events.iface.IEvent","splashjs.events.iface.IKeyboardEvent"];


}
namespace splashjs.events {
    export class MouseEvent extends splashjs.events.Event implements splashjs.events.iface.IMouseEvent {
        public static CLICK : string = "click";

        public static DOUBLE_CLICK : string = "double_click";

        public static MOUSE_DOWN : string = "mouse_down";

        public static MOUSE_ENTER : string = "mouse_enter";

        public static MOUSE_LEAVE : string = "mouse_leave";

        public static MOUSE_MOVE : string = "mouse_move";

        public static MOUSE_OUT : string = "mouse_out";

        public static MOUSE_OVER : string = "mouse_over";

        public static MOUSE_UP : string = "mouse_up";

        /*private*/ __splashjs_events_MouseEvent_altKey : boolean;

        /*private*/ localX : number;

        /*private*/ localY : number;

        public constructor(name : string, target : splashjs.events.iface.IEventDispatcher, currentTarget : splashjs.events.iface.IEventDispatcher) {
            super(name, target, currentTarget);
            if(this.__splashjs_events_MouseEvent_altKey===undefined) this.__splashjs_events_MouseEvent_altKey = false;
            if(this.localX===undefined) this.localX = 0;
            if(this.localY===undefined) this.localY = 0;
            this.__splashjs_events_MouseEvent_altKey = this.__splashjs_events_MouseEvent_altKey;
        }

        public getAltKey() : boolean {
            return this.__splashjs_events_MouseEvent_altKey;
        }

        public setAltKey(altKey : boolean) {
            this.__splashjs_events_MouseEvent_altKey = altKey;
        }

        public setLocalX(localX : number) {
            this.localX = localX;
        }

        public getLocalX() : number {
            return this.localX;
        }

        public setLocalY(localY : number) {
            this.localY = localY;
        }

        public getLocalY() : number {
            return this.localY;
        }
    }
    MouseEvent["__class"] = "splashjs.events.MouseEvent";
    MouseEvent["__interfaces"] = ["splashjs.events.iface.IEvent","splashjs.events.iface.IMouseEvent"];


}
namespace splashjs.events {
    export class PermissionEvent extends splashjs.events.Event implements splashjs.events.iface.IPermissionEvent {
        public static PERMISSION_STATUS : string = "permission_status";

        /*private*/ status : string;

        public constructor(type? : any, target? : any, currentTarget? : any) {
            if(((typeof type === 'string') || type === null) && ((target != null && (target["__interfaces"] != null && target["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || target.constructor != null && target.constructor["__interfaces"] != null && target.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || target === null) && ((currentTarget != null && (currentTarget["__interfaces"] != null && currentTarget["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || currentTarget.constructor != null && currentTarget.constructor["__interfaces"] != null && currentTarget.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || currentTarget === null)) {
                let __args = arguments;
                super(type, target, currentTarget);
                this.status = splashjs.permissions.PermissionStatus.UNKNOWN;
            } else if(((typeof type === 'string') || type === null) && target === undefined && currentTarget === undefined) {
                let __args = arguments;
                super(type);
                this.status = splashjs.permissions.PermissionStatus.UNKNOWN;
            } else throw new Error('invalid overload');
        }

        public getStatus() : string {
            return this.status;
        }

        public setStatus(status : string) {
            this.status = status;
        }
    }
    PermissionEvent["__class"] = "splashjs.events.PermissionEvent";
    PermissionEvent["__interfaces"] = ["splashjs.events.iface.IEvent","splashjs.events.iface.IPermissionEvent"];


}
namespace splashjs.events {
    export class ProgressEvent extends splashjs.events.Event implements splashjs.events.iface.IProgressEvent {
        public static PROGRESS : string = "progress";

        /*private*/ bytesLoaded : number = -1;

        /*private*/ bytesTotal : number = -1;

        public constructor(type : string) {
            super(type);
        }

        public setBytesLoaded(bytesLoaded : number) {
            this.bytesLoaded = bytesLoaded;
        }

        public getBytesLoaded() : number {
            return this.bytesLoaded;
        }

        public setBytesTotal(bytesTotal : number) {
            this.bytesTotal = bytesTotal;
        }

        public getBytesTotal() : number {
            return this.bytesTotal;
        }
    }
    ProgressEvent["__class"] = "splashjs.events.ProgressEvent";
    ProgressEvent["__interfaces"] = ["splashjs.events.iface.IEvent","splashjs.events.iface.IProgressEvent"];


}
namespace splashjs.events {
    export class TimerEvent extends splashjs.events.Event {
        public static TIMER : string = "timer";

        public static TIMER_COMPLETE : string = "timer_complete";

        public constructor(type : string, target : splashjs.events.iface.IEventDispatcher, currentTarget : splashjs.events.iface.IEventDispatcher) {
            super(type, target, currentTarget);
        }
    }
    TimerEvent["__class"] = "splashjs.events.TimerEvent";
    TimerEvent["__interfaces"] = ["splashjs.events.iface.IEvent"];


}
namespace splashjs.events {
    export class TransitionEvent extends splashjs.events.Event implements splashjs.events.iface.ITransitionEvent {
        public static DELAY_COMPLETE : string = "delay_complete";

        public static COMPLETE : string = "complete";

        public static DURATION_COMPLETE : string = "duration_complete";

        public static LOOP_INTERVAL_COMPLETE : string = "loop_interval_complete";

        public constructor(type? : any, e1? : any, e2? : any) {
            if(((typeof type === 'string') || type === null) && ((e1 != null && (e1["__interfaces"] != null && e1["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || e1.constructor != null && e1.constructor["__interfaces"] != null && e1.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || e1 === null) && ((e2 != null && (e2["__interfaces"] != null && e2["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || e2.constructor != null && e2.constructor["__interfaces"] != null && e2.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || e2 === null)) {
                let __args = arguments;
                super(type, e1, e2);
            } else if(((typeof type === 'string') || type === null) && e1 === undefined && e2 === undefined) {
                let __args = arguments;
                super(type);
            } else throw new Error('invalid overload');
        }
    }
    TransitionEvent["__class"] = "splashjs.events.TransitionEvent";
    TransitionEvent["__interfaces"] = ["splashjs.events.iface.IEvent","splashjs.events.iface.ITransitionEvent"];


}
namespace splashjs.filters {
    export class BlurFilter extends splashjs.filters.Filter implements splashjs.filters.iface.IBlurFilter {
        /*private*/ blur : number;

        public constructor(blur? : any) {
            if(((typeof blur === 'number') || blur === null)) {
                let __args = arguments;
                super();
                if(this.blur===undefined) this.blur = 0;
                if(this.blur===undefined) this.blur = 0;
                (() => {
                    this.blur = blur;
                })();
            } else if(blur === undefined) {
                let __args = arguments;
                super();
                if(this.blur===undefined) this.blur = 0;
                if(this.blur===undefined) this.blur = 0;
            } else throw new Error('invalid overload');
        }

        public setBlur(blur : number) : splashjs.filters.iface.IBlurFilter {
            this.blur = blur;
            return this;
        }

        public getBlur() : number {
            return this.blur;
        }
    }
    BlurFilter["__class"] = "splashjs.filters.BlurFilter";
    BlurFilter["__interfaces"] = ["splashjs.filters.iface.IFilter","splashjs.filters.iface.IBlurFilter"];


}
namespace splashjs.filters {
    export class BrightnessFilter extends splashjs.filters.Filter implements splashjs.filters.iface.IBrightnessFilter {
        /*private*/ brightness : number;

        public constructor(brightness? : any) {
            if(((typeof brightness === 'number') || brightness === null)) {
                let __args = arguments;
                super();
                if(this.brightness===undefined) this.brightness = 0;
                if(this.brightness===undefined) this.brightness = 0;
                (() => {
                    this.brightness = brightness;
                })();
            } else if(brightness === undefined) {
                let __args = arguments;
                super();
                if(this.brightness===undefined) this.brightness = 0;
                if(this.brightness===undefined) this.brightness = 0;
            } else throw new Error('invalid overload');
        }

        public setBrightness(brightness : number) : splashjs.filters.iface.IBrightnessFilter {
            this.brightness = brightness;
            return this;
        }

        public getBrightness() : number {
            return this.brightness;
        }
    }
    BrightnessFilter["__class"] = "splashjs.filters.BrightnessFilter";
    BrightnessFilter["__interfaces"] = ["splashjs.filters.iface.IFilter","splashjs.filters.iface.IBrightnessFilter"];


}
namespace splashjs.filters {
    export class ContrastFilter extends splashjs.filters.Filter implements splashjs.filters.iface.IContrastFilter {
        /*private*/ contrast : number;

        public constructor(contrast? : any) {
            if(((typeof contrast === 'number') || contrast === null)) {
                let __args = arguments;
                super();
                if(this.contrast===undefined) this.contrast = 0;
                if(this.contrast===undefined) this.contrast = 0;
                (() => {
                    this.contrast = contrast;
                })();
            } else if(contrast === undefined) {
                let __args = arguments;
                super();
                if(this.contrast===undefined) this.contrast = 0;
                if(this.contrast===undefined) this.contrast = 0;
            } else throw new Error('invalid overload');
        }

        public setContrast(contrast : number) : splashjs.filters.iface.IContrastFilter {
            this.contrast = contrast;
            return this;
        }

        public getContrast() : number {
            return this.contrast;
        }
    }
    ContrastFilter["__class"] = "splashjs.filters.ContrastFilter";
    ContrastFilter["__interfaces"] = ["splashjs.filters.iface.IContrastFilter","splashjs.filters.iface.IFilter"];


}
namespace splashjs.filters {
    export class DropShadowFilter extends splashjs.filters.Filter implements splashjs.filters.iface.IDropShadowFilter {
        /*private*/ offsetX : number;

        /*private*/ offsetY : number;

        /*private*/ blur : number;

        /*private*/ spread : number;

        /*private*/ color : splashjs.utils.iface.IColor;

        public constructor(offsetX? : any, offsetY? : any, blur? : any, color? : any) {
            if(((typeof offsetX === 'number') || offsetX === null) && ((typeof offsetY === 'number') || offsetY === null) && ((typeof blur === 'number') || blur === null) && ((color != null && (color["__interfaces"] != null && color["__interfaces"].indexOf("splashjs.utils.iface.IColor") >= 0 || color.constructor != null && color.constructor["__interfaces"] != null && color.constructor["__interfaces"].indexOf("splashjs.utils.iface.IColor") >= 0)) || color === null)) {
                let __args = arguments;
                super();
                if(this.offsetX===undefined) this.offsetX = 0;
                if(this.offsetY===undefined) this.offsetY = 0;
                if(this.blur===undefined) this.blur = 0;
                if(this.spread===undefined) this.spread = 0;
                this.color = splashjs.utils.Color.BLACK_$LI$();
                if(this.offsetX===undefined) this.offsetX = 0;
                if(this.offsetY===undefined) this.offsetY = 0;
                if(this.blur===undefined) this.blur = 0;
                if(this.spread===undefined) this.spread = 0;
                (() => {
                    this.offsetX = offsetX;
                    this.offsetY = offsetY;
                    this.blur = blur;
                    this.color = color;
                })();
            } else if(offsetX === undefined && offsetY === undefined && blur === undefined && color === undefined) {
                let __args = arguments;
                super();
                if(this.offsetX===undefined) this.offsetX = 0;
                if(this.offsetY===undefined) this.offsetY = 0;
                if(this.blur===undefined) this.blur = 0;
                if(this.spread===undefined) this.spread = 0;
                this.color = splashjs.utils.Color.BLACK_$LI$();
                if(this.offsetX===undefined) this.offsetX = 0;
                if(this.offsetY===undefined) this.offsetY = 0;
                if(this.blur===undefined) this.blur = 0;
                if(this.spread===undefined) this.spread = 0;
            } else throw new Error('invalid overload');
        }

        public setOffsetX(offsetX : number) : splashjs.filters.iface.IDropShadowFilter {
            this.offsetX = offsetX;
            return this;
        }

        public getOffsetX() : number {
            return this.offsetX;
        }

        public setOffsetY(offsetY : number) : splashjs.filters.iface.IDropShadowFilter {
            this.offsetY = offsetY;
            return this;
        }

        public getOffsetY() : number {
            return this.offsetY;
        }

        public setBlur(blur : number) : splashjs.filters.iface.IDropShadowFilter {
            this.blur = blur;
            return this;
        }

        public getBlur() : number {
            return this.blur;
        }

        public setSpread(spread : number) : splashjs.filters.iface.IDropShadowFilter {
            this.spread = spread;
            return this;
        }

        public getSpread() : number {
            return this.spread;
        }

        public setColor(color : splashjs.utils.iface.IColor) : splashjs.filters.iface.IDropShadowFilter {
            this.color = color;
            return this;
        }

        public getColor() : splashjs.utils.iface.IColor {
            return this.color;
        }
    }
    DropShadowFilter["__class"] = "splashjs.filters.DropShadowFilter";
    DropShadowFilter["__interfaces"] = ["splashjs.filters.iface.IFilter","splashjs.filters.iface.IDropShadowFilter"];


}
namespace splashjs.filters {
    export class GrayscaleFilter extends splashjs.filters.Filter implements splashjs.filters.iface.IGrayscaleFilter {
        /*private*/ grayscale : number;

        public constructor(grayscale? : any) {
            if(((typeof grayscale === 'number') || grayscale === null)) {
                let __args = arguments;
                super();
                if(this.grayscale===undefined) this.grayscale = 0;
                if(this.grayscale===undefined) this.grayscale = 0;
                (() => {
                    this.grayscale = grayscale;
                })();
            } else if(grayscale === undefined) {
                let __args = arguments;
                super();
                if(this.grayscale===undefined) this.grayscale = 0;
                if(this.grayscale===undefined) this.grayscale = 0;
            } else throw new Error('invalid overload');
        }

        public setGrayscale(grayscale : number) : splashjs.filters.iface.IGrayscaleFilter {
            this.grayscale = grayscale;
            return this;
        }

        public getGrayscale() : number {
            return this.grayscale;
        }
    }
    GrayscaleFilter["__class"] = "splashjs.filters.GrayscaleFilter";
    GrayscaleFilter["__interfaces"] = ["splashjs.filters.iface.IFilter","splashjs.filters.iface.IGrayscaleFilter"];


}
namespace splashjs.filters {
    export class HueRotateFilter extends splashjs.filters.Filter implements splashjs.filters.iface.IHueRotateFilter {
        /*private*/ hueRotate : number;

        public constructor(hueRotate? : any) {
            if(((typeof hueRotate === 'number') || hueRotate === null)) {
                let __args = arguments;
                super();
                if(this.hueRotate===undefined) this.hueRotate = 0;
                if(this.hueRotate===undefined) this.hueRotate = 0;
                (() => {
                    this.hueRotate = hueRotate;
                })();
            } else if(hueRotate === undefined) {
                let __args = arguments;
                super();
                if(this.hueRotate===undefined) this.hueRotate = 0;
                if(this.hueRotate===undefined) this.hueRotate = 0;
            } else throw new Error('invalid overload');
        }

        public setHueRotate(hueRotate : number) : splashjs.filters.iface.IHueRotateFilter {
            this.hueRotate = hueRotate;
            return this;
        }

        public getHueRotate() : number {
            return this.hueRotate;
        }
    }
    HueRotateFilter["__class"] = "splashjs.filters.HueRotateFilter";
    HueRotateFilter["__interfaces"] = ["splashjs.filters.iface.IHueRotateFilter","splashjs.filters.iface.IFilter"];


}
namespace splashjs.filters {
    export class InvertFilter extends splashjs.filters.Filter implements splashjs.filters.iface.IInvertFilter {
        /*private*/ invert : number;

        public constructor(invert? : any) {
            if(((typeof invert === 'number') || invert === null)) {
                let __args = arguments;
                super();
                if(this.invert===undefined) this.invert = 0;
                if(this.invert===undefined) this.invert = 0;
                (() => {
                    this.invert = invert;
                })();
            } else if(invert === undefined) {
                let __args = arguments;
                super();
                if(this.invert===undefined) this.invert = 0;
                if(this.invert===undefined) this.invert = 0;
            } else throw new Error('invalid overload');
        }

        public setInvert(invert : number) : splashjs.filters.iface.IInvertFilter {
            this.invert = invert;
            return this;
        }

        public getInvert() : number {
            return this.invert;
        }
    }
    InvertFilter["__class"] = "splashjs.filters.InvertFilter";
    InvertFilter["__interfaces"] = ["splashjs.filters.iface.IInvertFilter","splashjs.filters.iface.IFilter"];


}
namespace splashjs.filters {
    export class SaturateFilter extends splashjs.filters.Filter implements splashjs.filters.iface.ISaturateFilter {
        /*private*/ saturate : number;

        public constructor(saturate? : any) {
            if(((typeof saturate === 'number') || saturate === null)) {
                let __args = arguments;
                super();
                if(this.saturate===undefined) this.saturate = 0;
                if(this.saturate===undefined) this.saturate = 0;
                (() => {
                    this.saturate = saturate;
                })();
            } else if(saturate === undefined) {
                let __args = arguments;
                super();
                if(this.saturate===undefined) this.saturate = 0;
                if(this.saturate===undefined) this.saturate = 0;
            } else throw new Error('invalid overload');
        }

        public setSaturate(saturate : number) : splashjs.filters.iface.ISaturateFilter {
            this.saturate = saturate;
            return this;
        }

        public getSaturate() : number {
            return this.saturate;
        }
    }
    SaturateFilter["__class"] = "splashjs.filters.SaturateFilter";
    SaturateFilter["__interfaces"] = ["splashjs.filters.iface.IFilter","splashjs.filters.iface.ISaturateFilter"];


}
namespace splashjs.filters {
    export class SepiaFilter extends splashjs.filters.Filter implements splashjs.filters.iface.ISepiaFilter {
        /*private*/ sepia : number;

        public constructor(sepia? : any) {
            if(((typeof sepia === 'number') || sepia === null)) {
                let __args = arguments;
                super();
                if(this.sepia===undefined) this.sepia = 0;
                if(this.sepia===undefined) this.sepia = 0;
                (() => {
                    this.sepia = sepia;
                })();
            } else if(sepia === undefined) {
                let __args = arguments;
                super();
                if(this.sepia===undefined) this.sepia = 0;
                if(this.sepia===undefined) this.sepia = 0;
            } else throw new Error('invalid overload');
        }

        public setSepia(sepia : number) : splashjs.filters.iface.ISepiaFilter {
            this.sepia = sepia;
            return this;
        }

        public getSepia() : number {
            return this.sepia;
        }
    }
    SepiaFilter["__class"] = "splashjs.filters.SepiaFilter";
    SepiaFilter["__interfaces"] = ["splashjs.filters.iface.ISepiaFilter","splashjs.filters.iface.IFilter"];


}
namespace splashjs.lang {
    export class UnsupportedOperationError extends splashjs.lang.RuntimeError {
        public constructor() {
            super("Unsupported operation error");
            (<any>Object).setPrototypeOf(this, UnsupportedOperationError.prototype);
        }
    }
    UnsupportedOperationError["__class"] = "splashjs.lang.UnsupportedOperationError";
    UnsupportedOperationError["__interfaces"] = ["java.io.Serializable"];


}
namespace splashjs.lang {
    export class IOError extends splashjs.lang.SplashError implements splashjs.lang.iface.IIOError {
        public constructor(message : string) {
            super(message);
            (<any>Object).setPrototypeOf(this, IOError.prototype);
            this.name = /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor));
        }
    }
    IOError["__class"] = "splashjs.lang.IOError";
    IOError["__interfaces"] = ["splashjs.lang.iface.ISplashError","splashjs.lang.iface.IIOError","java.io.Serializable"];


}
namespace splashjs.lang {
    export class RangeError extends splashjs.lang.SplashError implements splashjs.lang.iface.IRangeError {
        public constructor(message : string) {
            super(message);
            (<any>Object).setPrototypeOf(this, RangeError.prototype);
            this.name = /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor));
        }
    }
    RangeError["__class"] = "splashjs.lang.RangeError";
    RangeError["__interfaces"] = ["splashjs.lang.iface.ISplashError","splashjs.lang.iface.IRangeError","java.io.Serializable"];


}
namespace splashjs.lang {
    export class SecurityError extends splashjs.lang.SplashError implements splashjs.lang.iface.ISecurityError {
        public constructor(message : string) {
            super(message);
            (<any>Object).setPrototypeOf(this, SecurityError.prototype);
            this.name = /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor));
        }
    }
    SecurityError["__class"] = "splashjs.lang.SecurityError";
    SecurityError["__interfaces"] = ["splashjs.lang.iface.ISplashError","splashjs.lang.iface.ISecurityError","java.io.Serializable"];


}
namespace splashjs.events {
    export abstract class EventDispatcher extends splashjs.lang.SplashObject implements splashjs.events.iface.IEventDispatcher {
        /*private*/ eventStore : EventDispatcher.EventStore;

        /*private*/ uniqueID : string;

        /*private*/ id : string;

        /*private*/ renderer : splashjs.render.iface.IRenderer;

        stage : splashjs.display.iface.IStage;

        public constructor(id? : any) {
            if(((typeof id === 'string') || id === null)) {
                let __args = arguments;
                super();
                if(this.eventStore===undefined) this.eventStore = null;
                if(this.uniqueID===undefined) this.uniqueID = null;
                if(this.id===undefined) this.id = null;
                if(this.renderer===undefined) this.renderer = null;
                if(this.stage===undefined) this.stage = null;
                if(this.eventStore===undefined) this.eventStore = null;
                if(this.uniqueID===undefined) this.uniqueID = null;
                if(this.id===undefined) this.id = null;
                if(this.renderer===undefined) this.renderer = null;
                if(this.stage===undefined) this.stage = null;
                (() => {
                    this.eventStore = new EventDispatcher.EventStore(this);
                    this.id = id;
                    this.uniqueID = id + /* nanoTime */(Date.now() * 1000000);
                })();
            } else if(id === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let id : any = "splashjs";
                    super();
                    if(this.eventStore===undefined) this.eventStore = null;
                    if(this.uniqueID===undefined) this.uniqueID = null;
                    if(this.id===undefined) this.id = null;
                    if(this.renderer===undefined) this.renderer = null;
                    if(this.stage===undefined) this.stage = null;
                    if(this.eventStore===undefined) this.eventStore = null;
                    if(this.uniqueID===undefined) this.uniqueID = null;
                    if(this.id===undefined) this.id = null;
                    if(this.renderer===undefined) this.renderer = null;
                    if(this.stage===undefined) this.stage = null;
                    (() => {
                        this.eventStore = new EventDispatcher.EventStore(this);
                        this.id = id;
                        this.uniqueID = id + /* nanoTime */(Date.now() * 1000000);
                    })();
                }
            } else throw new Error('invalid overload');
        }

        public setRenderer(renderer : splashjs.render.iface.IRenderer) {
            this.renderer = renderer;
        }

        public getRenderer() : splashjs.render.iface.IRenderer {
            return this.renderer;
        }

        public getStage() : splashjs.display.iface.IStage {
            return this.stage;
        }

        public render() {
        }

        public addEventListener(eventName : string, eventHandler : (p1: splashjs.events.iface.IEvent) => void) {
            this.eventStore.add(eventName, <any>(eventHandler));
        }

        public removeEventListener(eventName : string, eventHandler : (p1: splashjs.events.iface.IEvent) => void) {
            this.eventStore.remove(eventName, <any>(eventHandler));
        }

        public removeAllEventListeners(eventName : string) {
            this.eventStore.removeAll(eventName);
        }

        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            let eventName : string = event.getType();
            {
                let array125 = this.eventStore.getEventHandlersByName(eventName);
                for(let index124=0; index124 < array125.length; index124++) {
                    let eventHandler = array125[index124];
                    (target => (typeof target === 'function')?target(event):(<any>target).accept(event))(eventHandler)
                }
            }
            return true;
        }

        /**
         * 
         * @return {string}
         */
        public getUniqueID() : string {
            return this.uniqueID;
        }

        /**
         * 
         * @return {string}
         */
        public getID() : string {
            return this.id;
        }
    }
    EventDispatcher["__class"] = "splashjs.events.EventDispatcher";
    EventDispatcher["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];



    export namespace EventDispatcher {

        export class EventStore {
            public __parent: any;
            eventNames : Array<string>;

            eventHandlers : Array<(p1: splashjs.events.iface.IEvent) => void>;

            public constructor(__parent: any) {
                this.__parent = __parent;
                this.eventNames = <any>([]);
                this.eventHandlers = <any>([]);
            }

            public add(eventName : string, eventHandler : (p1: splashjs.events.iface.IEvent) => void) {
                /* add */(this.eventNames.push(eventName)>0);
                /* add */(this.eventHandlers.push(eventHandler)>0);
            }

            public remove(eventName : string, eventHandler : (p1: splashjs.events.iface.IEvent) => void) {
                let pos : number = -1;
                for(let i : number = 0; i < /* size */(<number>this.eventHandlers.length); i++) {{
                    if(/* get */this.eventHandlers[i] === eventHandler) {
                        pos = i;
                        break;
                    }
                };}
                if(pos >= 0) {
                    /* remove */this.eventNames.splice(pos, 1)[0];
                    /* remove */this.eventHandlers.splice(pos, 1)[0];
                }
            }

            public removeAll(eventName : string) {
            }

            public getEventHandlersByName(eventName : string) : Array<(p1: splashjs.events.iface.IEvent) => void> {
                let eHandlers : Array<(p1: splashjs.events.iface.IEvent) => void> = <any>([]);
                for(let i : number = 0; i < /* size */(<number>this.eventNames.length); i++) {{
                    if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(/* get */this.eventNames[i], eventName)) /* add */(eHandlers.push(/* get */this.eventHandlers[i])>0);
                };}
                return eHandlers;
            }
        }
        EventStore["__class"] = "splashjs.events.EventDispatcher.EventStore";

    }

}
namespace splashjs.render.lang {
    export abstract class SplashObjectRenderer extends splashjs.render.Renderer implements splashjs.render.lang.iface.ISplashObjectRenderer {
        constructor() {
            super();
        }
    }
    SplashObjectRenderer["__class"] = "splashjs.render.lang.SplashObjectRenderer";
    SplashObjectRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.ui {
    export class MouseCursor implements splashjs.ui.iface.IMouseCursor {
        public static ALIAS : splashjs.ui.iface.IMouseCursor; public static ALIAS_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.ALIAS == null) MouseCursor.ALIAS = new MouseCursor(splashjs.ui.MouseCursorName.ALIAS, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.ALIAS; };

        public static ALL_SCROLL : splashjs.ui.iface.IMouseCursor; public static ALL_SCROLL_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.ALL_SCROLL == null) MouseCursor.ALL_SCROLL = new MouseCursor(splashjs.ui.MouseCursorName.ALL_SCROLL, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.ALL_SCROLL; };

        public static AUTO : splashjs.ui.iface.IMouseCursor; public static AUTO_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.AUTO == null) MouseCursor.AUTO = new MouseCursor(splashjs.ui.MouseCursorName.AUTO, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.AUTO; };

        public static CELL : splashjs.ui.iface.IMouseCursor; public static CELL_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.CELL == null) MouseCursor.CELL = new MouseCursor(splashjs.ui.MouseCursorName.CELL, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.CELL; };

        public static CONTEXT_MENU : splashjs.ui.iface.IMouseCursor; public static CONTEXT_MENU_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.CONTEXT_MENU == null) MouseCursor.CONTEXT_MENU = new MouseCursor(splashjs.ui.MouseCursorName.CONTEXT_MENU, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.CONTEXT_MENU; };

        public static COL_RESIZE : splashjs.ui.iface.IMouseCursor; public static COL_RESIZE_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.COL_RESIZE == null) MouseCursor.COL_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.COL_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.COL_RESIZE; };

        public static COPY : splashjs.ui.iface.IMouseCursor; public static COPY_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.COPY == null) MouseCursor.COPY = new MouseCursor(splashjs.ui.MouseCursorName.COPY, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.COPY; };

        public static CROSSHAIR : splashjs.ui.iface.IMouseCursor; public static CROSSHAIR_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.CROSSHAIR == null) MouseCursor.CROSSHAIR = new MouseCursor(splashjs.ui.MouseCursorName.CROSSHAIR, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.CROSSHAIR; };

        public static DEFAULT : splashjs.ui.iface.IMouseCursor; public static DEFAULT_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.DEFAULT == null) MouseCursor.DEFAULT = new MouseCursor(splashjs.ui.MouseCursorName.DEFAULT, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.DEFAULT; };

        public static E_RESIZE : splashjs.ui.iface.IMouseCursor; public static E_RESIZE_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.E_RESIZE == null) MouseCursor.E_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.E_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.E_RESIZE; };

        public static EW_RESIZE : splashjs.ui.iface.IMouseCursor; public static EW_RESIZE_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.EW_RESIZE == null) MouseCursor.EW_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.EW_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.EW_RESIZE; };

        public static GRAB : splashjs.ui.iface.IMouseCursor; public static GRAB_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.GRAB == null) MouseCursor.GRAB = new MouseCursor(splashjs.ui.MouseCursorName.GRAB, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.GRAB; };

        public static GRABBING : splashjs.ui.iface.IMouseCursor; public static GRABBING_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.GRABBING == null) MouseCursor.GRABBING = new MouseCursor(splashjs.ui.MouseCursorName.GRABBING, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.GRABBING; };

        public static HELP : splashjs.ui.iface.IMouseCursor; public static HELP_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.HELP == null) MouseCursor.HELP = new MouseCursor(splashjs.ui.MouseCursorName.HELP, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.HELP; };

        public static MOVE : splashjs.ui.iface.IMouseCursor; public static MOVE_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.MOVE == null) MouseCursor.MOVE = new MouseCursor(splashjs.ui.MouseCursorName.MOVE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.MOVE; };

        public static N_RESIZE : splashjs.ui.iface.IMouseCursor; public static N_RESIZE_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.N_RESIZE == null) MouseCursor.N_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.N_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.N_RESIZE; };

        public static NE_RESIZE : splashjs.ui.iface.IMouseCursor; public static NE_RESIZE_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.NE_RESIZE == null) MouseCursor.NE_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.NE_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NE_RESIZE; };

        public static NESW_RESIZE : splashjs.ui.iface.IMouseCursor; public static NESW_RESIZE_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.NESW_RESIZE == null) MouseCursor.NESW_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.NESW_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NESW_RESIZE; };

        public static NS_RESIZE : splashjs.ui.iface.IMouseCursor; public static NS_RESIZE_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.NS_RESIZE == null) MouseCursor.NS_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.NS_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NS_RESIZE; };

        public static NW_RESIZE : splashjs.ui.iface.IMouseCursor; public static NW_RESIZE_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.NW_RESIZE == null) MouseCursor.NW_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.NW_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NW_RESIZE; };

        public static NWSE_RESIZE : splashjs.ui.iface.IMouseCursor; public static NWSE_RESIZE_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.NWSE_RESIZE == null) MouseCursor.NWSE_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.NWSE_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NWSE_RESIZE; };

        public static NO_DROP : splashjs.ui.iface.IMouseCursor; public static NO_DROP_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.NO_DROP == null) MouseCursor.NO_DROP = new MouseCursor(splashjs.ui.MouseCursorName.NO_DROP, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NO_DROP; };

        public static NOT_ALLOWED : splashjs.ui.iface.IMouseCursor; public static NOT_ALLOWED_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.NOT_ALLOWED == null) MouseCursor.NOT_ALLOWED = new MouseCursor(splashjs.ui.MouseCursorName.NOT_ALLOWED, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NOT_ALLOWED; };

        public static POINTER : splashjs.ui.iface.IMouseCursor; public static POINTER_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.POINTER == null) MouseCursor.POINTER = new MouseCursor(splashjs.ui.MouseCursorName.POINTER, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.POINTER; };

        public static PROGRESS : splashjs.ui.iface.IMouseCursor; public static PROGRESS_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.PROGRESS == null) MouseCursor.PROGRESS = new MouseCursor(splashjs.ui.MouseCursorName.PROGRESS, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.PROGRESS; };

        public static ROW_RESIZE : splashjs.ui.iface.IMouseCursor; public static ROW_RESIZE_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.ROW_RESIZE == null) MouseCursor.ROW_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.ROW_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.ROW_RESIZE; };

        public static S_RESIZE : splashjs.ui.iface.IMouseCursor; public static S_RESIZE_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.S_RESIZE == null) MouseCursor.S_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.S_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.S_RESIZE; };

        public static SE_RESIZE : splashjs.ui.iface.IMouseCursor; public static SE_RESIZE_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.SE_RESIZE == null) MouseCursor.SE_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.SE_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.SE_RESIZE; };

        public static SW_RESIZE : splashjs.ui.iface.IMouseCursor; public static SW_RESIZE_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.SW_RESIZE == null) MouseCursor.SW_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.SW_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.SW_RESIZE; };

        public static TEXT : splashjs.ui.iface.IMouseCursor; public static TEXT_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.TEXT == null) MouseCursor.TEXT = new MouseCursor(splashjs.ui.MouseCursorName.TEXT, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.TEXT; };

        public static W_RESIZE : splashjs.ui.iface.IMouseCursor; public static W_RESIZE_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.W_RESIZE == null) MouseCursor.W_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.W_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.W_RESIZE; };

        public static WAIT : splashjs.ui.iface.IMouseCursor; public static WAIT_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.WAIT == null) MouseCursor.WAIT = new MouseCursor(splashjs.ui.MouseCursorName.WAIT, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.WAIT; };

        public static ZOOM_IN : splashjs.ui.iface.IMouseCursor; public static ZOOM_IN_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.ZOOM_IN == null) MouseCursor.ZOOM_IN = new MouseCursor(splashjs.ui.MouseCursorName.ZOOM_IN, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.ZOOM_IN; };

        public static ZOOM_OUT : splashjs.ui.iface.IMouseCursor; public static ZOOM_OUT_$LI$() : splashjs.ui.iface.IMouseCursor { if(MouseCursor.ZOOM_OUT == null) MouseCursor.ZOOM_OUT = new MouseCursor(splashjs.ui.MouseCursorName.ZOOM_OUT, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.ZOOM_OUT; };

        /*private*/ mouseCursorName : string;

        /*private*/ mouseCursorImagePath : string;

        /*private*/ mouseCursorType : string;

        constructor(mouseCursorNameOrImagePath : string, mouseCursorType : string) {
            if(this.mouseCursorName===undefined) this.mouseCursorName = null;
            if(this.mouseCursorImagePath===undefined) this.mouseCursorImagePath = null;
            if(this.mouseCursorType===undefined) this.mouseCursorType = null;
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(mouseCursorType, splashjs.ui.MouseCursorType.SYSTEM)) {
                this.mouseCursorName = mouseCursorNameOrImagePath;
                this.mouseCursorType = splashjs.ui.MouseCursorType.SYSTEM;
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(mouseCursorType, splashjs.ui.MouseCursorType.IMAGE)) {
                this.mouseCursorImagePath = mouseCursorNameOrImagePath;
                this.mouseCursorType = splashjs.ui.MouseCursorType.IMAGE;
            } else {
                this.mouseCursorName = splashjs.ui.MouseCursorName.AUTO;
                this.mouseCursorType = splashjs.ui.MouseCursorType.SYSTEM;
            }
        }

        public getMouseCursorType() : string {
            return this.mouseCursorType;
        }

        public getMouseCursorName() : string {
            return this.mouseCursorName;
        }

        public getMouseCursorImagePath() : string {
            return this.mouseCursorImagePath;
        }

        public static setImagePath(mouseCursorImagePath : string) : splashjs.ui.iface.IMouseCursor {
            let mouseCursor : splashjs.ui.iface.IMouseCursor = new MouseCursor(mouseCursorImagePath, splashjs.ui.MouseCursorType.IMAGE);
            return mouseCursor;
        }
    }
    MouseCursor["__class"] = "splashjs.ui.MouseCursor";
    MouseCursor["__interfaces"] = ["splashjs.ui.iface.IMouseCursor"];


}
namespace splashjs.utils {
    export class Color implements splashjs.utils.iface.IColor {
        public static NONE : Color; public static NONE_$LI$() : Color { if(Color.NONE == null) Color.NONE = new Color(splashjs.utils.ColorName.NONE); return Color.NONE; };

        public static GREEN : Color; public static GREEN_$LI$() : Color { if(Color.GREEN == null) Color.GREEN = new Color(splashjs.utils.ColorName.GREEN); return Color.GREEN; };

        public static YELLOW : Color; public static YELLOW_$LI$() : Color { if(Color.YELLOW == null) Color.YELLOW = new Color(splashjs.utils.ColorName.YELLOW); return Color.YELLOW; };

        public static RED : Color; public static RED_$LI$() : Color { if(Color.RED == null) Color.RED = new Color(splashjs.utils.ColorName.RED); return Color.RED; };

        public static BLACK : Color; public static BLACK_$LI$() : Color { if(Color.BLACK == null) Color.BLACK = new Color(splashjs.utils.ColorName.BLACK); return Color.BLACK; };

        public static WHITE : Color; public static WHITE_$LI$() : Color { if(Color.WHITE == null) Color.WHITE = new Color(splashjs.utils.ColorName.WHITE); return Color.WHITE; };

        public static TOMATO : Color; public static TOMATO_$LI$() : Color { if(Color.TOMATO == null) Color.TOMATO = new Color(splashjs.utils.ColorName.TOMATO); return Color.TOMATO; };

        public static ORANGE : Color; public static ORANGE_$LI$() : Color { if(Color.ORANGE == null) Color.ORANGE = new Color(splashjs.utils.ColorName.ORANGE); return Color.ORANGE; };

        public static DODGER_BLUE : Color; public static DODGER_BLUE_$LI$() : Color { if(Color.DODGER_BLUE == null) Color.DODGER_BLUE = new Color(splashjs.utils.ColorName.DODGER_BLUE); return Color.DODGER_BLUE; };

        public static MEDIUM_SEA_GREEN : Color; public static MEDIUM_SEA_GREEN_$LI$() : Color { if(Color.MEDIUM_SEA_GREEN == null) Color.MEDIUM_SEA_GREEN = new Color(splashjs.utils.ColorName.MEDIUM_SEA_GREEN); return Color.MEDIUM_SEA_GREEN; };

        public static GRAY : Color; public static GRAY_$LI$() : Color { if(Color.GRAY == null) Color.GRAY = new Color(splashjs.utils.ColorName.GRAY); return Color.GRAY; };

        public static SLATE_BLUE : Color; public static SLATE_BLUE_$LI$() : Color { if(Color.SLATE_BLUE == null) Color.SLATE_BLUE = new Color(splashjs.utils.ColorName.SLATE_BLUE); return Color.SLATE_BLUE; };

        public static AQUA : Color; public static AQUA_$LI$() : Color { if(Color.AQUA == null) Color.AQUA = new Color(splashjs.utils.ColorName.AQUA); return Color.AQUA; };

        public static VIOLET : Color; public static VIOLET_$LI$() : Color { if(Color.VIOLET == null) Color.VIOLET = new Color(splashjs.utils.ColorName.VIOLET); return Color.VIOLET; };

        public static LIGHT_GRAY : Color; public static LIGHT_GRAY_$LI$() : Color { if(Color.LIGHT_GRAY == null) Color.LIGHT_GRAY = new Color(splashjs.utils.ColorName.LIGHT_GRAY); return Color.LIGHT_GRAY; };

        /*private*/ red : number;

        /*private*/ green : number;

        /*private*/ blue : number;

        /*private*/ hue : number;

        /*private*/ saturation : number;

        /*private*/ lightness : number;

        /*private*/ alpha : number;

        /*private*/ hex : string;

        /*private*/ colorName : string;

        /*private*/ colorType : string;

        /*private*/ gradient : splashjs.utils.iface.IGradient;

        public constructor(red? : any, green? : any, blue? : any, alpha? : any) {
            if(((typeof red === 'number') || red === null) && ((typeof green === 'number') || green === null) && ((typeof blue === 'number') || blue === null) && ((typeof alpha === 'number') || alpha === null)) {
                let __args = arguments;
                if(this.red===undefined) this.red = 0;
                if(this.green===undefined) this.green = 0;
                if(this.blue===undefined) this.blue = 0;
                if(this.hue===undefined) this.hue = 0;
                if(this.saturation===undefined) this.saturation = 0;
                if(this.lightness===undefined) this.lightness = 0;
                if(this.alpha===undefined) this.alpha = 0;
                if(this.hex===undefined) this.hex = null;
                if(this.colorName===undefined) this.colorName = null;
                if(this.colorType===undefined) this.colorType = null;
                if(this.gradient===undefined) this.gradient = null;
                if(this.red===undefined) this.red = 0;
                if(this.green===undefined) this.green = 0;
                if(this.blue===undefined) this.blue = 0;
                if(this.hue===undefined) this.hue = 0;
                if(this.saturation===undefined) this.saturation = 0;
                if(this.lightness===undefined) this.lightness = 0;
                if(this.alpha===undefined) this.alpha = 0;
                if(this.hex===undefined) this.hex = null;
                if(this.colorName===undefined) this.colorName = null;
                if(this.colorType===undefined) this.colorType = null;
                if(this.gradient===undefined) this.gradient = null;
                (() => {
                    this.green = green;
                    this.red = red;
                    this.blue = blue;
                    this.alpha = alpha;
                    this.colorType = splashjs.utils.ColorType.RGBA;
                })();
            } else if(((typeof red === 'number') || red === null) && ((typeof green === 'number') || green === null) && ((typeof blue === 'number') || blue === null) && ((typeof alpha === 'number') || alpha === null)) {
                let __args = arguments;
                let hue : any = __args[0];
                let saturation : any = __args[1];
                let lightness : any = __args[2];
                if(this.red===undefined) this.red = 0;
                if(this.green===undefined) this.green = 0;
                if(this.blue===undefined) this.blue = 0;
                if(this.hue===undefined) this.hue = 0;
                if(this.saturation===undefined) this.saturation = 0;
                if(this.lightness===undefined) this.lightness = 0;
                if(this.alpha===undefined) this.alpha = 0;
                if(this.hex===undefined) this.hex = null;
                if(this.colorName===undefined) this.colorName = null;
                if(this.colorType===undefined) this.colorType = null;
                if(this.gradient===undefined) this.gradient = null;
                if(this.red===undefined) this.red = 0;
                if(this.green===undefined) this.green = 0;
                if(this.blue===undefined) this.blue = 0;
                if(this.hue===undefined) this.hue = 0;
                if(this.saturation===undefined) this.saturation = 0;
                if(this.lightness===undefined) this.lightness = 0;
                if(this.alpha===undefined) this.alpha = 0;
                if(this.hex===undefined) this.hex = null;
                if(this.colorName===undefined) this.colorName = null;
                if(this.colorType===undefined) this.colorType = null;
                if(this.gradient===undefined) this.gradient = null;
                (() => {
                    this.hue = hue;
                    this.saturation = saturation;
                    this.lightness = lightness;
                    this.alpha = alpha;
                    this.colorType = splashjs.utils.ColorType.HSLA;
                })();
            } else if(((typeof red === 'number') || red === null) && ((typeof green === 'number') || green === null) && ((typeof blue === 'number') || blue === null) && alpha === undefined) {
                let __args = arguments;
                if(this.red===undefined) this.red = 0;
                if(this.green===undefined) this.green = 0;
                if(this.blue===undefined) this.blue = 0;
                if(this.hue===undefined) this.hue = 0;
                if(this.saturation===undefined) this.saturation = 0;
                if(this.lightness===undefined) this.lightness = 0;
                if(this.alpha===undefined) this.alpha = 0;
                if(this.hex===undefined) this.hex = null;
                if(this.colorName===undefined) this.colorName = null;
                if(this.colorType===undefined) this.colorType = null;
                if(this.gradient===undefined) this.gradient = null;
                if(this.red===undefined) this.red = 0;
                if(this.green===undefined) this.green = 0;
                if(this.blue===undefined) this.blue = 0;
                if(this.hue===undefined) this.hue = 0;
                if(this.saturation===undefined) this.saturation = 0;
                if(this.lightness===undefined) this.lightness = 0;
                if(this.alpha===undefined) this.alpha = 0;
                if(this.hex===undefined) this.hex = null;
                if(this.colorName===undefined) this.colorName = null;
                if(this.colorType===undefined) this.colorType = null;
                if(this.gradient===undefined) this.gradient = null;
                (() => {
                    this.green = green;
                    this.red = red;
                    this.blue = blue;
                    this.colorType = splashjs.utils.ColorType.RGB;
                })();
            } else if(((typeof red === 'number') || red === null) && ((typeof green === 'number') || green === null) && ((typeof blue === 'number') || blue === null) && alpha === undefined) {
                let __args = arguments;
                let hue : any = __args[0];
                let saturation : any = __args[1];
                let lightness : any = __args[2];
                if(this.red===undefined) this.red = 0;
                if(this.green===undefined) this.green = 0;
                if(this.blue===undefined) this.blue = 0;
                if(this.hue===undefined) this.hue = 0;
                if(this.saturation===undefined) this.saturation = 0;
                if(this.lightness===undefined) this.lightness = 0;
                if(this.alpha===undefined) this.alpha = 0;
                if(this.hex===undefined) this.hex = null;
                if(this.colorName===undefined) this.colorName = null;
                if(this.colorType===undefined) this.colorType = null;
                if(this.gradient===undefined) this.gradient = null;
                if(this.red===undefined) this.red = 0;
                if(this.green===undefined) this.green = 0;
                if(this.blue===undefined) this.blue = 0;
                if(this.hue===undefined) this.hue = 0;
                if(this.saturation===undefined) this.saturation = 0;
                if(this.lightness===undefined) this.lightness = 0;
                if(this.alpha===undefined) this.alpha = 0;
                if(this.hex===undefined) this.hex = null;
                if(this.colorName===undefined) this.colorName = null;
                if(this.colorType===undefined) this.colorType = null;
                if(this.gradient===undefined) this.gradient = null;
                (() => {
                    this.hue = hue;
                    this.saturation = saturation;
                    this.lightness = lightness;
                    this.colorType = splashjs.utils.ColorType.HSL;
                })();
            } else if(((red != null && (red["__interfaces"] != null && red["__interfaces"].indexOf("splashjs.utils.iface.IGradient") >= 0 || red.constructor != null && red.constructor["__interfaces"] != null && red.constructor["__interfaces"].indexOf("splashjs.utils.iface.IGradient") >= 0)) || red === null) && green === undefined && blue === undefined && alpha === undefined) {
                let __args = arguments;
                let gradient : any = __args[0];
                if(this.red===undefined) this.red = 0;
                if(this.green===undefined) this.green = 0;
                if(this.blue===undefined) this.blue = 0;
                if(this.hue===undefined) this.hue = 0;
                if(this.saturation===undefined) this.saturation = 0;
                if(this.lightness===undefined) this.lightness = 0;
                if(this.alpha===undefined) this.alpha = 0;
                if(this.hex===undefined) this.hex = null;
                if(this.colorName===undefined) this.colorName = null;
                if(this.colorType===undefined) this.colorType = null;
                if(this.gradient===undefined) this.gradient = null;
                if(this.red===undefined) this.red = 0;
                if(this.green===undefined) this.green = 0;
                if(this.blue===undefined) this.blue = 0;
                if(this.hue===undefined) this.hue = 0;
                if(this.saturation===undefined) this.saturation = 0;
                if(this.lightness===undefined) this.lightness = 0;
                if(this.alpha===undefined) this.alpha = 0;
                if(this.hex===undefined) this.hex = null;
                if(this.colorName===undefined) this.colorName = null;
                if(this.colorType===undefined) this.colorType = null;
                if(this.gradient===undefined) this.gradient = null;
                (() => {
                    this.gradient = gradient;
                    this.colorType = splashjs.utils.ColorType.GRADIENT;
                })();
            } else if(((typeof red === 'string') || red === null) && green === undefined && blue === undefined && alpha === undefined) {
                let __args = arguments;
                let colorName : any = __args[0];
                if(this.red===undefined) this.red = 0;
                if(this.green===undefined) this.green = 0;
                if(this.blue===undefined) this.blue = 0;
                if(this.hue===undefined) this.hue = 0;
                if(this.saturation===undefined) this.saturation = 0;
                if(this.lightness===undefined) this.lightness = 0;
                if(this.alpha===undefined) this.alpha = 0;
                if(this.hex===undefined) this.hex = null;
                if(this.colorName===undefined) this.colorName = null;
                if(this.colorType===undefined) this.colorType = null;
                if(this.gradient===undefined) this.gradient = null;
                if(this.red===undefined) this.red = 0;
                if(this.green===undefined) this.green = 0;
                if(this.blue===undefined) this.blue = 0;
                if(this.hue===undefined) this.hue = 0;
                if(this.saturation===undefined) this.saturation = 0;
                if(this.lightness===undefined) this.lightness = 0;
                if(this.alpha===undefined) this.alpha = 0;
                if(this.hex===undefined) this.hex = null;
                if(this.colorName===undefined) this.colorName = null;
                if(this.colorType===undefined) this.colorType = null;
                if(this.gradient===undefined) this.gradient = null;
                (() => {
                    if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(colorName.charAt(0)) == '#'.charCodeAt(0)) {
                        this.hex = colorName;
                        this.colorType = splashjs.utils.ColorType.HEX;
                    } else {
                        this.colorName = colorName;
                        this.colorType = splashjs.utils.ColorType.NAME;
                    }
                })();
            } else if(red === undefined && green === undefined && blue === undefined && alpha === undefined) {
                let __args = arguments;
                if(this.red===undefined) this.red = 0;
                if(this.green===undefined) this.green = 0;
                if(this.blue===undefined) this.blue = 0;
                if(this.hue===undefined) this.hue = 0;
                if(this.saturation===undefined) this.saturation = 0;
                if(this.lightness===undefined) this.lightness = 0;
                if(this.alpha===undefined) this.alpha = 0;
                if(this.hex===undefined) this.hex = null;
                if(this.colorName===undefined) this.colorName = null;
                if(this.colorType===undefined) this.colorType = null;
                if(this.gradient===undefined) this.gradient = null;
                if(this.red===undefined) this.red = 0;
                if(this.green===undefined) this.green = 0;
                if(this.blue===undefined) this.blue = 0;
                if(this.hue===undefined) this.hue = 0;
                if(this.saturation===undefined) this.saturation = 0;
                if(this.lightness===undefined) this.lightness = 0;
                if(this.alpha===undefined) this.alpha = 0;
                if(this.hex===undefined) this.hex = null;
                if(this.colorName===undefined) this.colorName = null;
                if(this.colorType===undefined) this.colorType = null;
                if(this.gradient===undefined) this.gradient = null;
            } else throw new Error('invalid overload');
        }

        public static createRGB(red : number, green : number, blue : number) : Color {
            return new Color(red, green, blue);
        }

        public static createRGBA(red : number, green : number, blue : number, alpha : number) : Color {
            return new Color(red, green, blue, alpha);
        }

        public static createHEX(hex : string) : Color {
            return new Color(hex);
        }

        public static createHSL(hue : number, saturation : number, lightness : number) : Color {
            return new Color(hue, saturation, lightness);
        }

        public static createHSLA(hue : number, saturation : number, lightness : number, alpha : number) : Color {
            return new Color(hue, saturation, lightness, alpha);
        }

        public getColorName() : string {
            return this.colorName;
        }

        public getColorType() : string {
            return this.colorType;
        }

        public getRed() : number {
            return this.red;
        }

        public getGreen() : number {
            return this.green;
        }

        public getBlue() : number {
            return this.blue;
        }

        public getHue() : number {
            return this.hue;
        }

        public getSaturation() : number {
            return this.saturation;
        }

        public getLightness() : number {
            return this.lightness;
        }

        public getAlpha() : number {
            return this.alpha;
        }

        public getHEX() : string {
            return this.hex;
        }

        public getGradient() : splashjs.utils.iface.IGradient {
            return this.gradient;
        }
    }
    Color["__class"] = "splashjs.utils.Color";
    Color["__interfaces"] = ["splashjs.utils.iface.IColor"];


}
namespace splashjs.utils {
    export class LinearGradient extends splashjs.utils.Gradient implements splashjs.utils.iface.ILinearGradient {
        /*private*/ gradientDirection : string = splashjs.utils.GradientDirection.TOP_TO_BOTTOM;

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


}
namespace splashjs.utils {
    export class RadialGradient extends splashjs.utils.Gradient implements splashjs.utils.iface.IRadialGradient {
        /*private*/ gradientShape : string = splashjs.utils.GradientShape.ELLIPSE;

        /*private*/ gradientSize : string;

        public setGradientShape(gradientShape : string) {
            this.gradientShape = gradientShape;
        }

        public getGradientShape() : string {
            return this.gradientShape;
        }

        public setGradientSize(gradientSize : string) {
            this.gradientSize = gradientSize;
        }

        public getGradientSize() : string {
            return this.gradientSize;
        }

        constructor() {
            super();
            if(this.gradientSize===undefined) this.gradientSize = null;
        }
    }
    RadialGradient["__class"] = "splashjs.utils.RadialGradient";
    RadialGradient["__interfaces"] = ["splashjs.utils.iface.IGradient","splashjs.utils.iface.IRadialGradient"];


}
namespace java.util {
    export class Timer {
        static nextSerialNumber : number = 0;

        /*private*/ name : string;

        timeouts : Array<java.util.TimerTask> = <any>(new Array<any>());

        intervals : Array<java.util.TimerTask> = <any>(new Array<any>());

        public constructor(name? : any, daemon? : any) {
            if(((typeof name === 'string') || name === null) && ((typeof daemon === 'boolean') || daemon === null)) {
                let __args = arguments;
                if(this.name===undefined) this.name = null;
                this.timeouts = <any>(new Array<any>());
                this.intervals = <any>(new Array<any>());
                if(this.name===undefined) this.name = null;
                (() => {
                    this.name = name;
                })();
            } else if(((typeof name === 'string') || name === null) && daemon === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let daemon : any = true;
                    if(this.name===undefined) this.name = null;
                    this.timeouts = <any>(new Array<any>());
                    this.intervals = <any>(new Array<any>());
                    if(this.name===undefined) this.name = null;
                    (() => {
                        this.name = name;
                    })();
                }
            } else if(((typeof name === 'boolean') || name === null) && daemon === undefined) {
                let __args = arguments;
                let daemon : any = __args[0];
                {
                    let __args = arguments;
                    {
                        let __args = arguments;
                        let name : any = "Timer-" + ++Timer.nextSerialNumber;
                        let daemon : any = true;
                        if(this.name===undefined) this.name = null;
                        this.timeouts = <any>(new Array<any>());
                        this.intervals = <any>(new Array<any>());
                        if(this.name===undefined) this.name = null;
                        (() => {
                            this.name = name;
                        })();
                    }
                }
            } else if(name === undefined && daemon === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let name : any = "Timer-" + ++Timer.nextSerialNumber;
                    let daemon : any = true;
                    if(this.name===undefined) this.name = null;
                    this.timeouts = <any>(new Array<any>());
                    this.intervals = <any>(new Array<any>());
                    if(this.name===undefined) this.name = null;
                    (() => {
                        this.name = name;
                    })();
                }
            } else throw new Error('invalid overload');
        }

        public schedule$java_util_TimerTask$long(task : java.util.TimerTask, delay : number) {
            if(delay < 0) {
                throw Object.defineProperty(new Error("Negative delay."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            } else {
                this.schedule$java_util_TimerTask$java_util_Date(task, new Date(/* currentTimeMillis */Date.now() + delay));
            }
        }

        public schedule$java_util_TimerTask$java_util_Date(task : java.util.TimerTask, time : Date) {
            task.nextExecutionTime = time.getTime();
            task.handle = (<number>window.setTimeout((() => {
                if(task.state !== java.util.TimerTask.CANCELLED) {
                    task.run();
                    task.state = java.util.TimerTask.EXECUTED;
                }
                this.timeouts.splice(this.timeouts.indexOf(task), 1);
            }), time.getTime() - /* currentTimeMillis */Date.now())|0);
            this.timeouts.push(task);
            task.state = java.util.TimerTask.SCHEDULED;
        }

        public schedule$java_util_TimerTask$long$long(task : java.util.TimerTask, delay : number, period : number) {
            if(delay < 0) {
                throw Object.defineProperty(new Error("Negative delay."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            } else {
                this.schedule$java_util_TimerTask$java_util_Date$long(task, new Date(/* currentTimeMillis */Date.now() + delay), period);
            }
        }

        public schedule$java_util_TimerTask$java_util_Date$long(task : java.util.TimerTask, time : Date, period : number) {
            if(period <= 0) {
                throw Object.defineProperty(new Error("Non-positive period."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            } else {
                task.period = period;
                task.nextExecutionTime = time.getTime();
                task.handle = (<number>window.setTimeout((() => {
                    if(task.state !== java.util.TimerTask.CANCELLED) {
                        task.run();
                        this.schedule$java_util_TimerTask$long$long(task, period, period);
                    } else {
                        this.timeouts.splice(this.timeouts.indexOf(task), 1);
                    }
                }), time.getTime() - /* currentTimeMillis */Date.now())|0);
                this.timeouts.push(task);
                task.state = java.util.TimerTask.SCHEDULED;
            }
        }

        public schedule(task? : any, time? : any, period? : any) : any {
            if(((task != null && task instanceof <any>java.util.TimerTask) || task === null) && ((time != null && time instanceof <any>Date) || time === null) && ((typeof period === 'number') || period === null)) {
                return <any>this.schedule$java_util_TimerTask$java_util_Date$long(task, time, period);
            } else if(((task != null && task instanceof <any>java.util.TimerTask) || task === null) && ((typeof time === 'number') || time === null) && ((typeof period === 'number') || period === null)) {
                return <any>this.schedule$java_util_TimerTask$long$long(task, time, period);
            } else if(((task != null && task instanceof <any>java.util.TimerTask) || task === null) && ((time != null && time instanceof <any>Date) || time === null) && period === undefined) {
                return <any>this.schedule$java_util_TimerTask$java_util_Date(task, time);
            } else if(((task != null && task instanceof <any>java.util.TimerTask) || task === null) && ((typeof time === 'number') || time === null) && period === undefined) {
                return <any>this.schedule$java_util_TimerTask$long(task, time);
            } else throw new Error('invalid overload');
        }

        public scheduleAtFixedRate$java_util_TimerTask$long$long(task : java.util.TimerTask, delay : number, period : number) {
            if(delay < 0) {
                throw Object.defineProperty(new Error("Negative delay."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            } else {
                this.scheduleAtFixedRate$java_util_TimerTask$java_util_Date$long(task, new Date(/* currentTimeMillis */Date.now() + delay), period);
            }
        }

        public scheduleAtFixedRate$java_util_TimerTask$java_util_Date$long(task : java.util.TimerTask, time : Date, period : number) {
            if(period <= 0) {
                throw Object.defineProperty(new Error("Non-positive period."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            } else {
                task.period = period;
                task.nextExecutionTime = time.getTime();
                let start : java.util.TimerTask = new Timer.Timer$0(this, task);
                this.schedule$java_util_TimerTask$java_util_Date(start, time);
                task.handle = start.handle;
            }
        }

        public scheduleAtFixedRate(task? : any, time? : any, period? : any) : any {
            if(((task != null && task instanceof <any>java.util.TimerTask) || task === null) && ((time != null && time instanceof <any>Date) || time === null) && ((typeof period === 'number') || period === null)) {
                return <any>this.scheduleAtFixedRate$java_util_TimerTask$java_util_Date$long(task, time, period);
            } else if(((task != null && task instanceof <any>java.util.TimerTask) || task === null) && ((typeof time === 'number') || time === null) && ((typeof period === 'number') || period === null)) {
                return <any>this.scheduleAtFixedRate$java_util_TimerTask$long$long(task, time, period);
            } else throw new Error('invalid overload');
        }

        public cancel() {
            for(let index126=0; index126 < this.timeouts.length; index126++) {
                let task = this.timeouts[index126];
                {
                    clearTimeout(task.handle);
                }
            }
            for(let index127=0; index127 < this.intervals.length; index127++) {
                let task = this.intervals[index127];
                {
                    clearInterval(task.handle);
                }
            }
            this.intervals = <any>(new Array<any>());
            this.timeouts = <any>(new Array<any>());
        }

        public purge() : number {
            let newTimeouts : Array<java.util.TimerTask> = this.timeouts.filter((timerTask) => timerTask.handle !== java.util.TimerTask.EXECUTED && timerTask.handle !== java.util.TimerTask.CANCELLED);
            let newIntervals : Array<java.util.TimerTask> = this.intervals.filter((timerTask) => timerTask.handle !== java.util.TimerTask.EXECUTED && timerTask.handle !== java.util.TimerTask.CANCELLED);
            let purged : number = this.timeouts.length - newTimeouts.length + this.intervals.length - newIntervals.length;
            this.timeouts = newTimeouts;
            this.intervals = newIntervals;
            return purged;
        }
    }
    Timer["__class"] = "java.util.Timer";


    export namespace Timer {

        export class Timer$0 extends java.util.TimerTask {
            public __parent: any;
            /**
             * 
             */
            public run() {
                if(this.task.state !== java.util.TimerTask.CANCELLED) {
                    this.task.nextExecutionTime = /* currentTimeMillis */Date.now() + this.task.period;
                    this.task.handle = (<number>window.setInterval((() => {
                        if(this.task.state !== java.util.TimerTask.CANCELLED) {
                            this.task.nextExecutionTime = /* currentTimeMillis */Date.now() + this.task.period;
                            this.task.run();
                        } else {
                            clearInterval(this.task.handle);
                            this.__parent.intervals.splice(this.__parent.intervals.indexOf(this.task), 1);
                        }
                    }), this.task.period)|0);
                    this.__parent.intervals.push(this.task);
                    this.task.run();
                }
            }

            constructor(__parent: any, private task: any) {
                super();
                this.__parent = __parent;
            }
        }
        Timer$0["__interfaces"] = ["java.lang.Runnable"];


    }

}
namespace splashjs.lang {
    export class EOFError extends splashjs.lang.IOError implements splashjs.lang.iface.IEOFError {
        public constructor(message : string) {
            super(message);
            (<any>Object).setPrototypeOf(this, EOFError.prototype);
            this.name = /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor));
        }
    }
    EOFError["__class"] = "splashjs.lang.EOFError";
    EOFError["__interfaces"] = ["splashjs.lang.iface.IEOFError","splashjs.lang.iface.ISplashError","splashjs.lang.iface.IIOError","java.io.Serializable"];


}
namespace splashjs.lang {
    export class FileSystemError extends splashjs.lang.IOError {
        public constructor(message : string) {
            super(message);
            (<any>Object).setPrototypeOf(this, FileSystemError.prototype);
        }
    }
    FileSystemError["__class"] = "splashjs.lang.FileSystemError";
    FileSystemError["__interfaces"] = ["splashjs.lang.iface.ISplashError","splashjs.lang.iface.IIOError","java.io.Serializable"];


}
namespace splashjs.animation {
    export class Animation extends splashjs.events.EventDispatcher implements splashjs.animation.iface.IAnimation {
        constructor() {
            super();
        }
    }
    Animation["__class"] = "splashjs.animation.Animation";
    Animation["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.animation {
    export class MovieClipData extends splashjs.events.EventDispatcher implements splashjs.animation.iface.IMovieClipData {
        /*private*/ spriteSheet : splashjs.animation.iface.ISpriteSheet;

        /*private*/ label : string;

        /*private*/ frames : splashjs.animation.iface.IFrame[];

        public constructor(spriteSheet : splashjs.animation.iface.ISpriteSheet, label : string, frames : splashjs.animation.iface.IFrame[]) {
            super();
            if(this.spriteSheet===undefined) this.spriteSheet = null;
            if(this.label===undefined) this.label = null;
            if(this.frames===undefined) this.frames = null;
            this.spriteSheet = spriteSheet;
            this.label = label;
            this.frames = frames;
        }

        public getLabel() : string {
            return this.label;
        }

        public getFrames() : splashjs.animation.iface.IFrame[] {
            return this.frames;
        }

        public getSpriteSheet() : splashjs.animation.iface.ISpriteSheet {
            return this.spriteSheet;
        }
    }
    MovieClipData["__class"] = "splashjs.animation.MovieClipData";
    MovieClipData["__interfaces"] = ["splashjs.animation.iface.IMovieClipData","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.animation {
    export class SpriteSheet extends splashjs.events.EventDispatcher implements splashjs.animation.iface.ISpriteSheet {
        /*private*/ imagePath : string;

        /*private*/ imageBase64 : string;

        /*private*/ resource : splashjs.utils.iface.IResource;

        /*private*/ movieClipsData : Array<splashjs.animation.iface.IMovieClipData>;

        /*private*/ spritesData : Array<splashjs.animation.iface.ISpriteData>;

        public constructor(imagePath? : any) {
            if(((typeof imagePath === 'string') || imagePath === null)) {
                let __args = arguments;
                super("spriteSheet");
                if(this.imagePath===undefined) this.imagePath = null;
                if(this.imageBase64===undefined) this.imageBase64 = null;
                if(this.resource===undefined) this.resource = null;
                this.movieClipsData = <any>([]);
                this.spritesData = <any>([]);
                if(this.imagePath===undefined) this.imagePath = null;
                if(this.imageBase64===undefined) this.imageBase64 = null;
                if(this.resource===undefined) this.resource = null;
                (() => {
                    this.imagePath = imagePath;
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(SpriteSheet, this));
                })();
            } else if(((imagePath != null && (imagePath["__interfaces"] != null && imagePath["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0 || imagePath.constructor != null && imagePath.constructor["__interfaces"] != null && imagePath.constructor["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0)) || imagePath === null)) {
                let __args = arguments;
                let resource : any = __args[0];
                super("spriteSheet");
                if(this.imagePath===undefined) this.imagePath = null;
                if(this.imageBase64===undefined) this.imageBase64 = null;
                if(this.resource===undefined) this.resource = null;
                this.movieClipsData = <any>([]);
                this.spritesData = <any>([]);
                if(this.imagePath===undefined) this.imagePath = null;
                if(this.imageBase64===undefined) this.imageBase64 = null;
                if(this.resource===undefined) this.resource = null;
                (() => {
                    this.resource = resource;
                    this.imagePath = resource.getResourcePath();
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(SpriteSheet, this));
                })();
            } else throw new Error('invalid overload');
        }

        public getImagePath() : string {
            return this.imagePath;
        }

        public getResource() : splashjs.utils.iface.IResource {
            return this.resource;
        }

        public setImageBase64(imageBase64 : string) {
            this.imageBase64 = imageBase64;
        }

        public getImageBase64() : string {
            return this.imageBase64;
        }

        public getWidth() : number {
            return (<splashjs.render.animation.iface.ISpriteSheetRenderer><any>super.getRenderer()).getWidth();
        }

        public getHeight() : number {
            return (<splashjs.render.animation.iface.ISpriteSheetRenderer><any>super.getRenderer()).getHeight();
        }

        public defineSprite(label : string, frame : splashjs.animation.iface.IFrame) {
            /* add */(this.spritesData.push(new splashjs.animation.SpriteData(this, label, frame))>0);
        }

        public defineMovieClip(label : string, frameWidth : number, frameHeight : number, ...frameIndices : number[]) {
            let frames : splashjs.animation.iface.IFrame[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(frameIndices.length);
            let frame : splashjs.animation.iface.IFrame = null;
            for(let i : number = 0; i < frameIndices.length; i++) {{
                frame = new splashjs.animation.Frame(frameWidth, frameHeight, frameIndices[i]);
                frames[i] = frame;
            };}
            /* add */(this.movieClipsData.push(new splashjs.animation.MovieClipData(this, label, frames))>0);
        }

        /*private*/ getSprite(name : string) : splashjs.display.iface.ISprite {
            return (<splashjs.render.animation.iface.ISpriteSheetRenderer><any>super.getRenderer()).getSprite(name);
        }

        public getMovieClip(name : string) : splashjs.display.iface.IMovieClip {
            return (<splashjs.render.animation.iface.ISpriteSheetRenderer><any>super.getRenderer()).getMovieClip(name);
        }

        public getSpriteDataByLabel(label : string) : splashjs.animation.iface.ISpriteData {
            let spriteData : splashjs.animation.iface.ISpriteData = null;
            for(let i : number = 0; i < /* size */(<number>this.spritesData.length); i++) {{
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(/* get */this.spritesData[i].getLabel(), label)) {
                    spriteData = /* get */this.spritesData[i];
                    break;
                }
            };}
            return spriteData;
        }

        public getMovieClipDataByLabel(label : string) : splashjs.animation.iface.IMovieClipData {
            let movieClipData : splashjs.animation.iface.IMovieClipData = null;
            for(let i : number = 0; i < /* size */(<number>this.movieClipsData.length); i++) {{
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(/* get */this.movieClipsData[i].getLabel(), label)) {
                    movieClipData = /* get */this.movieClipsData[i];
                    break;
                }
            };}
            return movieClipData;
        }

        public getAllAnimations() : Array<splashjs.animation.iface.IMovieClipData> {
            return this.movieClipsData;
        }
    }
    SpriteSheet["__class"] = "splashjs.animation.SpriteSheet";
    SpriteSheet["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.animation.iface.ISpriteSheet"];


}
namespace splashjs.application {
    export class Application extends splashjs.events.EventDispatcher implements splashjs.application.iface.IApplication {
        static application : splashjs.application.iface.IApplication = null;

        constructor() {
            super("browserApp");
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Application, this));
        }

        public static getApplicationInstance() : splashjs.application.iface.IApplication {
            if(Application.application == null) Application.application = new Application();
            return Application.application;
        }

        public isOnline() : boolean {
            return (<splashjs.render.application.iface.IApplicationRenderer><any>super.getRenderer()).isOnline();
        }
    }
    Application["__class"] = "splashjs.application.Application";
    Application["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.application.iface.IApplication"];


}
namespace splashjs.application {
    export class StageOwner extends splashjs.events.EventDispatcher implements splashjs.application.iface.IStageOwner {
        /*private*/ __splashjs_application_StageOwner_renderer : splashjs.render.iface.IRenderer;

        /*private*/ stage : splashjs.display.iface.IStage;

        width : number;

        height : number;

        public constructor(stageOwnerName : string, stage : splashjs.display.iface.IStage, width : number, height : number) {
            super(stageOwnerName);
            if(this.__splashjs_application_StageOwner_renderer===undefined) this.__splashjs_application_StageOwner_renderer = null;
            if(this.stage===undefined) this.stage = null;
            if(this.width===undefined) this.width = 0;
            if(this.height===undefined) this.height = 0;
            this.stage = stage;
            this.width = width;
            this.height = height;
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(StageOwner, this));
        }

        public getStage() : splashjs.display.iface.IStage {
            return this.stage;
        }

        public setWidth(width : number) {
            this.width = width;
        }

        public getWidth() : number {
            return this.width;
        }

        public setHeight(height : number) {
            this.height = height;
        }

        public getHeight() : number {
            return this.height;
        }
    }
    StageOwner["__class"] = "splashjs.application.StageOwner";
    StageOwner["__interfaces"] = ["splashjs.application.iface.IStageOwner","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.display {
    export class BitmapData extends splashjs.events.EventDispatcher implements splashjs.display.iface.IBitmapData {
        /*private*/ bitmapDataWidth : number;

        /*private*/ bitmapDataHeight : number;

        public constructor(bitmapDataWidth : number, bitmapDataHeight : number) {
            super();
            if(this.bitmapDataWidth===undefined) this.bitmapDataWidth = 0;
            if(this.bitmapDataHeight===undefined) this.bitmapDataHeight = 0;
            this.bitmapDataWidth = bitmapDataWidth;
            this.bitmapDataHeight = bitmapDataHeight;
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(BitmapData, this));
        }

        public getBitmapDataWidth() : number {
            return this.bitmapDataWidth;
        }

        public getBitmapDataHeight() : number {
            return this.bitmapDataHeight;
        }

        public draw(bitmapDrawable : splashjs.display.iface.IBitmapDrawable) {
            (<splashjs.render.display.iface.IBitmapDataRenderer><any>super.getRenderer()).draw(bitmapDrawable);
        }
    }
    BitmapData["__class"] = "splashjs.display.BitmapData";
    BitmapData["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.display.iface.IBitmapData"];


}
namespace splashjs.display {
    export abstract class DisplayObject extends splashjs.events.EventDispatcher implements splashjs.display.iface.IDisplayObject, splashjs.display.iface.IBitmapDrawable {
        /*private*/ x : number;

        /*private*/ y : number;

        width : number;

        height : number;

        /*private*/ regX : number;

        /*private*/ regY : number;

        scaleX : number;

        scaleY : number;

        /*private*/ rotation : number;

        /*private*/ visible : boolean;

        /*private*/ alpha : number;

        /*private*/ name : string;

        parent : splashjs.display.iface.IDisplayObjectContainer;

        /*private*/ mouseX : number;

        /*private*/ mouseY : number;

        /*private*/ mouseVisible : boolean;

        /*private*/ mouseCursor : splashjs.ui.iface.IMouseCursor;

        originalWidth : number;

        originalHeight : number;

        /*private*/ filters : Array<splashjs.filters.iface.IFilter>;

        public constructor(id? : any) {
            if(((typeof id === 'string') || id === null)) {
                let __args = arguments;
                super(id);
                if(this.x===undefined) this.x = 0;
                if(this.y===undefined) this.y = 0;
                if(this.width===undefined) this.width = 0;
                if(this.height===undefined) this.height = 0;
                if(this.regX===undefined) this.regX = null;
                if(this.regY===undefined) this.regY = null;
                if(this.scaleX===undefined) this.scaleX = 0;
                if(this.scaleY===undefined) this.scaleY = 0;
                if(this.rotation===undefined) this.rotation = 0;
                if(this.visible===undefined) this.visible = null;
                if(this.alpha===undefined) this.alpha = null;
                if(this.name===undefined) this.name = null;
                if(this.parent===undefined) this.parent = null;
                if(this.mouseX===undefined) this.mouseX = null;
                if(this.mouseY===undefined) this.mouseY = null;
                if(this.mouseVisible===undefined) this.mouseVisible = false;
                if(this.mouseCursor===undefined) this.mouseCursor = null;
                if(this.originalWidth===undefined) this.originalWidth = 0;
                if(this.originalHeight===undefined) this.originalHeight = 0;
                if(this.filters===undefined) this.filters = null;
                if(this.x===undefined) this.x = 0;
                if(this.y===undefined) this.y = 0;
                if(this.width===undefined) this.width = 0;
                if(this.height===undefined) this.height = 0;
                if(this.regX===undefined) this.regX = null;
                if(this.regY===undefined) this.regY = null;
                if(this.scaleX===undefined) this.scaleX = 0;
                if(this.scaleY===undefined) this.scaleY = 0;
                if(this.rotation===undefined) this.rotation = 0;
                if(this.visible===undefined) this.visible = null;
                if(this.alpha===undefined) this.alpha = null;
                if(this.name===undefined) this.name = null;
                if(this.parent===undefined) this.parent = null;
                if(this.mouseX===undefined) this.mouseX = null;
                if(this.mouseY===undefined) this.mouseY = null;
                if(this.mouseVisible===undefined) this.mouseVisible = false;
                if(this.mouseCursor===undefined) this.mouseCursor = null;
                if(this.originalWidth===undefined) this.originalWidth = 0;
                if(this.originalHeight===undefined) this.originalHeight = 0;
                if(this.filters===undefined) this.filters = null;
                (() => {
                    this.x = 0;
                    this.y = 0;
                    this.width = 0;
                    this.height = 0;
                    this.regX = 0;
                    this.regY = 0;
                    this.scaleX = 1.0;
                    this.scaleY = 1.0;
                    this.rotation = 0.0;
                    this.visible = true;
                    this.alpha = 1.0;
                    this.name = null;
                    this.parent = null;
                    this.mouseX = null;
                    this.mouseY = null;
                    this.mouseVisible = true;
                    this.mouseCursor = splashjs.ui.MouseCursor.AUTO_$LI$();
                    this.filters = <any>([]);
                })();
            } else if(id === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let id : any = "splashjs";
                    super(id);
                    if(this.x===undefined) this.x = 0;
                    if(this.y===undefined) this.y = 0;
                    if(this.width===undefined) this.width = 0;
                    if(this.height===undefined) this.height = 0;
                    if(this.regX===undefined) this.regX = null;
                    if(this.regY===undefined) this.regY = null;
                    if(this.scaleX===undefined) this.scaleX = 0;
                    if(this.scaleY===undefined) this.scaleY = 0;
                    if(this.rotation===undefined) this.rotation = 0;
                    if(this.visible===undefined) this.visible = null;
                    if(this.alpha===undefined) this.alpha = null;
                    if(this.name===undefined) this.name = null;
                    if(this.parent===undefined) this.parent = null;
                    if(this.mouseX===undefined) this.mouseX = null;
                    if(this.mouseY===undefined) this.mouseY = null;
                    if(this.mouseVisible===undefined) this.mouseVisible = false;
                    if(this.mouseCursor===undefined) this.mouseCursor = null;
                    if(this.originalWidth===undefined) this.originalWidth = 0;
                    if(this.originalHeight===undefined) this.originalHeight = 0;
                    if(this.filters===undefined) this.filters = null;
                    if(this.x===undefined) this.x = 0;
                    if(this.y===undefined) this.y = 0;
                    if(this.width===undefined) this.width = 0;
                    if(this.height===undefined) this.height = 0;
                    if(this.regX===undefined) this.regX = null;
                    if(this.regY===undefined) this.regY = null;
                    if(this.scaleX===undefined) this.scaleX = 0;
                    if(this.scaleY===undefined) this.scaleY = 0;
                    if(this.rotation===undefined) this.rotation = 0;
                    if(this.visible===undefined) this.visible = null;
                    if(this.alpha===undefined) this.alpha = null;
                    if(this.name===undefined) this.name = null;
                    if(this.parent===undefined) this.parent = null;
                    if(this.mouseX===undefined) this.mouseX = null;
                    if(this.mouseY===undefined) this.mouseY = null;
                    if(this.mouseVisible===undefined) this.mouseVisible = false;
                    if(this.mouseCursor===undefined) this.mouseCursor = null;
                    if(this.originalWidth===undefined) this.originalWidth = 0;
                    if(this.originalHeight===undefined) this.originalHeight = 0;
                    if(this.filters===undefined) this.filters = null;
                    (() => {
                        this.x = 0;
                        this.y = 0;
                        this.width = 0;
                        this.height = 0;
                        this.regX = 0;
                        this.regY = 0;
                        this.scaleX = 1.0;
                        this.scaleY = 1.0;
                        this.rotation = 0.0;
                        this.visible = true;
                        this.alpha = 1.0;
                        this.name = null;
                        this.parent = null;
                        this.mouseX = null;
                        this.mouseY = null;
                        this.mouseVisible = true;
                        this.mouseCursor = splashjs.ui.MouseCursor.AUTO_$LI$();
                        this.filters = <any>([]);
                    })();
                }
            } else throw new Error('invalid overload');
        }

        public getX() : number {
            return this.x;
        }

        public setX(x : number) {
            this.x = x;
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setX();
        }

        public getY() : number {
            return this.y;
        }

        public setY(y : number) {
            this.y = y;
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setY();
        }

        public setXY(x : number, y : number) {
            this.setX(x);
            this.setY(y);
        }

        public getWidth() : number {
            return this.width;
        }

        public setWidth(width : number) {
            this.width = width;
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setWidth();
        }

        public getHeight() : number {
            return this.height;
        }

        public setHeight(height : number) {
            this.height = height;
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setHeight();
        }

        public setSize(width : number, height : number) {
            this.setWidth(width);
            this.setHeight(height);
        }

        public getRegX() : number {
            return this.regX;
        }

        public setRegX(regX : number) {
            this.regX = regX;
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setRegX();
        }

        public getRegY() : number {
            return this.regY;
        }

        public setRegY(regY : number) {
            this.regY = regY;
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setRegX();
        }

        public setRegXY(regX : number, regY : number) {
            this.setRegX(regX);
            this.setRegY(regY);
        }

        public getScaleX() : number {
            return this.scaleX;
        }

        public setScaleX(scaleX : number) {
            this.scaleX = scaleX;
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setScaleX();
        }

        public getScaleY() : number {
            return this.scaleY;
        }

        public setScaleY(scaleY : number) {
            this.scaleY = scaleY;
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setScaleY();
        }

        public setScaleXY(scaleX : number, scaleY : number) {
            this.setScaleX(scaleX);
            this.setScaleY(scaleY);
        }

        public getRotation() : number {
            return this.rotation;
        }

        public setRotation(rotation : number) {
            this.rotation = rotation;
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setRotation();
        }

        public getVisible() : boolean {
            return this.visible;
        }

        public setVisible(visible : boolean) {
            this.visible = visible;
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setVisible();
        }

        public getAlpha() : number {
            return this.alpha;
        }

        public setAlpha(alpha : number) {
            this.alpha = alpha;
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setAlpha();
        }

        public getName() : string {
            return this.name;
        }

        public setName(name : string) {
            this.name = name;
        }

        public getParent() : splashjs.display.iface.IDisplayObjectContainer {
            return this.parent;
        }

        public getMouseX() : number {
            return this.mouseX;
        }

        public getMouseY() : number {
            return this.mouseY;
        }

        public setMouseVisible(mouseVisible : boolean) {
            this.mouseVisible = mouseVisible;
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setMouseVisible();
        }

        public getMouseVisible() : boolean {
            return this.mouseVisible;
        }

        public setMouseCursor(mouseCursor : splashjs.ui.iface.IMouseCursor) {
            this.mouseCursor = mouseCursor;
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setMouseCursor();
        }

        public getMouseCursor() : splashjs.ui.iface.IMouseCursor {
            return this.mouseCursor;
        }

        public addFilter(filter : splashjs.filters.iface.IFilter) {
            /* add */(this.filters.push(filter)>0);
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).addFilter();
        }

        public removeFilter(filter : splashjs.filters.iface.IFilter) {
            /* remove */(a => { let index = a.indexOf(filter); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.filters);
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).removeFilter();
        }

        public removeAllFilters() {
            /* clear */(this.filters.length = 0);
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).removeFilter();
        }

        public hasFilter(filter : splashjs.filters.iface.IFilter) : boolean {
            return /* contains */(this.filters.indexOf(<any>(filter)) >= 0);
        }

        public getAllFilters() : Array<splashjs.filters.iface.IFilter> {
            return this.filters;
        }

        public localToGlobal(localPoint : splashjs.geom.iface.IPoint) : splashjs.geom.iface.IPoint {
            let globalPoint : splashjs.geom.iface.IPoint = new splashjs.geom.Point();
            let x : number = this.x + localPoint.getX();
            let y : number = this.y + localPoint.getY();
            globalPoint.setX(x);
            globalPoint.setY(y);
            return globalPoint;
        }

        public globalToLocal(globalPoint : splashjs.geom.iface.IPoint) : splashjs.geom.iface.IPoint {
            let localPoint : splashjs.geom.iface.IPoint = new splashjs.geom.Point();
            localPoint.setX(globalPoint.getX() - this.x);
            localPoint.setY(globalPoint.getY() - this.y);
            return localPoint;
        }

        public hitTestObject(displayObject : splashjs.display.iface.IDisplayObject) : boolean {
            let hit : boolean = false;
            let dox1 : number = (<number>(displayObject.getX() * displayObject.getStage().getScaleX())|0);
            let doy1 : number = (<number>(displayObject.getY() * displayObject.getStage().getScaleY())|0);
            let dox2 : number = (<number>(displayObject.getX() * displayObject.getStage().getScaleX() + displayObject.getWidth() * displayObject.getStage().getScaleX())|0);
            let doy2 : number = (<number>(displayObject.getY() * displayObject.getStage().getScaleY() + displayObject.getHeight() * displayObject.getStage().getScaleY())|0);
            let myx1 : number = (<number>(this.getX() * this.getStage().getScaleX())|0);
            let myy1 : number = (<number>(this.getY() * this.getStage().getScaleY())|0);
            let myx2 : number = (<number>(this.getX() * this.getStage().getScaleX() + this.getWidth() * this.getStage().getScaleX())|0);
            let myy2 : number = (<number>(this.getY() * this.getStage().getScaleY() + this.getHeight() * this.getStage().getScaleY())|0);
            let displayObjectGlobalStartPoint : splashjs.geom.iface.IPoint = displayObject.localToGlobal(new splashjs.geom.Point(dox1, doy1));
            let displayObjectGlobalEndPoint : splashjs.geom.iface.IPoint = displayObject.localToGlobal(new splashjs.geom.Point(dox2, doy2));
            let myGlobalStartPoint : splashjs.geom.iface.IPoint = this.localToGlobal(new splashjs.geom.Point(myx1, myy1));
            let myGlobalEndPoint : splashjs.geom.iface.IPoint = this.localToGlobal(new splashjs.geom.Point(myx2, myy2));
            let displayObjectStartX : number = displayObjectGlobalStartPoint.getX();
            let displayObjectStartY : number = displayObjectGlobalStartPoint.getY();
            let displayObjectEndX : number = displayObjectGlobalEndPoint.getX();
            let displayObjectEndY : number = displayObjectGlobalEndPoint.getY();
            let myStartX : number = myGlobalStartPoint.getX();
            let myStartY : number = myGlobalStartPoint.getY();
            let myEndX : number = myGlobalEndPoint.getX();
            let myEndY : number = myGlobalEndPoint.getY();
            console.info("x1: " + displayObjectStartX + ", y1: " + displayObjectStartY);
            console.info("x2: " + displayObjectEndX + ", y2: " + displayObjectEndY);
            console.info("------------");
            console.info("x1: " + myStartX + ", y1: " + myStartY);
            console.info("x2: " + myEndX + ", y2: " + myEndY);
            if(myStartX >= displayObjectStartX && myStartX <= displayObjectEndX && myStartY >= displayObjectStartY && myStartY <= displayObjectEndY) hit = true; else if(myEndX >= displayObjectStartX && myEndX <= displayObjectEndX && myEndY >= displayObjectStartY && myEndY <= displayObjectEndY) hit = true;
            return hit;
        }

        public hitTestPoint(x : number, y : number) : boolean {
            let out : boolean = false;
            let localPoint : splashjs.geom.iface.IPoint = this.globalToLocal(new splashjs.geom.Point(x, y));
            let x1 : number = this.x - this.regX;
            let y1 : number = this.y - this.regY;
            let x2 : number = x1 + this.getWidth();
            let y2 : number = y1 + this.getHeight();
            console.info(localPoint.getX() + " " + y1 + "-" + x2 + " " + y2 + "-" + x + " " + y);
            if((x >= x1 && x <= x2) && (y >= y1 && y <= y2)) out = true;
            return out;
        }

        /**
         * 
         */
        public render() {
            super.render();
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setPosition("absolute");
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setDisplay("inline-blick");
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setMargin("0");
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setPadding("0");
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setID();
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setRegXY();
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setXY();
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setScaleXY();
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setRotation();
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).addFilter();
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setVisible();
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setAlpha();
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setMouseCursor();
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setMouseVisible();
        }

        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                this.stage = <splashjs.display.iface.IStage><any>event.getData();
                this.render();
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.REMOVED_FROM_STAGE)) {
                this.stage = null;
            }
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED)) {
                this.parent = <splashjs.display.iface.IDisplayObjectContainer><any>event.getData();
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.REMOVED)) {
                this.parent = null;
            }
            return super.dispatchEvent(event);
        }
    }
    DisplayObject["__class"] = "splashjs.display.DisplayObject";
    DisplayObject["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs {
    export class Global extends splashjs.events.EventDispatcher implements splashjs.iface.IGlobal {
        public static global : splashjs.iface.IGlobal; public static global_$LI$() : splashjs.iface.IGlobal { if(Global.global == null) Global.global = new Global(); return Global.global; };

        /*private*/ rendererCreator : splashjs.render.iface.IRendererCreator = new splashjs.render.RendererCreator();

        constructor() {
            super();
            super.setRenderer(this.getRendererCreator().createRenderer(Global, this));
        }

        public render$java_lang_Object$java_lang_Object$int$int(divID : any, jsClass : any, width : number, height : number) {
            (<splashjs.render.iface.IGlobalRenderer><any>super.getRenderer()).render(divID, jsClass, width, height);
        }

        public render(divID? : any, jsClass? : any, width? : any, height? : any) : any {
            if(((divID != null) || divID === null) && ((jsClass != null) || jsClass === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
                return <any>this.render$java_lang_Object$java_lang_Object$int$int(divID, jsClass, width, height);
            } else if(divID === undefined && jsClass === undefined && width === undefined && height === undefined) {
                super.render();
            } else throw new Error('invalid overload');
        }

        public getRendererCreator() : splashjs.render.iface.IRendererCreator {
            return this.rendererCreator;
        }
    }
    Global["__class"] = "splashjs.Global";
    Global["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.iface.IGlobal","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.media {
    export class Camera extends splashjs.events.EventDispatcher implements splashjs.media.iface.ICamera {
        public constructor() {
            super("camera");
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Camera, this));
        }

        public static getCamera() : splashjs.media.iface.ICamera {
            return new Camera();
        }

        public requestPermission() {
            (<splashjs.render.media.iface.ICameraRenderer><any>super.getRenderer()).requestPermission();
        }

        public static getNames() : Array<string> {
            return null;
        }
    }
    Camera["__class"] = "splashjs.media.Camera";
    Camera["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.media.iface.ICamera"];


}
namespace splashjs.net {
    export class FileReference extends splashjs.events.EventDispatcher implements splashjs.net.iface.IFileReference {
        /*private*/ creationDate : Date;

        /*private*/ creator : string;

        /*private*/ data : splashjs.utils.iface.IByteArray;

        /*private*/ extension : string;

        /*private*/ modificationDate : Date;

        /*private*/ name : string;

        /*private*/ permissionStatus : string;

        /*private*/ size : number = -1;

        /*private*/ type : string;

        public constructor(stage : splashjs.display.iface.IStage) {
            super("fileReference");
            if(this.creationDate===undefined) this.creationDate = null;
            if(this.creator===undefined) this.creator = null;
            if(this.data===undefined) this.data = null;
            if(this.extension===undefined) this.extension = null;
            if(this.modificationDate===undefined) this.modificationDate = null;
            if(this.name===undefined) this.name = null;
            if(this.permissionStatus===undefined) this.permissionStatus = null;
            if(this.type===undefined) this.type = null;
            this.stage = stage;
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(FileReference, this));
        }

        public getCreationDate() : Date {
            return this.creationDate;
        }

        public getCreator() : string {
            return this.creator;
        }

        public setData(data : splashjs.utils.iface.IByteArray) {
            this.data = data;
        }

        public getData() : splashjs.utils.iface.IByteArray {
            return this.data;
        }

        public setExtension(extension : string) {
            this.extension = extension;
        }

        public getExtension() : string {
            return this.extension;
        }

        public setModificationDate(modificationDate : Date) {
            this.modificationDate = modificationDate;
        }

        public getModificationDate() : Date {
            return this.modificationDate;
        }

        public getName() : string {
            return this.name;
        }

        public setName(name : string) {
            this.name = name;
        }

        public getPermissionStatus() : string {
            return this.permissionStatus;
        }

        public setSize(size : number) {
            this.size = size;
        }

        public getSize() : number {
            return this.size;
        }

        public setType(type : string) {
            this.type = type;
        }

        public getType() : string {
            return this.type;
        }

        public browse$() : boolean {
            let value : boolean = false;
            value = (<splashjs.render.net.iface.IFileReferenceRenderer><any>super.getRenderer()).browse();
            return value;
        }

        public browse$splashjs_net_iface_IFileFilter_A(typeFilters : splashjs.net.iface.IFileFilter[]) : boolean {
            let value : boolean = false;
            value = (<splashjs.render.net.iface.IFileReferenceRenderer><any>super.getRenderer())['browse$splashjs_net_iface_IFileFilter_A'](typeFilters);
            return value;
        }

        public browse(typeFilters? : any) : any {
            if(((typeFilters != null && typeFilters instanceof <any>Array && (typeFilters.length==0 || typeFilters[0] == null ||(typeFilters[0] != null && (typeFilters[0]["__interfaces"] != null && typeFilters[0]["__interfaces"].indexOf("splashjs.net.iface.IFileFilter") >= 0 || typeFilters[0].constructor != null && typeFilters[0].constructor["__interfaces"] != null && typeFilters[0].constructor["__interfaces"].indexOf("splashjs.net.iface.IFileFilter") >= 0)))) || typeFilters === null)) {
                return <any>this.browse$splashjs_net_iface_IFileFilter_A(typeFilters);
            } else if(typeFilters === undefined) {
                return <any>this.browse$();
            } else throw new Error('invalid overload');
        }

        public cancel() {
        }

        public download(urlRequest : splashjs.net.iface.IURLRequest, defaultFileName : string) {
            (<splashjs.render.net.iface.IFileReferenceRenderer><any>super.getRenderer()).download(urlRequest, defaultFileName);
        }

        public load() {
            (<splashjs.render.net.iface.IFileReferenceRenderer><any>super.getRenderer()).load();
        }

        public requestPermission() {
        }

        public save(data : any, defaultFileName : string) {
        }

        public upload(urlRequest : splashjs.net.iface.IURLRequest, uploadDataFieldName : string, testUpload : boolean) {
        }

        public uploadUnencoded(urlRequest : splashjs.net.iface.IURLRequest) {
        }
    }
    FileReference["__class"] = "splashjs.net.FileReference";
    FileReference["__interfaces"] = ["splashjs.net.iface.IFileReference","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.net {
    export class NetConnection extends splashjs.events.EventDispatcher implements splashjs.net.iface.INetConnection {
        constructor() {
            super();
        }
    }
    NetConnection["__class"] = "splashjs.net.NetConnection";
    NetConnection["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.net.iface.INetConnection","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.net {
    export class NetStream extends splashjs.events.EventDispatcher implements splashjs.net.iface.INetStream {
        /*private*/ netConnection : splashjs.net.iface.INetConnection;

        /*private*/ videoAttached : splashjs.media.iface.IVideo = null;

        public constructor(netConnection : splashjs.net.iface.INetConnection) {
            super();
            if(this.netConnection===undefined) this.netConnection = null;
            this.netConnection = netConnection;
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(NetStream, this));
        }

        public play(...params : string[]) {
            (o => o.play.apply(o, params))((<splashjs.render.net.iface.INetStreamRenderer><any>super.getRenderer()));
        }

        public setVideoAttached(videoAttached : splashjs.media.iface.IVideo) {
            this.videoAttached = videoAttached;
        }

        public getVideoAttached() : splashjs.media.iface.IVideo {
            return this.videoAttached;
        }
    }
    NetStream["__class"] = "splashjs.net.NetStream";
    NetStream["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.net.iface.INetStream"];


}
namespace splashjs.net {
    export class URLLoader extends splashjs.events.EventDispatcher implements splashjs.net.iface.IURLLoader {
        /*private*/ bytesLoaded : number;

        /*private*/ bytesTotal : number;

        /*private*/ data : any;

        /*private*/ dataFormat : string;

        /*private*/ urlRequest : splashjs.net.iface.IURLRequest;

        public constructor(urlRequest? : any) {
            if(((urlRequest != null && (urlRequest["__interfaces"] != null && urlRequest["__interfaces"].indexOf("splashjs.net.iface.IURLRequest") >= 0 || urlRequest.constructor != null && urlRequest.constructor["__interfaces"] != null && urlRequest.constructor["__interfaces"].indexOf("splashjs.net.iface.IURLRequest") >= 0)) || urlRequest === null)) {
                let __args = arguments;
                super();
                if(this.bytesLoaded===undefined) this.bytesLoaded = 0;
                if(this.bytesTotal===undefined) this.bytesTotal = 0;
                if(this.data===undefined) this.data = null;
                if(this.dataFormat===undefined) this.dataFormat = null;
                if(this.urlRequest===undefined) this.urlRequest = null;
                if(this.bytesLoaded===undefined) this.bytesLoaded = 0;
                if(this.bytesTotal===undefined) this.bytesTotal = 0;
                if(this.data===undefined) this.data = null;
                if(this.dataFormat===undefined) this.dataFormat = null;
                if(this.urlRequest===undefined) this.urlRequest = null;
                (() => {
                    this.urlRequest = urlRequest;
                    this.dataFormat = splashjs.net.URLLoaderDataFormat.TEXT;
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(URLLoader, this));
                })();
            } else if(urlRequest === undefined) {
                let __args = arguments;
                super();
                if(this.bytesLoaded===undefined) this.bytesLoaded = 0;
                if(this.bytesTotal===undefined) this.bytesTotal = 0;
                if(this.data===undefined) this.data = null;
                if(this.dataFormat===undefined) this.dataFormat = null;
                if(this.urlRequest===undefined) this.urlRequest = null;
                if(this.bytesLoaded===undefined) this.bytesLoaded = 0;
                if(this.bytesTotal===undefined) this.bytesTotal = 0;
                if(this.data===undefined) this.data = null;
                if(this.dataFormat===undefined) this.dataFormat = null;
                if(this.urlRequest===undefined) this.urlRequest = null;
                (() => {
                    this.dataFormat = splashjs.net.URLLoaderDataFormat.TEXT;
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(URLLoader, this));
                })();
            } else throw new Error('invalid overload');
        }

        /**
         * 
         */
        public close() {
            (<splashjs.render.net.iface.IURLLoaderRenderer><any>super.getRenderer()).close();
        }

        public load$splashjs_net_iface_IURLRequest(urlRequest : splashjs.net.iface.IURLRequest) {
            this.urlRequest = urlRequest;
            this.load();
        }

        /**
         * 
         * @param {*} urlRequest
         */
        public load(urlRequest? : any) : any {
            if(((urlRequest != null && (urlRequest["__interfaces"] != null && urlRequest["__interfaces"].indexOf("splashjs.net.iface.IURLRequest") >= 0 || urlRequest.constructor != null && urlRequest.constructor["__interfaces"] != null && urlRequest.constructor["__interfaces"].indexOf("splashjs.net.iface.IURLRequest") >= 0)) || urlRequest === null)) {
                return <any>this.load$splashjs_net_iface_IURLRequest(urlRequest);
            } else if(urlRequest === undefined) {
                return <any>this.load$();
            } else throw new Error('invalid overload');
        }

        public load$() {
            (<splashjs.render.net.iface.IURLLoaderRenderer><any>super.getRenderer()).load();
        }

        public getURLRequest() : splashjs.net.iface.IURLRequest {
            return this.urlRequest;
        }

        public setDataFormat(dataFormat : string) {
            this.dataFormat = dataFormat;
        }

        public getDataFormat() : string {
            return this.dataFormat;
        }

        /**
         * 
         * @return {number}
         */
        public getBytesTotal() : number {
            return (<splashjs.render.net.iface.IURLLoaderRenderer><any>super.getRenderer()).getBytesTotal();
        }

        /**
         * 
         * @return {number}
         */
        public getBytesLoaded() : number {
            return (<splashjs.render.net.iface.IURLLoaderRenderer><any>super.getRenderer()).getBytesLoaded();
        }

        /**
         * 
         * @return {*}
         */
        public getData() : any {
            return (<splashjs.render.net.iface.IURLLoaderRenderer><any>super.getRenderer()).getData();
        }
    }
    URLLoader["__class"] = "splashjs.net.URLLoader";
    URLLoader["__interfaces"] = ["splashjs.net.iface.IURLLoader","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.text {
    export class Font extends splashjs.events.EventDispatcher implements splashjs.text.iface.IFont {
        static fonts : Array<splashjs.text.iface.IFont>; public static fonts_$LI$() : Array<splashjs.text.iface.IFont> { if(Font.fonts == null) Font.fonts = <any>([]); return Font.fonts; };

        /*private*/ fontID : string;

        /*private*/ fontPath : splashjs.text.iface.IFontPath;

        public constructor(fontID : string, fontPath : splashjs.text.iface.IFontPath) {
            super("font");
            if(this.fontID===undefined) this.fontID = null;
            if(this.fontPath===undefined) this.fontPath = null;
            this.fontID = fontID;
            this.fontPath = fontPath;
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Font, this));
        }

        public getFontID() : string {
            return this.fontID;
        }

        public getFontPath() : splashjs.text.iface.IFontPath {
            return this.fontPath;
        }

        public load() {
            (<splashjs.render.text.iface.IFontRenderer><any>super.getRenderer()).load();
        }

        public static registerFont(font : splashjs.text.iface.IFont) {
            /* add */(Font.fonts_$LI$().push(font)>0);
        }

        public static getFontPathById(fontID : string) : splashjs.text.iface.IFontPath {
            let fontPath : splashjs.text.iface.IFontPath = null;
            let font : splashjs.text.iface.IFont;
            for(let i : number = 0; i < /* size */(<number>Font.fonts_$LI$().length); i++) {{
                font = /* get */Font.fonts_$LI$()[i];
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(font.getFontID(), fontID)) {
                    fontPath = font.getFontPath();
                    break;
                }
            };}
            return fontPath;
        }

        public static getFonts() : Array<splashjs.text.iface.IFont> {
            return Font.fonts_$LI$();
        }
    }
    Font["__class"] = "splashjs.text.Font";
    Font["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.text.iface.IFont"];


}
namespace splashjs.utils {
    export class ByteArray extends splashjs.events.EventDispatcher implements splashjs.utils.iface.IByteArray {
        public constructor() {
            super("byteArray");
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(ByteArray, this));
        }

        public getLength() : number {
            return (<splashjs.render.utils.iface.IByteArrayRenderer><any>super.getRenderer()).getLength();
        }

        public writeBytes(byteArray : splashjs.utils.iface.IByteArray, offset : number, length : number) {
            (<splashjs.render.utils.iface.IByteArrayRenderer><any>super.getRenderer()).writeBytes(byteArray, offset, length);
        }
    }
    ByteArray["__class"] = "splashjs.utils.ByteArray";
    ByteArray["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.utils.iface.IByteArray","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.utils.desktop {
    export class Timer extends splashjs.events.EventDispatcher {
        constructor() {
            super();
        }
    }
    Timer["__class"] = "splashjs.utils.desktop.Timer";
    Timer["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.utils {
    export class Resource extends splashjs.events.EventDispatcher implements splashjs.utils.iface.IResource {
        /*private*/ resourceName : string;

        /*private*/ resourcePath : string;

        /*private*/ resourceType : string;

        public constructor(resourceName : string, resourcePath : string, resourceType : string) {
            super();
            if(this.resourceName===undefined) this.resourceName = null;
            if(this.resourcePath===undefined) this.resourcePath = null;
            if(this.resourceType===undefined) this.resourceType = null;
            this.resourceName = resourceName;
            this.resourcePath = resourcePath;
            this.resourceType = resourceType;
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Resource, this));
        }

        public getResourcePath() : string {
            return this.resourcePath;
        }

        public getResourceName() : string {
            return this.resourceName;
        }

        public getResourceType() : string {
            return this.resourceType;
        }

        public getResourceBase64() : string {
            return (<splashjs.render.utils.iface.IResourceRenderer><any>super.getRenderer()).getResourceBase64();
        }
    }
    Resource["__class"] = "splashjs.utils.Resource";
    Resource["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.utils.iface.IResource"];


}
namespace splashjs.utils {
    export class ResourceLoader extends splashjs.events.EventDispatcher implements splashjs.utils.iface.IResourceLoader {
        /*private*/ resources : Array<splashjs.utils.iface.IResource> = <any>([]);

        public constructor() {
            super("resourceLoader");
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(ResourceLoader, this));
        }

        public addResource(resource : splashjs.utils.iface.IResource) {
            /* add */(this.resources.push(resource)>0);
        }

        public getResourceByName(resourceName : string) : splashjs.utils.iface.IResource {
            let rsrc : splashjs.utils.iface.IResource = null;
            for(let i : number = 0; i < /* size */(<number>this.resources.length); i++) {{
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(/* get */this.resources[i].getResourceName(),resourceName))) {
                    rsrc = /* get */this.resources[i];
                    break;
                }
            };}
            return rsrc;
        }

        public loadAll() {
            (<splashjs.render.utils.iface.IResourceLoaderRenderer><any>super.getRenderer()).loadAll(this.resources);
        }
    }
    ResourceLoader["__class"] = "splashjs.utils.ResourceLoader";
    ResourceLoader["__interfaces"] = ["splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.utils.iface.IResourceLoader"];


}
namespace splashjs.utils {
    export class Timer extends splashjs.events.EventDispatcher implements splashjs.utils.iface.ITimer {
        /*private*/ currentCount : number;

        /*private*/ delay : number;

        /*private*/ repeatCount : number;

        /*private*/ running : boolean;

        /*private*/ self : splashjs.utils.iface.ITimer;

        /*private*/ jTimer : java.util.Timer;

        public constructor(delay? : any, repeatCount? : any) {
            if(((typeof delay === 'number') || delay === null) && ((typeof repeatCount === 'number') || repeatCount === null)) {
                let __args = arguments;
                super("timer");
                this.currentCount = 0;
                this.delay = 0;
                this.repeatCount = 0;
                this.running = false;
                this.self = this;
                this.jTimer = new java.util.Timer();
                (() => {
                    this.delay = delay;
                    this.repeatCount = repeatCount;
                })();
            } else if(((typeof delay === 'number') || delay === null) && repeatCount === undefined) {
                let __args = arguments;
                super("timer");
                this.currentCount = 0;
                this.delay = 0;
                this.repeatCount = 0;
                this.running = false;
                this.self = this;
                this.jTimer = new java.util.Timer();
                (() => {
                    this.delay = delay;
                })();
            } else if(delay === undefined && repeatCount === undefined) {
                let __args = arguments;
                super("timer");
                this.currentCount = 0;
                this.delay = 0;
                this.repeatCount = 0;
                this.running = false;
                this.self = this;
                this.jTimer = new java.util.Timer();
            } else throw new Error('invalid overload');
        }

        public reset() {
            this.jTimer.cancel();
            this.currentCount = 0;
            this.running = false;
        }

        public start() {
            this.jTimer.scheduleAtFixedRate$java_util_TimerTask$long$long(new Timer.Timer$0(this), this.delay, this.delay);
            this.running = true;
        }

        public stop() {
            this.jTimer.cancel();
            this.running = false;
        }

        public getCurrentCount() : number {
            return this.currentCount;
        }

        public getDelay() : number {
            return this.delay;
        }

        public setDelay(delay : number) {
            this.delay = delay;
        }

        public getRepeatCount() : number {
            return this.repeatCount;
        }

        public setRepeatCount(repeatCount : number) {
            this.repeatCount = repeatCount;
        }

        public isRunning() : boolean {
            return this.running;
        }
    }
    Timer["__class"] = "splashjs.utils.Timer";
    Timer["__interfaces"] = ["splashjs.utils.iface.ITimer","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];



    export namespace Timer {

        export class Timer$0 extends java.util.TimerTask {
            public __parent: any;
            public run() {
                this.__parent.dispatchEvent(new splashjs.events.TimerEvent(splashjs.events.TimerEvent.TIMER, this.__parent.self, this.__parent.self));
                this.__parent.currentCount += 1;
                if(this.__parent.currentCount === this.__parent.repeatCount) {
                    this.__parent.jTimer.cancel();
                    this.__parent.running = false;
                    this.__parent.dispatchEvent(new splashjs.events.TimerEvent(splashjs.events.TimerEvent.TIMER_COMPLETE, this.__parent.self, this.__parent.self));
                }
            }

            constructor(__parent: any) {
                super();
                this.__parent = __parent;
            }
        }
        Timer$0["__interfaces"] = ["java.lang.Runnable"];


    }

}
namespace splashjs.render.events {
    export class EventDispatcherRenderer extends splashjs.render.lang.SplashObjectRenderer implements splashjs.render.events.iface.IEventDispatcherRenderer {
        /*private*/ htmlElement : HTMLElement;

        public setDisplay(value : string) {
            this.htmlElement = <HTMLElement>this.getDOMElement();
            this.htmlElement.style.display = value;
        }

        constructor() {
            super();
            if(this.htmlElement===undefined) this.htmlElement = null;
        }
    }
    EventDispatcherRenderer["__class"] = "splashjs.render.events.EventDispatcherRenderer";
    EventDispatcherRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.lang {
    export class NoSuchFileError extends splashjs.lang.FileSystemError {
        public constructor(message? : any) {
            if(((typeof message === 'string') || message === null)) {
                let __args = arguments;
                super(message);
                (<any>Object).setPrototypeOf(this, NoSuchFileError.prototype);
            } else if(message === undefined) {
                let __args = arguments;
                super("No such file");
                (<any>Object).setPrototypeOf(this, NoSuchFileError.prototype);
            } else throw new Error('invalid overload');
        }
    }
    NoSuchFileError["__class"] = "splashjs.lang.NoSuchFileError";
    NoSuchFileError["__interfaces"] = ["splashjs.lang.iface.ISplashError","splashjs.lang.iface.IIOError","java.io.Serializable"];


}
namespace splashjs.animation {
    export abstract class Transition extends splashjs.animation.Animation implements splashjs.animation.iface.ITransition {
        targetObject : splashjs.display.iface.IDisplayObject;

        from : number;

        to : number;

        duration : number;

        /*private*/ autoReverse : boolean = false;

        /*private*/ loopCount : number = 1;

        delay : number = 0;

        easing : string = splashjs.animation.easing.Linear.EASE_NONE;

        public constructor() {
            super();
            if(this.targetObject===undefined) this.targetObject = null;
            if(this.from===undefined) this.from = 0;
            if(this.to===undefined) this.to = 0;
            if(this.duration===undefined) this.duration = 0;
        }

        public setTargetObject(targetObject : splashjs.display.iface.IDisplayObject) : splashjs.animation.iface.ITransition {
            this.targetObject = targetObject;
            return this;
        }

        public getTargetObject() : splashjs.display.iface.IDisplayObject {
            return this.targetObject;
        }

        public setAutoReverse(autoReverse : boolean) : splashjs.animation.iface.ITransition {
            this.autoReverse = autoReverse;
            return this;
        }

        public getAutoReverse() : boolean {
            return this.autoReverse;
        }

        public setLoopCount(loopCount : number) : splashjs.animation.iface.ITransition {
            this.loopCount = loopCount;
            return this;
        }

        public getLoopCount() : number {
            return this.loopCount;
        }

        public setEasing(easing : string) : splashjs.animation.iface.ITransition {
            this.easing = easing;
            return this;
        }

        public getEasing() : string {
            return this.easing;
        }

        public setFrom(from : number) : splashjs.animation.iface.ITransition {
            this.from = from;
            return this;
        }

        public getFrom() : number {
            return this.from;
        }

        public setTo(to : number) : splashjs.animation.iface.ITransition {
            this.to = to;
            return this;
        }

        public getTo() : number {
            return this.to;
        }

        public setDuration(duration : number) : splashjs.animation.iface.ITransition {
            this.duration = duration;
            return this;
        }

        public getTransitionState() : string {
            return (<splashjs.render.animation.iface.ITransitionRenderer><any>super.getRenderer()).getTransitionState();
        }

        public getDuration() : number {
            return this.duration;
        }

        public setDelay(delay : number) : splashjs.animation.iface.ITransition {
            this.delay = delay;
            return this;
        }

        public getDelay() : number {
            return this.delay;
        }

        public isRunning() : boolean {
            return (<splashjs.render.animation.iface.ITransitionRenderer><any>super.getRenderer()).isRunning();
        }

        public play() : splashjs.animation.iface.ITransition {
            (<splashjs.render.animation.iface.ITransitionRenderer><any>super.getRenderer()).play();
            return this;
        }

        public stop() : splashjs.animation.iface.ITransition {
            (<splashjs.render.animation.iface.ITransitionRenderer><any>super.getRenderer()).stop();
            return this;
        }

        public abstract update(nextValue : number) : splashjs.animation.iface.ITransition;

        public static create(params : any) : splashjs.animation.iface.ITransition {
            let transition : splashjs.animation.iface.ITransition = splashjs.render.animation.TransitionRenderer.create(params);
            return transition;
        }
    }
    Transition["__class"] = "splashjs.animation.Transition";
    Transition["__interfaces"] = ["splashjs.animation.iface.ITransition","splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.display {
    export class Bitmap extends splashjs.display.DisplayObject implements splashjs.display.iface.IBitmap {
        /*private*/ bitmapData : splashjs.display.iface.IBitmapData;

        public constructor(bitmapData? : any) {
            if(((bitmapData != null && (bitmapData["__interfaces"] != null && bitmapData["__interfaces"].indexOf("splashjs.display.iface.IBitmapData") >= 0 || bitmapData.constructor != null && bitmapData.constructor["__interfaces"] != null && bitmapData.constructor["__interfaces"].indexOf("splashjs.display.iface.IBitmapData") >= 0)) || bitmapData === null)) {
                let __args = arguments;
                super();
                if(this.bitmapData===undefined) this.bitmapData = null;
                if(this.bitmapData===undefined) this.bitmapData = null;
                (() => {
                    this.bitmapData = bitmapData;
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Bitmap, this));
                })();
            } else if(bitmapData === undefined) {
                let __args = arguments;
                super();
                if(this.bitmapData===undefined) this.bitmapData = null;
                if(this.bitmapData===undefined) this.bitmapData = null;
                (() => {
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Bitmap, this));
                })();
            } else throw new Error('invalid overload');
        }

        public setBitmapData(bitmapData : splashjs.display.iface.IBitmapData) {
            this.bitmapData = bitmapData;
        }

        public getBitmapData() : splashjs.display.iface.IBitmapData {
            return this.bitmapData;
        }
    }
    Bitmap["__class"] = "splashjs.display.Bitmap";
    Bitmap["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.display.iface.IBitmap"];


}
namespace splashjs.display {
    export abstract class InteractiveObject extends splashjs.display.DisplayObject implements splashjs.display.iface.IInteractiveObject {
        public constructor(id? : any) {
            if(((typeof id === 'string') || id === null)) {
                let __args = arguments;
                super(id);
            } else if(id === undefined) {
                let __args = arguments;
                super();
            } else throw new Error('invalid overload');
        }

        public dispatchClickEvent(mouseEvent : splashjs.events.iface.IMouseEvent) {
            this.dispatchEvent(mouseEvent);
        }

        public dispatchDoubleClickEvent(mouseEvent : splashjs.events.iface.IMouseEvent) {
            this.dispatchEvent(mouseEvent);
        }

        public dispatchMouseMoveEvent() {
        }

        public dispatchMouseDownEvent() {
        }

        public dispatchMouseUpEvent() {
        }

        public dispatchMouseOverEvent() {
        }

        public dispatchMouseEnterEvent() {
        }

        public dispatchMouseLeaveEvent() {
        }

        public dispatchMouseOutEvent() {
        }
    }
    InteractiveObject["__class"] = "splashjs.display.InteractiveObject";
    InteractiveObject["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.display {
    export class Scene extends splashjs.display.DisplayObject implements splashjs.display.iface.IScene {
        public constructor() {
            super("scene");
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Scene, this));
        }
    }
    Scene["__class"] = "splashjs.display.Scene";
    Scene["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.lang.iface.ISplashObject","splashjs.display.iface.IScene","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.layout {
    export class Container extends splashjs.display.DisplayObject implements splashjs.layout.iface.IContainer {
        /*private*/ theOnlyMember : splashjs.display.iface.IDisplayObject;

        public constructor(theOnlyMember : splashjs.display.iface.IDisplayObject) {
            super("box");
            if(this.theOnlyMember===undefined) this.theOnlyMember = null;
            this.theOnlyMember = theOnlyMember;
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Container, this));
        }

        public getTheOnlyMember() : splashjs.display.iface.IDisplayObject {
            return this.theOnlyMember;
        }

        public getWidth() : number {
            return (<splashjs.render.layout.iface.IContainerRenderer><any>super.getRenderer()).getWidth();
        }

        public getHeight() : number {
            return (<splashjs.render.layout.iface.IContainerRenderer><any>super.getRenderer()).getHeight();
        }
    }
    Container["__class"] = "splashjs.layout.Container";
    Container["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.layout.iface.IContainer","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.layout {
    export abstract class Layout extends splashjs.display.DisplayObject implements splashjs.layout.iface.ILayout {
        public constructor(id? : any) {
            if(((typeof id === 'string') || id === null)) {
                let __args = arguments;
                super(id);
            } else if(id === undefined) {
                let __args = arguments;
                super();
            } else throw new Error('invalid overload');
        }

        public setPadding(left : number, top : number, right : number, bottom : number) {
            (<splashjs.render.layout.iface.ILayoutRenderer><any>super.getRenderer())['setPadding$int$int$int$int'](left, top, right, bottom);
        }

        public setTopPadding(value : number) {
            (<splashjs.render.layout.iface.ILayoutRenderer><any>super.getRenderer()).setTopPadding(value);
        }

        public setBottomPadding(value : number) {
            (<splashjs.render.layout.iface.ILayoutRenderer><any>super.getRenderer()).setBottomPadding(value);
        }

        public setLeftPadding(value : number) {
            (<splashjs.render.layout.iface.ILayoutRenderer><any>super.getRenderer()).setLeftPadding(value);
        }

        public setRightPadding(value : number) {
            (<splashjs.render.layout.iface.ILayoutRenderer><any>super.getRenderer()).setRightPadding(value);
        }

        public abstract refreshLayout(): any;    }
    Layout["__class"] = "splashjs.layout.Layout";
    Layout["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.layout.iface.ILayout","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.media {
    export class Media extends splashjs.display.DisplayObject implements splashjs.media.iface.IMedia {
        /*private*/ mediaPath : string;

        public constructor(id : string) {
            super(id);
            if(this.mediaPath===undefined) this.mediaPath = null;
        }

        public getPath() : string {
            return this.mediaPath;
        }

        public setPath(path : string) {
            this.mediaPath = path;
            (<splashjs.render.media.iface.IMediaRenderer><any>super.getRenderer()).setPath();
        }
    }
    Media["__class"] = "splashjs.media.Media";
    Media["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.lang.iface.ISplashObject","splashjs.media.iface.IMedia","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.render.animation {
    export class AnimationRenderer extends splashjs.render.events.EventDispatcherRenderer {
        constructor() {
            super();
        }
    }
    AnimationRenderer["__class"] = "splashjs.render.animation.AnimationRenderer";
    AnimationRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.animation {
    export class SpriteSheetRenderer extends splashjs.render.events.EventDispatcherRenderer implements splashjs.render.animation.iface.ISpriteSheetRenderer {
        /*private*/ spriteSheet : splashjs.animation.iface.ISpriteSheet = null;

        /*private*/ imageElement : HTMLImageElement = null;

        /*private*/ width : number = 0;

        /*private*/ height : number = 0;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            super.setRenderObject(renderObject);
            this.spriteSheet = <splashjs.animation.iface.ISpriteSheet><any>super.getRenderObject();
            this.imageElement = <HTMLImageElement>document.createElement("img");
            this.imageElement.src = this.spriteSheet.getImagePath();
            this.imageElement.addEventListener("load", (event) => {
                this.width = (<number>this.imageElement.naturalWidth|0);
                this.height = (<number>this.imageElement.naturalHeight|0);
            });
            let xmlHttpRequest : XMLHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.responseType = "blob";
            xmlHttpRequest.addEventListener("load", ((xmlHttpRequest) => {
                return (event) => {
                    let fileReader : FileReader = new FileReader();
                    fileReader.addEventListener("load", (fevent) => {
                        this.spriteSheet.setImageBase64(<string>fileReader.result);
                    });
                    fileReader.readAsDataURL(<Blob>xmlHttpRequest.response);
                }
            })(xmlHttpRequest));
            xmlHttpRequest.open("get", this.spriteSheet.getImagePath());
            xmlHttpRequest.send();
        }

        public getSprite(label : string) : splashjs.display.iface.ISprite {
            let spriteData : splashjs.animation.iface.ISpriteData = (<splashjs.animation.iface.ISpriteSheet><any>super.getRenderObject()).getSpriteDataByLabel(label);
            let imagePath : string = spriteData.getSpriteSheet().getImagePath();
            let frame : splashjs.animation.iface.IFrame = spriteData.getFrame();
            let x : number = frame.getX();
            let y : number = frame.getY();
            let width : number = frame.getWidth();
            let height : number = frame.getHeight();
            let sprite : splashjs.display.iface.ISprite = new splashjs.display.Sprite();
            let spanElement : HTMLSpanElement = <HTMLSpanElement>sprite.getRenderer().getDOMElement();
            spanElement.style.width = width + this.UNIT;
            spanElement.style.height = height + this.UNIT;
            spanElement.style.backgroundImage = "url(\"" + imagePath + "\")";
            spanElement.style.backgroundPosition = "-" + x + this.UNIT + " -" + y + this.UNIT;
            let parentSprite : splashjs.display.iface.ISprite = new splashjs.display.Sprite();
            parentSprite.addChild(sprite);
            return parentSprite;
        }

        public getMovieClip(label : string) : splashjs.display.iface.IMovieClip {
            let movieClip : splashjs.display.iface.IMovieClip = new splashjs.display.MovieClip(this.spriteSheet.getMovieClipDataByLabel(label));
            return movieClip;
        }

        public getWidth() : number {
            return this.width;
        }

        public getHeight() : number {
            return this.height;
        }
    }
    SpriteSheetRenderer["__class"] = "splashjs.render.animation.SpriteSheetRenderer";
    SpriteSheetRenderer["__interfaces"] = ["splashjs.render.animation.iface.ISpriteSheetRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.application {
    export class ApplicationRenderer extends splashjs.render.events.EventDispatcherRenderer implements splashjs.render.application.iface.IApplicationRenderer {
        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            super.setRenderObject(renderObject);
            document.body.addEventListener("online", (event) => {
                let onlineEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.ONLINE);
                this.getRenderObject().dispatchEvent(onlineEvent);
            });
            document.body.addEventListener("offline", (event) => {
                let offlineEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.OFFLINE);
                this.getRenderObject().dispatchEvent(offlineEvent);
            });
        }

        public isOnline() : boolean {
            let online : boolean = false;
            if(navigator.onLine === true) online = true;
            return online;
        }
    }
    ApplicationRenderer["__class"] = "splashjs.render.application.ApplicationRenderer";
    ApplicationRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.application.iface.IApplicationRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.application {
    export class StageOwnerRenderer extends splashjs.render.events.EventDispatcherRenderer implements splashjs.render.application.iface.IStageOwnerRenderer {
        /*private*/ stageOwner : splashjs.application.iface.IStageOwner = null;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            this.stageOwner = <splashjs.application.iface.IStageOwner><any>renderObject;
            super.setRenderObject(renderObject);
            this.create();
        }

        public create() {
            let htmlElement : HTMLElement = document.getElementById(super.getRenderObject().getID());
            if(htmlElement == null) {
                htmlElement = <HTMLDivElement>document.createElement("div");
                htmlElement.id = super.getRenderObject().getID();
                htmlElement.style.position = "absolute";
                htmlElement.style.top = "0" + this.UNIT;
                htmlElement.style.left = "0" + this.UNIT;
                htmlElement.style.bottom = "0" + this.UNIT;
                htmlElement.style.right = "0" + this.UNIT;
                super.setRenderElement(new splashjs.render.RenderElement(htmlElement));
                this.appendToBody();
            } else {
                super.setRenderElement(new splashjs.render.RenderElement(htmlElement));
                if(htmlElement.style.width === undefined) htmlElement.style.width = this.stageOwner.getWidth() + this.UNIT;
                if(htmlElement.style.height === undefined) htmlElement.style.height = this.stageOwner.getHeight() + this.UNIT;
            }
            this.stageOwner.setWidth((<number>(<HTMLDivElement>htmlElement).clientWidth|0));
            this.stageOwner.setHeight((<number>(<HTMLDivElement>htmlElement).clientHeight|0));
            window.addEventListener("resize", (event) => {
                let resizeEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.RESIZE);
                resizeEvent.setTarget(super.getRenderObject());
                resizeEvent.setCurrentTarget(super.getRenderObject());
                let newWidth : number = (<number>(<HTMLDivElement>super.getDOMElement()).clientWidth|0);
                let newHeight : number = (<number>(<HTMLDivElement>super.getDOMElement()).clientHeight|0);
                this.stageOwner.setWidth(newWidth);
                this.stageOwner.setHeight(newHeight);
                this.stageOwner.dispatchEvent(resizeEvent);
            });
        }
    }
    StageOwnerRenderer["__class"] = "splashjs.render.application.StageOwnerRenderer";
    StageOwnerRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.application.iface.IStageOwnerRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.display {
    export class BitmapDataRenderer extends splashjs.render.events.EventDispatcherRenderer implements splashjs.render.display.iface.IBitmapDataRenderer {
        /*private*/ blob : Blob;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.blob===undefined) this.blob = null;
            super.setRenderObject(renderObject);
        }

        public draw(bitmapDrawable : splashjs.display.iface.IBitmapDrawable) {
            if(bitmapDrawable != null && (bitmapDrawable["__interfaces"] != null && bitmapDrawable["__interfaces"].indexOf("splashjs.media.iface.IVideo") >= 0 || bitmapDrawable.constructor != null && bitmapDrawable.constructor["__interfaces"] != null && bitmapDrawable.constructor["__interfaces"].indexOf("splashjs.media.iface.IVideo") >= 0)) {
                let video : splashjs.media.iface.IVideo = <splashjs.media.iface.IVideo><any>bitmapDrawable;
                let mediaStream : splashjs.def.webrtc.MediaStream = (<splashjs.render.media.iface.ICameraRenderer><any>video.getCamera().getRenderer()).getMediaStream();
                let imageCapture : Object = <any>(eval("new ImageCapture(mediaStream.getVideoTracks()[0]);"));
                let photoPromise : Promise<any> = <any>(eval("imageCapture.takePhoto();"));
                photoPromise.then((blobData) => {
                    this.blob = <Blob>blobData;
                }).catch((error) => {
                    console.info(error);
                });
            }
        }

        public getBlob() : Blob {
            return this.blob;
        }
    }
    BitmapDataRenderer["__class"] = "splashjs.render.display.BitmapDataRenderer";
    BitmapDataRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IBitmapDataRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.display {
    export abstract class DisplayObjectRenderer extends splashjs.render.events.EventDispatcherRenderer implements splashjs.render.display.iface.IDisplayObjectRenderer {
        /*private*/ __splashjs_render_display_DisplayObjectRenderer_htmlElement : HTMLElement;

        public constructor() {
            super();
            if(this.__splashjs_render_display_DisplayObjectRenderer_htmlElement===undefined) this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = null;
        }

        public createEventListeners() {
            super.createEventListeners();
            this.getDOMElement().addEventListener(splashjs.render.HTMLDomEventName.MOUSEMOVE, (event) => {
                let mouseEvent : splashjs.events.iface.IMouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_MOVE, null, this.getRenderObject());
                let domMouseEvent : MouseEvent = <MouseEvent>event;
                mouseEvent.setLocalX((<number>domMouseEvent.clientX|0) - (<splashjs.display.iface.IDisplayObject><any>this.getRenderObject()).getX());
                mouseEvent.setLocalY((<number>domMouseEvent.clientY|0) - (<splashjs.display.iface.IDisplayObject><any>this.getRenderObject()).getY());
                this.getRenderObject().dispatchEvent(mouseEvent);
            });
        }

        public create() {
        }

        public getOriginalWidth() : number {
            return 0;
        }

        public getOriginalHeight() : number {
            return 0;
        }

        public setX() {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
        }

        public setY() {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
        }

        public setXY() {
            this.setX();
            this.setY();
        }

        public setRegX() {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
        }

        public setRegY() {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
        }

        public setRegXY() {
            this.setRegX();
            this.setRegY();
        }

        public setScaleX() {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
        }

        public setScaleY() {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
        }

        public setScaleXY() {
            this.setScaleX();
            this.setScaleY();
        }

        public setRotation() {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
        }

        public setAlpha() {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.opacity = super.getCSSOpacityText();
        }

        public addFilter() {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.setProperty("filter", super.getCSSFilterText());
        }

        public removeFilter() {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.filter = super.getCSSFilterText();
        }

        public setVisible() {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.visibility = super.getCSSVisibilityText();
        }

        public setMouseVisible() {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.cursor = super.getCSSCursorVisibleText();
        }

        public setMouseCursor() {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.cursor = super.getCSSCursorText();
        }

        public setID() {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.id = super.getCSSIDText();
        }

        public setWidth() {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.width = super.getCSSWidthText();
        }

        public setHeight() {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.height = super.getCSSHeightText();
        }

        public getWidth() : number {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            return (<number>this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.clientWidth|0);
        }

        public getHeight() : number {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            return (<number>this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.clientHeight|0);
        }

        public setBorder(value : string) {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.border = value;
        }

        public setPosition(value : string) {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.position = value;
        }

        public setMargin(value : string) {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.margin = value;
        }

        public setPadding(value : string) {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.padding = value;
        }

        public setZIndex(value : string) {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.zIndex = value;
        }

        public setOverflow(value : string) {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.overflow = value;
        }

        public setResize(value : string) {
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = <HTMLElement>this.getDOMElement();
            this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.setProperty("resize", value);
        }
    }
    DisplayObjectRenderer["__class"] = "splashjs.render.display.DisplayObjectRenderer";
    DisplayObjectRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render {
    export class GlobalRenderer extends splashjs.render.events.EventDispatcherRenderer implements splashjs.render.iface.IGlobalRenderer {
        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            super.setRenderObject(renderObject);
        }

        public render(divID : any, jsClass : any, width : number, height : number) {
            let stage : splashjs.display.iface.IStage = new splashjs.display.Stage(<string>divID, width, height);
            let js : string = "";
            try {
                js = "new " + jsClass.toString() + "();";
                stage.addChild(<any>(eval(js)));
            } catch(e) {
                console.error(e.message, e);
            };
        }
    }
    GlobalRenderer["__class"] = "splashjs.render.GlobalRenderer";
    GlobalRenderer["__interfaces"] = ["splashjs.render.iface.IGlobalRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.media {
    export class CameraRenderer extends splashjs.render.events.EventDispatcherRenderer implements splashjs.render.media.iface.ICameraRenderer {
        /*private*/ mediaStream : splashjs.def.webrtc.MediaStream;

        /*private*/ camera : splashjs.media.iface.ICamera;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.mediaStream===undefined) this.mediaStream = null;
            if(this.camera===undefined) this.camera = null;
            super.setRenderObject(renderObject);
            this.camera = <splashjs.media.iface.ICamera><any>renderObject;
        }

        public requestPermission() {
            let cameraPromise : Promise<any> = <any>(eval("navigator.mediaDevices.getUserMedia({video: true});"));
            cameraPromise.then((mStream) => {
                this.mediaStream = <splashjs.def.webrtc.MediaStream>mStream;
                let permissionEvent : splashjs.events.iface.IPermissionEvent = new splashjs.events.PermissionEvent(splashjs.events.PermissionEvent.PERMISSION_STATUS, this.camera, this.camera);
                permissionEvent.setStatus(splashjs.permissions.PermissionStatus.GRANTED);
                this.camera.dispatchEvent(permissionEvent);
            }).catch((error) => {
                let permissionEvent : splashjs.events.iface.IPermissionEvent = new splashjs.events.PermissionEvent(splashjs.events.PermissionEvent.PERMISSION_STATUS, this.camera, this.camera);
                permissionEvent.setStatus(splashjs.permissions.PermissionStatus.DENIED);
                this.camera.dispatchEvent(permissionEvent);
            });
        }

        public setMediaStream(mediaStream : splashjs.def.webrtc.MediaStream) {
            this.mediaStream = mediaStream;
        }

        public getMediaStream() : splashjs.def.webrtc.MediaStream {
            return this.mediaStream;
        }
    }
    CameraRenderer["__class"] = "splashjs.render.media.CameraRenderer";
    CameraRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.media.iface.ICameraRenderer"];


}
namespace splashjs.render.net {
    export class FileReferenceRenderer extends splashjs.render.events.EventDispatcherRenderer implements splashjs.render.net.iface.IFileReferenceRenderer {
        htmlInputElement : HTMLInputElement;

        htmlAnchorElement : HTMLAnchorElement;

        selectedFile : File = null;

        inputRenderElement : splashjs.render.iface.IRenderElement;

        anchorRenderElement : splashjs.render.iface.IRenderElement;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.htmlInputElement===undefined) this.htmlInputElement = null;
            if(this.htmlAnchorElement===undefined) this.htmlAnchorElement = null;
            if(this.inputRenderElement===undefined) this.inputRenderElement = null;
            if(this.anchorRenderElement===undefined) this.anchorRenderElement = null;
            super.setRenderObject(renderObject);
            this.htmlInputElement = <HTMLInputElement>document.createElement("input");
            this.htmlInputElement.type = "file";
            this.inputRenderElement = new splashjs.render.RenderElement(this.htmlInputElement);
            this.htmlAnchorElement = <HTMLAnchorElement>document.createElement("a");
            this.anchorRenderElement = new splashjs.render.RenderElement(this.htmlAnchorElement);
            this.create();
        }

        public createEventListeners() {
            super.createEventListeners();
            this.htmlInputElement.addEventListener(splashjs.render.HTMLDomEventName.CHANGE, (event) => {
                if(this.htmlInputElement.files.length === 1) {
                    (<splashjs.net.iface.IFileReference><any>this.getRenderObject()).setName(null);
                    (<splashjs.net.iface.IFileReference><any>this.getRenderObject()).setExtension(null);
                    (<splashjs.net.iface.IFileReference><any>this.getRenderObject()).setSize(-1);
                    (<splashjs.net.iface.IFileReference><any>this.getRenderObject()).setType(null);
                    (<splashjs.net.iface.IFileReference><any>this.getRenderObject()).setModificationDate(null);
                    this.selectedFile = this.htmlInputElement.files.item(0);
                    let name : string = this.htmlInputElement.files.item(0).name;
                    (<splashjs.net.iface.IFileReference><any>this.getRenderObject()).setName(name);
                    let ext : string = name.substring(name.lastIndexOf(".") + 1);
                    (<splashjs.net.iface.IFileReference><any>this.getRenderObject()).setExtension(ext);
                    (<splashjs.net.iface.IFileReference><any>this.getRenderObject()).setSize(<any>(this.htmlInputElement.files.item(0)["size"]));
                    (<splashjs.net.iface.IFileReference><any>this.getRenderObject()).setType(<any>(this.htmlInputElement.files.item(0)["type"]));
                    let modificationDate : Date = new Date(<any>(this.htmlInputElement.files.item(0)["lastModified"]));
                    (<splashjs.net.iface.IFileReference><any>this.getRenderObject()).setModificationDate(modificationDate);
                    this.getRenderObject().dispatchEvent(new splashjs.events.Event(splashjs.events.Event.SELECT, this.getRenderObject(), this.getRenderObject()));
                }
            });
        }

        public create() {
            super.setRenderElement(this.inputRenderElement);
            super.getRenderObject().getStage().getRenderer().appendChild(this);
            super.setDisplay("none");
            super.setRenderElement(this.anchorRenderElement);
            super.getRenderObject().getStage().getRenderer().appendChild(this);
            super.setDisplay("none");
        }

        public download(urlRequest : splashjs.net.iface.IURLRequest, defaultFileName : string) {
            this.htmlAnchorElement.href = urlRequest.getURL();
            this.htmlAnchorElement.setAttribute("download", defaultFileName);
            this.htmlAnchorElement.click();
        }

        public browse$() : boolean {
            this.htmlInputElement.click();
            return true;
        }

        public browse$splashjs_net_iface_IFileFilter_A(fileFilters : splashjs.net.iface.IFileFilter[]) : boolean {
            this.htmlInputElement.click();
            return true;
        }

        public browse(fileFilters? : any) : any {
            if(((fileFilters != null && fileFilters instanceof <any>Array && (fileFilters.length==0 || fileFilters[0] == null ||(fileFilters[0] != null && (fileFilters[0]["__interfaces"] != null && fileFilters[0]["__interfaces"].indexOf("splashjs.net.iface.IFileFilter") >= 0 || fileFilters[0].constructor != null && fileFilters[0].constructor["__interfaces"] != null && fileFilters[0].constructor["__interfaces"].indexOf("splashjs.net.iface.IFileFilter") >= 0)))) || fileFilters === null)) {
                return <any>this.browse$splashjs_net_iface_IFileFilter_A(fileFilters);
            } else if(fileFilters === undefined) {
                return <any>this.browse$();
            } else throw new Error('invalid overload');
        }

        public load() {
            if(this.selectedFile != null) {
                let fileReader : FileReader = new FileReader();
                fileReader.addEventListener("loadstart", (event) => {
                    let loadStartEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.OPEN, this.getRenderObject(), this.getRenderObject());
                    this.getRenderObject().dispatchEvent(loadStartEvent);
                });
                fileReader.addEventListener("progress", (event) => {
                    let progressEvent : splashjs.events.iface.IProgressEvent = new splashjs.events.ProgressEvent(splashjs.events.ProgressEvent.PROGRESS);
                    progressEvent.setTarget(this.getRenderObject());
                    progressEvent.setCurrentTarget(this.getRenderObject());
                    progressEvent.setBytesLoaded((<number>((<ProgressEvent>event).loaded)|0));
                    progressEvent.setBytesTotal((<number>((<ProgressEvent>event).total)|0));
                    this.getRenderObject().dispatchEvent(progressEvent);
                });
                fileReader.addEventListener("error", ((fileReader) => {
                    return (event) => {
                        let ioErrorEvent : splashjs.events.iface.IIOErrorEvent = new splashjs.events.IOErrorEvent(splashjs.events.IOErrorEvent.IO_ERROR);
                        ioErrorEvent.setTarget(this.getRenderObject());
                        ioErrorEvent.setCurrentTarget(this.getRenderObject());
                        ioErrorEvent.setText(fileReader.error.name);
                        this.getRenderObject().dispatchEvent(ioErrorEvent);
                    }
                })(fileReader));
                fileReader.addEventListener("load", ((fileReader) => {
                    return (event) => {
                        let byteArray : splashjs.utils.iface.IByteArray = new splashjs.utils.ByteArray();
                        (<splashjs.render.utils.iface.IByteArrayRenderer><any>byteArray.getRenderer()).setDataView(new DataView(<ArrayBuffer>fileReader.result));
                        (<splashjs.net.iface.IFileReference><any>this.getRenderObject()).setData(byteArray);
                        this.getRenderObject().dispatchEvent(new splashjs.events.Event(splashjs.events.Event.COMPLETE, this.getRenderObject(), this.getRenderObject()));
                    }
                })(fileReader));
                fileReader.readAsArrayBuffer(this.selectedFile);
            }
        }
    }
    FileReferenceRenderer["__class"] = "splashjs.render.net.FileReferenceRenderer";
    FileReferenceRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.net.iface.IFileReferenceRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.net {
    export class NetConnectionRenderer extends splashjs.render.events.EventDispatcherRenderer {
        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
        }
    }
    NetConnectionRenderer["__class"] = "splashjs.render.net.NetConnectionRenderer";
    NetConnectionRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.net {
    export class NetStreamRenderer extends splashjs.render.events.EventDispatcherRenderer implements splashjs.render.net.iface.INetStreamRenderer {
        /*private*/ netStream : splashjs.net.iface.INetStream;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.netStream===undefined) this.netStream = null;
            super.setRenderObject(renderObject);
            this.netStream = <splashjs.net.iface.INetStream><any>renderObject;
        }

        public play(...params : string[]) {
            if(params.length === 1) {
                let fileURI : string = params[0];
                let video : splashjs.media.iface.IVideo = this.netStream.getVideoAttached();
                video.setPath(fileURI);
            }
        }
    }
    NetStreamRenderer["__class"] = "splashjs.render.net.NetStreamRenderer";
    NetStreamRenderer["__interfaces"] = ["splashjs.render.net.iface.INetStreamRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.net {
    export class URLLoaderRenderer extends splashjs.render.events.EventDispatcherRenderer implements splashjs.render.net.iface.IURLLoaderRenderer {
        /*private*/ xmlHttpRequest : XMLHttpRequest;

        /*private*/ urlLoader : splashjs.net.iface.IURLLoader;

        /*private*/ bytesLoaded : number;

        /*private*/ bytesTotal : number;

        /*private*/ data : any;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.xmlHttpRequest===undefined) this.xmlHttpRequest = null;
            if(this.urlLoader===undefined) this.urlLoader = null;
            if(this.bytesLoaded===undefined) this.bytesLoaded = 0;
            if(this.bytesTotal===undefined) this.bytesTotal = 0;
            if(this.data===undefined) this.data = null;
            super.setRenderObject(renderObject);
            this.xmlHttpRequest = new XMLHttpRequest();
            this.urlLoader = <splashjs.net.iface.IURLLoader><any>renderObject;
        }

        public load() {
            let urlRequest : splashjs.net.iface.IURLRequest = this.urlLoader.getURLRequest();
            let urlRequestMethod : string = urlRequest.getMethod();
            let method : string = "get";
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, splashjs.net.URLRequestMethod.GET)) method = "get"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, splashjs.net.URLRequestMethod.POST)) method = "post"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, splashjs.net.URLRequestMethod.DELETE)) method = "delete"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, splashjs.net.URLRequestMethod.PUT)) method = "put"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, splashjs.net.URLRequestMethod.HEAD)) method = "head"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(urlRequestMethod, splashjs.net.URLRequestMethod.OPTIONS)) method = "options";
            let dataFormat : string = this.urlLoader.getDataFormat();
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(dataFormat, splashjs.net.URLLoaderDataFormat.BINARY)) this.xmlHttpRequest.responseType = "arraybuffer"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(dataFormat, splashjs.net.URLLoaderDataFormat.TEXT)) this.xmlHttpRequest.responseType = "text"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(dataFormat, splashjs.net.URLLoaderDataFormat.VARIABLES)) this.xmlHttpRequest.responseType = "";
            let url : string = urlRequest.getURL();
            this.xmlHttpRequest.open(method, url);
            this.xmlHttpRequest.setRequestHeader("Content-Type", "text/html");
            this.xmlHttpRequest.addEventListener(splashjs.render.HTMLDomEventName.LOAD, ((dataFormat) => {
                return (event) => {
                    let progressEvent : ProgressEvent = <ProgressEvent>event;
                    this.bytesLoaded = (<number>progressEvent.loaded|0);
                    this.bytesTotal = (<number>progressEvent.total|0);
                    if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(dataFormat, splashjs.net.URLLoaderDataFormat.BINARY)) {
                        let byteArray : splashjs.utils.iface.IByteArray = new splashjs.utils.ByteArray();
                        (<splashjs.render.utils.iface.IByteArrayRenderer><any>byteArray.getRenderer()).setDataView(new DataView(<ArrayBuffer>this.xmlHttpRequest.response));
                        this.data = byteArray;
                    } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(dataFormat, splashjs.net.URLLoaderDataFormat.TEXT)) {
                        this.data = <string>this.xmlHttpRequest.responseText;
                    }
                    let completeEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.COMPLETE, this.urlLoader, this.urlLoader);
                    this.urlLoader.dispatchEvent(completeEvent);
                    console.info(event);
                }
            })(dataFormat));
            this.xmlHttpRequest.send();
        }

        public getData() : any {
            return this.data;
        }

        public getBytesTotal() : number {
            return this.bytesTotal;
        }

        public getBytesLoaded() : number {
            return this.bytesLoaded;
        }

        public close() {
            if(this.xmlHttpRequest != null) this.xmlHttpRequest.abort();
        }
    }
    URLLoaderRenderer["__class"] = "splashjs.render.net.URLLoaderRenderer";
    URLLoaderRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.net.iface.IURLLoaderRenderer"];


}
namespace splashjs.render.text {
    export class FontRenderer extends splashjs.render.events.EventDispatcherRenderer implements splashjs.render.text.iface.IFontRenderer {
        /*private*/ htmlStyleElement : HTMLStyleElement;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.htmlStyleElement===undefined) this.htmlStyleElement = null;
            super.setRenderObject(renderObject);
            this.htmlStyleElement = <HTMLStyleElement>document.createElement("style");
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlStyleElement));
            this.create();
        }

        public create() {
            document.head.appendChild(this.htmlStyleElement);
        }

        /**
         * 
         */
        public load() {
            let font : splashjs.text.iface.IFont = <splashjs.text.iface.IFont><any>super.getRenderObject();
            let fontID : string = font.getFontID();
            let fontPath : splashjs.text.iface.IFontPath = font.getFontPath();
            let normalFontPath : string = fontPath.getNormalFontPath();
            let fontFaceText : string = "@font-face {" + this.ENDLINE_CHAR;
            fontFaceText += "font-family: \"" + fontID + "\";" + this.ENDLINE_CHAR;
            fontFaceText += "src: url(\"" + normalFontPath + "\");" + this.ENDLINE_CHAR;
            fontFaceText += "}" + this.ENDLINE_CHAR;
            this.htmlStyleElement.appendChild(document.createTextNode(fontFaceText));
        }
    }
    FontRenderer["__class"] = "splashjs.render.text.FontRenderer";
    FontRenderer["__interfaces"] = ["splashjs.render.text.iface.IFontRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.utils {
    export class ByteArrayRenderer extends splashjs.render.events.EventDispatcherRenderer implements splashjs.render.utils.iface.IByteArrayRenderer {
        /*private*/ dataView : DataView;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.dataView===undefined) this.dataView = null;
            super.setRenderObject(renderObject);
            this.dataView = new DataView(new ArrayBuffer(0));
        }

        public setDataView(dataView : DataView) {
            this.dataView = dataView;
        }

        public getLength() : number {
            return (<number>this.dataView.byteLength|0);
        }

        public writeBytes(byteArray : splashjs.utils.iface.IByteArray, offset : number, length : number) {
        }
    }
    ByteArrayRenderer["__class"] = "splashjs.render.utils.ByteArrayRenderer";
    ByteArrayRenderer["__interfaces"] = ["splashjs.render.utils.iface.IByteArrayRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.utils {
    export class ResourceLoaderRenderer extends splashjs.render.events.EventDispatcherRenderer implements splashjs.render.utils.iface.IResourceLoaderRenderer {
        /*private*/ totalNumberOfResource : number;

        /*private*/ numberOfResourceLoaded : number;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.totalNumberOfResource===undefined) this.totalNumberOfResource = 0;
            if(this.numberOfResourceLoaded===undefined) this.numberOfResourceLoaded = 0;
            super.setRenderObject(renderObject);
        }

        public loadAll(resources : Array<splashjs.utils.iface.IResource>) {
            this.totalNumberOfResource = /* size */(<number>resources.length);
            this.numberOfResourceLoaded = 0;
            let resource : splashjs.utils.iface.IResource = null;
            for(let i : number = 0; i < /* size */(<number>resources.length); i++) {{
                resource = /* get */resources[i];
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(resource.getResourceType(), splashjs.utils.ResourceType.IMAGE)) {
                    this.loadImage(resource);
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(resource.getResourceType(), splashjs.utils.ResourceType.SOUND)) {
                    this.loadSound(resource);
                }
            };}
        }

        /*private*/ loadImage(imageResource : splashjs.utils.iface.IResource) {
            let xmlHttpRequest : XMLHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.responseType = "blob";
            xmlHttpRequest.addEventListener(splashjs.render.HTMLDomEventName.LOAD, ((xmlHttpRequest) => {
                return (xmlLoadEvent) => {
                    let fileReader : FileReader = new FileReader();
                    fileReader.addEventListener(splashjs.render.HTMLDomEventName.LOAD, (fileReaderLoadEvent) => {
                        (<splashjs.render.utils.iface.IResourceRenderer><any>imageResource.getRenderer()).setResourceBase64(<string>fileReader.result);
                        this.numberOfResourceLoaded += 1;
                        this.checkIfResourceLoaded();
                    });
                    fileReader.readAsDataURL(<Blob>xmlHttpRequest.response);
                }
            })(xmlHttpRequest));
            xmlHttpRequest.open("get", imageResource.getResourcePath());
            xmlHttpRequest.send();
        }

        /*private*/ loadSound(soundResource : splashjs.utils.iface.IResource) {
            let xmlHttpRequest : XMLHttpRequest = new XMLHttpRequest();
            xmlHttpRequest.responseType = "blob";
            xmlHttpRequest.addEventListener(splashjs.render.HTMLDomEventName.LOAD, ((xmlHttpRequest) => {
                return (xmlLoadEvent) => {
                    let fileReader : FileReader = new FileReader();
                    fileReader.addEventListener(splashjs.render.HTMLDomEventName.LOAD, (fileReaderLoadEvent) => {
                        (<splashjs.render.utils.iface.IResourceRenderer><any>soundResource.getRenderer()).setResourceBase64(<string>fileReader.result);
                        this.numberOfResourceLoaded += 1;
                        this.checkIfResourceLoaded();
                    });
                    fileReader.readAsDataURL(<Blob>xmlHttpRequest.response);
                }
            })(xmlHttpRequest));
            xmlHttpRequest.open("get", soundResource.getResourcePath());
            xmlHttpRequest.send();
        }

        /*private*/ checkIfResourceLoaded() {
            if(this.totalNumberOfResource === this.numberOfResourceLoaded) {
                let resourceLoader : splashjs.utils.iface.IResourceLoader = <splashjs.utils.iface.IResourceLoader><any>super.getRenderObject();
                let loadedEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.LOAD, resourceLoader, resourceLoader);
                resourceLoader.dispatchEvent(loadedEvent);
            }
        }
    }
    ResourceLoaderRenderer["__class"] = "splashjs.render.utils.ResourceLoaderRenderer";
    ResourceLoaderRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.utils.iface.IResourceLoaderRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.utils {
    export class ResourceRenderer extends splashjs.render.events.EventDispatcherRenderer implements splashjs.render.utils.iface.IResourceRenderer {
        /*private*/ resourceBase64 : string;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.resourceBase64===undefined) this.resourceBase64 = null;
            super.setRenderObject(renderObject);
        }

        public setResourceBase64(resourceBase64 : string) {
            this.resourceBase64 = resourceBase64;
        }

        public getResourceBase64() : string {
            return this.resourceBase64;
        }
    }
    ResourceRenderer["__class"] = "splashjs.render.utils.ResourceRenderer";
    ResourceRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.utils.iface.IResourceRenderer"];


}
namespace splashjs.animation {
    export class CircularTransition extends splashjs.animation.Transition implements splashjs.animation.iface.ICircularTransition {
        /*private*/ radius : number = 50;

        /*private*/ centerX : number = 0;

        /*private*/ centerY : number = 0;

        public constructor() {
            super();
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(CircularTransition, this));
        }

        public setCenterX(centerX : number) : splashjs.animation.iface.ICircularTransition {
            this.centerX = centerX;
            return this;
        }

        public getCenterX() : number {
            return this.centerX;
        }

        public setCenterY(centerY : number) : splashjs.animation.iface.ICircularTransition {
            this.centerY = centerY;
            return this;
        }

        public getCenterY() : number {
            return this.centerY;
        }

        public setRadius(radius : number) : splashjs.animation.iface.ICircularTransition {
            this.radius = radius;
            return this;
        }

        public getRadius() : number {
            return this.radius;
        }

        public setCircle$splashjs_geom_iface_ICircle(circle : splashjs.geom.iface.ICircle) : splashjs.animation.iface.ICircularTransition {
            this.centerX = circle.getCenterX();
            this.centerY = circle.getCenterY();
            this.radius = circle.getRadius();
            return this;
        }

        public getCircle() : splashjs.geom.iface.ICircle {
            return new splashjs.geom.Circle(this.centerX, this.centerY, this.radius);
        }

        public setCircle$int$int$int(centerX : number, centerY : number, radius : number) : splashjs.animation.iface.ICircularTransition {
            this.centerX = centerX;
            this.centerY = centerY;
            this.radius = radius;
            return this;
        }

        public setCircle(centerX? : any, centerY? : any, radius? : any) : any {
            if(((typeof centerX === 'number') || centerX === null) && ((typeof centerY === 'number') || centerY === null) && ((typeof radius === 'number') || radius === null)) {
                return <any>this.setCircle$int$int$int(centerX, centerY, radius);
            } else if(((centerX != null && (centerX["__interfaces"] != null && centerX["__interfaces"].indexOf("splashjs.geom.iface.ICircle") >= 0 || centerX.constructor != null && centerX.constructor["__interfaces"] != null && centerX.constructor["__interfaces"].indexOf("splashjs.geom.iface.ICircle") >= 0)) || centerX === null) && centerY === undefined && radius === undefined) {
                return <any>this.setCircle$splashjs_geom_iface_ICircle(centerX);
            } else throw new Error('invalid overload');
        }

        public update(nextValue : number) : splashjs.animation.iface.ITransition {
            let targetObject : splashjs.display.iface.IDisplayObject = super.getTargetObject();
            targetObject.setX(100 + (<number>(Math.cos((Math.PI / 180) * (nextValue)) * this.radius)|0));
            targetObject.setY(100 + (<number>(Math.sin((Math.PI / 180) * (nextValue)) * this.radius)|0));
            return this;
        }
    }
    CircularTransition["__class"] = "splashjs.animation.CircularTransition";
    CircularTransition["__interfaces"] = ["splashjs.animation.iface.ITransition","splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher","splashjs.animation.iface.ICircularTransition"];


}
namespace splashjs.animation {
    export class FadeTransition extends splashjs.animation.Transition {
        /*private*/ currentValue : number;

        /**
         * 
         * @param {number} nextValue
         * @return {*}
         */
        public update(nextValue : number) : splashjs.animation.iface.ITransition {
            let targetObject : splashjs.display.iface.IDisplayObject = super.getTargetObject();
            targetObject.setAlpha(nextValue);
            return this;
        }

        public play() : splashjs.animation.iface.ITransition {
            return this;
        }

        constructor() {
            super();
            if(this.currentValue===undefined) this.currentValue = 0;
        }
    }
    FadeTransition["__class"] = "splashjs.animation.FadeTransition";
    FadeTransition["__interfaces"] = ["splashjs.animation.iface.ITransition","splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.animation {
    export class ParallelTransition extends splashjs.animation.Transition implements splashjs.animation.iface.IParallelTransition {
        /*private*/ transitions : Array<splashjs.animation.iface.ITransition> = <any>([]);

        public constructor() {
            super();
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(ParallelTransition, this));
        }

        public add(transition : splashjs.animation.iface.ITransition) : splashjs.animation.iface.ITransition {
            /* add */(this.transitions.push(transition)>0);
            return this;
        }

        public play() : splashjs.animation.iface.ITransition {
            for(let i : number = 0; i < /* size */(<number>this.transitions.length); i++) {{
                /* get */this.transitions[i].play();
            };}
            return this;
        }

        public stop() : splashjs.animation.iface.ITransition {
            for(let i : number = 0; i < /* size */(<number>this.transitions.length); i++) {{
                /* get */this.transitions[i].stop();
            };}
            return this;
        }

        /**
         * 
         * @return {number}
         */
        public getDuration() : number {
            let maxDuration : number = 0;
            let duration : number = 0;
            for(let i : number = 0; i < /* size */(<number>this.transitions.length); i++) {{
                duration = /* get */this.transitions[i].getDuration();
                if(duration > maxDuration) maxDuration = duration;
            };}
            return maxDuration;
        }

        public update(nextValue : number) : splashjs.animation.iface.ITransition {
            return this;
        }
    }
    ParallelTransition["__class"] = "splashjs.animation.ParallelTransition";
    ParallelTransition["__interfaces"] = ["splashjs.animation.iface.ITransition","splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IParallelTransition","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.animation {
    export class RotationTransition extends splashjs.animation.Transition {
        public constructor() {
            super();
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(RotationTransition, this));
        }

        /**
         * 
         * @param {number} nextValue
         * @return {*}
         */
        public update(nextValue : number) : splashjs.animation.iface.ITransition {
            let targetObject : splashjs.display.iface.IDisplayObject = super.getTargetObject();
            targetObject.setRotation(nextValue);
            return this;
        }
    }
    RotationTransition["__class"] = "splashjs.animation.RotationTransition";
    RotationTransition["__interfaces"] = ["splashjs.animation.iface.ITransition","splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.animation {
    export class ScaleTransition extends splashjs.animation.Transition implements splashjs.animation.iface.IScaleTransition {
        /*private*/ scaleTransitionType : string = splashjs.animation.ScaleTransitionType.XY;

        public constructor() {
            super();
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(ScaleTransition, this));
        }

        public setScaleTransitionType(scaleTransitionType : string) {
            this.scaleTransitionType = scaleTransitionType;
        }

        public getScaleTransitionType() : string {
            return this.scaleTransitionType;
        }

        /**
         * 
         * @param {number} nextValue
         * @return {*}
         */
        public update(nextValue : number) : splashjs.animation.iface.ITransition {
            let targetObject : splashjs.display.iface.IDisplayObject = super.getTargetObject();
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.scaleTransitionType, splashjs.animation.ScaleTransitionType.X)) {
                targetObject.setScaleX(nextValue);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.scaleTransitionType, splashjs.animation.ScaleTransitionType.Y)) {
                targetObject.setScaleY(nextValue);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.scaleTransitionType, splashjs.animation.ScaleTransitionType.XY)) {
                targetObject.setScaleX(nextValue);
                targetObject.setScaleY(nextValue);
            }
            return this;
        }
    }
    ScaleTransition["__class"] = "splashjs.animation.ScaleTransition";
    ScaleTransition["__interfaces"] = ["splashjs.animation.iface.ITransition","splashjs.animation.iface.IScaleTransition","splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.animation {
    export class SequentialTransition extends splashjs.animation.Transition {
        /*private*/ transitions : Array<splashjs.animation.iface.ITransition> = <any>([]);

        /*private*/ currentTransitionNumber : number = 0;

        /*private*/ currentTransition : splashjs.animation.iface.ITransition;

        public constructor() {
            super();
            if(this.currentTransition===undefined) this.currentTransition = null;
        }

        public add(transition : splashjs.animation.iface.ITransition) : splashjs.animation.iface.ITransition {
            /* add */(this.transitions.push(transition)>0);
            return this;
        }

        public play() : splashjs.animation.iface.ITransition {
            let transition : splashjs.animation.iface.ITransition = null;
            for(let i : number = 0; i < /* size */(<number>this.transitions.length); i++) {{
                transition = /* get */this.transitions[i];
                transition.addEventListener(splashjs.events.TransitionEvent.DURATION_COMPLETE, (event) => {
                    this.currentTransitionNumber += 1;
                    if(this.currentTransitionNumber < /* size */(<number>this.transitions.length)) {
                        this.currentTransition = /* get */this.transitions[this.currentTransitionNumber];
                        this.currentTransition.play();
                    }
                });
            };}
            this.currentTransition = /* get */this.transitions[this.currentTransitionNumber];
            this.currentTransition.play();
            return this;
        }

        public stop() : splashjs.animation.iface.ITransition {
            this.currentTransition.stop();
            return this;
        }

        public update(value : number) : splashjs.animation.iface.ITransition {
            return this;
        }
    }
    SequentialTransition["__class"] = "splashjs.animation.SequentialTransition";
    SequentialTransition["__interfaces"] = ["splashjs.animation.iface.ITransition","splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.animation {
    export class TranslateTransition extends splashjs.animation.Transition {
        /*private*/ fromX : number = -1;

        /*private*/ toX : number = -1;

        /*private*/ fromY : number = -1;

        /*private*/ toY : number = -1;

        public constructor() {
            super();
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(splashjs.animation.ScaleTransition, this));
        }

        public setFromX(fromX : number) : splashjs.animation.iface.ITransition {
            this.fromX = fromX;
            return this;
        }

        public getFromX() : number {
            return this.fromX;
        }

        public setFromY(fromY : number) : splashjs.animation.iface.ITransition {
            this.fromY = fromY;
            return this;
        }

        public getFromY() : number {
            return this.fromY;
        }

        public setToX(toX : number) : splashjs.animation.iface.ITransition {
            this.toX = toX;
            return this;
        }

        public getToX() : number {
            return this.toX;
        }

        public setToY(toY : number) : splashjs.animation.iface.ITransition {
            this.toY = toY;
            return this;
        }

        public getToY() : number {
            return this.toY;
        }

        public setFromXY(fromX : number, fromY : number) : splashjs.animation.iface.ITransition {
            this.fromX = fromX;
            this.fromY = fromY;
            return this;
        }

        public setToXY(toX : number, toY : number) : splashjs.animation.iface.ITransition {
            this.toX = toX;
            this.toY = toY;
            return this;
        }

        /**
         * 
         * @param {number} nextValue
         * @return {*}
         */
        public update(nextValue : number) : splashjs.animation.iface.ITransition {
            let targetObject : splashjs.display.iface.IDisplayObject = super.getTargetObject();
            return this;
        }
    }
    TranslateTransition["__class"] = "splashjs.animation.TranslateTransition";
    TranslateTransition["__interfaces"] = ["splashjs.animation.iface.ITransition","splashjs.lang.iface.ISplashObject","splashjs.animation.iface.IAnimation","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.controls {
    export abstract class Control extends splashjs.display.InteractiveObject implements splashjs.controls.iface.IControl {
        /*private*/ enabled : boolean;

        public constructor(id : string) {
            super(id);
            if(this.enabled===undefined) this.enabled = false;
        }

        public setEnabled(enabled : boolean) {
            this.enabled = enabled;
        }

        public getEnabled() : boolean {
            return this.enabled;
        }

        public isEnabled() : boolean {
            return this.getEnabled();
        }
    }
    Control["__class"] = "splashjs.controls.Control";
    Control["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl"];


}
namespace splashjs.display {
    export abstract class DisplayObjectContainer extends splashjs.display.InteractiveObject implements splashjs.display.iface.IDisplayObjectContainer {
        children : Array<splashjs.display.iface.IDisplayObject>;

        parent : splashjs.display.iface.IDisplayObjectContainer;

        public constructor(id? : any) {
            if(((typeof id === 'string') || id === null)) {
                let __args = arguments;
                super(id);
                if(this.parent===undefined) this.parent = null;
                this.children = <any>([]);
                if(this.parent===undefined) this.parent = null;
            } else if(id === undefined) {
                let __args = arguments;
                super();
                if(this.parent===undefined) this.parent = null;
                this.children = <any>([]);
                if(this.parent===undefined) this.parent = null;
            } else throw new Error('invalid overload');
        }

        public addChild(child : splashjs.display.iface.IDisplayObject) {
            if(this === child) throw Object.defineProperty(new Error("A DisplayObject cannot be added to itself."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] }); else if(child != null && (child["__interfaces"] != null && child["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0 || child.constructor != null && child.constructor["__interfaces"] != null && child.constructor["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0)) throw Object.defineProperty(new Error("Stage cannot be added to DisplayObject."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            if(child.getParent() != null) {
                child.getParent().getRenderer().removeChild(child.getRenderer());
            }
            /* add */(this.children.push(child)>0);
            (<splashjs.render.display.iface.IDisplayObjectRenderer><any>child.getRenderer()).setZIndex((/* size */(<number>this.children.length) - 1) + "");
            super.getRenderer().appendChild(child.getRenderer());
            let addedEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.ADDED, child, child);
            addedEvent.setData(this);
            child.dispatchEvent(addedEvent);
            if(this.getStage() != null) {
                let addedToStageEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, child, child);
                addedToStageEvent.setData(this.getStage());
                child.dispatchEvent(addedToStageEvent);
            }
        }

        public addChildAt(child : splashjs.display.iface.IDisplayObject, index : number) {
            if(this === child) throw Object.defineProperty(new Error("A DisplayObject cannot be added to itself."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] }); else if(child != null && (child["__interfaces"] != null && child["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0 || child.constructor != null && child.constructor["__interfaces"] != null && child.constructor["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0)) throw Object.defineProperty(new Error("Stage cannot be added to DisplayObject."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] }); else if(index < 0 || index > /* size */(<number>this.children.length)) throw Object.defineProperty(new Error("Child index is not within the limit."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            if(child.getParent() != null) {
                child.getParent().getRenderer().removeChild(child.getRenderer());
            }
            /* add */this.children.splice(index, 0, child);
            super.getRenderer().appendChild(child.getRenderer());
            for(let i : number = 0; i < /* size */(<number>this.children.length); i++) {{
                let myChild : splashjs.display.iface.IDisplayObject = <splashjs.display.iface.IDisplayObject><any>/* get */this.children[i];
                (<splashjs.render.display.iface.IDisplayObjectRenderer><any>myChild.getRenderer()).setZIndex(i + "");
            };}
            let addedEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.ADDED, child, child);
            addedEvent.setData(this);
            child.dispatchEvent(addedEvent);
            if(this.getStage() != null) {
                let addedToStageEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, child, child);
                addedToStageEvent.setData(this.getStage());
                child.dispatchEvent(addedToStageEvent);
            }
        }

        public removeChild(child : splashjs.display.iface.IDisplayObject) {
            if(this.contains(child) === false) throw Object.defineProperty(new Error("Child does not exists."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            /* remove */(a => { let index = a.indexOf(child); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.children);
            super.getRenderer().removeChild(child.getRenderer());
            for(let i : number = 0; i < /* size */(<number>this.children.length); i++) {{
                let myChild : splashjs.display.iface.IDisplayObject = /* get */this.children[i];
                (<splashjs.render.display.iface.IDisplayObjectRenderer><any>myChild.getRenderer()).setZIndex(i + "");
            };}
            let removedEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED, child, child);
            child.dispatchEvent(removedEvent);
            if(this.getStage() != null) {
                let removedFromStageEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, child, child);
                child.dispatchEvent(removedFromStageEvent);
            }
        }

        public removeChildAt(index : number) {
            if(index < 0) throw Object.defineProperty(new Error("Child index is not within the limit."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            let child : splashjs.display.iface.IDisplayObject = this.getChildAt(index);
            /* remove */this.children.splice(index, 1)[0];
            super.getRenderer().removeChild(child.getRenderer());
            for(let i : number = 0; i < /* size */(<number>this.children.length); i++) {{
                let myChild : splashjs.display.iface.IDisplayObject = /* get */this.children[i];
                (<splashjs.render.display.iface.IDisplayObjectRenderer><any>myChild.getRenderer()).setZIndex(i + "");
            };}
            let removedEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED, child, child);
            child.dispatchEvent(removedEvent);
            if(this.getStage() != null) {
                let removedFromStageEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, child, child);
                child.dispatchEvent(removedFromStageEvent);
            }
        }

        public getChildByName(name : string) : splashjs.display.iface.IDisplayObject {
            let outChild : splashjs.display.iface.IDisplayObject = null;
            for(let index128=0; index128 < this.children.length; index128++) {
                let child = this.children[index128];
                {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(child.getName(),name))) {
                        outChild = child;
                        break;
                    }
                }
            }
            return outChild;
        }

        public getChildAt(index : number) : splashjs.display.iface.IDisplayObject {
            let outChild : splashjs.display.iface.IDisplayObject = null;
            outChild = /* get */this.children[index];
            return outChild;
        }

        public getChildIndex(child : splashjs.display.iface.IDisplayObject) : number {
            let index : number = -1;
            index = this.children.indexOf(child);
            return index;
        }

        public setChildIndex(child : splashjs.display.iface.IDisplayObject, index : number) {
            if(this === child) throw Object.defineProperty(new Error("A DisplayObject cannot be added to itself."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] }); else if(child != null && (child["__interfaces"] != null && child["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0 || child.constructor != null && child.constructor["__interfaces"] != null && child.constructor["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0)) throw Object.defineProperty(new Error("Stage cannot be added to DisplayObject."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] }); else if(index < 0) throw Object.defineProperty(new Error("Child index is not within the limit."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] }); else if(this.contains(child) === false) throw Object.defineProperty(new Error("Child does not exists."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            let currentIndex : number = this.getChildIndex(child);
            if(currentIndex < index) {
                /* remove */(a => { let index = a.indexOf(child); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.children);
                /* add */this.children.splice(index, 0, child);
            } else if(currentIndex > index) {
                /* remove */(a => { let index = a.indexOf(child); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.children);
                /* add */this.children.splice(index - 1, 0, child);
            }
            for(let i : number = 0; i < /* size */(<number>this.children.length); i++) {{
                let myChild : splashjs.display.iface.IDisplayObject = /* get */this.children[i];
                (<splashjs.render.display.iface.IDisplayObjectRenderer><any>myChild.getRenderer()).setZIndex(i + "");
            };}
        }

        public swapChildren(child1 : splashjs.display.iface.IDisplayObject, child2 : splashjs.display.iface.IDisplayObject) {
            if(this === child1 || this === child2) throw Object.defineProperty(new Error("A DisplayObject cannot be swapped to its parent."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] }); else if(this.contains(child1) === false || this.contains(child2) === false) throw Object.defineProperty(new Error("Child does not exists."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            let child1Index : number = this.getChildIndex(child1);
            let child2Index : number = this.getChildIndex(child2);
            let tempChild : splashjs.display.iface.IDisplayObject = child1;
            /* set */(this.children[child1Index] = child2);
            /* set */(this.children[child2Index] = tempChild);
            for(let i : number = 0; i < /* size */(<number>this.children.length); i++) {{
                let myChild : splashjs.display.iface.IDisplayObject = /* get */this.children[i];
                (<splashjs.render.display.iface.IDisplayObjectRenderer><any>myChild.getRenderer()).setZIndex(i + "");
            };}
        }

        public swapChildrenAt(index1 : number, index2 : number) {
            if(index1 >= /* size */(<number>this.children.length) || index2 >= /* size */(<number>this.children.length) || index1 < 0 || index2 < 0) throw Object.defineProperty(new Error("Child index is not within the limit."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] }); else if(index1 === index2) return;
            let child1 : splashjs.display.iface.IDisplayObject = this.getChildAt(index1);
            let child2 : splashjs.display.iface.IDisplayObject = this.getChildAt(index2);
            let tempChild : splashjs.display.iface.IDisplayObject = child1;
            /* set */(this.children[index1] = child2);
            /* set */(this.children[index2] = tempChild);
            for(let i : number = 0; i < /* size */(<number>this.children.length); i++) {{
                let myChild : splashjs.display.iface.IDisplayObject = /* get */this.children[i];
                (<splashjs.render.display.iface.IDisplayObjectRenderer><any>myChild.getRenderer()).setZIndex(i + "");
            };}
        }

        public contains(displayObject : splashjs.display.iface.IDisplayObject) : boolean {
            let out : boolean = false;
            out = /* contains */(this.children.indexOf(<any>(displayObject)) >= 0);
            return out;
        }

        public getNumChildren() : number {
            return /* size */(<number>this.children.length);
        }

        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                this.stage = <splashjs.display.iface.IStage><any>event.getData();
                for(let i : number = 0; i < /* size */(<number>this.children.length); i++) {{
                    let child : splashjs.display.iface.IDisplayObject = <splashjs.display.iface.IDisplayObject><any>/* get */this.children[i];
                    let addedToStageEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, child, child);
                    addedToStageEvent.setData(event.getData());
                    child.dispatchEvent(addedToStageEvent);
                };}
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.REMOVED_FROM_STAGE)) {
                this.stage = null;
                for(let index129=0; index129 < this.children.length; index129++) {
                    let child = this.children[index129];
                    {
                        let removedFromStageEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, child, child);
                        child.dispatchEvent(removedFromStageEvent);
                    }
                }
            }
            return super.dispatchEvent(event);
        }

        public getAllChildren() : Array<splashjs.display.iface.IDisplayObject> {
            return this.children;
        }

        public render() {
            super.render();
            for(let index130=0; index130 < this.children.length; index130++) {
                let child = this.children[index130];
                {
                    child.render();
                }
            }
        }
    }
    DisplayObjectContainer["__class"] = "splashjs.display.DisplayObjectContainer";
    DisplayObjectContainer["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IDisplayObjectContainer","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.display {
    export class Image extends splashjs.display.InteractiveObject implements splashjs.display.iface.IImage {
        /*private*/ imagePath : string;

        /*private*/ imageType : string;

        /*private*/ resource : splashjs.utils.iface.IResource;

        /*private*/ originalWidth : number;

        /*private*/ originalHeight : number;

        public constructor(imagePath? : any) {
            if(((typeof imagePath === 'string') || imagePath === null)) {
                let __args = arguments;
                super("image");
                if(this.resource===undefined) this.resource = null;
                if(this.originalWidth===undefined) this.originalWidth = null;
                if(this.originalHeight===undefined) this.originalHeight = null;
                this.imagePath = "";
                this.imageType = "";
                if(this.resource===undefined) this.resource = null;
                if(this.originalWidth===undefined) this.originalWidth = null;
                if(this.originalHeight===undefined) this.originalHeight = null;
                (() => {
                    this.imagePath = imagePath;
                    let type : string = this.imagePath.substring(this.imagePath.lastIndexOf(".") + 1);
                    if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "jpg") || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "jpeg")) this.imageType = "jpeg"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "png")) this.imageType = "png"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "gif")) this.imageType = "gif";
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Image, this));
                })();
            } else if(((imagePath != null && (imagePath["__interfaces"] != null && imagePath["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0 || imagePath.constructor != null && imagePath.constructor["__interfaces"] != null && imagePath.constructor["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0)) || imagePath === null)) {
                let __args = arguments;
                let resource : any = __args[0];
                super("image");
                if(this.resource===undefined) this.resource = null;
                if(this.originalWidth===undefined) this.originalWidth = null;
                if(this.originalHeight===undefined) this.originalHeight = null;
                this.imagePath = "";
                this.imageType = "";
                if(this.resource===undefined) this.resource = null;
                if(this.originalWidth===undefined) this.originalWidth = null;
                if(this.originalHeight===undefined) this.originalHeight = null;
                (() => {
                    this.resource = resource;
                    this.imagePath = resource.getResourcePath();
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Image, this));
                })();
            } else if(imagePath === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let imagePath : any = "";
                    super("image");
                    if(this.resource===undefined) this.resource = null;
                    if(this.originalWidth===undefined) this.originalWidth = null;
                    if(this.originalHeight===undefined) this.originalHeight = null;
                    this.imagePath = "";
                    this.imageType = "";
                    if(this.resource===undefined) this.resource = null;
                    if(this.originalWidth===undefined) this.originalWidth = null;
                    if(this.originalHeight===undefined) this.originalHeight = null;
                    (() => {
                        this.imagePath = imagePath;
                        let type : string = this.imagePath.substring(this.imagePath.lastIndexOf(".") + 1);
                        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "jpg") || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "jpeg")) this.imageType = "jpeg"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "png")) this.imageType = "png"; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, "gif")) this.imageType = "gif";
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Image, this));
                    })();
                }
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @return {string}
         */
        public getImagePath() : string {
            return this.imagePath;
        }

        /**
         * 
         * @return {string}
         */
        public getImageType() : string {
            return this.imageType;
        }

        /**
         * 
         * @param {*} event
         * @return {boolean}
         */
        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.REMOVED_FROM_STAGE)) {
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED)) {
                this.parent = <splashjs.display.iface.IDisplayObjectContainer><any>event.getTarget();
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.REMOVED)) {
                this.parent = null;
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.LOADED)) {
                this.originalWidth = (<splashjs.render.display.iface.IImageRenderer><any>super.getRenderer()).getOriginalWidth();
                this.originalHeight = (<splashjs.render.display.iface.IImageRenderer><any>super.getRenderer()).getOriginalHeight();
                if(this.width === 0 && this.originalWidth !== 0) {
                    this.width = this.originalWidth;
                    (<splashjs.render.display.iface.IImageRenderer><any>super.getRenderer()).setWidth();
                }
                if(this.height === 0 && this.originalHeight !== 0) {
                    this.height = this.originalHeight;
                    (<splashjs.render.display.iface.IImageRenderer><any>super.getRenderer()).setHeight();
                }
            }
            let retValue : boolean = super.dispatchEvent(event);
            return retValue;
        }

        /**
         * 
         * @return {number}
         */
        public getWidth() : number {
            return super.getWidth();
        }

        /**
         * 
         * @return {number}
         */
        public getHeight() : number {
            return super.getHeight();
        }

        /**
         * 
         * @param {number} width
         */
        public setWidth(width : number) {
            this.width = width;
            super.setScaleX(<number>width / this.originalWidth);
        }

        /**
         * 
         * @param {number} height
         */
        public setHeight(height : number) {
            this.height = height;
            super.setScaleY(<number>height / this.originalHeight);
        }
    }
    Image["__class"] = "splashjs.display.Image";
    Image["__interfaces"] = ["splashjs.display.iface.IImage","splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.display {
    export abstract class Shape extends splashjs.display.InteractiveObject {
        public static CIRCLE : string = "circle";

        public static RECTANGLE : string = "rectangle";

        public static LINE : string = "line";

        public static ELLIPSE : string = "ellipse";

        /*private*/ strokeColor : splashjs.utils.iface.IColor = splashjs.utils.Color.BLACK_$LI$();

        /*private*/ fillColor : splashjs.utils.iface.IColor = splashjs.utils.Color.BLACK_$LI$();

        /*private*/ strokeWidth : number = 1;

        public static createCircle$() : splashjs.display.iface.ICircle {
            let circle : splashjs.display.iface.ICircle = new splashjs.display.Circle();
            return circle;
        }

        public static createCircle$int(radius : number) : splashjs.display.iface.ICircle {
            let circle : splashjs.display.iface.ICircle = new splashjs.display.Circle(radius);
            return circle;
        }

        public static createCircle(radius? : any) : any {
            if(((typeof radius === 'number') || radius === null)) {
                return <any>splashjs.display.Shape.createCircle$int(radius);
            } else if(radius === undefined) {
                return <any>splashjs.display.Shape.createCircle$();
            } else throw new Error('invalid overload');
        }

        public static createRectangle$() : splashjs.display.iface.IRectangle {
            let rectangle : splashjs.display.iface.IRectangle = new splashjs.display.Rectangle();
            return rectangle;
        }

        public static createRectangle$int$int(rectangleWidth : number, rectangleHeight : number) : splashjs.display.iface.IRectangle {
            let rectangle : splashjs.display.iface.IRectangle = new splashjs.display.Rectangle(rectangleWidth, rectangleHeight);
            return rectangle;
        }

        public static createRectangle$int$int$int$int(rectangleWidth : number, rectangleHeight : number, cornerRadiusX : number, cornerRadiusY : number) : splashjs.display.iface.IRectangle {
            let rectangle : splashjs.display.iface.IRectangle = new splashjs.display.Rectangle(rectangleWidth, rectangleHeight, cornerRadiusX, cornerRadiusY);
            return rectangle;
        }

        public static createRectangle(rectangleWidth? : any, rectangleHeight? : any, cornerRadiusX? : any, cornerRadiusY? : any) : any {
            if(((typeof rectangleWidth === 'number') || rectangleWidth === null) && ((typeof rectangleHeight === 'number') || rectangleHeight === null) && ((typeof cornerRadiusX === 'number') || cornerRadiusX === null) && ((typeof cornerRadiusY === 'number') || cornerRadiusY === null)) {
                return <any>splashjs.display.Shape.createRectangle$int$int$int$int(rectangleWidth, rectangleHeight, cornerRadiusX, cornerRadiusY);
            } else if(((typeof rectangleWidth === 'number') || rectangleWidth === null) && ((typeof rectangleHeight === 'number') || rectangleHeight === null) && cornerRadiusX === undefined && cornerRadiusY === undefined) {
                return <any>splashjs.display.Shape.createRectangle$int$int(rectangleWidth, rectangleHeight);
            } else if(rectangleWidth === undefined && rectangleHeight === undefined && cornerRadiusX === undefined && cornerRadiusY === undefined) {
                return <any>splashjs.display.Shape.createRectangle$();
            } else throw new Error('invalid overload');
        }

        public static createLine$() : splashjs.display.iface.ILine {
            let line : splashjs.display.iface.ILine = new splashjs.display.Line();
            return line;
        }

        public static createLine$int(length : number) : splashjs.display.iface.ILine {
            let line : splashjs.display.iface.ILine = new splashjs.display.Line(length);
            return line;
        }

        public static createLine(length? : any) : any {
            if(((typeof length === 'number') || length === null)) {
                return <any>splashjs.display.Shape.createLine$int(length);
            } else if(length === undefined) {
                return <any>splashjs.display.Shape.createLine$();
            } else throw new Error('invalid overload');
        }

        public static createEllipse$() : splashjs.display.iface.IEllipse {
            let ellipse : splashjs.display.iface.IEllipse = new splashjs.display.Ellipse();
            return ellipse;
        }

        public static createEllipse$int$int(radiusX : number, radiusY : number) : splashjs.display.iface.IEllipse {
            let ellipse : splashjs.display.iface.IEllipse = new splashjs.display.Ellipse(radiusX, radiusY);
            return ellipse;
        }

        public static createEllipse(radiusX? : any, radiusY? : any) : any {
            if(((typeof radiusX === 'number') || radiusX === null) && ((typeof radiusY === 'number') || radiusY === null)) {
                return <any>splashjs.display.Shape.createEllipse$int$int(radiusX, radiusY);
            } else if(radiusX === undefined && radiusY === undefined) {
                return <any>splashjs.display.Shape.createEllipse$();
            } else throw new Error('invalid overload');
        }

        public constructor(id : string) {
            super(id);
        }

        public setStrokeWidth(strokeWidth : number) {
            this.strokeWidth = strokeWidth;
            super.getRenderer().update();
        }

        public getStrokeWidth() : number {
            return this.strokeWidth;
        }

        public setStrokeColor(strokeColor : splashjs.utils.iface.IColor) {
            this.strokeColor = strokeColor;
            super.getRenderer().update();
        }

        public getStrokeColor() : splashjs.utils.iface.IColor {
            return this.strokeColor;
        }

        public setFillColor(fillColor : splashjs.utils.iface.IColor) {
            this.fillColor = fillColor;
            super.getRenderer().update();
        }

        public getFillColor() : splashjs.utils.iface.IColor {
            return this.fillColor;
        }

        /**
         * 
         * @return {number}
         */
        public getWidth() : number {
            return super.getRenderer().getOriginalWidth();
        }

        /**
         * 
         * @return {number}
         */
        public getHeight() : number {
            return super.getRenderer().getOriginalHeight();
        }

        /**
         * 
         * @param {number} width
         */
        public setWidth(width : number) {
        }

        /**
         * 
         * @param {number} height
         */
        public setHeight(height : number) {
        }
    }
    Shape["__class"] = "splashjs.display.Shape";
    Shape["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.display {
    export class SimpleButton extends splashjs.display.InteractiveObject implements splashjs.display.iface.ISimpleButton {
        /*private*/ upState : splashjs.display.iface.IDisplayObject = null;

        /*private*/ downState : splashjs.display.iface.IDisplayObject = null;

        /*private*/ overState : splashjs.display.iface.IDisplayObject = null;

        /*private*/ disabledState : splashjs.display.iface.IDisplayObject = null;

        /*private*/ enabled : boolean = true;

        public constructor() {
            super("button");
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(SimpleButton, this));
        }

        /**
         * 
         * @param {*} event
         * @return {boolean}
         */
        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED)) {
                this.parent = <splashjs.display.iface.IDisplayObjectContainer><any>event.getTarget();
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.REMOVED)) {
                this.parent = null;
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.MouseEvent.MOUSE_OVER)) {
                if(this.enabled === true && this.overState != null) {
                    if(this.upState != null) this.upState.setVisible(false);
                    if(this.downState != null) this.downState.setVisible(false);
                    this.overState.setVisible(true);
                }
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.MouseEvent.MOUSE_DOWN)) {
                if(this.enabled === true && this.downState != null) {
                    if(this.upState != null) this.upState.setVisible(false);
                    if(this.overState != null) this.overState.setVisible(false);
                    this.downState.setVisible(true);
                }
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.MouseEvent.MOUSE_UP)) {
                if(this.enabled === true && this.overState != null) {
                    if(this.upState != null) this.upState.setVisible(false);
                    if(this.downState != null) this.downState.setVisible(false);
                    this.overState.setVisible(true);
                }
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.MouseEvent.MOUSE_OUT)) {
                if(this.enabled === true && this.upState != null) {
                    if(this.overState != null) this.overState.setVisible(false);
                    if(this.downState != null) this.downState.setVisible(false);
                    this.upState.setVisible(true);
                }
            }
            return super.dispatchEvent(event);
        }

        public setUpState(upState : splashjs.display.iface.IDisplayObject) {
            this.upState = upState;
            if(super.getRenderer() != null) {
                (<splashjs.render.display.iface.ISimpleButtonRenderer><any>super.getRenderer()).setUpState();
            }
        }

        public getUpState() : splashjs.display.iface.IDisplayObject {
            return this.upState;
        }

        public setDownState(downState : splashjs.display.iface.IDisplayObject) {
            this.downState = downState;
            if(super.getRenderer() != null) {
                (<splashjs.render.display.iface.ISimpleButtonRenderer><any>super.getRenderer()).setDownState();
            }
        }

        public getDownState() : splashjs.display.iface.IDisplayObject {
            return this.downState;
        }

        public setOverState(overState : splashjs.display.iface.IDisplayObject) {
            this.overState = overState;
            if(super.getRenderer() != null) {
                (<splashjs.render.display.iface.ISimpleButtonRenderer><any>super.getRenderer()).setOverState();
            }
        }

        public getOverState() : splashjs.display.iface.IDisplayObject {
            return this.overState;
        }

        public setDisabledState(disabledState : splashjs.display.iface.IDisplayObject) {
            this.disabledState = disabledState;
            if(super.getRenderer() != null) {
                (<splashjs.render.display.iface.ISimpleButtonRenderer><any>super.getRenderer()).setDisabledState();
            }
        }

        public getDisabledState() : splashjs.display.iface.IDisplayObject {
            return this.disabledState;
        }

        public setEnabled(enabled : boolean) {
            this.enabled = enabled;
            if(super.getRenderer() != null) {
                (<splashjs.render.display.iface.ISimpleButtonRenderer><any>super.getRenderer()).setEnabled();
            }
        }

        public getEnabled() : boolean {
            return this.enabled;
        }

        public isEnabled() : boolean {
            return this.enabled;
        }

        public render() {
            super.render();
        }
    }
    SimpleButton["__class"] = "splashjs.display.SimpleButton";
    SimpleButton["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.display.iface.ISimpleButton","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.text {
    export abstract class Text extends splashjs.display.InteractiveObject implements splashjs.text.iface.IText {
        /*private*/ text : string = null;

        /*private*/ fontSize : number = 12;

        /*private*/ fontStyle : string = splashjs.text.FontStyle.NORMAL;

        /*private*/ fontWeight : string = splashjs.text.FontWeight.NORMAL;

        /*private*/ color : splashjs.utils.iface.IColor = splashjs.utils.Color.BLACK_$LI$();

        /*private*/ selectable : boolean = true;

        /*private*/ textFormat : splashjs.text.iface.ITextFormat = null;

        /*private*/ font : splashjs.text.iface.IFont;

        public constructor(id : string) {
            super(id);
            if(this.font===undefined) this.font = null;
        }

        public setText(text : string) {
            this.text = text;
            if(text != null) (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).setText();
        }

        public getText() : string {
            return this.text;
        }

        public setFontSize(fontSize : number) {
            this.fontSize = fontSize;
            (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).setFontSize();
        }

        public getFontSize() : number {
            return this.fontSize;
        }

        public setFontStyle(fontStyle : string) {
            this.fontStyle = fontStyle;
            (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).setFontStyle();
        }

        public getFontStyle() : string {
            return this.fontStyle;
        }

        public setFontWeight(fontWeight : string) {
            this.fontWeight = fontWeight;
            (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).setFontWeight();
        }

        public getFontWeight() : string {
            return this.fontWeight;
        }

        public setColor(color : splashjs.utils.iface.IColor) {
            this.color = color;
            (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).setColor();
        }

        public getColor() : splashjs.utils.iface.IColor {
            return this.color;
        }

        public setFont(font : splashjs.text.iface.IFont) {
            this.font = font;
            (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).setFont();
        }

        public getFont() : splashjs.text.iface.IFont {
            return this.font;
        }

        public setTextFormat(textFormat : splashjs.text.iface.ITextFormat) {
            this.textFormat = textFormat;
            (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).setTextFormat();
        }

        public getTextFormat() : splashjs.text.iface.ITextFormat {
            return this.textFormat;
        }

        public setSelectable(selectable : boolean) {
            this.selectable = selectable;
            (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).setSelectable();
        }

        public isSelectable() : boolean {
            return this.selectable;
        }

        public render() {
            super.render();
            (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).setText();
            (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).setSelectable();
            (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).setColor();
            (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).setFont();
            (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).setFontSize();
            (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).setFontStyle();
            (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).setFontWeight();
        }
    }
    Text["__class"] = "splashjs.text.Text";
    Text["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.text.iface.IText"];


}
namespace splashjs.layout {
    export abstract class BoxLayout extends splashjs.layout.Layout implements splashjs.layout.iface.IBoxLayout {
        public constructor(id? : any) {
            if(((typeof id === 'string') || id === null)) {
                let __args = arguments;
                super(id);
            } else if(id === undefined) {
                let __args = arguments;
                super();
            } else throw new Error('invalid overload');
        }

        public setHAlign(hAlign : string) {
            (<splashjs.render.layout.iface.IBoxLayoutRenderer><any>super.getRenderer()).setHAlign(hAlign);
        }

        public abstract refreshLayout(): any;    }
    BoxLayout["__class"] = "splashjs.layout.BoxLayout";
    BoxLayout["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.layout.iface.ILayout","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.layout.iface.IBoxLayout"];


}
namespace splashjs.layout {
    export class GridLayout extends splashjs.layout.Layout implements splashjs.layout.iface.IGridLayout {
        /*private*/ row : number;

        /*private*/ col : number;

        /*private*/ children : Array<splashjs.display.iface.IDisplayObject>;

        public constructor(row : number, col : number) {
            super("gridLayout");
            if(this.row===undefined) this.row = 0;
            if(this.col===undefined) this.col = 0;
            if(this.children===undefined) this.children = null;
            this.row = row;
            this.col = col;
            this.children = <any>([]);
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(GridLayout, this));
        }

        public refreshLayout() {
        }

        public render() {
            super.render();
        }

        public getRow() : number {
            return this.row;
        }

        public getCol() : number {
            return this.col;
        }

        public add(displayObject : splashjs.display.iface.IDisplayObject, rowNum : number, colNum : number) {
            /* add */(this.children.push(displayObject)>0);
            displayObject.render();
        }
    }
    GridLayout["__class"] = "splashjs.layout.GridLayout";
    GridLayout["__interfaces"] = ["splashjs.layout.iface.IGridLayout","splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.layout.iface.ILayout","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.media {
    export class Sound extends splashjs.media.Media implements splashjs.media.iface.ISound {
        /*private*/ resource : splashjs.utils.iface.IResource;

        /*private*/ soundPath : string;

        public constructor(resource? : any) {
            if(((resource != null && (resource["__interfaces"] != null && resource["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0 || resource.constructor != null && resource.constructor["__interfaces"] != null && resource.constructor["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0)) || resource === null)) {
                let __args = arguments;
                super("sound");
                if(this.resource===undefined) this.resource = null;
                if(this.soundPath===undefined) this.soundPath = null;
                if(this.resource===undefined) this.resource = null;
                if(this.soundPath===undefined) this.soundPath = null;
                (() => {
                    this.soundPath = resource.getResourcePath();
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Sound, this));
                })();
            } else if(((resource != null && (resource["__interfaces"] != null && resource["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0 || resource.constructor != null && resource.constructor["__interfaces"] != null && resource.constructor["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0)) || resource === null)) {
                let __args = arguments;
                let stage : any = __args[0];
                super("sound");
                if(this.resource===undefined) this.resource = null;
                if(this.soundPath===undefined) this.soundPath = null;
                if(this.resource===undefined) this.resource = null;
                if(this.soundPath===undefined) this.soundPath = null;
            } else if(((typeof resource === 'string') || resource === null)) {
                let __args = arguments;
                let soundPath : any = __args[0];
                super("sound");
                if(this.resource===undefined) this.resource = null;
                if(this.soundPath===undefined) this.soundPath = null;
                if(this.resource===undefined) this.resource = null;
                if(this.soundPath===undefined) this.soundPath = null;
                (() => {
                    this.soundPath = soundPath;
                })();
            } else throw new Error('invalid overload');
        }

        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
            }
            return super.dispatchEvent(event);
        }

        /**
         * 
         */
        public render() {
            super.render();
        }

        public play() {
            if(super.getRenderer() != null) (<splashjs.render.media.iface.ISoundRenderer><any>super.getRenderer()).playSound();
        }

        public pause() {
            if(super.getRenderer() != null) (<splashjs.render.media.iface.ISoundRenderer><any>super.getRenderer()).pauseSound();
        }

        public toString() : string {
            return "[object Sound]";
        }
    }
    Sound["__class"] = "splashjs.media.Sound";
    Sound["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.lang.iface.ISplashObject","splashjs.media.iface.IMedia","splashjs.media.iface.ISound","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.media {
    export class Video extends splashjs.media.Media implements splashjs.media.iface.IVideo {
        /*private*/ resource : splashjs.utils.iface.IResource;

        /*private*/ videoPath : string;

        /*private*/ camera : splashjs.media.iface.ICamera;

        /*private*/ netStream : splashjs.net.iface.INetStream;

        public constructor(width? : any, height? : any) {
            if(((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
                let __args = arguments;
                super("video");
                if(this.resource===undefined) this.resource = null;
                if(this.videoPath===undefined) this.videoPath = null;
                if(this.camera===undefined) this.camera = null;
                if(this.netStream===undefined) this.netStream = null;
                if(this.resource===undefined) this.resource = null;
                if(this.videoPath===undefined) this.videoPath = null;
                if(this.camera===undefined) this.camera = null;
                if(this.netStream===undefined) this.netStream = null;
                (() => {
                    this.width = width;
                    this.height = height;
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Video, this));
                })();
            } else if(((width != null && (width["__interfaces"] != null && width["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0 || width.constructor != null && width.constructor["__interfaces"] != null && width.constructor["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0)) || width === null) && height === undefined) {
                let __args = arguments;
                let resource : any = __args[0];
                super("video");
                if(this.resource===undefined) this.resource = null;
                if(this.videoPath===undefined) this.videoPath = null;
                if(this.camera===undefined) this.camera = null;
                if(this.netStream===undefined) this.netStream = null;
                if(this.resource===undefined) this.resource = null;
                if(this.videoPath===undefined) this.videoPath = null;
                if(this.camera===undefined) this.camera = null;
                if(this.netStream===undefined) this.netStream = null;
                (() => {
                    this.videoPath = resource.getResourcePath();
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Video, this));
                })();
            } else if(((typeof width === 'string') || width === null) && height === undefined) {
                let __args = arguments;
                let videoPath : any = __args[0];
                super("video");
                if(this.resource===undefined) this.resource = null;
                if(this.videoPath===undefined) this.videoPath = null;
                if(this.camera===undefined) this.camera = null;
                if(this.netStream===undefined) this.netStream = null;
                if(this.resource===undefined) this.resource = null;
                if(this.videoPath===undefined) this.videoPath = null;
                if(this.camera===undefined) this.camera = null;
                if(this.netStream===undefined) this.netStream = null;
                (() => {
                    this.videoPath = videoPath;
                })();
            } else throw new Error('invalid overload');
        }

        public attachCamera(camera : splashjs.media.iface.ICamera) {
            this.camera = camera;
            (<splashjs.render.media.iface.IVideoRenderer><any>super.getRenderer()).attachCamera(camera);
        }

        public attachNetStream(netStream : splashjs.net.iface.INetStream) {
            this.netStream = netStream;
            this.netStream.setVideoAttached(this);
            (<splashjs.render.media.iface.IVideoRenderer><any>super.getRenderer()).attachNetStream(netStream);
        }

        public getCamera() : splashjs.media.iface.ICamera {
            return this.camera;
        }

        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            let val : boolean = super.dispatchEvent(event);
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
            }
            return val;
        }

        /**
         * 
         */
        public render() {
            super.render();
        }

        public play() {
            (<splashjs.render.media.iface.IVideoRenderer><any>super.getRenderer()).playVideo();
        }

        public toString() : string {
            return "[object Video]";
        }
    }
    Video["__class"] = "splashjs.media.Video";
    Video["__interfaces"] = ["splashjs.media.iface.IVideo","splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.lang.iface.ISplashObject","splashjs.media.iface.IMedia","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.render.animation {
    export abstract class TransitionRenderer extends splashjs.render.animation.AnimationRenderer implements splashjs.render.animation.iface.ITransitionRenderer {
        animTimer : splashjs.utils.iface.ITimer;

        delayTimer : splashjs.utils.iface.ITimer;

        repeatCount : number;

        currentState : string = splashjs.animation.TransitionState.NONE;

        fps : number = 60;

        deltaTime : number = (1000 / this.fps|0);

        /*private*/ transition : splashjs.animation.iface.ITransition;

        /*private*/ currentLoopCount : number = 0;

        /*private*/ running : boolean = false;

        /*private*/ transitionEvent : splashjs.events.iface.ITransitionEvent = null;

        ctr : number = 0;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.animTimer===undefined) this.animTimer = null;
            if(this.delayTimer===undefined) this.delayTimer = null;
            if(this.repeatCount===undefined) this.repeatCount = 0;
            if(this.transition===undefined) this.transition = null;
            super.setRenderObject(renderObject);
            this.transition = (<splashjs.animation.iface.ITransition><any>this.getRenderObject());
        }

        public play() {
            this.repeatCount = (<number>((this.transition.getDuration() / this.deltaTime|0))|0);
            this.animTimer = new splashjs.utils.Timer(this.deltaTime, this.repeatCount);
            console.info(this.deltaTime + " " + this.repeatCount);
            this.animTimer.addEventListener(splashjs.events.TimerEvent.TIMER, (event) => {
                let currentTime : number = this.deltaTime * (this.animTimer.getCurrentCount() + 1);
                let nextValue : number = 0.0;
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.currentState, splashjs.animation.TransitionState.NORMAL)) nextValue = this.getNextValue(currentTime, this.transition.getFrom(), this.transition.getTo(), this.transition.getDuration(), this.transition.getEasing()); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.currentState, splashjs.animation.TransitionState.REVERSE)) nextValue = this.getNextValue(currentTime, this.transition.getTo(), this.transition.getFrom(), this.transition.getDuration(), this.transition.getEasing());
                this.transition.update(nextValue);
                this.ctr++;
                console.info("nextValue: " + nextValue + " ctr: " + this.ctr + " currentCount: " + this.animTimer.getCurrentCount() + " repeatCount: " + this.repeatCount);
            });
            this.animTimer.addEventListener(splashjs.events.TimerEvent.TIMER_COMPLETE, (event) => {
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.currentState, splashjs.animation.TransitionState.NORMAL)) this.transition.update(this.transition.getTo()); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.currentState, splashjs.animation.TransitionState.REVERSE)) this.transition.update(this.transition.getFrom());
                if(this.transition.getAutoReverse() === true) {
                    this.currentLoopCount += 1;
                    if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.currentState, splashjs.animation.TransitionState.NORMAL)) this.currentState = splashjs.animation.TransitionState.REVERSE; else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.currentState, splashjs.animation.TransitionState.REVERSE)) this.currentState = splashjs.animation.TransitionState.NORMAL;
                } else {
                    this.currentLoopCount += 2;
                }
                if(this.running === true && (this.transition.getLoopCount() === 0 || this.currentLoopCount < this.transition.getLoopCount() * 2)) {
                    this.animTimer.reset();
                    this.animTimer.start();
                } else {
                    this.running = false;
                    let transitionEvent : splashjs.events.iface.ITransitionEvent = new splashjs.events.TransitionEvent(splashjs.events.TransitionEvent.COMPLETE);
                    this.transition.dispatchEvent(transitionEvent);
                }
                if(this.transition.getLoopCount() <= this.currentLoopCount) {
                    this.transitionEvent = new splashjs.events.TransitionEvent(splashjs.events.TransitionEvent.LOOP_INTERVAL_COMPLETE, this.transition, this.transition);
                    this.transition.dispatchEvent(this.transitionEvent);
                }
                if(this.transition.getLoopCount() === this.currentLoopCount) {
                    this.transitionEvent = new splashjs.events.TransitionEvent(splashjs.events.TransitionEvent.COMPLETE, this.transition, this.transition);
                    this.transition.dispatchEvent(this.transitionEvent);
                    this.currentState = splashjs.animation.TransitionState.NONE;
                }
            });
            if(this.transition.getDelay() > 0) {
                this.delayTimer = new splashjs.utils.Timer(this.transition.getDelay(), 1);
                this.delayTimer.addEventListener(splashjs.events.TimerEvent.TIMER_COMPLETE, (event) => {
                    this.transitionEvent = new splashjs.events.TransitionEvent(splashjs.events.TransitionEvent.DELAY_COMPLETE, this.transition, this.transition);
                    this.transition.dispatchEvent(this.transitionEvent);
                    this.animTimer.start();
                });
                this.running = true;
                this.currentState = splashjs.animation.TransitionState.NORMAL;
                this.delayTimer.start();
            } else {
                this.running = true;
                this.currentState = splashjs.animation.TransitionState.NORMAL;
                this.animTimer.start();
            }
        }

        public stop() {
            this.running = false;
        }

        public isRunning() : boolean {
            return this.running;
        }

        /*private*/ getNextValue(currentTime : number, from : number, to : number, duration : number, easing : string) : number {
            let nextValue : number = 0.0;
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, splashjs.animation.easing.Linear.EASE_NONE)) {
                nextValue = splashjs.animation.easing.Linear.easeNone(currentTime, from, to - from, duration);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, splashjs.animation.easing.Linear.EASE_IN)) {
                nextValue = splashjs.animation.easing.Linear.easeIn(currentTime, from, to - from, duration);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, splashjs.animation.easing.Linear.EASE_OUT)) {
                nextValue = splashjs.animation.easing.Linear.easeOut(currentTime, from, to - from, duration);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, splashjs.animation.easing.Linear.EASE_IN_OUT)) {
                nextValue = splashjs.animation.easing.Linear.easeInOut(currentTime, from, to - from, duration);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, splashjs.animation.easing.Elastic.EASE_IN)) {
                nextValue = splashjs.animation.easing.Elastic.easeIn$double$double$double$double(currentTime, from, to - from, duration);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, splashjs.animation.easing.Elastic.EASE_OUT)) {
                nextValue = splashjs.animation.easing.Elastic.easeOut$double$double$double$double(currentTime, from, to - from, duration);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, splashjs.animation.easing.Elastic.EASE_IN_OUT)) {
                nextValue = splashjs.animation.easing.Elastic.easeInOut$double$double$double$double(currentTime, from, to - from, duration);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, splashjs.animation.easing.Quint.EASE_IN)) {
                nextValue = splashjs.animation.easing.Quint.easeIn(currentTime, from, to - from, duration);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, splashjs.animation.easing.Quint.EASE_OUT)) {
                nextValue = splashjs.animation.easing.Quint.easeOut(currentTime, from, to - from, duration);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(easing, splashjs.animation.easing.Quint.EASE_IN_OUT)) {
                nextValue = splashjs.animation.easing.Quint.easeInOut(currentTime, from, to - from, duration);
            }
            return nextValue;
        }

        public getTransitionState() : string {
            return this.currentState;
        }

        public static create(inparams : any) : splashjs.animation.iface.ITransition {
            let params : Object = <Object>inparams;
            let transition : splashjs.animation.iface.ITransition = null;
            let type : string = <any>(params["type"]);
            if(type != null && !/* isEmpty */(type.length === 0)) {
                let target : splashjs.display.iface.IDisplayObject;
                let from : number;
                let to : number;
                let ease : string;
                let duration : number;
                let autoReverse : boolean;
                let loopCount : number;
                let delay : number;
                let onComplete : Function;
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, splashjs.animation.TransitionType.SCALE_X) || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, splashjs.animation.TransitionType.SCALE_X) || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, splashjs.animation.TransitionType.SCALE_XY)) {
                    transition = new splashjs.animation.ScaleTransition();
                    target = <any>(params["target"]);
                    from = <any>(params["from"]);
                    to = <any>(params["to"]);
                    ease = params["ease"] === undefined?transition.getEasing():<any>(params["ease"]);
                    duration = params["duration"] === undefined?transition.getDuration():<any>(params["duration"]);
                    autoReverse = params["autoReverse"] === undefined?transition.getAutoReverse():<any>(params["autoReverse"]);
                    loopCount = params["loopCount"] === undefined?transition.getLoopCount():<any>(params["loopCount"]);
                    delay = <any>(params["delay"]);
                    onComplete = <any>(params["onComplete"]);
                    transition.setTargetObject(target).setFrom(from).setTo(to).setDuration(duration).setAutoReverse(autoReverse).setLoopCount(loopCount).setDelay(delay).setEasing(ease).addEventListener(splashjs.events.TransitionEvent.COMPLETE, ((onComplete) => {
                        return (event) => {
                            onComplete(event);
                        }
                    })(onComplete));
                }
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, splashjs.animation.TransitionType.SCALE_X)) (<splashjs.animation.iface.IScaleTransition><any>transition).setScaleTransitionType(splashjs.animation.ScaleTransitionType.X); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, splashjs.animation.TransitionType.SCALE_Y)) (<splashjs.animation.iface.IScaleTransition><any>transition).setScaleTransitionType(splashjs.animation.ScaleTransitionType.Y); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(type, splashjs.animation.TransitionType.SCALE_XY)) (<splashjs.animation.iface.IScaleTransition><any>transition).setScaleTransitionType(splashjs.animation.ScaleTransitionType.XY);
            }
            return transition;
        }
    }
    TransitionRenderer["__class"] = "splashjs.render.animation.TransitionRenderer";
    TransitionRenderer["__interfaces"] = ["splashjs.render.animation.iface.ITransitionRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.display {
    export class BitmapRenderer extends splashjs.render.display.DisplayObjectRenderer implements splashjs.render.display.iface.IBitmapRenderer {
        /*private*/ imageElement : HTMLImageElement;

        /*private*/ bitmap : splashjs.display.iface.IBitmap;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.imageElement===undefined) this.imageElement = null;
            if(this.bitmap===undefined) this.bitmap = null;
            super.setRenderObject(renderObject);
            this.bitmap = <splashjs.display.iface.IBitmap><any>renderObject;
            this.imageElement = <HTMLImageElement>document.createElement("img");
            super.setRenderElement(new splashjs.render.RenderElement(this.imageElement));
            this.create();
        }

        public create() {
            let bitmapData : splashjs.display.iface.IBitmapData = this.bitmap.getBitmapData();
            let bitmapDataWidth : number = bitmapData.getBitmapDataWidth();
            let bitmapDataHeight : number = bitmapData.getBitmapDataHeight();
            let blob : Blob = (<splashjs.render.display.iface.IBitmapDataRenderer><any>bitmapData.getRenderer()).getBlob();
            this.imageElement.src = URL.createObjectURL(blob);
            this.imageElement.width = bitmapDataWidth;
            this.imageElement.height = bitmapDataHeight;
        }
    }
    BitmapRenderer["__class"] = "splashjs.render.display.BitmapRenderer";
    BitmapRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.display.iface.IBitmapRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.display {
    export abstract class InteractiveObjectRenderer extends splashjs.render.display.DisplayObjectRenderer implements splashjs.render.display.iface.IInteractiveObjectRenderer {
        constructor() {
            super();
        }
    }
    InteractiveObjectRenderer["__class"] = "splashjs.render.display.InteractiveObjectRenderer";
    InteractiveObjectRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.layout {
    export class ContainerRenderer extends splashjs.render.display.DisplayObjectRenderer implements splashjs.render.layout.iface.IContainerRenderer {
        /*private*/ container : splashjs.layout.iface.IContainer;

        /*private*/ htmlDivElement : HTMLDivElement;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.container===undefined) this.container = null;
            if(this.htmlDivElement===undefined) this.htmlDivElement = null;
            this.container = <splashjs.layout.iface.IContainer><any>renderObject;
            super.setRenderObject(renderObject);
            this.htmlDivElement = <HTMLDivElement>document.createElement("div");
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlDivElement));
            this.create();
        }

        public create() {
            let theOnlyMember : splashjs.display.iface.IDisplayObject = this.container.getTheOnlyMember();
            if(theOnlyMember != null && (theOnlyMember != null && (theOnlyMember["__interfaces"] != null && theOnlyMember["__interfaces"].indexOf("splashjs.display.iface.IDisplayObject") >= 0 || theOnlyMember.constructor != null && theOnlyMember.constructor["__interfaces"] != null && theOnlyMember.constructor["__interfaces"].indexOf("splashjs.display.iface.IDisplayObject") >= 0))) {
                this.htmlDivElement.appendChild(theOnlyMember.getRenderer().getDOMElement());
            }
        }

        public applyCSS() {
            super.applyCSS();
            this.htmlDivElement.style.border = "0px dotted green";
            this.htmlDivElement.style.display = "flex";
            this.htmlDivElement.style.position = "static";
            this.htmlDivElement.style.overflow = "auto";
        }

        public getWidth() : number {
            return (<number>this.htmlDivElement.clientWidth|0);
        }

        public getHeight() : number {
            return (<number>this.htmlDivElement.clientHeight|0);
        }
    }
    ContainerRenderer["__class"] = "splashjs.render.layout.ContainerRenderer";
    ContainerRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.layout.iface.IContainerRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.layout {
    export abstract class LayoutRenderer extends splashjs.render.display.DisplayObjectRenderer implements splashjs.render.layout.iface.ILayoutRenderer {
        public setPadding$int$int$int$int(left : number, top : number, right : number, bottom : number) {
            (<HTMLElement>super.getRenderElement().getDOMElement()).style.paddingLeft = left + "px";
            (<HTMLElement>super.getRenderElement().getDOMElement()).style.paddingTop = top + "px";
            (<HTMLElement>super.getRenderElement().getDOMElement()).style.paddingRight = right + "px";
            (<HTMLElement>super.getRenderElement().getDOMElement()).style.paddingBottom = bottom + "px";
        }

        public setPadding(left? : any, top? : any, right? : any, bottom? : any) : any {
            if(((typeof left === 'number') || left === null) && ((typeof top === 'number') || top === null) && ((typeof right === 'number') || right === null) && ((typeof bottom === 'number') || bottom === null)) {
                return <any>this.setPadding$int$int$int$int(left, top, right, bottom);
            } else if(((typeof left === 'string') || left === null) && top === undefined && right === undefined && bottom === undefined) {
                super.setPadding(left);
            } else throw new Error('invalid overload');
        }

        public setTopPadding(top : number) {
            (<HTMLElement>super.getRenderElement().getDOMElement()).style.paddingTop = top + "px";
        }

        public setBottomPadding(bottom : number) {
            (<HTMLElement>super.getRenderElement().getDOMElement()).style.paddingBottom = bottom + "px";
        }

        public setLeftPadding(left : number) {
            (<HTMLElement>super.getRenderElement().getDOMElement()).style.paddingLeft = left + "px";
        }

        public setRightPadding(right : number) {
            (<HTMLElement>super.getRenderElement().getDOMElement()).style.paddingRight = right + "px";
        }

        public getWidth() : number {
            return (<number>super.getRenderElement().getDOMElement().clientWidth|0);
        }

        public getHeight() : number {
            return (<number>super.getRenderElement().getDOMElement().clientHeight|0);
        }

        public abstract refreshLayout(): any;
        constructor() {
            super();
        }
    }
    LayoutRenderer["__class"] = "splashjs.render.layout.LayoutRenderer";
    LayoutRenderer["__interfaces"] = ["splashjs.render.layout.iface.ILayoutRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.media {
    export abstract class MediaRenderer extends splashjs.render.display.DisplayObjectRenderer implements splashjs.render.media.iface.IMediaRenderer {
        public abstract setPath(): any;
        constructor() {
            super();
        }
    }
    MediaRenderer["__class"] = "splashjs.render.media.MediaRenderer";
    MediaRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.media.iface.IMediaRenderer"];


}
namespace splashjs.controls {
    export abstract class BaseList extends splashjs.controls.Control implements splashjs.controls.iface.IBaseList {
        public constructor(id : string) {
            super(id);
        }
    }
    BaseList["__class"] = "splashjs.controls.BaseList";
    BaseList["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl","splashjs.controls.iface.IBaseList"];


}
namespace splashjs.controls {
    export abstract class BaseText extends splashjs.controls.Control implements splashjs.controls.iface.IBaseText {
        text : string;

        public constructor(id : string) {
            super(id);
            if(this.text===undefined) this.text = null;
        }

        public setText(text : string) {
            this.text = text;
            if(super.getRenderer() != null) (<splashjs.render.controls.iface.IBaseTextRenderer><any>super.getRenderer()).setText();
        }

        public getText() : string {
            return this.text;
        }
    }
    BaseText["__class"] = "splashjs.controls.BaseText";
    BaseText["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl","splashjs.controls.iface.IBaseText"];


}
namespace splashjs.controls {
    export class RadioButton extends splashjs.controls.Control implements splashjs.controls.iface.IRadioButton {
        /*private*/ label : splashjs.controls.iface.ILabel;

        /*private*/ group : splashjs.controls.iface.IRadioButtonGroup;

        /*private*/ selected : boolean = false;

        /*private*/ value : splashjs.lang.iface.ISplashObject;

        public constructor() {
            super("radioButton");
            if(this.label===undefined) this.label = null;
            if(this.group===undefined) this.group = null;
            if(this.value===undefined) this.value = null;
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(RadioButton, this));
        }

        public setValue(value : splashjs.lang.iface.ISplashObject) {
            this.value = value;
        }

        public getValue() : splashjs.lang.iface.ISplashObject {
            return this.value;
        }

        public setSelected(selected : boolean) {
            if(this.selected !== selected) {
                this.selected = selected;
                if(super.getRenderer() != null) (<splashjs.render.controls.iface.IRadioButtonRenderer><any>super.getRenderer()).setSelected();
            }
        }

        public getSelected() : boolean {
            return this.selected;
        }

        public isSelected() : boolean {
            return this.getSelected();
        }

        public setGroup(group : splashjs.controls.iface.IRadioButtonGroup) {
            this.group = group;
            if(super.getRenderer() != null) (<splashjs.render.controls.iface.IRadioButtonRenderer><any>super.getRenderer()).setGroup();
        }

        public getGroup() : splashjs.controls.iface.IRadioButtonGroup {
            return this.group;
        }

        public setLabel(label : splashjs.controls.iface.ILabel) {
            this.label = label;
        }

        public getLabel() : splashjs.controls.iface.ILabel {
            return this.label;
        }

        public render() {
            super.render();
            (<splashjs.render.controls.iface.IRadioButtonRenderer><any>super.getRenderer()).setGroup();
            (<splashjs.render.controls.iface.IRadioButtonRenderer><any>super.getRenderer()).setSelected();
        }
    }
    RadioButton["__class"] = "splashjs.controls.RadioButton";
    RadioButton["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.controls.iface.IRadioButton","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl"];


}
namespace splashjs.controls {
    export class Spacer extends splashjs.controls.Control implements splashjs.controls.iface.ISpacer {
        public constructor() {
            super("spacer");
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Spacer, this));
        }
    }
    Spacer["__class"] = "splashjs.controls.Spacer";
    Spacer["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.controls.iface.ISpacer","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl"];


}
namespace splashjs.controls {
    export class Tree extends splashjs.controls.Control implements splashjs.controls.iface.ITree {
        /*private*/ treeData : any;

        public constructor(treeData? : any) {
            if(((treeData != null) || treeData === null)) {
                let __args = arguments;
                super("tree");
                if(this.treeData===undefined) this.treeData = null;
                if(this.treeData===undefined) this.treeData = null;
                (() => {
                    this.treeData = treeData;
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Tree, this));
                })();
            } else if(treeData === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let treeData : any = null;
                    super("tree");
                    if(this.treeData===undefined) this.treeData = null;
                    if(this.treeData===undefined) this.treeData = null;
                    (() => {
                        this.treeData = treeData;
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Tree, this));
                    })();
                }
            } else throw new Error('invalid overload');
        }

        public getTreeData() : any {
            return this.treeData;
        }
    }
    Tree["__class"] = "splashjs.controls.Tree";
    Tree["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.controls.iface.ITree","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl"];


}
namespace splashjs.display {
    export class Sprite extends splashjs.display.DisplayObjectContainer implements splashjs.display.iface.ISprite, splashjs.display.iface.IDraggable {
        /*private*/ draggable : boolean;

        public constructor(id? : any) {
            if(((typeof id === 'string') || id === null)) {
                let __args = arguments;
                super(id);
                this.draggable = false;
                (() => {
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Sprite, this));
                })();
            } else if(id === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    let id : any = "sprite";
                    super(id);
                    this.draggable = false;
                    (() => {
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Sprite, this));
                    })();
                }
            } else throw new Error('invalid overload');
        }

        /**
         * 
         */
        public render() {
            super.render();
            (<splashjs.render.display.iface.ISpriteRenderer><any>super.getRenderer()).setBorder("0px solid olive");
        }

        public startDrag() {
            this.draggable = true;
        }

        public stopDrag() {
            this.draggable = false;
        }

        public getDraggable() : boolean {
            return this.draggable;
        }

        /**
         * 
         * @return {number}
         */
        public getWidth() : number {
            let leftX : number = 0;
            let rightX : number = 0;
            if(/* size */(<number>this.children.length) > 0) {
                leftX = /* get */this.children[0].getX();
                rightX = /* get */this.children[0].getX() + /* get */this.children[0].getWidth();
                for(let index131=0; index131 < this.children.length; index131++) {
                    let child = this.children[index131];
                    {
                        if(leftX > child.getX()) leftX = child.getX();
                        if(rightX < (child.getX() + child.getWidth())) rightX = (child.getX() + child.getWidth());
                    }
                }
            }
            return (rightX - leftX);
        }

        /**
         * 
         * @return {number}
         */
        public getHeight() : number {
            let topY : number = 0;
            let bottomY : number = 0;
            if(/* size */(<number>this.children.length) > 0) {
                topY = /* get */this.children[0].getY();
                bottomY = /* get */this.children[0].getY() + /* get */this.children[0].getHeight();
                for(let index132=0; index132 < this.children.length; index132++) {
                    let child = this.children[index132];
                    {
                        if(topY > child.getY()) topY = child.getY();
                        if(bottomY < (child.getY() + child.getHeight())) bottomY = (child.getY() + child.getHeight());
                    }
                }
            }
            return (bottomY - topY);
        }
    }
    Sprite["__class"] = "splashjs.display.Sprite";
    Sprite["__interfaces"] = ["splashjs.display.iface.IDraggable","splashjs.display.iface.IDisplayObject","splashjs.display.iface.ISprite","splashjs.display.iface.IDisplayObjectContainer","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.display {
    export class Stage extends splashjs.display.DisplayObjectContainer implements splashjs.display.iface.IStage {
        /*private*/ stageOwner : splashjs.application.iface.IStageOwner;

        /*private*/ scaleMode : string;

        /*private*/ align : string;

        /*private*/ scene : splashjs.display.iface.IScene;

        /*private*/ color : splashjs.utils.iface.IColor;

        public constructor(stageOwnerName? : any, width? : any, height? : any) {
            if(((typeof stageOwnerName === 'string') || stageOwnerName === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
                let __args = arguments;
                super("stage");
                if(this.stageOwner===undefined) this.stageOwner = null;
                if(this.scaleMode===undefined) this.scaleMode = null;
                if(this.align===undefined) this.align = null;
                if(this.scene===undefined) this.scene = null;
                if(this.color===undefined) this.color = null;
                if(this.stageOwner===undefined) this.stageOwner = null;
                if(this.scaleMode===undefined) this.scaleMode = null;
                if(this.align===undefined) this.align = null;
                if(this.scene===undefined) this.scene = null;
                if(this.color===undefined) this.color = null;
                (() => {
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Stage, this));
                    this.stageOwner = new splashjs.application.StageOwner(stageOwnerName, this, width, height);
                    super.setWidth(width);
                    super.setHeight(height);
                    this.setColor(splashjs.utils.Color.WHITE_$LI$());
                    this.scaleMode = splashjs.display.StageScaleMode.SHOW_ALL;
                    this.align = splashjs.display.StageAlign.TOP_LEFT;
                    (<splashjs.render.display.iface.IStageRenderer><any>super.getRenderer()).startEnterFrameExitFrameDispatcherLoop();
                    this.stageOwner.addEventListener(splashjs.events.Event.RESIZE, (event) => {
                        this.handleResize();
                        let resizeEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.RESIZE, this, this);
                        this.dispatchEvent(resizeEvent);
                    });
                    this.stageOwner.getRenderer().appendChild(this.getRenderer());
                    this.render();
                })();
            } else if(stageOwnerName === undefined && width === undefined && height === undefined) {
                let __args = arguments;
                super("stage");
                if(this.stageOwner===undefined) this.stageOwner = null;
                if(this.scaleMode===undefined) this.scaleMode = null;
                if(this.align===undefined) this.align = null;
                if(this.scene===undefined) this.scene = null;
                if(this.color===undefined) this.color = null;
                if(this.stageOwner===undefined) this.stageOwner = null;
                if(this.scaleMode===undefined) this.scaleMode = null;
                if(this.align===undefined) this.align = null;
                if(this.scene===undefined) this.scene = null;
                if(this.color===undefined) this.color = null;
            } else throw new Error('invalid overload');
        }

        public setScene(scene : splashjs.display.iface.IScene) {
            if(this.scene != null) (<splashjs.render.display.iface.IStageRenderer><any>super.getRenderer()).removeScene();
            this.scene = scene;
            (<splashjs.render.display.iface.IStageRenderer><any>super.getRenderer()).setScene();
        }

        public getScene() : splashjs.display.iface.IScene {
            return this.scene;
        }

        public getStageOwner() : splashjs.application.iface.IStageOwner {
            return this.stageOwner;
        }

        /**
         * 
         * @param {number} x
         */
        public setX(x : number) {
            throw new splashjs.lang.UnsupportedOperationError();
        }

        /**
         * 
         * @param {number} y
         */
        public setY(y : number) {
            throw new splashjs.lang.UnsupportedOperationError();
        }

        /**
         * 
         * @param {number} x
         * @param {number} y
         */
        public setXY(x : number, y : number) {
            throw new splashjs.lang.UnsupportedOperationError();
        }

        /**
         * 
         * @return {*}
         */
        public getStage() : splashjs.display.iface.IStage {
            return null;
        }

        public setWidth(width : number) {
            this.width = width;
        }

        public setHeight(height : number) {
            this.height = height;
        }

        public setSize(width : number, height : number) {
        }

        public getWidth() : number {
            return this.width;
        }

        public getHeight() : number {
            return this.height;
        }

        public getStageWidth() : number {
            let stageWidth : number = this.width;
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.scaleMode, splashjs.display.StageScaleMode.NO_SCALE)) stageWidth = (<splashjs.render.display.iface.IStageRenderer><any>super.getRenderer()).getStageWidth();
            return stageWidth;
        }

        public getStageHeight() : number {
            let stageHeight : number = this.height;
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.scaleMode, splashjs.display.StageScaleMode.NO_SCALE)) stageHeight = (<splashjs.render.display.iface.IStageRenderer><any>super.getRenderer()).getStageHeight();
            return stageHeight;
        }

        /**
         * 
         */
        public render() {
            super.render();
            (<splashjs.render.display.iface.IStageRenderer><any>super.getRenderer()).setBorder("0px solid red");
            (<splashjs.render.display.iface.IStageRenderer><any>super.getRenderer()).setOverflow("hidden");
            (<splashjs.render.display.iface.IStageRenderer><any>super.getRenderer()).setPosition("relative");
            (<splashjs.render.display.iface.IStageRenderer><any>super.getRenderer()).setDisplay("inline-block");
            (<splashjs.render.display.iface.IStageRenderer><any>super.getRenderer()).setWidth();
            (<splashjs.render.display.iface.IStageRenderer><any>super.getRenderer()).setHeight();
            (<splashjs.render.display.iface.IStageRenderer><any>super.getRenderer()).setColor();
            this.handleResize();
        }

        /**
         * 
         * @param {*} child
         */
        public addChild(child : splashjs.display.iface.IDisplayObject) {
            super.addChild(child);
            let addedToStageEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, child, child);
            addedToStageEvent.setData(this);
            child.dispatchEvent(addedToStageEvent);
        }

        /**
         * 
         * @param {*} child
         * @param {number} index
         */
        public addChildAt(child : splashjs.display.iface.IDisplayObject, index : number) {
            super.addChildAt(child, index);
            let addedToStageEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, child, child);
            addedToStageEvent.setData(this);
            child.dispatchEvent(addedToStageEvent);
        }

        /**
         * 
         * @param {*} child
         */
        public removeChild(child : splashjs.display.iface.IDisplayObject) {
            super.removeChild(child);
            let removedFromStageEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, child, child);
            child.dispatchEvent(removedFromStageEvent);
        }

        /**
         * 
         * @param {number} index
         */
        public removeChildAt(index : number) {
            let child : splashjs.display.iface.IDisplayObject = this.getChildAt(index);
            super.removeChildAt(index);
            let removedFromStageEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, child, child);
            child.dispatchEvent(removedFromStageEvent);
        }

        public setScaleMode(stageScaleMode : string) {
            this.scaleMode = stageScaleMode;
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.scaleMode, splashjs.display.StageScaleMode.NO_SCALE)) {
                super.setWidth(this.width);
                super.setHeight(this.height);
                super.setScaleX(1);
                super.setScaleY(1);
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.align, splashjs.display.StageAlign.TOP_LEFT)) {
                    super.setX(0);
                    super.setY(0);
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.align, splashjs.display.StageAlign.TOP_RIGHT)) {
                    super.setX(this.getStageWidth() - this.getWidth());
                    super.setY(0);
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.align, splashjs.display.StageAlign.BOTTOM_LEFT)) {
                    super.setX(0);
                    super.setY(this.getStageHeight() - this.getHeight());
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.align, splashjs.display.StageAlign.BOTTOM_RIGHT)) {
                    super.setX(this.getStageWidth() - this.getWidth());
                    super.setY(this.getStageHeight() - this.getHeight());
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.align, splashjs.display.StageAlign.TOP)) {
                    super.setX(((this.getStageWidth() - this.getWidth()) / 2|0));
                    super.setY(0);
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.align, splashjs.display.StageAlign.BOTTOM)) {
                    super.setX(((this.getStageWidth() - this.getWidth()) / 2|0));
                    super.setY(this.getStageHeight() - this.getHeight());
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.align, splashjs.display.StageAlign.LEFT)) {
                    super.setX(0);
                    super.setY(((this.getStageHeight() - this.getHeight()) / 2|0));
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.align, splashjs.display.StageAlign.RIGHT)) {
                    super.setX(this.getStageWidth() - this.getWidth());
                    super.setY(((this.getStageHeight() - this.getHeight()) / 2|0));
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.align, splashjs.display.StageAlign.CENTER)) {
                    super.setX(((this.getStageWidth() - this.getWidth()) / 2|0));
                    super.setY(((this.getStageHeight() - this.getHeight()) / 2|0));
                }
            } else {
                this.handleResize();
            }
        }

        public setAlign(stageAlign : string) {
            this.align = stageAlign;
            this.handleResize();
        }

        /**
         * 
         * @param {*} event
         * @return {boolean}
         */
        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.RESIZE)) {
                this.handleResize();
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ENTER_FRAME)) {
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.MouseEvent.MOUSE_MOVE)) {
                let child : splashjs.display.iface.IDraggable = <splashjs.display.iface.IDraggable><any>this.getDraggableChild(this.getAllChildren());
                if(child != null) {
                    let mouseEvent : splashjs.events.iface.IMouseEvent = <splashjs.events.iface.IMouseEvent><any>event;
                    let point : splashjs.geom.iface.IPoint = new splashjs.geom.Point((<number>(mouseEvent.getLocalX() / this.getScaleX())|0), (<number>(mouseEvent.getLocalY() / this.getScaleY())|0));
                    child.setX(point.getX());
                    child.setY(point.getY());
                }
            }
            return super.dispatchEvent(event);
        }

        /*private*/ getDraggableChild(children : Array<splashjs.display.iface.IDisplayObject>) : splashjs.display.iface.IDraggable {
            let child : splashjs.display.iface.IDraggable = null;
            for(let i : number = 0; i < /* size */(<number>children.length); i++) {{
                if(/* get */children[i] != null && (/* get */children[i]["__interfaces"] != null && /* get */children[i]["__interfaces"].indexOf("splashjs.display.iface.IDraggable") >= 0 || /* get */children[i].constructor != null && /* get */children[i].constructor["__interfaces"] != null && /* get */children[i].constructor["__interfaces"].indexOf("splashjs.display.iface.IDraggable") >= 0)) {
                    child = <splashjs.display.iface.IDraggable><any>/* get */children[i];
                    if(child.getDraggable() === true) break;
                }
                if(/* get */children[i] != null && (/* get */children[i]["__interfaces"] != null && /* get */children[i]["__interfaces"].indexOf("splashjs.display.iface.IDisplayObjectContainer") >= 0 || /* get */children[i].constructor != null && /* get */children[i].constructor["__interfaces"] != null && /* get */children[i].constructor["__interfaces"].indexOf("splashjs.display.iface.IDisplayObjectContainer") >= 0)) {
                    child = this.getDraggableChild((<splashjs.display.iface.IDisplayObjectContainer><any>/* get */children[i]).getAllChildren());
                    if(child != null) break;
                }
                child = null;
            };}
            return child;
        }

        /*private*/ handleResize() {
            let stageOwnerWidth : number = this.stageOwner.getWidth();
            let stageOwnerHeight : number = this.stageOwner.getHeight();
            let stageWidth : number = this.getWidth();
            let stageHeight : number = this.getHeight();
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.scaleMode, splashjs.display.StageScaleMode.EXACT_FIT)) {
                this.setScaleX(<number>stageOwnerWidth / stageWidth);
                this.setScaleY(<number>stageOwnerHeight / stageHeight);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.scaleMode, splashjs.display.StageScaleMode.NO_BORDER)) {
                let widthRatio : number = <number>stageOwnerWidth / stageWidth;
                let heightRatio : number = <number>stageOwnerHeight / stageHeight;
                this.setScaleX(widthRatio);
                this.setScaleY(widthRatio);
                let px : number = (<number>((stageOwnerWidth - stageWidth * widthRatio) / 2)|0);
                let py : number = (<number>((stageOwnerHeight - stageHeight * widthRatio) / 2)|0);
                super.setX(px);
                super.setY(py);
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.scaleMode, splashjs.display.StageScaleMode.SHOW_ALL)) {
                let widthRatio : number = <number>stageOwnerWidth / stageWidth;
                let heightRatio : number = <number>stageOwnerHeight / stageHeight;
                let ratio : number = Math.min(widthRatio, heightRatio);
                this.setScaleX(ratio);
                this.setScaleY(ratio);
                let px : number = (<number>((stageOwnerWidth - stageWidth * ratio) / 2)|0);
                let py : number = (<number>((stageOwnerHeight - stageHeight * ratio) / 2)|0);
                super.setX(px);
                super.setY(py);
            }
        }

        /**
         * 
         * @param {number} scaleX
         */
        public setScaleX(scaleX : number) {
            super.setScaleX(scaleX);
        }

        /**
         * 
         * @param {number} scaleY
         */
        public setScaleY(scaleY : number) {
            super.setScaleY(scaleY);
        }

        public setColor(color : splashjs.utils.iface.IColor) {
            this.color = color;
            if(super.getRenderer() != null) (<splashjs.render.display.iface.IStageRenderer><any>super.getRenderer()).setColor();
        }

        public getColor() : splashjs.utils.iface.IColor {
            return this.color;
        }
    }
    Stage["__class"] = "splashjs.display.Stage";
    Stage["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IStage","splashjs.display.iface.IDisplayObjectContainer","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.display {
    export class Circle extends splashjs.display.Shape implements splashjs.display.iface.ICircle {
        /*private*/ radius : number;

        public constructor(radius? : any) {
            if(((typeof radius === 'number') || radius === null)) {
                let __args = arguments;
                super("circle");
                this.radius = 0;
                (() => {
                    this.radius = radius;
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Circle, this));
                })();
            } else if(radius === undefined) {
                let __args = arguments;
                super("circle");
                this.radius = 0;
                (() => {
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Circle, this));
                })();
            } else throw new Error('invalid overload');
        }

        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                this.originalWidth = (<splashjs.render.display.iface.ICircleRenderer><any>super.getRenderer()).getOriginalWidth();
                this.originalHeight = (<splashjs.render.display.iface.ICircleRenderer><any>super.getRenderer()).getOriginalHeight();
                this.width = this.originalWidth;
                this.height = this.originalHeight;
            }
            return super.dispatchEvent(event);
        }

        public setRadius(radius : number) {
            this.radius = radius;
            (<splashjs.render.display.iface.ICircleRenderer><any>super.getRenderer()).setRadius();
            this.originalWidth = (<splashjs.render.display.iface.ICircleRenderer><any>super.getRenderer()).getOriginalWidth();
            this.originalHeight = (<splashjs.render.display.iface.ICircleRenderer><any>super.getRenderer()).getOriginalHeight();
        }

        public getRadius() : number {
            return this.radius;
        }
    }
    Circle["__class"] = "splashjs.display.Circle";
    Circle["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.display.iface.IShape","splashjs.lang.iface.ISplashObject","splashjs.display.iface.ICircle","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.display {
    export class Ellipse extends splashjs.display.Shape implements splashjs.display.iface.IEllipse {
        /*private*/ radiusX : number;

        /*private*/ radiusY : number;

        public constructor(radiusX? : any, radiusY? : any) {
            if(((typeof radiusX === 'number') || radiusX === null) && ((typeof radiusY === 'number') || radiusY === null)) {
                let __args = arguments;
                {
                    let __args = arguments;
                    super("ellipse");
                    this.radiusX = 0;
                    this.radiusY = 0;
                }
                (() => {
                    this.radiusX = radiusX;
                    this.radiusY = radiusY;
                })();
            } else if(radiusX === undefined && radiusY === undefined) {
                let __args = arguments;
                super("ellipse");
                this.radiusX = 0;
                this.radiusY = 0;
            } else throw new Error('invalid overload');
        }
    }
    Ellipse["__class"] = "splashjs.display.Ellipse";
    Ellipse["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.display.iface.IShape","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.display.iface.IEllipse"];


}
namespace splashjs.display {
    export class Line extends splashjs.display.Shape implements splashjs.display.iface.ILine {
        /*private*/ length : number;

        public constructor(length? : any) {
            if(((typeof length === 'number') || length === null)) {
                let __args = arguments;
                {
                    let __args = arguments;
                    super("line");
                    this.length = 0;
                    (() => {
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Line, this));
                    })();
                }
                (() => {
                    this.length = length;
                })();
            } else if(length === undefined) {
                let __args = arguments;
                super("line");
                this.length = 0;
                (() => {
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Line, this));
                })();
            } else throw new Error('invalid overload');
        }

        public setLength(length : number) {
            this.length = length;
        }

        public getLength() : number {
            return this.length;
        }

        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                this.originalWidth = (<splashjs.render.display.iface.ILineRenderer><any>super.getRenderer()).getOriginalWidth();
                this.originalHeight = (<splashjs.render.display.iface.ILineRenderer><any>super.getRenderer()).getOriginalHeight();
                this.width = this.originalWidth;
                this.height = this.originalHeight;
            }
            let val : boolean = super.dispatchEvent(event);
            return val;
        }

        /**
         * 
         * @param {*} fillColor
         */
        public setFillColor(fillColor : splashjs.utils.iface.IColor) {
        }

        /**
         * 
         * @return {*}
         */
        public getFillColor() : splashjs.utils.iface.IColor {
            return null;
        }

        /**
         * 
         * @param {number} width
         */
        public setWidth(width : number) {
        }

        public setHeight(height : number) {
        }
    }
    Line["__class"] = "splashjs.display.Line";
    Line["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.display.iface.IShape","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.display.iface.ILine"];


}
namespace splashjs.display {
    export class Rectangle extends splashjs.display.Shape implements splashjs.display.iface.IRectangle {
        /*private*/ rectangleWidth : number;

        /*private*/ rectangleHeight : number;

        /*private*/ cornerRadiusX : number;

        /*private*/ cornerRadiusY : number;

        public constructor(rectangleWidth? : any, rectangleHeight? : any, cornerRadiusX? : any, cornerRadiusY? : any) {
            if(((typeof rectangleWidth === 'number') || rectangleWidth === null) && ((typeof rectangleHeight === 'number') || rectangleHeight === null) && ((typeof cornerRadiusX === 'number') || cornerRadiusX === null) && ((typeof cornerRadiusY === 'number') || cornerRadiusY === null)) {
                let __args = arguments;
                {
                    let __args = arguments;
                    super("rectangle");
                    this.rectangleWidth = 0;
                    this.rectangleHeight = 0;
                    this.cornerRadiusX = 0;
                    this.cornerRadiusY = 0;
                    (() => {
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Rectangle, this));
                    })();
                }
                (() => {
                    this.rectangleWidth = rectangleWidth;
                    this.rectangleHeight = rectangleHeight;
                    this.cornerRadiusX = cornerRadiusX;
                    this.cornerRadiusY = cornerRadiusY;
                })();
            } else if(((typeof rectangleWidth === 'number') || rectangleWidth === null) && ((typeof rectangleHeight === 'number') || rectangleHeight === null) && cornerRadiusX === undefined && cornerRadiusY === undefined) {
                let __args = arguments;
                {
                    let __args = arguments;
                    super("rectangle");
                    this.rectangleWidth = 0;
                    this.rectangleHeight = 0;
                    this.cornerRadiusX = 0;
                    this.cornerRadiusY = 0;
                    (() => {
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Rectangle, this));
                    })();
                }
                (() => {
                    this.rectangleWidth = rectangleWidth;
                    this.rectangleHeight = rectangleHeight;
                })();
            } else if(rectangleWidth === undefined && rectangleHeight === undefined && cornerRadiusX === undefined && cornerRadiusY === undefined) {
                let __args = arguments;
                super("rectangle");
                this.rectangleWidth = 0;
                this.rectangleHeight = 0;
                this.cornerRadiusX = 0;
                this.cornerRadiusY = 0;
                (() => {
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Rectangle, this));
                })();
            } else throw new Error('invalid overload');
        }

        public getCornerRadiusX() : number {
            return this.cornerRadiusX;
        }

        public setCornerRadiusX(cornerRadiusX : number) {
            this.cornerRadiusX = cornerRadiusX;
        }

        public getCornerRadiusY() : number {
            return this.cornerRadiusY;
        }

        public setCornerRadiusY(cornerRadiusY : number) {
            this.cornerRadiusY = cornerRadiusY;
        }

        public getRectangleWidth() : number {
            return this.rectangleWidth;
        }

        public setRectangleWidth(rectangleWidth : number) {
            this.rectangleWidth = rectangleWidth;
        }

        public getRectangleHeight() : number {
            return this.rectangleHeight;
        }

        public setRectangleHeight(rectangleHeight : number) {
            this.rectangleHeight = rectangleHeight;
        }

        /**
         * 
         * @param {*} event
         * @return {boolean}
         */
        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            let val : boolean = super.dispatchEvent(event);
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
            }
            return val;
        }
    }
    Rectangle["__class"] = "splashjs.display.Rectangle";
    Rectangle["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.display.iface.IShape","splashjs.lang.iface.ISplashObject","splashjs.display.iface.IRectangle","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.text {
    export class DynamicText extends splashjs.text.Text implements splashjs.text.iface.IDynamicText {
        public constructor(text : string) {
            super("dynamicText");
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(DynamicText, this));
            super.setText(text);
        }

        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                this.width = (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).getOriginalWidth();
                this.height = (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).getOriginalHeight();
            }
            let val : boolean = super.dispatchEvent(event);
            return val;
        }

        /**
         * 
         * @param {number} width
         */
        public setWidth(width : number) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * 
         * @param {number} height
         */
        public setHeight(height : number) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * 
         * @param {number} width
         * @param {number} height
         */
        public setSize(width : number, height : number) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }
    DynamicText["__class"] = "splashjs.text.DynamicText";
    DynamicText["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.text.iface.IDynamicText","splashjs.text.iface.IText"];


}
namespace splashjs.text {
    export class InputText extends splashjs.text.Text implements splashjs.text.iface.IInputText {
        /*private*/ placeholder : string;

        /*private*/ backgroundColor : splashjs.utils.iface.IColor;

        /*private*/ borderColor : splashjs.utils.iface.IColor;

        public constructor(text? : any) {
            if(((typeof text === 'string') || text === null)) {
                let __args = arguments;
                super("inputText");
                this.placeholder = "";
                this.backgroundColor = splashjs.utils.Color.NONE_$LI$();
                this.borderColor = splashjs.utils.Color.BLACK_$LI$();
                (() => {
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(InputText, this));
                    super.setText(text);
                })();
            } else if(text === undefined) {
                let __args = arguments;
                super("inputText");
                this.placeholder = "";
                this.backgroundColor = splashjs.utils.Color.NONE_$LI$();
                this.borderColor = splashjs.utils.Color.BLACK_$LI$();
                (() => {
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(InputText, this));
                })();
            } else throw new Error('invalid overload');
        }

        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            let val : boolean = super.dispatchEvent(event);
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                this.width = (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).getOriginalWidth();
                this.height = (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).getOriginalHeight();
            }
            return val;
        }

        public setPlaceholder(placeholder : string) {
            this.placeholder = placeholder;
            (<splashjs.render.text.iface.IInputTextRenderer><any>super.getRenderer()).setPlaceholder();
        }

        public getPlaceholder() : string {
            return this.placeholder;
        }

        public setBackgroundColor(backgroundColor : splashjs.utils.iface.IColor) {
            this.backgroundColor = backgroundColor;
            (<splashjs.render.text.iface.IInputTextRenderer><any>super.getRenderer()).setBackgroundColor();
        }

        public getBackgroundColor() : splashjs.utils.iface.IColor {
            return this.backgroundColor;
        }

        public setBorderColor(borderColor : splashjs.utils.iface.IColor) {
            this.borderColor = borderColor;
            (<splashjs.render.text.iface.IInputTextRenderer><any>super.getRenderer()).setBorderColor();
        }

        public getBorderColor() : splashjs.utils.iface.IColor {
            return this.borderColor;
        }

        /**
         * 
         * @return {number}
         */
        public getWidth() : number {
            return (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).getWidth();
        }

        /**
         * 
         * @return {number}
         */
        public getHeight() : number {
            return (<splashjs.render.text.iface.ITextRenderer><any>super.getRenderer()).getHeight();
        }

        /**
         * 
         * @param {number} width
         */
        public setWidth(width : number) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * 
         * @param {number} height
         */
        public setHeight(height : number) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * 
         * @param {number} width
         * @param {number} height
         */
        public setSize(width : number, height : number) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }
    InputText["__class"] = "splashjs.text.InputText";
    InputText["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.text.iface.IInputText","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.text.iface.IText"];


}
namespace splashjs.text {
    export class StaticText extends splashjs.text.Text implements splashjs.text.iface.IStaticText {
        public constructor(text : string) {
            super("staticText");
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(StaticText, this));
            super.setText(text);
        }

        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                this.width = (<splashjs.render.text.iface.IStaticTextRenderer><any>super.getRenderer()).getOriginalWidth();
                this.height = (<splashjs.render.text.iface.IStaticTextRenderer><any>super.getRenderer()).getOriginalHeight();
            }
            let val : boolean = super.dispatchEvent(event);
            return val;
        }

        public getWidth() : number {
            return (<splashjs.render.text.iface.IStaticTextRenderer><any>super.getRenderer()).getOriginalWidth();
        }

        public getHeight() : number {
            return (<splashjs.render.text.iface.IStaticTextRenderer><any>super.getRenderer()).getOriginalHeight();
        }

        /**
         * 
         * @param {number} width
         */
        public setWidth(width : number) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * 
         * @param {number} height
         */
        public setHeight(height : number) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        /**
         * 
         * @param {number} width
         * @param {number} height
         */
        public setSize(width : number, height : number) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }
    StaticText["__class"] = "splashjs.text.StaticText";
    StaticText["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.text.iface.IText","splashjs.text.iface.IStaticText"];


}
namespace splashjs.layout {
    export class HBoxLayout extends splashjs.layout.BoxLayout implements splashjs.layout.iface.IHBoxLayout {
        public constructor() {
            super("hBoxLayout");
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(HBoxLayout, this));
        }

        public add(displayObject : splashjs.display.iface.IDisplayObject) {
            let container : splashjs.layout.iface.IContainer = new splashjs.layout.Container(displayObject);
            (<splashjs.render.layout.iface.IHBoxLayoutRenderer><any>super.getRenderer()).add(container);
        }

        public refreshLayout() {
            (<splashjs.render.layout.iface.IHBoxLayoutRenderer><any>super.getRenderer()).refreshLayout();
        }

        public getWidth() : number {
            return (<splashjs.render.layout.iface.IHBoxLayoutRenderer><any>super.getRenderer()).getWidth();
        }

        public getHeight() : number {
            return (<splashjs.render.layout.iface.IHBoxLayoutRenderer><any>super.getRenderer()).getHeight();
        }
    }
    HBoxLayout["__class"] = "splashjs.layout.HBoxLayout";
    HBoxLayout["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.layout.iface.ILayout","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.layout.iface.IHBoxLayout","splashjs.layout.iface.IBoxLayout"];


}
namespace splashjs.layout {
    export class VBoxLayout extends splashjs.layout.BoxLayout implements splashjs.layout.iface.IVBoxLayout {
        public constructor() {
            super("vBoxLayout");
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(VBoxLayout, this));
        }

        public add(displayObject : splashjs.display.iface.IDisplayObject) {
            let container : splashjs.layout.iface.IContainer = new splashjs.layout.Container(displayObject);
            (<splashjs.render.layout.iface.IVBoxLayoutRenderer><any>super.getRenderer()).add(container);
        }

        public refreshLayout() {
            (<splashjs.render.layout.iface.IVBoxLayoutRenderer><any>super.getRenderer()).refreshLayout();
        }

        public getWidth() : number {
            return (<splashjs.render.layout.iface.IVBoxLayoutRenderer><any>super.getRenderer()).getWidth();
        }

        public getHeight() : number {
            return (<splashjs.render.layout.iface.IVBoxLayoutRenderer><any>super.getRenderer()).getHeight();
        }
    }
    VBoxLayout["__class"] = "splashjs.layout.VBoxLayout";
    VBoxLayout["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.layout.iface.ILayout","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.layout.iface.IVBoxLayout","splashjs.layout.iface.IBoxLayout"];


}
namespace splashjs.render.animation {
    export class CircularTransitionRenderer extends splashjs.render.animation.TransitionRenderer {
        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super(renderObject);
        }
    }
    CircularTransitionRenderer["__class"] = "splashjs.render.animation.CircularTransitionRenderer";
    CircularTransitionRenderer["__interfaces"] = ["splashjs.render.animation.iface.ITransitionRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.animation {
    export class FadeTransitionRenderer extends splashjs.render.animation.TransitionRenderer {
        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super(renderObject);
        }
    }
    FadeTransitionRenderer["__class"] = "splashjs.render.animation.FadeTransitionRenderer";
    FadeTransitionRenderer["__interfaces"] = ["splashjs.render.animation.iface.ITransitionRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.animation {
    export class ParallelTransitionRenderer extends splashjs.render.animation.TransitionRenderer {
        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super(renderObject);
        }
    }
    ParallelTransitionRenderer["__class"] = "splashjs.render.animation.ParallelTransitionRenderer";
    ParallelTransitionRenderer["__interfaces"] = ["splashjs.render.animation.iface.ITransitionRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.animation {
    export class RotationTransitionRenderer extends splashjs.render.animation.TransitionRenderer {
        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super(renderObject);
        }
    }
    RotationTransitionRenderer["__class"] = "splashjs.render.animation.RotationTransitionRenderer";
    RotationTransitionRenderer["__interfaces"] = ["splashjs.render.animation.iface.ITransitionRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.animation {
    export class ScaleTransitionRenderer extends splashjs.render.animation.TransitionRenderer {
        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super(renderObject);
        }
    }
    ScaleTransitionRenderer["__class"] = "splashjs.render.animation.ScaleTransitionRenderer";
    ScaleTransitionRenderer["__interfaces"] = ["splashjs.render.animation.iface.ITransitionRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.animation {
    export class TranslateTransitionRenderer extends splashjs.render.animation.TransitionRenderer {
        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super(renderObject);
        }
    }
    TranslateTransitionRenderer["__class"] = "splashjs.render.animation.TranslateTransitionRenderer";
    TranslateTransitionRenderer["__interfaces"] = ["splashjs.render.animation.iface.ITransitionRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.controls {
    export abstract class ControlRenderer extends splashjs.render.display.InteractiveObjectRenderer implements splashjs.render.controls.iface.IControlRenderer {
        constructor() {
            super();
        }
    }
    ControlRenderer["__class"] = "splashjs.render.controls.ControlRenderer";
    ControlRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.display {
    export abstract class DisplayObjectContainerRenderer extends splashjs.render.display.InteractiveObjectRenderer implements splashjs.render.display.iface.IDisplayObjectContainerRenderer {
        constructor() {
            super();
        }
    }
    DisplayObjectContainerRenderer["__class"] = "splashjs.render.display.DisplayObjectContainerRenderer";
    DisplayObjectContainerRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.display.iface.IDisplayObjectContainerRenderer"];


}
namespace splashjs.render.display {
    export class ImageRenderer extends splashjs.render.display.InteractiveObjectRenderer {
        /*private*/ htmlImageElement : HTMLImageElement;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.htmlImageElement===undefined) this.htmlImageElement = null;
            super.setRenderObject(renderObject);
            this.htmlImageElement = <HTMLImageElement>document.createElement("img");
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlImageElement));
            this.create();
        }

        public create() {
            this.setImagePath();
        }

        public setImagePath() {
            let imagePath : string = (<splashjs.display.iface.IImage><any>super.getRenderObject()).getImagePath();
            if(imagePath != null && !/* isEmpty */(imagePath.length === 0)) this.htmlImageElement.src = imagePath;
        }

        public getOriginalWidth() : number {
            return (<number>this.htmlImageElement.naturalWidth|0);
        }

        public getOriginalHeight() : number {
            return (<number>this.htmlImageElement.naturalHeight|0);
        }
    }
    ImageRenderer["__class"] = "splashjs.render.display.ImageRenderer";
    ImageRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.display {
    export abstract class ShapeRenderer extends splashjs.render.display.InteractiveObjectRenderer implements splashjs.render.display.iface.IShapeRenderer {
        childSVGElement : SVGElement;

        public getStrokeColorNameAsString() : string {
            let strokeColorName : string = splashjs.utils.ColorName.BLACK;
            let strokeColor : splashjs.utils.iface.IColor = (<splashjs.display.iface.IShape><any>super.getRenderObject()).getStrokeColor();
            if(strokeColor.getColorType() === splashjs.utils.ColorType.NAME) strokeColorName = strokeColor.getColorName(); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(strokeColor.getColorType(), splashjs.utils.ColorType.HEX)) strokeColorName = strokeColor.getHEX();
            return strokeColorName;
        }

        public getFillColorNameAsString() : string {
            let fillColorName : string = splashjs.utils.ColorName.BLACK;
            let fillColor : splashjs.utils.iface.IColor = (<splashjs.display.iface.IShape><any>super.getRenderObject()).getFillColor();
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(fillColor.getColorType(), splashjs.utils.ColorType.NAME)) fillColorName = fillColor.getColorName(); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(fillColor.getColorType(), splashjs.utils.ColorType.HEX)) fillColorName = fillColor.getHEX();
            return fillColorName;
        }

        public getStrokeWidthAsString() : string {
            let strokeWidth : string = "1";
            strokeWidth = (<splashjs.display.iface.IShape><any>super.getRenderObject()).getStrokeWidth() + "";
            return strokeWidth;
        }

        public getSVGElement() : SVGElement {
            return <SVGElement>super.getDOMElement();
        }

        public getOriginalWidth() : number {
            return (<number>super.getDOMElement().clientWidth|0);
        }

        public getOriginalHeight() : number {
            return (<number>super.getDOMElement().clientHeight|0);
        }

        constructor() {
            super();
            if(this.childSVGElement===undefined) this.childSVGElement = null;
        }
    }
    ShapeRenderer["__class"] = "splashjs.render.display.ShapeRenderer";
    ShapeRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.display.iface.IShapeRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.display {
    export class SimpleButtonRenderer extends splashjs.render.display.InteractiveObjectRenderer implements splashjs.render.display.iface.ISimpleButtonRenderer {
        /*private*/ container : splashjs.display.iface.ISprite = new splashjs.display.Sprite();

        /*private*/ upState : splashjs.display.iface.IDisplayObject;

        /*private*/ downState : splashjs.display.iface.IDisplayObject;

        /*private*/ overState : splashjs.display.iface.IDisplayObject;

        /*private*/ disabledState : splashjs.display.iface.IDisplayObject;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.upState===undefined) this.upState = null;
            if(this.downState===undefined) this.downState = null;
            if(this.overState===undefined) this.overState = null;
            if(this.disabledState===undefined) this.disabledState = null;
            super.setRenderObject(renderObject);
            super.setRenderElement(new splashjs.render.RenderElement(<HTMLImageElement>document.createElement("span")));
        }

        public create() {
            this.appendChild(this.container.getRenderer());
            this.setDownState();
            this.setOverState();
            this.setUpState();
            this.setDisabledState();
        }

        public setUpState() {
            let visible : boolean = true;
            if(this.upState == null) {
                this.upState = (<splashjs.display.iface.ISimpleButton><any>super.getRenderObject()).getUpState();
            } else if(this.upState != null) {
                visible = this.upState.getVisible();
                this.upState.setRenderer(null);
                this.container.removeChild(this.upState);
            }
            if(this.upState != null) {
                this.container.addChild(this.upState);
                this.upState.setVisible(visible);
            }
        }

        public setDownState() {
            let visible : boolean = false;
            if(this.downState == null) {
                this.downState = (<splashjs.display.iface.ISimpleButton><any>super.getRenderObject()).getDownState();
            } else if(this.downState != null) {
                visible = this.downState.getVisible();
                this.downState.setRenderer(null);
                this.container.removeChild(this.downState);
            }
            if(this.downState != null) {
                this.container.addChild(this.downState);
                this.downState.setVisible(visible);
            }
        }

        public setOverState() {
            let visible : boolean = false;
            if(this.overState == null) {
                this.overState = (<splashjs.display.iface.ISimpleButton><any>super.getRenderObject()).getOverState();
            } else if(this.overState != null) {
                visible = this.overState.getVisible();
                this.overState.setRenderer(null);
                this.container.removeChild(this.overState);
            }
            if(this.overState != null) {
                this.container.addChild(this.overState);
                this.overState.setVisible(visible);
            }
        }

        public setDisabledState() {
            let visible : boolean = false;
            if(this.disabledState == null) {
                this.disabledState = (<splashjs.display.iface.ISimpleButton><any>super.getRenderObject()).getDisabledState();
            } else if(this.disabledState != null) {
                visible = this.disabledState.getVisible();
                this.disabledState.setRenderer(null);
                this.container.removeChild(this.disabledState);
            }
            if(this.disabledState != null) {
                this.container.addChild(this.disabledState);
                this.disabledState.setVisible(visible);
            }
        }

        public setEnabled() {
            let enabled : boolean = (<splashjs.display.iface.ISimpleButton><any>super.getRenderObject()).isEnabled();
            if(this.disabledState == null) {
                if(enabled === true) {
                    (<splashjs.display.iface.IDisplayObject><any>super.getRenderObject()).setAlpha(1.0);
                } else if(enabled === false) {
                    if(this.downState != null) this.downState.setVisible(false);
                    if(this.upState != null) this.upState.setVisible(true);
                    if(this.overState != null) this.overState.setVisible(false);
                    (<splashjs.display.iface.IDisplayObject><any>super.getRenderObject()).setAlpha(0.5);
                }
            } else {
                if(enabled === false) {
                    this.disabledState.setVisible(true);
                    if(this.downState != null) this.downState.setVisible(false);
                    if(this.upState != null) this.upState.setVisible(false);
                    if(this.overState != null) this.overState.setVisible(false);
                } else {
                    this.disabledState.setVisible(false);
                    if(this.upState != null) this.upState.setVisible(true);
                }
            }
        }
    }
    SimpleButtonRenderer["__class"] = "splashjs.render.display.SimpleButtonRenderer";
    SimpleButtonRenderer["__interfaces"] = ["splashjs.render.display.iface.ISimpleButtonRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.text {
    export abstract class TextRenderer extends splashjs.render.display.InteractiveObjectRenderer implements splashjs.render.text.iface.ITextRenderer {
        /**
         * 
         */
        public setColor() {
            (<HTMLElement>this.getDOMElement()).style.color = this.getCSSColorText();
        }

        public setText() {
        }

        public setFont() {
            let text : splashjs.text.iface.IText = <splashjs.text.iface.IText><any>super.getRenderObject();
            let font : splashjs.text.iface.IFont = text.getFont();
            if(font != null) {
                let fontID : string = font.getFontID();
                (<HTMLElement>this.getDOMElement()).style.fontFamily = fontID;
            }
        }

        public setFontSize() {
            let text : splashjs.text.iface.IText = <splashjs.text.iface.IText><any>super.getRenderObject();
            let fontSize : number = text.getFontSize();
            if(fontSize >= 0) (<HTMLElement>this.getDOMElement()).style.fontSize = fontSize + this.UNIT;
        }

        public setFontWeight() {
            let text : splashjs.text.iface.IText = <splashjs.text.iface.IText><any>super.getRenderObject();
            let fontWeight : string = text.getFontWeight();
            if(fontWeight != null) (<HTMLElement>this.getDOMElement()).style.fontWeight = fontWeight;
        }

        public setFontStyle() {
            let text : splashjs.text.iface.IText = <splashjs.text.iface.IText><any>super.getRenderObject();
            let fontStyle : string = text.getFontStyle();
            if(fontStyle != null) (<HTMLElement>this.getDOMElement()).style.fontStyle = fontStyle;
        }

        public setSelectable() {
        }

        public setTextFormat() {
            let text : splashjs.text.iface.IText = <splashjs.text.iface.IText><any>super.getRenderObject();
            let textFormat : splashjs.text.iface.ITextFormat = <splashjs.text.iface.ITextFormat><any>text.getTextFormat();
            let font : splashjs.text.iface.IFont = textFormat.getFont();
            let fontWeight : string = textFormat.getFontWeight();
            let fontStyle : string = textFormat.getFontStyle();
            let fontSize : number = textFormat.getFontSize();
            if(font != null) {
                let fontID : string = font.getFontID();
                (<HTMLElement>this.getDOMElement()).style.fontFamily = fontID;
            }
            if(fontWeight != null) {
                (<HTMLElement>this.getDOMElement()).style.fontWeight = fontWeight;
            }
            if(fontStyle != null) {
                (<HTMLElement>this.getDOMElement()).style.fontStyle = fontStyle;
            }
            if(fontSize >= 0) {
                (<HTMLElement>this.getDOMElement()).style.fontSize = fontSize + this.UNIT;
            }
        }

        public getClientWidth() : number {
            return (<number>(<HTMLElement>this.getDOMElement()).clientWidth|0);
        }

        public getClientHeight() : number {
            return (<number>(<HTMLElement>this.getDOMElement()).clientHeight|0);
        }

        /*private*/ getCSSColorText() : string {
            let colorName : string = splashjs.utils.ColorName.BLACK;
            let color : splashjs.utils.iface.IColor = (<splashjs.text.iface.IText><any>super.getRenderObject()).getColor();
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(color.getColorType(), splashjs.utils.ColorType.NAME)) colorName = color.getColorName(); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(color.getColorType(), splashjs.utils.ColorType.HEX)) colorName = color.getHEX();
            return colorName;
        }

        constructor() {
            super();
        }
    }
    TextRenderer["__class"] = "splashjs.render.text.TextRenderer";
    TextRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.text.iface.ITextRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.layout {
    export abstract class BoxLayoutRenderer extends splashjs.render.layout.LayoutRenderer implements splashjs.render.layout.iface.IBoxLayoutRenderer {
        containers : Array<splashjs.layout.iface.IContainer> = <any>([]);

        public add(container : splashjs.layout.iface.IContainer) {
            super.getDOMElement().appendChild(container.getRenderer().getDOMElement());
            (<HTMLElement>container.getTheOnlyMember().getRenderer().getDOMElement()).style.position = "relative";
            /* add */(this.containers.push(container)>0);
        }

        public setHAlign(hAlign : string) {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(hAlign, splashjs.layout.HAlign.CENTER)) {
                (<HTMLElement>super.getDOMElement()).style.justifyContent = "center";
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(hAlign, splashjs.layout.HAlign.LEFT)) {
                (<HTMLElement>super.getDOMElement()).style.justifyContent = "flex-start";
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(hAlign, splashjs.layout.HAlign.RIGHT)) {
                (<HTMLElement>super.getDOMElement()).style.justifyContent = "flex-end";
            }
        }

        public applyCSS() {
            super.applyCSS();
            let htmlElement : HTMLElement = <HTMLElement>super.getDOMElement();
            htmlElement.style.border = "0px solid red";
            htmlElement.style.display = "flex";
            htmlElement.style.width = "100%";
        }

        public abstract refreshLayout(): any;
        constructor() {
            super();
        }
    }
    BoxLayoutRenderer["__class"] = "splashjs.render.layout.BoxLayoutRenderer";
    BoxLayoutRenderer["__interfaces"] = ["splashjs.render.layout.iface.ILayoutRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.layout.iface.IBoxLayoutRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.media {
    export class SoundRenderer extends splashjs.render.media.MediaRenderer implements splashjs.render.media.iface.ISoundRenderer {
        /*private*/ htmlAudioElement : HTMLAudioElement;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.htmlAudioElement===undefined) this.htmlAudioElement = null;
            super.setRenderObject(renderObject);
            this.htmlAudioElement = <HTMLAudioElement>document.createElement("audio");
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlAudioElement));
            this.htmlAudioElement.addEventListener("canplaythrough", (event) => {
                this.htmlAudioElement.controls = true;
                let loadedEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.LOADED, super.getRenderObject(), super.getRenderObject());
                super.getRenderObject().dispatchEvent(loadedEvent);
            });
            this.htmlAudioElement.addEventListener("click", (event) => {
                console.info("sound clicked");
            });
            this.create();
        }

        public create() {
            this.setPath();
            document.body.appendChild(this.htmlAudioElement);
            super.setDisplay("none");
        }

        /**
         * 
         */
        public setPath() {
            let soundPath : string = (<splashjs.media.iface.ISound><any>super.getRenderObject()).getPath();
            this.htmlAudioElement.src = soundPath;
        }

        public playSound() {
            let js : string = "var playPromise = document.getElementById(\"" + super.getRenderObjectID() + "\").play();";
            js += "if(playPromise !== undefined) {";
            js += "playPromise.then(() => {console.log(\"playing\");}).catch((error) => {console.log(error.name);});";
            js += "}";
            eval(js);
        }

        public pauseSound() {
            this.htmlAudioElement.pause();
        }

        /*private*/ getHTMLAudioElement() : HTMLAudioElement {
            return <HTMLAudioElement>super.getDOMElement();
        }
    }
    SoundRenderer["__class"] = "splashjs.render.media.SoundRenderer";
    SoundRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.media.iface.ISoundRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.media.iface.IMediaRenderer"];


}
namespace splashjs.render.media {
    export class VideoRenderer extends splashjs.render.media.MediaRenderer implements splashjs.render.media.iface.IVideoRenderer {
        /*private*/ htmlVideoElement : HTMLVideoElement;

        /*private*/ video : splashjs.media.iface.IVideo;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.htmlVideoElement===undefined) this.htmlVideoElement = null;
            if(this.video===undefined) this.video = null;
            this.video = <splashjs.media.iface.IVideo><any>renderObject;
            this.htmlVideoElement = <HTMLVideoElement>document.createElement("video");
            super.setRenderObject(renderObject);
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlVideoElement));
        }

        public createEventListeners() {
            super.createEventListeners();
            this.htmlVideoElement.addEventListener("canplaythrough", (event) => {
                this.htmlVideoElement.controls = true;
                let loadedEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.LOADED, this.video, this.video);
                this.video.dispatchEvent(loadedEvent);
            });
        }

        /**
         * 
         */
        public setPath() {
            let videoPath : string = (<splashjs.media.iface.IVideo><any>super.getRenderObject()).getPath();
            this.htmlVideoElement.src = videoPath;
        }

        public playVideo() {
            let js : string = "var playPromise = " + super.getRenderObjectID() + ".play();";
            js += "if(playPromise !== undefined) {";
            js += "playPromise.then(() => {console.log(\"playing\");}).catch((error) => {console.log(error.name);});";
            js += "}";
            eval(js);
        }

        public attachCamera(camera : splashjs.media.iface.ICamera) {
            let mediaStream : splashjs.def.webrtc.MediaStream = (<splashjs.render.media.iface.ICameraRenderer><any>camera.getRenderer()).getMediaStream();
            eval("this.videoElement.srcObject = mediaStream");
        }

        public attachNetStream(netStream : splashjs.net.iface.INetStream) {
        }

        /*private*/ getHTMLVideoElement() : HTMLVideoElement {
            return <HTMLVideoElement>super.getDOMElement();
        }

        public applyCSS() {
            super.applyCSS();
            this.htmlVideoElement.style.width = this.video.getWidth() + this.UNIT;
            this.htmlVideoElement.style.height = this.video.getHeight() + this.UNIT;
        }
    }
    VideoRenderer["__class"] = "splashjs.render.media.VideoRenderer";
    VideoRenderer["__interfaces"] = ["splashjs.render.media.iface.IVideoRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.media.iface.IMediaRenderer"];


}
namespace splashjs.controls {
    export class List extends splashjs.controls.BaseList implements splashjs.controls.iface.IList {
        /*private*/ items : Array<splashjs.controls.iface.IBaseItem> = <any>([]);

        /*private*/ isRenderCalled : boolean = false;

        public constructor() {
            super("list");
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(List, this));
        }

        public addItem(item : splashjs.controls.iface.IItem) {
            /* add */(this.items.push(item)>0);
            (<splashjs.render.controls.iface.IListRenderer><any>super.getRenderer()).addItem(item);
        }

        public addItemGroup(itemGroup : splashjs.controls.iface.IItemGroup) {
            /* add */(this.items.push(itemGroup)>0);
        }

        public getAllItems() : Array<splashjs.controls.iface.IBaseItem> {
            return this.items;
        }

        public render() {
            super.render();
        }
    }
    List["__class"] = "splashjs.controls.List";
    List["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IList","splashjs.controls.iface.IControl","splashjs.controls.iface.IBaseList"];


}
namespace splashjs.controls {
    export abstract class BaseInput extends splashjs.controls.BaseText implements splashjs.controls.iface.IBaseInput {
        /*private*/ selectionBeginIndex : number;

        /*private*/ selectionEndIndex : number;

        public constructor(id : string) {
            super(id);
            if(this.selectionBeginIndex===undefined) this.selectionBeginIndex = 0;
            if(this.selectionEndIndex===undefined) this.selectionEndIndex = 0;
        }

        public setMaxChars(maxChars : number) {
            (<splashjs.render.controls.iface.IBaseInputRenderer><any>super.getRenderer()).setMaxChars(maxChars);
        }

        public getMaxChars() : number {
            return (<splashjs.render.controls.iface.IBaseInputRenderer><any>super.getRenderer()).getMaxChars();
        }

        public setEditable(editable : boolean) {
            (<splashjs.render.controls.iface.IBaseInputRenderer><any>super.getRenderer()).setEditable(editable);
        }

        public getEditable() : boolean {
            return (<splashjs.render.controls.iface.IBaseInputRenderer><any>super.getRenderer()).getEditable();
        }

        public isEditable() : boolean {
            return (<splashjs.render.controls.iface.IBaseInputRenderer><any>super.getRenderer()).getEditable();
        }

        public setPlaceHolderText(placeHolderText : string) {
            (<splashjs.render.controls.iface.IBaseInputRenderer><any>super.getRenderer()).setPlaceHolderText(placeHolderText);
        }

        public getPlaceHolderText() : string {
            return (<splashjs.render.controls.iface.IBaseInputRenderer><any>super.getRenderer()).getPlaceHolderText();
        }

        public getSelectionBeginIndex() : number {
            return this.selectionBeginIndex;
        }

        public getSelectionEndIndex() : number {
            return this.selectionEndIndex;
        }

        public setSelection(beginIndex : number, endIndex : number) {
            this.selectionBeginIndex = beginIndex;
            this.selectionEndIndex = endIndex;
            if(super.getRenderer() != null) (<splashjs.render.controls.iface.IBaseInputRenderer><any>super.getRenderer()).setSelection();
        }

        public render() {
            super.render();
        }
    }
    BaseInput["__class"] = "splashjs.controls.BaseInput";
    BaseInput["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.controls.iface.IBaseInput","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl","splashjs.controls.iface.IBaseText"];


}
namespace splashjs.controls {
    export class Button extends splashjs.controls.BaseText implements splashjs.controls.iface.IButton {
        public constructor(text : string) {
            super("button");
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Button, this));
            super.setText(text);
        }

        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                this.originalWidth = (<splashjs.render.controls.iface.IButtonRenderer><any>super.getRenderer()).getOriginalWidth();
                if(this.width === 0 && this.originalWidth !== 0) {
                    super.setWidth(this.originalWidth);
                }
                this.originalHeight = (<splashjs.render.controls.iface.IButtonRenderer><any>super.getRenderer()).getOriginalHeight();
                if(this.height === 0 && this.originalHeight !== 0) {
                    super.setHeight(this.originalHeight);
                }
                (<splashjs.render.controls.iface.IButtonRenderer><any>super.getRenderer()).refresh();
            }
            return super.dispatchEvent(event);
        }

        /**
         * 
         * @param {number} width
         */
        public setWidth(width : number) {
            super.setWidth(width);
        }

        /**
         * 
         * @return {number}
         */
        public getWidth() : number {
            return (<splashjs.render.controls.iface.IButtonRenderer><any>super.getRenderer()).getWidth();
        }

        /**
         * 
         * @param {number} height
         */
        public setHeight(height : number) {
            super.setHeight(height);
        }

        /**
         * 
         * @return {number}
         */
        public getHeight() : number {
            return (<splashjs.render.controls.iface.IButtonRenderer><any>super.getRenderer()).getHeight();
        }

        /**
         * 
         * @param {number} scaleX
         */
        public setScaleX(scaleX : number) {
            this.scaleX = scaleX;
            super.setWidth(((<number>scaleX|0) * this.originalWidth));
        }

        /**
         * 
         * @return {number}
         */
        public getScaleX() : number {
            return this.scaleX;
        }

        /**
         * 
         * @param {number} scaleY
         */
        public setScaleY(scaleY : number) {
            this.scaleY = scaleY;
            super.setHeight(((<number>scaleY|0) * this.originalHeight));
        }

        /**
         * 
         * @return {number}
         */
        public getScaleY() : number {
            return this.scaleY;
        }

        /**
         * 
         * @param {number} width
         * @param {number} height
         */
        public setSize(width : number, height : number) {
            super.setWidth(width);
            super.setHeight(height);
        }

        /**
         * 
         * @param {number} scaleX
         * @param {number} scaleY
         */
        public setScaleXY(scaleX : number, scaleY : number) {
            this.setScaleX(scaleX);
            this.setScaleY(scaleY);
        }

        public render() {
            super.render();
            if(super.getWidth() !== 0) (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setWidth();
            if(super.getHeight() !== 0) (<splashjs.render.display.iface.IDisplayObjectRenderer><any>super.getRenderer()).setHeight();
        }
    }
    Button["__class"] = "splashjs.controls.Button";
    Button["__interfaces"] = ["splashjs.controls.iface.IButton","splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl","splashjs.controls.iface.IBaseText"];


}
namespace splashjs.controls {
    export class Label extends splashjs.controls.BaseText implements splashjs.controls.iface.ILabel {
        public constructor(text : string) {
            super("label");
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Label, this));
            super.setText(text);
        }

        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                this.originalWidth = (<splashjs.render.controls.iface.ILabelRenderer><any>super.getRenderer()).getOriginalWidth();
                this.originalHeight = (<splashjs.render.controls.iface.ILabelRenderer><any>super.getRenderer()).getOriginalHeight();
                if(this.width === 0 && this.originalWidth !== 0) super.setWidth(this.originalWidth);
                if(this.height === 0 && this.originalHeight !== 0) super.setHeight(this.originalHeight);
            }
            return super.dispatchEvent(event);
        }
    }
    Label["__class"] = "splashjs.controls.Label";
    Label["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.controls.iface.ILabel","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl","splashjs.controls.iface.IBaseText"];


}
namespace splashjs.display {
    export class MovieClip extends splashjs.display.Sprite implements splashjs.display.iface.IMovieClip {
        /*private*/ movieClipsData : Array<splashjs.animation.iface.IMovieClipData>;

        /*private*/ frameRate : number;

        public constructor(movieClipData? : any) {
            if(((movieClipData != null && (movieClipData["__interfaces"] != null && movieClipData["__interfaces"].indexOf("splashjs.animation.iface.IMovieClipData") >= 0 || movieClipData.constructor != null && movieClipData.constructor["__interfaces"] != null && movieClipData.constructor["__interfaces"].indexOf("splashjs.animation.iface.IMovieClipData") >= 0)) || movieClipData === null)) {
                let __args = arguments;
                super("movieClip");
                if(this.movieClipsData===undefined) this.movieClipsData = null;
                this.frameRate = 10;
                if(this.movieClipsData===undefined) this.movieClipsData = null;
                (() => {
                    this.movieClipsData = <any>([]);
                    /* add */(this.movieClipsData.push(movieClipData)>0);
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(MovieClip, this));
                    this.init();
                })();
            } else if(((movieClipData != null && (movieClipData instanceof Array)) || movieClipData === null)) {
                let __args = arguments;
                let movieClipsData : any = __args[0];
                super("movieClip");
                if(this.movieClipsData===undefined) this.movieClipsData = null;
                this.frameRate = 10;
                if(this.movieClipsData===undefined) this.movieClipsData = null;
                (() => {
                    this.movieClipsData = movieClipsData;
                    super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(MovieClip, this));
                    this.init();
                })();
            } else throw new Error('invalid overload');
        }

        /*private*/ init() {
            if(/* size */(<number>this.getAllLabels().length) > 0) {
                this.gotoAndStop(/* get */this.getAllLabels()[0]);
            }
        }

        public getMovieClipDataByLabel(label : string) : splashjs.animation.iface.IMovieClipData {
            let movieClipData : splashjs.animation.iface.IMovieClipData = null;
            for(let i : number = 0; i < /* size */(<number>this.movieClipsData.length); i++) {{
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(/* get */this.movieClipsData[i].getLabel(), label)) {
                    movieClipData = /* get */this.movieClipsData[i];
                    break;
                }
            };}
            return movieClipData;
        }

        public setFrameRate(frameRate : number) {
            this.frameRate = frameRate;
        }

        public getFrameRate() : number {
            return this.frameRate;
        }

        public gotoAndStop(label : string, frameIndex : number = 0) {
            (<splashjs.render.display.iface.IMovieClipRenderer><any>super.getRenderer()).gotoAndStop(label, frameIndex);
        }

        public gotoAndPlay(label : string, loopCount : number = 1) {
            (<splashjs.render.display.iface.IMovieClipRenderer><any>super.getRenderer()).gotoAndPlay(label, loopCount);
        }

        public getCurrentLabel() : string {
            return (<splashjs.render.display.iface.IMovieClipRenderer><any>super.getRenderer()).getCurrentLabel();
        }

        public getCurrentFrameIndex() : number {
            return (<splashjs.render.display.iface.IMovieClipRenderer><any>super.getRenderer()).getCurrentFrameIndex();
        }

        public isPlaying$() : boolean {
            return (<splashjs.render.display.iface.IMovieClipRenderer><any>super.getRenderer()).isPlaying();
        }

        public isPlaying$java_lang_String(label : string) : boolean {
            return (<splashjs.render.display.iface.IMovieClipRenderer><any>super.getRenderer())['isPlaying$java_lang_String'](label);
        }

        public isPlaying(label? : any) : any {
            if(((typeof label === 'string') || label === null)) {
                return <any>this.isPlaying$java_lang_String(label);
            } else if(label === undefined) {
                return <any>this.isPlaying$();
            } else throw new Error('invalid overload');
        }

        public getCurrentLoopCount() : number {
            return (<splashjs.render.display.iface.IMovieClipRenderer><any>super.getRenderer()).getCurrentLoopCount();
        }

        public isLooping() : boolean {
            return (<splashjs.render.display.iface.IMovieClipRenderer><any>super.getRenderer()).isLooping();
        }

        public getAllLabels() : Array<string> {
            let labels : Array<string> = <any>([]);
            for(let i : number = 0; i < /* size */(<number>this.movieClipsData.length); i++) {{
                /* add */(labels.push(/* get */this.movieClipsData[i].getLabel())>0);
            };}
            return labels;
        }

        public play() {
            (<splashjs.render.display.iface.IMovieClipRenderer><any>super.getRenderer()).play();
        }

        public stop() {
            (<splashjs.render.display.iface.IMovieClipRenderer><any>super.getRenderer()).stop();
        }
    }
    MovieClip["__class"] = "splashjs.display.MovieClip";
    MovieClip["__interfaces"] = ["splashjs.display.iface.IDraggable","splashjs.display.iface.IDisplayObject","splashjs.display.iface.ISprite","splashjs.display.iface.IDisplayObjectContainer","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.display.iface.IMovieClip","splashjs.events.iface.IEventDispatcher"];


}
namespace splashjs.display.desktop {
    export class Stage extends splashjs.display.Stage implements splashjs.display.desktop.iface.IStage {
        nativeWindow : splashjs.display.desktop.iface.INativeWindow;

        public constructor(stageOwnerName : string, width : number, height : number) {
            super(stageOwnerName, width, height);
            if(this.nativeWindow===undefined) this.nativeWindow = null;
        }

        public setNativeWindow(nativeWindow : splashjs.display.desktop.iface.INativeWindow) {
            this.nativeWindow = nativeWindow;
        }

        public getNativeWindow() : splashjs.display.desktop.iface.INativeWindow {
            return this.nativeWindow;
        }
    }
    Stage["__class"] = "splashjs.display.desktop.Stage";
    Stage["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IStage","splashjs.display.iface.IDisplayObjectContainer","splashjs.display.iface.IBitmapDrawable","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.display.desktop.iface.IStage"];


}
namespace splashjs.render.controls {
    export abstract class BaseListRenderer extends splashjs.render.controls.ControlRenderer implements splashjs.render.controls.iface.IBaseListRenderer {
        constructor() {
            super();
        }
    }
    BaseListRenderer["__class"] = "splashjs.render.controls.BaseListRenderer";
    BaseListRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.controls.iface.IBaseListRenderer"];


}
namespace splashjs.render.controls {
    export abstract class BaseTextRenderer extends splashjs.render.controls.ControlRenderer implements splashjs.render.controls.iface.IBaseTextRenderer {
        public setText() {
            let text : string = (<splashjs.controls.iface.IBaseText><any>super.getRenderObject()).getText();
            if(text != null) (<HTMLElement>super.getDOMElement()).innerText = text; else (<HTMLElement>super.getDOMElement()).innerText = "";
        }

        constructor() {
            super();
        }
    }
    BaseTextRenderer["__class"] = "splashjs.render.controls.BaseTextRenderer";
    BaseTextRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.controls.iface.IBaseTextRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.controls {
    export class RadioButtonRenderer extends splashjs.render.controls.ControlRenderer implements splashjs.render.controls.iface.IRadioButtonRenderer {
        /*private*/ htmlInputElement : HTMLInputElement;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.htmlInputElement===undefined) this.htmlInputElement = null;
            super.setRenderObject(renderObject);
            this.htmlInputElement = <HTMLInputElement>document.createElement("input");
            this.htmlInputElement.type = "radio";
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlInputElement));
        }

        public create() {
        }

        public setSelected() {
            let selected : boolean = (<splashjs.controls.iface.IRadioButton><any>super.getRenderObject()).getSelected();
            if(selected === true) this.htmlInputElement.checked = true; else if(selected === false) this.htmlInputElement.checked = false;
        }

        public setGroup() {
            let group : splashjs.controls.iface.IRadioButtonGroup = (<splashjs.controls.iface.IRadioButton><any>super.getRenderObject()).getGroup();
            if(group != null) this.htmlInputElement.name = group.getName(); else if(group == null) this.htmlInputElement.removeAttribute("name");
        }
    }
    RadioButtonRenderer["__class"] = "splashjs.render.controls.RadioButtonRenderer";
    RadioButtonRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.controls.iface.IRadioButtonRenderer"];


}
namespace splashjs.render.controls {
    export class SpacerRenderer extends splashjs.render.controls.ControlRenderer implements splashjs.render.controls.iface.ISpacerRenderer {
        /*private*/ htmlDivElement : HTMLDivElement;

        /*private*/ spacer : splashjs.controls.iface.ISpacer;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.htmlDivElement===undefined) this.htmlDivElement = null;
            if(this.spacer===undefined) this.spacer = null;
            this.spacer = <splashjs.controls.iface.ISpacer><any>renderObject;
            this.htmlDivElement = <HTMLDivElement>document.createElement("div");
            super.setRenderObject(renderObject);
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlDivElement));
        }
    }
    SpacerRenderer["__class"] = "splashjs.render.controls.SpacerRenderer";
    SpacerRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.controls.iface.ISpacerRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.controls {
    export class TreeRenderer extends splashjs.render.controls.ControlRenderer implements splashjs.render.controls.iface.ITreeRenderer {
        /*private*/ container : splashjs.display.iface.ISprite;

        /*private*/ htmlSpanElement : HTMLSpanElement;

        px : number = 0;

        py : number = 0;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.container===undefined) this.container = null;
            if(this.htmlSpanElement===undefined) this.htmlSpanElement = null;
            super.setRenderObject(renderObject);
            this.htmlSpanElement = <HTMLSpanElement>document.createElement("span");
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlSpanElement));
            this.create();
        }

        public create() {
            let jsRootObject : Object = <Object>(<splashjs.controls.iface.ITree><any>super.getRenderObject()).getTreeData();
            if(jsRootObject != null) {
                this.container = new splashjs.display.Sprite();
            }
        }
    }
    TreeRenderer["__class"] = "splashjs.render.controls.TreeRenderer";
    TreeRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.controls.iface.ITreeRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.display {
    export class SceneRenderer extends splashjs.render.display.DisplayObjectContainerRenderer {
        htmlDivElement : HTMLDivElement;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.htmlDivElement===undefined) this.htmlDivElement = null;
            super.setRenderObject(renderObject);
            this.htmlDivElement = <HTMLDivElement>document.createElement("div");
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlDivElement));
        }

        public applyCSS() {
            this.htmlDivElement.style.display = "inline-block";
        }
    }
    SceneRenderer["__class"] = "splashjs.render.display.SceneRenderer";
    SceneRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.display.iface.IDisplayObjectContainerRenderer"];


}
namespace splashjs.render.display {
    export class SpriteRenderer extends splashjs.render.display.DisplayObjectContainerRenderer {
        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            super.setRenderObject(renderObject);
            super.setRenderElement(new splashjs.render.RenderElement(<HTMLSpanElement>document.createElement("span")));
        }
    }
    SpriteRenderer["__class"] = "splashjs.render.display.SpriteRenderer";
    SpriteRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.display.iface.IDisplayObjectContainerRenderer"];


}
namespace splashjs.render.display {
    export class StageRenderer extends splashjs.render.display.DisplayObjectContainerRenderer implements splashjs.render.display.iface.IStageRenderer {
        /*private*/ timer : java.util.Timer;

        /*private*/ htmlSpanElement : HTMLSpanElement;

        /*private*/ stage : splashjs.display.iface.IStage;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.timer===undefined) this.timer = null;
            if(this.htmlSpanElement===undefined) this.htmlSpanElement = null;
            if(this.stage===undefined) this.stage = null;
            super.setRenderObject(renderObject);
            this.stage = <splashjs.display.iface.IStage><any>renderObject;
            this.htmlSpanElement = <HTMLSpanElement>document.createElement("span");
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlSpanElement));
            this.timer = new java.util.Timer();
        }

        /**
         * 
         */
        public createEventListeners() {
            super.createEventListeners();
            this.htmlSpanElement.tabIndex = 0;
            this.htmlSpanElement.addEventListener(splashjs.render.HTMLDomEventName.KEYPRESS, (event) => {
                let domKeyboardEvent : KeyboardEvent = <KeyboardEvent>event;
                let loc : number = /* intValue */(new Number(domKeyboardEvent.location).valueOf()|0);
                let location : string = loc + "";
                if(loc === domKeyboardEvent.DOM_KEY_LOCATION_STANDARD) location = splashjs.ui.KeyLocation.STANDARD; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_LEFT) location = splashjs.ui.KeyLocation.LEFT; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_RIGHT) location = splashjs.ui.KeyLocation.RIGHT; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_NUMPAD) location = splashjs.ui.KeyLocation.NUMPAD;
                let charCode : number = /* intValue */(new Number(domKeyboardEvent.charCode).valueOf()|0);
                let keyCode : number = /* intValue */(new Number(domKeyboardEvent.keyCode).valueOf()|0);
                let which : number = /* intValue */(new Number(domKeyboardEvent.which).valueOf()|0);
                let keyboardEvent : splashjs.events.iface.IKeyboardEvent = new splashjs.events.KeyboardEvent(splashjs.events.KeyboardEvent.KEY_PRESS, domKeyboardEvent.altKey, charCode, domKeyboardEvent.char, domKeyboardEvent.ctrlKey, domKeyboardEvent.key, keyCode, location, domKeyboardEvent.metaKey, domKeyboardEvent.repeat, domKeyboardEvent.shiftKey, which);
                this.getRenderObject().dispatchEvent(keyboardEvent);
            });
            this.htmlSpanElement.addEventListener(splashjs.render.HTMLDomEventName.KEYUP, (event) => {
                let domKeyboardEvent : KeyboardEvent = <KeyboardEvent>event;
                let loc : number = /* intValue */(new Number(domKeyboardEvent.location).valueOf()|0);
                let location : string = loc + "";
                if(loc === domKeyboardEvent.DOM_KEY_LOCATION_STANDARD) location = splashjs.ui.KeyLocation.STANDARD; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_LEFT) location = splashjs.ui.KeyLocation.LEFT; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_RIGHT) location = splashjs.ui.KeyLocation.RIGHT; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_NUMPAD) location = splashjs.ui.KeyLocation.NUMPAD;
                let charCode : number = /* intValue */(new Number(domKeyboardEvent.charCode).valueOf()|0);
                let keyCode : number = /* intValue */(new Number(domKeyboardEvent.keyCode).valueOf()|0);
                let which : number = /* intValue */(new Number(domKeyboardEvent.which).valueOf()|0);
                let keyboardEvent : splashjs.events.iface.IKeyboardEvent = new splashjs.events.KeyboardEvent(splashjs.events.KeyboardEvent.KEY_UP, domKeyboardEvent.altKey, charCode, domKeyboardEvent.char, domKeyboardEvent.ctrlKey, domKeyboardEvent.key, keyCode, location, domKeyboardEvent.metaKey, domKeyboardEvent.repeat, domKeyboardEvent.shiftKey, which);
                this.getRenderObject().dispatchEvent(keyboardEvent);
            });
            this.htmlSpanElement.addEventListener(splashjs.render.HTMLDomEventName.KEYDOWN, (event) => {
                let domKeyboardEvent : KeyboardEvent = <KeyboardEvent>event;
                let loc : number = /* intValue */(new Number(domKeyboardEvent.location).valueOf()|0);
                let location : string = loc + "";
                if(loc === domKeyboardEvent.DOM_KEY_LOCATION_STANDARD) location = splashjs.ui.KeyLocation.STANDARD; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_LEFT) location = splashjs.ui.KeyLocation.LEFT; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_RIGHT) location = splashjs.ui.KeyLocation.RIGHT; else if(loc === domKeyboardEvent.DOM_KEY_LOCATION_NUMPAD) location = splashjs.ui.KeyLocation.NUMPAD;
                let charCode : number = /* intValue */(new Number(domKeyboardEvent.charCode).valueOf()|0);
                let keyCode : number = /* intValue */(new Number(domKeyboardEvent.keyCode).valueOf()|0);
                let which : number = /* intValue */(new Number(domKeyboardEvent.which).valueOf()|0);
                let keyboardEvent : splashjs.events.iface.IKeyboardEvent = new splashjs.events.KeyboardEvent(splashjs.events.KeyboardEvent.KEY_DOWN, domKeyboardEvent.altKey, charCode, domKeyboardEvent.char, domKeyboardEvent.ctrlKey, domKeyboardEvent.key, keyCode, location, domKeyboardEvent.metaKey, domKeyboardEvent.repeat, domKeyboardEvent.shiftKey, which);
                this.getRenderObject().dispatchEvent(keyboardEvent);
            });
        }

        public getStageWidth() : number {
            let stageOwner : splashjs.application.iface.IStageOwner = this.stage.getStageOwner();
            return (<number>(<HTMLElement>stageOwner.getRenderer().getDOMElement()).clientWidth|0);
        }

        public getStageHeight() : number {
            let stageOwner : splashjs.application.iface.IStageOwner = this.stage.getStageOwner();
            return (<number>(<HTMLElement>stageOwner.getRenderer().getDOMElement()).clientHeight|0);
        }

        /**
         * 
         */
        public setColor() {
            let color : splashjs.utils.iface.IColor = this.stage.getColor();
            let stageOwner : splashjs.application.iface.IStageOwner = this.stage.getStageOwner();
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(color.getColorType(), splashjs.utils.ColorType.GRADIENT)) {
            } else {
                (<HTMLElement>stageOwner.getRenderer().getDOMElement()).style.backgroundColor = this.getCSSColorText();
            }
        }

        /**
         * 
         */
        public startEnterFrameExitFrameDispatcherLoop() {
            this.timer.scheduleAtFixedRate$java_util_TimerTask$long$long(new StageRenderer.StageRenderer$0(this), 0, 15);
        }

        public setScene() {
            let scene : splashjs.display.iface.IScene = this.stage.getScene();
            this.appendChild(scene.getRenderer());
            let addedToStageEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, scene, scene);
            scene.dispatchEvent(addedToStageEvent);
        }

        public removeScene() {
            let scene : splashjs.display.iface.IScene = this.stage.getScene();
            this.removeChild(scene.getRenderer());
            let removedFromStage : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, scene, scene);
            scene.dispatchEvent(removedFromStage);
        }

        public getCSSColorText() : string {
            let colorName : string = splashjs.utils.ColorName.BLACK;
            let color : splashjs.utils.iface.IColor = (<splashjs.display.iface.IStage><any>super.getRenderObject()).getColor();
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(color.getColorType(), splashjs.utils.ColorType.NAME)) colorName = color.getColorName(); else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(color.getColorType(), splashjs.utils.ColorType.HEX)) colorName = color.getHEX();
            return colorName;
        }
    }
    StageRenderer["__class"] = "splashjs.render.display.StageRenderer";
    StageRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.display.iface.IStageRenderer","splashjs.render.display.iface.IDisplayObjectContainerRenderer"];



    export namespace StageRenderer {

        export class StageRenderer$0 extends java.util.TimerTask {
            public __parent: any;
            public run() {
                this.__parent.getRenderObject().dispatchEvent(new splashjs.events.Event(splashjs.events.Event.ENTER_FRAME));
                this.__parent.getRenderObject().dispatchEvent(new splashjs.events.Event(splashjs.events.Event.EXIT_FRAME));
            }

            constructor(__parent: any) {
                super();
                this.__parent = __parent;
            }
        }
        StageRenderer$0["__interfaces"] = ["java.lang.Runnable"];


    }

}
namespace splashjs.render.display {
    export class CircleRenderer extends splashjs.render.display.ShapeRenderer implements splashjs.render.display.iface.ICircleRenderer {
        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            super.setRenderObject(renderObject);
            super.setRenderElement(new splashjs.render.RenderElement(<SVGElement>document.createElementNS(this.SVGNS, "svg")));
            this.create();
        }

        public create() {
            this.childSVGElement = <SVGCircleElement>document.createElementNS(this.SVGNS, "circle");
            this.setCircleAttributes();
            this.getSVGElement().appendChild(this.childSVGElement);
        }

        public update() {
            this.setCircleAttributes();
        }

        /*private*/ setCircleAttributes() {
            this.childSVGElement.setAttributeNS(null, "r", this.getSVGCircleRadiusText());
            this.childSVGElement.setAttributeNS(null, "cx", this.getSVGCircleCenterXText());
            this.childSVGElement.setAttributeNS(null, "cy", this.getSVGCircleCenterYText());
            this.childSVGElement.setAttributeNS(null, "stroke", this.getSVGShapeStrokeColorNameText());
            this.childSVGElement.setAttributeNS(null, "fill", this.getSVGShapeFillColorNameText());
            this.childSVGElement.setAttributeNS(null, "stroke-width", this.getSVGShapeStrokeWidthText());
            this.getSVGElement().setAttributeNS(null, "height", this.getSVGCircleHeightText());
            this.getSVGElement().setAttributeNS(null, "width", this.getSVGCircleWidthText());
        }

        /**
         * 
         */
        public setRadius() {
            this.childSVGElement.setAttributeNS(null, "r", this.getSVGCircleRadiusText());
            this.childSVGElement.setAttributeNS(null, "cx", this.getSVGCircleCenterXText());
            this.childSVGElement.setAttributeNS(null, "cy", this.getSVGCircleCenterYText());
            this.getSVGElement().setAttributeNS(null, "height", this.getSVGCircleHeightText());
            this.getSVGElement().setAttributeNS(null, "width", this.getSVGCircleWidthText());
        }

        public getOriginalWidth() : number {
            return /* parseInt */parseInt(this.getSVGCircleWidthText());
        }

        public getOriginalHeight() : number {
            return /* parseInt */parseInt(this.getSVGCircleHeightText());
        }
    }
    CircleRenderer["__class"] = "splashjs.render.display.CircleRenderer";
    CircleRenderer["__interfaces"] = ["splashjs.render.display.iface.ICircleRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.display.iface.IShapeRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.display {
    export class LineRenderer extends splashjs.render.display.ShapeRenderer {
        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            super.setRenderObject(renderObject);
            super.setRenderElement(new splashjs.render.RenderElement(<SVGElement>document.createElementNS(this.SVGNS, "svg")));
            this.create();
        }

        /**
         * 
         */
        public create() {
            this.childSVGElement = <SVGLineElement>document.createElementNS(this.SVGNS, "line");
            this.setLineAttributes();
            super.getSVGElement().appendChild(this.childSVGElement);
        }

        public update() {
            if(this.childSVGElement != null) {
                this.setLineAttributes();
            }
        }

        /*private*/ setLineAttributes() {
            this.childSVGElement.setAttributeNS(null, "x1", "0");
            this.childSVGElement.setAttributeNS(null, "y1", this.getSVGLineY1Text());
            this.childSVGElement.setAttributeNS(null, "x2", this.getSVGLineX2Text());
            this.childSVGElement.setAttributeNS(null, "y2", this.getSVGLineY2Text());
            this.childSVGElement.setAttributeNS(null, "stroke", this.getSVGShapeStrokeColorNameText());
            this.childSVGElement.setAttributeNS(null, "stroke-width", this.getSVGShapeStrokeWidthText());
            this.getSVGElement().setAttributeNS(null, "height", this.getSVGLineHeightText());
            this.getSVGElement().setAttributeNS(null, "width", this.getSVGLineWidthText());
            (<splashjs.display.iface.IDisplayObject><any>super.getRenderObject()).setWidth(/* parseInt */parseInt(this.getWidthAsString()));
            (<splashjs.display.iface.IDisplayObject><any>super.getRenderObject()).setHeight(/* parseInt */parseInt(this.getHeightAsString()));
        }

        public getOriginalWidth() : number {
            return /* parseInt */parseInt(this.getSVGLineWidthText());
        }

        public getOriginalHeight() : number {
            return /* parseInt */parseInt(this.getSVGLineHeightText());
        }

        /*private*/ getWidthAsString() : string {
            let width : string = "0";
            width = (<splashjs.display.iface.ILine><any>super.getRenderObject()).getLength() + "";
            return width;
        }

        /*private*/ getHeightAsString() : string {
            let height : string = "0";
            height = this.getStrokeWidthAsString();
            return height;
        }
    }
    LineRenderer["__class"] = "splashjs.render.display.LineRenderer";
    LineRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.display.iface.IShapeRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.display {
    export class RectangleRenderer extends splashjs.render.display.ShapeRenderer implements splashjs.render.display.iface.IRectangleRenderer {
        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            super.setRenderObject(renderObject);
            super.setRenderElement(new splashjs.render.RenderElement(<SVGElement>document.createElementNS(this.SVGNS, "svg")));
        }

        public create() {
            this.childSVGElement = <SVGRectElement>document.createElementNS(this.SVGNS, "rect");
            this.setRectangleAttributes();
            this.getSVGElement().appendChild(this.childSVGElement);
        }

        public update() {
            this.setRectangleAttributes();
        }

        /*private*/ setRectangleAttributes() {
            this.childSVGElement.setAttributeNS(null, "x", "0");
            this.childSVGElement.setAttributeNS(null, "y", "0");
            this.childSVGElement.setAttributeNS(null, "rx", this.getCornerRadiusXAsString());
            this.childSVGElement.setAttributeNS(null, "ry", this.getCornerRadiusYAsString());
            this.childSVGElement.setAttributeNS(null, "height", this.getRectangleHeightAsString());
            this.childSVGElement.setAttributeNS(null, "width", this.getRectangleWidthAsString());
            this.childSVGElement.setAttributeNS(null, "stroke", this.getStrokeColorNameAsString());
            this.childSVGElement.setAttributeNS(null, "fill", this.getFillColorNameAsString());
            this.childSVGElement.setAttributeNS(null, "stroke-width", this.getStrokeWidthAsString());
            this.getSVGElement().setAttributeNS(null, "height", this.getRectangleHeightAsString());
            this.getSVGElement().setAttributeNS(null, "width", this.getRectangleWidthAsString());
            (<splashjs.display.iface.IDisplayObject><any>super.getRenderObject()).setWidth(/* parseInt */parseInt(this.getRectangleWidthAsString()));
            (<splashjs.display.iface.IDisplayObject><any>super.getRenderObject()).setHeight(/* parseInt */parseInt(this.getRectangleHeightAsString()));
        }

        /*private*/ getCornerRadiusXAsString() : string {
            let cornerRadiusX : string = "0";
            cornerRadiusX = (<splashjs.display.iface.IRectangle><any>super.getRenderObject()).getCornerRadiusX() + "";
            return cornerRadiusX;
        }

        /*private*/ getCornerRadiusYAsString() : string {
            let cornerRadiusY : string = "0";
            cornerRadiusY = (<splashjs.display.iface.IRectangle><any>super.getRenderObject()).getCornerRadiusY() + "";
            return cornerRadiusY;
        }

        /*private*/ getRectangleWidthAsString() : string {
            let width : string = "0";
            width = (<splashjs.display.iface.IRectangle><any>super.getRenderObject()).getRectangleWidth() + "";
            return width;
        }

        /*private*/ getRectangleHeightAsString() : string {
            let height : string = "0";
            height = (<splashjs.display.iface.IRectangle><any>super.getRenderObject()).getRectangleHeight() + "";
            return height;
        }

        public setCornerRadiusX() {
            this.childSVGElement.setAttributeNS(null, "rx", this.getCornerRadiusXAsString());
        }

        public setCorcnerRadiusY() {
            this.childSVGElement.setAttributeNS(null, "ry", this.getCornerRadiusYAsString());
        }

        public setRectangleWidth() {
            this.childSVGElement.setAttributeNS(null, "width", this.getRectangleWidthAsString());
        }

        public setRectangleHeight() {
            this.childSVGElement.setAttributeNS(null, "height", this.getRectangleHeightAsString());
        }
    }
    RectangleRenderer["__class"] = "splashjs.render.display.RectangleRenderer";
    RectangleRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.display.iface.IShapeRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.display.iface.IRectangleRenderer"];


}
namespace splashjs.render.text {
    export class DynamicTextRenderer extends splashjs.render.text.TextRenderer {
        public getClientWidth() : number {
            return (<number>(<HTMLElement>this.getDOMElement()).clientWidth|0);
        }

        public getClientHeight() : number {
            return (<number>(<HTMLElement>this.getDOMElement()).clientHeight|0);
        }

        constructor() {
            super();
        }
    }
    DynamicTextRenderer["__class"] = "splashjs.render.text.DynamicTextRenderer";
    DynamicTextRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.text.iface.ITextRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.text {
    export class InputTextRenderer extends splashjs.render.text.TextRenderer implements splashjs.render.text.iface.IInputTextRenderer {
        /*private*/ htmlInputElement : HTMLInputElement;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.htmlInputElement===undefined) this.htmlInputElement = null;
            super.setRenderObject(renderObject);
            this.htmlInputElement = <HTMLInputElement>document.createElement("input");
            this.htmlInputElement.setAttribute("type", "text");
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlInputElement));
            this.applyCSS();
            this.createEventListeners();
        }

        public create() {
        }

        public createEventListeners() {
            super.createEventListeners();
            this.htmlInputElement.addEventListener(splashjs.render.HTMLDomEventName.CHANGE, (event) => {
                console.info("change");
                let changeEvent : splashjs.events.iface.IEvent = new splashjs.events.Event(splashjs.events.Event.CHANGE, this.getRenderObject(), this.getRenderObject());
                this.getRenderObject().dispatchEvent(changeEvent);
            });
        }

        public setText() {
            let txt : string = (<splashjs.text.iface.IText><any>super.getRenderObject()).getText();
            if(txt != null) this.htmlInputElement.setAttribute("value", txt);
        }

        public setPlaceholder() {
            let placeholder : string = (<splashjs.text.iface.IInputText><any>super.getRenderObject()).getPlaceholder();
            if(placeholder != null) this.htmlInputElement.setAttribute("placeholder", placeholder);
        }

        public setBackgroundColor() {
            let backgroundColor : splashjs.utils.iface.IColor = (<splashjs.text.iface.IInputText><any>super.getRenderObject()).getBackgroundColor();
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(backgroundColor.getColorType(), splashjs.utils.ColorType.NAME)) {
                let colorName : string = backgroundColor.getColorName();
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(colorName, splashjs.utils.ColorName.NONE)) {
                    this.htmlInputElement.style.background = "none";
                } else {
                    this.htmlInputElement.style.backgroundColor = colorName;
                }
            }
        }

        public setBorderColor() {
            let borderColor : splashjs.utils.iface.IColor = (<splashjs.text.iface.IInputText><any>super.getRenderObject()).getBorderColor();
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(borderColor.getColorType(), splashjs.utils.ColorType.NAME)) {
                let colorName : string = borderColor.getColorName();
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(colorName, splashjs.utils.ColorName.NONE)) {
                    this.htmlInputElement.style.border = "none";
                } else {
                    this.htmlInputElement.style.borderColor = colorName;
                }
            }
        }

        public getClientWidth() : number {
            return (<number>(<HTMLElement>this.getDOMElement()).clientWidth|0);
        }

        public getClientHeight() : number {
            return (<number>(<HTMLElement>this.getDOMElement()).clientHeight|0);
        }

        /**
         * 
         */
        public applyCSS() {
            this.htmlInputElement.style.background = "none";
            this.htmlInputElement.style.borderWidth = "1px";
            this.htmlInputElement.style.borderColor = "#000000";
        }
    }
    InputTextRenderer["__class"] = "splashjs.render.text.InputTextRenderer";
    InputTextRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.text.iface.ITextRenderer","splashjs.render.iface.IRenderer","splashjs.render.text.iface.IInputTextRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.text {
    export class StaticTextRenderer extends splashjs.render.text.TextRenderer implements splashjs.render.text.iface.IStaticTextRenderer {
        htmlParagraphElement : HTMLParagraphElement;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.htmlParagraphElement===undefined) this.htmlParagraphElement = null;
            super.setRenderObject(renderObject);
            this.htmlParagraphElement = <HTMLParagraphElement>document.createElement("p");
            this.renderElement = new splashjs.render.RenderElement(this.htmlParagraphElement);
        }

        public create() {
            this.htmlParagraphElement.innerText = (<splashjs.text.iface.IStaticText><any>super.getRenderObject()).getText();
        }

        public getOriginalWidth() : number {
            return (<number>(<HTMLElement>this.getDOMElement()).clientWidth|0);
        }

        public getOriginalHeight() : number {
            return (<number>(<HTMLElement>this.getDOMElement()).clientHeight|0);
        }

        public setText() {
            this.htmlParagraphElement.innerText = (<splashjs.text.iface.IStaticText><any>super.getRenderObject()).getText();
        }

        /*private*/ getHTMLParagraphElement() : HTMLParagraphElement {
            let htmlParagraphElement : HTMLParagraphElement = <HTMLParagraphElement>this.getDOMElement();
            return htmlParagraphElement;
        }
    }
    StaticTextRenderer["__class"] = "splashjs.render.text.StaticTextRenderer";
    StaticTextRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.text.iface.ITextRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.text.iface.IStaticTextRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.layout {
    export class HBoxLayoutRenderer extends splashjs.render.layout.BoxLayoutRenderer implements splashjs.render.layout.iface.IHBoxLayoutRenderer {
        /*private*/ hBoxLayout : splashjs.layout.iface.IHBoxLayout;

        /*private*/ htmlDivElement : HTMLDivElement;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.hBoxLayout===undefined) this.hBoxLayout = null;
            if(this.htmlDivElement===undefined) this.htmlDivElement = null;
            this.hBoxLayout = <splashjs.layout.iface.IHBoxLayout><any>renderObject;
            super.setRenderObject(renderObject);
            this.htmlDivElement = <HTMLDivElement>document.createElement("div");
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlDivElement));
        }

        public add(container : splashjs.layout.iface.IContainer) {
            super.add(container);
        }

        public refreshLayout() {
        }

        public applyCSS() {
            super.applyCSS();
            this.htmlDivElement.style.flexDirection = "row";
        }
    }
    HBoxLayoutRenderer["__class"] = "splashjs.render.layout.HBoxLayoutRenderer";
    HBoxLayoutRenderer["__interfaces"] = ["splashjs.render.layout.iface.ILayoutRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.layout.iface.IHBoxLayoutRenderer","splashjs.render.iface.IRenderer","splashjs.render.layout.iface.IBoxLayoutRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.layout {
    export class VBoxLayoutRenderer extends splashjs.render.layout.BoxLayoutRenderer implements splashjs.render.layout.iface.IVBoxLayoutRenderer {
        /*private*/ vBoxLayout : splashjs.layout.iface.IVBoxLayout;

        /*private*/ htmlDivElement : HTMLDivElement;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.vBoxLayout===undefined) this.vBoxLayout = null;
            if(this.htmlDivElement===undefined) this.htmlDivElement = null;
            this.vBoxLayout = <splashjs.layout.iface.IVBoxLayout><any>renderObject;
            super.setRenderObject(renderObject);
            this.htmlDivElement = <HTMLDivElement>document.createElement("div");
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlDivElement));
        }

        public add(container : splashjs.layout.iface.IContainer) {
            super.add(container);
        }

        public refreshLayout() {
        }

        public applyCSS() {
            super.applyCSS();
            this.htmlDivElement.style.flexDirection = "column";
        }
    }
    VBoxLayoutRenderer["__class"] = "splashjs.render.layout.VBoxLayoutRenderer";
    VBoxLayoutRenderer["__interfaces"] = ["splashjs.render.layout.iface.ILayoutRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.layout.iface.IVBoxLayoutRenderer","splashjs.render.layout.iface.IBoxLayoutRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.controls {
    export class TextArea extends splashjs.controls.BaseInput implements splashjs.controls.iface.ITextArea {
        public constructor() {
            super("textArea");
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(TextArea, this));
        }

        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                this.originalWidth = (<splashjs.render.controls.iface.ITextAreaRenderer><any>super.getRenderer()).getOriginalWidth();
                this.originalHeight = (<splashjs.render.controls.iface.ITextAreaRenderer><any>super.getRenderer()).getOriginalHeight();
                if(this.width === 0 && this.originalWidth !== 0) super.setWidth(this.originalWidth);
                if(this.height === 0 && this.originalHeight !== 0) super.setHeight(this.originalHeight);
            }
            return super.dispatchEvent(event);
        }

        /**
         * 
         */
        public render() {
            super.render();
            (<splashjs.render.controls.iface.ITextAreaRenderer><any>super.getRenderer()).setResize("none");
        }
    }
    TextArea["__class"] = "splashjs.controls.TextArea";
    TextArea["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.controls.iface.IBaseInput","splashjs.display.iface.IInteractiveObject","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl","splashjs.controls.iface.ITextArea","splashjs.controls.iface.IBaseText"];


}
namespace splashjs.controls {
    export class TextInput extends splashjs.controls.BaseInput implements splashjs.controls.iface.ITextInput {
        /*private*/ displayAsPassword : boolean = false;

        public constructor() {
            super("textInput");
            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(TextInput, this));
        }

        public setDisplayAsPassword(displayAsPassword : boolean) {
            this.displayAsPassword = displayAsPassword;
        }

        public getDisplayAsPassword() : boolean {
            return this.displayAsPassword;
        }

        public dispatchEvent(event : splashjs.events.iface.IEvent) : boolean {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                this.originalWidth = (<splashjs.render.controls.iface.ITextInputRenderer><any>super.getRenderer()).getOriginalWidth();
                this.originalHeight = (<splashjs.render.controls.iface.ITextInputRenderer><any>super.getRenderer()).getOriginalHeight();
                if(this.width === 0 && this.originalWidth !== 0) super.setWidth(this.originalWidth);
                if(this.height === 0 && this.originalHeight !== 0) super.setHeight(this.originalHeight);
            }
            return super.dispatchEvent(event);
        }

        /**
         * 
         * @param {string} text
         */
        public setText(text : string) {
            this.text = text;
            if(super.getRenderer() != null) (<splashjs.render.controls.iface.ITextInputRenderer><any>super.getRenderer()).setText();
        }

        /**
         * 
         */
        public render() {
            super.render();
            (<splashjs.render.controls.iface.ITextInputRenderer><any>super.getRenderer()).setDisplayAsPassword();
            (<splashjs.render.controls.iface.ITextInputRenderer><any>super.getRenderer()).setText();
        }
    }
    TextInput["__class"] = "splashjs.controls.TextInput";
    TextInput["__interfaces"] = ["splashjs.display.iface.IDisplayObject","splashjs.display.iface.IBitmapDrawable","splashjs.controls.iface.IBaseInput","splashjs.display.iface.IInteractiveObject","splashjs.controls.iface.ITextInput","splashjs.lang.iface.ISplashObject","splashjs.events.iface.IEventDispatcher","splashjs.controls.iface.IControl","splashjs.controls.iface.IBaseText"];


}
namespace splashjs.render.controls {
    export class ListRenderer extends splashjs.render.controls.BaseListRenderer implements splashjs.render.controls.iface.IListRenderer {
        /*private*/ htmlSelectElement : HTMLSelectElement;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.htmlSelectElement===undefined) this.htmlSelectElement = null;
            super.setRenderObject(renderObject);
            this.htmlSelectElement = <HTMLSelectElement>document.createElement("select");
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlSelectElement));
        }

        public create() {
        }

        public addItem(item : splashjs.controls.iface.IItem) {
            let option : HTMLOptionElement = <HTMLOptionElement>document.createElement("option");
            option.text = item.getText();
            this.htmlSelectElement.add(option);
        }

        public addItemGroup(itemGroup : splashjs.controls.iface.IItemGroup) {
            let optGroup : HTMLOptGroupElement = <HTMLOptGroupElement>document.createElement("optgroup");
            optGroup.label = itemGroup.getTitle();
            let items : Array<splashjs.controls.iface.IItem> = itemGroup.getAllItems();
            let option : HTMLOptionElement = null;
            let item : splashjs.controls.iface.IItem = null;
            for(let i : number = 0; i < /* size */(<number>items.length); i++) {{
                item = /* get */items[i];
                option = <HTMLOptionElement>document.createElement("option");
                option.text = item.getText();
                optGroup.appendChild(option);
            };}
            this.htmlSelectElement.add(optGroup);
        }

        public addAllItems() {
            let items : Array<splashjs.controls.iface.IBaseItem> = (<splashjs.controls.iface.IList><any>super.getRenderObject()).getAllItems();
            let baseItem : splashjs.controls.iface.IBaseItem = null;
            let option : HTMLOptionElement = null;
            console.info(/* size */(<number>items.length));
            for(let i : number = 0; i < /* size */(<number>items.length); i++) {{
                baseItem = /* get */items[i];
                if(baseItem != null && (baseItem["__interfaces"] != null && baseItem["__interfaces"].indexOf("splashjs.controls.iface.IItem") >= 0 || baseItem.constructor != null && baseItem.constructor["__interfaces"] != null && baseItem.constructor["__interfaces"].indexOf("splashjs.controls.iface.IItem") >= 0)) {
                    this.addItem(<splashjs.controls.iface.IItem><any>baseItem);
                } else if(baseItem != null && (baseItem["__interfaces"] != null && baseItem["__interfaces"].indexOf("splashjs.controls.iface.IItemGroup") >= 0 || baseItem.constructor != null && baseItem.constructor["__interfaces"] != null && baseItem.constructor["__interfaces"].indexOf("splashjs.controls.iface.IItemGroup") >= 0)) {
                    this.addItemGroup(<splashjs.controls.iface.IItemGroup><any>baseItem);
                }
            };}
        }
    }
    ListRenderer["__class"] = "splashjs.render.controls.ListRenderer";
    ListRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.controls.iface.IListRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.controls.iface.IBaseListRenderer"];


}
namespace splashjs.render.controls {
    export abstract class BaseInputRenderer extends splashjs.render.controls.BaseTextRenderer implements splashjs.render.controls.iface.IBaseInputRenderer {
        /*private*/ maxChars : number = 256;

        /*private*/ placeHolderText : string = "";

        /*private*/ editable : boolean = true;

        public createEventListeners() {
            super.createEventListeners();
            super.getDOMElement().addEventListener(splashjs.render.HTMLDomEventName.SELECT, (event) => {
            });
        }

        public create() {
            this.create();
            this.setPlaceHolderText(this.placeHolderText);
            this.setMaxChars(this.maxChars);
            this.setEditable(this.editable);
        }

        public setPlaceHolderText(placeHolderText : string) {
            if(placeHolderText != null) {
                super.getDOMElement().setAttribute("placeHolder", placeHolderText);
                this.placeHolderText = placeHolderText;
            } else {
                super.getDOMElement().setAttribute("placeHolder", "");
                this.placeHolderText = "";
            }
        }

        public getPlaceHolderText() : string {
            return this.placeHolderText;
        }

        public setMaxChars(maxChars : number) {
            if(maxChars >= 1) {
                super.getDOMElement().setAttribute("maxLength", maxChars + "");
                this.maxChars = maxChars;
            }
        }

        public getMaxChars() : number {
            return this.maxChars;
        }

        public setEditable(editable : boolean) {
            if(editable === true) {
                super.getDOMElement().removeAttribute("readOnly");
                this.editable = editable;
            } else if(editable === false) {
                super.getDOMElement().setAttribute("readOnly", "readonly");
                this.editable = editable;
            }
        }

        public getEditable() : boolean {
            return this.editable;
        }

        public abstract setSelection();

        public applyCSS() {
            super.applyCSS();
        }

        constructor() {
            super();
        }
    }
    BaseInputRenderer["__class"] = "splashjs.render.controls.BaseInputRenderer";
    BaseInputRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.controls.iface.IBaseTextRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.controls.iface.IBaseInputRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.controls {
    export class ButtonRenderer extends splashjs.render.controls.BaseTextRenderer implements splashjs.render.controls.iface.IButtonRenderer {
        /*private*/ htmlInputElement : HTMLInputElement;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.htmlInputElement===undefined) this.htmlInputElement = null;
            super.setRenderObject(renderObject);
            this.htmlInputElement = <HTMLInputElement>document.createElement("input");
            this.htmlInputElement.type = "button";
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlInputElement));
        }

        public create() {
            this.setText();
        }

        public setText() {
            let text : string = (<splashjs.controls.iface.IButton><any>super.getRenderObject()).getText();
            if(text != null) this.htmlInputElement.value = text;
        }

        public getWidth() : number {
            return (<number>this.htmlInputElement.clientWidth|0);
        }

        public getHeight() : number {
            return (<number>this.htmlInputElement.clientHeight|0);
        }
    }
    ButtonRenderer["__class"] = "splashjs.render.controls.ButtonRenderer";
    ButtonRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.controls.iface.IBaseTextRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.controls.iface.IButtonRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}
namespace splashjs.render.controls {
    export class LabelRenderer extends splashjs.render.controls.BaseTextRenderer implements splashjs.render.controls.iface.ILabelRenderer {
        /*private*/ htmlParagraphElement : HTMLParagraphElement;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.htmlParagraphElement===undefined) this.htmlParagraphElement = null;
            super.setRenderObject(renderObject);
            this.htmlParagraphElement = <HTMLParagraphElement>document.createElement("p");
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlParagraphElement));
            this.create();
        }

        public create() {
            super.setText();
        }
    }
    LabelRenderer["__class"] = "splashjs.render.controls.LabelRenderer";
    LabelRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.controls.iface.IBaseTextRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.controls.iface.ILabelRenderer"];


}
namespace splashjs.render.display {
    export class MovieClipRenderer extends splashjs.render.display.SpriteRenderer implements splashjs.render.display.iface.IMovieClipRenderer {
        /*private*/ spanElement : HTMLSpanElement;

        movieClip : splashjs.display.iface.IMovieClip;

        count : number = 0;

        currentLoopCount : number = 0;

        loopCount : number = 1;

        timer : splashjs.utils.iface.ITimer;

        /*private*/ playing : boolean = false;

        /*private*/ currentLabel : string = null;

        /*private*/ currentFrameIndex : number = -1;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super(renderObject);
            if(this.spanElement===undefined) this.spanElement = null;
            if(this.movieClip===undefined) this.movieClip = null;
            if(this.timer===undefined) this.timer = null;
            this.movieClip = <splashjs.display.iface.IMovieClip><any>super.getRenderObject();
            this.spanElement = <HTMLSpanElement>super.getDOMElement();
            this.create();
        }

        public create() {
        }

        public gotoAndStop(label : string, frameIndex : number) {
            this.stop();
            let movieClipData : splashjs.animation.iface.IMovieClipData = this.movieClip.getMovieClipDataByLabel(label);
            let spriteSheet : splashjs.animation.iface.ISpriteSheet = movieClipData.getSpriteSheet();
            let imagePath : string = spriteSheet.getImagePath();
            let resource : splashjs.utils.iface.IResource = spriteSheet.getResource();
            let imageBase64 : string = "";
            if(resource != null) imageBase64 = resource.getResourceBase64(); else imageBase64 = spriteSheet.getImageBase64();
            let frames : splashjs.animation.iface.IFrame[] = movieClipData.getFrames();
            let totalFrames : number = frames.length;
            this.spanElement.style.width = frames[frameIndex].getWidth() + this.UNIT;
            this.spanElement.style.height = frames[frameIndex].getHeight() + this.UNIT;
            this.spanElement.style.backgroundImage = "url(\"" + imagePath + "\")";
            let imageFrameIndex : number = frames[frameIndex].getIndex();
            let frameWidth : number = frames[frameIndex].getWidth();
            let frameHeight : number = frames[frameIndex].getHeight();
            let framePerRow : number = (spriteSheet.getWidth() / frameWidth|0);
            let framePerColumn : number = (spriteSheet.getHeight() / frameHeight|0);
            let x : number = -(imageFrameIndex % framePerRow) * frameWidth;
            let y : number = -((imageFrameIndex / framePerRow|0)) * frameHeight;
            this.spanElement.style.backgroundPosition = x + this.UNIT + " " + y + this.UNIT;
            this.currentLabel = label;
            this.currentFrameIndex = frameIndex;
        }

        public gotoAndPlay(label : string, loopCount : number) {
            this.stop();
            this.loopCount = loopCount;
            let movieClipData : splashjs.animation.iface.IMovieClipData = this.movieClip.getMovieClipDataByLabel(label);
            let spriteSheet : splashjs.animation.iface.ISpriteSheet = movieClipData.getSpriteSheet();
            let imagePath : string = spriteSheet.getImagePath();
            let frames : splashjs.animation.iface.IFrame[] = movieClipData.getFrames();
            let totalFrames : number = frames.length;
            if(totalFrames <= 1) {
                this.gotoAndStop(label, 0);
                return;
            }
            let resource : splashjs.utils.iface.IResource = spriteSheet.getResource();
            let imageBase64 : string = "";
            if(resource != null) imageBase64 = resource.getResourceBase64(); else imageBase64 = spriteSheet.getImageBase64();
            this.spanElement.style.width = frames[0].getWidth() + this.UNIT;
            this.spanElement.style.height = frames[0].getHeight() + this.UNIT;
            this.spanElement.style.backgroundImage = "url(\"" + imagePath + "\")";
            let frameRate : number = this.movieClip.getFrameRate();
            let interval : number = ((<number>1000|0) / frameRate|0);
            this.count = 0;
            this.currentLoopCount = 0;
            this.timer = new splashjs.utils.Timer(interval);
            this.timer.addEventListener(splashjs.events.TimerEvent.TIMER, ((frames,spriteSheet,totalFrames) => {
                return (event) => {
                    requestAnimationFrame((time : number) => {
                        let frameIndex : number = frames[this.count].getIndex();
                        let frameWidth : number = frames[this.count].getWidth();
                        let frameHeight : number = frames[this.count].getHeight();
                        let framePerRow : number = (spriteSheet.getWidth() / frameWidth|0);
                        let framePerColumn : number = (spriteSheet.getHeight() / frameHeight|0);
                        let x : number = -(frameIndex % framePerRow) * frameWidth;
                        let y : number = -((frameIndex / framePerRow|0)) * frameHeight;
                        this.spanElement.style.width = frameWidth + this.UNIT;
                        this.spanElement.style.height = frameHeight + this.UNIT;
                        this.spanElement.style.backgroundPosition = x + this.UNIT + " " + y + this.UNIT;
                        this.currentFrameIndex = this.count;
                        if(this.count === totalFrames - 1) {
                            this.currentLoopCount += 1;
                            this.count = 0;
                            if(loopCount !== 0 && this.currentLoopCount >= loopCount) {
                                this.currentLoopCount = -1;
                                (<splashjs.utils.iface.ITimer><any>event.getCurrentTarget()).reset();
                                this.playing = false;
                            }
                        } else {
                            this.count += 1;
                        }
                    });
                }
            })(frames,spriteSheet,totalFrames));
            this.timer.start();
            this.currentLabel = label;
            this.playing = true;
        }

        public stop() {
            if(this.timer != null) {
                this.timer.stop();
                this.playing = false;
            }
        }

        public play() {
        }

        /*private*/ getBackgroundPositionCSSText() : string {
            return null;
        }

        public isPlaying$() : boolean {
            return this.playing;
        }

        public isPlaying$java_lang_String(label : string) : boolean {
            let labelPlaying : boolean = false;
            if(this.currentLabel != null && /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(this.currentLabel, label) && this.playing === true) labelPlaying = true;
            return labelPlaying;
        }

        public isPlaying(label? : any) : any {
            if(((typeof label === 'string') || label === null)) {
                return <any>this.isPlaying$java_lang_String(label);
            } else if(label === undefined) {
                return <any>this.isPlaying$();
            } else throw new Error('invalid overload');
        }

        public getCurrentLabel() : string {
            return this.currentLabel;
        }

        public getCurrentFrameIndex() : number {
            return this.currentFrameIndex;
        }

        public isLooping() : boolean {
            let looping : boolean = false;
            if(this.loopCount === 0 && this.playing === true) looping = true;
            return looping;
        }

        public getCurrentLoopCount() : number {
            return this.currentLoopCount;
        }
    }
    MovieClipRenderer["__class"] = "splashjs.render.display.MovieClipRenderer";
    MovieClipRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.display.iface.IMovieClipRenderer","splashjs.render.display.iface.ISpriteRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.display.iface.IDisplayObjectContainerRenderer"];


}
namespace splashjs.render.controls {
    export class TextAreaRenderer extends splashjs.render.controls.BaseInputRenderer implements splashjs.render.controls.iface.ITextAreaRenderer {
        /*private*/ htmlTextAreaElement : HTMLTextAreaElement;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.htmlTextAreaElement===undefined) this.htmlTextAreaElement = null;
            super.setRenderObject(renderObject);
            this.htmlTextAreaElement = <HTMLTextAreaElement>document.createElement("textarea");
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlTextAreaElement));
        }

        public create() {
        }

        public setSelection() {
            let beginIndex : number = (<splashjs.controls.iface.ITextArea><any>super.getRenderObject()).getSelectionBeginIndex();
            let endIndex : number = (<splashjs.controls.iface.ITextArea><any>super.getRenderObject()).getSelectionEndIndex();
            this.htmlTextAreaElement.focus();
            this.htmlTextAreaElement.setSelectionRange(beginIndex, endIndex);
        }
    }
    TextAreaRenderer["__class"] = "splashjs.render.controls.TextAreaRenderer";
    TextAreaRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.controls.iface.IBaseTextRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.controls.iface.IBaseInputRenderer","splashjs.render.lang.iface.ISplashObjectRenderer","splashjs.render.controls.iface.ITextAreaRenderer"];


}
namespace splashjs.render.controls {
    export class TextInputRenderer extends splashjs.render.controls.BaseInputRenderer implements splashjs.render.controls.iface.ITextInputRenderer {
        /*private*/ htmlInputElement : HTMLInputElement;

        public constructor(renderObject : splashjs.events.iface.IEventDispatcher) {
            super();
            if(this.htmlInputElement===undefined) this.htmlInputElement = null;
            super.setRenderObject(renderObject);
            this.htmlInputElement = <HTMLInputElement>document.createElement("input");
            this.htmlInputElement.type = "text";
            super.setRenderElement(new splashjs.render.RenderElement(this.htmlInputElement));
        }

        public create() {
        }

        public setDisplayAsPassword() {
            let displayAsPassword : boolean = (<splashjs.controls.iface.ITextInput><any>super.getRenderObject()).getDisplayAsPassword();
            if(displayAsPassword === true) this.htmlInputElement.type = "password"; else if(displayAsPassword === false) this.htmlInputElement.type = "text";
        }

        public setSelection() {
            let beginIndex : number = (<splashjs.controls.iface.ITextInput><any>super.getRenderObject()).getSelectionBeginIndex();
            let endIndex : number = (<splashjs.controls.iface.ITextInput><any>super.getRenderObject()).getSelectionEndIndex();
            this.htmlInputElement.focus();
            this.htmlInputElement.setSelectionRange(beginIndex, endIndex);
        }

        /**
         * 
         */
        public setText() {
            let text : string = (<splashjs.controls.iface.IBaseText><any>super.getRenderObject()).getText();
            if(text != null) this.htmlInputElement.value = text; else this.htmlInputElement.value = "";
        }

        public applyCSS() {
            super.applyCSS();
        }
    }
    TextInputRenderer["__class"] = "splashjs.render.controls.TextInputRenderer";
    TextInputRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer","splashjs.render.controls.iface.IBaseTextRenderer","splashjs.render.display.iface.IDisplayObjectRenderer","splashjs.render.iface.IRenderer","splashjs.render.events.iface.IEventDispatcherRenderer","splashjs.render.display.iface.IInteractiveObjectRenderer","splashjs.render.controls.iface.ITextInputRenderer","splashjs.render.controls.iface.IBaseInputRenderer","splashjs.render.lang.iface.ISplashObjectRenderer"];


}


splashjs.text.Font.fonts_$LI$();

splashjs.Global.global_$LI$();

splashjs.utils.Color.LIGHT_GRAY_$LI$();

splashjs.utils.Color.VIOLET_$LI$();

splashjs.utils.Color.AQUA_$LI$();

splashjs.utils.Color.SLATE_BLUE_$LI$();

splashjs.utils.Color.GRAY_$LI$();

splashjs.utils.Color.MEDIUM_SEA_GREEN_$LI$();

splashjs.utils.Color.DODGER_BLUE_$LI$();

splashjs.utils.Color.ORANGE_$LI$();

splashjs.utils.Color.TOMATO_$LI$();

splashjs.utils.Color.WHITE_$LI$();

splashjs.utils.Color.BLACK_$LI$();

splashjs.utils.Color.RED_$LI$();

splashjs.utils.Color.YELLOW_$LI$();

splashjs.utils.Color.GREEN_$LI$();

splashjs.utils.Color.NONE_$LI$();

splashjs.ui.MouseCursor.ZOOM_OUT_$LI$();

splashjs.ui.MouseCursor.ZOOM_IN_$LI$();

splashjs.ui.MouseCursor.WAIT_$LI$();

splashjs.ui.MouseCursor.W_RESIZE_$LI$();

splashjs.ui.MouseCursor.TEXT_$LI$();

splashjs.ui.MouseCursor.SW_RESIZE_$LI$();

splashjs.ui.MouseCursor.SE_RESIZE_$LI$();

splashjs.ui.MouseCursor.S_RESIZE_$LI$();

splashjs.ui.MouseCursor.ROW_RESIZE_$LI$();

splashjs.ui.MouseCursor.PROGRESS_$LI$();

splashjs.ui.MouseCursor.POINTER_$LI$();

splashjs.ui.MouseCursor.NOT_ALLOWED_$LI$();

splashjs.ui.MouseCursor.NO_DROP_$LI$();

splashjs.ui.MouseCursor.NWSE_RESIZE_$LI$();

splashjs.ui.MouseCursor.NW_RESIZE_$LI$();

splashjs.ui.MouseCursor.NS_RESIZE_$LI$();

splashjs.ui.MouseCursor.NESW_RESIZE_$LI$();

splashjs.ui.MouseCursor.NE_RESIZE_$LI$();

splashjs.ui.MouseCursor.N_RESIZE_$LI$();

splashjs.ui.MouseCursor.MOVE_$LI$();

splashjs.ui.MouseCursor.HELP_$LI$();

splashjs.ui.MouseCursor.GRABBING_$LI$();

splashjs.ui.MouseCursor.GRAB_$LI$();

splashjs.ui.MouseCursor.EW_RESIZE_$LI$();

splashjs.ui.MouseCursor.E_RESIZE_$LI$();

splashjs.ui.MouseCursor.DEFAULT_$LI$();

splashjs.ui.MouseCursor.CROSSHAIR_$LI$();

splashjs.ui.MouseCursor.COPY_$LI$();

splashjs.ui.MouseCursor.COL_RESIZE_$LI$();

splashjs.ui.MouseCursor.CONTEXT_MENU_$LI$();

splashjs.ui.MouseCursor.CELL_$LI$();

splashjs.ui.MouseCursor.AUTO_$LI$();

splashjs.ui.MouseCursor.ALL_SCROLL_$LI$();

splashjs.ui.MouseCursor.ALIAS_$LI$();

splashjs.Package.packageData_$LI$();

splashjs.Import.packageName_$LI$();

splashjs.Import.className_$LI$();

splashjs.Class.classes_$LI$();
