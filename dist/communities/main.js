(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./success/success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _communities_communities_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./communities/communities.component */ "./src/app/communities/communities.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"] },
    { path: 'dates', component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_5__["CalendarComponent"] },
    { path: 'contact-success', component: _success_success_component__WEBPACK_IMPORTED_MODULE_4__["SuccessComponent"] },
    { path: 'communities', component: _communities_communities_component__WEBPACK_IMPORTED_MODULE_6__["CommunitiesComponent"] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \t<app-nav-bar></app-nav-bar>\n\t<router-outlet></router-outlet>\n\t<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _events_events_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./events/events.component */ "./src/app/events/events.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _communities_communities_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./communities/communities.component */ "./src/app/communities/communities.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/esm5/angular-calendar.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./success/success.component */ "./src/app/success/success.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_9__["CalendarComponent"],
                _events_events_component__WEBPACK_IMPORTED_MODULE_10__["EventsComponent"],
                _communities_communities_component__WEBPACK_IMPORTED_MODULE_13__["CommunitiesComponent"],
                _success_success_component__WEBPACK_IMPORTED_MODULE_17__["SuccessComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModalModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_15__["CalendarModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/caldata.ts":
/*!****************************!*\
  !*** ./src/app/caldata.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_object_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/object.json */ "./src/assets/object.json");
var _assets_object_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/Object.assign({}, _assets_object_json__WEBPACK_IMPORTED_MODULE_0__, {"default": _assets_object_json__WEBPACK_IMPORTED_MODULE_0__});

var word = _assets_object_json__WEBPACK_IMPORTED_MODULE_0___namespace;
/* harmony default export */ __webpack_exports__["default"] = (word);


/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"srcs\"></div>\n<div class=\"container\" >\n<ng-template #modalContent let-close=\"close\">\n  <div class=\"modal-header\">\n    <h5 class=\"modal-title\">Event action occurred</h5>\n    <button type=\"button\" class=\"close\" (click)=\"close()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n  \n    <div>\n      Event:\n      <p> Description </p>\n      <pre [innerHTML]=\"modalData?.event.description \" class=\"descr\" ></pre>\n      <p> Location </p>\n      <pre>{{ modalData?.event.location }}</pre>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">OK</button>\n  </div>\n</ng-template>\n<ng-template #customCellTemplate let-day=\"day\" let-locale=\"locale\">\n  <div class=\"cal-cell-top\">\n    <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n    <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n  </div>\n  <small style=\"margin: 5px\">There are {{ day.events.length }} events on this day</small>\n</ng-template>\n<div class=\"row headd text-center\">\n  <div class=\"col-md-4\">\n    <div class=\" btn-group row\">\n      <button\n        class=\"btn btn-primary \"\n        mwlCalendarPreviousView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"activeDayIsOpen = false\">\n        <p><</p>\n      </button>\n      <div\n        class=\"btn btn-primary\"\n        mwlCalendarToday\n        [(viewDate)]=\"viewDate\">\n        Now\n      </div>\n      <div\n        class=\"btn btn-primary \"\n        mwlCalendarNextView\n        [view]=\"view\"\n        [(viewDate)]=\"viewDate\"\n        (viewDateChange)=\"activeDayIsOpen = false\">\n        <p> > </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-4\">\n    <h3>{{ viewDate }}</h3>\n  </div>\n  <div class=\"col-md-4\">\n    <div class=\"btn-group row\">\n      <button\n        class=\"btn btn-primary \"\n        (click)=\"view = 'month'\"\n        [class.active]=\"view === 'month'\">\n        <p>Month</p>\n      </button>\n      <div\n        class=\"btn btn-primary \"\n        (click)=\"view = 'week'\"\n        [class.active]=\"view === 'week'\">\n        Week\n      </div>\n      <div\n        class=\"btn btn-primary \"\n        (click)=\"view = 'day'\"\n        [class.active]=\"view === 'day'\">\n        Day\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<div [ngSwitch]=\"view\">\n  <mwl-calendar-month-view\n    *ngSwitchCase=\"'month'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    [activeDayIsOpen]=\"activeDayIsOpen\"\n    (dayClicked)=\"dayClicked($event.day)\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-month-view>\n  <mwl-calendar-week-view\n    *ngSwitchCase=\"'week'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-week-view>\n  <mwl-calendar-day-view\n    *ngSwitchCase=\"'day'\"\n    [viewDate]=\"viewDate\"\n    [events]=\"events\"\n    [refresh]=\"refresh\"\n    (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n    (eventTimesChanged)=\"eventTimesChanged($event)\">\n  </mwl-calendar-day-view>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/calendar/calendar.component.scss":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  margin: 0 0 10px; }\n\npre {\n  background-color: #f5f5f5;\n  padding: 15px; }\n\nh2 {\n  font-family: 'Source Sans Pro', sans-serif;\n  margin: 10px; }\n\n.btn {\n  height: 50px; }\n\n.headd {\n  margin: 10px; }\n\n.descr {\n  height: 50%; }\n"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _caldata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../caldata */ "./src/app/caldata.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var arr = [];
var _i = 0;
while (_caldata__WEBPACK_IMPORTED_MODULE_4__["default"][_i]) {
    var num = _caldata__WEBPACK_IMPORTED_MODULE_4__["default"][_i];
    var col;
    if (num.color == 'red') {
        col = colors.red;
    }
    else {
        col = colors.blue;
    }
    if (num) {
        arr.push({
            start: new Date(num.start),
            end: new Date(num.end),
            title: num.title,
            location: num.location,
            color: col,
            description: num.description,
            meta: {
                incrementsBadgeTotal: false
            }
        });
    }
    _i++;
}
console.log(arr);
var CalendarComponent = (function () {
    function CalendarComponent(modal) {
        this.modal = modal;
        this.view = 'month';
        this.viewDate = new Date();
        this.refresh = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.events = arr;
        this.activeDayIsOpen = true;
    }
    CalendarComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameMonth"])(date, this.viewDate)) {
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_1__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
                this.viewDate = date;
            }
        }
    };
    CalendarComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    CalendarComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    CalendarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('modalContent'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], CalendarComponent.prototype, "modalContent", void 0);
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.scss */ "./src/app/calendar/calendar.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/commun-data.ts":
/*!********************************!*\
  !*** ./src/app/commun-data.ts ***!
  \********************************/
