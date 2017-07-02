import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'issuer',
    templateUrl: 'issuer.component.html'
})
export class IssuerComponent { 
    public Types = [
        {Id:1,Name:"Fund Management service"},
        {Id:2,Name:"Non Fund Management service"} 
        ];
 }
