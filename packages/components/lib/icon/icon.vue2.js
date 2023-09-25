"use strict";
const vue = require("vue");
const types = require("./types/types.js");
const create = require("../utils/create.js");
const _sfc_main = vue.defineComponent({
  props: types.iconProps,
  setup(props) {
    const bem = create.createNamespace("icon");
    vue.onMounted(() => {
      Promise.resolve().then(() => require("./font/iconfont.js"));
    });
    const iconName = vue.computed(() => {
      return `#icon-${props.name}`;
    });
    const styleDot = vue.computed(() => {
      return {
        [`pd-dot`]: props.dot && !props.badge
      };
    });
    const badge = vue.computed(() => {
      return props.badge;
    });
    const iconColor = vue.computed(() => {
      return {
        color: props.color
      };
    });
    return {
      iconName,
      styleDot,
      badge,
      iconColor,
      bem
    };
  }
});
module.exports = _sfc_main;