/*! exports provided: COMM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMM", function() { return COMM; });
var COMM = [
    { title: 'African Women in Computing', mailing: 'http://systers.org/mailman/listinfo/africanwic', desc: 'Our group celebrates the accomplishments of African women in the areas of STEM and technology innovation. We provide exposure to role models for African girls in the area of technology', img: '' },
    { title: 'Asian Women in Computing', mailing: 'http://systers.org/mailman/listinfo/asianwic/', desc: 'Our group encourages Asian women to stay in technical fields, provides networking opportunities, and helps members advance their careers by conquering cultural barriers.', img: '' },
    { title: 'Arab Women in Computing', mailing: 'http://systers.org/mailman/listinfo/awic/', desc: 'Created from the regional collaborative on Women in Computing in the Arab World with NYU Abu Dhabi, our group connects Arab women in computing around the globe to engage with and inspire one another.', img: '' },
    { title: 'Black Women in Computing', mailing: 'http://portal-beta.systers.org/bwic/about/', desc: 'Our group provides support and resources to increase the number of black women in computing-related fields', img: '' },
    { title: 'Chinese Women in Computing', mailing: 'http://systers.org/mailman/listinfo/chinesewic/', desc: 'Our group connects with Chinese women in computer science and technical fields from around the world, We encourage each other stay in STEM, and inspire each other to make an even bigger impact in our fields.', img: '' },
    { title: 'Filipinas in Computing', mailing: 'http://systers.org/mailman/listinfo/filipinasic/', desc: 'Our group  brings together Filipina women interested in, working in, or studying computing or STEM. Our goal is to promote the visibility and impact of Filipinas in tech, and to celebrate their success in the industry.', img: '' },
    { title: 'Indian Women in Computing', mailing: 'http://systers.org/mailman/listinfo/indianwic/', desc: 'Our group offers guidance and mentoring to our members so they may succeed in the fields of computing and technology.', img: '' },
    { title: 'Iranian Women in Computing', mailing: 'https://www.facebook.com/groups/abi.iranianwic/', desc: 'Our group builds a strong network of Iranian female students and professionals working in different technology-related fields. ', img: '' },
    { title: 'Japanese Women in Computing', mailing: 'https://systers.org/mailman/listinfo/japanesewic', desc: 'Engage with our group members by sharing experiences and resources with each other. Make valuable connections and learn how you can further your career.', img: '' },
    { title: 'Jewish Women in Computing', mailing: 'www.systers.org/mailman/listinfo/jwic', desc: 'Our members would like to connect with you, share resources and create together our own private community, whether you are a student or working in industry.', img: '' },
    { title: 'Latinas in Computing', mailing: 'http://systers.org/mailman/listinfo/lic/', desc: 'Our members define key strategies to promote leadership and professional development among current and next-generation Latinas in technical roles.', img: '' },
    { title: 'LGBTQ-A in Computing', mailing: 'http://systers.org/mailman/listinfo/lgbt/', desc: 'Created in 2006, our international group gathers lesbian, gay, bisexual, transgender, and queer technologists from academia, industry, and government. We welcome people from all areas of computing, including LGBTQ allies.', img: '' },
    { title: 'Native American Women in Computing', mailing: 'http://systers.org/mailman/listinfo/nawic', desc: 'There are very few Native American women in computing, which is why this group provides support, inspiration, mentoring, and resources to those in need of support. ', img: '' },
    { title: 'Pakistani Women in Computing', mailing: 'http://systers.org/mailman/listinfo/pwic', desc: 'Pakistani Women in Computing provides a safe environment for Pakistani women to connect, learn, and support each other.', img: '' },
    { title: 'Systers-Spain', mailing: 'http://systers.org/mailman/listinfo/systers-spain', desc: 'Systers Spain is a group for women in computing in or from Spain. Our members support each other, share resources, and discuss issues related to women in computing, specifically in Spain.', img: '' },
    { title: 'Turkish Women in Computing', mailing: 'http://systers.org/mailman/listinfo/twics/', desc: 'Turkish Women in Computing allows women of Turkish descent to connect, network, learn, and grow. Help create a mentoring atmosphere by sharing your experiences and advice.', img: '' },
    { title: 'Underrepresented Women in Computing', mailing: 'https://www.facebook.com/groups/WoC.Computing/', desc: 'This group was created by and for underrepresented women in computing (Hispanic/Latina, Native American, women of color, and women with disabilities).', img: '' },
    { title: 'Vietnamese Women in Computing', mailing: 'http://systers.org/mailman/listinfo/twics/', desc: 'Vietnamese Women in Computing consists of women with Vietnamese heritage who have a computing degree or computing career, or who are interested in joining the field of computing.', img: '' }
];


/***/ }),

/***/ "./src/app/commun-mail.ts":
/*!********************************!*\
  !*** ./src/app/commun-mail.ts ***!
  \********************************/
/*! exports provided: MAILG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAILG", function() { return MAILG; });
var MAILG = [
    { title: 'Ph.D.JobHuntHers', mailing: 'http://systers.org/mailman/listinfo/phdjobhunthers', desc: 'This moderated mailing list supports women who are seekingjobs in computer engineering, or information technology either in academia, industry, or government laboratories.', img: '' },
    { title: 'ProfessHers', mailing: 'http://systers.org/mailman/listinfo/professhers', desc: 'This moderated mailing list provides a venue for  women faculty members in computer science computer engineering and information technology to informally discuss job-related issues and career advancement.', img: '' },
    { title: 'JrProfessHers', mailing: 'http://systers.org/mailman/listinfo/pretenures', desc: ' JrProfessHers is a moderated mailing list for women faculty in computer science, computer engineering and information technology who do not yet have tenure. ', img: '' },
    { title: 'Student-ResearcHers', mailing: 'http://systers.org/mailman/listinfo/student-researchers', desc: ' Systers involved in IETF topics can participate by email or in person at Systers-IETF meetings. The purpose of these gatherings is to give us a chance to socialize with other women who attend the IETF and to offer mutual support in our IETF activities. ', img: '' },
    { title: 'ResearcHers', mailing: 'http://systers.org/mailman/listinfo/researchers', desc: 'This informal organization gathers non-managerial, non-academic female computer science researchers.', img: '' }
];


/***/ }),

/***/ "./src/app/commun-sig.ts":
/*!*******************************!*\
  !*** ./src/app/commun-sig.ts ***!
  \*******************************/
