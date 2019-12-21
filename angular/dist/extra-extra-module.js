(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extra-extra-module"],{

/***/ "./node_modules/ng-scrollreveal/directives/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/ng-scrollreveal/directives/index.js ***!
  \**********************************************************/
/*! exports provided: NgsRevealDirective, NgsRevealSetDirective, AbstractNgsRevealDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngs_reveal_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngs-reveal.directive */ "./node_modules/ng-scrollreveal/directives/ngs-reveal.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealDirective", function() { return _ngs_reveal_directive__WEBPACK_IMPORTED_MODULE_0__["NgsRevealDirective"]; });

/* harmony import */ var _ngs_reveal_set_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngs-reveal-set.directive */ "./node_modules/ng-scrollreveal/directives/ngs-reveal-set.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealSetDirective", function() { return _ngs_reveal_set_directive__WEBPACK_IMPORTED_MODULE_1__["NgsRevealSetDirective"]; });

/* harmony import */ var _ngs_reveal_common_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngs-reveal-common.directive */ "./node_modules/ng-scrollreveal/directives/ngs-reveal-common.directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AbstractNgsRevealDirective", function() { return _ngs_reveal_common_directive__WEBPACK_IMPORTED_MODULE_2__["AbstractNgsRevealDirective"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/directives/ngs-reveal-common.directive.js":
/*!********************************************************************************!*\
  !*** ./node_modules/ng-scrollreveal/directives/ngs-reveal-common.directive.js ***!
  \********************************************************************************/
/*! exports provided: AbstractNgsRevealDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractNgsRevealDirective", function() { return AbstractNgsRevealDirective; });
/**
 * Base directive class shared by the concrete ScrollReveal directives.
 */
var AbstractNgsRevealDirective = (function () {
    function AbstractNgsRevealDirective(ngsRevealService) {
        this.ngsRevealService = ngsRevealService;
    }
    AbstractNgsRevealDirective.prototype._initConfig = function (value) {
        if (value && typeof value === 'string') {
            this.config = JSON.parse(value);
        }
        else if (value && typeof value === 'object') {
            this.config = value;
        }
    };
    return AbstractNgsRevealDirective;
}());
//# sourceMappingURL=ngs-reveal-common.directive.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/directives/ngs-reveal-set.directive.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/ng-scrollreveal/directives/ngs-reveal-set.directive.js ***!
  \*****************************************************************************/
/*! exports provided: NgsRevealSetDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsRevealSetDirective", function() { return NgsRevealSetDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ngs_reveal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ngs-reveal.service */ "./node_modules/ng-scrollreveal/services/ngs-reveal.service.js");
/* harmony import */ var _ngs_reveal_common_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngs-reveal-common.directive */ "./node_modules/ng-scrollreveal/directives/ngs-reveal-common.directive.js");
var __extends = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Directive to add 'ScrollReveal' functionality to a <b>set of DOM elements</b> (identify via the `[ngsSelector]` attribute) in the page.
 * This directive is meant to be placed on the <b>parent node</b> that contains the child elements to reveal.
 * You can optionally add the `[ngsInterval]` attribute to reveal items sequentially, following the given interval(in milliseconds).
 * You can optionally add the `[ngsSync]` attribute to reveal new child elements that may have been added in the parent node asynchronously.
 *
 */
var NgsRevealSetDirective = (function (_super) {
    __extends(NgsRevealSetDirective, _super);
    function NgsRevealSetDirective(elementRef, ngsRevealService) {
        _super.call(this, ngsRevealService);
        this.elementRef = elementRef;
    }
    Object.defineProperty(NgsRevealSetDirective.prototype, "_config", {
        /**
         * Custom configuration to use when revealing this set of elements
         */
        set: function (value) {
            this._initConfig(value);
        },
        enumerable: true,
        configurable: true
    });
    NgsRevealSetDirective.prototype.ngOnInit = function () {
        if (!this.ngsSelector && console) {
            var item = this.elementRef.nativeElement ? this.elementRef.nativeElement.className : '';
            console.error("[ng-scrollreveal] You must set \"[ngsSelector]\" attribute on item '" + item + "' when using \"ngsRevealSet\"");
            return;
        }
        this.ngsRevealService.revealSet(this.elementRef, this.ngsSelector, this.ngsInterval, this.config);
    };
    NgsRevealSetDirective.prototype.ngOnChanges = function (changes) {
        var ngsSyncProp = 'ngsSync';
        if (ngsSyncProp in changes
            && !changes[ngsSyncProp].isFirstChange()
            && !changes[ngsSyncProp].currentValue()) {
            this.ngsRevealService.sync();
        }
    };
    NgsRevealSetDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngsRevealSet]'
                },] },
    ];
    /** @nocollapse */
    NgsRevealSetDirective.ctorParameters = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _services_ngs_reveal_service__WEBPACK_IMPORTED_MODULE_1__["NgsRevealService"], },
    ];
    NgsRevealSetDirective.propDecorators = {
        '_config': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngsRevealSet',] },],
        'ngsSelector': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'ngsInterval': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        'ngsSync': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    };
    return NgsRevealSetDirective;
}(_ngs_reveal_common_directive__WEBPACK_IMPORTED_MODULE_2__["AbstractNgsRevealDirective"]));
//# sourceMappingURL=ngs-reveal-set.directive.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/directives/ngs-reveal.directive.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng-scrollreveal/directives/ngs-reveal.directive.js ***!
  \*************************************************************************/
/*! exports provided: NgsRevealDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsRevealDirective", function() { return NgsRevealDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ngs_reveal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ngs-reveal.service */ "./node_modules/ng-scrollreveal/services/ngs-reveal.service.js");
/* harmony import */ var _ngs_reveal_common_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngs-reveal-common.directive */ "./node_modules/ng-scrollreveal/directives/ngs-reveal-common.directive.js");
var __extends = (undefined && undefined.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};



/**
 * Directive to add 'ScrollReveal' functionality to a <b>single DOM element</b> in the page.
 */
var NgsRevealDirective = (function (_super) {
    __extends(NgsRevealDirective, _super);
    function NgsRevealDirective(elementRef, ngsRevealService) {
        _super.call(this, ngsRevealService);
        this.elementRef = elementRef;
        this.visibility = 'hidden';
    }
    Object.defineProperty(NgsRevealDirective.prototype, "_config", {
        /**
         * Custom configuration to use when revealing this element
         */
        set: function (value) {
            this._initConfig(value);
        },
        enumerable: true,
        configurable: true
    });
    NgsRevealDirective.prototype.ngOnInit = function () {
        this.ngsRevealService.reveal(this.elementRef, this.config);
    };
    NgsRevealDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngsReveal]'
                },] },
    ];
    /** @nocollapse */
    NgsRevealDirective.ctorParameters = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: _services_ngs_reveal_service__WEBPACK_IMPORTED_MODULE_1__["NgsRevealService"], },
    ];
    NgsRevealDirective.propDecorators = {
        'visibility': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.visibility',] },],
        '_config': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['ngsReveal',] },],
    };
    return NgsRevealDirective;
}(_ngs_reveal_common_directive__WEBPACK_IMPORTED_MODULE_2__["AbstractNgsRevealDirective"]));
//# sourceMappingURL=ngs-reveal.directive.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/ng-scrollreveal/index.js ***!
  \***********************************************/
/*! exports provided: WindowService, NgsRevealService, NgsRevealConfig, NgsRevealDirective, NgsRevealSetDirective, NgsRevealModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngs_reveal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngs-reveal.module */ "./node_modules/ng-scrollreveal/ngs-reveal.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return _ngs_reveal_module__WEBPACK_IMPORTED_MODULE_0__["WindowService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealService", function() { return _ngs_reveal_module__WEBPACK_IMPORTED_MODULE_0__["NgsRevealService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealConfig", function() { return _ngs_reveal_module__WEBPACK_IMPORTED_MODULE_0__["NgsRevealConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealDirective", function() { return _ngs_reveal_module__WEBPACK_IMPORTED_MODULE_0__["NgsRevealDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealSetDirective", function() { return _ngs_reveal_module__WEBPACK_IMPORTED_MODULE_0__["NgsRevealSetDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealModule", function() { return _ngs_reveal_module__WEBPACK_IMPORTED_MODULE_0__["NgsRevealModule"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/ngs-reveal.module.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng-scrollreveal/ngs-reveal.module.js ***!
  \***********************************************************/
