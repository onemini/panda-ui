const backToTopType = ["normal", "blueColor"];
const backToTopProps = {
  type: {
    type: String,
    validator(value) {
      return backToTopType.includes(value);
    }
  },
  rightLen: {
    type: String,
    default: "40px"
  },
  bottomLen: {
    type: String,
    default: "50px"
  },
  disabled: Boolean
};
export {
  backToTopProps,
  backToTopType
};