/*! exports provided: SIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIG", function() { return SIG; });
var SIG = [
    { title: 'Entrepreneurs', mailing: 'http://systers.org/mailman/listinfo/entrepreneurs', desc: ' Share experiences and discuss questions of interest to female entrepreneurs in IT and related areas. ', img: '' },
    { title: 'Systers-CommColl', mailing: 'http://www.systers.org/mailman/listinfo/systers-commcoll ', desc: 'Join a a private email forum for female technical students, alumnae, faculty, and staff at community colleges. ', img: '' },
    { title: 'Systers-IETF', mailing: 'https://www.ietf.org/mailman/listinfo/systers', desc: ' The purpose of these gatherings is to give us a chance to socialize with other women who attend the IETF and to offer mutual support in our IETF activities. ', img: '' },
    { title: 'Student-ResearcHers', mailing: 'http://systers.org/mailman/listinfo/student-researchers', desc: ' The purpose of these gatherings is to give us a chance to socialize with other women who attend the IETF and to offer mutual support in our IETF activities. ', img: '' },
    { title: 'Systers-TechTalk', mailing: 'http://systers.org/mailman/listinfo/systers-techtalk', desc: 'Systers-Techtalk is a private email forum for technical discussions by women who are university students or working in the technical side of computing . ', img: '' },
    { title: 'Systers-Wikipedia', mailing: 'http://systers.org/mailman/listinfo/systers-wikipedia', desc: 'Join a list for female Wikipedians.', img: '' },
    { title: ' Women in Cybersecurity & Privacy', mailing: 'https://www.wicys.net/', desc: 'Join women from academia, research, and industry to network share knowledge and provide or receive mentoring in cybersecurity.', img: '' }
];


/***/ }),

/***/ "./src/app/communities/communities.component.html":
/*!********************************************************!*\
  !*** ./src/app/communities/communities.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class =\"mx-auto\" >\n \n    <mdb-carousel [isControls]=\"true\" [animation]=\"'slide'\" [interval]=\"myInterval\" [(activeSlide)]=\"activeSlideIndex\" (activeSlideChange)=\"activeSlideChange()\">\n      <mdb-slide *ngFor=\"let slide of slides; let index=index\">\n        <img [src]=\"slide.image\" class=\"d-block w-80 h-70 cimage\" >\n        <div class=\"carousel-caption\">\n          <h4>Slide {{index}}</h4>\n          <p>{{slide.text}}</p>\n        </div>\n      </mdb-slide>\n    </mdb-carousel>\n \n</div>\n\n<div class = \"container mx-auto d-block \" style=\"padding-top: 20px;\">\n<ngb-tabset (tabChange)=\"beforeChange($event)\" [justify]=\"currentJustify\" >\n\n<ngb-tab id=\"tab-preventchange1\" title=\"Systers Affinity Groups\">\n    <ng-template ngbTabContent>\n    <center><h2>Systers Affinity Groups</h2></center>\n    <center>\n    <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6\" *ngFor=\"let det of details ; let index=index ;\" style=\"margin-bottom: 20px;\">\n        <div class=\"card\" style=\"margin:auto;\">\n            <img class=\"sig-img\" src=\"../assets/img/women1.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">{{det.title}}</h4>\n                <p class=\"card-text\">{{det.desc}}</p>\n            </div>\n        <br>\n        <br>\n       \n        <div style=\"margin-bottom: 20px;\">\n            <a href=\"{{ det.mailing }}\" target=\"_blank\" mdbWavesEffect >Mailing List</a>              \n        </div>\n         </div>\n        </div>\n        <br>\n        <br>\n    </div>\n    </center>\n            \n    </ng-template>\n  </ngb-tab>\n  \n \n  <ngb-tab id=\"tab-preventchange2\" title=\"Systers Special Interest Groups\">\n    <ng-template ngbTabContent>\n    <center><h2>Systers Special Interest Groups</h2></center>\n    <center>\n    <div class=\"row\">\n        <div class=\"col-lg-3\" *ngFor=\"let det of details_sig ; let index=index ;\" style=\"margin-bottom: 20px;\">\n        <div class=\"card\" style=\"margin:auto;\">\n            <img class=\"sig-img\" src=\"../assets/img/women1.jpg\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <h4 class=\"card-title\">{{det.title}}</h4>\n                <p class=\"card-text\">{{det.desc}}</p>\n            </div>\n        <br>\n        <br>\n       \n        <div style=\"margin-bottom: 20px;\">\n            <a href=\"{{ det.mailing }}\" target=\"_blank\" mdbWavesEffect >Mailing List</a>              \n        </div>\n         </div>\n        </div>\n        <br>\n        <br>\n    </div>\n    </center>\n            \n    </ng-template>\n  </ngb-tab>\n  \n  <ngb-tab title=\"CRA-W Email Groups\" >\n    <ng-template ngbTabContent>\n        <center><h2>CRA-W Email Groups</h2></center>\n        <center>\n        <div class=\"row\">\n            <div class=\"col-lg-3\" *ngFor=\"let det of detail_mail ; let index=index ;\" style=\"margin-bottom: 20px;\">\n            <div class=\"card\">\n                <img class=\"sig-img\" src=\"../assets/img/women1.jpg\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">{{det.title}}</h4>\n                    <p class=\"card-text\">{{det.desc}}</p>\n                </div>\n            <div style=\"margin-bottom: 20px;\">\n            <a href=\"{{ det.mailing }}\" target=\"_blank\" mdbWavesEffect >Mailing List</a>              \n            </div>\n            </div>\n\n            </div>\n        </div>\n        </center>\n    </ng-template>\n  </ngb-tab>\n  \n</ngb-tabset>\n</div>"

/***/ }),

/***/ "./src/app/communities/communities.component.scss":
/*!********************************************************!*\
  !*** ./src/app/communities/communities.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "center {\n  font-family: 'Source Sans Pro', sans-serif; }\n\n.brand-c {\n  width: 80%;\n  height: 70%;\n  border-collapse: collapse; }\n\n.sig-img {\n  height: 130px;\n  width: 100%; }\n\n.card {\n  height: 100%;\n  width: 90%; }\n\nngb-tabset {\n  margin-top: 10px; }\n\nh2 {\n  font-family: 'Source Sans Pro', sans-serif;\n  margin: 30px; }\n\n.cimage {\n  max-height: 550px;\n  width: 100%; }\n\n@media only screen and (max-width: 1000px) {\n  .cimage {\n    max-height: 450px;\n    width: 100%; } }\n"

/***/ }),

