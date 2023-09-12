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
export {
  navProps,
  navType
};
