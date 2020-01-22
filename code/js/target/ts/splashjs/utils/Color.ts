/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IColor } from './iface/IColor';
import { IGradient } from './iface/IGradient';
import { ColorName } from './ColorName';
import { ColorType } from './ColorType';

export class Color implements IColor {
    public static GREEN : Color; public static GREEN_$LI$() : Color { if(Color.GREEN == null) Color.GREEN = new Color(ColorName.GREEN); return Color.GREEN; };

    public static YELLOW : Color; public static YELLOW_$LI$() : Color { if(Color.YELLOW == null) Color.YELLOW = new Color(ColorName.YELLOW); return Color.YELLOW; };

    public static RED : Color; public static RED_$LI$() : Color { if(Color.RED == null) Color.RED = new Color(ColorName.RED); return Color.RED; };

    public static BLACK : Color; public static BLACK_$LI$() : Color { if(Color.BLACK == null) Color.BLACK = new Color(ColorName.BLACK); return Color.BLACK; };

    public static WHITE : Color; public static WHITE_$LI$() : Color { if(Color.WHITE == null) Color.WHITE = new Color(ColorName.WHITE); return Color.WHITE; };

    public static TOMATO : Color; public static TOMATO_$LI$() : Color { if(Color.TOMATO == null) Color.TOMATO = new Color(ColorName.TOMATO); return Color.TOMATO; };

    public static ORANGE : Color; public static ORANGE_$LI$() : Color { if(Color.ORANGE == null) Color.ORANGE = new Color(ColorName.ORANGE); return Color.ORANGE; };

    public static DODGER_BLUE : Color; public static DODGER_BLUE_$LI$() : Color { if(Color.DODGER_BLUE == null) Color.DODGER_BLUE = new Color(ColorName.DODGER_BLUE); return Color.DODGER_BLUE; };

    public static MEDIUM_SEA_GREEN : Color; public static MEDIUM_SEA_GREEN_$LI$() : Color { if(Color.MEDIUM_SEA_GREEN == null) Color.MEDIUM_SEA_GREEN = new Color(ColorName.MEDIUM_SEA_GREEN); return Color.MEDIUM_SEA_GREEN; };

    public static GRAY : Color; public static GRAY_$LI$() : Color { if(Color.GRAY == null) Color.GRAY = new Color(ColorName.GRAY); return Color.GRAY; };

    public static SLATE_BLUE : Color; public static SLATE_BLUE_$LI$() : Color { if(Color.SLATE_BLUE == null) Color.SLATE_BLUE = new Color(ColorName.SLATE_BLUE); return Color.SLATE_BLUE; };

    public static AQUA : Color; public static AQUA_$LI$() : Color { if(Color.AQUA == null) Color.AQUA = new Color(ColorName.AQUA); return Color.AQUA; };

    public static VIOLET : Color; public static VIOLET_$LI$() : Color { if(Color.VIOLET == null) Color.VIOLET = new Color(ColorName.VIOLET); return Color.VIOLET; };

    public static LIGHT_GRAY : Color; public static LIGHT_GRAY_$LI$() : Color { if(Color.LIGHT_GRAY == null) Color.LIGHT_GRAY = new Color(ColorName.LIGHT_GRAY); return Color.LIGHT_GRAY; };

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

    /*private*/ gradient : IGradient;

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
                this.colorType = ColorType.RGBA;
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
                this.colorType = ColorType.HSLA;
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
                this.colorType = ColorType.RGB;
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
                this.colorType = ColorType.HSL;
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
                this.colorType = ColorType.GRADIENT;
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
                    this.colorType = ColorType.HEX;
                } else {
                    this.colorName = colorName;
                    this.colorType = ColorType.NAME;
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

    public getGradient() : IGradient {
        return this.gradient;
    }
}
Color["__class"] = "splashjs.utils.Color";
Color["__interfaces"] = ["splashjs.utils.iface.IColor"];





Color.LIGHT_GRAY_$LI$();

Color.VIOLET_$LI$();

Color.AQUA_$LI$();

Color.SLATE_BLUE_$LI$();

Color.GRAY_$LI$();

Color.MEDIUM_SEA_GREEN_$LI$();

Color.DODGER_BLUE_$LI$();

Color.ORANGE_$LI$();

Color.TOMATO_$LI$();

Color.WHITE_$LI$();

Color.BLACK_$LI$();

Color.RED_$LI$();

Color.YELLOW_$LI$();

Color.GREEN_$LI$();
