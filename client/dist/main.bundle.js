webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
//
// const routes: Routes = [];
//
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var pets_component_1 = __webpack_require__("./src/app/pets/pets.component.ts");
var pet_details_component_1 = __webpack_require__("./src/app/pet-details/pet-details.component.ts");
var pet_edit_component_1 = __webpack_require__("./src/app/pet-edit/pet-edit.component.ts");
var pet_new_component_1 = __webpack_require__("./src/app/pet-new/pet-new.component.ts");
var routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: dashboard_component_1.DashboardComponent },
    { path: 'contact_us', component: pets_component_1.PetsComponent },
    { path: 'about_us', component: pets_component_1.PetsComponent },
    { path: 'products/new', component: pet_new_component_1.PetNewComponent },
    // { path: 'edit', component: PetEditComponent },
    { path: 'products/edit/:id', component: pet_edit_component_1.PetEditComponent },
    // { path: 'details', component: PetDetailsComponent },
    { path: 'products/:id', component: pet_details_component_1.PetDetailsComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n    /* outline: 1px solid black; */\n    color: white;\n}\n\n.nav {\n    width: 1000px;\n    height: 50px;\n    background-color: #66bafa;\n    border-radius: 10px;\n    padding: 5px;\n}\n\nul {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n}\n\nli {\n    list-style-type: none;\n    margin-top: 15px;\n    color: white;\n    margin-right: 10px;\n    /* display: inline-block; */\n}\n\na {\n    text-decoration: none;\n}\n\nbutton {\n    width: 100px;\n    height: 40px;\n    color: white;\n    font-size: 12px;\n    background-color: purple;\n    border-radius: 10px;\n}\n\nh1 {\n    color: black;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Commerce Manager</h1>\n\n<ul class=\"nav\">\n    <li><a routerLink=\"/products\">Product List</a></li>\n    <li><a routerLink=\"/products/new\">Add Product</a></li>\n    <li><a routerLink=\"/about_us\">Our Story</a></li>\n    <li><a routerLink=\"/contact_us\">Contact Us</a></li>\n</ul>\n<!-- another way to add buttons! :) -->\n<!-- <button [routerLink]=\"['pets']\">Load Pets</button>\n<button [routerLink]=\"['edit']\">Load Pet-Edit</button> -->\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Modules
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
// import { CurrencyPipe } from '@angular/common';
// Components
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var pets_component_1 = __webpack_require__("./src/app/pets/pets.component.ts");
var pet_new_component_1 = __webpack_require__("./src/app/pet-new/pet-new.component.ts");
var pet_edit_component_1 = __webpack_require__("./src/app/pet-edit/pet-edit.component.ts");
var pet_details_component_1 = __webpack_require__("./src/app/pet-details/pet-details.component.ts");
// Service
var pet_service_1 = __webpack_require__("./src/app/pet.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                pets_component_1.PetsComponent,
                pet_new_component_1.PetNewComponent,
                pet_edit_component_1.PetEditComponent,
                pet_details_component_1.PetDetailsComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [
                pet_service_1.PetService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "table {\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n    width: 1010px;\n}\n\ntd, th {\n    border: 1px solid lavender;\n    text-align: left;\n    padding: 8px;\n}\n\ntr:nth-child(even) {\n    background-color: lavender;\n}\n\ndiv {\n    width: 1000px;\n    padding: 15px;\n}\n\n.body {\n    height: auto;\n}\n\n.button {\n    width: 100px;\n    height: 25px;\n    border-radius: 5px;\n    border: 1px solid black;\n}\n\nh2 {\n    font-weight: normal;\n}\n\na button {\n    font-size: 16px;\n}\n\nli {\n    list-style-type: none;\n}\n\nbutton {\n    width: 200px;\n    height: 40px;\n    color: white;\n    font-size: 12px;\n    background-color: purple;\n    border-radius: 10px;\n}\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Product List</h2>\n<nav>\n  <a routerLink=\"/products/new\"><button>Add Product</button></a>\n</nav>\n<br>\n<table>\n    <tr>\n        <th>Id</th>\n        <th>Name</th>\n        <th>Qty</th>\n        <th>Price</th>\n        <th>Actions</th>\n    </tr>\n    <tr *ngFor=\"let pet of pets\">\n        <td>{{pet._id}}</td>\n        <td>{{pet.name}}</td>\n        <td>{{pet.qty}}</td>\n        <td>{{pet.price | currency: 'USD':true:'1.2-2'}}</td>\n        <td> <a routerLink=\"/products/{{pet._id}}\">Details</a> | <a routerLink=\"/products/edit/{{pet._id}}\">Edit</a></td>\n    </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var pet_service_1 = __webpack_require__("./src/app/pet.service.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(ps) {
        this.ps = ps;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.pet = {
            name: "",
            type: "",
            desc: "",
            skill1: "",
            skill2: "",
            skill3: ""
        };
        this.savedPet = {};
        this.pets = this.getAllPets();
    };
    DashboardComponent.prototype.getAllPets = function () {
        var _this = this;
        var obs = this.ps.getAllPets();
        obs.subscribe(function (data) {
            _this.pets = data;
        });
    };
    DashboardComponent.prototype.createPet = function () {
        var _this = this;
        var obs = this.ps.createPet(this.pet);
        obs.subscribe(function (data) {
            console.log(data);
            _this.savedPet = data;
            _this.pet = {
                title: "",
                desc: "",
                completed: false
            };
        });
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [pet_service_1.PetService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/pet-details/pet-details.component.css":
/***/ (function(module, exports) {

module.exports = "span {\n    font-weight: bold;\n    font-size: 18px;\n}\n\n.tab {\n    margin-left: 25px;\n}\n\n.button {\n    width: 100px;\n    height: 40px;\n    color: white;\n    font-size: 12px;\n    background-color: #66bafa;\n    border-radius: 10px;\n}\n\n.grey {\n    background-color: silver;\n}\n\nh1 {\n    margin: 30px 0px;\n    color: red;\n}\n\n.error {\n    color: purple;\n}\n\n.red {\n    background-color: red;\n}\n"

/***/ }),

/***/ "./src/app/pet-details/pet-details.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"adopted\">Product successfully deleted</h1>\n<h2>Product Details</h2>\n<p *ngIf=\"pet == null\">Sorry, could not find product. Please try again.</p>\n<p class=\"error\" *ngIf=\"pet['qty']>0\">To delete a product, the quantity must be 0</p>\n\n<p *ngIf=\"pet['name']\"><span>Name: </span>{{pet[\"name\"]}}</p>\n<p *ngIf=\"pet['qty']\"><span>Qty: </span>{{pet[\"qty\"]}}</p>\n<p *ngIf=\"pet['price']\"><span>Price: </span>{{pet[\"price\"]|currency}}</p>\n<!-- <p *ngIf=\"pet['skill1']\"><span>Skills: </span>\n    <p class=\"tab\" *ngIf=\"pet['skill1']\">{{pet[\"skill1\"]}}</p>\n    <p class=\"tab\" *ngIf=\"pet['skill2']\">{{pet[\"skill2\"]}}</p>\n    <p class=\"tab\" *ngIf=\"pet['skill3']\">{{pet[\"skill3\"]}}</p> -->\n\n<!-- <p *ngIf=\"pet['likes']>=0\"><span>Likes: </span>{{pet[\"likes\"]}}</p> -->\n\n<!-- {{pet|json}} -->\n\n<button class=\"button red\" *ngIf=\"pet['qty']==0\" (click)=\"adoptPet()\">DELETE</button>\n<button class=\"button grey\" *ngIf=\"pet['qty']>0\">DELETE</button>\n<!-- <button class=\"button\" (click)=\"adoptPet()\">Remove from Database</button> -->\n<a routerLink=\"/products\"><button class=\"button\">BACK</button></a>\n<!-- <p>{{liked|json}}</p> -->\n"

/***/ }),

/***/ "./src/app/pet-details/pet-details.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var pet_service_1 = __webpack_require__("./src/app/pet.service.ts");
var PetDetailsComponent = /** @class */ (function () {
    function PetDetailsComponent(route, ps, router) {
        this.route = route;
        this.ps = ps;
        this.router = router;
    }
    PetDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.liked = false;
        this.adopted = false;
        this.route.params.subscribe(function (params) {
            // console.log(typeof(params['id'])); // string! -> use this!!!! :)
            _this.id = +params['id'];
            // console.log(typeof(this.id)); // number! but becomes NaN!!!! :(
            var obs = _this.ps.showPet(params['id']);
            // console.log(obs); // Observable{...}
            obs.subscribe(function (data) {
                console.log("GOT BACK DATA");
                if (data["error"]) {
                    console.log(data["error"]);
                    _this.errors = [];
                    for (var x in data["error"]["errors"]) {
                        console.log(data["error"]["errors"][x]); // object, object, object
                        console.log(data["error"]["errors"][x]["message"]);
                        _this.errors.push(data["error"]["errors"][x]["message"]);
                    }
                    console.log(_this.errors);
                }
                else {
                    console.log(data);
                    _this.pet = data;
                }
            });
        });
    };
    PetDetailsComponent.prototype.addLike = function () {
        console.log("liked!");
        this.liked = true;
        this.pet.likes++;
        this.updatePet();
    };
    PetDetailsComponent.prototype.adoptPet = function () {
        var _this = this;
        console.log("adopting pet...soon to remove from database");
        this.route.params.subscribe(function (params) {
            var obs = _this.ps.removePet(params['id']);
            obs.subscribe(function (data) {
                console.log("receiving data from db...");
                if (data) {
                    console.log("dog successfully removed from database");
                    _this.adopted = true;
                    _this.waitThenGoHome();
                }
                else {
                    console.log("there was an error in removing dog");
                }
            });
        });
    };
    PetDetailsComponent.prototype.updatePet = function () {
        var _this = this;
        console.log("beginning to update pet...");
        console.log("current pet is " + this.pet);
        this.route.params.subscribe(function (params) {
            var obs = _this.ps.updatePet(params['id'], _this.pet);
            obs.subscribe(function (data) {
                console.log("receiving data from db...");
                if (data["error"]) {
                    console.log("there was an error");
                }
                else {
                    console.log("DATA: " + data);
                    _this.pet = data;
                }
            });
        });
    };
    PetDetailsComponent.prototype.goToDetailsPage = function () {
        this.router.navigate(["/details/" + this.id]);
    };
    PetDetailsComponent.prototype.goHome = function () {
        this.router.navigate(['/products']);
    };
    PetDetailsComponent.prototype.waitThenGoHome = function () {
        var _this = this;
        setTimeout(function () { _this.goHome(); }, 2000);
    };
    PetDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-pet-details',
            template: __webpack_require__("./src/app/pet-details/pet-details.component.html"),
            styles: [__webpack_require__("./src/app/pet-details/pet-details.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, pet_service_1.PetService, router_1.Router])
    ], PetDetailsComponent);
    return PetDetailsComponent;
}());
exports.PetDetailsComponent = PetDetailsComponent;


/***/ }),

