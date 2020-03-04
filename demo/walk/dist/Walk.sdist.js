"use strict";

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function s(i) {
    if (t[i]) return t[i].exports;
    var r = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, s), r.l = !0, r.exports;
  }

  s.m = e, s.c = t, s.d = function (e, t, i) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, s.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (s.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var r in e) {
      s.d(i, r, function (t) {
        return e[t];
      }.bind(null, r));
    }
    return i;
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "", s(s.s = 1);
}([function (module, __webpack_exports__, __webpack_require__) {
  "use strict";

  var java, splashjs;
  __webpack_require__.d(__webpack_exports__, "a", function () {
    return splashjs;
  }), function (e) {
    !function (e) {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);

          this.state = t.VIRGIN, this.period = 0, void 0 === this.nextExecutionTime && (this.nextExecutionTime = 0), void 0 === this.handle && (this.handle = 0);
        }

        _createClass(t, [{
          key: "cancel",
          value: function cancel() {
            var e = this.state === t.SCHEDULED;
            return this.state = t.CANCELLED, this.nextExecutionTime = 0, this.period = 0, e;
          }
        }, {
          key: "scheduledExecutionTime",
          value: function scheduledExecutionTime() {
            return this.period < 0 ? this.nextExecutionTime + this.period : this.nextExecutionTime - this.period;
          }
        }]);

        return t;
      }();

      t.VIRGIN = 0, t.SCHEDULED = 1, t.EXECUTED = 2, t.CANCELLED = 3, e.TimerTask = t, t.__class = "java.util.TimerTask", t.__interfaces = ["java.lang.Runnable"];
    }(e.util || (e.util = {}));
  }(java || (java = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      e.Filter = t, t.__class = "splashjs.filters.Filter", t.__interfaces = ["splashjs.filters.iface.IFilter"];
    }(e.filters || (e.filters = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.BLUR = "blur", t.BRIGHTNESS = "brightness", t.CONTRAST = "contrast", t.HUE_ROTATE = "hue_rotate", t.INVERT = "invert", t.DROP_SHADOW = "drop_shadow", t.GRAYSCALE = "grayscale", t.SATURATE = "saturate", t.SEPIA = "sepia", e.FilterType = t, t.__class = "splashjs.filters.FilterType";
    }(e.filters || (e.filters = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.SYSTEM = "system", t.IMAGE = "image", e.MouseCursorType = t, t.__class = "splashjs.ui.MouseCursorType";
    }(e.ui || (e.ui = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.STANDARD = "standard", t.LEFT = "left", t.RIGHT = "right", t.NUMPAD = "numpad", e.KeyLocation = t, t.__class = "splashjs.ui.KeyLocation";
    }(e.ui || (e.ui = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.ALIAS = "alias", t.ALL_SCROLL = "all-scroll", t.AUTO = "auto", t.CELL = "cell", t.CONTEXT_MENU = "context-menu", t.COL_RESIZE = "col-resize", t.COPY = "copy", t.CROSSHAIR = "crosshair", t.DEFAULT = "default", t.E_RESIZE = "e-resize", t.EW_RESIZE = "ew-resize", t.GRAB = "grab", t.GRABBING = "grabbing", t.HELP = "help", t.MOVE = "move", t.N_RESIZE = "n-resize", t.NE_RESIZE = "ne-resize", t.NESW_RESIZE = "nesw-resize", t.NS_RESIZE = "ns-resize", t.NW_RESIZE = "nw-resize", t.NWSE_RESIZE = "nwse-resize", t.NO_DROP = "no-drop", t.NOT_ALLOWED = "not-allowed", t.POINTER = "pointer", t.PROGRESS = "progress", t.ROW_RESIZE = "row-resize", t.S_RESIZE = "s-resize", t.SE_RESIZE = "se-resize", t.SW_RESIZE = "sw-resize", t.W_RESIZE = "w-resize", t.TEXT = "text", t.WAIT = "wait", t.ZOOM_IN = "zoom-in", t.ZOOM_OUT = "zoom-out", e.MouseCursorName = t, t.__class = "splashjs.ui.MouseCursorName";
    }(e.ui || (e.ui = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function () {
        function s(t) {
          _classCallCheck(this, s);

          this.requestHeaders = [], void 0 === this.url && (this.url = null), void 0 === this.contentType && (this.contentType = null), void 0 === this.data && (this.data = null), void 0 === this.followRedirects && (this.followRedirects = !1), void 0 === this.method && (this.method = null), this.url = t, this.method = e.net.URLRequestMethod.GET;
        }

        _createClass(s, [{
          key: "getURL",
          value: function getURL() {
            return this.url;
          }
        }, {
          key: "setMethod",
          value: function setMethod(e) {
            this.method = e;
          }
        }, {
          key: "getMethod",
          value: function getMethod() {
            return this.method;
          }
        }, {
          key: "setRequestHeaders",
          value: function setRequestHeaders(e) {
            this.requestHeaders = e;
          }
        }, {
          key: "getRequestHeaders",
          value: function getRequestHeaders() {
            return this.requestHeaders;
          }
        }, {
          key: "setContentType",
          value: function setContentType(e) {
            this.contentType = e;
          }
        }, {
          key: "getContentType",
          value: function getContentType() {
            return this.contentType;
          }
        }, {
          key: "setData",
          value: function setData(e) {
            this.data = e;
          }
        }, {
          key: "getData",
          value: function getData() {
            return this.data;
          }
        }]);

        return s;
      }();

      t.URLRequest = s, s.__class = "splashjs.net.URLRequest", s.__interfaces = ["splashjs.net.iface.IURLRequest"];
    }(e.net || (e.net = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = /*#__PURE__*/function () {
        function t(e, _t) {
          _classCallCheck(this, t);

          this.name = "", this.value = "", this.name = e, this.value = _t;
        }

        _createClass(t, [{
          key: "setName",
          value: function setName(e) {
            this.name = e;
          }
        }, {
          key: "getName",
          value: function getName() {
            return this.name;
          }
        }, {
          key: "setValue",
          value: function setValue(e) {
            this.value = e;
          }
        }, {
          key: "getValue",
          value: function getValue() {
            return this.value;
          }
        }]);

        return t;
      }();

      e.URLRequestHeader = t, t.__class = "splashjs.net.URLRequestHeader", t.__interfaces = ["splashjs.net.iface.IURLRequestHeader"];
    }(e.net || (e.net = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function () {
        function s(e, t) {
          _classCallCheck(this, s);

          this.name = "", this.value = "", this.name = e, this.value = t;
        }

        _createClass(s, [{
          key: "getName",
          value: function getName() {
            return this.name;
          }
        }, {
          key: "getValue",
          value: function getValue() {
            return this.value;
          }
        }, {
          key: "getEncodedValue",
          value: function getEncodedValue() {
            return s.getEncodedString(this.value);
          }
        }], [{
          key: "getEncodedString",
          value: function getEncodedString(t) {
            return e.render.net.URLVariableRenderer.getEncodedString(t);
          }
        }, {
          key: "encode",
          value: function encode() {
            for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
              t[_key] = arguments[_key];
            }

            return e.render.net.URLVariableRenderer.encode.apply(null, t);
          }
        }, {
          key: "decode",
          value: function decode(t) {
            return e.render.net.URLVariableRenderer.decode(t);
          }
        }]);

        return s;
      }();

      t.URLVariable = s, s.__class = "splashjs.net.URLVariable", s.__interfaces = ["splashjs.net.iface.IURLVariable"];
    }(e.net || (e.net = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.DELETE = "delete", t.GET = "get", t.HEAD = "head", t.OPTIONS = "options", t.POST = "post", t.PUT = "put", e.URLRequestMethod = t, t.__class = "splashjs.net.URLRequestMethod";
    }(e.net || (e.net = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.TEXT = "text", t.BINARY = "binary", t.VARIABLES = "variables", e.URLLoaderDataFormat = t, t.__class = "splashjs.net.URLLoaderDataFormat";
    }(e.net || (e.net = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = /*#__PURE__*/function () {
        function t(e, _t2) {
          _classCallCheck(this, t);

          this.description = "", this.extension = "", this.description = e, this.extension = _t2;
        }

        _createClass(t, [{
          key: "getDescription",
          value: function getDescription() {
            return this.description;
          }
        }, {
          key: "getExtension",
          value: function getExtension() {
            return this.extension;
          }
        }]);

        return t;
      }();

      e.FileFilter = t, t.__class = "splashjs.net.FileFilter", t.__interfaces = ["splashjs.net.iface.IFileFilter"];
    }(e.net || (e.net = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      !function (e) {
        var t = /*#__PURE__*/function (_EventTarget) {
          _inherits(t, _EventTarget);

          function t() {
            _classCallCheck(this, t);

            return _possibleConstructorReturn(this, _getPrototypeOf(t).apply(this, arguments));
          }

          _createClass(t, [{
            key: "getUserMedia",
            value: function getUserMedia(e) {
              return null;
            }
          }]);

          return t;
        }( /*#__PURE__*/_wrapNativeSuper(EventTarget));

        e.MediaDevices = t, t.__class = "splashjs.def.js.MediaDevices";
      }(e.js || (e.js = {}));
    }(e.def || (e.def = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      !function (e) {
        var t = function t() {
          _classCallCheck(this, t);

          void 0 === this.mediaDevices && (this.mediaDevices = null);
        };

        e.Navigator = t, t.__class = "splashjs.def.js.Navigator";
      }(e.js || (e.js = {}));
    }(e.def || (e.def = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      !function (e) {
        e.navigator = null;
      }(e.js || (e.js = {}));
    }(e.def || (e.def = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      !function (e) {
        var t = function t() {
          _classCallCheck(this, t);
        };

        e.MediaStream = t, t.__class = "splashjs.def.webrtc.MediaStream";
      }(e.webrtc || (e.webrtc = {}));
    }(e.def || (e.def = {}));
  }(splashjs || (splashjs = {})), function (splashjs) {
    var Package = /*#__PURE__*/function () {
      function Package() {
        _classCallCheck(this, Package);
      }

      _createClass(Package, null, [{
        key: "packageData_$LI$",
        value: function packageData_$LI$() {
          return null == Package.packageData && (Package.packageData = []), Package.packageData;
        }
      }, {
        key: "define",
        value: function define(packageID, imports, classInFunc) {
          var numImports = imports.length,
              importJSText = "";

          for (var e = 0; e < numImports; e++) {
            var t = imports[e],
                s = t.substring(t.lastIndexOf(".") + 1);
            importJSText += "var " + s + " = " + t + ";\r\n";
          }

          var userClass = classInFunc(),
              userClassName = userClass.name;
          if (null == packageID || 0 === packageID.length) window[userClassName] = userClass;else {
            var words = packageID.split("."),
                js = "",
                str = "";

            for (var i = 0; i < words.length; i++) {
              0 === i ? (window[words[i]] = new Object(), js = words[0] + " = " + words[0] + " || {};", eval(js), str = words[0], console.info(js)) : i > 0 && (str += "." + words[i], js = str + " = " + str + " || {};", eval(js), console.info(js));
            }

            var fullPackage = eval(str);
            fullPackage[userClassName] = userClass, console.info(str);
          }
          Package.packageData_$LI$().push(new Package.PackageData(packageID, Package.clazz));
        }
      }]);

      return Package;
    }();

    Package.clazz = null, splashjs.Package = Package, Package.__class = "splashjs.Package", function (e) {
      var t = function t(e, _t3) {
        _classCallCheck(this, t);

        void 0 === this.packageID && (this.packageID = null), void 0 === this.clazz && (this.clazz = null), this.packageID = e, this.clazz = _t3;
      };

      e.PackageData = t, t.__class = "splashjs.Package.PackageData";
    }(Package = splashjs.Package || (splashjs.Package = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function () {
          function s() {
            _classCallCheck(this, s);
          }

          _createClass(s, null, [{
            key: "encode",
            value: function encode() {
              var t = "";

              for (var _s = 0; _s < arguments.length; _s++) {
                var i = _s < 0 || arguments.length <= _s ? undefined : arguments[_s];
                t += i.getName() + "=" + encodeURIComponent(i.getValue()), _s < arguments.length - 1 && (t += "&");
              }

              return t;
            }
          }, {
            key: "decode",
            value: function decode(t) {
              var s = [],
                  i = decodeURI(t).split("&");

              for (var _t4 = 0; _t4 < i.length; _t4++) {
                var r = i[_t4].split("="),
                    n = new e.net.URLVariable(r[0], decodeURIComponent(r[1]));

                s.push(n);
              }

              return s;
            }
          }, {
            key: "getEncodedString",
            value: function getEncodedString(e) {
              return encodeURIComponent(e);
            }
          }]);

          return s;
        }();

        t.URLVariableRenderer = s, s.__class = "splashjs.render.net.URLVariableRenderer";
      }(t.net || (t.net = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.LOAD = "load", t.CLICK = "click", t.DBLCLICK = "dblclick", t.MOUSEDOWN = "mousedown", t.MOUSEENTER = "mouseenter", t.MOUSELEAVE = "mouseleave", t.MOUSEMOVE = "mousemove", t.MOUSEOUT = "mouseout", t.MOUSEOVER = "mouseover", t.MOUSEUP = "mouseup", t.KEYPRESS = "keypress", t.KEYUP = "keyup", t.KEYDOWN = "keydown", t.FOCUS = "focus", t.SELECT = "select", t.CHANGE = "change", e.HTMLDomEventName = t, t.__class = "splashjs.render.HTMLDomEventName";
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);
        }

        _createClass(s, [{
          key: "createRenderer",
          value: function createRenderer(t, s) {
            var i = null;
            return t === e.Global ? i = new e.render.GlobalRenderer(s) : t === e.application.Application ? i = new e.render.application.ApplicationRenderer(s) : t === e.application.StageOwner ? i = new e.render.application.StageOwnerRenderer(s) : t === e.display.Stage ? i = new e.render.display.StageRenderer(s) : t === e.display.Scene ? i = new e.render.display.SceneRenderer(s) : t === e.display.Sprite ? i = new e.render.display.SpriteRenderer(s) : t === e.display.MovieClip ? i = new e.render.display.MovieClipRenderer(s) : t === e.display.Image ? i = new e.render.display.ImageRenderer(s) : t === e.display.Bitmap ? i = new e.render.display.BitmapRenderer(s) : t === e.display.BitmapData ? i = new e.render.display.BitmapDataRenderer(s) : t === e.display.Line ? i = new e.render.display.LineRenderer(s) : t === e.display.Circle ? i = new e.render.display.CircleRenderer(s) : t === e.controls.Label ? i = new e.render.controls.LabelRenderer(s) : t === e.controls.Button ? i = new e.render.controls.ButtonRenderer(s) : t === e.controls.Tree ? i = new e.render.controls.TreeRenderer(s) : t === e.text.StaticText ? i = new e.render.text.StaticTextRenderer(s) : t === e.text.InputText ? i = new e.render.text.InputTextRenderer(s) : t === e.net.FileReference ? i = new e.render.net.FileReferenceRenderer(s) : t === e.net.URLLoader ? i = new e.render.net.URLLoaderRenderer(s) : t === e.utils.Resource ? i = new e.render.utils.ResourceRenderer(s) : t === e.utils.ResourceLoader ? i = new e.render.utils.ResourceLoaderRenderer(s) : t === e.media.Sound ? i = new e.render.media.SoundRenderer(s) : t === e.media.Video ? i = new e.render.media.VideoRenderer(s) : t === e.media.Camera ? i = new e.render.media.CameraRenderer(s) : t === e.controls.List ? i = new e.render.controls.ListRenderer(s) : t === e.utils.ByteArray ? i = new e.render.utils.ByteArrayRenderer(s) : t === e.animation.FadeTransition ? i = new e.render.animation.FadeTransitionRenderer(s) : t === e.animation.ScaleTransition ? i = new e.render.animation.ScaleTransitionRenderer(s) : t === e.animation.CircularTransition ? i = new e.render.animation.CircularTransitionRenderer(s) : t === e.animation.RotationTransition ? i = new e.render.animation.RotationTransitionRenderer(s) : t === e.animation.TranslateTransition ? i = new e.render.animation.TranslateTransitionRenderer(s) : t === e.animation.SpriteSheet ? i = new e.render.animation.SpriteSheetRenderer(s) : console.info("Error: " + t + " renderer not found"), i;
          }
        }]);

        return s;
      }();

      t.RendererCreator = s, s.__class = "splashjs.render.RendererCreator", s.__interfaces = ["splashjs.render.iface.IRendererCreator"];
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = /*#__PURE__*/function () {
        function t(e) {
          _classCallCheck(this, t);

          void 0 === this.element && (this.element = null), this.element = e;
        }

        _createClass(t, [{
          key: "getDOMElement",
          value: function getDOMElement() {
            return this.element;
          }
        }]);

        return t;
      }();

      e.RenderElement = t, t.__class = "splashjs.render.RenderElement", t.__interfaces = ["splashjs.render.iface.IRenderElement"];
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);

          this.SVGNS = "http://www.w3.org/2000/svg", this.UNIT = "px", this.ENDLINE_CHAR = "\r\n", this.IMAGES_FOLDER_PATH = "images/", this.SOUNDS_FOLDER_PATH = "sounds/", this.VIDEOS_FOLDER_PATH = "videos/", void 0 === this.renderObjectID && (this.renderObjectID = null), void 0 === this.renderObject && (this.renderObject = null), void 0 === this.renderElement && (this.renderElement = null);
        }

        _createClass(s, [{
          key: "setRenderObject",
          value: function setRenderObject(e) {
            this.renderObject = e, this.renderObjectID = e.getUniqueID();
          }
        }, {
          key: "getRenderObjectID",
          value: function getRenderObjectID() {
            return this.renderObjectID;
          }
        }, {
          key: "getRenderObject",
          value: function getRenderObject() {
            return this.renderObject;
          }
        }, {
          key: "setRenderElement",
          value: function setRenderElement(e) {
            this.renderElement = e, this.createEventListeners(), this.applyCSS();
          }
        }, {
          key: "getRenderElement",
          value: function getRenderElement() {
            return this.renderElement;
          }
        }, {
          key: "create",
          value: function create() {}
        }, {
          key: "update",
          value: function update() {}
        }, {
          key: "refresh",
          value: function refresh() {}
        }, {
          key: "applyCSS",
          value: function applyCSS() {
            var e = this.getDOMElement();
            e.style.position = "absolute", e.style.display = "inline-block";
          }
        }, {
          key: "getDOMElement",
          value: function getDOMElement() {
            return this.renderElement.getDOMElement();
          }
        }, {
          key: "createEventListeners",
          value: function createEventListeners() {
            var _this = this;

            var t = this.getDOMElement();
            t.addEventListener(e.render.HTMLDomEventName.LOAD, function (t) {
              var s = new e.events.Event(e.events.Event.LOADED);

              _this.getRenderObject().dispatchEvent(s);
            }), t.addEventListener(e.render.HTMLDomEventName.CLICK, function (t) {
              var s = new e.events.MouseEvent(e.events.MouseEvent.CLICK, null, _this.getRenderObject());

              _this.getRenderObject().dispatchEvent(s);
            }), t.addEventListener(e.render.HTMLDomEventName.DBLCLICK, function (t) {
              var s = new e.events.MouseEvent(e.events.MouseEvent.DOUBLE_CLICK, null, _this.getRenderObject());

              _this.getRenderObject().dispatchEvent(s);
            }), t.addEventListener(e.render.HTMLDomEventName.MOUSEENTER, function (t) {
              var s = new e.events.MouseEvent(e.events.MouseEvent.MOUSE_ENTER, null, _this.getRenderObject());

              _this.getRenderObject().dispatchEvent(s);
            }), t.addEventListener(e.render.HTMLDomEventName.MOUSELEAVE, function (t) {
              var s = new e.events.MouseEvent(e.events.MouseEvent.MOUSE_LEAVE, null, _this.getRenderObject());

              _this.getRenderObject().dispatchEvent(s);
            }), t.addEventListener(e.render.HTMLDomEventName.MOUSEOVER, function (t) {
              var s = new e.events.MouseEvent(e.events.MouseEvent.MOUSE_OVER, null, _this.getRenderObject());

              _this.getRenderObject().dispatchEvent(s);
            }), t.addEventListener(e.render.HTMLDomEventName.MOUSEOUT, function (t) {
              var s = new e.events.MouseEvent(e.events.MouseEvent.MOUSE_OUT, null, _this.getRenderObject());

              _this.getRenderObject().dispatchEvent(s);
            }), t.addEventListener(e.render.HTMLDomEventName.MOUSEDOWN, function (t) {
              var s = new e.events.MouseEvent(e.events.MouseEvent.MOUSE_DOWN, null, _this.getRenderObject());

              _this.getRenderObject().dispatchEvent(s);
            }), t.addEventListener(e.render.HTMLDomEventName.MOUSEUP, function (t) {
              var s = new e.events.MouseEvent(e.events.MouseEvent.MOUSE_UP, null, _this.getRenderObject());

              _this.getRenderObject().dispatchEvent(s);
            });
          }
        }, {
          key: "appendChild",
          value: function appendChild(e) {
            var t = e.getRenderElement().getDOMElement();
            this.getDOMElement().insertBefore(t, this.getDOMElement().firstChild);
          }
        }, {
          key: "removeChild",
          value: function removeChild(e) {
            var t = e.getRenderElement().getDOMElement();
            this.getDOMElement().removeChild(t);
          }
        }, {
          key: "getOriginalWidth",
          value: function getOriginalWidth() {
            return 0 | this.getDOMElement().clientWidth;
          }
        }, {
          key: "getOriginalHeight",
          value: function getOriginalHeight() {
            return 0 | this.getDOMElement().clientHeight;
          }
        }, {
          key: "appendToBody",
          value: function appendToBody() {
            document.body.appendChild(this.getDOMElement());
          }
        }, {
          key: "getCSSIDText",
          value: function getCSSIDText() {
            return this.getRenderObject().getUniqueID();
          }
        }, {
          key: "getCSSTransformText",
          value: function getCSSTransformText() {
            var e = this.getRenderObject();
            return "scale(" + e.getScaleX() + ", " + e.getScaleY() + ")" + " skew(0deg, 0deg) " + ("rotate(" + e.getRotation() + "deg)");
          }
        }, {
          key: "getCSSTransformOriginText",
          value: function getCSSTransformOriginText() {
            var e = this.getRenderObject();
            return e.getRegX() + this.UNIT + " " + e.getRegY() + this.UNIT;
          }
        }, {
          key: "getCSSLeftText",
          value: function getCSSLeftText() {
            var e = this.getRenderObject();
            return e.getX() - e.getRegX() + this.UNIT;
          }
        }, {
          key: "getCSSTopText",
          value: function getCSSTopText() {
            var e = this.getRenderObject();
            return e.getY() - e.getRegY() + this.UNIT;
          }
        }, {
          key: "getCSSWidthText",
          value: function getCSSWidthText() {
            return this.getRenderObject().getWidth() + this.UNIT;
          }
        }, {
          key: "getCSSHeightText",
          value: function getCSSHeightText() {
            return this.getRenderObject().getHeight() + this.UNIT;
          }
        }, {
          key: "getCSSOpacityText",
          value: function getCSSOpacityText() {
            return this.getRenderObject().getAlpha() + "";
          }
        }, {
          key: "getCSSVisibilityText",
          value: function getCSSVisibilityText() {
            var e;
            return e = !0 === this.getRenderObject().getVisible() ? "visible" : "hidden", e;
          }
        }, {
          key: "getCSSCursorVisibleText",
          value: function getCSSCursorVisibleText() {
            var e = this.getRenderObject(),
                t = (e.getMouseCursor(), this.getCSSCursorText());
            return !1 === e.getMouseVisible() && (t = "none"), t;
          }
        }, {
          key: "getCSSCursorText",
          value: function getCSSCursorText() {
            var t = this.getRenderObject().getMouseCursor(),
                s = e.ui.MouseCursor.AUTO_$LI$().getMouseCursorName();
            if (i = t.getMouseCursorType(), r = e.ui.MouseCursorType.SYSTEM, i.toUpperCase() === (null === r ? r : r.toUpperCase())) s = t.getMouseCursorName();else if (function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(t.getMouseCursorType(), e.ui.MouseCursorType.IMAGE)) {
              var _e = t.getMouseCursorImagePath();

              s = "url(" + this.IMAGES_FOLDER_PATH + _e + "), auto";
            }
            var i, r;
            return s;
          }
        }, {
          key: "getCSSFilterText",
          value: function getCSSFilterText() {
            var t = "";
            {
              var r = this.getRenderObject().getAllFilters();

              for (var n = 0; n < r.length; n++) {
                var a = r[n];
                if (null != a && (null != a.__interfaces && a.__interfaces.indexOf("splashjs.filters.iface.IBlurFilter") >= 0 || null != a.constructor && null != a.constructor.__interfaces && a.constructor.__interfaces.indexOf("splashjs.filters.iface.IBlurFilter") >= 0)) t += "blur(" + a.getBlur() + "px) ";else if (null != a && (null != a.__interfaces && a.__interfaces.indexOf("splashjs.filters.iface.IDropShadowFilter") >= 0 || null != a.constructor && null != a.constructor.__interfaces && a.constructor.__interfaces.indexOf("splashjs.filters.iface.IDropShadowFilter") >= 0)) {
                  var _r = a;
                  t += "drop-shadow(" + _r.getOffsetX() + "px ", t += _r.getOffsetY() + "px ", t += _r.getBlur() + "px ";

                  var _n = _r.getColor();

                  s = _n.getColorType(), i = e.utils.ColorType.NAME, s.toUpperCase() === (null === i ? i : i.toUpperCase()) ? t += _n.getColorName() + ") " : t += "black) ";
                } else null != a && (null != a.__interfaces && a.__interfaces.indexOf("splashjs.filters.iface.IBrightnessFilter") >= 0 || null != a.constructor && null != a.constructor.__interfaces && a.constructor.__interfaces.indexOf("splashjs.filters.iface.IBrightnessFilter") >= 0) ? t += "brightness(" + a.getBrightness() + ") " : null != a && (null != a.__interfaces && a.__interfaces.indexOf("splashjs.filters.iface.IContrastFilter") >= 0 || null != a.constructor && null != a.constructor.__interfaces && a.constructor.__interfaces.indexOf("splashjs.filters.iface.IContrastFilter") >= 0) ? t += "contrast(" + a.getContrast() + ") " : null != a && (null != a.__interfaces && a.__interfaces.indexOf("splashjs.filters.iface.IHueRotateFilter") >= 0 || null != a.constructor && null != a.constructor.__interfaces && a.constructor.__interfaces.indexOf("splashjs.filters.iface.IHueRotateFilter") >= 0) ? t += "hue-rotate(" + a.getHueRotate() + "deg) " : null != a && (null != a.__interfaces && a.__interfaces.indexOf("splashjs.filters.iface.IInvertFilter") >= 0 || null != a.constructor && null != a.constructor.__interfaces && a.constructor.__interfaces.indexOf("splashjs.filters.iface.IInvertFilter") >= 0) ? t += "invert(" + a.getInvert() + ") " : null != a && (null != a.__interfaces && a.__interfaces.indexOf("splashjs.filters.iface.IGrayscaleFilter") >= 0 || null != a.constructor && null != a.constructor.__interfaces && a.constructor.__interfaces.indexOf("splashjs.filters.iface.IGrayscaleFilter") >= 0) ? t += "grayscale(" + a.getGrayscale() + ") " : null != a && (null != a.__interfaces && a.__interfaces.indexOf("splashjs.filters.iface.ISaturateFilter") >= 0 || null != a.constructor && null != a.constructor.__interfaces && a.constructor.__interfaces.indexOf("splashjs.filters.iface.ISaturateFilter") >= 0) ? t += "saturate(" + a.getSaturate() + ") " : null != a && (null != a.__interfaces && a.__interfaces.indexOf("splashjs.filters.iface.ISepiaFilter") >= 0 || null != a.constructor && null != a.constructor.__interfaces && a.constructor.__interfaces.indexOf("splashjs.filters.iface.ISepiaFilter") >= 0) && (t += "sepia(" + a.getSepia() + ") ");
              }
            }
            var s, i;
            return 0 === t.length && (t = "none"), t;
          }
        }, {
          key: "getSVGCircleRadiusText",
          value: function getSVGCircleRadiusText() {
            var e = "10";
            return e = this.renderObject.getRadius() + "", e;
          }
        }, {
          key: "getSVGCircleCenterXText",
          value: function getSVGCircleCenterXText() {
            var e = "0",
                t = this.renderObject.getStrokeWidth(),
                s = this.renderObject.getRadius();
            return e = Math.ceil(s + t / 2) + "", e;
          }
        }, {
          key: "getSVGCircleCenterYText",
          value: function getSVGCircleCenterYText() {
            var e = "0",
                t = this.renderObject.getStrokeWidth(),
                s = this.renderObject.getRadius();
            return e = Math.ceil(s + t / 2) + "", e;
          }
        }, {
          key: "getSVGCircleWidthText",
          value: function getSVGCircleWidthText() {
            var e = "0";
            this.renderObject.getRadius();
            return e = Math.ceil(2 * parseFloat(this.getSVGCircleCenterXText())) + "", e;
          }
        }, {
          key: "getSVGCircleHeightText",
          value: function getSVGCircleHeightText() {
            var e = "0";
            this.renderObject.getRadius();
            return e = Math.ceil(2 * parseFloat(this.getSVGCircleCenterYText())) + "", e;
          }
        }, {
          key: "getSVGLineX2Text",
          value: function getSVGLineX2Text() {
            var e = "0";
            return e = this.renderObject.getLength() + "", e;
          }
        }, {
          key: "getSVGLineY2Text",
          value: function getSVGLineY2Text() {
            return this.getSVGLineY1Text();
          }
        }, {
          key: "getSVGLineY1Text",
          value: function getSVGLineY1Text() {
            return (parseInt(this.getSVGShapeStrokeWidthText()) / 2 | 0) + "";
          }
        }, {
          key: "getSVGLineWidthText",
          value: function getSVGLineWidthText() {
            var e = "0";
            return e = this.renderObject.getLength() + "", e;
          }
        }, {
          key: "getSVGLineHeightText",
          value: function getSVGLineHeightText() {
            var e = "0";
            return e = this.getSVGShapeStrokeWidthText(), e;
          }
        }, {
          key: "getSVGShapeStrokeColorNameText",
          value: function getSVGShapeStrokeColorNameText() {
            var t = e.utils.ColorName.BLACK,
                s = this.renderObject.getStrokeColor();
            var i, r;
            return i = s.getColorType(), r = e.utils.ColorType.NAME, i.toUpperCase() === (null === r ? r : r.toUpperCase()) ? t = s.getColorName() : function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(s.getColorType(), e.utils.ColorType.HEX) && (t = s.getHEX()), t;
          }
        }, {
          key: "getSVGShapeFillColorNameText",
          value: function getSVGShapeFillColorNameText() {
            var t = e.utils.ColorName.BLACK,
                s = this.renderObject.getFillColor();
            var i, r;
            return i = s.getColorType(), r = e.utils.ColorType.NAME, i.toUpperCase() === (null === r ? r : r.toUpperCase()) ? t = s.getColorName() : function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(s.getColorType(), e.utils.ColorType.HEX) && (t = s.getHEX()), t;
          }
        }, {
          key: "getSVGShapeStrokeWidthText",
          value: function getSVGShapeStrokeWidthText() {
            var e = "1";
            return e = this.renderObject.getStrokeWidth() + "", e;
          }
        }]);

        return s;
      }();

      t.Renderer = s, s.__class = "splashjs.render.Renderer", s.__interfaces = ["splashjs.render.iface.IRenderer"];
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);
        }

        _createClass(s, null, [{
          key: "navigateToURL",
          value: function navigateToURL(t) {
            var s = t.getURL(),
                i = t.getMethod(),
                r = t.getData(),
                n = s;
            if (a = i, l = e.net.URLRequestMethod.GET, a.toUpperCase() === (null === l ? l : l.toUpperCase())) null != r && (n += "?" + r), window.open(n, "_blank");else if (function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(i, e.net.URLRequestMethod.POST)) {
              var _t5 = document.createElement("form");

              if (_t5.method = "POST", _t5.action = s, _t5.id = "newForm", _t5.enctype = "application/x-www-form-urlencoded", _t5.encoding = "application/x-www-form-urlencoded", null != r) {
                var _s2 = e.net.URLVariable.decode(r);

                for (var _e2 = 0; _e2 < _s2.length; _e2++) {
                  var _i = _s2[_e2],
                      _r2 = document.createElement("input");

                  _r2.setAttribute("type", "hidden"), _r2.setAttribute("name", _i.getName()), _r2.setAttribute("value", _i.getValue()), _t5.appendChild(_r2);
                }
              }

              _t5.target = "newWindow", window.open("", "newWindow").document.body.appendChild(_t5), _t5.submit();
            }
            var a, l;
            console.info(n);
          }
        }]);

        return s;
      }();

      t.SplashJSRenderer = s, s.__class = "splashjs.render.SplashJSRenderer";
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.NONE = "none", t.NORMAL = "normal", t.REVERSE = "reverse", e.TransitionState = t, t.__class = "splashjs.animation.TransitionState";
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      !function (e) {
        var t = /*#__PURE__*/function () {
          function t() {
            _classCallCheck(this, t);
          }

          _createClass(t, null, [{
            key: "easeIn",
            value: function easeIn(e, s, i, r) {
              return i - t.easeOut(r - e, 0, i, r) + s;
            }
          }, {
            key: "easeOut",
            value: function easeOut(e, t, s, i) {
              return (e /= i) < Math.fround(1 / 2.75) ? s * (7.5625 * e * e) + t : e < Math.fround(2 / 2.75) ? s * (7.5625 * (e -= Math.fround(1.5 / 2.75)) * e + .75) + t : e < 2.5 / 2.75 ? s * (7.5625 * (e -= Math.fround(2.25 / 2.75)) * e + .9375) + t : s * (7.5625 * (e -= Math.fround(2.625 / 2.75)) * e + .984375) + t;
            }
          }, {
            key: "easeInOut",
            value: function easeInOut(e, s, i, r) {
              return e < r / 2 ? .5 * t.easeIn(2 * e, 0, i, r) + s : .5 * t.easeOut(2 * e - r, 0, i, r) + .5 * i + s;
            }
          }]);

          return t;
        }();

        t.EASE_IN = "bounce_ease_in", t.EASE_OUT = "bounce_ease_out", t.EASE_IN_OUT = "bounce_ease_in_out", e.Bounce = t, t.__class = "splashjs.animation.easing.Bounce";
      }(e.easing || (e.easing = {}));
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      !function (e) {
        var t = /*#__PURE__*/function () {
          function t() {
            _classCallCheck(this, t);
          }

          _createClass(t, null, [{
            key: "easeNone",
            value: function easeNone(e, t, s, i) {
              return s * e / i + t;
            }
          }, {
            key: "easeIn",
            value: function easeIn(e, t, s, i) {
              return s * e / i + t;
            }
          }, {
            key: "easeOut",
            value: function easeOut(e, t, s, i) {
              return s * e / i + t;
            }
          }, {
            key: "easeInOut",
            value: function easeInOut(e, t, s, i) {
              return s * e / i + t;
            }
          }]);

          return t;
        }();

        t.EASE_NONE = "linear_ease_none", t.EASE_IN = "linear_ease_in", t.EASE_OUT = "linear_ease_out", t.EASE_IN_OUT = "linear_ease_in_out", e.Linear = t, t.__class = "splashjs.animation.easing.Linear";
      }(e.easing || (e.easing = {}));
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      !function (e) {
        var t = /*#__PURE__*/function () {
          function t() {
            _classCallCheck(this, t);
          }

          _createClass(t, null, [{
            key: "easeIn",
            value: function easeIn(e, t, s, i) {
              return s * (e /= i) * e + t;
            }
          }, {
            key: "easeOut",
            value: function easeOut(e, t, s, i) {
              return -s * (e /= i) * (e - 2) + t;
            }
          }, {
            key: "easeInOut",
            value: function easeInOut(e, t, s, i) {
              return (e /= i / 2) < 1 ? s / 2 * e * e + t : -s / 2 * (--e * (e - 2) - 1) + t;
            }
          }]);

          return t;
        }();

        t.EASE_IN = "quad_cubic_ease_in", t.EASE_OUT = "quad_cubic_ease_out", t.EASE_IN_OUT = "quad_cubic_ease_in_out", e.Quad = t, t.__class = "splashjs.animation.easing.Quad";
      }(e.easing || (e.easing = {}));
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      !function (e) {
        var t = /*#__PURE__*/function () {
          function t() {
            _classCallCheck(this, t);
          }

          _createClass(t, null, [{
            key: "easeIn",
            value: function easeIn(e, t, s, i) {
              return 0 === e ? t : s * Math.pow(2, 10 * (e / i - 1)) + t;
            }
          }, {
            key: "easeOut",
            value: function easeOut(e, t, s, i) {
              return e === i ? t + s : s * (1 - Math.pow(2, -10 * e / i)) + t;
            }
          }, {
            key: "easeInOut",
            value: function easeInOut(e, t, s, i) {
              return 0 === e ? t : e === i ? t + s : (e /= i / 2) < 1 ? s / 2 * Math.pow(2, 10 * (e - 1)) + t : s / 2 * (2 - Math.pow(2, -10 * --e)) + t;
            }
          }]);

          return t;
        }();

        t.EASE_IN = "expo_ease_in", t.EASE_OUT = "expo_ease_out", t.EASE_IN_OUT = "expo_ease_in_out", e.Expo = t, t.__class = "splashjs.animation.easing.Expo";
      }(e.easing || (e.easing = {}));
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      !function (e) {
        var t = /*#__PURE__*/function () {
          function t() {
            _classCallCheck(this, t);
          }

          _createClass(t, null, [{
            key: "easeIn",
            value: function easeIn(e, t, s, i) {
              return -s * (Math.sqrt(1 - (e /= i) * e) - 1) + t;
            }
          }, {
            key: "easeOut",
            value: function easeOut(e, t, s, i) {
              return s * Math.sqrt(1 - (e = e / i - 1) * e) + t;
            }
          }, {
            key: "easeInOut",
            value: function easeInOut(e, t, s, i) {
              return (e /= i / 2) < 1 ? -s / 2 * (Math.sqrt(1 - e * e) - 1) + t : s / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
            }
          }]);

          return t;
        }();

        t.EASE_IN = "circ_ease_in", t.EASE_OUT = "circ_ease_out", t.EASE_IN_OUT = "circ_ease_in_out", e.Circ = t, t.__class = "splashjs.animation.easing.Circ";
      }(e.easing || (e.easing = {}));
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function () {
          function s() {
            _classCallCheck(this, s);
          }

          _createClass(s, null, [{
            key: "easeIn$double$double$double$double",
            value: function easeIn$double$double$double$double(e, t, s, i) {
              var r = 1.70158;
              return s * (e /= i) * e * ((r + 1) * e - r) + t;
            }
          }, {
            key: "easeIn$double$double$double$double$double",
            value: function easeIn$double$double$double$double$double(e, t, s, i, r) {
              return s * (e /= i) * e * ((r + 1) * e - r) + t;
            }
          }, {
            key: "easeIn",
            value: function easeIn(t, s, i, r, n) {
              if ("number" != typeof t && null !== t || "number" != typeof s && null !== s || "number" != typeof i && null !== i || "number" != typeof r && null !== r || "number" != typeof n && null !== n) {
                if ("number" != typeof t && null !== t || "number" != typeof s && null !== s || "number" != typeof i && null !== i || "number" != typeof r && null !== r || void 0 !== n) throw new Error("invalid overload");
                return e.animation.easing.Back.easeIn$double$double$double$double(t, s, i, r);
              }

              return e.animation.easing.Back.easeIn$double$double$double$double$double(t, s, i, r, n);
            }
          }, {
            key: "easeOut$double$double$double$double",
            value: function easeOut$double$double$double$double(e, t, s, i) {
              var r = 1.70158;
              return s * ((e = e / i - 1) * e * ((r + 1) * e + r) + 1) + t;
            }
          }, {
            key: "easeOut$double$double$double$double$double",
            value: function easeOut$double$double$double$double$double(e, t, s, i, r) {
              return s * ((e = e / i - 1) * e * ((r + 1) * e + r) + 1) + t;
            }
          }, {
            key: "easeOut",
            value: function easeOut(t, s, i, r, n) {
              if ("number" != typeof t && null !== t || "number" != typeof s && null !== s || "number" != typeof i && null !== i || "number" != typeof r && null !== r || "number" != typeof n && null !== n) {
                if ("number" != typeof t && null !== t || "number" != typeof s && null !== s || "number" != typeof i && null !== i || "number" != typeof r && null !== r || void 0 !== n) throw new Error("invalid overload");
                return e.animation.easing.Back.easeOut$double$double$double$double(t, s, i, r);
              }

              return e.animation.easing.Back.easeOut$double$double$double$double$double(t, s, i, r, n);
            }
          }, {
            key: "easeInOut$double$double$double$double",
            value: function easeInOut$double$double$double$double(e, t, s, i) {
              var r = 1.70158;
              return (e /= i / 2) < 1 ? s / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + t : s / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + t;
            }
          }, {
            key: "easeInOut$double$double$double$double$double",
            value: function easeInOut$double$double$double$double$double(e, t, s, i, r) {
              return (e /= i / 2) < 1 ? s / 2 * (e * e * ((1 + (r *= 1.525)) * e - r)) + t : s / 2 * ((e -= 2) * e * ((1 + (r *= 1.525)) * e + r) + 2) + t;
            }
          }, {
            key: "easeInOut",
            value: function easeInOut(t, s, i, r, n) {
              if ("number" != typeof t && null !== t || "number" != typeof s && null !== s || "number" != typeof i && null !== i || "number" != typeof r && null !== r || "number" != typeof n && null !== n) {
                if ("number" != typeof t && null !== t || "number" != typeof s && null !== s || "number" != typeof i && null !== i || "number" != typeof r && null !== r || void 0 !== n) throw new Error("invalid overload");
                return e.animation.easing.Back.easeInOut$double$double$double$double(t, s, i, r);
              }

              return e.animation.easing.Back.easeInOut$double$double$double$double$double(t, s, i, r, n);
            }
          }]);

          return s;
        }();

        s.EASE_IN = "back_ease_in", s.EASE_OUT = "back_ease_out", s.EASE_IN_OUT = "back_ease_in_out", t.Back = s, s.__class = "splashjs.animation.easing.Back";
      }(t.easing || (t.easing = {}));
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      !function (e) {
        var t = /*#__PURE__*/function () {
          function t() {
            _classCallCheck(this, t);
          }

          _createClass(t, null, [{
            key: "easeIn",
            value: function easeIn(e, t, s, i) {
              return -s * Math.cos(e / i * (Math.PI / 2)) + s + t;
            }
          }, {
            key: "easeOut",
            value: function easeOut(e, t, s, i) {
              return s * Math.sin(e / i * (Math.PI / 2)) + t;
            }
          }, {
            key: "easeInOut",
            value: function easeInOut(e, t, s, i) {
              return -s / 2 * (Math.cos(Math.PI * e / i) - 1) + t;
            }
          }]);

          return t;
        }();

        t.EASE_IN = "sine_ease_in", t.EASE_OUT = "sine_ease_out", t.EASE_IN_OUT = "sine_ease_in_out", e.Sine = t, t.__class = "splashjs.animation.easing.Sine";
      }(e.easing || (e.easing = {}));
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      !function (e) {
        var t = /*#__PURE__*/function () {
          function t() {
            _classCallCheck(this, t);
          }

          _createClass(t, null, [{
            key: "easeIn",
            value: function easeIn(e, t, s, i) {
              return s * (e /= i) * e * e + t;
            }
          }, {
            key: "easeOut",
            value: function easeOut(e, t, s, i) {
              return s * ((e = e / i - 1) * e * e + 1) + t;
            }
          }, {
            key: "easeInOut",
            value: function easeInOut(e, t, s, i) {
              return (e /= i / 2) < 1 ? s / 2 * e * e * e + t : s / 2 * ((e -= 2) * e * e + 2) + t;
            }
          }]);

          return t;
        }();

        t.EASE_IN = "cubic_ease_in", t.EASE_OUT = "cubic_ease_out", t.EASE_IN_OUT = "cubic_ease_in_out", e.Cubic = t, t.__class = "splashjs.animation.easing.Cubic";
      }(e.easing || (e.easing = {}));
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      !function (e) {
        var t = /*#__PURE__*/function () {
          function t() {
            _classCallCheck(this, t);
          }

          _createClass(t, null, [{
            key: "easeIn",
            value: function easeIn(e, t, s, i) {
              return s * (e /= i) * e * e * e + t;
            }
          }, {
            key: "easeOut",
            value: function easeOut(e, t, s, i) {
              return -s * ((e = e / i - 1) * e * e * e - 1) + t;
            }
          }, {
            key: "easeInOut",
            value: function easeInOut(e, t, s, i) {
              return (e /= i / 2) < 1 ? s / 2 * e * e * e * e + t : -s / 2 * ((e -= 2) * e * e * e - 2) + t;
            }
          }]);

          return t;
        }();

        t.EASE_IN = "quart_ease_in", t.EASE_OUT = "quart_ease_out", t.EASE_IN_OUT = "quart_ease_in_out", e.Quart = t, t.__class = "splashjs.animation.easing.Quart";
      }(e.easing || (e.easing = {}));
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      !function (e) {
        var t = /*#__PURE__*/function () {
          function t() {
            _classCallCheck(this, t);
          }

          _createClass(t, null, [{
            key: "easeIn",
            value: function easeIn(e, t, s, i) {
              return s * (e /= i) * e * e * e * e + t;
            }
          }, {
            key: "easeOut",
            value: function easeOut(e, t, s, i) {
              return s * ((e = e / i - 1) * e * e * e * e + 1) + t;
            }
          }, {
            key: "easeInOut",
            value: function easeInOut(e, t, s, i) {
              return (e /= i / 2) < 1 ? s / 2 * e * e * e * e * e + t : s / 2 * ((e -= 2) * e * e * e * e + 2) + t;
            }
          }]);

          return t;
        }();

        t.EASE_IN = "quint_ease_in", t.EASE_OUT = "quint_ease_out", t.EASE_IN_OUT = "quint_ease_in_out", e.Quint = t, t.__class = "splashjs.animation.easing.Quint";
      }(e.easing || (e.easing = {}));
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function () {
          function s() {
            _classCallCheck(this, s);
          }

          _createClass(s, null, [{
            key: "easeIn$double$double$double$double",
            value: function easeIn$double$double$double$double(e, t, s, i) {
              if (0 === e) return t;
              if (1 == (e /= i)) return t + s;
              var r = .3 * i,
                  n = r / 4;
              return -s * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * i - n) * (2 * Math.PI) / r) + t;
            }
          }, {
            key: "easeIn$double$double$double$double$double$double",
            value: function easeIn$double$double$double$double$double$double(e, t, s, i, r, n) {
              var a;
              return 0 === e ? t : 1 == (e /= i) ? t + s : (r < Math.abs(s) ? (r = s, a = n / 4) : a = n / (2 * Math.PI) * Math.asin(s / r), -r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * i - a) * (2 * Math.PI) / n) + t);
            }
          }, {
            key: "easeIn",
            value: function easeIn(t, s, i, r, n, a) {
              if ("number" != typeof t && null !== t || "number" != typeof s && null !== s || "number" != typeof i && null !== i || "number" != typeof r && null !== r || "number" != typeof n && null !== n || "number" != typeof a && null !== a) {
                if ("number" != typeof t && null !== t || "number" != typeof s && null !== s || "number" != typeof i && null !== i || "number" != typeof r && null !== r || void 0 !== n || void 0 !== a) throw new Error("invalid overload");
                return e.animation.easing.Elastic.easeIn$double$double$double$double(t, s, i, r);
              }

              return e.animation.easing.Elastic.easeIn$double$double$double$double$double$double(t, s, i, r, n, a);
            }
          }, {
            key: "easeOut$double$double$double$double",
            value: function easeOut$double$double$double$double(e, t, s, i) {
              if (0 === e) return t;
              if (1 == (e /= i)) return t + s;
              var r = .3 * i,
                  n = r / 4;
              return s * Math.pow(2, -10 * e) * Math.sin((e * i - n) * (2 * Math.PI) / r) + s + t;
            }
          }, {
            key: "easeOut$double$double$double$double$double$double",
            value: function easeOut$double$double$double$double$double$double(e, t, s, i, r, n) {
              var a;
              return 0 === e ? t : 1 == (e /= i) ? t + s : (r < Math.abs(s) ? (r = s, a = n / 4) : a = n / (2 * Math.PI) * Math.asin(s / r), r * Math.pow(2, -10 * e) * Math.sin((e * i - a) * (2 * Math.PI) / n) + s + t);
            }
          }, {
            key: "easeOut",
            value: function easeOut(t, s, i, r, n, a) {
              if ("number" != typeof t && null !== t || "number" != typeof s && null !== s || "number" != typeof i && null !== i || "number" != typeof r && null !== r || "number" != typeof n && null !== n || "number" != typeof a && null !== a) {
                if ("number" != typeof t && null !== t || "number" != typeof s && null !== s || "number" != typeof i && null !== i || "number" != typeof r && null !== r || void 0 !== n || void 0 !== a) throw new Error("invalid overload");
                return e.animation.easing.Elastic.easeOut$double$double$double$double(t, s, i, r);
              }

              return e.animation.easing.Elastic.easeOut$double$double$double$double$double$double(t, s, i, r, n, a);
            }
          }, {
            key: "easeInOut$double$double$double$double",
            value: function easeInOut$double$double$double$double(e, t, s, i) {
              if (0 === e) return t;
              if (2 == (e /= i / 2)) return t + s;
              var r = i * Math.fround(.3 * 1.5),
                  n = s,
                  a = r / 4;
              return e < 1 ? n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * i - a) * (2 * Math.PI) / r) * -.5 + t : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * i - a) * (2 * Math.PI) / r) * .5 + s + t;
            }
          }, {
            key: "easeInOut$double$double$double$double$double$double",
            value: function easeInOut$double$double$double$double$double$double(e, t, s, i, r, n) {
              var a;
              return 0 === e ? t : 2 == (e /= i / 2) ? t + s : (r < Math.abs(s) ? (r = s, a = n / 4) : a = n / (2 * Math.PI) * Math.asin(s / r), e < 1 ? r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * i - a) * (2 * Math.PI) / n) * -.5 + t : r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * i - a) * (2 * Math.PI) / n) * .5 + s + t);
            }
          }, {
            key: "easeInOut",
            value: function easeInOut(t, s, i, r, n, a) {
              if ("number" != typeof t && null !== t || "number" != typeof s && null !== s || "number" != typeof i && null !== i || "number" != typeof r && null !== r || "number" != typeof n && null !== n || "number" != typeof a && null !== a) {
                if ("number" != typeof t && null !== t || "number" != typeof s && null !== s || "number" != typeof i && null !== i || "number" != typeof r && null !== r || void 0 !== n || void 0 !== a) throw new Error("invalid overload");
                return e.animation.easing.Elastic.easeInOut$double$double$double$double(t, s, i, r);
              }

              return e.animation.easing.Elastic.easeInOut$double$double$double$double$double$double(t, s, i, r, n, a);
            }
          }]);

          return s;
        }();

        s.EASE_IN = "elastic_ease_in", s.EASE_OUT = "elastic_ease_out", s.EASE_IN_OUT = "elastic_ease_in_out", t.Elastic = s, s.__class = "splashjs.animation.easing.Elastic";
      }(t.easing || (t.easing = {}));
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = /*#__PURE__*/function () {
        function t(e, s, i, r) {
          var _this2 = this;

          _classCallCheck(this, t);

          if (this.type = t.FrameType.FIXED, this.index = -1, this.width = -1, this.height = -1, this.x = 0, this.y = 0, "number" != typeof e && null !== e || "number" != typeof s && null !== s || "number" != typeof i && null !== i || "number" != typeof r && null !== r) {
            if ("number" != typeof e && null !== e || "number" != typeof s && null !== s || "number" != typeof i && null !== i || void 0 !== r) {
              if ("number" != typeof e && null !== e || "number" != typeof s && null !== s || void 0 !== i || void 0 !== r) throw new Error("invalid overload");
              {
                var _e3 = arguments,
                    _s3 = _e3[0],
                    _i2 = _e3[1];
                this.type = t.FrameType.FIXED, this.index = -1, this.width = -1, this.height = -1, this.x = 0, this.y = 0, function () {
                  _this2.width = _s3, _this2.height = _i2;
                }();
              }
            } else {
              var _e4 = arguments,
                  _s4 = _e4[0],
                  _i3 = _e4[1],
                  _r3 = _e4[2];
              this.type = t.FrameType.FIXED, this.index = -1, this.width = -1, this.height = -1, this.x = 0, this.y = 0, function () {
                _this2.width = _s4, _this2.height = _i3, _this2.index = _r3;
              }();
            }
          } else {
            this.type = t.FrameType.FIXED, this.index = -1, this.width = -1, this.height = -1, this.x = 0, this.y = 0, function () {
              _this2.x = e, _this2.y = s, _this2.width = i, _this2.height = r;
            }();
          }
        }

        _createClass(t, [{
          key: "getX",
          value: function getX() {
            return this.x;
          }
        }, {
          key: "getY",
          value: function getY() {
            return this.y;
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            return this.width;
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            return this.height;
          }
        }, {
          key: "getIndex",
          value: function getIndex() {
            return this.index;
          }
        }]);

        return t;
      }();

      e.Frame = t, t.__class = "splashjs.animation.Frame", t.__interfaces = ["splashjs.animation.iface.IFrame"], function (e) {
        var t = function t(e) {
          _classCallCheck(this, t);

          this.__parent = e;
        };

        t.FIXED = "fixed", e.FrameType = t, t.__class = "splashjs.animation.Frame.FrameType";
      }(t = e.Frame || (e.Frame = {}));
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.SCALE_X = "scale_x", t.SCALE_Y = "scale_y", t.SCALE_XY = "scale_xy", t.TRANSLATE_X = "translate_x", t.TRANSLATE_Y = "translate_y", t.TRANSLATE_XY = "translate_xy", t.FADE = "fade", t.ROTATION = "rotation", t.PARALLEL = "parallel", t.SEQUENTIAL = "sequential", t.PAUSE = "pause", e.TransitionType = t, t.__class = "splashjs.animation.TransitionType";
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.X = "x", t.Y = "y", t.XY = "xy", e.ScaleTransitionType = t, t.__class = "splashjs.animation.ScaleTransitionType";
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = /*#__PURE__*/function () {
        function t(e, _t6, s) {
          _classCallCheck(this, t);

          void 0 === this.spriteSheet && (this.spriteSheet = null), void 0 === this.frame && (this.frame = null), void 0 === this.label && (this.label = null), this.spriteSheet = e, this.frame = s, this.label = _t6;
        }

        _createClass(t, [{
          key: "getLabel",
          value: function getLabel() {
            return this.label;
          }
        }, {
          key: "getFrame",
          value: function getFrame() {
            return this.frame;
          }
        }, {
          key: "getSpriteSheet",
          value: function getSpriteSheet() {
            return this.spriteSheet;
          }
        }]);

        return t;
      }();

      e.SpriteData = t, t.__class = "splashjs.animation.SpriteData", t.__interfaces = ["splashjs.animation.iface.ISpriteData"];
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    var t = /*#__PURE__*/function () {
      function t() {
        _classCallCheck(this, t);
      }

      _createClass(t, null, [{
        key: "render",
        value: function render(t, s, i, r) {
          var n = new e.display.Stage(s, i, r);

          try {
            n.addChild(new t());
          } catch (e) {
            console.error(e.message, e);
          }
        }
      }, {
        key: "navigateToURL",
        value: function navigateToURL(t) {
          e.render.SplashJSRenderer.navigateToURL(t);
        }
      }]);

      return t;
    }();

    e.SplashJS = t, t.__class = "splashjs.SplashJS";
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.NAME = "name", t.RGB = "rgb", t.RGBA = "rgba", t.HSL = "hsl", t.HSLA = "hsla", t.HEX = "hex", t.GRADIENT = "gradient", e.ColorType = t, t.__class = "splashjs.utils.ColorType";
    }(e.utils || (e.utils = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.CIRCLE = "circle", t.ELLIPSE = "ellipse", e.GradientShape = t, t.__class = "splashjs.utils.GradientShape";
    }(e.utils || (e.utils = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);

          this.colors = [], this.repeat = !1;
        }

        _createClass(t, [{
          key: "addColor",
          value: function addColor(e) {
            this.colors.push(e);
          }
        }, {
          key: "addColors",
          value: function addColors() {
            for (var _t7 = 0; _t7 < arguments.length; _t7++) {
              var s = _t7 < 0 || arguments.length <= _t7 ? undefined : arguments[_t7];
              this.colors.push(s);
            }
          }
        }, {
          key: "getColors",
          value: function getColors() {
            return this.colors;
          }
        }, {
          key: "setRepeat",
          value: function setRepeat(e) {
            this.repeat = e;
          }
        }, {
          key: "getRepeat",
          value: function getRepeat() {
            return this.repeat;
          }
        }]);

        return t;
      }();

      e.Gradient = t, t.__class = "splashjs.utils.Gradient", t.__interfaces = ["splashjs.utils.iface.IGradient"];
    }(e.utils || (e.utils = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      !function (e) {
        var t = function t() {
          _classCallCheck(this, t);
        };

        e.ByteArray = t, t.__class = "splashjs.utils.desktop.ByteArray", t.__interfaces = ["splashjs.utils.desktop.IDesktopByteArray"];
      }(e.desktop || (e.desktop = {}));
    }(e.utils || (e.utils = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.CLOSEST_SIDE = "closest-side", t.FARTHEST_SIDE = "farthest-side", t.CLOSEST_CORNER = "closest-corner", t.FARTHEST_CORNER = "farthest-corner", e.GradientSize = t, t.__class = "splashjs.utils.GradientSize";
    }(e.utils || (e.utils = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.SOUND = "sound", t.IMAGE = "image", t.VIDEO = "video", e.ResourceType = t, t.__class = "splashjs.utils.ResourceType";
    }(e.utils || (e.utils = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.WHITE = "White", t.TOMATO = "Tomato", t.ORANGE = "Orange", t.DODGER_BLUE = "DodgerBlue", t.MEDIUM_SEA_GREEN = "MediumSeaGreen", t.GRAY = "Gray", t.SLATE_BLUE = "SlateBlue", t.VIOLET = "Violet", t.LIGHT_GRAY = "LightGray", t.ALICE_BLUE = "AliceBlue", t.ANTIQUE_WHITE = "AntiqueWhite", t.AQUA = "Aqua", t.AQUAMARINE = "Aquamarine", t.AZURE = "Azure", t.BEIGE = "Beige", t.BISQUE = "Bisque", t.BLACK = "Black", t.BLANCHED_ALMOND = "BlanchedAlmond", t.BLUE = "Blue", t.BLUE_VIOLET = "BlueViolet", t.BROWN = "Brown", t.BURLY_WOOD = "BurlyWood", t.CADET_BLUE = "CadetBlue", t.RED = "red", t.YELLOW = "yellow", t.GREEN = "green", t.NONE = "none", e.ColorName = t, t.__class = "splashjs.utils.ColorName";
    }(e.utils || (e.utils = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.TOP_TO_BOTTOM = "top_to_bottom", t.BOTTOM_TO_TOP = "bottom_to_top", t.LEFT_TO_RIGHT = "left_to_right", t.RIGHT_TO_LEFT = "right_to_left", t.TOP_TO_LEFT = "top_to_left", t.TOP_TO_RIGHT = "top_to_right", t.BOTTOM_TO_LEFT = "bottom_to_left", t.BOTTOM_TO_RIGHT = "bottom_to_right", t.LEFT_TO_TOP = "left_to_top", t.LEFT_TO_BOTTOM = "left_to_bottom", t.RIGHT_TO_TOP = "right_to_top", t.RIGHT_TO_BOTTOM = "right_to_bottom", e.GradientDirection = t, t.__class = "splashjs.utils.GradientDirection";
    }(e.utils || (e.utils = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.APPEND = "append", t.READ = "read", t.UPDATE = "update", t.WRITE = "write", e.FileMode = t, t.__class = "splashjs.filesystem.FileMode";
    }(e.filesystem || (e.filesystem = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      !function (e) {
        !function (e) {
          var t = /*#__PURE__*/function () {
            function t(e) {
              _classCallCheck(this, t);

              if ("string" == typeof e || null === e) {} else {
                if (void 0 !== e) throw new Error("invalid overload");
              }
            }

            _createClass(t, [{
              key: "browseForDirectory$java_lang_String",
              value: function browseForDirectory$java_lang_String(e) {}
            }, {
              key: "browseForDirectory$java_lang_Object",
              value: function browseForDirectory$java_lang_Object(e) {}
            }, {
              key: "browseForDirectory$",
              value: function browseForDirectory$() {}
            }, {
              key: "browseForDirectory$java_lang_String$java_lang_Object",
              value: function browseForDirectory$java_lang_String$java_lang_Object(e, t) {}
            }, {
              key: "browseForDirectory",
              value: function browseForDirectory(e, t) {
                if ("string" != typeof e && null !== e || null == t && null !== t) {
                  if ("string" != typeof e && null !== e || void 0 !== t) {
                    if (null == e && null !== e || void 0 !== t) {
                      if (void 0 === e && void 0 === t) return this.browseForDirectory$();
                      throw new Error("invalid overload");
                    }

                    return this.browseForDirectory$java_lang_Object(e);
                  }

                  return this.browseForDirectory$java_lang_String(e);
                }

                return this.browseForDirectory$java_lang_String$java_lang_Object(e, t);
              }
            }], [{
              key: "newInstance",
              value: function newInstance() {
                return new t();
              }
            }]);

            return t;
          }();

          e.FileStub = t, t.__class = "splashjs.filesystem.desktop.stubs.FileStub";
        }(e.stubs || (e.stubs = {}));
      }(e.desktop || (e.desktop = {}));
    }(e.filesystem || (e.filesystem = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function () {
        function s(t) {
          var _this3 = this;

          _classCallCheck(this, s);

          if ("string" == typeof t || null === t) {
            void 0 === this.fileStub && (this.fileStub = null), void 0 === this.path && (this.path = null), void 0 === this.fileStub && (this.fileStub = null), void 0 === this.path && (this.path = null), function () {
              _this3.path = t, _this3.fileStub = e.filesystem.desktop.stubs.FileStub.newInstance();
            }();
          } else {
            if (void 0 !== t) throw new Error("invalid overload");
            {
              var _t8 = null;
              void 0 === this.fileStub && (this.fileStub = null), void 0 === this.path && (this.path = null), void 0 === this.fileStub && (this.fileStub = null), void 0 === this.path && (this.path = null), function () {
                _this3.path = _t8, _this3.fileStub = e.filesystem.desktop.stubs.FileStub.newInstance();
              }();
            }
          }
        }

        _createClass(s, [{
          key: "browseForDirectory$java_lang_String",
          value: function browseForDirectory$java_lang_String(e) {
            this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(e, null);
          }
        }, {
          key: "browseForDirectory$java_lang_Object",
          value: function browseForDirectory$java_lang_Object(e) {
            this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(null, e);
          }
        }, {
          key: "browseForDirectory$",
          value: function browseForDirectory$() {
            this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(null, null);
          }
        }, {
          key: "browseForDirectory$java_lang_String$java_lang_Object",
          value: function browseForDirectory$java_lang_String$java_lang_Object(e, t) {
            this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(e, t);
          }
        }, {
          key: "browseForDirectory",
          value: function browseForDirectory(e, t) {
            if ("string" != typeof e && null !== e || null == t && null !== t) {
              if ("string" != typeof e && null !== e || void 0 !== t) {
                if (null == e && null !== e || void 0 !== t) {
                  if (void 0 === e && void 0 === t) return this.browseForDirectory$();
                  throw new Error("invalid overload");
                }

                return this.browseForDirectory$java_lang_Object(e);
              }

              return this.browseForDirectory$java_lang_String(e);
            }

            return this.browseForDirectory$java_lang_String$java_lang_Object(e, t);
          }
        }]);

        return s;
      }();

      t.File = s, s.__class = "splashjs.filesystem.File";
    }(e.filesystem || (e.filesystem = {}));
  }(splashjs || (splashjs = {})), function (splashjs) {
    var Class = /*#__PURE__*/function () {
      function Class(e, t, s) {
        _classCallCheck(this, Class);

        void 0 === this.packageID && (this.packageID = null), void 0 === this.userClassName && (this.userClassName = null), void 0 === this.userClass && (this.userClass = null), this.packageID = e, this.userClassName = t, this.userClass = s;
      }

      _createClass(Class, null, [{
        key: "classes_$LI$",
        value: function classes_$LI$() {
          return null == Class.classes && (Class.classes = []), Class.classes;
        }
      }, {
        key: "define",
        value: function define(packageID, classInFunc) {
          var userClass = classInFunc(),
              userClassName = userClass.name;
          if (null == packageID || 0 === packageID.length) window[userClassName] = userClass;else {
            var words = packageID.split("."),
                js = "",
                str = "";

            for (var i = 0; i < words.length; i++) {
              0 === i ? (window[words[i]] = new Object(), js = words[0] + " = " + words[0] + " || {};", eval(js), str = words[0], console.info(js)) : i > 0 && (str += "." + words[i], js = str + " = " + str + " || {};", eval(js), console.info(js));
            }

            var fullPackage = eval(str);
            fullPackage[userClassName] = userClass, console.info(str);
          }
          Class.classes_$LI$().push(new splashjs.Class(packageID, userClassName, userClass));
        }
      }, {
        key: "get",
        value: function get(className) {
          return eval(className);
        }
      }]);

      return Class;
    }();

    splashjs.Class = Class, Class.__class = "splashjs.Class";
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.DENIED = "denied", t.GRANTED = "granted", t.ONLY_WHEN_IN_USE = "only_when_in_use", t.UNKNOWN = "unknown", e.PermissionStatus = t, t.__class = "splashjs.permissions.PermissionStatus";
    }(e.permissions || (e.permissions = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = /*#__PURE__*/function (_Error) {
        _inherits(t, _Error);

        function t(e) {
          var _this4;

          _classCallCheck(this, t);

          _this4 = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this, e)), _this4.message = e, Object.setPrototypeOf(_assertThisInitialized(_this4), t.prototype);
          return _this4;
        }

        return t;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      e.RuntimeError = t, t.__class = "splashjs.lang.RuntimeError", t.__interfaces = ["java.io.Serializable"];
    }(e.lang || (e.lang = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = /*#__PURE__*/function () {
        function t() {
          _classCallCheck(this, t);
        }

        _createClass(t, [{
          key: "toString",
          value: function toString() {
            var e;
            return "[instance of " + ((e = this.constructor).__class ? e.__class : e.name) + "]";
          }
        }]);

        return t;
      }();

      e.SplashObject = t, t.__class = "splashjs.lang.SplashObject", t.__interfaces = ["splashjs.lang.iface.ISplashObject"];
    }(e.lang || (e.lang = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = /*#__PURE__*/function (_Error2) {
        _inherits(t, _Error2);

        function t(e, s) {
          var _this5;

          _classCallCheck(this, t);

          if ("string" != typeof e && null !== e || "number" != typeof s && null !== s) {
            if ("string" != typeof e && null !== e || void 0 !== s) throw new Error("invalid overload");
            _this5 = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)), void 0 === _this5.errorID && (_this5.errorID = 0), void 0 === _this5.message && (_this5.message = null), void 0 === _this5.name && (_this5.name = null), Object.setPrototypeOf(_assertThisInitialized(_this5), t.prototype), void 0 === _this5.errorID && (_this5.errorID = 0), void 0 === _this5.message && (_this5.message = null), void 0 === _this5.name && (_this5.name = null), function () {
              var t;
              _this5.message = e, _this5.name = (t = _this5.constructor).__class ? t.__class : t.name;
            }();
          } else {
            _this5 = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)), void 0 === _this5.errorID && (_this5.errorID = 0), void 0 === _this5.message && (_this5.message = null), void 0 === _this5.name && (_this5.name = null), Object.setPrototypeOf(_assertThisInitialized(_this5), t.prototype), void 0 === _this5.errorID && (_this5.errorID = 0), void 0 === _this5.message && (_this5.message = null), void 0 === _this5.name && (_this5.name = null), function () {
              var t;
              _this5.message = e, _this5.errorID = s, _this5.name = (t = _this5.constructor).__class ? t.__class : t.name;
            }();
          }

          return _possibleConstructorReturn(_this5);
        }

        _createClass(t, [{
          key: "getErrorID",
          value: function getErrorID() {
            return this.errorID;
          }
        }, {
          key: "getMessage",
          value: function getMessage() {
            return this.message;
          }
        }, {
          key: "getName",
          value: function getName() {
            return this.name;
          }
        }]);

        return t;
      }( /*#__PURE__*/_wrapNativeSuper(Error));

      e.SplashError = t, t.__class = "splashjs.lang.SplashError", t.__interfaces = ["splashjs.lang.iface.ISplashError", "java.io.Serializable"];
    }(e.lang || (e.lang = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      e.BaseItem = t, t.__class = "splashjs.controls.BaseItem", t.__interfaces = ["splashjs.controls.iface.IBaseItem"];
    }(e.controls || (e.controls = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.TOP = "top", t.BOTTOM = "bottom", t.LEFT = "left", t.RIGHT = "right", e.LabelAlignment = t, t.__class = "splashjs.controls.LabelAlignment";
    }(e.controls || (e.controls = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function () {
        function s(e) {
          _classCallCheck(this, s);

          this.radioButtons = [], this.eventHandlers = [], void 0 === this.name && (this.name = null), this.name = e;
        }

        _createClass(s, [{
          key: "getName",
          value: function getName() {
            return this.name;
          }
        }, {
          key: "getNumRadioButtons",
          value: function getNumRadioButtons() {
            return this.radioButtons.length;
          }
        }, {
          key: "getSelectedData",
          value: function getSelectedData() {
            return this.getSelection().getValue();
          }
        }, {
          key: "setSelection",
          value: function setSelection(e) {
            var t = null;

            for (var _s5 = 0; _s5 < this.radioButtons.length; _s5++) {
              if (t = this.radioButtons[_s5], t === e) {
                this.setAllSelected(!1), t.setSelected(!0);
                break;
              }
            }
          }
        }, {
          key: "getSelection",
          value: function getSelection() {
            var e = null,
                t = null;

            for (var _s6 = 0; _s6 < this.radioButtons.length; _s6++) {
              if (t = this.radioButtons[_s6], !0 === t.getSelected()) {
                e = t;
                break;
              }
            }

            return e;
          }
        }, {
          key: "addRadioButton",
          value: function addRadioButton(t) {
            var _this6 = this;

            var s = function s(e) {
              _this6.setAllSelected(!1), e.getCurrentTarget().setSelected(!0);
            };

            t.addEventListener(e.events.MouseEvent.CLICK, s), t.setGroup(this), this.radioButtons.push(t), this.eventHandlers.push(s);
          }
        }, {
          key: "removeRadioButton",
          value: function removeRadioButton(t) {
            var s = -1;

            for (var _e5 = 0; _e5 < this.radioButtons.length; _e5++) {
              if (t === this.radioButtons[_e5]) {
                s = _e5;
                break;
              }
            }

            s >= 0 && (this.radioButtons[s].setGroup(null), this.radioButtons[s].removeEventListener(e.events.MouseEvent.CLICK, this.eventHandlers[s]), this.radioButtons.splice(s, 1)[0], this.eventHandlers.splice(s, 1)[0]);
          }
        }, {
          key: "setAllSelected",
          value: function setAllSelected(e) {
            for (var _t9 = 0; _t9 < this.radioButtons.length; _t9++) {
              this.radioButtons[_t9].setSelected(e);
            }
          }
        }]);

        return s;
      }();

      t.RadioButtonGroup = s, s.__class = "splashjs.controls.RadioButtonGroup", s.__interfaces = ["splashjs.controls.iface.IRadioButtonGroup"];
    }(e.controls || (e.controls = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = /*#__PURE__*/function () {
        function t(e, _t10) {
          var _this7 = this;

          _classCallCheck(this, t);

          if ("number" != typeof e && null !== e || "number" != typeof _t10 && null !== _t10) {
            if (void 0 !== e || void 0 !== _t10) throw new Error("invalid overload");
            void 0 === this.x && (this.x = 0), void 0 === this.y && (this.y = 0), void 0 === this.x && (this.x = 0), void 0 === this.y && (this.y = 0);
          } else {
            void 0 === this.x && (this.x = 0), void 0 === this.y && (this.y = 0), void 0 === this.x && (this.x = 0), void 0 === this.y && (this.y = 0), function () {
              _this7.x = e, _this7.y = _t10;
            }();
          }
        }

        _createClass(t, [{
          key: "setX",
          value: function setX(e) {
            this.x = e;
          }
        }, {
          key: "getX",
          value: function getX() {
            return this.x;
          }
        }, {
          key: "setY",
          value: function setY(e) {
            this.y = e;
          }
        }, {
          key: "getY",
          value: function getY() {
            return this.y;
          }
        }]);

        return t;
      }();

      e.Point = t, t.__class = "splashjs.geom.Point", t.__interfaces = ["splashjs.geom.iface.IPoint"];
    }(e.geom || (e.geom = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = /*#__PURE__*/function () {
        function t(e, _t11, s) {
          var _this8 = this;

          _classCallCheck(this, t);

          if ("number" != typeof e && null !== e || "number" != typeof _t11 && null !== _t11 || "number" != typeof s && null !== s) {
            if (void 0 !== e || void 0 !== _t11 || void 0 !== s) throw new Error("invalid overload");
            void 0 === this.centerX && (this.centerX = 0), void 0 === this.centerY && (this.centerY = 0), void 0 === this.radius && (this.radius = 0), void 0 === this.centerX && (this.centerX = 0), void 0 === this.centerY && (this.centerY = 0), void 0 === this.radius && (this.radius = 0);
          } else {
            void 0 === this.centerX && (this.centerX = 0), void 0 === this.centerY && (this.centerY = 0), void 0 === this.radius && (this.radius = 0), void 0 === this.centerX && (this.centerX = 0), void 0 === this.centerY && (this.centerY = 0), void 0 === this.radius && (this.radius = 0), function () {
              _this8.centerX = e, _this8.centerY = _t11, _this8.radius = s;
            }();
          }
        }

        _createClass(t, [{
          key: "setCenterX",
          value: function setCenterX(e) {
            return this.centerX = e, this;
          }
        }, {
          key: "getCenterX",
          value: function getCenterX() {
            return this.centerX;
          }
        }, {
          key: "setCenterY",
          value: function setCenterY(e) {
            return this.centerY = e, this;
          }
        }, {
          key: "getCenterY",
          value: function getCenterY() {
            return this.centerY;
          }
        }, {
          key: "setRadius",
          value: function setRadius(e) {
            return this.radius = e, this;
          }
        }, {
          key: "getRadius",
          value: function getRadius() {
            return this.radius;
          }
        }]);

        return t;
      }();

      e.Circle = t, t.__class = "splashjs.geom.Circle", t.__interfaces = ["splashjs.geom.iface.ICircle"];
    }(e.geom || (e.geom = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = /*#__PURE__*/function () {
        function t(e, _t12, s, i) {
          _classCallCheck(this, t);

          void 0 === this.x && (this.x = 0), void 0 === this.y && (this.y = 0), void 0 === this.width && (this.width = 0), void 0 === this.height && (this.height = 0), this.x = e, this.y = _t12, this.width = s, this.height = i;
        }

        _createClass(t, [{
          key: "getX",
          value: function getX() {
            return this.x;
          }
        }, {
          key: "getY",
          value: function getY() {
            return this.y;
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            return this.width;
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            return this.height;
          }
        }]);

        return t;
      }();

      e.Rectangle = t, t.__class = "splashjs.geom.Rectangle", t.__interfaces = ["splashjs.geom.iface.IRectangle"];
    }(e.geom || (e.geom = {}));
  }(splashjs || (splashjs = {})), function (e) {
    var t = /*#__PURE__*/function () {
      function t() {
        _classCallCheck(this, t);
      }

      _createClass(t, null, [{
        key: "className_$LI$",
        value: function className_$LI$() {
          return null == t.className && (t.className = []), t.className;
        }
      }, {
        key: "packageName_$LI$",
        value: function packageName_$LI$() {
          return null == t.packageName && (t.packageName = []), t.packageName;
        }
      }, {
        key: "clazz",
        value: function clazz(e) {
          return e;
        }
      }, {
        key: "clazzAs",
        value: function clazzAs(e, t) {
          return e;
        }
      }, {
        key: "getClassName",
        value: function getClassName(e) {
          return t.className_$LI$()[e];
        }
      }, {
        key: "getPackageName",
        value: function getPackageName(e) {
          return t.packageName_$LI$()[e];
        }
      }]);

      return t;
    }();

    e.Import = t, t.__class = "splashjs.Import";
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.EXACT_FIT = "excat_fit", t.NO_BORDER = "no_border", t.NO_SCALE = "no_scale", t.SHOW_ALL = "show_all", e.StageScaleMode = t, t.__class = "splashjs.display.StageScaleMode";
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.MAXIMIZED = "maximized", t.MINIMIZED = "minimized", t.NORMAL = "normal", e.NativeWindowDisplayState = t, t.__class = "splashjs.display.NativeWindowDisplayState";
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      !function (e) {
        !function (e) {
          var t = /*#__PURE__*/function () {
            function t() {
              _classCallCheck(this, t);
            }

            _createClass(t, [{
              key: "show",
              value: function show() {}
            }, {
              key: "getStage",
              value: function getStage() {
                return null;
              }
            }], [{
              key: "newInstance",
              value: function newInstance() {
                return new t();
              }
            }]);

            return t;
          }();

          e.NativeWindowStub = t, t.__class = "splashjs.display.desktop.stubs.NativeWindowStub";
        }(e.stubs || (e.stubs = {}));
      }(e.desktop || (e.desktop = {}));
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.BOTTOM = "bottom", t.BOTTOM_LEFT = "bottom_left", t.BOTTOM_RIGHT = "bottom_right", t.LEFT = "left", t.NONE = "none", t.RIGHT = "right", t.TOP = "top", t.TOP_LEFT = "top_left", t.TOP_RIGHT = "top_right", e.NativeWindowResize = t, t.__class = "splashjs.display.NativeWindowResize";
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function () {
        function s() {
          _classCallCheck(this, s);

          this.maximizable = !0, this.minimizable = !0, this.owner = null, this.renderMode = null, this.resizable = !0, this.systemChrome = e.display.NativeWindowSystemChrome.STANDARD, this.transparent = !1, this.type = e.display.NativeWindowType.NORMAL;
        }

        _createClass(s, [{
          key: "setMaximizable",
          value: function setMaximizable(e) {
            this.maximizable = e;
          }
        }, {
          key: "getMaximizable",
          value: function getMaximizable() {
            return this.maximizable;
          }
        }, {
          key: "setMinizable",
          value: function setMinizable(e) {
            this.minimizable = e;
          }
        }, {
          key: "setOwner",
          value: function setOwner(e) {
            this.owner = e;
          }
        }, {
          key: "getOwner",
          value: function getOwner() {
            return this.owner;
          }
        }]);

        return s;
      }();

      t.NativeWindowInitOptions = s, s.__class = "splashjs.display.NativeWindowInitOptions";
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.LIGHTWEIGHT = "lightweight", t.NORMAL = "normal", t.UTILITY = "utility", e.NativeWindowType = t, t.__class = "splashjs.display.NativeWindowType";
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function () {
        function s(t) {
          var _this9 = this;

          _classCallCheck(this, s);

          if (null != t && _instanceof(t, e.display.NativeWindowInitOptions) || null === t) {
            void 0 === this.initOptions && (this.initOptions = null), void 0 === this.nativeWindowStub && (this.nativeWindowStub = null), void 0 === this.initOptions && (this.initOptions = null), void 0 === this.nativeWindowStub && (this.nativeWindowStub = null), function () {
              _this9.initOptions = t, _this9.nativeWindowStub = e.display.desktop.stubs.NativeWindowStub.newInstance();
            }();
          } else {
            if (void 0 !== t) throw new Error("invalid overload");
            {
              var _t13 = new e.display.NativeWindowInitOptions();

              void 0 === this.initOptions && (this.initOptions = null), void 0 === this.nativeWindowStub && (this.nativeWindowStub = null), void 0 === this.initOptions && (this.initOptions = null), void 0 === this.nativeWindowStub && (this.nativeWindowStub = null), function () {
                _this9.initOptions = _t13, _this9.nativeWindowStub = e.display.desktop.stubs.NativeWindowStub.newInstance();
              }();
            }
          }
        }

        _createClass(s, [{
          key: "activate",
          value: function activate() {
            this.nativeWindowStub.show();
          }
        }, {
          key: "getStage",
          value: function getStage() {
            return this.nativeWindowStub.getStage();
          }
        }]);

        return s;
      }();

      t.NativeWindow = s, s.__class = "splashjs.display.NativeWindow", s.__interfaces = ["splashjs.display.desktop.iface.INativeWindow"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.AUTO = "auto", t.CPU = "cpu", t.DIRECT = "direct", t.GPU = "gpu", e.NativeWindowRenderMode = t, t.__class = "splashjs.display.NativeWindowRenderMode";
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.ALTERNATE = "alternate", t.NONE = "none", t.STANDARD = "standard", e.NativeWindowSystemChrome = t, t.__class = "splashjs.display.NativeWindowSystemChrome";
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.BOTTOM = "bottom", t.BOTTOM_LEFT = "bottom_left", t.BOTTOM_RIGHT = "bottom_right", t.LEFT = "left", t.RIGHT = "right", t.TOP = "top", t.TOP_LEFT = "top_left", t.TOP_RIGHT = "top_right", e.StageAlign = t, t.__class = "splashjs.display.StageAlign";
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.ITALIC = "italic", t.NORMAL = "normal", t.OBLIQUE = "oblique", e.FontStyle = t, t.__class = "splashjs.text.FontStyle";
    }(e.text || (e.text = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = /*#__PURE__*/function () {
        function t(e) {
          var _this10 = this;

          _classCallCheck(this, t);

          if ("string" == typeof e || null === e) {
            void 0 === this.normalFontPath && (this.normalFontPath = null), void 0 === this.italicFontPath && (this.italicFontPath = null), void 0 === this.boldFontPath && (this.boldFontPath = null), void 0 === this.boldItalicFontPath && (this.boldItalicFontPath = null), void 0 === this.normalFontPath && (this.normalFontPath = null), void 0 === this.italicFontPath && (this.italicFontPath = null), void 0 === this.boldFontPath && (this.boldFontPath = null), void 0 === this.boldItalicFontPath && (this.boldItalicFontPath = null), function () {
              _this10.normalFontPath = e;
            }();
          } else {
            if (void 0 !== e) throw new Error("invalid overload");
            void 0 === this.normalFontPath && (this.normalFontPath = null), void 0 === this.italicFontPath && (this.italicFontPath = null), void 0 === this.boldFontPath && (this.boldFontPath = null), void 0 === this.boldItalicFontPath && (this.boldItalicFontPath = null), void 0 === this.normalFontPath && (this.normalFontPath = null), void 0 === this.italicFontPath && (this.italicFontPath = null), void 0 === this.boldFontPath && (this.boldFontPath = null), void 0 === this.boldItalicFontPath && (this.boldItalicFontPath = null);
          }
        }

        _createClass(t, [{
          key: "setNormalFontPath",
          value: function setNormalFontPath(e) {
            return this.normalFontPath = e, this;
          }
        }, {
          key: "setBoldFontPath",
          value: function setBoldFontPath(e) {
            return this.boldFontPath = e, this;
          }
        }, {
          key: "setItalicFontPath",
          value: function setItalicFontPath(e) {
            return this.italicFontPath = e, this;
          }
        }, {
          key: "setBoldItalicFontPath",
          value: function setBoldItalicFontPath(e) {
            return this.boldItalicFontPath = e, this;
          }
        }, {
          key: "getNormalFontPath",
          value: function getNormalFontPath() {
            return this.normalFontPath;
          }
        }, {
          key: "getBoldFontPath",
          value: function getBoldFontPath() {
            return this.boldFontPath;
          }
        }, {
          key: "getItalicFontPath",
          value: function getItalicFontPath() {
            return this.italicFontPath;
          }
        }, {
          key: "getBoldItalicFontPath",
          value: function getBoldItalicFontPath() {
            return this.boldItalicFontPath;
          }
        }]);

        return t;
      }();

      e.FontPath = t, t.__class = "splashjs.text.FontPath";
    }(e.text || (e.text = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.NORMAL = "normal", t.LIGHTER = "lighter", t.BOLD = "bold", t.BOLDER = "bolder", e.FontWeight = t, t.__class = "splashjs.text.FontWeight";
    }(e.text || (e.text = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = /*#__PURE__*/function () {
        function t(e, _t14, s, i) {
          var _this11 = this;

          _classCallCheck(this, t);

          if (!(null != e && (null != e.__interfaces && e.__interfaces.indexOf("splashjs.text.iface.IFont") >= 0 || null != e.constructor && null != e.constructor.__interfaces && e.constructor.__interfaces.indexOf("splashjs.text.iface.IFont") >= 0) || null === e) || "string" != typeof _t14 && null !== _t14 || "string" != typeof s && null !== s || "number" != typeof i && null !== i) {
            if (void 0 !== e || void 0 !== _t14 || void 0 !== s || void 0 !== i) throw new Error("invalid overload");
            void 0 === this.font && (this.font = null), void 0 === this.fontStyle && (this.fontStyle = null), void 0 === this.fontWeight && (this.fontWeight = null), void 0 === this.fontSize && (this.fontSize = 0), void 0 === this.font && (this.font = null), void 0 === this.fontStyle && (this.fontStyle = null), void 0 === this.fontWeight && (this.fontWeight = null), void 0 === this.fontSize && (this.fontSize = 0);
          } else {
            void 0 === this.font && (this.font = null), void 0 === this.fontStyle && (this.fontStyle = null), void 0 === this.fontWeight && (this.fontWeight = null), void 0 === this.fontSize && (this.fontSize = 0), void 0 === this.font && (this.font = null), void 0 === this.fontStyle && (this.fontStyle = null), void 0 === this.fontWeight && (this.fontWeight = null), void 0 === this.fontSize && (this.fontSize = 0), function () {
              _this11.font = e, _this11.fontStyle = _t14, _this11.fontWeight = s, _this11.fontSize = i;
            }();
          }
        }

        _createClass(t, [{
          key: "setFont",
          value: function setFont(e) {
            this.font = e;
          }
        }, {
          key: "getFont",
          value: function getFont() {
            return this.font;
          }
        }, {
          key: "setFontStyle",
          value: function setFontStyle(e) {
            this.fontStyle = e;
          }
        }, {
          key: "getFontStyle",
          value: function getFontStyle() {
            return this.fontStyle;
          }
        }, {
          key: "setFontWeight",
          value: function setFontWeight(e) {
            this.fontWeight = e;
          }
        }, {
          key: "getFontWeight",
          value: function getFontWeight() {
            return this.fontWeight;
          }
        }, {
          key: "setFontSize",
          value: function setFontSize(e) {
            this.fontSize = e;
          }
        }, {
          key: "getFontSize",
          value: function getFontSize() {
            return this.fontSize;
          }
        }]);

        return t;
      }();

      e.TextFormat = t, t.__class = "splashjs.text.TextFormat", t.__interfaces = ["splashjs.text.iface.ITextFormat"];
    }(e.text || (e.text = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = function t() {
        _classCallCheck(this, t);
      };

      t.PROGRESS = "progress", t.ONLINE = "online", t.OFFLINE = "offline", t.IO_ERROR = "io_error", t.LOADED = "loaded", t.ABOUT_TO_BE_ADDED_TO_STAGE = "about_to_be_added_to_stage", t.STAGE_READY = "stage_ready", t.STAGE_RENDERED = "stage_rendered", t.WINDOW_CREATED = "window_created", e.EventName = t, t.__class = "splashjs.events.EventName";
    }(e.events || (e.events = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (e) {
      var t = /*#__PURE__*/function () {
        function t(e, _t15, s) {
          var _this12 = this;

          _classCallCheck(this, t);

          if (("string" == typeof e || null === e) && (null != _t15 && (null != _t15.__interfaces && _t15.__interfaces.indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || null != _t15.constructor && null != _t15.constructor.__interfaces && _t15.constructor.__interfaces.indexOf("splashjs.events.iface.IEventDispatcher") >= 0) || null === _t15) && (null != s && (null != s.__interfaces && s.__interfaces.indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || null != s.constructor && null != s.constructor.__interfaces && s.constructor.__interfaces.indexOf("splashjs.events.iface.IEventDispatcher") >= 0) || null === s)) {
            void 0 === this.type && (this.type = null), void 0 === this.target && (this.target = null), void 0 === this.currentTarget && (this.currentTarget = null), void 0 === this.data && (this.data = null), void 0 === this.altKey && (this.altKey = !1), void 0 === this.type && (this.type = null), void 0 === this.target && (this.target = null), void 0 === this.currentTarget && (this.currentTarget = null), void 0 === this.data && (this.data = null), void 0 === this.altKey && (this.altKey = !1), function () {
              _this12.type = e, _this12.target = _t15, _this12.currentTarget = s;
            }();
          } else {
            if ("string" != typeof e && null !== e || void 0 !== _t15 || void 0 !== s) throw new Error("invalid overload");
            void 0 === this.type && (this.type = null), void 0 === this.target && (this.target = null), void 0 === this.currentTarget && (this.currentTarget = null), void 0 === this.data && (this.data = null), void 0 === this.altKey && (this.altKey = !1), void 0 === this.type && (this.type = null), void 0 === this.target && (this.target = null), void 0 === this.currentTarget && (this.currentTarget = null), void 0 === this.data && (this.data = null), void 0 === this.altKey && (this.altKey = !1), function () {
              _this12.type = e;
            }();
          }
        }

        _createClass(t, [{
          key: "getType",
          value: function getType() {
            return this.type;
          }
        }, {
          key: "setTarget",
          value: function setTarget(e) {
            this.target = e;
          }
        }, {
          key: "getTarget",
          value: function getTarget() {
            return this.target;
          }
        }, {
          key: "setCurrentTarget",
          value: function setCurrentTarget(e) {
            this.currentTarget = e;
          }
        }, {
          key: "getCurrentTarget",
          value: function getCurrentTarget() {
            return this.currentTarget;
          }
        }, {
          key: "setData",
          value: function setData(e) {
            this.data = e;
          }
        }, {
          key: "getData",
          value: function getData() {
            return this.data;
          }
        }, {
          key: "toString",
          value: function toString() {
            var e;
            return "[object " + ((e = this.constructor).__class ? e.__class : e.name) + "]";
          }
        }]);

        return t;
      }();

      t.OPEN = "open", t.LOAD = "load", t.ONLINE = "online", t.OFFLINE = "offline", t.LOADED = "loaded", t.ADDED_TO_STAGE = "added_to_stage", t.REMOVED_FROM_STAGE = "removed_from_stage", t.ADDED = "added", t.REMOVED = "removed", t.ENTER_FRAME = "enter_frame", t.EXIT_FRAME = "exit_frame", t.SELECT = "select", t.CANCEL = "cancel", t.COMPLETE = "complete", t.RESIZE = "resize", t.CHANGE = "change", e.Event = t, t.__class = "splashjs.events.Event", t.__interfaces = ["splashjs.events.iface.IEvent"];
    }(e.events || (e.events = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function () {
        function s(e, t) {
          var _this13 = this;

          _classCallCheck(this, s);

          if (this.timeouts = new Array(), this.intervals = new Array(), "string" != typeof e && null !== e || "boolean" != typeof t && null !== t) {
            if ("string" != typeof e && null !== e || void 0 !== t) {
              if ("boolean" != typeof e && null !== e || void 0 !== t) {
                if (void 0 !== e || void 0 !== t) throw new Error("invalid overload");
                {
                  var _e6 = "Timer-" + ++s.nextSerialNumber;

                  void 0 === this.name && (this.name = null), this.timeouts = new Array(), this.intervals = new Array(), void 0 === this.name && (this.name = null), function () {
                    _this13.name = _e6;
                  }();
                }
              } else {
                arguments[0];
                {
                  var _e7 = "Timer-" + ++s.nextSerialNumber;

                  void 0 === this.name && (this.name = null), this.timeouts = new Array(), this.intervals = new Array(), void 0 === this.name && (this.name = null), function () {
                    _this13.name = _e7;
                  }();
                }
              }
            } else {
              void 0 === this.name && (this.name = null), this.timeouts = new Array(), this.intervals = new Array(), void 0 === this.name && (this.name = null), function () {
                _this13.name = e;
              }();
            }
          } else {
            void 0 === this.name && (this.name = null), this.timeouts = new Array(), this.intervals = new Array(), void 0 === this.name && (this.name = null), function () {
              _this13.name = e;
            }();
          }
        }

        _createClass(s, [{
          key: "schedule$java_util_TimerTask$long",
          value: function schedule$java_util_TimerTask$long(e, t) {
            if (t < 0) throw Object.defineProperty(new Error("Negative delay."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            this.schedule$java_util_TimerTask$java_util_Date(e, new Date(Date.now() + t));
          }
        }, {
          key: "schedule$java_util_TimerTask$java_util_Date",
          value: function schedule$java_util_TimerTask$java_util_Date(t, s) {
            var _this14 = this;

            t.nextExecutionTime = s.getTime(), t.handle = 0 | window.setTimeout(function () {
              t.state !== e.util.TimerTask.CANCELLED && (t.run(), t.state = e.util.TimerTask.EXECUTED), _this14.timeouts.splice(_this14.timeouts.indexOf(t), 1);
            }, s.getTime() - Date.now()), this.timeouts.push(t), t.state = e.util.TimerTask.SCHEDULED;
          }
        }, {
          key: "schedule$java_util_TimerTask$long$long",
          value: function schedule$java_util_TimerTask$long$long(e, t, s) {
            if (t < 0) throw Object.defineProperty(new Error("Negative delay."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            this.schedule$java_util_TimerTask$java_util_Date$long(e, new Date(Date.now() + t), s);
          }
        }, {
          key: "schedule$java_util_TimerTask$java_util_Date$long",
          value: function schedule$java_util_TimerTask$java_util_Date$long(t, s, i) {
            var _this15 = this;

            if (i <= 0) throw Object.defineProperty(new Error("Non-positive period."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            t.period = i, t.nextExecutionTime = s.getTime(), t.handle = 0 | window.setTimeout(function () {
              t.state !== e.util.TimerTask.CANCELLED ? (t.run(), _this15.schedule$java_util_TimerTask$long$long(t, i, i)) : _this15.timeouts.splice(_this15.timeouts.indexOf(t), 1);
            }, s.getTime() - Date.now()), this.timeouts.push(t), t.state = e.util.TimerTask.SCHEDULED;
          }
        }, {
          key: "schedule",
          value: function schedule(t, s, i) {
            if ((null != t && _instanceof(t, e.util.TimerTask) || null === t) && (null != s && _instanceof(s, Date) || null === s) && ("number" == typeof i || null === i)) return this.schedule$java_util_TimerTask$java_util_Date$long(t, s, i);

            if (!(null != t && _instanceof(t, e.util.TimerTask) || null === t) || "number" != typeof s && null !== s || "number" != typeof i && null !== i) {
              if ((null != t && _instanceof(t, e.util.TimerTask) || null === t) && (null != s && _instanceof(s, Date) || null === s) && void 0 === i) return this.schedule$java_util_TimerTask$java_util_Date(t, s);
              if (!(null != t && _instanceof(t, e.util.TimerTask) || null === t) || "number" != typeof s && null !== s || void 0 !== i) throw new Error("invalid overload");
              return this.schedule$java_util_TimerTask$long(t, s);
            }

            return this.schedule$java_util_TimerTask$long$long(t, s, i);
          }
        }, {
          key: "scheduleAtFixedRate$java_util_TimerTask$long$long",
          value: function scheduleAtFixedRate$java_util_TimerTask$long$long(e, t, s) {
            if (t < 0) throw Object.defineProperty(new Error("Negative delay."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            this.scheduleAtFixedRate$java_util_TimerTask$java_util_Date$long(e, new Date(Date.now() + t), s);
          }
        }, {
          key: "scheduleAtFixedRate$java_util_TimerTask$java_util_Date$long",
          value: function scheduleAtFixedRate$java_util_TimerTask$java_util_Date$long(e, t, i) {
            if (i <= 0) throw Object.defineProperty(new Error("Non-positive period."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            {
              e.period = i, e.nextExecutionTime = t.getTime();
              var r = new s.Timer$0(this, e);
              this.schedule$java_util_TimerTask$java_util_Date(r, t), e.handle = r.handle;
            }
          }
        }, {
          key: "scheduleAtFixedRate",
          value: function scheduleAtFixedRate(t, s, i) {
            if ((null != t && _instanceof(t, e.util.TimerTask) || null === t) && (null != s && _instanceof(s, Date) || null === s) && ("number" == typeof i || null === i)) return this.scheduleAtFixedRate$java_util_TimerTask$java_util_Date$long(t, s, i);
            if (!(null != t && _instanceof(t, e.util.TimerTask) || null === t) || "number" != typeof s && null !== s || "number" != typeof i && null !== i) throw new Error("invalid overload");
            return this.scheduleAtFixedRate$java_util_TimerTask$long$long(t, s, i);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            for (var _e8 = 0; _e8 < this.timeouts.length; _e8++) {
              var _t16 = this.timeouts[_e8];
              clearTimeout(_t16.handle);
            }

            for (var _e9 = 0; _e9 < this.intervals.length; _e9++) {
              var _t17 = this.intervals[_e9];
              clearInterval(_t17.handle);
            }

            this.intervals = new Array(), this.timeouts = new Array();
          }
        }, {
          key: "purge",
          value: function purge() {
            var t = this.timeouts.filter(function (t) {
              return t.handle !== e.util.TimerTask.EXECUTED && t.handle !== e.util.TimerTask.CANCELLED;
            }),
                s = this.intervals.filter(function (t) {
              return t.handle !== e.util.TimerTask.EXECUTED && t.handle !== e.util.TimerTask.CANCELLED;
            }),
                i = this.timeouts.length - t.length + this.intervals.length - s.length;
            return this.timeouts = t, this.intervals = s, i;
          }
        }]);

        return s;
      }();

      s.nextSerialNumber = 0, t.Timer = s, s.__class = "java.util.Timer", function (t) {
        var s = /*#__PURE__*/function (_e$util$TimerTask) {
          _inherits(s, _e$util$TimerTask);

          function s(e, t) {
            var _this16;

            _classCallCheck(this, s);

            _this16 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this16.task = t, _this16.__parent = e;
            return _this16;
          }

          _createClass(s, [{
            key: "run",
            value: function run() {
              var _this17 = this;

              this.task.state !== e.util.TimerTask.CANCELLED && (this.task.nextExecutionTime = Date.now() + this.task.period, this.task.handle = 0 | window.setInterval(function () {
                _this17.task.state !== e.util.TimerTask.CANCELLED ? (_this17.task.nextExecutionTime = Date.now() + _this17.task.period, _this17.task.run()) : (clearInterval(_this17.task.handle), _this17.__parent.intervals.splice(_this17.__parent.intervals.indexOf(_this17.task), 1));
              }, this.task.period), this.__parent.intervals.push(this.task), this.task.run());
            }
          }]);

          return s;
        }(e.util.TimerTask);

        t.Timer$0 = s, s.__interfaces = ["java.lang.Runnable"];
      }(s = t.Timer || (t.Timer = {}));
    }(e.util || (e.util = {}));
  }(java || (java = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$filters$Filter) {
        _inherits(s, _e$filters$Filter);

        function s(e) {
          var _this18;

          _classCallCheck(this, s);

          if ("number" == typeof e || null === e) {
            _this18 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this18.contrast && (_this18.contrast = 0), void 0 === _this18.contrast && (_this18.contrast = 0), function () {
              _this18.contrast = e;
            }();
          } else {
            if (void 0 !== e) throw new Error("invalid overload");
            _this18 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this18.contrast && (_this18.contrast = 0), void 0 === _this18.contrast && (_this18.contrast = 0);
          }

          return _possibleConstructorReturn(_this18);
        }

        _createClass(s, [{
          key: "setContrast",
          value: function setContrast(e) {
            return this.contrast = e, this;
          }
        }, {
          key: "getContrast",
          value: function getContrast() {
            return this.contrast;
          }
        }]);

        return s;
      }(e.filters.Filter);

      t.ContrastFilter = s, s.__class = "splashjs.filters.ContrastFilter", s.__interfaces = ["splashjs.filters.iface.IContrastFilter", "splashjs.filters.iface.IFilter"];
    }(e.filters || (e.filters = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$filters$Filter2) {
        _inherits(s, _e$filters$Filter2);

        function s(e) {
          var _this19;

          _classCallCheck(this, s);

          if ("number" == typeof e || null === e) {
            _this19 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this19.saturate && (_this19.saturate = 0), void 0 === _this19.saturate && (_this19.saturate = 0), function () {
              _this19.saturate = e;
            }();
          } else {
            if (void 0 !== e) throw new Error("invalid overload");
            _this19 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this19.saturate && (_this19.saturate = 0), void 0 === _this19.saturate && (_this19.saturate = 0);
          }

          return _possibleConstructorReturn(_this19);
        }

        _createClass(s, [{
          key: "setSaturate",
          value: function setSaturate(e) {
            return this.saturate = e, this;
          }
        }, {
          key: "getSaturate",
          value: function getSaturate() {
            return this.saturate;
          }
        }]);

        return s;
      }(e.filters.Filter);

      t.SaturateFilter = s, s.__class = "splashjs.filters.SaturateFilter", s.__interfaces = ["splashjs.filters.iface.IFilter", "splashjs.filters.iface.ISaturateFilter"];
    }(e.filters || (e.filters = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$filters$Filter3) {
        _inherits(s, _e$filters$Filter3);

        function s(e) {
          var _this20;

          _classCallCheck(this, s);

          if ("number" == typeof e || null === e) {
            _this20 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this20.grayscale && (_this20.grayscale = 0), void 0 === _this20.grayscale && (_this20.grayscale = 0), function () {
              _this20.grayscale = e;
            }();
          } else {
            if (void 0 !== e) throw new Error("invalid overload");
            _this20 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this20.grayscale && (_this20.grayscale = 0), void 0 === _this20.grayscale && (_this20.grayscale = 0);
          }

          return _possibleConstructorReturn(_this20);
        }

        _createClass(s, [{
          key: "setGrayscale",
          value: function setGrayscale(e) {
            return this.grayscale = e, this;
          }
        }, {
          key: "getGrayscale",
          value: function getGrayscale() {
            return this.grayscale;
          }
        }]);

        return s;
      }(e.filters.Filter);

      t.GrayscaleFilter = s, s.__class = "splashjs.filters.GrayscaleFilter", s.__interfaces = ["splashjs.filters.iface.IFilter", "splashjs.filters.iface.IGrayscaleFilter"];
    }(e.filters || (e.filters = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$filters$Filter4) {
        _inherits(s, _e$filters$Filter4);

        function s(t, _s7, i, r) {
          var _this21;

          _classCallCheck(this, s);

          if ("number" != typeof t && null !== t || "number" != typeof _s7 && null !== _s7 || "number" != typeof i && null !== i || !(null != r && (null != r.__interfaces && r.__interfaces.indexOf("splashjs.utils.iface.IColor") >= 0 || null != r.constructor && null != r.constructor.__interfaces && r.constructor.__interfaces.indexOf("splashjs.utils.iface.IColor") >= 0) || null === r)) {
            if (void 0 !== t || void 0 !== _s7 || void 0 !== i || void 0 !== r) throw new Error("invalid overload");
            _this21 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this21.offsetX && (_this21.offsetX = 0), void 0 === _this21.offsetY && (_this21.offsetY = 0), void 0 === _this21.blur && (_this21.blur = 0), void 0 === _this21.spread && (_this21.spread = 0), _this21.color = e.utils.Color.BLACK_$LI$(), void 0 === _this21.offsetX && (_this21.offsetX = 0), void 0 === _this21.offsetY && (_this21.offsetY = 0), void 0 === _this21.blur && (_this21.blur = 0), void 0 === _this21.spread && (_this21.spread = 0);
          } else {
            _this21 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this21.offsetX && (_this21.offsetX = 0), void 0 === _this21.offsetY && (_this21.offsetY = 0), void 0 === _this21.blur && (_this21.blur = 0), void 0 === _this21.spread && (_this21.spread = 0), _this21.color = e.utils.Color.BLACK_$LI$(), void 0 === _this21.offsetX && (_this21.offsetX = 0), void 0 === _this21.offsetY && (_this21.offsetY = 0), void 0 === _this21.blur && (_this21.blur = 0), void 0 === _this21.spread && (_this21.spread = 0), function () {
              _this21.offsetX = t, _this21.offsetY = _s7, _this21.blur = i, _this21.color = r;
            }();
          }

          return _possibleConstructorReturn(_this21);
        }

        _createClass(s, [{
          key: "setOffsetX",
          value: function setOffsetX(e) {
            return this.offsetX = e, this;
          }
        }, {
          key: "getOffsetX",
          value: function getOffsetX() {
            return this.offsetX;
          }
        }, {
          key: "setOffsetY",
          value: function setOffsetY(e) {
            return this.offsetY = e, this;
          }
        }, {
          key: "getOffsetY",
          value: function getOffsetY() {
            return this.offsetY;
          }
        }, {
          key: "setBlur",
          value: function setBlur(e) {
            return this.blur = e, this;
          }
        }, {
          key: "getBlur",
          value: function getBlur() {
            return this.blur;
          }
        }, {
          key: "setSpread",
          value: function setSpread(e) {
            return this.spread = e, this;
          }
        }, {
          key: "getSpread",
          value: function getSpread() {
            return this.spread;
          }
        }, {
          key: "setColor",
          value: function setColor(e) {
            return this.color = e, this;
          }
        }, {
          key: "getColor",
          value: function getColor() {
            return this.color;
          }
        }]);

        return s;
      }(e.filters.Filter);

      t.DropShadowFilter = s, s.__class = "splashjs.filters.DropShadowFilter", s.__interfaces = ["splashjs.filters.iface.IFilter", "splashjs.filters.iface.IDropShadowFilter"];
    }(e.filters || (e.filters = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$filters$Filter5) {
        _inherits(s, _e$filters$Filter5);

        function s(e) {
          var _this22;

          _classCallCheck(this, s);

          if ("number" == typeof e || null === e) {
            _this22 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this22.hueRotate && (_this22.hueRotate = 0), void 0 === _this22.hueRotate && (_this22.hueRotate = 0), function () {
              _this22.hueRotate = e;
            }();
          } else {
            if (void 0 !== e) throw new Error("invalid overload");
            _this22 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this22.hueRotate && (_this22.hueRotate = 0), void 0 === _this22.hueRotate && (_this22.hueRotate = 0);
          }

          return _possibleConstructorReturn(_this22);
        }

        _createClass(s, [{
          key: "setHueRotate",
          value: function setHueRotate(e) {
            return this.hueRotate = e, this;
          }
        }, {
          key: "getHueRotate",
          value: function getHueRotate() {
            return this.hueRotate;
          }
        }]);

        return s;
      }(e.filters.Filter);

      t.HueRotateFilter = s, s.__class = "splashjs.filters.HueRotateFilter", s.__interfaces = ["splashjs.filters.iface.IHueRotateFilter", "splashjs.filters.iface.IFilter"];
    }(e.filters || (e.filters = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$filters$Filter6) {
        _inherits(s, _e$filters$Filter6);

        function s(e) {
          var _this23;

          _classCallCheck(this, s);

          if ("number" == typeof e || null === e) {
            _this23 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this23.brightness && (_this23.brightness = 0), void 0 === _this23.brightness && (_this23.brightness = 0), function () {
              _this23.brightness = e;
            }();
          } else {
            if (void 0 !== e) throw new Error("invalid overload");
            _this23 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this23.brightness && (_this23.brightness = 0), void 0 === _this23.brightness && (_this23.brightness = 0);
          }

          return _possibleConstructorReturn(_this23);
        }

        _createClass(s, [{
          key: "setBrightness",
          value: function setBrightness(e) {
            return this.brightness = e, this;
          }
        }, {
          key: "getBrightness",
          value: function getBrightness() {
            return this.brightness;
          }
        }]);

        return s;
      }(e.filters.Filter);

      t.BrightnessFilter = s, s.__class = "splashjs.filters.BrightnessFilter", s.__interfaces = ["splashjs.filters.iface.IFilter", "splashjs.filters.iface.IBrightnessFilter"];
    }(e.filters || (e.filters = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$filters$Filter7) {
        _inherits(s, _e$filters$Filter7);

        function s(e) {
          var _this24;

          _classCallCheck(this, s);

          if ("number" == typeof e || null === e) {
            _this24 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this24.blur && (_this24.blur = 0), void 0 === _this24.blur && (_this24.blur = 0), function () {
              _this24.blur = e;
            }();
          } else {
            if (void 0 !== e) throw new Error("invalid overload");
            _this24 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this24.blur && (_this24.blur = 0), void 0 === _this24.blur && (_this24.blur = 0);
          }

          return _possibleConstructorReturn(_this24);
        }

        _createClass(s, [{
          key: "setBlur",
          value: function setBlur(e) {
            return this.blur = e, this;
          }
        }, {
          key: "getBlur",
          value: function getBlur() {
            return this.blur;
          }
        }]);

        return s;
      }(e.filters.Filter);

      t.BlurFilter = s, s.__class = "splashjs.filters.BlurFilter", s.__interfaces = ["splashjs.filters.iface.IFilter", "splashjs.filters.iface.IBlurFilter"];
    }(e.filters || (e.filters = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$filters$Filter8) {
        _inherits(s, _e$filters$Filter8);

        function s(e) {
          var _this25;

          _classCallCheck(this, s);

          if ("number" == typeof e || null === e) {
            _this25 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this25.sepia && (_this25.sepia = 0), void 0 === _this25.sepia && (_this25.sepia = 0), function () {
              _this25.sepia = e;
            }();
          } else {
            if (void 0 !== e) throw new Error("invalid overload");
            _this25 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this25.sepia && (_this25.sepia = 0), void 0 === _this25.sepia && (_this25.sepia = 0);
          }

          return _possibleConstructorReturn(_this25);
        }

        _createClass(s, [{
          key: "setSepia",
          value: function setSepia(e) {
            return this.sepia = e, this;
          }
        }, {
          key: "getSepia",
          value: function getSepia() {
            return this.sepia;
          }
        }]);

        return s;
      }(e.filters.Filter);

      t.SepiaFilter = s, s.__class = "splashjs.filters.SepiaFilter", s.__interfaces = ["splashjs.filters.iface.ISepiaFilter", "splashjs.filters.iface.IFilter"];
    }(e.filters || (e.filters = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$filters$Filter9) {
        _inherits(s, _e$filters$Filter9);

        function s(e) {
          var _this26;

          _classCallCheck(this, s);

          if ("number" == typeof e || null === e) {
            _this26 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this26.invert && (_this26.invert = 0), void 0 === _this26.invert && (_this26.invert = 0), function () {
              _this26.invert = e;
            }();
          } else {
            if (void 0 !== e) throw new Error("invalid overload");
            _this26 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this26.invert && (_this26.invert = 0), void 0 === _this26.invert && (_this26.invert = 0);
          }

          return _possibleConstructorReturn(_this26);
        }

        _createClass(s, [{
          key: "setInvert",
          value: function setInvert(e) {
            return this.invert = e, this;
          }
        }, {
          key: "getInvert",
          value: function getInvert() {
            return this.invert;
          }
        }]);

        return s;
      }(e.filters.Filter);

      t.InvertFilter = s, s.__class = "splashjs.filters.InvertFilter", s.__interfaces = ["splashjs.filters.iface.IInvertFilter", "splashjs.filters.iface.IFilter"];
    }(e.filters || (e.filters = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function () {
        function s(t, _s8) {
          _classCallCheck(this, s);

          var i, r;
          void 0 === this.mouseCursorName && (this.mouseCursorName = null), void 0 === this.mouseCursorImagePath && (this.mouseCursorImagePath = null), void 0 === this.mouseCursorType && (this.mouseCursorType = null), i = _s8, r = e.ui.MouseCursorType.SYSTEM, i.toUpperCase() === (null === r ? r : r.toUpperCase()) ? (this.mouseCursorName = t, this.mouseCursorType = e.ui.MouseCursorType.SYSTEM) : function (e, t) {
            return e.toUpperCase() === (null === t ? t : t.toUpperCase());
          }(_s8, e.ui.MouseCursorType.IMAGE) ? (this.mouseCursorImagePath = t, this.mouseCursorType = e.ui.MouseCursorType.IMAGE) : (this.mouseCursorName = e.ui.MouseCursorName.AUTO, this.mouseCursorType = e.ui.MouseCursorType.SYSTEM);
        }

        _createClass(s, [{
          key: "getMouseCursorType",
          value: function getMouseCursorType() {
            return this.mouseCursorType;
          }
        }, {
          key: "getMouseCursorName",
          value: function getMouseCursorName() {
            return this.mouseCursorName;
          }
        }, {
          key: "getMouseCursorImagePath",
          value: function getMouseCursorImagePath() {
            return this.mouseCursorImagePath;
          }
        }], [{
          key: "ALIAS_$LI$",
          value: function ALIAS_$LI$() {
            return null == s.ALIAS && (s.ALIAS = new s(e.ui.MouseCursorName.ALIAS, e.ui.MouseCursorType.SYSTEM)), s.ALIAS;
          }
        }, {
          key: "ALL_SCROLL_$LI$",
          value: function ALL_SCROLL_$LI$() {
            return null == s.ALL_SCROLL && (s.ALL_SCROLL = new s(e.ui.MouseCursorName.ALL_SCROLL, e.ui.MouseCursorType.SYSTEM)), s.ALL_SCROLL;
          }
        }, {
          key: "AUTO_$LI$",
          value: function AUTO_$LI$() {
            return null == s.AUTO && (s.AUTO = new s(e.ui.MouseCursorName.AUTO, e.ui.MouseCursorType.SYSTEM)), s.AUTO;
          }
        }, {
          key: "CELL_$LI$",
          value: function CELL_$LI$() {
            return null == s.CELL && (s.CELL = new s(e.ui.MouseCursorName.CELL, e.ui.MouseCursorType.SYSTEM)), s.CELL;
          }
        }, {
          key: "CONTEXT_MENU_$LI$",
          value: function CONTEXT_MENU_$LI$() {
            return null == s.CONTEXT_MENU && (s.CONTEXT_MENU = new s(e.ui.MouseCursorName.CONTEXT_MENU, e.ui.MouseCursorType.SYSTEM)), s.CONTEXT_MENU;
          }
        }, {
          key: "COL_RESIZE_$LI$",
          value: function COL_RESIZE_$LI$() {
            return null == s.COL_RESIZE && (s.COL_RESIZE = new s(e.ui.MouseCursorName.COL_RESIZE, e.ui.MouseCursorType.SYSTEM)), s.COL_RESIZE;
          }
        }, {
          key: "COPY_$LI$",
          value: function COPY_$LI$() {
            return null == s.COPY && (s.COPY = new s(e.ui.MouseCursorName.COPY, e.ui.MouseCursorType.SYSTEM)), s.COPY;
          }
        }, {
          key: "CROSSHAIR_$LI$",
          value: function CROSSHAIR_$LI$() {
            return null == s.CROSSHAIR && (s.CROSSHAIR = new s(e.ui.MouseCursorName.CROSSHAIR, e.ui.MouseCursorType.SYSTEM)), s.CROSSHAIR;
          }
        }, {
          key: "DEFAULT_$LI$",
          value: function DEFAULT_$LI$() {
            return null == s.DEFAULT && (s.DEFAULT = new s(e.ui.MouseCursorName.DEFAULT, e.ui.MouseCursorType.SYSTEM)), s.DEFAULT;
          }
        }, {
          key: "E_RESIZE_$LI$",
          value: function E_RESIZE_$LI$() {
            return null == s.E_RESIZE && (s.E_RESIZE = new s(e.ui.MouseCursorName.E_RESIZE, e.ui.MouseCursorType.SYSTEM)), s.E_RESIZE;
          }
        }, {
          key: "EW_RESIZE_$LI$",
          value: function EW_RESIZE_$LI$() {
            return null == s.EW_RESIZE && (s.EW_RESIZE = new s(e.ui.MouseCursorName.EW_RESIZE, e.ui.MouseCursorType.SYSTEM)), s.EW_RESIZE;
          }
        }, {
          key: "GRAB_$LI$",
          value: function GRAB_$LI$() {
            return null == s.GRAB && (s.GRAB = new s(e.ui.MouseCursorName.GRAB, e.ui.MouseCursorType.SYSTEM)), s.GRAB;
          }
        }, {
          key: "GRABBING_$LI$",
          value: function GRABBING_$LI$() {
            return null == s.GRABBING && (s.GRABBING = new s(e.ui.MouseCursorName.GRABBING, e.ui.MouseCursorType.SYSTEM)), s.GRABBING;
          }
        }, {
          key: "HELP_$LI$",
          value: function HELP_$LI$() {
            return null == s.HELP && (s.HELP = new s(e.ui.MouseCursorName.HELP, e.ui.MouseCursorType.SYSTEM)), s.HELP;
          }
        }, {
          key: "MOVE_$LI$",
          value: function MOVE_$LI$() {
            return null == s.MOVE && (s.MOVE = new s(e.ui.MouseCursorName.MOVE, e.ui.MouseCursorType.SYSTEM)), s.MOVE;
          }
        }, {
          key: "N_RESIZE_$LI$",
          value: function N_RESIZE_$LI$() {
            return null == s.N_RESIZE && (s.N_RESIZE = new s(e.ui.MouseCursorName.N_RESIZE, e.ui.MouseCursorType.SYSTEM)), s.N_RESIZE;
          }
        }, {
          key: "NE_RESIZE_$LI$",
          value: function NE_RESIZE_$LI$() {
            return null == s.NE_RESIZE && (s.NE_RESIZE = new s(e.ui.MouseCursorName.NE_RESIZE, e.ui.MouseCursorType.SYSTEM)), s.NE_RESIZE;
          }
        }, {
          key: "NESW_RESIZE_$LI$",
          value: function NESW_RESIZE_$LI$() {
            return null == s.NESW_RESIZE && (s.NESW_RESIZE = new s(e.ui.MouseCursorName.NESW_RESIZE, e.ui.MouseCursorType.SYSTEM)), s.NESW_RESIZE;
          }
        }, {
          key: "NS_RESIZE_$LI$",
          value: function NS_RESIZE_$LI$() {
            return null == s.NS_RESIZE && (s.NS_RESIZE = new s(e.ui.MouseCursorName.NS_RESIZE, e.ui.MouseCursorType.SYSTEM)), s.NS_RESIZE;
          }
        }, {
          key: "NW_RESIZE_$LI$",
          value: function NW_RESIZE_$LI$() {
            return null == s.NW_RESIZE && (s.NW_RESIZE = new s(e.ui.MouseCursorName.NW_RESIZE, e.ui.MouseCursorType.SYSTEM)), s.NW_RESIZE;
          }
        }, {
          key: "NWSE_RESIZE_$LI$",
          value: function NWSE_RESIZE_$LI$() {
            return null == s.NWSE_RESIZE && (s.NWSE_RESIZE = new s(e.ui.MouseCursorName.NWSE_RESIZE, e.ui.MouseCursorType.SYSTEM)), s.NWSE_RESIZE;
          }
        }, {
          key: "NO_DROP_$LI$",
          value: function NO_DROP_$LI$() {
            return null == s.NO_DROP && (s.NO_DROP = new s(e.ui.MouseCursorName.NO_DROP, e.ui.MouseCursorType.SYSTEM)), s.NO_DROP;
          }
        }, {
          key: "NOT_ALLOWED_$LI$",
          value: function NOT_ALLOWED_$LI$() {
            return null == s.NOT_ALLOWED && (s.NOT_ALLOWED = new s(e.ui.MouseCursorName.NOT_ALLOWED, e.ui.MouseCursorType.SYSTEM)), s.NOT_ALLOWED;
          }
        }, {
          key: "POINTER_$LI$",
          value: function POINTER_$LI$() {
            return null == s.POINTER && (s.POINTER = new s(e.ui.MouseCursorName.POINTER, e.ui.MouseCursorType.SYSTEM)), s.POINTER;
          }
        }, {
          key: "PROGRESS_$LI$",
          value: function PROGRESS_$LI$() {
            return null == s.PROGRESS && (s.PROGRESS = new s(e.ui.MouseCursorName.PROGRESS, e.ui.MouseCursorType.SYSTEM)), s.PROGRESS;
          }
        }, {
          key: "ROW_RESIZE_$LI$",
          value: function ROW_RESIZE_$LI$() {
            return null == s.ROW_RESIZE && (s.ROW_RESIZE = new s(e.ui.MouseCursorName.ROW_RESIZE, e.ui.MouseCursorType.SYSTEM)), s.ROW_RESIZE;
          }
        }, {
          key: "S_RESIZE_$LI$",
          value: function S_RESIZE_$LI$() {
            return null == s.S_RESIZE && (s.S_RESIZE = new s(e.ui.MouseCursorName.S_RESIZE, e.ui.MouseCursorType.SYSTEM)), s.S_RESIZE;
          }
        }, {
          key: "SE_RESIZE_$LI$",
          value: function SE_RESIZE_$LI$() {
            return null == s.SE_RESIZE && (s.SE_RESIZE = new s(e.ui.MouseCursorName.SE_RESIZE, e.ui.MouseCursorType.SYSTEM)), s.SE_RESIZE;
          }
        }, {
          key: "SW_RESIZE_$LI$",
          value: function SW_RESIZE_$LI$() {
            return null == s.SW_RESIZE && (s.SW_RESIZE = new s(e.ui.MouseCursorName.SW_RESIZE, e.ui.MouseCursorType.SYSTEM)), s.SW_RESIZE;
          }
        }, {
          key: "TEXT_$LI$",
          value: function TEXT_$LI$() {
            return null == s.TEXT && (s.TEXT = new s(e.ui.MouseCursorName.TEXT, e.ui.MouseCursorType.SYSTEM)), s.TEXT;
          }
        }, {
          key: "W_RESIZE_$LI$",
          value: function W_RESIZE_$LI$() {
            return null == s.W_RESIZE && (s.W_RESIZE = new s(e.ui.MouseCursorName.W_RESIZE, e.ui.MouseCursorType.SYSTEM)), s.W_RESIZE;
          }
        }, {
          key: "WAIT_$LI$",
          value: function WAIT_$LI$() {
            return null == s.WAIT && (s.WAIT = new s(e.ui.MouseCursorName.WAIT, e.ui.MouseCursorType.SYSTEM)), s.WAIT;
          }
        }, {
          key: "ZOOM_IN_$LI$",
          value: function ZOOM_IN_$LI$() {
            return null == s.ZOOM_IN && (s.ZOOM_IN = new s(e.ui.MouseCursorName.ZOOM_IN, e.ui.MouseCursorType.SYSTEM)), s.ZOOM_IN;
          }
        }, {
          key: "ZOOM_OUT_$LI$",
          value: function ZOOM_OUT_$LI$() {
            return null == s.ZOOM_OUT && (s.ZOOM_OUT = new s(e.ui.MouseCursorName.ZOOM_OUT, e.ui.MouseCursorType.SYSTEM)), s.ZOOM_OUT;
          }
        }, {
          key: "setImagePath",
          value: function setImagePath(t) {
            return new s(t, e.ui.MouseCursorType.IMAGE);
          }
        }]);

        return s;
      }();

      t.MouseCursor = s, s.__class = "splashjs.ui.MouseCursor", s.__interfaces = ["splashjs.ui.iface.IMouseCursor"];
    }(e.ui || (e.ui = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$Renderer) {
          _inherits(s, _e$render$Renderer);

          function s() {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this));
          }

          return s;
        }(e.render.Renderer);

        t.SplashObjectRenderer = s, s.__class = "splashjs.render.lang.SplashObjectRenderer", s.__interfaces = ["splashjs.render.iface.IRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.lang || (t.lang = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$utils$Gradient) {
        _inherits(s, _e$utils$Gradient);

        function s() {
          var _this27;

          _classCallCheck(this, s);

          _this27 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this27.gradientShape = e.utils.GradientShape.ELLIPSE, void 0 === _this27.gradientSize && (_this27.gradientSize = null);
          return _this27;
        }

        _createClass(s, [{
          key: "setGradientShape",
          value: function setGradientShape(e) {
            this.gradientShape = e;
          }
        }, {
          key: "getGradientShape",
          value: function getGradientShape() {
            return this.gradientShape;
          }
        }, {
          key: "setGradientSize",
          value: function setGradientSize(e) {
            this.gradientSize = e;
          }
        }, {
          key: "getGradientSize",
          value: function getGradientSize() {
            return this.gradientSize;
          }
        }]);

        return s;
      }(e.utils.Gradient);

      t.RadialGradient = s, s.__class = "splashjs.utils.RadialGradient", s.__interfaces = ["splashjs.utils.iface.IGradient", "splashjs.utils.iface.IRadialGradient"];
    }(e.utils || (e.utils = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$utils$Gradient2) {
        _inherits(s, _e$utils$Gradient2);

        function s() {
          var _this28;

          _classCallCheck(this, s);

          _this28 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this28.gradientDirection = e.utils.GradientDirection.TOP_TO_BOTTOM, _this28.gradientAngle = null;
          return _this28;
        }

        _createClass(s, [{
          key: "setGradientDirection",
          value: function setGradientDirection(e) {
            this.gradientAngle = null, this.gradientDirection = e;
          }
        }, {
          key: "getGradientDirection",
          value: function getGradientDirection() {
            return this.gradientDirection;
          }
        }, {
          key: "setGradientAngle",
          value: function setGradientAngle(e) {
            this.gradientDirection = null, this.gradientAngle = e;
          }
        }, {
          key: "getGradientAngle",
          value: function getGradientAngle() {
            return this.gradientAngle;
          }
        }]);

        return s;
      }(e.utils.Gradient);

      t.LinearGradient = s, s.__class = "splashjs.utils.LinearGradient", s.__interfaces = ["splashjs.utils.iface.IGradient", "splashjs.utils.iface.ILinearGradient"];
    }(e.utils || (e.utils = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function () {
        function s(t, _s9, i, r) {
          var _this29 = this;

          _classCallCheck(this, s);

          if ("number" != typeof t && null !== t || "number" != typeof _s9 && null !== _s9 || "number" != typeof i && null !== i || "number" != typeof r && null !== r) {
            if ("number" != typeof t && null !== t || "number" != typeof _s9 && null !== _s9 || "number" != typeof i && null !== i || "number" != typeof r && null !== r) {
              if ("number" != typeof t && null !== t || "number" != typeof _s9 && null !== _s9 || "number" != typeof i && null !== i || void 0 !== r) {
                if ("number" != typeof t && null !== t || "number" != typeof _s9 && null !== _s9 || "number" != typeof i && null !== i || void 0 !== r) {
                  if ((null != t && (null != t.__interfaces && t.__interfaces.indexOf("splashjs.utils.iface.IGradient") >= 0 || null != t.constructor && null != t.constructor.__interfaces && t.constructor.__interfaces.indexOf("splashjs.utils.iface.IGradient") >= 0) || null === t) && void 0 === _s9 && void 0 === i && void 0 === r) {
                    var _t18 = arguments[0];
                    void 0 === this.red && (this.red = 0), void 0 === this.green && (this.green = 0), void 0 === this.blue && (this.blue = 0), void 0 === this.hue && (this.hue = 0), void 0 === this.saturation && (this.saturation = 0), void 0 === this.lightness && (this.lightness = 0), void 0 === this.alpha && (this.alpha = 0), void 0 === this.hex && (this.hex = null), void 0 === this.colorName && (this.colorName = null), void 0 === this.colorType && (this.colorType = null), void 0 === this.gradient && (this.gradient = null), void 0 === this.red && (this.red = 0), void 0 === this.green && (this.green = 0), void 0 === this.blue && (this.blue = 0), void 0 === this.hue && (this.hue = 0), void 0 === this.saturation && (this.saturation = 0), void 0 === this.lightness && (this.lightness = 0), void 0 === this.alpha && (this.alpha = 0), void 0 === this.hex && (this.hex = null), void 0 === this.colorName && (this.colorName = null), void 0 === this.colorType && (this.colorType = null), void 0 === this.gradient && (this.gradient = null), function () {
                      _this29.gradient = _t18, _this29.colorType = e.utils.ColorType.GRADIENT;
                    }();
                  } else if ("string" != typeof t && null !== t || void 0 !== _s9 || void 0 !== i || void 0 !== r) {
                    if (void 0 !== t || void 0 !== _s9 || void 0 !== i || void 0 !== r) throw new Error("invalid overload");
                    void 0 === this.red && (this.red = 0), void 0 === this.green && (this.green = 0), void 0 === this.blue && (this.blue = 0), void 0 === this.hue && (this.hue = 0), void 0 === this.saturation && (this.saturation = 0), void 0 === this.lightness && (this.lightness = 0), void 0 === this.alpha && (this.alpha = 0), void 0 === this.hex && (this.hex = null), void 0 === this.colorName && (this.colorName = null), void 0 === this.colorType && (this.colorType = null), void 0 === this.gradient && (this.gradient = null), void 0 === this.red && (this.red = 0), void 0 === this.green && (this.green = 0), void 0 === this.blue && (this.blue = 0), void 0 === this.hue && (this.hue = 0), void 0 === this.saturation && (this.saturation = 0), void 0 === this.lightness && (this.lightness = 0), void 0 === this.alpha && (this.alpha = 0), void 0 === this.hex && (this.hex = null), void 0 === this.colorName && (this.colorName = null), void 0 === this.colorType && (this.colorType = null), void 0 === this.gradient && (this.gradient = null);
                  } else {
                    var _t19 = arguments[0];
                    void 0 === this.red && (this.red = 0), void 0 === this.green && (this.green = 0), void 0 === this.blue && (this.blue = 0), void 0 === this.hue && (this.hue = 0), void 0 === this.saturation && (this.saturation = 0), void 0 === this.lightness && (this.lightness = 0), void 0 === this.alpha && (this.alpha = 0), void 0 === this.hex && (this.hex = null), void 0 === this.colorName && (this.colorName = null), void 0 === this.colorType && (this.colorType = null), void 0 === this.gradient && (this.gradient = null), void 0 === this.red && (this.red = 0), void 0 === this.green && (this.green = 0), void 0 === this.blue && (this.blue = 0), void 0 === this.hue && (this.hue = 0), void 0 === this.saturation && (this.saturation = 0), void 0 === this.lightness && (this.lightness = 0), void 0 === this.alpha && (this.alpha = 0), void 0 === this.hex && (this.hex = null), void 0 === this.colorName && (this.colorName = null), void 0 === this.colorType && (this.colorType = null), void 0 === this.gradient && (this.gradient = null), function () {
                      var s;
                      (null == (s = _t19.charAt(0)).charCodeAt ? s : s.charCodeAt(0)) == "#".charCodeAt(0) ? (_this29.hex = _t19, _this29.colorType = e.utils.ColorType.HEX) : (_this29.colorName = _t19, _this29.colorType = e.utils.ColorType.NAME);
                    }();
                  }
                } else {
                  var _t20 = arguments,
                      _s10 = _t20[0],
                      _i4 = _t20[1],
                      _r4 = _t20[2];
                  void 0 === this.red && (this.red = 0), void 0 === this.green && (this.green = 0), void 0 === this.blue && (this.blue = 0), void 0 === this.hue && (this.hue = 0), void 0 === this.saturation && (this.saturation = 0), void 0 === this.lightness && (this.lightness = 0), void 0 === this.alpha && (this.alpha = 0), void 0 === this.hex && (this.hex = null), void 0 === this.colorName && (this.colorName = null), void 0 === this.colorType && (this.colorType = null), void 0 === this.gradient && (this.gradient = null), void 0 === this.red && (this.red = 0), void 0 === this.green && (this.green = 0), void 0 === this.blue && (this.blue = 0), void 0 === this.hue && (this.hue = 0), void 0 === this.saturation && (this.saturation = 0), void 0 === this.lightness && (this.lightness = 0), void 0 === this.alpha && (this.alpha = 0), void 0 === this.hex && (this.hex = null), void 0 === this.colorName && (this.colorName = null), void 0 === this.colorType && (this.colorType = null), void 0 === this.gradient && (this.gradient = null), function () {
                    _this29.hue = _s10, _this29.saturation = _i4, _this29.lightness = _r4, _this29.colorType = e.utils.ColorType.HSL;
                  }();
                }
              } else {
                void 0 === this.red && (this.red = 0), void 0 === this.green && (this.green = 0), void 0 === this.blue && (this.blue = 0), void 0 === this.hue && (this.hue = 0), void 0 === this.saturation && (this.saturation = 0), void 0 === this.lightness && (this.lightness = 0), void 0 === this.alpha && (this.alpha = 0), void 0 === this.hex && (this.hex = null), void 0 === this.colorName && (this.colorName = null), void 0 === this.colorType && (this.colorType = null), void 0 === this.gradient && (this.gradient = null), void 0 === this.red && (this.red = 0), void 0 === this.green && (this.green = 0), void 0 === this.blue && (this.blue = 0), void 0 === this.hue && (this.hue = 0), void 0 === this.saturation && (this.saturation = 0), void 0 === this.lightness && (this.lightness = 0), void 0 === this.alpha && (this.alpha = 0), void 0 === this.hex && (this.hex = null), void 0 === this.colorName && (this.colorName = null), void 0 === this.colorType && (this.colorType = null), void 0 === this.gradient && (this.gradient = null), function () {
                  _this29.green = _s9, _this29.red = t, _this29.blue = i, _this29.colorType = e.utils.ColorType.RGB;
                }();
              }
            } else {
              var _t21 = arguments,
                  _s11 = _t21[0],
                  _i5 = _t21[1],
                  n = _t21[2];
              void 0 === this.red && (this.red = 0), void 0 === this.green && (this.green = 0), void 0 === this.blue && (this.blue = 0), void 0 === this.hue && (this.hue = 0), void 0 === this.saturation && (this.saturation = 0), void 0 === this.lightness && (this.lightness = 0), void 0 === this.alpha && (this.alpha = 0), void 0 === this.hex && (this.hex = null), void 0 === this.colorName && (this.colorName = null), void 0 === this.colorType && (this.colorType = null), void 0 === this.gradient && (this.gradient = null), void 0 === this.red && (this.red = 0), void 0 === this.green && (this.green = 0), void 0 === this.blue && (this.blue = 0), void 0 === this.hue && (this.hue = 0), void 0 === this.saturation && (this.saturation = 0), void 0 === this.lightness && (this.lightness = 0), void 0 === this.alpha && (this.alpha = 0), void 0 === this.hex && (this.hex = null), void 0 === this.colorName && (this.colorName = null), void 0 === this.colorType && (this.colorType = null), void 0 === this.gradient && (this.gradient = null), function () {
                _this29.hue = _s11, _this29.saturation = _i5, _this29.lightness = n, _this29.alpha = r, _this29.colorType = e.utils.ColorType.HSLA;
              }();
            }
          } else {
            void 0 === this.red && (this.red = 0), void 0 === this.green && (this.green = 0), void 0 === this.blue && (this.blue = 0), void 0 === this.hue && (this.hue = 0), void 0 === this.saturation && (this.saturation = 0), void 0 === this.lightness && (this.lightness = 0), void 0 === this.alpha && (this.alpha = 0), void 0 === this.hex && (this.hex = null), void 0 === this.colorName && (this.colorName = null), void 0 === this.colorType && (this.colorType = null), void 0 === this.gradient && (this.gradient = null), void 0 === this.red && (this.red = 0), void 0 === this.green && (this.green = 0), void 0 === this.blue && (this.blue = 0), void 0 === this.hue && (this.hue = 0), void 0 === this.saturation && (this.saturation = 0), void 0 === this.lightness && (this.lightness = 0), void 0 === this.alpha && (this.alpha = 0), void 0 === this.hex && (this.hex = null), void 0 === this.colorName && (this.colorName = null), void 0 === this.colorType && (this.colorType = null), void 0 === this.gradient && (this.gradient = null), function () {
              _this29.green = _s9, _this29.red = t, _this29.blue = i, _this29.alpha = r, _this29.colorType = e.utils.ColorType.RGBA;
            }();
          }
        }

        _createClass(s, [{
          key: "getColorName",
          value: function getColorName() {
            return this.colorName;
          }
        }, {
          key: "getColorType",
          value: function getColorType() {
            return this.colorType;
          }
        }, {
          key: "getRed",
          value: function getRed() {
            return this.red;
          }
        }, {
          key: "getGreen",
          value: function getGreen() {
            return this.green;
          }
        }, {
          key: "getBlue",
          value: function getBlue() {
            return this.blue;
          }
        }, {
          key: "getHue",
          value: function getHue() {
            return this.hue;
          }
        }, {
          key: "getSaturation",
          value: function getSaturation() {
            return this.saturation;
          }
        }, {
          key: "getLightness",
          value: function getLightness() {
            return this.lightness;
          }
        }, {
          key: "getAlpha",
          value: function getAlpha() {
            return this.alpha;
          }
        }, {
          key: "getHEX",
          value: function getHEX() {
            return this.hex;
          }
        }, {
          key: "getGradient",
          value: function getGradient() {
            return this.gradient;
          }
        }], [{
          key: "NONE_$LI$",
          value: function NONE_$LI$() {
            return null == s.NONE && (s.NONE = new s(e.utils.ColorName.NONE)), s.NONE;
          }
        }, {
          key: "GREEN_$LI$",
          value: function GREEN_$LI$() {
            return null == s.GREEN && (s.GREEN = new s(e.utils.ColorName.GREEN)), s.GREEN;
          }
        }, {
          key: "YELLOW_$LI$",
          value: function YELLOW_$LI$() {
            return null == s.YELLOW && (s.YELLOW = new s(e.utils.ColorName.YELLOW)), s.YELLOW;
          }
        }, {
          key: "RED_$LI$",
          value: function RED_$LI$() {
            return null == s.RED && (s.RED = new s(e.utils.ColorName.RED)), s.RED;
          }
        }, {
          key: "BLACK_$LI$",
          value: function BLACK_$LI$() {
            return null == s.BLACK && (s.BLACK = new s(e.utils.ColorName.BLACK)), s.BLACK;
          }
        }, {
          key: "WHITE_$LI$",
          value: function WHITE_$LI$() {
            return null == s.WHITE && (s.WHITE = new s(e.utils.ColorName.WHITE)), s.WHITE;
          }
        }, {
          key: "TOMATO_$LI$",
          value: function TOMATO_$LI$() {
            return null == s.TOMATO && (s.TOMATO = new s(e.utils.ColorName.TOMATO)), s.TOMATO;
          }
        }, {
          key: "ORANGE_$LI$",
          value: function ORANGE_$LI$() {
            return null == s.ORANGE && (s.ORANGE = new s(e.utils.ColorName.ORANGE)), s.ORANGE;
          }
        }, {
          key: "DODGER_BLUE_$LI$",
          value: function DODGER_BLUE_$LI$() {
            return null == s.DODGER_BLUE && (s.DODGER_BLUE = new s(e.utils.ColorName.DODGER_BLUE)), s.DODGER_BLUE;
          }
        }, {
          key: "MEDIUM_SEA_GREEN_$LI$",
          value: function MEDIUM_SEA_GREEN_$LI$() {
            return null == s.MEDIUM_SEA_GREEN && (s.MEDIUM_SEA_GREEN = new s(e.utils.ColorName.MEDIUM_SEA_GREEN)), s.MEDIUM_SEA_GREEN;
          }
        }, {
          key: "GRAY_$LI$",
          value: function GRAY_$LI$() {
            return null == s.GRAY && (s.GRAY = new s(e.utils.ColorName.GRAY)), s.GRAY;
          }
        }, {
          key: "SLATE_BLUE_$LI$",
          value: function SLATE_BLUE_$LI$() {
            return null == s.SLATE_BLUE && (s.SLATE_BLUE = new s(e.utils.ColorName.SLATE_BLUE)), s.SLATE_BLUE;
          }
        }, {
          key: "AQUA_$LI$",
          value: function AQUA_$LI$() {
            return null == s.AQUA && (s.AQUA = new s(e.utils.ColorName.AQUA)), s.AQUA;
          }
        }, {
          key: "VIOLET_$LI$",
          value: function VIOLET_$LI$() {
            return null == s.VIOLET && (s.VIOLET = new s(e.utils.ColorName.VIOLET)), s.VIOLET;
          }
        }, {
          key: "LIGHT_GRAY_$LI$",
          value: function LIGHT_GRAY_$LI$() {
            return null == s.LIGHT_GRAY && (s.LIGHT_GRAY = new s(e.utils.ColorName.LIGHT_GRAY)), s.LIGHT_GRAY;
          }
        }, {
          key: "createRGB",
          value: function createRGB(e, t, i) {
            return new s(e, t, i);
          }
        }, {
          key: "createRGBA",
          value: function createRGBA(e, t, i, r) {
            return new s(e, t, i, r);
          }
        }, {
          key: "createHEX",
          value: function createHEX(e) {
            return new s(e);
          }
        }, {
          key: "createHSL",
          value: function createHSL(e, t, i) {
            return new s(e, t, i);
          }
        }, {
          key: "createHSLA",
          value: function createHSLA(e, t, i, r) {
            return new s(e, t, i, r);
          }
        }]);

        return s;
      }();

      t.Color = s, s.__class = "splashjs.utils.Color", s.__interfaces = ["splashjs.utils.iface.IColor"];
    }(e.utils || (e.utils = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$lang$RuntimeError) {
        _inherits(s, _e$lang$RuntimeError);

        function s() {
          var _this30;

          _classCallCheck(this, s);

          _this30 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "Unsupported operation error")), Object.setPrototypeOf(_assertThisInitialized(_this30), s.prototype);
          return _this30;
        }

        return s;
      }(e.lang.RuntimeError);

      t.UnsupportedOperationError = s, s.__class = "splashjs.lang.UnsupportedOperationError", s.__interfaces = ["java.io.Serializable"];
    }(e.lang || (e.lang = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$lang$SplashObject) {
        _inherits(s, _e$lang$SplashObject);

        function s(e) {
          var _this31;

          _classCallCheck(this, s);

          if ("string" == typeof e || null === e) {
            _this31 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this31.eventStore && (_this31.eventStore = null), void 0 === _this31.uniqueID && (_this31.uniqueID = null), void 0 === _this31.id && (_this31.id = null), void 0 === _this31.renderer && (_this31.renderer = null), void 0 === _this31.stage && (_this31.stage = null), void 0 === _this31.eventStore && (_this31.eventStore = null), void 0 === _this31.uniqueID && (_this31.uniqueID = null), void 0 === _this31.id && (_this31.id = null), void 0 === _this31.renderer && (_this31.renderer = null), void 0 === _this31.stage && (_this31.stage = null), function () {
              _this31.eventStore = new s.EventStore(_assertThisInitialized(_this31)), _this31.id = e, _this31.uniqueID = e + 1e6 * Date.now();
            }();
          } else {
            if (void 0 !== e) throw new Error("invalid overload");
            {
              var _e10 = "splashjs";
              _this31 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this31.eventStore && (_this31.eventStore = null), void 0 === _this31.uniqueID && (_this31.uniqueID = null), void 0 === _this31.id && (_this31.id = null), void 0 === _this31.renderer && (_this31.renderer = null), void 0 === _this31.stage && (_this31.stage = null), void 0 === _this31.eventStore && (_this31.eventStore = null), void 0 === _this31.uniqueID && (_this31.uniqueID = null), void 0 === _this31.id && (_this31.id = null), void 0 === _this31.renderer && (_this31.renderer = null), void 0 === _this31.stage && (_this31.stage = null), function () {
                _this31.eventStore = new s.EventStore(_assertThisInitialized(_this31)), _this31.id = _e10, _this31.uniqueID = _e10 + 1e6 * Date.now();
              }();
            }
          }

          return _possibleConstructorReturn(_this31);
        }

        _createClass(s, [{
          key: "setRenderer",
          value: function setRenderer(e) {
            this.renderer = e;
          }
        }, {
          key: "getRenderer",
          value: function getRenderer() {
            return this.renderer;
          }
        }, {
          key: "getStage",
          value: function getStage() {
            return this.stage;
          }
        }, {
          key: "render",
          value: function render() {}
        }, {
          key: "addEventListener",
          value: function addEventListener(e, t) {
            this.eventStore.add(e, t);
          }
        }, {
          key: "removeEventListener",
          value: function removeEventListener(e, t) {
            this.eventStore.remove(e, t);
          }
        }, {
          key: "removeAllEventListeners",
          value: function removeAllEventListeners(e) {
            this.eventStore.removeAll(e);
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(e) {
            var t = e.getType();
            {
              var i = this.eventStore.getEventHandlersByName(t);

              for (var _t22 = 0; _t22 < i.length; _t22++) {
                var r = i[_t22];
                "function" == typeof (s = r) ? s(e) : s.accept(e);
              }
            }
            var s;
            return !0;
          }
        }, {
          key: "getUniqueID",
          value: function getUniqueID() {
            return this.uniqueID;
          }
        }, {
          key: "getID",
          value: function getID() {
            return this.id;
          }
        }]);

        return s;
      }(e.lang.SplashObject);

      t.EventDispatcher = s, s.__class = "splashjs.events.EventDispatcher", s.__interfaces = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"], function (e) {
        var t = /*#__PURE__*/function () {
          function t(e) {
            _classCallCheck(this, t);

            this.__parent = e, this.eventNames = [], this.eventHandlers = [];
          }

          _createClass(t, [{
            key: "add",
            value: function add(e, t) {
              this.eventNames.push(e), this.eventHandlers.push(t);
            }
          }, {
            key: "remove",
            value: function remove(e, t) {
              var s = -1;

              for (var _e11 = 0; _e11 < this.eventHandlers.length; _e11++) {
                if (this.eventHandlers[_e11] === t) {
                  s = _e11;
                  break;
                }
              }

              s >= 0 && (this.eventNames.splice(s, 1)[0], this.eventHandlers.splice(s, 1)[0]);
            }
          }, {
            key: "removeAll",
            value: function removeAll(e) {}
          }, {
            key: "getEventHandlersByName",
            value: function getEventHandlersByName(e) {
              var t = [];

              for (var r = 0; r < this.eventNames.length; r++) {
                s = this.eventNames[r], i = e, s.toUpperCase() === (null === i ? i : i.toUpperCase()) && t.push(this.eventHandlers[r]);
              }

              var s, i;
              return t;
            }
          }]);

          return t;
        }();

        e.EventStore = t, t.__class = "splashjs.events.EventDispatcher.EventStore";
      }(s = t.EventDispatcher || (t.EventDispatcher = {}));
    }(e.events || (e.events = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$lang$SplashError) {
        _inherits(s, _e$lang$SplashError);

        function s(e) {
          var _this32;

          _classCallCheck(this, s);

          var t;
          _this32 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), Object.setPrototypeOf(_assertThisInitialized(_this32), s.prototype), _this32.name = (t = _this32.constructor).__class ? t.__class : t.name;
          return _this32;
        }

        return s;
      }(e.lang.SplashError);

      t.RangeError = s, s.__class = "splashjs.lang.RangeError", s.__interfaces = ["splashjs.lang.iface.ISplashError", "splashjs.lang.iface.IRangeError", "java.io.Serializable"];
    }(e.lang || (e.lang = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$lang$SplashError2) {
        _inherits(s, _e$lang$SplashError2);

        function s(e) {
          var _this33;

          _classCallCheck(this, s);

          var t;
          _this33 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), Object.setPrototypeOf(_assertThisInitialized(_this33), s.prototype), _this33.name = (t = _this33.constructor).__class ? t.__class : t.name;
          return _this33;
        }

        return s;
      }(e.lang.SplashError);

      t.IOError = s, s.__class = "splashjs.lang.IOError", s.__interfaces = ["splashjs.lang.iface.ISplashError", "splashjs.lang.iface.IIOError", "java.io.Serializable"];
    }(e.lang || (e.lang = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$lang$SplashError3) {
        _inherits(s, _e$lang$SplashError3);

        function s(e) {
          var _this34;

          _classCallCheck(this, s);

          var t;
          _this34 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), Object.setPrototypeOf(_assertThisInitialized(_this34), s.prototype), _this34.name = (t = _this34.constructor).__class ? t.__class : t.name;
          return _this34;
        }

        return s;
      }(e.lang.SplashError);

      t.SecurityError = s, s.__class = "splashjs.lang.SecurityError", s.__interfaces = ["splashjs.lang.iface.ISplashError", "splashjs.lang.iface.ISecurityError", "java.io.Serializable"];
    }(e.lang || (e.lang = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$controls$BaseItem) {
        _inherits(s, _e$controls$BaseItem);

        function s(e) {
          var _this35;

          _classCallCheck(this, s);

          _this35 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this35.items = [], void 0 === _this35.title && (_this35.title = null), _this35.title = e;
          return _this35;
        }

        _createClass(s, [{
          key: "addItem",
          value: function addItem(e) {
            this.items.push(e);
          }
        }, {
          key: "removeItem",
          value: function removeItem(e) {
            (function (t) {
              var s = t.indexOf(e);
              s >= 0 && t.splice(s, 1);
            })(this.items);
          }
        }, {
          key: "setTitle",
          value: function setTitle(e) {
            this.title = e;
          }
        }, {
          key: "getTitle",
          value: function getTitle() {
            return this.title;
          }
        }, {
          key: "getAllItems",
          value: function getAllItems() {
            return this.items;
          }
        }]);

        return s;
      }(e.controls.BaseItem);

      t.ItemGroup = s, s.__class = "splashjs.controls.ItemGroup", s.__interfaces = ["splashjs.controls.iface.IItemGroup", "splashjs.controls.iface.IBaseItem"];
    }(e.controls || (e.controls = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$controls$BaseItem2) {
        _inherits(s, _e$controls$BaseItem2);

        function s(e, t) {
          var _this36;

          _classCallCheck(this, s);

          _this36 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this36.text && (_this36.text = null), void 0 === _this36.value && (_this36.value = null), _this36.text = e, _this36.value = t;
          return _this36;
        }

        _createClass(s, [{
          key: "setText",
          value: function setText(e) {
            this.text = e;
          }
        }, {
          key: "getText",
          value: function getText() {
            return this.text;
          }
        }, {
          key: "setValue",
          value: function setValue(e) {
            this.value = e;
          }
        }, {
          key: "getValue",
          value: function getValue() {
            return this.value;
          }
        }]);

        return s;
      }(e.controls.BaseItem);

      t.Item = s, s.__class = "splashjs.controls.Item", s.__interfaces = ["splashjs.controls.iface.IItem", "splashjs.controls.iface.IBaseItem"];
    }(e.controls || (e.controls = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$Event) {
        _inherits(s, _e$events$Event);

        function s(e, t, _s12, i, r, n, a, l, o, h, u, d) {
          var _this37;

          _classCallCheck(this, s);

          _this37 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), void 0 === _this37.__splashjs_events_KeyboardEvent_altKey && (_this37.__splashjs_events_KeyboardEvent_altKey = null), void 0 === _this37.charCode && (_this37.charCode = null), void 0 === _this37.code && (_this37.code = null), void 0 === _this37.ctrlKey && (_this37.ctrlKey = null), void 0 === _this37.key && (_this37.key = null), void 0 === _this37.keyCode && (_this37.keyCode = null), void 0 === _this37.location && (_this37.location = null), void 0 === _this37.metaKey && (_this37.metaKey = null), void 0 === _this37.repeat && (_this37.repeat = null), void 0 === _this37.shiftKey && (_this37.shiftKey = null), void 0 === _this37.which && (_this37.which = null), _this37.__splashjs_events_KeyboardEvent_altKey = t, _this37.charCode = _s12, _this37.code = i, _this37.ctrlKey = r, _this37.key = n, _this37.keyCode = a, _this37.location = l, _this37.metaKey = o, _this37.repeat = h, _this37.shiftKey = u, _this37.which = d;
          return _this37;
        }

        _createClass(s, [{
          key: "getAltKey",
          value: function getAltKey() {
            return this.__splashjs_events_KeyboardEvent_altKey;
          }
        }, {
          key: "getCharCode",
          value: function getCharCode() {
            return this.charCode;
          }
        }, {
          key: "getCode",
          value: function getCode() {
            return this.code;
          }
        }, {
          key: "getCtrlKey",
          value: function getCtrlKey() {
            return this.ctrlKey;
          }
        }, {
          key: "getKey",
          value: function getKey() {
            return this.key;
          }
        }, {
          key: "getKeyCode",
          value: function getKeyCode() {
            return this.keyCode;
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            return this.location;
          }
        }, {
          key: "getMetaKey",
          value: function getMetaKey() {
            return this.metaKey;
          }
        }, {
          key: "getRepeat",
          value: function getRepeat() {
            return this.repeat;
          }
        }, {
          key: "getShiftKey",
          value: function getShiftKey() {
            return this.shiftKey;
          }
        }, {
          key: "getWhich",
          value: function getWhich() {
            return this.which;
          }
        }, {
          key: "toString",
          value: function toString() {
            var e = "";
            return e += "name=" + this.getType() + ", altKey=" + this.__splashjs_events_KeyboardEvent_altKey + ", charCode=" + this.charCode + ", code=" + this.code + ", ctrlKey=" + this.ctrlKey + ", key=" + this.key + ", keyCode=" + this.keyCode + ", location=" + this.location + ", metaKey=" + this.metaKey + ", repeat=" + this.repeat + ", shifKey=" + this.shiftKey + ", which=" + this.which, "KeyboardEvent[" + e + "]";
          }
        }]);

        return s;
      }(e.events.Event);

      s.KEY_UP = "key_up", s.KEY_DOWN = "key_down", s.KEY_PRESS = "key_press", t.KeyboardEvent = s, s.__class = "splashjs.events.KeyboardEvent", s.__interfaces = ["splashjs.events.iface.IEvent", "splashjs.events.iface.IKeyboardEvent"];
    }(e.events || (e.events = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$Event2) {
        _inherits(s, _e$events$Event2);

        function s(t, _s13, i) {
          var _this38;

          _classCallCheck(this, s);

          if (("string" == typeof t || null === t) && (null != _s13 && (null != _s13.__interfaces && _s13.__interfaces.indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || null != _s13.constructor && null != _s13.constructor.__interfaces && _s13.constructor.__interfaces.indexOf("splashjs.events.iface.IEventDispatcher") >= 0) || null === _s13) && (null != i && (null != i.__interfaces && i.__interfaces.indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || null != i.constructor && null != i.constructor.__interfaces && i.constructor.__interfaces.indexOf("splashjs.events.iface.IEventDispatcher") >= 0) || null === i)) {
            _this38 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, t, _s13, i)), _this38.status = e.permissions.PermissionStatus.UNKNOWN;
          } else {
            if ("string" != typeof t && null !== t || void 0 !== _s13 || void 0 !== i) throw new Error("invalid overload");
            _this38 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, t)), _this38.status = e.permissions.PermissionStatus.UNKNOWN;
          }

          return _possibleConstructorReturn(_this38);
        }

        _createClass(s, [{
          key: "getStatus",
          value: function getStatus() {
            return this.status;
          }
        }, {
          key: "setStatus",
          value: function setStatus(e) {
            this.status = e;
          }
        }]);

        return s;
      }(e.events.Event);

      s.PERMISSION_STATUS = "permission_status", t.PermissionEvent = s, s.__class = "splashjs.events.PermissionEvent", s.__interfaces = ["splashjs.events.iface.IEvent", "splashjs.events.iface.IPermissionEvent"];
    }(e.events || (e.events = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$Event3) {
        _inherits(s, _e$events$Event3);

        function s(e) {
          var _this39;

          _classCallCheck(this, s);

          _this39 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), _this39.text = null;
          return _this39;
        }

        _createClass(s, [{
          key: "setText",
          value: function setText(e) {
            this.text = e;
          }
        }, {
          key: "getText",
          value: function getText() {
            return this.text;
          }
        }]);

        return s;
      }(e.events.Event);

      s.IO_ERROR = "io_error", t.IOErrorEvent = s, s.__class = "splashjs.events.IOErrorEvent", s.__interfaces = ["splashjs.events.iface.IEvent", "splashjs.events.iface.IIOErrorEvent"];
    }(e.events || (e.events = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$Event4) {
        _inherits(s, _e$events$Event4);

        function s(e, t, _s14) {
          var _this40;

          _classCallCheck(this, s);

          _this40 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e, t, _s14)), void 0 === _this40.__splashjs_events_MouseEvent_altKey && (_this40.__splashjs_events_MouseEvent_altKey = !1), void 0 === _this40.localX && (_this40.localX = 0), void 0 === _this40.localY && (_this40.localY = 0), _this40.__splashjs_events_MouseEvent_altKey = _this40.__splashjs_events_MouseEvent_altKey;
          return _this40;
        }

        _createClass(s, [{
          key: "getAltKey",
          value: function getAltKey() {
            return this.__splashjs_events_MouseEvent_altKey;
          }
        }, {
          key: "setAltKey",
          value: function setAltKey(e) {
            this.__splashjs_events_MouseEvent_altKey = e;
          }
        }, {
          key: "setLocalX",
          value: function setLocalX(e) {
            this.localX = e;
          }
        }, {
          key: "getLocalX",
          value: function getLocalX() {
            return this.localX;
          }
        }, {
          key: "setLocalY",
          value: function setLocalY(e) {
            this.localY = e;
          }
        }, {
          key: "getLocalY",
          value: function getLocalY() {
            return this.localY;
          }
        }]);

        return s;
      }(e.events.Event);

      s.CLICK = "click", s.DOUBLE_CLICK = "double_click", s.MOUSE_DOWN = "mouse_down", s.MOUSE_ENTER = "mouse_enter", s.MOUSE_LEAVE = "mouse_leave", s.MOUSE_MOVE = "mouse_move", s.MOUSE_OUT = "mouse_out", s.MOUSE_OVER = "mouse_over", s.MOUSE_UP = "mouse_up", t.MouseEvent = s, s.__class = "splashjs.events.MouseEvent", s.__interfaces = ["splashjs.events.iface.IEvent", "splashjs.events.iface.IMouseEvent"];
    }(e.events || (e.events = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$Event5) {
        _inherits(s, _e$events$Event5);

        function s(e, t, _s15) {
          var _this41;

          _classCallCheck(this, s);

          if (("string" == typeof e || null === e) && (null != t && (null != t.__interfaces && t.__interfaces.indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || null != t.constructor && null != t.constructor.__interfaces && t.constructor.__interfaces.indexOf("splashjs.events.iface.IEventDispatcher") >= 0) || null === t) && (null != _s15 && (null != _s15.__interfaces && _s15.__interfaces.indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || null != _s15.constructor && null != _s15.constructor.__interfaces && _s15.constructor.__interfaces.indexOf("splashjs.events.iface.IEventDispatcher") >= 0) || null === _s15)) {
            _this41 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e, t, _s15));
          } else {
            if ("string" != typeof e && null !== e || void 0 !== t || void 0 !== _s15) throw new Error("invalid overload");
            _this41 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e));
          }

          return _possibleConstructorReturn(_this41);
        }

        return s;
      }(e.events.Event);

      s.DELAY_COMPLETE = "delay_complete", s.COMPLETE = "complete", s.DURATION_COMPLETE = "duration_complete", s.LOOP_INTERVAL_COMPLETE = "loop_interval_complete", t.TransitionEvent = s, s.__class = "splashjs.events.TransitionEvent", s.__interfaces = ["splashjs.events.iface.IEvent", "splashjs.events.iface.ITransitionEvent"];
    }(e.events || (e.events = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$Event6) {
        _inherits(s, _e$events$Event6);

        function s(e) {
          var _this42;

          _classCallCheck(this, s);

          _this42 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), _this42.bytesLoaded = -1, _this42.bytesTotal = -1;
          return _this42;
        }

        _createClass(s, [{
          key: "setBytesLoaded",
          value: function setBytesLoaded(e) {
            this.bytesLoaded = e;
          }
        }, {
          key: "getBytesLoaded",
          value: function getBytesLoaded() {
            return this.bytesLoaded;
          }
        }, {
          key: "setBytesTotal",
          value: function setBytesTotal(e) {
            this.bytesTotal = e;
          }
        }, {
          key: "getBytesTotal",
          value: function getBytesTotal() {
            return this.bytesTotal;
          }
        }]);

        return s;
      }(e.events.Event);

      s.PROGRESS = "progress", t.ProgressEvent = s, s.__class = "splashjs.events.ProgressEvent", s.__interfaces = ["splashjs.events.iface.IEvent", "splashjs.events.iface.IProgressEvent"];
    }(e.events || (e.events = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$Event7) {
        _inherits(s, _e$events$Event7);

        function s(e, t, _s16) {
          _classCallCheck(this, s);

          return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e, t, _s16));
        }

        return s;
      }(e.events.Event);

      s.TIMER = "timer", s.TIMER_COMPLETE = "timer_complete", t.TimerEvent = s, s.__class = "splashjs.events.TimerEvent", s.__interfaces = ["splashjs.events.iface.IEvent"];
    }(e.events || (e.events = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$lang$Splash) {
          _inherits(s, _e$render$lang$Splash);

          function s() {
            var _this43;

            _classCallCheck(this, s);

            _this43 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this43.htmlElement && (_this43.htmlElement = null);
            return _this43;
          }

          _createClass(s, [{
            key: "setDisplay",
            value: function setDisplay(e) {
              this.htmlElement = this.getDOMElement(), this.htmlElement.style.display = e;
            }
          }]);

          return s;
        }(e.render.lang.SplashObjectRenderer);

        t.EventDispatcherRenderer = s, s.__class = "splashjs.render.events.EventDispatcherRenderer", s.__interfaces = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.events || (t.events = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$EventDispat) {
        _inherits(s, _e$events$EventDispat);

        function s(t) {
          var _this44;

          _classCallCheck(this, s);

          _this44 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "fileReference")), _this44.size = -1, void 0 === _this44.creationDate && (_this44.creationDate = null), void 0 === _this44.creator && (_this44.creator = null), void 0 === _this44.data && (_this44.data = null), void 0 === _this44.extension && (_this44.extension = null), void 0 === _this44.modificationDate && (_this44.modificationDate = null), void 0 === _this44.name && (_this44.name = null), void 0 === _this44.permissionStatus && (_this44.permissionStatus = null), void 0 === _this44.type && (_this44.type = null), _this44.stage = t, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this44)).call(_assertThisInitialized(_this44), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this44)));
          return _this44;
        }

        _createClass(s, [{
          key: "getCreationDate",
          value: function getCreationDate() {
            return this.creationDate;
          }
        }, {
          key: "getCreator",
          value: function getCreator() {
            return this.creator;
          }
        }, {
          key: "setData",
          value: function setData(e) {
            this.data = e;
          }
        }, {
          key: "getData",
          value: function getData() {
            return this.data;
          }
        }, {
          key: "setExtension",
          value: function setExtension(e) {
            this.extension = e;
          }
        }, {
          key: "getExtension",
          value: function getExtension() {
            return this.extension;
          }
        }, {
          key: "setModificationDate",
          value: function setModificationDate(e) {
            this.modificationDate = e;
          }
        }, {
          key: "getModificationDate",
          value: function getModificationDate() {
            return this.modificationDate;
          }
        }, {
          key: "getName",
          value: function getName() {
            return this.name;
          }
        }, {
          key: "setName",
          value: function setName(e) {
            this.name = e;
          }
        }, {
          key: "getPermissionStatus",
          value: function getPermissionStatus() {
            return this.permissionStatus;
          }
        }, {
          key: "setSize",
          value: function setSize(e) {
            this.size = e;
          }
        }, {
          key: "getSize",
          value: function getSize() {
            return this.size;
          }
        }, {
          key: "setType",
          value: function setType(e) {
            this.type = e;
          }
        }, {
          key: "getType",
          value: function getType() {
            return this.type;
          }
        }, {
          key: "browse$",
          value: function browse$() {
            var e = !1;
            return e = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).browse(), e;
          }
        }, {
          key: "browse$splashjs_net_iface_IFileFilter_A",
          value: function browse$splashjs_net_iface_IFileFilter_A(e) {
            var t = !1;
            return t = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).browse$splashjs_net_iface_IFileFilter_A(e), t;
          }
        }, {
          key: "browse",
          value: function browse(e) {
            if (null != e && _instanceof(e, Array) && (0 == e.length || null == e[0] || null != e[0] && (null != e[0].__interfaces && e[0].__interfaces.indexOf("splashjs.net.iface.IFileFilter") >= 0 || null != e[0].constructor && null != e[0].constructor.__interfaces && e[0].constructor.__interfaces.indexOf("splashjs.net.iface.IFileFilter") >= 0)) || null === e) return this.browse$splashjs_net_iface_IFileFilter_A(e);
            if (void 0 === e) return this.browse$();
            throw new Error("invalid overload");
          }
        }, {
          key: "cancel",
          value: function cancel() {}
        }, {
          key: "download",
          value: function download(e, t) {
            _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).download(e, t);
          }
        }, {
          key: "load",
          value: function load() {
            _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).load();
          }
        }, {
          key: "requestPermission",
          value: function requestPermission() {}
        }, {
          key: "save",
          value: function save(e, t) {}
        }, {
          key: "upload",
          value: function upload(e, t, s) {}
        }, {
          key: "uploadUnencoded",
          value: function uploadUnencoded(e) {}
        }]);

        return s;
      }(e.events.EventDispatcher);

      t.FileReference = s, s.__class = "splashjs.net.FileReference", s.__interfaces = ["splashjs.net.iface.IFileReference", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    }(e.net || (e.net = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$EventDispat2) {
        _inherits(s, _e$events$EventDispat2);

        function s(t) {
          var _this45;

          _classCallCheck(this, s);

          if (null != t && (null != t.__interfaces && t.__interfaces.indexOf("splashjs.net.iface.IURLRequest") >= 0 || null != t.constructor && null != t.constructor.__interfaces && t.constructor.__interfaces.indexOf("splashjs.net.iface.IURLRequest") >= 0) || null === t) {
            _this45 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this45.bytesLoaded && (_this45.bytesLoaded = 0), void 0 === _this45.bytesTotal && (_this45.bytesTotal = 0), void 0 === _this45.data && (_this45.data = null), void 0 === _this45.dataFormat && (_this45.dataFormat = null), void 0 === _this45.urlRequest && (_this45.urlRequest = null), void 0 === _this45.bytesLoaded && (_this45.bytesLoaded = 0), void 0 === _this45.bytesTotal && (_this45.bytesTotal = 0), void 0 === _this45.data && (_this45.data = null), void 0 === _this45.dataFormat && (_this45.dataFormat = null), void 0 === _this45.urlRequest && (_this45.urlRequest = null), function () {
              _this45.urlRequest = t, _this45.dataFormat = e.net.URLLoaderDataFormat.TEXT, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this45)).call(_assertThisInitialized(_this45), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this45)));
            }();
          } else {
            if (void 0 !== t) throw new Error("invalid overload");
            _this45 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this45.bytesLoaded && (_this45.bytesLoaded = 0), void 0 === _this45.bytesTotal && (_this45.bytesTotal = 0), void 0 === _this45.data && (_this45.data = null), void 0 === _this45.dataFormat && (_this45.dataFormat = null), void 0 === _this45.urlRequest && (_this45.urlRequest = null), void 0 === _this45.bytesLoaded && (_this45.bytesLoaded = 0), void 0 === _this45.bytesTotal && (_this45.bytesTotal = 0), void 0 === _this45.data && (_this45.data = null), void 0 === _this45.dataFormat && (_this45.dataFormat = null), void 0 === _this45.urlRequest && (_this45.urlRequest = null), function () {
              _this45.dataFormat = e.net.URLLoaderDataFormat.TEXT, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this45)).call(_assertThisInitialized(_this45), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this45)));
            }();
          }

          return _possibleConstructorReturn(_this45);
        }

        _createClass(s, [{
          key: "close",
          value: function close() {
            _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).close();
          }
        }, {
          key: "load$splashjs_net_iface_IURLRequest",
          value: function load$splashjs_net_iface_IURLRequest(e) {
            this.urlRequest = e, this.load();
          }
        }, {
          key: "load",
          value: function load(e) {
            if (null != e && (null != e.__interfaces && e.__interfaces.indexOf("splashjs.net.iface.IURLRequest") >= 0 || null != e.constructor && null != e.constructor.__interfaces && e.constructor.__interfaces.indexOf("splashjs.net.iface.IURLRequest") >= 0) || null === e) return this.load$splashjs_net_iface_IURLRequest(e);
            if (void 0 === e) return this.load$();
            throw new Error("invalid overload");
          }
        }, {
          key: "load$",
          value: function load$() {
            _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).load();
          }
        }, {
          key: "getURLRequest",
          value: function getURLRequest() {
            return this.urlRequest;
          }
        }, {
          key: "setDataFormat",
          value: function setDataFormat(e) {
            this.dataFormat = e;
          }
        }, {
          key: "getDataFormat",
          value: function getDataFormat() {
            return this.dataFormat;
          }
        }, {
          key: "getBytesTotal",
          value: function getBytesTotal() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getBytesTotal();
          }
        }, {
          key: "getBytesLoaded",
          value: function getBytesLoaded() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getBytesLoaded();
          }
        }, {
          key: "getData",
          value: function getData() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getData();
          }
        }]);

        return s;
      }(e.events.EventDispatcher);

      t.URLLoader = s, s.__class = "splashjs.net.URLLoader", s.__interfaces = ["splashjs.net.iface.IURLLoader", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    }(e.net || (e.net = {}));
  }(splashjs || (splashjs = {})), function (e) {
    var t = /*#__PURE__*/function (_e$events$EventDispat3) {
      _inherits(t, _e$events$EventDispat3);

      function t() {
        var _this46;

        _classCallCheck(this, t);

        _this46 = _possibleConstructorReturn(this, _getPrototypeOf(t).call(this)), _this46.rendererCreator = new e.render.RendererCreator(), _get(_getPrototypeOf(t.prototype), "setRenderer", _assertThisInitialized(_this46)).call(_assertThisInitialized(_this46), _this46.getRendererCreator().createRenderer(t, _assertThisInitialized(_this46)));
        return _this46;
      }

      _createClass(t, [{
        key: "render$java_lang_Object$java_lang_Object$int$int",
        value: function render$java_lang_Object$java_lang_Object$int$int(e, t, s, i) {
          _get(_getPrototypeOf(t.prototype), "getRenderer", this).call(this).render(e, t, s, i);
        }
      }, {
        key: "render",
        value: function render(e, t, s, i) {
          if (!(null == e && null !== e || null == t && null !== t || "number" != typeof s && null !== s || "number" != typeof i && null !== i)) return this.render$java_lang_Object$java_lang_Object$int$int(e, t, s, i);
          if (void 0 !== e || void 0 !== t || void 0 !== s || void 0 !== i) throw new Error("invalid overload");

          _get(_getPrototypeOf(t.prototype), "render", this).call(this);
        }
      }, {
        key: "getRendererCreator",
        value: function getRendererCreator() {
          return this.rendererCreator;
        }
      }], [{
        key: "global_$LI$",
        value: function global_$LI$() {
          return null == t.global && (t.global = new t()), t.global;
        }
      }]);

      return t;
    }(e.events.EventDispatcher);

    e.Global = t, t.__class = "splashjs.Global", t.__interfaces = ["splashjs.lang.iface.ISplashObject", "splashjs.iface.IGlobal", "splashjs.events.iface.IEventDispatcher"];
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$EventDispat4) {
        _inherits(s, _e$events$EventDispat4);

        function s(t) {
          var _this47;

          _classCallCheck(this, s);

          if ("string" == typeof t || null === t) {
            _this47 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "spriteSheet")), void 0 === _this47.imagePath && (_this47.imagePath = null), void 0 === _this47.imageBase64 && (_this47.imageBase64 = null), void 0 === _this47.resource && (_this47.resource = null), _this47.movieClipsData = [], _this47.spritesData = [], void 0 === _this47.imagePath && (_this47.imagePath = null), void 0 === _this47.imageBase64 && (_this47.imageBase64 = null), void 0 === _this47.resource && (_this47.resource = null), function () {
              _this47.imagePath = t, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this47)).call(_assertThisInitialized(_this47), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this47)));
            }();
          } else {
            if (!(null != t && (null != t.__interfaces && t.__interfaces.indexOf("splashjs.utils.iface.IResource") >= 0 || null != t.constructor && null != t.constructor.__interfaces && t.constructor.__interfaces.indexOf("splashjs.utils.iface.IResource") >= 0) || null === t)) throw new Error("invalid overload");
            {
              var _t23 = arguments[0];
              _this47 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "spriteSheet")), void 0 === _this47.imagePath && (_this47.imagePath = null), void 0 === _this47.imageBase64 && (_this47.imageBase64 = null), void 0 === _this47.resource && (_this47.resource = null), _this47.movieClipsData = [], _this47.spritesData = [], void 0 === _this47.imagePath && (_this47.imagePath = null), void 0 === _this47.imageBase64 && (_this47.imageBase64 = null), void 0 === _this47.resource && (_this47.resource = null), function () {
                _this47.resource = _t23, _this47.imagePath = _t23.getResourcePath(), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this47)).call(_assertThisInitialized(_this47), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this47)));
              }();
            }
          }

          return _possibleConstructorReturn(_this47);
        }

        _createClass(s, [{
          key: "getImagePath",
          value: function getImagePath() {
            return this.imagePath;
          }
        }, {
          key: "getResource",
          value: function getResource() {
            return this.resource;
          }
        }, {
          key: "setImageBase64",
          value: function setImageBase64(e) {
            this.imageBase64 = e;
          }
        }, {
          key: "getImageBase64",
          value: function getImageBase64() {
            return this.imageBase64;
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getWidth();
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getHeight();
          }
        }, {
          key: "defineSprite",
          value: function defineSprite(t, s) {
            this.spritesData.push(new e.animation.SpriteData(this, t, s));
          }
        }, {
          key: "defineMovieClip",
          value: function defineMovieClip(t, s, i) {
            var n = function (e) {
              var t = [];

              for (; e-- > 0;) {
                t.push(null);
              }

              return t;
            }(arguments.length <= 3 ? 0 : arguments.length - 3),
                a = null;

            for (var _t24 = 0; _t24 < (arguments.length <= 3 ? 0 : arguments.length - 3); _t24++) {
              a = new e.animation.Frame(s, i, _t24 + 3 < 3 || arguments.length <= _t24 + 3 ? undefined : arguments[_t24 + 3]), n[_t24] = a;
            }

            this.movieClipsData.push(new e.animation.MovieClipData(this, t, n));
          }
        }, {
          key: "getSprite",
          value: function getSprite(e) {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getSprite(e);
          }
        }, {
          key: "getMovieClip",
          value: function getMovieClip(e) {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getMovieClip(e);
          }
        }, {
          key: "getSpriteDataByLabel",
          value: function getSpriteDataByLabel(e) {
            var t = null;

            for (var r = 0; r < this.spritesData.length; r++) {
              if (s = this.spritesData[r].getLabel(), i = e, s.toUpperCase() === (null === i ? i : i.toUpperCase())) {
                t = this.spritesData[r];
                break;
              }
            }

            var s, i;
            return t;
          }
        }, {
          key: "getMovieClipDataByLabel",
          value: function getMovieClipDataByLabel(e) {
            var t = null;

            for (var r = 0; r < this.movieClipsData.length; r++) {
              if (s = this.movieClipsData[r].getLabel(), i = e, s.toUpperCase() === (null === i ? i : i.toUpperCase())) {
                t = this.movieClipsData[r];
                break;
              }
            }

            var s, i;
            return t;
          }
        }, {
          key: "getAllAnimations",
          value: function getAllAnimations() {
            return this.movieClipsData;
          }
        }]);

        return s;
      }(e.events.EventDispatcher);

      t.SpriteSheet = s, s.__class = "splashjs.animation.SpriteSheet", s.__interfaces = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.animation.iface.ISpriteSheet"];
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$EventDispat5) {
        _inherits(s, _e$events$EventDispat5);

        function s() {
          _classCallCheck(this, s);

          return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this));
        }

        return s;
      }(e.events.EventDispatcher);

      t.Animation = s, s.__class = "splashjs.animation.Animation", s.__interfaces = ["splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher"];
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$EventDispat6) {
        _inherits(s, _e$events$EventDispat6);

        function s(e, t, _s17) {
          var _this48;

          _classCallCheck(this, s);

          _this48 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this48.spriteSheet && (_this48.spriteSheet = null), void 0 === _this48.label && (_this48.label = null), void 0 === _this48.frames && (_this48.frames = null), _this48.spriteSheet = e, _this48.label = t, _this48.frames = _s17;
          return _this48;
        }

        _createClass(s, [{
          key: "getLabel",
          value: function getLabel() {
            return this.label;
          }
        }, {
          key: "getFrames",
          value: function getFrames() {
            return this.frames;
          }
        }, {
          key: "getSpriteSheet",
          value: function getSpriteSheet() {
            return this.spriteSheet;
          }
        }]);

        return s;
      }(e.events.EventDispatcher);

      t.MovieClipData = s, s.__class = "splashjs.animation.MovieClipData", s.__interfaces = ["splashjs.animation.iface.IMovieClipData", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$EventDispat7) {
        _inherits(s, _e$events$EventDispat7);

        function s(t, i, r) {
          var _this49;

          _classCallCheck(this, s);

          _this49 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this49.resourceName && (_this49.resourceName = null), void 0 === _this49.resourcePath && (_this49.resourcePath = null), void 0 === _this49.resourceType && (_this49.resourceType = null), _this49.resourceName = t, _this49.resourcePath = i, _this49.resourceType = r, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this49)).call(_assertThisInitialized(_this49), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this49)));
          return _this49;
        }

        _createClass(s, [{
          key: "getResourcePath",
          value: function getResourcePath() {
            return this.resourcePath;
          }
        }, {
          key: "getResourceName",
          value: function getResourceName() {
            return this.resourceName;
          }
        }, {
          key: "getResourceType",
          value: function getResourceType() {
            return this.resourceType;
          }
        }, {
          key: "getResourceBase64",
          value: function getResourceBase64() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getResourceBase64();
          }
        }]);

        return s;
      }(e.events.EventDispatcher);

      t.Resource = s, s.__class = "splashjs.utils.Resource", s.__interfaces = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.utils.iface.IResource"];
    }(e.utils || (e.utils = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$events$EventDispat8) {
          _inherits(s, _e$events$EventDispat8);

          function s() {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this));
          }

          return s;
        }(e.events.EventDispatcher);

        t.Timer = s, s.__class = "splashjs.utils.desktop.Timer", s.__interfaces = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
      }(t.desktop || (t.desktop = {}));
    }(e.utils || (e.utils = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$EventDispat9) {
        _inherits(s, _e$events$EventDispat9);

        function s(e, t) {
          var _this50;

          _classCallCheck(this, s);

          if ("number" != typeof e && null !== e || "number" != typeof t && null !== t) {
            if ("number" != typeof e && null !== e || void 0 !== t) {
              if (void 0 !== e || void 0 !== t) throw new Error("invalid overload");
              _this50 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "timer")), _this50.currentCount = 0, _this50.delay = 0, _this50.repeatCount = 0, _this50.running = !1, _this50.self = _assertThisInitialized(_this50), _this50.jTimer = new java.util.Timer();
            } else {
              _this50 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "timer")), _this50.currentCount = 0, _this50.delay = 0, _this50.repeatCount = 0, _this50.running = !1, _this50.self = _assertThisInitialized(_this50), _this50.jTimer = new java.util.Timer(), function () {
                _this50.delay = e;
              }();
            }
          } else {
            _this50 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "timer")), _this50.currentCount = 0, _this50.delay = 0, _this50.repeatCount = 0, _this50.running = !1, _this50.self = _assertThisInitialized(_this50), _this50.jTimer = new java.util.Timer(), function () {
              _this50.delay = e, _this50.repeatCount = t;
            }();
          }
          return _possibleConstructorReturn(_this50);
        }

        _createClass(s, [{
          key: "reset",
          value: function reset() {
            this.jTimer.cancel(), this.currentCount = 0, this.running = !1;
          }
        }, {
          key: "start",
          value: function start() {
            this.jTimer.scheduleAtFixedRate$java_util_TimerTask$long$long(new s.Timer$0(this), this.delay, this.delay), this.running = !0;
          }
        }, {
          key: "stop",
          value: function stop() {
            this.jTimer.cancel(), this.running = !1;
          }
        }, {
          key: "getCurrentCount",
          value: function getCurrentCount() {
            return this.currentCount;
          }
        }, {
          key: "getDelay",
          value: function getDelay() {
            return this.delay;
          }
        }, {
          key: "setDelay",
          value: function setDelay(e) {
            this.delay = e;
          }
        }, {
          key: "getRepeatCount",
          value: function getRepeatCount() {
            return this.repeatCount;
          }
        }, {
          key: "setRepeatCount",
          value: function setRepeatCount(e) {
            this.repeatCount = e;
          }
        }, {
          key: "isRunning",
          value: function isRunning() {
            return this.running;
          }
        }]);

        return s;
      }(e.events.EventDispatcher);

      t.Timer = s, s.__class = "splashjs.utils.Timer", s.__interfaces = ["splashjs.utils.iface.ITimer", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"], function (t) {
        var s = /*#__PURE__*/function (_java$util$TimerTask) {
          _inherits(s, _java$util$TimerTask);

          function s(e) {
            var _this51;

            _classCallCheck(this, s);

            _this51 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this51.__parent = e;
            return _this51;
          }

          _createClass(s, [{
            key: "run",
            value: function run() {
              this.__parent.dispatchEvent(new e.events.TimerEvent(e.events.TimerEvent.TIMER, this.__parent.self, this.__parent.self)), this.__parent.currentCount += 1, this.__parent.currentCount === this.__parent.repeatCount && (this.__parent.jTimer.cancel(), this.__parent.running = !1, this.__parent.dispatchEvent(new e.events.TimerEvent(e.events.TimerEvent.TIMER_COMPLETE, this.__parent.self, this.__parent.self)));
            }
          }]);

          return s;
        }(java.util.TimerTask);

        t.Timer$0 = s, s.__interfaces = ["java.lang.Runnable"];
      }(s = t.Timer || (t.Timer = {}));
    }(e.utils || (e.utils = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$EventDispat10) {
        _inherits(s, _e$events$EventDispat10);

        function s() {
          var _this52;

          _classCallCheck(this, s);

          _this52 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "resourceLoader")), _this52.resources = [], _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this52)).call(_assertThisInitialized(_this52), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this52)));
          return _this52;
        }

        _createClass(s, [{
          key: "addResource",
          value: function addResource(e) {
            this.resources.push(e);
          }
        }, {
          key: "getResourceByName",
          value: function getResourceByName(e) {
            var t = null;

            for (var r = 0; r < this.resources.length; r++) {
              if (s = this.resources[r].getResourceName(), i = e, s && s.equals ? s.equals(i) : s === i) {
                t = this.resources[r];
                break;
              }
            }

            var s, i;
            return t;
          }
        }, {
          key: "loadAll",
          value: function loadAll() {
            _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).loadAll(this.resources);
          }
        }]);

        return s;
      }(e.events.EventDispatcher);

      t.ResourceLoader = s, s.__class = "splashjs.utils.ResourceLoader", s.__interfaces = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.utils.iface.IResourceLoader"];
    }(e.utils || (e.utils = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$EventDispat11) {
        _inherits(s, _e$events$EventDispat11);

        function s() {
          var _this53;

          _classCallCheck(this, s);

          _this53 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "byteArray")), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this53)).call(_assertThisInitialized(_this53), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this53)));
          return _this53;
        }

        _createClass(s, [{
          key: "getLength",
          value: function getLength() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getLength();
          }
        }, {
          key: "writeBytes",
          value: function writeBytes(e, t, s) {
            _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).writeBytes(e, t, s);
          }
        }]);

        return s;
      }(e.events.EventDispatcher);

      t.ByteArray = s, s.__class = "splashjs.utils.ByteArray", s.__interfaces = ["splashjs.lang.iface.ISplashObject", "splashjs.utils.iface.IByteArray", "splashjs.events.iface.IEventDispatcher"];
    }(e.utils || (e.utils = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$EventDispat12) {
        _inherits(s, _e$events$EventDispat12);

        function s(t) {
          var _this54;

          _classCallCheck(this, s);

          if ("string" == typeof t || null === t) {
            _this54 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, t)), void 0 === _this54.x && (_this54.x = 0), void 0 === _this54.y && (_this54.y = 0), void 0 === _this54.width && (_this54.width = 0), void 0 === _this54.height && (_this54.height = 0), void 0 === _this54.regX && (_this54.regX = null), void 0 === _this54.regY && (_this54.regY = null), void 0 === _this54.scaleX && (_this54.scaleX = 0), void 0 === _this54.scaleY && (_this54.scaleY = 0), void 0 === _this54.rotation && (_this54.rotation = 0), void 0 === _this54.visible && (_this54.visible = null), void 0 === _this54.alpha && (_this54.alpha = null), void 0 === _this54.name && (_this54.name = null), void 0 === _this54.parent && (_this54.parent = null), void 0 === _this54.mouseX && (_this54.mouseX = null), void 0 === _this54.mouseY && (_this54.mouseY = null), void 0 === _this54.mouseVisible && (_this54.mouseVisible = !1), void 0 === _this54.mouseCursor && (_this54.mouseCursor = null), void 0 === _this54.originalWidth && (_this54.originalWidth = 0), void 0 === _this54.originalHeight && (_this54.originalHeight = 0), void 0 === _this54.filters && (_this54.filters = null), void 0 === _this54.x && (_this54.x = 0), void 0 === _this54.y && (_this54.y = 0), void 0 === _this54.width && (_this54.width = 0), void 0 === _this54.height && (_this54.height = 0), void 0 === _this54.regX && (_this54.regX = null), void 0 === _this54.regY && (_this54.regY = null), void 0 === _this54.scaleX && (_this54.scaleX = 0), void 0 === _this54.scaleY && (_this54.scaleY = 0), void 0 === _this54.rotation && (_this54.rotation = 0), void 0 === _this54.visible && (_this54.visible = null), void 0 === _this54.alpha && (_this54.alpha = null), void 0 === _this54.name && (_this54.name = null), void 0 === _this54.parent && (_this54.parent = null), void 0 === _this54.mouseX && (_this54.mouseX = null), void 0 === _this54.mouseY && (_this54.mouseY = null), void 0 === _this54.mouseVisible && (_this54.mouseVisible = !1), void 0 === _this54.mouseCursor && (_this54.mouseCursor = null), void 0 === _this54.originalWidth && (_this54.originalWidth = 0), void 0 === _this54.originalHeight && (_this54.originalHeight = 0), void 0 === _this54.filters && (_this54.filters = null), function () {
              _this54.x = 0, _this54.y = 0, _this54.width = 0, _this54.height = 0, _this54.regX = 0, _this54.regY = 0, _this54.scaleX = 1, _this54.scaleY = 1, _this54.rotation = 0, _this54.visible = !0, _this54.alpha = 1, _this54.name = null, _this54.parent = null, _this54.mouseX = null, _this54.mouseY = null, _this54.mouseVisible = !0, _this54.mouseCursor = e.ui.MouseCursor.AUTO_$LI$(), _this54.filters = [];
            }();
          } else {
            if (void 0 !== t) throw new Error("invalid overload");
            _this54 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "splashjs")), void 0 === _this54.x && (_this54.x = 0), void 0 === _this54.y && (_this54.y = 0), void 0 === _this54.width && (_this54.width = 0), void 0 === _this54.height && (_this54.height = 0), void 0 === _this54.regX && (_this54.regX = null), void 0 === _this54.regY && (_this54.regY = null), void 0 === _this54.scaleX && (_this54.scaleX = 0), void 0 === _this54.scaleY && (_this54.scaleY = 0), void 0 === _this54.rotation && (_this54.rotation = 0), void 0 === _this54.visible && (_this54.visible = null), void 0 === _this54.alpha && (_this54.alpha = null), void 0 === _this54.name && (_this54.name = null), void 0 === _this54.parent && (_this54.parent = null), void 0 === _this54.mouseX && (_this54.mouseX = null), void 0 === _this54.mouseY && (_this54.mouseY = null), void 0 === _this54.mouseVisible && (_this54.mouseVisible = !1), void 0 === _this54.mouseCursor && (_this54.mouseCursor = null), void 0 === _this54.originalWidth && (_this54.originalWidth = 0), void 0 === _this54.originalHeight && (_this54.originalHeight = 0), void 0 === _this54.filters && (_this54.filters = null), void 0 === _this54.x && (_this54.x = 0), void 0 === _this54.y && (_this54.y = 0), void 0 === _this54.width && (_this54.width = 0), void 0 === _this54.height && (_this54.height = 0), void 0 === _this54.regX && (_this54.regX = null), void 0 === _this54.regY && (_this54.regY = null), void 0 === _this54.scaleX && (_this54.scaleX = 0), void 0 === _this54.scaleY && (_this54.scaleY = 0), void 0 === _this54.rotation && (_this54.rotation = 0), void 0 === _this54.visible && (_this54.visible = null), void 0 === _this54.alpha && (_this54.alpha = null), void 0 === _this54.name && (_this54.name = null), void 0 === _this54.parent && (_this54.parent = null), void 0 === _this54.mouseX && (_this54.mouseX = null), void 0 === _this54.mouseY && (_this54.mouseY = null), void 0 === _this54.mouseVisible && (_this54.mouseVisible = !1), void 0 === _this54.mouseCursor && (_this54.mouseCursor = null), void 0 === _this54.originalWidth && (_this54.originalWidth = 0), void 0 === _this54.originalHeight && (_this54.originalHeight = 0), void 0 === _this54.filters && (_this54.filters = null), function () {
              _this54.x = 0, _this54.y = 0, _this54.width = 0, _this54.height = 0, _this54.regX = 0, _this54.regY = 0, _this54.scaleX = 1, _this54.scaleY = 1, _this54.rotation = 0, _this54.visible = !0, _this54.alpha = 1, _this54.name = null, _this54.parent = null, _this54.mouseX = null, _this54.mouseY = null, _this54.mouseVisible = !0, _this54.mouseCursor = e.ui.MouseCursor.AUTO_$LI$(), _this54.filters = [];
            }();
          }

          return _possibleConstructorReturn(_this54);
        }

        _createClass(s, [{
          key: "getX",
          value: function getX() {
            return this.x;
          }
        }, {
          key: "setX",
          value: function setX(e) {
            this.x = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setX();
          }
        }, {
          key: "getY",
          value: function getY() {
            return this.y;
          }
        }, {
          key: "setY",
          value: function setY(e) {
            this.y = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setY();
          }
        }, {
          key: "setXY",
          value: function setXY(e, t) {
            this.setX(e), this.setY(t);
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            return this.width;
          }
        }, {
          key: "setWidth",
          value: function setWidth(e) {
            this.width = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setWidth();
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            return this.height;
          }
        }, {
          key: "setHeight",
          value: function setHeight(e) {
            this.height = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setHeight();
          }
        }, {
          key: "setSize",
          value: function setSize(e, t) {
            this.setWidth(e), this.setHeight(t);
          }
        }, {
          key: "getRegX",
          value: function getRegX() {
            return this.regX;
          }
        }, {
          key: "setRegX",
          value: function setRegX(e) {
            this.regX = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setRegX();
          }
        }, {
          key: "getRegY",
          value: function getRegY() {
            return this.regY;
          }
        }, {
          key: "setRegY",
          value: function setRegY(e) {
            this.regY = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setRegX();
          }
        }, {
          key: "setRegXY",
          value: function setRegXY(e, t) {
            this.setRegX(e), this.setRegY(t);
          }
        }, {
          key: "getScaleX",
          value: function getScaleX() {
            return this.scaleX;
          }
        }, {
          key: "setScaleX",
          value: function setScaleX(e) {
            this.scaleX = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setScaleX();
          }
        }, {
          key: "getScaleY",
          value: function getScaleY() {
            return this.scaleY;
          }
        }, {
          key: "setScaleY",
          value: function setScaleY(e) {
            this.scaleY = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setScaleY();
          }
        }, {
          key: "setScaleXY",
          value: function setScaleXY(e, t) {
            this.setScaleX(e), this.setScaleY(t);
          }
        }, {
          key: "getRotation",
          value: function getRotation() {
            return this.rotation;
          }
        }, {
          key: "setRotation",
          value: function setRotation(e) {
            this.rotation = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setRotation();
          }
        }, {
          key: "getVisible",
          value: function getVisible() {
            return this.visible;
          }
        }, {
          key: "setVisible",
          value: function setVisible(e) {
            this.visible = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setVisible();
          }
        }, {
          key: "getAlpha",
          value: function getAlpha() {
            return this.alpha;
          }
        }, {
          key: "setAlpha",
          value: function setAlpha(e) {
            this.alpha = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setAlpha();
          }
        }, {
          key: "getName",
          value: function getName() {
            return this.name;
          }
        }, {
          key: "setName",
          value: function setName(e) {
            this.name = e;
          }
        }, {
          key: "getParent",
          value: function getParent() {
            return this.parent;
          }
        }, {
          key: "getMouseX",
          value: function getMouseX() {
            return this.mouseX;
          }
        }, {
          key: "getMouseY",
          value: function getMouseY() {
            return this.mouseY;
          }
        }, {
          key: "setMouseVisible",
          value: function setMouseVisible(e) {
            this.mouseVisible = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setMouseVisible();
          }
        }, {
          key: "getMouseVisible",
          value: function getMouseVisible() {
            return this.mouseVisible;
          }
        }, {
          key: "setMouseCursor",
          value: function setMouseCursor(e) {
            this.mouseCursor = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setMouseCursor();
          }
        }, {
          key: "getMouseCursor",
          value: function getMouseCursor() {
            return this.mouseCursor;
          }
        }, {
          key: "addFilter",
          value: function addFilter(e) {
            this.filters.push(e), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).addFilter();
          }
        }, {
          key: "removeFilter",
          value: function removeFilter(e) {
            (function (t) {
              var s = t.indexOf(e);
              s >= 0 && t.splice(s, 1);
            })(this.filters), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).removeFilter();
          }
        }, {
          key: "removeAllFilters",
          value: function removeAllFilters() {
            this.filters.length = 0, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).removeFilter();
          }
        }, {
          key: "hasFilter",
          value: function hasFilter(e) {
            return this.filters.indexOf(e) >= 0;
          }
        }, {
          key: "getAllFilters",
          value: function getAllFilters() {
            return this.filters;
          }
        }, {
          key: "localToGlobal",
          value: function localToGlobal(t) {
            var s = new e.geom.Point(),
                i = this.x + t.getX(),
                r = this.y + t.getY();
            return s.setX(i), s.setY(r), s;
          }
        }, {
          key: "globalToLocal",
          value: function globalToLocal(t) {
            var s = new e.geom.Point();
            return s.setX(t.getX() - this.x), s.setY(t.getY() - this.y), s;
          }
        }, {
          key: "hitTestObject",
          value: function hitTestObject(t) {
            var s = !1,
                i = t.getX() * t.getStage().getScaleX() | 0,
                r = t.getY() * t.getStage().getScaleY() | 0,
                n = t.getX() * t.getStage().getScaleX() + t.getWidth() * t.getStage().getScaleX() | 0,
                a = t.getY() * t.getStage().getScaleY() + t.getHeight() * t.getStage().getScaleY() | 0,
                l = this.getX() * this.getStage().getScaleX() | 0,
                o = this.getY() * this.getStage().getScaleY() | 0,
                h = this.getX() * this.getStage().getScaleX() + this.getWidth() * this.getStage().getScaleX() | 0,
                u = this.getY() * this.getStage().getScaleY() + this.getHeight() * this.getStage().getScaleY() | 0,
                d = t.localToGlobal(new e.geom.Point(i, r)),
                c = t.localToGlobal(new e.geom.Point(n, a)),
                p = this.localToGlobal(new e.geom.Point(l, o)),
                g = this.localToGlobal(new e.geom.Point(h, u)),
                f = d.getX(),
                _ = d.getY(),
                v = c.getX(),
                j = c.getY(),
                m = p.getX(),
                E = p.getY(),
                R = g.getX(),
                b = g.getY();

            return console.info("x1: " + f + ", y1: " + _), console.info("x2: " + v + ", y2: " + j), console.info("------------"), console.info("x1: " + m + ", y1: " + E), console.info("x2: " + R + ", y2: " + b), (m >= f && m <= v && E >= _ && E <= j || R >= f && R <= v && b >= _ && b <= j) && (s = !0), s;
          }
        }, {
          key: "hitTestPoint",
          value: function hitTestPoint(t, s) {
            var i = !1,
                r = this.globalToLocal(new e.geom.Point(t, s)),
                n = this.x - this.regX,
                a = this.y - this.regY,
                l = n + this.getWidth(),
                o = a + this.getHeight();
            return console.info(r.getX() + " " + a + "-" + l + " " + o + "-" + t + " " + s), t >= n && t <= l && s >= a && s <= o && (i = !0), i;
          }
        }, {
          key: "render",
          value: function render() {
            _get(_getPrototypeOf(s.prototype), "render", this).call(this), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setPosition("absolute"), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setDisplay("inline-blick"), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setMargin("0"), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setPadding("0"), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setID(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setRegXY(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setXY(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setScaleXY(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setRotation(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).addFilter(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setVisible(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setAlpha(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setMouseCursor(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setMouseVisible();
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            var s, i;
            return s = t.getType(), i = e.events.Event.ADDED_TO_STAGE, s.toUpperCase() === (null === i ? i : i.toUpperCase()) ? (this.stage = t.getData(), this.render()) : function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(t.getType(), e.events.Event.REMOVED_FROM_STAGE) && (this.stage = null), function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(t.getType(), e.events.Event.ADDED) ? this.parent = t.getData() : function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(t.getType(), e.events.Event.REMOVED) && (this.parent = null), _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);
          }
        }]);

        return s;
      }(e.events.EventDispatcher);

      t.DisplayObject = s, s.__class = "splashjs.display.DisplayObject", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$EventDispat13) {
        _inherits(s, _e$events$EventDispat13);

        function s(t, i) {
          var _this55;

          _classCallCheck(this, s);

          _this55 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this55.bitmapDataWidth && (_this55.bitmapDataWidth = 0), void 0 === _this55.bitmapDataHeight && (_this55.bitmapDataHeight = 0), _this55.bitmapDataWidth = t, _this55.bitmapDataHeight = i, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this55)).call(_assertThisInitialized(_this55), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this55)));
          return _this55;
        }

        _createClass(s, [{
          key: "getBitmapDataWidth",
          value: function getBitmapDataWidth() {
            return this.bitmapDataWidth;
          }
        }, {
          key: "getBitmapDataHeight",
          value: function getBitmapDataHeight() {
            return this.bitmapDataHeight;
          }
        }, {
          key: "draw",
          value: function draw(e) {
            _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).draw(e);
          }
        }]);

        return s;
      }(e.events.EventDispatcher);

      t.BitmapData = s, s.__class = "splashjs.display.BitmapData", s.__interfaces = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.display.iface.IBitmapData"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$EventDispat14) {
        _inherits(s, _e$events$EventDispat14);

        function s(t, i) {
          var _this56;

          _classCallCheck(this, s);

          _this56 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "font")), void 0 === _this56.fontID && (_this56.fontID = null), void 0 === _this56.fontPath && (_this56.fontPath = null), _this56.fontID = t, _this56.fontPath = i, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this56)).call(_assertThisInitialized(_this56), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this56)));
          return _this56;
        }

        _createClass(s, [{
          key: "getFontID",
          value: function getFontID() {
            return this.fontID;
          }
        }, {
          key: "getFontPath",
          value: function getFontPath() {
            return this.fontPath;
          }
        }, {
          key: "load",
          value: function load() {
            _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).load();
          }
        }], [{
          key: "fonts_$LI$",
          value: function fonts_$LI$() {
            return null == s.fonts && (s.fonts = []), s.fonts;
          }
        }, {
          key: "registerFont",
          value: function registerFont(e) {
            s.fonts_$LI$().push(e);
          }
        }, {
          key: "getFontPathById",
          value: function getFontPathById(e) {
            var t,
                i = null;

            for (var a = 0; a < s.fonts_$LI$().length; a++) {
              if (t = s.fonts_$LI$()[a], r = t.getFontID(), n = e, r.toUpperCase() === (null === n ? n : n.toUpperCase())) {
                i = t.getFontPath();
                break;
              }
            }

            var r, n;
            return i;
          }
        }, {
          key: "getFonts",
          value: function getFonts() {
            return s.fonts_$LI$();
          }
        }]);

        return s;
      }(e.events.EventDispatcher);

      t.Font = s, s.__class = "splashjs.text.Font", s.__interfaces = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.text.iface.IFont"];
    }(e.text || (e.text = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$EventDispat15) {
        _inherits(s, _e$events$EventDispat15);

        function s() {
          var _this57;

          _classCallCheck(this, s);

          _this57 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "browserApp")), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this57)).call(_assertThisInitialized(_this57), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this57)));
          return _this57;
        }

        _createClass(s, [{
          key: "isOnline",
          value: function isOnline() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).isOnline();
          }
        }], [{
          key: "getApplicationInstance",
          value: function getApplicationInstance() {
            return null == s.application && (s.application = new s()), s.application;
          }
        }]);

        return s;
      }(e.events.EventDispatcher);

      s.application = null, t.Application = s, s.__class = "splashjs.application.Application", s.__interfaces = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.application.iface.IApplication"];
    }(e.application || (e.application = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$EventDispat16) {
        _inherits(s, _e$events$EventDispat16);

        function s(t, i, r, n) {
          var _this58;

          _classCallCheck(this, s);

          _this58 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, t)), void 0 === _this58.__splashjs_application_StageOwner_renderer && (_this58.__splashjs_application_StageOwner_renderer = null), void 0 === _this58.stage && (_this58.stage = null), void 0 === _this58.width && (_this58.width = 0), void 0 === _this58.height && (_this58.height = 0), _this58.stage = i, _this58.width = r, _this58.height = n, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this58)).call(_assertThisInitialized(_this58), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this58)));
          return _this58;
        }

        _createClass(s, [{
          key: "getStage",
          value: function getStage() {
            return this.stage;
          }
        }, {
          key: "setWidth",
          value: function setWidth(e) {
            this.width = e;
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            return this.width;
          }
        }, {
          key: "setHeight",
          value: function setHeight(e) {
            this.height = e;
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            return this.height;
          }
        }]);

        return s;
      }(e.events.EventDispatcher);

      t.StageOwner = s, s.__class = "splashjs.application.StageOwner", s.__interfaces = ["splashjs.application.iface.IStageOwner", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    }(e.application || (e.application = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$events$EventDispat17) {
        _inherits(s, _e$events$EventDispat17);

        function s() {
          var _this59;

          _classCallCheck(this, s);

          _this59 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "camera")), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this59)).call(_assertThisInitialized(_this59), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this59)));
          return _this59;
        }

        _createClass(s, [{
          key: "requestPermission",
          value: function requestPermission() {
            _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).requestPermission();
          }
        }], [{
          key: "getCamera",
          value: function getCamera() {
            return new s();
          }
        }, {
          key: "getNames",
          value: function getNames() {
            return null;
          }
        }]);

        return s;
      }(e.events.EventDispatcher);

      t.Camera = s, s.__class = "splashjs.media.Camera", s.__interfaces = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.media.iface.ICamera"];
    }(e.media || (e.media = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$lang$IOError) {
        _inherits(s, _e$lang$IOError);

        function s(e) {
          var _this60;

          _classCallCheck(this, s);

          var t;
          _this60 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), Object.setPrototypeOf(_assertThisInitialized(_this60), s.prototype), _this60.name = (t = _this60.constructor).__class ? t.__class : t.name;
          return _this60;
        }

        return s;
      }(e.lang.IOError);

      t.EOFError = s, s.__class = "splashjs.lang.EOFError", s.__interfaces = ["splashjs.lang.iface.IEOFError", "splashjs.lang.iface.ISplashError", "splashjs.lang.iface.IIOError", "java.io.Serializable"];
    }(e.lang || (e.lang = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$lang$IOError2) {
        _inherits(s, _e$lang$IOError2);

        function s(e) {
          var _this61;

          _classCallCheck(this, s);

          _this61 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), Object.setPrototypeOf(_assertThisInitialized(_this61), s.prototype);
          return _this61;
        }

        return s;
      }(e.lang.IOError);

      t.FileSystemError = s, s.__class = "splashjs.lang.FileSystemError", s.__interfaces = ["splashjs.lang.iface.ISplashError", "splashjs.lang.iface.IIOError", "java.io.Serializable"];
    }(e.lang || (e.lang = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$events$Even) {
          _inherits(s, _e$render$events$Even);

          function s(e) {
            var _this62;

            _classCallCheck(this, s);

            _this62 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this62.xmlHttpRequest && (_this62.xmlHttpRequest = null), void 0 === _this62.urlLoader && (_this62.urlLoader = null), void 0 === _this62.bytesLoaded && (_this62.bytesLoaded = 0), void 0 === _this62.bytesTotal && (_this62.bytesTotal = 0), void 0 === _this62.data && (_this62.data = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this62)).call(_assertThisInitialized(_this62), e), _this62.xmlHttpRequest = new XMLHttpRequest(), _this62.urlLoader = e;
            return _this62;
          }

          _createClass(s, [{
            key: "load",
            value: function load() {
              var _this63 = this;

              var t = this.urlLoader.getURLRequest(),
                  s = t.getMethod(),
                  i = "get";
              var r, n;
              r = s, n = e.net.URLRequestMethod.GET, r.toUpperCase() === (null === n ? n : n.toUpperCase()) ? i = "get" : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(s, e.net.URLRequestMethod.POST) ? i = "post" : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(s, e.net.URLRequestMethod.DELETE) ? i = "delete" : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(s, e.net.URLRequestMethod.PUT) ? i = "put" : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(s, e.net.URLRequestMethod.HEAD) ? i = "head" : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(s, e.net.URLRequestMethod.OPTIONS) && (i = "options");
              var a = this.urlLoader.getDataFormat();
              (function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              })(a, e.net.URLLoaderDataFormat.BINARY) ? this.xmlHttpRequest.responseType = "arraybuffer" : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(a, e.net.URLLoaderDataFormat.TEXT) ? this.xmlHttpRequest.responseType = "text" : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(a, e.net.URLLoaderDataFormat.VARIABLES) && (this.xmlHttpRequest.responseType = "");
              var l = t.getURL();
              this.xmlHttpRequest.open(i, l), this.xmlHttpRequest.setRequestHeader("Content-Type", "text/html"), this.xmlHttpRequest.addEventListener(e.render.HTMLDomEventName.LOAD, function (t) {
                return function (s) {
                  var i = s;

                  if (_this63.bytesLoaded = 0 | i.loaded, _this63.bytesTotal = 0 | i.total, function (e, t) {
                    return e.toUpperCase() === (null === t ? t : t.toUpperCase());
                  }(t, e.net.URLLoaderDataFormat.BINARY)) {
                    var _t25 = new e.utils.ByteArray();

                    _t25.getRenderer().setDataView(new DataView(_this63.xmlHttpRequest.response)), _this63.data = _t25;
                  } else (function (e, t) {
                    return e.toUpperCase() === (null === t ? t : t.toUpperCase());
                  })(t, e.net.URLLoaderDataFormat.TEXT) && (_this63.data = _this63.xmlHttpRequest.responseText);

                  var r = new e.events.Event(e.events.Event.COMPLETE, _this63.urlLoader, _this63.urlLoader);
                  _this63.urlLoader.dispatchEvent(r), console.info(s);
                };
              }(a)), this.xmlHttpRequest.send();
            }
          }, {
            key: "getData",
            value: function getData() {
              return this.data;
            }
          }, {
            key: "getBytesTotal",
            value: function getBytesTotal() {
              return this.bytesTotal;
            }
          }, {
            key: "getBytesLoaded",
            value: function getBytesLoaded() {
              return this.bytesLoaded;
            }
          }, {
            key: "close",
            value: function close() {
              null != this.xmlHttpRequest && this.xmlHttpRequest.abort();
            }
          }]);

          return s;
        }(e.render.events.EventDispatcherRenderer);

        t.URLLoaderRenderer = s, s.__class = "splashjs.render.net.URLLoaderRenderer", s.__interfaces = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.net.iface.IURLLoaderRenderer"];
      }(t.net || (t.net = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$events$Even2) {
          _inherits(s, _e$render$events$Even2);

          function s(t) {
            var _this64;

            _classCallCheck(this, s);

            _this64 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this64.selectedFile = null, void 0 === _this64.htmlInputElement && (_this64.htmlInputElement = null), void 0 === _this64.htmlAnchorElement && (_this64.htmlAnchorElement = null), void 0 === _this64.inputRenderElement && (_this64.inputRenderElement = null), void 0 === _this64.anchorRenderElement && (_this64.anchorRenderElement = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this64)).call(_assertThisInitialized(_this64), t), _this64.htmlInputElement = document.createElement("input"), _this64.htmlInputElement.type = "file", _this64.inputRenderElement = new e.render.RenderElement(_this64.htmlInputElement), _this64.htmlAnchorElement = document.createElement("a"), _this64.anchorRenderElement = new e.render.RenderElement(_this64.htmlAnchorElement), _this64.create();
            return _this64;
          }

          _createClass(s, [{
            key: "createEventListeners",
            value: function createEventListeners() {
              var _this65 = this;

              _get(_getPrototypeOf(s.prototype), "createEventListeners", this).call(this), this.htmlInputElement.addEventListener(e.render.HTMLDomEventName.CHANGE, function (t) {
                if (1 === _this65.htmlInputElement.files.length) {
                  _this65.getRenderObject().setName(null), _this65.getRenderObject().setExtension(null), _this65.getRenderObject().setSize(-1), _this65.getRenderObject().setType(null), _this65.getRenderObject().setModificationDate(null), _this65.selectedFile = _this65.htmlInputElement.files.item(0);

                  var _t26 = _this65.htmlInputElement.files.item(0).name;

                  _this65.getRenderObject().setName(_t26);

                  var _s18 = _t26.substring(_t26.lastIndexOf(".") + 1);

                  _this65.getRenderObject().setExtension(_s18), _this65.getRenderObject().setSize(_this65.htmlInputElement.files.item(0).size), _this65.getRenderObject().setType(_this65.htmlInputElement.files.item(0).type);
                  var i = new Date(_this65.htmlInputElement.files.item(0).lastModified);
                  _this65.getRenderObject().setModificationDate(i), _this65.getRenderObject().dispatchEvent(new e.events.Event(e.events.Event.SELECT, _this65.getRenderObject(), _this65.getRenderObject()));
                }
              });
            }
          }, {
            key: "create",
            value: function create() {
              _get(_getPrototypeOf(s.prototype), "setRenderElement", this).call(this, this.inputRenderElement), _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getStage().getRenderer().appendChild(this), _get(_getPrototypeOf(s.prototype), "setDisplay", this).call(this, "none"), _get(_getPrototypeOf(s.prototype), "setRenderElement", this).call(this, this.anchorRenderElement), _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getStage().getRenderer().appendChild(this), _get(_getPrototypeOf(s.prototype), "setDisplay", this).call(this, "none");
            }
          }, {
            key: "download",
            value: function download(e, t) {
              this.htmlAnchorElement.href = e.getURL(), this.htmlAnchorElement.setAttribute("download", t), this.htmlAnchorElement.click();
            }
          }, {
            key: "browse$",
            value: function browse$() {
              return this.htmlInputElement.click(), !0;
            }
          }, {
            key: "browse$splashjs_net_iface_IFileFilter_A",
            value: function browse$splashjs_net_iface_IFileFilter_A(e) {
              return this.htmlInputElement.click(), !0;
            }
          }, {
            key: "browse",
            value: function browse(e) {
              if (null != e && _instanceof(e, Array) && (0 == e.length || null == e[0] || null != e[0] && (null != e[0].__interfaces && e[0].__interfaces.indexOf("splashjs.net.iface.IFileFilter") >= 0 || null != e[0].constructor && null != e[0].constructor.__interfaces && e[0].constructor.__interfaces.indexOf("splashjs.net.iface.IFileFilter") >= 0)) || null === e) return this.browse$splashjs_net_iface_IFileFilter_A(e);
              if (void 0 === e) return this.browse$();
              throw new Error("invalid overload");
            }
          }, {
            key: "load",
            value: function load() {
              var _this66 = this;

              if (null != this.selectedFile) {
                var _t27 = new FileReader();

                _t27.addEventListener("loadstart", function (t) {
                  var s = new e.events.Event(e.events.Event.OPEN, _this66.getRenderObject(), _this66.getRenderObject());

                  _this66.getRenderObject().dispatchEvent(s);
                }), _t27.addEventListener("progress", function (t) {
                  var s = new e.events.ProgressEvent(e.events.ProgressEvent.PROGRESS);
                  s.setTarget(_this66.getRenderObject()), s.setCurrentTarget(_this66.getRenderObject()), s.setBytesLoaded(0 | t.loaded), s.setBytesTotal(0 | t.total), _this66.getRenderObject().dispatchEvent(s);
                }), _t27.addEventListener("error", function (t) {
                  return function (s) {
                    var i = new e.events.IOErrorEvent(e.events.IOErrorEvent.IO_ERROR);
                    i.setTarget(_this66.getRenderObject()), i.setCurrentTarget(_this66.getRenderObject()), i.setText(t.error.name), _this66.getRenderObject().dispatchEvent(i);
                  };
                }(_t27)), _t27.addEventListener("load", function (t) {
                  return function (s) {
                    var i = new e.utils.ByteArray();
                    i.getRenderer().setDataView(new DataView(t.result)), _this66.getRenderObject().setData(i), _this66.getRenderObject().dispatchEvent(new e.events.Event(e.events.Event.COMPLETE, _this66.getRenderObject(), _this66.getRenderObject()));
                  };
                }(_t27)), _t27.readAsArrayBuffer(this.selectedFile);
              }
            }
          }]);

          return s;
        }(e.render.events.EventDispatcherRenderer);

        t.FileReferenceRenderer = s, s.__class = "splashjs.render.net.FileReferenceRenderer", s.__interfaces = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.net.iface.IFileReferenceRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.net || (t.net = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$events$Even3) {
          _inherits(s, _e$render$events$Even3);

          function s() {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this));
          }

          return s;
        }(e.render.events.EventDispatcherRenderer);

        t.AnimationRenderer = s, s.__class = "splashjs.render.animation.AnimationRenderer", s.__interfaces = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.animation || (t.animation = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$events$Even4) {
          _inherits(s, _e$render$events$Even4);

          function s(e) {
            var _this67;

            _classCallCheck(this, s);

            _this67 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this67.spriteSheet = null, _this67.imageElement = null, _this67.width = 0, _this67.height = 0, _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this67)).call(_assertThisInitialized(_this67), e), _this67.spriteSheet = _get(_getPrototypeOf(s.prototype), "getRenderObject", _assertThisInitialized(_this67)).call(_assertThisInitialized(_this67)), _this67.imageElement = document.createElement("img"), _this67.imageElement.src = _this67.spriteSheet.getImagePath(), _this67.imageElement.addEventListener("load", function (e) {
              _this67.width = 0 | _this67.imageElement.naturalWidth, _this67.height = 0 | _this67.imageElement.naturalHeight;
            });
            var t = new XMLHttpRequest();
            t.responseType = "blob", t.addEventListener("load", function (e) {
              return function (t) {
                var s = new FileReader();
                s.addEventListener("load", function (e) {
                  _this67.spriteSheet.setImageBase64(s.result);
                }), s.readAsDataURL(e.response);
              };
            }(t)), t.open("get", _this67.spriteSheet.getImagePath()), t.send();
            return _this67;
          }

          _createClass(s, [{
            key: "getSprite",
            value: function getSprite(t) {
              var s = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getSpriteDataByLabel(t),
                  i = s.getSpriteSheet().getImagePath(),
                  r = s.getFrame(),
                  n = r.getX(),
                  a = r.getY(),
                  l = r.getWidth(),
                  o = r.getHeight(),
                  h = new e.display.Sprite(),
                  u = h.getRenderer().getDOMElement();

              u.style.width = l + this.UNIT, u.style.height = o + this.UNIT, u.style.backgroundImage = 'url("' + i + '")', u.style.backgroundPosition = "-" + n + this.UNIT + " -" + a + this.UNIT;
              var d = new e.display.Sprite();
              return d.addChild(h), d;
            }
          }, {
            key: "getMovieClip",
            value: function getMovieClip(t) {
              return new e.display.MovieClip(this.spriteSheet.getMovieClipDataByLabel(t));
            }
          }, {
            key: "getWidth",
            value: function getWidth() {
              return this.width;
            }
          }, {
            key: "getHeight",
            value: function getHeight() {
              return this.height;
            }
          }]);

          return s;
        }(e.render.events.EventDispatcherRenderer);

        t.SpriteSheetRenderer = s, s.__class = "splashjs.render.animation.SpriteSheetRenderer", s.__interfaces = ["splashjs.render.animation.iface.ISpriteSheetRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.animation || (t.animation = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$events$Even5) {
          _inherits(s, _e$render$events$Even5);

          function s(e) {
            var _this68;

            _classCallCheck(this, s);

            _this68 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this68.resourceBase64 && (_this68.resourceBase64 = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this68)).call(_assertThisInitialized(_this68), e);
            return _this68;
          }

          _createClass(s, [{
            key: "setResourceBase64",
            value: function setResourceBase64(e) {
              this.resourceBase64 = e;
            }
          }, {
            key: "getResourceBase64",
            value: function getResourceBase64() {
              return this.resourceBase64;
            }
          }]);

          return s;
        }(e.render.events.EventDispatcherRenderer);

        t.ResourceRenderer = s, s.__class = "splashjs.render.utils.ResourceRenderer", s.__interfaces = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.utils.iface.IResourceRenderer"];
      }(t.utils || (t.utils = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$events$Even6) {
          _inherits(s, _e$render$events$Even6);

          function s(e) {
            var _this69;

            _classCallCheck(this, s);

            _this69 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this69.dataView && (_this69.dataView = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this69)).call(_assertThisInitialized(_this69), e), _this69.dataView = new DataView(new ArrayBuffer(0));
            return _this69;
          }

          _createClass(s, [{
            key: "setDataView",
            value: function setDataView(e) {
              this.dataView = e;
            }
          }, {
            key: "getLength",
            value: function getLength() {
              return 0 | this.dataView.byteLength;
            }
          }, {
            key: "writeBytes",
            value: function writeBytes(e, t, s) {}
          }]);

          return s;
        }(e.render.events.EventDispatcherRenderer);

        t.ByteArrayRenderer = s, s.__class = "splashjs.render.utils.ByteArrayRenderer", s.__interfaces = ["splashjs.render.utils.iface.IByteArrayRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.utils || (t.utils = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$events$Even7) {
          _inherits(s, _e$render$events$Even7);

          function s(e) {
            var _this70;

            _classCallCheck(this, s);

            _this70 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this70.totalNumberOfResource && (_this70.totalNumberOfResource = 0), void 0 === _this70.numberOfResourceLoaded && (_this70.numberOfResourceLoaded = 0), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this70)).call(_assertThisInitialized(_this70), e);
            return _this70;
          }

          _createClass(s, [{
            key: "loadAll",
            value: function loadAll(t) {
              this.totalNumberOfResource = t.length, this.numberOfResourceLoaded = 0;
              var s = null;

              for (var n = 0; n < t.length; n++) {
                s = t[n], i = s.getResourceType(), r = e.utils.ResourceType.IMAGE, i.toUpperCase() === (null === r ? r : r.toUpperCase()) ? this.loadImage(s) : function (e, t) {
                  return e.toUpperCase() === (null === t ? t : t.toUpperCase());
                }(s.getResourceType(), e.utils.ResourceType.SOUND) && this.loadSound(s);
              }

              var i, r;
            }
          }, {
            key: "loadImage",
            value: function loadImage(t) {
              var _this71 = this;

              var s = new XMLHttpRequest();
              s.responseType = "blob", s.addEventListener(e.render.HTMLDomEventName.LOAD, function (s) {
                return function (i) {
                  var r = new FileReader();
                  r.addEventListener(e.render.HTMLDomEventName.LOAD, function (e) {
                    t.getRenderer().setResourceBase64(r.result), _this71.numberOfResourceLoaded += 1, _this71.checkIfResourceLoaded();
                  }), r.readAsDataURL(s.response);
                };
              }(s)), s.open("get", t.getResourcePath()), s.send();
            }
          }, {
            key: "loadSound",
            value: function loadSound(t) {
              var _this72 = this;

              var s = new XMLHttpRequest();
              s.responseType = "blob", s.addEventListener(e.render.HTMLDomEventName.LOAD, function (s) {
                return function (i) {
                  var r = new FileReader();
                  r.addEventListener(e.render.HTMLDomEventName.LOAD, function (e) {
                    t.getRenderer().setResourceBase64(r.result), _this72.numberOfResourceLoaded += 1, _this72.checkIfResourceLoaded();
                  }), r.readAsDataURL(s.response);
                };
              }(s)), s.open("get", t.getResourcePath()), s.send();
            }
          }, {
            key: "checkIfResourceLoaded",
            value: function checkIfResourceLoaded() {
              if (this.totalNumberOfResource === this.numberOfResourceLoaded) {
                var _t28 = _get(_getPrototypeOf(_s19.prototype), "getRenderObject", this).call(this),
                    _s19 = new e.events.Event(e.events.Event.LOAD, _t28, _t28);

                _t28.dispatchEvent(_s19);
              }
            }
          }]);

          return s;
        }(e.render.events.EventDispatcherRenderer);

        t.ResourceLoaderRenderer = s, s.__class = "splashjs.render.utils.ResourceLoaderRenderer", s.__interfaces = ["splashjs.render.iface.IRenderer", "splashjs.render.utils.iface.IResourceLoaderRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.utils || (t.utils = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (splashjs) {
    var render;
    !function (render) {
      var GlobalRenderer = /*#__PURE__*/function (_splashjs$render$even) {
        _inherits(GlobalRenderer, _splashjs$render$even);

        function GlobalRenderer(e) {
          var _this73;

          _classCallCheck(this, GlobalRenderer);

          _this73 = _possibleConstructorReturn(this, _getPrototypeOf(GlobalRenderer).call(this)), _get(_getPrototypeOf(GlobalRenderer.prototype), "setRenderObject", _assertThisInitialized(_this73)).call(_assertThisInitialized(_this73), e);
          return _this73;
        }

        _createClass(GlobalRenderer, [{
          key: "render",
          value: function render(divID, jsClass, width, height) {
            var stage = new splashjs.display.Stage(divID, width, height),
                js = "";

            try {
              js = "new " + jsClass.toString() + "();", stage.addChild(eval(js));
            } catch (e) {
              console.error(e.message, e);
            }
          }
        }]);

        return GlobalRenderer;
      }(splashjs.render.events.EventDispatcherRenderer);

      render.GlobalRenderer = GlobalRenderer, GlobalRenderer.__class = "splashjs.render.GlobalRenderer", GlobalRenderer.__interfaces = ["splashjs.render.iface.IGlobalRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
    }(render = splashjs.render || (splashjs.render = {}));
  }(splashjs || (splashjs = {})), function (splashjs) {
    var render;
    !function (render) {
      var display;
      !function (display) {
        var BitmapDataRenderer = /*#__PURE__*/function (_splashjs$render$even2) {
          _inherits(BitmapDataRenderer, _splashjs$render$even2);

          function BitmapDataRenderer(e) {
            var _this74;

            _classCallCheck(this, BitmapDataRenderer);

            _this74 = _possibleConstructorReturn(this, _getPrototypeOf(BitmapDataRenderer).call(this)), void 0 === _this74.blob && (_this74.blob = null), _get(_getPrototypeOf(BitmapDataRenderer.prototype), "setRenderObject", _assertThisInitialized(_this74)).call(_assertThisInitialized(_this74), e);
            return _this74;
          }

          _createClass(BitmapDataRenderer, [{
            key: "draw",
            value: function draw(bitmapDrawable) {
              var _this75 = this;

              if (null != bitmapDrawable && (null != bitmapDrawable.__interfaces && bitmapDrawable.__interfaces.indexOf("splashjs.media.iface.IVideo") >= 0 || null != bitmapDrawable.constructor && null != bitmapDrawable.constructor.__interfaces && bitmapDrawable.constructor.__interfaces.indexOf("splashjs.media.iface.IVideo") >= 0)) {
                var video = bitmapDrawable,
                    mediaStream = video.getCamera().getRenderer().getMediaStream(),
                    imageCapture = eval("new ImageCapture(mediaStream.getVideoTracks()[0]);"),
                    photoPromise = eval("imageCapture.takePhoto();");
                photoPromise.then(function (e) {
                  _this75.blob = e;
                }).catch(function (e) {
                  console.info(e);
                });
              }
            }
          }, {
            key: "getBlob",
            value: function getBlob() {
              return this.blob;
            }
          }]);

          return BitmapDataRenderer;
        }(splashjs.render.events.EventDispatcherRenderer);

        display.BitmapDataRenderer = BitmapDataRenderer, BitmapDataRenderer.__class = "splashjs.render.display.BitmapDataRenderer", BitmapDataRenderer.__interfaces = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IBitmapDataRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(display = render.display || (render.display = {}));
    }(render = splashjs.render || (splashjs.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$events$Even8) {
          _inherits(s, _e$render$events$Even8);

          function s() {
            var _this76;

            _classCallCheck(this, s);

            _this76 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this76.__splashjs_render_display_DisplayObjectRenderer_htmlElement && (_this76.__splashjs_render_display_DisplayObjectRenderer_htmlElement = null);
            return _this76;
          }

          _createClass(s, [{
            key: "createEventListeners",
            value: function createEventListeners() {
              var _this77 = this;

              _get(_getPrototypeOf(s.prototype), "createEventListeners", this).call(this), this.getDOMElement().addEventListener(e.render.HTMLDomEventName.MOUSEMOVE, function (t) {
                var s = new e.events.MouseEvent(e.events.MouseEvent.MOUSE_MOVE, null, _this77.getRenderObject()),
                    i = t;
                s.setLocalX((0 | i.clientX) - _this77.getRenderObject().getX()), s.setLocalY((0 | i.clientY) - _this77.getRenderObject().getY()), _this77.getRenderObject().dispatchEvent(s);
              });
            }
          }, {
            key: "create",
            value: function create() {}
          }, {
            key: "getOriginalWidth",
            value: function getOriginalWidth() {
              return 0;
            }
          }, {
            key: "getOriginalHeight",
            value: function getOriginalHeight() {
              return 0;
            }
          }, {
            key: "setX",
            value: function setX() {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = _get(_getPrototypeOf(s.prototype), "getCSSLeftText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = _get(_getPrototypeOf(s.prototype), "getCSSTransformText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = _get(_getPrototypeOf(s.prototype), "getCSSTopText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = _get(_getPrototypeOf(s.prototype), "getCSSTransformOriginText", this).call(this);
            }
          }, {
            key: "setY",
            value: function setY() {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = _get(_getPrototypeOf(s.prototype), "getCSSTransformText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = _get(_getPrototypeOf(s.prototype), "getCSSLeftText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = _get(_getPrototypeOf(s.prototype), "getCSSTopText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = _get(_getPrototypeOf(s.prototype), "getCSSTransformOriginText", this).call(this);
            }
          }, {
            key: "setXY",
            value: function setXY() {
              this.setX(), this.setY();
            }
          }, {
            key: "setRegX",
            value: function setRegX() {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = _get(_getPrototypeOf(s.prototype), "getCSSTransformText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = _get(_getPrototypeOf(s.prototype), "getCSSLeftText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = _get(_getPrototypeOf(s.prototype), "getCSSTopText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = _get(_getPrototypeOf(s.prototype), "getCSSTransformOriginText", this).call(this);
            }
          }, {
            key: "setRegY",
            value: function setRegY() {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = _get(_getPrototypeOf(s.prototype), "getCSSTransformText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = _get(_getPrototypeOf(s.prototype), "getCSSLeftText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = _get(_getPrototypeOf(s.prototype), "getCSSTopText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = _get(_getPrototypeOf(s.prototype), "getCSSTransformOriginText", this).call(this);
            }
          }, {
            key: "setRegXY",
            value: function setRegXY() {
              this.setRegX(), this.setRegY();
            }
          }, {
            key: "setScaleX",
            value: function setScaleX() {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = _get(_getPrototypeOf(s.prototype), "getCSSTransformText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = _get(_getPrototypeOf(s.prototype), "getCSSLeftText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = _get(_getPrototypeOf(s.prototype), "getCSSTopText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = _get(_getPrototypeOf(s.prototype), "getCSSTransformOriginText", this).call(this);
            }
          }, {
            key: "setScaleY",
            value: function setScaleY() {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = _get(_getPrototypeOf(s.prototype), "getCSSTransformText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = _get(_getPrototypeOf(s.prototype), "getCSSLeftText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = _get(_getPrototypeOf(s.prototype), "getCSSTopText", this).call(this), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = _get(_getPrototypeOf(s.prototype), "getCSSTransformOriginText", this).call(this);
            }
          }, {
            key: "setScaleXY",
            value: function setScaleXY() {
              this.setScaleX(), this.setScaleY();
            }
          }, {
            key: "setRotation",
            value: function setRotation() {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = _get(_getPrototypeOf(s.prototype), "getCSSTransformText", this).call(this);
            }
          }, {
            key: "setAlpha",
            value: function setAlpha() {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.opacity = _get(_getPrototypeOf(s.prototype), "getCSSOpacityText", this).call(this);
            }
          }, {
            key: "addFilter",
            value: function addFilter() {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.setProperty("filter", _get(_getPrototypeOf(s.prototype), "getCSSFilterText", this).call(this));
            }
          }, {
            key: "removeFilter",
            value: function removeFilter() {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.filter = _get(_getPrototypeOf(s.prototype), "getCSSFilterText", this).call(this);
            }
          }, {
            key: "setVisible",
            value: function setVisible() {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.visibility = _get(_getPrototypeOf(s.prototype), "getCSSVisibilityText", this).call(this);
            }
          }, {
            key: "setMouseVisible",
            value: function setMouseVisible() {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.cursor = _get(_getPrototypeOf(s.prototype), "getCSSCursorVisibleText", this).call(this);
            }
          }, {
            key: "setMouseCursor",
            value: function setMouseCursor() {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.cursor = _get(_getPrototypeOf(s.prototype), "getCSSCursorText", this).call(this);
            }
          }, {
            key: "setID",
            value: function setID() {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.id = _get(_getPrototypeOf(s.prototype), "getCSSIDText", this).call(this);
            }
          }, {
            key: "setWidth",
            value: function setWidth() {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.width = _get(_getPrototypeOf(s.prototype), "getCSSWidthText", this).call(this);
            }
          }, {
            key: "setHeight",
            value: function setHeight() {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.height = _get(_getPrototypeOf(s.prototype), "getCSSHeightText", this).call(this);
            }
          }, {
            key: "getWidth",
            value: function getWidth() {
              return this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), 0 | this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.clientWidth;
            }
          }, {
            key: "getHeight",
            value: function getHeight() {
              return this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), 0 | this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.clientHeight;
            }
          }, {
            key: "setBorder",
            value: function setBorder(e) {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.border = e;
            }
          }, {
            key: "setPosition",
            value: function setPosition(e) {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.position = e;
            }
          }, {
            key: "setMargin",
            value: function setMargin(e) {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.margin = e;
            }
          }, {
            key: "setPadding",
            value: function setPadding(e) {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.padding = e;
            }
          }, {
            key: "setZIndex",
            value: function setZIndex(e) {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.zIndex = e;
            }
          }, {
            key: "setOverflow",
            value: function setOverflow(e) {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.overflow = e;
            }
          }, {
            key: "setResize",
            value: function setResize(e) {
              this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement(), this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.setProperty("resize", e);
            }
          }]);

          return s;
        }(e.render.events.EventDispatcherRenderer);

        t.DisplayObjectRenderer = s, s.__class = "splashjs.render.display.DisplayObjectRenderer", s.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.display || (t.display = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$events$Even9) {
          _inherits(s, _e$render$events$Even9);

          function s(t) {
            var _this78;

            _classCallCheck(this, s);

            _this78 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this78.htmlStyleElement && (_this78.htmlStyleElement = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this78)).call(_assertThisInitialized(_this78), t), _this78.htmlStyleElement = document.createElement("style"), _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this78)).call(_assertThisInitialized(_this78), new e.render.RenderElement(_this78.htmlStyleElement)), _this78.create();
            return _this78;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {
              document.head.appendChild(this.htmlStyleElement);
            }
          }, {
            key: "load",
            value: function load() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this),
                  t = e.getFontID(),
                  s = e.getFontPath().getNormalFontPath(),
                  i = "@font-face {" + this.ENDLINE_CHAR;

              i += 'font-family: "' + t + '";' + this.ENDLINE_CHAR, i += 'src: url("' + s + '");' + this.ENDLINE_CHAR, i += "}" + this.ENDLINE_CHAR, this.htmlStyleElement.appendChild(document.createTextNode(i));
            }
          }]);

          return s;
        }(e.render.events.EventDispatcherRenderer);

        t.FontRenderer = s, s.__class = "splashjs.render.text.FontRenderer", s.__interfaces = ["splashjs.render.text.iface.IFontRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.text || (t.text = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$events$Even10) {
          _inherits(s, _e$render$events$Even10);

          function s(t) {
            var _this79;

            _classCallCheck(this, s);

            _this79 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this79)).call(_assertThisInitialized(_this79), t), document.body.addEventListener("online", function (t) {
              var s = new e.events.Event(e.events.Event.ONLINE);

              _this79.getRenderObject().dispatchEvent(s);
            }), document.body.addEventListener("offline", function (t) {
              var s = new e.events.Event(e.events.Event.OFFLINE);

              _this79.getRenderObject().dispatchEvent(s);
            });
            return _this79;
          }

          _createClass(s, [{
            key: "isOnline",
            value: function isOnline() {
              var e = !1;
              return !0 === navigator.onLine && (e = !0), e;
            }
          }]);

          return s;
        }(e.render.events.EventDispatcherRenderer);

        t.ApplicationRenderer = s, s.__class = "splashjs.render.application.ApplicationRenderer", s.__interfaces = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.application.iface.IApplicationRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.application || (t.application = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$events$Even11) {
          _inherits(s, _e$render$events$Even11);

          function s(e) {
            var _this80;

            _classCallCheck(this, s);

            _this80 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this80)).call(_assertThisInitialized(_this80), e), _this80.create();
            return _this80;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {
              var _this81 = this;

              var t = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this),
                  s = document.getElementById(_get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getID());

              null == s ? (s = document.createElement("div"), s.id = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getID(), s.style.position = "absolute", s.style.top = "0" + this.UNIT, s.style.left = "0" + this.UNIT, s.style.bottom = "0" + this.UNIT, s.style.right = "0" + this.UNIT, _get(_getPrototypeOf(s.prototype), "setRenderElement", this).call(this, new e.render.RenderElement(s)), this.appendToBody()) : _get(_getPrototypeOf(s.prototype), "setRenderElement", this).call(this, new e.render.RenderElement(s)), t.setWidth(0 | s.clientWidth), t.setHeight(0 | s.clientHeight), window.addEventListener("resize", function (t) {
                return function (s) {
                  var i = new e.events.Event(e.events.Event.RESIZE);
                  i.setTarget(_get(_getPrototypeOf(s.prototype), "getRenderObject", _this81).call(_this81)), i.setCurrentTarget(_get(_getPrototypeOf(s.prototype), "getRenderObject", _this81).call(_this81));

                  var r = 0 | _get(_getPrototypeOf(s.prototype), "getDOMElement", _this81).call(_this81).clientWidth,
                      n = 0 | _get(_getPrototypeOf(s.prototype), "getDOMElement", _this81).call(_this81).clientHeight;

                  t.setWidth(r), t.setHeight(n), t.dispatchEvent(i);
                };
              }(t));
            }
          }]);

          return s;
        }(e.render.events.EventDispatcherRenderer);

        t.StageOwnerRenderer = s, s.__class = "splashjs.render.application.StageOwnerRenderer", s.__interfaces = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.application.iface.IStageOwnerRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.application || (t.application = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$events$Even12) {
          _inherits(s, _e$render$events$Even12);

          function s(e) {
            var _this82;

            _classCallCheck(this, s);

            _this82 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this82.mediaStream && (_this82.mediaStream = null), void 0 === _this82.camera && (_this82.camera = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this82)).call(_assertThisInitialized(_this82), e), _this82.camera = e;
            return _this82;
          }

          _createClass(s, [{
            key: "requestPermission",
            value: function requestPermission() {
              var _this83 = this;

              var t = Object.create(null);
              t.video = !0, e.def.js.navigator.mediaDevices.getUserMedia(t).then(function (t) {
                _this83.mediaStream = t;
                var s = new e.events.PermissionEvent(e.events.PermissionEvent.PERMISSION_STATUS, _this83.camera, _this83.camera);
                s.setStatus(e.permissions.PermissionStatus.GRANTED), _this83.camera.dispatchEvent(s);
              }).catch(function (t) {
                var s = new e.events.PermissionEvent(e.events.PermissionEvent.PERMISSION_STATUS, _this83.camera, _this83.camera);
                s.setStatus(e.permissions.PermissionStatus.DENIED), _this83.camera.dispatchEvent(s);
              });
            }
          }, {
            key: "setMediaStream",
            value: function setMediaStream(e) {
              this.mediaStream = e;
            }
          }, {
            key: "getMediaStream",
            value: function getMediaStream() {
              return this.mediaStream;
            }
          }]);

          return s;
        }(e.render.events.EventDispatcherRenderer);

        t.CameraRenderer = s, s.__class = "splashjs.render.media.CameraRenderer", s.__interfaces = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.media.iface.ICameraRenderer"];
      }(t.media || (t.media = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$animation$Animatio) {
        _inherits(s, _e$animation$Animatio);

        function s() {
          var _this84;

          _classCallCheck(this, s);

          _this84 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this84.autoReverse = !1, _this84.loopCount = 1, _this84.delay = 0, _this84.easing = e.animation.easing.Linear.EASE_NONE, void 0 === _this84.targetObject && (_this84.targetObject = null), void 0 === _this84.from && (_this84.from = 0), void 0 === _this84.to && (_this84.to = 0), void 0 === _this84.duration && (_this84.duration = 0);
          return _this84;
        }

        _createClass(s, [{
          key: "setTargetObject",
          value: function setTargetObject(e) {
            return this.targetObject = e, this;
          }
        }, {
          key: "getTargetObject",
          value: function getTargetObject() {
            return this.targetObject;
          }
        }, {
          key: "setAutoReverse",
          value: function setAutoReverse(e) {
            return this.autoReverse = e, this;
          }
        }, {
          key: "getAutoReverse",
          value: function getAutoReverse() {
            return this.autoReverse;
          }
        }, {
          key: "setLoopCount",
          value: function setLoopCount(e) {
            return this.loopCount = e, this;
          }
        }, {
          key: "getLoopCount",
          value: function getLoopCount() {
            return this.loopCount;
          }
        }, {
          key: "setEasing",
          value: function setEasing(e) {
            return this.easing = e, this;
          }
        }, {
          key: "getEasing",
          value: function getEasing() {
            return this.easing;
          }
        }, {
          key: "setFrom",
          value: function setFrom(e) {
            return this.from = e, this;
          }
        }, {
          key: "getFrom",
          value: function getFrom() {
            return this.from;
          }
        }, {
          key: "setTo",
          value: function setTo(e) {
            return this.to = e, this;
          }
        }, {
          key: "getTo",
          value: function getTo() {
            return this.to;
          }
        }, {
          key: "setDuration",
          value: function setDuration(e) {
            return this.duration = e, this;
          }
        }, {
          key: "getTransitionState",
          value: function getTransitionState() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getTransitionState();
          }
        }, {
          key: "getDuration",
          value: function getDuration() {
            return this.duration;
          }
        }, {
          key: "setDelay",
          value: function setDelay(e) {
            return this.delay = e, this;
          }
        }, {
          key: "getDelay",
          value: function getDelay() {
            return this.delay;
          }
        }, {
          key: "isRunning",
          value: function isRunning() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).isRunning();
          }
        }, {
          key: "play",
          value: function play() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).play(), this;
          }
        }, {
          key: "stop",
          value: function stop() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).stop(), this;
          }
        }], [{
          key: "create",
          value: function create(t) {
            return e.render.animation.TransitionRenderer.create(t);
          }
        }]);

        return s;
      }(e.animation.Animation);

      t.Transition = s, s.__class = "splashjs.animation.Transition", s.__interfaces = ["splashjs.animation.iface.ITransition", "splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher"];
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$DisplayObj) {
        _inherits(s, _e$display$DisplayObj);

        function s(e) {
          var _this85;

          _classCallCheck(this, s);

          if ("string" == typeof e || null === e) {
            _this85 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e));
          } else {
            if (void 0 !== e) throw new Error("invalid overload");
            _this85 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this));
          }

          return _possibleConstructorReturn(_this85);
        }

        _createClass(s, [{
          key: "dispatchClickEvent",
          value: function dispatchClickEvent(e) {
            this.dispatchEvent(e);
          }
        }, {
          key: "dispatchDoubleClickEvent",
          value: function dispatchDoubleClickEvent(e) {
            this.dispatchEvent(e);
          }
        }, {
          key: "dispatchMouseMoveEvent",
          value: function dispatchMouseMoveEvent() {}
        }, {
          key: "dispatchMouseDownEvent",
          value: function dispatchMouseDownEvent() {}
        }, {
          key: "dispatchMouseUpEvent",
          value: function dispatchMouseUpEvent() {}
        }, {
          key: "dispatchMouseOverEvent",
          value: function dispatchMouseOverEvent() {}
        }, {
          key: "dispatchMouseEnterEvent",
          value: function dispatchMouseEnterEvent() {}
        }, {
          key: "dispatchMouseLeaveEvent",
          value: function dispatchMouseLeaveEvent() {}
        }, {
          key: "dispatchMouseOutEvent",
          value: function dispatchMouseOutEvent() {}
        }]);

        return s;
      }(e.display.DisplayObject);

      t.InteractiveObject = s, s.__class = "splashjs.display.InteractiveObject", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$DisplayObj2) {
        _inherits(s, _e$display$DisplayObj2);

        function s(t) {
          var _this86;

          _classCallCheck(this, s);

          if (null != t && (null != t.__interfaces && t.__interfaces.indexOf("splashjs.display.iface.IBitmapData") >= 0 || null != t.constructor && null != t.constructor.__interfaces && t.constructor.__interfaces.indexOf("splashjs.display.iface.IBitmapData") >= 0) || null === t) {
            _this86 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this86.bitmapData && (_this86.bitmapData = null), void 0 === _this86.bitmapData && (_this86.bitmapData = null), function () {
              _this86.bitmapData = t, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this86)).call(_assertThisInitialized(_this86), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this86)));
            }();
          } else {
            if (void 0 !== t) throw new Error("invalid overload");
            _this86 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this86.bitmapData && (_this86.bitmapData = null), void 0 === _this86.bitmapData && (_this86.bitmapData = null), function () {
              _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this86)).call(_assertThisInitialized(_this86), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this86)));
            }();
          }

          return _possibleConstructorReturn(_this86);
        }

        _createClass(s, [{
          key: "setBitmapData",
          value: function setBitmapData(e) {
            this.bitmapData = e;
          }
        }, {
          key: "getBitmapData",
          value: function getBitmapData() {
            return this.bitmapData;
          }
        }]);

        return s;
      }(e.display.DisplayObject);

      t.Bitmap = s, s.__class = "splashjs.display.Bitmap", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.display.iface.IBitmap"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$DisplayObj3) {
        _inherits(s, _e$display$DisplayObj3);

        function s(t) {
          var _this87;

          _classCallCheck(this, s);

          if (null != t && (null != t.__interfaces && t.__interfaces.indexOf("splashjs.utils.iface.IResource") >= 0 || null != t.constructor && null != t.constructor.__interfaces && t.constructor.__interfaces.indexOf("splashjs.utils.iface.IResource") >= 0) || null === t) {
            _this87 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "sound")), void 0 === _this87.resource && (_this87.resource = null), void 0 === _this87.soundPath && (_this87.soundPath = null), void 0 === _this87.resource && (_this87.resource = null), void 0 === _this87.soundPath && (_this87.soundPath = null), function () {
              _this87.soundPath = t.getResourcePath(), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this87)).call(_assertThisInitialized(_this87), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this87)));
            }();
          } else if (null != t && (null != t.__interfaces && t.__interfaces.indexOf("splashjs.display.iface.IStage") >= 0 || null != t.constructor && null != t.constructor.__interfaces && t.constructor.__interfaces.indexOf("splashjs.display.iface.IStage") >= 0) || null === t) {
            arguments[0];
            _this87 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "sound")), void 0 === _this87.resource && (_this87.resource = null), void 0 === _this87.soundPath && (_this87.soundPath = null), void 0 === _this87.resource && (_this87.resource = null), void 0 === _this87.soundPath && (_this87.soundPath = null);
          } else {
            if ("string" != typeof t && null !== t) throw new Error("invalid overload");
            {
              var _e12 = arguments[0];
              _this87 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "sound")), void 0 === _this87.resource && (_this87.resource = null), void 0 === _this87.soundPath && (_this87.soundPath = null), void 0 === _this87.resource && (_this87.resource = null), void 0 === _this87.soundPath && (_this87.soundPath = null), function () {
                _this87.soundPath = _e12;
              }();
            }
          }

          return _possibleConstructorReturn(_this87);
        }

        _createClass(s, [{
          key: "setSoundPath",
          value: function setSoundPath(e) {
            this.soundPath = e, null != _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setSoundPath();
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            var s, i;
            return s = t.getType(), i = e.events.Event.ADDED_TO_STAGE, s.toUpperCase(), null === i || i.toUpperCase(), _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);
          }
        }, {
          key: "getSoundPath",
          value: function getSoundPath() {
            return this.soundPath;
          }
        }, {
          key: "render",
          value: function render() {
            _get(_getPrototypeOf(s.prototype), "render", this).call(this);
          }
        }, {
          key: "play",
          value: function play() {
            null != _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).playSound();
          }
        }, {
          key: "pause",
          value: function pause() {
            null != _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).pauseSound();
          }
        }, {
          key: "toString",
          value: function toString() {
            return "[object Sound]";
          }
        }]);

        return s;
      }(e.display.DisplayObject);

      t.Sound = s, s.__class = "splashjs.media.Sound", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.lang.iface.ISplashObject", "splashjs.media.iface.ISound", "splashjs.events.iface.IEventDispatcher"];
    }(e.media || (e.media = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$DisplayObj4) {
        _inherits(s, _e$display$DisplayObj4);

        function s(t, i) {
          var _this88;

          _classCallCheck(this, s);

          if ("number" != typeof t && null !== t || "number" != typeof i && null !== i) {
            if ((null != t && (null != t.__interfaces && t.__interfaces.indexOf("splashjs.utils.iface.IResource") >= 0 || null != t.constructor && null != t.constructor.__interfaces && t.constructor.__interfaces.indexOf("splashjs.utils.iface.IResource") >= 0) || null === t) && void 0 === i) {
              var _t29 = arguments[0];
              _this88 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "video")), void 0 === _this88.resource && (_this88.resource = null), void 0 === _this88.videoPath && (_this88.videoPath = null), void 0 === _this88.camera && (_this88.camera = null), void 0 === _this88.resource && (_this88.resource = null), void 0 === _this88.videoPath && (_this88.videoPath = null), void 0 === _this88.camera && (_this88.camera = null), function () {
                _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this88)).call(_assertThisInitialized(_this88), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this88))), _this88.videoPath = _t29.getResourcePath();
              }();
            } else {
              if ("string" != typeof t && null !== t || void 0 !== i) throw new Error("invalid overload");
              {
                var _e13 = arguments[0];
                _this88 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "video")), void 0 === _this88.resource && (_this88.resource = null), void 0 === _this88.videoPath && (_this88.videoPath = null), void 0 === _this88.camera && (_this88.camera = null), void 0 === _this88.resource && (_this88.resource = null), void 0 === _this88.videoPath && (_this88.videoPath = null), void 0 === _this88.camera && (_this88.camera = null), function () {
                  _this88.videoPath = _e13;
                }();
              }
            }
          } else {
            _this88 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "video")), void 0 === _this88.resource && (_this88.resource = null), void 0 === _this88.videoPath && (_this88.videoPath = null), void 0 === _this88.camera && (_this88.camera = null), void 0 === _this88.resource && (_this88.resource = null), void 0 === _this88.videoPath && (_this88.videoPath = null), void 0 === _this88.camera && (_this88.camera = null), function () {
              _this88.width = t, _this88.height = i, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this88)).call(_assertThisInitialized(_this88), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this88)));
            }();
          }
          return _possibleConstructorReturn(_this88);
        }

        _createClass(s, [{
          key: "attachCamera",
          value: function attachCamera(e) {
            this.camera = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).attachCamera(e);
          }
        }, {
          key: "getCamera",
          value: function getCamera() {
            return this.camera;
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            var s = _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);

            var i, r;
            return i = t.getType(), r = e.events.Event.ADDED_TO_STAGE, i.toUpperCase(), null === r || r.toUpperCase(), s;
          }
        }, {
          key: "getVideoPath",
          value: function getVideoPath() {
            return this.videoPath;
          }
        }, {
          key: "setVideoPath",
          value: function setVideoPath(e) {
            this.videoPath = e;
          }
        }, {
          key: "render",
          value: function render() {
            _get(_getPrototypeOf(s.prototype), "render", this).call(this);
          }
        }, {
          key: "play",
          value: function play() {
            _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).playVideo();
          }
        }, {
          key: "toString",
          value: function toString() {
            return "[object Video]";
          }
        }]);

        return s;
      }(e.display.DisplayObject);

      t.Video = s, s.__class = "splashjs.media.Video", s.__interfaces = ["splashjs.media.iface.IVideo", "splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    }(e.media || (e.media = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$lang$FileSystemErr) {
        _inherits(s, _e$lang$FileSystemErr);

        function s(e) {
          var _this89;

          _classCallCheck(this, s);

          if ("string" == typeof e || null === e) {
            _this89 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), Object.setPrototypeOf(_assertThisInitialized(_this89), s.prototype);
          } else {
            if (void 0 !== e) throw new Error("invalid overload");
            _this89 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "No such file")), Object.setPrototypeOf(_assertThisInitialized(_this89), s.prototype);
          }

          return _possibleConstructorReturn(_this89);
        }

        return s;
      }(e.lang.FileSystemError);

      t.NoSuchFileError = s, s.__class = "splashjs.lang.NoSuchFileError", s.__interfaces = ["splashjs.lang.iface.ISplashError", "splashjs.lang.iface.IIOError", "java.io.Serializable"];
    }(e.lang || (e.lang = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$animation$A) {
          _inherits(s, _e$render$animation$A);

          function s(t) {
            var _this90;

            _classCallCheck(this, s);

            _this90 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this90.currentState = e.animation.TransitionState.NONE, _this90.fps = 60, _this90.deltaTime = 1e3 / _this90.fps | 0, _this90.currentLoopCount = 0, _this90.running = !1, _this90.transitionEvent = null, _this90.ctr = 0, void 0 === _this90.animTimer && (_this90.animTimer = null), void 0 === _this90.delayTimer && (_this90.delayTimer = null), void 0 === _this90.repeatCount && (_this90.repeatCount = 0), void 0 === _this90.transition && (_this90.transition = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this90)).call(_assertThisInitialized(_this90), t), _this90.transition = _this90.getRenderObject();
            return _this90;
          }

          _createClass(s, [{
            key: "play",
            value: function play() {
              var _this91 = this;

              this.repeatCount = 0 | this.transition.getDuration() / this.deltaTime, this.animTimer = new e.utils.Timer(this.deltaTime, this.repeatCount), console.info(this.deltaTime + " " + this.repeatCount), this.animTimer.addEventListener(e.events.TimerEvent.TIMER, function (t) {
                var s = _this91.deltaTime * (_this91.animTimer.getCurrentCount() + 1),
                    i = 0;
                var r, n;
                r = _this91.currentState, n = e.animation.TransitionState.NORMAL, r.toUpperCase() === (null === n ? n : n.toUpperCase()) ? i = _this91.getNextValue(s, _this91.transition.getFrom(), _this91.transition.getTo(), _this91.transition.getDuration(), _this91.transition.getEasing()) : function (e, t) {
                  return e.toUpperCase() === (null === t ? t : t.toUpperCase());
                }(_this91.currentState, e.animation.TransitionState.REVERSE) && (i = _this91.getNextValue(s, _this91.transition.getTo(), _this91.transition.getFrom(), _this91.transition.getDuration(), _this91.transition.getEasing())), _this91.transition.update(i), _this91.ctr++, console.info("nextValue: " + i + " ctr: " + _this91.ctr + " currentCount: " + _this91.animTimer.getCurrentCount() + " repeatCount: " + _this91.repeatCount);
              }), this.animTimer.addEventListener(e.events.TimerEvent.TIMER_COMPLETE, function (t) {
                var s, i;
                if (s = _this91.currentState, i = e.animation.TransitionState.NORMAL, s.toUpperCase() === (null === i ? i : i.toUpperCase()) ? _this91.transition.update(_this91.transition.getTo()) : function (e, t) {
                  return e.toUpperCase() === (null === t ? t : t.toUpperCase());
                }(_this91.currentState, e.animation.TransitionState.REVERSE) && _this91.transition.update(_this91.transition.getFrom()), !0 === _this91.transition.getAutoReverse() ? (_this91.currentLoopCount += 1, function (e, t) {
                  return e.toUpperCase() === (null === t ? t : t.toUpperCase());
                }(_this91.currentState, e.animation.TransitionState.NORMAL) ? _this91.currentState = e.animation.TransitionState.REVERSE : function (e, t) {
                  return e.toUpperCase() === (null === t ? t : t.toUpperCase());
                }(_this91.currentState, e.animation.TransitionState.REVERSE) && (_this91.currentState = e.animation.TransitionState.NORMAL)) : _this91.currentLoopCount += 2, !0 === _this91.running && (0 === _this91.transition.getLoopCount() || _this91.currentLoopCount < 2 * _this91.transition.getLoopCount())) _this91.animTimer.reset(), _this91.animTimer.start();else {
                  _this91.running = !1;

                  var _t30 = new e.events.TransitionEvent(e.events.TransitionEvent.COMPLETE);

                  _this91.transition.dispatchEvent(_t30);
                }
                _this91.transition.getLoopCount() <= _this91.currentLoopCount && (_this91.transitionEvent = new e.events.TransitionEvent(e.events.TransitionEvent.LOOP_INTERVAL_COMPLETE, _this91.transition, _this91.transition), _this91.transition.dispatchEvent(_this91.transitionEvent)), _this91.transition.getLoopCount() === _this91.currentLoopCount && (_this91.transitionEvent = new e.events.TransitionEvent(e.events.TransitionEvent.COMPLETE, _this91.transition, _this91.transition), _this91.transition.dispatchEvent(_this91.transitionEvent), _this91.currentState = e.animation.TransitionState.NONE);
              }), this.transition.getDelay() > 0 ? (this.delayTimer = new e.utils.Timer(this.transition.getDelay(), 1), this.delayTimer.addEventListener(e.events.TimerEvent.TIMER_COMPLETE, function (t) {
                _this91.transitionEvent = new e.events.TransitionEvent(e.events.TransitionEvent.DELAY_COMPLETE, _this91.transition, _this91.transition), _this91.transition.dispatchEvent(_this91.transitionEvent), _this91.animTimer.start();
              }), this.running = !0, this.currentState = e.animation.TransitionState.NORMAL, this.delayTimer.start()) : (this.running = !0, this.currentState = e.animation.TransitionState.NORMAL, this.animTimer.start());
            }
          }, {
            key: "stop",
            value: function stop() {
              this.running = !1;
            }
          }, {
            key: "isRunning",
            value: function isRunning() {
              return this.running;
            }
          }, {
            key: "getNextValue",
            value: function getNextValue(t, s, i, r, n) {
              var a = 0;
              var l, o;
              return l = n, o = e.animation.easing.Linear.EASE_NONE, l.toUpperCase() === (null === o ? o : o.toUpperCase()) ? a = e.animation.easing.Linear.easeNone(t, s, i - s, r) : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(n, e.animation.easing.Linear.EASE_IN) ? a = e.animation.easing.Linear.easeIn(t, s, i - s, r) : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(n, e.animation.easing.Linear.EASE_OUT) ? a = e.animation.easing.Linear.easeOut(t, s, i - s, r) : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(n, e.animation.easing.Linear.EASE_IN_OUT) ? a = e.animation.easing.Linear.easeInOut(t, s, i - s, r) : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(n, e.animation.easing.Elastic.EASE_IN) ? a = e.animation.easing.Elastic.easeIn$double$double$double$double(t, s, i - s, r) : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(n, e.animation.easing.Elastic.EASE_OUT) ? a = e.animation.easing.Elastic.easeOut$double$double$double$double(t, s, i - s, r) : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(n, e.animation.easing.Elastic.EASE_IN_OUT) ? a = e.animation.easing.Elastic.easeInOut$double$double$double$double(t, s, i - s, r) : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(n, e.animation.easing.Quint.EASE_IN) ? a = e.animation.easing.Quint.easeIn(t, s, i - s, r) : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(n, e.animation.easing.Quint.EASE_OUT) ? a = e.animation.easing.Quint.easeOut(t, s, i - s, r) : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(n, e.animation.easing.Quint.EASE_IN_OUT) && (a = e.animation.easing.Quint.easeInOut(t, s, i - s, r)), a;
            }
          }, {
            key: "getTransitionState",
            value: function getTransitionState() {
              return this.currentState;
            }
          }], [{
            key: "create",
            value: function create(t) {
              var s = t,
                  i = null,
                  r = s.type;

              if (null != r && 0 !== r.length) {
                var _t31, l, o, h, u, d, c, p, g;

                n = r, a = e.animation.TransitionType.SCALE_X, (n.toUpperCase() === (null === a ? a : a.toUpperCase()) || function (e, t) {
                  return e.toUpperCase() === (null === t ? t : t.toUpperCase());
                }(r, e.animation.TransitionType.SCALE_X) || function (e, t) {
                  return e.toUpperCase() === (null === t ? t : t.toUpperCase());
                }(r, e.animation.TransitionType.SCALE_XY)) && (i = new e.animation.ScaleTransition(), _t31 = s.target, l = s.from, o = s.to, h = void 0 === s.ease ? i.getEasing() : s.ease, u = void 0 === s.duration ? i.getDuration() : s.duration, d = void 0 === s.autoReverse ? i.getAutoReverse() : s.autoReverse, c = void 0 === s.loopCount ? i.getLoopCount() : s.loopCount, p = s.delay, g = s.onComplete, i.setTargetObject(_t31).setFrom(l).setTo(o).setDuration(u).setAutoReverse(d).setLoopCount(c).setDelay(p).setEasing(h).addEventListener(e.events.TransitionEvent.COMPLETE, function (e) {
                  return function (t) {
                    e(t);
                  };
                }(g))), function (e, t) {
                  return e.toUpperCase() === (null === t ? t : t.toUpperCase());
                }(r, e.animation.TransitionType.SCALE_X) ? i.setScaleTransitionType(e.animation.ScaleTransitionType.X) : function (e, t) {
                  return e.toUpperCase() === (null === t ? t : t.toUpperCase());
                }(r, e.animation.TransitionType.SCALE_Y) ? i.setScaleTransitionType(e.animation.ScaleTransitionType.Y) : function (e, t) {
                  return e.toUpperCase() === (null === t ? t : t.toUpperCase());
                }(r, e.animation.TransitionType.SCALE_XY) && i.setScaleTransitionType(e.animation.ScaleTransitionType.XY);
              }

              var n, a;
              return i;
            }
          }]);

          return s;
        }(e.render.animation.AnimationRenderer);

        t.TransitionRenderer = s, s.__class = "splashjs.render.animation.TransitionRenderer", s.__interfaces = ["splashjs.render.animation.iface.ITransitionRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.animation || (t.animation = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$display$Dis) {
          _inherits(s, _e$render$display$Dis);

          function s(t) {
            var _this92;

            _classCallCheck(this, s);

            _this92 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this92.imageElement && (_this92.imageElement = null), void 0 === _this92.bitmap && (_this92.bitmap = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this92)).call(_assertThisInitialized(_this92), t), _this92.bitmap = t, _this92.imageElement = document.createElement("img"), _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this92)).call(_assertThisInitialized(_this92), new e.render.RenderElement(_this92.imageElement)), _this92.create();
            return _this92;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {
              var e = this.bitmap.getBitmapData(),
                  t = e.getBitmapDataWidth(),
                  s = e.getBitmapDataHeight(),
                  i = e.getRenderer().getBlob();
              this.imageElement.src = URL.createObjectURL(i), this.imageElement.width = t, this.imageElement.height = s;
            }
          }]);

          return s;
        }(e.render.display.DisplayObjectRenderer);

        t.BitmapRenderer = s, s.__class = "splashjs.render.display.BitmapRenderer", s.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.display.iface.IBitmapRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.display || (t.display = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$display$Dis2) {
          _inherits(s, _e$render$display$Dis2);

          function s() {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this));
          }

          return s;
        }(e.render.display.DisplayObjectRenderer);

        t.InteractiveObjectRenderer = s, s.__class = "splashjs.render.display.InteractiveObjectRenderer", s.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.display || (t.display = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (splashjs) {
    var render;
    !function (render) {
      var media;
      !function (media) {
        var SoundRenderer = /*#__PURE__*/function (_splashjs$render$disp) {
          _inherits(SoundRenderer, _splashjs$render$disp);

          function SoundRenderer(e) {
            var _this93;

            _classCallCheck(this, SoundRenderer);

            _this93 = _possibleConstructorReturn(this, _getPrototypeOf(SoundRenderer).call(this)), void 0 === _this93.htmlAudioElement && (_this93.htmlAudioElement = null), _get(_getPrototypeOf(SoundRenderer.prototype), "setRenderObject", _assertThisInitialized(_this93)).call(_assertThisInitialized(_this93), e), _this93.htmlAudioElement = document.createElement("audio"), _get(_getPrototypeOf(SoundRenderer.prototype), "setRenderElement", _assertThisInitialized(_this93)).call(_assertThisInitialized(_this93), new splashjs.render.RenderElement(_this93.htmlAudioElement)), _this93.htmlAudioElement.addEventListener("canplaythrough", function (e) {
              _this93.htmlAudioElement.controls = !0;
              var t = new splashjs.events.Event(splashjs.events.Event.LOADED, _get(_getPrototypeOf(SoundRenderer.prototype), "getRenderObject", _assertThisInitialized(_this93)).call(_assertThisInitialized(_this93)), _get(_getPrototypeOf(SoundRenderer.prototype), "getRenderObject", _assertThisInitialized(_this93)).call(_assertThisInitialized(_this93)));

              _get(_getPrototypeOf(SoundRenderer.prototype), "getRenderObject", _assertThisInitialized(_this93)).call(_assertThisInitialized(_this93)).dispatchEvent(t);
            }), _this93.htmlAudioElement.addEventListener("click", function (e) {
              console.info("sound clicked");
            }), _this93.create();
            return _this93;
          }

          _createClass(SoundRenderer, [{
            key: "create",
            value: function create() {
              this.setSoundPath(), document.body.appendChild(this.htmlAudioElement), _get(_getPrototypeOf(SoundRenderer.prototype), "setDisplay", this).call(this, "none");
            }
          }, {
            key: "setSoundPath",
            value: function setSoundPath() {
              var e = _get(_getPrototypeOf(SoundRenderer.prototype), "getRenderObject", this).call(this).getSoundPath();

              this.htmlAudioElement.src = e;
            }
          }, {
            key: "playSound",
            value: function playSound() {
              var js = 'var playPromise = document.getElementById("' + _get(_getPrototypeOf(SoundRenderer.prototype), "getRenderObjectID", this).call(this) + '").play();';
              js += "if(playPromise !== undefined) {", js += 'playPromise.then(() => {console.log("playing");}).catch((error) => {console.log(error.name);});', js += "}", eval(js);
            }
          }, {
            key: "pauseSound",
            value: function pauseSound() {
              this.htmlAudioElement.pause();
            }
          }, {
            key: "getHTMLAudioElement",
            value: function getHTMLAudioElement() {
              return _get(_getPrototypeOf(SoundRenderer.prototype), "getDOMElement", this).call(this);
            }
          }]);

          return SoundRenderer;
        }(splashjs.render.display.DisplayObjectRenderer);

        media.SoundRenderer = SoundRenderer, SoundRenderer.__class = "splashjs.render.media.SoundRenderer", SoundRenderer.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.media.iface.ISoundRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(media = render.media || (render.media = {}));
    }(render = splashjs.render || (splashjs.render = {}));
  }(splashjs || (splashjs = {})), function (splashjs) {
    var render;
    !function (render) {
      var media;
      !function (media) {
        var VideoRenderer = /*#__PURE__*/function (_splashjs$render$disp2) {
          _inherits(VideoRenderer, _splashjs$render$disp2);

          function VideoRenderer(e) {
            var _this94;

            _classCallCheck(this, VideoRenderer);

            _this94 = _possibleConstructorReturn(this, _getPrototypeOf(VideoRenderer).call(this)), void 0 === _this94.videoElement && (_this94.videoElement = null), void 0 === _this94.video && (_this94.video = null), _get(_getPrototypeOf(VideoRenderer.prototype), "setRenderObject", _assertThisInitialized(_this94)).call(_assertThisInitialized(_this94), e), _this94.video = e, _this94.videoElement = document.createElement("video"), _get(_getPrototypeOf(VideoRenderer.prototype), "setRenderElement", _assertThisInitialized(_this94)).call(_assertThisInitialized(_this94), new splashjs.render.RenderElement(_this94.videoElement)), _this94.getHTMLVideoElement().addEventListener("canplaythrough", function (e) {
              _this94.getHTMLVideoElement().controls = !0;
              var t = new splashjs.events.Event(splashjs.events.Event.LOADED, _get(_getPrototypeOf(VideoRenderer.prototype), "getRenderObject", _assertThisInitialized(_this94)).call(_assertThisInitialized(_this94)), _get(_getPrototypeOf(VideoRenderer.prototype), "getRenderObject", _assertThisInitialized(_this94)).call(_assertThisInitialized(_this94)));

              _get(_getPrototypeOf(VideoRenderer.prototype), "getRenderObject", _assertThisInitialized(_this94)).call(_assertThisInitialized(_this94)).dispatchEvent(t);
            }), _this94.getHTMLVideoElement().addEventListener("click", function (e) {
              console.info("video clicked");
            });
            return _this94;
          }

          _createClass(VideoRenderer, [{
            key: "playVideo",
            value: function playVideo() {
              var js = "var playPromise = " + _get(_getPrototypeOf(VideoRenderer.prototype), "getRenderObjectID", this).call(this) + ".play();";
              js += "if(playPromise !== undefined) {", js += 'playPromise.then(() => {console.log("playing");}).catch((error) => {console.log(error.name);});', js += "}", eval(js);
            }
          }, {
            key: "attachCamera",
            value: function attachCamera(camera) {
              var mediaStream = camera.getRenderer().getMediaStream();
              eval("this.videoElement.srcObject = mediaStream");
            }
          }, {
            key: "getHTMLVideoElement",
            value: function getHTMLVideoElement() {
              return _get(_getPrototypeOf(VideoRenderer.prototype), "getDOMElement", this).call(this);
            }
          }, {
            key: "applyCSS",
            value: function applyCSS() {
              _get(_getPrototypeOf(VideoRenderer.prototype), "applyCSS", this).call(this), this.videoElement.style.width = this.video.getWidth() + this.UNIT, this.videoElement.style.height = this.video.getHeight() + this.UNIT;
            }
          }]);

          return VideoRenderer;
        }(splashjs.render.display.DisplayObjectRenderer);

        media.VideoRenderer = VideoRenderer, VideoRenderer.__class = "splashjs.render.media.VideoRenderer", VideoRenderer.__interfaces = ["splashjs.render.media.iface.IVideoRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(media = render.media || (render.media = {}));
    }(render = splashjs.render || (splashjs.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$animation$Transiti) {
        _inherits(s, _e$animation$Transiti);

        function s() {
          var _this95;

          _classCallCheck(this, s);

          _this95 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this95)).call(_assertThisInitialized(_this95), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this95)));
          return _this95;
        }

        _createClass(s, [{
          key: "update",
          value: function update(e) {
            return _get(_getPrototypeOf(s.prototype), "getTargetObject", this).call(this).setRotation(e), this;
          }
        }]);

        return s;
      }(e.animation.Transition);

      t.RotationTransition = s, s.__class = "splashjs.animation.RotationTransition", s.__interfaces = ["splashjs.animation.iface.ITransition", "splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher"];
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$animation$Transiti2) {
        _inherits(s, _e$animation$Transiti2);

        function s() {
          var _this96;

          _classCallCheck(this, s);

          _this96 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this96.scaleTransitionType = e.animation.ScaleTransitionType.XY, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this96)).call(_assertThisInitialized(_this96), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this96)));
          return _this96;
        }

        _createClass(s, [{
          key: "setScaleTransitionType",
          value: function setScaleTransitionType(e) {
            this.scaleTransitionType = e;
          }
        }, {
          key: "getScaleTransitionType",
          value: function getScaleTransitionType() {
            return this.scaleTransitionType;
          }
        }, {
          key: "update",
          value: function update(t) {
            var s = _get(_getPrototypeOf(s.prototype), "getTargetObject", this).call(this);

            var i, r;
            return i = this.scaleTransitionType, r = e.animation.ScaleTransitionType.X, i.toUpperCase() === (null === r ? r : r.toUpperCase()) ? s.setScaleX(t) : function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(this.scaleTransitionType, e.animation.ScaleTransitionType.Y) ? s.setScaleY(t) : function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(this.scaleTransitionType, e.animation.ScaleTransitionType.XY) && (s.setScaleX(t), s.setScaleY(t)), this;
          }
        }]);

        return s;
      }(e.animation.Transition);

      t.ScaleTransition = s, s.__class = "splashjs.animation.ScaleTransition", s.__interfaces = ["splashjs.animation.iface.ITransition", "splashjs.animation.iface.IScaleTransition", "splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher"];
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$animation$Transiti3) {
        _inherits(s, _e$animation$Transiti3);

        function s() {
          var _this97;

          _classCallCheck(this, s);

          _this97 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this97.radius = 50, _this97.centerX = 0, _this97.centerY = 0, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this97)).call(_assertThisInitialized(_this97), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this97)));
          return _this97;
        }

        _createClass(s, [{
          key: "setCenterX",
          value: function setCenterX(e) {
            return this.centerX = e, this;
          }
        }, {
          key: "getCenterX",
          value: function getCenterX() {
            return this.centerX;
          }
        }, {
          key: "setCenterY",
          value: function setCenterY(e) {
            return this.centerY = e, this;
          }
        }, {
          key: "getCenterY",
          value: function getCenterY() {
            return this.centerY;
          }
        }, {
          key: "setRadius",
          value: function setRadius(e) {
            return this.radius = e, this;
          }
        }, {
          key: "getRadius",
          value: function getRadius() {
            return this.radius;
          }
        }, {
          key: "setCircle$splashjs_geom_iface_ICircle",
          value: function setCircle$splashjs_geom_iface_ICircle(e) {
            return this.centerX = e.getCenterX(), this.centerY = e.getCenterY(), this.radius = e.getRadius(), this;
          }
        }, {
          key: "getCircle",
          value: function getCircle() {
            return new e.geom.Circle(this.centerX, this.centerY, this.radius);
          }
        }, {
          key: "setCircle$int$int$int",
          value: function setCircle$int$int$int(e, t, s) {
            return this.centerX = e, this.centerY = t, this.radius = s, this;
          }
        }, {
          key: "setCircle",
          value: function setCircle(e, t, s) {
            if ("number" != typeof e && null !== e || "number" != typeof t && null !== t || "number" != typeof s && null !== s) {
              if ((null != e && (null != e.__interfaces && e.__interfaces.indexOf("splashjs.geom.iface.ICircle") >= 0 || null != e.constructor && null != e.constructor.__interfaces && e.constructor.__interfaces.indexOf("splashjs.geom.iface.ICircle") >= 0) || null === e) && void 0 === t && void 0 === s) return this.setCircle$splashjs_geom_iface_ICircle(e);
              throw new Error("invalid overload");
            }

            return this.setCircle$int$int$int(e, t, s);
          }
        }, {
          key: "update",
          value: function update(e) {
            var t = _get(_getPrototypeOf(s.prototype), "getTargetObject", this).call(this);

            return t.setX(100 + (Math.cos(Math.PI / 180 * e) * this.radius | 0)), t.setY(100 + (Math.sin(Math.PI / 180 * e) * this.radius | 0)), this;
          }
        }]);

        return s;
      }(e.animation.Transition);

      t.CircularTransition = s, s.__class = "splashjs.animation.CircularTransition", s.__interfaces = ["splashjs.animation.iface.ITransition", "splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher", "splashjs.animation.iface.ICircularTransition"];
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$animation$Transiti4) {
        _inherits(s, _e$animation$Transiti4);

        function s() {
          var _this98;

          _classCallCheck(this, s);

          _this98 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this98.transitions = [], _this98.currentTransitionNumber = 0, void 0 === _this98.currentTransition && (_this98.currentTransition = null);
          return _this98;
        }

        _createClass(s, [{
          key: "add",
          value: function add(e) {
            return this.transitions.push(e), this;
          }
        }, {
          key: "play",
          value: function play() {
            var _this99 = this;

            var t = null;

            for (var _s20 = 0; _s20 < this.transitions.length; _s20++) {
              t = this.transitions[_s20], t.addEventListener(e.events.TransitionEvent.DURATION_COMPLETE, function (e) {
                _this99.currentTransitionNumber += 1, _this99.currentTransitionNumber < _this99.transitions.length && (_this99.currentTransition = _this99.transitions[_this99.currentTransitionNumber], _this99.currentTransition.play());
              });
            }

            return this.currentTransition = this.transitions[this.currentTransitionNumber], this.currentTransition.play(), this;
          }
        }, {
          key: "stop",
          value: function stop() {
            return this.currentTransition.stop(), this;
          }
        }, {
          key: "update",
          value: function update(e) {
            return this;
          }
        }]);

        return s;
      }(e.animation.Transition);

      t.SequentialTransition = s, s.__class = "splashjs.animation.SequentialTransition", s.__interfaces = ["splashjs.animation.iface.ITransition", "splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher"];
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$animation$Transiti5) {
        _inherits(s, _e$animation$Transiti5);

        function s() {
          var _this100;

          _classCallCheck(this, s);

          _this100 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this100.transitions = [], _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this100)).call(_assertThisInitialized(_this100), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this100)));
          return _this100;
        }

        _createClass(s, [{
          key: "add",
          value: function add(e) {
            return this.transitions.push(e), this;
          }
        }, {
          key: "play",
          value: function play() {
            for (var _e14 = 0; _e14 < this.transitions.length; _e14++) {
              this.transitions[_e14].play();
            }

            return this;
          }
        }, {
          key: "stop",
          value: function stop() {
            for (var _e15 = 0; _e15 < this.transitions.length; _e15++) {
              this.transitions[_e15].stop();
            }

            return this;
          }
        }, {
          key: "getDuration",
          value: function getDuration() {
            var e = 0,
                t = 0;

            for (var _s21 = 0; _s21 < this.transitions.length; _s21++) {
              t = this.transitions[_s21].getDuration(), t > e && (e = t);
            }

            return e;
          }
        }, {
          key: "update",
          value: function update(e) {
            return this;
          }
        }]);

        return s;
      }(e.animation.Transition);

      t.ParallelTransition = s, s.__class = "splashjs.animation.ParallelTransition", s.__interfaces = ["splashjs.animation.iface.ITransition", "splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IParallelTransition", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher"];
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$animation$Transiti6) {
        _inherits(s, _e$animation$Transiti6);

        function s() {
          var _this101;

          _classCallCheck(this, s);

          _this101 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this101.currentValue && (_this101.currentValue = 0);
          return _this101;
        }

        _createClass(s, [{
          key: "update",
          value: function update(e) {
            return _get(_getPrototypeOf(s.prototype), "getTargetObject", this).call(this).setAlpha(e), this;
          }
        }, {
          key: "play",
          value: function play() {
            return this;
          }
        }]);

        return s;
      }(e.animation.Transition);

      t.FadeTransition = s, s.__class = "splashjs.animation.FadeTransition", s.__interfaces = ["splashjs.animation.iface.ITransition", "splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher"];
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$animation$Transiti7) {
        _inherits(s, _e$animation$Transiti7);

        function s() {
          var _this102;

          _classCallCheck(this, s);

          _this102 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this102.fromX = -1, _this102.toX = -1, _this102.fromY = -1, _this102.toY = -1, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this102)).call(_assertThisInitialized(_this102), e.Global.global_$LI$().getRendererCreator().createRenderer(e.animation.ScaleTransition, _assertThisInitialized(_this102)));
          return _this102;
        }

        _createClass(s, [{
          key: "setFromX",
          value: function setFromX(e) {
            return this.fromX = e, this;
          }
        }, {
          key: "getFromX",
          value: function getFromX() {
            return this.fromX;
          }
        }, {
          key: "setFromY",
          value: function setFromY(e) {
            return this.fromY = e, this;
          }
        }, {
          key: "getFromY",
          value: function getFromY() {
            return this.fromY;
          }
        }, {
          key: "setToX",
          value: function setToX(e) {
            return this.toX = e, this;
          }
        }, {
          key: "getToX",
          value: function getToX() {
            return this.toX;
          }
        }, {
          key: "setToY",
          value: function setToY(e) {
            return this.toY = e, this;
          }
        }, {
          key: "getToY",
          value: function getToY() {
            return this.toY;
          }
        }, {
          key: "setFromXY",
          value: function setFromXY(e, t) {
            return this.fromX = e, this.fromY = t, this;
          }
        }, {
          key: "setToXY",
          value: function setToXY(e, t) {
            return this.toX = e, this.toY = t, this;
          }
        }, {
          key: "update",
          value: function update(e) {
            _get(_getPrototypeOf(s.prototype), "getTargetObject", this).call(this);

            return this;
          }
        }]);

        return s;
      }(e.animation.Transition);

      t.TranslateTransition = s, s.__class = "splashjs.animation.TranslateTransition", s.__interfaces = ["splashjs.animation.iface.ITransition", "splashjs.lang.iface.ISplashObject", "splashjs.animation.iface.IAnimation", "splashjs.events.iface.IEventDispatcher"];
    }(e.animation || (e.animation = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$Interactiv) {
        _inherits(s, _e$display$Interactiv);

        function s(e) {
          var _this103;

          _classCallCheck(this, s);

          if ("string" == typeof e || null === e) {
            _this103 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e));
          } else {
            if (void 0 !== e) throw new Error("invalid overload");
            _this103 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this));
          }

          return _possibleConstructorReturn(_this103);
        }

        return s;
      }(e.display.InteractiveObject);

      t.Layout = s, s.__class = "splashjs.layout.Layout", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.layout.iface.ILayout", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    }(e.layout || (e.layout = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$Interactiv2) {
        _inherits(s, _e$display$Interactiv2);

        function s(e) {
          var _this104;

          _classCallCheck(this, s);

          _this104 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), void 0 === _this104.enabled && (_this104.enabled = !1);
          return _this104;
        }

        _createClass(s, [{
          key: "setEnabled",
          value: function setEnabled(e) {
            this.enabled = e;
          }
        }, {
          key: "getEnabled",
          value: function getEnabled() {
            return this.enabled;
          }
        }, {
          key: "isEnabled",
          value: function isEnabled() {
            return this.getEnabled();
          }
        }]);

        return s;
      }(e.display.InteractiveObject);

      t.Control = s, s.__class = "splashjs.controls.Control", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl"];
    }(e.controls || (e.controls = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$Interactiv3) {
        _inherits(s, _e$display$Interactiv3);

        function s(t) {
          var _this105;

          _classCallCheck(this, s);

          if ("string" == typeof t || null === t) {
            _this105 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "image")), void 0 === _this105.resource && (_this105.resource = null), void 0 === _this105.originalWidth && (_this105.originalWidth = null), void 0 === _this105.originalHeight && (_this105.originalHeight = null), _this105.imagePath = "", _this105.imageType = "", void 0 === _this105.resource && (_this105.resource = null), void 0 === _this105.originalWidth && (_this105.originalWidth = null), void 0 === _this105.originalHeight && (_this105.originalHeight = null), function () {
              _this105.imagePath = t;

              var i = _this105.imagePath.substring(_this105.imagePath.lastIndexOf(".") + 1);

              i.toUpperCase() === "jpg".toUpperCase() || function (e, t) {
                return e.toUpperCase() === t.toUpperCase();
              }(i, "jpeg") ? _this105.imageType = "jpeg" : function (e, t) {
                return e.toUpperCase() === "png".toUpperCase();
              }(i) ? _this105.imageType = "png" : function (e, t) {
                return e.toUpperCase() === "gif".toUpperCase();
              }(i) && (_this105.imageType = "gif"), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this105)).call(_assertThisInitialized(_this105), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this105)));
            }();
          } else if (null != t && (null != t.__interfaces && t.__interfaces.indexOf("splashjs.utils.iface.IResource") >= 0 || null != t.constructor && null != t.constructor.__interfaces && t.constructor.__interfaces.indexOf("splashjs.utils.iface.IResource") >= 0) || null === t) {
            var _t32 = arguments[0];
            _this105 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "image")), void 0 === _this105.resource && (_this105.resource = null), void 0 === _this105.originalWidth && (_this105.originalWidth = null), void 0 === _this105.originalHeight && (_this105.originalHeight = null), _this105.imagePath = "", _this105.imageType = "", void 0 === _this105.resource && (_this105.resource = null), void 0 === _this105.originalWidth && (_this105.originalWidth = null), void 0 === _this105.originalHeight && (_this105.originalHeight = null), function () {
              _this105.resource = _t32, _this105.imagePath = _t32.getResourcePath(), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this105)).call(_assertThisInitialized(_this105), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this105)));
            }();
          } else {
            if (void 0 !== t) throw new Error("invalid overload");
            {
              var _t33 = "";
              _this105 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "image")), void 0 === _this105.resource && (_this105.resource = null), void 0 === _this105.originalWidth && (_this105.originalWidth = null), void 0 === _this105.originalHeight && (_this105.originalHeight = null), _this105.imagePath = "", _this105.imageType = "", void 0 === _this105.resource && (_this105.resource = null), void 0 === _this105.originalWidth && (_this105.originalWidth = null), void 0 === _this105.originalHeight && (_this105.originalHeight = null), function () {
                _this105.imagePath = _t33;

                var i = _this105.imagePath.substring(_this105.imagePath.lastIndexOf(".") + 1);

                i.toUpperCase() === "jpg".toUpperCase() || function (e, t) {
                  return e.toUpperCase() === t.toUpperCase();
                }(i, "jpeg") ? _this105.imageType = "jpeg" : function (e, t) {
                  return e.toUpperCase() === "png".toUpperCase();
                }(i) ? _this105.imageType = "png" : function (e, t) {
                  return e.toUpperCase() === "gif".toUpperCase();
                }(i) && (_this105.imageType = "gif"), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this105)).call(_assertThisInitialized(_this105), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this105)));
              }();
            }
          }

          return _possibleConstructorReturn(_this105);
        }

        _createClass(s, [{
          key: "getImagePath",
          value: function getImagePath() {
            return this.imagePath;
          }
        }, {
          key: "getImageType",
          value: function getImageType() {
            return this.imageType;
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            var s, i;
            return s = t.getType(), i = e.events.Event.ADDED_TO_STAGE, s.toUpperCase() === (null === i ? i : i.toUpperCase()) || function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(t.getType(), e.events.Event.REMOVED_FROM_STAGE) || (function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(t.getType(), e.events.Event.ADDED) ? this.parent = t.getTarget() : function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(t.getType(), e.events.Event.REMOVED) ? this.parent = null : function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(t.getType(), e.events.Event.LOADED) && (this.originalWidth = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalWidth(), this.originalHeight = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalHeight(), 0 === this.width && 0 !== this.originalWidth && (this.width = this.originalWidth, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setWidth()), 0 === this.height && 0 !== this.originalHeight && (this.height = this.originalHeight, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setHeight()))), _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            return _get(_getPrototypeOf(s.prototype), "getWidth", this).call(this);
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            return _get(_getPrototypeOf(s.prototype), "getHeight", this).call(this);
          }
        }, {
          key: "setWidth",
          value: function setWidth(e) {
            this.width = e, _get(_getPrototypeOf(s.prototype), "setScaleX", this).call(this, e / this.originalWidth);
          }
        }, {
          key: "setHeight",
          value: function setHeight(e) {
            this.height = e, _get(_getPrototypeOf(s.prototype), "setScaleY", this).call(this, e / this.originalHeight);
          }
        }]);

        return s;
      }(e.display.InteractiveObject);

      t.Image = s, s.__class = "splashjs.display.Image", s.__interfaces = ["splashjs.display.iface.IImage", "splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$Interactiv4) {
        _inherits(s, _e$display$Interactiv4);

        function s() {
          var _this106;

          _classCallCheck(this, s);

          _this106 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "button")), _this106.upState = null, _this106.downState = null, _this106.overState = null, _this106.disabledState = null, _this106.enabled = !0, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this106)).call(_assertThisInitialized(_this106), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this106)));
          return _this106;
        }

        _createClass(s, [{
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            var s, i;
            return s = t.getType(), i = e.events.Event.ADDED, s.toUpperCase() === (null === i ? i : i.toUpperCase()) ? this.parent = t.getTarget() : function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(t.getType(), e.events.Event.REMOVED) ? this.parent = null : function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(t.getType(), e.events.MouseEvent.MOUSE_OVER) ? !0 === this.enabled && null != this.overState && (null != this.upState && this.upState.setVisible(!1), null != this.downState && this.downState.setVisible(!1), this.overState.setVisible(!0)) : function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(t.getType(), e.events.MouseEvent.MOUSE_DOWN) ? !0 === this.enabled && null != this.downState && (null != this.upState && this.upState.setVisible(!1), null != this.overState && this.overState.setVisible(!1), this.downState.setVisible(!0)) : function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(t.getType(), e.events.MouseEvent.MOUSE_UP) ? !0 === this.enabled && null != this.overState && (null != this.upState && this.upState.setVisible(!1), null != this.downState && this.downState.setVisible(!1), this.overState.setVisible(!0)) : function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(t.getType(), e.events.MouseEvent.MOUSE_OUT) && !0 === this.enabled && null != this.upState && (null != this.overState && this.overState.setVisible(!1), null != this.downState && this.downState.setVisible(!1), this.upState.setVisible(!0)), _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);
          }
        }, {
          key: "setUpState",
          value: function setUpState(e) {
            this.upState = e, null != _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setUpState();
          }
        }, {
          key: "getUpState",
          value: function getUpState() {
            return this.upState;
          }
        }, {
          key: "setDownState",
          value: function setDownState(e) {
            this.downState = e, null != _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setDownState();
          }
        }, {
          key: "getDownState",
          value: function getDownState() {
            return this.downState;
          }
        }, {
          key: "setOverState",
          value: function setOverState(e) {
            this.overState = e, null != _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setOverState();
          }
        }, {
          key: "getOverState",
          value: function getOverState() {
            return this.overState;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(e) {
            this.disabledState = e, null != _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setDisabledState();
          }
        }, {
          key: "getDisabledState",
          value: function getDisabledState() {
            return this.disabledState;
          }
        }, {
          key: "setEnabled",
          value: function setEnabled(e) {
            this.enabled = e, null != _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setEnabled();
          }
        }, {
          key: "getEnabled",
          value: function getEnabled() {
            return this.enabled;
          }
        }, {
          key: "isEnabled",
          value: function isEnabled() {
            return this.enabled;
          }
        }, {
          key: "render",
          value: function render() {
            _get(_getPrototypeOf(s.prototype), "render", this).call(this);
          }
        }]);

        return s;
      }(e.display.InteractiveObject);

      t.SimpleButton = s, s.__class = "splashjs.display.SimpleButton", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.display.iface.ISimpleButton", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$Interactiv5) {
        _inherits(s, _e$display$Interactiv5);

        function s(e) {
          var _this107;

          _classCallCheck(this, s);

          if ("string" == typeof e || null === e) {
            _this107 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), void 0 === _this107.parent && (_this107.parent = null), _this107.children = [], void 0 === _this107.parent && (_this107.parent = null);
          } else {
            if (void 0 !== e) throw new Error("invalid overload");
            _this107 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this107.parent && (_this107.parent = null), _this107.children = [], void 0 === _this107.parent && (_this107.parent = null);
          }

          return _possibleConstructorReturn(_this107);
        }

        _createClass(s, [{
          key: "addChild",
          value: function addChild(t) {
            if (this === t) throw Object.defineProperty(new Error("A DisplayObject cannot be added to itself."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            if (null != t && (null != t.__interfaces && t.__interfaces.indexOf("splashjs.display.iface.IStage") >= 0 || null != t.constructor && null != t.constructor.__interfaces && t.constructor.__interfaces.indexOf("splashjs.display.iface.IStage") >= 0)) throw Object.defineProperty(new Error("Stage cannot be added to DisplayObject."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            null != t.getParent() && t.getParent().getRenderer().removeChild(t.getRenderer()), this.children.push(t), t.getRenderer().setZIndex(this.children.length - 1 + ""), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).appendChild(t.getRenderer());
            var s = new e.events.Event(e.events.Event.ADDED, t, t);

            if (s.setData(this), t.dispatchEvent(s), null != this.getStage()) {
              var _s22 = new e.events.Event(e.events.Event.ADDED_TO_STAGE, t, t);

              _s22.setData(this.getStage()), t.dispatchEvent(_s22);
            }
          }
        }, {
          key: "addChildAt",
          value: function addChildAt(t, s) {
            if (this === t) throw Object.defineProperty(new Error("A DisplayObject cannot be added to itself."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            if (null != t && (null != t.__interfaces && t.__interfaces.indexOf("splashjs.display.iface.IStage") >= 0 || null != t.constructor && null != t.constructor.__interfaces && t.constructor.__interfaces.indexOf("splashjs.display.iface.IStage") >= 0)) throw Object.defineProperty(new Error("Stage cannot be added to DisplayObject."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            if (s < 0 || s > this.children.length) throw Object.defineProperty(new Error("Child index is not within the limit."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            null != t.getParent() && t.getParent().getRenderer().removeChild(t.getRenderer()), this.children.splice(s, 0, t), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).appendChild(t.getRenderer());

            for (var _e16 = 0; _e16 < this.children.length; _e16++) {
              this.children[_e16].getRenderer().setZIndex(_e16 + "");
            }

            var i = new e.events.Event(e.events.Event.ADDED, t, t);

            if (i.setData(this), t.dispatchEvent(i), null != this.getStage()) {
              var _s23 = new e.events.Event(e.events.Event.ADDED_TO_STAGE, t, t);

              _s23.setData(this.getStage()), t.dispatchEvent(_s23);
            }
          }
        }, {
          key: "removeChild",
          value: function removeChild(t) {
            if (!1 === this.contains(t)) throw Object.defineProperty(new Error("Child does not exists."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            (function (e) {
              var s = e.indexOf(t);
              s >= 0 && e.splice(s, 1);
            })(this.children), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).removeChild(t.getRenderer());

            for (var _e17 = 0; _e17 < this.children.length; _e17++) {
              this.children[_e17].getRenderer().setZIndex(_e17 + "");
            }

            var s = new e.events.Event(e.events.Event.REMOVED, t, t);

            if (t.dispatchEvent(s), null != this.getStage()) {
              var _s24 = new e.events.Event(e.events.Event.REMOVED_FROM_STAGE, t, t);

              t.dispatchEvent(_s24);
            }
          }
        }, {
          key: "removeChildAt",
          value: function removeChildAt(t) {
            if (t < 0) throw Object.defineProperty(new Error("Child index is not within the limit."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            var s = this.getChildAt(t);
            this.children.splice(t, 1)[0], _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).removeChild(s.getRenderer());

            for (var _e18 = 0; _e18 < this.children.length; _e18++) {
              this.children[_e18].getRenderer().setZIndex(_e18 + "");
            }

            var i = new e.events.Event(e.events.Event.REMOVED, s, s);

            if (s.dispatchEvent(i), null != this.getStage()) {
              var _t34 = new e.events.Event(e.events.Event.REMOVED_FROM_STAGE, s, s);

              s.dispatchEvent(_t34);
            }
          }
        }, {
          key: "getChildByName",
          value: function getChildByName(e) {
            var t = null;

            for (var r = 0; r < this.children.length; r++) {
              var n = this.children[r];

              if (s = n.getName(), i = e, s && s.equals ? s.equals(i) : s === i) {
                t = n;
                break;
              }
            }

            var s, i;
            return t;
          }
        }, {
          key: "getChildAt",
          value: function getChildAt(e) {
            var t = null;
            return t = this.children[e], t;
          }
        }, {
          key: "getChildIndex",
          value: function getChildIndex(e) {
            var t = -1;
            return t = this.children.indexOf(e), t;
          }
        }, {
          key: "setChildIndex",
          value: function setChildIndex(e, t) {
            if (this === e) throw Object.defineProperty(new Error("A DisplayObject cannot be added to itself."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            if (null != e && (null != e.__interfaces && e.__interfaces.indexOf("splashjs.display.iface.IStage") >= 0 || null != e.constructor && null != e.constructor.__interfaces && e.constructor.__interfaces.indexOf("splashjs.display.iface.IStage") >= 0)) throw Object.defineProperty(new Error("Stage cannot be added to DisplayObject."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            if (t < 0) throw Object.defineProperty(new Error("Child index is not within the limit."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            if (!1 === this.contains(e)) throw Object.defineProperty(new Error("Child does not exists."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            var s = this.getChildIndex(e);
            s < t ? (function (t) {
              var s = t.indexOf(e);
              s >= 0 && t.splice(s, 1);
            }(this.children), this.children.splice(t, 0, e)) : s > t && (function (t) {
              var s = t.indexOf(e);
              s >= 0 && t.splice(s, 1);
            }(this.children), this.children.splice(t - 1, 0, e));

            for (var _e19 = 0; _e19 < this.children.length; _e19++) {
              this.children[_e19].getRenderer().setZIndex(_e19 + "");
            }
          }
        }, {
          key: "swapChildren",
          value: function swapChildren(e, t) {
            if (this === e || this === t) throw Object.defineProperty(new Error("A DisplayObject cannot be swapped to its parent."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            if (!1 === this.contains(e) || !1 === this.contains(t)) throw Object.defineProperty(new Error("Child does not exists."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            var s = this.getChildIndex(e),
                i = this.getChildIndex(t),
                r = e;
            this.children[s] = t, this.children[i] = r;

            for (var _e20 = 0; _e20 < this.children.length; _e20++) {
              this.children[_e20].getRenderer().setZIndex(_e20 + "");
            }
          }
        }, {
          key: "swapChildrenAt",
          value: function swapChildrenAt(e, t) {
            if (e >= this.children.length || t >= this.children.length || e < 0 || t < 0) throw Object.defineProperty(new Error("Child index is not within the limit."), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.Object", "java.lang.RuntimeException", "java.lang.IllegalArgumentException", "java.lang.Exception"]
            });
            if (e === t) return;
            var s = this.getChildAt(e),
                i = this.getChildAt(t),
                r = s;
            this.children[e] = i, this.children[t] = r;

            for (var _e21 = 0; _e21 < this.children.length; _e21++) {
              this.children[_e21].getRenderer().setZIndex(_e21 + "");
            }
          }
        }, {
          key: "contains",
          value: function contains(e) {
            var t = !1;
            return t = this.children.indexOf(e) >= 0, t;
          }
        }, {
          key: "getNumChildren",
          value: function getNumChildren() {
            return this.children.length;
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            if (s = t.getType(), i = e.events.Event.ADDED_TO_STAGE, s.toUpperCase() === (null === i ? i : i.toUpperCase())) {
              this.stage = t.getData();

              for (var _s25 = 0; _s25 < this.children.length; _s25++) {
                var _i6 = this.children[_s25],
                    r = new e.events.Event(e.events.Event.ADDED_TO_STAGE, _i6, _i6);
                r.setData(t.getData()), _i6.dispatchEvent(r);
              }
            } else if (function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(t.getType(), e.events.Event.REMOVED_FROM_STAGE)) {
              this.stage = null;

              for (var _t35 = 0; _t35 < this.children.length; _t35++) {
                var _s26 = this.children[_t35];
                {
                  var _t36 = new e.events.Event(e.events.Event.REMOVED_FROM_STAGE, _s26, _s26);

                  _s26.dispatchEvent(_t36);
                }
              }
            }

            var s, i;
            return _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);
          }
        }, {
          key: "getAllChildren",
          value: function getAllChildren() {
            return this.children;
          }
        }, {
          key: "render",
          value: function render() {
            _get(_getPrototypeOf(s.prototype), "render", this).call(this);

            for (var _e22 = 0; _e22 < this.children.length; _e22++) {
              this.children[_e22].render();
            }
          }
        }]);

        return s;
      }(e.display.InteractiveObject);

      t.DisplayObjectContainer = s, s.__class = "splashjs.display.DisplayObjectContainer", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$Interactiv6) {
        _inherits(s, _e$display$Interactiv6);

        function s(t) {
          var _this108;

          _classCallCheck(this, s);

          _this108 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, t)), _this108.strokeColor = e.utils.Color.BLACK_$LI$(), _this108.fillColor = e.utils.Color.BLACK_$LI$(), _this108.strokeWidth = 1;
          return _this108;
        }

        _createClass(s, [{
          key: "setStrokeWidth",
          value: function setStrokeWidth(e) {
            this.strokeWidth = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).update();
          }
        }, {
          key: "getStrokeWidth",
          value: function getStrokeWidth() {
            return this.strokeWidth;
          }
        }, {
          key: "setStrokeColor",
          value: function setStrokeColor(e) {
            this.strokeColor = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).update();
          }
        }, {
          key: "getStrokeColor",
          value: function getStrokeColor() {
            return this.strokeColor;
          }
        }, {
          key: "setFillColor",
          value: function setFillColor(e) {
            this.fillColor = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).update();
          }
        }, {
          key: "getFillColor",
          value: function getFillColor() {
            return this.fillColor;
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalWidth();
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalHeight();
          }
        }, {
          key: "setWidth",
          value: function setWidth(e) {}
        }, {
          key: "setHeight",
          value: function setHeight(e) {}
        }], [{
          key: "createCircle$",
          value: function createCircle$() {
            return new e.display.Circle();
          }
        }, {
          key: "createCircle$int",
          value: function createCircle$int(t) {
            return new e.display.Circle(t);
          }
        }, {
          key: "createCircle",
          value: function createCircle(t) {
            if ("number" == typeof t || null === t) return e.display.Shape.createCircle$int(t);
            if (void 0 === t) return e.display.Shape.createCircle$();
            throw new Error("invalid overload");
          }
        }, {
          key: "createRectangle$",
          value: function createRectangle$() {
            return new e.display.Rectangle();
          }
        }, {
          key: "createRectangle$int$int",
          value: function createRectangle$int$int(t, s) {
            return new e.display.Rectangle(t, s);
          }
        }, {
          key: "createRectangle$int$int$int$int",
          value: function createRectangle$int$int$int$int(t, s, i, r) {
            return new e.display.Rectangle(t, s, i, r);
          }
        }, {
          key: "createRectangle",
          value: function createRectangle(t, s, i, r) {
            if ("number" != typeof t && null !== t || "number" != typeof s && null !== s || "number" != typeof i && null !== i || "number" != typeof r && null !== r) {
              if ("number" != typeof t && null !== t || "number" != typeof s && null !== s || void 0 !== i || void 0 !== r) {
                if (void 0 === t && void 0 === s && void 0 === i && void 0 === r) return e.display.Shape.createRectangle$();
                throw new Error("invalid overload");
              }

              return e.display.Shape.createRectangle$int$int(t, s);
            }

            return e.display.Shape.createRectangle$int$int$int$int(t, s, i, r);
          }
        }, {
          key: "createLine$",
          value: function createLine$() {
            return new e.display.Line();
          }
        }, {
          key: "createLine$int",
          value: function createLine$int(t) {
            return new e.display.Line(t);
          }
        }, {
          key: "createLine",
          value: function createLine(t) {
            if ("number" == typeof t || null === t) return e.display.Shape.createLine$int(t);
            if (void 0 === t) return e.display.Shape.createLine$();
            throw new Error("invalid overload");
          }
        }, {
          key: "createEllipse$",
          value: function createEllipse$() {
            return new e.display.Ellipse();
          }
        }, {
          key: "createEllipse$int$int",
          value: function createEllipse$int$int(t, s) {
            return new e.display.Ellipse(t, s);
          }
        }, {
          key: "createEllipse",
          value: function createEllipse(t, s) {
            if ("number" != typeof t && null !== t || "number" != typeof s && null !== s) {
              if (void 0 === t && void 0 === s) return e.display.Shape.createEllipse$();
              throw new Error("invalid overload");
            }

            return e.display.Shape.createEllipse$int$int(t, s);
          }
        }]);

        return s;
      }(e.display.InteractiveObject);

      s.CIRCLE = "circle", s.RECTANGLE = "rectangle", s.LINE = "line", s.ELLIPSE = "ellipse", t.Shape = s, s.__class = "splashjs.display.Shape", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$Interactiv7) {
        _inherits(s, _e$display$Interactiv7);

        function s(t) {
          var _this109;

          _classCallCheck(this, s);

          _this109 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, t)), _this109.text = null, _this109.fontSize = 12, _this109.fontStyle = e.text.FontStyle.NORMAL, _this109.fontWeight = e.text.FontWeight.NORMAL, _this109.color = e.utils.Color.BLACK_$LI$(), _this109.selectable = !0, _this109.textFormat = null, void 0 === _this109.font && (_this109.font = null);
          return _this109;
        }

        _createClass(s, [{
          key: "setText",
          value: function setText(e) {
            this.text = e, null != e && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setText();
          }
        }, {
          key: "getText",
          value: function getText() {
            return this.text;
          }
        }, {
          key: "setFontSize",
          value: function setFontSize(e) {
            this.fontSize = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setFontSize();
          }
        }, {
          key: "getFontSize",
          value: function getFontSize() {
            return this.fontSize;
          }
        }, {
          key: "setFontStyle",
          value: function setFontStyle(e) {
            this.fontStyle = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setFontStyle();
          }
        }, {
          key: "getFontStyle",
          value: function getFontStyle() {
            return this.fontStyle;
          }
        }, {
          key: "setFontWeight",
          value: function setFontWeight(e) {
            this.fontWeight = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setFontWeight();
          }
        }, {
          key: "getFontWeight",
          value: function getFontWeight() {
            return this.fontWeight;
          }
        }, {
          key: "setColor",
          value: function setColor(e) {
            this.color = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setColor();
          }
        }, {
          key: "getColor",
          value: function getColor() {
            return this.color;
          }
        }, {
          key: "setFont",
          value: function setFont(e) {
            this.font = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setFont();
          }
        }, {
          key: "getFont",
          value: function getFont() {
            return this.font;
          }
        }, {
          key: "setTextFormat",
          value: function setTextFormat(e) {
            this.textFormat = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setTextFormat();
          }
        }, {
          key: "getTextFormat",
          value: function getTextFormat() {
            return this.textFormat;
          }
        }, {
          key: "setSelectable",
          value: function setSelectable(e) {
            this.selectable = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setSelectable();
          }
        }, {
          key: "isSelectable",
          value: function isSelectable() {
            return this.selectable;
          }
        }, {
          key: "render",
          value: function render() {
            _get(_getPrototypeOf(s.prototype), "render", this).call(this), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setText(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setSelectable(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setColor(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setFont(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setFontSize(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setFontStyle(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setFontWeight();
          }
        }]);

        return s;
      }(e.display.InteractiveObject);

      t.Text = s, s.__class = "splashjs.text.Text", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.text.iface.IText"];
    }(e.text || (e.text = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$animation$T) {
          _inherits(s, _e$render$animation$T);

          function s(e) {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e));
          }

          return s;
        }(e.render.animation.TransitionRenderer);

        t.FadeTransitionRenderer = s, s.__class = "splashjs.render.animation.FadeTransitionRenderer", s.__interfaces = ["splashjs.render.animation.iface.ITransitionRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.animation || (t.animation = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$animation$T2) {
          _inherits(s, _e$render$animation$T2);

          function s(e) {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e));
          }

          return s;
        }(e.render.animation.TransitionRenderer);

        t.ParallelTransitionRenderer = s, s.__class = "splashjs.render.animation.ParallelTransitionRenderer", s.__interfaces = ["splashjs.render.animation.iface.ITransitionRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.animation || (t.animation = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$animation$T3) {
          _inherits(s, _e$render$animation$T3);

          function s(e) {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e));
          }

          return s;
        }(e.render.animation.TransitionRenderer);

        t.ScaleTransitionRenderer = s, s.__class = "splashjs.render.animation.ScaleTransitionRenderer", s.__interfaces = ["splashjs.render.animation.iface.ITransitionRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.animation || (t.animation = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$animation$T4) {
          _inherits(s, _e$render$animation$T4);

          function s(e) {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e));
          }

          return s;
        }(e.render.animation.TransitionRenderer);

        t.CircularTransitionRenderer = s, s.__class = "splashjs.render.animation.CircularTransitionRenderer", s.__interfaces = ["splashjs.render.animation.iface.ITransitionRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.animation || (t.animation = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$animation$T5) {
          _inherits(s, _e$render$animation$T5);

          function s(e) {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e));
          }

          return s;
        }(e.render.animation.TransitionRenderer);

        t.RotationTransitionRenderer = s, s.__class = "splashjs.render.animation.RotationTransitionRenderer", s.__interfaces = ["splashjs.render.animation.iface.ITransitionRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.animation || (t.animation = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$animation$T6) {
          _inherits(s, _e$render$animation$T6);

          function s(e) {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e));
          }

          return s;
        }(e.render.animation.TransitionRenderer);

        t.TranslateTransitionRenderer = s, s.__class = "splashjs.render.animation.TranslateTransitionRenderer", s.__interfaces = ["splashjs.render.animation.iface.ITransitionRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.animation || (t.animation = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$display$Int) {
          _inherits(s, _e$render$display$Int);

          function s() {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this));
          }

          return s;
        }(e.render.display.InteractiveObjectRenderer);

        t.ControlRenderer = s, s.__class = "splashjs.render.controls.ControlRenderer", s.__interfaces = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.controls || (t.controls = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$display$Int2) {
          _inherits(s, _e$render$display$Int2);

          function s(t) {
            var _this110;

            _classCallCheck(this, s);

            _this110 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this110.container = new e.display.Sprite(), void 0 === _this110.upState && (_this110.upState = null), void 0 === _this110.downState && (_this110.downState = null), void 0 === _this110.overState && (_this110.overState = null), void 0 === _this110.disabledState && (_this110.disabledState = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this110)).call(_assertThisInitialized(_this110), t), _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this110)).call(_assertThisInitialized(_this110), new e.render.RenderElement(document.createElement("span")));
            return _this110;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {
              this.appendChild(this.container.getRenderer()), this.setDownState(), this.setOverState(), this.setUpState(), this.setDisabledState();
            }
          }, {
            key: "setUpState",
            value: function setUpState() {
              var e = !0;
              null == this.upState ? this.upState = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getUpState() : null != this.upState && (e = this.upState.getVisible(), this.upState.setRenderer(null), this.container.removeChild(this.upState)), null != this.upState && (this.container.addChild(this.upState), this.upState.setVisible(e));
            }
          }, {
            key: "setDownState",
            value: function setDownState() {
              var e = !1;
              null == this.downState ? this.downState = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getDownState() : null != this.downState && (e = this.downState.getVisible(), this.downState.setRenderer(null), this.container.removeChild(this.downState)), null != this.downState && (this.container.addChild(this.downState), this.downState.setVisible(e));
            }
          }, {
            key: "setOverState",
            value: function setOverState() {
              var e = !1;
              null == this.overState ? this.overState = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getOverState() : null != this.overState && (e = this.overState.getVisible(), this.overState.setRenderer(null), this.container.removeChild(this.overState)), null != this.overState && (this.container.addChild(this.overState), this.overState.setVisible(e));
            }
          }, {
            key: "setDisabledState",
            value: function setDisabledState() {
              var e = !1;
              null == this.disabledState ? this.disabledState = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getDisabledState() : null != this.disabledState && (e = this.disabledState.getVisible(), this.disabledState.setRenderer(null), this.container.removeChild(this.disabledState)), null != this.disabledState && (this.container.addChild(this.disabledState), this.disabledState.setVisible(e));
            }
          }, {
            key: "setEnabled",
            value: function setEnabled() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).isEnabled();

              null == this.disabledState ? !0 === e ? _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).setAlpha(1) : !1 === e && (null != this.downState && this.downState.setVisible(!1), null != this.upState && this.upState.setVisible(!0), null != this.overState && this.overState.setVisible(!1), _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).setAlpha(.5)) : !1 === e ? (this.disabledState.setVisible(!0), null != this.downState && this.downState.setVisible(!1), null != this.upState && this.upState.setVisible(!1), null != this.overState && this.overState.setVisible(!1)) : (this.disabledState.setVisible(!1), null != this.upState && this.upState.setVisible(!0));
            }
          }]);

          return s;
        }(e.render.display.InteractiveObjectRenderer);

        t.SimpleButtonRenderer = s, s.__class = "splashjs.render.display.SimpleButtonRenderer", s.__interfaces = ["splashjs.render.display.iface.ISimpleButtonRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.display || (t.display = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$display$Int3) {
          _inherits(s, _e$render$display$Int3);

          function s() {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this));
          }

          return s;
        }(e.render.display.InteractiveObjectRenderer);

        t.DisplayObjectContainerRenderer = s, s.__class = "splashjs.render.display.DisplayObjectContainerRenderer", s.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.display.iface.IDisplayObjectContainerRenderer"];
      }(t.display || (t.display = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$display$Int4) {
          _inherits(s, _e$render$display$Int4);

          function s(t) {
            var _this111;

            _classCallCheck(this, s);

            _this111 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this111.htmlImageElement && (_this111.htmlImageElement = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this111)).call(_assertThisInitialized(_this111), t), _this111.htmlImageElement = document.createElement("img"), _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this111)).call(_assertThisInitialized(_this111), new e.render.RenderElement(_this111.htmlImageElement)), _this111.create();
            return _this111;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {
              this.setImagePath();
            }
          }, {
            key: "setImagePath",
            value: function setImagePath() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getImagePath();

              null != e && 0 !== e.length && (this.htmlImageElement.src = e);
            }
          }, {
            key: "getOriginalWidth",
            value: function getOriginalWidth() {
              return 0 | this.htmlImageElement.naturalWidth;
            }
          }, {
            key: "getOriginalHeight",
            value: function getOriginalHeight() {
              return 0 | this.htmlImageElement.naturalHeight;
            }
          }]);

          return s;
        }(e.render.display.InteractiveObjectRenderer);

        t.ImageRenderer = s, s.__class = "splashjs.render.display.ImageRenderer", s.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.display || (t.display = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$display$Int5) {
          _inherits(s, _e$render$display$Int5);

          function s() {
            var _this112;

            _classCallCheck(this, s);

            _this112 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this112.childSVGElement && (_this112.childSVGElement = null);
            return _this112;
          }

          _createClass(s, [{
            key: "getStrokeColorNameAsString",
            value: function getStrokeColorNameAsString() {
              var t = e.utils.ColorName.BLACK,
                  s = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getStrokeColor();

              var i, r;
              return s.getColorType() === e.utils.ColorType.NAME ? t = s.getColorName() : (i = s.getColorType(), r = e.utils.ColorType.HEX, i.toUpperCase() === (null === r ? r : r.toUpperCase()) && (t = s.getHEX())), t;
            }
          }, {
            key: "getFillColorNameAsString",
            value: function getFillColorNameAsString() {
              var t = e.utils.ColorName.BLACK,
                  s = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getFillColor();

              var i, r;
              return i = s.getColorType(), r = e.utils.ColorType.NAME, i.toUpperCase() === (null === r ? r : r.toUpperCase()) ? t = s.getColorName() : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(s.getColorType(), e.utils.ColorType.HEX) && (t = s.getHEX()), t;
            }
          }, {
            key: "getStrokeWidthAsString",
            value: function getStrokeWidthAsString() {
              var e = "1";
              return e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getStrokeWidth() + "", e;
            }
          }, {
            key: "getSVGElement",
            value: function getSVGElement() {
              return _get(_getPrototypeOf(s.prototype), "getDOMElement", this).call(this);
            }
          }, {
            key: "getOriginalWidth",
            value: function getOriginalWidth() {
              return 0 | _get(_getPrototypeOf(s.prototype), "getDOMElement", this).call(this).clientWidth;
            }
          }, {
            key: "getOriginalHeight",
            value: function getOriginalHeight() {
              return 0 | _get(_getPrototypeOf(s.prototype), "getDOMElement", this).call(this).clientHeight;
            }
          }]);

          return s;
        }(e.render.display.InteractiveObjectRenderer);

        t.ShapeRenderer = s, s.__class = "splashjs.render.display.ShapeRenderer", s.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.display.iface.IShapeRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.display || (t.display = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$display$Int6) {
          _inherits(s, _e$render$display$Int6);

          function s() {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this));
          }

          _createClass(s, [{
            key: "setColor",
            value: function setColor() {
              this.getDOMElement().style.color = this.getCSSColorText();
            }
          }, {
            key: "setText",
            value: function setText() {}
          }, {
            key: "setFont",
            value: function setFont() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getFont();

              if (null != e) {
                var _t37 = e.getFontID();

                this.getDOMElement().style.fontFamily = _t37;
              }
            }
          }, {
            key: "setFontSize",
            value: function setFontSize() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getFontSize();

              e >= 0 && (this.getDOMElement().style.fontSize = e + this.UNIT);
            }
          }, {
            key: "setFontWeight",
            value: function setFontWeight() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getFontWeight();

              null != e && (this.getDOMElement().style.fontWeight = e);
            }
          }, {
            key: "setFontStyle",
            value: function setFontStyle() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getFontStyle();

              null != e && (this.getDOMElement().style.fontStyle = e);
            }
          }, {
            key: "setSelectable",
            value: function setSelectable() {}
          }, {
            key: "setTextFormat",
            value: function setTextFormat() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getTextFormat(),
                  t = e.getFont(),
                  s = e.getFontWeight(),
                  i = e.getFontStyle(),
                  r = e.getFontSize();

              if (null != t) {
                var _e23 = t.getFontID();

                this.getDOMElement().style.fontFamily = _e23;
              }

              null != s && (this.getDOMElement().style.fontWeight = s), null != i && (this.getDOMElement().style.fontStyle = i), r >= 0 && (this.getDOMElement().style.fontSize = r + this.UNIT);
            }
          }, {
            key: "getClientWidth",
            value: function getClientWidth() {
              return 0 | this.getDOMElement().clientWidth;
            }
          }, {
            key: "getClientHeight",
            value: function getClientHeight() {
              return 0 | this.getDOMElement().clientHeight;
            }
          }, {
            key: "getCSSColorText",
            value: function getCSSColorText() {
              var t = e.utils.ColorName.BLACK,
                  s = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getColor();

              var i, r;
              return i = s.getColorType(), r = e.utils.ColorType.NAME, i.toUpperCase() === (null === r ? r : r.toUpperCase()) ? t = s.getColorName() : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(s.getColorType(), e.utils.ColorType.HEX) && (t = s.getHEX()), t;
            }
          }]);

          return s;
        }(e.render.display.InteractiveObjectRenderer);

        t.TextRenderer = s, s.__class = "splashjs.render.text.TextRenderer", s.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.text.iface.ITextRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.text || (t.text = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$layout$Layout) {
        _inherits(s, _e$layout$Layout);

        function s(t, i) {
          var _this113;

          _classCallCheck(this, s);

          _this113 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "gridLayout")), void 0 === _this113.row && (_this113.row = 0), void 0 === _this113.col && (_this113.col = 0), void 0 === _this113.children && (_this113.children = null), _this113.row = t, _this113.col = i, _this113.children = [], _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this113)).call(_assertThisInitialized(_this113), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this113)));
          return _this113;
        }

        _createClass(s, [{
          key: "render",
          value: function render() {
            _get(_getPrototypeOf(s.prototype), "render", this).call(this);
          }
        }, {
          key: "getRow",
          value: function getRow() {
            return this.row;
          }
        }, {
          key: "getCol",
          value: function getCol() {
            return this.col;
          }
        }, {
          key: "add",
          value: function add(e, t, s) {
            this.children.push(e), e.render();
          }
        }]);

        return s;
      }(e.layout.Layout);

      t.GridLayout = s, s.__class = "splashjs.layout.GridLayout", s.__interfaces = ["splashjs.layout.iface.IGridLayout", "splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.layout.iface.ILayout", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    }(e.layout || (e.layout = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$controls$Control) {
        _inherits(s, _e$controls$Control);

        function s(t) {
          var _this114;

          _classCallCheck(this, s);

          if (null != t || null === t) {
            _this114 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "tree")), void 0 === _this114.treeData && (_this114.treeData = null), void 0 === _this114.treeData && (_this114.treeData = null), function () {
              _this114.treeData = t, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this114)).call(_assertThisInitialized(_this114), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this114)));
            }();
          } else {
            if (void 0 !== t) throw new Error("invalid overload");
            {
              var _t38 = null;
              _this114 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "tree")), void 0 === _this114.treeData && (_this114.treeData = null), void 0 === _this114.treeData && (_this114.treeData = null), function () {
                _this114.treeData = _t38, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this114)).call(_assertThisInitialized(_this114), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this114)));
              }();
            }
          }

          return _possibleConstructorReturn(_this114);
        }

        _createClass(s, [{
          key: "getTreeData",
          value: function getTreeData() {
            return this.treeData;
          }
        }]);

        return s;
      }(e.controls.Control);

      t.Tree = s, s.__class = "splashjs.controls.Tree", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.controls.iface.ITree", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl"];
    }(e.controls || (e.controls = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$controls$Control2) {
        _inherits(s, _e$controls$Control2);

        function s(e) {
          var _this115;

          _classCallCheck(this, s);

          _this115 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), void 0 === _this115.text && (_this115.text = null);
          return _this115;
        }

        _createClass(s, [{
          key: "setText",
          value: function setText(e) {
            this.text = e, null != _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setText();
          }
        }, {
          key: "getText",
          value: function getText() {
            return this.text;
          }
        }]);

        return s;
      }(e.controls.Control);

      t.BaseText = s, s.__class = "splashjs.controls.BaseText", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseText"];
    }(e.controls || (e.controls = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$controls$Control3) {
        _inherits(s, _e$controls$Control3);

        function s(e) {
          _classCallCheck(this, s);

          return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e));
        }

        return s;
      }(e.controls.Control);

      t.BaseList = s, s.__class = "splashjs.controls.BaseList", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseList"];
    }(e.controls || (e.controls = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$controls$Control4) {
        _inherits(s, _e$controls$Control4);

        function s() {
          var _this116;

          _classCallCheck(this, s);

          _this116 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "radioButton")), _this116.selected = !1, void 0 === _this116.label && (_this116.label = null), void 0 === _this116.group && (_this116.group = null), void 0 === _this116.value && (_this116.value = null), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this116)).call(_assertThisInitialized(_this116), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this116)));
          return _this116;
        }

        _createClass(s, [{
          key: "setValue",
          value: function setValue(e) {
            this.value = e;
          }
        }, {
          key: "getValue",
          value: function getValue() {
            return this.value;
          }
        }, {
          key: "setSelected",
          value: function setSelected(e) {
            this.selected !== e && (this.selected = e, null != _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setSelected());
          }
        }, {
          key: "getSelected",
          value: function getSelected() {
            return this.selected;
          }
        }, {
          key: "isSelected",
          value: function isSelected() {
            return this.getSelected();
          }
        }, {
          key: "setGroup",
          value: function setGroup(e) {
            this.group = e, null != _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setGroup();
          }
        }, {
          key: "getGroup",
          value: function getGroup() {
            return this.group;
          }
        }, {
          key: "setLabel",
          value: function setLabel(e) {
            this.label = e;
          }
        }, {
          key: "getLabel",
          value: function getLabel() {
            return this.label;
          }
        }, {
          key: "render",
          value: function render() {
            _get(_getPrototypeOf(s.prototype), "render", this).call(this), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setGroup(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setSelected();
          }
        }]);

        return s;
      }(e.controls.Control);

      t.RadioButton = s, s.__class = "splashjs.controls.RadioButton", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.controls.iface.IRadioButton", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl"];
    }(e.controls || (e.controls = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$DisplayObj5) {
        _inherits(s, _e$display$DisplayObj5);

        function s(t, i, r) {
          var _this117;

          _classCallCheck(this, s);

          if ("string" != typeof t && null !== t || "number" != typeof i && null !== i || "number" != typeof r && null !== r) {
            if (void 0 !== t || void 0 !== i || void 0 !== r) throw new Error("invalid overload");
            _this117 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "stage")), void 0 === _this117.stageOwner && (_this117.stageOwner = null), void 0 === _this117.scaleMode && (_this117.scaleMode = null), void 0 === _this117.align && (_this117.align = null), void 0 === _this117.scene && (_this117.scene = null), void 0 === _this117.color && (_this117.color = null), void 0 === _this117.stageOwner && (_this117.stageOwner = null), void 0 === _this117.scaleMode && (_this117.scaleMode = null), void 0 === _this117.align && (_this117.align = null), void 0 === _this117.scene && (_this117.scene = null), void 0 === _this117.color && (_this117.color = null);
          } else {
            _this117 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "stage")), void 0 === _this117.stageOwner && (_this117.stageOwner = null), void 0 === _this117.scaleMode && (_this117.scaleMode = null), void 0 === _this117.align && (_this117.align = null), void 0 === _this117.scene && (_this117.scene = null), void 0 === _this117.color && (_this117.color = null), void 0 === _this117.stageOwner && (_this117.stageOwner = null), void 0 === _this117.scaleMode && (_this117.scaleMode = null), void 0 === _this117.align && (_this117.align = null), void 0 === _this117.scene && (_this117.scene = null), void 0 === _this117.color && (_this117.color = null), function () {
              _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this117)).call(_assertThisInitialized(_this117), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this117))), _this117.stageOwner = new e.application.StageOwner(t, _assertThisInitialized(_this117), i, r), _get(_getPrototypeOf(s.prototype), "setWidth", _assertThisInitialized(_this117)).call(_assertThisInitialized(_this117), i), _get(_getPrototypeOf(s.prototype), "setHeight", _assertThisInitialized(_this117)).call(_assertThisInitialized(_this117), r), _this117.setColor(e.utils.Color.WHITE_$LI$()), _this117.scaleMode = e.display.StageScaleMode.SHOW_ALL, _get(_getPrototypeOf(s.prototype), "getRenderer", _assertThisInitialized(_this117)).call(_assertThisInitialized(_this117)).startEnterFrameExitFrameDispatcherLoop(), _this117.stageOwner.addEventListener(e.events.Event.RESIZE, function (e) {
                _this117.handleResize();
              }), _this117.stageOwner.getRenderer().appendChild(_this117.getRenderer()), _this117.render();
            }();
          }

          return _possibleConstructorReturn(_this117);
        }

        _createClass(s, [{
          key: "setScene",
          value: function setScene(e) {
            null != this.scene && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).removeScene(), this.scene = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setScene();
          }
        }, {
          key: "getScene",
          value: function getScene() {
            return this.scene;
          }
        }, {
          key: "getStageOwner",
          value: function getStageOwner() {
            return this.stageOwner;
          }
        }, {
          key: "setX",
          value: function setX(t) {
            throw new e.lang.UnsupportedOperationError();
          }
        }, {
          key: "setY",
          value: function setY(t) {
            throw new e.lang.UnsupportedOperationError();
          }
        }, {
          key: "setXY",
          value: function setXY(t, s) {
            throw new e.lang.UnsupportedOperationError();
          }
        }, {
          key: "getStage",
          value: function getStage() {
            return null;
          }
        }, {
          key: "setWidth",
          value: function setWidth(e) {
            this.width = e;
          }
        }, {
          key: "setHeight",
          value: function setHeight(e) {
            this.height = e;
          }
        }, {
          key: "setSize",
          value: function setSize(e, t) {}
        }, {
          key: "getWidth",
          value: function getWidth() {
            return this.width;
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            return this.height;
          }
        }, {
          key: "render",
          value: function render() {
            _get(_getPrototypeOf(s.prototype), "render", this).call(this), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setBorder("0px solid red"), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setOverflow("hidden"), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setPosition("relative"), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setDisplay("inline-block"), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setWidth(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setHeight(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setColor(), this.handleResize();
          }
        }, {
          key: "addChild",
          value: function addChild(t) {
            _get(_getPrototypeOf(s.prototype), "addChild", this).call(this, t);

            var s = new e.events.Event(e.events.Event.ADDED_TO_STAGE, t, t);
            s.setData(this), t.dispatchEvent(s);
          }
        }, {
          key: "addChildAt",
          value: function addChildAt(t, s) {
            _get(_getPrototypeOf(s.prototype), "addChildAt", this).call(this, t, s);

            var i = new e.events.Event(e.events.Event.ADDED_TO_STAGE, t, t);
            i.setData(this), t.dispatchEvent(i);
          }
        }, {
          key: "removeChild",
          value: function removeChild(t) {
            _get(_getPrototypeOf(s.prototype), "removeChild", this).call(this, t);

            var s = new e.events.Event(e.events.Event.REMOVED_FROM_STAGE, t, t);
            t.dispatchEvent(s);
          }
        }, {
          key: "removeChildAt",
          value: function removeChildAt(t) {
            var s = this.getChildAt(t);

            _get(_getPrototypeOf(s.prototype), "removeChildAt", this).call(this, t);

            var i = new e.events.Event(e.events.Event.REMOVED_FROM_STAGE, s, s);
            s.dispatchEvent(i);
          }
        }, {
          key: "setScaleMode",
          value: function setScaleMode(e) {
            this.scaleMode = e, this.handleResize();
          }
        }, {
          key: "setAlign",
          value: function setAlign(e) {
            this.align = e;
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            if (s = t.getType(), i = e.events.Event.RESIZE, s.toUpperCase() === (null === i ? i : i.toUpperCase())) this.handleResize();else if (function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(t.getType(), e.events.Event.ENTER_FRAME)) ;else if (function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(t.getType(), e.events.MouseEvent.MOUSE_MOVE)) {
              var _s27 = this.getDraggableChild(this.getAllChildren());

              if (null != _s27) {
                var _i7 = t,
                    r = new e.geom.Point(_i7.getLocalX() / this.getScaleX() | 0, _i7.getLocalY() / this.getScaleY() | 0);
                _s27.setX(r.getX()), _s27.setY(r.getY());
              }
            }
            var s, i;
            return _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);
          }
        }, {
          key: "getDraggableChild",
          value: function getDraggableChild(e) {
            var t = null;

            for (var _s28 = 0; _s28 < e.length && (null == e[_s28] || !(null != e[_s28].__interfaces && e[_s28].__interfaces.indexOf("splashjs.display.iface.IDraggable") >= 0 || null != e[_s28].constructor && null != e[_s28].constructor.__interfaces && e[_s28].constructor.__interfaces.indexOf("splashjs.display.iface.IDraggable") >= 0) || (t = e[_s28], !0 !== t.getDraggable())) && (null == e[_s28] || !(null != e[_s28].__interfaces && e[_s28].__interfaces.indexOf("splashjs.display.iface.IDisplayObjectContainer") >= 0 || null != e[_s28].constructor && null != e[_s28].constructor.__interfaces && e[_s28].constructor.__interfaces.indexOf("splashjs.display.iface.IDisplayObjectContainer") >= 0) || (t = this.getDraggableChild(e[_s28].getAllChildren()), null == t)); _s28++) {
              t = null;
            }

            return t;
          }
        }, {
          key: "handleResize",
          value: function handleResize() {
            var t = this.stageOwner.getWidth(),
                s = this.stageOwner.getHeight(),
                i = this.getWidth(),
                r = this.getHeight();
            if (n = this.scaleMode, a = e.display.StageScaleMode.EXACT_FIT, n.toUpperCase() === (null === a ? a : a.toUpperCase())) this.setScaleX(t / i), this.setScaleY(s / r);else if (function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(this.scaleMode, e.display.StageScaleMode.NO_BORDER)) {
              var _e24 = t / i;

              this.setScaleX(_e24), this.setScaleY(_e24);

              var _n2 = (t - i * _e24) / 2 | 0,
                  _a = (s - r * _e24) / 2 | 0;

              _get(_getPrototypeOf(s.prototype), "setX", this).call(this, _n2), _get(_getPrototypeOf(s.prototype), "setY", this).call(this, _a);
            } else if (function (e, t) {
              return e.toUpperCase() === (null === t ? t : t.toUpperCase());
            }(this.scaleMode, e.display.StageScaleMode.SHOW_ALL)) {
              var _e25 = t / i,
                  _n3 = s / r,
                  _a2 = Math.min(_e25, _n3);

              this.setScaleX(_a2), this.setScaleY(_a2);
              var l = (t - i * _a2) / 2 | 0,
                  o = (s - r * _a2) / 2 | 0;
              _get(_getPrototypeOf(s.prototype), "setX", this).call(this, l), _get(_getPrototypeOf(s.prototype), "setY", this).call(this, o);
            }
            var n, a;
          }
        }, {
          key: "setScaleX",
          value: function setScaleX(e) {
            _get(_getPrototypeOf(s.prototype), "setScaleX", this).call(this, e);
          }
        }, {
          key: "setScaleY",
          value: function setScaleY(e) {
            _get(_getPrototypeOf(s.prototype), "setScaleY", this).call(this, e);
          }
        }, {
          key: "setColor",
          value: function setColor(e) {
            this.color = e, null != _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setColor();
          }
        }, {
          key: "getColor",
          value: function getColor() {
            return this.color;
          }
        }]);

        return s;
      }(e.display.DisplayObjectContainer);

      t.Stage = s, s.__class = "splashjs.display.Stage", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IStage", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$DisplayObj6) {
        _inherits(s, _e$display$DisplayObj6);

        function s(t) {
          var _this118;

          _classCallCheck(this, s);

          if ("string" == typeof t || null === t) {
            _this118 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, t)), _this118.draggable = !1, function () {
              _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this118)).call(_assertThisInitialized(_this118), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this118)));
            }();
          } else {
            if (void 0 !== t) throw new Error("invalid overload");
            _this118 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "sprite")), _this118.draggable = !1, function () {
              _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this118)).call(_assertThisInitialized(_this118), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this118)));
            }();
          }

          return _possibleConstructorReturn(_this118);
        }

        _createClass(s, [{
          key: "render",
          value: function render() {
            _get(_getPrototypeOf(s.prototype), "render", this).call(this), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setBorder("0px solid olive");
          }
        }, {
          key: "startDrag",
          value: function startDrag() {
            this.draggable = !0;
          }
        }, {
          key: "stopDrag",
          value: function stopDrag() {
            this.draggable = !1;
          }
        }, {
          key: "getDraggable",
          value: function getDraggable() {
            return this.draggable;
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            var e = 0,
                t = 0;

            if (this.children.length > 0) {
              e = this.children[0].getX(), t = this.children[0].getX() + this.children[0].getWidth();

              for (var _s29 = 0; _s29 < this.children.length; _s29++) {
                var i = this.children[_s29];
                e > i.getX() && (e = i.getX()), t < i.getX() + i.getWidth() && (t = i.getX() + i.getWidth());
              }
            }

            return t - e;
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            var e = 0,
                t = 0;

            if (this.children.length > 0) {
              e = this.children[0].getY(), t = this.children[0].getY() + this.children[0].getHeight();

              for (var _s30 = 0; _s30 < this.children.length; _s30++) {
                var i = this.children[_s30];
                e > i.getY() && (e = i.getY()), t < i.getY() + i.getHeight() && (t = i.getY() + i.getHeight());
              }
            }

            return t - e;
          }
        }]);

        return s;
      }(e.display.DisplayObjectContainer);

      t.Sprite = s, s.__class = "splashjs.display.Sprite", s.__interfaces = ["splashjs.display.iface.IDraggable", "splashjs.display.iface.IDisplayObject", "splashjs.display.iface.ISprite", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$DisplayObj7) {
        _inherits(s, _e$display$DisplayObj7);

        function s() {
          var _this119;

          _classCallCheck(this, s);

          _this119 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "scene")), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this119)).call(_assertThisInitialized(_this119), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this119)));
          return _this119;
        }

        return s;
      }(e.display.DisplayObjectContainer);

      t.Scene = s, s.__class = "splashjs.display.Scene", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$Shape) {
        _inherits(s, _e$display$Shape);

        function s(e, t) {
          var _this120;

          _classCallCheck(this, s);

          if ("number" != typeof e && null !== e || "number" != typeof t && null !== t) {
            if (void 0 !== e || void 0 !== t) throw new Error("invalid overload");
            _this120 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "ellipse")), _this120.radiusX = 0, _this120.radiusY = 0;
          } else {
            _this120 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "ellipse")), _this120.radiusX = 0, _this120.radiusY = 0;

            (function () {
              _this120.radiusX = e, _this120.radiusY = t;
            })();
          }

          return _possibleConstructorReturn(_this120);
        }

        return s;
      }(e.display.Shape);

      t.Ellipse = s, s.__class = "splashjs.display.Ellipse", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.display.iface.IShape", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.display.iface.IEllipse"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$Shape2) {
        _inherits(s, _e$display$Shape2);

        function s(t) {
          var _this121;

          _classCallCheck(this, s);

          if ("number" == typeof t || null === t) {
            _this121 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "circle")), _this121.radius = 0, function () {
              _this121.radius = t, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this121)).call(_assertThisInitialized(_this121), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this121)));
            }();
          } else {
            if (void 0 !== t) throw new Error("invalid overload");
            _this121 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "circle")), _this121.radius = 0, function () {
              _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this121)).call(_assertThisInitialized(_this121), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this121)));
            }();
          }

          return _possibleConstructorReturn(_this121);
        }

        _createClass(s, [{
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            var s, i;
            return s = t.getType(), i = e.events.Event.ADDED_TO_STAGE, s.toUpperCase() === (null === i ? i : i.toUpperCase()) && (this.originalWidth = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalWidth(), this.originalHeight = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalHeight(), this.width = this.originalWidth, this.height = this.originalHeight), _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);
          }
        }, {
          key: "setRadius",
          value: function setRadius(e) {
            this.radius = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setRadius(), this.originalWidth = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalWidth(), this.originalHeight = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalHeight();
          }
        }, {
          key: "getRadius",
          value: function getRadius() {
            return this.radius;
          }
        }]);

        return s;
      }(e.display.Shape);

      t.Circle = s, s.__class = "splashjs.display.Circle", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.display.iface.IShape", "splashjs.lang.iface.ISplashObject", "splashjs.display.iface.ICircle", "splashjs.events.iface.IEventDispatcher"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$Shape3) {
        _inherits(s, _e$display$Shape3);

        function s(t, i, r, n) {
          var _this122;

          _classCallCheck(this, s);

          if ("number" != typeof t && null !== t || "number" != typeof i && null !== i || "number" != typeof r && null !== r || "number" != typeof n && null !== n) {
            if ("number" != typeof t && null !== t || "number" != typeof i && null !== i || void 0 !== r || void 0 !== n) {
              if (void 0 !== t || void 0 !== i || void 0 !== r || void 0 !== n) throw new Error("invalid overload");
              _this122 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "rectangle")), _this122.rectangleWidth = 0, _this122.rectangleHeight = 0, _this122.cornerRadiusX = 0, _this122.cornerRadiusY = 0, function () {
                _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this122)).call(_assertThisInitialized(_this122), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this122)));
              }();
            } else {
              _this122 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "rectangle")), _this122.rectangleWidth = 0, _this122.rectangleHeight = 0, _this122.cornerRadiusX = 0, _this122.cornerRadiusY = 0, function () {
                _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this122)).call(_assertThisInitialized(_this122), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this122)));
              }();

              (function () {
                _this122.rectangleWidth = t, _this122.rectangleHeight = i;
              })();
            }
          } else {
            _this122 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "rectangle")), _this122.rectangleWidth = 0, _this122.rectangleHeight = 0, _this122.cornerRadiusX = 0, _this122.cornerRadiusY = 0, function () {
              _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this122)).call(_assertThisInitialized(_this122), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this122)));
            }();

            (function () {
              _this122.rectangleWidth = t, _this122.rectangleHeight = i, _this122.cornerRadiusX = r, _this122.cornerRadiusY = n;
            })();
          }
          return _possibleConstructorReturn(_this122);
        }

        _createClass(s, [{
          key: "getCornerRadiusX",
          value: function getCornerRadiusX() {
            return this.cornerRadiusX;
          }
        }, {
          key: "setCornerRadiusX",
          value: function setCornerRadiusX(e) {
            this.cornerRadiusX = e;
          }
        }, {
          key: "getCornerRadiusY",
          value: function getCornerRadiusY() {
            return this.cornerRadiusY;
          }
        }, {
          key: "setCornerRadiusY",
          value: function setCornerRadiusY(e) {
            this.cornerRadiusY = e;
          }
        }, {
          key: "getRectangleWidth",
          value: function getRectangleWidth() {
            return this.rectangleWidth;
          }
        }, {
          key: "setRectangleWidth",
          value: function setRectangleWidth(e) {
            this.rectangleWidth = e;
          }
        }, {
          key: "getRectangleHeight",
          value: function getRectangleHeight() {
            return this.rectangleHeight;
          }
        }, {
          key: "setRectangleHeight",
          value: function setRectangleHeight(e) {
            this.rectangleHeight = e;
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            var s = _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);

            var i, r;
            return i = t.getType(), r = e.events.Event.ADDED_TO_STAGE, i.toUpperCase(), null === r || r.toUpperCase(), s;
          }
        }]);

        return s;
      }(e.display.Shape);

      t.Rectangle = s, s.__class = "splashjs.display.Rectangle", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.display.iface.IShape", "splashjs.lang.iface.ISplashObject", "splashjs.display.iface.IRectangle", "splashjs.events.iface.IEventDispatcher"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$Shape4) {
        _inherits(s, _e$display$Shape4);

        function s(t) {
          var _this123;

          _classCallCheck(this, s);

          if ("number" == typeof t || null === t) {
            _this123 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "line")), _this123.length = 0, function () {
              _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this123)).call(_assertThisInitialized(_this123), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this123)));
            }();

            (function () {
              _this123.length = t;
            })();
          } else {
            if (void 0 !== t) throw new Error("invalid overload");
            _this123 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "line")), _this123.length = 0, function () {
              _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this123)).call(_assertThisInitialized(_this123), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this123)));
            }();
          }

          return _possibleConstructorReturn(_this123);
        }

        _createClass(s, [{
          key: "setLength",
          value: function setLength(e) {
            this.length = e;
          }
        }, {
          key: "getLength",
          value: function getLength() {
            return this.length;
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            var s, i;
            return s = t.getType(), i = e.events.Event.ADDED_TO_STAGE, s.toUpperCase() === (null === i ? i : i.toUpperCase()) && (this.originalWidth = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalWidth(), this.originalHeight = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalHeight(), this.width = this.originalWidth, this.height = this.originalHeight), _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);
          }
        }, {
          key: "setFillColor",
          value: function setFillColor(e) {}
        }, {
          key: "getFillColor",
          value: function getFillColor() {
            return null;
          }
        }, {
          key: "setWidth",
          value: function setWidth(e) {}
        }, {
          key: "setHeight",
          value: function setHeight(e) {}
        }]);

        return s;
      }(e.display.Shape);

      t.Line = s, s.__class = "splashjs.display.Line", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.display.iface.IShape", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.display.iface.ILine"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$text$Text) {
        _inherits(s, _e$text$Text);

        function s(t) {
          var _this124;

          _classCallCheck(this, s);

          _this124 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "staticText")), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this124)).call(_assertThisInitialized(_this124), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this124))), _get(_getPrototypeOf(s.prototype), "setText", _assertThisInitialized(_this124)).call(_assertThisInitialized(_this124), t);
          return _this124;
        }

        _createClass(s, [{
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            var s, i;
            return s = t.getType(), i = e.events.Event.ADDED_TO_STAGE, s.toUpperCase() === (null === i ? i : i.toUpperCase()) && (this.width = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalWidth(), this.height = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalHeight()), _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalWidth();
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalHeight();
          }
        }, {
          key: "setWidth",
          value: function setWidth(e) {
            throw Object.defineProperty(new Error(), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.UnsupportedOperationException", "java.lang.Object", "java.lang.RuntimeException", "java.lang.Exception"]
            });
          }
        }, {
          key: "setHeight",
          value: function setHeight(e) {
            throw Object.defineProperty(new Error(), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.UnsupportedOperationException", "java.lang.Object", "java.lang.RuntimeException", "java.lang.Exception"]
            });
          }
        }, {
          key: "setSize",
          value: function setSize(e, t) {
            throw Object.defineProperty(new Error(), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.UnsupportedOperationException", "java.lang.Object", "java.lang.RuntimeException", "java.lang.Exception"]
            });
          }
        }]);

        return s;
      }(e.text.Text);

      t.StaticText = s, s.__class = "splashjs.text.StaticText", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.text.iface.IText", "splashjs.text.iface.IStaticText"];
    }(e.text || (e.text = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$text$Text2) {
        _inherits(s, _e$text$Text2);

        function s(t) {
          var _this125;

          _classCallCheck(this, s);

          if ("string" == typeof t || null === t) {
            _this125 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "inputText")), _this125.placeholder = "", _this125.backgroundColor = e.utils.Color.NONE_$LI$(), _this125.borderColor = e.utils.Color.BLACK_$LI$(), function () {
              _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this125)).call(_assertThisInitialized(_this125), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this125))), _get(_getPrototypeOf(s.prototype), "setText", _assertThisInitialized(_this125)).call(_assertThisInitialized(_this125), t);
            }();
          } else {
            if (void 0 !== t) throw new Error("invalid overload");
            _this125 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "inputText")), _this125.placeholder = "", _this125.backgroundColor = e.utils.Color.NONE_$LI$(), _this125.borderColor = e.utils.Color.BLACK_$LI$(), function () {
              _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this125)).call(_assertThisInitialized(_this125), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this125)));
            }();
          }

          return _possibleConstructorReturn(_this125);
        }

        _createClass(s, [{
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            var s = _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);

            var i, r;
            return i = t.getType(), r = e.events.Event.ADDED_TO_STAGE, i.toUpperCase() === (null === r ? r : r.toUpperCase()) && (this.width = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalWidth(), this.height = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalHeight()), s;
          }
        }, {
          key: "setPlaceholder",
          value: function setPlaceholder(e) {
            this.placeholder = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setPlaceholder();
          }
        }, {
          key: "getPlaceholder",
          value: function getPlaceholder() {
            return this.placeholder;
          }
        }, {
          key: "setBackgroundColor",
          value: function setBackgroundColor(e) {
            this.backgroundColor = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setBackgroundColor();
          }
        }, {
          key: "getBackgroundColor",
          value: function getBackgroundColor() {
            return this.backgroundColor;
          }
        }, {
          key: "setBorderColor",
          value: function setBorderColor(e) {
            this.borderColor = e, _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setBorderColor();
          }
        }, {
          key: "getBorderColor",
          value: function getBorderColor() {
            return this.borderColor;
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getWidth();
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getHeight();
          }
        }, {
          key: "setWidth",
          value: function setWidth(e) {
            throw Object.defineProperty(new Error(), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.UnsupportedOperationException", "java.lang.Object", "java.lang.RuntimeException", "java.lang.Exception"]
            });
          }
        }, {
          key: "setHeight",
          value: function setHeight(e) {
            throw Object.defineProperty(new Error(), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.UnsupportedOperationException", "java.lang.Object", "java.lang.RuntimeException", "java.lang.Exception"]
            });
          }
        }, {
          key: "setSize",
          value: function setSize(e, t) {
            throw Object.defineProperty(new Error(), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.UnsupportedOperationException", "java.lang.Object", "java.lang.RuntimeException", "java.lang.Exception"]
            });
          }
        }]);

        return s;
      }(e.text.Text);

      t.InputText = s, s.__class = "splashjs.text.InputText", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.text.iface.IInputText", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.text.iface.IText"];
    }(e.text || (e.text = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$text$Text3) {
        _inherits(s, _e$text$Text3);

        function s(t) {
          var _this126;

          _classCallCheck(this, s);

          _this126 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "dynamicText")), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this126)).call(_assertThisInitialized(_this126), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this126))), _get(_getPrototypeOf(s.prototype), "setText", _assertThisInitialized(_this126)).call(_assertThisInitialized(_this126), t);
          return _this126;
        }

        _createClass(s, [{
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            var s, i;
            return s = t.getType(), i = e.events.Event.ADDED_TO_STAGE, s.toUpperCase() === (null === i ? i : i.toUpperCase()) && (this.width = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalWidth(), this.height = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalHeight()), _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);
          }
        }, {
          key: "setWidth",
          value: function setWidth(e) {
            throw Object.defineProperty(new Error(), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.UnsupportedOperationException", "java.lang.Object", "java.lang.RuntimeException", "java.lang.Exception"]
            });
          }
        }, {
          key: "setHeight",
          value: function setHeight(e) {
            throw Object.defineProperty(new Error(), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.UnsupportedOperationException", "java.lang.Object", "java.lang.RuntimeException", "java.lang.Exception"]
            });
          }
        }, {
          key: "setSize",
          value: function setSize(e, t) {
            throw Object.defineProperty(new Error(), "__classes", {
              configurable: !0,
              value: ["java.lang.Throwable", "java.lang.UnsupportedOperationException", "java.lang.Object", "java.lang.RuntimeException", "java.lang.Exception"]
            });
          }
        }]);

        return s;
      }(e.text.Text);

      t.DynamicText = s, s.__class = "splashjs.text.DynamicText", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.text.iface.IDynamicText", "splashjs.text.iface.IText"];
    }(e.text || (e.text = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$controls$Co) {
          _inherits(s, _e$render$controls$Co);

          function s(t) {
            var _this127;

            _classCallCheck(this, s);

            _this127 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this127.htmlInputElement && (_this127.htmlInputElement = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this127)).call(_assertThisInitialized(_this127), t), _this127.htmlInputElement = document.createElement("input"), _this127.htmlInputElement.type = "radio", _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this127)).call(_assertThisInitialized(_this127), new e.render.RenderElement(_this127.htmlInputElement));
            return _this127;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {}
          }, {
            key: "setSelected",
            value: function setSelected() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getSelected();

              !0 === e ? this.htmlInputElement.checked = !0 : !1 === e && (this.htmlInputElement.checked = !1);
            }
          }, {
            key: "setGroup",
            value: function setGroup() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getGroup();

              null != e ? this.htmlInputElement.name = e.getName() : null == e && this.htmlInputElement.removeAttribute("name");
            }
          }]);

          return s;
        }(e.render.controls.ControlRenderer);

        t.RadioButtonRenderer = s, s.__class = "splashjs.render.controls.RadioButtonRenderer", s.__interfaces = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.controls.iface.IRadioButtonRenderer"];
      }(t.controls || (t.controls = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$controls$Co2) {
          _inherits(s, _e$render$controls$Co2);

          function s(t) {
            var _this128;

            _classCallCheck(this, s);

            _this128 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this128.px = 0, _this128.py = 0, void 0 === _this128.container && (_this128.container = null), void 0 === _this128.htmlSpanElement && (_this128.htmlSpanElement = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this128)).call(_assertThisInitialized(_this128), t), _this128.htmlSpanElement = document.createElement("span"), _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this128)).call(_assertThisInitialized(_this128), new e.render.RenderElement(_this128.htmlSpanElement)), _this128.create();
            return _this128;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {
              null != _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getTreeData() && (this.container = new e.display.Sprite());
            }
          }]);

          return s;
        }(e.render.controls.ControlRenderer);

        t.TreeRenderer = s, s.__class = "splashjs.render.controls.TreeRenderer", s.__interfaces = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.controls.iface.ITreeRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.controls || (t.controls = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$controls$Co3) {
          _inherits(s, _e$render$controls$Co3);

          function s() {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this));
          }

          _createClass(s, [{
            key: "setText",
            value: function setText() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getText();

              _get(_getPrototypeOf(s.prototype), "getDOMElement", this).call(this).innerText = null != e ? e : "";
            }
          }]);

          return s;
        }(e.render.controls.ControlRenderer);

        t.BaseTextRenderer = s, s.__class = "splashjs.render.controls.BaseTextRenderer", s.__interfaces = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.controls.iface.IBaseTextRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.controls || (t.controls = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$controls$Co4) {
          _inherits(s, _e$render$controls$Co4);

          function s() {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this));
          }

          return s;
        }(e.render.controls.ControlRenderer);

        t.BaseListRenderer = s, s.__class = "splashjs.render.controls.BaseListRenderer", s.__interfaces = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.controls.iface.IBaseListRenderer"];
      }(t.controls || (t.controls = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$display$Dis3) {
          _inherits(s, _e$render$display$Dis3);

          function s(t) {
            var _this129;

            _classCallCheck(this, s);

            _this129 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this129)).call(_assertThisInitialized(_this129), t), _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this129)).call(_assertThisInitialized(_this129), new e.render.RenderElement(document.createElement("span")));
            return _this129;
          }

          return s;
        }(e.render.display.DisplayObjectContainerRenderer);

        t.SpriteRenderer = s, s.__class = "splashjs.render.display.SpriteRenderer", s.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.display.iface.IDisplayObjectContainerRenderer"];
      }(t.display || (t.display = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$display$Dis4) {
          _inherits(s, _e$render$display$Dis4);

          function s(t) {
            var _this130;

            _classCallCheck(this, s);

            _this130 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this130.timer && (_this130.timer = null), void 0 === _this130.htmlSpanElement && (_this130.htmlSpanElement = null), void 0 === _this130.stage && (_this130.stage = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this130)).call(_assertThisInitialized(_this130), t), _this130.stage = t, _this130.htmlSpanElement = document.createElement("span"), _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this130)).call(_assertThisInitialized(_this130), new e.render.RenderElement(_this130.htmlSpanElement)), _this130.timer = new java.util.Timer();
            return _this130;
          }

          _createClass(s, [{
            key: "createEventListeners",
            value: function createEventListeners() {
              var _this131 = this;

              _get(_getPrototypeOf(s.prototype), "createEventListeners", this).call(this), this.htmlSpanElement.tabIndex = 0, this.htmlSpanElement.addEventListener(e.render.HTMLDomEventName.KEYPRESS, function (t) {
                var s = t,
                    i = 0 | new Number(s.location).valueOf(),
                    r = i + "";
                i === s.DOM_KEY_LOCATION_STANDARD ? r = e.ui.KeyLocation.STANDARD : i === s.DOM_KEY_LOCATION_LEFT ? r = e.ui.KeyLocation.LEFT : i === s.DOM_KEY_LOCATION_RIGHT ? r = e.ui.KeyLocation.RIGHT : i === s.DOM_KEY_LOCATION_NUMPAD && (r = e.ui.KeyLocation.NUMPAD);
                var n = 0 | new Number(s.charCode).valueOf(),
                    a = 0 | new Number(s.keyCode).valueOf(),
                    l = 0 | new Number(s.which).valueOf(),
                    o = new e.events.KeyboardEvent(e.events.KeyboardEvent.KEY_PRESS, s.altKey, n, s.char, s.ctrlKey, s.key, a, r, s.metaKey, s.repeat, s.shiftKey, l);

                _this131.getRenderObject().dispatchEvent(o);
              }), this.htmlSpanElement.addEventListener(e.render.HTMLDomEventName.KEYUP, function (t) {
                var s = t,
                    i = 0 | new Number(s.location).valueOf(),
                    r = i + "";
                i === s.DOM_KEY_LOCATION_STANDARD ? r = e.ui.KeyLocation.STANDARD : i === s.DOM_KEY_LOCATION_LEFT ? r = e.ui.KeyLocation.LEFT : i === s.DOM_KEY_LOCATION_RIGHT ? r = e.ui.KeyLocation.RIGHT : i === s.DOM_KEY_LOCATION_NUMPAD && (r = e.ui.KeyLocation.NUMPAD);
                var n = 0 | new Number(s.charCode).valueOf(),
                    a = 0 | new Number(s.keyCode).valueOf(),
                    l = 0 | new Number(s.which).valueOf(),
                    o = new e.events.KeyboardEvent(e.events.KeyboardEvent.KEY_UP, s.altKey, n, s.char, s.ctrlKey, s.key, a, r, s.metaKey, s.repeat, s.shiftKey, l);

                _this131.getRenderObject().dispatchEvent(o);
              }), this.htmlSpanElement.addEventListener(e.render.HTMLDomEventName.KEYDOWN, function (t) {
                var s = t,
                    i = 0 | new Number(s.location).valueOf(),
                    r = i + "";
                i === s.DOM_KEY_LOCATION_STANDARD ? r = e.ui.KeyLocation.STANDARD : i === s.DOM_KEY_LOCATION_LEFT ? r = e.ui.KeyLocation.LEFT : i === s.DOM_KEY_LOCATION_RIGHT ? r = e.ui.KeyLocation.RIGHT : i === s.DOM_KEY_LOCATION_NUMPAD && (r = e.ui.KeyLocation.NUMPAD);
                var n = 0 | new Number(s.charCode).valueOf(),
                    a = 0 | new Number(s.keyCode).valueOf(),
                    l = 0 | new Number(s.which).valueOf(),
                    o = new e.events.KeyboardEvent(e.events.KeyboardEvent.KEY_DOWN, s.altKey, n, s.char, s.ctrlKey, s.key, a, r, s.metaKey, s.repeat, s.shiftKey, l);

                _this131.getRenderObject().dispatchEvent(o);
              });
            }
          }, {
            key: "setColor",
            value: function setColor() {
              var t = this.getRenderObject().getColor();
              var s, i;
              s = t.getColorType(), i = e.utils.ColorType.GRADIENT, s.toUpperCase() === (null === i ? i : i.toUpperCase()) || (this.getDOMElement().style.backgroundColor = this.getCSSColorText());
            }
          }, {
            key: "startEnterFrameExitFrameDispatcherLoop",
            value: function startEnterFrameExitFrameDispatcherLoop() {
              this.timer.scheduleAtFixedRate$java_util_TimerTask$long$long(new s.StageRenderer$0(this), 0, 15);
            }
          }, {
            key: "setScene",
            value: function setScene() {
              var t = this.stage.getScene();
              this.appendChild(t.getRenderer());
              var s = new e.events.Event(e.events.Event.ADDED_TO_STAGE, t, t);
              t.dispatchEvent(s);
            }
          }, {
            key: "removeScene",
            value: function removeScene() {
              var t = this.stage.getScene();
              this.removeChild(t.getRenderer());
              var s = new e.events.Event(e.events.Event.REMOVED_FROM_STAGE, t, t);
              t.dispatchEvent(s);
            }
          }, {
            key: "getCSSColorText",
            value: function getCSSColorText() {
              var t = e.utils.ColorName.BLACK,
                  s = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getColor();

              var i, r;
              return i = s.getColorType(), r = e.utils.ColorType.NAME, i.toUpperCase() === (null === r ? r : r.toUpperCase()) ? t = s.getColorName() : function (e, t) {
                return e.toUpperCase() === (null === t ? t : t.toUpperCase());
              }(s.getColorType(), e.utils.ColorType.HEX) && (t = s.getHEX()), t;
            }
          }]);

          return s;
        }(e.render.display.DisplayObjectContainerRenderer);

        t.StageRenderer = s, s.__class = "splashjs.render.display.StageRenderer", s.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.display.iface.IStageRenderer", "splashjs.render.display.iface.IDisplayObjectContainerRenderer"], function (t) {
          var s = /*#__PURE__*/function (_java$util$TimerTask2) {
            _inherits(s, _java$util$TimerTask2);

            function s(e) {
              var _this132;

              _classCallCheck(this, s);

              _this132 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _this132.__parent = e;
              return _this132;
            }

            _createClass(s, [{
              key: "run",
              value: function run() {
                this.__parent.getRenderObject().dispatchEvent(new e.events.Event(e.events.Event.ENTER_FRAME)), this.__parent.getRenderObject().dispatchEvent(new e.events.Event(e.events.Event.EXIT_FRAME));
              }
            }]);

            return s;
          }(java.util.TimerTask);

          t.StageRenderer$0 = s, s.__interfaces = ["java.lang.Runnable"];
        }(s = t.StageRenderer || (t.StageRenderer = {}));
      }(t.display || (t.display = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$display$Dis5) {
          _inherits(s, _e$render$display$Dis5);

          function s(t) {
            var _this133;

            _classCallCheck(this, s);

            _this133 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this133.htmlDivElement && (_this133.htmlDivElement = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this133)).call(_assertThisInitialized(_this133), t), _this133.htmlDivElement = document.createElement("div"), _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this133)).call(_assertThisInitialized(_this133), new e.render.RenderElement(_this133.htmlDivElement));
            return _this133;
          }

          _createClass(s, [{
            key: "applyCSS",
            value: function applyCSS() {
              this.htmlDivElement.style.display = "inline-block";
            }
          }]);

          return s;
        }(e.render.display.DisplayObjectContainerRenderer);

        t.SceneRenderer = s, s.__class = "splashjs.render.display.SceneRenderer", s.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.display.iface.IDisplayObjectContainerRenderer"];
      }(t.display || (t.display = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$display$Sha) {
          _inherits(s, _e$render$display$Sha);

          function s(t) {
            var _this134;

            _classCallCheck(this, s);

            _this134 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this134)).call(_assertThisInitialized(_this134), t), _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this134)).call(_assertThisInitialized(_this134), new e.render.RenderElement(document.createElementNS(_this134.SVGNS, "svg"))), _this134.create();
            return _this134;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {
              this.childSVGElement = document.createElementNS(this.SVGNS, "circle"), this.setCircleAttributes(), this.getSVGElement().appendChild(this.childSVGElement);
            }
          }, {
            key: "update",
            value: function update() {
              this.setCircleAttributes();
            }
          }, {
            key: "setCircleAttributes",
            value: function setCircleAttributes() {
              this.childSVGElement.setAttributeNS(null, "r", this.getSVGCircleRadiusText()), this.childSVGElement.setAttributeNS(null, "cx", this.getSVGCircleCenterXText()), this.childSVGElement.setAttributeNS(null, "cy", this.getSVGCircleCenterYText()), this.childSVGElement.setAttributeNS(null, "stroke", this.getSVGShapeStrokeColorNameText()), this.childSVGElement.setAttributeNS(null, "fill", this.getSVGShapeFillColorNameText()), this.childSVGElement.setAttributeNS(null, "stroke-width", this.getSVGShapeStrokeWidthText()), this.getSVGElement().setAttributeNS(null, "height", this.getSVGCircleHeightText()), this.getSVGElement().setAttributeNS(null, "width", this.getSVGCircleWidthText());
            }
          }, {
            key: "setRadius",
            value: function setRadius() {
              this.childSVGElement.setAttributeNS(null, "r", this.getSVGCircleRadiusText()), this.childSVGElement.setAttributeNS(null, "cx", this.getSVGCircleCenterXText()), this.childSVGElement.setAttributeNS(null, "cy", this.getSVGCircleCenterYText()), this.getSVGElement().setAttributeNS(null, "height", this.getSVGCircleHeightText()), this.getSVGElement().setAttributeNS(null, "width", this.getSVGCircleWidthText());
            }
          }, {
            key: "getOriginalWidth",
            value: function getOriginalWidth() {
              return parseInt(this.getSVGCircleWidthText());
            }
          }, {
            key: "getOriginalHeight",
            value: function getOriginalHeight() {
              return parseInt(this.getSVGCircleHeightText());
            }
          }]);

          return s;
        }(e.render.display.ShapeRenderer);

        t.CircleRenderer = s, s.__class = "splashjs.render.display.CircleRenderer", s.__interfaces = ["splashjs.render.display.iface.ICircleRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.display.iface.IShapeRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.display || (t.display = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$display$Sha2) {
          _inherits(s, _e$render$display$Sha2);

          function s(t) {
            var _this135;

            _classCallCheck(this, s);

            _this135 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this135)).call(_assertThisInitialized(_this135), t), _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this135)).call(_assertThisInitialized(_this135), new e.render.RenderElement(document.createElementNS(_this135.SVGNS, "svg")));
            return _this135;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {
              this.childSVGElement = document.createElementNS(this.SVGNS, "rect"), this.setRectangleAttributes(), this.getSVGElement().appendChild(this.childSVGElement);
            }
          }, {
            key: "update",
            value: function update() {
              this.setRectangleAttributes();
            }
          }, {
            key: "setRectangleAttributes",
            value: function setRectangleAttributes() {
              this.childSVGElement.setAttributeNS(null, "x", "0"), this.childSVGElement.setAttributeNS(null, "y", "0"), this.childSVGElement.setAttributeNS(null, "rx", this.getCornerRadiusXAsString()), this.childSVGElement.setAttributeNS(null, "ry", this.getCornerRadiusYAsString()), this.childSVGElement.setAttributeNS(null, "height", this.getRectangleHeightAsString()), this.childSVGElement.setAttributeNS(null, "width", this.getRectangleWidthAsString()), this.childSVGElement.setAttributeNS(null, "stroke", this.getStrokeColorNameAsString()), this.childSVGElement.setAttributeNS(null, "fill", this.getFillColorNameAsString()), this.childSVGElement.setAttributeNS(null, "stroke-width", this.getStrokeWidthAsString()), this.getSVGElement().setAttributeNS(null, "height", this.getRectangleHeightAsString()), this.getSVGElement().setAttributeNS(null, "width", this.getRectangleWidthAsString()), _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).setWidth(parseInt(this.getRectangleWidthAsString())), _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).setHeight(parseInt(this.getRectangleHeightAsString()));
            }
          }, {
            key: "getCornerRadiusXAsString",
            value: function getCornerRadiusXAsString() {
              var e = "0";
              return e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getCornerRadiusX() + "", e;
            }
          }, {
            key: "getCornerRadiusYAsString",
            value: function getCornerRadiusYAsString() {
              var e = "0";
              return e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getCornerRadiusY() + "", e;
            }
          }, {
            key: "getRectangleWidthAsString",
            value: function getRectangleWidthAsString() {
              var e = "0";
              return e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getRectangleWidth() + "", e;
            }
          }, {
            key: "getRectangleHeightAsString",
            value: function getRectangleHeightAsString() {
              var e = "0";
              return e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getRectangleHeight() + "", e;
            }
          }, {
            key: "setCornerRadiusX",
            value: function setCornerRadiusX() {
              this.childSVGElement.setAttributeNS(null, "rx", this.getCornerRadiusXAsString());
            }
          }, {
            key: "setCorcnerRadiusY",
            value: function setCorcnerRadiusY() {
              this.childSVGElement.setAttributeNS(null, "ry", this.getCornerRadiusYAsString());
            }
          }, {
            key: "setRectangleWidth",
            value: function setRectangleWidth() {
              this.childSVGElement.setAttributeNS(null, "width", this.getRectangleWidthAsString());
            }
          }, {
            key: "setRectangleHeight",
            value: function setRectangleHeight() {
              this.childSVGElement.setAttributeNS(null, "height", this.getRectangleHeightAsString());
            }
          }]);

          return s;
        }(e.render.display.ShapeRenderer);

        t.RectangleRenderer = s, s.__class = "splashjs.render.display.RectangleRenderer", s.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.display.iface.IShapeRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.display.iface.IRectangleRenderer"];
      }(t.display || (t.display = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$display$Sha3) {
          _inherits(s, _e$render$display$Sha3);

          function s(t) {
            var _this136;

            _classCallCheck(this, s);

            _this136 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this136)).call(_assertThisInitialized(_this136), t), _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this136)).call(_assertThisInitialized(_this136), new e.render.RenderElement(document.createElementNS(_this136.SVGNS, "svg"))), _this136.create();
            return _this136;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {
              this.childSVGElement = document.createElementNS(this.SVGNS, "line"), this.setLineAttributes(), _get(_getPrototypeOf(s.prototype), "getSVGElement", this).call(this).appendChild(this.childSVGElement);
            }
          }, {
            key: "update",
            value: function update() {
              null != this.childSVGElement && this.setLineAttributes();
            }
          }, {
            key: "setLineAttributes",
            value: function setLineAttributes() {
              this.childSVGElement.setAttributeNS(null, "x1", "0"), this.childSVGElement.setAttributeNS(null, "y1", this.getSVGLineY1Text()), this.childSVGElement.setAttributeNS(null, "x2", this.getSVGLineX2Text()), this.childSVGElement.setAttributeNS(null, "y2", this.getSVGLineY2Text()), this.childSVGElement.setAttributeNS(null, "stroke", this.getSVGShapeStrokeColorNameText()), this.childSVGElement.setAttributeNS(null, "stroke-width", this.getSVGShapeStrokeWidthText()), this.getSVGElement().setAttributeNS(null, "height", this.getSVGLineHeightText()), this.getSVGElement().setAttributeNS(null, "width", this.getSVGLineWidthText()), _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).setWidth(parseInt(this.getWidthAsString())), _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).setHeight(parseInt(this.getHeightAsString()));
            }
          }, {
            key: "getOriginalWidth",
            value: function getOriginalWidth() {
              return parseInt(this.getSVGLineWidthText());
            }
          }, {
            key: "getOriginalHeight",
            value: function getOriginalHeight() {
              return parseInt(this.getSVGLineHeightText());
            }
          }, {
            key: "getWidthAsString",
            value: function getWidthAsString() {
              var e = "0";
              return e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getLength() + "", e;
            }
          }, {
            key: "getHeightAsString",
            value: function getHeightAsString() {
              var e = "0";
              return e = this.getStrokeWidthAsString(), e;
            }
          }]);

          return s;
        }(e.render.display.ShapeRenderer);

        t.LineRenderer = s, s.__class = "splashjs.render.display.LineRenderer", s.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.display.iface.IShapeRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.display || (t.display = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$text$TextRe) {
          _inherits(s, _e$render$text$TextRe);

          function s(t) {
            var _this137;

            _classCallCheck(this, s);

            _this137 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this137.htmlInputElement && (_this137.htmlInputElement = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this137)).call(_assertThisInitialized(_this137), t), _this137.htmlInputElement = document.createElement("input"), _this137.htmlInputElement.setAttribute("type", "text"), _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this137)).call(_assertThisInitialized(_this137), new e.render.RenderElement(_this137.htmlInputElement)), _this137.applyCSS(), _this137.createEventListeners();
            return _this137;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {}
          }, {
            key: "createEventListeners",
            value: function createEventListeners() {
              var _this138 = this;

              _get(_getPrototypeOf(s.prototype), "createEventListeners", this).call(this), this.htmlInputElement.addEventListener(e.render.HTMLDomEventName.CHANGE, function (t) {
                console.info("change");
                var s = new e.events.Event(e.events.Event.CHANGE, _this138.getRenderObject(), _this138.getRenderObject());

                _this138.getRenderObject().dispatchEvent(s);
              });
            }
          }, {
            key: "setText",
            value: function setText() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getText();

              null != e && this.htmlInputElement.setAttribute("value", e);
            }
          }, {
            key: "setPlaceholder",
            value: function setPlaceholder() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getPlaceholder();

              null != e && this.htmlInputElement.setAttribute("placeholder", e);
            }
          }, {
            key: "setBackgroundColor",
            value: function setBackgroundColor() {
              var t = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getBackgroundColor();

              if (s = t.getColorType(), i = e.utils.ColorType.NAME, s.toUpperCase() === (null === i ? i : i.toUpperCase())) {
                var _s31 = t.getColorName();

                (function (e, t) {
                  return e.toUpperCase() === (null === t ? t : t.toUpperCase());
                })(_s31, e.utils.ColorName.NONE) ? this.htmlInputElement.style.background = "none" : this.htmlInputElement.style.backgroundColor = _s31;
              }

              var s, i;
            }
          }, {
            key: "setBorderColor",
            value: function setBorderColor() {
              var t = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getBorderColor();

              if (s = t.getColorType(), i = e.utils.ColorType.NAME, s.toUpperCase() === (null === i ? i : i.toUpperCase())) {
                var _s32 = t.getColorName();

                (function (e, t) {
                  return e.toUpperCase() === (null === t ? t : t.toUpperCase());
                })(_s32, e.utils.ColorName.NONE) ? this.htmlInputElement.style.border = "none" : this.htmlInputElement.style.borderColor = _s32;
              }

              var s, i;
            }
          }, {
            key: "getClientWidth",
            value: function getClientWidth() {
              return 0 | this.getDOMElement().clientWidth;
            }
          }, {
            key: "getClientHeight",
            value: function getClientHeight() {
              return 0 | this.getDOMElement().clientHeight;
            }
          }, {
            key: "applyCSS",
            value: function applyCSS() {
              this.htmlInputElement.style.background = "none", this.htmlInputElement.style.borderWidth = "1px", this.htmlInputElement.style.borderColor = "#000000";
            }
          }]);

          return s;
        }(e.render.text.TextRenderer);

        t.InputTextRenderer = s, s.__class = "splashjs.render.text.InputTextRenderer", s.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.text.iface.ITextRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.text.iface.IInputTextRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.text || (t.text = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$text$TextRe2) {
          _inherits(s, _e$render$text$TextRe2);

          function s() {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this));
          }

          _createClass(s, [{
            key: "getClientWidth",
            value: function getClientWidth() {
              return 0 | this.getDOMElement().clientWidth;
            }
          }, {
            key: "getClientHeight",
            value: function getClientHeight() {
              return 0 | this.getDOMElement().clientHeight;
            }
          }]);

          return s;
        }(e.render.text.TextRenderer);

        t.DynamicTextRenderer = s, s.__class = "splashjs.render.text.DynamicTextRenderer", s.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.text.iface.ITextRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.text || (t.text = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$text$TextRe3) {
          _inherits(s, _e$render$text$TextRe3);

          function s(t) {
            var _this139;

            _classCallCheck(this, s);

            _this139 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this139.htmlParagraphElement && (_this139.htmlParagraphElement = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this139)).call(_assertThisInitialized(_this139), t), _this139.htmlParagraphElement = document.createElement("p"), _this139.renderElement = new e.render.RenderElement(_this139.htmlParagraphElement);
            return _this139;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {
              this.htmlParagraphElement.innerText = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getText();
            }
          }, {
            key: "getOriginalWidth",
            value: function getOriginalWidth() {
              return 0 | this.getDOMElement().clientWidth;
            }
          }, {
            key: "getOriginalHeight",
            value: function getOriginalHeight() {
              return 0 | this.getDOMElement().clientHeight;
            }
          }, {
            key: "setText",
            value: function setText() {
              this.htmlParagraphElement.innerText = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getText();
            }
          }, {
            key: "getHTMLParagraphElement",
            value: function getHTMLParagraphElement() {
              return this.getDOMElement();
            }
          }]);

          return s;
        }(e.render.text.TextRenderer);

        t.StaticTextRenderer = s, s.__class = "splashjs.render.text.StaticTextRenderer", s.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.text.iface.ITextRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.text.iface.IStaticTextRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.text || (t.text = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$controls$BaseText) {
        _inherits(s, _e$controls$BaseText);

        function s(t) {
          var _this140;

          _classCallCheck(this, s);

          _this140 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "label")), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this140)).call(_assertThisInitialized(_this140), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this140))), _get(_getPrototypeOf(s.prototype), "setText", _assertThisInitialized(_this140)).call(_assertThisInitialized(_this140), t);
          return _this140;
        }

        _createClass(s, [{
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            var s, i;
            return s = t.getType(), i = e.events.Event.ADDED_TO_STAGE, s.toUpperCase() === (null === i ? i : i.toUpperCase()) && (this.originalWidth = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalWidth(), this.originalHeight = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalHeight(), 0 === this.width && 0 !== this.originalWidth && _get(_getPrototypeOf(s.prototype), "setWidth", this).call(this, this.originalWidth), 0 === this.height && 0 !== this.originalHeight && _get(_getPrototypeOf(s.prototype), "setHeight", this).call(this, this.originalHeight)), _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);
          }
        }]);

        return s;
      }(e.controls.BaseText);

      t.Label = s, s.__class = "splashjs.controls.Label", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.controls.iface.ILabel", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseText"];
    }(e.controls || (e.controls = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$controls$BaseText2) {
        _inherits(s, _e$controls$BaseText2);

        function s(e) {
          var _this141;

          _classCallCheck(this, s);

          _this141 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), _this141.maxChars = 0, _this141.editable = !0, void 0 === _this141.placeHolderText && (_this141.placeHolderText = null), void 0 === _this141.selectionBeginIndex && (_this141.selectionBeginIndex = 0), void 0 === _this141.selectionEndIndex && (_this141.selectionEndIndex = 0);
          return _this141;
        }

        _createClass(s, [{
          key: "setMaxChars",
          value: function setMaxChars(e) {
            this.maxChars = e, null != _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setMaxChars();
          }
        }, {
          key: "getMaxChars",
          value: function getMaxChars() {
            return this.maxChars;
          }
        }, {
          key: "setEditable",
          value: function setEditable(e) {
            this.editable = e;
          }
        }, {
          key: "getEditable",
          value: function getEditable() {
            return this.editable;
          }
        }, {
          key: "isEditable",
          value: function isEditable() {
            return this.getEditable();
          }
        }, {
          key: "setPlaceHolderText",
          value: function setPlaceHolderText(e) {
            this.placeHolderText = e, null != _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setPlaceHolderText();
          }
        }, {
          key: "getPlaceHolderText",
          value: function getPlaceHolderText() {
            return this.placeHolderText;
          }
        }, {
          key: "getSelectionBeginIndex",
          value: function getSelectionBeginIndex() {
            return this.selectionBeginIndex;
          }
        }, {
          key: "getSelectionEndIndex",
          value: function getSelectionEndIndex() {
            return this.selectionEndIndex;
          }
        }, {
          key: "setSelection",
          value: function setSelection(e, t) {
            this.selectionBeginIndex = e, this.selectionEndIndex = t, null != _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setSelection();
          }
        }, {
          key: "render",
          value: function render() {
            _get(_getPrototypeOf(s.prototype), "render", this).call(this), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setMaxChars(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setEditable(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setPlaceHolderText();
          }
        }]);

        return s;
      }(e.controls.BaseText);

      t.BaseInput = s, s.__class = "splashjs.controls.BaseInput", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.controls.iface.IBaseInput", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseText"];
    }(e.controls || (e.controls = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$controls$BaseText3) {
        _inherits(s, _e$controls$BaseText3);

        function s(t) {
          var _this142;

          _classCallCheck(this, s);

          _this142 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "button")), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this142)).call(_assertThisInitialized(_this142), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this142))), _get(_getPrototypeOf(s.prototype), "setText", _assertThisInitialized(_this142)).call(_assertThisInitialized(_this142), t);
          return _this142;
        }

        _createClass(s, [{
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            var s, i;
            return s = t.getType(), i = e.events.Event.ADDED_TO_STAGE, s.toUpperCase() === (null === i ? i : i.toUpperCase()) && (this.originalWidth = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalWidth(), 0 === this.width && 0 !== this.originalWidth && _get(_getPrototypeOf(s.prototype), "setWidth", this).call(this, this.originalWidth), this.originalHeight = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalHeight(), 0 === this.height && 0 !== this.originalHeight && _get(_getPrototypeOf(s.prototype), "setHeight", this).call(this, this.originalHeight), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).refresh()), _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);
          }
        }, {
          key: "setWidth",
          value: function setWidth(e) {
            _get(_getPrototypeOf(s.prototype), "setWidth", this).call(this, e);
          }
        }, {
          key: "getWidth",
          value: function getWidth() {
            return _get(_getPrototypeOf(s.prototype), "getWidth", this).call(this);
          }
        }, {
          key: "setHeight",
          value: function setHeight(e) {
            _get(_getPrototypeOf(s.prototype), "setHeight", this).call(this, e);
          }
        }, {
          key: "getHeight",
          value: function getHeight() {
            return _get(_getPrototypeOf(s.prototype), "getHeight", this).call(this);
          }
        }, {
          key: "setScaleX",
          value: function setScaleX(e) {
            this.scaleX = e, _get(_getPrototypeOf(s.prototype), "setWidth", this).call(this, (0 | e) * this.originalWidth);
          }
        }, {
          key: "getScaleX",
          value: function getScaleX() {
            return this.scaleX;
          }
        }, {
          key: "setScaleY",
          value: function setScaleY(e) {
            this.scaleY = e, _get(_getPrototypeOf(s.prototype), "setHeight", this).call(this, (0 | e) * this.originalHeight);
          }
        }, {
          key: "getScaleY",
          value: function getScaleY() {
            return this.scaleY;
          }
        }, {
          key: "setSize",
          value: function setSize(e, t) {
            _get(_getPrototypeOf(s.prototype), "setWidth", this).call(this, e), _get(_getPrototypeOf(s.prototype), "setHeight", this).call(this, t);
          }
        }, {
          key: "setScaleXY",
          value: function setScaleXY(e, t) {
            this.setScaleX(e), this.setScaleY(t);
          }
        }, {
          key: "render",
          value: function render() {
            _get(_getPrototypeOf(s.prototype), "render", this).call(this), 0 !== _get(_getPrototypeOf(s.prototype), "getWidth", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setWidth(), 0 !== _get(_getPrototypeOf(s.prototype), "getHeight", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setHeight();
          }
        }]);

        return s;
      }(e.controls.BaseText);

      t.Button = s, s.__class = "splashjs.controls.Button", s.__interfaces = ["splashjs.controls.iface.IButton", "splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseText"];
    }(e.controls || (e.controls = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$controls$BaseList) {
        _inherits(s, _e$controls$BaseList);

        function s() {
          var _this143;

          _classCallCheck(this, s);

          _this143 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "list")), _this143.items = [], _this143.isRenderCalled = !1, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this143)).call(_assertThisInitialized(_this143), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this143)));
          return _this143;
        }

        _createClass(s, [{
          key: "addItem",
          value: function addItem(e) {
            this.items.push(e), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).addItem(e);
          }
        }, {
          key: "addItemGroup",
          value: function addItemGroup(e) {
            this.items.push(e);
          }
        }, {
          key: "getAllItems",
          value: function getAllItems() {
            return this.items;
          }
        }, {
          key: "render",
          value: function render() {
            _get(_getPrototypeOf(s.prototype), "render", this).call(this);
          }
        }]);

        return s;
      }(e.controls.BaseList);

      t.List = s, s.__class = "splashjs.controls.List", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IList", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseList"];
    }(e.controls || (e.controls = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$display$Stage) {
          _inherits(s, _e$display$Stage);

          function s(e, t, _s33) {
            var _this144;

            _classCallCheck(this, s);

            _this144 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e, t, _s33)), void 0 === _this144.nativeWindow && (_this144.nativeWindow = null);
            return _this144;
          }

          _createClass(s, [{
            key: "setNativeWindow",
            value: function setNativeWindow(e) {
              this.nativeWindow = e;
            }
          }, {
            key: "getNativeWindow",
            value: function getNativeWindow() {
              return this.nativeWindow;
            }
          }]);

          return s;
        }(e.display.Stage);

        t.Stage = s, s.__class = "splashjs.display.desktop.Stage", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IStage", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.display.desktop.iface.IStage"];
      }(t.desktop || (t.desktop = {}));
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$display$Sprite) {
        _inherits(s, _e$display$Sprite);

        function s(t) {
          var _this145;

          _classCallCheck(this, s);

          if (null != t && (null != t.__interfaces && t.__interfaces.indexOf("splashjs.animation.iface.IMovieClipData") >= 0 || null != t.constructor && null != t.constructor.__interfaces && t.constructor.__interfaces.indexOf("splashjs.animation.iface.IMovieClipData") >= 0) || null === t) {
            _this145 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "movieClip")), void 0 === _this145.movieClipsData && (_this145.movieClipsData = null), _this145.frameRate = 10, void 0 === _this145.movieClipsData && (_this145.movieClipsData = null), function () {
              _this145.movieClipsData = [], _this145.movieClipsData.push(t), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this145)).call(_assertThisInitialized(_this145), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this145))), _this145.init();
            }();
          } else {
            if (!(null != t && _instanceof(t, Array) || null === t)) throw new Error("invalid overload");
            {
              var _t39 = arguments[0];
              _this145 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "movieClip")), void 0 === _this145.movieClipsData && (_this145.movieClipsData = null), _this145.frameRate = 10, void 0 === _this145.movieClipsData && (_this145.movieClipsData = null), function () {
                _this145.movieClipsData = _t39, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this145)).call(_assertThisInitialized(_this145), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this145))), _this145.init();
              }();
            }
          }

          return _possibleConstructorReturn(_this145);
        }

        _createClass(s, [{
          key: "init",
          value: function init() {
            this.getAllLabels().length > 0 && this.gotoAndStop(this.getAllLabels()[0]);
          }
        }, {
          key: "getMovieClipDataByLabel",
          value: function getMovieClipDataByLabel(e) {
            var t = null;

            for (var r = 0; r < this.movieClipsData.length; r++) {
              if (s = this.movieClipsData[r].getLabel(), i = e, s.toUpperCase() === (null === i ? i : i.toUpperCase())) {
                t = this.movieClipsData[r];
                break;
              }
            }

            var s, i;
            return t;
          }
        }, {
          key: "setFrameRate",
          value: function setFrameRate(e) {
            this.frameRate = e;
          }
        }, {
          key: "getFrameRate",
          value: function getFrameRate() {
            return this.frameRate;
          }
        }, {
          key: "gotoAndStop",
          value: function gotoAndStop(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).gotoAndStop(e, t);
          }
        }, {
          key: "gotoAndPlay",
          value: function gotoAndPlay(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

            _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).gotoAndPlay(e, t);
          }
        }, {
          key: "getCurrentLabel",
          value: function getCurrentLabel() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getCurrentLabel();
          }
        }, {
          key: "getCurrentFrameIndex",
          value: function getCurrentFrameIndex() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getCurrentFrameIndex();
          }
        }, {
          key: "isPlaying$",
          value: function isPlaying$() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).isPlaying();
          }
        }, {
          key: "isPlaying$java_lang_String",
          value: function isPlaying$java_lang_String(e) {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).isPlaying$java_lang_String(e);
          }
        }, {
          key: "isPlaying",
          value: function isPlaying(e) {
            if ("string" == typeof e || null === e) return this.isPlaying$java_lang_String(e);
            if (void 0 === e) return this.isPlaying$();
            throw new Error("invalid overload");
          }
        }, {
          key: "getCurrentLoopCount",
          value: function getCurrentLoopCount() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getCurrentLoopCount();
          }
        }, {
          key: "isLooping",
          value: function isLooping() {
            return _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).isLooping();
          }
        }, {
          key: "getAllLabels",
          value: function getAllLabels() {
            var e = [];

            for (var _t40 = 0; _t40 < this.movieClipsData.length; _t40++) {
              e.push(this.movieClipsData[_t40].getLabel());
            }

            return e;
          }
        }, {
          key: "play",
          value: function play() {
            _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).play();
          }
        }, {
          key: "stop",
          value: function stop() {
            _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).stop();
          }
        }]);

        return s;
      }(e.display.Sprite);

      t.MovieClip = s, s.__class = "splashjs.display.MovieClip", s.__interfaces = ["splashjs.display.iface.IDraggable", "splashjs.display.iface.IDisplayObject", "splashjs.display.iface.ISprite", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IBitmapDrawable", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.display.iface.IMovieClip", "splashjs.events.iface.IEventDispatcher"];
    }(e.display || (e.display = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$controls$Ba) {
          _inherits(s, _e$render$controls$Ba);

          function s(t) {
            var _this146;

            _classCallCheck(this, s);

            _this146 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this146.htmlInputElement && (_this146.htmlInputElement = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this146)).call(_assertThisInitialized(_this146), t), _this146.htmlInputElement = document.createElement("input"), _this146.htmlInputElement.type = "button", _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this146)).call(_assertThisInitialized(_this146), new e.render.RenderElement(_this146.htmlInputElement));
            return _this146;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {
              this.setText();
            }
          }, {
            key: "setText",
            value: function setText() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getText();

              null != e && (this.htmlInputElement.value = e);
            }
          }]);

          return s;
        }(e.render.controls.BaseTextRenderer);

        t.ButtonRenderer = s, s.__class = "splashjs.render.controls.ButtonRenderer", s.__interfaces = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.controls.iface.IBaseTextRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.controls.iface.IButtonRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.controls || (t.controls = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$controls$Ba2) {
          _inherits(s, _e$render$controls$Ba2);

          function s(t) {
            var _this147;

            _classCallCheck(this, s);

            _this147 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this147.htmlParagraphElement && (_this147.htmlParagraphElement = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this147)).call(_assertThisInitialized(_this147), t), _this147.htmlParagraphElement = document.createElement("p"), _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this147)).call(_assertThisInitialized(_this147), new e.render.RenderElement(_this147.htmlParagraphElement)), _this147.create();
            return _this147;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {
              _get(_getPrototypeOf(s.prototype), "setText", this).call(this);
            }
          }]);

          return s;
        }(e.render.controls.BaseTextRenderer);

        t.LabelRenderer = s, s.__class = "splashjs.render.controls.LabelRenderer", s.__interfaces = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.controls.iface.IBaseTextRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.controls.iface.ILabelRenderer"];
      }(t.controls || (t.controls = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$controls$Ba3) {
          _inherits(s, _e$render$controls$Ba3);

          function s() {
            _classCallCheck(this, s);

            return _possibleConstructorReturn(this, _getPrototypeOf(s).call(this));
          }

          _createClass(s, [{
            key: "createEventListeners",
            value: function createEventListeners() {
              _get(_getPrototypeOf(s.prototype), "createEventListeners", this).call(this), _get(_getPrototypeOf(s.prototype), "getDOMElement", this).call(this).addEventListener(e.render.HTMLDomEventName.SELECT, function (e) {});
            }
          }, {
            key: "setPlaceHolderText",
            value: function setPlaceHolderText() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getPlaceHolderText();

              null != e ? _get(_getPrototypeOf(s.prototype), "getDOMElement", this).call(this).setAttribute("placeHolder", e) : _get(_getPrototypeOf(s.prototype), "getDOMElement", this).call(this).setAttribute("placeHolder", "");
            }
          }, {
            key: "setMaxChars",
            value: function setMaxChars() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getMaxChars();

              e >= 1 && _get(_getPrototypeOf(s.prototype), "getDOMElement", this).call(this).setAttribute("maxLength", e + "");
            }
          }, {
            key: "setEditable",
            value: function setEditable() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getEditable();

              !0 === e ? _get(_getPrototypeOf(s.prototype), "getDOMElement", this).call(this).removeAttribute("readOnly") : !1 === e && _get(_getPrototypeOf(s.prototype), "getDOMElement", this).call(this).setAttribute("readOnly", "readonly");
            }
          }]);

          return s;
        }(e.render.controls.BaseTextRenderer);

        t.BaseInputRenderer = s, s.__class = "splashjs.render.controls.BaseInputRenderer", s.__interfaces = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.controls.iface.IBaseTextRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.controls.iface.IBaseInputRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.controls || (t.controls = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$controls$Ba4) {
          _inherits(s, _e$render$controls$Ba4);

          function s(t) {
            var _this148;

            _classCallCheck(this, s);

            _this148 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this148.htmlSelectElement && (_this148.htmlSelectElement = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this148)).call(_assertThisInitialized(_this148), t), _this148.htmlSelectElement = document.createElement("select"), _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this148)).call(_assertThisInitialized(_this148), new e.render.RenderElement(_this148.htmlSelectElement));
            return _this148;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {}
          }, {
            key: "addItem",
            value: function addItem(e) {
              var t = document.createElement("option");
              t.text = e.getText(), this.htmlSelectElement.add(t);
            }
          }, {
            key: "addItemGroup",
            value: function addItemGroup(e) {
              var t = document.createElement("optgroup");
              t.label = e.getTitle();
              var s = e.getAllItems(),
                  i = null,
                  r = null;

              for (var _e26 = 0; _e26 < s.length; _e26++) {
                r = s[_e26], i = document.createElement("option"), i.text = r.getText(), t.appendChild(i);
              }

              this.htmlSelectElement.add(t);
            }
          }, {
            key: "addAllItems",
            value: function addAllItems() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getAllItems(),
                  t = null;

              console.info(e.length);

              for (var _s34 = 0; _s34 < e.length; _s34++) {
                t = e[_s34], null != t && (null != t.__interfaces && t.__interfaces.indexOf("splashjs.controls.iface.IItem") >= 0 || null != t.constructor && null != t.constructor.__interfaces && t.constructor.__interfaces.indexOf("splashjs.controls.iface.IItem") >= 0) ? this.addItem(t) : null != t && (null != t.__interfaces && t.__interfaces.indexOf("splashjs.controls.iface.IItemGroup") >= 0 || null != t.constructor && null != t.constructor.__interfaces && t.constructor.__interfaces.indexOf("splashjs.controls.iface.IItemGroup") >= 0) && this.addItemGroup(t);
              }
            }
          }]);

          return s;
        }(e.render.controls.BaseListRenderer);

        t.ListRenderer = s, s.__class = "splashjs.render.controls.ListRenderer", s.__interfaces = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.controls.iface.IListRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.controls.iface.IBaseListRenderer"];
      }(t.controls || (t.controls = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$display$Spr) {
          _inherits(s, _e$render$display$Spr);

          function s(e) {
            var _this149;

            _classCallCheck(this, s);

            _this149 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, e)), _this149.count = 0, _this149.currentLoopCount = 0, _this149.loopCount = 1, _this149.playing = !1, _this149.currentLabel = null, _this149.currentFrameIndex = -1, void 0 === _this149.spanElement && (_this149.spanElement = null), void 0 === _this149.movieClip && (_this149.movieClip = null), void 0 === _this149.timer && (_this149.timer = null), _this149.movieClip = _get(_getPrototypeOf(s.prototype), "getRenderObject", _assertThisInitialized(_this149)).call(_assertThisInitialized(_this149)), _this149.spanElement = _get(_getPrototypeOf(s.prototype), "getDOMElement", _assertThisInitialized(_this149)).call(_assertThisInitialized(_this149)), _this149.create();
            return _this149;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {}
          }, {
            key: "gotoAndStop",
            value: function gotoAndStop(e, t) {
              this.stop();
              var s = this.movieClip.getMovieClipDataByLabel(e),
                  i = s.getSpriteSheet(),
                  r = i.getImagePath(),
                  n = i.getResource(),
                  a = "";
              a = null != n ? n.getResourceBase64() : i.getImageBase64();
              var l = s.getFrames();
              l.length;
              this.spanElement.style.width = l[t].getWidth() + this.UNIT, this.spanElement.style.height = l[t].getHeight() + this.UNIT, this.spanElement.style.backgroundImage = 'url("' + r + '")';
              var o = l[t].getIndex(),
                  h = l[t].getWidth(),
                  u = l[t].getHeight(),
                  d = i.getWidth() / h | 0,
                  c = (i.getHeight(), -o % d * h),
                  p = -(o / d | 0) * u;
              this.spanElement.style.backgroundPosition = c + this.UNIT + " " + p + this.UNIT, this.currentLabel = e, this.currentFrameIndex = t;
            }
          }, {
            key: "gotoAndPlay",
            value: function gotoAndPlay(t, s) {
              var _this150 = this;

              this.stop(), this.loopCount = s;
              var i = this.movieClip.getMovieClipDataByLabel(t),
                  r = i.getSpriteSheet(),
                  n = r.getImagePath(),
                  a = i.getFrames(),
                  l = a.length;
              if (l <= 1) return void this.gotoAndStop(t, 0);
              var o = r.getResource(),
                  h = "";
              h = null != o ? o.getResourceBase64() : r.getImageBase64(), this.spanElement.style.width = a[0].getWidth() + this.UNIT, this.spanElement.style.height = a[0].getHeight() + this.UNIT, this.spanElement.style.backgroundImage = 'url("' + n + '")';
              var u = 1e3 / this.movieClip.getFrameRate() | 0;
              this.count = 0, this.currentLoopCount = 0, this.timer = new e.utils.Timer(u), this.timer.addEventListener(e.events.TimerEvent.TIMER, function (e, t, i) {
                return function (r) {
                  requestAnimationFrame(function (n) {
                    var a = e[_this150.count].getIndex(),
                        l = e[_this150.count].getWidth(),
                        o = e[_this150.count].getHeight(),
                        h = t.getWidth() / l | 0,
                        u = (t.getHeight(), -a % h * l),
                        d = -(a / h | 0) * o;

                    _this150.spanElement.style.width = l + _this150.UNIT, _this150.spanElement.style.height = o + _this150.UNIT, _this150.spanElement.style.backgroundPosition = u + _this150.UNIT + " " + d + _this150.UNIT, _this150.currentFrameIndex = _this150.count, _this150.count === i - 1 ? (_this150.currentLoopCount += 1, _this150.count = 0, 0 !== s && _this150.currentLoopCount >= s && (_this150.currentLoopCount = -1, r.getCurrentTarget().reset(), _this150.playing = !1)) : _this150.count += 1;
                  });
                };
              }(a, r, l)), this.timer.start(), this.currentLabel = t, this.playing = !0;
            }
          }, {
            key: "stop",
            value: function stop() {
              null != this.timer && (this.timer.stop(), this.playing = !1);
            }
          }, {
            key: "play",
            value: function play() {}
          }, {
            key: "getBackgroundPositionCSSText",
            value: function getBackgroundPositionCSSText() {
              return null;
            }
          }, {
            key: "isPlaying$",
            value: function isPlaying$() {
              return this.playing;
            }
          }, {
            key: "isPlaying$java_lang_String",
            value: function isPlaying$java_lang_String(e) {
              var t = !1;
              var s, i;
              return null != this.currentLabel && (s = this.currentLabel, i = e, s.toUpperCase() === (null === i ? i : i.toUpperCase())) && !0 === this.playing && (t = !0), t;
            }
          }, {
            key: "isPlaying",
            value: function isPlaying(e) {
              if ("string" == typeof e || null === e) return this.isPlaying$java_lang_String(e);
              if (void 0 === e) return this.isPlaying$();
              throw new Error("invalid overload");
            }
          }, {
            key: "getCurrentLabel",
            value: function getCurrentLabel() {
              return this.currentLabel;
            }
          }, {
            key: "getCurrentFrameIndex",
            value: function getCurrentFrameIndex() {
              return this.currentFrameIndex;
            }
          }, {
            key: "isLooping",
            value: function isLooping() {
              var e = !1;
              return 0 === this.loopCount && !0 === this.playing && (e = !0), e;
            }
          }, {
            key: "getCurrentLoopCount",
            value: function getCurrentLoopCount() {
              return this.currentLoopCount;
            }
          }]);

          return s;
        }(e.render.display.SpriteRenderer);

        t.MovieClipRenderer = s, s.__class = "splashjs.render.display.MovieClipRenderer", s.__interfaces = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.display.iface.IMovieClipRenderer", "splashjs.render.display.iface.ISpriteRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.display.iface.IDisplayObjectContainerRenderer"];
      }(t.display || (t.display = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$controls$BaseInput) {
        _inherits(s, _e$controls$BaseInput);

        function s() {
          var _this151;

          _classCallCheck(this, s);

          _this151 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "textInput")), _this151.displayAsPassword = !1, _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this151)).call(_assertThisInitialized(_this151), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this151)));
          return _this151;
        }

        _createClass(s, [{
          key: "setDisplayAsPassword",
          value: function setDisplayAsPassword(e) {
            this.displayAsPassword = e;
          }
        }, {
          key: "getDisplayAsPassword",
          value: function getDisplayAsPassword() {
            return this.displayAsPassword;
          }
        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            var s, i;
            return s = t.getType(), i = e.events.Event.ADDED_TO_STAGE, s.toUpperCase() === (null === i ? i : i.toUpperCase()) && (this.originalWidth = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalWidth(), this.originalHeight = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalHeight(), 0 === this.width && 0 !== this.originalWidth && _get(_getPrototypeOf(s.prototype), "setWidth", this).call(this, this.originalWidth), 0 === this.height && 0 !== this.originalHeight && _get(_getPrototypeOf(s.prototype), "setHeight", this).call(this, this.originalHeight)), _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);
          }
        }, {
          key: "setText",
          value: function setText(e) {
            this.text = e, null != _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this) && _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setText();
          }
        }, {
          key: "render",
          value: function render() {
            _get(_getPrototypeOf(s.prototype), "render", this).call(this), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setDisplayAsPassword(), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setText();
          }
        }]);

        return s;
      }(e.controls.BaseInput);

      t.TextInput = s, s.__class = "splashjs.controls.TextInput", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.controls.iface.IBaseInput", "splashjs.display.iface.IInteractiveObject", "splashjs.controls.iface.ITextInput", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseText"];
    }(e.controls || (e.controls = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      var s = /*#__PURE__*/function (_e$controls$BaseInput2) {
        _inherits(s, _e$controls$BaseInput2);

        function s() {
          var _this152;

          _classCallCheck(this, s);

          _this152 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this, "textArea")), _get(_getPrototypeOf(s.prototype), "setRenderer", _assertThisInitialized(_this152)).call(_assertThisInitialized(_this152), e.Global.global_$LI$().getRendererCreator().createRenderer(s, _assertThisInitialized(_this152)));
          return _this152;
        }

        _createClass(s, [{
          key: "dispatchEvent",
          value: function dispatchEvent(t) {
            var s, i;
            return s = t.getType(), i = e.events.Event.ADDED_TO_STAGE, s.toUpperCase() === (null === i ? i : i.toUpperCase()) && (this.originalWidth = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalWidth(), this.originalHeight = _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).getOriginalHeight(), 0 === this.width && 0 !== this.originalWidth && _get(_getPrototypeOf(s.prototype), "setWidth", this).call(this, this.originalWidth), 0 === this.height && 0 !== this.originalHeight && _get(_getPrototypeOf(s.prototype), "setHeight", this).call(this, this.originalHeight)), _get(_getPrototypeOf(s.prototype), "dispatchEvent", this).call(this, t);
          }
        }, {
          key: "render",
          value: function render() {
            _get(_getPrototypeOf(s.prototype), "render", this).call(this), _get(_getPrototypeOf(s.prototype), "getRenderer", this).call(this).setResize("none");
          }
        }]);

        return s;
      }(e.controls.BaseInput);

      t.TextArea = s, s.__class = "splashjs.controls.TextArea", s.__interfaces = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IBitmapDrawable", "splashjs.controls.iface.IBaseInput", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.ITextArea", "splashjs.controls.iface.IBaseText"];
    }(e.controls || (e.controls = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$controls$Ba5) {
          _inherits(s, _e$render$controls$Ba5);

          function s(t) {
            var _this153;

            _classCallCheck(this, s);

            _this153 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this153.htmlInputElement && (_this153.htmlInputElement = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this153)).call(_assertThisInitialized(_this153), t), _this153.htmlInputElement = document.createElement("input"), _this153.htmlInputElement.type = "text", _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this153)).call(_assertThisInitialized(_this153), new e.render.RenderElement(_this153.htmlInputElement));
            return _this153;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {}
          }, {
            key: "setDisplayAsPassword",
            value: function setDisplayAsPassword() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getDisplayAsPassword();

              !0 === e ? this.htmlInputElement.type = "password" : !1 === e && (this.htmlInputElement.type = "text");
            }
          }, {
            key: "setSelection",
            value: function setSelection() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getSelectionBeginIndex(),
                  t = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getSelectionEndIndex();

              this.htmlInputElement.focus(), this.htmlInputElement.setSelectionRange(e, t);
            }
          }, {
            key: "setText",
            value: function setText() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getText();

              this.htmlInputElement.value = null != e ? e : "";
            }
          }]);

          return s;
        }(e.render.controls.BaseInputRenderer);

        t.TextInputRenderer = s, s.__class = "splashjs.render.controls.TextInputRenderer", s.__interfaces = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.controls.iface.IBaseTextRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.controls.iface.ITextInputRenderer", "splashjs.render.controls.iface.IBaseInputRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
      }(t.controls || (t.controls = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), function (e) {
    !function (t) {
      !function (t) {
        var s = /*#__PURE__*/function (_e$render$controls$Ba6) {
          _inherits(s, _e$render$controls$Ba6);

          function s(t) {
            var _this154;

            _classCallCheck(this, s);

            _this154 = _possibleConstructorReturn(this, _getPrototypeOf(s).call(this)), void 0 === _this154.htmlTextAreaElement && (_this154.htmlTextAreaElement = null), _get(_getPrototypeOf(s.prototype), "setRenderObject", _assertThisInitialized(_this154)).call(_assertThisInitialized(_this154), t), _this154.htmlTextAreaElement = document.createElement("textarea"), _get(_getPrototypeOf(s.prototype), "setRenderElement", _assertThisInitialized(_this154)).call(_assertThisInitialized(_this154), new e.render.RenderElement(_this154.htmlTextAreaElement));
            return _this154;
          }

          _createClass(s, [{
            key: "create",
            value: function create() {}
          }, {
            key: "setSelection",
            value: function setSelection() {
              var e = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getSelectionBeginIndex(),
                  t = _get(_getPrototypeOf(s.prototype), "getRenderObject", this).call(this).getSelectionEndIndex();

              this.htmlTextAreaElement.focus(), this.htmlTextAreaElement.setSelectionRange(e, t);
            }
          }]);

          return s;
        }(e.render.controls.BaseInputRenderer);

        t.TextAreaRenderer = s, s.__class = "splashjs.render.controls.TextAreaRenderer", s.__interfaces = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.controls.iface.IBaseTextRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.controls.iface.IBaseInputRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.controls.iface.ITextAreaRenderer"];
      }(t.controls || (t.controls = {}));
    }(e.render || (e.render = {}));
  }(splashjs || (splashjs = {})), splashjs.text.Font.fonts_$LI$(), splashjs.Global.global_$LI$(), splashjs.utils.Color.LIGHT_GRAY_$LI$(), splashjs.utils.Color.VIOLET_$LI$(), splashjs.utils.Color.AQUA_$LI$(), splashjs.utils.Color.SLATE_BLUE_$LI$(), splashjs.utils.Color.GRAY_$LI$(), splashjs.utils.Color.MEDIUM_SEA_GREEN_$LI$(), splashjs.utils.Color.DODGER_BLUE_$LI$(), splashjs.utils.Color.ORANGE_$LI$(), splashjs.utils.Color.TOMATO_$LI$(), splashjs.utils.Color.WHITE_$LI$(), splashjs.utils.Color.BLACK_$LI$(), splashjs.utils.Color.RED_$LI$(), splashjs.utils.Color.YELLOW_$LI$(), splashjs.utils.Color.GREEN_$LI$(), splashjs.utils.Color.NONE_$LI$(), splashjs.ui.MouseCursor.ZOOM_OUT_$LI$(), splashjs.ui.MouseCursor.ZOOM_IN_$LI$(), splashjs.ui.MouseCursor.WAIT_$LI$(), splashjs.ui.MouseCursor.W_RESIZE_$LI$(), splashjs.ui.MouseCursor.TEXT_$LI$(), splashjs.ui.MouseCursor.SW_RESIZE_$LI$(), splashjs.ui.MouseCursor.SE_RESIZE_$LI$(), splashjs.ui.MouseCursor.S_RESIZE_$LI$(), splashjs.ui.MouseCursor.ROW_RESIZE_$LI$(), splashjs.ui.MouseCursor.PROGRESS_$LI$(), splashjs.ui.MouseCursor.POINTER_$LI$(), splashjs.ui.MouseCursor.NOT_ALLOWED_$LI$(), splashjs.ui.MouseCursor.NO_DROP_$LI$(), splashjs.ui.MouseCursor.NWSE_RESIZE_$LI$(), splashjs.ui.MouseCursor.NW_RESIZE_$LI$(), splashjs.ui.MouseCursor.NS_RESIZE_$LI$(), splashjs.ui.MouseCursor.NESW_RESIZE_$LI$(), splashjs.ui.MouseCursor.NE_RESIZE_$LI$(), splashjs.ui.MouseCursor.N_RESIZE_$LI$(), splashjs.ui.MouseCursor.MOVE_$LI$(), splashjs.ui.MouseCursor.HELP_$LI$(), splashjs.ui.MouseCursor.GRABBING_$LI$(), splashjs.ui.MouseCursor.GRAB_$LI$(), splashjs.ui.MouseCursor.EW_RESIZE_$LI$(), splashjs.ui.MouseCursor.E_RESIZE_$LI$(), splashjs.ui.MouseCursor.DEFAULT_$LI$(), splashjs.ui.MouseCursor.CROSSHAIR_$LI$(), splashjs.ui.MouseCursor.COPY_$LI$(), splashjs.ui.MouseCursor.COL_RESIZE_$LI$(), splashjs.ui.MouseCursor.CONTEXT_MENU_$LI$(), splashjs.ui.MouseCursor.CELL_$LI$(), splashjs.ui.MouseCursor.AUTO_$LI$(), splashjs.ui.MouseCursor.ALL_SCROLL_$LI$(), splashjs.ui.MouseCursor.ALIAS_$LI$(), splashjs.Import.packageName_$LI$(), splashjs.Import.className_$LI$(), splashjs.Class.classes_$LI$(), splashjs.Package.packageData_$LI$();
}, function (e, t, s) {
  "use strict";

  s.r(t);
  var i = s(0),
      r = s.p + "f12a8de4af28be0f7bb909251c5bd4ef.png",
      n = (i.a.animation.Transition, i.a.animation.TransitionType, i.a.animation.easing.Linear, i.a.events.Event);
  i.a.utils.Color, i.a.utils.ResourceLoader, i.a.utils.Resource, i.a.utils.ResourceType, i.a.display.Shape;

  var a = /*#__PURE__*/function (_i$a$display$Sprite) {
    _inherits(a, _i$a$display$Sprite);

    function a() {
      var _this155;

      _classCallCheck(this, a);

      _this155 = _possibleConstructorReturn(this, _getPrototypeOf(a).call(this)), _this155.spriteSheet = new i.a.animation.SpriteSheet(r), _this155.spriteSheet.defineMovieClip("walk", 291, 477, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21), _this155.walkMovieClip = _this155.spriteSheet.getMovieClip("walk"), _this155.walkMovieClip.setXY(270, 195), _this155.walkMovieClip.setRegXY(145, 238), _this155.walkMovieClip.setScaleXY(.8, .8), _this155.walkMovieClip.setFrameRate(24), _this155.walkMovieClip.gotoAndPlay("walk", 0), _this155.addChild(_this155.walkMovieClip), _this155.addEventListener(n.ADDED_TO_STAGE, function (e) {});
      return _this155;
    }

    return a;
  }(i.a.display.Sprite);

  i.a.SplashJS.render(a, "myDiv", 600, 400);
}]);