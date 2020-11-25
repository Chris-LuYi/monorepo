(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.foo = {}));
}(this, (function (exports) { 'use strict';

  function demoLib2() {
    // TODO
    console.log(123132);
    return "123123";
  }

  exports.demoLib2 = demoLib2;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
