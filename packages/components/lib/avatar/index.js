"use strict";
const avatar = require("./avatar.vue.js");
const withinstall = require("../utils/withinstall.js");
const PdAvatar = withinstall.withInstall(avatar);
module.exports = PdAvatar;
