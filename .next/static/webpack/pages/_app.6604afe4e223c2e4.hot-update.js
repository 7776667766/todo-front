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

/***/ "./helper/api.js":
/*!***********************!*\
  !*** ./helper/api.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n// import API from \"axios\";\n// const requestHandler = {\n//   Headers: {\n//     \"Content-Type\": \"application/json\",\n//     Accept: \"application/json\",\n//     \"Access-Control-Allow-Origin\": \"*\",\n//     \"Access-Control-Allow-Methods\": \"*\", // GET, POST, PUT, DELETE, OPTIONS\n//     \"Access-Control-Allow-Credentials\": true,\n//   },\n// };\n// const axios = API.create({\n//   baseURL: \"https://todo-mzq06yc1o-7776667766s-projects.vercel.app/api\",\n//   headers: requestHandler.Headers,\n// });\n// axios.interceptors.request.use((request) => {\n//   const token = localStorage.getItem(\"token\");\n//   if (token) {\n//     request.headers.Authorization = `Bearer ${token}`;\n//   }\n//   return request;\n// });\n// export default axios;\n\nconst instance = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: \"http://localhost:8000\",\n    headers: {\n        \"Content-Type\": \"application/json\",\n        Accept: \"application/json\"\n    }\n});\ninstance.interceptors.request.use((config)=>{\n    const token = localStorage.getItem(\"token\");\n    if (token) {\n        config.headers.Authorization = \"Bearer \".concat(token);\n    }\n    return config;\n}, (error)=>{\n    return Promise.reject(error);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (instance);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXIvYXBpLmpzIiwibWFwcGluZ3MiOiI7O0FBQUEsMkJBQTJCO0FBRTNCLDJCQUEyQjtBQUMzQixlQUFlO0FBQ2YsMENBQTBDO0FBQzFDLGtDQUFrQztBQUNsQywwQ0FBMEM7QUFDMUMsOEVBQThFO0FBQzlFLGdEQUFnRDtBQUNoRCxPQUFPO0FBQ1AsS0FBSztBQUVMLDZCQUE2QjtBQUM3QiwyRUFBMkU7QUFDM0UscUNBQXFDO0FBQ3JDLE1BQU07QUFFTixnREFBZ0Q7QUFDaEQsaURBQWlEO0FBQ2pELGlCQUFpQjtBQUNqQix5REFBeUQ7QUFDekQsTUFBTTtBQUNOLG9CQUFvQjtBQUNwQixNQUFNO0FBRU4sd0JBQXdCO0FBR0U7QUFFMUIsTUFBTUMsV0FBV0Qsb0RBQVksQ0FBQztJQUM1QkcsU0FBUztJQUNUQyxTQUFTO1FBQ1AsZ0JBQWdCO1FBQ2hCQyxRQUFRO0lBQ1Y7QUFDRjtBQUVBSixTQUFTSyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUMvQixDQUFDQztJQUNDLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztJQUNuQyxJQUFJRixPQUFPO1FBQ1RELE9BQU9MLE9BQU8sQ0FBQ1MsYUFBYSxHQUFHLFVBQWdCLE9BQU5IO0lBQzNDO0lBQ0EsT0FBT0Q7QUFDVCxHQUNBLENBQUNLO0lBQ0MsT0FBT0MsUUFBUUMsTUFBTSxDQUFDRjtBQUN4QjtBQUdGLCtEQUFlYixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hlbHBlci9hcGkuanM/OWY0MiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgQVBJIGZyb20gXCJheGlvc1wiO1xuXG4vLyBjb25zdCByZXF1ZXN0SGFuZGxlciA9IHtcbi8vICAgSGVhZGVyczoge1xuLy8gICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuLy8gICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4vLyAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIjogXCIqXCIsXG4vLyAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1NZXRob2RzXCI6IFwiKlwiLCAvLyBHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBPUFRJT05TXG4vLyAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiOiB0cnVlLFxuLy8gICB9LFxuLy8gfTtcblxuLy8gY29uc3QgYXhpb3MgPSBBUEkuY3JlYXRlKHtcbi8vICAgYmFzZVVSTDogXCJodHRwczovL3RvZG8tbXpxMDZ5YzFvLTc3NzY2Njc3NjZzLXByb2plY3RzLnZlcmNlbC5hcHAvYXBpXCIsXG4vLyAgIGhlYWRlcnM6IHJlcXVlc3RIYW5kbGVyLkhlYWRlcnMsXG4vLyB9KTtcblxuLy8gYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKChyZXF1ZXN0KSA9PiB7XG4vLyAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcbi8vICAgaWYgKHRva2VuKSB7XG4vLyAgICAgcmVxdWVzdC5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7dG9rZW59YDtcbi8vICAgfVxuLy8gICByZXR1cm4gcmVxdWVzdDtcbi8vIH0pO1xuXG4vLyBleHBvcnQgZGVmYXVsdCBheGlvcztcblxuXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjgwMDBcIixcbiAgaGVhZGVyczoge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIH0sXG59KTtcblxuaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKFxuICAoY29uZmlnKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt0b2tlbn1gO1xuICAgIH1cbiAgICByZXR1cm4gY29uZmlnO1xuICB9LFxuICAoZXJyb3IpID0+IHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICB9XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcblxuXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJpbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQWNjZXB0IiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkF1dGhvcml6YXRpb24iLCJlcnJvciIsIlByb21pc2UiLCJyZWplY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helper/api.js\n"));

/***/ })

});