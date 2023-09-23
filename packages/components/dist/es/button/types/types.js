const ButtonType = ["primary", "success", "info", "warning", "danger"];
const ButtonSize = ["large", "middle", "small", "mini"];
const buttonProps = {
  type: {
    type: String,
    validator(value) {
      return ButtonType.includes(value);
    }
  },
  size: {
    type: String,
    validator(value) {
      return ButtonSize.includes(value);
    },
    default: "middle"
  },
  round: Boolean,
  disabled: Boolean
};
export {
  ButtonSize,
  ButtonType,
  buttonProps
};
