import { defineComponent, ref, onMounted, openBlock, createElementBlock, Fragment, createElementVNode, withDirectives, normalizeClass, unref, normalizeStyle, renderSlot, vShow } from "vue";
import { backToTopProps } from "./types/types.js";
import { createNamespace } from "../utils/create.js";
const _hoisted_1 = { key: 1 };
const __default__ = {
  name: "PdBTTop"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: backToTopProps,
  setup(__props) {
    const props = __props;
    const wrapper = ref();
    const show = ref(false);
    onMounted(() => {
      window.addEventListener("scroll", function() {
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrolltop > 100) {
          show.value = true;
        } else {
          show.value = false;
        }
      });
    });
    const backTo = () => {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    };
    const bem = createNamespace("backToTop");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", {
          ref_key: "wrapper",
          ref: wrapper
        }, null, 512),
        withDirectives(createElementVNode("div", {
          onClick: backTo,
          class: normalizeClass([unref(bem).b(), unref(bem).m(_ctx.type), unref(bem).is("rightLen", true), unref(bem).is("disabled", _ctx.disabled)]),
          style: normalizeStyle({ right: props.rightLen, bottom: props.bottomLen })
        }, [
          _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (openBlock(), createElementBlock("span", _hoisted_1, "UP"))
        ], 6), [
          [vShow, show.value]
        ])
      ], 64);
    };
  }
});
export {
  _sfc_main as default
};
