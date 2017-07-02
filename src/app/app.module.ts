import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {routing, appRoutingProviders} from './app.routing';
import { AppComponent }  from './app.component';
import {FormsModule} from '@angular/forms';

import { HomeComponent} from './components/home/home.component';
import { SigninComponent} from './components/sign_in/signin.component';
import { SignupComponent} from './components/sign_up/signup.component';
import { IssuerComponent} from './components/sign_up/issuer/issuer.component';
import { InvestorComponent} from './components/sign_up/investor/investor.component';


@NgModule({
  imports:      [ BrowserModule, routing, FormsModule ],
  declarations: [ AppComponent, HomeComponent, SigninComponent, SignupComponent, IssuerComponent, InvestorComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    appRoutingProviders
  ]
})
export class AppModule { }
