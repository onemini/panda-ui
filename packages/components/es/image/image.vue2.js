import { defineComponent, reactive, computed, ref, watch, onMounted, nextTick, onBeforeUnmount, openBlock, createElementBlock, normalizeClass, unref, normalizeStyle, renderSlot, createTextVNode } from "vue";
import { imageProps } from "./types/types.js";
import { createNamespace } from "../utils/create.js";
import { isHtmlEl, getScrollContainer, on, off, isInContainer, throttle } from "../utils/util.js";
const _hoisted_1 = {
  key: 0,
  class: "bem.is('placeholder', placeholder)"
};
const _hoisted_2 = {
  key: 1,
  class: "bem.is('error', error)"
};
const _hoisted_3 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "image",
  props: imageProps,
  emits: ["error", "load"],
  setup(__props, { emit }) {
    const props = __props;
    const bem = createNamespace("image");
    const state = reactive({
      isLoadError: false,
      // 是否加载失败
      loading: true
      // 加载状态
    });
    const imgStyle = computed(() => `object-fit:${props.fit};border-radius:${props.radius}px;width:100%;height:100%;`);
    let _scrollContainer;
    let _lazyLoadHandler;
    const container = ref(null);
    const loadImage = () => {
      state.loading = true;
      state.isLoadError = false;
      var image = new Image();
      image.onload = (e) => onComplete(e);
      image.onerror = () => onError(image);
      image.src = props.src;
    };
    watch(
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
      if (isInContainer(container.value, _scrollContainer)) {
        loadImage();
        removeLazyLoadListener();
      }
    }
    function addLazyLoadLintener() {
      const { scrollContainer } = props;
      if (isHtmlEl(scrollContainer)) {
        _scrollContainer = scrollContainer;
      } else if (typeof scrollContainer === "string" && scrollContainer !== "") {
        _scrollContainer = document.querySelector(scrollContainer);
      } else {
        _scrollContainer = getScrollContainer(container.value);
      }
      if (_scrollContainer) {
        _lazyLoadHandler = throttle(onLazyLoad, 200);
        on(_scrollContainer, "scroll", _lazyLoadHandler);
        setTimeout(() => onLazyLoad(), 100);
      }
    }
    function removeLazyLoadListener() {
      if (!_scrollContainer || !_lazyLoadHandler)
        return;
      off(_scrollContainer, "scroll", _lazyLoadHandler);
      _scrollContainer = null;
      _lazyLoadHandler = null;
    }
    onMounted(() => {
      if (!props.lazy) {
        return loadImage();
      }
      nextTick(addLazyLoadLintener);
    });
    onBeforeUnmount(() => {
      props.lazy && removeLazyLoadListener();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        ref_key: "container",
        ref: container,
        class: normalizeClass(unref(bem).b()),
        style: normalizeStyle(`width:${_ctx.width}px;height:${_ctx.height}px`)
      }, [
        state.loading ? (openBlock(), createElementBlock("div", _hoisted_1, [
          renderSlot(_ctx.$slots, "placeholder", {}, () => [
            createTextVNode("加载中")
          ], true)
        ])) : state.isLoadError ? (openBlock(), createElementBlock("div", _hoisted_2, [
          renderSlot(_ctx.$slots, "error", {}, () => [
            createTextVNode("加载失败")
          ], true)
        ])) : (openBlock(), createElementBlock("img", {
          key: 2,
          src: _ctx.src,
          style: normalizeStyle(unref(imgStyle))
        }, null, 12, _hoisted_3))
      ], 6);
    };
  }
});
export {
  _sfc_main as default
};
