(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-layouts-module"],{

/***/ "./src/app/layouts/boxed-alt/boxed-alt.component.html":
/*!************************************************************!*\
  !*** ./src/app/layouts/boxed-alt/boxed-alt.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- START JUMBOTRON -->\n  <div class=\"jumbotron\">\n      <pg-container extraHorizontalClass=\"p-l-0 p-r-0\" extraClass=\"sm-p-l-0 sm-p-r-0\">\n        <div class=\"inner\" pg-parallax>\n          <!-- START BREADCRUMB -->\n           <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Pages</a></li>\n            <li class=\"breadcrumb-item active\">Boxed template</li>\n          </ol>\n          <!-- END BREADCRUMB --> \n        </div>\n      </pg-container>\n    </div>\n    <!-- END JUMBOTRON -->\n    <!-- START CONTAINER FLUID -->\n    <pg-container>\n      <!-- BEGIN PlACE PAGE CONTENT HERE -->\n      <!-- END PLACE PAGE CONTENT HERE -->\n    </pg-container>\n    <!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/app/layouts/boxed-alt/boxed-alt.component.scss":
/*!************************************************************!*\
  !*** ./src/app/layouts/boxed-alt/boxed-alt.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/boxed-alt/boxed-alt.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layouts/boxed-alt/boxed-alt.component.ts ***!
  \**********************************************************/
/*! exports provided: BoxedAltComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxedAltComponent", function() { return BoxedAltComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@pages/services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoxedAltComponent = /** @class */ (function () {
    function BoxedAltComponent(toggler) {
        this.toggler = toggler;
    }
    BoxedAltComponent.prototype.ngOnInit = function () {
        this.toggler.setBodyLayoutClass("box-layout");
        this.toggler.setBodyLayoutClass("menu-pin");
    };
    BoxedAltComponent.prototype.ngOnDestroy = function () {
        //@TODO : USE service
        pg.removeClass(document.body, "box-layout");
    };
    BoxedAltComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boxed-alt',
            template: __webpack_require__(/*! ./boxed-alt.component.html */ "./src/app/layouts/boxed-alt/boxed-alt.component.html"),
            styles: [__webpack_require__(/*! ./boxed-alt.component.scss */ "./src/app/layouts/boxed-alt/boxed-alt.component.scss")]
        }),
        __metadata("design:paramtypes", [_pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], BoxedAltComponent);
    return BoxedAltComponent;
}());



/***/ }),

/***/ "./src/app/layouts/boxed/boxed.component.html":
/*!****************************************************!*\
  !*** ./src/app/layouts/boxed/boxed.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- START JUMBOTRON -->\n  <div class=\"jumbotron\">\n      <pg-container extraHorizontalClass=\"p-l-0 p-r-0\" extraClass=\"sm-p-l-0 sm-p-r-0\">\n        <div class=\"inner\" pg-parallax>\n          <!-- START BREADCRUMB -->\n           <ol class=\"breadcrumb\">\n            <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Pages</a></li>\n            <li class=\"breadcrumb-item active\">Boxed template</li>\n          </ol>\n          <!-- END BREADCRUMB --> \n        </div>\n      </pg-container>\n    </div>\n    <!-- END JUMBOTRON -->\n    <!-- START CONTAINER FLUID -->\n    <pg-container>\n      <!-- BEGIN PlACE PAGE CONTENT HERE -->\n      <!-- END PLACE PAGE CONTENT HERE -->\n    </pg-container>\n    <!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/app/layouts/boxed/boxed.component.scss":
/*!****************************************************!*\
  !*** ./src/app/layouts/boxed/boxed.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/boxed/boxed.component.ts":
/*!**************************************************!*\
  !*** ./src/app/layouts/boxed/boxed.component.ts ***!
  \**************************************************/
