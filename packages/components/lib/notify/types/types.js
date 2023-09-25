"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const Type = ["success", "warning", "error"];
const PdNotifyProps = {
  type: {
    type: String,
    validator(value) {
      return Type.includes(value);
    },
    default: "success"
  },
  title: {
    type: String,
    default: "Tips"
  },
  width: {
    type: String,
    default: "330px"
  },
  notifyVisible: {
    type: Boolean,
    default: false
  },
  position: {
    type: String,
    default: "top-right"
  }
};
exports.PdNotifyProps = PdNotifyProps;
exports.Type = Type;
