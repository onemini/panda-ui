"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
exports.ButtonSize = ButtonSize;
exports.ButtonType = ButtonType;
exports.buttonProps = buttonProps;
