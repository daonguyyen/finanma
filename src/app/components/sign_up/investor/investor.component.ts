import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'investor',
    templateUrl: 'investor.component.html'
})
export class InvestorComponent { 
    constructor(){
    window['verifyCallback'] = this.verifyCallback.bind(this);
  }

  displayRecaptcha(){
    var doc = <HTMLDivElement>document.getElementById('investorSignup');
    var script = document.createElement('script');
    script.innerHTML = '';
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    doc.appendChild(script);
  }

  verifyCallback(response:any){
    alert(response);
  }
 }