/*! exports provided: WindowService, NgsRevealService, NgsRevealConfig, NgsRevealDirective, NgsRevealSetDirective, NgsRevealModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsRevealModule", function() { return NgsRevealModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/index */ "./node_modules/ng-scrollreveal/services/index.js");
/* harmony import */ var _directives_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directives/index */ "./node_modules/ng-scrollreveal/directives/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return _services_index__WEBPACK_IMPORTED_MODULE_2__["WindowService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealService", function() { return _services_index__WEBPACK_IMPORTED_MODULE_2__["NgsRevealService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealConfig", function() { return _services_index__WEBPACK_IMPORTED_MODULE_2__["NgsRevealConfig"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealDirective", function() { return _directives_index__WEBPACK_IMPORTED_MODULE_3__["NgsRevealDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealSetDirective", function() { return _directives_index__WEBPACK_IMPORTED_MODULE_3__["NgsRevealSetDirective"]; });







/**
 * Main module of the library
 */
var NgsRevealModule = (function () {
    function NgsRevealModule() {
    }
    NgsRevealModule.forRoot = function () {
        return {
            ngModule: NgsRevealModule,
            providers: [_services_index__WEBPACK_IMPORTED_MODULE_2__["WindowService"], _services_index__WEBPACK_IMPORTED_MODULE_2__["NgsRevealService"], _services_index__WEBPACK_IMPORTED_MODULE_2__["NgsRevealConfig"]]
        };
    };
    NgsRevealModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                    ],
                    exports: [_directives_index__WEBPACK_IMPORTED_MODULE_3__["NgsRevealDirective"], _directives_index__WEBPACK_IMPORTED_MODULE_3__["NgsRevealSetDirective"]],
                    declarations: [_directives_index__WEBPACK_IMPORTED_MODULE_3__["NgsRevealDirective"], _directives_index__WEBPACK_IMPORTED_MODULE_3__["NgsRevealSetDirective"]]
                },] },
    ];
    /** @nocollapse */
    NgsRevealModule.ctorParameters = [];
    return NgsRevealModule;
}());
//# sourceMappingURL=ngs-reveal.module.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/services/index.js":
/*!********************************************************!*\
  !*** ./node_modules/ng-scrollreveal/services/index.js ***!
  \********************************************************/
/*! exports provided: NgsRevealService, NgsRevealConfig, WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ngs_reveal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngs-reveal.service */ "./node_modules/ng-scrollreveal/services/ngs-reveal.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealService", function() { return _ngs_reveal_service__WEBPACK_IMPORTED_MODULE_0__["NgsRevealService"]; });

/* harmony import */ var _ngs_reveal_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngs-reveal-config */ "./node_modules/ng-scrollreveal/services/ngs-reveal-config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgsRevealConfig", function() { return _ngs_reveal_config__WEBPACK_IMPORTED_MODULE_1__["NgsRevealConfig"]; });

/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window.service */ "./node_modules/ng-scrollreveal/services/window.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return _window_service__WEBPACK_IMPORTED_MODULE_2__["WindowService"]; });




//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/services/ngs-reveal-config.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng-scrollreveal/services/ngs-reveal-config.js ***!
  \********************************************************************/
/*! exports provided: NgsRevealConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsRevealConfig", function() { return NgsRevealConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Configuration service for the NgScrollReveal directives.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the ngsReveal directives used in the application.
 */
var NgsRevealConfig = (function () {
    function NgsRevealConfig() {
        // 'bottom', 'left', 'top', 'right'
        this.origin = 'bottom';
        // Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
        this.distance = '20px';
        // Time in milliseconds.
        this.duration = 500;
        this.delay = 0;
        // Starting angles in degrees, will transition from these values to 0 in all axes.
        this.rotate = { x: 0, y: 0, z: 0 };
        // Starting opacity value, before transitioning to the computed opacity.
        this.opacity = 0;
        // Starting scale value, will transition from this value to 1
        this.scale = 0.9;
        // Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
        this.easing = 'cubic-bezier(0.6, 0.2, 0.1, 1)';
        // true/false to control reveal animations on mobile.
        this.mobile = true;
        // true:  reveals occur every time elements become visible
        // false: reveals occur once as elements become visible
        this.reset = false;
        // 'always' — delay for all reveal animations
        // 'once'   — delay only the first time reveals occur
        // 'onload' - delay only for animations triggered by first load
        this.useDelay = 'always';
        // Change when an element is considered in the viewport. The default value
        // of 0.20 means 20% of an element must be visible for its reveal to occur.
        this.viewFactor = 0.2;
        // Pixel values that alter the container boundaries.
        // e.g. Set `{ top: 48 }`, if you have a 48px tall fixed toolbar.
        // --
        // Visual Aid: https://scrollrevealjs.org/assets/viewoffset.png
        this.viewOffset = { top: 0, right: 0, bottom: 0, left: 0 };
    }
    NgsRevealConfig.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgsRevealConfig.ctorParameters = [];
    return NgsRevealConfig;
}());
//# sourceMappingURL=ngs-reveal-config.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/services/ngs-reveal.service.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ng-scrollreveal/services/ngs-reveal.service.js ***!
  \*********************************************************************/
/*! exports provided: NgsRevealService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgsRevealService", function() { return NgsRevealService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngs_reveal_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngs-reveal-config */ "./node_modules/ng-scrollreveal/services/ngs-reveal-config.js");
/* harmony import */ var _window_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window.service */ "./node_modules/ng-scrollreveal/services/window.service.js");



/**
 * Service to inject in directives to use ScrollReveal JS.
 * It delegates the work to SR, when DOM manipulation is possible (i.e app is not running in a web worker for e.g).
 * If not possible, most methods simply do nothing, as DOM elements are not available anyway.
 */
var NgsRevealService = (function () {
    function NgsRevealService(config, windowService) {
        this.config = config;
        this.windowService = windowService;
        this.window = windowService.nativeWindow;
        if (this.window) {
            // init the scrollReveal library with injected config
            var srConfig = Object.assign({}, config || {});
            this.sr = ScrollReveal(srConfig);
        }
    }
    /**
     * Method to reveal a single DOM element.
     * @param elementRef  a reference to the element to reveal
     * @param config      (optional) custom configuration to use when revealing this element
     */
    NgsRevealService.prototype.reveal = function (elementRef, config) {
        if (!this.window) {
            return null;
        }
        return elementRef.nativeElement ?
            this.sr.reveal(elementRef.nativeElement, config) : this.sr;
    };
    /**
     * Method to reveal a set of DOM elements.
     * @param parentElementRef  the parent DOM element encaspulating the child elements to reveal
     * @param selector          a list of CSS selectors (comma-separated) that identifies child elements to reveal
     * @param interval          (optional) interval in milliseconds, to animate child elemnts sequentially
     * @param config            (optional) custom configuration to use when revealing this set of elements
     */
    NgsRevealService.prototype.revealSet = function (parentElementRef, selector, interval, config) {
        if (!this.window) {
            return null;
        }
        return parentElementRef.nativeElement ?
            this.sr.reveal(selector, config, interval) : this.sr;
    };
    /**
     * Method to synchronize and consider newly added child elements (for e.g when child elements were added asynchronously to parent DOM) .
     */
    NgsRevealService.prototype.sync = function () {
        if (this.window) {
            this.sr.sync();
        }
    };
    NgsRevealService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    NgsRevealService.ctorParameters = [
        { type: _ngs_reveal_config__WEBPACK_IMPORTED_MODULE_1__["NgsRevealConfig"], },
        { type: _window_service__WEBPACK_IMPORTED_MODULE_2__["WindowService"], },
    ];
    return NgsRevealService;
}());
//# sourceMappingURL=ngs-reveal.service.js.map

/***/ }),

/***/ "./node_modules/ng-scrollreveal/services/window.service.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng-scrollreveal/services/window.service.js ***!
  \*****************************************************************/
/*! exports provided: WindowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowService", function() { return WindowService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Service to interact with the window object.
 */
var WindowService = (function () {
    function WindowService() {
    }
    Object.defineProperty(WindowService.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    WindowService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    WindowService.ctorParameters = [];
    return WindowService;
}());
function _window() {
    // Return the global native browser window object
    return typeof window !== 'undefined' ? window : undefined;
}
//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/operators/filter.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/operators/filter.js ***!
  \************************************************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["filter"]; });


//# sourceMappingURL=filter.js.map

/***/ }),

/***/ "./src/app/extra/blankpage/blankpage.component.css":
/*!*********************************************************!*\
  !*** ./src/app/extra/blankpage/blankpage.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/extra/blankpage/blankpage.component.html":
/*!**********************************************************!*\
  !*** ./src/app/extra/blankpage/blankpage.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  blankpage works!\n</p>\n"

/***/ }),

/***/ "./src/app/extra/blankpage/blankpage.component.ts":
/*!********************************************************!*\
  !*** ./src/app/extra/blankpage/blankpage.component.ts ***!
  \********************************************************/
