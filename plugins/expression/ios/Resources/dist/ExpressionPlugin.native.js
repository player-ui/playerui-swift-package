"use strict";
var ExpressionPlugin = (() => {
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

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/expression/core/src/index.ts
  var src_exports = {};
  __export(src_exports, {
    ExpressionPlugin: () => ExpressionPlugin
  });
  var ExpressionPlugin = class {
    constructor(expressionMap) {
      this.name = "ExpressionPlugin";
      this.expressions = expressionMap;
    }
    apply(player) {
      player.hooks.expressionEvaluator.tap(this.name, (expEvaluator) => {
        this.expressions.forEach((handler, name) => {
          expEvaluator.addExpressionFunction(name, handler);
        });
      });
    }
  };
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=index.global.js.map