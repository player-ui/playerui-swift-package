"use strict";
var ExternalActionPlugin = (() => {
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

  // ../../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/plugins/external-action/core/src/index.ts
  var src_exports = {};
  __export(src_exports, {
    ExternalActionPlugin: () => ExternalActionPlugin
  });
  var ExternalActionPlugin = class {
    constructor(handler) {
      this.name = "ExternalActionPlugin";
      this.handler = handler;
    }
    apply(player) {
      player.hooks.flowController.tap(this.name, (flowController) => {
        flowController.hooks.flow.tap(this.name, (flow) => {
          flow.hooks.transition.tap(this.name, (fromState, toState) => {
            const { value: state } = toState;
            if (state.state_type === "EXTERNAL") {
              setTimeout(async () => {
                const shouldTransition = (currentState2) => currentState2.status === "in-progress" && currentState2.controllers.flow.current?.currentState?.value === state;
                const currentState = player.getState();
                if (shouldTransition(currentState)) {
                  try {
                    const transitionValue = await this.handler(
                      state,
                      currentState.controllers
                    );
                    if (transitionValue !== void 0) {
                      const latestState = player.getState();
                      if (shouldTransition(latestState)) {
                        latestState.controllers.flow.transition(transitionValue);
                      } else {
                        player.logger.warn(
                          `External state resolved with [${transitionValue}], but Player already navigated away from [${toState.name}]`
                        );
                      }
                    }
                  } catch (error) {
                    if (error instanceof Error) {
                      currentState.fail(error);
                    }
                  }
                }
              }, 0);
            }
          });
        });
      });
    }
  };
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=index.global.js.map