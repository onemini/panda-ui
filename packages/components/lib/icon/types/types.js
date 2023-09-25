"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const iconProps = {
  name: {
    type: String
  },
  dot: {
    type: Boolean
  },
  type: {
    type: String,
    // [large, middle, small, mini] => [5em, 3em, 2em, 1em]
    default: "mini"
  },
  badge: {
    type: String
  },
  color: {
    type: String
  }
};
exports.iconProps = iconProps;
