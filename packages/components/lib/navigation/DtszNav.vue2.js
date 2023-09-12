"use strict";
const vue = require("vue");
const types = require("./types/types.js");
const create = require("../utils/create.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-5208a72b"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("img", {
  src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMCA0NEM4Ljg5NTQzIDQ0IDggNDMuMTA0NiA4IDQyVjZDOCA0Ljg5NTQzIDguODk1NDMgNCAxMCA0SDM4QzM5LjEwNDYgNCA0MCA0Ljg5NTQzIDQwIDZWNDJDNDAgNDMuMTA0NiAzOS4xMDQ2IDQ0IDM4IDQ0SDEwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIxIDIyVjRIMzNWMjJMMjcgMTUuNzI3M0wyMSAyMloiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTAgNEgzOCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==",
  style: { "width": "20px", "height": "20px", "margin-right": "10px" }
}, null, -1));
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("img", {
  src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yNCA0TDE4IDEwSDEwVjE4TDQgMjRMMTAgMzBWMzhIMThMMjQgNDRMMzAgMzhIMzhWMzBMNDQgMjRMMzggMThWMTBIMzBMMjQgNFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTI0IDMwQzI3LjMxMzcgMzAgMzAgMjcuMzEzNyAzMCAyNEMzMCAyMC42ODYzIDI3LjMxMzcgMTggMjQgMThDMjAuNjg2MyAxOCAxOCAyMC42ODYzIDE4IDI0QzE4IDI3LjMxMzcgMjAuNjg2MyAzMCAyNCAzMFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+",
  style: { "width": "20px", "height": "20px", "margin-right": "10px" }
}, null, -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("img", {
  src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00IDI0QzQgMzUuMDQ1NyAxMi45NTQzIDQ0IDI0IDQ0VjQ0QzM1LjA0NTcgNDQgNDQgMzUuMDQ1NyA0NCAyNEM0NCAxMi45NTQzIDM1LjA0NTcgNCAyNCA0IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTM2IDI0QzM2IDE3LjM3MjYgMzAuNjI3NCAxMiAyNCAxMkMxNy4zNzI2IDEyIDEyIDE3LjM3MjYgMTIgMjRDMTIgMzAuNjI3NCAxNy4zNzI2IDM2IDI0IDM2VjM2IiBzdHJva2U9IiNmZmYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+",
  style: { "width": "20px", "height": "20px", "margin-right": "10px" }
}, null, -1));
const _hoisted_4 = { key: 1 };
const __default__ = {
  name: "DtszNav"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: types.navProps,
  setup(__props) {
    const bem = create.createNamespace("nav");
    const index1 = vue.ref();
    const index2 = vue.ref();
    const index3 = vue.ref();
    vue.ref();
    vue.onMounted(() => {
      index1.value.onclick = function() {
        index1.value.style.color = "yellow";
        index2.value.style.color = "aliceblue";
        index3.value.style.color = "aliceblue";
      };
      index2.value.onclick = function() {
        index2.value.style.color = "yellow";
        index1.value.style.color = "aliceblue";
        index3.value.style.color = "aliceblue";
      };
      index3.value.onclick = function() {
        index3.value.style.color = "yellow";
        index1.value.style.color = "aliceblue";
        index2.value.style.color = "aliceblue";
      };
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([vue.unref(bem).b(), vue.unref(bem).is("disabled", _ctx.disabled)])
      }, [
        vue.createElementVNode("div", {
          class: vue.normalizeClass([vue.unref(bem).m(_ctx.type)]),
          ref_key: "index1",
          ref: index1
        }, [
          _hoisted_1,
          vue.createTextVNode(" 选项1 ")
        ], 2),
        vue.createElementVNode("div", {
          class: vue.normalizeClass([vue.unref(bem).m(_ctx.type)]),
          ref_key: "index2",
          ref: index2
        }, [
          _hoisted_2,
          vue.createTextVNode(" 选项2 ")
        ], 2),
        vue.createElementVNode("div", {
          class: vue.normalizeClass([vue.unref(bem).m(_ctx.type)]),
          ref_key: "index3",
          ref: index3
        }, [
          _hoisted_3,
          vue.createTextVNode(" 选项3 ")
        ], 2),
        _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_4))
      ], 2);
    };
  }
});
module.exports = _sfc_main;
