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
function _ts_generator(thisArg, body) {
    var f, y, t, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
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
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
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
var ExternalStatePlugin = function() {
    var createNewSortInstance = function createNewSortInstance(opts) {
        var comparer = castComparer(opts.comparer);
        return function(arrayToSort) {
            var ctx = Array.isArray(arrayToSort) && !opts.inPlaceSorting ? arrayToSort.slice() : arrayToSort;
            return {
                asc: function asc(sortBy) {
                    return sortArray(1, ctx, sortBy, comparer);
                },
                desc: function desc(sortBy) {
                    return sortArray(-1, ctx, sortBy, comparer);
                },
                by: function by(sortBy) {
                    return sortArray(1, ctx, sortBy, comparer);
                }
            };
        };
    };
    var dlv_es_default = // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/dlv@1.1.3/node_modules/dlv/dist/dlv.es.js
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
    var createBasicMatcher = function createBasicMatcher(seed) {
        var matcher = function(match) {
            return seed === match;
        };
        matcher.count = 1;
        return matcher;
    };
    var isExternal = // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/external-state/core/src/index.ts
    function isExternal(state) {
        return state.state_type === "EXTERNAL";
    };
    var isInProgress = function isInProgress(state) {
        return state.status === "in-progress";
    };
    var __defProp = Object.defineProperty;
    var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames = Object.getOwnPropertyNames;
    var __hasOwnProp = Object.prototype.hasOwnProperty;
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
    var __toCommonJS = function(mod) {
        return __copyProps(__defProp({}, "__esModule", {
            value: true
        }), mod);
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/external-state/core/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        ExternalStatePlugin: function() {
            return ExternalStatePlugin;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/fast-sort@3.4.1/node_modules/fast-sort/dist/sort.mjs
    var castComparer = function castComparer(comparer) {
        return function(a, b, order) {
            return comparer(a, b, order) * order;
        };
    };
    var throwInvalidConfigErrorIfTrue = function throwInvalidConfigErrorIfTrue(condition, context) {
        if (condition) throw Error("Invalid sort config: " + context);
    };
    var unpackObjectSorter = function unpackObjectSorter(sortByObj) {
        var _a = sortByObj || {}, asc = _a.asc, desc = _a.desc;
        var order = asc ? 1 : -1;
        var sortBy = asc || desc;
        throwInvalidConfigErrorIfTrue(!sortBy, "Expected `asc` or `desc` property");
        throwInvalidConfigErrorIfTrue(asc && desc, "Ambiguous object with `asc` and `desc` config properties");
        var comparer = sortByObj.comparer && castComparer(sortByObj.comparer);
        return {
            order: order,
            sortBy: sortBy,
            comparer: comparer
        };
    };
    var multiPropertySorterProvider = function multiPropertySorterProvider(defaultComparer2) {
        return function multiPropertySorter(sortBy, sortByArr, depth, order, comparer, a, b) {
            var valA;
            var valB;
            if (typeof sortBy === "string") {
                valA = a[sortBy];
                valB = b[sortBy];
            } else if (typeof sortBy === "function") {
                valA = sortBy(a);
                valB = sortBy(b);
            } else {
                var objectSorterConfig = unpackObjectSorter(sortBy);
                return multiPropertySorter(objectSorterConfig.sortBy, sortByArr, depth, objectSorterConfig.order, objectSorterConfig.comparer || defaultComparer2, a, b);
            }
            var equality = comparer(valA, valB, order);
            if ((equality === 0 || valA == null && valB == null) && sortByArr.length > depth) {
                return multiPropertySorter(sortByArr[depth], sortByArr, depth + 1, order, comparer, a, b);
            }
            return equality;
        };
    };
    function getSortStrategy(sortBy, comparer, order) {
        if (sortBy === void 0 || sortBy === true) {
            return function(a, b) {
                return comparer(a, b, order);
            };
        }
        if (typeof sortBy === "string") {
            throwInvalidConfigErrorIfTrue(sortBy.includes("."), "String syntax not allowed for nested properties.");
            return function(a, b) {
                return comparer(a[sortBy], b[sortBy], order);
            };
        }
        if (typeof sortBy === "function") {
            return function(a, b) {
                return comparer(sortBy(a), sortBy(b), order);
            };
        }
        if (Array.isArray(sortBy)) {
            var multiPropSorter_1 = multiPropertySorterProvider(comparer);
            return function(a, b) {
                return multiPropSorter_1(sortBy[0], sortBy, 1, order, comparer, a, b);
            };
        }
        var objectSorterConfig = unpackObjectSorter(sortBy);
        return getSortStrategy(objectSorterConfig.sortBy, objectSorterConfig.comparer || comparer, objectSorterConfig.order);
    }
    var sortArray = function sortArray(order, ctx, sortBy, comparer) {
        var _a;
        if (!Array.isArray(ctx)) {
            return ctx;
        }
        if (Array.isArray(sortBy) && sortBy.length < 2) {
            _a = sortBy, sortBy = _a[0];
        }
        return ctx.sort(getSortStrategy(sortBy, comparer, order));
    };
    var defaultComparer = function defaultComparer(a, b, order) {
        if (a == null) return order;
        if (b == null) return -order;
        if ((typeof a === "undefined" ? "undefined" : _type_of(a)) !== (typeof b === "undefined" ? "undefined" : _type_of(b))) {
            return (typeof a === "undefined" ? "undefined" : _type_of(a)) < (typeof b === "undefined" ? "undefined" : _type_of(b)) ? -1 : 1;
        }
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    };
    var sort = createNewSortInstance({
        comparer: defaultComparer
    });
    var inPlaceSort = createNewSortInstance({
        comparer: defaultComparer,
        inPlaceSorting: true
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+partial-match-registry@0.0.0/node_modules/@player-ui/partial-match-registry/dist/index.mjs
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
                if ((typeof val === "undefined" ? "undefined" : _type_of(val)) === "object" && val !== null) {
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
    var Registry = /*#__PURE__*/ function() {
        function Registry(initialSet, logger) {
            var _this = this;
            _class_call_check(this, Registry);
            this.store = [];
            this.logger = logger;
            initialSet === null || initialSet === void 0 ? void 0 : initialSet.forEach(function(param) {
                var _param = _sliced_to_array(param, 2), match = _param[0], value = _param[1];
                _this.set(match, value);
            });
        }
        _create_class(Registry, [
            {
                /**
     * Add match -> value mapping to the registry
     *
     * If an entry with the same specificity and matching key already exists, it will be replaced
     * and a debug log will be emitted (if a logger is configured).
     *
     * @param match - The key to match against (can be a primitive or object)
     * @param value - The value to associate with this key
     */ key: "set",
                value: function set(match, value) {
                    var matcher = (typeof match === "undefined" ? "undefined" : _type_of(match)) === "object" ? createObjectMatcher(match) : createBasicMatcher(match);
                    var existingIndex = this.store.findIndex(function(entry) {
                        return entry.matcher(match) && matcher(entry.key);
                    });
                    if (existingIndex !== -1) {
                        var _this_logger_debug, _this_logger;
                        this.store.splice(existingIndex, 1);
                        (_this_logger = this.logger) === null || _this_logger === void 0 ? void 0 : (_this_logger_debug = _this_logger.debug) === null || _this_logger_debug === void 0 ? void 0 : _this_logger_debug.call(_this_logger, "Registry: Replacing existing entry for key ", match);
                    }
                    this.store.push({
                        key: match,
                        value: value,
                        matcher: matcher
                    });
                    this.store = sort(this.store).desc(function(entry) {
                        return entry.matcher.count;
                    });
                }
            },
            {
                /**
     * Fetch the best match in the registry
     *
     * Searches for the most specific entry that matches the given query.
     * The registry is sorted by specificity (matcher.count) in descending order,
     * so we iterate forward to find the highest specificity match first.
     *
     * @param query - The query object to match against registered keys
     * @returns The value associated with the best matching key, or undefined if no match found
     */ key: "get",
                value: function get(query) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.store[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
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
                    return void 0;
                }
            },
            {
                /** Loop over all entries and run callback */ key: "forEach",
                value: function forEach(callbackfn) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.store[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
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
                    this.store = [];
                }
            },
            {
                /** Check if the registry is empty*/ key: "isRegistryEmpty",
                value: function isRegistryEmpty() {
                    return this.store.length === 0;
                }
            }
        ]);
        return Registry;
    }();
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/external-state/core/src/symbols.ts
    var ExternalStatePluginSymbol = Symbol.for("@player-ui/ExternalStatePlugin");
    var _ExternalStatePlugin = /*#__PURE__*/ function() {
        function _ExternalStatePlugin(handlers) {
            _class_call_check(this, _ExternalStatePlugin);
            this.name = "ExternalStatePlugin";
            this.symbol = _ExternalStatePlugin.Symbol;
            this.handlers = handlers;
        }
        _create_class(_ExternalStatePlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    var isFirstInstance = this.createRegistry(player);
                    this.registerHandlers(player);
                    if (!isFirstInstance) {
                        return;
                    }
                    player.hooks.flowController.tap(this.name, function(flowController) {
                        flowController.hooks.flow.tap(_this.name, function(flow) {
                            flow.hooks.afterTransition.tap(_this.name, function(flowInstance) {
                                return _async_to_generator(function() {
                                    var toState, currentState, _this_registry, handler, transitionValue, _latestState_controllers_flow_current_currentState, _latestState_controllers_flow_current, latestState, error;
                                    return _ts_generator(this, function(_state) {
                                        switch(_state.label){
                                            case 0:
                                                toState = flowInstance.currentState;
                                                currentState = player.getState();
                                                if (!(toState && toState.value && isExternal(toState.value) && isInProgress(currentState))) return [
                                                    3,
                                                    4
                                                ];
                                                _state.label = 1;
                                            case 1:
                                                _state.trys.push([
                                                    1,
                                                    3,
                                                    ,
                                                    4
                                                ]);
                                                handler = (_this_registry = this.registry) === null || _this_registry === void 0 ? void 0 : _this_registry.get(toState.value);
                                                return [
                                                    4,
                                                    handler === null || handler === void 0 ? void 0 : handler(toState.value, currentState.controllers)
                                                ];
                                            case 2:
                                                transitionValue = _state.sent();
                                                if (transitionValue !== void 0) {
                                                    ;
                                                    latestState = player.getState();
                                                    if (isInProgress(latestState) && ((_latestState_controllers_flow_current = latestState.controllers.flow.current) === null || _latestState_controllers_flow_current === void 0 ? void 0 : (_latestState_controllers_flow_current_currentState = _latestState_controllers_flow_current.currentState) === null || _latestState_controllers_flow_current_currentState === void 0 ? void 0 : _latestState_controllers_flow_current_currentState.name) === toState.name) {
                                                        latestState.controllers.flow.transition(transitionValue);
                                                    } else {
                                                        player.logger.warn("External state resolved with [".concat(transitionValue, "], but Player already navigated away from [").concat(toState.name, "]"));
                                                    }
                                                }
                                                return [
                                                    3,
                                                    4
                                                ];
                                            case 3:
                                                error = _state.sent();
                                                if (_instanceof(error, Error)) {
                                                    currentState.fail(error);
                                                }
                                                return [
                                                    3,
                                                    4
                                                ];
                                            case 4:
                                                return [
                                                    2
                                                ];
                                        }
                                    });
                                }).call(_this);
                            });
                        });
                    });
                }
            },
            {
                /**
     * Create or share the registry for this plugin instance.
     *
     * Uses the Player's plugin registry to find if another instance of ExternalStatePlugin
     * has already been registered. If found, this instance will share that plugin's registry.
     * Otherwise, this instance creates a new registry.
     */ key: "createRegistry",
                value: function createRegistry(player) {
                    var existing = player.findPlugin(ExternalStatePluginSymbol);
                    if (existing && existing !== this) {
                        this.registry = existing.registry;
                        return false;
                    }
                    this.registry = new Registry(void 0, player.logger);
                    return true;
                }
            },
            {
                /**
     * Register this plugin's handlers to the shared registry.
     *
     * If a handler with the same specificity already exists, it will be replaced
     * and a debug log will be emitted (accessible via player.logger.debug).
     */ key: "registerHandlers",
                value: function registerHandlers(player) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.handlers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var handler = _step.value;
                            var _handler_match, _this_registry;
                            if ((_handler_match = handler.match) === null || _handler_match === void 0 ? void 0 : _handler_match.ref) {
                                var _handler_match1;
                                player.logger.warn("An ExternalStateHandler contains a superfluous 'match.ref' property. 'match.ref' will be ignored. 'ref' will be used instead. Handler: ".concat(JSON.stringify({
                                    ref: handler.ref,
                                    match: handler.match
                                })));
                                (_handler_match1 = handler.match) === null || _handler_match1 === void 0 ? true : delete _handler_match1["ref"];
                                continue;
                            }
                            (_this_registry = this.registry) === null || _this_registry === void 0 ? void 0 : _this_registry.set(_object_spread({
                                ref: handler.ref
                            }, handler.match), handler.handlerFunction);
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
            }
        ]);
        return _ExternalStatePlugin;
    }();
    /** Symbol used to identify and find existing instances of this plugin */ _ExternalStatePlugin.Symbol = ExternalStatePluginSymbol;
    var ExternalStatePlugin = _ExternalStatePlugin;
    return __toCommonJS(src_exports);
}();
//# sourceMappingURL=index.global.js.map