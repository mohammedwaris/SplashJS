/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
import { IFrame } from './iface/IFrame';

export class Frame implements IFrame {
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



