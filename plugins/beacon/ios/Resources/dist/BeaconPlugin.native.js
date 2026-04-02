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
var BeaconPlugin = function() {
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/timm@1.7.1/node_modules/timm/lib/timm.js
    var require_timm = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/timm@1.7.1/node_modules/timm/lib/timm.js": function(exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.clone = clone;
            exports.addLast = addLast;
            exports.addFirst = addFirst;
            exports.removeLast = removeLast;
            exports.removeFirst = removeFirst;
            exports.insert = insert;
            exports.removeAt = removeAt;
            exports.replaceAt = replaceAt;
            exports.getIn = getIn;
            exports.set = set;
            exports.setIn = setIn2;
            exports.update = update;
            exports.updateIn = updateIn;
            exports.merge = merge;
            exports.mergeDeep = mergeDeep;
            exports.mergeIn = mergeIn;
            exports.omit = omit;
            exports.addDefaults = addDefaults;
            exports.default = void 0;
            var INVALID_ARGS = "INVALID_ARGS";
            var IS_DEV = false;
            function throwStr(msg) {
                throw new Error(msg);
            }
            function getKeysAndSymbols(obj) {
                var keys = Object.keys(obj);
                if (Object.getOwnPropertySymbols) {
                    return keys.concat(Object.getOwnPropertySymbols(obj));
                }
                return keys;
            }
            var hasOwnProperty = {}.hasOwnProperty;
            function clone(obj0) {
                if (Array.isArray(obj0)) return obj0.slice();
                var obj = obj0;
                var keys = getKeysAndSymbols(obj);
                var out = {};
                for(var i = 0; i < keys.length; i++){
                    var key = keys[i];
                    out[key] = obj[key];
                }
                return out;
            }
            function isObject(o) {
                return o != null && typeof o === "object";
            }
            function addLast(array, val) {
                if (Array.isArray(val)) return array.concat(val);
                return array.concat([
                    val
                ]);
            }
            function addFirst(array, val) {
                if (Array.isArray(val)) return val.concat(array);
                return [
                    val
                ].concat(array);
            }
            function removeLast(array) {
                if (!array.length) return array;
                return array.slice(0, array.length - 1);
            }
            function removeFirst(array) {
                if (!array.length) return array;
                return array.slice(1);
            }
            function insert(array, idx, val) {
                return array.slice(0, idx).concat(Array.isArray(val) ? val : [
                    val
                ]).concat(array.slice(idx));
            }
            function removeAt(array, idx) {
                if (idx >= array.length || idx < 0) return array;
                return array.slice(0, idx).concat(array.slice(idx + 1));
            }
            function replaceAt(array, idx, newItem) {
                if (array[idx] === newItem) return array;
                var len = array.length;
                var result = Array(len);
                for(var i = 0; i < len; i++){
                    result[i] = array[i];
                }
                result[idx] = newItem;
                return result;
            }
            function getIn(obj, path) {
                if (!Array.isArray(path)) {
                    throwStr(IS_DEV ? "A path array should be provided when calling getIn()" : INVALID_ARGS);
                }
                if (obj == null) return void 0;
                var ptr = obj;
                for(var i = 0; i < path.length; i++){
                    var key = path[i];
                    ptr = ptr != null ? ptr[key] : void 0;
                    if (ptr === void 0) return ptr;
                }
                return ptr;
            }
            function set(obj0, key, val) {
                var obj = obj0;
                if (obj == null) obj = typeof key === "number" ? [] : {};
                if (obj[key] === val) return obj;
                var obj2 = clone(obj);
                obj2[key] = val;
                return obj2;
            }
            function setIn2(obj, path, val) {
                if (!path.length) return val;
                return doSetIn(obj, path, val, 0);
            }
            function doSetIn(obj, path, val, idx) {
                var newValue;
                var key = path[idx];
                if (idx === path.length - 1) {
                    newValue = val;
                } else {
                    var nestedObj = isObject(obj) && isObject(obj[key]) ? obj[key] : typeof path[idx + 1] === "number" ? [] : {};
                    newValue = doSetIn(nestedObj, path, val, idx + 1);
                }
                return set(obj, key, newValue);
            }
            function update(obj, key, fnUpdate) {
                var prevVal = obj == null ? void 0 : obj[key];
                var nextVal = fnUpdate(prevVal);
                return set(obj, key, nextVal);
            }
            function updateIn(obj, path, fnUpdate) {
                var prevVal = getIn(obj, path);
                var nextVal = fnUpdate(prevVal);
                return setIn2(obj, path, nextVal);
            }
            function merge(a, b, c, d, e, f) {
                for(var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++){
                    rest[_key - 6] = arguments[_key];
                }
                var _doMerge;
                return rest.length ? (_doMerge = doMerge).call.apply(_doMerge, [
                    null,
                    false,
                    false,
                    a,
                    b,
                    c,
                    d,
                    e,
                    f
                ].concat(_to_consumable_array(rest))) : doMerge(false, false, a, b, c, d, e, f);
            }
            function mergeDeep(a, b, c, d, e, f) {
                for(var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++){
                    rest[_key - 6] = arguments[_key];
                }
                var _doMerge;
                return rest.length ? (_doMerge = doMerge).call.apply(_doMerge, [
                    null,
                    false,
                    true,
                    a,
                    b,
                    c,
                    d,
                    e,
                    f
                ].concat(_to_consumable_array(rest))) : doMerge(false, true, a, b, c, d, e, f);
            }
            function mergeIn(a, path, b, c, d, e, f) {
                for(var _len = arguments.length, rest = new Array(_len > 7 ? _len - 7 : 0), _key = 7; _key < _len; _key++){
                    rest[_key - 7] = arguments[_key];
                }
                var prevVal = getIn(a, path);
                if (prevVal == null) prevVal = {};
                var nextVal;
                if (rest.length) {
                    var _doMerge;
                    nextVal = (_doMerge = doMerge).call.apply(_doMerge, [
                        null,
                        false,
                        false,
                        prevVal,
                        b,
                        c,
                        d,
                        e,
                        f
                    ].concat(_to_consumable_array(rest)));
                } else {
                    nextVal = doMerge(false, false, prevVal, b, c, d, e, f);
                }
                return setIn2(a, path, nextVal);
            }
            function omit(obj, attrs) {
                var omitList = Array.isArray(attrs) ? attrs : [
                    attrs
                ];
                var fDoSomething = false;
                for(var i = 0; i < omitList.length; i++){
                    if (hasOwnProperty.call(obj, omitList[i])) {
                        fDoSomething = true;
                        break;
                    }
                }
                if (!fDoSomething) return obj;
                var out = {};
                var keys = getKeysAndSymbols(obj);
                for(var i1 = 0; i1 < keys.length; i1++){
                    var key = keys[i1];
                    if (omitList.indexOf(key) >= 0) continue;
                    out[key] = obj[key];
                }
                return out;
            }
            function addDefaults(a, b, c, d, e, f) {
                for(var _len = arguments.length, rest = new Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++){
                    rest[_key - 6] = arguments[_key];
                }
                var _doMerge;
                return rest.length ? (_doMerge = doMerge).call.apply(_doMerge, [
                    null,
                    true,
                    false,
                    a,
                    b,
                    c,
                    d,
                    e,
                    f
                ].concat(_to_consumable_array(rest))) : doMerge(true, false, a, b, c, d, e, f);
            }
            function doMerge(fAddDefaults, fDeep, first) {
                for(var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++){
                    rest[_key - 3] = arguments[_key];
                }
                var out = first;
                if (!(out != null)) {
                    throwStr(IS_DEV ? "At least one object should be provided to merge()" : INVALID_ARGS);
                }
                var fChanged = false;
                for(var idx = 0; idx < rest.length; idx++){
                    var obj = rest[idx];
                    if (obj == null) continue;
                    var keys = getKeysAndSymbols(obj);
                    if (!keys.length) continue;
                    for(var j = 0; j <= keys.length; j++){
                        var key = keys[j];
                        if (fAddDefaults && out[key] !== void 0) continue;
                        var nextVal = obj[key];
                        if (fDeep && isObject(out[key]) && isObject(nextVal)) {
                            nextVal = doMerge(fAddDefaults, fDeep, out[key], nextVal);
                        }
                        if (nextVal === void 0 || nextVal === out[key]) continue;
                        if (!fChanged) {
                            fChanged = true;
                            out = clone(out);
                        }
                        out[key] = nextVal;
                    }
                }
                return out;
            }
            var timm = {
                clone: clone,
                addLast: addLast,
                addFirst: addFirst,
                removeLast: removeLast,
                removeFirst: removeFirst,
                insert: insert,
                removeAt: removeAt,
                replaceAt: replaceAt,
                getIn: getIn,
                set: set,
                setIn: setIn2,
                update: update,
                updateIn: updateIn,
                merge: merge,
                mergeDeep: mergeDeep,
                mergeIn: mergeIn,
                omit: omit,
                addDefaults: addDefaults
            };
            var _default = timm;
            exports.default = _default;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/beacon/core/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        BeaconPlugin: function() {
            return BeaconPlugin;
        },
        BeaconPluginSymbol: function() {
            return BeaconPluginSymbol;
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
        var _super = _create_super(SyncHook);
        function SyncHook() {
            _class_call_check(this, SyncHook);
            return _super.apply(this, arguments);
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
    var AsyncSeriesWaterfallHook = /*#__PURE__*/ function(Hook) {
        _inherits(AsyncSeriesWaterfallHook, Hook);
        var _super = _create_super(AsyncSeriesWaterfallHook);
        function AsyncSeriesWaterfallHook() {
            _class_call_check(this, AsyncSeriesWaterfallHook);
            return _super.apply(this, arguments);
        }
        _create_class(AsyncSeriesWaterfallHook, [
            {
                key: "call",
                value: function call() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    var _this = this;
                    return _async_to_generator(function() {
                        var _this_interceptions, _args, rtn, rest, ctx, tapIndex, tapValue, e;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _args = _to_array(args), rtn = _args[0], rest = _args.slice(1);
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
                                        callTap(_this.taps[tapIndex], [
                                            rtn
                                        ].concat(_to_consumable_array(rest)), ctx)
                                    ];
                                case 3:
                                    tapValue = _state.sent();
                                    if (tapValue !== void 0) {
                                        rtn = tapValue;
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
                                    _this.interceptions.result(rtn);
                                    return [
                                        2,
                                        rtn
                                    ];
                            }
                        });
                    })();
                }
            }
        ]);
        return AsyncSeriesWaterfallHook;
    }(Hook);
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/beacon/core/src/beacon.ts
    var import_player = __toESM(require_player());
    var import_timm = __toESM(require_timm());
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/beacon/core/src/symbols.ts
    var BeaconPluginSymbol = Symbol.for("BeaconPlugin");
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/beacon/core/src/beacon.ts
    var _BeaconPlugin = /*#__PURE__*/ function() {
        function _BeaconPlugin(options) {
            var _this = this;
            _class_call_check(this, _BeaconPlugin);
            this.name = "Beacon";
            this.symbol = _BeaconPlugin.Symbol;
            this.beaconContext = {
                view: void 0
            };
            this.hooks = {
                buildBeacon: new AsyncSeriesWaterfallHook(),
                cancelBeacon: new SyncBailHook(),
                publishBeacon: new SyncHook()
            };
            if (options === null || options === void 0 ? void 0 : options.plugins) {
                options.plugins.forEach(function(plugin) {
                    plugin.apply(_this);
                });
            }
            if (options === null || options === void 0 ? void 0 : options.callback) {
                this.hooks.publishBeacon.tap("BeaconCallback", function(beacon) {
                    if (options.callback) {
                        options.callback(beacon);
                    }
                });
            }
        }
        _create_class(_BeaconPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    this.player = player;
                    this.logger = player.logger;
                    player.hooks.state.tap(this.name, function(playerState) {
                        if (playerState.status === "in-progress") {
                            _this.resolveDataRefs = function(data) {
                                return (0, import_player.resolveDataRefs)(data, {
                                    model: playerState.controllers.data,
                                    evaluate: playerState.controllers.expression.evaluate
                                });
                            };
                        }
                    });
                    player.hooks.viewController.tap(this.name, function(vc) {
                        _this.beaconContext = {
                            view: void 0
                        };
                        vc.hooks.view.tap(_this.name, function(view) {
                            var beaconedView = false;
                            view.hooks.parser.tap(_this.name, function(parser) {
                                parser.hooks.onCreateASTNode.tap(_this.name, function(obj) {
                                    var _obj_plugins_stringResolver, _obj_plugins;
                                    if ((obj === null || obj === void 0 ? void 0 : obj.type) !== "asset" && (obj === null || obj === void 0 ? void 0 : obj.type) !== "view") return void 0;
                                    var _obj_plugins_stringResolver_propertiesToSkip;
                                    var propertiesToSkip = (_obj_plugins_stringResolver_propertiesToSkip = (_obj_plugins = obj.plugins) === null || _obj_plugins === void 0 ? void 0 : (_obj_plugins_stringResolver = _obj_plugins.stringResolver) === null || _obj_plugins_stringResolver === void 0 ? void 0 : _obj_plugins_stringResolver.propertiesToSkip) !== null && _obj_plugins_stringResolver_propertiesToSkip !== void 0 ? _obj_plugins_stringResolver_propertiesToSkip : [];
                                    if (propertiesToSkip.includes("beacon")) return void 0;
                                    var _obj_plugins1;
                                    obj.plugins = (0, import_timm.setIn)((_obj_plugins1 = obj.plugins) !== null && _obj_plugins1 !== void 0 ? _obj_plugins1 : {}, [
                                        "stringResolver",
                                        "propertiesToSkip"
                                    ], [
                                        "beacon"
                                    ].concat(_to_consumable_array(propertiesToSkip)));
                                    return obj;
                                });
                            });
                            view.hooks.onUpdate.tap(_this.name, function(viewUpdate) {
                                _this.beaconContext = {
                                    view: viewUpdate
                                };
                                if (!beaconedView) {
                                    _this.beacon({
                                        action: "viewed",
                                        element: "view",
                                        asset: viewUpdate,
                                        view: viewUpdate
                                    });
                                    beaconedView = true;
                                }
                            });
                        });
                    });
                    player.hooks.expressionEvaluator.tap(this.name, function(evaluator) {
                        evaluator.addExpressionFunction("beacon", function(_ctx, action, data) {
                            var view = _this.beaconContext.view || {};
                            _this.beacon({
                                action: action,
                                data: data,
                                element: "view",
                                asset: view,
                                view: view
                            });
                        });
                    });
                }
            },
            {
                key: "beacon",
                value: function beacon(event) {
                    var action = event.action, element = event.element, asset = event.asset, view = event.view;
                    var _this_beaconContext = this.beaconContext, currentView = _this_beaconContext.view;
                    var _this = this;
                    setTimeout(/*#__PURE__*/ _async_to_generator(function() {
                        var _event_asset_metaData, _event_asset, _this_resolveDataRefs, _this1, _this_player, unresolvedData, _this_resolveDataRefs1, data, defaultBeacon, state, hookArgs, beacon, shouldCancel, _this_logger;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    unresolvedData = (event === null || event === void 0 ? void 0 : event.data) || ((_event_asset = event.asset) === null || _event_asset === void 0 ? void 0 : (_event_asset_metaData = _event_asset.metaData) === null || _event_asset_metaData === void 0 ? void 0 : _event_asset_metaData.beacon);
                                    data = (_this_resolveDataRefs1 = (_this_resolveDataRefs = (_this1 = _this).resolveDataRefs) === null || _this_resolveDataRefs === void 0 ? void 0 : _this_resolveDataRefs.call(_this1, unresolvedData)) !== null && _this_resolveDataRefs1 !== void 0 ? _this_resolveDataRefs1 : unresolvedData;
                                    defaultBeacon = {
                                        action: action,
                                        element: element,
                                        data: data,
                                        assetId: asset === null || asset === void 0 ? void 0 : asset.id,
                                        viewId: currentView === null || currentView === void 0 ? void 0 : currentView.id
                                    };
                                    state = (_this_player = _this.player) === null || _this_player === void 0 ? void 0 : _this_player.getState();
                                    hookArgs = _object_spread_props(_object_spread({}, event), {
                                        data: data,
                                        state: state,
                                        view: view !== null && view !== void 0 ? view : currentView,
                                        logger: _this.logger
                                    });
                                    return [
                                        4,
                                        _this.hooks.buildBeacon.call(defaultBeacon, hookArgs)
                                    ];
                                case 1:
                                    beacon = _state.sent() || defaultBeacon;
                                    if (beacon !== defaultBeacon && _this.resolveDataRefs) {
                                        beacon = _this.resolveDataRefs(beacon);
                                    }
                                    shouldCancel = _this.hooks.cancelBeacon.call(hookArgs) || false;
                                    if (!shouldCancel) {
                                        ;
                                        (_this_logger = _this.logger) === null || _this_logger === void 0 ? void 0 : _this_logger.debug("Sending beacon event", beacon);
                                        _this.hooks.publishBeacon.call(beacon);
                                    }
                                    return [
                                        2
                                    ];
                            }
                        });
                    }), 0);
                }
            }
        ]);
        return _BeaconPlugin;
    }();
    _BeaconPlugin.Symbol = BeaconPluginSymbol;
    var BeaconPlugin = _BeaconPlugin;
    return __toCommonJS(src_exports);
}(); /*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/ 
//# sourceMappingURL=index.global.js.map