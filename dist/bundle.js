/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
() {

eval("{var expresion = document.getElementById(\"expresion\");\nvar texto = document.getElementById(\"texto\");\nvar btnChecar = document.getElementById(\"btnChecar\");\nvar btnLimpiar = document.getElementById(\"btnLimpiar\");\nvar respuesta = document.getElementById(\"respuesta\");\nvar mostrar = function mostrar(mensaje, clase) {\n  respuesta.innerText = mensaje;\n  respuesta.className = \"respuesta \".concat(clase);\n};\nvar checar = function checar() {\n  if (expresion.value === \"\" || texto.value === \"\") {\n    mostrar(\"Escribe la expresion y el texto\", \"error\");\n    return;\n  }\n  try {\n    var regex = new RegExp(expresion.value);\n    var cumple = regex.test(texto.value);\n    mostrar(cumple ? \"Si cumple con la expresion\" : \"No cumple con la expresion\", cumple ? \"exito\" : \"error\");\n  } catch (error) {\n    mostrar(\"La expresion regular no es valida\", \"error\");\n  }\n};\nvar limpiar = function limpiar() {\n  expresion.value = \"\";\n  texto.value = \"\";\n  respuesta.innerText = \"\";\n  respuesta.className = \"respuesta\";\n};\nbtnChecar.addEventListener(\"click\", checar);\nbtnLimpiar.addEventListener(\"click\", limpiar);\n\n//# sourceURL=webpack://plantilla/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;