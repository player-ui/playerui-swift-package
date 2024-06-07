"use strict";
var ReferenceAssetsPlugin = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
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
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/sorted-array@2.0.4/node_modules/sorted-array/sorted-array.js
  var require_sorted_array = __commonJS({
    "../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/sorted-array@2.0.4/node_modules/sorted-array/sorted-array.js"(exports, module) {
      "use strict";
      var SortedArray2 = function() {
        var SortedArray3 = defclass({
          constructor: function(array, compare) {
            this.array = [];
            this.compare = compare || compareDefault;
            var length = array.length, index = 0;
            while (index < length)
              this.insert(array[index++]);
          },
          insert: function(element) {
            var array = this.array, compare = this.compare, high = array.length - 1, low = 0, pos = -1, index, ordering;
            while (high >= low) {
              index = (high + low) / 2 >>> 0;
              ordering = compare(array[index], element);
              if (ordering < 0)
                low = index + 1;
              else if (ordering > 0)
                high = index - 1;
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
            while (pos < high && compare(element, array[pos]) === 0) {
              pos++;
            }
            index = array.length;
            array.push(element);
            while (index > pos) {
              array[index] = array[--index];
            }
            array[pos] = element;
            return this;
          },
          search: function(element) {
            var array = this.array, compare = this.compare, high = array.length - 1, low = 0, index, ordering;
            while (high >= low) {
              index = (high + low) / 2 >>> 0;
              ordering = compare(array[index], element);
              if (ordering < 0)
                low = index + 1;
              else if (ordering > 0)
                high = index - 1;
              else
                return index;
            }
            return -1;
          },
          remove: function(element) {
            var index = this.search(element);
            if (index >= 0)
              this.array.splice(index, 1);
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
          if (a < b)
            return -1;
          else if (a > b)
            return 1;
          else
            return 0;
        }
      }();
      if (typeof module === "object")
        module.exports = SortedArray2;
      if (typeof define === "function" && define.amd)
        define(function() {
          return SortedArray2;
        });
    }
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/reference-assets/core/src/index.ts
  var src_exports = {};
  __export(src_exports, {
    ReferenceAssetsPlugin: () => ReferenceAssetsPlugin,
    actionTransform: () => actionTransform,
    expPropTransform: () => expPropTransform,
    imageTransform: () => imageTransform,
    infoTransform: () => infoTransform,
    inputTransform: () => inputTransform,
    isBackAction: () => isBackAction
  });

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/reference-assets/core/src/assets/input/transform.ts
  var inputTransform = (asset, options) => {
    return {
      ...asset,
      format(val) {
        if (asset.binding === void 0) {
          return val;
        }
        return options.data.format(asset.binding, val);
      },
      set(val) {
        if (asset.binding === void 0) {
          return;
        }
        return options.data.model.set([[asset.binding, val]], {
          formatted: true
        });
      },
      value: asset.binding === void 0 ? "" : options.data.model.get(asset.binding, {
        includeInvalid: true,
        formatted: true
      }),
      validation: asset.binding === void 0 ? void 0 : options.validation?.get(asset.binding, { track: true }),
      dataType: asset.binding === void 0 ? void 0 : options.validation?.type(asset.binding)
    };
  };

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+partial-match-registry@0.0.0/node_modules/@player-ui/partial-match-registry/dist/index.mjs
  var import_sorted_array = __toESM(require_sorted_array(), 1);

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/dlv@1.1.3/node_modules/dlv/dist/dlv.es.js
  function dlv_es_default(t, e, l, n, r) {
    for (e = e.split ? e.split(".") : e, n = 0; n < e.length; n++)
      t = t ? t[e[n]] : r;
    return t === r ? l : t;
  }

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+partial-match-registry@0.0.0/node_modules/@player-ui/partial-match-registry/dist/index.mjs
  function traverseObj(object, path = [], pairs = /* @__PURE__ */ new Map()) {
    for (const key of Object.keys(object)) {
      const val = object[key];
      const nestedPath = [...path, key];
      "";
      if (typeof val === "object") {
        traverseObj(val, nestedPath, pairs);
      } else {
        pairs.set(nestedPath, val);
      }
    }
    return pairs;
  }
  function createMatcher(partialObj) {
    const pairs = traverseObj(partialObj);
    const matchFunction = (searchObj) => {
      for (const entry of Array.from(pairs)) {
        const [path, value] = entry;
        if (dlv_es_default(searchObj, path) !== value) {
          return false;
        }
      }
      return true;
    };
    matchFunction.count = pairs.size;
    return matchFunction;
  }
  function createBasicMatcher(seed) {
    const matcher = (match) => seed === match;
    matcher.count = 1;
    return matcher;
  }
  var createSortedArray = () => new import_sorted_array.default([], (c) => c.matcher.count);
  var Registry = class {
    constructor(initialSet) {
      this.store = createSortedArray();
      initialSet?.forEach(([match, value]) => {
        this.set(match, value);
      });
    }
    /** Add match -> value mapping to the registry */
    set(match, value) {
      const matcher = typeof match === "object" ? createMatcher(match) : createBasicMatcher(match);
      this.store.insert({
        key: match,
        value,
        matcher
      });
    }
    /** Fetch the best match in the registry */
    get(query) {
      for (const entry of this.store.array) {
        if (entry.matcher(query)) {
          return entry.value;
        }
      }
    }
    /** Loop over all entries and run callback */
    forEach(callbackfn) {
      for (const entry of this.store.array) {
        callbackfn(entry);
      }
    }
    /** Reset the items in the registry */
    clear() {
      this.store = createSortedArray();
    }
  };

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/@player-ui+asset-transform-plugin@0.0.0/node_modules/@player-ui/asset-transform-plugin/dist/index.mjs
  function composeTransforms(...args) {
    const [fn, ...fns] = args.reverse();
    return (asset, options, store) => {
      const value = fn(asset, options, store);
      if (!fns.length) {
        return value;
      }
      return fns.reduce((prevValue, current) => {
        return current(prevValue, options, store);
      }, value);
    };
  }
  function composeBefore(...args) {
    return {
      beforeResolve: composeTransforms(...args)
    };
  }
  function compose(...args) {
    const beforeResolveFns = [];
    const resolveFns = [];
    for (const arg of args) {
      if (typeof arg === "function") {
        resolveFns.push(arg);
      } else {
        if (arg?.resolve) {
          resolveFns.push(arg.resolve);
        }
        if (arg?.beforeResolve) {
          beforeResolveFns.push(arg.beforeResolve);
        }
      }
    }
    return {
      beforeResolve: beforeResolveFns.length ? composeTransforms(...beforeResolveFns) : void 0,
      resolve: resolveFns.length ? composeTransforms(...resolveFns) : void 0
    };
  }
  function maybeCompose(maybeFn) {
    if (typeof maybeFn === "object") {
      return maybeFn;
    }
    return compose(maybeFn);
  }
  function cleanupTransformRegistry(maybeRegistry) {
    if (Array.isArray(maybeRegistry)) {
      const wrappedTransforms = maybeRegistry.map(([key, value]) => {
        return [key, maybeCompose(value)];
      });
      return new Registry(wrappedTransforms);
    }
    const registry = new Registry();
    maybeRegistry.forEach(({ key, value }) => {
      registry.set(key, maybeCompose(value));
    });
    return registry;
  }
  var AssetTransformPlugin = class {
    constructor(transforms) {
      this.name = "asset-transform";
      this.registry = cleanupTransformRegistry(transforms);
    }
    apply(player) {
      player.hooks.viewController.tap(this.name, (vc) => {
        this.registry.forEach(
          ({ key, value }) => vc.transformRegistry.set(key, maybeCompose(value))
        );
      });
    }
  };

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/reference-assets/core/src/assets/action/transform.ts
  function isBackAction(action) {
    return action.value === "Prev";
  }
  var transform = (action, options) => {
    return {
      ...action,
      run() {
        if (action.exp) {
          options.evaluate(action.exp);
        }
        if (action.value) {
          const skipValidation = action.metaData?.skipValidation;
          options.transition?.(action.value, { force: skipValidation });
        }
      }
    };
  };
  var backIconTransform = (action) => {
    if (isBackAction(action) && action?.metaData?.role === void 0) {
      return {
        ...action,
        metaData: {
          ...action?.metaData,
          role: "back"
        }
      };
    }
    return action;
  };
  var expPropTransform = (asset) => {
    const skipArray = asset.plugins?.stringResolver?.propertiesToSkip;
    if (skipArray && skipArray.indexOf("exp") > 1) {
      return asset;
    }
    return {
      ...asset,
      plugins: {
        ...asset.plugins,
        stringResolver: {
          ...asset?.plugins?.stringResolver,
          propertiesToSkip: [
            ...asset.plugins?.stringResolver?.propertiesToSkip ?? [],
            "exp"
          ]
        }
      }
    };
  };
  var actionTransform = compose(
    transform,
    backIconTransform,
    composeBefore(expPropTransform)
  );

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/reference-assets/core/src/assets/info/transform.ts
  var infoTransform = (infoAsset) => {
    const actions = infoAsset?.actions;
    const segmentedActions = actions?.reduce(
      (segmentedActionsArray, action) => {
        segmentedActionsArray[isBackAction(action.asset) ? "prev" : "next"].push(action);
        return segmentedActionsArray;
      },
      { next: [], prev: [] }
    );
    return {
      ...infoAsset,
      segmentedActions
    };
  };

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/reference-assets/core/src/assets/image/transform.ts
  var getImageAlt = (props) => {
    const { metaData, placeholder } = props;
    if (metaData.accessibility)
      return metaData.accessibility;
    if (placeholder)
      return placeholder;
    return "Image";
  };
  var imageTransform = (props) => {
    const altText = getImageAlt(props);
    const newImage = {
      ...props,
      altText
    };
    return newImage;
  };

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/reference-assets/core/src/plugin.ts
  var ReferenceAssetsPlugin = class {
    constructor() {
      this.name = "reference-assets-transforms";
    }
    apply(player) {
      player.registerPlugin(
        new AssetTransformPlugin([
          [{ type: "action" }, actionTransform],
          [{ type: "input" }, inputTransform],
          [{ type: "image" }, imageTransform],
          [{ type: "info" }, infoTransform]
        ])
      );
    }
  };
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=index.global.js.map