/*! exports provided: BoxedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxedComponent", function() { return BoxedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@pages/services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BoxedComponent = /** @class */ (function () {
    function BoxedComponent(toggler) {
        this.toggler = toggler;
    }
    BoxedComponent.prototype.ngOnInit = function () {
        this.toggler.setBodyLayoutClass("box-layout");
        this.toggler.setBodyLayoutClass("menu-pin");
    };
    BoxedComponent.prototype.ngOnDestroy = function () {
        //@TODO : USE service
        pg.removeClass(document.body, "box-layout");
        pg.removeClass(document.body, "menu-pin");
    };
    BoxedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-boxed',
            template: __webpack_require__(/*! ./boxed.component.html */ "./src/app/layouts/boxed/boxed.component.html"),
            styles: [__webpack_require__(/*! ./boxed.component.scss */ "./src/app/layouts/boxed/boxed.component.scss")]
        }),
        __metadata("design:paramtypes", [_pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], BoxedComponent);
    return BoxedComponent;
}());



/***/ }),

/***/ "./src/app/layouts/default/default.component.html":
/*!********************************************************!*\
  !*** ./src/app/layouts/default/default.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- START JUMBOTRON -->\n  <div class=\"jumbotron\">\n    <pg-container extraHorizontalClass=\"p-l-0 p-r-0\" extraClass=\"sm-p-l-0 sm-p-r-0\">\n      <div class=\"inner\" pg-parallax>\n        <!-- START BREADCRUMB -->\n         <ol class=\"breadcrumb\">\n          <li class=\"breadcrumb-item\"><a href=\"javascript:void(0)\">Pages</a></li>\n          <li class=\"breadcrumb-item active\">Blank template</li>\n        </ol>\n        <!-- END BREADCRUMB --> \n      </div>\n    </pg-container>\n  </div>\n  <!-- END JUMBOTRON -->\n  <!-- START CONTAINER FLUID -->\n  <pg-container>\n    <!-- BEGIN PlACE PAGE CONTENT HERE -->\n    <!-- END PLACE PAGE CONTENT HERE -->\n  </pg-container>\n  <!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/app/layouts/default/default.component.scss":
/*!********************************************************!*\
  !*** ./src/app/layouts/default/default.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/default/default.component.ts":
/*!******************************************************!*\
  !*** ./src/app/layouts/default/default.component.ts ***!
  \******************************************************/
/*! exports provided: DefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultComponent", function() { return DefaultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DefaultComponent = /** @class */ (function () {
    function DefaultComponent() {
    }
    DefaultComponent.prototype.ngOnInit = function () {
    };
    DefaultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-default',
            template: __webpack_require__(/*! ./default.component.html */ "./src/app/layouts/default/default.component.html"),
            styles: [__webpack_require__(/*! ./default.component.scss */ "./src/app/layouts/default/default.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DefaultComponent);
    return DefaultComponent;
}());



/***/ }),

/***/ "./src/app/layouts/layouts.module.ts":
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/*! exports provided: LayoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutPageModule", function() { return LayoutPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layouts_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts.routing */ "./src/app/layouts/layouts.routing.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../@pages/components/shared.module */ "./src/app/@pages/components/shared.module.ts");
/* harmony import */ var _secondary_secondary_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./secondary/secondary.component */ "./src/app/layouts/secondary/secondary.component.ts");
/* harmony import */ var _secondary_light_secondary_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./secondary-light/secondary.component */ "./src/app/layouts/secondary-light/secondary.component.ts");
/* harmony import */ var _secondary_horizontal_secondary_horizontal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./secondary-horizontal/secondary-horizontal.component */ "./src/app/layouts/secondary-horizontal/secondary-horizontal.component.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./default/default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var _boxed_boxed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./boxed/boxed.component */ "./src/app/layouts/boxed/boxed.component.ts");
/* harmony import */ var _boxed_alt_boxed_alt_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./boxed-alt/boxed-alt.component */ "./src/app/layouts/boxed-alt/boxed-alt.component.ts");
/* harmony import */ var _secondary_horizontal_casual_secondary_horizontal_casual_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./secondary-horizontal-casual/secondary-horizontal-casual.component */ "./src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Angular Dependencies



//Router

//Core Pages Layout Components

//Thirdparty components
//Sample Demo pages







