"use strict";
self["webpackHotUpdaterestaurant_apps"]("app",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../public/images/heros/hero-image_1.jpg */ "./src/public/images/heros/hero-image_1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n}\n\n/* navbar */\n#drawer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  background-color: #5CB969;\n  white-space: nowrap;\n}\n\n.nav__list {\n  width: 100%;\n  padding-right: 10px;\n  margin: 0;\n  display: flex;\n  gap: 10rem;\n  align-items: center;\n}\n\n.nav__item {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 20%;\n  text-align: center;\n  line-height: 24px;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.nav a {\n  display: inline-block;\n  /* padding: 1.3em; */\n  text-decoration: none;\n  color: #ffffff;\n}\n\n.nav a:hover {\n  text-decoration:wavy;\n  color: #2c9330;\n  font-weight: bolder;\n}\n\n.logo{\n  width: 20%;\n  height: 20%;\n  padding-left: 30px;\n}\n\n#hamburger{\n  display: none;\n}\n\n/* hero */\n.hero {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  background-position: center;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.hero__inner {\n  margin: 0 auto;\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.hero__title {\n  color: #5CB969;\n  font-weight: bold;\n  font-size: 45px;\n}\n\n.hero__tagline {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n  display: flex;\n  text-align: center;\n}\n\n/* content */\n.explore {\n  width: 100%;\n  margin: 60px auto;\n  text-align: center;\n}\n\n.explore__label {\n  font-size: 32px;\n  font-weight: lighter;\n  color: #5CB969;\n}\n\n.explore__label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 1px solid #eeeeee;\n}\n\n.content{\n  padding: 32px;\n}\n\n#restaurants-list{\n  margin: 32px auto auto;\n  text-align: left;\n}\n\n.restaurant-item{\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  gap: 20px;\n  margin: 10px 0 20px 10px;\n  background-color: #5CB969;\n  z-index: -1;\n  color: #ffffff;\n  position: relative;\n}\n\n.restaurant-item img{\n  width: 100%;\n  height: 20vw;\n  object-fit: cover;\n  position: relative;\n  z-index: -1;\n}\n\n.restaurant-item h2, h3, p{\n  padding: 10px 32px 0 32px;\n  font-size: 16px;\n  text-align: justify;\n}\n\n.restaurant-item h3{\n  font-size: 20px;\n}\n\n.restaurant-item h2{\n  color: #dde414;\n}\n\n.restaurant-item p{\n  padding-bottom: 32px;\n}\n\n.restaurant-item h1 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #5CB969;\n  background-color: #fff;\n  font-size: 24px;\n  font-weight: bold;\n  padding: 10px;\n  margin: 0;\n  border-bottom-right-radius: 10px;\n}\n\n/* footer */\nfooter{\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 2em;\n  font-size: 16px;\n  color: white;\n  background-color: #5CB969;\n}\n\nfooter p{\n  white-space: nowrap;\n}\n\n\n/* minimal layar ukuran sedang */\n@media screen and (min-width: 600px){\n  #restaurants-list{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 32px;\n  }\n\n  .restaurant-item p{\n    font-size: 18px;\n  }\n\n  .restaurant-item h3{\n    font-size: 22px;\n  }\n}\n\n/* minimal layar ukuran besar */\n@media screen and (min-width: 1200px){\n  #restaurants-list{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 32px;\n  } \n\n  .hero{\n    min-width: 1000px;\n  }\n}\n\n\n/*maksimal layar ukuran kecil*/\n@media screen and (max-width: 450px){\n  .navbar-container{\n    display: flex;\n    justify-content: center;\n  }\n\n  .drawer-list{\n    display: flex;\n    height: 60%;\n    position: absolute;\n    transform: translate(-350px, 0);\n    transition: transform 0.3s ease-in-out;\n    background-color:#ffffff;\n  }\n  \n  .drawer-list.open{\n    transform: translate(0,0);\n  }\n\n  nav img .logo{\n    display: flex;\n    justify-content: center;\n    width: 500px;\n  }\n\n  #hamburger{\n    display: block;\n    font-size: 32px;\n    text-decoration: none;\n    color: black;\n    background-color: none;\n    margin: 0px 0 10px 0;\n  }\n  \n  .nav__list {\n    list-style-type: none;\n    padding: 0 16px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .nav__item{\n    padding: 5px 0px;;\n    border-bottom: 1px solid #ccc;\n    margin-bottom: 16px;\n    width: auto;\n  }\n  \n  .nav a {\n    padding: 1.3em;\n    text-decoration: none;\n    color: #616161;\n    text-align: center;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n}\n\n/* navbar */\n#drawer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  background-color: #5CB969;\n  white-space: nowrap;\n}\n\n.nav__list {\n  width: 100%;\n  padding-right: 10px;\n  margin: 0;\n  display: flex;\n  gap: 10rem;\n  align-items: center;\n}\n\n.nav__item {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 20%;\n  text-align: center;\n  line-height: 24px;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.nav a {\n  display: inline-block;\n  /* padding: 1.3em; */\n  text-decoration: none;\n  color: #ffffff;\n}\n\n.nav a:hover {\n  text-decoration:wavy;\n  color: #2c9330;\n  font-weight: bolder;\n}\n\n.logo{\n  width: 20%;\n  height: 20%;\n  padding-left: 30px;\n}\n\n#hamburger{\n  display: none;\n}\n\n/* hero */\n.hero {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  background-position: center;\n  background-image: url('../public/images/heros/hero-image_1.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.hero__inner {\n  margin: 0 auto;\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.hero__title {\n  color: #5CB969;\n  font-weight: bold;\n  font-size: 45px;\n}\n\n.hero__tagline {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n  display: flex;\n  text-align: center;\n}\n\n/* content */\n.explore {\n  width: 100%;\n  margin: 60px auto;\n  text-align: center;\n}\n\n.explore__label {\n  font-size: 32px;\n  font-weight: lighter;\n  color: #5CB969;\n}\n\n.explore__label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 1px solid #eeeeee;\n}\n\n.content{\n  padding: 32px;\n}\n\n#restaurants-list{\n  margin: 32px auto auto;\n  text-align: left;\n}\n\n.restaurant-item{\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  gap: 20px;\n  margin: 10px 0 20px 10px;\n  background-color: #5CB969;\n  z-index: -1;\n  color: #ffffff;\n  position: relative;\n}\n\n.restaurant-item img{\n  width: 100%;\n  height: 20vw;\n  object-fit: cover;\n  position: relative;\n  z-index: -1;\n}\n\n.restaurant-item h2, h3, p{\n  padding: 10px 32px 0 32px;\n  font-size: 16px;\n  text-align: justify;\n}\n\n.restaurant-item h3{\n  font-size: 20px;\n}\n\n.restaurant-item h2{\n  color: #dde414;\n}\n\n.restaurant-item p{\n  padding-bottom: 32px;\n}\n\n.restaurant-item h1 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #5CB969;\n  background-color: #fff;\n  font-size: 24px;\n  font-weight: bold;\n  padding: 10px;\n  margin: 0;\n  border-bottom-right-radius: 10px;\n}\n\n/* footer */\nfooter{\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 2em;\n  font-size: 16px;\n  color: white;\n  background-color: #5CB969;\n}\n\nfooter p{\n  white-space: nowrap;\n}\n\n\n/* minimal layar ukuran sedang */\n@media screen and (min-width: 600px){\n  #restaurants-list{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 32px;\n  }\n\n  .restaurant-item p{\n    font-size: 18px;\n  }\n\n  .restaurant-item h3{\n    font-size: 22px;\n  }\n}\n\n/* minimal layar ukuran besar */\n@media screen and (min-width: 1200px){\n  #restaurants-list{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 32px;\n  } \n\n  .hero{\n    min-width: 1000px;\n  }\n}\n\n\n/*maksimal layar ukuran kecil*/\n@media screen and (max-width: 450px){\n  .navbar-container{\n    display: flex;\n    justify-content: center;\n  }\n\n  .drawer-list{\n    display: flex;\n    height: 60%;\n    position: absolute;\n    transform: translate(-350px, 0);\n    transition: transform 0.3s ease-in-out;\n    background-color:#ffffff;\n  }\n  \n  .drawer-list.open{\n    transform: translate(0,0);\n  }\n\n  nav img .logo{\n    display: flex;\n    justify-content: center;\n    width: 500px;\n  }\n\n  #hamburger{\n    display: block;\n    font-size: 32px;\n    text-decoration: none;\n    color: black;\n    background-color: none;\n    margin: 0px 0 10px 0;\n  }\n  \n  .nav__list {\n    list-style-type: none;\n    padding: 0 16px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .nav__item{\n    padding: 5px 0px;;\n    border-bottom: 1px solid #ccc;\n    margin-bottom: 16px;\n    width: auto;\n  }\n  \n  .nav a {\n    padding: 1.3em;\n    text-decoration: none;\n    color: #616161;\n    text-align: center;\n  }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("19c3a34867376923c0ab")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxRQUFRLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFV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NkJBQTZCLDhCQUE4QiwwQkFBMEIseUJBQXlCLEtBQUssaUJBQWlCLHdCQUF3QixvQ0FBb0MsMEJBQTBCLGtCQUFrQixLQUFLLGdCQUFnQixxQkFBcUIsNEJBQTRCLHFCQUFxQix5QkFBeUIsS0FBSyxHQUFHLG1CQUFtQjtBQUM3NFg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDVnZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9wdWJsaWMvaW1hZ2VzL2hlcm9zL2hlcm8taW1hZ2VfMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi8qIG5hdmJhciAqL1xcbiNkcmF3ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Q0I5Njk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ubmF2X19saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdl9faXRlbSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDIwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLm5hdiBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIC8qIHBhZGRpbmc6IDEuM2VtOyAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5uYXYgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246d2F2eTtcXG4gIGNvbG9yOiAjMmM5MzMwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLmxvZ297XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiAyMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxufVxcblxcbiNoYW1idXJnZXJ7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBoZXJvICovXFxuLmhlcm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDM4MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5oZXJvX19pbm5lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVyb19fdGl0bGUge1xcbiAgY29sb3I6ICM1Q0I5Njk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG59XFxuXFxuLmhlcm9fX3RhZ2xpbmUge1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIGNvbnRlbnQgKi9cXG4uZXhwbG9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogNjBweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZXhwbG9yZV9fbGFiZWwge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBjb2xvcjogIzVDQjk2OTtcXG59XFxuXFxuLmV4cGxvcmVfX2xhYmVsOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlZWVlO1xcbn1cXG5cXG4uY29udGVudHtcXG4gIHBhZGRpbmc6IDMycHg7XFxufVxcblxcbiNyZXN0YXVyYW50cy1saXN0e1xcbiAgbWFyZ2luOiAzMnB4IGF1dG8gYXV0bztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW17XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDAgMjBweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjk2OTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gaW1ne1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwdnc7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ucmVzdGF1cmFudC1pdGVtIGgyLCBoMywgcHtcXG4gIHBhZGRpbmc6IDEwcHggMzJweCAwIDMycHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4ucmVzdGF1cmFudC1pdGVtIGgze1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ucmVzdGF1cmFudC1pdGVtIGgye1xcbiAgY29sb3I6ICNkZGU0MTQ7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gcHtcXG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4ucmVzdGF1cmFudC1pdGVtIGgxIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBjb2xvcjogIzVDQjk2OTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuZm9vdGVye1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyZW07XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNCOTY5O1xcbn1cXG5cXG5mb290ZXIgcHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcblxcbi8qIG1pbmltYWwgbGF5YXIgdWt1cmFuIHNlZGFuZyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KXtcXG4gICNyZXN0YXVyYW50cy1saXN0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6IDMycHg7XFxuICB9XFxuXFxuICAucmVzdGF1cmFudC1pdGVtIHB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG5cXG4gIC5yZXN0YXVyYW50LWl0ZW0gaDN7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gIH1cXG59XFxuXFxuLyogbWluaW1hbCBsYXlhciB1a3VyYW4gYmVzYXIgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe1xcbiAgI3Jlc3RhdXJhbnRzLWxpc3R7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMzJweDtcXG4gIH0gXFxuXFxuICAuaGVyb3tcXG4gICAgbWluLXdpZHRoOiAxMDAwcHg7XFxuICB9XFxufVxcblxcblxcbi8qbWFrc2ltYWwgbGF5YXIgdWt1cmFuIGtlY2lsKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCl7XFxuICAubmF2YmFyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZHJhd2VyLWxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNTBweCwgMCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XFxuICB9XFxuICBcXG4gIC5kcmF3ZXItbGlzdC5vcGVue1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xcbiAgfVxcblxcbiAgbmF2IGltZyAubG9nb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gIH1cXG5cXG4gICNoYW1idXJnZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgICBtYXJnaW46IDBweCAwIDEwcHggMDtcXG4gIH1cXG4gIFxcbiAgLm5hdl9fbGlzdCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZzogMCAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLm5hdl9faXRlbXtcXG4gICAgcGFkZGluZzogNXB4IDBweDs7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG4gIFxcbiAgLm5hdiBhIHtcXG4gICAgcGFkZGluZzogMS4zZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICM2MTYxNjE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFB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QUFDOUI7RUFDRTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsV0FBVztJQUNYLGtCQUFrQjtJQUNsQiwrQkFBK0I7SUFDL0Isc0NBQXNDO0lBQ3RDLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi8qIG5hdmJhciAqL1xcbiNkcmF3ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Q0I5Njk7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG5cXG4ubmF2X19saXN0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm5hdl9faXRlbSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDIwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuXFxuLm5hdiBhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIC8qIHBhZGRpbmc6IDEuM2VtOyAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxufVxcblxcbi5uYXYgYTpob3ZlciB7XFxuICB0ZXh0LWRlY29yYXRpb246d2F2eTtcXG4gIGNvbG9yOiAjMmM5MzMwO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLmxvZ297XFxuICB3aWR0aDogMjAlO1xcbiAgaGVpZ2h0OiAyMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxufVxcblxcbiNoYW1idXJnZXJ7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKiBoZXJvICovXFxuLmhlcm8ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1pbi1oZWlnaHQ6IDM4MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL3B1YmxpYy9pbWFnZXMvaGVyb3MvaGVyby1pbWFnZV8xLmpwZycpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxufVxcblxcbi5oZXJvX19pbm5lciB7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaGVyb19fdGl0bGUge1xcbiAgY29sb3I6ICM1Q0I5Njk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogNDVweDtcXG59XFxuXFxuLmhlcm9fX3RhZ2xpbmUge1xcbiAgY29sb3I6ICNmZmY7XFxuICBtYXJnaW4tdG9wOiAxNnB4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi8qIGNvbnRlbnQgKi9cXG4uZXhwbG9yZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogNjBweCBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZXhwbG9yZV9fbGFiZWwge1xcbiAgZm9udC1zaXplOiAzMnB4O1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBjb2xvcjogIzVDQjk2OTtcXG59XFxuXFxuLmV4cGxvcmVfX2xhYmVsOjphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlZWVlO1xcbn1cXG5cXG4uY29udGVudHtcXG4gIHBhZGRpbmc6IDMycHg7XFxufVxcblxcbiNyZXN0YXVyYW50cy1saXN0e1xcbiAgbWFyZ2luOiAzMnB4IGF1dG8gYXV0bztcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW17XFxuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgbWFyZ2luOiAxMHB4IDAgMjBweCAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjk2OTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gaW1ne1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDIwdnc7XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4ucmVzdGF1cmFudC1pdGVtIGgyLCBoMywgcHtcXG4gIHBhZGRpbmc6IDEwcHggMzJweCAwIDMycHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4ucmVzdGF1cmFudC1pdGVtIGgze1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ucmVzdGF1cmFudC1pdGVtIGgye1xcbiAgY29sb3I6ICNkZGU0MTQ7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gcHtcXG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xcbn1cXG5cXG4ucmVzdGF1cmFudC1pdGVtIGgxIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBjb2xvcjogIzVDQjk2OTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDA7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLyogZm9vdGVyICovXFxuZm9vdGVye1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAyZW07XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNCOTY5O1xcbn1cXG5cXG5mb290ZXIgcHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcblxcbi8qIG1pbmltYWwgbGF5YXIgdWt1cmFuIHNlZGFuZyAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KXtcXG4gICNyZXN0YXVyYW50cy1saXN0e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6IDMycHg7XFxuICB9XFxuXFxuICAucmVzdGF1cmFudC1pdGVtIHB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG5cXG4gIC5yZXN0YXVyYW50LWl0ZW0gaDN7XFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXG4gIH1cXG59XFxuXFxuLyogbWluaW1hbCBsYXlhciB1a3VyYW4gYmVzYXIgKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpe1xcbiAgI3Jlc3RhdXJhbnRzLWxpc3R7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxuICAgIGdhcDogMzJweDtcXG4gIH0gXFxuXFxuICAuaGVyb3tcXG4gICAgbWluLXdpZHRoOiAxMDAwcHg7XFxuICB9XFxufVxcblxcblxcbi8qbWFrc2ltYWwgbGF5YXIgdWt1cmFuIGtlY2lsKi9cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCl7XFxuICAubmF2YmFyLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICAuZHJhd2VyLWxpc3R7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zNTBweCwgMCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XFxuICB9XFxuICBcXG4gIC5kcmF3ZXItbGlzdC5vcGVue1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xcbiAgfVxcblxcbiAgbmF2IGltZyAubG9nb3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gIH1cXG5cXG4gICNoYW1idXJnZXJ7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBmb250LXNpemU6IDMycHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBub25lO1xcbiAgICBtYXJnaW46IDBweCAwIDEwcHggMDtcXG4gIH1cXG4gIFxcbiAgLm5hdl9fbGlzdCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgcGFkZGluZzogMCAxNnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLm5hdl9faXRlbXtcXG4gICAgcGFkZGluZzogNXB4IDBweDs7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xcbiAgICB3aWR0aDogYXV0bztcXG4gIH1cXG4gIFxcbiAgLm5hdiBhIHtcXG4gICAgcGFkZGluZzogMS4zZW07XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29sb3I6ICM2MTYxNjE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE5YzNhMzQ4NjczNzY5MjNjMGFiXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9