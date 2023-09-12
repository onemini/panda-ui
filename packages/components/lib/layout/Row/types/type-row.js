"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const rowProps = {
  gutter: {
    type: [Number, String],
    default: 0
  },
  type: {
    type: String,
    default: "",
    validator: function(value) {
      return ["", "flex"].indexOf(value) !== -1;
    }
  },
  justify: {
    type: String,
    default: "center",
    validator(value) {
      return ["start", "end", "center", "space-around", "space-between"].indexOf(value) !== -1;
    }
  },
  align: {
    type: String,
    default: "middle",
    validator(value) {
      return ["top", "middle", "bottom"].indexOf(value) !== -1;
    }
  }
};
exports.rowProps = rowProps;