var LayoutPageModule = /** @class */ (function () {
    function LayoutPageModule() {
    }
    LayoutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_layouts_routing__WEBPACK_IMPORTED_MODULE_3__["LayoutsRoutes"]),
            ],
            declarations: [_secondary_secondary_component__WEBPACK_IMPORTED_MODULE_5__["SecondaryComponent"], _secondary_light_secondary_component__WEBPACK_IMPORTED_MODULE_6__["SecondaryComponentLight"], _secondary_horizontal_secondary_horizontal_component__WEBPACK_IMPORTED_MODULE_7__["SecondaryHorizontalComponent"], _default_default_component__WEBPACK_IMPORTED_MODULE_8__["DefaultComponent"], _boxed_boxed_component__WEBPACK_IMPORTED_MODULE_9__["BoxedComponent"], _boxed_alt_boxed_alt_component__WEBPACK_IMPORTED_MODULE_10__["BoxedAltComponent"], _secondary_horizontal_casual_secondary_horizontal_casual_component__WEBPACK_IMPORTED_MODULE_11__["SecondaryHorizontalCasualComponent"]],
            providers: []
        })
    ], LayoutPageModule);
    return LayoutPageModule;
}());



/***/ }),

/***/ "./src/app/layouts/layouts.routing.ts":
/*!********************************************!*\
  !*** ./src/app/layouts/layouts.routing.ts ***!
  \********************************************/
/*! exports provided: LayoutsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutsRoutes", function() { return LayoutsRoutes; });
/* harmony import */ var _secondary_secondary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./secondary/secondary.component */ "./src/app/layouts/secondary/secondary.component.ts");
/* harmony import */ var _secondary_light_secondary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secondary-light/secondary.component */ "./src/app/layouts/secondary-light/secondary.component.ts");
/* harmony import */ var _secondary_horizontal_secondary_horizontal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./secondary-horizontal/secondary-horizontal.component */ "./src/app/layouts/secondary-horizontal/secondary-horizontal.component.ts");
/* harmony import */ var _secondary_horizontal_casual_secondary_horizontal_casual_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./secondary-horizontal-casual/secondary-horizontal-casual.component */ "./src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.ts");
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default/default.component */ "./src/app/layouts/default/default.component.ts");
/* harmony import */ var _boxed_boxed_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./boxed/boxed.component */ "./src/app/layouts/boxed/boxed.component.ts");
/* harmony import */ var _boxed_alt_boxed_alt_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./boxed-alt/boxed-alt.component */ "./src/app/layouts/boxed-alt/boxed-alt.component.ts");







var LayoutsRoutes = [
    {
        path: '',
        children: [{
                path: 'default',
                component: _default_default_component__WEBPACK_IMPORTED_MODULE_4__["DefaultComponent"],
                data: {
                    title: 'default',
                    boxed: false
                }
            }, {
                path: 'secondary',
                component: _secondary_secondary_component__WEBPACK_IMPORTED_MODULE_0__["SecondaryComponent"],
                data: {
                    title: '',
                    boxed: false
                }
            }, {
                path: 'secondary-light',
                component: _secondary_light_secondary_component__WEBPACK_IMPORTED_MODULE_1__["SecondaryComponentLight"],
                data: {
                    title: '',
                    boxed: false
                }
            }, {
                path: 'boxed',
                component: _boxed_boxed_component__WEBPACK_IMPORTED_MODULE_5__["BoxedComponent"],
                data: {
                    boxed: true
                }
            }, {
                path: 'boxed-alt',
                component: _boxed_alt_boxed_alt_component__WEBPACK_IMPORTED_MODULE_6__["BoxedAltComponent"],
                data: {
                    boxed: true
                }
            }, {
                path: 'with-sidebar',
                component: _secondary_horizontal_secondary_horizontal_component__WEBPACK_IMPORTED_MODULE_2__["SecondaryHorizontalComponent"],
                data: {
                    title: 'Builder'
                }
            }, {
                path: 'with-sidebar-casual',
                component: _secondary_horizontal_casual_secondary_horizontal_casual_component__WEBPACK_IMPORTED_MODULE_3__["SecondaryHorizontalCasualComponent"],
                data: {
                    title: 'Builder'
                }
            },
            {
                path: 'horizontal-blank',
                component: _default_default_component__WEBPACK_IMPORTED_MODULE_4__["DefaultComponent"],
            }]
    }
];


/***/ }),

