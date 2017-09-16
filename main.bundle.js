webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_app_homepage_compoent__ = __webpack_require__("../../../../../src/app/homepage/app.homepage.compoent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__managestore_app_managestore_compoent__ = __webpack_require__("../../../../../src/app/managestore/app.managestore.compoent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_app_store_compoent__ = __webpack_require__("../../../../../src/app/store/app.store.compoent.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'homepage', component: __WEBPACK_IMPORTED_MODULE_2__homepage_app_homepage_compoent__["a" /* AppHomepageComponent */] },
    { path: 'store/:name', component: __WEBPACK_IMPORTED_MODULE_4__store_app_store_compoent__["a" /* AppStoreComponent */] },
    { path: 'managestore', component: __WEBPACK_IMPORTED_MODULE_3__managestore_app_managestore_compoent__["a" /* AppManageStoreComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<paycusine-nav> Loading ... </paycusine-nav>\n\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Paycuisine';
        this.testglobal = 'iamglobal';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'paycusine-app',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_paycusine_nav_component__ = __webpack_require__("../../../../../src/app/navbar/paycusine.nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__homepage_app_homepage_compoent__ = __webpack_require__("../../../../../src/app/homepage/app.homepage.compoent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_app_store_compoent__ = __webpack_require__("../../../../../src/app/store/app.store.compoent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__managestore_app_managestore_compoent__ = __webpack_require__("../../../../../src/app/managestore/app.managestore.compoent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__managestore_ownstorelist_compoent__ = __webpack_require__("../../../../../src/app/managestore/ownstorelist.compoent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_font_awesome_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_ng2_cache_ng2_cache__ = __webpack_require__("../../../../ng2-cache/ng2-cache.ts");
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// New imports to update based on AngularFire2 version 4




var firebaseConfig = {
    apiKey: "AIzaSyB6I78iXFS7h8mRww7V6fhQuSXddh0RQcA",
    authDomain: "pay-cuisine.firebaseapp.com",
    databaseURL: "https://pay-cuisine.firebaseio.com",
    projectId: "pay-cuisine",
    storageBucket: "pay-cuisine.appspot.com",
    messagingSenderId: "971235894561"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__navbar_paycusine_nav_component__["a" /* PaycuisineNavComponent */],
            __WEBPACK_IMPORTED_MODULE_10__homepage_app_homepage_compoent__["a" /* AppHomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__store_app_store_compoent__["a" /* AppStoreComponent */],
            __WEBPACK_IMPORTED_MODULE_12__managestore_app_managestore_compoent__["a" /* AppManageStoreComponent */],
            __WEBPACK_IMPORTED_MODULE_13__managestore_ownstorelist_compoent__["a" /* OwnStoreListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_14_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_17_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_18_ngx_facebook__["a" /* FacebookModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_angular_font_awesome_angular_font_awesome__["a" /* AngularFontAwesomeModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_19_ng2_cache_ng2_cache__["a" /* CacheService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/app.homepage.compoent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store__ = __webpack_require__("../../../../../src/app/store/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppHomepageComponent = (function () {
    function AppHomepageComponent(afAuth, af) {
        this.afAuth = afAuth;
        this.af = af;
        this.stores = [];
        this.afAuth.auth.signInAnonymously();
    }
    AppHomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fbList = this.af.list('/Stores', { preserveSnapshot: true });
        this.fbList.subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                // snapshot.key; ||  snapshot.val();
                var fbstore = snapshot.val();
                var store = new __WEBPACK_IMPORTED_MODULE_1__store_store__["a" /* Store */](fbstore);
                _this.stores.push(store);
            });
        });
        //this.loginWithFacebook();
    };
    return AppHomepageComponent;
}());
AppHomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'app-homepage',
        template: __webpack_require__("../../../../../src/app/homepage/app.homepage.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object])
], AppHomepageComponent);

var _a, _b;
//# sourceMappingURL=app.homepage.compoent.js.map

/***/ }),

