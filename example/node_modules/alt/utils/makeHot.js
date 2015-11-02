"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function makeHot(alt, Store) {
  var name = arguments.length <= 2 || arguments[2] === undefined ? Store.displayName : arguments[2];
  return (function () {
    if (module.hot) {
      module.hot.dispose(function () {
        delete alt.stores[name];
      });
    }

    return alt.createStore(Store, name);
  })();
}

exports["default"] = makeHot;
module.exports = exports["default"];