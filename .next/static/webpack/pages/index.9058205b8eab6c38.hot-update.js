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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaginaInicial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction GlobalStyle() {\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: \"ea7e8895ba25d0c2\",\n        children: \"*{margin:0;\\npadding:0;\\nbox-sizing:border-box;\\nlist-style:none}\\nbody{font-family:'Open Sans', sans-serif}\\nhtml, body, #__next{min-height:100vh;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next>*{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\"\n    }, void 0, false, void 0, this);\n}\n_c = GlobalStyle;\nfunction Titulo(props) {\n    console.log(props.children);\n    var Tag = props.tag || 'h1';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"3a1648f10d8e7484\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[\"050\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"3a1648f10d8e7484\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[\"050\"]\n                ],\n                children: \"\".concat(Tag, \".__jsx-style-dynamic-selector{color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[\"050\"], \";\\nmargin-bottom:30px;\\nfont-size:24px;\\nfont-weight:600}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c1 = Titulo;\nfunction PaginaInicial() {\n    _s();\n    //const username = 'Stealty';\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_5___default().useState(''), 2), username = ref[0], setUsername = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[500],\n                    backgroundImage: 'url(https://images.wallpaperscraft.com/image/single/cell_light_hexagon_shadow_15345_2560x1440.jpg)',\n                    backgroundRepeat: 'no-repeat',\n                    backgroundSize: 'cover',\n                    backgroundBlendMode: 'multiply'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    styleSheet: {\n                        display: 'flex',\n                        alignItems: 'center',\n                        justifyContent: 'space-between',\n                        flexDirection: {\n                            xs: 'column',\n                            sm: 'row'\n                        },\n                        width: '100%',\n                        maxWidth: '700px',\n                        borderRadius: '5px',\n                        padding: '32px',\n                        margin: '16px',\n                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                        backgroundColor: 'url (https://images.wallpaperscraft.com/image/single/cell_light_hexagon_shadow_15345_2560x1440.jpg)'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            as: \"form\",\n                            onSubmit: function onSubmit(infosDoEvento) {\n                                infosDoEvento.preventDefault();\n                                console.log('Alguem submeteu o form');\n                            //window.location.href = '/chat';\n                            },\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                justifyContent: 'center',\n                                width: {\n                                    xs: '100%',\n                                    sm: '50%'\n                                },\n                                textAlign: 'center',\n                                marginBottom: '32px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                                    tag: \"h2\",\n                                    children: \"Boas vindas de volta!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                    value: username,\n                                    onChange: function onChange(event) {\n                                        console.log('usuario digitou', event.target.value);\n                                        // Onde está o valor?\n                                        var valor = event.target.value;\n                                        // Trocar o valor da variavel\n                                        // através do React e avise o console\n                                        setUsername(valor);\n                                    },\n                                    fullWidth: true,\n                                    textFieldColors: {\n                                        neutral: {\n                                            textColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[300],\n                                            mainColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[900],\n                                            mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[500],\n                                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[800]\n                                        }\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    type: \"submit\",\n                                    label: \"Entrar\",\n                                    fullWidth: true,\n                                    buttonColors: {\n                                        contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[\"000\"],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[600],\n                                        mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[400],\n                                        mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[400]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                                    lineNumber: 139,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                maxWidth: '200px',\n                                padding: '16px',\n                                backgroundColor: 'url(https://images.wallpaperscraft.com/image/single/cell_light_hexagon_shadow_15345_2560x1440.jpg)',\n                                borderColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[999],\n                                borderRadius: '10px',\n                                flex: 1,\n                                minHeight: '240px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                    styleSheet: {\n                                        borderRadius: '50%',\n                                        marginBottom: '16px'\n                                    },\n                                    src: \"https://github.com/\".concat(username, \".png\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                                    lineNumber: 169,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    variant: \"body4\",\n                                    styleSheet: {\n                                        width: '100px',\n                                        textAlign: 'center',\n                                        color: 'red',\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[900],\n                                        padding: '3px 10px',\n                                        borderRadius: '1000px'\n                                    },\n                                    children: username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                                    lineNumber: 176,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                            lineNumber: 155,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(PaginaInicial, \"AfRD6VxGv+Gn/ZNWvgmLk5f6638=\");\n_c2 = PaginaInicial;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c1, \"Titulo\");\n$RefreshReg$(_c2, \"PaginaInicial\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTlELG9FQUFvQztnQ0FDakRpQyxZQUFZLEVBQUUsQ0FBTTtnQ0FDcEI4QixJQUFJLEVBQUUsQ0FBQztnQ0FDUEMsU0FBUyxFQUFFLENBQU87NEJBQ3BCLENBQUM7OzRHQUVBbEUsdURBQUs7b0NBQ0pxQixVQUFVLEVBQUUsQ0FBQzt3Q0FDWGMsWUFBWSxFQUFFLENBQUs7d0NBQ25CUyxZQUFZLEVBQUUsQ0FBTTtvQ0FDdEIsQ0FBQztvQ0FDRHVCLEdBQUcsRUFBRyxDQUFtQixxQkFBVyxNQUFJLENBQWJoRCxRQUFRLEVBQUMsQ0FBSTs7Ozs7OzRHQUV6Q3JCLHNEQUFJO29DQUNIc0UsT0FBTyxFQUFDLENBQU87b0NBQ2YvQyxVQUFVLEVBQUUsQ0FBQzt3Q0FDWFksS0FBSyxFQUFFLENBQU87d0NBQ2RVLFNBQVMsRUFBRSxDQUFRO3dDQUNuQjBCLEtBQUssRUFBRSxDQUFLO3dDQUNaNUMsZUFBZSxFQUFFdkIsb0VBQW9DO3dDQUNyRGtDLE9BQU8sRUFBRSxDQUFVO3dDQUNuQkQsWUFBWSxFQUFFLENBQVE7b0NBQ3hCLENBQUM7OENBRUFoQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXZCLENBQUM7R0ExSXVCRixhQUFhO01BQWJBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmZ1bmN0aW9uIEdsb2JhbFN0eWxlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAqIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgICB9XHJcbiAgICAgIC8qIEFwcCBmaXQgSGVpZ2h0ICovIFxyXG4gICAgICBodG1sLCBib2R5LCAjX19uZXh0IHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgIH1cclxuICAgICAgI19fbmV4dCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG4gICAgICAjX19uZXh0ID4gKiB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG4gICAgICAvKiAuL0FwcCBmaXQgSGVpZ2h0ICovIFxyXG4gICAgYH08L3N0eWxlPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRpdHVsbyhwcm9wcykge1xyXG4gIGNvbnNvbGUubG9nKHByb3BzLmNoaWxkcmVuKVxyXG4gIGNvbnN0IFRhZyA9IHByb3BzLnRhZyB8fCAnaDEnO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8VGFnPntwcm9wcy5jaGlsZHJlbn08L1RhZz5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAke1RhZ30ge1xyXG4gICAgICAgICBjb2xvcjogJHthcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbJzA1MCddfTtcclxuICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgfVxyXG5gfSAgICA8L3N0eWxlPlxyXG4gICAgPC8+XHJcblxyXG4gIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2luYUluaWNpYWwoKSB7XHJcbiAgLy9jb25zdCB1c2VybmFtZSA9ICdTdGVhbHR5JztcclxuXHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdsb2JhbFN0eWxlIC8+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiAndXJsKGh0dHBzOi8vaW1hZ2VzLndhbGxwYXBlcnNjcmFmdC5jb20vaW1hZ2Uvc2luZ2xlL2NlbGxfbGlnaHRfaGV4YWdvbl9zaGFkb3dfMTUzNDVfMjU2MHgxNDQwLmpwZyknLFxyXG4gICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsIGJhY2tncm91bmRTaXplOiAnY292ZXInLCBiYWNrZ3JvdW5kQmxlbmRNb2RlOiAnbXVsdGlwbHknLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IHtcclxuICAgICAgICAgICAgICB4czogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgc206ICdyb3cnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLCBtYXhXaWR0aDogJzcwMHB4JyxcclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JywgcGFkZGluZzogJzMycHgnLCBtYXJnaW46ICcxNnB4JyxcclxuICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSknLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd1cmwgKGh0dHBzOi8vaW1hZ2VzLndhbGxwYXBlcnNjcmFmdC5jb20vaW1hZ2Uvc2luZ2xlL2NlbGxfbGlnaHRfaGV4YWdvbl9zaGFkb3dfMTUzNDVfMjU2MHgxNDQwLmpwZyknLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIGFzPVwiZm9ybVwiXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXtmdW5jdGlvbiAoaW5mb3NEb0V2ZW50bykge1xyXG4gICAgICAgICAgICAgIGluZm9zRG9FdmVudG8ucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWxndWVtIHN1Ym1ldGV1IG8gZm9ybScpXHJcbiAgICAgICAgICAgICAgLy93aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvY2hhdCc7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiAnNTAlJyB9LCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICczMnB4JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPFRpdHVsbyB0YWc9XCJoMlwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0dWxvPlxyXG5cclxuICAgICAgICAgICAgey8qPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VybmFtZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gaGFuZGxlcihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzdWFyaW8gZGlnaXRvdScsIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyBPbmRlIGVzdMOhIG8gdmFsb3I/XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIC8vIFRyb2NhciBvIHZhbG9yIGRhIHZhcmlhdmVsXHJcbiAgICAgICAgICAgICAgICAvLyBhdHJhdsOpcyBkbyBSZWFjdCBlIGF2aXNlIG8gY29uc29sZVxyXG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUodmFsb3IpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c3VhcmlvIGRpZ2l0b3UnLCBldmVudC50YXJnZXQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAvLyBPbmRlIGVzdMOhIG8gdmFsb3I/XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxvciA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIC8vIFRyb2NhciBvIHZhbG9yIGRhIHZhcmlhdmVsXHJcbiAgICAgICAgICAgICAgICAvLyBhdHJhdsOpcyBkbyBSZWFjdCBlIGF2aXNlIG8gY29uc29sZVxyXG4gICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUodmFsb3IpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgdGV4dEZpZWxkQ29sb3JzPXt7XHJcbiAgICAgICAgICAgICAgICBuZXV0cmFsOiB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1szMDBdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuICAgICAgICAgICAgICAgICAgbWFpbkNvbG9ySGlnaGxpZ2h0OiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzgwMF0sXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX0gLz5cclxuXHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICB0eXBlPSdzdWJtaXQnXHJcbiAgICAgICAgICAgICAgbGFiZWw9J0VudHJhcidcclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICBidXR0b25Db2xvcnM9e3tcclxuICAgICAgICAgICAgICAgIGNvbnRyYXN0Q29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbXCIwMDBcIl0sXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs2MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yTGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxyXG4gICAgICAgICAgICAgICAgbWFpbkNvbG9yU3Ryb25nOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNDAwXSxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcblxyXG5cclxuICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIG1heFdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6ICcxNnB4JyxcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd1cmwoaHR0cHM6Ly9pbWFnZXMud2FsbHBhcGVyc2NyYWZ0LmNvbS9pbWFnZS9zaW5nbGUvY2VsbF9saWdodF9oZXhhZ29uX3NoYWRvd18xNTM0NV8yNTYweDE0NDAuanBnKScsXHJcbiAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTk5XSxcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMHB4JyxcclxuICAgICAgICAgICAgICBmbGV4OiAxLFxyXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogJzI0MHB4JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7dXNlcm5hbWV9LnBuZ2B9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxUZXh0XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImJvZHk0XCJcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzEwMHB4JyxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTAwXSxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczcHggMTBweCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcxMDAwcHgnXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHt1c2VybmFtZX1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICB7LyogUGhvdG8gQXJlYSAqL31cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJUZXh0IiwiVGV4dEZpZWxkIiwiSW1hZ2UiLCJ3aXRoUm91dGVyIiwiYXBwQ29uZmlnIiwiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJSZWFjdERPTSIsIkdsb2JhbFN0eWxlIiwiVGl0dWxvIiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRyZW4iLCJUYWciLCJ0YWciLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJQYWdpbmFJbmljaWFsIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic3R5bGVTaGVldCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kQmxlbmRNb2RlIiwiZmxleERpcmVjdGlvbiIsInhzIiwic20iLCJ3aWR0aCIsIm1heFdpZHRoIiwiYm9yZGVyUmFkaXVzIiwicGFkZGluZyIsIm1hcmdpbiIsImJveFNoYWRvdyIsImFzIiwib25TdWJtaXQiLCJpbmZvc0RvRXZlbnRvIiwicHJldmVudERlZmF1bHQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW5Cb3R0b20iLCJiciIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbG9yIiwiZnVsbFdpZHRoIiwidGV4dEZpZWxkQ29sb3JzIiwibmV1dHJhbCIsInRleHRDb2xvciIsIm5ldXRyYWxzIiwibWFpbkNvbG9yIiwibWFpbkNvbG9ySGlnaGxpZ2h0IiwidHlwZSIsImxhYmVsIiwiYnV0dG9uQ29sb3JzIiwiY29udHJhc3RDb2xvciIsIm1haW5Db2xvckxpZ2h0IiwibWFpbkNvbG9yU3Ryb25nIiwiYm9yZGVyQ29sb3IiLCJmbGV4IiwibWluSGVpZ2h0Iiwic3JjIiwidmFyaWFudCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});