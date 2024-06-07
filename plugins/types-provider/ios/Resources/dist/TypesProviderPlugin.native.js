"use strict";
var TypesProviderPlugin = (() => {
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

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/types-provider/core/src/index.ts
  var src_exports = {};
  __export(src_exports, {
    TypesProviderPlugin: () => TypesProviderPlugin
  });
  var TypesProviderPlugin = class {
    constructor(config) {
      this.name = "TypesProviderPlugin";
      this.config = config;
    }
    apply(player) {
      player.hooks.schema.tap(this.name, (schema) => {
        if (this.config.types) {
          schema.addDataTypes(this.config.types);
        }
        if (this.config.formats) {
          schema.addFormatters(this.config.formats);
        }
      });
      if (this.config.validators) {
        player.hooks.validationController.tap(
          this.name,
          (validationController) => {
            validationController.hooks.createValidatorRegistry.tap(
              this.name,
              (validationRegistry) => {
                this.config.validators?.forEach(([name, handler]) => {
                  validationRegistry.register(name, handler);
                });
              }
            );
          }
        );
      }
    }
  };
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=index.global.js.map