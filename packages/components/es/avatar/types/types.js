const AvatarShape = ["circle", "square"];
const AvatarSize = ["large", "middle", "small"];
const avatarProps = {
  shape: {
    type: String,
    validator(value) {
      return AvatarShape.includes(value);
    },
    default: "circle"
  },
  size: {
    type: String,
    validator(value) {
      return AvatarSize.includes(value);
    },
    default: "middle"
  },
  src: {
    type: String,
    default: ""
  },
  alt: String
};
export {
  AvatarShape,
  AvatarSize,
  avatarProps
};
