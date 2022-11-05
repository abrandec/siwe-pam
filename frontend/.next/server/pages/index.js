"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/ConnectWallet.tsx":
/*!******************************************!*\
  !*** ./src/components/ConnectWallet.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var connectkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! connectkit */ \"connectkit\");\n/* harmony import */ var connectkit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(connectkit__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst ConnectWallet = ({ show =\"always\"  })=>{\n    const { isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_1__.useAccount)();\n    if (show == \"connected\" && !isConnected || show == \"not_connected\" && isConnected) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(connectkit__WEBPACK_IMPORTED_MODULE_2__.ConnectKitButton, {}, void 0, false, {\n        fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/components/ConnectWallet.tsx\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ConnectWallet);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db25uZWN0V2FsbGV0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDa0M7QUFDVztBQUk3QyxNQUFNRSxhQUFhLEdBQThCLENBQUMsRUFBRUMsSUFBSSxFQUFHLFFBQVEsR0FBRSxHQUFLO0lBQ3pFLE1BQU0sRUFBRUMsV0FBVyxHQUFFLEdBQUdKLGlEQUFVLEVBQUU7SUFFcEMsSUFBSSxJQUFLLElBQUksV0FBVyxJQUFJLENBQUNJLFdBQVcsSUFBTUQsSUFBSSxJQUFJLGVBQWUsSUFBSUMsV0FBVyxFQUFHLE9BQU8sSUFBSTtJQUVsRyxxQkFBTyw4REFBQ0gsd0RBQWdCOzs7O2lCQUFHO0NBQzNCO0FBRUQsaUVBQWVDLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXBwLXN0YXJ0ZXIvLi9zcmMvY29tcG9uZW50cy9Db25uZWN0V2FsbGV0LnRzeD9lMTc3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VBY2NvdW50IH0gZnJvbSAnd2FnbWknXG5pbXBvcnQgeyBDb25uZWN0S2l0QnV0dG9uIH0gZnJvbSAnY29ubmVjdGtpdCdcblxudHlwZSBWaXNpYmlsaXR5ID0gJ2Fsd2F5cycgfCAnY29ubmVjdGVkJyB8ICdub3RfY29ubmVjdGVkJ1xuXG5jb25zdCBDb25uZWN0V2FsbGV0OiBGQzx7IHNob3c/OiBWaXNpYmlsaXR5IH0+ID0gKHsgc2hvdyA9ICdhbHdheXMnIH0pID0+IHtcblx0Y29uc3QgeyBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpXG5cblx0aWYgKChzaG93ID09ICdjb25uZWN0ZWQnICYmICFpc0Nvbm5lY3RlZCkgfHwgKHNob3cgPT0gJ25vdF9jb25uZWN0ZWQnICYmIGlzQ29ubmVjdGVkKSkgcmV0dXJuIG51bGxcblxuXHRyZXR1cm4gPENvbm5lY3RLaXRCdXR0b24gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29ubmVjdFdhbGxldFxuIl0sIm5hbWVzIjpbInVzZUFjY291bnQiLCJDb25uZWN0S2l0QnV0dG9uIiwiQ29ubmVjdFdhbGxldCIsInNob3ciLCJpc0Nvbm5lY3RlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/ConnectWallet.tsx\n");

/***/ }),

