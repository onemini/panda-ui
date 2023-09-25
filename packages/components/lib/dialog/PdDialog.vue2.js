"use strict";
const vue = require("vue");
const types = require("./types/types.js");
const create = require("../utils/create.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-03752964"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("span", { "data-v-1735ddb7": "" }, "This is a message", -1));
const _hoisted_2 = [
  _hoisted_1
];
const __default__ = {
  name: "PdDialog"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: types.PdDialogProps,
  setup(__props) {
    const bem = create.createNamespace("overlay");
    const bem1 = create.createNamespace("overlay-dialog");
    const bem2 = create.createNamespace("dialog");
    function handleClose() {
    }
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createBlock(vue.Transition, {
        name: "a",
        appear: ""
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("div", {
            style: { "z-index": "2045" },
            class: vue.normalizeClass([vue.unref(bem).b()]),
            onClick: _cache[0] || (_cache[0] = ($event) => handleClose())
          }, [
            vue.createVNode(vue.Transition, { name: "b" }, {
              default: vue.withCtx(() => [
                vue.createElementVNode("div", {
                  role: "dialog",
                  "aria-modal": "true",
                  "aria-label": "Tips",
                  "aria-describedby": "el-id-7802-111",
                  class: vue.normalizeClass([vue.unref(bem1).b()])
                }, [
                  vue.createElementVNode("div", {
                    class: vue.normalizeClass([vue.unref(bem2).b()]),
                    tabindex: "-1",
                    style: vue.normalizeStyle({ width: _ctx.width })
                  }, [
                    vue.createElementVNode("header", {
                      class: vue.normalizeClass([vue.unref(bem2).e("header")])
                    }, [
                      vue.renderSlot(_ctx.$slots, "title", {}, () => [
                        vue.createElementVNode("span", {
                          role: "heading",
                          class: vue.normalizeClass([vue.unref(bem2).e("title")])
                        }, vue.toDisplayString(_ctx.title), 3)
                      ], true)
                    ], 2),
                    vue.createElementVNode("div", {
                      id: "el-id-7802-111",
                      class: vue.normalizeClass([vue.unref(bem2).e("body")])
                    }, _hoisted_2, 2),
                    vue.createElementVNode("footer", {
                      class: vue.normalizeClass([vue.unref(bem2).e("footer")])
                    }, [
                      vue.renderSlot(_ctx.$slots, "footer", {}, void 0, true)
                    ], 2)
                  ], 6)
                ], 2)
              ]),
              _: 3
            })
          ], 2), [
            [vue.vShow, _ctx.dialogVisible]
          ])
        ]),
        _: 3
      });
    };
  }
});
module.exports = _sfc_main;