/***/ "./src/app/pet-edit/pet-edit.component.css":
/***/ (function(module, exports) {

module.exports = "* {\n    /* outline: 1px solid black; */\n}\n\n.button {\n    width: 100px;\n    height: 40px;\n    color: white;\n    font-size: 12px;\n    background-color: #66bafa;\n    border-radius: 10px;\n}\n\n.purple {\n    color: purple;\n}\n\nli {\n    list-style-type: none;\n}\n\n.grey {\n    background-color: silver;\n}\n\n.green {\n    background-color: #98ff98;\n}\n\n.error {\n    color: purple;\n    display: inline-block;\n}\n\nfieldset {\n    width: 980px;\n    border-radius: 10px;\n}\n\na {\n    text-decoration: none;\n    color: white;\n    padding: 12px 25px;\n}\n"

/***/ }),

/***/ "./src/app/pet-edit/pet-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"new\">\n\n\n    <!-- <p>Pet: {{pet | json}}</p>\n    <p>savedPet: {{savedPet | json}}</p>\n    <p>data: {{data | json}}</p>\n    <p>errors: {{errors | json}}</p> -->\n\n    <!-- <div *ngIf=\"pet\">\n        <p>{{pet|json}}</p>\n    </div> -->\n\n    <fieldset>\n        <h2>Update Product</h2>\n        <div class=\"error\" *ngIf=\"!name.valid\">Products must contain a name at least 3 characters long</div><br>\n        <div class=\"error\" *ngIf=\"!qty.valid\">Product must contain a quantity</div><br>\n        <div class=\"error\" *ngIf=\"!price.valid\">Product must contain a price</div><br>\n        <form (submit)=\"updatePet()\">\n            <label for=\"\">Name</label><br>\n            <input type=\"text\" name=\"name\"\n                required\n                minlength=\"3\"\n                [(ngModel)]=\"pet.name\"\n                #name=\"ngModel\"\n                value=\"{{pet.name}}\">\n            <!-- {{ name.errors | json }}\n            {{ name.valid | json }} -->\n            <br>\n\n            <label for=\"\">Qty</label><br>\n            <input type=\"number\"name=\"qty\"\n                required\n                min=\"0\"\n                [(ngModel)]=\"pet.qty\"\n                #qty=\"ngModel\"\n                value=\"{{pet.qty}}\">\n            <!-- {{ qty.errors | json }}\n            {{ qty.valid | json }} -->\n            <br>\n\n            <label for=\"\">Price</label><br>\n            <input type=\"number\"name=\"price\"\n                min=\"0.01\"\n                step=\"0.01\"\n                required\n                min=\"0\"\n                [(ngModel)]=\"pet.price\"\n                #price=\"ngModel\"\n                value=\"{{pet.price}}\"><br><br>\n            <!-- {{ price.errors | json }}\n            {{ price.valid | json }} -->\n\n            <!-- <h4>ABC</h4>\n            <ul>\n                <li><label for=\"\">1: </label>\n                <input type=\"text\"[(ngModel)]=\"pet.skill1\" name=\"skill1\" value=\"{{pet.skill1}}\"></li>\n                <li><label for=\"\">2: </label>\n                <input type=\"text\"[(ngModel)]=\"pet.skill2\" name=\"skill2\" value=\"{{pet.skill2}}\"></li>\n                <li><label for=\"\">3: </label>\n                <input type=\"text\"[(ngModel)]=\"pet.skill3\" name=\"skill3\" value=\"{{pet.skill3}}\"></li>\n            </ul> -->\n\n            <input class=\"green\" *ngIf=\"name.valid && qty.valid && price.valid\" class=\"button\" type=\"submit\" name=\"\" value=\"UPDATE\">\n            <!-- <button class=\"button\" (click)=\"reset()\">RESET</button> -->\n            <a class=\"button\" href=\"/products/edit/{{pet._id}}\">RESET</a>\n            <!-- <a routerLink=\"/products/edit/{{pet._id}}\"><button class=\"button\">reset</button></a> -->\n            <!-- <button class=\"button\" (click)=\"reset()\">RESET</button> -->\n        </form>\n    </fieldset>\n    <br>\n</div>\n"

