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
var StageRevertDataPlugin = function() {
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/stage-revert-data/core/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        StageRevertDataPlugin: function() {
            return StageRevertDataPlugin;
        }
    });
    var import_player = __toESM(require_player());
    var StageRevertDataPlugin = /*#__PURE__*/ function() {
        function StageRevertDataPlugin() {
            _class_call_check(this, StageRevertDataPlugin);
            this.name = "stage-revert-data-plugin";
        }
        _create_class(StageRevertDataPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    var dataController;
                    var commitTransitions;
                    var stageData;
                    var commitShadowModel = false;
                    var GatedDataMiddleware = new import_player.ValidationMiddleware(function() {
                        return commitShadowModel ? void 0 : {
                            message: "staging data",
                            severity: "error"
                        };
                    }, {
                        shouldIncludeInvalid: function() {
                            return true;
                        }
                    });
                    player.hooks.dataController.tap(this.name, function(dc) {
                        dataController = dc;
                        dc.hooks.resolveDataStages.tap(_this.name, function(dataPipeline) {
                            return stageData ? _to_consumable_array(dataPipeline).concat([
                                GatedDataMiddleware
                            ]) : _to_consumable_array(dataPipeline);
                        });
                    });
                    player.hooks.flowController.tap(this.name, function(flowController) {
                        flowController.hooks.flow.tap(_this.name, function(flow) {
                            flow.hooks.transition.tap(_this.name, function(from, to) {
                                if (from) {
                                    if (commitTransitions.includes(to.name)) {
                                        commitShadowModel = true;
                                        player.logger.debug("Shadow Model Data to be committed %s", GatedDataMiddleware.shadowModelPaths);
                                        dataController.set(GatedDataMiddleware.shadowModelPaths);
                                    }
                                    commitShadowModel = false;
                                    GatedDataMiddleware.shadowModelPaths.clear();
                                }
                            });
                        });
                    });
                    player.hooks.viewController.tap(this.name, function(vc) {
                        vc.hooks.resolveView.intercept({
                            call: function(view, id, state) {
                                var _state_attributes, _state_attributes1;
                                stageData = state === null || state === void 0 ? void 0 : (_state_attributes = state.attributes) === null || _state_attributes === void 0 ? void 0 : _state_attributes.stageData;
                                commitTransitions = state === null || state === void 0 ? void 0 : (_state_attributes1 = state.attributes) === null || _state_attributes1 === void 0 ? void 0 : _state_attributes1.commitTransitions;
                            }
                        });
                    });
                }
            }
        ]);
        return StageRevertDataPlugin;
    }();
    return __toCommonJS(src_exports);
}();
//# sourceMappingURL=index.global.js.map