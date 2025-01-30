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
var PubSubPlugin = function() {
    var splitEvent = // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/pubsub/core/src/pubsub.ts
    function splitEvent(event) {
        return event.split(".").reduce(function(prev, curr, index) {
            if (index === 0) {
                return [
                    curr
                ];
            }
            return _to_consumable_array(prev).concat([
                "".concat(prev[index - 1], ".").concat(curr)
            ]);
        }, []);
    };
    var getPubSubPlugin = // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/pubsub/core/src/utils.ts
    function getPubSubPlugin(player) {
        var existing = player.findPlugin(PubSubPluginSymbol);
        var plugin = existing || new PubSubPlugin();
        if (!existing) {
            player.registerPlugin(plugin);
        }
        return plugin;
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
    // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/pubsub/core/src/index.ts
    var src_exports = {};
    __export(src_exports, {
        PubSubHandlerPlugin: function() {
            return PubSubHandlerPlugin;
        },
        PubSubPlugin: function() {
            return PubSubPlugin;
        },
        PubSubPluginSymbol: function() {
            return PubSubPluginSymbol;
        }
    });
    var count = 1;
    var TinyPubSub = /*#__PURE__*/ function() {
        function TinyPubSub() {
            _class_call_check(this, TinyPubSub);
            this.events = /* @__PURE__ */ new Map();
            this.tokens = /* @__PURE__ */ new Map();
        }
        _create_class(TinyPubSub, [
            {
                /**
     * Publish an event with any number of additional arguments
     */ key: "publish",
                value: function publish(event) {
                    var _this = this;
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    if (typeof event !== "string") {
                        return;
                    }
                    if (event.includes(".")) {
                        var eventKeys = splitEvent(event);
                        eventKeys.forEach(function(key) {
                            _this.deliver.apply(_this, [
                                key,
                                event
                            ].concat(_to_consumable_array(args)));
                        });
                    } else {
                        this.deliver.apply(this, [
                            event,
                            event
                        ].concat(_to_consumable_array(args)));
                    }
                    this.deliver.apply(this, [
                        "*",
                        event
                    ].concat(_to_consumable_array(args)));
                }
            },
            {
                /**
     * Subscribe to an event
     *
     * Events are also heirarchical when separated by a period. Given the following:
     *
     * publish('a.b.c', 'one', 'two', 'three)
     *
     * The subscribe event will be called when the event is passed as 'a', 'a.b', or 'a.b.c'.
     *
     * @example
     * // subscribes to the top level 'a' publish
     * subscribe('a', (event, ...args) => console.log(event, ...args))
     */ key: "subscribe",
                value: function subscribe(event, handler) {
                    var uuid = "uuid_".concat(++count);
                    if (typeof event === "string") {
                        if (!this.events.has(event)) {
                            this.events.set(event, /* @__PURE__ */ new Map());
                        }
                        var handlers = this.events.get(event);
                        handlers.set(uuid, handler);
                        this.tokens.set(uuid, event);
                    }
                    return uuid;
                }
            },
            {
                /**
     * Unsubscribes to a specific subscription given it's symbol or an entire
     * event when passed as a string.
     *
     * When existing subscriptions exist for heirarchical events such as 'a.b.c',
     * when passing an event 'a' to unsubscribe, all subscriptions for 'a', 'a.b',
     * & 'a.b.c' will be unsubscribed as well.
     */ key: "unsubscribe",
                value: function unsubscribe(value) {
                    if (typeof value === "string" && value.startsWith("uuid")) {
                        var path = this.tokens.get(value);
                        if (typeof path === "undefined") {
                            return;
                        }
                        var innerPath = this.events.get(path);
                        innerPath === null || innerPath === void 0 ? void 0 : innerPath.delete(value);
                        this.tokens.delete(value);
                        return;
                    }
                    if (typeof value === "string") {
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = this.events.keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var key = _step.value;
                                if (key.indexOf(value) === 0) {
                                    var tokens = this.events.get(key);
                                    if (tokens && tokens.size) {
                                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                                        try {
                                            for(var _iterator1 = tokens.keys()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                                var token = _step1.value;
                                                this.tokens.delete(token);
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
                                    }
                                    this.events.delete(key);
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
                }
            },
            {
                /**
     * Get the number of subscriptions for a specific event, or when left blank
     * will return the overall number of subscriptions for the entire pubsub.
     */ key: "count",
                value: function count(event) {
                    var counter = 0;
                    if (typeof event === "undefined") {
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = this.events.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var handlers2 = _step.value;
                                counter += handlers2.size;
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
                        return counter;
                    }
                    var handlers = this.events.get(event);
                    if (handlers === null || handlers === void 0 ? void 0 : handlers.size) {
                        return handlers.size;
                    }
                    return counter;
                }
            },
            {
                /**
     * Deletes all existing subscriptions
     */ key: "clear",
                value: function clear() {
                    this.events.clear();
                    this.tokens.clear();
                }
            },
            {
                key: "deliver",
                value: function deliver(path, event) {
                    for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                        args[_key - 2] = arguments[_key];
                    }
                    var handlers = this.events.get(path);
                    if (handlers && handlers.size) {
                        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                        try {
                            for(var _iterator = handlers.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                var handler = _step.value;
                                handler.apply(void 0, [
                                    event
                                ].concat(_to_consumable_array(args)));
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
            }
        ]);
        return TinyPubSub;
    }();
    var pubsub = new TinyPubSub();
    // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/pubsub/core/src/symbols.ts
    var PubSubPluginSymbol = Symbol.for("PubSubPlugin");
    // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/pubsub/core/src/plugin.ts
    var _PubSubPlugin = /*#__PURE__*/ function() {
        function _PubSubPlugin(config) {
            _class_call_check(this, _PubSubPlugin);
            this.name = "pub-sub";
            this.symbol = _PubSubPlugin.Symbol;
            var _config_expressionName;
            this.expressionName = (_config_expressionName = config === null || config === void 0 ? void 0 : config.expressionName) !== null && _config_expressionName !== void 0 ? _config_expressionName : "publish";
            this.pubsub = pubsub;
        }
        _create_class(_PubSubPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    var existing = player.findPlugin(PubSubPluginSymbol);
                    if (existing !== void 0) {
                        this.pubsub = existing.pubsub;
                    }
                    player.hooks.expressionEvaluator.tap(this.name, function(expEvaluator) {
                        var existingExpression = expEvaluator.operators.expressions.get(_this.expressionName);
                        if (existingExpression) {
                            player.logger.warn("[PubSubPlugin] expression ".concat(_this.expressionName, " is already registered."));
                        } else {
                            var _this1 = _this;
                            expEvaluator.addExpressionFunction(_this.expressionName, function(_ctx, event) {
                                for(var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++){
                                    args[_key - 2] = arguments[_key];
                                }
                                if (typeof event === "string") {
                                    _this1.publish.apply(_this1, [
                                        event
                                    ].concat(_to_consumable_array(args)));
                                }
                            });
                        }
                    });
                    player.hooks.onEnd.tap(this.name, function() {
                        _this.clear();
                    });
                }
            },
            {
                /**
     * A way of publishing an event, notifying any listeners
     *
     * @param event - The name of the event to publish. Can take sub-topics like: foo.bar
     * @param data - Any additional data to attach to the event
     */ key: "publish",
                value: function publish(event) {
                    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                        args[_key - 1] = arguments[_key];
                    }
                    var _this_pubsub;
                    (_this_pubsub = this.pubsub).publish.apply(_this_pubsub, [
                        event
                    ].concat(_to_consumable_array(args)));
                }
            },
            {
                /**
     * Subscribe to an event with the given name. The handler will get called for any published event
     *
     * @param event - The name of the event to subscribe to
     * @param handler - A function to be called when the event is triggered
     * @returns A token to be used to unsubscribe from the event
     */ key: "subscribe",
                value: function subscribe(event, handler) {
                    return this.pubsub.subscribe(event, handler);
                }
            },
            {
                /**
     * Remove any subscriptions using the given token
     *
     * @param token - A token from a `subscribe` call
     */ key: "unsubscribe",
                value: function unsubscribe(token) {
                    this.pubsub.unsubscribe(token);
                }
            },
            {
                /**
     * Remove all subscriptions
     */ key: "clear",
                value: function clear() {
                    this.pubsub.clear();
                }
            }
        ]);
        return _PubSubPlugin;
    }();
    _PubSubPlugin.Symbol = PubSubPluginSymbol;
    var PubSubPlugin = _PubSubPlugin;
    // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/pubsub/core/src/handler.ts
    var PubSubHandlerPlugin = /*#__PURE__*/ function() {
        function PubSubHandlerPlugin(subscriptions) {
            _class_call_check(this, PubSubHandlerPlugin);
            this.name = "pubsub-handler";
            this.subscriptions = subscriptions;
        }
        _create_class(PubSubHandlerPlugin, [
            {
                key: "apply",
                value: function apply(player) {
                    var _this = this;
                    var pubsub2 = getPubSubPlugin(player);
                    player.hooks.onStart.tap(this.name, function() {
                        _this.subscriptions.forEach(function(handler, key) {
                            pubsub2.subscribe(key, function(_) {
                                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                                    args[_key - 1] = arguments[_key];
                                }
                                var state = player.getState();
                                if (state.status === "in-progress") {
                                    return handler.apply(void 0, [
                                        state
                                    ].concat(_to_consumable_array(args)));
                                }
                                player.logger.info("[PubSubHandlerPlugin] subscriber for ".concat(key, " was called when player was not in-progress"));
                            });
                        });
                    });
                }
            }
        ]);
        return PubSubHandlerPlugin;
    }();
    return __toCommonJS(src_exports);
}();
//# sourceMappingURL=index.global.js.map