/***/ "./src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START APP -->\n<div class=\"container casual-with-breadcrumb no-padding\">\n  <div class=\"secondary-sidebar-toggle bg-master-lighter padding-10 text-center d-lg-none d-xl-none\">\n    <a href=\"javascript:void(0);\" (click)=\"toggleSecondarySideBar($event)\"><i class=\"pg pg-more\"></i></a>\n  </div>\n  <pg-secondary-sidebar extraClass=\"light\">\n      <p class=\"menu-title\">BROWSE</p>\n      <ul class=\"main-menu\">\n        <li class=\"\">\n          <a href=\"javascript:void(0);\">\n            <span class=\"title\">pages frontend</span>\n          </a>\n        </li>\n        <li class=\"\">\n          <a href=\"javascript:void(0);\">\n            <span class=\"title\">webarch admin</span>\n          </a>\n        </li>\n      </ul>\n      <p class=\"menu-title m-t-30\">YOUR FAVOURITE</p>\n      <pg-menu-items-alt [Items]=\"menuItems\"></pg-menu-items-alt>\n  </pg-secondary-sidebar>\n    <!-- END SECONDARY SIDEBAR MENU -->\n    <div class=\"inner-content full-height  p-r-20 p-l-20\">\n        <div class=\"page-content-wrapper content-builder active full-height\" >\n            <div class=\"content\">\n              <div class=\"container container-fixed-lg\">\n                <ul class=\"breadcrumb p-l-0\">\n                  <li class=\"breadcrumb-item\">\n                    <a href=\"javascript:void(0)\">Home</a>\n                  </li>\n                  <li class=\"breadcrumb-item active\">Plain template</li>\n                </ul>\n                <h3 class=\"page-title\">Page Title</h3>\n              </div>\n              <div class=\" container container-fixed-lg\">\n                \n              </div>\n            </div>\n            <div class=\"container container-fixed-lg footer\">\n              <div class=\"copyright sm-text-center\">\n                <p class=\"small no-margin pull-left sm-pull-reset\"><span class=\"hint-text\">Copyright © 2014</span> <span class=\"font-montserrat\">REVOX</span>. <span class=\"hint-text\">All rights reserved.</span> <span class=\"sm-block\"><a class=\"m-l-10 m-r-10\" href=\"javascript:void(0)\">Terms of use</a> | <a class=\"m-l-10\" href=\"javascript:void(0)\">Privacy Policy</a></span></p>\n                <p class=\"small no-margin pull-right sm-pull-reset\"><a href=\"javascript:void(0)\">Hand-crafted</a> <span class=\"hint-text\">&amp; Made with Love ®</span></p>\n                <div class=\"clearfix\"></div>\n              </div>\n            </div>\n          </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".casual-with-breadcrumb{height:calc(100% - 50px)}\n"

/***/ }),

/***/ "./src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SecondaryHorizontalCasualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryHorizontalCasualComponent", function() { return SecondaryHorizontalCasualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@pages/services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecondaryHorizontalCasualComponent = /** @class */ (function () {
    function SecondaryHorizontalCasualComponent(toggler) {
        this.toggler = toggler;
        this._secondarySideBar = false;
        this.menuItems = [
            {
                label: "Collection",
                routerLink: "../../layouts/with-sidebar",
                iconType: "fi",
                iconName: "layers",
                badgeCount: "5"
            },
            {
                label: "Playlist",
                routerLink: "../../layouts/with-sidebar",
                iconType: "fi",
                iconName: "award",
            },
            {
                label: "Case Study",
                routerLink: "/",
                iconType: "fi",
                iconName: "inbox",
                toggle: "open",
                submenu: [
                    {
                        label: "Bootstrap 4",
                        routerLink: "../../layouts/with-sidebar",
                        iconType: "letter",
                        iconName: "B4",
                    },
                    {
                        label: "Made with Pages",
                        routerLink: "../../layouts/with-sidebar",
                        iconType: "letter",
                        iconName: "MP",
                    }
                ]
            }
        ];
    }
    SecondaryHorizontalCasualComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.toggler.toggleFooter(false);
            _this.toggler.setPageContainer("full-height");
            _this.toggler.setContent("full-height");
        });
    };
    SecondaryHorizontalCasualComponent.prototype.toggleSecondarySideBar = function (event) {
        this._secondarySideBar = (this._secondarySideBar == true ? false : true);
        //Pass event object to position it to the toggle button
        var subData = {
            $event: event,
            open: this._secondarySideBar
        };
        this.toggler.toggleSecondarySideBar(subData);
    };
    SecondaryHorizontalCasualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-secondary-horizontal-casual',
            template: __webpack_require__(/*! ./secondary-horizontal-casual.component.html */ "./src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.html"),
            styles: [__webpack_require__(/*! ./secondary-horizontal-casual.component.scss */ "./src/app/layouts/secondary-horizontal-casual/secondary-horizontal-casual.component.scss")]
        }),
        __metadata("design:paramtypes", [_pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], SecondaryHorizontalCasualComponent);
    return SecondaryHorizontalCasualComponent;
}());