/***/ "./src/app/communities/communities.component.ts":
/*!******************************************************!*\
  !*** ./src/app/communities/communities.component.ts ***!
  \******************************************************/
/*! exports provided: CommunitiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunitiesComponent", function() { return CommunitiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _commun_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commun-data */ "./src/app/commun-data.ts");
/* harmony import */ var _commun_sig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commun-sig */ "./src/app/commun-sig.ts");
/* harmony import */ var _commun_mail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commun-mail */ "./src/app/commun-mail.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommunitiesComponent = (function () {
    function CommunitiesComponent() {
        this.currentOrientation = 'horizontal';
        this.currentJustify = 'fill';
        this.myInterval = 300;
        this.activeSlideIndex = 0;
        this.noWrapSlides = false;
        this.slides = [
            { "image": "../assets/img/women2.jpg" },
            { "image": "../assets/img/women1.jpg" },
            { "image": "../assets/img/women3.jpg" },
        ];
        this.details = _commun_data__WEBPACK_IMPORTED_MODULE_1__["COMM"];
        this.details_sig = _commun_sig__WEBPACK_IMPORTED_MODULE_2__["SIG"];
        this.detail_mail = _commun_mail__WEBPACK_IMPORTED_MODULE_3__["MAILG"];
    }
    CommunitiesComponent.prototype.activeSlideChange = function () {
        console.log(this.activeSlideIndex);
    };
    CommunitiesComponent.prototype.ngOnInit = function () {
    };
    CommunitiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-communities',
            template: __webpack_require__(/*! ./communities.component.html */ "./src/app/communities/communities.component.html"),
            styles: [__webpack_require__(/*! ./communities.component.scss */ "./src/app/communities/communities.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CommunitiesComponent);
    return CommunitiesComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"imgel\">\n  <img src = \"../assets/img/contact.png\" class = \"contact-banner\">\n</div>\n\n\n<div class=\"container mx-auto d-block box-v\" style=\"margin: 70px;\" >\n\n  <div class=\"row ctgrp\" >\n    <!-- <div class=\"col-xs-2\"></div> -->\n    <div class=\"col-md-7  container box \">\n      <!-- Contact form -->\n\n      <!-- <form (submit)=\"onSubmit();\" action=\"https://www.enformed.io/5z7161c6 \" method=\"POST\"> -->\n\n      <form [formGroup]=\"signin\" (submit)=\"onSubmit();\" action=\"https://getsimpleform.com/messages?form_api_token=7b004d6e9d7a7e646a27c2fd58ee1001\" method=\"post\"  >\n      <input type='hidden' class=\"form-control\" name='redirect_to' value='http://localhost:4200/contact-success'>\n\n        <!-- Name of person submitting form -->\n        <h3>Name</h3>\n        <input id=\"name\" type=\"text\" class=\"form-control\" name=\"name\" size=\"150\" placeholder=\"Name\"  formControlName=\"name\">\n\n        <!-- Email address -->\n        <h3>Email</h3>\n        <input id=\"email\" type=\"text\" class=\"form-control\" name=\"email\" placeholder=\"Email\" formControlName=\"email\">\n        <div *ngIf=\"email.errors?.pattern\">\n             <p style=\"color:red;\">Enter a valid email ID</p>\n        </div> \n\n        <!-- Message they want to send -->\n        <h3>Questions or Comments</h3>\n        <textarea name=\"paragraph_text\" input id=\"message\" type=\"text\" class=\"form-control\" name=\"message\" placeholder=\"Want to start a community? Need funding for events?\"\n          maxlength=\"250\" cols=\"15\" rows=\"12\" ></textarea>\n    \n\n        <br>\n        <br>\n        <!-- <input type=\"hidden\" name=\"*redirect\" value=\"http://localhost:4200/contact\" /> -->\n        <!-- Submit button -->\n        <button type=\"submit\" class=\"btn btn-md uploadImageButton\" [disabled]=\"signin.invalid\"  id=\"submit-btn\">Send</button>\n\n        <!-- <input type=\"hidden\" name=\"*honeypot\" /> -->\n        \n\n        <br>\n        <br>\n\n      </form>\n    </div>\n    <div class=\"col-md-5 mx-auto d-block\">\n    <center><h3> Join Us </h3></center>\n    <div class=\"card\">\n      <div class=\"row justify-content-center join\">\n        <div class=\"col-md-9\">     \n          <i class=\"fa fa-slack\" aria-hidden=\"true\"></i><a href=\"https://systers-opensource.slack.com/\"><span>Slack</span></a>\n        </div>\n      </div>\n      <div class=\"row justify-content-center join\">\n        <div class=\"col-md-9 col-md-offset-3\">     \n          <i class=\"fa fa-github\" aria-hidden=\"true\"></i><a href=\"https://systers-opensource.slack.com/\"><span>Github</span></a>\n        </div>\n      </div>\n      <div class=\"row justify-content-center join\">\n        <div class=\"col-md-9 col-md-offset-3\">     \n\n         <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i><a href=\"https://systers-opensource.slack.com/\"><span>Mailing list</span></a>\n\n        </div>\n      </div>\n\n    </div>\n    </div>\n    </div>\n\n  </div>\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  color: #54BCEB; }\n\na {\n  color: #8d2165; }\n\ncenter {\n  color: #8d2165;\n  margin: 20px; }\n\nh1 {\n  color: #54BCEB;\n  font-size: 60px; }\n\n.info {\n  margin-left: 20px;\n  margin-right: 20px; }\n\nspan {\n  margin-left: 10px; }\n\n.join {\n  margin: 20px;\n  font-size: 25px;\n  font-family: BrandonTextWeb-Regular, \"Times New Roman\", Times, serif; }\n\n.social {\n  align-items: center; }\n\n@media only screen and (max-width: 600px) {\n  .info {\n    margin-right: 5px;\n    margin-left: 5px;\n    font-size: 12px; }\n  .data {\n    font-size: 12px; }\n  .fa {\n    height: 4px; } }\n\n.contact-banner {\n  height: 70%;\n  width: 100%; }\n\n.brand-c {\n  background-color: #54BCEB;\n  margin: 8px;\n  margin-top: 18px;\n  align: center; }\n\n.card {\n  margin: 30px; }\n\n.logos {\n  margin-top: 20px; }\n\n.uploadImageButton {\n  background-color: #54BCEB; }\n\nh2 {\n  margin: 20px;\n  color: #54BCEB;\n  font-family: BrandonTextWeb-Regular, \"Times New Roman\", Times, serif; }\n\nh3 {\n  font-family: BrandonTextWeb-Regular, \"Times New Roman\", Times, serif;\n  color: #8d2165; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactComponent = (function () {
    function ContactComponent() {
        this.signin = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
            ]),
            captcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ContactComponent.prototype, "email", {
        get: function () {
            return this.signin.get('email');
        },
        enumerable: true,
        configurable: true
    });
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/events/events.component.html":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1><center>Upcoming Events</center></h1>\n<div class = \"container\" style=\"margin: auto;\">\n\n<div class=\"row\">\n<!--Card Dark-->\n\t<div class='col-lg-4'>\n        <div class=\"card card-dark\">\n            <!--Card image-->\n            \n            <!--Card content-->\n            <div class=\"card-body elegant-color white-text\">\n                <!--Social shares button-->\n                <a class=\"activator p-3 mr-2\">\n                    <i class=\"fa fa-share-alt white-text\"></i>\n                </a>\n                <!--Title-->\n                <h4 class=\"card-title\">Card title</h4>\n                <hr class=\"hr-light\">\n                <!--Text-->\n                <p class=\"font-small mb-4\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                <a href=\"#!\" class=\"white-text d-flex justify-content-end\">\n                    <h5 class=\"waves-light\" mdbWavesEffect>Read more</h5>\n                    <span>\n                        <i class=\"fa fa-chevron-right pl-2 waves-light\" mdbWavesEffect></i>\n                    </span>\n                </a>\n            </div>\n            <!--/.Card content-->\n        </div>\n        <!--/.Card Dark-->\n    </div>\n    <div class='col-lg-4'>\n        <div class=\"card card-dark\">\n            <!--Card image-->\n            \n            <!--Card content-->\n            <div class=\"card-body elegant-color white-text\">\n                <!--Social shares button-->\n                <a class=\"activator p-3 mr-2\">\n                    <i class=\"fa fa-share-alt white-text\"></i>\n                </a>\n                <!--Title-->\n                <h4 class=\"card-title\">Card title</h4>\n                <hr class=\"hr-light\">\n                <!--Text-->\n                <p class=\"font-small mb-4\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                <a href=\"#!\" class=\"white-text d-flex justify-content-end\">\n                    <h5 class=\"waves-light\" mdbWavesEffect>Read more</h5>\n                    <span>\n                        <i class=\"fa fa-chevron-right pl-2 waves-light\" mdbWavesEffect></i>\n                    </span>\n                </a>\n            </div>\n            <!--/.Card content-->\n        </div>\n        <!--/.Card Dark-->\n    </div>\n    <div class='col-lg-4'>\n        <div class=\"card card-dark\">\n            <!--Card image-->\n            \n            <!--Card content-->\n            <div class=\"card-body elegant-color white-text\">\n                <!--Social shares button-->\n                <a class=\"activator p-3 mr-2\">\n                    <i class=\"fa fa-share-alt white-text\"></i>\n                </a>\n                <!--Title-->\n                <h4 class=\"card-title\">Card title</h4>\n                <hr class=\"hr-light\">\n                <!--Text-->\n                <p class=\"font-small mb-4\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                <a href=\"#!\" class=\"white-text d-flex justify-content-end\">\n                    <h5 class=\"waves-light\" mdbWavesEffect>Read more</h5>\n                    <span>\n                        <i class=\"fa fa-chevron-right pl-2 waves-light\" mdbWavesEffect></i>\n                    </span>\n                </a>\n            </div>\n            <!--/.Card content-->\n        </div>\n        <!--/.Card Dark-->\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/events/events.component.scss":
/*!**********************************************!*\
  !*** ./src/app/events/events.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  color: #8d2165;\n  margin: 30px; }\n"

/***/ }),

