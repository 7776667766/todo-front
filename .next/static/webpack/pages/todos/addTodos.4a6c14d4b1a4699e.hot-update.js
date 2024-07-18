"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/todos/addTodos",{

/***/ "./components/Forms/FormLayouts/AddTodoForm.js":
/*!*****************************************************!*\
  !*** ./components/Forms/FormLayouts/AddTodoForm.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Box_FormControlLabel_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Box,FormControlLabel,Typography!=!@mui/material */ \"__barrel_optimize__?names=Box,FormControlLabel,Typography!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Card */ \"./node_modules/@mui/material/Card/index.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Grid */ \"./node_modules/@mui/material/Grid/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TextField */ \"./node_modules/@mui/material/TextField/index.js\");\n/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/Send */ \"./node_modules/@mui/icons-material/Send.js\");\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ \"./node_modules/yup/index.esm.js\");\n/* harmony import */ var _hooks_useTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hooks/useTodo */ \"./hooks/useTodo.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Checkbox */ \"./node_modules/@mui/material/Checkbox/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n // Corrected import\nconst AddTodosForm = (param)=>{\n    let { formData, isEditMode } = param;\n    _s();\n    console.log(\"formdata todo\", formData);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const { addTodoFunApi, updateTodoFunApi } = (0,_hooks_useTodo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const initialValues = isEditMode ? {\n        ...formData,\n        completed: false\n    } : {\n        title: \"\",\n        description: \"\"\n    };\n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_5__.useFormik)({\n        initialValues: initialValues,\n        validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__.object({\n            title: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"title is required\"),\n            description: yup__WEBPACK_IMPORTED_MODULE_2__.string().required(\"description is required\")\n        }),\n        onSubmit: async (values)=>{\n            try {\n                if (isEditMode) {\n                    await updateTodoFunApi({\n                        todoId: formData.id,\n                        data: values,\n                        onSuccess: ()=>{\n                            console.log(\"Update Todo Success\");\n                            router.push(\"/todos\");\n                        }\n                    });\n                } else {\n                    await addTodoFunApi({\n                        data: values,\n                        onSuccess: ()=>{\n                            console.log(\"Add Todo Success\");\n                            router.push(\"/todos\");\n                        }\n                    });\n                }\n            } catch (error) {\n                console.error(\"Error:\", error);\n            }\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            sx: {\n                boxShadow: \"none\",\n                borderRadius: \"10px\",\n                p: \"25px 20px 15px\",\n                mb: \"15px\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_FormControlLabel_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                component: \"form\",\n                noValidate: true,\n                onSubmit: formik.handleSubmit,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    container: true,\n                    alignItems: \"center\",\n                    spacing: 2,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            item: true,\n                            xs: 12,\n                            md: 12,\n                            lg: 6,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_FormControlLabel_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                                    as: \"h5\",\n                                    sx: {\n                                        fontWeight: \"500\",\n                                        fontSize: \"14px\",\n                                        mb: \"12px\"\n                                    },\n                                    children: \"Todo Title\"\n                                }, void 0, false, {\n                                    fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/Forms/FormLayouts/AddTodoForm.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    autoComplete: \"title\",\n                                    name: \"title\",\n                                    fullWidth: true,\n                                    id: \"name\",\n                                    label: \"Enter title\",\n                                    ...formik.getFieldProps(\"title\"),\n                                    error: formik.touched.title && formik.errors.title ? true : false,\n                                    helperText: formik.touched.title && formik.errors.title ? formik.errors.title : \"\",\n                                    InputProps: {\n                                        style: {\n                                            borderRadius: 8\n                                        }\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/Forms/FormLayouts/AddTodoForm.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/Forms/FormLayouts/AddTodoForm.js\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            item: true,\n                            xs: 12,\n                            md: 12,\n                            lg: 6,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_FormControlLabel_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                                    as: \"h5\",\n                                    sx: {\n                                        fontWeight: \"500\",\n                                        fontSize: \"14px\",\n                                        mb: \"12px\"\n                                    },\n                                    children: \"Description\"\n                                }, void 0, false, {\n                                    fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/Forms/FormLayouts/AddTodoForm.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                    name: \"description\",\n                                    fullWidth: true,\n                                    label: \"Enter Description\",\n                                    ...formik.getFieldProps(\"description\"),\n                                    error: formik.touched.description && formik.errors.description ? true : false,\n                                    helperText: formik.touched.description && formik.errors.description ? formik.errors.description : \"\",\n                                    InputProps: {\n                                        style: {\n                                            borderRadius: 8\n                                        }\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/Forms/FormLayouts/AddTodoForm.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/Forms/FormLayouts/AddTodoForm.js\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            item: true,\n                            xs: 12,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Box_FormControlLabel_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__.FormControlLabel, {\n                                control: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                    name: \"completed\",\n                                    checked: formik.values.completed,\n                                    onChange: (e)=>formik.setFieldValue(\"completed\", e.target.checked),\n                                    color: \"primary\"\n                                }, void 0, false, void 0, void 0),\n                                label: \"Completed\"\n                            }, void 0, false, {\n                                fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/Forms/FormLayouts/AddTodoForm.js\",\n                                lineNumber: 135,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/Forms/FormLayouts/AddTodoForm.js\",\n                            lineNumber: 134,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            item: true,\n                            xs: 12,\n                            textAlign: \"left\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                type: \"submit\",\n                                variant: \"contained\",\n                                sx: {\n                                    mt: 1,\n                                    textTransform: \"capitalize\",\n                                    borderRadius: \"8px\",\n                                    fontWeight: \"500\",\n                                    fontSize: \"13px\",\n                                    padding: \"12px 20px\",\n                                    color: \"#fff !important\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                        sx: {\n                                            position: \"relative\",\n                                            top: \"-2px\"\n                                        },\n                                        className: \"mr-5px\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/Forms/FormLayouts/AddTodoForm.js\",\n                                        lineNumber: 163,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    \" \",\n                                    isEditMode ? \"UPDATE TODO\" : \"ADD TODO\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/Forms/FormLayouts/AddTodoForm.js\",\n                                lineNumber: 150,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/Forms/FormLayouts/AddTodoForm.js\",\n                            lineNumber: 149,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/Forms/FormLayouts/AddTodoForm.js\",\n                    lineNumber: 73,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/Forms/FormLayouts/AddTodoForm.js\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/badmash/Desktop/projecttask/todo-front/components/Forms/FormLayouts/AddTodoForm.js\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(AddTodosForm, \"Jt19NsHmwaWWl4RMMfRK/gpeLN8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _hooks_useTodo__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        formik__WEBPACK_IMPORTED_MODULE_5__.useFormik\n    ];\n});\n_c = AddTodosForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddTodosForm);\nvar _c;\n$RefreshReg$(_c, \"AddTodosForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm1zL0Zvcm1MYXlvdXRzL0FkZFRvZG9Gb3JtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDeUI7QUFDNUI7QUFDQTtBQUNJO0FBQ007QUFDQTtBQUNiO0FBQ1I7QUFDa0I7QUFDTDtBQUNNLENBQUMsbUJBQW1CO0FBRWxFLE1BQU1lLGVBQWU7UUFBQyxFQUFFQyxRQUFRLEVBQUVDLFVBQVUsRUFBRTs7SUFDNUNDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJIO0lBQzdCLE1BQU1JLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNLEVBQ0pRLGFBQWEsRUFDYkMsZ0JBQWdCLEVBQ2pCLEdBQUdWLDBEQUFPQTtJQUlYLE1BQU1XLGdCQUFnQk4sYUFDbEI7UUFBRSxHQUFHRCxRQUFRO1FBQUVRLFdBQVc7SUFBTSxJQUNoQztRQUNBQyxPQUFPO1FBQ1BDLGFBQWE7SUFDZjtJQUVGLE1BQU1DLFNBQVNqQixpREFBU0EsQ0FBQztRQUN2QmEsZUFBZUE7UUFDZkssa0JBQWtCakIsdUNBQVUsQ0FBQztZQUMzQmMsT0FBT2QsdUNBQVUsR0FBR29CLFFBQVEsQ0FBQztZQUM3QkwsYUFBYWYsdUNBQVUsR0FBR29CLFFBQVEsQ0FBQztRQUNyQztRQUNBQyxVQUFVLE9BQU9DO1lBQ2YsSUFBSTtnQkFDRixJQUFJaEIsWUFBWTtvQkFDZCxNQUFNSyxpQkFBaUI7d0JBQ3JCWSxRQUFRbEIsU0FBU21CLEVBQUU7d0JBQ25CQyxNQUFNSDt3QkFDTkksV0FBVzs0QkFDVG5CLFFBQVFDLEdBQUcsQ0FBQzs0QkFDWkMsT0FBT2tCLElBQUksQ0FBQzt3QkFDZDtvQkFDRjtnQkFDRixPQUFPO29CQUNMLE1BQU1qQixjQUFjO3dCQUNsQmUsTUFBTUg7d0JBQ05JLFdBQVc7NEJBQ1RuQixRQUFRQyxHQUFHLENBQUM7NEJBQ1pDLE9BQU9rQixJQUFJLENBQUM7d0JBQ2Q7b0JBQ0Y7Z0JBQ0Y7WUFDRixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RyQixR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aUVBQVFBO3dDQUNQK0IsSUFBSTs0Q0FDRnlDLFVBQVU7NENBQ1ZDLEtBQUs7d0NBQ1A7d0NBQ0FDLFdBQVU7Ozs7OztvQ0FDVDtvQ0FDRmxFLGFBQWEsZ0JBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVE5QztHQXBLTUY7O1FBRVdGLGtEQUFTQTtRQUlwQkQsc0RBQU9BO1FBV0lGLDZDQUFTQTs7O0tBakJwQks7QUFzS04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3Jtcy9Gb3JtTGF5b3V0cy9BZGRUb2RvRm9ybS5qcz85NGJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEJveCwgRm9ybUNvbnRyb2xMYWJlbCwgVHlwb2dyYXBoeSB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgQ2FyZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9DYXJkXCI7XG5pbXBvcnQgR3JpZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9HcmlkXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0J1dHRvblwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG11aS9tYXRlcmlhbC9UZXh0RmllbGRcIjtcbmltcG9ydCBTZW5kSWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9TZW5kXCI7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgKiBhcyBZdXAgZnJvbSBcInl1cFwiO1xuaW1wb3J0IHVzZVRvZG8gZnJvbSBcIi4uLy4uLy4uL2hvb2tzL3VzZVRvZG9cIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IENoZWNrYm94IGZyb20gXCJAbXVpL21hdGVyaWFsL0NoZWNrYm94XCI7IC8vIENvcnJlY3RlZCBpbXBvcnRcblxuY29uc3QgQWRkVG9kb3NGb3JtID0gKHsgZm9ybURhdGEsIGlzRWRpdE1vZGUgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhcImZvcm1kYXRhIHRvZG9cIiwgZm9ybURhdGEpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHtcbiAgICBhZGRUb2RvRnVuQXBpLFxuICAgIHVwZGF0ZVRvZG9GdW5BcGlcbiAgfSA9IHVzZVRvZG8oKTtcblxuXG5cbiAgY29uc3QgaW5pdGlhbFZhbHVlcyA9IGlzRWRpdE1vZGVcbiAgICA/IHsgLi4uZm9ybURhdGEsIGNvbXBsZXRlZDogZmFsc2UgfVxuICAgIDoge1xuICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICB9O1xuXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XG4gICAgaW5pdGlhbFZhbHVlczogaW5pdGlhbFZhbHVlcyxcbiAgICB2YWxpZGF0aW9uU2NoZW1hOiBZdXAub2JqZWN0KHtcbiAgICAgIHRpdGxlOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJ0aXRsZSBpcyByZXF1aXJlZFwiKSxcbiAgICAgIGRlc2NyaXB0aW9uOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJkZXNjcmlwdGlvbiBpcyByZXF1aXJlZFwiKVxuICAgIH0pLFxuICAgIG9uU3VibWl0OiBhc3luYyAodmFsdWVzKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaXNFZGl0TW9kZSkge1xuICAgICAgICAgIGF3YWl0IHVwZGF0ZVRvZG9GdW5BcGkoe1xuICAgICAgICAgICAgdG9kb0lkOiBmb3JtRGF0YS5pZCxcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlcyxcbiAgICAgICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlVwZGF0ZSBUb2RvIFN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3RvZG9zXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhd2FpdCBhZGRUb2RvRnVuQXBpKHtcbiAgICAgICAgICAgIGRhdGE6IHZhbHVlcyxcbiAgICAgICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZCBUb2RvIFN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3RvZG9zXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxDYXJkXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgYm94U2hhZG93OiBcIm5vbmVcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTBweFwiLFxuICAgICAgICAgIHA6IFwiMjVweCAyMHB4IDE1cHhcIixcbiAgICAgICAgICBtYjogXCIxNXB4XCIsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxCb3ggY29tcG9uZW50PVwiZm9ybVwiIG5vVmFsaWRhdGUgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBhbGlnbkl0ZW1zPVwiY2VudGVyXCIgc3BhY2luZz17Mn0+XG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfSBsZz17Nn0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgYXM9XCJoNVwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICBtYjogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFRvZG8gVGl0bGVcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkVudGVyIHRpdGxlXCJcbiAgICAgICAgICAgICAgICB7Li4uZm9ybWlrLmdldEZpZWxkUHJvcHMoXCJ0aXRsZVwiKX1cbiAgICAgICAgICAgICAgICBlcnJvcj17Zm9ybWlrLnRvdWNoZWQudGl0bGUgJiYgZm9ybWlrLmVycm9ycy50aXRsZSA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICAgIGZvcm1pay50b3VjaGVkLnRpdGxlICYmIGZvcm1pay5lcnJvcnMudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgPyBmb3JtaWsuZXJyb3JzLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzdHlsZTogeyBib3JkZXJSYWRpdXM6IDggfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfSBsZz17Nn0+XG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgYXM9XCJoNVwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICBtYjogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERlc2NyaXB0aW9uXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFbnRlciBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKFwiZGVzY3JpcHRpb25cIil9XG4gICAgICAgICAgICAgICAgZXJyb3I9e1xuICAgICAgICAgICAgICAgICAgZm9ybWlrLnRvdWNoZWQuZGVzY3JpcHRpb24gJiYgZm9ybWlrLmVycm9ycy5kZXNjcmlwdGlvbiA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWxwZXJUZXh0PXtcbiAgICAgICAgICAgICAgICAgIGZvcm1pay50b3VjaGVkLmRlc2NyaXB0aW9uICYmIGZvcm1pay5lcnJvcnMuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgPyBmb3JtaWsuZXJyb3JzLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBJbnB1dFByb3BzPXt7XG4gICAgICAgICAgICAgICAgICBzdHlsZTogeyBib3JkZXJSYWRpdXM6IDggfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9HcmlkPlxuXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICAgICAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbXBsZXRlZFwiXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2Zvcm1pay52YWx1ZXMuY29tcGxldGVkfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGZvcm1pay5zZXRGaWVsZFZhbHVlKCdjb21wbGV0ZWQnLCBlLnRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29tcGxldGVkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvR3JpZD5cblxuXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gdGV4dEFsaWduPVwibGVmdFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIG10OiAxLFxuICAgICAgICAgICAgICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTNweFwiLFxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIxMnB4IDIwcHhcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmYgIWltcG9ydGFudFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8U2VuZEljb25cbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogXCItMnB4XCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItNXB4XCJcbiAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICB7aXNFZGl0TW9kZSA/IFwiVVBEQVRFIFRPRE9cIiA6IFwiQUREIFRPRE9cIn1cbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgPC9HcmlkPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ2FyZD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRvZG9zRm9ybTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIkJveCIsIkZvcm1Db250cm9sTGFiZWwiLCJUeXBvZ3JhcGh5IiwiQ2FyZCIsIkdyaWQiLCJCdXR0b24iLCJUZXh0RmllbGQiLCJTZW5kSWNvbiIsInVzZUZvcm1payIsIll1cCIsInVzZVRvZG8iLCJ1c2VSb3V0ZXIiLCJDaGVja2JveCIsIkFkZFRvZG9zRm9ybSIsImZvcm1EYXRhIiwiaXNFZGl0TW9kZSIsImNvbnNvbGUiLCJsb2ciLCJyb3V0ZXIiLCJhZGRUb2RvRnVuQXBpIiwidXBkYXRlVG9kb0Z1bkFwaSIsImluaXRpYWxWYWx1ZXMiLCJjb21wbGV0ZWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZm9ybWlrIiwidmFsaWRhdGlvblNjaGVtYSIsIm9iamVjdCIsInN0cmluZyIsInJlcXVpcmVkIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJ0b2RvSWQiLCJpZCIsImRhdGEiLCJvblN1Y2Nlc3MiLCJwdXNoIiwiZXJyb3IiLCJzeCIsImJveFNoYWRvdyIsImJvcmRlclJhZGl1cyIsInAiLCJtYiIsImNvbXBvbmVudCIsIm5vVmFsaWRhdGUiLCJoYW5kbGVTdWJtaXQiLCJjb250YWluZXIiLCJhbGlnbkl0ZW1zIiwic3BhY2luZyIsIml0ZW0iLCJ4cyIsIm1kIiwibGciLCJhcyIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImF1dG9Db21wbGV0ZSIsIm5hbWUiLCJmdWxsV2lkdGgiLCJsYWJlbCIsImdldEZpZWxkUHJvcHMiLCJ0b3VjaGVkIiwiZXJyb3JzIiwiaGVscGVyVGV4dCIsIklucHV0UHJvcHMiLCJzdHlsZSIsImNvbnRyb2wiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJlIiwic2V0RmllbGRWYWx1ZSIsInRhcmdldCIsImNvbG9yIiwidGV4dEFsaWduIiwidHlwZSIsInZhcmlhbnQiLCJtdCIsInRleHRUcmFuc2Zvcm0iLCJwYWRkaW5nIiwicG9zaXRpb24iLCJ0b3AiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Forms/FormLayouts/AddTodoForm.js\n"));

/***/ })

});