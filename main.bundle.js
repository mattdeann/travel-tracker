/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* This is an example of using Sass, otherwise plain CSS works too*/\nbody {\n  display: grid;\n  grid-template-columns: 2fr 8fr 2fr;\n  grid-template-rows: 2fr 9fr 1fr;\n  grid-gap: 10px;\n  height: calc(100vh - 20px);\n  width: calc(100vw - 20px);\n  background: linear-gradient(to bottom right, #09071a, #191449);\n  font-family: BlenderProBold, sans-serif;\n  font-style: italic;\n  font-weight: 700;\n  font-size: 14px;\n  color: #191449; }\n\n.login-display {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  border: 5px solid #18F5FE;\n  box-shadow: 0 0 30px #F9F300 inset;\n  background: #B05CB4;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  transition: all .3s ease-in-out; }\n  .login-display:hover, .login-displayfocus {\n    transform: scale(1.1); }\n  .login-display .login-button {\n    margin-top: 20px;\n    width: 8rem;\n    border-radius: 5px;\n    background-color: #F9F300;\n    color: #3D0E53;\n    font-weight: bolder;\n    transition: all .3s ease-in-out; }\n    .login-display .login-button:hover, .login-display .login-button:focus {\n      background-color: #3D0E53;\n      color: #D61289;\n      cursor: pointer; }\n\n.traveler-display {\n  grid-row: 1 / -1;\n  grid-column: 1 / -1;\n  display: grid;\n  grid-template-columns: 2fr 8fr 2fr;\n  grid-template-rows: 2fr 9fr 1fr; }\n\n.traveler-header {\n  grid-column: 1 / -1;\n  grid-row: 1 / 2;\n  background: linear-gradient(to bottom, #3D0E53, #3D0E53, #191449);\n  border: 5px solid #D61289;\n  margin: 3px;\n  box-shadow: 0px 0px 5px 2px #F9F300;\n  padding: 10px;\n  display: flex;\n  justify-content: center; }\n  .traveler-header h1 {\n    color: #18F5FE; }\n\n.traveler-nav {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  background: linear-gradient(to bottom, #B05CB4, #D61289, #18F5FE, #2B7FB5);\n  border: 5px solid #D61289;\n  margin: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: 400px; }\n  .traveler-nav input {\n    width: 8.5rem; }\n  .traveler-nav .trip-request {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    margin: 10px; }\n  .traveler-nav .quote-button {\n    margin-top: 20px;\n    width: 8rem;\n    border-radius: 5px;\n    background-color: #F9F300;\n    color: #3D0E53;\n    font-weight: bolder;\n    transition: all .3s ease-in-out; }\n    .traveler-nav .quote-button:hover, .traveler-nav .quote-button:focus {\n      background-color: #3D0E53;\n      color: #D61289;\n      cursor: pointer; }\n  .traveler-nav label {\n    margin-top: 2rem; }\n\n.traveler-main {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background: linear-gradient(to bottom, #3D0E53, #191449);\n  border: 5px solid #D61289;\n  margin: 3px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-gap: 15px;\n  padding: 10px;\n  overflow-y: auto; }\n  .traveler-main article {\n    background-color: #B05CB4;\n    border: 5px solid #D61289;\n    box-shadow: 4px 4px #2B7FB5, 7px 7px #18F5FE;\n    color: #3D0E53;\n    font-weight: lighter;\n    font-size: 18px;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    transition: all .3s ease-in-out; }\n    .traveler-main article:hover, .traveler-main articlefocus {\n      transform: scale(0.95); }\n    .traveler-main article .location-image {\n      height: 100%;\n      width: 100%; }\n    .traveler-main article .trip-summary {\n      background-color: rgba(255, 255, 255, 0.523);\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      padding: 15px;\n      height: 80%;\n      width: 75%; }\n    .traveler-main article p {\n      align-self: center; }\n    .traveler-main article .travelers {\n      margin-bottom: 0; }\n    .traveler-main article .status {\n      margin-bottom: 0; }\n    .traveler-main article .value {\n      margin-top: 0; }\n\n::-webkit-scrollbar {\n  width: 15px; }\n\n::-webkit-scrollbar-track {\n  background: white; }\n\n::-webkit-scrollbar-thumb {\n  background: #F9F300; }\n\n::-webkit-scrollbar-thumb:hover {\n  background: #18F5FE; }\n\n.traveler-aside {\n  grid-column: 3 / 4;\n  grid-row: 2 / 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  background: linear-gradient(to bottom, #B05CB4, #D61289, #18F5FE, #2B7FB5);\n  border: 5px solid #D61289;\n  margin: 3px; }\n  .traveler-aside .title {\n    margin-top: 2rem;\n    margin-bottom: 0.5rem; }\n  .traveler-aside .value {\n    margin-top: 0; }\n\n.traveler-footer {\n  grid-column: 1 / -1;\n  grid-row: 3 / 4;\n  background: linear-gradient(to bottom, #3D0E53, #3D0E53, #191449);\n  border: 5px solid #D61289;\n  margin: 3px; }\n\n.traveler-modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 30px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4); }\n  .traveler-modal .modal-content {\n    background-color: #191449;\n    margin: 3rem auto;\n    padding: 20px;\n    border: 1px solid #888;\n    height: fit-content;\n    width: 75%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center; }\n    .traveler-modal .modal-content .close-quote {\n      align-self: flex-end;\n      padding-top: 0;\n      padding-right: 5px;\n      padding-bottom: 15px;\n      color: #B05CB4;\n      font-size: 15px;\n      font-weight: bold;\n      transition: all .3s ease-in-out; }\n      .traveler-modal .modal-content .close-quote:hover, .traveler-modal .modal-content .close-quotefocus {\n        transform: scale(1.1); }\n      .traveler-modal .modal-content .close-quote:hover, .traveler-modal .modal-content .close-quote:focus {\n        cursor: pointer;\n        color: #D61289; }\n    .traveler-modal .modal-content .quote-image {\n      background-size: cover;\n      padding-top: 0;\n      padding: 1rem;\n      height: 20rem; }\n    .traveler-modal .modal-content .estimate-display {\n      margin-top: 1rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      font-size: 1rem; }\n    .traveler-modal .modal-content .estimated-cost {\n      display: flex;\n      justify-content: center;\n      color: #18F5FE; }\n    .traveler-modal .modal-content .request-button {\n      font-style: italic;\n      font-size: 1rem;\n      height: 5rem;\n      width: 20rem;\n      margin-top: 2rem;\n      background-color: #D61289;\n      color: #191449;\n      transition: all .3s ease-in-out; }\n      .traveler-modal .modal-content .request-button:hover, .traveler-modal .modal-content .request-buttonfocus {\n        transform: scale(1.1); }\n      .traveler-modal .modal-content .request-button:hover, .traveler-modal .modal-content .request-button:focus {\n        cursor: pointer;\n        background-color: #3D0E53;\n        color: #D61289; }\n\n.admin-display {\n  grid-row: 1 / -1;\n  grid-column: 1 / -1;\n  padding: 10px;\n  overflow-y: auto;\n  display: grid;\n  grid-template-columns: 2fr 8fr;\n  grid-template-rows: 2fr 10fr; }\n  .admin-display .admin-header {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n    color: #18F5FE;\n    display: flex;\n    justify-content: center;\n    background: linear-gradient(to bottom, #3D0E53, #3D0E53, #191449);\n    border: 5px solid #D61289;\n    margin: 3px; }\n  .admin-display .admin-nav {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    border: 2px solid #D61289;\n    background: linear-gradient(to bottom, #B05CB4, #D61289, #18F5FE, #2B7FB5);\n    border: 5px solid #D61289;\n    margin: 3px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 400px; }\n    .admin-display .admin-nav input {\n      width: 8.5rem; }\n    .admin-display .admin-nav .trip-request {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-evenly;\n      align-items: center;\n      margin: 10px; }\n    .admin-display .admin-nav .quote-button {\n      margin-top: 20px;\n      width: 8rem;\n      border-radius: 5px;\n      background-color: #F9F300;\n      color: #3D0E53;\n      font-weight: bolder;\n      transition: all .3s ease-in-out; }\n      .admin-display .admin-nav .quote-button:hover, .admin-display .admin-nav .quote-button:focus {\n        background-color: #3D0E53;\n        color: #D61289;\n        cursor: pointer; }\n  .admin-display .admin-modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    padding-top: 30px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: black;\n    background-color: rgba(0, 0, 0, 0.4); }\n    .admin-display .admin-modal .modal-content {\n      background-color: #191449;\n      margin: 3rem auto;\n      padding: 20px;\n      border: 1px solid #888;\n      height: fit-content;\n      width: 75%;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: center; }\n      .admin-display .admin-modal .modal-content .close-quote {\n        align-self: flex-end;\n        padding-top: 0;\n        padding-right: 5px;\n        padding-bottom: 15px;\n        color: #B05CB4;\n        font-size: 15px;\n        font-weight: bold;\n        transition: all .3s ease-in-out; }\n        .admin-display .admin-modal .modal-content .close-quote:hover, .admin-display .admin-modal .modal-content .close-quotefocus {\n          transform: scale(1.1); }\n        .admin-display .admin-modal .modal-content .close-quote:hover, .admin-display .admin-modal .modal-content .close-quote:focus {\n          cursor: pointer;\n          color: #D61289; }\n      .admin-display .admin-modal .modal-content .quote-image {\n        background-size: cover;\n        padding-top: 0;\n        padding: 1rem;\n        height: 20rem; }\n      .admin-display .admin-modal .modal-content .estimate-display {\n        margin-top: 1rem;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        font-size: 1rem; }\n      .admin-display .admin-modal .modal-content .estimated-cost {\n        display: flex;\n        justify-content: center;\n        color: #18F5FE; }\n      .admin-display .admin-modal .modal-content .request-button {\n        font-style: italic;\n        font-size: 1rem;\n        height: 5rem;\n        width: 20rem;\n        margin-top: 2rem;\n        background-color: #D61289;\n        color: #191449;\n        transition: all .3s ease-in-out; }\n        .admin-display .admin-modal .modal-content .request-button:hover, .admin-display .admin-modal .modal-content .request-buttonfocus {\n          transform: scale(1.1); }\n        .admin-display .admin-modal .modal-content .request-button:hover, .admin-display .admin-modal .modal-content .request-button:focus {\n          cursor: pointer;\n          background-color: #3D0E53;\n          color: #D61289; }\n    .admin-display .admin-modal .close-approval {\n      align-self: flex-end;\n      padding-top: 0;\n      padding-right: 5px;\n      padding-bottom: 15px;\n      color: #B05CB4;\n      font-size: 15px;\n      font-weight: bold;\n      transition: all .3s ease-in-out; }\n      .admin-display .admin-modal .close-approval:hover, .admin-display .admin-modal .close-approvalfocus {\n        transform: scale(1.1); }\n      .admin-display .admin-modal .close-approval:hover, .admin-display .admin-modal .close-approval:focus {\n        cursor: pointer;\n        color: #D61289; }\n    .admin-display .admin-modal .pending-trip {\n      padding-top: 0;\n      padding: 1rem;\n      height: 20rem;\n      width: 30rem;\n      background-size: cover; }\n      .admin-display .admin-modal .pending-trip article {\n        background-color: #B05CB4;\n        border: 5px solid #D61289;\n        box-shadow: 4px 4px #2B7FB5, 7px 7px #18F5FE;\n        color: #3D0E53;\n        font-weight: lighter;\n        font-size: 18px;\n        background-size: cover;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        transition: all .3s ease-in-out; }\n        .admin-display .admin-modal .pending-trip article:hover, .admin-display .admin-modal .pending-trip articlefocus {\n          transform: scale(0.95); }\n        .admin-display .admin-modal .pending-trip article .location-image {\n          height: 100%;\n          width: 100%; }\n        .admin-display .admin-modal .pending-trip article .trip-summary {\n          background-color: rgba(255, 255, 255, 0.523);\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          padding: 15px;\n          height: 80%;\n          width: 75%; }\n        .admin-display .admin-modal .pending-trip article p {\n          align-self: center; }\n        .admin-display .admin-modal .pending-trip article .travelers {\n          margin-bottom: 0; }\n        .admin-display .admin-modal .pending-trip article .status {\n          margin-bottom: 0; }\n        .admin-display .admin-modal .pending-trip article .value {\n          margin-top: 0; }\n    .admin-display .admin-modal .trip-summary {\n      background-color: rgba(255, 255, 255, 0.523);\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: center;\n      height: 90%; }\n      .admin-display .admin-modal .trip-summary .destination {\n        margin-top: 0; }\n      .admin-display .admin-modal .trip-summary .travelers {\n        margin-bottom: 0; }\n      .admin-display .admin-modal .trip-summary .status {\n        margin-bottom: 0; }\n    .admin-display .admin-modal .approve-button {\n      margin-top: 20px;\n      width: 8rem;\n      border-radius: 5px;\n      background-color: #F9F300;\n      color: #3D0E53;\n      font-weight: bolder;\n      transition: all .3s ease-in-out; }\n      .admin-display .admin-modal .approve-button:hover, .admin-display .admin-modal .approve-button:focus {\n        background-color: #3D0E53;\n        color: #D61289;\n        cursor: pointer; }\n    .admin-display .admin-modal .deny-button {\n      margin-top: 20px;\n      width: 8rem;\n      border-radius: 5px;\n      background-color: #F9F300;\n      color: #3D0E53;\n      font-weight: bolder;\n      transition: all .3s ease-in-out; }\n      .admin-display .admin-modal .deny-button:hover, .admin-display .admin-modal .deny-button:focus {\n        background-color: #3D0E53;\n        color: #D61289;\n        cursor: pointer; }\n  .admin-display main {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    margin-left: 0.5rem;\n    grid-gap: 15px;\n    overflow-y: auto; }\n    .admin-display main article {\n      background-color: #B05CB4;\n      border: 5px solid #D61289;\n      box-shadow: 4px 4px #2B7FB5, 7px 7px #18F5FE;\n      color: #3D0E53;\n      font-weight: lighter;\n      font-size: 18px;\n      background-size: cover;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      transition: all .3s ease-in-out; }\n      .admin-display main article:hover, .admin-display main articlefocus {\n        transform: scale(0.95); }\n      .admin-display main article .location-image {\n        height: 100%;\n        width: 100%; }\n      .admin-display main article .trip-summary {\n        background-color: rgba(255, 255, 255, 0.523);\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        padding: 15px;\n        height: 80%;\n        width: 75%; }\n      .admin-display main article p {\n        align-self: center; }\n      .admin-display main article .travelers {\n        margin-bottom: 0; }\n      .admin-display main article .status {\n        margin-bottom: 0; }\n      .admin-display main article .value {\n        margin-top: 0; }\n    .admin-display main .date {\n      margin-top: 0; }\n    .admin-display main .duration {\n      margin-bottom: 0; }\n\n.hidden {\n  display: none; }\n\n@media screen and (max-width: 800px) {\n  body {\n    height: 100vh;\n    width: calc(100vw - 20px);\n    display: grid; }\n  .traveler-header {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1; }\n  .traveler-nav {\n    justify-content: flex-start;\n    grid-row: 2 / 3;\n    grid-column: 1 / -1;\n    min-height: 20rem;\n    overflow-y: scroll; }\n  .traveler-main {\n    grid-row: 3 / 4;\n    grid-column: 1 / -1;\n    background: linear-gradient(to bottom, #3D0E53, #191449);\n    border: 5px solid #D61289;\n    margin: 3px;\n    display: grid;\n    grid-template-columns: 1fr;\n    height: 15rem;\n    overflow-y: auto; }\n    .traveler-main article {\n      background-color: #B05CB4;\n      border: 5px solid #D61289;\n      box-shadow: 4px 4px #2B7FB5, 7px 7px #18F5FE;\n      color: #3D0E53;\n      font-weight: lighter;\n      font-size: 18px;\n      background-size: cover;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      transition: all .3s ease-in-out; }\n      .traveler-main article:hover, .traveler-main articlefocus {\n        transform: scale(0.95); }\n      .traveler-main article .location-image {\n        height: 100%;\n        width: 100%; }\n      .traveler-main article .trip-summary {\n        background-color: rgba(255, 255, 255, 0.523);\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        padding: 15px;\n        height: 80%;\n        width: 75%; }\n      .traveler-main article p {\n        align-self: center; }\n      .traveler-main article .travelers {\n        margin-bottom: 0; }\n      .traveler-main article .status {\n        margin-bottom: 0; }\n      .traveler-main article .value {\n        margin-top: 0; }\n  .traveler-aside {\n    grid-row: 4 / 5;\n    grid-column: 1 / -1; }\n  .quote-image {\n    background-size: cover;\n    padding-top: 0;\n    background-size: cover;\n    width: 70vw; } }\n", "",{"version":3,"sources":["webpack://./src/css/base.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_nav_styles.scss","webpack://./src/css/_trip_styles.scss","webpack://./src/css/_modal_styles.scss","webpack://./src/css/_admin_display.scss","webpack://./src/css/_media_queries.scss"],"names":[],"mappings":"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","sourcesContent":["/* This is an example of using Sass, otherwise plain CSS works too*/\n@import \"variables\";\n@import \"nav_styles\";\n@import \"trip_styles\";\n@import \"modal_styles\";\n@import \"admin_display\";\n@import \"media_queries\";\n\nbody {\n  @include gridDisplay(2fr 8fr 2fr, 2fr 9fr 1fr);\n  grid-gap: 10px;\n  height: calc(100vh - 20px);\n  width: calc(100vw - 20px);\n  background: linear-gradient(to bottom right, $black, $darker-purple);\n  font-family: $font;\n  font-style: italic;\n  font-weight: 700;\n  font-size: 14px; \n  color: $darker-purple;\n}\n\n.login-display {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  border: 5px solid $light-blue;\n  box-shadow: 0 0 30px $yellow inset;\n  background: $purple;\n  @include flexDisplay(column, space-evenly, center);\n  @include grow;\n\n  .login-button {\n    @include buttonStyles;\n  }\n}\n\n.traveler-display {\n  grid-row: 1 / -1;\n  grid-column: 1 / -1;\n  @include gridDisplay(2fr 8fr 2fr, 2fr 9fr 1fr);\n}\n\n.traveler-header {\n  grid-column: 1 / -1;\n  grid-row: 1 / 2;\n  @include headerFooterStyles;\n  box-shadow: 0px 0px 5px 2px $yellow;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n\n  h1 {\n    color: $light-blue;\n  }\n}\n\n.traveler-nav {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  @include sideStyles;\n  @include flexDisplay(column, flex-start, center);\n  @include navStyles;\n\n  label {\n    margin-top: 2rem;\n  }\n}\n\n.traveler-main {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background: linear-gradient(to bottom, $dark-purple, $darker-purple);\n  border: $grid-border;\n  margin: 3px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-gap: 15px;\n  padding: 10px;\n  overflow-y: auto;\n  @include tripStyles;\n}\n\n@include scrollbar;\n\n\n.traveler-aside {\n  grid-column: 3 / 4;\n  grid-row: 2 / 3;\n  @include flexDisplay(column, flex-start, center);\n  @include sideStyles;\n\n  .title {\n    margin-top: 2rem;\n    margin-bottom: 0.5rem;\n  }\n\n  .value {\n    margin-top: 0;\n  }\n\n}\n\n.traveler-footer {\n  grid-column: 1 / -1;\n  grid-row: 3 / 4;\n  @include headerFooterStyles;\n}\n\n.traveler-modal {\n  @include modalStyles;\n}\n\n.admin-display {\n  @include adminDisplay;\n}\n\n.hidden {\n  display: none;\n}\n\n// MEDIA QUERIES\n@include mobile;","// TYPE / COLORS\n$font: BlenderProBold, sans-serif;\n$black: #09071a;\n$darker-purple: #191449;\n$dark-purple: #3D0E53;\n$purple: #B05CB4;\n$pink: #D61289;\n$blue: #2B7FB5;\n$light-blue: #18F5FE;\n$yellow: #F9F300;\n$grid-border: 5px solid $pink;\n\n// MIXINS\n@mixin gridDisplay($columns, $rows) {\n  display: grid;\n  grid-template-columns: $columns;\n  grid-template-rows: $rows;\n};\n\n@mixin flexDisplay($direction, $justify, $align) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n  align-items: $align;\n};\n\n@mixin headerFooterStyles() {\n  background: linear-gradient(to bottom, $dark-purple, $dark-purple, $darker-purple);\n  border: $grid-border;\n  margin: 3px;\n}\n\n@mixin sideStyles() {\n  background: linear-gradient(to bottom, $purple, $pink, $light-blue, $blue);\n  border: $grid-border;\n  margin: 3px;\n}\n\n@mixin buttonStyles() {\n  margin-top: 20px;\n  width: 8rem;\n  border-radius: 5px;\n  background-color: $yellow;\n  color: $dark-purple;\n  font-weight: bolder;\n  transition: all .3s ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: $dark-purple;\n    color: $pink;\n    cursor: pointer;\n  }\n}\n\n@mixin closeButtonStyles() {\n  align-self: flex-end;\n  padding-top: 0;\n  padding-right: 5px;\n  padding-bottom: 15px;\n  color: $purple;\n  font-size: 15px;\n  font-weight: bold;\n  @include grow;\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    color: $pink;\n  }\n}\n\n@mixin grow() {\n    transition: all .3s ease-in-out; \n  \n    &:hover,\n    &focus { \n    transform: scale(1.1); \n    }\n}\n\n@mixin shrink() {\n  transition: all .3s ease-in-out; \n\n  &:hover,\n  &focus { \n  transform: scale(0.95); \n  }\n}\n\n@mixin hover() {\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    background-color: $dark-purple;\n    color: $pink;\n  }\n}\n\n@mixin scrollbar() {\n::-webkit-scrollbar {\n  width: 15px;\n}\n\n::-webkit-scrollbar-track {\n  background: white;\n}\n\n::-webkit-scrollbar-thumb {\n  background: $yellow;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: $light-blue;\n}\n}","@import \"variables\";\n\n@mixin navStyles() {\n  min-height: 400px;\n\n  input {\n    width: 8.5rem;\n  }\n  .trip-request {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    margin: 10px;\n  }\n\n  .quote-button {\n    @include buttonStyles;\n  }\n}","@import \"variables\";\n\n@mixin tripStyles() {\n  article {\n    background-color: $purple;\n    border: $grid-border;\n    box-shadow: 4px 4px $blue, 7px 7px $light-blue;\n    color: $dark-purple;\n    font-weight: lighter;\n    font-size: 18px;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    @include shrink;\n\n    .location-image {\n      height: 100%;\n      width: 100%;\n    }\n\n    .trip-summary {\n      background-color: rgba(255, 255, 255, 0.523);\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;;\n      padding: 15px;\n      height: 80%;\n      width: 75%;\n    }\n\n    p {\n      align-self: center;\n    }\n\n    .travelers {\n      margin-bottom: 0;\n    }\n\n    .status {\n      margin-bottom: 0;\n    }\n\n    .value {\n      margin-top: 0;\n    }\n  }\n}","@import \"variables\";\n\n@mixin modalStyles() {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 30px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0,0.4);\n\n  .modal-content {\n    background-color: $darker-purple;\n    margin: 3rem auto;\n    padding: 20px;\n    border: 1px solid #888;\n    height: fit-content;\n    width: 75%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n\n    .close-quote {\n      @include closeButtonStyles;\n    }\n\n    .quote-image {\n      background-size: cover;\n      padding-top: 0;\n      padding: 1rem;\n      height: 20rem;\n    }\n\n    .estimate-display {\n      margin-top: 1rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      font-size: 1rem;\n    }\n\n    .estimated-cost {\n      display: flex;\n      justify-content: center;\n      color: $light-blue;\n    }\n\n    .request-button {\n      font-style: italic;\n      font-size: 1rem;\n      height: 5rem;\n      width: 20rem;\n      margin-top: 2rem;\n      background-color: $pink;\n      color: $darker-purple;\n      @include grow;\n      @include hover;\n\n    }\n  }\n}","@import \"variables\";\n@import \"trip_styles\";\n@import \"modal_styles\";\n\n@mixin adminDisplay() {\n  grid-row: 1 / -1;\n  grid-column: 1 / -1;\n  padding: 10px;\n  overflow-y: auto;\n  @include gridDisplay(2fr 8fr, 2fr 10fr);\n\n  .admin-header {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n    color: $light-blue;\n    display: flex;\n    justify-content: center;\n    @include headerFooterStyles;\n  }\n\n  .admin-nav {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    border: 2px solid $pink;\n    @include sideStyles;\n    @include flexDisplay(column, center, center);\n    @include navStyles;\n  }\n\n  .admin-modal {\n    @include modalStyles;\n\n    .close-approval {\n      @include closeButtonStyles;\n    }\n\n    .pending-trip {\n      @include tripStyles;\n      padding-top: 0;\n      padding: 1rem;\n      height: 20rem;\n      width: 30rem;\n      background-size: cover;\n    }\n\n    .trip-summary {\n      background-color: rgba(255, 255, 255, 0.523);\n      @include flexDisplay(column, flex-start, center);\n      height: 90%;\n\n      .destination {\n        margin-top: 0;\n      }\n\n      .travelers {\n        margin-bottom: 0;\n      }\n\n      .status {\n        margin-bottom: 0;\n      }\n    }\n\n    .approve-button {\n      @include buttonStyles;\n    }\n\n    .deny-button {\n      @include buttonStyles;\n    }\n  }\n\n  main {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    margin-left: 0.5rem;\n    grid-gap: 15px;\n    overflow-y: auto;\n    @include tripStyles;\n\n    .date {\n      margin-top: 0;\n    }\n\n    .duration {\n      margin-bottom: 0;\n    }\n  }\n}","@import 'variables';\n\n@mixin mobile() {\n  @media screen and (max-width: 800px) {\n    body {\n      height: 100vh;\n      width: calc(100vw - 20px);\n      display: grid;\n    }\n\n    .traveler-header {\n      grid-row: 1 / 2;\n      grid-column: 1 / -1;\n    }\n\n    .traveler-nav {\n      justify-content: flex-start;\n      grid-row: 2 / 3;\n      grid-column: 1 / -1;\n      min-height: 20rem;\n      overflow-y: scroll;\n    }\n\n    .traveler-main {\n      grid-row: 3 / 4;\n      grid-column: 1 / -1;\n      background: linear-gradient(to bottom, $dark-purple, $darker-purple);\n      border: $grid-border;\n      margin: 3px;\n      display: grid;\n      grid-template-columns: 1fr;\n      height: 15rem;\n      overflow-y: auto;\n      @include tripStyles;\n    }\n    .traveler-aside {\n      grid-row: 4 / 5;\n      grid-column: 1 / -1;\n    }\n    \n    .quote-image {\n      background-size: cover;\n      padding-top: 0;\n      background-size: cover;\n      width: 70vw;\n    }\n\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/apiRequests.js":
/*!****************************!*\
  !*** ./src/apiRequests.js ***!
  \****************************/
/*! exports provided: getData, postTrip, approveTrip, denyTrip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTrip", function() { return postTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveTrip", function() { return approveTrip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "denyTrip", function() { return denyTrip; });
const getData = endpoint => {
  return fetch(`http://localhost:3001/api/v1/${endpoint}`)
    .then(response => response.json())
    .catch(error => console.log('getData fetch error', error));
}

const postTrip = (newID, userID, destinationID, travelers, date, duration) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id": parseInt(`${newID}`),
    "userID": parseInt(`${userID}`),
    "destinationID": parseInt(`${destinationID}`),
    "travelers": parseInt(`${travelers}`),
    "date": `${date}`,
    "duration": parseInt(`${duration}`),
    "status": "pending",
    "suggestedActivities": []
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch("http://localhost:3001/api/v1/trips", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

const approveTrip = (tripID) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "id": parseInt(`${tripID}`),
    "status": "approved"
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  return fetch("http://localhost:3001/api/v1/updateTrip", requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

const denyTrip = (tripID) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'DELETE',
    headers: myHeaders,
    redirect: 'follow'
  };

  return fetch(`http://localhost:3001/api/v1/trips/${parseInt(tripID)}`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: loginDisplay, travelerDisplay, travelerHeader, travelerNav, travelerModal, travelerMain, travelerAside, travelerFooter, adminDisplay, adminHeader, adminModal, modalContent, adminNav, adminMain, dateInput, durationInput, numTravelersInput, destinationInput, travelerContentDisplay, adminContentDisplay, loginButton, displayTravelerTrips, displayTravelerAside, displayTravelerPage, displayQuote, hideQuote, hideRequest, constructTodaysTravelers, displayAdminNav, displayAdminModal, checkRequestInputs, displayPendingTrips, checkLoginInputs, displayDesiredElements */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginDisplay", function() { return loginDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelerDisplay", function() { return travelerDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelerHeader", function() { return travelerHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelerNav", function() { return travelerNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelerModal", function() { return travelerModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelerMain", function() { return travelerMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelerAside", function() { return travelerAside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelerFooter", function() { return travelerFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminDisplay", function() { return adminDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminHeader", function() { return adminHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminModal", function() { return adminModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalContent", function() { return modalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminNav", function() { return adminNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminMain", function() { return adminMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateInput", function() { return dateInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationInput", function() { return durationInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numTravelersInput", function() { return numTravelersInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destinationInput", function() { return destinationInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelerContentDisplay", function() { return travelerContentDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminContentDisplay", function() { return adminContentDisplay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginButton", function() { return loginButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayTravelerTrips", function() { return displayTravelerTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayTravelerAside", function() { return displayTravelerAside; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayTravelerPage", function() { return displayTravelerPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayQuote", function() { return displayQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideQuote", function() { return hideQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideRequest", function() { return hideRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constructTodaysTravelers", function() { return constructTodaysTravelers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayAdminNav", function() { return displayAdminNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayAdminModal", function() { return displayAdminModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRequestInputs", function() { return checkRequestInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayPendingTrips", function() { return displayPendingTrips; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkLoginInputs", function() { return checkLoginInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayDesiredElements", function() { return displayDesiredElements; });
// Query Selectors
const loginDisplay = document.querySelector(".login-display");
const travelerDisplay = document.querySelector(".traveler-display")
const travelerHeader = document.querySelector(".traveler-header");
const travelerNav = document.querySelector(".traveler-nav");
const travelerModal = document.querySelector(".traveler-modal");
const travelerMain = document.querySelector(".traveler-main");
const travelerAside = document.querySelector(".traveler-aside");
const travelerFooter = document.querySelector(".traveler-footer");
const adminDisplay = document.querySelector(".admin-display");
const adminHeader = document.querySelector(".admin-header");
const adminModal = document.querySelector(".admin-modal");
const modalContent = document.querySelector(".modal-content");
const adminNav = document.querySelector(".admin-nav");
const adminMain = document.querySelector(".admin-main");
const dateInput = document.querySelector(".form-date");
const durationInput = document.querySelector(".form-duration");
const numTravelersInput = document.querySelector(".form-travelers");
const destinationInput = document.querySelector(".form-destination");
const travelerContentDisplay = document.querySelector(".traveler-content-display");
const adminContentDisplay = document.querySelector(".admin-content-display");
const loginButton = document.querySelector(".login-button");


// Functions

const displayTravelerTrips = (traveler, tripsRepo, destinationsRepo) => {
  const travelerTrips = tripsRepo.filterTravelerTrips(traveler.id);
  
  travelerMain.innerHTML = '';
  travelerTrips.forEach(trip => {
    travelerMain.insertAdjacentHTML('afterbegin', `
      <article tabindex="0" class="trip" style="background-image: url(${destinationsRepo.findDestinationByID(trip.destinationID).image}" alt ="${destinationsRepo.findDestinationByID(trip.destinationID).alt}">
        <section class="trip-summary">
          <p class="detail date">${trip.date}</p>
          <p class="detail duration">${trip.duration} DAYS IN</p>
          <p class="detail destination value">${destinationsRepo.findDestinationByID(trip.destinationID).destination}</p>
          <p class="detail travelers">TRAVELERS</p>
          <p class="detail value">${trip.travelers}</p>
          <p class="detail status">STATUS</p>
          <p class="detail value">${trip.status}</p>
        </section>
      </article>
    `);
  })
}

const displayTravelerAside = (traveler, tripsRepo, destinationsRepo) => {
  const thisYear = new Date().toJSON().slice(0, 4).replace(/-/g, '/');
  const annualTotal = tripsRepo.totalAnnualTripsCost(traveler.id, thisYear, destinationsRepo);
  const pendingTotal = tripsRepo.totalPendingTripsCost(traveler.id, destinationsRepo);

  travelerAside.innerHTML = '<h1>PROFILE</h1>';
  travelerAside.insertAdjacentHTML('beforeend', `<p class="aside-element title">TOTAL SPENT IN ${thisYear}</p><p class="aside-element value">${annualTotal.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
  <p class="aside-element title">TOTAL OF PENDING TRIPS</p><p class="aside-element value">${pendingTotal.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>`);
}

const displayTravelerPage = (traveler, tripsRepo, destinationsRepo) => {
  displayTravelerTrips(traveler, tripsRepo, destinationsRepo);
  displayTravelerAside(traveler, tripsRepo, destinationsRepo);
}

const displayQuote = destinationsRepo => {
  const duration = durationInput.value;
  const travelers = numTravelersInput.value;
  const destinationID = destinationsRepo.findIDByName(destinationInput.value);
  const destination = destinationsRepo.findDestinationByID(destinationID);
  const tripCost = destinationsRepo.calcTripCost(duration, travelers, destinationID);

  travelerContentDisplay.innerHTML = '';
  travelerContentDisplay.insertAdjacentHTML("afterbegin", `<img class="quote-image" src="${destination.image}" alt="${destination.alt}">`);
  travelerContentDisplay.insertAdjacentHTML("beforeend", `<p class="estimated-cost">YOUR ESTIMATED COST IS: ${tripCost.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>`);
  travelerModal.style.display = "block";
}

const hideQuote = () => {
  dateInput.value = null;
  durationInput.value = null;
  numTravelersInput.value = null;
  destinationInput.value = null;
  travelerModal.style.display = "none";
}

const hideRequest = () => {
  adminModal.style.display = "none";
}

const constructTodaysTravelers = (travelersRepo, tripsRepo) => {
  const todaysTrips = tripsRepo.filterTripsToday("2020/06/22");
  const travelerNames = todaysTrips.map(trip => {
    const traveler = travelersRepo.checkForID(trip.userID);
    return traveler.name;
  })

  return travelerNames.forEach(name => {
    adminNav.insertAdjacentHTML('beforeend', `<p class="admin-nav-element value">${name}</p>`)
  })
}

const displayAdminNav = (travelersRepo, tripsRepo, destinationsRepo) => {
  adminNav.innerHTML = '<h1>ADMIN STATISTICS</h1>';
  const thisYear = new Date().toJSON().slice(0, 4).replace(/-/g, '/');
  //KEEPING HARD CODED DATE SINCE NO DATA FOR 2021
  const annualCommissionTotal = tripsRepo.totalAnnualCommission(2020, destinationsRepo);
  
  adminNav.insertAdjacentHTML('beforeend', `<p class="admin-nav-element title">EARNINGS IN ${thisYear}</p><p class="admin-nav-element value">${annualCommissionTotal.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
  <p class="admin-nav-element title">WHO'S TRAVELING TODAY?</p>`);
  constructTodaysTravelers(travelersRepo, tripsRepo);
}

const displayAdminModal = (event, destinationsRepo, tripsRepo) => {
  const tripID = event.target.closest("section").id;
  const trip = tripsRepo.findTripByTripID(tripID);
  const selectedTripHTML = `
  <article tabindex="0" class="pending-trip" style="background-image: url(${destinationsRepo.findDestinationByID(trip.destinationID).image}" alt ="${destinationsRepo.findDestinationByID(trip.destinationID).alt}">
    <section class="trip-summary">
      <p class="detail date">${trip.date}</p>
      <p class="detail duration">${trip.duration} DAYS IN</p>
      <p class="detail destination">${destinationsRepo.findDestinationByID(trip.destinationID).destination}</p>
      <p class="detail travelers">TRAVELERS</p><p>${trip.travelers}</p>
      <p class="detail status">STATUS</p><p>${trip.status}</p>
    </section>
  </article>`

  adminContentDisplay.innerHTML = '';
  adminContentDisplay.insertAdjacentHTML("afterbegin", selectedTripHTML);
  modalContent.id = `${tripID}`
  adminModal.style.display = "block";
}

const checkRequestInputs = (destinationsRepo) => {
  const date = dateInput.value;
  const duration = durationInput.value;
  const travelers = numTravelersInput.value;
  const destinationID = destinationsRepo.findIDByName(destinationInput.value);

  if (date === '' || 1 > duration || 1 > travelers || destinationID === undefined) {
    return false;
  } else {
    return true;
  }
}

const displayPendingTrips = (tripsRepo, destinationsRepo) => {
  const pendingTrips = tripsRepo.filterPendingTrips();
  adminMain.innerHTML = '';

  pendingTrips.forEach(trip => {
    adminMain.insertAdjacentHTML('afterbegin', `
      <article tabindex="0" class="trip" style="background-image: url(${destinationsRepo.findDestinationByID(trip.destinationID).image}" alt ="${destinationsRepo.findDestinationByID(trip.destinationID).alt}">
        <section class="trip-summary" id="${trip.id}">
        <p class="detail travler">TRAVELER ID: ${trip.userID}</p>
          <p class="detail date">${trip.date}</p>
          <p class="detail duration">${trip.duration} DAYS IN</p>
          <p class="detail destination">${destinationsRepo.findDestinationByID(trip.destinationID).destination}</p>
          <p class="detail travelers">TRAVELERS: ${trip.travelers}</p>
          <p class="detail status">STATUS: ${trip.status}</p>
        </section>
      </article>
    `);
  })
}

const checkLoginInputs = (username, password, travelersRepo) => {
  const twoChar = parseInt(username.slice(-2));
  const oneChar = parseInt(username.slice(-1));
  
  if (travelersRepo.checkForID(twoChar) && password === 'travel2021') {
    return travelersRepo.checkForID(twoChar);
  } else if (travelersRepo.checkForID(oneChar) && password === 'travel2021') {
    return travelersRepo.checkForID(oneChar);
  } else {
    alert("No account found with that information. Try again.");
  }
}

// REFACTOR THIS TO ADD A CLASS OF DISPLAY: HIDDEN???
const displayDesiredElements = display => {
  if (display === 'login') {
    travelerDisplay.classList.add("hidden");
    adminDisplay.classList.add("hidden");
    loginDisplay.classList.remove = "hidden";
  } else if (display === 'traveler') {
    travelerDisplay.classList.remove("hidden");
    adminDisplay.classList.add("hidden");
    loginDisplay.classList.add("hidden");
  } else if (display === 'admin') {
    travelerDisplay.classList.add("hidden");
    adminDisplay.classList.remove("hidden");
    loginDisplay.classList.add("hidden");
  }
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _jsClasses_traveler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsClasses/traveler */ "./src/jsClasses/traveler.js");
/* harmony import */ var _jsClasses_travelersRepo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsClasses/travelersRepo */ "./src/jsClasses/travelersRepo.js");
/* harmony import */ var _jsClasses_destinationsRepo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsClasses/destinationsRepo */ "./src/jsClasses/destinationsRepo.js");
/* harmony import */ var _jsClasses_tripsRepo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jsClasses/tripsRepo */ "./src/jsClasses/tripsRepo.js");
/* harmony import */ var _jsClasses_admin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jsClasses/admin */ "./src/jsClasses/admin.js");
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./domUpdates */ "./src/domUpdates.js");
/* harmony import */ var _apiRequests__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apiRequests */ "./src/apiRequests.js");
// STYLE IMPORTS


// IMAGE IMPORTS
// import './images/turing-logo.png'
console.log('This is the JavaScript entry file - your code begins here.');

// QUERY SELECTORS
const quoteButton = document.querySelector('.quote-button');
const closeQuoteButton = document.querySelector('.close-quote');
const closeApprovalButton = document.querySelector('.close-approval');
const requestButton = document.querySelector('.request-button');
const approveButton = document.querySelector('.approve-button');
const denyButton = document.querySelector('.deny-button');
const dateInput = document.querySelector(".form-date");
const durationInput = document.querySelector(".form-duration");
const numTravelersInput = document.querySelector(".form-travelers");
const destinationInput = document.querySelector(".form-destination");
const usernameInput = document.querySelector(".form-username");
const passwordInput = document.querySelector(".form-password");
const loginButton = document.querySelector(".login-button");
const modalContent = document.querySelector(".modal-content");

// JS IMPORTS








// Global Variables
let travelersRepo;
let tripsRepo;
let destinationsRepo;
let traveler;
let travelerID;
const admin = new _jsClasses_admin__WEBPACK_IMPORTED_MODULE_5__["default"]();

// Initial Data and DOM Population
const populateTravelerMain = () => {
  Promise.all([getTravelerData(travelerID),
    getTripsData(),
    getDestinationsData()
  ])
    .then(response => {
      traveler = new _jsClasses_traveler__WEBPACK_IMPORTED_MODULE_1__["default"](response[0]);
      tripsRepo = new _jsClasses_tripsRepo__WEBPACK_IMPORTED_MODULE_4__["default"](response[1]);
      destinationsRepo = new _jsClasses_destinationsRepo__WEBPACK_IMPORTED_MODULE_3__["default"](response[2]);
    })
    .then( () => {
      Object(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["displayTravelerTrips"])(traveler, tripsRepo, destinationsRepo);
      Object(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["displayTravelerAside"])(traveler, tripsRepo, destinationsRepo);
    })
}

const populateAdminMain = () => {
  Promise.all([getTripsData(),
    getDestinationsData()
  ])
    .then(response => {
      tripsRepo = new _jsClasses_tripsRepo__WEBPACK_IMPORTED_MODULE_4__["default"](response[0]);
      destinationsRepo = new _jsClasses_destinationsRepo__WEBPACK_IMPORTED_MODULE_3__["default"](response[1]);
    })
    .then( () => {
      Object(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["displayAdminNav"])(travelersRepo, tripsRepo, destinationsRepo);
      Object(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["displayPendingTrips"])(tripsRepo, destinationsRepo);
    })
}

const getTravelerData = travelerID => {
  return Object(_apiRequests__WEBPACK_IMPORTED_MODULE_7__["getData"])(`travelers/${travelerID}`)
}

const getTravelersData = () => {
  return Object(_apiRequests__WEBPACK_IMPORTED_MODULE_7__["getData"])('travelers')
    .then(response => {
      travelersRepo = new _jsClasses_travelersRepo__WEBPACK_IMPORTED_MODULE_2__["default"](response);
    })
}

const getTripsData = () => {
  return Object(_apiRequests__WEBPACK_IMPORTED_MODULE_7__["getData"])('trips')
}

const getDestinationsData = () => {
  return Object(_apiRequests__WEBPACK_IMPORTED_MODULE_7__["getData"])('destinations')
}

// Function Declarations
const createQuote = () => {
  if (!Object(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["checkRequestInputs"])(destinationsRepo)) {
    alert('Invalid input, check your form.')
  } else {
    Object(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["displayQuote"])(destinationsRepo);
  }
}

const closeModal = () => {
  Object(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["hideQuote"])();
  Object(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["hideRequest"])();
}

const submitTripRequest = () => {
  const date = dateInput.value.toString();
  const formattedDate = date.replaceAll("-", "/");
  const duration = durationInput.value;
  const travelers = numTravelersInput.value;
  const destinationID = destinationsRepo.findIDByName(destinationInput.value);
  Promise.resolve(Object(_apiRequests__WEBPACK_IMPORTED_MODULE_7__["postTrip"])(Date.now(), traveler.id, destinationID, travelers, formattedDate, duration))
    .then(populateTravelerMain())
    .then(Object(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["hideQuote"])())
}

const displayRequest = event => {
  Object(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["displayAdminModal"])(event, destinationsRepo, tripsRepo);
}

const approveRequest = () => {
  const tripID = modalContent.id;

  Promise.resolve(Object(_apiRequests__WEBPACK_IMPORTED_MODULE_7__["approveTrip"])(tripID))
    .then(populateAdminMain())
    .then(Object(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["hideRequest"])())
}

const denyRequest = () => {
  const tripID = modalContent.id;

  Promise.resolve(Object(_apiRequests__WEBPACK_IMPORTED_MODULE_7__["denyTrip"])(tripID))
    .then(populateAdminMain())
    .then(Object(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["hideRequest"])())
}

const login = () => {
  const username = usernameInput.value;
  const password = passwordInput.value;

  if (admin.checkCredentials(username, password)) {
    populateAdminMain();
    Object(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["displayDesiredElements"])('admin');
  } else {
    travelerID = Object(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["checkLoginInputs"])(username, password, travelersRepo).id;
    populateTravelerMain();
    Object(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["displayDesiredElements"])('traveler');
  }
}

const initializePage = () => {
  Promise.resolve(getTravelersData())
    .then(
      Object(_domUpdates__WEBPACK_IMPORTED_MODULE_6__["displayDesiredElements"])('login')
    )
}

// Event Listeners
document.addEventListener("load", initializePage());
quoteButton.addEventListener("click", createQuote);
closeQuoteButton.addEventListener("click", closeModal);
closeApprovalButton.addEventListener("click", closeModal);
requestButton.addEventListener("click", submitTripRequest);
loginButton.addEventListener("click", login);
_domUpdates__WEBPACK_IMPORTED_MODULE_6__["adminMain"].addEventListener("click", displayRequest);
approveButton.addEventListener("click", approveRequest);
denyButton.addEventListener("click", denyRequest);

/***/ }),

/***/ "./src/jsClasses/admin.js":
/*!********************************!*\
  !*** ./src/jsClasses/admin.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Traveler {
  constructor() {
    this.username = "agency";
    this.password = "travel2021";
  }

  checkCredentials(username, password) {
    if (username === this.username && password === this.password) {
      return true;
    } else {
      return false;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);

/***/ }),

/***/ "./src/jsClasses/destinationsRepo.js":
/*!*******************************************!*\
  !*** ./src/jsClasses/destinationsRepo.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class DestinationsRepo {
  constructor(data) {
    this.allDestinations = data.destinations;
  }

  findDestinationByID(destinationID) {
    return this.allDestinations.find(destination => destination.id === destinationID);
  }

  calcTripCost(duration, travelers, destinationID) {
    const destination = this.findDestinationByID(destinationID);
    const totalWithCommission = ((destination.estimatedLodgingCostPerDay * duration) + (destination.estimatedFlightCostPerPerson * travelers)) * 1.1;

    return parseInt(totalWithCommission.toFixed(2));
  }

  findIDByName(name) {
    const desiredDestination = this.allDestinations.find(destination => destination.destination.toLowerCase().includes(name.toLowerCase()));
    
    if (desiredDestination === undefined) {
      return undefined;
    } else {
      return desiredDestination.id;
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (DestinationsRepo);

/***/ }),

/***/ "./src/jsClasses/traveler.js":
/*!***********************************!*\
  !*** ./src/jsClasses/traveler.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Traveler {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.travelerType = user.travelerType;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);

/***/ }),

/***/ "./src/jsClasses/travelersRepo.js":
/*!****************************************!*\
  !*** ./src/jsClasses/travelersRepo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class TravelersRepo {
  constructor(data) {
    this.allTravelers = data.travelers;
  }

  checkForID(username) {
    return this.allTravelers.find(traveler => traveler.id === username);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (TravelersRepo);

/***/ }),

/***/ "./src/jsClasses/tripsRepo.js":
/*!************************************!*\
  !*** ./src/jsClasses/tripsRepo.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class TripsRepo {
  constructor(tripsData) {
    this.allTrips = tripsData.trips;
  }

  filterTravelerTrips(travelerID) {
    return this.allTrips.filter(trip => trip.userID === travelerID);
  }

  filterPendingTrips() {
    return this.allTrips.filter(trip => trip.status === "pending");
  }

  findTripByTripID(tripID) {
    return this.allTrips.find(trip => trip.id === parseInt(tripID));
  }

  totalAnnualTripsCost(travelerID, year, destinationsRepo) {
    const annualTrips = this.allTrips.filter(trip => trip.userID === travelerID && trip.date.includes(year));

    return annualTrips.reduce((totalCost, trip) => {
      const tripCost = destinationsRepo.calcTripCost(trip.duration, trip.travelers, trip.destinationID);
      totalCost += tripCost;
      return totalCost;
    }, 0)
  }

  totalPendingTripsCost(travelerID, destinationsRepo) {
    const pendingTrips = this.allTrips.filter(trip => trip.userID === travelerID && trip.status === "pending");

    return pendingTrips.reduce((totalCost, trip) => {
      const tripCost = destinationsRepo.calcTripCost(trip.duration, trip.travelers, trip.destinationID);
      totalCost += tripCost;
      return totalCost;
    }, 0) 
  }

  totalAnnualCommission(year, destinationsRepo) {
    const annualAdminTrips = this.allTrips.filter(trip => trip.date.includes(year) && trip.status === "approved");

    return annualAdminTrips.reduce((totalCost, trip) => {
      const tripCost = destinationsRepo.calcTripCost(trip.duration, trip.travelers, trip.destinationID);
      totalCost += tripCost;
      return totalCost * 0.1;
    }, 0)
  }

  filterTripsToday(date) {
    return this.allTrips.filter(trip => trip.date === date);
  }
} 

/* harmony default export */ __webpack_exports__["default"] = (TripsRepo);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaVJlcXVlc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzPzExMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qc0NsYXNzZXMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzQ2xhc3Nlcy9kZXN0aW5hdGlvbnNSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9qc0NsYXNzZXMvdHJhdmVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzQ2xhc3Nlcy90cmF2ZWxlcnNSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9qc0NsYXNzZXMvdHJpcHNSZXBvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFF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QVM7QUFDVDtBQUNBLGtEOzs7Ozs7Ozs7Ozs7QUN2TEE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx1RUFBUSxFOzs7Ozs7Ozs7Ozs7QUNmdkI7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVlLCtFQUFnQixFOzs7Ozs7Ozs7Ozs7QUMzQi9CO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsdUVBQVEsRTs7Ozs7Ozs7Ozs7O0FDUnZCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsNEVBQWEsRTs7Ozs7Ozs7Ozs7O0FDVjVCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQzs7QUFFZSx3RUFBUyxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB1c2luZyBTYXNzLCBvdGhlcndpc2UgcGxhaW4gQ1NTIHdvcmtzIHRvbyovXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgOGZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDlmciAxZnI7XFxuICBncmlkLWdhcDogMTBweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIwcHgpO1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMHB4KTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICMwOTA3MWEsICMxOTE0NDkpO1xcbiAgZm9udC1mYW1pbHk6IEJsZW5kZXJQcm9Cb2xkLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjMTkxNDQ5OyB9XFxuXFxuLmxvZ2luLWRpc3BsYXkge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYm9yZGVyOiA1cHggc29saWQgIzE4RjVGRTtcXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4ICNGOUYzMDAgaW5zZXQ7XFxuICBiYWNrZ3JvdW5kOiAjQjA1Q0I0O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0OyB9XFxuICAubG9naW4tZGlzcGxheTpob3ZlciwgLmxvZ2luLWRpc3BsYXlmb2N1cyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcbiAgLmxvZ2luLWRpc3BsYXkgLmxvZ2luLWJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHdpZHRoOiA4cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUYzMDA7XFxuICAgIGNvbG9yOiAjM0QwRTUzO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0OyB9XFxuICAgIC5sb2dpbi1kaXNwbGF5IC5sb2dpbi1idXR0b246aG92ZXIsIC5sb2dpbi1kaXNwbGF5IC5sb2dpbi1idXR0b246Zm9jdXMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDBFNTM7XFxuICAgICAgY29sb3I6ICNENjEyODk7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLnRyYXZlbGVyLWRpc3BsYXkge1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgOGZyIDJmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDlmciAxZnI7IH1cXG5cXG4udHJhdmVsZXItaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjM0QwRTUzLCAjM0QwRTUzLCAjMTkxNDQ5KTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICNENjEyODk7XFxuICBtYXJnaW46IDNweDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCAjRjlGMzAwO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLnRyYXZlbGVyLWhlYWRlciBoMSB7XFxuICAgIGNvbG9yOiAjMThGNUZFOyB9XFxuXFxuLnRyYXZlbGVyLW5hdiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjQjA1Q0I0LCAjRDYxMjg5LCAjMThGNUZFLCAjMkI3RkI1KTtcXG4gIGJvcmRlcjogNXB4IHNvbGlkICNENjEyODk7XFxuICBtYXJnaW46IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4OyB9XFxuICAudHJhdmVsZXItbmF2IGlucHV0IHtcXG4gICAgd2lkdGg6IDguNXJlbTsgfVxcbiAgLnRyYXZlbGVyLW5hdiAudHJpcC1yZXF1ZXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDsgfVxcbiAgLnRyYXZlbGVyLW5hdiAucXVvdGUtYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjMwMDtcXG4gICAgY29sb3I6ICMzRDBFNTM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7IH1cXG4gICAgLnRyYXZlbGVyLW5hdiAucXVvdGUtYnV0dG9uOmhvdmVyLCAudHJhdmVsZXItbmF2IC5xdW90ZS1idXR0b246Zm9jdXMge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDBFNTM7XFxuICAgICAgY29sb3I6ICNENjEyODk7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAudHJhdmVsZXItbmF2IGxhYmVsIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTsgfVxcblxcbi50cmF2ZWxlci1tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzRDBFNTMsICMxOTE0NDkpO1xcbiAgYm9yZGVyOiA1cHggc29saWQgI0Q2MTI4OTtcXG4gIG1hcmdpbjogM3B4O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgZ3JpZC1nYXA6IDE1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bzsgfVxcbiAgLnRyYXZlbGVyLW1haW4gYXJ0aWNsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCMDVDQjQ7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNENjEyODk7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggIzJCN0ZCNSwgN3B4IDdweCAjMThGNUZFO1xcbiAgICBjb2xvcjogIzNEMEU1MztcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7IH1cXG4gICAgLnRyYXZlbGVyLW1haW4gYXJ0aWNsZTpob3ZlciwgLnRyYXZlbGVyLW1haW4gYXJ0aWNsZWZvY3VzIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XFxuICAgIC50cmF2ZWxlci1tYWluIGFydGljbGUgLmxvY2F0aW9uLWltYWdlIHtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgLnRyYXZlbGVyLW1haW4gYXJ0aWNsZSAudHJpcC1zdW1tYXJ5IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTIzKTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgIGhlaWdodDogODAlO1xcbiAgICAgIHdpZHRoOiA3NSU7IH1cXG4gICAgLnRyYXZlbGVyLW1haW4gYXJ0aWNsZSBwIHtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cXG4gICAgLnRyYXZlbGVyLW1haW4gYXJ0aWNsZSAudHJhdmVsZXJzIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuICAgIC50cmF2ZWxlci1tYWluIGFydGljbGUgLnN0YXR1cyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcbiAgICAudHJhdmVsZXItbWFpbiBhcnRpY2xlIC52YWx1ZSB7XFxuICAgICAgbWFyZ2luLXRvcDogMDsgfVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDE1cHg7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlOyB9XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiAjRjlGMzAwOyB9XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAjMThGNUZFOyB9XFxuXFxuLnRyYXZlbGVyLWFzaWRlIHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNCMDVDQjQsICNENjEyODksICMxOEY1RkUsICMyQjdGQjUpO1xcbiAgYm9yZGVyOiA1cHggc29saWQgI0Q2MTI4OTtcXG4gIG1hcmdpbjogM3B4OyB9XFxuICAudHJhdmVsZXItYXNpZGUgLnRpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtOyB9XFxuICAudHJhdmVsZXItYXNpZGUgLnZhbHVlIHtcXG4gICAgbWFyZ2luLXRvcDogMDsgfVxcblxcbi50cmF2ZWxlci1mb290ZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzRDBFNTMsICMzRDBFNTMsICMxOTE0NDkpO1xcbiAgYm9yZGVyOiA1cHggc29saWQgI0Q2MTI4OTtcXG4gIG1hcmdpbjogM3B4OyB9XFxuXFxuLnRyYXZlbGVyLW1vZGFsIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuICAudHJhdmVsZXItbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkxNDQ5O1xcbiAgICBtYXJnaW46IDNyZW0gYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgIC50cmF2ZWxlci1tb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2UtcXVvdGUge1xcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gICAgICBjb2xvcjogI0IwNUNCNDtcXG4gICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDsgfVxcbiAgICAgIC50cmF2ZWxlci1tb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2UtcXVvdGU6aG92ZXIsIC50cmF2ZWxlci1tb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2UtcXVvdGVmb2N1cyB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cXG4gICAgICAudHJhdmVsZXItbW9kYWwgLm1vZGFsLWNvbnRlbnQgLmNsb3NlLXF1b3RlOmhvdmVyLCAudHJhdmVsZXItbW9kYWwgLm1vZGFsLWNvbnRlbnQgLmNsb3NlLXF1b3RlOmZvY3VzIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGNvbG9yOiAjRDYxMjg5OyB9XFxuICAgIC50cmF2ZWxlci1tb2RhbCAubW9kYWwtY29udGVudCAucXVvdGUtaW1hZ2Uge1xcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgcGFkZGluZy10b3A6IDA7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBoZWlnaHQ6IDIwcmVtOyB9XFxuICAgIC50cmF2ZWxlci1tb2RhbCAubW9kYWwtY29udGVudCAuZXN0aW1hdGUtZGlzcGxheSB7XFxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDFyZW07IH1cXG4gICAgLnRyYXZlbGVyLW1vZGFsIC5tb2RhbC1jb250ZW50IC5lc3RpbWF0ZWQtY29zdCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBjb2xvcjogIzE4RjVGRTsgfVxcbiAgICAudHJhdmVsZXItbW9kYWwgLm1vZGFsLWNvbnRlbnQgLnJlcXVlc3QtYnV0dG9uIHtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgIGhlaWdodDogNXJlbTtcXG4gICAgICB3aWR0aDogMjByZW07XFxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDYxMjg5O1xcbiAgICAgIGNvbG9yOiAjMTkxNDQ5O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7IH1cXG4gICAgICAudHJhdmVsZXItbW9kYWwgLm1vZGFsLWNvbnRlbnQgLnJlcXVlc3QtYnV0dG9uOmhvdmVyLCAudHJhdmVsZXItbW9kYWwgLm1vZGFsLWNvbnRlbnQgLnJlcXVlc3QtYnV0dG9uZm9jdXMge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICAgICAgLnRyYXZlbGVyLW1vZGFsIC5tb2RhbC1jb250ZW50IC5yZXF1ZXN0LWJ1dHRvbjpob3ZlciwgLnRyYXZlbGVyLW1vZGFsIC5tb2RhbC1jb250ZW50IC5yZXF1ZXN0LWJ1dHRvbjpmb2N1cyB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0QwRTUzO1xcbiAgICAgICAgY29sb3I6ICNENjEyODk7IH1cXG5cXG4uYWRtaW4tZGlzcGxheSB7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDhmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDEwZnI7IH1cXG4gIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGNvbG9yOiAjMThGNUZFO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzNEMEU1MywgIzNEMEU1MywgIzE5MTQ0OSk7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNENjEyODk7XFxuICAgIG1hcmdpbjogM3B4OyB9XFxuICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbmF2IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNENjEyODk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNCMDVDQjQsICNENjEyODksICMxOEY1RkUsICMyQjdGQjUpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjRDYxMjg5O1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4OyB9XFxuICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1uYXYgaW5wdXQge1xcbiAgICAgIHdpZHRoOiA4LjVyZW07IH1cXG4gICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW5hdiAudHJpcC1yZXF1ZXN0IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBtYXJnaW46IDEwcHg7IH1cXG4gICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW5hdiAucXVvdGUtYnV0dG9uIHtcXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAgIHdpZHRoOiA4cmVtO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGMzAwO1xcbiAgICAgIGNvbG9yOiAjM0QwRTUzO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDsgfVxcbiAgICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1uYXYgLnF1b3RlLWJ1dHRvbjpob3ZlciwgLmFkbWluLWRpc3BsYXkgLmFkbWluLW5hdiAucXVvdGUtYnV0dG9uOmZvY3VzIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDBFNTM7XFxuICAgICAgICBjb2xvcjogI0Q2MTI4OTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTsgfVxcbiAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE0NDk7XFxuICAgICAgbWFyZ2luOiAzcmVtIGF1dG87XFxuICAgICAgcGFkZGluZzogMjBweDtcXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICAgICAgd2lkdGg6IDc1JTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLm1vZGFsLWNvbnRlbnQgLmNsb3NlLXF1b3RlIHtcXG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gICAgICAgIGNvbG9yOiAjQjA1Q0I0O1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLm1vZGFsLWNvbnRlbnQgLmNsb3NlLXF1b3RlOmhvdmVyLCAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLm1vZGFsLWNvbnRlbnQgLmNsb3NlLXF1b3RlZm9jdXMge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cXG4gICAgICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2UtcXVvdGU6aG92ZXIsIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2UtcXVvdGU6Zm9jdXMge1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIGNvbG9yOiAjRDYxMjg5OyB9XFxuICAgICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5tb2RhbC1jb250ZW50IC5xdW90ZS1pbWFnZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgICAgcGFkZGluZy10b3A6IDA7XFxuICAgICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgICAgaGVpZ2h0OiAyMHJlbTsgfVxcbiAgICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAubW9kYWwtY29udGVudCAuZXN0aW1hdGUtZGlzcGxheSB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07IH1cXG4gICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLm1vZGFsLWNvbnRlbnQgLmVzdGltYXRlZC1jb3N0IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGNvbG9yOiAjMThGNUZFOyB9XFxuICAgICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5tb2RhbC1jb250ZW50IC5yZXF1ZXN0LWJ1dHRvbiB7XFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgICBoZWlnaHQ6IDVyZW07XFxuICAgICAgICB3aWR0aDogMjByZW07XFxuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Q2MTI4OTtcXG4gICAgICAgIGNvbG9yOiAjMTkxNDQ5O1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDsgfVxcbiAgICAgICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5tb2RhbC1jb250ZW50IC5yZXF1ZXN0LWJ1dHRvbjpob3ZlciwgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5tb2RhbC1jb250ZW50IC5yZXF1ZXN0LWJ1dHRvbmZvY3VzIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICAgICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLm1vZGFsLWNvbnRlbnQgLnJlcXVlc3QtYnV0dG9uOmhvdmVyLCAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLm1vZGFsLWNvbnRlbnQgLnJlcXVlc3QtYnV0dG9uOmZvY3VzIHtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0QwRTUzO1xcbiAgICAgICAgICBjb2xvcjogI0Q2MTI4OTsgfVxcbiAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLmNsb3NlLWFwcHJvdmFsIHtcXG4gICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICAgICAgY29sb3I6ICNCMDVDQjQ7XFxuICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7IH1cXG4gICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLmNsb3NlLWFwcHJvdmFsOmhvdmVyLCAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLmNsb3NlLWFwcHJvdmFsZm9jdXMge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICAgICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5jbG9zZS1hcHByb3ZhbDpob3ZlciwgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5jbG9zZS1hcHByb3ZhbDpmb2N1cyB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBjb2xvcjogI0Q2MTI4OTsgfVxcbiAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLnBlbmRpbmctdHJpcCB7XFxuICAgICAgcGFkZGluZy10b3A6IDA7XFxuICAgICAgcGFkZGluZzogMXJlbTtcXG4gICAgICBoZWlnaHQ6IDIwcmVtO1xcbiAgICAgIHdpZHRoOiAzMHJlbTtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XFxuICAgICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5wZW5kaW5nLXRyaXAgYXJ0aWNsZSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjA1Q0I0O1xcbiAgICAgICAgYm9yZGVyOiA1cHggc29saWQgI0Q2MTI4OTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggIzJCN0ZCNSwgN3B4IDdweCAjMThGNUZFO1xcbiAgICAgICAgY29sb3I6ICMzRDBFNTM7XFxuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7IH1cXG4gICAgICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAucGVuZGluZy10cmlwIGFydGljbGU6aG92ZXIsIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAucGVuZGluZy10cmlwIGFydGljbGVmb2N1cyB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cXG4gICAgICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAucGVuZGluZy10cmlwIGFydGljbGUgLmxvY2F0aW9uLWltYWdlIHtcXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICB3aWR0aDogMTAwJTsgfVxcbiAgICAgICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5wZW5kaW5nLXRyaXAgYXJ0aWNsZSAudHJpcC1zdW1tYXJ5IHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUyMyk7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICAgICAgd2lkdGg6IDc1JTsgfVxcbiAgICAgICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5wZW5kaW5nLXRyaXAgYXJ0aWNsZSBwIHtcXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuICAgICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLnBlbmRpbmctdHJpcCBhcnRpY2xlIC50cmF2ZWxlcnMge1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuICAgICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLnBlbmRpbmctdHJpcCBhcnRpY2xlIC5zdGF0dXMge1xcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuICAgICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLnBlbmRpbmctdHJpcCBhcnRpY2xlIC52YWx1ZSB7XFxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7IH1cXG4gICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC50cmlwLXN1bW1hcnkge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MjMpO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBoZWlnaHQ6IDkwJTsgfVxcbiAgICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAudHJpcC1zdW1tYXJ5IC5kZXN0aW5hdGlvbiB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwOyB9XFxuICAgICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC50cmlwLXN1bW1hcnkgLnRyYXZlbGVycyB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuICAgICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC50cmlwLXN1bW1hcnkgLnN0YXR1cyB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAuYXBwcm92ZS1idXR0b24ge1xcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgd2lkdGg6IDhyZW07XFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUYzMDA7XFxuICAgICAgY29sb3I6ICMzRDBFNTM7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5hcHByb3ZlLWJ1dHRvbjpob3ZlciwgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5hcHByb3ZlLWJ1dHRvbjpmb2N1cyB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0QwRTUzO1xcbiAgICAgICAgY29sb3I6ICNENjEyODk7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5kZW55LWJ1dHRvbiB7XFxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgICB3aWR0aDogOHJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjMwMDtcXG4gICAgICBjb2xvcjogIzNEMEU1MztcXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7IH1cXG4gICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLmRlbnktYnV0dG9uOmhvdmVyLCAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLmRlbnktYnV0dG9uOmZvY3VzIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDBFNTM7XFxuICAgICAgICBjb2xvcjogI0Q2MTI4OTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLmFkbWluLWRpc3BsYXkgbWFpbiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gICAgZ3JpZC1nYXA6IDE1cHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87IH1cXG4gICAgLmFkbWluLWRpc3BsYXkgbWFpbiBhcnRpY2xlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjA1Q0I0O1xcbiAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNENjEyODk7XFxuICAgICAgYm94LXNoYWRvdzogNHB4IDRweCAjMkI3RkI1LCA3cHggN3B4ICMxOEY1RkU7XFxuICAgICAgY29sb3I6ICMzRDBFNTM7XFxuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDsgfVxcbiAgICAgIC5hZG1pbi1kaXNwbGF5IG1haW4gYXJ0aWNsZTpob3ZlciwgLmFkbWluLWRpc3BsYXkgbWFpbiBhcnRpY2xlZm9jdXMge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcbiAgICAgIC5hZG1pbi1kaXNwbGF5IG1haW4gYXJ0aWNsZSAubG9jYXRpb24taW1hZ2Uge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgICAuYWRtaW4tZGlzcGxheSBtYWluIGFydGljbGUgLnRyaXAtc3VtbWFyeSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTIzKTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogMTVweDtcXG4gICAgICAgIGhlaWdodDogODAlO1xcbiAgICAgICAgd2lkdGg6IDc1JTsgfVxcbiAgICAgIC5hZG1pbi1kaXNwbGF5IG1haW4gYXJ0aWNsZSBwIHtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcbiAgICAgIC5hZG1pbi1kaXNwbGF5IG1haW4gYXJ0aWNsZSAudHJhdmVsZXJzIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cXG4gICAgICAuYWRtaW4tZGlzcGxheSBtYWluIGFydGljbGUgLnN0YXR1cyB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuICAgICAgLmFkbWluLWRpc3BsYXkgbWFpbiBhcnRpY2xlIC52YWx1ZSB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwOyB9XFxuICAgIC5hZG1pbi1kaXNwbGF5IG1haW4gLmRhdGUge1xcbiAgICAgIG1hcmdpbi10b3A6IDA7IH1cXG4gICAgLmFkbWluLWRpc3BsYXkgbWFpbiAuZHVyYXRpb24ge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgYm9keSB7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjBweCk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7IH1cXG4gIC50cmF2ZWxlci1oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7IH1cXG4gIC50cmF2ZWxlci1uYXYge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgbWluLWhlaWdodDogMjByZW07XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgfVxcbiAgLnRyYXZlbGVyLW1haW4ge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzRDBFNTMsICMxOTE0NDkpO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjRDYxMjg5O1xcbiAgICBtYXJnaW46IDNweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGhlaWdodDogMTVyZW07XFxuICAgIG92ZXJmbG93LXk6IGF1dG87IH1cXG4gICAgLnRyYXZlbGVyLW1haW4gYXJ0aWNsZSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0IwNUNCNDtcXG4gICAgICBib3JkZXI6IDVweCBzb2xpZCAjRDYxMjg5O1xcbiAgICAgIGJveC1zaGFkb3c6IDRweCA0cHggIzJCN0ZCNSwgN3B4IDdweCAjMThGNUZFO1xcbiAgICAgIGNvbG9yOiAjM0QwRTUzO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7IH1cXG4gICAgICAudHJhdmVsZXItbWFpbiBhcnRpY2xlOmhvdmVyLCAudHJhdmVsZXItbWFpbiBhcnRpY2xlZm9jdXMge1xcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcbiAgICAgIC50cmF2ZWxlci1tYWluIGFydGljbGUgLmxvY2F0aW9uLWltYWdlIHtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgICAgLnRyYXZlbGVyLW1haW4gYXJ0aWNsZSAudHJpcC1zdW1tYXJ5IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MjMpO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgICAgaGVpZ2h0OiA4MCU7XFxuICAgICAgICB3aWR0aDogNzUlOyB9XFxuICAgICAgLnRyYXZlbGVyLW1haW4gYXJ0aWNsZSBwIHtcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcbiAgICAgIC50cmF2ZWxlci1tYWluIGFydGljbGUgLnRyYXZlbGVycyB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuICAgICAgLnRyYXZlbGVyLW1haW4gYXJ0aWNsZSAuc3RhdHVzIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cXG4gICAgICAudHJhdmVsZXItbWFpbiBhcnRpY2xlIC52YWx1ZSB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwOyB9XFxuICAudHJhdmVsZXItYXNpZGUge1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7IH1cXG4gIC5xdW90ZS1pbWFnZSB7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogNzB2dzsgfSB9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9iYXNlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19uYXZfc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX3RyaXBfc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX21vZGFsX3N0eWxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19hZG1pbl9kaXNwbGF5LnNjc3NcIixc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b0I7TUFDcEIsZUFBZTtNQUNmLHNCQUFzQjtNQUN0QixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLHVCQUF1QjtNQUN2QixtQkFBbUI7TUZvRXJCLCtCQUErQixFQUFBO01BRS9CO1FBRUEsc0JBQXNCLEVBQUE7TUVwRXBCO1FBQ0UsWUFBWTtRQUNaLFdBQVcsRUFBQTtNQUdiO1FBQ0UsNENBQTRDO1FBQzVDLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsV0FBVztRQUNYLFVBQVUsRUFBQTtNQUdaO1FBQ0Usa0JBQWtCLEVBQUE7TUFHcEI7UUFDRSxnQkFBZ0IsRUFBQTtNQUdsQjtRQUNFLGdCQUFnQixFQUFBO01BR2xCO1FBQ0UsYUFBYSxFQUFBO0VHWmY7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7RUFHckI7SUFDRSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixXQUFXLEVBQUEsRUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBUaGlzIGlzIGFuIGV4YW1wbGUgb2YgdXNpbmcgU2Fzcywgb3RoZXJ3aXNlIHBsYWluIENTUyB3b3JrcyB0b28qL1xcbkBpbXBvcnQgXFxcInZhcmlhYmxlc1xcXCI7XFxuQGltcG9ydCBcXFwibmF2X3N0eWxlc1xcXCI7XFxuQGltcG9ydCBcXFwidHJpcF9zdHlsZXNcXFwiO1xcbkBpbXBvcnQgXFxcIm1vZGFsX3N0eWxlc1xcXCI7XFxuQGltcG9ydCBcXFwiYWRtaW5fZGlzcGxheVxcXCI7XFxuQGltcG9ydCBcXFwibWVkaWFfcXVlcmllc1xcXCI7XFxuXFxuYm9keSB7XFxuICBAaW5jbHVkZSBncmlkRGlzcGxheSgyZnIgOGZyIDJmciwgMmZyIDlmciAxZnIpO1xcbiAgZ3JpZC1nYXA6IDEwcHg7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHB4KTtcXG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjBweCk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tIHJpZ2h0LCAkYmxhY2ssICRkYXJrZXItcHVycGxlKTtcXG4gIGZvbnQtZmFtaWx5OiAkZm9udDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LXNpemU6IDE0cHg7IFxcbiAgY29sb3I6ICRkYXJrZXItcHVycGxlO1xcbn1cXG5cXG4ubG9naW4tZGlzcGxheSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBib3JkZXI6IDVweCBzb2xpZCAkbGlnaHQtYmx1ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAzMHB4ICR5ZWxsb3cgaW5zZXQ7XFxuICBiYWNrZ3JvdW5kOiAkcHVycGxlO1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBzcGFjZS1ldmVubHksIGNlbnRlcik7XFxuICBAaW5jbHVkZSBncm93O1xcblxcbiAgLmxvZ2luLWJ1dHRvbiB7XFxuICAgIEBpbmNsdWRlIGJ1dHRvblN0eWxlcztcXG4gIH1cXG59XFxuXFxuLnRyYXZlbGVyLWRpc3BsYXkge1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBAaW5jbHVkZSBncmlkRGlzcGxheSgyZnIgOGZyIDJmciwgMmZyIDlmciAxZnIpO1xcbn1cXG5cXG4udHJhdmVsZXItaGVhZGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBAaW5jbHVkZSBoZWFkZXJGb290ZXJTdHlsZXM7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggJHllbGxvdztcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBoMSB7XFxuICAgIGNvbG9yOiAkbGlnaHQtYmx1ZTtcXG4gIH1cXG59XFxuXFxuLnRyYXZlbGVyLW5hdiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBAaW5jbHVkZSBzaWRlU3R5bGVzO1xcbiAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBmbGV4LXN0YXJ0LCBjZW50ZXIpO1xcbiAgQGluY2x1ZGUgbmF2U3R5bGVzO1xcblxcbiAgbGFiZWwge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgfVxcbn1cXG5cXG4udHJhdmVsZXItbWFpbiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkZGFyay1wdXJwbGUsICRkYXJrZXItcHVycGxlKTtcXG4gIGJvcmRlcjogJGdyaWQtYm9yZGVyO1xcbiAgbWFyZ2luOiAzcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICBncmlkLWdhcDogMTVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgQGluY2x1ZGUgdHJpcFN0eWxlcztcXG59XFxuXFxuQGluY2x1ZGUgc2Nyb2xsYmFyO1xcblxcblxcbi50cmF2ZWxlci1hc2lkZSB7XFxuICBncmlkLWNvbHVtbjogMyAvIDQ7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIGZsZXgtc3RhcnQsIGNlbnRlcik7XFxuICBAaW5jbHVkZSBzaWRlU3R5bGVzO1xcblxcbiAgLnRpdGxlIHtcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgfVxcblxcbiAgLnZhbHVlIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG5cXG59XFxuXFxuLnRyYXZlbGVyLWZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgQGluY2x1ZGUgaGVhZGVyRm9vdGVyU3R5bGVzO1xcbn1cXG5cXG4udHJhdmVsZXItbW9kYWwge1xcbiAgQGluY2x1ZGUgbW9kYWxTdHlsZXM7XFxufVxcblxcbi5hZG1pbi1kaXNwbGF5IHtcXG4gIEBpbmNsdWRlIGFkbWluRGlzcGxheTtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vLyBNRURJQSBRVUVSSUVTXFxuQGluY2x1ZGUgbW9iaWxlO1wiLFwiLy8gVFlQRSAvIENPTE9SU1xcbiRmb250OiBCbGVuZGVyUHJvQm9sZCwgc2Fucy1zZXJpZjtcXG4kYmxhY2s6ICMwOTA3MWE7XFxuJGRhcmtlci1wdXJwbGU6ICMxOTE0NDk7XFxuJGRhcmstcHVycGxlOiAjM0QwRTUzO1xcbiRwdXJwbGU6ICNCMDVDQjQ7XFxuJHBpbms6ICNENjEyODk7XFxuJGJsdWU6ICMyQjdGQjU7XFxuJGxpZ2h0LWJsdWU6ICMxOEY1RkU7XFxuJHllbGxvdzogI0Y5RjMwMDtcXG4kZ3JpZC1ib3JkZXI6IDVweCBzb2xpZCAkcGluaztcXG5cXG4vLyBNSVhJTlNcXG5AbWl4aW4gZ3JpZERpc3BsYXkoJGNvbHVtbnMsICRyb3dzKSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAkY29sdW1ucztcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogJHJvd3M7XFxufTtcXG5cXG5AbWl4aW4gZmxleERpc3BsYXkoJGRpcmVjdGlvbiwgJGp1c3RpZnksICRhbGlnbikge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XFxufTtcXG5cXG5AbWl4aW4gaGVhZGVyRm9vdGVyU3R5bGVzKCkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJGRhcmstcHVycGxlLCAkZGFyay1wdXJwbGUsICRkYXJrZXItcHVycGxlKTtcXG4gIGJvcmRlcjogJGdyaWQtYm9yZGVyO1xcbiAgbWFyZ2luOiAzcHg7XFxufVxcblxcbkBtaXhpbiBzaWRlU3R5bGVzKCkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJHB1cnBsZSwgJHBpbmssICRsaWdodC1ibHVlLCAkYmx1ZSk7XFxuICBib3JkZXI6ICRncmlkLWJvcmRlcjtcXG4gIG1hcmdpbjogM3B4O1xcbn1cXG5cXG5AbWl4aW4gYnV0dG9uU3R5bGVzKCkge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIHdpZHRoOiA4cmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHllbGxvdztcXG4gIGNvbG9yOiAkZGFyay1wdXJwbGU7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDtcXG5cXG4gICY6aG92ZXIsXFxuICAmOmZvY3VzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstcHVycGxlO1xcbiAgICBjb2xvcjogJHBpbms7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG59XFxuXFxuQG1peGluIGNsb3NlQnV0dG9uU3R5bGVzKCkge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBwYWRkaW5nLXRvcDogMDtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgY29sb3I6ICRwdXJwbGU7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIEBpbmNsdWRlIGdyb3c7XFxuXFxuICAmOmhvdmVyLFxcbiAgJjpmb2N1cyB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6ICRwaW5rO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gZ3JvdygpIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDsgXFxuICBcXG4gICAgJjpob3ZlcixcXG4gICAgJmZvY3VzIHsgXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgXFxuICAgIH1cXG59XFxuXFxuQG1peGluIHNocmluaygpIHtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7IFxcblxcbiAgJjpob3ZlcixcXG4gICZmb2N1cyB7IFxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgXFxuICB9XFxufVxcblxcbkBtaXhpbiBob3ZlcigpIHtcXG4gICY6aG92ZXIsXFxuICAmOmZvY3VzIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1wdXJwbGU7XFxuICAgIGNvbG9yOiAkcGluaztcXG4gIH1cXG59XFxuXFxuQG1peGluIHNjcm9sbGJhcigpIHtcXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6ICR5ZWxsb3c7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogJGxpZ2h0LWJsdWU7XFxufVxcbn1cIixcIkBpbXBvcnQgXFxcInZhcmlhYmxlc1xcXCI7XFxuXFxuQG1peGluIG5hdlN0eWxlcygpIHtcXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xcblxcbiAgaW5wdXQge1xcbiAgICB3aWR0aDogOC41cmVtO1xcbiAgfVxcbiAgLnRyaXAtcmVxdWVzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICB9XFxuXFxuICAucXVvdGUtYnV0dG9uIHtcXG4gICAgQGluY2x1ZGUgYnV0dG9uU3R5bGVzO1xcbiAgfVxcbn1cIixcIkBpbXBvcnQgXFxcInZhcmlhYmxlc1xcXCI7XFxuXFxuQG1peGluIHRyaXBTdHlsZXMoKSB7XFxuICBhcnRpY2xlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHB1cnBsZTtcXG4gICAgYm9yZGVyOiAkZ3JpZC1ib3JkZXI7XFxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggJGJsdWUsIDdweCA3cHggJGxpZ2h0LWJsdWU7XFxuICAgIGNvbG9yOiAkZGFyay1wdXJwbGU7XFxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBAaW5jbHVkZSBzaHJpbms7XFxuXFxuICAgIC5sb2NhdGlvbi1pbWFnZSB7XFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC50cmlwLXN1bW1hcnkge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MjMpO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOztcXG4gICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgIGhlaWdodDogODAlO1xcbiAgICAgIHdpZHRoOiA3NSU7XFxuICAgIH1cXG5cXG4gICAgcCB7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC50cmF2ZWxlcnMge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgLnN0YXR1cyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICAudmFsdWUge1xcbiAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIH1cXG4gIH1cXG59XCIsXCJAaW1wb3J0IFxcXCJ2YXJpYWJsZXNcXFwiO1xcblxcbkBtaXhpbiBtb2RhbFN0eWxlcygpIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZy10b3A6IDMwcHg7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7XFxuXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrZXItcHVycGxlO1xcbiAgICBtYXJnaW46IDNyZW0gYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgd2lkdGg6IDc1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICAuY2xvc2UtcXVvdGUge1xcbiAgICAgIEBpbmNsdWRlIGNsb3NlQnV0dG9uU3R5bGVzO1xcbiAgICB9XFxuXFxuICAgIC5xdW90ZS1pbWFnZSB7XFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIGhlaWdodDogMjByZW07XFxuICAgIH1cXG5cXG4gICAgLmVzdGltYXRlLWRpc3BsYXkge1xcbiAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5lc3RpbWF0ZWQtY29zdCB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBjb2xvcjogJGxpZ2h0LWJsdWU7XFxuICAgIH1cXG5cXG4gICAgLnJlcXVlc3QtYnV0dG9uIHtcXG4gICAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICAgIGhlaWdodDogNXJlbTtcXG4gICAgICB3aWR0aDogMjByZW07XFxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGluaztcXG4gICAgICBjb2xvcjogJGRhcmtlci1wdXJwbGU7XFxuICAgICAgQGluY2x1ZGUgZ3JvdztcXG4gICAgICBAaW5jbHVkZSBob3ZlcjtcXG5cXG4gICAgfVxcbiAgfVxcbn1cIixcIkBpbXBvcnQgXFxcInZhcmlhYmxlc1xcXCI7XFxuQGltcG9ydCBcXFwidHJpcF9zdHlsZXNcXFwiO1xcbkBpbXBvcnQgXFxcIm1vZGFsX3N0eWxlc1xcXCI7XFxuXFxuQG1peGluIGFkbWluRGlzcGxheSgpIHtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBAaW5jbHVkZSBncmlkRGlzcGxheSgyZnIgOGZyLCAyZnIgMTBmcik7XFxuXFxuICAuYWRtaW4taGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBjb2xvcjogJGxpZ2h0LWJsdWU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBAaW5jbHVkZSBoZWFkZXJGb290ZXJTdHlsZXM7XFxuICB9XFxuXFxuICAuYWRtaW4tbmF2IHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICRwaW5rO1xcbiAgICBAaW5jbHVkZSBzaWRlU3R5bGVzO1xcbiAgICBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIGNlbnRlciwgY2VudGVyKTtcXG4gICAgQGluY2x1ZGUgbmF2U3R5bGVzO1xcbiAgfVxcblxcbiAgLmFkbWluLW1vZGFsIHtcXG4gICAgQGluY2x1ZGUgbW9kYWxTdHlsZXM7XFxuXFxuICAgIC5jbG9zZS1hcHByb3ZhbCB7XFxuICAgICAgQGluY2x1ZGUgY2xvc2VCdXR0b25TdHlsZXM7XFxuICAgIH1cXG5cXG4gICAgLnBlbmRpbmctdHJpcCB7XFxuICAgICAgQGluY2x1ZGUgdHJpcFN0eWxlcztcXG4gICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIGhlaWdodDogMjByZW07XFxuICAgICAgd2lkdGg6IDMwcmVtO1xcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIH1cXG5cXG4gICAgLnRyaXAtc3VtbWFyeSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUyMyk7XFxuICAgICAgQGluY2x1ZGUgZmxleERpc3BsYXkoY29sdW1uLCBmbGV4LXN0YXJ0LCBjZW50ZXIpO1xcbiAgICAgIGhlaWdodDogOTAlO1xcblxcbiAgICAgIC5kZXN0aW5hdGlvbiB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICAgIH1cXG5cXG4gICAgICAudHJhdmVsZXJzIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgICAgfVxcblxcbiAgICAgIC5zdGF0dXMge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmFwcHJvdmUtYnV0dG9uIHtcXG4gICAgICBAaW5jbHVkZSBidXR0b25TdHlsZXM7XFxuICAgIH1cXG5cXG4gICAgLmRlbnktYnV0dG9uIHtcXG4gICAgICBAaW5jbHVkZSBidXR0b25TdHlsZXM7XFxuICAgIH1cXG4gIH1cXG5cXG4gIG1haW4ge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjVyZW07XFxuICAgIGdyaWQtZ2FwOiAxNXB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICBAaW5jbHVkZSB0cmlwU3R5bGVzO1xcblxcbiAgICAuZGF0ZSB7XFxuICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcblxcbiAgICAuZHVyYXRpb24ge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG4gIH1cXG59XCIsXCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xcblxcbkBtaXhpbiBtb2JpbGUoKSB7XFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcbiAgICBib2R5IHtcXG4gICAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMjBweCk7XFxuICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgfVxcblxcbiAgICAudHJhdmVsZXItaGVhZGVyIHtcXG4gICAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgfVxcblxcbiAgICAudHJhdmVsZXItbmF2IHtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgICAgbWluLWhlaWdodDogMjByZW07XFxuICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICB9XFxuXFxuICAgIC50cmF2ZWxlci1tYWluIHtcXG4gICAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkZGFyay1wdXJwbGUsICRkYXJrZXItcHVycGxlKTtcXG4gICAgICBib3JkZXI6ICRncmlkLWJvcmRlcjtcXG4gICAgICBtYXJnaW46IDNweDtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICAgIGhlaWdodDogMTVyZW07XFxuICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgICBAaW5jbHVkZSB0cmlwU3R5bGVzO1xcbiAgICB9XFxuICAgIC50cmF2ZWxlci1hc2lkZSB7XFxuICAgICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIH1cXG4gICAgXFxuICAgIC5xdW90ZS1pbWFnZSB7XFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgIHdpZHRoOiA3MHZ3O1xcbiAgICB9XFxuXFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJleHBvcnQgY29uc3QgZ2V0RGF0YSA9IGVuZHBvaW50ID0+IHtcbiAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxLyR7ZW5kcG9pbnR9YClcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdnZXREYXRhIGZldGNoIGVycm9yJywgZXJyb3IpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHBvc3RUcmlwID0gKG5ld0lELCB1c2VySUQsIGRlc3RpbmF0aW9uSUQsIHRyYXZlbGVycywgZGF0ZSwgZHVyYXRpb24pID0+IHtcbiAgdmFyIG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gIHZhciByYXcgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgXCJpZFwiOiBwYXJzZUludChgJHtuZXdJRH1gKSxcbiAgICBcInVzZXJJRFwiOiBwYXJzZUludChgJHt1c2VySUR9YCksXG4gICAgXCJkZXN0aW5hdGlvbklEXCI6IHBhcnNlSW50KGAke2Rlc3RpbmF0aW9uSUR9YCksXG4gICAgXCJ0cmF2ZWxlcnNcIjogcGFyc2VJbnQoYCR7dHJhdmVsZXJzfWApLFxuICAgIFwiZGF0ZVwiOiBgJHtkYXRlfWAsXG4gICAgXCJkdXJhdGlvblwiOiBwYXJzZUludChgJHtkdXJhdGlvbn1gKSxcbiAgICBcInN0YXR1c1wiOiBcInBlbmRpbmdcIixcbiAgICBcInN1Z2dlc3RlZEFjdGl2aXRpZXNcIjogW11cbiAgfSk7XG5cbiAgdmFyIHJlcXVlc3RPcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbiAgICBib2R5OiByYXcsXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnXG4gIH07XG5cbiAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwc1wiLCByZXF1ZXN0T3B0aW9ucylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSk7XG59XG5cbmV4cG9ydCBjb25zdCBhcHByb3ZlVHJpcCA9ICh0cmlwSUQpID0+IHtcbiAgdmFyIG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gIHZhciByYXcgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgXCJpZFwiOiBwYXJzZUludChgJHt0cmlwSUR9YCksXG4gICAgXCJzdGF0dXNcIjogXCJhcHByb3ZlZFwiXG4gIH0pO1xuXG4gIHZhciByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiBteUhlYWRlcnMsXG4gICAgYm9keTogcmF3LFxuICAgIHJlZGlyZWN0OiAnZm9sbG93J1xuICB9O1xuXG4gIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdXBkYXRlVHJpcFwiLCByZXF1ZXN0T3B0aW9ucylcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4ocmVzdWx0ID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycm9yKSk7XG59XG5cbmV4cG9ydCBjb25zdCBkZW55VHJpcCA9ICh0cmlwSUQpID0+IHtcbiAgdmFyIG15SGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gIG15SGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuXG4gIHZhciByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbiAgICByZWRpcmVjdDogJ2ZvbGxvdydcbiAgfTtcblxuICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHMvJHtwYXJzZUludCh0cmlwSUQpfWAsIHJlcXVlc3RPcHRpb25zKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpKTtcbn0iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBRdWVyeSBTZWxlY3RvcnNcbmV4cG9ydCBjb25zdCBsb2dpbkRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLWRpc3BsYXlcIik7XG5leHBvcnQgY29uc3QgdHJhdmVsZXJEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmF2ZWxlci1kaXNwbGF5XCIpXG5leHBvcnQgY29uc3QgdHJhdmVsZXJIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYXZlbGVyLWhlYWRlclwiKTtcbmV4cG9ydCBjb25zdCB0cmF2ZWxlck5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJhdmVsZXItbmF2XCIpO1xuZXhwb3J0IGNvbnN0IHRyYXZlbGVyTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYXZlbGVyLW1vZGFsXCIpO1xuZXhwb3J0IGNvbnN0IHRyYXZlbGVyTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJhdmVsZXItbWFpblwiKTtcbmV4cG9ydCBjb25zdCB0cmF2ZWxlckFzaWRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmF2ZWxlci1hc2lkZVwiKTtcbmV4cG9ydCBjb25zdCB0cmF2ZWxlckZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJhdmVsZXItZm9vdGVyXCIpO1xuZXhwb3J0IGNvbnN0IGFkbWluRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRtaW4tZGlzcGxheVwiKTtcbmV4cG9ydCBjb25zdCBhZG1pbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRtaW4taGVhZGVyXCIpO1xuZXhwb3J0IGNvbnN0IGFkbWluTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkbWluLW1vZGFsXCIpO1xuZXhwb3J0IGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtY29udGVudFwiKTtcbmV4cG9ydCBjb25zdCBhZG1pbk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRtaW4tbmF2XCIpO1xuZXhwb3J0IGNvbnN0IGFkbWluTWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRtaW4tbWFpblwiKTtcbmV4cG9ydCBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tZGF0ZVwiKTtcbmV4cG9ydCBjb25zdCBkdXJhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWR1cmF0aW9uXCIpO1xuZXhwb3J0IGNvbnN0IG51bVRyYXZlbGVyc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXRyYXZlbGVyc1wiKTtcbmV4cG9ydCBjb25zdCBkZXN0aW5hdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWRlc3RpbmF0aW9uXCIpO1xuZXhwb3J0IGNvbnN0IHRyYXZlbGVyQ29udGVudERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYXZlbGVyLWNvbnRlbnQtZGlzcGxheVwiKTtcbmV4cG9ydCBjb25zdCBhZG1pbkNvbnRlbnREaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZG1pbi1jb250ZW50LWRpc3BsYXlcIik7XG5leHBvcnQgY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvZ2luLWJ1dHRvblwiKTtcblxuXG4vLyBGdW5jdGlvbnNcblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlUcmF2ZWxlclRyaXBzID0gKHRyYXZlbGVyLCB0cmlwc1JlcG8sIGRlc3RpbmF0aW9uc1JlcG8pID0+IHtcbiAgY29uc3QgdHJhdmVsZXJUcmlwcyA9IHRyaXBzUmVwby5maWx0ZXJUcmF2ZWxlclRyaXBzKHRyYXZlbGVyLmlkKTtcbiAgXG4gIHRyYXZlbGVyTWFpbi5pbm5lckhUTUwgPSAnJztcbiAgdHJhdmVsZXJUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgIHRyYXZlbGVyTWFpbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgXG4gICAgICA8YXJ0aWNsZSB0YWJpbmRleD1cIjBcIiBjbGFzcz1cInRyaXBcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke2Rlc3RpbmF0aW9uc1JlcG8uZmluZERlc3RpbmF0aW9uQnlJRCh0cmlwLmRlc3RpbmF0aW9uSUQpLmltYWdlfVwiIGFsdCA9XCIke2Rlc3RpbmF0aW9uc1JlcG8uZmluZERlc3RpbmF0aW9uQnlJRCh0cmlwLmRlc3RpbmF0aW9uSUQpLmFsdH1cIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0cmlwLXN1bW1hcnlcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImRldGFpbCBkYXRlXCI+JHt0cmlwLmRhdGV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsIGR1cmF0aW9uXCI+JHt0cmlwLmR1cmF0aW9ufSBEQVlTIElOPC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsIGRlc3RpbmF0aW9uIHZhbHVlXCI+JHtkZXN0aW5hdGlvbnNSZXBvLmZpbmREZXN0aW5hdGlvbkJ5SUQodHJpcC5kZXN0aW5hdGlvbklEKS5kZXN0aW5hdGlvbn08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWwgdHJhdmVsZXJzXCI+VFJBVkVMRVJTPC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsIHZhbHVlXCI+JHt0cmlwLnRyYXZlbGVyc308L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWwgc3RhdHVzXCI+U1RBVFVTPC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsIHZhbHVlXCI+JHt0cmlwLnN0YXR1c308L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICBgKTtcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlUcmF2ZWxlckFzaWRlID0gKHRyYXZlbGVyLCB0cmlwc1JlcG8sIGRlc3RpbmF0aW9uc1JlcG8pID0+IHtcbiAgY29uc3QgdGhpc1llYXIgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsIDQpLnJlcGxhY2UoLy0vZywgJy8nKTtcbiAgY29uc3QgYW5udWFsVG90YWwgPSB0cmlwc1JlcG8udG90YWxBbm51YWxUcmlwc0Nvc3QodHJhdmVsZXIuaWQsIHRoaXNZZWFyLCBkZXN0aW5hdGlvbnNSZXBvKTtcbiAgY29uc3QgcGVuZGluZ1RvdGFsID0gdHJpcHNSZXBvLnRvdGFsUGVuZGluZ1RyaXBzQ29zdCh0cmF2ZWxlci5pZCwgZGVzdGluYXRpb25zUmVwbyk7XG5cbiAgdHJhdmVsZXJBc2lkZS5pbm5lckhUTUwgPSAnPGgxPlBST0ZJTEU8L2gxPic7XG4gIHRyYXZlbGVyQXNpZGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPHAgY2xhc3M9XCJhc2lkZS1lbGVtZW50IHRpdGxlXCI+VE9UQUwgU1BFTlQgSU4gJHt0aGlzWWVhcn08L3A+PHAgY2xhc3M9XCJhc2lkZS1lbGVtZW50IHZhbHVlXCI+JHthbm51YWxUb3RhbC50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtzdHlsZTogXCJjdXJyZW5jeVwiLCBjdXJyZW5jeTogXCJVU0RcIn0pfTwvcD5cbiAgPHAgY2xhc3M9XCJhc2lkZS1lbGVtZW50IHRpdGxlXCI+VE9UQUwgT0YgUEVORElORyBUUklQUzwvcD48cCBjbGFzcz1cImFzaWRlLWVsZW1lbnQgdmFsdWVcIj4ke3BlbmRpbmdUb3RhbC50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtzdHlsZTogXCJjdXJyZW5jeVwiLCBjdXJyZW5jeTogXCJVU0RcIn0pfTwvcD5gKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlUcmF2ZWxlclBhZ2UgPSAodHJhdmVsZXIsIHRyaXBzUmVwbywgZGVzdGluYXRpb25zUmVwbykgPT4ge1xuICBkaXNwbGF5VHJhdmVsZXJUcmlwcyh0cmF2ZWxlciwgdHJpcHNSZXBvLCBkZXN0aW5hdGlvbnNSZXBvKTtcbiAgZGlzcGxheVRyYXZlbGVyQXNpZGUodHJhdmVsZXIsIHRyaXBzUmVwbywgZGVzdGluYXRpb25zUmVwbyk7XG59XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5UXVvdGUgPSBkZXN0aW5hdGlvbnNSZXBvID0+IHtcbiAgY29uc3QgZHVyYXRpb24gPSBkdXJhdGlvbklucHV0LnZhbHVlO1xuICBjb25zdCB0cmF2ZWxlcnMgPSBudW1UcmF2ZWxlcnNJbnB1dC52YWx1ZTtcbiAgY29uc3QgZGVzdGluYXRpb25JRCA9IGRlc3RpbmF0aW9uc1JlcG8uZmluZElEQnlOYW1lKGRlc3RpbmF0aW9uSW5wdXQudmFsdWUpO1xuICBjb25zdCBkZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uc1JlcG8uZmluZERlc3RpbmF0aW9uQnlJRChkZXN0aW5hdGlvbklEKTtcbiAgY29uc3QgdHJpcENvc3QgPSBkZXN0aW5hdGlvbnNSZXBvLmNhbGNUcmlwQ29zdChkdXJhdGlvbiwgdHJhdmVsZXJzLCBkZXN0aW5hdGlvbklEKTtcblxuICB0cmF2ZWxlckNvbnRlbnREaXNwbGF5LmlubmVySFRNTCA9ICcnO1xuICB0cmF2ZWxlckNvbnRlbnREaXNwbGF5Lmluc2VydEFkamFjZW50SFRNTChcImFmdGVyYmVnaW5cIiwgYDxpbWcgY2xhc3M9XCJxdW90ZS1pbWFnZVwiIHNyYz1cIiR7ZGVzdGluYXRpb24uaW1hZ2V9XCIgYWx0PVwiJHtkZXN0aW5hdGlvbi5hbHR9XCI+YCk7XG4gIHRyYXZlbGVyQ29udGVudERpc3BsYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGA8cCBjbGFzcz1cImVzdGltYXRlZC1jb3N0XCI+WU9VUiBFU1RJTUFURUQgQ09TVCBJUzogJHt0cmlwQ29zdC50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIsIHtzdHlsZTogXCJjdXJyZW5jeVwiLCBjdXJyZW5jeTogXCJVU0RcIn0pfTwvcD5gKTtcbiAgdHJhdmVsZXJNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5leHBvcnQgY29uc3QgaGlkZVF1b3RlID0gKCkgPT4ge1xuICBkYXRlSW5wdXQudmFsdWUgPSBudWxsO1xuICBkdXJhdGlvbklucHV0LnZhbHVlID0gbnVsbDtcbiAgbnVtVHJhdmVsZXJzSW5wdXQudmFsdWUgPSBudWxsO1xuICBkZXN0aW5hdGlvbklucHV0LnZhbHVlID0gbnVsbDtcbiAgdHJhdmVsZXJNb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmV4cG9ydCBjb25zdCBoaWRlUmVxdWVzdCA9ICgpID0+IHtcbiAgYWRtaW5Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5cbmV4cG9ydCBjb25zdCBjb25zdHJ1Y3RUb2RheXNUcmF2ZWxlcnMgPSAodHJhdmVsZXJzUmVwbywgdHJpcHNSZXBvKSA9PiB7XG4gIGNvbnN0IHRvZGF5c1RyaXBzID0gdHJpcHNSZXBvLmZpbHRlclRyaXBzVG9kYXkoXCIyMDIwLzA2LzIyXCIpO1xuICBjb25zdCB0cmF2ZWxlck5hbWVzID0gdG9kYXlzVHJpcHMubWFwKHRyaXAgPT4ge1xuICAgIGNvbnN0IHRyYXZlbGVyID0gdHJhdmVsZXJzUmVwby5jaGVja0ZvcklEKHRyaXAudXNlcklEKTtcbiAgICByZXR1cm4gdHJhdmVsZXIubmFtZTtcbiAgfSlcblxuICByZXR1cm4gdHJhdmVsZXJOYW1lcy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgIGFkbWluTmF2Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxwIGNsYXNzPVwiYWRtaW4tbmF2LWVsZW1lbnQgdmFsdWVcIj4ke25hbWV9PC9wPmApXG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5QWRtaW5OYXYgPSAodHJhdmVsZXJzUmVwbywgdHJpcHNSZXBvLCBkZXN0aW5hdGlvbnNSZXBvKSA9PiB7XG4gIGFkbWluTmF2LmlubmVySFRNTCA9ICc8aDE+QURNSU4gU1RBVElTVElDUzwvaDE+JztcbiAgY29uc3QgdGhpc1llYXIgPSBuZXcgRGF0ZSgpLnRvSlNPTigpLnNsaWNlKDAsIDQpLnJlcGxhY2UoLy0vZywgJy8nKTtcbiAgLy9LRUVQSU5HIEhBUkQgQ09ERUQgREFURSBTSU5DRSBOTyBEQVRBIEZPUiAyMDIxXG4gIGNvbnN0IGFubnVhbENvbW1pc3Npb25Ub3RhbCA9IHRyaXBzUmVwby50b3RhbEFubnVhbENvbW1pc3Npb24oMjAyMCwgZGVzdGluYXRpb25zUmVwbyk7XG4gIFxuICBhZG1pbk5hdi5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8cCBjbGFzcz1cImFkbWluLW5hdi1lbGVtZW50IHRpdGxlXCI+RUFSTklOR1MgSU4gJHt0aGlzWWVhcn08L3A+PHAgY2xhc3M9XCJhZG1pbi1uYXYtZWxlbWVudCB2YWx1ZVwiPiR7YW5udWFsQ29tbWlzc2lvblRvdGFsLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge3N0eWxlOiBcImN1cnJlbmN5XCIsIGN1cnJlbmN5OiBcIlVTRFwifSl9PC9wPlxuICA8cCBjbGFzcz1cImFkbWluLW5hdi1lbGVtZW50IHRpdGxlXCI+V0hPJ1MgVFJBVkVMSU5HIFRPREFZPzwvcD5gKTtcbiAgY29uc3RydWN0VG9kYXlzVHJhdmVsZXJzKHRyYXZlbGVyc1JlcG8sIHRyaXBzUmVwbyk7XG59XG5cbmV4cG9ydCBjb25zdCBkaXNwbGF5QWRtaW5Nb2RhbCA9IChldmVudCwgZGVzdGluYXRpb25zUmVwbywgdHJpcHNSZXBvKSA9PiB7XG4gIGNvbnN0IHRyaXBJRCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwic2VjdGlvblwiKS5pZDtcbiAgY29uc3QgdHJpcCA9IHRyaXBzUmVwby5maW5kVHJpcEJ5VHJpcElEKHRyaXBJRCk7XG4gIGNvbnN0IHNlbGVjdGVkVHJpcEhUTUwgPSBgXG4gIDxhcnRpY2xlIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwicGVuZGluZy10cmlwXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtkZXN0aW5hdGlvbnNSZXBvLmZpbmREZXN0aW5hdGlvbkJ5SUQodHJpcC5kZXN0aW5hdGlvbklEKS5pbWFnZX1cIiBhbHQgPVwiJHtkZXN0aW5hdGlvbnNSZXBvLmZpbmREZXN0aW5hdGlvbkJ5SUQodHJpcC5kZXN0aW5hdGlvbklEKS5hbHR9XCI+XG4gICAgPHNlY3Rpb24gY2xhc3M9XCJ0cmlwLXN1bW1hcnlcIj5cbiAgICAgIDxwIGNsYXNzPVwiZGV0YWlsIGRhdGVcIj4ke3RyaXAuZGF0ZX08L3A+XG4gICAgICA8cCBjbGFzcz1cImRldGFpbCBkdXJhdGlvblwiPiR7dHJpcC5kdXJhdGlvbn0gREFZUyBJTjwvcD5cbiAgICAgIDxwIGNsYXNzPVwiZGV0YWlsIGRlc3RpbmF0aW9uXCI+JHtkZXN0aW5hdGlvbnNSZXBvLmZpbmREZXN0aW5hdGlvbkJ5SUQodHJpcC5kZXN0aW5hdGlvbklEKS5kZXN0aW5hdGlvbn08L3A+XG4gICAgICA8cCBjbGFzcz1cImRldGFpbCB0cmF2ZWxlcnNcIj5UUkFWRUxFUlM8L3A+PHA+JHt0cmlwLnRyYXZlbGVyc308L3A+XG4gICAgICA8cCBjbGFzcz1cImRldGFpbCBzdGF0dXNcIj5TVEFUVVM8L3A+PHA+JHt0cmlwLnN0YXR1c308L3A+XG4gICAgPC9zZWN0aW9uPlxuICA8L2FydGljbGU+YFxuXG4gIGFkbWluQ29udGVudERpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG4gIGFkbWluQ29udGVudERpc3BsYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBzZWxlY3RlZFRyaXBIVE1MKTtcbiAgbW9kYWxDb250ZW50LmlkID0gYCR7dHJpcElEfWBcbiAgYWRtaW5Nb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5leHBvcnQgY29uc3QgY2hlY2tSZXF1ZXN0SW5wdXRzID0gKGRlc3RpbmF0aW9uc1JlcG8pID0+IHtcbiAgY29uc3QgZGF0ZSA9IGRhdGVJbnB1dC52YWx1ZTtcbiAgY29uc3QgZHVyYXRpb24gPSBkdXJhdGlvbklucHV0LnZhbHVlO1xuICBjb25zdCB0cmF2ZWxlcnMgPSBudW1UcmF2ZWxlcnNJbnB1dC52YWx1ZTtcbiAgY29uc3QgZGVzdGluYXRpb25JRCA9IGRlc3RpbmF0aW9uc1JlcG8uZmluZElEQnlOYW1lKGRlc3RpbmF0aW9uSW5wdXQudmFsdWUpO1xuXG4gIGlmIChkYXRlID09PSAnJyB8fCAxID4gZHVyYXRpb24gfHwgMSA+IHRyYXZlbGVycyB8fCBkZXN0aW5hdGlvbklEID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlQZW5kaW5nVHJpcHMgPSAodHJpcHNSZXBvLCBkZXN0aW5hdGlvbnNSZXBvKSA9PiB7XG4gIGNvbnN0IHBlbmRpbmdUcmlwcyA9IHRyaXBzUmVwby5maWx0ZXJQZW5kaW5nVHJpcHMoKTtcbiAgYWRtaW5NYWluLmlubmVySFRNTCA9ICcnO1xuXG4gIHBlbmRpbmdUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgIGFkbWluTWFpbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgXG4gICAgICA8YXJ0aWNsZSB0YWJpbmRleD1cIjBcIiBjbGFzcz1cInRyaXBcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke2Rlc3RpbmF0aW9uc1JlcG8uZmluZERlc3RpbmF0aW9uQnlJRCh0cmlwLmRlc3RpbmF0aW9uSUQpLmltYWdlfVwiIGFsdCA9XCIke2Rlc3RpbmF0aW9uc1JlcG8uZmluZERlc3RpbmF0aW9uQnlJRCh0cmlwLmRlc3RpbmF0aW9uSUQpLmFsdH1cIj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJ0cmlwLXN1bW1hcnlcIiBpZD1cIiR7dHJpcC5pZH1cIj5cbiAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWwgdHJhdmxlclwiPlRSQVZFTEVSIElEOiAke3RyaXAudXNlcklEfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImRldGFpbCBkYXRlXCI+JHt0cmlwLmRhdGV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsIGR1cmF0aW9uXCI+JHt0cmlwLmR1cmF0aW9ufSBEQVlTIElOPC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsIGRlc3RpbmF0aW9uXCI+JHtkZXN0aW5hdGlvbnNSZXBvLmZpbmREZXN0aW5hdGlvbkJ5SUQodHJpcC5kZXN0aW5hdGlvbklEKS5kZXN0aW5hdGlvbn08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWwgdHJhdmVsZXJzXCI+VFJBVkVMRVJTOiAke3RyaXAudHJhdmVsZXJzfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImRldGFpbCBzdGF0dXNcIj5TVEFUVVM6ICR7dHJpcC5zdGF0dXN9PC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2FydGljbGU+XG4gICAgYCk7XG4gIH0pXG59XG5cbmV4cG9ydCBjb25zdCBjaGVja0xvZ2luSW5wdXRzID0gKHVzZXJuYW1lLCBwYXNzd29yZCwgdHJhdmVsZXJzUmVwbykgPT4ge1xuICBjb25zdCB0d29DaGFyID0gcGFyc2VJbnQodXNlcm5hbWUuc2xpY2UoLTIpKTtcbiAgY29uc3Qgb25lQ2hhciA9IHBhcnNlSW50KHVzZXJuYW1lLnNsaWNlKC0xKSk7XG4gIFxuICBpZiAodHJhdmVsZXJzUmVwby5jaGVja0ZvcklEKHR3b0NoYXIpICYmIHBhc3N3b3JkID09PSAndHJhdmVsMjAyMScpIHtcbiAgICByZXR1cm4gdHJhdmVsZXJzUmVwby5jaGVja0ZvcklEKHR3b0NoYXIpO1xuICB9IGVsc2UgaWYgKHRyYXZlbGVyc1JlcG8uY2hlY2tGb3JJRChvbmVDaGFyKSAmJiBwYXNzd29yZCA9PT0gJ3RyYXZlbDIwMjEnKSB7XG4gICAgcmV0dXJuIHRyYXZlbGVyc1JlcG8uY2hlY2tGb3JJRChvbmVDaGFyKTtcbiAgfSBlbHNlIHtcbiAgICBhbGVydChcIk5vIGFjY291bnQgZm91bmQgd2l0aCB0aGF0IGluZm9ybWF0aW9uLiBUcnkgYWdhaW4uXCIpO1xuICB9XG59XG5cbi8vIFJFRkFDVE9SIFRISVMgVE8gQUREIEEgQ0xBU1MgT0YgRElTUExBWTogSElEREVOPz8/XG5leHBvcnQgY29uc3QgZGlzcGxheURlc2lyZWRFbGVtZW50cyA9IGRpc3BsYXkgPT4ge1xuICBpZiAoZGlzcGxheSA9PT0gJ2xvZ2luJykge1xuICAgIHRyYXZlbGVyRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGFkbWluRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGxvZ2luRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlID0gXCJoaWRkZW5cIjtcbiAgfSBlbHNlIGlmIChkaXNwbGF5ID09PSAndHJhdmVsZXInKSB7XG4gICAgdHJhdmVsZXJEaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgYWRtaW5EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgbG9naW5EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0gZWxzZSBpZiAoZGlzcGxheSA9PT0gJ2FkbWluJykge1xuICAgIHRyYXZlbGVyRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGFkbWluRGlzcGxheS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIGxvZ2luRGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG59IiwiLy8gU1RZTEUgSU1QT1JUU1xuaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuXG4vLyBJTUFHRSBJTVBPUlRTXG4vLyBpbXBvcnQgJy4vaW1hZ2VzL3R1cmluZy1sb2dvLnBuZydcbmNvbnNvbGUubG9nKCdUaGlzIGlzIHRoZSBKYXZhU2NyaXB0IGVudHJ5IGZpbGUgLSB5b3VyIGNvZGUgYmVnaW5zIGhlcmUuJyk7XG5cbi8vIFFVRVJZIFNFTEVDVE9SU1xuY29uc3QgcXVvdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVvdGUtYnV0dG9uJyk7XG5jb25zdCBjbG9zZVF1b3RlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXF1b3RlJyk7XG5jb25zdCBjbG9zZUFwcHJvdmFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWFwcHJvdmFsJyk7XG5jb25zdCByZXF1ZXN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcXVlc3QtYnV0dG9uJyk7XG5jb25zdCBhcHByb3ZlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFwcHJvdmUtYnV0dG9uJyk7XG5jb25zdCBkZW55QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbnktYnV0dG9uJyk7XG5jb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tZGF0ZVwiKTtcbmNvbnN0IGR1cmF0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tZHVyYXRpb25cIik7XG5jb25zdCBudW1UcmF2ZWxlcnNJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS10cmF2ZWxlcnNcIik7XG5jb25zdCBkZXN0aW5hdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLWRlc3RpbmF0aW9uXCIpO1xuY29uc3QgdXNlcm5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS11c2VybmFtZVwiKTtcbmNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tcGFzc3dvcmRcIik7XG5jb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tYnV0dG9uXCIpO1xuY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xuXG4vLyBKUyBJTVBPUlRTXG5pbXBvcnQgVHJhdmVsZXIgZnJvbSAnLi9qc0NsYXNzZXMvdHJhdmVsZXInO1xuaW1wb3J0IFRyYXZlbGVyc1JlcG8gZnJvbSAnLi9qc0NsYXNzZXMvdHJhdmVsZXJzUmVwbydcbmltcG9ydCBEZXN0aW5hdGlvbnNSZXBvIGZyb20gJy4vanNDbGFzc2VzL2Rlc3RpbmF0aW9uc1JlcG8nO1xuaW1wb3J0IFRyaXBzUmVwbyBmcm9tICcuL2pzQ2xhc3Nlcy90cmlwc1JlcG8nO1xuaW1wb3J0IEFkbWluIGZyb20gJy4vanNDbGFzc2VzL2FkbWluJztcbmltcG9ydCB7IFxuICBkaXNwbGF5VHJhdmVsZXJUcmlwcywgXG4gIGRpc3BsYXlUcmF2ZWxlckFzaWRlLCBcbiAgZGlzcGxheVF1b3RlLCBcbiAgaGlkZVF1b3RlLFxuICBkaXNwbGF5UGVuZGluZ1RyaXBzLFxuICBjaGVja1JlcXVlc3RJbnB1dHMsXG4gIGNoZWNrTG9naW5JbnB1dHMsXG4gIGRpc3BsYXlEZXNpcmVkRWxlbWVudHMsXG4gIGFkbWluTWFpbixcbiAgZGlzcGxheUFkbWluTmF2LFxuICBkaXNwbGF5QWRtaW5Nb2RhbCxcbiAgaGlkZVJlcXVlc3Rcbn0gZnJvbSAnLi9kb21VcGRhdGVzJztcbmltcG9ydCB7IFxuICBnZXREYXRhLFxuICBwb3N0VHJpcCxcbiAgYXBwcm92ZVRyaXAsXG4gIGRlbnlUcmlwXG59IGZyb20gJy4vYXBpUmVxdWVzdHMnO1xuXG4vLyBHbG9iYWwgVmFyaWFibGVzXG5sZXQgdHJhdmVsZXJzUmVwbztcbmxldCB0cmlwc1JlcG87XG5sZXQgZGVzdGluYXRpb25zUmVwbztcbmxldCB0cmF2ZWxlcjtcbmxldCB0cmF2ZWxlcklEO1xuY29uc3QgYWRtaW4gPSBuZXcgQWRtaW4oKTtcblxuLy8gSW5pdGlhbCBEYXRhIGFuZCBET00gUG9wdWxhdGlvblxuY29uc3QgcG9wdWxhdGVUcmF2ZWxlck1haW4gPSAoKSA9PiB7XG4gIFByb21pc2UuYWxsKFtnZXRUcmF2ZWxlckRhdGEodHJhdmVsZXJJRCksXG4gICAgZ2V0VHJpcHNEYXRhKCksXG4gICAgZ2V0RGVzdGluYXRpb25zRGF0YSgpXG4gIF0pXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdHJhdmVsZXIgPSBuZXcgVHJhdmVsZXIocmVzcG9uc2VbMF0pO1xuICAgICAgdHJpcHNSZXBvID0gbmV3IFRyaXBzUmVwbyhyZXNwb25zZVsxXSk7XG4gICAgICBkZXN0aW5hdGlvbnNSZXBvID0gbmV3IERlc3RpbmF0aW9uc1JlcG8ocmVzcG9uc2VbMl0pO1xuICAgIH0pXG4gICAgLnRoZW4oICgpID0+IHtcbiAgICAgIGRpc3BsYXlUcmF2ZWxlclRyaXBzKHRyYXZlbGVyLCB0cmlwc1JlcG8sIGRlc3RpbmF0aW9uc1JlcG8pO1xuICAgICAgZGlzcGxheVRyYXZlbGVyQXNpZGUodHJhdmVsZXIsIHRyaXBzUmVwbywgZGVzdGluYXRpb25zUmVwbyk7XG4gICAgfSlcbn1cblxuY29uc3QgcG9wdWxhdGVBZG1pbk1haW4gPSAoKSA9PiB7XG4gIFByb21pc2UuYWxsKFtnZXRUcmlwc0RhdGEoKSxcbiAgICBnZXREZXN0aW5hdGlvbnNEYXRhKClcbiAgXSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0cmlwc1JlcG8gPSBuZXcgVHJpcHNSZXBvKHJlc3BvbnNlWzBdKTtcbiAgICAgIGRlc3RpbmF0aW9uc1JlcG8gPSBuZXcgRGVzdGluYXRpb25zUmVwbyhyZXNwb25zZVsxXSk7XG4gICAgfSlcbiAgICAudGhlbiggKCkgPT4ge1xuICAgICAgZGlzcGxheUFkbWluTmF2KHRyYXZlbGVyc1JlcG8sIHRyaXBzUmVwbywgZGVzdGluYXRpb25zUmVwbyk7XG4gICAgICBkaXNwbGF5UGVuZGluZ1RyaXBzKHRyaXBzUmVwbywgZGVzdGluYXRpb25zUmVwbyk7XG4gICAgfSlcbn1cblxuY29uc3QgZ2V0VHJhdmVsZXJEYXRhID0gdHJhdmVsZXJJRCA9PiB7XG4gIHJldHVybiBnZXREYXRhKGB0cmF2ZWxlcnMvJHt0cmF2ZWxlcklEfWApXG59XG5cbmNvbnN0IGdldFRyYXZlbGVyc0RhdGEgPSAoKSA9PiB7XG4gIHJldHVybiBnZXREYXRhKCd0cmF2ZWxlcnMnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRyYXZlbGVyc1JlcG8gPSBuZXcgVHJhdmVsZXJzUmVwbyhyZXNwb25zZSk7XG4gICAgfSlcbn1cblxuY29uc3QgZ2V0VHJpcHNEYXRhID0gKCkgPT4ge1xuICByZXR1cm4gZ2V0RGF0YSgndHJpcHMnKVxufVxuXG5jb25zdCBnZXREZXN0aW5hdGlvbnNEYXRhID0gKCkgPT4ge1xuICByZXR1cm4gZ2V0RGF0YSgnZGVzdGluYXRpb25zJylcbn1cblxuLy8gRnVuY3Rpb24gRGVjbGFyYXRpb25zXG5jb25zdCBjcmVhdGVRdW90ZSA9ICgpID0+IHtcbiAgaWYgKCFjaGVja1JlcXVlc3RJbnB1dHMoZGVzdGluYXRpb25zUmVwbykpIHtcbiAgICBhbGVydCgnSW52YWxpZCBpbnB1dCwgY2hlY2sgeW91ciBmb3JtLicpXG4gIH0gZWxzZSB7XG4gICAgZGlzcGxheVF1b3RlKGRlc3RpbmF0aW9uc1JlcG8pO1xuICB9XG59XG5cbmNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gIGhpZGVRdW90ZSgpO1xuICBoaWRlUmVxdWVzdCgpO1xufVxuXG5jb25zdCBzdWJtaXRUcmlwUmVxdWVzdCA9ICgpID0+IHtcbiAgY29uc3QgZGF0ZSA9IGRhdGVJbnB1dC52YWx1ZS50b1N0cmluZygpO1xuICBjb25zdCBmb3JtYXR0ZWREYXRlID0gZGF0ZS5yZXBsYWNlQWxsKFwiLVwiLCBcIi9cIik7XG4gIGNvbnN0IGR1cmF0aW9uID0gZHVyYXRpb25JbnB1dC52YWx1ZTtcbiAgY29uc3QgdHJhdmVsZXJzID0gbnVtVHJhdmVsZXJzSW5wdXQudmFsdWU7XG4gIGNvbnN0IGRlc3RpbmF0aW9uSUQgPSBkZXN0aW5hdGlvbnNSZXBvLmZpbmRJREJ5TmFtZShkZXN0aW5hdGlvbklucHV0LnZhbHVlKTtcbiAgUHJvbWlzZS5yZXNvbHZlKHBvc3RUcmlwKERhdGUubm93KCksIHRyYXZlbGVyLmlkLCBkZXN0aW5hdGlvbklELCB0cmF2ZWxlcnMsIGZvcm1hdHRlZERhdGUsIGR1cmF0aW9uKSlcbiAgICAudGhlbihwb3B1bGF0ZVRyYXZlbGVyTWFpbigpKVxuICAgIC50aGVuKGhpZGVRdW90ZSgpKVxufVxuXG5jb25zdCBkaXNwbGF5UmVxdWVzdCA9IGV2ZW50ID0+IHtcbiAgZGlzcGxheUFkbWluTW9kYWwoZXZlbnQsIGRlc3RpbmF0aW9uc1JlcG8sIHRyaXBzUmVwbyk7XG59XG5cbmNvbnN0IGFwcHJvdmVSZXF1ZXN0ID0gKCkgPT4ge1xuICBjb25zdCB0cmlwSUQgPSBtb2RhbENvbnRlbnQuaWQ7XG5cbiAgUHJvbWlzZS5yZXNvbHZlKGFwcHJvdmVUcmlwKHRyaXBJRCkpXG4gICAgLnRoZW4ocG9wdWxhdGVBZG1pbk1haW4oKSlcbiAgICAudGhlbihoaWRlUmVxdWVzdCgpKVxufVxuXG5jb25zdCBkZW55UmVxdWVzdCA9ICgpID0+IHtcbiAgY29uc3QgdHJpcElEID0gbW9kYWxDb250ZW50LmlkO1xuXG4gIFByb21pc2UucmVzb2x2ZShkZW55VHJpcCh0cmlwSUQpKVxuICAgIC50aGVuKHBvcHVsYXRlQWRtaW5NYWluKCkpXG4gICAgLnRoZW4oaGlkZVJlcXVlc3QoKSlcbn1cblxuY29uc3QgbG9naW4gPSAoKSA9PiB7XG4gIGNvbnN0IHVzZXJuYW1lID0gdXNlcm5hbWVJbnB1dC52YWx1ZTtcbiAgY29uc3QgcGFzc3dvcmQgPSBwYXNzd29yZElucHV0LnZhbHVlO1xuXG4gIGlmIChhZG1pbi5jaGVja0NyZWRlbnRpYWxzKHVzZXJuYW1lLCBwYXNzd29yZCkpIHtcbiAgICBwb3B1bGF0ZUFkbWluTWFpbigpO1xuICAgIGRpc3BsYXlEZXNpcmVkRWxlbWVudHMoJ2FkbWluJyk7XG4gIH0gZWxzZSB7XG4gICAgdHJhdmVsZXJJRCA9IGNoZWNrTG9naW5JbnB1dHModXNlcm5hbWUsIHBhc3N3b3JkLCB0cmF2ZWxlcnNSZXBvKS5pZDtcbiAgICBwb3B1bGF0ZVRyYXZlbGVyTWFpbigpO1xuICAgIGRpc3BsYXlEZXNpcmVkRWxlbWVudHMoJ3RyYXZlbGVyJyk7XG4gIH1cbn1cblxuY29uc3QgaW5pdGlhbGl6ZVBhZ2UgPSAoKSA9PiB7XG4gIFByb21pc2UucmVzb2x2ZShnZXRUcmF2ZWxlcnNEYXRhKCkpXG4gICAgLnRoZW4oXG4gICAgICBkaXNwbGF5RGVzaXJlZEVsZW1lbnRzKCdsb2dpbicpXG4gICAgKVxufVxuXG4vLyBFdmVudCBMaXN0ZW5lcnNcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGluaXRpYWxpemVQYWdlKCkpO1xucXVvdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNyZWF0ZVF1b3RlKTtcbmNsb3NlUXVvdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlTW9kYWwpO1xuY2xvc2VBcHByb3ZhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG5yZXF1ZXN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRUcmlwUmVxdWVzdCk7XG5sb2dpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbG9naW4pO1xuYWRtaW5NYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5UmVxdWVzdCk7XG5hcHByb3ZlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhcHByb3ZlUmVxdWVzdCk7XG5kZW55QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZW55UmVxdWVzdCk7IiwiY2xhc3MgVHJhdmVsZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnVzZXJuYW1lID0gXCJhZ2VuY3lcIjtcbiAgICB0aGlzLnBhc3N3b3JkID0gXCJ0cmF2ZWwyMDIxXCI7XG4gIH1cblxuICBjaGVja0NyZWRlbnRpYWxzKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgIGlmICh1c2VybmFtZSA9PT0gdGhpcy51c2VybmFtZSAmJiBwYXNzd29yZCA9PT0gdGhpcy5wYXNzd29yZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsZXI7IiwiY2xhc3MgRGVzdGluYXRpb25zUmVwbyB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLmFsbERlc3RpbmF0aW9ucyA9IGRhdGEuZGVzdGluYXRpb25zO1xuICB9XG5cbiAgZmluZERlc3RpbmF0aW9uQnlJRChkZXN0aW5hdGlvbklEKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsRGVzdGluYXRpb25zLmZpbmQoZGVzdGluYXRpb24gPT4gZGVzdGluYXRpb24uaWQgPT09IGRlc3RpbmF0aW9uSUQpO1xuICB9XG5cbiAgY2FsY1RyaXBDb3N0KGR1cmF0aW9uLCB0cmF2ZWxlcnMsIGRlc3RpbmF0aW9uSUQpIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHRoaXMuZmluZERlc3RpbmF0aW9uQnlJRChkZXN0aW5hdGlvbklEKTtcbiAgICBjb25zdCB0b3RhbFdpdGhDb21taXNzaW9uID0gKChkZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqIGR1cmF0aW9uKSArIChkZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uICogdHJhdmVsZXJzKSkgKiAxLjE7XG5cbiAgICByZXR1cm4gcGFyc2VJbnQodG90YWxXaXRoQ29tbWlzc2lvbi50b0ZpeGVkKDIpKTtcbiAgfVxuXG4gIGZpbmRJREJ5TmFtZShuYW1lKSB7XG4gICAgY29uc3QgZGVzaXJlZERlc3RpbmF0aW9uID0gdGhpcy5hbGxEZXN0aW5hdGlvbnMuZmluZChkZXN0aW5hdGlvbiA9PiBkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbi50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKG5hbWUudG9Mb3dlckNhc2UoKSkpO1xuICAgIFxuICAgIGlmIChkZXNpcmVkRGVzdGluYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGRlc2lyZWREZXN0aW5hdGlvbi5pZDtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVzdGluYXRpb25zUmVwbzsiLCJjbGFzcyBUcmF2ZWxlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXIpIHtcbiAgICB0aGlzLmlkID0gdXNlci5pZDtcbiAgICB0aGlzLm5hbWUgPSB1c2VyLm5hbWU7XG4gICAgdGhpcy50cmF2ZWxlclR5cGUgPSB1c2VyLnRyYXZlbGVyVHlwZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlcjsiLCJjbGFzcyBUcmF2ZWxlcnNSZXBvIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuYWxsVHJhdmVsZXJzID0gZGF0YS50cmF2ZWxlcnM7XG4gIH1cblxuICBjaGVja0ZvcklEKHVzZXJuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsVHJhdmVsZXJzLmZpbmQodHJhdmVsZXIgPT4gdHJhdmVsZXIuaWQgPT09IHVzZXJuYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlcnNSZXBvOyIsImNsYXNzIFRyaXBzUmVwbyB7XG4gIGNvbnN0cnVjdG9yKHRyaXBzRGF0YSkge1xuICAgIHRoaXMuYWxsVHJpcHMgPSB0cmlwc0RhdGEudHJpcHM7XG4gIH1cblxuICBmaWx0ZXJUcmF2ZWxlclRyaXBzKHRyYXZlbGVySUQpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxUcmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLnVzZXJJRCA9PT0gdHJhdmVsZXJJRCk7XG4gIH1cblxuICBmaWx0ZXJQZW5kaW5nVHJpcHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsVHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09IFwicGVuZGluZ1wiKTtcbiAgfVxuXG4gIGZpbmRUcmlwQnlUcmlwSUQodHJpcElEKSB7XG4gICAgcmV0dXJuIHRoaXMuYWxsVHJpcHMuZmluZCh0cmlwID0+IHRyaXAuaWQgPT09IHBhcnNlSW50KHRyaXBJRCkpO1xuICB9XG5cbiAgdG90YWxBbm51YWxUcmlwc0Nvc3QodHJhdmVsZXJJRCwgeWVhciwgZGVzdGluYXRpb25zUmVwbykge1xuICAgIGNvbnN0IGFubnVhbFRyaXBzID0gdGhpcy5hbGxUcmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLnVzZXJJRCA9PT0gdHJhdmVsZXJJRCAmJiB0cmlwLmRhdGUuaW5jbHVkZXMoeWVhcikpO1xuXG4gICAgcmV0dXJuIGFubnVhbFRyaXBzLnJlZHVjZSgodG90YWxDb3N0LCB0cmlwKSA9PiB7XG4gICAgICBjb25zdCB0cmlwQ29zdCA9IGRlc3RpbmF0aW9uc1JlcG8uY2FsY1RyaXBDb3N0KHRyaXAuZHVyYXRpb24sIHRyaXAudHJhdmVsZXJzLCB0cmlwLmRlc3RpbmF0aW9uSUQpO1xuICAgICAgdG90YWxDb3N0ICs9IHRyaXBDb3N0O1xuICAgICAgcmV0dXJuIHRvdGFsQ29zdDtcbiAgICB9LCAwKVxuICB9XG5cbiAgdG90YWxQZW5kaW5nVHJpcHNDb3N0KHRyYXZlbGVySUQsIGRlc3RpbmF0aW9uc1JlcG8pIHtcbiAgICBjb25zdCBwZW5kaW5nVHJpcHMgPSB0aGlzLmFsbFRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAudXNlcklEID09PSB0cmF2ZWxlcklEICYmIHRyaXAuc3RhdHVzID09PSBcInBlbmRpbmdcIik7XG5cbiAgICByZXR1cm4gcGVuZGluZ1RyaXBzLnJlZHVjZSgodG90YWxDb3N0LCB0cmlwKSA9PiB7XG4gICAgICBjb25zdCB0cmlwQ29zdCA9IGRlc3RpbmF0aW9uc1JlcG8uY2FsY1RyaXBDb3N0KHRyaXAuZHVyYXRpb24sIHRyaXAudHJhdmVsZXJzLCB0cmlwLmRlc3RpbmF0aW9uSUQpO1xuICAgICAgdG90YWxDb3N0ICs9IHRyaXBDb3N0O1xuICAgICAgcmV0dXJuIHRvdGFsQ29zdDtcbiAgICB9LCAwKSBcbiAgfVxuXG4gIHRvdGFsQW5udWFsQ29tbWlzc2lvbih5ZWFyLCBkZXN0aW5hdGlvbnNSZXBvKSB7XG4gICAgY29uc3QgYW5udWFsQWRtaW5UcmlwcyA9IHRoaXMuYWxsVHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5kYXRlLmluY2x1ZGVzKHllYXIpICYmIHRyaXAuc3RhdHVzID09PSBcImFwcHJvdmVkXCIpO1xuXG4gICAgcmV0dXJuIGFubnVhbEFkbWluVHJpcHMucmVkdWNlKCh0b3RhbENvc3QsIHRyaXApID0+IHtcbiAgICAgIGNvbnN0IHRyaXBDb3N0ID0gZGVzdGluYXRpb25zUmVwby5jYWxjVHJpcENvc3QodHJpcC5kdXJhdGlvbiwgdHJpcC50cmF2ZWxlcnMsIHRyaXAuZGVzdGluYXRpb25JRCk7XG4gICAgICB0b3RhbENvc3QgKz0gdHJpcENvc3Q7XG4gICAgICByZXR1cm4gdG90YWxDb3N0ICogMC4xO1xuICAgIH0sIDApXG4gIH1cblxuICBmaWx0ZXJUcmlwc1RvZGF5KGRhdGUpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxUcmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLmRhdGUgPT09IGRhdGUpO1xuICB9XG59IFxuXG5leHBvcnQgZGVmYXVsdCBUcmlwc1JlcG87Il0sInNvdXJjZVJvb3QiOiIifQ==