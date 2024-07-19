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

/***/ "./components/_App/Layout.js":
/*!***********************************!*\
  !*** ./components/_App/Layout.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_App_LeftSidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/_App/LeftSidebar */ \"./components/_App/LeftSidebar/index.js\");\n/* harmony import */ var _components_App_TopNavbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/_App/TopNavbar */ \"./components/_App/TopNavbar/index.js\");\n/* harmony import */ var _components_App_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/_App/Footer */ \"./components/_App/Footer.js\");\n/* harmony import */ var _ScrollToTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ScrollToTop */ \"./components/_App/ScrollToTop.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Box!=!@mui/material */ \"__barrel_optimize__?names=Box!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _context_todoContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/todoContext */ \"./context/todoContext.js\");\n/* harmony import */ var store_auth_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! store/auth/services */ \"./store/auth/services.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n // Correct path to context file\n\nconst Layout = (param)=>{\n    let { children } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch)();\n    const toogleActive = ()=>{\n        setActive(!active);\n    };\n    const { isAuthenticated, role, otpVerified, validToken } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>state.auth);\n    console.log(\"isAuthenticated\", isAuthenticated);\n    // const { business } = useSelector((state) => state.business);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                if (validToken.dataFetched) {\n                    if (validToken.validToken) {\n                        if (router.pathname.includes(\"/authentication\")) {\n                            router.push(\"/\");\n                        }\n                    } else {\n                        if (!router.pathname.includes(\"/authentication\")) {\n                            if (!isAuthenticated) {\n                                router.push(\"/authentication/sign-in\");\n                            }\n                        }\n                    }\n                    setTimeout(()=>{\n                        setLoading(false);\n                    }, 1000);\n                }\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, [\n        dispatch,\n        isAuthenticated,\n        otpVerified,\n        role,\n        router,\n        validToken.dataFetched,\n        validToken.validToken\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!validToken.dataFetched) {\n            dispatch((0,store_auth_services__WEBPACK_IMPORTED_MODULE_9__.checkTokenIsValidFunApi)());\n        }\n    }, [\n        dispatch,\n        validToken.dataFetched\n    ]);\n    if (validToken.isLoading || loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_11__.Box, {\n        display: \"flex\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        sx: {\n            height: \"100vh\"\n        },\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/_App/Layout.js\",\n        lineNumber: 77,\n        columnNumber: 7\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_todoContext__WEBPACK_IMPORTED_MODULE_8__.TodoProvider, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"main-wrapper-content \".concat(active && \"active\"),\n                    children: [\n                        !router.pathname.includes(\"/authentication/\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_TopNavbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    toogleActive: toogleActive\n                                }, void 0, false, {\n                                    fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/_App/Layout.js\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_LeftSidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                    toogleActive: toogleActive\n                                }, void 0, false, {\n                                    fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/_App/Layout.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"main-content\",\n                            children: [\n                                children,\n                                !router.pathname.includes(\"/authentication/\") && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/_App/Layout.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 61\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_App_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/_App/Layout.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 11\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/_App/Layout.js\",\n                            lineNumber: 100,\n                            columnNumber: 9\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/_App/Layout.js\",\n                    lineNumber: 92,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ScrollToTop__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/_App/Layout.js\",\n                    lineNumber: 108,\n                    columnNumber: 7\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/_App/Layout.js\",\n            lineNumber: 89,\n            columnNumber: 6\n        }, undefined)\n    }, void 0, false);\n};\n_s(Layout, \"0rgyLe47a7jJ7zwbktL0w/cuTdE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_10__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eW91dC5qcz8wZjhiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExlZnRTaWRlYmFyIGZyb20gXCJAL2NvbXBvbmVudHMvX0FwcC9MZWZ0U2lkZWJhclwiO1xuaW1wb3J0IFRvcE5hdmJhciBmcm9tIFwiQC9jb21wb25lbnRzL19BcHAvVG9wTmF2YmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCJAL2NvbXBvbmVudHMvX0FwcC9Gb290ZXJcIjtcbmltcG9ydCBTY3JvbGxUb1RvcCBmcm9tIFwiLi9TY3JvbGxUb1RvcFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgVG9kb1Byb3ZpZGVyIH0gZnJvbSBcIi4uLy4uL2NvbnRleHQvdG9kb0NvbnRleHRcIjsgLy8gQ29ycmVjdCBwYXRoIHRvIGNvbnRleHQgZmlsZVxuaW1wb3J0IHsgY2hlY2tUb2tlbklzVmFsaWRGdW5BcGkgfSBmcm9tIFwic3RvcmUvYXV0aC9zZXJ2aWNlc1wiO1xuXG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgdG9vZ2xlQWN0aXZlID0gKCkgPT4ge1xuICAgIHNldEFjdGl2ZSghYWN0aXZlKTtcbiAgfTtcbiAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQsIHJvbGUsIG90cFZlcmlmaWVkLCB2YWxpZFRva2VuIH0gPSB1c2VTZWxlY3RvcihcbiAgICAoc3RhdGUpID0+IHN0YXRlLmF1dGhcbiAgKTtcblxuICBjb25zb2xlLmxvZyhcImlzQXV0aGVudGljYXRlZFwiLGlzQXV0aGVudGljYXRlZClcbiAgXG4gIC8vIGNvbnN0IHsgYnVzaW5lc3MgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYnVzaW5lc3MpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHZhbGlkVG9rZW4uZGF0YUZldGNoZWQpIHtcbiAgICAgICAgICBpZiAodmFsaWRUb2tlbi52YWxpZFRva2VuKSB7XG4gICAgICAgICAgICBpZiAocm91dGVyLnBhdGhuYW1lLmluY2x1ZGVzKFwiL2F1dGhlbnRpY2F0aW9uXCIpKSB7XG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IFxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFyb3V0ZXIucGF0aG5hbWUuaW5jbHVkZXMoXCIvYXV0aGVudGljYXRpb25cIikpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc0F1dGhlbnRpY2F0ZWQpIHtcbiAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9hdXRoZW50aWNhdGlvbi9zaWduLWluXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIGRhdGE6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtcbiAgICBkaXNwYXRjaCxcbiAgICBpc0F1dGhlbnRpY2F0ZWQsXG4gICAgb3RwVmVyaWZpZWQsXG4gICAgcm9sZSxcbiAgICByb3V0ZXIsXG4gICAgdmFsaWRUb2tlbi5kYXRhRmV0Y2hlZCxcbiAgICB2YWxpZFRva2VuLnZhbGlkVG9rZW4sXG4gIF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCF2YWxpZFRva2VuLmRhdGFGZXRjaGVkKSB7XG4gICAgICBkaXNwYXRjaChjaGVja1Rva2VuSXNWYWxpZEZ1bkFwaSgpKTtcbiAgICB9XG4gIH0sIFtkaXNwYXRjaCwgdmFsaWRUb2tlbi5kYXRhRmV0Y2hlZF0pO1xuXG4gIGlmICh2YWxpZFRva2VuLmlzTG9hZGluZyB8fCBsb2FkaW5nKVxuICAgIHJldHVybiAoXG4gICAgICA8Qm94XG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgc3g9e3sgaGVpZ2h0OiBcIjEwMHZoXCIgfX1cbiAgICAgID4gICAgXG4gICAgICAgIExvYWRpbmcuLi5cbiAgICAgIDwvQm94PlxuICAgICk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICA8VG9kb1Byb3ZpZGVyPlxuICAgICBcblxuICAgICAgPGRpdiBjbGFzc05hbWU9e2BtYWluLXdyYXBwZXItY29udGVudCAke2FjdGl2ZSAmJiBcImFjdGl2ZVwifWB9PlxuICAgICAgICB7IXJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhcIi9hdXRoZW50aWNhdGlvbi9cIikgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8VG9wTmF2YmFyIHRvb2dsZUFjdGl2ZT17dG9vZ2xlQWN0aXZlfSAvPlxuICAgICAgICAgICAgPExlZnRTaWRlYmFyIHRvb2dsZUFjdGl2ZT17dG9vZ2xlQWN0aXZlfSAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApfSBcblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICB7IXJvdXRlci5wYXRobmFtZS5pbmNsdWRlcyhcIi9hdXRoZW50aWNhdGlvbi9cIikgJiYgPEZvb3RlciAvPn1cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiBTY3JvbGxUb1RvcCAqL31cbiAgICAgIDxTY3JvbGxUb1RvcCAvPlxuICAgICAgPC9Ub2RvUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSGVhZCIsInVzZVJvdXRlciIsIkxlZnRTaWRlYmFyIiwiVG9wTmF2YmFyIiwiRm9vdGVyIiwiU2Nyb2xsVG9Ub3AiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwiQm94IiwiVG9kb1Byb3ZpZGVyIiwiY2hlY2tUb2tlbklzVmFsaWRGdW5BcGkiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInJvdXRlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiZGlzcGF0Y2giLCJ0b29nbGVBY3RpdmUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJyb2xlIiwib3RwVmVyaWZpZWQiLCJ2YWxpZFRva2VuIiwic3RhdGUiLCJhdXRoIiwiY29uc29sZSIsImxvZyIsImZldGNoRGF0YSIsImRhdGFGZXRjaGVkIiwicGF0aG5hbWUiLCJpbmNsdWRlcyIsInB1c2giLCJzZXRUaW1lb3V0IiwiZXJyb3IiLCJpc0xvYWRpbmciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwic3giLCJoZWlnaHQiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/_App/Layout.js\n"));

/***/ })

});