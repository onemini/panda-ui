import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot } from "vue";
import { colProps } from "./types/type-col.js";
import { createNamespace } from "../../utils/create.js";
const __default__ = {
  name: "DtszCol"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: colProps,
  setup(__props) {
    const props = __props;
    const bem = createNamespace("layout-col");
    computed(() => {
      let prefix = "layout-col";
      const className = new Array();
      Number(props.span) !== 0 ? className.push(`${prefix}-${props.span}`) : "";
      Number(props.offset) !== 0 ? className.push(`${prefix}-offset-${props.offset}`) : "";
      return className;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[unref(bem).b()], "colClassName"]),
        style: normalizeStyle({ width: 4 * props.span + "%", margin: "5px 0px 0px " + 100 / 24 + "%" })
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
