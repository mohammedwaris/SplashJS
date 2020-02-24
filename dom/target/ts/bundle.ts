/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
namespace com.silverbrain.browser.dom {
    export class CSSStyleDeclaration {
        public position : string;

        public display : string;

        public left : string;

        public right : string;

        public top : string;

        public bottom : string;

        public overflow : string;

        public background : string;

        public backgroundColor : string;

        public backgroundImage : string;

        public backgroundPosition : string;

        public backgroundAttachment : string;

        public backgroundClip : string;

        public backgroundOrigin : string;

        public backgroundRepeat : string;

        public backgroundSize : string;

        public border : string;

        public color : string;

        constructor() {
            if(this.position===undefined) this.position = null;
            if(this.display===undefined) this.display = null;
            if(this.left===undefined) this.left = null;
            if(this.right===undefined) this.right = null;
            if(this.top===undefined) this.top = null;
            if(this.bottom===undefined) this.bottom = null;
            if(this.overflow===undefined) this.overflow = null;
            if(this.background===undefined) this.background = null;
            if(this.backgroundColor===undefined) this.backgroundColor = null;
            if(this.backgroundImage===undefined) this.backgroundImage = null;
            if(this.backgroundPosition===undefined) this.backgroundPosition = null;
            if(this.backgroundAttachment===undefined) this.backgroundAttachment = null;
            if(this.backgroundClip===undefined) this.backgroundClip = null;
            if(this.backgroundOrigin===undefined) this.backgroundOrigin = null;
            if(this.backgroundRepeat===undefined) this.backgroundRepeat = null;
            if(this.backgroundSize===undefined) this.backgroundSize = null;
            if(this.border===undefined) this.border = null;
            if(this.color===undefined) this.color = null;
        }
    }
    CSSStyleDeclaration["__class"] = "com.silverbrain.browser.dom.CSSStyleDeclaration";

}
namespace com.silverbrain.browser.dom {
    export class EventTarget {
        public addEventListener(type : string, listener : any) {
        }
    }
    EventTarget["__class"] = "com.silverbrain.browser.dom.EventTarget";

}
namespace com.silverbrain.browser.js {
    export class Object {    }
    Object["__class"] = "com.silverbrain.browser.js.Object";

}
namespace com.silverbrain.browser.dom {
    export class Node extends com.silverbrain.browser.dom.EventTarget {
        public appendChild(child : Node) {
        }

        public removeChild(child : Node) {
        }

        public insertBefore(newChild : Node, referenceChild : Node) {
        }
    }
    Node["__class"] = "com.silverbrain.browser.dom.Node";

}
namespace com.silverbrain.browser.dom {
    export class Event extends com.silverbrain.browser.js.Object {    }
    Event["__class"] = "com.silverbrain.browser.dom.Event";

}
namespace com.silverbrain.browser.dom {
    export class MediaDevices extends com.silverbrain.browser.js.Object {
        public getUserMedia(param : any) : com.silverbrain.browser.dom.MediaStream {
            return new com.silverbrain.browser.dom.MediaStream();
        }
    }
    MediaDevices["__class"] = "com.silverbrain.browser.dom.MediaDevices";

}
namespace com.silverbrain.browser.dom {
    export class MediaStream extends com.silverbrain.browser.js.Object {
        public getUserMedia(param : any) : MediaStream {
            return new MediaStream();
        }
    }
    MediaStream["__class"] = "com.silverbrain.browser.dom.MediaStream";

}
namespace com.silverbrain.browser.dom {
    export class Navigator extends com.silverbrain.browser.js.Object {
        public mediaDevices : com.silverbrain.browser.dom.MediaDevices = new com.silverbrain.browser.dom.MediaDevices();
    }
    Navigator["__class"] = "com.silverbrain.browser.dom.Navigator";

}
namespace com.silverbrain.browser.dom {
    export class Window extends com.silverbrain.browser.js.Object {    }
    Window["__class"] = "com.silverbrain.browser.dom.Window";

}
namespace com.silverbrain.browser.dom {
    export class CharacterData extends com.silverbrain.browser.dom.Node {    }
    CharacterData["__class"] = "com.silverbrain.browser.dom.CharacterData";

}
namespace com.silverbrain.browser.dom {
    export class Document extends com.silverbrain.browser.dom.Node {
        public createElement(tagName : string) : com.silverbrain.browser.dom.HTMLElement {
            return new com.silverbrain.browser.dom.HTMLElement();
        }