/***/ }),

/***/ "./src/app/pet-edit/pet-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var pet_service_1 = __webpack_require__("./src/app/pet.service.ts");
var PetEditComponent = /** @class */ (function () {
    function PetEditComponent(route, ps, router) {
        this.route = route;
        this.ps = ps;
        this.router = router;
        this.errors = [];
        this.valid = false;
    }
    PetEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("inside Edit constructor...");
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            // console.log(typeof(params['id'])); // string! -> use this!!!! :)
            // this.id = +params['id'];
            // console.log(typeof(this.id)); // number! but becomes NaN!!!! :(
            var obs = _this.ps.showPet(params['id']);
            // console.log(obs); // Observable...
            obs.subscribe(function (data) {
                console.log("GOT BACK DATA");
                if (data["error"]) {
                    console.log(data["error"]);
                    _this.errors = [];
                    for (var x in data["error"]["errors"]) {
                        console.log(data["error"]["errors"][x]); // object, object, object
                        console.log(data["error"]["errors"][x]["message"]);
                        _this.errors.push(data["error"]["errors"][x]["message"]);
                    }
                    console.log(_this.errors);
                }
                else {
                    console.log("no errors. successfully received data");
                    console.log(data);
                    _this.pet = data;
                    _this.original = data;
                }
            });
        });
    };
    PetEditComponent.prototype.updatePet = function () {
        var _this = this;
        console.log("beginning to update pet...");
        console.log("current pet is " + this.pet);
        this.route.params.subscribe(function (params) {
            var obs = _this.ps.updatePet(params['id'], _this.pet);
            obs.subscribe(function (data) {
                console.log("receiving data from db...");
                if (data["error"]) {
                    console.log("there was an error");
                }
                else {
                    console.log("DATA: " + data);
                    console.log("redirecting to Details page...");
                    _this.goHome();
                }
            });
        });
    };
    PetEditComponent.prototype.goHome = function () {
        this.router.navigate(["/products"]);
    };
    // reset(){
    //     this.pet = this.original;
    // }
    PetEditComponent.prototype.reset = function () {
        this.router.navigate(["/products/" + this.pet._id]);
        // this.router.navigate([`/products/edit/${this.pet._id}`]);
    };
    PetEditComponent = __decorate([
        core_1.Component({
            selector: 'app-pet-edit',
            template: __webpack_require__("./src/app/pet-edit/pet-edit.component.html"),
            styles: [__webpack_require__("./src/app/pet-edit/pet-edit.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, pet_service_1.PetService, router_1.Router])
    ], PetEditComponent);
    return PetEditComponent;
}());
exports.PetEditComponent = PetEditComponent;


/***/ }),