/***/ "./src/app/events/events.component.ts":
/*!********************************************!*\
  !*** ./src/app/events/events.component.ts ***!
  \********************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsComponent = (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.scss */ "./src/app/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<footer class=\"page-footer mdb-color white text-center text-md-left pt-4 mt-4\">\n\n    <!--Footer Links-->\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-3 offset-md-1\">\n                <img src=\"../assets/img/footer-logo.png\" style=\"height: 20vh;\">\n            </div>\n\n            <div class=\"col-md-5 offset-md-3 black-text\">\n              \n                <ul class=\"list-unstyled \">\n                    <li>\n                        <a style=\"color: rgb(141,33,101);\" routerLink =\"/contact\">Contact Us</a>\n                    </li>\n                </ul>\n                <div style=\"color: #54BCEB;\">\n                \tWe connect, inspire and guide women in computing and organizations that view technology innovation as a strategic imperative. Women transform technology.\n                </div>\n            </div>\n\n\n        </div>\n  \n    </div>\n\n    <div class=\"footer-copyright white-text text-center py-3\" style=\"background-color:#54BCEB;\">\n    \t<div class=\"text-center mb-3 \" style=\"background-color:#54BCEB;\">\n\t    \t<a class=\"btn-floating btn-small btn-fb waves-light\" mdbWavesEffect style=\"margin-right: 30px;\" target=\"_blank\" href=\"https://www.facebook.com/AnitaB.0rg/\">\n\t            <i class=\"fa fa-facebook fa-3x\"> </i>\n\t        </a>\n\t   \n\t        <a class=\"btn-floating btn-small btn-gplus \" mdbWavesEffect style=\"margin-right: 30px;\" target=\"_blank\" href = \" https://twitter.com/systers_org\">\n\t            <i class=\"fa fa-twitter fa-3x\"> </i>\n\t        </a>\n\t       \n\t        <a class=\"btn-floating btn-small btn-git waves-light\" target=\"_blank\" href=\"https://github.com/systers\" mdbWavesEffect style=\"margin-right: 30px;\">\n\t            <i class=\"fa fa-github fa-3x\"> </i>\n\t        </a>\n\t        <a class=\"btn-floating btn-small btn-git waves-light\" target=\"_blank\" mdbWavesEffect href =\"https://medium.com/@systers_org\" style=\"margin-right: 30px;\">\n\t        \t<i class=\"fa fa-medium fa-3x\" aria-hidden=\"true\"></i>\n\t        </a>\n\t        \t\n\t    </div>\n        \n        <div class=\"container-fluid\">\n            Systers\n            <a href=\"#\"> \"We believe in the community we build\" </a>\n\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-carousel [isControls]=\"true\" class=\"carousel slide carousel-fade\" [animation]=\"'fade'\">\n    <mdb-slide>\n        <div class=\"view\">\n            <img class=\"d-block w-100\" src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg\" alt=\"First slide\">\n            <div class=\"mask rgba-black-light waves-light\" mdbWavesEffect></div>\n        </div>\n        <div class=\"carousel-caption\">\n            <h3 class=\"h3-responsive\">Light mask</h3>\n            <p>First text</p>\n        </div>\n    </mdb-slide>\n    <mdb-slide>\n        <div class=\"view\">\n            <img class=\"d-block w-100\" src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg\" alt=\"Second slide\">\n            <div class=\"mask rgba-black-strong waves-light\" mdbWavesEffect></div>\n        </div>\n        <div class=\"carousel-caption\">\n            <h3 class=\"h3-responsive\">Strong mask</h3>\n            <p>Secondary text</p>\n        </div>\n    </mdb-slide>\n    <mdb-slide>\n        <div class=\"view\">\n            <img class=\"d-block w-100\" src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg\" alt=\"Third slide\">\n            <div class=\"mask rgba-black-slight waves-light\" mdbWavesEffect></div>\n        </div>\n        <div class=\"carousel-caption\">\n            <h3 class=\"h3-responsive\">Slight mask</h3>\n            <p>Third text</p>\n        </div>\n    </mdb-slide>\n</mdb-carousel>\n                \n<div class = \"col-md-12\">\n\t<div class=\"card\">\n\t\t<center><h3><b>About Systers</b> </h3></center>\n\n\t    <div class =\"container .d-sm-flex\">\n\t\t    <p class =\"info\">Systers is an international Anita B.org community encouraging the participation of all women involved in technology.\n\n\t\t\tWe are committed to providing a friendly, safe, and welcoming environment for all, regardless of gender, sexual orientation, ability, ethnicity, socioeconomic status, work experience, or religion (or lack thereof).\n\n\t\t\tWe believe in inclusivity, diversity, and transparency. We value open source citizenship and collaborative involvement. </p>\n\t    </div>\n\t</div>\n</div>\n<center><h3><b>Systers Affinity Groups</b> </h3></center>\n\n<div class=\"grid-block\">\n  <div class=\"flip-container\">\n    <div id=\"f1\" class=\"flip-card shadow\">\n      <div class=\"front-face\">\n        <img src=\"../assets/img/women1.jpg\">\n        <span>African Women in Computing</span>\n      </div>\n      <div class=\"back-face-center\">\n        <p>\n         Our group celebrates the accomplishments of African women in the areas of STEM and technology innovation. We provide exposure to role models for African girls in the area of technology\n        </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"flip-container\">\n    <div id=\"f2\" class=\"flip-card shadow\">\n      <div class=\"front-face\">\n        <img src=\"./assets/img/women2.jpg\">\n        <span>Asian Women in Computing</span>\n      </div>\n      <div class=\"back-face-center\">\n        <p>\n          Our group encourages Asian women to stay in technical fields, provides networking opportunities, and helps members advance their careers by conquering cultural barriers.\n        </p>\n      </div>\n    </div>\n</div>\n<div class=\"flip-container\">\n    <div id=\"f3\" class=\"flip-card shadow\">\n      <div class=\"front-face\">\n        <img src=\"../assets/img/women3.jpg\">\n        <span>Arab Women in Computing</span>\n      </div>\n      <div class=\"back-face-center\">\n        <p> \n          Created from the regional collaborative on Women in Computing in the Arab World with NYU Abu Dhabi, our group connects Arab women in computing around the globe to engage with and inspire one another.\n        </p>\n      </div>\n    </div>\n</div>\n</div>\n<center><a routerLink =\"/communities\"> <button type=\"button\" class=\"btn btn-rounded waves-light brand-c\" mdbWavesEffect style=\"background-color: #54BCEB;\">Click Here to Know More </button></a></center>\n<hr>\n\n<center><h3><b>Upcoming Events</b> </h3></center>\n\n<div class=\"grid-block\">\n  <div class=\"flip-container\">\n    <div id=\"f1\" class=\"flip-card shadow\">\n      <div class=\"front-face\">\n        <span>{{events[0].title}}</span>\n        <hr>\n        <p> <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> {{events[0].start }}</p>\n        <p style=\"word-wrap: break-word ;\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: {{events[0].location}} </p>\n      </div>\n      <div class=\"back-face-center\">\n      <h5> About {{events[0].title}} </h5>\n\n        <p [innerHTML] =\"events[0].description\" style=\"word-wrap: break-word ;\" ></p> \n\n      </div>\n    </div>\n  </div>\n  <div class=\"flip-container\">\n    <div id=\"f2\" class=\"flip-card shadow\">\n      <div class=\"front-face\">\n        \n        <span>{{events[1].title}}</span>\n        <hr>\n        <p class=\"white-text\"> <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> {{events[1].start }}</p>\n        <p class=\"white-text\" style=\"word-wrap: break-word ;\"><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location: {{events[1].location}} </p>\n      </div>\n      <div class=\"back-face-center\">  \n        <h5> About {{events[1].title}} </h5>\n\n        <p [innerHTML] =\"events[1].description\" style=\"word-wrap: break-word ;\" ></p> \n      </div>\n    </div>\n  </div>\n  <div class=\"flip-container\">\n    <div id=\"f3\" class=\"flip-card shadow\">\n      <div class=\"front-face\">\n        <span>{{events[2].title}}</span>\n        <hr>\n        <p> <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> {{events[2].start }}</p>\n        <p style=\"word-wrap: break-word ;\"> <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Location:{{events[2].location}} </p>\n      </div>\n      <div class=\"back-face-center\">\n        <h5> About {{events[2].title}} </h5>\n        <p [innerHTML] =\"events[2].description\" style=\"word-wrap: break-word ;\" ></p> \n\n      </div>\n    </div>\n  </div>\n  \n</div>\n<center><a routerLink =\"/dates\"> <button type=\"button\" class=\"btn btn-rounded waves-light brand-c\" mdbWavesEffect style=\"background-color: #54BCEB;\">View Events in Calendar </button></a></center>\n  \n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin: 30px;\n  font-family: Acme; }\n\ncenter {\n  margin: 15px; }\n\n@media only screen and (max-width: 600px) {\n  .info {\n    margin-right: 5px;\n    margin-left: 5px;\n    font-size: 12px; } }\n\nhtml {\n  box-sizing: border-box; }\n\n*,\n*:before,\n*:after {\n  box-sizing: inherit; }\n\nbody {\n  padding: 2rem;\n  line-height: normal; }\n\np {\n  font-family: \"Open Sans\", sans-serif;\n  font-size: 18px;\n  overflow: hidden; }\n\n.grid-block {\n  display: block;\n  text-align: center;\n  width: 100%; }\n\n.flip-container {\n  display: inline-block;\n  height: 300px !important;\n  margin: 10px;\n  width: 195px !important;\n  position: relative;\n  -webkit-perspective: 800px;\n          perspective: 800px; }\n\n.flip-container:hover .flip-card {\n    transform: rotateY(180deg);\n    -webkit-transform: rotateY(180deg); }\n\n.flip-card {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  -webkit-transform-style: preserve-3d;\n          transform-style: preserve-3d;\n  transition: -webkit-transform 0.6s;\n  transition: transform 0.6s;\n  transition: transform 0.6s, -webkit-transform 0.6s; }\n\n.flip-card > div {\n    margin: 0;\n    display: block;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden; }\n\n.flip-card .front-face {\n    padding: 8px; }\n\n.flip-card .front-face img {\n      height: 170px;\n      width: 170px; }\n\n.flip-card .front-face span {\n      color: #fff;\n      font-size: 20px;\n      text-align: center; }\n\n.flip-card .back-face-center {\n    -webkit-transform: rotateY(180deg);\n            transform: rotateY(180deg);\n    cursor: default; }\n\n.flip-card .back-face-center p {\n      color: #fff;\n      font-size: 12px;\n      margin: 0;\n      padding: 8px; }\n\n#f1 .front-face,\n#f1 .back-face-center {\n  background-color: #A38BB8;\n  font-family: 'Source Sans Pro', sans-serif; }\n\n#f1 .front-face img {\n  background: rgba(0, 0, 0, 0) repeat scroll 0 0; }\n\n#f2 .front-face,\n#f2 .back-face-center {\n  background-color: #8d2165;\n  font-family: 'Source Sans Pro', sans-serif; }\n\n#f2 .front-face img {\n  background: rgba(0, 0, 0, 0) repeat scroll -120px 0; }\n\n#f3 .front-face,\n#f3 .back-face-center {\n  background-color: #A38BB8;\n  font-family: 'Source Sans Pro', sans-serif; }\n\n#f3 .front-face img {\n  background: rgba(0, 0, 0, 0) repeat scroll -240px 0; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _caldata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../caldata */ "./src/app/caldata.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var arr = [];
