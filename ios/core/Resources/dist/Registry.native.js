"use strict";
var Registry = (() => {
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

  // ../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/sorted-array@2.0.4/node_modules/sorted-array/sorted-array.js
  var require_sorted_array = __commonJS({
    "../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/sorted-array@2.0.4/node_modules/sorted-array/sorted-array.js"(exports, module) {
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

  // ../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/core/partial-match-registry/src/index.ts
  var src_exports = {};
  __export(src_exports, {
    Registry: () => Registry,
    createObjectMatcher: () => createMatcher
  });
  var import_sorted_array = __toESM(require_sorted_array());

  // ../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/node_modules/.aspect_rules_js/dlv@1.1.3/node_modules/dlv/dist/dlv.es.js
  function dlv_es_default(t, e, l, n, r) {
    for (e = e.split ? e.split(".") : e, n = 0; n < e.length; n++)
      t = t ? t[e[n]] : r;
    return t === r ? l : t;
  }

  // ../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/core/partial-match-registry/src/deep-partial-matcher.ts
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

  // ../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/core/partial-match-registry/src/index.ts
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
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=index.global.js.map