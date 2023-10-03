"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/chartjs-plugin-autocolors";
exports.ids = ["vendor-chunks/chartjs-plugin-autocolors"];
exports.modules = {

/***/ "(ssr)/./node_modules/chartjs-plugin-autocolors/dist/chartjs-plugin-autocolors.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/chartjs-plugin-autocolors/dist/chartjs-plugin-autocolors.esm.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ index)\n/* harmony export */ });\n/* harmony import */ var _kurkle_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @kurkle/color */ \"(ssr)/./node_modules/@kurkle/color/dist/color.esm.js\");\n/*!\n * chartjs-plugin-autocolors v0.2.2\n * https://github.com/kurkle/chartjs-plugin-autocolors#readme\n * (c) 2023 Jukka Kurkela <jukka.kurkela@gmail.com>\n * Released under the MIT license\n */\n\n\nfunction* hueGen() {\n  yield 0;\n  while (true) {\n    for (let i = 1; i < 10; i++) {\n      const d = 1 << i;\n      for (let j = 1; j <= d; j += 2) {\n        yield j / d;\n      }\n    }\n  }\n}\n\nfunction* colorGen(repeat = 1) {\n  const hue = hueGen();\n  let h = hue.next();\n  while (!h.done) {\n    let rgb = (0,_kurkle_color__WEBPACK_IMPORTED_MODULE_0__.hsv2rgb)(Math.round(h.value * 360), 0.6, 0.8);\n    for (let i = 0; i < repeat; i++) {\n      yield {background: (0,_kurkle_color__WEBPACK_IMPORTED_MODULE_0__.rgbString)({r: rgb[0], g: rgb[1], b: rgb[2], a: 192}), border: (0,_kurkle_color__WEBPACK_IMPORTED_MODULE_0__.rgbString)({r: rgb[0], g: rgb[1], b: rgb[2], a: 144})};\n    }\n    rgb = (0,_kurkle_color__WEBPACK_IMPORTED_MODULE_0__.hsv2rgb)(Math.round(h.value * 360), 0.6, 0.5);\n    for (let i = 0; i < repeat; i++) {\n      yield {background: (0,_kurkle_color__WEBPACK_IMPORTED_MODULE_0__.rgbString)({r: rgb[0], g: rgb[1], b: rgb[2], a: 192}), border: (0,_kurkle_color__WEBPACK_IMPORTED_MODULE_0__.rgbString)({r: rgb[0], g: rgb[1], b: rgb[2], a: 144})};\n    }\n    h = hue.next();\n  }\n}\n\nfunction setColors(dataset, background, border) {\n  dataset.backgroundColor = dataset.backgroundColor || background;\n  dataset.borderColor = dataset.borderColor || border;\n  return dataset.backgroundColor === background && dataset.borderColor === border;\n}\n\nfunction getNext(color, customize, context) {\n  const c = color.next().value;\n  if (typeof customize === 'function') {\n    return customize(Object.assign({colors: c}, context));\n  }\n  return c;\n}\n\nvar index = {\n  id: 'autocolors',\n  beforeUpdate(chart, args, options) {\n    const {mode = 'dataset', enabled = true, customize, repeat} = options;\n\n    if (!enabled) {\n      return;\n    }\n\n    const gen = colorGen(repeat);\n\n    if (options.offset) {\n      // offset the color generation by n colors\n      for (let i = 0; i < options.offset; i++) {\n        gen.next();\n      }\n    }\n\n    if (mode === 'label') {\n      return labelMode(chart, gen, customize);\n    }\n\n    const datasetMode = mode === 'dataset';\n\n    let c = getNext(gen, customize, {chart, datasetIndex: 0, dataIndex: datasetMode ? undefined : 0});\n    for (const dataset of chart.data.datasets) {\n      if (datasetMode) {\n        if (setColors(dataset, c.background, c.border)) {\n          c = getNext(gen, customize, {chart, datasetIndex: dataset.index});\n        }\n      } else {\n        const background = [];\n        const border = [];\n        for (let i = 0; i < dataset.data.length; i++) {\n          background.push(c.background);\n          border.push(c.border);\n          c = getNext(gen, customize, {chart, datasetIndex: dataset.index, dataIndex: i});\n        }\n        setColors(dataset, background, border);\n      }\n    }\n  }\n};\n\nfunction labelMode(chart, gen, customize) {\n  const colors = {};\n  for (const dataset of chart.data.datasets) {\n    const label = dataset.label ?? '';\n    if (!colors[label]) {\n      colors[label] = getNext(gen, customize, {chart, datasetIndex: 0, dataIndex: undefined, label});\n    }\n    const c = colors[label];\n    setColors(dataset, c.background, c.border);\n  }\n}\n\n\n//# sourceMappingURL=chartjs-plugin-autocolors.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvY2hhcnRqcy1wbHVnaW4tYXV0b2NvbG9ycy9kaXN0L2NoYXJ0anMtcGx1Z2luLWF1dG9jb2xvcnMuZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ21EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNEQUFPO0FBQ3JCLG9CQUFvQixZQUFZO0FBQ2hDLGFBQWEsWUFBWSx3REFBUyxFQUFFLHdDQUF3QyxXQUFXLHdEQUFTLEVBQUUsd0NBQXdDO0FBQzFJO0FBQ0EsVUFBVSxzREFBTztBQUNqQixvQkFBb0IsWUFBWTtBQUNoQyxhQUFhLFlBQVksd0RBQVMsRUFBRSx3Q0FBd0MsV0FBVyx3REFBUyxFQUFFLHdDQUF3QztBQUMxSTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxVQUFVO0FBQzlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFEQUFxRDs7QUFFaEU7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0Isb0JBQW9CO0FBQzFDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUNBQXFDLCtEQUErRDtBQUNwRztBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsbUNBQW1DO0FBQzFFO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQSx1Q0FBdUMsaURBQWlEO0FBQ3hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLG9EQUFvRDtBQUNuRztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU0QjtBQUM1QiIsInNvdXJjZXMiOlsid2VicGFjazovL3BpeGVsLWFydC1nYWxsZXJ5Ly4vbm9kZV9tb2R1bGVzL2NoYXJ0anMtcGx1Z2luLWF1dG9jb2xvcnMvZGlzdC9jaGFydGpzLXBsdWdpbi1hdXRvY29sb3JzLmVzbS5qcz8zMzQzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogY2hhcnRqcy1wbHVnaW4tYXV0b2NvbG9ycyB2MC4yLjJcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9rdXJrbGUvY2hhcnRqcy1wbHVnaW4tYXV0b2NvbG9ycyNyZWFkbWVcbiAqIChjKSAyMDIzIEp1a2thIEt1cmtlbGEgPGp1a2thLmt1cmtlbGFAZ21haWwuY29tPlxuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKi9cbmltcG9ydCB7IGhzdjJyZ2IsIHJnYlN0cmluZyB9IGZyb20gJ0BrdXJrbGUvY29sb3InO1xuXG5mdW5jdGlvbiogaHVlR2VuKCkge1xuICB5aWVsZCAwO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMTA7IGkrKykge1xuICAgICAgY29uc3QgZCA9IDEgPDwgaTtcbiAgICAgIGZvciAobGV0IGogPSAxOyBqIDw9IGQ7IGogKz0gMikge1xuICAgICAgICB5aWVsZCBqIC8gZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24qIGNvbG9yR2VuKHJlcGVhdCA9IDEpIHtcbiAgY29uc3QgaHVlID0gaHVlR2VuKCk7XG4gIGxldCBoID0gaHVlLm5leHQoKTtcbiAgd2hpbGUgKCFoLmRvbmUpIHtcbiAgICBsZXQgcmdiID0gaHN2MnJnYihNYXRoLnJvdW5kKGgudmFsdWUgKiAzNjApLCAwLjYsIDAuOCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXBlYXQ7IGkrKykge1xuICAgICAgeWllbGQge2JhY2tncm91bmQ6IHJnYlN0cmluZyh7cjogcmdiWzBdLCBnOiByZ2JbMV0sIGI6IHJnYlsyXSwgYTogMTkyfSksIGJvcmRlcjogcmdiU3RyaW5nKHtyOiByZ2JbMF0sIGc6IHJnYlsxXSwgYjogcmdiWzJdLCBhOiAxNDR9KX07XG4gICAgfVxuICAgIHJnYiA9IGhzdjJyZ2IoTWF0aC5yb3VuZChoLnZhbHVlICogMzYwKSwgMC42LCAwLjUpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVwZWF0OyBpKyspIHtcbiAgICAgIHlpZWxkIHtiYWNrZ3JvdW5kOiByZ2JTdHJpbmcoe3I6IHJnYlswXSwgZzogcmdiWzFdLCBiOiByZ2JbMl0sIGE6IDE5Mn0pLCBib3JkZXI6IHJnYlN0cmluZyh7cjogcmdiWzBdLCBnOiByZ2JbMV0sIGI6IHJnYlsyXSwgYTogMTQ0fSl9O1xuICAgIH1cbiAgICBoID0gaHVlLm5leHQoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRDb2xvcnMoZGF0YXNldCwgYmFja2dyb3VuZCwgYm9yZGVyKSB7XG4gIGRhdGFzZXQuYmFja2dyb3VuZENvbG9yID0gZGF0YXNldC5iYWNrZ3JvdW5kQ29sb3IgfHwgYmFja2dyb3VuZDtcbiAgZGF0YXNldC5ib3JkZXJDb2xvciA9IGRhdGFzZXQuYm9yZGVyQ29sb3IgfHwgYm9yZGVyO1xuICByZXR1cm4gZGF0YXNldC5iYWNrZ3JvdW5kQ29sb3IgPT09IGJhY2tncm91bmQgJiYgZGF0YXNldC5ib3JkZXJDb2xvciA9PT0gYm9yZGVyO1xufVxuXG5mdW5jdGlvbiBnZXROZXh0KGNvbG9yLCBjdXN0b21pemUsIGNvbnRleHQpIHtcbiAgY29uc3QgYyA9IGNvbG9yLm5leHQoKS52YWx1ZTtcbiAgaWYgKHR5cGVvZiBjdXN0b21pemUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gY3VzdG9taXplKE9iamVjdC5hc3NpZ24oe2NvbG9yczogY30sIGNvbnRleHQpKTtcbiAgfVxuICByZXR1cm4gYztcbn1cblxudmFyIGluZGV4ID0ge1xuICBpZDogJ2F1dG9jb2xvcnMnLFxuICBiZWZvcmVVcGRhdGUoY2hhcnQsIGFyZ3MsIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7bW9kZSA9ICdkYXRhc2V0JywgZW5hYmxlZCA9IHRydWUsIGN1c3RvbWl6ZSwgcmVwZWF0fSA9IG9wdGlvbnM7XG5cbiAgICBpZiAoIWVuYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBnZW4gPSBjb2xvckdlbihyZXBlYXQpO1xuXG4gICAgaWYgKG9wdGlvbnMub2Zmc2V0KSB7XG4gICAgICAvLyBvZmZzZXQgdGhlIGNvbG9yIGdlbmVyYXRpb24gYnkgbiBjb2xvcnNcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5vZmZzZXQ7IGkrKykge1xuICAgICAgICBnZW4ubmV4dCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtb2RlID09PSAnbGFiZWwnKSB7XG4gICAgICByZXR1cm4gbGFiZWxNb2RlKGNoYXJ0LCBnZW4sIGN1c3RvbWl6ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YXNldE1vZGUgPSBtb2RlID09PSAnZGF0YXNldCc7XG5cbiAgICBsZXQgYyA9IGdldE5leHQoZ2VuLCBjdXN0b21pemUsIHtjaGFydCwgZGF0YXNldEluZGV4OiAwLCBkYXRhSW5kZXg6IGRhdGFzZXRNb2RlID8gdW5kZWZpbmVkIDogMH0pO1xuICAgIGZvciAoY29uc3QgZGF0YXNldCBvZiBjaGFydC5kYXRhLmRhdGFzZXRzKSB7XG4gICAgICBpZiAoZGF0YXNldE1vZGUpIHtcbiAgICAgICAgaWYgKHNldENvbG9ycyhkYXRhc2V0LCBjLmJhY2tncm91bmQsIGMuYm9yZGVyKSkge1xuICAgICAgICAgIGMgPSBnZXROZXh0KGdlbiwgY3VzdG9taXplLCB7Y2hhcnQsIGRhdGFzZXRJbmRleDogZGF0YXNldC5pbmRleH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kID0gW107XG4gICAgICAgIGNvbnN0IGJvcmRlciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFzZXQuZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGJhY2tncm91bmQucHVzaChjLmJhY2tncm91bmQpO1xuICAgICAgICAgIGJvcmRlci5wdXNoKGMuYm9yZGVyKTtcbiAgICAgICAgICBjID0gZ2V0TmV4dChnZW4sIGN1c3RvbWl6ZSwge2NoYXJ0LCBkYXRhc2V0SW5kZXg6IGRhdGFzZXQuaW5kZXgsIGRhdGFJbmRleDogaX0pO1xuICAgICAgICB9XG4gICAgICAgIHNldENvbG9ycyhkYXRhc2V0LCBiYWNrZ3JvdW5kLCBib3JkZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZnVuY3Rpb24gbGFiZWxNb2RlKGNoYXJ0LCBnZW4sIGN1c3RvbWl6ZSkge1xuICBjb25zdCBjb2xvcnMgPSB7fTtcbiAgZm9yIChjb25zdCBkYXRhc2V0IG9mIGNoYXJ0LmRhdGEuZGF0YXNldHMpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRhdGFzZXQubGFiZWwgPz8gJyc7XG4gICAgaWYgKCFjb2xvcnNbbGFiZWxdKSB7XG4gICAgICBjb2xvcnNbbGFiZWxdID0gZ2V0TmV4dChnZW4sIGN1c3RvbWl6ZSwge2NoYXJ0LCBkYXRhc2V0SW5kZXg6IDAsIGRhdGFJbmRleDogdW5kZWZpbmVkLCBsYWJlbH0pO1xuICAgIH1cbiAgICBjb25zdCBjID0gY29sb3JzW2xhYmVsXTtcbiAgICBzZXRDb2xvcnMoZGF0YXNldCwgYy5iYWNrZ3JvdW5kLCBjLmJvcmRlcik7XG4gIH1cbn1cblxuZXhwb3J0IHsgaW5kZXggYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hhcnRqcy1wbHVnaW4tYXV0b2NvbG9ycy5lc20uanMubWFwXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/chartjs-plugin-autocolors/dist/chartjs-plugin-autocolors.esm.js\n");

/***/ })

};
;