/***/ "./src/app/pet-new/pet-new.component.css":
/***/ (function(module, exports) {

module.exports = ".button {\n    width: 100px;\n    height: 40px;\n    color: white;\n    font-size: 12px;\n    background-color: #66bafa;\n    border-radius: 10px;\n}\n\n.error {\n    color: purple;\n    display: inline-block;\n}\n\nh3{\n    font-weight: normal;\n}\n\nli {\n    list-style-type: none;\n}\n\nfieldset {\n    width: 980px;\n    border-radius: 10px;\n}\n"

/***/ }),

/***/ "./src/app/pet-new/pet-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"new\">\n\n\n    <div *ngIf=\"errors.length > 0\">\n        <p class=\"error \"*ngFor=\"let error of errors\">{{error}}</p>\n    </div>\n\n\n    <fieldset>\n        <h2>New Product</h2>\n        <!-- <legend>Add Pet</legend> -->\n        <div class=\"error\" *ngIf=\"!name.valid\">Product must contain a name</div><br>\n        <div class=\"error\" *ngIf=\"!qty.valid\">Product must contain a quantity</div><br>\n        <div class=\"error\" *ngIf=\"!price.valid\">Product must contain a price</div><br><br>\n\n        <form (submit)=\"createPet()\">\n            <label for=\"\">Name</label><br>\n            <input type=\"text\" name=\"name\"\n                required\n                minlength=\"3\"\n                [(ngModel)]=\"pet.name\"\n                #name=\"ngModel\"\n                value=\"{{pet.name}}\">\n            <!-- {{ name.errors | json }}\n            {{ name.valid | json }} -->\n            <br>\n\n            <label for=\"\">Qty</label><br>\n            <input type=\"number\" name=\"qty\"\n                required\n                min=\"0\"\n                [(ngModel)]=\"pet.qty\"\n                #qty=\"ngModel\"\n                value=\"{{pet.qty}}\">\n            <!-- {{ qty.errors | json }}\n            {{ qty.valid | json }} -->\n            <br>\n\n            <!-- <input type=\"number\" min=\"0.01\" step=\"0.01\" -->\n\n\n            <label for=\"\">Price</label><br>\n            <input type=\"number\" name=\"price\"\n                min=\"0.01\"\n                step=\"0.01\"\n                required\n                min=\"0\"\n                [(ngModel)]=\"pet.price\"\n                #price=\"ngModel\"\n                value=\"{{pet.price}}\"><br><br>\n            <!-- {{ price.errors | json }}\n            {{ price.valid | json }} -->\n            <!-- <h4>ABC</h4>\n            <ul>\n                <li><label for=\"\">1: </label>\n                <input type=\"text\"[(ngModel)]=\"pet.skill1\" name=\"skill1\" value=\"{{pet.skill1}}\"></li>\n                <li><label for=\"\">2: </label>\n                <input type=\"text\"[(ngModel)]=\"pet.skill2\" name=\"skill2\" value=\"{{pet.skill2}}\"></li>\n                <li><label for=\"\">3: </label>\n                <input type=\"text\"[(ngModel)]=\"pet.skill3\" name=\"skill3\" value=\"{{pet.skill3}}\"></li>\n            </ul> -->\n\n            <input *ngIf=\"name.valid && price.valid && qty.valid\" class=\"button\" type=\"submit\" name=\"\" value=\"CREATE\">\n            <a routerLink=\"/products\"><button class=\"button\">CANCEL</button></a>\n        </form>\n    </fieldset>\n    <br>\n</div>\n"