/*! exports provided: BlankpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlankpageComponent", function() { return BlankpageComponent; });
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

var BlankpageComponent = /** @class */ (function () {
    function BlankpageComponent() {
    }
    BlankpageComponent.prototype.ngOnInit = function () {
    };
    BlankpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blankpage',
            template: __webpack_require__(/*! ./blankpage.component.html */ "./src/app/extra/blankpage/blankpage.component.html"),
            styles: [__webpack_require__(/*! ./blankpage.component.css */ "./src/app/extra/blankpage/blankpage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlankpageComponent);
    return BlankpageComponent;
}());



/***/ }),

/***/ "./src/app/extra/extra.module.ts":
/*!***************************************!*\
  !*** ./src/app/extra/extra.module.ts ***!
  \***************************************/
/*! exports provided: ExtraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraModule", function() { return ExtraModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _extra_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extra.routing */ "./src/app/extra/extra.routing.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ng_scrollreveal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-scrollreveal */ "./node_modules/ng-scrollreveal/index.js");
/* harmony import */ var ngx_isotope__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-isotope */ "./node_modules/ngx-isotope/ngx-isotope.umd.js");
/* harmony import */ var ngx_isotope__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_isotope__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_components_slider_slider_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../@pages/components/slider/slider.module */ "./src/app/@pages/components/slider/slider.module.ts");
/* harmony import */ var _blankpage_blankpage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blankpage/blankpage.component */ "./src/app/extra/blankpage/blankpage.component.ts");
/* harmony import */ var _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../@pages/components/shared.module */ "./src/app/@pages/components/shared.module.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/extra/gallery/gallery.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/extra/timeline/timeline.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/extra/invoice/invoice.component.ts");
/* harmony import */ var _gallery_gallery_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gallery/gallery.service */ "./src/app/extra/gallery/gallery.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//NGX Bootstrap Components


//Thirdparty



// Dependant of pg-slider


var DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    slidesPerView: 'auto'
};

//Demo Page






var ExtraModule = /** @class */ (function () {
    function ExtraModule() {
    }
    ExtraModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _pages_components_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_extra_routing__WEBPACK_IMPORTED_MODULE_3__["ExtraRouts"]),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsDropdownModule"].forRoot(),
                ng_scrollreveal__WEBPACK_IMPORTED_MODULE_5__["NgsRevealModule"].forRoot(),
                ngx_isotope__WEBPACK_IMPORTED_MODULE_6__["IsotopeModule"],
                ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SwiperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _pages_components_slider_slider_module__WEBPACK_IMPORTED_MODULE_9__["pgSliderModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalModule"].forRoot()
            ],
            providers: [_gallery_gallery_service__WEBPACK_IMPORTED_MODULE_15__["GalleryService"], {
                    provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_7__["SWIPER_CONFIG"],
                    useValue: DEFAULT_SWIPER_CONFIG
                }],
            declarations: [_blankpage_blankpage_component__WEBPACK_IMPORTED_MODULE_10__["BlankpageComponent"], _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_12__["GalleryComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__["TimelineComponent"], _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_14__["InvoiceComponent"]]
        })
    ], ExtraModule);
    return ExtraModule;
}());



/***/ }),

/***/ "./src/app/extra/extra.routing.ts":
/*!****************************************!*\
  !*** ./src/app/extra/extra.routing.ts ***!
  \****************************************/
/*! exports provided: ExtraRouts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraRouts", function() { return ExtraRouts; });
/* harmony import */ var _blankpage_blankpage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blankpage/blankpage.component */ "./src/app/extra/blankpage/blankpage.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/extra/timeline/timeline.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/extra/invoice/invoice.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/extra/gallery/gallery.component.ts");




//Routes
var ExtraRouts = [
    {
        path: '',
        children: [{
                path: 'blank',
                component: _blankpage_blankpage_component__WEBPACK_IMPORTED_MODULE_0__["BlankpageComponent"]
            }, {
                path: 'timeline',
                component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__["TimelineComponent"],
                data: {
                    title: 'timeline'
                }
            }, {
                path: 'invoice',
                component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_2__["InvoiceComponent"],
                data: {
                    title: 'invoice'
                }
            }, {
                path: 'gallery',
                component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"],
                data: {
                    title: 'gallery'
                }
            },
            {
                // Used for demo purpose
                // Only in casual and executive
                path: 'timeline/:type',
                component: _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_1__["TimelineComponent"],
                data: {
                    title: 'timeline'
                }
            }]
    }
];


/***/ }),

