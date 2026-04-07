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
function _to_array(arr) {
    return _array_with_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_rest();
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
var CheckPathPlugin = function() {
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
    var createMatcher = // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/check-path/core/src/index.ts
    function createMatcher(match) {
        if (typeof match === "string" || typeof match === "number") {
            return createObjectMatcher({
                type: match
            });
        }
        if (typeof match === "function") {
            return match;
        }
        return createObjectMatcher(match);
    };
    var getParent = function getParent(node, viewInfo) {
        var working = node;
        while(working.parent && working.parent.type !== import_player.NodeType.Asset && working.parent.type !== import_player.NodeType.View){
            working = working.parent;
        }
        var parent = working.parent;
        if (parent && (parent.type === import_player.NodeType.Asset || parent.type === import_player.NodeType.View)) {
            return parent;
        }
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
            if (typeof module === "object") module.exports = SortedArray2;
            if (typeof define === "function" && define.amd) define(function() {
                return SortedArray2;
            });
        }
    });
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/check-path/core/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        CheckPathPlugin: function() {
            return CheckPathPlugin;
        }
    });
    var import_player = __toESM(require_player());
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
                if (typeof val === "object") {
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/k8-fastbuild/bin/plugins/check-path/core/src/symbols.ts
    var CheckPathPluginSymbol = Symbol.for("CheckPathPlugin");
    var CheckPathPlugin = /*#__PURE__*/ function() {
        function CheckPathPlugin() {
            _class_call_check(this, CheckPathPlugin);
            this.name = "check-path";
            this.symbol = CheckPathPluginSymbol;
        }
        _create_class(CheckPathPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    player.hooks.viewController.tap(this.name, function(viewController) {
                        viewController.hooks.view.tap(_this.name, function(view) {
                            view.hooks.resolver.tap(_this.name, function(resolver) {
                                var viewInfo = {
                                    resolvedMap: /* @__PURE__ */ new Map(),
                                    assetIdMap: /* @__PURE__ */ new Map(),
                                    resolver: resolver
                                };
                                _this.viewInfo = viewInfo;
                                resolver.hooks.afterResolve.tap(_this.name, function(value, node) {
                                    var sourceNode = _this.getSourceAssetNode(node);
                                    if (sourceNode) {
                                        viewInfo.resolvedMap.set(sourceNode, {
                                            resolved: node,
                                            value: value
                                        });
                                        if (node.type === import_player.NodeType.Asset || node.type === import_player.NodeType.View) {
                                            var id = dlv_es_default(value, "id");
                                            if (id) {
                                                viewInfo.assetIdMap.set(id, node);
                                            }
                                        }
                                    }
                                    return value;
                                });
                            });
                        });
                    });
                }
            },
            {
                /**
     * Starts at the asset with the given id, and walks backwards _up_ the tree until it finds a match for the parent
     *
     * @param id - The id of the asset to _start_ at
     * @param query - A means of matching a parent asset
     * @returns - The parent object if a match is found, else undefined
     */ key: "getParent",
                value: function getParent1(id, query) {
                    var _this_viewInfo;
                    var assetNode = (_this_viewInfo = this.viewInfo) === null || _this_viewInfo === void 0 ? void 0 : _this_viewInfo.assetIdMap.get(id);
                    if (!assetNode || !this.viewInfo) {
                        return void 0;
                    }
                    var potentialMatch = getParent(assetNode);
                    if (query === void 0) {
                        if (potentialMatch) {
                            return this.getAssetFromAssetNode(potentialMatch);
                        }
                        return;
                    }
                    var queryArray = Array.isArray(query) ? _to_consumable_array(query) : [
                        query
                    ];
                    var parentQuery = queryArray.shift();
                    var depth = 0;
                    while(potentialMatch && parentQuery){
                        if (depth++ >= 50) {
                            throw new Error("Recursion depth exceeded. Check for cycles in the AST graph");
                        }
                        var matcher = createMatcher(parentQuery);
                        var resolved = this.getAssetFromAssetNode(potentialMatch);
                        if (resolved && matcher(resolved)) {
                            if (queryArray.length === 0) {
                                return resolved;
                            }
                            parentQuery = queryArray.shift();
                        }
                        potentialMatch = getParent(potentialMatch);
                    }
                    return void 0;
                }
            },
            {
                /**
     * Returns the property that the asset resides on relative to it's parent
     *
     * @param id - The id of the asset to _start_ at
     * @returns - The property name or undefined if no parent was found
     */ key: "getParentProp",
                value: function getParentProp(id) {
                    var _this_viewInfo;
                    var assetNode = (_this_viewInfo = this.viewInfo) === null || _this_viewInfo === void 0 ? void 0 : _this_viewInfo.assetIdMap.get(id);
                    if (!assetNode || !this.viewInfo) {
                        return;
                    }
                    var working = assetNode;
                    var parent;
                    while(working){
                        parent = working === null || working === void 0 ? void 0 : working.parent;
                        if (parent && (parent.type === import_player.NodeType.Asset || parent.type === import_player.NodeType.View)) {
                            break;
                        }
                        working = working === null || working === void 0 ? void 0 : working.parent;
                    }
                    if (parent && "children" in parent) {
                        var _parent_children, _childProp_path;
                        var childProp = (_parent_children = parent.children) === null || _parent_children === void 0 ? void 0 : _parent_children.find(function(child) {
                            return child.value === working;
                        });
                        return childProp === null || childProp === void 0 ? void 0 : (_childProp_path = childProp.path) === null || _childProp_path === void 0 ? void 0 : _childProp_path[0];
                    }
                    return void 0;
                }
            },
            {
                /** Given a node, return itself, or the nested asset if the node is an applicability node */ key: "getSourceAssetNode",
                value: function getSourceAssetNode(node) {
                    var _this_viewInfo;
                    var sourceNode = (_this_viewInfo = this.viewInfo) === null || _this_viewInfo === void 0 ? void 0 : _this_viewInfo.resolver.getSourceNode(node);
                    if ((sourceNode === null || sourceNode === void 0 ? void 0 : sourceNode.type) === "applicability") {
                        sourceNode = sourceNode.value;
                    }
                    return sourceNode;
                }
            },
            {
                /**
     * Given the starting node, check to verify that the supplied queries are relevant to the current asset's parents.
     *
     * @param id - The id of the asset to _start_ at
     * @returns - true if the context applies, false if it doesn't
     */ key: "hasParentContext",
                value: function hasParentContext(id, query) {
                    return Boolean(this.getParent(id, query));
                }
            },
            {
                /** Search the node for any matching paths in the graph that match the query  */ key: "findChildPath",
                value: function findChildPath(node, query) {
                    var _this = this;
                    var includeSelfMatch = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
                    var _node_children;
                    if (query.length === 0) {
                        return true;
                    }
                    var _query = _to_array(query), first = _query[0], rest = _query.slice(1);
                    var matcher = createMatcher(first);
                    if (node.type === import_player.NodeType.Asset || node.type === import_player.NodeType.View || node.type === import_player.NodeType.Applicability) {
                        var resolvedValue = this.getResolvedValue(node);
                        var _ref;
                        var includesSelf = (_ref = includeSelfMatch && matcher(resolvedValue)) !== null && _ref !== void 0 ? _ref : false;
                        var childQuery = includesSelf ? rest : query;
                        if (childQuery.length === 0 && includesSelf) {
                            return true;
                        }
                        var children = node.type === import_player.NodeType.Applicability ? node.value.children : node.children;
                        if (childQuery.length && (!children || children.length === 0)) {
                            return false;
                        }
                        if (children === null || children === void 0 ? void 0 : children.some(function(childNode) {
                            return _this.findChildPath(childNode.value, childQuery);
                        })) {
                            return true;
                        }
                    } else if (node.type === import_player.NodeType.MultiNode && node.values.some(function(childNode) {
                        return _this.findChildPath(childNode, query);
                    })) {
                        return true;
                    } else if ("children" in node && ((_node_children = node.children) === null || _node_children === void 0 ? void 0 : _node_children.some(function(childNode) {
                        return _this.findChildPath(childNode.value, query);
                    }))) {
                        return true;
                    }
                    return false;
                }
            },
            {
                /**
     * Given the starting node, check to verify that the supplied queries are relevant to the current asset's children.
     *
     * @param id - The id of the asset to _start_ at
     * @returns - true if the context applies, false if it doesn't
     */ key: "hasChildContext",
                value: function hasChildContext(id, query) {
                    var _this_viewInfo;
                    var assetNode = (_this_viewInfo = this.viewInfo) === null || _this_viewInfo === void 0 ? void 0 : _this_viewInfo.assetIdMap.get(id);
                    var queryArray = Array.isArray(query) ? _to_consumable_array(query) : [
                        query
                    ];
                    if (!assetNode) {
                        return false;
                    }
                    return this.findChildPath(assetNode, queryArray, false);
                }
            },
            {
                /** Get the asset represented by id */ key: "getAsset",
                value: function getAsset(id) {
                    var _this_viewInfo;
                    var assetNode = (_this_viewInfo = this.viewInfo) === null || _this_viewInfo === void 0 ? void 0 : _this_viewInfo.assetIdMap.get(id);
                    if (!assetNode) return;
                    return this.getAssetFromAssetNode(assetNode);
                }
            },
            {
                /**
     * Gets the value for an asset from an asset node
     */ key: "getAssetFromAssetNode",
                value: function getAssetFromAssetNode(assetNode) {
                    var _this_viewInfo_resolvedMap_get, _this_viewInfo;
                    var sourceNode = this.getSourceAssetNode(assetNode);
                    if (!sourceNode) return;
                    return (_this_viewInfo = this.viewInfo) === null || _this_viewInfo === void 0 ? void 0 : (_this_viewInfo_resolvedMap_get = _this_viewInfo.resolvedMap.get(sourceNode)) === null || _this_viewInfo_resolvedMap_get === void 0 ? void 0 : _this_viewInfo_resolvedMap_get.value;
                }
            },
            {
                /**
     * Get the path of the asset in the view upto
     * the asset that matches the query or to the view if no query is provided
     */ key: "getPath",
                value: function getPath(id, query) {
                    var _this = this;
                    var _this_viewInfo;
                    var assetNode = (_this_viewInfo = this.viewInfo) === null || _this_viewInfo === void 0 ? void 0 : _this_viewInfo.assetIdMap.get(id);
                    if (!assetNode || !this.viewInfo) {
                        return;
                    }
                    var path = [];
                    var queryArray = [];
                    if (query) {
                        queryArray = Array.isArray(query) ? _to_consumable_array(query) : [
                            query
                        ];
                    }
                    var parentQuery = queryArray.shift();
                    var working = assetNode;
                    var findWorkingChild = function(parent) {
                        var _parent_children;
                        return (_parent_children = parent.children) === null || _parent_children === void 0 ? void 0 : _parent_children.find(function(n) {
                            return n.value === working;
                        });
                    };
                    while(working !== void 0){
                        var parent = working.parent;
                        if (parent) {
                            if (parent.type === import_player.NodeType.MultiNode) {
                                var index = parent.values.indexOf(working);
                                if (index !== -1) {
                                    var actualIndex = index - parent.values.slice(0, index).reduce(function(undefCount, next) {
                                        return _this.getResolvedValue(next) === void 0 ? undefCount + 1 : undefCount;
                                    }, 0);
                                    path = [
                                        actualIndex
                                    ].concat(_to_consumable_array(path));
                                }
                            } else if ("children" in parent) {
                                var childProp = findWorkingChild(parent);
                                var _childProp_path;
                                path = _to_consumable_array((_childProp_path = childProp === null || childProp === void 0 ? void 0 : childProp.path) !== null && _childProp_path !== void 0 ? _childProp_path : []).concat(_to_consumable_array(path));
                            }
                            if (parentQuery) {
                                var matcher = createMatcher(parentQuery);
                                if (matcher(this.getResolvedValue(parent))) {
                                    parentQuery = queryArray.shift();
                                    if (!parentQuery) return path;
                                }
                            }
                        }
                        working = working.parent;
                    }
                    return parentQuery ? void 0 : path;
                }
            },
            {
                key: "getResolvedValue",
                value: function getResolvedValue(node) {
                    var _this_viewInfo_resolvedMap_get, _this_viewInfo;
                    var sourceNode = this.getSourceAssetNode(node);
                    return (_this_viewInfo = this.viewInfo) === null || _this_viewInfo === void 0 ? void 0 : (_this_viewInfo_resolvedMap_get = _this_viewInfo.resolvedMap.get(sourceNode !== null && sourceNode !== void 0 ? sourceNode : node)) === null || _this_viewInfo_resolvedMap_get === void 0 ? void 0 : _this_viewInfo_resolvedMap_get.value;
                }
            }
        ]);
        return CheckPathPlugin;
    }();
    return __toCommonJS(src_exports);
}();
//# sourceMappingURL=index.global.js.map