/***/ }),

/***/ "./src/app/pet-new/pet-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var pet_service_1 = __webpack_require__("./src/app/pet.service.ts");
var PetNewComponent = /** @class */ (function () {
    function PetNewComponent(ps, router) {
        this.ps = ps;
        this.router = router;
    }
    PetNewComponent.prototype.ngOnInit = function () {
        this.pet = {
            name: "",
            type: "",
            desc: "",
            skill1: "",
            skill2: "",
            skill3: ""
        };
        this.savedPet = {};
        this.pets = [];
        this.errors = [];
    };
    PetNewComponent.prototype.goHome = function () {
        this.router.navigate(['/products']);
    };
    PetNewComponent.prototype.createPet = function () {
        var _this = this;
        var obs = this.ps.createPet(this.pet);
        obs.subscribe(function (data) {
            console.log("GOT BACK DATA");
            // console.log(`DATA: ${data}`);
            if (data["error"]) {
                // for (let d in data["error"]){
                //     console.log(`d is ${d}`);
                //     console.log(`data["error"] is ${data["error"]}`);
                //     console.log(typeof(data["error"][d]));
                // }
                // console.log(typeof(data["error"]["errors"]));
                _this.errors = [];
                for (var x in data["error"]["errors"]) {
                    console.log(data["error"]["errors"][x]); // object, object, object
                    console.log(data["error"]["errors"][x]["message"]);
                    _this.errors.push(data["error"]["errors"][x]["message"]);
                }
            }
            else {
                _this.data = data;
                _this.pet = {
                    title: "",
                    desc: "",
                    completed: false
                };
                _this.goHome();
            }
        });
    };
    PetNewComponent = __decorate([
        core_1.Component({
            selector: 'app-pet-new',
            template: __webpack_require__("./src/app/pet-new/pet-new.component.html"),
            styles: [__webpack_require__("./src/app/pet-new/pet-new.component.css")]
        }),
        __metadata("design:paramtypes", [pet_service_1.PetService, router_1.Router])
    ], PetNewComponent);
    return PetNewComponent;
}());
exports.PetNewComponent = PetNewComponent;


