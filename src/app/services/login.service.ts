import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable ()
 export class LoginService {
     private apiUrl = "http://beta.finanma.com/sign-in";

     constructor (private _http: Http){

     }
     Getlist() : Observable<any[]> {
        return this._http.get(this.apiUrl).map((response: Response)=>response.json())
     }
 }