var _i = 0;
while (_caldata__WEBPACK_IMPORTED_MODULE_1__["default"][_i]) {
    var num = _caldata__WEBPACK_IMPORTED_MODULE_1__["default"][_i];
    var today = new Date();
    if (new Date(num.start) >= today) {
        arr.push({
            start: new Date(num.start),
            end: new Date(num.end),
            title: num.title,
            location: num.location,
            description: num.description
        });
    }
    _i++;
}
var HomeComponent = (function () {
    function HomeComponent() {
        this.events = arr;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav style=\"background-color:white;\">\n<mdb-navbar SideClass=\"navbar navbar-expand-xl navbar-light scrolling-navbar\"  >\n    <logo><a class=\"navbar-brand\" href=\"#\"><img src = \"../assets/img/systers-logo.png\" style=\"height: 50px;\"></a></logo>\n    <links>\n        <!-- Links -->\n        <ul class=\"navbar-nav ml-auto\" >\n            <li class=\"nav-item bold\">\n                <a class=\"nav-link waves-light active navl\" mdbWavesEffect routerLink=\"/\">Home<span class=\"sr-only\" >(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link waves-light navl\" mdbWavesEffect routerLink =\"/communities\" >Communities</a>\n            </li>\n        \n            <li class =\"nav-item\">\n                <a class = \"nav-link waves-light navl\" mdbWavesEffect routerLink = \"/dates\">Calendar</a>\n            </li>\n            <li class =\"nav-item\">\n                <a class = \"nav-link waves-light navl\" mdbWavesEffect routerLink = \"/contact\" >Contact Us</a>\n            </li>\n        </ul>\n        \n       \n    </links>\n    <!-- Collapsible content -->\n\n</mdb-navbar>\n</nav>\n<script>\n// Add active class to the current button (highlight it)\nvar nav = document.getElementsByClassName(\"nav-item\");\nfor( var j=0;j<nav.length;j++){\n    var btns = nav[j].getElementsByClassName(\"navl\");\nfor (var i = 0; i < btns.length; i++) {\n  btns[i].addEventListener(\"click\", function() {\n    var current = document.getElementsByClassName(\"active\");\n    current[0].className = current[0].className.replace(\" active\", \" \");\n    this.className += \" active\";\n  });\n}\n}\n\n</script>"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.scss":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mdb-navbar {\n  background-color: white; }\n\n.navl {\n  color: #54BCEB !important; }\n\n.navl:hover {\n  background-color: #54BCEB;\n  color: white !important; }\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/nav-bar/nav-bar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/success/success.component.html":
/*!************************************************!*\
  !*** ./src/app/success/success.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container\">\n<center><h1> Thank You for contacting us we will get back to you soon </h1></center>\n</div>"

/***/ }),

/***/ "./src/app/success/success.component.scss":
/*!************************************************!*\
  !*** ./src/app/success/success.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  margin: 100px;\n  color: #8d2165;\n  font-family: 'Source Sans Pro', sans-serif; }\n\n@media only screen and (max-width: 600px) {\n  h1 {\n    margin: 10px;\n    color: #8d2165;\n    font-family: 'Source Sans Pro', sans-serif; } }\n"

/***/ }),