/***/ "./src/app/extra/gallery/gallery.component.html":
/*!******************************************************!*\
  !*** ./src/app/extra/gallery/gallery.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid container-fixed-lg p-l-0 p-r-0\">\n    <pg-container>\n      <isotope-grid class=\"gallery\" [options]=\"galleryOptions\" [@enterAnimation]=\"_isLoading == true ?'loading':'ready'\">\n          <div class=\"gallery-filters p-t-20 p-b-10\">\n              <ul class=\"list-inline text-right\">\n                <li class=\"hint-text\">Sort by: </li>&nbsp;\n                <li><a href=\"javascript:void(0)\" class=\"active text-master p-r-5 p-l-5\">Name</a></li>&nbsp;\n                <li><a href=\"javascript:void(0)\" class=\"text-master hint-text p-r-5 p-l-5\">Views</a></li>&nbsp;\n                <li><a href=\"javascript:void(0)\" class=\"text-master hint-text p-r-5 p-l-5\">Cost</a></li>&nbsp;\n                <li>\n                  <button class=\"btn btn-primary m-l-10\" (click)=\"slideRight.show()\">More filters</button>\n                </li>\n              </ul>\n            </div>\n          <isotope-item *ngFor=\"let item of feed; let isFirst = first\" class=\"\">\n            <div class=\"gallery-item\"  [class.first] = \"isFirst\" [attr.data-width]=\"item.featured ? 2 : 1\" [attr.data-height]=\"item.featured ? 2 : 1\" (click)=\"toggleModal()\">\n              <!-- START PREVIEW -->\n              <img *ngIf=\"item.thumbnail.length === 1\" src=\"{{item.thumbnail}}\" alt=\"\" class=\"image-responsive-height\">\n\n              <div *ngIf=\"item.thumbnail.length > 1\" class=\"swiper-container full-height\" [swiper]=\"config\" [(index)]=\"index\">\n                  <div class=\"swiper-wrapper full-height\">\n                      <div class=\"swiper-slide slide-front full-height\" [ngStyle] = \"{'background-image': 'url('+item.thumbnail[0]+')'}\">\n                        </div>\n                        <div class=\" swiper-slide  slide-back full-height\" [ngStyle] = \"{'background-image': 'url('+item.thumbnail[1]+')'}\">\n                        </div>\n                  </div>\n              </div>\n              \n              <!-- END PREVIEW -->\n              <!-- START ITEM OVERLAY DESCRIPTION -->\n              <div class=\"overlayer bottom-left full-width\">\n                <div class=\"overlayer-wrapper item-info \">\n                  <div class=\"gradient-grey p-l-20 p-r-20 p-t-20 p-b-5\">\n                    <div *ngIf=\"item.featured !== true\">\n                      <p class=\"pull-left bold text-white fs-14 p-t-10\">{{item.title}}</p>\n                      <h5 class=\"pull-right semi-bold text-white font-montserrat bold\">{{item.price}}</h5>\n                      <div class=\"clearfix\"></div>\n                    </div>\n\n                    <div *ngIf=\"item.featured === true\">\n                        <h3 class=\"pull-left bold text-white no-margin\">{{item.title}}</h3>\n                        <h3 class=\"pull-right semi-bold text-white font-montserrat bold no-margin\">{{item.price}}</h3>\n                        <div class=\"clearfix\"></div>\n                        <span class=\"hint-text pull-left text-white\">{{item.caption}}</span>\n                        <div class=\"clearfix\"></div>\n                      </div>\n                      <div class=\"\">\n                        <h5 class=\"text-white light\">{{item.description}}</h5>\n                      </div>\n\n\n                    <div class=\"m-t-10\">\n                      <div class=\"thumbnail-wrapper d32 circular m-t-5\">\n                        <img width=\"40\" height=\"40\" src=\"{{item.author.avatar}}\" data-src=\"{{item.author.avatar}}\" pgRetina src2x=\"{{item.author.avatar2x}}\" alt=\"\">\n                      </div>\n                      <div class=\"inline m-l-10\">\n                        <p class=\"no-margin text-white fs-12\">Designed by {{item.author.name}}</p>\n                        <p class=\"rating\">\n                          <i class=\"fa fa-star rated\"></i>&nbsp;\n                          <i class=\"fa fa-star rated\"></i>&nbsp;\n                          <i class=\"fa fa-star rated\"></i>&nbsp;\n                          <i class=\"fa fa-star rated\"></i>&nbsp;\n                          <i class=\"fa fa-star\"></i>\n                        </p>\n                      </div>\n                      <div class=\"pull-right m-t-10\">\n                        <button class=\"btn btn-white btn-xs btn-mini bold fs-14\" type=\"button\">+</button>\n                      </div>\n                      <div class=\"clearfix\"></div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- END PRODUCT OVERLAY DESCRIPTION -->\n            </div>\n          </isotope-item>\n      </isotope-grid>\n    </pg-container>\n  </div>\n  \n  <!-- Modal -->\n  <div bsModal #fadInModal=\"bs-modal\" class=\"modal item-modal fade fill-in\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n\n      <div class=\"modal-dialog \">\n        <div class=\"modal-content\">\n          <div class=\"modal-body\">\n              <div class=\"container-fluid\">\n                  <div class=\"row dialog__overview\">\n                    <div class=\"col-md-7 no-padding item-slideshow-wrapper full-height\">\n     \n                      <div class=\"swiper-container full-height\" [swiper]=\"configModal\" [(index)]=\"index2\">\n                          <div class=\"swiper-wrapper full-height\">\n                              <div class=\"swiper-slide slide-front full-height\" [ngStyle] = \"{'background-image': 'url(assets/img/gallery/item-square.jpg)'}\">\n                                </div>\n                                <div class=\" swiper-slide  slide-back full-height\" [ngStyle] = \"{'background-image': 'url(assets/img/gallery/item-square.jpg)'}\">\n                                </div>\n                          </div>\n                        \n                          <div class=\"swiper-pagination\"></div>\n                        \n                          <div class=\"swiper-button swiper-button-prev\" (click)=\"prevSlide()\">\n                            <i class=\"fa fa-chevron-left\"></i>\n                          </div>\n                          <div class=\"swiper-button swiper-button-next\" (click)=\"nextSlide()\">\n                            <i class=\"fa fa-chevron-right\"></i>\n                          </div>\n                        </div>\n\n\n                    </div>\n                    <div class=\"col-md-12 d-md-none d-lg-none d-xl-none bg-info-dark\">\n                      <div class=\"container-xs-height\">\n                        <div class=\"row row-xs-height\">\n                          <div class=\"col-8 col-xs-height col-middle no-padding\">\n                            <div class=\"thumbnail-wrapper d32 circular inline\">\n                              <img width=\"32\" height=\"32\" src=\"assets/img/profiles/2.jpg\" data-src=\"assets/img/profiles/2.jpg\" data-src-retina=\"assets/img/profiles/2x.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"inline m-l-15\">\n                              <p class=\"text-white no-margin\">Alex Nester</p>\n                              <p class=\"hint-text text-white no-margin fs-12\">Senior UI/UX designer</p>\n                            </div>\n                          </div>\n                          <div class=\"col-4 col-xs-height col-middle text-right  no-padding\">\n                            <h2 class=\"bold text-white price font-montserrat\">$20.00</h2>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-5 p-r-35 p-t-35 p-l-35 full-height item-description\">\n                      <h2 class=\"semi-bold no-margin font-montserrat\">Happy Ninja</h2>\n                      <p class=\"rating fs-12 m-t-5\">\n                        <i class=\"fa fa-star \"></i>&nbsp;\n                        <i class=\"fa fa-star \"></i>&nbsp;\n                        <i class=\"fa fa-star \"></i>&nbsp;\n                        <i class=\"fa fa-star-o\"></i>&nbsp;\n                        <i class=\"fa fa-star-o\"></i>&nbsp;\n                      </p>\n                      <p class=\"fs-13\">When it comes to digital design, the lines between functionality, aesthetics, and psychology are inseparably blurred. Without the constraints of the physical world, there’s no natural form to fall back on, and every bit of constraint and affordance must be introduced intentionally. Good design makes a product useful.\n                      </p>\n                      <div class=\"row m-b-20 m-t-20\">\n                        <div class=\"col-6\"><span class=\"font-montserrat all-caps fs-11\">Price ranges</span>\n                        </div>\n                        <div class=\"col-6 text-right\">$20.00 - $40.00</div>\n                      </div>\n                      <div class=\"row m-t-20 m-b-10\">\n                        <div class=\"col-6\"><span class=\"font-montserrat all-caps fs-11\">Paint sizes</span>\n                        </div>\n                      </div>\n                      <button class=\"btn btn-white\">S</button>&nbsp;\n                      <button class=\"btn btn-white\">M</button>&nbsp;\n                      <button class=\"btn btn-white\">L</button>&nbsp;\n                      <button class=\"btn btn-white\">XL</button>&nbsp;\n                      <br>\n                      <button class=\"btn btn-primary buy-now\">Buy Now</button>\n                    </div>\n                  </div>\n                  <div class=\"row dialog__footer bg-info-dark d-sm-none d-none d-sm-flex d-lg-flex d-xl-flex\">\n                    <div class=\"col-md-7 full-height separator\">\n                      <div class=\"container-xs-height\">\n                        <div class=\"row row-xs-height\">\n                          <div class=\"col-7 col-xs-height col-middle no-padding\">\n                            <div class=\"thumbnail-wrapper d48 circular inline\">\n                              <img width=\"48\" height=\"48\" src=\"assets/img/profiles/2.jpg\" data-src=\"assets/img/profiles/2.jpg\" data-src-retina=\"assets/img/profiles/2x.jpg\" alt=\"\">\n                            </div>\n                            <div class=\"inline m-l-15\">\n                              <p class=\"text-white no-margin\">Alex Nester</p>\n                              <p class=\"hint-text text-white no-margin fs-12\">Senior UI/UX designer</p>\n                            </div>\n                          </div>\n                          <div class=\"col-5 col-xs-height col-middle text-right  no-padding\">\n                            <h2 class=\"bold text-white price font-montserrat\">$20.00</h2>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-5 full-height\">\n                      <ul class=\"recommended list-inline pull-right m-t-10 m-b-0\">\n                        <li>\n                          <a href=\"javascript:void(0)\"><img src=\"assets/img/gallery/thumb-1.jpg\"></a>\n                        </li>\n                        <li>\n                          <a href=\"javascript:void(0)\"><img src=\"assets/img/gallery/thumb-2.jpg\"></a>\n                        </li>\n                        <li>\n                          <a href=\"javascript:void(0)\"><img src=\"assets/img/gallery/thumb-3.jpg\"></a>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n                <button class=\"close action top-right\" (click)=\"fadInModal.hide()\"><i class=\"pg pg-close fs-14\"></i>\n                </button>\n                \n          </div>\n        </div>\n        <!-- /.modal-content -->\n      </div>\n      <!-- /.modal-dialog -->\n    </div>\n\n\n    <!-- MODAL STICK UP SMALL ALERT -->\n    <div bsModal #slideRight=\"bs-modal\" class=\"modal filters-modal fade slide-right\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content-wrapper\">\n          <div class=\"modal-content\">\n            \n            <div class=\"padding-40 \">\n              <a (click)=\"slideRight.hide()\" class=\"filter-close quickview-toggle pg pg-close\" href=\"javascript:void(0)\"></a>\n              <form class=\"\" role=\"form\">\n                <h5 class=\"all-caps font-montserrat fs-12 m-b-20\">Advance filters</h5>\n                <div class=\"form-group form-group-default \" pgFormGroupDefault>\n                  <label>Project</label>\n                  <input type=\"email\" class=\"form-control\" placeholder=\"Type of select a label\">\n                </div>\n                <h5 class=\"all-caps font-montserrat fs-12 m-b-20 m-t-25\">Advance filters</h5>\n                <div class=\"radio radio-danger\">\n                  <input type=\"radio\" checked=\"checked\" value=\"1\" name=\"filter\" id=\"asc\">\n                  <label for=\"asc\">Ascending order</label>\n                  <br>\n                  <input type=\"radio\" value=\"2\" name=\"filter\" id=\"views\">\n                  <label for=\"views\">Most viewed</label>\n                  <br>\n                  <input type=\"radio\" value=\"3\" name=\"filter\" id=\"cost\">\n                  <label for=\"cost\">Cost</label>\n                  <br>\n                  <input type=\"radio\" value=\"4\" name=\"filter\" id=\"latest\">\n                  <label for=\"latest\">Latest</label>\n                </div>\n                <h5 class=\"all-caps font-montserrat fs-12 m-b-20 m-t-25\">Price range</h5>\n                <pg-slider name=\"filter-slider\" Range [Color]=\"'danger'\" [(ngModel)]=\"rangeValue\" [Step]=\"10\" [DefaultValue]=\"[20, 50]\"></pg-slider>\n                <button (click)=\"slideRight.hide()\" class=\"pull-right btn btn-danger btn-cons m-t-40\">Apply</button>\n              </form>\n            </div>\n\n          </div>\n        </div>\n        <!-- /.modal-content -->\n      </div>\n      <!-- /.modal-dialog -->\n    </div>\n    <!-- END MODAL STICK UP SMALL ALERT -->"

/***/ }),

