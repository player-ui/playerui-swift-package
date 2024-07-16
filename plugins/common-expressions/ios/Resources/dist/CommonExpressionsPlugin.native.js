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
var CommonExpressionsPlugin = function() {
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
    var dlv_es_default = // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/dlv@1.1.3/node_modules/dlv/dist/dlv.es.js
    function dlv_es_default(t2, e, l, n, r) {
        for(e = e.split ? e.split(".") : e, n = 0; n < e.length; n++)t2 = t2 ? t2[e[n]] : r;
        return t2 === r ? l : t2;
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
    var createMatcher = function createMatcher(partialObj) {
        var pairs = traverseObj(partialObj);
        var matchFunction = function(searchObj) {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = Array.from(pairs)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var entry = _step.value;
                    var _entry = _sliced_to_array(entry, 2), path2 = _entry[0], value = _entry[1];
                    if (dlv_es_default(searchObj, path2) !== value) {
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
            if (obj && typeof obj === "object") {
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
        return typeof x === "object" && x !== null && !Array.isArray(x) && x.__id === ExpNodeOpaqueIdentifier;
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
        var length2 = expr.length;
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
            while(index < length2){
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
            if (index < length2 && exprICode(index) === QUMARK_CODE) {
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
            while(index < length2){
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
            while(index < length2){
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
            while(index < length2){
                ch = exprICode(index);
                if (isIdentifierPart(ch)) {
                    index++;
                } else {
                    break;
                }
            }
            var identifier2 = expr.slice(start, index);
            if (Object.prototype.hasOwnProperty.call(literals, identifier2)) {
                return {
                    __id: ExpNodeOpaqueIdentifier,
                    type: "Literal",
                    value: literals[identifier2],
                    raw: identifier2,
                    location: getLocation(start)
                };
            }
            if (identifier2 === thisStr) {
                return {
                    __id: ExpNodeOpaqueIdentifier,
                    type: "ThisExpression",
                    location: getLocation(start)
                };
            }
            return {
                __id: ExpNodeOpaqueIdentifier,
                type: "Identifier",
                name: identifier2,
                location: getLocation(start)
            };
        }
        function gobbleArguments(termination) {
            var args = [];
            var charIndex;
            var node;
            while(index < length2){
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
            while(index < length2){
                var chIndex = exprICode(index);
                if (chIndex === SEMCOL_CODE || chIndex === COMMA_CODE) {
                    index++;
                    continue;
                }
                var node = gobbleExpression();
                if (node) {
                    nodes.push(node);
                } else if (strictMode && index < length2) {
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
    var withoutContext = function withoutContext(fn) {
        return function(_context) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                args[_key - 1] = arguments[_key];
            }
            return fn.apply(void 0, _to_consumable_array(args));
        };
    };
    var isObjectExpression = function isObjectExpression(expr) {
        if (isExpressionNode(expr)) {
            return false;
        }
        return typeof expr === "object" && expr !== null && !Array.isArray(expr) && "value" in expr;
    };
    var parse4 = function parse4(schema) {
        var _loop = function() {
            var next = parseQueue.shift();
            if (!next) {
                return "break";
            }
            var node = next.node, path2 = next.path, visited = next.visited;
            Object.entries(node).forEach(function(param) {
                var _param = _sliced_to_array(param, 2), prop = _param[0], type = _param[1];
                var nestedPath2 = _to_consumable_array(path2).concat([
                    prop
                ]);
                var nestedPathStr = nestedPath2.join(".");
                if (expandedPaths.has(nestedPathStr)) {
                    throw new Error("Path has already been processed. There's either a loop somewhere or a bug");
                }
                if (visited.has(type.type)) {
                    throw new Error("Path already contained type: ".concat(type.type, ". This likely indicates a loop in the schema"));
                }
                expandedPaths.set(nestedPathStr, type);
                if (type.isArray) {
                    nestedPath2.push("[]");
                }
                if (type.isRecord) {
                    nestedPath2.push("{}");
                }
                if (type.type && schema[type.type]) {
                    parseQueue.push({
                        path: nestedPath2,
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
    var hasAsync = function hasAsync(obj) {
        return Object.prototype.hasOwnProperty.call(obj, "async");
    };
    var getNodeID = function getNodeID(node) {
        var _node_value;
        if (!node) {
            return;
        }
        if ("value" in node && typeof node.value === "object" && typeof ((_node_value = node.value) === null || _node_value === void 0 ? void 0 : _node_value.id) === "string") {
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
        var flattenedObj = flatten2(obj);
        var batchTxn = [];
        Object.keys(flattenedObj).forEach(function(key) {
            batchTxn.push([
                new BindingInstance(key),
                flattenedObj[key]
            ]);
        });
        return batchTxn;
    };
    var toNum = // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/common-expressions/core/src/expressions/toNum.ts
    function toNum(val, coerceTo0) {
        if (typeof val === "number") {
            return val;
        }
        if (typeof val === "string" && val.length > 0) {
            var newVal = val.trim();
            newVal = newVal.replace(/,/g, "");
            newVal = newVal.replace(/[¥£$€]/, "");
            var nVal = Number(newVal);
            return newVal.match(/^0[xbo]/i) || isNaN(nVal) ? void 0 : nVal;
        }
        return coerceTo0 ? 0 : void 0;
    };
    var ifString = // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/common-expressions/core/src/expressions/index.ts
    function ifString(fn) {
        return function(arg) {
            if (typeof arg === "string") {
                return fn(arg);
            }
            return arg;
        };
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
                var _super = _create_super(_NestedError);
                function _NestedError(message) {
                    for(var _len = arguments.length, innerErrors = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        innerErrors[_key - 1] = arguments[_key];
                    }
                    _class_call_check(this, _NestedError);
                    var _this;
                    _this = _super.call(this, message);
                    var thisErrorReport = _NestedError.getErrorReport(_assert_this_initialized(_this));
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/arr-flatten@1.1.0/node_modules/arr-flatten/index.js
    var require_arr_flatten = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/arr-flatten@1.1.0/node_modules/arr-flatten/index.js": function(exports, module) {
            "use strict";
            module.exports = function(arr) {
                return flat(arr, []);
            };
            function flat(arr, res) {
                var i = 0, cur;
                var len = arr.length;
                for(; i < len; i++){
                    cur = arr[i];
                    Array.isArray(cur) ? flat(cur, res) : res.push(cur);
                }
                return res;
            }
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/parsimmon@1.18.1/node_modules/parsimmon/src/parsimmon.js
    var require_parsimmon = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/parsimmon@1.18.1/node_modules/parsimmon/src/parsimmon.js": function(exports, module) {
            "use strict";
            function Parsimmon(action) {
                if (!_instanceof(this, Parsimmon)) {
                    return new Parsimmon(action);
                }
                this._ = action;
            }
            var _ = Parsimmon.prototype;
            function times(n, f) {
                var i = 0;
                for(i; i < n; i++){
                    f(i);
                }
            }
            function forEach(f, arr) {
                times(arr.length, function(i) {
                    f(arr[i], i, arr);
                });
            }
            function reduce(f, seed, arr) {
                forEach(function(elem, i, arr2) {
                    seed = f(seed, elem, i, arr2);
                }, arr);
                return seed;
            }
            function map(f, arr) {
                return reduce(function(acc, elem, i, a) {
                    return acc.concat([
                        f(elem, i, a)
                    ]);
                }, [], arr);
            }
            function lshiftBuffer(input) {
                var asTwoBytes = reduce(function(a, v, i, b) {
                    return a.concat(i === b.length - 1 ? Buffer.from([
                        v,
                        0
                    ]).readUInt16BE(0) : b.readUInt16BE(i));
                }, [], input);
                return Buffer.from(map(function(x) {
                    return (x << 1 & 65535) >> 8;
                }, asTwoBytes));
            }
            function consumeBitsFromBuffer(n, input) {
                var state = {
                    v: 0,
                    buf: input
                };
                times(n, function() {
                    state = {
                        v: state.v << 1 | bitPeekBuffer(state.buf),
                        buf: lshiftBuffer(state.buf)
                    };
                });
                return state;
            }
            function bitPeekBuffer(input) {
                return input[0] >> 7;
            }
            function sum2(numArr) {
                return reduce(function(x, y) {
                    return x + y;
                }, 0, numArr);
            }
            function find2(pred, arr) {
                return reduce(function(found, elem) {
                    return found || (pred(elem) ? elem : found);
                }, null, arr);
            }
            function bufferExists() {
                return typeof Buffer !== "undefined";
            }
            function setExists() {
                if (Parsimmon._supportsSet !== void 0) {
                    return Parsimmon._supportsSet;
                }
                var exists = typeof Set !== "undefined";
                Parsimmon._supportsSet = exists;
                return exists;
            }
            function ensureBuffer() {
                if (!bufferExists()) {
                    throw new Error("Buffer global does not exist; please use webpack if you need to parse Buffers in the browser.");
                }
            }
            function bitSeq(alignments) {
                ensureBuffer();
                var totalBits = sum2(alignments);
                if (totalBits % 8 !== 0) {
                    throw new Error("The bits [" + alignments.join(", ") + "] add up to " + totalBits + " which is not an even number of bytes; the total should be divisible by 8");
                }
                var bytes = totalBits / 8;
                var tooBigRange = find2(function(x) {
                    return x > 48;
                }, alignments);
                if (tooBigRange) {
                    throw new Error(tooBigRange + " bit range requested exceeds 48 bit (6 byte) Number max.");
                }
                return new Parsimmon(function(input, i) {
                    var newPos = bytes + i;
                    if (newPos > input.length) {
                        return makeFailure(i, bytes.toString() + " bytes");
                    }
                    return makeSuccess(newPos, reduce(function(acc, bits) {
                        var state = consumeBitsFromBuffer(bits, acc.buf);
                        return {
                            coll: acc.coll.concat(state.v),
                            buf: state.buf
                        };
                    }, {
                        coll: [],
                        buf: input.slice(i, newPos)
                    }, alignments).coll);
                });
            }
            function bitSeqObj(namedAlignments) {
                ensureBuffer();
                var seenKeys = {};
                var totalKeys = 0;
                var fullAlignments = map(function(item) {
                    if (isArray(item)) {
                        var pair = item;
                        if (pair.length !== 2) {
                            throw new Error("[" + pair.join(", ") + "] should be length 2, got length " + pair.length);
                        }
                        assertString(pair[0]);
                        assertNumber(pair[1]);
                        if (Object.prototype.hasOwnProperty.call(seenKeys, pair[0])) {
                            throw new Error("duplicate key in bitSeqObj: " + pair[0]);
                        }
                        seenKeys[pair[0]] = true;
                        totalKeys++;
                        return pair;
                    } else {
                        assertNumber(item);
                        return [
                            null,
                            item
                        ];
                    }
                }, namedAlignments);
                if (totalKeys < 1) {
                    throw new Error("bitSeqObj expects at least one named pair, got [" + namedAlignments.join(", ") + "]");
                }
                var namesOnly = map(function(pair) {
                    return pair[0];
                }, fullAlignments);
                var alignmentsOnly = map(function(pair) {
                    return pair[1];
                }, fullAlignments);
                return bitSeq(alignmentsOnly).map(function(parsed) {
                    var namedParsed = map(function(name, i) {
                        return [
                            name,
                            parsed[i]
                        ];
                    }, namesOnly);
                    return reduce(function(obj, kv) {
                        if (kv[0] !== null) {
                            obj[kv[0]] = kv[1];
                        }
                        return obj;
                    }, {}, namedParsed);
                });
            }
            function parseBufferFor(other, length2) {
                return new Parsimmon(function(input, i) {
                    ensureBuffer();
                    if (i + length2 > input.length) {
                        return makeFailure(i, length2 + " bytes for " + other);
                    }
                    return makeSuccess(i + length2, input.slice(i, i + length2));
                });
            }
            function parseBuffer(length2) {
                return parseBufferFor("buffer", length2).map(function(unsafe) {
                    return Buffer.from(unsafe);
                });
            }
            function encodedString(encoding, length2) {
                return parseBufferFor("string", length2).map(function(buff) {
                    return buff.toString(encoding);
                });
            }
            function isInteger(value) {
                return typeof value === "number" && Math.floor(value) === value;
            }
            function assertValidIntegerByteLengthFor(who, length2) {
                if (!isInteger(length2) || length2 < 0 || length2 > 6) {
                    throw new Error(who + " requires integer length in range [0, 6].");
                }
            }
            function uintBE(length2) {
                assertValidIntegerByteLengthFor("uintBE", length2);
                return parseBufferFor("uintBE(" + length2 + ")", length2).map(function(buff) {
                    return buff.readUIntBE(0, length2);
                });
            }
            function uintLE(length2) {
                assertValidIntegerByteLengthFor("uintLE", length2);
                return parseBufferFor("uintLE(" + length2 + ")", length2).map(function(buff) {
                    return buff.readUIntLE(0, length2);
                });
            }
            function intBE(length2) {
                assertValidIntegerByteLengthFor("intBE", length2);
                return parseBufferFor("intBE(" + length2 + ")", length2).map(function(buff) {
                    return buff.readIntBE(0, length2);
                });
            }
            function intLE(length2) {
                assertValidIntegerByteLengthFor("intLE", length2);
                return parseBufferFor("intLE(" + length2 + ")", length2).map(function(buff) {
                    return buff.readIntLE(0, length2);
                });
            }
            function floatBE() {
                return parseBufferFor("floatBE", 4).map(function(buff) {
                    return buff.readFloatBE(0);
                });
            }
            function floatLE() {
                return parseBufferFor("floatLE", 4).map(function(buff) {
                    return buff.readFloatLE(0);
                });
            }
            function doubleBE() {
                return parseBufferFor("doubleBE", 8).map(function(buff) {
                    return buff.readDoubleBE(0);
                });
            }
            function doubleLE() {
                return parseBufferFor("doubleLE", 8).map(function(buff) {
                    return buff.readDoubleLE(0);
                });
            }
            function toArray(arrLike) {
                return Array.prototype.slice.call(arrLike);
            }
            function isParser(obj) {
                return _instanceof(obj, Parsimmon);
            }
            function isArray(x) {
                return ({}).toString.call(x) === "[object Array]";
            }
            function isBuffer(x) {
                return bufferExists() && Buffer.isBuffer(x);
            }
            function makeSuccess(index2, value) {
                return {
                    status: true,
                    index: index2,
                    value: value,
                    furthest: -1,
                    expected: []
                };
            }
            function makeFailure(index2, expected) {
                if (!isArray(expected)) {
                    expected = [
                        expected
                    ];
                }
                return {
                    status: false,
                    index: -1,
                    value: null,
                    furthest: index2,
                    expected: expected
                };
            }
            function mergeReplies(result, last) {
                if (!last) {
                    return result;
                }
                if (result.furthest > last.furthest) {
                    return result;
                }
                var expected = result.furthest === last.furthest ? union(result.expected, last.expected) : last.expected;
                return {
                    status: result.status,
                    index: result.index,
                    value: result.value,
                    furthest: last.furthest,
                    expected: expected
                };
            }
            var lineColumnIndex = {};
            function makeLineColumnIndex(input, i) {
                if (isBuffer(input)) {
                    return {
                        offset: i,
                        line: -1,
                        column: -1
                    };
                }
                if (!(input in lineColumnIndex)) {
                    lineColumnIndex[input] = {};
                }
                var inputIndex = lineColumnIndex[input];
                var prevLine = 0;
                var newLines = 0;
                var lineStart = 0;
                var j = i;
                while(j >= 0){
                    if (j in inputIndex) {
                        prevLine = inputIndex[j].line;
                        if (lineStart === 0) {
                            lineStart = inputIndex[j].lineStart;
                        }
                        break;
                    }
                    if (// Unix LF (\n) or Windows CRLF (\r\n) line ending
                    input.charAt(j) === "\n" || // Old Mac CR (\r) line ending
                    input.charAt(j) === "\r" && input.charAt(j + 1) !== "\n") {
                        newLines++;
                        if (lineStart === 0) {
                            lineStart = j + 1;
                        }
                    }
                    j--;
                }
                var lineWeAreUpTo = prevLine + newLines;
                var columnWeAreUpTo = i - lineStart;
                inputIndex[i] = {
                    line: lineWeAreUpTo,
                    lineStart: lineStart
                };
                return {
                    offset: i,
                    line: lineWeAreUpTo + 1,
                    column: columnWeAreUpTo + 1
                };
            }
            function union(xs, ys) {
                if (setExists() && Array.from) {
                    var set2 = new Set(xs);
                    for(var y = 0; y < ys.length; y++){
                        set2.add(ys[y]);
                    }
                    var arr = Array.from(set2);
                    arr.sort();
                    return arr;
                }
                var obj = {};
                for(var i = 0; i < xs.length; i++){
                    obj[xs[i]] = true;
                }
                for(var j = 0; j < ys.length; j++){
                    obj[ys[j]] = true;
                }
                var keys = [];
                for(var k in obj){
                    if (({}).hasOwnProperty.call(obj, k)) {
                        keys.push(k);
                    }
                }
                keys.sort();
                return keys;
            }
            function assertParser(p) {
                if (!isParser(p)) {
                    throw new Error("not a parser: " + p);
                }
            }
            function get(input, i) {
                if (typeof input === "string") {
                    return input.charAt(i);
                }
                return input[i];
            }
            function assertArray(x) {
                if (!isArray(x)) {
                    throw new Error("not an array: " + x);
                }
            }
            function assertNumber(x) {
                if (typeof x !== "number") {
                    throw new Error("not a number: " + x);
                }
            }
            function assertRegexp(x) {
                if (!_instanceof(x, RegExp)) {
                    throw new Error("not a regexp: " + x);
                }
                var f = flags(x);
                for(var i = 0; i < f.length; i++){
                    var c = f.charAt(i);
                    if (c !== "i" && c !== "m" && c !== "u" && c !== "s") {
                        throw new Error('unsupported regexp flag "' + c + '": ' + x);
                    }
                }
            }
            function assertFunction(x) {
                if (typeof x !== "function") {
                    throw new Error("not a function: " + x);
                }
            }
            function assertString(x) {
                if (typeof x !== "string") {
                    throw new Error("not a string: " + x);
                }
            }
            var linesBeforeStringError = 2;
            var linesAfterStringError = 3;
            var bytesPerLine = 8;
            var bytesBefore = bytesPerLine * 5;
            var bytesAfter = bytesPerLine * 4;
            var defaultLinePrefix = "  ";
            function repeat(string2, amount) {
                return new Array(amount + 1).join(string2);
            }
            function formatExpected(expected) {
                if (expected.length === 1) {
                    return "Expected:\n\n" + expected[0];
                }
                return "Expected one of the following: \n\n" + expected.join(", ");
            }
            function leftPad(str, pad, char) {
                var add = pad - str.length;
                if (add <= 0) {
                    return str;
                }
                return repeat(char, add) + str;
            }
            function toChunks(arr, chunkSize) {
                var length2 = arr.length;
                var chunks = [];
                var chunkIndex = 0;
                if (length2 <= chunkSize) {
                    return [
                        arr.slice()
                    ];
                }
                for(var i = 0; i < length2; i++){
                    if (!chunks[chunkIndex]) {
                        chunks.push([]);
                    }
                    chunks[chunkIndex].push(arr[i]);
                    if ((i + 1) % chunkSize === 0) {
                        chunkIndex++;
                    }
                }
                return chunks;
            }
            function rangeFromIndexAndOffsets(i, before, after, length2) {
                return {
                    // Guard against the negative upper bound for lines included in the output.
                    from: i - before > 0 ? i - before : 0,
                    to: i + after > length2 ? length2 : i + after
                };
            }
            function byteRangeToRange(byteRange) {
                if (byteRange.from === 0 && byteRange.to === 1) {
                    return {
                        from: byteRange.from,
                        to: byteRange.to
                    };
                }
                return {
                    from: byteRange.from / bytesPerLine,
                    // Round `to`, so we don't get float if the amount of bytes is not divisible by `bytesPerLine`
                    to: Math.floor(byteRange.to / bytesPerLine)
                };
            }
            function formatGot(input, error) {
                var index2 = error.index;
                var i = index2.offset;
                var verticalMarkerLength = 1;
                var column;
                var lineWithErrorIndex;
                var lines;
                var lineRange;
                var lastLineNumberLabelLength;
                if (i === input.length) {
                    return "Got the end of the input";
                }
                if (isBuffer(input)) {
                    var byteLineWithErrorIndex = i - i % bytesPerLine;
                    var columnByteIndex = i - byteLineWithErrorIndex;
                    var byteRange = rangeFromIndexAndOffsets(byteLineWithErrorIndex, bytesBefore, bytesAfter + bytesPerLine, input.length);
                    var bytes = input.slice(byteRange.from, byteRange.to);
                    var bytesInChunks = toChunks(bytes.toJSON().data, bytesPerLine);
                    var byteLines = map(function(byteRow) {
                        return map(function(byteValue) {
                            return leftPad(byteValue.toString(16), 2, "0");
                        }, byteRow);
                    }, bytesInChunks);
                    lineRange = byteRangeToRange(byteRange);
                    lineWithErrorIndex = byteLineWithErrorIndex / bytesPerLine;
                    column = columnByteIndex * 3;
                    if (columnByteIndex >= 4) {
                        column += 1;
                    }
                    verticalMarkerLength = 2;
                    lines = map(function(byteLine) {
                        return byteLine.length <= 4 ? byteLine.join(" ") : byteLine.slice(0, 4).join(" ") + "  " + byteLine.slice(4).join(" ");
                    }, byteLines);
                    lastLineNumberLabelLength = ((lineRange.to > 0 ? lineRange.to - 1 : lineRange.to) * 8).toString(16).length;
                    if (lastLineNumberLabelLength < 2) {
                        lastLineNumberLabelLength = 2;
                    }
                } else {
                    var inputLines = input.split(/\r\n|[\n\r\u2028\u2029]/);
                    column = index2.column - 1;
                    lineWithErrorIndex = index2.line - 1;
                    lineRange = rangeFromIndexAndOffsets(lineWithErrorIndex, linesBeforeStringError, linesAfterStringError, inputLines.length);
                    lines = inputLines.slice(lineRange.from, lineRange.to);
                    lastLineNumberLabelLength = lineRange.to.toString().length;
                }
                var lineWithErrorCurrentIndex = lineWithErrorIndex - lineRange.from;
                if (isBuffer(input)) {
                    lastLineNumberLabelLength = ((lineRange.to > 0 ? lineRange.to - 1 : lineRange.to) * 8).toString(16).length;
                    if (lastLineNumberLabelLength < 2) {
                        lastLineNumberLabelLength = 2;
                    }
                }
                var linesWithLineNumbers = reduce(function(acc, lineSource, index3) {
                    var isLineWithError = index3 === lineWithErrorCurrentIndex;
                    var prefix = isLineWithError ? "> " : defaultLinePrefix;
                    var lineNumberLabel;
                    if (isBuffer(input)) {
                        lineNumberLabel = leftPad(((lineRange.from + index3) * 8).toString(16), lastLineNumberLabelLength, "0");
                    } else {
                        lineNumberLabel = leftPad((lineRange.from + index3 + 1).toString(), lastLineNumberLabelLength, " ");
                    }
                    return [].concat(acc, [
                        prefix + lineNumberLabel + " | " + lineSource
                    ], isLineWithError ? [
                        defaultLinePrefix + repeat(" ", lastLineNumberLabelLength) + " | " + leftPad("", column, " ") + repeat("^", verticalMarkerLength)
                    ] : []);
                }, [], lines);
                return linesWithLineNumbers.join("\n");
            }
            function formatError(input, error) {
                return [
                    "\n",
                    "-- PARSING FAILED " + repeat("-", 50),
                    "\n\n",
                    formatGot(input, error),
                    "\n\n",
                    formatExpected(error.expected),
                    "\n"
                ].join("");
            }
            function flags(re) {
                if (re.flags !== void 0) {
                    return re.flags;
                }
                return [
                    re.global ? "g" : "",
                    re.ignoreCase ? "i" : "",
                    re.multiline ? "m" : "",
                    re.unicode ? "u" : "",
                    re.sticky ? "y" : ""
                ].join("");
            }
            function anchoredRegexp(re) {
                return RegExp("^(?:" + re.source + ")", flags(re));
            }
            function seq() {
                var parsers = [].slice.call(arguments);
                var numParsers = parsers.length;
                for(var j = 0; j < numParsers; j += 1){
                    assertParser(parsers[j]);
                }
                return Parsimmon(function(input, i) {
                    var result;
                    var accum = new Array(numParsers);
                    for(var j2 = 0; j2 < numParsers; j2 += 1){
                        result = mergeReplies(parsers[j2]._(input, i), result);
                        if (!result.status) {
                            return result;
                        }
                        accum[j2] = result.value;
                        i = result.index;
                    }
                    return mergeReplies(makeSuccess(i, accum), result);
                });
            }
            function seqObj() {
                var seenKeys = {};
                var totalKeys = 0;
                var parsers = toArray(arguments);
                var numParsers = parsers.length;
                for(var j = 0; j < numParsers; j += 1){
                    var p = parsers[j];
                    if (isParser(p)) {
                        continue;
                    }
                    if (isArray(p)) {
                        var isWellFormed = p.length === 2 && typeof p[0] === "string" && isParser(p[1]);
                        if (isWellFormed) {
                            var key = p[0];
                            if (Object.prototype.hasOwnProperty.call(seenKeys, key)) {
                                throw new Error("seqObj: duplicate key " + key);
                            }
                            seenKeys[key] = true;
                            totalKeys++;
                            continue;
                        }
                    }
                    throw new Error("seqObj arguments must be parsers or [string, parser] array pairs.");
                }
                if (totalKeys === 0) {
                    throw new Error("seqObj expects at least one named parser, found zero");
                }
                return Parsimmon(function(input, i) {
                    var result;
                    var accum = {};
                    for(var j2 = 0; j2 < numParsers; j2 += 1){
                        var name;
                        var parser2;
                        if (isArray(parsers[j2])) {
                            name = parsers[j2][0];
                            parser2 = parsers[j2][1];
                        } else {
                            name = null;
                            parser2 = parsers[j2];
                        }
                        result = mergeReplies(parser2._(input, i), result);
                        if (!result.status) {
                            return result;
                        }
                        if (name) {
                            accum[name] = result.value;
                        }
                        i = result.index;
                    }
                    return mergeReplies(makeSuccess(i, accum), result);
                });
            }
            function seqMap() {
                var args = [].slice.call(arguments);
                if (args.length === 0) {
                    throw new Error("seqMap needs at least one argument");
                }
                var mapper = args.pop();
                assertFunction(mapper);
                return seq.apply(null, args).map(function(results) {
                    return mapper.apply(null, results);
                });
            }
            function createLanguage(parsers) {
                var language = {};
                for(var key in parsers){
                    if (({}).hasOwnProperty.call(parsers, key)) {
                        (function(key2) {
                            var func = function func() {
                                return parsers[key2](language);
                            };
                            language[key2] = lazy(func);
                        })(key);
                    }
                }
                return language;
            }
            function alt() {
                var parsers = [].slice.call(arguments);
                var numParsers = parsers.length;
                if (numParsers === 0) {
                    return fail("zero alternates");
                }
                for(var j = 0; j < numParsers; j += 1){
                    assertParser(parsers[j]);
                }
                return Parsimmon(function(input, i) {
                    var result;
                    for(var j2 = 0; j2 < parsers.length; j2 += 1){
                        result = mergeReplies(parsers[j2]._(input, i), result);
                        if (result.status) {
                            return result;
                        }
                    }
                    return result;
                });
            }
            function sepBy(parser2, separator) {
                return sepBy1(parser2, separator).or(succeed([]));
            }
            function sepBy1(parser2, separator) {
                assertParser(parser2);
                assertParser(separator);
                var pairs = separator.then(parser2).many();
                return seqMap(parser2, pairs, function(r, rs) {
                    return [
                        r
                    ].concat(rs);
                });
            }
            _.parse = function(input) {
                if (typeof input !== "string" && !isBuffer(input)) {
                    throw new Error(".parse must be called with a string or Buffer as its argument");
                }
                var parseResult = this.skip(eof)._(input, 0);
                var result;
                if (parseResult.status) {
                    result = {
                        status: true,
                        value: parseResult.value
                    };
                } else {
                    result = {
                        status: false,
                        index: makeLineColumnIndex(input, parseResult.furthest),
                        expected: parseResult.expected
                    };
                }
                delete lineColumnIndex[input];
                return result;
            };
            _.tryParse = function(str) {
                var result = this.parse(str);
                if (result.status) {
                    return result.value;
                } else {
                    var msg = formatError(str, result);
                    var err = new Error(msg);
                    err.type = "ParsimmonError";
                    err.result = result;
                    throw err;
                }
            };
            _.assert = function(condition, errorMessage) {
                return this.chain(function(value) {
                    return condition(value) ? succeed(value) : fail(errorMessage);
                });
            };
            _.or = function(alternative) {
                return alt(this, alternative);
            };
            _.trim = function(parser2) {
                return this.wrap(parser2, parser2);
            };
            _.wrap = function(leftParser, rightParser) {
                return seqMap(leftParser, this, rightParser, function(left, middle) {
                    return middle;
                });
            };
            _.thru = function(wrapper) {
                return wrapper(this);
            };
            _.then = function(next) {
                assertParser(next);
                return seq(this, next).map(function(results) {
                    return results[1];
                });
            };
            _.many = function() {
                var self = this;
                return Parsimmon(function(input, i) {
                    var accum = [];
                    var result = void 0;
                    for(;;){
                        result = mergeReplies(self._(input, i), result);
                        if (result.status) {
                            if (i === result.index) {
                                throw new Error("infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause");
                            }
                            i = result.index;
                            accum.push(result.value);
                        } else {
                            return mergeReplies(makeSuccess(i, accum), result);
                        }
                    }
                });
            };
            _.tieWith = function(separator) {
                assertString(separator);
                return this.map(function(args) {
                    assertArray(args);
                    if (args.length) {
                        assertString(args[0]);
                        var s = args[0];
                        for(var i = 1; i < args.length; i++){
                            assertString(args[i]);
                            s += separator + args[i];
                        }
                        return s;
                    } else {
                        return "";
                    }
                });
            };
            _.tie = function() {
                return this.tieWith("");
            };
            _.times = function(min, max) {
                var self = this;
                if (arguments.length < 2) {
                    max = min;
                }
                assertNumber(min);
                assertNumber(max);
                return Parsimmon(function(input, i) {
                    var accum = [];
                    var result = void 0;
                    var prevResult = void 0;
                    for(var times2 = 0; times2 < min; times2 += 1){
                        result = self._(input, i);
                        prevResult = mergeReplies(result, prevResult);
                        if (result.status) {
                            i = result.index;
                            accum.push(result.value);
                        } else {
                            return prevResult;
                        }
                    }
                    for(; times2 < max; times2 += 1){
                        result = self._(input, i);
                        prevResult = mergeReplies(result, prevResult);
                        if (result.status) {
                            i = result.index;
                            accum.push(result.value);
                        } else {
                            break;
                        }
                    }
                    return mergeReplies(makeSuccess(i, accum), prevResult);
                });
            };
            _.result = function(res) {
                return this.map(function() {
                    return res;
                });
            };
            _.atMost = function(n) {
                return this.times(0, n);
            };
            _.atLeast = function(n) {
                return seqMap(this.times(n), this.many(), function(init, rest) {
                    return init.concat(rest);
                });
            };
            _.map = function(fn) {
                assertFunction(fn);
                var self = this;
                return Parsimmon(function(input, i) {
                    var result = self._(input, i);
                    if (!result.status) {
                        return result;
                    }
                    return mergeReplies(makeSuccess(result.index, fn(result.value)), result);
                });
            };
            _.contramap = function(fn) {
                assertFunction(fn);
                var self = this;
                return Parsimmon(function(input, i) {
                    var result = self.parse(fn(input.slice(i)));
                    if (!result.status) {
                        return result;
                    }
                    return makeSuccess(i + input.length, result.value);
                });
            };
            _.promap = function(f, g) {
                assertFunction(f);
                assertFunction(g);
                return this.contramap(f).map(g);
            };
            _.skip = function(next) {
                return seq(this, next).map(function(results) {
                    return results[0];
                });
            };
            _.mark = function() {
                return seqMap(index, this, index, function(start, value, end2) {
                    return {
                        start: start,
                        value: value,
                        end: end2
                    };
                });
            };
            _.node = function(name) {
                return seqMap(index, this, index, function(start, value, end2) {
                    return {
                        name: name,
                        value: value,
                        start: start,
                        end: end2
                    };
                });
            };
            _.sepBy = function(separator) {
                return sepBy(this, separator);
            };
            _.sepBy1 = function(separator) {
                return sepBy1(this, separator);
            };
            _.lookahead = function(x) {
                return this.skip(lookahead(x));
            };
            _.notFollowedBy = function(x) {
                return this.skip(notFollowedBy(x));
            };
            _.desc = function(expected) {
                if (!isArray(expected)) {
                    expected = [
                        expected
                    ];
                }
                var self = this;
                return Parsimmon(function(input, i) {
                    var reply = self._(input, i);
                    if (!reply.status) {
                        reply.expected = expected;
                    }
                    return reply;
                });
            };
            _.fallback = function(result) {
                return this.or(succeed(result));
            };
            _.ap = function(other) {
                return seqMap(other, this, function(f, x) {
                    return f(x);
                });
            };
            _.chain = function(f) {
                var self = this;
                return Parsimmon(function(input, i) {
                    var result = self._(input, i);
                    if (!result.status) {
                        return result;
                    }
                    var nextParser = f(result.value);
                    return mergeReplies(nextParser._(input, result.index), result);
                });
            };
            function string(str) {
                assertString(str);
                var expected = "'" + str + "'";
                return Parsimmon(function(input, i) {
                    var j = i + str.length;
                    var head = input.slice(i, j);
                    if (head === str) {
                        return makeSuccess(j, head);
                    } else {
                        return makeFailure(i, expected);
                    }
                });
            }
            function byte(b) {
                ensureBuffer();
                assertNumber(b);
                if (b > 255) {
                    throw new Error("Value specified to byte constructor (" + b + "=0x" + b.toString(16) + ") is larger in value than a single byte.");
                }
                var expected = (b > 15 ? "0x" : "0x0") + b.toString(16);
                return Parsimmon(function(input, i) {
                    var head = get(input, i);
                    if (head === b) {
                        return makeSuccess(i + 1, head);
                    } else {
                        return makeFailure(i, expected);
                    }
                });
            }
            function regexp(re, group) {
                assertRegexp(re);
                if (arguments.length >= 2) {
                    assertNumber(group);
                } else {
                    group = 0;
                }
                var anchored = anchoredRegexp(re);
                var expected = "" + re;
                return Parsimmon(function(input, i) {
                    var match = anchored.exec(input.slice(i));
                    if (match) {
                        if (0 <= group && group <= match.length) {
                            var fullMatch = match[0];
                            var groupMatch = match[group];
                            return makeSuccess(i + fullMatch.length, groupMatch);
                        }
                        var message = "valid match group (0 to " + match.length + ") in " + expected;
                        return makeFailure(i, message);
                    }
                    return makeFailure(i, expected);
                });
            }
            function succeed(value) {
                return Parsimmon(function(input, i) {
                    return makeSuccess(i, value);
                });
            }
            function fail(expected) {
                return Parsimmon(function(input, i) {
                    return makeFailure(i, expected);
                });
            }
            function lookahead(x) {
                if (isParser(x)) {
                    return Parsimmon(function(input, i) {
                        var result = x._(input, i);
                        result.index = i;
                        result.value = "";
                        return result;
                    });
                } else if (typeof x === "string") {
                    return lookahead(string(x));
                } else if (_instanceof(x, RegExp)) {
                    return lookahead(regexp(x));
                }
                throw new Error("not a string, regexp, or parser: " + x);
            }
            function notFollowedBy(parser2) {
                assertParser(parser2);
                return Parsimmon(function(input, i) {
                    var result = parser2._(input, i);
                    var text = input.slice(i, result.index);
                    return result.status ? makeFailure(i, 'not "' + text + '"') : makeSuccess(i, null);
                });
            }
            function test(predicate) {
                assertFunction(predicate);
                return Parsimmon(function(input, i) {
                    var char = get(input, i);
                    if (i < input.length && predicate(char)) {
                        return makeSuccess(i + 1, char);
                    } else {
                        return makeFailure(i, "a character/byte matching " + predicate);
                    }
                });
            }
            function oneOf(str) {
                var expected = str.split("");
                for(var idx = 0; idx < expected.length; idx++){
                    expected[idx] = "'" + expected[idx] + "'";
                }
                return test(function(ch) {
                    return str.indexOf(ch) >= 0;
                }).desc(expected);
            }
            function noneOf(str) {
                return test(function(ch) {
                    return str.indexOf(ch) < 0;
                }).desc("none of '" + str + "'");
            }
            function custom(parsingFunction) {
                return Parsimmon(parsingFunction(makeSuccess, makeFailure));
            }
            function range(begin, end2) {
                return test(function(ch) {
                    return begin <= ch && ch <= end2;
                }).desc(begin + "-" + end2);
            }
            function takeWhile(predicate) {
                assertFunction(predicate);
                return Parsimmon(function(input, i) {
                    var j = i;
                    while(j < input.length && predicate(get(input, j))){
                        j++;
                    }
                    return makeSuccess(j, input.slice(i, j));
                });
            }
            function lazy(desc, f) {
                if (arguments.length < 2) {
                    f = desc;
                    desc = void 0;
                }
                var parser2 = Parsimmon(function(input, i) {
                    parser2._ = f()._;
                    return parser2._(input, i);
                });
                if (desc) {
                    return parser2.desc(desc);
                } else {
                    return parser2;
                }
            }
            function empty() {
                return fail("fantasy-land/empty");
            }
            _.concat = _.or;
            _.empty = empty;
            _.of = succeed;
            _["fantasy-land/ap"] = _.ap;
            _["fantasy-land/chain"] = _.chain;
            _["fantasy-land/concat"] = _.concat;
            _["fantasy-land/empty"] = _.empty;
            _["fantasy-land/of"] = _.of;
            _["fantasy-land/map"] = _.map;
            var index = Parsimmon(function(input, i) {
                return makeSuccess(i, makeLineColumnIndex(input, i));
            });
            var any = Parsimmon(function(input, i) {
                if (i >= input.length) {
                    return makeFailure(i, "any character/byte");
                }
                return makeSuccess(i + 1, get(input, i));
            });
            var all = Parsimmon(function(input, i) {
                return makeSuccess(input.length, input.slice(i));
            });
            var eof = Parsimmon(function(input, i) {
                if (i < input.length) {
                    return makeFailure(i, "EOF");
                }
                return makeSuccess(i, null);
            });
            var digit = regexp(/[0-9]/).desc("a digit");
            var digits = regexp(/[0-9]*/).desc("optional digits");
            var letter = regexp(/[a-z]/i).desc("a letter");
            var letters = regexp(/[a-z]*/i).desc("optional letters");
            var optWhitespace = regexp(/\s*/).desc("optional whitespace");
            var whitespace = regexp(/\s+/).desc("whitespace");
            var cr = string("\r");
            var lf = string("\n");
            var crlf = string("\r\n");
            var newline = alt(crlf, lf, cr).desc("newline");
            var end = alt(newline, eof);
            Parsimmon.all = all;
            Parsimmon.alt = alt;
            Parsimmon.any = any;
            Parsimmon.cr = cr;
            Parsimmon.createLanguage = createLanguage;
            Parsimmon.crlf = crlf;
            Parsimmon.custom = custom;
            Parsimmon.digit = digit;
            Parsimmon.digits = digits;
            Parsimmon.empty = empty;
            Parsimmon.end = end;
            Parsimmon.eof = eof;
            Parsimmon.fail = fail;
            Parsimmon.formatError = formatError;
            Parsimmon.index = index;
            Parsimmon.isParser = isParser;
            Parsimmon.lazy = lazy;
            Parsimmon.letter = letter;
            Parsimmon.letters = letters;
            Parsimmon.lf = lf;
            Parsimmon.lookahead = lookahead;
            Parsimmon.makeFailure = makeFailure;
            Parsimmon.makeSuccess = makeSuccess;
            Parsimmon.newline = newline;
            Parsimmon.noneOf = noneOf;
            Parsimmon.notFollowedBy = notFollowedBy;
            Parsimmon.of = succeed;
            Parsimmon.oneOf = oneOf;
            Parsimmon.optWhitespace = optWhitespace;
            Parsimmon.Parser = Parsimmon;
            Parsimmon.range = range;
            Parsimmon.regex = regexp;
            Parsimmon.regexp = regexp;
            Parsimmon.sepBy = sepBy;
            Parsimmon.sepBy1 = sepBy1;
            Parsimmon.seq = seq;
            Parsimmon.seqMap = seqMap;
            Parsimmon.seqObj = seqObj;
            Parsimmon.string = string;
            Parsimmon.succeed = succeed;
            Parsimmon.takeWhile = takeWhile;
            Parsimmon.test = test;
            Parsimmon.whitespace = whitespace;
            Parsimmon["fantasy-land/empty"] = empty;
            Parsimmon["fantasy-land/of"] = succeed;
            Parsimmon.Binary = {
                bitSeq: bitSeq,
                bitSeqObj: bitSeqObj,
                byte: byte,
                buffer: parseBuffer,
                encodedString: encodedString,
                uintBE: uintBE,
                uint8BE: uintBE(1),
                uint16BE: uintBE(2),
                uint32BE: uintBE(4),
                uintLE: uintLE,
                uint8LE: uintLE(1),
                uint16LE: uintLE(2),
                uint32LE: uintLE(4),
                intBE: intBE,
                int8BE: intBE(1),
                int16BE: intBE(2),
                int32BE: intBE(4),
                intLE: intLE,
                int8LE: intLE(1),
                int16LE: intLE(2),
                int32LE: intLE(4),
                floatBE: floatBE(),
                floatLE: floatLE(),
                doubleBE: doubleBE(),
                doubleLE: doubleLE()
            };
            module.exports = Parsimmon;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/TokenError.js
    var require_TokenError = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/TokenError.js": function(exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.TokenError = void 0;
            var TokenError = /*#__PURE__*/ function(Error1) {
                _inherits(TokenError, Error1);
                var _super = _create_super(TokenError);
                function TokenError(message, token) {
                    _class_call_check(this, TokenError);
                    var _this;
                    _this = _super.call(this, message);
                    _this.message = message;
                    _this.token = token;
                    if (token && token.errors) token.errors.push(_assert_this_initialized(_this));
                    else throw _assert_this_initialized(_this);
                    return _this;
                }
                _create_class(TokenError, [
                    {
                        key: "inspect",
                        value: function inspect() {
                            return "SyntaxError: " + this.message;
                        }
                    }
                ]);
                return TokenError;
            }(_wrap_native_super(Error));
            exports.TokenError = TokenError;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Parser.js
    var require_Parser = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Parser.js": function(exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.Parser = exports.findRuleByName = exports.parseRuleName = exports.escapeRegExp = exports.readToken = void 0;
            var UPPER_SNAKE_RE = /^[A-Z0-9_]+$/;
            var decorationRE = /(\?|\+|\*)$/;
            var preDecorationRE = /^(@|&|!)/;
            var WS_RULE = "WS";
            var TokenError_1 = require_TokenError();
            function readToken(txt, expr) {
                var result = expr.exec(txt);
                if (result && result.index == 0) {
                    if (result[0].length == 0 && expr.source.length > 0) return null;
                    return {
                        type: null,
                        text: result[0],
                        rest: txt.substr(result[0].length),
                        start: 0,
                        end: result[0].length - 1,
                        fullText: result[0],
                        errors: [],
                        children: [],
                        parent: null
                    };
                }
                return null;
            }
            exports.readToken = readToken;
            function escapeRegExp(str) {
                return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            }
            exports.escapeRegExp = escapeRegExp;
            function fixRest(token) {
                token.rest = "";
                token.children && token.children.forEach(function(c) {
                    return fixRest(c);
                });
            }
            function fixPositions(token, start) {
                token.start += start;
                token.end += start;
                token.children && token.children.forEach(function(c) {
                    return fixPositions(c, token.start);
                });
            }
            function agregateErrors(errors, token) {
                if (token.errors && token.errors.length) token.errors.forEach(function(err) {
                    return errors.push(err);
                });
                token.children && token.children.forEach(function(tok) {
                    return agregateErrors(errors, tok);
                });
            }
            function parseRuleName(name) {
                var postDecoration = decorationRE.exec(name);
                var preDecoration = preDecorationRE.exec(name);
                var postDecorationText = postDecoration && postDecoration[0] || "";
                var preDecorationText = preDecoration && preDecoration[0] || "";
                var out = {
                    raw: name,
                    name: name.replace(decorationRE, "").replace(preDecorationRE, ""),
                    isOptional: postDecorationText == "?" || postDecorationText == "*",
                    allowRepetition: postDecorationText == "+" || postDecorationText == "*",
                    atLeastOne: postDecorationText == "+",
                    lookupPositive: preDecorationText == "&",
                    lookupNegative: preDecorationText == "!",
                    pinned: preDecorationText == "@",
                    lookup: false,
                    isLiteral: false
                };
                out.isLiteral = out.name[0] == "'" || out.name[0] == '"';
                out.lookup = out.lookupNegative || out.lookupPositive;
                return out;
            }
            exports.parseRuleName = parseRuleName;
            function findRuleByName(name, parser2) {
                var parsed = parseRuleName(name);
                return parser2.cachedRules[parsed.name] || null;
            }
            exports.findRuleByName = findRuleByName;
            function stripRules(token, re) {
                if (token.children) {
                    var localRules = token.children.filter(function(x) {
                        return x.type && re.test(x.type);
                    });
                    for(var i = 0; i < localRules.length; i++){
                        var indexOnChildren = token.children.indexOf(localRules[i]);
                        if (indexOnChildren != -1) {
                            token.children.splice(indexOnChildren, 1);
                        }
                    }
                    token.children.forEach(function(c) {
                        return stripRules(c, re);
                    });
                }
            }
            var ignoreMissingRules = [
                "EOF"
            ];
            var Parser2 = /*#__PURE__*/ function() {
                function Parser2(grammarRules, options) {
                    var _this = this;
                    _class_call_check(this, Parser2);
                    this.grammarRules = grammarRules;
                    this.options = options;
                    this.cachedRules = {};
                    this.debug = options ? options.debug === true : false;
                    var errors = [];
                    var neededRules = [];
                    grammarRules.forEach(function(rule) {
                        var parsedName = parseRuleName(rule.name);
                        if (parsedName.name in _this.cachedRules) {
                            errors.push("Duplicated rule " + parsedName.name);
                            return;
                        } else {
                            _this.cachedRules[parsedName.name] = rule;
                        }
                        if (!rule.bnf || !rule.bnf.length) {
                            var error = "Missing rule content, rule: " + rule.name;
                            if (errors.indexOf(error) == -1) errors.push(error);
                        } else {
                            rule.bnf.forEach(function(options2) {
                                if (typeof options2[0] === "string") {
                                    var parsed = parseRuleName(options2[0]);
                                    if (parsed.name == rule.name) {
                                        var error = "Left recursion is not allowed, rule: " + rule.name;
                                        if (errors.indexOf(error) == -1) errors.push(error);
                                    }
                                }
                                options2.forEach(function(option) {
                                    if (typeof option == "string") {
                                        var name = parseRuleName(option);
                                        if (!name.isLiteral && neededRules.indexOf(name.name) == -1 && ignoreMissingRules.indexOf(name.name) == -1) neededRules.push(name.name);
                                    }
                                });
                            });
                        }
                        if (WS_RULE == rule.name) rule.implicitWs = false;
                        if (rule.implicitWs) {
                            if (neededRules.indexOf(WS_RULE) == -1) neededRules.push(WS_RULE);
                        }
                        if (rule.recover) {
                            if (neededRules.indexOf(rule.recover) == -1) neededRules.push(rule.recover);
                        }
                    });
                    neededRules.forEach(function(ruleName) {
                        if (!(ruleName in _this.cachedRules)) {
                            errors.push("Missing rule " + ruleName);
                        }
                    });
                    if (errors.length) throw new Error(errors.join("\n"));
                }
                _create_class(Parser2, [
                    {
                        key: "getAST",
                        value: function getAST(txt, target) {
                            if (!target) {
                                target = this.grammarRules.filter(function(x) {
                                    return !x.fragment && x.name.indexOf("%") != 0;
                                })[0].name;
                            }
                            var result = this.parse(txt, target);
                            if (result) {
                                agregateErrors(result.errors, result);
                                fixPositions(result, 0);
                                stripRules(result, /^%/);
                                if (!this.options || !this.options.keepUpperRules) stripRules(result, UPPER_SNAKE_RE);
                                var rest = result.rest;
                                if (rest) {
                                    new TokenError_1.TokenError("Unexpected end of input: \n" + rest, result);
                                }
                                fixRest(result);
                                result.rest = rest;
                            }
                            return result;
                        }
                    },
                    {
                        key: "emitSource",
                        value: function emitSource() {
                            return "CANNOT EMIT SOURCE FROM BASE Parser";
                        }
                    },
                    {
                        key: "parse",
                        value: function parse(txt, target) {
                            var _this = this;
                            var recursion = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
                            var out = null;
                            var type = parseRuleName(target);
                            var expr;
                            var printable = this.debug && /*!isLiteral &*/ !UPPER_SNAKE_RE.test(type.name);
                            printable && console.log(new Array(recursion).join("\u2502  ") + "Trying to get " + target + " from " + JSON.stringify(txt.split("\n")[0]));
                            var realType = type.name;
                            var targetLex = findRuleByName(type.name, this);
                            if (type.name == "EOF") {
                                if (txt.length) {
                                    return null;
                                } else if (txt.length == 0) {
                                    return {
                                        type: "EOF",
                                        text: "",
                                        rest: "",
                                        start: 0,
                                        end: 0,
                                        fullText: "",
                                        errors: [],
                                        children: [],
                                        parent: null
                                    };
                                }
                            }
                            try {
                                if (!targetLex && type.isLiteral) {
                                    var src = type.name.trim();
                                    if (src.startsWith('"')) {
                                        src = JSON.parse(src);
                                    } else if (src.startsWith("'")) {
                                        src = src.replace(/^'(.+)'$/, "$1").replace(/\\'/g, "'");
                                    }
                                    if (src === "") {
                                        return {
                                            type: "%%EMPTY%%",
                                            text: "",
                                            rest: txt,
                                            start: 0,
                                            end: 0,
                                            fullText: "",
                                            errors: [],
                                            children: [],
                                            parent: null
                                        };
                                    }
                                    expr = new RegExp(escapeRegExp(src));
                                    realType = null;
                                }
                            } catch (e) {
                                if (_instanceof(e, ReferenceError)) {
                                    console.error(e);
                                }
                                return null;
                            }
                            if (expr) {
                                var result = readToken(txt, expr);
                                if (result) {
                                    result.type = realType;
                                    return result;
                                }
                            } else {
                                var options = targetLex.bnf;
                                if (_instanceof(options, Array)) {
                                    options.forEach(function(phases) {
                                        var _loop = function(i) {
                                            if (typeof phases[i] == "string") {
                                                var _loop = function() {
                                                    got = null;
                                                    if (targetLex.implicitWs) {
                                                        got = _this.parse(tmpTxt, localTarget.name, recursion + 1);
                                                        if (!got) {
                                                            var WS = void 0;
                                                            do {
                                                                WS = _this.parse(tmpTxt, WS_RULE, recursion + 1);
                                                                if (WS) {
                                                                    tmp.text = tmp.text + WS.text;
                                                                    tmp.end = tmp.text.length;
                                                                    WS.parent = tmp;
                                                                    tmp.children.push(WS);
                                                                    tmpTxt = tmpTxt.substr(WS.text.length);
                                                                    position += WS.text.length;
                                                                } else {
                                                                    break;
                                                                }
                                                            }while (WS && WS.text.length);
                                                        }
                                                    }
                                                    got = got || _this.parse(tmpTxt, localTarget.name, recursion + 1);
                                                    if (localTarget.lookupNegative) {
                                                        if (got) return {
                                                            v: void void 0
                                                        };
                                                        return "break";
                                                    }
                                                    if (localTarget.lookupPositive) {
                                                        if (!got) return {
                                                            v: void void 0
                                                        };
                                                    }
                                                    if (!got) {
                                                        if (localTarget.isOptional) return "break";
                                                        if (localTarget.atLeastOne && foundAtLeastOne) return "break";
                                                    }
                                                    if (got && targetLex.pinned == i + 1) {
                                                        pinned = got;
                                                        printable && console.log(new Array(recursion + 1).join("\u2502  ") + "\u2514\u2500 " + got.type + " PINNED");
                                                    }
                                                    if (!got) got = _this.parseRecovery(targetLex, tmpTxt, recursion + 1);
                                                    if (!got) {
                                                        if (pinned) {
                                                            out = tmp;
                                                            got = {
                                                                type: "SyntaxError",
                                                                text: tmpTxt,
                                                                children: [],
                                                                end: tmpTxt.length,
                                                                errors: [],
                                                                fullText: "",
                                                                parent: null,
                                                                start: 0,
                                                                rest: ""
                                                            };
                                                            if (tmpTxt.length) {
                                                                new TokenError_1.TokenError("Unexpected end of input. Expecting ".concat(localTarget.name, " Got: ").concat(tmpTxt), got);
                                                            } else {
                                                                new TokenError_1.TokenError("Unexpected end of input. Missing ".concat(localTarget.name), got);
                                                            }
                                                            printable && console.log(new Array(recursion + 1).join("\u2502  ") + "\u2514\u2500 " + got.type + " " + JSON.stringify(got.text));
                                                        } else {
                                                            return {
                                                                v: void void 0
                                                            };
                                                        }
                                                    }
                                                    foundAtLeastOne = true;
                                                    foundSomething = true;
                                                    if (got.type == "%%EMPTY%%") {
                                                        return "break";
                                                    }
                                                    got.start += position;
                                                    got.end += position;
                                                    if (!localTarget.lookupPositive && got.type) {
                                                        if (got.fragment) {
                                                            got.children && got.children.forEach(function(x) {
                                                                x.start += position;
                                                                x.end += position;
                                                                x.parent = tmp;
                                                                tmp.children.push(x);
                                                            });
                                                        } else {
                                                            got.parent = tmp;
                                                            tmp.children.push(got);
                                                        }
                                                    }
                                                    if (localTarget.lookup) got.lookup = true;
                                                    printable && console.log(new Array(recursion + 1).join("\u2502  ") + "\u2514\u2500 " + got.type + " " + JSON.stringify(got.text));
                                                    if (!localTarget.lookup && !got.lookup) {
                                                        tmp.text = tmp.text + got.text;
                                                        tmp.end = tmp.text.length;
                                                        tmpTxt = tmpTxt.substr(got.text.length);
                                                        position += got.text.length;
                                                    }
                                                    tmp.rest = tmpTxt;
                                                };
                                                var localTarget = parseRuleName(phases[i]);
                                                allOptional = allOptional && localTarget.isOptional;
                                                var got = void 0;
                                                var foundAtLeastOne = false;
                                                do {
                                                    var _ret = _loop();
                                                    if (_type_of(_ret) === "object") return {
                                                        v: _ret.v
                                                    };
                                                    if (_ret === "break") break;
                                                }while (got && localTarget.allowRepetition && tmpTxt.length && !got.lookup);
                                            } else {
                                                var got1 = readToken(tmpTxt, phases[i]);
                                                if (!got1) {
                                                    return {
                                                        v: void void 0
                                                    };
                                                }
                                                printable && console.log(new Array(recursion + 1).join("\u2502  ") + "\u2514> " + JSON.stringify(got1.text) + phases[i].source);
                                                foundSomething = true;
                                                got1.start += position;
                                                got1.end += position;
                                                tmp.text = tmp.text + got1.text;
                                                tmp.end = tmp.text.length;
                                                tmpTxt = tmpTxt.substr(got1.text.length);
                                                position += got1.text.length;
                                                tmp.rest = tmpTxt;
                                            }
                                        };
                                        if (out) return;
                                        var pinned = null;
                                        var tmp = {
                                            type: type.name,
                                            text: "",
                                            children: [],
                                            end: 0,
                                            errors: [],
                                            fullText: "",
                                            parent: null,
                                            start: 0,
                                            rest: txt
                                        };
                                        if (targetLex.fragment) tmp.fragment = true;
                                        var tmpTxt = txt;
                                        var position = 0;
                                        var allOptional = phases.length > 0;
                                        var foundSomething = false;
                                        for(var i = 0; i < phases.length; i++){
                                            var _ret = _loop(i);
                                            if (_type_of(_ret) === "object") return _ret.v;
                                        }
                                        if (foundSomething) {
                                            out = tmp;
                                            printable && console.log(new Array(recursion).join("\u2502  ") + "\u251C<\u2500\u2534< PUSHING " + out.type + " " + JSON.stringify(out.text));
                                        }
                                    });
                                }
                                if (out && targetLex.simplifyWhenOneChildren && out.children.length == 1) {
                                    out = out.children[0];
                                }
                            }
                            if (!out) {
                                printable && console.log(target + " NOT RESOLVED FROM " + txt);
                            }
                            return out;
                        }
                    },
                    {
                        key: "parseRecovery",
                        value: function parseRecovery(recoverableToken, tmpTxt, recursion) {
                            if (recoverableToken.recover && tmpTxt.length) {
                                var printable = this.debug;
                                printable && console.log(new Array(recursion + 1).join("\u2502  ") + "Trying to recover until token " + recoverableToken.recover + " from " + JSON.stringify(tmpTxt.split("\n")[0] + tmpTxt.split("\n")[1]));
                                var tmp = {
                                    type: "SyntaxError",
                                    text: "",
                                    children: [],
                                    end: 0,
                                    errors: [],
                                    fullText: "",
                                    parent: null,
                                    start: 0,
                                    rest: ""
                                };
                                var got;
                                do {
                                    got = this.parse(tmpTxt, recoverableToken.recover, recursion + 1);
                                    if (got) {
                                        new TokenError_1.TokenError('Unexpected input: "' + tmp.text + '" Expecting: '.concat(recoverableToken.name), tmp);
                                        break;
                                    } else {
                                        tmp.text = tmp.text + tmpTxt[0];
                                        tmp.end = tmp.text.length;
                                        tmpTxt = tmpTxt.substr(1);
                                    }
                                }while (!got && tmpTxt.length > 0);
                                if (tmp.text.length > 0 && got) {
                                    printable && console.log(new Array(recursion + 1).join("\u2502  ") + "Recovered text: " + JSON.stringify(tmp.text));
                                    return tmp;
                                }
                            }
                            return null;
                        }
                    }
                ]);
                return Parser2;
            }();
            exports.Parser = Parser2;
            exports.default = Parser2;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/SemanticHelpers.js
    var require_SemanticHelpers = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/SemanticHelpers.js": function(exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.findChildrenByType = void 0;
            function findChildrenByType(token, type) {
                return token.children ? token.children.filter(function(x) {
                    return x.type == type;
                }) : [];
            }
            exports.findChildrenByType = findChildrenByType;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Grammars/BNF.js
    var require_BNF = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Grammars/BNF.js": function(exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var SemanticHelpers_1 = require_SemanticHelpers();
            var Parser_1 = require_Parser();
            var BNF;
            (function(BNF2) {
                BNF2.RULES = [
                    {
                        name: "syntax",
                        bnf: [
                            [
                                "RULE_EOL*",
                                "rule+"
                            ]
                        ]
                    },
                    {
                        name: "rule",
                        bnf: [
                            [
                                '" "*',
                                '"<"',
                                "rule-name",
                                '">"',
                                '" "*',
                                '"::="',
                                "firstExpression",
                                "otherExpression*",
                                '" "*',
                                "RULE_EOL+",
                                '" "*'
                            ]
                        ]
                    },
                    {
                        name: "firstExpression",
                        bnf: [
                            [
                                '" "*',
                                "list"
                            ]
                        ]
                    },
                    {
                        name: "otherExpression",
                        bnf: [
                            [
                                '" "*',
                                '"|"',
                                '" "*',
                                "list"
                            ]
                        ]
                    },
                    {
                        name: "RULE_EOL",
                        bnf: [
                            [
                                '"\\r"'
                            ],
                            [
                                '"\\n"'
                            ]
                        ]
                    },
                    {
                        name: "list",
                        bnf: [
                            [
                                "term",
                                '" "*',
                                "list"
                            ],
                            [
                                "term"
                            ]
                        ]
                    },
                    {
                        name: "term",
                        bnf: [
                            [
                                "literal"
                            ],
                            [
                                '"<"',
                                "rule-name",
                                '">"'
                            ]
                        ]
                    },
                    {
                        name: "literal",
                        bnf: [
                            [
                                "'\"'",
                                "RULE_CHARACTER1*",
                                "'\"'"
                            ],
                            [
                                '"\'"',
                                "RULE_CHARACTER2*",
                                '"\'"'
                            ]
                        ]
                    },
                    {
                        name: "RULE_CHARACTER",
                        bnf: [
                            [
                                '" "'
                            ],
                            [
                                "RULE_LETTER"
                            ],
                            [
                                "RULE_DIGIT"
                            ],
                            [
                                "RULE_SYMBOL"
                            ]
                        ]
                    },
                    {
                        name: "RULE_LETTER",
                        bnf: [
                            [
                                '"A"'
                            ],
                            [
                                '"B"'
                            ],
                            [
                                '"C"'
                            ],
                            [
                                '"D"'
                            ],
                            [
                                '"E"'
                            ],
                            [
                                '"F"'
                            ],
                            [
                                '"G"'
                            ],
                            [
                                '"H"'
                            ],
                            [
                                '"I"'
                            ],
                            [
                                '"J"'
                            ],
                            [
                                '"K"'
                            ],
                            [
                                '"L"'
                            ],
                            [
                                '"M"'
                            ],
                            [
                                '"N"'
                            ],
                            [
                                '"O"'
                            ],
                            [
                                '"P"'
                            ],
                            [
                                '"Q"'
                            ],
                            [
                                '"R"'
                            ],
                            [
                                '"S"'
                            ],
                            [
                                '"T"'
                            ],
                            [
                                '"U"'
                            ],
                            [
                                '"V"'
                            ],
                            [
                                '"W"'
                            ],
                            [
                                '"X"'
                            ],
                            [
                                '"Y"'
                            ],
                            [
                                '"Z"'
                            ],
                            [
                                '"a"'
                            ],
                            [
                                '"b"'
                            ],
                            [
                                '"c"'
                            ],
                            [
                                '"d"'
                            ],
                            [
                                '"e"'
                            ],
                            [
                                '"f"'
                            ],
                            [
                                '"g"'
                            ],
                            [
                                '"h"'
                            ],
                            [
                                '"i"'
                            ],
                            [
                                '"j"'
                            ],
                            [
                                '"k"'
                            ],
                            [
                                '"l"'
                            ],
                            [
                                '"m"'
                            ],
                            [
                                '"n"'
                            ],
                            [
                                '"o"'
                            ],
                            [
                                '"p"'
                            ],
                            [
                                '"q"'
                            ],
                            [
                                '"r"'
                            ],
                            [
                                '"s"'
                            ],
                            [
                                '"t"'
                            ],
                            [
                                '"u"'
                            ],
                            [
                                '"v"'
                            ],
                            [
                                '"w"'
                            ],
                            [
                                '"x"'
                            ],
                            [
                                '"y"'
                            ],
                            [
                                '"z"'
                            ]
                        ]
                    },
                    {
                        name: "RULE_DIGIT",
                        bnf: [
                            [
                                '"0"'
                            ],
                            [
                                '"1"'
                            ],
                            [
                                '"2"'
                            ],
                            [
                                '"3"'
                            ],
                            [
                                '"4"'
                            ],
                            [
                                '"5"'
                            ],
                            [
                                '"6"'
                            ],
                            [
                                '"7"'
                            ],
                            [
                                '"8"'
                            ],
                            [
                                '"9"'
                            ]
                        ]
                    },
                    {
                        name: "RULE_SYMBOL",
                        bnf: [
                            [
                                '"-"'
                            ],
                            [
                                '"_"'
                            ],
                            [
                                '"!"'
                            ],
                            [
                                '"#"'
                            ],
                            [
                                '"$"'
                            ],
                            [
                                '"%"'
                            ],
                            [
                                '"&"'
                            ],
                            [
                                '"("'
                            ],
                            [
                                '")"'
                            ],
                            [
                                '"*"'
                            ],
                            [
                                '"+"'
                            ],
                            [
                                '","'
                            ],
                            [
                                '"-"'
                            ],
                            [
                                '"."'
                            ],
                            [
                                '"/"'
                            ],
                            [
                                '":"'
                            ],
                            [
                                '";"'
                            ],
                            [
                                '"<"'
                            ],
                            [
                                '"="'
                            ],
                            [
                                '">"'
                            ],
                            [
                                '"?"'
                            ],
                            [
                                '"@"'
                            ],
                            [
                                '"["'
                            ],
                            [
                                '"\\"'
                            ],
                            [
                                '"]"'
                            ],
                            [
                                '"^"'
                            ],
                            [
                                '"_"'
                            ],
                            [
                                '"`"'
                            ],
                            [
                                '"{"'
                            ],
                            [
                                '"|"'
                            ],
                            [
                                '"}"'
                            ],
                            [
                                '"~"'
                            ]
                        ]
                    },
                    {
                        name: "RULE_CHARACTER1",
                        bnf: [
                            [
                                "RULE_CHARACTER"
                            ],
                            [
                                '"\'"'
                            ]
                        ]
                    },
                    {
                        name: "RULE_CHARACTER2",
                        bnf: [
                            [
                                "RULE_CHARACTER"
                            ],
                            [
                                "'\"'"
                            ]
                        ]
                    },
                    {
                        name: "rule-name",
                        bnf: [
                            [
                                "RULE_LETTER",
                                "RULE_CHAR*"
                            ]
                        ]
                    },
                    {
                        name: "RULE_CHAR",
                        bnf: [
                            [
                                "RULE_LETTER"
                            ],
                            [
                                "RULE_DIGIT"
                            ],
                            [
                                '"_"'
                            ],
                            [
                                '"-"'
                            ]
                        ]
                    }
                ];
                BNF2.defaultParser = new Parser_1.Parser(BNF2.RULES, {
                    debug: false
                });
                function getAllTerms(expr) {
                    var terms = SemanticHelpers_1.findChildrenByType(expr, "term").map(function(term) {
                        return SemanticHelpers_1.findChildrenByType(term, "literal").concat(SemanticHelpers_1.findChildrenByType(term, "rule-name"))[0].text;
                    });
                    SemanticHelpers_1.findChildrenByType(expr, "list").forEach(function(expr2) {
                        terms = terms.concat(getAllTerms(expr2));
                    });
                    return terms;
                }
                function getRules(source) {
                    var parser2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : BNF2.defaultParser;
                    var ast = parser2.getAST(source);
                    if (!ast) throw new Error("Could not parse " + source);
                    if (ast.errors && ast.errors.length) {
                        throw ast.errors[0];
                    }
                    var rules = SemanticHelpers_1.findChildrenByType(ast, "rule");
                    var ret = rules.map(function(rule) {
                        var name = SemanticHelpers_1.findChildrenByType(rule, "rule-name")[0].text;
                        var expressions = SemanticHelpers_1.findChildrenByType(rule, "firstExpression").concat(SemanticHelpers_1.findChildrenByType(rule, "otherExpression"));
                        var bnf = [];
                        expressions.forEach(function(expr) {
                            bnf.push(getAllTerms(expr));
                        });
                        return {
                            name: name,
                            bnf: bnf
                        };
                    });
                    if (!ret.some(function(x) {
                        return x.name == "EOL";
                    })) {
                        ret.push({
                            name: "EOL",
                            bnf: [
                                [
                                    '"\\r\\n"',
                                    '"\\r"',
                                    '"\\n"'
                                ]
                            ]
                        });
                    }
                    return ret;
                }
                BNF2.getRules = getRules;
                function Transform(source) {
                    var subParser = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : BNF2.defaultParser;
                    return getRules(source.join(""), subParser);
                }
                BNF2.Transform = Transform;
                var Parser2 = /*#__PURE__*/ function(_Parser_1_Parser) {
                    _inherits(Parser2, _Parser_1_Parser);
                    var _super = _create_super(Parser2);
                    function Parser2(source, options) {
                        _class_call_check(this, Parser2);
                        var _this;
                        var subParser = options && options.debugRulesParser === true ? new Parser_1.Parser(BNF2.RULES, {
                            debug: true
                        }) : BNF2.defaultParser;
                        _this = _super.call(this, getRules(source, subParser), options);
                        _this.source = source;
                        return _this;
                    }
                    _create_class(Parser2, [
                        {
                            key: "emitSource",
                            value: function emitSource() {
                                return this.source;
                            }
                        }
                    ]);
                    return Parser2;
                }(Parser_1.Parser);
                BNF2.Parser = Parser2;
            })(BNF || (BNF = {}));
            exports.default = BNF;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Grammars/W3CEBNF.js
    var require_W3CEBNF = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Grammars/W3CEBNF.js": function(exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var Parser_1 = require_Parser();
            var BNF;
            (function(BNF2) {
                BNF2.RULES = [
                    {
                        name: "Grammar",
                        bnf: [
                            [
                                "RULE_S*",
                                "%Atomic*",
                                "EOF"
                            ]
                        ]
                    },
                    {
                        name: "%Atomic",
                        bnf: [
                            [
                                "Production",
                                "RULE_S*"
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "Production",
                        bnf: [
                            [
                                "NCName",
                                "RULE_S*",
                                '"::="',
                                "RULE_WHITESPACE*",
                                "Choice",
                                "RULE_WHITESPACE*",
                                "RULE_EOL+",
                                "RULE_S*"
                            ]
                        ]
                    },
                    {
                        name: "NCName",
                        bnf: [
                            [
                                /[a-zA-Z][a-zA-Z_0-9]*/
                            ]
                        ]
                    },
                    {
                        name: "Choice",
                        bnf: [
                            [
                                "SequenceOrDifference",
                                "%_Choice_1*"
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "%_Choice_1",
                        bnf: [
                            [
                                "RULE_WHITESPACE*",
                                '"|"',
                                "RULE_WHITESPACE*",
                                "SequenceOrDifference"
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "SequenceOrDifference",
                        bnf: [
                            [
                                "Item",
                                "RULE_WHITESPACE*",
                                "%_Item_1?"
                            ]
                        ]
                    },
                    {
                        name: "%_Item_1",
                        bnf: [
                            [
                                "Minus",
                                "Item"
                            ],
                            [
                                "Item*"
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "Minus",
                        bnf: [
                            [
                                '"-"'
                            ]
                        ]
                    },
                    {
                        name: "Item",
                        bnf: [
                            [
                                "RULE_WHITESPACE*",
                                "%Primary",
                                "PrimaryDecoration?"
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "PrimaryDecoration",
                        bnf: [
                            [
                                '"?"'
                            ],
                            [
                                '"*"'
                            ],
                            [
                                '"+"'
                            ]
                        ]
                    },
                    {
                        name: "DecorationName",
                        bnf: [
                            [
                                '"ebnf://"',
                                /[^\x5D#]+/
                            ]
                        ]
                    },
                    {
                        name: "%Primary",
                        bnf: [
                            [
                                "NCName"
                            ],
                            [
                                "StringLiteral"
                            ],
                            [
                                "CharCode"
                            ],
                            [
                                "CharClass"
                            ],
                            [
                                "SubItem"
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "SubItem",
                        bnf: [
                            [
                                '"("',
                                "RULE_WHITESPACE*",
                                "Choice",
                                "RULE_WHITESPACE*",
                                '")"'
                            ]
                        ]
                    },
                    {
                        name: "StringLiteral",
                        bnf: [
                            [
                                "'\"'",
                                /[^"]*/,
                                "'\"'"
                            ],
                            [
                                '"\'"',
                                /[^']*/,
                                '"\'"'
                            ]
                        ],
                        pinned: 1
                    },
                    {
                        name: "CharCode",
                        bnf: [
                            [
                                '"#x"',
                                /[0-9a-zA-Z]+/
                            ]
                        ]
                    },
                    {
                        name: "CharClass",
                        bnf: [
                            [
                                "'['",
                                "'^'?",
                                "%RULE_CharClass_1+",
                                '"]"'
                            ]
                        ]
                    },
                    {
                        name: "%RULE_CharClass_1",
                        bnf: [
                            [
                                "CharCodeRange"
                            ],
                            [
                                "CharRange"
                            ],
                            [
                                "CharCode"
                            ],
                            [
                                "RULE_Char"
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "RULE_Char",
                        bnf: [
                            [
                                /\x09/
                            ],
                            [
                                /\x0A/
                            ],
                            [
                                /\x0D/
                            ],
                            [
                                /[\x20-\x5c]/
                            ],
                            [
                                /[\x5e-\uD7FF]/
                            ],
                            [
                                /[\uE000-\uFFFD]/
                            ]
                        ]
                    },
                    {
                        name: "CharRange",
                        bnf: [
                            [
                                "RULE_Char",
                                '"-"',
                                "RULE_Char"
                            ]
                        ]
                    },
                    {
                        name: "CharCodeRange",
                        bnf: [
                            [
                                "CharCode",
                                '"-"',
                                "CharCode"
                            ]
                        ]
                    },
                    {
                        name: "RULE_WHITESPACE",
                        bnf: [
                            [
                                "%RULE_WHITESPACE_CHAR*"
                            ],
                            [
                                "Comment",
                                "RULE_WHITESPACE*"
                            ]
                        ]
                    },
                    {
                        name: "RULE_S",
                        bnf: [
                            [
                                "RULE_WHITESPACE",
                                "RULE_S*"
                            ],
                            [
                                "RULE_EOL",
                                "RULE_S*"
                            ]
                        ]
                    },
                    {
                        name: "%RULE_WHITESPACE_CHAR",
                        bnf: [
                            [
                                /\x09/
                            ],
                            [
                                /\x20/
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "Comment",
                        bnf: [
                            [
                                '"/*"',
                                "%RULE_Comment_Body*",
                                '"*/"'
                            ]
                        ]
                    },
                    {
                        name: "%RULE_Comment_Body",
                        bnf: [
                            [
                                '!"*/"',
                                /[^*]/
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "RULE_EOL",
                        bnf: [
                            [
                                /\x0D/,
                                /\x0A/
                            ],
                            [
                                /\x0A/
                            ],
                            [
                                /\x0D/
                            ]
                        ]
                    },
                    {
                        name: "Link",
                        bnf: [
                            [
                                "'['",
                                "Url",
                                "']'"
                            ]
                        ]
                    },
                    {
                        name: "Url",
                        bnf: [
                            [
                                /[^\x5D:/?#]/,
                                '"://"',
                                /[^\x5D#]+/,
                                "%Url1?"
                            ]
                        ]
                    },
                    {
                        name: "%Url1",
                        bnf: [
                            [
                                '"#"',
                                "NCName"
                            ]
                        ],
                        fragment: true
                    }
                ];
                BNF2.defaultParser = new Parser_1.Parser(BNF2.RULES, {
                    debug: false
                });
                var preDecorationRE = /^(!|&)/;
                var decorationRE = /(\?|\+|\*)$/;
                var subExpressionRE = /^%/;
                function getBNFRule(name, parser2) {
                    if (typeof name == "string") {
                        if (preDecorationRE.test(name)) return "";
                        var subexpression = subExpressionRE.test(name);
                        if (subexpression) {
                            var decoration = decorationRE.exec(name);
                            var decorationText = decoration ? decoration[0] + " " : "";
                            var lonely = isLonelyRule(name, parser2);
                            if (lonely) return getBNFBody(name, parser2) + decorationText;
                            return "(" + getBNFBody(name, parser2) + ")" + decorationText;
                        }
                        return name;
                    } else {
                        return name.source.replace(/\\(?:x|u)([a-zA-Z0-9]+)/g, "#x$1").replace(/\[\\(?:x|u)([a-zA-Z0-9]+)-\\(?:x|u)([a-zA-Z0-9]+)\]/g, "[#x$1-#x$2]");
                    }
                }
                function isLonelyRule(name, parser2) {
                    var rule = Parser_1.findRuleByName(name, parser2);
                    return rule && rule.bnf.length == 1 && rule.bnf[0].length == 1 && (_instanceof(rule.bnf[0][0], RegExp) || rule.bnf[0][0][0] == '"' || rule.bnf[0][0][0] == "'");
                }
                function getBNFChoice(rules, parser2) {
                    return rules.map(function(x) {
                        return getBNFRule(x, parser2);
                    }).join(" ");
                }
                function getBNFBody(name, parser2) {
                    var rule = Parser_1.findRuleByName(name, parser2);
                    if (rule) return rule.bnf.map(function(x) {
                        return getBNFChoice(x, parser2);
                    }).join(" | ");
                    return "RULE_NOT_FOUND {" + name + "}";
                }
                function emit(parser2) {
                    var acumulator = [];
                    parser2.grammarRules.forEach(function(l) {
                        if (!/^%/.test(l.name)) {
                            var recover = l.recover ? " /* { recoverUntil=" + l.recover + " } */" : "";
                            acumulator.push(l.name + " ::= " + getBNFBody(l.name, parser2) + recover);
                        }
                    });
                    return acumulator.join("\n");
                }
                BNF2.emit = emit;
                var subitems = 0;
                function restar(total, resta) {
                    console.log("reberia restar " + resta + " a " + total);
                    throw new Error("Difference not supported yet");
                }
                function convertRegex(txt) {
                    return new RegExp(txt.replace(/#x([a-zA-Z0-9]{4})/g, "\\u$1").replace(/#x([a-zA-Z0-9]{3})/g, "\\u0$1").replace(/#x([a-zA-Z0-9]{2})/g, "\\x$1").replace(/#x([a-zA-Z0-9]{1})/g, "\\x0$1"));
                }
                function getSubItems(tmpRules, seq, parentName) {
                    var anterior = null;
                    var bnfSeq = [];
                    seq.children.forEach(function(x, i) {
                        if (x.type == "Minus") {
                            restar(anterior, x);
                        } else {}
                        var decoration = seq.children[i + 1];
                        decoration = decoration && decoration.type == "PrimaryDecoration" && decoration.text || "";
                        var preDecoration = "";
                        switch(x.type){
                            case "SubItem":
                                var name = "%" + (parentName + subitems++);
                                createRule(tmpRules, x, name);
                                bnfSeq.push(preDecoration + name + decoration);
                                break;
                            case "NCName":
                            case "StringLiteral":
                                bnfSeq.push(preDecoration + x.text + decoration);
                                break;
                            case "CharCode":
                            case "CharClass":
                                if (decoration || preDecoration) {
                                    var newRule = {
                                        name: "%" + (parentName + subitems++),
                                        bnf: [
                                            [
                                                convertRegex(x.text)
                                            ]
                                        ]
                                    };
                                    tmpRules.push(newRule);
                                    bnfSeq.push(preDecoration + newRule.name + decoration);
                                } else {
                                    bnfSeq.push(convertRegex(x.text));
                                }
                                break;
                            case "PrimaryDecoration":
                                break;
                            default:
                                throw new Error(" HOW SHOULD I PARSE THIS? " + x.type + " -> " + JSON.stringify(x.text));
                        }
                        anterior = x;
                    });
                    return bnfSeq;
                }
                function createRule(tmpRules, token, name) {
                    var bnf = token.children.filter(function(x) {
                        return x.type == "SequenceOrDifference";
                    }).map(function(s) {
                        return getSubItems(tmpRules, s, name);
                    });
                    var rule = {
                        name: name,
                        bnf: bnf
                    };
                    var recover = null;
                    bnf.forEach(function(x) {
                        recover = recover || x["recover"];
                        delete x["recover"];
                    });
                    if (name.indexOf("%") == 0) rule.fragment = true;
                    if (recover) rule.recover = recover;
                    tmpRules.push(rule);
                }
                function getRules(source) {
                    var parser2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : BNF2.defaultParser;
                    var ast = parser2.getAST(source);
                    if (!ast) throw new Error("Could not parse " + source);
                    if (ast.errors && ast.errors.length) {
                        throw ast.errors[0];
                    }
                    var tmpRules = [];
                    ast.children.filter(function(x) {
                        return x.type == "Production";
                    }).map(function(x) {
                        var name = x.children.filter(function(x2) {
                            return x2.type == "NCName";
                        })[0].text;
                        createRule(tmpRules, x, name);
                    });
                    return tmpRules;
                }
                BNF2.getRules = getRules;
                function Transform(source) {
                    var subParser = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : BNF2.defaultParser;
                    return getRules(source.join(""), subParser);
                }
                BNF2.Transform = Transform;
                var Parser2 = /*#__PURE__*/ function(_Parser_1_Parser) {
                    _inherits(Parser2, _Parser_1_Parser);
                    var _super = _create_super(Parser2);
                    function Parser2(source, options) {
                        _class_call_check(this, Parser2);
                        var subParser = options && options.debugRulesParser === true ? new Parser_1.Parser(BNF2.RULES, {
                            debug: true
                        }) : BNF2.defaultParser;
                        return _super.call(this, getRules(source, subParser), options);
                    }
                    _create_class(Parser2, [
                        {
                            key: "emitSource",
                            value: function emitSource() {
                                return emit(this);
                            }
                        }
                    ]);
                    return Parser2;
                }(Parser_1.Parser);
                BNF2.Parser = Parser2;
            })(BNF || (BNF = {}));
            exports.default = BNF;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Grammars/Custom.js
    var require_Custom = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Grammars/Custom.js": function(exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var TokenError_1 = require_TokenError();
            var Parser_1 = require_Parser();
            var BNF;
            (function(BNF2) {
                BNF2.RULES = [
                    {
                        name: "Grammar",
                        bnf: [
                            [
                                "RULE_S*",
                                "Attributes?",
                                "RULE_S*",
                                "%Atomic*",
                                "EOF"
                            ]
                        ]
                    },
                    {
                        name: "%Atomic",
                        bnf: [
                            [
                                "Production",
                                "RULE_S*"
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "Production",
                        bnf: [
                            [
                                "NCName",
                                "RULE_S*",
                                '"::="',
                                "RULE_WHITESPACE*",
                                "%Choice",
                                "RULE_WHITESPACE*",
                                "Attributes?",
                                "RULE_EOL+",
                                "RULE_S*"
                            ]
                        ]
                    },
                    {
                        name: "NCName",
                        bnf: [
                            [
                                /[a-zA-Z][a-zA-Z_0-9]*/
                            ]
                        ]
                    },
                    {
                        name: "Attributes",
                        bnf: [
                            [
                                '"{"',
                                "Attribute",
                                "%Attributes*",
                                "RULE_S*",
                                '"}"'
                            ]
                        ]
                    },
                    {
                        name: "%Attributes",
                        bnf: [
                            [
                                "RULE_S*",
                                '","',
                                "Attribute"
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "Attribute",
                        bnf: [
                            [
                                "RULE_S*",
                                "NCName",
                                "RULE_WHITESPACE*",
                                '"="',
                                "RULE_WHITESPACE*",
                                "AttributeValue"
                            ]
                        ]
                    },
                    {
                        name: "AttributeValue",
                        bnf: [
                            [
                                "NCName"
                            ],
                            [
                                /[1-9][0-9]*/
                            ]
                        ]
                    },
                    {
                        name: "%Choice",
                        bnf: [
                            [
                                "SequenceOrDifference",
                                "%_Choice_1*"
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "%_Choice_1",
                        bnf: [
                            [
                                "RULE_S*",
                                '"|"',
                                "RULE_S*",
                                "SequenceOrDifference"
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "SequenceOrDifference",
                        bnf: [
                            [
                                "%Item",
                                "RULE_WHITESPACE*",
                                "%_Item_1?"
                            ]
                        ]
                    },
                    {
                        name: "%_Item_1",
                        bnf: [
                            [
                                "Minus",
                                "%Item"
                            ],
                            [
                                "%Item*"
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "Minus",
                        bnf: [
                            [
                                '"-"'
                            ]
                        ]
                    },
                    {
                        name: "%Item",
                        bnf: [
                            [
                                "RULE_WHITESPACE*",
                                "PrimaryPreDecoration?",
                                "%Primary",
                                "PrimaryDecoration?"
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "PrimaryDecoration",
                        bnf: [
                            [
                                '"?"'
                            ],
                            [
                                '"*"'
                            ],
                            [
                                '"+"'
                            ]
                        ]
                    },
                    {
                        name: "PrimaryPreDecoration",
                        bnf: [
                            [
                                '"&"'
                            ],
                            [
                                '"!"'
                            ],
                            [
                                '"~"'
                            ]
                        ]
                    },
                    {
                        name: "%Primary",
                        bnf: [
                            [
                                "NCName"
                            ],
                            [
                                "StringLiteral"
                            ],
                            [
                                "CharCode"
                            ],
                            [
                                "CharClass"
                            ],
                            [
                                "SubItem"
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "SubItem",
                        bnf: [
                            [
                                '"("',
                                "RULE_S*",
                                "%Choice",
                                "RULE_S*",
                                '")"'
                            ]
                        ]
                    },
                    {
                        name: "StringLiteral",
                        bnf: [
                            [
                                "'\"'",
                                /[^"]*/,
                                "'\"'"
                            ],
                            [
                                '"\'"',
                                /[^']*/,
                                '"\'"'
                            ]
                        ]
                    },
                    {
                        name: "CharCode",
                        bnf: [
                            [
                                '"#x"',
                                /[0-9a-zA-Z]+/
                            ]
                        ]
                    },
                    {
                        name: "CharClass",
                        bnf: [
                            [
                                "'['",
                                "'^'?",
                                "%RULE_CharClass_1+",
                                '"]"'
                            ]
                        ]
                    },
                    {
                        name: "%RULE_CharClass_1",
                        bnf: [
                            [
                                "CharCodeRange"
                            ],
                            [
                                "CharRange"
                            ],
                            [
                                "CharCode"
                            ],
                            [
                                "RULE_Char"
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "RULE_Char",
                        bnf: [
                            [
                                /\x09/
                            ],
                            [
                                /\x0A/
                            ],
                            [
                                /\x0D/
                            ],
                            [
                                /[\x20-\x5c]/
                            ],
                            [
                                /[\x5e-\uD7FF]/
                            ],
                            [
                                /[\uE000-\uFFFD]/
                            ]
                        ]
                    },
                    {
                        name: "CharRange",
                        bnf: [
                            [
                                "RULE_Char",
                                '"-"',
                                "RULE_Char"
                            ]
                        ]
                    },
                    {
                        name: "CharCodeRange",
                        bnf: [
                            [
                                "CharCode",
                                '"-"',
                                "CharCode"
                            ]
                        ]
                    },
                    {
                        name: "RULE_WHITESPACE",
                        bnf: [
                            [
                                "%RULE_WHITESPACE_CHAR*"
                            ],
                            [
                                "Comment",
                                "RULE_WHITESPACE*"
                            ]
                        ]
                    },
                    {
                        name: "RULE_S",
                        bnf: [
                            [
                                "RULE_WHITESPACE",
                                "RULE_S*"
                            ],
                            [
                                "RULE_EOL",
                                "RULE_S*"
                            ]
                        ]
                    },
                    {
                        name: "%RULE_WHITESPACE_CHAR",
                        bnf: [
                            [
                                /\x09/
                            ],
                            [
                                /\x20/
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "Comment",
                        bnf: [
                            [
                                '"/*"',
                                "%RULE_Comment_Body*",
                                '"*/"'
                            ]
                        ]
                    },
                    {
                        name: "%RULE_Comment_Body",
                        bnf: [
                            [
                                /[^*]/
                            ],
                            [
                                '"*"+',
                                /[^/]*/
                            ]
                        ],
                        fragment: true
                    },
                    {
                        name: "RULE_EOL",
                        bnf: [
                            [
                                /\x0D/,
                                /\x0A/
                            ],
                            [
                                /\x0A/
                            ],
                            [
                                /\x0D/
                            ]
                        ]
                    },
                    {
                        name: "Link",
                        bnf: [
                            [
                                "'['",
                                "Url",
                                "']'"
                            ]
                        ]
                    },
                    {
                        name: "Url",
                        bnf: [
                            [
                                /[^\x5D:/?#]/,
                                '"://"',
                                /[^\x5D#]+/,
                                "%Url1?"
                            ]
                        ]
                    },
                    {
                        name: "%Url1",
                        bnf: [
                            [
                                '"#"',
                                "NCName"
                            ]
                        ],
                        fragment: true
                    }
                ];
                BNF2.defaultParser = new Parser_1.Parser(BNF2.RULES, {
                    debug: false
                });
                var preDecorationRE = /^(!|&)/;
                var decorationRE = /(\?|\+|\*)$/;
                var subExpressionRE = /^%/;
                function getBNFRule(name, parser2) {
                    if (typeof name == "string") {
                        var decoration = decorationRE.exec(name);
                        var preDecoration = preDecorationRE.exec(name);
                        var preDecorationText = preDecoration ? preDecoration[0] : "";
                        var decorationText = decoration ? decoration[0] + " " : "";
                        var subexpression = subExpressionRE.test(name);
                        if (subexpression) {
                            var lonely = isLonelyRule(name, parser2);
                            if (lonely) return preDecorationText + getBNFBody(name, parser2) + decorationText;
                            return preDecorationText + "(" + getBNFBody(name, parser2) + ")" + decorationText;
                        }
                        return name.replace(preDecorationRE, preDecorationText);
                    } else {
                        return name.source.replace(/\\(?:x|u)([a-zA-Z0-9]+)/g, "#x$1").replace(/\[\\(?:x|u)([a-zA-Z0-9]+)-\\(?:x|u)([a-zA-Z0-9]+)\]/g, "[#x$1-#x$2]");
                    }
                }
                function isLonelyRule(name, parser2) {
                    var rule = Parser_1.findRuleByName(name, parser2);
                    return rule && rule.bnf.length == 1 && rule.bnf[0].length == 1 && (_instanceof(rule.bnf[0][0], RegExp) || rule.bnf[0][0][0] == '"' || rule.bnf[0][0][0] == "'");
                }
                function getBNFChoice(rules, parser2) {
                    return rules.map(function(x) {
                        return getBNFRule(x, parser2);
                    }).join(" ");
                }
                function getBNFBody(name, parser2) {
                    var rule = Parser_1.findRuleByName(name, parser2);
                    if (rule) return rule.bnf.map(function(x) {
                        return getBNFChoice(x, parser2);
                    }).join(" | ");
                    return "RULE_NOT_FOUND {" + name + "}";
                }
                function emit(parser2) {
                    var acumulator = [];
                    parser2.grammarRules.forEach(function(l) {
                        if (!/^%/.test(l.name)) {
                            var recover = l.recover ? " { recoverUntil=" + l.recover + " }" : "";
                            acumulator.push(l.name + " ::= " + getBNFBody(l.name, parser2) + recover);
                        }
                    });
                    return acumulator.join("\n");
                }
                BNF2.emit = emit;
                var subitems = 0;
                function restar(total, resta) {
                    console.log("reberia restar " + resta + " a " + total);
                    throw new Error("Difference not supported yet");
                }
                function convertRegex(txt) {
                    return new RegExp(txt.replace(/#x([a-zA-Z0-9]{4})/g, "\\u$1").replace(/#x([a-zA-Z0-9]{3})/g, "\\u0$1").replace(/#x([a-zA-Z0-9]{2})/g, "\\x$1").replace(/#x([a-zA-Z0-9]{1})/g, "\\x0$1"));
                }
                function getSubItems(tmpRules, seq, parentName, parentAttributes) {
                    var anterior = null;
                    var bnfSeq = [];
                    seq.children.forEach(function(x, i) {
                        if (x.type == "Minus") {
                            restar(anterior, x);
                        } else {}
                        var decoration = seq.children[i + 1];
                        decoration = decoration && decoration.type == "PrimaryDecoration" && decoration.text || "";
                        var preDecoration = "";
                        if (anterior && anterior.type == "PrimaryPreDecoration") {
                            preDecoration = anterior.text;
                        }
                        var pinned = preDecoration == "~" ? 1 : void 0;
                        if (pinned) {
                            preDecoration = "";
                        }
                        switch(x.type){
                            case "SubItem":
                                var name = "%" + (parentName + subitems++);
                                createRule(tmpRules, x, name, parentAttributes);
                                bnfSeq.push(preDecoration + name + decoration);
                                break;
                            case "NCName":
                                bnfSeq.push(preDecoration + x.text + decoration);
                                break;
                            case "StringLiteral":
                                if (decoration || preDecoration || !/^['"/()a-zA-Z0-9&_.:=,+*\-\^\\]+$/.test(x.text)) {
                                    bnfSeq.push(preDecoration + x.text + decoration);
                                } else {
                                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    try {
                                        for(var _iterator = x.text.slice(1, -1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            var c = _step.value;
                                            if (parentAttributes && parentAttributes["ignoreCase"] == "true" && /[a-zA-Z]/.test(c)) {
                                                bnfSeq.push(new RegExp("[" + c.toUpperCase() + c.toLowerCase() + "]"));
                                            } else {
                                                bnfSeq.push(new RegExp(Parser_1.escapeRegExp(c)));
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
                                break;
                            case "CharCode":
                            case "CharClass":
                                if (decoration || preDecoration) {
                                    var newRule = {
                                        name: "%" + (parentName + subitems++),
                                        bnf: [
                                            [
                                                convertRegex(x.text)
                                            ]
                                        ],
                                        pinned: pinned
                                    };
                                    tmpRules.push(newRule);
                                    bnfSeq.push(preDecoration + newRule.name + decoration);
                                } else {
                                    bnfSeq.push(convertRegex(x.text));
                                }
                                break;
                            case "PrimaryPreDecoration":
                            case "PrimaryDecoration":
                                break;
                            default:
                                throw new Error(" HOW SHOULD I PARSE THIS? " + x.type + " -> " + JSON.stringify(x.text));
                        }
                        anterior = x;
                    });
                    return bnfSeq;
                }
                function createRule(tmpRules, token, name) {
                    var parentAttributes = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : void 0;
                    var attrNode = token.children.filter(function(x) {
                        return x.type == "Attributes";
                    })[0];
                    var attributes = {};
                    if (attrNode) {
                        attrNode.children.forEach(function(x) {
                            var name2 = x.children.filter(function(x2) {
                                return x2.type == "NCName";
                            })[0].text;
                            if (name2 in attributes) {
                                throw new TokenError_1.TokenError("Duplicated attribute " + name2, x);
                            } else {
                                attributes[name2] = x.children.filter(function(x2) {
                                    return x2.type == "AttributeValue";
                                })[0].text;
                            }
                        });
                    }
                    var bnf = token.children.filter(function(x) {
                        return x.type == "SequenceOrDifference";
                    }).map(function(s) {
                        return getSubItems(tmpRules, s, name, parentAttributes ? parentAttributes : attributes);
                    });
                    var rule = {
                        name: name,
                        bnf: bnf
                    };
                    if (name.indexOf("%") == 0) rule.fragment = true;
                    if (attributes["recoverUntil"]) {
                        rule.recover = attributes["recoverUntil"];
                        if (rule.bnf.length > 1) throw new TokenError_1.TokenError("only one-option productions are suitable for error recovering", token);
                    }
                    if ("pin" in attributes) {
                        var num = parseInt(attributes["pin"]);
                        if (!isNaN(num)) {
                            rule.pinned = num;
                        }
                        if (rule.bnf.length > 1) throw new TokenError_1.TokenError("only one-option productions are suitable for pinning", token);
                    }
                    if ("ws" in attributes) {
                        rule.implicitWs = attributes["ws"] != "explicit";
                    } else {
                        rule.implicitWs = null;
                    }
                    rule.fragment = rule.fragment || attributes["fragment"] == "true";
                    rule.simplifyWhenOneChildren = attributes["simplifyWhenOneChildren"] == "true";
                    tmpRules.push(rule);
                }
                function getRules(source) {
                    var parser2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : BNF2.defaultParser;
                    var ast = parser2.getAST(source);
                    if (!ast) throw new Error("Could not parse " + source);
                    if (ast.errors && ast.errors.length) {
                        throw ast.errors[0];
                    }
                    var implicitWs = null;
                    var attrNode = ast.children.filter(function(x) {
                        return x.type == "Attributes";
                    })[0];
                    var attributes = {};
                    if (attrNode) {
                        attrNode.children.forEach(function(x) {
                            var name = x.children.filter(function(x2) {
                                return x2.type == "NCName";
                            })[0].text;
                            if (name in attributes) {
                                throw new TokenError_1.TokenError("Duplicated attribute " + name, x);
                            } else {
                                attributes[name] = x.children.filter(function(x2) {
                                    return x2.type == "AttributeValue";
                                })[0].text;
                            }
                        });
                    }
                    implicitWs = attributes["ws"] == "implicit";
                    var tmpRules = [];
                    ast.children.filter(function(x) {
                        return x.type == "Production";
                    }).map(function(x) {
                        var name = x.children.filter(function(x2) {
                            return x2.type == "NCName";
                        })[0].text;
                        createRule(tmpRules, x, name);
                    });
                    tmpRules.forEach(function(rule) {
                        if (rule.implicitWs === null) rule.implicitWs = implicitWs;
                    });
                    return tmpRules;
                }
                BNF2.getRules = getRules;
                function Transform(source) {
                    var subParser = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : BNF2.defaultParser;
                    return getRules(source.join(""), subParser);
                }
                BNF2.Transform = Transform;
                var Parser2 = /*#__PURE__*/ function(_Parser_1_Parser) {
                    _inherits(Parser2, _Parser_1_Parser);
                    var _super = _create_super(Parser2);
                    function Parser2(source, options) {
                        _class_call_check(this, Parser2);
                        var subParser = options && options.debugRulesParser === true ? new Parser_1.Parser(BNF2.RULES, {
                            debug: true
                        }) : BNF2.defaultParser;
                        return _super.call(this, getRules(source, subParser), options);
                    }
                    _create_class(Parser2, [
                        {
                            key: "emitSource",
                            value: function emitSource() {
                                return emit(this);
                            }
                        }
                    ]);
                    return Parser2;
                }(Parser_1.Parser);
                BNF2.Parser = Parser2;
            })(BNF || (BNF = {}));
            exports.default = BNF;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Grammars/index.js
    var require_Grammars = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/Grammars/index.js": function(exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var BNF_1 = require_BNF();
            Object.defineProperty(exports, "BNF", {
                enumerable: true,
                get: function get() {
                    return BNF_1.default;
                }
            });
            var W3CEBNF_1 = require_W3CEBNF();
            Object.defineProperty(exports, "W3C", {
                enumerable: true,
                get: function get() {
                    return W3CEBNF_1.default;
                }
            });
            var Custom_1 = require_Custom();
            Object.defineProperty(exports, "Custom", {
                enumerable: true,
                get: function get() {
                    return Custom_1.default;
                }
            });
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/index.js
    var require_dist = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/ebnf@1.9.1/node_modules/ebnf/dist/index.js": function(exports) {
            "use strict";
            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var Parser_1 = require_Parser();
            Object.defineProperty(exports, "Parser", {
                enumerable: true,
                get: function get() {
                    return Parser_1.Parser;
                }
            });
            var TokenError_1 = require_TokenError();
            Object.defineProperty(exports, "TokenError", {
                enumerable: true,
                get: function get() {
                    return TokenError_1.TokenError;
                }
            });
            exports.Grammars = require_Grammars();
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
            exports.omit = omit4;
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
                return o != null && typeof o === "object";
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
            function getIn(obj, path2) {
                if (!Array.isArray(path2)) {
                    throwStr(IS_DEV ? "A path array should be provided when calling getIn()" : INVALID_ARGS);
                }
                if (obj == null) return void 0;
                var ptr = obj;
                for(var i = 0; i < path2.length; i++){
                    var key = path2[i];
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
            function setIn8(obj, path2, val) {
                if (!path2.length) return val;
                return doSetIn(obj, path2, val, 0);
            }
            function doSetIn(obj, path2, val, idx) {
                var newValue;
                var key = path2[idx];
                if (idx === path2.length - 1) {
                    newValue = val;
                } else {
                    var nestedObj = isObject(obj) && isObject(obj[key]) ? obj[key] : typeof path2[idx + 1] === "number" ? [] : {};
                    newValue = doSetIn(nestedObj, path2, val, idx + 1);
                }
                return set2(obj, key, newValue);
            }
            function update(obj, key, fnUpdate) {
                var prevVal = obj == null ? void 0 : obj[key];
                var nextVal = fnUpdate(prevVal);
                return set2(obj, key, nextVal);
            }
            function updateIn(obj, path2, fnUpdate) {
                var prevVal = getIn(obj, path2);
                var nextVal = fnUpdate(prevVal);
                return setIn8(obj, path2, nextVal);
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
            function mergeIn(a, path2, b, c, d, e, f) {
                for(var _len = arguments.length, rest = new Array(_len > 7 ? _len - 7 : 0), _key = 7; _key < _len; _key++){
                    rest[_key - 7] = arguments[_key];
                }
                var prevVal = getIn(a, path2);
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
                return setIn8(a, path2, nextVal);
            }
            function omit4(obj, attrs) {
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
                omit: omit4,
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/sorted-array@2.0.4/node_modules/sorted-array/sorted-array.js
    var require_sorted_array = __commonJS({
        "../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/sorted-array@2.0.4/node_modules/sorted-array/sorted-array.js": function(exports, module) {
            "use strict";
            var SortedArray2 = function() {
                var SortedArray3 = defclass({
                    constructor: function constructor(array, compare) {
                        this.array = [];
                        this.compare = compare || compareDefault;
                        var length2 = array.length, index = 0;
                        while(index < length2)this.insert(array[index++]);
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/common-expressions/core/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        CommonExpressionsPlugin: function() {
            return CommonExpressionsPlugin;
        }
    });
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/common-expressions/core/src/expressions/index.ts
    var expressions_exports = {};
    __export(expressions_exports, {
        ceil: function() {
            return ceil;
        },
        concat: function() {
            return concat;
        },
        containsAny: function() {
            return containsAny;
        },
        findProperty: function() {
            return findProperty;
        },
        findPropertyIndex: function() {
            return findPropertyIndex;
        },
        floor: function() {
            return floor;
        },
        isEmpty: function() {
            return isEmpty;
        },
        isNotEmpty: function() {
            return isNotEmpty;
        },
        length: function() {
            return length;
        },
        lowerCase: function() {
            return lowerCase;
        },
        number: function() {
            return number;
        },
        replace: function() {
            return replace;
        },
        round: function() {
            return round;
        },
        sentenceCase: function() {
            return sentenceCase;
        },
        size: function() {
            return size;
        },
        sum: function() {
            return sum;
        },
        titleCase: function() {
            return titleCase;
        },
        trim: function() {
            return trim;
        },
        upperCase: function() {
            return upperCase;
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
    var SyncWaterfallHook = /*#__PURE__*/ function(Hook) {
        _inherits(SyncWaterfallHook, Hook);
        var _super = _create_super(SyncWaterfallHook);
        function SyncWaterfallHook() {
            _class_call_check(this, SyncWaterfallHook);
            return _super.apply(this, arguments);
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+player@0.0.0/node_modules/@player-ui/player/dist/index.mjs
    var import_ts_nested_error = __toESM(require_nested_error(), 1);
    var import_arr_flatten = __toESM(require_arr_flatten(), 1);
    var import_parsimmon = __toESM(require_parsimmon(), 1);
    var import_ebnf = __toESM(require_dist(), 1);
    var import_ts_nested_error2 = __toESM(require_nested_error(), 1);
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+player@0.0.0/node_modules/@player-ui/player/dist/index.mjs
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
                        if (tmp && typeof tmp === "object") {
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
                        if (tmp && typeof tmp === "object") {
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
            if (!ctor || typeof foo === "object") {
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
    var import_p_defer2 = __toESM(require_p_defer(), 1);
    var import_timm9 = __toESM(require_timm(), 1);
    var import_queue_microtask = __toESM(require_queue_microtask(), 1);
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+partial-match-registry@0.0.0/node_modules/@player-ui/partial-match-registry/dist/index.mjs
    var import_sorted_array = __toESM(require_sorted_array(), 1);
    function traverseObj(object) {
        var path2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], pairs = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : /* @__PURE__ */ new Map();
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = Object.keys(object)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var key = _step.value;
                "";
                var val = object[key];
                var nestedPath2 = _to_consumable_array(path2).concat([
                    key
                ]);
                if (typeof val === "object") {
                    traverseObj(val, nestedPath2, pairs);
                } else {
                    pairs.set(nestedPath2, val);
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
                value: function get(query2) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = this.store.array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var entry = _step.value;
                            if (entry.matcher(query2)) {
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
            }
        ]);
        return Registry;
    }();
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+player@0.0.0/node_modules/@player-ui/player/dist/index.mjs
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
    var toPath = function(path2) {
        return {
            name: "PathNode",
            path: path2
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
    var doubleQuote = import_parsimmon.default.string('"');
    var singleQuote = import_parsimmon.default.string("'");
    var backTick = import_parsimmon.default.string("`");
    var identifier = import_parsimmon.default.regex(/[\w\-@]+/).desc("identifier").map(toValue);
    var path;
    var futurePath = import_parsimmon.default.lazy(function() {
        return path;
    });
    var nestedPath = futurePath.trim(import_parsimmon.default.optWhitespace).wrap(import_parsimmon.default.string("{{"), import_parsimmon.default.string("}}")).map(toPath);
    var nestedExpression = import_parsimmon.default.regex(/[^`]*/).wrap(backTick, backTick).map(toExpression);
    var segment = import_parsimmon.default.alt(identifier, nestedPath, nestedExpression).atLeast(1).map(import_arr_flatten.default).map(toConcatenatedNode);
    var optionallyQuotedSegment = import_parsimmon.default.alt(import_parsimmon.default.regex(/[^"]*/).wrap(doubleQuote, doubleQuote).map(toValue), import_parsimmon.default.regex(/[^']*/).wrap(singleQuote, singleQuote).map(toValue), segment);
    var query = import_parsimmon.default.seq(optionallyQuotedSegment, import_parsimmon.default.string("=").times(1, 3).trim(import_parsimmon.default.optWhitespace), optionallyQuotedSegment).map(function(param) {
        var _param = _sliced_to_array(param, 3), key = _param[0], value = _param[2];
        return toQuery(key, value);
    });
    var brackets = import_parsimmon.default.alt(query, optionallyQuotedSegment).trim(import_parsimmon.default.optWhitespace).wrap(import_parsimmon.default.string("["), import_parsimmon.default.string("]")).many();
    var segmentAndBrackets = import_parsimmon.default.seqMap(segment, brackets, function(s, bs) {
        return [
            s
        ].concat(_to_consumable_array(bs));
    });
    path = import_parsimmon.default.sepBy(segmentAndBrackets, import_parsimmon.default.string(".")).map(import_arr_flatten.default);
    var parser = new import_ebnf.Grammars.W3C.Parser('\nvalue                      ::= segment_and_bracket (SEGMENT_SEPARATOR segment_and_bracket)*\nsegment                    ::= concatenated | expression | modelRef | identifier  \nconcatenated               ::= (expression | modelRef | identifier)+ \nmodelRef                   ::= OPEN_CURL OPEN_CURL value CLOSE_CURL CLOSE_CURL \nidentifier                 ::= [\\w\\-@]+\nquery                      ::= WHITESPACE* optionally_quoted_segment WHITESPACE* EQUALS EQUALS? EQUALS? WHITESPACE* optionally_quoted_segment WHITESPACE*\nbrackets                   ::= OPEN_BRACKET WHITESPACE* (query | optionally_quoted_segment) WHITESPACE* CLOSE_BRACKET \nsegment_and_bracket        ::= segment brackets*\nquoted_value               ::= [^"\']*\noptionally_quoted_segment  ::= WHITESPACE* SINGLE_QUOTE quoted_value SINGLE_QUOTE WHITESPACE* | WHITESPACE* DOUBLE_QUOTE quoted_value DOUBLE_QUOTE WHITESPACE* | WHITESPACE* segment WHITESPACE*\nexpression_value           ::= [^`]*\nexpression                 ::= BACK_TICK expression_value BACK_TICK\n\nEQUALS                     ::= "="\nSEGMENT_SEPARATOR          ::= "."\nSINGLE_QUOTE               ::= "\'"\nDOUBLE_QUOTE               ::= \'"\'\nWHITESPACE                 ::= " "\nOPEN_CURL                  ::= "{"\nCLOSE_CURL                 ::= "}" \nOPEN_BRACKET               ::= "[" \nCLOSE_BRACKET              ::= "]"\nBACK_TICK                  ::= "`" \n');
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
    var parse = function(path2) {
        var index = 1;
        var ch = path2.charAt(0);
        var next = function(expected) {
            if (expected && ch !== expected) {
                throw new Error("Expected char: ".concat(expected, " but got: ").concat(ch));
            }
            ch = path2.charAt(index);
            index += 1;
            return ch;
        };
        var whitespace = function() {
            while(ch === " "){
                next();
            }
        };
        var identifier2 = function() {
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
            if (value) {
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
        var nestedPath2 = function() {
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
            var _nestedPath2, _ref;
            return (_ref = (_nestedPath2 = nestedPath2()) !== null && _nestedPath2 !== void 0 ? _nestedPath2 : expression()) !== null && _ref !== void 0 ? _ref : identifier2();
        };
        var segment2 = function() {
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
        var optionallyQuotedSegment2 = function() {
            whitespace();
            if (ch === SINGLE_QUOTE || ch === DOUBLE_QUOTE) {
                var singleQuote2 = ch === SINGLE_QUOTE;
                next(singleQuote2 ? SINGLE_QUOTE : DOUBLE_QUOTE);
                var id = regex(/[^'"]+/);
                next(singleQuote2 ? SINGLE_QUOTE : DOUBLE_QUOTE);
                return id;
            }
            return simpleSegment();
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
                var value = optionallyQuotedSegment2();
                if (value) {
                    whitespace();
                    if (equals()) {
                        whitespace();
                        var second = optionallyQuotedSegment2();
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
            var firstSegment = segment2();
            if (firstSegment) {
                parsed.push(firstSegment);
                var bracketSegment = parseBracket();
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
            this.split = split.map(function(segment2) {
                if (typeof segment2 === "number") {
                    return segment2;
                }
                var tryNum = Number(segment2);
                return isNaN(tryNum) ? segment2 : tryNum;
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
        function appendPathSegments(segment2) {
            if (typeof segment2 === "string" && segment2.indexOf(".") > -1) {
                segment2.split(".").forEach(function(i) {
                    context.path.push(maybeConvertToNum(i));
                });
            } else {
                context.path.push(segment2);
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
                    appendPathSegments(resolvedNode.value);
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
                value: function normalizePath(path2, resolveOptions) {
                    if (!BINDING_BRACKETS_REGEX.test(path2) && LAZY_BINDING_REGEX.test(path2) && this.hooks.skipOptimization.call(path2) !== true) {
                        return {
                            path: path2.split("."),
                            updates: void 0
                        };
                    }
                    var _this_parseCache_path2;
                    var ast = (_this_parseCache_path2 = this.parseCache[path2]) !== null && _this_parseCache_path2 !== void 0 ? _this_parseCache_path2 : parse(path2);
                    this.parseCache[path2] = ast;
                    if (typeof ast !== "object" || !(ast === null || ast === void 0 ? void 0 : ast.status)) {
                        var _ast_error;
                        throw new TypeError('Cannot normalize path "'.concat(path2, '": ').concat((_ast_error = ast === null || ast === void 0 ? void 0 : ast.error) !== null && _ast_error !== void 0 ? _ast_error : "Unknown Error."));
                    }
                    try {
                        return resolveBindingAST(ast.path, resolveOptions, this.hooks);
                    } catch (e) {
                        throw new import_ts_nested_error.NestedError("Cannot resolve binding: ".concat(path2), e);
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
                        getValue: function(path2) {
                            var normalized2 = _this.normalizePath(path2.join("."), normalizeConfig);
                            return options.get(_this.getBindingForNormalizedResult(normalized2));
                        },
                        evaluate: function(exp) {
                            return options.evaluate(exp);
                        },
                        convertToPath: function(path2) {
                            if (path2 === void 0) {
                                throw new Error("Attempted to convert undefined value to binding path");
                            }
                            if (typeof path2 !== "string" && typeof path2 !== "number" && typeof path2 !== "boolean") {
                                throw new Error("Attempting to convert ".concat(typeof path2 === "undefined" ? "undefined" : _type_of(path2), " to a binding path."));
                            }
                            var normalized2 = _this.normalizePath(String(path2), normalizeConfig);
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
        var _super = _create_super(DependencyModel);
        function DependencyModel(rootModel) {
            _class_call_check(this, DependencyModel);
            var _this;
            _this = _super.call(this);
            _this.rootModel = rootModel;
            _this.set = _this.set.bind(_assert_this_initialized(_this));
            _this.get = _this.get.bind(_assert_this_initialized(_this));
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
        }
    });
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
        var resolution = ctx.evaluate(condition);
        if (resolution) {
            return ctx.evaluate(ifTrue);
        }
        if (ifFalse) {
            return ctx.evaluate(ifFalse);
        }
        return null;
    };
    conditional.resolveParams = false;
    var andandOperator = function(ctx, a, b) {
        return ctx.evaluate(a) && ctx.evaluate(b);
    };
    andandOperator.resolveParams = false;
    var ororOperator = function(ctx, a, b) {
        return ctx.evaluate(a) || ctx.evaluate(b);
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
        // eslint-disable-next-line
        "==": function(a, b) {
            return a == b;
        },
        // eslint-disable-next-line
        "!=": function(a, b) {
            return a != b;
        },
        ">": function(a, b) {
            return a > b;
        },
        ">=": function(a, b) {
            return a >= b;
        },
        "<": function(a, b) {
            return a < b;
        },
        "<=": function(a, b) {
            return a <= b;
        },
        "&&": andandOperator,
        "||": ororOperator,
        "!==": function(a, b) {
            return a !== b;
        },
        "===": function(a, b) {
            return a === b;
        },
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
        "!": function(a) {
            return !a;
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
                expressions: new Map(Object.entries(evaluator_functions_exports))
            };
            this.defaultHookOptions = _object_spread_props(_object_spread({}, defaultOptions), {
                evaluate: function(expr) {
                    return _this.evaluate(expr, _this.defaultHookOptions);
                },
                resolveNode: function(node) {
                    return _this._execAST(node, _this.defaultHookOptions);
                }
            });
            this.hooks.resolve.tap("ExpressionEvaluator", this._resolveNode.bind(this));
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
                        var ref;
                        ref = _sliced_to_array(Array.from(matches), 2), matchedExp = ref[1], ref;
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
                                    return operator(expressionContext, node.left, node.right);
                                }
                                return operator(expressionContext, resolveNode(node.left), resolveNode(node.right));
                            }
                            return operator(resolveNode(node.left), resolveNode(node.right));
                        }
                        return;
                    }
                    if (node.type === "UnaryExpression") {
                        var operator1 = this.operators.unary.get(node.operator);
                        if (operator1) {
                            if ("resolveParams" in operator1) {
                                return operator1(expressionContext, operator1.resolveParams === false ? node.argument : resolveNode(node.argument));
                            }
                            return operator1(resolveNode(node.argument));
                        }
                        return;
                    }
                    if (node.type === "Object") {
                        var attributes = node.attributes;
                        var resolvedAttributes = {};
                        attributes.forEach(function(attr) {
                            var key = resolveNode(attr.key);
                            var value = resolveNode(attr.value);
                            resolvedAttributes[key] = value;
                        });
                        return resolvedAttributes;
                    }
                    if (node.type === "CallExpression") {
                        var expressionName = node.callTarget.name;
                        var operator2 = this.operators.expressions.get(expressionName);
                        if (!operator2) {
                            throw new Error("Unknown expression function: ".concat(expressionName));
                        }
                        if ("resolveParams" in operator2 && operator2.resolveParams === false) {
                            return operator2.apply(void 0, [
                                expressionContext
                            ].concat(_to_consumable_array(node.args)));
                        }
                        var args = node.args.map(function(n) {
                            return resolveNode(n);
                        });
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
                        return obj[prop];
                    }
                    if (node.type === "Assignment") {
                        if (node.left.type === "ModelRef") {
                            var value = resolveNode(node.right);
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
                            this.vars[node.left.name] = value1;
                            return value1;
                        }
                        return;
                    }
                    if (node.type === "ConditionalExpression") {
                        var result = resolveNode(node.test) ? node.consequent : node.alternate;
                        return resolveNode(result);
                    }
                    if (node.type === "ArrayExpression") {
                        return node.elements.map(function(ele) {
                            return resolveNode(ele);
                        });
                    }
                    if (node.type === "Modification") {
                        var operation = this.operators.binary.get(node.operator);
                        if (operation) {
                            var newValue;
                            if ("resolveParams" in operation) {
                                if (operation.resolveParams === false) {
                                    newValue = operation(expressionContext, node.left, node.right);
                                } else {
                                    newValue = operation(expressionContext, resolveNode(node.left), resolveNode(node.right));
                                }
                            } else {
                                newValue = operation(resolveNode(node.left), resolveNode(node.right));
                            }
                            if (node.left.type === "ModelRef") {
                                model.set([
                                    [
                                        node.left.ref,
                                        newValue
                                    ]
                                ]);
                            } else if (node.left.type === "Identifier") {
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
            this.schema = schema ? parse4(schema) : /* @__PURE__ */ new Map();
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
    var EMPTY_NODE = {
        type: "empty"
    };
    var Parser = /*#__PURE__*/ function() {
        function Parser() {
            _class_call_check(this, Parser);
            this.hooks = {
                /**
         * A hook to interact with an object _before_ parsing it into an AST
         *
         * @param value - The object we're are about to parse
         * @returns - A new value to parse.
         *  If undefined, the original value is used.
         *  If null, we stop parsing this node.
         */ onParseObject: new SyncWaterfallHook(),
                /**
         * A callback to interact with an AST _after_ we parse it into the AST
         *
         * @param value - The object we parsed
         * @param node - The AST node we generated
         * @returns - A new AST node to use
         *   If undefined, the original value is used.
         *   If null, we ignore this node all together
         */ onCreateASTNode: new SyncWaterfallHook(),
                determineNodeType: new SyncBailHook(),
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
                key: "parseAsync",
                value: function parseAsync(obj, type, options) {
                    var parsedAsync = this.parseObject((0, import_timm5.omit)(obj, "async"), type, options);
                    var parsedNodeId = getNodeID(parsedAsync);
                    if (parsedAsync !== null && parsedNodeId) {
                        return this.createASTNode({
                            id: parsedNodeId,
                            type: "async",
                            value: parsedAsync
                        }, obj);
                    }
                    return null;
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
                /**
     * Checks if there are templated values in the object
     *
     * @param obj - The Parsed Object to check to see if we have a template array type for
     * @param localKey - The key being checked
     */ key: "hasTemplateValues",
                value: function hasTemplateValues(obj, localKey) {
                    return Object.hasOwnProperty.call(obj, "template") && Array.isArray(obj === null || obj === void 0 ? void 0 : obj.template) && obj.template.length && obj.template.find(function(tmpl) {
                        return tmpl.output === localKey;
                    });
                }
            },
            {
                key: "hasSwitchKey",
                value: function hasSwitchKey(localKey) {
                    return localKey === "staticSwitch";
                }
            },
            {
                key: "parseObject",
                value: function parseObject(obj) {
                    var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "value", options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
                        templateDepth: 0
                    };
                    var _this = this;
                    var nodeType = this.hooks.determineNodeType.call(obj);
                    if (nodeType !== void 0) {
                        var parsedNode = this.hooks.parseNode.call(obj, type, options, nodeType);
                        if (parsedNode) {
                            return parsedNode;
                        }
                    }
                    var parseLocalObject = function(currentValue, objToParse) {
                        var path2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
                        if (typeof objToParse !== "object" || objToParse === null) {
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
                            var children2 = accumulation.children, rest = _object_without_properties(accumulation, [
                                "children"
                            ]);
                            var _current = _sliced_to_array(current, 2), localKey = _current[0], localValue = _current[1];
                            if (localKey === "asset" && typeof localValue === "object") {
                                var assetAST = _this.parseObject(localValue, "asset", options);
                                if (assetAST) {
                                    return _object_spread_props(_object_spread({}, rest), {
                                        children: _to_consumable_array(children2).concat([
                                            {
                                                path: _to_consumable_array(path2).concat([
                                                    "asset"
                                                ]),
                                                value: assetAST
                                            }
                                        ])
                                    });
                                }
                            } else if (_this.hooks.determineNodeType.call(localKey) === "template" && Array.isArray(localValue)) {
                                var templateChildren = localValue.map(function(template) {
                                    var _options_templateDepth, _template_dynamic;
                                    var templateAST = _this.hooks.onCreateASTNode.call({
                                        type: "template",
                                        depth: (_options_templateDepth = options.templateDepth) !== null && _options_templateDepth !== void 0 ? _options_templateDepth : 0,
                                        data: template.data,
                                        template: template.value,
                                        dynamic: (_template_dynamic = template.dynamic) !== null && _template_dynamic !== void 0 ? _template_dynamic : false
                                    }, template);
                                    if ((templateAST === null || templateAST === void 0 ? void 0 : templateAST.type) === "multi-node") {
                                        templateAST.values.forEach(function(v) {
                                            v.parent = templateAST;
                                        });
                                    }
                                    if (templateAST) {
                                        return {
                                            path: _to_consumable_array(path2).concat([
                                                template.output
                                            ]),
                                            value: templateAST
                                        };
                                    }
                                    return;
                                }).filter(function(element) {
                                    return !!element;
                                });
                                return _object_spread_props(_object_spread({}, rest), {
                                    children: _to_consumable_array(children2).concat(_to_consumable_array(templateChildren))
                                });
                            } else if (localValue && _this.hooks.determineNodeType.call(localValue) === "switch" || _this.hasSwitchKey(localKey)) {
                                var _localSwitch_children;
                                var localSwitch = _this.hooks.parseNode.call(_this.hasSwitchKey(localKey) ? _define_property({}, localKey, localValue) : localValue, "value", options, "switch");
                                if (localSwitch && localSwitch.type === "value" && ((_localSwitch_children = localSwitch.children) === null || _localSwitch_children === void 0 ? void 0 : _localSwitch_children.length) === 1 && localSwitch.value === void 0) {
                                    var firstChild = localSwitch.children[0];
                                    return _object_spread_props(_object_spread({}, rest), {
                                        children: _to_consumable_array(children2).concat([
                                            {
                                                path: _to_consumable_array(path2).concat([
                                                    localKey
                                                ], _to_consumable_array(firstChild.path)),
                                                value: firstChild.value
                                            }
                                        ])
                                    });
                                }
                                if (localSwitch) {
                                    return _object_spread_props(_object_spread({}, rest), {
                                        children: _to_consumable_array(children2).concat([
                                            {
                                                path: _to_consumable_array(path2).concat([
                                                    localKey
                                                ]),
                                                value: localSwitch
                                            }
                                        ])
                                    });
                                }
                            } else if (localValue && hasAsync(localValue)) {
                                var localAsync = _this.parseAsync(localValue, "value", options);
                                if (localAsync) {
                                    children2.push({
                                        path: _to_consumable_array(path2).concat([
                                            localKey
                                        ]),
                                        value: localAsync
                                    });
                                }
                            } else if (localValue && Array.isArray(localValue)) {
                                var childValues = localValue.map(function(childVal) {
                                    return _this.parseObject(childVal, "value", options);
                                }).filter(function(child) {
                                    return !!child;
                                });
                                if (childValues.length > 0) {
                                    var multiNode = _this.hooks.onCreateASTNode.call({
                                        type: "multi-node",
                                        override: !_this.hasTemplateValues(localObj, localKey),
                                        values: childValues
                                    }, localValue);
                                    if ((multiNode === null || multiNode === void 0 ? void 0 : multiNode.type) === "multi-node") {
                                        multiNode.values.forEach(function(v) {
                                            v.parent = multiNode;
                                        });
                                    }
                                    if (multiNode) {
                                        return _object_spread_props(_object_spread({}, rest), {
                                            children: _to_consumable_array(children2).concat([
                                                {
                                                    path: _to_consumable_array(path2).concat([
                                                        localKey
                                                    ]),
                                                    value: multiNode
                                                }
                                            ])
                                        });
                                    }
                                }
                            } else if (localValue && typeof localValue === "object") {
                                var determineNodeType = _this.hooks.determineNodeType.call(localValue);
                                if (determineNodeType === "applicability") {
                                    var parsedNode = _this.hooks.parseNode.call(localValue, "value", options, determineNodeType);
                                    if (parsedNode) {
                                        return _object_spread_props(_object_spread({}, rest), {
                                            children: _to_consumable_array(children2).concat([
                                                {
                                                    path: _to_consumable_array(path2).concat([
                                                        localKey
                                                    ]),
                                                    value: parsedNode
                                                }
                                            ])
                                        });
                                    }
                                } else {
                                    var result = parseLocalObject(accumulation.value, localValue, _to_consumable_array(path2).concat([
                                        localKey
                                    ]));
                                    return {
                                        value: result.value,
                                        children: _to_consumable_array(children2).concat(_to_consumable_array(result.children))
                                    };
                                }
                            } else {
                                var value2 = (0, import_timm5.setIn)(accumulation.value, _to_consumable_array(path2).concat([
                                    localKey
                                ]), localValue);
                                return {
                                    children: children2,
                                    value: value2
                                };
                            }
                            return accumulation;
                        }, defaultValue);
                        return newValue;
                    };
                    var _parseLocalObject = parseLocalObject(void 0, obj), value = _parseLocalObject.value, children = _parseLocalObject.children;
                    var baseAst = value === void 0 && children.length === 0 ? void 0 : {
                        type: type,
                        value: value
                    };
                    if (baseAst !== void 0 && children.length > 0) {
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
    function unpackAndPush(item, initial) {
        if (Array.isArray(item)) {
            item.forEach(function(i) {
                unpackAndPush(i, initial);
            });
        } else {
            initial.push(item);
        }
    }
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
                /** A hook to allow skipping of the resolution tree for a specific node */ skipResolve: new SyncWaterfallHook(),
                /** An event emitted before calculating the next update */ beforeUpdate: new SyncHook(),
                /** An event emitted after calculating the next update */ afterUpdate: new SyncHook(),
                /** The options passed to a node to resolve it to an object */ resolveOptions: new SyncWaterfallHook(),
                /** A hook to transform the AST node into a new AST node before resolving it */ beforeResolve: new SyncWaterfallHook(),
                /**
         * A hook to transform an AST node into it's resolved value.
         * This runs _before_ any children are resolved
         */ resolve: new SyncWaterfallHook(),
                /**
         * A hook to transform the resolved value of an AST node.
         * This runs _after_ all children nodes are resolved
         */ afterResolve: new SyncWaterfallHook(),
                /** Called at the very end of a node's tree being updated */ afterNodeUpdate: new SyncHook()
            };
            this.root = root;
            this.options = options;
            this.resolveCache = /* @__PURE__ */ new Map();
            this.ASTMap = /* @__PURE__ */ new Map();
            this.logger = options.logger;
            this.idCache = /* @__PURE__ */ new Set();
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
                value: function update(changes) {
                    this.hooks.beforeUpdate.call(changes);
                    var resolveCache = /* @__PURE__ */ new Map();
                    this.idCache.clear();
                    var prevASTMap = new Map(this.ASTMap);
                    this.ASTMap.clear();
                    var updated = this.computeTree(this.root, void 0, changes, resolveCache, toNodeResolveOptions(this.options), void 0, prevASTMap);
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
                        if (typeof value === "object" && value !== null) {
                            clonedNode[key] = Array.isArray(value) ? _to_consumable_array(value) : _object_spread({}, value);
                        }
                    });
                    return clonedNode;
                }
            },
            {
                key: "computeTree",
                value: function computeTree(node, rawParent, dataChanges, cacheUpdate, options, partiallyResolvedParent, prevASTMap) {
                    var _this = this;
                    var _partiallyResolvedParent_parent;
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
                    var clonedNode = _object_spread_props(_object_spread({}, this.cloneNode(node)), {
                        parent: partiallyResolvedParent
                    });
                    var _this_hooks_beforeResolve_call;
                    var resolvedAST = (_this_hooks_beforeResolve_call = this.hooks.beforeResolve.call(clonedNode, resolveOptions)) !== null && _this_hooks_beforeResolve_call !== void 0 ? _this_hooks_beforeResolve_call : {
                        type: "empty"
                    };
                    var isNestedMultiNode = resolvedAST.type === "multi-node" && (partiallyResolvedParent === null || partiallyResolvedParent === void 0 ? void 0 : (_partiallyResolvedParent_parent = partiallyResolvedParent.parent) === null || _partiallyResolvedParent_parent === void 0 ? void 0 : _partiallyResolvedParent_parent.type) === "multi-node" && partiallyResolvedParent.type === "value";
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
                    resolvedAST.parent = partiallyResolvedParent;
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
                            var computedChildTree = _this.computeTree(child.value, node, dataChanges, cacheUpdate, resolveOptions, resolvedAST, prevASTMap);
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
                        var rawParentToPassIn = isNestedMultiNode ? partiallyResolvedParent === null || partiallyResolvedParent === void 0 ? void 0 : partiallyResolvedParent.parent : node;
                        var newValues = resolvedAST.values.map(function(mValue) {
                            var mTree = _this.computeTree(mValue, rawParentToPassIn, dataChanges, cacheUpdate, resolveOptions, resolvedAST, prevASTMap);
                            if (mTree.value !== void 0 && mTree.value !== null) {
                                var _mTree_node_parent;
                                if (((_mTree_node_parent = mTree.node.parent) === null || _mTree_node_parent === void 0 ? void 0 : _mTree_node_parent.type) === "multi-node" && Array.isArray(mTree.value)) {
                                    mTree.value.forEach(function(v) {
                                        unpackAndPush(v, childValue);
                                    });
                                } else {
                                    childValue.push(mTree.value);
                                }
                            }
                            mTree.dependencies.forEach(function(bindingDep) {
                                return childDependencies.add(bindingDep);
                            });
                            updated = updated || mTree.updated;
                            return mTree.node;
                        });
                        resolvedAST.values = newValues;
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
                    this.hooks.afterNodeUpdate.call(node, isNestedMultiNode ? partiallyResolvedParent === null || partiallyResolvedParent === void 0 ? void 0 : partiallyResolvedParent.parent : rawParent, update);
                    cacheUpdate.set(node, update);
                    return update;
                }
            }
        ]);
        return Resolver;
    }();
    var CrossfieldProvider = /*#__PURE__*/ function() {
        function CrossfieldProvider(initialView, parser2, logger) {
            _class_call_check(this, CrossfieldProvider);
            this.allValidations = /* @__PURE__ */ new Set();
            this.byBinding = /* @__PURE__ */ new Map();
            this.logger = logger;
            this.parse(initialView, parser2);
        }
        _create_class(CrossfieldProvider, [
            {
                key: "parse",
                value: function parse(contentView, parser2) {
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
                            var parsed = parser2(ref);
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
            var _this = this;
            _class_call_check(this, ViewInstance);
            this.hooks = {
                onUpdate: new SyncHook(),
                parser: new SyncHook(),
                resolver: new SyncHook(),
                onTemplatePluginCreated: new SyncHook(),
                templatePlugin: new SyncHook()
            };
            this.initialView = initialView;
            this.resolverOptions = resolverOptions;
            this.hooks.onTemplatePluginCreated.tap("view", function(templatePlugin) {
                _this.templatePlugin = templatePlugin;
            });
        }
        _create_class(ViewInstance, [
            {
                key: "updateAsync",
                value: function updateAsync() {
                    var _this_resolver;
                    var update = (_this_resolver = this.resolver) === null || _this_resolver === void 0 ? void 0 : _this_resolver.update();
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
                        var parser2 = new Parser();
                        this.hooks.parser.call(parser2);
                        this.rootNode = parser2.parseView(this.initialView);
                        this.resolver = new Resolver(this.rootNode, _object_spread_props(_object_spread({}, this.resolverOptions), {
                            parseNode: parser2.parseObject.bind(parser2)
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
            }
        ]);
        return ViewInstance;
    }();
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
                                if (typeof expression === "object") {
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
                    return result;
                }
            },
            {
                key: "applyParser",
                value: function applyParser(parser2) {
                    var _this = this;
                    parser2.hooks.onCreateASTNode.tap("template", function(node) {
                        if (node && node.type === "template" && !node.dynamic) {
                            return _this.parseTemplate(parser2.parseObject.bind(parser2), node, _this.options);
                        }
                        return node;
                    });
                    parser2.hooks.determineNodeType.tap("template", function(obj) {
                        if (obj === "template") {
                            return "template";
                        }
                    });
                    parser2.hooks.parseNode.tap("template", function(obj, _nodeType, options, determinedNodeType) {
                        if (determinedNodeType === "template") {
                            var _options_templateDepth, _obj_dynamic;
                            var templateNode = parser2.createASTNode({
                                type: "template",
                                depth: (_options_templateDepth = options.templateDepth) !== null && _options_templateDepth !== void 0 ? _options_templateDepth : 0,
                                data: obj.data,
                                template: obj.value,
                                dynamic: (_obj_dynamic = obj.dynamic) !== null && _obj_dynamic !== void 0 ? _obj_dynamic : false
                            }, obj);
                            if (templateNode) {
                                return templateNode;
                            }
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
        if (node === null || node === void 0 || typeof node !== "object" && typeof node !== "string") {
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
            if (typeof val === "object") {
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
                            if (nodePath.length > 0 && nodePath.some(function(segment2) {
                                return propsToSkip.has(segment2.toString());
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
                value: function applyParser(parser2) {
                    parser2.hooks.determineNodeType.tap("applicability", function(obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, "applicability")) {
                            return "applicability";
                        }
                    });
                    parser2.hooks.parseNode.tap("applicability", function(obj, nodeType, options, determinedNodeType) {
                        if (determinedNodeType === "applicability") {
                            var parsedApplicability = parser2.parseObject((0, import_timm7.omit)(obj, "applicability"), nodeType, options);
                            if (parsedApplicability !== null) {
                                var applicabilityNode = parser2.createASTNode({
                                    type: "applicability",
                                    expression: obj.applicability,
                                    value: parsedApplicability
                                }, obj);
                                if ((applicabilityNode === null || applicabilityNode === void 0 ? void 0 : applicabilityNode.type) === "applicability") {
                                    applicabilityNode.value.parent = applicabilityNode;
                                }
                                return applicabilityNode;
                            }
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
                key: "applyParser",
                value: function applyParser(parser2) {
                    var _this = this;
                    parser2.hooks.onCreateASTNode.tap("switch", function(node) {
                        if (node && node.type === "switch" && !node.dynamic) {
                            return _this.resolveSwitch(node, _this.options);
                        }
                        return node;
                    });
                    parser2.hooks.determineNodeType.tap("switch", function(obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, "dynamicSwitch") || Object.prototype.hasOwnProperty.call(obj, "staticSwitch")) {
                            return "switch";
                        }
                    });
                    parser2.hooks.parseNode.tap("switch", function(obj, _nodeType, options, determinedNodeType) {
                        if (determinedNodeType === "switch") {
                            var dynamic = "dynamicSwitch" in obj;
                            var switchContent = "dynamicSwitch" in obj ? obj.dynamicSwitch : obj.staticSwitch;
                            var cases = [];
                            switchContent.forEach(function(switchCase) {
                                var switchCaseExpr = switchCase.case, switchBody = _object_without_properties(switchCase, [
                                    "case"
                                ]);
                                var value = parser2.parseObject(switchBody, "value", options);
                                if (value) {
                                    cases.push({
                                        case: switchCaseExpr,
                                        value: value
                                    });
                                }
                            });
                            var switchAST = parser2.hooks.onCreateASTNode.call({
                                type: "switch",
                                dynamic: dynamic,
                                cases: cases
                            }, obj);
                            if ((switchAST === null || switchAST === void 0 ? void 0 : switchAST.type) === "switch") {
                                switchAST.cases.forEach(function(sCase) {
                                    sCase.value.parent = switchAST;
                                });
                            }
                            if ((switchAST === null || switchAST === void 0 ? void 0 : switchAST.type) === "empty") {
                                return null;
                            }
                            return switchAST !== null && switchAST !== void 0 ? switchAST : null;
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
    var FlowInstance = /*#__PURE__*/ function() {
        function FlowInstance(id, flow, options) {
            _class_call_check(this, FlowInstance);
            this.isTransitioning = false;
            this.hooks = {
                beforeStart: new SyncBailHook(),
                /** A callback when the onStart node was present */ onStart: new SyncHook(),
                /** A callback when the onEnd node was present */ onEnd: new SyncHook(),
                /** A hook to intercept and block a transition */ skipTransition: new SyncBailHook(),
                /** A chance to manipulate the flow-node used to calculate the given transition used  */ beforeTransition: new SyncWaterfallHook(),
                /** A chance to manipulate the flow-node calculated after a transition */ resolveTransitionNode: new SyncWaterfallHook(),
                /** A callback when a transition from 1 state to another was made */ transition: new SyncHook(),
                /** A callback to run actions after a transition occurs */ afterTransition: new SyncHook()
            };
            this.id = id;
            this.flow = flow;
            this.log = options === null || options === void 0 ? void 0 : options.logger;
            this.history = [];
            var _this = this;
            this.hooks.transition.tap("startPromise", function() {
                var _ref = _async_to_generator(function(_oldState, nextState) {
                    var newState;
                    return _ts_generator(this, function(_state) {
                        newState = nextState.value;
                        if (_this.flowPromise && newState.state_type === "END") {
                            _this.flowPromise.resolve(newState);
                        }
                        return [
                            2
                        ];
                    });
                });
                return function(_oldState, nextState) {
                    return _ref.apply(this, arguments);
                };
            }());
        }
        _create_class(FlowInstance, [
            {
                key: "start",
                value: /** Start the state machine */ function start() {
                    var _this = this;
                    return _async_to_generator(function() {
                        var _this_log, initialState;
                        return _ts_generator(this, function(_state) {
                            if (_this.flowPromise) {
                                ;
                                (_this_log = _this.log) === null || _this_log === void 0 ? void 0 : _this_log.warn("Already called start for flow");
                                return [
                                    2,
                                    _this.flowPromise.promise
                                ];
                            }
                            _this.flow = _this.hooks.beforeStart.call(_this.flow) || _this.flow;
                            if (_this.flow.onStart) {
                                _this.hooks.onStart.call(_this.flow.onStart);
                            }
                            initialState = _this.flow.startState;
                            if (!initialState) {
                                return [
                                    2,
                                    Promise.reject(new Error("No 'startState' defined for flow"))
                                ];
                            }
                            _this.flowPromise = (0, import_p_defer2.default)();
                            _this.pushHistory(initialState);
                            return [
                                2,
                                _this.flowPromise.promise
                            ];
                        });
                    })();
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
                    if (!this.flow[stateName] || typeof nextState !== "object" || !("state_type" in nextState)) {
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
                    var _this = this;
                    return _async_to_generator(function() {
                        var _this_log, startFlow, flow, end, firstItem;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    if (!Object.prototype.hasOwnProperty.call(_this.navigation, startState)) {
                                        return [
                                            2,
                                            Promise.reject(new Error("No flow defined for: ".concat(startState)))
                                        ];
                                    }
                                    startFlow = _this.navigation[startState];
                                    if (startFlow === null || typeof startFlow !== "object") {
                                        return [
                                            2,
                                            Promise.reject(new Error("Flow: ".concat(startState, " needs to be an object")))
                                        ];
                                    }
                                    (_this_log = _this.log) === null || _this_log === void 0 ? void 0 : _this_log.debug("Starting flow: ".concat(startState));
                                    flow = new FlowInstance(startState, startFlow, {
                                        logger: _this.log
                                    });
                                    _this.addNewFlow(flow);
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
                                    _this.navStack.pop();
                                    if (_this.navStack.length > 0) {
                                        firstItem = 0;
                                        _this.current = _this.navStack[firstItem];
                                    }
                                    return [
                                        2,
                                        end
                                    ];
                            }
                        });
                    })();
                }
            },
            {
                key: "start",
                value: function start() {
                    var _this = this;
                    return _async_to_generator(function() {
                        return _ts_generator(this, function(_state) {
                            if (!_this.navigation.BEGIN) {
                                return [
                                    2,
                                    Promise.reject(new Error("Must supply a BEGIN state"))
                                ];
                            }
                            return [
                                2,
                                _this.run(_this.navigation.BEGIN)
                            ];
                        });
                    })();
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
                value: function forView(parser2) {
                    var _this = this;
                    return {
                        _getValidationForBinding: function(binding) {
                            return _this.getValidationForBinding(isBinding(binding) ? binding : parser2(binding));
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
                            return _this.schema.getType(isBinding(binding) ? binding : parser2(binding));
                        }
                    };
                }
            }
        ]);
        return ValidationController;
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
                value: function apply(viewController) {
                    var _this = this;
                    viewController.hooks.view.tap("asset-transform", function(view) {
                        _this.stateStore.clear();
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
                                    var transform = _this.registry.get(node.value);
                                    if (transform === null || transform === void 0 ? void 0 : transform.beforeResolve) {
                                        var _options_node;
                                        var store = getStore((_options_node = options.node) !== null && _options_node !== void 0 ? _options_node : node, _this.beforeResolveSymbol);
                                        return transform.beforeResolve(node, options, store);
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
                                var transform = _this.registry.get(value);
                                if (transform === null || transform === void 0 ? void 0 : transform.resolve) {
                                    var store = getStore(originalNode, _this.resolveSymbol);
                                    return transform === null || transform === void 0 ? void 0 : transform.resolve(value, options, store);
                                }
                                return value;
                            });
                        });
                    });
                }
            }
        ]);
        return AssetTransformCorePlugin;
    }();
    var ViewController = /*#__PURE__*/ function() {
        function ViewController(initialViews, options) {
            var _this = this;
            var _this1 = this;
            _class_call_check(this, ViewController);
            this.hooks = {
                /** Do any processing before the `View` instance is created */ resolveView: new SyncWaterfallHook(),
                // The hook right before the View starts resolving. Attach anything custom here
                view: new SyncHook()
            };
            this.transformRegistry = new Registry();
            this.optimizeUpdates = true;
            this.viewOptions = options;
            this.viewMap = initialViews.reduce(function(viewMap, view) {
                viewMap[view.id] = view;
                return viewMap;
            }, {});
            new AssetTransformCorePlugin(this.transformRegistry).apply(this);
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
                        (0, import_queue_microtask.default)(function() {
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
                    this.hooks.view.call(view);
                    view.update();
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
                    var existedBeforeDelete = typeof parentValue === "object" && parentValue !== null && Object.prototype.hasOwnProperty.call(parentValue, property);
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
    function flatten2(obj) {
        var roots = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], sep = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ".";
        return Object.keys(obj).reduce(function(memo, prop) {
            return _object_spread({}, memo, Object.prototype.toString.call(obj[prop]) === "[object Object]" ? // keep working if value is an object
            flatten2(obj[prop], roots.concat([
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
                    var path2 = new BindingInstance(key);
                    var _this_tempStore_get_get, _ref;
                    return (_ref = (_this_tempStore_get_get = (_this_tempStore_get = this.tempStore.get(namespace)) === null || _this_tempStore_get === void 0 ? void 0 : _this_tempStore_get.get(path2)) !== null && _this_tempStore_get_get !== void 0 ? _this_tempStore_get_get : (_this_store_get = this.store.get(namespace)) === null || _this_store_get === void 0 ? void 0 : _this_store_get.get(path2)) !== null && _ref !== void 0 ? _ref : fallback;
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
                            if (typeof exp === "object" && "exp" in exp) {
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
    var DefaultViewPlugin = /*#__PURE__*/ function() {
        function DefaultViewPlugin() {
            _class_call_check(this, DefaultViewPlugin);
            this.name = "default-view-plugin";
        }
        _create_class(DefaultViewPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    player.hooks.viewController.tap(this.name, function(viewController) {
                        viewController.hooks.view.tap(_this.name, function(view) {
                            var pluginOptions = toNodeResolveOptions(view.resolverOptions);
                            new SwitchPlugin(pluginOptions).apply(view);
                            new ApplicabilityPlugin().apply(view);
                            new StringResolverPlugin().apply(view);
                            var templatePlugin = new TemplatePlugin(pluginOptions);
                            templatePlugin.apply(view);
                            view.hooks.onTemplatePluginCreated.call(templatePlugin);
                        });
                    });
                }
            }
        ]);
        return DefaultViewPlugin;
    }();
    var PLAYER_VERSION = "__VERSION__";
    var COMMIT = "__GIT_COMMIT__";
    var _Player = /*#__PURE__*/ function() {
        function _Player2(config) {
            var _this = this;
            _class_call_check(this, _Player2);
            var _this_config_plugins;
            this.logger = new TapableLogger();
            this.constantsController = new ConstantsController();
            this.state = NOT_STARTED_STATE;
            this.hooks = {
                /** The hook that fires every time we create a new flowController (a new Content blob is passed in) */ flowController: new SyncHook(),
                /** The hook that updates/handles views */ viewController: new SyncHook(),
                /** A hook called every-time there's a new view. This is equivalent to the view hook on the view-controller */ view: new SyncHook(),
                /** Called when an expression evaluator was created */ expressionEvaluator: new SyncHook(),
                /** The hook that creates and manages data */ dataController: new SyncHook(),
                /** Called after the schema is created for a flow */ schema: new SyncHook(),
                /** Manages validations (schema and x-field ) */ validationController: new SyncHook(),
                /** Manages parsing binding */ bindingParser: new SyncHook(),
                /** A that's called for state changes in the flow execution */ state: new SyncHook(),
                /** A hook to access the current flow */ onStart: new SyncHook(),
                /** A hook for when the flow ends either in success or failure */ onEnd: new SyncHook(),
                /** Mutate the Content flow before starting */ resolveFlowContent: new SyncWaterfallHook()
            };
            if (config === null || config === void 0 ? void 0 : config.logger) {
                this.logger.addHandler(config.logger);
            }
            this.config = config || {};
            this.config.plugins = [
                new DefaultExpPlugin(),
                new DefaultViewPlugin()
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
                                if (typeof state.onEnd === "object" && "exp" in state.onEnd) {
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
                        flow.hooks.afterTransition.tap("player", function(flowInstance) {
                            var _flowInstance_currentState;
                            var value = (_flowInstance_currentState = flowInstance.currentState) === null || _flowInstance_currentState === void 0 ? void 0 : _flowInstance_currentState.value;
                            if (value && value.state_type === "ACTION") {
                                var exp = value.exp;
                                flowController === null || flowController === void 0 ? void 0 : flowController.transition(String(expressionEvaluator === null || expressionEvaluator === void 0 ? void 0 : expressionEvaluator.evaluate(exp)));
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
                    var _this = this;
                    return _async_to_generator(function() {
                        var _payload_id, ref, maybeUpdateState, _this_setupFlow, state, start, endProps, _tmp, error, errorState;
                        return _ts_generator(this, function(_state) {
                            switch(_state.label){
                                case 0:
                                    ref = Symbol((_payload_id = payload === null || payload === void 0 ? void 0 : payload.id) !== null && _payload_id !== void 0 ? _payload_id : "payload");
                                    maybeUpdateState = function(newState) {
                                        if (_this.state.ref !== ref) {
                                            _this.logger.warn("Received update for a flow that's not the current one");
                                            return newState;
                                        }
                                        _this.setState(newState);
                                        return newState;
                                    };
                                    _this.setState({
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
                                    _this_setupFlow = _this.setupFlow(payload), state = _this_setupFlow.state, start = _this_setupFlow.start;
                                    _this.setState(_object_spread({
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
                    })();
                }
            }
        ]);
        return _Player2;
    }();
    _Player.info = {
        version: PLAYER_VERSION,
        commit: COMMIT
    };
    var size = withoutContext(function(val) {
        if (typeof val === "string") {
            return val.length;
        }
        if (typeof val === "object" && val !== null) {
            return Object.keys(val).length;
        }
        return 0;
    });
    var length = size;
    var isEmpty = function(ctx, val) {
        if (val === void 0 || val === null) {
            return true;
        }
        if (typeof val === "object" || typeof val === "string") {
            return size(ctx, val) === 0;
        }
        return false;
    };
    var isNotEmpty = function(ctx, val) {
        return !isEmpty(ctx, val);
    };
    var concat = withoutContext(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (args.every(function(v) {
            return Array.isArray(v);
        })) {
            var arrayArgs = args;
            return arrayArgs.reduce(function(merged, next) {
                var _merged;
                (_merged = merged).push.apply(_merged, _to_consumable_array(next));
                return merged;
            });
        }
        return args.reduce(function(merged, next) {
            return merged + (next !== null && next !== void 0 ? next : "");
        }, "");
    });
    var trim = withoutContext(ifString(function(str) {
        return str.trim();
    }));
    var upperCase = withoutContext(ifString(function(str) {
        return str.toUpperCase();
    }));
    var lowerCase = withoutContext(ifString(function(str) {
        return str.toLowerCase();
    }));
    var replace = withoutContext(function(str, pattern) {
        var replacement = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
        if (typeof str === "string" && typeof pattern === "string" && typeof replacement === "string") {
            var replacementRegex = new RegExp(pattern, "g");
            return str.replace(replacementRegex, replacement);
        }
        return str;
    });
    var titleCase = withoutContext(ifString(function(str) {
        return str.split(" ").map(function(word) {
            return word[0].toUpperCase() + word.slice(1);
        }).join(" ");
    }));
    var sentenceCase = withoutContext(ifString(function(str) {
        return str.replace(/\b[a-zA-Z]/, function(word) {
            return word.toUpperCase();
        });
    }));
    var number = withoutContext(toNum);
    var round = withoutContext(function(num) {
        var _toNum;
        return Math.round((_toNum = toNum(num, true)) !== null && _toNum !== void 0 ? _toNum : 0);
    });
    var floor = withoutContext(function(num) {
        var _toNum;
        return Math.floor((_toNum = toNum(num, true)) !== null && _toNum !== void 0 ? _toNum : 0);
    });
    var ceil = withoutContext(function(num) {
        var _toNum;
        return Math.ceil((_toNum = toNum(num, true)) !== null && _toNum !== void 0 ? _toNum : 0);
    });
    var sum = withoutContext(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        return args.reduce(function(s, next) {
            var _toNum;
            return s + ((_toNum = toNum(next)) !== null && _toNum !== void 0 ? _toNum : 0);
        }, 0);
    });
    var findPropertyIndex = function(context, bindingOrModel, propToCheck, valueToCheck) {
        if (bindingOrModel === void 0) {
            return -1;
        }
        var searchArray = Array.isArray(bindingOrModel) ? bindingOrModel : context.model.get(bindingOrModel);
        if (!Array.isArray(searchArray)) {
            return -1;
        }
        return searchArray.findIndex(function(value) {
            var propVal = typeof value === "object" && propToCheck !== void 0 ? value[propToCheck] : value;
            return valueToCheck === propVal;
        });
    };
    var findProperty = function(context, bindingOrModel, propToCheck, valueToCheck, propToReturn, defaultValue) {
        var searchArray = Array.isArray(bindingOrModel) ? bindingOrModel : context.model.get(bindingOrModel);
        if (!Array.isArray(searchArray)) {
            return defaultValue;
        }
        var foundValue = searchArray.find(function(value) {
            var propVal = typeof value === "object" && propToCheck !== void 0 ? value[propToCheck] : value;
            return valueToCheck === propVal;
        });
        if (foundValue === void 0) {
            return defaultValue;
        }
        if (typeof foundValue === "object" && propToReturn) {
            var _foundValue_propToReturn;
            return (_foundValue_propToReturn = foundValue[propToReturn]) !== null && _foundValue_propToReturn !== void 0 ? _foundValue_propToReturn : defaultValue;
        }
        return foundValue;
    };
    var containsAny = withoutContext(function(str, keywords) {
        if (!(typeof str === "string") || !(typeof keywords === "string" || Array.isArray(keywords))) {
            return false;
        }
        if (Array.isArray(keywords)) {
            return keywords.some(function(keyword) {
                return str.indexOf(keyword) > -1;
            });
        }
        return str.indexOf(keywords) > -1;
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/common-expressions/core/src/index.ts
    var CommonExpressionsPlugin = /*#__PURE__*/ function() {
        function CommonExpressionsPlugin() {
            _class_call_check(this, CommonExpressionsPlugin);
            this.name = "CommonExpressions";
        }
        _create_class(CommonExpressionsPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    player.registerPlugin(new ExpressionPlugin(new Map(Object.entries(expressions_exports))));
                }
            }
        ]);
        return CommonExpressionsPlugin;
    }();
    return __toCommonJS(src_exports);
}(); /*! Bundled license information:

arr-flatten/index.js:
  (*!
   * arr-flatten <https://github.com/jonschlinkert/arr-flatten>
   *
   * Copyright (c) 2014-2017, Jon Schlinkert.
   * Released under the MIT License.
   *)

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