/***/ "../../../../../src/app/homepage/app.homepage.component.html":
/***/ (function(module, exports) {

module.exports = "\n <div class=\"container\">\n    <img src=\"../assets/images/header_pic.png\" style=\"width: 100%; height:auto; \" class=\".img-fluid\" >\n\n    <p>Type of Food</p>\n    <div >\n        <div id=\"foodtype_btn\" class=\"col-1\">\n          <div class=\"row\">\n              <div>               \n                 <a href=\"#\">\n                     <img src=\"../assets/images/food_icon.png\" class=\"img-thumbnail\">\n                 </a>\n              </div>\n              <div >\n                <p> FastFood</p>\n              </div>\n          </div>\n        </div>\n\n    </div>\n\n    <p>Store</p>\n    <div *ngFor=\"let store of stores\">\n        <a [attr.href]=\"'/store/'+store.name\"><img [attr.src]=\"store.picurl\" class=\"col-4\"></a>\n    </div>\n\n  </div>\n\n  <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/managestore/app.managestore.compoent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store__ = __webpack_require__("../../../../../src/app/store/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cache_ng2_cache__ = __webpack_require__("../../../../ng2-cache/ng2-cache.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppManageStoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppManageStoreComponent = (function () {
    function AppManageStoreComponent(afAuth, af, _cacheService) {
        this.afAuth = afAuth;
        this.af = af;
        this._cacheService = _cacheService;
        this.iscreatestore = false;
        this.afAuth.auth.signInAnonymously();
        this.paycuiseUser = this._cacheService.get('paycuiseUser');
        var emptystore = {};
        emptystore.name = "";
        emptystore.detail = "";
        emptystore.picurl = "";
        emptystore.owner = "";
        this.newstore = new __WEBPACK_IMPORTED_MODULE_1__store_store__["a" /* Store */](emptystore);
    }
    AppManageStoreComponent.prototype.ngOnInit = function () {
    };
    AppManageStoreComponent.prototype.onClickNewStore = function () {
        this.iscreatestore = true;
    };
    AppManageStoreComponent.prototype.onClickback = function () {
        this.iscreatestore = false;
    };
    AppManageStoreComponent.prototype.createNewStore = function () {
        console.log(this.newstore);
        this.newstore.owner = this.paycuiseUser.email;
        var store = new __WEBPACK_IMPORTED_MODULE_1__store_store__["a" /* Store */](this.newstore);
        this.fbList = this.af.list('/Stores', { preserveSnapshot: true });
        this.fbList.push(store);
        console.log(store);
        this.iscreatestore = false;
    };
    return AppManageStoreComponent;
}());
AppManageStoreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'app-managestore',
        template: __webpack_require__("../../../../../src/app/managestore/app.managestore.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_cache_ng2_cache__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_cache_ng2_cache__["a" /* CacheService */]) === "function" && _c || Object])
], AppManageStoreComponent);

var _a, _b, _c;
//# sourceMappingURL=app.managestore.compoent.js.map

/***/ }),

/***/ "../../../../../src/app/managestore/app.managestore.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n\r\n    <div *ngIf=\"!iscreatestore\" class=\"row\">\r\n            <div class=\"col-md-12\" style=\"margin-bottom: 10px;\">\r\n                   <button  type=\"button\" class=\"btn btn-success float-right\" (click)=\"onClickNewStore()\">New Store\r\n                        <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\r\n                   </button>\r\n            </div>\r\n      \r\n        <div class=\"col-md-12\">  <ownstorelist>Loading..</ownstorelist></div>\r\n       \r\n    </div>\r\n   \r\n    \r\n    <div *ngIf=\"iscreatestore\" class=\"row\">\r\n         \r\n\r\n       \r\n        <form (ngSubmit)=\"createNewStore()\" #newstoreForm=\"ngForm\" style=\"width: 100%;\">\r\n                    <div class=\"form-group\">\r\n                      <label for=\"name\">Store Name</label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"newstore.name\" [ngModelOptions]=\"{standalone: true}\" required>\r\n                    </div>\r\n               \r\n                    <div class=\"form-group\">\r\n                      <label for=\"picurl\">Image Url</label>\r\n                      <input type=\"text\" class=\"form-control\" id=\"picurl\" [(ngModel)]=\"newstore.picurl\" [ngModelOptions]=\"{standalone: true}\"  required>\r\n                    </div>\r\n \r\n                    <div class=\"form-group\">\r\n                            <label for=\"detail\">Detail</label>\r\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"newstore.detail\" [ngModelOptions]=\"{standalone: true}\" id=\"detail\">\r\n                    </div>\r\n\r\n                    <button  type=\"button\" class=\"btn btn-danger \" (click)=\"onClickback()\">Back </button>\r\n                    <button type=\"submit\" class=\"btn btn-success\" >Submit</button>\r\n               \r\n        </form>\r\n\r\n    </div>\r\n\r\n</div>  "

