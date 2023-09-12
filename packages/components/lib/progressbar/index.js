"use strict";
const DtszProgressbar = require("./DtszProgressbar.vue.js");
const withinstall = require("../utils/withinstall.js");
const DProgressbar = withinstall.withInstall(DtszProgressbar);
module.exports = DProgressbar;
