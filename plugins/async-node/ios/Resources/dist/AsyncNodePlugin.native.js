"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _object_spread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _define_property(target, key, source[key]);
        });
    }
    return target;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _object_spread_props(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
        ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _object_without_properties(source, excluded) {
    if (source == null) return {};
    var target = _object_without_properties_loose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var AsyncNodePlugin = function() {
    var equalToOrIn = // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/tapable-ts@0.2.4/node_modules/tapable-ts/dist/hooks.mjs
    function equalToOrIn(value, check) {
        if (Array.isArray(check)) {
            return check.includes(value);
        }
        return check === value;
    };
    var callTap = function callTap(tap, args, ctx) {
        var _tap;
        if (tap.context) {
            var _tap1;
            return (_tap1 = tap).callback.apply(_tap1, [
                ctx
            ].concat(_to_consumable_array(args)));
        }
        return (_tap = tap).callback.apply(_tap, _to_consumable_array(args));
    };
    var __create = Object.create;
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __getProtoOf = Object.getPrototypeOf;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __commonJS = function(cb, mod) {
        return function __require() {
            return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = {
                exports: {}
            }).exports, mod), mod.exports;
        };
    };
    var __export = function(target, all) {
        for(var name in all)__defProp(target, name, {
            get: all[name],
            enumerable: true
        });
    };
    var __copyProps = function(to, from, except, desc) {
        if (from && typeof from === "object" || typeof from === "function") {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                var _loop = function() {
                    var key = _step.value;
                    if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                        get: function() {
                            return from[key];
                        },
                        enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                    });
                };
                for(var _iterator = __getOwnPropNames(from)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
        return to;
    };
    var __toESM = function(mod, isNodeMode, target) {
        return target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(// If the importer is in node compatibility mode or this is not an ESM
        // file that has been converted to a CommonJS file using a Babel-
        // compatible transform (i.e. "__esModule" has not been set), then set
        // "default" to the CommonJS "module.exports" for node compatibility.
        isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
            value: mod,
            enumerable: true
        }) : target, mod);
    };
    var __toCommonJS = function(mod) {
        return __copyProps(__defProp({}, "__esModule", {
            value: true
        }), mod);
    };
    // external-global-plugin:@player-ui/player
    var require_player = __commonJS({
        "external-global-plugin:@player-ui/player": function(exports, module) {
            "use strict";
            module.exports = globalThis.Player;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/queue-microtask@1.2.3/node_modules/queue-microtask/index.js
    var require_queue_microtask = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/queue-microtask@1.2.3/node_modules/queue-microtask/index.js": function(exports, module) {
            "use strict";
            var promise;
            module.exports = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : global) : function(cb) {
                return (promise || (promise = Promise.resolve())).then(cb).catch(function(err) {
                    return setTimeout(function() {
                        throw err;
                    }, 0);
                });
            };
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/async-node/core/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        AsyncNodePlugin: function() {
            return AsyncNodePlugin;
        },
        AsyncNodePluginPlugin: function() {
            return AsyncNodePluginPlugin;
        },
        AsyncNodePluginSymbol: function() {
            return AsyncNodePluginSymbol;
        },
        asyncTransform: function() {
            return asyncTransform;
        },
        createAsyncTransform: function() {
            return createAsyncTransform;
        }
    });
    var import_player6 = __toESM(require_player());
    var InterceptionManager = /*#__PURE__*/ function() {
        function InterceptionManager() {
            _class_call_check(this, InterceptionManager);
            this.interceptions = [];
            this.interceptionKeySet = /* @__PURE__ */ new Set();
        }
        _create_class(InterceptionManager, [
            {
                key: "isUsed",
                value: function isUsed() {
                    return this.interceptions.length > 0;
                }
            },
            {
                key: "intercept",
                value: function intercept(int) {
                    var _this = this;
                    this.interceptions.push(int);
                    Object.keys(int).forEach(function(s) {
                        _this.interceptionKeySet.add(s);
                    });
                }
            },
            {
                key: "tap",
                value: function tap(tap) {
                    if (this.interceptionKeySet.has("tap")) {
                        this.interceptions.forEach(function(i) {
                            var _a;
                            (_a = i.tap) == null ? void 0 : _a.call(i, tap);
                        });
                    }
                }
            },
            {
                key: "call",
                value: function call(ctx) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    if (this.interceptionKeySet.has("call")) {
                        this.interceptions.forEach(function(i) {
                            var _a, _b;
                            if (i.context) {
                                var _a1;
                                (_a = i.call) == null ? void 0 : (_a1 = _a).call.apply(_a1, [
                                    i,
                                    ctx
                                ].concat(_to_consumable_array(args)));
                            } else {
                                var _b1;
                                (_b = i.call) == null ? void 0 : (_b1 = _b).call.apply(_b1, [
                                    i
                                ].concat(_to_consumable_array(args)));
                            }
                        });
                    }
                }
            },
            {
                key: "loop",
                value: function loop() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    if (this.interceptionKeySet.has("loop")) {
                        this.interceptions.forEach(function(i) {
                            var _a;
                            var _a1;
                            (_a1 = i.loop) == null ? void 0 : (_a = _a1).call.apply(_a, [
                                i
                            ].concat(_to_consumable_array(args)));
                        });
                    }
                }
            },
            {
                key: "error",
                value: function error(err) {
                    if (this.interceptionKeySet.has("error")) {
                        if (_instanceof(err, Error)) {
                            var asError = err;
                            this.interceptions.forEach(function(i) {
                                var _a;
                                (_a = i.error) == null ? void 0 : _a.call(i, asError);
                            });
                        }
                    }
                }
            },
            {
                key: "result",
                value: function result(r) {
                    if (this.interceptionKeySet.has("result")) {
                        this.interceptions.forEach(function(i) {
                            var _a;
                            (_a = i.result) == null ? void 0 : _a.call(i, r);
                        });
                    }
                }
            },
            {
                key: "done",
                value: function done() {
                    if (this.interceptionKeySet.has("done")) {
                        this.interceptions.forEach(function(i) {
                            var _a;
                            (_a = i.done) == null ? void 0 : _a.call(i);
                        });
                    }
                }
            }
        ]);
        return InterceptionManager;
    }();
    var Hook = /*#__PURE__*/ function() {
        function Hook() {
            _class_call_check(this, Hook);
            this.taps = [];
            this.interceptions = new InterceptionManager();
        }
        _create_class(Hook, [
            {
                key: "tap",
                value: function tap(options, callback) {
                    var resolvedOptions = typeof options === "string" ? {
                        name: options,
                        context: false
                    } : _object_spread({
                        context: false
                    }, options);
                    var key = Symbol(resolvedOptions.name);
                    var tap = _object_spread_props(_object_spread({
                        key: key
                    }, resolvedOptions), {
                        callback: callback
                    });
                    if (tap.before) {
                        var insertionIndex = this.taps.length;
                        var beforeSet = new Set(Array.isArray(tap.before) ? tap.before : [
                            tap.before
                        ]);
                        for(insertionIndex; insertionIndex > 0 && beforeSet.size > 0; insertionIndex--){
                            var t = this.taps[insertionIndex - 1];
                            if (beforeSet.has(t.name)) {
                                beforeSet.delete(t.name);
                            }
                            if (t.before && equalToOrIn(tap.name, t.before)) {
                                break;
                            }
                        }
                        this.taps.splice(insertionIndex, 0, tap);
                    } else {
                        this.taps.push(tap);
                    }
                    this.interceptions.tap(tap);
                    return tap;
                }
            },
            {
                key: "untap",
                value: function untap(tap) {
                    this.taps = this.taps.filter(function(t) {
                        return t.key !== tap.key;
                    });
                }
            },
            {
                key: "isUsed",
                value: function isUsed() {
                    return this.taps.length > 0 || this.interceptions.isUsed();
                }
            },
            {
                key: "intercept",
                value: function intercept(int) {
                    this.interceptions.intercept(int);
                }
            }
        ]);
        return Hook;
    }();
    var SyncBailHook = /*#__PURE__*/ function(Hook) {
        _inherits(SyncBailHook, Hook);
        var _super = _create_super(SyncBailHook);
        function SyncBailHook() {
            _class_call_check(this, SyncBailHook);
            return _super.apply(this, arguments);
        }
        _create_class(SyncBailHook, [
            {
                key: "call",
                value: function call() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    var _this_interceptions;
                    if (!this.isUsed()) {
                        return;
                    }
                    var ctx = {};
                    (_this_interceptions = this.interceptions).call.apply(_this_interceptions, [
                        ctx
                    ].concat(_to_consumable_array(args)));
                    for(var tapIndex = 0; tapIndex < this.taps.length; tapIndex += 1){
                        var rtn = callTap(this.taps[tapIndex], args, ctx);
                        if (rtn !== void 0) {
                            this.interceptions.result(rtn);
                            return rtn;
                        }
                    }
                    this.interceptions.done();
                }
            }
        ]);
        return SyncBailHook;
    }(Hook);
    var AsyncSeriesBailHook = /*#__PURE__*/ function(Hook) {
        _inherits(AsyncSeriesBailHook, Hook);
        var _super = _create_super(AsyncSeriesBailHook);
        function AsyncSeriesBailHook() {
            _class_call_check(this, AsyncSeriesBailHook);
            return _super.apply(this, arguments);
        }
        _create_class(AsyncSeriesBailHook, [
            {
                key: "call",
                value: function call() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var _this_interceptions, ctx, tapIndex, rtn, e;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    ctx = {};
                                    (_this_interceptions = _this.interceptions).call.apply(_this_interceptions, [
                                        ctx
                                    ].concat(_to_consumable_array(args)));
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        6,
                                        ,
                                        7
                                    ]);
                                    tapIndex = 0;
                                    _state.label = 2;
                                case 2:
                                    if (!(tapIndex < _this.taps.length)) return [
                                        3,
                                        5
                                    ];
                                    return [
                                        4,
                                        callTap(_this.taps[tapIndex], args, ctx)
                                    ];
                                case 3:
                                    rtn = _state.sent();
                                    if (rtn !== void 0) {
                                        _this.interceptions.result(rtn);
                                        return [
                                            2,
                                            rtn
                                        ];
                                    }
                                    _state.label = 4;
                                case 4:
                                    tapIndex += 1;
                                    return [
                                        3,
                                        2
                                    ];
                                case 5:
                                    return [
                                        3,
                                        7
                                    ];
                                case 6:
                                    e = _state.sent();
                                    _this.interceptions.error(e);
                                    throw e;
                                case 7:
                                    _this.interceptions.done();
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            }
        ]);
        return AsyncSeriesBailHook;
    }(Hook);
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/async-node/core/src/index.ts
    var import_queue_microtask = __toESM(require_queue_microtask());
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/async-node/core/src/transform.ts
    var import_player = __toESM(require_player());
    var asyncTransform = function(assetId, wrapperAssetType, asset, flatten) {
        var path = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [
            "values"
        ];
        var id = "async-" + assetId;
        var asyncNode = import_player.Builder.asyncNode(id, flatten);
        var multiNode;
        var assetNode;
        if (asset) {
            assetNode = import_player.Builder.assetWrapper(asset);
            multiNode = import_player.Builder.multiNode(assetNode, asyncNode);
        } else {
            multiNode = import_player.Builder.multiNode(asyncNode);
        }
        var wrapperAsset = import_player.Builder.asset({
            id: wrapperAssetType + "-" + id,
            type: wrapperAssetType
        });
        import_player.Builder.addChild(wrapperAsset, path, multiNode);
        return wrapperAsset;
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/async-node/core/src/createAsyncTransform.ts
    var import_player5 = __toESM(require_player());
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/async-node/core/src/utils/extractNodeFromPath.ts
    var getMatchValue = function(pathA, pathB) {
        if (pathA.length > pathB.length) {
            return 0;
        }
        var matchCount = 0;
        for(var i = 0; i < pathA.length; i++){
            if (pathA[i] === pathB[i]) {
                matchCount++;
            } else {
                return 0;
            }
        }
        return matchCount;
    };
    var extractNodeFromPath = function(node, path) {
        if (path === void 0 || path.length === 0) {
            return node;
        }
        if (!("children" in node && node.children)) {
            return void 0;
        }
        var matchResult = 0;
        var bestMatch;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = node.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var child = _step.value;
                var matchValue = getMatchValue(child.path, path);
                if (matchValue > matchResult) {
                    matchResult = matchValue;
                    bestMatch = child;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        if (!bestMatch) {
            return void 0;
        }
        if (matchResult >= path.length) {
            return bestMatch.value;
        }
        return extractNodeFromPath(bestMatch.value, path.slice(matchResult));
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/async-node/core/src/utils/traverseAndReplace.ts
    var import_player2 = __toESM(require_player());
    var traverseAndReplace = function(node, replaceFn) {
        if (node.type === import_player2.NodeType.MultiNode) {
            var index = 0;
            while(index < node.values.length){
                var child = node.values[index];
                if (!child) {
                    index++;
                    continue;
                }
                var result = replaceFn(child);
                if (result.type === import_player2.NodeType.MultiNode) {
                    node.values = _to_consumable_array(node.values.slice(0, index)).concat(_to_consumable_array(result.values), _to_consumable_array(node.values.slice(index + 1)));
                } else {
                    node.values[index] = result;
                    index++;
                }
            }
            return node;
        }
        return replaceFn(node);
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/async-node/core/src/utils/unwrapAsset.ts
    var import_player3 = __toESM(require_player());
    var unwrapAsset = function(node) {
        var _node_children;
        if (node.type !== import_player3.NodeType.Value) {
            return node;
        }
        var child = (_node_children = node.children) === null || _node_children === void 0 ? void 0 : _node_children.find(function(x) {
            return x.path.length === 1 && x.path[0] === "asset";
        });
        if (!child) {
            return node;
        }
        return child.value;
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/async-node/core/src/utils/requiresAssetWrapper.ts
    var import_player4 = __toESM(require_player());
    var requiresAssetWrapper = function(node) {
        if (node.type === import_player4.NodeType.Asset) {
            return true;
        }
        if (node.type !== import_player4.NodeType.Applicability) {
            return false;
        }
        return node.value.type === import_player4.NodeType.Asset;
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/async-node/core/src/createAsyncTransform.ts
    var defaultGetNodeId = function(node) {
        return "async-".concat(node.value.id);
    };
    var createAsyncTransform = function(options) {
        var transformAssetType = options.transformAssetType, wrapperAssetType = options.wrapperAssetType, getNestedAsset = options.getNestedAsset, _options_getAsyncNodeId = options.getAsyncNodeId, getAsyncNodeId = _options_getAsyncNodeId === void 0 ? defaultGetNodeId : _options_getAsyncNodeId, _options_path = options.path, path = _options_path === void 0 ? [
            "values"
        ] : _options_path, _options_flatten = options.flatten, flatten = _options_flatten === void 0 ? true : _options_flatten, _options_asyncNodePosition = options.asyncNodePosition, asyncNodePosition = _options_asyncNodePosition === void 0 ? "append" : _options_asyncNodePosition;
        var replaceNode = function(node) {
            var unwrapped = unwrapAsset(node);
            if (unwrapped.type !== import_player5.NodeType.Asset || unwrapped.value.type !== transformAssetType) {
                return node;
            }
            var transformed = asyncTransform2(unwrapped);
            var _extractNodeFromPath;
            return (_extractNodeFromPath = extractNodeFromPath(transformed, path)) !== null && _extractNodeFromPath !== void 0 ? _extractNodeFromPath : node;
        };
        var replacer = function(node) {
            return traverseAndReplace(node, replaceNode);
        };
        var asyncTransform2 = function(node) {
            var _import_player5_Builder;
            var id = getAsyncNodeId(node);
            var asset = getNestedAsset === null || getNestedAsset === void 0 ? void 0 : getNestedAsset(node);
            var replaceFunction = flatten ? replacer : void 0;
            var asyncNode = import_player5.Builder.asyncNode(id, flatten, replaceFunction);
            var values = [
                asyncNode
            ];
            if (asset) {
                var otherValues = [];
                if (requiresAssetWrapper(asset)) {
                    otherValues.push(import_player5.Builder.assetWrapper(asset));
                } else if (asset.type === import_player5.NodeType.MultiNode) {
                    var _otherValues;
                    (_otherValues = otherValues).push.apply(_otherValues, _to_consumable_array(asset.values));
                } else {
                    otherValues.push(asset);
                }
                if (asyncNodePosition === "append") {
                    var _values;
                    (_values = values).unshift.apply(_values, _to_consumable_array(otherValues));
                } else {
                    var _values1;
                    (_values1 = values).push.apply(_values1, _to_consumable_array(otherValues));
                }
            }
            var multiNode = (_import_player5_Builder = import_player5.Builder).multiNode.apply(_import_player5_Builder, _to_consumable_array(values));
            var wrapperAsset = import_player5.Builder.asset({
                id: wrapperAssetType + "-" + id,
                type: wrapperAssetType
            });
            import_player5.Builder.addChild(wrapperAsset, path, multiNode);
            return wrapperAsset;
        };
        return asyncTransform2;
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/async-node/core/src/index.ts
    var AsyncNodePluginSymbol = Symbol.for("AsyncNodePlugin");
    var _AsyncNodePlugin = /*#__PURE__*/ function() {
        function _AsyncNodePlugin(options, asyncHandler) {
            var _this = this;
            _class_call_check(this, _AsyncNodePlugin);
            this.symbol = _AsyncNodePlugin.Symbol;
            this.hooks = {
                onAsyncNode: new AsyncSeriesBailHook(),
                onAsyncNodeError: new SyncBailHook()
            };
            this.name = "AsyncNode";
            if (options === null || options === void 0 ? void 0 : options.plugins) {
                this.plugins = options.plugins;
                options.plugins.forEach(function(plugin) {
                    plugin.applyPlugin(_this);
                });
            }
            if (asyncHandler) {
                this.hooks.onAsyncNode.tap("async", function() {
                    var _ref = _async_to_generator(function(node, callback) {
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    return [
                                        4,
                                        asyncHandler(node, callback)
                                    ];
                                case 1:
                                    return [
                                        2,
                                        _state.sent()
                                    ];
                            }
                        });
                    });
                    return function(node, callback) {
                        return _ref.apply(this, arguments);
                    };
                }());
            }
        }
        _create_class(_AsyncNodePlugin, [
            {
                key: "getPlayerInstance",
                value: function getPlayerInstance() {
                    return this.playerInstance;
                }
            },
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    var _this_plugins;
                    this.playerInstance = player;
                    (_this_plugins = this.plugins) === null || _this_plugins === void 0 ? void 0 : _this_plugins.forEach(function(plugin) {
                        var _plugin_applyPlayer;
                        (_plugin_applyPlayer = plugin.applyPlayer) === null || _plugin_applyPlayer === void 0 ? void 0 : _plugin_applyPlayer.call(plugin, player);
                    });
                    player.hooks.viewController.tap(this.name, function(viewController) {
                        viewController.hooks.view.tap(_this.name, function(view) {
                            var _this_plugins;
                            (_this_plugins = _this.plugins) === null || _this_plugins === void 0 ? void 0 : _this_plugins.forEach(function(plugin) {
                                plugin.apply(view);
                            });
                        });
                    });
                }
            }
        ]);
        return _AsyncNodePlugin;
    }();
    _AsyncNodePlugin.Symbol = AsyncNodePluginSymbol;
    var AsyncNodePlugin = _AsyncNodePlugin;
    var AsyncNodePluginPlugin = /*#__PURE__*/ function() {
        function AsyncNodePluginPlugin() {
            _class_call_check(this, AsyncNodePluginPlugin);
            this.name = "AsyncNode";
        }
        _create_class(AsyncNodePluginPlugin, [
            {
                /**
     * Parses the node from the result and triggers an asynchronous view update if necessary.
     * @param node The asynchronous node that might be updated.
     * @param result The result obtained from resolving the async node. This could be any data structure or value.
     * @param options Options provided for node resolution, including a potential parseNode function to process the result.
     * @param view The view instance where the node resides. This can be undefined if the view is not currently active.
     */ key: "parseNodeAndUpdate",
                value: function parseNodeAndUpdate(node, context, result, options) {
                    var parsedNode = options.parseNode && result ? options.parseNode(result) : void 0;
                    if (parsedNode && node.onValueReceived) {
                        parsedNode = node.onValueReceived(parsedNode);
                    }
                    this.handleAsyncUpdate(node, context, parsedNode);
                }
            },
            {
                /**
     * Updates the node asynchronously based on the result provided.
     * This method is responsible for handling the update logic of asynchronous nodes.
     * It checks if the node needs to be updated based on the new result and updates the mapping accordingly.
     * If an update is necessary, it triggers an asynchronous update on the view.
     * @param node The asynchronous node that might be updated.
     * @param newNode The new node to replace the async node.
     * @param view The view instance where the node resides. This can be undefined if the view is not currently active.
     */ key: "handleAsyncUpdate",
                value: function handleAsyncUpdate(node, context, newNode) {
                    var nodeResolveCache = context.nodeResolveCache, viewController = context.viewController, originalNodeCache = context.originalNodeCache;
                    if (nodeResolveCache.get(node.id) !== newNode) {
                        nodeResolveCache.set(node.id, newNode ? newNode : node);
                        var _originalNodeCache_get;
                        var originalNode = (_originalNodeCache_get = originalNodeCache.get(node.id)) !== null && _originalNodeCache_get !== void 0 ? _originalNodeCache_get : /* @__PURE__ */ new Set([
                            node
                        ]);
                        viewController.updateViewAST(originalNode);
                    }
                }
            },
            {
                key: "hasValidMapping",
                value: function hasValidMapping(node, context) {
                    var nodeResolveCache = context.nodeResolveCache;
                    return nodeResolveCache.has(node.id) && nodeResolveCache.get(node.id) !== node;
                }
            },
            {
                /**
     * Handles the asynchronous API integration for resolving nodes.
     * This method sets up a hook on the resolver's `beforeResolve` event to process async nodes.
     * @param resolver The resolver instance to attach the hook to.
     * @param view
     */ key: "applyResolver",
                value: function applyResolver(resolver, context) {
                    var _this = this;
                    resolver.hooks.beforeResolve.tap(this.name, function(node, options) {
                        if (!_this.isAsync(node)) {
                            return node === null ? node : _this.resolveAsyncChildren(node, context);
                        }
                        if (options.node) {
                            context.originalNodeCache.set(node.id, /* @__PURE__ */ new Set([
                                options.node
                            ]));
                        }
                        var resolvedNode = context.nodeResolveCache.get(node.id);
                        if (resolvedNode !== void 0) {
                            return _this.resolveAsyncChildren(resolvedNode, context);
                        }
                        if (context.inProgressNodes.has(node.id)) {
                            return node;
                        }
                        context.inProgressNodes.add(node.id);
                        (0, import_queue_microtask.default)(function() {
                            _this.runAsyncNode(node, context, options).finally();
                        });
                        return node;
                    });
                }
            },
            {
                /**
     * Replaces child async nodes with their resolved content and flattens when necessary. Resolving the children directly helps manage the `parent` reference without needing as much work within the resolver itself.
     * Handles async node chains as well to make sure all applicable nodes can get flattened.
     * @param node - The node whose children need to be resolved.
     * @param context - the async plugin context needed to reach into the cache
     * @returns The same node but with async node children mapped to their resolved AST.
     */ key: "resolveAsyncChildren",
                value: function resolveAsyncChildren(node, context) {
                    var _this = this;
                    if (node.type === import_player6.NodeType.MultiNode) {
                        var _this1, _loop = function() {
                            var childNode = node.values[index];
                            if ((childNode === null || childNode === void 0 ? void 0 : childNode.type) !== import_player6.NodeType.Async || !_this1.hasValidMapping(childNode, context)) {
                                index++;
                                return "continue";
                            }
                            var mappedNode = context.nodeResolveCache.get(childNode.id);
                            var nodeSet = /* @__PURE__ */ new Set();
                            if (mappedNode.type === import_player6.NodeType.MultiNode && childNode.flatten) {
                                mappedNode.values.forEach(function(v) {
                                    v.parent = node;
                                    nodeSet.add(v);
                                });
                                node.values = _to_consumable_array(node.values.slice(0, index)).concat(_to_consumable_array(mappedNode.values), _to_consumable_array(node.values.slice(index + 1)));
                            } else {
                                node.values[index] = mappedNode;
                                mappedNode.parent = node;
                                nodeSet.add(mappedNode);
                            }
                            context.originalNodeCache.set(childNode.id, nodeSet);
                        };
                        var index = 0;
                        while(index < node.values.length)_this1 = this, _loop();
                    } else if ("children" in node) {
                        var _node_children;
                        (_node_children = node.children) === null || _node_children === void 0 ? void 0 : _node_children.forEach(function(c) {
                            while(c.value.type === import_player6.NodeType.Async && _this.hasValidMapping(c.value, context)){
                                var mappedNode = context.nodeResolveCache.get(c.value.id);
                                context.originalNodeCache.set(c.value.id, /* @__PURE__ */ new Set([
                                    mappedNode
                                ]));
                                c.value = mappedNode;
                                c.value.parent = node;
                            }
                        });
                    }
                    return node;
                }
            },
            {
                key: "runAsyncNode",
                value: function runAsyncNode(node, context, options) {
                    var _this = this;
                    return _async_to_generator(function() {
                        var _this_basePlugin, result, e, _this_basePlugin1, _options_logger, error, result1, _this_basePlugin_getPlayerInstance, _this_basePlugin2, playerState;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _state.trys.push([
                                        0,
                                        2,
                                        ,
                                        3
                                    ]);
                                    return [
                                        4,
                                        (_this_basePlugin = _this.basePlugin) === null || _this_basePlugin === void 0 ? void 0 : _this_basePlugin.hooks.onAsyncNode.call(node, function(result2) {
                                            _this.parseNodeAndUpdate(node, context, result2, options);
                                        })
                                    ];
                                case 1:
                                    result = _state.sent();
                                    context.inProgressNodes.delete(node.id);
                                    _this.parseNodeAndUpdate(node, context, result, options);
                                    return [
                                        3,
                                        3
                                    ];
                                case 2:
                                    e = _state.sent();
                                    error = _instanceof(e, Error) ? e : new Error(String(e));
                                    result1 = (_this_basePlugin1 = _this.basePlugin) === null || _this_basePlugin1 === void 0 ? void 0 : _this_basePlugin1.hooks.onAsyncNodeError.call(error, node);
                                    if (result1 === void 0) {
                                        ;
                                        playerState = (_this_basePlugin2 = _this.basePlugin) === null || _this_basePlugin2 === void 0 ? void 0 : (_this_basePlugin_getPlayerInstance = _this_basePlugin2.getPlayerInstance()) === null || _this_basePlugin_getPlayerInstance === void 0 ? void 0 : _this_basePlugin_getPlayerInstance.getState();
                                        if ((playerState === null || playerState === void 0 ? void 0 : playerState.status) === "in-progress") {
                                            playerState.fail(error);
                                        }
                                        return [
                                            2
                                        ];
                                    }
                                    (_options_logger = options.logger) === null || _options_logger === void 0 ? void 0 : _options_logger.error("Async node handling failed and resolved with a fallback. Error:", error);
                                    context.inProgressNodes.delete(node.id);
                                    _this.parseNodeAndUpdate(node, context, result1, options);
                                    return [
                                        3,
                                        3
                                    ];
                                case 3:
                                    return [
                                        2
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "isAsync",
                value: function isAsync(node) {
                    return (node === null || node === void 0 ? void 0 : node.type) === import_player6.NodeType.Async;
                }
            },
            {
                key: "isDeterminedAsync",
                value: function isDeterminedAsync(obj) {
                    return typeof obj === "object" && obj !== null && Object.prototype.hasOwnProperty.call(obj, "async");
                }
            },
            {
                key: "applyParser",
                value: function applyParser(parser) {
                    var _this = this;
                    parser.hooks.parseNode.tap(this.name, function(obj, nodeType, options, childOptions) {
                        if (_this.isDeterminedAsync(obj)) {
                            var async = obj.async, flatten = obj.flatten, rest = _object_without_properties(obj, [
                                "async",
                                "flatten"
                            ]);
                            var parsedAsync = parser.parseObject(rest, nodeType, options);
                            var parsedNodeId = (0, import_player6.getNodeID)(parsedAsync);
                            if (parsedAsync === null || !parsedNodeId) {
                                return childOptions ? [] : null;
                            }
                            var asyncAST = parser.createASTNode({
                                id: parsedNodeId,
                                type: import_player6.NodeType.Async,
                                value: parsedAsync,
                                flatten: flatten
                            }, obj);
                            if (childOptions) {
                                return asyncAST ? [
                                    {
                                        path: _to_consumable_array(childOptions.path).concat([
                                            childOptions.key
                                        ]),
                                        value: asyncAST
                                    }
                                ] : [];
                            }
                            return asyncAST;
                        }
                    });
                }
            },
            {
                key: "apply",
                value: function apply(view) {
                    view.hooks.parser.tap("async", this.applyParser.bind(this));
                }
            },
            {
                key: "applyPlayer",
                value: function applyPlayer(player) {
                    var _this = this;
                    player.hooks.viewController.tap("async", function(viewController) {
                        viewController.hooks.view.tap("async", function(view) {
                            var context = {
                                nodeResolveCache: /* @__PURE__ */ new Map(),
                                inProgressNodes: /* @__PURE__ */ new Set(),
                                view: view,
                                viewController: viewController,
                                originalNodeCache: /* @__PURE__ */ new Map()
                            };
                            view.hooks.resolver.tap("async", function(resolver) {
                                _this.applyResolver(resolver, context);
                            });
                        });
                    });
                }
            },
            {
                key: "applyPlugin",
                value: function applyPlugin(asyncNodePlugin) {
                    this.basePlugin = asyncNodePlugin;
                }
            }
        ]);
        return AsyncNodePluginPlugin;
    }();
    return __toCommonJS(src_exports);
}(); /*! Bundled license information:

queue-microtask/index.js:
  (*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/ 
//# sourceMappingURL=index.global.js.map