"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const navType = ["whiteColor", "blackColor"];
const navProps = {
  type: {
    type: String,
    validator(value) {
      return navType.includes(value);
    }
  },
  disabled: Boolean
};
exports.navProps = navProps;
exports.navType = navType;
