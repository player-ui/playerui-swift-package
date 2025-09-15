"use strict";
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
var PartialMatchFingerprintPlugin = function() {
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/partial-match-fingerprint/core/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        PartialMatchFingerprintPlugin: function() {
            return PartialMatchFingerprintPlugin;
        }
    });
    var PartialMatchFingerprintPlugin = /*#__PURE__*/ function() {
        function PartialMatchFingerprintPlugin(registry) {
            _class_call_check(this, PartialMatchFingerprintPlugin);
            this.name = "partial-match-fingerprint";
            this.registry = registry;
            this.mapping = /* @__PURE__ */ new Map();
        }
        _create_class(PartialMatchFingerprintPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    player.hooks.viewController.tap(this.name, function(viewController) {
                        viewController.hooks.view.tap(_this.name, function(view) {
                            view.hooks.resolver.tap(_this.name, function(resolver) {
                                resolver.hooks.afterResolve.tap(_this.name, function(resolved, node) {
                                    if (resolved && node && node.type === "asset" || node.type === "view") {
                                        _this.mapping.set(resolved.id, _this.registry.get(resolved));
                                    }
                                });
                            });
                        });
                    });
                }
            },
            {
                key: "register",
                value: function register(match, value) {
                    this.registry.set(match, value);
                }
            },
            {
                key: "get",
                value: function get(assetId) {
                    return this.mapping.get(assetId);
                }
            }
        ]);
        return PartialMatchFingerprintPlugin;
    }();
    return __toCommonJS(src_exports);
}();
//# sourceMappingURL=index.global.js.map