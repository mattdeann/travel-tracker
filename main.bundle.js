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
___CSS_LOADER_EXPORT___.push([module.i, "/* This is an example of using Sass, otherwise plain CSS works too*/\nbody {\n  display: grid;\n  grid-template-columns: 2fr 8fr 2fr;\n  grid-template-rows: 2fr 9fr 1fr;\n  grid-gap: 10px;\n  height: calc(100vh - 20px);\n  width: calc(100vw - 20px);\n  background: linear-gradient(to bottom right, #09071a, #191449);\n  font-family: BlenderProBold, sans-serif;\n  font-style: italic;\n  font-weight: 700;\n  font-size: 14px;\n  color: #191449; }\n\n.login-display {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  border: 5px solid #18F5FE;\n  box-shadow: 0 0 30px #F9F300 inset;\n  background: #B05CB4;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n  transition: all .3s ease-in-out; }\n  .login-display:hover, .login-displayfocus {\n    transform: scale(1.1); }\n  .login-display .login-button {\n    margin-top: 20px;\n    width: 8rem;\n    border-radius: 5px;\n    background-color: #F9F300;\n    color: #3D0E53;\n    font-weight: bolder;\n    transition: all .3s ease-in-out; }\n    .login-display .login-button:hover, .login-display .login-button:focus {\n      background-color: #3D0E53;\n      color: #D61289;\n      cursor: pointer; }\n\n.traveler-display {\n  grid-row: 1 / -1;\n  grid-column: 1 / -1;\n  display: grid;\n  grid-template-columns: 2fr 8fr 2fr;\n  grid-template-rows: 2fr 9fr 1fr; }\n\n.traveler-header {\n  grid-column: 1 / -1;\n  grid-row: 1 / 2;\n  background: linear-gradient(to bottom, #3D0E53, #3D0E53, #191449);\n  border: 5px solid #D61289;\n  margin: 3px;\n  box-shadow: 0px 0px 5px 2px #F9F300;\n  padding: 10px;\n  display: flex;\n  justify-content: center; }\n  .traveler-header h1 {\n    color: #18F5FE; }\n\n.traveler-nav {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  background: linear-gradient(to bottom, #B05CB4, #D61289, #18F5FE, #2B7FB5);\n  border: 5px solid #D61289;\n  margin: 3px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  min-height: 400px; }\n  .traveler-nav input {\n    width: 8.5rem; }\n  .traveler-nav .trip-request {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    margin: 10px; }\n  .traveler-nav .quote-button {\n    margin-top: 20px;\n    width: 8rem;\n    border-radius: 5px;\n    background-color: #F9F300;\n    color: #3D0E53;\n    font-weight: bolder;\n    transition: all .3s ease-in-out; }\n    .traveler-nav .quote-button:hover, .traveler-nav .quote-button:focus {\n      background-color: #3D0E53;\n      color: #D61289;\n      cursor: pointer; }\n  .traveler-nav label {\n    margin-top: 2rem; }\n\n.traveler-main {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background: linear-gradient(to bottom, #3D0E53, #191449);\n  border: 5px solid #D61289;\n  margin: 3px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-gap: 15px;\n  padding: 10px;\n  overflow-y: auto; }\n  .traveler-main article {\n    background-color: #B05CB4;\n    border: 5px solid #D61289;\n    box-shadow: 4px 4px #2B7FB5, 7px 7px #18F5FE;\n    color: #3D0E53;\n    font-weight: lighter;\n    font-size: 18px;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    transition: all .3s ease-in-out; }\n    .traveler-main article:hover, .traveler-main articlefocus {\n      transform: scale(0.95); }\n    .traveler-main article .location-image {\n      height: 100%;\n      width: 100%; }\n    .traveler-main article .trip-summary {\n      background-color: rgba(255, 255, 255, 0.523);\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      padding: 15px;\n      height: 80%;\n      width: 75%; }\n    .traveler-main article p {\n      align-self: center; }\n    .traveler-main article .travelers {\n      margin-bottom: 0; }\n    .traveler-main article .status {\n      margin-bottom: 0; }\n    .traveler-main article .value {\n      margin-top: 0; }\n\n::-webkit-scrollbar {\n  width: 15px; }\n\n::-webkit-scrollbar-track {\n  background: white; }\n\n::-webkit-scrollbar-thumb {\n  background: #F9F300; }\n\n::-webkit-scrollbar-thumb:hover {\n  background: #18F5FE; }\n\n.traveler-aside {\n  grid-column: 3 / 4;\n  grid-row: 2 / 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  background: linear-gradient(to bottom, #B05CB4, #D61289, #18F5FE, #2B7FB5);\n  border: 5px solid #D61289;\n  margin: 3px; }\n  .traveler-aside .title {\n    margin-top: 2rem;\n    margin-bottom: 0.5rem; }\n  .traveler-aside .value {\n    margin-top: 0; }\n\n.traveler-footer {\n  grid-column: 1 / -1;\n  grid-row: 3 / 4;\n  background: linear-gradient(to bottom, #3D0E53, #3D0E53, #191449);\n  border: 5px solid #D61289;\n  margin: 3px; }\n\n.traveler-modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 30px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.4); }\n  .traveler-modal .modal-content {\n    background-color: #191449;\n    margin: 3rem auto;\n    padding: 20px;\n    border: 1px solid #888;\n    height: fit-content;\n    width: 75%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center; }\n    .traveler-modal .modal-content .close-quote {\n      align-self: flex-end;\n      padding-top: 0;\n      padding-right: 5px;\n      padding-bottom: 15px;\n      color: #B05CB4;\n      font-size: 15px;\n      font-weight: bold;\n      transition: all .3s ease-in-out; }\n      .traveler-modal .modal-content .close-quote:hover, .traveler-modal .modal-content .close-quotefocus {\n        transform: scale(1.1); }\n      .traveler-modal .modal-content .close-quote:hover, .traveler-modal .modal-content .close-quote:focus {\n        cursor: pointer;\n        color: #D61289; }\n    .traveler-modal .modal-content .quote-image {\n      background-size: cover;\n      padding-top: 0;\n      padding: 1rem;\n      height: 20rem; }\n    .traveler-modal .modal-content .estimate-display {\n      margin-top: 1rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      font-size: 1rem; }\n    .traveler-modal .modal-content .estimated-cost {\n      display: flex;\n      justify-content: center;\n      color: #18F5FE; }\n    .traveler-modal .modal-content .request-button {\n      font-style: italic;\n      font-size: 1rem;\n      height: 5rem;\n      width: 20rem;\n      margin-top: 2rem;\n      background-color: #D61289;\n      color: #191449;\n      transition: all .3s ease-in-out; }\n      .traveler-modal .modal-content .request-button:hover, .traveler-modal .modal-content .request-buttonfocus {\n        transform: scale(1.1); }\n      .traveler-modal .modal-content .request-button:hover, .traveler-modal .modal-content .request-button:focus {\n        cursor: pointer;\n        background-color: #3D0E53;\n        color: #D61289; }\n\n.admin-display {\n  grid-row: 1 / -1;\n  grid-column: 1 / -1;\n  padding: 10px;\n  overflow-y: auto;\n  display: grid;\n  grid-template-columns: 2fr 8fr;\n  grid-template-rows: 2fr 10fr; }\n  .admin-display .admin-header {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n    color: #18F5FE;\n    display: flex;\n    justify-content: center;\n    background: linear-gradient(to bottom, #3D0E53, #3D0E53, #191449);\n    border: 5px solid #D61289;\n    margin: 3px; }\n  .admin-display .admin-nav {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    border: 2px solid #D61289;\n    background: linear-gradient(to bottom, #B05CB4, #D61289, #18F5FE, #2B7FB5);\n    border: 5px solid #D61289;\n    margin: 3px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    min-height: 400px; }\n    .admin-display .admin-nav input {\n      width: 8.5rem; }\n    .admin-display .admin-nav .trip-request {\n      display: flex;\n      flex-direction: column;\n      justify-content: space-evenly;\n      align-items: center;\n      margin: 10px; }\n    .admin-display .admin-nav .quote-button {\n      margin-top: 20px;\n      width: 8rem;\n      border-radius: 5px;\n      background-color: #F9F300;\n      color: #3D0E53;\n      font-weight: bolder;\n      transition: all .3s ease-in-out; }\n      .admin-display .admin-nav .quote-button:hover, .admin-display .admin-nav .quote-button:focus {\n        background-color: #3D0E53;\n        color: #D61289;\n        cursor: pointer; }\n  .admin-display .admin-modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    padding-top: 30px;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: black;\n    background-color: rgba(0, 0, 0, 0.4); }\n    .admin-display .admin-modal .modal-content {\n      background-color: #191449;\n      margin: 3rem auto;\n      padding: 20px;\n      border: 1px solid #888;\n      height: fit-content;\n      width: 75%;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: center; }\n      .admin-display .admin-modal .modal-content .close-quote {\n        align-self: flex-end;\n        padding-top: 0;\n        padding-right: 5px;\n        padding-bottom: 15px;\n        color: #B05CB4;\n        font-size: 15px;\n        font-weight: bold;\n        transition: all .3s ease-in-out; }\n        .admin-display .admin-modal .modal-content .close-quote:hover, .admin-display .admin-modal .modal-content .close-quotefocus {\n          transform: scale(1.1); }\n        .admin-display .admin-modal .modal-content .close-quote:hover, .admin-display .admin-modal .modal-content .close-quote:focus {\n          cursor: pointer;\n          color: #D61289; }\n      .admin-display .admin-modal .modal-content .quote-image {\n        background-size: cover;\n        padding-top: 0;\n        padding: 1rem;\n        height: 20rem; }\n      .admin-display .admin-modal .modal-content .estimate-display {\n        margin-top: 1rem;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        font-size: 1rem; }\n      .admin-display .admin-modal .modal-content .estimated-cost {\n        display: flex;\n        justify-content: center;\n        color: #18F5FE; }\n      .admin-display .admin-modal .modal-content .request-button {\n        font-style: italic;\n        font-size: 1rem;\n        height: 5rem;\n        width: 20rem;\n        margin-top: 2rem;\n        background-color: #D61289;\n        color: #191449;\n        transition: all .3s ease-in-out; }\n        .admin-display .admin-modal .modal-content .request-button:hover, .admin-display .admin-modal .modal-content .request-buttonfocus {\n          transform: scale(1.1); }\n        .admin-display .admin-modal .modal-content .request-button:hover, .admin-display .admin-modal .modal-content .request-button:focus {\n          cursor: pointer;\n          background-color: #3D0E53;\n          color: #D61289; }\n    .admin-display .admin-modal .close-approval {\n      align-self: flex-end;\n      padding-top: 0;\n      padding-right: 5px;\n      padding-bottom: 15px;\n      color: #B05CB4;\n      font-size: 15px;\n      font-weight: bold;\n      transition: all .3s ease-in-out; }\n      .admin-display .admin-modal .close-approval:hover, .admin-display .admin-modal .close-approvalfocus {\n        transform: scale(1.1); }\n      .admin-display .admin-modal .close-approval:hover, .admin-display .admin-modal .close-approval:focus {\n        cursor: pointer;\n        color: #D61289; }\n    .admin-display .admin-modal .pending-trip {\n      padding-top: 0;\n      padding: 1rem;\n      height: 20rem;\n      width: 30rem;\n      background-size: cover; }\n      .admin-display .admin-modal .pending-trip article {\n        background-color: #B05CB4;\n        border: 5px solid #D61289;\n        box-shadow: 4px 4px #2B7FB5, 7px 7px #18F5FE;\n        color: #3D0E53;\n        font-weight: lighter;\n        font-size: 18px;\n        background-size: cover;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        transition: all .3s ease-in-out; }\n        .admin-display .admin-modal .pending-trip article:hover, .admin-display .admin-modal .pending-trip articlefocus {\n          transform: scale(0.95); }\n        .admin-display .admin-modal .pending-trip article .location-image {\n          height: 100%;\n          width: 100%; }\n        .admin-display .admin-modal .pending-trip article .trip-summary {\n          background-color: rgba(255, 255, 255, 0.523);\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          align-items: center;\n          padding: 15px;\n          height: 80%;\n          width: 75%; }\n        .admin-display .admin-modal .pending-trip article p {\n          align-self: center; }\n        .admin-display .admin-modal .pending-trip article .travelers {\n          margin-bottom: 0; }\n        .admin-display .admin-modal .pending-trip article .status {\n          margin-bottom: 0; }\n        .admin-display .admin-modal .pending-trip article .value {\n          margin-top: 0; }\n    .admin-display .admin-modal .trip-summary {\n      background-color: rgba(255, 255, 255, 0.523);\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: center;\n      height: 90%; }\n      .admin-display .admin-modal .trip-summary .destination {\n        margin-top: 0; }\n      .admin-display .admin-modal .trip-summary .travelers {\n        margin-bottom: 0; }\n      .admin-display .admin-modal .trip-summary .status {\n        margin-bottom: 0; }\n    .admin-display .admin-modal .approve-button {\n      margin-top: 20px;\n      width: 8rem;\n      border-radius: 5px;\n      background-color: #F9F300;\n      color: #3D0E53;\n      font-weight: bolder;\n      transition: all .3s ease-in-out; }\n      .admin-display .admin-modal .approve-button:hover, .admin-display .admin-modal .approve-button:focus {\n        background-color: #3D0E53;\n        color: #D61289;\n        cursor: pointer; }\n    .admin-display .admin-modal .deny-button {\n      margin-top: 20px;\n      width: 8rem;\n      border-radius: 5px;\n      background-color: #F9F300;\n      color: #3D0E53;\n      font-weight: bolder;\n      transition: all .3s ease-in-out; }\n      .admin-display .admin-modal .deny-button:hover, .admin-display .admin-modal .deny-button:focus {\n        background-color: #3D0E53;\n        color: #D61289;\n        cursor: pointer; }\n  .admin-display main {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    margin-left: 0.5rem;\n    grid-gap: 15px;\n    overflow-y: auto; }\n    .admin-display main article {\n      background-color: #B05CB4;\n      border: 5px solid #D61289;\n      box-shadow: 4px 4px #2B7FB5, 7px 7px #18F5FE;\n      color: #3D0E53;\n      font-weight: lighter;\n      font-size: 18px;\n      background-size: cover;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      transition: all .3s ease-in-out; }\n      .admin-display main article:hover, .admin-display main articlefocus {\n        transform: scale(0.95); }\n      .admin-display main article .location-image {\n        height: 100%;\n        width: 100%; }\n      .admin-display main article .trip-summary {\n        background-color: rgba(255, 255, 255, 0.523);\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        padding: 15px;\n        height: 80%;\n        width: 75%; }\n      .admin-display main article p {\n        align-self: center; }\n      .admin-display main article .travelers {\n        margin-bottom: 0; }\n      .admin-display main article .status {\n        margin-bottom: 0; }\n      .admin-display main article .value {\n        margin-top: 0; }\n    .admin-display main .date {\n      margin-top: 0; }\n    .admin-display main .duration {\n      margin-bottom: 0; }\n\n.hidden {\n  display: none; }\n\n@media screen and (max-width: 800px) {\n  body {\n    height: 100vh;\n    width: calc(100vw - 20px);\n    display: grid; }\n  .traveler-header {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1; }\n  .traveler-nav {\n    justify-content: flex-start;\n    grid-row: 2 / 3;\n    grid-column: 1 / -1;\n    min-height: 20rem;\n    overflow-y: scroll; }\n  .traveler-main {\n    grid-row: 3 / 4;\n    grid-column: 1 / -1;\n    background: linear-gradient(to bottom, #3D0E53, #191449);\n    border: 5px solid #D61289;\n    margin: 3px;\n    display: grid;\n    grid-template-columns: 1fr;\n    height: 15rem;\n    overflow-y: auto; }\n    .traveler-main article {\n      background-color: #B05CB4;\n      border: 5px solid #D61289;\n      box-shadow: 4px 4px #2B7FB5, 7px 7px #18F5FE;\n      color: #3D0E53;\n      font-weight: lighter;\n      font-size: 18px;\n      background-size: cover;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      transition: all .3s ease-in-out; }\n      .traveler-main article:hover, .traveler-main articlefocus {\n        transform: scale(0.95); }\n      .traveler-main article .location-image {\n        height: 100%;\n        width: 100%; }\n      .traveler-main article .trip-summary {\n        background-color: rgba(255, 255, 255, 0.523);\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        padding: 15px;\n        height: 80%;\n        width: 75%; }\n      .traveler-main article p {\n        align-self: center; }\n      .traveler-main article .travelers {\n        margin-bottom: 0; }\n      .traveler-main article .status {\n        margin-bottom: 0; }\n      .traveler-main article .value {\n        margin-top: 0; }\n  .traveler-aside {\n    grid-row: 4 / 5;\n    grid-column: 1 / -1; }\n  .quote-image {\n    background-size: cover;\n    padding-top: 0;\n    background-size: cover;\n    width: 70vw; } }\n", "",{"version":3,"sources":["webpack://./src/css/base.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_nav_styles.scss","webpack://./src/css/_trip_styles.scss","webpack://./src/css/_modal_styles.scss","webpack://./src/css/_admin_display.scss","webpack://./src/css/_media_queries.scss"],"names":[],"mappings":"AAAA,mEAAA;AAQA;ECME,aAAa;EACb,kCDNgC;ECOhC,+BDP6C;EAC7C,cAAc;EACd,0BAA0B;EAC1B,yBAAyB;EACzB,8DAAoE;EACpE,uCCb+B;EDc/B,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,cCfqB,EAAA;;ADkBvB;EACE,kBAAkB;EAClB,eAAe;EACf,yBChBkB;EDiBlB,kCAAkC;EAClC,mBCrBc;EAed,aAAa;EACb,sBDM2B;ECL3B,6BDKyC;ECJzC,mBDIiD;EC8C/C,+BAA+B,EAAA;EDpDnC;ICwDI,qBAAqB,EAAA;EDxDzB;ICkBE,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,yBAjCc;IAkCd,cAvCmB;IAwCnB,mBAAmB;IACnB,+BAA+B,EAAA;IDxBjC;MC4BI,yBA7CiB;MA8CjB,cA5CU;MA6CV,eAAe,EAAA;;ADhBnB;EACE,gBAAgB;EAChB,mBAAmB;ECvBnB,aAAa;EACb,kCDuBgC;ECtBhC,+BDsB6C,EAAA;;AAG/C;EACE,mBAAmB;EACnB,eAAe;EChBf,iEAAkF;EAClF,yBAtBY;EAuBZ,WAAW;EDgBX,mCCpCc;EDqCd,aAAa;EACb,aAAa;EACb,uBAAuB,EAAA;EAPzB;IAUI,cC3CgB,EAAA;;AD+CpB;EACE,kBAAkB;EAClB,eAAe;ECxBf,0EAA0E;EAC1E,yBA5BY;EA6BZ,WAAW;EAfX,aAAa;EACb,sBDsC2B;ECrC3B,2BDqCuC;ECpCvC,mBDoC+C;EExD/C,iBAAiB,EAAA;EFoDnB;IEjDI,aAAa,EAAA;EFiDjB;IE9CI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,mBAAmB;IACnB,YAAY,EAAA;EF0ChB;IChBE,gBAAgB;IAChB,WAAW;IACX,kBAAkB;IAClB,yBAjCc;IAkCd,cAvCmB;IAwCnB,mBAAmB;IACnB,+BAA+B,EAAA;IDUjC;MCNI,yBA7CiB;MA8CjB,cA5CU;MA6CV,eAAe,EAAA;EDInB;IAQI,gBAAgB,EAAA;;AAIpB;EACE,kBAAkB;EAClB,eAAe;EACf,wDAAoE;EACpE,yBCjEY;EDkEZ,WAAW;EACX,aAAa;EACb,2DAA2D;EAC3D,cAAc;EACd,aAAa;EACb,gBAAgB,EAAA;EAVlB;IG/DI,yBFCY;IEAZ,yBFCU;IEAV,4CFEgB;IEDhB,cFHiB;IEIjB,oBAAoB;IACpB,eAAe;IACf,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IFoErB,+BAA+B,EAAA;IDfjC;MCmBE,sBAAsB,EAAA;IDnBxB;MGhDM,YAAY;MACZ,WAAW,EAAA;IH+CjB;MG3CM,4CAA4C;MAC5C,aAAa;MACb,sBAAsB;MACtB,uBAAuB;MACvB,mBAAmB;MACnB,aAAa;MACb,WAAW;MACX,UAAU,EAAA;IHoChB;MGhCM,kBAAkB,EAAA;IHgCxB;MG5BM,gBAAgB,EAAA;IH4BtB;MGxBM,gBAAgB,EAAA;IHwBtB;MGpBM,aAAa,EAAA;;AFqDnB;EACE,WAAW,EAAA;;AAGb;EACE,iBAAiB,EAAA;;AAGnB;EACE,mBApGc,EAAA;;AAuGhB;EACE,mBAzGkB,EAAA;;AD4EpB;EACE,kBAAkB;EAClB,eAAe;EClEf,aAAa;EACb,sBDkE2B;ECjE3B,2BDiEuC;EChEvC,mBDgE+C;ECtD/C,0EAA0E;EAC1E,yBA5BY;EA6BZ,WAAW,EAAA;EDiDb;IAOI,gBAAgB;IAChB,qBAAqB,EAAA;EARzB;IAYI,aAAa,EAAA;;AAKjB;EACE,mBAAmB;EACnB,eAAe;EC5Ef,iEAAkF;EAClF,yBAtBY;EAuBZ,WAAW,EAAA;;AD8Eb;EIxGE,aAAa;EACb,eAAe;EACf,UAAU;EACV,iBAAiB;EACjB,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,uBAA4B;EAC5B,oCAAiC,EAAA;EJ8FnC;II3FI,yBHbmB;IGcnB,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,UAAU;IACV,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,mBAAmB,EAAA;IJkFvB;MCnDE,oBAAoB;MACpB,cAAc;MACd,kBAAkB;MAClB,oBAAoB;MACpB,cAvDc;MAwDd,eAAe;MACf,iBAAiB;MAWf,+BAA+B,EAAA;MDkCnC;QC9BI,qBAAqB,EAAA;MD8BzB;QCxCI,eAAe;QACf,cA9DU,EAAA;IDqGd;MI3EM,sBAAsB;MACtB,cAAc;MACd,aAAa;MACb,aAAa,EAAA;IJwEnB;MIpEM,gBAAgB;MAChB,aAAa;MACb,sBAAsB;MACtB,uBAAuB;MACvB,mBAAmB;MACnB,eAAe,EAAA;IJ+DrB;MI3DM,aAAa;MACb,uBAAuB;MACvB,cH1Cc,EAAA;IDmGpB;MIrDM,kBAAkB;MAClB,eAAe;MACf,YAAY;MACZ,YAAY;MACZ,gBAAgB;MAChB,yBHrDQ;MGsDR,cHzDiB;MAsEnB,+BAA+B,EAAA;MDkCnC;QC9BI,qBAAqB,EAAA;MD8BzB;QCdI,eAAe;QACf,yBA1FiB;QA2FjB,cAzFU,EAAA;;ADyGd;EK1GE,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EJMhB,aAAa;EACb,8BIN4B;EJO5B,4BIPsC,EAAA;ELsGxC;IKnGI,eAAe;IACf,mBAAmB;IACnB,cJNgB;IIOhB,aAAa;IACb,uBAAuB;IJWzB,iEAAkF;IAClF,yBAtBY;IAuBZ,WAAW,EAAA;EDkFb;IK1FI,eAAe;IACf,kBAAkB;IAClB,yBJjBU;IA2BZ,0EAA0E;IAC1E,yBA5BY;IA6BZ,WAAW;IAfX,aAAa;IACb,sBII6B;IJH7B,uBIGqC;IJFrC,mBIE6C;IHtB7C,iBAAiB,EAAA;IF4GnB;MEzGI,aAAa,EAAA;IFyGjB;MEtGI,aAAa;MACb,sBAAsB;MACtB,6BAA6B;MAC7B,mBAAmB;MACnB,YAAY,EAAA;IFkGhB;MCxEE,gBAAgB;MAChB,WAAW;MACX,kBAAkB;MAClB,yBAjCc;MAkCd,cAvCmB;MAwCnB,mBAAmB;MACnB,+BAA+B,EAAA;MDkEjC;QC9DI,yBA7CiB;QA8CjB,cA5CU;QA6CV,eAAe,EAAA;ED4DnB;II5GE,aAAa;IACb,eAAe;IACf,UAAU;IACV,iBAAiB;IACjB,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,uBAA4B;IAC5B,oCAAiC,EAAA;IJkGnC;MI/FI,yBHbmB;MGcnB,iBAAiB;MACjB,aAAa;MACb,sBAAsB;MACtB,mBAAmB;MACnB,UAAU;MACV,aAAa;MACb,sBAAsB;MACtB,2BAA2B;MAC3B,mBAAmB,EAAA;MJsFvB;QCvDE,oBAAoB;QACpB,cAAc;QACd,kBAAkB;QAClB,oBAAoB;QACpB,cAvDc;QAwDd,eAAe;QACf,iBAAiB;QAWf,+BAA+B,EAAA;QDsCnC;UClCI,qBAAqB,EAAA;QDkCzB;UC5CI,eAAe;UACf,cA9DU,EAAA;MDyGd;QI/EM,sBAAsB;QACtB,cAAc;QACd,aAAa;QACb,aAAa,EAAA;MJ4EnB;QIxEM,gBAAgB;QAChB,aAAa;QACb,sBAAsB;QACtB,uBAAuB;QACvB,mBAAmB;QACnB,eAAe,EAAA;MJmErB;QI/DM,aAAa;QACb,uBAAuB;QACvB,cH1Cc,EAAA;MDuGpB;QIzDM,kBAAkB;QAClB,eAAe;QACf,YAAY;QACZ,YAAY;QACZ,gBAAgB;QAChB,yBHrDQ;QGsDR,cHzDiB;QAsEnB,+BAA+B,EAAA;QDsCnC;UClCI,qBAAqB,EAAA;QDkCzB;UClBI,eAAe;UACf,yBA1FiB;UA2FjB,cAzFU,EAAA;IDyGd;MCvDE,oBAAoB;MACpB,cAAc;MACd,kBAAkB;MAClB,oBAAoB;MACpB,cAvDc;MAwDd,eAAe;MACf,iBAAiB;MAWf,+BAA+B,EAAA;MDsCnC;QClCI,qBAAqB,EAAA;MDkCzB;QC5CI,eAAe;QACf,cA9DU,EAAA;IDyGd;MKzEM,cAAc;MACd,aAAa;MACb,aAAa;MACb,YAAY;MACZ,sBAAsB,EAAA;MLqE5B;QG3GI,yBFCY;QEAZ,yBFCU;QEAV,4CFEgB;QEDhB,cFHiB;QEIjB,oBAAoB;QACpB,eAAe;QACf,sBAAsB;QACtB,aAAa;QACb,sBAAsB;QACtB,uBAAuB;QACvB,mBAAmB;QFoErB,+BAA+B,EAAA;QD6BjC;UCzBE,sBAAsB,EAAA;QDyBxB;UG5FM,YAAY;UACZ,WAAW,EAAA;QH2FjB;UGvFM,4CAA4C;UAC5C,aAAa;UACb,sBAAsB;UACtB,uBAAuB;UACvB,mBAAmB;UACnB,aAAa;UACb,WAAW;UACX,UAAU,EAAA;QHgFhB;UG5EM,kBAAkB,EAAA;QH4ExB;UGxEM,gBAAgB,EAAA;QHwEtB;UGpEM,gBAAgB,EAAA;QHoEtB;UGhEM,aAAa,EAAA;IHgEnB;MKjEM,4CAA4C;MJ1BhD,aAAa;MACb,sBI0B+B;MJzB/B,2BIyB2C;MJxB3C,mBIwBmD;MAC/C,WAAW,EAAA;ML+DjB;QK5DQ,aAAa,EAAA;ML4DrB;QKxDQ,gBAAgB,EAAA;MLwDxB;QKpDQ,gBAAgB,EAAA;ILoDxB;MCxEE,gBAAgB;MAChB,WAAW;MACX,kBAAkB;MAClB,yBAjCc;MAkCd,cAvCmB;MAwCnB,mBAAmB;MACnB,+BAA+B,EAAA;MDkEjC;QC9DI,yBA7CiB;QA8CjB,cA5CU;QA6CV,eAAe,EAAA;ID4DnB;MCxEE,gBAAgB;MAChB,WAAW;MACX,kBAAkB;MAClB,yBAjCc;MAkCd,cAvCmB;MAwCnB,mBAAmB;MACnB,+BAA+B,EAAA;MDkEjC;QC9DI,yBA7CiB;QA8CjB,cA5CU;QA6CV,eAAe,EAAA;ED4DnB;IKtCI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,2DAA2D;IAC3D,mBAAmB;IACnB,cAAc;IACd,gBAAgB,EAAA;ILgCpB;MG3GI,yBFCY;MEAZ,yBFCU;MEAV,4CFEgB;MEDhB,cFHiB;MEIjB,oBAAoB;MACpB,eAAe;MACf,sBAAsB;MACtB,aAAa;MACb,sBAAsB;MACtB,uBAAuB;MACvB,mBAAmB;MFoErB,+BAA+B,EAAA;MD6BjC;QCzBE,sBAAsB,EAAA;MDyBxB;QG5FM,YAAY;QACZ,WAAW,EAAA;MH2FjB;QGvFM,4CAA4C;QAC5C,aAAa;QACb,sBAAsB;QACtB,uBAAuB;QACvB,mBAAmB;QACnB,aAAa;QACb,WAAW;QACX,UAAU,EAAA;MHgFhB;QG5EM,kBAAkB,EAAA;MH4ExB;QGxEM,gBAAgB,EAAA;MHwEtB;QGpEM,gBAAgB,EAAA;MHoEtB;QGhEM,aAAa,EAAA;IHgEnB;MK5BM,aAAa,EAAA;IL4BnB;MKxBM,gBAAgB,EAAA;;AL4BtB;EACE,aAAa,EAAA;;AMjHb;EACE;IACE,aAAa;IACb,yBAAyB;IACzB,aAAa,EAAA;EAGf;IACE,eAAe;IACf,mBAAmB,EAAA;EAGrB;IACE,2BAA2B;IAC3B,eAAe;IACf,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB,EAAA;EAGpB;IACE,eAAe;IACf,mBAAmB;IACnB,wDAAoE;IACpE,yBLrBQ;IKsBR,WAAW;IACX,aAAa;IACb,0BAA0B;IAC1B,aAAa;IACb,gBAAgB,EAAA;IH7BpB;MACE,yBFCY;MEAZ,yBFCU;MEAV,4CFEgB;MEDhB,cFHiB;MEIjB,oBAAoB;MACpB,eAAe;MACf,sBAAsB;MACtB,aAAa;MACb,sBAAsB;MACtB,uBAAuB;MACvB,mBAAmB;MFoErB,+BAA+B,EAAA;MAE/B;QAEA,sBAAsB,EAAA;MEpEpB;QACE,YAAY;QACZ,WAAW,EAAA;MAGb;QACE,4CAA4C;QAC5C,aAAa;QACb,sBAAsB;QACtB,uBAAuB;QACvB,mBAAmB;QACnB,aAAa;QACb,WAAW;QACX,UAAU,EAAA;MAGZ;QACE,kBAAkB,EAAA;MAGpB;QACE,gBAAgB,EAAA;MAGlB;QACE,gBAAgB,EAAA;MAGlB;QACE,aAAa,EAAA;EGZf;IACE,eAAe;IACf,mBAAmB,EAAA;EAGrB;IACE,sBAAsB;IACtB,cAAc;IACd,sBAAsB;IACtB,WAAW,EAAA,EACZ","sourcesContent":["/* This is an example of using Sass, otherwise plain CSS works too*/\n@import \"variables\";\n@import \"nav_styles\";\n@import \"trip_styles\";\n@import \"modal_styles\";\n@import \"admin_display\";\n@import \"media_queries\";\n\nbody {\n  @include gridDisplay(2fr 8fr 2fr, 2fr 9fr 1fr);\n  grid-gap: 10px;\n  height: calc(100vh - 20px);\n  width: calc(100vw - 20px);\n  background: linear-gradient(to bottom right, $black, $darker-purple);\n  font-family: $font;\n  font-style: italic;\n  font-weight: 700;\n  font-size: 14px; \n  color: $darker-purple;\n}\n\n.login-display {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  border: 5px solid $light-blue;\n  box-shadow: 0 0 30px $yellow inset;\n  background: $purple;\n  @include flexDisplay(column, space-evenly, center);\n  @include grow;\n\n  .login-button {\n    @include buttonStyles;\n  }\n}\n\n.traveler-display {\n  grid-row: 1 / -1;\n  grid-column: 1 / -1;\n  @include gridDisplay(2fr 8fr 2fr, 2fr 9fr 1fr);\n}\n\n.traveler-header {\n  grid-column: 1 / -1;\n  grid-row: 1 / 2;\n  @include headerFooterStyles;\n  box-shadow: 0px 0px 5px 2px $yellow;\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n\n  h1 {\n    color: $light-blue;\n  }\n}\n\n.traveler-nav {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  @include sideStyles;\n  @include flexDisplay(column, flex-start, center);\n  @include navStyles;\n\n  label {\n    margin-top: 2rem;\n  }\n}\n\n.traveler-main {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  background: linear-gradient(to bottom, $dark-purple, $darker-purple);\n  border: $grid-border;\n  margin: 3px;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-gap: 15px;\n  padding: 10px;\n  overflow-y: auto;\n  @include tripStyles;\n}\n\n@include scrollbar;\n\n\n.traveler-aside {\n  grid-column: 3 / 4;\n  grid-row: 2 / 3;\n  @include flexDisplay(column, flex-start, center);\n  @include sideStyles;\n\n  .title {\n    margin-top: 2rem;\n    margin-bottom: 0.5rem;\n  }\n\n  .value {\n    margin-top: 0;\n  }\n\n}\n\n.traveler-footer {\n  grid-column: 1 / -1;\n  grid-row: 3 / 4;\n  @include headerFooterStyles;\n}\n\n.traveler-modal {\n  @include modalStyles;\n}\n\n.admin-display {\n  @include adminDisplay;\n}\n\n.hidden {\n  display: none;\n}\n\n// MEDIA QUERIES\n@include mobile;","// TYPE / COLORS\n$font: BlenderProBold, sans-serif;\n$black: #09071a;\n$darker-purple: #191449;\n$dark-purple: #3D0E53;\n$purple: #B05CB4;\n$pink: #D61289;\n$blue: #2B7FB5;\n$light-blue: #18F5FE;\n$yellow: #F9F300;\n$grid-border: 5px solid $pink;\n\n// MIXINS\n@mixin gridDisplay($columns, $rows) {\n  display: grid;\n  grid-template-columns: $columns;\n  grid-template-rows: $rows;\n};\n\n@mixin flexDisplay($direction, $justify, $align) {\n  display: flex;\n  flex-direction: $direction;\n  justify-content: $justify;\n  align-items: $align;\n};\n\n@mixin headerFooterStyles() {\n  background: linear-gradient(to bottom, $dark-purple, $dark-purple, $darker-purple);\n  border: $grid-border;\n  margin: 3px;\n}\n\n@mixin sideStyles() {\n  background: linear-gradient(to bottom, $purple, $pink, $light-blue, $blue);\n  border: $grid-border;\n  margin: 3px;\n}\n\n@mixin buttonStyles() {\n  margin-top: 20px;\n  width: 8rem;\n  border-radius: 5px;\n  background-color: $yellow;\n  color: $dark-purple;\n  font-weight: bolder;\n  transition: all .3s ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: $dark-purple;\n    color: $pink;\n    cursor: pointer;\n  }\n}\n\n@mixin closeButtonStyles() {\n  align-self: flex-end;\n  padding-top: 0;\n  padding-right: 5px;\n  padding-bottom: 15px;\n  color: $purple;\n  font-size: 15px;\n  font-weight: bold;\n  @include grow;\n\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    color: $pink;\n  }\n}\n\n@mixin grow() {\n    transition: all .3s ease-in-out; \n  \n    &:hover,\n    &focus { \n    transform: scale(1.1); \n    }\n}\n\n@mixin shrink() {\n  transition: all .3s ease-in-out; \n\n  &:hover,\n  &focus { \n  transform: scale(0.95); \n  }\n}\n\n@mixin hover() {\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    background-color: $dark-purple;\n    color: $pink;\n  }\n}\n\n@mixin scrollbar() {\n::-webkit-scrollbar {\n  width: 15px;\n}\n\n::-webkit-scrollbar-track {\n  background: white;\n}\n\n::-webkit-scrollbar-thumb {\n  background: $yellow;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: $light-blue;\n}\n}","@import \"variables\";\n\n@mixin navStyles() {\n  min-height: 400px;\n\n  input {\n    width: 8.5rem;\n  }\n  .trip-request {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n    margin: 10px;\n  }\n\n  .quote-button {\n    @include buttonStyles;\n  }\n}","@import \"variables\";\n\n@mixin tripStyles() {\n  article {\n    background-color: $purple;\n    border: $grid-border;\n    box-shadow: 4px 4px $blue, 7px 7px $light-blue;\n    color: $dark-purple;\n    font-weight: lighter;\n    font-size: 18px;\n    background-size: cover;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    @include shrink;\n\n    .location-image {\n      height: 100%;\n      width: 100%;\n    }\n\n    .trip-summary {\n      background-color: rgba(255, 255, 255, 0.523);\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;;\n      padding: 15px;\n      height: 80%;\n      width: 75%;\n    }\n\n    p {\n      align-self: center;\n    }\n\n    .travelers {\n      margin-bottom: 0;\n    }\n\n    .status {\n      margin-bottom: 0;\n    }\n\n    .value {\n      margin-top: 0;\n    }\n  }\n}","@import \"variables\";\n\n@mixin modalStyles() {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 30px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0,0.4);\n\n  .modal-content {\n    background-color: $darker-purple;\n    margin: 3rem auto;\n    padding: 20px;\n    border: 1px solid #888;\n    height: fit-content;\n    width: 75%;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n\n    .close-quote {\n      @include closeButtonStyles;\n    }\n\n    .quote-image {\n      background-size: cover;\n      padding-top: 0;\n      padding: 1rem;\n      height: 20rem;\n    }\n\n    .estimate-display {\n      margin-top: 1rem;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      font-size: 1rem;\n    }\n\n    .estimated-cost {\n      display: flex;\n      justify-content: center;\n      color: $light-blue;\n    }\n\n    .request-button {\n      font-style: italic;\n      font-size: 1rem;\n      height: 5rem;\n      width: 20rem;\n      margin-top: 2rem;\n      background-color: $pink;\n      color: $darker-purple;\n      @include grow;\n      @include hover;\n\n    }\n  }\n}","@import \"variables\";\n@import \"trip_styles\";\n@import \"modal_styles\";\n\n@mixin adminDisplay() {\n  grid-row: 1 / -1;\n  grid-column: 1 / -1;\n  padding: 10px;\n  overflow-y: auto;\n  @include gridDisplay(2fr 8fr, 2fr 10fr);\n\n  .admin-header {\n    grid-row: 1 / 2;\n    grid-column: 1 / -1;\n    color: $light-blue;\n    display: flex;\n    justify-content: center;\n    @include headerFooterStyles;\n  }\n\n  .admin-nav {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    border: 2px solid $pink;\n    @include sideStyles;\n    @include flexDisplay(column, center, center);\n    @include navStyles;\n  }\n\n  .admin-modal {\n    @include modalStyles;\n\n    .close-approval {\n      @include closeButtonStyles;\n    }\n\n    .pending-trip {\n      @include tripStyles;\n      padding-top: 0;\n      padding: 1rem;\n      height: 20rem;\n      width: 30rem;\n      background-size: cover;\n    }\n\n    .trip-summary {\n      background-color: rgba(255, 255, 255, 0.523);\n      @include flexDisplay(column, flex-start, center);\n      height: 90%;\n\n      .destination {\n        margin-top: 0;\n      }\n\n      .travelers {\n        margin-bottom: 0;\n      }\n\n      .status {\n        margin-bottom: 0;\n      }\n    }\n\n    .approve-button {\n      @include buttonStyles;\n    }\n\n    .deny-button {\n      @include buttonStyles;\n    }\n  }\n\n  main {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    margin-left: 0.5rem;\n    grid-gap: 15px;\n    overflow-y: auto;\n    @include tripStyles;\n\n    .date {\n      margin-top: 0;\n    }\n\n    .duration {\n      margin-bottom: 0;\n    }\n  }\n}","@import 'variables';\n\n@mixin mobile() {\n  @media screen and (max-width: 800px) {\n    body {\n      height: 100vh;\n      width: calc(100vw - 20px);\n      display: grid;\n    }\n\n    .traveler-header {\n      grid-row: 1 / 2;\n      grid-column: 1 / -1;\n    }\n\n    .traveler-nav {\n      justify-content: flex-start;\n      grid-row: 2 / 3;\n      grid-column: 1 / -1;\n      min-height: 20rem;\n      overflow-y: scroll;\n    }\n\n    .traveler-main {\n      grid-row: 3 / 4;\n      grid-column: 1 / -1;\n      background: linear-gradient(to bottom, $dark-purple, $darker-purple);\n      border: $grid-border;\n      margin: 3px;\n      display: grid;\n      grid-template-columns: 1fr;\n      height: 15rem;\n      overflow-y: auto;\n      @include tripStyles;\n    }\n    .traveler-aside {\n      grid-row: 4 / 5;\n      grid-column: 1 / -1;\n    }\n    \n    .quote-image {\n      background-size: cover;\n      padding-top: 0;\n      background-size: cover;\n      width: 70vw;\n    }\n\n  }\n}\n"],"sourceRoot":""}]);
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
  Promise.all([
    getTripsData(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaVJlcXVlc3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzPzExMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qc0NsYXNzZXMvYWRtaW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzQ2xhc3Nlcy9kZXN0aW5hdGlvbnNSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9qc0NsYXNzZXMvdHJhdmVsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzQ2xhc3Nlcy90cmF2ZWxlcnNSZXBvLmpzIiwid2VicGFjazovLy8uL3NyYy9qc0NsYXNzZXMvdHJpcHNSZXBvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFF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QSxxREFBUztBQUNUO0FBQ0Esa0Q7Ozs7Ozs7Ozs7OztBQ3hMQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHVFQUFRLEU7Ozs7Ozs7Ozs7OztBQ2Z2QjtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsK0VBQWdCLEU7Ozs7Ozs7Ozs7OztBQzNCL0I7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSx1RUFBUSxFOzs7Ozs7Ozs7Ozs7QUNSdkI7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZSw0RUFBYSxFOzs7Ozs7Ozs7Ozs7QUNWNUI7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDOztBQUVlLHdFQUFTLEUiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogVGhpcyBpcyBhbiBleGFtcGxlIG9mIHVzaW5nIFNhc3MsIG90aGVyd2lzZSBwbGFpbiBDU1Mgd29ya3MgdG9vKi9cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA4ZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgOWZyIDFmcjtcXG4gIGdyaWQtZ2FwOiAxMHB4O1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjBweCk7XFxuICB3aWR0aDogY2FsYygxMDB2dyAtIDIwcHgpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgIzA5MDcxYSwgIzE5MTQ0OSk7XFxuICBmb250LWZhbWlseTogQmxlbmRlclByb0JvbGQsIHNhbnMtc2VyaWY7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICMxOTE0NDk7IH1cXG5cXG4ubG9naW4tZGlzcGxheSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjMThGNUZFO1xcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggI0Y5RjMwMCBpbnNldDtcXG4gIGJhY2tncm91bmQ6ICNCMDVDQjQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7IH1cXG4gIC5sb2dpbi1kaXNwbGF5OmhvdmVyLCAubG9naW4tZGlzcGxheWZvY3VzIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB9XFxuICAubG9naW4tZGlzcGxheSAubG9naW4tYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgd2lkdGg6IDhyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjMwMDtcXG4gICAgY29sb3I6ICMzRDBFNTM7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7IH1cXG4gICAgLmxvZ2luLWRpc3BsYXkgLmxvZ2luLWJ1dHRvbjpob3ZlciwgLmxvZ2luLWRpc3BsYXkgLmxvZ2luLWJ1dHRvbjpmb2N1cyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNEMEU1MztcXG4gICAgICBjb2xvcjogI0Q2MTI4OTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4udHJhdmVsZXItZGlzcGxheSB7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciA4ZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgOWZyIDFmcjsgfVxcblxcbi50cmF2ZWxlci1oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMzRDBFNTMsICMzRDBFNTMsICMxOTE0NDkpO1xcbiAgYm9yZGVyOiA1cHggc29saWQgI0Q2MTI4OTtcXG4gIG1hcmdpbjogM3B4O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4ICNGOUYzMDA7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICAudHJhdmVsZXItaGVhZGVyIGgxIHtcXG4gICAgY29sb3I6ICMxOEY1RkU7IH1cXG5cXG4udHJhdmVsZXItbmF2IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNCMDVDQjQsICNENjEyODksICMxOEY1RkUsICMyQjdGQjUpO1xcbiAgYm9yZGVyOiA1cHggc29saWQgI0Q2MTI4OTtcXG4gIG1hcmdpbjogM3B4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWluLWhlaWdodDogNDAwcHg7IH1cXG4gIC50cmF2ZWxlci1uYXYgaW5wdXQge1xcbiAgICB3aWR0aDogOC41cmVtOyB9XFxuICAudHJhdmVsZXItbmF2IC50cmlwLXJlcXVlc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAxMHB4OyB9XFxuICAudHJhdmVsZXItbmF2IC5xdW90ZS1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGMzAwO1xcbiAgICBjb2xvcjogIzNEMEU1MztcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDsgfVxcbiAgICAudHJhdmVsZXItbmF2IC5xdW90ZS1idXR0b246aG92ZXIsIC50cmF2ZWxlci1uYXYgLnF1b3RlLWJ1dHRvbjpmb2N1cyB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNEMEU1MztcXG4gICAgICBjb2xvcjogI0Q2MTI4OTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC50cmF2ZWxlci1uYXYgbGFiZWwge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtOyB9XFxuXFxuLnRyYXZlbGVyLW1haW4ge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzNEMEU1MywgIzE5MTQ0OSk7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjRDYxMjg5O1xcbiAgbWFyZ2luOiAzcHg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICBncmlkLWdhcDogMTVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvOyB9XFxuICAudHJhdmVsZXItbWFpbiBhcnRpY2xlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0IwNUNCNDtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgI0Q2MTI4OTtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAjMkI3RkI1LCA3cHggN3B4ICMxOEY1RkU7XFxuICAgIGNvbG9yOiAjM0QwRTUzO1xcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDsgfVxcbiAgICAudHJhdmVsZXItbWFpbiBhcnRpY2xlOmhvdmVyLCAudHJhdmVsZXItbWFpbiBhcnRpY2xlZm9jdXMge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7IH1cXG4gICAgLnRyYXZlbGVyLW1haW4gYXJ0aWNsZSAubG9jYXRpb24taW1hZ2Uge1xcbiAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICB3aWR0aDogMTAwJTsgfVxcbiAgICAudHJhdmVsZXItbWFpbiBhcnRpY2xlIC50cmlwLXN1bW1hcnkge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MjMpO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgaGVpZ2h0OiA4MCU7XFxuICAgICAgd2lkdGg6IDc1JTsgfVxcbiAgICAudHJhdmVsZXItbWFpbiBhcnRpY2xlIHAge1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcbiAgICAudHJhdmVsZXItbWFpbiBhcnRpY2xlIC50cmF2ZWxlcnMge1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cXG4gICAgLnRyYXZlbGVyLW1haW4gYXJ0aWNsZSAuc3RhdHVzIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XFxuICAgIC50cmF2ZWxlci1tYWluIGFydGljbGUgLnZhbHVlIHtcXG4gICAgICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTVweDsgfVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6ICNGOUYzMDA7IH1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICMxOEY1RkU7IH1cXG5cXG4udHJhdmVsZXItYXNpZGUge1xcbiAgZ3JpZC1jb2x1bW46IDMgLyA0O1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0IwNUNCNCwgI0Q2MTI4OSwgIzE4RjVGRSwgIzJCN0ZCNSk7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjRDYxMjg5O1xcbiAgbWFyZ2luOiAzcHg7IH1cXG4gIC50cmF2ZWxlci1hc2lkZSAudGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07IH1cXG4gIC50cmF2ZWxlci1hc2lkZSAudmFsdWUge1xcbiAgICBtYXJnaW4tdG9wOiAwOyB9XFxuXFxuLnRyYXZlbGVyLWZvb3RlciB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzNEMEU1MywgIzNEMEU1MywgIzE5MTQ0OSk7XFxuICBib3JkZXI6IDVweCBzb2xpZCAjRDYxMjg5O1xcbiAgbWFyZ2luOiAzcHg7IH1cXG5cXG4udHJhdmVsZXItbW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7IH1cXG4gIC50cmF2ZWxlci1tb2RhbCAubW9kYWwtY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTE0NDk7XFxuICAgIG1hcmdpbjogM3JlbSBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG4gICAgLnRyYXZlbGVyLW1vZGFsIC5tb2RhbC1jb250ZW50IC5jbG9zZS1xdW90ZSB7XFxuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgICAgcGFkZGluZy10b3A6IDA7XFxuICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgICAgIGNvbG9yOiAjQjA1Q0I0O1xcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgLnRyYXZlbGVyLW1vZGFsIC5tb2RhbC1jb250ZW50IC5jbG9zZS1xdW90ZTpob3ZlciwgLnRyYXZlbGVyLW1vZGFsIC5tb2RhbC1jb250ZW50IC5jbG9zZS1xdW90ZWZvY3VzIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcbiAgICAgIC50cmF2ZWxlci1tb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2UtcXVvdGU6aG92ZXIsIC50cmF2ZWxlci1tb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2UtcXVvdGU6Zm9jdXMge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgY29sb3I6ICNENjEyODk7IH1cXG4gICAgLnRyYXZlbGVyLW1vZGFsIC5tb2RhbC1jb250ZW50IC5xdW90ZS1pbWFnZSB7XFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIGhlaWdodDogMjByZW07IH1cXG4gICAgLnRyYXZlbGVyLW1vZGFsIC5tb2RhbC1jb250ZW50IC5lc3RpbWF0ZS1kaXNwbGF5IHtcXG4gICAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTsgfVxcbiAgICAudHJhdmVsZXItbW9kYWwgLm1vZGFsLWNvbnRlbnQgLmVzdGltYXRlZC1jb3N0IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGNvbG9yOiAjMThGNUZFOyB9XFxuICAgIC50cmF2ZWxlci1tb2RhbCAubW9kYWwtY29udGVudCAucmVxdWVzdC1idXR0b24ge1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgaGVpZ2h0OiA1cmVtO1xcbiAgICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNENjEyODk7XFxuICAgICAgY29sb3I6ICMxOTE0NDk7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDsgfVxcbiAgICAgIC50cmF2ZWxlci1tb2RhbCAubW9kYWwtY29udGVudCAucmVxdWVzdC1idXR0b246aG92ZXIsIC50cmF2ZWxlci1tb2RhbCAubW9kYWwtY29udGVudCAucmVxdWVzdC1idXR0b25mb2N1cyB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cXG4gICAgICAudHJhdmVsZXItbW9kYWwgLm1vZGFsLWNvbnRlbnQgLnJlcXVlc3QtYnV0dG9uOmhvdmVyLCAudHJhdmVsZXItbW9kYWwgLm1vZGFsLWNvbnRlbnQgLnJlcXVlc3QtYnV0dG9uOmZvY3VzIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDBFNTM7XFxuICAgICAgICBjb2xvcjogI0Q2MTI4OTsgfVxcblxcbi5hZG1pbi1kaXNwbGF5IHtcXG4gIGdyaWQtcm93OiAxIC8gLTE7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgOGZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMTBmcjsgfVxcbiAgLmFkbWluLWRpc3BsYXkgLmFkbWluLWhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgY29sb3I6ICMxOEY1RkU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjM0QwRTUzLCAjM0QwRTUzLCAjMTkxNDQ5KTtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgI0Q2MTI4OTtcXG4gICAgbWFyZ2luOiAzcHg7IH1cXG4gIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1uYXYge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI0Q2MTI4OTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0IwNUNCNCwgI0Q2MTI4OSwgIzE4RjVGRSwgIzJCN0ZCNSk7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNENjEyODk7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWluLWhlaWdodDogNDAwcHg7IH1cXG4gICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW5hdiBpbnB1dCB7XFxuICAgICAgd2lkdGg6IDguNXJlbTsgfVxcbiAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbmF2IC50cmlwLXJlcXVlc3Qge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIG1hcmdpbjogMTBweDsgfVxcbiAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbmF2IC5xdW90ZS1idXR0b24ge1xcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgd2lkdGg6IDhyZW07XFxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUYzMDA7XFxuICAgICAgY29sb3I6ICMzRDBFNTM7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW5hdiAucXVvdGUtYnV0dG9uOmhvdmVyLCAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbmF2IC5xdW90ZS1idXR0b246Zm9jdXMge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNEMEU1MztcXG4gICAgICAgIGNvbG9yOiAjRDYxMjg5O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpOyB9XFxuICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAubW9kYWwtY29udGVudCB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MTQ0OTtcXG4gICAgICBtYXJnaW46IDNyZW0gYXV0bztcXG4gICAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gICAgICB3aWR0aDogNzUlO1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2UtcXVvdGUge1xcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgICAgICAgY29sb3I6ICNCMDVDQjQ7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7IH1cXG4gICAgICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2UtcXVvdGU6aG92ZXIsIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAubW9kYWwtY29udGVudCAuY2xvc2UtcXVvdGVmb2N1cyB7XFxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgfVxcbiAgICAgICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5tb2RhbC1jb250ZW50IC5jbG9zZS1xdW90ZTpob3ZlciwgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5tb2RhbC1jb250ZW50IC5jbG9zZS1xdW90ZTpmb2N1cyB7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgY29sb3I6ICNENjEyODk7IH1cXG4gICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLm1vZGFsLWNvbnRlbnQgLnF1b3RlLWltYWdlIHtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgICBoZWlnaHQ6IDIwcmVtOyB9XFxuICAgICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5tb2RhbC1jb250ZW50IC5lc3RpbWF0ZS1kaXNwbGF5IHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTsgfVxcbiAgICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAubW9kYWwtY29udGVudCAuZXN0aW1hdGVkLWNvc3Qge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgY29sb3I6ICMxOEY1RkU7IH1cXG4gICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLm1vZGFsLWNvbnRlbnQgLnJlcXVlc3QtYnV0dG9uIHtcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgICAgIGhlaWdodDogNXJlbTtcXG4gICAgICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDYxMjg5O1xcbiAgICAgICAgY29sb3I6ICMxOTE0NDk7XFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLm1vZGFsLWNvbnRlbnQgLnJlcXVlc3QtYnV0dG9uOmhvdmVyLCAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLm1vZGFsLWNvbnRlbnQgLnJlcXVlc3QtYnV0dG9uZm9jdXMge1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cXG4gICAgICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAubW9kYWwtY29udGVudCAucmVxdWVzdC1idXR0b246aG92ZXIsIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAubW9kYWwtY29udGVudCAucmVxdWVzdC1idXR0b246Zm9jdXMge1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDBFNTM7XFxuICAgICAgICAgIGNvbG9yOiAjRDYxMjg5OyB9XFxuICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAuY2xvc2UtYXBwcm92YWwge1xcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gICAgICBjb2xvcjogI0IwNUNCNDtcXG4gICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDsgfVxcbiAgICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAuY2xvc2UtYXBwcm92YWw6aG92ZXIsIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAuY2xvc2UtYXBwcm92YWxmb2N1cyB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7IH1cXG4gICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLmNsb3NlLWFwcHJvdmFsOmhvdmVyLCAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLmNsb3NlLWFwcHJvdmFsOmZvY3VzIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIGNvbG9yOiAjRDYxMjg5OyB9XFxuICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAucGVuZGluZy10cmlwIHtcXG4gICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICBwYWRkaW5nOiAxcmVtO1xcbiAgICAgIGhlaWdodDogMjByZW07XFxuICAgICAgd2lkdGg6IDMwcmVtO1xcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cXG4gICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLnBlbmRpbmctdHJpcCBhcnRpY2xlIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCMDVDQjQ7XFxuICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAjRDYxMjg5O1xcbiAgICAgICAgYm94LXNoYWRvdzogNHB4IDRweCAjMkI3RkI1LCA3cHggN3B4ICMxOEY1RkU7XFxuICAgICAgICBjb2xvcjogIzNEMEU1MztcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDsgfVxcbiAgICAgICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5wZW5kaW5nLXRyaXAgYXJ0aWNsZTpob3ZlciwgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5wZW5kaW5nLXRyaXAgYXJ0aWNsZWZvY3VzIHtcXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTsgfVxcbiAgICAgICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5wZW5kaW5nLXRyaXAgYXJ0aWNsZSAubG9jYXRpb24taW1hZ2Uge1xcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgIHdpZHRoOiAxMDAlOyB9XFxuICAgICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLnBlbmRpbmctdHJpcCBhcnRpY2xlIC50cmlwLXN1bW1hcnkge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTIzKTtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgICAgIGhlaWdodDogODAlO1xcbiAgICAgICAgICB3aWR0aDogNzUlOyB9XFxuICAgICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLnBlbmRpbmctdHJpcCBhcnRpY2xlIHAge1xcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cXG4gICAgICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAucGVuZGluZy10cmlwIGFydGljbGUgLnRyYXZlbGVycyB7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cXG4gICAgICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAucGVuZGluZy10cmlwIGFydGljbGUgLnN0YXR1cyB7XFxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cXG4gICAgICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAucGVuZGluZy10cmlwIGFydGljbGUgLnZhbHVlIHtcXG4gICAgICAgICAgbWFyZ2luLXRvcDogMDsgfVxcbiAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLnRyaXAtc3VtbWFyeSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUyMyk7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGhlaWdodDogOTAlOyB9XFxuICAgICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC50cmlwLXN1bW1hcnkgLmRlc3RpbmF0aW9uIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7IH1cXG4gICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLnRyaXAtc3VtbWFyeSAudHJhdmVsZXJzIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cXG4gICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLnRyaXAtc3VtbWFyeSAuc3RhdHVzIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cXG4gICAgLmFkbWluLWRpc3BsYXkgLmFkbWluLW1vZGFsIC5hcHByb3ZlLWJ1dHRvbiB7XFxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgICB3aWR0aDogOHJlbTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5RjMwMDtcXG4gICAgICBjb2xvcjogIzNEMEU1MztcXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1pbi1vdXQ7IH1cXG4gICAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLmFwcHJvdmUtYnV0dG9uOmhvdmVyLCAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLmFwcHJvdmUtYnV0dG9uOmZvY3VzIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzRDBFNTM7XFxuICAgICAgICBjb2xvcjogI0Q2MTI4OTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuYWRtaW4tZGlzcGxheSAuYWRtaW4tbW9kYWwgLmRlbnktYnV0dG9uIHtcXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAgIHdpZHRoOiA4cmVtO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlGMzAwO1xcbiAgICAgIGNvbG9yOiAjM0QwRTUzO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDsgfVxcbiAgICAgIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAuZGVueS1idXR0b246aG92ZXIsIC5hZG1pbi1kaXNwbGF5IC5hZG1pbi1tb2RhbCAuZGVueS1idXR0b246Zm9jdXMge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNEMEU1MztcXG4gICAgICAgIGNvbG9yOiAjRDYxMjg5O1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAuYWRtaW4tZGlzcGxheSBtYWluIHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xcbiAgICBncmlkLWdhcDogMTVweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgfVxcbiAgICAuYWRtaW4tZGlzcGxheSBtYWluIGFydGljbGUge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNCMDVDQjQ7XFxuICAgICAgYm9yZGVyOiA1cHggc29saWQgI0Q2MTI4OTtcXG4gICAgICBib3gtc2hhZG93OiA0cHggNHB4ICMyQjdGQjUsIDdweCA3cHggIzE4RjVGRTtcXG4gICAgICBjb2xvcjogIzNEMEU1MztcXG4gICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0OyB9XFxuICAgICAgLmFkbWluLWRpc3BsYXkgbWFpbiBhcnRpY2xlOmhvdmVyLCAuYWRtaW4tZGlzcGxheSBtYWluIGFydGljbGVmb2N1cyB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XFxuICAgICAgLmFkbWluLWRpc3BsYXkgbWFpbiBhcnRpY2xlIC5sb2NhdGlvbi1pbWFnZSB7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB3aWR0aDogMTAwJTsgfVxcbiAgICAgIC5hZG1pbi1kaXNwbGF5IG1haW4gYXJ0aWNsZSAudHJpcC1zdW1tYXJ5IHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MjMpO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICAgICAgaGVpZ2h0OiA4MCU7XFxuICAgICAgICB3aWR0aDogNzUlOyB9XFxuICAgICAgLmFkbWluLWRpc3BsYXkgbWFpbiBhcnRpY2xlIHAge1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuICAgICAgLmFkbWluLWRpc3BsYXkgbWFpbiBhcnRpY2xlIC50cmF2ZWxlcnMge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcbiAgICAgIC5hZG1pbi1kaXNwbGF5IG1haW4gYXJ0aWNsZSAuc3RhdHVzIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cXG4gICAgICAuYWRtaW4tZGlzcGxheSBtYWluIGFydGljbGUgLnZhbHVlIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7IH1cXG4gICAgLmFkbWluLWRpc3BsYXkgbWFpbiAuZGF0ZSB7XFxuICAgICAgbWFyZ2luLXRvcDogMDsgfVxcbiAgICAuYWRtaW4tZGlzcGxheSBtYWluIC5kdXJhdGlvbiB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICBib2R5IHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMHB4KTtcXG4gICAgZGlzcGxheTogZ3JpZDsgfVxcbiAgLnRyYXZlbGVyLWhlYWRlciB7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTsgfVxcbiAgLnRyYXZlbGVyLW5hdiB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBtaW4taGVpZ2h0OiAyMHJlbTtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XFxuICAudHJhdmVsZXItbWFpbiB7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzNEMEU1MywgIzE5MTQ0OSk7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkICNENjEyODk7XFxuICAgIG1hcmdpbjogM3B4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgfVxcbiAgICAudHJhdmVsZXItbWFpbiBhcnRpY2xlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjA1Q0I0O1xcbiAgICAgIGJvcmRlcjogNXB4IHNvbGlkICNENjEyODk7XFxuICAgICAgYm94LXNoYWRvdzogNHB4IDRweCAjMkI3RkI1LCA3cHggN3B4ICMxOEY1RkU7XFxuICAgICAgY29sb3I6ICMzRDBFNTM7XFxuICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDsgfVxcbiAgICAgIC50cmF2ZWxlci1tYWluIGFydGljbGU6aG92ZXIsIC50cmF2ZWxlci1tYWluIGFydGljbGVmb2N1cyB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyB9XFxuICAgICAgLnRyYXZlbGVyLW1haW4gYXJ0aWNsZSAubG9jYXRpb24taW1hZ2Uge1xcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7IH1cXG4gICAgICAudHJhdmVsZXItbWFpbiBhcnRpY2xlIC50cmlwLXN1bW1hcnkge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUyMyk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgICBoZWlnaHQ6IDgwJTtcXG4gICAgICAgIHdpZHRoOiA3NSU7IH1cXG4gICAgICAudHJhdmVsZXItbWFpbiBhcnRpY2xlIHAge1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuICAgICAgLnRyYXZlbGVyLW1haW4gYXJ0aWNsZSAudHJhdmVsZXJzIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7IH1cXG4gICAgICAudHJhdmVsZXItbWFpbiBhcnRpY2xlIC5zdGF0dXMge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDsgfVxcbiAgICAgIC50cmF2ZWxlci1tYWluIGFydGljbGUgLnZhbHVlIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7IH1cXG4gIC50cmF2ZWxlci1hc2lkZSB7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTsgfVxcbiAgLnF1b3RlLWltYWdlIHtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiA3MHZ3OyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX25hdl9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdHJpcF9zdHlsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbW9kYWxfc3R5bGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2FkbWluX2Rpc3BsYXkuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbWVkaWFfcXVlcmllcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLG1FQUFBO0FBUUE7RUNNRSxhQUFhO0VBQ2Isa0NETmdDO0VDT2hDLCtCRFA2QztFQUM3QyxjQUFjO0VBQ2QsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qiw4REFBb0U7RUFDcEUsdUNDYitCO0VEYy9CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNDZnFCLEVBQUE7O0FEa0J2QjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YseUJDaEJrQjtFRGlCbEIsa0NBQWtDO0VBQ2xDLG1CQ3JCYztFQWVkLGFBQWE7RUFDYixzQkRNMkI7RUNMM0IsNkJES3lDO0VDSnpDLG1CRElpRDtFQzhDL0MsK0JBQStCLEVBQUE7RURwRG5DO0lDd0RJLHFCQUFxQixFQUFBO0VEeER6QjtJQ2tCRSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFqQ2M7SUFrQ2QsY0F2Q21CO0lBd0NuQixtQkFBbUI7SUFDbkIsK0JBQStCLEVBQUE7SUR4QmpDO01DNEJJLHlCQTdDaUI7TUE4Q2pCLGNBNUNVO01BNkNWLGVBQWUsRUFBQTs7QURoQm5CO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQ3ZCbkIsYUFBYTtFQUNiLGtDRHVCZ0M7RUN0QmhDLCtCRHNCNkMsRUFBQTs7QUFHL0M7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtFQ2hCZixpRUFBa0Y7RUFDbEYseUJBdEJZO0VBdUJaLFdBQVc7RURnQlgsbUNDcENjO0VEcUNkLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7RUFQekI7SUFVSSxjQzNDZ0IsRUFBQTs7QUQrQ3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUN4QmYsMEVBQTBFO0VBQzFFLHlCQTVCWTtFQTZCWixXQUFXO0VBZlgsYUFBYTtFQUNiLHNCRHNDMkI7RUNyQzNCLDJCRHFDdUM7RUNwQ3ZDLG1CRG9DK0M7RUV4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LG9CQUFvQjtNQUNwQixlQUFlO01BQ2Ysc0JBQXNCO01BQ3RCLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNRm9FckIsK0JBQStCLEVBQUE7TUFFL0I7UUFFQSxzQkFBc0IsRUFBQTtNRXBFcEI7UUFDRSxZQUFZO1FBQ1osV0FBVyxFQUFBO01BR2I7UUFDRSw0Q0FBNEM7UUFDNUMsYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGFBQWE7UUFDYixXQUFXO1FBQ1gsVUFBVSxFQUFBO01BR1o7UUFDRSxrQkFBa0IsRUFBQTtNQUdwQjtRQUNFLGdCQUFnQixFQUFBO01BR2xCO1FBQ0UsZ0JBQWdCLEVBQUE7TUFHbEI7UUFDRSxhQUFhLEVBQUE7RUdaZjtJQUNFLGVBQWU7SUFDZixtQkFBbUIsRUFBQTtFQUdyQjtJQUNFLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFdBQVcsRUFBQSxFQUNaXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiB1c2luZyBTYXNzLCBvdGhlcndpc2UgcGxhaW4gQ1NTIHdvcmtzIHRvbyovXFxuQGltcG9ydCBcXFwidmFyaWFibGVzXFxcIjtcXG5AaW1wb3J0IFxcXCJuYXZfc3R5bGVzXFxcIjtcXG5AaW1wb3J0IFxcXCJ0cmlwX3N0eWxlc1xcXCI7XFxuQGltcG9ydCBcXFwibW9kYWxfc3R5bGVzXFxcIjtcXG5AaW1wb3J0IFxcXCJhZG1pbl9kaXNwbGF5XFxcIjtcXG5AaW1wb3J0IFxcXCJtZWRpYV9xdWVyaWVzXFxcIjtcXG5cXG5ib2R5IHtcXG4gIEBpbmNsdWRlIGdyaWREaXNwbGF5KDJmciA4ZnIgMmZyLCAyZnIgOWZyIDFmcik7XFxuICBncmlkLWdhcDogMTBweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDIwcHgpO1xcbiAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMHB4KTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICRibGFjaywgJGRhcmtlci1wdXJwbGUpO1xcbiAgZm9udC1mYW1pbHk6ICRmb250O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMTRweDsgXFxuICBjb2xvcjogJGRhcmtlci1wdXJwbGU7XFxufVxcblxcbi5sb2dpbi1kaXNwbGF5IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJvcmRlcjogNXB4IHNvbGlkICRsaWdodC1ibHVlO1xcbiAgYm94LXNoYWRvdzogMCAwIDMwcHggJHllbGxvdyBpbnNldDtcXG4gIGJhY2tncm91bmQ6ICRwdXJwbGU7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIHNwYWNlLWV2ZW5seSwgY2VudGVyKTtcXG4gIEBpbmNsdWRlIGdyb3c7XFxuXFxuICAubG9naW4tYnV0dG9uIHtcXG4gICAgQGluY2x1ZGUgYnV0dG9uU3R5bGVzO1xcbiAgfVxcbn1cXG5cXG4udHJhdmVsZXItZGlzcGxheSB7XFxuICBncmlkLXJvdzogMSAvIC0xO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIEBpbmNsdWRlIGdyaWREaXNwbGF5KDJmciA4ZnIgMmZyLCAyZnIgOWZyIDFmcik7XFxufVxcblxcbi50cmF2ZWxlci1oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIEBpbmNsdWRlIGhlYWRlckZvb3RlclN0eWxlcztcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCAkeWVsbG93O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIGgxIHtcXG4gICAgY29sb3I6ICRsaWdodC1ibHVlO1xcbiAgfVxcbn1cXG5cXG4udHJhdmVsZXItbmF2IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIEBpbmNsdWRlIHNpZGVTdHlsZXM7XFxuICBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIGZsZXgtc3RhcnQsIGNlbnRlcik7XFxuICBAaW5jbHVkZSBuYXZTdHlsZXM7XFxuXFxuICBsYWJlbCB7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICB9XFxufVxcblxcbi50cmF2ZWxlci1tYWluIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRkYXJrLXB1cnBsZSwgJGRhcmtlci1wdXJwbGUpO1xcbiAgYm9yZGVyOiAkZ3JpZC1ib3JkZXI7XFxuICBtYXJnaW46IDNweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gIGdyaWQtZ2FwOiAxNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBAaW5jbHVkZSB0cmlwU3R5bGVzO1xcbn1cXG5cXG5AaW5jbHVkZSBzY3JvbGxiYXI7XFxuXFxuXFxuLnRyYXZlbGVyLWFzaWRlIHtcXG4gIGdyaWQtY29sdW1uOiAzIC8gNDtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgZmxleC1zdGFydCwgY2VudGVyKTtcXG4gIEBpbmNsdWRlIHNpZGVTdHlsZXM7XFxuXFxuICAudGl0bGUge1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxuICB9XFxuXFxuICAudmFsdWUge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcblxcbn1cXG5cXG4udHJhdmVsZXItZm9vdGVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBncmlkLXJvdzogMyAvIDQ7XFxuICBAaW5jbHVkZSBoZWFkZXJGb290ZXJTdHlsZXM7XFxufVxcblxcbi50cmF2ZWxlci1tb2RhbCB7XFxuICBAaW5jbHVkZSBtb2RhbFN0eWxlcztcXG59XFxuXFxuLmFkbWluLWRpc3BsYXkge1xcbiAgQGluY2x1ZGUgYWRtaW5EaXNwbGF5O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8vIE1FRElBIFFVRVJJRVNcXG5AaW5jbHVkZSBtb2JpbGU7XCIsXCIvLyBUWVBFIC8gQ09MT1JTXFxuJGZvbnQ6IEJsZW5kZXJQcm9Cb2xkLCBzYW5zLXNlcmlmO1xcbiRibGFjazogIzA5MDcxYTtcXG4kZGFya2VyLXB1cnBsZTogIzE5MTQ0OTtcXG4kZGFyay1wdXJwbGU6ICMzRDBFNTM7XFxuJHB1cnBsZTogI0IwNUNCNDtcXG4kcGluazogI0Q2MTI4OTtcXG4kYmx1ZTogIzJCN0ZCNTtcXG4kbGlnaHQtYmx1ZTogIzE4RjVGRTtcXG4keWVsbG93OiAjRjlGMzAwO1xcbiRncmlkLWJvcmRlcjogNXB4IHNvbGlkICRwaW5rO1xcblxcbi8vIE1JWElOU1xcbkBtaXhpbiBncmlkRGlzcGxheSgkY29sdW1ucywgJHJvd3MpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICRjb2x1bW5zO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAkcm93cztcXG59O1xcblxcbkBtaXhpbiBmbGV4RGlzcGxheSgkZGlyZWN0aW9uLCAkanVzdGlmeSwgJGFsaWduKSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XFxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcXG59O1xcblxcbkBtaXhpbiBoZWFkZXJGb290ZXJTdHlsZXMoKSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkZGFyay1wdXJwbGUsICRkYXJrLXB1cnBsZSwgJGRhcmtlci1wdXJwbGUpO1xcbiAgYm9yZGVyOiAkZ3JpZC1ib3JkZXI7XFxuICBtYXJnaW46IDNweDtcXG59XFxuXFxuQG1peGluIHNpZGVTdHlsZXMoKSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkcHVycGxlLCAkcGluaywgJGxpZ2h0LWJsdWUsICRibHVlKTtcXG4gIGJvcmRlcjogJGdyaWQtYm9yZGVyO1xcbiAgbWFyZ2luOiAzcHg7XFxufVxcblxcbkBtaXhpbiBidXR0b25TdHlsZXMoKSB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgd2lkdGg6IDhyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkeWVsbG93O1xcbiAgY29sb3I6ICRkYXJrLXB1cnBsZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0O1xcblxcbiAgJjpob3ZlcixcXG4gICY6Zm9jdXMge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1wdXJwbGU7XFxuICAgIGNvbG9yOiAkcGluaztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gY2xvc2VCdXR0b25TdHlsZXMoKSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxuICBjb2xvcjogJHB1cnBsZTtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgQGluY2x1ZGUgZ3JvdztcXG5cXG4gICY6aG92ZXIsXFxuICAmOmZvY3VzIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogJHBpbms7XFxuICB9XFxufVxcblxcbkBtaXhpbiBncm93KCkge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0OyBcXG4gIFxcbiAgICAmOmhvdmVyLFxcbiAgICAmZm9jdXMgeyBcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyBcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gc2hyaW5rKCkge1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dDsgXFxuXFxuICAmOmhvdmVyLFxcbiAgJmZvY3VzIHsgXFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpOyBcXG4gIH1cXG59XFxuXFxuQG1peGluIGhvdmVyKCkge1xcbiAgJjpob3ZlcixcXG4gICY6Zm9jdXMge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLXB1cnBsZTtcXG4gICAgY29sb3I6ICRwaW5rO1xcbiAgfVxcbn1cXG5cXG5AbWl4aW4gc2Nyb2xsYmFyKCkge1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDE1cHg7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZDogJHllbGxvdztcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiAkbGlnaHQtYmx1ZTtcXG59XFxufVwiLFwiQGltcG9ydCBcXFwidmFyaWFibGVzXFxcIjtcXG5cXG5AbWl4aW4gbmF2U3R5bGVzKCkge1xcbiAgbWluLWhlaWdodDogNDAwcHg7XFxuXFxuICBpbnB1dCB7XFxuICAgIHdpZHRoOiA4LjVyZW07XFxuICB9XFxuICAudHJpcC1yZXF1ZXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gIH1cXG5cXG4gIC5xdW90ZS1idXR0b24ge1xcbiAgICBAaW5jbHVkZSBidXR0b25TdHlsZXM7XFxuICB9XFxufVwiLFwiQGltcG9ydCBcXFwidmFyaWFibGVzXFxcIjtcXG5cXG5AbWl4aW4gdHJpcFN0eWxlcygpIHtcXG4gIGFydGljbGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHVycGxlO1xcbiAgICBib3JkZXI6ICRncmlkLWJvcmRlcjtcXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCAkYmx1ZSwgN3B4IDdweCAkbGlnaHQtYmx1ZTtcXG4gICAgY29sb3I6ICRkYXJrLXB1cnBsZTtcXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIEBpbmNsdWRlIHNocmluaztcXG5cXG4gICAgLmxvY2F0aW9uLWltYWdlIHtcXG4gICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgLnRyaXAtc3VtbWFyeSB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUyMyk7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7O1xcbiAgICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgICAgaGVpZ2h0OiA4MCU7XFxuICAgICAgd2lkdGg6IDc1JTtcXG4gICAgfVxcblxcbiAgICBwIHtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnRyYXZlbGVycyB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICAuc3RhdHVzIHtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgIC52YWx1ZSB7XFxuICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgfVxcbiAgfVxcbn1cIixcIkBpbXBvcnQgXFxcInZhcmlhYmxlc1xcXCI7XFxuXFxuQG1peGluIG1vZGFsU3R5bGVzKCkge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nLXRvcDogMzBweDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcXG5cXG4gIC5tb2RhbC1jb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtlci1wdXJwbGU7XFxuICAgIG1hcmdpbjogM3JlbSBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgICB3aWR0aDogNzUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIC5jbG9zZS1xdW90ZSB7XFxuICAgICAgQGluY2x1ZGUgY2xvc2VCdXR0b25TdHlsZXM7XFxuICAgIH1cXG5cXG4gICAgLnF1b3RlLWltYWdlIHtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgaGVpZ2h0OiAyMHJlbTtcXG4gICAgfVxcblxcbiAgICAuZXN0aW1hdGUtZGlzcGxheSB7XFxuICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgLmVzdGltYXRlZC1jb3N0IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGNvbG9yOiAkbGlnaHQtYmx1ZTtcXG4gICAgfVxcblxcbiAgICAucmVxdWVzdC1idXR0b24ge1xcbiAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgICBmb250LXNpemU6IDFyZW07XFxuICAgICAgaGVpZ2h0OiA1cmVtO1xcbiAgICAgIHdpZHRoOiAyMHJlbTtcXG4gICAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwaW5rO1xcbiAgICAgIGNvbG9yOiAkZGFya2VyLXB1cnBsZTtcXG4gICAgICBAaW5jbHVkZSBncm93O1xcbiAgICAgIEBpbmNsdWRlIGhvdmVyO1xcblxcbiAgICB9XFxuICB9XFxufVwiLFwiQGltcG9ydCBcXFwidmFyaWFibGVzXFxcIjtcXG5AaW1wb3J0IFxcXCJ0cmlwX3N0eWxlc1xcXCI7XFxuQGltcG9ydCBcXFwibW9kYWxfc3R5bGVzXFxcIjtcXG5cXG5AbWl4aW4gYWRtaW5EaXNwbGF5KCkge1xcbiAgZ3JpZC1yb3c6IDEgLyAtMTtcXG4gIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIEBpbmNsdWRlIGdyaWREaXNwbGF5KDJmciA4ZnIsIDJmciAxMGZyKTtcXG5cXG4gIC5hZG1pbi1oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGNvbG9yOiAkbGlnaHQtYmx1ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIEBpbmNsdWRlIGhlYWRlckZvb3RlclN0eWxlcztcXG4gIH1cXG5cXG4gIC5hZG1pbi1uYXYge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgJHBpbms7XFxuICAgIEBpbmNsdWRlIHNpZGVTdHlsZXM7XFxuICAgIEBpbmNsdWRlIGZsZXhEaXNwbGF5KGNvbHVtbiwgY2VudGVyLCBjZW50ZXIpO1xcbiAgICBAaW5jbHVkZSBuYXZTdHlsZXM7XFxuICB9XFxuXFxuICAuYWRtaW4tbW9kYWwge1xcbiAgICBAaW5jbHVkZSBtb2RhbFN0eWxlcztcXG5cXG4gICAgLmNsb3NlLWFwcHJvdmFsIHtcXG4gICAgICBAaW5jbHVkZSBjbG9zZUJ1dHRvblN0eWxlcztcXG4gICAgfVxcblxcbiAgICAucGVuZGluZy10cmlwIHtcXG4gICAgICBAaW5jbHVkZSB0cmlwU3R5bGVzO1xcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICAgIHBhZGRpbmc6IDFyZW07XFxuICAgICAgaGVpZ2h0OiAyMHJlbTtcXG4gICAgICB3aWR0aDogMzByZW07XFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgfVxcblxcbiAgICAudHJpcC1zdW1tYXJ5IHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTIzKTtcXG4gICAgICBAaW5jbHVkZSBmbGV4RGlzcGxheShjb2x1bW4sIGZsZXgtc3RhcnQsIGNlbnRlcik7XFxuICAgICAgaGVpZ2h0OiA5MCU7XFxuXFxuICAgICAgLmRlc3RpbmF0aW9uIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgfVxcblxcbiAgICAgIC50cmF2ZWxlcnMge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICB9XFxuXFxuICAgICAgLnN0YXR1cyB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuYXBwcm92ZS1idXR0b24ge1xcbiAgICAgIEBpbmNsdWRlIGJ1dHRvblN0eWxlcztcXG4gICAgfVxcblxcbiAgICAuZGVueS1idXR0b24ge1xcbiAgICAgIEBpbmNsdWRlIGJ1dHRvblN0eWxlcztcXG4gICAgfVxcbiAgfVxcblxcbiAgbWFpbiB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG4gICAgZ3JpZC1nYXA6IDE1cHg7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIEBpbmNsdWRlIHRyaXBTdHlsZXM7XFxuXFxuICAgIC5kYXRlIHtcXG4gICAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICB9XFxuXFxuICAgIC5kdXJhdGlvbiB7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcbiAgfVxcbn1cIixcIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XFxuXFxuQG1peGluIG1vYmlsZSgpIHtcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAyMHB4KTtcXG4gICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICB9XFxuXFxuICAgIC50cmF2ZWxlci1oZWFkZXIge1xcbiAgICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICB9XFxuXFxuICAgIC50cmF2ZWxlci1uYXYge1xcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgICBtaW4taGVpZ2h0OiAyMHJlbTtcXG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIH1cXG5cXG4gICAgLnRyYXZlbGVyLW1haW4ge1xcbiAgICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRkYXJrLXB1cnBsZSwgJGRhcmtlci1wdXJwbGUpO1xcbiAgICAgIGJvcmRlcjogJGdyaWQtYm9yZGVyO1xcbiAgICAgIG1hcmdpbjogM3B4O1xcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAgIEBpbmNsdWRlIHRyaXBTdHlsZXM7XFxuICAgIH1cXG4gICAgLnRyYXZlbGVyLWFzaWRlIHtcXG4gICAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgfVxcbiAgICBcXG4gICAgLnF1b3RlLWltYWdlIHtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgd2lkdGg6IDcwdnc7XFxuICAgIH1cXG5cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBjb25zdCBnZXREYXRhID0gZW5kcG9pbnQgPT4ge1xuICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvJHtlbmRwb2ludH1gKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ2dldERhdGEgZmV0Y2ggZXJyb3InLCBlcnJvcikpO1xufVxuXG5leHBvcnQgY29uc3QgcG9zdFRyaXAgPSAobmV3SUQsIHVzZXJJRCwgZGVzdGluYXRpb25JRCwgdHJhdmVsZXJzLCBkYXRlLCBkdXJhdGlvbikgPT4ge1xuICB2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgbXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cbiAgdmFyIHJhdyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICBcImlkXCI6IHBhcnNlSW50KGAke25ld0lEfWApLFxuICAgIFwidXNlcklEXCI6IHBhcnNlSW50KGAke3VzZXJJRH1gKSxcbiAgICBcImRlc3RpbmF0aW9uSURcIjogcGFyc2VJbnQoYCR7ZGVzdGluYXRpb25JRH1gKSxcbiAgICBcInRyYXZlbGVyc1wiOiBwYXJzZUludChgJHt0cmF2ZWxlcnN9YCksXG4gICAgXCJkYXRlXCI6IGAke2RhdGV9YCxcbiAgICBcImR1cmF0aW9uXCI6IHBhcnNlSW50KGAke2R1cmF0aW9ufWApLFxuICAgIFwic3RhdHVzXCI6IFwicGVuZGluZ1wiLFxuICAgIFwic3VnZ2VzdGVkQWN0aXZpdGllc1wiOiBbXVxuICB9KTtcblxuICB2YXIgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgIGJvZHk6IHJhdyxcbiAgICByZWRpcmVjdDogJ2ZvbGxvdydcbiAgfTtcblxuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzXCIsIHJlcXVlc3RPcHRpb25zKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGFwcHJvdmVUcmlwID0gKHRyaXBJRCkgPT4ge1xuICB2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgbXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cbiAgdmFyIHJhdyA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICBcImlkXCI6IHBhcnNlSW50KGAke3RyaXBJRH1gKSxcbiAgICBcInN0YXR1c1wiOiBcImFwcHJvdmVkXCJcbiAgfSk7XG5cbiAgdmFyIHJlcXVlc3RPcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IG15SGVhZGVycyxcbiAgICBib2R5OiByYXcsXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnXG4gIH07XG5cbiAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS91cGRhdGVUcmlwXCIsIHJlcXVlc3RPcHRpb25zKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IpKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlbnlUcmlwID0gKHRyaXBJRCkgPT4ge1xuICB2YXIgbXlIZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgbXlIZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG5cbiAgdmFyIHJlcXVlc3RPcHRpb25zID0ge1xuICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgaGVhZGVyczogbXlIZWFkZXJzLFxuICAgIHJlZGlyZWN0OiAnZm9sbG93J1xuICB9O1xuXG4gIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmlwcy8ke3BhcnNlSW50KHRyaXBJRCl9YCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZXJyb3InLCBlcnJvcikpO1xufSIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Jhc2Uuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIFF1ZXJ5IFNlbGVjdG9yc1xuZXhwb3J0IGNvbnN0IGxvZ2luRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tZGlzcGxheVwiKTtcbmV4cG9ydCBjb25zdCB0cmF2ZWxlckRpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYXZlbGVyLWRpc3BsYXlcIilcbmV4cG9ydCBjb25zdCB0cmF2ZWxlckhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJhdmVsZXItaGVhZGVyXCIpO1xuZXhwb3J0IGNvbnN0IHRyYXZlbGVyTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmF2ZWxlci1uYXZcIik7XG5leHBvcnQgY29uc3QgdHJhdmVsZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJhdmVsZXItbW9kYWxcIik7XG5leHBvcnQgY29uc3QgdHJhdmVsZXJNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmF2ZWxlci1tYWluXCIpO1xuZXhwb3J0IGNvbnN0IHRyYXZlbGVyQXNpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYXZlbGVyLWFzaWRlXCIpO1xuZXhwb3J0IGNvbnN0IHRyYXZlbGVyRm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmF2ZWxlci1mb290ZXJcIik7XG5leHBvcnQgY29uc3QgYWRtaW5EaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZG1pbi1kaXNwbGF5XCIpO1xuZXhwb3J0IGNvbnN0IGFkbWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZG1pbi1oZWFkZXJcIik7XG5leHBvcnQgY29uc3QgYWRtaW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRtaW4tbW9kYWxcIik7XG5leHBvcnQgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1jb250ZW50XCIpO1xuZXhwb3J0IGNvbnN0IGFkbWluTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZG1pbi1uYXZcIik7XG5leHBvcnQgY29uc3QgYWRtaW5NYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZG1pbi1tYWluXCIpO1xuZXhwb3J0IGNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1kYXRlXCIpO1xuZXhwb3J0IGNvbnN0IGR1cmF0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tZHVyYXRpb25cIik7XG5leHBvcnQgY29uc3QgbnVtVHJhdmVsZXJzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tdHJhdmVsZXJzXCIpO1xuZXhwb3J0IGNvbnN0IGRlc3RpbmF0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tZGVzdGluYXRpb25cIik7XG5leHBvcnQgY29uc3QgdHJhdmVsZXJDb250ZW50RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHJhdmVsZXItY29udGVudC1kaXNwbGF5XCIpO1xuZXhwb3J0IGNvbnN0IGFkbWluQ29udGVudERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkbWluLWNvbnRlbnQtZGlzcGxheVwiKTtcbmV4cG9ydCBjb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tYnV0dG9uXCIpO1xuXG5cbi8vIEZ1bmN0aW9uc1xuXG5leHBvcnQgY29uc3QgZGlzcGxheVRyYXZlbGVyVHJpcHMgPSAodHJhdmVsZXIsIHRyaXBzUmVwbywgZGVzdGluYXRpb25zUmVwbykgPT4ge1xuICBjb25zdCB0cmF2ZWxlclRyaXBzID0gdHJpcHNSZXBvLmZpbHRlclRyYXZlbGVyVHJpcHModHJhdmVsZXIuaWQpO1xuICBcbiAgdHJhdmVsZXJNYWluLmlubmVySFRNTCA9ICcnO1xuICB0cmF2ZWxlclRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgdHJhdmVsZXJNYWluLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGBcbiAgICAgIDxhcnRpY2xlIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwidHJpcFwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7ZGVzdGluYXRpb25zUmVwby5maW5kRGVzdGluYXRpb25CeUlEKHRyaXAuZGVzdGluYXRpb25JRCkuaW1hZ2V9XCIgYWx0ID1cIiR7ZGVzdGluYXRpb25zUmVwby5maW5kRGVzdGluYXRpb25CeUlEKHRyaXAuZGVzdGluYXRpb25JRCkuYWx0fVwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInRyaXAtc3VtbWFyeVwiPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsIGRhdGVcIj4ke3RyaXAuZGF0ZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWwgZHVyYXRpb25cIj4ke3RyaXAuZHVyYXRpb259IERBWVMgSU48L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWwgZGVzdGluYXRpb24gdmFsdWVcIj4ke2Rlc3RpbmF0aW9uc1JlcG8uZmluZERlc3RpbmF0aW9uQnlJRCh0cmlwLmRlc3RpbmF0aW9uSUQpLmRlc3RpbmF0aW9ufTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImRldGFpbCB0cmF2ZWxlcnNcIj5UUkFWRUxFUlM8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWwgdmFsdWVcIj4ke3RyaXAudHJhdmVsZXJzfTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImRldGFpbCBzdGF0dXNcIj5TVEFUVVM8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWwgdmFsdWVcIj4ke3RyaXAuc3RhdHVzfTwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9hcnRpY2xlPlxuICAgIGApO1xuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZGlzcGxheVRyYXZlbGVyQXNpZGUgPSAodHJhdmVsZXIsIHRyaXBzUmVwbywgZGVzdGluYXRpb25zUmVwbykgPT4ge1xuICBjb25zdCB0aGlzWWVhciA9IG5ldyBEYXRlKCkudG9KU09OKCkuc2xpY2UoMCwgNCkucmVwbGFjZSgvLS9nLCAnLycpO1xuICBjb25zdCBhbm51YWxUb3RhbCA9IHRyaXBzUmVwby50b3RhbEFubnVhbFRyaXBzQ29zdCh0cmF2ZWxlci5pZCwgdGhpc1llYXIsIGRlc3RpbmF0aW9uc1JlcG8pO1xuICBjb25zdCBwZW5kaW5nVG90YWwgPSB0cmlwc1JlcG8udG90YWxQZW5kaW5nVHJpcHNDb3N0KHRyYXZlbGVyLmlkLCBkZXN0aW5hdGlvbnNSZXBvKTtcblxuICB0cmF2ZWxlckFzaWRlLmlubmVySFRNTCA9ICc8aDE+UFJPRklMRTwvaDE+JztcbiAgdHJhdmVsZXJBc2lkZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8cCBjbGFzcz1cImFzaWRlLWVsZW1lbnQgdGl0bGVcIj5UT1RBTCBTUEVOVCBJTiAke3RoaXNZZWFyfTwvcD48cCBjbGFzcz1cImFzaWRlLWVsZW1lbnQgdmFsdWVcIj4ke2FubnVhbFRvdGFsLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge3N0eWxlOiBcImN1cnJlbmN5XCIsIGN1cnJlbmN5OiBcIlVTRFwifSl9PC9wPlxuICA8cCBjbGFzcz1cImFzaWRlLWVsZW1lbnQgdGl0bGVcIj5UT1RBTCBPRiBQRU5ESU5HIFRSSVBTPC9wPjxwIGNsYXNzPVwiYXNpZGUtZWxlbWVudCB2YWx1ZVwiPiR7cGVuZGluZ1RvdGFsLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge3N0eWxlOiBcImN1cnJlbmN5XCIsIGN1cnJlbmN5OiBcIlVTRFwifSl9PC9wPmApO1xufVxuXG5leHBvcnQgY29uc3QgZGlzcGxheVRyYXZlbGVyUGFnZSA9ICh0cmF2ZWxlciwgdHJpcHNSZXBvLCBkZXN0aW5hdGlvbnNSZXBvKSA9PiB7XG4gIGRpc3BsYXlUcmF2ZWxlclRyaXBzKHRyYXZlbGVyLCB0cmlwc1JlcG8sIGRlc3RpbmF0aW9uc1JlcG8pO1xuICBkaXNwbGF5VHJhdmVsZXJBc2lkZSh0cmF2ZWxlciwgdHJpcHNSZXBvLCBkZXN0aW5hdGlvbnNSZXBvKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlRdW90ZSA9IGRlc3RpbmF0aW9uc1JlcG8gPT4ge1xuICBjb25zdCBkdXJhdGlvbiA9IGR1cmF0aW9uSW5wdXQudmFsdWU7XG4gIGNvbnN0IHRyYXZlbGVycyA9IG51bVRyYXZlbGVyc0lucHV0LnZhbHVlO1xuICBjb25zdCBkZXN0aW5hdGlvbklEID0gZGVzdGluYXRpb25zUmVwby5maW5kSURCeU5hbWUoZGVzdGluYXRpb25JbnB1dC52YWx1ZSk7XG4gIGNvbnN0IGRlc3RpbmF0aW9uID0gZGVzdGluYXRpb25zUmVwby5maW5kRGVzdGluYXRpb25CeUlEKGRlc3RpbmF0aW9uSUQpO1xuICBjb25zdCB0cmlwQ29zdCA9IGRlc3RpbmF0aW9uc1JlcG8uY2FsY1RyaXBDb3N0KGR1cmF0aW9uLCB0cmF2ZWxlcnMsIGRlc3RpbmF0aW9uSUQpO1xuXG4gIHRyYXZlbGVyQ29udGVudERpc3BsYXkuaW5uZXJIVE1MID0gJyc7XG4gIHRyYXZlbGVyQ29udGVudERpc3BsYXkuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLCBgPGltZyBjbGFzcz1cInF1b3RlLWltYWdlXCIgc3JjPVwiJHtkZXN0aW5hdGlvbi5pbWFnZX1cIiBhbHQ9XCIke2Rlc3RpbmF0aW9uLmFsdH1cIj5gKTtcbiAgdHJhdmVsZXJDb250ZW50RGlzcGxheS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYDxwIGNsYXNzPVwiZXN0aW1hdGVkLWNvc3RcIj5ZT1VSIEVTVElNQVRFRCBDT1NUIElTOiAke3RyaXBDb3N0LnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge3N0eWxlOiBcImN1cnJlbmN5XCIsIGN1cnJlbmN5OiBcIlVTRFwifSl9PC9wPmApO1xuICB0cmF2ZWxlck1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmV4cG9ydCBjb25zdCBoaWRlUXVvdGUgPSAoKSA9PiB7XG4gIGRhdGVJbnB1dC52YWx1ZSA9IG51bGw7XG4gIGR1cmF0aW9uSW5wdXQudmFsdWUgPSBudWxsO1xuICBudW1UcmF2ZWxlcnNJbnB1dC52YWx1ZSA9IG51bGw7XG4gIGRlc3RpbmF0aW9uSW5wdXQudmFsdWUgPSBudWxsO1xuICB0cmF2ZWxlck1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IGNvbnN0IGhpZGVSZXF1ZXN0ID0gKCkgPT4ge1xuICBhZG1pbk1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZXhwb3J0IGNvbnN0IGNvbnN0cnVjdFRvZGF5c1RyYXZlbGVycyA9ICh0cmF2ZWxlcnNSZXBvLCB0cmlwc1JlcG8pID0+IHtcbiAgY29uc3QgdG9kYXlzVHJpcHMgPSB0cmlwc1JlcG8uZmlsdGVyVHJpcHNUb2RheShcIjIwMjAvMDYvMjJcIik7XG4gIGNvbnN0IHRyYXZlbGVyTmFtZXMgPSB0b2RheXNUcmlwcy5tYXAodHJpcCA9PiB7XG4gICAgY29uc3QgdHJhdmVsZXIgPSB0cmF2ZWxlcnNSZXBvLmNoZWNrRm9ySUQodHJpcC51c2VySUQpO1xuICAgIHJldHVybiB0cmF2ZWxlci5uYW1lO1xuICB9KVxuXG4gIHJldHVybiB0cmF2ZWxlck5hbWVzLmZvckVhY2gobmFtZSA9PiB7XG4gICAgYWRtaW5OYXYuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPHAgY2xhc3M9XCJhZG1pbi1uYXYtZWxlbWVudCB2YWx1ZVwiPiR7bmFtZX08L3A+YClcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlBZG1pbk5hdiA9ICh0cmF2ZWxlcnNSZXBvLCB0cmlwc1JlcG8sIGRlc3RpbmF0aW9uc1JlcG8pID0+IHtcbiAgYWRtaW5OYXYuaW5uZXJIVE1MID0gJzxoMT5BRE1JTiBTVEFUSVNUSUNTPC9oMT4nO1xuICBjb25zdCB0aGlzWWVhciA9IG5ldyBEYXRlKCkudG9KU09OKCkuc2xpY2UoMCwgNCkucmVwbGFjZSgvLS9nLCAnLycpO1xuICAvL0tFRVBJTkcgSEFSRCBDT0RFRCBEQVRFIFNJTkNFIE5PIERBVEEgRk9SIDIwMjFcbiAgY29uc3QgYW5udWFsQ29tbWlzc2lvblRvdGFsID0gdHJpcHNSZXBvLnRvdGFsQW5udWFsQ29tbWlzc2lvbigyMDIwLCBkZXN0aW5hdGlvbnNSZXBvKTtcbiAgXG4gIGFkbWluTmF2Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxwIGNsYXNzPVwiYWRtaW4tbmF2LWVsZW1lbnQgdGl0bGVcIj5FQVJOSU5HUyBJTiAke3RoaXNZZWFyfTwvcD48cCBjbGFzcz1cImFkbWluLW5hdi1lbGVtZW50IHZhbHVlXCI+JHthbm51YWxDb21taXNzaW9uVG90YWwudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7c3R5bGU6IFwiY3VycmVuY3lcIiwgY3VycmVuY3k6IFwiVVNEXCJ9KX08L3A+XG4gIDxwIGNsYXNzPVwiYWRtaW4tbmF2LWVsZW1lbnQgdGl0bGVcIj5XSE8nUyBUUkFWRUxJTkcgVE9EQVk/PC9wPmApO1xuICBjb25zdHJ1Y3RUb2RheXNUcmF2ZWxlcnModHJhdmVsZXJzUmVwbywgdHJpcHNSZXBvKTtcbn1cblxuZXhwb3J0IGNvbnN0IGRpc3BsYXlBZG1pbk1vZGFsID0gKGV2ZW50LCBkZXN0aW5hdGlvbnNSZXBvLCB0cmlwc1JlcG8pID0+IHtcbiAgY29uc3QgdHJpcElEID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCJzZWN0aW9uXCIpLmlkO1xuICBjb25zdCB0cmlwID0gdHJpcHNSZXBvLmZpbmRUcmlwQnlUcmlwSUQodHJpcElEKTtcbiAgY29uc3Qgc2VsZWN0ZWRUcmlwSFRNTCA9IGBcbiAgPGFydGljbGUgdGFiaW5kZXg9XCIwXCIgY2xhc3M9XCJwZW5kaW5nLXRyaXBcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgke2Rlc3RpbmF0aW9uc1JlcG8uZmluZERlc3RpbmF0aW9uQnlJRCh0cmlwLmRlc3RpbmF0aW9uSUQpLmltYWdlfVwiIGFsdCA9XCIke2Rlc3RpbmF0aW9uc1JlcG8uZmluZERlc3RpbmF0aW9uQnlJRCh0cmlwLmRlc3RpbmF0aW9uSUQpLmFsdH1cIj5cbiAgICA8c2VjdGlvbiBjbGFzcz1cInRyaXAtc3VtbWFyeVwiPlxuICAgICAgPHAgY2xhc3M9XCJkZXRhaWwgZGF0ZVwiPiR7dHJpcC5kYXRlfTwvcD5cbiAgICAgIDxwIGNsYXNzPVwiZGV0YWlsIGR1cmF0aW9uXCI+JHt0cmlwLmR1cmF0aW9ufSBEQVlTIElOPC9wPlxuICAgICAgPHAgY2xhc3M9XCJkZXRhaWwgZGVzdGluYXRpb25cIj4ke2Rlc3RpbmF0aW9uc1JlcG8uZmluZERlc3RpbmF0aW9uQnlJRCh0cmlwLmRlc3RpbmF0aW9uSUQpLmRlc3RpbmF0aW9ufTwvcD5cbiAgICAgIDxwIGNsYXNzPVwiZGV0YWlsIHRyYXZlbGVyc1wiPlRSQVZFTEVSUzwvcD48cD4ke3RyaXAudHJhdmVsZXJzfTwvcD5cbiAgICAgIDxwIGNsYXNzPVwiZGV0YWlsIHN0YXR1c1wiPlNUQVRVUzwvcD48cD4ke3RyaXAuc3RhdHVzfTwvcD5cbiAgICA8L3NlY3Rpb24+XG4gIDwvYXJ0aWNsZT5gXG5cbiAgYWRtaW5Db250ZW50RGlzcGxheS5pbm5lckhUTUwgPSAnJztcbiAgYWRtaW5Db250ZW50RGlzcGxheS5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlcmJlZ2luXCIsIHNlbGVjdGVkVHJpcEhUTUwpO1xuICBtb2RhbENvbnRlbnQuaWQgPSBgJHt0cmlwSUR9YFxuICBhZG1pbk1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbmV4cG9ydCBjb25zdCBjaGVja1JlcXVlc3RJbnB1dHMgPSAoZGVzdGluYXRpb25zUmVwbykgPT4ge1xuICBjb25zdCBkYXRlID0gZGF0ZUlucHV0LnZhbHVlO1xuICBjb25zdCBkdXJhdGlvbiA9IGR1cmF0aW9uSW5wdXQudmFsdWU7XG4gIGNvbnN0IHRyYXZlbGVycyA9IG51bVRyYXZlbGVyc0lucHV0LnZhbHVlO1xuICBjb25zdCBkZXN0aW5hdGlvbklEID0gZGVzdGluYXRpb25zUmVwby5maW5kSURCeU5hbWUoZGVzdGluYXRpb25JbnB1dC52YWx1ZSk7XG5cbiAgaWYgKGRhdGUgPT09ICcnIHx8IDEgPiBkdXJhdGlvbiB8fCAxID4gdHJhdmVsZXJzIHx8IGRlc3RpbmF0aW9uSUQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGlzcGxheVBlbmRpbmdUcmlwcyA9ICh0cmlwc1JlcG8sIGRlc3RpbmF0aW9uc1JlcG8pID0+IHtcbiAgY29uc3QgcGVuZGluZ1RyaXBzID0gdHJpcHNSZXBvLmZpbHRlclBlbmRpbmdUcmlwcygpO1xuICBhZG1pbk1haW4uaW5uZXJIVE1MID0gJyc7XG5cbiAgcGVuZGluZ1RyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgYWRtaW5NYWluLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGBcbiAgICAgIDxhcnRpY2xlIHRhYmluZGV4PVwiMFwiIGNsYXNzPVwidHJpcFwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7ZGVzdGluYXRpb25zUmVwby5maW5kRGVzdGluYXRpb25CeUlEKHRyaXAuZGVzdGluYXRpb25JRCkuaW1hZ2V9XCIgYWx0ID1cIiR7ZGVzdGluYXRpb25zUmVwby5maW5kRGVzdGluYXRpb25CeUlEKHRyaXAuZGVzdGluYXRpb25JRCkuYWx0fVwiPlxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInRyaXAtc3VtbWFyeVwiIGlkPVwiJHt0cmlwLmlkfVwiPlxuICAgICAgICA8cCBjbGFzcz1cImRldGFpbCB0cmF2bGVyXCI+VFJBVkVMRVIgSUQ6ICR7dHJpcC51c2VySUR9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsIGRhdGVcIj4ke3RyaXAuZGF0ZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWwgZHVyYXRpb25cIj4ke3RyaXAuZHVyYXRpb259IERBWVMgSU48L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWwgZGVzdGluYXRpb25cIj4ke2Rlc3RpbmF0aW9uc1JlcG8uZmluZERlc3RpbmF0aW9uQnlJRCh0cmlwLmRlc3RpbmF0aW9uSUQpLmRlc3RpbmF0aW9ufTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImRldGFpbCB0cmF2ZWxlcnNcIj5UUkFWRUxFUlM6ICR7dHJpcC50cmF2ZWxlcnN9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsIHN0YXR1c1wiPlNUQVRVUzogJHt0cmlwLnN0YXR1c308L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICBgKTtcbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGNoZWNrTG9naW5JbnB1dHMgPSAodXNlcm5hbWUsIHBhc3N3b3JkLCB0cmF2ZWxlcnNSZXBvKSA9PiB7XG4gIGNvbnN0IHR3b0NoYXIgPSBwYXJzZUludCh1c2VybmFtZS5zbGljZSgtMikpO1xuICBjb25zdCBvbmVDaGFyID0gcGFyc2VJbnQodXNlcm5hbWUuc2xpY2UoLTEpKTtcbiAgXG4gIGlmICh0cmF2ZWxlcnNSZXBvLmNoZWNrRm9ySUQodHdvQ2hhcikgJiYgcGFzc3dvcmQgPT09ICd0cmF2ZWwyMDIxJykge1xuICAgIHJldHVybiB0cmF2ZWxlcnNSZXBvLmNoZWNrRm9ySUQodHdvQ2hhcik7XG4gIH0gZWxzZSBpZiAodHJhdmVsZXJzUmVwby5jaGVja0ZvcklEKG9uZUNoYXIpICYmIHBhc3N3b3JkID09PSAndHJhdmVsMjAyMScpIHtcbiAgICByZXR1cm4gdHJhdmVsZXJzUmVwby5jaGVja0ZvcklEKG9uZUNoYXIpO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KFwiTm8gYWNjb3VudCBmb3VuZCB3aXRoIHRoYXQgaW5mb3JtYXRpb24uIFRyeSBhZ2Fpbi5cIik7XG4gIH1cbn1cblxuLy8gUkVGQUNUT1IgVEhJUyBUTyBBREQgQSBDTEFTUyBPRiBESVNQTEFZOiBISURERU4/Pz9cbmV4cG9ydCBjb25zdCBkaXNwbGF5RGVzaXJlZEVsZW1lbnRzID0gZGlzcGxheSA9PiB7XG4gIGlmIChkaXNwbGF5ID09PSAnbG9naW4nKSB7XG4gICAgdHJhdmVsZXJEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgYWRtaW5EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgbG9naW5EaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUgPSBcImhpZGRlblwiO1xuICB9IGVsc2UgaWYgKGRpc3BsYXkgPT09ICd0cmF2ZWxlcicpIHtcbiAgICB0cmF2ZWxlckRpc3BsYXkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBhZG1pbkRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBsb2dpbkRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfSBlbHNlIGlmIChkaXNwbGF5ID09PSAnYWRtaW4nKSB7XG4gICAgdHJhdmVsZXJEaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgYWRtaW5EaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgbG9naW5EaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH1cbn0iLCIvLyBTVFlMRSBJTVBPUlRTXG5pbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5cbi8vIElNQUdFIElNUE9SVFNcbi8vIGltcG9ydCAnLi9pbWFnZXMvdHVyaW5nLWxvZ28ucG5nJ1xuY29uc29sZS5sb2coJ1RoaXMgaXMgdGhlIEphdmFTY3JpcHQgZW50cnkgZmlsZSAtIHlvdXIgY29kZSBiZWdpbnMgaGVyZS4nKTtcblxuLy8gUVVFUlkgU0VMRUNUT1JTXG5jb25zdCBxdW90ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdW90ZS1idXR0b24nKTtcbmNvbnN0IGNsb3NlUXVvdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtcXVvdGUnKTtcbmNvbnN0IGNsb3NlQXBwcm92YWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYXBwcm92YWwnKTtcbmNvbnN0IHJlcXVlc3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVxdWVzdC1idXR0b24nKTtcbmNvbnN0IGFwcHJvdmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXBwcm92ZS1idXR0b24nKTtcbmNvbnN0IGRlbnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVueS1idXR0b24nKTtcbmNvbnN0IGRhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1kYXRlXCIpO1xuY29uc3QgZHVyYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1kdXJhdGlvblwiKTtcbmNvbnN0IG51bVRyYXZlbGVyc0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXRyYXZlbGVyc1wiKTtcbmNvbnN0IGRlc3RpbmF0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tZGVzdGluYXRpb25cIik7XG5jb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JtLXVzZXJuYW1lXCIpO1xuY29uc3QgcGFzc3dvcmRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1wYXNzd29yZFwiKTtcbmNvbnN0IGxvZ2luQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbi1idXR0b25cIik7XG5jb25zdCBtb2RhbENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLWNvbnRlbnRcIik7XG5cbi8vIEpTIElNUE9SVFNcbmltcG9ydCBUcmF2ZWxlciBmcm9tICcuL2pzQ2xhc3Nlcy90cmF2ZWxlcic7XG5pbXBvcnQgVHJhdmVsZXJzUmVwbyBmcm9tICcuL2pzQ2xhc3Nlcy90cmF2ZWxlcnNSZXBvJ1xuaW1wb3J0IERlc3RpbmF0aW9uc1JlcG8gZnJvbSAnLi9qc0NsYXNzZXMvZGVzdGluYXRpb25zUmVwbyc7XG5pbXBvcnQgVHJpcHNSZXBvIGZyb20gJy4vanNDbGFzc2VzL3RyaXBzUmVwbyc7XG5pbXBvcnQgQWRtaW4gZnJvbSAnLi9qc0NsYXNzZXMvYWRtaW4nO1xuaW1wb3J0IHsgXG4gIGRpc3BsYXlUcmF2ZWxlclRyaXBzLCBcbiAgZGlzcGxheVRyYXZlbGVyQXNpZGUsIFxuICBkaXNwbGF5UXVvdGUsIFxuICBoaWRlUXVvdGUsXG4gIGRpc3BsYXlQZW5kaW5nVHJpcHMsXG4gIGNoZWNrUmVxdWVzdElucHV0cyxcbiAgY2hlY2tMb2dpbklucHV0cyxcbiAgZGlzcGxheURlc2lyZWRFbGVtZW50cyxcbiAgYWRtaW5NYWluLFxuICBkaXNwbGF5QWRtaW5OYXYsXG4gIGRpc3BsYXlBZG1pbk1vZGFsLFxuICBoaWRlUmVxdWVzdFxufSBmcm9tICcuL2RvbVVwZGF0ZXMnO1xuaW1wb3J0IHsgXG4gIGdldERhdGEsXG4gIHBvc3RUcmlwLFxuICBhcHByb3ZlVHJpcCxcbiAgZGVueVRyaXBcbn0gZnJvbSAnLi9hcGlSZXF1ZXN0cyc7XG5cbi8vIEdsb2JhbCBWYXJpYWJsZXNcbmxldCB0cmF2ZWxlcnNSZXBvO1xubGV0IHRyaXBzUmVwbztcbmxldCBkZXN0aW5hdGlvbnNSZXBvO1xubGV0IHRyYXZlbGVyO1xubGV0IHRyYXZlbGVySUQ7XG5jb25zdCBhZG1pbiA9IG5ldyBBZG1pbigpO1xuXG4vLyBJbml0aWFsIERhdGEgYW5kIERPTSBQb3B1bGF0aW9uXG5jb25zdCBwb3B1bGF0ZVRyYXZlbGVyTWFpbiA9ICgpID0+IHtcbiAgUHJvbWlzZS5hbGwoW2dldFRyYXZlbGVyRGF0YSh0cmF2ZWxlcklEKSxcbiAgICBnZXRUcmlwc0RhdGEoKSxcbiAgICBnZXREZXN0aW5hdGlvbnNEYXRhKClcbiAgXSlcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICB0cmF2ZWxlciA9IG5ldyBUcmF2ZWxlcihyZXNwb25zZVswXSk7XG4gICAgICB0cmlwc1JlcG8gPSBuZXcgVHJpcHNSZXBvKHJlc3BvbnNlWzFdKTtcbiAgICAgIGRlc3RpbmF0aW9uc1JlcG8gPSBuZXcgRGVzdGluYXRpb25zUmVwbyhyZXNwb25zZVsyXSk7XG4gICAgfSlcbiAgICAudGhlbiggKCkgPT4ge1xuICAgICAgZGlzcGxheVRyYXZlbGVyVHJpcHModHJhdmVsZXIsIHRyaXBzUmVwbywgZGVzdGluYXRpb25zUmVwbyk7XG4gICAgICBkaXNwbGF5VHJhdmVsZXJBc2lkZSh0cmF2ZWxlciwgdHJpcHNSZXBvLCBkZXN0aW5hdGlvbnNSZXBvKTtcbiAgICB9KVxufVxuXG5jb25zdCBwb3B1bGF0ZUFkbWluTWFpbiA9ICgpID0+IHtcbiAgUHJvbWlzZS5hbGwoW1xuICAgIGdldFRyaXBzRGF0YSgpLFxuICAgIGdldERlc3RpbmF0aW9uc0RhdGEoKVxuICBdKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHRyaXBzUmVwbyA9IG5ldyBUcmlwc1JlcG8ocmVzcG9uc2VbMF0pO1xuICAgICAgZGVzdGluYXRpb25zUmVwbyA9IG5ldyBEZXN0aW5hdGlvbnNSZXBvKHJlc3BvbnNlWzFdKTtcbiAgICB9KVxuICAgIC50aGVuKCAoKSA9PiB7XG4gICAgICBkaXNwbGF5QWRtaW5OYXYodHJhdmVsZXJzUmVwbywgdHJpcHNSZXBvLCBkZXN0aW5hdGlvbnNSZXBvKTtcbiAgICAgIGRpc3BsYXlQZW5kaW5nVHJpcHModHJpcHNSZXBvLCBkZXN0aW5hdGlvbnNSZXBvKTtcbiAgICB9KVxufVxuXG5jb25zdCBnZXRUcmF2ZWxlckRhdGEgPSB0cmF2ZWxlcklEID0+IHtcbiAgcmV0dXJuIGdldERhdGEoYHRyYXZlbGVycy8ke3RyYXZlbGVySUR9YClcbn1cblxuY29uc3QgZ2V0VHJhdmVsZXJzRGF0YSA9ICgpID0+IHtcbiAgcmV0dXJuIGdldERhdGEoJ3RyYXZlbGVycycpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgdHJhdmVsZXJzUmVwbyA9IG5ldyBUcmF2ZWxlcnNSZXBvKHJlc3BvbnNlKTtcbiAgICB9KVxufVxuXG5jb25zdCBnZXRUcmlwc0RhdGEgPSAoKSA9PiB7XG4gIHJldHVybiBnZXREYXRhKCd0cmlwcycpXG59XG5cbmNvbnN0IGdldERlc3RpbmF0aW9uc0RhdGEgPSAoKSA9PiB7XG4gIHJldHVybiBnZXREYXRhKCdkZXN0aW5hdGlvbnMnKVxufVxuXG4vLyBGdW5jdGlvbiBEZWNsYXJhdGlvbnNcbmNvbnN0IGNyZWF0ZVF1b3RlID0gKCkgPT4ge1xuICBpZiAoIWNoZWNrUmVxdWVzdElucHV0cyhkZXN0aW5hdGlvbnNSZXBvKSkge1xuICAgIGFsZXJ0KCdJbnZhbGlkIGlucHV0LCBjaGVjayB5b3VyIGZvcm0uJylcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5UXVvdGUoZGVzdGluYXRpb25zUmVwbyk7XG4gIH1cbn1cblxuY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgaGlkZVF1b3RlKCk7XG4gIGhpZGVSZXF1ZXN0KCk7XG59XG5cbmNvbnN0IHN1Ym1pdFRyaXBSZXF1ZXN0ID0gKCkgPT4ge1xuICBjb25zdCBkYXRlID0gZGF0ZUlucHV0LnZhbHVlLnRvU3RyaW5nKCk7XG4gIGNvbnN0IGZvcm1hdHRlZERhdGUgPSBkYXRlLnJlcGxhY2VBbGwoXCItXCIsIFwiL1wiKTtcbiAgY29uc3QgZHVyYXRpb24gPSBkdXJhdGlvbklucHV0LnZhbHVlO1xuICBjb25zdCB0cmF2ZWxlcnMgPSBudW1UcmF2ZWxlcnNJbnB1dC52YWx1ZTtcbiAgY29uc3QgZGVzdGluYXRpb25JRCA9IGRlc3RpbmF0aW9uc1JlcG8uZmluZElEQnlOYW1lKGRlc3RpbmF0aW9uSW5wdXQudmFsdWUpO1xuICBQcm9taXNlLnJlc29sdmUocG9zdFRyaXAoRGF0ZS5ub3coKSwgdHJhdmVsZXIuaWQsIGRlc3RpbmF0aW9uSUQsIHRyYXZlbGVycywgZm9ybWF0dGVkRGF0ZSwgZHVyYXRpb24pKVxuICAgIC50aGVuKHBvcHVsYXRlVHJhdmVsZXJNYWluKCkpXG4gICAgLnRoZW4oaGlkZVF1b3RlKCkpXG59XG5cbmNvbnN0IGRpc3BsYXlSZXF1ZXN0ID0gZXZlbnQgPT4ge1xuICBkaXNwbGF5QWRtaW5Nb2RhbChldmVudCwgZGVzdGluYXRpb25zUmVwbywgdHJpcHNSZXBvKTtcbn1cblxuY29uc3QgYXBwcm92ZVJlcXVlc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHRyaXBJRCA9IG1vZGFsQ29udGVudC5pZDtcblxuICBQcm9taXNlLnJlc29sdmUoYXBwcm92ZVRyaXAodHJpcElEKSlcbiAgICAudGhlbihwb3B1bGF0ZUFkbWluTWFpbigpKVxuICAgIC50aGVuKGhpZGVSZXF1ZXN0KCkpXG59XG5cbmNvbnN0IGRlbnlSZXF1ZXN0ID0gKCkgPT4ge1xuICBjb25zdCB0cmlwSUQgPSBtb2RhbENvbnRlbnQuaWQ7XG5cbiAgUHJvbWlzZS5yZXNvbHZlKGRlbnlUcmlwKHRyaXBJRCkpXG4gICAgLnRoZW4ocG9wdWxhdGVBZG1pbk1haW4oKSlcbiAgICAudGhlbihoaWRlUmVxdWVzdCgpKVxufVxuXG5jb25zdCBsb2dpbiA9ICgpID0+IHtcbiAgY29uc3QgdXNlcm5hbWUgPSB1c2VybmFtZUlucHV0LnZhbHVlO1xuICBjb25zdCBwYXNzd29yZCA9IHBhc3N3b3JkSW5wdXQudmFsdWU7XG5cbiAgaWYgKGFkbWluLmNoZWNrQ3JlZGVudGlhbHModXNlcm5hbWUsIHBhc3N3b3JkKSkge1xuICAgIHBvcHVsYXRlQWRtaW5NYWluKCk7XG4gICAgZGlzcGxheURlc2lyZWRFbGVtZW50cygnYWRtaW4nKTtcbiAgfSBlbHNlIHtcbiAgICB0cmF2ZWxlcklEID0gY2hlY2tMb2dpbklucHV0cyh1c2VybmFtZSwgcGFzc3dvcmQsIHRyYXZlbGVyc1JlcG8pLmlkO1xuICAgIHBvcHVsYXRlVHJhdmVsZXJNYWluKCk7XG4gICAgZGlzcGxheURlc2lyZWRFbGVtZW50cygndHJhdmVsZXInKTtcbiAgfVxufVxuXG5jb25zdCBpbml0aWFsaXplUGFnZSA9ICgpID0+IHtcbiAgUHJvbWlzZS5yZXNvbHZlKGdldFRyYXZlbGVyc0RhdGEoKSlcbiAgICAudGhlbihcbiAgICAgIGRpc3BsYXlEZXNpcmVkRWxlbWVudHMoJ2xvZ2luJylcbiAgICApXG59XG5cbi8vIEV2ZW50IExpc3RlbmVyc1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgaW5pdGlhbGl6ZVBhZ2UoKSk7XG5xdW90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlUXVvdGUpO1xuY2xvc2VRdW90ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VNb2RhbCk7XG5jbG9zZUFwcHJvdmFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcbnJlcXVlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdFRyaXBSZXF1ZXN0KTtcbmxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBsb2dpbik7XG5hZG1pbk1haW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlSZXF1ZXN0KTtcbmFwcHJvdmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFwcHJvdmVSZXF1ZXN0KTtcbmRlbnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbnlSZXF1ZXN0KTsiLCJjbGFzcyBUcmF2ZWxlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXNlcm5hbWUgPSBcImFnZW5jeVwiO1xuICAgIHRoaXMucGFzc3dvcmQgPSBcInRyYXZlbDIwMjFcIjtcbiAgfVxuXG4gIGNoZWNrQ3JlZGVudGlhbHModXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgaWYgKHVzZXJuYW1lID09PSB0aGlzLnVzZXJuYW1lICYmIHBhc3N3b3JkID09PSB0aGlzLnBhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlcjsiLCJjbGFzcyBEZXN0aW5hdGlvbnNSZXBvIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuYWxsRGVzdGluYXRpb25zID0gZGF0YS5kZXN0aW5hdGlvbnM7XG4gIH1cblxuICBmaW5kRGVzdGluYXRpb25CeUlEKGRlc3RpbmF0aW9uSUQpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxEZXN0aW5hdGlvbnMuZmluZChkZXN0aW5hdGlvbiA9PiBkZXN0aW5hdGlvbi5pZCA9PT0gZGVzdGluYXRpb25JRCk7XG4gIH1cblxuICBjYWxjVHJpcENvc3QoZHVyYXRpb24sIHRyYXZlbGVycywgZGVzdGluYXRpb25JRCkge1xuICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gdGhpcy5maW5kRGVzdGluYXRpb25CeUlEKGRlc3RpbmF0aW9uSUQpO1xuICAgIGNvbnN0IHRvdGFsV2l0aENvbW1pc3Npb24gPSAoKGRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICogZHVyYXRpb24pICsgKGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKiB0cmF2ZWxlcnMpKSAqIDEuMTtcblxuICAgIHJldHVybiBwYXJzZUludCh0b3RhbFdpdGhDb21taXNzaW9uLnRvRml4ZWQoMikpO1xuICB9XG5cbiAgZmluZElEQnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBkZXNpcmVkRGVzdGluYXRpb24gPSB0aGlzLmFsbERlc3RpbmF0aW9ucy5maW5kKGRlc3RpbmF0aW9uID0+IGRlc3RpbmF0aW9uLmRlc3RpbmF0aW9uLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobmFtZS50b0xvd2VyQ2FzZSgpKSk7XG4gICAgXG4gICAgaWYgKGRlc2lyZWREZXN0aW5hdGlvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZGVzaXJlZERlc3RpbmF0aW9uLmlkO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvbnNSZXBvOyIsImNsYXNzIFRyYXZlbGVyIHtcbiAgY29uc3RydWN0b3IodXNlcikge1xuICAgIHRoaXMuaWQgPSB1c2VyLmlkO1xuICAgIHRoaXMubmFtZSA9IHVzZXIubmFtZTtcbiAgICB0aGlzLnRyYXZlbGVyVHlwZSA9IHVzZXIudHJhdmVsZXJUeXBlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbGVyOyIsImNsYXNzIFRyYXZlbGVyc1JlcG8ge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5hbGxUcmF2ZWxlcnMgPSBkYXRhLnRyYXZlbGVycztcbiAgfVxuXG4gIGNoZWNrRm9ySUQodXNlcm5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxUcmF2ZWxlcnMuZmluZCh0cmF2ZWxlciA9PiB0cmF2ZWxlci5pZCA9PT0gdXNlcm5hbWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbGVyc1JlcG87IiwiY2xhc3MgVHJpcHNSZXBvIHtcbiAgY29uc3RydWN0b3IodHJpcHNEYXRhKSB7XG4gICAgdGhpcy5hbGxUcmlwcyA9IHRyaXBzRGF0YS50cmlwcztcbiAgfVxuXG4gIGZpbHRlclRyYXZlbGVyVHJpcHModHJhdmVsZXJJRCkge1xuICAgIHJldHVybiB0aGlzLmFsbFRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAudXNlcklEID09PSB0cmF2ZWxlcklEKTtcbiAgfVxuXG4gIGZpbHRlclBlbmRpbmdUcmlwcygpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxUcmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLnN0YXR1cyA9PT0gXCJwZW5kaW5nXCIpO1xuICB9XG5cbiAgZmluZFRyaXBCeVRyaXBJRCh0cmlwSUQpIHtcbiAgICByZXR1cm4gdGhpcy5hbGxUcmlwcy5maW5kKHRyaXAgPT4gdHJpcC5pZCA9PT0gcGFyc2VJbnQodHJpcElEKSk7XG4gIH1cblxuICB0b3RhbEFubnVhbFRyaXBzQ29zdCh0cmF2ZWxlcklELCB5ZWFyLCBkZXN0aW5hdGlvbnNSZXBvKSB7XG4gICAgY29uc3QgYW5udWFsVHJpcHMgPSB0aGlzLmFsbFRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAudXNlcklEID09PSB0cmF2ZWxlcklEICYmIHRyaXAuZGF0ZS5pbmNsdWRlcyh5ZWFyKSk7XG5cbiAgICByZXR1cm4gYW5udWFsVHJpcHMucmVkdWNlKCh0b3RhbENvc3QsIHRyaXApID0+IHtcbiAgICAgIGNvbnN0IHRyaXBDb3N0ID0gZGVzdGluYXRpb25zUmVwby5jYWxjVHJpcENvc3QodHJpcC5kdXJhdGlvbiwgdHJpcC50cmF2ZWxlcnMsIHRyaXAuZGVzdGluYXRpb25JRCk7XG4gICAgICB0b3RhbENvc3QgKz0gdHJpcENvc3Q7XG4gICAgICByZXR1cm4gdG90YWxDb3N0O1xuICAgIH0sIDApXG4gIH1cblxuICB0b3RhbFBlbmRpbmdUcmlwc0Nvc3QodHJhdmVsZXJJRCwgZGVzdGluYXRpb25zUmVwbykge1xuICAgIGNvbnN0IHBlbmRpbmdUcmlwcyA9IHRoaXMuYWxsVHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC51c2VySUQgPT09IHRyYXZlbGVySUQgJiYgdHJpcC5zdGF0dXMgPT09IFwicGVuZGluZ1wiKTtcblxuICAgIHJldHVybiBwZW5kaW5nVHJpcHMucmVkdWNlKCh0b3RhbENvc3QsIHRyaXApID0+IHtcbiAgICAgIGNvbnN0IHRyaXBDb3N0ID0gZGVzdGluYXRpb25zUmVwby5jYWxjVHJpcENvc3QodHJpcC5kdXJhdGlvbiwgdHJpcC50cmF2ZWxlcnMsIHRyaXAuZGVzdGluYXRpb25JRCk7XG4gICAgICB0b3RhbENvc3QgKz0gdHJpcENvc3Q7XG4gICAgICByZXR1cm4gdG90YWxDb3N0O1xuICAgIH0sIDApIFxuICB9XG5cbiAgdG90YWxBbm51YWxDb21taXNzaW9uKHllYXIsIGRlc3RpbmF0aW9uc1JlcG8pIHtcbiAgICBjb25zdCBhbm51YWxBZG1pblRyaXBzID0gdGhpcy5hbGxUcmlwcy5maWx0ZXIodHJpcCA9PiB0cmlwLmRhdGUuaW5jbHVkZXMoeWVhcikgJiYgdHJpcC5zdGF0dXMgPT09IFwiYXBwcm92ZWRcIik7XG5cbiAgICByZXR1cm4gYW5udWFsQWRtaW5Ucmlwcy5yZWR1Y2UoKHRvdGFsQ29zdCwgdHJpcCkgPT4ge1xuICAgICAgY29uc3QgdHJpcENvc3QgPSBkZXN0aW5hdGlvbnNSZXBvLmNhbGNUcmlwQ29zdCh0cmlwLmR1cmF0aW9uLCB0cmlwLnRyYXZlbGVycywgdHJpcC5kZXN0aW5hdGlvbklEKTtcbiAgICAgIHRvdGFsQ29zdCArPSB0cmlwQ29zdDtcbiAgICAgIHJldHVybiB0b3RhbENvc3QgKiAwLjE7XG4gICAgfSwgMClcbiAgfVxuXG4gIGZpbHRlclRyaXBzVG9kYXkoZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLmFsbFRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAuZGF0ZSA9PT0gZGF0ZSk7XG4gIH1cbn0gXG5cbmV4cG9ydCBkZWZhdWx0IFRyaXBzUmVwbzsiXSwic291cmNlUm9vdCI6IiJ9