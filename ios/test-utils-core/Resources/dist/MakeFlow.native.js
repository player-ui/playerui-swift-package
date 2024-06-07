"use strict";
var MakeFlow = (() => {
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

  // ../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/core/make-flow/src/index.ts
  var src_exports = {};
  __export(src_exports, {
    ObjType: () => ObjType,
    identify: () => identify,
    makeFlow: () => makeFlow
  });

  // ../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/core/make-flow/src/identify.ts
  var ObjType = /* @__PURE__ */ ((ObjType2) => {
    ObjType2[ObjType2["FLOW"] = 0] = "FLOW";
    ObjType2[ObjType2["ASSET"] = 1] = "ASSET";
    ObjType2[ObjType2["ASSET_WRAPPER"] = 2] = "ASSET_WRAPPER";
    ObjType2[ObjType2["UNKNOWN"] = 3] = "UNKNOWN";
    return ObjType2;
  })(ObjType || {});
  function identify(obj) {
    if ("id" in obj && "type" in obj) {
      return 1 /* ASSET */;
    }
    if ("asset" in obj && identify(obj.asset) === 1 /* ASSET */) {
      return 2 /* ASSET_WRAPPER */;
    }
    if ("navigation" in obj || "schema" in obj || "views" in obj) {
      return 0 /* FLOW */;
    }
    return 3 /* UNKNOWN */;
  }

  // ../../../../../../../../../../execroot/_main/bazel-out/darwin_arm64-fastbuild/bin/core/make-flow/src/index.ts
  function unwrapJSend(obj) {
    const isJSend = "status" in obj && "data" in obj;
    if (isJSend) {
      return obj.data;
    }
    return obj;
  }
  var createDefaultNav = (flow, options) => {
    if ((flow.navigation === void 0 || flow.navigation === null) && Array.isArray(flow.views) && flow.views.length === 1) {
      const navFlow = {
        startState: "VIEW_0",
        VIEW_0: {
          state_type: "VIEW",
          ref: flow.views[0].id ?? `${flow.id}-views-0`,
          transitions: {
            "*": "END_done",
            Prev: "END_back"
          }
        },
        END_done: {
          state_type: "END",
          outcome: options?.outcome ?? "doneWithFlow"
        },
        END_back: {
          state_type: "END",
          outcome: "BACK"
        }
      };
      if (options?.onStart !== void 0) {
        navFlow.onStart = options.onStart;
      }
      if (options?.onEnd !== void 0) {
        navFlow.onEnd = options.onEnd;
      }
      return {
        ...flow,
        navigation: {
          BEGIN: "Flow",
          Flow: navFlow
        }
      };
    }
    return flow;
  };
  function makeFlow(obj, args) {
    const objified = unwrapJSend(typeof obj === "string" ? JSON.parse(obj) : obj);
    if (Array.isArray(objified)) {
      const collection = {
        id: "collection",
        type: "collection",
        values: objified.map((v) => {
          const type2 = identify(v);
          if (type2 === 1 /* ASSET */) {
            return { asset: v };
          }
          return v;
        })
      };
      return makeFlow(collection);
    }
    const type = identify(obj);
    if (type === 3 /* UNKNOWN */) {
      throw new Error(
        "No clue how to convert this into a flow. Just do it yourself"
      );
    }
    if (type === 0 /* FLOW */) {
      return createDefaultNav(obj, args);
    }
    if (type === 2 /* ASSET_WRAPPER */) {
      return makeFlow(obj.asset);
    }
    return {
      id: "generated-flow",
      views: [obj],
      data: {},
      navigation: {
        BEGIN: "FLOW_1",
        FLOW_1: {
          startState: "VIEW_1",
          VIEW_1: {
            state_type: "VIEW",
            ref: obj.id,
            transitions: {
              "*": "END_Done"
            }
          },
          END_Done: {
            state_type: "END",
            outcome: "done"
          }
        }
      }
    };
  }
  return __toCommonJS(src_exports);
})();
//# sourceMappingURL=index.global.js.map