        public createElementNS(namespaceURI : string, tagName : string) : com.silverbrain.browser.dom.Element {
            return new com.silverbrain.browser.dom.HTMLElement();
        }
    }
    Document["__class"] = "com.silverbrain.browser.dom.Document";

}
namespace com.silverbrain.browser.dom {
    export class Element extends com.silverbrain.browser.dom.Node {
        public setAttributeNS(namespaceURI : string, name : string, value : string) {
        }
    }
    Element["__class"] = "com.silverbrain.browser.dom.Element";

}
namespace com.silverbrain.browser.dom {
    export class Comment extends com.silverbrain.browser.dom.CharacterData {    }
    Comment["__class"] = "com.silverbrain.browser.dom.Comment";

}
namespace com.silverbrain.browser.dom {
    export class Text extends com.silverbrain.browser.dom.CharacterData {    }
    Text["__class"] = "com.silverbrain.browser.dom.Text";

}
namespace com.silverbrain.browser.dom {
    export class HTMLDocument extends com.silverbrain.browser.dom.Document {    }
    HTMLDocument["__class"] = "com.silverbrain.browser.dom.HTMLDocument";

}
namespace com.silverbrain.browser.dom {
    export class HTMLElement extends com.silverbrain.browser.dom.Element {
        public style : com.silverbrain.browser.dom.CSSStyleDeclaration = new com.silverbrain.browser.dom.CSSStyleDeclaration();
    }
    HTMLElement["__class"] = "com.silverbrain.browser.dom.HTMLElement";

}
namespace com.silverbrain.browser.dom {
    export class SVGElement extends com.silverbrain.browser.dom.Element {    }
    SVGElement["__class"] = "com.silverbrain.browser.dom.SVGElement";

}
namespace com.silverbrain.browser.dom {
    export class HTMLAnchorElement extends com.silverbrain.browser.dom.HTMLElement {    }
    HTMLAnchorElement["__class"] = "com.silverbrain.browser.dom.HTMLAnchorElement";

}
namespace com.silverbrain.browser.dom {
    export class HTMLAppletElement extends com.silverbrain.browser.dom.HTMLElement {    }
    HTMLAppletElement["__class"] = "com.silverbrain.browser.dom.HTMLAppletElement";

}
namespace com.silverbrain.browser.dom {
    export class HTMLAreaElement extends com.silverbrain.browser.dom.HTMLElement {    }
    HTMLAreaElement["__class"] = "com.silverbrain.browser.dom.HTMLAreaElement";

}
namespace com.silverbrain.browser.dom {
    export class HTMLAudioElement extends com.silverbrain.browser.dom.HTMLElement {    }
    HTMLAudioElement["__class"] = "com.silverbrain.browser.dom.HTMLAudioElement";

}
namespace com.silverbrain.browser.dom {
    export class HTMLBaseElement extends com.silverbrain.browser.dom.HTMLElement {    }
    HTMLBaseElement["__class"] = "com.silverbrain.browser.dom.HTMLBaseElement";

}
namespace com.silverbrain.browser.dom {
    export class HTMLBaseFontElement extends com.silverbrain.browser.dom.HTMLElement {    }
    HTMLBaseFontElement["__class"] = "com.silverbrain.browser.dom.HTMLBaseFontElement";

}
namespace com.silverbrain.browser.dom {
    export class HTMLBlockElement extends com.silverbrain.browser.dom.HTMLElement {    }
    HTMLBlockElement["__class"] = "com.silverbrain.browser.dom.HTMLBlockElement";

}
namespace com.silverbrain.browser.dom {
    export class HTMLBodyElement extends com.silverbrain.browser.dom.HTMLElement {    }
    HTMLBodyElement["__class"] = "com.silverbrain.browser.dom.HTMLBodyElement";

}
namespace com.silverbrain.browser.dom {
    export class HTMLBRElement extends com.silverbrain.browser.dom.HTMLElement {    }
    HTMLBRElement["__class"] = "com.silverbrain.browser.dom.HTMLBRElement";

}
namespace com.silverbrain.browser.dom {
    export class HTMLButtonElement extends com.silverbrain.browser.dom.HTMLElement {    }
    HTMLButtonElement["__class"] = "com.silverbrain.browser.dom.HTMLButtonElement";

}
namespace com.silverbrain.browser.dom {
    export class HTMLCanvasElement extends com.silverbrain.browser.dom.HTMLElement {    }
    HTMLCanvasElement["__class"] = "com.silverbrain.browser.dom.HTMLCanvasElement";

}
namespace com.silverbrain.browser.dom {
    export class HTMLDivElement extends com.silverbrain.browser.dom.HTMLElement {    }
    HTMLDivElement["__class"] = "com.silverbrain.browser.dom.HTMLDivElement";

}
namespace com.silverbrain.browser.dom {
    export class HTMLImageElement extends com.silverbrain.browser.dom.HTMLElement {    }
    HTMLImageElement["__class"] = "com.silverbrain.browser.dom.HTMLImageElement";

}
namespace com.silverbrain.browser.dom {
    export class HTMLMediaElement extends com.silverbrain.browser.dom.HTMLElement {    }
    HTMLMediaElement["__class"] = "com.silverbrain.browser.dom.HTMLMediaElement";

}
namespace com.silverbrain.browser.dom {
    export class HTMLSpanElement extends com.silverbrain.browser.dom.HTMLElement {    }
    HTMLSpanElement["__class"] = "com.silverbrain.browser.dom.HTMLSpanElement";

}
namespace com.silverbrain.browser.dom {
    export class HTMLVideoElement extends com.silverbrain.browser.dom.HTMLElement {    }
    HTMLVideoElement["__class"] = "com.silverbrain.browser.dom.HTMLVideoElement";

}

