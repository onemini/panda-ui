import { defineComponent, onMounted, computed } from "vue";
import { iconProps } from "./types/types.js";
import { createNamespace } from "../utils/create.js";
const _sfc_main = defineComponent({
  props: iconProps,
  setup(props) {
    const bem = createNamespace("icon");
    onMounted(() => {
      import("./font/iconfont.js");
    });
    const iconName = computed(() => {
      return `#icon-${props.name}`;
    });
    const styleDot = computed(() => {
      return {
        [`pd-dot`]: props.dot && !props.badge
      };
    });
    const badge = computed(() => {
      return props.badge;
    });
    const iconColor = computed(() => {
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
export {
  _sfc_main as default
};
