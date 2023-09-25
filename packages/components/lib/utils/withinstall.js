"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
function withInstall(comp) {
  comp.install = (app) => {
    const name = comp.name || comp.__name;
    app.component(name, comp);
  };
  return comp;
}
exports.withInstall = withInstall;
