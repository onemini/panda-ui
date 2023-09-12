"use strict";
const vue = require("vue");
const typeCol = require("./types/type-col.js");
const create = require("../../utils/create.js");
const __default__ = {
  name: "DtszCol"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: typeCol.colProps,
  setup(__props) {
    const props = __props;
    const bem = create.createNamespace("layout-col");
    vue.computed(() => {
      let prefix = "layout-col";
      const className = new Array();
      Number(props.span) !== 0 ? className.push(`${prefix}-${props.span}`) : "";
      Number(props.offset) !== 0 ? className.push(`${prefix}-offset-${props.offset}`) : "";
      return className;
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([[vue.unref(bem).b()], "colClassName"]),
        style: vue.normalizeStyle({ width: 4 * props.span + "%", margin: "5px 0px 0px " + 100 / 24 + "%" })
      }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 6);
    };
  }
});
module.exports = _sfc_main;
