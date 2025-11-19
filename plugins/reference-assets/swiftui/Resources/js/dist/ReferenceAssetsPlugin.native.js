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
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
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
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
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
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
var ReferenceAssetsPlugin = function() {
    var dlv_es_default = // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/dlv@1.1.3/node_modules/dlv/dist/dlv.es.js
    function dlv_es_default(t2, e, l, n, r) {
        for(e = e.split ? e.split(".") : e, n = 0; n < e.length; n++)t2 = t2 ? t2[e[n]] : r;
        return t2 === r ? l : t2;
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
    var composeTransforms = // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+asset-transform-plugin@0.0.0/node_modules/@player-ui/asset-transform-plugin/dist/index.mjs
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
        if ((typeof maybeFn === "undefined" ? "undefined" : _type_of(maybeFn)) === "object") {
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
    var isBackAction = // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/reference-assets/core/src/assets/action/transform.ts
    function isBackAction(action) {
        return action.value === "Prev";
    };
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
    var find = function find(iter, tar, key) {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = iter.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                key = _step.value;
                if (dequal(key, tar)) return key;
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
    };
    var isBinding = function isBinding(binding) {
        return !(typeof binding === "string" || Array.isArray(binding));
    };
    var maybeConvertToNum = function maybeConvertToNum(i) {
        var asInt = parseInt(i, 10);
        if (isNaN(asInt)) {
            return i;
        }
        return asInt;
    };
    var getBindingSegments = function getBindingSegments(binding) {
        if (Array.isArray(binding)) {
            return binding;
        }
        if (typeof binding === "string") {
            return binding.split(".");
        }
        return binding.asArray();
    };
    var findInArray = function findInArray(array, key, value) {
        return array.findIndex(function(obj) {
            if (obj && (typeof obj === "undefined" ? "undefined" : _type_of(obj)) === "object") {
                return obj[key] == value;
            }
            return false;
        });
    };
    var withParser = function withParser(model, parseBinding) {
        function maybeParse(binding, readOnly) {
            var parsed = isBinding(binding) ? binding : parseBinding(binding, {
                get: model.get,
                set: model.set,
                readOnly: readOnly
            });
            if (!parsed) {
                throw new Error("Unable to parse binding");
            }
            return parsed;
        }
        return {
            get: function get(binding, options) {
                return model.get(maybeParse(binding, true), options);
            },
            set: function set(transaction, options) {
                return model.set(transaction.map(function(param) {
                    var _param = _sliced_to_array(param, 2), key = _param[0], val = _param[1];
                    return [
                        maybeParse(key, false),
                        val
                    ];
                }), options);
            },
            delete: function _delete(binding, options) {
                return model.delete(maybeParse(binding, false), options);
            }
        };
    };
    var toModel = function toModel(middleware, defaultOptions, next) {
        if (!next) {
            return middleware;
        }
        return {
            get: function(binding, options) {
                var resolvedOptions = options !== null && options !== void 0 ? options : defaultOptions;
                if (middleware.get) {
                    return middleware.get(binding, resolvedOptions, next);
                }
                return next === null || next === void 0 ? void 0 : next.get(binding, resolvedOptions);
            },
            set: function(transaction, options) {
                var resolvedOptions = options !== null && options !== void 0 ? options : defaultOptions;
                if (middleware.set) {
                    return middleware.set(transaction, resolvedOptions, next);
                }
                return next === null || next === void 0 ? void 0 : next.set(transaction, resolvedOptions);
            },
            delete: function(binding, options) {
                var resolvedOptions = options !== null && options !== void 0 ? options : defaultOptions;
                if (middleware.delete) {
                    return middleware.delete(binding, resolvedOptions, next);
                }
                return next === null || next === void 0 ? void 0 : next.delete(binding, resolvedOptions);
            }
        };
    };
    var constructModelForPipeline = function constructModelForPipeline(pipeline) {
        if (pipeline.length === 0) {
            return NOOP_MODEL;
        }
        if (pipeline.length === 1) {
            return toModel(pipeline[0]);
        }
        function createModelWithOptions(options) {
            var _pipeline_reduce;
            var model = (_pipeline_reduce = pipeline.reduce(function(nextModel, middleware) {
                return toModel(middleware, options, nextModel);
            }, void 0)) !== null && _pipeline_reduce !== void 0 ? _pipeline_reduce : NOOP_MODEL;
            return model;
        }
        return {
            get: function(binding, options) {
                var _createModelWithOptions;
                return (_createModelWithOptions = createModelWithOptions(options)) === null || _createModelWithOptions === void 0 ? void 0 : _createModelWithOptions.get(binding, options);
            },
            set: function(transaction, options) {
                var _createModelWithOptions;
                return (_createModelWithOptions = createModelWithOptions(options)) === null || _createModelWithOptions === void 0 ? void 0 : _createModelWithOptions.set(transaction, options);
            },
            delete: function(binding, options) {
                var _createModelWithOptions;
                return (_createModelWithOptions = createModelWithOptions(options)) === null || _createModelWithOptions === void 0 ? void 0 : _createModelWithOptions.delete(binding, options);
            }
        };
    };
    var isExpressionNode = function isExpressionNode(x) {
        return (typeof x === "undefined" ? "undefined" : _type_of(x)) === "object" && x !== null && !Array.isArray(x) && x.__id === ExpNodeOpaqueIdentifier;
    };
    var throwError = function throwError(message, index) {
        var err = new Error("".concat(message, " at character ").concat(index));
        err.index = index;
        err.description = message;
        throw err;
    };
    var createSpanningLocation = function createSpanningLocation(start, end) {
        if (!start || !end) {
            return;
        }
        return {
            start: start.start,
            end: end.end
        };
    };
    var getMaxKeyLen = function getMaxKeyLen(obj) {
        var maxLen = 0;
        Object.keys(obj).forEach(function(key) {
            if (key.length > maxLen && Object.prototype.hasOwnProperty.call(obj, key)) {
                maxLen = key.length;
            }
        });
        return maxLen;
    };
    var binaryPrecedence = function binaryPrecedence(opVal) {
        return binaryOps[opVal] || 0;
    };
    var createBinaryExpression = function createBinaryExpression(operator, left, right, location) {
        var type;
        if (operator === "||" || operator === "&&") {
            type = "LogicalExpression";
        } else if (operator === "=") {
            type = "Assignment";
        } else if (operator === "+=" || operator === "-=" || operator === "&=" || operator === "|=") {
            type = "Modification";
        } else {
            type = "BinaryExpression";
        }
        return {
            __id: ExpNodeOpaqueIdentifier,
            type: type,
            operator: operator,
            left: left,
            right: right,
            location: location
        };
    };
    var isDecimalDigit = function isDecimalDigit(ch) {
        return ch >= 48 && ch <= 57;
    };
    var isIdentifierStart = function isIdentifierStart(ch) {
        return ch === 36 || ch === 95 || // `$` and `_`
        ch >= 65 && ch <= 90 || // A...Z
        ch >= 97 && ch <= 122;
    };
    var isIdentifierPart = function isIdentifierPart(ch) {
        return ch === 36 || ch === 95 || // `$` and `_`
        ch >= 65 && ch <= 90 || // A...Z
        ch >= 97 && ch <= 122 || // A...z
        ch >= 48 && ch <= 57;
    };
    var isModelRefStart = function isModelRefStart(ch0, ch1) {
        return ch0 === OCURL_CODE && ch1 === OCURL_CODE;
    };
    var parseExpression = function parseExpression(expr, options) {
        var _options_strict;
        var strictMode = (_options_strict = options === null || options === void 0 ? void 0 : options.strict) !== null && _options_strict !== void 0 ? _options_strict : true;
        var charAtFunc = expr.charAt;
        var charCodeAtFunc = expr.charCodeAt;
        var length = expr.length;
        var index = 0;
        var getLocation = function(startChar) {
            return {
                start: {
                    character: startChar
                },
                end: {
                    character: index
                }
            };
        };
        function exprI(i) {
            return charAtFunc.call(expr, i);
        }
        function exprICode(i) {
            return charCodeAtFunc.call(expr, i);
        }
        function gobbleObjects() {
            var attributes = [];
            var closed = false;
            var shouldDefineKey = true;
            var key;
            var value;
            var chCode;
            var startCharIndex = index;
            ++index;
            while(index < length){
                gobbleSpaces();
                chCode = exprICode(index);
                if (chCode === CCURL_CODE) {
                    if (key) {
                        throwError("A key was defined but a value was not", index);
                    }
                    index++;
                    closed = true;
                    break;
                } else if (shouldDefineKey) {
                    if (chCode !== SQUOTE_CODE && chCode !== DQUOTE_CODE) {
                        throwError("An object must start wtih a key", index);
                    }
                    key = gobbleStringLiteral();
                    gobbleSpaces();
                    if (exprICode(index) === COLON_CODE) {
                        index++;
                        shouldDefineKey = false;
                    } else {
                        throwError("A colon must follow an object key", index);
                    }
                } else {
                    value = gobbleExpression();
                    attributes.push({
                        key: key,
                        value: value
                    });
                    gobbleSpaces();
                    chCode = exprICode(index);
                    if (chCode === COMMA_CODE) {
                        index++;
                    } else if (chCode !== CCURL_CODE) {
                        throwError("Please add a comma to add another key", index);
                    }
                    shouldDefineKey = true;
                    key = void 0;
                    value = void 0;
                }
                chCode = exprICode(index);
            }
            if (!closed) {
                throwError("Unclosed brace in object", index);
            }
            return {
                __id: ExpNodeOpaqueIdentifier,
                type: "Object",
                attributes: attributes,
                location: getLocation(startCharIndex)
            };
        }
        function gobbleSpaces() {
            var ch = exprICode(index);
            while(ch === 32 || ch === 9){
                ch = exprICode(++index);
            }
        }
        function gobbleExpression() {
            var test = gobbleBinaryExpression();
            gobbleSpaces();
            var startCharIndex = index;
            if (index < length && exprICode(index) === QUMARK_CODE) {
                index++;
                var consequent = gobbleExpression();
                if (!consequent) {
                    throwError("Expected expression", index);
                }
                gobbleSpaces();
                if (exprICode(index) === COLON_CODE) {
                    index++;
                    var alternate = gobbleExpression();
                    if (!alternate) {
                        throwError("Expected expression", index);
                    }
                    return {
                        __id: ExpNodeOpaqueIdentifier,
                        type: "ConditionalExpression",
                        test: test,
                        consequent: consequent,
                        alternate: alternate,
                        location: getLocation(startCharIndex)
                    };
                }
                throwError("Expected :", index);
            }
            return test;
        }
        function gobbleBinaryOp() {
            gobbleSpaces();
            var toCheck = expr.substr(index, maxBinopLen);
            var tcLen = toCheck.length;
            while(tcLen > 0){
                if (Object.prototype.hasOwnProperty.call(binaryOps, toCheck)) {
                    index += tcLen;
                    return toCheck;
                }
                toCheck = toCheck.substr(0, --tcLen);
            }
            return false;
        }
        function gobbleBinaryExpression() {
            var node;
            var prec;
            var i;
            var left = gobbleToken();
            var biop = gobbleBinaryOp();
            if (!biop) {
                return left;
            }
            var biopInfo = {
                value: biop,
                prec: binaryPrecedence(biop)
            };
            var right = gobbleToken();
            if (!right) {
                throwError("Expected expression after ".concat(biop), index);
            }
            var stack = [
                left,
                biopInfo,
                right
            ];
            biop = gobbleBinaryOp();
            while(biop){
                prec = binaryPrecedence(biop);
                if (prec === 0) {
                    break;
                }
                biopInfo = {
                    value: biop,
                    prec: prec
                };
                while(stack.length > 2 && prec <= stack[stack.length - 2].prec){
                    right = stack.pop();
                    biop = stack.pop().value;
                    left = stack.pop();
                    node = createBinaryExpression(biop, left, right, createSpanningLocation(left.location, right.location));
                    stack.push(node);
                }
                node = gobbleToken();
                if (!node) {
                    throwError("Expected expression after ".concat(biop), index);
                }
                stack.push(biopInfo, node);
                biop = gobbleBinaryOp();
            }
            i = stack.length - 1;
            node = stack[i];
            while(i > 1){
                node = createBinaryExpression(stack[i - 1].value, stack[i - 2], node, createSpanningLocation(stack[i - 2].location, node.location));
                i -= 2;
            }
            return node;
        }
        function gobbleToken() {
            gobbleSpaces();
            var ch = exprICode(index);
            var startCharIndex = index;
            if (isDecimalDigit(ch) || ch === PERIOD_CODE) {
                return gobbleNumericLiteral();
            }
            if (ch === SQUOTE_CODE || ch === DQUOTE_CODE) {
                return gobbleStringLiteral();
            }
            if (isIdentifierStart(ch) || ch === OPAREN_CODE) {
                return gobbleVariable();
            }
            if (ch === OBRACK_CODE) {
                return gobbleArray();
            }
            if (isModelRefStart(ch, exprICode(index + 1))) {
                return gobbleModelRef();
            }
            if (ch === OCURL_CODE) {
                return gobbleObjects();
            }
            var toCheck = expr.substr(index, maxUnopLen);
            var tcLen = toCheck.length;
            while(tcLen > 0){
                if (Object.prototype.hasOwnProperty.call(unaryOps, toCheck)) {
                    index += tcLen;
                    return {
                        __id: ExpNodeOpaqueIdentifier,
                        type: "UnaryExpression",
                        operator: toCheck,
                        argument: gobbleToken(),
                        prefix: true,
                        location: getLocation(startCharIndex)
                    };
                }
                toCheck = toCheck.substr(0, --tcLen);
            }
            return false;
        }
        function gobbleNumericLiteral() {
            var num = "";
            var startCharIndex = index;
            while(isDecimalDigit(exprICode(index))){
                num += exprI(index++);
            }
            if (exprICode(index) === PERIOD_CODE) {
                num += exprI(index++);
                while(isDecimalDigit(exprICode(index))){
                    num += exprI(index++);
                }
            }
            var ch = exprI(index);
            if (ch === "e" || ch === "E") {
                num += exprI(index++);
                ch = exprI(index);
                if (ch === "+" || ch === "-") {
                    num += exprI(index++);
                }
                while(isDecimalDigit(exprICode(index))){
                    num += exprI(index++);
                }
                if (!isDecimalDigit(exprICode(index - 1))) {
                    throwError("Expected exponent (".concat(num).concat(exprI(index), ")"), index);
                }
            }
            var chCode = exprICode(index);
            if (isIdentifierStart(chCode)) {
                throwError("Variable names cannot start with a number (".concat(num).concat(exprI(index), ")"), index);
            } else if (chCode === PERIOD_CODE) {
                throwError("Unexpected period", index);
            }
            return {
                __id: ExpNodeOpaqueIdentifier,
                type: "Literal",
                value: parseFloat(num),
                raw: num,
                location: getLocation(startCharIndex)
            };
        }
        function gobbleStringLiteral() {
            var quote = exprI(index++);
            var str = "";
            var closed = false;
            var startCharIndex = index;
            while(index < length){
                var ch = exprI(index++);
                if (ch === quote) {
                    closed = true;
                    break;
                }
                if (ch !== "\\") {
                    str += ch;
                    continue;
                }
                ch = exprI(index++);
                switch(ch){
                    case "n":
                        str += "\n";
                        break;
                    case "r":
                        str += "\r";
                        break;
                    case "t":
                        str += "	";
                        break;
                    case "b":
                        str += "\b";
                        break;
                    case "f":
                        str += "\f";
                        break;
                    case "v":
                        str += "\v";
                        break;
                    default:
                }
            }
            if (!closed) {
                throwError('Unclosed quote after "'.concat(str, '"'), index);
            }
            return {
                __id: ExpNodeOpaqueIdentifier,
                type: "Literal",
                value: str,
                raw: "".concat(quote).concat(str).concat(quote),
                location: getLocation(startCharIndex)
            };
        }
        function gobbleModelRef() {
            var str = "";
            var closed = false;
            var openBraceCount = 1;
            var startCharIndex = index;
            index += 2;
            while(index < length){
                var ch = exprI(index++);
                if (ch === "}" && exprICode(index) === CCURL_CODE) {
                    index++;
                    openBraceCount--;
                    if (openBraceCount === 0) {
                        closed = true;
                        break;
                    }
                    str += "}}";
                } else if (ch === "{" && exprICode(index) === OCURL_CODE) {
                    openBraceCount++;
                    str += "{{";
                    index++;
                } else {
                    str += ch;
                }
            }
            if (!closed) {
                throwError('Unclosed brace after "'.concat(str, '"'), index);
            }
            return {
                __id: ExpNodeOpaqueIdentifier,
                type: "ModelRef",
                ref: str,
                location: getLocation(startCharIndex)
            };
        }
        function gobbleIdentifier() {
            var start = index;
            var ch = exprICode(start);
            if (isIdentifierStart(ch)) {
                index++;
            } else {
                throwError("Unexpected ".concat(exprI(index)), index);
            }
            while(index < length){
                ch = exprICode(index);
                if (isIdentifierPart(ch)) {
                    index++;
                } else {
                    break;
                }
            }
            var identifier = expr.slice(start, index);
            if (Object.prototype.hasOwnProperty.call(literals, identifier)) {
                return {
                    __id: ExpNodeOpaqueIdentifier,
                    type: "Literal",
                    value: literals[identifier],
                    raw: identifier,
                    location: getLocation(start)
                };
            }
            if (identifier === thisStr) {
                return {
                    __id: ExpNodeOpaqueIdentifier,
                    type: "ThisExpression",
                    location: getLocation(start)
                };
            }
            return {
                __id: ExpNodeOpaqueIdentifier,
                type: "Identifier",
                name: identifier,
                location: getLocation(start)
            };
        }
        function gobbleArguments(termination) {
            var args = [];
            var charIndex;
            var node;
            while(index < length){
                gobbleSpaces();
                charIndex = exprICode(index);
                if (charIndex === termination) {
                    index++;
                    break;
                }
                if (charIndex === COMMA_CODE) {
                    index++;
                    continue;
                }
                node = gobbleExpression();
                if (!node || node.type === "Compound") {
                    throwError("Expected comma", index);
                }
                args.push(node);
            }
            if (strictMode && charIndex !== termination) {
                throwError("Expected ".concat(String.fromCharCode(termination)), index);
            }
            return args;
        }
        function gobbleVariable() {
            var charIndex = exprICode(index);
            var node = charIndex === OPAREN_CODE ? gobbleGroup() : gobbleIdentifier();
            var startCharIndex = index;
            gobbleSpaces();
            charIndex = exprICode(index);
            while(charIndex === PERIOD_CODE || charIndex === OBRACK_CODE || charIndex === OPAREN_CODE){
                index++;
                if (charIndex === PERIOD_CODE) {
                    gobbleSpaces();
                    node = {
                        __id: ExpNodeOpaqueIdentifier,
                        type: "MemberExpression",
                        computed: false,
                        object: node,
                        property: gobbleIdentifier(),
                        location: getLocation(startCharIndex)
                    };
                } else if (charIndex === OBRACK_CODE) {
                    node = {
                        __id: ExpNodeOpaqueIdentifier,
                        type: "MemberExpression",
                        computed: true,
                        object: node,
                        property: gobbleExpression(),
                        location: getLocation(startCharIndex)
                    };
                    gobbleSpaces();
                    charIndex = exprICode(index);
                    if (charIndex !== CBRACK_CODE) {
                        throwError("Unclosed [", index);
                    }
                    index++;
                } else if (charIndex === OPAREN_CODE) {
                    node = {
                        __id: ExpNodeOpaqueIdentifier,
                        type: "CallExpression",
                        args: gobbleArguments(CPAREN_CODE),
                        callTarget: node,
                        location: getLocation(startCharIndex)
                    };
                }
                gobbleSpaces();
                charIndex = exprICode(index);
            }
            return node;
        }
        function gobbleGroup() {
            index++;
            var node = gobbleExpression();
            gobbleSpaces();
            if (exprICode(index) === CPAREN_CODE) {
                index++;
                return node;
            }
            throwError("Unclosed (", index);
        }
        function gobbleArray() {
            var startCharIndex = index;
            index++;
            return {
                __id: ExpNodeOpaqueIdentifier,
                type: "ArrayExpression",
                elements: gobbleArguments(CBRACK_CODE),
                location: getLocation(startCharIndex)
            };
        }
        var nodes = [];
        try {
            while(index < length){
                var chIndex = exprICode(index);
                if (chIndex === SEMCOL_CODE || chIndex === COMMA_CODE) {
                    index++;
                    continue;
                }
                var node = gobbleExpression();
                if (node) {
                    nodes.push(node);
                } else if (strictMode && index < length) {
                    throwError('Unexpected "'.concat(exprI(index), '"'), index);
                }
            }
            if (nodes.length === 1) {
                return nodes[0];
            }
            return {
                __id: ExpNodeOpaqueIdentifier,
                type: "Compound",
                body: nodes,
                location: getLocation(0)
            };
        } catch (e) {
            if (strictMode || !_instanceof(e, Error)) {
                throw e;
            }
            return {
                __id: ExpNodeOpaqueIdentifier,
                type: "Compound",
                body: nodes,
                location: getLocation(0),
                error: e
            };
        }
    };
    var isPromiseLike = function isPromiseLike(value) {
        var // Check for standard Promise constructor name
        _value_constructor;
        return value != null && (typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && typeof value.then === "function" && // Additional safeguards against false positives
        (_instanceof(value, Promise) || ((_value_constructor = value.constructor) === null || _value_constructor === void 0 ? void 0 : _value_constructor.name) === "Promise" || // Verify it has other Promise-like methods to reduce false positives
        typeof value.catch === "function" && typeof value.finally === "function");
    };
    var isAwaitable = function isAwaitable(val) {
        return isPromiseLike(val) && val[AwaitableSymbol] !== void 0;
    };
    var collateAwaitable = function collateAwaitable(promises) {
        var result = Promise.all(promises);
        return makeAwaitable(result);
    };
    var isObjectExpression = function isObjectExpression(expr) {
        if (isExpressionNode(expr)) {
            return false;
        }
        return (typeof expr === "undefined" ? "undefined" : _type_of(expr)) === "object" && expr !== null && !Array.isArray(expr) && "value" in expr;
    };
    var makePromiseAwareBinaryOp = function makePromiseAwareBinaryOp(operation) {
        return function(a, b, async) {
            if (async && (isAwaitable(a) || isAwaitable(b))) {
                return collateAwaitable([
                    Promise.resolve(a),
                    Promise.resolve(b)
                ]).awaitableThen(function(param) {
                    var _param = _sliced_to_array(param, 2), resolvedA = _param[0], resolvedB = _param[1];
                    return operation(resolvedA, resolvedB);
                });
            }
            return operation(a, b);
        };
    };
    var makePromiseAwareUnaryOp = function makePromiseAwareUnaryOp(operation) {
        return function(a, async) {
            if (async && isAwaitable(a)) {
                return a.awaitableThen(function(resolved) {
                    return operation(resolved);
                });
            }
            return operation(a);
        };
    };
    var handleConditionalBranching = function handleConditionalBranching(testValue, getTrueBranch, getFalseBranch, resolveNode, async) {
        if (async && isAwaitable(testValue)) {
            return testValue.awaitableThen(function(resolved) {
                var branch2 = resolved ? getTrueBranch() : getFalseBranch();
                var branchResult = resolveNode(branch2);
                return isAwaitable(branchResult) ? Promise.resolve(branchResult) : branchResult;
            });
        }
        var branch = testValue ? getTrueBranch() : getFalseBranch();
        return resolveNode(branch);
    };
    var parse2 = function parse2(schema) {
        var _loop = function() {
            var next = parseQueue.shift();
            if (!next) {
                return "break";
            }
            var node = next.node, path = next.path, visited = next.visited;
            Object.entries(node).forEach(function(param) {
                var _param = _sliced_to_array(param, 2), prop = _param[0], type = _param[1];
                var nestedPath = _to_consumable_array(path).concat([
                    prop
                ]);
                var nestedPathStr = nestedPath.join(".");
                if (expandedPaths.has(nestedPathStr)) {
                    throw new Error("Path has already been processed. There's either a loop somewhere or a bug");
                }
                if (visited.has(type.type)) {
                    throw new Error("Path already contained type: ".concat(type.type, ". This likely indicates a loop in the schema"));
                }
                expandedPaths.set(nestedPathStr, type);
                if (type.isArray) {
                    nestedPath.push("[]");
                }
                if (type.isRecord) {
                    nestedPath.push("{}");
                }
                if (type.type && schema[type.type]) {
                    parseQueue.push({
                        path: nestedPath,
                        node: schema[type.type],
                        visited: /* @__PURE__ */ new Set(_to_consumable_array(visited).concat([
                            type.type
                        ]))
                    });
                }
            });
        };
        var expandedPaths = /* @__PURE__ */ new Map();
        if (!schema.ROOT) {
            return expandedPaths;
        }
        var parseQueue = [
            {
                node: schema.ROOT,
                path: [],
                visited: /* @__PURE__ */ new Set()
            }
        ];
        while(parseQueue.length > 0){
            var _ret = _loop();
            if (_ret === "break") break;
        }
        return expandedPaths;
    };
    var findNextExp = function findNextExp(str) {
        var expStart = str.indexOf(DOUBLE_OPEN_CURLY);
        if (expStart === -1) {
            return void 0;
        }
        var count = 1;
        var offset = expStart + DOUBLE_OPEN_CURLY.length;
        var workingString = str.substring(expStart + DOUBLE_OPEN_CURLY.length);
        while(count > 0 && workingString.length > 0){
            var nextCloseCurly = workingString.indexOf(DOUBLE_CLOSE_CURLY);
            if (nextCloseCurly === -1) {
                break;
            }
            var nextOpenCurly = workingString.indexOf(DOUBLE_OPEN_CURLY);
            if (nextOpenCurly !== -1 && nextOpenCurly < nextCloseCurly) {
                count++;
                workingString = workingString.substring(nextOpenCurly + DOUBLE_OPEN_CURLY.length);
                offset += nextOpenCurly + DOUBLE_OPEN_CURLY.length;
            } else {
                count--;
                workingString = workingString.substring(nextCloseCurly + DOUBLE_CLOSE_CURLY.length);
                offset += nextCloseCurly + DOUBLE_CLOSE_CURLY.length;
            }
        }
        if (count !== 0) {
            throw new Error("Unbalanced {{ and }} in exp: ".concat(str));
        }
        return {
            start: expStart,
            end: offset
        };
    };
    var resolveExpressionsInString = function resolveExpressionsInString(val, param) {
        var evaluate = param.evaluate;
        if (!evaluate) {
            return val;
        }
        var expMatch = /@\[.*?\]@/;
        var newVal = val;
        var match = newVal.match(expMatch);
        while(match !== null){
            var expStrWithBrackets = match[0];
            var matchStart = newVal.indexOf(expStrWithBrackets);
            var expString = expStrWithBrackets.substr("@[".length, expStrWithBrackets.length - "@[".length - "]@".length);
            var expValue = evaluate(expString);
            if (matchStart === 0 && expStrWithBrackets === val && typeof expValue !== "string") {
                return expValue;
            }
            newVal = newVal.substr(0, matchStart) + expValue + newVal.substr(matchStart + expStrWithBrackets.length);
            match = newVal.match(expMatch);
        }
        return newVal;
    };
    var resolveDataRefsInString = function resolveDataRefsInString(val, options) {
        var model = options.model, _options_formatted = options.formatted, formatted = _options_formatted === void 0 ? true : _options_formatted;
        var workingString = resolveExpressionsInString(val, options);
        if (!model || typeof workingString !== "string" || workingString.indexOf(DOUBLE_OPEN_CURLY) === -1) {
            return workingString;
        }
        while(workingString.indexOf(DOUBLE_OPEN_CURLY) !== -1){
            var expLocation = findNextExp(workingString);
            if (!expLocation) {
                return workingString;
            }
            var start = expLocation.start, end = expLocation.end;
            var binding = workingString.substring(start + DOUBLE_OPEN_CURLY.length, end - DOUBLE_OPEN_CURLY.length).trim();
            var evaledVal = model.get(binding, {
                formatted: formatted
            });
            if (start === 0 && end === workingString.length && typeof evaledVal !== "string") {
                return evaledVal;
            }
            workingString = workingString.substr(0, start) + evaledVal + workingString.substr(end);
        }
        return workingString;
    };
    var resolveDataRefs = function resolveDataRefs(val, options) {
        return traverseObject(val, options);
    };
    var removeBindingAndChildrenFromMap = function removeBindingAndChildrenFromMap(sourceMap, binding) {
        var targetMap = new Map(sourceMap);
        var parentBinding = binding.parent();
        var property = binding.key();
        targetMap.forEach(function(_value, trackedBinding) {
            if (binding === trackedBinding || binding.contains(trackedBinding)) {
                targetMap.delete(trackedBinding);
            }
        });
        if (typeof property === "number") {
            var bindingsToRewrite = Array.from(sourceMap.keys()).filter(function(b) {
                if (parentBinding.contains(b)) {
                    var _b_relative = _sliced_to_array(b.relative(parentBinding), 1), childIndex = _b_relative[0];
                    return typeof childIndex === "number" && childIndex > property;
                }
                return false;
            }).sort();
            bindingsToRewrite.forEach(function(trackedBinding) {
                var _trackedBinding_relative = _to_array(trackedBinding.relative(parentBinding)), childIndex = _trackedBinding_relative[0], childPath = _trackedBinding_relative.slice(1);
                if (typeof childIndex === "number") {
                    var newSegments = [
                        childIndex - 1
                    ].concat(_to_consumable_array(childPath));
                    var newChildBinding = parentBinding.descendent(newSegments);
                    targetMap.set(newChildBinding, targetMap.get(trackedBinding));
                    targetMap.delete(trackedBinding);
                }
            });
        }
        return targetMap;
    };
    var hasTemplateValues = function hasTemplateValues(obj, localKey) {
        return Object.hasOwnProperty.call(obj, "template") && Array.isArray(obj === null || obj === void 0 ? void 0 : obj.template) && obj.template.length && obj.template.find(function(tmpl) {
            return tmpl.output === localKey;
        });
    };
    var hasSwitchKey = function hasSwitchKey(localKey) {
        return localKey === "staticSwitch" || localKey === "dynamicSwitch";
    };
    var hasTemplateKey = function hasTemplateKey(localKey) {
        return localKey === "template";
    };
    var getNodeID = function getNodeID(node) {
        var _node_value;
        if (!node) {
            return;
        }
        if ("value" in node && _type_of(node.value) === "object" && typeof ((_node_value = node.value) === null || _node_value === void 0 ? void 0 : _node_value.id) === "string") {
            return node.value.id;
        }
    };
    var caresAboutDataChanges = function caresAboutDataChanges(dataChanges, dependencies) {
        if (!dataChanges || !dependencies) {
            return true;
        }
        var depArray = Array.from(dependencies.values());
        var dataChangeArray = Array.from(dataChanges.values());
        return depArray.find(function(dep) {
            return !!dataChangeArray.find(function(change) {
                return change === dep || change.contains(dep) || dep.contains(change);
            });
        }) !== void 0;
    };
    var toNodeResolveOptions = function toNodeResolveOptions(resolverOptions) {
        return _object_spread_props(_object_spread({}, resolverOptions), {
            data: {
                model: resolverOptions.model,
                formatValue: function(ref, value) {
                    if (resolverOptions.formatValue) {
                        return resolverOptions.formatValue(ref, value);
                    }
                    return value;
                },
                format: function(bindingLike, value) {
                    return resolverOptions.format ? resolverOptions.format(isBinding(bindingLike) ? bindingLike : resolverOptions.parseBinding(bindingLike), value) : value;
                }
            },
            evaluate: function(exp) {
                return resolverOptions.evaluator.evaluate(exp, resolverOptions);
            }
        });
    };
    var hasSomethingToResolve = function hasSomethingToResolve(str) {
        return bindingResolveLookup(str) || expressionResolveLookup(str);
    };
    var resolveString = function resolveString(str, resolveOptions) {
        return hasSomethingToResolve(str) ? resolveDataRefs(str, {
            model: resolveOptions.data.model,
            evaluate: resolveOptions.evaluate
        }) : str;
    };
    var replaceParams = function replaceParams(message, params) {
        return message.slice().replace(ANY_CHAR_REGEX, function(keyExpr) {
            return params[keyExpr.slice(1)] || keyExpr;
        });
    };
    var isSubset = function isSubset(subset, containingSet) {
        if (subset.size > containingSet.size) return false;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = subset[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var entry = _step.value;
                if (!containingSet.has(entry)) return false;
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
    var createStatefulValidationObject = function createStatefulValidationObject(obj) {
        return {
            value: obj,
            type: obj.severity,
            state: "none",
            isBlockingNavigation: false
        };
    };
    var objectToBatchSet = function objectToBatchSet(obj) {
        var flattenedObj = flatten(obj);
        var batchTxn = [];
        Object.keys(flattenedObj).forEach(function(key) {
            batchTxn.push([
                new BindingInstance(key),
                flattenedObj[key]
            ]);
        });
        return batchTxn;
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/sorted-array@2.0.4/node_modules/sorted-array/sorted-array.js
    var require_sorted_array = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/sorted-array@2.0.4/node_modules/sorted-array/sorted-array.js": function(exports, module) {
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ts-nested-error@1.2.1/node_modules/ts-nested-error/build/nested-error.js
    var require_nested_error = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ts-nested-error@1.2.1/node_modules/ts-nested-error/build/nested-error.js": function(exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.toError = exports.NestedError = void 0;
            var NestedError4 = /*#__PURE__*/ function(Error1) {
                _inherits(_NestedError, Error1);
                function _NestedError(message) {
                    for(var _len = arguments.length, innerErrors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        innerErrors[_key - 1] = arguments[_key];
                    }
                    _class_call_check(this, _NestedError);
                    var _this;
                    _this = _call_super(this, _NestedError, [
                        message
                    ]);
                    var thisErrorReport = _NestedError.getErrorReport(_this);
                    if (innerErrors.length === 1) {
                        var innerError = toError(innerErrors[0]);
                        _this.innerErrors = [
                            innerError
                        ];
                        var errReport = _NestedError.getErrorReport(innerError);
                        _this.stack = "".concat(thisErrorReport, "\n\n======= INNER ERROR =======\n\n").concat(errReport);
                        return _possible_constructor_return(_this);
                    }
                    _this.innerErrors = innerErrors.map(function(err) {
                        return toError(err);
                    });
                    var innerErrorReports = _this.innerErrors.map(function(error, idx) {
                        var errReport = _NestedError.getErrorReport(error);
                        return "======= INNER ERROR (".concat(idx + 1, " of ").concat(innerErrors.length, ") =======\n\n").concat(errReport);
                    }).join("\n\n");
                    _this.stack = "".concat(thisErrorReport, "\n\n").concat(innerErrorReports);
                    return _this;
                }
                _create_class(_NestedError, [
                    {
                        key: "innerError",
                        get: /**
         * Provides the first `Error` of the `innerErrors` (if it exists);
         * otherwise, `null`.
         *
         * @deprecated Please shift to using the `innerErrors` (with an 's') property.
         */ function get() {
                            return this.innerErrors.length === 0 ? null : this.innerErrors[0];
                        }
                    }
                ], [
                    {
                        key: "rethrow",
                        value: /**
         * Returns the function that accepts any value that was thrown as the first argument and
         * throws it wrapped into `NestedError` or class derived from `NestedError` (provided
         * this method was called directly in the context of that dervied class constructor)
         * with the given `message`.
         * Returned function will pass accepted `Error` object directly to `NestedError`
         * as `innerErrors` by invoking `toError(err)` on it.
         *
         * You'll most likely want to use this method with promises:
         *
         * ```ts
         * userService.getPage().then(
         *     data => console.log(`Hooray! data: ${data}`),
         *     NestedError.rethrow('failed to fetch users page')
         * );
         * ```
         *
         * @param message Message to attach `NestedError` created by the returned function.
         */ function rethrow(message) {
                            var _this = this;
                            return function() {
                                for(var _len = arguments.length, errs = new Array(_len), _key = 0; _key < _len; _key++){
                                    errs[_key] = arguments[_key];
                                }
                                throw _construct(_this, [
                                    message
                                ].concat(_to_consumable_array(errs)));
                            };
                        }
                    }
                ]);
                return _NestedError;
            }(_wrap_native_super(Error));
            exports.NestedError = NestedError4;
            NestedError4.getErrorReport = typeof new Error().stack === "string" ? function(err) {
                return err.stack;
            } : function(err) {
                return "".concat(err.name, ": ").concat(err.message);
            };
            NestedError4.prototype.name = "NestedError";
            function toError(err) {
                try {
                    return _instanceof(err, Error) ? err : new Error("Value that is not an instance of Error was thrown: ".concat(err));
                } catch (e) {
                    return new Error("Failed to stringify non-instance of Error that was thrown.This is possibly due to the fact that toString() method of the valuedoesn't return a primitive value.");
                }
            }
            exports.toError = toError;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/timm@1.7.1/node_modules/timm/lib/timm.js
    var require_timm = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/timm@1.7.1/node_modules/timm/lib/timm.js": function(exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.clone = clone2;
            exports.addLast = addLast2;
            exports.addFirst = addFirst;
            exports.removeLast = removeLast;
            exports.removeFirst = removeFirst;
            exports.insert = insert;
            exports.removeAt = removeAt2;
            exports.replaceAt = replaceAt;
            exports.getIn = getIn;
            exports.set = set2;
            exports.setIn = setIn8;
            exports.update = update;
            exports.updateIn = updateIn;
            exports.merge = merge;
            exports.mergeDeep = mergeDeep;
            exports.mergeIn = mergeIn;
            exports.omit = omit3;
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
            function clone2(obj0) {
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
                return o != null && (typeof o === "undefined" ? "undefined" : _type_of(o)) === "object";
            }
            function addLast2(array, val) {
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
            function removeAt2(array, idx) {
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
            function set2(obj0, key, val) {
                var obj = obj0;
                if (obj == null) obj = typeof key === "number" ? [] : {};
                if (obj[key] === val) return obj;
                var obj2 = clone2(obj);
                obj2[key] = val;
                return obj2;
            }
            function setIn8(obj, path, val) {
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
                return set2(obj, key, newValue);
            }
            function update(obj, key, fnUpdate) {
                var prevVal = obj == null ? void 0 : obj[key];
                var nextVal = fnUpdate(prevVal);
                return set2(obj, key, nextVal);
            }
            function updateIn(obj, path, fnUpdate) {
                var prevVal = getIn(obj, path);
                var nextVal = fnUpdate(prevVal);
                return setIn8(obj, path, nextVal);
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
                return setIn8(a, path, nextVal);
            }
            function omit3(obj, attrs) {
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
                            out = clone2(out);
                        }
                        out[key] = nextVal;
                    }
                }
                return out;
            }
            var timm = {
                clone: clone2,
                addLast: addLast2,
                addFirst: addFirst,
                removeLast: removeLast,
                removeFirst: removeFirst,
                insert: insert,
                removeAt: removeAt2,
                replaceAt: replaceAt,
                getIn: getIn,
                set: set2,
                setIn: setIn8,
                update: update,
                updateIn: updateIn,
                merge: merge,
                mergeDeep: mergeDeep,
                mergeIn: mergeIn,
                omit: omit3,
                addDefaults: addDefaults
            };
            var _default = timm;
            exports.default = _default;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/p-defer@3.0.0/node_modules/p-defer/index.js
    var require_p_defer = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/p-defer@3.0.0/node_modules/p-defer/index.js": function(exports, module) {
            "use strict";
            var pDefer = function() {
                var deferred2 = {};
                deferred2.promise = new Promise(function(resolve, reject) {
                    deferred2.resolve = resolve;
                    deferred2.reject = reject;
                });
                return deferred2;
            };
            module.exports = pDefer;
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/reference-assets/core/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        ReferenceAssetsPlugin: function() {
            return ReferenceAssetsPlugin;
        },
        actionTransform: function() {
            return actionTransform;
        },
        chatMessageTransform: function() {
            return chatMessageTransform;
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
        },
        transform: function() {
            return transform2;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/reference-assets/core/src/assets/input/transform.ts
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+partial-match-registry@0.0.0/node_modules/@player-ui/partial-match-registry/dist/index.mjs
    var import_sorted_array = __toESM(require_sorted_array(), 1);
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/reference-assets/core/src/assets/info/transform.ts
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/reference-assets/core/src/assets/image/transform.ts
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/reference-assets/core/src/assets/choice/transform.ts
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
                            var t2 = this.taps[insertionIndex - 1];
                            if (beforeSet.has(t2.name)) {
                                beforeSet.delete(t2.name);
                            }
                            if (t2.before && equalToOrIn(tap.name, t2.before)) {
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
                    this.taps = this.taps.filter(function(t2) {
                        return t2.key !== tap.key;
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
                        this.taps.forEach(function(t2) {
                            callTap(t2, args, ctx);
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
        function SyncBailHook() {
            _class_call_check(this, SyncBailHook);
            return _call_super(this, SyncBailHook, arguments);
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
    var AsyncSeriesBailHook = /*#__PURE__*/ function(Hook) {
        _inherits(AsyncSeriesBailHook, Hook);
        function AsyncSeriesBailHook() {
            _class_call_check(this, AsyncSeriesBailHook);
            return _call_super(this, AsyncSeriesBailHook, arguments);
        }
        _create_class(AsyncSeriesBailHook, [
            {
                key: "call",
                value: function call() {
                    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                        args[_key] = arguments[_key];
                    }
                    return _async_to_generator(function() {
                        var _this_interceptions, ctx, tapIndex, rtn, e;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    ctx = {};
                                    (_this_interceptions = this.interceptions).call.apply(_this_interceptions, [
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
                                    if (!(tapIndex < this.taps.length)) return [
                                        3,
                                        5
                                    ];
                                    return [
                                        4,
                                        callTap(this.taps[tapIndex], args, ctx)
                                    ];
                                case 3:
                                    rtn = _state.sent();
                                    if (rtn !== void 0) {
                                        this.interceptions.result(rtn);
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
                                    this.interceptions.error(e);
                                    throw e;
                                case 7:
                                    this.interceptions.done();
                                    return [
                                        2
                                    ];
                            }
                        });
                    }).call(this);
                }
            }
        ]);
        return AsyncSeriesBailHook;
    }(Hook);
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+player@0.0.0/node_modules/@player-ui/player/dist/index.mjs
    var import_ts_nested_error = __toESM(require_nested_error(), 1);
    var import_ts_nested_error2 = __toESM(require_nested_error(), 1);
    var import_timm = __toESM(require_timm(), 1);
    var import_ts_nested_error3 = __toESM(require_nested_error(), 1);
    var import_timm2 = __toESM(require_timm(), 1);
    var import_timm3 = __toESM(require_timm(), 1);
    var import_timm4 = __toESM(require_timm(), 1);
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/dequal@2.0.3/node_modules/dequal/dist/index.mjs
    var has = Object.prototype.hasOwnProperty;
    function dequal(foo, bar) {
        var ctor, len, tmp;
        if (foo === bar) return true;
        if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
            if (ctor === Date) return foo.getTime() === bar.getTime();
            if (ctor === RegExp) return foo.toString() === bar.toString();
            if (ctor === Array) {
                if ((len = foo.length) === bar.length) {
                    while(len-- && dequal(foo[len], bar[len]));
                }
                return len === -1;
            }
            if (ctor === Set) {
                if (foo.size !== bar.size) {
                    return false;
                }
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = foo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        len = _step.value;
                        tmp = len;
                        if (tmp && (typeof tmp === "undefined" ? "undefined" : _type_of(tmp)) === "object") {
                            tmp = find(bar, tmp);
                            if (!tmp) return false;
                        }
                        if (!bar.has(tmp)) return false;
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
            }
            if (ctor === Map) {
                if (foo.size !== bar.size) {
                    return false;
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = foo[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        len = _step1.value;
                        tmp = len[0];
                        if (tmp && (typeof tmp === "undefined" ? "undefined" : _type_of(tmp)) === "object") {
                            tmp = find(bar, tmp);
                            if (!tmp) return false;
                        }
                        if (!dequal(len[1], bar.get(tmp))) {
                            return false;
                        }
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
                return true;
            }
            if (ctor === ArrayBuffer) {
                foo = new Uint8Array(foo);
                bar = new Uint8Array(bar);
            } else if (ctor === DataView) {
                if ((len = foo.byteLength) === bar.byteLength) {
                    while(len-- && foo.getInt8(len) === bar.getInt8(len));
                }
                return len === -1;
            }
            if (ArrayBuffer.isView(foo)) {
                if ((len = foo.byteLength) === bar.byteLength) {
                    while(len-- && foo[len] === bar[len]);
                }
                return len === -1;
            }
            if (!ctor || (typeof foo === "undefined" ? "undefined" : _type_of(foo)) === "object") {
                len = 0;
                for(ctor in foo){
                    if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                    if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor])) return false;
                }
                return Object.keys(bar).length === len;
            }
        }
        return foo !== foo && bar !== bar;
    }
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+player@0.0.0/node_modules/@player-ui/player/dist/index.mjs
    var import_timm5 = __toESM(require_timm(), 1);
    var import_timm6 = __toESM(require_timm(), 1);
    var import_timm7 = __toESM(require_timm(), 1);
    var import_timm8 = __toESM(require_timm(), 1);
    var import_p_defer = __toESM(require_p_defer(), 1);
    var import_queue_microtask = __toESM(require_queue_microtask(), 1);
    var import_p_defer2 = __toESM(require_p_defer(), 1);
    var import_timm9 = __toESM(require_timm(), 1);
    var import_queue_microtask2 = __toESM(require_queue_microtask(), 1);
    var __defProp2 = Object.defineProperty;
    var __export2 = function(target, all) {
        for(var name in all)__defProp2(target, name, {
            get: all[name],
            enumerable: true
        });
    };
    var toValue = function(value) {
        return {
            name: "Value",
            value: value
        };
    };
    var toExpression = function(value) {
        return {
            name: "Expression",
            value: value
        };
    };
    var toPath = function(path) {
        return {
            name: "PathNode",
            path: path
        };
    };
    var toQuery = function(key, value) {
        return {
            name: "Query",
            key: key,
            value: value
        };
    };
    var toConcatenatedNode = function(values) {
        if (values.length === 1) {
            return values[0];
        }
        return {
            name: "Concatenated",
            value: values
        };
    };
    var SEGMENT_SEPARATOR = ".";
    var OPEN_CURL = "{";
    var CLOSE_CURL = "}";
    var OPEN_BRACKET = "[";
    var CLOSE_BRACKET = "]";
    var EQUALS = "=";
    var SINGLE_QUOTE = "'";
    var DOUBLE_QUOTE = '"';
    var BACK_TICK = "`";
    var isIdentifierChar = function(char) {
        if (!char) {
            return false;
        }
        var charCode = char.charCodeAt(0);
        var matches = charCode === 32 || // ' '
        charCode === 34 || // "
        charCode === 39 || // '
        charCode === 40 || // (
        charCode === 41 || // )
        charCode === 42 || // *
        charCode === 46 || // .
        charCode === 61 || // =
        charCode === 91 || // [
        charCode === 93 || // ]
        charCode === 96 || // `
        charCode === 123 || // {
        charCode === 125;
        return !matches;
    };
    var parse = function(path) {
        var index = 1;
        var ch = path.charAt(0);
        var next = function(expected) {
            if (expected && ch !== expected) {
                throw new Error("Expected char: ".concat(expected, " but got: ").concat(ch));
            }
            ch = path.charAt(index);
            index += 1;
            return ch;
        };
        var whitespace = function() {
            while(ch === " "){
                next();
            }
        };
        var identifier = function() {
            var allowBoolValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            if (!isIdentifierChar(ch)) {
                return;
            }
            var value = ch;
            while(next()){
                if (!isIdentifierChar(ch)) {
                    break;
                }
                value += ch;
            }
            if (allowBoolValue) {
                if (value === "true") {
                    return toValue(true);
                }
                if (value === "false") {
                    return toValue(false);
                }
            }
            if (value) {
                var maybeNumber = Number(value);
                value = isNaN(maybeNumber) ? value : maybeNumber;
                return toValue(value);
            }
        };
        var expression = function() {
            if (ch === BACK_TICK) {
                next(BACK_TICK);
                var exp = ch;
                while(next()){
                    if (ch === BACK_TICK) {
                        break;
                    }
                    exp += ch;
                }
                next(BACK_TICK);
                if (exp) {
                    return toExpression(exp);
                }
            }
        };
        var regex = function(match) {
            if (!(ch === null || ch === void 0 ? void 0 : ch.match(match))) {
                return;
            }
            var value = ch;
            while(next()){
                if (!(ch === null || ch === void 0 ? void 0 : ch.match(match))) {
                    break;
                }
                value += ch;
            }
            if (value) {
                return toValue(value);
            }
        };
        var nestedPath = function() {
            if (ch === OPEN_CURL) {
                next(OPEN_CURL);
                next(OPEN_CURL);
                var modelRef = parsePath();
                next(CLOSE_CURL);
                next(CLOSE_CURL);
                return modelRef;
            }
        };
        var simpleSegment = function() {
            var allowBoolValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            var _nestedPath, _ref;
            return (_ref = (_nestedPath = nestedPath()) !== null && _nestedPath !== void 0 ? _nestedPath : expression()) !== null && _ref !== void 0 ? _ref : identifier(allowBoolValue);
        };
        var segment = function() {
            var segments = [];
            var nextSegment = simpleSegment();
            while(nextSegment !== void 0){
                segments.push(nextSegment);
                nextSegment = simpleSegment();
            }
            if (segments.length === 0) {
                return void 0;
            }
            return toConcatenatedNode(segments);
        };
        var optionallyQuotedSegment = function() {
            var allowBoolValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
            whitespace();
            if (ch === SINGLE_QUOTE || ch === DOUBLE_QUOTE) {
                var singleQuote = ch === SINGLE_QUOTE;
                next(singleQuote ? SINGLE_QUOTE : DOUBLE_QUOTE);
                var id = regex(/[^'"]+/);
                next(singleQuote ? SINGLE_QUOTE : DOUBLE_QUOTE);
                return id;
            }
            return simpleSegment(allowBoolValue);
        };
        var equals = function() {
            if (ch !== EQUALS) {
                return false;
            }
            while(ch === EQUALS){
                next();
            }
            return true;
        };
        var parseBracket = function() {
            if (ch === OPEN_BRACKET) {
                next(OPEN_BRACKET);
                whitespace();
                var value = optionallyQuotedSegment();
                if (value) {
                    whitespace();
                    if (equals()) {
                        whitespace();
                        var second = optionallyQuotedSegment(true);
                        value = toQuery(value, second);
                        whitespace();
                    }
                } else {
                    throw new Error("Expected identifier");
                }
                if (value) {
                    next(CLOSE_BRACKET);
                }
                return value;
            }
        };
        var parseSegmentAndBrackets = function() {
            var parsed = [];
            var firstSegment = segment();
            if (firstSegment) {
                parsed.push(firstSegment);
                var bracketSegment = parseBracket();
                if ((bracketSegment === null || bracketSegment === void 0 ? void 0 : bracketSegment.name) === "Value") {
                    var maybeNumber = Number(bracketSegment.value);
                    bracketSegment.value = isNaN(maybeNumber) || String(maybeNumber) !== bracketSegment.value ? bracketSegment.value : maybeNumber;
                }
                while(bracketSegment !== void 0){
                    parsed.push(bracketSegment);
                    bracketSegment = parseBracket();
                }
            }
            return parsed;
        };
        var parsePath = function() {
            var parts = [];
            var nextSegment = parseSegmentAndBrackets();
            while(nextSegment !== void 0){
                var _parts;
                (_parts = parts).push.apply(_parts, _to_consumable_array(nextSegment));
                if (!ch || ch === CLOSE_CURL) {
                    break;
                }
                if (nextSegment.length === 0 && ch) {
                    throw new Error("Unexpected character: ".concat(ch));
                }
                next(SEGMENT_SEPARATOR);
                nextSegment = parseSegmentAndBrackets();
            }
            return toPath(parts);
        };
        try {
            var result = parsePath();
            return {
                status: true,
                path: result
            };
        } catch (e) {
            return {
                status: false,
                error: e.message
            };
        }
    };
    var BindingInstance = /*#__PURE__*/ function() {
        function _BindingInstance(raw) {
            var factory = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function(rawBinding) {
                return new _BindingInstance(rawBinding);
            };
            _class_call_check(this, _BindingInstance);
            var split = Array.isArray(raw) ? raw : raw.split(".");
            this.split = split.map(function(segment) {
                if (typeof segment === "number") {
                    return segment;
                }
                var tryNum = Number(segment);
                return isNaN(tryNum) || String(tryNum) !== segment ? segment : tryNum;
            });
            Object.freeze(this.split);
            this.joined = this.split.join(".");
            this.factory = factory;
        }
        _create_class(_BindingInstance, [
            {
                key: "asArray",
                value: function asArray() {
                    return this.split;
                }
            },
            {
                key: "asString",
                value: function asString() {
                    return this.joined;
                }
            },
            {
                /**
     * Check to see if the given binding is a sub-path of the current one
     */ key: "contains",
                value: function contains(binding) {
                    var bindingAsArray = binding.asArray();
                    if (bindingAsArray.length < this.split.length) {
                        return false;
                    }
                    for(var i = 0; i < this.split.length; i++){
                        if (this.split[i] !== bindingAsArray[i]) {
                            return false;
                        }
                    }
                    return true;
                }
            },
            {
                key: "relative",
                value: function relative(binding) {
                    return this.asArray().slice(binding.asArray().length);
                }
            },
            {
                key: "parent",
                value: function parent() {
                    return this.factory(this.split.slice(0, -1));
                }
            },
            {
                key: "key",
                value: function key() {
                    return this.split[this.split.length - 1];
                }
            },
            {
                /**
     * This is a utility method to get a binding that is a descendent of this binding
     *
     * @param relative - The relative path to descend to
     */ key: "descendent",
                value: function descendent(relative) {
                    var descendentSegments = getBindingSegments(relative);
                    return this.factory(this.split.concat(descendentSegments));
                }
            }
        ]);
        return _BindingInstance;
    }();
    function resolveBindingAST(bindingPathNode, options, hooks) {
        var context = {
            updates: {},
            path: []
        };
        function getValueForNode(node) {
            if (node.name === "Value") {
                return node.value;
            }
            if (node.name === "PathNode") {
                var nestedResolvedValue = resolveBindingAST(node, options);
                if (nestedResolvedValue.updates) {
                    context.updates = _object_spread({}, context.updates, nestedResolvedValue.updates);
                }
                try {
                    return options.convertToPath(options.getValue(nestedResolvedValue.path));
                } catch (e) {
                    throw new import_ts_nested_error2.NestedError("Unable to resolve path segment: ".concat(nestedResolvedValue.path), e);
                }
            }
            if (node.name === "Expression") {
                try {
                    var actualValue = options.evaluate(node.value);
                    return options.convertToPath(actualValue);
                } catch (e) {
                    throw new import_ts_nested_error2.NestedError("Unable to resolve path: ".concat(node.value), e);
                }
            }
            throw new Error("Unable to resolve value for node: ".concat(node.name));
        }
        function appendPathSegments(segment) {
            if (typeof segment === "string" && segment.indexOf(".") > -1) {
                segment.split(".").forEach(function(i) {
                    context.path.push(maybeConvertToNum(i));
                });
            } else {
                context.path.push(segment);
            }
        }
        function resolveNode(_node) {
            var _hooks_beforeResolveNode_call;
            var resolvedNode = (_hooks_beforeResolveNode_call = hooks === null || hooks === void 0 ? void 0 : hooks.beforeResolveNode.call(_node, _object_spread({}, context, options))) !== null && _hooks_beforeResolveNode_call !== void 0 ? _hooks_beforeResolveNode_call : _node;
            switch(resolvedNode.name){
                case "Expression":
                case "PathNode":
                    appendPathSegments(getValueForNode(resolvedNode));
                    break;
                case "Value":
                    appendPathSegments(typeof resolvedNode.value === "boolean" ? String(resolvedNode.value) : resolvedNode.value);
                    break;
                case "Query":
                    {
                        var _options_getValue;
                        var objToQuery = (_options_getValue = options.getValue(context.path)) !== null && _options_getValue !== void 0 ? _options_getValue : [];
                        var key = resolvedNode.key, value = resolvedNode.value;
                        var resolvedKey = getValueForNode(key);
                        var resolvedValue = value && getValueForNode(value);
                        var index = findInArray(objToQuery, resolvedKey, resolvedValue);
                        if (index === void 0 || index === -1) {
                            context.updates[_to_consumable_array(context.path).concat([
                                objToQuery.length,
                                resolvedKey
                            ]).join(".")] = resolvedValue;
                            context.path.push(objToQuery.length);
                        } else {
                            context.path.push(index);
                        }
                        break;
                    }
                case "Concatenated":
                    context.path.push(resolvedNode.value.map(getValueForNode).join(""));
                    break;
                default:
                    throw new Error("Unsupported node type: ".concat(resolvedNode.name));
            }
        }
        bindingPathNode.path.forEach(resolveNode);
        var _context_updates;
        return {
            path: context.path,
            updates: Object.keys((_context_updates = context.updates) !== null && _context_updates !== void 0 ? _context_updates : {}).length > 0 ? context.updates : void 0
        };
    }
    var BINDING_BRACKETS_REGEX = /[\s()*=`{}'"[\]]/;
    var LAZY_BINDING_REGEX = /^[^.]+(\..+)*$/;
    var DEFAULT_OPTIONS = {
        get: function() {
            throw new Error("Not Implemented");
        },
        set: function() {
            throw new Error("Not Implemented");
        },
        evaluate: function() {
            throw new Error("Not Implemented");
        }
    };
    var BindingParser = /*#__PURE__*/ function() {
        function BindingParser(options) {
            _class_call_check(this, BindingParser);
            this.hooks = {
                skipOptimization: new SyncBailHook(),
                beforeResolveNode: new SyncWaterfallHook()
            };
            this.parserOptions = _object_spread({}, DEFAULT_OPTIONS, options);
            this.cache = {};
            this.parseCache = {};
            this.parse = this.parse.bind(this);
        }
        _create_class(BindingParser, [
            {
                /**
     * Takes a binding path, parses it, and returns an equivalent, normalized
     * representation of that path.
     */ key: "normalizePath",
                value: function normalizePath(path, resolveOptions) {
                    if (!BINDING_BRACKETS_REGEX.test(path) && LAZY_BINDING_REGEX.test(path) && this.hooks.skipOptimization.call(path) !== true) {
                        return {
                            path: path.split("."),
                            updates: void 0
                        };
                    }
                    var _this_parseCache_path;
                    var ast = (_this_parseCache_path = this.parseCache[path]) !== null && _this_parseCache_path !== void 0 ? _this_parseCache_path : parse(path);
                    this.parseCache[path] = ast;
                    if ((typeof ast === "undefined" ? "undefined" : _type_of(ast)) !== "object" || !(ast === null || ast === void 0 ? void 0 : ast.status)) {
                        var _ast_error;
                        throw new TypeError('Cannot normalize path "'.concat(path, '": ').concat((_ast_error = ast === null || ast === void 0 ? void 0 : ast.error) !== null && _ast_error !== void 0 ? _ast_error : "Unknown Error."));
                    }
                    try {
                        return resolveBindingAST(ast.path, resolveOptions, this.hooks);
                    } catch (e) {
                        throw new import_ts_nested_error.NestedError("Cannot resolve binding: ".concat(path), e);
                    }
                }
            },
            {
                key: "getBindingForNormalizedResult",
                value: function getBindingForNormalizedResult(normalized) {
                    var normalizedStr = normalized.path.join(".");
                    if (this.cache[normalizedStr]) {
                        return this.cache[normalizedStr];
                    }
                    var created = new BindingInstance(normalizedStr === "" ? [] : normalized.path, this.parse);
                    this.cache[normalizedStr] = created;
                    return created;
                }
            },
            {
                key: "parse",
                value: function parse(rawBinding) {
                    var _this = this;
                    var overrides = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                    if (isBinding(rawBinding)) {
                        return rawBinding;
                    }
                    var options = _object_spread({}, this.parserOptions, overrides);
                    var updates = {};
                    var joined = Array.isArray(rawBinding) ? rawBinding.join(".") : String(rawBinding);
                    var normalizeConfig = {
                        getValue: function(path) {
                            var normalized2 = _this.normalizePath(path.join("."), normalizeConfig);
                            return options.get(_this.getBindingForNormalizedResult(normalized2));
                        },
                        evaluate: function(exp) {
                            return options.evaluate(exp);
                        },
                        convertToPath: function(path) {
                            if (path === void 0) {
                                throw new Error("Attempted to convert undefined value to binding path");
                            }
                            if (typeof path !== "string" && typeof path !== "number" && typeof path !== "boolean") {
                                throw new Error("Attempting to convert ".concat(typeof path === "undefined" ? "undefined" : _type_of(path), " to a binding path."));
                            }
                            var normalized2 = _this.normalizePath(String(path), normalizeConfig);
                            if (normalized2.updates) {
                                updates = _object_spread({}, updates, normalized2.updates);
                            }
                            var joinedNormalizedPath = normalized2.path.join(".");
                            if (joinedNormalizedPath === "") {
                                throw new Error("Nested path resolved to an empty path");
                            }
                            return joinedNormalizedPath;
                        }
                    };
                    var normalized = this.normalizePath(joined, normalizeConfig);
                    if (normalized.updates) {
                        updates = _object_spread({}, updates, normalized.updates);
                    }
                    var updateKeys = Object.keys(updates);
                    if (!options.readOnly && updateKeys.length > 0) {
                        var updateTransaction = updateKeys.map(function(updatedBinding) {
                            return [
                                _this.parse(updatedBinding),
                                updates[updatedBinding]
                            ];
                        });
                        options.set(updateTransaction);
                    }
                    return this.getBindingForNormalizedResult(normalized);
                }
            }
        ]);
        return BindingParser;
    }();
    var DependencyTracker = /*#__PURE__*/ function() {
        function DependencyTracker() {
            _class_call_check(this, DependencyTracker);
            this.readDeps = /* @__PURE__ */ new Set();
            this.writeDeps = /* @__PURE__ */ new Set();
            this.namedDependencySets = {};
            this.namedSet = "core";
            this.createSubset("core");
            this.createSubset("children");
        }
        _create_class(DependencyTracker, [
            {
                key: "createSubset",
                value: function createSubset(name) {
                    var force = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                    if (force || !this.namedDependencySets[name]) {
                        this.namedDependencySets[name] = {
                            readDeps: /* @__PURE__ */ new Set(),
                            writeDeps: /* @__PURE__ */ new Set()
                        };
                    }
                }
            },
            {
                /** Grab all of the bindings that this depended on */ key: "getDependencies",
                value: function getDependencies(name) {
                    if (name !== void 0) {
                        var _this_namedDependencySets_name, _this_namedDependencySets;
                        var _this_namedDependencySets_name_readDeps;
                        return (_this_namedDependencySets_name_readDeps = (_this_namedDependencySets = this.namedDependencySets) === null || _this_namedDependencySets === void 0 ? void 0 : (_this_namedDependencySets_name = _this_namedDependencySets[name]) === null || _this_namedDependencySets_name === void 0 ? void 0 : _this_namedDependencySets_name.readDeps) !== null && _this_namedDependencySets_name_readDeps !== void 0 ? _this_namedDependencySets_name_readDeps : /* @__PURE__ */ new Set();
                    }
                    return this.readDeps;
                }
            },
            {
                key: "trackSubset",
                value: function trackSubset(name) {
                    this.createSubset(name);
                    this.namedSet = name;
                }
            },
            {
                key: "trackDefault",
                value: function trackDefault() {
                    this.namedSet = "core";
                }
            },
            {
                /** Grab all of the bindings this wrote to */ key: "getModified",
                value: function getModified(name) {
                    if (name !== void 0) {
                        var _this_namedDependencySets_name, _this_namedDependencySets;
                        var _this_namedDependencySets_name_writeDeps;
                        return (_this_namedDependencySets_name_writeDeps = (_this_namedDependencySets = this.namedDependencySets) === null || _this_namedDependencySets === void 0 ? void 0 : (_this_namedDependencySets_name = _this_namedDependencySets[name]) === null || _this_namedDependencySets_name === void 0 ? void 0 : _this_namedDependencySets_name.writeDeps) !== null && _this_namedDependencySets_name_writeDeps !== void 0 ? _this_namedDependencySets_name_writeDeps : /* @__PURE__ */ new Set();
                    }
                    return this.writeDeps;
                }
            },
            {
                /**
     * Check to see if the dataModel has read the value at the given binding
     *
     * @param binding - The binding you want to check for
     */ key: "readsBinding",
                value: function readsBinding(binding) {
                    return this.readDeps.has(binding);
                }
            },
            {
                /**
     * Check to see if the dataModel has written to the binding
     */ key: "writesBinding",
                value: function writesBinding(binding) {
                    return this.writeDeps.has(binding);
                }
            },
            {
                /** Reset all tracking of dependencies */ key: "reset",
                value: function reset() {
                    this.readDeps = /* @__PURE__ */ new Set();
                    this.writeDeps = /* @__PURE__ */ new Set();
                    this.namedDependencySets = {};
                    this.namedSet = "core";
                    this.createSubset("core", true);
                    this.createSubset("children", true);
                }
            },
            {
                key: "addReadDep",
                value: function addReadDep(binding) {
                    var namedSet = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.namedSet;
                    if (namedSet) {
                        var _this_namedDependencySets_namedSet, _this_namedDependencySets;
                        (_this_namedDependencySets = this.namedDependencySets) === null || _this_namedDependencySets === void 0 ? void 0 : (_this_namedDependencySets_namedSet = _this_namedDependencySets[namedSet]) === null || _this_namedDependencySets_namedSet === void 0 ? void 0 : _this_namedDependencySets_namedSet.readDeps.add(binding);
                    }
                    this.readDeps.add(binding);
                }
            },
            {
                key: "addWriteDep",
                value: function addWriteDep(binding) {
                    var namedSet = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.namedSet;
                    if (namedSet) {
                        var _this_namedDependencySets_namedSet, _this_namedDependencySets;
                        (_this_namedDependencySets = this.namedDependencySets) === null || _this_namedDependencySets === void 0 ? void 0 : (_this_namedDependencySets_namedSet = _this_namedDependencySets[namedSet]) === null || _this_namedDependencySets_namedSet === void 0 ? void 0 : _this_namedDependencySets_namedSet.writeDeps.add(binding);
                    }
                    this.writeDeps.add(binding);
                }
            },
            {
                key: "addChildReadDep",
                value: function addChildReadDep(binding) {
                    this.addReadDep(binding, "children");
                }
            }
        ]);
        return DependencyTracker;
    }();
    var DependencyModel = /*#__PURE__*/ function(DependencyTracker) {
        _inherits(DependencyModel, DependencyTracker);
        function DependencyModel(rootModel) {
            _class_call_check(this, DependencyModel);
            var _this;
            _this = _call_super(this, DependencyModel);
            _this.rootModel = rootModel;
            _this.set = _this.set.bind(_this);
            _this.get = _this.get.bind(_this);
            return _this;
        }
        _create_class(DependencyModel, [
            {
                key: "set",
                value: function set(transaction, options) {
                    var _this = this;
                    transaction.forEach(function(param) {
                        var _param = _sliced_to_array(param, 1), binding = _param[0];
                        return _this.addWriteDep(binding);
                    });
                    return this.rootModel.set(transaction, options);
                }
            },
            {
                key: "get",
                value: function get(binding, options) {
                    this.addReadDep(binding);
                    return this.rootModel.get(binding, options);
                }
            },
            {
                key: "delete",
                value: function _delete(binding, options) {
                    this.addWriteDep(binding);
                    return this.rootModel.delete(binding, options);
                }
            }
        ]);
        return DependencyModel;
    }(DependencyTracker);
    var NOOPDataModel = /*#__PURE__*/ function() {
        function NOOPDataModel() {
            _class_call_check(this, NOOPDataModel);
        }
        _create_class(NOOPDataModel, [
            {
                key: "get",
                value: function get() {
                    return void 0;
                }
            },
            {
                key: "set",
                value: function set() {
                    return [];
                }
            },
            {
                key: "delete",
                value: function _delete() {}
            }
        ]);
        return NOOPDataModel;
    }();
    var NOOP_MODEL = new NOOPDataModel();
    var ROOT_BINDING = new BindingInstance([]);
    var PipelinedDataModel = /*#__PURE__*/ function() {
        function PipelinedDataModel() {
            var pipeline = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            _class_call_check(this, PipelinedDataModel);
            this.hooks = {
                onSet: new SyncHook()
            };
            this.pipeline = pipeline;
            this.effectiveDataModel = constructModelForPipeline(this.pipeline);
        }
        _create_class(PipelinedDataModel, [
            {
                key: "setMiddleware",
                value: function setMiddleware(handlers) {
                    this.pipeline = handlers;
                    this.effectiveDataModel = constructModelForPipeline(handlers);
                }
            },
            {
                key: "addMiddleware",
                value: function addMiddleware(handler) {
                    this.pipeline = _to_consumable_array(this.pipeline).concat([
                        handler
                    ]);
                    this.effectiveDataModel = constructModelForPipeline(this.pipeline);
                }
            },
            {
                key: "reset",
                value: function reset() {
                    var model = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    this.pipeline.forEach(function(middleware) {
                        if ("reset" in middleware) {
                            var _middleware_reset;
                            (_middleware_reset = middleware.reset) === null || _middleware_reset === void 0 ? void 0 : _middleware_reset.call(middleware);
                        }
                    });
                    this.set([
                        [
                            ROOT_BINDING,
                            model
                        ]
                    ]);
                }
            },
            {
                key: "set",
                value: function set(transaction, options) {
                    var appliedTransaction = this.effectiveDataModel.set(transaction, options);
                    this.hooks.onSet.call(transaction);
                    return appliedTransaction;
                }
            },
            {
                key: "get",
                value: function get(binding, options) {
                    return this.effectiveDataModel.get(binding, options);
                }
            },
            {
                key: "delete",
                value: function _delete(binding, options) {
                    return this.effectiveDataModel.delete(binding, options);
                }
            }
        ]);
        return PipelinedDataModel;
    }();
    var LocalModel = /*#__PURE__*/ function() {
        function LocalModel() {
            var model = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            _class_call_check(this, LocalModel);
            this.model = model;
            this.get = this.get.bind(this);
            this.set = this.set.bind(this);
        }
        _create_class(LocalModel, [
            {
                key: "reset",
                value: function reset() {
                    var model = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
                    this.model = model;
                }
            },
            {
                key: "get",
                value: function get(binding) {
                    if (!binding || !binding.asString()) {
                        return this.model;
                    }
                    return dlv_es_default(this.model, binding.asArray());
                }
            },
            {
                key: "set",
                value: function set(transaction) {
                    var _this = this;
                    var effectiveOperations = [];
                    transaction.forEach(function(param) {
                        var _param = _sliced_to_array(param, 2), binding = _param[0], value = _param[1];
                        var oldValue = _this.get(binding);
                        _this.model = (0, import_timm.setIn)(_this.model, binding.asArray(), value);
                        effectiveOperations.push({
                            binding: binding,
                            oldValue: oldValue,
                            newValue: value
                        });
                    });
                    return effectiveOperations;
                }
            },
            {
                key: "delete",
                value: function _delete(binding) {
                    var parentBinding = binding.parent();
                    if (parentBinding) {
                        var parentValue = this.get(parentBinding);
                        if (parentValue !== void 0) {
                            if (Array.isArray(parentValue)) {
                                this.model = (0, import_timm.setIn)(this.model, parentBinding.asArray(), (0, import_timm.removeAt)(parentValue, binding.key()));
                            } else {
                                this.model = (0, import_timm.setIn)(this.model, parentBinding.asArray(), (0, import_timm.omit)(parentValue, binding.key()));
                            }
                        }
                    }
                }
            }
        ]);
        return LocalModel;
    }();
    var ExpNodeOpaqueIdentifier = Symbol("Expression Node ID");
    var PERIOD_CODE = 46;
    var COMMA_CODE = 44;
    var SQUOTE_CODE = 39;
    var DQUOTE_CODE = 34;
    var OPAREN_CODE = 40;
    var CPAREN_CODE = 41;
    var OBRACK_CODE = 91;
    var CBRACK_CODE = 93;
    var QUMARK_CODE = 63;
    var SEMCOL_CODE = 59;
    var COLON_CODE = 58;
    var OCURL_CODE = 123;
    var CCURL_CODE = 125;
    var t = true;
    var unaryOps = {
        "-": t,
        "!": t,
        "~": t,
        "+": t
    };
    var binaryOps = {
        "=": 3,
        "+=": 3,
        "-=": 3,
        "&=": 3,
        "|=": 3,
        // Conditional: 4,
        "||": 5,
        "&&": 6,
        "|": 7,
        "^": 8,
        "&": 9,
        "==": 10,
        "!=": 10,
        "===": 10,
        "!==": 10,
        "<": 11,
        ">": 11,
        "<=": 11,
        ">=": 11,
        "<<": 12,
        ">>": 12,
        ">>>": 12,
        "+": 13,
        "-": 13,
        "*": 14,
        "/": 14,
        "%": 14
    };
    var maxUnopLen = getMaxKeyLen(unaryOps);
    var maxBinopLen = getMaxKeyLen(binaryOps);
    var literals = {
        true: true,
        false: false,
        null: null,
        undefined: void 0
    };
    var thisStr = "this";
    var evaluator_functions_exports = {};
    __export2(evaluator_functions_exports, {
        conditional: function() {
            return conditional;
        },
        deleteDataVal: function() {
            return deleteDataVal;
        },
        getDataVal: function() {
            return getDataVal;
        },
        setDataVal: function() {
            return setDataVal;
        },
        waitFor: function() {
            return waitFor;
        }
    });
    var AwaitableSymbol = Symbol("Awaitable");
    function makeAwaitable(promise) {
        promise[AwaitableSymbol] = AwaitableSymbol;
        promise.awaitableThen = function(arg) {
            return makeAwaitable(promise.then(arg));
        };
        return promise;
    }
    var setDataVal = function(_context, binding, value) {
        _context.model.set([
            [
                binding,
                value
            ]
        ]);
    };
    var getDataVal = function(_context, binding) {
        return _context.model.get(binding);
    };
    var deleteDataVal = function(_context, binding) {
        return _context.model.delete(binding);
    };
    var conditional = function(ctx, condition, ifTrue, ifFalse) {
        var testResult = ctx.evaluate(condition);
        if (isAwaitable(testResult)) {
            return testResult.awaitableThen(function(resolvedTest) {
                if (resolvedTest) {
                    return ctx.evaluate(ifTrue);
                }
                if (ifFalse) {
                    return ctx.evaluate(ifFalse);
                }
                return null;
            });
        }
        if (testResult) {
            return ctx.evaluate(ifTrue);
        }
        if (ifFalse) {
            return ctx.evaluate(ifFalse);
        }
        return null;
    };
    conditional.resolveParams = false;
    var waitFor = function(ctx, promise) {
        return makeAwaitable(promise);
    };
    var andandOperator = function(ctx, a, b, async) {
        return LogicalOperators.and(ctx, a, b, async);
    };
    andandOperator.resolveParams = false;
    var ororOperator = function(ctx, a, b, async) {
        return LogicalOperators.or(ctx, a, b, async);
    };
    ororOperator.resolveParams = false;
    var DEFAULT_BINARY_OPERATORS = {
        // TODO: A lot of these functions used to do type coercion. Not sure if we want to keep that behavior or not.
        "+": function(a, b) {
            return a + b;
        },
        "-": function(a, b) {
            return a - b;
        },
        "*": function(a, b) {
            return a * b;
        },
        "/": function(a, b) {
            return a / b;
        },
        "%": function(a, b) {
            return a % b;
        },
        // Promise-aware comparison operators
        // eslint-disable-next-line
        "==": makePromiseAwareBinaryOp(function(a, b) {
            return a == b;
        }),
        // eslint-disable-next-line
        "!=": makePromiseAwareBinaryOp(function(a, b) {
            return a != b;
        }),
        ">": makePromiseAwareBinaryOp(function(a, b) {
            return a > b;
        }),
        ">=": makePromiseAwareBinaryOp(function(a, b) {
            return a >= b;
        }),
        "<": makePromiseAwareBinaryOp(function(a, b) {
            return a < b;
        }),
        "<=": makePromiseAwareBinaryOp(function(a, b) {
            return a <= b;
        }),
        "!==": makePromiseAwareBinaryOp(function(a, b) {
            return a !== b;
        }),
        "===": makePromiseAwareBinaryOp(function(a, b) {
            return a === b;
        }),
        "&&": andandOperator,
        "||": ororOperator,
        // eslint-disable-next-line
        "|": function(a, b) {
            return a | b;
        },
        // eslint-disable-next-line
        "&": function(a, b) {
            return a & b;
        },
        "+=": function(a, b) {
            return a + b;
        },
        "-=": function(a, b) {
            return a - b;
        },
        // eslint-disable-next-line
        "&=": function(a, b) {
            return a & b;
        },
        // eslint-disable-next-line
        "|=": function(a, b) {
            return a | b;
        }
    };
    var DEFAULT_UNARY_OPERATORS = {
        "-": function(a) {
            return -a;
        },
        "+": function(a) {
            return Number(a);
        },
        "!": makePromiseAwareUnaryOp(function(a) {
            return !a;
        })
    };
    var PromiseCollectionHandler = {
        /**
     * Handle array with potential Promise elements
     */ handleArray: function handleArray(items, async) {
            if (!async) {
                return items;
            }
            var hasPromises = items.some(function(item) {
                return isAwaitable(item);
            });
            return hasPromises ? collateAwaitable(items) : items;
        },
        /**
     * Handle object with potential Promise keys/values
     */ handleObject: function handleObject(attributes, resolveNode, async) {
            var resolvedAttributes = {};
            var promises = [];
            var hasPromises = false;
            attributes.forEach(function(attr) {
                var key = resolveNode(attr.key);
                var value = resolveNode(attr.value);
                if (async && (isAwaitable(key) || isAwaitable(value))) {
                    hasPromises = true;
                    var keyPromise = Promise.resolve(key);
                    var valuePromise = Promise.resolve(value);
                    promises.push(collateAwaitable([
                        keyPromise,
                        valuePromise
                    ]).awaitableThen(function(param) {
                        var _param = _sliced_to_array(param, 2), resolvedKey = _param[0], resolvedValue = _param[1];
                        resolvedAttributes[resolvedKey] = resolvedValue;
                    }));
                } else {
                    resolvedAttributes[key] = value;
                }
            });
            return hasPromises ? collateAwaitable(promises).awaitableThen(function() {
                return resolvedAttributes;
            }) : resolvedAttributes;
        }
    };
    var LogicalOperators = {
        and: function(ctx, leftNode, rightNode, async) {
            var leftResult = ctx.evaluate(leftNode);
            if (async && isAwaitable(leftResult)) {
                return leftResult.awaitableThen(function(awaitedLeft) {
                    if (!awaitedLeft) return awaitedLeft;
                    var rightResult = ctx.evaluate(rightNode);
                    return isAwaitable(rightResult) ? rightResult : Promise.resolve(rightResult);
                });
            }
            return leftResult && ctx.evaluate(rightNode);
        },
        or: function(ctx, leftNode, rightNode, async) {
            var leftResult = ctx.evaluate(leftNode);
            if (async && isAwaitable(leftResult)) {
                return leftResult.awaitableThen(function(awaitedLeft) {
                    if (awaitedLeft) return awaitedLeft;
                    var rightResult = ctx.evaluate(rightNode);
                    return isAwaitable(rightResult) ? rightResult : Promise.resolve(rightResult);
                });
            }
            return leftResult || ctx.evaluate(rightNode);
        }
    };
    var ExpressionEvaluator = /*#__PURE__*/ function() {
        function ExpressionEvaluator(defaultOptions) {
            var _this = this;
            _class_call_check(this, ExpressionEvaluator);
            this.vars = {};
            this.hooks = {
                /** Resolve an AST node for an expression to a value */ resolve: new SyncWaterfallHook(),
                /** Gets the options that will be passed in calls to the resolve hook */ resolveOptions: new SyncWaterfallHook(),
                /** Allows users to change the expression to be evaluated before processing */ beforeEvaluate: new SyncWaterfallHook(),
                /**
         * An optional means of handling an error in the expression execution
         * Return true if handled, to stop propagation of the error
         */ onError: new SyncBailHook()
            };
            this.expressionsCache = /* @__PURE__ */ new Map();
            this.operators = {
                binary: new Map(Object.entries(DEFAULT_BINARY_OPERATORS)),
                unary: new Map(Object.entries(DEFAULT_UNARY_OPERATORS)),
                expressions: new Map(_to_consumable_array(Object.entries(evaluator_functions_exports)).concat([
                    [
                        "await",
                        waitFor
                    ]
                ]))
            };
            this.defaultHookOptions = _object_spread_props(_object_spread({}, defaultOptions), {
                evaluate: function(expr) {
                    return _this.evaluate(expr, _this.defaultHookOptions);
                },
                resolveNode: function(node) {
                    return _this._execAST(node, _this.defaultHookOptions);
                }
            });
            this.hooks.resolve.tap("ExpressionEvaluator", function(result, node, options) {
                return _this._resolveNode(result, node, options);
            });
            this.evaluate = this.evaluate.bind(this);
        }
        _create_class(ExpressionEvaluator, [
            {
                key: "reset",
                value: function reset() {
                    this.expressionsCache.clear();
                }
            },
            {
                key: "evaluate",
                value: function evaluate(expr, options) {
                    var _this = this;
                    var resolvedOpts = this.hooks.resolveOptions.call(_object_spread_props(_object_spread({}, this.defaultHookOptions, options), {
                        resolveNode: function(node) {
                            return _this._execAST(node, resolvedOpts);
                        }
                    }));
                    var _this_hooks_beforeEvaluate_call;
                    var expression = (_this_hooks_beforeEvaluate_call = this.hooks.beforeEvaluate.call(expr, resolvedOpts)) !== null && _this_hooks_beforeEvaluate_call !== void 0 ? _this_hooks_beforeEvaluate_call : expr;
                    while(isObjectExpression(expression)){
                        expression = expression.value;
                    }
                    if (typeof expression === "number" || typeof expression === "boolean" || expression === void 0 || expression === null) {
                        return expression;
                    }
                    if (isExpressionNode(expression)) {
                        return this._execAST(expression, resolvedOpts);
                    }
                    if (Array.isArray(expression)) {
                        return expression.reduce(function(_nothing, exp) {
                            return _this.evaluate(exp, options);
                        }, null);
                    }
                    return this._execString(String(expression), resolvedOpts);
                }
            },
            {
                /**
     * Evaluate functions in an async context
     * @experimental These Player APIs are in active development and may change. Use with caution
     */ key: "evaluateAsync",
                value: function evaluateAsync(expr, options) {
                    var _this = this;
                    if (Array.isArray(expr)) {
                        return collateAwaitable(expr.map(function(exp) {
                            return _async_to_generator(function() {
                                return _ts_generator(this, function(_state) {
                                    return [
                                        2,
                                        this.evaluate(exp, _object_spread_props(_object_spread({}, options), {
                                            async: true
                                        }))
                                    ];
                                });
                            }).call(_this);
                        })).awaitableThen(function(values) {
                            return values.pop();
                        });
                    } else {
                        return this.evaluate(expr, _object_spread_props(_object_spread({}, options), {
                            async: true
                        }));
                    }
                }
            },
            {
                key: "addExpressionFunction",
                value: function addExpressionFunction(name, handler) {
                    this.operators.expressions.set(name, handler);
                }
            },
            {
                key: "addBinaryOperator",
                value: function addBinaryOperator(operator, handler) {
                    this.operators.binary.set(operator, handler);
                }
            },
            {
                key: "addUnaryOperator",
                value: function addUnaryOperator(operator, handler) {
                    this.operators.unary.set(operator, handler);
                }
            },
            {
                key: "setExpressionVariable",
                value: function setExpressionVariable(name, value) {
                    this.vars[name] = value;
                }
            },
            {
                key: "getExpressionVariable",
                value: function getExpressionVariable(name) {
                    return this.vars[name];
                }
            },
            {
                key: "_execAST",
                value: function _execAST(node, options) {
                    return this.hooks.resolve.call(void 0, node, options);
                }
            },
            {
                key: "_execString",
                value: function _execString(exp, options) {
                    if (exp === "") {
                        return exp;
                    }
                    var matches = exp.match(/^@\[(.*)\]@$/);
                    var matchedExp = exp;
                    if (matches) {
                        var _Array_from = _sliced_to_array(Array.from(matches), 2), matched = _Array_from[1];
                        if (matched) {
                            matchedExp = matched;
                        }
                    }
                    var storedAST;
                    try {
                        var _this_expressionsCache_get;
                        storedAST = (_this_expressionsCache_get = this.expressionsCache.get(matchedExp)) !== null && _this_expressionsCache_get !== void 0 ? _this_expressionsCache_get : parseExpression(matchedExp, {
                            strict: options.strict
                        });
                        this.expressionsCache.set(matchedExp, storedAST);
                    } catch (e) {
                        if (options.throwErrors || !this.hooks.onError.call(e)) {
                            throw new import_ts_nested_error3.NestedError("Error parsing expression: ".concat(exp), e);
                        }
                        return;
                    }
                    try {
                        return this._execAST(storedAST, options);
                    } catch (e) {
                        if (options.throwErrors || !this.hooks.onError.call(e)) {
                            throw new import_ts_nested_error3.NestedError("Error evaluating expression: ".concat(exp), e);
                        }
                    }
                }
            },
            {
                key: "_resolveNode",
                value: function _resolveNode(_currentValue, node, options) {
                    var _this = this;
                    var resolveNode = options.resolveNode, model = options.model;
                    var _options_async;
                    var isAsync = (_options_async = options.async) !== null && _options_async !== void 0 ? _options_async : false;
                    var expressionContext = _object_spread_props(_object_spread({}, options), {
                        evaluate: function(expr) {
                            return _this.evaluate(expr, options);
                        }
                    });
                    if (node.type === "Literal") {
                        return node.value;
                    }
                    if (node.type === "Identifier") {
                        return this.vars[node.name];
                    }
                    if (node.type === "Compound" || node.type === "ThisExpression") {
                        throw new Error("Expression type: ".concat(node.type, " is not supported"));
                    }
                    if (node.type === "BinaryExpression" || node.type === "LogicalExpression") {
                        var operator = this.operators.binary.get(node.operator);
                        if (operator) {
                            if ("resolveParams" in operator) {
                                if (operator.resolveParams === false) {
                                    return operator(expressionContext, node.left, node.right, isAsync);
                                }
                                var left2 = resolveNode(node.left);
                                var right2 = resolveNode(node.right);
                                if (options.async && (isAwaitable(left2) || isAwaitable(right2))) {
                                    return collateAwaitable([
                                        left2,
                                        right2
                                    ]).awaitableThen(function(param) {
                                        var _param = _sliced_to_array(param, 2), leftVal = _param[0], rightVal = _param[1];
                                        return operator(expressionContext, leftVal, rightVal, isAsync);
                                    });
                                }
                                return operator(expressionContext, left2, right2, isAsync);
                            }
                            var left = resolveNode(node.left);
                            var right = resolveNode(node.right);
                            if (options.async && (isAwaitable(left) || isAwaitable(right))) {
                                return collateAwaitable([
                                    left,
                                    right
                                ]).awaitableThen(function(param) {
                                    var _param = _sliced_to_array(param, 2), leftVal = _param[0], rightVal = _param[1];
                                    return operator(leftVal, rightVal, isAsync);
                                });
                            }
                            return operator(left, right, isAsync);
                        }
                        return;
                    }
                    if (node.type === "UnaryExpression") {
                        var operator1 = this.operators.unary.get(node.operator);
                        if (operator1) {
                            if ("resolveParams" in operator1) {
                                if (operator1.resolveParams === false) {
                                    return operator1(expressionContext, node.argument, isAsync);
                                }
                                var arg2 = resolveNode(node.argument);
                                if (options.async && isAwaitable(arg2)) {
                                    return arg2.awaitableThen(function(argVal) {
                                        return operator1(expressionContext, argVal, isAsync);
                                    });
                                }
                                return operator1(expressionContext, arg2, isAsync);
                            }
                            var arg = resolveNode(node.argument);
                            if (options.async && isAwaitable(arg)) {
                                return arg.awaitableThen(function(argVal) {
                                    return operator1(argVal, isAsync);
                                });
                            }
                            return operator1(arg, isAsync);
                        }
                        return;
                    }
                    if (node.type === "Object") {
                        return PromiseCollectionHandler.handleObject(node.attributes, resolveNode, options.async || false);
                    }
                    if (node.type === "CallExpression") {
                        var expressionName = node.callTarget.name;
                        var operator2 = this.operators.expressions.get(expressionName);
                        if (!operator2) {
                            throw new Error("Unknown expression function: ".concat(expressionName));
                        }
                        if (operator2.name === waitFor.name && !options.async) {
                            throw new Error("Usage of await outside of async context");
                        }
                        if ("resolveParams" in operator2 && operator2.resolveParams === false) {
                            return operator2.apply(void 0, [
                                expressionContext
                            ].concat(_to_consumable_array(node.args)));
                        }
                        var args = node.args.map(function(n) {
                            return resolveNode(n);
                        });
                        if (options.async) {
                            var hasPromises = args.some(isAwaitable);
                            if (hasPromises) {
                                return collateAwaitable(args).awaitableThen(function(resolvedArgs) {
                                    return operator2.apply(void 0, [
                                        expressionContext
                                    ].concat(_to_consumable_array(resolvedArgs)));
                                });
                            }
                        }
                        return operator2.apply(void 0, [
                            expressionContext
                        ].concat(_to_consumable_array(args)));
                    }
                    if (node.type === "ModelRef") {
                        return model.get(node.ref, {
                            context: {
                                model: options.model
                            }
                        });
                    }
                    if (node.type === "MemberExpression") {
                        var obj = resolveNode(node.object);
                        var prop = resolveNode(node.property);
                        if (options.async && (isAwaitable(obj) || isAwaitable(prop))) {
                            return collateAwaitable([
                                obj,
                                prop
                            ]).awaitableThen(function(param) {
                                var _param = _sliced_to_array(param, 2), objVal = _param[0], propVal = _param[1];
                                return objVal[propVal];
                            });
                        }
                        return obj[prop];
                    }
                    if (node.type === "Assignment") {
                        if (node.left.type === "ModelRef") {
                            var value = resolveNode(node.right);
                            if (isPromiseLike(value)) {
                                if (options.async && isAwaitable(value)) {
                                    return value.awaitableThen(function(resolvedValue) {
                                        model.set([
                                            [
                                                node.left.ref,
                                                resolvedValue
                                            ]
                                        ]);
                                        return resolvedValue;
                                    });
                                } else {
                                    var _options_logger;
                                    (_options_logger = options.logger) === null || _options_logger === void 0 ? void 0 : _options_logger.warn("Unawaited promise written to mode, this behavior is undefined and may change in future releases");
                                }
                            }
                            model.set([
                                [
                                    node.left.ref,
                                    value
                                ]
                            ]);
                            return value;
                        }
                        if (node.left.type === "Identifier") {
                            var value1 = resolveNode(node.right);
                            if (options.async && isAwaitable(value1)) {
                                return value1.awaitableThen(function(resolvedValue) {
                                    _this.vars[node.left.name] = resolvedValue;
                                    return resolvedValue;
                                });
                            }
                            this.vars[node.left.name] = value1;
                            return value1;
                        }
                        return;
                    }
                    if (node.type === "ConditionalExpression") {
                        var testResult = resolveNode(node.test);
                        return handleConditionalBranching(testResult, function() {
                            return node.consequent;
                        }, function() {
                            return node.alternate;
                        }, resolveNode, isAsync);
                    }
                    if (node.type === "ArrayExpression") {
                        var results = node.elements.map(function(ele) {
                            return resolveNode(ele);
                        });
                        return PromiseCollectionHandler.handleArray(results, isAsync);
                    }
                    if (node.type === "Modification") {
                        var operation = this.operators.binary.get(node.operator);
                        if (operation) {
                            var newValue;
                            if ("resolveParams" in operation) {
                                if (operation.resolveParams === false) {
                                    newValue = operation(expressionContext, node.left, node.right, isAsync);
                                } else {
                                    var left1 = resolveNode(node.left);
                                    var right1 = resolveNode(node.right);
                                    if (options.async && (isAwaitable(left1) || isAwaitable(right1))) {
                                        newValue = collateAwaitable([
                                            left1,
                                            right1
                                        ]).awaitableThen(function(param) {
                                            var _param = _sliced_to_array(param, 2), leftVal = _param[0], rightVal = _param[1];
                                            return operation(expressionContext, leftVal, rightVal, isAsync);
                                        });
                                    } else {
                                        newValue = operation(expressionContext, left1, right1, isAsync);
                                    }
                                }
                            } else {
                                var left3 = resolveNode(node.left);
                                var right3 = resolveNode(node.right);
                                if (options.async && (isAwaitable(left3) || isAwaitable(right3))) {
                                    newValue = collateAwaitable([
                                        left3,
                                        right3
                                    ]).awaitableThen(function(param) {
                                        var _param = _sliced_to_array(param, 2), leftVal = _param[0], rightVal = _param[1];
                                        return operation(leftVal, rightVal, isAsync);
                                    });
                                } else {
                                    newValue = operation(left3, right3, isAsync);
                                }
                            }
                            if (node.left.type === "ModelRef") {
                                if (options.async && isAwaitable(newValue)) {
                                    return newValue.awaitableThen(function(resolvedValue) {
                                        model.set([
                                            [
                                                node.left.ref,
                                                resolvedValue
                                            ]
                                        ]);
                                        return resolvedValue;
                                    });
                                }
                                model.set([
                                    [
                                        node.left.ref,
                                        newValue
                                    ]
                                ]);
                            } else if (node.left.type === "Identifier") {
                                if (options.async && isAwaitable(newValue)) {
                                    return newValue.awaitableThen(function(resolvedValue) {
                                        _this.vars[node.left.name] = resolvedValue;
                                        return resolvedValue;
                                    });
                                }
                                this.vars[node.left.name] = newValue;
                            }
                            return newValue;
                        }
                        return resolveNode(node.left);
                    }
                }
            }
        ]);
        return ExpressionEvaluator;
    }();
    var TapableLogger = /*#__PURE__*/ function() {
        function TapableLogger() {
            _class_call_check(this, TapableLogger);
            this.hooks = {
                trace: new SyncHook(),
                debug: new SyncHook(),
                info: new SyncHook(),
                warn: new SyncHook(),
                error: new SyncHook(),
                log: new SyncHook()
            };
            this.logHandlers = /* @__PURE__ */ new Set();
            this.trace = this.createHandler("trace");
            this.debug = this.createHandler("debug");
            this.info = this.createHandler("info");
            this.warn = this.createHandler("warn");
            this.error = this.createHandler("error");
        }
        _create_class(TapableLogger, [
            {
                key: "createHandler",
                value: function createHandler(severity) {
                    var _this = this;
                    return function() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                            args[_key] = arguments[_key];
                        }
                        var _logger;
                        _this.hooks[severity].call(args);
                        _this.hooks.log.call(severity, args);
                        _this.logHandlers.forEach(function(logger) {
                            return (_logger = logger)[severity].apply(_logger, _to_consumable_array(args));
                        });
                    };
                }
            },
            {
                key: "addHandler",
                value: function addHandler(logHandler) {
                    this.logHandlers.add(logHandler);
                }
            },
            {
                key: "removeHandler",
                value: function removeHandler(logHandler) {
                    this.logHandlers.delete(logHandler);
                }
            }
        ]);
        return TapableLogger;
    }();
    var ProxyLogger = /*#__PURE__*/ function() {
        function ProxyLogger(loggerProvider) {
            _class_call_check(this, ProxyLogger);
            this.trace = this.createHandler("trace");
            this.debug = this.createHandler("debug");
            this.info = this.createHandler("info");
            this.warn = this.createHandler("warn");
            this.error = this.createHandler("error");
            this.proxiedLoggerProvider = loggerProvider;
        }
        _create_class(ProxyLogger, [
            {
                key: "createHandler",
                value: function createHandler(severity) {
                    var _this = this;
                    return function() {
                        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                            args[_key] = arguments[_key];
                        }
                        var _logger;
                        var logger = _this.proxiedLoggerProvider();
                        logger === null || logger === void 0 ? void 0 : (_logger = logger)[severity].apply(_logger, _to_consumable_array(args));
                    };
                }
            }
        ]);
        return ProxyLogger;
    }();
    var identify = function(val) {
        return val;
    };
    var SchemaController = /*#__PURE__*/ function() {
        function SchemaController(schema) {
            _class_call_check(this, SchemaController);
            this.formatters = /* @__PURE__ */ new Map();
            this.types = /* @__PURE__ */ new Map();
            this.schema = /* @__PURE__ */ new Map();
            this.bindingSchemaNormalizedCache = /* @__PURE__ */ new Map();
            this.hooks = {
                resolveTypeForBinding: new SyncWaterfallHook()
            };
            this.schema = schema ? parse2(schema) : /* @__PURE__ */ new Map();
        }
        _create_class(SchemaController, [
            {
                key: "addFormatters",
                value: function addFormatters(fns) {
                    var _this = this;
                    fns.forEach(function(def) {
                        _this.formatters.set(def.name, def);
                    });
                }
            },
            {
                key: "addDataTypes",
                value: function addDataTypes(types) {
                    var _this = this;
                    types.forEach(function(t2) {
                        _this.types.set(t2.type, t2);
                    });
                }
            },
            {
                key: "getValidationsForBinding",
                value: function getValidationsForBinding(binding) {
                    var _typeDef_validation;
                    var typeDef = this.getApparentType(binding);
                    if (!(typeDef === null || typeDef === void 0 ? void 0 : (_typeDef_validation = typeDef.validation) === null || _typeDef_validation === void 0 ? void 0 : _typeDef_validation.length)) {
                        return void 0;
                    }
                    return typeDef.validation.map(function(vRef) {
                        return _object_spread({
                            severity: "error",
                            trigger: "change"
                        }, vRef);
                    });
                }
            },
            {
                key: "normalizeBinding",
                value: function normalizeBinding(binding) {
                    var _this = this;
                    var cached = this.bindingSchemaNormalizedCache.get(binding);
                    if (cached) {
                        return cached;
                    }
                    var bindingArray = binding.asArray();
                    var normalized = bindingArray.map(function(p) {
                        return typeof p === "number" ? "[]" : p;
                    }).join(".");
                    if (normalized) {
                        this.bindingSchemaNormalizedCache.set(binding, normalized);
                        bindingArray = normalized.split(".");
                    }
                    bindingArray.forEach(function(item) {
                        var recordBinding = bindingArray.map(function(p) {
                            return p === item ? "{}" : p;
                        }).join(".");
                        if (_this.schema.get(recordBinding)) {
                            _this.bindingSchemaNormalizedCache.set(binding, recordBinding);
                            bindingArray = recordBinding.split(".");
                            normalized = recordBinding;
                        }
                    });
                    return normalized;
                }
            },
            {
                key: "getType",
                value: function getType(binding) {
                    return this.hooks.resolveTypeForBinding.call(this.schema.get(this.normalizeBinding(binding)), binding);
                }
            },
            {
                key: "getApparentType",
                value: function getApparentType(binding) {
                    var schemaType = this.getType(binding);
                    if (schemaType === void 0) {
                        return void 0;
                    }
                    var baseType = this.getTypeDefinition(schemaType === null || schemaType === void 0 ? void 0 : schemaType.type);
                    if (baseType === void 0) {
                        return schemaType;
                    }
                    var _schemaType_validation, _baseType_validation;
                    return _object_spread_props(_object_spread({}, baseType, schemaType), {
                        validation: _to_consumable_array((_schemaType_validation = schemaType.validation) !== null && _schemaType_validation !== void 0 ? _schemaType_validation : []).concat(_to_consumable_array((_baseType_validation = baseType.validation) !== null && _baseType_validation !== void 0 ? _baseType_validation : []))
                    });
                }
            },
            {
                key: "getTypeDefinition",
                value: function getTypeDefinition(dataType) {
                    return this.types.get(dataType);
                }
            },
            {
                key: "getFormatterForType",
                value: function getFormatterForType(formatReference) {
                    var formatType = formatReference.type, options = _object_without_properties(formatReference, [
                        "type"
                    ]);
                    var formatter = this.formatters.get(formatType);
                    if (!formatter) {
                        return;
                    }
                    return {
                        format: formatter.format ? function(val) {
                            var _formatter_format;
                            return (_formatter_format = formatter.format) === null || _formatter_format === void 0 ? void 0 : _formatter_format.call(formatter, val, options);
                        } : identify,
                        deformat: formatter.deformat ? function(val) {
                            var _formatter_deformat;
                            return (_formatter_deformat = formatter.deformat) === null || _formatter_deformat === void 0 ? void 0 : _formatter_deformat.call(formatter, val, options);
                        } : identify
                    };
                }
            },
            {
                /**
     * Given a binding, fetch a function that's responsible for formatting, and/or de-formatting the data
     * If no formatter is registered, it will return undefined
     */ key: "getFormatter",
                value: function getFormatter(binding) {
                    var type = this.getApparentType(binding);
                    if (!(type === null || type === void 0 ? void 0 : type.format)) {
                        return void 0;
                    }
                    return this.getFormatterForType(type.format);
                }
            }
        ]);
        return SchemaController;
    }();
    var DOUBLE_OPEN_CURLY = "{{";
    var DOUBLE_CLOSE_CURLY = "}}";
    function traverseObject(val, options) {
        switch(typeof val === "undefined" ? "undefined" : _type_of(val)){
            case "string":
                {
                    return resolveDataRefsInString(val, options);
                }
            case "object":
                {
                    if (!val) return val;
                    var keys = Object.keys(val);
                    var newVal = val;
                    if (keys.length > 0) {
                        keys.forEach(function(key) {
                            newVal = (0, import_timm2.setIn)(newVal, [
                                key
                            ], traverseObject(val[key], options));
                        });
                    }
                    return newVal;
                }
            default:
                return val;
        }
    }
    var ValidationMiddleware = /*#__PURE__*/ function() {
        function ValidationMiddleware(validator, options) {
            _class_call_check(this, ValidationMiddleware);
            this.validator = validator;
            this.shadowModelPaths = /* @__PURE__ */ new Map();
            this.logger = options === null || options === void 0 ? void 0 : options.logger;
            this.shouldIncludeInvalid = options === null || options === void 0 ? void 0 : options.shouldIncludeInvalid;
        }
        _create_class(ValidationMiddleware, [
            {
                key: "set",
                value: function set(transaction, options, next) {
                    var _this = this;
                    var asModel = toModel(this, _object_spread_props(_object_spread({}, options), {
                        includeInvalid: true
                    }), next);
                    var nextTransaction = [];
                    var includedBindings = /* @__PURE__ */ new Set();
                    transaction.forEach(function(param) {
                        var _param = _sliced_to_array(param, 2), binding = _param[0], value = _param[1];
                        _this.shadowModelPaths.set(binding, value);
                        includedBindings.add(binding);
                    });
                    var invalidBindings = [];
                    this.shadowModelPaths.forEach(function(value, binding) {
                        var validations = _this.validator(binding, asModel);
                        if (validations === void 0) {
                            nextTransaction.push([
                                binding,
                                value
                            ]);
                        } else if (_instanceof(validations, Set)) {
                            validations.forEach(function(validation) {
                                invalidBindings.push(validation.binding);
                                if (!validation.isStrong && validation.binding.asString() === binding.asString()) {
                                    nextTransaction.push([
                                        validation.binding,
                                        value
                                    ]);
                                }
                            });
                        } else if (includedBindings.has(binding)) {
                            var _this_logger;
                            invalidBindings.push(binding);
                            (_this_logger = _this.logger) === null || _this_logger === void 0 ? void 0 : _this_logger.debug("Invalid value for path: ".concat(binding.asString(), " - ").concat(validations.severity, " - ").concat(validations.message));
                        }
                    });
                    var validResults = [];
                    if (next && nextTransaction.length > 0) {
                        nextTransaction.forEach(function(param) {
                            var _param = _sliced_to_array(param, 1), binding = _param[0];
                            return _this.shadowModelPaths.delete(binding);
                        });
                        var result = next.set(nextTransaction, options);
                        if (invalidBindings.length === 0) {
                            return result;
                        }
                        validResults = result;
                    }
                    var invalidResults = invalidBindings.map(function(binding) {
                        return {
                            binding: binding,
                            oldValue: asModel.get(binding),
                            newValue: asModel.get(binding),
                            force: true
                        };
                    });
                    return _to_consumable_array(validResults).concat(_to_consumable_array(invalidResults));
                }
            },
            {
                key: "get",
                value: function get(binding, options, next) {
                    var _this_shouldIncludeInvalid, _this;
                    var val = next === null || next === void 0 ? void 0 : next.get(binding, options);
                    var _this_shouldIncludeInvalid1;
                    if ((_this_shouldIncludeInvalid1 = (_this_shouldIncludeInvalid = (_this = this).shouldIncludeInvalid) === null || _this_shouldIncludeInvalid === void 0 ? void 0 : _this_shouldIncludeInvalid.call(_this, options)) !== null && _this_shouldIncludeInvalid1 !== void 0 ? _this_shouldIncludeInvalid1 : (options === null || options === void 0 ? void 0 : options.includeInvalid) === true) {
                        this.shadowModelPaths.forEach(function(shadowValue, shadowBinding) {
                            if (shadowBinding === binding) {
                                val = shadowValue;
                                return;
                            }
                            if (binding.contains(shadowBinding)) {
                                val = (0, import_timm3.setIn)(val, shadowBinding.relative(binding), shadowValue);
                            }
                        });
                    }
                    return val;
                }
            },
            {
                key: "delete",
                value: function _delete(binding, options, next) {
                    this.shadowModelPaths = removeBindingAndChildrenFromMap(this.shadowModelPaths, binding);
                    return next === null || next === void 0 ? void 0 : next.delete(binding, options);
                }
            }
        ]);
        return ValidationMiddleware;
    }();
    var ValidatorRegistry = /*#__PURE__*/ function() {
        function ValidatorRegistry() {
            _class_call_check(this, ValidatorRegistry);
            this.registry = /* @__PURE__ */ new Map();
        }
        _create_class(ValidatorRegistry, [
            {
                /** Use the given validator name to fetch the handler */ key: "get",
                value: function get(name) {
                    return this.registry.get(name);
                }
            },
            {
                /** Register a new validator */ key: "register",
                value: function register(name, handler) {
                    this.registry.set(name, handler);
                }
            }
        ]);
        return ValidatorRegistry;
    }();
    var NodeType = /* @__PURE__ */ function(NodeType2) {
        NodeType2["Asset"] = "asset";
        NodeType2["View"] = "view";
        NodeType2["Applicability"] = "applicability";
        NodeType2["Template"] = "template";
        NodeType2["Value"] = "value";
        NodeType2["MultiNode"] = "multi-node";
        NodeType2["Switch"] = "switch";
        NodeType2["Async"] = "async";
        NodeType2["Unknown"] = "unknown";
        NodeType2["Empty"] = "empty";
        return NodeType2;
    }(NodeType || {});
    var EMPTY_NODE = {
        type: "empty"
    };
    var Parser = /*#__PURE__*/ function() {
        function Parser() {
            _class_call_check(this, Parser);
            this.hooks = {
                onParseObject: new SyncWaterfallHook(),
                onCreateASTNode: new SyncWaterfallHook(),
                parseNode: new SyncBailHook()
            };
        }
        _create_class(Parser, [
            {
                key: "parseView",
                value: function parseView(value) {
                    var viewNode = this.parseObject(value, "view");
                    if (!viewNode) {
                        throw new Error("Unable to parse object into a view");
                    }
                    return viewNode;
                }
            },
            {
                key: "createASTNode",
                value: function createASTNode(node, value) {
                    var tapped = this.hooks.onCreateASTNode.call(node, value);
                    if (tapped === void 0) {
                        return node;
                    }
                    return tapped;
                }
            },
            {
                key: "parseObject",
                value: function parseObject(obj) {
                    var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "value", options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
                        templateDepth: 0
                    };
                    var _this = this;
                    var parsedNode = this.hooks.parseNode.call(obj, type, options);
                    if (parsedNode || parsedNode === null) {
                        return parsedNode;
                    }
                    var parseLocalObject = function(currentValue, objToParse) {
                        var path = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                        if ((typeof objToParse === "undefined" ? "undefined" : _type_of(objToParse)) !== "object" || objToParse === null) {
                            return {
                                value: objToParse,
                                children: []
                            };
                        }
                        var localObj = _this.hooks.onParseObject.call(objToParse, type);
                        if (!localObj) {
                            return currentValue;
                        }
                        var objEntries = Array.isArray(localObj) ? localObj.map(function(v, i) {
                            return [
                                i,
                                v
                            ];
                        }) : _to_consumable_array(Object.entries(localObj)).concat(_to_consumable_array(Object.getOwnPropertySymbols(localObj).map(function(s) {
                            return [
                                s,
                                localObj[s]
                            ];
                        })));
                        var defaultValue = {
                            children: [],
                            value: currentValue
                        };
                        var newValue = objEntries.reduce(function(accumulation, current) {
                            var value2 = accumulation.value;
                            var children2 = accumulation.children;
                            var _current = _sliced_to_array(current, 2), localKey = _current[0], localValue = _current[1];
                            var newChildren = _this.hooks.parseNode.call(localValue, "value", options, {
                                path: path,
                                key: localKey,
                                parentObj: localObj
                            });
                            if (newChildren) {
                                var _children2;
                                (_children2 = children2).push.apply(_children2, _to_consumable_array(newChildren));
                            } else if (localValue && (typeof localValue === "undefined" ? "undefined" : _type_of(localValue)) === "object") {
                                var _children21;
                                var result = parseLocalObject(accumulation.value, localValue, _to_consumable_array(path).concat([
                                    localKey
                                ]));
                                value2 = result.value;
                                (_children21 = children2).push.apply(_children21, _to_consumable_array(result.children));
                            } else {
                                value2 = (0, import_timm5.setIn)(accumulation.value, _to_consumable_array(path).concat([
                                    localKey
                                ]), localValue);
                            }
                            return {
                                value: value2,
                                children: children2
                            };
                        }, defaultValue);
                        return newValue;
                    };
                    var _parseLocalObject = parseLocalObject(void 0, obj), value = _parseLocalObject.value, children = _parseLocalObject.children;
                    var baseAst = value === void 0 && !children.length ? void 0 : {
                        type: type,
                        value: value
                    };
                    if (baseAst && children.length) {
                        var parent = baseAst;
                        parent.children = children;
                        children.forEach(function(child) {
                            child.value.parent = parent;
                        });
                    }
                    var _this_hooks_onCreateASTNode_call;
                    return (_this_hooks_onCreateASTNode_call = this.hooks.onCreateASTNode.call(baseAst, obj)) !== null && _this_hooks_onCreateASTNode_call !== void 0 ? _this_hooks_onCreateASTNode_call : null;
                }
            }
        ]);
        return Parser;
    }();
    var withContext = function(model) {
        return {
            get: function(binding, options) {
                return model.get(binding, _object_spread({
                    context: {
                        model: model
                    }
                }, options));
            },
            set: function(transaction, options) {
                return model.set(transaction, _object_spread({
                    context: {
                        model: model
                    }
                }, options));
            },
            delete: function(binding, options) {
                return model.delete(binding, _object_spread({
                    context: {
                        model: model
                    }
                }, options));
            }
        };
    };
    var Resolver = /*#__PURE__*/ function() {
        function Resolver(root, options) {
            _class_call_check(this, Resolver);
            this.hooks = {
                skipResolve: new SyncWaterfallHook(),
                beforeUpdate: new SyncHook(),
                afterUpdate: new SyncHook(),
                resolveOptions: new SyncWaterfallHook(),
                beforeResolve: new SyncWaterfallHook(),
                resolve: new SyncWaterfallHook(),
                afterResolve: new SyncWaterfallHook(),
                afterNodeUpdate: new SyncHook()
            };
            this.root = root;
            this.options = options;
            this.resolveCache = /* @__PURE__ */ new Map();
            this.ASTMap = /* @__PURE__ */ new Map();
            this.logger = options.logger;
            this.idCache = /* @__PURE__ */ new Set();
            this.AsyncIdMap = /* @__PURE__ */ new Map();
        }
        _create_class(Resolver, [
            {
                key: "getSourceNode",
                value: function getSourceNode(convertedAST) {
                    return this.ASTMap.get(convertedAST);
                }
            },
            {
                key: "update",
                value: function update(changes, asyncChanges) {
                    var _this = this;
                    this.hooks.beforeUpdate.call(changes);
                    var resolveCache = /* @__PURE__ */ new Map();
                    this.idCache.clear();
                    var prevASTMap = new Map(this.ASTMap);
                    this.ASTMap.clear();
                    var prevAsyncIdMap = new Map(this.AsyncIdMap);
                    var nextAsyncIdMap = /* @__PURE__ */ new Map();
                    asyncChanges === null || asyncChanges === void 0 ? void 0 : asyncChanges.forEach(function(id) {
                        var current = prevAsyncIdMap.get(id);
                        while(current && prevASTMap.has(current)){
                            var next = prevASTMap.get(current);
                            if (next && _this.resolveCache.has(next)) {
                                _this.resolveCache.delete(next);
                            }
                            current = current.parent;
                        }
                    });
                    var updated = this.computeTree(this.root, void 0, changes, resolveCache, toNodeResolveOptions(this.options), void 0, prevASTMap, nextAsyncIdMap);
                    this.AsyncIdMap = nextAsyncIdMap;
                    this.resolveCache = resolveCache;
                    this.hooks.afterUpdate.call(updated.value);
                    return updated.value;
                }
            },
            {
                key: "getResolveCache",
                value: function getResolveCache() {
                    return new Map(this.resolveCache);
                }
            },
            {
                key: "getPreviousResult",
                value: function getPreviousResult(node) {
                    if (!node) {
                        return;
                    }
                    var isFirstUpdate = this.resolveCache.size === 0;
                    var id = getNodeID(node);
                    if (id) {
                        if (this.idCache.has(id)) {
                            if (isFirstUpdate) {
                                if (node.type === "asset" || node.type === "view") {
                                    var _this_logger;
                                    (_this_logger = this.logger) === null || _this_logger === void 0 ? void 0 : _this_logger.error("Cache conflict: Found Asset/View nodes that have conflicting ids: ".concat(id, ", may cause cache issues."));
                                } else if (node.type === "value") {
                                    var _this_logger1;
                                    (_this_logger1 = this.logger) === null || _this_logger1 === void 0 ? void 0 : _this_logger1.info("Cache conflict: Found Value nodes that have conflicting ids: ".concat(id, ", may cause cache issues. To improve performance make value node IDs globally unique."));
                                }
                            }
                            return;
                        }
                        this.idCache.add(id);
                    }
                    return this.resolveCache.get(node);
                }
            },
            {
                key: "cloneNode",
                value: function cloneNode(node) {
                    var clonedNode = (0, import_timm4.clone)(node);
                    Object.keys(clonedNode).forEach(function(key) {
                        if (key === "parent") return;
                        var value = clonedNode[key];
                        if ((typeof value === "undefined" ? "undefined" : _type_of(value)) === "object" && value !== null) {
                            clonedNode[key] = Array.isArray(value) ? _to_consumable_array(value) : _object_spread({}, value);
                        }
                    });
                    return clonedNode;
                }
            },
            {
                key: "computeTree",
                value: function computeTree(node, rawParent, dataChanges, cacheUpdate, options, partiallyResolvedParent, prevASTMap, nextAsyncIdMap) {
                    var _this = this;
                    var dependencyModel = new DependencyModel(options.data.model);
                    dependencyModel.trackSubset("core");
                    var depModelWithParser = withContext(withParser(dependencyModel, this.options.parseBinding));
                    var resolveOptions = this.hooks.resolveOptions.call(_object_spread_props(_object_spread({}, options), {
                        data: _object_spread_props(_object_spread({}, options.data), {
                            model: depModelWithParser
                        }),
                        evaluate: function(exp) {
                            return _this.options.evaluator.evaluate(exp, {
                                model: depModelWithParser
                            });
                        },
                        node: node
                    }), node);
                    var previousResult = this.getPreviousResult(node);
                    var previousDeps = previousResult === null || previousResult === void 0 ? void 0 : previousResult.dependencies;
                    var dataChanged = caresAboutDataChanges(dataChanges, previousDeps);
                    var shouldUseLastValue = this.hooks.skipResolve.call(!dataChanged, node, resolveOptions);
                    if (previousResult && shouldUseLastValue) {
                        var update2 = _object_spread_props(_object_spread({}, previousResult), {
                            updated: false
                        });
                        var repopulateASTMapFromCache = function(resolvedNode, AST, ASTParent) {
                            var resolvedASTLocal = resolvedNode.node;
                            _this.ASTMap.set(resolvedASTLocal, AST);
                            var resolvedUpdate = _object_spread_props(_object_spread({}, resolvedNode), {
                                updated: false
                            });
                            cacheUpdate.set(AST, resolvedUpdate);
                            if (resolvedUpdate.node.type === "async") {
                                nextAsyncIdMap.set(resolvedUpdate.node.id, resolvedUpdate.node);
                            }
                            var _resolvedUpdate_node_asyncNodesResolved;
                            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(var _iterator = ((_resolvedUpdate_node_asyncNodesResolved = resolvedUpdate.node.asyncNodesResolved) !== null && _resolvedUpdate_node_asyncNodesResolved !== void 0 ? _resolvedUpdate_node_asyncNodesResolved : [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    var key = _step.value;
                                    nextAsyncIdMap.set(key, resolvedUpdate.node);
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
                            var handleChildNode = function(childNode) {
                                var _prevASTMap_get;
                                var originalChildNode = (_prevASTMap_get = prevASTMap.get(childNode)) !== null && _prevASTMap_get !== void 0 ? _prevASTMap_get : childNode;
                                var previousChildResult = _this.getPreviousResult(originalChildNode);
                                if (!previousChildResult) return;
                                repopulateASTMapFromCache(previousChildResult, originalChildNode, AST);
                            };
                            if ("children" in resolvedASTLocal) {
                                var _resolvedASTLocal_children;
                                (_resolvedASTLocal_children = resolvedASTLocal.children) === null || _resolvedASTLocal_children === void 0 ? void 0 : _resolvedASTLocal_children.forEach(function(param) {
                                    var childAST = param.value;
                                    return handleChildNode(childAST);
                                });
                            } else if (resolvedASTLocal.type === "multi-node") {
                                resolvedASTLocal.values.forEach(handleChildNode);
                            }
                            _this.hooks.afterNodeUpdate.call(AST, ASTParent, resolvedUpdate);
                        };
                        previousResult.node.parent = partiallyResolvedParent;
                        repopulateASTMapFromCache(previousResult, node, rawParent);
                        return update2;
                    }
                    var clonedNode = _object_spread_props(_object_spread({}, this.cloneNode(node)), {
                        parent: partiallyResolvedParent
                    });
                    var _this_hooks_beforeResolve_call;
                    var resolvedAST = (_this_hooks_beforeResolve_call = this.hooks.beforeResolve.call(clonedNode, resolveOptions)) !== null && _this_hooks_beforeResolve_call !== void 0 ? _this_hooks_beforeResolve_call : {
                        type: "empty"
                    };
                    resolvedAST.parent = partiallyResolvedParent;
                    if (resolvedAST.type === "async") {
                        nextAsyncIdMap.set(resolvedAST.id, resolvedAST);
                    }
                    var _resolvedAST_asyncNodesResolved;
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = ((_resolvedAST_asyncNodesResolved = resolvedAST.asyncNodesResolved) !== null && _resolvedAST_asyncNodesResolved !== void 0 ? _resolvedAST_asyncNodesResolved : [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var id = _step.value;
                            nextAsyncIdMap.set(id, resolvedAST);
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
                    resolveOptions.node = resolvedAST;
                    this.ASTMap.set(resolvedAST, node);
                    var resolved = this.hooks.resolve.call(void 0, resolvedAST, resolveOptions);
                    var updated = !dequal(previousResult === null || previousResult === void 0 ? void 0 : previousResult.value, resolved);
                    if (previousResult && !updated) {
                        resolved = previousResult === null || previousResult === void 0 ? void 0 : previousResult.value;
                    }
                    var childDependencies = /* @__PURE__ */ new Set();
                    dependencyModel.trackSubset("children");
                    if ("children" in resolvedAST) {
                        var _resolvedAST_children;
                        var newChildren = (_resolvedAST_children = resolvedAST.children) === null || _resolvedAST_children === void 0 ? void 0 : _resolvedAST_children.map(function(child) {
                            var computedChildTree = _this.computeTree(child.value, node, dataChanges, cacheUpdate, resolveOptions, resolvedAST, prevASTMap, nextAsyncIdMap);
                            var childTreeDeps = computedChildTree.dependencies, childNode = computedChildTree.node, childUpdated = computedChildTree.updated, childValue = computedChildTree.value;
                            childTreeDeps.forEach(function(binding) {
                                return childDependencies.add(binding);
                            });
                            if (childValue) {
                                if (childNode.type === "multi-node" && !childNode.override) {
                                    var arr = (0, import_timm4.addLast)(dlv_es_default(resolved, child.path, []), childValue);
                                    resolved = (0, import_timm4.setIn)(resolved, child.path, arr);
                                } else {
                                    resolved = (0, import_timm4.setIn)(resolved, child.path, childValue);
                                }
                            }
                            updated = updated || childUpdated;
                            return _object_spread_props(_object_spread({}, child), {
                                value: childNode
                            });
                        });
                        resolvedAST.children = newChildren;
                    } else if (resolvedAST.type === "multi-node") {
                        var childValue = [];
                        var rawParentToPassIn = node;
                        resolvedAST.values = resolvedAST.values.map(function(mValue) {
                            var mTree = _this.computeTree(mValue, rawParentToPassIn, dataChanges, cacheUpdate, resolveOptions, resolvedAST, prevASTMap, nextAsyncIdMap);
                            if (mTree.value !== void 0 && mTree.value !== null) {
                                mTree.dependencies.forEach(function(bindingDep) {
                                    return childDependencies.add(bindingDep);
                                });
                                updated = updated || mTree.updated;
                                childValue.push(mTree.value);
                            }
                            return mTree.node;
                        });
                        resolved = childValue;
                    }
                    childDependencies.forEach(function(bindingDep) {
                        return dependencyModel.addChildReadDep(bindingDep);
                    });
                    dependencyModel.trackSubset("core");
                    if (previousResult && !updated) {
                        resolved = previousResult === null || previousResult === void 0 ? void 0 : previousResult.value;
                    }
                    resolved = this.hooks.afterResolve.call(resolved, resolvedAST, _object_spread_props(_object_spread({}, resolveOptions), {
                        getDependencies: function(scope) {
                            return dependencyModel.getDependencies(scope);
                        }
                    }));
                    var update = {
                        node: resolvedAST,
                        updated: updated,
                        value: resolved,
                        dependencies: /* @__PURE__ */ new Set(_to_consumable_array(dependencyModel.getDependencies()).concat(_to_consumable_array(childDependencies)))
                    };
                    this.hooks.afterNodeUpdate.call(node, rawParent, update);
                    cacheUpdate.set(node, update);
                    return update;
                }
            }
        ]);
        return Resolver;
    }();
    var CrossfieldProvider = /*#__PURE__*/ function() {
        function CrossfieldProvider(initialView, parser, logger) {
            _class_call_check(this, CrossfieldProvider);
            this.allValidations = /* @__PURE__ */ new Set();
            this.byBinding = /* @__PURE__ */ new Map();
            this.logger = logger;
            this.parse(initialView, parser);
        }
        _create_class(CrossfieldProvider, [
            {
                key: "parse",
                value: function parse(contentView, parser) {
                    var _this = this;
                    var xfieldRefs = contentView.validation;
                    if (xfieldRefs === void 0) {
                        return;
                    }
                    if (!Array.isArray(xfieldRefs)) {
                        var _this_logger;
                        (_this_logger = this.logger) === null || _this_logger === void 0 ? void 0 : _this_logger.warn("Unable to register view validations for id: ".concat(contentView.id, ". 'validation' property must be an Array."));
                        return;
                    }
                    xfieldRefs.forEach(function(vRef) {
                        var withDefaults = _object_spread({
                            trigger: "navigation",
                            severity: "error"
                        }, vRef);
                        _this.allValidations.add(withDefaults);
                        var ref = vRef.ref;
                        if (ref) {
                            var parsed = parser(ref);
                            if (_this.byBinding.has(parsed)) {
                                var _this_byBinding_get;
                                (_this_byBinding_get = _this.byBinding.get(parsed)) === null || _this_byBinding_get === void 0 ? void 0 : _this_byBinding_get.push(withDefaults);
                            } else {
                                _this.byBinding.set(parsed, [
                                    withDefaults
                                ]);
                            }
                        }
                    });
                }
            },
            {
                key: "getValidationsForBinding",
                value: function getValidationsForBinding(binding) {
                    return this.byBinding.get(binding);
                }
            }
        ]);
        return CrossfieldProvider;
    }();
    var ViewInstance = /*#__PURE__*/ function() {
        function ViewInstance(initialView, resolverOptions) {
            _class_call_check(this, ViewInstance);
            this.hooks = {
                onUpdate: new SyncHook(),
                parser: new SyncHook(),
                resolver: new SyncHook(),
                templatePlugin: new SyncHook()
            };
            this.initialView = initialView;
            this.resolverOptions = resolverOptions;
        }
        _create_class(ViewInstance, [
            {
                key: "updateAsync",
                value: function updateAsync(asyncNode) {
                    var _this_resolver;
                    var update = (_this_resolver = this.resolver) === null || _this_resolver === void 0 ? void 0 : _this_resolver.update(/* @__PURE__ */ new Set(), /* @__PURE__ */ new Set([
                        asyncNode
                    ]));
                    this.lastUpdate = update;
                    this.hooks.onUpdate.call(update);
                }
            },
            {
                key: "update",
                value: function update(changes) {
                    var _this_resolver;
                    if (this.rootNode === void 0) {
                        this.validationProvider = new CrossfieldProvider(this.initialView, this.resolverOptions.parseBinding, this.resolverOptions.logger);
                        if (this.templatePlugin) {
                            this.hooks.templatePlugin.call(this.templatePlugin);
                        } else {
                            var _this_resolverOptions_logger;
                            (_this_resolverOptions_logger = this.resolverOptions.logger) === null || _this_resolverOptions_logger === void 0 ? void 0 : _this_resolverOptions_logger.warn("templatePlugin not set for View, legacy templates may not work");
                        }
                        var parser = new Parser();
                        this.hooks.parser.call(parser);
                        this.rootNode = parser.parseView(this.initialView);
                        this.resolver = new Resolver(this.rootNode, _object_spread_props(_object_spread({}, this.resolverOptions), {
                            parseNode: parser.parseObject.bind(parser)
                        }));
                        this.hooks.resolver.call(this.resolver);
                    }
                    var update = (_this_resolver = this.resolver) === null || _this_resolver === void 0 ? void 0 : _this_resolver.update(changes);
                    if (this.lastUpdate === update) {
                        return this.lastUpdate;
                    }
                    this.lastUpdate = update;
                    this.hooks.onUpdate.call(update);
                    return update;
                }
            },
            {
                key: "getValidationsForBinding",
                value: function getValidationsForBinding(binding) {
                    var _this_validationProvider;
                    return (_this_validationProvider = this.validationProvider) === null || _this_validationProvider === void 0 ? void 0 : _this_validationProvider.getValidationsForBinding(binding);
                }
            },
            {
                key: "setTemplatePlugin",
                value: function setTemplatePlugin(plugin) {
                    this.templatePlugin = plugin;
                }
            }
        ]);
        return ViewInstance;
    }();
    var Builder = /*#__PURE__*/ function() {
        function _Builder() {
            _class_call_check(this, _Builder);
        }
        _create_class(_Builder, null, [
            {
                key: "asset",
                value: /**
     * Creates an asset node
     *
     * @param value - the value to put in the asset node
     */ function asset(value) {
                    return {
                        type: "asset",
                        value: value
                    };
                }
            },
            {
                key: "assetWrapper",
                value: function assetWrapper(value) {
                    var valueNode = _Builder.value();
                    _Builder.addChild(valueNode, "asset", value);
                    return valueNode;
                }
            },
            {
                key: "value",
                value: /**
     * Creates a value node
     *
     * @param v - The object to put in the value node
     */ function value(v) {
                    return {
                        type: "value",
                        value: v
                    };
                }
            },
            {
                key: "multiNode",
                value: /**
     * Creates a multiNode and associates the multiNode as the parent
     * of all the value nodes
     *
     * @param values - the value, applicability or async nodes to put in the multinode
     */ function multiNode() {
                    for(var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++){
                        values[_key] = arguments[_key];
                    }
                    var m = {
                        type: "multi-node",
                        override: true,
                        values: values
                    };
                    values.forEach(function(v) {
                        v.parent = m;
                    });
                    return m;
                }
            },
            {
                key: "asyncNode",
                value: /**
     * Creates an async node
     *
     * @param id - the id of async node. It should be identical for each async node
     */ function asyncNode(id) {
                    var flatten2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, onValueReceived = arguments.length > 2 ? arguments[2] : void 0;
                    return {
                        id: id,
                        type: "async",
                        flatten: flatten2,
                        onValueReceived: onValueReceived,
                        value: {
                            type: "value",
                            value: {
                                id: id
                            }
                        }
                    };
                }
            },
            {
                key: "addChild",
                value: /**
     * Adds a child node to a node
     *
     * @param node - The node to add a child to
     * @param path - The path at which to add the child
     * @param child - The child node
     */ function addChild(node, path, child) {
                    child.parent = node;
                    var newChild = {
                        path: Array.isArray(path) ? path : [
                            path
                        ],
                        value: child
                    };
                    node.children = node.children || [];
                    node.children.push(newChild);
                    return node;
                }
            },
            {
                key: "updateChildrenByPath",
                value: /**
     * Updates children of a node of the same path and preserves order
     *
     * @param node - The node to update children for
     * @param pathToMatch - The path to match against child paths
     * @param mapFn - Function to transform matching children
     */ function updateChildrenByPath(node, pathToMatch, updateFn) {
                    if (!node.children) return node;
                    var updatedChildren = node.children.map(function(child) {
                        return(// Check if paths match exactly
                        child.path.join() === pathToMatch.join() ? _object_spread_props(_object_spread({}, child), {
                            value: updateFn(child)
                        }) : child);
                    });
                    return _object_spread_props(_object_spread({}, node), {
                        children: updatedChildren
                    });
                }
            }
        ]);
        return _Builder;
    }();
    var templateSymbol = Symbol("template");
    var TemplatePlugin = /*#__PURE__*/ function() {
        function TemplatePlugin(options) {
            _class_call_check(this, TemplatePlugin);
            this.hooks = {
                resolveTemplateSubstitutions: new SyncWaterfallHook()
            };
            this.options = options;
        }
        _create_class(TemplatePlugin, [
            {
                key: "parseTemplate",
                value: function parseTemplate(parseObject, node, options) {
                    var _this = this;
                    var template = node.template, depth = node.depth;
                    var data = options.data.model.get(node.data);
                    if (!data) {
                        return null;
                    }
                    if (!Array.isArray(data)) {
                        throw new Error("Template using '".concat(node.data, "' but is not an array"));
                    }
                    var values = [];
                    data.forEach(function(dataItem, index) {
                        var templateSubstitutions = _this.hooks.resolveTemplateSubstitutions.call([
                            {
                                expression: new RegExp("_index".concat(depth || "", "_")),
                                value: String(index)
                            }
                        ], {
                            depth: depth,
                            data: dataItem,
                            index: index
                        });
                        var templateStr = JSON.stringify(template);
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = templateSubstitutions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var _step_value = _step.value, expression = _step_value.expression, value = _step_value.value;
                                var flags = "g";
                                if ((typeof expression === "undefined" ? "undefined" : _type_of(expression)) === "object") {
                                    flags = "".concat(expression.flags).concat(expression.global ? "" : "g");
                                }
                                templateStr = templateStr.replace(new RegExp(expression, flags), value);
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
                        var parsed = parseObject(JSON.parse(templateStr), "value", {
                            templateDepth: node.depth + 1
                        });
                        if (parsed) {
                            values.push(parsed);
                        }
                    });
                    var result = {
                        type: "multi-node",
                        override: false,
                        values: values
                    };
                    if (node.placement !== void 0) {
                        result[templateSymbol] = node.placement;
                    }
                    return result;
                }
            },
            {
                key: "applyParser",
                value: function applyParser(parser) {
                    var _this = this;
                    parser.hooks.onCreateASTNode.tap("template", function(node) {
                        if (node && node.type === "template" && !node.dynamic) {
                            return _this.parseTemplate(parser.parseObject.bind(parser), node, _this.options);
                        }
                        return node;
                    });
                    parser.hooks.onCreateASTNode.tap("template", function(node) {
                        var getTemplateSymbolValue = function getTemplateSymbolValue(node2) {
                            if (node2.type === "multi-node") {
                                return node2[templateSymbol];
                            } else if (node2.type === "template") {
                                return node2.placement;
                            }
                            return void 0;
                        };
                        if (node && (node.type === "view" || node.type === "asset") && Array.isArray(node.children)) {
                            node.children = node.children.sort(function(a, b) {
                                var aPath = a.path.join();
                                var bPath = b.path.join();
                                var pathsEqual = aPath === bPath;
                                if (pathsEqual) {
                                    var aPlacement = getTemplateSymbolValue(a.value);
                                    var bPlacement = getTemplateSymbolValue(b.value);
                                    if (aPlacement !== void 0 && bPlacement === void 0) {
                                        return aPlacement === "prepend" ? -1 : 1;
                                    } else if (bPlacement !== void 0 && aPlacement === void 0) {
                                        return bPlacement === "prepend" ? 1 : -1;
                                    } else if (aPlacement !== void 0 && bPlacement !== void 0) {
                                        if (aPlacement === bPlacement) {
                                            return 0;
                                        }
                                        return aPlacement === "prepend" ? -1 : 1;
                                    }
                                    return 0;
                                }
                                return aPath > bPath ? 1 : -1;
                            });
                        }
                        return node;
                    });
                    parser.hooks.parseNode.tap("template", function(obj, _nodeType, options, childOptions) {
                        if (childOptions && hasTemplateKey(childOptions.key)) {
                            return obj.map(function(template) {
                                var _options_templateDepth, _template_dynamic;
                                var templateAST = parser.createASTNode({
                                    type: "template",
                                    depth: (_options_templateDepth = options.templateDepth) !== null && _options_templateDepth !== void 0 ? _options_templateDepth : 0,
                                    data: template.data,
                                    template: template.value,
                                    dynamic: (_template_dynamic = template.dynamic) !== null && _template_dynamic !== void 0 ? _template_dynamic : false,
                                    placement: template.placement
                                }, template);
                                if (!templateAST) return;
                                if (templateAST.type === "multi-node") {
                                    templateAST.values.forEach(function(v) {
                                        v.parent = templateAST;
                                    });
                                }
                                return {
                                    path: _to_consumable_array(childOptions.path).concat([
                                        template.output
                                    ]),
                                    value: templateAST
                                };
                            }).filter(Boolean);
                        }
                    });
                }
            },
            {
                key: "applyResolverHooks",
                value: function applyResolverHooks(resolver) {
                    var _this = this;
                    resolver.hooks.beforeResolve.tap("template", function(node, options) {
                        if (node && node.type === "template" && node.dynamic) {
                            return _this.parseTemplate(options.parseNode, node, options);
                        }
                        return node;
                    });
                }
            },
            {
                key: "apply",
                value: function apply(view) {
                    view.hooks.parser.tap("template", this.applyParser.bind(this));
                    view.hooks.resolver.tap("template", this.applyResolverHooks.bind(this));
                    view.setTemplatePlugin(this);
                }
            }
        ]);
        return TemplatePlugin;
    }();
    var createPatternMatcher = function(start, end) {
        return function(testStr) {
            var startLocation = testStr.indexOf(start);
            if (startLocation === -1) {
                return false;
            }
            var endLocation = testStr.indexOf(end);
            if (endLocation === -1) {
                return false;
            }
            return startLocation < endLocation;
        };
    };
    var bindingResolveLookup = createPatternMatcher("{{", "}}");
    var expressionResolveLookup = createPatternMatcher("@[", "]@");
    function resolveAllRefs(node, resolveOptions, propertiesToSkip) {
        if (node === null || node === void 0 || (typeof node === "undefined" ? "undefined" : _type_of(node)) !== "object" && typeof node !== "string") {
            return node;
        }
        if (typeof node === "string") {
            return resolveString(node, resolveOptions);
        }
        var newNode = node;
        Object.keys(node).forEach(function(key) {
            if (propertiesToSkip.has(key)) {
                return;
            }
            var val = node[key];
            var newVal = val;
            if ((typeof val === "undefined" ? "undefined" : _type_of(val)) === "object") {
                newVal = resolveAllRefs(val, resolveOptions, propertiesToSkip);
            } else if (typeof val === "string") {
                newVal = resolveString(val, resolveOptions);
            }
            if (newVal !== val) {
                newNode = (0, import_timm6.set)(newNode, key, newVal);
            }
        });
        return newNode;
    }
    var findBasePath = function(node, resolver) {
        var parentNode = node.parent;
        if (!parentNode) {
            return [];
        }
        if ("children" in parentNode) {
            var _parentNode_children_find, _parentNode_children;
            var original = resolver.getSourceNode(node);
            var _parentNode_children_find_path;
            return (_parentNode_children_find_path = (_parentNode_children = parentNode.children) === null || _parentNode_children === void 0 ? void 0 : (_parentNode_children_find = _parentNode_children.find(function(child) {
                return child.value === original;
            })) === null || _parentNode_children_find === void 0 ? void 0 : _parentNode_children_find.path) !== null && _parentNode_children_find_path !== void 0 ? _parentNode_children_find_path : [];
        }
        if (parentNode.type !== "multi-node") {
            return [];
        }
        return findBasePath(parentNode, resolver);
    };
    var StringResolverPlugin = /*#__PURE__*/ function() {
        function StringResolverPlugin() {
            _class_call_check(this, StringResolverPlugin);
            this.propertiesToSkipCache = /* @__PURE__ */ new Map();
        }
        _create_class(StringResolverPlugin, [
            {
                key: "applyResolver",
                value: function applyResolver(resolver) {
                    var _this = this;
                    resolver.hooks.resolve.tap("string-resolver", function(value, node, options) {
                        if (node.type === "empty" || node.type === "unknown") {
                            return null;
                        }
                        if (node.type === "value" || node.type === "asset" || node.type === "view") {
                            var _node_parent, _node_parent_parent, _node_parent1, _node_parent_parent1, _node_parent2, _node_parent_parent_value;
                            var propsToSkip;
                            if (node.type === "asset" || node.type === "view") {
                                var _node_plugins_stringResolver, _node_plugins, _node_value;
                                var _node_plugins_stringResolver_propertiesToSkip;
                                propsToSkip = new Set((_node_plugins_stringResolver_propertiesToSkip = (_node_plugins = node.plugins) === null || _node_plugins === void 0 ? void 0 : (_node_plugins_stringResolver = _node_plugins.stringResolver) === null || _node_plugins_stringResolver === void 0 ? void 0 : _node_plugins_stringResolver.propertiesToSkip) !== null && _node_plugins_stringResolver_propertiesToSkip !== void 0 ? _node_plugins_stringResolver_propertiesToSkip : [
                                    "exp"
                                ]);
                                if ((_node_value = node.value) === null || _node_value === void 0 ? void 0 : _node_value.id) {
                                    _this.propertiesToSkipCache.set(node.value.id, propsToSkip);
                                }
                            } else if (((_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : _node_parent.type) === "multi-node" && (((_node_parent1 = node.parent) === null || _node_parent1 === void 0 ? void 0 : (_node_parent_parent = _node_parent1.parent) === null || _node_parent_parent === void 0 ? void 0 : _node_parent_parent.type) === "asset" || ((_node_parent2 = node.parent) === null || _node_parent2 === void 0 ? void 0 : (_node_parent_parent1 = _node_parent2.parent) === null || _node_parent_parent1 === void 0 ? void 0 : _node_parent_parent1.type) === "view") && ((_node_parent_parent_value = node.parent.parent.value) === null || _node_parent_parent_value === void 0 ? void 0 : _node_parent_parent_value.id) && _this.propertiesToSkipCache.has(node.parent.parent.value.id)) {
                                propsToSkip = _this.propertiesToSkipCache.get(node.parent.parent.value.id);
                            } else {
                                propsToSkip = /* @__PURE__ */ new Set([
                                    "exp"
                                ]);
                            }
                            var nodePath = findBasePath(node, resolver);
                            if (nodePath.length > 0 && nodePath.some(function(segment) {
                                return propsToSkip.has(segment.toString());
                            })) {
                                return node.value;
                            }
                            return resolveAllRefs(node.value, options, propsToSkip);
                        }
                        return value;
                    });
                }
            },
            {
                key: "apply",
                value: function apply(view) {
                    view.hooks.resolver.tap("string-resolver", this.applyResolver.bind(this));
                }
            }
        ]);
        return StringResolverPlugin;
    }();
    var ApplicabilityPlugin = /*#__PURE__*/ function() {
        function ApplicabilityPlugin() {
            _class_call_check(this, ApplicabilityPlugin);
        }
        _create_class(ApplicabilityPlugin, [
            {
                key: "isApplicability",
                value: function isApplicability(obj) {
                    return obj && Object.prototype.hasOwnProperty.call(obj, "applicability");
                }
            },
            {
                key: "applyResolver",
                value: function applyResolver(resolver) {
                    resolver.hooks.beforeResolve.tap("applicability", function(node, options) {
                        var newNode = node;
                        if ((node === null || node === void 0 ? void 0 : node.type) === "applicability") {
                            var isApplicable = options.evaluate(node.expression);
                            if (isApplicable === false) {
                                return null;
                            }
                            newNode = node.value;
                        }
                        return newNode;
                    });
                }
            },
            {
                key: "applyParser",
                value: function applyParser(parser) {
                    var _this = this;
                    parser.hooks.parseNode.tap("applicability", function(obj, nodeType, options, childOptions) {
                        if (_this.isApplicability(obj)) {
                            var parsedApplicability = parser.parseObject((0, import_timm7.omit)(obj, "applicability"), nodeType, options);
                            if (!parsedApplicability) {
                                return childOptions ? [] : null;
                            }
                            var applicabilityNode = parser.createASTNode({
                                type: "applicability",
                                expression: obj.applicability,
                                value: parsedApplicability
                            }, obj);
                            if (!applicabilityNode) {
                                return childOptions ? [] : null;
                            }
                            if (applicabilityNode.type === "applicability") {
                                applicabilityNode.value.parent = applicabilityNode;
                            }
                            return childOptions ? [
                                {
                                    path: _to_consumable_array(childOptions.path).concat([
                                        childOptions.key
                                    ]),
                                    value: applicabilityNode
                                }
                            ] : applicabilityNode;
                        }
                    });
                }
            },
            {
                key: "apply",
                value: function apply(view) {
                    view.hooks.resolver.tap("applicability", this.applyResolver.bind(this));
                    view.hooks.parser.tap("applicability", this.applyParser.bind(this));
                }
            }
        ]);
        return ApplicabilityPlugin;
    }();
    var SwitchPlugin = /*#__PURE__*/ function() {
        function SwitchPlugin(options) {
            _class_call_check(this, SwitchPlugin);
            this.options = options;
        }
        _create_class(SwitchPlugin, [
            {
                key: "resolveSwitch",
                value: function resolveSwitch(node, options) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = node.cases[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var switchCase = _step.value;
                            var isApplicable = options.evaluate(switchCase.case);
                            if (isApplicable) {
                                return switchCase.value;
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
                    return EMPTY_NODE;
                }
            },
            {
                key: "isSwitch",
                value: function isSwitch(obj) {
                    return obj && (Object.prototype.hasOwnProperty.call(obj, "dynamicSwitch") || Object.prototype.hasOwnProperty.call(obj, "staticSwitch"));
                }
            },
            {
                key: "applyParser",
                value: function applyParser(parser) {
                    var _this = this;
                    parser.hooks.onCreateASTNode.tap("switch", function(node) {
                        if (node && node.type === "switch" && !node.dynamic) {
                            return _this.resolveSwitch(node, _this.options);
                        }
                        return node;
                    });
                    parser.hooks.parseNode.tap("switch", function(obj, _nodeType, options, childOptions) {
                        if (_this.isSwitch(obj) || childOptions && hasSwitchKey(childOptions.key)) {
                            var objToParse = childOptions && hasSwitchKey(childOptions.key) ? _define_property({}, childOptions.key, obj) : obj;
                            var dynamic = "dynamicSwitch" in objToParse;
                            var switchContent = dynamic ? objToParse.dynamicSwitch : objToParse.staticSwitch;
                            var cases = switchContent.map(function(switchCase) {
                                var switchCaseExpr = switchCase.case, switchBody = _object_without_properties(switchCase, [
                                    "case"
                                ]);
                                var value = parser.parseObject(switchBody, "value", options);
                                if (value) {
                                    return {
                                        case: switchCaseExpr,
                                        value: value
                                    };
                                }
                                return;
                            }).filter(Boolean);
                            var switchAST = parser.createASTNode({
                                type: "switch",
                                dynamic: dynamic,
                                cases: cases
                            }, objToParse);
                            if (!switchAST || switchAST.type === "empty") {
                                return childOptions ? [] : null;
                            }
                            if (switchAST.type === "switch") {
                                switchAST.cases.forEach(function(sCase) {
                                    sCase.value.parent = switchAST;
                                });
                            }
                            if (childOptions) {
                                var _switchAST_children;
                                var path = _to_consumable_array(childOptions.path).concat([
                                    childOptions.key
                                ]);
                                var value = switchAST;
                                if (switchAST.type === "value" && ((_switchAST_children = switchAST.children) === null || _switchAST_children === void 0 ? void 0 : _switchAST_children.length) === 1 && switchAST.value === void 0) {
                                    var firstChild = switchAST.children[0];
                                    path = _to_consumable_array(path).concat(_to_consumable_array(firstChild.path));
                                    value = firstChild.value;
                                }
                                return [
                                    {
                                        path: path,
                                        value: value
                                    }
                                ];
                            }
                            return switchAST;
                        }
                    });
                }
            },
            {
                key: "applyResolver",
                value: function applyResolver(resolver) {
                    var _this = this;
                    resolver.hooks.beforeResolve.tap("switch", function(node, options) {
                        if (node && node.type === "switch" && node.dynamic) {
                            return _this.resolveSwitch(node, options);
                        }
                        return node;
                    });
                }
            },
            {
                key: "apply",
                value: function apply(view) {
                    view.hooks.parser.tap("switch", this.applyParser.bind(this));
                    view.hooks.resolver.tap("switch", this.applyResolver.bind(this));
                }
            }
        ]);
        return SwitchPlugin;
    }();
    var MultiNodePlugin = /*#__PURE__*/ function() {
        function MultiNodePlugin() {
            _class_call_check(this, MultiNodePlugin);
        }
        _create_class(MultiNodePlugin, [
            {
                key: "applyParser",
                value: function applyParser(parser) {
                    parser.hooks.parseNode.tap("multi-node", function(obj, nodeType, options, childOptions) {
                        if ((childOptions === void 0 || !hasTemplateKey(childOptions.key)) && Array.isArray(obj)) {
                            var values = obj.map(function(childVal) {
                                return parser.parseObject(childVal, "value", options);
                            }).filter(function(child) {
                                return !!child;
                            });
                            if (!values.length) {
                                return [];
                            }
                            var multiNode = parser.createASTNode({
                                type: "multi-node",
                                override: childOptions !== void 0 && !hasTemplateValues(childOptions.parentObj, childOptions.key),
                                values: values
                            }, obj);
                            if (!multiNode) {
                                return [];
                            }
                            if (multiNode.type === "multi-node") {
                                multiNode.values.forEach(function(v) {
                                    v.parent = multiNode;
                                });
                            }
                            return childOptions === void 0 ? multiNode : [
                                {
                                    path: _to_consumable_array(childOptions.path).concat([
                                        childOptions.key
                                    ]),
                                    value: multiNode
                                }
                            ];
                        }
                    });
                }
            },
            {
                key: "apply",
                value: function apply(view) {
                    view.hooks.parser.tap("multi-node", this.applyParser.bind(this));
                }
            }
        ]);
        return MultiNodePlugin;
    }();
    var AssetPlugin = /*#__PURE__*/ function() {
        function AssetPlugin() {
            _class_call_check(this, AssetPlugin);
        }
        _create_class(AssetPlugin, [
            {
                key: "applyParser",
                value: function applyParser(parser) {
                    parser.hooks.parseNode.tap("asset", function(obj, nodeType, options, childOptions) {
                        if ((childOptions === null || childOptions === void 0 ? void 0 : childOptions.key) === "asset" && (typeof obj === "undefined" ? "undefined" : _type_of(obj)) === "object") {
                            var assetAST = parser.parseObject(obj, "asset", options);
                            if (!assetAST) {
                                return [];
                            }
                            return [
                                {
                                    path: _to_consumable_array(childOptions.path).concat([
                                        childOptions.key
                                    ]),
                                    value: assetAST
                                }
                            ];
                        }
                    });
                }
            },
            {
                key: "apply",
                value: function apply(view) {
                    view.hooks.parser.tap("asset", this.applyParser.bind(this));
                }
            }
        ]);
        return AssetPlugin;
    }();
    var LocalStateStore = /*#__PURE__*/ function() {
        function LocalStateStore(onUpdate) {
            _class_call_check(this, LocalStateStore);
            this.updateCallback = onUpdate;
            this.state = /* @__PURE__ */ new Map();
        }
        _create_class(LocalStateStore, [
            {
                key: "removeKey",
                value: function removeKey(key) {
                    this.state.delete(key);
                }
            },
            {
                key: "reset",
                value: function reset() {
                    this.state.clear();
                }
            },
            {
                key: "useSharedState",
                value: function useSharedState(key) {
                    var _this = this;
                    return function(initialState) {
                        if (!_this.state.has(key)) {
                            _this.state.set(key, initialState);
                        }
                        return [
                            _this.state.get(key),
                            function(newState) {
                                var current = _this.state.get(key);
                                _this.state.set(key, newState);
                                if (current !== newState) {
                                    var _this_updateCallback, _this1;
                                    (_this_updateCallback = (_this1 = _this).updateCallback) === null || _this_updateCallback === void 0 ? void 0 : _this_updateCallback.call(_this1);
                                }
                            }
                        ];
                    };
                }
            },
            {
                key: "getLocalStateFunction",
                value: function getLocalStateFunction(key, countKey) {
                    var _this = this;
                    return function(initialState) {
                        if (!_this.state.has(key)) {
                            _this.state.set(key, []);
                        }
                        if (!_this.state.has(countKey)) {
                            _this.state.set(countKey, 0);
                        }
                        var localState = _this.state.get(key);
                        var oldCount = _this.state.get(countKey);
                        _this.state.set(countKey, oldCount + 1);
                        if (localState.length <= oldCount) {
                            localState.push(initialState);
                        }
                        var value = localState[oldCount];
                        return [
                            value,
                            function(newState) {
                                var oldValue = localState[oldCount];
                                localState[oldCount] = newState;
                                if (oldValue !== newState) {
                                    var _this_updateCallback, _this1;
                                    (_this_updateCallback = (_this1 = _this).updateCallback) === null || _this_updateCallback === void 0 ? void 0 : _this_updateCallback.call(_this1);
                                }
                            }
                        ];
                    };
                }
            }
        ]);
        return LocalStateStore;
    }();
    function findUp(node, target) {
        if (node === target) {
            return true;
        }
        if (node.parent) {
            return findUp(node.parent, target);
        }
        return false;
    }
    var AssetTransformCorePlugin = /*#__PURE__*/ function() {
        function AssetTransformCorePlugin(registry) {
            _class_call_check(this, AssetTransformCorePlugin);
            this.registry = registry;
            this.stateStore = /* @__PURE__ */ new Map();
            this.beforeResolveSymbol = Symbol("before resolve");
            this.resolveSymbol = Symbol("resolve");
            this.beforeResolveCountSymbol = Symbol("before resolve count");
            this.resolveCountSymbol = Symbol("resolve count");
        }
        _create_class(AssetTransformCorePlugin, [
            {
                key: "apply",
                value: function apply(view) {
                    var _this = this;
                    this.stateStore.clear();
                    view.hooks.resolver.tap("asset-transform", function(resolver) {
                        var lastUpdatedNode;
                        var updateState = function(node) {
                            lastUpdatedNode = node;
                            view.update(/* @__PURE__ */ new Set());
                        };
                        var getStore = function(node, stepKey) {
                            var store;
                            var countKey = stepKey === _this.resolveSymbol ? _this.resolveCountSymbol : _this.beforeResolveCountSymbol;
                            var storedState = _this.stateStore.get(node);
                            if (storedState) {
                                store = storedState;
                                store.removeKey(countKey);
                            } else {
                                store = new LocalStateStore(function() {
                                    updateState(node);
                                });
                                _this.stateStore.set(node, store);
                            }
                            return {
                                useSharedState: function(key) {
                                    return store.useSharedState(key);
                                },
                                useLocalState: function(initialState) {
                                    return store.getLocalStateFunction(stepKey, countKey)(initialState);
                                }
                            };
                        };
                        resolver.hooks.beforeResolve.tap("asset-transform", function(node, options) {
                            if (node && (node.type === "asset" || node.type === "view")) {
                                var transform3 = _this.registry.get(node.value);
                                if (transform3 === null || transform3 === void 0 ? void 0 : transform3.beforeResolve) {
                                    var _options_node;
                                    var store = getStore((_options_node = options.node) !== null && _options_node !== void 0 ? _options_node : node, _this.beforeResolveSymbol);
                                    return transform3.beforeResolve(node, options, store);
                                }
                            }
                            return node;
                        });
                        resolver.hooks.afterUpdate.tap("asset-transform", function() {
                            lastUpdatedNode = void 0;
                        });
                        resolver.hooks.skipResolve.tap("asset-transform", function(skip, node) {
                            if (!skip || !lastUpdatedNode) {
                                return skip;
                            }
                            var isParentOfUpdated = findUp(lastUpdatedNode, node);
                            var isChildOfUpdated = findUp(node, lastUpdatedNode);
                            return !isParentOfUpdated && !isChildOfUpdated;
                        });
                        resolver.hooks.afterResolve.tap("asset-transform", function(value, node, options) {
                            if (node.type !== "asset" && node.type !== "view") {
                                return value;
                            }
                            var originalNode = resolver.getSourceNode(node);
                            if (!originalNode) {
                                return value;
                            }
                            var transform3 = _this.registry.get(value);
                            if (transform3 === null || transform3 === void 0 ? void 0 : transform3.resolve) {
                                var store = getStore(originalNode, _this.resolveSymbol);
                                return transform3 === null || transform3 === void 0 ? void 0 : transform3.resolve(value, options, store);
                            }
                            return value;
                        });
                    });
                }
            }
        ]);
        return AssetTransformCorePlugin;
    }();
    var FlowInstance = /*#__PURE__*/ function() {
        function FlowInstance(id, flow, options) {
            var _this = this;
            _class_call_check(this, FlowInstance);
            this.isTransitioning = false;
            this.hooks = {
                beforeStart: new SyncBailHook(),
                onStart: new SyncHook(),
                onEnd: new SyncHook(),
                skipTransition: new SyncBailHook(),
                beforeTransition: new SyncWaterfallHook(),
                resolveTransitionNode: new SyncWaterfallHook(),
                transition: new SyncHook(),
                afterTransition: new SyncHook()
            };
            this.id = id;
            this.flow = flow;
            this.log = options === null || options === void 0 ? void 0 : options.logger;
            this.history = [];
            this.hooks.transition.tap("startPromise", function(_oldState, nextState) {
                return _async_to_generator(function() {
                    var newState;
                    return _ts_generator(this, function(_state) {
                        newState = nextState.value;
                        if (this.flowPromise && newState.state_type === "END") {
                            this.flowPromise.resolve(newState);
                        }
                        return [
                            2
                        ];
                    });
                }).call(_this);
            });
        }
        _create_class(FlowInstance, [
            {
                key: "start",
                value: /** Start the state machine */ function start() {
                    return _async_to_generator(function() {
                        var _this_log, initialState;
                        return _ts_generator(this, function(_state) {
                            if (this.flowPromise) {
                                ;
                                (_this_log = this.log) === null || _this_log === void 0 ? void 0 : _this_log.warn("Already called start for flow");
                                return [
                                    2,
                                    this.flowPromise.promise
                                ];
                            }
                            this.flow = this.hooks.beforeStart.call(this.flow) || this.flow;
                            if (this.flow.onStart) {
                                this.hooks.onStart.call(this.flow.onStart);
                            }
                            initialState = this.flow.startState;
                            if (!initialState) {
                                return [
                                    2,
                                    Promise.reject(new Error("No 'startState' defined for flow"))
                                ];
                            }
                            this.flowPromise = (0, import_p_defer2.default)();
                            this.pushHistory(initialState);
                            return [
                                2,
                                this.flowPromise.promise
                            ];
                        });
                    }).call(this);
                }
            },
            {
                key: "transition",
                value: function transition(transitionValue, options) {
                    var _this_currentState, _this_log;
                    if (this.isTransitioning) {
                        var _this_currentState1;
                        throw new Error("Transitioning while ongoing transition from ".concat((_this_currentState1 = this.currentState) === null || _this_currentState1 === void 0 ? void 0 : _this_currentState1.name, " is in progress is not supported"));
                    }
                    if (((_this_currentState = this.currentState) === null || _this_currentState === void 0 ? void 0 : _this_currentState.value.state_type) === "END") {
                        var _this_log1;
                        (_this_log1 = this.log) === null || _this_log1 === void 0 ? void 0 : _this_log1.warn("Skipping transition using ".concat(transitionValue, ". Already at and END state"));
                        return;
                    }
                    if (this.currentState === void 0) {
                        throw new Error("Cannot transition when there's no current state");
                    }
                    if (options === null || options === void 0 ? void 0 : options.force) {
                        var _this_log2;
                        (_this_log2 = this.log) === null || _this_log2 === void 0 ? void 0 : _this_log2.debug("Forced transition. Skipping validation checks");
                    } else {
                        var skipTransition = this.hooks.skipTransition.call(this.currentState);
                        if (skipTransition) {
                            var _this_log3;
                            (_this_log3 = this.log) === null || _this_log3 === void 0 ? void 0 : _this_log3.debug("Skipping transition from ".concat(this.currentState.name, " b/c hook told us to"));
                            return;
                        }
                    }
                    var state = this.hooks.beforeTransition.call(this.currentState.value, transitionValue);
                    if (!("transitions" in state)) {
                        throw new Error("No transitions defined for ".concat(this.currentState.value));
                    }
                    var transitions = state.transitions;
                    var nextState = transitions[transitionValue] || transitions["*"];
                    if (nextState === void 0) {
                        var _this_log4;
                        (_this_log4 = this.log) === null || _this_log4 === void 0 ? void 0 : _this_log4.warn("No transition from ".concat(this.currentState.name, " using ").concat(transitionValue, " or *"));
                        return;
                    }
                    (_this_log = this.log) === null || _this_log === void 0 ? void 0 : _this_log.debug("Transitioning from ".concat(this.currentState.name, " to ").concat(nextState, " using ").concat(transitionValue, " "));
                    return this.pushHistory(nextState, options);
                }
            },
            {
                key: "pushHistory",
                value: function pushHistory(stateName, options) {
                    if (!Object.prototype.hasOwnProperty.call(this.flow, stateName)) {
                        throw new Error("No flow definition for: ".concat(stateName, " was found."));
                    }
                    var nextState = this.flow[stateName];
                    if (!this.flow[stateName] || (typeof nextState === "undefined" ? "undefined" : _type_of(nextState)) !== "object" || !("state_type" in nextState)) {
                        var _this_log;
                        (_this_log = this.log) === null || _this_log === void 0 ? void 0 : _this_log.error("Flow doesn't contain any states named: ".concat(stateName));
                        return;
                    }
                    var prevState = this.currentState;
                    this.isTransitioning = true;
                    nextState = this.hooks.resolveTransitionNode.call(nextState);
                    var newCurrentState = {
                        name: stateName,
                        value: nextState
                    };
                    this.currentState = newCurrentState;
                    this.history.push(stateName);
                    if (newCurrentState.value.state_type === "END" && this.flow.onEnd) {
                        this.hooks.onEnd.call(this.flow.onEnd);
                    }
                    this.hooks.transition.call(prevState, _object_spread({}, newCurrentState));
                    this.isTransitioning = false;
                    this.hooks.afterTransition.call(this);
                }
            }
        ]);
        return FlowInstance;
    }();
    var FlowController = /*#__PURE__*/ function() {
        function FlowController(navigation, options) {
            _class_call_check(this, FlowController);
            this.hooks = {
                flow: new SyncHook()
            };
            this.navigation = navigation;
            this.navStack = [];
            this.log = options === null || options === void 0 ? void 0 : options.logger;
            this.start = this.start.bind(this);
            this.run = this.run.bind(this);
            this.transition = this.transition.bind(this);
            this.addNewFlow = this.addNewFlow.bind(this);
        }
        _create_class(FlowController, [
            {
                /** Navigate to another state in the state-machine */ key: "transition",
                value: function transition(stateTransition, options) {
                    if (this.current === void 0) {
                        throw new Error("Not currently in a flow. Cannot transition.");
                    }
                    this.current.transition(stateTransition, options);
                }
            },
            {
                key: "addNewFlow",
                value: function addNewFlow(flow) {
                    this.navStack.push(flow);
                    this.current = flow;
                    this.hooks.flow.call(flow);
                }
            },
            {
                key: "run",
                value: function run(startState) {
                    return _async_to_generator(function() {
                        var _this, _this_log, startFlow, flow, end, firstItem;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _this = this;
                                    if (!Object.prototype.hasOwnProperty.call(this.navigation, startState)) {
                                        return [
                                            2,
                                            Promise.reject(new Error("No flow defined for: ".concat(startState)))
                                        ];
                                    }
                                    startFlow = this.navigation[startState];
                                    if (startFlow === null || (typeof startFlow === "undefined" ? "undefined" : _type_of(startFlow)) !== "object") {
                                        return [
                                            2,
                                            Promise.reject(new Error("Flow: ".concat(startState, " needs to be an object")))
                                        ];
                                    }
                                    (_this_log = this.log) === null || _this_log === void 0 ? void 0 : _this_log.debug("Starting flow: ".concat(startState));
                                    flow = new FlowInstance(startState, startFlow, {
                                        logger: this.log
                                    });
                                    this.addNewFlow(flow);
                                    flow.hooks.afterTransition.tap("flow-controller", function(flowInstance) {
                                        var _flowInstance_currentState;
                                        if (((_flowInstance_currentState = flowInstance.currentState) === null || _flowInstance_currentState === void 0 ? void 0 : _flowInstance_currentState.value.state_type) === "FLOW") {
                                            var _flowInstance_currentState1, _this_log;
                                            var subflowId = (_flowInstance_currentState1 = flowInstance.currentState) === null || _flowInstance_currentState1 === void 0 ? void 0 : _flowInstance_currentState1.value.ref;
                                            (_this_log = _this.log) === null || _this_log === void 0 ? void 0 : _this_log.debug("Loading subflow ".concat(subflowId));
                                            _this.run(subflowId).then(function(subFlowEndState) {
                                                var _this_log;
                                                (_this_log = _this.log) === null || _this_log === void 0 ? void 0 : _this_log.debug("Subflow ended. Using outcome: ".concat(subFlowEndState.outcome));
                                                flowInstance.transition(subFlowEndState === null || subFlowEndState === void 0 ? void 0 : subFlowEndState.outcome);
                                            });
                                        }
                                    });
                                    return [
                                        4,
                                        flow.start()
                                    ];
                                case 1:
                                    end = _state.sent();
                                    this.navStack.pop();
                                    if (this.navStack.length > 0) {
                                        firstItem = 0;
                                        this.current = this.navStack[firstItem];
                                    }
                                    return [
                                        2,
                                        end
                                    ];
                            }
                        });
                    }).call(this);
                }
            },
            {
                key: "start",
                value: function start() {
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            if (!this.navigation.BEGIN) {
                                return [
                                    2,
                                    Promise.reject(new Error("Must supply a BEGIN state"))
                                ];
                            }
                            return [
                                2,
                                this.run(this.navigation.BEGIN)
                            ];
                        });
                    }).call(this);
                }
            }
        ]);
        return FlowController;
    }();
    var ANY_CHAR_REGEX = /%([a-zA-Z]+)/g;
    var CONTEXT = "validation-binding-tracker";
    var ValidationBindingTrackerViewPlugin = /*#__PURE__*/ function() {
        function ValidationBindingTrackerViewPlugin(options) {
            _class_call_check(this, ValidationBindingTrackerViewPlugin);
            this.trackedBindings = /* @__PURE__ */ new Set();
            this.options = options;
        }
        _create_class(ValidationBindingTrackerViewPlugin, [
            {
                /** Fetch the tracked bindings in the current view */ key: "getBindings",
                value: function getBindings() {
                    return this.trackedBindings;
                }
            },
            {
                /** Add a binding to the tracked set */ key: "trackBinding",
                value: function trackBinding(binding) {
                    var _this_options_callbacks_onAdd, _this_options_callbacks;
                    if (this.trackedBindings.has(binding)) {
                        return;
                    }
                    this.trackedBindings.add(binding);
                    (_this_options_callbacks = this.options.callbacks) === null || _this_options_callbacks === void 0 ? void 0 : (_this_options_callbacks_onAdd = _this_options_callbacks.onAdd) === null || _this_options_callbacks_onAdd === void 0 ? void 0 : _this_options_callbacks_onAdd.call(_this_options_callbacks, binding);
                }
            },
            {
                /** Attach hooks to the given resolver */ key: "applyResolver",
                value: function applyResolver(resolver) {
                    var _this = this;
                    this.trackedBindings.clear();
                    var tracked = /* @__PURE__ */ new Map();
                    var sections = /* @__PURE__ */ new Map();
                    var lastViewUpdateChangeSet;
                    var lastComputedBindingTree = /* @__PURE__ */ new Map();
                    var currentBindingTree = /* @__PURE__ */ new Map();
                    var lastSectionBindingTree = /* @__PURE__ */ new Map();
                    var resolvedNodeMap = /* @__PURE__ */ new Map();
                    resolver.hooks.beforeUpdate.tap(CONTEXT, function(changes) {
                        lastViewUpdateChangeSet = changes;
                    });
                    resolver.hooks.skipResolve.tap(CONTEXT, function(shouldSkip, node) {
                        var trackedBindingsForNode = lastComputedBindingTree.get(node);
                        if (!shouldSkip || !lastViewUpdateChangeSet || !trackedBindingsForNode) {
                            return shouldSkip;
                        }
                        var intersection = new Set(_to_consumable_array(lastViewUpdateChangeSet).filter(function(b) {
                            return trackedBindingsForNode.has(b);
                        }));
                        return intersection.size === 0;
                    });
                    resolver.hooks.resolveOptions.tap(CONTEXT, function(options, node) {
                        if (options.validation === void 0) {
                            return options;
                        }
                        tracked.delete(node);
                        var track = function(binding) {
                            var _this_options_callbacks_onAdd, _this_options_callbacks;
                            var parsed = isBinding(binding) ? binding : _this.options.parseBinding(binding);
                            if (tracked.has(node)) {
                                var _tracked_get;
                                (_tracked_get = tracked.get(node)) === null || _tracked_get === void 0 ? void 0 : _tracked_get.add(parsed);
                            } else {
                                tracked.set(node, /* @__PURE__ */ new Set([
                                    parsed
                                ]));
                            }
                            var parent = node.parent;
                            while(parent){
                                if (sections.has(parent)) {
                                    var _sections_get;
                                    (_sections_get = sections.get(parent)) === null || _sections_get === void 0 ? void 0 : _sections_get.add(node);
                                    break;
                                } else {
                                    parent = parent.parent;
                                }
                            }
                            _this.trackedBindings.add(parsed);
                            (_this_options_callbacks = _this.options.callbacks) === null || _this_options_callbacks === void 0 ? void 0 : (_this_options_callbacks_onAdd = _this_options_callbacks.onAdd) === null || _this_options_callbacks_onAdd === void 0 ? void 0 : _this_options_callbacks_onAdd.call(_this_options_callbacks, parsed);
                        };
                        return _object_spread_props(_object_spread({}, options), {
                            validation: _object_spread_props(_object_spread({}, options.validation), {
                                get: function(binding, getOptions) {
                                    var _options_validation__getValidationForBinding, _options_validation;
                                    if (getOptions === null || getOptions === void 0 ? void 0 : getOptions.track) {
                                        track(binding);
                                    }
                                    var eows = (_options_validation = options.validation) === null || _options_validation === void 0 ? void 0 : (_options_validation__getValidationForBinding = _options_validation._getValidationForBinding(binding)) === null || _options_validation__getValidationForBinding === void 0 ? void 0 : _options_validation__getValidationForBinding.getAll(getOptions);
                                    var firstFieldEOW = eows === null || eows === void 0 ? void 0 : eows.find(function(eow) {
                                        return eow.displayTarget === "field" || eow.displayTarget === void 0;
                                    });
                                    return firstFieldEOW;
                                },
                                getValidationsForBinding: function getValidationsForBinding(binding, getOptions) {
                                    var _options_validation__getValidationForBinding, _options_validation;
                                    if (getOptions === null || getOptions === void 0 ? void 0 : getOptions.track) {
                                        track(binding);
                                    }
                                    var _options_validation__getValidationForBinding_getAll;
                                    return (_options_validation__getValidationForBinding_getAll = (_options_validation = options.validation) === null || _options_validation === void 0 ? void 0 : (_options_validation__getValidationForBinding = _options_validation._getValidationForBinding(binding)) === null || _options_validation__getValidationForBinding === void 0 ? void 0 : _options_validation__getValidationForBinding.getAll(getOptions)) !== null && _options_validation__getValidationForBinding_getAll !== void 0 ? _options_validation__getValidationForBinding_getAll : [];
                                },
                                getChildren: function(type) {
                                    var _lastComputedBindingTree_get;
                                    var validations = new Array();
                                    (_lastComputedBindingTree_get = lastComputedBindingTree.get(node)) === null || _lastComputedBindingTree_get === void 0 ? void 0 : _lastComputedBindingTree_get.forEach(function(binding) {
                                        var _options_validation__getValidationForBinding, _options_validation;
                                        var eow = (_options_validation = options.validation) === null || _options_validation === void 0 ? void 0 : (_options_validation__getValidationForBinding = _options_validation._getValidationForBinding(binding)) === null || _options_validation__getValidationForBinding === void 0 ? void 0 : _options_validation__getValidationForBinding.get();
                                        if (eow && (type === void 0 || type === eow.displayTarget)) {
                                            validations.push(eow);
                                        }
                                    });
                                    return validations;
                                },
                                getValidationsForSection: function() {
                                    var _lastSectionBindingTree_get;
                                    var validations = new Array();
                                    (_lastSectionBindingTree_get = lastSectionBindingTree.get(node)) === null || _lastSectionBindingTree_get === void 0 ? void 0 : _lastSectionBindingTree_get.forEach(function(binding) {
                                        var _options_validation__getValidationForBinding, _options_validation;
                                        var eow = (_options_validation = options.validation) === null || _options_validation === void 0 ? void 0 : (_options_validation__getValidationForBinding = _options_validation._getValidationForBinding(binding)) === null || _options_validation__getValidationForBinding === void 0 ? void 0 : _options_validation__getValidationForBinding.get();
                                        if (eow && eow.displayTarget === "section") {
                                            validations.push(eow);
                                        }
                                    });
                                    return validations;
                                },
                                register: function(registerOptions) {
                                    if ((registerOptions === null || registerOptions === void 0 ? void 0 : registerOptions.type) === "section") {
                                        if (!sections.has(node)) {
                                            sections.set(node, /* @__PURE__ */ new Set());
                                        }
                                    }
                                },
                                track: track
                            })
                        });
                    });
                    resolver.hooks.afterNodeUpdate.tap(CONTEXT, function(originalNode, parent, update) {
                        var updated = update.updated, resolvedNode = update.node;
                        resolvedNodeMap.set(resolvedNode, originalNode);
                        if (updated) {
                            var newlyComputed = new Set(tracked.get(originalNode));
                            if (resolvedNode.type === "multi-node") {
                                resolvedNode.values.forEach(function(value) {
                                    var _currentBindingTree_get;
                                    return (_currentBindingTree_get = currentBindingTree.get(value)) === null || _currentBindingTree_get === void 0 ? void 0 : _currentBindingTree_get.forEach(function(b) {
                                        return newlyComputed.add(b);
                                    });
                                });
                            }
                            if ("children" in resolvedNode && resolvedNode.children) {
                                resolvedNode.children.forEach(function(child) {
                                    var _currentBindingTree_get;
                                    (_currentBindingTree_get = currentBindingTree.get(child.value)) === null || _currentBindingTree_get === void 0 ? void 0 : _currentBindingTree_get.forEach(function(b) {
                                        return newlyComputed.add(b);
                                    });
                                });
                            }
                            currentBindingTree.set(resolvedNode, newlyComputed);
                        } else {
                            var _lastComputedBindingTree_get;
                            currentBindingTree.set(resolvedNode, (_lastComputedBindingTree_get = lastComputedBindingTree.get(originalNode)) !== null && _lastComputedBindingTree_get !== void 0 ? _lastComputedBindingTree_get : /* @__PURE__ */ new Set());
                        }
                        if (originalNode === resolver.root) {
                            _this.trackedBindings = new Set(currentBindingTree.get(resolvedNode));
                            lastComputedBindingTree.clear();
                            currentBindingTree.forEach(function(value, key) {
                                var node = resolvedNodeMap.get(key);
                                if (node) {
                                    lastComputedBindingTree.set(node, value);
                                }
                            });
                            lastSectionBindingTree.clear();
                            sections.forEach(function(nodeSet, sectionNode) {
                                var temp = /* @__PURE__ */ new Set();
                                nodeSet.forEach(function(n) {
                                    var _tracked_get;
                                    (_tracked_get = tracked.get(n)) === null || _tracked_get === void 0 ? void 0 : _tracked_get.forEach(temp.add, temp);
                                });
                                lastSectionBindingTree.set(sectionNode, temp);
                            });
                            tracked.clear();
                            sections.clear();
                            currentBindingTree = /* @__PURE__ */ new Map();
                        }
                    });
                }
            },
            {
                key: "apply",
                value: function apply(view) {
                    view.hooks.resolver.tap(CONTEXT, this.applyResolver.bind(this));
                }
            }
        ]);
        return ValidationBindingTrackerViewPlugin;
    }();
    var SCHEMA_VALIDATION_PROVIDER_NAME = "schema";
    var VIEW_VALIDATION_PROVIDER_NAME = "view";
    var VALIDATION_PROVIDER_NAME_SYMBOL = Symbol.for("validation-provider-name");
    var ValidatedBinding = /*#__PURE__*/ function() {
        function ValidatedBinding(possibleValidations, onDismiss, log, weakBindings) {
            var _this = this;
            _class_call_check(this, ValidatedBinding);
            this.applicableValidations = [];
            this.validationsByState = {
                load: [],
                change: [],
                navigation: []
            };
            this.onDismiss = onDismiss;
            possibleValidations.forEach(function(vObj) {
                var trigger = vObj.trigger;
                if (_this.validationsByState[trigger]) {
                    var statefulValidationObject = createStatefulValidationObject(vObj);
                    _this.validationsByState[trigger].push(statefulValidationObject);
                } else {
                    log === null || log === void 0 ? void 0 : log.warn("Unknown validation trigger: ".concat(trigger));
                }
            });
            this.weakBindings = weakBindings !== null && weakBindings !== void 0 ? weakBindings : /* @__PURE__ */ new Set();
        }
        _create_class(ValidatedBinding, [
            {
                key: "allValidations",
                get: function get() {
                    return Object.values(this.validationsByState).flat();
                }
            },
            {
                key: "checkIfBlocking",
                value: function checkIfBlocking(statefulObj) {
                    if (statefulObj.state === "active") {
                        var isBlockingNavigation = statefulObj.isBlockingNavigation;
                        return isBlockingNavigation;
                    }
                    return false;
                }
            },
            {
                key: "getAll",
                value: function getAll() {
                    var _this = this;
                    return this.applicableValidations.reduce(function(all, statefulObj) {
                        if (statefulObj.state === "active" && statefulObj.response) {
                            all.push(_object_spread_props(_object_spread({}, statefulObj.response), {
                                blocking: _this.checkIfBlocking(statefulObj)
                            }));
                        }
                        return all;
                    }, []);
                }
            },
            {
                key: "get",
                value: function get() {
                    var firstInvalid = this.applicableValidations.find(function(statefulObj) {
                        return statefulObj.state === "active" && statefulObj.response;
                    });
                    if ((firstInvalid === null || firstInvalid === void 0 ? void 0 : firstInvalid.state) === "active") {
                        return _object_spread_props(_object_spread({}, firstInvalid.response), {
                            blocking: this.checkIfBlocking(firstInvalid)
                        });
                    }
                }
            },
            {
                key: "runApplicableValidations",
                value: function runApplicableValidations(runner, canDismiss, phase) {
                    var _this = this;
                    this.applicableValidations = this.applicableValidations.map(function(originalValue) {
                        if (originalValue.state === "dismissed") {
                            return originalValue;
                        }
                        var _originalValue_value_blocking;
                        var blocking = (_originalValue_value_blocking = originalValue.value.blocking) !== null && _originalValue_value_blocking !== void 0 ? _originalValue_value_blocking : originalValue.value.severity === "warning" && "once" || true;
                        var obj = (0, import_timm9.setIn)(originalValue, [
                            "value",
                            "blocking"
                        ], blocking);
                        var isBlockingNavigation = blocking === true || blocking === "once" && !canDismiss;
                        if (phase === "navigation" && obj.state === "active" && obj.value.blocking !== true) {
                            if (obj.value.severity === "warning") {
                                var warn = obj;
                                if (warn.dismissable && warn.response.dismiss && (warn.response.blocking !== "once" || !warn.response.blocking)) {
                                    warn.response.dismiss();
                                } else {
                                    if ((warn === null || warn === void 0 ? void 0 : warn.response.blocking) === "once") {
                                        warn.response.blocking = false;
                                    }
                                    warn.dismissable = true;
                                }
                                return warn;
                            }
                        }
                        var response = runner(obj.value);
                        var _response_message, _obj_value_displayTarget;
                        var newState = {
                            type: obj.type,
                            value: obj.value,
                            state: response ? "active" : "none",
                            isBlockingNavigation: isBlockingNavigation,
                            dismissable: obj.value.severity === "warning" && phase === "navigation",
                            response: response ? _object_spread_props(_object_spread({}, obj.value), {
                                message: (_response_message = response.message) !== null && _response_message !== void 0 ? _response_message : "Something is broken",
                                severity: obj.value.severity,
                                displayTarget: (_obj_value_displayTarget = obj.value.displayTarget) !== null && _obj_value_displayTarget !== void 0 ? _obj_value_displayTarget : "field"
                            }) : void 0
                        };
                        if (newState.state === "active" && obj.value.severity === "warning") {
                            newState.response.dismiss = function() {
                                var _this_onDismiss, _this1;
                                newState.state = "dismissed";
                                (_this_onDismiss = (_this1 = _this).onDismiss) === null || _this_onDismiss === void 0 ? void 0 : _this_onDismiss.call(_this1);
                            };
                        }
                        return newState;
                    });
                }
            },
            {
                key: "update",
                value: function update(phase, canDismiss, runner) {
                    var newApplicableValidations = [];
                    if (phase === "load" && this.currentPhase !== void 0) {
                        return;
                    }
                    if (this.currentPhase === "navigation" || phase === this.currentPhase) {
                        this.runApplicableValidations(runner, canDismiss, phase);
                        return;
                    }
                    if (phase === "load") {
                        this.currentPhase = "load";
                        this.applicableValidations = _to_consumable_array(this.validationsByState.load);
                    } else if (phase === "change" && this.currentPhase === "load") {
                        this.currentPhase = "change";
                        this.applicableValidations = _to_consumable_array(this.applicableValidations).concat(_to_consumable_array(this.validationsByState.change));
                    } else if (phase === "navigation" && (this.currentPhase === "load" || this.currentPhase === "change")) {
                        this.applicableValidations.forEach(function(element) {
                            if (!(element.type === "error" && element.state === "active" && element.isBlockingNavigation === false)) {
                                newApplicableValidations.push(element);
                            }
                        });
                        this.applicableValidations = _to_consumable_array(newApplicableValidations).concat(_to_consumable_array(this.validationsByState.navigation), _to_consumable_array(this.currentPhase === "load" ? this.validationsByState.change : []));
                        this.currentPhase = "navigation";
                    }
                    this.runApplicableValidations(runner, canDismiss, phase);
                }
            }
        ]);
        return ValidatedBinding;
    }();
    var ValidationController = /*#__PURE__*/ function() {
        function ValidationController(schema, options) {
            _class_call_check(this, ValidationController);
            this.hooks = {
                /** A hook called to tap into the validator registry for adding more validators */ createValidatorRegistry: new SyncHook(),
                /** A callback/event when a new validation is added to the view */ onAddValidation: new SyncWaterfallHook(),
                /** The inverse of onAddValidation, this is called when a validation is removed from the list */ onRemoveValidation: new SyncWaterfallHook(),
                resolveValidationProviders: new SyncWaterfallHook(),
                /** A hook called when a binding is added to the tracker */ onTrackBinding: new SyncHook()
            };
            this.validations = /* @__PURE__ */ new Map();
            this.weakBindingTracker = /* @__PURE__ */ new Set();
            this.schema = schema;
            this.options = options;
            this.reset();
        }
        _create_class(ValidationController, [
            {
                key: "setOptions",
                value: function setOptions(options) {
                    this.options = options;
                }
            },
            {
                /** Return the middleware for the data-model to stop propagation of invalid data */ key: "getDataMiddleware",
                value: function getDataMiddleware() {
                    var _this = this;
                    return [
                        {
                            set: function(transaction, options, next) {
                                var _next_set;
                                return (_next_set = next === null || next === void 0 ? void 0 : next.set(transaction, options)) !== null && _next_set !== void 0 ? _next_set : [];
                            },
                            get: function(binding, options, next) {
                                return next === null || next === void 0 ? void 0 : next.get(binding, options);
                            },
                            delete: function(binding, options, next) {
                                _this.validations = removeBindingAndChildrenFromMap(_this.validations, binding);
                                return next === null || next === void 0 ? void 0 : next.delete(binding, options);
                            }
                        },
                        new ValidationMiddleware(function(binding) {
                            var _strongValidation_get;
                            if (!_this.options) {
                                return;
                            }
                            _this.updateValidationsForBinding(binding, "change", _this.options);
                            var strongValidation = _this.getValidationForBinding(binding);
                            if ((strongValidation === null || strongValidation === void 0 ? void 0 : (_strongValidation_get = strongValidation.get()) === null || _strongValidation_get === void 0 ? void 0 : _strongValidation_get.severity) === "error") {
                                return strongValidation.get();
                            }
                            var newInvalidBindings = /* @__PURE__ */ new Set();
                            _this.validations.forEach(function(weakValidation, strongBinding) {
                                var _weakValidation_get;
                                if (caresAboutDataChanges(/* @__PURE__ */ new Set([
                                    binding
                                ]), weakValidation.weakBindings) && (weakValidation === null || weakValidation === void 0 ? void 0 : (_weakValidation_get = weakValidation.get()) === null || _weakValidation_get === void 0 ? void 0 : _weakValidation_get.severity) === "error") {
                                    weakValidation === null || weakValidation === void 0 ? void 0 : weakValidation.weakBindings.forEach(function(weakBinding) {
                                        if (weakBinding === strongBinding) {
                                            newInvalidBindings.add({
                                                binding: weakBinding,
                                                isStrong: true
                                            });
                                        } else {
                                            newInvalidBindings.add({
                                                binding: weakBinding,
                                                isStrong: false
                                            });
                                        }
                                    });
                                }
                            });
                            if (newInvalidBindings.size > 0) {
                                return newInvalidBindings;
                            }
                        }, {
                            logger: new ProxyLogger(function() {
                                var _this_options;
                                return (_this_options = _this.options) === null || _this_options === void 0 ? void 0 : _this_options.logger;
                            })
                        })
                    ];
                }
            },
            {
                key: "getValidationProviders",
                value: function getValidationProviders() {
                    var _this = this;
                    if (this.providers) {
                        return this.providers;
                    }
                    this.providers = this.hooks.resolveValidationProviders.call([
                        {
                            source: SCHEMA_VALIDATION_PROVIDER_NAME,
                            provider: this.schema
                        },
                        {
                            source: VIEW_VALIDATION_PROVIDER_NAME,
                            provider: {
                                getValidationsForBinding: function(binding) {
                                    var _this_viewValidationProvider_getValidationsForBinding, _this_viewValidationProvider;
                                    return (_this_viewValidationProvider = _this.viewValidationProvider) === null || _this_viewValidationProvider === void 0 ? void 0 : (_this_viewValidationProvider_getValidationsForBinding = _this_viewValidationProvider.getValidationsForBinding) === null || _this_viewValidationProvider_getValidationsForBinding === void 0 ? void 0 : _this_viewValidationProvider_getValidationsForBinding.call(_this_viewValidationProvider, binding);
                                },
                                getValidationsForView: function() {
                                    var _this_viewValidationProvider_getValidationsForView, _this_viewValidationProvider;
                                    return (_this_viewValidationProvider = _this.viewValidationProvider) === null || _this_viewValidationProvider === void 0 ? void 0 : (_this_viewValidationProvider_getValidationsForView = _this_viewValidationProvider.getValidationsForView) === null || _this_viewValidationProvider_getValidationsForView === void 0 ? void 0 : _this_viewValidationProvider_getValidationsForView.call(_this_viewValidationProvider);
                                }
                            }
                        }
                    ]);
                    return this.providers;
                }
            },
            {
                key: "reset",
                value: function reset() {
                    this.validations.clear();
                    this.tracker = void 0;
                }
            },
            {
                key: "onView",
                value: function onView(view) {
                    var _this = this;
                    this.validations.clear();
                    if (!this.options) {
                        return;
                    }
                    var bindingTrackerPlugin = new ValidationBindingTrackerViewPlugin(_object_spread_props(_object_spread({}, this.options), {
                        callbacks: {
                            onAdd: function(binding) {
                                if (!_this.options || _this.getValidationForBinding(binding) !== void 0) {
                                    return;
                                }
                                var originalValue = _this.options.model.get(binding);
                                var withoutDefault = _this.options.model.get(binding, {
                                    ignoreDefaultValue: true
                                });
                                if (originalValue !== withoutDefault) {
                                    _this.options.model.set([
                                        [
                                            binding,
                                            originalValue
                                        ]
                                    ], {
                                        silent: true
                                    });
                                }
                                _this.updateValidationsForBinding(binding, "load", _this.options, function() {
                                    view.update(/* @__PURE__ */ new Set([
                                        binding
                                    ]));
                                });
                                _this.hooks.onTrackBinding.call(binding);
                            }
                        }
                    }));
                    this.tracker = bindingTrackerPlugin;
                    this.viewValidationProvider = view;
                    bindingTrackerPlugin.apply(view);
                }
            },
            {
                key: "updateValidationsForBinding",
                value: function updateValidationsForBinding(binding, trigger, validationContext, onDismiss) {
                    var _this = this;
                    var context = validationContext !== null && validationContext !== void 0 ? validationContext : this.options;
                    if (!context) {
                        throw new Error("Context is required for executing validations");
                    }
                    if (trigger === "load") {
                        var _this_options;
                        var possibleValidations = this.getValidationProviders().reduce(function(vals, provider) {
                            var _vals;
                            var _provider_provider_getValidationsForBinding, _provider_provider_getValidationsForBinding1, _provider_provider;
                            var _provider_provider_getValidationsForBinding_map;
                            (_vals = vals).push.apply(_vals, _to_consumable_array((_provider_provider_getValidationsForBinding_map = (_provider_provider_getValidationsForBinding1 = (_provider_provider = provider.provider).getValidationsForBinding) === null || _provider_provider_getValidationsForBinding1 === void 0 ? void 0 : (_provider_provider_getValidationsForBinding = _provider_provider_getValidationsForBinding1.call(_provider_provider, binding)) === null || _provider_provider_getValidationsForBinding === void 0 ? void 0 : _provider_provider_getValidationsForBinding.map(function(valObj) {
                                return _object_spread_props(_object_spread({}, valObj), _define_property({}, VALIDATION_PROVIDER_NAME_SYMBOL, provider.source));
                            })) !== null && _provider_provider_getValidationsForBinding_map !== void 0 ? _provider_provider_getValidationsForBinding_map : []));
                            return vals;
                        }, []);
                        if (possibleValidations.length === 0) {
                            return;
                        }
                        this.validations.set(binding, new ValidatedBinding(possibleValidations, onDismiss, (_this_options = this.options) === null || _this_options === void 0 ? void 0 : _this_options.logger));
                    }
                    var trackedValidations = this.validations.get(binding);
                    trackedValidations === null || trackedValidations === void 0 ? void 0 : trackedValidations.update(trigger, true, function(validationObj) {
                        var response = _this.validationRunner(validationObj, binding, context);
                        if (_this.weakBindingTracker.size > 0) {
                            var t2 = _this.validations.get(binding);
                            _this.weakBindingTracker.forEach(function(b) {
                                return t2.weakBindings.add(b);
                            });
                        }
                        return response ? {
                            message: response.message
                        } : void 0;
                    });
                    if (trigger !== "load") {
                        this.validations.forEach(function(validation, vBinding) {
                            if (vBinding !== binding && caresAboutDataChanges(/* @__PURE__ */ new Set([
                                binding
                            ]), validation.weakBindings)) {
                                validation.update(trigger, true, function(validationObj) {
                                    var response = _this.validationRunner(validationObj, vBinding, context);
                                    return response ? {
                                        message: response.message
                                    } : void 0;
                                });
                            }
                        });
                    }
                }
            },
            {
                key: "validationRunner",
                value: function validationRunner(validationObj, binding) {
                    var context = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.options;
                    if (!context) {
                        throw new Error("No context provided to validation runner");
                    }
                    var _validationObj_handler;
                    var handler = (_validationObj_handler = validationObj.handler) !== null && _validationObj_handler !== void 0 ? _validationObj_handler : this.getValidator(validationObj.type);
                    var weakBindings = /* @__PURE__ */ new Set();
                    var model = {
                        get: function get(b, options) {
                            weakBindings.add(isBinding(b) ? binding : context.parseBinding(b));
                            return context.model.get(b, _object_spread_props(_object_spread({}, options), {
                                includeInvalid: true
                            }));
                        },
                        set: context.model.set,
                        delete: context.model.delete
                    };
                    var result = handler === null || handler === void 0 ? void 0 : handler(_object_spread_props(_object_spread({}, context), {
                        evaluate: function(exp) {
                            var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
                                model: model
                            };
                            return context.evaluate(exp, options);
                        },
                        model: model,
                        validation: validationObj,
                        schemaType: this.schema.getType(binding)
                    }), context.model.get(binding, {
                        includeInvalid: true,
                        formatted: validationObj.dataTarget === "formatted"
                    }), validationObj);
                    this.weakBindingTracker = weakBindings;
                    if (result) {
                        var message = result.message;
                        var parameters = result.parameters;
                        if (validationObj.message) {
                            message = resolveDataRefs(validationObj.message, {
                                model: model,
                                evaluate: context.evaluate
                            });
                            if (parameters) {
                                message = replaceParams(message, parameters);
                            }
                        }
                        return {
                            message: message
                        };
                    }
                }
            },
            {
                key: "updateValidationsForView",
                value: function updateValidationsForView(trigger) {
                    var _this = this;
                    var isNavigationTrigger = trigger === "navigation";
                    var lastActiveBindings = this.activeBindings;
                    var updateValidations = function(dismissValidations) {
                        _this.getBindings().forEach(function(binding) {
                            var _this_validations_get;
                            (_this_validations_get = _this.validations.get(binding)) === null || _this_validations_get === void 0 ? void 0 : _this_validations_get.update(trigger, dismissValidations, function(obj) {
                                if (!_this.options) {
                                    return;
                                }
                                return _this.validationRunner(obj, binding, _this.options);
                            });
                        });
                    };
                    updateValidations(!isNavigationTrigger);
                    if (isNavigationTrigger) {
                        var activeBindings = this.activeBindings;
                        if (isSubset(activeBindings, lastActiveBindings)) {
                            updateValidations(true);
                        }
                    }
                }
            },
            {
                key: "activeBindings",
                get: function get() {
                    var _this = this;
                    return new Set(Array.from(this.getBindings()).filter(function(b) {
                        var _this_validations_get;
                        return ((_this_validations_get = _this.validations.get(b)) === null || _this_validations_get === void 0 ? void 0 : _this_validations_get.get()) !== void 0;
                    }));
                }
            },
            {
                key: "getValidator",
                value: function getValidator(type) {
                    if (this.validatorRegistry) {
                        return this.validatorRegistry.get(type);
                    }
                    var registry = new ValidatorRegistry();
                    this.hooks.createValidatorRegistry.call(registry);
                    this.validatorRegistry = registry;
                    return registry.get(type);
                }
            },
            {
                key: "getBindings",
                value: function getBindings() {
                    var _this_tracker;
                    var _this_tracker_getBindings;
                    return (_this_tracker_getBindings = (_this_tracker = this.tracker) === null || _this_tracker === void 0 ? void 0 : _this_tracker.getBindings()) !== null && _this_tracker_getBindings !== void 0 ? _this_tracker_getBindings : /* @__PURE__ */ new Set();
                }
            },
            {
                key: "trackBinding",
                value: function trackBinding(binding) {
                    var _this_tracker;
                    (_this_tracker = this.tracker) === null || _this_tracker === void 0 ? void 0 : _this_tracker.trackBinding(binding);
                }
            },
            {
                /** Executes all known validations for the tracked bindings using the given model */ key: "validateView",
                value: function validateView() {
                    var _this = this;
                    var trigger = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "navigation";
                    this.updateValidationsForView(trigger);
                    var validations = /* @__PURE__ */ new Map();
                    var canTransition = true;
                    this.getBindings().forEach(function(b) {
                        var _this_getValidationForBinding;
                        var allValidations = (_this_getValidationForBinding = _this.getValidationForBinding(b)) === null || _this_getValidationForBinding === void 0 ? void 0 : _this_getValidationForBinding.getAll();
                        allValidations === null || allValidations === void 0 ? void 0 : allValidations.forEach(function(v) {
                            if (trigger === "navigation" && v.blocking) {
                                var _this_options;
                                (_this_options = _this.options) === null || _this_options === void 0 ? void 0 : _this_options.logger.debug("Validation on binding: ".concat(b.asString(), " is preventing navigation. ").concat(JSON.stringify(v)));
                                canTransition = false;
                            }
                            if (!validations.has(b)) {
                                validations.set(b, v);
                            }
                        });
                    });
                    return {
                        canTransition: canTransition,
                        validations: validations.size ? validations : void 0
                    };
                }
            },
            {
                /** Get the current tracked validation for the given binding */ key: "getValidationForBinding",
                value: function getValidationForBinding(binding) {
                    return this.validations.get(binding);
                }
            },
            {
                key: "forView",
                value: function forView(parser) {
                    var _this = this;
                    return {
                        _getValidationForBinding: function(binding) {
                            return _this.getValidationForBinding(isBinding(binding) ? binding : parser(binding));
                        },
                        getAll: function() {
                            var bindings = _this.getBindings();
                            if (bindings.size === 0) {
                                return void 0;
                            }
                            var validationMapping = /* @__PURE__ */ new Map();
                            bindings.forEach(function(b) {
                                var _this_getValidationForBinding;
                                var validation = (_this_getValidationForBinding = _this.getValidationForBinding(b)) === null || _this_getValidationForBinding === void 0 ? void 0 : _this_getValidationForBinding.get();
                                if (validation) {
                                    validationMapping.set(b, validation);
                                }
                            });
                            return validationMapping.size === 0 ? void 0 : validationMapping;
                        },
                        get: function get() {
                            throw new Error("Error Access be provided by the view plugin");
                        },
                        getValidationsForBinding: function getValidationsForBinding() {
                            throw new Error("Error rollup should be provided by the view plugin");
                        },
                        getChildren: function getChildren() {
                            throw new Error("Error rollup should be provided by the view plugin");
                        },
                        getValidationsForSection: function getValidationsForSection() {
                            throw new Error("Error rollup should be provided by the view plugin");
                        },
                        track: function() {
                            throw new Error("Tracking should be provided by the view plugin");
                        },
                        register: function() {
                            throw new Error("Section functionality should be provided by the view plugin");
                        },
                        type: function(binding) {
                            return _this.schema.getType(isBinding(binding) ? binding : parser(binding));
                        }
                    };
                }
            }
        ]);
        return ValidationController;
    }();
    var ViewController = /*#__PURE__*/ function() {
        function ViewController(initialViews, options) {
            var _this = this;
            var _this1 = this;
            _class_call_check(this, ViewController);
            this.hooks = {
                resolveView: new SyncWaterfallHook(),
                view: new SyncHook()
            };
            this.transformRegistry = new Registry();
            this.optimizeUpdates = true;
            this.viewOptions = options;
            this.viewMap = initialViews.reduce(function(viewMap, view) {
                viewMap[view.id] = view;
                return viewMap;
            }, {});
            options.flowController.hooks.flow.tap("viewController", function(flow) {
                flow.hooks.transition.tap("viewController", function(_oldState, newState) {
                    if (newState.value.state_type === "VIEW") {
                        _this.onView(newState.value);
                    } else {
                        _this.currentView = void 0;
                    }
                });
            });
            var update = function(updates) {
                var silent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                if (_this1.currentView) {
                    if (_this1.optimizeUpdates) {
                        _this1.queueUpdate(updates, silent);
                    } else {
                        _this1.currentView.update();
                    }
                }
            };
            options.model.hooks.onUpdate.tap("viewController", function(updates, updateOptions) {
                var _updateOptions_silent;
                update(new Set(updates.map(function(t2) {
                    return t2.binding;
                })), (_updateOptions_silent = updateOptions === null || updateOptions === void 0 ? void 0 : updateOptions.silent) !== null && _updateOptions_silent !== void 0 ? _updateOptions_silent : false);
            });
            options.model.hooks.onDelete.tap("viewController", function(binding) {
                var parentBinding = binding.parent();
                var property = binding.key();
                if (typeof property === "number" && parentBinding) {
                    update(/* @__PURE__ */ new Set([
                        parentBinding
                    ]));
                } else {
                    update(/* @__PURE__ */ new Set([
                        binding
                    ]));
                }
            });
            this.viewPlugins = this.createViewPlugins();
        }
        _create_class(ViewController, [
            {
                key: "queueUpdate",
                value: function queueUpdate(bindings) {
                    var _this = this;
                    var silent = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
                    var _this_pendingUpdate;
                    if ((_this_pendingUpdate = this.pendingUpdate) === null || _this_pendingUpdate === void 0 ? void 0 : _this_pendingUpdate.changedBindings) {
                        this.pendingUpdate.changedBindings = /* @__PURE__ */ new Set(_to_consumable_array(this.pendingUpdate.changedBindings).concat(_to_consumable_array(bindings)));
                    } else {
                        this.pendingUpdate = {
                            changedBindings: bindings,
                            scheduled: false
                        };
                    }
                    if (!this.pendingUpdate.scheduled && !silent) {
                        this.pendingUpdate.scheduled = true;
                        (0, import_queue_microtask2.default)(function() {
                            var _this_pendingUpdate, _this_currentView;
                            var updates = (_this_pendingUpdate = _this.pendingUpdate) === null || _this_pendingUpdate === void 0 ? void 0 : _this_pendingUpdate.changedBindings;
                            _this.pendingUpdate = void 0;
                            (_this_currentView = _this.currentView) === null || _this_currentView === void 0 ? void 0 : _this_currentView.update(updates);
                        });
                    }
                }
            },
            {
                key: "getViewForRef",
                value: function getViewForRef(viewRef) {
                    var _this = this;
                    if (this.viewMap[viewRef]) {
                        return this.viewMap[viewRef];
                    }
                    var matchingViewId = Object.keys(this.viewMap).find(function(possibleViewIdMatch) {
                        return viewRef === resolveDataRefsInString(possibleViewIdMatch, {
                            model: _this.viewOptions.model,
                            evaluate: _this.viewOptions.evaluator.evaluate
                        });
                    });
                    if (matchingViewId && this.viewMap[matchingViewId]) {
                        return this.viewMap[matchingViewId];
                    }
                }
            },
            {
                key: "onView",
                value: function onView(state) {
                    var viewId = state.ref;
                    var source = this.hooks.resolveView.call(this.getViewForRef(viewId), viewId, state);
                    if (!source) {
                        throw new Error("No view with id ".concat(viewId));
                    }
                    var view = new ViewInstance(source, this.viewOptions);
                    this.currentView = view;
                    this.applyViewPlugins(view);
                    this.hooks.view.call(view);
                    view.update();
                }
            },
            {
                key: "applyViewPlugins",
                value: function applyViewPlugins(view) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.viewPlugins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var plugin = _step.value;
                            plugin.apply(view);
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
                key: "createViewPlugins",
                value: function createViewPlugins() {
                    var pluginOptions = toNodeResolveOptions(this.viewOptions);
                    return [
                        new AssetPlugin(),
                        new SwitchPlugin(pluginOptions),
                        new ApplicabilityPlugin(),
                        new AssetTransformCorePlugin(this.transformRegistry),
                        new StringResolverPlugin(),
                        new TemplatePlugin(pluginOptions),
                        new MultiNodePlugin()
                    ];
                }
            }
        ]);
        return ViewController;
    }();
    var ReadOnlyDataController = /*#__PURE__*/ function() {
        function ReadOnlyDataController(controller, logger) {
            _class_call_check(this, ReadOnlyDataController);
            this.controller = controller;
            this.logger = logger;
        }
        _create_class(ReadOnlyDataController, [
            {
                key: "get",
                value: function get(binding, options) {
                    return this.controller.get(binding, options);
                }
            },
            {
                key: "set",
                value: function set(transaction, options) {
                    var _this_logger;
                    (_this_logger = this.logger) === null || _this_logger === void 0 ? void 0 : _this_logger.error("Error: Tried to set in a read only instance of the DataController");
                    return [];
                }
            },
            {
                key: "delete",
                value: function _delete(binding, options) {
                    var _this_logger;
                    (_this_logger = this.logger) === null || _this_logger === void 0 ? void 0 : _this_logger.error("Error: Tried to delete in a read only instance of the DataController");
                }
            }
        ]);
        return ReadOnlyDataController;
    }();
    var DataController = /*#__PURE__*/ function() {
        function DataController(model, options) {
            _class_call_check(this, DataController);
            this.hooks = {
                resolve: new SyncWaterfallHook(),
                resolveDataStages: new SyncWaterfallHook(),
                // On any set or get of an undefined value, redirect the value to be the default
                resolveDefaultValue: new SyncBailHook(),
                onDelete: new SyncHook(),
                onSet: new SyncHook(),
                onGet: new SyncHook(),
                onUpdate: new SyncHook(),
                format: new SyncWaterfallHook(),
                deformat: new SyncWaterfallHook(),
                serialize: new SyncWaterfallHook()
            };
            this.logger = options.logger;
            var middleware = options.middleware || [];
            this.baseMiddleware = [
                new LocalModel(model)
            ].concat(_to_consumable_array(middleware));
            this.trash = /* @__PURE__ */ new Set();
            this.pathResolver = options.pathResolver;
        }
        _create_class(DataController, [
            {
                key: "getModel",
                value: function getModel() {
                    if (!this.model) {
                        var stages = this.hooks.resolveDataStages.call(this.baseMiddleware);
                        var model = new PipelinedDataModel();
                        model.setMiddleware(stages);
                        this.model = model;
                    }
                    return this.model;
                }
            },
            {
                key: "resolveDataValue",
                value: function resolveDataValue(binding, value, deformat) {
                    if (deformat) {
                        return this.hooks.deformat.call(value, binding);
                    }
                    return value;
                }
            },
            {
                key: "set",
                value: function set(transaction, options) {
                    var _this = this;
                    var normalizedTransaction = [];
                    if (Array.isArray(transaction)) {
                        normalizedTransaction = transaction.map(function(param) {
                            var _param = _sliced_to_array(param, 2), binding = _param[0], value = _param[1];
                            var parsed = _this.pathResolver.parse(binding);
                            return [
                                parsed,
                                _this.resolveDataValue(parsed, value, Boolean(options === null || options === void 0 ? void 0 : options.formatted))
                            ];
                        });
                    } else {
                        normalizedTransaction = Object.keys(transaction).map(function(binding) {
                            var parsed = _this.pathResolver.parse(binding);
                            var val = transaction[binding];
                            return [
                                parsed,
                                _this.resolveDataValue(parsed, val, Boolean(options === null || options === void 0 ? void 0 : options.formatted))
                            ];
                        });
                    }
                    var setUpdates = normalizedTransaction.reduce(function(updates, param) {
                        var _param = _sliced_to_array(param, 2), binding = _param[0], newVal = _param[1];
                        var oldVal = _this.get(binding, {
                            includeInvalid: true
                        });
                        var update = {
                            binding: binding,
                            newValue: newVal,
                            oldValue: oldVal
                        };
                        if (dequal(oldVal, newVal)) {
                            var _this_logger;
                            (_this_logger = _this.logger) === null || _this_logger === void 0 ? void 0 : _this_logger.debug("Skipping update for path: ".concat(binding.asString(), ". Value was unchanged: ").concat(oldVal));
                        } else {
                            var _this_logger1;
                            updates.push(update);
                            (_this_logger1 = _this.logger) === null || _this_logger1 === void 0 ? void 0 : _this_logger1.debug("Setting path: ".concat(binding.asString(), " from: ").concat(oldVal, " to: ").concat(newVal));
                        }
                        return updates;
                    }, []);
                    var result = this.getModel().set(normalizedTransaction, options);
                    var setUpdateBindings = new Set(setUpdates.map(function(su) {
                        return su.binding;
                    }));
                    result.forEach(function(tr) {
                        if (!setUpdateBindings.has(tr.binding) && (tr.force === true || !dequal(tr.oldValue, tr.newValue))) {
                            var _this_logger;
                            (_this_logger = _this.logger) === null || _this_logger === void 0 ? void 0 : _this_logger.debug("Path: ".concat(tr.binding.asString(), " was changed from: ").concat(tr.oldValue, " to: ").concat(tr.newValue));
                            setUpdates.push(tr);
                        }
                    });
                    this.hooks.onSet.call(normalizedTransaction);
                    if (setUpdates.length > 0) {
                        this.hooks.onUpdate.call(setUpdates, options);
                    }
                    return result;
                }
            },
            {
                key: "resolve",
                value: function resolve(binding, readOnly) {
                    return Array.isArray(binding) || typeof binding === "string" ? this.pathResolver.parse(binding, {
                        readOnly: readOnly
                    }) : binding;
                }
            },
            {
                key: "get",
                value: function get(binding, options) {
                    var resolved = _instanceof(binding, BindingInstance) ? binding : this.resolve(binding, true);
                    var result = this.getModel().get(resolved, options);
                    if (result === void 0 && !(options === null || options === void 0 ? void 0 : options.ignoreDefaultValue)) {
                        var defaultVal = this.hooks.resolveDefaultValue.call(resolved);
                        if (defaultVal !== result) {
                            result = defaultVal;
                        }
                    }
                    if (options === null || options === void 0 ? void 0 : options.formatted) {
                        result = this.hooks.format.call(result, resolved);
                    } else if ((options === null || options === void 0 ? void 0 : options.formatted) === false) {
                        result = this.hooks.deformat.call(result, resolved);
                    }
                    this.hooks.onGet.call(binding, result);
                    return result;
                }
            },
            {
                key: "delete",
                value: function _delete(binding, options) {
                    if (typeof binding !== "string" && !Array.isArray(binding) && !_instanceof(binding, BindingInstance)) {
                        throw new Error("Invalid arguments: delete expects a data path (string)");
                    }
                    var resolved = _instanceof(binding, BindingInstance) ? binding : this.resolve(binding, false);
                    var parentBinding = resolved.parent();
                    var property = resolved.key();
                    var parentValue = this.get(parentBinding);
                    var existedBeforeDelete = (typeof parentValue === "undefined" ? "undefined" : _type_of(parentValue)) === "object" && parentValue !== null && Object.prototype.hasOwnProperty.call(parentValue, property);
                    this.getModel().delete(resolved, options);
                    if (existedBeforeDelete && !this.get(resolved)) {
                        this.trash.add(resolved);
                    }
                    this.hooks.onDelete.call(resolved);
                }
            },
            {
                key: "serialize",
                value: function serialize() {
                    return this.hooks.serialize.call(this.get(""));
                }
            },
            {
                key: "makeReadOnly",
                value: function makeReadOnly() {
                    return new ReadOnlyDataController(this, this.logger);
                }
            }
        ]);
        return DataController;
    }();
    function flatten(obj) {
        var roots = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], sep = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
        return Object.keys(obj).reduce(function(memo, prop) {
            return _object_spread({}, memo, Object.prototype.toString.call(obj[prop]) === "[object Object]" ? // keep working if value is an object
            flatten(obj[prop], roots.concat([
                prop
            ])) : _define_property({}, roots.concat([
                prop
            ]).join(sep), obj[prop]));
        }, {});
    }
    var ConstantsController = /*#__PURE__*/ function() {
        function ConstantsController() {
            _class_call_check(this, ConstantsController);
            this.store = /* @__PURE__ */ new Map();
            this.tempStore = /* @__PURE__ */ new Map();
        }
        _create_class(ConstantsController, [
            {
                key: "addConstants",
                value: function addConstants(data, namespace) {
                    if (this.store.has(namespace)) {
                        var _this_store_get;
                        (_this_store_get = this.store.get(namespace)) === null || _this_store_get === void 0 ? void 0 : _this_store_get.set(objectToBatchSet(data));
                    } else {
                        this.store.set(namespace, new LocalModel(data));
                    }
                }
            },
            {
                key: "getConstants",
                value: function getConstants(key, namespace, fallback) {
                    var _this_tempStore_get, _this_store_get;
                    var path = new BindingInstance(key);
                    var _this_tempStore_get_get, _ref;
                    return (_ref = (_this_tempStore_get_get = (_this_tempStore_get = this.tempStore.get(namespace)) === null || _this_tempStore_get === void 0 ? void 0 : _this_tempStore_get.get(path)) !== null && _this_tempStore_get_get !== void 0 ? _this_tempStore_get_get : (_this_store_get = this.store.get(namespace)) === null || _this_store_get === void 0 ? void 0 : _this_store_get.get(path)) !== null && _ref !== void 0 ? _ref : fallback;
                }
            },
            {
                key: "setTemporaryValues",
                value: function setTemporaryValues(data, namespace) {
                    if (this.tempStore.has(namespace)) {
                        var _this_tempStore_get;
                        (_this_tempStore_get = this.tempStore.get(namespace)) === null || _this_tempStore_get === void 0 ? void 0 : _this_tempStore_get.set(objectToBatchSet(data));
                    } else {
                        this.tempStore.set(namespace, new LocalModel(data));
                    }
                }
            },
            {
                key: "clearTemporaryValues",
                value: function clearTemporaryValues(namespace) {
                    if (namespace) {
                        var _this_tempStore_get;
                        (_this_tempStore_get = this.tempStore.get(namespace)) === null || _this_tempStore_get === void 0 ? void 0 : _this_tempStore_get.reset();
                    } else {
                        this.tempStore.forEach(function(value) {
                            value.reset();
                        });
                    }
                }
            }
        ]);
        return ConstantsController;
    }();
    var FlowExpPlugin = /*#__PURE__*/ function() {
        function FlowExpPlugin() {
            _class_call_check(this, FlowExpPlugin);
            this.name = "flow-exp-plugin";
        }
        _create_class(FlowExpPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    var expressionEvaluator;
                    var handleEval = function(exp) {
                        if (exp) {
                            if ((typeof exp === "undefined" ? "undefined" : _type_of(exp)) === "object" && "exp" in exp) {
                                expressionEvaluator === null || expressionEvaluator === void 0 ? void 0 : expressionEvaluator.evaluate(exp.exp);
                            } else {
                                expressionEvaluator === null || expressionEvaluator === void 0 ? void 0 : expressionEvaluator.evaluate(exp);
                            }
                        }
                    };
                    player.hooks.expressionEvaluator.tap(this.name, function(evaluator) {
                        expressionEvaluator = evaluator;
                    });
                    player.hooks.flowController.tap(this.name, function(fc) {
                        fc.hooks.flow.tap(_this.name, function(flow) {
                            flow.hooks.onStart.tap(_this.name, function(exp) {
                                return handleEval(exp);
                            });
                            flow.hooks.onEnd.tap(_this.name, function(exp) {
                                return handleEval(exp);
                            });
                            flow.hooks.resolveTransitionNode.intercept({
                                call: function(nextState) {
                                    if (nextState === null || nextState === void 0 ? void 0 : nextState.onStart) {
                                        handleEval(nextState.onStart);
                                    }
                                }
                            });
                        });
                    });
                }
            }
        ]);
        return FlowExpPlugin;
    }();
    var createFormatFunction = function(schema) {
        var handler = function(ctx, value, formatName) {
            var _schema_getFormatterForType;
            var _schema_getFormatterForType_format;
            return (_schema_getFormatterForType_format = (_schema_getFormatterForType = schema.getFormatterForType({
                type: formatName
            })) === null || _schema_getFormatterForType === void 0 ? void 0 : _schema_getFormatterForType.format(value)) !== null && _schema_getFormatterForType_format !== void 0 ? _schema_getFormatterForType_format : value;
        };
        return handler;
    };
    var DefaultExpPlugin = /*#__PURE__*/ function() {
        function DefaultExpPlugin() {
            _class_call_check(this, DefaultExpPlugin);
            this.name = "flow-exp-plugin";
        }
        _create_class(DefaultExpPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var formatFunction;
                    player.hooks.schema.tap(this.name, function(schemaController) {
                        formatFunction = createFormatFunction(schemaController);
                    });
                    player.hooks.expressionEvaluator.tap(this.name, function(expEvaluator) {
                        if (formatFunction) {
                            expEvaluator.addExpressionFunction("format", formatFunction);
                        }
                        expEvaluator.addExpressionFunction("log", function(ctx) {
                            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                args[_key - 1] = arguments[_key];
                            }
                            var _player_logger;
                            (_player_logger = player.logger).info.apply(_player_logger, _to_consumable_array(args));
                        });
                        expEvaluator.addExpressionFunction("debug", function(ctx) {
                            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                args[_key - 1] = arguments[_key];
                            }
                            var _player_logger;
                            (_player_logger = player.logger).debug.apply(_player_logger, _to_consumable_array(args));
                        });
                        expEvaluator.addExpressionFunction("eval", function(ctx) {
                            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                args[_key - 1] = arguments[_key];
                            }
                            var _ctx;
                            return (_ctx = ctx).evaluate.apply(_ctx, _to_consumable_array(args));
                        });
                    });
                }
            }
        ]);
        return DefaultExpPlugin;
    }();
    var NOT_STARTED_STATE = {
        ref: Symbol("not-started"),
        status: "not-started"
    };
    var PLAYER_VERSION = true ? "0.14.2--canary.761.29270" : "__VERSION__";
    var COMMIT = true ? "7ad7ac8d77d980570694bae836e4da9de7b09d88" : "__GIT_COMMIT__";
    var _Player = /*#__PURE__*/ function() {
        function _Player2(config) {
            var _this = this;
            _class_call_check(this, _Player2);
            var _this_config_plugins;
            this.logger = new TapableLogger();
            this.constantsController = new ConstantsController();
            this.state = NOT_STARTED_STATE;
            this.hooks = {
                flowController: new SyncHook(),
                viewController: new SyncHook(),
                view: new SyncHook(),
                expressionEvaluator: new SyncHook(),
                dataController: new SyncHook(),
                schema: new SyncHook(),
                validationController: new SyncHook(),
                bindingParser: new SyncHook(),
                state: new SyncHook(),
                onStart: new SyncHook(),
                onEnd: new SyncHook(),
                resolveFlowContent: new SyncWaterfallHook()
            };
            if (config === null || config === void 0 ? void 0 : config.logger) {
                this.logger.addHandler(config.logger);
            }
            this.config = config || {};
            this.config.plugins = [
                new DefaultExpPlugin()
            ].concat(_to_consumable_array(this.config.plugins || []), [
                new FlowExpPlugin()
            ]);
            (_this_config_plugins = this.config.plugins) === null || _this_config_plugins === void 0 ? void 0 : _this_config_plugins.forEach(function(plugin) {
                plugin.apply(_this);
            });
        }
        _create_class(_Player2, [
            {
                /**  Returns currently registered plugins */ key: "getPlugins",
                value: function getPlugins() {
                    var _this_config_plugins;
                    return (_this_config_plugins = this.config.plugins) !== null && _this_config_plugins !== void 0 ? _this_config_plugins : [];
                }
            },
            {
                /** Find instance of [Plugin] that has been registered to Player */ key: "findPlugin",
                value: function findPlugin(symbol) {
                    var _this_config_plugins;
                    return (_this_config_plugins = this.config.plugins) === null || _this_config_plugins === void 0 ? void 0 : _this_config_plugins.find(function(el) {
                        return el.symbol === symbol;
                    });
                }
            },
            {
                /** Retrieve an instance of [Plugin] and conditionally invoke [apply] if it exists */ key: "applyTo",
                value: function applyTo(symbol, apply) {
                    var plugin = this.findPlugin(symbol);
                    if (plugin) {
                        apply(plugin);
                    }
                }
            },
            {
                /** Register and apply [Plugin] if one with the same symbol is not already registered. */ key: "registerPlugin",
                value: function registerPlugin(plugin) {
                    var _this_config_plugins;
                    plugin.apply(this);
                    (_this_config_plugins = this.config.plugins) === null || _this_config_plugins === void 0 ? void 0 : _this_config_plugins.push(plugin);
                }
            },
            {
                /** Returns the current version of the running player */ key: "getVersion",
                value: function getVersion() {
                    return _Player2.info.version;
                }
            },
            {
                /** Returns the git commit used to build Player version */ key: "getCommit",
                value: function getCommit() {
                    return _Player2.info.commit;
                }
            },
            {
                /**
     * Fetch the current state of Player.
     * It will return either `not-started`, `in-progress`, `completed`
     * with some extra data in each
     */ key: "getState",
                value: function getState() {
                    return this.state;
                }
            },
            {
                /**
     * A private means of setting the state of Player
     * Calls the hooks for subscribers to listen for this event
     */ key: "setState",
                value: function setState(state) {
                    this.state = state;
                    this.hooks.state.call(state);
                }
            },
            {
                /** Start Player with the given flow */ key: "setupFlow",
                value: function setupFlow(userContent) {
                    var _this = this;
                    var userFlow = this.hooks.resolveFlowContent.call(userContent);
                    var flowController = new FlowController(userFlow.navigation, {
                        logger: this.logger
                    });
                    this.hooks.onStart.call(userFlow);
                    this.hooks.flowController.call(flowController);
                    var expressionEvaluator;
                    var dataController;
                    var pathResolver = new BindingParser({
                        get: function(binding) {
                            return dataController.get(binding);
                        },
                        set: function(transaction) {
                            return dataController.set(transaction);
                        },
                        evaluate: function(expression) {
                            return expressionEvaluator.evaluate(expression);
                        }
                    });
                    this.hooks.bindingParser.call(pathResolver);
                    var parseBinding = pathResolver.parse;
                    var flowResultDeferred = (0, import_p_defer.default)();
                    var schema = new SchemaController(userFlow.schema);
                    this.hooks.schema.call(schema);
                    var validationController = new ValidationController(schema);
                    this.hooks.validationController.call(validationController);
                    dataController = new DataController(userFlow.data, {
                        pathResolver: pathResolver,
                        middleware: validationController.getDataMiddleware(),
                        logger: this.logger
                    });
                    dataController.hooks.format.tap("player", function(value, binding) {
                        var formatter = schema.getFormatter(binding);
                        return formatter ? formatter.format(value) : value;
                    });
                    dataController.hooks.deformat.tap("player", function(value, binding) {
                        var formatter = schema.getFormatter(binding);
                        return formatter ? formatter.deformat(value) : value;
                    });
                    dataController.hooks.resolveDefaultValue.tap("player", function(binding) {
                        var _schema_getApparentType;
                        return (_schema_getApparentType = schema.getApparentType(binding)) === null || _schema_getApparentType === void 0 ? void 0 : _schema_getApparentType.default;
                    });
                    var viewController;
                    expressionEvaluator = new ExpressionEvaluator({
                        model: dataController,
                        logger: this.logger
                    });
                    this.hooks.expressionEvaluator.call(expressionEvaluator);
                    expressionEvaluator.hooks.onError.tap("player", function(e) {
                        flowResultDeferred.reject(e);
                        return true;
                    });
                    function resolveStrings(val, formatted) {
                        return resolveDataRefs(val, {
                            model: dataController,
                            evaluate: expressionEvaluator.evaluate,
                            formatted: formatted
                        });
                    }
                    flowController.hooks.flow.tap("player", function(flow) {
                        flow.hooks.beforeTransition.tap("player", function(state, transitionVal) {
                            var computedTransitionVal = state.transitions[transitionVal] ? transitionVal : "*";
                            if (state.onEnd && state.transitions[computedTransitionVal]) {
                                if (_type_of(state.onEnd) === "object" && "exp" in state.onEnd) {
                                    expressionEvaluator === null || expressionEvaluator === void 0 ? void 0 : expressionEvaluator.evaluate(state.onEnd.exp);
                                } else {
                                    expressionEvaluator === null || expressionEvaluator === void 0 ? void 0 : expressionEvaluator.evaluate(state.onEnd);
                                }
                            }
                            if (!("transitions" in state) || !state.transitions[computedTransitionVal]) {
                                return state;
                            }
                            return (0, import_timm8.setIn)(state, [
                                "transitions",
                                computedTransitionVal
                            ], resolveStrings(state.transitions[computedTransitionVal]));
                        });
                        flow.hooks.skipTransition.tap("validation", function(currentState) {
                            if ((currentState === null || currentState === void 0 ? void 0 : currentState.value.state_type) === "VIEW") {
                                var _validationController_validateView = validationController.validateView("navigation"), canTransition = _validationController_validateView.canTransition, validations = _validationController_validateView.validations;
                                if (!canTransition && validations) {
                                    var _viewController_currentView;
                                    var bindings = new Set(validations.keys());
                                    viewController === null || viewController === void 0 ? void 0 : (_viewController_currentView = viewController.currentView) === null || _viewController_currentView === void 0 ? void 0 : _viewController_currentView.update(bindings);
                                    return true;
                                }
                            }
                            return void 0;
                        });
                        flow.hooks.resolveTransitionNode.tap("player", function(state) {
                            var newState = state;
                            if ("ref" in state) {
                                newState = (0, import_timm8.setIn)(state, [
                                    "ref"
                                ], resolveStrings(state.ref));
                            }
                            if ("param" in state) {
                                newState = (0, import_timm8.setIn)(state, [
                                    "param"
                                ], resolveStrings(state.param, false));
                            }
                            return newState;
                        });
                        flow.hooks.transition.tap("player", function(_oldState, newState) {
                            if (newState.value.state_type !== "VIEW") {
                                validationController.reset();
                            }
                        });
                        flow.hooks.afterTransition.tap("player-action-states", function(flowInstance) {
                            var _flowInstance_currentState;
                            var value = (_flowInstance_currentState = flowInstance.currentState) === null || _flowInstance_currentState === void 0 ? void 0 : _flowInstance_currentState.value;
                            if (value && value.state_type === "ASYNC_ACTION") {
                                var exp = value.exp;
                                try {
                                    var result = expressionEvaluator.evaluateAsync(exp);
                                    if (isPromiseLike(result)) {
                                        if (value.await) {
                                            (0, import_queue_microtask.default)(function() {
                                                result.then(function(r) {
                                                    return flowController === null || flowController === void 0 ? void 0 : flowController.transition(String(r));
                                                }).catch(flowResultDeferred.reject);
                                            });
                                        } else {
                                            _this.logger.warn("Unawaited promise used as return value in in non-async context, transitioning with '*' value");
                                            flowController === null || flowController === void 0 ? void 0 : flowController.transition(String(result));
                                        }
                                    } else {
                                        _this.logger.warn("Non async expression used in async action node");
                                        flowController === null || flowController === void 0 ? void 0 : flowController.transition(String(result));
                                    }
                                } catch (e) {
                                    flowResultDeferred.reject(e);
                                }
                            } else if (value && value.state_type === "ACTION") {
                                var exp1 = value.exp;
                                var result1 = expressionEvaluator.evaluate(exp1);
                                if (isPromiseLike(result1)) {
                                    _this.logger.warn("Async expression used as return value in in non-async context, transitioning with '*' value");
                                }
                                flowController === null || flowController === void 0 ? void 0 : flowController.transition(String(result1));
                            }
                            expressionEvaluator.reset();
                        });
                    });
                    this.hooks.dataController.call(dataController);
                    validationController.setOptions({
                        parseBinding: parseBinding,
                        model: dataController,
                        logger: this.logger,
                        evaluate: expressionEvaluator.evaluate,
                        constants: this.constantsController
                    });
                    viewController = new ViewController(userFlow.views || [], {
                        evaluator: expressionEvaluator,
                        parseBinding: parseBinding,
                        transition: flowController.transition,
                        model: dataController,
                        utils: {
                            findPlugin: function(pluginSymbol) {
                                return _this.findPlugin(pluginSymbol);
                            }
                        },
                        logger: this.logger,
                        flowController: flowController,
                        schema: schema,
                        format: function(binding, value) {
                            var formatter = schema.getFormatter(binding);
                            return (formatter === null || formatter === void 0 ? void 0 : formatter.format) ? formatter.format(value) : value;
                        },
                        formatValue: function(ref, value) {
                            var formatter = schema.getFormatterForType(ref);
                            return (formatter === null || formatter === void 0 ? void 0 : formatter.format) ? formatter.format(value) : value;
                        },
                        validation: _object_spread_props(_object_spread({}, validationController.forView(parseBinding)), {
                            type: function(b) {
                                return schema.getType(parseBinding(b));
                            }
                        }),
                        constants: this.constantsController
                    });
                    viewController.hooks.view.tap("player", function(view) {
                        validationController.onView(view);
                        _this.hooks.view.call(view);
                    });
                    this.hooks.viewController.call(viewController);
                    return {
                        start: function() {
                            flowController.start().then(function(endState) {
                                var flowResult = {
                                    endState: resolveStrings(endState, false),
                                    data: dataController.serialize()
                                };
                                return flowResult;
                            }).then(flowResultDeferred.resolve).catch(function(e) {
                                _this.logger.error("Something went wrong: ".concat(e.message));
                                throw e;
                            }).catch(flowResultDeferred.reject).finally(function() {
                                return _this.hooks.onEnd.call();
                            });
                        },
                        state: {
                            status: "in-progress",
                            flowResult: flowResultDeferred.promise,
                            controllers: {
                                data: dataController,
                                view: viewController,
                                flow: flowController,
                                schema: schema,
                                expression: expressionEvaluator,
                                binding: pathResolver,
                                validation: validationController
                            },
                            fail: flowResultDeferred.reject,
                            flow: userFlow,
                            logger: this.logger
                        }
                    };
                }
            },
            {
                key: "start",
                value: function start(payload) {
                    return _async_to_generator(function() {
                        var _this, _payload_id, ref, maybeUpdateState, _this_setupFlow, state, start, endProps, _tmp, error, errorState;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _this = this;
                                    ref = Symbol((_payload_id = payload === null || payload === void 0 ? void 0 : payload.id) !== null && _payload_id !== void 0 ? _payload_id : "payload");
                                    maybeUpdateState = function(newState) {
                                        if (_this.state.ref !== ref) {
                                            _this.logger.warn("Received update for a flow that's not the current one");
                                            return newState;
                                        }
                                        _this.setState(newState);
                                        return newState;
                                    };
                                    this.setState({
                                        status: "not-started",
                                        ref: ref
                                    });
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]);
                                    _this_setupFlow = this.setupFlow(payload), state = _this_setupFlow.state, start = _this_setupFlow.start;
                                    this.setState(_object_spread({
                                        ref: ref
                                    }, state));
                                    start();
                                    endProps = {
                                        ref: ref,
                                        status: "completed",
                                        flow: state.flow,
                                        controllers: {
                                            data: state.controllers.data.makeReadOnly()
                                        }
                                    };
                                    _tmp = [
                                        {}
                                    ];
                                    return [
                                        4,
                                        state.flowResult
                                    ];
                                case 2:
                                    return [
                                        2,
                                        maybeUpdateState.apply(void 0, [
                                            _object_spread.apply(void 0, _tmp.concat([
                                                _state.sent(),
                                                endProps
                                            ]))
                                        ])
                                    ];
                                case 3:
                                    error = _state.sent();
                                    errorState = {
                                        status: "error",
                                        ref: ref,
                                        flow: payload,
                                        error: error
                                    };
                                    maybeUpdateState(errorState);
                                    throw error;
                                case 4:
                                    return [
                                        2
                                    ];
                            }
                        });
                    }).call(this);
                }
            }
        ]);
        return _Player2;
    }();
    _Player.info = {
        version: PLAYER_VERSION,
        commit: COMMIT
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+async-node-plugin@0.0.0/node_modules/@player-ui/async-node-plugin/dist/index.mjs
    var import_queue_microtask3 = __toESM(require_queue_microtask(), 1);
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
    var traverseAndReplace = function(node, replaceFn) {
        if (node.type === NodeType.MultiNode) {
            var index = 0;
            while(index < node.values.length){
                var child = node.values[index];
                if (!child) {
                    index++;
                    continue;
                }
                var result = replaceFn(child);
                if (result.type === NodeType.MultiNode) {
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
    var unwrapAsset = function(node) {
        var _node_children;
        if (node.type !== NodeType.Value) {
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
    var requiresAssetWrapper = function(node) {
        if (node.type === NodeType.Asset) {
            return true;
        }
        if (node.type !== NodeType.Applicability) {
            return false;
        }
        return node.value.type === NodeType.Asset;
    };
    var defaultGetNodeId = function(node) {
        return "async-".concat(node.value.id);
    };
    var createAsyncTransform = function(options) {
        var transformAssetType = options.transformAssetType, wrapperAssetType = options.wrapperAssetType, getNestedAsset = options.getNestedAsset, _options_getAsyncNodeId = options.getAsyncNodeId, getAsyncNodeId = _options_getAsyncNodeId === void 0 ? defaultGetNodeId : _options_getAsyncNodeId, _options_path = options.path, path = _options_path === void 0 ? [
            "values"
        ] : _options_path, tmp = options.flatten, flatten2 = tmp === void 0 ? true : tmp, _options_asyncNodePosition = options.asyncNodePosition, asyncNodePosition = _options_asyncNodePosition === void 0 ? "append" : _options_asyncNodePosition;
        var replaceNode = function(node) {
            var unwrapped = unwrapAsset(node);
            if (unwrapped.type !== NodeType.Asset || unwrapped.value.type !== transformAssetType) {
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
            var _Builder;
            var id = getAsyncNodeId(node);
            var asset = getNestedAsset === null || getNestedAsset === void 0 ? void 0 : getNestedAsset(node);
            var replaceFunction = flatten2 ? replacer : void 0;
            var asyncNode = Builder.asyncNode(id, flatten2, replaceFunction);
            var values = [
                asyncNode
            ];
            if (asset) {
                var otherValues = [];
                if (requiresAssetWrapper(asset)) {
                    otherValues.push(Builder.assetWrapper(asset));
                } else if (asset.type === NodeType.MultiNode) {
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
            var multiNode = (_Builder = Builder).multiNode.apply(_Builder, _to_consumable_array(values));
            var wrapperAsset = Builder.asset({
                id: wrapperAssetType + "-" + id,
                type: wrapperAssetType
            });
            Builder.addChild(wrapperAsset, path, multiNode);
            return wrapperAsset;
        };
        return asyncTransform2;
    };
    var AsyncNodePluginSymbol = Symbol.for("AsyncNodePlugin");
    var _AsyncNodePlugin = /*#__PURE__*/ function() {
        function _AsyncNodePlugin2(options, asyncHandler) {
            var _this = this;
            _class_call_check(this, _AsyncNodePlugin2);
            this.symbol = _AsyncNodePlugin2.Symbol;
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
                this.hooks.onAsyncNode.tap("async", function(node, callback) {
                    return _async_to_generator(function() {
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
                    })();
                });
            }
        }
        _create_class(_AsyncNodePlugin2, [
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
                    this.playerInstance = player;
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
        return _AsyncNodePlugin2;
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
                    var nodeResolveCache = context.nodeResolveCache, view = context.view;
                    if (nodeResolveCache.get(node.id) !== newNode) {
                        nodeResolveCache.set(node.id, newNode ? newNode : node);
                        view.updateAsync(node.id);
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
                        var resolvedNode = context.nodeResolveCache.get(node.id);
                        if (resolvedNode !== void 0) {
                            if (resolvedNode.asyncNodesResolved === void 0) {
                                resolvedNode.asyncNodesResolved = [];
                            }
                            resolvedNode.asyncNodesResolved.push(node.id);
                            return _this.resolveAsyncChildren(resolvedNode, context);
                        }
                        if (context.inProgressNodes.has(node.id)) {
                            return node;
                        }
                        context.inProgressNodes.add(node.id);
                        (0, import_queue_microtask3.default)(function() {
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
                    var _node_asyncNodesResolved;
                    var asyncNodesResolved = (_node_asyncNodesResolved = node.asyncNodesResolved) !== null && _node_asyncNodesResolved !== void 0 ? _node_asyncNodesResolved : [];
                    node.asyncNodesResolved = asyncNodesResolved;
                    if (node.type === NodeType.MultiNode) {
                        var index = 0;
                        while(index < node.values.length){
                            var childNode = node.values[index];
                            if ((childNode === null || childNode === void 0 ? void 0 : childNode.type) !== NodeType.Async || !this.hasValidMapping(childNode, context)) {
                                index++;
                                continue;
                            }
                            var mappedNode = context.nodeResolveCache.get(childNode.id);
                            asyncNodesResolved.push(childNode.id);
                            if (mappedNode.type === NodeType.MultiNode && childNode.flatten) {
                                mappedNode.values.forEach(function(v) {
                                    return v.parent = node;
                                });
                                node.values = _to_consumable_array(node.values.slice(0, index)).concat(_to_consumable_array(mappedNode.values), _to_consumable_array(node.values.slice(index + 1)));
                            } else {
                                node.values[index] = mappedNode;
                                mappedNode.parent = node;
                            }
                        }
                    } else if ("children" in node) {
                        var _node_children;
                        (_node_children = node.children) === null || _node_children === void 0 ? void 0 : _node_children.forEach(function(c) {
                            while(c.value.type === NodeType.Async && _this.hasValidMapping(c.value, context)){
                                asyncNodesResolved.push(c.value.id);
                                c.value = context.nodeResolveCache.get(c.value.id);
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
                    return _async_to_generator(function() {
                        var _this, _this_basePlugin, result, e, _this_basePlugin1, _options_logger, error, result1, _this_basePlugin_getPlayerInstance, _this_basePlugin2, playerState;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    _this = this;
                                    _state.label = 1;
                                case 1:
                                    _state.trys.push([
                                        1,
                                        3,
                                        ,
                                        4
                                    ]);
                                    return [
                                        4,
                                        (_this_basePlugin = this.basePlugin) === null || _this_basePlugin === void 0 ? void 0 : _this_basePlugin.hooks.onAsyncNode.call(node, function(result2) {
                                            _this.parseNodeAndUpdate(node, context, result2, options);
                                        })
                                    ];
                                case 2:
                                    result = _state.sent();
                                    context.inProgressNodes.delete(node.id);
                                    this.parseNodeAndUpdate(node, context, result, options);
                                    return [
                                        3,
                                        4
                                    ];
                                case 3:
                                    e = _state.sent();
                                    error = _instanceof(e, Error) ? e : new Error(String(e));
                                    result1 = (_this_basePlugin1 = this.basePlugin) === null || _this_basePlugin1 === void 0 ? void 0 : _this_basePlugin1.hooks.onAsyncNodeError.call(error, node);
                                    if (result1 === void 0) {
                                        ;
                                        playerState = (_this_basePlugin2 = this.basePlugin) === null || _this_basePlugin2 === void 0 ? void 0 : (_this_basePlugin_getPlayerInstance = _this_basePlugin2.getPlayerInstance()) === null || _this_basePlugin_getPlayerInstance === void 0 ? void 0 : _this_basePlugin_getPlayerInstance.getState();
                                        if ((playerState === null || playerState === void 0 ? void 0 : playerState.status) === "in-progress") {
                                            playerState.fail(error);
                                        }
                                        return [
                                            2
                                        ];
                                    }
                                    (_options_logger = options.logger) === null || _options_logger === void 0 ? void 0 : _options_logger.error("Async node handling failed and resolved with a fallback. Error:", error);
                                    context.inProgressNodes.delete(node.id);
                                    this.parseNodeAndUpdate(node, context, result1, options);
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
                    }).call(this);
                }
            },
            {
                key: "isAsync",
                value: function isAsync(node) {
                    return (node === null || node === void 0 ? void 0 : node.type) === NodeType.Async;
                }
            },
            {
                key: "isDeterminedAsync",
                value: function isDeterminedAsync(obj) {
                    return (typeof obj === "undefined" ? "undefined" : _type_of(obj)) === "object" && obj !== null && Object.prototype.hasOwnProperty.call(obj, "async");
                }
            },
            {
                key: "applyParser",
                value: function applyParser(parser) {
                    var _this = this;
                    parser.hooks.parseNode.tap(this.name, function(obj, nodeType, options, childOptions) {
                        if (_this.isDeterminedAsync(obj)) {
                            var async = obj.async, flatten2 = obj.flatten, rest = _object_without_properties(obj, [
                                "async",
                                "flatten"
                            ]);
                            var parsedAsync = parser.parseObject(rest, nodeType, options);
                            var parsedNodeId = getNodeID(parsedAsync);
                            if (parsedAsync === null || !parsedNodeId) {
                                return childOptions ? [] : null;
                            }
                            var asyncAST = parser.createASTNode({
                                id: parsedNodeId,
                                type: NodeType.Async,
                                value: parsedAsync,
                                flatten: flatten2
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
                    var _this = this;
                    var context = {
                        nodeResolveCache: /* @__PURE__ */ new Map(),
                        inProgressNodes: /* @__PURE__ */ new Set(),
                        view: view
                    };
                    view.hooks.parser.tap("async", this.applyParser.bind(this));
                    view.hooks.resolver.tap("async", function(resolver) {
                        _this.applyResolver(resolver, context);
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/reference-assets/core/src/assets/chat-message/transform.ts
    var transform2 = createAsyncTransform({
        transformAssetType: "chat-message",
        wrapperAssetType: "collection",
        getNestedAsset: function(node) {
            var _node_children_, _node_children;
            return (_node_children = node.children) === null || _node_children === void 0 ? void 0 : (_node_children_ = _node_children[0]) === null || _node_children_ === void 0 ? void 0 : _node_children_.value;
        }
    });
    var chatMessageTransform = compose(composeBefore(transform2));
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+meta-plugin@0.0.0/node_modules/@player-ui/meta-plugin/dist/index.mjs
    var MetaPlugin = /*#__PURE__*/ function() {
        function MetaPlugin() {
            var plugins = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
            _class_call_check(this, MetaPlugin);
            this.name = "meta-plugin";
            this.plugins = plugins;
        }
        _create_class(MetaPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    this.plugins.forEach(function(plugin) {
                        return player.registerPlugin(plugin);
                    });
                }
            }
        ]);
        return MetaPlugin;
    }();
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+expression-plugin@0.0.0/node_modules/@player-ui/expression-plugin/dist/index.mjs
    var ExpressionPlugin = /*#__PURE__*/ function() {
        function ExpressionPlugin(expressionMap) {
            _class_call_check(this, ExpressionPlugin);
            this.name = "ExpressionPlugin";
            this.expressions = expressionMap;
        }
        _create_class(ExpressionPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    player.hooks.expressionEvaluator.tap(this.name, function(expEvaluator) {
                        _this.expressions.forEach(function(handler, name) {
                            expEvaluator.addExpressionFunction(name, handler);
                        });
                    });
                }
            }
        ]);
        return ExpressionPlugin;
    }();
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/reference-assets/core/src/plugins/chat-ui-demo-plugin.ts
    var createContentFromMessage = function(message, id) {
        return {
            asset: {
                type: "chat-message",
                id: id,
                value: {
                    asset: {
                        type: "text",
                        id: "".concat(id, "-value"),
                        value: message
                    }
                }
            }
        };
    };
    var ChatUiDemoPlugin = /*#__PURE__*/ function() {
        function ChatUiDemoPlugin() {
            _class_call_check(this, ChatUiDemoPlugin);
            this.name = "chat-ui-demo-plugin";
        }
        _create_class(ChatUiDemoPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var asyncNodePlugin = player.findPlugin(AsyncNodePlugin.Symbol);
                    if (!asyncNodePlugin) {
                        player.logger.warn("Failed to apply '".concat(this.name, "'. Reason: Could not find AsyncNodePlugin."));
                        return;
                    }
                    var deferredPromises = {};
                    var allPromiseKeys = [];
                    var counter = 0;
                    var sendMessage = function(context, message, nodeId) {
                        if (nodeId && !(nodeId in deferredPromises)) {
                            var _context_logger;
                            (_context_logger = context.logger) === null || _context_logger === void 0 ? void 0 : _context_logger.warn("'send' expression called with unrecognized id '".concat(nodeId, "'"));
                            return;
                        }
                        if (!nodeId && allPromiseKeys.length === 0) {
                            var _context_logger1;
                            (_context_logger1 = context.logger) === null || _context_logger1 === void 0 ? void 0 : _context_logger1.warn("'send' called with no waiting async nodes");
                            return;
                        }
                        var keys = nodeId ? [
                            nodeId
                        ] : allPromiseKeys;
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var id = _step.value;
                                var content = createContentFromMessage(message, "chat-demo-".concat(counter++));
                                var resolveFunction = deferredPromises[id];
                                resolveFunction === null || resolveFunction === void 0 ? void 0 : resolveFunction(content);
                                delete deferredPromises[id];
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
                        if (nodeId) {
                            var index = allPromiseKeys.indexOf(nodeId);
                            allPromiseKeys.splice(index, 1);
                        } else {
                            allPromiseKeys = [];
                        }
                    };
                    asyncNodePlugin.hooks.onAsyncNode.tap(this.name, function(node) {
                        var _node_parent_parent, _node_parent, _node_parent_parent1, _node_parent1;
                        if (((_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : (_node_parent_parent = _node_parent.parent) === null || _node_parent_parent === void 0 ? void 0 : _node_parent_parent.type) !== NodeType.Asset && ((_node_parent1 = node.parent) === null || _node_parent1 === void 0 ? void 0 : (_node_parent_parent1 = _node_parent1.parent) === null || _node_parent_parent1 === void 0 ? void 0 : _node_parent_parent1.type) !== NodeType.View || !node.parent.parent.value.id.startsWith("collection-async-chat-demo")) {
                            return Promise.resolve(void 0);
                        }
                        return new Promise(function(res) {
                            deferredPromises[node.id] = res;
                            allPromiseKeys.push(node.id);
                        });
                    });
                    player.hooks.view.tap(this.name, function(_) {
                        deferredPromises = {};
                        allPromiseKeys = [];
                        counter = 0;
                    });
                    var expressionPlugin = new ExpressionPlugin(/* @__PURE__ */ new Map([
                        [
                            "send",
                            sendMessage
                        ]
                    ]));
                    player.registerPlugin(expressionPlugin);
                }
            }
        ]);
        return ChatUiDemoPlugin;
    }();
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/reference-assets/core/src/plugins/reference-assets-transform-plugin.ts
    var ReferenceAssetsTransformPlugin = /*#__PURE__*/ function() {
        function ReferenceAssetsTransformPlugin() {
            _class_call_check(this, ReferenceAssetsTransformPlugin);
            this.name = "reference-assets-transforms";
        }
        _create_class(ReferenceAssetsTransformPlugin, [
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
                        ],
                        [
                            {
                                type: "chat-message"
                            },
                            chatMessageTransform
                        ]
                    ]));
                }
            }
        ]);
        return ReferenceAssetsTransformPlugin;
    }();
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/reference-assets/core/src/plugin.ts
    var ReferenceAssetsPlugin = /*#__PURE__*/ function() {
        function ReferenceAssetsPlugin() {
            _class_call_check(this, ReferenceAssetsPlugin);
            this.name = "reference-assets-plugin";
            this.metaPlugin = new MetaPlugin([
                new AsyncNodePlugin({
                    plugins: [
                        new AsyncNodePluginPlugin()
                    ]
                }),
                new ReferenceAssetsTransformPlugin(),
                new ChatUiDemoPlugin()
            ]);
        }
        _create_class(ReferenceAssetsPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    player.registerPlugin(this.metaPlugin);
                }
            }
        ]);
        return ReferenceAssetsPlugin;
    }();
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

queue-microtask/index.js:
  (*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/ 
//# sourceMappingURL=index.global.js.map