/***/ }),

/***/ "../../../../../src/app/managestore/ownstorelist.compoent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_store__ = __webpack_require__("../../../../../src/app/store/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cache_ng2_cache__ = __webpack_require__("../../../../ng2-cache/ng2-cache.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OwnStoreListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OwnStoreListComponent = (function () {
    function OwnStoreListComponent(afAuth, af, _cacheService) {
        this.afAuth = afAuth;
        this.af = af;
        this._cacheService = _cacheService;
        this.iseditstore = false;
        this.comfirmname = null;
        this.comfirmname_type = "";
        this.comfirmname_err = "";
        this.ownstores = [];
        this.afAuth.auth.signInAnonymously();
        this.paycuiseUser = this._cacheService.get('paycuiseUser');
    }
    OwnStoreListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fbList = this.af.list('/Stores', { preserveSnapshot: true });
        this.fbList.subscribe(function (snapshots) {
            _this.ownstores = [];
            snapshots.forEach(function (snapshot) {
                // snapshot.key; ||  snapshot.val();
                var fbstore = snapshot.val();
                var key = snapshot.key;
                var store = new __WEBPACK_IMPORTED_MODULE_1__store_store__["a" /* Store */](fbstore);
                store.setKey(key);
                console.log(_this.paycuiseUser);
                console.log(_this.paycuiseUser.email);
                if (fbstore.owner == _this.paycuiseUser.email) {
                    _this.ownstores.push(store);
                }
            });
        });
    };
    OwnStoreListComponent.prototype.onClickDeleteStore = function (store) {
        this.comfirmname = store.name;
        this.store = store;
    };
    OwnStoreListComponent.prototype.onClickback = function () {
        this.iseditstore = false;
    };
    OwnStoreListComponent.prototype.updateStore = function () {
        var _this = this;
        this.fbList = this.af.list('/Stores', { preserveSnapshot: true });
        this.value = this.af.object('/Stores/' + this.store.id);
        this.value.update(this.store).then(function (_) { console.log('update!'); _this.iseditstore = false; });
    };
    OwnStoreListComponent.prototype.onClickEditStore = function (store) {
        this.store = store;
        this.iseditstore = true;
    };
    OwnStoreListComponent.prototype.onClickConfirmDelete = function () {
        if (this.comfirmname === this.comfirmname_type) {
            this.fbList = this.af.list('/Stores', { preserveSnapshot: true });
            this.value = this.af.object('/Stores/' + this.store.id);
            this.value.remove().then(function (_) { return console.log('deleted!'); });
            $('deleteModal').modal('hide');
            this.comfirmname = null;
        }
        else {
            this.comfirmname_err = "confirm text don't match ";
        }
    };
    return OwnStoreListComponent;
}());
OwnStoreListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'ownstorelist',
        template: __webpack_require__("../../../../../src/app/managestore/ownstorelist.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_cache_ng2_cache__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_cache_ng2_cache__["a" /* CacheService */]) === "function" && _c || Object])
], OwnStoreListComponent);

var _a, _b, _c;
//# sourceMappingURL=ownstorelist.compoent.js.map

/***/ }),

