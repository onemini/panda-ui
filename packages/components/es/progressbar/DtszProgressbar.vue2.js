import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, renderSlot, toDisplayString } from "vue";
import { progressbarProps } from "./types/types.js";
import { createNamespace } from "../utils/create.js";
const _hoisted_1 = ["width", "height"];
const _hoisted_2 = ["cx", "cy", "stroke", "stroke-width", "stroke-dasharray", "stroke-dashoffset"];
const _hoisted_3 = ["r", "cx", "cy", "fill"];
const _hoisted_4 = { key: 0 };
const _hoisted_5 = { key: 1 };
const __default__ = {
  name: "DtszProgressbar"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: progressbarProps,
  setup(__props) {
    const props = __props;
    const bem = createNamespace("progressbar");
    const angle = computed(() => Math.floor(props.angle / 360 * 100));
    const dashoffset = computed(() => Math.PI * 100 / 360 * (props.angle - 360));
    function transformSize(size) {
      const sizeMap = {
        normal: 1,
        large: 2
      };
      return sizeMap[size] || 1;
    }
    const psize = transformSize(props.size);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(bem).b(), unref(bem).m(_ctx.size)])
      }, [
        (openBlock(), createElementBlock("svg", {
          width: 200 * unref(psize),
          height: 200 * unref(psize),
          xmlns: "http://www.w3.org/2000/svg",
          class: normalizeClass([unref(bem).m("circle")])
        }, [
          createElementVNode("circle", {
            r: 50,
            cx: 100 * unref(psize),
            cy: 100 * unref(psize),
            fill: "transparent",
            stroke: _ctx.outset_bgc,
            "stroke-width": 100 * unref(psize),
            "stroke-dasharray": Math.PI * 100,
            "stroke-dashoffset": unref(dashoffset)
          }, null, 8, _hoisted_2),
          createElementVNode("circle", {
            r: 80 * unref(psize) > 120 ? 120 : 80,
            cx: 100 * unref(psize),
            cy: 100 * unref(psize),
            fill: _ctx.inset_bgc
          }, null, 8, _hoisted_3)
        ], 10, _hoisted_1)),
        _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_4, [
          renderSlot(_ctx.$slots, "default", {}, void 0, true)
        ])) : (openBlock(), createElementBlock("span", _hoisted_5, toDisplayString(unref(angle)) + "%", 1))
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