/***/ "./src/app/extra/gallery/gallery.component.scss":
/*!******************************************************!*\
  !*** ./src/app/extra/gallery/gallery.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * Swiper 4.5.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * http://www.idangero.us/swiper/\n *\n * Copyright 2014-2019 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: September 13, 2019\n */\n.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}\n.swiper-container-no-flexbox .swiper-slide{float:left}\n.swiper-container-vertical>.swiper-wrapper{-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}\n.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:-webkit-box;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-property:transform,-webkit-transform;box-sizing:content-box}\n.swiper-container-android .swiper-slide,.swiper-wrapper{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}\n.swiper-container-multirow>.swiper-wrapper{flex-wrap:wrap}\n.swiper-container-free-mode>.swiper-wrapper{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;margin:0 auto}\n.swiper-slide{flex-shrink:0;width:100%;height:100%;position:relative;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-property:transform,-webkit-transform}\n.swiper-slide-invisible-blank{visibility:hidden}\n.swiper-container-autoheight,.swiper-container-autoheight .swiper-slide{height:auto}\n.swiper-container-autoheight .swiper-wrapper{-webkit-box-align:start;align-items:flex-start;-webkit-transition-property:height,-webkit-transform;transition-property:height,-webkit-transform;transition-property:transform,height;transition-property:transform,height,-webkit-transform}\n.swiper-container-3d{-webkit-perspective:1200px;perspective:1200px}\n.swiper-container-3d .swiper-cube-shadow,.swiper-container-3d .swiper-slide,.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top,.swiper-container-3d .swiper-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\n.swiper-container-3d .swiper-slide-shadow-bottom,.swiper-container-3d .swiper-slide-shadow-left,.swiper-container-3d .swiper-slide-shadow-right,.swiper-container-3d .swiper-slide-shadow-top{position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}\n.swiper-container-3d .swiper-slide-shadow-left{background-image:-webkit-gradient(linear,right top, left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-right{background-image:-webkit-gradient(linear,left top, right top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-top{background-image:-webkit-gradient(linear,left bottom, left top,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-3d .swiper-slide-shadow-bottom{background-image:-webkit-gradient(linear,left top, left bottom,from(rgba(0,0,0,.5)),to(rgba(0,0,0,0)));background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}\n.swiper-container-wp8-horizontal,.swiper-container-wp8-horizontal>.swiper-wrapper{touch-action:pan-y}\n.swiper-container-wp8-vertical,.swiper-container-wp8-vertical>.swiper-wrapper{touch-action:pan-x}\n.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;height:44px;margin-top:-22px;z-index:10;cursor:pointer;background-size:27px 44px;background-position:center;background-repeat:no-repeat}\n.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}\n.swiper-button-prev,.swiper-container-rtl .swiper-button-next{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");left:10px;right:auto}\n.swiper-button-next,.swiper-container-rtl .swiper-button-prev{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E\");right:10px;left:auto}\n.swiper-button-prev.swiper-button-white,.swiper-container-rtl .swiper-button-next.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-next.swiper-button-white,.swiper-container-rtl .swiper-button-prev.swiper-button-white{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-prev.swiper-button-black,.swiper-container-rtl .swiper-button-next.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-next.swiper-button-black,.swiper-container-rtl .swiper-button-prev.swiper-button-black{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E\")}\n.swiper-button-lock{display:none}\n.swiper-pagination{position:absolute;text-align:center;-webkit-transition:.3s opacity;transition:.3s opacity;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0);z-index:10}\n.swiper-pagination.swiper-pagination-hidden{opacity:0}\n.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}\n.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transform:scale(.33);transform:scale(.33);position:relative}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{-webkit-transform:scale(1);transform:scale(1)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{-webkit-transform:scale(1);transform:scale(1)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{-webkit-transform:scale(.66);transform:scale(.66)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{-webkit-transform:scale(.33);transform:scale(.33)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{-webkit-transform:scale(.66);transform:scale(.66)}\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{-webkit-transform:scale(.33);transform:scale(.33)}\n.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:100%;background:#000;opacity:.2}\nbutton.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}\n.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}\n.swiper-pagination-bullet-active{opacity:1;background:#007aff}\n.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}\n.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:8px}\n.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;-webkit-transition:.2s top,.2s -webkit-transform;transition:.2s top,.2s -webkit-transform;-webkit-transition:.2s transform,.2s top;transition:.2s transform,.2s top;-webkit-transition:.2s transform,.2s top,.2s -webkit-transform;transition:.2s transform,.2s top,.2s -webkit-transform}\n.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);white-space:nowrap}\n.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s left,.2s -webkit-transform;transition:.2s left,.2s -webkit-transform;-webkit-transition:.2s transform,.2s left;transition:.2s transform,.2s left;-webkit-transition:.2s transform,.2s left,.2s -webkit-transform;transition:.2s transform,.2s left,.2s -webkit-transform}\n.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{-webkit-transition:.2s right,.2s -webkit-transform;transition:.2s right,.2s -webkit-transform;-webkit-transition:.2s transform,.2s right;transition:.2s transform,.2s right;-webkit-transition:.2s transform,.2s right,.2s -webkit-transform;transition:.2s transform,.2s right,.2s -webkit-transform}\n.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:#007aff;position:absolute;left:0;top:0;width:100%;height:100%;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:left top;transform-origin:left top}\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{-webkit-transform-origin:right top;transform-origin:right top}\n.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}\n.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}\n.swiper-pagination-white .swiper-pagination-bullet-active{background:#fff}\n.swiper-pagination-progressbar.swiper-pagination-white{background:rgba(255,255,255,.25)}\n.swiper-pagination-progressbar.swiper-pagination-white .swiper-pagination-progressbar-fill{background:#fff}\n.swiper-pagination-black .swiper-pagination-bullet-active{background:#000}\n.swiper-pagination-progressbar.swiper-pagination-black{background:rgba(0,0,0,.25)}\n.swiper-pagination-progressbar.swiper-pagination-black .swiper-pagination-progressbar-fill{background:#000}\n.swiper-pagination-lock{display:none}\n.swiper-scrollbar{border-radius:10px;position:relative;-ms-touch-action:none;background:rgba(0,0,0,.1)}\n.swiper-container-horizontal>.swiper-scrollbar{position:absolute;left:1%;bottom:3px;z-index:50;height:5px;width:98%}\n.swiper-container-vertical>.swiper-scrollbar{position:absolute;right:3px;top:1%;z-index:50;width:5px;height:98%}\n.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:rgba(0,0,0,.5);border-radius:10px;left:0;top:0}\n.swiper-scrollbar-cursor-drag{cursor:move}\n.swiper-scrollbar-lock{display:none}\n.swiper-zoom-container{width:100%;height:100%;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;text-align:center}\n.swiper-zoom-container>canvas,.swiper-zoom-container>img,.swiper-zoom-container>svg{max-width:100%;max-height:100%;-o-object-fit:contain;object-fit:contain}\n.swiper-slide-zoomed{cursor:move}\n.swiper-lazy-preloader{width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:swiper-preloader-spin 1s steps(12,end) infinite;animation:swiper-preloader-spin 1s steps(12,end) infinite}\n.swiper-lazy-preloader:after{display:block;content:'';width:100%;height:100%;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");background-position:50%;background-size:100%;background-repeat:no-repeat}\n.swiper-lazy-preloader-white:after{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")}\n@-webkit-keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n@keyframes swiper-preloader-spin{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n.swiper-container .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}\n.swiper-container-fade.swiper-container-free-mode .swiper-slide{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}\n.swiper-container-fade .swiper-slide{pointer-events:none;-webkit-transition-property:opacity;transition-property:opacity}\n.swiper-container-fade .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-fade .swiper-slide-active,.swiper-container-fade .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-cube{overflow:visible}\n.swiper-container-cube .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;-webkit-transform-origin:0 0;transform-origin:0 0;width:100%;height:100%}\n.swiper-container-cube .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-cube.swiper-container-rtl .swiper-slide{-webkit-transform-origin:100% 0;transform-origin:100% 0}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-cube .swiper-slide-active,.swiper-container-cube .swiper-slide-next,.swiper-container-cube .swiper-slide-next+.swiper-slide,.swiper-container-cube .swiper-slide-prev{pointer-events:auto;visibility:visible}\n.swiper-container-cube .swiper-slide-shadow-bottom,.swiper-container-cube .swiper-slide-shadow-left,.swiper-container-cube .swiper-slide-shadow-right,.swiper-container-cube .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.swiper-container-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0;width:100%;height:100%;background:#000;opacity:.6;-webkit-filter:blur(50px);filter:blur(50px);z-index:0}\n.swiper-container-flip{overflow:visible}\n.swiper-container-flip .swiper-slide{pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}\n.swiper-container-flip .swiper-slide .swiper-slide{pointer-events:none}\n.swiper-container-flip .swiper-slide-active,.swiper-container-flip .swiper-slide-active .swiper-slide-active{pointer-events:auto}\n.swiper-container-flip .swiper-slide-shadow-bottom,.swiper-container-flip .swiper-slide-shadow-left,.swiper-container-flip .swiper-slide-shadow-right,.swiper-container-flip .swiper-slide-shadow-top{z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}\n.swiper-container-coverflow .swiper-wrapper{-ms-perspective:1200px}\n.item-modal.fade.fill-in.show{background:rgba(55,58,71,0.9)}\n.item-modal .modal-dialog{width:845px;max-width:845px}\n.item-modal .modal-dialog .dialog__overview{background:white;padding:0;text-align:left;border:1px solid rgba(0,0,0,0.8);height:516px}\n.item-modal .modal-dialog .dialog__overview .buy-now{position:absolute;bottom:20px;right:35px}\n.item-modal .modal-dialog .close{top:15px;right:15px;z-index:100}\n.item-modal .modal-body{padding:0;background:#fff}\n.item-modal .dialog__footer{height:75px}\n.item-modal .slide{width:516px;height:516px;display:block;overflow:hidden;background-image:url(/assets/img/gallery/item-square.jpg);background-size:cover}\n.item-modal .swiper-button{background:transparent;color:white;font-size:18px;opacity:.8;height:22px;margin-top:-5px}\n:host /deep/ .swiper-pagination{text-align:right;padding-right:25px}\n:host /deep/ .swiper-pagination .swiper-pagination-bullet{background:rgba(0,0,0,0.3);width:10px;height:10px;border-radius:5px;display:inline-block;margin-left:6px}\n:host /deep/ .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active{background:#fff}\n.filter-close{position:absolute;right:12px;top:2px;color:#788195;padding:6px;opacity:.4}\n@media (max-width: 920px){.gallery-item.first{display:none}}\n@media (max-width: 767px){.item-modal .modal-dialog{width:400px;max-width:400px;margin:0 auto}.item-modal .modal-dialog .container-fluid{height:100%;padding-left:30px;padding-right:30px}.item-modal .modal-dialog .dialog__overview{height:100%;margin-right:-30px;margin-left:-30px;border:none}.item-modal .modal-dialog .modal-body{height:90%;overflow-y:auto}.item-slideshow-wrapper{height:515px !important}.item-description{height:auto !important}.item-description .buy-now{position:static !important;float:right;margin-bottom:20px}.swiper-container .swiper-slide{width:100% !important}.dialog__footer{display:none !important}}\n@media (max-width: 420px){.gallery{margin-top:80px}.gallery-filters{top:-90px}.item-modal .modal-body{width:100%;max-width:100%}}\n@media (max-width: 610px){.gallery-item,.gallery{width:100% !important}}\n@media (min-width: 768px){.item-modal .modal-body .container-fluid>.row{margin-left:-30px;margin-right:-30px}}\n"

/***/ }),

/***/ "./src/app/extra/gallery/gallery.component.ts":
/*!****************************************************!*\
  !*** ./src/app/extra/gallery/gallery.component.ts ***!
  \****************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.service */ "./src/app/extra/gallery/gallery.service.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/dist/ngx-swiper-wrapper.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(_service) {
        this._service = _service;
        this.feed = [];
        this.index = 0;
        this.index2 = 0;
        this._isLoading = true;
        this.galleryOptions = {
            itemSelector: '.gallery-item',
            masonry: {
                columnWidth: 280,
                gutter: 10,
                fitWidth: true
            }
        };
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.getFeed().subscribe(function (feed) {
            _this.feed = feed;
            setTimeout(function () {
                _this._isLoading = false;
            }, 2000);
        });
        this.config = {
            init: false,
            observer: true,
            direction: 'vertical',
            autoplay: {
                delay: 5000,
            }
        };
        this.configModal = {
            init: false,
            observer: true,
            direction: 'horizontal',
            pagination: true
        };
    };
    GalleryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.swiperViewes.forEach(function (dir) {
                dir.init();
            });
            _this.swiperViewes.first.startAutoplay();
        }, 1);
    };
    GalleryComponent.prototype.nextSlide = function () {
        this.swiperViewes.last.nextSlide();
    };
    GalleryComponent.prototype.prevSlide = function () {
        this.swiperViewes.last.prevSlide();
    };
    GalleryComponent.prototype.toggleModal = function () {
        var _this = this;
        this._modal.show();
        setTimeout(function () {
            _this.swiperViewes.last.update();
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])(ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_3__["SwiperDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], GalleryComponent.prototype, "swiperViewes", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('slider'),
        __metadata("design:type", Object)
    ], GalleryComponent.prototype, "_slider", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fadInModal'),
        __metadata("design:type", Object)
    ], GalleryComponent.prototype, "_modal", void 0);
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/extra/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/extra/gallery/gallery.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('enterAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('loading', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: '0',
                        transform: 'translateY(8%)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('ready', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: '1',
                        transform: 'translateY(0)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('loading => ready', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('300ms cubic-bezier(0.1, 0.0, 0.2, 1)'))
                ])
            ],
        }),
        __metadata("design:paramtypes", [_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/extra/gallery/gallery.service.ts":
/*!**************************************************!*\
  !*** ./src/app/extra/gallery/gallery.service.ts ***!
  \**************************************************/
/*! exports provided: GalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return GalleryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryService = /** @class */ (function () {
    function GalleryService(http) {
        this.http = http;
    }
    // Get social feed posts
    GalleryService.prototype.getFeed = function () {
        return this.http.get('assets/data/gallery.json')
            .map(function (res) { return res.json(); });
    };
    GalleryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], GalleryService);
    return GalleryService;
}());



