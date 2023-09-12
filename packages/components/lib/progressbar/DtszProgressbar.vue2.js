"use strict";
const vue = require("vue");
const types = require("./types/types.js");
const create = require("../utils/create.js");
const _hoisted_1 = ["width", "height"];
const _hoisted_2 = ["cx", "cy", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
const _hoisted_3 = ["r", "cx", "cy", "fill"];
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { key: 1 };
const __default__ = {
  name: "DtszProgressbar"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: types.progressbarProps,
  setup(__props) {
    const props = __props;
    const bem = create.createNamespace("progressbar");
    const angle = vue.computed(() => Math.floor(props.angle / 360 * 100));
    const dashoffset = vue.computed(() => Math.PI * 100 / 360 * (props.angle - 360));
    function transformSize(size) {
      const sizeMap = {
        normal: 1,
        large: 2
      };
      return sizeMap[size] || 1;
    }
    const psize = transformSize(props.size);
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([vue.unref(bem).b(), vue.unref(bem).m(_ctx.size)])
      }, [
        (vue.openBlock(), vue.createElementBlock("svg", {
          width: 200 * vue.unref(psize),
          height: 200 * vue.unref(psize),
          xmlns: "http://www.w3.org/2000/svg",
          class: vue.normalizeClass([vue.unref(bem).m("circle")])
        }, [
          vue.createElementVNode("circle", {
            r: 50,
            cx: 100 * vue.unref(psize),
            cy: 100 * vue.unref(psize),
            fill: "transparent",
            stroke: _ctx.outset_bgc,
            "stroke-width": 100 * vue.unref(psize),
            "stroke-dasharray": Math.PI * 100,
            "stroke-dashoffset": vue.unref(dashoffset)
          }, null, 8, _hoisted_2),
          vue.createElementVNode("circle", {
            r: 80 * vue.unref(psize) > 120 ? 120 : 80,
            cx: 100 * vue.unref(psize),
            cy: 100 * vue.unref(psize),
            fill: _ctx.inset_bgc
          }, null, 8, _hoisted_3)
        ], 10, _hoisted_1)),
        _ctx.$slots.default ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_4, [
          vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_5, vue.toDisplayString(vue.unref(angle)) + "%", 1))
      ], 2);
    };
  }
});
module.exports = _sfc_main;
