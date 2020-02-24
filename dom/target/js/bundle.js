var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Generated from Java with JSweet 2.3.0-SNAPSHOT - http://www.jsweet.org */
var com;
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var CSSStyleDeclaration = (function () {
                    function CSSStyleDeclaration() {
                        if (this.position === undefined)
                            this.position = null;
                        if (this.display === undefined)
                            this.display = null;
                        if (this.left === undefined)
                            this.left = null;
                        if (this.right === undefined)
                            this.right = null;
                        if (this.top === undefined)
                            this.top = null;
                        if (this.bottom === undefined)
                            this.bottom = null;
                        if (this.overflow === undefined)
                            this.overflow = null;
                        if (this.background === undefined)
                            this.background = null;
                        if (this.backgroundColor === undefined)
                            this.backgroundColor = null;
                        if (this.backgroundImage === undefined)
                            this.backgroundImage = null;
                        if (this.backgroundPosition === undefined)
                            this.backgroundPosition = null;
                        if (this.backgroundAttachment === undefined)
                            this.backgroundAttachment = null;
                        if (this.backgroundClip === undefined)
                            this.backgroundClip = null;
                        if (this.backgroundOrigin === undefined)
                            this.backgroundOrigin = null;
                        if (this.backgroundRepeat === undefined)
                            this.backgroundRepeat = null;
                        if (this.backgroundSize === undefined)
                            this.backgroundSize = null;
                        if (this.border === undefined)
                            this.border = null;
                        if (this.color === undefined)
                            this.color = null;
                    }
                    return CSSStyleDeclaration;
                }());
                dom.CSSStyleDeclaration = CSSStyleDeclaration;
                CSSStyleDeclaration["__class"] = "com.silverbrain.browser.dom.CSSStyleDeclaration";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var EventTarget = (function () {
                    function EventTarget() {
                    }
                    EventTarget.prototype.addEventListener = function (type, listener) {
                    };
                    return EventTarget;
                }());
                dom.EventTarget = EventTarget;
                EventTarget["__class"] = "com.silverbrain.browser.dom.EventTarget";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var js;
            (function (js) {
                var Object = (function () {
                    function Object() {
                    }
                    return Object;
                }());
                js.Object = Object;
                Object["__class"] = "com.silverbrain.browser.js.Object";
            })(js = browser.js || (browser.js = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var Node = (function (_super) {
                    __extends(Node, _super);
                    function Node() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Node.prototype.appendChild = function (child) {
                    };
                    Node.prototype.removeChild = function (child) {
                    };
                    Node.prototype.insertBefore = function (newChild, referenceChild) {
                    };
                    return Node;
                }(com.silverbrain.browser.dom.EventTarget));
                dom.Node = Node;
                Node["__class"] = "com.silverbrain.browser.dom.Node";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var Event = (function (_super) {
                    __extends(Event, _super);
                    function Event() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return Event;
                }(com.silverbrain.browser.js.Object));
                dom.Event = Event;
                Event["__class"] = "com.silverbrain.browser.dom.Event";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var MediaDevices = (function (_super) {
                    __extends(MediaDevices, _super);
                    function MediaDevices() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    MediaDevices.prototype.getUserMedia = function (param) {
                        return new com.silverbrain.browser.dom.MediaStream();
                    };
                    return MediaDevices;
                }(com.silverbrain.browser.js.Object));
                dom.MediaDevices = MediaDevices;
                MediaDevices["__class"] = "com.silverbrain.browser.dom.MediaDevices";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var MediaStream = (function (_super) {
                    __extends(MediaStream, _super);
                    function MediaStream() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    MediaStream.prototype.getUserMedia = function (param) {
                        return new MediaStream();
                    };
                    return MediaStream;
                }(com.silverbrain.browser.js.Object));
                dom.MediaStream = MediaStream;
                MediaStream["__class"] = "com.silverbrain.browser.dom.MediaStream";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var Navigator = (function (_super) {
                    __extends(Navigator, _super);
                    function Navigator() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.mediaDevices = new com.silverbrain.browser.dom.MediaDevices();
                        return _this;
                    }
                    return Navigator;
                }(com.silverbrain.browser.js.Object));
                dom.Navigator = Navigator;
                Navigator["__class"] = "com.silverbrain.browser.dom.Navigator";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var Window = (function (_super) {
                    __extends(Window, _super);
                    function Window() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return Window;
                }(com.silverbrain.browser.js.Object));
                dom.Window = Window;
                Window["__class"] = "com.silverbrain.browser.dom.Window";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var CharacterData = (function (_super) {
                    __extends(CharacterData, _super);
                    function CharacterData() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return CharacterData;
                }(com.silverbrain.browser.dom.Node));
                dom.CharacterData = CharacterData;
                CharacterData["__class"] = "com.silverbrain.browser.dom.CharacterData";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var Document = (function (_super) {
                    __extends(Document, _super);
                    function Document() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Document.prototype.createElement = function (tagName) {
                        return new com.silverbrain.browser.dom.HTMLElement();
                    };
                    Document.prototype.createElementNS = function (namespaceURI, tagName) {
                        return new com.silverbrain.browser.dom.HTMLElement();
                    };
                    return Document;
                }(com.silverbrain.browser.dom.Node));
                dom.Document = Document;
                Document["__class"] = "com.silverbrain.browser.dom.Document";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var Element = (function (_super) {
                    __extends(Element, _super);
                    function Element() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Element.prototype.setAttributeNS = function (namespaceURI, name, value) {
                    };
                    return Element;
                }(com.silverbrain.browser.dom.Node));
                dom.Element = Element;
                Element["__class"] = "com.silverbrain.browser.dom.Element";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var Comment = (function (_super) {
                    __extends(Comment, _super);
                    function Comment() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return Comment;
                }(com.silverbrain.browser.dom.CharacterData));
                dom.Comment = Comment;
                Comment["__class"] = "com.silverbrain.browser.dom.Comment";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var Text = (function (_super) {
                    __extends(Text, _super);
                    function Text() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return Text;
                }(com.silverbrain.browser.dom.CharacterData));
                dom.Text = Text;
                Text["__class"] = "com.silverbrain.browser.dom.Text";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLDocument = (function (_super) {
                    __extends(HTMLDocument, _super);
                    function HTMLDocument() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLDocument;
                }(com.silverbrain.browser.dom.Document));
                dom.HTMLDocument = HTMLDocument;
                HTMLDocument["__class"] = "com.silverbrain.browser.dom.HTMLDocument";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLElement = (function (_super) {
                    __extends(HTMLElement, _super);
                    function HTMLElement() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.style = new com.silverbrain.browser.dom.CSSStyleDeclaration();
                        return _this;
                    }
                    return HTMLElement;
                }(com.silverbrain.browser.dom.Element));
                dom.HTMLElement = HTMLElement;
                HTMLElement["__class"] = "com.silverbrain.browser.dom.HTMLElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var SVGElement = (function (_super) {
                    __extends(SVGElement, _super);
                    function SVGElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return SVGElement;
                }(com.silverbrain.browser.dom.Element));
                dom.SVGElement = SVGElement;
                SVGElement["__class"] = "com.silverbrain.browser.dom.SVGElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLAnchorElement = (function (_super) {
                    __extends(HTMLAnchorElement, _super);
                    function HTMLAnchorElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLAnchorElement;
                }(com.silverbrain.browser.dom.HTMLElement));
                dom.HTMLAnchorElement = HTMLAnchorElement;
                HTMLAnchorElement["__class"] = "com.silverbrain.browser.dom.HTMLAnchorElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLAppletElement = (function (_super) {
                    __extends(HTMLAppletElement, _super);
                    function HTMLAppletElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLAppletElement;
                }(com.silverbrain.browser.dom.HTMLElement));
                dom.HTMLAppletElement = HTMLAppletElement;
                HTMLAppletElement["__class"] = "com.silverbrain.browser.dom.HTMLAppletElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLAreaElement = (function (_super) {
                    __extends(HTMLAreaElement, _super);
                    function HTMLAreaElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLAreaElement;
                }(com.silverbrain.browser.dom.HTMLElement));
                dom.HTMLAreaElement = HTMLAreaElement;
                HTMLAreaElement["__class"] = "com.silverbrain.browser.dom.HTMLAreaElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLAudioElement = (function (_super) {
                    __extends(HTMLAudioElement, _super);
                    function HTMLAudioElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLAudioElement;
                }(com.silverbrain.browser.dom.HTMLElement));
                dom.HTMLAudioElement = HTMLAudioElement;
                HTMLAudioElement["__class"] = "com.silverbrain.browser.dom.HTMLAudioElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLBaseElement = (function (_super) {
                    __extends(HTMLBaseElement, _super);
                    function HTMLBaseElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLBaseElement;
                }(com.silverbrain.browser.dom.HTMLElement));
                dom.HTMLBaseElement = HTMLBaseElement;
                HTMLBaseElement["__class"] = "com.silverbrain.browser.dom.HTMLBaseElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLBaseFontElement = (function (_super) {
                    __extends(HTMLBaseFontElement, _super);
                    function HTMLBaseFontElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLBaseFontElement;
                }(com.silverbrain.browser.dom.HTMLElement));
                dom.HTMLBaseFontElement = HTMLBaseFontElement;
                HTMLBaseFontElement["__class"] = "com.silverbrain.browser.dom.HTMLBaseFontElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLBlockElement = (function (_super) {
                    __extends(HTMLBlockElement, _super);
                    function HTMLBlockElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLBlockElement;
                }(com.silverbrain.browser.dom.HTMLElement));
                dom.HTMLBlockElement = HTMLBlockElement;
                HTMLBlockElement["__class"] = "com.silverbrain.browser.dom.HTMLBlockElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLBodyElement = (function (_super) {
                    __extends(HTMLBodyElement, _super);
                    function HTMLBodyElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLBodyElement;
                }(com.silverbrain.browser.dom.HTMLElement));
                dom.HTMLBodyElement = HTMLBodyElement;
                HTMLBodyElement["__class"] = "com.silverbrain.browser.dom.HTMLBodyElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLBRElement = (function (_super) {
                    __extends(HTMLBRElement, _super);
                    function HTMLBRElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLBRElement;
                }(com.silverbrain.browser.dom.HTMLElement));
                dom.HTMLBRElement = HTMLBRElement;
                HTMLBRElement["__class"] = "com.silverbrain.browser.dom.HTMLBRElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLButtonElement = (function (_super) {
                    __extends(HTMLButtonElement, _super);
                    function HTMLButtonElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLButtonElement;
                }(com.silverbrain.browser.dom.HTMLElement));
                dom.HTMLButtonElement = HTMLButtonElement;
                HTMLButtonElement["__class"] = "com.silverbrain.browser.dom.HTMLButtonElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLCanvasElement = (function (_super) {
                    __extends(HTMLCanvasElement, _super);
                    function HTMLCanvasElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLCanvasElement;
                }(com.silverbrain.browser.dom.HTMLElement));
                dom.HTMLCanvasElement = HTMLCanvasElement;
                HTMLCanvasElement["__class"] = "com.silverbrain.browser.dom.HTMLCanvasElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLDivElement = (function (_super) {
                    __extends(HTMLDivElement, _super);
                    function HTMLDivElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLDivElement;
                }(com.silverbrain.browser.dom.HTMLElement));
                dom.HTMLDivElement = HTMLDivElement;
                HTMLDivElement["__class"] = "com.silverbrain.browser.dom.HTMLDivElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLImageElement = (function (_super) {
                    __extends(HTMLImageElement, _super);
                    function HTMLImageElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLImageElement;
                }(com.silverbrain.browser.dom.HTMLElement));
                dom.HTMLImageElement = HTMLImageElement;
                HTMLImageElement["__class"] = "com.silverbrain.browser.dom.HTMLImageElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLMediaElement = (function (_super) {
                    __extends(HTMLMediaElement, _super);
                    function HTMLMediaElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLMediaElement;
                }(com.silverbrain.browser.dom.HTMLElement));
                dom.HTMLMediaElement = HTMLMediaElement;
                HTMLMediaElement["__class"] = "com.silverbrain.browser.dom.HTMLMediaElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLSpanElement = (function (_super) {
                    __extends(HTMLSpanElement, _super);
                    function HTMLSpanElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLSpanElement;
                }(com.silverbrain.browser.dom.HTMLElement));
                dom.HTMLSpanElement = HTMLSpanElement;
                HTMLSpanElement["__class"] = "com.silverbrain.browser.dom.HTMLSpanElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
(function (com) {
    var silverbrain;
    (function (silverbrain) {
        var browser;
        (function (browser) {
            var dom;
            (function (dom) {
                var HTMLVideoElement = (function (_super) {
                    __extends(HTMLVideoElement, _super);
                    function HTMLVideoElement() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return HTMLVideoElement;
                }(com.silverbrain.browser.dom.HTMLElement));
                dom.HTMLVideoElement = HTMLVideoElement;
                HTMLVideoElement["__class"] = "com.silverbrain.browser.dom.HTMLVideoElement";
            })(dom = browser.dom || (browser.dom = {}));
        })(browser = silverbrain.browser || (silverbrain.browser = {}));
    })(silverbrain = com.silverbrain || (com.silverbrain = {}));
})(com || (com = {}));
