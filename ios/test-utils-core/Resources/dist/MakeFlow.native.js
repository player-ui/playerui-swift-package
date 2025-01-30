"use strict";
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
var MakeFlow = function() {
    var unwrapJSend = // ../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/core/make-flow/src/index.ts
    function unwrapJSend(obj) {
        var isJSend = "status" in obj && "data" in obj;
        if (isJSend) {
            return obj.data;
        }
        return obj;
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
    var __toCommonJS = function(mod) {
        return __copyProps(__defProp({}, "__esModule", {
            value: true
        }), mod);
    };
    // ../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/core/make-flow/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        ObjType: function() {
            return ObjType;
        },
        identify: function() {
            return identify;
        },
        makeFlow: function() {
            return makeFlow;
        }
    });
    // ../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/core/make-flow/src/identify.ts
    var ObjType = /* @__PURE__ */ function(ObjType2) {
        ObjType2[ObjType2["FLOW"] = 0] = "FLOW";
        ObjType2[ObjType2["ASSET"] = 1] = "ASSET";
        ObjType2[ObjType2["ASSET_WRAPPER"] = 2] = "ASSET_WRAPPER";
        ObjType2[ObjType2["UNKNOWN"] = 3] = "UNKNOWN";
        return ObjType2;
    }(ObjType || {});
    function identify(obj) {
        if ("id" in obj && "type" in obj) {
            return 1 /* ASSET */ ;
        }
        if ("asset" in obj && identify(obj.asset) === 1 /* ASSET */ ) {
            return 2 /* ASSET_WRAPPER */ ;
        }
        if ("navigation" in obj || "schema" in obj || "views" in obj) {
            return 0 /* FLOW */ ;
        }
        return 3 /* UNKNOWN */ ;
    }
    var createDefaultNav = function(flow, options) {
        if ((flow.navigation === void 0 || flow.navigation === null) && Array.isArray(flow.views) && flow.views.length === 1) {
            var _flow_views__id, _options_outcome;
            var navFlow = {
                startState: "VIEW_0",
                VIEW_0: {
                    state_type: "VIEW",
                    ref: (_flow_views__id = flow.views[0].id) !== null && _flow_views__id !== void 0 ? _flow_views__id : "".concat(flow.id, "-views-0"),
                    transitions: {
                        "*": "END_done",
                        Prev: "END_back"
                    }
                },
                END_done: {
                    state_type: "END",
                    outcome: (_options_outcome = options === null || options === void 0 ? void 0 : options.outcome) !== null && _options_outcome !== void 0 ? _options_outcome : "doneWithFlow"
                },
                END_back: {
                    state_type: "END",
                    outcome: "BACK"
                }
            };
            if ((options === null || options === void 0 ? void 0 : options.onStart) !== void 0) {
                navFlow.onStart = options.onStart;
            }
            if ((options === null || options === void 0 ? void 0 : options.onEnd) !== void 0) {
                navFlow.onEnd = options.onEnd;
            }
            return _object_spread_props(_object_spread({}, flow), {
                navigation: {
                    BEGIN: "Flow",
                    Flow: navFlow
                }
            });
        }
        return flow;
    };
    function makeFlow(obj, args) {
        var objified = unwrapJSend(typeof obj === "string" ? JSON.parse(obj) : obj);
        if (Array.isArray(objified)) {
            var collection = {
                id: "collection",
                type: "collection",
                values: objified.map(function(v) {
                    var type2 = identify(v);
                    if (type2 === 1 /* ASSET */ ) {
                        return {
                            asset: v
                        };
                    }
                    return v;
                })
            };
            return makeFlow(collection);
        }
        var type = identify(obj);
        if (type === 3 /* UNKNOWN */ ) {
            throw new Error("No clue how to convert this into a flow. Just do it yourself");
        }
        if (type === 0 /* FLOW */ ) {
            return createDefaultNav(obj, args);
        }
        if (type === 2 /* ASSET_WRAPPER */ ) {
            return makeFlow(obj.asset);
        }
        return {
            id: "generated-flow",
            views: [
                obj
            ],
            data: {},
            navigation: {
                BEGIN: "FLOW_1",
                FLOW_1: {
                    startState: "VIEW_1",
                    VIEW_1: {
                        state_type: "VIEW",
                        ref: obj.id,
                        transitions: {
                            "*": "END_Done"
                        }
                    },
                    END_Done: {
                        state_type: "END",
                        outcome: "done"
                    }
                }
            }
        };
    }
    return __toCommonJS(src_exports);
}();
//# sourceMappingURL=index.global.js.map