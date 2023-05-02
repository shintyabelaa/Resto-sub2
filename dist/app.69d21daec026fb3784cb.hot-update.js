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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n}\n\n/* navbar */\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  background-color: #5CB969;\n  white-space: nowrap;\n}\n\n.nav__list {\n  width: 100%;\n  padding-right: 50px;\n  margin: 0;\n  display: flex;\n  gap: 10rem;\n  align-items: center;\n}\n\n.nav__item {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 20%;\n  text-align: center;\n  line-height: 24px;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.nav a {\n  display: inline-block;\n  /* padding: 1.3em; */\n  text-decoration: none;\n  color: #ffffff;\n}\n\n.nav a:hover {\n  text-decoration:wavy;\n  color: #2c9330;\n  font-weight: bolder;\n}\n\n.logo{\n  width: 20%;\n  height: 20%;\n  padding-left: 30px;\n}\n\n#hamburger{\n  display: none;\n}\n\n/* hero */\n.hero {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  background-position: center;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.hero__inner {\n  margin: 0 auto;\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.hero__title {\n  color: #5CB969;\n  font-weight: bold;\n  font-size: 45px;\n}\n\n.hero__tagline {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n  display: flex;\n  text-align: center;\n}\n\n/* content */\n.explore {\n  width: 100%;\n  margin: 60px auto;\n  text-align: center;\n}\n\n.explore__label {\n  font-size: 32px;\n  font-weight: lighter;\n  color: #5CB969;\n}\n\n.explore__label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 1px solid #eeeeee;\n}\n\n.content{\n  padding: 32px;\n}\n\n#restaurants-list{\n  margin: 32px auto auto;\n  text-align: left;\n}\n\n.restaurant-item{\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  gap: 20px;\n  margin: 10px 0 20px 10px;\n  background-color: #5CB969;\n  z-index: -1;\n  color: #ffffff;\n  position: relative;\n}\n\n.restaurant-item img{\n  width: 100%;\n  height: 20vw;\n  object-fit: cover;\n  position: relative;\n  z-index: -1;\n}\n\n.restaurant-item h2, h3, p{\n  padding: 10px 32px 0 32px;\n  font-size: 16px;\n  text-align: justify;\n}\n\n.restaurant-item h3{\n  font-size: 20px;\n}\n\n.restaurant-item h2{\n  color: #dde414;\n}\n\n.restaurant-item p{\n  padding-bottom: 32px;\n}\n\n.restaurant-item h1 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #5CB969;\n  background-color: #fff;\n  font-size: 24px;\n  font-weight: bold;\n  padding: 10px;\n  margin: 0;\n  border-bottom-right-radius: 10px;\n}\n\n/* footer */\nfooter{\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 2em;\n  font-size: 16px;\n  color: white;\n  background-color: #5CB969;\n}\n\nfooter p{\n  white-space: nowrap;\n}\n\n\n/* minimal layar ukuran sedang */\n@media screen and (min-width: 600px){\n  #restaurants-list{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 32px;\n  }\n\n  .restaurant-item p{\n    font-size: 18px;\n  }\n\n  .restaurant-item h3{\n    font-size: 22px;\n  }\n}\n\n/* minimal layar ukuran besar */\n@media screen and (min-width: 1200px){\n  #restaurants-list{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 32px;\n  } \n\n  .hero{\n    min-width: 1000px;\n  }\n}\n\n\n/*maksimal layar ukuran kecil*/\n@media screen and (max-width: 450px){\n  .navbar-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #5CB969;\n    margin: 0;\n  }\n\n  #drawer{\n    text-align: center;\n    display: flex;\n    justify-content: center;\n  }\n\n  .drawer-list{\n    display: flex;\n    height: 60%;\n    position: absolute;\n    transform: translate(-350px, 0);\n    transition: transform 0.3s ease-in-out;\n    background-color:#ffffff;\n  }\n  \n  .drawer-list.open{\n    transform: translate(0,0);\n  }\n\n  img.logo{\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    width: 50%;\n    height: 50%;\n  }\n\n  #hamburger{\n    display: block;\n    font-size: 32px;\n    text-decoration: none;\n    color: rgb(255, 255, 255);\n    margin: 0 0 0 20px;\n   \n    \n  }\n  \n  .nav__list {\n    list-style-type: none;\n    padding: 0 16px;\n    \n  }\n\n  .nav__item{\n    padding: 5px 0px;\n    border-bottom: 1px solid #ccc;\n    margin-bottom: 16px;\n    width: auto;\n  }\n  \n .nav__item a {\n  color: #333;\n  text-decoration: none;\n}\n}", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody, html {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\n\nbody {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n}\n\n/* navbar */\nnav {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  background-color: #5CB969;\n  white-space: nowrap;\n}\n\n.nav__list {\n  width: 100%;\n  padding-right: 50px;\n  margin: 0;\n  display: flex;\n  gap: 10rem;\n  align-items: center;\n}\n\n.nav__item {\n  box-sizing: border-box;\n  display: inline-block;\n  width: 20%;\n  text-align: center;\n  line-height: 24px;\n  font-size: 18px;\n  text-transform: uppercase;\n}\n\n.nav a {\n  display: inline-block;\n  /* padding: 1.3em; */\n  text-decoration: none;\n  color: #ffffff;\n}\n\n.nav a:hover {\n  text-decoration:wavy;\n  color: #2c9330;\n  font-weight: bolder;\n}\n\n.logo{\n  width: 20%;\n  height: 20%;\n  padding-left: 30px;\n}\n\n#hamburger{\n  display: none;\n}\n\n/* hero */\n.hero {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 380px;\n  width: 100%;\n  text-align: center;\n  background-position: center;\n  background-image: url('../public/images/heros/hero-image_1.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.hero__inner {\n  margin: 0 auto;\n  max-width: 800px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.hero__title {\n  color: #5CB969;\n  font-weight: bold;\n  font-size: 45px;\n}\n\n.hero__tagline {\n  color: #fff;\n  margin-top: 16px;\n  font-size: 18px;\n  font-weight: 300;\n  display: flex;\n  text-align: center;\n}\n\n/* content */\n.explore {\n  width: 100%;\n  margin: 60px auto;\n  text-align: center;\n}\n\n.explore__label {\n  font-size: 32px;\n  font-weight: lighter;\n  color: #5CB969;\n}\n\n.explore__label::after {\n  content: '';\n  margin-top: 16px;\n  display: block;\n  border-bottom: 1px solid #eeeeee;\n}\n\n.content{\n  padding: 32px;\n}\n\n#restaurants-list{\n  margin: 32px auto auto;\n  text-align: left;\n}\n\n.restaurant-item{\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 10px;\n  gap: 20px;\n  margin: 10px 0 20px 10px;\n  background-color: #5CB969;\n  z-index: -1;\n  color: #ffffff;\n  position: relative;\n}\n\n.restaurant-item img{\n  width: 100%;\n  height: 20vw;\n  object-fit: cover;\n  position: relative;\n  z-index: -1;\n}\n\n.restaurant-item h2, h3, p{\n  padding: 10px 32px 0 32px;\n  font-size: 16px;\n  text-align: justify;\n}\n\n.restaurant-item h3{\n  font-size: 20px;\n}\n\n.restaurant-item h2{\n  color: #dde414;\n}\n\n.restaurant-item p{\n  padding-bottom: 32px;\n}\n\n.restaurant-item h1 {\n  position: absolute;\n  top: 0;\n  left: 0;\n  color: #5CB969;\n  background-color: #fff;\n  font-size: 24px;\n  font-weight: bold;\n  padding: 10px;\n  margin: 0;\n  border-bottom-right-radius: 10px;\n}\n\n/* footer */\nfooter{\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  padding: 2em;\n  font-size: 16px;\n  color: white;\n  background-color: #5CB969;\n}\n\nfooter p{\n  white-space: nowrap;\n}\n\n\n/* minimal layar ukuran sedang */\n@media screen and (min-width: 600px){\n  #restaurants-list{\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 32px;\n  }\n\n  .restaurant-item p{\n    font-size: 18px;\n  }\n\n  .restaurant-item h3{\n    font-size: 22px;\n  }\n}\n\n/* minimal layar ukuran besar */\n@media screen and (min-width: 1200px){\n  #restaurants-list{\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 32px;\n  } \n\n  .hero{\n    min-width: 1000px;\n  }\n}\n\n\n/*maksimal layar ukuran kecil*/\n@media screen and (max-width: 450px){\n  .navbar-container{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #5CB969;\n    margin: 0;\n  }\n\n  #drawer{\n    text-align: center;\n    display: flex;\n    justify-content: center;\n  }\n\n  .drawer-list{\n    display: flex;\n    height: 60%;\n    position: absolute;\n    transform: translate(-350px, 0);\n    transition: transform 0.3s ease-in-out;\n    background-color:#ffffff;\n  }\n  \n  .drawer-list.open{\n    transform: translate(0,0);\n  }\n\n  img.logo{\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    width: 50%;\n    height: 50%;\n  }\n\n  #hamburger{\n    display: block;\n    font-size: 32px;\n    text-decoration: none;\n    color: rgb(255, 255, 255);\n    margin: 0 0 0 20px;\n   \n    \n  }\n  \n  .nav__list {\n    list-style-type: none;\n    padding: 0 16px;\n    \n  }\n\n  .nav__item{\n    padding: 5px 0px;\n    border-bottom: 1px solid #ccc;\n    margin-bottom: 16px;\n    width: auto;\n  }\n  \n .nav__item a {\n  color: #333;\n  text-decoration: none;\n}\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2821ea3cd0facb8f4050")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFN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SyxpQkFBaUIscUJBQXFCLHNCQUFzQiw0QkFBNEIsZ0NBQWdDLHlCQUF5QixnQkFBZ0Isb0JBQW9CLDRCQUE0QixzQkFBc0IsV0FBVyxpQkFBaUIsdUJBQXVCLG9DQUFvQywwQkFBMEIsa0JBQWtCLEtBQUsscUJBQXFCLGdCQUFnQiwwQkFBMEIsR0FBRyxHQUFHLG1CQUFtQjtBQUNoOFg7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDVnZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1hcHBzLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LWFwcHMvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9wdWJsaWMvaW1hZ2VzL2hlcm9zL2hlcm8taW1hZ2VfMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi8qIG5hdmJhciAqL1xcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjk2OTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5uYXZfX2xpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTByZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2X19pdGVtIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ubmF2IGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLyogcGFkZGluZzogMS4zZW07ICovXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLm5hdiBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjp3YXZ5O1xcbiAgY29sb3I6ICMyYzkzMzA7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4ubG9nb3tcXG4gIHdpZHRoOiAyMCU7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuXFxuI2hhbWJ1cmdlcntcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIGhlcm8gKi9cXG4uaGVybyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMzgwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmhlcm9fX2lubmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZXJvX190aXRsZSB7XFxuICBjb2xvcjogIzVDQjk2OTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiA0NXB4O1xcbn1cXG5cXG4uaGVyb19fdGFnbGluZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogY29udGVudCAqL1xcbi5leHBsb3JlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiA2MHB4IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5leHBsb3JlX19sYWJlbCB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGNvbG9yOiAjNUNCOTY5O1xcbn1cXG5cXG4uZXhwbG9yZV9fbGFiZWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7XFxufVxcblxcbi5jb250ZW50e1xcbiAgcGFkZGluZzogMzJweDtcXG59XFxuXFxuI3Jlc3RhdXJhbnRzLWxpc3R7XFxuICBtYXJnaW46IDMycHggYXV0byBhdXRvO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbXtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW46IDEwcHggMCAyMHB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNCOTY5O1xcbiAgei1pbmRleDogLTE7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbSBpbWd7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjB2dztcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gaDIsIGgzLCBwe1xcbiAgcGFkZGluZzogMTBweCAzMnB4IDAgMzJweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gaDN7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gaDJ7XFxuICBjb2xvcjogI2RkZTQxNDtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbSBwe1xcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gaDEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGNvbG9yOiAjNUNCOTY5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5mb290ZXJ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Q0I5Njk7XFxufVxcblxcbmZvb3RlciBwe1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuXFxuLyogbWluaW1hbCBsYXlhciB1a3VyYW4gc2VkYW5nICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpe1xcbiAgI3Jlc3RhdXJhbnRzLWxpc3R7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdhcDogMzJweDtcXG4gIH1cXG5cXG4gIC5yZXN0YXVyYW50LWl0ZW0gcHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcblxcbiAgLnJlc3RhdXJhbnQtaXRlbSBoM3tcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgfVxcbn1cXG5cXG4vKiBtaW5pbWFsIGxheWFyIHVrdXJhbiBiZXNhciAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCl7XFxuICAjcmVzdGF1cmFudHMtbGlzdHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOiAzMnB4O1xcbiAgfSBcXG5cXG4gIC5oZXJve1xcbiAgICBtaW4td2lkdGg6IDEwMDBweDtcXG4gIH1cXG59XFxuXFxuXFxuLyptYWtzaW1hbCBsYXlhciB1a3VyYW4ga2VjaWwqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KXtcXG4gIC5uYXZiYXItY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjk2OTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgI2RyYXdlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5kcmF3ZXItbGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1MHB4LCAwKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcXG4gIH1cXG4gIFxcbiAgLmRyYXdlci1saXN0Lm9wZW57XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICB9XFxuXFxuICBpbWcubG9nb3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICB9XFxuXFxuICAjaGFtYnVyZ2Vye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIG1hcmdpbjogMCAwIDAgMjBweDtcXG4gICBcXG4gICAgXFxuICB9XFxuICBcXG4gIC5uYXZfX2xpc3Qge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAgMTZweDtcXG4gICAgXFxuICB9XFxuXFxuICAubmF2X19pdGVte1xcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuICBcXG4gLm5hdl9faXRlbSBhIHtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JB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LFNBQVM7RUFDWDs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGOzs7QUFHQSw4QkFBOEI7QUFDOUI7RUFDRTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLCtCQUErQjtJQUMvQixzQ0FBc0M7SUFDdEMsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixrQkFBa0I7OztFQUdwQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixlQUFlOztFQUVqQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQiw2QkFBNkI7SUFDN0IsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjs7Q0FFRDtFQUNDLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFDQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi8qIG5hdmJhciAqL1xcbm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjk2OTtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcblxcbi5uYXZfX2xpc3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTByZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2X19pdGVtIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMjAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn1cXG5cXG4ubmF2IGEge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgLyogcGFkZGluZzogMS4zZW07ICovXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG59XFxuXFxuLm5hdiBhOmhvdmVyIHtcXG4gIHRleHQtZGVjb3JhdGlvbjp3YXZ5O1xcbiAgY29sb3I6ICMyYzkzMzA7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4ubG9nb3tcXG4gIHdpZHRoOiAyMCU7XFxuICBoZWlnaHQ6IDIwJTtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuXFxuI2hhbWJ1cmdlcntcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIGhlcm8gKi9cXG4uaGVybyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMzgwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vcHVibGljL2ltYWdlcy9oZXJvcy9oZXJvLWltYWdlXzEuanBnJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG59XFxuXFxuLmhlcm9fX2lubmVyIHtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgbWF4LXdpZHRoOiA4MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5oZXJvX190aXRsZSB7XFxuICBjb2xvcjogIzVDQjk2OTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiA0NXB4O1xcbn1cXG5cXG4uaGVyb19fdGFnbGluZSB7XFxuICBjb2xvcjogI2ZmZjtcXG4gIG1hcmdpbi10b3A6IDE2cHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLyogY29udGVudCAqL1xcbi5leHBsb3JlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiA2MHB4IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5leHBsb3JlX19sYWJlbCB7XFxuICBmb250LXNpemU6IDMycHg7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGNvbG9yOiAjNUNCOTY5O1xcbn1cXG5cXG4uZXhwbG9yZV9fbGFiZWw6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgbWFyZ2luLXRvcDogMTZweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7XFxufVxcblxcbi5jb250ZW50e1xcbiAgcGFkZGluZzogMzJweDtcXG59XFxuXFxuI3Jlc3RhdXJhbnRzLWxpc3R7XFxuICBtYXJnaW46IDMycHggYXV0byBhdXRvO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbXtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBtYXJnaW46IDEwcHggMCAyMHB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUNCOTY5O1xcbiAgei1pbmRleDogLTE7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbSBpbWd7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjB2dztcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogLTE7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gaDIsIGgzLCBwe1xcbiAgcGFkZGluZzogMTBweCAzMnB4IDAgMzJweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gaDN7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gaDJ7XFxuICBjb2xvcjogI2RkZTQxNDtcXG59XFxuXFxuLnJlc3RhdXJhbnQtaXRlbSBwe1xcbiAgcGFkZGluZy1ib3R0b206IDMycHg7XFxufVxcblxcbi5yZXN0YXVyYW50LWl0ZW0gaDEge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGNvbG9yOiAjNUNCOTY5O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4vKiBmb290ZXIgKi9cXG5mb290ZXJ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1Q0I5Njk7XFxufVxcblxcbmZvb3RlciBwe1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuXFxuXFxuLyogbWluaW1hbCBsYXlhciB1a3VyYW4gc2VkYW5nICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpe1xcbiAgI3Jlc3RhdXJhbnRzLWxpc3R7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdhcDogMzJweDtcXG4gIH1cXG5cXG4gIC5yZXN0YXVyYW50LWl0ZW0gcHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgfVxcblxcbiAgLnJlc3RhdXJhbnQtaXRlbSBoM3tcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcbiAgfVxcbn1cXG5cXG4vKiBtaW5pbWFsIGxheWFyIHVrdXJhbiBiZXNhciAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCl7XFxuICAjcmVzdGF1cmFudHMtbGlzdHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXG4gICAgZ2FwOiAzMnB4O1xcbiAgfSBcXG5cXG4gIC5oZXJve1xcbiAgICBtaW4td2lkdGg6IDEwMDBweDtcXG4gIH1cXG59XFxuXFxuXFxuLyptYWtzaW1hbCBsYXlhciB1a3VyYW4ga2VjaWwqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KXtcXG4gIC5uYXZiYXItY29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVDQjk2OTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgI2RyYXdlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5kcmF3ZXItbGlzdHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgaGVpZ2h0OiA2MCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTM1MHB4LCAwKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbi1vdXQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcXG4gIH1cXG4gIFxcbiAgLmRyYXdlci1saXN0Lm9wZW57XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XFxuICB9XFxuXFxuICBpbWcubG9nb3tcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MCU7XFxuICB9XFxuXFxuICAjaGFtYnVyZ2Vye1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIG1hcmdpbjogMCAwIDAgMjBweDtcXG4gICBcXG4gICAgXFxuICB9XFxuICBcXG4gIC5uYXZfX2xpc3Qge1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDAgMTZweDtcXG4gICAgXFxuICB9XFxuXFxuICAubmF2X19pdGVte1xcbiAgICBwYWRkaW5nOiA1cHggMHB4O1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcXG4gICAgd2lkdGg6IGF1dG87XFxuICB9XFxuICBcXG4gLm5hdl9faXRlbSBhIHtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI4MjFlYTNjZDBmYWNiOGY0MDUwXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9