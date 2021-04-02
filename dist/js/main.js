/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var current_device__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! current-device */ "../node_modules/current-device/es/index.js");
/* harmony import */ var _node_modules_malihu_custom_scrollbar_plugin_jquery_mCustomScrollbar_concat_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js */ "../node_modules/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js");
/* harmony import */ var _node_modules_malihu_custom_scrollbar_plugin_jquery_mCustomScrollbar_concat_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_malihu_custom_scrollbar_plugin_jquery_mCustomScrollbar_concat_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_libs_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/css/libs.css */ "./css/libs.css");
/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/css/style.scss */ "./css/style.scss");






var tabControl = function tabControl(fadeComplete, el, parent, tabClass) {
  if (fadeComplete == true && !el.is('.is-active')) {
    var current = parent.find('.is-active').data('target'),
        next = el.data('target'); //ставим статус анимации "не закончена"

    fadeComplete = false; //скрываем текущий таб

    jquery__WEBPACK_IMPORTED_MODULE_0__(current).fadeOut(300, function () {
      //ставим статус анимации закончена и показываем новый таб
      fadeComplete = true;
      jquery__WEBPACK_IMPORTED_MODULE_0__(next).fadeIn(300);
    }); //снимаем активный класс с элементов списка

    parent.find(tabClass).removeClass('is-active'); //добавляем активный класс для текущего элемента списка

    el.addClass('is-active');
  }
};

jquery__WEBPACK_IMPORTED_MODULE_0__(document).ready(function () {
  jquery__WEBPACK_IMPORTED_MODULE_0__('.js-app__slogan-button').click(function (e) {
    e.preventDefault();
    jquery__WEBPACK_IMPORTED_MODULE_0__(this).toggleClass('is-active');
  });
  jquery__WEBPACK_IMPORTED_MODULE_0__('.js-app-panel__item').click(function (e) {
    e.preventDefault();
    var ajaxURL = jquery__WEBPACK_IMPORTED_MODULE_0__(this).data('ajax');
    jquery__WEBPACK_IMPORTED_MODULE_0__('.js-app-panel__item').removeClass('is-active');
    jquery__WEBPACK_IMPORTED_MODULE_0__(this).addClass('is-active');
    jquery__WEBPACK_IMPORTED_MODULE_0__('.js-ajax-body').fadeOut(300, function () {
      jquery__WEBPACK_IMPORTED_MODULE_0__.ajax({
        method: "GET",
        url: ajaxURL
      }).done(function (response) {
        jquery__WEBPACK_IMPORTED_MODULE_0__('.js-ajax-body').html(response).fadeIn(300);
        jquery__WEBPACK_IMPORTED_MODULE_0__(".js-custom-scroll").mCustomScrollbar({});
        jquery__WEBPACK_IMPORTED_MODULE_0__('.js-app-tabs__link').click(function (e) {
          e.preventDefault();
          tabControl(jquery__WEBPACK_IMPORTED_MODULE_0__(this).closest('.js-app-tabs').data('complete'), jquery__WEBPACK_IMPORTED_MODULE_0__(this), jquery__WEBPACK_IMPORTED_MODULE_0__(this).closest('.js-app-tabs'), '.js-app-tabs__link');
        });
      });
    });
  });
  jquery__WEBPACK_IMPORTED_MODULE_0__(".js-custom-scroll").mCustomScrollbar({});
  jquery__WEBPACK_IMPORTED_MODULE_0__('.js-app-tabs__link').click(function (e) {
    e.preventDefault();
    tabControl(jquery__WEBPACK_IMPORTED_MODULE_0__(this).closest('.js-app-tabs').data('complete'), jquery__WEBPACK_IMPORTED_MODULE_0__(this), jquery__WEBPACK_IMPORTED_MODULE_0__(this).closest('.js-app-tabs'), '.js-app-tabs__link');
  });
});

/***/ }),

/***/ "./css/libs.css":
/*!**********************!*\
  !*** ./css/libs.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			__webpack_require__.O();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_current-device_es_index_js-node-88df66"], () => (__webpack_require__("../node_modules/@babel/polyfill/lib/index.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js-node_modules_current-device_es_index_js-node-88df66"], () => (__webpack_require__("./js/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map