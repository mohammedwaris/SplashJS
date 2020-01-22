var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var splashjs;
(function (splashjs) {
    var controls;
    (function (controls) {
        var BaseItem = /** @class */ (function () {
            function BaseItem() {
            }
            return BaseItem;
        }());
        controls.BaseItem = BaseItem;
        BaseItem["__class"] = "splashjs.controls.BaseItem";
        BaseItem["__interfaces"] = ["splashjs.controls.iface.IBaseItem"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        var LabelAlignment = /** @class */ (function () {
            function LabelAlignment() {
            }
            LabelAlignment.TOP = "top";
            LabelAlignment.BOTTOM = "bottom";
            LabelAlignment.LEFT = "left";
            LabelAlignment.RIGHT = "right";
            return LabelAlignment;
        }());
        controls.LabelAlignment = LabelAlignment;
        LabelAlignment["__class"] = "splashjs.controls.LabelAlignment";
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        var RadioButtonGroup = /** @class */ (function () {
            function RadioButtonGroup(name) {
                /*private*/ this.radioButtons = ([]);
                /*private*/ this.eventHandlers = ([]);
                if (this.name === undefined)
                    this.name = null;
                this.name = name;
            }
            RadioButtonGroup.prototype.getName = function () {
                return this.name;
            };
            RadioButtonGroup.prototype.getNumRadioButtons = function () {
                return /* size */ this.radioButtons.length;
            };
            RadioButtonGroup.prototype.getSelectedData = function () {
                return this.getSelection().getValue();
            };
            RadioButtonGroup.prototype.setSelection = function (selection) {
                var radioButton = null;
                for (var i = 0; i < /* size */ this.radioButtons.length; i++) {
                    {
                        radioButton = /* get */ this.radioButtons[i];
                        if (radioButton === selection) {
                            this.setAllSelected(false);
                            radioButton.setSelected(true);
                            break;
                        }
                    }
                    ;
                }
            };
            RadioButtonGroup.prototype.getSelection = function () {
                var selectedRadioButton = null;
                var radioButton = null;
                for (var i = 0; i < /* size */ this.radioButtons.length; i++) {
                    {
                        radioButton = /* get */ this.radioButtons[i];
                        if (radioButton.getSelected() === true) {
                            selectedRadioButton = radioButton;
                            break;
                        }
                    }
                    ;
                }
                return selectedRadioButton;
            };
            RadioButtonGroup.prototype.addRadioButton = function (radioButton) {
                var _this = this;
                var eventHandler = function (event) {
                    _this.setAllSelected(false);
                    event.getCurrentTarget().setSelected(true);
                };
                radioButton.addEventListener(splashjs.events.MouseEvent.CLICK, (eventHandler));
                radioButton.setGroup(this);
                /* add */ (this.radioButtons.push(radioButton) > 0);
                /* add */ (this.eventHandlers.push(eventHandler) > 0);
            };
            RadioButtonGroup.prototype.removeRadioButton = function (radioButton) {
                var pos = -1;
                for (var i = 0; i < /* size */ this.radioButtons.length; i++) {
                    {
                        if (radioButton === /* get */ this.radioButtons[i]) {
                            pos = i;
                            break;
                        }
                    }
                    ;
                }
                if (pos >= 0) {
                    /* get */ this.radioButtons[pos].setGroup(null);
                    /* get */ this.radioButtons[pos].removeEventListener(splashjs.events.MouseEvent.CLICK, ( /* get */this.eventHandlers[pos]));
                    /* remove */ this.radioButtons.splice(pos, 1)[0];
                    /* remove */ this.eventHandlers.splice(pos, 1)[0];
                }
            };
            /*private*/ RadioButtonGroup.prototype.setAllSelected = function (selected) {
                for (var i = 0; i < /* size */ this.radioButtons.length; i++) {
                    {
                        /* get */ this.radioButtons[i].setSelected(selected);
                    }
                    ;
                }
            };
            return RadioButtonGroup;
        }());
        controls.RadioButtonGroup = RadioButtonGroup;
        RadioButtonGroup["__class"] = "splashjs.controls.RadioButtonGroup";
        RadioButtonGroup["__interfaces"] = ["splashjs.controls.iface.IRadioButtonGroup"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var NativeWindow = /** @class */ (function () {
            function NativeWindow(initOptions) {
                var _this = this;
                if (((initOptions != null && initOptions instanceof splashjs.display.NativeWindowInitOptions) || initOptions === null)) {
                    var __args = arguments;
                    if (this.initOptions === undefined)
                        this.initOptions = null;
                    if (this.nativeWindowStub === undefined)
                        this.nativeWindowStub = null;
                    if (this.initOptions === undefined)
                        this.initOptions = null;
                    if (this.nativeWindowStub === undefined)
                        this.nativeWindowStub = null;
                    (function () {
                        _this.initOptions = initOptions;
                        _this.nativeWindowStub = splashjs.display.desktop.stubs.NativeWindowStub.newInstance();
                    })();
                }
                else if (initOptions === undefined) {
                    var __args = arguments;
                    {
                        var __args_1 = arguments;
                        var initOptions_1 = new splashjs.display.NativeWindowInitOptions();
                        if (this.initOptions === undefined)
                            this.initOptions = null;
                        if (this.nativeWindowStub === undefined)
                            this.nativeWindowStub = null;
                        if (this.initOptions === undefined)
                            this.initOptions = null;
                        if (this.nativeWindowStub === undefined)
                            this.nativeWindowStub = null;
                        (function () {
                            _this.initOptions = initOptions_1;
                            _this.nativeWindowStub = splashjs.display.desktop.stubs.NativeWindowStub.newInstance();
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
            }
            NativeWindow.prototype.activate = function () {
                this.nativeWindowStub.show();
            };
            NativeWindow.prototype.getStage = function () {
                return this.nativeWindowStub.getStage();
            };
            return NativeWindow;
        }());
        display.NativeWindow = NativeWindow;
        NativeWindow["__class"] = "splashjs.display.NativeWindow";
        NativeWindow["__interfaces"] = ["splashjs.display.desktop.iface.INativeWindow"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var NativeWindowDisplayState = /** @class */ (function () {
            function NativeWindowDisplayState() {
            }
            NativeWindowDisplayState.MAXIMIZED = "maximized";
            NativeWindowDisplayState.MINIMIZED = "minimized";
            NativeWindowDisplayState.NORMAL = "normal";
            return NativeWindowDisplayState;
        }());
        display.NativeWindowDisplayState = NativeWindowDisplayState;
        NativeWindowDisplayState["__class"] = "splashjs.display.NativeWindowDisplayState";
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var NativeWindowInitOptions = /** @class */ (function () {
            function NativeWindowInitOptions() {
                /*private*/ this.maximizable = true;
                /*private*/ this.minimizable = true;
                /*private*/ this.owner = null;
                /*private*/ this.renderMode = null;
                /*private*/ this.resizable = true;
                /*private*/ this.systemChrome = splashjs.display.NativeWindowSystemChrome.STANDARD;
                /*private*/ this.transparent = false;
                /*private*/ this.type = splashjs.display.NativeWindowType.NORMAL;
            }
            NativeWindowInitOptions.prototype.setMaximizable = function (maximizable) {
                this.maximizable = maximizable;
            };
            NativeWindowInitOptions.prototype.getMaximizable = function () {
                return this.maximizable;
            };
            NativeWindowInitOptions.prototype.setMinizable = function (minimizable) {
                this.minimizable = minimizable;
            };
            NativeWindowInitOptions.prototype.setOwner = function (owner) {
                this.owner = owner;
            };
            NativeWindowInitOptions.prototype.getOwner = function () {
                return this.owner;
            };
            return NativeWindowInitOptions;
        }());
        display.NativeWindowInitOptions = NativeWindowInitOptions;
        NativeWindowInitOptions["__class"] = "splashjs.display.NativeWindowInitOptions";
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var NativeWindowRenderMode = /** @class */ (function () {
            function NativeWindowRenderMode() {
            }
            NativeWindowRenderMode.AUTO = "auto";
            NativeWindowRenderMode.CPU = "cpu";
            NativeWindowRenderMode.DIRECT = "direct";
            NativeWindowRenderMode.GPU = "gpu";
            return NativeWindowRenderMode;
        }());
        display.NativeWindowRenderMode = NativeWindowRenderMode;
        NativeWindowRenderMode["__class"] = "splashjs.display.NativeWindowRenderMode";
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var NativeWindowResize = /** @class */ (function () {
            function NativeWindowResize() {
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
            return NativeWindowResize;
        }());
        display.NativeWindowResize = NativeWindowResize;
        NativeWindowResize["__class"] = "splashjs.display.NativeWindowResize";
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var NativeWindowSystemChrome = /** @class */ (function () {
            function NativeWindowSystemChrome() {
            }
            NativeWindowSystemChrome.ALTERNATE = "alternate";
            NativeWindowSystemChrome.NONE = "none";
            NativeWindowSystemChrome.STANDARD = "standard";
            return NativeWindowSystemChrome;
        }());
        display.NativeWindowSystemChrome = NativeWindowSystemChrome;
        NativeWindowSystemChrome["__class"] = "splashjs.display.NativeWindowSystemChrome";
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var NativeWindowType = /** @class */ (function () {
            function NativeWindowType() {
            }
            NativeWindowType.LIGHTWEIGHT = "lightweight";
            NativeWindowType.NORMAL = "normal";
            NativeWindowType.UTILITY = "utility";
            return NativeWindowType;
        }());
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
                var NativeWindowStub = /** @class */ (function () {
                    function NativeWindowStub() {
                    }
                    NativeWindowStub.newInstance = function () {
                        return new NativeWindowStub();
                    };
                    NativeWindowStub.prototype.show = function () {
                    };
                    NativeWindowStub.prototype.getStage = function () {
                        return null;
                    };
                    return NativeWindowStub;
                }());
                stubs.NativeWindowStub = NativeWindowStub;
                NativeWindowStub["__class"] = "splashjs.display.desktop.stubs.NativeWindowStub";
            })(stubs = desktop.stubs || (desktop.stubs = {}));
        })(desktop = display.desktop || (display.desktop = {}));
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var StageAlign = /** @class */ (function () {
            function StageAlign() {
            }
            StageAlign.BOTTOM = "bottom";
            StageAlign.BOTTOM_LEFT = "bottom_left";
            StageAlign.BOTTOM_RIGHT = "bottom_right";
            StageAlign.LEFT = "left";
            StageAlign.RIGHT = "right";
            StageAlign.TOP = "top";
            StageAlign.TOP_LEFT = "top_left";
            StageAlign.TOP_RIGHT = "top_right";
            return StageAlign;
        }());
        display.StageAlign = StageAlign;
        StageAlign["__class"] = "splashjs.display.StageAlign";
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var StageScaleMode = /** @class */ (function () {
            function StageScaleMode() {
            }
            StageScaleMode.EXACT_FIT = "excat_fit";
            StageScaleMode.NO_BORDER = "no_border";
            StageScaleMode.NO_SCALE = "no_scale";
            StageScaleMode.SHOW_ALL = "show_all";
            return StageScaleMode;
        }());
        display.StageScaleMode = StageScaleMode;
        StageScaleMode["__class"] = "splashjs.display.StageScaleMode";
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        var Event = /** @class */ (function () {
            function Event(type, target, currentTarget) {
                var _this = this;
                if (((typeof type === 'string') || type === null) && ((target != null && (target["__interfaces"] != null && target["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || target.constructor != null && target.constructor["__interfaces"] != null && target.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || target === null) && ((currentTarget != null && (currentTarget["__interfaces"] != null && currentTarget["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0 || currentTarget.constructor != null && currentTarget.constructor["__interfaces"] != null && currentTarget.constructor["__interfaces"].indexOf("splashjs.events.iface.IEventDispatcher") >= 0)) || currentTarget === null)) {
                    var __args = arguments;
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
                    (function () {
                        _this.type = type;
                        _this.target = target;
                        _this.currentTarget = currentTarget;
                    })();
                }
                else if (((typeof type === 'string') || type === null) && target === undefined && currentTarget === undefined) {
                    var __args = arguments;
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
                    (function () {
                        _this.type = type;
                    })();
                }
                else
                    throw new Error('invalid overload');
            }
            Event.prototype.getType = function () {
                return this.type;
            };
            Event.prototype.setTarget = function (target) {
                this.target = target;
            };
            Event.prototype.getTarget = function () {
                return this.target;
            };
            Event.prototype.setCurrentTarget = function (currentTarget) {
                this.currentTarget = currentTarget;
            };
            Event.prototype.getCurrentTarget = function () {
                return this.currentTarget;
            };
            Event.prototype.setData = function (data) {
                this.data = data;
            };
            Event.prototype.getData = function () {
                return this.data;
            };
            Event.prototype.toString = function () {
                var info = "[object " + /* getName */ (function (c) { return c["__class"] ? c["__class"] : c["name"]; })(this.constructor) + "]";
                return info;
            };
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
            return Event;
        }());
        events.Event = Event;
        Event["__class"] = "splashjs.events.Event";
        Event["__interfaces"] = ["splashjs.events.iface.IEvent"];
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        var EventName = /** @class */ (function () {
            function EventName() {
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
            return EventName;
        }());
        events.EventName = EventName;
        EventName["__class"] = "splashjs.events.EventName";
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filesystem;
    (function (filesystem) {
        var File = /** @class */ (function () {
            function File(path) {
                var _this = this;
                if (((typeof path === 'string') || path === null)) {
                    var __args = arguments;
                    if (this.fileStub === undefined)
                        this.fileStub = null;
                    if (this.path === undefined)
                        this.path = null;
                    if (this.fileStub === undefined)
                        this.fileStub = null;
                    if (this.path === undefined)
                        this.path = null;
                    (function () {
                        _this.path = path;
                        _this.fileStub = splashjs.filesystem.desktop.stubs.FileStub.newInstance();
                    })();
                }
                else if (path === undefined) {
                    var __args = arguments;
                    {
                        var __args_2 = arguments;
                        var path_1 = null;
                        if (this.fileStub === undefined)
                            this.fileStub = null;
                        if (this.path === undefined)
                            this.path = null;
                        if (this.fileStub === undefined)
                            this.fileStub = null;
                        if (this.path === undefined)
                            this.path = null;
                        (function () {
                            _this.path = path_1;
                            _this.fileStub = splashjs.filesystem.desktop.stubs.FileStub.newInstance();
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
            }
            File.prototype.browseForDirectory$java_lang_String = function (title) {
                this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(title, null);
            };
            File.prototype.browseForDirectory$java_lang_Object = function (stage) {
                this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(null, stage);
            };
            File.prototype.browseForDirectory$ = function () {
                this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(null, null);
            };
            File.prototype.browseForDirectory$java_lang_String$java_lang_Object = function (title, stage) {
                this.fileStub.browseForDirectory$java_lang_String$java_lang_Object(title, stage);
            };
            File.prototype.browseForDirectory = function (title, stage) {
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
            };
            return File;
        }());
        filesystem.File = File;
        File["__class"] = "splashjs.filesystem.File";
    })(filesystem = splashjs.filesystem || (splashjs.filesystem = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filesystem;
    (function (filesystem) {
        var FileMode = /** @class */ (function () {
            function FileMode() {
            }
            FileMode.APPEND = "append";
            FileMode.READ = "read";
            FileMode.UPDATE = "update";
            FileMode.WRITE = "write";
            return FileMode;
        }());
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
                var FileStub = /** @class */ (function () {
                    function FileStub(path) {
                        if (((typeof path === 'string') || path === null)) {
                            var __args = arguments;
                        }
                        else if (path === undefined) {
                            var __args = arguments;
                        }
                        else
                            throw new Error('invalid overload');
                    }
                    FileStub.newInstance = function () {
                        return new FileStub();
                    };
                    FileStub.prototype.browseForDirectory$java_lang_String = function (title) {
                    };
                    FileStub.prototype.browseForDirectory$java_lang_Object = function (stage) {
                    };
                    FileStub.prototype.browseForDirectory$ = function () {
                    };
                    FileStub.prototype.browseForDirectory$java_lang_String$java_lang_Object = function (title, stage) {
                    };
                    FileStub.prototype.browseForDirectory = function (title, stage) {
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
                    };
                    return FileStub;
                }());
                stubs.FileStub = FileStub;
                FileStub["__class"] = "splashjs.filesystem.desktop.stubs.FileStub";
            })(stubs = desktop.stubs || (desktop.stubs = {}));
        })(desktop = filesystem.desktop || (filesystem.desktop = {}));
    })(filesystem = splashjs.filesystem || (splashjs.filesystem = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filters;
    (function (filters) {
        var FilterType = /** @class */ (function () {
            function FilterType() {
            }
            FilterType.BLUR = "blur";
            FilterType.DROP_SHADOW = "drop_shadow";
            FilterType.GRAYSCALE = "grayscale";
            return FilterType;
        }());
        filters.FilterType = FilterType;
        FilterType["__class"] = "splashjs.filters.FilterType";
    })(filters = splashjs.filters || (splashjs.filters = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var geometry;
    (function (geometry) {
        var Point = /** @class */ (function () {
            function Point(x, y) {
                var _this = this;
                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null)) {
                    var __args = arguments;
                    if (this.x === undefined)
                        this.x = 0;
                    if (this.y === undefined)
                        this.y = 0;
                    if (this.x === undefined)
                        this.x = 0;
                    if (this.y === undefined)
                        this.y = 0;
                    (function () {
                        _this.x = x;
                        _this.y = y;
                    })();
                }
                else if (x === undefined && y === undefined) {
                    var __args = arguments;
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
            Point.prototype.setX = function (x) {
                this.x = x;
            };
            Point.prototype.getX = function () {
                return this.x;
            };
            Point.prototype.setY = function (y) {
                this.y = y;
            };
            Point.prototype.getY = function () {
                return this.y;
            };
            return Point;
        }());
        geometry.Point = Point;
        Point["__class"] = "splashjs.geometry.Point";
        Point["__interfaces"] = ["splashjs.geometry.iface.IPoint"];
    })(geometry = splashjs.geometry || (splashjs.geometry = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var Global = /** @class */ (function () {
        function Global() {
            /*private*/ this.application = null;
            /*private*/ this.rendererCreator = new splashjs.render.RendererCreator();
        }
        Global.global_$LI$ = function () { if (Global.global == null)
            Global.global = new Global(); return Global.global; };
        ;
        Global.prototype.getApplication = function () {
            return this.application;
        };
        Global.prototype.getRendererCreator = function () {
            return this.rendererCreator;
        };
        return Global;
    }());
    splashjs.Global = Global;
    Global["__class"] = "splashjs.Global";
    Global["__interfaces"] = ["splashjs.iface.IGlobal"];
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var Import = /** @class */ (function () {
        function Import() {
        }
        Import.className_$LI$ = function () { if (Import.className == null)
            Import.className = ([]); return Import.className; };
        ;
        Import.packageName_$LI$ = function () { if (Import.packageName == null)
            Import.packageName = ([]); return Import.packageName; };
        ;
        Import.clazz = function (clazz) {
            return clazz;
        };
        Import.clazzAs = function (clazz, alias) {
            return clazz;
        };
        Import.getClassName = function (index) {
            return /* get */ Import.className_$LI$()[index];
        };
        Import.getPackageName = function (index) {
            return /* get */ Import.packageName_$LI$()[index];
        };
        return Import;
    }());
    splashjs.Import = Import;
    Import["__class"] = "splashjs.Import";
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        var RuntimeError = /** @class */ (function (_super) {
            __extends(RuntimeError, _super);
            function RuntimeError(message) {
                var _this = _super.call(this, message) || this;
                _this.message = message;
                Object.setPrototypeOf(_this, RuntimeError.prototype);
                return _this;
            }
            return RuntimeError;
        }(Error));
        lang.RuntimeError = RuntimeError;
        RuntimeError["__class"] = "splashjs.lang.RuntimeError";
        RuntimeError["__interfaces"] = ["java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        var SplashError = /** @class */ (function (_super) {
            __extends(SplashError, _super);
            function SplashError(message, errorID) {
                var _this = this;
                if (((typeof message === 'string') || message === null) && ((typeof errorID === 'number') || errorID === null)) {
                    var __args = arguments;
                    _this = _super.call(this) || this;
                    if (_this.errorID === undefined)
                        _this.errorID = 0;
                    if (_this.message === undefined)
                        _this.message = null;
                    if (_this.name === undefined)
                        _this.name = null;
                    Object.setPrototypeOf(_this, SplashError.prototype);
                    if (_this.errorID === undefined)
                        _this.errorID = 0;
                    if (_this.message === undefined)
                        _this.message = null;
                    if (_this.name === undefined)
                        _this.name = null;
                    (function () {
                        _this.message = message;
                        _this.errorID = errorID;
                        _this.name = /* getName */ (function (c) { return c["__class"] ? c["__class"] : c["name"]; })(_this.constructor);
                    })();
                }
                else if (((typeof message === 'string') || message === null) && errorID === undefined) {
                    var __args = arguments;
                    _this = _super.call(this) || this;
                    if (_this.errorID === undefined)
                        _this.errorID = 0;
                    if (_this.message === undefined)
                        _this.message = null;
                    if (_this.name === undefined)
                        _this.name = null;
                    Object.setPrototypeOf(_this, SplashError.prototype);
                    if (_this.errorID === undefined)
                        _this.errorID = 0;
                    if (_this.message === undefined)
                        _this.message = null;
                    if (_this.name === undefined)
                        _this.name = null;
                    (function () {
                        _this.message = message;
                        _this.name = /* getName */ (function (c) { return c["__class"] ? c["__class"] : c["name"]; })(_this.constructor);
                    })();
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            SplashError.prototype.getErrorID = function () {
                return this.errorID;
            };
            SplashError.prototype.getMessage = function () {
                return this.message;
            };
            SplashError.prototype.getName = function () {
                return this.name;
            };
            return SplashError;
        }(Error));
        lang.SplashError = SplashError;
        SplashError["__class"] = "splashjs.lang.SplashError";
        SplashError["__interfaces"] = ["splashjs.lang.iface.ISplashError", "java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        var SplashObject = /** @class */ (function () {
            function SplashObject() {
            }
            SplashObject.prototype.toString = function () {
                var value = "[instance of " + /* getName */ (function (c) { return c["__class"] ? c["__class"] : c["name"]; })(this.constructor) + "]";
                return value;
            };
            return SplashObject;
        }());
        lang.SplashObject = SplashObject;
        SplashObject["__class"] = "splashjs.lang.SplashObject";
        SplashObject["__interfaces"] = ["splashjs.lang.iface.ISplashObject"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var net;
    (function (net) {
        var FileFilter = /** @class */ (function () {
            function FileFilter(description, extension) {
                /*private*/ this.description = "";
                /*private*/ this.extension = "";
                this.description = description;
                this.extension = extension;
            }
            FileFilter.prototype.getDescription = function () {
                return this.description;
            };
            FileFilter.prototype.getExtension = function () {
                return this.extension;
            };
            return FileFilter;
        }());
        net.FileFilter = FileFilter;
        FileFilter["__class"] = "splashjs.net.FileFilter";
        FileFilter["__interfaces"] = ["splashjs.net.iface.IFileFilter"];
    })(net = splashjs.net || (splashjs.net = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var net;
    (function (net) {
        var URLLoaderDataFormat = /** @class */ (function () {
            function URLLoaderDataFormat() {
            }
            URLLoaderDataFormat.TEXT = "text";
            URLLoaderDataFormat.BINARY = "binary";
            URLLoaderDataFormat.VARIABLES = "variables";
            return URLLoaderDataFormat;
        }());
        net.URLLoaderDataFormat = URLLoaderDataFormat;
        URLLoaderDataFormat["__class"] = "splashjs.net.URLLoaderDataFormat";
    })(net = splashjs.net || (splashjs.net = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var net;
    (function (net) {
        var URLRequest = /** @class */ (function () {
            function URLRequest(url) {
                if (this.url === undefined)
                    this.url = null;
                if (this.contentType === undefined)
                    this.contentType = null;
                if (this.data === undefined)
                    this.data = null;
                if (this.followRedirects === undefined)
                    this.followRedirects = false;
                if (this.urlRequestMethod === undefined)
                    this.urlRequestMethod = null;
                this.url = url;
                this.urlRequestMethod = splashjs.net.URLRequestMethod.GET;
            }
            URLRequest.prototype.getURL = function () {
                return this.url;
            };
            URLRequest.prototype.getURLRequestMethod = function () {
                return this.urlRequestMethod;
            };
            return URLRequest;
        }());
        net.URLRequest = URLRequest;
        URLRequest["__class"] = "splashjs.net.URLRequest";
        URLRequest["__interfaces"] = ["splashjs.net.iface.IURLRequest"];
    })(net = splashjs.net || (splashjs.net = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var net;
    (function (net) {
        var URLRequestMethod = /** @class */ (function () {
            function URLRequestMethod() {
            }
            URLRequestMethod.DELETE = "delete";
            URLRequestMethod.GET = "get";
            URLRequestMethod.HEAD = "head";
            URLRequestMethod.OPTIONS = "options";
            URLRequestMethod.POST = "post";
            URLRequestMethod.PUT = "put";
            return URLRequestMethod;
        }());
        net.URLRequestMethod = URLRequestMethod;
        URLRequestMethod["__class"] = "splashjs.net.URLRequestMethod";
    })(net = splashjs.net || (splashjs.net = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var Package = /** @class */ (function () {
        function Package() {
        }
        Package.packageData_$LI$ = function () { if (Package.packageData == null)
            Package.packageData = ([]); return Package.packageData; };
        ;
        Package.define = function (clazzInfo) {
            var imports = (clazzInfo["imports"]);
            var clazz = (clazzInfo["clazz"]);
            var clazzName = (clazz["name"]);
            var importedClazzNames = Object.getOwnPropertyNames(imports);
            var importedClazzName = "";
            var importedAbsoluteClazzName = "";
            var importJSText = "";
            for (var i = 0; i < importedClazzNames.length; i++) {
                {
                    importedClazzName = importedClazzNames[i];
                    importedAbsoluteClazzName = (imports[importedClazzName]);
                    importJSText += "var " + importedClazzName + " = " + importedAbsoluteClazzName + ";\r\n";
                }
                ;
            }
            var packageID = (clazzInfo["packaze"]);
            var js = "";
            var str = "";
            if ( /* isEmpty */(packageID.length === 0)) {
                js = "window." + clazzName + " = " + clazz;
                console.info(js);
                js += importJSText;
                eval(js);
            }
            else {
                var words = packageID.split(".");
                for (var i = 0; i < words.length; i++) {
                    {
                        if (i === 0) {
                            str = "window." + words[i];
                            js = str + " = " + str + " || {};";
                        }
                        else if (i > 0) {
                            str += "." + words[i];
                            js = str + " = " + str + " || {};";
                        }
                        console.info(js);
                        eval(js);
                    }
                    ;
                }
                js = importJSText + ";";
                js += "var clazz = " + clazz + ";";
                js += "var clazzName = clazz.name;";
                js += "eval(\"" + str + ".\" + clazzName + \" = \"" + clazz + "\");";
                console.info(js);
                eval(js);
            }
        };
        Package.clazz = null;
        return Package;
    }());
    splashjs.Package = Package;
    Package["__class"] = "splashjs.Package";
    (function (Package) {
        var PackageData = /** @class */ (function () {
            function PackageData(packageID, clazz) {
                if (this.packageID === undefined)
                    this.packageID = null;
                if (this.clazz === undefined)
                    this.clazz = null;
                this.packageID = packageID;
                this.clazz = clazz;
            }
            return PackageData;
        }());
        Package.PackageData = PackageData;
        PackageData["__class"] = "splashjs.Package.PackageData";
    })(Package = splashjs.Package || (splashjs.Package = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var HTMLDomEventName = /** @class */ (function () {
            function HTMLDomEventName() {
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
            return HTMLDomEventName;
        }());
        render.HTMLDomEventName = HTMLDomEventName;
        HTMLDomEventName["__class"] = "splashjs.render.HTMLDomEventName";
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var RenderElement = /** @class */ (function () {
            function RenderElement(element) {
                if (this.element === undefined)
                    this.element = null;
                this.element = element;
            }
            RenderElement.prototype.getDOMElement = function () {
                return this.element;
            };
            return RenderElement;
        }());
        render.RenderElement = RenderElement;
        RenderElement["__class"] = "splashjs.render.RenderElement";
        RenderElement["__interfaces"] = ["splashjs.render.iface.IRenderElement"];
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var Renderer = /** @class */ (function () {
            function Renderer() {
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
            Renderer.prototype.setRenderObject = function (renderObject) {
                this.renderObject = renderObject;
                this.renderObjectID = renderObject.getUniqueID();
            };
            Renderer.prototype.getRenderObjectID = function () {
                return this.renderObjectID;
            };
            Renderer.prototype.getRenderObject = function () {
                return this.renderObject;
            };
            Renderer.prototype.setRenderElement = function (renderElement) {
                this.renderElement = renderElement;
                this.createEventListeners();
            };
            Renderer.prototype.getRenderElement = function () {
                return this.renderElement;
            };
            Renderer.prototype.create = function () {
            };
            Renderer.prototype.update = function () {
            };
            Renderer.prototype.refresh = function () {
            };
            Renderer.prototype.getDOMElement = function () {
                var element = this.renderElement.getDOMElement();
                return element;
            };
            Renderer.prototype.createEventListeners = function () {
                var _this = this;
                var htmlElement = this.getDOMElement();
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.LOAD, function (event) {
                    var evt = new splashjs.events.Event(splashjs.events.EventName.LOADED);
                    _this.getRenderObject().dispatchEvent(evt);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.CLICK, function (event) {
                    var mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.CLICK, null, _this.getRenderObject());
                    _this.getRenderObject().dispatchEvent(mouseEvent);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.DBLCLICK, function (event) {
                    var mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.DOUBLE_CLICK, null, _this.getRenderObject());
                    _this.getRenderObject().dispatchEvent(mouseEvent);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSEMOVE, function (event) {
                    var mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_MOVE, null, _this.getRenderObject());
                    _this.getRenderObject().dispatchEvent(mouseEvent);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSEENTER, function (event) {
                    var mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_ENTER, null, _this.getRenderObject());
                    _this.getRenderObject().dispatchEvent(mouseEvent);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSELEAVE, function (event) {
                    var mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_LEAVE, null, _this.getRenderObject());
                    _this.getRenderObject().dispatchEvent(mouseEvent);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSEOVER, function (event) {
                    var mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_OVER, null, _this.getRenderObject());
                    _this.getRenderObject().dispatchEvent(mouseEvent);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSEOUT, function (event) {
                    var mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_OUT, null, _this.getRenderObject());
                    _this.getRenderObject().dispatchEvent(mouseEvent);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSEDOWN, function (event) {
                    var mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_DOWN, null, _this.getRenderObject());
                    _this.getRenderObject().dispatchEvent(mouseEvent);
                });
                htmlElement.addEventListener(splashjs.render.HTMLDomEventName.MOUSEUP, function (event) {
                    var mouseEvent = new splashjs.events.MouseEvent(splashjs.events.MouseEvent.MOUSE_UP, null, _this.getRenderObject());
                    _this.getRenderObject().dispatchEvent(mouseEvent);
                });
            };
            Renderer.prototype.appendChild = function (childRenderer) {
                var childRenderElement = childRenderer.getRenderElement();
                var childElement = childRenderElement.getDOMElement();
                this.getDOMElement().insertBefore(childElement, this.getDOMElement().firstChild);
            };
            Renderer.prototype.removeChild = function (childRenderer) {
                var childRenderElement = childRenderer.getRenderElement();
                var childElement = childRenderElement.getDOMElement();
                this.getDOMElement().removeChild(childElement);
            };
            Renderer.prototype.getOriginalWidth = function () {
                return (this.getDOMElement().clientWidth | 0);
            };
            Renderer.prototype.getOriginalHeight = function () {
                return (this.getDOMElement().clientHeight | 0);
            };
            Renderer.prototype.appendToBody = function () {
                document.body.appendChild(this.getDOMElement());
            };
            /**
             * CSS methods
             * @return {string}
             */
            Renderer.prototype.getCSSIDText = function () {
                return this.getRenderObject().getUniqueID();
            };
            Renderer.prototype.getCSSTransformText = function () {
                var renderObject = this.getRenderObject();
                var scale = "scale(" + renderObject.getScaleX() + ", " + renderObject.getScaleY() + ")";
                var rotate = "rotate(" + renderObject.getRotation() + "deg)";
                var skew = "skew(0deg, 0deg)";
                var transformText = scale + " " + skew + " " + rotate;
                return transformText;
            };
            Renderer.prototype.getCSSTransformOriginText = function () {
                var renderObject = this.getRenderObject();
                var text = renderObject.getRegX() + this.UNIT + " " + renderObject.getRegY() + this.UNIT;
                return text;
            };
            Renderer.prototype.getCSSLeftText = function () {
                var renderObject = this.getRenderObject();
                return (renderObject.getX() - renderObject.getRegX()) + this.UNIT;
            };
            Renderer.prototype.getCSSTopText = function () {
                var renderObject = this.getRenderObject();
                return (renderObject.getY() - renderObject.getRegY()) + this.UNIT;
            };
            Renderer.prototype.getCSSWidthText = function () {
                var renderObject = this.getRenderObject();
                return renderObject.getWidth() + this.UNIT;
            };
            Renderer.prototype.getCSSHeightText = function () {
                var renderObject = this.getRenderObject();
                return renderObject.getHeight() + this.UNIT;
            };
            Renderer.prototype.getCSSOpacityText = function () {
                var renderObject = this.getRenderObject();
                return renderObject.getAlpha() + "";
            };
            Renderer.prototype.getCSSVisibilityText = function () {
                var renderObject = this.getRenderObject();
                var text;
                if (renderObject.getVisible() === true)
                    text = "visible";
                else
                    text = "hidden";
                return text;
            };
            Renderer.prototype.getCSSCursorVisibleText = function () {
                var renderObject = this.getRenderObject();
                var mouseCursor = renderObject.getMouseCursor();
                var text = this.getCSSCursorText();
                if (renderObject.getMouseVisible() === false)
                    text = "none";
                return text;
            };
            Renderer.prototype.getCSSCursorText = function () {
                var renderObject = this.getRenderObject();
                var mouseCursor = renderObject.getMouseCursor();
                var text = splashjs.ui.MouseCursor.AUTO_$LI$().getMouseCursorName();
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(mouseCursor.getMouseCursorType(), splashjs.ui.MouseCursorType.SYSTEM)) {
                    text = mouseCursor.getMouseCursorName();
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(mouseCursor.getMouseCursorType(), splashjs.ui.MouseCursorType.IMAGE)) {
                    var imagePath = mouseCursor.getMouseCursorImagePath();
                    text = "url(" + this.IMAGES_FOLDER_PATH + imagePath + "), auto";
                }
                return text;
            };
            Renderer.prototype.getCSSFilterText = function () {
                var renderObject = this.getRenderObject();
                var filterText = "";
                {
                    var array122 = renderObject.getFilters();
                    for (var index121 = 0; index121 < array122.length; index121++) {
                        var filter = array122[index121];
                        {
                            if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(filter.getType(), splashjs.filters.FilterType.BLUR))
                                filterText += "blur(" + filter.getBlur() + "px) ";
                            if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(filter.getType(), splashjs.filters.FilterType.DROP_SHADOW)) {
                                var dropShadowFilter = filter;
                                filterText += "drop-shadow(" + dropShadowFilter.getHorizontalShadow() + "px ";
                                filterText += dropShadowFilter.getVerticalShadow() + "px ";
                                filterText += dropShadowFilter.getBlur() + "px ";
                                filterText += dropShadowFilter.getSpread() + "px)";
                            }
                        }
                    }
                }
                return filterText;
            };
            Renderer.prototype.getSVGCircleRadiusText = function () {
                var radius = "10";
                radius = this.renderObject.getRadius() + "";
                return radius;
            };
            Renderer.prototype.getSVGCircleCenterXText = function () {
                var cx = "0";
                var strokeWidth = this.renderObject.getStrokeWidth();
                var radius = this.renderObject.getRadius();
                cx = Math.ceil((radius + strokeWidth / 2)) + "";
                return cx;
            };
            Renderer.prototype.getSVGCircleCenterYText = function () {
                var cy = "0";
                var strokeWidth = this.renderObject.getStrokeWidth();
                var radius = this.renderObject.getRadius();
                cy = Math.ceil((radius + strokeWidth / 2)) + "";
                return cy;
            };
            Renderer.prototype.getSVGCircleWidthText = function () {
                var width = "0";
                var radius = this.renderObject.getRadius();
                width = Math.ceil(( /* parseDouble */parseFloat(this.getSVGCircleCenterXText()) * 2)) + "";
                return width;
            };
            Renderer.prototype.getSVGCircleHeightText = function () {
                var height = "0";
                var radius = this.renderObject.getRadius();
                height = Math.ceil(( /* parseDouble */parseFloat(this.getSVGCircleCenterYText()) * 2)) + "";
                return height;
            };
            Renderer.prototype.getSVGLineX2Text = function () {
                var x2 = "0";
                var length = this.renderObject.getLength();
                x2 = length + "";
                return x2;
            };
            Renderer.prototype.getSVGLineY2Text = function () {
                return this.getSVGLineY1Text();
            };
            Renderer.prototype.getSVGLineY1Text = function () {
                var y1 = ( /* parseInt */parseInt(this.getSVGShapeStrokeWidthText()) / 2 | 0) + "";
                return y1;
            };
            Renderer.prototype.getSVGLineWidthText = function () {
                var width = "0";
                width = this.renderObject.getLength() + "";
                return width;
            };
            Renderer.prototype.getSVGLineHeightText = function () {
                var height = "0";
                height = this.getSVGShapeStrokeWidthText();
                return height;
            };
            Renderer.prototype.getSVGShapeStrokeColorNameText = function () {
                var strokeColorName = splashjs.utils.ColorName.BLACK;
                var strokeColor = this.renderObject.getStrokeColor();
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(strokeColor.getColorType(), splashjs.utils.ColorType.NAME))
                    strokeColorName = strokeColor.getColorName();
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(strokeColor.getColorType(), splashjs.utils.ColorType.HEX))
                    strokeColorName = strokeColor.getHEX();
                return strokeColorName;
            };
            Renderer.prototype.getSVGShapeFillColorNameText = function () {
                var fillColorName = splashjs.utils.ColorName.BLACK;
                var fillColor = this.renderObject.getFillColor();
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(fillColor.getColorType(), splashjs.utils.ColorType.NAME))
                    fillColorName = fillColor.getColorName();
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(fillColor.getColorType(), splashjs.utils.ColorType.HEX))
                    fillColorName = fillColor.getHEX();
                return fillColorName;
            };
            Renderer.prototype.getSVGShapeStrokeWidthText = function () {
                var strokeWidth = "1";
                strokeWidth = this.renderObject.getStrokeWidth() + "";
                return strokeWidth;
            };
            return Renderer;
        }());
        render.Renderer = Renderer;
        Renderer["__class"] = "splashjs.render.Renderer";
        Renderer["__interfaces"] = ["splashjs.render.iface.IRenderer"];
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var RendererCreator = /** @class */ (function () {
            function RendererCreator() {
            }
            RendererCreator.prototype.createRenderer = function (clazz, renderObject) {
                var renderer = null;
                if (clazz === splashjs.application.Application)
                    renderer = new splashjs.render.application.ApplicationRenderer(renderObject);
                else if (clazz === splashjs.application.StageOwner)
                    renderer = new splashjs.render.application.StageOwnerRenderer(renderObject);
                else if (clazz === splashjs.display.Stage)
                    renderer = new splashjs.render.display.StageRenderer(renderObject);
                else if (clazz === splashjs.display.Sprite)
                    renderer = new splashjs.render.display.SpriteRenderer(renderObject);
                else if (clazz === splashjs.display.Line)
                    renderer = new splashjs.render.display.LineRenderer(renderObject);
                else if (clazz === splashjs.display.Circle)
                    renderer = new splashjs.render.display.CircleRenderer(renderObject);
                else if (clazz === splashjs.controls.Button)
                    renderer = new splashjs.render.controls.ButtonRenderer(renderObject);
                else if (clazz === splashjs.text.StaticText)
                    renderer = new splashjs.render.text.StaticTextRenderer(renderObject);
                else if (clazz === splashjs.net.FileReference)
                    renderer = new splashjs.render.net.FileReferenceRenderer(renderObject);
                return renderer;
            };
            return RendererCreator;
        }());
        render.RendererCreator = RendererCreator;
        RendererCreator["__class"] = "splashjs.render.RendererCreator";
        RendererCreator["__interfaces"] = ["splashjs.render.iface.IRendererCreator"];
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var text;
    (function (text) {
        var FontStyle = /** @class */ (function () {
            function FontStyle() {
            }
            FontStyle.ITALIC = "italic";
            FontStyle.NORMAL = "normal";
            FontStyle.OBLIQUE = "oblique";
            return FontStyle;
        }());
        text.FontStyle = FontStyle;
        FontStyle["__class"] = "splashjs.text.FontStyle";
    })(text = splashjs.text || (splashjs.text = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var text;
    (function (text) {
        var FontWeight = /** @class */ (function () {
            function FontWeight() {
            }
            FontWeight.NORMAL = "normal";
            FontWeight.LIGHTER = "lighter";
            FontWeight.BOLD = "bold";
            FontWeight.BOLDER = "bolder";
            return FontWeight;
        }());
        text.FontWeight = FontWeight;
        FontWeight["__class"] = "splashjs.text.FontWeight";
    })(text = splashjs.text || (splashjs.text = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var ui;
    (function (ui) {
        var KeyLocation = /** @class */ (function () {
            function KeyLocation() {
            }
            KeyLocation.STANDARD = "standard";
            KeyLocation.LEFT = "left";
            KeyLocation.RIGHT = "right";
            KeyLocation.NUMPAD = "numpad";
            return KeyLocation;
        }());
        ui.KeyLocation = KeyLocation;
        KeyLocation["__class"] = "splashjs.ui.KeyLocation";
    })(ui = splashjs.ui || (splashjs.ui = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var ui;
    (function (ui) {
        var MouseCursorName = /** @class */ (function () {
            function MouseCursorName() {
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
            return MouseCursorName;
        }());
        ui.MouseCursorName = MouseCursorName;
        MouseCursorName["__class"] = "splashjs.ui.MouseCursorName";
    })(ui = splashjs.ui || (splashjs.ui = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var ui;
    (function (ui) {
        var MouseCursorType = /** @class */ (function () {
            function MouseCursorType() {
            }
            MouseCursorType.SYSTEM = "system";
            MouseCursorType.IMAGE = "image";
            return MouseCursorType;
        }());
        ui.MouseCursorType = MouseCursorType;
        MouseCursorType["__class"] = "splashjs.ui.MouseCursorType";
    })(ui = splashjs.ui || (splashjs.ui = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        var ColorName = /** @class */ (function () {
            function ColorName() {
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
            return ColorName;
        }());
        utils.ColorName = ColorName;
        ColorName["__class"] = "splashjs.utils.ColorName";
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        var ColorType = /** @class */ (function () {
            function ColorType() {
            }
            ColorType.NAME = "name";
            ColorType.RGB = "rgb";
            ColorType.RGBA = "rgba";
            ColorType.HSL = "hsl";
            ColorType.HSLA = "hsla";
            ColorType.HEX = "hex";
            ColorType.GRADIENT = "gradient";
            return ColorType;
        }());
        utils.ColorType = ColorType;
        ColorType["__class"] = "splashjs.utils.ColorType";
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        var desktop;
        (function (desktop) {
            var ByteArray = /** @class */ (function () {
                function ByteArray() {
                }
                return ByteArray;
            }());
            desktop.ByteArray = ByteArray;
            ByteArray["__class"] = "splashjs.utils.desktop.ByteArray";
            ByteArray["__interfaces"] = ["splashjs.utils.desktop.IDesktopByteArray"];
        })(desktop = utils.desktop || (utils.desktop = {}));
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
var java;
(function (java) {
    var util;
    (function (util) {
        var TimerTask = /** @class */ (function () {
            function TimerTask() {
                this.state = TimerTask.VIRGIN;
                this.period = 0;
                if (this.nextExecutionTime === undefined)
                    this.nextExecutionTime = 0;
                if (this.handle === undefined)
                    this.handle = 0;
            }
            TimerTask.prototype.cancel = function () {
                var success = this.state === TimerTask.SCHEDULED;
                this.state = TimerTask.CANCELLED;
                this.nextExecutionTime = 0;
                this.period = 0;
                return success;
            };
            TimerTask.prototype.scheduledExecutionTime = function () {
                return this.period < 0 ? this.nextExecutionTime + this.period : this.nextExecutionTime - this.period;
            };
            TimerTask.VIRGIN = 0;
            TimerTask.SCHEDULED = 1;
            TimerTask.EXECUTED = 2;
            TimerTask.CANCELLED = 3;
            return TimerTask;
        }());
        util.TimerTask = TimerTask;
        TimerTask["__class"] = "java.util.TimerTask";
        TimerTask["__interfaces"] = ["java.lang.Runnable"];
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        var Item = /** @class */ (function (_super) {
            __extends(Item, _super);
            function Item(text, value) {
                var _this = _super.call(this) || this;
                if (_this.text === undefined)
                    _this.text = null;
                if (_this.value === undefined)
                    _this.value = null;
                _this.text = text;
                _this.value = value;
                return _this;
            }
            Item.prototype.setText = function (text) {
                this.text = text;
            };
            Item.prototype.getText = function () {
                return this.text;
            };
            Item.prototype.setValue = function (value) {
                this.value = value;
            };
            Item.prototype.getValue = function () {
                return this.value;
            };
            return Item;
        }(splashjs.controls.BaseItem));
        controls.Item = Item;
        Item["__class"] = "splashjs.controls.Item";
        Item["__interfaces"] = ["splashjs.controls.iface.IItem", "splashjs.controls.iface.IBaseItem"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        var ItemGroup = /** @class */ (function (_super) {
            __extends(ItemGroup, _super);
            function ItemGroup(title) {
                var _this = _super.call(this) || this;
                /*private*/ _this.items = ([]);
                if (_this.title === undefined)
                    _this.title = null;
                _this.title = title;
                return _this;
            }
            ItemGroup.prototype.addItem = function (item) {
                /* add */ (this.items.push(item) > 0);
            };
            ItemGroup.prototype.removeItem = function (item) {
                /* remove */ (function (a) { var index = a.indexOf(item); if (index >= 0) {
                    a.splice(index, 1);
                    return true;
                }
                else {
                    return false;
                } })(this.items);
            };
            ItemGroup.prototype.setTitle = function (title) {
                this.title = title;
            };
            ItemGroup.prototype.getTitle = function () {
                return this.title;
            };
            ItemGroup.prototype.getAllItems = function () {
                return this.items;
            };
            return ItemGroup;
        }(splashjs.controls.BaseItem));
        controls.ItemGroup = ItemGroup;
        ItemGroup["__class"] = "splashjs.controls.ItemGroup";
        ItemGroup["__interfaces"] = ["splashjs.controls.iface.IItemGroup", "splashjs.controls.iface.IBaseItem"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        var IOErrorEvent = /** @class */ (function (_super) {
            __extends(IOErrorEvent, _super);
            function IOErrorEvent(name) {
                return _super.call(this, name) || this;
            }
            return IOErrorEvent;
        }(splashjs.events.Event));
        events.IOErrorEvent = IOErrorEvent;
        IOErrorEvent["__class"] = "splashjs.events.IOErrorEvent";
        IOErrorEvent["__interfaces"] = ["splashjs.events.iface.IEvent", "splashjs.events.iface.IIOErrorEvent"];
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        var KeyboardEvent = /** @class */ (function (_super) {
            __extends(KeyboardEvent, _super);
            function KeyboardEvent(name, altKey, charCode, code, ctrlKey, key, keyCode, location, metaKey, repeat, shiftKey, which) {
                var _this = _super.call(this, name) || this;
                if (_this.__splashjs_events_KeyboardEvent_altKey === undefined)
                    _this.__splashjs_events_KeyboardEvent_altKey = null;
                if (_this.charCode === undefined)
                    _this.charCode = null;
                if (_this.code === undefined)
                    _this.code = null;
                if (_this.ctrlKey === undefined)
                    _this.ctrlKey = null;
                if (_this.key === undefined)
                    _this.key = null;
                if (_this.keyCode === undefined)
                    _this.keyCode = null;
                if (_this.location === undefined)
                    _this.location = null;
                if (_this.metaKey === undefined)
                    _this.metaKey = null;
                if (_this.repeat === undefined)
                    _this.repeat = null;
                if (_this.shiftKey === undefined)
                    _this.shiftKey = null;
                if (_this.which === undefined)
                    _this.which = null;
                _this.__splashjs_events_KeyboardEvent_altKey = altKey;
                _this.charCode = charCode;
                _this.code = code;
                _this.ctrlKey = ctrlKey;
                _this.key = key;
                _this.keyCode = keyCode;
                _this.location = location;
                _this.metaKey = metaKey;
                _this.repeat = repeat;
                _this.shiftKey = shiftKey;
                _this.which = which;
                return _this;
            }
            KeyboardEvent.prototype.getAltKey = function () {
                return this.__splashjs_events_KeyboardEvent_altKey;
            };
            KeyboardEvent.prototype.getCharCode = function () {
                return this.charCode;
            };
            KeyboardEvent.prototype.getCode = function () {
                return this.code;
            };
            KeyboardEvent.prototype.getCtrlKey = function () {
                return this.ctrlKey;
            };
            KeyboardEvent.prototype.getKey = function () {
                return this.key;
            };
            KeyboardEvent.prototype.getKeyCode = function () {
                return this.keyCode;
            };
            KeyboardEvent.prototype.getLocation = function () {
                return this.location;
            };
            KeyboardEvent.prototype.getMetaKey = function () {
                return this.metaKey;
            };
            KeyboardEvent.prototype.getRepeat = function () {
                return this.repeat;
            };
            KeyboardEvent.prototype.getShiftKey = function () {
                return this.shiftKey;
            };
            KeyboardEvent.prototype.getWhich = function () {
                return this.which;
            };
            KeyboardEvent.prototype.toString = function () {
                var properties = "";
                properties += "name=" + this.getType() + ", altKey=" + this.__splashjs_events_KeyboardEvent_altKey + ", charCode=" + this.charCode + ", code=" + this.code + ", ctrlKey=" + this.ctrlKey + ", key=" + this.key + ", keyCode=" + this.keyCode + ", location=" + this.location + ", metaKey=" + this.metaKey + ", repeat=" + this.repeat + ", shifKey=" + this.shiftKey + ", which=" + this.which;
                return "KeyboardEvent[" + properties + "]";
            };
            KeyboardEvent.KEY_UP = "key_up";
            KeyboardEvent.KEY_DOWN = "key_down";
            KeyboardEvent.KEY_PRESS = "key_press";
            return KeyboardEvent;
        }(splashjs.events.Event));
        events.KeyboardEvent = KeyboardEvent;
        KeyboardEvent["__class"] = "splashjs.events.KeyboardEvent";
        KeyboardEvent["__interfaces"] = ["splashjs.events.iface.IEvent", "splashjs.events.iface.IKeyboardEvent"];
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        var MouseEvent = /** @class */ (function (_super) {
            __extends(MouseEvent, _super);
            function MouseEvent(name, target, currentTarget) {
                var _this = _super.call(this, name, target, currentTarget) || this;
                if (_this.__splashjs_events_MouseEvent_altKey === undefined)
                    _this.__splashjs_events_MouseEvent_altKey = false;
                _this.__splashjs_events_MouseEvent_altKey = _this.__splashjs_events_MouseEvent_altKey;
                return _this;
            }
            MouseEvent.prototype.getAltKey = function () {
                return this.__splashjs_events_MouseEvent_altKey;
            };
            MouseEvent.prototype.setAltKey = function (altKey) {
                this.__splashjs_events_MouseEvent_altKey = altKey;
            };
            MouseEvent.CLICK = "click";
            MouseEvent.DOUBLE_CLICK = "double_click";
            MouseEvent.MOUSE_DOWN = "mouse_down";
            MouseEvent.MOUSE_ENTER = "mouse_enter";
            MouseEvent.MOUSE_LEAVE = "mouse_leave";
            MouseEvent.MOUSE_MOVE = "mouse_move";
            MouseEvent.MOUSE_OUT = "mouse_out";
            MouseEvent.MOUSE_OVER = "mouse_over";
            MouseEvent.MOUSE_UP = "mouse_up";
            return MouseEvent;
        }(splashjs.events.Event));
        events.MouseEvent = MouseEvent;
        MouseEvent["__class"] = "splashjs.events.MouseEvent";
        MouseEvent["__interfaces"] = ["splashjs.events.iface.IEvent", "splashjs.events.iface.IMouseEvent"];
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        var ProgressEvent = /** @class */ (function (_super) {
            __extends(ProgressEvent, _super);
            function ProgressEvent(type) {
                return _super.call(this, type) || this;
            }
            return ProgressEvent;
        }(splashjs.events.Event));
        events.ProgressEvent = ProgressEvent;
        ProgressEvent["__class"] = "splashjs.events.ProgressEvent";
        ProgressEvent["__interfaces"] = ["splashjs.events.iface.IEvent", "splashjs.events.iface.IProgressEvent"];
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        var TimerEvent = /** @class */ (function (_super) {
            __extends(TimerEvent, _super);
            function TimerEvent(type) {
                return _super.call(this, type) || this;
            }
            TimerEvent.TIMER = "timer";
            TimerEvent.TIMER_COMPLETE = "timer_complete";
            return TimerEvent;
        }(splashjs.events.Event));
        events.TimerEvent = TimerEvent;
        TimerEvent["__class"] = "splashjs.events.TimerEvent";
        TimerEvent["__interfaces"] = ["splashjs.events.iface.IEvent"];
    })(events = splashjs.events || (splashjs.events = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        var UnsupportedOperationError = /** @class */ (function (_super) {
            __extends(UnsupportedOperationError, _super);
            function UnsupportedOperationError() {
                var _this = _super.call(this, "Unsupported operation error") || this;
                Object.setPrototypeOf(_this, UnsupportedOperationError.prototype);
                return _this;
            }
            return UnsupportedOperationError;
        }(splashjs.lang.RuntimeError));
        lang.UnsupportedOperationError = UnsupportedOperationError;
        UnsupportedOperationError["__class"] = "splashjs.lang.UnsupportedOperationError";
        UnsupportedOperationError["__interfaces"] = ["java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        var IOError = /** @class */ (function (_super) {
            __extends(IOError, _super);
            function IOError(message) {
                var _this = _super.call(this, message) || this;
                Object.setPrototypeOf(_this, IOError.prototype);
                _this.name = /* getName */ (function (c) { return c["__class"] ? c["__class"] : c["name"]; })(_this.constructor);
                return _this;
            }
            return IOError;
        }(splashjs.lang.SplashError));
        lang.IOError = IOError;
        IOError["__class"] = "splashjs.lang.IOError";
        IOError["__interfaces"] = ["splashjs.lang.iface.ISplashError", "splashjs.lang.iface.IIOError", "java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        var RangeError = /** @class */ (function (_super) {
            __extends(RangeError, _super);
            function RangeError(message) {
                var _this = _super.call(this, message) || this;
                Object.setPrototypeOf(_this, RangeError.prototype);
                _this.name = /* getName */ (function (c) { return c["__class"] ? c["__class"] : c["name"]; })(_this.constructor);
                return _this;
            }
            return RangeError;
        }(splashjs.lang.SplashError));
        lang.RangeError = RangeError;
        RangeError["__class"] = "splashjs.lang.RangeError";
        RangeError["__interfaces"] = ["splashjs.lang.iface.ISplashError", "splashjs.lang.iface.IRangeError", "java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        var SecurityError = /** @class */ (function (_super) {
            __extends(SecurityError, _super);
            function SecurityError(message) {
                var _this = _super.call(this, message) || this;
                Object.setPrototypeOf(_this, SecurityError.prototype);
                _this.name = /* getName */ (function (c) { return c["__class"] ? c["__class"] : c["name"]; })(_this.constructor);
                return _this;
            }
            return SecurityError;
        }(splashjs.lang.SplashError));
        lang.SecurityError = SecurityError;
        SecurityError["__class"] = "splashjs.lang.SecurityError";
        SecurityError["__interfaces"] = ["splashjs.lang.iface.ISplashError", "splashjs.lang.iface.ISecurityError", "java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var events;
    (function (events) {
        var EventDispatcher = /** @class */ (function (_super) {
            __extends(EventDispatcher, _super);
            function EventDispatcher(id) {
                var _this = this;
                if (((typeof id === 'string') || id === null)) {
                    var __args = arguments;
                    _this = _super.call(this) || this;
                    if (_this.eventStore === undefined)
                        _this.eventStore = null;
                    if (_this.uniqueID === undefined)
                        _this.uniqueID = null;
                    if (_this.id === undefined)
                        _this.id = null;
                    if (_this.renderer === undefined)
                        _this.renderer = null;
                    if (_this.stage === undefined)
                        _this.stage = null;
                    if (_this.eventStore === undefined)
                        _this.eventStore = null;
                    if (_this.uniqueID === undefined)
                        _this.uniqueID = null;
                    if (_this.id === undefined)
                        _this.id = null;
                    if (_this.renderer === undefined)
                        _this.renderer = null;
                    if (_this.stage === undefined)
                        _this.stage = null;
                    (function () {
                        _this.eventStore = new EventDispatcher.EventStore(_this);
                        _this.id = id;
                        _this.uniqueID = id + /* nanoTime */ (Date.now() * 1000000);
                    })();
                }
                else if (id === undefined) {
                    var __args = arguments;
                    {
                        var __args_3 = arguments;
                        var id_1 = "splashjs";
                        _this = _super.call(this) || this;
                        if (_this.eventStore === undefined)
                            _this.eventStore = null;
                        if (_this.uniqueID === undefined)
                            _this.uniqueID = null;
                        if (_this.id === undefined)
                            _this.id = null;
                        if (_this.renderer === undefined)
                            _this.renderer = null;
                        if (_this.stage === undefined)
                            _this.stage = null;
                        if (_this.eventStore === undefined)
                            _this.eventStore = null;
                        if (_this.uniqueID === undefined)
                            _this.uniqueID = null;
                        if (_this.id === undefined)
                            _this.id = null;
                        if (_this.renderer === undefined)
                            _this.renderer = null;
                        if (_this.stage === undefined)
                            _this.stage = null;
                        (function () {
                            _this.eventStore = new EventDispatcher.EventStore(_this);
                            _this.id = id_1;
                            _this.uniqueID = id_1 + /* nanoTime */ (Date.now() * 1000000);
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            EventDispatcher.prototype.setRenderer = function (renderer) {
                this.renderer = renderer;
            };
            EventDispatcher.prototype.getRenderer = function () {
                return this.renderer;
            };
            EventDispatcher.prototype.getStage = function () {
                return this.stage;
            };
            EventDispatcher.prototype.render = function () {
            };
            EventDispatcher.prototype.addEventListener = function (eventName, eventHandler) {
                this.eventStore.add(eventName, (eventHandler));
            };
            EventDispatcher.prototype.removeEventListener = function (eventName, eventHandler) {
                this.eventStore.remove(eventName, (eventHandler));
            };
            EventDispatcher.prototype.removeAllEventListeners = function (eventName) {
                this.eventStore.removeAll(eventName);
            };
            EventDispatcher.prototype.dispatchEvent = function (event) {
                var eventName = event.getType();
                {
                    var array124 = this.eventStore.getEventHandlersByName(eventName);
                    for (var index123 = 0; index123 < array124.length; index123++) {
                        var eventHandler = array124[index123];
                        (function (target) { return (typeof target === 'function') ? target(event) : target.accept(event); })(eventHandler);
                    }
                }
                return true;
            };
            /**
             *
             * @return {string}
             */
            EventDispatcher.prototype.getUniqueID = function () {
                return this.uniqueID;
            };
            /**
             *
             * @return {string}
             */
            EventDispatcher.prototype.getID = function () {
                return this.id;
            };
            return EventDispatcher;
        }(splashjs.lang.SplashObject));
        events.EventDispatcher = EventDispatcher;
        EventDispatcher["__class"] = "splashjs.events.EventDispatcher";
        EventDispatcher["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
        (function (EventDispatcher) {
            var EventStore = /** @class */ (function () {
                function EventStore(__parent) {
                    this.__parent = __parent;
                    this.eventNames = ([]);
                    this.eventHandlers = ([]);
                }
                EventStore.prototype.add = function (eventName, eventHandler) {
                    /* add */ (this.eventNames.push(eventName) > 0);
                    /* add */ (this.eventHandlers.push(eventHandler) > 0);
                };
                EventStore.prototype.remove = function (eventName, eventHandler) {
                    var pos = -1;
                    for (var i = 0; i < /* size */ this.eventHandlers.length; i++) {
                        {
                            if ( /* get */this.eventHandlers[i] === eventHandler) {
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
                };
                EventStore.prototype.removeAll = function (eventName) {
                };
                EventStore.prototype.getEventHandlersByName = function (eventName) {
                    var eHandlers = ([]);
                    for (var i = 0; i < /* size */ this.eventNames.length; i++) {
                        {
                            if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(/* get */ this.eventNames[i], eventName)) /* add */
                                (eHandlers.push(/* get */ this.eventHandlers[i]) > 0);
                        }
                        ;
                    }
                    return eHandlers;
                };
                return EventStore;
            }());
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
            var SplashObjectRenderer = /** @class */ (function (_super) {
                __extends(SplashObjectRenderer, _super);
                function SplashObjectRenderer() {
                    return _super.call(this) || this;
                }
                return SplashObjectRenderer;
            }(splashjs.render.Renderer));
            lang.SplashObjectRenderer = SplashObjectRenderer;
            SplashObjectRenderer["__class"] = "splashjs.render.lang.SplashObjectRenderer";
            SplashObjectRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(lang = render.lang || (render.lang = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var ui;
    (function (ui) {
        var MouseCursor = /** @class */ (function () {
            function MouseCursor(mouseCursorNameOrImagePath, mouseCursorType) {
                if (this.mouseCursorName === undefined)
                    this.mouseCursorName = null;
                if (this.mouseCursorImagePath === undefined)
                    this.mouseCursorImagePath = null;
                if (this.mouseCursorType === undefined)
                    this.mouseCursorType = null;
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(mouseCursorType, splashjs.ui.MouseCursorType.SYSTEM)) {
                    this.mouseCursorName = mouseCursorNameOrImagePath;
                    this.mouseCursorType = splashjs.ui.MouseCursorType.SYSTEM;
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(mouseCursorType, splashjs.ui.MouseCursorType.IMAGE)) {
                    this.mouseCursorImagePath = mouseCursorNameOrImagePath;
                    this.mouseCursorType = splashjs.ui.MouseCursorType.IMAGE;
                }
                else {
                    this.mouseCursorName = splashjs.ui.MouseCursorName.AUTO;
                    this.mouseCursorType = splashjs.ui.MouseCursorType.SYSTEM;
                }
            }
            MouseCursor.ALIAS_$LI$ = function () { if (MouseCursor.ALIAS == null)
                MouseCursor.ALIAS = new MouseCursor(splashjs.ui.MouseCursorName.ALIAS, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.ALIAS; };
            ;
            MouseCursor.ALL_SCROLL_$LI$ = function () { if (MouseCursor.ALL_SCROLL == null)
                MouseCursor.ALL_SCROLL = new MouseCursor(splashjs.ui.MouseCursorName.ALL_SCROLL, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.ALL_SCROLL; };
            ;
            MouseCursor.AUTO_$LI$ = function () { if (MouseCursor.AUTO == null)
                MouseCursor.AUTO = new MouseCursor(splashjs.ui.MouseCursorName.AUTO, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.AUTO; };
            ;
            MouseCursor.CELL_$LI$ = function () { if (MouseCursor.CELL == null)
                MouseCursor.CELL = new MouseCursor(splashjs.ui.MouseCursorName.CELL, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.CELL; };
            ;
            MouseCursor.CONTEXT_MENU_$LI$ = function () { if (MouseCursor.CONTEXT_MENU == null)
                MouseCursor.CONTEXT_MENU = new MouseCursor(splashjs.ui.MouseCursorName.CONTEXT_MENU, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.CONTEXT_MENU; };
            ;
            MouseCursor.COL_RESIZE_$LI$ = function () { if (MouseCursor.COL_RESIZE == null)
                MouseCursor.COL_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.COL_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.COL_RESIZE; };
            ;
            MouseCursor.COPY_$LI$ = function () { if (MouseCursor.COPY == null)
                MouseCursor.COPY = new MouseCursor(splashjs.ui.MouseCursorName.COPY, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.COPY; };
            ;
            MouseCursor.CROSSHAIR_$LI$ = function () { if (MouseCursor.CROSSHAIR == null)
                MouseCursor.CROSSHAIR = new MouseCursor(splashjs.ui.MouseCursorName.CROSSHAIR, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.CROSSHAIR; };
            ;
            MouseCursor.DEFAULT_$LI$ = function () { if (MouseCursor.DEFAULT == null)
                MouseCursor.DEFAULT = new MouseCursor(splashjs.ui.MouseCursorName.DEFAULT, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.DEFAULT; };
            ;
            MouseCursor.E_RESIZE_$LI$ = function () { if (MouseCursor.E_RESIZE == null)
                MouseCursor.E_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.E_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.E_RESIZE; };
            ;
            MouseCursor.EW_RESIZE_$LI$ = function () { if (MouseCursor.EW_RESIZE == null)
                MouseCursor.EW_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.EW_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.EW_RESIZE; };
            ;
            MouseCursor.GRAB_$LI$ = function () { if (MouseCursor.GRAB == null)
                MouseCursor.GRAB = new MouseCursor(splashjs.ui.MouseCursorName.GRAB, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.GRAB; };
            ;
            MouseCursor.GRABBING_$LI$ = function () { if (MouseCursor.GRABBING == null)
                MouseCursor.GRABBING = new MouseCursor(splashjs.ui.MouseCursorName.GRABBING, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.GRABBING; };
            ;
            MouseCursor.HELP_$LI$ = function () { if (MouseCursor.HELP == null)
                MouseCursor.HELP = new MouseCursor(splashjs.ui.MouseCursorName.HELP, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.HELP; };
            ;
            MouseCursor.MOVE_$LI$ = function () { if (MouseCursor.MOVE == null)
                MouseCursor.MOVE = new MouseCursor(splashjs.ui.MouseCursorName.MOVE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.MOVE; };
            ;
            MouseCursor.N_RESIZE_$LI$ = function () { if (MouseCursor.N_RESIZE == null)
                MouseCursor.N_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.N_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.N_RESIZE; };
            ;
            MouseCursor.NE_RESIZE_$LI$ = function () { if (MouseCursor.NE_RESIZE == null)
                MouseCursor.NE_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.NE_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NE_RESIZE; };
            ;
            MouseCursor.NESW_RESIZE_$LI$ = function () { if (MouseCursor.NESW_RESIZE == null)
                MouseCursor.NESW_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.NESW_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NESW_RESIZE; };
            ;
            MouseCursor.NS_RESIZE_$LI$ = function () { if (MouseCursor.NS_RESIZE == null)
                MouseCursor.NS_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.NS_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NS_RESIZE; };
            ;
            MouseCursor.NW_RESIZE_$LI$ = function () { if (MouseCursor.NW_RESIZE == null)
                MouseCursor.NW_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.NW_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NW_RESIZE; };
            ;
            MouseCursor.NWSE_RESIZE_$LI$ = function () { if (MouseCursor.NWSE_RESIZE == null)
                MouseCursor.NWSE_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.NWSE_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NWSE_RESIZE; };
            ;
            MouseCursor.NO_DROP_$LI$ = function () { if (MouseCursor.NO_DROP == null)
                MouseCursor.NO_DROP = new MouseCursor(splashjs.ui.MouseCursorName.NO_DROP, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NO_DROP; };
            ;
            MouseCursor.NOT_ALLOWED_$LI$ = function () { if (MouseCursor.NOT_ALLOWED == null)
                MouseCursor.NOT_ALLOWED = new MouseCursor(splashjs.ui.MouseCursorName.NOT_ALLOWED, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.NOT_ALLOWED; };
            ;
            MouseCursor.POINTER_$LI$ = function () { if (MouseCursor.POINTER == null)
                MouseCursor.POINTER = new MouseCursor(splashjs.ui.MouseCursorName.POINTER, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.POINTER; };
            ;
            MouseCursor.PROGRESS_$LI$ = function () { if (MouseCursor.PROGRESS == null)
                MouseCursor.PROGRESS = new MouseCursor(splashjs.ui.MouseCursorName.PROGRESS, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.PROGRESS; };
            ;
            MouseCursor.ROW_RESIZE_$LI$ = function () { if (MouseCursor.ROW_RESIZE == null)
                MouseCursor.ROW_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.ROW_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.ROW_RESIZE; };
            ;
            MouseCursor.S_RESIZE_$LI$ = function () { if (MouseCursor.S_RESIZE == null)
                MouseCursor.S_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.S_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.S_RESIZE; };
            ;
            MouseCursor.SE_RESIZE_$LI$ = function () { if (MouseCursor.SE_RESIZE == null)
                MouseCursor.SE_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.SE_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.SE_RESIZE; };
            ;
            MouseCursor.SW_RESIZE_$LI$ = function () { if (MouseCursor.SW_RESIZE == null)
                MouseCursor.SW_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.SW_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.SW_RESIZE; };
            ;
            MouseCursor.TEXT_$LI$ = function () { if (MouseCursor.TEXT == null)
                MouseCursor.TEXT = new MouseCursor(splashjs.ui.MouseCursorName.TEXT, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.TEXT; };
            ;
            MouseCursor.W_RESIZE_$LI$ = function () { if (MouseCursor.W_RESIZE == null)
                MouseCursor.W_RESIZE = new MouseCursor(splashjs.ui.MouseCursorName.W_RESIZE, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.W_RESIZE; };
            ;
            MouseCursor.WAIT_$LI$ = function () { if (MouseCursor.WAIT == null)
                MouseCursor.WAIT = new MouseCursor(splashjs.ui.MouseCursorName.WAIT, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.WAIT; };
            ;
            MouseCursor.ZOOM_IN_$LI$ = function () { if (MouseCursor.ZOOM_IN == null)
                MouseCursor.ZOOM_IN = new MouseCursor(splashjs.ui.MouseCursorName.ZOOM_IN, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.ZOOM_IN; };
            ;
            MouseCursor.ZOOM_OUT_$LI$ = function () { if (MouseCursor.ZOOM_OUT == null)
                MouseCursor.ZOOM_OUT = new MouseCursor(splashjs.ui.MouseCursorName.ZOOM_OUT, splashjs.ui.MouseCursorType.SYSTEM); return MouseCursor.ZOOM_OUT; };
            ;
            MouseCursor.prototype.getMouseCursorType = function () {
                return this.mouseCursorType;
            };
            MouseCursor.prototype.getMouseCursorName = function () {
                return this.mouseCursorName;
            };
            MouseCursor.prototype.getMouseCursorImagePath = function () {
                return this.mouseCursorImagePath;
            };
            MouseCursor.setImagePath = function (mouseCursorImagePath) {
                var mouseCursor = new MouseCursor(mouseCursorImagePath, splashjs.ui.MouseCursorType.IMAGE);
                return mouseCursor;
            };
            return MouseCursor;
        }());
        ui.MouseCursor = MouseCursor;
        MouseCursor["__class"] = "splashjs.ui.MouseCursor";
        MouseCursor["__interfaces"] = ["splashjs.ui.iface.IMouseCursor"];
    })(ui = splashjs.ui || (splashjs.ui = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        var Color = /** @class */ (function () {
            function Color(red, green, blue, alpha) {
                var _this = this;
                if (((typeof red === 'number') || red === null) && ((typeof green === 'number') || green === null) && ((typeof blue === 'number') || blue === null) && ((typeof alpha === 'number') || alpha === null)) {
                    var __args = arguments;
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
                    (function () {
                        _this.green = green;
                        _this.red = red;
                        _this.blue = blue;
                        _this.alpha = alpha;
                        _this.colorType = splashjs.utils.ColorType.RGBA;
                    })();
                }
                else if (((typeof red === 'number') || red === null) && ((typeof green === 'number') || green === null) && ((typeof blue === 'number') || blue === null) && ((typeof alpha === 'number') || alpha === null)) {
                    var __args = arguments;
                    var hue_1 = __args[0];
                    var saturation_1 = __args[1];
                    var lightness_1 = __args[2];
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
                    (function () {
                        _this.hue = hue_1;
                        _this.saturation = saturation_1;
                        _this.lightness = lightness_1;
                        _this.alpha = alpha;
                        _this.colorType = splashjs.utils.ColorType.HSLA;
                    })();
                }
                else if (((typeof red === 'number') || red === null) && ((typeof green === 'number') || green === null) && ((typeof blue === 'number') || blue === null) && alpha === undefined) {
                    var __args = arguments;
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
                    (function () {
                        _this.green = green;
                        _this.red = red;
                        _this.blue = blue;
                        _this.colorType = splashjs.utils.ColorType.RGB;
                    })();
                }
                else if (((typeof red === 'number') || red === null) && ((typeof green === 'number') || green === null) && ((typeof blue === 'number') || blue === null) && alpha === undefined) {
                    var __args = arguments;
                    var hue_2 = __args[0];
                    var saturation_2 = __args[1];
                    var lightness_2 = __args[2];
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
                    (function () {
                        _this.hue = hue_2;
                        _this.saturation = saturation_2;
                        _this.lightness = lightness_2;
                        _this.colorType = splashjs.utils.ColorType.HSL;
                    })();
                }
                else if (((red != null && (red["__interfaces"] != null && red["__interfaces"].indexOf("splashjs.utils.iface.IGradient") >= 0 || red.constructor != null && red.constructor["__interfaces"] != null && red.constructor["__interfaces"].indexOf("splashjs.utils.iface.IGradient") >= 0)) || red === null) && green === undefined && blue === undefined && alpha === undefined) {
                    var __args = arguments;
                    var gradient_1 = __args[0];
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
                    (function () {
                        _this.gradient = gradient_1;
                        _this.colorType = splashjs.utils.ColorType.GRADIENT;
                    })();
                }
                else if (((typeof red === 'string') || red === null) && green === undefined && blue === undefined && alpha === undefined) {
                    var __args = arguments;
                    var colorName_1 = __args[0];
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
                    (function () {
                        if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(colorName_1.charAt(0)) == '#'.charCodeAt(0)) {
                            _this.hex = colorName_1;
                            _this.colorType = splashjs.utils.ColorType.HEX;
                        }
                        else {
                            _this.colorName = colorName_1;
                            _this.colorType = splashjs.utils.ColorType.NAME;
                        }
                    })();
                }
                else if (red === undefined && green === undefined && blue === undefined && alpha === undefined) {
                    var __args = arguments;
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
            Color.GREEN_$LI$ = function () { if (Color.GREEN == null)
                Color.GREEN = new Color(splashjs.utils.ColorName.GREEN); return Color.GREEN; };
            ;
            Color.YELLOW_$LI$ = function () { if (Color.YELLOW == null)
                Color.YELLOW = new Color(splashjs.utils.ColorName.YELLOW); return Color.YELLOW; };
            ;
            Color.RED_$LI$ = function () { if (Color.RED == null)
                Color.RED = new Color(splashjs.utils.ColorName.RED); return Color.RED; };
            ;
            Color.BLACK_$LI$ = function () { if (Color.BLACK == null)
                Color.BLACK = new Color(splashjs.utils.ColorName.BLACK); return Color.BLACK; };
            ;
            Color.WHITE_$LI$ = function () { if (Color.WHITE == null)
                Color.WHITE = new Color(splashjs.utils.ColorName.WHITE); return Color.WHITE; };
            ;
            Color.TOMATO_$LI$ = function () { if (Color.TOMATO == null)
                Color.TOMATO = new Color(splashjs.utils.ColorName.TOMATO); return Color.TOMATO; };
            ;
            Color.ORANGE_$LI$ = function () { if (Color.ORANGE == null)
                Color.ORANGE = new Color(splashjs.utils.ColorName.ORANGE); return Color.ORANGE; };
            ;
            Color.DODGER_BLUE_$LI$ = function () { if (Color.DODGER_BLUE == null)
                Color.DODGER_BLUE = new Color(splashjs.utils.ColorName.DODGER_BLUE); return Color.DODGER_BLUE; };
            ;
            Color.MEDIUM_SEA_GREEN_$LI$ = function () { if (Color.MEDIUM_SEA_GREEN == null)
                Color.MEDIUM_SEA_GREEN = new Color(splashjs.utils.ColorName.MEDIUM_SEA_GREEN); return Color.MEDIUM_SEA_GREEN; };
            ;
            Color.GRAY_$LI$ = function () { if (Color.GRAY == null)
                Color.GRAY = new Color(splashjs.utils.ColorName.GRAY); return Color.GRAY; };
            ;
            Color.SLATE_BLUE_$LI$ = function () { if (Color.SLATE_BLUE == null)
                Color.SLATE_BLUE = new Color(splashjs.utils.ColorName.SLATE_BLUE); return Color.SLATE_BLUE; };
            ;
            Color.AQUA_$LI$ = function () { if (Color.AQUA == null)
                Color.AQUA = new Color(splashjs.utils.ColorName.AQUA); return Color.AQUA; };
            ;
            Color.VIOLET_$LI$ = function () { if (Color.VIOLET == null)
                Color.VIOLET = new Color(splashjs.utils.ColorName.VIOLET); return Color.VIOLET; };
            ;
            Color.LIGHT_GRAY_$LI$ = function () { if (Color.LIGHT_GRAY == null)
                Color.LIGHT_GRAY = new Color(splashjs.utils.ColorName.LIGHT_GRAY); return Color.LIGHT_GRAY; };
            ;
            Color.createRGB = function (red, green, blue) {
                return new Color(red, green, blue);
            };
            Color.createRGBA = function (red, green, blue, alpha) {
                return new Color(red, green, blue, alpha);
            };
            Color.createHEX = function (hex) {
                return new Color(hex);
            };
            Color.createHSL = function (hue, saturation, lightness) {
                return new Color(hue, saturation, lightness);
            };
            Color.createHSLA = function (hue, saturation, lightness, alpha) {
                return new Color(hue, saturation, lightness, alpha);
            };
            Color.prototype.getColorName = function () {
                return this.colorName;
            };
            Color.prototype.getColorType = function () {
                return this.colorType;
            };
            Color.prototype.getRed = function () {
                return this.red;
            };
            Color.prototype.getGreen = function () {
                return this.green;
            };
            Color.prototype.getBlue = function () {
                return this.blue;
            };
            Color.prototype.getHue = function () {
                return this.hue;
            };
            Color.prototype.getSaturation = function () {
                return this.saturation;
            };
            Color.prototype.getLightness = function () {
                return this.lightness;
            };
            Color.prototype.getAlpha = function () {
                return this.alpha;
            };
            Color.prototype.getHEX = function () {
                return this.hex;
            };
            Color.prototype.getGradient = function () {
                return this.gradient;
            };
            return Color;
        }());
        utils.Color = Color;
        Color["__class"] = "splashjs.utils.Color";
        Color["__interfaces"] = ["splashjs.utils.iface.IColor"];
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (java) {
    var util;
    (function (util) {
        var Timer = /** @class */ (function () {
            function Timer(name, daemon) {
                var _this = this;
                this.timeouts = (new Array());
                this.intervals = (new Array());
                if (((typeof name === 'string') || name === null) && ((typeof daemon === 'boolean') || daemon === null)) {
                    var __args = arguments;
                    if (this.name === undefined)
                        this.name = null;
                    this.timeouts = (new Array());
                    this.intervals = (new Array());
                    if (this.name === undefined)
                        this.name = null;
                    (function () {
                        _this.name = name;
                    })();
                }
                else if (((typeof name === 'string') || name === null) && daemon === undefined) {
                    var __args = arguments;
                    {
                        var __args_4 = arguments;
                        var daemon_1 = true;
                        if (this.name === undefined)
                            this.name = null;
                        this.timeouts = (new Array());
                        this.intervals = (new Array());
                        if (this.name === undefined)
                            this.name = null;
                        (function () {
                            _this.name = name;
                        })();
                    }
                }
                else if (((typeof name === 'boolean') || name === null) && daemon === undefined) {
                    var __args = arguments;
                    var daemon_2 = __args[0];
                    {
                        var __args_5 = arguments;
                        {
                            var __args_6 = arguments;
                            var name_1 = "Timer-" + ++Timer.nextSerialNumber;
                            var daemon_3 = true;
                            if (this.name === undefined)
                                this.name = null;
                            this.timeouts = (new Array());
                            this.intervals = (new Array());
                            if (this.name === undefined)
                                this.name = null;
                            (function () {
                                _this.name = name_1;
                            })();
                        }
                    }
                }
                else if (name === undefined && daemon === undefined) {
                    var __args = arguments;
                    {
                        var __args_7 = arguments;
                        var name_2 = "Timer-" + ++Timer.nextSerialNumber;
                        var daemon_4 = true;
                        if (this.name === undefined)
                            this.name = null;
                        this.timeouts = (new Array());
                        this.intervals = (new Array());
                        if (this.name === undefined)
                            this.name = null;
                        (function () {
                            _this.name = name_2;
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
            }
            Timer.prototype.schedule$java_util_TimerTask$long = function (task, delay) {
                if (delay < 0) {
                    throw Object.defineProperty(new Error("Negative delay."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                }
                else {
                    this.schedule$java_util_TimerTask$java_util_Date(task, new Date(/* currentTimeMillis */ Date.now() + delay));
                }
            };
            Timer.prototype.schedule$java_util_TimerTask$java_util_Date = function (task, time) {
                var _this = this;
                task.nextExecutionTime = time.getTime();
                task.handle = (window.setTimeout((function () {
                    if (task.state !== java.util.TimerTask.CANCELLED) {
                        task.run();
                        task.state = java.util.TimerTask.EXECUTED;
                    }
                    _this.timeouts.splice(_this.timeouts.indexOf(task), 1);
                }), time.getTime() - /* currentTimeMillis */ Date.now()) | 0);
                this.timeouts.push(task);
                task.state = java.util.TimerTask.SCHEDULED;
            };
            Timer.prototype.schedule$java_util_TimerTask$long$long = function (task, delay, period) {
                if (delay < 0) {
                    throw Object.defineProperty(new Error("Negative delay."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                }
                else {
                    this.schedule$java_util_TimerTask$java_util_Date$long(task, new Date(/* currentTimeMillis */ Date.now() + delay), period);
                }
            };
            Timer.prototype.schedule$java_util_TimerTask$java_util_Date$long = function (task, time, period) {
                var _this = this;
                if (period <= 0) {
                    throw Object.defineProperty(new Error("Non-positive period."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                }
                else {
                    task.period = period;
                    task.nextExecutionTime = time.getTime();
                    task.handle = (window.setTimeout((function () {
                        if (task.state !== java.util.TimerTask.CANCELLED) {
                            task.run();
                            _this.schedule$java_util_TimerTask$long$long(task, period, period);
                        }
                        else {
                            _this.timeouts.splice(_this.timeouts.indexOf(task), 1);
                        }
                    }), time.getTime() - /* currentTimeMillis */ Date.now()) | 0);
                    this.timeouts.push(task);
                    task.state = java.util.TimerTask.SCHEDULED;
                }
            };
            Timer.prototype.schedule = function (task, time, period) {
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
            };
            Timer.prototype.scheduleAtFixedRate$java_util_TimerTask$long$long = function (task, delay, period) {
                if (delay < 0) {
                    throw Object.defineProperty(new Error("Negative delay."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                }
                else {
                    this.scheduleAtFixedRate$java_util_TimerTask$java_util_Date$long(task, new Date(/* currentTimeMillis */ Date.now() + delay), period);
                }
            };
            Timer.prototype.scheduleAtFixedRate$java_util_TimerTask$java_util_Date$long = function (task, time, period) {
                if (period <= 0) {
                    throw Object.defineProperty(new Error("Non-positive period."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                }
                else {
                    task.period = period;
                    task.nextExecutionTime = time.getTime();
                    var start = new Timer.Timer$0(this, task);
                    this.schedule$java_util_TimerTask$java_util_Date(start, time);
                    task.handle = start.handle;
                }
            };
            Timer.prototype.scheduleAtFixedRate = function (task, time, period) {
                if (((task != null && task instanceof java.util.TimerTask) || task === null) && ((time != null && time instanceof Date) || time === null) && ((typeof period === 'number') || period === null)) {
                    return this.scheduleAtFixedRate$java_util_TimerTask$java_util_Date$long(task, time, period);
                }
                else if (((task != null && task instanceof java.util.TimerTask) || task === null) && ((typeof time === 'number') || time === null) && ((typeof period === 'number') || period === null)) {
                    return this.scheduleAtFixedRate$java_util_TimerTask$long$long(task, time, period);
                }
                else
                    throw new Error('invalid overload');
            };
            Timer.prototype.cancel = function () {
                for (var index125 = 0; index125 < this.timeouts.length; index125++) {
                    var task = this.timeouts[index125];
                    {
                        clearTimeout(task.handle);
                    }
                }
                for (var index126 = 0; index126 < this.intervals.length; index126++) {
                    var task = this.intervals[index126];
                    {
                        clearInterval(task.handle);
                    }
                }
                this.intervals = (new Array());
                this.timeouts = (new Array());
            };
            Timer.prototype.purge = function () {
                var newTimeouts = this.timeouts.filter(function (timerTask) { return timerTask.handle !== java.util.TimerTask.EXECUTED && timerTask.handle !== java.util.TimerTask.CANCELLED; });
                var newIntervals = this.intervals.filter(function (timerTask) { return timerTask.handle !== java.util.TimerTask.EXECUTED && timerTask.handle !== java.util.TimerTask.CANCELLED; });
                var purged = this.timeouts.length - newTimeouts.length + this.intervals.length - newIntervals.length;
                this.timeouts = newTimeouts;
                this.intervals = newIntervals;
                return purged;
            };
            Timer.nextSerialNumber = 0;
            return Timer;
        }());
        util.Timer = Timer;
        Timer["__class"] = "java.util.Timer";
        (function (Timer) {
            var Timer$0 = /** @class */ (function (_super) {
                __extends(Timer$0, _super);
                function Timer$0(__parent, task) {
                    var _this = _super.call(this) || this;
                    _this.task = task;
                    _this.__parent = __parent;
                    return _this;
                }
                /**
                 *
                 */
                Timer$0.prototype.run = function () {
                    var _this = this;
                    if (this.task.state !== java.util.TimerTask.CANCELLED) {
                        this.task.nextExecutionTime = /* currentTimeMillis */ Date.now() + this.task.period;
                        this.task.handle = (window.setInterval((function () {
                            if (_this.task.state !== java.util.TimerTask.CANCELLED) {
                                _this.task.nextExecutionTime = /* currentTimeMillis */ Date.now() + _this.task.period;
                                _this.task.run();
                            }
                            else {
                                clearInterval(_this.task.handle);
                                _this.__parent.intervals.splice(_this.__parent.intervals.indexOf(_this.task), 1);
                            }
                        }), this.task.period) | 0);
                        this.__parent.intervals.push(this.task);
                        this.task.run();
                    }
                };
                return Timer$0;
            }(java.util.TimerTask));
            Timer.Timer$0 = Timer$0;
            Timer$0["__interfaces"] = ["java.lang.Runnable"];
        })(Timer = util.Timer || (util.Timer = {}));
    })(util = java.util || (java.util = {}));
})(java || (java = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        var EOFError = /** @class */ (function (_super) {
            __extends(EOFError, _super);
            function EOFError(message) {
                var _this = _super.call(this, message) || this;
                Object.setPrototypeOf(_this, EOFError.prototype);
                _this.name = /* getName */ (function (c) { return c["__class"] ? c["__class"] : c["name"]; })(_this.constructor);
                return _this;
            }
            return EOFError;
        }(splashjs.lang.IOError));
        lang.EOFError = EOFError;
        EOFError["__class"] = "splashjs.lang.EOFError";
        EOFError["__interfaces"] = ["splashjs.lang.iface.IEOFError", "splashjs.lang.iface.ISplashError", "splashjs.lang.iface.IIOError", "java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        var FileSystemError = /** @class */ (function (_super) {
            __extends(FileSystemError, _super);
            function FileSystemError(message) {
                var _this = _super.call(this, message) || this;
                Object.setPrototypeOf(_this, FileSystemError.prototype);
                return _this;
            }
            return FileSystemError;
        }(splashjs.lang.IOError));
        lang.FileSystemError = FileSystemError;
        FileSystemError["__class"] = "splashjs.lang.FileSystemError";
        FileSystemError["__interfaces"] = ["splashjs.lang.iface.ISplashError", "splashjs.lang.iface.IIOError", "java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var application;
    (function (application) {
        var Application = /** @class */ (function (_super) {
            __extends(Application, _super);
            function Application() {
                var _this = _super.call(this, "browserApp") || this;
                _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Application, _this));
                return _this;
            }
            Application.getApplicationInstance = function () {
                if (Application.application == null)
                    Application.application = new Application();
                return Application.application;
            };
            Application.prototype.isOnline = function () {
                return _super.prototype.getRenderer.call(this).isOnline();
            };
            Application.application = null;
            return Application;
        }(splashjs.events.EventDispatcher));
        application.Application = Application;
        Application["__class"] = "splashjs.application.Application";
        Application["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.application.iface.IApplication"];
    })(application = splashjs.application || (splashjs.application = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var application;
    (function (application) {
        var StageOwner = /** @class */ (function (_super) {
            __extends(StageOwner, _super);
            function StageOwner(stageOwnerName, stage, width, height) {
                var _this = _super.call(this, stageOwnerName) || this;
                if (_this.__splashjs_application_StageOwner_renderer === undefined)
                    _this.__splashjs_application_StageOwner_renderer = null;
                if (_this.stage === undefined)
                    _this.stage = null;
                if (_this.width === undefined)
                    _this.width = 0;
                if (_this.height === undefined)
                    _this.height = 0;
                _this.stage = stage;
                _this.width = width;
                _this.height = height;
                _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(StageOwner, _this));
                return _this;
            }
            StageOwner.prototype.getStage = function () {
                return this.stage;
            };
            StageOwner.prototype.setWidth = function (width) {
                this.width = width;
            };
            StageOwner.prototype.getWidth = function () {
                return this.width;
            };
            StageOwner.prototype.setHeight = function (height) {
                this.height = height;
            };
            StageOwner.prototype.getHeight = function () {
                return this.height;
            };
            return StageOwner;
        }(splashjs.events.EventDispatcher));
        application.StageOwner = StageOwner;
        StageOwner["__class"] = "splashjs.application.StageOwner";
        StageOwner["__interfaces"] = ["splashjs.application.iface.IStageOwner", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(application = splashjs.application || (splashjs.application = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var DisplayObject = /** @class */ (function (_super) {
            __extends(DisplayObject, _super);
            function DisplayObject(id) {
                var _this = this;
                if (((typeof id === 'string') || id === null)) {
                    var __args = arguments;
                    _this = _super.call(this, id) || this;
                    if (_this.x === undefined)
                        _this.x = 0;
                    if (_this.y === undefined)
                        _this.y = 0;
                    if (_this.width === undefined)
                        _this.width = 0;
                    if (_this.height === undefined)
                        _this.height = 0;
                    if (_this.regX === undefined)
                        _this.regX = null;
                    if (_this.regY === undefined)
                        _this.regY = null;
                    if (_this.scaleX === undefined)
                        _this.scaleX = 0;
                    if (_this.scaleY === undefined)
                        _this.scaleY = 0;
                    if (_this.rotation === undefined)
                        _this.rotation = 0;
                    if (_this.visible === undefined)
                        _this.visible = null;
                    if (_this.alpha === undefined)
                        _this.alpha = null;
                    if (_this.name === undefined)
                        _this.name = null;
                    if (_this.parent === undefined)
                        _this.parent = null;
                    if (_this.mouseX === undefined)
                        _this.mouseX = null;
                    if (_this.mouseY === undefined)
                        _this.mouseY = null;
                    if (_this.mouseVisible === undefined)
                        _this.mouseVisible = false;
                    if (_this.mouseCursor === undefined)
                        _this.mouseCursor = null;
                    if (_this.originalWidth === undefined)
                        _this.originalWidth = 0;
                    if (_this.originalHeight === undefined)
                        _this.originalHeight = 0;
                    if (_this.filters === undefined)
                        _this.filters = null;
                    if (_this.x === undefined)
                        _this.x = 0;
                    if (_this.y === undefined)
                        _this.y = 0;
                    if (_this.width === undefined)
                        _this.width = 0;
                    if (_this.height === undefined)
                        _this.height = 0;
                    if (_this.regX === undefined)
                        _this.regX = null;
                    if (_this.regY === undefined)
                        _this.regY = null;
                    if (_this.scaleX === undefined)
                        _this.scaleX = 0;
                    if (_this.scaleY === undefined)
                        _this.scaleY = 0;
                    if (_this.rotation === undefined)
                        _this.rotation = 0;
                    if (_this.visible === undefined)
                        _this.visible = null;
                    if (_this.alpha === undefined)
                        _this.alpha = null;
                    if (_this.name === undefined)
                        _this.name = null;
                    if (_this.parent === undefined)
                        _this.parent = null;
                    if (_this.mouseX === undefined)
                        _this.mouseX = null;
                    if (_this.mouseY === undefined)
                        _this.mouseY = null;
                    if (_this.mouseVisible === undefined)
                        _this.mouseVisible = false;
                    if (_this.mouseCursor === undefined)
                        _this.mouseCursor = null;
                    if (_this.originalWidth === undefined)
                        _this.originalWidth = 0;
                    if (_this.originalHeight === undefined)
                        _this.originalHeight = 0;
                    if (_this.filters === undefined)
                        _this.filters = null;
                    (function () {
                        _this.x = 0;
                        _this.y = 0;
                        _this.width = 0;
                        _this.height = 0;
                        _this.regX = 0;
                        _this.regY = 0;
                        _this.scaleX = 1.0;
                        _this.scaleY = 1.0;
                        _this.rotation = 0.0;
                        _this.visible = true;
                        _this.alpha = 1.0;
                        _this.name = null;
                        _this.parent = null;
                        _this.mouseX = null;
                        _this.mouseY = null;
                        _this.mouseVisible = true;
                        _this.mouseCursor = splashjs.ui.MouseCursor.AUTO_$LI$();
                        _this.filters = ([]);
                    })();
                }
                else if (id === undefined) {
                    var __args = arguments;
                    {
                        var __args_8 = arguments;
                        var id_2 = "splashjs";
                        _this = _super.call(this, id_2) || this;
                        if (_this.x === undefined)
                            _this.x = 0;
                        if (_this.y === undefined)
                            _this.y = 0;
                        if (_this.width === undefined)
                            _this.width = 0;
                        if (_this.height === undefined)
                            _this.height = 0;
                        if (_this.regX === undefined)
                            _this.regX = null;
                        if (_this.regY === undefined)
                            _this.regY = null;
                        if (_this.scaleX === undefined)
                            _this.scaleX = 0;
                        if (_this.scaleY === undefined)
                            _this.scaleY = 0;
                        if (_this.rotation === undefined)
                            _this.rotation = 0;
                        if (_this.visible === undefined)
                            _this.visible = null;
                        if (_this.alpha === undefined)
                            _this.alpha = null;
                        if (_this.name === undefined)
                            _this.name = null;
                        if (_this.parent === undefined)
                            _this.parent = null;
                        if (_this.mouseX === undefined)
                            _this.mouseX = null;
                        if (_this.mouseY === undefined)
                            _this.mouseY = null;
                        if (_this.mouseVisible === undefined)
                            _this.mouseVisible = false;
                        if (_this.mouseCursor === undefined)
                            _this.mouseCursor = null;
                        if (_this.originalWidth === undefined)
                            _this.originalWidth = 0;
                        if (_this.originalHeight === undefined)
                            _this.originalHeight = 0;
                        if (_this.filters === undefined)
                            _this.filters = null;
                        if (_this.x === undefined)
                            _this.x = 0;
                        if (_this.y === undefined)
                            _this.y = 0;
                        if (_this.width === undefined)
                            _this.width = 0;
                        if (_this.height === undefined)
                            _this.height = 0;
                        if (_this.regX === undefined)
                            _this.regX = null;
                        if (_this.regY === undefined)
                            _this.regY = null;
                        if (_this.scaleX === undefined)
                            _this.scaleX = 0;
                        if (_this.scaleY === undefined)
                            _this.scaleY = 0;
                        if (_this.rotation === undefined)
                            _this.rotation = 0;
                        if (_this.visible === undefined)
                            _this.visible = null;
                        if (_this.alpha === undefined)
                            _this.alpha = null;
                        if (_this.name === undefined)
                            _this.name = null;
                        if (_this.parent === undefined)
                            _this.parent = null;
                        if (_this.mouseX === undefined)
                            _this.mouseX = null;
                        if (_this.mouseY === undefined)
                            _this.mouseY = null;
                        if (_this.mouseVisible === undefined)
                            _this.mouseVisible = false;
                        if (_this.mouseCursor === undefined)
                            _this.mouseCursor = null;
                        if (_this.originalWidth === undefined)
                            _this.originalWidth = 0;
                        if (_this.originalHeight === undefined)
                            _this.originalHeight = 0;
                        if (_this.filters === undefined)
                            _this.filters = null;
                        (function () {
                            _this.x = 0;
                            _this.y = 0;
                            _this.width = 0;
                            _this.height = 0;
                            _this.regX = 0;
                            _this.regY = 0;
                            _this.scaleX = 1.0;
                            _this.scaleY = 1.0;
                            _this.rotation = 0.0;
                            _this.visible = true;
                            _this.alpha = 1.0;
                            _this.name = null;
                            _this.parent = null;
                            _this.mouseX = null;
                            _this.mouseY = null;
                            _this.mouseVisible = true;
                            _this.mouseCursor = splashjs.ui.MouseCursor.AUTO_$LI$();
                            _this.filters = ([]);
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            DisplayObject.prototype.getX = function () {
                return this.x;
            };
            DisplayObject.prototype.setX = function (x) {
                this.x = x;
                _super.prototype.getRenderer.call(this).setX();
            };
            DisplayObject.prototype.getY = function () {
                return this.y;
            };
            DisplayObject.prototype.setY = function (y) {
                this.y = y;
                _super.prototype.getRenderer.call(this).setY();
            };
            DisplayObject.prototype.setXY = function (x, y) {
                this.setX(x);
                this.setY(y);
            };
            DisplayObject.prototype.getWidth = function () {
                return this.width;
            };
            DisplayObject.prototype.setWidth = function (width) {
                this.width = width;
                _super.prototype.getRenderer.call(this).setWidth();
            };
            DisplayObject.prototype.getHeight = function () {
                return this.height;
            };
            DisplayObject.prototype.setHeight = function (height) {
                this.height = height;
                _super.prototype.getRenderer.call(this).setHeight();
            };
            DisplayObject.prototype.setSize = function (width, height) {
                this.setWidth(width);
                this.setHeight(height);
            };
            DisplayObject.prototype.getRegX = function () {
                return this.regX;
            };
            DisplayObject.prototype.setRegX = function (regX) {
                this.regX = regX;
                _super.prototype.getRenderer.call(this).setRegX();
            };
            DisplayObject.prototype.getRegY = function () {
                return this.regY;
            };
            DisplayObject.prototype.setRegY = function (regY) {
                this.regY = regY;
                _super.prototype.getRenderer.call(this).setRegX();
            };
            DisplayObject.prototype.setRegXY = function (regX, regY) {
                this.setRegX(regX);
                this.setRegY(regY);
            };
            DisplayObject.prototype.getScaleX = function () {
                return this.scaleX;
            };
            DisplayObject.prototype.setScaleX = function (scaleX) {
                this.scaleX = scaleX;
                _super.prototype.getRenderer.call(this).setScaleX();
            };
            DisplayObject.prototype.getScaleY = function () {
                return this.scaleY;
            };
            DisplayObject.prototype.setScaleY = function (scaleY) {
                this.scaleY = scaleY;
                _super.prototype.getRenderer.call(this).setScaleY();
            };
            DisplayObject.prototype.setScaleXY = function (scaleX, scaleY) {
                this.setScaleX(scaleX);
                this.setScaleY(scaleY);
            };
            DisplayObject.prototype.getRotation = function () {
                return this.rotation;
            };
            DisplayObject.prototype.setRotation = function (rotation) {
                this.rotation = rotation;
                _super.prototype.getRenderer.call(this).setRotation();
            };
            DisplayObject.prototype.getVisible = function () {
                return this.visible;
            };
            DisplayObject.prototype.setVisible = function (visible) {
                this.visible = visible;
                _super.prototype.getRenderer.call(this).setVisible();
            };
            DisplayObject.prototype.getAlpha = function () {
                return this.alpha;
            };
            DisplayObject.prototype.setAlpha = function (alpha) {
                this.alpha = alpha;
                _super.prototype.getRenderer.call(this).setAlpha();
            };
            DisplayObject.prototype.getName = function () {
                return this.name;
            };
            DisplayObject.prototype.setName = function (name) {
                this.name = name;
            };
            DisplayObject.prototype.getParent = function () {
                return this.parent;
            };
            DisplayObject.prototype.getMouseX = function () {
                return this.mouseX;
            };
            DisplayObject.prototype.getMouseY = function () {
                return this.mouseY;
            };
            DisplayObject.prototype.setMouseVisible = function (mouseVisible) {
                this.mouseVisible = mouseVisible;
                _super.prototype.getRenderer.call(this).setMouseVisible();
            };
            DisplayObject.prototype.getMouseVisible = function () {
                return this.mouseVisible;
            };
            DisplayObject.prototype.setMouseCursor = function (mouseCursor) {
                this.mouseCursor = mouseCursor;
                _super.prototype.getRenderer.call(this).setMouseCursor();
            };
            DisplayObject.prototype.getMouseCursor = function () {
                return this.mouseCursor;
            };
            DisplayObject.prototype.addFilter = function (filter) {
                /* add */ (this.filters.push(filter) > 0);
                _super.prototype.getRenderer.call(this).addFilter();
            };
            DisplayObject.prototype.getFilters = function () {
                return this.filters;
            };
            /**
             *
             */
            DisplayObject.prototype.render = function () {
                _super.prototype.render.call(this);
                _super.prototype.getRenderer.call(this).setPosition("absolute");
                _super.prototype.getRenderer.call(this).setDisplay("inline-blick");
                _super.prototype.getRenderer.call(this).setMargin("0");
                _super.prototype.getRenderer.call(this).setPadding("0");
                _super.prototype.getRenderer.call(this).setID();
                _super.prototype.getRenderer.call(this).setRegXY();
                _super.prototype.getRenderer.call(this).setXY();
                _super.prototype.getRenderer.call(this).setScaleXY();
                _super.prototype.getRenderer.call(this).setRotation();
                _super.prototype.getRenderer.call(this).addFilter();
                _super.prototype.getRenderer.call(this).setVisible();
                _super.prototype.getRenderer.call(this).setAlpha();
                _super.prototype.getRenderer.call(this).setMouseCursor();
                _super.prototype.getRenderer.call(this).setMouseVisible();
            };
            DisplayObject.prototype.dispatchEvent = function (event) {
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.stage = event.getData();
                    this.render();
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.REMOVED_FROM_STAGE)) {
                    this.stage = null;
                }
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED)) {
                    this.parent = event.getData();
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.REMOVED)) {
                    this.parent = null;
                }
                return _super.prototype.dispatchEvent.call(this, event);
            };
            return DisplayObject;
        }(splashjs.events.EventDispatcher));
        display.DisplayObject = DisplayObject;
        DisplayObject["__class"] = "splashjs.display.DisplayObject";
        DisplayObject["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var net;
    (function (net) {
        var FileReference = /** @class */ (function (_super) {
            __extends(FileReference, _super);
            function FileReference(stage) {
                var _this = _super.call(this, "fileReference") || this;
                if (_this.creationDate === undefined)
                    _this.creationDate = null;
                if (_this.creator === undefined)
                    _this.creator = null;
                if (_this.data === undefined)
                    _this.data = null;
                if (_this.extension === undefined)
                    _this.extension = null;
                if (_this.modificationDate === undefined)
                    _this.modificationDate = null;
                if (_this.name === undefined)
                    _this.name = null;
                if (_this.permissionStatus === undefined)
                    _this.permissionStatus = null;
                if (_this.size === undefined)
                    _this.size = 0;
                if (_this.type === undefined)
                    _this.type = null;
                _this.stage = stage;
                _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(FileReference, _this));
                return _this;
            }
            FileReference.prototype.getCreationDate = function () {
                return this.creationDate;
            };
            FileReference.prototype.getCreator = function () {
                return this.creator;
            };
            FileReference.prototype.getData = function () {
                return this.data;
            };
            FileReference.prototype.getExtension = function () {
                return this.extension;
            };
            FileReference.prototype.getModificationDate = function () {
                return this.modificationDate;
            };
            FileReference.prototype.getName = function () {
                return this.name;
            };
            FileReference.prototype.getPermissionStatus = function () {
                return this.permissionStatus;
            };
            FileReference.prototype.getSize = function () {
                return this.size;
            };
            FileReference.prototype.getType = function () {
                return this.type;
            };
            FileReference.prototype.browse$ = function () {
                var value = false;
                _super.prototype.getRenderer.call(this).browse();
                return value;
            };
            FileReference.prototype.browse$java_lang_String_A = function (typeFilter) {
                var value = false;
                _super.prototype.getRenderer.call(this).browse();
                return value;
            };
            FileReference.prototype.browse = function (typeFilter) {
                if (((typeFilter != null && typeFilter instanceof Array && (typeFilter.length == 0 || typeFilter[0] == null || (typeof typeFilter[0] === 'string'))) || typeFilter === null)) {
                    return this.browse$java_lang_String_A(typeFilter);
                }
                else if (typeFilter === undefined) {
                    return this.browse$();
                }
                else
                    throw new Error('invalid overload');
            };
            FileReference.prototype.cancel = function () {
            };
            FileReference.prototype.download = function (urlRequest, defaultFileName) {
                _super.prototype.getRenderer.call(this).download(urlRequest, defaultFileName);
            };
            FileReference.prototype.load = function () {
            };
            FileReference.prototype.requestPermission = function () {
            };
            FileReference.prototype.save = function (data, defaultFileName) {
            };
            FileReference.prototype.upload = function (urlRequest, uploadDataFieldName, testUpload) {
            };
            FileReference.prototype.uploadUnencoded = function (urlRequest) {
            };
            return FileReference;
        }(splashjs.events.EventDispatcher));
        net.FileReference = FileReference;
        FileReference["__class"] = "splashjs.net.FileReference";
        FileReference["__interfaces"] = ["splashjs.net.iface.IFileReference", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(net = splashjs.net || (splashjs.net = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var net;
    (function (net) {
        var URLLoader = /** @class */ (function (_super) {
            __extends(URLLoader, _super);
            function URLLoader(urlRequest) {
                var _this = _super.call(this) || this;
                if (_this.bytesLoaded === undefined)
                    _this.bytesLoaded = 0;
                if (_this.bytesTotal === undefined)
                    _this.bytesTotal = 0;
                if (_this.data === undefined)
                    _this.data = null;
                if (_this.dataFormat === undefined)
                    _this.dataFormat = null;
                if (_this.urlRequest === undefined)
                    _this.urlRequest = null;
                _this.urlRequest = urlRequest;
                _this.dataFormat = splashjs.net.URLLoaderDataFormat.TEXT;
                return _this;
            }
            /**
             *
             */
            URLLoader.prototype.close = function () {
            };
            /**
             *
             */
            URLLoader.prototype.load = function () {
                var urlRequestMethod = this.urlRequest.getURLRequestMethod();
                var method = "get";
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(urlRequestMethod, splashjs.net.URLRequestMethod.GET))
                    method = "get";
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(urlRequestMethod, splashjs.net.URLRequestMethod.POST))
                    method = "post";
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(urlRequestMethod, splashjs.net.URLRequestMethod.DELETE))
                    method = "delete";
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(urlRequestMethod, splashjs.net.URLRequestMethod.PUT))
                    method = "put";
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(urlRequestMethod, splashjs.net.URLRequestMethod.HEAD))
                    method = "head";
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(urlRequestMethod, splashjs.net.URLRequestMethod.OPTIONS))
                    method = "options";
                var url = this.urlRequest.getURL();
            };
            /**
             *
             * @return {number}
             */
            URLLoader.prototype.getBytesTotal = function () {
                return this.bytesTotal;
            };
            /**
             *
             * @return {number}
             */
            URLLoader.prototype.getBytesLoaded = function () {
                return this.bytesLoaded;
            };
            /**
             *
             * @return {*}
             */
            URLLoader.prototype.getData = function () {
                return this.data;
            };
            /*private*/ URLLoader.prototype.dispatchCompleteEvent = function (completeEvent) {
                this.dispatchEvent(completeEvent);
            };
            /*private*/ URLLoader.prototype.dispatchProgressEvent = function (progressEvent) {
                this.dispatchEvent(progressEvent);
            };
            return URLLoader;
        }(splashjs.events.EventDispatcher));
        net.URLLoader = URLLoader;
        URLLoader["__class"] = "splashjs.net.URLLoader";
        URLLoader["__interfaces"] = ["splashjs.net.iface.IURLLoader", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(net = splashjs.net || (splashjs.net = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        var desktop;
        (function (desktop) {
            var Timer = /** @class */ (function (_super) {
                __extends(Timer, _super);
                function Timer() {
                    return _super.call(this) || this;
                }
                return Timer;
            }(splashjs.events.EventDispatcher));
            desktop.Timer = Timer;
            Timer["__class"] = "splashjs.utils.desktop.Timer";
            Timer["__interfaces"] = ["splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
        })(desktop = utils.desktop || (utils.desktop = {}));
    })(utils = splashjs.utils || (splashjs.utils = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var utils;
    (function (utils) {
        var Timer = /** @class */ (function (_super) {
            __extends(Timer, _super);
            function Timer(delay, repeatCount) {
                var _this = this;
                if (((typeof delay === 'number') || delay === null) && ((typeof repeatCount === 'number') || repeatCount === null)) {
                    var __args = arguments;
                    _this = _super.call(this, "timer") || this;
                    _this.currentCount = 0;
                    _this.delay = 0;
                    _this.repeatCount = 0;
                    _this.running = false;
                    _this.jTimer = new java.util.Timer();
                    (function () {
                        _this.delay = delay;
                        _this.repeatCount = repeatCount;
                    })();
                }
                else if (((typeof delay === 'number') || delay === null) && repeatCount === undefined) {
                    var __args = arguments;
                    _this = _super.call(this, "timer") || this;
                    _this.currentCount = 0;
                    _this.delay = 0;
                    _this.repeatCount = 0;
                    _this.running = false;
                    _this.jTimer = new java.util.Timer();
                    (function () {
                        _this.delay = delay;
                    })();
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            Timer.prototype.reset = function () {
                this.jTimer.cancel();
                this.currentCount = 0;
                this.running = false;
            };
            Timer.prototype.start = function () {
                this.jTimer.scheduleAtFixedRate$java_util_TimerTask$long$long(new Timer.Timer$0(this), 0, this.delay);
                this.running = true;
            };
            Timer.prototype.stop = function () {
                this.jTimer.cancel();
                this.running = false;
            };
            Timer.prototype.getCurrentCount = function () {
                return this.currentCount;
            };
            Timer.prototype.getDelay = function () {
                return this.delay;
            };
            Timer.prototype.setDelay = function (delay) {
                this.delay = delay;
            };
            Timer.prototype.getRepeatCount = function () {
                return this.repeatCount;
            };
            Timer.prototype.setRepeatCount = function (repeatCount) {
                this.repeatCount = repeatCount;
            };
            Timer.prototype.isRunning = function () {
                return this.running;
            };
            return Timer;
        }(splashjs.events.EventDispatcher));
        utils.Timer = Timer;
        Timer["__class"] = "splashjs.utils.Timer";
        Timer["__interfaces"] = ["splashjs.utils.iface.ITimer", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
        (function (Timer) {
            var Timer$0 = /** @class */ (function (_super) {
                __extends(Timer$0, _super);
                function Timer$0(__parent) {
                    var _this = _super.call(this) || this;
                    _this.__parent = __parent;
                    return _this;
                }
                Timer$0.prototype.run = function () {
                    this.__parent.dispatchEvent(new splashjs.events.TimerEvent(splashjs.events.TimerEvent.TIMER));
                    this.__parent.currentCount += 1;
                    if (this.__parent.currentCount === this.__parent.repeatCount) {
                        this.__parent.dispatchEvent(new splashjs.events.TimerEvent(splashjs.events.TimerEvent.TIMER_COMPLETE));
                        this.__parent.jTimer.cancel();
                        this.__parent.running = false;
                    }
                };
                return Timer$0;
            }(java.util.TimerTask));
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
            var EventDispatcherRenderer = /** @class */ (function (_super) {
                __extends(EventDispatcherRenderer, _super);
                function EventDispatcherRenderer() {
                    var _this = _super.call(this) || this;
                    if (_this.htmlElement === undefined)
                        _this.htmlElement = null;
                    return _this;
                }
                EventDispatcherRenderer.prototype.setDisplay = function (value) {
                    this.htmlElement = this.getDOMElement();
                    this.htmlElement.style.display = value;
                };
                return EventDispatcherRenderer;
            }(splashjs.render.lang.SplashObjectRenderer));
            events.EventDispatcherRenderer = EventDispatcherRenderer;
            EventDispatcherRenderer["__class"] = "splashjs.render.events.EventDispatcherRenderer";
            EventDispatcherRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(events = render.events || (render.events = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var lang;
    (function (lang) {
        var NoSuchFileError = /** @class */ (function (_super) {
            __extends(NoSuchFileError, _super);
            function NoSuchFileError(message) {
                var _this = this;
                if (((typeof message === 'string') || message === null)) {
                    var __args = arguments;
                    _this = _super.call(this, message) || this;
                    Object.setPrototypeOf(_this, NoSuchFileError.prototype);
                }
                else if (message === undefined) {
                    var __args = arguments;
                    _this = _super.call(this, "No such file") || this;
                    Object.setPrototypeOf(_this, NoSuchFileError.prototype);
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            return NoSuchFileError;
        }(splashjs.lang.FileSystemError));
        lang.NoSuchFileError = NoSuchFileError;
        NoSuchFileError["__class"] = "splashjs.lang.NoSuchFileError";
        NoSuchFileError["__interfaces"] = ["splashjs.lang.iface.ISplashError", "splashjs.lang.iface.IIOError", "java.io.Serializable"];
    })(lang = splashjs.lang || (splashjs.lang = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var InteractiveObject = /** @class */ (function (_super) {
            __extends(InteractiveObject, _super);
            function InteractiveObject(id) {
                var _this = this;
                if (((typeof id === 'string') || id === null)) {
                    var __args = arguments;
                    _this = _super.call(this, id) || this;
                }
                else if (id === undefined) {
                    var __args = arguments;
                    _this = _super.call(this) || this;
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            InteractiveObject.prototype.dispatchClickEvent = function (mouseEvent) {
                this.dispatchEvent(mouseEvent);
            };
            InteractiveObject.prototype.dispatchDoubleClickEvent = function (mouseEvent) {
                this.dispatchEvent(mouseEvent);
            };
            InteractiveObject.prototype.dispatchMouseMoveEvent = function () {
            };
            InteractiveObject.prototype.dispatchMouseDownEvent = function () {
            };
            InteractiveObject.prototype.dispatchMouseUpEvent = function () {
            };
            InteractiveObject.prototype.dispatchMouseOverEvent = function () {
            };
            InteractiveObject.prototype.dispatchMouseEnterEvent = function () {
            };
            InteractiveObject.prototype.dispatchMouseLeaveEvent = function () {
            };
            InteractiveObject.prototype.dispatchMouseOutEvent = function () {
            };
            return InteractiveObject;
        }(splashjs.display.DisplayObject));
        display.InteractiveObject = InteractiveObject;
        InteractiveObject["__class"] = "splashjs.display.InteractiveObject";
        InteractiveObject["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var media;
    (function (media) {
        var Sound = /** @class */ (function (_super) {
            __extends(Sound, _super);
            function Sound(resource) {
                var _this = this;
                if (((resource != null && (resource["__interfaces"] != null && resource["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0 || resource.constructor != null && resource.constructor["__interfaces"] != null && resource.constructor["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0)) || resource === null)) {
                    var __args = arguments;
                    _this = _super.call(this, "sound") || this;
                    if (_this.resource === undefined)
                        _this.resource = null;
                    if (_this.soundPath === undefined)
                        _this.soundPath = null;
                    if (_this.resource === undefined)
                        _this.resource = null;
                    if (_this.soundPath === undefined)
                        _this.soundPath = null;
                    (function () {
                        _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Sound, _this));
                        _this.soundPath = resource.getResourcePath();
                    })();
                }
                else if (((resource != null && (resource["__interfaces"] != null && resource["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0 || resource.constructor != null && resource.constructor["__interfaces"] != null && resource.constructor["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0)) || resource === null)) {
                    var __args = arguments;
                    var stage = __args[0];
                    _this = _super.call(this, "sound") || this;
                    if (_this.resource === undefined)
                        _this.resource = null;
                    if (_this.soundPath === undefined)
                        _this.soundPath = null;
                    if (_this.resource === undefined)
                        _this.resource = null;
                    if (_this.soundPath === undefined)
                        _this.soundPath = null;
                }
                else if (((typeof resource === 'string') || resource === null)) {
                    var __args = arguments;
                    var soundPath_1 = __args[0];
                    _this = _super.call(this, "sound") || this;
                    if (_this.resource === undefined)
                        _this.resource = null;
                    if (_this.soundPath === undefined)
                        _this.soundPath = null;
                    if (_this.resource === undefined)
                        _this.resource = null;
                    if (_this.soundPath === undefined)
                        _this.soundPath = null;
                    (function () {
                        _this.soundPath = soundPath_1;
                    })();
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            Sound.prototype.setSoundPath = function (soundPath) {
                this.soundPath = soundPath;
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).setSoundPath();
            };
            Sound.prototype.dispatchEvent = function (event) {
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                }
                return _super.prototype.dispatchEvent.call(this, event);
            };
            /**
             *
             * @return {string}
             */
            Sound.prototype.getSoundPath = function () {
                return this.soundPath;
            };
            /**
             *
             */
            Sound.prototype.render = function () {
                _super.prototype.render.call(this);
            };
            Sound.prototype.play = function () {
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).playSound();
            };
            Sound.prototype.pause = function () {
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).pauseSound();
            };
            Sound.prototype.toString = function () {
                return "[object Sound]";
            };
            return Sound;
        }(splashjs.display.DisplayObject));
        media.Sound = Sound;
        Sound["__class"] = "splashjs.media.Sound";
        Sound["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.lang.iface.ISplashObject", "splashjs.media.iface.ISound", "splashjs.events.iface.IEventDispatcher"];
    })(media = splashjs.media || (splashjs.media = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var media;
    (function (media) {
        var Video = /** @class */ (function (_super) {
            __extends(Video, _super);
            function Video(resource) {
                var _this = this;
                if (((resource != null && (resource["__interfaces"] != null && resource["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0 || resource.constructor != null && resource.constructor["__interfaces"] != null && resource.constructor["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0)) || resource === null)) {
                    var __args = arguments;
                    _this = _super.call(this, "video") || this;
                    if (_this.resource === undefined)
                        _this.resource = null;
                    if (_this.videoPath === undefined)
                        _this.videoPath = null;
                    if (_this.resource === undefined)
                        _this.resource = null;
                    if (_this.videoPath === undefined)
                        _this.videoPath = null;
                    (function () {
                        _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(splashjs.media.Sound, _this));
                        _this.videoPath = resource.getResourcePath();
                    })();
                }
                else if (((typeof resource === 'string') || resource === null)) {
                    var __args = arguments;
                    var videoPath_1 = __args[0];
                    _this = _super.call(this, "video") || this;
                    if (_this.resource === undefined)
                        _this.resource = null;
                    if (_this.videoPath === undefined)
                        _this.videoPath = null;
                    if (_this.resource === undefined)
                        _this.resource = null;
                    if (_this.videoPath === undefined)
                        _this.videoPath = null;
                    (function () {
                        _this.videoPath = videoPath_1;
                    })();
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            Video.prototype.dispatchEvent = function (event) {
                var val = _super.prototype.dispatchEvent.call(this, event);
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.EventName.ABOUT_TO_BE_ADDED_TO_STAGE)) {
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                }
                return val;
            };
            /**
             *
             * @return {string}
             */
            Video.prototype.getVideoPath = function () {
                return this.videoPath;
            };
            /**
             *
             * @param {string} videoPath
             */
            Video.prototype.setVideoPath = function (videoPath) {
                this.videoPath = videoPath;
            };
            /**
             *
             */
            Video.prototype.render = function () {
                _super.prototype.render.call(this);
            };
            Video.prototype.play = function () {
                _super.prototype.getRenderer.call(this).playVideo();
            };
            Video.prototype.toString = function () {
                return "[object Video]";
            };
            return Video;
        }(splashjs.display.DisplayObject));
        media.Video = Video;
        Video["__class"] = "splashjs.media.Video";
        Video["__interfaces"] = ["splashjs.media.iface.IVideo", "splashjs.display.iface.IDisplayObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(media = splashjs.media || (splashjs.media = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var application;
        (function (application) {
            var ApplicationRenderer = /** @class */ (function (_super) {
                __extends(ApplicationRenderer, _super);
                function ApplicationRenderer(renderObject) {
                    var _this = _super.call(this) || this;
                    _super.prototype.setRenderObject.call(_this, renderObject);
                    document.body.addEventListener("online", function (event) {
                        var onlineEvent = new splashjs.events.Event(splashjs.events.EventName.ONLINE);
                        _this.getRenderObject().dispatchEvent(onlineEvent);
                    });
                    document.body.addEventListener("offline", function (event) {
                        var offlineEvent = new splashjs.events.Event(splashjs.events.EventName.OFFLINE);
                        _this.getRenderObject().dispatchEvent(offlineEvent);
                    });
                    return _this;
                }
                ApplicationRenderer.prototype.isOnline = function () {
                    var online = false;
                    if (navigator.onLine === true)
                        online = true;
                    return online;
                };
                return ApplicationRenderer;
            }(splashjs.render.events.EventDispatcherRenderer));
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
            var StageOwnerRenderer = /** @class */ (function (_super) {
                __extends(StageOwnerRenderer, _super);
                function StageOwnerRenderer(renderObject) {
                    var _this = _super.call(this) || this;
                    _super.prototype.setRenderObject.call(_this, renderObject);
                    _this.create();
                    return _this;
                }
                StageOwnerRenderer.prototype.create = function () {
                    var _this = this;
                    var stageOwner = _super.prototype.getRenderObject.call(this);
                    var htmlElement = document.getElementById(_super.prototype.getRenderObject.call(this).getID());
                    if (htmlElement == null) {
                        htmlElement = document.createElement("div");
                        htmlElement.id = _super.prototype.getRenderObject.call(this).getID();
                        htmlElement.style.position = "absolute";
                        htmlElement.style.top = "0" + this.UNIT;
                        htmlElement.style.left = "0" + this.UNIT;
                        htmlElement.style.bottom = "0" + this.UNIT;
                        htmlElement.style.right = "0" + this.UNIT;
                        _super.prototype.setRenderElement.call(this, new splashjs.render.RenderElement(htmlElement));
                        this.appendToBody();
                    }
                    else {
                        _super.prototype.setRenderElement.call(this, new splashjs.render.RenderElement(htmlElement));
                    }
                    stageOwner.setWidth((htmlElement.clientWidth | 0));
                    stageOwner.setHeight((htmlElement.clientHeight | 0));
                    window.addEventListener("resize", (function (stageOwner) {
                        return function (event) {
                            var resizeEvent = new splashjs.events.Event(splashjs.events.Event.RESIZE);
                            resizeEvent.setTarget(_super.prototype.getRenderObject.call(_this));
                            resizeEvent.setCurrentTarget(_super.prototype.getRenderObject.call(_this));
                            var newWidth = (_super.prototype.getDOMElement.call(_this).clientWidth | 0);
                            var newHeight = (_super.prototype.getDOMElement.call(_this).clientHeight | 0);
                            stageOwner.setWidth(newWidth);
                            stageOwner.setHeight(newHeight);
                            stageOwner.dispatchEvent(resizeEvent);
                        };
                    })(stageOwner));
                };
                return StageOwnerRenderer;
            }(splashjs.render.events.EventDispatcherRenderer));
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
            var DisplayObjectRenderer = /** @class */ (function (_super) {
                __extends(DisplayObjectRenderer, _super);
                function DisplayObjectRenderer() {
                    var _this = _super.call(this) || this;
                    if (_this.__splashjs_render_display_DisplayObjectRenderer_htmlElement === undefined)
                        _this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = null;
                    return _this;
                }
                DisplayObjectRenderer.prototype.create = function () {
                };
                DisplayObjectRenderer.prototype.getOriginalWidth = function () {
                    return 0;
                };
                DisplayObjectRenderer.prototype.getOriginalHeight = function () {
                    return 0;
                };
                DisplayObjectRenderer.prototype.setX = function () {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = _super.prototype.getCSSLeftText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = _super.prototype.getCSSTransformText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = _super.prototype.getCSSTopText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = _super.prototype.getCSSTransformOriginText.call(this);
                };
                DisplayObjectRenderer.prototype.setY = function () {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = _super.prototype.getCSSTransformText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = _super.prototype.getCSSLeftText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = _super.prototype.getCSSTopText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = _super.prototype.getCSSTransformOriginText.call(this);
                };
                DisplayObjectRenderer.prototype.setXY = function () {
                    this.setX();
                    this.setY();
                };
                DisplayObjectRenderer.prototype.setRegX = function () {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = _super.prototype.getCSSTransformText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = _super.prototype.getCSSLeftText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = _super.prototype.getCSSTopText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = _super.prototype.getCSSTransformOriginText.call(this);
                };
                DisplayObjectRenderer.prototype.setRegY = function () {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = _super.prototype.getCSSTransformText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = _super.prototype.getCSSLeftText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = _super.prototype.getCSSTopText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = _super.prototype.getCSSTransformOriginText.call(this);
                };
                DisplayObjectRenderer.prototype.setRegXY = function () {
                    this.setRegX();
                    this.setRegY();
                };
                DisplayObjectRenderer.prototype.setScaleX = function () {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = _super.prototype.getCSSTransformText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = _super.prototype.getCSSLeftText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = _super.prototype.getCSSTopText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = _super.prototype.getCSSTransformOriginText.call(this);
                };
                DisplayObjectRenderer.prototype.setScaleY = function () {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = _super.prototype.getCSSTransformText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.left = _super.prototype.getCSSLeftText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.top = _super.prototype.getCSSTopText.call(this);
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transformOrigin = _super.prototype.getCSSTransformOriginText.call(this);
                };
                DisplayObjectRenderer.prototype.setScaleXY = function () {
                    this.setScaleX();
                    this.setScaleY();
                };
                DisplayObjectRenderer.prototype.setRotation = function () {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.transform = _super.prototype.getCSSTransformText.call(this);
                };
                DisplayObjectRenderer.prototype.setAlpha = function () {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.opacity = _super.prototype.getCSSOpacityText.call(this);
                };
                DisplayObjectRenderer.prototype.addFilter = function () {
                };
                DisplayObjectRenderer.prototype.setVisible = function () {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.visibility = _super.prototype.getCSSVisibilityText.call(this);
                };
                DisplayObjectRenderer.prototype.setMouseVisible = function () {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.cursor = _super.prototype.getCSSCursorVisibleText.call(this);
                };
                DisplayObjectRenderer.prototype.setMouseCursor = function () {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.cursor = _super.prototype.getCSSCursorText.call(this);
                };
                DisplayObjectRenderer.prototype.setID = function () {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.id = _super.prototype.getCSSIDText.call(this);
                };
                DisplayObjectRenderer.prototype.setWidth = function () {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.width = _super.prototype.getCSSWidthText.call(this);
                };
                DisplayObjectRenderer.prototype.setHeight = function () {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.height = _super.prototype.getCSSHeightText.call(this);
                };
                DisplayObjectRenderer.prototype.setBorder = function (value) {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.border = value;
                };
                DisplayObjectRenderer.prototype.setPosition = function (value) {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.position = value;
                };
                DisplayObjectRenderer.prototype.setMargin = function (value) {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.margin = value;
                };
                DisplayObjectRenderer.prototype.setPadding = function (value) {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.padding = value;
                };
                DisplayObjectRenderer.prototype.setZIndex = function (value) {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.zIndex = value;
                };
                DisplayObjectRenderer.prototype.setOverflow = function (value) {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.overflow = value;
                };
                DisplayObjectRenderer.prototype.setResize = function (value) {
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement = this.getDOMElement();
                    this.__splashjs_render_display_DisplayObjectRenderer_htmlElement.style.setProperty("resize", value);
                };
                return DisplayObjectRenderer;
            }(splashjs.render.events.EventDispatcherRenderer));
            display.DisplayObjectRenderer = DisplayObjectRenderer;
            DisplayObjectRenderer["__class"] = "splashjs.render.display.DisplayObjectRenderer";
            DisplayObjectRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var net;
        (function (net) {
            var FileReferenceRenderer = /** @class */ (function (_super) {
                __extends(FileReferenceRenderer, _super);
                function FileReferenceRenderer(renderObject) {
                    var _this = _super.call(this) || this;
                    if (_this.htmlInputElement === undefined)
                        _this.htmlInputElement = null;
                    if (_this.htmlAnchorElement === undefined)
                        _this.htmlAnchorElement = null;
                    if (_this.inputRenderElement === undefined)
                        _this.inputRenderElement = null;
                    if (_this.anchorRenderElement === undefined)
                        _this.anchorRenderElement = null;
                    _super.prototype.setRenderObject.call(_this, renderObject);
                    _this.htmlInputElement = document.createElement("input");
                    _this.htmlInputElement.type = "file";
                    _this.inputRenderElement = new splashjs.render.RenderElement(_this.htmlInputElement);
                    _this.htmlAnchorElement = document.createElement("a");
                    _this.anchorRenderElement = new splashjs.render.RenderElement(_this.htmlAnchorElement);
                    _this.create();
                    return _this;
                }
                FileReferenceRenderer.prototype.createEventListeners = function () {
                    var _this = this;
                    _super.prototype.createEventListeners.call(this);
                    this.htmlInputElement.addEventListener(splashjs.render.HTMLDomEventName.CHANGE, function (event) {
                        if (_this.htmlInputElement.files.length === 1) {
                            console.log(_this.htmlInputElement.files);
                        }
                    });
                };
                FileReferenceRenderer.prototype.create = function () {
                    _super.prototype.setRenderElement.call(this, this.inputRenderElement);
                    _super.prototype.getRenderObject.call(this).getStage().getRenderer().appendChild(this);
                    _super.prototype.setDisplay.call(this, "none");
                    _super.prototype.setRenderElement.call(this, this.anchorRenderElement);
                    _super.prototype.getRenderObject.call(this).getStage().getRenderer().appendChild(this);
                    _super.prototype.setDisplay.call(this, "none");
                };
                FileReferenceRenderer.prototype.download = function (urlRequest, defaultFileName) {
                    this.htmlAnchorElement.href = urlRequest.getURL();
                    this.htmlAnchorElement.setAttribute("download", defaultFileName);
                    this.htmlAnchorElement.click();
                };
                FileReferenceRenderer.prototype.browse = function () {
                    this.htmlInputElement.click();
                };
                return FileReferenceRenderer;
            }(splashjs.render.events.EventDispatcherRenderer));
            net.FileReferenceRenderer = FileReferenceRenderer;
            FileReferenceRenderer["__class"] = "splashjs.render.net.FileReferenceRenderer";
            FileReferenceRenderer["__interfaces"] = ["splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.net.iface.IFileReferenceRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(net = render.net || (render.net = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        var Control = /** @class */ (function (_super) {
            __extends(Control, _super);
            function Control(id) {
                var _this = _super.call(this, id) || this;
                if (_this.enabled === undefined)
                    _this.enabled = false;
                return _this;
            }
            Control.prototype.setEnabled = function (enabled) {
                this.enabled = enabled;
            };
            Control.prototype.getEnabled = function () {
                return this.enabled;
            };
            Control.prototype.isEnabled = function () {
                return this.getEnabled();
            };
            return Control;
        }(splashjs.display.InteractiveObject));
        controls.Control = Control;
        Control["__class"] = "splashjs.controls.Control";
        Control["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var DisplayObjectContainer = /** @class */ (function (_super) {
            __extends(DisplayObjectContainer, _super);
            function DisplayObjectContainer(id) {
                var _this = this;
                if (((typeof id === 'string') || id === null)) {
                    var __args = arguments;
                    _this = _super.call(this, id) || this;
                    if (_this.parent === undefined)
                        _this.parent = null;
                    _this.children = ([]);
                    if (_this.parent === undefined)
                        _this.parent = null;
                }
                else if (id === undefined) {
                    var __args = arguments;
                    _this = _super.call(this) || this;
                    if (_this.parent === undefined)
                        _this.parent = null;
                    _this.children = ([]);
                    if (_this.parent === undefined)
                        _this.parent = null;
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            DisplayObjectContainer.prototype.addChild = function (child) {
                if (this === child)
                    throw Object.defineProperty(new Error("A DisplayObject cannot be added to itself."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                else if (child != null && (child["__interfaces"] != null && child["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0 || child.constructor != null && child.constructor["__interfaces"] != null && child.constructor["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0))
                    throw Object.defineProperty(new Error("Stage cannot be added to DisplayObject."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                if (child.getParent() != null) {
                    child.getParent().getRenderer().removeChild(child.getRenderer());
                }
                /* add */ (this.children.push(child) > 0);
                child.getRenderer().setZIndex(( /* size */this.children.length - 1) + "");
                _super.prototype.getRenderer.call(this).appendChild(child.getRenderer());
                var addedEvent = new splashjs.events.Event(splashjs.events.Event.ADDED, child, child);
                addedEvent.setData(this);
                child.dispatchEvent(addedEvent);
                if (this.getStage() != null) {
                    var addedToStageEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, child, child);
                    addedToStageEvent.setData(this.getStage());
                    child.dispatchEvent(addedToStageEvent);
                }
            };
            DisplayObjectContainer.prototype.addChildAt = function (child, index) {
                if (this === child)
                    throw Object.defineProperty(new Error("A DisplayObject cannot be added to itself."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                else if (child != null && (child["__interfaces"] != null && child["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0 || child.constructor != null && child.constructor["__interfaces"] != null && child.constructor["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0))
                    throw Object.defineProperty(new Error("Stage cannot be added to DisplayObject."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                else if (index < 0 || index > /* size */ this.children.length)
                    throw Object.defineProperty(new Error("Child index is not within the limit."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                if (child.getParent() != null) {
                    child.getParent().getRenderer().removeChild(child.getRenderer());
                }
                /* add */ this.children.splice(index, 0, child);
                _super.prototype.getRenderer.call(this).appendChild(child.getRenderer());
                for (var i = 0; i < /* size */ this.children.length; i++) {
                    {
                        var myChild = this.children[i];
                        myChild.getRenderer().setZIndex(i + "");
                    }
                    ;
                }
                var addedEvent = new splashjs.events.Event(splashjs.events.Event.ADDED, child, child);
                addedEvent.setData(this);
                child.dispatchEvent(addedEvent);
                if (this.getStage() != null) {
                    var addedToStageEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, child, child);
                    addedToStageEvent.setData(this.getStage());
                    child.dispatchEvent(addedToStageEvent);
                }
            };
            DisplayObjectContainer.prototype.removeChild = function (child) {
                if (this.contains(child) === false)
                    throw Object.defineProperty(new Error("Child does not exists."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                /* remove */ (function (a) { var index = a.indexOf(child); if (index >= 0) {
                    a.splice(index, 1);
                    return true;
                }
                else {
                    return false;
                } })(this.children);
                _super.prototype.getRenderer.call(this).removeChild(child.getRenderer());
                for (var i = 0; i < /* size */ this.children.length; i++) {
                    {
                        var myChild = this.children[i];
                        myChild.getRenderer().setZIndex(i + "");
                    }
                    ;
                }
                var removedEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED, child, child);
                child.dispatchEvent(removedEvent);
                if (this.getStage() != null) {
                    var removedFromStageEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, child, child);
                    child.dispatchEvent(removedFromStageEvent);
                }
            };
            DisplayObjectContainer.prototype.removeChildAt = function (index) {
                if (index < 0)
                    throw Object.defineProperty(new Error("Child index is not within the limit."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                var child = this.getChildAt(index);
                /* remove */ this.children.splice(index, 1)[0];
                _super.prototype.getRenderer.call(this).removeChild(child.getRenderer());
                for (var i = 0; i < /* size */ this.children.length; i++) {
                    {
                        var myChild = this.children[i];
                        myChild.getRenderer().setZIndex(i + "");
                    }
                    ;
                }
                var removedEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED, child, child);
                child.dispatchEvent(removedEvent);
                if (this.getStage() != null) {
                    var removedFromStageEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, child, child);
                    child.dispatchEvent(removedFromStageEvent);
                }
            };
            DisplayObjectContainer.prototype.getChildByName = function (name) {
                var outChild = null;
                for (var index127 = 0; index127 < this.children.length; index127++) {
                    var child = this.children[index127];
                    {
                        if ( /* equals */(function (o1, o2) { if (o1 && o1.equals) {
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
            };
            DisplayObjectContainer.prototype.getChildAt = function (index) {
                var outChild = null;
                outChild = /* get */ this.children[index];
                return outChild;
            };
            DisplayObjectContainer.prototype.getChildIndex = function (child) {
                var index = -1;
                index = this.children.indexOf(child);
                return index;
            };
            DisplayObjectContainer.prototype.setChildIndex = function (child, index) {
                if (this === child)
                    throw Object.defineProperty(new Error("A DisplayObject cannot be added to itself."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                else if (child != null && (child["__interfaces"] != null && child["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0 || child.constructor != null && child.constructor["__interfaces"] != null && child.constructor["__interfaces"].indexOf("splashjs.display.iface.IStage") >= 0))
                    throw Object.defineProperty(new Error("Stage cannot be added to DisplayObject."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                else if (index < 0)
                    throw Object.defineProperty(new Error("Child index is not within the limit."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                else if (this.contains(child) === false)
                    throw Object.defineProperty(new Error("Child does not exists."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                var currentIndex = this.getChildIndex(child);
                if (currentIndex < index) {
                    /* remove */ (function (a) { var index = a.indexOf(child); if (index >= 0) {
                        a.splice(index, 1);
                        return true;
                    }
                    else {
                        return false;
                    } })(this.children);
                    /* add */ this.children.splice(index, 0, child);
                }
                else if (currentIndex > index) {
                    /* remove */ (function (a) { var index = a.indexOf(child); if (index >= 0) {
                        a.splice(index, 1);
                        return true;
                    }
                    else {
                        return false;
                    } })(this.children);
                    /* add */ this.children.splice(index - 1, 0, child);
                }
                for (var i = 0; i < /* size */ this.children.length; i++) {
                    {
                        var myChild = this.children[i];
                        myChild.getRenderer().setZIndex(i + "");
                    }
                    ;
                }
            };
            DisplayObjectContainer.prototype.swapChildren = function (child1, child2) {
                if (this === child1 || this === child2)
                    throw Object.defineProperty(new Error("A DisplayObject cannot be swapped to its parent."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                else if (this.contains(child1) === false || this.contains(child2) === false)
                    throw Object.defineProperty(new Error("Child does not exists."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                var child1Index = this.getChildIndex(child1);
                var child2Index = this.getChildIndex(child2);
                var tempChild = child1;
                /* set */ (this.children[child1Index] = child2);
                /* set */ (this.children[child2Index] = tempChild);
                for (var i = 0; i < /* size */ this.children.length; i++) {
                    {
                        var myChild = this.children[i];
                        myChild.getRenderer().setZIndex(i + "");
                    }
                    ;
                }
            };
            DisplayObjectContainer.prototype.swapChildrenAt = function (index1, index2) {
                if (index1 >= /* size */ this.children.length || index2 >= /* size */ this.children.length || index1 < 0 || index2 < 0)
                    throw Object.defineProperty(new Error("Child index is not within the limit."), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                else if (index1 === index2)
                    return;
                var child1 = this.getChildAt(index1);
                var child2 = this.getChildAt(index2);
                var tempChild = child1;
                /* set */ (this.children[index1] = child2);
                /* set */ (this.children[index2] = tempChild);
                for (var i = 0; i < /* size */ this.children.length; i++) {
                    {
                        var myChild = this.children[i];
                        myChild.getRenderer().setZIndex(i + "");
                    }
                    ;
                }
            };
            DisplayObjectContainer.prototype.contains = function (displayObject) {
                var out = false;
                out = /* contains */ (this.children.indexOf((displayObject)) >= 0);
                return out;
            };
            DisplayObjectContainer.prototype.dispatchEvent = function (event) {
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    for (var i = 0; i < /* size */ this.children.length; i++) {
                        {
                            var child = this.children[i];
                            var addedToStageEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, child, child);
                            addedToStageEvent.setData(event.getData());
                            child.dispatchEvent(addedToStageEvent);
                        }
                        ;
                    }
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.REMOVED_FROM_STAGE)) {
                    this.stage = null;
                    for (var index128 = 0; index128 < this.children.length; index128++) {
                        var child = this.children[index128];
                        {
                            var removedFromStageEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, child, child);
                            child.dispatchEvent(removedFromStageEvent);
                        }
                    }
                }
                return _super.prototype.dispatchEvent.call(this, event);
            };
            DisplayObjectContainer.prototype.render = function () {
                _super.prototype.render.call(this);
                for (var index129 = 0; index129 < this.children.length; index129++) {
                    var child = this.children[index129];
                    {
                        child.render();
                    }
                }
            };
            return DisplayObjectContainer;
        }(splashjs.display.InteractiveObject));
        display.DisplayObjectContainer = DisplayObjectContainer;
        DisplayObjectContainer["__class"] = "splashjs.display.DisplayObjectContainer";
        DisplayObjectContainer["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var Image = /** @class */ (function (_super) {
            __extends(Image, _super);
            function Image(imagePath) {
                var _this = this;
                if (((typeof imagePath === 'string') || imagePath === null)) {
                    var __args = arguments;
                    _this = _super.call(this, "image") || this;
                    if (_this.resource === undefined)
                        _this.resource = null;
                    if (_this.originalWidth === undefined)
                        _this.originalWidth = null;
                    if (_this.originalHeight === undefined)
                        _this.originalHeight = null;
                    _this.imagePath = "";
                    _this.imageType = "";
                    if (_this.resource === undefined)
                        _this.resource = null;
                    if (_this.originalWidth === undefined)
                        _this.originalWidth = null;
                    if (_this.originalHeight === undefined)
                        _this.originalHeight = null;
                    (function () {
                        _this.imagePath = imagePath;
                        var type = _this.imagePath.substring(_this.imagePath.lastIndexOf(".") + 1);
                        if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "jpg") || /* equalsIgnoreCase */ (function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "jpeg"))
                            _this.imageType = "jpeg";
                        else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "png"))
                            _this.imageType = "png";
                        else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(type, "gif"))
                            _this.imageType = "gif";
                    })();
                }
                else if (((imagePath != null && (imagePath["__interfaces"] != null && imagePath["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0 || imagePath.constructor != null && imagePath.constructor["__interfaces"] != null && imagePath.constructor["__interfaces"].indexOf("splashjs.utils.iface.IResource") >= 0)) || imagePath === null)) {
                    var __args = arguments;
                    var resource_1 = __args[0];
                    _this = _super.call(this, "image") || this;
                    if (_this.resource === undefined)
                        _this.resource = null;
                    if (_this.originalWidth === undefined)
                        _this.originalWidth = null;
                    if (_this.originalHeight === undefined)
                        _this.originalHeight = null;
                    _this.imagePath = "";
                    _this.imageType = "";
                    if (_this.resource === undefined)
                        _this.resource = null;
                    if (_this.originalWidth === undefined)
                        _this.originalWidth = null;
                    if (_this.originalHeight === undefined)
                        _this.originalHeight = null;
                    (function () {
                        _this.resource = resource_1;
                        _this.imagePath = resource_1.getResourcePath();
                    })();
                }
                else if (imagePath === undefined) {
                    var __args = arguments;
                    _this = _super.call(this) || this;
                    if (_this.resource === undefined)
                        _this.resource = null;
                    if (_this.originalWidth === undefined)
                        _this.originalWidth = null;
                    if (_this.originalHeight === undefined)
                        _this.originalHeight = null;
                    _this.imagePath = "";
                    _this.imageType = "";
                    if (_this.resource === undefined)
                        _this.resource = null;
                    if (_this.originalWidth === undefined)
                        _this.originalWidth = null;
                    if (_this.originalHeight === undefined)
                        _this.originalHeight = null;
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            /**
             *
             * @return {string}
             */
            Image.prototype.getImagePath = function () {
                return this.imagePath;
            };
            /**
             *
             * @return {string}
             */
            Image.prototype.getImageType = function () {
                return this.imageType;
            };
            /**
             *
             * @param {*} event
             * @return {boolean}
             */
            Image.prototype.dispatchEvent = function (event) {
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.REMOVED_FROM_STAGE)) {
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED)) {
                    this.parent = event.getTarget();
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.REMOVED)) {
                    this.parent = null;
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.EventName.LOADED)) {
                    this.originalWidth = _super.prototype.getRenderer.call(this).getOriginalWidth();
                    this.originalHeight = _super.prototype.getRenderer.call(this).getOriginalHeight();
                    if (this.width === 0 && this.originalWidth !== 0) {
                        this.width = this.originalWidth;
                        _super.prototype.getRenderer.call(this).setWidth();
                    }
                    if (this.height === 0 && this.originalHeight !== 0) {
                        this.height = this.originalHeight;
                        _super.prototype.getRenderer.call(this).setHeight();
                    }
                }
                var retValue = _super.prototype.dispatchEvent.call(this, event);
                return retValue;
            };
            /**
             *
             * @return {number}
             */
            Image.prototype.getWidth = function () {
                return _super.prototype.getWidth.call(this);
            };
            /**
             *
             * @return {number}
             */
            Image.prototype.getHeight = function () {
                return _super.prototype.getHeight.call(this);
            };
            /**
             *
             * @param {number} width
             */
            Image.prototype.setWidth = function (width) {
                this.width = width;
                _super.prototype.setScaleX.call(this, width / this.originalWidth);
            };
            /**
             *
             * @param {number} height
             */
            Image.prototype.setHeight = function (height) {
                this.height = height;
                _super.prototype.setScaleY.call(this, height / this.originalHeight);
            };
            return Image;
        }(splashjs.display.InteractiveObject));
        display.Image = Image;
        Image["__class"] = "splashjs.display.Image";
        Image["__interfaces"] = ["splashjs.display.iface.IImage", "splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var Shape = /** @class */ (function (_super) {
            __extends(Shape, _super);
            function Shape(id) {
                var _this = _super.call(this, id) || this;
                if (_this.strokeColor === undefined)
                    _this.strokeColor = null;
                if (_this.fillColor === undefined)
                    _this.fillColor = null;
                if (_this.strokeWidth === undefined)
                    _this.strokeWidth = 0;
                _this.strokeWidth = 1;
                _this.strokeColor = splashjs.utils.Color.BLACK_$LI$();
                _this.fillColor = splashjs.utils.Color.BLACK_$LI$();
                return _this;
            }
            Shape.prototype.setStrokeWidth = function (strokeWidth) {
                this.strokeWidth = strokeWidth;
                _super.prototype.getRenderer.call(this).update();
            };
            Shape.prototype.getStrokeWidth = function () {
                return this.strokeWidth;
            };
            Shape.prototype.setStrokeColor = function (strokeColor) {
                this.strokeColor = strokeColor;
                _super.prototype.getRenderer.call(this).update();
            };
            Shape.prototype.getStrokeColor = function () {
                return this.strokeColor;
            };
            Shape.prototype.setFillColor = function (fillColor) {
                this.fillColor = fillColor;
                _super.prototype.getRenderer.call(this).update();
            };
            Shape.prototype.getFillColor = function () {
                return this.fillColor;
            };
            /**
             *
             * @param {number} width
             */
            Shape.prototype.setWidth = function (width) {
            };
            /**
             *
             * @param {number} height
             */
            Shape.prototype.setHeight = function (height) {
            };
            return Shape;
        }(splashjs.display.InteractiveObject));
        display.Shape = Shape;
        Shape["__class"] = "splashjs.display.Shape";
        Shape["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var SimpleButton = /** @class */ (function (_super) {
            __extends(SimpleButton, _super);
            function SimpleButton() {
                var _this = _super.call(this, "button") || this;
                /*private*/ _this.upState = null;
                /*private*/ _this.downState = null;
                /*private*/ _this.overState = null;
                /*private*/ _this.disabledState = null;
                /*private*/ _this.enabled = true;
                _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(SimpleButton, _this));
                return _this;
            }
            /**
             *
             * @param {*} event
             * @return {boolean}
             */
            SimpleButton.prototype.dispatchEvent = function (event) {
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED)) {
                    this.parent = event.getTarget();
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.REMOVED)) {
                    this.parent = null;
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.MouseEvent.MOUSE_OVER)) {
                    if (this.enabled === true && this.overState != null) {
                        if (this.upState != null)
                            this.upState.setVisible(false);
                        if (this.downState != null)
                            this.downState.setVisible(false);
                        this.overState.setVisible(true);
                    }
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.MouseEvent.MOUSE_DOWN)) {
                    if (this.enabled === true && this.downState != null) {
                        if (this.upState != null)
                            this.upState.setVisible(false);
                        if (this.overState != null)
                            this.overState.setVisible(false);
                        this.downState.setVisible(true);
                    }
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.MouseEvent.MOUSE_UP)) {
                    if (this.enabled === true && this.overState != null) {
                        if (this.upState != null)
                            this.upState.setVisible(false);
                        if (this.downState != null)
                            this.downState.setVisible(false);
                        this.overState.setVisible(true);
                    }
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.MouseEvent.MOUSE_OUT)) {
                    if (this.enabled === true && this.upState != null) {
                        if (this.overState != null)
                            this.overState.setVisible(false);
                        if (this.downState != null)
                            this.downState.setVisible(false);
                        this.upState.setVisible(true);
                    }
                }
                return _super.prototype.dispatchEvent.call(this, event);
            };
            SimpleButton.prototype.setUpState = function (upState) {
                this.upState = upState;
                if (_super.prototype.getRenderer.call(this) != null) {
                    _super.prototype.getRenderer.call(this).setUpState();
                }
            };
            SimpleButton.prototype.getUpState = function () {
                return this.upState;
            };
            SimpleButton.prototype.setDownState = function (downState) {
                this.downState = downState;
                if (_super.prototype.getRenderer.call(this) != null) {
                    _super.prototype.getRenderer.call(this).setDownState();
                }
            };
            SimpleButton.prototype.getDownState = function () {
                return this.downState;
            };
            SimpleButton.prototype.setOverState = function (overState) {
                this.overState = overState;
                if (_super.prototype.getRenderer.call(this) != null) {
                    _super.prototype.getRenderer.call(this).setOverState();
                }
            };
            SimpleButton.prototype.getOverState = function () {
                return this.overState;
            };
            SimpleButton.prototype.setDisabledState = function (disabledState) {
                this.disabledState = disabledState;
                if (_super.prototype.getRenderer.call(this) != null) {
                    _super.prototype.getRenderer.call(this).setDisabledState();
                }
            };
            SimpleButton.prototype.getDisabledState = function () {
                return this.disabledState;
            };
            SimpleButton.prototype.setEnabled = function (enabled) {
                this.enabled = enabled;
                if (_super.prototype.getRenderer.call(this) != null) {
                    _super.prototype.getRenderer.call(this).setEnabled();
                }
            };
            SimpleButton.prototype.getEnabled = function () {
                return this.enabled;
            };
            SimpleButton.prototype.isEnabled = function () {
                return this.enabled;
            };
            SimpleButton.prototype.render = function () {
                _super.prototype.render.call(this);
            };
            return SimpleButton;
        }(splashjs.display.InteractiveObject));
        display.SimpleButton = SimpleButton;
        SimpleButton["__class"] = "splashjs.display.SimpleButton";
        SimpleButton["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IInteractiveObject", "splashjs.display.iface.ISimpleButton", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var layout;
    (function (layout) {
        var Layout = /** @class */ (function (_super) {
            __extends(Layout, _super);
            function Layout(id) {
                var _this = this;
                if (((typeof id === 'string') || id === null)) {
                    var __args = arguments;
                    _this = _super.call(this, id) || this;
                }
                else if (id === undefined) {
                    var __args = arguments;
                    _this = _super.call(this) || this;
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            return Layout;
        }(splashjs.display.InteractiveObject));
        layout.Layout = Layout;
        Layout["__class"] = "splashjs.layout.Layout";
        Layout["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.layout.iface.ILayout", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(layout = splashjs.layout || (splashjs.layout = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var text;
    (function (text_1) {
        var Text = /** @class */ (function (_super) {
            __extends(Text, _super);
            function Text(id) {
                var _this = _super.call(this, id) || this;
                /*private*/ _this.text = "";
                /*private*/ _this.fontSize = 12;
                /*private*/ _this.fontStyle = splashjs.text.FontStyle.NORMAL;
                /*private*/ _this.fontWeight = splashjs.text.FontWeight.NORMAL;
                /*private*/ _this.color = splashjs.utils.Color.BLACK_$LI$();
                /*private*/ _this.selectable = true;
                if (_this.fontId === undefined)
                    _this.fontId = null;
                return _this;
            }
            Text.prototype.setText = function (text) {
                this.text = text;
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).setText();
            };
            Text.prototype.getText = function () {
                return this.text;
            };
            Text.prototype.setFontSize = function (fontSize) {
                this.fontSize = fontSize;
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).setFontSize();
            };
            Text.prototype.getFontSize = function () {
                return this.fontSize;
            };
            Text.prototype.setFontStyle = function (fontStyle) {
                this.fontStyle = fontStyle;
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).setFontStyle();
            };
            Text.prototype.getFontStyle = function () {
                return this.fontStyle;
            };
            Text.prototype.setFontWeight = function (fontWeight) {
                this.fontWeight = fontWeight;
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).setFontWeight();
            };
            Text.prototype.getFontWeight = function () {
                return this.fontWeight;
            };
            Text.prototype.setColor = function (color) {
                this.color = color;
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).setColor();
            };
            Text.prototype.getColor = function () {
                return this.color;
            };
            Text.prototype.setFont = function (fontId) {
                this.fontId = fontId;
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).setFont();
            };
            Text.prototype.getFont = function () {
                return this.fontId;
            };
            Text.prototype.setSelectable = function (selectable) {
                this.selectable = selectable;
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).setSelectable();
            };
            Text.prototype.isSelectable = function () {
                return this.selectable;
            };
            Text.prototype.render = function () {
                _super.prototype.render.call(this);
                _super.prototype.getRenderer.call(this).setText();
                _super.prototype.getRenderer.call(this).setSelectable();
                _super.prototype.getRenderer.call(this).setColor();
                _super.prototype.getRenderer.call(this).setFont();
                _super.prototype.getRenderer.call(this).setFontSize();
                _super.prototype.getRenderer.call(this).setFontStyle();
                _super.prototype.getRenderer.call(this).setFontWeight();
                _super.prototype.getRenderer.call(this).setBorder("0px dotted blue");
            };
            return Text;
        }(splashjs.display.InteractiveObject));
        text_1.Text = Text;
        Text["__class"] = "splashjs.text.Text";
        Text["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.text.iface.IText"];
    })(text = splashjs.text || (splashjs.text = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            var InteractiveObjectRenderer = /** @class */ (function (_super) {
                __extends(InteractiveObjectRenderer, _super);
                function InteractiveObjectRenderer() {
                    return _super.call(this) || this;
                }
                return InteractiveObjectRenderer;
            }(splashjs.render.display.DisplayObjectRenderer));
            display.InteractiveObjectRenderer = InteractiveObjectRenderer;
            InteractiveObjectRenderer["__class"] = "splashjs.render.display.InteractiveObjectRenderer";
            InteractiveObjectRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var media;
        (function (media) {
            var SoundRenderer = /** @class */ (function (_super) {
                __extends(SoundRenderer, _super);
                function SoundRenderer(renderObject) {
                    var _this = _super.call(this) || this;
                    if (_this.htmlAudioElement === undefined)
                        _this.htmlAudioElement = null;
                    _super.prototype.setRenderObject.call(_this, renderObject);
                    _this.htmlAudioElement = document.createElement("audio");
                    _super.prototype.setRenderElement.call(_this, new splashjs.render.RenderElement(_this.htmlAudioElement));
                    _this.htmlAudioElement.addEventListener("canplaythrough", function (event) {
                        _this.htmlAudioElement.controls = true;
                        var loadedEvent = new splashjs.events.Event(splashjs.events.EventName.LOADED, _super.prototype.getRenderObject.call(_this), _super.prototype.getRenderObject.call(_this));
                        _super.prototype.getRenderObject.call(_this).dispatchEvent(loadedEvent);
                    });
                    _this.htmlAudioElement.addEventListener("click", function (event) {
                        console.info("sound clicked");
                    });
                    return _this;
                }
                SoundRenderer.prototype.create = function () {
                    _super.prototype.getRenderObject.call(this).getStage().getRenderer().appendChild(this);
                    _super.prototype.setDisplay.call(this, "none");
                };
                SoundRenderer.prototype.setSoundPath = function () {
                    var soundPath = _super.prototype.getRenderObject.call(this).getSoundPath();
                    this.htmlAudioElement.src = this.SOUNDS_FOLDER_PATH + soundPath;
                };
                SoundRenderer.prototype.playSound = function () {
                    var js = "var playPromise = document.getElementById(\"" + _super.prototype.getRenderObjectID.call(this) + "\").play();";
                    js += "if(playPromise !== undefined) {";
                    js += "playPromise.then(() => {console.log(\"playing\");}).catch((error) => {console.log(error.name);});";
                    js += "}";
                    eval(js);
                };
                SoundRenderer.prototype.pauseSound = function () {
                    this.htmlAudioElement.pause();
                };
                /*private*/ SoundRenderer.prototype.getHTMLAudioElement = function () {
                    return _super.prototype.getDOMElement.call(this);
                };
                return SoundRenderer;
            }(splashjs.render.display.DisplayObjectRenderer));
            media.SoundRenderer = SoundRenderer;
            SoundRenderer["__class"] = "splashjs.render.media.SoundRenderer";
            SoundRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(media = render.media || (render.media = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var media;
        (function (media) {
            var VideoRenderer = /** @class */ (function (_super) {
                __extends(VideoRenderer, _super);
                function VideoRenderer(renderObject) {
                    var _this = _super.call(this) || this;
                    _super.prototype.setRenderObject.call(_this, renderObject);
                    _this.renderElement = new splashjs.render.RenderElement(document.createElement("video"));
                    _this.getHTMLVideoElement().addEventListener("canplaythrough", function (event) {
                        _this.getHTMLVideoElement().controls = true;
                        var loadedEvent = new splashjs.events.Event(splashjs.events.EventName.LOADED, _super.prototype.getRenderObject.call(_this), _super.prototype.getRenderObject.call(_this));
                        _super.prototype.getRenderObject.call(_this).dispatchEvent(loadedEvent);
                    });
                    _this.getHTMLVideoElement().addEventListener("click", function (event) {
                        console.info("video clicked");
                    });
                    return _this;
                }
                VideoRenderer.prototype.playVideo = function () {
                    var js = "var playPromise = " + _super.prototype.getRenderObjectID.call(this) + ".play();";
                    js += "if(playPromise !== undefined) {";
                    js += "playPromise.then(() => {console.log(\"playing\");}).catch((error) => {console.log(error.name);});";
                    js += "}";
                    eval(js);
                };
                /*private*/ VideoRenderer.prototype.getHTMLVideoElement = function () {
                    return _super.prototype.getDOMElement.call(this);
                };
                return VideoRenderer;
            }(splashjs.render.display.DisplayObjectRenderer));
            media.VideoRenderer = VideoRenderer;
            VideoRenderer["__class"] = "splashjs.render.media.VideoRenderer";
            VideoRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(media = render.media || (render.media = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        var BaseList = /** @class */ (function (_super) {
            __extends(BaseList, _super);
            function BaseList(id) {
                return _super.call(this, id) || this;
            }
            return BaseList;
        }(splashjs.controls.Control));
        controls.BaseList = BaseList;
        BaseList["__class"] = "splashjs.controls.BaseList";
        BaseList["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseList"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        var BaseText = /** @class */ (function (_super) {
            __extends(BaseText, _super);
            function BaseText(id) {
                var _this = _super.call(this, id) || this;
                if (_this.text === undefined)
                    _this.text = null;
                return _this;
            }
            BaseText.prototype.setText = function (text) {
                this.text = text;
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).setText();
            };
            BaseText.prototype.getText = function () {
                return this.text;
            };
            return BaseText;
        }(splashjs.controls.Control));
        controls.BaseText = BaseText;
        BaseText["__class"] = "splashjs.controls.BaseText";
        BaseText["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseText"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        var RadioButton = /** @class */ (function (_super) {
            __extends(RadioButton, _super);
            function RadioButton() {
                var _this = _super.call(this, "radioButton") || this;
                /*private*/ _this.selected = false;
                if (_this.label === undefined)
                    _this.label = null;
                if (_this.group === undefined)
                    _this.group = null;
                if (_this.value === undefined)
                    _this.value = null;
                _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(RadioButton, _this));
                return _this;
            }
            RadioButton.prototype.setValue = function (value) {
                this.value = value;
            };
            RadioButton.prototype.getValue = function () {
                return this.value;
            };
            RadioButton.prototype.setSelected = function (selected) {
                if (this.selected !== selected) {
                    this.selected = selected;
                    if (_super.prototype.getRenderer.call(this) != null)
                        _super.prototype.getRenderer.call(this).setSelected();
                }
            };
            RadioButton.prototype.getSelected = function () {
                return this.selected;
            };
            RadioButton.prototype.isSelected = function () {
                return this.getSelected();
            };
            RadioButton.prototype.setGroup = function (group) {
                this.group = group;
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).setGroup();
            };
            RadioButton.prototype.getGroup = function () {
                return this.group;
            };
            RadioButton.prototype.setLabel = function (label) {
                this.label = label;
            };
            RadioButton.prototype.getLabel = function () {
                return this.label;
            };
            RadioButton.prototype.render = function () {
                _super.prototype.render.call(this);
                _super.prototype.getRenderer.call(this).setGroup();
                _super.prototype.getRenderer.call(this).setSelected();
            };
            return RadioButton;
        }(splashjs.controls.Control));
        controls.RadioButton = RadioButton;
        RadioButton["__class"] = "splashjs.controls.RadioButton";
        RadioButton["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.controls.iface.IRadioButton", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var Sprite = /** @class */ (function (_super) {
            __extends(Sprite, _super);
            function Sprite(id) {
                var _this = this;
                if (((typeof id === 'string') || id === null)) {
                    var __args = arguments;
                    _this = _super.call(this, id) || this;
                    (function () {
                        _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Sprite, _this));
                    })();
                }
                else if (id === undefined) {
                    var __args = arguments;
                    {
                        var __args_9 = arguments;
                        var id_3 = "sprite";
                        _this = _super.call(this, id_3) || this;
                        (function () {
                            _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Sprite, _this));
                        })();
                    }
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            /**
             *
             */
            Sprite.prototype.render = function () {
                _super.prototype.render.call(this);
                _super.prototype.getRenderer.call(this).setBorder("0px solid olive");
            };
            /**
             *
             * @return {number}
             */
            Sprite.prototype.getWidth = function () {
                var leftX = 0;
                var rightX = 0;
                if ( /* size */this.children.length > 0) {
                    leftX = /* get */ this.children[0].getX();
                    rightX = /* get */ this.children[0].getX() + /* get */ this.children[0].getWidth();
                    for (var index130 = 0; index130 < this.children.length; index130++) {
                        var child = this.children[index130];
                        {
                            if (leftX > child.getX())
                                leftX = child.getX();
                            if (rightX < (child.getX() + child.getWidth()))
                                rightX = (child.getX() + child.getWidth());
                        }
                    }
                }
                return (rightX - leftX);
            };
            /**
             *
             * @return {number}
             */
            Sprite.prototype.getHeight = function () {
                var topY = 0;
                var bottomY = 0;
                if ( /* size */this.children.length > 0) {
                    topY = /* get */ this.children[0].getY();
                    bottomY = /* get */ this.children[0].getY() + /* get */ this.children[0].getHeight();
                    for (var index131 = 0; index131 < this.children.length; index131++) {
                        var child = this.children[index131];
                        {
                            if (topY > child.getY())
                                topY = child.getY();
                            if (bottomY < (child.getY() + child.getHeight()))
                                bottomY = (child.getY() + child.getHeight());
                        }
                    }
                }
                return (bottomY - topY);
            };
            return Sprite;
        }(splashjs.display.DisplayObjectContainer));
        display.Sprite = Sprite;
        Sprite["__class"] = "splashjs.display.Sprite";
        Sprite["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.ISprite", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var Stage = /** @class */ (function (_super) {
            __extends(Stage, _super);
            function Stage(stageOwnerName, width, height) {
                var _this = this;
                if (((typeof stageOwnerName === 'string') || stageOwnerName === null) && ((typeof width === 'number') || width === null) && ((typeof height === 'number') || height === null)) {
                    var __args = arguments;
                    _this = _super.call(this, "stage") || this;
                    if (_this.stageOwner === undefined)
                        _this.stageOwner = null;
                    if (_this.scaleMode === undefined)
                        _this.scaleMode = null;
                    if (_this.align === undefined)
                        _this.align = null;
                    if (_this.color === undefined)
                        _this.color = null;
                    if (_this.stageOwner === undefined)
                        _this.stageOwner = null;
                    if (_this.scaleMode === undefined)
                        _this.scaleMode = null;
                    if (_this.align === undefined)
                        _this.align = null;
                    if (_this.color === undefined)
                        _this.color = null;
                    (function () {
                        _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Stage, _this));
                        _this.stageOwner = new splashjs.application.StageOwner(stageOwnerName, _this, width, height);
                        _super.prototype.setWidth.call(_this, width);
                        _super.prototype.setHeight.call(_this, height);
                        _this.setColor(splashjs.utils.Color.WHITE_$LI$());
                        _this.scaleMode = splashjs.display.StageScaleMode.SHOW_ALL;
                        _super.prototype.getRenderer.call(_this).startEnterFrameExitFrameDispatcherLoop();
                        _this.stageOwner.addEventListener(splashjs.events.Event.RESIZE, function (event) {
                            console.info("resized");
                            _this.handleResize();
                        });
                        _this.stageOwner.getRenderer().appendChild(_this.getRenderer());
                        _this.render();
                    })();
                }
                else if (stageOwnerName === undefined && width === undefined && height === undefined) {
                    var __args = arguments;
                    _this = _super.call(this, "stage") || this;
                    if (_this.stageOwner === undefined)
                        _this.stageOwner = null;
                    if (_this.scaleMode === undefined)
                        _this.scaleMode = null;
                    if (_this.align === undefined)
                        _this.align = null;
                    if (_this.color === undefined)
                        _this.color = null;
                    if (_this.stageOwner === undefined)
                        _this.stageOwner = null;
                    if (_this.scaleMode === undefined)
                        _this.scaleMode = null;
                    if (_this.align === undefined)
                        _this.align = null;
                    if (_this.color === undefined)
                        _this.color = null;
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            Stage.prototype.getStageOwner = function () {
                return this.stageOwner;
            };
            /**
             *
             * @param {number} x
             */
            Stage.prototype.setX = function (x) {
                throw new splashjs.lang.UnsupportedOperationError();
            };
            /**
             *
             * @param {number} y
             */
            Stage.prototype.setY = function (y) {
                throw new splashjs.lang.UnsupportedOperationError();
            };
            /**
             *
             * @param {number} x
             * @param {number} y
             */
            Stage.prototype.setXY = function (x, y) {
                throw new splashjs.lang.UnsupportedOperationError();
            };
            /**
             *
             * @return {*}
             */
            Stage.prototype.getStage = function () {
                return null;
            };
            Stage.prototype.setWidth = function (width) {
                this.width = width;
            };
            Stage.prototype.setHeight = function (height) {
                this.height = height;
            };
            Stage.prototype.setSize = function (width, height) {
            };
            Stage.prototype.getWidth = function () {
                return this.width;
            };
            Stage.prototype.getHeight = function () {
                return this.height;
            };
            /**
             *
             */
            Stage.prototype.render = function () {
                _super.prototype.render.call(this);
                _super.prototype.getRenderer.call(this).setBorder("0px solid red");
                _super.prototype.getRenderer.call(this).setOverflow("hidden");
                _super.prototype.getRenderer.call(this).setPosition("relative");
                _super.prototype.getRenderer.call(this).setDisplay("inline-block");
                _super.prototype.getRenderer.call(this).setWidth();
                _super.prototype.getRenderer.call(this).setHeight();
                _super.prototype.getRenderer.call(this).setColor();
                this.handleResize();
            };
            /**
             *
             * @param {*} child
             */
            Stage.prototype.addChild = function (child) {
                _super.prototype.addChild.call(this, child);
                var addedToStageEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, child, child);
                addedToStageEvent.setData(this);
                child.dispatchEvent(addedToStageEvent);
            };
            /**
             *
             * @param {*} child
             * @param {number} index
             */
            Stage.prototype.addChildAt = function (child, index) {
                _super.prototype.addChildAt.call(this, child, index);
                var addedToStageEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, child, child);
                addedToStageEvent.setData(this);
                child.dispatchEvent(addedToStageEvent);
            };
            /**
             *
             * @param {*} child
             */
            Stage.prototype.removeChild = function (child) {
                _super.prototype.removeChild.call(this, child);
                var removedFromStageEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, child, child);
                child.dispatchEvent(removedFromStageEvent);
            };
            /**
             *
             * @param {number} index
             */
            Stage.prototype.removeChildAt = function (index) {
                var child = this.getChildAt(index);
                _super.prototype.removeChildAt.call(this, index);
                var removedFromStageEvent = new splashjs.events.Event(splashjs.events.Event.REMOVED_FROM_STAGE, child, child);
                child.dispatchEvent(removedFromStageEvent);
            };
            Stage.prototype.setScaleMode = function (stageScaleMode) {
                this.scaleMode = stageScaleMode;
            };
            Stage.prototype.setAlign = function (stageAlign) {
                this.align = stageAlign;
            };
            /**
             *
             * @param {*} event
             * @return {boolean}
             */
            Stage.prototype.dispatchEvent = function (event) {
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.RESIZE)) {
                    this.handleResize();
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ENTER_FRAME)) {
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.EventName.STAGE_READY)) {
                    for (var i = 0; i < /* size */ this.children.length; i++) {
                        {
                            var myChild = this.children[i];
                            myChild.getRenderer().setZIndex(i + "");
                            _super.prototype.getRenderer.call(this).appendChild(myChild.getRenderer());
                            var addedToStageEvent = new splashjs.events.Event(splashjs.events.Event.ADDED_TO_STAGE, myChild, myChild);
                            myChild.dispatchEvent(addedToStageEvent);
                        }
                        ;
                    }
                    this.handleResize();
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.EventName.STAGE_RENDERED)) {
                }
                return _super.prototype.dispatchEvent.call(this, event);
            };
            /*private*/ Stage.prototype.handleResize = function () {
                var stageOwnerWidth = this.stageOwner.getWidth();
                var stageOwnerHeight = this.stageOwner.getHeight();
                var stageWidth = this.getWidth();
                var stageHeight = this.getHeight();
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.scaleMode, splashjs.display.StageScaleMode.EXACT_FIT)) {
                    this.setScaleX(stageOwnerWidth / stageWidth);
                    this.setScaleY(stageOwnerHeight / stageHeight);
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.scaleMode, splashjs.display.StageScaleMode.NO_BORDER)) {
                    var widthRatio = stageOwnerWidth / stageWidth;
                    var heightRatio = stageOwnerHeight / stageHeight;
                    this.setScaleX(widthRatio);
                    this.setScaleY(widthRatio);
                    var px = (((stageOwnerWidth - stageWidth * widthRatio) / 2) | 0);
                    var py = (((stageOwnerHeight - stageHeight * widthRatio) / 2) | 0);
                    _super.prototype.setX.call(this, px);
                    _super.prototype.setY.call(this, py);
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(this.scaleMode, splashjs.display.StageScaleMode.SHOW_ALL)) {
                    var widthRatio = stageOwnerWidth / stageWidth;
                    var heightRatio = stageOwnerHeight / stageHeight;
                    var ratio = Math.min(widthRatio, heightRatio);
                    this.setScaleX(ratio);
                    this.setScaleY(ratio);
                    var px = (((stageOwnerWidth - stageWidth * ratio) / 2) | 0);
                    var py = (((stageOwnerHeight - stageHeight * ratio) / 2) | 0);
                    _super.prototype.setX.call(this, px);
                    _super.prototype.setY.call(this, py);
                }
            };
            /**
             *
             * @param {number} scaleX
             */
            Stage.prototype.setScaleX = function (scaleX) {
                _super.prototype.setScaleX.call(this, scaleX);
            };
            /**
             *
             * @param {number} scaleY
             */
            Stage.prototype.setScaleY = function (scaleY) {
                _super.prototype.setScaleY.call(this, scaleY);
            };
            Stage.prototype.setColor = function (color) {
                this.color = color;
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).setColor();
            };
            Stage.prototype.getColor = function () {
                return this.color;
            };
            return Stage;
        }(splashjs.display.DisplayObjectContainer));
        display.Stage = Stage;
        Stage["__class"] = "splashjs.display.Stage";
        Stage["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IStage", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var Circle = /** @class */ (function (_super) {
            __extends(Circle, _super);
            function Circle(radius) {
                var _this = _super.call(this, "circle") || this;
                /*private*/ _this.radius = 50;
                _this.radius = radius;
                _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Circle, _this));
                return _this;
            }
            Circle.prototype.dispatchEvent = function (event) {
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.originalWidth = _super.prototype.getRenderer.call(this).getOriginalWidth();
                    this.originalHeight = _super.prototype.getRenderer.call(this).getOriginalHeight();
                    this.width = this.originalWidth;
                    this.height = this.originalHeight;
                }
                return _super.prototype.dispatchEvent.call(this, event);
            };
            Circle.prototype.setRadius = function (radius) {
                this.radius = radius;
                _super.prototype.getRenderer.call(this).setRadius();
                this.originalWidth = _super.prototype.getRenderer.call(this).getOriginalWidth();
                this.originalHeight = _super.prototype.getRenderer.call(this).getOriginalHeight();
            };
            Circle.prototype.getRadius = function () {
                return this.radius;
            };
            return Circle;
        }(splashjs.display.Shape));
        display.Circle = Circle;
        Circle["__class"] = "splashjs.display.Circle";
        Circle["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IInteractiveObject", "splashjs.display.iface.IShape", "splashjs.lang.iface.ISplashObject", "splashjs.display.iface.ICircle", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var Line = /** @class */ (function (_super) {
            __extends(Line, _super);
            function Line(length) {
                var _this = _super.call(this, "line") || this;
                if (_this.length === undefined)
                    _this.length = 0;
                _this.length = length;
                _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Line, _this));
                return _this;
            }
            Line.prototype.setLength = function (length) {
                this.length = length;
            };
            Line.prototype.getLength = function () {
                return this.length;
            };
            Line.prototype.dispatchEvent = function (event) {
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.EventName.ABOUT_TO_BE_ADDED_TO_STAGE)) {
                    this.stage = event.getTarget();
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.originalWidth = _super.prototype.getRenderer.call(this).getOriginalWidth();
                    this.originalHeight = _super.prototype.getRenderer.call(this).getOriginalHeight();
                    this.width = this.originalWidth;
                    this.height = this.originalHeight;
                }
                var val = _super.prototype.dispatchEvent.call(this, event);
                return val;
            };
            /**
             *
             * @param {number} width
             */
            Line.prototype.setWidth = function (width) {
            };
            Line.prototype.setHeight = function (height) {
            };
            return Line;
        }(splashjs.display.Shape));
        display.Line = Line;
        Line["__class"] = "splashjs.display.Line";
        Line["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IInteractiveObject", "splashjs.display.iface.IShape", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.display.iface.ILine"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var Rectangle = /** @class */ (function (_super) {
            __extends(Rectangle, _super);
            function Rectangle(rectangleWidth, rectangleHeight, cornerRadiusX, cornerRadiusY) {
                var _this = this;
                if (((typeof rectangleWidth === 'number') || rectangleWidth === null) && ((typeof rectangleHeight === 'number') || rectangleHeight === null) && ((typeof cornerRadiusX === 'number') || cornerRadiusX === null) && ((typeof cornerRadiusY === 'number') || cornerRadiusY === null)) {
                    var __args = arguments;
                    _this = _super.call(this, "rectangle") || this;
                    _this.rectangleWidth = 0;
                    _this.rectangleHeight = 0;
                    _this.cornerRadiusX = 0;
                    _this.cornerRadiusY = 0;
                    (function () {
                        _this.rectangleWidth = rectangleWidth;
                        _this.rectangleHeight = rectangleHeight;
                        _this.cornerRadiusX = cornerRadiusX;
                        _this.cornerRadiusY = cornerRadiusY;
                    })();
                }
                else if (((typeof rectangleWidth === 'number') || rectangleWidth === null) && ((typeof rectangleHeight === 'number') || rectangleHeight === null) && cornerRadiusX === undefined && cornerRadiusY === undefined) {
                    var __args = arguments;
                    _this = _super.call(this, "rectangle") || this;
                    _this.rectangleWidth = 0;
                    _this.rectangleHeight = 0;
                    _this.cornerRadiusX = 0;
                    _this.cornerRadiusY = 0;
                    (function () {
                        _this.rectangleWidth = rectangleWidth;
                        _this.rectangleHeight = rectangleHeight;
                        _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Rectangle, _this));
                    })();
                }
                else
                    throw new Error('invalid overload');
                return _this;
            }
            Rectangle.prototype.getCornerRadiusX = function () {
                return this.cornerRadiusX;
            };
            Rectangle.prototype.setCornerRadiusX = function (cornerRadiusX) {
                this.cornerRadiusX = cornerRadiusX;
            };
            Rectangle.prototype.getCornerRadiusY = function () {
                return this.cornerRadiusY;
            };
            Rectangle.prototype.setCornerRadiusY = function (cornerRadiusY) {
                this.cornerRadiusY = cornerRadiusY;
            };
            Rectangle.prototype.getRectangleWidth = function () {
                return this.rectangleWidth;
            };
            Rectangle.prototype.setRectangleWidth = function (rectangleWidth) {
                this.rectangleWidth = rectangleWidth;
            };
            Rectangle.prototype.getRectangleHeight = function () {
                return this.rectangleHeight;
            };
            Rectangle.prototype.setRectangleHeight = function (rectangleHeight) {
                this.rectangleHeight = rectangleHeight;
            };
            /**
             *
             * @param {*} event
             * @return {boolean}
             */
            Rectangle.prototype.dispatchEvent = function (event) {
                var val = _super.prototype.dispatchEvent.call(this, event);
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.EventName.ABOUT_TO_BE_ADDED_TO_STAGE)) {
                }
                else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                }
                return val;
            };
            return Rectangle;
        }(splashjs.display.Shape));
        display.Rectangle = Rectangle;
        Rectangle["__class"] = "splashjs.display.Rectangle";
        Rectangle["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IInteractiveObject", "splashjs.display.iface.IShape", "splashjs.lang.iface.ISplashObject", "splashjs.display.iface.IRectangle", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var layout;
    (function (layout) {
        var GridLayout = /** @class */ (function (_super) {
            __extends(GridLayout, _super);
            function GridLayout(row, col) {
                var _this = _super.call(this, "gridLayout") || this;
                if (_this.row === undefined)
                    _this.row = 0;
                if (_this.col === undefined)
                    _this.col = 0;
                if (_this.children === undefined)
                    _this.children = null;
                _this.row = row;
                _this.col = col;
                _this.children = ([]);
                splashjs.Global.global_$LI$().getRendererCreator().createRenderer(GridLayout, _this);
                return _this;
            }
            GridLayout.prototype.render = function () {
                _super.prototype.render.call(this);
            };
            GridLayout.prototype.getRow = function () {
                return this.row;
            };
            GridLayout.prototype.getCol = function () {
                return this.col;
            };
            GridLayout.prototype.add = function (displayObject, rowNum, colNum) {
                /* add */ (this.children.push(displayObject) > 0);
                displayObject.render();
            };
            return GridLayout;
        }(splashjs.layout.Layout));
        layout.GridLayout = GridLayout;
        GridLayout["__class"] = "splashjs.layout.GridLayout";
        GridLayout["__interfaces"] = ["splashjs.layout.iface.IGridLayout", "splashjs.display.iface.IDisplayObject", "splashjs.layout.iface.ILayout", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher"];
    })(layout = splashjs.layout || (splashjs.layout = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var text;
    (function (text_2) {
        var DynamicText = /** @class */ (function (_super) {
            __extends(DynamicText, _super);
            function DynamicText(text) {
                var _this = _super.call(this, "dynamicText") || this;
                _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(DynamicText, _this));
                _super.prototype.setText.call(_this, text);
                return _this;
            }
            DynamicText.prototype.dispatchEvent = function (event) {
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.width = _super.prototype.getRenderer.call(this).getOriginalWidth();
                    this.height = _super.prototype.getRenderer.call(this).getOriginalHeight();
                }
                var val = _super.prototype.dispatchEvent.call(this, event);
                return val;
            };
            /**
             *
             * @param {number} width
             */
            DynamicText.prototype.setWidth = function (width) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            };
            /**
             *
             * @param {number} height
             */
            DynamicText.prototype.setHeight = function (height) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            };
            /**
             *
             * @param {number} width
             * @param {number} height
             */
            DynamicText.prototype.setSize = function (width, height) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            };
            return DynamicText;
        }(splashjs.text.Text));
        text_2.DynamicText = DynamicText;
        DynamicText["__class"] = "splashjs.text.DynamicText";
        DynamicText["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.text.iface.IDynamicText", "splashjs.text.iface.IText"];
    })(text = splashjs.text || (splashjs.text = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var text;
    (function (text_3) {
        var InputText = /** @class */ (function (_super) {
            __extends(InputText, _super);
            function InputText(text) {
                var _this = _super.call(this, "inputText") || this;
                _super.prototype.setText.call(_this, text);
                _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(InputText, _this));
                return _this;
            }
            InputText.prototype.dispatchEvent = function (event) {
                var val = _super.prototype.dispatchEvent.call(this, event);
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.width = _super.prototype.getRenderer.call(this).getOriginalWidth();
                    this.height = _super.prototype.getRenderer.call(this).getOriginalHeight();
                }
                return val;
            };
            /**
             *
             * @param {number} width
             */
            InputText.prototype.setWidth = function (width) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            };
            /**
             *
             * @param {number} height
             */
            InputText.prototype.setHeight = function (height) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            };
            /**
             *
             * @param {number} width
             * @param {number} height
             */
            InputText.prototype.setSize = function (width, height) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            };
            return InputText;
        }(splashjs.text.Text));
        text_3.InputText = InputText;
        InputText["__class"] = "splashjs.text.InputText";
        InputText["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.text.iface.IInputText", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.text.iface.IText"];
    })(text = splashjs.text || (splashjs.text = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var text;
    (function (text_4) {
        var StaticText = /** @class */ (function (_super) {
            __extends(StaticText, _super);
            function StaticText(text) {
                var _this = _super.call(this, "staticText") || this;
                _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(StaticText, _this));
                _super.prototype.setText.call(_this, text);
                return _this;
            }
            StaticText.prototype.dispatchEvent = function (event) {
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.width = _super.prototype.getRenderer.call(this).getOriginalWidth();
                    this.height = _super.prototype.getRenderer.call(this).getOriginalHeight();
                }
                var val = _super.prototype.dispatchEvent.call(this, event);
                return val;
            };
            /**
             *
             * @param {number} width
             */
            StaticText.prototype.setWidth = function (width) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            };
            /**
             *
             * @param {number} height
             */
            StaticText.prototype.setHeight = function (height) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            };
            /**
             *
             * @param {number} width
             * @param {number} height
             */
            StaticText.prototype.setSize = function (width, height) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.UnsupportedOperationException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
            };
            return StaticText;
        }(splashjs.text.Text));
        text_4.StaticText = StaticText;
        StaticText["__class"] = "splashjs.text.StaticText";
        StaticText["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.text.iface.IText", "splashjs.text.iface.IStaticText"];
    })(text = splashjs.text || (splashjs.text = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var controls;
        (function (controls) {
            var ControlRenderer = /** @class */ (function (_super) {
                __extends(ControlRenderer, _super);
                function ControlRenderer() {
                    return _super.call(this) || this;
                }
                return ControlRenderer;
            }(splashjs.render.display.InteractiveObjectRenderer));
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
            var DisplayObjectContainerRenderer = /** @class */ (function (_super) {
                __extends(DisplayObjectContainerRenderer, _super);
                function DisplayObjectContainerRenderer() {
                    return _super.call(this) || this;
                }
                return DisplayObjectContainerRenderer;
            }(splashjs.render.display.InteractiveObjectRenderer));
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
            var ShapeRenderer = /** @class */ (function (_super) {
                __extends(ShapeRenderer, _super);
                function ShapeRenderer() {
                    var _this = _super.call(this) || this;
                    if (_this.childSVGElement === undefined)
                        _this.childSVGElement = null;
                    return _this;
                }
                ShapeRenderer.prototype.getStrokeColorNameAsString = function () {
                    var strokeColorName = splashjs.utils.ColorName.BLACK;
                    var strokeColor = _super.prototype.getRenderObject.call(this).getStrokeColor();
                    if (strokeColor.getColorType() === splashjs.utils.ColorType.NAME)
                        strokeColorName = strokeColor.getColorName();
                    else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(strokeColor.getColorType(), splashjs.utils.ColorType.HEX))
                        strokeColorName = strokeColor.getHEX();
                    return strokeColorName;
                };
                ShapeRenderer.prototype.getFillColorNameAsString = function () {
                    var fillColorName = splashjs.utils.ColorName.BLACK;
                    var fillColor = _super.prototype.getRenderObject.call(this).getFillColor();
                    if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(fillColor.getColorType(), splashjs.utils.ColorType.NAME))
                        fillColorName = fillColor.getColorName();
                    else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(fillColor.getColorType(), splashjs.utils.ColorType.HEX))
                        fillColorName = fillColor.getHEX();
                    return fillColorName;
                };
                ShapeRenderer.prototype.getStrokeWidthAsString = function () {
                    var strokeWidth = "1";
                    strokeWidth = _super.prototype.getRenderObject.call(this).getStrokeWidth() + "";
                    return strokeWidth;
                };
                ShapeRenderer.prototype.getSVGElement = function () {
                    return _super.prototype.getDOMElement.call(this);
                };
                return ShapeRenderer;
            }(splashjs.render.display.InteractiveObjectRenderer));
            display.ShapeRenderer = ShapeRenderer;
            ShapeRenderer["__class"] = "splashjs.render.display.ShapeRenderer";
            ShapeRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.display.iface.IShapeRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var text;
        (function (text) {
            var TextRenderer = /** @class */ (function (_super) {
                __extends(TextRenderer, _super);
                function TextRenderer() {
                    return _super.call(this) || this;
                }
                /**
                 *
                 */
                TextRenderer.prototype.setColor = function () {
                    this.getDOMElement().style.color = this.getCSSColorText();
                };
                TextRenderer.prototype.setText = function () {
                };
                TextRenderer.prototype.setFont = function () {
                };
                TextRenderer.prototype.setFontSize = function () {
                };
                TextRenderer.prototype.setFontWeight = function () {
                };
                TextRenderer.prototype.setFontStyle = function () {
                };
                TextRenderer.prototype.setSelectable = function () {
                };
                TextRenderer.prototype.getClientWidth = function () {
                    return (this.getDOMElement().clientWidth | 0);
                };
                TextRenderer.prototype.getClientHeight = function () {
                    return (this.getDOMElement().clientHeight | 0);
                };
                /*private*/ TextRenderer.prototype.getCSSColorText = function () {
                    var colorName = splashjs.utils.ColorName.BLACK;
                    var color = _super.prototype.getRenderObject.call(this).getColor();
                    if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(color.getColorType(), splashjs.utils.ColorType.NAME))
                        colorName = color.getColorName();
                    else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(color.getColorType(), splashjs.utils.ColorType.HEX))
                        colorName = color.getHEX();
                    return colorName;
                };
                return TextRenderer;
            }(splashjs.render.display.InteractiveObjectRenderer));
            text.TextRenderer = TextRenderer;
            TextRenderer["__class"] = "splashjs.render.text.TextRenderer";
            TextRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.text.iface.ITextRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(text = render.text || (render.text = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        var List = /** @class */ (function (_super) {
            __extends(List, _super);
            function List() {
                var _this = _super.call(this, "list") || this;
                /*private*/ _this.items = ([]);
                /*private*/ _this.isRenderCalled = false;
                _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(List, _this));
                return _this;
            }
            List.prototype.addItem = function (item) {
                /* add */ (this.items.push(item) > 0);
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).addItem(item);
            };
            List.prototype.addItemGroup = function (itemGroup) {
                /* add */ (this.items.push(itemGroup) > 0);
            };
            List.prototype.getAllItems = function () {
                return this.items;
            };
            List.prototype.render = function () {
                if (this.isRenderCalled === false) {
                    _super.prototype.render.call(this);
                    _super.prototype.getRenderer.call(this).addAllItems();
                    this.isRenderCalled = true;
                }
            };
            return List;
        }(splashjs.controls.BaseList));
        controls.List = List;
        List["__class"] = "splashjs.controls.List";
        List["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IList", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseList"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        var BaseInput = /** @class */ (function (_super) {
            __extends(BaseInput, _super);
            function BaseInput(id) {
                var _this = _super.call(this, id) || this;
                /*private*/ _this.maxChars = 0;
                /*private*/ _this.editable = true;
                if (_this.placeHolderText === undefined)
                    _this.placeHolderText = null;
                if (_this.selectionBeginIndex === undefined)
                    _this.selectionBeginIndex = 0;
                if (_this.selectionEndIndex === undefined)
                    _this.selectionEndIndex = 0;
                return _this;
            }
            BaseInput.prototype.setMaxChars = function (maxChars) {
                this.maxChars = maxChars;
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).setMaxChars();
            };
            BaseInput.prototype.getMaxChars = function () {
                return this.maxChars;
            };
            BaseInput.prototype.setEditable = function (editable) {
                this.editable = editable;
            };
            BaseInput.prototype.getEditable = function () {
                return this.editable;
            };
            BaseInput.prototype.isEditable = function () {
                return this.getEditable();
            };
            BaseInput.prototype.setPlaceHolderText = function (placeHolderText) {
                this.placeHolderText = placeHolderText;
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).setPlaceHolderText();
            };
            BaseInput.prototype.getPlaceHolderText = function () {
                return this.placeHolderText;
            };
            BaseInput.prototype.getSelectionBeginIndex = function () {
                return this.selectionBeginIndex;
            };
            BaseInput.prototype.getSelectionEndIndex = function () {
                return this.selectionEndIndex;
            };
            BaseInput.prototype.setSelection = function (beginIndex, endIndex) {
                this.selectionBeginIndex = beginIndex;
                this.selectionEndIndex = endIndex;
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).setSelection();
            };
            BaseInput.prototype.render = function () {
                _super.prototype.render.call(this);
                _super.prototype.getRenderer.call(this).setMaxChars();
                _super.prototype.getRenderer.call(this).setEditable();
                _super.prototype.getRenderer.call(this).setPlaceHolderText();
            };
            return BaseInput;
        }(splashjs.controls.BaseText));
        controls.BaseInput = BaseInput;
        BaseInput["__class"] = "splashjs.controls.BaseInput";
        BaseInput["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.controls.iface.IBaseInput", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseText"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        var Button = /** @class */ (function (_super) {
            __extends(Button, _super);
            function Button(text) {
                var _this = _super.call(this, "button") || this;
                _super.prototype.setText.call(_this, text);
                _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Button, _this));
                return _this;
            }
            Button.prototype.dispatchEvent = function (event) {
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.originalWidth = _super.prototype.getRenderer.call(this).getOriginalWidth();
                    if (this.width === 0 && this.originalWidth !== 0) {
                        _super.prototype.setWidth.call(this, this.originalWidth);
                    }
                    this.originalHeight = _super.prototype.getRenderer.call(this).getOriginalHeight();
                    if (this.height === 0 && this.originalHeight !== 0) {
                        _super.prototype.setHeight.call(this, this.originalHeight);
                    }
                    _super.prototype.getRenderer.call(this).refresh();
                }
                return _super.prototype.dispatchEvent.call(this, event);
            };
            /**
             *
             * @param {number} width
             */
            Button.prototype.setWidth = function (width) {
                _super.prototype.setWidth.call(this, width);
            };
            /**
             *
             * @return {number}
             */
            Button.prototype.getWidth = function () {
                return _super.prototype.getWidth.call(this);
            };
            /**
             *
             * @param {number} height
             */
            Button.prototype.setHeight = function (height) {
                _super.prototype.setHeight.call(this, height);
            };
            /**
             *
             * @return {number}
             */
            Button.prototype.getHeight = function () {
                return _super.prototype.getHeight.call(this);
            };
            /**
             *
             * @param {number} scaleX
             */
            Button.prototype.setScaleX = function (scaleX) {
                this.scaleX = scaleX;
                _super.prototype.setWidth.call(this, ((scaleX | 0) * this.originalWidth));
            };
            /**
             *
             * @return {number}
             */
            Button.prototype.getScaleX = function () {
                return this.scaleX;
            };
            /**
             *
             * @param {number} scaleY
             */
            Button.prototype.setScaleY = function (scaleY) {
                this.scaleY = scaleY;
                _super.prototype.setHeight.call(this, ((scaleY | 0) * this.originalHeight));
            };
            /**
             *
             * @return {number}
             */
            Button.prototype.getScaleY = function () {
                return this.scaleY;
            };
            /**
             *
             * @param {number} width
             * @param {number} height
             */
            Button.prototype.setSize = function (width, height) {
                _super.prototype.setWidth.call(this, width);
                _super.prototype.setHeight.call(this, height);
            };
            /**
             *
             * @param {number} scaleX
             * @param {number} scaleY
             */
            Button.prototype.setScaleXY = function (scaleX, scaleY) {
                this.setScaleX(scaleX);
                this.setScaleY(scaleY);
            };
            Button.prototype.render = function () {
                _super.prototype.render.call(this);
                if (_super.prototype.getWidth.call(this) !== 0)
                    _super.prototype.getRenderer.call(this).setWidth();
                if (_super.prototype.getHeight.call(this) !== 0)
                    _super.prototype.getRenderer.call(this).setHeight();
            };
            return Button;
        }(splashjs.controls.BaseText));
        controls.Button = Button;
        Button["__class"] = "splashjs.controls.Button";
        Button["__interfaces"] = ["splashjs.controls.iface.IButton", "splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseText"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        var Label = /** @class */ (function (_super) {
            __extends(Label, _super);
            function Label(text) {
                var _this = _super.call(this, "label") || this;
                _super.prototype.setText.call(_this, text);
                _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(Label, _this));
                return _this;
            }
            Label.prototype.dispatchEvent = function (event) {
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.originalWidth = _super.prototype.getRenderer.call(this).getOriginalWidth();
                    this.originalHeight = _super.prototype.getRenderer.call(this).getOriginalHeight();
                    if (this.width === 0 && this.originalWidth !== 0)
                        _super.prototype.setWidth.call(this, this.originalWidth);
                    if (this.height === 0 && this.originalHeight !== 0)
                        _super.prototype.setHeight.call(this, this.originalHeight);
                }
                return _super.prototype.dispatchEvent.call(this, event);
            };
            return Label;
        }(splashjs.controls.BaseText));
        controls.Label = Label;
        Label["__class"] = "splashjs.controls.Label";
        Label["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.controls.iface.ILabel", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseText"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var MovieClip = /** @class */ (function (_super) {
            __extends(MovieClip, _super);
            function MovieClip() {
                return _super.call(this, "movieclip") || this;
            }
            return MovieClip;
        }(splashjs.display.Sprite));
        display.MovieClip = MovieClip;
        MovieClip["__class"] = "splashjs.display.MovieClip";
        MovieClip["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.ISprite", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.display.iface.IMovieClip", "splashjs.events.iface.IEventDispatcher"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var desktop;
        (function (desktop) {
            var Stage = /** @class */ (function (_super) {
                __extends(Stage, _super);
                function Stage(stageOwnerName, width, height) {
                    var _this = _super.call(this, stageOwnerName, width, height) || this;
                    if (_this.nativeWindow === undefined)
                        _this.nativeWindow = null;
                    return _this;
                }
                Stage.prototype.setNativeWindow = function (nativeWindow) {
                    this.nativeWindow = nativeWindow;
                };
                Stage.prototype.getNativeWindow = function () {
                    return this.nativeWindow;
                };
                return Stage;
            }(splashjs.display.Stage));
            desktop.Stage = Stage;
            Stage["__class"] = "splashjs.display.desktop.Stage";
            Stage["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.display.iface.IStage", "splashjs.display.iface.IDisplayObjectContainer", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.display.desktop.iface.IStage"];
        })(desktop = display.desktop || (display.desktop = {}));
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var controls;
        (function (controls) {
            var BaseListRenderer = /** @class */ (function (_super) {
                __extends(BaseListRenderer, _super);
                function BaseListRenderer() {
                    return _super.call(this) || this;
                }
                return BaseListRenderer;
            }(splashjs.render.controls.ControlRenderer));
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
            var BaseTextRenderer = /** @class */ (function (_super) {
                __extends(BaseTextRenderer, _super);
                function BaseTextRenderer() {
                    return _super.call(this) || this;
                }
                BaseTextRenderer.prototype.setText = function () {
                    var text = _super.prototype.getRenderObject.call(this).getText();
                    if (text != null)
                        _super.prototype.getDOMElement.call(this).innerText = text;
                    else
                        _super.prototype.getDOMElement.call(this).innerText = "";
                };
                return BaseTextRenderer;
            }(splashjs.render.controls.ControlRenderer));
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
            var RadioButtonRenderer = /** @class */ (function (_super) {
                __extends(RadioButtonRenderer, _super);
                function RadioButtonRenderer(renderObject) {
                    var _this = _super.call(this) || this;
                    if (_this.htmlInputElement === undefined)
                        _this.htmlInputElement = null;
                    _super.prototype.setRenderObject.call(_this, renderObject);
                    _this.htmlInputElement = document.createElement("input");
                    _this.htmlInputElement.type = "radio";
                    _super.prototype.setRenderElement.call(_this, new splashjs.render.RenderElement(_this.htmlInputElement));
                    return _this;
                }
                RadioButtonRenderer.prototype.create = function () {
                };
                RadioButtonRenderer.prototype.setSelected = function () {
                    var selected = _super.prototype.getRenderObject.call(this).getSelected();
                    if (selected === true)
                        this.htmlInputElement.checked = true;
                    else if (selected === false)
                        this.htmlInputElement.checked = false;
                };
                RadioButtonRenderer.prototype.setGroup = function () {
                    var group = _super.prototype.getRenderObject.call(this).getGroup();
                    if (group != null)
                        this.htmlInputElement.name = group.getName();
                    else if (group == null)
                        this.htmlInputElement.removeAttribute("name");
                };
                return RadioButtonRenderer;
            }(splashjs.render.controls.ControlRenderer));
            controls.RadioButtonRenderer = RadioButtonRenderer;
            RadioButtonRenderer["__class"] = "splashjs.render.controls.RadioButtonRenderer";
            RadioButtonRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.controls.iface.IRadioButtonRenderer"];
        })(controls = render.controls || (render.controls = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var display;
        (function (display) {
            var SpriteRenderer = /** @class */ (function (_super) {
                __extends(SpriteRenderer, _super);
                function SpriteRenderer(renderObject) {
                    var _this = _super.call(this) || this;
                    _super.prototype.setRenderObject.call(_this, renderObject);
                    _super.prototype.setRenderElement.call(_this, new splashjs.render.RenderElement(document.createElement("span")));
                    return _this;
                }
                return SpriteRenderer;
            }(splashjs.render.display.DisplayObjectContainerRenderer));
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
            var StageRenderer = /** @class */ (function (_super) {
                __extends(StageRenderer, _super);
                function StageRenderer(renderObject) {
                    var _this = _super.call(this) || this;
                    if (_this.timer === undefined)
                        _this.timer = null;
                    if (_this.htmlSpanElement === undefined)
                        _this.htmlSpanElement = null;
                    _super.prototype.setRenderObject.call(_this, renderObject);
                    _this.htmlSpanElement = document.createElement("span");
                    _super.prototype.setRenderElement.call(_this, new splashjs.render.RenderElement(_this.htmlSpanElement));
                    _this.timer = new java.util.Timer();
                    return _this;
                }
                /**
                 *
                 */
                StageRenderer.prototype.createEventListeners = function () {
                    var _this = this;
                    _super.prototype.createEventListeners.call(this);
                    this.htmlSpanElement.tabIndex = 0;
                    this.htmlSpanElement.addEventListener(splashjs.render.HTMLDomEventName.KEYPRESS, function (event) {
                        var domKeyboardEvent = event;
                        var loc = (new Number(domKeyboardEvent.location).valueOf() | 0);
                        var location = loc + "";
                        if (loc === domKeyboardEvent.DOM_KEY_LOCATION_STANDARD)
                            location = splashjs.ui.KeyLocation.STANDARD;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_LEFT)
                            location = splashjs.ui.KeyLocation.LEFT;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_RIGHT)
                            location = splashjs.ui.KeyLocation.RIGHT;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_NUMPAD)
                            location = splashjs.ui.KeyLocation.NUMPAD;
                        var charCode = (new Number(domKeyboardEvent.charCode).valueOf() | 0);
                        var keyCode = (new Number(domKeyboardEvent.keyCode).valueOf() | 0);
                        var which = (new Number(domKeyboardEvent.which).valueOf() | 0);
                        var keyboardEvent = new splashjs.events.KeyboardEvent(splashjs.events.KeyboardEvent.KEY_PRESS, domKeyboardEvent.altKey, charCode, domKeyboardEvent.char, domKeyboardEvent.ctrlKey, domKeyboardEvent.key, keyCode, location, domKeyboardEvent.metaKey, domKeyboardEvent.repeat, domKeyboardEvent.shiftKey, which);
                        _this.getRenderObject().dispatchEvent(keyboardEvent);
                    });
                    this.htmlSpanElement.addEventListener(splashjs.render.HTMLDomEventName.KEYUP, function (event) {
                        var domKeyboardEvent = event;
                        var loc = (new Number(domKeyboardEvent.location).valueOf() | 0);
                        var location = loc + "";
                        if (loc === domKeyboardEvent.DOM_KEY_LOCATION_STANDARD)
                            location = splashjs.ui.KeyLocation.STANDARD;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_LEFT)
                            location = splashjs.ui.KeyLocation.LEFT;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_RIGHT)
                            location = splashjs.ui.KeyLocation.RIGHT;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_NUMPAD)
                            location = splashjs.ui.KeyLocation.NUMPAD;
                        var charCode = (new Number(domKeyboardEvent.charCode).valueOf() | 0);
                        var keyCode = (new Number(domKeyboardEvent.keyCode).valueOf() | 0);
                        var which = (new Number(domKeyboardEvent.which).valueOf() | 0);
                        var keyboardEvent = new splashjs.events.KeyboardEvent(splashjs.events.KeyboardEvent.KEY_UP, domKeyboardEvent.altKey, charCode, domKeyboardEvent.char, domKeyboardEvent.ctrlKey, domKeyboardEvent.key, keyCode, location, domKeyboardEvent.metaKey, domKeyboardEvent.repeat, domKeyboardEvent.shiftKey, which);
                        _this.getRenderObject().dispatchEvent(keyboardEvent);
                    });
                    this.htmlSpanElement.addEventListener(splashjs.render.HTMLDomEventName.KEYDOWN, function (event) {
                        var domKeyboardEvent = event;
                        var loc = (new Number(domKeyboardEvent.location).valueOf() | 0);
                        var location = loc + "";
                        if (loc === domKeyboardEvent.DOM_KEY_LOCATION_STANDARD)
                            location = splashjs.ui.KeyLocation.STANDARD;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_LEFT)
                            location = splashjs.ui.KeyLocation.LEFT;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_RIGHT)
                            location = splashjs.ui.KeyLocation.RIGHT;
                        else if (loc === domKeyboardEvent.DOM_KEY_LOCATION_NUMPAD)
                            location = splashjs.ui.KeyLocation.NUMPAD;
                        var charCode = (new Number(domKeyboardEvent.charCode).valueOf() | 0);
                        var keyCode = (new Number(domKeyboardEvent.keyCode).valueOf() | 0);
                        var which = (new Number(domKeyboardEvent.which).valueOf() | 0);
                        var keyboardEvent = new splashjs.events.KeyboardEvent(splashjs.events.KeyboardEvent.KEY_DOWN, domKeyboardEvent.altKey, charCode, domKeyboardEvent.char, domKeyboardEvent.ctrlKey, domKeyboardEvent.key, keyCode, location, domKeyboardEvent.metaKey, domKeyboardEvent.repeat, domKeyboardEvent.shiftKey, which);
                        _this.getRenderObject().dispatchEvent(keyboardEvent);
                    });
                };
                /**
                 *
                 */
                StageRenderer.prototype.setColor = function () {
                    var color = this.getRenderObject().getColor();
                    if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(color.getColorType(), splashjs.utils.ColorType.GRADIENT)) {
                    }
                    else {
                        this.getDOMElement().style.backgroundColor = this.getCSSColorText();
                    }
                };
                /**
                 *
                 */
                StageRenderer.prototype.startEnterFrameExitFrameDispatcherLoop = function () {
                    this.timer.scheduleAtFixedRate$java_util_TimerTask$long$long(new StageRenderer.StageRenderer$0(this), 0, 15);
                };
                StageRenderer.prototype.getCSSColorText = function () {
                    var colorName = splashjs.utils.ColorName.BLACK;
                    var color = _super.prototype.getRenderObject.call(this).getColor();
                    if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(color.getColorType(), splashjs.utils.ColorType.NAME))
                        colorName = color.getColorName();
                    else if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(color.getColorType(), splashjs.utils.ColorType.HEX))
                        colorName = color.getHEX();
                    return colorName;
                };
                return StageRenderer;
            }(splashjs.render.display.DisplayObjectContainerRenderer));
            display.StageRenderer = StageRenderer;
            StageRenderer["__class"] = "splashjs.render.display.StageRenderer";
            StageRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.display.iface.IStageRenderer", "splashjs.render.display.iface.IDisplayObjectContainerRenderer"];
            (function (StageRenderer) {
                var StageRenderer$0 = /** @class */ (function (_super) {
                    __extends(StageRenderer$0, _super);
                    function StageRenderer$0(__parent) {
                        var _this = _super.call(this) || this;
                        _this.__parent = __parent;
                        return _this;
                    }
                    StageRenderer$0.prototype.run = function () {
                        this.__parent.getRenderObject().dispatchEvent(new splashjs.events.Event(splashjs.events.Event.ENTER_FRAME));
                        this.__parent.getRenderObject().dispatchEvent(new splashjs.events.Event(splashjs.events.Event.EXIT_FRAME));
                    };
                    return StageRenderer$0;
                }(java.util.TimerTask));
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
            var CircleRenderer = /** @class */ (function (_super) {
                __extends(CircleRenderer, _super);
                function CircleRenderer(renderObject) {
                    var _this = _super.call(this) || this;
                    _super.prototype.setRenderObject.call(_this, renderObject);
                    _super.prototype.setRenderElement.call(_this, new splashjs.render.RenderElement(document.createElementNS(_this.SVGNS, "svg")));
                    _this.create();
                    return _this;
                }
                CircleRenderer.prototype.create = function () {
                    this.childSVGElement = document.createElementNS(this.SVGNS, "circle");
                    this.setCircleAttributes();
                    this.getSVGElement().appendChild(this.childSVGElement);
                };
                CircleRenderer.prototype.update = function () {
                    this.setCircleAttributes();
                };
                /*private*/ CircleRenderer.prototype.setCircleAttributes = function () {
                    this.childSVGElement.setAttributeNS(null, "r", this.getSVGCircleRadiusText());
                    this.childSVGElement.setAttributeNS(null, "cx", this.getSVGCircleCenterXText());
                    this.childSVGElement.setAttributeNS(null, "cy", this.getSVGCircleCenterYText());
                    this.childSVGElement.setAttributeNS(null, "stroke", this.getSVGShapeStrokeColorNameText());
                    this.childSVGElement.setAttributeNS(null, "fill", this.getSVGShapeFillColorNameText());
                    this.childSVGElement.setAttributeNS(null, "stroke-width", this.getSVGShapeStrokeWidthText());
                    this.getSVGElement().setAttributeNS(null, "height", this.getSVGCircleHeightText());
                    this.getSVGElement().setAttributeNS(null, "width", this.getSVGCircleWidthText());
                };
                /**
                 *
                 */
                CircleRenderer.prototype.setRadius = function () {
                    this.childSVGElement.setAttributeNS(null, "r", this.getSVGCircleRadiusText());
                    this.childSVGElement.setAttributeNS(null, "cx", this.getSVGCircleCenterXText());
                    this.childSVGElement.setAttributeNS(null, "cy", this.getSVGCircleCenterYText());
                    this.getSVGElement().setAttributeNS(null, "height", this.getSVGCircleHeightText());
                    this.getSVGElement().setAttributeNS(null, "width", this.getSVGCircleWidthText());
                };
                CircleRenderer.prototype.getOriginalWidth = function () {
                    return /* parseInt */ parseInt(this.getSVGCircleWidthText());
                };
                CircleRenderer.prototype.getOriginalHeight = function () {
                    return /* parseInt */ parseInt(this.getSVGCircleHeightText());
                };
                return CircleRenderer;
            }(splashjs.render.display.ShapeRenderer));
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
            var LineRenderer = /** @class */ (function (_super) {
                __extends(LineRenderer, _super);
                function LineRenderer(renderObject) {
                    var _this = _super.call(this) || this;
                    _super.prototype.setRenderObject.call(_this, renderObject);
                    _super.prototype.setRenderElement.call(_this, new splashjs.render.RenderElement(document.createElementNS(_this.SVGNS, "svg")));
                    _this.create();
                    return _this;
                }
                /**
                 *
                 */
                LineRenderer.prototype.create = function () {
                    this.childSVGElement = document.createElementNS(this.SVGNS, "line");
                    this.setLineAttributes();
                    _super.prototype.getSVGElement.call(this).appendChild(this.childSVGElement);
                };
                LineRenderer.prototype.update = function () {
                    if (this.childSVGElement != null) {
                        this.setLineAttributes();
                    }
                };
                /*private*/ LineRenderer.prototype.setLineAttributes = function () {
                    this.childSVGElement.setAttributeNS(null, "x1", "0");
                    this.childSVGElement.setAttributeNS(null, "y1", this.getSVGLineY1Text());
                    this.childSVGElement.setAttributeNS(null, "x2", this.getSVGLineX2Text());
                    this.childSVGElement.setAttributeNS(null, "y2", this.getSVGLineY2Text());
                    this.childSVGElement.setAttributeNS(null, "stroke", this.getSVGShapeStrokeColorNameText());
                    this.childSVGElement.setAttributeNS(null, "stroke-width", this.getSVGShapeStrokeWidthText());
                    this.getSVGElement().setAttributeNS(null, "height", this.getSVGLineHeightText());
                    this.getSVGElement().setAttributeNS(null, "width", this.getSVGLineWidthText());
                    _super.prototype.getRenderObject.call(this).setWidth(/* parseInt */ parseInt(this.getWidthAsString()));
                    _super.prototype.getRenderObject.call(this).setHeight(/* parseInt */ parseInt(this.getHeightAsString()));
                };
                LineRenderer.prototype.getOriginalWidth = function () {
                    return /* parseInt */ parseInt(this.getSVGLineWidthText());
                };
                LineRenderer.prototype.getOriginalHeight = function () {
                    return /* parseInt */ parseInt(this.getSVGLineHeightText());
                };
                /*private*/ LineRenderer.prototype.getWidthAsString = function () {
                    var width = "0";
                    width = _super.prototype.getRenderObject.call(this).getLength() + "";
                    return width;
                };
                /*private*/ LineRenderer.prototype.getHeightAsString = function () {
                    var height = "0";
                    height = this.getStrokeWidthAsString();
                    return height;
                };
                return LineRenderer;
            }(splashjs.render.display.ShapeRenderer));
            display.LineRenderer = LineRenderer;
            LineRenderer["__class"] = "splashjs.render.display.LineRenderer";
            LineRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.display.iface.IShapeRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(display = render.display || (render.display = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var text;
        (function (text) {
            var DynamicTextRenderer = /** @class */ (function (_super) {
                __extends(DynamicTextRenderer, _super);
                function DynamicTextRenderer() {
                    return _super.call(this) || this;
                }
                DynamicTextRenderer.prototype.getClientWidth = function () {
                    return (this.getDOMElement().clientWidth | 0);
                };
                DynamicTextRenderer.prototype.getClientHeight = function () {
                    return (this.getDOMElement().clientHeight | 0);
                };
                return DynamicTextRenderer;
            }(splashjs.render.text.TextRenderer));
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
            var InputTextRenderer = /** @class */ (function (_super) {
                __extends(InputTextRenderer, _super);
                function InputTextRenderer() {
                    return _super.call(this) || this;
                }
                InputTextRenderer.prototype.getClientWidth = function () {
                    return (this.getDOMElement().clientWidth | 0);
                };
                InputTextRenderer.prototype.getClientHeight = function () {
                    return (this.getDOMElement().clientHeight | 0);
                };
                return InputTextRenderer;
            }(splashjs.render.text.TextRenderer));
            text.InputTextRenderer = InputTextRenderer;
            InputTextRenderer["__class"] = "splashjs.render.text.InputTextRenderer";
            InputTextRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.text.iface.ITextRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(text = render.text || (render.text = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var text;
        (function (text) {
            var StaticTextRenderer = /** @class */ (function (_super) {
                __extends(StaticTextRenderer, _super);
                function StaticTextRenderer(renderObject) {
                    var _this = _super.call(this) || this;
                    if (_this.htmlParagraphElement === undefined)
                        _this.htmlParagraphElement = null;
                    _super.prototype.setRenderObject.call(_this, renderObject);
                    _this.htmlParagraphElement = document.createElement("p");
                    _this.renderElement = new splashjs.render.RenderElement(_this.htmlParagraphElement);
                    return _this;
                }
                StaticTextRenderer.prototype.create = function () {
                    this.htmlParagraphElement.innerText = _super.prototype.getRenderObject.call(this).getText();
                };
                StaticTextRenderer.prototype.getOriginalWidth = function () {
                    return (this.getDOMElement().clientWidth | 0);
                };
                StaticTextRenderer.prototype.getOriginalHeight = function () {
                    return (this.getDOMElement().clientHeight | 0);
                };
                StaticTextRenderer.prototype.setText = function () {
                    this.htmlParagraphElement.innerText = _super.prototype.getRenderObject.call(this).getText();
                };
                /*private*/ StaticTextRenderer.prototype.getHTMLParagraphElement = function () {
                    var htmlParagraphElement = this.getDOMElement();
                    return htmlParagraphElement;
                };
                return StaticTextRenderer;
            }(splashjs.render.text.TextRenderer));
            text.StaticTextRenderer = StaticTextRenderer;
            StaticTextRenderer["__class"] = "splashjs.render.text.StaticTextRenderer";
            StaticTextRenderer["__interfaces"] = ["splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.text.iface.ITextRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.text.iface.IStaticTextRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(text = render.text || (render.text = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        var TextArea = /** @class */ (function (_super) {
            __extends(TextArea, _super);
            function TextArea() {
                var _this = _super.call(this, "textArea") || this;
                _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(TextArea, _this));
                return _this;
            }
            TextArea.prototype.dispatchEvent = function (event) {
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.originalWidth = _super.prototype.getRenderer.call(this).getOriginalWidth();
                    this.originalHeight = _super.prototype.getRenderer.call(this).getOriginalHeight();
                    if (this.width === 0 && this.originalWidth !== 0)
                        _super.prototype.setWidth.call(this, this.originalWidth);
                    if (this.height === 0 && this.originalHeight !== 0)
                        _super.prototype.setHeight.call(this, this.originalHeight);
                }
                return _super.prototype.dispatchEvent.call(this, event);
            };
            /**
             *
             */
            TextArea.prototype.render = function () {
                _super.prototype.render.call(this);
                _super.prototype.getRenderer.call(this).setResize("none");
            };
            return TextArea;
        }(splashjs.controls.BaseInput));
        controls.TextArea = TextArea;
        TextArea["__class"] = "splashjs.controls.TextArea";
        TextArea["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.controls.iface.IBaseInput", "splashjs.display.iface.IInteractiveObject", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.ITextArea", "splashjs.controls.iface.IBaseText"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var controls;
    (function (controls) {
        var TextInput = /** @class */ (function (_super) {
            __extends(TextInput, _super);
            function TextInput() {
                var _this = _super.call(this, "textInput") || this;
                /*private*/ _this.displayAsPassword = false;
                _super.prototype.setRenderer.call(_this, splashjs.Global.global_$LI$().getRendererCreator().createRenderer(TextInput, _this));
                return _this;
            }
            TextInput.prototype.setDisplayAsPassword = function (displayAsPassword) {
                this.displayAsPassword = displayAsPassword;
            };
            TextInput.prototype.getDisplayAsPassword = function () {
                return this.displayAsPassword;
            };
            TextInput.prototype.dispatchEvent = function (event) {
                if ( /* equalsIgnoreCase */(function (o1, o2) { return o1.toUpperCase() === (o2 === null ? o2 : o2.toUpperCase()); })(event.getType(), splashjs.events.Event.ADDED_TO_STAGE)) {
                    this.originalWidth = _super.prototype.getRenderer.call(this).getOriginalWidth();
                    this.originalHeight = _super.prototype.getRenderer.call(this).getOriginalHeight();
                    if (this.width === 0 && this.originalWidth !== 0)
                        _super.prototype.setWidth.call(this, this.originalWidth);
                    if (this.height === 0 && this.originalHeight !== 0)
                        _super.prototype.setHeight.call(this, this.originalHeight);
                }
                return _super.prototype.dispatchEvent.call(this, event);
            };
            /**
             *
             * @param {string} text
             */
            TextInput.prototype.setText = function (text) {
                this.text = text;
                if (_super.prototype.getRenderer.call(this) != null)
                    _super.prototype.getRenderer.call(this).setText();
            };
            /**
             *
             */
            TextInput.prototype.render = function () {
                _super.prototype.render.call(this);
                _super.prototype.getRenderer.call(this).setDisplayAsPassword();
                _super.prototype.getRenderer.call(this).setText();
            };
            return TextInput;
        }(splashjs.controls.BaseInput));
        controls.TextInput = TextInput;
        TextInput["__class"] = "splashjs.controls.TextInput";
        TextInput["__interfaces"] = ["splashjs.display.iface.IDisplayObject", "splashjs.controls.iface.IBaseInput", "splashjs.display.iface.IInteractiveObject", "splashjs.controls.iface.ITextInput", "splashjs.lang.iface.ISplashObject", "splashjs.events.iface.IEventDispatcher", "splashjs.controls.iface.IControl", "splashjs.controls.iface.IBaseText"];
    })(controls = splashjs.controls || (splashjs.controls = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var controls;
        (function (controls) {
            var ListRenderer = /** @class */ (function (_super) {
                __extends(ListRenderer, _super);
                function ListRenderer(renderObject) {
                    var _this = _super.call(this) || this;
                    if (_this.htmlSelectElement === undefined)
                        _this.htmlSelectElement = null;
                    _super.prototype.setRenderObject.call(_this, renderObject);
                    _this.htmlSelectElement = document.createElement("select");
                    _super.prototype.setRenderElement.call(_this, new splashjs.render.RenderElement(_this.htmlSelectElement));
                    return _this;
                }
                ListRenderer.prototype.create = function () {
                };
                ListRenderer.prototype.addItem = function (item) {
                    var option = document.createElement("option");
                    option.text = item.getText();
                    this.htmlSelectElement.add(option);
                };
                ListRenderer.prototype.addItemGroup = function (itemGroup) {
                    var optGroup = document.createElement("optgroup");
                    optGroup.label = itemGroup.getTitle();
                    var items = itemGroup.getAllItems();
                    var option = null;
                    var item = null;
                    for (var i = 0; i < /* size */ items.length; i++) {
                        {
                            item = /* get */ items[i];
                            option = document.createElement("option");
                            option.text = item.getText();
                            optGroup.appendChild(option);
                        }
                        ;
                    }
                    this.htmlSelectElement.add(optGroup);
                };
                ListRenderer.prototype.addAllItems = function () {
                    var items = _super.prototype.getRenderObject.call(this).getAllItems();
                    var baseItem = null;
                    var option = null;
                    console.info(/* size */ items.length);
                    for (var i = 0; i < /* size */ items.length; i++) {
                        {
                            baseItem = /* get */ items[i];
                            if (baseItem != null && (baseItem["__interfaces"] != null && baseItem["__interfaces"].indexOf("splashjs.controls.iface.IItem") >= 0 || baseItem.constructor != null && baseItem.constructor["__interfaces"] != null && baseItem.constructor["__interfaces"].indexOf("splashjs.controls.iface.IItem") >= 0)) {
                                this.addItem(baseItem);
                            }
                            else if (baseItem != null && (baseItem["__interfaces"] != null && baseItem["__interfaces"].indexOf("splashjs.controls.iface.IItemGroup") >= 0 || baseItem.constructor != null && baseItem.constructor["__interfaces"] != null && baseItem.constructor["__interfaces"].indexOf("splashjs.controls.iface.IItemGroup") >= 0)) {
                                this.addItemGroup(baseItem);
                            }
                        }
                        ;
                    }
                };
                return ListRenderer;
            }(splashjs.render.controls.BaseListRenderer));
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
            var BaseInputRenderer = /** @class */ (function (_super) {
                __extends(BaseInputRenderer, _super);
                function BaseInputRenderer() {
                    return _super.call(this) || this;
                }
                BaseInputRenderer.prototype.createEventListeners = function () {
                    _super.prototype.createEventListeners.call(this);
                    _super.prototype.getDOMElement.call(this).addEventListener(splashjs.render.HTMLDomEventName.SELECT, function (event) {
                    });
                };
                BaseInputRenderer.prototype.setPlaceHolderText = function () {
                    var placeHolderText = _super.prototype.getRenderObject.call(this).getPlaceHolderText();
                    if (placeHolderText != null)
                        _super.prototype.getDOMElement.call(this).setAttribute("placeHolder", placeHolderText);
                    else
                        _super.prototype.getDOMElement.call(this).setAttribute("placeHolder", "");
                };
                BaseInputRenderer.prototype.setMaxChars = function () {
                    var maxChars = _super.prototype.getRenderObject.call(this).getMaxChars();
                    if (maxChars >= 1)
                        _super.prototype.getDOMElement.call(this).setAttribute("maxLength", maxChars + "");
                };
                BaseInputRenderer.prototype.setEditable = function () {
                    var editable = _super.prototype.getRenderObject.call(this).getEditable();
                    if (editable === true)
                        _super.prototype.getDOMElement.call(this).removeAttribute("readOnly");
                    else if (editable === false)
                        _super.prototype.getDOMElement.call(this).setAttribute("readOnly", "readonly");
                };
                return BaseInputRenderer;
            }(splashjs.render.controls.BaseTextRenderer));
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
            var ButtonRenderer = /** @class */ (function (_super) {
                __extends(ButtonRenderer, _super);
                function ButtonRenderer(renderObject) {
                    var _this = _super.call(this) || this;
                    if (_this.htmlInputElement === undefined)
                        _this.htmlInputElement = null;
                    _super.prototype.setRenderObject.call(_this, renderObject);
                    _this.htmlInputElement = document.createElement("input");
                    _this.htmlInputElement.type = "button";
                    _super.prototype.setRenderElement.call(_this, new splashjs.render.RenderElement(_this.htmlInputElement));
                    return _this;
                }
                ButtonRenderer.prototype.create = function () {
                    this.setText();
                };
                ButtonRenderer.prototype.setText = function () {
                    var text = _super.prototype.getRenderObject.call(this).getText();
                    if (text != null)
                        this.htmlInputElement.value = text;
                };
                return ButtonRenderer;
            }(splashjs.render.controls.BaseTextRenderer));
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
            var LabelRenderer = /** @class */ (function (_super) {
                __extends(LabelRenderer, _super);
                function LabelRenderer(renderObject) {
                    var _this = _super.call(this) || this;
                    if (_this.htmlParagraphElement === undefined)
                        _this.htmlParagraphElement = null;
                    _super.prototype.setRenderObject.call(_this, renderObject);
                    _this.htmlParagraphElement = document.createElement("p");
                    _super.prototype.setRenderElement.call(_this, new splashjs.render.RenderElement(_this.htmlParagraphElement));
                    return _this;
                }
                LabelRenderer.prototype.create = function () {
                    _super.prototype.setText.call(this);
                };
                return LabelRenderer;
            }(splashjs.render.controls.BaseTextRenderer));
            controls.LabelRenderer = LabelRenderer;
            LabelRenderer["__class"] = "splashjs.render.controls.LabelRenderer";
            LabelRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.controls.iface.IBaseTextRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer", "splashjs.render.controls.iface.ILabelRenderer"];
        })(controls = render.controls || (render.controls = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var render;
    (function (render) {
        var controls;
        (function (controls) {
            var TextAreaRenderer = /** @class */ (function (_super) {
                __extends(TextAreaRenderer, _super);
                function TextAreaRenderer(renderObject) {
                    var _this = _super.call(this) || this;
                    if (_this.htmlTextAreaElement === undefined)
                        _this.htmlTextAreaElement = null;
                    _super.prototype.setRenderObject.call(_this, renderObject);
                    _this.htmlTextAreaElement = document.createElement("textarea");
                    _super.prototype.setRenderElement.call(_this, new splashjs.render.RenderElement(_this.htmlTextAreaElement));
                    return _this;
                }
                TextAreaRenderer.prototype.create = function () {
                };
                TextAreaRenderer.prototype.setSelection = function () {
                    var beginIndex = _super.prototype.getRenderObject.call(this).getSelectionBeginIndex();
                    var endIndex = _super.prototype.getRenderObject.call(this).getSelectionEndIndex();
                    this.htmlTextAreaElement.focus();
                    this.htmlTextAreaElement.setSelectionRange(beginIndex, endIndex);
                };
                return TextAreaRenderer;
            }(splashjs.render.controls.BaseInputRenderer));
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
            var TextInputRenderer = /** @class */ (function (_super) {
                __extends(TextInputRenderer, _super);
                function TextInputRenderer(renderObject) {
                    var _this = _super.call(this) || this;
                    if (_this.htmlInputElement === undefined)
                        _this.htmlInputElement = null;
                    _super.prototype.setRenderObject.call(_this, renderObject);
                    _this.htmlInputElement = document.createElement("input");
                    _this.htmlInputElement.type = "text";
                    _super.prototype.setRenderElement.call(_this, new splashjs.render.RenderElement(_this.htmlInputElement));
                    return _this;
                }
                TextInputRenderer.prototype.create = function () {
                };
                TextInputRenderer.prototype.setDisplayAsPassword = function () {
                    var displayAsPassword = _super.prototype.getRenderObject.call(this).getDisplayAsPassword();
                    if (displayAsPassword === true)
                        this.htmlInputElement.type = "password";
                    else if (displayAsPassword === false)
                        this.htmlInputElement.type = "text";
                };
                TextInputRenderer.prototype.setSelection = function () {
                    var beginIndex = _super.prototype.getRenderObject.call(this).getSelectionBeginIndex();
                    var endIndex = _super.prototype.getRenderObject.call(this).getSelectionEndIndex();
                    this.htmlInputElement.focus();
                    this.htmlInputElement.setSelectionRange(beginIndex, endIndex);
                };
                /**
                 *
                 */
                TextInputRenderer.prototype.setText = function () {
                    var text = _super.prototype.getRenderObject.call(this).getText();
                    if (text != null)
                        this.htmlInputElement.value = text;
                    else
                        this.htmlInputElement.value = "";
                };
                return TextInputRenderer;
            }(splashjs.render.controls.BaseInputRenderer));
            controls.TextInputRenderer = TextInputRenderer;
            TextInputRenderer["__class"] = "splashjs.render.controls.TextInputRenderer";
            TextInputRenderer["__interfaces"] = ["splashjs.render.controls.iface.IControlRenderer", "splashjs.render.controls.iface.IBaseTextRenderer", "splashjs.render.display.iface.IDisplayObjectRenderer", "splashjs.render.iface.IRenderer", "splashjs.render.events.iface.IEventDispatcherRenderer", "splashjs.render.display.iface.IInteractiveObjectRenderer", "splashjs.render.controls.iface.ITextInputRenderer", "splashjs.render.controls.iface.IBaseInputRenderer", "splashjs.render.lang.iface.ISplashObjectRenderer"];
        })(controls = render.controls || (render.controls = {}));
    })(render = splashjs.render || (splashjs.render = {}));
})(splashjs || (splashjs = {}));
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
splashjs.Global.global_$LI$();
