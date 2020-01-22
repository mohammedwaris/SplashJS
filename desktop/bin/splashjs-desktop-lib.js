var splashjs;
(function (splashjs) {
    var display;
    (function (display) {
        var NativeWindow = (function () {
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
                        _this.nativeWindowStub = splashjs.NativeWindowStub.newInstance();
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
                            _this.nativeWindowStub = splashjs.NativeWindowStub.newInstance();
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
        NativeWindow["__interfaces"] = ["splashjs.display.iface.INativeWindow"];
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var display;
    (function (display) {
        var NativeWindowDisplayState = (function () {
            function NativeWindowDisplayState() {
            }
            return NativeWindowDisplayState;
        }());
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
        var NativeWindowInitOptions = (function () {
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
        var NativeWindowRenderMode = (function () {
            function NativeWindowRenderMode() {
            }
            return NativeWindowRenderMode;
        }());
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
        var NativeWindowResize = (function () {
            function NativeWindowResize() {
            }
            return NativeWindowResize;
        }());
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
        var NativeWindowSystemChrome = (function () {
            function NativeWindowSystemChrome() {
            }
            return NativeWindowSystemChrome;
        }());
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
        var NativeWindowType = (function () {
            function NativeWindowType() {
            }
            return NativeWindowType;
        }());
        NativeWindowType.LIGHTWEIGHT = "lightweight";
        NativeWindowType.NORMAL = "normal";
        NativeWindowType.UTILITY = "utility";
        display.NativeWindowType = NativeWindowType;
        NativeWindowType["__class"] = "splashjs.display.NativeWindowType";
    })(display = splashjs.display || (splashjs.display = {}));
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var FileStub = (function () {
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
    splashjs.FileStub = FileStub;
    FileStub["__class"] = "splashjs.FileStub";
})(splashjs || (splashjs = {}));
(function (splashjs) {
    var filesystem;
    (function (filesystem) {
        var File = (function () {
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
                        _this.fileStub = splashjs.FileStub.newInstance();
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
                            _this.fileStub = splashjs.FileStub.newInstance();
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
    var NativeWindowStub = (function () {
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
    splashjs.NativeWindowStub = NativeWindowStub;
    NativeWindowStub["__class"] = "splashjs.NativeWindowStub";
})(splashjs || (splashjs = {}));
