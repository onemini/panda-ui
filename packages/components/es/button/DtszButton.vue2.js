import { defineComponent, openBlock, createElementBlock, normalizeClass, unref, renderSlot } from "vue";
import { buttonProps } from "./types/types.js";
import { createNamespace } from "../utils/create.js";
const _hoisted_1 = { key: 1 };
const __default__ = {
  name: "DtszButton"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: buttonProps,
  setup(__props) {
    const bem = createNamespace("button");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(bem).b(), unref(bem).m(_ctx.size), unref(bem).m(_ctx.type), unref(bem).is("round", _ctx.round), unref(bem).is("disabled", _ctx.disabled)])
      }, [
        _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("span", _hoisted_1, "Default"))
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