/***/ }),

/***/ "./src/app/layouts/secondary-horizontal/secondary-horizontal.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/secondary-horizontal/secondary-horizontal.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START APP -->\n<div class=\"container full-height no-padding\">\n  <div class=\"secondary-sidebar-toggle bg-master-lighter padding-10 text-center d-lg-none d-xl-none\">\n    <a href=\"javascript:void(0);\" (click)=\"toggleSecondarySideBar($event)\"><i class=\"pg pg-more\"></i></a>\n  </div>\n  <pg-secondary-sidebar extraClass=\"light\">\n      <p class=\"menu-title\">BROWSE</p>\n      <ul class=\"main-menu\">\n        <li class=\"\">\n          <a href=\"javascript:void(0);\">\n            <span class=\"title\">pages frontend</span>\n          </a>\n        </li>\n        <li class=\"\">\n          <a href=\"javascript:void(0);\">\n            <span class=\"title\">webarch admin</span>\n          </a>\n        </li>\n      </ul>\n      <p class=\"menu-title m-t-30\">YOUR FAVOURITE</p>\n      <pg-menu-items-alt [Items]=\"menuItems\"></pg-menu-items-alt>\n  </pg-secondary-sidebar>\n    <!-- END SECONDARY SIDEBAR MENU -->\n    <div class=\"inner-content full-height  p-r-20 p-l-20\">\n        <div class=\"page-content-wrapper content-builder active full-height\" >\n            <div class=\"content\">\n              <div class=\"container container-fixed-lg\">\n                <ul class=\"breadcrumb p-l-0\">\n                  <li class=\"breadcrumb-item\">\n                    <a href=\"javascript:void(0)\">Home</a>\n                  </li>\n                  <li class=\"breadcrumb-item active\">Plain template</li>\n                </ul>\n                <h3 class=\"page-title\">Page Title</h3>\n              </div>\n              <div class=\" container container-fixed-lg\">\n                \n              </div>\n            </div>\n            <div class=\"container container-fixed-lg footer\">\n              <div class=\"copyright sm-text-center\">\n                <p class=\"small no-margin pull-left sm-pull-reset\"><span class=\"hint-text\">Copyright © 2014</span> <span class=\"font-montserrat\">REVOX</span>. <span class=\"hint-text\">All rights reserved.</span> <span class=\"sm-block\"><a class=\"m-l-10 m-r-10\" href=\"javascript:void(0)\">Terms of use</a> | <a class=\"m-l-10\" href=\"javascript:void(0)\">Privacy Policy</a></span></p>\n                <p class=\"small no-margin pull-right sm-pull-reset\"><a href=\"javascript:void(0)\">Hand-crafted</a> <span class=\"hint-text\">&amp; Made with Love ®</span></p>\n                <div class=\"clearfix\"></div>\n              </div>\n            </div>\n          </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layouts/secondary-horizontal/secondary-horizontal.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/layouts/secondary-horizontal/secondary-horizontal.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/secondary-horizontal/secondary-horizontal.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layouts/secondary-horizontal/secondary-horizontal.component.ts ***!
  \********************************************************************************/
