"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
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
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
var CommonExpressionsPlugin = function() {
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
    // external-global-plugin:@player-ui/player
    var require_player = __commonJS({
        "external-global-plugin:@player-ui/player": function(exports, module) {
            "use strict";
            module.exports = globalThis.Player;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/common-expressions/core/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        CommonExpressionsPlugin: function() {
            return CommonExpressionsPlugin;
        },
        Expressions: function() {
            return expressions_exports;
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
        split: function() {
            return split;
        },
        substr: function() {
            return substr;
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
    var import_player = __toESM(require_player());
    var size = (0, import_player.withoutContext)(function(val) {
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
    var concat = (0, import_player.withoutContext)(function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (args.every(function(v) {
            return Array.isArray(v);
        })) {
            var merged = [];
            args.forEach(function(next) {
                var _merged;
                (_merged = merged).push.apply(_merged, _to_consumable_array(next));
            });
            return merged;
        }
        return args.reduce(function(merged, next) {
            return merged + (next !== null && next !== void 0 ? next : "");
        }, "");
    });
    var trim = (0, import_player.withoutContext)(ifString(function(str) {
        return str.trim();
    }));
    var upperCase = (0, import_player.withoutContext)(ifString(function(str) {
        return str.toUpperCase();
    }));
    var lowerCase = (0, import_player.withoutContext)(ifString(function(str) {
        return str.toLowerCase();
    }));
    var replace = (0, import_player.withoutContext)(function(str, pattern) {
        var replacement = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
        if (typeof str === "string" && typeof pattern === "string" && typeof replacement === "string") {
            var replacementRegex = new RegExp(pattern, "g");
            return str.replace(replacementRegex, replacement);
        }
        return str;
    });
    var titleCase = (0, import_player.withoutContext)(ifString(function(str) {
        return str.split(" ").map(function(word) {
            return word[0].toUpperCase() + word.slice(1);
        }).join(" ");
    }));
    var sentenceCase = (0, import_player.withoutContext)(ifString(function(str) {
        return str.replace(/\b[a-zA-Z]/, function(word) {
            return word.toUpperCase();
        });
    }));
    var split = (0, import_player.withoutContext)(function(str, separator, limit) {
        if (separator === void 0 || separator === null) {
            return str;
        }
        var separatorStr = String(separator);
        if (separatorStr === "") {
            var result2 = str.split("");
            if (limit !== void 0 && limit !== null && limit > 0) {
                return result2.slice(0, limit);
            }
            return result2;
        }
        var result = str.split(separatorStr);
        if (limit !== void 0 && limit !== null && limit > 0) {
            return result.slice(0, limit);
        }
        return result;
    });
    var substr = (0, import_player.withoutContext)(function(str, start, length2) {
        var actualStartIndex = start < 0 ? str.length + start : start;
        if (length2 !== void 0) {
            return str.substring(actualStartIndex, actualStartIndex + length2);
        }
        return str.substring(actualStartIndex);
    });
    var number = (0, import_player.withoutContext)(toNum);
    var round = (0, import_player.withoutContext)(function(num) {
        var _toNum;
        return Math.round((_toNum = toNum(num, true)) !== null && _toNum !== void 0 ? _toNum : 0);
    });
    var floor = (0, import_player.withoutContext)(function(num) {
        var _toNum;
        return Math.floor((_toNum = toNum(num, true)) !== null && _toNum !== void 0 ? _toNum : 0);
    });
    var ceil = (0, import_player.withoutContext)(function(num) {
        var _toNum;
        return Math.ceil((_toNum = toNum(num, true)) !== null && _toNum !== void 0 ? _toNum : 0);
    });
    var sum = (0, import_player.withoutContext)(function() {
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
    var containsAny = (0, import_player.withoutContext)(function(str, keywords) {
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
}();
//# sourceMappingURL=index.global.js.map