"use strict";
var PartialMatchFingerprintPlugin = (() => {
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

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/partial-match-fingerprint/core/src/index.ts
  var src_exports = {};
  __export(src_exports, {
    PartialMatchFingerprintPlugin: () => PartialMatchFingerprintPlugin
  });
  var PartialMatchFingerprintPlugin = class {
    constructor(registry) {
      this.name = "partial-match-fingerprint";
      this.registry = registry;
      this.mapping = /* @__PURE__ */ new Map();
    }
    apply(player) {
      player.hooks.viewController.tap(this.name, (viewController) => {
        viewController.hooks.view.tap(this.name, (view) => {
          view.hooks.resolver.tap(this.name, (resolver) => {
            resolver.hooks.afterResolve.tap(this.name, (resolved, node) => {
              if (resolved && node && node.type === "asset" || node.type === "view") {
                this.mapping.set(
                  resolved.id,
                  this.registry.get(resolved)
                );
              }
            });
          });
        });
      });
    }
    register(match, value) {
      this.registry.set(match, value);
    }
    get(assetId) {
      return this.mapping.get(assetId);
    }
  };
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=index.global.js.map