/***/ "./src/components/ThemeSwitcher.tsx":
/*!******************************************!*\
  !*** ./src/components/ThemeSwitcher.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @heroicons/react/outline */ \"@heroicons/react/outline\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst ThemeSwitcher = ({ className =\"\"  })=>{\n    const { resolvedTheme , setTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const toggleTheme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        setTheme(resolvedTheme === \"light\" ? \"dark\" : \"light\");\n    }, [\n        resolvedTheme,\n        setTheme\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: toggleTheme,\n        className: `${className} rounded-full p-1 border-2 border-gray-300 dark:border-gray-800 text-gray-500 dark:text-gray-400`,\n        children: resolvedTheme == \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.MoonIcon, {\n            className: \"w-6 h-6\"\n        }, void 0, false, {\n            fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/components/ThemeSwitcher.tsx\",\n            lineNumber: 17,\n            columnNumber: 32\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_3__.SunIcon, {\n            className: \"w-6 h-6\"\n        }, void 0, false, {\n            fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/components/ThemeSwitcher.tsx\",\n            lineNumber: 17,\n            columnNumber: 67\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/components/ThemeSwitcher.tsx\",\n        lineNumber: 13,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeSwitcher);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9UaGVtZVN3aXRjaGVyLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFtQztBQUNHO0FBQ3NCO0FBRTVELE1BQU1JLGFBQWEsR0FBRyxDQUFDLEVBQUVDLFNBQVMsRUFBRyxFQUFFLEdBQUUsR0FBSztJQUM3QyxNQUFNLEVBQUVDLGFBQWEsR0FBRUMsUUFBUSxHQUFFLEdBQUdOLHFEQUFRLEVBQUU7SUFFOUMsTUFBTU8sV0FBVyxHQUFHUixrREFBVyxDQUFDLElBQU07UUFDckNPLFFBQVEsQ0FBQ0QsYUFBYSxLQUFLLE9BQU8sR0FBRyxNQUFNLEdBQUcsT0FBTyxDQUFDO0tBQ3RELEVBQUU7UUFBQ0EsYUFBYTtRQUFFQyxRQUFRO0tBQUMsQ0FBQztJQUU3QixxQkFDQyw4REFBQ0UsUUFBTTtRQUNOQyxPQUFPLEVBQUVGLFdBQVc7UUFDcEJILFNBQVMsRUFBRSxDQUFDLEVBQUVBLFNBQVMsQ0FBQyxnR0FBZ0csQ0FBQztrQkFFeEhDLGFBQWEsSUFBSSxPQUFPLGlCQUFHLDhEQUFDSiw4REFBUTtZQUFDRyxTQUFTLEVBQUMsU0FBUzs7Ozs7cUJBQUcsaUJBQUcsOERBQUNGLDZEQUFPO1lBQUNFLFNBQVMsRUFBQyxTQUFTOzs7OztxQkFBRzs7Ozs7aUJBQ3RGLENBQ1Q7Q0FDRDtBQUVELGlFQUFlRCxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFwcC1zdGFydGVyLy4vc3JjL2NvbXBvbmVudHMvVGhlbWVTd2l0Y2hlci50c3g/N2I4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tICduZXh0LXRoZW1lcydcbmltcG9ydCB7IE1vb25JY29uLCBTdW5JY29uIH0gZnJvbSAnQGhlcm9pY29ucy9yZWFjdC9vdXRsaW5lJ1xuXG5jb25zdCBUaGVtZVN3aXRjaGVyID0gKHsgY2xhc3NOYW1lID0gJycgfSkgPT4ge1xuXHRjb25zdCB7IHJlc29sdmVkVGhlbWUsIHNldFRoZW1lIH0gPSB1c2VUaGVtZSgpXG5cblx0Y29uc3QgdG9nZ2xlVGhlbWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG5cdFx0c2V0VGhlbWUocmVzb2x2ZWRUaGVtZSA9PT0gJ2xpZ2h0JyA/ICdkYXJrJyA6ICdsaWdodCcpXG5cdH0sIFtyZXNvbHZlZFRoZW1lLCBzZXRUaGVtZV0pXG5cblx0cmV0dXJuIChcblx0XHQ8YnV0dG9uXG5cdFx0XHRvbkNsaWNrPXt0b2dnbGVUaGVtZX1cblx0XHRcdGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSByb3VuZGVkLWZ1bGwgcC0xIGJvcmRlci0yIGJvcmRlci1ncmF5LTMwMCBkYXJrOmJvcmRlci1ncmF5LTgwMCB0ZXh0LWdyYXktNTAwIGRhcms6dGV4dC1ncmF5LTQwMGB9XG5cdFx0PlxuXHRcdFx0e3Jlc29sdmVkVGhlbWUgPT0gJ2xpZ2h0JyA/IDxNb29uSWNvbiBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz4gOiA8U3VuSWNvbiBjbGFzc05hbWU9XCJ3LTYgaC02XCIgLz59XG5cdFx0PC9idXR0b24+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGhlbWVTd2l0Y2hlclxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlVGhlbWUiLCJNb29uSWNvbiIsIlN1bkljb24iLCJUaGVtZVN3aXRjaGVyIiwiY2xhc3NOYW1lIiwicmVzb2x2ZWRUaGVtZSIsInNldFRoZW1lIiwidG9nZ2xlVGhlbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ThemeSwitcher.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ConnectWallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ConnectWallet */ \"./src/components/ConnectWallet.tsx\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @heroicons/react/outline */ \"@heroicons/react/outline\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ThemeSwitcher */ \"./src/components/ThemeSwitcher.tsx\");\n\n\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center py-4 sm:pt-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute top-6 right-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConnectWallet__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 5\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                lineNumber: 9,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ThemeSwitcher__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                className: \"absolute bottom-6 right-6\"\n            }, void 0, false, {\n                fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 4\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-6xl mx-auto sm:px-6 lg:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center pt-8 sm:justify-start sm:pt-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-6xl font-bold dark:text-white\",\n                                children: \"SIWE Linux\"\n                            }, void 0, false, {\n                                fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                                lineNumber: 15,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"rounded-full\",\n                                children: \"gg\"\n                            }, void 0, false, {\n                                fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg\"\n                    }, void 0, false, {\n                        fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center mt-4 sm:items-center sm:justify-between\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-center text-sm text-gray-500 sm:text-left\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.ShareIcon, {\n                                    className: \"-mt-px w-5 h-5 text-gray-400\"\n                                }, void 0, false, {\n                                    fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 6\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 4\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/index.tsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNzRDtBQUNGO0FBQ0U7QUFFdEQsTUFBTUcsSUFBSSxHQUFPLElBQU07SUFDdEIscUJBQ0MsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLCtHQUErRzs7MEJBQzdILDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsd0JBQXdCOzBCQUN0Qyw0RUFBQ0wsaUVBQWE7Ozs7NkJBQUc7Ozs7O3lCQUNaOzBCQUNOLDhEQUFDRSxpRUFBYTtnQkFBQ0csU0FBUyxFQUFDLDJCQUEyQjs7Ozs7eUJBQUc7MEJBQ3ZELDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsbUNBQW1DOztrQ0FDakQsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxtREFBbUQ7OzBDQUNqRSw4REFBQ0MsSUFBRTtnQ0FBQ0QsU0FBUyxFQUFDLG9DQUFvQzswQ0FBQyxZQUFVOzs7Ozt5Q0FBSzswQ0FDbEUsOERBQUNFLFFBQU07Z0NBQUNGLFNBQVMsRUFBQyxjQUFjOzBDQUFDLElBQUU7Ozs7O3lDQUFTOzs7Ozs7aUNBQ3ZDO2tDQUVOLDhEQUFDRCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMscUVBQXFFOzs7OztpQ0FFOUU7a0NBRU4sOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyw2REFBNkQ7a0NBQzNFLDRFQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsZ0RBQWdEO3NDQUM5RCw0RUFBQ0QsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLG1CQUFtQjswQ0FDakMsNEVBQUNKLCtEQUFTO29DQUFDSSxTQUFTLEVBQUMsOEJBQThCOzs7Ozs2Q0FBRzs7Ozs7eUNBR2pEOzs7OztxQ0FDRDs7Ozs7aUNBQ0Q7Ozs7Ozt5QkFDRDs7Ozs7O2lCQUNELENBQ047Q0FDRDtBQUVELGlFQUFlRixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFwcC1zdGFydGVyLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQ29ubmVjdFdhbGxldCBmcm9tICdAL2NvbXBvbmVudHMvQ29ubmVjdFdhbGxldCdcbmltcG9ydCB7IFNoYXJlSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3Qvb3V0bGluZSdcbmltcG9ydCBUaGVtZVN3aXRjaGVyIGZyb20gJ0AvY29tcG9uZW50cy9UaGVtZVN3aXRjaGVyJ1xuXG5jb25zdCBIb21lOiBGQyA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggaXRlbXMtdG9wIGp1c3RpZnktY2VudGVyIG1pbi1oLXNjcmVlbiBiZy1ncmF5LTEwMCBkYXJrOmJnLWdyYXktOTAwIHNtOml0ZW1zLWNlbnRlciBweS00IHNtOnB0LTBcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTYgcmlnaHQtNlwiPlxuXHRcdFx0XHQ8Q29ubmVjdFdhbGxldCAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8VGhlbWVTd2l0Y2hlciBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tNiByaWdodC02XCIgLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gc206cHgtNiBsZzpweC04XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBwdC04IHNtOmp1c3RpZnktc3RhcnQgc206cHQtMFwiPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmb250LWJvbGQgZGFyazp0ZXh0LXdoaXRlXCI+U0lXRSBMaW51eDwvaDE+XG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIj5nZzwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibXQtOCBiZy13aGl0ZSBkYXJrOmJnLWdyYXktODAwIG92ZXJmbG93LWhpZGRlbiBzaGFkb3cgc206cm91bmRlZC1sZ1wiPlxuXHRcdFx0XHRcdFxuXHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtNCBzbTppdGVtcy1jZW50ZXIgc206anVzdGlmeS1iZXR3ZWVuXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS01MDAgc206dGV4dC1sZWZ0XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxTaGFyZUljb24gY2xhc3NOYW1lPVwiLW10LXB4IHctNSBoLTUgdGV4dC1ncmF5LTQwMFwiIC8+XG5cblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiQ29ubmVjdFdhbGxldCIsIlNoYXJlSWNvbiIsIlRoZW1lU3dpdGNoZXIiLCJIb21lIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "@heroicons/react/outline":
/*!*******************************************!*\
  !*** external "@heroicons/react/outline" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ "connectkit":
/*!*****************************!*\
  !*** external "connectkit" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("connectkit");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

module.exports = require("wagmi");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();