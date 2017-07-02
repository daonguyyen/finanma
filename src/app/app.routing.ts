import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {SigninComponent} from './components/sign_in/signin.component';
import {SignupComponent} from './components/sign_up/signup.component';
import {IssuerComponent} from './components/sign_up/issuer/issuer.component';
import {InvestorComponent} from './components/sign_up/investor/investor.component';


const appRoutes : Routes = [
    {path: '',component: HomeComponent},
    { path: 'signin', component: SigninComponent },
    {path: 'signup',component: SignupComponent},
    {path: 'issuer', component: IssuerComponent},
    {path: 'investor', component: InvestorComponent},
    

];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
