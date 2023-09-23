"use strict";
const vue = require("vue");
const types = require("./types/types.js");
const create = require("../utils/create.js");
const _hoisted_1 = { key: 1 };
const __default__ = {
  name: "PdButton"
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  ...__default__,
  props: types.buttonProps,
  setup(__props) {
    const bem = create.createNamespace("button");
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("div", {
        class: vue.normalizeClass([vue.unref(bem).b(), vue.unref(bem).m(_ctx.size), vue.unref(bem).m(_ctx.type), vue.unref(bem).is("round", _ctx.round), vue.unref(bem).is("disabled", _ctx.disabled)])
      }, [
        _ctx.$slots.default ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, "Default"))
      ], 2);
    };
  }
});
module.exports = _sfc_main;
