import { defineComponent, ref, watch, onMounted, openBlock, createElementBlock, normalizeClass, unref, createCommentVNode, renderSlot } from "vue";
import { avatarProps } from "./types/types.js";
import { createNamespace } from "../utils/create.js";
const _hoisted_1 = ["src", "alt"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "avatar",
  props: avatarProps,
  emits: ["error"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const hasLoadError = ref(false);
    const bem = createNamespace("avatar");
    const loadImage = () => {
      var image = new Image();
      image.onerror = () => onError(image);
      image.src = props.src;
    };
    watch(
      () => props.src,
      () => loadImage()
    );
    function onError(image) {
      emits("error", image);
    }
    onMounted(() => {
      if (props.src) {
        return loadImage();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass([unref(bem).b(), unref(bem).m(_ctx.shape), unref(bem).m(_ctx.size)])
      }, [
        _ctx.src && !hasLoadError.value ? (openBlock(), createElementBlock("img", {
          key: 0,
          src: _ctx.src,
          alt: _ctx.alt,
          onError
        }, null, 40, _hoisted_1)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
export {
  _sfc_main as default
};
