const imageProps = {
  width: {
    type: [Number, String],
    default: null
  },
  // 容器宽度
  height: {
    type: [Number, String],
    default: null
  },
  src: {
    type: String,
    default: ""
  },
  fit: {
    type: String,
    values: ["contain", "cover", "fill", "none", "scale-down"],
    default: "cover"
  },
  lazy: {
    type: Boolean,
    default: false
  },
  radius: {
    type: [Number, String],
    default: ""
  },
  scrollContainer: {
    type: String,
    default: ""
  }
};
export {
  imageProps
};
