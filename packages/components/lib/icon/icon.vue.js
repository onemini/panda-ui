"use strict";
const icon_vue_vue_type_script_lang = require("./icon.vue2.js");
const vue = require("vue");
require("./icon.vue3.js");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = { class: "dtsz-icon" };
const _hoisted_2 = ["xlink:href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    (vue.openBlock(), vue.createElementBlock("svg", {
      class: vue.normalizeClass([[_ctx.bem.m(_ctx.type)], "icon"]),
      style: vue.normalizeStyle(_ctx.iconColor),
      "aria-hidden": "true"
    }, [
      vue.createElementVNode("use", { "xlink:href": _ctx.iconName }, null, 8, _hoisted_2)
    ], 6)),
    _ctx.dot ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 0,
      class: vue.normalizeClass(["dtsz-info", [_ctx.styleDot, _ctx.bem.e(_ctx.type)]])
    }, vue.toDisplayString(_ctx.badge), 3)) : vue.createCommentVNode("", true)
  ]);
}
const icon = /* @__PURE__ */ _pluginVue_exportHelper(icon_vue_vue_type_script_lang, [["render", _sfc_render], ["__scopeId", "data-v-3679c6f4"]]);
module.exports = icon;