/*! exports provided: SecondaryHorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryHorizontalComponent", function() { return SecondaryHorizontalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@pages/services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecondaryHorizontalComponent = /** @class */ (function () {
    function SecondaryHorizontalComponent(toggler) {
        this.toggler = toggler;
        this._secondarySideBar = false;
        this.menuItems = [
            {
                label: "Collection",
                routerLink: "../../layouts/with-sidebar",
                iconType: "fi",
                iconName: "layers",
                badgeCount: "5"
            },
            {
                label: "Playlist",
                routerLink: "../../layouts/with-sidebar",
                iconType: "fi",
                iconName: "award",
            },
            {
                label: "Case Study",
                routerLink: "/",
                iconType: "fi",
                iconName: "inbox",
                toggle: "open",
                submenu: [
                    {
                        label: "Bootstrap 4",
                        routerLink: "../../layouts/with-sidebar",
                        iconType: "letter",
                        iconName: "B4",
                    },
                    {
                        label: "Made with Pages",
                        routerLink: "../../layouts/with-sidebar",
                        iconType: "letter",
                        iconName: "MP",
                    }
                ]
            }
        ];
    }
    SecondaryHorizontalComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.toggler.toggleFooter(false);
            _this.toggler.setPageContainer("full-height");
            _this.toggler.setContent("full-height");
        });
    };
    SecondaryHorizontalComponent.prototype.toggleSecondarySideBar = function (event) {
        this._secondarySideBar = (this._secondarySideBar == true ? false : true);
        //Pass event object to position it to the toggle button
        var subData = {
            $event: event,
            open: this._secondarySideBar
        };
        this.toggler.toggleSecondarySideBar(subData);
    };
    SecondaryHorizontalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-secondary-horizontal',
            template: __webpack_require__(/*! ./secondary-horizontal.component.html */ "./src/app/layouts/secondary-horizontal/secondary-horizontal.component.html"),
            styles: [__webpack_require__(/*! ./secondary-horizontal.component.scss */ "./src/app/layouts/secondary-horizontal/secondary-horizontal.component.scss")]
        }),
        __metadata("design:paramtypes", [_pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], SecondaryHorizontalComponent);
    return SecondaryHorizontalComponent;
}());



/***/ }),

/***/ "./src/app/layouts/secondary-light/secondary.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layouts/secondary-light/secondary.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START APP -->\n<pg-secondary-sidebar extraClass=\"light\">\n  <div class=\" m-b-30 m-l-30 m-r-30 d-sm-none d-md-block d-lg-block d-xl-block\">\n      <a href=\"javascript:void(0);\" class=\"btn btn-primary btn-block btn-compose\">Compose</a>\n    </div>\n    <p class=\"menu-title\">BROWSE</p>\n    <ul class=\"main-menu\">\n      <li class=\"active\">\n        <a href=\"javascript:void(0);\">\n          <span class=\"title\"><i class=\"pg pg-inbox\"></i> Inbox</span>\n          <span class=\"badge pull-right\">5</span>\n        </a>\n      </li>\n      <li class=\"\">\n        <a href=\"javascript:void(0);\">\n          <span class=\"title\"><i class=\"pg pg-folder\"></i> All mail</span>\n        </a>\n        <ul class=\"sub-menu no-padding\">\n          <li>\n            <a href=\"javascript:void(0);\">\n              <span class=\"title\">Important</span>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0);\">\n              <span class=\"title\">Labeled</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n      <li>\n        <a href=\"javascript:void(0);\">\n          <span class=\"title\"><i class=\"pg pg-sent\"></i> Sent</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0);\">\n          <span class=\"title\"><i class=\"pg pg-spam\"></i> Spam</span>\n          <span class=\"badge pull-right\">10</span>\n        </a>\n      </li>\n    </ul>\n    <p class=\"menu-title m-t-20 all-caps\">Quick view</p>\n    <ul class=\"sub-menu no-padding\">\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Documents</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Flagged</span>\n          <span class=\"badge pull-right\">5</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Images</span>\n        </a>\n      </li>\n    </ul>\n</pg-secondary-sidebar>\n<!-- END SECONDARY SIDEBAR MENU -->\n<div class=\"inner-content full-height\">\n\n</div>"

/***/ }),

/***/ "./src/app/layouts/secondary-light/secondary.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layouts/secondary-light/secondary.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/secondary-light/secondary.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/secondary-light/secondary.component.ts ***!
  \****************************************************************/
