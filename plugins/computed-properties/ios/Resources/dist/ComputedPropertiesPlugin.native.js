"use strict";
var ComputedPropertiesPlugin = (() => {
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

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/computed-properties/core/src/index.ts
  var src_exports = {};
  __export(src_exports, {
    ComputedPropertiesPlugin: () => ComputedPropertiesPlugin
  });
  var ComputedPropertiesPlugin = class {
    constructor() {
      this.name = "ComputedProperties";
    }
    apply(player) {
      let schemaController;
      let expressionEvaluator;
      const getExpressionType = (binding) => {
        const dataType = schemaController?.getType(binding);
        if (dataType?.type === "Expression") {
          return dataType;
        }
      };
      const computedPropertyMiddleware = {
        name: this.name,
        get(binding, options, next) {
          const expType = getExpressionType(binding);
          if (expType) {
            const { exp } = expType;
            const result = exp && expressionEvaluator?.evaluate(exp, options?.context);
            return result ?? expType.default;
          }
          return next?.get(binding, options);
        },
        set(transaction, options, next) {
          for (const setOperation of transaction) {
            if (getExpressionType(setOperation[0])) {
              throw new Error(
                `Invalid 'set' operation on computed property: ${setOperation[0].asString()}`
              );
            }
          }
          return next?.set(transaction, options) ?? [];
        },
        delete(binding, options, next) {
          if (getExpressionType(binding)) {
            throw new Error(
              `Invalid 'delete' operation on computed property: ${binding.asString()}`
            );
          }
          return next?.delete(binding, options);
        }
      };
      player.hooks.dataController.tap(this.name, (dataController) => {
        dataController.hooks.resolveDataStages.tap(this.name, (dataPipeline) => {
          return [...dataPipeline, computedPropertyMiddleware];
        });
      });
      player.hooks.schema.tap(this.name, (schema) => {
        schemaController = schema;
      });
      player.hooks.expressionEvaluator.tap(this.name, (evaluator) => {
        expressionEvaluator = evaluator;
      });
    }
  };
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=index.global.js.map