/***/ }),

/***/ "./src/app/extra/invoice/invoice.component.html":
/*!******************************************************!*\
  !*** ./src/app/extra/invoice/invoice.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default bg-master-lighter sm-padding-10 full-width p-t-0 p-b-0\" role=\"navigation\">\n  <div class=\"full-width\">\n    <pg-container>\n      <!-- Brand and toggle get grouped for better mobile display -->\n      <div class=\"navbar-header text-center\">\n          <button type=\"button\" class=\"navbar-toggle collapsed btn btn-link no-padding\" (click)=\"isCollapsed = !isCollapsed\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"sub-nav\">\n            <i class=\"pg pg-more v-align-middle\"></i>\n          </button>\n        </div>\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"sub-nav\" [collapse]=\"isCollapsed\">\n          <div class=\"row\">\n            <div class=\"col-sm-4\">\n              <ul class=\"navbar-nav col-sm-12 col-md-12  col-lg-7 \">\n                <li class=\"nav-item dropdown\" dropdown>\n                  <a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0);\" id=\"navbarDropdownMenuLink\" dropdownToggle aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"fa fa-file-text m-r-10\"></i> Squarespace\n                  </a>\n                  <div class=\"dropdown-menu\"   *dropdownMenu aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action </a>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\n                    <div class=\"divider\"></div>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">Separated link</a>\n                    <div class=\"divider\"></div>\n                    <a class=\"dropdown-item\" href=\"javascript:void(0)\">One more separated link</a>\n                  </div>\n                </li>\n              </ul>\n            </div>\n            <div class=\"col-sm-4\">\n              <ul class=\"navbar-nav d-flex flex-row\">\n                <li class=\"nav-item\"><a href=\"javascript:void(0)\">Open</a></li>\n                <li class=\"nav-item\"><a href=\"javascript:void(0)\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Print\"><i class=\"fa fa-print\"></i></a></li>\n                <li class=\"nav-item\"><a href=\"javascript:void(0)\" data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Download\"><i class=\"fa fa-download\"></i></a></li>\n              </ul>\n            </div>\n            <div class=\"col-sm-4\">\n              <ul class=\"navbar-nav d-flex flex-row justify-content-sm-end\">\n                <li class=\"nav-item\">\n                  <a href=\"javascript:void(0)\" class=\"p-r-10\"><img width=\"25\" height=\"25\" alt=\"\" class=\"icon-pdf\" src2x=\"assets/img/invoice/pdf2x.png\" pgRetina src1x=\"assets/img/invoice/pdf.png\" src=\"assets/img/invoice/pdf2x.png\"></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"javascript:void(0)\" class=\"p-r-10\"><img width=\"25\" height=\"25\" alt=\"\" class=\"icon-image\" src2x=\"assets/img/invoice/image2x.png\" pgRetina src1x=\"assets/img/invoice/image.png\" src=\"assets/img/invoice/image2x.png\"></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a href=\"javascript:void(0)\" class=\"p-r-10\"><img width=\"25\" height=\"25\" alt=\"\" class=\"icon-doc\" src2x=\"assets/img/invoice/doc2x.png\" pgRetina src1x=\"assets/img/invoice/doc.png\" src=\"assets/img/invoice/doc2x.png\"></a>\n                </li>\n                <li class=\"nav-item\"><a href=\"javascript:void(0)\" class=\"p-r-10\" (click)=\"setFullScreen()\"><i class=\"fa fa-expand\"></i></a></li>\n              </ul>\n            </div>\n          </div>\n          \n        </div>\n        <!-- /.navbar-collapse -->\n    </pg-container>\n  </div>\n  <!-- /.container-fluid -->\n</nav>\n<!-- START CONTAINER FLUID -->\n<pg-container>\n  <!-- START card -->\n  <div class=\"card card-default m-t-20\">\n    <div class=\"card-body\">\n      <div class=\"invoice padding-50 sm-padding-10\">\n        <div>\n          <div class=\"pull-left\">\n            <img width=\"235\" height=\"47\" alt=\"\" class=\"invoice-logo\" src2x=\"assets/img/invoice/squarespace2x.png\" pgRetina src1x=\"assets/img/invoice/squarespace.png\" src=\"assets/img/invoice/squarespace2x.png\">\n            <address class=\"m-t-10\">\n                            Apple Enterprise Sales\n                            <br>(877) 412-7753.\n                            <br>\n                        </address>\n          </div>\n          <div class=\"pull-right sm-m-t-20\">\n            <h2 class=\"font-montserrat all-caps hint-text\">Invoice</h2>\n          </div>\n          <div class=\"clearfix\"></div>\n        </div>\n        <br>\n        <br>\n        <div class=\"col-12\">\n          <div class=\"row\">\n            <div class=\"col-lg-9 col-sm-height sm-no-padding\">\n              <p class=\"small no-margin\">Invoice to</p>\n              <h5 class=\"semi-bold m-t-0\">Darren Forthway</h5>\n              <address>\n                                    <strong>Pages Incoperated.</strong>\n                                    <br>page.inc\n                                    <br>\n                                    1600 Amphitheatre Pkwy, Mountain View,<br>\n                                    CA 94043, United States\n                                </address>\n            </div>\n            <div class=\"col-lg-3 sm-no-padding sm-p-b-20 d-flex align-items-end justify-content-between\">\n              <div>\n                <div class=\"font-montserrat bold all-caps\">Invoice No :</div>\n                <div class=\"font-montserrat bold all-caps\">Invoice date :</div>\n                <div class=\"clearfix\"></div>\n              </div>\n              <div class=\"text-right\">\n                <div class=\"\">0047</div>  \n                <div class=\"\">29/09/14</div>\n                <div class=\"clearfix\"></div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"table-responsive table-invoice\">\n          <table class=\"table m-t-50\">\n            <thead>\n              <tr>\n                <th class=\"\">Task Description</th>\n                <th class=\"text-center\">Rate</th>\n                <th class=\"text-center\">Hours</th>\n                <th class=\"text-right\">Total</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td class=\"\">\n                  <p class=\"text-black\">Character Illustration</p>\n                  <p class=\"small hint-text\">\n                    Character Design projects from the latest top online portfolios on Behance.\n                  </p>\n                </td>\n                <td class=\"text-center\">$65.00</td>\n                <td class=\"text-center\">84</td>\n                <td class=\"text-right\">$5,376.00</td>\n              </tr>\n              <tr>\n                <td class=\"\">\n                  <p class=\"text-black\">Cross Heart Charity Branding</p>\n                  <p class=\"small hint-text\">\n                    Attempt to attach higher credibility to a new product by associating it with a well established company name\n                  </p>\n                </td>\n                <td class=\"text-center\">$89.00</td>\n                <td class=\"text-center\">100</td>\n                <td class=\"text-right\">$8,900.00</td>\n              </tr>\n              <tr>\n                <td class=\"\">\n                  <p class=\"text-black\">iOs App</p>\n                  <p class=\"small hint-text\">\n                    A video game franchise Inspired primarily by a sketch of stylized wingless - Including Branding / Graphics / Motion Picture &amp; Videos\n                  </p>\n                </td>\n                <td class=\"text-center\">$100.00</td>\n                <td class=\"text-center\">500</td>\n                <td class=\"text-right\">$50,000.00</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <br>\n        <br>\n        <br>\n        <br>\n        <br>\n        <div>\n          <img width=\"150\" height=\"58\" alt=\"\" class=\"invoice-signature\" src2x=\"assets/img/invoice/signature2x.png\" pgRetina src1x=\"assets/img/invoice/signature.png\" src=\"assets/img/invoice/signature2x.png\">\n          <p>Designer’s Identity</p>\n        </div>\n        <br>\n        <br>\n        <div class=\"p-l-15 p-r-15\">\n          <div class=\"row b-a b-grey\">\n            <div class=\"col-md-2 p-l-15 sm-p-t-15 clearfix sm-p-b-15 d-flex flex-column justify-content-center p-r-0\">\n              <h5 class=\"font-montserrat all-caps small no-margin hint-text bold\">Advance</h5>\n              <h3 class=\"no-margin\">$21,000.00</h3>\n            </div>\n            <div class=\"col-md-5 clearfix sm-p-b-15 d-flex flex-column justify-content-center\">\n              <h5 class=\"font-montserrat all-caps small no-margin hint-text bold\">Discount (10%)</h5>\n              <h3 class=\"no-margin\">$645.00</h3>\n            </div>\n            <div class=\"col-md-5 text-right bg-master-darker col-sm-height padding-15 d-flex flex-column justify-content-center align-items-end\">\n              <h5 class=\"font-montserrat all-caps small no-margin hint-text text-white bold\">Total</h5>\n              <h1 class=\"no-margin text-white\">$64,276.00</h1>\n            </div>\n          </div>\n        </div>\n        <hr>\n        <p class=\"small hint-text\">Services will be invoiced in accordance with the Service Description. You must pay all undisputed invoices in full within 30 days of the invoice date, unless otherwise specified under the Special Terms and Conditions. All payments must reference the invoice number. Unless otherwise specified, all invoices shall be paid in the currency of the invoice</p>\n        <p class=\"small hint-text\">Insight retains the right to decline to extend credit and to require that the applicable purchase price be paid prior to performance of Services based on changes in insight's credit policies or your financial condition and/or payment record. Insight reserves the right to charge interest of 1.5% per month or the maximum allowable by applicable law, whichever is less, for any undisputed past due invoices. You are responsible for all costs of collection, including reasonable attorneys' fees, for any payment default on undisputed invoices. In addition, Insight may terminate all further work if payment is not received in a timely manner.</p>\n        <br>\n        <hr>\n        <div>\n          <img src=\"assets/img/logo.png\" alt=\"logo\" pgRetina src1x=\"assets/img/logo.png\" src2x=\"assets/img/logo_2x.png\" width=\"78\" height=\"22\">&nbsp;\n          <span class=\"m-l-70 text-black sm-pull-right\">+34 346 4546 445</span>\n          <span class=\"m-l-40 text-black sm-pull-right\">support@revox.io</span>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- END card -->\n</pg-container>\n<!-- END CONTAINER FLUID -->"

/***/ }),