/*! exports provided: SecondaryComponentLight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryComponentLight", function() { return SecondaryComponentLight; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@pages/services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecondaryComponentLight = /** @class */ (function () {
    function SecondaryComponentLight(toggler) {
        this.toggler = toggler;
    }
    SecondaryComponentLight.prototype.ngOnInit = function () {
        var _this = this;
        //Async Update -
        //https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
        setTimeout(function () {
            _this.toggler.toggleFooter(false);
        });
        this.toggler.setHeaderClass("light");
    };
    SecondaryComponentLight = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-secondary',
            template: __webpack_require__(/*! ./secondary.component.html */ "./src/app/layouts/secondary-light/secondary.component.html"),
            styles: [__webpack_require__(/*! ./secondary.component.scss */ "./src/app/layouts/secondary-light/secondary.component.scss")]
        }),
        __metadata("design:paramtypes", [_pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], SecondaryComponentLight);
    return SecondaryComponentLight;
}());



/***/ }),

/***/ "./src/app/layouts/secondary/secondary.component.html":
/*!************************************************************!*\
  !*** ./src/app/layouts/secondary/secondary.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- START APP -->\n<pg-secondary-sidebar>\n  <div class=\" m-b-30 m-l-30 m-r-30 d-sm-none d-md-block d-lg-block d-xl-block\">\n      <a href=\"javascript:void(0);\" class=\"btn btn-complete btn-block btn-compose\">Compose</a>\n    </div>\n    <p class=\"menu-title\">BROWSE</p>\n    <ul class=\"main-menu\">\n      <li class=\"active\">\n        <a href=\"javascript:void(0);\">\n          <span class=\"title\"><i class=\"pg pg-inbox\"></i> Inbox</span>\n          <span class=\"badge pull-right\">5</span>\n        </a>\n      </li>\n      <li class=\"\">\n        <a href=\"javascript:void(0);\">\n          <span class=\"title\"><i class=\"pg pg-folder\"></i> All mail</span>\n        </a>\n        <ul class=\"sub-menu no-padding\">\n          <li>\n            <a href=\"javascript:void(0);\">\n              <span class=\"title\">Important</span>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0);\">\n              <span class=\"title\">Labeled</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n      <li>\n        <a href=\"javascript:void(0);\">\n          <span class=\"title\"><i class=\"pg pg-sent\"></i> Sent</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0);\">\n          <span class=\"title\"><i class=\"pg pg-spam\"></i> Spam</span>\n          <span class=\"badge pull-right\">10</span>\n        </a>\n      </li>\n    </ul>\n    <p class=\"menu-title m-t-20 all-caps\">Quick view</p>\n    <ul class=\"sub-menu no-padding\">\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Documents</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Flagged</span>\n          <span class=\"badge pull-right\">5</span>\n        </a>\n      </li>\n      <li>\n        <a href=\"javascript:void(0)\">\n          <span class=\"title\">Images</span>\n        </a>\n      </li>\n    </ul>\n</pg-secondary-sidebar>\n<!-- END SECONDARY SIDEBAR MENU -->\n<div class=\"inner-content full-height\">\n\n</div>"

/***/ }),

/***/ "./src/app/layouts/secondary/secondary.component.scss":
/*!************************************************************!*\
  !*** ./src/app/layouts/secondary/secondary.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/secondary/secondary.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layouts/secondary/secondary.component.ts ***!
  \**********************************************************/
/*! exports provided: SecondaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryComponent", function() { return SecondaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../@pages/services/toggler.service */ "./src/app/@pages/services/toggler.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SecondaryComponent = /** @class */ (function () {
    function SecondaryComponent(toggler) {
        this.toggler = toggler;
    }
    SecondaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Async Update -
        //https://blog.angularindepth.com/everything-you-need-to-know-about-the-expressionchangedafterithasbeencheckederror-error-e3fd9ce7dbb4
        setTimeout(function () {
            _this.toggler.toggleFooter(false);
        });
    };
    SecondaryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-secondary',
            template: __webpack_require__(/*! ./secondary.component.html */ "./src/app/layouts/secondary/secondary.component.html"),
            styles: [__webpack_require__(/*! ./secondary.component.scss */ "./src/app/layouts/secondary/secondary.component.scss")]
        }),
        __metadata("design:paramtypes", [_pages_services_toggler_service__WEBPACK_IMPORTED_MODULE_1__["pagesToggleService"]])
    ], SecondaryComponent);
    return SecondaryComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layouts-layouts-module.js.map