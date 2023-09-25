"use strict";
const vue = require("vue");
const typeRow = require("./types/type-row.js");
const create = require("../../utils/create.js");
const _hoisted_1 = { key: 1 };
const __default__ = {
  name: "PdRow"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: typeRow.rowProps,
  setup(__props) {
    const props = __props;
    const bem = create.createNamespace("layout-row");
    const row = vue.ref();
    const setColAttrs = () => {
      let len;
      row.value.children ? len = row.value.children : [];
      console.log(len);
      if (len === 0)
        return;
      for (let i = 0; i < len; i++) {
        row[i].classList.add("col");
        if (props.gutter !== 0 && len > 1) {
          if (i !== 0)
            row[i].style.paddingLeft = `${props.gutter}px`;
          if (i !== len - 1)
            row[i].style.paddingRight = `${props.gutter}px`;
        }
      }
    };
    vue.computed(() => {
      const isFlex = props.type === "flex";
      const prefix = isFlex ? "row-flex" : "row";
      const name = [prefix];
      if (isFlex) {
        name.push(`row-flex-justify-${props.justify}`);
        name.push(`row-flex-align-${props.align}`);
      }
      return name;
    });
    vue.onMounted(() => {
      setColAttrs();
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([[vue.unref(bem).b()], "className"]),
        ref_key: "row",
        ref: row
      }, [
        _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, "UP"))
      ], 2);
    };
  }
});
module.exports = _sfc_main;
