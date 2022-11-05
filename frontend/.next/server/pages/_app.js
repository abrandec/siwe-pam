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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Web3Provider.tsx":
/*!*****************************************!*\
  !*** ./src/components/Web3Provider.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_consts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/consts */ \"./src/lib/consts.ts\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wagmi */ \"wagmi\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(wagmi__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var connectkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! connectkit */ \"connectkit\");\n/* harmony import */ var connectkit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(connectkit__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst client = (0,wagmi__WEBPACK_IMPORTED_MODULE_3__.createClient)((0,connectkit__WEBPACK_IMPORTED_MODULE_4__.getDefaultClient)({\n    appName: _lib_consts__WEBPACK_IMPORTED_MODULE_2__.APP_NAME,\n    autoConnect: true,\n    infuraId: process.env.NEXT_PUBLIC_INFURA_ID\n}));\nconst Web3Provider = ({ children  })=>{\n    const { resolvedTheme  } = (0,next_themes__WEBPACK_IMPORTED_MODULE_1__.useTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_3__.WagmiConfig, {\n        client: client,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(connectkit__WEBPACK_IMPORTED_MODULE_4__.ConnectKitProvider, {\n            mode: resolvedTheme,\n            children: children\n        }, void 0, false, {\n            fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/components/Web3Provider.tsx\",\n            lineNumber: 19,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/components/Web3Provider.tsx\",\n        lineNumber: 18,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Web3Provider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XZWIzUHJvdmlkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFzQztBQUNDO0FBQ1U7QUFDZ0I7QUFFakUsTUFBTU0sTUFBTSxHQUFHSixtREFBWSxDQUMxQkcsNERBQWdCLENBQUM7SUFDaEJFLE9BQU8sRUFBRU4saURBQVE7SUFDakJPLFdBQVcsRUFBRSxJQUFJO0lBQ2pCQyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxxQkFBcUI7Q0FDM0MsQ0FBQyxDQUNGO0FBRUQsTUFBTUMsWUFBWSxHQUFHLENBQUMsRUFBRUMsUUFBUSxHQUFFLEdBQUs7SUFDdEMsTUFBTSxFQUFFQyxhQUFhLEdBQUUsR0FBR2YscURBQVEsRUFBRTtJQUVwQyxxQkFDQyw4REFBQ0csOENBQVc7UUFBQ0csTUFBTSxFQUFFQSxNQUFNO2tCQUMxQiw0RUFBQ0YsMERBQWtCO1lBQUNZLElBQUksRUFBRUQsYUFBYTtzQkFBdUJELFFBQVE7Ozs7O3FCQUFzQjs7Ozs7aUJBQy9FLENBQ2Q7Q0FDRDtBQUVELGlFQUFlRCxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFwcC1zdGFydGVyLy4vc3JjL2NvbXBvbmVudHMvV2ViM1Byb3ZpZGVyLnRzeD9hOTQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRoZW1lIH0gZnJvbSAnbmV4dC10aGVtZXMnXG5pbXBvcnQgeyBBUFBfTkFNRSB9IGZyb20gJ0AvbGliL2NvbnN0cydcbmltcG9ydCB7IGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcgfSBmcm9tICd3YWdtaSdcbmltcG9ydCB7IENvbm5lY3RLaXRQcm92aWRlciwgZ2V0RGVmYXVsdENsaWVudCB9IGZyb20gJ2Nvbm5lY3RraXQnXG5cbmNvbnN0IGNsaWVudCA9IGNyZWF0ZUNsaWVudChcblx0Z2V0RGVmYXVsdENsaWVudCh7XG5cdFx0YXBwTmFtZTogQVBQX05BTUUsXG5cdFx0YXV0b0Nvbm5lY3Q6IHRydWUsXG5cdFx0aW5mdXJhSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lORlVSQV9JRCxcblx0fSlcbilcblxuY29uc3QgV2ViM1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuXHRjb25zdCB7IHJlc29sdmVkVGhlbWUgfSA9IHVzZVRoZW1lKClcblxuXHRyZXR1cm4gKFxuXHRcdDxXYWdtaUNvbmZpZyBjbGllbnQ9e2NsaWVudH0+XG5cdFx0XHQ8Q29ubmVjdEtpdFByb3ZpZGVyIG1vZGU9e3Jlc29sdmVkVGhlbWUgYXMgJ2xpZ2h0JyB8ICdkYXJrJ30+e2NoaWxkcmVufTwvQ29ubmVjdEtpdFByb3ZpZGVyPlxuXHRcdDwvV2FnbWlDb25maWc+XG5cdClcbn1cblxuZXhwb3J0IGRlZmF1bHQgV2ViM1Byb3ZpZGVyXG4iXSwibmFtZXMiOlsidXNlVGhlbWUiLCJBUFBfTkFNRSIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwiQ29ubmVjdEtpdFByb3ZpZGVyIiwiZ2V0RGVmYXVsdENsaWVudCIsImNsaWVudCIsImFwcE5hbWUiLCJhdXRvQ29ubmVjdCIsImluZnVyYUlkIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lORlVSQV9JRCIsIldlYjNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzb2x2ZWRUaGVtZSIsIm1vZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Web3Provider.tsx\n");

