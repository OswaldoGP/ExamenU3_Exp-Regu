/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { const e = new Error(\"Cannot find module '../public/css/main.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\nvar expresion = document.getElementById(\"expresion\");\nvar texto = document.getElementById(\"texto\");\nvar btnChecar = document.getElementById(\"btnChecar\");\nvar respuesta = document.getElementById(\"respuesta\");\n\n// Muestra el mensaje con una clase de color (exito o error)\nvar mostrar = function mostrar(mensaje, clase) {\n  respuesta.innerText = mensaje;\n  respuesta.className = \"respuesta \".concat(clase);\n};\nvar checar = function checar() {\n  // si los campos estan vacios avisamos\n  if (expresion.value === \"\" || texto.value === \"\") {\n    mostrar(\"Escribe la expresion y el texto\", \"error\");\n    return;\n  }\n\n  // try/catch por si la expresion esta mal escrita, por ejemplo \"[a-z\"\n  try {\n    var regex = new RegExp(expresion.value);\n    // test devuelve true si el texto cumple, false si no\n    var cumple = regex.test(texto.value);\n    mostrar(cumple ? \"Si cumple con la expresion\" : \"No cumple con la expresion\", cumple ? \"exito\" : \"error\");\n  } catch (error) {\n    mostrar(\"La expresion regular no es valida\", \"error\");\n  }\n};\nbtnChecar.addEventListener(\"click\", checar);\n\n//# sourceURL=webpack://plantilla/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	const __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0,__webpack_exports__,__webpack_require__);
/******/ 	
/******/ })()
;