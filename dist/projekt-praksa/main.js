(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/harunk/Documents/projekt-praksa/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _forma_forma_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forma/forma.component */ "UJdE");


class AppComponent {
    constructor() {
        this.title = 'projekt-praksa';
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-forma");
    } }, directives: [_forma_forma_component__WEBPACK_IMPORTED_MODULE_1__["FormaComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "UJdE":
/*!******************************************!*\
  !*** ./src/app/forma/forma.component.ts ***!
  \******************************************/
/*! exports provided: FormaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormaComponent", function() { return FormaComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function FormaComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti naziv tvrtke!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_8_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r0.glavnaForma.controls.nazivTvrtke.errors == null ? null : ctx_r0.glavnaForma.controls.nazivTvrtke.errors.required);
} }
function FormaComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti adresu!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_14_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r1.glavnaForma.controls.adresa.errors == null ? null : ctx_r1.glavnaForma.controls.adresa.errors.required);
} }
function FormaComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti maticni broj!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_20_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Maticni broj mora sadrzavati samo brojeve!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_20_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormaComponent_div_20_div_2_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r2.glavnaForma.controls.maticniBroj.errors == null ? null : ctx_r2.glavnaForma.controls.maticniBroj.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r2.glavnaForma.controls.maticniBroj.errors == null ? null : ctx_r2.glavnaForma.controls.maticniBroj.errors.pattern);
} }
function FormaComponent_div_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti OIB!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_26_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " OIB mora sadrzavati samo brojeve!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_26_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormaComponent_div_26_div_2_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r3.glavnaForma.controls.OIB.errors == null ? null : ctx_r3.glavnaForma.controls.OIB.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r3.glavnaForma.controls.maticniBroj.errors == null ? null : ctx_r3.glavnaForma.controls.maticniBroj.errors.pattern);
} }
function FormaComponent_div_32_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti telefonski broj!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_32_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Telefonski broj mora sadrzavati samo brojeve!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_32_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormaComponent_div_32_div_2_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r4.glavnaForma.controls.telefon.errors == null ? null : ctx_r4.glavnaForma.controls.telefon.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r4.glavnaForma.controls.telefon.errors == null ? null : ctx_r4.glavnaForma.controls.telefon.errors.pattern);
} }
function FormaComponent_div_42_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti naziv tvrtke klijenta!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_42_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r5.glavnaForma.controls.nazivTvrtkeKlijenta.errors == null ? null : ctx_r5.glavnaForma.controls.nazivTvrtkeKlijenta.errors.required);
} }
function FormaComponent_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti adresu tvrtke klijenta!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_52_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r6.glavnaForma.controls.adresaTvrtkeKlijenta.errors == null ? null : ctx_r6.glavnaForma.controls.adresaTvrtkeKlijenta.errors.required);
} }
function FormaComponent_div_62_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti maticni broj!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_62_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Maticni broj mora sadrzavati samo brojeve!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_62_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormaComponent_div_62_div_2_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r7.glavnaForma.controls.maticniBrojKlijenta.errors == null ? null : ctx_r7.glavnaForma.controls.maticniBrojKlijenta.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r7.glavnaForma.controls.maticniBrojKlijenta.errors == null ? null : ctx_r7.glavnaForma.controls.maticniBrojKlijenta.errors.pattern);
} }
function FormaComponent_div_72_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti OIB!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_72_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " OIB mora sadrzavati samo brojeve!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_72_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormaComponent_div_72_div_2_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r8.glavnaForma.controls.OIBKlijenta.errors == null ? null : ctx_r8.glavnaForma.controls.OIBKlijenta.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r8.glavnaForma.controls.OIBKlijenta.errors == null ? null : ctx_r8.glavnaForma.controls.OIBKlijenta.errors.pattern);
} }
function FormaComponent_div_77_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti broj!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_77_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Mora sadrzavati samo brojeve!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_77_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormaComponent_div_77_div_2_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r9.glavnaForma.controls.modelPoziv.errors == null ? null : ctx_r9.glavnaForma.controls.modelPoziv.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r9.glavnaForma.controls.modelPoziv.errors == null ? null : ctx_r9.glavnaForma.controls.modelPoziv.errors.pattern);
} }
const _c0 = function () { return { standalone: true }; };
function FormaComponent_tr_97_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function FormaComponent_tr_97_Template_input_ngModelChange_2_listener($event) { const proizvod_r34 = ctx.$implicit; return proizvod_r34.naziv = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function FormaComponent_tr_97_Template_input_ngModelChange_4_listener($event) { const proizvod_r34 = ctx.$implicit; return proizvod_r34.kolicina = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngModelChange", function FormaComponent_tr_97_Template_input_ngModelChange_6_listener($event) { const proizvod_r34 = ctx.$implicit; return proizvod_r34.cijena = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "td", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormaComponent_tr_97_Template_td_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["????restoreView"](_r40); const i_r35 = ctx.index; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"](); return ctx_r39.obrisiProizvod(i_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](11, "\u2716");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const proizvod_r34 = ctx.$implicit;
    const i_r35 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("name", "naziv", i_r35, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](10, _c0))("ngModel", proizvod_r34.naziv);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("name", "kolicina", i_r35, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](11, _c0))("ngModel", proizvod_r34.kolicina);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate1"]("name", "cijena", i_r35, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction0"](12, _c0))("ngModel", proizvod_r34.cijena);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate"](proizvod_r34.cijena * proizvod_r34.kolicina);
} }
function FormaComponent_div_117_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti ime operatera!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_117_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r11.glavnaForma.controls.operater.errors == null ? null : ctx_r11.glavnaForma.controls.operater.errors.required);
} }
function FormaComponent_div_133_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti clanove uprave!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_133_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_133_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r12.glavnaForma.controls.clanoviUprave.errors == null ? null : ctx_r12.glavnaForma.controls.clanoviUprave.errors.required);
} }
function FormaComponent_div_138_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti naziv banke!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_138_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_138_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r13.glavnaForma.controls.nazivBanke.errors == null ? null : ctx_r13.glavnaForma.controls.nazivBanke.errors.required);
} }
function FormaComponent_div_144_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti temeljni kapital!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_144_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Temeljni kapital mora sadrzavati samo brojeve!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_144_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, FormaComponent_div_144_div_2_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r14.glavnaForma.controls.temeljniKapital.errors == null ? null : ctx_r14.glavnaForma.controls.temeljniKapital.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r14.glavnaForma.controls.temeljniKapital.errors == null ? null : ctx_r14.glavnaForma.controls.temeljniKapital.errors.pattern);
} }
function FormaComponent_div_149_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti IBAN!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_149_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r15.glavnaForma.controls.IBAN.errors == null ? null : ctx_r15.glavnaForma.controls.IBAN.errors.required);
} }
function FormaComponent_div_155_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti ime suda!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_155_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r16.glavnaForma.controls.sud.errors == null ? null : ctx_r16.glavnaForma.controls.sud.errors.required);
} }
function FormaComponent_div_160_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Morate unijeti SWIFT/BIC!! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} }
function FormaComponent_div_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](1, FormaComponent_div_160_div_1_Template, 2, 0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx_r17.glavnaForma.controls.SWIFTBIC.errors == null ? null : ctx_r17.glavnaForma.controls.SWIFTBIC.errors.required);
} }
const _c1 = function (a0) { return { "is-invalid": a0 }; };
class FormaComponent {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.SERVER_URL = "./backend.php";
        this.glavnaForma = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            nazivTvrtke: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]),
            brRacuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[0-9]*$")
            ]),
            adresa: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]),
            maticniBroj: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[0-9]*$")
            ]),
            OIB: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[0-9]*$")
            ]),
            telefon: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[0-9]*$")
            ]),
            nazivTvrtkeKlijenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]),
            adresaTvrtkeKlijenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]),
            maticniBrojKlijenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[0-9]*$")
            ]),
            OIBKlijenta: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[0-9]*$")
            ]),
            modelPoziv: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[0-9]*$")
            ]),
            operater: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]),
            clanoviUprave: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]),
            temeljniKapital: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern("^[0-9]*$")
            ]),
            sud: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]),
            nazivBanke: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]),
            IBAN: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]),
            SWIFTBIC: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]),
            datumRacuna: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]),
            datumIsporuke: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]),
            rokPlacanja: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]),
            JIRZKI: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required
            ]),
        });
        this.files = [];
    }
    ngOnInit() {
        this.proizvodi = [];
    }
    dodajProizvod() {
        this.proizvodi.push({ naziv: "", kolicina: null, cijena: null });
    }
    ukupno() {
        let suma = 0;
        for (let proizvod of this.proizvodi) {
            suma += proizvod.cijena * proizvod.kolicina;
        }
        return suma;
    }
    pdv() {
        return this.ukupno() * 0.25;
    }
    obrisiProizvod(index) {
        this.proizvodi.splice(index, 1);
    }
    danas() {
        return new Date().toISOString().split('T')[0];
    }
    onSubmit() {
        const formData = new FormData();
        // Dodaj sve proizvode u formData.
        formData.append('proizvodi', JSON.stringify(this.proizvodi));
        //Dodaj sve vrijednosti glavne kontrole u formData.
        Object.keys(this.glavnaForma.controls).forEach(key => {
            formData.append(key, this.glavnaForma.get(key).value);
        });
        this.httpClient.post(this.SERVER_URL, formData).subscribe((res) => window.open(res), (err) => console.log(err));
    }
}
FormaComponent.??fac = function FormaComponent_Factory(t) { return new (t || FormaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
FormaComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: FormaComponent, selectors: [["app-forma"]], decls: 164, vars: 86, consts: [["action", "", 3, "formGroup", "ngSubmit"], [1, "container"], [1, "form-group"], [1, "row", "justify-content-end"], [1, "col-3"], ["for", "nazivTvrtke"], ["formControlName", "nazivTvrtke", "id", "nazivTvrtke", "type", "text", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "adresa"], ["formControlName", "adresa", "id", "adresa", "type", "text", 1, "form-control", 3, "ngClass"], ["for", "maticniBroj"], ["formControlName", "maticniBroj", "id", "maticniBroj", "type", "text", 1, "form-control", 3, "ngClass"], ["for", "OIB"], ["formControlName", "OIB", "id", "OIB", "type", "text", 1, "form-control", 3, "ngClass"], ["for", "telefon"], ["formControlName", "telefon", "id", "telefon", "type", "text", 1, "form-control", 3, "ngClass"], [1, "row", "justify-content-start"], [1, "row", "justify-content-between"], [1, "col-4"], ["for", "nazivTvrtkeKlijenta"], ["formControlName", "nazivTvrtkeKlijenta", "id", "nazivTvrtkeKlijenta", "type", "text", 1, "form-control", 3, "ngClass"], ["for", "datumRacuna"], ["id", "datumRacuna", "type", "date", 1, "form-control", 3, "ngClass", "value"], ["for", "adresaTvrtkeKlijenta"], ["formControlName", "adresaTvrtkeKlijenta", "id", "adresaTvrtkeKlijenta", "type", "text", 1, "form-control", 3, "ngClass"], ["for", "rokPlacanja"], ["id", "rokPlacanja", "type", "date", 1, "form-control", 3, "ngClass"], ["for", "maticniBrojKlijenta"], ["formControlName", "maticniBrojKlijenta", "id", "maticniBrojKlijenta", "type", "text", 1, "form-control", 3, "ngClass"], ["for", "datumIsporuke"], ["id", "datumIsporuke", "type", "date", 1, "form-control", 3, "ngClass"], ["for", "OIBKlijenta"], ["formControlName", "OIBKlijenta", "id", "OIBKlijenta", "type", "text", 1, "form-control", 3, "ngClass"], ["for", "modelPoziv"], ["formControlName", "modelPoziv", "id", "modelPoziv", "type", "text", 1, "form-control", 3, "ngClass"], [1, "row", "justify-content-center", "my-5"], ["formControlName", "brRacuna", "id", "brRacuna", "type", "number", "size", "2", "name", "brRacuna", 3, "ngClass"], [1, "table", "table-hover", "table-sm"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "row", "justify-content-center"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["for", "operater"], ["formControlName", "operater", "id", "operater", "type", "text", 1, "form-control", 3, "ngClass"], ["for", "JIRZKI"], ["formControlName", "JIRZKI", "id", "JIRZKI", "type", "text", 1, "form-control"], ["for", "clanoviUprave"], ["formControlName", "clanoviUprave", "id", "clanoviUprave", "type", "text", 1, "form-control", 3, "ngClass"], ["for", "nazivBanke"], ["formControlName", "nazivBanke", "id", "nazivBanke", "type", "text", 1, "form-control", 3, "ngClass"], ["for", "temeljniKapital"], ["formControlName", "temeljniKapital", "id", "temeljniKapital", "type", "text", 1, "form-control", 3, "ngClass"], ["for", "IBAN"], ["formControlName", "IBAN", "id", "IBAN", "type", "text", 1, "form-control", 3, "ngClass"], ["for", "sud"], ["formControlName", "sud", "id", "sud", "type", "text", 1, "form-control", 3, "ngClass"], ["for", "SWIFTBIC"], ["formControlName", "SWIFTBIC", "id", "SWIFTBIC", "type", "text", 1, "form-control", 3, "ngClass"], ["type", "submit", "value", "Unesi fakturu", 1, "btn", "btn-primary", "btn-large", "btn-success"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "text", 1, "form-control", 3, "ngModelOptions", "name", "ngModel", "ngModelChange"], ["type", "number", 1, "form-control", 3, "ngModelOptions", "name", "ngModel", "ngModelChange"], [1, "align-middle"], [1, "align-middle", 2, "cursor", "pointer", 3, "click"]], template: function FormaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("ngSubmit", function FormaComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "Naziv Tvrtke");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](8, FormaComponent_div_8_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](12, "Adresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](14, FormaComponent_div_14_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](18, "Maticni Broj");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](19, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](20, FormaComponent_div_20_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](24, "OIB");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](25, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](26, FormaComponent_div_26_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](29, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, "Telefon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](32, FormaComponent_div_32_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](33, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](36, "Kupac:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](40, "Naziv Tvrtke Klijenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](41, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](42, FormaComponent_div_42_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](45, "Datum Racuna");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](46, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](50, "Adresa Tvrtke Klijenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](51, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](52, FormaComponent_div_52_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](54, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](55, "Rok Placanja Racuna");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](56, "input", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](59, "label", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](60, "Maticni Broj Klijenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](61, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](62, FormaComponent_div_62_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](64, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](65, "Datum isporuke");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](66, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](67, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](70, "OIB Klijenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](71, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](72, FormaComponent_div_72_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](74, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](75, "Model / Poziv na broj");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](76, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](77, FormaComponent_div_77_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](78, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](80, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](81, "Racun br.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](82, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](83, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "table", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](85, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](88, "Naziv");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](90, "Cijena");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](91, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](92, "Kolicina");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "Ukupno");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](95, "th", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](97, FormaComponent_tr_97_Template, 12, 13, "tr", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function FormaComponent_Template_button_click_99_listener() { return ctx.dodajProizvod(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100, "Dodaj proizvod");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](101, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](102, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](113, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "label", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](115, "Operater / Racun izdao");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](116, "input", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](117, FormaComponent_div_117_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](121, "Nacin placanja: transakcijski racun");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](122, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "label", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](125, "JIR I ZKI");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](126, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](127, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](129, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](130, "label", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](131, "Clanovi Uprave");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](132, "input", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](133, FormaComponent_div_133_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](134, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](135, "label", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](136, "Naziv Banke");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](137, "input", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](138, FormaComponent_div_138_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](139, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](140, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](141, "label", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](142, "Temeljni Kapital");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](143, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](144, FormaComponent_div_144_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](145, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](146, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](147, "IBAN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](148, "input", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](149, FormaComponent_div_149_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](150, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](151, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](152, "label", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](153, "Sud");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](154, "input", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](155, FormaComponent_div_155_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](156, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](157, "label", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](158, "SWIFT/BIC");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](159, "input", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](160, FormaComponent_div_160_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](161, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](162, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](163, "input", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("formGroup", ctx.glavnaForma);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](44, _c1, ctx.glavnaForma.controls.nazivTvrtke.errors && ctx.glavnaForma.controls.nazivTvrtke.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.nazivTvrtke.errors && ctx.glavnaForma.controls.nazivTvrtke.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](46, _c1, ctx.glavnaForma.controls.adresa.errors && ctx.glavnaForma.controls.adresa.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.adresa.invalid && ctx.glavnaForma.controls.adresa.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](48, _c1, ctx.glavnaForma.controls.maticniBroj.errors && ctx.glavnaForma.controls.maticniBroj.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.maticniBroj.invalid && ctx.glavnaForma.controls.maticniBroj.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](50, _c1, ctx.glavnaForma.controls.OIB.errors && ctx.glavnaForma.controls.OIB.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.OIB.invalid && ctx.glavnaForma.controls.OIB.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](52, _c1, ctx.glavnaForma.controls.telefon.errors && ctx.glavnaForma.controls.telefon.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.telefon.invalid && ctx.glavnaForma.controls.telefon.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](54, _c1, ctx.glavnaForma.controls.nazivTvrtkeKlijenta.errors && ctx.glavnaForma.controls.nazivTvrtkeKlijenta.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.nazivTvrtkeKlijenta.invalid && ctx.glavnaForma.controls.nazivTvrtkeKlijenta.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????propertyInterpolate"]("value", ctx.danas());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](56, _c1, ctx.glavnaForma.controls.datumRacuna.errors && ctx.glavnaForma.controls.datumRacuna.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](58, _c1, ctx.glavnaForma.controls.adresaTvrtkeKlijenta.errors && ctx.glavnaForma.controls.adresaTvrtkeKlijenta.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.adresaTvrtkeKlijenta.invalid && ctx.glavnaForma.controls.adresaTvrtkeKlijenta.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](60, _c1, ctx.glavnaForma.controls.rokPlacanja.errors && ctx.glavnaForma.controls.rokPlacanja.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](62, _c1, ctx.glavnaForma.controls.maticniBrojKlijenta.errors && ctx.glavnaForma.controls.maticniBrojKlijenta.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.maticniBrojKlijenta.invalid && ctx.glavnaForma.controls.maticniBrojKlijenta.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](64, _c1, ctx.glavnaForma.controls.datumIsporuke.errors && ctx.glavnaForma.controls.datumIsporuke.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](66, _c1, ctx.glavnaForma.controls.OIBKlijenta.errors && ctx.glavnaForma.controls.OIBKlijenta.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.OIBKlijenta.invalid && ctx.glavnaForma.controls.OIBKlijenta.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](68, _c1, ctx.glavnaForma.controls.modelPoziv.errors && ctx.glavnaForma.controls.modelPoziv.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.modelPoziv.invalid && ctx.glavnaForma.controls.modelPoziv.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](70, _c1, ctx.glavnaForma.controls.brRacuna.errors && ctx.glavnaForma.controls.brRacuna.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.proizvodi);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Ukupno: ", ctx.ukupno(), "KM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("PDV(25.00%): ", ctx.pdv(), "KM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????textInterpolate1"]("Ukupno za platiti: ", ctx.ukupno() + ctx.pdv(), "KM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](72, _c1, ctx.glavnaForma.controls.operater.errors && ctx.glavnaForma.controls.operater.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.operater.invalid && ctx.glavnaForma.controls.operater.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](74, _c1, ctx.glavnaForma.controls.clanoviUprave.errors && ctx.glavnaForma.controls.clanoviUprave.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.clanoviUprave.invalid && ctx.glavnaForma.controls.clanoviUprave.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](76, _c1, ctx.glavnaForma.controls.nazivBanke.errors && ctx.glavnaForma.controls.nazivBanke.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.nazivBanke.invalid && ctx.glavnaForma.controls.nazivBanke.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](78, _c1, ctx.glavnaForma.controls.temeljniKapital.errors && ctx.glavnaForma.controls.temeljniKapital.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.temeljniKapital.invalid && ctx.glavnaForma.controls.temeljniKapital.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](80, _c1, ctx.glavnaForma.controls.IBAN.errors && ctx.glavnaForma.controls.IBAN.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.IBAN.invalid && ctx.glavnaForma.controls.IBAN.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](82, _c1, ctx.glavnaForma.controls.sud.errors && ctx.glavnaForma.controls.sud.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.sud.invalid && ctx.glavnaForma.controls.sud.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](84, _c1, ctx.glavnaForma.controls.SWIFTBIC.errors && ctx.glavnaForma.controls.SWIFTBIC.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", ctx.glavnaForma.controls.SWIFTBIC.invalid && ctx.glavnaForma.controls.SWIFTBIC.touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["??angular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JtYS5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _forma_forma_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forma/forma.component */ "UJdE");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class AppModule {
}
AppModule.??fac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["????defineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _forma_forma_component__WEBPACK_IMPORTED_MODULE_3__["FormaComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.??fac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map