/***/ "./src/app/success/success.component.ts":
/*!**********************************************!*\
  !*** ./src/app/success/success.component.ts ***!
  \**********************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SuccessComponent = (function () {
    function SuccessComponent() {
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! ./success.component.html */ "./src/app/success/success.component.html"),
            styles: [__webpack_require__(/*! ./success.component.scss */ "./src/app/success/success.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/assets/object.json":
/*!********************************!*\
  !*** ./src/assets/object.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, default */
/***/ (function(module) {

module.exports = [{"start":"2018-08-02","end":"2018-08-02","title":"Week 12 PR(s) Due","description":"<b>Submit your PR(s) for Week 12's Goals.</b>","location":"GitHub Repo(s)","color":"blue"},{"start":"2018-08-03","end":"2018-08-03","title":"Week 12 Wiki Report Due","description":"<b>Submit your Weekly Wiki Report for Week 12.</b>","location":"GitHub Wiki","color":"blue"},{"start":"2018-08-03","end":"2018-08-03","title":"Scrum Check-in Due","description":"\nTemplate:\n*What have you completed since the last check-in?*\n1. \n2. \n3. \n\n\n*What do you plan to complete by the next check-in?*\n1. \n2. \n3. \n\n*What is getting in your way?*\n1. \n2. \n3. \n\nPlace a :heavy_check_mark: when you've read this check-in. If there's something that you would want me to add on my agenda for this week, please comment in this thread.","color":"blue"},{"start":"2018-08-03","end":"2018-08-03","title":"GSoC Happy Hour","description":"<b>Icebreaker Questions:</b><br><ul><li></li><li><br></li></ul><br><br><b>Meeting Details:</b><br>Join from PC, Mac, Linux, iOS or Android: <a href=\"https://www.google.com/url?q=https%3A%2F%2Fzoom.us%2Fj%2F793825359&amp;sa=D&amp;usd=2&amp;usg=AFQjCNGB5iQWmqfRSKZkulK-d_aW25gkCQ\" target=\"_blank\">https://zoom.us/j/793825359</a><br>Join from Web Browser: <a href=\"https://www.google.com/url?q=https%3A%2F%2Fzoom.us%2Fwc%2Fjoin%2F793825359&amp;sa=D&amp;usd=2&amp;usg=AFQjCNGrmQHwqhr_wLipL70s_jwKY7lHaQ\" target=\"_blank\">https://zoom.us/wc/join/793825359</a><br><br><br><i>Questions stolen from:&nbsp;<a href=\"https://www.google.com/url?q=https%3A%2F%2Fwww.collaborationsuperpowers.com%2F44-icebreakers-for-virtual-teams%2F&amp;sa=D&amp;usd=2&amp;usg=AFQjCNFxzLzb58KYquKFg42XDfZExqZNkw\" target=\"_blank\">https://www.collaborationsuperpowers.com/44-icebreakers-for-virtual-teams/</a></i>","location":"https://zoom.us/j/793825359","color":"blue"},{"start":"2018-08-06","end":"2018-08-06","title":"Student Evaluations - Final","description":"Students submit their code, project summaries, and final evaluations of their mentors.","location":"https://summerofcode.withgoogle.com/","color":"blue"},{"start":"2018-08-06","end":"2018-08-06","title":"Week 12 Blog Post(s) Due","description":"<b>Post your Blog Post(s) for Week 12.</b>","location":"Personal Blog","color":"blue"},{"start":"2018-08-10","end":"2018-08-10","title":"Final Demos Due","color":"blue"},{"start":"2018-08-14","end":"2018-08-14","title":"Mentor Evaluations - Final","description":"\nMentors review student code samples and determine if the students have successfully completed their Google Summer of Code 2018 project.","location":"https://summerofcode.withgoogle.com/","color":"blue"},{"start":"2018-08-14","end":"2018-08-14","title":"LAST DAY TO SUBMIT CODE","color":"blue"},{"start":"2018-08-22","end":"2018-08-22","title":"Results Announced","description":"Students are notified of the pass/fail status of their Google Summer of Code 2018 projects.<br><span style=\"color: rgba(0, 0, 0, 0.87); font-family: Roboto, &quot;Helvetica Neue&quot;, sans-serif; font-size: 16px; background-color: rgb(255, 255, 255);\"></span>","location":"https://summerofcode.withgoogle.com/","color":"blue"},{"start":"2018-08-02","end":"2018-08-02","title":"1:1 Anumeha-Kanika","color":"red"},{"start":"2018-08-03","end":"2018-08-03","title":"Dinuka - Office hours ","location":"https://hangouts.google.com/call/fUDqmLVWR_yVzmFr3tQMAAEM","color":"red"},{"start":"2018-08-03","end":"2018-08-03","title":"May - Office Hours","description":"Scheduled time outside of regular open source meetings to meet with members.","location":"https://zoom.us/j/5896779964","color":"red"},{"start":"2018-08-03","end":"2018-08-03","title":"AMA with Baani","color":"red"},{"start":"2018-08-04","end":"2018-08-04","title":"GitHub Pages (All Teams) Weekly Meeting (All are welcome!)","description":"<b>Agenda:</b><br><ul><li>15 min ~ Baani Demo&nbsp;<ul><li>10 min ~ Feedback for Baani</li></ul></li><li>15 min ~ Anumeha Demo&nbsp;<ul><li>10 min ~ Feedback for Anumeha</li></ul></li><li>10 min ~ Buffer Time/Wrap Up</li></ul><br><b>Meeting Details:</b><br>Join Google Hangouts.","color":"red"},{"start":"2018-08-05","end":"2018-08-05","title":"Ancy Office hours","description":"https://hangouts.google.com/call/zLu3J6D8sNfK451dMVR7AAEE","color":"red"},{"start":"2018-08-06","end":"2018-08-06","title":"1:1 Dinuka Anumeha","description":"<b>Agenda:</b><br><a href=\"https://docs.google.com/document/d/1GDbLerYPf8Bj1HXE2iQeZ14KI-xQ7MuU6ZBkiPWeKK0/edit?usp=sharing\">https://docs.google.com/document/d/1GDbLerYPf8Bj1HXE2iQeZ14KI-xQ7MuU6ZBkiPWeKK0/edit?usp=sharing</a>","color":"red"},{"start":"2018-08-06","end":"2018-08-06","title":"Kanika - Office hours","color":"red"},{"start":"2018-08-07","end":"2018-08-07","title":"Ancy: Baani 1:1","color":"red"},{"start":"2018-08-07","end":"2018-08-07","title":"1:1 Bethany Baani","color":"red"},{"start":"2018-08-08","end":"2018-08-08","title":"1:1 Janice Baani","color":"red"},{"start":"2018-08-09","end":"2018-08-09","title":"Rupinder Office hours","color":"red"},{"start":"2018-08-09","end":"2018-08-09","title":"Bethany - Office Hours","color":"red"},{"start":"2018-08-10","end":"2018-08-10","title":"Bethany unavailable","color":"red"}];

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/anumeha/Documents/communities/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map