"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_a_Documents_github_siwe_pam_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_a_Documents_github_siwe_pam_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_a_Documents_github_siwe_pam_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ConnectWallet */ \"./src/components/ConnectWallet.tsx\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _components_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ThemeSwitcher */ \"./src/components/ThemeSwitcher.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nfunction getNonce() {\n    return _getNonce.apply(this, arguments);\n}\nfunction _getNonce() {\n    _getNonce = _asyncToGenerator(_home_a_Documents_github_siwe_pam_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var url, data, response, _args = arguments;\n        return _home_a_Documents_github_siwe_pam_frontend_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    url = _args.length > 0 && _args[0] !== void 0 ? _args[0] : \"\", data = _args.length > 1 && _args[1] !== void 0 ? _args[1] : {};\n                    _ctx.next = 3;\n                    return fetch(url, {\n                        method: \"POST\",\n                        mode: \"cors\",\n                        cache: \"no-cache\",\n                        credentials: \"same-origin\",\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        },\n                        body: JSON.stringify(data)\n                    });\n                case 3:\n                    response = _ctx.sent;\n                    return _ctx.abrupt(\"return\", response.json());\n                case 5:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getNonce.apply(this, arguments);\n}\nvar Home = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"absolute top-6 right-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 5\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"absolute bottom-6 right-6\"\n            }, void 0, false, {\n                fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                lineNumber: 29,\n                columnNumber: 4\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"max-w-6xl mx-auto sm:px-6 lg:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center pt-8 sm:justify-start sm:pt-0\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                            className: \"text-6xl font-bold dark:text-white\",\n                            children: \"SIWE Linux\"\n                        }, void 0, false, {\n                            fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mt-8 bg-white dark:bg-blue-400 text-center overflow-hidden shadow sm:rounded-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: \"rounded-md\",\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 5\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center mt-4 sm:items-center sm:justify-between\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"text-center text-sm text-gray-500 sm:text-left\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_4__.ShareIcon, {\n                                    className: \"-mt-px w-5 h-5 text-gray-400\"\n                                }, void 0, false, {\n                                    fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 8\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 7\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 6\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 3\n    }, _this);\n};\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3NEO0FBQ0Y7QUFDRTtTQUV2Q0csUUFBUTtXQUFSQSxTQUFROztTQUFSQSxTQUFRO0lBQVJBLFNBQVEsR0FBdkIsMkxBQTZDO1lBQXJCQyxHQUFHLEVBQU9DLElBQUksRUFFL0JDLFFBQVE7Ozs7b0JBRlNGLEdBQUcsR0FBSEEsdUNBQVEsY0FBRixFQUFFLEVBQUVDLElBQUksR0FBSkEsdUNBQVMsY0FBRixFQUFFOzsyQkFFbkJFLEtBQUssQ0FBQ0gsR0FBRyxFQUFFO3dCQUNoQ0ksTUFBTSxFQUFFLE1BQU07d0JBQ2RDLElBQUksRUFBRSxNQUFNO3dCQUNaQyxLQUFLLEVBQUUsVUFBVTt3QkFDakJDLFdBQVcsRUFBRSxhQUFhO3dCQUMxQkMsT0FBTyxFQUFFOzRCQUNWLGNBQWMsRUFBRSxrQkFBa0I7eUJBRWhDO3dCQUVEQyxJQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDVixJQUFJLENBQUM7cUJBQzNCLENBQUM7O29CQVhJQyxRQUFRLFlBV1o7aURBQ0tBLFFBQVEsQ0FBQ1UsSUFBSSxFQUFFOzs7Ozs7S0FDcEI7V0FmWWIsU0FBUTs7QUFpQnZCLElBQU1jLElBQUksR0FBTyxXQUFNO0lBQ3RCLHFCQUNDLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQywrR0FBK0c7OzBCQUM3SCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHdCQUF3QjswQkFDdEMsNEVBQUNuQixpRUFBYTs7Ozt5QkFBRzs7Ozs7cUJBQ1o7MEJBQ04sOERBQUNFLGlFQUFhO2dCQUFDaUIsU0FBUyxFQUFDLDJCQUEyQjs7Ozs7cUJBQUc7MEJBQ3ZELDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsbUNBQW1DOztrQ0FDakQsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxtREFBbUQ7a0NBQ2pFLDRFQUFDQyxJQUFFOzRCQUFDRCxTQUFTLEVBQUMsb0NBQW9DO3NDQUFDLFlBQVU7Ozs7O2lDQUFLOzs7Ozs2QkFFN0Q7a0NBRU4sOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxpRkFBaUY7a0NBQ2hHLDRFQUFDRSxRQUFNOzRCQUFDRixTQUFTLEVBQUMsWUFBWTtzQ0FBQyxTQUFPOzs7OztpQ0FBUzs7Ozs7NkJBQ3pDO2tDQUVOLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsNkRBQTZEO2tDQUMzRSw0RUFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGdEQUFnRDtzQ0FDOUQsNEVBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxtQkFBbUI7MENBQ2pDLDRFQUFDbEIsK0RBQVM7b0NBQUNrQixTQUFTLEVBQUMsOEJBQThCOzs7Ozt5Q0FBRzs7Ozs7cUNBR2pEOzs7OztpQ0FDRDs7Ozs7NkJBQ0Q7Ozs7OztxQkFDRDs7Ozs7O2FBQ0QsQ0FDTjtDQUNEO0FBN0JLRixLQUFBQSxJQUFJO0FBK0JWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENvbm5lY3RXYWxsZXQgZnJvbSAnQC9jb21wb25lbnRzL0Nvbm5lY3RXYWxsZXQnXG5pbXBvcnQgeyBTaGFyZUljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0L291dGxpbmUnXG5pbXBvcnQgVGhlbWVTd2l0Y2hlciBmcm9tICdAL2NvbXBvbmVudHMvVGhlbWVTd2l0Y2hlcidcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Tm9uY2UodXJsID0gJycsIGRhdGEgPSB7fSkge1xuXHRcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcblx0ICBtZXRob2Q6ICdQT1NUJyxcblx0ICBtb2RlOiAnY29ycycsXG5cdCAgY2FjaGU6ICduby1jYWNoZScsXG5cdCAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG5cdCAgaGVhZGVyczoge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHRcblx0ICB9LFxuXHQgIFxuXHQgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG5cdH0pO1xuXHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICB9XG5cbmNvbnN0IEhvbWU6IEZDID0gKCkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBpdGVtcy10b3AganVzdGlmeS1jZW50ZXIgbWluLWgtc2NyZWVuIGJnLWdyYXktMTAwIGRhcms6YmctZ3JheS05MDAgc206aXRlbXMtY2VudGVyIHB5LTQgc206cHQtMFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtNiByaWdodC02XCI+XG5cdFx0XHRcdDxDb25uZWN0V2FsbGV0IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxUaGVtZVN3aXRjaGVyIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS02IHJpZ2h0LTZcIiAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYXgtdy02eGwgbXgtYXV0byBzbTpweC02IGxnOnB4LThcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB0LTggc206anVzdGlmeS1zdGFydCBzbTpwdC0wXCI+XG5cdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtYm9sZCBkYXJrOnRleHQtd2hpdGVcIj5TSVdFIExpbnV4PC9oMT5cblx0XHRcdFx0XHRcblx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtdC04IGJnLXdoaXRlIGRhcms6YmctYmx1ZS00MDAgdGV4dC1jZW50ZXIgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdyBzbTpyb3VuZGVkLWxnXCI+XG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwicm91bmRlZC1tZFwiPlNpZ24gSW48L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNCBzbTppdGVtcy1jZW50ZXIgc206anVzdGlmeS1iZXR3ZWVuXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDAgc206dGV4dC1sZWZ0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxTaGFyZUljb24gY2xhc3NOYW1lPVwiLW10LXB4IHctNSBoLTUgdGV4dC1ncmF5LTQwMFwiIC8+XG5cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiQ29ubmVjdFdhbGxldCIsIlNoYXJlSWNvbiIsIlRoZW1lU3dpdGNoZXIiLCJnZXROb25jZSIsInVybCIsImRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwibW9kZSIsImNhY2hlIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwiSG9tZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});