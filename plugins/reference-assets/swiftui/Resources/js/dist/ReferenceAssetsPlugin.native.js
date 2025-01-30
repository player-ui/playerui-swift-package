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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_array(arr) {
    return _array_with_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var ReferenceAssetsPlugin = function() {
    var dlv_es_default = // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/dlv@1.1.3/node_modules/dlv/dist/dlv.es.js
    function dlv_es_default(t, e, l, n, r) {
        for(e = e.split ? e.split(".") : e, n = 0; n < e.length; n++)t = t ? t[e[n]] : r;
        return t === r ? l : t;
    };
    var createMatcher = function createMatcher(partialObj) {
        var pairs = traverseObj(partialObj);
        var matchFunction = function(searchObj) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = Array.from(pairs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var entry = _step.value;
                    var _entry = _sliced_to_array(entry, 2), path = _entry[0], value = _entry[1];
                    if (dlv_es_default(searchObj, path) !== value) {
                        return false;
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
            return true;
        };
        matchFunction.count = pairs.size;
        return matchFunction;
    };
    var createBasicMatcher = function createBasicMatcher(seed) {
        var matcher = function(match) {
            return seed === match;
        };
        matcher.count = 1;
        return matcher;
    };
    var composeTransforms = // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+asset-transform-plugin@0.0.0/node_modules/@player-ui/asset-transform-plugin/dist/index.mjs
    function composeTransforms() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var _args_reverse = _to_array(args.reverse()), fn = _args_reverse[0], fns = _args_reverse.slice(1);
        return function(asset, options, store) {
            var value = fn(asset, options, store);
            if (!fns.length) {
                return value;
            }
            return fns.reduce(function(prevValue, current) {
                return current(prevValue, options, store);
            }, value);
        };
    };
    var composeBefore = function composeBefore() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return {
            beforeResolve: composeTransforms.apply(void 0, _to_consumable_array(args))
        };
    };
    var compose = function compose() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        var beforeResolveFns = [];
        var resolveFns = [];
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var arg = _step.value;
                if (typeof arg === "function") {
                    resolveFns.push(arg);
                } else {
                    if (arg === null || arg === void 0 ? void 0 : arg.resolve) {
                        resolveFns.push(arg.resolve);
                    }
                    if (arg === null || arg === void 0 ? void 0 : arg.beforeResolve) {
                        beforeResolveFns.push(arg.beforeResolve);
                    }
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
        return {
            beforeResolve: beforeResolveFns.length ? composeTransforms.apply(void 0, _to_consumable_array(beforeResolveFns)) : void 0,
            resolve: resolveFns.length ? composeTransforms.apply(void 0, _to_consumable_array(resolveFns)) : void 0
        };
    };
    var maybeCompose = function maybeCompose(maybeFn) {
        if (typeof maybeFn === "object") {
            return maybeFn;
        }
        return compose(maybeFn);
    };
    var cleanupTransformRegistry = function cleanupTransformRegistry(maybeRegistry) {
        if (Array.isArray(maybeRegistry)) {
            var wrappedTransforms = maybeRegistry.map(function(param) {
                var _param = _sliced_to_array(param, 2), key = _param[0], value = _param[1];
                return [
                    key,
                    maybeCompose(value)
                ];
            });
            return new Registry(wrappedTransforms);
        }
        var registry = new Registry();
        maybeRegistry.forEach(function(param) {
            var key = param.key, value = param.value;
            registry.set(key, maybeCompose(value));
        });
        return registry;
    };
    var isBackAction = // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/reference-assets/core/src/assets/action/transform.ts
    function isBackAction(action) {
        return action.value === "Prev";
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/sorted-array@2.0.4/node_modules/sorted-array/sorted-array.js
    var require_sorted_array = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/sorted-array@2.0.4/node_modules/sorted-array/sorted-array.js": function(exports, module) {
            "use strict";
            var SortedArray2 = function() {
                var SortedArray3 = defclass({
                    constructor: function constructor(array, compare) {
                        this.array = [];
                        this.compare = compare || compareDefault;
                        var length = array.length, index = 0;
                        while(index < length)this.insert(array[index++]);
                    },
                    insert: function insert(element) {
                        var array = this.array, compare = this.compare, high = array.length - 1, low = 0, pos = -1, index, ordering;
                        while(high >= low){
                            index = (high + low) / 2 >>> 0;
                            ordering = compare(array[index], element);
                            if (ordering < 0) low = index + 1;
                            else if (ordering > 0) high = index - 1;
                            else {
                                pos = index;
                                break;
                            }
                            ;
                        }
                        if (pos === -1) {
                            pos = high;
                        }
                        pos++;
                        high = array.length - 1;
                        while(pos < high && compare(element, array[pos]) === 0){
                            pos++;
                        }
                        index = array.length;
                        array.push(element);
                        while(index > pos){
                            array[index] = array[--index];
                        }
                        array[pos] = element;
                        return this;
                    },
                    search: function search(element) {
                        var array = this.array, compare = this.compare, high = array.length - 1, low = 0, index, ordering;
                        while(high >= low){
                            index = (high + low) / 2 >>> 0;
                            ordering = compare(array[index], element);
                            if (ordering < 0) low = index + 1;
                            else if (ordering > 0) high = index - 1;
                            else return index;
                        }
                        return -1;
                    },
                    remove: function remove(element) {
                        var index = this.search(element);
                        if (index >= 0) this.array.splice(index, 1);
                        return this;
                    }
                });
                SortedArray3.comparing = function(property, array) {
                    return new SortedArray3(array, function(a, b) {
                        return compareDefault(a[property], b[property]);
                    });
                };
                return SortedArray3;
                function defclass(prototype) {
                    var constructor = prototype.constructor;
                    constructor.prototype = prototype;
                    return constructor;
                }
                function compareDefault(a, b) {
                    if (a < b) return -1;
                    else if (a > b) return 1;
                    else return 0;
                }
            }();
            if (typeof module === "object") module.exports = SortedArray2;
            if (typeof define === "function" && define.amd) define(function() {
                return SortedArray2;
            });
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/reference-assets/core/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        ReferenceAssetsPlugin: function() {
            return ReferenceAssetsPlugin;
        },
        actionTransform: function() {
            return actionTransform;
        },
        choiceTransform: function() {
            return choiceTransform;
        },
        expPropTransform: function() {
            return expPropTransform;
        },
        imageTransform: function() {
            return imageTransform;
        },
        infoTransform: function() {
            return infoTransform;
        },
        inputTransform: function() {
            return inputTransform;
        },
        isBackAction: function() {
            return isBackAction;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/reference-assets/core/src/assets/input/transform.ts
    var inputTransform = function(asset, options) {
        var _options_validation, _options_validation1;
        return _object_spread_props(_object_spread({}, asset), {
            format: function format(val) {
                if (asset.binding === void 0) {
                    return val;
                }
                return options.data.format(asset.binding, val);
            },
            set: function set(val) {
                if (asset.binding === void 0) {
                    return;
                }
                return options.data.model.set([
                    [
                        asset.binding,
                        val
                    ]
                ], {
                    formatted: true
                });
            },
            value: asset.binding === void 0 ? "" : options.data.model.get(asset.binding, {
                includeInvalid: true,
                formatted: true
            }),
            validation: asset.binding === void 0 ? void 0 : (_options_validation = options.validation) === null || _options_validation === void 0 ? void 0 : _options_validation.get(asset.binding, {
                track: true
            }),
            dataType: asset.binding === void 0 ? void 0 : (_options_validation1 = options.validation) === null || _options_validation1 === void 0 ? void 0 : _options_validation1.type(asset.binding)
        });
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+partial-match-registry@0.0.0/node_modules/@player-ui/partial-match-registry/dist/index.mjs
    var import_sorted_array = __toESM(require_sorted_array(), 1);
    // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+partial-match-registry@0.0.0/node_modules/@player-ui/partial-match-registry/dist/index.mjs
    function traverseObj(object) {
        var path = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], pairs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new Map();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.keys(object)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var key = _step.value;
                "";
                var val = object[key];
                var nestedPath = _to_consumable_array(path).concat([
                    key
                ]);
                if (typeof val === "object") {
                    traverseObj(val, nestedPath, pairs);
                } else {
                    pairs.set(nestedPath, val);
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
        return pairs;
    }
    var createSortedArray = function() {
        return new import_sorted_array.default([], function(c) {
            return c.matcher.count;
        });
    };
    var Registry = /*#__PURE__*/ function() {
        function Registry(initialSet) {
            var _this = this;
            _class_call_check(this, Registry);
            this.store = createSortedArray();
            initialSet === null || initialSet === void 0 ? void 0 : initialSet.forEach(function(param) {
                var _param = _sliced_to_array(param, 2), match = _param[0], value = _param[1];
                _this.set(match, value);
            });
        }
        _create_class(Registry, [
            {
                /** Add match -> value mapping to the registry */ key: "set",
                value: function set(match, value) {
                    var matcher = typeof match === "object" ? createMatcher(match) : createBasicMatcher(match);
                    this.store.insert({
                        key: match,
                        value: value,
                        matcher: matcher
                    });
                }
            },
            {
                /** Fetch the best match in the registry */ key: "get",
                value: function get(query) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.store.array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var entry = _step.value;
                            if (entry.matcher(query)) {
                                return entry.value;
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
                }
            },
            {
                /** Loop over all entries and run callback */ key: "forEach",
                value: function forEach(callbackfn) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.store.array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var entry = _step.value;
                            callbackfn(entry);
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
                /** Reset the items in the registry */ key: "clear",
                value: function clear() {
                    this.store = createSortedArray();
                }
            },
            {
                /** Check if the registry is empty*/ key: "isRegistryEmpty",
                value: function isRegistryEmpty() {
                    return this.store.array.length === 0;
                }
            }
        ]);
        return Registry;
    }();
    var AssetTransformPlugin = /*#__PURE__*/ function() {
        function AssetTransformPlugin(transforms) {
            _class_call_check(this, AssetTransformPlugin);
            this.name = "asset-transform";
            this.registry = cleanupTransformRegistry(transforms);
        }
        _create_class(AssetTransformPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    player.hooks.viewController.tap(this.name, function(vc) {
                        _this.registry.forEach(function(param) {
                            var key = param.key, value = param.value;
                            return vc.transformRegistry.set(key, maybeCompose(value));
                        });
                    });
                }
            }
        ]);
        return AssetTransformPlugin;
    }();
    var transform = function(action, options) {
        return _object_spread_props(_object_spread({}, action), {
            run: function run() {
                if (action.exp) {
                    options.evaluate(action.exp);
                }
                if (action.value) {
                    var _action_metaData, _options_transition;
                    var skipValidation = (_action_metaData = action.metaData) === null || _action_metaData === void 0 ? void 0 : _action_metaData.skipValidation;
                    (_options_transition = options.transition) === null || _options_transition === void 0 ? void 0 : _options_transition.call(options, action.value, {
                        force: skipValidation
                    });
                }
            }
        });
    };
    var backIconTransform = function(action) {
        var _action_metaData;
        if (isBackAction(action) && (action === null || action === void 0 ? void 0 : (_action_metaData = action.metaData) === null || _action_metaData === void 0 ? void 0 : _action_metaData.role) === void 0) {
            return _object_spread_props(_object_spread({}, action), {
                metaData: _object_spread_props(_object_spread({}, action === null || action === void 0 ? void 0 : action.metaData), {
                    role: "back"
                })
            });
        }
        return action;
    };
    var expPropTransform = function(asset) {
        var _asset_plugins_stringResolver, _asset_plugins, _asset_plugins1, _asset_plugins_stringResolver1, _asset_plugins2;
        var skipArray = (_asset_plugins = asset.plugins) === null || _asset_plugins === void 0 ? void 0 : (_asset_plugins_stringResolver = _asset_plugins.stringResolver) === null || _asset_plugins_stringResolver === void 0 ? void 0 : _asset_plugins_stringResolver.propertiesToSkip;
        if (skipArray && skipArray.indexOf("exp") > 1) {
            return asset;
        }
        var _asset_plugins_stringResolver_propertiesToSkip;
        return _object_spread_props(_object_spread({}, asset), {
            plugins: _object_spread_props(_object_spread({}, asset.plugins), {
                stringResolver: _object_spread_props(_object_spread({}, asset === null || asset === void 0 ? void 0 : (_asset_plugins1 = asset.plugins) === null || _asset_plugins1 === void 0 ? void 0 : _asset_plugins1.stringResolver), {
                    propertiesToSkip: _to_consumable_array((_asset_plugins_stringResolver_propertiesToSkip = (_asset_plugins2 = asset.plugins) === null || _asset_plugins2 === void 0 ? void 0 : (_asset_plugins_stringResolver1 = _asset_plugins2.stringResolver) === null || _asset_plugins_stringResolver1 === void 0 ? void 0 : _asset_plugins_stringResolver1.propertiesToSkip) !== null && _asset_plugins_stringResolver_propertiesToSkip !== void 0 ? _asset_plugins_stringResolver_propertiesToSkip : []).concat([
                        "exp"
                    ])
                })
            })
        });
    };
    var actionTransform = compose(transform, backIconTransform, composeBefore(expPropTransform));
    // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/reference-assets/core/src/assets/info/transform.ts
    var infoTransform = function(infoAsset) {
        var actions = infoAsset === null || infoAsset === void 0 ? void 0 : infoAsset.actions;
        var segmentedActions = actions === null || actions === void 0 ? void 0 : actions.reduce(function(segmentedActionsArray, action) {
            segmentedActionsArray[isBackAction(action.asset) ? "prev" : "next"].push(action);
            return segmentedActionsArray;
        }, {
            next: [],
            prev: []
        });
        return _object_spread_props(_object_spread({}, infoAsset), {
            segmentedActions: segmentedActions
        });
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/reference-assets/core/src/assets/image/transform.ts
    var getImageAlt = function(props) {
        var metaData = props.metaData, placeholder = props.placeholder;
        if (metaData.accessibility) return metaData.accessibility;
        if (placeholder) return placeholder;
        return "Image";
    };
    var imageTransform = function(props) {
        var altText = getImageAlt(props);
        var newImage = _object_spread_props(_object_spread({}, props), {
            altText: altText
        });
        return newImage;
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/reference-assets/core/src/assets/choice/transform.ts
    var choiceTransform = function(asset, options) {
        var _options_validation, _options_validation1;
        var items = asset.items, binding = asset.binding, rest = _object_without_properties(asset, [
            "items",
            "binding"
        ]);
        var assetHasBinding = binding !== void 0;
        var currentValue = assetHasBinding ? options.data.model.get(binding, {
            includeInvalid: true
        }) : void 0;
        var resetValue = function() {
            if (assetHasBinding) {
                return options.data.model.set([
                    [
                        binding,
                        null
                    ]
                ]);
            }
        };
        var transformedChoiceItems = (items || []).map(function(item, index) {
            var _item_id;
            return _object_spread_props(_object_spread({}, item), {
                id: (_item_id = item.id) !== null && _item_id !== void 0 ? _item_id : "".concat(asset.id, "-choice-").concat(index),
                select: function select() {
                    if (assetHasBinding) {
                        return options.data.model.set([
                            [
                                binding,
                                item.value
                            ]
                        ]);
                    }
                },
                unselect: resetValue
            });
        });
        return _object_spread_props(_object_spread({}, rest), {
            binding: binding,
            clearSelection: resetValue,
            items: transformedChoiceItems,
            value: currentValue,
            validation: assetHasBinding ? (_options_validation = options.validation) === null || _options_validation === void 0 ? void 0 : _options_validation.get(binding, {
                track: true
            }) : void 0,
            dataType: assetHasBinding ? (_options_validation1 = options.validation) === null || _options_validation1 === void 0 ? void 0 : _options_validation1.type(binding) : void 0
        });
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/reference-assets/core/src/plugin.ts
    var ReferenceAssetsPlugin = /*#__PURE__*/ function() {
        function ReferenceAssetsPlugin() {
            _class_call_check(this, ReferenceAssetsPlugin);
            this.name = "reference-assets-transforms";
        }
        _create_class(ReferenceAssetsPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    player.registerPlugin(new AssetTransformPlugin([
                        [
                            {
                                type: "action"
                            },
                            actionTransform
                        ],
                        [
                            {
                                type: "input"
                            },
                            inputTransform
                        ],
                        [
                            {
                                type: "image"
                            },
                            imageTransform
                        ],
                        [
                            {
                                type: "info"
                            },
                            infoTransform
                        ],
                        [
                            {
                                type: "choice"
                            },
                            choiceTransform
                        ]
                    ]));
                }
            }
        ]);
        return ReferenceAssetsPlugin;
    }();
    return __toCommonJS(src_exports);
}();
//# sourceMappingURL=index.global.js.map