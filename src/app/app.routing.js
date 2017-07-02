"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/home/home.component");
var signin_component_1 = require("./components/sign_in/signin.component");
var signup_component_1 = require("./components/sign_up/signup.component");
var issuer_component_1 = require("./components/sign_up/issuer/issuer.component");
var investor_component_1 = require("./components/sign_up/investor/investor.component");
var appRoutes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'issuer', component: issuer_component_1.IssuerComponent },
    { path: 'investor', component: investor_component_1.InvestorComponent },
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map