/***/ }),

/***/ "./src/app/pet.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var PetService = /** @class */ (function () {
    function PetService(_http) {
        this._http = _http;
    }
    PetService.prototype.getAllPets = function () {
        return this._http.get("/api/pets");
    };
    PetService.prototype.createPet = function (pet) {
        return this._http.post("/api/pets", pet);
    };
    PetService.prototype.showPet = function (id) {
        return this._http.get("/api/pets/" + id, id); // YES!!!!!
    };
    PetService.prototype.updatePet = function (id, pet) {
        // return this._http.put("/api/pets/:id", id ); // WRONG!!!!
        return this._http.put("/api/pets/" + id, pet); // RIGHT!
    };
    PetService.prototype.removePet = function (id) {
        return this._http.delete("/api/pets/" + id, id);
    };
    PetService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PetService);
    return PetService;
}());
exports.PetService = PetService;
// module.exports = (app) => {
//     // all my routes
//     app.get('/api/', Pets.index);
//     app.get('/api/pets', Pets.index);
//     app.post('/api/pets', Pets.create);
//     app.get('/api/pets/:id', Pets.show);
//     app.put('/api/pets/:id', Pets.update);
//     app.delete('/api/pets/:id', Pets.destroy);
//     app.all("*", Pets.all);
//
// }


/***/ }),

/***/ "./src/app/pets/pets.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pets/pets.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Coming soon...\n</p>\n"

/***/ }),

/***/ "./src/app/pets/pets.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PetsComponent = /** @class */ (function () {
    function PetsComponent() {
    }
    PetsComponent.prototype.ngOnInit = function () {
    };
    PetsComponent = __decorate([
        core_1.Component({
            selector: 'app-pets',
            template: __webpack_require__("./src/app/pets/pets.component.html"),
            styles: [__webpack_require__("./src/app/pets/pets.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PetsComponent);
    return PetsComponent;
}());
exports.PetsComponent = PetsComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map