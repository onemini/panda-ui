"use strict";
const PdProgressbar = require("./PdProgressbar.vue.js");
const withinstall = require("../utils/withinstall.js");
const DProgressbar = withinstall.withInstall(PdProgressbar);
module.exports = DProgressbar;
