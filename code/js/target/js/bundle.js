/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var splashjs;
(function (splashjs) {
    var animation;
    (function (animation) {
        var easing;
        (function (easing) {
            class Back {
                static easeIn$double$double$double$double(t, b, c, d) {
                    let s = 1.70158;
                    return c * (t /= d) * t * ((s + 1) * t - s) + b;
                }
                static easeIn$double$double$double$double$double(t, b, c, d, s) {
                    return c * (t /= d) * t * ((s + 1) * t - s) + b;
                }
                static easeIn(t, b, c, d, s) {
                    if (((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && ((typeof s === 'number') || s === null)) {
                        return splashjs.animation.easing.Back.easeIn$double$double$double$double$double(t, b, c, d, s);
                    }
                    else if (((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && s === undefined) {
                        return splashjs.animation.easing.Back.easeIn$double$double$double$double(t, b, c, d);
                    }
                    else
                        throw new Error('invalid overload');
                }
                static easeOut$double$double$double$double(t, b, c, d) {
                    let s = 1.70158;
                    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
                }
                static easeOut$double$double$double$double$double(t, b, c, d, s) {
                    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
                }
                static easeOut(t, b, c, d, s) {
                    if (((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && ((typeof s === 'number') || s === null)) {
                        return splashjs.animation.easing.Back.easeOut$double$double$double$double$double(t, b, c, d, s);
                    }
                    else if (((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && s === undefined) {
                        return splashjs.animation.easing.Back.easeOut$double$double$double$double(t, b, c, d);
                    }
                    else
                        throw new Error('invalid overload');
                }
                static easeInOut$double$double$double$double(t, b, c, d) {
                    let s = 1.70158;
                    if ((t /= d / 2) < 1)
                        return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
                }
                static easeInOut$double$double$double$double$double(t, b, c, d, s) {
                    if ((t /= d / 2) < 1)
                        return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                    return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
                }
                static easeInOut(t, b, c, d, s) {
                    if (((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && ((typeof s === 'number') || s === null)) {
                        return splashjs.animation.easing.Back.easeInOut$double$double$double$double$double(t, b, c, d, s);
                    }
                    else if (((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && s === undefined) {
                        return splashjs.animation.easing.Back.easeInOut$double$double$double$double(t, b, c, d);
                    }
                    else
                        throw new Error('invalid overload');
                }
            }
            Back.EASE_IN = "back_ease_in";
            Back.EASE_OUT = "back_ease_out";
            Back.EASE_IN_OUT = "back_ease_in_out";
            easing.Back = Back;
            Back["__class"] = "splashjs.animation.easing.Back";
        })(easing = animation.easing || (animation.easing = {}));
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        var easing;
        (function (easing) {
            class Bounce {
                static easeIn(t, b, c, d) {
                    return c - Bounce.easeOut(d - t, 0, c, d) + b;
                }
                static easeOut(t, b, c, d) {
                    if ((t /= d) < (Math.fround(1 / 2.75))) {
                        return c * (7.5625 * t * t) + b;
                    }
                    else if (t < (Math.fround(2 / 2.75))) {
                        return c * (7.5625 * (t -= (Math.fround(1.5 / 2.75))) * t + 0.75) + b;
                    }
                    else if (t < (2.5 / 2.75)) {
                        return c * (7.5625 * (t -= (Math.fround(2.25 / 2.75))) * t + 0.9375) + b;
                    }
                    else {
                        return c * (7.5625 * (t -= (Math.fround(2.625 / 2.75))) * t + 0.984375) + b;
                    }
                }
                static easeInOut(t, b, c, d) {
                    if (t < d / 2)
                        return Bounce.easeIn(t * 2, 0, c, d) * 0.5 + b;
                    else
                        return Bounce.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
                }
            }
            Bounce.EASE_IN = "bounce_ease_in";
            Bounce.EASE_OUT = "bounce_ease_out";
            Bounce.EASE_IN_OUT = "bounce_ease_in_out";
            easing.Bounce = Bounce;
            Bounce["__class"] = "splashjs.animation.easing.Bounce";
        })(easing = animation.easing || (animation.easing = {}));
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        var easing;
        (function (easing) {
            class Circ {
                static easeIn(t, b, c, d) {
                    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
                }
                static easeOut(t, b, c, d) {
                    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
                }
                static easeInOut(t, b, c, d) {
                    if ((t /= d / 2) < 1)
                        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
                }
            }
            Circ.EASE_IN = "circ_ease_in";
            Circ.EASE_OUT = "circ_ease_out";
            Circ.EASE_IN_OUT = "circ_ease_in_out";
            easing.Circ = Circ;
            Circ["__class"] = "splashjs.animation.easing.Circ";
        })(easing = animation.easing || (animation.easing = {}));
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        var easing;
        (function (easing) {
            class Cubic {
                static easeIn(t, b, c, d) {
                    return c * (t /= d) * t * t + b;
                }
                static easeOut(t, b, c, d) {
                    return c * ((t = t / d - 1) * t * t + 1) + b;
                }
                static easeInOut(t, b, c, d) {
                    if ((t /= d / 2) < 1)
                        return c / 2 * t * t * t + b;
                    return c / 2 * ((t -= 2) * t * t + 2) + b;
                }
            }
            Cubic.EASE_IN = "cubic_ease_in";
            Cubic.EASE_OUT = "cubic_ease_out";
            Cubic.EASE_IN_OUT = "cubic_ease_in_out";
            easing.Cubic = Cubic;
            Cubic["__class"] = "splashjs.animation.easing.Cubic";
        })(easing = animation.easing || (animation.easing = {}));
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        var easing;
        (function (easing) {
            class Elastic {
                static easeIn$double$double$double$double(t, b, c, d) {
                    if (t === 0)
                        return b;
                    if ((t /= d) === 1)
                        return b + c;
                    let p = d * 0.3;
                    let a = c;
                    let s = p / 4;
                    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                }
                static easeIn$double$double$double$double$double$double(t, b, c, d, a, p) {
                    let s;
                    if (t === 0)
                        return b;
                    if ((t /= d) === 1)
                        return b + c;
                    if (a < Math.abs(c)) {
                        a = c;
                        s = p / 4;
                    }
                    else {
                        s = p / (2 * Math.PI) * Math.asin(c / a);
                    }
                    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                }
                static easeIn(t, b, c, d, a, p) {
                    if (((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && ((typeof a === 'number') || a === null) && ((typeof p === 'number') || p === null)) {
                        return splashjs.animation.easing.Elastic.easeIn$double$double$double$double$double$double(t, b, c, d, a, p);
                    }
                    else if (((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && a === undefined && p === undefined) {
                        return splashjs.animation.easing.Elastic.easeIn$double$double$double$double(t, b, c, d);
                    }
                    else
                        throw new Error('invalid overload');
                }
                static easeOut$double$double$double$double(t, b, c, d) {
                    if (t === 0)
                        return b;
                    if ((t /= d) === 1)
                        return b + c;
                    let p = d * 0.3;
                    let a = c;
                    let s = p / 4;
                    return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
                }
                static easeOut$double$double$double$double$double$double(t, b, c, d, a, p) {
                    let s;
                    if (t === 0)
                        return b;
                    if ((t /= d) === 1)
                        return b + c;
                    if (a < Math.abs(c)) {
                        a = c;
                        s = p / 4;
                    }
                    else {
                        s = p / (2 * Math.PI) * Math.asin(c / a);
                    }
                    return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
                }
                static easeOut(t, b, c, d, a, p) {
                    if (((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && ((typeof a === 'number') || a === null) && ((typeof p === 'number') || p === null)) {
                        return splashjs.animation.easing.Elastic.easeOut$double$double$double$double$double$double(t, b, c, d, a, p);
                    }
                    else if (((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && a === undefined && p === undefined) {
                        return splashjs.animation.easing.Elastic.easeOut$double$double$double$double(t, b, c, d);
                    }
                    else
                        throw new Error('invalid overload');
                }
                static easeInOut$double$double$double$double(t, b, c, d) {
                    if (t === 0)
                        return b;
                    if ((t /= d / 2) === 2)
                        return b + c;
                    let p = d * (Math.fround(0.3 * 1.5));
                    let a = c;
                    let s = p / 4;
                    if (t < 1)
                        return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
                }
                static easeInOut$double$double$double$double$double$double(t, b, c, d, a, p) {
                    let s;
                    if (t === 0)
                        return b;
                    if ((t /= d / 2) === 2)
                        return b + c;
                    if (a < Math.abs(c)) {
                        a = c;
                        s = p / 4;
                    }
                    else {
                        s = p / (2 * Math.PI) * Math.asin(c / a);
                    }
                    if (t < 1)
                        return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
                }
                static easeInOut(t, b, c, d, a, p) {
                    if (((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && ((typeof a === 'number') || a === null) && ((typeof p === 'number') || p === null)) {
                        return splashjs.animation.easing.Elastic.easeInOut$double$double$double$double$double$double(t, b, c, d, a, p);
                    }
                    else if (((typeof t === 'number') || t === null) && ((typeof b === 'number') || b === null) && ((typeof c === 'number') || c === null) && ((typeof d === 'number') || d === null) && a === undefined && p === undefined) {
                        return splashjs.animation.easing.Elastic.easeInOut$double$double$double$double(t, b, c, d);
                    }
                    else
                        throw new Error('invalid overload');
                }
            }
            Elastic.EASE_IN = "elastic_ease_in";
            Elastic.EASE_OUT = "elastic_ease_out";
            Elastic.EASE_IN_OUT = "elastic_ease_in_out";
            easing.Elastic = Elastic;
            Elastic["__class"] = "splashjs.animation.easing.Elastic";
        })(easing = animation.easing || (animation.easing = {}));
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        var easing;
        (function (easing) {
            class Expo {
                static easeIn(t, b, c, d) {
                    return (t === 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
                }
                static easeOut(t, b, c, d) {
                    return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
                }
                static easeInOut(t, b, c, d) {
                    if (t === 0)
                        return b;
                    if (t === d)
                        return b + c;
                    if ((t /= d / 2) < 1)
                        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
                }
            }
            Expo.EASE_IN = "expo_ease_in";
            Expo.EASE_OUT = "expo_ease_out";
            Expo.EASE_IN_OUT = "expo_ease_in_out";
            easing.Expo = Expo;
            Expo["__class"] = "splashjs.animation.easing.Expo";
        })(easing = animation.easing || (animation.easing = {}));
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        var easing;
        (function (easing) {
            class Linear {
                static easeNone(t, b, c, d) {
                    return c * t / d + b;
                }
                static easeIn(t, b, c, d) {
                    return c * t / d + b;
                }
                static easeOut(t, b, c, d) {
                    return c * t / d + b;
                }
                static easeInOut(t, b, c, d) {
                    return c * t / d + b;
                }
            }
            Linear.EASE_NONE = "linear_ease_none";
            Linear.EASE_IN = "linear_ease_in";
            Linear.EASE_OUT = "linear_ease_out";
            Linear.EASE_IN_OUT = "linear_ease_in_out";
            easing.Linear = Linear;
            Linear["__class"] = "splashjs.animation.easing.Linear";
        })(easing = animation.easing || (animation.easing = {}));
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        var easing;
        (function (easing) {
            class Quad {
                static easeIn(t, b, c, d) {
                    return c * (t /= d) * t + b;
                }
                static easeOut(t, b, c, d) {
                    return -c * (t /= d) * (t - 2) + b;
                }
                static easeInOut(t, b, c, d) {
                    if ((t /= d / 2) < 1)
                        return c / 2 * t * t + b;
                    return -c / 2 * ((--t) * (t - 2) - 1) + b;
                }
            }
            Quad.EASE_IN = "quad_cubic_ease_in";
            Quad.EASE_OUT = "quad_cubic_ease_out";
            Quad.EASE_IN_OUT = "quad_cubic_ease_in_out";
            easing.Quad = Quad;
            Quad["__class"] = "splashjs.animation.easing.Quad";
        })(easing = animation.easing || (animation.easing = {}));
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        var easing;
        (function (easing) {
            class Quart {
                static easeIn(t, b, c, d) {
                    return c * (t /= d) * t * t * t + b;
                }
                static easeOut(t, b, c, d) {
                    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
                }
                static easeInOut(t, b, c, d) {
                    if ((t /= d / 2) < 1)
                        return c / 2 * t * t * t * t + b;
                    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
                }
            }
            Quart.EASE_IN = "quart_ease_in";
            Quart.EASE_OUT = "quart_ease_out";
            Quart.EASE_IN_OUT = "quart_ease_in_out";
            easing.Quart = Quart;
            Quart["__class"] = "splashjs.animation.easing.Quart";
        })(easing = animation.easing || (animation.easing = {}));
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        var easing;
        (function (easing) {
            class Quint {
                static easeIn(t, b, c, d) {
                    return c * (t /= d) * t * t * t * t + b;
                }
                static easeOut(t, b, c, d) {
                    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                }
                static easeInOut(t, b, c, d) {
                    if ((t /= d / 2) < 1)
                        return c / 2 * t * t * t * t * t + b;
                    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
                }
            }
            Quint.EASE_IN = "quint_ease_in";
            Quint.EASE_OUT = "quint_ease_out";
            Quint.EASE_IN_OUT = "quint_ease_in_out";
            easing.Quint = Quint;
            Quint["__class"] = "splashjs.animation.easing.Quint";
        })(easing = animation.easing || (animation.easing = {}));
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        var easing;
        (function (easing) {
            class Sine {
                static easeIn(t, b, c, d) {
                    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
                }
                static easeOut(t, b, c, d) {
                    return c * Math.sin(t / d * (Math.PI / 2)) + b;
                }
                static easeInOut(t, b, c, d) {
                    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
                }
            }
            Sine.EASE_IN = "sine_ease_in";
            Sine.EASE_OUT = "sine_ease_out";
            Sine.EASE_IN_OUT = "sine_ease_in_out";
            easing.Sine = Sine;
            Sine["__class"] = "splashjs.animation.easing.Sine";
        })(easing = animation.easing || (animation.easing = {}));
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        class Frame {
            constructor(x, y, width, height) {
                /*private*/ this.type = Frame.FrameType.FIXED;
                /*private*/ this.index = -1;
                /*private*/ this.width = -1;
                /*private*/ this.height = -1;
                /*private*/ this.x = 0;
                /*private*/ this.y = 0;
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
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
                }
                else if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof width === 'number') || width === null) && height === undefined) {
                    let __args = arguments;
                    let width = __args[0];
                    let height = __args[1];
                    let index = __args[2];
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
                }
                else if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && width === undefined && height === undefined) {
                    let __args = arguments;
                    let width = __args[0];
                    let height = __args[1];
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
                }
                else
                    throw new Error('invalid overload');
            }
            getX() {
                return this.x;
            }
            getY() {
                return this.y;
            }
            getWidth() {
                return this.width;
            }
            getHeight() {
                return this.height;
            }
            getIndex() {
                return this.index;
            }
        }
        animation.Frame = Frame;
        Frame["__class"] = "splashjs.animation.Frame";
        Frame["__interfaces"] = ["splashjs.animation.iface.IFrame"];
        (function (Frame) {
            class FrameType {
                constructor(__parent) {
                    this.__parent = __parent;
                }
            }
            FrameType.FIXED = "fixed";
            Frame.FrameType = FrameType;
            FrameType["__class"] = "splashjs.animation.Frame.FrameType";
        })(Frame = animation.Frame || (animation.Frame = {}));
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        class ScaleTransitionType {
        }
        ScaleTransitionType.X = "x";
        ScaleTransitionType.Y = "y";
        ScaleTransitionType.XY = "xy";
        animation.ScaleTransitionType = ScaleTransitionType;
        ScaleTransitionType["__class"] = "splashjs.animation.ScaleTransitionType";
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        class SpriteData {
            constructor(spriteSheet, label, frame) {
                if (this.spriteSheet === undefined)
                    this.spriteSheet = null;
                if (this.frame === undefined)
                    this.frame = null;
                if (this.label === undefined)
                    this.label = null;
                this.spriteSheet = spriteSheet;
                this.frame = frame;
                this.label = label;
            }
            getLabel() {
                return this.label;
            }
            getFrame() {
                return this.frame;
            }
            getSpriteSheet() {
                return this.spriteSheet;
            }
        }
        animation.SpriteData = SpriteData;
        SpriteData["__class"] = "splashjs.animation.SpriteData";
        SpriteData["__interfaces"] = ["splashjs.animation.iface.ISpriteData"];
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        class TransitionState {
        }
        TransitionState.NONE = "none";
        TransitionState.NORMAL = "normal";
        TransitionState.REVERSE = "reverse";
        animation.TransitionState = TransitionState;
        TransitionState["__class"] = "splashjs.animation.TransitionState";
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        class TransitionType {
        }
        TransitionType.SCALE_X = "scale_x";
        TransitionType.SCALE_Y = "scale_y";
        TransitionType.SCALE_XY = "scale_xy";
        TransitionType.TRANSLATE_X = "translate_x";
        TransitionType.TRANSLATE_Y = "translate_y";
        TransitionType.TRANSLATE_XY = "translate_xy";
        TransitionType.FADE = "fade";
        TransitionType.ROTATION = "rotation";
        TransitionType.PARALLEL = "parallel";
        TransitionType.SEQUENTIAL = "sequential";
        TransitionType.PAUSE = "pause";
        animation.TransitionType = TransitionType;
        TransitionType["__class"] = "splashjs.animation.TransitionType";
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    class Class {
        constructor(packageID, userClassName, userClass) {
            if (this.packageID === undefined)
                this.packageID = null;
            if (this.userClassName === undefined)
                this.userClassName = null;
            if (this.userClass === undefined)
                this.userClass = null;
            this.packageID = packageID;
            this.userClassName = userClassName;
            this.userClass = userClass;
        }
        static classes_$LI$() { if (Class.classes == null)
            Class.classes = ([]); return Class.classes; }
        ;
        static define(packageID, classInFunc) {
            let userClass = (classInFunc());
            let userClassName = (userClass["name"]);
            if (packageID == null || (packageID.length === 0)) {
                window[userClassName] = userClass;
            }
            else {
                let words = packageID.split(".");
                let js = "";
                let str = "";
                for (let i = 0; i < words.length; i++) {
                    {
                        if (i === 0) {
                            window[words[i]] = new Object();
                            js = words[0] + " = " + words[0] + " || {};";
                            eval(js);
                            str = words[0];
                            console.info(js);
                        }
                        else if (i > 0) {
                            str += "." + words[i];
                            js = str + " = " + str + " || {};";
                            eval(js);
                            console.info(js);
                        }
                    }
                    ;
                }
                let fullPackage = (eval(str));
                fullPackage[userClassName] = userClass;
                console.info(str);
            }
            /* add */ (Class.classes_$LI$().push(new splashjs.Class(packageID, userClassName, userClass)) > 0);
        }
        static get(className) {
            return (eval(className));
        }
    }
    splashjs.Class = Class;
    Class["__class"] = "splashjs.Class";
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        class BaseItem {
            constructor() {
            }
        }
        controls.BaseItem = BaseItem;
        BaseItem["__class"] = "splashjs.controls.BaseItem";
        BaseItem["__interfaces"] = ["splashjs.controls.iface.IBaseItem"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        class LabelAlignment {
        }
        LabelAlignment.TOP = "top";
        LabelAlignment.BOTTOM = "bottom";
        LabelAlignment.LEFT = "left";
        LabelAlignment.RIGHT = "right";
        controls.LabelAlignment = LabelAlignment;
        LabelAlignment["__class"] = "splashjs.controls.LabelAlignment";
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        class RadioButtonGroup {
            constructor(name) {
                /*private*/ this.radioButtons = ([]);
                /*private*/ this.eventHandlers = ([]);
                if (this.name === undefined)
                    this.name = null;
                this.name = name;
            }
            getName() {
                return this.name;
            }
            getNumRadioButtons() {
                return this.radioButtons.length;
            }
            getSelectedData() {
                return this.getSelection().getValue();
            }
            setSelection(selection) {
                let radioButton = null;
                for (let i = 0; i < this.radioButtons.length; i++) {
                    {
                        radioButton = this.radioButtons[i];
                        if (radioButton === selection) {
                            this.setAllSelected(false);
                            radioButton.setSelected(true);
                            break;
                        }
                    }
                    ;
                }
            }
            getSelection() {
                let selectedRadioButton = null;
                let radioButton = null;
                for (let i = 0; i < this.radioButtons.length; i++) {
                    {
                        radioButton = this.radioButtons[i];
                        if (radioButton.getSelected() === true) {
                            selectedRadioButton = radioButton;
                            break;
                        }
                    }
                    ;
                }
                return selectedRadioButton;
            }
            addRadioButton(radioButton) {
                let eventHandler = (event) => {
                    this.setAllSelected(false);
                    event.getCurrentTarget().setSelected(true);
                };
                radioButton.addEventListener(splashjs.events.MouseEvent.CLICK, (eventHandler));
                radioButton.setGroup(this);
                /* add */ (this.radioButtons.push(radioButton) > 0);
                /* add */ (this.eventHandlers.push(eventHandler) > 0);
            }
            removeRadioButton(radioButton) {
                let pos = -1;
                for (let i = 0; i < this.radioButtons.length; i++) {
                    {
                        if (radioButton === this.radioButtons[i]) {
                            pos = i;
                            break;
                        }
                    }
                    ;
                }
                if (pos >= 0) {
                    /* get */ this.radioButtons[pos].setGroup(null);
                    /* get */ this.radioButtons[pos].removeEventListener(splashjs.events.MouseEvent.CLICK, (this.eventHandlers[pos]));
                    /* remove */ this.radioButtons.splice(pos, 1)[0];
                    /* remove */ this.eventHandlers.splice(pos, 1)[0];
                }
            }
            /*private*/ setAllSelected(selected) {
                for (let i = 0; i < this.radioButtons.length; i++) {
                    {
                        /* get */ this.radioButtons[i].setSelected(selected);
                    }
                    ;
                }
            }
        }
        controls.RadioButtonGroup = RadioButtonGroup;
        RadioButtonGroup["__class"] = "splashjs.controls.RadioButtonGroup";
        RadioButtonGroup["__interfaces"] = ["splashjs.controls.iface.IRadioButtonGroup"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var def;
    (function (def) {
        var js;
        (function (js) {
            js.navigator = null;
        })(js = def.js || (def.js = {}));
    })(def = splashjs.def || (splashjs.def = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var def;
    (function (def) {
        var js;
        (function (js) {
            class MediaDevices extends EventTarget {
                getUserMedia(param) {
                    return null;
                }
            }
            js.MediaDevices = MediaDevices;
            MediaDevices["__class"] = "splashjs.def.js.MediaDevices";
        })(js = def.js || (def.js = {}));
    })(def = splashjs.def || (splashjs.def = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var def;
    (function (def) {
        var js;
        (function (js) {
            class Navigator {
                constructor() {
                    if (this.mediaDevices === undefined)
                        this.mediaDevices = null;
                }
            }
            js.Navigator = Navigator;
            Navigator["__class"] = "splashjs.def.js.Navigator";
        })(js = def.js || (def.js = {}));
    })(def = splashjs.def || (splashjs.def = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var def;
    (function (def) {
        var webrtc;
        (function (webrtc) {
            class MediaStream {
            }
            webrtc.MediaStream = MediaStream;
            MediaStream["__class"] = "splashjs.def.webrtc.MediaStream";
        })(webrtc = def.webrtc || (def.webrtc = {}));
    })(def = splashjs.def || (splashjs.def = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class NativeWindow {
            constructor(initOptions) {
                if (((initOptions != null && initOptions instanceof splashjs.display.NativeWindowInitOptions) || initOptions === null)) {
                    let __args = arguments;
                    if (this.initOptions === undefined)
                        this.initOptions = null;
                    if (this.nativeWindowStub === undefined)
                        this.nativeWindowStub = null;
                    if (this.initOptions === undefined)
                        this.initOptions = null;
                    if (this.nativeWindowStub === undefined)
                        this.nativeWindowStub = null;
                    (() => {
                        this.initOptions = initOptions;
                        this.nativeWindowStub = splashjs.display.desktop.stubs.NativeWindowStub.newInstance();
                    })();
                }
                else if (initOptions === undefined) {
                    let __args = arguments;
                    {
                        let __args = arguments;
                        let initOptions = new splashjs.display.NativeWindowInitOptions();
                        if (this.initOptions === undefined)
                            this.initOptions = null;
                        if (this.nativeWindowStub === undefined)
                            this.nativeWindowStub = null;
                        if (this.initOptions === undefined)
                            this.initOptions = null;
                        if (this.nativeWindowStub === undefined)
                            this.nativeWindowStub = null;
                        (() => {
                            this.initOptions = initOptions;
                            this.nativeWindowStub = splashjs.display.desktop.stubs.NativeWindowStub.newInstance();
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
            }
            activate() {
                this.nativeWindowStub.show();
            }
            getStage() {
                return this.nativeWindowStub.getStage();
            }
        }
        display.NativeWindow = NativeWindow;
        NativeWindow["__class"] = "splashjs.display.NativeWindow";
        NativeWindow["__interfaces"] = ["splashjs.display.desktop.iface.INativeWindow"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class NativeWindowDisplayState {
        }
        NativeWindowDisplayState.MAXIMIZED = "maximized";
        NativeWindowDisplayState.MINIMIZED = "minimized";
        NativeWindowDisplayState.NORMAL = "normal";
        display.NativeWindowDisplayState = NativeWindowDisplayState;
        NativeWindowDisplayState["__class"] = "splashjs.display.NativeWindowDisplayState";
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class NativeWindowInitOptions {
            constructor() {
                /*private*/ this.maximizable = true;
                /*private*/ this.minimizable = true;
                /*private*/ this.owner = null;
                /*private*/ this.renderMode = null;
                /*private*/ this.resizable = true;
                /*private*/ this.systemChrome = splashjs.display.NativeWindowSystemChrome.STANDARD;
                /*private*/ this.transparent = false;
                /*private*/ this.type = splashjs.display.NativeWindowType.NORMAL;
            }
            setMaximizable(maximizable) {
                this.maximizable = maximizable;
            }
            getMaximizable() {
                return this.maximizable;
            }
            setMinizable(minimizable) {
                this.minimizable = minimizable;
            }
            setOwner(owner) {
                this.owner = owner;
            }
            getOwner() {
                return this.owner;
            }
        }
        display.NativeWindowInitOptions = NativeWindowInitOptions;
        NativeWindowInitOptions["__class"] = "splashjs.display.NativeWindowInitOptions";
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class NativeWindowRenderMode {
        }
        NativeWindowRenderMode.AUTO = "auto";
        NativeWindowRenderMode.CPU = "cpu";
        NativeWindowRenderMode.DIRECT = "direct";
        NativeWindowRenderMode.GPU = "gpu";
        display.NativeWindowRenderMode = NativeWindowRenderMode;
        NativeWindowRenderMode["__class"] = "splashjs.display.NativeWindowRenderMode";
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class NativeWindowResize {
        }
        NativeWindowResize.BOTTOM = "bottom";
        NativeWindowResize.BOTTOM_LEFT = "bottom_left";
        NativeWindowResize.BOTTOM_RIGHT = "bottom_right";
        NativeWindowResize.LEFT = "left";
        NativeWindowResize.NONE = "none";
        NativeWindowResize.RIGHT = "right";
        NativeWindowResize.TOP = "top";
        NativeWindowResize.TOP_LEFT = "top_left";
        NativeWindowResize.TOP_RIGHT = "top_right";
        display.NativeWindowResize = NativeWindowResize;
        NativeWindowResize["__class"] = "splashjs.display.NativeWindowResize";
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class NativeWindowSystemChrome {
        }
        NativeWindowSystemChrome.ALTERNATE = "alternate";
        NativeWindowSystemChrome.NONE = "none";
        NativeWindowSystemChrome.STANDARD = "standard";
        display.NativeWindowSystemChrome = NativeWindowSystemChrome;
        NativeWindowSystemChrome["__class"] = "splashjs.display.NativeWindowSystemChrome";
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class NativeWindowType {
        }
        NativeWindowType.LIGHTWEIGHT = "lightweight";
        NativeWindowType.NORMAL = "normal";
        NativeWindowType.UTILITY = "utility";
        display.NativeWindowType = NativeWindowType;
        NativeWindowType["__class"] = "splashjs.display.NativeWindowType";
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var desktop;
        (function (desktop) {
            var stubs;
            (function (stubs) {
                class NativeWindowStub {
                    static newInstance() {
                        return new NativeWindowStub();
                    }
                    show() {
                    }
                    getStage() {
                        return null;
                    }
                }
                stubs.NativeWindowStub = NativeWindowStub;
                NativeWindowStub["__class"] = "splashjs.display.desktop.stubs.NativeWindowStub";
            })(stubs = desktop.stubs || (desktop.stubs = {}));
        })(desktop = display.desktop || (display.desktop = {}));
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class StageAlign {
        }
        StageAlign.BOTTOM = "bottom";
        StageAlign.BOTTOM_LEFT = "bottom_left";
        StageAlign.BOTTOM_RIGHT = "bottom_right";
        StageAlign.LEFT = "left";
        StageAlign.RIGHT = "right";
        StageAlign.TOP = "top";
        StageAlign.CENTER = "center";
        StageAlign.TOP_LEFT = "top_left";
        StageAlign.TOP_RIGHT = "top_right";
        display.StageAlign = StageAlign;
        StageAlign["__class"] = "splashjs.display.StageAlign";
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class StageScaleMode {
        }
        StageScaleMode.EXACT_FIT = "exact_fit";
        StageScaleMode.NO_BORDER = "no_border";
        StageScaleMode.NO_SCALE = "no_scale";
        StageScaleMode.SHOW_ALL = "show_all";
        display.StageScaleMode = StageScaleMode;
        StageScaleMode["__class"] = "splashjs.display.StageScaleMode";
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        class Event {
            constructor(type, target, currentTarget) {
                if (((typeof type === 'string') || type === null) && ((target != null && (target["__interfaces"] != null && target["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || target.constructor != null && target.constructor["__interfaces"] != null && target.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || target === null) && ((currentTarget != null && (currentTarget["__interfaces"] != null && currentTarget["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || currentTarget.constructor != null && currentTarget.constructor["__interfaces"] != null && currentTarget.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || currentTarget === null)) {
                    let __args = arguments;
                    if (this.type === undefined)
                        this.type = null;
                    if (this.target === undefined)
                        this.target = null;
                    if (this.currentTarget === undefined)
                        this.currentTarget = null;
                    if (this.data === undefined)
                        this.data = null;
                    if (this.altKey === undefined)
                        this.altKey = false;
                    if (this.type === undefined)
                        this.type = null;
                    if (this.target === undefined)
                        this.target = null;
                    if (this.currentTarget === undefined)
                        this.currentTarget = null;
                    if (this.data === undefined)
                        this.data = null;
                    if (this.altKey === undefined)
                        this.altKey = false;
                    (() => {
                        this.type = type;
                        this.target = target;
                        this.currentTarget = currentTarget;
                    })();
                }
                else if (((typeof type === 'string') || type === null) && target === undefined && currentTarget === undefined) {
                    let __args = arguments;
                    if (this.type === undefined)
                        this.type = null;
                    if (this.target === undefined)
                        this.target = null;
                    if (this.currentTarget === undefined)
                        this.currentTarget = null;
                    if (this.data === undefined)
                        this.data = null;
                    if (this.altKey === undefined)
                        this.altKey = false;
                    if (this.type === undefined)
                        this.type = null;
                    if (this.target === undefined)
                        this.target = null;
                    if (this.currentTarget === undefined)
                        this.currentTarget = null;
                    if (this.data === undefined)
                        this.data = null;
                    if (this.altKey === undefined)
                        this.altKey = false;
                    (() => {
                        this.type = type;
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            getType() {
                return this.type;
            }
            setTarget(target) {
                this.target = target;
            }
            getTarget() {
                return this.target;
            }
            setCurrentTarget(currentTarget) {
                this.currentTarget = currentTarget;
            }
            getCurrentTarget() {
                return this.currentTarget;
            }
            setData(data) {
                this.data = data;
            }
            getData() {
                return this.data;
            }
            toString() {
                let info = "[object " + (c => c["__class"] ? c["__class"] : c["name"])(this.constructor) + "]";
                return info;
            }
        }
        Event.OPEN = "open";
        Event.LOAD = "load";
        Event.ONLINE = "online";
        Event.OFFLINE = "offline";
        Event.LOADED = "loaded";
        Event.ADDED_TO_STAGE = "added_to_stage";
        Event.REMOVED_FROM_STAGE = "removed_from_stage";
        Event.ADDED = "added";
        Event.REMOVED = "removed";
        Event.ENTER_FRAME = "enter_frame";
        Event.EXIT_FRAME = "exit_frame";
        Event.SELECT = "select";
        Event.CANCEL = "cancel";
        Event.COMPLETE = "complete";
        Event.RESIZE = "resize";
        Event.CHANGE = "change";
        events.Event = Event;
        Event["__class"] = "splashjs.events.Event";
        Event["__interfaces"] = ["splashjs.events.iface.IEvent"];
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        class EventName {
        }
        EventName.PROGRESS = "progress";
        EventName.ONLINE = "online";
        EventName.OFFLINE = "offline";
        EventName.IO_ERROR = "io_error";
        EventName.LOADED = "loaded";
        EventName.ABOUT_TO_BE_ADDED_TO_STAGE = "about_to_be_added_to_stage";
        EventName.STAGE_READY = "stage_ready";
        EventName.STAGE_RENDERED = "stage_rendered";
        EventName.WINDOW_CREATED = "window_created";
        events.EventName = EventName;
        EventName["__class"] = "splashjs.events.EventName";
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filesystem;
    (function (filesystem) {
        class File {
            constructor(path) {
                if (((typeof path === 'string') || path === null)) {
                    let __args = arguments;
                    if (this.fileStub === undefined)
                        this.fileStub = null;
                    if (this.path === undefined)
                        this.path = null;
                    if (this.fileStub === undefined)
                        this.fileStub = null;
                    if (this.path === undefined)
                        this.path = null;
                    (() => {
                        this.path = path;
                        this.fileStub = splashjs.filesystem.desktop.stubs.FileStub.newInstance();
                    })();
                }
                else if (path === undefined) {
                    let __args = arguments;
                    {
                        let __args = arguments;
                        let path = null;
                        if (this.fileStub === undefined)
                            this.fileStub = null;
                        if (this.path === undefined)
                            this.path = null;
                        if (this.fileStub === undefined)
                            this.fileStub = null;
                        if (this.path === undefined)
                            this.path = null;
                        (() => {
                            this.path = path;
                            this.fileStub = splashjs.filesystem.desktop.stubs.FileStub.newInstance();
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
            }
            browseForDirectory$java_lang_String(title) {
                this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(title, null);
            }
            browseForDirectory$java_lang_Object(stage) {
                this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(null, stage);
            }
            browseForDirectory$() {
                this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(null, null);
            }
            browseForDirectory$java_lang_String$java_lang_Object(title, stage) {
                this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(title, stage);
            }
            browseForDirectory(title, stage) {
                if (((typeof title === 'string') || title === null) && ((stage != null) || stage === null)) {
                    return this.browseForDirectory$java_lang_String$java_lang_Object(title, stage);
                }
                else if (((typeof title === 'string') || title === null) && stage === undefined) {
                    return this.browseForDirectory$java_lang_String(title);
                }
                else if (((title != null) || title === null) && stage === undefined) {
                    return this.browseForDirectory$java_lang_Object(title);
                }
                else if (title === undefined && stage === undefined) {
                    return this.browseForDirectory$();
                }
                else
                    throw new Error('invalid overload');
            }
        }
        filesystem.File = File;
        File["__class"] = "splashjs.filesystem.File";
    })(filesystem = splashjs.filesystem || (splashjs.filesystem = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filesystem;
    (function (filesystem) {
        class FileMode {
        }
        FileMode.APPEND = "append";
        FileMode.READ = "read";
        FileMode.UPDATE = "update";
        FileMode.WRITE = "write";
        filesystem.FileMode = FileMode;
        FileMode["__class"] = "splashjs.filesystem.FileMode";
    })(filesystem = splashjs.filesystem || (splashjs.filesystem = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filesystem;
    (function (filesystem) {
        var desktop;
        (function (desktop) {
            var stubs;
            (function (stubs) {
                class FileStub {
                    constructor(path) {
                        if (((typeof path === 'string') || path === null)) {
                            let __args = arguments;
                        }
                        else if (path === undefined) {
                            let __args = arguments;
                        }
                        else
                            throw new Error('invalid overload');
                    }
                    static newInstance() {
                        return new FileStub();
                    }
                    browseForDirectory$java_lang_String(title) {
                    }
                    browseForDirectory$java_lang_Object(stage) {
                    }
                    browseForDirectory$() {
                    }
                    browseForDirectory$java_lang_String$java_lang_Object(title, stage) {
                    }
                    browseForDirectory(title, stage) {
                        if (((typeof title === 'string') || title === null) && ((stage != null) || stage === null)) {
                            return this.browseForDirectory$java_lang_String$java_lang_Object(title, stage);
                        }
                        else if (((typeof title === 'string') || title === null) && stage === undefined) {
                            return this.browseForDirectory$java_lang_String(title);
                        }
                        else if (((title != null) || title === null) && stage === undefined) {
                            return this.browseForDirectory$java_lang_Object(title);
                        }
                        else if (title === undefined && stage === undefined) {
                            return this.browseForDirectory$();
                        }
                        else
                            throw new Error('invalid overload');
                    }
                }
                stubs.FileStub = FileStub;
                FileStub["__class"] = "splashjs.filesystem.desktop.stubs.FileStub";
            })(stubs = desktop.stubs || (desktop.stubs = {}));
        })(desktop = filesystem.desktop || (filesystem.desktop = {}));
    })(filesystem = splashjs.filesystem || (splashjs.filesystem = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filters;
    (function (filters) {
        class Filter {
            constructor() {
            }
        }
        filters.Filter = Filter;
        Filter["__class"] = "splashjs.filters.Filter";
        Filter["__interfaces"] = ["splashjs.filters.iface.IFilter"];
    })(filters = splashjs.filters || (splashjs.filters = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filters;
    (function (filters) {
        class FilterType {
        }
        FilterType.BLUR = "blur";
        FilterType.BRIGHTNESS = "brightness";
        FilterType.CONTRAST = "contrast";
        FilterType.HUE_ROTATE = "hue_rotate";
        FilterType.INVERT = "invert";
        FilterType.DROP_SHADOW = "drop_shadow";
        FilterType.GRAYSCALE = "grayscale";
        FilterType.SATURATE = "saturate";
        FilterType.SEPIA = "sepia";
        filters.FilterType = FilterType;
        FilterType["__class"] = "splashjs.filters.FilterType";
    })(filters = splashjs.filters || (splashjs.filters = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var geom;
    (function (geom) {
        class Circle {
            constructor(centerX, centerY, radius) {
                if (((typeof centerX === 'number') || centerX === null) && ((typeof centerY === 'number') || centerY === null) && ((typeof radius === 'number') || radius === null)) {
                    let __args = arguments;
                    if (this.centerX === undefined)
                        this.centerX = 0;
                    if (this.centerY === undefined)
                        this.centerY = 0;
                    if (this.radius === undefined)
                        this.radius = 0;
                    if (this.centerX === undefined)
                        this.centerX = 0;
                    if (this.centerY === undefined)
                        this.centerY = 0;
                    if (this.radius === undefined)
                        this.radius = 0;
                    (() => {
                        this.centerX = centerX;
                        this.centerY = centerY;
                        this.radius = radius;
                    })();
                }
                else if (centerX === undefined && centerY === undefined && radius === undefined) {
                    let __args = arguments;
                    if (this.centerX === undefined)
                        this.centerX = 0;
                    if (this.centerY === undefined)
                        this.centerY = 0;
                    if (this.radius === undefined)
                        this.radius = 0;
                    if (this.centerX === undefined)
                        this.centerX = 0;
                    if (this.centerY === undefined)
                        this.centerY = 0;
                    if (this.radius === undefined)
                        this.radius = 0;
                }
                else
                    throw new Error('invalid overload');
            }
            setCenterX(centerX) {
                this.centerX = centerX;
                return this;
            }
            getCenterX() {
                return this.centerX;
            }
            setCenterY(centerY) {
                this.centerY = centerY;
                return this;
            }
            getCenterY() {
                return this.centerY;
            }
            setRadius(radius) {
                this.radius = radius;
                return this;
            }
            getRadius() {
                return this.radius;
            }
        }
        geom.Circle = Circle;
        Circle["__class"] = "splashjs.geom.Circle";
        Circle["__interfaces"] = ["splashjs.geom.iface.ICircle"];
    })(geom = splashjs.geom || (splashjs.geom = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var geom;
    (function (geom) {
        class Point {
            constructor(x, y) {
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    let __args = arguments;
                    if (this.x === undefined)
                        this.x = 0;
                    if (this.y === undefined)
                        this.y = 0;
                    if (this.x === undefined)
                        this.x = 0;
                    if (this.y === undefined)
                        this.y = 0;
                    (() => {
                        this.x = x;
                        this.y = y;
                    })();
                }
                else if (x === undefined && y === undefined) {
                    let __args = arguments;
                    if (this.x === undefined)
                        this.x = 0;
                    if (this.y === undefined)
                        this.y = 0;
                    if (this.x === undefined)
                        this.x = 0;
                    if (this.y === undefined)
                        this.y = 0;
                }
                else
                    throw new Error('invalid overload');
            }
            setX(x) {
                this.x = x;
            }
            getX() {
                return this.x;
            }
            setY(y) {
                this.y = y;
            }
            getY() {
                return this.y;
            }
        }
        geom.Point = Point;
        Point["__class"] = "splashjs.geom.Point";
        Point["__interfaces"] = ["splashjs.geom.iface.IPoint"];
    })(geom = splashjs.geom || (splashjs.geom = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var geom;
    (function (geom) {
        class Rectangle {
            constructor(x, y, width, height) {
                if (this.x === undefined)
                    this.x = 0;
                if (this.y === undefined)
                    this.y = 0;
                if (this.width === undefined)
                    this.width = 0;
                if (this.height === undefined)
                    this.height = 0;
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
            }
            getX() {
                return this.x;
            }
            getY() {
                return this.y;
            }
            getWidth() {
                return this.width;
            }
            getHeight() {
                return this.height;
            }
        }
        geom.Rectangle = Rectangle;
        Rectangle["__class"] = "splashjs.geom.Rectangle";
        Rectangle["__interfaces"] = ["splashjs.geom.iface.IRectangle"];
    })(geom = splashjs.geom || (splashjs.geom = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    class Import {
        constructor() {
        }
        static className_$LI$() { if (Import.className == null)
            Import.className = ([]); return Import.className; }
        ;
        static packageName_$LI$() { if (Import.packageName == null)
            Import.packageName = ([]); return Import.packageName; }
        ;
        static clazz(clazz) {
            return clazz;
        }
        static clazzAs(clazz, alias) {
            return clazz;
        }
        static getClassName(index) {
            return Import.className_$LI$()[index];
        }
        static getPackageName(index) {
            return Import.packageName_$LI$()[index];
        }
    }
    splashjs.Import = Import;
    Import["__class"] = "splashjs.Import";
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        class RuntimeError extends Error {
            constructor(message) {
                super(message);
                this.message = message;
                Object.setPrototypeOf(this, RuntimeError.prototype);
            }
        }
        lang.RuntimeError = RuntimeError;
        RuntimeError["__class"] = "splashjs.lang.RuntimeError";
        RuntimeError["__interfaces"] = ["java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        class SplashError extends Error {
            constructor(message, errorID) {
                if (((typeof message === 'string') || message === null) && ((typeof errorID === 'number') || errorID === null)) {
                    let __args = arguments;
                    super();
                    if (this.errorID === undefined)
                        this.errorID = 0;
                    if (this.message === undefined)
                        this.message = null;
                    if (this.name === undefined)
                        this.name = null;
                    Object.setPrototypeOf(this, SplashError.prototype);
                    if (this.errorID === undefined)
                        this.errorID = 0;
                    if (this.message === undefined)
                        this.message = null;
                    if (this.name === undefined)
                        this.name = null;
                    (() => {
                        this.message = message;
                        this.errorID = errorID;
                        this.name = (c => c["__class"] ? c["__class"] : c["name"])(this.constructor);
                    })();
                }
                else if (((typeof message === 'string') || message === null) && errorID === undefined) {
                    let __args = arguments;
                    super();
                    if (this.errorID === undefined)
                        this.errorID = 0;
                    if (this.message === undefined)
                        this.message = null;
                    if (this.name === undefined)
                        this.name = null;
                    Object.setPrototypeOf(this, SplashError.prototype);
                    if (this.errorID === undefined)
                        this.errorID = 0;
                    if (this.message === undefined)
                        this.message = null;
                    if (this.name === undefined)
                        this.name = null;
                    (() => {
                        this.message = message;
                        this.name = (c => c["__class"] ? c["__class"] : c["name"])(this.constructor);
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            getErrorID() {
                return this.errorID;
            }
            getMessage() {
                return this.message;
            }
            getName() {
                return this.name;
            }
        }
        lang.SplashError = SplashError;
        SplashError["__class"] = "splashjs.lang.SplashError";
        SplashError["__interfaces"] = ["splashjs.lang.iface.ISplashError", "java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        class SplashObject {
            constructor() {
            }
            toString() {
                let value = "[instance of " + (c => c["__class"] ? c["__class"] : c["name"])(this.constructor) + "]";
                return value;
            }
        }
        lang.SplashObject = SplashObject;
        SplashObject["__class"] = "splashjs.lang.SplashObject";
        SplashObject["__interfaces"] = ["splashjs.lang.iface.ISplashObject"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var net;
    (function (net) {
        class FileFilter {
            constructor(description, extension) {
                /*private*/ this.description = "";
                /*private*/ this.extension = "";
                this.description = description;
                this.extension = extension;
            }
            getDescription() {
                return this.description;
            }
            getExtension() {
                return this.extension;
            }
        }
        net.FileFilter = FileFilter;
        FileFilter["__class"] = "splashjs.net.FileFilter";
        FileFilter["__interfaces"] = ["splashjs.net.iface.IFileFilter"];
    })(net = splashjs.net || (splashjs.net = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var net;
    (function (net) {
        class URLLoaderDataFormat {
        }
        URLLoaderDataFormat.TEXT = "text";
        URLLoaderDataFormat.BINARY = "binary";
        URLLoaderDataFormat.VARIABLES = "variables";
        net.URLLoaderDataFormat = URLLoaderDataFormat;
        URLLoaderDataFormat["__class"] = "splashjs.net.URLLoaderDataFormat";
    })(net = splashjs.net || (splashjs.net = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var net;
    (function (net) {
        class URLRequest {
            constructor(url) {
                /*private*/ this.requestHeaders = ([]);
                if (this.url === undefined)
                    this.url = null;
                if (this.contentType === undefined)
                    this.contentType = null;
                if (this.data === undefined)
                    this.data = null;
                if (this.followRedirects === undefined)
                    this.followRedirects = false;
                if (this.method === undefined)
                    this.method = null;
                this.url = url;
                this.method = splashjs.net.URLRequestMethod.GET;
            }
            getURL() {
                return this.url;
            }
            setMethod(method) {
                this.method = method;
            }
            getMethod() {
                return this.method;
            }
            setRequestHeaders(requestHeaders) {
                this.requestHeaders = requestHeaders;
            }
            getRequestHeaders() {
                return this.requestHeaders;
            }
            setContentType(contentType) {
                this.contentType = contentType;
            }
            getContentType() {
                return this.contentType;
            }
            setData(data) {
                this.data = data;
            }
            getData() {
                return this.data;
            }
        }
        net.URLRequest = URLRequest;
        URLRequest["__class"] = "splashjs.net.URLRequest";
        URLRequest["__interfaces"] = ["splashjs.net.iface.IURLRequest"];
    })(net = splashjs.net || (splashjs.net = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var net;
    (function (net) {
        class URLRequestHeader {
            constructor(name, value) {
                /*private*/ this.name = "";
                /*private*/ this.value = "";
                this.name = name;
                this.value = value;
            }
            setName(name) {
                this.name = name;
            }
            getName() {
                return this.name;
            }
            setValue(value) {
                this.value = value;
            }
            getValue() {
                return this.value;
            }
        }
        net.URLRequestHeader = URLRequestHeader;
        URLRequestHeader["__class"] = "splashjs.net.URLRequestHeader";
        URLRequestHeader["__interfaces"] = ["splashjs.net.iface.IURLRequestHeader"];
    })(net = splashjs.net || (splashjs.net = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var net;
    (function (net) {
        class URLRequestMethod {
        }
        URLRequestMethod.DELETE = "delete";
        URLRequestMethod.GET = "get";
        URLRequestMethod.HEAD = "head";
        URLRequestMethod.OPTIONS = "options";
        URLRequestMethod.POST = "post";
        URLRequestMethod.PUT = "put";
        net.URLRequestMethod = URLRequestMethod;
        URLRequestMethod["__class"] = "splashjs.net.URLRequestMethod";
    })(net = splashjs.net || (splashjs.net = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var net;
    (function (net) {
        class URLVariable {
            constructor(name, value) {
                /*private*/ this.name = "";
                /*private*/ this.value = "";
                this.name = name;
                this.value = value;
            }
            getName() {
                return this.name;
            }
            getValue() {
                return this.value;
            }
            getEncodedValue() {
                return URLVariable.getEncodedString(this.value);
            }
            static getEncodedString(str) {
                return splashjs.render.net.URLVariableRenderer.getEncodedString(str);
            }
            static encode(...urlVariables) {
                return splashjs.render.net.URLVariableRenderer.encode.apply(null, urlVariables);
            }
            static decode(encodedString) {
                return splashjs.render.net.URLVariableRenderer.decode(encodedString);
            }
        }
        net.URLVariable = URLVariable;
        URLVariable["__class"] = "splashjs.net.URLVariable";
        URLVariable["__interfaces"] = ["splashjs.net.iface.IURLVariable"];
    })(net = splashjs.net || (splashjs.net = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    class Package {
        static packageData_$LI$() { if (Package.packageData == null)
            Package.packageData = ([]); return Package.packageData; }
        ;
        static define(packageID, imports, classInFunc) {
            let numImports = (imports["length"]);
            let importJSText = "";
            for (let i = 0; i < numImports; i++) {
                {
                    let fullClazzName = imports[i];
                    let onlyClazzName = fullClazzName.substring(fullClazzName.lastIndexOf(".") + 1);
                    importJSText += "var " + onlyClazzName + " = " + fullClazzName + ";\r\n";
                }
                ;
            }
            let userClass = (classInFunc());
            let userClassName = (userClass["name"]);
            if (packageID == null || (packageID.length === 0)) {
                window[userClassName] = userClass;
            }
            else {
                let words = packageID.split(".");
                let js = "";
                let str = "";
                for (let i = 0; i < words.length; i++) {
                    {
                        if (i === 0) {
                            window[words[i]] = new Object();
                            js = words[0] + " = " + words[0] + " || {};";
                            eval(js);
                            str = words[0];
                            console.info(js);
                        }
                        else if (i > 0) {
                            str += "." + words[i];
                            js = str + " = " + str + " || {};";
                            eval(js);
                            console.info(js);
                        }
                    }
                    ;
                }
                let fullPackage = (eval(str));
                fullPackage[userClassName] = userClass;
                console.info(str);
            }
            /* add */ (Package.packageData_$LI$().push(new Package.PackageData(packageID, Package.clazz)) > 0);
        }
    }
    Package.clazz = null;
    splashjs.Package = Package;
    Package["__class"] = "splashjs.Package";
    (function (Package) {
        class PackageData {
            constructor(packageID, clazz) {
                if (this.packageID === undefined)
                    this.packageID = null;
                if (this.clazz === undefined)
                    this.clazz = null;
                this.packageID = packageID;
                this.clazz = clazz;
            }
        }
        Package.PackageData = PackageData;
        PackageData["__class"] = "splashjs.Package.PackageData";
    })(Package = splashjs.Package || (splashjs.Package = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var permissions;
    (function (permissions) {
        class PermissionStatus {
        }
        PermissionStatus.DENIED = "denied";
        PermissionStatus.GRANTED = "granted";
        PermissionStatus.ONLY_WHEN_IN_USE = "only_when_in_use";
        PermissionStatus.UNKNOWN = "unknown";
        permissions.PermissionStatus = PermissionStatus;
        PermissionStatus["__class"] = "splashjs.permissions.PermissionStatus";
    })(permissions = splashjs.permissions || (splashjs.permissions = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        class HTMLDomEventName {
        }
        HTMLDomEventName.LOAD = "load";
        HTMLDomEventName.CLICK = "click";
        HTMLDomEventName.DBLCLICK = "dblclick";
        HTMLDomEventName.MOUSEDOWN = "mousedown";
        HTMLDomEventName.MOUSEENTER = "mouseenter";
        HTMLDomEventName.MOUSELEAVE = "mouseleave";
        HTMLDomEventName.MOUSEMOVE = "mousemove";
        HTMLDomEventName.MOUSEOUT = "mouseout";
        HTMLDomEventName.MOUSEOVER = "mouseover";
        HTMLDomEventName.MOUSEUP = "mouseup";
        HTMLDomEventName.KEYPRESS = "keypress";
        HTMLDomEventName.KEYUP = "keyup";
        HTMLDomEventName.KEYDOWN = "keydown";
        HTMLDomEventName.FOCUS = "focus";
        HTMLDomEventName.SELECT = "select";
        HTMLDomEventName.CHANGE = "change";
        render.HTMLDomEventName = HTMLDomEventName;
        HTMLDomEventName["__class"] = "splashjs.render.HTMLDomEventName";
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var net;
        (function (net) {
            class URLVariableRenderer {
                static encode(...urlVariables) {
                    let encodedString = "";
                    for (let i = 0; i < urlVariables.length; i++) {
                        {
                            let urlVariable = urlVariables[i];
                            encodedString += urlVariable.getName() + "=" + encodeURIComponent(urlVariable.getValue());
                            if (i < urlVariables.length - 1)
                                encodedString += "&";
                        }
                        ;
                    }
                    return encodedString;
                }
                static decode(encodedString) {
                    let urlVariables = ([]);
                    let decodedString = decodeURI(encodedString);
                    let variables = decodedString.split("&");
                    for (let i = 0; i < variables.length; i++) {
                        {
                            let variable = variables[i];
                            let nameValue = variable.split("=");
                            let urlVariable = new splashjs.net.URLVariable(nameValue[0], decodeURIComponent(nameValue[1]));
                            /* add */ (urlVariables.push(urlVariable) > 0);
                        }
                        ;
                    }
                    return urlVariables;
                }
                static getEncodedString(str) {
                    return encodeURIComponent(str);
                }
            }
            net.URLVariableRenderer = URLVariableRenderer;
            URLVariableRenderer["__class"] = "splashjs.render.net.URLVariableRenderer";
        })(net = render.net || (render.net = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        class RenderElement {
            constructor(element) {
                if (this.element === undefined)
                    this.element = null;
                this.element = element;
            }
            getDOMElement() {
                return this.element;
            }
        }
        render.RenderElement = RenderElement;
        RenderElement["__class"] = "splashjs.render.RenderElement";
        RenderElement["__interfaces"] = ["splashjs.render.iface.IRenderElement"];
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        class Renderer {
            constructor() {
                this.SVGNS = "http://www.w3.org/2000/svg";
                this.UNIT = "px";
                this.ENDLINE_CHAR = "\r\n";
                this.IMAGES_FOLDER_PATH = "images/";
                this.SOUNDS_FOLDER_PATH = "sounds/";
                this.VIDEOS_FOLDER_PATH = "videos/";
                if (this.renderObjectID === undefined)
                    this.renderObjectID = null;
                if (this.renderObject === undefined)
                    this.renderObject = null;
                if (this.renderElement === undefined)
                    this.renderElement = null;
            }
            setRenderObject(renderObject) {
                this.renderObject = renderObject;
                this.renderObjectID = renderObject.getUniqueID();
            }
            getRenderObjectID() {
                return this.renderObjectID;
            }
            getRenderObject() {
                return this.renderObject;
            }
            setRenderElement(renderElement) {
                this.renderElement = renderElement;
                this.createEventListeners();
                this.applyCSS();
            }
            getRenderElement() {
                return this.renderElement;
            }
            create() {
            }
            update() {
            }
            refresh() {
            }
            applyCSS() {
                let htmlElement = this.getDOMElement();
                htmlElement.style.position = "absolute";
                htmlElement.style.display = "inline-block";
            }
            getDOMElement() {
                let element = this.renderElement.getDOMElement();
                return element;
            }
            createEventListeners() {
                let htmlElement = this.getDOMElement();
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.LOAD, (event) => {
                    let evt = new splashjs.events.Event(splashjs.events.Event.LOADED);
                    this.getRenderObject().dispatchEvent(evt);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.CLICK, (event) => {
                    let mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.CLICK, null, this.getRenderObject());
                    this.getRenderObject().dispatchEvent(mouseEvent);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.DBLCLICK, (event) => {
                    let mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.DOUBLE_CLICK, null, this.getRenderObject());
                    this.getRenderObject().dispatchEvent(mouseEvent);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSEENTER, (event) => {
                    let mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_ENTER, null, this.getRenderObject());
                    this.getRenderObject().dispatchEvent(mouseEvent);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSELEAVE, (event) => {
                    let mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_LEAVE, null, this.getRenderObject());
                    this.getRenderObject().dispatchEvent(mouseEvent);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSEOVER, (event) => {
                    let mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_OVER, null, this.getRenderObject());
                    this.getRenderObject().dispatchEvent(mouseEvent);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSEOUT, (event) => {
                    let mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_OUT, null, this.getRenderObject());
                    this.getRenderObject().dispatchEvent(mouseEvent);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSEDOWN, (event) => {
                    let mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_DOWN, null, this.getRenderObject());
                    this.getRenderObject().dispatchEvent(mouseEvent);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSEUP, (event) => {
                    let mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_UP, null, this.getRenderObject());
                    this.getRenderObject().dispatchEvent(mouseEvent);
                });
            }
            appendChild(childRenderer) {
                let childRenderElement = childRenderer.getRenderElement();
                let childElement = childRenderElement.getDOMElement();
                this.getDOMElement().insertBefore(childElement, this.getDOMElement().firstChild);
            }
            removeChild(childRenderer) {
                let childRenderElement = childRenderer.getRenderElement();
                let childElement = childRenderElement.getDOMElement();
                this.getDOMElement().removeChild(childElement);
            }
            getOriginalWidth() {
                return (this.getDOMElement().clientWidth | 0);
            }
            getOriginalHeight() {
                return (this.getDOMElement().clientHeight | 0);
            }
            appendToBody() {
                document.body.appendChild(this.getDOMElement());
            }
            /**
             * CSS methods
             * @return {string}
             */
            getCSSIDText() {
                return this.getRenderObject().getUniqueID();
            }
            getCSSTransformText() {
                let renderObject = this.getRenderObject();
                let scale = "scale(" + renderObject.getScaleX() + ", " + renderObject.getScaleY() + ")";
                let rotate = "rotate(" + renderObject.getRotation() + "deg)";
                let skew = "skew(0deg, 0deg)";
                let transformText = scale + " " + skew + " " + rotate;
                return transformText;
            }
            getCSSTransformOriginText() {
                let renderObject = this.getRenderObject();
                let text = renderObject.getRegX() + this.UNIT + " " + renderObject.getRegY() + this.UNIT;
                return text;
            }
            getCSSLeftText() {
                let renderObject = this.getRenderObject();
                return (renderObject.getX() - renderObject.getRegX()) + this.UNIT;
            }
            getCSSTopText() {
                let renderObject = this.getRenderObject();
                return (renderObject.getY() - renderObject.getRegY()) + this.UNIT;
            }
            getCSSWidthText() {
                let renderObject = this.getRenderObject();
                return renderObject.getWidth() + this.UNIT;
            }
            getCSSHeightText() {
                let renderObject = this.getRenderObject();
                return renderObject.getHeight() + this.UNIT;
            }
            getCSSOpacityText() {
                let renderObject = this.getRenderObject();
                return renderObject.getAlpha() + "";
            }
            getCSSVisibilityText() {
                let renderObject = this.getRenderObject();
                let text;
                if (renderObject.getVisible() === true)
                    text = "visible";
                else
                    text = "hidden";
                return text;
            }
            getCSSCursorVisibleText() {
                let renderObject = this.getRenderObject();
                let mouseCursor = renderObject.getMouseCursor();
                let text = this.getCSSCursorText();
                if (renderObject.getMouseVisible() === false)
                    text = "none";
                return text;
            }
            getCSSCursorText() {
                let renderObject = this.getRenderObject();
                let mouseCursor = renderObject.getMouseCursor();
                let text = splashjs.ui.MouseCursor.AUTO_$LI$().getMouseCursorName();
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(mouseCursor.getMouseCursorType(), splashjs.ui.MouseCursorType.SYSTEM)) {
                    text = mouseCursor.getMouseCursorName();
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(mouseCursor.getMouseCursorType(), splashjs.ui.MouseCursorType.IMAGE)) {
                    let imagePath = mouseCursor.getMouseCursorImagePath();
                    text = "url(" + this.IMAGES_FOLDER_PATH + imagePath + "), auto";
                }
                return text;
            }
            getCSSFilterText() {
                let renderObject = this.getRenderObject();
                let filterText = "";
                {
                    let array122 = renderObject.getAllFilters();
                    for (let index121 = 0; index121 < array122.length; index121++) {
                        let filter = array122[index121];
                        {
                            if (filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.IBlurFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.IBlurFilter") >= 0)) {
                                filterText += "blur(" + filter.getBlur() + "px) ";
                            }
                            else if (filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.IDropShadowFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.IDropShadowFilter") >= 0)) {
                                let dropShadowFilter = filter;
                                filterText += "drop-shadow(" + dropShadowFilter.getOffsetX() + "px ";
                                filterText += dropShadowFilter.getOffsetY() + "px ";
                                filterText += dropShadowFilter.getBlur() + "px ";
                                let color = dropShadowFilter.getColor();
                                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(color.getColorType(), splashjs.utils.ColorType.NAME)) {
                                    filterText += color.getColorName() + ") ";
                                }
                                else {
                                    filterText += "black) ";
                                }
                            }
                            else if (filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.IBrightnessFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.IBrightnessFilter") >= 0)) {
                                filterText += "brightness(" + filter.getBrightness() + ") ";
                            }
                            else if (filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.IContrastFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.IContrastFilter") >= 0)) {
                                filterText += "contrast(" + filter.getContrast() + ") ";
                            }
                            else if (filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.IHueRotateFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.IHueRotateFilter") >= 0)) {
                                filterText += "hue-rotate(" + filter.getHueRotate() + "deg) ";
                            }
                            else if (filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.IInvertFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.IInvertFilter") >= 0)) {
                                filterText += "invert(" + filter.getInvert() + ") ";
                            }
                            else if (filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.IGrayscaleFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.IGrayscaleFilter") >= 0)) {
                                filterText += "grayscale(" + filter.getGrayscale() + ") ";
                            }
                            else if (filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.ISaturateFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.ISaturateFilter") >= 0)) {
                                filterText += "saturate(" + filter.getSaturate() + ") ";
                            }
                            else if (filter != null && (filter["__interfaces"] != null && filter["__interfaces"].indexOf("splashjs.filters.iface.ISepiaFilter") >= 0 || filter.constructor != null && filter.constructor["__interfaces"] != null && filter.constructor["__interfaces"].indexOf("splashjs.filters.iface.ISepiaFilter") >= 0)) {
                                filterText += "sepia(" + filter.getSepia() + ") ";
                            }
                        }
                    }
                }
                if ((filterText.length === 0))
                    filterText = "none";
                return filterText;
            }
            getSVGCircleRadiusText() {
                let radius = "10";
                radius = this.renderObject.getRadius() + "";
                return radius;
            }
            getSVGCircleCenterXText() {
                let cx = "0";
                let strokeWidth = this.renderObject.getStrokeWidth();
                let radius = this.renderObject.getRadius();
                cx = Math.ceil((radius + strokeWidth / 2)) + "";
                return cx;
            }
            getSVGCircleCenterYText() {
                let cy = "0";
                let strokeWidth = this.renderObject.getStrokeWidth();
                let radius = this.renderObject.getRadius();
                cy = Math.ceil((radius + strokeWidth / 2)) + "";
                return cy;
            }
            getSVGCircleWidthText() {
                let width = "0";
                let radius = this.renderObject.getRadius();
                width = Math.ceil((parseFloat(this.getSVGCircleCenterXText()) * 2)) + "";
                return width;
            }
            getSVGCircleHeightText() {
                let height = "0";
                let radius = this.renderObject.getRadius();
                height = Math.ceil((parseFloat(this.getSVGCircleCenterYText()) * 2)) + "";
                return height;
            }
            getSVGLineX2Text() {
                let x2 = "0";
                let length = this.renderObject.getLength();
                x2 = length + "";
                return x2;
            }
            getSVGLineY2Text() {
                return this.getSVGLineY1Text();
            }
            getSVGLineY1Text() {
                let y1 = (parseInt(this.getSVGShapeStrokeWidthText()) / 2 | 0) + "";
                return y1;
            }
            getSVGLineWidthText() {
                let width = "0";
                width = this.renderObject.getLength() + "";
                return width;
            }
            getSVGLineHeightText() {
                let height = "0";
                height = this.getSVGShapeStrokeWidthText();
                return height;
            }
            getSVGShapeStrokeColorNameText() {
                let strokeColorName = splashjs.utils.ColorName.BLACK;
                let strokeColor = this.renderObject.getStrokeColor();
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(strokeColor.getColorType(), splashjs.utils.ColorType.NAME))
                    strokeColorName = strokeColor.getColorName();
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(strokeColor.getColorType(), splashjs.utils.ColorType.HEX))
                    strokeColorName = strokeColor.getHEX();
                return strokeColorName;
            }
            getSVGShapeFillColorNameText() {
                let fillColorName = splashjs.utils.ColorName.BLACK;
                let fillColor = this.renderObject.getFillColor();
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(fillColor.getColorType(), splashjs.utils.ColorType.NAME))
                    fillColorName = fillColor.getColorName();
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(fillColor.getColorType(), splashjs.utils.ColorType.HEX))
                    fillColorName = fillColor.getHEX();
                return fillColorName;
            }
            getSVGShapeStrokeWidthText() {
                let strokeWidth = "1";
                strokeWidth = this.renderObject.getStrokeWidth() + "";
                return strokeWidth;
            }
        }
        render.Renderer = Renderer;
        Renderer["__class"] = "splashjs.render.Renderer";
        Renderer["__interfaces"] = ["splashjs.render.iface.IRenderer"];
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        class RendererCreator {
            constructor() {
            }
            createRenderer(clazz, renderObject) {
                let renderer = null;
                if (clazz === splashjs.Global)
                    renderer = new splashjs.render.GlobalRenderer(renderObject);
                else if (clazz === splashjs.application.Application)
                    renderer = new splashjs.render.application.ApplicationRenderer(renderObject);
                else if (clazz === splashjs.application.StageOwner)
                    renderer = new splashjs.render.application.StageOwnerRenderer(renderObject);
                else if (clazz === splashjs.display.Stage)
                    renderer = new splashjs.render.display.StageRenderer(renderObject);
                else if (clazz === splashjs.display.Scene)
                    renderer = new splashjs.render.display.SceneRenderer(renderObject);
                else if (clazz === splashjs.display.Sprite)
                    renderer = new splashjs.render.display.SpriteRenderer(renderObject);
                else if (clazz === splashjs.display.MovieClip)
                    renderer = new splashjs.render.display.MovieClipRenderer(renderObject);
                else if (clazz === splashjs.display.Image)
                    renderer = new splashjs.render.display.ImageRenderer(renderObject);
                else if (clazz === splashjs.display.Bitmap)
                    renderer = new splashjs.render.display.BitmapRenderer(renderObject);
                else if (clazz === splashjs.display.BitmapData)
                    renderer = new splashjs.render.display.BitmapDataRenderer(renderObject);
                else if (clazz === splashjs.display.Line)
                    renderer = new splashjs.render.display.LineRenderer(renderObject);
                else if (clazz === splashjs.display.Circle)
                    renderer = new splashjs.render.display.CircleRenderer(renderObject);
                else if (clazz === splashjs.controls.Label)
                    renderer = new splashjs.render.controls.LabelRenderer(renderObject);
                else if (clazz === splashjs.controls.Button)
                    renderer = new splashjs.render.controls.ButtonRenderer(renderObject);
                else if (clazz === splashjs.controls.Tree)
                    renderer = new splashjs.render.controls.TreeRenderer(renderObject);
                else if (clazz === splashjs.text.StaticText)
                    renderer = new splashjs.render.text.StaticTextRenderer(renderObject);
                else if (clazz === splashjs.text.InputText)
                    renderer = new splashjs.render.text.InputTextRenderer(renderObject);
                else if (clazz === splashjs.net.FileReference)
                    renderer = new splashjs.render.net.FileReferenceRenderer(renderObject);
                else if (clazz === splashjs.net.URLLoader)
                    renderer = new splashjs.render.net.URLLoaderRenderer(renderObject);
                else if (clazz === splashjs.utils.Resource)
                    renderer = new splashjs.render.utils.ResourceRenderer(renderObject);
                else if (clazz === splashjs.utils.ResourceLoader)
                    renderer = new splashjs.render.utils.ResourceLoaderRenderer(renderObject);
                else if (clazz === splashjs.media.Sound)
                    renderer = new splashjs.render.media.SoundRenderer(renderObject);
                else if (clazz === splashjs.media.Video)
                    renderer = new splashjs.render.media.VideoRenderer(renderObject);
                else if (clazz === splashjs.media.Camera)
                    renderer = new splashjs.render.media.CameraRenderer(renderObject);
                else if (clazz === splashjs.controls.List)
                    renderer = new splashjs.render.controls.ListRenderer(renderObject);
                else if (clazz === splashjs.utils.ByteArray)
                    renderer = new splashjs.render.utils.ByteArrayRenderer(renderObject);
                else if (clazz === splashjs.animation.FadeTransition)
                    renderer = new splashjs.render.animation.FadeTransitionRenderer(renderObject);
                else if (clazz === splashjs.animation.ScaleTransition)
                    renderer = new splashjs.render.animation.ScaleTransitionRenderer(renderObject);
                else if (clazz === splashjs.animation.CircularTransition)
                    renderer = new splashjs.render.animation.CircularTransitionRenderer(renderObject);
                else if (clazz === splashjs.animation.RotationTransition)
                    renderer = new splashjs.render.animation.RotationTransitionRenderer(renderObject);
                else if (clazz === splashjs.animation.TranslateTransition)
                    renderer = new splashjs.render.animation.TranslateTransitionRenderer(renderObject);
                else if (clazz === splashjs.animation.SpriteSheet)
                    renderer = new splashjs.render.animation.SpriteSheetRenderer(renderObject);
                else if (clazz === splashjs.net.NetStream)
                    renderer = new splashjs.render.net.NetStreamRenderer(renderObject);
                else if (clazz === splashjs.net.NetConnection)
                    renderer = new splashjs.render.net.NetConnectionRenderer(renderObject);
                else if (clazz === splashjs.layout.Box)
                    renderer = new splashjs.render.layout.BoxRenderer(renderObject);
                else if (clazz === splashjs.layout.VerticalLayout)
                    renderer = new splashjs.render.layout.VerticalLayoutRenderer(renderObject);
                else if (clazz === splashjs.layout.HorizontalLayout)
                    renderer = new splashjs.render.layout.HorizontalLayoutRenderer(renderObject);
                else {
                    console.info("Error: " + clazz + " renderer not found");
                }
                return renderer;
            }
        }
        render.RendererCreator = RendererCreator;
        RendererCreator["__class"] = "splashjs.render.RendererCreator";
        RendererCreator["__interfaces"] = ["splashjs.render.iface.IRendererCreator"];
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        class SplashJSRenderer {
            static navigateToURL(urlRequest) {
                let url = urlRequest.getURL();
                let method = urlRequest.getMethod();
                let data = urlRequest.getData();
                let toURL = url;
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(method, splashjs.net.URLRequestMethod.GET)) {
                    if (data != null)
                        toURL += "?" + data;
                    window.open(toURL, "_blank");
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(method, splashjs.net.URLRequestMethod.POST)) {
                    let formElement = document.createElement("form");
                    formElement.method = "POST";
                    formElement.action = url;
                    formElement.id = "newForm";
                    formElement.enctype = "application/x-www-form-urlencoded";
                    formElement.encoding = "application/x-www-form-urlencoded";
                    if (data != null) {
                        let urlVariables = splashjs.net.URLVariable.decode(data);
                        for (let i = 0; i < urlVariables.length; i++) {
                            {
                                let urlVariable = urlVariables[i];
                                let inputElement = document.createElement("input");
                                inputElement.setAttribute("type", "hidden");
                                inputElement.setAttribute("name", urlVariable.getName());
                                inputElement.setAttribute("value", urlVariable.getValue());
                                formElement.appendChild(inputElement);
                            }
                            ;
                        }
                    }
                    formElement.target = "newWindow";
                    let newWindow = window.open("", "newWindow");
                    newWindow.document.body.appendChild(formElement);
                    formElement.submit();
                }
                console.info(toURL);
            }
        }
        render.SplashJSRenderer = SplashJSRenderer;
        SplashJSRenderer["__class"] = "splashjs.render.SplashJSRenderer";
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    class SplashJS {
        static render(AppClass, containerName, stageWidth, stageHeight) {
            let stage = new splashjs.display.Stage(containerName, stageWidth, stageHeight);
            try {
                stage.addChild(new (AppClass)());
            }
            catch (e) {
                console.error(e.message, e);
            }
            ;
        }
        static navigateToURL(urlRequest) {
            splashjs.render.SplashJSRenderer.navigateToURL(urlRequest);
        }
    }
    splashjs.SplashJS = SplashJS;
    SplashJS["__class"] = "splashjs.SplashJS";
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var text;
    (function (text) {
        class FontPath {
            constructor(normalFontPath) {
                if (((typeof normalFontPath === 'string') || normalFontPath === null)) {
                    let __args = arguments;
                    if (this.normalFontPath === undefined)
                        this.normalFontPath = null;
                    if (this.italicFontPath === undefined)
                        this.italicFontPath = null;
                    if (this.boldFontPath === undefined)
                        this.boldFontPath = null;
                    if (this.boldItalicFontPath === undefined)
                        this.boldItalicFontPath = null;
                    if (this.normalFontPath === undefined)
                        this.normalFontPath = null;
                    if (this.italicFontPath === undefined)
                        this.italicFontPath = null;
                    if (this.boldFontPath === undefined)
                        this.boldFontPath = null;
                    if (this.boldItalicFontPath === undefined)
                        this.boldItalicFontPath = null;
                    (() => {
                        this.normalFontPath = normalFontPath;
                    })();
                }
                else if (normalFontPath === undefined) {
                    let __args = arguments;
                    if (this.normalFontPath === undefined)
                        this.normalFontPath = null;
                    if (this.italicFontPath === undefined)
                        this.italicFontPath = null;
                    if (this.boldFontPath === undefined)
                        this.boldFontPath = null;
                    if (this.boldItalicFontPath === undefined)
                        this.boldItalicFontPath = null;
                    if (this.normalFontPath === undefined)
                        this.normalFontPath = null;
                    if (this.italicFontPath === undefined)
                        this.italicFontPath = null;
                    if (this.boldFontPath === undefined)
                        this.boldFontPath = null;
                    if (this.boldItalicFontPath === undefined)
                        this.boldItalicFontPath = null;
                }
                else
                    throw new Error('invalid overload');
            }
            setNormalFontPath(normalFontPath) {
                this.normalFontPath = normalFontPath;
                return this;
            }
            setBoldFontPath(boldFontPath) {
                this.boldFontPath = boldFontPath;
                return this;
            }
            setItalicFontPath(italicFontPath) {
                this.italicFontPath = italicFontPath;
                return this;
            }
            setBoldItalicFontPath(boldItalicFontPath) {
                this.boldItalicFontPath = boldItalicFontPath;
                return this;
            }
            getNormalFontPath() {
                return this.normalFontPath;
            }
            getBoldFontPath() {
                return this.boldFontPath;
            }
            getItalicFontPath() {
                return this.italicFontPath;
            }
            getBoldItalicFontPath() {
                return this.boldItalicFontPath;
            }
        }
        text.FontPath = FontPath;
        FontPath["__class"] = "splashjs.text.FontPath";
    })(text = splashjs.text || (splashjs.text = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var text;
    (function (text) {
        class FontStyle {
        }
        FontStyle.ITALIC = "italic";
        FontStyle.NORMAL = "normal";
        FontStyle.OBLIQUE = "oblique";
        text.FontStyle = FontStyle;
        FontStyle["__class"] = "splashjs.text.FontStyle";
    })(text = splashjs.text || (splashjs.text = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var text;
    (function (text) {
        class FontWeight {
        }
        FontWeight.NORMAL = "normal";
        FontWeight.LIGHTER = "lighter";
        FontWeight.BOLD = "bold";
        FontWeight.BOLDER = "bolder";
        text.FontWeight = FontWeight;
        FontWeight["__class"] = "splashjs.text.FontWeight";
    })(text = splashjs.text || (splashjs.text = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var text;
    (function (text) {
        class TextFormat {
            constructor(font, fontStyle, fontWeight, fontSize) {
                if (((font != null && (font["__interfaces"] != null && font["__interfaces"].indexOf("splashjs.text.iface.IFont") >= 0 || font.constructor != null && font.constructor["__interfaces"] != null && font.constructor["__interfaces"].indexOf("splashjs.text.iface.IFont") >= 0)) || font === null) && ((typeof fontStyle === 'string') || fontStyle === null) && ((typeof fontWeight === 'string') || fontWeight === null) && ((typeof fontSize === 'number') || fontSize === null)) {
                    let __args = arguments;
                    if (this.font === undefined)
                        this.font = null;
                    if (this.fontStyle === undefined)
                        this.fontStyle = null;
                    if (this.fontWeight === undefined)
                        this.fontWeight = null;
                    if (this.fontSize === undefined)
                        this.fontSize = 0;
                    if (this.font === undefined)
                        this.font = null;
                    if (this.fontStyle === undefined)
                        this.fontStyle = null;
                    if (this.fontWeight === undefined)
                        this.fontWeight = null;
                    if (this.fontSize === undefined)
                        this.fontSize = 0;
                    (() => {
                        this.font = font;
                        this.fontStyle = fontStyle;
                        this.fontWeight = fontWeight;
                        this.fontSize = fontSize;
                    })();
                }
                else if (font === undefined && fontStyle === undefined && fontWeight === undefined && fontSize === undefined) {
                    let __args = arguments;
                    if (this.font === undefined)
                        this.font = null;
                    if (this.fontStyle === undefined)
                        this.fontStyle = null;
                    if (this.fontWeight === undefined)
                        this.fontWeight = null;
                    if (this.fontSize === undefined)
                        this.fontSize = 0;
                    if (this.font === undefined)
                        this.font = null;
                    if (this.fontStyle === undefined)
                        this.fontStyle = null;
                    if (this.fontWeight === undefined)
                        this.fontWeight = null;
                    if (this.fontSize === undefined)
                        this.fontSize = 0;
                }
                else
                    throw new Error('invalid overload');
            }
            setFont(font) {
                this.font = font;
            }
            getFont() {
                return this.font;
            }
            setFontStyle(fontStyle) {
                this.fontStyle = fontStyle;
            }
            getFontStyle() {
                return this.fontStyle;
            }
            setFontWeight(fontWeight) {
                this.fontWeight = fontWeight;
            }
            getFontWeight() {
                return this.fontWeight;
            }
            setFontSize(fontSize) {
                this.fontSize = fontSize;
            }
            getFontSize() {
                return this.fontSize;
            }
        }
        text.TextFormat = TextFormat;
        TextFormat["__class"] = "splashjs.text.TextFormat";
        TextFormat["__interfaces"] = ["splashjs.text.iface.ITextFormat"];
    })(text = splashjs.text || (splashjs.text = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var ui;
    (function (ui) {
        class KeyLocation {
        }
        KeyLocation.STANDARD = "standard";
        KeyLocation.LEFT = "left";
        KeyLocation.RIGHT = "right";
        KeyLocation.NUMPAD = "numpad";
        ui.KeyLocation = KeyLocation;
        KeyLocation["__class"] = "splashjs.ui.KeyLocation";
    })(ui = splashjs.ui || (splashjs.ui = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var ui;
    (function (ui) {
        class MouseCursorName {
        }
        MouseCursorName.ALIAS = "alias";
        MouseCursorName.ALL_SCROLL = "all-scroll";
        MouseCursorName.AUTO = "auto";
        MouseCursorName.CELL = "cell";
        MouseCursorName.CONTEXT_MENU = "context-menu";
        MouseCursorName.COL_RESIZE = "col-resize";
        MouseCursorName.COPY = "copy";
        MouseCursorName.CROSSHAIR = "crosshair";
        MouseCursorName.DEFAULT = "default";
        MouseCursorName.E_RESIZE = "e-resize";
        MouseCursorName.EW_RESIZE = "ew-resize";
        MouseCursorName.GRAB = "grab";
        MouseCursorName.GRABBING = "grabbing";
        MouseCursorName.HELP = "help";
        MouseCursorName.MOVE = "move";
        MouseCursorName.N_RESIZE = "n-resize";
        MouseCursorName.NE_RESIZE = "ne-resize";
        MouseCursorName.NESW_RESIZE = "nesw-resize";
        MouseCursorName.NS_RESIZE = "ns-resize";
        MouseCursorName.NW_RESIZE = "nw-resize";
        MouseCursorName.NWSE_RESIZE = "nwse-resize";
        MouseCursorName.NO_DROP = "no-drop";
        MouseCursorName.NOT_ALLOWED = "not-allowed";
        MouseCursorName.POINTER = "pointer";
        MouseCursorName.PROGRESS = "progress";
        MouseCursorName.ROW_RESIZE = "row-resize";
        MouseCursorName.S_RESIZE = "s-resize";
        MouseCursorName.SE_RESIZE = "se-resize";
        MouseCursorName.SW_RESIZE = "sw-resize";
        MouseCursorName.W_RESIZE = "w-resize";
        MouseCursorName.TEXT = "text";
        MouseCursorName.WAIT = "wait";
        MouseCursorName.ZOOM_IN = "zoom-in";
        MouseCursorName.ZOOM_OUT = "zoom-out";
        ui.MouseCursorName = MouseCursorName;
        MouseCursorName["__class"] = "splashjs.ui.MouseCursorName";
    })(ui = splashjs.ui || (splashjs.ui = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var ui;
    (function (ui) {
        class MouseCursorType {
        }
        MouseCursorType.SYSTEM = "system";
        MouseCursorType.IMAGE = "image";
        ui.MouseCursorType = MouseCursorType;
        MouseCursorType["__class"] = "splashjs.ui.MouseCursorType";
    })(ui = splashjs.ui || (splashjs.ui = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        class ColorName {
        }
        ColorName.WHITE = "White";
        ColorName.TOMATO = "Tomato";
        ColorName.ORANGE = "Orange";
        ColorName.DODGER_BLUE = "DodgerBlue";
        ColorName.MEDIUM_SEA_GREEN = "MediumSeaGreen";
        ColorName.GRAY = "Gray";
        ColorName.SLATE_BLUE = "SlateBlue";
        ColorName.VIOLET = "Violet";
        ColorName.LIGHT_GRAY = "LightGray";
        ColorName.ALICE_BLUE = "AliceBlue";
        ColorName.ANTIQUE_WHITE = "AntiqueWhite";
        ColorName.AQUA = "Aqua";
        ColorName.AQUAMARINE = "Aquamarine";
        ColorName.AZURE = "Azure";
        ColorName.BEIGE = "Beige";
        ColorName.BISQUE = "Bisque";
        ColorName.BLACK = "Black";
        ColorName.BLANCHED_ALMOND = "BlanchedAlmond";
        ColorName.BLUE = "Blue";
        ColorName.BLUE_VIOLET = "BlueViolet";
        ColorName.BROWN = "Brown";
        ColorName.BURLY_WOOD = "BurlyWood";
        ColorName.CADET_BLUE = "CadetBlue";
        ColorName.RED = "red";
        ColorName.YELLOW = "yellow";
        ColorName.GREEN = "green";
        ColorName.NONE = "none";
        utils.ColorName = ColorName;
        ColorName["__class"] = "splashjs.utils.ColorName";
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        class ColorType {
        }
        ColorType.NAME = "name";
        ColorType.RGB = "rgb";
        ColorType.RGBA = "rgba";
        ColorType.HSL = "hsl";
        ColorType.HSLA = "hsla";
        ColorType.HEX = "hex";
        ColorType.GRADIENT = "gradient";
        utils.ColorType = ColorType;
        ColorType["__class"] = "splashjs.utils.ColorType";
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        var desktop;
        (function (desktop) {
            class ByteArray {
                constructor() {
                }
            }
            desktop.ByteArray = ByteArray;
            ByteArray["__class"] = "splashjs.utils.desktop.ByteArray";
            ByteArray["__interfaces"] = ["splashjs.utils.desktop.IDesktopByteArray"];
        })(desktop = utils.desktop || (utils.desktop = {}));
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        class Gradient {
            constructor() {
                /*private*/ this.colors = ([]);
                /*private*/ this.repeat = false;
            }
            addColor(color) {
                /* add */ (this.colors.push(color) > 0);
            }
            addColors(...colors) {
                for (let index123 = 0; index123 < colors.length; index123++) {
                    let color = colors[index123];
                    {
                        /* add */ (this.colors.push(color) > 0);
                    }
                }
            }
            getColors() {
                return this.colors;
            }
            setRepeat(repeat) {
                this.repeat = repeat;
            }
            getRepeat() {
                return this.repeat;
            }
        }
        utils.Gradient = Gradient;
        Gradient["__class"] = "splashjs.utils.Gradient";
        Gradient["__interfaces"] = ["splashjs.utils.iface.IGradient"];
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        class GradientDirection {
        }
        GradientDirection.TOP_TO_BOTTOM = "top_to_bottom";
        GradientDirection.BOTTOM_TO_TOP = "bottom_to_top";
        GradientDirection.LEFT_TO_RIGHT = "left_to_right";
        GradientDirection.RIGHT_TO_LEFT = "right_to_left";
        GradientDirection.TOP_TO_LEFT = "top_to_left";
        GradientDirection.TOP_TO_RIGHT = "top_to_right";
        GradientDirection.BOTTOM_TO_LEFT = "bottom_to_left";
        GradientDirection.BOTTOM_TO_RIGHT = "bottom_to_right";
        GradientDirection.LEFT_TO_TOP = "left_to_top";
        GradientDirection.LEFT_TO_BOTTOM = "left_to_bottom";
        GradientDirection.RIGHT_TO_TOP = "right_to_top";
        GradientDirection.RIGHT_TO_BOTTOM = "right_to_bottom";
        utils.GradientDirection = GradientDirection;
        GradientDirection["__class"] = "splashjs.utils.GradientDirection";
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        class GradientShape {
        }
        GradientShape.CIRCLE = "circle";
        GradientShape.ELLIPSE = "ellipse";
        utils.GradientShape = GradientShape;
        GradientShape["__class"] = "splashjs.utils.GradientShape";
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        class GradientSize {
        }
        GradientSize.CLOSEST_SIDE = "closest-side";
        GradientSize.FARTHEST_SIDE = "farthest-side";
        GradientSize.CLOSEST_CORNER = "closest-corner";
        GradientSize.FARTHEST_CORNER = "farthest-corner";
        utils.GradientSize = GradientSize;
        GradientSize["__class"] = "splashjs.utils.GradientSize";
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        class ResourceType {
        }
        ResourceType.SOUND = "sound";
        ResourceType.IMAGE = "image";
        ResourceType.VIDEO = "video";
        utils.ResourceType = ResourceType;
        ResourceType["__class"] = "splashjs.utils.ResourceType";
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
var java;
(function (java) {
    var util;
    (function (util) {
        class TimerTask {
            constructor() {
                this.state = TimerTask.VIRGIN;
                this.period = 0;
                if (this.nextExecutionTime === undefined)
                    this.nextExecutionTime = 0;
                if (this.handle === undefined)
                    this.handle = 0;
            }
            cancel() {
                let success = this.state === TimerTask.SCHEDULED;
                this.state = TimerTask.CANCELLED;
                this.nextExecutionTime = 0;
                this.period = 0;
                return success;
            }
            scheduledExecutionTime() {
                return this.period < 0 ? this.nextExecutionTime + this.period : this.nextExecutionTime - this.period;
            }
        }
        TimerTask.VIRGIN = 0;
        TimerTask.SCHEDULED = 1;
        TimerTask.EXECUTED = 2;
        TimerTask.CANCELLED = 3;
        util.TimerTask = TimerTask;
        TimerTask["__class"] = "java.util.TimerTask";
        TimerTask["__interfaces"] = ["java.lang.Runnable"];
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        class Item extends splashjs.controls.BaseItem {
            constructor(text, value) {
                super();
                if (this.text === undefined)
                    this.text = null;
                if (this.value === undefined)
                    this.value = null;
                this.text = text;
                this.value = value;
            }
            setText(text) {
                this.text = text;
            }
            getText() {
                return this.text;
            }
            setValue(value) {
                this.value = value;
            }
            getValue() {
                return this.value;
            }
        }
        controls.Item = Item;
        Item["__class"] = "splashjs.controls.Item";
        Item["__interfaces"] = ["splashjs.controls.iface.IItem", "splashjs.controls.iface.IBaseItem"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        class ItemGroup extends splashjs.controls.BaseItem {
            constructor(title) {
                super();
                /*private*/ this.items = ([]);
                if (this.title === undefined)
                    this.title = null;
                this.title = title;
            }
            addItem(item) {
                /* add */ (this.items.push(item) > 0);
            }
            removeItem(item) {
                /* remove */ (a => { let index = a.indexOf(item); if (index >= 0) {
                    a.splice(index, 1);
                    return true;
                }
                else {
                    return false;
                } })(this.items);
            }
            setTitle(title) {
                this.title = title;
            }
            getTitle() {
                return this.title;
            }
            getAllItems() {
                return this.items;
            }
        }
        controls.ItemGroup = ItemGroup;
        ItemGroup["__class"] = "splashjs.controls.ItemGroup";
        ItemGroup["__interfaces"] = ["splashjs.controls.iface.IItemGroup", "splashjs.controls.iface.IBaseItem"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        class IOErrorEvent extends splashjs.events.Event {
            constructor(type) {
                super(type);
                /*private*/ this.text = null;
            }
            setText(text) {
                this.text = text;
            }
            getText() {
                return this.text;
            }
        }
        IOErrorEvent.IO_ERROR = "io_error";
        events.IOErrorEvent = IOErrorEvent;
        IOErrorEvent["__class"] = "splashjs.events.IOErrorEvent";
        IOErrorEvent["__interfaces"] = ["splashjs.events.iface.IEvent", "splashjs.events.iface.IIOErrorEvent"];
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        class KeyboardEvent extends splashjs.events.Event {
            constructor(name, altKey, charCode, code, ctrlKey, key, keyCode, location, metaKey, repeat, shiftKey, which) {
                super(name);
                if (this.__splashjs_events_KeyboardEvent_altKey === undefined)
                    this.__splashjs_events_KeyboardEvent_altKey = null;
                if (this.charCode === undefined)
                    this.charCode = null;
                if (this.code === undefined)
                    this.code = null;
                if (this.ctrlKey === undefined)
                    this.ctrlKey = null;
                if (this.key === undefined)
                    this.key = null;
                if (this.keyCode === undefined)
                    this.keyCode = null;
                if (this.location === undefined)
                    this.location = null;
                if (this.metaKey === undefined)
                    this.metaKey = null;
                if (this.repeat === undefined)
                    this.repeat = null;
                if (this.shiftKey === undefined)
                    this.shiftKey = null;
                if (this.which === undefined)
                    this.which = null;
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
            getAltKey() {
                return this.__splashjs_events_KeyboardEvent_altKey;
            }
            getCharCode() {
                return this.charCode;
            }
            getCode() {
                return this.code;
            }
            getCtrlKey() {
                return this.ctrlKey;
            }
            getKey() {
                return this.key;
            }
            getKeyCode() {
                return this.keyCode;
            }
            getLocation() {
                return this.location;
            }
            getMetaKey() {
                return this.metaKey;
            }
            getRepeat() {
                return this.repeat;
            }
            getShiftKey() {
                return this.shiftKey;
            }
            getWhich() {
                return this.which;
            }
            toString() {
                let properties = "";
                properties += "name=" + this.getType() + ", altKey=" + this.__splashjs_events_KeyboardEvent_altKey + ", charCode=" + this.charCode + ", code=" + this.code + ", ctrlKey=" + this.ctrlKey + ", key=" + this.key + ", keyCode=" + this.keyCode + ", location=" + this.location + ", metaKey=" + this.metaKey + ", repeat=" + this.repeat + ", shifKey=" + this.shiftKey + ", which=" + this.which;
                return "KeyboardEvent[" + properties + "]";
            }
        }
        KeyboardEvent.KEY_UP = "key_up";
        KeyboardEvent.KEY_DOWN = "key_down";
        KeyboardEvent.KEY_PRESS = "key_press";
        events.KeyboardEvent = KeyboardEvent;
        KeyboardEvent["__class"] = "splashjs.events.KeyboardEvent";
        KeyboardEvent["__interfaces"] = ["splashjs.events.iface.IEvent", "splashjs.events.iface.IKeyboardEvent"];
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        class MouseEvent extends splashjs.events.Event {
            constructor(name, target, currentTarget) {
                super(name, target, currentTarget);
                if (this.__splashjs_events_MouseEvent_altKey === undefined)
                    this.__splashjs_events_MouseEvent_altKey = false;
                if (this.localX === undefined)
                    this.localX = 0;
                if (this.localY === undefined)
                    this.localY = 0;
                this.__splashjs_events_MouseEvent_altKey = this.__splashjs_events_MouseEvent_altKey;
            }
            getAltKey() {
                return this.__splashjs_events_MouseEvent_altKey;
            }
            setAltKey(altKey) {
                this.__splashjs_events_MouseEvent_altKey = altKey;
            }
            setLocalX(localX) {
                this.localX = localX;
            }
            getLocalX() {
                return this.localX;
            }
            setLocalY(localY) {
                this.localY = localY;
            }
            getLocalY() {
                return this.localY;
            }
        }
        MouseEvent.CLICK = "click";
        MouseEvent.DOUBLE_CLICK = "double_click";
        MouseEvent.MOUSE_DOWN = "mouse_down";
        MouseEvent.MOUSE_ENTER = "mouse_enter";
        MouseEvent.MOUSE_LEAVE = "mouse_leave";
        MouseEvent.MOUSE_MOVE = "mouse_move";
        MouseEvent.MOUSE_OUT = "mouse_out";
        MouseEvent.MOUSE_OVER = "mouse_over";
        MouseEvent.MOUSE_UP = "mouse_up";
        events.MouseEvent = MouseEvent;
        MouseEvent["__class"] = "splashjs.events.MouseEvent";
        MouseEvent["__interfaces"] = ["splashjs.events.iface.IEvent", "splashjs.events.iface.IMouseEvent"];
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        class PermissionEvent extends splashjs.events.Event {
            constructor(type, target, currentTarget) {
                if (((typeof type === 'string') || type === null) && ((target != null && (target["__interfaces"] != null && target["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || target.constructor != null && target.constructor["__interfaces"] != null && target.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || target === null) && ((currentTarget != null && (currentTarget["__interfaces"] != null && currentTarget["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || currentTarget.constructor != null && currentTarget.constructor["__interfaces"] != null && currentTarget.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || currentTarget === null)) {
                    let __args = arguments;
                    super(type, target, currentTarget);
                    this.status = splashjs.permissions.PermissionStatus.UNKNOWN;
                }
                else if (((typeof type === 'string') || type === null) && target === undefined && currentTarget === undefined) {
                    let __args = arguments;
                    super(type);
                    this.status = splashjs.permissions.PermissionStatus.UNKNOWN;
                }
                else
                    throw new Error('invalid overload');
            }
            getStatus() {
                return this.status;
            }
            setStatus(status) {
                this.status = status;
            }
        }
        PermissionEvent.PERMISSION_STATUS = "permission_status";
        events.PermissionEvent = PermissionEvent;
        PermissionEvent["__class"] = "splashjs.events.PermissionEvent";
        PermissionEvent["__interfaces"] = ["splashjs.events.iface.IEvent", "splashjs.events.iface.IPermissionEvent"];
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        class ProgressEvent extends splashjs.events.Event {
            constructor(type) {
                super(type);
                /*private*/ this.bytesLoaded = -1;
                /*private*/ this.bytesTotal = -1;
            }
            setBytesLoaded(bytesLoaded) {
                this.bytesLoaded = bytesLoaded;
            }
            getBytesLoaded() {
                return this.bytesLoaded;
            }
            setBytesTotal(bytesTotal) {
                this.bytesTotal = bytesTotal;
            }
            getBytesTotal() {
                return this.bytesTotal;
            }
        }
        ProgressEvent.PROGRESS = "progress";
        events.ProgressEvent = ProgressEvent;
        ProgressEvent["__class"] = "splashjs.events.ProgressEvent";
        ProgressEvent["__interfaces"] = ["splashjs.events.iface.IEvent", "splashjs.events.iface.IProgressEvent"];
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        class TimerEvent extends splashjs.events.Event {
            constructor(type, target, currentTarget) {
                super(type, target, currentTarget);
            }
        }
        TimerEvent.TIMER = "timer";
        TimerEvent.TIMER_COMPLETE = "timer_complete";
        events.TimerEvent = TimerEvent;
        TimerEvent["__class"] = "splashjs.events.TimerEvent";
        TimerEvent["__interfaces"] = ["splashjs.events.iface.IEvent"];
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        class TransitionEvent extends splashjs.events.Event {
            constructor(type, e1, e2) {
                if (((typeof type === 'string') || type === null) && ((e1 != null && (e1["__interfaces"] != null && e1["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || e1.constructor != null && e1.constructor["__interfaces"] != null && e1.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || e1 === null) && ((e2 != null && (e2["__interfaces"] != null && e2["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || e2.constructor != null && e2.constructor["__interfaces"] != null && e2.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || e2 === null)) {
                    let __args = arguments;
                    super(type, e1, e2);
                }
                else if (((typeof type === 'string') || type === null) && e1 === undefined && e2 === undefined) {
                    let __args = arguments;
                    super(type);
                }
                else
                    throw new Error('invalid overload');
            }
        }
        TransitionEvent.DELAY_COMPLETE = "delay_complete";
        TransitionEvent.COMPLETE = "complete";
        TransitionEvent.DURATION_COMPLETE = "duration_complete";
        TransitionEvent.LOOP_INTERVAL_COMPLETE = "loop_interval_complete";
        events.TransitionEvent = TransitionEvent;
        TransitionEvent["__class"] = "splashjs.events.TransitionEvent";
        TransitionEvent["__interfaces"] = ["splashjs.events.iface.IEvent", "splashjs.events.iface.ITransitionEvent"];
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filters;
    (function (filters) {
        class BlurFilter extends splashjs.filters.Filter {
            constructor(blur) {
                if (((typeof blur === 'number') || blur === null)) {
                    let __args = arguments;
                    super();
                    if (this.blur === undefined)
                        this.blur = 0;
                    if (this.blur === undefined)
                        this.blur = 0;
                    (() => {
                        this.blur = blur;
                    })();
                }
                else if (blur === undefined) {
                    let __args = arguments;
                    super();
                    if (this.blur === undefined)
                        this.blur = 0;
                    if (this.blur === undefined)
                        this.blur = 0;
                }
                else
                    throw new Error('invalid overload');
            }
            setBlur(blur) {
                this.blur = blur;
                return this;
            }
            getBlur() {
                return this.blur;
            }
        }
        filters.BlurFilter = BlurFilter;
        BlurFilter["__class"] = "splashjs.filters.BlurFilter";
        BlurFilter["__interfaces"] = ["splashjs.filters.iface.IFilter", "splashjs.filters.iface.IBlurFilter"];
    })(filters = splashjs.filters || (splashjs.filters = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filters;
    (function (filters) {
        class BrightnessFilter extends splashjs.filters.Filter {
            constructor(brightness) {
                if (((typeof brightness === 'number') || brightness === null)) {
                    let __args = arguments;
                    super();
                    if (this.brightness === undefined)
                        this.brightness = 0;
                    if (this.brightness === undefined)
                        this.brightness = 0;
                    (() => {
                        this.brightness = brightness;
                    })();
                }
                else if (brightness === undefined) {
                    let __args = arguments;
                    super();
                    if (this.brightness === undefined)
                        this.brightness = 0;
                    if (this.brightness === undefined)
                        this.brightness = 0;
                }
                else
                    throw new Error('invalid overload');
            }
            setBrightness(brightness) {
                this.brightness = brightness;
                return this;
            }
            getBrightness() {
                return this.brightness;
            }
        }
        filters.BrightnessFilter = BrightnessFilter;
        BrightnessFilter["__class"] = "splashjs.filters.BrightnessFilter";
        BrightnessFilter["__interfaces"] = ["splashjs.filters.iface.IFilter", "splashjs.filters.iface.IBrightnessFilter"];
    })(filters = splashjs.filters || (splashjs.filters = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filters;
    (function (filters) {
        class ContrastFilter extends splashjs.filters.Filter {
            constructor(contrast) {
                if (((typeof contrast === 'number') || contrast === null)) {
                    let __args = arguments;
                    super();
                    if (this.contrast === undefined)
                        this.contrast = 0;
                    if (this.contrast === undefined)
                        this.contrast = 0;
                    (() => {
                        this.contrast = contrast;
                    })();
                }
                else if (contrast === undefined) {
                    let __args = arguments;
                    super();
                    if (this.contrast === undefined)
                        this.contrast = 0;
                    if (this.contrast === undefined)
                        this.contrast = 0;
                }
                else
                    throw new Error('invalid overload');
            }
            setContrast(contrast) {
                this.contrast = contrast;
                return this;
            }
            getContrast() {
                return this.contrast;
            }
        }
        filters.ContrastFilter = ContrastFilter;
        ContrastFilter["__class"] = "splashjs.filters.ContrastFilter";
        ContrastFilter["__interfaces"] = ["splashjs.filters.iface.IContrastFilter", "splashjs.filters.iface.IFilter"];
    })(filters = splashjs.filters || (splashjs.filters = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filters;
    (function (filters) {
        class DropShadowFilter extends splashjs.filters.Filter {
            constructor(offsetX, offsetY, blur, color) {
                if (((typeof offsetX === 'number') || offsetX === null) && ((typeof offsetY === 'number') || offsetY === null) && ((typeof blur === 'number') || blur === null) && ((color != null && (color["__interfaces"] != null && color["__interfaces"].indexOf("splashjs.utils.iface.IColor") >= 0 || color.constructor != null && color.constructor["__interfaces"] != null && color.constructor["__interfaces"].indexOf("splashjs.utils.iface.IColor") >= 0)) || color === null)) {
                    let __args = arguments;
                    super();
                    if (this.offsetX === undefined)
                        this.offsetX = 0;
                    if (this.offsetY === undefined)
                        this.offsetY = 0;
                    if (this.blur === undefined)
                        this.blur = 0;
                    if (this.spread === undefined)
                        this.spread = 0;
                    this.color = splashjs.utils.Color.BLACK_$LI$();
                    if (this.offsetX === undefined)
                        this.offsetX = 0;
                    if (this.offsetY === undefined)
                        this.offsetY = 0;
                    if (this.blur === undefined)
                        this.blur = 0;
                    if (this.spread === undefined)
                        this.spread = 0;
                    (() => {
                        this.offsetX = offsetX;
                        this.offsetY = offsetY;
                        this.blur = blur;
                        this.color = color;
                    })();
                }
                else if (offsetX === undefined && offsetY === undefined && blur === undefined && color === undefined) {
                    let __args = arguments;
                    super();
                    if (this.offsetX === undefined)
                        this.offsetX = 0;
                    if (this.offsetY === undefined)
                        this.offsetY = 0;
                    if (this.blur === undefined)
                        this.blur = 0;
                    if (this.spread === undefined)
                        this.spread = 0;
                    this.color = splashjs.utils.Color.BLACK_$LI$();
                    if (this.offsetX === undefined)
                        this.offsetX = 0;
                    if (this.offsetY === undefined)
                        this.offsetY = 0;
                    if (this.blur === undefined)
                        this.blur = 0;
                    if (this.spread === undefined)
                        this.spread = 0;
                }
                else
                    throw new Error('invalid overload');
            }
            setOffsetX(offsetX) {
                this.offsetX = offsetX;
                return this;
            }
            getOffsetX() {
                return this.offsetX;
            }
            setOffsetY(offsetY) {
                this.offsetY = offsetY;
                return this;
            }
            getOffsetY() {
                return this.offsetY;
            }
            setBlur(blur) {
                this.blur = blur;
                return this;
            }
            getBlur() {
                return this.blur;
            }
            setSpread(spread) {
                this.spread = spread;
                return this;
            }
            getSpread() {
                return this.spread;
            }
            setColor(color) {
                this.color = color;
                return this;
            }
            getColor() {
                return this.color;
            }
        }
        filters.DropShadowFilter = DropShadowFilter;
        DropShadowFilter["__class"] = "splashjs.filters.DropShadowFilter";
        DropShadowFilter["__interfaces"] = ["splashjs.filters.iface.IFilter", "splashjs.filters.iface.IDropShadowFilter"];
    })(filters = splashjs.filters || (splashjs.filters = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filters;
    (function (filters) {
        class GrayscaleFilter extends splashjs.filters.Filter {
            constructor(grayscale) {
                if (((typeof grayscale === 'number') || grayscale === null)) {
                    let __args = arguments;
                    super();
                    if (this.grayscale === undefined)
                        this.grayscale = 0;
                    if (this.grayscale === undefined)
                        this.grayscale = 0;
                    (() => {
                        this.grayscale = grayscale;
                    })();
                }
                else if (grayscale === undefined) {
                    let __args = arguments;
                    super();
                    if (this.grayscale === undefined)
                        this.grayscale = 0;
                    if (this.grayscale === undefined)
                        this.grayscale = 0;
                }
                else
                    throw new Error('invalid overload');
            }
            setGrayscale(grayscale) {
                this.grayscale = grayscale;
                return this;
            }
            getGrayscale() {
                return this.grayscale;
            }
        }
        filters.GrayscaleFilter = GrayscaleFilter;
        GrayscaleFilter["__class"] = "splashjs.filters.GrayscaleFilter";
        GrayscaleFilter["__interfaces"] = ["splashjs.filters.iface.IFilter", "splashjs.filters.iface.IGrayscaleFilter"];
    })(filters = splashjs.filters || (splashjs.filters = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filters;
    (function (filters) {
        class HueRotateFilter extends splashjs.filters.Filter {
            constructor(hueRotate) {
                if (((typeof hueRotate === 'number') || hueRotate === null)) {
                    let __args = arguments;
                    super();
                    if (this.hueRotate === undefined)
                        this.hueRotate = 0;
                    if (this.hueRotate === undefined)
                        this.hueRotate = 0;
                    (() => {
                        this.hueRotate = hueRotate;
                    })();
                }
                else if (hueRotate === undefined) {
                    let __args = arguments;
                    super();
                    if (this.hueRotate === undefined)
                        this.hueRotate = 0;
                    if (this.hueRotate === undefined)
                        this.hueRotate = 0;
                }
                else
                    throw new Error('invalid overload');
            }
            setHueRotate(hueRotate) {
                this.hueRotate = hueRotate;
                return this;
            }
            getHueRotate() {
                return this.hueRotate;
            }
        }
        filters.HueRotateFilter = HueRotateFilter;
        HueRotateFilter["__class"] = "splashjs.filters.HueRotateFilter";
        HueRotateFilter["__interfaces"] = ["splashjs.filters.iface.IHueRotateFilter", "splashjs.filters.iface.IFilter"];
    })(filters = splashjs.filters || (splashjs.filters = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filters;
    (function (filters) {
        class InvertFilter extends splashjs.filters.Filter {
            constructor(invert) {
                if (((typeof invert === 'number') || invert === null)) {
                    let __args = arguments;
                    super();
                    if (this.invert === undefined)
                        this.invert = 0;
                    if (this.invert === undefined)
                        this.invert = 0;
                    (() => {
                        this.invert = invert;
                    })();
                }
                else if (invert === undefined) {
                    let __args = arguments;
                    super();
                    if (this.invert === undefined)
                        this.invert = 0;
                    if (this.invert === undefined)
                        this.invert = 0;
                }
                else
                    throw new Error('invalid overload');
            }
            setInvert(invert) {
                this.invert = invert;
                return this;
            }
            getInvert() {
                return this.invert;
            }
        }
        filters.InvertFilter = InvertFilter;
        InvertFilter["__class"] = "splashjs.filters.InvertFilter";
        InvertFilter["__interfaces"] = ["splashjs.filters.iface.IInvertFilter", "splashjs.filters.iface.IFilter"];
    })(filters = splashjs.filters || (splashjs.filters = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filters;
    (function (filters) {
        class SaturateFilter extends splashjs.filters.Filter {
            constructor(saturate) {
                if (((typeof saturate === 'number') || saturate === null)) {
                    let __args = arguments;
                    super();
                    if (this.saturate === undefined)
                        this.saturate = 0;
                    if (this.saturate === undefined)
                        this.saturate = 0;
                    (() => {
                        this.saturate = saturate;
                    })();
                }
                else if (saturate === undefined) {
                    let __args = arguments;
                    super();
                    if (this.saturate === undefined)
                        this.saturate = 0;
                    if (this.saturate === undefined)
                        this.saturate = 0;
                }
                else
                    throw new Error('invalid overload');
            }
            setSaturate(saturate) {
                this.saturate = saturate;
                return this;
            }
            getSaturate() {
                return this.saturate;
            }
        }
        filters.SaturateFilter = SaturateFilter;
        SaturateFilter["__class"] = "splashjs.filters.SaturateFilter";
        SaturateFilter["__interfaces"] = ["splashjs.filters.iface.IFilter", "splashjs.filters.iface.ISaturateFilter"];
    })(filters = splashjs.filters || (splashjs.filters = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filters;
    (function (filters) {
        class SepiaFilter extends splashjs.filters.Filter {
            constructor(sepia) {
                if (((typeof sepia === 'number') || sepia === null)) {
                    let __args = arguments;
                    super();
                    if (this.sepia === undefined)
                        this.sepia = 0;
                    if (this.sepia === undefined)
                        this.sepia = 0;
                    (() => {
                        this.sepia = sepia;
                    })();
                }
                else if (sepia === undefined) {
                    let __args = arguments;
                    super();
                    if (this.sepia === undefined)
                        this.sepia = 0;
                    if (this.sepia === undefined)
                        this.sepia = 0;
                }
                else
                    throw new Error('invalid overload');
            }
            setSepia(sepia) {
                this.sepia = sepia;
                return this;
            }
            getSepia() {
                return this.sepia;
            }
        }
        filters.SepiaFilter = SepiaFilter;
        SepiaFilter["__class"] = "splashjs.filters.SepiaFilter";
        SepiaFilter["__interfaces"] = ["splashjs.filters.iface.ISepiaFilter", "splashjs.filters.iface.IFilter"];
    })(filters = splashjs.filters || (splashjs.filters = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        class UnsupportedOperationError extends splashjs.lang.RuntimeError {
            constructor() {
                super("Unsupported operation error");
                Object.setPrototypeOf(this, UnsupportedOperationError.prototype);
            }
        }
        lang.UnsupportedOperationError = UnsupportedOperationError;
        UnsupportedOperationError["__class"] = "splashjs.lang.UnsupportedOperationError";
        UnsupportedOperationError["__interfaces"] = ["java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        class IOError extends splashjs.lang.SplashError {
            constructor(message) {
                super(message);
                Object.setPrototypeOf(this, IOError.prototype);
                this.name = (c => c["__class"] ? c["__class"] : c["name"])(this.constructor);
            }
        }
        lang.IOError = IOError;
        IOError["__class"] = "splashjs.lang.IOError";
        IOError["__interfaces"] = ["splashjs.lang.iface.ISplashError", "splashjs.lang.iface.IIOError", "java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        class RangeError extends splashjs.lang.SplashError {
            constructor(message) {
                super(message);
                Object.setPrototypeOf(this, RangeError.prototype);
                this.name = (c => c["__class"] ? c["__class"] : c["name"])(this.constructor);
            }
        }
        lang.RangeError = RangeError;
        RangeError["__class"] = "splashjs.lang.RangeError";
        RangeError["__interfaces"] = ["splashjs.lang.iface.ISplashError", "splashjs.lang.iface.IRangeError", "java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        class SecurityError extends splashjs.lang.SplashError {
            constructor(message) {
                super(message);
                Object.setPrototypeOf(this, SecurityError.prototype);
                this.name = (c => c["__class"] ? c["__class"] : c["name"])(this.constructor);
            }
        }
        lang.SecurityError = SecurityError;
        SecurityError["__class"] = "splashjs.lang.SecurityError";
        SecurityError["__interfaces"] = ["splashjs.lang.iface.ISplashError", "splashjs.lang.iface.ISecurityError", "java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        class EventDispatcher extends splashjs.lang.SplashObject {
            constructor(id) {
                if (((typeof id === 'string') || id === null)) {
                    let __args = arguments;
                    super();
                    if (this.eventStore === undefined)
                        this.eventStore = null;
                    if (this.uniqueID === undefined)
                        this.uniqueID = null;
                    if (this.id === undefined)
                        this.id = null;
                    if (this.renderer === undefined)
                        this.renderer = null;
                    if (this.stage === undefined)
                        this.stage = null;
                    if (this.eventStore === undefined)
                        this.eventStore = null;
                    if (this.uniqueID === undefined)
                        this.uniqueID = null;
                    if (this.id === undefined)
                        this.id = null;
                    if (this.renderer === undefined)
                        this.renderer = null;
                    if (this.stage === undefined)
                        this.stage = null;
                    (() => {
                        this.eventStore = new EventDispatcher.EventStore(this);
                        this.id = id;
                        this.uniqueID = id + (Date.now() * 1000000);
                    })();
                }
                else if (id === undefined) {
                    let __args = arguments;
                    {
                        let __args = arguments;
                        let id = "splashjs";
                        super();
                        if (this.eventStore === undefined)
                            this.eventStore = null;
                        if (this.uniqueID === undefined)
                            this.uniqueID = null;
                        if (this.id === undefined)
                            this.id = null;
                        if (this.renderer === undefined)
                            this.renderer = null;
                        if (this.stage === undefined)
                            this.stage = null;
                        if (this.eventStore === undefined)
                            this.eventStore = null;
                        if (this.uniqueID === undefined)
                            this.uniqueID = null;
                        if (this.id === undefined)
                            this.id = null;
                        if (this.renderer === undefined)
                            this.renderer = null;
                        if (this.stage === undefined)
                            this.stage = null;
                        (() => {
                            this.eventStore = new EventDispatcher.EventStore(this);
                            this.id = id;
                            this.uniqueID = id + (Date.now() * 1000000);
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
            }
            setRenderer(renderer) {
                this.renderer = renderer;
            }
            getRenderer() {
                return this.renderer;
            }
            getStage() {
                return this.stage;
            }
            render() {
            }
            addEventListener(eventName, eventHandler) {
                this.eventStore.add(eventName, (eventHandler));
            }
            removeEventListener(eventName, eventHandler) {
                this.eventStore.remove(eventName, (eventHandler));
            }
            removeAllEventListeners(eventName) {
                this.eventStore.removeAll(eventName);
            }
            dispatchEvent(event) {
                let eventName = event.getType();
                {
                    let array125 = this.eventStore.getEventHandlersByName(eventName);
                    for (let index124 = 0; index124 < array125.length; index124++) {
                        let eventHandler = array125[index124];
                        (target => (typeof target === 'function') ? target(event) : target.accept(event))(eventHandler);
                    }
                }
                return true;
            }
            /**
             *
             * @return {string}
             */
            getUniqueID() {
                return this.uniqueID;
            }
            /**
             *
             * @return {string}
             */
            getID() {
                return this.id;
            }
        }
        events.EventDispatcher = EventDispatcher;
        EventDispatcher["__class"] = "splashjs.events.EventDispatcher";
        EventDispatcher["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
        (function (EventDispatcher) {
            class EventStore {
                constructor(__parent) {
                    this.__parent = __parent;
                    this.eventNames = ([]);
                    this.eventHandlers = ([]);
                }
                add(eventName, eventHandler) {
                    /* add */ (this.eventNames.push(eventName) > 0);
                    /* add */ (this.eventHandlers.push(eventHandler) > 0);
                }
                remove(eventName, eventHandler) {
                    let pos = -1;
                    for (let i = 0; i < this.eventHandlers.length; i++) {
                        {
                            if (this.eventHandlers[i] === eventHandler) {
                                pos = i;
                                break;
                            }
                        }
                        ;
                    }
                    if (pos >= 0) {
                        /* remove */ this.eventNames.splice(pos, 1)[0];
                        /* remove */ this.eventHandlers.splice(pos, 1)[0];
                    }
                }
                removeAll(eventName) {
                }
                getEventHandlersByName(eventName) {
                    let eHandlers = ([]);
                    for (let i = 0; i < this.eventNames.length; i++) {
                        {
                            if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(/* get */ this.eventNames[i], eventName))
                                (eHandlers.push(/* get */ this.eventHandlers[i]) > 0);
                        }
                        ;
                    }
                    return eHandlers;
                }
            }
            EventDispatcher.EventStore = EventStore;
            EventStore["__class"] = "splashjs.events.EventDispatcher.EventStore";
        })(EventDispatcher = events.EventDispatcher || (events.EventDispatcher = {}));
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var lang;
        (function (lang) {
            class SplashObjectRenderer extends splashjs.render.Renderer {
                constructor() {
                    super();
                }
            }
            lang.SplashObjectRenderer = SplashObjectRenderer;
            SplashObjectRenderer["__class"] = "splashjs.render.lang.SplashObjectRenderer";
            SplashObjectRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(lang = render.lang || (render.lang = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var ui;
    (function (ui) {
        class MouseCursor {
            constructor(mouseCursorNameOrImagePath, mouseCursorType) {
                if (this.mouseCursorName === undefined)
                    this.mouseCursorName = null;
                if (this.mouseCursorImagePath === undefined)
                    this.mouseCursorImagePath = null;
                if (this.mouseCursorType === undefined)
                    this.mouseCursorType = null;
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(mouseCursorType, splashjs.ui.MouseCursorType.SYSTEM)) {
                    this.mouseCursorName = mouseCursorNameOrImagePath;
                    this.mouseCursorType = splashjs.ui.MouseCursorType.SYSTEM;
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(mouseCursorType, splashjs.ui.MouseCursorType.IMAGE)) {
                    this.mouseCursorImagePath = mouseCursorNameOrImagePath;
                    this.mouseCursorType = splashjs.ui.MouseCursorType.IMAGE;
                }
                else {
                    this.mouseCursorName = splashjs.ui.MouseCursorName.AUTO;
                    this.mouseCursorType = splashjs.ui.MouseCursorType.SYSTEM;
                }
            }
            static ALIAS_$LI$() { if (MouseCursor.ALIAS == null)
                MouseCursor.ALIAS = new MouseCursor(splashjs.ui.MouseCursorName.ALIAS, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.ALIAS; }
            ;
            static ALL_SCROLL_$LI$() { if (MouseCursor.ALL_SCROLL == null)
                MouseCursor.ALL_SCROLL = new MouseCursor(splashjs.ui.MouseCursorName.ALL_SCROLL, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.ALL_SCROLL; }
            ;
            static AUTO_$LI$() { if (MouseCursor.AUTO == null)
                MouseCursor.AUTO = new MouseCursor(splashjs.ui.MouseCursorName.AUTO, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.AUTO; }
            ;
            static CELL_$LI$() { if (MouseCursor.CELL == null)
                MouseCursor.CELL = new MouseCursor(splashjs.ui.MouseCursorName.CELL, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.CELL; }
            ;
            static CONTEXT_MENU_$LI$() { if (MouseCursor.CONTEXT_MENU == null)
                MouseCursor.CONTEXT_MENU = new MouseCursor(splashjs.ui.MouseCursorName.CONTEXT_MENU, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.CONTEXT_MENU; }
            ;
            static COL_RESIZE_$LI$() { if (MouseCursor.COL_RESIZE == null)
                MouseCursor.COL_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.COL_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.COL_RESIZE; }
            ;
            static COPY_$LI$() { if (MouseCursor.COPY == null)
                MouseCursor.COPY = new MouseCursor(splashjs.ui.MouseCursorName.COPY, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.COPY; }
            ;
            static CROSSHAIR_$LI$() { if (MouseCursor.CROSSHAIR == null)
                MouseCursor.CROSSHAIR = new MouseCursor(splashjs.ui.MouseCursorName.CROSSHAIR, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.CROSSHAIR; }
            ;
            static DEFAULT_$LI$() { if (MouseCursor.DEFAULT == null)
                MouseCursor.DEFAULT = new MouseCursor(splashjs.ui.MouseCursorName.DEFAULT, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.DEFAULT; }
            ;
            static E_RESIZE_$LI$() { if (MouseCursor.E_RESIZE == null)
                MouseCursor.E_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.E_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.E_RESIZE; }
            ;
            static EW_RESIZE_$LI$() { if (MouseCursor.EW_RESIZE == null)
                MouseCursor.EW_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.EW_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.EW_RESIZE; }
            ;
            static GRAB_$LI$() { if (MouseCursor.GRAB == null)
                MouseCursor.GRAB = new MouseCursor(splashjs.ui.MouseCursorName.GRAB, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.GRAB; }
            ;
            static GRABBING_$LI$() { if (MouseCursor.GRABBING == null)
                MouseCursor.GRABBING = new MouseCursor(splashjs.ui.MouseCursorName.GRABBING, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.GRABBING; }
            ;
            static HELP_$LI$() { if (MouseCursor.HELP == null)
                MouseCursor.HELP = new MouseCursor(splashjs.ui.MouseCursorName.HELP, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.HELP; }
            ;
            static MOVE_$LI$() { if (MouseCursor.MOVE == null)
                MouseCursor.MOVE = new MouseCursor(splashjs.ui.MouseCursorName.MOVE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.MOVE; }
            ;
            static N_RESIZE_$LI$() { if (MouseCursor.N_RESIZE == null)
                MouseCursor.N_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.N_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.N_RESIZE; }
            ;
            static NE_RESIZE_$LI$() { if (MouseCursor.NE_RESIZE == null)
                MouseCursor.NE_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.NE_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NE_RESIZE; }
            ;
            static NESW_RESIZE_$LI$() { if (MouseCursor.NESW_RESIZE == null)
                MouseCursor.NESW_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.NESW_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NESW_RESIZE; }
            ;
            static NS_RESIZE_$LI$() { if (MouseCursor.NS_RESIZE == null)
                MouseCursor.NS_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.NS_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NS_RESIZE; }
            ;
            static NW_RESIZE_$LI$() { if (MouseCursor.NW_RESIZE == null)
                MouseCursor.NW_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.NW_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NW_RESIZE; }
            ;
            static NWSE_RESIZE_$LI$() { if (MouseCursor.NWSE_RESIZE == null)
                MouseCursor.NWSE_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.NWSE_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NWSE_RESIZE; }
            ;
            static NO_DROP_$LI$() { if (MouseCursor.NO_DROP == null)
                MouseCursor.NO_DROP = new MouseCursor(splashjs.ui.MouseCursorName.NO_DROP, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NO_DROP; }
            ;
            static NOT_ALLOWED_$LI$() { if (MouseCursor.NOT_ALLOWED == null)
                MouseCursor.NOT_ALLOWED = new MouseCursor(splashjs.ui.MouseCursorName.NOT_ALLOWED, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NOT_ALLOWED; }
            ;
            static POINTER_$LI$() { if (MouseCursor.POINTER == null)
                MouseCursor.POINTER = new MouseCursor(splashjs.ui.MouseCursorName.POINTER, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.POINTER; }
            ;
            static PROGRESS_$LI$() { if (MouseCursor.PROGRESS == null)
                MouseCursor.PROGRESS = new MouseCursor(splashjs.ui.MouseCursorName.PROGRESS, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.PROGRESS; }
            ;
            static ROW_RESIZE_$LI$() { if (MouseCursor.ROW_RESIZE == null)
                MouseCursor.ROW_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.ROW_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.ROW_RESIZE; }
            ;
            static S_RESIZE_$LI$() { if (MouseCursor.S_RESIZE == null)
                MouseCursor.S_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.S_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.S_RESIZE; }
            ;
            static SE_RESIZE_$LI$() { if (MouseCursor.SE_RESIZE == null)
                MouseCursor.SE_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.SE_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.SE_RESIZE; }
            ;
            static SW_RESIZE_$LI$() { if (MouseCursor.SW_RESIZE == null)
                MouseCursor.SW_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.SW_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.SW_RESIZE; }
            ;
            static TEXT_$LI$() { if (MouseCursor.TEXT == null)
                MouseCursor.TEXT = new MouseCursor(splashjs.ui.MouseCursorName.TEXT, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.TEXT; }
            ;
            static W_RESIZE_$LI$() { if (MouseCursor.W_RESIZE == null)
                MouseCursor.W_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.W_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.W_RESIZE; }
            ;
            static WAIT_$LI$() { if (MouseCursor.WAIT == null)
                MouseCursor.WAIT = new MouseCursor(splashjs.ui.MouseCursorName.WAIT, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.WAIT; }
            ;
            static ZOOM_IN_$LI$() { if (MouseCursor.ZOOM_IN == null)
                MouseCursor.ZOOM_IN = new MouseCursor(splashjs.ui.MouseCursorName.ZOOM_IN, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.ZOOM_IN; }
            ;
            static ZOOM_OUT_$LI$() { if (MouseCursor.ZOOM_OUT == null)
                MouseCursor.ZOOM_OUT = new MouseCursor(splashjs.ui.MouseCursorName.ZOOM_OUT, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.ZOOM_OUT; }
            ;
            getMouseCursorType() {
                return this.mouseCursorType;
            }
            getMouseCursorName() {
                return this.mouseCursorName;
            }
            getMouseCursorImagePath() {
                return this.mouseCursorImagePath;
            }
            static setImagePath(mouseCursorImagePath) {
                let mouseCursor = new MouseCursor(mouseCursorImagePath, splashjs.ui.MouseCursorType.IMAGE);
                return mouseCursor;
            }
        }
        ui.MouseCursor = MouseCursor;
        MouseCursor["__class"] = "splashjs.ui.MouseCursor";
        MouseCursor["__interfaces"] = ["splashjs.ui.iface.IMouseCursor"];
    })(ui = splashjs.ui || (splashjs.ui = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        class Color {
            constructor(red, green, blue, alpha) {
                if (((typeof red === 'number') || red === null) && ((typeof green === 'number') || green === null) && ((typeof blue === 'number') || blue === null) && ((typeof alpha === 'number') || alpha === null)) {
                    let __args = arguments;
                    if (this.red === undefined)
                        this.red = 0;
                    if (this.green === undefined)
                        this.green = 0;
                    if (this.blue === undefined)
                        this.blue = 0;
                    if (this.hue === undefined)
                        this.hue = 0;
                    if (this.saturation === undefined)
                        this.saturation = 0;
                    if (this.lightness === undefined)
                        this.lightness = 0;
                    if (this.alpha === undefined)
                        this.alpha = 0;
                    if (this.hex === undefined)
                        this.hex = null;
                    if (this.colorName === undefined)
                        this.colorName = null;
                    if (this.colorType === undefined)
                        this.colorType = null;
                    if (this.gradient === undefined)
                        this.gradient = null;
                    if (this.red === undefined)
                        this.red = 0;
                    if (this.green === undefined)
                        this.green = 0;
                    if (this.blue === undefined)
                        this.blue = 0;
                    if (this.hue === undefined)
                        this.hue = 0;
                    if (this.saturation === undefined)
                        this.saturation = 0;
                    if (this.lightness === undefined)
                        this.lightness = 0;
                    if (this.alpha === undefined)
                        this.alpha = 0;
                    if (this.hex === undefined)
                        this.hex = null;
                    if (this.colorName === undefined)
                        this.colorName = null;
                    if (this.colorType === undefined)
                        this.colorType = null;
                    if (this.gradient === undefined)
                        this.gradient = null;
                    (() => {
                        this.green = green;
                        this.red = red;
                        this.blue = blue;
                        this.alpha = alpha;
                        this.colorType = splashjs.utils.ColorType.RGBA;
                    })();
                }
                else if (((typeof red === 'number') || red === null) && ((typeof green === 'number') || green === null) && ((typeof blue === 'number') || blue === null) && ((typeof alpha === 'number') || alpha === null)) {
                    let __args = arguments;
                    let hue = __args[0];
                    let saturation = __args[1];
                    let lightness = __args[2];
                    if (this.red === undefined)
                        this.red = 0;
                    if (this.green === undefined)
                        this.green = 0;
                    if (this.blue === undefined)
                        this.blue = 0;
                    if (this.hue === undefined)
                        this.hue = 0;
                    if (this.saturation === undefined)
                        this.saturation = 0;
                    if (this.lightness === undefined)
                        this.lightness = 0;
                    if (this.alpha === undefined)
                        this.alpha = 0;
                    if (this.hex === undefined)
                        this.hex = null;
                    if (this.colorName === undefined)
                        this.colorName = null;
                    if (this.colorType === undefined)
                        this.colorType = null;
                    if (this.gradient === undefined)
                        this.gradient = null;
                    if (this.red === undefined)
                        this.red = 0;
                    if (this.green === undefined)
                        this.green = 0;
                    if (this.blue === undefined)
                        this.blue = 0;
                    if (this.hue === undefined)
                        this.hue = 0;
                    if (this.saturation === undefined)
                        this.saturation = 0;
                    if (this.lightness === undefined)
                        this.lightness = 0;
                    if (this.alpha === undefined)
                        this.alpha = 0;
                    if (this.hex === undefined)
                        this.hex = null;
                    if (this.colorName === undefined)
                        this.colorName = null;
                    if (this.colorType === undefined)
                        this.colorType = null;
                    if (this.gradient === undefined)
                        this.gradient = null;
                    (() => {
                        this.hue = hue;
                        this.saturation = saturation;
                        this.lightness = lightness;
                        this.alpha = alpha;
                        this.colorType = splashjs.utils.ColorType.HSLA;
                    })();
                }
                else if (((typeof red === 'number') || red === null) && ((typeof green === 'number') || green === null) && ((typeof blue === 'number') || blue === null) && alpha === undefined) {
                    let __args = arguments;
                    if (this.red === undefined)
                        this.red = 0;
                    if (this.green === undefined)
                        this.green = 0;
                    if (this.blue === undefined)
                        this.blue = 0;
                    if (this.hue === undefined)
                        this.hue = 0;
                    if (this.saturation === undefined)
                        this.saturation = 0;
                    if (this.lightness === undefined)
                        this.lightness = 0;
                    if (this.alpha === undefined)
                        this.alpha = 0;
                    if (this.hex === undefined)
                        this.hex = null;
                    if (this.colorName === undefined)
                        this.colorName = null;
                    if (this.colorType === undefined)
                        this.colorType = null;
                    if (this.gradient === undefined)
                        this.gradient = null;
                    if (this.red === undefined)
                        this.red = 0;
                    if (this.green === undefined)
                        this.green = 0;
                    if (this.blue === undefined)
                        this.blue = 0;
                    if (this.hue === undefined)
                        this.hue = 0;
                    if (this.saturation === undefined)
                        this.saturation = 0;
                    if (this.lightness === undefined)
                        this.lightness = 0;
                    if (this.alpha === undefined)
                        this.alpha = 0;
                    if (this.hex === undefined)
                        this.hex = null;
                    if (this.colorName === undefined)
                        this.colorName = null;
                    if (this.colorType === undefined)
                        this.colorType = null;
                    if (this.gradient === undefined)
                        this.gradient = null;
                    (() => {
                        this.green = green;
                        this.red = red;
                        this.blue = blue;
                        this.colorType = splashjs.utils.ColorType.RGB;
                    })();
                }
                else if (((typeof red === 'number') || red === null) && ((typeof green === 'number') || green === null) && ((typeof blue === 'number') || blue === null) && alpha === undefined) {
                    let __args = arguments;
                    let hue = __args[0];
                    let saturation = __args[1];
                    let lightness = __args[2];
                    if (this.red === undefined)
                        this.red = 0;
                    if (this.green === undefined)
                        this.green = 0;
                    if (this.blue === undefined)
                        this.blue = 0;
                    if (this.hue === undefined)
                        this.hue = 0;
                    if (this.saturation === undefined)
                        this.saturation = 0;
                    if (this.lightness === undefined)
                        this.lightness = 0;
                    if (this.alpha === undefined)
                        this.alpha = 0;
                    if (this.hex === undefined)
                        this.hex = null;
                    if (this.colorName === undefined)
                        this.colorName = null;
                    if (this.colorType === undefined)
                        this.colorType = null;
                    if (this.gradient === undefined)
                        this.gradient = null;
                    if (this.red === undefined)
                        this.red = 0;
                    if (this.green === undefined)
                        this.green = 0;
                    if (this.blue === undefined)
                        this.blue = 0;
                    if (this.hue === undefined)
                        this.hue = 0;
                    if (this.saturation === undefined)
                        this.saturation = 0;
                    if (this.lightness === undefined)
                        this.lightness = 0;
                    if (this.alpha === undefined)
                        this.alpha = 0;
                    if (this.hex === undefined)
                        this.hex = null;
                    if (this.colorName === undefined)
                        this.colorName = null;
                    if (this.colorType === undefined)
                        this.colorType = null;
                    if (this.gradient === undefined)
                        this.gradient = null;
                    (() => {
                        this.hue = hue;
                        this.saturation = saturation;
                        this.lightness = lightness;
                        this.colorType = splashjs.utils.ColorType.HSL;
                    })();
                }
                else if (((red != null && (red["__interfaces"] != null && red["__interfaces"].indexOf("splashjs.utils.iface.IGradient") >= 0 || red.constructor != null && red.constructor["__interfaces"] != null && red.constructor["__interfaces"].indexOf("splashjs.utils.iface.IGradient") >= 0)) || red === null) && green === undefined && blue === undefined && alpha === undefined) {
                    let __args = arguments;
                    let gradient = __args[0];
                    if (this.red === undefined)
                        this.red = 0;
                    if (this.green === undefined)
                        this.green = 0;
                    if (this.blue === undefined)
                        this.blue = 0;
                    if (this.hue === undefined)
                        this.hue = 0;
                    if (this.saturation === undefined)
                        this.saturation = 0;
                    if (this.lightness === undefined)
                        this.lightness = 0;
                    if (this.alpha === undefined)
                        this.alpha = 0;
                    if (this.hex === undefined)
                        this.hex = null;
                    if (this.colorName === undefined)
                        this.colorName = null;
                    if (this.colorType === undefined)
                        this.colorType = null;
                    if (this.gradient === undefined)
                        this.gradient = null;
                    if (this.red === undefined)
                        this.red = 0;
                    if (this.green === undefined)
                        this.green = 0;
                    if (this.blue === undefined)
                        this.blue = 0;
                    if (this.hue === undefined)
                        this.hue = 0;
                    if (this.saturation === undefined)
                        this.saturation = 0;
                    if (this.lightness === undefined)
                        this.lightness = 0;
                    if (this.alpha === undefined)
                        this.alpha = 0;
                    if (this.hex === undefined)
                        this.hex = null;
                    if (this.colorName === undefined)
                        this.colorName = null;
                    if (this.colorType === undefined)
                        this.colorType = null;
                    if (this.gradient === undefined)
                        this.gradient = null;
                    (() => {
                        this.gradient = gradient;
                        this.colorType = splashjs.utils.ColorType.GRADIENT;
                    })();
                }
                else if (((typeof red === 'string') || red === null) && green === undefined && blue === undefined && alpha === undefined) {
                    let __args = arguments;
                    let colorName = __args[0];
                    if (this.red === undefined)
                        this.red = 0;
                    if (this.green === undefined)
                        this.green = 0;
                    if (this.blue === undefined)
                        this.blue = 0;
                    if (this.hue === undefined)
                        this.hue = 0;
                    if (this.saturation === undefined)
                        this.saturation = 0;
                    if (this.lightness === undefined)
                        this.lightness = 0;
                    if (this.alpha === undefined)
                        this.alpha = 0;
                    if (this.hex === undefined)
                        this.hex = null;
                    if (this.colorName === undefined)
                        this.colorName = null;
                    if (this.colorType === undefined)
                        this.colorType = null;
                    if (this.gradient === undefined)
                        this.gradient = null;
                    if (this.red === undefined)
                        this.red = 0;
                    if (this.green === undefined)
                        this.green = 0;
                    if (this.blue === undefined)
                        this.blue = 0;
                    if (this.hue === undefined)
                        this.hue = 0;
                    if (this.saturation === undefined)
                        this.saturation = 0;
                    if (this.lightness === undefined)
                        this.lightness = 0;
                    if (this.alpha === undefined)
                        this.alpha = 0;
                    if (this.hex === undefined)
                        this.hex = null;
                    if (this.colorName === undefined)
                        this.colorName = null;
                    if (this.colorType === undefined)
                        this.colorType = null;
                    if (this.gradient === undefined)
                        this.gradient = null;
                    (() => {
                        if ((c => c.charCodeAt == null ? c : c.charCodeAt(0))(colorName.charAt(0)) == '#'.charCodeAt(0)) {
                            this.hex = colorName;
                            this.colorType = splashjs.utils.ColorType.HEX;
                        }
                        else {
                            this.colorName = colorName;
                            this.colorType = splashjs.utils.ColorType.NAME;
                        }
                    })();
                }
                else if (red === undefined && green === undefined && blue === undefined && alpha === undefined) {
                    let __args = arguments;
                    if (this.red === undefined)
                        this.red = 0;
                    if (this.green === undefined)
                        this.green = 0;
                    if (this.blue === undefined)
                        this.blue = 0;
                    if (this.hue === undefined)
                        this.hue = 0;
                    if (this.saturation === undefined)
                        this.saturation = 0;
                    if (this.lightness === undefined)
                        this.lightness = 0;
                    if (this.alpha === undefined)
                        this.alpha = 0;
                    if (this.hex === undefined)
                        this.hex = null;
                    if (this.colorName === undefined)
                        this.colorName = null;
                    if (this.colorType === undefined)
                        this.colorType = null;
                    if (this.gradient === undefined)
                        this.gradient = null;
                    if (this.red === undefined)
                        this.red = 0;
                    if (this.green === undefined)
                        this.green = 0;
                    if (this.blue === undefined)
                        this.blue = 0;
                    if (this.hue === undefined)
                        this.hue = 0;
                    if (this.saturation === undefined)
                        this.saturation = 0;
                    if (this.lightness === undefined)
                        this.lightness = 0;
                    if (this.alpha === undefined)
                        this.alpha = 0;
                    if (this.hex === undefined)
                        this.hex = null;
                    if (this.colorName === undefined)
                        this.colorName = null;
                    if (this.colorType === undefined)
                        this.colorType = null;
                    if (this.gradient === undefined)
                        this.gradient = null;
                }
                else
                    throw new Error('invalid overload');
            }
            static NONE_$LI$() { if (Color.NONE == null)
                Color.NONE = new Color(splashjs.utils.ColorName.NONE); return Color.NONE; }
            ;
            static GREEN_$LI$() { if (Color.GREEN == null)
                Color.GREEN = new Color(splashjs.utils.ColorName.GREEN); return Color.GREEN; }
            ;
            static YELLOW_$LI$() { if (Color.YELLOW == null)
                Color.YELLOW = new Color(splashjs.utils.ColorName.YELLOW); return Color.YELLOW; }
            ;
            static RED_$LI$() { if (Color.RED == null)
                Color.RED = new Color(splashjs.utils.ColorName.RED); return Color.RED; }
            ;
            static BLACK_$LI$() { if (Color.BLACK == null)
                Color.BLACK = new Color(splashjs.utils.ColorName.BLACK); return Color.BLACK; }
            ;
            static WHITE_$LI$() { if (Color.WHITE == null)
                Color.WHITE = new Color(splashjs.utils.ColorName.WHITE); return Color.WHITE; }
            ;
            static TOMATO_$LI$() { if (Color.TOMATO == null)
                Color.TOMATO = new Color(splashjs.utils.ColorName.TOMATO); return Color.TOMATO; }
            ;
            static ORANGE_$LI$() { if (Color.ORANGE == null)
                Color.ORANGE = new Color(splashjs.utils.ColorName.ORANGE); return Color.ORANGE; }
            ;
            static DODGER_BLUE_$LI$() { if (Color.DODGER_BLUE == null)
                Color.DODGER_BLUE = new Color(splashjs.utils.ColorName.DODGER_BLUE); return Color.DODGER_BLUE; }
            ;
            static MEDIUM_SEA_GREEN_$LI$() { if (Color.MEDIUM_SEA_GREEN == null)
                Color.MEDIUM_SEA_GREEN = new Color(splashjs.utils.ColorName.MEDIUM_SEA_GREEN); return Color.MEDIUM_SEA_GREEN; }
            ;
            static GRAY_$LI$() { if (Color.GRAY == null)
                Color.GRAY = new Color(splashjs.utils.ColorName.GRAY); return Color.GRAY; }
            ;
            static SLATE_BLUE_$LI$() { if (Color.SLATE_BLUE == null)
                Color.SLATE_BLUE = new Color(splashjs.utils.ColorName.SLATE_BLUE); return Color.SLATE_BLUE; }
            ;
            static AQUA_$LI$() { if (Color.AQUA == null)
                Color.AQUA = new Color(splashjs.utils.ColorName.AQUA); return Color.AQUA; }
            ;
            static VIOLET_$LI$() { if (Color.VIOLET == null)
                Color.VIOLET = new Color(splashjs.utils.ColorName.VIOLET); return Color.VIOLET; }
            ;
            static LIGHT_GRAY_$LI$() { if (Color.LIGHT_GRAY == null)
                Color.LIGHT_GRAY = new Color(splashjs.utils.ColorName.LIGHT_GRAY); return Color.LIGHT_GRAY; }
            ;
            static createRGB(red, green, blue) {
                return new Color(red, green, blue);
            }
            static createRGBA(red, green, blue, alpha) {
                return new Color(red, green, blue, alpha);
            }
            static createHEX(hex) {
                return new Color(hex);
            }
            static createHSL(hue, saturation, lightness) {
                return new Color(hue, saturation, lightness);
            }
            static createHSLA(hue, saturation, lightness, alpha) {
                return new Color(hue, saturation, lightness, alpha);
            }
            getColorName() {
                return this.colorName;
            }
            getColorType() {
                return this.colorType;
            }
            getRed() {
                return this.red;
            }
            getGreen() {
                return this.green;
            }
            getBlue() {
                return this.blue;
            }
            getHue() {
                return this.hue;
            }
            getSaturation() {
                return this.saturation;
            }
            getLightness() {
                return this.lightness;
            }
            getAlpha() {
                return this.alpha;
            }
            getHEX() {
                return this.hex;
            }
            getGradient() {
                return this.gradient;
            }
        }
        utils.Color = Color;
        Color["__class"] = "splashjs.utils.Color";
        Color["__interfaces"] = ["splashjs.utils.iface.IColor"];
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        class LinearGradient extends splashjs.utils.Gradient {
            constructor() {
                super();
                /*private*/ this.gradientDirection = splashjs.utils.GradientDirection.TOP_TO_BOTTOM;
                /*private*/ this.gradientAngle = null;
            }
            setGradientDirection(gradientDirection) {
                this.gradientAngle = null;
                this.gradientDirection = gradientDirection;
            }
            getGradientDirection() {
                return this.gradientDirection;
            }
            setGradientAngle(gradientAngle) {
                this.gradientDirection = null;
                this.gradientAngle = gradientAngle;
            }
            getGradientAngle() {
                return this.gradientAngle;
            }
        }
        utils.LinearGradient = LinearGradient;
        LinearGradient["__class"] = "splashjs.utils.LinearGradient";
        LinearGradient["__interfaces"] = ["splashjs.utils.iface.IGradient", "splashjs.utils.iface.ILinearGradient"];
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        class RadialGradient extends splashjs.utils.Gradient {
            constructor() {
                super();
                /*private*/ this.gradientShape = splashjs.utils.GradientShape.ELLIPSE;
                if (this.gradientSize === undefined)
                    this.gradientSize = null;
            }
            setGradientShape(gradientShape) {
                this.gradientShape = gradientShape;
            }
            getGradientShape() {
                return this.gradientShape;
            }
            setGradientSize(gradientSize) {
                this.gradientSize = gradientSize;
            }
            getGradientSize() {
                return this.gradientSize;
            }
        }
        utils.RadialGradient = RadialGradient;
        RadialGradient["__class"] = "splashjs.utils.RadialGradient";
        RadialGradient["__interfaces"] = ["splashjs.utils.iface.IGradient", "splashjs.utils.iface.IRadialGradient"];
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (java) {
    var util;
    (function (util) {
        class Timer {
            constructor(name, daemon) {
                this.timeouts = (new Array());
                this.intervals = (new Array());
                if (((typeof name === 'string') || name === null) && ((typeof daemon === 'boolean') || daemon === null)) {
                    let __args = arguments;
                    if (this.name === undefined)
                        this.name = null;
                    this.timeouts = (new Array());
                    this.intervals = (new Array());
                    if (this.name === undefined)
                        this.name = null;
                    (() => {
                        this.name = name;
                    })();
                }
                else if (((typeof name === 'string') || name === null) && daemon === undefined) {
                    let __args = arguments;
                    {
                        let __args = arguments;
                        let daemon = true;
                        if (this.name === undefined)
                            this.name = null;
                        this.timeouts = (new Array());
                        this.intervals = (new Array());
                        if (this.name === undefined)
                            this.name = null;
                        (() => {
                            this.name = name;
                        })();
                    }
                }
                else if (((typeof name === 'boolean') || name === null) && daemon === undefined) {
                    let __args = arguments;
                    let daemon = __args[0];
                    {
                        let __args = arguments;
                        {
                            let __args = arguments;
                            let name = "Timer-" + ++Timer.nextSerialNumber;
                            let daemon = true;
                            if (this.name === undefined)
                                this.name = null;
                            this.timeouts = (new Array());
                            this.intervals = (new Array());
                            if (this.name === undefined)
                                this.name = null;
                            (() => {
                                this.name = name;
                            })();
                        }
                    }
                }
                else if (name === undefined && daemon === undefined) {
                    let __args = arguments;
                    {
                        let __args = arguments;
                        let name = "Timer-" + ++Timer.nextSerialNumber;
                        let daemon = true;
                        if (this.name === undefined)
                            this.name = null;
                        this.timeouts = (new Array());
                        this.intervals = (new Array());
                        if (this.name === undefined)
                            this.name = null;
                        (() => {
                            this.name = name;
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
            }
            schedule$java_util_TimerTask$long(task, delay) {
                if (delay < 0) {
                    throw Object.defineProperty(new Error("Negative delay."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                }
                else {
                    this.schedule$java_util_TimerTask$java_util_Date(task, new Date(/* currentTimeMillis */ Date.now() + delay));
                }
            }
            schedule$java_util_TimerTask$java_util_Date(task, time) {
                task.nextExecutionTime = time.getTime();
                task.handle = (window.setTimeout((() => {
                    if (task.state !== java.util.TimerTask.CANCELLED) {
                        task.run();
                        task.state = java.util.TimerTask.EXECUTED;
                    }
                    this.timeouts.splice(this.timeouts.indexOf(task), 1);
                }), time.getTime() - Date.now()) | 0);
                this.timeouts.push(task);
                task.state = java.util.TimerTask.SCHEDULED;
            }
            schedule$java_util_TimerTask$long$long(task, delay, period) {
                if (delay < 0) {
                    throw Object.defineProperty(new Error("Negative delay."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                }
                else {
                    this.schedule$java_util_TimerTask$java_util_Date$long(task, new Date(/* currentTimeMillis */ Date.now() + delay), period);
                }
            }
            schedule$java_util_TimerTask$java_util_Date$long(task, time, period) {
                if (period <= 0) {
                    throw Object.defineProperty(new Error("Non-positive period."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                }
                else {
                    task.period = period;
                    task.nextExecutionTime = time.getTime();
                    task.handle = (window.setTimeout((() => {
                        if (task.state !== java.util.TimerTask.CANCELLED) {
                            task.run();
                            this.schedule$java_util_TimerTask$long$long(task, period, period);
                        }
                        else {
                            this.timeouts.splice(this.timeouts.indexOf(task), 1);
                        }
                    }), time.getTime() - Date.now()) | 0);
                    this.timeouts.push(task);
                    task.state = java.util.TimerTask.SCHEDULED;
                }
            }
            schedule(task, time, period) {
                if (((task != null && task instanceof java.util.TimerTask) || task === null) && ((time != null && time instanceof Date) || time === null) && ((typeof period === 'number') || period === null)) {
                    return this.schedule$java_util_TimerTask$java_util_Date$long(task, time, period);
                }
                else if (((task != null && task instanceof java.util.TimerTask) || task === null) && ((typeof time === 'number') || time === null) && ((typeof period === 'number') || period === null)) {
                    return this.schedule$java_util_TimerTask$long$long(task, time, period);
                }
                else if (((task != null && task instanceof java.util.TimerTask) || task === null) && ((time != null && time instanceof Date) || time === null) && period === undefined) {
                    return this.schedule$java_util_TimerTask$java_util_Date(task, time);
                }
                else if (((task != null && task instanceof java.util.TimerTask) || task === null) && ((typeof time === 'number') || time === null) && period === undefined) {
                    return this.schedule$java_util_TimerTask$long(task, time);
                }
                else
                    throw new Error('invalid overload');
            }
            scheduleAtFixedRate$java_util_TimerTask$long$long(task, delay, period) {
                if (delay < 0) {
                    throw Object.defineProperty(new Error("Negative delay."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                }
                else {
                    this.scheduleAtFixedRate$java_util_TimerTask$java_util_Date$long(task, new Date(/* currentTimeMillis */ Date.now() + delay), period);
                }
            }
            scheduleAtFixedRate$java_util_TimerTask$java_util_Date$long(task, time, period) {
                if (period <= 0) {
                    throw Object.defineProperty(new Error("Non-positive period."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                }
                else {
                    task.period = period;
                    task.nextExecutionTime = time.getTime();
                    let start = new Timer.Timer$0(this, task);
                    this.schedule$java_util_TimerTask$java_util_Date(start, time);
                    task.handle = start.handle;
                }
            }
            scheduleAtFixedRate(task, time, period) {
                if (((task != null && task instanceof java.util.TimerTask) || task === null) && ((time != null && time instanceof Date) || time === null) && ((typeof period === 'number') || period === null)) {
                    return this.scheduleAtFixedRate$java_util_TimerTask$java_util_Date$long(task, time, period);
                }
                else if (((task != null && task instanceof java.util.TimerTask) || task === null) && ((typeof time === 'number') || time === null) && ((typeof period === 'number') || period === null)) {
                    return this.scheduleAtFixedRate$java_util_TimerTask$long$long(task, time, period);
                }
                else
                    throw new Error('invalid overload');
            }
            cancel() {
                for (let index126 = 0; index126 < this.timeouts.length; index126++) {
                    let task = this.timeouts[index126];
                    {
                        clearTimeout(task.handle);
                    }
                }
                for (let index127 = 0; index127 < this.intervals.length; index127++) {
                    let task = this.intervals[index127];
                    {
                        clearInterval(task.handle);
                    }
                }
                this.intervals = (new Array());
                this.timeouts = (new Array());
            }
            purge() {
                let newTimeouts = this.timeouts.filter((timerTask) => timerTask.handle !== java.util.TimerTask.EXECUTED && timerTask.handle !== java.util.TimerTask.CANCELLED);
                let newIntervals = this.intervals.filter((timerTask) => timerTask.handle !== java.util.TimerTask.EXECUTED && timerTask.handle !== java.util.TimerTask.CANCELLED);
                let purged = this.timeouts.length - newTimeouts.length + this.intervals.length - newIntervals.length;
                this.timeouts = newTimeouts;
                this.intervals = newIntervals;
                return purged;
            }
        }
        Timer.nextSerialNumber = 0;
        util.Timer = Timer;
        Timer["__class"] = "java.util.Timer";
        (function (Timer) {
            class Timer$0 extends java.util.TimerTask {
                constructor(__parent, task) {
                    super();
                    this.task = task;
                    this.__parent = __parent;
                }
                /**
                 *
                 */
                run() {
                    if (this.task.state !== java.util.TimerTask.CANCELLED) {
                        this.task.nextExecutionTime = Date.now() + this.task.period;
                        this.task.handle = (window.setInterval((() => {
                            if (this.task.state !== java.util.TimerTask.CANCELLED) {
                                this.task.nextExecutionTime = Date.now() + this.task.period;
                                this.task.run();
                            }
                            else {
                                clearInterval(this.task.handle);
                                this.__parent.intervals.splice(this.__parent.intervals.indexOf(this.task), 1);
                            }
                        }), this.task.period) | 0);
                        this.__parent.intervals.push(this.task);
                        this.task.run();
                    }
                }
            }
            Timer.Timer$0 = Timer$0;
            Timer$0["__interfaces"] = ["java.lang.Runnable"];
        })(Timer = util.Timer || (util.Timer = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        class EOFError extends splashjs.lang.IOError {
            constructor(message) {
                super(message);
                Object.setPrototypeOf(this, EOFError.prototype);
                this.name = (c => c["__class"] ? c["__class"] : c["name"])(this.constructor);
            }
        }
        lang.EOFError = EOFError;
        EOFError["__class"] = "splashjs.lang.EOFError";
        EOFError["__interfaces"] = ["splashjs.lang.iface.IEOFError", "splashjs.lang.iface.ISplashError", "splashjs.lang.iface.IIOError", "java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        class FileSystemError extends splashjs.lang.IOError {
            constructor(message) {
                super(message);
                Object.setPrototypeOf(this, FileSystemError.prototype);
            }
        }
        lang.FileSystemError = FileSystemError;
        FileSystemError["__class"] = "splashjs.lang.FileSystemError";
        FileSystemError["__interfaces"] = ["splashjs.lang.iface.ISplashError", "splashjs.lang.iface.IIOError", "java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        class Animation extends splashjs.events.EventDispatcher {
            constructor() {
                super();
            }
        }
        animation.Animation = Animation;
        Animation["__class"] = "splashjs.animation.Animation";
        Animation["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher"];
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        class MovieClipData extends splashjs.events.EventDispatcher {
            constructor(spriteSheet, label, frames) {
                super();
                if (this.spriteSheet === undefined)
                    this.spriteSheet = null;
                if (this.label === undefined)
                    this.label = null;
                if (this.frames === undefined)
                    this.frames = null;
                this.spriteSheet = spriteSheet;
                this.label = label;
                this.frames = frames;
            }
            getLabel() {
                return this.label;
            }
            getFrames() {
                return this.frames;
            }
            getSpriteSheet() {
                return this.spriteSheet;
            }
        }
        animation.MovieClipData = MovieClipData;
        MovieClipData["__class"] = "splashjs.animation.MovieClipData";
        MovieClipData["__interfaces"] = ["splashjs.animation.iface.IMovieClipData", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        class SpriteSheet extends splashjs.events.EventDispatcher {
            constructor(imagePath) {
                if (((typeof imagePath === 'string') || imagePath === null)) {
                    let __args = arguments;
                    super("spriteSheet");
                    if (this.imagePath === undefined)
                        this.imagePath = null;
                    if (this.imageBase64 === undefined)
                        this.imageBase64 = null;
                    if (this.resource === undefined)
                        this.resource = null;
                    this.movieClipsData = ([]);
                    this.spritesData = ([]);
                    if (this.imagePath === undefined)
                        this.imagePath = null;
                    if (this.imageBase64 === undefined)
                        this.imageBase64 = null;
                    if (this.resource === undefined)
                        this.resource = null;
                    (() => {
                        this.imagePath = imagePath;
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(SpriteSheet, this));
                    })();
                }
                else if (((imagePath != null && (imagePath["__interfaces"] != null && imagePath["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0 || imagePath.constructor != null && imagePath.constructor["__interfaces"] != null && imagePath.constructor["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0)) || imagePath === null)) {
                    let __args = arguments;
                    let resource = __args[0];
                    super("spriteSheet");
                    if (this.imagePath === undefined)
                        this.imagePath = null;
                    if (this.imageBase64 === undefined)
                        this.imageBase64 = null;
                    if (this.resource === undefined)
                        this.resource = null;
                    this.movieClipsData = ([]);
                    this.spritesData = ([]);
                    if (this.imagePath === undefined)
                        this.imagePath = null;
                    if (this.imageBase64 === undefined)
                        this.imageBase64 = null;
                    if (this.resource === undefined)
                        this.resource = null;
                    (() => {
                        this.resource = resource;
                        this.imagePath = resource.getResourcePath();
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(SpriteSheet, this));
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            getImagePath() {
                return this.imagePath;
            }
            getResource() {
                return this.resource;
            }
            setImageBase64(imageBase64) {
                this.imageBase64 = imageBase64;
            }
            getImageBase64() {
                return this.imageBase64;
            }
            getWidth() {
                return super.getRenderer().getWidth();
            }
            getHeight() {
                return super.getRenderer().getHeight();
            }
            defineSprite(label, frame) {
                /* add */ (this.spritesData.push(new splashjs.animation.SpriteData(this, label, frame)) > 0);
            }
            defineMovieClip(label, frameWidth, frameHeight, ...frameIndices) {
                let frames = (s => { let a = []; while (s-- > 0)
                    a.push(null); return a; })(frameIndices.length);
                let frame = null;
                for (let i = 0; i < frameIndices.length; i++) {
                    {
                        frame = new splashjs.animation.Frame(frameWidth, frameHeight, frameIndices[i]);
                        frames[i] = frame;
                    }
                    ;
                }
                /* add */ (this.movieClipsData.push(new splashjs.animation.MovieClipData(this, label, frames)) > 0);
            }
            /*private*/ getSprite(name) {
                return super.getRenderer().getSprite(name);
            }
            getMovieClip(name) {
                return super.getRenderer().getMovieClip(name);
            }
            getSpriteDataByLabel(label) {
                let spriteData = null;
                for (let i = 0; i < this.spritesData.length; i++) {
                    {
                        if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(/* get */ this.spritesData[i].getLabel(), label)) {
                            spriteData = this.spritesData[i];
                            break;
                        }
                    }
                    ;
                }
                return spriteData;
            }
            getMovieClipDataByLabel(label) {
                let movieClipData = null;
                for (let i = 0; i < this.movieClipsData.length; i++) {
                    {
                        if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(/* get */ this.movieClipsData[i].getLabel(), label)) {
                            movieClipData = this.movieClipsData[i];
                            break;
                        }
                    }
                    ;
                }
                return movieClipData;
            }
            getAllAnimations() {
                return this.movieClipsData;
            }
        }
        animation.SpriteSheet = SpriteSheet;
        SpriteSheet["__class"] = "splashjs.animation.SpriteSheet";
        SpriteSheet["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.animation.iface.ISpriteSheet"];
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var application;
    (function (application) {
        class Application extends splashjs.events.EventDispatcher {
            constructor() {
                super("browserApp");
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Application, this));
            }
            static getApplicationInstance() {
                if (Application.application == null)
                    Application.application = new Application();
                return Application.application;
            }
            isOnline() {
                return super.getRenderer().isOnline();
            }
        }
        Application.application = null;
        application.Application = Application;
        Application["__class"] = "splashjs.application.Application";
        Application["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.application.iface.IApplication"];
    })(application = splashjs.application || (splashjs.application = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var application;
    (function (application) {
        class StageOwner extends splashjs.events.EventDispatcher {
            constructor(stageOwnerName, stage, width, height) {
                super(stageOwnerName);
                if (this.__splashjs_application_StageOwner_renderer === undefined)
                    this.__splashjs_application_StageOwner_renderer = null;
                if (this.stage === undefined)
                    this.stage = null;
                if (this.width === undefined)
                    this.width = 0;
                if (this.height === undefined)
                    this.height = 0;
                this.stage = stage;
                this.width = width;
                this.height = height;
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(StageOwner, this));
            }
            getStage() {
                return this.stage;
            }
            setWidth(width) {
                this.width = width;
            }
            getWidth() {
                return this.width;
            }
            setHeight(height) {
                this.height = height;
            }
            getHeight() {
                return this.height;
            }
        }
        application.StageOwner = StageOwner;
        StageOwner["__class"] = "splashjs.application.StageOwner";
        StageOwner["__interfaces"] = ["splashjs.application.iface.IStageOwner", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(application = splashjs.application || (splashjs.application = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class BitmapData extends splashjs.events.EventDispatcher {
            constructor(bitmapDataWidth, bitmapDataHeight) {
                super();
                if (this.bitmapDataWidth === undefined)
                    this.bitmapDataWidth = 0;
                if (this.bitmapDataHeight === undefined)
                    this.bitmapDataHeight = 0;
                this.bitmapDataWidth = bitmapDataWidth;
                this.bitmapDataHeight = bitmapDataHeight;
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(BitmapData, this));
            }
            getBitmapDataWidth() {
                return this.bitmapDataWidth;
            }
            getBitmapDataHeight() {
                return this.bitmapDataHeight;
            }
            draw(bitmapDrawable) {
                super.getRenderer().draw(bitmapDrawable);
            }
        }
        display.BitmapData = BitmapData;
        BitmapData["__class"] = "splashjs.display.BitmapData";
        BitmapData["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.display.iface.IBitmapData"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class DisplayObject extends splashjs.events.EventDispatcher {
            constructor(id) {
                if (((typeof id === 'string') || id === null)) {
                    let __args = arguments;
                    super(id);
                    if (this.x === undefined)
                        this.x = 0;
                    if (this.y === undefined)
                        this.y = 0;
                    if (this.width === undefined)
                        this.width = 0;
                    if (this.height === undefined)
                        this.height = 0;
                    if (this.regX === undefined)
                        this.regX = null;
                    if (this.regY === undefined)
                        this.regY = null;
                    if (this.scaleX === undefined)
                        this.scaleX = 0;
                    if (this.scaleY === undefined)
                        this.scaleY = 0;
                    if (this.rotation === undefined)
                        this.rotation = 0;
                    if (this.visible === undefined)
                        this.visible = null;
                    if (this.alpha === undefined)
                        this.alpha = null;
                    if (this.name === undefined)
                        this.name = null;
                    if (this.parent === undefined)
                        this.parent = null;
                    if (this.mouseX === undefined)
                        this.mouseX = null;
                    if (this.mouseY === undefined)
                        this.mouseY = null;
                    if (this.mouseVisible === undefined)
                        this.mouseVisible = false;
                    if (this.mouseCursor === undefined)
                        this.mouseCursor = null;
                    if (this.originalWidth === undefined)
                        this.originalWidth = 0;
                    if (this.originalHeight === undefined)
                        this.originalHeight = 0;
                    if (this.filters === undefined)
                        this.filters = null;
                    if (this.x === undefined)
                        this.x = 0;
                    if (this.y === undefined)
                        this.y = 0;
                    if (this.width === undefined)
                        this.width = 0;
                    if (this.height === undefined)
                        this.height = 0;
                    if (this.regX === undefined)
                        this.regX = null;
                    if (this.regY === undefined)
                        this.regY = null;
                    if (this.scaleX === undefined)
                        this.scaleX = 0;
                    if (this.scaleY === undefined)
                        this.scaleY = 0;
                    if (this.rotation === undefined)
                        this.rotation = 0;
                    if (this.visible === undefined)
                        this.visible = null;
                    if (this.alpha === undefined)
                        this.alpha = null;
                    if (this.name === undefined)
                        this.name = null;
                    if (this.parent === undefined)
                        this.parent = null;
                    if (this.mouseX === undefined)
                        this.mouseX = null;
                    if (this.mouseY === undefined)
                        this.mouseY = null;
                    if (this.mouseVisible === undefined)
                        this.mouseVisible = false;
                    if (this.mouseCursor === undefined)
                        this.mouseCursor = null;
                    if (this.originalWidth === undefined)
                        this.originalWidth = 0;
                    if (this.originalHeight === undefined)
                        this.originalHeight = 0;
                    if (this.filters === undefined)
                        this.filters = null;
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
                        this.filters = ([]);
                    })();
                }
                else if (id === undefined) {
                    let __args = arguments;
                    {
                        let __args = arguments;
                        let id = "splashjs";
                        super(id);
                        if (this.x === undefined)
                            this.x = 0;
                        if (this.y === undefined)
                            this.y = 0;
                        if (this.width === undefined)
                            this.width = 0;
                        if (this.height === undefined)
                            this.height = 0;
                        if (this.regX === undefined)
                            this.regX = null;
                        if (this.regY === undefined)
                            this.regY = null;
                        if (this.scaleX === undefined)
                            this.scaleX = 0;
                        if (this.scaleY === undefined)
                            this.scaleY = 0;
                        if (this.rotation === undefined)
                            this.rotation = 0;
                        if (this.visible === undefined)
                            this.visible = null;
                        if (this.alpha === undefined)
                            this.alpha = null;
                        if (this.name === undefined)
                            this.name = null;
                        if (this.parent === undefined)
                            this.parent = null;
                        if (this.mouseX === undefined)
                            this.mouseX = null;
                        if (this.mouseY === undefined)
                            this.mouseY = null;
                        if (this.mouseVisible === undefined)
                            this.mouseVisible = false;
                        if (this.mouseCursor === undefined)
                            this.mouseCursor = null;
                        if (this.originalWidth === undefined)
                            this.originalWidth = 0;
                        if (this.originalHeight === undefined)
                            this.originalHeight = 0;
                        if (this.filters === undefined)
                            this.filters = null;
                        if (this.x === undefined)
                            this.x = 0;
                        if (this.y === undefined)
                            this.y = 0;
                        if (this.width === undefined)
                            this.width = 0;
                        if (this.height === undefined)
                            this.height = 0;
                        if (this.regX === undefined)
                            this.regX = null;
                        if (this.regY === undefined)
                            this.regY = null;
                        if (this.scaleX === undefined)
                            this.scaleX = 0;
                        if (this.scaleY === undefined)
                            this.scaleY = 0;
                        if (this.rotation === undefined)
                            this.rotation = 0;
                        if (this.visible === undefined)
                            this.visible = null;
                        if (this.alpha === undefined)
                            this.alpha = null;
                        if (this.name === undefined)
                            this.name = null;
                        if (this.parent === undefined)
                            this.parent = null;
                        if (this.mouseX === undefined)
                            this.mouseX = null;
                        if (this.mouseY === undefined)
                            this.mouseY = null;
                        if (this.mouseVisible === undefined)
                            this.mouseVisible = false;
                        if (this.mouseCursor === undefined)
                            this.mouseCursor = null;
                        if (this.originalWidth === undefined)
                            this.originalWidth = 0;
                        if (this.originalHeight === undefined)
                            this.originalHeight = 0;
                        if (this.filters === undefined)
                            this.filters = null;
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
                            this.filters = ([]);
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
            }
            getX() {
                return this.x;
            }
            setX(x) {
                this.x = x;
                super.getRenderer().setX();
            }
            getY() {
                return this.y;
            }
            setY(y) {
                this.y = y;
                super.getRenderer().setY();
            }
            setXY(x, y) {
                this.setX(x);
                this.setY(y);
            }
            getWidth() {
                return this.width;
            }
            setWidth(width) {
                this.width = width;
                super.getRenderer().setWidth();
            }
            getHeight() {
                return this.height;
            }
            setHeight(height) {
                this.height = height;
                super.getRenderer().setHeight();
            }
            setSize(width, height) {
                this.setWidth(width);
                this.setHeight(height);
            }
            getRegX() {
                return this.regX;
            }
            setRegX(regX) {
                this.regX = regX;
                super.getRenderer().setRegX();
            }
            getRegY() {
                return this.regY;
            }
            setRegY(regY) {
                this.regY = regY;
                super.getRenderer().setRegX();
            }
            setRegXY(regX, regY) {
                this.setRegX(regX);
                this.setRegY(regY);
            }
            getScaleX() {
                return this.scaleX;
            }
            setScaleX(scaleX) {
                this.scaleX = scaleX;
                super.getRenderer().setScaleX();
            }
            getScaleY() {
                return this.scaleY;
            }
            setScaleY(scaleY) {
                this.scaleY = scaleY;
                super.getRenderer().setScaleY();
            }
            setScaleXY(scaleX, scaleY) {
                this.setScaleX(scaleX);
                this.setScaleY(scaleY);
            }
            getRotation() {
                return this.rotation;
            }
            setRotation(rotation) {
                this.rotation = rotation;
                super.getRenderer().setRotation();
            }
            getVisible() {
                return this.visible;
            }
            setVisible(visible) {
                this.visible = visible;
                super.getRenderer().setVisible();
            }
            getAlpha() {
                return this.alpha;
            }
            setAlpha(alpha) {
                this.alpha = alpha;
                super.getRenderer().setAlpha();
            }
            getName() {
                return this.name;
            }
            setName(name) {
                this.name = name;
            }
            getParent() {
                return this.parent;
            }
            getMouseX() {
                return this.mouseX;
            }
            getMouseY() {
                return this.mouseY;
            }
            setMouseVisible(mouseVisible) {
                this.mouseVisible = mouseVisible;
                super.getRenderer().setMouseVisible();
            }
            getMouseVisible() {
                return this.mouseVisible;
            }
            setMouseCursor(mouseCursor) {
                this.mouseCursor = mouseCursor;
                super.getRenderer().setMouseCursor();
            }
            getMouseCursor() {
                return this.mouseCursor;
            }
            addFilter(filter) {
                /* add */ (this.filters.push(filter) > 0);
                super.getRenderer().addFilter();
            }
            removeFilter(filter) {
                /* remove */ (a => { let index = a.indexOf(filter); if (index >= 0) {
                    a.splice(index, 1);
                    return true;
                }
                else {
                    return false;
                } })(this.filters);
                super.getRenderer().removeFilter();
            }
            removeAllFilters() {
                /* clear */ (this.filters.length = 0);
                super.getRenderer().removeFilter();
            }
            hasFilter(filter) {
                return (this.filters.indexOf((filter)) >= 0);
            }
            getAllFilters() {
                return this.filters;
            }
            localToGlobal(localPoint) {
                let globalPoint = new splashjs.geom.Point();
                let x = this.x + localPoint.getX();
                let y = this.y + localPoint.getY();
                globalPoint.setX(x);
                globalPoint.setY(y);
                return globalPoint;
            }
            globalToLocal(globalPoint) {
                let localPoint = new splashjs.geom.Point();
                localPoint.setX(globalPoint.getX() - this.x);
                localPoint.setY(globalPoint.getY() - this.y);
                return localPoint;
            }
            hitTestObject(displayObject) {
                let hit = false;
                let dox1 = ((displayObject.getX() * displayObject.getStage().getScaleX()) | 0);
                let doy1 = ((displayObject.getY() * displayObject.getStage().getScaleY()) | 0);
                let dox2 = ((displayObject.getX() * displayObject.getStage().getScaleX() + displayObject.getWidth() * displayObject.getStage().getScaleX()) | 0);
                let doy2 = ((displayObject.getY() * displayObject.getStage().getScaleY() + displayObject.getHeight() * displayObject.getStage().getScaleY()) | 0);
                let myx1 = ((this.getX() * this.getStage().getScaleX()) | 0);
                let myy1 = ((this.getY() * this.getStage().getScaleY()) | 0);
                let myx2 = ((this.getX() * this.getStage().getScaleX() + this.getWidth() * this.getStage().getScaleX()) | 0);
                let myy2 = ((this.getY() * this.getStage().getScaleY() + this.getHeight() * this.getStage().getScaleY()) | 0);
                let displayObjectGlobalStartPoint = displayObject.localToGlobal(new splashjs.geom.Point(dox1, doy1));
                let displayObjectGlobalEndPoint = displayObject.localToGlobal(new splashjs.geom.Point(dox2, doy2));
                let myGlobalStartPoint = this.localToGlobal(new splashjs.geom.Point(myx1, myy1));
                let myGlobalEndPoint = this.localToGlobal(new splashjs.geom.Point(myx2, myy2));
                let displayObjectStartX = displayObjectGlobalStartPoint.getX();
                let displayObjectStartY = displayObjectGlobalStartPoint.getY();
                let displayObjectEndX = displayObjectGlobalEndPoint.getX();
                let displayObjectEndY = displayObjectGlobalEndPoint.getY();
                let myStartX = myGlobalStartPoint.getX();
                let myStartY = myGlobalStartPoint.getY();
                let myEndX = myGlobalEndPoint.getX();
                let myEndY = myGlobalEndPoint.getY();
                console.info("x1: " + displayObjectStartX + ", y1: " + displayObjectStartY);
                console.info("x2: " + displayObjectEndX + ", y2: " + displayObjectEndY);
                console.info("------------");
                console.info("x1: " + myStartX + ", y1: " + myStartY);
                console.info("x2: " + myEndX + ", y2: " + myEndY);
                if (myStartX >= displayObjectStartX && myStartX <= displayObjectEndX && myStartY >= displayObjectStartY && myStartY <= displayObjectEndY)
                    hit = true;
                else if (myEndX >= displayObjectStartX && myEndX <= displayObjectEndX && myEndY >= displayObjectStartY && myEndY <= displayObjectEndY)
                    hit = true;
                return hit;
            }
            hitTestPoint(x, y) {
                let out = false;
                let localPoint = this.globalToLocal(new splashjs.geom.Point(x, y));
                let x1 = this.x - this.regX;
                let y1 = this.y - this.regY;
                let x2 = x1 + this.getWidth();
                let y2 = y1 + this.getHeight();
                console.info(localPoint.getX() + " " + y1 + "-" + x2 + " " + y2 + "-" + x + " " + y);
                if ((x >= x1 && x <= x2) && (y >= y1 && y <= y2))
                    out = true;
                return out;
            }
            /**
             *
             */
            render() {
                super.render();
                super.getRenderer().setPosition("absolute");
                super.getRenderer().setDisplay("inline-blick");
                super.getRenderer().setMargin("0");
                super.getRenderer().setPadding("0");
                super.getRenderer().setID();
                super.getRenderer().setRegXY();
                super.getRenderer().setXY();
                super.getRenderer().setScaleXY();
                super.getRenderer().setRotation();
                super.getRenderer().addFilter();
                super.getRenderer().setVisible();
                super.getRenderer().setAlpha();
                super.getRenderer().setMouseCursor();
                super.getRenderer().setMouseVisible();
            }
            dispatchEvent(event) {
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.stage = event.getData();
                    this.render();
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.REMOVED_FROM_STAGE)) {
                    this.stage = null;
                }
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED)) {
                    this.parent = event.getData();
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.REMOVED)) {
                    this.parent = null;
                }
                return super.dispatchEvent(event);
            }
        }
        display.DisplayObject = DisplayObject;
        DisplayObject["__class"] = "splashjs.display.DisplayObject";
        DisplayObject["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    class Global extends splashjs.events.EventDispatcher {
        constructor() {
            super();
            /*private*/ this.rendererCreator = new splashjs.render.RendererCreator();
            super.setRenderer(this.getRendererCreator().createRenderer(Global, this));
        }
        static global_$LI$() { if (Global.global == null)
            Global.global = new Global(); return Global.global; }
        ;
        render$java_lang_Object$java_lang_Object$int$int(divID, jsClass, width, height) {
            super.getRenderer().render(divID, jsClass, width, height);
        }
        render(divID, jsClass, width, height) {
            if (((divID != null) || divID === null) && ((jsClass != null) || jsClass === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
                return this.render$java_lang_Object$java_lang_Object$int$int(divID, jsClass, width, height);
            }
            else if (divID === undefined && jsClass === undefined && width === undefined && height === undefined) {
                super.render();
            }
            else
                throw new Error('invalid overload');
        }
        getRendererCreator() {
            return this.rendererCreator;
        }
    }
    splashjs.Global = Global;
    Global["__class"] = "splashjs.Global";
    Global["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.iface.IGlobal", "splashjs.events.iface.IEventDispatcher"];
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var media;
    (function (media) {
        class Camera extends splashjs.events.EventDispatcher {
            constructor() {
                super("camera");
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Camera, this));
            }
            static getCamera() {
                return new Camera();
            }
            requestPermission() {
                super.getRenderer().requestPermission();
            }
            static getNames() {
                return null;
            }
        }
        media.Camera = Camera;
        Camera["__class"] = "splashjs.media.Camera";
        Camera["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.media.iface.ICamera"];
    })(media = splashjs.media || (splashjs.media = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var net;
    (function (net) {
        class FileReference extends splashjs.events.EventDispatcher {
            constructor(stage) {
                super("fileReference");
                /*private*/ this.size = -1;
                if (this.creationDate === undefined)
                    this.creationDate = null;
                if (this.creator === undefined)
                    this.creator = null;
                if (this.data === undefined)
                    this.data = null;
                if (this.extension === undefined)
                    this.extension = null;
                if (this.modificationDate === undefined)
                    this.modificationDate = null;
                if (this.name === undefined)
                    this.name = null;
                if (this.permissionStatus === undefined)
                    this.permissionStatus = null;
                if (this.type === undefined)
                    this.type = null;
                this.stage = stage;
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(FileReference, this));
            }
            getCreationDate() {
                return this.creationDate;
            }
            getCreator() {
                return this.creator;
            }
            setData(data) {
                this.data = data;
            }
            getData() {
                return this.data;
            }
            setExtension(extension) {
                this.extension = extension;
            }
            getExtension() {
                return this.extension;
            }
            setModificationDate(modificationDate) {
                this.modificationDate = modificationDate;
            }
            getModificationDate() {
                return this.modificationDate;
            }
            getName() {
                return this.name;
            }
            setName(name) {
                this.name = name;
            }
            getPermissionStatus() {
                return this.permissionStatus;
            }
            setSize(size) {
                this.size = size;
            }
            getSize() {
                return this.size;
            }
            setType(type) {
                this.type = type;
            }
            getType() {
                return this.type;
            }
            browse$() {
                let value = false;
                value = super.getRenderer().browse();
                return value;
            }
            browse$splashjs_net_iface_IFileFilter_A(typeFilters) {
                let value = false;
                value = super.getRenderer()['browse$splashjs_net_iface_IFileFilter_A'](typeFilters);
                return value;
            }
            browse(typeFilters) {
                if (((typeFilters != null && typeFilters instanceof Array && (typeFilters.length == 0 || typeFilters[0] == null || (typeFilters[0] != null && (typeFilters[0]["__interfaces"] != null && typeFilters[0]["__interfaces"].indexOf("splashjs.net.iface.IFileFilter") >= 0 || typeFilters[0].constructor != null && typeFilters[0].constructor["__interfaces"] != null && typeFilters[0].constructor["__interfaces"].indexOf("splashjs.net.iface.IFileFilter") >= 0)))) || typeFilters === null)) {
                    return this.browse$splashjs_net_iface_IFileFilter_A(typeFilters);
                }
                else if (typeFilters === undefined) {
                    return this.browse$();
                }
                else
                    throw new Error('invalid overload');
            }
            cancel() {
            }
            download(urlRequest, defaultFileName) {
                super.getRenderer().download(urlRequest, defaultFileName);
            }
            load() {
                super.getRenderer().load();
            }
            requestPermission() {
            }
            save(data, defaultFileName) {
            }
            upload(urlRequest, uploadDataFieldName, testUpload) {
            }
            uploadUnencoded(urlRequest) {
            }
        }
        net.FileReference = FileReference;
        FileReference["__class"] = "splashjs.net.FileReference";
        FileReference["__interfaces"] = ["splashjs.net.iface.IFileReference", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(net = splashjs.net || (splashjs.net = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var net;
    (function (net) {
        class NetConnection extends splashjs.events.EventDispatcher {
            constructor() {
                super();
            }
        }
        net.NetConnection = NetConnection;
        NetConnection["__class"] = "splashjs.net.NetConnection";
        NetConnection["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.net.iface.INetConnection", "splashjs.events.iface.IEventDispatcher"];
    })(net = splashjs.net || (splashjs.net = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var net;
    (function (net) {
        class NetStream extends splashjs.events.EventDispatcher {
            constructor(netConnection) {
                super();
                /*private*/ this.videoAttached = null;
                if (this.netConnection === undefined)
                    this.netConnection = null;
                this.netConnection = netConnection;
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(NetStream, this));
            }
            play(...params) {
                (o => o.play.apply(o, params))(super.getRenderer());
            }
            setVideoAttached(videoAttached) {
                this.videoAttached = videoAttached;
            }
            getVideoAttached() {
                return this.videoAttached;
            }
        }
        net.NetStream = NetStream;
        NetStream["__class"] = "splashjs.net.NetStream";
        NetStream["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.net.iface.INetStream"];
    })(net = splashjs.net || (splashjs.net = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var net;
    (function (net) {
        class URLLoader extends splashjs.events.EventDispatcher {
            constructor(urlRequest) {
                if (((urlRequest != null && (urlRequest["__interfaces"] != null && urlRequest["__interfaces"].indexOf("splashjs.net.iface.IURLRequest") >= 0 || urlRequest.constructor != null && urlRequest.constructor["__interfaces"] != null && urlRequest.constructor["__interfaces"].indexOf("splashjs.net.iface.IURLRequest") >= 0)) || urlRequest === null)) {
                    let __args = arguments;
                    super();
                    if (this.bytesLoaded === undefined)
                        this.bytesLoaded = 0;
                    if (this.bytesTotal === undefined)
                        this.bytesTotal = 0;
                    if (this.data === undefined)
                        this.data = null;
                    if (this.dataFormat === undefined)
                        this.dataFormat = null;
                    if (this.urlRequest === undefined)
                        this.urlRequest = null;
                    if (this.bytesLoaded === undefined)
                        this.bytesLoaded = 0;
                    if (this.bytesTotal === undefined)
                        this.bytesTotal = 0;
                    if (this.data === undefined)
                        this.data = null;
                    if (this.dataFormat === undefined)
                        this.dataFormat = null;
                    if (this.urlRequest === undefined)
                        this.urlRequest = null;
                    (() => {
                        this.urlRequest = urlRequest;
                        this.dataFormat = splashjs.net.URLLoaderDataFormat.TEXT;
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(URLLoader, this));
                    })();
                }
                else if (urlRequest === undefined) {
                    let __args = arguments;
                    super();
                    if (this.bytesLoaded === undefined)
                        this.bytesLoaded = 0;
                    if (this.bytesTotal === undefined)
                        this.bytesTotal = 0;
                    if (this.data === undefined)
                        this.data = null;
                    if (this.dataFormat === undefined)
                        this.dataFormat = null;
                    if (this.urlRequest === undefined)
                        this.urlRequest = null;
                    if (this.bytesLoaded === undefined)
                        this.bytesLoaded = 0;
                    if (this.bytesTotal === undefined)
                        this.bytesTotal = 0;
                    if (this.data === undefined)
                        this.data = null;
                    if (this.dataFormat === undefined)
                        this.dataFormat = null;
                    if (this.urlRequest === undefined)
                        this.urlRequest = null;
                    (() => {
                        this.dataFormat = splashjs.net.URLLoaderDataFormat.TEXT;
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(URLLoader, this));
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             *
             */
            close() {
                super.getRenderer().close();
            }
            load$splashjs_net_iface_IURLRequest(urlRequest) {
                this.urlRequest = urlRequest;
                this.load();
            }
            /**
             *
             * @param {*} urlRequest
             */
            load(urlRequest) {
                if (((urlRequest != null && (urlRequest["__interfaces"] != null && urlRequest["__interfaces"].indexOf("splashjs.net.iface.IURLRequest") >= 0 || urlRequest.constructor != null && urlRequest.constructor["__interfaces"] != null && urlRequest.constructor["__interfaces"].indexOf("splashjs.net.iface.IURLRequest") >= 0)) || urlRequest === null)) {
                    return this.load$splashjs_net_iface_IURLRequest(urlRequest);
                }
                else if (urlRequest === undefined) {
                    return this.load$();
                }
                else
                    throw new Error('invalid overload');
            }
            load$() {
                super.getRenderer().load();
            }
            getURLRequest() {
                return this.urlRequest;
            }
            setDataFormat(dataFormat) {
                this.dataFormat = dataFormat;
            }
            getDataFormat() {
                return this.dataFormat;
            }
            /**
             *
             * @return {number}
             */
            getBytesTotal() {
                return super.getRenderer().getBytesTotal();
            }
            /**
             *
             * @return {number}
             */
            getBytesLoaded() {
                return super.getRenderer().getBytesLoaded();
            }
            /**
             *
             * @return {*}
             */
            getData() {
                return super.getRenderer().getData();
            }
        }
        net.URLLoader = URLLoader;
        URLLoader["__class"] = "splashjs.net.URLLoader";
        URLLoader["__interfaces"] = ["splashjs.net.iface.IURLLoader", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(net = splashjs.net || (splashjs.net = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var text;
    (function (text) {
        class Font extends splashjs.events.EventDispatcher {
            constructor(fontID, fontPath) {
                super("font");
                if (this.fontID === undefined)
                    this.fontID = null;
                if (this.fontPath === undefined)
                    this.fontPath = null;
                this.fontID = fontID;
                this.fontPath = fontPath;
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Font, this));
            }
            static fonts_$LI$() { if (Font.fonts == null)
                Font.fonts = ([]); return Font.fonts; }
            ;
            getFontID() {
                return this.fontID;
            }
            getFontPath() {
                return this.fontPath;
            }
            load() {
                super.getRenderer().load();
            }
            static registerFont(font) {
                /* add */ (Font.fonts_$LI$().push(font) > 0);
            }
            static getFontPathById(fontID) {
                let fontPath = null;
                let font;
                for (let i = 0; i < Font.fonts_$LI$().length; i++) {
                    {
                        font = Font.fonts_$LI$()[i];
                        if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(font.getFontID(), fontID)) {
                            fontPath = font.getFontPath();
                            break;
                        }
                    }
                    ;
                }
                return fontPath;
            }
            static getFonts() {
                return Font.fonts_$LI$();
            }
        }
        text.Font = Font;
        Font["__class"] = "splashjs.text.Font";
        Font["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.text.iface.IFont"];
    })(text = splashjs.text || (splashjs.text = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        class ByteArray extends splashjs.events.EventDispatcher {
            constructor() {
                super("byteArray");
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(ByteArray, this));
            }
            getLength() {
                return super.getRenderer().getLength();
            }
            writeBytes(byteArray, offset, length) {
                super.getRenderer().writeBytes(byteArray, offset, length);
            }
        }
        utils.ByteArray = ByteArray;
        ByteArray["__class"] = "splashjs.utils.ByteArray";
        ByteArray["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.utils.iface.IByteArray", "splashjs.events.iface.IEventDispatcher"];
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        var desktop;
        (function (desktop) {
            class Timer extends splashjs.events.EventDispatcher {
                constructor() {
                    super();
                }
            }
            desktop.Timer = Timer;
            Timer["__class"] = "splashjs.utils.desktop.Timer";
            Timer["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
        })(desktop = utils.desktop || (utils.desktop = {}));
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        class Resource extends splashjs.events.EventDispatcher {
            constructor(resourceName, resourcePath, resourceType) {
                super();
                if (this.resourceName === undefined)
                    this.resourceName = null;
                if (this.resourcePath === undefined)
                    this.resourcePath = null;
                if (this.resourceType === undefined)
                    this.resourceType = null;
                this.resourceName = resourceName;
                this.resourcePath = resourcePath;
                this.resourceType = resourceType;
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Resource, this));
            }
            getResourcePath() {
                return this.resourcePath;
            }
            getResourceName() {
                return this.resourceName;
            }
            getResourceType() {
                return this.resourceType;
            }
            getResourceBase64() {
                return super.getRenderer().getResourceBase64();
            }
        }
        utils.Resource = Resource;
        Resource["__class"] = "splashjs.utils.Resource";
        Resource["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.utils.iface.IResource"];
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        class ResourceLoader extends splashjs.events.EventDispatcher {
            constructor() {
                super("resourceLoader");
                /*private*/ this.resources = ([]);
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(ResourceLoader, this));
            }
            addResource(resource) {
                /* add */ (this.resources.push(resource) > 0);
            }
            getResourceByName(resourceName) {
                let rsrc = null;
                for (let i = 0; i < this.resources.length; i++) {
                    {
                        if (((o1, o2) => { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(/* get */ this.resources[i].getResourceName(), resourceName)) {
                            rsrc = this.resources[i];
                            break;
                        }
                    }
                    ;
                }
                return rsrc;
            }
            loadAll() {
                super.getRenderer().loadAll(this.resources);
            }
        }
        utils.ResourceLoader = ResourceLoader;
        ResourceLoader["__class"] = "splashjs.utils.ResourceLoader";
        ResourceLoader["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.utils.iface.IResourceLoader"];
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        class Timer extends splashjs.events.EventDispatcher {
            constructor(delay, repeatCount) {
                if (((typeof delay === 'number') || delay === null) && ((typeof repeatCount === 'number') || repeatCount === null)) {
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
                }
                else if (((typeof delay === 'number') || delay === null) && repeatCount === undefined) {
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
                }
                else if (delay === undefined && repeatCount === undefined) {
                    let __args = arguments;
                    super("timer");
                    this.currentCount = 0;
                    this.delay = 0;
                    this.repeatCount = 0;
                    this.running = false;
                    this.self = this;
                    this.jTimer = new java.util.Timer();
                }
                else
                    throw new Error('invalid overload');
            }
            reset() {
                this.jTimer.cancel();
                this.currentCount = 0;
                this.running = false;
            }
            start() {
                this.jTimer.scheduleAtFixedRate$java_util_TimerTask$long$long(new Timer.Timer$0(this), this.delay, this.delay);
                this.running = true;
            }
            stop() {
                this.jTimer.cancel();
                this.running = false;
            }
            getCurrentCount() {
                return this.currentCount;
            }
            getDelay() {
                return this.delay;
            }
            setDelay(delay) {
                this.delay = delay;
            }
            getRepeatCount() {
                return this.repeatCount;
            }
            setRepeatCount(repeatCount) {
                this.repeatCount = repeatCount;
            }
            isRunning() {
                return this.running;
            }
        }
        utils.Timer = Timer;
        Timer["__class"] = "splashjs.utils.Timer";
        Timer["__interfaces"] = ["splashjs.utils.iface.ITimer", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
        (function (Timer) {
            class Timer$0 extends java.util.TimerTask {
                constructor(__parent) {
                    super();
                    this.__parent = __parent;
                }
                run() {
                    this.__parent.dispatchEvent(new splashjs.events.TimerEvent(splashjs.events.TimerEvent.TIMER, this.__parent.self, this.__parent.self));
                    this.__parent.currentCount += 1;
                    if (this.__parent.currentCount === this.__parent.repeatCount) {
                        this.__parent.jTimer.cancel();
                        this.__parent.running = false;
                        this.__parent.dispatchEvent(new splashjs.events.TimerEvent(splashjs.events.TimerEvent.TIMER_COMPLETE, this.__parent.self, this.__parent.self));
                    }
                }
            }
            Timer.Timer$0 = Timer$0;
            Timer$0["__interfaces"] = ["java.lang.Runnable"];
        })(Timer = utils.Timer || (utils.Timer = {}));
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var events;
        (function (events) {
            class EventDispatcherRenderer extends splashjs.render.lang.SplashObjectRenderer {
                constructor() {
                    super();
                    if (this.htmlElement === undefined)
                        this.htmlElement = null;
                }
                setDisplay(value) {
                    this.htmlElement = this.getDOMElement();
                    this.htmlElement.style.display = value;
                }
            }
            events.EventDispatcherRenderer = EventDispatcherRenderer;
            EventDispatcherRenderer["__class"] = "splashjs.render.events.EventDispatcherRenderer";
            EventDispatcherRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(events = render.events || (render.events = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        class NoSuchFileError extends splashjs.lang.FileSystemError {
            constructor(message) {
                if (((typeof message === 'string') || message === null)) {
                    let __args = arguments;
                    super(message);
                    Object.setPrototypeOf(this, NoSuchFileError.prototype);
                }
                else if (message === undefined) {
                    let __args = arguments;
                    super("No such file");
                    Object.setPrototypeOf(this, NoSuchFileError.prototype);
                }
                else
                    throw new Error('invalid overload');
            }
        }
        lang.NoSuchFileError = NoSuchFileError;
        NoSuchFileError["__class"] = "splashjs.lang.NoSuchFileError";
        NoSuchFileError["__interfaces"] = ["splashjs.lang.iface.ISplashError", "splashjs.lang.iface.IIOError", "java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        class Transition extends splashjs.animation.Animation {
            constructor() {
                super();
                /*private*/ this.autoReverse = false;
                /*private*/ this.loopCount = 1;
                this.delay = 0;
                this.easing = splashjs.animation.easing.Linear.EASE_NONE;
                if (this.targetObject === undefined)
                    this.targetObject = null;
                if (this.from === undefined)
                    this.from = 0;
                if (this.to === undefined)
                    this.to = 0;
                if (this.duration === undefined)
                    this.duration = 0;
            }
            setTargetObject(targetObject) {
                this.targetObject = targetObject;
                return this;
            }
            getTargetObject() {
                return this.targetObject;
            }
            setAutoReverse(autoReverse) {
                this.autoReverse = autoReverse;
                return this;
            }
            getAutoReverse() {
                return this.autoReverse;
            }
            setLoopCount(loopCount) {
                this.loopCount = loopCount;
                return this;
            }
            getLoopCount() {
                return this.loopCount;
            }
            setEasing(easing) {
                this.easing = easing;
                return this;
            }
            getEasing() {
                return this.easing;
            }
            setFrom(from) {
                this.from = from;
                return this;
            }
            getFrom() {
                return this.from;
            }
            setTo(to) {
                this.to = to;
                return this;
            }
            getTo() {
                return this.to;
            }
            setDuration(duration) {
                this.duration = duration;
                return this;
            }
            getTransitionState() {
                return super.getRenderer().getTransitionState();
            }
            getDuration() {
                return this.duration;
            }
            setDelay(delay) {
                this.delay = delay;
                return this;
            }
            getDelay() {
                return this.delay;
            }
            isRunning() {
                return super.getRenderer().isRunning();
            }
            play() {
                super.getRenderer().play();
                return this;
            }
            stop() {
                super.getRenderer().stop();
                return this;
            }
            static create(params) {
                let transition = splashjs.render.animation.TransitionRenderer.create(params);
                return transition;
            }
        }
        animation.Transition = Transition;
        Transition["__class"] = "splashjs.animation.Transition";
        Transition["__interfaces"] = ["splashjs.animation.iface.ITransition", "splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher"];
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class Bitmap extends splashjs.display.DisplayObject {
            constructor(bitmapData) {
                if (((bitmapData != null && (bitmapData["__interfaces"] != null && bitmapData["__interfaces"].indexOf("splashjs.display.iface.IBitmapData") >= 0 || bitmapData.constructor != null && bitmapData.constructor["__interfaces"] != null && bitmapData.constructor["__interfaces"].indexOf("splashjs.display.iface.IBitmapData") >= 0)) || bitmapData === null)) {
                    let __args = arguments;
                    super();
                    if (this.bitmapData === undefined)
                        this.bitmapData = null;
                    if (this.bitmapData === undefined)
                        this.bitmapData = null;
                    (() => {
                        this.bitmapData = bitmapData;
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Bitmap, this));
                    })();
                }
                else if (bitmapData === undefined) {
                    let __args = arguments;
                    super();
                    if (this.bitmapData === undefined)
                        this.bitmapData = null;
                    if (this.bitmapData === undefined)
                        this.bitmapData = null;
                    (() => {
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Bitmap, this));
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            setBitmapData(bitmapData) {
                this.bitmapData = bitmapData;
            }
            getBitmapData() {
                return this.bitmapData;
            }
        }
        display.Bitmap = Bitmap;
        Bitmap["__class"] = "splashjs.display.Bitmap";
        Bitmap["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.display.iface.IBitmap"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class InteractiveObject extends splashjs.display.DisplayObject {
            constructor(id) {
                if (((typeof id === 'string') || id === null)) {
                    let __args = arguments;
                    super(id);
                }
                else if (id === undefined) {
                    let __args = arguments;
                    super();
                }
                else
                    throw new Error('invalid overload');
            }
            dispatchClickEvent(mouseEvent) {
                this.dispatchEvent(mouseEvent);
            }
            dispatchDoubleClickEvent(mouseEvent) {
                this.dispatchEvent(mouseEvent);
            }
            dispatchMouseMoveEvent() {
            }
            dispatchMouseDownEvent() {
            }
            dispatchMouseUpEvent() {
            }
            dispatchMouseOverEvent() {
            }
            dispatchMouseEnterEvent() {
            }
            dispatchMouseLeaveEvent() {
            }
            dispatchMouseOutEvent() {
            }
        }
        display.InteractiveObject = InteractiveObject;
        InteractiveObject["__class"] = "splashjs.display.InteractiveObject";
        InteractiveObject["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var layout;
    (function (layout) {
        class Box extends splashjs.display.DisplayObject {
            constructor(theOnlyMember) {
                super("box");
                if (this.theOnlyMember === undefined)
                    this.theOnlyMember = null;
                this.theOnlyMember = theOnlyMember;
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Box, this));
            }
            getTheOnlyMember() {
                return this.theOnlyMember;
            }
            getWidth() {
                return this.theOnlyMember.getWidth();
            }
            getHeight() {
                return this.theOnlyMember.getHeight();
            }
        }
        layout.Box = Box;
        Box["__class"] = "splashjs.layout.Box";
        Box["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.lang.iface.ISplashObject", "splashjs.layout.iface.IBox", "splashjs.events.iface.IEventDispatcher"];
    })(layout = splashjs.layout || (splashjs.layout = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var layout;
    (function (layout) {
        class Layout extends splashjs.display.DisplayObject {
            constructor(id) {
                if (((typeof id === 'string') || id === null)) {
                    let __args = arguments;
                    super(id);
                }
                else if (id === undefined) {
                    let __args = arguments;
                    super();
                }
                else
                    throw new Error('invalid overload');
            }
        }
        layout.Layout = Layout;
        Layout["__class"] = "splashjs.layout.Layout";
        Layout["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.layout.iface.ILayout", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(layout = splashjs.layout || (splashjs.layout = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var media;
    (function (media) {
        class Media extends splashjs.display.DisplayObject {
            constructor(id) {
                super(id);
                if (this.mediaPath === undefined)
                    this.mediaPath = null;
            }
            getPath() {
                return this.mediaPath;
            }
            setPath(path) {
                this.mediaPath = path;
                super.getRenderer().setPath();
            }
        }
        media.Media = Media;
        Media["__class"] = "splashjs.media.Media";
        Media["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.lang.iface.ISplashObject", "splashjs.media.iface.IMedia", "splashjs.events.iface.IEventDispatcher"];
    })(media = splashjs.media || (splashjs.media = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var animation;
        (function (animation) {
            class AnimationRenderer extends splashjs.render.events.EventDispatcherRenderer {
                constructor() {
                    super();
                }
            }
            animation.AnimationRenderer = AnimationRenderer;
            AnimationRenderer["__class"] = "splashjs.render.animation.AnimationRenderer";
            AnimationRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(animation = render.animation || (render.animation = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var animation;
        (function (animation) {
            class SpriteSheetRenderer extends splashjs.render.events.EventDispatcherRenderer {
                constructor(renderObject) {
                    super();
                    /*private*/ this.spriteSheet = null;
                    /*private*/ this.imageElement = null;
                    /*private*/ this.width = 0;
                    /*private*/ this.height = 0;
                    super.setRenderObject(renderObject);
                    this.spriteSheet = super.getRenderObject();
                    this.imageElement = document.createElement("img");
                    this.imageElement.src = this.spriteSheet.getImagePath();
                    this.imageElement.addEventListener("load", (event) => {
                        this.width = (this.imageElement.naturalWidth | 0);
                        this.height = (this.imageElement.naturalHeight | 0);
                    });
                    let xmlHttpRequest = new XMLHttpRequest();
                    xmlHttpRequest.responseType = "blob";
                    xmlHttpRequest.addEventListener("load", ((xmlHttpRequest) => {
                        return (event) => {
                            let fileReader = new FileReader();
                            fileReader.addEventListener("load", (fevent) => {
                                this.spriteSheet.setImageBase64(fileReader.result);
                            });
                            fileReader.readAsDataURL(xmlHttpRequest.response);
                        };
                    })(xmlHttpRequest));
                    xmlHttpRequest.open("get", this.spriteSheet.getImagePath());
                    xmlHttpRequest.send();
                }
                getSprite(label) {
                    let spriteData = super.getRenderObject().getSpriteDataByLabel(label);
                    let imagePath = spriteData.getSpriteSheet().getImagePath();
                    let frame = spriteData.getFrame();
                    let x = frame.getX();
                    let y = frame.getY();
                    let width = frame.getWidth();
                    let height = frame.getHeight();
                    let sprite = new splashjs.display.Sprite();
                    let spanElement = sprite.getRenderer().getDOMElement();
                    spanElement.style.width = width + this.UNIT;
                    spanElement.style.height = height + this.UNIT;
                    spanElement.style.backgroundImage = "url(\"" + imagePath + "\")";
                    spanElement.style.backgroundPosition = "-" + x + this.UNIT + " -" + y + this.UNIT;
                    let parentSprite = new splashjs.display.Sprite();
                    parentSprite.addChild(sprite);
                    return parentSprite;
                }
                getMovieClip(label) {
                    let movieClip = new splashjs.display.MovieClip(this.spriteSheet.getMovieClipDataByLabel(label));
                    return movieClip;
                }
                getWidth() {
                    return this.width;
                }
                getHeight() {
                    return this.height;
                }
            }
            animation.SpriteSheetRenderer = SpriteSheetRenderer;
            SpriteSheetRenderer["__class"] = "splashjs.render.animation.SpriteSheetRenderer";
            SpriteSheetRenderer["__interfaces"] = ["splashjs.render.animation.iface.ISpriteSheetRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(animation = render.animation || (render.animation = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var application;
        (function (application) {
            class ApplicationRenderer extends splashjs.render.events.EventDispatcherRenderer {
                constructor(renderObject) {
                    super();
                    super.setRenderObject(renderObject);
                    document.body.addEventListener("online", (event) => {
                        let onlineEvent = new splashjs.events.Event(splashjs.events.Event.ONLINE);
                        this.getRenderObject().dispatchEvent(onlineEvent);
                    });
                    document.body.addEventListener("offline", (event) => {
                        let offlineEvent = new splashjs.events.Event(splashjs.events.Event.OFFLINE);
                        this.getRenderObject().dispatchEvent(offlineEvent);
                    });
                }
                isOnline() {
                    let online = false;
                    if (navigator.onLine === true)
                        online = true;
                    return online;
                }
            }
            application.ApplicationRenderer = ApplicationRenderer;
            ApplicationRenderer["__class"] = "splashjs.render.application.ApplicationRenderer";
            ApplicationRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.application.iface.IApplicationRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(application = render.application || (render.application = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var application;
        (function (application) {
            class StageOwnerRenderer extends splashjs.render.events.EventDispatcherRenderer {
                constructor(renderObject) {
                    super();
                    /*private*/ this.stageOwner = null;
                    this.stageOwner = renderObject;
                    super.setRenderObject(renderObject);
                    this.create();
                }
                create() {
                    let htmlElement = document.getElementById(super.getRenderObject().getID());
                    if (htmlElement == null) {
                        htmlElement = document.createElement("div");
                        htmlElement.id = super.getRenderObject().getID();
                        htmlElement.style.position = "absolute";
                        htmlElement.style.top = "0" + this.UNIT;
                        htmlElement.style.left = "0" + this.UNIT;
                        htmlElement.style.bottom = "0" + this.UNIT;
                        htmlElement.style.right = "0" + this.UNIT;
                        super.setRenderElement(new splashjs.render.RenderElement(htmlElement));
                        this.appendToBody();
                    }
                    else {
                        super.setRenderElement(new splashjs.render.RenderElement(htmlElement));
                        if (htmlElement.style.width === undefined)
                            htmlElement.style.width = this.stageOwner.getWidth() + this.UNIT;
                        if (htmlElement.style.height === undefined)
                            htmlElement.style.height = this.stageOwner.getHeight() + this.UNIT;
                    }
                    this.stageOwner.setWidth((htmlElement.clientWidth | 0));
                    this.stageOwner.setHeight((htmlElement.clientHeight | 0));
                    window.addEventListener("resize", (event) => {
                        let resizeEvent = new splashjs.events.Event(splashjs.events.Event.RESIZE);
                        resizeEvent.setTarget(super.getRenderObject());
                        resizeEvent.setCurrentTarget(super.getRenderObject());
                        let newWidth = (super.getDOMElement().clientWidth | 0);
                        let newHeight = (super.getDOMElement().clientHeight | 0);
                        this.stageOwner.setWidth(newWidth);
                        this.stageOwner.setHeight(newHeight);
                        this.stageOwner.dispatchEvent(resizeEvent);
                    });
                }
            }
            application.StageOwnerRenderer = StageOwnerRenderer;
            StageOwnerRenderer["__class"] = "splashjs.render.application.StageOwnerRenderer";
            StageOwnerRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.application.iface.IStageOwnerRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(application = render.application || (render.application = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            class BitmapDataRenderer extends splashjs.render.events.EventDispatcherRenderer {
                constructor(renderObject) {
                    super();
                    if (this.blob === undefined)
                        this.blob = null;
                    super.setRenderObject(renderObject);
                }
                draw(bitmapDrawable) {
                    if (bitmapDrawable != null && (bitmapDrawable["__interfaces"] != null && bitmapDrawable["__interfaces"].indexOf("splashjs.media.iface.IVideo") >= 0 || bitmapDrawable.constructor != null && bitmapDrawable.constructor["__interfaces"] != null && bitmapDrawable.constructor["__interfaces"].indexOf("splashjs.media.iface.IVideo") >= 0)) {
                        let video = bitmapDrawable;
                        let mediaStream = video.getCamera().getRenderer().getMediaStream();
                        let imageCapture = (eval("new ImageCapture(mediaStream.getVideoTracks()[0]);"));
                        let photoPromise = (eval("imageCapture.takePhoto();"));
                        photoPromise.then((blobData) => {
                            this.blob = blobData;
                        }).catch((error) => {
                            console.info(error);
                        });
                    }
                }
                getBlob() {
                    return this.blob;
                }
            }
            display.BitmapDataRenderer = BitmapDataRenderer;
            BitmapDataRenderer["__class"] = "splashjs.render.display.BitmapDataRenderer";
            BitmapDataRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IBitmapDataRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            class DisplayObjectRenderer extends splashjs.render.events.EventDispatcherRenderer {
                constructor() {
                    super();
                    if (this.__splashjs_render_display_DisplayObjectRenderer_htmlElement === undefined)
                        this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = null;
                }
                createEventListeners() {
                    super.createEventListeners();
                    this.getDOMElement().addEventListener(splashjs.render.HTMLDomEventName.MOUSEMOVE, (event) => {
                        let mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_MOVE, null, this.getRenderObject());
                        let domMouseEvent = event;
                        mouseEvent.setLocalX((domMouseEvent.clientX | 0) - this.getRenderObject().getX());
                        mouseEvent.setLocalY((domMouseEvent.clientY | 0) - this.getRenderObject().getY());
                        this.getRenderObject().dispatchEvent(mouseEvent);
                    });
                }
                create() {
                }
                getOriginalWidth() {
                    return 0;
                }
                getOriginalHeight() {
                    return 0;
                }
                setX() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
                }
                setY() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
                }
                setXY() {
                    this.setX();
                    this.setY();
                }
                setRegX() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
                }
                setRegY() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
                }
                setRegXY() {
                    this.setRegX();
                    this.setRegY();
                }
                setScaleX() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
                }
                setScaleY() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = super.getCSSLeftText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = super.getCSSTopText();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = super.getCSSTransformOriginText();
                }
                setScaleXY() {
                    this.setScaleX();
                    this.setScaleY();
                }
                setRotation() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = super.getCSSTransformText();
                }
                setAlpha() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.opacity = super.getCSSOpacityText();
                }
                addFilter() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.setProperty("filter", super.getCSSFilterText());
                }
                removeFilter() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.filter = super.getCSSFilterText();
                }
                setVisible() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.visibility = super.getCSSVisibilityText();
                }
                setMouseVisible() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.cursor = super.getCSSCursorVisibleText();
                }
                setMouseCursor() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.cursor = super.getCSSCursorText();
                }
                setID() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.id = super.getCSSIDText();
                }
                setWidth() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.width = super.getCSSWidthText();
                }
                setHeight() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.height = super.getCSSHeightText();
                }
                getWidth() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    return (this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.clientWidth | 0);
                }
                getHeight() {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    return (this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.clientHeight | 0);
                }
                setBorder(value) {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.border = value;
                }
                setPosition(value) {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.position = value;
                }
                setMargin(value) {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.margin = value;
                }
                setPadding(value) {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.padding = value;
                }
                setZIndex(value) {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.zIndex = value;
                }
                setOverflow(value) {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.overflow = value;
                }
                setResize(value) {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.setProperty("resize", value);
                }
            }
            display.DisplayObjectRenderer = DisplayObjectRenderer;
            DisplayObjectRenderer["__class"] = "splashjs.render.display.DisplayObjectRenderer";
            DisplayObjectRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        class GlobalRenderer extends splashjs.render.events.EventDispatcherRenderer {
            constructor(renderObject) {
                super();
                super.setRenderObject(renderObject);
            }
            render(divID, jsClass, width, height) {
                let stage = new splashjs.display.Stage(divID, width, height);
                let js = "";
                try {
                    js = "new " + jsClass.toString() + "();";
                    stage.addChild((eval(js)));
                }
                catch (e) {
                    console.error(e.message, e);
                }
                ;
            }
        }
        render.GlobalRenderer = GlobalRenderer;
        GlobalRenderer["__class"] = "splashjs.render.GlobalRenderer";
        GlobalRenderer["__interfaces"] = ["splashjs.render.iface.IGlobalRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var media;
        (function (media) {
            class CameraRenderer extends splashjs.render.events.EventDispatcherRenderer {
                constructor(renderObject) {
                    super();
                    if (this.mediaStream === undefined)
                        this.mediaStream = null;
                    if (this.camera === undefined)
                        this.camera = null;
                    super.setRenderObject(renderObject);
                    this.camera = renderObject;
                }
                requestPermission() {
                    let cameraPromise = (eval("navigator.mediaDevices.getUserMedia({video: true});"));
                    cameraPromise.then((mStream) => {
                        this.mediaStream = mStream;
                        let permissionEvent = new splashjs.events.PermissionEvent(splashjs.events.PermissionEvent.PERMISSION_STATUS, this.camera, this.camera);
                        permissionEvent.setStatus(splashjs.permissions.PermissionStatus.GRANTED);
                        this.camera.dispatchEvent(permissionEvent);
                    }).catch((error) => {
                        let permissionEvent = new splashjs.events.PermissionEvent(splashjs.events.PermissionEvent.PERMISSION_STATUS, this.camera, this.camera);
                        permissionEvent.setStatus(splashjs.permissions.PermissionStatus.DENIED);
                        this.camera.dispatchEvent(permissionEvent);
                    });
                }
                setMediaStream(mediaStream) {
                    this.mediaStream = mediaStream;
                }
                getMediaStream() {
                    return this.mediaStream;
                }
            }
            media.CameraRenderer = CameraRenderer;
            CameraRenderer["__class"] = "splashjs.render.media.CameraRenderer";
            CameraRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.media.iface.ICameraRenderer"];
        })(media = render.media || (render.media = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var net;
        (function (net) {
            class FileReferenceRenderer extends splashjs.render.events.EventDispatcherRenderer {
                constructor(renderObject) {
                    super();
                    this.selectedFile = null;
                    if (this.htmlInputElement === undefined)
                        this.htmlInputElement = null;
                    if (this.htmlAnchorElement === undefined)
                        this.htmlAnchorElement = null;
                    if (this.inputRenderElement === undefined)
                        this.inputRenderElement = null;
                    if (this.anchorRenderElement === undefined)
                        this.anchorRenderElement = null;
                    super.setRenderObject(renderObject);
                    this.htmlInputElement = document.createElement("input");
                    this.htmlInputElement.type = "file";
                    this.inputRenderElement = new splashjs.render.RenderElement(this.htmlInputElement);
                    this.htmlAnchorElement = document.createElement("a");
                    this.anchorRenderElement = new splashjs.render.RenderElement(this.htmlAnchorElement);
                    this.create();
                }
                createEventListeners() {
                    super.createEventListeners();
                    this.htmlInputElement.addEventListener(splashjs.render.HTMLDomEventName.CHANGE, (event) => {
                        if (this.htmlInputElement.files.length === 1) {
                            this.getRenderObject().setName(null);
                            this.getRenderObject().setExtension(null);
                            this.getRenderObject().setSize(-1);
                            this.getRenderObject().setType(null);
                            this.getRenderObject().setModificationDate(null);
                            this.selectedFile = this.htmlInputElement.files.item(0);
                            let name = this.htmlInputElement.files.item(0).name;
                            this.getRenderObject().setName(name);
                            let ext = name.substring(name.lastIndexOf(".") + 1);
                            this.getRenderObject().setExtension(ext);
                            this.getRenderObject().setSize((this.htmlInputElement.files.item(0)["size"]));
                            this.getRenderObject().setType((this.htmlInputElement.files.item(0)["type"]));
                            let modificationDate = new Date((this.htmlInputElement.files.item(0)["lastModified"]));
                            this.getRenderObject().setModificationDate(modificationDate);
                            this.getRenderObject().dispatchEvent(new splashjs.events.Event(splashjs.events.Event.SELECT, this.getRenderObject(), this.getRenderObject()));
                        }
                    });
                }
                create() {
                    super.setRenderElement(this.inputRenderElement);
                    super.getRenderObject().getStage().getRenderer().appendChild(this);
                    super.setDisplay("none");
                    super.setRenderElement(this.anchorRenderElement);
                    super.getRenderObject().getStage().getRenderer().appendChild(this);
                    super.setDisplay("none");
                }
                download(urlRequest, defaultFileName) {
                    this.htmlAnchorElement.href = urlRequest.getURL();
                    this.htmlAnchorElement.setAttribute("download", defaultFileName);
                    this.htmlAnchorElement.click();
                }
                browse$() {
                    this.htmlInputElement.click();
                    return true;
                }
                browse$splashjs_net_iface_IFileFilter_A(fileFilters) {
                    this.htmlInputElement.click();
                    return true;
                }
                browse(fileFilters) {
                    if (((fileFilters != null && fileFilters instanceof Array && (fileFilters.length == 0 || fileFilters[0] == null || (fileFilters[0] != null && (fileFilters[0]["__interfaces"] != null && fileFilters[0]["__interfaces"].indexOf("splashjs.net.iface.IFileFilter") >= 0 || fileFilters[0].constructor != null && fileFilters[0].constructor["__interfaces"] != null && fileFilters[0].constructor["__interfaces"].indexOf("splashjs.net.iface.IFileFilter") >= 0)))) || fileFilters === null)) {
                        return this.browse$splashjs_net_iface_IFileFilter_A(fileFilters);
                    }
                    else if (fileFilters === undefined) {
                        return this.browse$();
                    }
                    else
                        throw new Error('invalid overload');
                }
                load() {
                    if (this.selectedFile != null) {
                        let fileReader = new FileReader();
                        fileReader.addEventListener("loadstart", (event) => {
                            let loadStartEvent = new splashjs.events.Event(splashjs.events.Event.OPEN, this.getRenderObject(), this.getRenderObject());
                            this.getRenderObject().dispatchEvent(loadStartEvent);
                        });
                        fileReader.addEventListener("progress", (event) => {
                            let progressEvent = new splashjs.events.ProgressEvent(splashjs.events.ProgressEvent.PROGRESS);
                            progressEvent.setTarget(this.getRenderObject());
                            progressEvent.setCurrentTarget(this.getRenderObject());
                            progressEvent.setBytesLoaded(((event.loaded) | 0));
                            progressEvent.setBytesTotal(((event.total) | 0));
                            this.getRenderObject().dispatchEvent(progressEvent);
                        });
                        fileReader.addEventListener("error", ((fileReader) => {
                            return (event) => {
                                let ioErrorEvent = new splashjs.events.IOErrorEvent(splashjs.events.IOErrorEvent.IO_ERROR);
                                ioErrorEvent.setTarget(this.getRenderObject());
                                ioErrorEvent.setCurrentTarget(this.getRenderObject());
                                ioErrorEvent.setText(fileReader.error.name);
                                this.getRenderObject().dispatchEvent(ioErrorEvent);
                            };
                        })(fileReader));
                        fileReader.addEventListener("load", ((fileReader) => {
                            return (event) => {
                                let byteArray = new splashjs.utils.ByteArray();
                                byteArray.getRenderer().setDataView(new DataView(fileReader.result));
                                this.getRenderObject().setData(byteArray);
                                this.getRenderObject().dispatchEvent(new splashjs.events.Event(splashjs.events.Event.COMPLETE, this.getRenderObject(), this.getRenderObject()));
                            };
                        })(fileReader));
                        fileReader.readAsArrayBuffer(this.selectedFile);
                    }
                }
            }
            net.FileReferenceRenderer = FileReferenceRenderer;
            FileReferenceRenderer["__class"] = "splashjs.render.net.FileReferenceRenderer";
            FileReferenceRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.net.iface.IFileReferenceRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(net = render.net || (render.net = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var net;
        (function (net) {
            class NetConnectionRenderer extends splashjs.render.events.EventDispatcherRenderer {
                constructor(renderObject) {
                    super();
                }
            }
            net.NetConnectionRenderer = NetConnectionRenderer;
            NetConnectionRenderer["__class"] = "splashjs.render.net.NetConnectionRenderer";
            NetConnectionRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(net = render.net || (render.net = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var net;
        (function (net) {
            class NetStreamRenderer extends splashjs.render.events.EventDispatcherRenderer {
                constructor(renderObject) {
                    super();
                    if (this.netStream === undefined)
                        this.netStream = null;
                    super.setRenderObject(renderObject);
                    this.netStream = renderObject;
                }
                play(...params) {
                    if (params.length === 1) {
                        let fileURI = params[0];
                        let video = this.netStream.getVideoAttached();
                        video.setPath(fileURI);
                    }
                }
            }
            net.NetStreamRenderer = NetStreamRenderer;
            NetStreamRenderer["__class"] = "splashjs.render.net.NetStreamRenderer";
            NetStreamRenderer["__interfaces"] = ["splashjs.render.net.iface.INetStreamRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(net = render.net || (render.net = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var net;
        (function (net) {
            class URLLoaderRenderer extends splashjs.render.events.EventDispatcherRenderer {
                constructor(renderObject) {
                    super();
                    if (this.xmlHttpRequest === undefined)
                        this.xmlHttpRequest = null;
                    if (this.urlLoader === undefined)
                        this.urlLoader = null;
                    if (this.bytesLoaded === undefined)
                        this.bytesLoaded = 0;
                    if (this.bytesTotal === undefined)
                        this.bytesTotal = 0;
                    if (this.data === undefined)
                        this.data = null;
                    super.setRenderObject(renderObject);
                    this.xmlHttpRequest = new XMLHttpRequest();
                    this.urlLoader = renderObject;
                }
                load() {
                    let urlRequest = this.urlLoader.getURLRequest();
                    let urlRequestMethod = urlRequest.getMethod();
                    let method = "get";
                    if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(urlRequestMethod, splashjs.net.URLRequestMethod.GET))
                        method = "get";
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(urlRequestMethod, splashjs.net.URLRequestMethod.POST))
                        method = "post";
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(urlRequestMethod, splashjs.net.URLRequestMethod.DELETE))
                        method = "delete";
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(urlRequestMethod, splashjs.net.URLRequestMethod.PUT))
                        method = "put";
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(urlRequestMethod, splashjs.net.URLRequestMethod.HEAD))
                        method = "head";
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(urlRequestMethod, splashjs.net.URLRequestMethod.OPTIONS))
                        method = "options";
                    let dataFormat = this.urlLoader.getDataFormat();
                    if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(dataFormat, splashjs.net.URLLoaderDataFormat.BINARY))
                        this.xmlHttpRequest.responseType = "arraybuffer";
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(dataFormat, splashjs.net.URLLoaderDataFormat.TEXT))
                        this.xmlHttpRequest.responseType = "text";
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(dataFormat, splashjs.net.URLLoaderDataFormat.VARIABLES))
                        this.xmlHttpRequest.responseType = "";
                    let url = urlRequest.getURL();
                    this.xmlHttpRequest.open(method, url);
                    this.xmlHttpRequest.setRequestHeader("Content-Type", "text/html");
                    this.xmlHttpRequest.addEventListener(splashjs.render.HTMLDomEventName.LOAD, ((dataFormat) => {
                        return (event) => {
                            let progressEvent = event;
                            this.bytesLoaded = (progressEvent.loaded | 0);
                            this.bytesTotal = (progressEvent.total | 0);
                            if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(dataFormat, splashjs.net.URLLoaderDataFormat.BINARY)) {
                                let byteArray = new splashjs.utils.ByteArray();
                                byteArray.getRenderer().setDataView(new DataView(this.xmlHttpRequest.response));
                                this.data = byteArray;
                            }
                            else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(dataFormat, splashjs.net.URLLoaderDataFormat.TEXT)) {
                                this.data = this.xmlHttpRequest.responseText;
                            }
                            let completeEvent = new splashjs.events.Event(splashjs.events.Event.COMPLETE, this.urlLoader, this.urlLoader);
                            this.urlLoader.dispatchEvent(completeEvent);
                            console.info(event);
                        };
                    })(dataFormat));
                    this.xmlHttpRequest.send();
                }
                getData() {
                    return this.data;
                }
                getBytesTotal() {
                    return this.bytesTotal;
                }
                getBytesLoaded() {
                    return this.bytesLoaded;
                }
                close() {
                    if (this.xmlHttpRequest != null)
                        this.xmlHttpRequest.abort();
                }
            }
            net.URLLoaderRenderer = URLLoaderRenderer;
            URLLoaderRenderer["__class"] = "splashjs.render.net.URLLoaderRenderer";
            URLLoaderRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.net.iface.IURLLoaderRenderer"];
        })(net = render.net || (render.net = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var text;
        (function (text) {
            class FontRenderer extends splashjs.render.events.EventDispatcherRenderer {
                constructor(renderObject) {
                    super();
                    if (this.htmlStyleElement === undefined)
                        this.htmlStyleElement = null;
                    super.setRenderObject(renderObject);
                    this.htmlStyleElement = document.createElement("style");
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlStyleElement));
                    this.create();
                }
                create() {
                    document.head.appendChild(this.htmlStyleElement);
                }
                /**
                 *
                 */
                load() {
                    let font = super.getRenderObject();
                    let fontID = font.getFontID();
                    let fontPath = font.getFontPath();
                    let normalFontPath = fontPath.getNormalFontPath();
                    let fontFaceText = "@font-face {" + this.ENDLINE_CHAR;
                    fontFaceText += "font-family: \"" + fontID + "\";" + this.ENDLINE_CHAR;
                    fontFaceText += "src: url(\"" + normalFontPath + "\");" + this.ENDLINE_CHAR;
                    fontFaceText += "}" + this.ENDLINE_CHAR;
                    this.htmlStyleElement.appendChild(document.createTextNode(fontFaceText));
                }
            }
            text.FontRenderer = FontRenderer;
            FontRenderer["__class"] = "splashjs.render.text.FontRenderer";
            FontRenderer["__interfaces"] = ["splashjs.render.text.iface.IFontRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(text = render.text || (render.text = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var utils;
        (function (utils) {
            class ByteArrayRenderer extends splashjs.render.events.EventDispatcherRenderer {
                constructor(renderObject) {
                    super();
                    if (this.dataView === undefined)
                        this.dataView = null;
                    super.setRenderObject(renderObject);
                    this.dataView = new DataView(new ArrayBuffer(0));
                }
                setDataView(dataView) {
                    this.dataView = dataView;
                }
                getLength() {
                    return (this.dataView.byteLength | 0);
                }
                writeBytes(byteArray, offset, length) {
                }
            }
            utils.ByteArrayRenderer = ByteArrayRenderer;
            ByteArrayRenderer["__class"] = "splashjs.render.utils.ByteArrayRenderer";
            ByteArrayRenderer["__interfaces"] = ["splashjs.render.utils.iface.IByteArrayRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(utils = render.utils || (render.utils = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var utils;
        (function (utils) {
            class ResourceLoaderRenderer extends splashjs.render.events.EventDispatcherRenderer {
                constructor(renderObject) {
                    super();
                    if (this.totalNumberOfResource === undefined)
                        this.totalNumberOfResource = 0;
                    if (this.numberOfResourceLoaded === undefined)
                        this.numberOfResourceLoaded = 0;
                    super.setRenderObject(renderObject);
                }
                loadAll(resources) {
                    this.totalNumberOfResource = resources.length;
                    this.numberOfResourceLoaded = 0;
                    let resource = null;
                    for (let i = 0; i < resources.length; i++) {
                        {
                            resource = resources[i];
                            if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(resource.getResourceType(), splashjs.utils.ResourceType.IMAGE)) {
                                this.loadImage(resource);
                            }
                            else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(resource.getResourceType(), splashjs.utils.ResourceType.SOUND)) {
                                this.loadSound(resource);
                            }
                        }
                        ;
                    }
                }
                /*private*/ loadImage(imageResource) {
                    let xmlHttpRequest = new XMLHttpRequest();
                    xmlHttpRequest.responseType = "blob";
                    xmlHttpRequest.addEventListener(splashjs.render.HTMLDomEventName.LOAD, ((xmlHttpRequest) => {
                        return (xmlLoadEvent) => {
                            let fileReader = new FileReader();
                            fileReader.addEventListener(splashjs.render.HTMLDomEventName.LOAD, (fileReaderLoadEvent) => {
                                imageResource.getRenderer().setResourceBase64(fileReader.result);
                                this.numberOfResourceLoaded += 1;
                                this.checkIfResourceLoaded();
                            });
                            fileReader.readAsDataURL(xmlHttpRequest.response);
                        };
                    })(xmlHttpRequest));
                    xmlHttpRequest.open("get", imageResource.getResourcePath());
                    xmlHttpRequest.send();
                }
                /*private*/ loadSound(soundResource) {
                    let xmlHttpRequest = new XMLHttpRequest();
                    xmlHttpRequest.responseType = "blob";
                    xmlHttpRequest.addEventListener(splashjs.render.HTMLDomEventName.LOAD, ((xmlHttpRequest) => {
                        return (xmlLoadEvent) => {
                            let fileReader = new FileReader();
                            fileReader.addEventListener(splashjs.render.HTMLDomEventName.LOAD, (fileReaderLoadEvent) => {
                                soundResource.getRenderer().setResourceBase64(fileReader.result);
                                this.numberOfResourceLoaded += 1;
                                this.checkIfResourceLoaded();
                            });
                            fileReader.readAsDataURL(xmlHttpRequest.response);
                        };
                    })(xmlHttpRequest));
                    xmlHttpRequest.open("get", soundResource.getResourcePath());
                    xmlHttpRequest.send();
                }
                /*private*/ checkIfResourceLoaded() {
                    if (this.totalNumberOfResource === this.numberOfResourceLoaded) {
                        let resourceLoader = super.getRenderObject();
                        let loadedEvent = new splashjs.events.Event(splashjs.events.Event.LOAD, resourceLoader, resourceLoader);
                        resourceLoader.dispatchEvent(loadedEvent);
                    }
                }
            }
            utils.ResourceLoaderRenderer = ResourceLoaderRenderer;
            ResourceLoaderRenderer["__class"] = "splashjs.render.utils.ResourceLoaderRenderer";
            ResourceLoaderRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer", "splashjs.render.utils.iface.IResourceLoaderRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(utils = render.utils || (render.utils = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var utils;
        (function (utils) {
            class ResourceRenderer extends splashjs.render.events.EventDispatcherRenderer {
                constructor(renderObject) {
                    super();
                    if (this.resourceBase64 === undefined)
                        this.resourceBase64 = null;
                    super.setRenderObject(renderObject);
                }
                setResourceBase64(resourceBase64) {
                    this.resourceBase64 = resourceBase64;
                }
                getResourceBase64() {
                    return this.resourceBase64;
                }
            }
            utils.ResourceRenderer = ResourceRenderer;
            ResourceRenderer["__class"] = "splashjs.render.utils.ResourceRenderer";
            ResourceRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.utils.iface.IResourceRenderer"];
        })(utils = render.utils || (render.utils = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        class CircularTransition extends splashjs.animation.Transition {
            constructor() {
                super();
                /*private*/ this.radius = 50;
                /*private*/ this.centerX = 0;
                /*private*/ this.centerY = 0;
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(CircularTransition, this));
            }
            setCenterX(centerX) {
                this.centerX = centerX;
                return this;
            }
            getCenterX() {
                return this.centerX;
            }
            setCenterY(centerY) {
                this.centerY = centerY;
                return this;
            }
            getCenterY() {
                return this.centerY;
            }
            setRadius(radius) {
                this.radius = radius;
                return this;
            }
            getRadius() {
                return this.radius;
            }
            setCircle$splashjs_geom_iface_ICircle(circle) {
                this.centerX = circle.getCenterX();
                this.centerY = circle.getCenterY();
                this.radius = circle.getRadius();
                return this;
            }
            getCircle() {
                return new splashjs.geom.Circle(this.centerX, this.centerY, this.radius);
            }
            setCircle$int$int$int(centerX, centerY, radius) {
                this.centerX = centerX;
                this.centerY = centerY;
                this.radius = radius;
                return this;
            }
            setCircle(centerX, centerY, radius) {
                if (((typeof centerX === 'number') || centerX === null) && ((typeof centerY === 'number') || centerY === null) && ((typeof radius === 'number') || radius === null)) {
                    return this.setCircle$int$int$int(centerX, centerY, radius);
                }
                else if (((centerX != null && (centerX["__interfaces"] != null && centerX["__interfaces"].indexOf("splashjs.geom.iface.ICircle") >= 0 || centerX.constructor != null && centerX.constructor["__interfaces"] != null && centerX.constructor["__interfaces"].indexOf("splashjs.geom.iface.ICircle") >= 0)) || centerX === null) && centerY === undefined && radius === undefined) {
                    return this.setCircle$splashjs_geom_iface_ICircle(centerX);
                }
                else
                    throw new Error('invalid overload');
            }
            update(nextValue) {
                let targetObject = super.getTargetObject();
                targetObject.setX(100 + ((Math.cos((Math.PI / 180) * (nextValue)) * this.radius) | 0));
                targetObject.setY(100 + ((Math.sin((Math.PI / 180) * (nextValue)) * this.radius) | 0));
                return this;
            }
        }
        animation.CircularTransition = CircularTransition;
        CircularTransition["__class"] = "splashjs.animation.CircularTransition";
        CircularTransition["__interfaces"] = ["splashjs.animation.iface.ITransition", "splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher", "splashjs.animation.iface.ICircularTransition"];
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        class FadeTransition extends splashjs.animation.Transition {
            constructor() {
                super();
                if (this.currentValue === undefined)
                    this.currentValue = 0;
            }
            /**
             *
             * @param {number} nextValue
             * @return {*}
             */
            update(nextValue) {
                let targetObject = super.getTargetObject();
                targetObject.setAlpha(nextValue);
                return this;
            }
            play() {
                return this;
            }
        }
        animation.FadeTransition = FadeTransition;
        FadeTransition["__class"] = "splashjs.animation.FadeTransition";
        FadeTransition["__interfaces"] = ["splashjs.animation.iface.ITransition", "splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher"];
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        class ParallelTransition extends splashjs.animation.Transition {
            constructor() {
                super();
                /*private*/ this.transitions = ([]);
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(ParallelTransition, this));
            }
            add(transition) {
                /* add */ (this.transitions.push(transition) > 0);
                return this;
            }
            play() {
                for (let i = 0; i < this.transitions.length; i++) {
                    {
                        /* get */ this.transitions[i].play();
                    }
                    ;
                }
                return this;
            }
            stop() {
                for (let i = 0; i < this.transitions.length; i++) {
                    {
                        /* get */ this.transitions[i].stop();
                    }
                    ;
                }
                return this;
            }
            /**
             *
             * @return {number}
             */
            getDuration() {
                let maxDuration = 0;
                let duration = 0;
                for (let i = 0; i < this.transitions.length; i++) {
                    {
                        duration = this.transitions[i].getDuration();
                        if (duration > maxDuration)
                            maxDuration = duration;
                    }
                    ;
                }
                return maxDuration;
            }
            update(nextValue) {
                return this;
            }
        }
        animation.ParallelTransition = ParallelTransition;
        ParallelTransition["__class"] = "splashjs.animation.ParallelTransition";
        ParallelTransition["__interfaces"] = ["splashjs.animation.iface.ITransition", "splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IParallelTransition", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher"];
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        class RotationTransition extends splashjs.animation.Transition {
            constructor() {
                super();
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(RotationTransition, this));
            }
            /**
             *
             * @param {number} nextValue
             * @return {*}
             */
            update(nextValue) {
                let targetObject = super.getTargetObject();
                targetObject.setRotation(nextValue);
                return this;
            }
        }
        animation.RotationTransition = RotationTransition;
        RotationTransition["__class"] = "splashjs.animation.RotationTransition";
        RotationTransition["__interfaces"] = ["splashjs.animation.iface.ITransition", "splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher"];
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        class ScaleTransition extends splashjs.animation.Transition {
            constructor() {
                super();
                /*private*/ this.scaleTransitionType = splashjs.animation.ScaleTransitionType.XY;
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(ScaleTransition, this));
            }
            setScaleTransitionType(scaleTransitionType) {
                this.scaleTransitionType = scaleTransitionType;
            }
            getScaleTransitionType() {
                return this.scaleTransitionType;
            }
            /**
             *
             * @param {number} nextValue
             * @return {*}
             */
            update(nextValue) {
                let targetObject = super.getTargetObject();
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.scaleTransitionType, splashjs.animation.ScaleTransitionType.X)) {
                    targetObject.setScaleX(nextValue);
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.scaleTransitionType, splashjs.animation.ScaleTransitionType.Y)) {
                    targetObject.setScaleY(nextValue);
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.scaleTransitionType, splashjs.animation.ScaleTransitionType.XY)) {
                    targetObject.setScaleX(nextValue);
                    targetObject.setScaleY(nextValue);
                }
                return this;
            }
        }
        animation.ScaleTransition = ScaleTransition;
        ScaleTransition["__class"] = "splashjs.animation.ScaleTransition";
        ScaleTransition["__interfaces"] = ["splashjs.animation.iface.ITransition", "splashjs.animation.iface.IScaleTransition", "splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher"];
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        class SequentialTransition extends splashjs.animation.Transition {
            constructor() {
                super();
                /*private*/ this.transitions = ([]);
                /*private*/ this.currentTransitionNumber = 0;
                if (this.currentTransition === undefined)
                    this.currentTransition = null;
            }
            add(transition) {
                /* add */ (this.transitions.push(transition) > 0);
                return this;
            }
            play() {
                let transition = null;
                for (let i = 0; i < this.transitions.length; i++) {
                    {
                        transition = this.transitions[i];
                        transition.addEventListener(splashjs.events.TransitionEvent.DURATION_COMPLETE, (event) => {
                            this.currentTransitionNumber += 1;
                            if (this.currentTransitionNumber < this.transitions.length) {
                                this.currentTransition = this.transitions[this.currentTransitionNumber];
                                this.currentTransition.play();
                            }
                        });
                    }
                    ;
                }
                this.currentTransition = this.transitions[this.currentTransitionNumber];
                this.currentTransition.play();
                return this;
            }
            stop() {
                this.currentTransition.stop();
                return this;
            }
            update(value) {
                return this;
            }
        }
        animation.SequentialTransition = SequentialTransition;
        SequentialTransition["__class"] = "splashjs.animation.SequentialTransition";
        SequentialTransition["__interfaces"] = ["splashjs.animation.iface.ITransition", "splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher"];
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var animation;
    (function (animation) {
        class TranslateTransition extends splashjs.animation.Transition {
            constructor() {
                super();
                /*private*/ this.fromX = -1;
                /*private*/ this.toX = -1;
                /*private*/ this.fromY = -1;
                /*private*/ this.toY = -1;
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(splashjs.animation.ScaleTransition, this));
            }
            setFromX(fromX) {
                this.fromX = fromX;
                return this;
            }
            getFromX() {
                return this.fromX;
            }
            setFromY(fromY) {
                this.fromY = fromY;
                return this;
            }
            getFromY() {
                return this.fromY;
            }
            setToX(toX) {
                this.toX = toX;
                return this;
            }
            getToX() {
                return this.toX;
            }
            setToY(toY) {
                this.toY = toY;
                return this;
            }
            getToY() {
                return this.toY;
            }
            setFromXY(fromX, fromY) {
                this.fromX = fromX;
                this.fromY = fromY;
                return this;
            }
            setToXY(toX, toY) {
                this.toX = toX;
                this.toY = toY;
                return this;
            }
            /**
             *
             * @param {number} nextValue
             * @return {*}
             */
            update(nextValue) {
                let targetObject = super.getTargetObject();
                return this;
            }
        }
        animation.TranslateTransition = TranslateTransition;
        TranslateTransition["__class"] = "splashjs.animation.TranslateTransition";
        TranslateTransition["__interfaces"] = ["splashjs.animation.iface.ITransition", "splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher"];
    })(animation = splashjs.animation || (splashjs.animation = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        class Control extends splashjs.display.InteractiveObject {
            constructor(id) {
                super(id);
                if (this.enabled === undefined)
                    this.enabled = false;
            }
            setEnabled(enabled) {
                this.enabled = enabled;
            }
            getEnabled() {
                return this.enabled;
            }
            isEnabled() {
                return this.getEnabled();
            }
        }
        controls.Control = Control;
        Control["__class"] = "splashjs.controls.Control";
        Control["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class DisplayObjectContainer extends splashjs.display.InteractiveObject {
            constructor(id) {
                if (((typeof id === 'string') || id === null)) {
                    let __args = arguments;
                    super(id);
                    if (this.parent === undefined)
                        this.parent = null;
                    this.children = ([]);
                    if (this.parent === undefined)
                        this.parent = null;
                }
                else if (id === undefined) {
                    let __args = arguments;
                    super();
                    if (this.parent === undefined)
                        this.parent = null;
                    this.children = ([]);
                    if (this.parent === undefined)
                        this.parent = null;
                }
                else
                    throw new Error('invalid overload');
            }
            addChild(child) {
                if (this === child)
                    throw Object.defineProperty(new Error("A DisplayObject cannot be added to itself."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                else if (child != null && (child["__interfaces"] != null && child["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0 || child.constructor != null && child.constructor["__interfaces"] != null && child.constructor["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0))
                    throw Object.defineProperty(new Error("Stage cannot be added to DisplayObject."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                if (child.getParent() != null) {
                    child.getParent().getRenderer().removeChild(child.getRenderer());
                }
                /* add */ (this.children.push(child) > 0);
                child.getRenderer().setZIndex((this.children.length - 1) + "");
                super.getRenderer().appendChild(child.getRenderer());
                let addedEvent = new splashjs.events.Event(splashjs.events.Event.ADDED, child, child);
                addedEvent.setData(this);
                child.dispatchEvent(addedEvent);
                if (this.getStage() != null) {
                    let addedToStageEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, child, child);
                    addedToStageEvent.setData(this.getStage());
                    child.dispatchEvent(addedToStageEvent);
                }
            }
            addChildAt(child, index) {
                if (this === child)
                    throw Object.defineProperty(new Error("A DisplayObject cannot be added to itself."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                else if (child != null && (child["__interfaces"] != null && child["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0 || child.constructor != null && child.constructor["__interfaces"] != null && child.constructor["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0))
                    throw Object.defineProperty(new Error("Stage cannot be added to DisplayObject."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                else if (index < 0 || index > this.children.length)
                    throw Object.defineProperty(new Error("Child index is not within the limit."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                if (child.getParent() != null) {
                    child.getParent().getRenderer().removeChild(child.getRenderer());
                }
                /* add */ this.children.splice(index, 0, child);
                super.getRenderer().appendChild(child.getRenderer());
                for (let i = 0; i < this.children.length; i++) {
                    {
                        let myChild = this.children[i];
                        myChild.getRenderer().setZIndex(i + "");
                    }
                    ;
                }
                let addedEvent = new splashjs.events.Event(splashjs.events.Event.ADDED, child, child);
                addedEvent.setData(this);
                child.dispatchEvent(addedEvent);
                if (this.getStage() != null) {
                    let addedToStageEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, child, child);
                    addedToStageEvent.setData(this.getStage());
                    child.dispatchEvent(addedToStageEvent);
                }
            }
            removeChild(child) {
                if (this.contains(child) === false)
                    throw Object.defineProperty(new Error("Child does not exists."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                /* remove */ (a => { let index = a.indexOf(child); if (index >= 0) {
                    a.splice(index, 1);
                    return true;
                }
                else {
                    return false;
                } })(this.children);
                super.getRenderer().removeChild(child.getRenderer());
                for (let i = 0; i < this.children.length; i++) {
                    {
                        let myChild = this.children[i];
                        myChild.getRenderer().setZIndex(i + "");
                    }
                    ;
                }
                let removedEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED, child, child);
                child.dispatchEvent(removedEvent);
                if (this.getStage() != null) {
                    let removedFromStageEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, child, child);
                    child.dispatchEvent(removedFromStageEvent);
                }
            }
            removeChildAt(index) {
                if (index < 0)
                    throw Object.defineProperty(new Error("Child index is not within the limit."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                let child = this.getChildAt(index);
                /* remove */ this.children.splice(index, 1)[0];
                super.getRenderer().removeChild(child.getRenderer());
                for (let i = 0; i < this.children.length; i++) {
                    {
                        let myChild = this.children[i];
                        myChild.getRenderer().setZIndex(i + "");
                    }
                    ;
                }
                let removedEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED, child, child);
                child.dispatchEvent(removedEvent);
                if (this.getStage() != null) {
                    let removedFromStageEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, child, child);
                    child.dispatchEvent(removedFromStageEvent);
                }
            }
            getChildByName(name) {
                let outChild = null;
                for (let index128 = 0; index128 < this.children.length; index128++) {
                    let child = this.children[index128];
                    {
                        if (((o1, o2) => { if (o1 && o1.equals) {
                            return o1.equals(o2);
                        }
                        else {
                            return o1 === o2;
                        } })(child.getName(), name)) {
                            outChild = child;
                            break;
                        }
                    }
                }
                return outChild;
            }
            getChildAt(index) {
                let outChild = null;
                outChild = this.children[index];
                return outChild;
            }
            getChildIndex(child) {
                let index = -1;
                index = this.children.indexOf(child);
                return index;
            }
            setChildIndex(child, index) {
                if (this === child)
                    throw Object.defineProperty(new Error("A DisplayObject cannot be added to itself."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                else if (child != null && (child["__interfaces"] != null && child["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0 || child.constructor != null && child.constructor["__interfaces"] != null && child.constructor["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0))
                    throw Object.defineProperty(new Error("Stage cannot be added to DisplayObject."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                else if (index < 0)
                    throw Object.defineProperty(new Error("Child index is not within the limit."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                else if (this.contains(child) === false)
                    throw Object.defineProperty(new Error("Child does not exists."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                let currentIndex = this.getChildIndex(child);
                if (currentIndex < index) {
                    /* remove */ (a => { let index = a.indexOf(child); if (index >= 0) {
                        a.splice(index, 1);
                        return true;
                    }
                    else {
                        return false;
                    } })(this.children);
                    /* add */ this.children.splice(index, 0, child);
                }
                else if (currentIndex > index) {
                    /* remove */ (a => { let index = a.indexOf(child); if (index >= 0) {
                        a.splice(index, 1);
                        return true;
                    }
                    else {
                        return false;
                    } })(this.children);
                    /* add */ this.children.splice(index - 1, 0, child);
                }
                for (let i = 0; i < this.children.length; i++) {
                    {
                        let myChild = this.children[i];
                        myChild.getRenderer().setZIndex(i + "");
                    }
                    ;
                }
            }
            swapChildren(child1, child2) {
                if (this === child1 || this === child2)
                    throw Object.defineProperty(new Error("A DisplayObject cannot be swapped to its parent."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                else if (this.contains(child1) === false || this.contains(child2) === false)
                    throw Object.defineProperty(new Error("Child does not exists."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                let child1Index = this.getChildIndex(child1);
                let child2Index = this.getChildIndex(child2);
                let tempChild = child1;
                /* set */ (this.children[child1Index] = child2);
                /* set */ (this.children[child2Index] = tempChild);
                for (let i = 0; i < this.children.length; i++) {
                    {
                        let myChild = this.children[i];
                        myChild.getRenderer().setZIndex(i + "");
                    }
                    ;
                }
            }
            swapChildrenAt(index1, index2) {
                if (index1 >= this.children.length || index2 >= this.children.length || index1 < 0 || index2 < 0)
                    throw Object.defineProperty(new Error("Child index is not within the limit."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                else if (index1 === index2)
                    return;
                let child1 = this.getChildAt(index1);
                let child2 = this.getChildAt(index2);
                let tempChild = child1;
                /* set */ (this.children[index1] = child2);
                /* set */ (this.children[index2] = tempChild);
                for (let i = 0; i < this.children.length; i++) {
                    {
                        let myChild = this.children[i];
                        myChild.getRenderer().setZIndex(i + "");
                    }
                    ;
                }
            }
            contains(displayObject) {
                let out = false;
                out = (this.children.indexOf((displayObject)) >= 0);
                return out;
            }
            getNumChildren() {
                return this.children.length;
            }
            dispatchEvent(event) {
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.stage = event.getData();
                    for (let i = 0; i < this.children.length; i++) {
                        {
                            let child = this.children[i];
                            let addedToStageEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, child, child);
                            addedToStageEvent.setData(event.getData());
                            child.dispatchEvent(addedToStageEvent);
                        }
                        ;
                    }
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.REMOVED_FROM_STAGE)) {
                    this.stage = null;
                    for (let index129 = 0; index129 < this.children.length; index129++) {
                        let child = this.children[index129];
                        {
                            let removedFromStageEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, child, child);
                            child.dispatchEvent(removedFromStageEvent);
                        }
                    }
                }
                return super.dispatchEvent(event);
            }
            getAllChildren() {
                return this.children;
            }
            render() {
                super.render();
                for (let index130 = 0; index130 < this.children.length; index130++) {
                    let child = this.children[index130];
                    {
                        child.render();
                    }
                }
            }
        }
        display.DisplayObjectContainer = DisplayObjectContainer;
        DisplayObjectContainer["__class"] = "splashjs.display.DisplayObjectContainer";
        DisplayObjectContainer["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class Image extends splashjs.display.InteractiveObject {
            constructor(imagePath) {
                if (((typeof imagePath === 'string') || imagePath === null)) {
                    let __args = arguments;
                    super("image");
                    if (this.resource === undefined)
                        this.resource = null;
                    if (this.originalWidth === undefined)
                        this.originalWidth = null;
                    if (this.originalHeight === undefined)
                        this.originalHeight = null;
                    this.imagePath = "";
                    this.imageType = "";
                    if (this.resource === undefined)
                        this.resource = null;
                    if (this.originalWidth === undefined)
                        this.originalWidth = null;
                    if (this.originalHeight === undefined)
                        this.originalHeight = null;
                    (() => {
                        this.imagePath = imagePath;
                        let type = this.imagePath.substring(this.imagePath.lastIndexOf(".") + 1);
                        if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(type, "jpg") || ((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(type, "jpeg"))
                            this.imageType = "jpeg";
                        else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(type, "png"))
                            this.imageType = "png";
                        else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(type, "gif"))
                            this.imageType = "gif";
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Image, this));
                    })();
                }
                else if (((imagePath != null && (imagePath["__interfaces"] != null && imagePath["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0 || imagePath.constructor != null && imagePath.constructor["__interfaces"] != null && imagePath.constructor["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0)) || imagePath === null)) {
                    let __args = arguments;
                    let resource = __args[0];
                    super("image");
                    if (this.resource === undefined)
                        this.resource = null;
                    if (this.originalWidth === undefined)
                        this.originalWidth = null;
                    if (this.originalHeight === undefined)
                        this.originalHeight = null;
                    this.imagePath = "";
                    this.imageType = "";
                    if (this.resource === undefined)
                        this.resource = null;
                    if (this.originalWidth === undefined)
                        this.originalWidth = null;
                    if (this.originalHeight === undefined)
                        this.originalHeight = null;
                    (() => {
                        this.resource = resource;
                        this.imagePath = resource.getResourcePath();
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Image, this));
                    })();
                }
                else if (imagePath === undefined) {
                    let __args = arguments;
                    {
                        let __args = arguments;
                        let imagePath = "";
                        super("image");
                        if (this.resource === undefined)
                            this.resource = null;
                        if (this.originalWidth === undefined)
                            this.originalWidth = null;
                        if (this.originalHeight === undefined)
                            this.originalHeight = null;
                        this.imagePath = "";
                        this.imageType = "";
                        if (this.resource === undefined)
                            this.resource = null;
                        if (this.originalWidth === undefined)
                            this.originalWidth = null;
                        if (this.originalHeight === undefined)
                            this.originalHeight = null;
                        (() => {
                            this.imagePath = imagePath;
                            let type = this.imagePath.substring(this.imagePath.lastIndexOf(".") + 1);
                            if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(type, "jpg") || ((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(type, "jpeg"))
                                this.imageType = "jpeg";
                            else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(type, "png"))
                                this.imageType = "png";
                            else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(type, "gif"))
                                this.imageType = "gif";
                            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Image, this));
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             *
             * @return {string}
             */
            getImagePath() {
                return this.imagePath;
            }
            /**
             *
             * @return {string}
             */
            getImageType() {
                return this.imageType;
            }
            /**
             *
             * @param {*} event
             * @return {boolean}
             */
            dispatchEvent(event) {
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.REMOVED_FROM_STAGE)) {
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED)) {
                    this.parent = event.getTarget();
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.REMOVED)) {
                    this.parent = null;
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.LOADED)) {
                    this.originalWidth = super.getRenderer().getOriginalWidth();
                    this.originalHeight = super.getRenderer().getOriginalHeight();
                    if (this.width === 0 && this.originalWidth !== 0) {
                        this.width = this.originalWidth;
                        super.getRenderer().setWidth();
                    }
                    if (this.height === 0 && this.originalHeight !== 0) {
                        this.height = this.originalHeight;
                        super.getRenderer().setHeight();
                    }
                }
                let retValue = super.dispatchEvent(event);
                return retValue;
            }
            /**
             *
             * @return {number}
             */
            getWidth() {
                return super.getWidth();
            }
            /**
             *
             * @return {number}
             */
            getHeight() {
                return super.getHeight();
            }
            /**
             *
             * @param {number} width
             */
            setWidth(width) {
                this.width = width;
                super.setScaleX(width / this.originalWidth);
            }
            /**
             *
             * @param {number} height
             */
            setHeight(height) {
                this.height = height;
                super.setScaleY(height / this.originalHeight);
            }
        }
        display.Image = Image;
        Image["__class"] = "splashjs.display.Image";
        Image["__interfaces"] = ["splashjs.display.iface.IImage", "splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class Shape extends splashjs.display.InteractiveObject {
            constructor(id) {
                super(id);
                /*private*/ this.strokeColor = splashjs.utils.Color.BLACK_$LI$();
                /*private*/ this.fillColor = splashjs.utils.Color.BLACK_$LI$();
                /*private*/ this.strokeWidth = 1;
            }
            static createCircle$() {
                let circle = new splashjs.display.Circle();
                return circle;
            }
            static createCircle$int(radius) {
                let circle = new splashjs.display.Circle(radius);
                return circle;
            }
            static createCircle(radius) {
                if (((typeof radius === 'number') || radius === null)) {
                    return splashjs.display.Shape.createCircle$int(radius);
                }
                else if (radius === undefined) {
                    return splashjs.display.Shape.createCircle$();
                }
                else
                    throw new Error('invalid overload');
            }
            static createRectangle$() {
                let rectangle = new splashjs.display.Rectangle();
                return rectangle;
            }
            static createRectangle$int$int(rectangleWidth, rectangleHeight) {
                let rectangle = new splashjs.display.Rectangle(rectangleWidth, rectangleHeight);
                return rectangle;
            }
            static createRectangle$int$int$int$int(rectangleWidth, rectangleHeight, cornerRadiusX, cornerRadiusY) {
                let rectangle = new splashjs.display.Rectangle(rectangleWidth, rectangleHeight, cornerRadiusX, cornerRadiusY);
                return rectangle;
            }
            static createRectangle(rectangleWidth, rectangleHeight, cornerRadiusX, cornerRadiusY) {
                if (((typeof rectangleWidth === 'number') || rectangleWidth === null) && ((typeof rectangleHeight === 'number') || rectangleHeight === null) && ((typeof cornerRadiusX === 'number') || cornerRadiusX === null) && ((typeof cornerRadiusY === 'number') || cornerRadiusY === null)) {
                    return splashjs.display.Shape.createRectangle$int$int$int$int(rectangleWidth, rectangleHeight, cornerRadiusX, cornerRadiusY);
                }
                else if (((typeof rectangleWidth === 'number') || rectangleWidth === null) && ((typeof rectangleHeight === 'number') || rectangleHeight === null) && cornerRadiusX === undefined && cornerRadiusY === undefined) {
                    return splashjs.display.Shape.createRectangle$int$int(rectangleWidth, rectangleHeight);
                }
                else if (rectangleWidth === undefined && rectangleHeight === undefined && cornerRadiusX === undefined && cornerRadiusY === undefined) {
                    return splashjs.display.Shape.createRectangle$();
                }
                else
                    throw new Error('invalid overload');
            }
            static createLine$() {
                let line = new splashjs.display.Line();
                return line;
            }
            static createLine$int(length) {
                let line = new splashjs.display.Line(length);
                return line;
            }
            static createLine(length) {
                if (((typeof length === 'number') || length === null)) {
                    return splashjs.display.Shape.createLine$int(length);
                }
                else if (length === undefined) {
                    return splashjs.display.Shape.createLine$();
                }
                else
                    throw new Error('invalid overload');
            }
            static createEllipse$() {
                let ellipse = new splashjs.display.Ellipse();
                return ellipse;
            }
            static createEllipse$int$int(radiusX, radiusY) {
                let ellipse = new splashjs.display.Ellipse(radiusX, radiusY);
                return ellipse;
            }
            static createEllipse(radiusX, radiusY) {
                if (((typeof radiusX === 'number') || radiusX === null) && ((typeof radiusY === 'number') || radiusY === null)) {
                    return splashjs.display.Shape.createEllipse$int$int(radiusX, radiusY);
                }
                else if (radiusX === undefined && radiusY === undefined) {
                    return splashjs.display.Shape.createEllipse$();
                }
                else
                    throw new Error('invalid overload');
            }
            setStrokeWidth(strokeWidth) {
                this.strokeWidth = strokeWidth;
                super.getRenderer().update();
            }
            getStrokeWidth() {
                return this.strokeWidth;
            }
            setStrokeColor(strokeColor) {
                this.strokeColor = strokeColor;
                super.getRenderer().update();
            }
            getStrokeColor() {
                return this.strokeColor;
            }
            setFillColor(fillColor) {
                this.fillColor = fillColor;
                super.getRenderer().update();
            }
            getFillColor() {
                return this.fillColor;
            }
            /**
             *
             * @return {number}
             */
            getWidth() {
                return super.getRenderer().getOriginalWidth();
            }
            /**
             *
             * @return {number}
             */
            getHeight() {
                return super.getRenderer().getOriginalHeight();
            }
            /**
             *
             * @param {number} width
             */
            setWidth(width) {
            }
            /**
             *
             * @param {number} height
             */
            setHeight(height) {
            }
        }
        Shape.CIRCLE = "circle";
        Shape.RECTANGLE = "rectangle";
        Shape.LINE = "line";
        Shape.ELLIPSE = "ellipse";
        display.Shape = Shape;
        Shape["__class"] = "splashjs.display.Shape";
        Shape["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class SimpleButton extends splashjs.display.InteractiveObject {
            constructor() {
                super("button");
                /*private*/ this.upState = null;
                /*private*/ this.downState = null;
                /*private*/ this.overState = null;
                /*private*/ this.disabledState = null;
                /*private*/ this.enabled = true;
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(SimpleButton, this));
            }
            /**
             *
             * @param {*} event
             * @return {boolean}
             */
            dispatchEvent(event) {
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED)) {
                    this.parent = event.getTarget();
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.REMOVED)) {
                    this.parent = null;
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.MouseEvent.MOUSE_OVER)) {
                    if (this.enabled === true && this.overState != null) {
                        if (this.upState != null)
                            this.upState.setVisible(false);
                        if (this.downState != null)
                            this.downState.setVisible(false);
                        this.overState.setVisible(true);
                    }
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.MouseEvent.MOUSE_DOWN)) {
                    if (this.enabled === true && this.downState != null) {
                        if (this.upState != null)
                            this.upState.setVisible(false);
                        if (this.overState != null)
                            this.overState.setVisible(false);
                        this.downState.setVisible(true);
                    }
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.MouseEvent.MOUSE_UP)) {
                    if (this.enabled === true && this.overState != null) {
                        if (this.upState != null)
                            this.upState.setVisible(false);
                        if (this.downState != null)
                            this.downState.setVisible(false);
                        this.overState.setVisible(true);
                    }
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.MouseEvent.MOUSE_OUT)) {
                    if (this.enabled === true && this.upState != null) {
                        if (this.overState != null)
                            this.overState.setVisible(false);
                        if (this.downState != null)
                            this.downState.setVisible(false);
                        this.upState.setVisible(true);
                    }
                }
                return super.dispatchEvent(event);
            }
            setUpState(upState) {
                this.upState = upState;
                if (super.getRenderer() != null) {
                    super.getRenderer().setUpState();
                }
            }
            getUpState() {
                return this.upState;
            }
            setDownState(downState) {
                this.downState = downState;
                if (super.getRenderer() != null) {
                    super.getRenderer().setDownState();
                }
            }
            getDownState() {
                return this.downState;
            }
            setOverState(overState) {
                this.overState = overState;
                if (super.getRenderer() != null) {
                    super.getRenderer().setOverState();
                }
            }
            getOverState() {
                return this.overState;
            }
            setDisabledState(disabledState) {
                this.disabledState = disabledState;
                if (super.getRenderer() != null) {
                    super.getRenderer().setDisabledState();
                }
            }
            getDisabledState() {
                return this.disabledState;
            }
            setEnabled(enabled) {
                this.enabled = enabled;
                if (super.getRenderer() != null) {
                    super.getRenderer().setEnabled();
                }
            }
            getEnabled() {
                return this.enabled;
            }
            isEnabled() {
                return this.enabled;
            }
            render() {
                super.render();
            }
        }
        display.SimpleButton = SimpleButton;
        SimpleButton["__class"] = "splashjs.display.SimpleButton";
        SimpleButton["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.display.iface.ISimpleButton", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var text;
    (function (text_1) {
        class Text extends splashjs.display.InteractiveObject {
            constructor(id) {
                super(id);
                /*private*/ this.text = null;
                /*private*/ this.fontSize = 12;
                /*private*/ this.fontStyle = splashjs.text.FontStyle.NORMAL;
                /*private*/ this.fontWeight = splashjs.text.FontWeight.NORMAL;
                /*private*/ this.color = splashjs.utils.Color.BLACK_$LI$();
                /*private*/ this.selectable = true;
                /*private*/ this.textFormat = null;
                if (this.font === undefined)
                    this.font = null;
            }
            setText(text) {
                this.text = text;
                if (text != null)
                    super.getRenderer().setText();
            }
            getText() {
                return this.text;
            }
            setFontSize(fontSize) {
                this.fontSize = fontSize;
                super.getRenderer().setFontSize();
            }
            getFontSize() {
                return this.fontSize;
            }
            setFontStyle(fontStyle) {
                this.fontStyle = fontStyle;
                super.getRenderer().setFontStyle();
            }
            getFontStyle() {
                return this.fontStyle;
            }
            setFontWeight(fontWeight) {
                this.fontWeight = fontWeight;
                super.getRenderer().setFontWeight();
            }
            getFontWeight() {
                return this.fontWeight;
            }
            setColor(color) {
                this.color = color;
                super.getRenderer().setColor();
            }
            getColor() {
                return this.color;
            }
            setFont(font) {
                this.font = font;
                super.getRenderer().setFont();
            }
            getFont() {
                return this.font;
            }
            setTextFormat(textFormat) {
                this.textFormat = textFormat;
                super.getRenderer().setTextFormat();
            }
            getTextFormat() {
                return this.textFormat;
            }
            setSelectable(selectable) {
                this.selectable = selectable;
                super.getRenderer().setSelectable();
            }
            isSelectable() {
                return this.selectable;
            }
            render() {
                super.render();
                super.getRenderer().setText();
                super.getRenderer().setSelectable();
                super.getRenderer().setColor();
                super.getRenderer().setFont();
                super.getRenderer().setFontSize();
                super.getRenderer().setFontStyle();
                super.getRenderer().setFontWeight();
            }
        }
        text_1.Text = Text;
        Text["__class"] = "splashjs.text.Text";
        Text["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.text.iface.IText"];
    })(text = splashjs.text || (splashjs.text = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var layout;
    (function (layout) {
        class GridLayout extends splashjs.layout.Layout {
            constructor(row, col) {
                super("gridLayout");
                if (this.row === undefined)
                    this.row = 0;
                if (this.col === undefined)
                    this.col = 0;
                if (this.children === undefined)
                    this.children = null;
                this.row = row;
                this.col = col;
                this.children = ([]);
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(GridLayout, this));
            }
            render() {
                super.render();
            }
            getRow() {
                return this.row;
            }
            getCol() {
                return this.col;
            }
            add(displayObject, rowNum, colNum) {
                /* add */ (this.children.push(displayObject) > 0);
                displayObject.render();
            }
        }
        layout.GridLayout = GridLayout;
        GridLayout["__class"] = "splashjs.layout.GridLayout";
        GridLayout["__interfaces"] = ["splashjs.layout.iface.IGridLayout", "splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.layout.iface.ILayout", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(layout = splashjs.layout || (splashjs.layout = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var layout;
    (function (layout) {
        class HorizontalLayout extends splashjs.layout.Layout {
            constructor() {
                super("horizontalLayout");
                this.boxes = ([]);
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(HorizontalLayout, this));
            }
            add(displayObject) {
                let box = new splashjs.layout.Box(displayObject);
                super.getRenderer().add(box);
            }
            getAll() {
                return this.boxes;
            }
            getWidth() {
                let width = 0;
                for (let i = 0; i < this.boxes.length; i++) {
                    {
                        width += this.boxes[i].getWidth();
                    }
                    ;
                }
                return width;
            }
            getHeight() {
                let height = 0;
                for (let i = 0; i < this.boxes.length; i++) {
                    {
                        if (this.boxes[i].getHeight() > height)
                            height = this.boxes[i].getHeight();
                    }
                    ;
                }
                return height;
            }
        }
        layout.HorizontalLayout = HorizontalLayout;
        HorizontalLayout["__class"] = "splashjs.layout.HorizontalLayout";
        HorizontalLayout["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.layout.iface.ILayout", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(layout = splashjs.layout || (splashjs.layout = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var layout;
    (function (layout) {
        class VerticalLayout extends splashjs.layout.Layout {
            constructor() {
                super("verticalLayout");
                this.boxes = ([]);
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(VerticalLayout, this));
            }
            add(displayObject) {
                let box = new splashjs.layout.Box(displayObject);
                super.getRenderer().add(box);
            }
            getAll() {
                return this.boxes;
            }
            getWidth() {
                let width = 0;
                for (let i = 0; i < this.boxes.length; i++) {
                    {
                        if (this.boxes[i].getWidth() > width)
                            width = this.boxes[i].getWidth();
                    }
                    ;
                }
                return width;
            }
            getHeight() {
                let height = 0;
                for (let i = 0; i < this.boxes.length; i++) {
                    {
                        height += this.boxes[i].getHeight();
                    }
                    ;
                }
                return height;
            }
        }
        layout.VerticalLayout = VerticalLayout;
        VerticalLayout["__class"] = "splashjs.layout.VerticalLayout";
        VerticalLayout["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.layout.iface.ILayout", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.layout.iface.IVerticalLayout"];
    })(layout = splashjs.layout || (splashjs.layout = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var media;
    (function (media) {
        class Sound extends splashjs.media.Media {
            constructor(resource) {
                if (((resource != null && (resource["__interfaces"] != null && resource["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0 || resource.constructor != null && resource.constructor["__interfaces"] != null && resource.constructor["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0)) || resource === null)) {
                    let __args = arguments;
                    super("sound");
                    if (this.resource === undefined)
                        this.resource = null;
                    if (this.soundPath === undefined)
                        this.soundPath = null;
                    if (this.resource === undefined)
                        this.resource = null;
                    if (this.soundPath === undefined)
                        this.soundPath = null;
                    (() => {
                        this.soundPath = resource.getResourcePath();
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Sound, this));
                    })();
                }
                else if (((resource != null && (resource["__interfaces"] != null && resource["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0 || resource.constructor != null && resource.constructor["__interfaces"] != null && resource.constructor["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0)) || resource === null)) {
                    let __args = arguments;
                    let stage = __args[0];
                    super("sound");
                    if (this.resource === undefined)
                        this.resource = null;
                    if (this.soundPath === undefined)
                        this.soundPath = null;
                    if (this.resource === undefined)
                        this.resource = null;
                    if (this.soundPath === undefined)
                        this.soundPath = null;
                }
                else if (((typeof resource === 'string') || resource === null)) {
                    let __args = arguments;
                    let soundPath = __args[0];
                    super("sound");
                    if (this.resource === undefined)
                        this.resource = null;
                    if (this.soundPath === undefined)
                        this.soundPath = null;
                    if (this.resource === undefined)
                        this.resource = null;
                    if (this.soundPath === undefined)
                        this.soundPath = null;
                    (() => {
                        this.soundPath = soundPath;
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            dispatchEvent(event) {
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                }
                return super.dispatchEvent(event);
            }
            /**
             *
             */
            render() {
                super.render();
            }
            play() {
                if (super.getRenderer() != null)
                    super.getRenderer().playSound();
            }
            pause() {
                if (super.getRenderer() != null)
                    super.getRenderer().pauseSound();
            }
            toString() {
                return "[object Sound]";
            }
        }
        media.Sound = Sound;
        Sound["__class"] = "splashjs.media.Sound";
        Sound["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.lang.iface.ISplashObject", "splashjs.media.iface.IMedia", "splashjs.media.iface.ISound", "splashjs.events.iface.IEventDispatcher"];
    })(media = splashjs.media || (splashjs.media = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var media;
    (function (media) {
        class Video extends splashjs.media.Media {
            constructor(width, height) {
                if (((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
                    let __args = arguments;
                    super("video");
                    if (this.resource === undefined)
                        this.resource = null;
                    if (this.videoPath === undefined)
                        this.videoPath = null;
                    if (this.camera === undefined)
                        this.camera = null;
                    if (this.netStream === undefined)
                        this.netStream = null;
                    if (this.resource === undefined)
                        this.resource = null;
                    if (this.videoPath === undefined)
                        this.videoPath = null;
                    if (this.camera === undefined)
                        this.camera = null;
                    if (this.netStream === undefined)
                        this.netStream = null;
                    (() => {
                        this.width = width;
                        this.height = height;
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Video, this));
                    })();
                }
                else if (((width != null && (width["__interfaces"] != null && width["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0 || width.constructor != null && width.constructor["__interfaces"] != null && width.constructor["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0)) || width === null) && height === undefined) {
                    let __args = arguments;
                    let resource = __args[0];
                    super("video");
                    if (this.resource === undefined)
                        this.resource = null;
                    if (this.videoPath === undefined)
                        this.videoPath = null;
                    if (this.camera === undefined)
                        this.camera = null;
                    if (this.netStream === undefined)
                        this.netStream = null;
                    if (this.resource === undefined)
                        this.resource = null;
                    if (this.videoPath === undefined)
                        this.videoPath = null;
                    if (this.camera === undefined)
                        this.camera = null;
                    if (this.netStream === undefined)
                        this.netStream = null;
                    (() => {
                        this.videoPath = resource.getResourcePath();
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Video, this));
                    })();
                }
                else if (((typeof width === 'string') || width === null) && height === undefined) {
                    let __args = arguments;
                    let videoPath = __args[0];
                    super("video");
                    if (this.resource === undefined)
                        this.resource = null;
                    if (this.videoPath === undefined)
                        this.videoPath = null;
                    if (this.camera === undefined)
                        this.camera = null;
                    if (this.netStream === undefined)
                        this.netStream = null;
                    if (this.resource === undefined)
                        this.resource = null;
                    if (this.videoPath === undefined)
                        this.videoPath = null;
                    if (this.camera === undefined)
                        this.camera = null;
                    if (this.netStream === undefined)
                        this.netStream = null;
                    (() => {
                        this.videoPath = videoPath;
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            attachCamera(camera) {
                this.camera = camera;
                super.getRenderer().attachCamera(camera);
            }
            attachNetStream(netStream) {
                this.netStream = netStream;
                this.netStream.setVideoAttached(this);
                super.getRenderer().attachNetStream(netStream);
            }
            getCamera() {
                return this.camera;
            }
            dispatchEvent(event) {
                let val = super.dispatchEvent(event);
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                }
                return val;
            }
            /**
             *
             */
            render() {
                super.render();
            }
            play() {
                super.getRenderer().playVideo();
            }
            toString() {
                return "[object Video]";
            }
        }
        media.Video = Video;
        Video["__class"] = "splashjs.media.Video";
        Video["__interfaces"] = ["splashjs.media.iface.IVideo", "splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.lang.iface.ISplashObject", "splashjs.media.iface.IMedia", "splashjs.events.iface.IEventDispatcher"];
    })(media = splashjs.media || (splashjs.media = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var animation;
        (function (animation) {
            class TransitionRenderer extends splashjs.render.animation.AnimationRenderer {
                constructor(renderObject) {
                    super();
                    this.currentState = splashjs.animation.TransitionState.NONE;
                    this.fps = 60;
                    this.deltaTime = (1000 / this.fps | 0);
                    /*private*/ this.currentLoopCount = 0;
                    /*private*/ this.running = false;
                    /*private*/ this.transitionEvent = null;
                    this.ctr = 0;
                    if (this.animTimer === undefined)
                        this.animTimer = null;
                    if (this.delayTimer === undefined)
                        this.delayTimer = null;
                    if (this.repeatCount === undefined)
                        this.repeatCount = 0;
                    if (this.transition === undefined)
                        this.transition = null;
                    super.setRenderObject(renderObject);
                    this.transition = this.getRenderObject();
                }
                play() {
                    this.repeatCount = (((this.transition.getDuration() / this.deltaTime | 0)) | 0);
                    this.animTimer = new splashjs.utils.Timer(this.deltaTime, this.repeatCount);
                    console.info(this.deltaTime + " " + this.repeatCount);
                    this.animTimer.addEventListener(splashjs.events.TimerEvent.TIMER, (event) => {
                        let currentTime = this.deltaTime * (this.animTimer.getCurrentCount() + 1);
                        let nextValue = 0.0;
                        if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.currentState, splashjs.animation.TransitionState.NORMAL))
                            nextValue = this.getNextValue(currentTime, this.transition.getFrom(), this.transition.getTo(), this.transition.getDuration(), this.transition.getEasing());
                        else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.currentState, splashjs.animation.TransitionState.REVERSE))
                            nextValue = this.getNextValue(currentTime, this.transition.getTo(), this.transition.getFrom(), this.transition.getDuration(), this.transition.getEasing());
                        this.transition.update(nextValue);
                        this.ctr++;
                        console.info("nextValue: " + nextValue + " ctr: " + this.ctr + " currentCount: " + this.animTimer.getCurrentCount() + " repeatCount: " + this.repeatCount);
                    });
                    this.animTimer.addEventListener(splashjs.events.TimerEvent.TIMER_COMPLETE, (event) => {
                        if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.currentState, splashjs.animation.TransitionState.NORMAL))
                            this.transition.update(this.transition.getTo());
                        else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.currentState, splashjs.animation.TransitionState.REVERSE))
                            this.transition.update(this.transition.getFrom());
                        if (this.transition.getAutoReverse() === true) {
                            this.currentLoopCount += 1;
                            if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.currentState, splashjs.animation.TransitionState.NORMAL))
                                this.currentState = splashjs.animation.TransitionState.REVERSE;
                            else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.currentState, splashjs.animation.TransitionState.REVERSE))
                                this.currentState = splashjs.animation.TransitionState.NORMAL;
                        }
                        else {
                            this.currentLoopCount += 2;
                        }
                        if (this.running === true && (this.transition.getLoopCount() === 0 || this.currentLoopCount < this.transition.getLoopCount() * 2)) {
                            this.animTimer.reset();
                            this.animTimer.start();
                        }
                        else {
                            this.running = false;
                            let transitionEvent = new splashjs.events.TransitionEvent(splashjs.events.TransitionEvent.COMPLETE);
                            this.transition.dispatchEvent(transitionEvent);
                        }
                        if (this.transition.getLoopCount() <= this.currentLoopCount) {
                            this.transitionEvent = new splashjs.events.TransitionEvent(splashjs.events.TransitionEvent.LOOP_INTERVAL_COMPLETE, this.transition, this.transition);
                            this.transition.dispatchEvent(this.transitionEvent);
                        }
                        if (this.transition.getLoopCount() === this.currentLoopCount) {
                            this.transitionEvent = new splashjs.events.TransitionEvent(splashjs.events.TransitionEvent.COMPLETE, this.transition, this.transition);
                            this.transition.dispatchEvent(this.transitionEvent);
                            this.currentState = splashjs.animation.TransitionState.NONE;
                        }
                    });
                    if (this.transition.getDelay() > 0) {
                        this.delayTimer = new splashjs.utils.Timer(this.transition.getDelay(), 1);
                        this.delayTimer.addEventListener(splashjs.events.TimerEvent.TIMER_COMPLETE, (event) => {
                            this.transitionEvent = new splashjs.events.TransitionEvent(splashjs.events.TransitionEvent.DELAY_COMPLETE, this.transition, this.transition);
                            this.transition.dispatchEvent(this.transitionEvent);
                            this.animTimer.start();
                        });
                        this.running = true;
                        this.currentState = splashjs.animation.TransitionState.NORMAL;
                        this.delayTimer.start();
                    }
                    else {
                        this.running = true;
                        this.currentState = splashjs.animation.TransitionState.NORMAL;
                        this.animTimer.start();
                    }
                }
                stop() {
                    this.running = false;
                }
                isRunning() {
                    return this.running;
                }
                /*private*/ getNextValue(currentTime, from, to, duration, easing) {
                    let nextValue = 0.0;
                    if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(easing, splashjs.animation.easing.Linear.EASE_NONE)) {
                        nextValue = splashjs.animation.easing.Linear.easeNone(currentTime, from, to - from, duration);
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(easing, splashjs.animation.easing.Linear.EASE_IN)) {
                        nextValue = splashjs.animation.easing.Linear.easeIn(currentTime, from, to - from, duration);
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(easing, splashjs.animation.easing.Linear.EASE_OUT)) {
                        nextValue = splashjs.animation.easing.Linear.easeOut(currentTime, from, to - from, duration);
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(easing, splashjs.animation.easing.Linear.EASE_IN_OUT)) {
                        nextValue = splashjs.animation.easing.Linear.easeInOut(currentTime, from, to - from, duration);
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(easing, splashjs.animation.easing.Elastic.EASE_IN)) {
                        nextValue = splashjs.animation.easing.Elastic.easeIn$double$double$double$double(currentTime, from, to - from, duration);
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(easing, splashjs.animation.easing.Elastic.EASE_OUT)) {
                        nextValue = splashjs.animation.easing.Elastic.easeOut$double$double$double$double(currentTime, from, to - from, duration);
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(easing, splashjs.animation.easing.Elastic.EASE_IN_OUT)) {
                        nextValue = splashjs.animation.easing.Elastic.easeInOut$double$double$double$double(currentTime, from, to - from, duration);
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(easing, splashjs.animation.easing.Quint.EASE_IN)) {
                        nextValue = splashjs.animation.easing.Quint.easeIn(currentTime, from, to - from, duration);
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(easing, splashjs.animation.easing.Quint.EASE_OUT)) {
                        nextValue = splashjs.animation.easing.Quint.easeOut(currentTime, from, to - from, duration);
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(easing, splashjs.animation.easing.Quint.EASE_IN_OUT)) {
                        nextValue = splashjs.animation.easing.Quint.easeInOut(currentTime, from, to - from, duration);
                    }
                    return nextValue;
                }
                getTransitionState() {
                    return this.currentState;
                }
                static create(inparams) {
                    let params = inparams;
                    let transition = null;
                    let type = (params["type"]);
                    if (type != null && !(type.length === 0)) {
                        let target;
                        let from;
                        let to;
                        let ease;
                        let duration;
                        let autoReverse;
                        let loopCount;
                        let delay;
                        let onComplete;
                        if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(type, splashjs.animation.TransitionType.SCALE_X) || ((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(type, splashjs.animation.TransitionType.SCALE_X) || ((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(type, splashjs.animation.TransitionType.SCALE_XY)) {
                            transition = new splashjs.animation.ScaleTransition();
                            target = (params["target"]);
                            from = (params["from"]);
                            to = (params["to"]);
                            ease = params["ease"] === undefined ? transition.getEasing() : (params["ease"]);
                            duration = params["duration"] === undefined ? transition.getDuration() : (params["duration"]);
                            autoReverse = params["autoReverse"] === undefined ? transition.getAutoReverse() : (params["autoReverse"]);
                            loopCount = params["loopCount"] === undefined ? transition.getLoopCount() : (params["loopCount"]);
                            delay = (params["delay"]);
                            onComplete = (params["onComplete"]);
                            transition.setTargetObject(target).setFrom(from).setTo(to).setDuration(duration).setAutoReverse(autoReverse).setLoopCount(loopCount).setDelay(delay).setEasing(ease).addEventListener(splashjs.events.TransitionEvent.COMPLETE, ((onComplete) => {
                                return (event) => {
                                    onComplete(event);
                                };
                            })(onComplete));
                        }
                        if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(type, splashjs.animation.TransitionType.SCALE_X))
                            transition.setScaleTransitionType(splashjs.animation.ScaleTransitionType.X);
                        else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(type, splashjs.animation.TransitionType.SCALE_Y))
                            transition.setScaleTransitionType(splashjs.animation.ScaleTransitionType.Y);
                        else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(type, splashjs.animation.TransitionType.SCALE_XY))
                            transition.setScaleTransitionType(splashjs.animation.ScaleTransitionType.XY);
                    }
                    return transition;
                }
            }
            animation.TransitionRenderer = TransitionRenderer;
            TransitionRenderer["__class"] = "splashjs.render.animation.TransitionRenderer";
            TransitionRenderer["__interfaces"] = ["splashjs.render.animation.iface.ITransitionRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(animation = render.animation || (render.animation = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            class BitmapRenderer extends splashjs.render.display.DisplayObjectRenderer {
                constructor(renderObject) {
                    super();
                    if (this.imageElement === undefined)
                        this.imageElement = null;
                    if (this.bitmap === undefined)
                        this.bitmap = null;
                    super.setRenderObject(renderObject);
                    this.bitmap = renderObject;
                    this.imageElement = document.createElement("img");
                    super.setRenderElement(new splashjs.render.RenderElement(this.imageElement));
                    this.create();
                }
                create() {
                    let bitmapData = this.bitmap.getBitmapData();
                    let bitmapDataWidth = bitmapData.getBitmapDataWidth();
                    let bitmapDataHeight = bitmapData.getBitmapDataHeight();
                    let blob = bitmapData.getRenderer().getBlob();
                    this.imageElement.src = URL.createObjectURL(blob);
                    this.imageElement.width = bitmapDataWidth;
                    this.imageElement.height = bitmapDataHeight;
                }
            }
            display.BitmapRenderer = BitmapRenderer;
            BitmapRenderer["__class"] = "splashjs.render.display.BitmapRenderer";
            BitmapRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.display.iface.IBitmapRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            class InteractiveObjectRenderer extends splashjs.render.display.DisplayObjectRenderer {
                constructor() {
                    super();
                }
            }
            display.InteractiveObjectRenderer = InteractiveObjectRenderer;
            InteractiveObjectRenderer["__class"] = "splashjs.render.display.InteractiveObjectRenderer";
            InteractiveObjectRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var layout;
        (function (layout) {
            class BoxRenderer extends splashjs.render.display.DisplayObjectRenderer {
                constructor(renderObject) {
                    super();
                    if (this.box === undefined)
                        this.box = null;
                    if (this.htmlDivElement === undefined)
                        this.htmlDivElement = null;
                    this.box = renderObject;
                    super.setRenderObject(renderObject);
                    this.htmlDivElement = document.createElement("div");
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlDivElement));
                    this.create();
                }
                create() {
                    let theOnlyMember = this.box.getTheOnlyMember();
                    if (theOnlyMember != null && (theOnlyMember != null && (theOnlyMember["__interfaces"] != null && theOnlyMember["__interfaces"].indexOf("splashjs.display.iface.IDisplayObject") >= 0 || theOnlyMember.constructor != null && theOnlyMember.constructor["__interfaces"] != null && theOnlyMember.constructor["__interfaces"].indexOf("splashjs.display.iface.IDisplayObject") >= 0))) {
                        this.htmlDivElement.appendChild(theOnlyMember.getRenderer().getDOMElement());
                    }
                }
                applyCSS() {
                    super.applyCSS();
                    this.htmlDivElement.style.border = "0px dotted red";
                    this.htmlDivElement.style.width = this.box.getWidth() + this.UNIT;
                    this.htmlDivElement.style.height = this.box.getHeight() + this.UNIT;
                }
                getWidth() {
                    return (this.htmlDivElement.clientWidth | 0);
                }
                getHeight() {
                    return (this.htmlDivElement.clientHeight | 0);
                }
            }
            layout.BoxRenderer = BoxRenderer;
            BoxRenderer["__class"] = "splashjs.render.layout.BoxRenderer";
            BoxRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.layout.iface.IBoxRenderer"];
        })(layout = render.layout || (render.layout = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var layout;
        (function (layout) {
            class LayoutRenderer extends splashjs.render.display.DisplayObjectRenderer {
                constructor() {
                    super();
                }
            }
            layout.LayoutRenderer = LayoutRenderer;
            LayoutRenderer["__class"] = "splashjs.render.layout.LayoutRenderer";
            LayoutRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(layout = render.layout || (render.layout = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var media;
        (function (media) {
            class MediaRenderer extends splashjs.render.display.DisplayObjectRenderer {
                constructor() {
                    super();
                }
            }
            media.MediaRenderer = MediaRenderer;
            MediaRenderer["__class"] = "splashjs.render.media.MediaRenderer";
            MediaRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.media.iface.IMediaRenderer"];
        })(media = render.media || (render.media = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        class BaseList extends splashjs.controls.Control {
            constructor(id) {
                super(id);
            }
        }
        controls.BaseList = BaseList;
        BaseList["__class"] = "splashjs.controls.BaseList";
        BaseList["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseList"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        class BaseText extends splashjs.controls.Control {
            constructor(id) {
                super(id);
                if (this.text === undefined)
                    this.text = null;
            }
            setText(text) {
                this.text = text;
                if (super.getRenderer() != null)
                    super.getRenderer().setText();
            }
            getText() {
                return this.text;
            }
        }
        controls.BaseText = BaseText;
        BaseText["__class"] = "splashjs.controls.BaseText";
        BaseText["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseText"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        class RadioButton extends splashjs.controls.Control {
            constructor() {
                super("radioButton");
                /*private*/ this.selected = false;
                if (this.label === undefined)
                    this.label = null;
                if (this.group === undefined)
                    this.group = null;
                if (this.value === undefined)
                    this.value = null;
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(RadioButton, this));
            }
            setValue(value) {
                this.value = value;
            }
            getValue() {
                return this.value;
            }
            setSelected(selected) {
                if (this.selected !== selected) {
                    this.selected = selected;
                    if (super.getRenderer() != null)
                        super.getRenderer().setSelected();
                }
            }
            getSelected() {
                return this.selected;
            }
            isSelected() {
                return this.getSelected();
            }
            setGroup(group) {
                this.group = group;
                if (super.getRenderer() != null)
                    super.getRenderer().setGroup();
            }
            getGroup() {
                return this.group;
            }
            setLabel(label) {
                this.label = label;
            }
            getLabel() {
                return this.label;
            }
            render() {
                super.render();
                super.getRenderer().setGroup();
                super.getRenderer().setSelected();
            }
        }
        controls.RadioButton = RadioButton;
        RadioButton["__class"] = "splashjs.controls.RadioButton";
        RadioButton["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.controls.iface.IRadioButton", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        class Tree extends splashjs.controls.Control {
            constructor(treeData) {
                if (((treeData != null) || treeData === null)) {
                    let __args = arguments;
                    super("tree");
                    if (this.treeData === undefined)
                        this.treeData = null;
                    if (this.treeData === undefined)
                        this.treeData = null;
                    (() => {
                        this.treeData = treeData;
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Tree, this));
                    })();
                }
                else if (treeData === undefined) {
                    let __args = arguments;
                    {
                        let __args = arguments;
                        let treeData = null;
                        super("tree");
                        if (this.treeData === undefined)
                            this.treeData = null;
                        if (this.treeData === undefined)
                            this.treeData = null;
                        (() => {
                            this.treeData = treeData;
                            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Tree, this));
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
            }
            getTreeData() {
                return this.treeData;
            }
        }
        controls.Tree = Tree;
        Tree["__class"] = "splashjs.controls.Tree";
        Tree["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.controls.iface.ITree", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class Scene extends splashjs.display.DisplayObjectContainer {
            constructor() {
                super("scene");
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Scene, this));
            }
        }
        display.Scene = Scene;
        Scene["__class"] = "splashjs.display.Scene";
        Scene["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class Sprite extends splashjs.display.DisplayObjectContainer {
            constructor(id) {
                if (((typeof id === 'string') || id === null)) {
                    let __args = arguments;
                    super(id);
                    this.draggable = false;
                    (() => {
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Sprite, this));
                    })();
                }
                else if (id === undefined) {
                    let __args = arguments;
                    {
                        let __args = arguments;
                        let id = "sprite";
                        super(id);
                        this.draggable = false;
                        (() => {
                            super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Sprite, this));
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
            }
            /**
             *
             */
            render() {
                super.render();
                super.getRenderer().setBorder("0px solid olive");
            }
            startDrag() {
                this.draggable = true;
            }
            stopDrag() {
                this.draggable = false;
            }
            getDraggable() {
                return this.draggable;
            }
            /**
             *
             * @return {number}
             */
            getWidth() {
                let leftX = 0;
                let rightX = 0;
                if (this.children.length > 0) {
                    leftX = this.children[0].getX();
                    rightX = this.children[0].getX() + this.children[0].getWidth();
                    for (let index131 = 0; index131 < this.children.length; index131++) {
                        let child = this.children[index131];
                        {
                            if (leftX > child.getX())
                                leftX = child.getX();
                            if (rightX < (child.getX() + child.getWidth()))
                                rightX = (child.getX() + child.getWidth());
                        }
                    }
                }
                return (rightX - leftX);
            }
            /**
             *
             * @return {number}
             */
            getHeight() {
                let topY = 0;
                let bottomY = 0;
                if (this.children.length > 0) {
                    topY = this.children[0].getY();
                    bottomY = this.children[0].getY() + this.children[0].getHeight();
                    for (let index132 = 0; index132 < this.children.length; index132++) {
                        let child = this.children[index132];
                        {
                            if (topY > child.getY())
                                topY = child.getY();
                            if (bottomY < (child.getY() + child.getHeight()))
                                bottomY = (child.getY() + child.getHeight());
                        }
                    }
                }
                return (bottomY - topY);
            }
        }
        display.Sprite = Sprite;
        Sprite["__class"] = "splashjs.display.Sprite";
        Sprite["__interfaces"] = ["splashjs.display.iface.IDraggable", "splashjs.display.iface.IDisplayObject", "splashjs.display.iface.ISprite", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class Stage extends splashjs.display.DisplayObjectContainer {
            constructor(stageOwnerName, width, height) {
                if (((typeof stageOwnerName === 'string') || stageOwnerName === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
                    let __args = arguments;
                    super("stage");
                    if (this.stageOwner === undefined)
                        this.stageOwner = null;
                    if (this.scaleMode === undefined)
                        this.scaleMode = null;
                    if (this.align === undefined)
                        this.align = null;
                    if (this.scene === undefined)
                        this.scene = null;
                    if (this.color === undefined)
                        this.color = null;
                    if (this.stageOwner === undefined)
                        this.stageOwner = null;
                    if (this.scaleMode === undefined)
                        this.scaleMode = null;
                    if (this.align === undefined)
                        this.align = null;
                    if (this.scene === undefined)
                        this.scene = null;
                    if (this.color === undefined)
                        this.color = null;
                    (() => {
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Stage, this));
                        this.stageOwner = new splashjs.application.StageOwner(stageOwnerName, this, width, height);
                        super.setWidth(width);
                        super.setHeight(height);
                        this.setColor(splashjs.utils.Color.WHITE_$LI$());
                        this.scaleMode = splashjs.display.StageScaleMode.SHOW_ALL;
                        this.align = splashjs.display.StageAlign.TOP_LEFT;
                        super.getRenderer().startEnterFrameExitFrameDispatcherLoop();
                        this.stageOwner.addEventListener(splashjs.events.Event.RESIZE, (event) => {
                            this.handleResize();
                            let resizeEvent = new splashjs.events.Event(splashjs.events.Event.RESIZE, this, this);
                            this.dispatchEvent(resizeEvent);
                        });
                        this.stageOwner.getRenderer().appendChild(this.getRenderer());
                        this.render();
                    })();
                }
                else if (stageOwnerName === undefined && width === undefined && height === undefined) {
                    let __args = arguments;
                    super("stage");
                    if (this.stageOwner === undefined)
                        this.stageOwner = null;
                    if (this.scaleMode === undefined)
                        this.scaleMode = null;
                    if (this.align === undefined)
                        this.align = null;
                    if (this.scene === undefined)
                        this.scene = null;
                    if (this.color === undefined)
                        this.color = null;
                    if (this.stageOwner === undefined)
                        this.stageOwner = null;
                    if (this.scaleMode === undefined)
                        this.scaleMode = null;
                    if (this.align === undefined)
                        this.align = null;
                    if (this.scene === undefined)
                        this.scene = null;
                    if (this.color === undefined)
                        this.color = null;
                }
                else
                    throw new Error('invalid overload');
            }
            setScene(scene) {
                if (this.scene != null)
                    super.getRenderer().removeScene();
                this.scene = scene;
                super.getRenderer().setScene();
            }
            getScene() {
                return this.scene;
            }
            getStageOwner() {
                return this.stageOwner;
            }
            /**
             *
             * @param {number} x
             */
            setX(x) {
                throw new splashjs.lang.UnsupportedOperationError();
            }
            /**
             *
             * @param {number} y
             */
            setY(y) {
                throw new splashjs.lang.UnsupportedOperationError();
            }
            /**
             *
             * @param {number} x
             * @param {number} y
             */
            setXY(x, y) {
                throw new splashjs.lang.UnsupportedOperationError();
            }
            /**
             *
             * @return {*}
             */
            getStage() {
                return null;
            }
            setWidth(width) {
                this.width = width;
            }
            setHeight(height) {
                this.height = height;
            }
            setSize(width, height) {
            }
            getWidth() {
                return this.width;
            }
            getHeight() {
                return this.height;
            }
            getStageWidth() {
                let stageWidth = this.width;
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.scaleMode, splashjs.display.StageScaleMode.NO_SCALE))
                    stageWidth = super.getRenderer().getStageWidth();
                return stageWidth;
            }
            getStageHeight() {
                let stageHeight = this.height;
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.scaleMode, splashjs.display.StageScaleMode.NO_SCALE))
                    stageHeight = super.getRenderer().getStageHeight();
                return stageHeight;
            }
            /**
             *
             */
            render() {
                super.render();
                super.getRenderer().setBorder("0px solid red");
                super.getRenderer().setOverflow("hidden");
                super.getRenderer().setPosition("relative");
                super.getRenderer().setDisplay("inline-block");
                super.getRenderer().setWidth();
                super.getRenderer().setHeight();
                super.getRenderer().setColor();
                this.handleResize();
            }
            /**
             *
             * @param {*} child
             */
            addChild(child) {
                super.addChild(child);
                let addedToStageEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, child, child);
                addedToStageEvent.setData(this);
                child.dispatchEvent(addedToStageEvent);
            }
            /**
             *
             * @param {*} child
             * @param {number} index
             */
            addChildAt(child, index) {
                super.addChildAt(child, index);
                let addedToStageEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, child, child);
                addedToStageEvent.setData(this);
                child.dispatchEvent(addedToStageEvent);
            }
            /**
             *
             * @param {*} child
             */
            removeChild(child) {
                super.removeChild(child);
                let removedFromStageEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, child, child);
                child.dispatchEvent(removedFromStageEvent);
            }
            /**
             *
             * @param {number} index
             */
            removeChildAt(index) {
                let child = this.getChildAt(index);
                super.removeChildAt(index);
                let removedFromStageEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, child, child);
                child.dispatchEvent(removedFromStageEvent);
            }
            setScaleMode(stageScaleMode) {
                this.scaleMode = stageScaleMode;
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.scaleMode, splashjs.display.StageScaleMode.NO_SCALE)) {
                    super.setWidth(this.width);
                    super.setHeight(this.height);
                    super.setScaleX(1);
                    super.setScaleY(1);
                    if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.align, splashjs.display.StageAlign.TOP_LEFT)) {
                        super.setX(0);
                        super.setY(0);
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.align, splashjs.display.StageAlign.TOP_RIGHT)) {
                        super.setX(this.getStageWidth() - this.getWidth());
                        super.setY(0);
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.align, splashjs.display.StageAlign.BOTTOM_LEFT)) {
                        super.setX(0);
                        super.setY(this.getStageHeight() - this.getHeight());
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.align, splashjs.display.StageAlign.BOTTOM_RIGHT)) {
                        super.setX(this.getStageWidth() - this.getWidth());
                        super.setY(this.getStageHeight() - this.getHeight());
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.align, splashjs.display.StageAlign.TOP)) {
                        super.setX(((this.getStageWidth() - this.getWidth()) / 2 | 0));
                        super.setY(0);
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.align, splashjs.display.StageAlign.BOTTOM)) {
                        super.setX(((this.getStageWidth() - this.getWidth()) / 2 | 0));
                        super.setY(this.getStageHeight() - this.getHeight());
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.align, splashjs.display.StageAlign.LEFT)) {
                        super.setX(0);
                        super.setY(((this.getStageHeight() - this.getHeight()) / 2 | 0));
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.align, splashjs.display.StageAlign.RIGHT)) {
                        super.setX(this.getStageWidth() - this.getWidth());
                        super.setY(((this.getStageHeight() - this.getHeight()) / 2 | 0));
                    }
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.align, splashjs.display.StageAlign.CENTER)) {
                        super.setX(((this.getStageWidth() - this.getWidth()) / 2 | 0));
                        super.setY(((this.getStageHeight() - this.getHeight()) / 2 | 0));
                    }
                }
                else {
                    this.handleResize();
                }
            }
            setAlign(stageAlign) {
                this.align = stageAlign;
                this.handleResize();
            }
            /**
             *
             * @param {*} event
             * @return {boolean}
             */
            dispatchEvent(event) {
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.RESIZE)) {
                    this.handleResize();
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ENTER_FRAME)) {
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.MouseEvent.MOUSE_MOVE)) {
                    let child = this.getDraggableChild(this.getAllChildren());
                    if (child != null) {
                        let mouseEvent = event;
                        let point = new splashjs.geom.Point(((mouseEvent.getLocalX() / this.getScaleX()) | 0), ((mouseEvent.getLocalY() / this.getScaleY()) | 0));
                        child.setX(point.getX());
                        child.setY(point.getY());
                    }
                }
                return super.dispatchEvent(event);
            }
            /*private*/ getDraggableChild(children) {
                let child = null;
                for (let i = 0; i < children.length; i++) {
                    {
                        if (children[i] != null && (children[i]["__interfaces"] != null && children[i]["__interfaces"].indexOf("splashjs.display.iface.IDraggable") >= 0 || children[i].constructor != null && children[i].constructor["__interfaces"] != null && children[i].constructor["__interfaces"].indexOf("splashjs.display.iface.IDraggable") >= 0)) {
                            child = children[i];
                            if (child.getDraggable() === true)
                                break;
                        }
                        if (children[i] != null && (children[i]["__interfaces"] != null && children[i]["__interfaces"].indexOf("splashjs.display.iface.IDisplayObjectContainer") >= 0 || children[i].constructor != null && children[i].constructor["__interfaces"] != null && children[i].constructor["__interfaces"].indexOf("splashjs.display.iface.IDisplayObjectContainer") >= 0)) {
                            child = this.getDraggableChild(children[i].getAllChildren());
                            if (child != null)
                                break;
                        }
                        child = null;
                    }
                    ;
                }
                return child;
            }
            /*private*/ handleResize() {
                let stageOwnerWidth = this.stageOwner.getWidth();
                let stageOwnerHeight = this.stageOwner.getHeight();
                let stageWidth = this.getWidth();
                let stageHeight = this.getHeight();
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.scaleMode, splashjs.display.StageScaleMode.EXACT_FIT)) {
                    this.setScaleX(stageOwnerWidth / stageWidth);
                    this.setScaleY(stageOwnerHeight / stageHeight);
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.scaleMode, splashjs.display.StageScaleMode.NO_BORDER)) {
                    let widthRatio = stageOwnerWidth / stageWidth;
                    let heightRatio = stageOwnerHeight / stageHeight;
                    this.setScaleX(widthRatio);
                    this.setScaleY(widthRatio);
                    let px = (((stageOwnerWidth - stageWidth * widthRatio) / 2) | 0);
                    let py = (((stageOwnerHeight - stageHeight * widthRatio) / 2) | 0);
                    super.setX(px);
                    super.setY(py);
                }
                else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.scaleMode, splashjs.display.StageScaleMode.SHOW_ALL)) {
                    let widthRatio = stageOwnerWidth / stageWidth;
                    let heightRatio = stageOwnerHeight / stageHeight;
                    let ratio = Math.min(widthRatio, heightRatio);
                    this.setScaleX(ratio);
                    this.setScaleY(ratio);
                    let px = (((stageOwnerWidth - stageWidth * ratio) / 2) | 0);
                    let py = (((stageOwnerHeight - stageHeight * ratio) / 2) | 0);
                    super.setX(px);
                    super.setY(py);
                }
            }
            /**
             *
             * @param {number} scaleX
             */
            setScaleX(scaleX) {
                super.setScaleX(scaleX);
            }
            /**
             *
             * @param {number} scaleY
             */
            setScaleY(scaleY) {
                super.setScaleY(scaleY);
            }
            setColor(color) {
                this.color = color;
                if (super.getRenderer() != null)
                    super.getRenderer().setColor();
            }
            getColor() {
                return this.color;
            }
        }
        display.Stage = Stage;
        Stage["__class"] = "splashjs.display.Stage";
        Stage["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IStage", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class Circle extends splashjs.display.Shape {
            constructor(radius) {
                if (((typeof radius === 'number') || radius === null)) {
                    let __args = arguments;
                    super("circle");
                    this.radius = 0;
                    (() => {
                        this.radius = radius;
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Circle, this));
                    })();
                }
                else if (radius === undefined) {
                    let __args = arguments;
                    super("circle");
                    this.radius = 0;
                    (() => {
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Circle, this));
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            dispatchEvent(event) {
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.originalWidth = super.getRenderer().getOriginalWidth();
                    this.originalHeight = super.getRenderer().getOriginalHeight();
                    this.width = this.originalWidth;
                    this.height = this.originalHeight;
                }
                return super.dispatchEvent(event);
            }
            setRadius(radius) {
                this.radius = radius;
                super.getRenderer().setRadius();
                this.originalWidth = super.getRenderer().getOriginalWidth();
                this.originalHeight = super.getRenderer().getOriginalHeight();
            }
            getRadius() {
                return this.radius;
            }
        }
        display.Circle = Circle;
        Circle["__class"] = "splashjs.display.Circle";
        Circle["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.display.iface.IShape", "splashjs.lang.iface.ISplashObject", "splashjs.display.iface.ICircle", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class Ellipse extends splashjs.display.Shape {
            constructor(radiusX, radiusY) {
                if (((typeof radiusX === 'number') || radiusX === null) && ((typeof radiusY === 'number') || radiusY === null)) {
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
                }
                else if (radiusX === undefined && radiusY === undefined) {
                    let __args = arguments;
                    super("ellipse");
                    this.radiusX = 0;
                    this.radiusY = 0;
                }
                else
                    throw new Error('invalid overload');
            }
        }
        display.Ellipse = Ellipse;
        Ellipse["__class"] = "splashjs.display.Ellipse";
        Ellipse["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.display.iface.IShape", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.display.iface.IEllipse"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class Line extends splashjs.display.Shape {
            constructor(length) {
                if (((typeof length === 'number') || length === null)) {
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
                }
                else if (length === undefined) {
                    let __args = arguments;
                    super("line");
                    this.length = 0;
                    (() => {
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Line, this));
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            setLength(length) {
                this.length = length;
            }
            getLength() {
                return this.length;
            }
            dispatchEvent(event) {
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.originalWidth = super.getRenderer().getOriginalWidth();
                    this.originalHeight = super.getRenderer().getOriginalHeight();
                    this.width = this.originalWidth;
                    this.height = this.originalHeight;
                }
                let val = super.dispatchEvent(event);
                return val;
            }
            /**
             *
             * @param {*} fillColor
             */
            setFillColor(fillColor) {
            }
            /**
             *
             * @return {*}
             */
            getFillColor() {
                return null;
            }
            /**
             *
             * @param {number} width
             */
            setWidth(width) {
            }
            setHeight(height) {
            }
        }
        display.Line = Line;
        Line["__class"] = "splashjs.display.Line";
        Line["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.display.iface.IShape", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.display.iface.ILine"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class Rectangle extends splashjs.display.Shape {
            constructor(rectangleWidth, rectangleHeight, cornerRadiusX, cornerRadiusY) {
                if (((typeof rectangleWidth === 'number') || rectangleWidth === null) && ((typeof rectangleHeight === 'number') || rectangleHeight === null) && ((typeof cornerRadiusX === 'number') || cornerRadiusX === null) && ((typeof cornerRadiusY === 'number') || cornerRadiusY === null)) {
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
                }
                else if (((typeof rectangleWidth === 'number') || rectangleWidth === null) && ((typeof rectangleHeight === 'number') || rectangleHeight === null) && cornerRadiusX === undefined && cornerRadiusY === undefined) {
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
                }
                else if (rectangleWidth === undefined && rectangleHeight === undefined && cornerRadiusX === undefined && cornerRadiusY === undefined) {
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
                else
                    throw new Error('invalid overload');
            }
            getCornerRadiusX() {
                return this.cornerRadiusX;
            }
            setCornerRadiusX(cornerRadiusX) {
                this.cornerRadiusX = cornerRadiusX;
            }
            getCornerRadiusY() {
                return this.cornerRadiusY;
            }
            setCornerRadiusY(cornerRadiusY) {
                this.cornerRadiusY = cornerRadiusY;
            }
            getRectangleWidth() {
                return this.rectangleWidth;
            }
            setRectangleWidth(rectangleWidth) {
                this.rectangleWidth = rectangleWidth;
            }
            getRectangleHeight() {
                return this.rectangleHeight;
            }
            setRectangleHeight(rectangleHeight) {
                this.rectangleHeight = rectangleHeight;
            }
            /**
             *
             * @param {*} event
             * @return {boolean}
             */
            dispatchEvent(event) {
                let val = super.dispatchEvent(event);
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                }
                return val;
            }
        }
        display.Rectangle = Rectangle;
        Rectangle["__class"] = "splashjs.display.Rectangle";
        Rectangle["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.display.iface.IShape", "splashjs.lang.iface.ISplashObject", "splashjs.display.iface.IRectangle", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var text;
    (function (text_2) {
        class DynamicText extends splashjs.text.Text {
            constructor(text) {
                super("dynamicText");
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(DynamicText, this));
                super.setText(text);
            }
            dispatchEvent(event) {
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.width = super.getRenderer().getOriginalWidth();
                    this.height = super.getRenderer().getOriginalHeight();
                }
                let val = super.dispatchEvent(event);
                return val;
            }
            /**
             *
             * @param {number} width
             */
            setWidth(width) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            }
            /**
             *
             * @param {number} height
             */
            setHeight(height) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            }
            /**
             *
             * @param {number} width
             * @param {number} height
             */
            setSize(width, height) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            }
        }
        text_2.DynamicText = DynamicText;
        DynamicText["__class"] = "splashjs.text.DynamicText";
        DynamicText["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.text.iface.IDynamicText", "splashjs.text.iface.IText"];
    })(text = splashjs.text || (splashjs.text = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var text;
    (function (text_3) {
        class InputText extends splashjs.text.Text {
            constructor(text) {
                if (((typeof text === 'string') || text === null)) {
                    let __args = arguments;
                    super("inputText");
                    this.placeholder = "";
                    this.backgroundColor = splashjs.utils.Color.NONE_$LI$();
                    this.borderColor = splashjs.utils.Color.BLACK_$LI$();
                    (() => {
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(InputText, this));
                        super.setText(text);
                    })();
                }
                else if (text === undefined) {
                    let __args = arguments;
                    super("inputText");
                    this.placeholder = "";
                    this.backgroundColor = splashjs.utils.Color.NONE_$LI$();
                    this.borderColor = splashjs.utils.Color.BLACK_$LI$();
                    (() => {
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(InputText, this));
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            dispatchEvent(event) {
                let val = super.dispatchEvent(event);
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.width = super.getRenderer().getOriginalWidth();
                    this.height = super.getRenderer().getOriginalHeight();
                }
                return val;
            }
            setPlaceholder(placeholder) {
                this.placeholder = placeholder;
                super.getRenderer().setPlaceholder();
            }
            getPlaceholder() {
                return this.placeholder;
            }
            setBackgroundColor(backgroundColor) {
                this.backgroundColor = backgroundColor;
                super.getRenderer().setBackgroundColor();
            }
            getBackgroundColor() {
                return this.backgroundColor;
            }
            setBorderColor(borderColor) {
                this.borderColor = borderColor;
                super.getRenderer().setBorderColor();
            }
            getBorderColor() {
                return this.borderColor;
            }
            /**
             *
             * @return {number}
             */
            getWidth() {
                return super.getRenderer().getWidth();
            }
            /**
             *
             * @return {number}
             */
            getHeight() {
                return super.getRenderer().getHeight();
            }
            /**
             *
             * @param {number} width
             */
            setWidth(width) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            }
            /**
             *
             * @param {number} height
             */
            setHeight(height) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            }
            /**
             *
             * @param {number} width
             * @param {number} height
             */
            setSize(width, height) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            }
        }
        text_3.InputText = InputText;
        InputText["__class"] = "splashjs.text.InputText";
        InputText["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.text.iface.IInputText", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.text.iface.IText"];
    })(text = splashjs.text || (splashjs.text = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var text;
    (function (text_4) {
        class StaticText extends splashjs.text.Text {
            constructor(text) {
                super("staticText");
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(StaticText, this));
                super.setText(text);
            }
            dispatchEvent(event) {
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.width = super.getRenderer().getOriginalWidth();
                    this.height = super.getRenderer().getOriginalHeight();
                }
                let val = super.dispatchEvent(event);
                return val;
            }
            getWidth() {
                return super.getRenderer().getOriginalWidth();
            }
            getHeight() {
                return super.getRenderer().getOriginalHeight();
            }
            /**
             *
             * @param {number} width
             */
            setWidth(width) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            }
            /**
             *
             * @param {number} height
             */
            setHeight(height) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            }
            /**
             *
             * @param {number} width
             * @param {number} height
             */
            setSize(width, height) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            }
        }
        text_4.StaticText = StaticText;
        StaticText["__class"] = "splashjs.text.StaticText";
        StaticText["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.text.iface.IText", "splashjs.text.iface.IStaticText"];
    })(text = splashjs.text || (splashjs.text = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var animation;
        (function (animation) {
            class CircularTransitionRenderer extends splashjs.render.animation.TransitionRenderer {
                constructor(renderObject) {
                    super(renderObject);
                }
            }
            animation.CircularTransitionRenderer = CircularTransitionRenderer;
            CircularTransitionRenderer["__class"] = "splashjs.render.animation.CircularTransitionRenderer";
            CircularTransitionRenderer["__interfaces"] = ["splashjs.render.animation.iface.ITransitionRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(animation = render.animation || (render.animation = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var animation;
        (function (animation) {
            class FadeTransitionRenderer extends splashjs.render.animation.TransitionRenderer {
                constructor(renderObject) {
                    super(renderObject);
                }
            }
            animation.FadeTransitionRenderer = FadeTransitionRenderer;
            FadeTransitionRenderer["__class"] = "splashjs.render.animation.FadeTransitionRenderer";
            FadeTransitionRenderer["__interfaces"] = ["splashjs.render.animation.iface.ITransitionRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(animation = render.animation || (render.animation = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var animation;
        (function (animation) {
            class ParallelTransitionRenderer extends splashjs.render.animation.TransitionRenderer {
                constructor(renderObject) {
                    super(renderObject);
                }
            }
            animation.ParallelTransitionRenderer = ParallelTransitionRenderer;
            ParallelTransitionRenderer["__class"] = "splashjs.render.animation.ParallelTransitionRenderer";
            ParallelTransitionRenderer["__interfaces"] = ["splashjs.render.animation.iface.ITransitionRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(animation = render.animation || (render.animation = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var animation;
        (function (animation) {
            class RotationTransitionRenderer extends splashjs.render.animation.TransitionRenderer {
                constructor(renderObject) {
                    super(renderObject);
                }
            }
            animation.RotationTransitionRenderer = RotationTransitionRenderer;
            RotationTransitionRenderer["__class"] = "splashjs.render.animation.RotationTransitionRenderer";
            RotationTransitionRenderer["__interfaces"] = ["splashjs.render.animation.iface.ITransitionRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(animation = render.animation || (render.animation = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var animation;
        (function (animation) {
            class ScaleTransitionRenderer extends splashjs.render.animation.TransitionRenderer {
                constructor(renderObject) {
                    super(renderObject);
                }
            }
            animation.ScaleTransitionRenderer = ScaleTransitionRenderer;
            ScaleTransitionRenderer["__class"] = "splashjs.render.animation.ScaleTransitionRenderer";
            ScaleTransitionRenderer["__interfaces"] = ["splashjs.render.animation.iface.ITransitionRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(animation = render.animation || (render.animation = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var animation;
        (function (animation) {
            class TranslateTransitionRenderer extends splashjs.render.animation.TransitionRenderer {
                constructor(renderObject) {
                    super(renderObject);
                }
            }
            animation.TranslateTransitionRenderer = TranslateTransitionRenderer;
            TranslateTransitionRenderer["__class"] = "splashjs.render.animation.TranslateTransitionRenderer";
            TranslateTransitionRenderer["__interfaces"] = ["splashjs.render.animation.iface.ITransitionRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(animation = render.animation || (render.animation = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var controls;
        (function (controls) {
            class ControlRenderer extends splashjs.render.display.InteractiveObjectRenderer {
                constructor() {
                    super();
                }
            }
            controls.ControlRenderer = ControlRenderer;
            ControlRenderer["__class"] = "splashjs.render.controls.ControlRenderer";
            ControlRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(controls = render.controls || (render.controls = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            class DisplayObjectContainerRenderer extends splashjs.render.display.InteractiveObjectRenderer {
                constructor() {
                    super();
                }
            }
            display.DisplayObjectContainerRenderer = DisplayObjectContainerRenderer;
            DisplayObjectContainerRenderer["__class"] = "splashjs.render.display.DisplayObjectContainerRenderer";
            DisplayObjectContainerRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.display.iface.IDisplayObjectContainerRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            class ImageRenderer extends splashjs.render.display.InteractiveObjectRenderer {
                constructor(renderObject) {
                    super();
                    if (this.htmlImageElement === undefined)
                        this.htmlImageElement = null;
                    super.setRenderObject(renderObject);
                    this.htmlImageElement = document.createElement("img");
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlImageElement));
                    this.create();
                }
                create() {
                    this.setImagePath();
                }
                setImagePath() {
                    let imagePath = super.getRenderObject().getImagePath();
                    if (imagePath != null && !(imagePath.length === 0))
                        this.htmlImageElement.src = imagePath;
                }
                getOriginalWidth() {
                    return (this.htmlImageElement.naturalWidth | 0);
                }
                getOriginalHeight() {
                    return (this.htmlImageElement.naturalHeight | 0);
                }
            }
            display.ImageRenderer = ImageRenderer;
            ImageRenderer["__class"] = "splashjs.render.display.ImageRenderer";
            ImageRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            class ShapeRenderer extends splashjs.render.display.InteractiveObjectRenderer {
                constructor() {
                    super();
                    if (this.childSVGElement === undefined)
                        this.childSVGElement = null;
                }
                getStrokeColorNameAsString() {
                    let strokeColorName = splashjs.utils.ColorName.BLACK;
                    let strokeColor = super.getRenderObject().getStrokeColor();
                    if (strokeColor.getColorType() === splashjs.utils.ColorType.NAME)
                        strokeColorName = strokeColor.getColorName();
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(strokeColor.getColorType(), splashjs.utils.ColorType.HEX))
                        strokeColorName = strokeColor.getHEX();
                    return strokeColorName;
                }
                getFillColorNameAsString() {
                    let fillColorName = splashjs.utils.ColorName.BLACK;
                    let fillColor = super.getRenderObject().getFillColor();
                    if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(fillColor.getColorType(), splashjs.utils.ColorType.NAME))
                        fillColorName = fillColor.getColorName();
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(fillColor.getColorType(), splashjs.utils.ColorType.HEX))
                        fillColorName = fillColor.getHEX();
                    return fillColorName;
                }
                getStrokeWidthAsString() {
                    let strokeWidth = "1";
                    strokeWidth = super.getRenderObject().getStrokeWidth() + "";
                    return strokeWidth;
                }
                getSVGElement() {
                    return super.getDOMElement();
                }
                getOriginalWidth() {
                    return (super.getDOMElement().clientWidth | 0);
                }
                getOriginalHeight() {
                    return (super.getDOMElement().clientHeight | 0);
                }
            }
            display.ShapeRenderer = ShapeRenderer;
            ShapeRenderer["__class"] = "splashjs.render.display.ShapeRenderer";
            ShapeRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.display.iface.IShapeRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            class SimpleButtonRenderer extends splashjs.render.display.InteractiveObjectRenderer {
                constructor(renderObject) {
                    super();
                    /*private*/ this.container = new splashjs.display.Sprite();
                    if (this.upState === undefined)
                        this.upState = null;
                    if (this.downState === undefined)
                        this.downState = null;
                    if (this.overState === undefined)
                        this.overState = null;
                    if (this.disabledState === undefined)
                        this.disabledState = null;
                    super.setRenderObject(renderObject);
                    super.setRenderElement(new splashjs.render.RenderElement(document.createElement("span")));
                }
                create() {
                    this.appendChild(this.container.getRenderer());
                    this.setDownState();
                    this.setOverState();
                    this.setUpState();
                    this.setDisabledState();
                }
                setUpState() {
                    let visible = true;
                    if (this.upState == null) {
                        this.upState = super.getRenderObject().getUpState();
                    }
                    else if (this.upState != null) {
                        visible = this.upState.getVisible();
                        this.upState.setRenderer(null);
                        this.container.removeChild(this.upState);
                    }
                    if (this.upState != null) {
                        this.container.addChild(this.upState);
                        this.upState.setVisible(visible);
                    }
                }
                setDownState() {
                    let visible = false;
                    if (this.downState == null) {
                        this.downState = super.getRenderObject().getDownState();
                    }
                    else if (this.downState != null) {
                        visible = this.downState.getVisible();
                        this.downState.setRenderer(null);
                        this.container.removeChild(this.downState);
                    }
                    if (this.downState != null) {
                        this.container.addChild(this.downState);
                        this.downState.setVisible(visible);
                    }
                }
                setOverState() {
                    let visible = false;
                    if (this.overState == null) {
                        this.overState = super.getRenderObject().getOverState();
                    }
                    else if (this.overState != null) {
                        visible = this.overState.getVisible();
                        this.overState.setRenderer(null);
                        this.container.removeChild(this.overState);
                    }
                    if (this.overState != null) {
                        this.container.addChild(this.overState);
                        this.overState.setVisible(visible);
                    }
                }
                setDisabledState() {
                    let visible = false;
                    if (this.disabledState == null) {
                        this.disabledState = super.getRenderObject().getDisabledState();
                    }
                    else if (this.disabledState != null) {
                        visible = this.disabledState.getVisible();
                        this.disabledState.setRenderer(null);
                        this.container.removeChild(this.disabledState);
                    }
                    if (this.disabledState != null) {
                        this.container.addChild(this.disabledState);
                        this.disabledState.setVisible(visible);
                    }
                }
                setEnabled() {
                    let enabled = super.getRenderObject().isEnabled();
                    if (this.disabledState == null) {
                        if (enabled === true) {
                            super.getRenderObject().setAlpha(1.0);
                        }
                        else if (enabled === false) {
                            if (this.downState != null)
                                this.downState.setVisible(false);
                            if (this.upState != null)
                                this.upState.setVisible(true);
                            if (this.overState != null)
                                this.overState.setVisible(false);
                            super.getRenderObject().setAlpha(0.5);
                        }
                    }
                    else {
                        if (enabled === false) {
                            this.disabledState.setVisible(true);
                            if (this.downState != null)
                                this.downState.setVisible(false);
                            if (this.upState != null)
                                this.upState.setVisible(false);
                            if (this.overState != null)
                                this.overState.setVisible(false);
                        }
                        else {
                            this.disabledState.setVisible(false);
                            if (this.upState != null)
                                this.upState.setVisible(true);
                        }
                    }
                }
            }
            display.SimpleButtonRenderer = SimpleButtonRenderer;
            SimpleButtonRenderer["__class"] = "splashjs.render.display.SimpleButtonRenderer";
            SimpleButtonRenderer["__interfaces"] = ["splashjs.render.display.iface.ISimpleButtonRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var text;
        (function (text_5) {
            class TextRenderer extends splashjs.render.display.InteractiveObjectRenderer {
                constructor() {
                    super();
                }
                /**
                 *
                 */
                setColor() {
                    this.getDOMElement().style.color = this.getCSSColorText();
                }
                setText() {
                }
                setFont() {
                    let text = super.getRenderObject();
                    let font = text.getFont();
                    if (font != null) {
                        let fontID = font.getFontID();
                        this.getDOMElement().style.fontFamily = fontID;
                    }
                }
                setFontSize() {
                    let text = super.getRenderObject();
                    let fontSize = text.getFontSize();
                    if (fontSize >= 0)
                        this.getDOMElement().style.fontSize = fontSize + this.UNIT;
                }
                setFontWeight() {
                    let text = super.getRenderObject();
                    let fontWeight = text.getFontWeight();
                    if (fontWeight != null)
                        this.getDOMElement().style.fontWeight = fontWeight;
                }
                setFontStyle() {
                    let text = super.getRenderObject();
                    let fontStyle = text.getFontStyle();
                    if (fontStyle != null)
                        this.getDOMElement().style.fontStyle = fontStyle;
                }
                setSelectable() {
                }
                setTextFormat() {
                    let text = super.getRenderObject();
                    let textFormat = text.getTextFormat();
                    let font = textFormat.getFont();
                    let fontWeight = textFormat.getFontWeight();
                    let fontStyle = textFormat.getFontStyle();
                    let fontSize = textFormat.getFontSize();
                    if (font != null) {
                        let fontID = font.getFontID();
                        this.getDOMElement().style.fontFamily = fontID;
                    }
                    if (fontWeight != null) {
                        this.getDOMElement().style.fontWeight = fontWeight;
                    }
                    if (fontStyle != null) {
                        this.getDOMElement().style.fontStyle = fontStyle;
                    }
                    if (fontSize >= 0) {
                        this.getDOMElement().style.fontSize = fontSize + this.UNIT;
                    }
                }
                getClientWidth() {
                    return (this.getDOMElement().clientWidth | 0);
                }
                getClientHeight() {
                    return (this.getDOMElement().clientHeight | 0);
                }
                /*private*/ getCSSColorText() {
                    let colorName = splashjs.utils.ColorName.BLACK;
                    let color = super.getRenderObject().getColor();
                    if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(color.getColorType(), splashjs.utils.ColorType.NAME))
                        colorName = color.getColorName();
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(color.getColorType(), splashjs.utils.ColorType.HEX))
                        colorName = color.getHEX();
                    return colorName;
                }
            }
            text_5.TextRenderer = TextRenderer;
            TextRenderer["__class"] = "splashjs.render.text.TextRenderer";
            TextRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.text.iface.ITextRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(text = render.text || (render.text = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var layout;
        (function (layout) {
            class HorizontalLayoutRenderer extends splashjs.render.layout.LayoutRenderer {
                constructor(renderObject) {
                    super();
                    if (this.horizontalLayout === undefined)
                        this.horizontalLayout = null;
                    if (this.htmlDivElement === undefined)
                        this.htmlDivElement = null;
                    this.horizontalLayout = renderObject;
                    super.setRenderObject(renderObject);
                    this.htmlDivElement = document.createElement("div");
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlDivElement));
                }
                add(box) {
                    this.htmlDivElement.appendChild(box.getRenderer().getDOMElement());
                    box.setX(this.horizontalLayout.getWidth());
                    /* add */ (this.horizontalLayout.getAll().push(box) > 0);
                    this.applyCSS();
                }
                applyCSS() {
                    super.applyCSS();
                    this.htmlDivElement.style.border = "1px dashed green";
                    this.htmlDivElement.style.width = this.horizontalLayout.getWidth() + this.UNIT;
                    this.htmlDivElement.style.height = this.horizontalLayout.getHeight() + this.UNIT;
                }
            }
            layout.HorizontalLayoutRenderer = HorizontalLayoutRenderer;
            HorizontalLayoutRenderer["__class"] = "splashjs.render.layout.HorizontalLayoutRenderer";
            HorizontalLayoutRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(layout = render.layout || (render.layout = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var layout;
        (function (layout) {
            class VerticalLayoutRenderer extends splashjs.render.layout.LayoutRenderer {
                constructor(renderObject) {
                    super();
                    if (this.verticalLayout === undefined)
                        this.verticalLayout = null;
                    if (this.htmlDivElement === undefined)
                        this.htmlDivElement = null;
                    this.verticalLayout = renderObject;
                    super.setRenderObject(renderObject);
                    this.htmlDivElement = document.createElement("div");
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlDivElement));
                }
                add(box) {
                    this.htmlDivElement.appendChild(box.getRenderer().getDOMElement());
                    box.setY(this.verticalLayout.getHeight());
                    /* add */ (this.verticalLayout.getAll().push(box) > 0);
                    this.applyCSS();
                }
                applyCSS() {
                    super.applyCSS();
                    this.htmlDivElement.style.border = "1px dashed green";
                    this.htmlDivElement.style.width = this.verticalLayout.getWidth() + this.UNIT;
                    this.htmlDivElement.style.height = this.verticalLayout.getHeight() + this.UNIT;
                }
            }
            layout.VerticalLayoutRenderer = VerticalLayoutRenderer;
            VerticalLayoutRenderer["__class"] = "splashjs.render.layout.VerticalLayoutRenderer";
            VerticalLayoutRenderer["__interfaces"] = ["splashjs.render.layout.iface.IVerticalLayoutRenderer", "splashjs.render.layout.iface.ILayoutRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(layout = render.layout || (render.layout = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var media;
        (function (media) {
            class SoundRenderer extends splashjs.render.media.MediaRenderer {
                constructor(renderObject) {
                    super();
                    if (this.htmlAudioElement === undefined)
                        this.htmlAudioElement = null;
                    super.setRenderObject(renderObject);
                    this.htmlAudioElement = document.createElement("audio");
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlAudioElement));
                    this.htmlAudioElement.addEventListener("canplaythrough", (event) => {
                        this.htmlAudioElement.controls = true;
                        let loadedEvent = new splashjs.events.Event(splashjs.events.Event.LOADED, super.getRenderObject(), super.getRenderObject());
                        super.getRenderObject().dispatchEvent(loadedEvent);
                    });
                    this.htmlAudioElement.addEventListener("click", (event) => {
                        console.info("sound clicked");
                    });
                    this.create();
                }
                create() {
                    this.setPath();
                    document.body.appendChild(this.htmlAudioElement);
                    super.setDisplay("none");
                }
                /**
                 *
                 */
                setPath() {
                    let soundPath = super.getRenderObject().getPath();
                    this.htmlAudioElement.src = soundPath;
                }
                playSound() {
                    let js = "var playPromise = document.getElementById(\"" + super.getRenderObjectID() + "\").play();";
                    js += "if(playPromise !== undefined) {";
                    js += "playPromise.then(() => {console.log(\"playing\");}).catch((error) => {console.log(error.name);});";
                    js += "}";
                    eval(js);
                }
                pauseSound() {
                    this.htmlAudioElement.pause();
                }
                /*private*/ getHTMLAudioElement() {
                    return super.getDOMElement();
                }
            }
            media.SoundRenderer = SoundRenderer;
            SoundRenderer["__class"] = "splashjs.render.media.SoundRenderer";
            SoundRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.media.iface.ISoundRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.media.iface.IMediaRenderer"];
        })(media = render.media || (render.media = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var media;
        (function (media) {
            class VideoRenderer extends splashjs.render.media.MediaRenderer {
                constructor(renderObject) {
                    super();
                    if (this.htmlVideoElement === undefined)
                        this.htmlVideoElement = null;
                    if (this.video === undefined)
                        this.video = null;
                    this.video = renderObject;
                    this.htmlVideoElement = document.createElement("video");
                    super.setRenderObject(renderObject);
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlVideoElement));
                }
                createEventListeners() {
                    super.createEventListeners();
                    this.htmlVideoElement.addEventListener("canplaythrough", (event) => {
                        this.htmlVideoElement.controls = true;
                        let loadedEvent = new splashjs.events.Event(splashjs.events.Event.LOADED, this.video, this.video);
                        this.video.dispatchEvent(loadedEvent);
                    });
                }
                /**
                 *
                 */
                setPath() {
                    let videoPath = super.getRenderObject().getPath();
                    this.htmlVideoElement.src = videoPath;
                }
                playVideo() {
                    let js = "var playPromise = " + super.getRenderObjectID() + ".play();";
                    js += "if(playPromise !== undefined) {";
                    js += "playPromise.then(() => {console.log(\"playing\");}).catch((error) => {console.log(error.name);});";
                    js += "}";
                    eval(js);
                }
                attachCamera(camera) {
                    let mediaStream = camera.getRenderer().getMediaStream();
                    eval("this.videoElement.srcObject = mediaStream");
                }
                attachNetStream(netStream) {
                }
                /*private*/ getHTMLVideoElement() {
                    return super.getDOMElement();
                }
                applyCSS() {
                    super.applyCSS();
                    this.htmlVideoElement.style.width = this.video.getWidth() + this.UNIT;
                    this.htmlVideoElement.style.height = this.video.getHeight() + this.UNIT;
                }
            }
            media.VideoRenderer = VideoRenderer;
            VideoRenderer["__class"] = "splashjs.render.media.VideoRenderer";
            VideoRenderer["__interfaces"] = ["splashjs.render.media.iface.IVideoRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.media.iface.IMediaRenderer"];
        })(media = render.media || (render.media = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        class List extends splashjs.controls.BaseList {
            constructor() {
                super("list");
                /*private*/ this.items = ([]);
                /*private*/ this.isRenderCalled = false;
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(List, this));
            }
            addItem(item) {
                /* add */ (this.items.push(item) > 0);
                super.getRenderer().addItem(item);
            }
            addItemGroup(itemGroup) {
                /* add */ (this.items.push(itemGroup) > 0);
            }
            getAllItems() {
                return this.items;
            }
            render() {
                super.render();
            }
        }
        controls.List = List;
        List["__class"] = "splashjs.controls.List";
        List["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IList", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseList"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        class BaseInput extends splashjs.controls.BaseText {
            constructor(id) {
                super(id);
                /*private*/ this.maxChars = 0;
                /*private*/ this.editable = true;
                if (this.placeHolderText === undefined)
                    this.placeHolderText = null;
                if (this.selectionBeginIndex === undefined)
                    this.selectionBeginIndex = 0;
                if (this.selectionEndIndex === undefined)
                    this.selectionEndIndex = 0;
            }
            setMaxChars(maxChars) {
                this.maxChars = maxChars;
                if (super.getRenderer() != null)
                    super.getRenderer().setMaxChars();
            }
            getMaxChars() {
                return this.maxChars;
            }
            setEditable(editable) {
                this.editable = editable;
            }
            getEditable() {
                return this.editable;
            }
            isEditable() {
                return this.getEditable();
            }
            setPlaceHolderText(placeHolderText) {
                this.placeHolderText = placeHolderText;
                if (super.getRenderer() != null)
                    super.getRenderer().setPlaceHolderText();
            }
            getPlaceHolderText() {
                return this.placeHolderText;
            }
            getSelectionBeginIndex() {
                return this.selectionBeginIndex;
            }
            getSelectionEndIndex() {
                return this.selectionEndIndex;
            }
            setSelection(beginIndex, endIndex) {
                this.selectionBeginIndex = beginIndex;
                this.selectionEndIndex = endIndex;
                if (super.getRenderer() != null)
                    super.getRenderer().setSelection();
            }
            render() {
                super.render();
                super.getRenderer().setMaxChars();
                super.getRenderer().setEditable();
                super.getRenderer().setPlaceHolderText();
            }
        }
        controls.BaseInput = BaseInput;
        BaseInput["__class"] = "splashjs.controls.BaseInput";
        BaseInput["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.controls.iface.IBaseInput", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseText"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        class Button extends splashjs.controls.BaseText {
            constructor(text) {
                super("button");
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Button, this));
                super.setText(text);
            }
            dispatchEvent(event) {
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.originalWidth = super.getRenderer().getOriginalWidth();
                    if (this.width === 0 && this.originalWidth !== 0) {
                        super.setWidth(this.originalWidth);
                    }
                    this.originalHeight = super.getRenderer().getOriginalHeight();
                    if (this.height === 0 && this.originalHeight !== 0) {
                        super.setHeight(this.originalHeight);
                    }
                    super.getRenderer().refresh();
                }
                return super.dispatchEvent(event);
            }
            /**
             *
             * @param {number} width
             */
            setWidth(width) {
                super.setWidth(width);
            }
            /**
             *
             * @return {number}
             */
            getWidth() {
                return super.getRenderer().getWidth();
            }
            /**
             *
             * @param {number} height
             */
            setHeight(height) {
                super.setHeight(height);
            }
            /**
             *
             * @return {number}
             */
            getHeight() {
                return super.getRenderer().getHeight();
            }
            /**
             *
             * @param {number} scaleX
             */
            setScaleX(scaleX) {
                this.scaleX = scaleX;
                super.setWidth(((scaleX | 0) * this.originalWidth));
            }
            /**
             *
             * @return {number}
             */
            getScaleX() {
                return this.scaleX;
            }
            /**
             *
             * @param {number} scaleY
             */
            setScaleY(scaleY) {
                this.scaleY = scaleY;
                super.setHeight(((scaleY | 0) * this.originalHeight));
            }
            /**
             *
             * @return {number}
             */
            getScaleY() {
                return this.scaleY;
            }
            /**
             *
             * @param {number} width
             * @param {number} height
             */
            setSize(width, height) {
                super.setWidth(width);
                super.setHeight(height);
            }
            /**
             *
             * @param {number} scaleX
             * @param {number} scaleY
             */
            setScaleXY(scaleX, scaleY) {
                this.setScaleX(scaleX);
                this.setScaleY(scaleY);
            }
            render() {
                super.render();
                if (super.getWidth() !== 0)
                    super.getRenderer().setWidth();
                if (super.getHeight() !== 0)
                    super.getRenderer().setHeight();
            }
        }
        controls.Button = Button;
        Button["__class"] = "splashjs.controls.Button";
        Button["__interfaces"] = ["splashjs.controls.iface.IButton", "splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseText"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        class Label extends splashjs.controls.BaseText {
            constructor(text) {
                super("label");
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Label, this));
                super.setText(text);
            }
            dispatchEvent(event) {
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.originalWidth = super.getRenderer().getOriginalWidth();
                    this.originalHeight = super.getRenderer().getOriginalHeight();
                    if (this.width === 0 && this.originalWidth !== 0)
                        super.setWidth(this.originalWidth);
                    if (this.height === 0 && this.originalHeight !== 0)
                        super.setHeight(this.originalHeight);
                }
                return super.dispatchEvent(event);
            }
        }
        controls.Label = Label;
        Label["__class"] = "splashjs.controls.Label";
        Label["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.controls.iface.ILabel", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseText"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        class MovieClip extends splashjs.display.Sprite {
            constructor(movieClipData) {
                if (((movieClipData != null && (movieClipData["__interfaces"] != null && movieClipData["__interfaces"].indexOf("splashjs.animation.iface.IMovieClipData") >= 0 || movieClipData.constructor != null && movieClipData.constructor["__interfaces"] != null && movieClipData.constructor["__interfaces"].indexOf("splashjs.animation.iface.IMovieClipData") >= 0)) || movieClipData === null)) {
                    let __args = arguments;
                    super("movieClip");
                    if (this.movieClipsData === undefined)
                        this.movieClipsData = null;
                    this.frameRate = 10;
                    if (this.movieClipsData === undefined)
                        this.movieClipsData = null;
                    (() => {
                        this.movieClipsData = ([]);
                        /* add */ (this.movieClipsData.push(movieClipData) > 0);
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(MovieClip, this));
                        this.init();
                    })();
                }
                else if (((movieClipData != null && (movieClipData instanceof Array)) || movieClipData === null)) {
                    let __args = arguments;
                    let movieClipsData = __args[0];
                    super("movieClip");
                    if (this.movieClipsData === undefined)
                        this.movieClipsData = null;
                    this.frameRate = 10;
                    if (this.movieClipsData === undefined)
                        this.movieClipsData = null;
                    (() => {
                        this.movieClipsData = movieClipsData;
                        super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(MovieClip, this));
                        this.init();
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            /*private*/ init() {
                if (this.getAllLabels().length > 0) {
                    this.gotoAndStop(/* get */ this.getAllLabels()[0]);
                }
            }
            getMovieClipDataByLabel(label) {
                let movieClipData = null;
                for (let i = 0; i < this.movieClipsData.length; i++) {
                    {
                        if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(/* get */ this.movieClipsData[i].getLabel(), label)) {
                            movieClipData = this.movieClipsData[i];
                            break;
                        }
                    }
                    ;
                }
                return movieClipData;
            }
            setFrameRate(frameRate) {
                this.frameRate = frameRate;
            }
            getFrameRate() {
                return this.frameRate;
            }
            gotoAndStop(label, frameIndex = 0) {
                super.getRenderer().gotoAndStop(label, frameIndex);
            }
            gotoAndPlay(label, loopCount = 1) {
                super.getRenderer().gotoAndPlay(label, loopCount);
            }
            getCurrentLabel() {
                return super.getRenderer().getCurrentLabel();
            }
            getCurrentFrameIndex() {
                return super.getRenderer().getCurrentFrameIndex();
            }
            isPlaying$() {
                return super.getRenderer().isPlaying();
            }
            isPlaying$java_lang_String(label) {
                return super.getRenderer()['isPlaying$java_lang_String'](label);
            }
            isPlaying(label) {
                if (((typeof label === 'string') || label === null)) {
                    return this.isPlaying$java_lang_String(label);
                }
                else if (label === undefined) {
                    return this.isPlaying$();
                }
                else
                    throw new Error('invalid overload');
            }
            getCurrentLoopCount() {
                return super.getRenderer().getCurrentLoopCount();
            }
            isLooping() {
                return super.getRenderer().isLooping();
            }
            getAllLabels() {
                let labels = ([]);
                for (let i = 0; i < this.movieClipsData.length; i++) {
                    {
                        /* add */ (labels.push(/* get */ this.movieClipsData[i].getLabel()) > 0);
                    }
                    ;
                }
                return labels;
            }
            play() {
                super.getRenderer().play();
            }
            stop() {
                super.getRenderer().stop();
            }
        }
        display.MovieClip = MovieClip;
        MovieClip["__class"] = "splashjs.display.MovieClip";
        MovieClip["__interfaces"] = ["splashjs.display.iface.IDraggable", "splashjs.display.iface.IDisplayObject", "splashjs.display.iface.ISprite", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.display.iface.IMovieClip", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var desktop;
        (function (desktop) {
            class Stage extends splashjs.display.Stage {
                constructor(stageOwnerName, width, height) {
                    super(stageOwnerName, width, height);
                    if (this.nativeWindow === undefined)
                        this.nativeWindow = null;
                }
                setNativeWindow(nativeWindow) {
                    this.nativeWindow = nativeWindow;
                }
                getNativeWindow() {
                    return this.nativeWindow;
                }
            }
            desktop.Stage = Stage;
            Stage["__class"] = "splashjs.display.desktop.Stage";
            Stage["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IStage", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.display.desktop.iface.IStage"];
        })(desktop = display.desktop || (display.desktop = {}));
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var controls;
        (function (controls) {
            class BaseListRenderer extends splashjs.render.controls.ControlRenderer {
                constructor() {
                    super();
                }
            }
            controls.BaseListRenderer = BaseListRenderer;
            BaseListRenderer["__class"] = "splashjs.render.controls.BaseListRenderer";
            BaseListRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.controls.iface.IBaseListRenderer"];
        })(controls = render.controls || (render.controls = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var controls;
        (function (controls) {
            class BaseTextRenderer extends splashjs.render.controls.ControlRenderer {
                constructor() {
                    super();
                }
                setText() {
                    let text = super.getRenderObject().getText();
                    if (text != null)
                        super.getDOMElement().innerText = text;
                    else
                        super.getDOMElement().innerText = "";
                }
            }
            controls.BaseTextRenderer = BaseTextRenderer;
            BaseTextRenderer["__class"] = "splashjs.render.controls.BaseTextRenderer";
            BaseTextRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.controls.iface.IBaseTextRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(controls = render.controls || (render.controls = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var controls;
        (function (controls) {
            class RadioButtonRenderer extends splashjs.render.controls.ControlRenderer {
                constructor(renderObject) {
                    super();
                    if (this.htmlInputElement === undefined)
                        this.htmlInputElement = null;
                    super.setRenderObject(renderObject);
                    this.htmlInputElement = document.createElement("input");
                    this.htmlInputElement.type = "radio";
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlInputElement));
                }
                create() {
                }
                setSelected() {
                    let selected = super.getRenderObject().getSelected();
                    if (selected === true)
                        this.htmlInputElement.checked = true;
                    else if (selected === false)
                        this.htmlInputElement.checked = false;
                }
                setGroup() {
                    let group = super.getRenderObject().getGroup();
                    if (group != null)
                        this.htmlInputElement.name = group.getName();
                    else if (group == null)
                        this.htmlInputElement.removeAttribute("name");
                }
            }
            controls.RadioButtonRenderer = RadioButtonRenderer;
            RadioButtonRenderer["__class"] = "splashjs.render.controls.RadioButtonRenderer";
            RadioButtonRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.controls.iface.IRadioButtonRenderer"];
        })(controls = render.controls || (render.controls = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var controls;
        (function (controls) {
            class TreeRenderer extends splashjs.render.controls.ControlRenderer {
                constructor(renderObject) {
                    super();
                    this.px = 0;
                    this.py = 0;
                    if (this.container === undefined)
                        this.container = null;
                    if (this.htmlSpanElement === undefined)
                        this.htmlSpanElement = null;
                    super.setRenderObject(renderObject);
                    this.htmlSpanElement = document.createElement("span");
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlSpanElement));
                    this.create();
                }
                create() {
                    let jsRootObject = super.getRenderObject().getTreeData();
                    if (jsRootObject != null) {
                        this.container = new splashjs.display.Sprite();
                    }
                }
            }
            controls.TreeRenderer = TreeRenderer;
            TreeRenderer["__class"] = "splashjs.render.controls.TreeRenderer";
            TreeRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.controls.iface.ITreeRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(controls = render.controls || (render.controls = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            class SceneRenderer extends splashjs.render.display.DisplayObjectContainerRenderer {
                constructor(renderObject) {
                    super();
                    if (this.htmlDivElement === undefined)
                        this.htmlDivElement = null;
                    super.setRenderObject(renderObject);
                    this.htmlDivElement = document.createElement("div");
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlDivElement));
                }
                applyCSS() {
                    this.htmlDivElement.style.display = "inline-block";
                }
            }
            display.SceneRenderer = SceneRenderer;
            SceneRenderer["__class"] = "splashjs.render.display.SceneRenderer";
            SceneRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.display.iface.IDisplayObjectContainerRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            class SpriteRenderer extends splashjs.render.display.DisplayObjectContainerRenderer {
                constructor(renderObject) {
                    super();
                    super.setRenderObject(renderObject);
                    super.setRenderElement(new splashjs.render.RenderElement(document.createElement("span")));
                }
            }
            display.SpriteRenderer = SpriteRenderer;
            SpriteRenderer["__class"] = "splashjs.render.display.SpriteRenderer";
            SpriteRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.display.iface.IDisplayObjectContainerRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            class StageRenderer extends splashjs.render.display.DisplayObjectContainerRenderer {
                constructor(renderObject) {
                    super();
                    if (this.timer === undefined)
                        this.timer = null;
                    if (this.htmlSpanElement === undefined)
                        this.htmlSpanElement = null;
                    if (this.stage === undefined)
                        this.stage = null;
                    super.setRenderObject(renderObject);
                    this.stage = renderObject;
                    this.htmlSpanElement = document.createElement("span");
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlSpanElement));
                    this.timer = new java.util.Timer();
                }
                /**
                 *
                 */
                createEventListeners() {
                    super.createEventListeners();
                    this.htmlSpanElement.tabIndex = 0;
                    this.htmlSpanElement.addEventListener(splashjs.render.HTMLDomEventName.KEYPRESS, (event) => {
                        let domKeyboardEvent = event;
                        let loc = (new Number(domKeyboardEvent.location).valueOf() | 0);
                        let location = loc + "";
                        if (loc === domKeyboardEvent.DOM_KEY_LOCATION_STANDARD)
                            location = splashjs.ui.KeyLocation.STANDARD;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_LEFT)
                            location = splashjs.ui.KeyLocation.LEFT;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_RIGHT)
                            location = splashjs.ui.KeyLocation.RIGHT;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_NUMPAD)
                            location = splashjs.ui.KeyLocation.NUMPAD;
                        let charCode = (new Number(domKeyboardEvent.charCode).valueOf() | 0);
                        let keyCode = (new Number(domKeyboardEvent.keyCode).valueOf() | 0);
                        let which = (new Number(domKeyboardEvent.which).valueOf() | 0);
                        let keyboardEvent = new splashjs.events.KeyboardEvent(splashjs.events.KeyboardEvent.KEY_PRESS, domKeyboardEvent.altKey, charCode, domKeyboardEvent.char, domKeyboardEvent.ctrlKey, domKeyboardEvent.key, keyCode, location, domKeyboardEvent.metaKey, domKeyboardEvent.repeat, domKeyboardEvent.shiftKey, which);
                        this.getRenderObject().dispatchEvent(keyboardEvent);
                    });
                    this.htmlSpanElement.addEventListener(splashjs.render.HTMLDomEventName.KEYUP, (event) => {
                        let domKeyboardEvent = event;
                        let loc = (new Number(domKeyboardEvent.location).valueOf() | 0);
                        let location = loc + "";
                        if (loc === domKeyboardEvent.DOM_KEY_LOCATION_STANDARD)
                            location = splashjs.ui.KeyLocation.STANDARD;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_LEFT)
                            location = splashjs.ui.KeyLocation.LEFT;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_RIGHT)
                            location = splashjs.ui.KeyLocation.RIGHT;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_NUMPAD)
                            location = splashjs.ui.KeyLocation.NUMPAD;
                        let charCode = (new Number(domKeyboardEvent.charCode).valueOf() | 0);
                        let keyCode = (new Number(domKeyboardEvent.keyCode).valueOf() | 0);
                        let which = (new Number(domKeyboardEvent.which).valueOf() | 0);
                        let keyboardEvent = new splashjs.events.KeyboardEvent(splashjs.events.KeyboardEvent.KEY_UP, domKeyboardEvent.altKey, charCode, domKeyboardEvent.char, domKeyboardEvent.ctrlKey, domKeyboardEvent.key, keyCode, location, domKeyboardEvent.metaKey, domKeyboardEvent.repeat, domKeyboardEvent.shiftKey, which);
                        this.getRenderObject().dispatchEvent(keyboardEvent);
                    });
                    this.htmlSpanElement.addEventListener(splashjs.render.HTMLDomEventName.KEYDOWN, (event) => {
                        let domKeyboardEvent = event;
                        let loc = (new Number(domKeyboardEvent.location).valueOf() | 0);
                        let location = loc + "";
                        if (loc === domKeyboardEvent.DOM_KEY_LOCATION_STANDARD)
                            location = splashjs.ui.KeyLocation.STANDARD;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_LEFT)
                            location = splashjs.ui.KeyLocation.LEFT;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_RIGHT)
                            location = splashjs.ui.KeyLocation.RIGHT;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_NUMPAD)
                            location = splashjs.ui.KeyLocation.NUMPAD;
                        let charCode = (new Number(domKeyboardEvent.charCode).valueOf() | 0);
                        let keyCode = (new Number(domKeyboardEvent.keyCode).valueOf() | 0);
                        let which = (new Number(domKeyboardEvent.which).valueOf() | 0);
                        let keyboardEvent = new splashjs.events.KeyboardEvent(splashjs.events.KeyboardEvent.KEY_DOWN, domKeyboardEvent.altKey, charCode, domKeyboardEvent.char, domKeyboardEvent.ctrlKey, domKeyboardEvent.key, keyCode, location, domKeyboardEvent.metaKey, domKeyboardEvent.repeat, domKeyboardEvent.shiftKey, which);
                        this.getRenderObject().dispatchEvent(keyboardEvent);
                    });
                }
                getStageWidth() {
                    let stageOwner = this.stage.getStageOwner();
                    return (stageOwner.getRenderer().getDOMElement().clientWidth | 0);
                }
                getStageHeight() {
                    let stageOwner = this.stage.getStageOwner();
                    return (stageOwner.getRenderer().getDOMElement().clientHeight | 0);
                }
                /**
                 *
                 */
                setColor() {
                    let color = this.stage.getColor();
                    let stageOwner = this.stage.getStageOwner();
                    if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(color.getColorType(), splashjs.utils.ColorType.GRADIENT)) {
                    }
                    else {
                        stageOwner.getRenderer().getDOMElement().style.backgroundColor = this.getCSSColorText();
                    }
                }
                /**
                 *
                 */
                startEnterFrameExitFrameDispatcherLoop() {
                    this.timer.scheduleAtFixedRate$java_util_TimerTask$long$long(new StageRenderer.StageRenderer$0(this), 0, 15);
                }
                setScene() {
                    let scene = this.stage.getScene();
                    this.appendChild(scene.getRenderer());
                    let addedToStageEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, scene, scene);
                    scene.dispatchEvent(addedToStageEvent);
                }
                removeScene() {
                    let scene = this.stage.getScene();
                    this.removeChild(scene.getRenderer());
                    let removedFromStage = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, scene, scene);
                    scene.dispatchEvent(removedFromStage);
                }
                getCSSColorText() {
                    let colorName = splashjs.utils.ColorName.BLACK;
                    let color = super.getRenderObject().getColor();
                    if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(color.getColorType(), splashjs.utils.ColorType.NAME))
                        colorName = color.getColorName();
                    else if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(color.getColorType(), splashjs.utils.ColorType.HEX))
                        colorName = color.getHEX();
                    return colorName;
                }
            }
            display.StageRenderer = StageRenderer;
            StageRenderer["__class"] = "splashjs.render.display.StageRenderer";
            StageRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.display.iface.IStageRenderer", "splashjs.render.display.iface.IDisplayObjectContainerRenderer"];
            (function (StageRenderer) {
                class StageRenderer$0 extends java.util.TimerTask {
                    constructor(__parent) {
                        super();
                        this.__parent = __parent;
                    }
                    run() {
                        this.__parent.getRenderObject().dispatchEvent(new splashjs.events.Event(splashjs.events.Event.ENTER_FRAME));
                        this.__parent.getRenderObject().dispatchEvent(new splashjs.events.Event(splashjs.events.Event.EXIT_FRAME));
                    }
                }
                StageRenderer.StageRenderer$0 = StageRenderer$0;
                StageRenderer$0["__interfaces"] = ["java.lang.Runnable"];
            })(StageRenderer = display.StageRenderer || (display.StageRenderer = {}));
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            class CircleRenderer extends splashjs.render.display.ShapeRenderer {
                constructor(renderObject) {
                    super();
                    super.setRenderObject(renderObject);
                    super.setRenderElement(new splashjs.render.RenderElement(document.createElementNS(this.SVGNS, "svg")));
                    this.create();
                }
                create() {
                    this.childSVGElement = document.createElementNS(this.SVGNS, "circle");
                    this.setCircleAttributes();
                    this.getSVGElement().appendChild(this.childSVGElement);
                }
                update() {
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
                setRadius() {
                    this.childSVGElement.setAttributeNS(null, "r", this.getSVGCircleRadiusText());
                    this.childSVGElement.setAttributeNS(null, "cx", this.getSVGCircleCenterXText());
                    this.childSVGElement.setAttributeNS(null, "cy", this.getSVGCircleCenterYText());
                    this.getSVGElement().setAttributeNS(null, "height", this.getSVGCircleHeightText());
                    this.getSVGElement().setAttributeNS(null, "width", this.getSVGCircleWidthText());
                }
                getOriginalWidth() {
                    return parseInt(this.getSVGCircleWidthText());
                }
                getOriginalHeight() {
                    return parseInt(this.getSVGCircleHeightText());
                }
            }
            display.CircleRenderer = CircleRenderer;
            CircleRenderer["__class"] = "splashjs.render.display.CircleRenderer";
            CircleRenderer["__interfaces"] = ["splashjs.render.display.iface.ICircleRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.display.iface.IShapeRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            class LineRenderer extends splashjs.render.display.ShapeRenderer {
                constructor(renderObject) {
                    super();
                    super.setRenderObject(renderObject);
                    super.setRenderElement(new splashjs.render.RenderElement(document.createElementNS(this.SVGNS, "svg")));
                    this.create();
                }
                /**
                 *
                 */
                create() {
                    this.childSVGElement = document.createElementNS(this.SVGNS, "line");
                    this.setLineAttributes();
                    super.getSVGElement().appendChild(this.childSVGElement);
                }
                update() {
                    if (this.childSVGElement != null) {
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
                    super.getRenderObject().setWidth(/* parseInt */ parseInt(this.getWidthAsString()));
                    super.getRenderObject().setHeight(/* parseInt */ parseInt(this.getHeightAsString()));
                }
                getOriginalWidth() {
                    return parseInt(this.getSVGLineWidthText());
                }
                getOriginalHeight() {
                    return parseInt(this.getSVGLineHeightText());
                }
                /*private*/ getWidthAsString() {
                    let width = "0";
                    width = super.getRenderObject().getLength() + "";
                    return width;
                }
                /*private*/ getHeightAsString() {
                    let height = "0";
                    height = this.getStrokeWidthAsString();
                    return height;
                }
            }
            display.LineRenderer = LineRenderer;
            LineRenderer["__class"] = "splashjs.render.display.LineRenderer";
            LineRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.display.iface.IShapeRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            class RectangleRenderer extends splashjs.render.display.ShapeRenderer {
                constructor(renderObject) {
                    super();
                    super.setRenderObject(renderObject);
                    super.setRenderElement(new splashjs.render.RenderElement(document.createElementNS(this.SVGNS, "svg")));
                }
                create() {
                    this.childSVGElement = document.createElementNS(this.SVGNS, "rect");
                    this.setRectangleAttributes();
                    this.getSVGElement().appendChild(this.childSVGElement);
                }
                update() {
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
                    super.getRenderObject().setWidth(/* parseInt */ parseInt(this.getRectangleWidthAsString()));
                    super.getRenderObject().setHeight(/* parseInt */ parseInt(this.getRectangleHeightAsString()));
                }
                /*private*/ getCornerRadiusXAsString() {
                    let cornerRadiusX = "0";
                    cornerRadiusX = super.getRenderObject().getCornerRadiusX() + "";
                    return cornerRadiusX;
                }
                /*private*/ getCornerRadiusYAsString() {
                    let cornerRadiusY = "0";
                    cornerRadiusY = super.getRenderObject().getCornerRadiusY() + "";
                    return cornerRadiusY;
                }
                /*private*/ getRectangleWidthAsString() {
                    let width = "0";
                    width = super.getRenderObject().getRectangleWidth() + "";
                    return width;
                }
                /*private*/ getRectangleHeightAsString() {
                    let height = "0";
                    height = super.getRenderObject().getRectangleHeight() + "";
                    return height;
                }
                setCornerRadiusX() {
                    this.childSVGElement.setAttributeNS(null, "rx", this.getCornerRadiusXAsString());
                }
                setCorcnerRadiusY() {
                    this.childSVGElement.setAttributeNS(null, "ry", this.getCornerRadiusYAsString());
                }
                setRectangleWidth() {
                    this.childSVGElement.setAttributeNS(null, "width", this.getRectangleWidthAsString());
                }
                setRectangleHeight() {
                    this.childSVGElement.setAttributeNS(null, "height", this.getRectangleHeightAsString());
                }
            }
            display.RectangleRenderer = RectangleRenderer;
            RectangleRenderer["__class"] = "splashjs.render.display.RectangleRenderer";
            RectangleRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.display.iface.IShapeRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.display.iface.IRectangleRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var text;
        (function (text) {
            class DynamicTextRenderer extends splashjs.render.text.TextRenderer {
                constructor() {
                    super();
                }
                getClientWidth() {
                    return (this.getDOMElement().clientWidth | 0);
                }
                getClientHeight() {
                    return (this.getDOMElement().clientHeight | 0);
                }
            }
            text.DynamicTextRenderer = DynamicTextRenderer;
            DynamicTextRenderer["__class"] = "splashjs.render.text.DynamicTextRenderer";
            DynamicTextRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.text.iface.ITextRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(text = render.text || (render.text = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var text;
        (function (text) {
            class InputTextRenderer extends splashjs.render.text.TextRenderer {
                constructor(renderObject) {
                    super();
                    if (this.htmlInputElement === undefined)
                        this.htmlInputElement = null;
                    super.setRenderObject(renderObject);
                    this.htmlInputElement = document.createElement("input");
                    this.htmlInputElement.setAttribute("type", "text");
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlInputElement));
                    this.applyCSS();
                    this.createEventListeners();
                }
                create() {
                }
                createEventListeners() {
                    super.createEventListeners();
                    this.htmlInputElement.addEventListener(splashjs.render.HTMLDomEventName.CHANGE, (event) => {
                        console.info("change");
                        let changeEvent = new splashjs.events.Event(splashjs.events.Event.CHANGE, this.getRenderObject(), this.getRenderObject());
                        this.getRenderObject().dispatchEvent(changeEvent);
                    });
                }
                setText() {
                    let txt = super.getRenderObject().getText();
                    if (txt != null)
                        this.htmlInputElement.setAttribute("value", txt);
                }
                setPlaceholder() {
                    let placeholder = super.getRenderObject().getPlaceholder();
                    if (placeholder != null)
                        this.htmlInputElement.setAttribute("placeholder", placeholder);
                }
                setBackgroundColor() {
                    let backgroundColor = super.getRenderObject().getBackgroundColor();
                    if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(backgroundColor.getColorType(), splashjs.utils.ColorType.NAME)) {
                        let colorName = backgroundColor.getColorName();
                        if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(colorName, splashjs.utils.ColorName.NONE)) {
                            this.htmlInputElement.style.background = "none";
                        }
                        else {
                            this.htmlInputElement.style.backgroundColor = colorName;
                        }
                    }
                }
                setBorderColor() {
                    let borderColor = super.getRenderObject().getBorderColor();
                    if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(borderColor.getColorType(), splashjs.utils.ColorType.NAME)) {
                        let colorName = borderColor.getColorName();
                        if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(colorName, splashjs.utils.ColorName.NONE)) {
                            this.htmlInputElement.style.border = "none";
                        }
                        else {
                            this.htmlInputElement.style.borderColor = colorName;
                        }
                    }
                }
                getClientWidth() {
                    return (this.getDOMElement().clientWidth | 0);
                }
                getClientHeight() {
                    return (this.getDOMElement().clientHeight | 0);
                }
                /**
                 *
                 */
                applyCSS() {
                    this.htmlInputElement.style.background = "none";
                    this.htmlInputElement.style.borderWidth = "1px";
                    this.htmlInputElement.style.borderColor = "#000000";
                }
            }
            text.InputTextRenderer = InputTextRenderer;
            InputTextRenderer["__class"] = "splashjs.render.text.InputTextRenderer";
            InputTextRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.text.iface.ITextRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.text.iface.IInputTextRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(text = render.text || (render.text = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var text;
        (function (text) {
            class StaticTextRenderer extends splashjs.render.text.TextRenderer {
                constructor(renderObject) {
                    super();
                    if (this.htmlParagraphElement === undefined)
                        this.htmlParagraphElement = null;
                    super.setRenderObject(renderObject);
                    this.htmlParagraphElement = document.createElement("p");
                    this.renderElement = new splashjs.render.RenderElement(this.htmlParagraphElement);
                }
                create() {
                    this.htmlParagraphElement.innerText = super.getRenderObject().getText();
                }
                getOriginalWidth() {
                    return (this.getDOMElement().clientWidth | 0);
                }
                getOriginalHeight() {
                    return (this.getDOMElement().clientHeight | 0);
                }
                setText() {
                    this.htmlParagraphElement.innerText = super.getRenderObject().getText();
                }
                /*private*/ getHTMLParagraphElement() {
                    let htmlParagraphElement = this.getDOMElement();
                    return htmlParagraphElement;
                }
            }
            text.StaticTextRenderer = StaticTextRenderer;
            StaticTextRenderer["__class"] = "splashjs.render.text.StaticTextRenderer";
            StaticTextRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.text.iface.ITextRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.text.iface.IStaticTextRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(text = render.text || (render.text = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        class TextArea extends splashjs.controls.BaseInput {
            constructor() {
                super("textArea");
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(TextArea, this));
            }
            dispatchEvent(event) {
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.originalWidth = super.getRenderer().getOriginalWidth();
                    this.originalHeight = super.getRenderer().getOriginalHeight();
                    if (this.width === 0 && this.originalWidth !== 0)
                        super.setWidth(this.originalWidth);
                    if (this.height === 0 && this.originalHeight !== 0)
                        super.setHeight(this.originalHeight);
                }
                return super.dispatchEvent(event);
            }
            /**
             *
             */
            render() {
                super.render();
                super.getRenderer().setResize("none");
            }
        }
        controls.TextArea = TextArea;
        TextArea["__class"] = "splashjs.controls.TextArea";
        TextArea["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.controls.iface.IBaseInput", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.ITextArea", "splashjs.controls.iface.IBaseText"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        class TextInput extends splashjs.controls.BaseInput {
            constructor() {
                super("textInput");
                /*private*/ this.displayAsPassword = false;
                super.setRenderer(splashjs.Global.global_$LI$().getRendererCreator().createRenderer(TextInput, this));
            }
            setDisplayAsPassword(displayAsPassword) {
                this.displayAsPassword = displayAsPassword;
            }
            getDisplayAsPassword() {
                return this.displayAsPassword;
            }
            dispatchEvent(event) {
                if (((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.originalWidth = super.getRenderer().getOriginalWidth();
                    this.originalHeight = super.getRenderer().getOriginalHeight();
                    if (this.width === 0 && this.originalWidth !== 0)
                        super.setWidth(this.originalWidth);
                    if (this.height === 0 && this.originalHeight !== 0)
                        super.setHeight(this.originalHeight);
                }
                return super.dispatchEvent(event);
            }
            /**
             *
             * @param {string} text
             */
            setText(text) {
                this.text = text;
                if (super.getRenderer() != null)
                    super.getRenderer().setText();
            }
            /**
             *
             */
            render() {
                super.render();
                super.getRenderer().setDisplayAsPassword();
                super.getRenderer().setText();
            }
        }
        controls.TextInput = TextInput;
        TextInput["__class"] = "splashjs.controls.TextInput";
        TextInput["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.controls.iface.IBaseInput", "splashjs.display.iface.IInteractiveObject", "splashjs.controls.iface.ITextInput", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseText"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var controls;
        (function (controls) {
            class ListRenderer extends splashjs.render.controls.BaseListRenderer {
                constructor(renderObject) {
                    super();
                    if (this.htmlSelectElement === undefined)
                        this.htmlSelectElement = null;
                    super.setRenderObject(renderObject);
                    this.htmlSelectElement = document.createElement("select");
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlSelectElement));
                }
                create() {
                }
                addItem(item) {
                    let option = document.createElement("option");
                    option.text = item.getText();
                    this.htmlSelectElement.add(option);
                }
                addItemGroup(itemGroup) {
                    let optGroup = document.createElement("optgroup");
                    optGroup.label = itemGroup.getTitle();
                    let items = itemGroup.getAllItems();
                    let option = null;
                    let item = null;
                    for (let i = 0; i < items.length; i++) {
                        {
                            item = items[i];
                            option = document.createElement("option");
                            option.text = item.getText();
                            optGroup.appendChild(option);
                        }
                        ;
                    }
                    this.htmlSelectElement.add(optGroup);
                }
                addAllItems() {
                    let items = super.getRenderObject().getAllItems();
                    let baseItem = null;
                    let option = null;
                    console.info(/* size */ items.length);
                    for (let i = 0; i < items.length; i++) {
                        {
                            baseItem = items[i];
                            if (baseItem != null && (baseItem["__interfaces"] != null && baseItem["__interfaces"].indexOf("splashjs.controls.iface.IItem") >= 0 || baseItem.constructor != null && baseItem.constructor["__interfaces"] != null && baseItem.constructor["__interfaces"].indexOf("splashjs.controls.iface.IItem") >= 0)) {
                                this.addItem(baseItem);
                            }
                            else if (baseItem != null && (baseItem["__interfaces"] != null && baseItem["__interfaces"].indexOf("splashjs.controls.iface.IItemGroup") >= 0 || baseItem.constructor != null && baseItem.constructor["__interfaces"] != null && baseItem.constructor["__interfaces"].indexOf("splashjs.controls.iface.IItemGroup") >= 0)) {
                                this.addItemGroup(baseItem);
                            }
                        }
                        ;
                    }
                }
            }
            controls.ListRenderer = ListRenderer;
            ListRenderer["__class"] = "splashjs.render.controls.ListRenderer";
            ListRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.controls.iface.IListRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.controls.iface.IBaseListRenderer"];
        })(controls = render.controls || (render.controls = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var controls;
        (function (controls) {
            class BaseInputRenderer extends splashjs.render.controls.BaseTextRenderer {
                constructor() {
                    super();
                }
                createEventListeners() {
                    super.createEventListeners();
                    super.getDOMElement().addEventListener(splashjs.render.HTMLDomEventName.SELECT, (event) => {
                    });
                }
                setPlaceHolderText() {
                    let placeHolderText = super.getRenderObject().getPlaceHolderText();
                    if (placeHolderText != null)
                        super.getDOMElement().setAttribute("placeHolder", placeHolderText);
                    else
                        super.getDOMElement().setAttribute("placeHolder", "");
                }
                setMaxChars() {
                    let maxChars = super.getRenderObject().getMaxChars();
                    if (maxChars >= 1)
                        super.getDOMElement().setAttribute("maxLength", maxChars + "");
                }
                setEditable() {
                    let editable = super.getRenderObject().getEditable();
                    if (editable === true)
                        super.getDOMElement().removeAttribute("readOnly");
                    else if (editable === false)
                        super.getDOMElement().setAttribute("readOnly", "readonly");
                }
            }
            controls.BaseInputRenderer = BaseInputRenderer;
            BaseInputRenderer["__class"] = "splashjs.render.controls.BaseInputRenderer";
            BaseInputRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.controls.iface.IBaseTextRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.controls.iface.IBaseInputRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(controls = render.controls || (render.controls = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var controls;
        (function (controls) {
            class ButtonRenderer extends splashjs.render.controls.BaseTextRenderer {
                constructor(renderObject) {
                    super();
                    if (this.htmlInputElement === undefined)
                        this.htmlInputElement = null;
                    super.setRenderObject(renderObject);
                    this.htmlInputElement = document.createElement("input");
                    this.htmlInputElement.type = "button";
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlInputElement));
                }
                create() {
                    this.setText();
                }
                setText() {
                    let text = super.getRenderObject().getText();
                    if (text != null)
                        this.htmlInputElement.value = text;
                }
                getWidth() {
                    return (this.htmlInputElement.clientWidth | 0);
                }
                getHeight() {
                    return (this.htmlInputElement.clientHeight | 0);
                }
            }
            controls.ButtonRenderer = ButtonRenderer;
            ButtonRenderer["__class"] = "splashjs.render.controls.ButtonRenderer";
            ButtonRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.controls.iface.IBaseTextRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.controls.iface.IButtonRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(controls = render.controls || (render.controls = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var controls;
        (function (controls) {
            class LabelRenderer extends splashjs.render.controls.BaseTextRenderer {
                constructor(renderObject) {
                    super();
                    if (this.htmlParagraphElement === undefined)
                        this.htmlParagraphElement = null;
                    super.setRenderObject(renderObject);
                    this.htmlParagraphElement = document.createElement("p");
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlParagraphElement));
                    this.create();
                }
                create() {
                    super.setText();
                }
            }
            controls.LabelRenderer = LabelRenderer;
            LabelRenderer["__class"] = "splashjs.render.controls.LabelRenderer";
            LabelRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.controls.iface.IBaseTextRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.controls.iface.ILabelRenderer"];
        })(controls = render.controls || (render.controls = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            class MovieClipRenderer extends splashjs.render.display.SpriteRenderer {
                constructor(renderObject) {
                    super(renderObject);
                    this.count = 0;
                    this.currentLoopCount = 0;
                    this.loopCount = 1;
                    /*private*/ this.playing = false;
                    /*private*/ this.currentLabel = null;
                    /*private*/ this.currentFrameIndex = -1;
                    if (this.spanElement === undefined)
                        this.spanElement = null;
                    if (this.movieClip === undefined)
                        this.movieClip = null;
                    if (this.timer === undefined)
                        this.timer = null;
                    this.movieClip = super.getRenderObject();
                    this.spanElement = super.getDOMElement();
                    this.create();
                }
                create() {
                }
                gotoAndStop(label, frameIndex) {
                    this.stop();
                    let movieClipData = this.movieClip.getMovieClipDataByLabel(label);
                    let spriteSheet = movieClipData.getSpriteSheet();
                    let imagePath = spriteSheet.getImagePath();
                    let resource = spriteSheet.getResource();
                    let imageBase64 = "";
                    if (resource != null)
                        imageBase64 = resource.getResourceBase64();
                    else
                        imageBase64 = spriteSheet.getImageBase64();
                    let frames = movieClipData.getFrames();
                    let totalFrames = frames.length;
                    this.spanElement.style.width = frames[frameIndex].getWidth() + this.UNIT;
                    this.spanElement.style.height = frames[frameIndex].getHeight() + this.UNIT;
                    this.spanElement.style.backgroundImage = "url(\"" + imagePath + "\")";
                    let imageFrameIndex = frames[frameIndex].getIndex();
                    let frameWidth = frames[frameIndex].getWidth();
                    let frameHeight = frames[frameIndex].getHeight();
                    let framePerRow = (spriteSheet.getWidth() / frameWidth | 0);
                    let framePerColumn = (spriteSheet.getHeight() / frameHeight | 0);
                    let x = -(imageFrameIndex % framePerRow) * frameWidth;
                    let y = -((imageFrameIndex / framePerRow | 0)) * frameHeight;
                    this.spanElement.style.backgroundPosition = x + this.UNIT + " " + y + this.UNIT;
                    this.currentLabel = label;
                    this.currentFrameIndex = frameIndex;
                }
                gotoAndPlay(label, loopCount) {
                    this.stop();
                    this.loopCount = loopCount;
                    let movieClipData = this.movieClip.getMovieClipDataByLabel(label);
                    let spriteSheet = movieClipData.getSpriteSheet();
                    let imagePath = spriteSheet.getImagePath();
                    let frames = movieClipData.getFrames();
                    let totalFrames = frames.length;
                    if (totalFrames <= 1) {
                        this.gotoAndStop(label, 0);
                        return;
                    }
                    let resource = spriteSheet.getResource();
                    let imageBase64 = "";
                    if (resource != null)
                        imageBase64 = resource.getResourceBase64();
                    else
                        imageBase64 = spriteSheet.getImageBase64();
                    this.spanElement.style.width = frames[0].getWidth() + this.UNIT;
                    this.spanElement.style.height = frames[0].getHeight() + this.UNIT;
                    this.spanElement.style.backgroundImage = "url(\"" + imagePath + "\")";
                    let frameRate = this.movieClip.getFrameRate();
                    let interval = ((1000 | 0) / frameRate | 0);
                    this.count = 0;
                    this.currentLoopCount = 0;
                    this.timer = new splashjs.utils.Timer(interval);
                    this.timer.addEventListener(splashjs.events.TimerEvent.TIMER, ((frames, spriteSheet, totalFrames) => {
                        return (event) => {
                            requestAnimationFrame((time) => {
                                let frameIndex = frames[this.count].getIndex();
                                let frameWidth = frames[this.count].getWidth();
                                let frameHeight = frames[this.count].getHeight();
                                let framePerRow = (spriteSheet.getWidth() / frameWidth | 0);
                                let framePerColumn = (spriteSheet.getHeight() / frameHeight | 0);
                                let x = -(frameIndex % framePerRow) * frameWidth;
                                let y = -((frameIndex / framePerRow | 0)) * frameHeight;
                                this.spanElement.style.width = frameWidth + this.UNIT;
                                this.spanElement.style.height = frameHeight + this.UNIT;
                                this.spanElement.style.backgroundPosition = x + this.UNIT + " " + y + this.UNIT;
                                this.currentFrameIndex = this.count;
                                if (this.count === totalFrames - 1) {
                                    this.currentLoopCount += 1;
                                    this.count = 0;
                                    if (loopCount !== 0 && this.currentLoopCount >= loopCount) {
                                        this.currentLoopCount = -1;
                                        event.getCurrentTarget().reset();
                                        this.playing = false;
                                    }
                                }
                                else {
                                    this.count += 1;
                                }
                            });
                        };
                    })(frames, spriteSheet, totalFrames));
                    this.timer.start();
                    this.currentLabel = label;
                    this.playing = true;
                }
                stop() {
                    if (this.timer != null) {
                        this.timer.stop();
                        this.playing = false;
                    }
                }
                play() {
                }
                /*private*/ getBackgroundPositionCSSText() {
                    return null;
                }
                isPlaying$() {
                    return this.playing;
                }
                isPlaying$java_lang_String(label) {
                    let labelPlaying = false;
                    if (this.currentLabel != null && ((o1, o2) => o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()))(this.currentLabel, label) && this.playing === true)
                        labelPlaying = true;
                    return labelPlaying;
                }
                isPlaying(label) {
                    if (((typeof label === 'string') || label === null)) {
                        return this.isPlaying$java_lang_String(label);
                    }
                    else if (label === undefined) {
                        return this.isPlaying$();
                    }
                    else
                        throw new Error('invalid overload');
                }
                getCurrentLabel() {
                    return this.currentLabel;
                }
                getCurrentFrameIndex() {
                    return this.currentFrameIndex;
                }
                isLooping() {
                    let looping = false;
                    if (this.loopCount === 0 && this.playing === true)
                        looping = true;
                    return looping;
                }
                getCurrentLoopCount() {
                    return this.currentLoopCount;
                }
            }
            display.MovieClipRenderer = MovieClipRenderer;
            MovieClipRenderer["__class"] = "splashjs.render.display.MovieClipRenderer";
            MovieClipRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.display.iface.IMovieClipRenderer", "splashjs.render.display.iface.ISpriteRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.display.iface.IDisplayObjectContainerRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var controls;
        (function (controls) {
            class TextAreaRenderer extends splashjs.render.controls.BaseInputRenderer {
                constructor(renderObject) {
                    super();
                    if (this.htmlTextAreaElement === undefined)
                        this.htmlTextAreaElement = null;
                    super.setRenderObject(renderObject);
                    this.htmlTextAreaElement = document.createElement("textarea");
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlTextAreaElement));
                }
                create() {
                }
                setSelection() {
                    let beginIndex = super.getRenderObject().getSelectionBeginIndex();
                    let endIndex = super.getRenderObject().getSelectionEndIndex();
                    this.htmlTextAreaElement.focus();
                    this.htmlTextAreaElement.setSelectionRange(beginIndex, endIndex);
                }
            }
            controls.TextAreaRenderer = TextAreaRenderer;
            TextAreaRenderer["__class"] = "splashjs.render.controls.TextAreaRenderer";
            TextAreaRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.controls.iface.IBaseTextRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.controls.iface.IBaseInputRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.controls.iface.ITextAreaRenderer"];
        })(controls = render.controls || (render.controls = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var controls;
        (function (controls) {
            class TextInputRenderer extends splashjs.render.controls.BaseInputRenderer {
                constructor(renderObject) {
                    super();
                    if (this.htmlInputElement === undefined)
                        this.htmlInputElement = null;
                    super.setRenderObject(renderObject);
                    this.htmlInputElement = document.createElement("input");
                    this.htmlInputElement.type = "text";
                    super.setRenderElement(new splashjs.render.RenderElement(this.htmlInputElement));
                }
                create() {
                }
                setDisplayAsPassword() {
                    let displayAsPassword = super.getRenderObject().getDisplayAsPassword();
                    if (displayAsPassword === true)
                        this.htmlInputElement.type = "password";
                    else if (displayAsPassword === false)
                        this.htmlInputElement.type = "text";
                }
                setSelection() {
                    let beginIndex = super.getRenderObject().getSelectionBeginIndex();
                    let endIndex = super.getRenderObject().getSelectionEndIndex();
                    this.htmlInputElement.focus();
                    this.htmlInputElement.setSelectionRange(beginIndex, endIndex);
                }
                /**
                 *
                 */
                setText() {
                    let text = super.getRenderObject().getText();
                    if (text != null)
                        this.htmlInputElement.value = text;
                    else
                        this.htmlInputElement.value = "";
                }
            }
            controls.TextInputRenderer = TextInputRenderer;
            TextInputRenderer["__class"] = "splashjs.render.controls.TextInputRenderer";
            TextInputRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.controls.iface.IBaseTextRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.controls.iface.ITextInputRenderer", "splashjs.render.controls.iface.IBaseInputRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(controls = render.controls || (render.controls = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
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
