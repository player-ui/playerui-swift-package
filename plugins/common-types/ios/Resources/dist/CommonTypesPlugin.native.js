"use strict";
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
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
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
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
var CommonTypesPlugin = function() {
    var skipNullish = function skipNullish(validationFn) {
        return function(context, value, options) {
            if (value === null || value === void 0) {
                return;
            }
            return validationFn(context, value, options);
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/common-types/core/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        CommonTypesPlugin: function() {
            return CommonTypesPlugin;
        },
        PLACEHOLDER: function() {
            return PLACEHOLDER;
        },
        createMaskedNumericFormatter: function() {
            return createMaskedNumericFormatter;
        },
        dataTypes: function() {
            return types_exports;
        },
        formatAsEnum: function() {
            return formatAsEnum;
        },
        formatAsMasked: function() {
            return formatAsMasked;
        },
        formats: function() {
            return formats_exports;
        },
        removeFormatCharactersFromMaskedString: function() {
            return removeFormatCharactersFromMaskedString;
        },
        validators: function() {
            return validators_exports;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+types-provider-plugin@0.0.0/node_modules/@player-ui/types-provider-plugin/dist/index.mjs
    var TypesProviderPlugin = /*#__PURE__*/ function() {
        function TypesProviderPlugin(config) {
            _class_call_check(this, TypesProviderPlugin);
            this.name = "TypesProviderPlugin";
            this.config = config;
        }
        _create_class(TypesProviderPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    player.hooks.schema.tap(this.name, function(schema) {
                        if (_this.config.types) {
                            schema.addDataTypes(_this.config.types);
                        }
                        if (_this.config.formats) {
                            schema.addFormatters(_this.config.formats);
                        }
                    });
                    if (this.config.validators) {
                        player.hooks.validationController.tap(this.name, function(validationController) {
                            validationController.hooks.createValidatorRegistry.tap(_this.name, function(validationRegistry) {
                                var _this_config_validators;
                                (_this_config_validators = _this.config.validators) === null || _this_config_validators === void 0 ? void 0 : _this_config_validators.forEach(function(param) {
                                    var _param = _sliced_to_array(param, 2), name = _param[0], handler = _param[1];
                                    validationRegistry.register(name, handler);
                                });
                            });
                        });
                    }
                }
            }
        ]);
        return TypesProviderPlugin;
    }();
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/common-types/core/src/validators/index.ts
    var validators_exports = {};
    __export(validators_exports, {
        collection: function() {
            return collection;
        },
        email: function() {
            return email;
        },
        expression: function() {
            return expression;
        },
        integer: function() {
            return integer;
        },
        length: function() {
            return length;
        },
        max: function() {
            return max;
        },
        min: function() {
            return min;
        },
        oneOf: function() {
            return oneOf;
        },
        phone: function() {
            return phone;
        },
        readonly: function() {
            return readonly;
        },
        regex: function() {
            return regex;
        },
        required: function() {
            return required;
        },
        string: function() {
            return string;
        },
        zip: function() {
            return zip;
        }
    });
    var import_player = __toESM(require_player());
    var EMAIL_REGEX = // eslint-disable-next-line no-control-regex
    /^((([a-z]|\d|[!#$%&'*+\-/=?^_`{|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#$%&'*+-/=?^_`{|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i;
    var PHONE_REGEX = /^\+?[1]?[- ]?\(?\d{3}[)\- ]?\s?\d{3}[ -]?\d{4}$/;
    var ZIP_REGEX = /^\d{5}(-\d{4})?$/;
    var string = skipNullish(function(context, value) {
        if (typeof value !== "string") {
            var message = context.constants.getConstants("validation.string", "constants", "Value must be a string");
            return {
                message: message,
                parameters: {
                    type: typeof value === "undefined" ? "undefined" : _type_of(value)
                }
            };
        }
    });
    var readonly = function(context) {
        var message = context.constants.getConstants("validation.readonly", "constants", "Value cannot be modified");
        return {
            message: message
        };
    };
    var collection = skipNullish(function(context, value) {
        if (!Array.isArray(value)) {
            var message = context.constants.getConstants("validation.collection", "constants", "Cannot set collection to non-array");
            return {
                message: message
            };
        }
    });
    var integer = skipNullish(function(context, value) {
        if (value && (typeof value !== "number" || Math.floor(value) !== value || Number(value) > Number.MAX_SAFE_INTEGER || Number(value) < Number.MIN_SAFE_INTEGER)) {
            var message = context.constants.getConstants("validation.integer", "constants", "Value must be an integer");
            return {
                message: message,
                parameters: {
                    type: typeof value === "undefined" ? "undefined" : _type_of(value),
                    flooredValue: Math.floor(value)
                }
            };
        }
    });
    var oneOf = skipNullish(function(context, value, options) {
        var _options_options;
        if ((options === null || options === void 0 ? void 0 : options.options) === void 0 || ((_options_options = options.options) === null || _options_options === void 0 ? void 0 : _options_options.includes(value))) {
            return;
        }
        var message = context.constants.getConstants("validation.oneOf", "constants", "Invalid entry");
        return {
            message: message
        };
    });
    var expression = function(context, value, options) {
        if ((options === null || options === void 0 ? void 0 : options.exp) === void 0) {
            context.logger.warn("No expression defined for validation");
            return;
        }
        var result = context.evaluate(options.exp);
        if (!result) {
            var message = context.constants.getConstants("validation.expression", "constants", "Expression evaluation failed");
            return {
                message: message
            };
        }
    };
    var required = function(context, value, options) {
        if ((options === null || options === void 0 ? void 0 : options.if) && !context.evaluate(options.if) || (options === null || options === void 0 ? void 0 : options.ifNot) && context.evaluate(options.ifNot)) {
            return;
        }
        if (value === void 0 || value === null || value === "") {
            var message = context.constants.getConstants("validation.required", "constants", "A value is required");
            return {
                message: message,
                severity: "error"
            };
        }
    };
    var regex = skipNullish(function(context, value, options) {
        if (value === void 0 || value === null || value === "" || typeof (options === null || options === void 0 ? void 0 : options.regex) !== "string") {
            return;
        }
        var resolvedRegex = (0, import_player.resolveDataRefs)(options.regex, context);
        var patternMatch = resolvedRegex.match(/^\/(.*)\/(\w)*$/);
        var regexp = patternMatch ? new RegExp(patternMatch[1], patternMatch[2]) : new RegExp(resolvedRegex);
        if (!regexp.test(value)) {
            var message = context.constants.getConstants("validation.regex", "constants", "Invalid entry");
            return {
                message: message
            };
        }
    });
    var length = skipNullish(function(context, value, options) {
        if (typeof options !== "object") {
            context.logger.warn("Missing comparison in length validation");
            return;
        }
        var valLength;
        var itemName = "items";
        if (typeof value === "string") {
            valLength = value.length;
            itemName = "characters";
        } else if (typeof value === "object" && value !== null) {
            valLength = Object.keys(value).length;
        }
        if (valLength === void 0) {
            context.logger.warn("Unable to determine a length for value of type: ".concat(value));
            return;
        }
        if ("exact" in options) {
            if (valLength !== options.exact) {
                return {
                    message: "Must be exactly ".concat(options.exact, " ").concat(itemName, " long"),
                    parameters: {
                        validationLength: valLength
                    }
                };
            }
            return;
        }
        if (options.min !== void 0 && valLength < options.min) {
            var message = context.constants.getConstants("validation.length.minimum", "constants", "At least ".concat(options.min, " ").concat(itemName, " needed"));
            return {
                message: message,
                parameters: {
                    validationLength: valLength
                }
            };
        }
        if (options.max !== void 0 && valLength > options.max) {
            var message1 = context.constants.getConstants("validation.length.maximum", "constants", "Up to ".concat(options.max, " ").concat(itemName, " allowed"));
            return {
                message: message1,
                parameters: {
                    validationLength: valLength
                }
            };
        }
    });
    var min = skipNullish(function(context, value, options) {
        if (typeof value !== "number" || (options === null || options === void 0 ? void 0 : options.value) === void 0) {
            return;
        }
        if (value < options.value) {
            var message = context.constants.getConstants("validation.min", "constants", "Must be at least ".concat(options.value));
            return {
                message: message
            };
        }
    });
    var max = skipNullish(function(context, value, options) {
        if (typeof value !== "number" || (options === null || options === void 0 ? void 0 : options.value) === void 0) {
            return;
        }
        if (value > options.value) {
            var message = context.constants.getConstants("validation.max", "constants", "Cannot exceed ".concat(options.value));
            return {
                message: message
            };
        }
    });
    var stringRegexValidator = function(test, messagePath, invalidMessage) {
        return skipNullish(function(context, value) {
            if (typeof value === "string" && value === "") {
                return;
            }
            if (typeof value !== "string" || !test.test(value)) {
                var message = context.constants.getConstants(messagePath, "constants", invalidMessage);
                return {
                    message: message
                };
            }
        });
    };
    var email = stringRegexValidator(EMAIL_REGEX, "validation.email", "Improper email format");
    var phone = stringRegexValidator(PHONE_REGEX, "validation.phone", "Invalid phone number");
    var zip = stringRegexValidator(ZIP_REGEX, "validation.regex", "Invalid zip code");
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/common-types/core/src/data-types/types.ts
    var types_exports = {};
    __export(types_exports, {
        BooleanType: function() {
            return BooleanType;
        },
        CollectionType: function() {
            return CollectionType;
        },
        DateType: function() {
            return DateType;
        },
        IntegerNNType: function() {
            return IntegerNNType;
        },
        IntegerPosType: function() {
            return IntegerPosType;
        },
        IntegerType: function() {
            return IntegerType;
        },
        PhoneType: function() {
            return PhoneType;
        },
        StringType: function() {
            return StringType;
        }
    });
    var BooleanType = {
        type: "BooleanType",
        default: false,
        validation: [
            {
                type: "oneOf",
                message: "Value must be true or false",
                options: [
                    true,
                    false
                ]
            }
        ]
    };
    var IntegerType = {
        type: "IntegerType",
        validation: [
            {
                type: "integer"
            }
        ],
        format: {
            type: "integer"
        }
    };
    var IntegerPosType = {
        type: "IntegerPosType",
        validation: [
            {
                type: "integer"
            },
            {
                type: "min",
                value: 1
            }
        ],
        format: {
            type: "integer"
        }
    };
    var IntegerNNType = {
        type: "IntegerNNType",
        validation: [
            {
                type: "integer"
            },
            {
                type: "min",
                value: 0
            }
        ],
        format: {
            type: "integer"
        }
    };
    var StringType = {
        type: "StringType",
        default: "",
        validation: [
            {
                type: "string"
            }
        ],
        format: {
            type: "string"
        }
    };
    var CollectionType = {
        type: "CollectionType",
        validation: [
            {
                type: "collection"
            }
        ]
    };
    var DateType = {
        type: "DateType",
        validation: [
            {
                type: "string"
            }
        ],
        format: {
            type: "date"
        }
    };
    var PhoneType = {
        type: "PhoneType",
        validation: [
            {
                type: "phone"
            }
        ],
        format: {
            type: "phone"
        }
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/common-types/core/src/formats/index.ts
    var formats_exports = {};
    __export(formats_exports, {
        commaNumber: function() {
            return commaNumber;
        },
        currency: function() {
            return currency;
        },
        date: function() {
            return date;
        },
        integer: function() {
            return integer2;
        },
        phone: function() {
            return phone2;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/common-types/core/src/formats/utils.ts
    var PLACEHOLDER = "#";
    var removeFormatCharactersFromMaskedString = function(value, mask) {
        var reserved = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [
            PLACEHOLDER
        ];
        var reservedMatchesLength = mask.split("").filter(function(val) {
            return reserved.includes(val);
        }).length;
        var replacements = 0;
        return value.split("").reduce(function(newString, nextChar, nextIndex) {
            var maskedVal = mask[nextIndex];
            if (maskedVal === void 0) {
                return newString;
            }
            if (reservedMatchesLength === replacements) {
                return newString;
            }
            if (reserved.includes(maskedVal)) {
                replacements++;
                return newString + nextChar;
            }
            if (maskedVal !== nextChar) {
                replacements++;
                return newString + nextChar;
            }
            return newString;
        }, "");
    };
    var formatAsEnum = function(value, acceptedValues, options) {
        var autoCompletionsByOverlapCount = acceptedValues.reduce(function(validCompletions, validValue) {
            var overlap = 0;
            for(var charIndex = 0; charIndex < Math.min(validValue.length, value.length); charIndex++){
                var validChar = (options === null || options === void 0 ? void 0 : options.ignoreCase) ? validValue[charIndex].toLowerCase() : validValue[charIndex];
                var actualChar = (options === null || options === void 0 ? void 0 : options.ignoreCase) ? value[charIndex].toLowerCase() : value[charIndex];
                if (validChar !== actualChar) {
                    break;
                }
                overlap += 1;
            }
            if (overlap === 0) {
                return validCompletions;
            }
            validCompletions.push({
                count: overlap,
                target: validValue
            });
            return validCompletions;
        }, []).sort(function(e) {
            return e.count;
        });
        if (autoCompletionsByOverlapCount.length === 0) {
            return void 0;
        }
        if (autoCompletionsByOverlapCount.length === 1 && (options === null || options === void 0 ? void 0 : options.autocomplete)) {
            return autoCompletionsByOverlapCount[0].target;
        }
        return autoCompletionsByOverlapCount[0].target.substr(0, autoCompletionsByOverlapCount[0].count);
    };
    var formatAsMasked = function(value, valueCharMaskMatch, mask) {
        var valStr = String(value);
        var withMask = mask;
        if (valStr.trim() === "") {
            return "";
        }
        valStr.replace(valueCharMaskMatch, function(match) {
            withMask = withMask.replace(PLACEHOLDER, match);
            return match;
        });
        return withMask.split(PLACEHOLDER)[0];
    };
    var createMaskedNumericFormatter = function(name, mask) {
        return {
            name: name,
            format: function(value, options) {
                if (typeof value !== "string") {
                    return value;
                }
                if ((options === null || options === void 0 ? void 0 : options.exceptions) && options.exceptions.length > 0) {
                    var formattedUsingExceptions = formatAsEnum(value, options.exceptions, {
                        autocomplete: true,
                        ignoreCase: true
                    });
                    if (formattedUsingExceptions !== void 0) {
                        return formattedUsingExceptions;
                    }
                }
                return formatAsMasked(value, /\d/g, mask);
            },
            deformat: function(value, options) {
                if (typeof value !== "string") {
                    return value;
                }
                if ((options === null || options === void 0 ? void 0 : options.exceptions) && options.exceptions.length > 0) {
                    var usingExceptions = formatAsEnum(value, options.exceptions, {
                        autocomplete: false,
                        ignoreCase: false
                    });
                    if (usingExceptions !== void 0) {
                        return usingExceptions;
                    }
                }
                return formatAsMasked(value, /\d/g, mask.replace(/[^#]/g, ""));
            }
        };
    };
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/common-types/core/src/formats/index.ts
    var LENGTH_OF_MAX_INT = String(Number.MAX_SAFE_INTEGER).split("").length;
    var integer2 = {
        name: "integer",
        /** Converts any integer to a string */ format: function(value) {
            var _integer2_deformat;
            if (value === "-") {
                return value;
            }
            var _integer2_deformat1;
            var formatted = (_integer2_deformat1 = (_integer2_deformat = integer2.deformat) === null || _integer2_deformat === void 0 ? void 0 : _integer2_deformat.call(integer2, value)) !== null && _integer2_deformat1 !== void 0 ? _integer2_deformat1 : value;
            if (typeof formatted === "number") {
                return String(formatted);
            }
            return "";
        },
        /** Converts any string or number to an integer */ deformat: function(value) {
            if (typeof value === "number") {
                return Math.floor(value) + 0;
            }
            if (typeof value !== "string") {
                return;
            }
            var isNeg = value.replace(/[^0-9.-]/g, "").charAt(0) === "-";
            var digits = value.replace(/[^0-9.]/g, "");
            var decimalPlace = digits.indexOf(".");
            if (decimalPlace > -1) {
                digits = digits.substring(0, decimalPlace);
            }
            if (digits.length === 0) {
                return;
            }
            digits = digits.substr(0, LENGTH_OF_MAX_INT);
            var num = Number("".concat(isNeg ? "-" : "").concat(digits));
            return Math.floor(num) + 0;
        }
    };
    var commaNumber = {
        name: "commaNumber",
        /** Go from number to number w/ commas */ format: function(_value, options) {
            if (_value === void 0 || _value === "") {
                return _value;
            }
            if (typeof _value !== "string" && typeof _value !== "number") {
                return "";
            }
            var value = String(_value);
            var isNeg = value.replace(/[^0-9.-]/g, "").charAt(0) === "-";
            var digitAndDecimal = value.replace(/[^0-9.]/g, "");
            digitAndDecimal = digitAndDecimal.replace(/^(0*)((0.)?\d)/g, "$2");
            var firstDecimal = digitAndDecimal.indexOf(".");
            var digitsOnly = digitAndDecimal.replace(/[^0-9]/g, "");
            var preDecDigits = digitsOnly;
            var postDecDigits = "";
            if (firstDecimal >= 0) {
                preDecDigits = digitsOnly.substring(0, firstDecimal).substr(0, LENGTH_OF_MAX_INT);
                postDecDigits = digitsOnly.substring(firstDecimal);
            } else {
                preDecDigits = preDecDigits.substr(0, LENGTH_OF_MAX_INT);
            }
            if ((options === null || options === void 0 ? void 0 : options.precision) !== void 0) {
                postDecDigits = postDecDigits.substring(0, options.precision).padEnd(options.precision, "0");
            }
            preDecDigits = preDecDigits.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            if (preDecDigits === "" && firstDecimal === 0) {
                preDecDigits = "0";
            }
            var retVal = preDecDigits;
            if (isNeg) {
                retVal = "-".concat(retVal);
            }
            if ((firstDecimal >= 0 || (options === null || options === void 0 ? void 0 : options.precision) !== void 0) && postDecDigits !== "") {
                retVal += ".".concat(postDecDigits);
            }
            return retVal;
        },
        /** Go from string with comma's to numbers */ deformat: function(value) {
            if (typeof value !== "string") {
                return value;
            }
            var strValue = value.replace(/,/g, "");
            if (strValue === "") {
                return void 0;
            }
            var number = Number(strValue);
            return isNaN(number) || number > Number.MAX_SAFE_INTEGER || number < Number.MIN_SAFE_INTEGER ? void 0 : number;
        }
    };
    var date = {
        name: "date",
        format: function(_value, options) {
            var _options_mask;
            var value = typeof _value === "number" ? String(_value) : _value;
            if (_value === void 0) {
                return void 0;
            }
            if (typeof value !== "string" || value === "") {
                return "";
            }
            if (value.match(/^\d{4}[-]\d{1,2}[-]\d{1,2}$/)) {
                var tempVal = value.split("-");
                value = "".concat(tempVal[1], "/").concat(tempVal[2], "/").concat(tempVal[0]);
            }
            var _options_mask_toUpperCase;
            var dateFormat = (_options_mask_toUpperCase = options === null || options === void 0 ? void 0 : (_options_mask = options.mask) === null || _options_mask === void 0 ? void 0 : _options_mask.toUpperCase()) !== null && _options_mask_toUpperCase !== void 0 ? _options_mask_toUpperCase : "MM/DD/YYYY";
            var delimiter = dateFormat.replace(/[^/.-]/g, "").charAt(0);
            var formatParts = dateFormat.split(delimiter);
            var valueParts = value.split(delimiter);
            var processedValueParts = [];
            var lastMatchIsFull = true;
            for(var index = 0; index < valueParts.length; index++){
                var part = valueParts[index];
                if (lastMatchIsFull && index < formatParts.length) {
                    part = part.replace(/[^0-9]/g, "");
                    var isLastExpectedField = formatParts.length - 1 === index;
                    var hasDelimiterAfter = valueParts.length - 1 > index;
                    var curFormat = formatParts[index];
                    if (curFormat === "YYYY") {
                        if (part.length > 4) {
                            valueParts[index + 1] = [
                                "*",
                                part.substring(4),
                                valueParts[index + 1]
                            ].join("");
                            part = part.substring(0, 4);
                        }
                        if (part.length === 4) {
                            lastMatchIsFull = true;
                            processedValueParts.push(part);
                        }
                        if (part.length === 3) {
                            if (isLastExpectedField || !hasDelimiterAfter) {
                                lastMatchIsFull = false;
                                processedValueParts.push(part);
                            } else {
                                valueParts[index + 1] = "*".concat(part.substring(2)).concat(valueParts[index + 1]);
                                part = part.substring(0, 2);
                            }
                        }
                        if (part.length === 2) {
                            var autocomplete = void 0;
                            if (part.length === 2 && (hasDelimiterAfter || isLastExpectedField && part !== "19" && part !== "20")) {
                                autocomplete = "20".concat(part);
                                if (part > (/* @__PURE__ */ new Date().getFullYear() + 5).toString().substring(2)) {
                                    autocomplete = "19".concat(part);
                                }
                            }
                            if (autocomplete) {
                                lastMatchIsFull = true;
                                processedValueParts.push(autocomplete);
                            } else {
                                lastMatchIsFull = false;
                                processedValueParts.push(part);
                            }
                        }
                        if (part.length === 1 || part.length === 0) {
                            lastMatchIsFull = false;
                            processedValueParts.push(part);
                        }
                    } else if (curFormat === "YY") {
                        if (part.length > 2) {
                            valueParts[index + 1] = [
                                "*",
                                part.substring(2),
                                valueParts[index + 1]
                            ].join("");
                            part = part.substring(0, 2);
                        }
                        if (part.length === 2) {
                            lastMatchIsFull = true;
                            processedValueParts.push(part);
                        }
                        if (part.length === 1 || part.length === 0) {
                            lastMatchIsFull = false;
                            processedValueParts.push(part);
                        }
                    } else {
                        if (part.length > 2) {
                            valueParts[index + 1] = [
                                "*",
                                part.substring(2),
                                valueParts[index + 1]
                            ].join("");
                            part = part.substring(0, 2);
                        }
                        if (part.length === 2) {
                            if (part === "00" && !hasDelimiterAfter) {
                                lastMatchIsFull = false;
                                processedValueParts.push("0");
                            } else {
                                lastMatchIsFull = true;
                                processedValueParts.push(part);
                            }
                        }
                        if (part.length === 1) {
                            if (hasDelimiterAfter) {
                                lastMatchIsFull = true;
                                processedValueParts.push("0".concat(part));
                            } else {
                                lastMatchIsFull = false;
                                processedValueParts.push(part);
                            }
                        }
                        if (part.length === 0) {
                            lastMatchIsFull = false;
                            processedValueParts.push(part);
                        }
                    }
                }
            }
            return processedValueParts.join(delimiter);
        }
    };
    var currency = {
        name: "currency",
        format: function(_value, options) {
            var value = typeof _value === "number" ? String(_value) : _value;
            var _ref = options !== null && options !== void 0 ? options : {}, _ref_currencySymbol = _ref.currencySymbol, currencySymbol = _ref_currencySymbol === void 0 ? "" : _ref_currencySymbol, _ref_useParensForNeg = _ref.useParensForNeg, useParensForNeg = _ref_useParensForNeg === void 0 ? false : _ref_useParensForNeg, _ref_precision = _ref.precision, precision = _ref_precision === void 0 ? 2 : _ref_precision;
            if (value === void 0 || value === "") {
                return value;
            }
            if (typeof value !== "string") {
                return value;
            }
            var sign = /^\s*-/.test(value) ? -1 : 1;
            var dotIndex = value.indexOf(".");
            var preDecimal;
            var postDecimal;
            if (dotIndex >= 0) {
                preDecimal = value.substr(0, dotIndex).replace(/\D+/g, "");
                postDecimal = value.substr(dotIndex + 1).replace(/\D+/g, "");
            } else {
                preDecimal = value.replace(/\D+/g, "");
                postDecimal = "0";
            }
            var numericalValue = sign * Number("".concat(preDecimal, ".").concat(postDecimal));
            var fixedString = numericalValue.toFixed(precision);
            var prettyString = fixedString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            if (prettyString.charAt(0) === "-") {
                if (useParensForNeg) {
                    return "(".concat(currencySymbol).concat(prettyString.substring(1), ")");
                }
                return "-".concat(currencySymbol).concat(prettyString.substring(1));
            }
            return currencySymbol + prettyString;
        },
        deformat: function(value, options) {
            var _commaNumber_deformat;
            if (typeof value === "number") {
                return value;
            }
            if (typeof value !== "string") {
                return void 0;
            }
            var deformatted = value;
            if (options === null || options === void 0 ? void 0 : options.currencySymbol) {
                deformatted = value.replace(options.currencySymbol, "");
            }
            return (_commaNumber_deformat = commaNumber.deformat) === null || _commaNumber_deformat === void 0 ? void 0 : _commaNumber_deformat.call(commaNumber, deformatted);
        }
    };
    var basePhoneFormatter = createMaskedNumericFormatter("phone", "(###) ###-####");
    var phone2 = _object_spread_props(_object_spread({}, basePhoneFormatter), {
        deformat: function(value) {
            var _basePhoneFormatter_deformat;
            return (_basePhoneFormatter_deformat = basePhoneFormatter.deformat) === null || _basePhoneFormatter_deformat === void 0 ? void 0 : _basePhoneFormatter_deformat.call(basePhoneFormatter, value);
        },
        format: function(value) {
            var _basePhoneFormatter_format;
            var _basePhoneFormatter_format1;
            return (_basePhoneFormatter_format1 = (_basePhoneFormatter_format = basePhoneFormatter.format) === null || _basePhoneFormatter_format === void 0 ? void 0 : _basePhoneFormatter_format.call(basePhoneFormatter, value === "(" ? "" : value)) !== null && _basePhoneFormatter_format1 !== void 0 ? _basePhoneFormatter_format1 : value;
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/common-types/core/src/index.ts
    var CommonTypesPlugin = /*#__PURE__*/ function() {
        function CommonTypesPlugin() {
            _class_call_check(this, CommonTypesPlugin);
            this.name = "CommonTypes";
        }
        _create_class(CommonTypesPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    player.registerPlugin(new TypesProviderPlugin({
                        types: Object.values(types_exports),
                        formats: Object.values(formats_exports),
                        validators: Object.entries(validators_exports)
                    }));
                }
            }
        ]);
        return CommonTypesPlugin;
    }();
    return __toCommonJS(src_exports);
}();
//# sourceMappingURL=index.global.js.map