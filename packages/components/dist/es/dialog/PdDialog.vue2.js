import { defineComponent, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, unref, createVNode, normalizeStyle, renderSlot, toDisplayString, vShow, pushScopeId, popScopeId } from "vue";
import { PdDialogProps } from "./types/types.js";
import { createNamespace } from "../utils/create.js";
const _withScopeId = (n) => (pushScopeId("data-v-03752964"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { "data-v-1735ddb7": "" }, "This is a message", -1));
const _hoisted_2 = [
  _hoisted_1
];
const __default__ = {
  name: "PdDialog"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: PdDialogProps,
  setup(__props) {
    const bem = createNamespace("overlay");
    const bem1 = createNamespace("overlay-dialog");
    const bem2 = createNamespace("dialog");
    function handleClose() {
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "a",
        appear: ""
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            style: { "z-index": "2045" },
            class: normalizeClass([unref(bem).b()]),
            onClick: _cache[0] || (_cache[0] = ($event) => handleClose())
          }, [
            createVNode(Transition, { name: "b" }, {
              default: withCtx(() => [
                createElementVNode("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": "Tips",
                  "aria-describedby": "el-id-7802-111",
                  class: normalizeClass([unref(bem1).b()])
                }, [
                  createElementVNode("div", {
                    class: normalizeClass([unref(bem2).b()]),
                    tabindex: "-1",
                    style: normalizeStyle({ width: _ctx.width })
                  }, [
                    createElementVNode("header", {
                      class: normalizeClass([unref(bem2).e("header")])
                    }, [
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createElementVNode("span", {
                          role: "heading",
                          class: normalizeClass([unref(bem2).e("title")])
                        }, toDisplayString(_ctx.title), 3)
                      ], true)
                    ], 2),
                    createElementVNode("div", {
                      id: "el-id-7802-111",
                      class: normalizeClass([unref(bem2).e("body")])
                    }, _hoisted_2, 2),
                    createElementVNode("footer", {
                      class: normalizeClass([unref(bem2).e("footer")])
                    }, [
                      renderSlot(_ctx.$slots, "footer", {}, void 0, true)
                    ], 2)
                  ], 6)
                ], 2)
              ]),
              _: 3
            })
          ], 2), [
            [vShow, _ctx.dialogVisible]
          ])
        ]),
        _: 3
      });
    };
  }
});
export {
  _sfc_main as default
};
