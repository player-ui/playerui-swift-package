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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
var Registry = function() {
    var dlv_es_default = // ../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/dlv@1.1.3/node_modules/dlv/dist/dlv.es.js
    function dlv_es_default(t, e, l, n, r) {
        for(e = e.split ? e.split(".") : e, n = 0; n < e.length; n++)t = t ? t[e[n]] : r;
        return t === r ? l : t;
    };
    var createObjectMatcher = function createObjectMatcher(partialObj) {
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
    var createBasicMatcher = // ../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/core/partial-match-registry/src/index.ts
    function createBasicMatcher(seed) {
        var matcher = function(match) {
            return seed === match;
        };
        matcher.count = 1;
        return matcher;
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
        if (from && (typeof from === "undefined" ? "undefined" : _type_of(from)) === "object" || typeof from === "function") {
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
    // ../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/sorted-array@2.0.4/node_modules/sorted-array/sorted-array.js
    var require_sorted_array = __commonJS({
        "../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/sorted-array@2.0.4/node_modules/sorted-array/sorted-array.js": function(exports, module) {
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
            if ((typeof module === "undefined" ? "undefined" : _type_of(module)) === "object") module.exports = SortedArray2;
            if (typeof define === "function" && define.amd) define(function() {
                return SortedArray2;
            });
        }
    });
    // ../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/core/partial-match-registry/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        Registry: function() {
            return Registry;
        },
        createObjectMatcher: function() {
            return createObjectMatcher;
        }
    });
    var import_sorted_array = __toESM(require_sorted_array());
    // ../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/core/partial-match-registry/src/deep-partial-matcher.ts
    function traverseObj(object) {
        var path = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], pairs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new Map();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.keys(object)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var key = _step.value;
                var val = object[key];
                var nestedPath = _to_consumable_array(path).concat([
                    key
                ]);
                if ((typeof val === "undefined" ? "undefined" : _type_of(val)) === "object") {
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
                    var matcher = (typeof match === "undefined" ? "undefined" : _type_of(match)) === "object" ? createObjectMatcher(match) : createBasicMatcher(match);
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
    return __toCommonJS(src_exports);
}();
//# sourceMappingURL=index.global.js.map