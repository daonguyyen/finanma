"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var home_component_1 = require("./components/home/home.component");
var signin_component_1 = require("./components/sign_in/signin.component");
var signup_component_1 = require("./components/sign_up/signup.component");
var issuer_component_1 = require("./components/sign_up/issuer/issuer.component");
var investor_component_1 = require("./components/sign_up/investor/investor.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_1.routing, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, signin_component_1.SigninComponent, signup_component_1.SignupComponent, issuer_component_1.IssuerComponent, investor_component_1.InvestorComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [
            app_routing_1.appRoutingProviders
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map