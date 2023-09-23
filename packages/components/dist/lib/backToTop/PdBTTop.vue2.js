"use strict";
const vue = require("vue");
const types = require("./types/types.js");
const create = require("../utils/create.js");
const _hoisted_1 = { key: 1 };
const __default__ = {
  name: "PdBTTop"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: types.backToTopProps,
  setup(__props) {
    const props = __props;
    const wrapper = vue.ref();
    const show = vue.ref(false);
    vue.onMounted(() => {
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
    const bem = create.createNamespace("backToTop");
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
        vue.createElementVNode("div", {
          ref_key: "wrapper",
          ref: wrapper
        }, null, 512),
        vue.withDirectives(vue.createElementVNode("div", {
          onClick: backTo,
          class: vue.normalizeClass([vue.unref(bem).b(), vue.unref(bem).m(_ctx.type), vue.unref(bem).is("rightLen", true), vue.unref(bem).is("disabled", _ctx.disabled)]),
          style: vue.normalizeStyle({ right: props.rightLen, bottom: props.bottomLen })
        }, [
          _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, "UP"))
        ], 6), [
          [vue.vShow, show.value]
        ])
      ], 64);
    };
  }
});
module.exports = _sfc_main;
