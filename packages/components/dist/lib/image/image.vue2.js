"use strict";
const vue = require("vue");
const types = require("./types/types.js");
const create = require("../utils/create.js");
const util = require("../utils/util.js");
const _hoisted_1 = {
  key: 0,
  class: "bem.is('placeholder', placeholder)"
};
const _hoisted_2 = {
  key: 1,
  class: "bem.is('error', error)"
};
const _hoisted_3 = ["src"];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "image",
  props: types.imageProps,
  emits: ["error", "load"],
  setup(__props, { emit }) {
    const props = __props;
    const bem = create.createNamespace("image");
    const state = vue.reactive({
      isLoadError: false,
      // 是否加载失败
      loading: true
      // 加载状态
    });
    const imgStyle = vue.computed(() => `object-fit:${props.fit};border-radius:${props.radius}px;width:100%;height:100%;`);
    let _scrollContainer;
    let _lazyLoadHandler;
    const container = vue.ref(null);
    const loadImage = () => {
      state.loading = true;
      state.isLoadError = false;
      var image = new Image();
      image.onload = (e) => onComplete(e);
      image.onerror = () => onError(image);
      image.src = props.src;
    };
    vue.watch(
      () => props.src,
      () => loadImage()
    );
    function onComplete(e, image) {
      state.loading = false;
      state.isLoadError = false;
      emit("load", e);
    }
    function onError(image) {
      state.loading = false;
      state.isLoadError = true;
      emit("error", image);
    }
    function onLazyLoad() {
      if (util.isInContainer(container.value, _scrollContainer)) {
        loadImage();
        removeLazyLoadListener();
      }
    }
    function addLazyLoadLintener() {
      const { scrollContainer } = props;
      if (util.isHtmlEl(scrollContainer)) {
        _scrollContainer = scrollContainer;
      } else if (typeof scrollContainer === "string" && scrollContainer !== "") {
        _scrollContainer = document.querySelector(scrollContainer);
      } else {
        _scrollContainer = util.getScrollContainer(container.value);
      }
      if (_scrollContainer) {
        _lazyLoadHandler = util.throttle(onLazyLoad, 200);
        util.on(_scrollContainer, "scroll", _lazyLoadHandler);
        setTimeout(() => onLazyLoad(), 100);
      }
    }
    function removeLazyLoadListener() {
      if (!_scrollContainer || !_lazyLoadHandler)
        return;
      util.off(_scrollContainer, "scroll", _lazyLoadHandler);
      _scrollContainer = null;
      _lazyLoadHandler = null;
    }
    vue.onMounted(() => {
      if (!props.lazy) {
        return loadImage();
      }
      vue.nextTick(addLazyLoadLintener);
    });
    vue.onBeforeUnmount(() => {
      props.lazy && removeLazyLoadListener();
    });
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        ref_key: "container",
        ref: container,
        class: vue.normalizeClass(vue.unref(bem).b()),
        style: vue.normalizeStyle(`width:${_ctx.width}px;height:${_ctx.height}px`)
      }, [
        state.loading ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
          vue.renderSlot(_ctx.$slots, "placeholder", {}, () => [
            vue.createTextVNode("加载中")
          ], true)
        ])) : state.isLoadError ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
          vue.renderSlot(_ctx.$slots, "error", {}, () => [
            vue.createTextVNode("加载失败")
          ], true)
        ])) : (vue.openBlock(), vue.createElementBlock("img", {
          key: 2,
          src: _ctx.src,
          style: vue.normalizeStyle(vue.unref(imgStyle))
        }, null, 12, _hoisted_3))
      ], 6);
    };
  }
});
module.exports = _sfc_main;
