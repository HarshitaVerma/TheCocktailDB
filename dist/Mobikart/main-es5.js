function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _modules_home_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./modules/home/home/home.component */
    "./src/app/modules/home/home/home.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _modules_navigation_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modules/navigation/components/cart/cart.component */
    "./src/app/modules/navigation/components/cart/cart.component.ts");
    /* harmony import */


    var _modules_navigation_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modules/navigation/components/product-list/product-list.component */
    "./src/app/modules/navigation/components/product-list/product-list.component.ts");
    /* harmony import */


    var _modules_navigation_components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modules/navigation/components/product-details/product-details.component */
    "./src/app/modules/navigation/components/product-details/product-details.component.ts");

    var routes = [{
      path: 'productlist',
      component: _modules_navigation_components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"]
    }, {
      path: 'productlistdetails',
      component: _modules_navigation_components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_5__["ProductDetailsComponent"]
    }, {
      path: 'home',
      component: _modules_home_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]
    }, {
      path: 'cart',
      component: _modules_navigation_components_cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]
    }, {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    } // redirect to `Home-component`
    ];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-service.service.ts":
  /*!****************************************!*\
    !*** ./src/app/app-service.service.ts ***!
    \****************************************/

  /*! exports provided: AppServiceService */

  /***/
  function srcAppAppServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppServiceService", function () {
      return AppServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _snack_bar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./snack-bar.service */
    "./src/app/snack-bar.service.ts");

    var AppServiceService = /*#__PURE__*/function () {
      function AppServiceService(snackBarSer) {
        _classCallCheck(this, AppServiceService);

        this.snackBarSer = snackBarSer;
        this.cartItems = [];
      }
      /**
       * Method to add item to cart component
       * @param item : current item
       */


      _createClass(AppServiceService, [{
        key: "addToCart",
        value: function addToCart(item) {
          if (item.hasOwnProperty('pid')) {
            this.cartItems.push(item);
            this.snackBarSer.showSnackBar('Item added to cart');
          }
        }
      }, {
        key: "removeItem",
        value: function removeItem(item) {
          if (item > -1) {
            this.cartItems.splice(item, 1);
          }
        }
      }]);

      return AppServiceService;
    }();

    AppServiceService.ɵfac = function AppServiceService_Factory(t) {
      return new (t || AppServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_snack_bar_service__WEBPACK_IMPORTED_MODULE_1__["SnackBarService"]));
    };

    AppServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AppServiceService,
      factory: AppServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _snack_bar_service__WEBPACK_IMPORTED_MODULE_1__["SnackBarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _modules_navigation_components_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./modules/navigation/components/search/search.component */
    "./src/app/modules/navigation/components/search/search.component.ts");
    /* harmony import */


    var _modules_navigation_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./modules/navigation/components/navigation/navigation.component */
    "./src/app/modules/navigation/components/navigation/navigation.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Mobikart';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 9,
      vars: 0,
      consts: [["href", "https://fonts.googleapis.com/icon?family=Material+Icons", "rel", "stylesheet"], ["id", "mainDiv", "fxLayout", "column"], ["fxLayout", "row", "fxLayoutAlign", "center stretch", 1, "midContent"], ["fxFlex", "100", 1, "mainContent"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-navigation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _modules_navigation_components_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _modules_navigation_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_3__["NavigationComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["#mainDiv[_ngcontent-%COMP%] {\n  background-color: #f1f3f6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXE1vYmlrYXJ0L3NyY1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvRTpcXE1vYmlrYXJ0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFBO0FBS0EsYUFBQTtBQU1BLFVBQUE7QUFjQSxXQUFBO0FBS0EsVUFBQTtBQUdBLFdBQUE7QUNoQ0E7RUFDRSx5QkRpQmM7QUVYaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGb250IHN0eWxlcyovXHJcbiRmb250LWZhbWlseTogJ29wZW4tc2Fucyc7XHJcbiRmb250LWZhbWlseS1ib2xkOiAnUm9ib3RvLCBCb2xkJztcclxuJGZvbnQtZmFtaWx5LWJvbGQtaXRhbGljOiAnUm9ib3RvLEl0YWxpYyc7XHJcblxyXG4vKiBGb250IHNpemUqL1xyXG4kZm9udC1zaXplLWJpZzogMTZweDtcclxuJGZvbnQtc2l6ZS1tZWRpdW06IDE0cHg7XHJcbiRmb250LXNpemUtc21hbGw6IDEycHg7XHJcbiRmb250LXNpemUteGw6IDE4cHg7XHJcblxyXG4vKiBDb2xvcnMqL1xyXG4kY29sb3ItZm9udC1wcmltYXJ5OiBibGFjaztcclxuJGNvbG9yLXByaW1hcnk6ICM2OTMwY2E7XHJcbiRjb2xvci1kYXJrLWJsdWU6ICMxNzIzMzc7XHJcbiRjb2xvci13aGl0ZTogd2hpdGU7XHJcbiRjb2xvci15ZWxsb3c6ICNmNThjMTM7XHJcbiRjb2xvci1lcnJvcjogI2ZmMDAwMDtcclxuJGNvbG9yLWxpZ2h0LWdyYXk6IGxpZ2h0Z3JheTtcclxuJGNvbG9yLWJnLWdyZXk6ICNmMWYzZjY7XHJcbiRjb2xvci13YXJuaW5nOiAjZmZkZTAwO1xyXG4kY29sb3Itc3VjY2VzczogIzBmNDkxODtcclxuJGNvbG9yLWJ0bi1vcmFuZ2U6ICNmYjY0MWI7XHJcbiRjb2xvci10eHQtZ3JleTogZ3JleTtcclxuJGNvbG9yLXR4dC1ncmVlbjogIzM4OGUzYztcclxuLyogUGFkZGluZyovXHJcbiRzaXplLXNtYWxsOiA1cHg7XHJcbiRzaXplLW1lZGl1bTogMTBweDtcclxuJHNpemUtYmlnOiAyMHB4O1xyXG5cclxuLyogSGVpZ2h0Ki9cclxuJG5hdmlnYXRpb24taGVpZ2h0OiA0MHB4O1xyXG5cclxuLyogQm9yZGVycyovXHJcbiRib3JkZXItYm90dG9tLWJvbGQ6IDJweCBzb2xpZCAkY29sb3ItbGlnaHQtZ3JheTtcclxuJGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItbGlnaHQtZ3JheTtcclxuIiwiQGltcG9ydCAnLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuI21haW5EaXYge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1iZy1ncmV5O1xyXG4gIC8vbWluLWhlaWdodDogOTd2aDtcclxuICAuZm9vdGVyRGl2IHtcclxuICAgIC8vcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gYm90dG9tOiAwO1xyXG4gICAgLy8gaGVpZ2h0OiA2NHB4O1xyXG4gICAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsIi8qIEZvbnQgc3R5bGVzKi9cbi8qIEZvbnQgc2l6ZSovXG4vKiBDb2xvcnMqL1xuLyogUGFkZGluZyovXG4vKiBIZWlnaHQqL1xuLyogQm9yZGVycyovXG4jbWFpbkRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYzZjY7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! src/app/app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./modules/footer/footer.module */
    "./src/app/modules/footer/footer.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modules/navigation/navigation.module */
    "./src/app/modules/navigation/navigation.module.ts");
    /* harmony import */


    var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./modules/home/home.module */
    "./src/app/modules/home/home.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /** Third Party */


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"], _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__["FooterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"], _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__["FooterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"], src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_0__["AppRoutingModule"], _modules_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"], _modules_home_home_module__WEBPACK_IMPORTED_MODULE_7__["HomeModule"], _modules_footer_footer_module__WEBPACK_IMPORTED_MODULE_1__["FooterModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // array in local storage for registered users


    var usersKey = 'MobiKart Registered Users';
    var users = JSON.parse(localStorage.getItem(usersKey)) || [];

    var AuthService = /*#__PURE__*/function () {
      function AuthService() {
        _classCallCheck(this, AuthService);

        this.isSession = false;
      }

      _createClass(AuthService, [{
        key: "login",
        value: function login(user, pass) {
          return this.authenticate(user, pass).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            // login successful if there's a jwt token in the response
            if (resp.body && resp.body.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(resp.body));
              return resp;
            }
          }));
        }
        /**
         * Method will search given user details in Local Storage
         * @param us
         * @param ps
         */

      }, {
        key: "authenticate",
        value: function authenticate(us, ps) {
          var userStored = users.find(function (x) {
            return x.username === us && x.password === ps;
          });
          if (!userStored) return this.error('Username or password is incorrect');
          this.isSession = true;
          var body = {
            id: userStored.id,
            username: userStored.username,
            firstName: userStored.first,
            lastName: userStored.last,
            token: 'fake-token'
          };
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]({
            status: 200,
            body: body
          }));
        }
        /**
         * Method will search given user details in Local Storage
        
         */

      }, {
        key: "register",
        value: function register(regObj) {
          var user = regObj;

          if (users.find(function (x) {
            return x.username === user.username;
          })) {
            return this.error('Username "' + user.username + '" is already taken');
          }

          user.id = users.length ? Math.max.apply(Math, _toConsumableArray(users.map(function (x) {
            return x.id;
          }))) + 1 : 1;
          users.push(user);
          localStorage.setItem(usersKey, JSON.stringify(users));
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]({
            status: 200
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
          this.isSession = false; //this.currentUserSubject.next(null);
        }
      }, {
        key: "error",
        value: function error(message) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
            error: {
              message: message
            }
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)();
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/footer/footer.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/footer/footer.module.ts ***!
    \*************************************************/

  /*! exports provided: FooterModule */

  /***/
  function srcAppModulesFooterFooterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterModule", function () {
      return FooterModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/modules/footer/footer/footer.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");

    var FooterModule = function FooterModule() {
      _classCallCheck(this, FooterModule);
    };

    FooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FooterModule
    });
    FooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function FooterModule_Factory(t) {
        return new (t || FooterModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterModule, {
        declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]],
        exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"]],
          exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/footer/footer/footer.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/modules/footer/footer/footer.component.ts ***!
    \***********************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppModulesFooterFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 19,
      vars: 0,
      consts: [["fxFill", "", "fxLayout", "row", "id", "footer", "fxLayoutGap", "20px", "fxLayoutAlign", "start center"], ["fxFlex", "20", "fxLayoutAlign", "start center"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "card_travel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sell On Flipkart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "stars");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Advertise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "card_giftcard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Gift Cards");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "help");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Help Center");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\xA9 2007-2020 Flipkart.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIcon"]],
      styles: ["#footer[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #172337;\n  padding: 20px;\n}\n#footer[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ffde00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9mb290ZXIvZm9vdGVyL0U6XFxNb2Jpa2FydC9zcmNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci9FOlxcTW9iaWthcnQvc3JjXFxhcHBcXG1vZHVsZXNcXGZvb3RlclxcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZUFBQTtBQUtBLGFBQUE7QUFNQSxVQUFBO0FBY0EsV0FBQTtBQUtBLFVBQUE7QUFHQSxXQUFBO0FDL0JBO0VBQ0UsWURZWTtFQ1haLHlCRFVnQjtFQ1RoQixhRHVCUztBRWxCWDtBREpFO0VBQ0UsY0RhWTtBRVBoQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZm9vdGVyL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGb250IHN0eWxlcyovXHJcbiRmb250LWZhbWlseTogJ29wZW4tc2Fucyc7XHJcbiRmb250LWZhbWlseS1ib2xkOiAnUm9ib3RvLCBCb2xkJztcclxuJGZvbnQtZmFtaWx5LWJvbGQtaXRhbGljOiAnUm9ib3RvLEl0YWxpYyc7XHJcblxyXG4vKiBGb250IHNpemUqL1xyXG4kZm9udC1zaXplLWJpZzogMTZweDtcclxuJGZvbnQtc2l6ZS1tZWRpdW06IDE0cHg7XHJcbiRmb250LXNpemUtc21hbGw6IDEycHg7XHJcbiRmb250LXNpemUteGw6IDE4cHg7XHJcblxyXG4vKiBDb2xvcnMqL1xyXG4kY29sb3ItZm9udC1wcmltYXJ5OiBibGFjaztcclxuJGNvbG9yLXByaW1hcnk6ICM2OTMwY2E7XHJcbiRjb2xvci1kYXJrLWJsdWU6ICMxNzIzMzc7XHJcbiRjb2xvci13aGl0ZTogd2hpdGU7XHJcbiRjb2xvci15ZWxsb3c6ICNmNThjMTM7XHJcbiRjb2xvci1lcnJvcjogI2ZmMDAwMDtcclxuJGNvbG9yLWxpZ2h0LWdyYXk6IGxpZ2h0Z3JheTtcclxuJGNvbG9yLWJnLWdyZXk6ICNmMWYzZjY7XHJcbiRjb2xvci13YXJuaW5nOiAjZmZkZTAwO1xyXG4kY29sb3Itc3VjY2VzczogIzBmNDkxODtcclxuJGNvbG9yLWJ0bi1vcmFuZ2U6ICNmYjY0MWI7XHJcbiRjb2xvci10eHQtZ3JleTogZ3JleTtcclxuJGNvbG9yLXR4dC1ncmVlbjogIzM4OGUzYztcclxuLyogUGFkZGluZyovXHJcbiRzaXplLXNtYWxsOiA1cHg7XHJcbiRzaXplLW1lZGl1bTogMTBweDtcclxuJHNpemUtYmlnOiAyMHB4O1xyXG5cclxuLyogSGVpZ2h0Ki9cclxuJG5hdmlnYXRpb24taGVpZ2h0OiA0MHB4O1xyXG5cclxuLyogQm9yZGVycyovXHJcbiRib3JkZXItYm90dG9tLWJvbGQ6IDJweCBzb2xpZCAkY29sb3ItbGlnaHQtZ3JheTtcclxuJGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItbGlnaHQtZ3JheTtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbiNmb290ZXIge1xyXG4gIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWRhcmstYmx1ZTtcclxuICBwYWRkaW5nOiAkc2l6ZS1iaWc7XHJcbiAgbWF0LWljb24ge1xyXG4gICAgY29sb3I6ICRjb2xvci13YXJuaW5nO1xyXG4gIH1cclxufVxyXG4iLCIvKiBGb250IHN0eWxlcyovXG4vKiBGb250IHNpemUqL1xuLyogQ29sb3JzKi9cbi8qIFBhZGRpbmcqL1xuLyogSGVpZ2h0Ki9cbi8qIEJvcmRlcnMqL1xuI2Zvb3RlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MjMzNztcbiAgcGFkZGluZzogMjBweDtcbn1cbiNmb290ZXIgbWF0LWljb24ge1xuICBjb2xvcjogI2ZmZGUwMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/home.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/modules/home/home.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppModulesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/modules/home/home/home.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-responsive-carousel */
    "./node_modules/angular-responsive-carousel/__ivy_ngcc__/fesm2015/angular-responsive-carousel.js");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HomeModule
    });
    HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function HomeModule_Factory(t) {
        return new (t || HomeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__["IvyCarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeModule, {
        declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__["IvyCarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__["FlexLayoutModule"]],
        exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__["IvyCarouselModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_0__["FlexLayoutModule"]],
          exports: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/home/home/home.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/home/home/home.component.ts ***!
    \*****************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppModulesHomeHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! angular-responsive-carousel */
    "./node_modules/angular-responsive-carousel/__ivy_ngcc__/fesm2015/angular-responsive-carousel.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.imagesUrl = [{
            path: 'assets/images/slide1.jpg'
          }, {
            path: 'assets/images/slide2.jpg'
          }, {
            path: 'assets/images/slide3.jpg'
          }];
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 1,
      vars: 7,
      consts: [["fxFill", "", 3, "images", "pauseOnHover", "cellsToShow", "loop", "autoplayInterval", "autoplay", "arrows"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "carousel", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("images", ctx.imagesUrl)("pauseOnHover", false)("cellsToShow", 1)("loop", true)("autoplayInterval", 2000)("autoplay", true)("arrows", true);
        }
      },
      directives: [angular_responsive_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillDirective"]],
      styles: ["/* Image slider styling */\ncarousel {\n  z-index: 7 !important;\n}\n.image-cropper img {\n  min-width: 1680px !important;\n}\n.overlay-left, .overlay-right {\n  width: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUvRTpcXE1vYmlrYXJ0L3NyY1xcYXBwXFxtb2R1bGVzXFxob21lXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlCQUFBO0FBSUE7RUFDRSxxQkFBQTtBQ0ZGO0FES0U7RUFDRSw0QkFBQTtBQ0ZKO0FES0E7RUFDRSxxQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEltYWdlIHNsaWRlciBzdHlsaW5nICovXHJcbi8vIGFuZ3VsYXItaW1hZ2Utc2xpZGVyIHtcclxuLy8gICBvdmVyZmxvdzogaGlkZGVuO1xyXG4vLyB9XHJcbmNhcm91c2VsIHtcclxuICB6LWluZGV4OiA3ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmltYWdlLWNyb3BwZXIge1xyXG4gIGltZyB7XHJcbiAgICBtaW4td2lkdGg6IDE2ODBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4ub3ZlcmxheS1sZWZ0IHtcclxuICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm92ZXJsYXktcmlnaHQge1xyXG4gIEBleHRlbmQgLm92ZXJsYXktbGVmdDtcclxufVxyXG4iLCIvKiBJbWFnZSBzbGlkZXIgc3R5bGluZyAqL1xuY2Fyb3VzZWwge1xuICB6LWluZGV4OiA3ICFpbXBvcnRhbnQ7XG59XG5cbi5pbWFnZS1jcm9wcGVyIGltZyB7XG4gIG1pbi13aWR0aDogMTY4MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vdmVybGF5LWxlZnQsIC5vdmVybGF5LXJpZ2h0IHtcbiAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss'],
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/navigation/components/cart/cart.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/navigation/components/cart/cart.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppModulesNavigationComponentsCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/app-service.service */
    "./src/app/app-service.service.ts");
    /* harmony import */


    var _snack_bar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../snack-bar.service */
    "./src/app/snack-bar.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function CartComponent_div_0_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_0_div_6_Template_div_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var i_r5 = ctx.index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6.appServ.removeItem(i_r5);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "REMOVE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Delivery by Mon Nov 30 | Free ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u20B940");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var itm_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", itm_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("state", itm_r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itm_r4.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](itm_r4.seller);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", itm_r4.price, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", itm_r4.mrp, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", itm_r4.discount, "%");
      }
    }

    function CartComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CartComponent_div_0_div_6_Template, 28, 7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_0_Template_div_click_9_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.placeOrder();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Place Order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "BILLING DETAILS");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Delivery");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "FREE");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Total Amount");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "You will save \u20B9600 on this order");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("My Cart (", ctx_r0.appServ.cartItems.length, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.appServ.cartItems);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Price (", ctx_r0.appServ.cartItems.length, ")");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx_r0.getTotalPrice(), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx_r0.getTotalPrice(), "");
      }
    }

    function CartComponent_ng_template_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Oops! Your cart is empty");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(appServ, snack) {
        _classCallCheck(this, CartComponent);

        this.appServ = appServ;
        this.snack = snack;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "placeOrder",
        value: function placeOrder() {
          this.snack.showSnackBar('Order placed successfully');
          this.appServ.cartItems = [];
        }
      }, {
        key: "getTotalPrice",
        value: function getTotalPrice() {
          var total = 0;
          this.appServ.cartItems.filter(function (elm) {
            total += elm.price;
          });
          return total;
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_snack_bar_service__WEBPACK_IMPORTED_MODULE_2__["SnackBarService"]));
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      decls: 3,
      vars: 2,
      consts: [["fxFill", "", "id", "cartItemsMain", "fxLayout", "row", "fxLayoutAlign", "start", 4, "ngIf", "ngIfElse"], ["missingCart", ""], ["fxFill", "", "id", "cartItemsMain", "fxLayout", "row", "fxLayoutAlign", "start"], ["fxFlex", "60", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "margins"], ["fxFill", "", "fxLayout", "column", "fxLayoutAlign", "start stretch", "fxLayoutGap", "5px"], ["fxLayout", "column"], ["fxLayoutAlign", "start center", 1, "seperator", "fontBig", "header"], ["class", "seperator eachCardHeight", "fxFlex", "auto", "fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 4, "ngFor", "ngForOf"], ["fxFlex", "10", "fxFill", "", "fxLayoutAlign", "center stretch", 1, "sticky"], ["fxFlex", "50", "fxLayoutAlign", "center center"], ["fxFill", "", "fxLayoutAlign", "center center", 1, "btnCart", 3, "click"], ["fxFlex", "30", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "margins"], ["fxFill", "", "fxLayout", "row", "fxLayoutAlign", "start"], ["fxFill", "", "fxFlex", "90", "fxLayout", "column", 1, "billDetails"], ["fxFlex", "20", "fxLayoutAlign", "start center", 1, "seperator", "fontBig", "fontGrey"], ["fxFlex", "20", "fxLayoutAlign", "start center"], ["fxFlex", "50", "fxLayoutAlign", "start center"], ["fxFlex", "50", "fxLayoutAlign", "end center"], ["fxFlex", "20", "fxLayoutAlign", "start center", 1, "seperator"], ["fxFlex", "50", "fxLayoutAlign", "end center", 1, "fontGreen"], ["fxFlex", "20", "fxLayoutAlign", "start center", 1, "seperator", "fontBig"], ["fxFlex", "20", "fxLayoutAlign", "start center", 1, "fontGreen"], ["fxFlex", "auto", "fxLayout", "row", "fxLayoutAlign", "center center", "fxLayoutGap", "10px", 1, "seperator", "eachCardHeight"], ["fxFill", "", "fxFlex", "25", "fxLayoutAlign", "center stretch"], ["fxFlex", "90", "fxLayoutAlign", "center center", "fxLayout", "column"], ["fxFlex", "90", "fxLayoutAlign", "start center", "fxLayout", "column"], ["fxFlex", "80", 3, "src"], ["fxFlex", "20", "fxLayoutAlign", "center center", "fxLayout", "row"], ["fxFill", "", "fxFlex", "50", "fxLayout", "column", "fxFill", "", "fxLayoutAlign", "center stretch"], ["fxFill", "", "fxFlex", "90", "fxLayout", "column", "fxFill", "", "fxLayoutAlign", "center stretch"], ["fxFlex", "25", "fxLayoutAlign", "start center", 1, "productName", "overflow"], ["routerLink", "/productlistdetails", 3, "state"], ["fxFlex", "25", "fxLayoutAlign", "start center", 1, "fontGrey"], ["fxFlex", "50", "fxLayoutAlign", "start center", "fxLayout", "row", "fxLayoutGap", "5px"], [1, "fontBig"], [1, "linethrough"], [1, "fontGreen"], ["fxFlex", "20", "fxLayoutAlign", "start center", 1, "fontBig", "removeBtn", 3, "click"], ["fxFill", "", "fxFlex", "40", "fxLayout", "column", "fxLayoutAlign", "start stretch"], ["fxFlex", "20", "fxLayoutAlign", "center center", 1, "overflow"], ["fxFill", "", "fxLayout", "column", "fxLayoutAlign", "center center"], ["fxFlex", "95", "fxLayout", "row", "fxFill", "", "fxLayoutAlign", "center center"], ["fxFill", "", "fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", "center center"], ["fxFill", "", "fxFlex", "60", "fxLayout", "column", "fxLayoutAlign", "center center"], ["src", "assets/images/empty-cart.png"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CartComponent_div_0_Template, 33, 5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_ng_template_1_Template, 8, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appServ.cartItems.length)("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]],
      styles: ["#cartItemsMain[_ngcontent-%COMP%]   .overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n#cartItemsMain[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  min-height: 59px;\n}\n#cartItemsMain[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: black;\n  text-decoration: none;\n  font-size: 18px;\n}\n#cartItemsMain[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #6930ca;\n}\n#cartItemsMain[_ngcontent-%COMP%]   .margins[_ngcontent-%COMP%] {\n  margin: 10px 0 0 10px;\n}\n#cartItemsMain[_ngcontent-%COMP%]   .eachCardHeight[_ngcontent-%COMP%] {\n  min-height: 200px;\n  max-height: 200px;\n}\n#cartItemsMain[_ngcontent-%COMP%]   .sticky[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 64px;\n  bottom: 0;\n  z-index: 2;\n  min-height: 80px;\n}\n#cartItemsMain[_ngcontent-%COMP%]   .removeBtn[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #6930ca;\n}\n#cartItemsMain[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 110px;\n}\n#cartItemsMain[_ngcontent-%COMP%]   .billDetails[_ngcontent-%COMP%] {\n  max-height: 35vh;\n}\n.seperator[_ngcontent-%COMP%] {\n  border-bottom: 1px solid lightgray;\n}\n.fontBig[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n.fontGrey[_ngcontent-%COMP%], .linethrough[_ngcontent-%COMP%] {\n  color: grey;\n}\n.fontGreen[_ngcontent-%COMP%] {\n  color: #388e3c;\n}\n.linethrough[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvY2FydC9FOlxcTW9iaWthcnQvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL25hdmlnYXRpb24vY29tcG9uZW50cy9jYXJ0L0U6XFxNb2Jpa2FydC9zcmNcXGFwcFxcbW9kdWxlc1xcbmF2aWdhdGlvblxcY29tcG9uZW50c1xcY2FydFxcY2FydC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQUE7QUFLQSxhQUFBO0FBTUEsVUFBQTtBQWNBLFdBQUE7QUFLQSxVQUFBO0FBR0EsV0FBQTtBQzlCRTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUNJSjtBREZFO0VBQ0UsZ0JBQUE7QUNJSjtBREZFO0VBQ0UsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsZURKVztBRVFmO0FERkU7RUFDRSxjREhZO0FFT2hCO0FERkU7RUFDRSxxQkFBQTtBQ0lKO0FERkU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDSUo7QURGRTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ0lKO0FERkU7RUFDRSxlQUFBO0VBQ0EsY0RyQlk7QUV5QmhCO0FEREU7RUFDRSxZQUFBO0FDR0o7QURERTtFQUNFLGdCQUFBO0FDR0o7QURBQTtFQUNFLGtDRFZjO0FFYWhCO0FEQUE7RUFDRSxlRHhDYTtFQ3lDYixnQkFBQTtBQ0dGO0FEREE7RUFDRSxXRDlCZTtBRWtDakI7QURGQTtFQUNFLGNEaENnQjtBRXFDbEI7QURIQTtFQUVFLDZCQUFBO0FDS0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25hdmlnYXRpb24vY29tcG9uZW50cy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGb250IHN0eWxlcyovXHJcbiRmb250LWZhbWlseTogJ29wZW4tc2Fucyc7XHJcbiRmb250LWZhbWlseS1ib2xkOiAnUm9ib3RvLCBCb2xkJztcclxuJGZvbnQtZmFtaWx5LWJvbGQtaXRhbGljOiAnUm9ib3RvLEl0YWxpYyc7XHJcblxyXG4vKiBGb250IHNpemUqL1xyXG4kZm9udC1zaXplLWJpZzogMTZweDtcclxuJGZvbnQtc2l6ZS1tZWRpdW06IDE0cHg7XHJcbiRmb250LXNpemUtc21hbGw6IDEycHg7XHJcbiRmb250LXNpemUteGw6IDE4cHg7XHJcblxyXG4vKiBDb2xvcnMqL1xyXG4kY29sb3ItZm9udC1wcmltYXJ5OiBibGFjaztcclxuJGNvbG9yLXByaW1hcnk6ICM2OTMwY2E7XHJcbiRjb2xvci1kYXJrLWJsdWU6ICMxNzIzMzc7XHJcbiRjb2xvci13aGl0ZTogd2hpdGU7XHJcbiRjb2xvci15ZWxsb3c6ICNmNThjMTM7XHJcbiRjb2xvci1lcnJvcjogI2ZmMDAwMDtcclxuJGNvbG9yLWxpZ2h0LWdyYXk6IGxpZ2h0Z3JheTtcclxuJGNvbG9yLWJnLWdyZXk6ICNmMWYzZjY7XHJcbiRjb2xvci13YXJuaW5nOiAjZmZkZTAwO1xyXG4kY29sb3Itc3VjY2VzczogIzBmNDkxODtcclxuJGNvbG9yLWJ0bi1vcmFuZ2U6ICNmYjY0MWI7XHJcbiRjb2xvci10eHQtZ3JleTogZ3JleTtcclxuJGNvbG9yLXR4dC1ncmVlbjogIzM4OGUzYztcclxuLyogUGFkZGluZyovXHJcbiRzaXplLXNtYWxsOiA1cHg7XHJcbiRzaXplLW1lZGl1bTogMTBweDtcclxuJHNpemUtYmlnOiAyMHB4O1xyXG5cclxuLyogSGVpZ2h0Ki9cclxuJG5hdmlnYXRpb24taGVpZ2h0OiA0MHB4O1xyXG5cclxuLyogQm9yZGVycyovXHJcbiRib3JkZXItYm90dG9tLWJvbGQ6IDJweCBzb2xpZCAkY29sb3ItbGlnaHQtZ3JheTtcclxuJGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItbGlnaHQtZ3JheTtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbiNjYXJ0SXRlbXNNYWluIHtcclxuICAub3ZlcmZsb3cge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuICAuaGVhZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDU5cHg7XHJcbiAgfVxyXG4gIGEge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLXhsO1xyXG4gIH1cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICB9XHJcbiAgLm1hcmdpbnMge1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAxMHB4O1xyXG4gIH1cclxuICAuZWFjaENhcmRIZWlnaHQge1xyXG4gICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbiAgLnN0aWNreSB7XHJcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gICAgdG9wOiA2NHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XHJcbiAgfVxyXG4gIC5yZW1vdmVCdG46aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICB9XHJcbiAgLmJpbGxEZXRhaWxzIHtcclxuICAgIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgfVxyXG59XHJcbi5zZXBlcmF0b3Ige1xyXG4gIGJvcmRlci1ib3R0b206ICRib3JkZXItYm90dG9tO1xyXG59XHJcblxyXG4uZm9udEJpZyB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXhsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmZvbnRHcmV5IHtcclxuICBjb2xvcjogJGNvbG9yLXR4dC1ncmV5O1xyXG59XHJcbi5mb250R3JlZW4ge1xyXG4gIGNvbG9yOiAkY29sb3ItdHh0LWdyZWVuO1xyXG59XHJcbi5saW5ldGhyb3VnaCB7XHJcbiAgQGV4dGVuZCAuZm9udEdyZXk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuIiwiLyogRm9udCBzdHlsZXMqL1xuLyogRm9udCBzaXplKi9cbi8qIENvbG9ycyovXG4vKiBQYWRkaW5nKi9cbi8qIEhlaWdodCovXG4vKiBCb3JkZXJzKi9cbiNjYXJ0SXRlbXNNYWluIC5vdmVyZmxvdyB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuI2NhcnRJdGVtc01haW4gLmhlYWRlciB7XG4gIG1pbi1oZWlnaHQ6IDU5cHg7XG59XG4jY2FydEl0ZW1zTWFpbiBhIHtcbiAgY29sb3I6IGJsYWNrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbiNjYXJ0SXRlbXNNYWluIGE6aG92ZXIge1xuICBjb2xvcjogIzY5MzBjYTtcbn1cbiNjYXJ0SXRlbXNNYWluIC5tYXJnaW5zIHtcbiAgbWFyZ2luOiAxMHB4IDAgMCAxMHB4O1xufVxuI2NhcnRJdGVtc01haW4gLmVhY2hDYXJkSGVpZ2h0IHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xufVxuI2NhcnRJdGVtc01haW4gLnN0aWNreSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogNjRweDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAyO1xuICBtaW4taGVpZ2h0OiA4MHB4O1xufVxuI2NhcnRJdGVtc01haW4gLnJlbW92ZUJ0bjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM2OTMwY2E7XG59XG4jY2FydEl0ZW1zTWFpbiBpbWcge1xuICB3aWR0aDogMTEwcHg7XG59XG4jY2FydEl0ZW1zTWFpbiAuYmlsbERldGFpbHMge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xufVxuXG4uc2VwZXJhdG9yIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbn1cblxuLmZvbnRCaWcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb250R3JleSwgLmxpbmV0aHJvdWdoIHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5mb250R3JlZW4ge1xuICBjb2xvcjogIzM4OGUzYztcbn1cblxuLmxpbmV0aHJvdWdoIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]
        }, {
          type: _snack_bar_service__WEBPACK_IMPORTED_MODULE_2__["SnackBarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/navigation/components/login/login.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/modules/navigation/components/login/login.component.ts ***!
    \************************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppModulesNavigationComponentsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _snack_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../snack-bar.service */
    "./src/app/snack-bar.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LoginComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get access to your orders");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_1_Template_div_click_17_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.loginUser();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Login ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_1_Template_div_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.login = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "New User? Register");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.loginForm.valid ? "loginBtn" : "loginBtn disableBtn");
      }
    }

    function LoginComponent_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Create Account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Create your account");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_2_Template_div_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.registerUser();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Register ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_2_Template_div_click_23_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.login = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Already existing user? Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.registrationForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.registrationForm.valid ? "loginBtn" : "loginBtn disableBtn");
      }
    }

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(fb, loginDialogRef, auth, snack) {
        _classCallCheck(this, LoginComponent);

        this.fb = fb;
        this.loginDialogRef = loginDialogRef;
        this.auth = auth;
        this.snack = snack;
        this.login = true;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.registrationForm = this.fb.group({
            first: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            last: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        } //Accessing Form cotrolfields :shothand

      }, {
        key: "loginUser",
        value: function loginUser() {
          var _this = this;

          console.log(this.loginForm);
          this.auth.login(this.formLogin.username.value, this.formLogin.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])()).subscribe(function (data) {
            _this.snack.showSnackBar("User ".concat(data.body.username, " loggedin successfully"));

            _this.loginDialogRef.close(); // this.router.navigate([this.returnUrl]);

          }, function (error) {
            console.log('Error', error.error.message);

            _this.snack.showSnackBar(error.error.message); // this.loading = false;

          });
        }
      }, {
        key: "registerUser",
        value: function registerUser() {
          var _this2 = this;

          console.log(this.registrationForm);
          this.auth.register(this.registrationForm.value).subscribe(function (data) {
            console.log('Success', data);

            _this2.snack.showSnackBar('Registration successfull');

            _this2.login = true;
          }, function (error) {
            console.log('Error', error.error.message);

            _this2.snack.showSnackBar(error.error.message);
          });
        }
      }, {
        key: "formLogin",
        get: function get() {
          return this.loginForm.controls;
        } //Accessing Form cotrolfield:shorthand

      }, {
        key: "formReg",
        get: function get() {
          return this.registrationForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_snack_bar_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 6,
      vars: 2,
      consts: [["fxLayout", "row", "fxFill", ""], ["fxFill", "", "fxFlex", "95", 4, "ngIf", "ngIfElse"], ["registration", ""], ["fxFlex", "5", "fxLayoutAlign", "center", "mat-dialog-close", "", 1, "close"], ["fxFill", "", "fxFlex", "95"], ["fxFlex", "40", "fxLayout", "column", "fxFill", "", "fxLayoutAlign", "center center", 1, "leftSide"], ["fxFlex", "90", "fxFill", "", "fxLayoutAlign", "center center"], ["fxFlex", "80", "fxFill", "", "fxLayout", "column"], ["fxFlex", "10", "fxLayoutAlign", "start center", 1, "fontBig"], ["fxFlex", "10", "fxLayoutAlign", "start center"], ["fxFlex", "80", "fxLayoutAlign", "center end"], ["src", "../../../../../assets/images/login.png"], ["fxFlex", "55", "fxLayout", "column", "fxFill", "", "fxLayoutAlign", "center center", 1, "rightSide"], ["fxFlex", "80", "fxFill", "", "fxLayout", "column", 3, "formGroup"], ["fxFlex", "15", "fxLayout", "column"], ["type", "text", "placeholder", "Enter username", "formControlName", "username"], ["type", "password", "placeholder", "Enter password", "formControlName", "password"], ["fxFlex", "10", "fxLayoutAlign", "center center", 3, "click"], ["fxFlex", "20", "fxLayoutAlign", "center center", 1, "toRegister", 3, "click"], ["type", "text", "placeholder", "First Name", "formControlName", "first"], ["type", "text", "placeholder", "Last Name", "formControlName", "last"], ["type", "text", "placeholder", "Username", "formControlName", "username"], ["type", "password", "placeholder", "Password", "formControlName", "password"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 21, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LoginComponent_ng_template_2_Template, 25, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.login)("ngIfElse", _r1);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexFillDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".leftSide[_ngcontent-%COMP%] {\n  background-color: #6930ca;\n  color: white;\n}\n.leftSide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n.rightSide[_ngcontent-%COMP%] {\n  background-color: white;\n}\n.rightSide[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #6930ca;\n  font-size: 16px;\n}\n.rightSide[_ngcontent-%COMP%]   .loginBtn[_ngcontent-%COMP%] {\n  background-color: #6930ca;\n  color: white;\n  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);\n  border-radius: 2px;\n  cursor: pointer;\n}\n.rightSide[_ngcontent-%COMP%]   .disableBtn[_ngcontent-%COMP%] {\n  background-color: lightgrey;\n  color: #6930ca;\n  pointer-events: none;\n}\n.rightSide[_ngcontent-%COMP%]   .toRegister[_ngcontent-%COMP%] {\n  color: #6930ca;\n  cursor: pointer;\n  font-weight: 600;\n}\n.fontBig[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n}\n.close[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 28px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvbG9naW4vRTpcXE1vYmlrYXJ0L3NyY1xcc3R5bGVzXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvbG9naW4vRTpcXE1vYmlrYXJ0L3NyY1xcYXBwXFxtb2R1bGVzXFxuYXZpZ2F0aW9uXFxjb21wb25lbnRzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbmF2aWdhdGlvbi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQUE7QUFLQSxhQUFBO0FBTUEsVUFBQTtBQWNBLFdBQUE7QUFLQSxVQUFBO0FBR0EsV0FBQTtBQy9CQTtFQUNFLHlCRFVjO0VDVGQsWUFBQTtBQ0tGO0FESkU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ01KO0FESEE7RUFDRSx1QkFBQTtBQ01GO0FETEU7RUFDRSxnQ0FBQTtFQUNBLGVBQUE7QUNPSjtBRExFO0VBQ0UseUJESlk7RUNLWixZQUFBO0VBQ0EsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNPSjtBRExFO0VBQ0UsMkJBQUE7RUFDQSxjRFpZO0VDYVosb0JBQUE7QUNPSjtBRExFO0VBQ0UsY0RoQlk7RUNpQlosZUFBQTtFQUNBLGdCQUFBO0FDT0o7QURKQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ09GO0FETEE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbmF2aWdhdGlvbi9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRm9udCBzdHlsZXMqL1xyXG4kZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMnO1xyXG4kZm9udC1mYW1pbHktYm9sZDogJ1JvYm90bywgQm9sZCc7XHJcbiRmb250LWZhbWlseS1ib2xkLWl0YWxpYzogJ1JvYm90byxJdGFsaWMnO1xyXG5cclxuLyogRm9udCBzaXplKi9cclxuJGZvbnQtc2l6ZS1iaWc6IDE2cHg7XHJcbiRmb250LXNpemUtbWVkaXVtOiAxNHB4O1xyXG4kZm9udC1zaXplLXNtYWxsOiAxMnB4O1xyXG4kZm9udC1zaXplLXhsOiAxOHB4O1xyXG5cclxuLyogQ29sb3JzKi9cclxuJGNvbG9yLWZvbnQtcHJpbWFyeTogYmxhY2s7XHJcbiRjb2xvci1wcmltYXJ5OiAjNjkzMGNhO1xyXG4kY29sb3ItZGFyay1ibHVlOiAjMTcyMzM3O1xyXG4kY29sb3Itd2hpdGU6IHdoaXRlO1xyXG4kY29sb3IteWVsbG93OiAjZjU4YzEzO1xyXG4kY29sb3ItZXJyb3I6ICNmZjAwMDA7XHJcbiRjb2xvci1saWdodC1ncmF5OiBsaWdodGdyYXk7XHJcbiRjb2xvci1iZy1ncmV5OiAjZjFmM2Y2O1xyXG4kY29sb3Itd2FybmluZzogI2ZmZGUwMDtcclxuJGNvbG9yLXN1Y2Nlc3M6ICMwZjQ5MTg7XHJcbiRjb2xvci1idG4tb3JhbmdlOiAjZmI2NDFiO1xyXG4kY29sb3ItdHh0LWdyZXk6IGdyZXk7XHJcbiRjb2xvci10eHQtZ3JlZW46ICMzODhlM2M7XHJcbi8qIFBhZGRpbmcqL1xyXG4kc2l6ZS1zbWFsbDogNXB4O1xyXG4kc2l6ZS1tZWRpdW06IDEwcHg7XHJcbiRzaXplLWJpZzogMjBweDtcclxuXHJcbi8qIEhlaWdodCovXHJcbiRuYXZpZ2F0aW9uLWhlaWdodDogNDBweDtcclxuXHJcbi8qIEJvcmRlcnMqL1xyXG4kYm9yZGVyLWJvdHRvbS1ib2xkOiAycHggc29saWQgJGNvbG9yLWxpZ2h0LWdyYXk7XHJcbiRib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWdyYXk7XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubGVmdFNpZGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICB9XHJcbn1cclxuLnJpZ2h0U2lkZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgaW5wdXQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuICAubG9naW5CdG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIC5kaXNhYmxlQnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuICAudG9SZWdpc3RlciB7XHJcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG4uZm9udEJpZyB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iLCIvKiBGb250IHN0eWxlcyovXG4vKiBGb250IHNpemUqL1xuLyogQ29sb3JzKi9cbi8qIFBhZGRpbmcqL1xuLyogSGVpZ2h0Ki9cbi8qIEJvcmRlcnMqL1xuLmxlZnRTaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY5MzBjYTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmxlZnRTaWRlIGltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLnJpZ2h0U2lkZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnJpZ2h0U2lkZSBpbnB1dCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjkzMGNhO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucmlnaHRTaWRlIC5sb2dpbkJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTMwY2E7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yaWdodFNpZGUgLmRpc2FibGVCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XG4gIGNvbG9yOiAjNjkzMGNhO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5yaWdodFNpZGUgLnRvUmVnaXN0ZXIge1xuICBjb2xvcjogIzY5MzBjYTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uZm9udEJpZyB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmNsb3NlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
        }, {
          type: _snack_bar_service__WEBPACK_IMPORTED_MODULE_5__["SnackBarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/navigation/components/navigation/navigation.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/navigation/components/navigation/navigation.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: NavigationComponent */

  /***/
  function srcAppModulesNavigationComponentsNavigationNavigationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationComponent", function () {
      return NavigationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavigationComponent = /*#__PURE__*/function () {
      function NavigationComponent() {
        _classCallCheck(this, NavigationComponent);
      }

      _createClass(NavigationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavigationComponent;
    }();

    NavigationComponent.ɵfac = function NavigationComponent_Factory(t) {
      return new (t || NavigationComponent)();
    };

    NavigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavigationComponent,
      selectors: [["app-navigation"]],
      decls: 14,
      vars: 0,
      consts: [["fxLayout", "column", "fxFill", "", "fxLayoutAlign", "center center", "id", "menuDiv", "fxLayoutGap", "10px"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "navigationDiv"], ["fxFlex", "98", "fxLayout", "row", "fxLayoutAlign", "start center"], ["fxFlex", "20", "fxLayout", "row", "fxLayoutAlign", "center center"], ["routerLink", "/home", "routerLinkActive", "router-link-active"], ["routerLink", "/productlist", "routerLinkActive", "router-link-active"], ["fxFlex", "20", "fxLayout", "row", "fxLayoutAlign", "center center", "routerLinkActive", "router-link-active"]],
      template: function NavigationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Prouct List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Offer Zone ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      styles: [".navigationDiv[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 100%;\n  z-index: 6;\n  border-bottom: 2px solid lightgray;\n  background-color: white;\n  font-size: 18px;\n}\n.navigationDiv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: black;\n}\n.navigationDiv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #6930ca;\n}\n.navigationDiv[_ngcontent-%COMP%]   .router-link-active[_ngcontent-%COMP%] {\n  color: #6930ca;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9FOlxcTW9iaWthcnQvc3JjXFxzdHlsZXNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL25hdmlnYXRpb24vY29tcG9uZW50cy9uYXZpZ2F0aW9uL0U6XFxNb2Jpa2FydC9zcmNcXGFwcFxcbW9kdWxlc1xcbmF2aWdhdGlvblxcY29tcG9uZW50c1xcbmF2aWdhdGlvblxcbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQUE7QUFLQSxhQUFBO0FBTUEsVUFBQTtBQWNBLFdBQUE7QUFLQSxVQUFBO0FBR0EsV0FBQTtBQy9CQTtFQUNFLFlENEJrQjtFQzNCbEIsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQ0Q0Qm1CO0VDM0JuQix1QkRRWTtFQ1BaLGVEQ2E7QUVJZjtBREhFO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0FDS0o7QURIRTtFQUNFLGNERlk7QUVPaEI7QURIRTtFQUNFLGNETFk7RUNNWixnQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogRm9udCBzdHlsZXMqL1xyXG4kZm9udC1mYW1pbHk6ICdvcGVuLXNhbnMnO1xyXG4kZm9udC1mYW1pbHktYm9sZDogJ1JvYm90bywgQm9sZCc7XHJcbiRmb250LWZhbWlseS1ib2xkLWl0YWxpYzogJ1JvYm90byxJdGFsaWMnO1xyXG5cclxuLyogRm9udCBzaXplKi9cclxuJGZvbnQtc2l6ZS1iaWc6IDE2cHg7XHJcbiRmb250LXNpemUtbWVkaXVtOiAxNHB4O1xyXG4kZm9udC1zaXplLXNtYWxsOiAxMnB4O1xyXG4kZm9udC1zaXplLXhsOiAxOHB4O1xyXG5cclxuLyogQ29sb3JzKi9cclxuJGNvbG9yLWZvbnQtcHJpbWFyeTogYmxhY2s7XHJcbiRjb2xvci1wcmltYXJ5OiAjNjkzMGNhO1xyXG4kY29sb3ItZGFyay1ibHVlOiAjMTcyMzM3O1xyXG4kY29sb3Itd2hpdGU6IHdoaXRlO1xyXG4kY29sb3IteWVsbG93OiAjZjU4YzEzO1xyXG4kY29sb3ItZXJyb3I6ICNmZjAwMDA7XHJcbiRjb2xvci1saWdodC1ncmF5OiBsaWdodGdyYXk7XHJcbiRjb2xvci1iZy1ncmV5OiAjZjFmM2Y2O1xyXG4kY29sb3Itd2FybmluZzogI2ZmZGUwMDtcclxuJGNvbG9yLXN1Y2Nlc3M6ICMwZjQ5MTg7XHJcbiRjb2xvci1idG4tb3JhbmdlOiAjZmI2NDFiO1xyXG4kY29sb3ItdHh0LWdyZXk6IGdyZXk7XHJcbiRjb2xvci10eHQtZ3JlZW46ICMzODhlM2M7XHJcbi8qIFBhZGRpbmcqL1xyXG4kc2l6ZS1zbWFsbDogNXB4O1xyXG4kc2l6ZS1tZWRpdW06IDEwcHg7XHJcbiRzaXplLWJpZzogMjBweDtcclxuXHJcbi8qIEhlaWdodCovXHJcbiRuYXZpZ2F0aW9uLWhlaWdodDogNDBweDtcclxuXHJcbi8qIEJvcmRlcnMqL1xyXG4kYm9yZGVyLWJvdHRvbS1ib2xkOiAycHggc29saWQgJGNvbG9yLWxpZ2h0LWdyYXk7XHJcbiRib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLWxpZ2h0LWdyYXk7XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uL3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubmF2aWdhdGlvbkRpdiB7XHJcbiAgaGVpZ2h0OiAkbmF2aWdhdGlvbi1oZWlnaHQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgei1pbmRleDogNjtcclxuICBib3JkZXItYm90dG9tOiAkYm9yZGVyLWJvdHRvbS1ib2xkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICBmb250LXNpemU6ICRmb250LXNpemUteGw7XHJcblxyXG4gIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICB9XHJcbiAgLnJvdXRlci1saW5rLWFjdGl2ZSB7XHJcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG4iLCIvKiBGb250IHN0eWxlcyovXG4vKiBGb250IHNpemUqL1xuLyogQ29sb3JzKi9cbi8qIFBhZGRpbmcqL1xuLyogSGVpZ2h0Ki9cbi8qIEJvcmRlcnMqL1xuLm5hdmlnYXRpb25EaXYge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA2O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmF5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuLm5hdmlnYXRpb25EaXYgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuLm5hdmlnYXRpb25EaXYgYTpob3ZlciB7XG4gIGNvbG9yOiAjNjkzMGNhO1xufVxuLm5hdmlnYXRpb25EaXYgLnJvdXRlci1saW5rLWFjdGl2ZSB7XG4gIGNvbG9yOiAjNjkzMGNhO1xuICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navigation',
          templateUrl: './navigation.component.html',
          styleUrls: ['./navigation.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/navigation/components/product-details/product-details.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/modules/navigation/components/product-details/product-details.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ProductDetailsComponent */

  /***/
  function srcAppModulesNavigationComponentsProductDetailsProductDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
      return ProductDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-service.service */
    "./src/app/app-service.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var ProductDetailsComponent = /*#__PURE__*/function () {
      function ProductDetailsComponent(route, appServ) {
        _classCallCheck(this, ProductDetailsComponent);

        this.route = route;
        this.appServ = appServ;
      }

      _createClass(ProductDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.itm = history.state;
        }
      }]);

      return ProductDetailsComponent;
    }();

    ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) {
      return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]));
    };

    ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductDetailsComponent,
      selectors: [["app-product-details"]],
      decls: 62,
      vars: 6,
      consts: [["fxFill", "", "fxLayout", "column", "fxLayoutAlign", "center center"], ["fxFlex", "95", "fxFill", "", "fxLayout", "row", "fxFill", "", "fxLayoutAlign", "center center"], ["fxFill", "", "fxFlex", "65", "fxLayout", "row", "fxLayoutAlign", "start stretch"], ["fxFill", "", "fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "40", "fxLayout", "column", "fxFill", "", "fxLayoutAlign", "center center"], ["fxFlex", "98", "fxFill", "", "fxLayout", "row", "fxLayoutAlign", "center center"], ["fxFlex", "98", "fxFill", "", "fxLayoutAlign", "start stretch", "fxLayout", "column", "fxLayoutGap", "10px"], ["fxFlex", "60", "fxLayoutAlign", "center center", 3, "src"], ["fxFlex", "9", "fxLayoutAlign", "center center", 1, "btnCart", 3, "click"], ["fxFlex", "60", "fxLayout", "column", "fxFill", "", "fxLayoutAlign", "center center"], ["fxFlex", "98", "fxFill", "", "fxLayoutAlign", "start", "fxLayout", "column", "fxLayoutGap", "10px"], ["fxFlex", "6", "fxLayoutAlign", "start center", 1, "productName"], ["fxFlex", "2", "fxLayoutAlign", "start center", 1, "fontGrey"], ["fxFlex", "6", "fxLayoutAlign", "start center", "fxLayout", "row", "fxLayoutGap", "5px"], [1, "fontBig"], [1, "linethrough"], [1, "fontGreen"], ["fxFill", "", "fxLayout", "column", "fxLayoutAlign", "start"], ["fxFlex", "5", "fxLayoutAlign", "start ", 1, "tableStyle"], ["fxFlex", "40", "fxLayoutAlign", "start center", "fxFill", ""], ["fxFlex", "60", "fxLayoutAlign", "start center"], ["fxFlex", "5", "fxLayoutAlign", "center center ", 1, "tableStyle"], ["fxFlex", "30", "fxLayoutAlign", "start ", 1, "tableStyle"], ["fxFlex", "10", "fxLayoutAlign", "start center", 1, "tableStyle"], ["fxFlex", "40", "fxFill", "", "fxLayoutAlign", "start center"], ["fxFlex", "20", "fxLayoutAlign", "start ", 1, "tableStyle"], ["fxFlex", "10", "fxLayoutAlign", "start ", 1, "tableStyle", "lastElm"]],
      template: function ProductDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_Template_div_click_8_listener() {
            return ctx.appServ.addToCart(ctx.itm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Add to cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "OS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Android");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "RAM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "12 GB");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Product Dimensions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "0.8 x 7.4 x 16.1 cm; 188 Grams");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Special features");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Dual sim, Sensor Core, Flicker-detect sensor, GPS, ;256;Dual SIM;GPS;Music Player;Video Player;;In-display Fingerprint sensor;Accelerometer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Batteries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "2 Lithium ion batteries required. (included)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Wireless communication technologies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Connectivity technologies LTE/LTE-A: 4\xD74 MIMO;Supports up to DL Cat 18/UL Cat 18 (1.2Gbps/200Mbps);depending on carrier ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Display technology");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Multi-touch capacitive touchscreen with 402 ppi pixel density");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", " ", ctx.itm.image, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.itm.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.itm.seller);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9", ctx.itm.price, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u20B9 ", ctx.itm.mrp, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.itm.discount, "%");
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutGapDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]],
      styles: [".seperator[_ngcontent-%COMP%] {\n  border-bottom: 1px solid lightgray;\n}\nimg[_ngcontent-%COMP%] {\n  width: 250px;\n}\n.fontBig[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n}\n.fontGrey[_ngcontent-%COMP%], .linethrough[_ngcontent-%COMP%] {\n  color: grey;\n}\n.fontGreen[_ngcontent-%COMP%] {\n  color: #388e3c;\n}\n.linethrough[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n}\n.tableStyle[_ngcontent-%COMP%] {\n  border-top: 1px solid darkgrey;\n  border-right: 1px solid darkgrey;\n  border-left: 1px solid darkgrey;\n}\n.tableStyle[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:first-child {\n  background-color: lightgrey;\n  padding-left: 10px;\n}\n.tableStyle[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2) {\n  padding-left: 10px;\n}\n.lastElm[_ngcontent-%COMP%] {\n  border-bottom: 1px solid darkgrey;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL0U6XFxNb2Jpa2FydC9zcmNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbmF2aWdhdGlvbi9jb21wb25lbnRzL3Byb2R1Y3QtZGV0YWlscy9FOlxcTW9iaWthcnQvc3JjXFxhcHBcXG1vZHVsZXNcXG5hdmlnYXRpb25cXGNvbXBvbmVudHNcXHByb2R1Y3QtZGV0YWlsc1xccHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL25hdmlnYXRpb24vY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQUE7QUFLQSxhQUFBO0FBTUEsVUFBQTtBQWNBLFdBQUE7QUFLQSxVQUFBO0FBR0EsV0FBQTtBQ2hDQTtFQUNFLGtDRGlDYztBRTNCaEI7QURKQTtFQUNFLFlBQUE7QUNPRjtBRExBO0VBQ0UsZURDYTtFQ0FiLGdCQUFBO0FDUUY7QUROQTtFQUNFLFdEV2U7QUVGakI7QURQQTtFQUNFLGNEU2dCO0FFQ2xCO0FEUkE7RUFFRSw2QkFBQTtBQ1VGO0FEUkE7RUFTRSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUNHRjtBRGJFO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQ2VKO0FEYkU7RUFDRSxrQkFBQTtBQ2VKO0FEUkE7RUFDRSxpQ0FBQTtBQ1dGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEZvbnQgc3R5bGVzKi9cclxuJGZvbnQtZmFtaWx5OiAnb3Blbi1zYW5zJztcclxuJGZvbnQtZmFtaWx5LWJvbGQ6ICdSb2JvdG8sIEJvbGQnO1xyXG4kZm9udC1mYW1pbHktYm9sZC1pdGFsaWM6ICdSb2JvdG8sSXRhbGljJztcclxuXHJcbi8qIEZvbnQgc2l6ZSovXHJcbiRmb250LXNpemUtYmlnOiAxNnB4O1xyXG4kZm9udC1zaXplLW1lZGl1bTogMTRweDtcclxuJGZvbnQtc2l6ZS1zbWFsbDogMTJweDtcclxuJGZvbnQtc2l6ZS14bDogMThweDtcclxuXHJcbi8qIENvbG9ycyovXHJcbiRjb2xvci1mb250LXByaW1hcnk6IGJsYWNrO1xyXG4kY29sb3ItcHJpbWFyeTogIzY5MzBjYTtcclxuJGNvbG9yLWRhcmstYmx1ZTogIzE3MjMzNztcclxuJGNvbG9yLXdoaXRlOiB3aGl0ZTtcclxuJGNvbG9yLXllbGxvdzogI2Y1OGMxMztcclxuJGNvbG9yLWVycm9yOiAjZmYwMDAwO1xyXG4kY29sb3ItbGlnaHQtZ3JheTogbGlnaHRncmF5O1xyXG4kY29sb3ItYmctZ3JleTogI2YxZjNmNjtcclxuJGNvbG9yLXdhcm5pbmc6ICNmZmRlMDA7XHJcbiRjb2xvci1zdWNjZXNzOiAjMGY0OTE4O1xyXG4kY29sb3ItYnRuLW9yYW5nZTogI2ZiNjQxYjtcclxuJGNvbG9yLXR4dC1ncmV5OiBncmV5O1xyXG4kY29sb3ItdHh0LWdyZWVuOiAjMzg4ZTNjO1xyXG4vKiBQYWRkaW5nKi9cclxuJHNpemUtc21hbGw6IDVweDtcclxuJHNpemUtbWVkaXVtOiAxMHB4O1xyXG4kc2l6ZS1iaWc6IDIwcHg7XHJcblxyXG4vKiBIZWlnaHQqL1xyXG4kbmF2aWdhdGlvbi1oZWlnaHQ6IDQwcHg7XHJcblxyXG4vKiBCb3JkZXJzKi9cclxuJGJvcmRlci1ib3R0b20tYm9sZDogMnB4IHNvbGlkICRjb2xvci1saWdodC1ncmF5O1xyXG4kYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1saWdodC1ncmF5O1xyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xyXG4uc2VwZXJhdG9yIHtcclxuICBib3JkZXItYm90dG9tOiAkYm9yZGVyLWJvdHRvbTtcclxufVxyXG5pbWcge1xyXG4gIHdpZHRoOiAyNTBweDtcclxufVxyXG4uZm9udEJpZyB7XHJcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXhsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmZvbnRHcmV5IHtcclxuICBjb2xvcjogJGNvbG9yLXR4dC1ncmV5O1xyXG59XHJcbi5mb250R3JlZW4ge1xyXG4gIGNvbG9yOiAkY29sb3ItdHh0LWdyZWVuO1xyXG59XHJcbi5saW5ldGhyb3VnaCB7XHJcbiAgQGV4dGVuZCAuZm9udEdyZXk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuLnRhYmxlU3R5bGUge1xyXG4gIDpmaXJzdC1jaGlsZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIDpudGgtY2hpbGQoMikge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGRhcmtncmV5O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGRhcmtncmV5O1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgZGFya2dyZXk7XHJcbn1cclxuLmxhc3RFbG0ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBkYXJrZ3JleTtcclxufVxyXG4iLCIvKiBGb250IHN0eWxlcyovXG4vKiBGb250IHNpemUqL1xuLyogQ29sb3JzKi9cbi8qIFBhZGRpbmcqL1xuLyogSGVpZ2h0Ki9cbi8qIEJvcmRlcnMqL1xuLnNlcGVyYXRvciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG59XG5cbmltZyB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmZvbnRCaWcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5mb250R3JleSwgLmxpbmV0aHJvdWdoIHtcbiAgY29sb3I6IGdyZXk7XG59XG5cbi5mb250R3JlZW4ge1xuICBjb2xvcjogIzM4OGUzYztcbn1cblxuLmxpbmV0aHJvdWdoIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi50YWJsZVN0eWxlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGRhcmtncmV5O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBkYXJrZ3JleTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBkYXJrZ3JleTtcbn1cbi50YWJsZVN0eWxlIDpmaXJzdC1jaGlsZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnRhYmxlU3R5bGUgOm50aC1jaGlsZCgyKSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmxhc3RFbG0ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZGFya2dyZXk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-details',
          templateUrl: './product-details.component.html',
          styleUrls: ['./product-details.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/navigation/components/product-list/product-list.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/navigation/components/product-list/product-list.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppModulesNavigationComponentsProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _product_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./product-list.service */
    "./src/app/modules/navigation/components/product-list/product-list.service.ts");
    /* harmony import */


    var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-service.service */
    "./src/app/app-service.service.ts");
    /* harmony import */


    var _navigation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../navigation.service */
    "./src/app/modules/navigation/navigation.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");

    function ProductListComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_div_3_Template_div_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r1 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.appServ.addToCart(i_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "shopping_cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add to cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", i_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ProductListComponent = /*#__PURE__*/function () {
      function ProductListComponent(prodListSer, appServ, navServ) {
        _classCallCheck(this, ProductListComponent);

        this.prodListSer = prodListSer;
        this.appServ = appServ;
        this.navServ = navServ;
        this.searchText = '';
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.prodListSer.getProductList().subscribe(function (res) {
            if (res) {
              _this3.arrProduct = res;
            }
          });
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
      return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_product_list_service__WEBPACK_IMPORTED_MODULE_1__["ProductListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]));
    };

    ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductListComponent,
      selectors: [["app-product-list"]],
      decls: 5,
      vars: 4,
      consts: [["fxFill", "", "id", "productMain", "fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayout", "column", "fxFlex", "98", "fxFill", "", "fxLayoutAlign", "center center", "fxLayoutGap", "10px"], ["fxFill", "", "fxFlex", "97", "fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", "start"], ["fxFlex", "20", 4, "ngFor", "ngForOf"], ["fxFlex", "20"], ["fxLayout", "column", "fxFill", "", "fxLayoutAlign", "center center"], ["fxFlex", "10", 1, "productName"], ["fxFlex", "80"], [3, "src"], ["fxFill", "", "fxFlex", "10", "fxLayoutAlign", "center center", 1, "btnCart", 3, "click"]],
      template: function ProductListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductListComponent_div_3_Template, 11, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 1, ctx.arrProduct, ctx.navServ.searchText));
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"]],
      pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipe"]],
      styles: ["#productMain[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n#productMain[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  height: 400px;\n}\n#productMain[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvcHJvZHVjdC1saXN0L0U6XFxNb2Jpa2FydC9zcmNcXGFwcFxcbW9kdWxlc1xcbmF2aWdhdGlvblxcY29tcG9uZW50c1xccHJvZHVjdC1saXN0XFxwcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbmF2aWdhdGlvbi9jb21wb25lbnRzL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQ0NGO0FEQUU7RUFDRSxhQUFBO0FDRUo7QURDRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL25hdmlnYXRpb24vY29tcG9uZW50cy9wcm9kdWN0LWxpc3QvcHJvZHVjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Byb2R1Y3RNYWluIHtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIG1hdC1jYXJkIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAvL3dpZHRoOiAzMzdweDtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG59XHJcbiIsIiNwcm9kdWN0TWFpbiB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4jcHJvZHVjdE1haW4gbWF0LWNhcmQge1xuICBoZWlnaHQ6IDQwMHB4O1xufVxuI3Byb2R1Y3RNYWluIGltZyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-list',
          templateUrl: './product-list.component.html',
          styleUrls: ['./product-list.component.scss']
        }]
      }], function () {
        return [{
          type: _product_list_service__WEBPACK_IMPORTED_MODULE_1__["ProductListService"]
        }, {
          type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
        }, {
          type: _navigation_service__WEBPACK_IMPORTED_MODULE_3__["NavigationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/navigation/components/product-list/product-list.service.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/navigation/components/product-list/product-list.service.ts ***!
    \************************************************************************************/

  /*! exports provided: ProductListService */

  /***/
  function srcAppModulesNavigationComponentsProductListProductListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListService", function () {
      return ProductListService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ProductListService = /*#__PURE__*/function () {
      function ProductListService(http) {
        _classCallCheck(this, ProductListService);

        this.http = http;
        this.productListUrl = 'assets/tempData/getProductList.json';
      }

      _createClass(ProductListService, [{
        key: "getProductList",
        value: function getProductList() {
          return this.http.get(this.productListUrl);
        }
      }]);

      return ProductListService;
    }();

    ProductListService.ɵfac = function ProductListService_Factory(t) {
      return new (t || ProductListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ProductListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductListService,
      factory: ProductListService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/navigation/components/search/search.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/navigation/components/search/search.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppModulesNavigationComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../login/login.component */
    "./src/app/modules/navigation/components/login/login.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-service.service */
    "./src/app/app-service.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _navigation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../navigation.service */
    "./src/app/modules/navigation/navigation.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _snack_bar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../../snack-bar.service */
    "./src/app/snack-bar.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function SearchComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_div_9_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r4.loginPage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SearchComponent_ng_template_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_ng_template_10_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          return ctx_r6.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function SearchComponent_span_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.appServ.cartItems.length);
      }
    }

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(appServ, authServ, navServ, dialog, snack) {
        _classCallCheck(this, SearchComponent);

        this.appServ = appServ;
        this.authServ = authServ;
        this.navServ = navServ;
        this.dialog = dialog;
        this.snack = snack;
        this.authServ.isSession = localStorage.getItem('currentUser') ? true : false;
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "searchItem",
        value: function searchItem() {
          this.navServ.searchText = this.iptSearch;
        }
      }, {
        key: "loginPage",
        value: function loginPage() {
          this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"], {
            height: '528px',
            width: '650px',
            panelClass: 'loginPanel'
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authServ.logout();
          this.snack.showSnackBar('Logout successfull');
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_snack_bar_service__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 23,
      vars: 4,
      consts: [["fxLayout", "row", "fxLayoutAlign", "center center", "id", "searchDiv", "fxLayoutGap", "50px", 1, "header"], ["fxFlex", "20", "fxLayout", "row", "fxLayoutAlign", "end center"], ["src", "assets/images/logo.png", 1, "logoImage"], ["fxFlex", "30", "fxLayout", "column", "fxFill", "", "fxLayoutAlign", "center center"], ["fxFlex", "60", "fxFill", "", "fxLayout", "row", "fxLayoutAlign", "center center", "id", "searchInnerDiv"], ["fxFill", "", "fxFlex", "90", "type", "text", "placeholder", "Search for products,brand and more", 3, "ngModel", "keyup", "ngModelChange"], ["fxFlex", "10", "fxFill", "", "fxLayoutAlign", "center center", 3, "click"], ["fxFlex", "10", "fxFill", "", "fxLayout", "column", "fxLayoutAlign", "center center", 3, "click", 4, "ngIf", "ngIfElse"], ["logoutDiv", ""], ["fxFlex", "10", "fxLayout", "row", "fxLayoutAlign", "start center"], ["fxFlex", "20", "fxLayout", "row", "fxLayoutAlign", "start center"], ["class", "cartCount", "fxLayoutAlign", "center center", 4, "ngIf"], ["routerLink", "/cart", "fxLayout", "row"], ["fxLayoutAlign", "center center"], ["fxFlex", "10", "fxFill", "", "fxLayout", "column", "fxLayoutAlign", "center center", 3, "click"], ["fxFlex", "60", "fxFill", "", "fxLayoutAlign", "center center", 1, "btnLogin"], ["fxLayoutAlign", "center center", 1, "cartCount"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function SearchComponent_Template_input_keyup_6_listener() {
            return ctx.searchItem();
          })("ngModelChange", function SearchComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.iptSearch = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_mat_icon_click_7_listener() {
            return ctx.searchItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "search");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SearchComponent_div_9_Template, 3, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SearchComponent_ng_template_10_Template, 3, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " More ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "keyboard_arrow_down");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SearchComponent_span_17_Template, 2, 1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "shopping_cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.iptSearch);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.authServ.isSession)("ngIfElse", _r1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.appServ.cartItems.length);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["FlexFillDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"]],
      styles: ["#searchDiv[_ngcontent-%COMP%] {\n  background-color: #6930ca;\n  color: white;\n  height: 60px;\n}\n#searchDiv[_ngcontent-%COMP%]   #searchInnerDiv[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  background-color: white;\n  color: #6930ca;\n  cursor: pointer;\n}\n#searchDiv[_ngcontent-%COMP%]   .logoImage[_ngcontent-%COMP%] {\n  width: 150px;\n  cursor: pointer;\n}\n#searchDiv[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n#searchDiv[_ngcontent-%COMP%]   .cartCount[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  background-color: red;\n  color: white;\n  height: 20px;\n  width: 20px;\n  font-size: 10px;\n  font-weight: bold;\n  content: \"\";\n  position: relative;\n  top: -15px;\n  left: 10px;\n  padding: 1px;\n  border-color: white;\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvc2VhcmNoL0U6XFxNb2Jpa2FydC9zcmNcXHN0eWxlc1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvbmF2aWdhdGlvbi9jb21wb25lbnRzL3NlYXJjaC9FOlxcTW9iaWthcnQvc3JjXFxhcHBcXG1vZHVsZXNcXG5hdmlnYXRpb25cXGNvbXBvbmVudHNcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL25hdmlnYXRpb24vY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQUE7QUFLQSxhQUFBO0FBTUEsVUFBQTtBQWNBLFdBQUE7QUFLQSxVQUFBO0FBR0EsV0FBQTtBQ2hDQTtFQUNFLHlCRFdjO0VDVmQsWURZWTtFQ1haLFlBQUE7QUNNRjtBRExFO0VBQ0UsdUJEU1U7RUNSVixjRE1ZO0VDTFosZUFBQTtBQ09KO0FETEU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ09KO0FESkU7RUFDRSxxQkFBQTtFQUNBLFlERlU7QUVRZDtBREpFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbmF2aWdhdGlvbi9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGb250IHN0eWxlcyovXHJcbiRmb250LWZhbWlseTogJ29wZW4tc2Fucyc7XHJcbiRmb250LWZhbWlseS1ib2xkOiAnUm9ib3RvLCBCb2xkJztcclxuJGZvbnQtZmFtaWx5LWJvbGQtaXRhbGljOiAnUm9ib3RvLEl0YWxpYyc7XHJcblxyXG4vKiBGb250IHNpemUqL1xyXG4kZm9udC1zaXplLWJpZzogMTZweDtcclxuJGZvbnQtc2l6ZS1tZWRpdW06IDE0cHg7XHJcbiRmb250LXNpemUtc21hbGw6IDEycHg7XHJcbiRmb250LXNpemUteGw6IDE4cHg7XHJcblxyXG4vKiBDb2xvcnMqL1xyXG4kY29sb3ItZm9udC1wcmltYXJ5OiBibGFjaztcclxuJGNvbG9yLXByaW1hcnk6ICM2OTMwY2E7XHJcbiRjb2xvci1kYXJrLWJsdWU6ICMxNzIzMzc7XHJcbiRjb2xvci13aGl0ZTogd2hpdGU7XHJcbiRjb2xvci15ZWxsb3c6ICNmNThjMTM7XHJcbiRjb2xvci1lcnJvcjogI2ZmMDAwMDtcclxuJGNvbG9yLWxpZ2h0LWdyYXk6IGxpZ2h0Z3JheTtcclxuJGNvbG9yLWJnLWdyZXk6ICNmMWYzZjY7XHJcbiRjb2xvci13YXJuaW5nOiAjZmZkZTAwO1xyXG4kY29sb3Itc3VjY2VzczogIzBmNDkxODtcclxuJGNvbG9yLWJ0bi1vcmFuZ2U6ICNmYjY0MWI7XHJcbiRjb2xvci10eHQtZ3JleTogZ3JleTtcclxuJGNvbG9yLXR4dC1ncmVlbjogIzM4OGUzYztcclxuLyogUGFkZGluZyovXHJcbiRzaXplLXNtYWxsOiA1cHg7XHJcbiRzaXplLW1lZGl1bTogMTBweDtcclxuJHNpemUtYmlnOiAyMHB4O1xyXG5cclxuLyogSGVpZ2h0Ki9cclxuJG5hdmlnYXRpb24taGVpZ2h0OiA0MHB4O1xyXG5cclxuLyogQm9yZGVycyovXHJcbiRib3JkZXItYm90dG9tLWJvbGQ6IDJweCBzb2xpZCAkY29sb3ItbGlnaHQtZ3JheTtcclxuJGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItbGlnaHQtZ3JheTtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuI3NlYXJjaERpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgI3NlYXJjaElubmVyRGl2IG1hdC1pY29uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci13aGl0ZTtcclxuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLmxvZ29JbWFnZSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAkY29sb3Itd2hpdGU7XHJcbiAgfVxyXG4gIC5jYXJ0Q291bnQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTE1cHg7XHJcbiAgICBsZWZ0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxufVxyXG4iLCIvKiBGb250IHN0eWxlcyovXG4vKiBGb250IHNpemUqL1xuLyogQ29sb3JzKi9cbi8qIFBhZGRpbmcqL1xuLyogSGVpZ2h0Ki9cbi8qIEJvcmRlcnMqL1xuI3NlYXJjaERpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2OTMwY2E7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiA2MHB4O1xufVxuI3NlYXJjaERpdiAjc2VhcmNoSW5uZXJEaXYgbWF0LWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICM2OTMwY2E7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNzZWFyY2hEaXYgLmxvZ29JbWFnZSB7XG4gIHdpZHRoOiAxNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3NlYXJjaERpdiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG4jc2VhcmNoRGl2IC5jYXJ0Q291bnQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNXB4O1xuICBsZWZ0OiAxMHB4O1xuICBwYWRkaW5nOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _navigation_service__WEBPACK_IMPORTED_MODULE_4__["NavigationService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: _snack_bar_service__WEBPACK_IMPORTED_MODULE_6__["SnackBarService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/navigation/navigation.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/navigation/navigation.module.ts ***!
    \*********************************************************/

  /*! exports provided: NavigationModule */

  /***/
  function srcAppModulesNavigationNavigationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationModule", function () {
      return NavigationModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/navigation/navigation.component */
    "./src/app/modules/navigation/components/navigation/navigation.component.ts");
    /* harmony import */


    var _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/cart/cart.component */
    "./src/app/modules/navigation/components/cart/cart.component.ts");
    /* harmony import */


    var _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/product-details/product-details.component */
    "./src/app/modules/navigation/components/product-details/product-details.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
    /* harmony import */


    var _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/product-list/product-list.component */
    "./src/app/modules/navigation/components/product-list/product-list.component.ts");
    /* harmony import */


    var _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/search/search.component */
    "./src/app/modules/navigation/components/search/search.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/login/login.component */
    "./src/app/modules/navigation/components/login/login.component.ts");

    var NavigationModule = function NavigationModule() {
      _classCallCheck(this, NavigationModule);
    };

    NavigationModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: NavigationModule
    });
    NavigationModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function NavigationModule_Factory(t) {
        return new (t || NavigationModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavigationModule, {
        declarations: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"], _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"], _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"]],
        exports: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _components_cart_cart_component__WEBPACK_IMPORTED_MODULE_6__["CartComponent"], _components_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_7__["ProductDetailsComponent"], _components_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], src_app_app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"]],
          exports: [_components_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/navigation/navigation.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/modules/navigation/navigation.service.ts ***!
    \**********************************************************/

  /*! exports provided: NavigationService */

  /***/
  function srcAppModulesNavigationNavigationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavigationService", function () {
      return NavigationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavigationService = function NavigationService() {
      _classCallCheck(this, NavigationService);

      this.searchText = '';
    };

    NavigationService.ɵfac = function NavigationService_Factory(t) {
      return new (t || NavigationService)();
    };

    NavigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: NavigationService,
      factory: NavigationService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/snack-bar.service.ts":
  /*!**************************************!*\
    !*** ./src/app/snack-bar.service.ts ***!
    \**************************************/

  /*! exports provided: SnackBarService */

  /***/
  function srcAppSnackBarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnackBarService", function () {
      return SnackBarService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var SnackBarService = /*#__PURE__*/function () {
      // matSnackServ: MatSnackBar;
      function SnackBarService(matSnackServ) {
        _classCallCheck(this, SnackBarService);

        this.matSnackServ = matSnackServ;
      }

      _createClass(SnackBarService, [{
        key: "showSnackBar",
        value: function showSnackBar(message) {
          var config = new _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarConfig"]();
          config.panelClass = ['snackBar'];
          config.duration = 1000;
          this.matSnackServ.open(message, '', config);
        }
      }]);

      return SnackBarService;
    }();

    SnackBarService.ɵfac = function SnackBarService_Factory(t) {
      return new (t || SnackBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
    };

    SnackBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SnackBarService,
      factory: SnackBarService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackBarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Mobikart\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map