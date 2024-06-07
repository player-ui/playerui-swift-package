"use strict";
var PubSubPlugin = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/pubsub/core/src/index.ts
  var src_exports = {};
  __export(src_exports, {
    PubSubHandlerPlugin: () => PubSubHandlerPlugin,
    PubSubPlugin: () => PubSubPlugin,
    PubSubPluginSymbol: () => PubSubPluginSymbol
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/pubsub/core/src/pubsub.ts
  function splitEvent(event) {
    return event.split(".").reduce((prev, curr, index) => {
      if (index === 0) {
        return [curr];
      }
      return [...prev, `${prev[index - 1]}.${curr}`];
    }, []);
  }
  var count = 1;
  var TinyPubSub = class {
    constructor() {
      this.events = /* @__PURE__ */ new Map();
      this.tokens = /* @__PURE__ */ new Map();
    }
    /**
     * Publish an event with any number of additional arguments
     */
    publish(event, ...args) {
      if (typeof event !== "string") {
        return;
      }
      if (event.includes(".")) {
        const eventKeys = splitEvent(event);
        eventKeys.forEach((key) => {
          this.deliver(key, event, ...args);
        });
      } else {
        this.deliver(event, event, ...args);
      }
      this.deliver("*", event, ...args);
    }
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
     */
    subscribe(event, handler) {
      const uuid = `uuid_${++count}`;
      if (typeof event === "string") {
        if (!this.events.has(event)) {
          this.events.set(event, /* @__PURE__ */ new Map());
        }
        const handlers = this.events.get(event);
        handlers.set(uuid, handler);
        this.tokens.set(uuid, event);
      }
      return uuid;
    }
    /**
     * Unsubscribes to a specific subscription given it's symbol or an entire
     * event when passed as a string.
     *
     * When existing subscriptions exist for heirarchical events such as 'a.b.c',
     * when passing an event 'a' to unsubscribe, all subscriptions for 'a', 'a.b',
     * & 'a.b.c' will be unsubscribed as well.
     */
    unsubscribe(value) {
      if (typeof value === "string" && value.startsWith("uuid")) {
        const path = this.tokens.get(value);
        if (typeof path === "undefined") {
          return;
        }
        const innerPath = this.events.get(path);
        innerPath?.delete(value);
        this.tokens.delete(value);
        return;
      }
      if (typeof value === "string") {
        for (const key of this.events.keys()) {
          if (key.indexOf(value) === 0) {
            const tokens = this.events.get(key);
            if (tokens && tokens.size) {
              for (const token of tokens.keys()) {
                this.tokens.delete(token);
              }
            }
            this.events.delete(key);
          }
        }
      }
    }
    /**
     * Get the number of subscriptions for a specific event, or when left blank
     * will return the overall number of subscriptions for the entire pubsub.
     */
    count(event) {
      let counter = 0;
      if (typeof event === "undefined") {
        for (const handlers2 of this.events.values()) {
          counter += handlers2.size;
        }
        return counter;
      }
      const handlers = this.events.get(event);
      if (handlers?.size) {
        return handlers.size;
      }
      return counter;
    }
    /**
     * Deletes all existing subscriptions
     */
    clear() {
      this.events.clear();
      this.tokens.clear();
    }
    deliver(path, event, ...args) {
      const handlers = this.events.get(path);
      if (handlers && handlers.size) {
        for (const handler of handlers.values()) {
          handler(event, ...args);
        }
      }
    }
  };
  var pubsub = new TinyPubSub();

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/pubsub/core/src/symbols.ts
  var PubSubPluginSymbol = Symbol.for("PubSubPlugin");

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/pubsub/core/src/plugin.ts
  var _PubSubPlugin = class _PubSubPlugin {
    constructor(config) {
      this.name = "pub-sub";
      this.symbol = _PubSubPlugin.Symbol;
      this.expressionName = config?.expressionName ?? "publish";
      this.pubsub = pubsub;
    }
    apply(player) {
      const existing = player.findPlugin(PubSubPluginSymbol);
      if (existing !== void 0) {
        this.pubsub = existing.pubsub;
      }
      player.hooks.expressionEvaluator.tap(this.name, (expEvaluator) => {
        const existingExpression = expEvaluator.operators.expressions.get(
          this.expressionName
        );
        if (existingExpression) {
          player.logger.warn(
            `[PubSubPlugin] expression ${this.expressionName} is already registered.`
          );
        } else {
          expEvaluator.addExpressionFunction(
            this.expressionName,
            (_ctx, event, ...args) => {
              if (typeof event === "string") {
                this.publish(event, ...args);
              }
            }
          );
        }
      });
      player.hooks.onEnd.tap(this.name, () => {
        this.clear();
      });
    }
    /**
     * A way of publishing an event, notifying any listeners
     *
     * @param event - The name of the event to publish. Can take sub-topics like: foo.bar
     * @param data - Any additional data to attach to the event
     */
    publish(event, ...args) {
      this.pubsub.publish(event, ...args);
    }
    /**
     * Subscribe to an event with the given name. The handler will get called for any published event
     *
     * @param event - The name of the event to subscribe to
     * @param handler - A function to be called when the event is triggered
     * @returns A token to be used to unsubscribe from the event
     */
    subscribe(event, handler) {
      return this.pubsub.subscribe(event, handler);
    }
    /**
     * Remove any subscriptions using the given token
     *
     * @param token - A token from a `subscribe` call
     */
    unsubscribe(token) {
      this.pubsub.unsubscribe(token);
    }
    /**
     * Remove all subscriptions
     */
    clear() {
      this.pubsub.clear();
    }
  };
  _PubSubPlugin.Symbol = PubSubPluginSymbol;
  var PubSubPlugin = _PubSubPlugin;

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/pubsub/core/src/utils.ts
  function getPubSubPlugin(player) {
    const existing = player.findPlugin(PubSubPluginSymbol);
    const plugin = existing || new PubSubPlugin();
    if (!existing) {
      player.registerPlugin(plugin);
    }
    return plugin;
  }

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/pubsub/core/src/handler.ts
  var PubSubHandlerPlugin = class {
    constructor(subscriptions) {
      this.name = "pubsub-handler";
      this.subscriptions = subscriptions;
    }
    apply(player) {
      const pubsub2 = getPubSubPlugin(player);
      player.hooks.onStart.tap(this.name, () => {
        this.subscriptions.forEach((handler, key) => {
          pubsub2.subscribe(key, (_, ...args) => {
            const state = player.getState();
            if (state.status === "in-progress") {
              return handler(state, ...args);
            }
            player.logger.info(
              `[PubSubHandlerPlugin] subscriber for ${key} was called when player was not in-progress`
            );
          });
        });
      });
    }
  };
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=index.global.js.map