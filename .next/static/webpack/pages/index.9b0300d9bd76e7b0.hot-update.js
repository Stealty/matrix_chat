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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaginaInicial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction GlobalStyle() {\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: \"ea7e8895ba25d0c2\",\n        children: \"*{margin:0;\\npadding:0;\\nbox-sizing:border-box;\\nlist-style:none}\\nbody{font-family:'Open Sans', sans-serif}\\nhtml, body, #__next{min-height:100vh;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next>*{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\"\n    }, void 0, false, void 0, this);\n}\n_c = GlobalStyle;\nfunction Titulo(props) {\n    console.log(props.children);\n    var Tag = props.tag || 'h1';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"3a1648f10d8e7484\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[\"050\"]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"3a1648f10d8e7484\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[\"050\"]\n                ],\n                children: \"\".concat(Tag, \".__jsx-style-dynamic-selector{color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[\"050\"], \";\\nmargin-bottom:30px;\\nfont-size:24px;\\nfont-weight:600}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c1 = Titulo;\nfunction PaginaInicial() {\n    _s();\n    //const username = 'Stealty';\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_5___default().useState(''), 2), username = ref[0], setUsername = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyle, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[500],\n                    backgroundImage: 'url(https://images.wallpaperscraft.com/image/single/cell_light_hexagon_shadow_15345_2560x1440.jpg)',\n                    backgroundRepeat: 'no-repeat',\n                    backgroundSize: 'cover',\n                    backgroundBlendMode: 'multiply'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    styleSheet: {\n                        display: 'flex',\n                        alignItems: 'center',\n                        justifyContent: 'space-between',\n                        flexDirection: {\n                            xs: 'column',\n                            sm: 'row'\n                        },\n                        width: '100%',\n                        maxWidth: '700px',\n                        borderRadius: '5px',\n                        padding: '32px',\n                        margin: '16px',\n                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                        backgroundColor: 'url (https://images.wallpaperscraft.com/image/single/cell_light_hexagon_shadow_15345_2560x1440.jpg)'\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            as: \"form\",\n                            onSubmit: function onSubmit(infosDoEvento) {\n                                infosDoEvento.preventDefault();\n                                console.log('Alguem submeteu o form');\n                                window.location.href = '/chat';\n                            },\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                justifyContent: 'center',\n                                width: {\n                                    xs: '100%',\n                                    sm: '50%'\n                                },\n                                textAlign: 'center',\n                                marginBottom: '32px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                                    tag: \"h2\",\n                                    children: \"Boas vindas de volta!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                    value: username,\n                                    onChange: function onChange(event) {\n                                        console.log('usuario digitou', event.target.value);\n                                        // Onde está o valor?\n                                        var valor = event.target.value;\n                                        // Trocar o valor da variavel\n                                        // através do React e avise o console\n                                        setUsername(valor);\n                                    },\n                                    fullWidth: true,\n                                    textFieldColors: {\n                                        neutral: {\n                                            textColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[300],\n                                            mainColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[900],\n                                            mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[500],\n                                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[800]\n                                        }\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    type: \"submit\",\n                                    label: \"Entrar\",\n                                    fullWidth: true,\n                                    buttonColors: {\n                                        contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[\"000\"],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[600],\n                                        mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[400],\n                                        mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.primary[400]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                                    lineNumber: 138,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                maxWidth: '200px',\n                                padding: '16px',\n                                backgroundColor: 'url(https://images.wallpaperscraft.com/image/single/cell_light_hexagon_shadow_15345_2560x1440.jpg)',\n                                borderColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[999],\n                                borderRadius: '10px',\n                                flex: 1,\n                                minHeight: '240px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                    styleSheet: {\n                                        borderRadius: '50%',\n                                        marginBottom: '16px'\n                                    },\n                                    src: \"https://github.com/\".concat(username, \".png\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                                    lineNumber: 168,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    variant: \"body4\",\n                                    styleSheet: {\n                                        width: '100px',\n                                        textAlign: 'center',\n                                        color: 'red',\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_4__.theme.colors.neutrals[900],\n                                        padding: '3px 10px',\n                                        borderRadius: '1000px'\n                                    },\n                                    children: username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                                    lineNumber: 175,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                            lineNumber: 154,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\biell\\\\DigitalHouse\\\\projetos\\\\matrix_chat\\\\pages\\\\index.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n};\n_s(PaginaInicial, \"AfRD6VxGv+Gn/ZNWvgmLk5f6638=\");\n_c2 = PaginaInicial;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GlobalStyle\");\n$RefreshReg$(_c1, \"Titulo\");\n$RefreshReg$(_c2, \"PaginaInicial\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxFQUFFLENBQW9HO2dDQUNySDBDLFdBQVcsRUFBRWhFLG9FQUFvQztnQ0FDakRnQyxZQUFZLEVBQUUsQ0FBTTtnQ0FDcEJpQyxJQUFJLEVBQUUsQ0FBQztnQ0FDUEMsU0FBUyxFQUFFLENBQU87NEJBQ3BCLENBQUM7OzRHQUVBcEUsdURBQUs7b0NBQ0pvQixVQUFVLEVBQUUsQ0FBQzt3Q0FDWGMsWUFBWSxFQUFFLENBQUs7d0NBQ25CWSxZQUFZLEVBQUUsQ0FBTTtvQ0FDdEIsQ0FBQztvQ0FDRHVCLEdBQUcsRUFBRyxDQUFtQixxQkFBVyxNQUFJLENBQWJuRCxRQUFRLEVBQUMsQ0FBSTs7Ozs7OzRHQUV6Q3BCLHNEQUFJO29DQUNId0UsT0FBTyxFQUFDLENBQU87b0NBQ2ZsRCxVQUFVLEVBQUUsQ0FBQzt3Q0FDWFksS0FBSyxFQUFFLENBQU87d0NBQ2RhLFNBQVMsRUFBRSxDQUFRO3dDQUNuQjBCLEtBQUssRUFBRSxDQUFLO3dDQUNaL0MsZUFBZSxFQUFFdEIsb0VBQW9DO3dDQUNyRGlDLE9BQU8sRUFBRSxDQUFVO3dDQUNuQkQsWUFBWSxFQUFFLENBQVE7b0NBQ3hCLENBQUM7OENBRUFoQixRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXZCLENBQUM7R0ExSXVCRixhQUFhO01BQWJBLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgVGV4dCwgVGV4dEZpZWxkLCBJbWFnZSB9IGZyb20gJ0Bza3luZXh1aS9jb21wb25lbnRzJztcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbidcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5mdW5jdGlvbiBHbG9iYWxTdHlsZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgKiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIGJvZHkge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgfVxyXG4gICAgICAvKiBBcHAgZml0IEhlaWdodCAqLyBcclxuICAgICAgaHRtbCwgYm9keSwgI19fbmV4dCB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICAgICNfX25leHQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgIH1cclxuICAgICAgI19fbmV4dCA+ICoge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgIH1cclxuICAgICAgLyogLi9BcHAgZml0IEhlaWdodCAqLyBcclxuICAgIGB9PC9zdHlsZT5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaXR1bG8ocHJvcHMpIHtcclxuICBjb25zb2xlLmxvZyhwcm9wcy5jaGlsZHJlbilcclxuICBjb25zdCBUYWcgPSBwcm9wcy50YWcgfHwgJ2gxJztcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPFRhZz57cHJvcHMuY2hpbGRyZW59PC9UYWc+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgJHtUYWd9IHtcclxuICAgICAgICAgY29sb3I6ICR7YXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WycwNTAnXX07XHJcbiAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgIH1cclxuYH0gICAgPC9zdHlsZT5cclxuICAgIDwvPlxyXG5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmFJbmljaWFsKCkge1xyXG4gIC8vY29uc3QgdXNlcm5hbWUgPSAnU3RlYWx0eSc7XHJcblxyXG4gIGNvbnN0IFt1c2VybmFtZSwgc2V0VXNlcm5hbWVdID0gUmVhY3QudXNlU3RhdGUoJycpO1xyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSxcclxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChodHRwczovL2ltYWdlcy53YWxscGFwZXJzY3JhZnQuY29tL2ltYWdlL3NpbmdsZS9jZWxsX2xpZ2h0X2hleGFnb25fc2hhZG93XzE1MzQ1XzI1NjB4MTQ0MC5qcGcpJyxcclxuICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZEJsZW5kTW9kZTogJ211bHRpcGx5JyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiB7XHJcbiAgICAgICAgICAgICAgeHM6ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgIHNtOiAncm93JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6ICc3MDBweCcsXHJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsIHBhZGRpbmc6ICczMnB4JywgbWFyZ2luOiAnMTZweCcsXHJcbiAgICAgICAgICAgIGJveFNoYWRvdzogJzAgMnB4IDEwcHggMCByZ2IoMCAwIDAgLyAyMCUpJyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndXJsIChodHRwczovL2ltYWdlcy53YWxscGFwZXJzY3JhZnQuY29tL2ltYWdlL3NpbmdsZS9jZWxsX2xpZ2h0X2hleGFnb25fc2hhZG93XzE1MzQ1XzI1NjB4MTQ0MC5qcGcpJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgey8qIEZvcm11bMOhcmlvICovfVxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBhcz1cImZvcm1cIlxyXG4gICAgICAgICAgICBvblN1Ym1pdD17ZnVuY3Rpb24gKGluZm9zRG9FdmVudG8pIHtcclxuICAgICAgICAgICAgICBpbmZvc0RvRXZlbnRvLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FsZ3VlbSBzdWJtZXRldSBvIGZvcm0nKVxyXG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9jaGF0JztcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgd2lkdGg6IHsgeHM6ICcxMDAlJywgc206ICc1MCUnIH0sIHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbkJvdHRvbTogJzMycHgnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8VGl0dWxvIHRhZz1cImgyXCI+Qm9hcyB2aW5kYXMgZGUgdm9sdGEhPC9UaXR1bG8+XHJcblxyXG4gICAgICAgICAgICB7Lyo8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtmdW5jdGlvbiBoYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndXN1YXJpbyBkaWdpdG91JywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIC8vIE9uZGUgZXN0w6EgbyB2YWxvcj9cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gVHJvY2FyIG8gdmFsb3IgZGEgdmFyaWF2ZWxcclxuICAgICAgICAgICAgICAgIC8vIGF0cmF2w6lzIGRvIFJlYWN0IGUgYXZpc2UgbyBjb25zb2xlXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh2YWxvcik7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2Z1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3VzdWFyaW8gZGlnaXRvdScsIGV2ZW50LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgIC8vIE9uZGUgZXN0w6EgbyB2YWxvcj9cclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gVHJvY2FyIG8gdmFsb3IgZGEgdmFyaWF2ZWxcclxuICAgICAgICAgICAgICAgIC8vIGF0cmF2w6lzIGRvIFJlYWN0IGUgYXZpc2UgbyBjb25zb2xlXHJcbiAgICAgICAgICAgICAgICBzZXRVc2VybmFtZSh2YWxvcik7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICB0ZXh0RmllbGRDb2xvcnM9e3tcclxuICAgICAgICAgICAgICAgIG5ldXRyYWw6IHtcclxuICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzMwMF0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3JIaWdobGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs1MDBdLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbODAwXSxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9fSAvPlxyXG5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICBsYWJlbD0nRW50cmFyJ1xyXG4gICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgIGJ1dHRvbkNvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgY29udHJhc3RDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1tcIjAwMFwiXSxcclxuICAgICAgICAgICAgICAgIG1haW5Db2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzYwMF0sXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3JMaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzQwMF0sXHJcbiAgICAgICAgICAgICAgICBtYWluQ29sb3JTdHJvbmc6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs0MDBdLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIHsvKiBGb3JtdWzDoXJpbyAqL31cclxuXHJcblxyXG4gICAgICAgICAgey8qIFBob3RvIEFyZWEgKi99XHJcbiAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgbWF4V2lkdGg6ICcyMDBweCcsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3VybChodHRwczovL2ltYWdlcy53YWxscGFwZXJzY3JhZnQuY29tL2ltYWdlL3NpbmdsZS9jZWxsX2xpZ2h0X2hleGFnb25fc2hhZG93XzE1MzQ1XzI1NjB4MTQ0MC5qcGcpJyxcclxuICAgICAgICAgICAgICBib3JkZXJDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5OTldLFxyXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICAgICAgICAgIGZsZXg6IDEsXHJcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiAnMjQwcHgnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBzcmM9e2BodHRwczovL2dpdGh1Yi5jb20vJHt1c2VybmFtZX0ucG5nYH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTRcIlxyXG4gICAgICAgICAgICAgIHN0eWxlU2hlZXQ9e3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnMTAwcHgnLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5MDBdLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzNweCAxMHB4JyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwMDBweCdcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge3VzZXJuYW1lfVxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIndpdGhSb3V0ZXIiLCJhcHBDb25maWciLCJSZWFjdCIsIlJlYWN0RE9NIiwiR2xvYmFsU3R5bGUiLCJUaXR1bG8iLCJwcm9wcyIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZHJlbiIsIlRhZyIsInRhZyIsInRoZW1lIiwiY29sb3JzIiwicHJpbWFyeSIsIlBhZ2luYUluaWNpYWwiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzdHlsZVNoZWV0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJmbGV4RGlyZWN0aW9uIiwieHMiLCJzbSIsIndpZHRoIiwibWF4V2lkdGgiLCJib3JkZXJSYWRpdXMiLCJwYWRkaW5nIiwibWFyZ2luIiwiYm94U2hhZG93IiwiYXMiLCJvblN1Ym1pdCIsImluZm9zRG9FdmVudG8iLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRleHRBbGlnbiIsIm1hcmdpbkJvdHRvbSIsImJyIiwidmFsdWUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsb3IiLCJmdWxsV2lkdGgiLCJ0ZXh0RmllbGRDb2xvcnMiLCJuZXV0cmFsIiwidGV4dENvbG9yIiwibmV1dHJhbHMiLCJtYWluQ29sb3IiLCJtYWluQ29sb3JIaWdobGlnaHQiLCJ0eXBlIiwibGFiZWwiLCJidXR0b25Db2xvcnMiLCJjb250cmFzdENvbG9yIiwibWFpbkNvbG9yTGlnaHQiLCJtYWluQ29sb3JTdHJvbmciLCJib3JkZXJDb2xvciIsImZsZXgiLCJtaW5IZWlnaHQiLCJzcmMiLCJ2YXJpYW50IiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});