"use strict";
const image = require("./image.vue.js");
const withinstall = require("../utils/withinstall.js");
const PdImage = withinstall.withInstall(image);
module.exports = PdImage;