/***/ "../../../../../src/app/managestore/ownstorelist.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n        <table *ngIf=\"!iseditstore\" class=\"table table-striped table-responsive\">\r\n                <thead>\r\n                  <tr>\r\n                    <th >#</th>\r\n                    <th >Store Name</th>\r\n                    <th >image</th>\r\n                    <th ></th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n            \r\n                  <tr *ngFor=\"let store of ownstores; let i = index\">\r\n                      <td>{{i+1}}</td>\r\n                      <td>{{store.name}}</td>\r\n                      <td><img [attr.src]=\"store.picurl\" class=\"col-4\"></td>\r\n                       <td>\r\n                        <button  type=\"button\" class=\"btn btn-lg btn-danger float-right\" data-toggle=\"modal\" data-target=\"#deleteModal\" (click)=\"onClickDeleteStore(store)\">\r\n                          <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\r\n                        </button>\r\n                         \r\n                        <button  type=\"button\" class=\"btn btn-lg btn-primary float-right\" (click)=\"onClickEditStore(store)\">\r\n                            <i class=\"fa fa-edit\" aria-hidden=\"true\"></i>\r\n                          </button>\r\n                       </td>\r\n                  </tr>\r\n                 \r\n                </tbody>\r\n              </table>\r\n\r\n              <div *ngIf=\"iseditstore\" class=\"row\">\r\n                \r\n       \r\n              \r\n               <form (ngSubmit)=\"updateStore()\" #newstoreForm=\"ngForm\" style=\"width: 100%;\">\r\n                           <div class=\"form-group\">\r\n                             <label for=\"name\">Store Name</label>\r\n                             <input type=\"text\" class=\"form-control\" id=\"name\" [(ngModel)]=\"store.name\" [ngModelOptions]=\"{standalone: true}\" required>\r\n                           </div>\r\n                      \r\n                           <div class=\"form-group\">\r\n                             <label for=\"picurl\">Image Url</label>\r\n                             <input type=\"text\" class=\"form-control\" id=\"picurl\" [(ngModel)]=\"store.picurl\" [ngModelOptions]=\"{standalone: true}\"  required>\r\n                           </div>\r\n        \r\n                           <div class=\"form-group\">\r\n                                   <label for=\"detail\">Detail</label>\r\n                                   <input type=\"text\" class=\"form-control\" [(ngModel)]=\"store.detail\" [ngModelOptions]=\"{standalone: true}\" id=\"detail\">\r\n                           </div>\r\n       \r\n                           <button  type=\"button\" class=\"btn btn-danger \" (click)=\"onClickback()\">Back </button>\r\n                           <button type=\"submit\" class=\"btn btn-success\" >Submit</button>\r\n                      \r\n               </form>\r\n       \r\n           </div>\r\n\r\n\r\n\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"deleteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"deleteModalTitle\" aria-hidden=\"true\" >\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Are you want to delete this store ?</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          \r\n          <p>please type <mark style=\"background-color: yellow;\" > {{comfirmname}}</mark> to confirm to delete this store..</p>\r\n          <p style=\"color: red;\">{{comfirmname_err}}</p>\r\n          <input type=\"text\" class=\"form-control\" id=\"comfirmname_type\" [(ngModel)]=\"comfirmname_type\" [ngModelOptions]=\"{standalone: true}\"  required>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancle</button>\r\n          <button type=\"button\" (click)=\"onClickConfirmDelete()\"  class=\"btn btn-danger\">Submit</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/paycusine.nav.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<nav class=\"navbar  navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" href=\"#\">Pay Cuisine</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"justify-content-end collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\r\n      <div class=\"navbar-nav\">\r\n        <a *ngIf=\"loginStatus\"   class=\"nav-item nav-link\"  >Welcome {{paycuiseUser.name}} </a>\r\n        <a style=\"cursor:pointer\" *ngIf=\"!loginStatus\"  class=\"nav-item nav-link\" (click)=\"loginWithFacebook()\">Login</a>\r\n        <a *ngIf=\"loginStatus\" class=\"nav-item nav-link\" [attr.href]=\"'/managestore/'\">Manage Store</a>\r\n        <a style=\"cursor:pointer\" *ngIf=\"loginStatus\"   class=\"nav-item nav-link\" (click)=\"logoutWithFacebook()\" >Logout</a>\r\n   \r\n      </div>\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/paycusine.nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__ = __webpack_require__("../../../../ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_cache_ng2_cache__ = __webpack_require__("../../../../ng2-cache/ng2-cache.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaycuisineNavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaycuisineNavComponent = (function () {
    function PaycuisineNavComponent(fb, _cacheService) {
        this.fb = fb;
        this._cacheService = _cacheService;
        this.loginStatus = false;
        var initParams = {
            appId: '1739946682925584',
            xfbml: true,
            version: 'v2.8',
            cookie: true,
            status: true
        };
        fb.init(initParams);
        //put some data to cache for 1 hour (expires - timestamp with milliseconds)
        this._cacheService.set('key', { 'some': 'data' }, { expires: Date.now() + 1000 * 60 * 60 });
        // check login detail exist 
        if (!this._cacheService.exists('key')) {
            this._cacheService.set('loginStatus', false);
            this._cacheService.set('paycuiseUser', false);
        }
        this.loginStatus = this._cacheService.get('loginStatus');
        this.paycuiseUser = this._cacheService.get('paycuiseUser');
    }
    PaycuisineNavComponent.prototype.loginWithFacebook = function () {
        var _this = this;
        // login with options
        var options = {
            scope: 'public_profile,user_friends,email,pages_show_list',
            return_scopes: true,
            enable_profile_selector: true
        };
        this.fb.login(options)
            .then(function (response) {
            console.log(response.authResponse);
            _this.fb.api("me?fields=id,name,email").then(function (res) {
                _this.paycuiseUser = res;
                _this.loginStatus = true;
                _this._cacheService.set('loginStatus', _this.loginStatus);
                _this._cacheService.set('paycuiseUser', _this.paycuiseUser);
            });
        })
            .catch(function (error) { return console.error(error); });
    };
    PaycuisineNavComponent.prototype.logoutWithFacebook = function () {
        var _this = this;
        this.fb.logout().then(function () {
            _this.loginStatus = false;
            _this._cacheService.set('loginStatus', _this.loginStatus);
            _this._cacheService.set('paycuiseUser', null);
            console.log('Logged out!');
        });
    };
    return PaycuisineNavComponent;
}());
PaycuisineNavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Component */])({
        selector: 'paycusine-nav',
        template: __webpack_require__("../../../../../src/app/navbar/paycusine.nav.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_facebook__["b" /* FacebookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_cache_ng2_cache__["a" /* CacheService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_cache_ng2_cache__["a" /* CacheService */]) === "function" && _b || Object])
], PaycuisineNavComponent);

var _a, _b;
//# sourceMappingURL=paycusine.nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/store/app.store.compoent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store__ = __webpack_require__("../../../../../src/app/store/store.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppStoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppStoreComponent = (function () {
    function AppStoreComponent(route, location, afAuth, af) {
        this.route = route;
        this.location = location;
        this.afAuth = afAuth;
        this.af = af;
        this.afAuth.auth.signInAnonymously();
    }
    AppStoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fbList = this.af.list('/Stores', { preserveSnapshot: true });
        // Get param in header
        this.route.paramMap.switchMap(function (params) { return _this.paramname = params.get("name"); }).subscribe();
        this.fbList.subscribe(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                // snapshot.key; ||  snapshot.val();
                var fbstore = snapshot.val();
                if (fbstore.name == _this.paramname) {
                    _this.store = new __WEBPACK_IMPORTED_MODULE_4__store__["a" /* Store */](fbstore);
                }
            });
        });
    };
    AppStoreComponent.prototype.goBack = function () {
        this.location.back();
    };
    return AppStoreComponent;
}());
AppStoreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["f" /* Component */])({
        selector: 'app-store',
        template: __webpack_require__("../../../../../src/app/store/app.store.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["c" /* Location */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _d || Object])
], AppStoreComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.store.compoent.js.map

/***/ }),

/***/ "../../../../../src/app/store/app.store.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"store\">\n\n  <ul>\n    <li>\n      {{store.name}}\n    </li>\n    <li>\n      {{store.detail}}\n    </li>\n    <li>\n      <img [attr.src] = 'store.picurl'>\n    </li>\n  </ul>\n\n<div>"

/***/ }),

/***/ "../../../../../src/app/store/store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Store; });
var Store = (function () {
    function Store(obj) {
        this.id = "";
        this.name = obj.name;
        this.picurl = obj.picurl;
        this.detail = obj.detail;
        this.owner = obj.owner;
    }
    Store.prototype.setKey = function (id) {
        this.id = id;
    };
    return Store;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map