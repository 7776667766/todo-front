"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./store/auth/constrants.js":
/*!**********************************!*\
  !*** ./store/auth/constrants.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkTokenIsValidApi: function() { return /* binding */ checkTokenIsValidApi; },\n/* harmony export */   deleteTodoApi: function() { return /* binding */ deleteTodoApi; },\n/* harmony export */   loginApi: function() { return /* binding */ loginApi; },\n/* harmony export */   logoutApi: function() { return /* binding */ logoutApi; },\n/* harmony export */   registerApi: function() { return /* binding */ registerApi; }\n/* harmony export */ });\nconst loginApi = \"auth/login\";\nconst registerApi = \"auth/register\";\nconst checkTokenIsValidApi = \"auth/token-is-valid\";\nconst logoutApi = \"auth/logout\";\nconst deleteTodoApi = (todoId)=>\"/todo/delete/\".concat(todoId);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9hdXRoL2NvbnN0cmFudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxNQUFNQSxXQUFXLGFBQWE7QUFDOUIsTUFBTUMsY0FBYyxnQkFBZ0I7QUFDcEMsTUFBTUMsdUJBQXVCLHNCQUFzQjtBQUNuRCxNQUFNQyxZQUFZLGNBQWM7QUFDaEMsTUFBTUMsZ0JBQWdCLENBQUNDLFNBQVcsZ0JBQXVCLE9BQVBBLFFBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvYXV0aC9jb25zdHJhbnRzLmpzP2I4ZWYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGxvZ2luQXBpID0gXCJhdXRoL2xvZ2luXCI7XG5leHBvcnQgY29uc3QgcmVnaXN0ZXJBcGkgPSBcImF1dGgvcmVnaXN0ZXJcIjtcbmV4cG9ydCBjb25zdCBjaGVja1Rva2VuSXNWYWxpZEFwaSA9IFwiYXV0aC90b2tlbi1pcy12YWxpZFwiO1xuZXhwb3J0IGNvbnN0IGxvZ291dEFwaSA9IFwiYXV0aC9sb2dvdXRcIjtcbmV4cG9ydCBjb25zdCBkZWxldGVUb2RvQXBpID0gKHRvZG9JZCkgPT4gYC90b2RvL2RlbGV0ZS8ke3RvZG9JZH1gO1xuXG5cblxuIl0sIm5hbWVzIjpbImxvZ2luQXBpIiwicmVnaXN0ZXJBcGkiLCJjaGVja1Rva2VuSXNWYWxpZEFwaSIsImxvZ291dEFwaSIsImRlbGV0ZVRvZG9BcGkiLCJ0b2RvSWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/auth/constrants.js\n"));

/***/ })

});