"use strict";
const vue = require("vue");
const types = require("./types/types.js");
const create = require("../utils/create.js");
const _hoisted_1 = ["src", "alt"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "avatar",
  props: types.avatarProps,
  emits: ["error"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const hasLoadError = vue.ref(false);
    const bem = create.createNamespace("avatar");
    const loadImage = () => {
      var image = new Image();
      image.onerror = () => onError(image);
      image.src = props.src;
    };
    vue.watch(
      () => props.src,
      () => loadImage()
    );
    function onError(image) {
      emits("error", image);
    }
    vue.onMounted(() => {
      if (props.src) {
        return loadImage();
      }
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([vue.unref(bem).b(), vue.unref(bem).m(_ctx.shape), vue.unref(bem).m(_ctx.size)])
      }, [
        _ctx.src && !hasLoadError.value ? (vue.openBlock(), vue.createElementBlock("img", {
          key: 0,
          src: _ctx.src,
          alt: _ctx.alt,
          onError
        }, null, 40, _hoisted_1)) : vue.createCommentVNode("", true),
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 2);
    };
  }
});
module.exports = _sfc_main;
