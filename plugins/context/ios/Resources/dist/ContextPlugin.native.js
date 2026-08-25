"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    "@swc/helpers - instanceof";
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_array(arr) {
    return _array_with_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_rest();
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
}
var ContextPlugin = function() {
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
    var getContextPlugin = // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/context/core/src/utils.ts
    function getContextPlugin(player) {
        var existing = player.findPlugin(ContextPluginSymbol);
        var plugin = existing !== null && existing !== void 0 ? existing : new ContextPlugin();
        if (!existing) {
            player.registerPlugin(plugin);
        }
        return plugin;
    };
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
    var __export = function __export(target, all) {
        for(var name in all)__defProp(target, name, {
            get: all[name],
            enumerable: true
        });
    };
    var __copyProps = function __copyProps(to, from, except, desc) {
        if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                var _loop = function() {
                    var key = _step.value;
                    if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                        get: function get() {
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
    var __toCommonJS = function __toCommonJS(mod) {
        return __copyProps(__defProp({}, "__esModule", {
            value: true
        }), mod);
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/context/core/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        ContextPlugin: function ContextPlugin1() {
            return ContextPlugin;
        },
        ContextPluginSymbol: function ContextPluginSymbol1() {
            return ContextPluginSymbol;
        },
        StateContextPlugin: function StateContextPlugin1() {
            return StateContextPlugin;
        },
        dataContextKey: function dataContextKey1() {
            return dataContextKey;
        },
        defineContextKey: function defineContextKey1() {
            return defineContextKey;
        },
        flowIdContextKey: function flowIdContextKey1() {
            return flowIdContextKey;
        },
        flowStateContextKey: function flowStateContextKey1() {
            return flowStateContextKey;
        },
        getContextPlugin: function getContextPlugin1() {
            return getContextPlugin;
        },
        nameOfContextKey: function nameOfContextKey1() {
            return nameOfContextKey;
        },
        playerStateContextKey: function playerStateContextKey1() {
            return playerStateContextKey;
        },
        playerStatusContextKey: function playerStatusContextKey1() {
            return playerStatusContextKey;
        },
        resolveContextKeySymbol: function resolveContextKeySymbol1() {
            return resolveContextKeySymbol;
        },
        setDataActionKey: function setDataActionKey1() {
            return setDataActionKey;
        },
        transitionActionKey: function transitionActionKey1() {
            return transitionActionKey;
        },
        validationContextKey: function validationContextKey1() {
            return validationContextKey;
        },
        viewContextKey: function viewContextKey1() {
            return viewContextKey;
        },
        viewIdContextKey: function viewIdContextKey1() {
            return viewIdContextKey;
        }
    });
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
    var SyncHook = /*#__PURE__*/ function(Hook) {
        _inherits(SyncHook, Hook);
        function SyncHook() {
            _class_call_check(this, SyncHook);
            return _call_super(this, SyncHook, arguments);
        }
        _create_class(SyncHook, [
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
                    try {
                        this.taps.forEach(function(t) {
                            callTap(t, args, ctx);
                        });
                    } catch (err) {
                        this.interceptions.error(err);
                        throw err;
                    }
                    this.interceptions.done();
                }
            }
        ]);
        return SyncHook;
    }(Hook);
    var SyncWaterfallHook = /*#__PURE__*/ function(Hook) {
        _inherits(SyncWaterfallHook, Hook);
        function SyncWaterfallHook() {
            _class_call_check(this, SyncWaterfallHook);
            return _call_super(this, SyncWaterfallHook, arguments);
        }
        _create_class(SyncWaterfallHook, [
            {
                key: "call",
                value: function call() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    var _this_interceptions;
                    var ctx = {};
                    (_this_interceptions = this.interceptions).call.apply(_this_interceptions, [
                        ctx
                    ].concat(_to_consumable_array(args)));
                    var _args = _to_array(args), rtn = _args[0], rest = _args.slice(1);
                    for(var tapIndex = 0; tapIndex < this.taps.length; tapIndex += 1){
                        var tapValue = callTap(this.taps[tapIndex], [
                            rtn
                        ].concat(_to_consumable_array(rest)), ctx);
                        if (tapValue !== void 0) {
                            rtn = tapValue;
                        }
                    }
                    this.interceptions.result(rtn);
                    return rtn;
                }
            }
        ]);
        return SyncWaterfallHook;
    }(Hook);
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/context/core/src/key.ts
    var KEY_NAMESPACE = "player-ui.context.";
    var defineContextKey = function defineContextKey(name, description) {
        return {
            symbol: Symbol.for("".concat(KEY_NAMESPACE).concat(name)),
            description: description
        };
    };
    var resolveContextKeySymbol = function resolveContextKeySymbol(name) {
        return Symbol.for("".concat(KEY_NAMESPACE).concat(name));
    };
    var nameOfContextKey = function nameOfContextKey(key) {
        var k = Symbol.keyFor(key.symbol);
        if (!k || !k.startsWith(KEY_NAMESPACE)) return void 0;
        return k.slice(KEY_NAMESPACE.length);
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/context/core/src/store.ts
    var deepFreezeEntry = function deepFreezeEntry(entry) {
        Object.freeze(entry);
        return entry;
    };
    var tombstone = function tombstone(description) {
        return function() {
            throw new Error('[ContextPlugin] Action "'.concat(description, '" is no longer valid — its flow has ended'));
        };
    };
    var tombstoneFunctions = function tombstoneFunctions1(value, description) {
        if (typeof value === "function") {
            return tombstone(description);
        }
        if (Array.isArray(value)) {
            return value.map(function(item) {
                return tombstoneFunctions(item, description);
            });
        }
        if (value !== null && (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object") {
            var out = {};
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = Object.entries(value)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _step_value = _sliced_to_array(_step.value, 2), k = _step_value[0], v = _step_value[1];
                    out[k] = tombstoneFunctions(v, description);
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
            return out;
        }
        return value;
    };
    var ContextStore = /*#__PURE__*/ function() {
        function ContextStore() {
            _class_call_check(this, ContextStore);
            this.entries = /* @__PURE__ */ new Map();
            /** source symbol -> set of target symbols (reverse index for invalidation). */ this.dependents = /* @__PURE__ */ new Map();
        }
        _create_class(ContextStore, [
            {
                key: "register",
                value: function register(key) {
                    if (this.entries.has(key.symbol)) {
                        return false;
                    }
                    this.entries.set(key.symbol, {
                        key: key,
                        hasLiteral: false
                    });
                    return true;
                }
            },
            {
                key: "set",
                value: function set(key, value) {
                    var existing = this.entries.get(key.symbol);
                    if (existing) {
                        existing.hasLiteral = true;
                        existing.literal = value;
                        existing.key = key;
                    } else {
                        this.entries.set(key.symbol, {
                            key: key,
                            hasLiteral: true,
                            literal: value
                        });
                    }
                }
            },
            {
                key: "registerTransform",
                value: function registerTransform(key, transform) {
                    var _existing_transform;
                    var existing = this.entries.get(key.symbol);
                    var previousSources = existing === null || existing === void 0 ? void 0 : (_existing_transform = existing.transform) === null || _existing_transform === void 0 ? void 0 : _existing_transform.sources;
                    if (previousSources) {
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = previousSources[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var src = _step.value;
                                var _this_dependents_get;
                                (_this_dependents_get = this.dependents.get(src.symbol)) === null || _this_dependents_get === void 0 ? void 0 : _this_dependents_get.delete(key.symbol);
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
                    }
                    var stored = {
                        sources: transform.sources,
                        compute: transform.compute
                    };
                    if (existing) {
                        existing.transform = stored;
                        existing.key = key;
                    } else {
                        this.entries.set(key.symbol, {
                            key: key,
                            hasLiteral: false,
                            transform: stored
                        });
                    }
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = transform.sources[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var src1 = _step1.value;
                            var set = this.dependents.get(src1.symbol);
                            if (!set) {
                                set = /* @__PURE__ */ new Set();
                                this.dependents.set(src1.symbol, set);
                            }
                            set.add(key.symbol);
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                    return {
                        previousSources: previousSources
                    };
                }
            },
            {
                key: "get",
                value: function get(key) {
                    return this.compute(key.symbol);
                }
            },
            {
                key: "has",
                value: function has(key) {
                    var entry = this.entries.get(key.symbol);
                    return Boolean(entry && (entry.hasLiteral || entry.transform));
                }
            },
            {
                /** Return the keys that depend on the given source key (direct dependents only). */ key: "dependentsOf",
                value: function dependentsOf(sourceSymbol) {
                    var set = this.dependents.get(sourceSymbol);
                    if (!set || set.size === 0) {
                        return [];
                    }
                    var out = [];
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = set[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var targetSymbol = _step.value;
                            var target = this.entries.get(targetSymbol);
                            if (target) {
                                out.push(target.key);
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
                    return out;
                }
            },
            {
                /**
     * Return every key transitively downstream of [sourceSymbol] — direct
     * dependents, their dependents, and so on. Ordered breadth-first so nearer
     * dependents come first, deduped so a key reachable by several paths (a
     * diamond) appears once, and cycle-safe.
     *
     * The source itself is never included — `set()` notifies it directly, so
     * re-emitting it here would double-notify subscribers on a cyclic graph.
     */ key: "transitiveDependentsOf",
                value: function transitiveDependentsOf(sourceSymbol) {
                    var visited = /* @__PURE__ */ new Set([
                        sourceSymbol
                    ]);
                    var out = [];
                    var queue = [
                        sourceSymbol
                    ];
                    while(queue.length > 0){
                        var current = queue.shift();
                        var set = this.dependents.get(current);
                        if (!set) continue;
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = set[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var targetSymbol = _step.value;
                                if (visited.has(targetSymbol)) continue;
                                visited.add(targetSymbol);
                                var target = this.entries.get(targetSymbol);
                                if (target) {
                                    out.push(target.key);
                                }
                                queue.push(targetSymbol);
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
                    }
                    return out;
                }
            },
            {
                key: "list",
                value: function list() {
                    var out = [];
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.entries.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var entry = _step.value;
                            out.push({
                                symbol: entry.key.symbol,
                                description: entry.key.description,
                                hasValue: entry.hasLiteral,
                                hasTransform: Boolean(entry.transform)
                            });
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
                    return out;
                }
            },
            {
                key: "freeze",
                value: function freeze(meta) {
                    var frozenEntries = [];
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.entries.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var entry = _step.value;
                            if (!entry.hasLiteral && !entry.transform) {
                                continue;
                            }
                            var computed = this.compute(entry.key.symbol);
                            var value = tombstoneFunctions(computed, entry.key.description);
                            frozenEntries.push(deepFreezeEntry({
                                symbol: entry.key.symbol,
                                name: nameOfContextKey(entry.key),
                                description: entry.key.description,
                                value: value
                            }));
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
                    var bySymbol = new Map(frozenEntries.map(function(e) {
                        return [
                            e.symbol,
                            e.value
                        ];
                    }));
                    var snapshot = {
                        flowId: meta.flowId,
                        endedAt: meta.endedAt,
                        entries: Object.freeze(frozenEntries),
                        get: function get(key) {
                            return bySymbol.get(key.symbol);
                        }
                    };
                    return Object.freeze(snapshot);
                }
            },
            {
                key: "compute",
                value: function compute(sym) {
                    var _this = this;
                    var entry = this.entries.get(sym);
                    if (!entry) return void 0;
                    if (entry.hasLiteral) return entry.literal;
                    if (!entry.transform) return void 0;
                    var reader = function reader(otherKey) {
                        return _this.compute(otherKey.symbol);
                    };
                    return entry.transform.compute(reader);
                }
            }
        ]);
        return ContextStore;
    }();
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/context/core/src/history.ts
    var ContextHistory = /*#__PURE__*/ function() {
        function ContextHistory() {
            _class_call_check(this, ContextHistory);
            this.stack = [];
        }
        _create_class(ContextHistory, [
            {
                key: "push",
                value: function push(snapshot) {
                    this.stack.push(snapshot);
                }
            },
            {
                key: "entries",
                value: function entries() {
                    return this.stack;
                }
            },
            {
                key: "size",
                value: function size() {
                    return this.stack.length;
                }
            },
            {
                key: "clear",
                value: function clear() {
                    this.stack = [];
                }
            }
        ]);
        return ContextHistory;
    }();
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/context/core/src/symbols.ts
    var ContextPluginSymbol = Symbol.for("ContextPlugin");
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/context/core/src/plugin.ts
    var subscriptionCounter = 0;
    var _ContextPlugin = /*#__PURE__*/ function() {
        function _ContextPlugin() {
            _class_call_check(this, _ContextPlugin);
            this.name = "context";
            this.symbol = _ContextPlugin.Symbol;
            this.hooks = {
                onSet: new SyncHook(),
                resolveValue: new SyncWaterfallHook(),
                onRegister: new SyncHook(),
                onFlowFrozen: new SyncHook()
            };
            this.transforms = /* @__PURE__ */ new Map();
            this.perKeySubs = /* @__PURE__ */ new Map();
            this.globalSubs = /* @__PURE__ */ new Map();
            this.tokenIndex = /* @__PURE__ */ new Map();
            /** Last value notify() fired with, per key — dedupes redundant publishes. */ this.lastNotified = /* @__PURE__ */ new Map();
            this.store = new ContextStore();
            this.historyStack = new ContextHistory();
        }
        _create_class(_ContextPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    var existing = player.findPlugin(ContextPluginSymbol);
                    if (existing !== void 0 && existing !== this) {
                        this.store = existing.store;
                        this.historyStack = existing.historyStack;
                        this.transforms = existing.transforms;
                        this.perKeySubs = existing.perKeySubs;
                        this.globalSubs = existing.globalSubs;
                        this.tokenIndex = existing.tokenIndex;
                        this.lastNotified = existing.lastNotified;
                        return;
                    }
                    player.hooks.onStart.tap(this.name, function(flow) {
                        _this.currentFlowId = flow === null || flow === void 0 ? void 0 : flow.id;
                    });
                    player.hooks.onEnd.tap(this.name, function() {
                        var snapshot = _this.store.freeze({
                            flowId: _this.currentFlowId,
                            endedAt: Date.now()
                        });
                        _this.historyStack.push(snapshot);
                        _this.hooks.onFlowFrozen.call(snapshot);
                        _this.rotateStore();
                        _this.currentFlowId = void 0;
                    });
                }
            },
            {
                key: "register",
                value: function register(key) {
                    var added = this.store.register(key);
                    if (added) {
                        this.hooks.onRegister.call(key);
                    }
                }
            },
            {
                key: "set",
                value: function set(key, value) {
                    var isFirstSighting = !this.store.has(key);
                    this.store.set(key, value);
                    if (isFirstSighting) {
                        this.hooks.onRegister.call(key);
                    }
                    this.notifyIfChanged(key, value);
                }
            },
            {
                key: "get",
                value: function get(key) {
                    var raw = this.store.get(key);
                    var resolved = this.hooks.resolveValue.call(raw, key);
                    return resolved;
                }
            },
            {
                key: "has",
                value: function has(key) {
                    return this.store.has(key);
                }
            },
            {
                key: "registerTransform",
                value: function registerTransform(key, transform) {
                    var isFirstSighting = !this.store.has(key);
                    this.store.registerTransform(key, transform);
                    this.transforms.set(key.symbol, {
                        key: key,
                        transform: {
                            sources: transform.sources,
                            compute: transform.compute
                        }
                    });
                    if (isFirstSighting) {
                        this.hooks.onRegister.call(key);
                    }
                }
            },
            {
                key: "subscribe",
                value: function subscribe(key, handler) {
                    var token = this.nextToken();
                    var bucket = this.perKeySubs.get(key.symbol);
                    if (!bucket) {
                        bucket = /* @__PURE__ */ new Map();
                        this.perKeySubs.set(key.symbol, bucket);
                    }
                    bucket.set(token, handler);
                    this.tokenIndex.set(token, key.symbol);
                    return token;
                }
            },
            {
                key: "subscribeAll",
                value: function subscribeAll(handler) {
                    var token = this.nextToken();
                    this.globalSubs.set(token, handler);
                    this.tokenIndex.set(token, void 0);
                    return token;
                }
            },
            {
                key: "unsubscribe",
                value: function unsubscribe(token) {
                    var owner = this.tokenIndex.get(token);
                    if (owner === void 0) {
                        this.globalSubs.delete(token);
                    } else {
                        var _this_perKeySubs_get;
                        (_this_perKeySubs_get = this.perKeySubs.get(owner)) === null || _this_perKeySubs_get === void 0 ? void 0 : _this_perKeySubs_get.delete(token);
                    }
                    this.tokenIndex.delete(token);
                }
            },
            {
                key: "list",
                value: function list() {
                    return this.store.list();
                }
            },
            {
                key: "history",
                value: function history() {
                    return this.historyStack.entries();
                }
            },
            {
                key: "snapshot",
                value: function snapshot() {
                    return this.store.freeze({
                        flowId: this.currentFlowId,
                        endedAt: Date.now()
                    });
                }
            },
            {
                /**
     * Bridge-friendly: set a value by string name. Used by native wrappers that
     * cannot construct a `ContextKey` object directly.
     */ key: "setByName",
                value: function setByName(name, description, value) {
                    this.set(this.ensureNamedKey(name, description), value);
                }
            },
            {
                /** Bridge-friendly: get a value by string name. */ key: "getByName",
                value: function getByName(name) {
                    return this.get(this.ensureNamedKey(name));
                }
            },
            {
                /** Bridge-friendly: check presence by string name. */ key: "hasByName",
                value: function hasByName(name) {
                    return this.has(this.ensureNamedKey(name));
                }
            },
            {
                /** Bridge-friendly: subscribe by string name. */ key: "subscribeByName",
                value: function subscribeByName(name, description, handler) {
                    return this.subscribe(this.ensureNamedKey(name, description), function(value) {
                        return handler(value, name);
                    });
                }
            },
            {
                /**
     * Bridge-friendly: subscribe to all updates. The handler receives the
     * key's resolved name (or undefined for non-namespaced keys).
     */ key: "subscribeAllByName",
                value: function subscribeAllByName(handler) {
                    return this.subscribeAll(function(value, key) {
                        return handler(value, nameOfContextKey(key), key.description);
                    });
                }
            },
            {
                key: "ensureNamedKey",
                value: function ensureNamedKey(name, description) {
                    return defineContextKey(name, description !== null && description !== void 0 ? description : name);
                }
            },
            {
                /**
     * Notify subscribers of `key` with `value`, unless it's `Object.is`-equal
     * to the value the last notification for this key carried. Then cascade to
     * every transitive dependent (a chained transform root -> mid -> top must
     * notify `top` when `root` changes, not just the directly-dependent `mid`),
     * applying the same unchanged-value guard to each. `transitiveDependentsOf`
     * already flattens the full downstream closure in one deduped, cycle-safe
     * pass, so this walks it directly rather than recursing back through this
     * method (which would re-walk the graph from each dependent and, on a
     * diamond, notify a shared descendant more than once).
     */ key: "notifyIfChanged",
                value: function notifyIfChanged(key, value) {
                    this.publishIfChanged(key, value);
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.store.transitiveDependentsOf(key.symbol)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var dep = _step.value;
                            this.publishIfChanged(dep, this.store.get(dep));
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
                }
            },
            {
                key: "publishIfChanged",
                value: function publishIfChanged(key, value) {
                    var hasNotified = this.lastNotified.has(key.symbol);
                    var unchanged = hasNotified && Object.is(this.lastNotified.get(key.symbol), value);
                    this.lastNotified.set(key.symbol, value);
                    if (!unchanged) {
                        this.notify(key, value);
                    }
                }
            },
            {
                key: "notify",
                value: function notify(key, value) {
                    this.hooks.onSet.call(key, value);
                    var bucket = this.perKeySubs.get(key.symbol);
                    if (bucket) {
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = bucket.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var handler = _step.value;
                                handler(value, key);
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
                    }
                    var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                    try {
                        for(var _iterator1 = this.globalSubs.values()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                            var handler1 = _step1.value;
                            handler1(value, key);
                        }
                    } catch (err) {
                        _didIteratorError1 = true;
                        _iteratorError1 = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                _iterator1.return();
                            }
                        } finally{
                            if (_didIteratorError1) {
                                throw _iteratorError1;
                            }
                        }
                    }
                }
            },
            {
                key: "rotateStore",
                value: function rotateStore() {
                    this.store = new ContextStore();
                    this.lastNotified.clear();
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.transforms.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var _step_value = _step.value, key = _step_value.key, transform = _step_value.transform;
                            this.store.registerTransform(key, transform);
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
                }
            },
            {
                key: "nextToken",
                value: function nextToken() {
                    subscriptionCounter += 1;
                    return "ctx_".concat(subscriptionCounter);
                }
            }
        ]);
        return _ContextPlugin;
    }();
    _ContextPlugin.Symbol = ContextPluginSymbol;
    var ContextPlugin = _ContextPlugin;
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/context/core/src/state-plugin.ts
    var flowIdContextKey = defineContextKey("player.flow.id", "Identifier of the running flow");
    var flowStateContextKey = defineContextKey("player.flow.state", "Name of the current FSM state in the running flow");
    var viewIdContextKey = defineContextKey("player.view.id", "Identifier of the currently-resolved view");
    var viewContextKey = defineContextKey("player.view", "Full resolved view object for the current FSM state");
    var dataContextKey = defineContextKey("player.data", "Full data model tree for the running flow");
    var playerStatusContextKey = defineContextKey("player.status", "Player flow status: not-started, in-progress, completed, or error");
    var validationContextKey = defineContextKey("player.validation", "Validation state for the running view, keyed by binding");
    var setDataActionKey = defineContextKey("player.data.set", "Set a value in the Player data model at the given binding");
    var transitionActionKey = defineContextKey("player.flow.transition", "Transition the current flow using the given transition value");
    var playerStateContextKey = defineContextKey("player.state", "Aggregated snapshot of every Player runtime context entry");
    var StateContextPlugin = /*#__PURE__*/ function() {
        function StateContextPlugin() {
            _class_call_check(this, StateContextPlugin);
            this.name = "state-context";
        }
        _create_class(StateContextPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    var ctx = getContextPlugin(player);
                    var validationController;
                    var publishValidation = function publishValidation() {
                        if (!validationController) return;
                        var byBinding = {};
                        var canTransition = true;
                        validationController.getBindings().forEach(function(binding) {
                            var _ref;
                            var _validationController_getValidationForBinding;
                            var all = (_ref = (_validationController_getValidationForBinding = validationController.getValidationForBinding(binding)) === null || _validationController_getValidationForBinding === void 0 ? void 0 : _validationController_getValidationForBinding.getAll()) !== null && _ref !== void 0 ? _ref : [];
                            if (all.length === 0) return;
                            byBinding[binding.asString()] = all.map(function(v) {
                                return {
                                    severity: v.severity,
                                    message: v.message,
                                    displayTarget: v.displayTarget,
                                    blocking: v.blocking
                                };
                            });
                            if (all.some(function(v) {
                                return v.blocking;
                            })) {
                                canTransition = false;
                            }
                        });
                        ctx.set(validationContextKey, {
                            canTransition: canTransition,
                            byBinding: byBinding
                        });
                    };
                    ctx.register(flowIdContextKey);
                    ctx.register(flowStateContextKey);
                    ctx.register(viewIdContextKey);
                    ctx.register(viewContextKey);
                    ctx.register(dataContextKey);
                    ctx.register(playerStatusContextKey);
                    ctx.register(validationContextKey);
                    ctx.register(setDataActionKey);
                    ctx.register(transitionActionKey);
                    ctx.set(playerStatusContextKey, player.getState().status);
                    ctx.registerTransform(playerStateContextKey, {
                        sources: [
                            flowIdContextKey,
                            flowStateContextKey,
                            viewIdContextKey,
                            viewContextKey,
                            dataContextKey,
                            playerStatusContextKey,
                            validationContextKey,
                            setDataActionKey,
                            transitionActionKey
                        ],
                        compute: function compute(read) {
                            var _read;
                            var flowId = read(flowIdContextKey);
                            var flowState = read(flowStateContextKey);
                            var transition = read(transitionActionKey);
                            var viewId = read(viewIdContextKey);
                            var viewResolved = read(viewContextKey);
                            var dataModel = read(dataContextKey);
                            var setData = read(setDataActionKey);
                            return {
                                // Always present — seeded eagerly above and kept live by the
                                // `player.hooks.state` tap below.
                                status: (_read = read(playerStatusContextKey)) !== null && _read !== void 0 ? _read : "not-started",
                                flow: flowId !== void 0 || flowState !== void 0 || transition !== void 0 ? {
                                    id: flowId,
                                    state: flowState,
                                    transition: transition
                                } : void 0,
                                view: viewId !== void 0 || viewResolved !== void 0 ? {
                                    id: viewId,
                                    resolved: viewResolved
                                } : void 0,
                                data: dataModel !== void 0 || setData !== void 0 ? {
                                    model: dataModel,
                                    set: setData
                                } : void 0,
                                validation: read(validationContextKey)
                            };
                        }
                    });
                    player.hooks.onStart.tap(this.name, function(flow) {
                        if (flow === null || flow === void 0 ? void 0 : flow.id) {
                            ctx.set(flowIdContextKey, flow.id);
                        }
                    });
                    player.hooks.state.tap(this.name, function(state) {
                        ctx.set(playerStatusContextKey, state.status);
                    });
                    player.hooks.flowController.tap(this.name, function(flowController) {
                        var transition = function transition(value) {
                            return flowController.transition(value);
                        };
                        ctx.set(transitionActionKey, transition);
                        flowController.hooks.flow.tap(_this.name, function(flowInstance) {
                            var recordState = function recordState() {
                                var _flowInstance_currentState;
                                var name = (_flowInstance_currentState = flowInstance.currentState) === null || _flowInstance_currentState === void 0 ? void 0 : _flowInstance_currentState.name;
                                if (name) {
                                    ctx.set(flowStateContextKey, name);
                                }
                            };
                            recordState();
                            flowInstance.hooks.afterTransition.tap(_this.name, recordState);
                        });
                    });
                    player.hooks.validationController.tap(this.name, function(vc) {
                        validationController = vc;
                        publishValidation();
                    });
                    player.hooks.viewController.tap(this.name, function(viewController) {
                        viewController.hooks.view.tap(_this.name, function(view) {
                            var _view_initialView;
                            var id = (_view_initialView = view.initialView) === null || _view_initialView === void 0 ? void 0 : _view_initialView.id;
                            if (id) {
                                ctx.set(viewIdContextKey, id);
                            }
                            view.hooks.onUpdate.tap(_this.name, function(resolved) {
                                ctx.set(viewContextKey, resolved);
                                if (resolved === null || resolved === void 0 ? void 0 : resolved.id) {
                                    ctx.set(viewIdContextKey, resolved.id);
                                }
                                publishValidation();
                            });
                        });
                    });
                    player.hooks.dataController.tap(this.name, function(dataController) {
                        var setData = function setData(binding, value) {
                            dataController.set([
                                [
                                    binding,
                                    value
                                ]
                            ]);
                        };
                        ctx.set(setDataActionKey, setData);
                        var publish = function publish() {
                            ctx.set(dataContextKey, dataController.serialize());
                            publishValidation();
                        };
                        dataController.hooks.onUpdate.tap(_this.name, publish);
                        publish();
                    });
                }
            }
        ]);
        return StateContextPlugin;
    }();
    return __toCommonJS(src_exports);
}();
//# sourceMappingURL=index.global.js.map