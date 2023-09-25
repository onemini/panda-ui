"use strict";
const vue = require("vue");
const types = require("./types/types.js");
const create = require("../utils/create.js");
const _withScopeId = (n) => (vue.pushScopeId("data-v-1571383f"), n = n(), vue.popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
  })
], -1));
const _hoisted_2 = [
  _hoisted_1
];
const _hoisted_3 = { class: "el-notification__group" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("h4", { class: "el-notification__title" }, " 你好 ", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("div", { class: "el-notification__content" }, " 我是内容 ", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ vue.createElementVNode("svg", {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ vue.createElementVNode("path", {
    fill: "currentColor",
    d: "M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"
  })
], -1));
const _hoisted_7 = [
  _hoisted_6
];
const __default__ = {
  name: "PdNotify"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: types.PdNotifyProps,
  emits: ["NotifyVisibleValue"],
  setup(__props, { emit }) {
    const props = __props;
    const bem = create.createNamespace("notification");
    const ben = create.createNamespace("icon");
    function handleClose() {
      emit("NotifyVisibleValue", false);
    }
    const notification = vue.ref();
    vue.watch(
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
      return vue.openBlock(), vue.createBlock(vue.Transition, { name: "animate" }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("div", {
            id: "notification_14",
            class: vue.normalizeClass(["el-notification", [vue.unref(bem).b(), vue.unref(bem).m(_ctx.position)]]),
            role: "alert",
            style: vue.normalizeStyle([{ "z-index": "2041" }, { "--pd-notification-width": _ctx.width }]),
            ref_key: "notification",
            ref: notification
          }, [
            vue.createElementVNode("i", {
              class: vue.normalizeClass([vue.unref(ben).b(), vue.unref(bem).m(_ctx.type), vue.unref(bem).e("icon")])
            }, _hoisted_2, 2),
            vue.createElementVNode("div", _hoisted_3, [
              _hoisted_4,
              _hoisted_5,
              vue.createElementVNode("i", {
                class: "pd-icon el-notification__closeBtn",
                onClick: _cache[0] || (_cache[0] = ($event) => handleClose())
              }, _hoisted_7)
            ])
          ], 6), [
            [vue.vShow, _ctx.notifyVisible]
          ])
        ]),
        _: 1
      });
    };
  }
});
module.exports = _sfc_main;