/***/ "./src/app/extra/invoice/invoice.component.scss":
/*!******************************************************!*\
  !*** ./src/app/extra/invoice/invoice.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/extra/invoice/invoice.component.ts":
/*!****************************************************!*\
  !*** ./src/app/extra/invoice/invoice.component.ts ***!
  \****************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
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

var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent() {
        this.isCollapsed = false;
    }
    InvoiceComponent.prototype.ngOnInit = function () {
    };
    InvoiceComponent.prototype.ngAfterViewInit = function () {
        this.toggleNavbar();
    };
    InvoiceComponent.prototype.setFullScreen = function () {
        pg.setFullScreen(document.querySelector('html'));
    };
    InvoiceComponent.prototype.onResize = function () {
        this.toggleNavbar();
    };
    InvoiceComponent.prototype.toggleNavbar = function () {
        this.isCollapsed = window.innerWidth < 1025;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:resize", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], InvoiceComponent.prototype, "onResize", null);
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invoice',
            template: __webpack_require__(/*! ./invoice.component.html */ "./src/app/extra/invoice/invoice.component.html"),
            styles: [__webpack_require__(/*! ./invoice.component.scss */ "./src/app/extra/invoice/invoice.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/extra/timeline/timeline.component.html":
/*!********************************************************!*\
  !*** ./src/app/extra/timeline/timeline.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-master-lighter \">\n  <div class=\"timeline-container top-circle\">\n    <section class=\"timeline\" ngsRevealSet [ngsSelector]=\"'.timeline-block'\">\n      <div class=\"timeline-block\">\n        <div class=\"timeline-point success\">\n          <i class=\"pg pg-map\"></i>\n        </div>\n        <!-- timeline-point -->\n        <div class=\"timeline-content\">\n          <div class=\"card social-card share full-width\">\n            <div class=\"circle\" data-toggle=\"tooltip\" title=\"Label\" data-container=\"body\">\n            </div>\n            <div class=\"card-header clearfix\">\n              <div class=\"user-pic\">\n                <img alt=\"Profile Image\" width=\"33\" height=\"33\" src2x=\"assets/img/profiles/8x.jpg\" pgRetina src1x=\"assets/img/profiles/8.jpg\" src=\"assets/img/profiles/8x.jpg\">\n              </div>\n              <h5>Jeff Curtis</h5>\n              <h6>Shared a Tweet\n                      <span class=\"location semi-bold\"><i class=\"fa fa-map-marker\"></i> SF, California</span>\n                  </h6>\n            </div>\n            <div class=\"card-description\">\n              <p>What you think, you become. What you feel, you attract. What you imagine, you create - Buddha. <a href=\"javascript:void(0)\">#quote</a> </p>\n              <div class=\"via\">via Twitter</div>\n            </div>\n          </div>\n          <div class=\"event-date\">\n            <h6 class=\"font-montserrat all-caps hint-text m-t-0\">Apple Inc</h6>\n            <small class=\"fs-12 hint-text\">15 January 2015, 06:50 PM</small>\n          </div>\n        </div>\n        <!-- timeline-content -->\n      </div>\n      <!-- timeline-block -->\n      <div class=\"timeline-block\">\n        <div class=\"timeline-point small\">\n        </div>\n        <!-- timeline-point -->\n        <div class=\"timeline-content\">\n          <div class=\"card  social-card share full-width\">\n            <div class=\"circle\" data-toggle=\"tooltip\" title=\"Label\" data-container=\"body\">\n            </div>\n            <div class=\"card-header clearfix\">\n              <div class=\"user-pic\">\n                <img alt=\"Profile Image\" width=\"33\" height=\"33\" src2x=\"assets/img/profiles/5x.jpg\" pgRetina src1x=\"assets/img/profiles/5.jpg\" src=\"assets/img/profiles/5x.jpg\">\n              </div>\n              <h5>Shannon Williams</h5>\n              <h6>Shared a photo\n                      <span class=\"location semi-bold\"><i class=\"fa fa-map-marker\"></i> NYC, New York</span>\n                  </h6>\n            </div>\n            <div class=\"card-description\">\n              <p>Inspired by : good design is obvious, great design is transparent</p>\n              <div class=\"via\">via themeforest</div>\n            </div>\n            <div class=\"card-content\">\n              <ul class=\"buttons \">\n                <li>\n                  <a href=\"javascript:void(0)\"><i class=\"fa fa-expand\"></i>\n                          </a>\n                </li>\n                <li>\n                  <a href=\"javascript:void(0)\"><i class=\"fa fa-heart-o\"></i>\n                          </a>\n                </li>\n              </ul>\n              <img alt=\"Social post\" src=\"assets/img/social-post-image.png\">\n            </div>\n            <div class=\"card-footer clearfix\">\n              <div class=\"time\">few seconds ago</div>\n              <ul class=\"reactions\">\n                <li><a href=\"javascript:void(0)\">5,345 <i class=\"fa fa-comment-o\"></i></a>\n                </li>\n                <li><a href=\"javascript:void(0)\">23K <i class=\"fa fa-heart-o\"></i></a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div class=\"event-date\">\n            <small class=\"fs-12 hint-text\">15 January 2015, 06:50 PM</small>\n          </div>\n        </div>\n        <!-- timeline-content -->\n      </div>\n      <!-- timeline-block -->\n      <div class=\"timeline-block\">\n        <div class=\"timeline-point warning\">\n          <i class=\"pg pg-social\"></i>\n        </div>\n        <!-- timeline-point -->\n        <div class=\"timeline-content\">\n          <div class=\"card social-card share full-width \">\n            <div class=\"card-header clearfix\">\n              <h5 class=\"text-warning-dark pull-left fs-12\">Stock Market <i class=\"fa fa-circle text-warning-dark fs-11\"></i></h5>\n              <div class=\"pull-right small hint-text\">\n                5,345 <i class=\"fa fa-comment-o\"></i>\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n            <div class=\"card-description\">\n              <h5 class='hint-text no-margin'>Apple Inc.</h5>\n              <h5 class=\"small hint-text no-margin\">NASDAQ: AAPL - Nov 13 8:37 AM ET</h5>\n              <h3>111.25 <span class=\"text-warning-dark\"><i class=\"fa fa-sort-up small text-warning-dark\"></i> 0.15 (0.13%)</span></h3>\n            </div>\n            <div class=\"card-footer clearfix\">\n              <div class=\"pull-left\">by <span class=\"text-warning-dark\">John Smith</span></div>\n              <div class=\"pull-right hint-text\">\n                Apr 23\n              </div>\n              <div class=\"clearfix\"></div>\n            </div>\n          </div>\n          <div class=\"event-date\">\n            <h6 class=\"font-montserrat all-caps hint-text m-t-0\">Shared</h6>\n            <small class=\"fs-12 hint-text\">15 January 2015, 06:50 PM</small>\n          </div>\n        </div>\n        <!-- timeline-content -->\n      </div>\n      <!-- timeline-block -->\n      <div class=\"timeline-block\">\n        <div class=\"timeline-point small\">\n        </div>\n        <!-- timeline-point -->\n        <div class=\"timeline-content\">\n          <div class=\"card social-card share full-width \">\n            <div class=\"circle\" data-toggle=\"tooltip\" title=\"Label\" data-container=\"body\">\n            </div>\n            <div class=\"card-header clearfix\">\n              <div class=\"user-pic\">\n                <img alt=\"Profile Image\" width=\"33\" height=\"33\" src2x=\"assets/img/profiles/6x.jpg\" pgRetina src1x=\"assets/img/profiles/6.jpg\" src=\"assets/img/profiles/6x.jpg\">\n              </div>\n              <h5>Nathaniel Hamilton</h5>\n              <h6>Shared a Tweet\n                      <span class=\"location semi-bold\"><i class=\"icon-map\"></i>  NYC, New York</span>\n                  </h6>\n            </div>\n            <div class=\"card-description\">\n              <p>Testing can show the presense of bugs, but not their absence.</p>\n              <div class=\"via\">via Twitter</div>\n            </div>\n          </div>\n          <div class=\"event-date\">\n            <small class=\"fs-12 hint-text\">15 January 2015, 06:50 PM</small>\n          </div>\n        </div>\n        <!-- timeline-content -->\n      </div>\n      <!-- timeline-block -->\n      <div class=\"timeline-block\">\n        <div class=\"timeline-point small\">\n        </div>\n        <!-- timeline-point -->\n        <div class=\"timeline-content\">\n          <div class=\"card social-card share full-width\">\n            <div class=\"circle\" data-toggle=\"tooltip\" title=\"Label\" data-container=\"body\">\n            </div>\n            <div class=\"card-header clearfix\">\n              <div class=\"user-pic\">\n                <img alt=\"Profile Image\" width=\"33\" height=\"33\" src2x=\"assets/img/profiles/4x.jpg\" pgRetina src1x=\"assets/img/profiles/4.jpg\" src=\"assets/img/profiles/4x.jpg\">\n              </div>\n              <h5>Andy Young</h5>\n              <h6>Updated his status\n                      <span class=\"location semi-bold\"><i class=\"icon-map\"></i> NYC, New York</span>\n                  </h6>\n            </div>\n            <div class=\"card-description\">\n              <p>What a lovely day! I think I should go and play outside.</p>\n            </div>\n          </div>\n          <div class=\"event-date\">\n            <small class=\"fs-12 hint-text\">15 January 2015, 06:50 PM</small>\n          </div>\n        </div>\n        <!-- timeline-content -->\n      </div>\n      <!-- timeline-block -->\n    </section>\n    <!-- timeline -->\n  </div>\n  <!-- -->\n</div>"

/***/ }),

/***/ "./src/app/extra/timeline/timeline.component.scss":
/*!********************************************************!*\
  !*** ./src/app/extra/timeline/timeline.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/extra/timeline/timeline.component.ts":
/*!******************************************************!*\
  !*** ./src/app/extra/timeline/timeline.component.ts ***!
  \******************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_scrollreveal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-scrollreveal */ "./node_modules/ng-scrollreveal/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimelineComponent = /** @class */ (function () {
    //Config Docs
    //https://tinesoft.github.io/ng-scrollreveal/doc/injectables/NgsRevealConfig.html
    function TimelineComponent(config, route) {
        this.config = config;
        this.route = route;
        //Only for demo - Casual and Executive layout
        this.route.params.subscribe(function (params) {
            if (params['type'] == "container") {
                config.container = document.querySelector(".page-container");
            }
            config.distance = "0";
        });
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/extra/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/app/extra/timeline/timeline.component.scss")]
        }),
        __metadata("design:paramtypes", [ng_scrollreveal__WEBPACK_IMPORTED_MODULE_2__["NgsRevealConfig"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ })

}]);
//# sourceMappingURL=extra-extra-module.js.map