import { defineComponent, ref, watch, openBlock, createBlock, Transition, withCtx, withDirectives, createElementVNode, normalizeClass, unref, normalizeStyle, vShow, pushScopeId, popScopeId } from "vue";
import { DtszNotifyProps } from "./types/types.js";
import { createNamespace } from "../utils/create.js";
const _withScopeId = (n) => (pushScopeId("data-v-2839ffe7"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
  })
], -1));
const _hoisted_2 = [
  _hoisted_1
];
const _hoisted_3 = { class: "el-notification__group" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("h4", { class: "el-notification__title" }, " 你好 ", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "el-notification__content" }, " 我是内容 ", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  })
], -1));
const _hoisted_7 = [
  _hoisted_6
];
const __default__ = {
  name: "DtszNotify"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: DtszNotifyProps,
  emits: ["NotifyVisibleValue"],
  setup(__props, { emit }) {
    const props = __props;
    const bem = createNamespace("notification");
    const ben = createNamespace("icon");
    function handleClose() {
      emit("NotifyVisibleValue", false);
    }
    const notification = ref();
    watch(
      () => props.notifyVisible,
      (newValue, oldValue) => {
        if (props.notifyVisible == true) {
          setTimeout(function() {
            emit("NotifyVisibleValue", false);
          }, 3e3);
        }
      }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, { name: "animate" }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            id: "notification_14",
            class: normalizeClass(["el-notification", [unref(bem).b(), unref(bem).m(_ctx.position)]]),
            role: "alert",
            style: normalizeStyle([{ "z-index": "2041" }, { "--dtsz-notification-width": _ctx.width }]),
            ref_key: "notification",
            ref: notification
          }, [
            createElementVNode("i", {
              class: normalizeClass([unref(ben).b(), unref(bem).m(_ctx.type), unref(bem).e("icon")])
            }, _hoisted_2, 2),
            createElementVNode("div", _hoisted_3, [
              _hoisted_4,
              _hoisted_5,
              createElementVNode("i", {
                class: "dtsz-icon el-notification__closeBtn",
                onClick: _cache[0] || (_cache[0] = ($event) => handleClose())
              }, _hoisted_7)
            ])
          ], 6), [
            [vShow, _ctx.notifyVisible]
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
