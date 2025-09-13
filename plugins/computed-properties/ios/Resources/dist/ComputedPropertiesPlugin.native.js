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
var ComputedPropertiesPlugin = function() {
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/computed-properties/core/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        ComputedPropertiesPlugin: function() {
            return ComputedPropertiesPlugin;
        }
    });
    var ComputedPropertiesPlugin = /*#__PURE__*/ function() {
        function ComputedPropertiesPlugin() {
            _class_call_check(this, ComputedPropertiesPlugin);
            this.name = "ComputedProperties";
        }
        _create_class(ComputedPropertiesPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    var schemaController;
                    var expressionEvaluator;
                    var getExpressionType = function(binding) {
                        var dataType = schemaController === null || schemaController === void 0 ? void 0 : schemaController.getType(binding);
                        if ((dataType === null || dataType === void 0 ? void 0 : dataType.type) === "Expression") {
                            return dataType;
                        }
                    };
                    var computedPropertyMiddleware = {
                        name: this.name,
                        get: function get(binding, options, next) {
                            var expType = getExpressionType(binding);
                            if (expType) {
                                var exp = expType.exp;
                                var result = exp && (expressionEvaluator === null || expressionEvaluator === void 0 ? void 0 : expressionEvaluator.evaluate(exp, options === null || options === void 0 ? void 0 : options.context));
                                return result !== null && result !== void 0 ? result : expType.default;
                            }
                            return next === null || next === void 0 ? void 0 : next.get(binding, options);
                        },
                        set: function set(transaction, options, next) {
                            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                            try {
                                for(var _iterator = transaction[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    var setOperation = _step.value;
                                    if (getExpressionType(setOperation[0])) {
                                        throw new Error("Invalid 'set' operation on computed property: ".concat(setOperation[0].asString()));
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
                            var _next_set;
                            return (_next_set = next === null || next === void 0 ? void 0 : next.set(transaction, options)) !== null && _next_set !== void 0 ? _next_set : [];
                        },
                        delete: function _delete(binding, options, next) {
                            if (getExpressionType(binding)) {
                                throw new Error("Invalid 'delete' operation on computed property: ".concat(binding.asString()));
                            }
                            return next === null || next === void 0 ? void 0 : next.delete(binding, options);
                        }
                    };
                    player.hooks.dataController.tap(this.name, function(dataController) {
                        dataController.hooks.resolveDataStages.tap(_this.name, function(dataPipeline) {
                            return _to_consumable_array(dataPipeline).concat([
                                computedPropertyMiddleware
                            ]);
                        });
                    });
                    player.hooks.schema.tap(this.name, function(schema) {
                        schemaController = schema;
                    });
                    player.hooks.expressionEvaluator.tap(this.name, function(evaluator) {
                        expressionEvaluator = evaluator;
                    });
                }
            }
        ]);
        return ComputedPropertiesPlugin;
    }();
    return __toCommonJS(src_exports);
}();
//# sourceMappingURL=index.global.js.map