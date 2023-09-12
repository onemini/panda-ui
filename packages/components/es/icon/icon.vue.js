import _sfc_main from "./icon.vue2.js";
import { openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, toDisplayString, createCommentVNode } from "vue";
import "./icon.vue3.js";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _hoisted_1 = { class: "dtsz-icon" };
const _hoisted_2 = ["xlink:href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(), createElementBlock("svg", {
      class: normalizeClass([[_ctx.bem.m(_ctx.type)], "icon"]),
      style: normalizeStyle(_ctx.iconColor),
      "aria-hidden": "true"
    }, [
      createElementVNode("use", { "xlink:href": _ctx.iconName }, null, 8, _hoisted_2)
    ], 6)),
    _ctx.dot ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(["dtsz-info", [_ctx.styleDot, _ctx.bem.e(_ctx.type)]])
    }, toDisplayString(_ctx.badge), 3)) : createCommentVNode("", true)
  ]);
}
const icon = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3679c6f4"]]);
export {
  icon as default
};
