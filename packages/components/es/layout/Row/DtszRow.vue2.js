import { defineComponent, ref, computed, onMounted, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import { rowProps } from "./types/type-row.js";
import { createNamespace } from "../../utils/create.js";
const _hoisted_1 = { key: 1 };
const __default__ = {
  name: "DtszRow"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: rowProps,
  setup(__props) {
    const props = __props;
    const bem = createNamespace("layout-row");
    const row = ref();
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
    computed(() => {
      const isFlex = props.type === "flex";
      const prefix = isFlex ? "row-flex" : "row";
      const name = [prefix];
      if (isFlex) {
        name.push(`row-flex-justify-${props.justify}`);
        name.push(`row-flex-align-${props.align}`);
      }
      return name;
    });
    onMounted(() => {
      setColAttrs();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([[unref(bem).b()], "className"]),
        ref_key: "row",
        ref: row
      }, [
        _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("span", _hoisted_1, "UP"))
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