/***/ }),

/***/ "./src/lib/consts.ts":
/*!***************************!*\
  !*** ./src/lib/consts.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"APP_NAME\": () => (/* binding */ APP_NAME)\n/* harmony export */ });\nconst APP_NAME = \"dApp Starter\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGliL2NvbnN0cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsUUFBUSxHQUFHLGNBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYXBwLXN0YXJ0ZXIvLi9zcmMvbGliL2NvbnN0cy50cz83NmQ5Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBUFBfTkFNRSA9ICdkQXBwIFN0YXJ0ZXInXG4iXSwibmFtZXMiOlsiQVBQX05BTUUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lib/consts.ts\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tailwindcss/tailwind.css */ \"./node_modules/tailwindcss/tailwind.css\");\n/* harmony import */ var tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_tailwind_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-themes */ \"next-themes\");\n/* harmony import */ var next_themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_themes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Web3Provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Web3Provider */ \"./src/components/Web3Provider.tsx\");\n\n\n\n\nconst App = ({ Component , pageProps  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_themes__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        attribute: \"class\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Web3Provider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/_app.tsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/a/Documents/github/siwe-pam/frontend/src/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFpQztBQUNVO0FBQ1M7QUFFcEQsTUFBTUUsR0FBRyxHQUFHLENBQUMsRUFBRUMsU0FBUyxHQUFFQyxTQUFTLEdBQUUsR0FBSztJQUN6QyxxQkFDQyw4REFBQ0osc0RBQWE7UUFBQ0ssU0FBUyxFQUFDLE9BQU87a0JBQy9CLDRFQUFDSixnRUFBWTtzQkFDWiw0RUFBQ0UsU0FBUztnQkFBRSxHQUFHQyxTQUFTOzs7Ozt5QkFBSTs7Ozs7cUJBQ2Q7Ozs7O2lCQUNBLENBQ2hCO0NBQ0Q7QUFFRCxpRUFBZUYsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2RhcHAtc3RhcnRlci8uL3NyYy9wYWdlcy9fYXBwLnRzeD9mOWQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndGFpbHdpbmRjc3MvdGFpbHdpbmQuY3NzJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ25leHQtdGhlbWVzJ1xuaW1wb3J0IFdlYjNQcm92aWRlciBmcm9tICdAL2NvbXBvbmVudHMvV2ViM1Byb3ZpZGVyJ1xuXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PFRoZW1lUHJvdmlkZXIgYXR0cmlidXRlPVwiY2xhc3NcIj5cblx0XHRcdDxXZWIzUHJvdmlkZXI+XG5cdFx0XHRcdDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cblx0XHRcdDwvV2ViM1Byb3ZpZGVyPlxuXHRcdDwvVGhlbWVQcm92aWRlcj5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHBcbiJdLCJuYW1lcyI6WyJUaGVtZVByb3ZpZGVyIiwiV2ViM1Byb3ZpZGVyIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYXR0cmlidXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/tailwindcss/tailwind.css":
/*!***********************************************!*\
  !*** ./node_modules/tailwindcss/tailwind.css ***!
  \***********************************************/
/***/ (() => {



/***/ }),

/***/ "connectkit":
/*!*****************************!*\
  !*** external "connectkit" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("connectkit");

/***/ }),

/***/ "next-themes":
/*!******************************!*\
  !*** external "next-themes" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-themes");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "wagmi":
/*!************************!*\
  !*** external "wagmi" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("wagmi");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();