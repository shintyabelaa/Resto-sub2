"use strict";
self["webpackHotUpdaterestaurant_apps"]("app",{

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.css */ "./src/styles/main.css");
 /* for async await transpile */


fetch('DATA.json')
  .then(response => {
    console.log('Response:', response);
    return response.json();
  })
  // response.json())
  .then(data => {
    console.log('Data:', data);
    const restaurantsList = document.getElementById('restaurants-list');

    data.restaurants.forEach(restaurant => {
      const restaurantItem = document.createElement('div');
      restaurantItem.classList.add('restaurant-item');

      const restaurantPlace = document.createElement('h1');
      restaurantPlace.innerText = restaurant.city;
      restaurantPlace.innerText = restaurant.city;
restaurantPlace.style.position = 'absolute';
restaurantPlace.style.top = '0';
restaurantPlace.style.left = '0';
      restaurantItem.appendChild(restaurantPlace);

      const restaurantImage = document.createElement('img');
      restaurantImage.setAttribute('src', restaurant.pictureId);
      restaurantItem.appendChild(restaurantImage);

      const restaurantRatings = document.createElement('h2');
      restaurantRatings.innerText = 'Rating: ' + restaurant.rating;
      restaurantItem.appendChild(restaurantRatings);

      const restaurantName = document.createElement('h3');
      restaurantName.innerText = restaurant.name;
      restaurantItem.appendChild(restaurantName);

      const restaurantDescription = document.createElement('p');
      restaurantDescription.innerText = restaurant.description;
      restaurantItem.appendChild(restaurantDescription);

      restaurantsList.appendChild(restaurantItem);
    });
  })
.catch(error => console.error(error));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("d11d63d41e63d5693bec")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLjNjMTZhMWRmNGEzMWYyMzVlZGI5LmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QixDQUFDO0FBQ0Y7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7OztVQzVDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtYXBwcy93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lJzsgLyogZm9yIGFzeW5jIGF3YWl0IHRyYW5zcGlsZSAqL1xuaW1wb3J0ICcuLi9zdHlsZXMvbWFpbi5jc3MnO1xuXG5mZXRjaCgnREFUQS5qc29uJylcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdSZXNwb25zZTonLCByZXNwb25zZSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgfSlcbiAgLy8gcmVzcG9uc2UuanNvbigpKVxuICAudGhlbihkYXRhID0+IHtcbiAgICBjb25zb2xlLmxvZygnRGF0YTonLCBkYXRhKTtcbiAgICBjb25zdCByZXN0YXVyYW50c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdGF1cmFudHMtbGlzdCcpO1xuXG4gICAgZGF0YS5yZXN0YXVyYW50cy5mb3JFYWNoKHJlc3RhdXJhbnQgPT4ge1xuICAgICAgY29uc3QgcmVzdGF1cmFudEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHJlc3RhdXJhbnRJdGVtLmNsYXNzTGlzdC5hZGQoJ3Jlc3RhdXJhbnQtaXRlbScpO1xuXG4gICAgICBjb25zdCByZXN0YXVyYW50UGxhY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgcmVzdGF1cmFudFBsYWNlLmlubmVyVGV4dCA9IHJlc3RhdXJhbnQuY2l0eTtcbiAgICAgIHJlc3RhdXJhbnRQbGFjZS5pbm5lclRleHQgPSByZXN0YXVyYW50LmNpdHk7XG5yZXN0YXVyYW50UGxhY2Uuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xucmVzdGF1cmFudFBsYWNlLnN0eWxlLnRvcCA9ICcwJztcbnJlc3RhdXJhbnRQbGFjZS5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgcmVzdGF1cmFudEl0ZW0uYXBwZW5kQ2hpbGQocmVzdGF1cmFudFBsYWNlKTtcblxuICAgICAgY29uc3QgcmVzdGF1cmFudEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICByZXN0YXVyYW50SW1hZ2Uuc2V0QXR0cmlidXRlKCdzcmMnLCByZXN0YXVyYW50LnBpY3R1cmVJZCk7XG4gICAgICByZXN0YXVyYW50SXRlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50SW1hZ2UpO1xuXG4gICAgICBjb25zdCByZXN0YXVyYW50UmF0aW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICByZXN0YXVyYW50UmF0aW5ncy5pbm5lclRleHQgPSAnUmF0aW5nOiAnICsgcmVzdGF1cmFudC5yYXRpbmc7XG4gICAgICByZXN0YXVyYW50SXRlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50UmF0aW5ncyk7XG5cbiAgICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgIHJlc3RhdXJhbnROYW1lLmlubmVyVGV4dCA9IHJlc3RhdXJhbnQubmFtZTtcbiAgICAgIHJlc3RhdXJhbnRJdGVtLmFwcGVuZENoaWxkKHJlc3RhdXJhbnROYW1lKTtcblxuICAgICAgY29uc3QgcmVzdGF1cmFudERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgcmVzdGF1cmFudERlc2NyaXB0aW9uLmlubmVyVGV4dCA9IHJlc3RhdXJhbnQuZGVzY3JpcHRpb247XG4gICAgICByZXN0YXVyYW50SXRlbS5hcHBlbmRDaGlsZChyZXN0YXVyYW50RGVzY3JpcHRpb24pO1xuXG4gICAgICByZXN0YXVyYW50c0xpc3QuYXBwZW5kQ2hpbGQocmVzdGF1cmFudEl0ZW0pO1xuICAgIH0pO1xuICB9KVxuLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkMTFkNjNkNDFlNjNkNTY5M2JlY1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==