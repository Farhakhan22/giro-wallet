import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'https://demo.girofintech.cf/api';
  constructor(private http : HttpClient) { }
  register(user: any) {
    const headers = new HttpHeaders({'Accept':'application/json'});
    const options = { headers: headers, withCredintials: false };
    return this.http.post(`${this.url}/register`, user,options);
  }

  login(credentials: any): Observable <any> {
    const headers = new HttpHeaders({'Accept':'application/json'});
    const options = { headers: headers, withCredintials: false };
    return this.http.post(`${this.url}/login`, credentials,options)
    
  }
  logoutUser(){
    return new Promise((resolve, reject) => {
     
    })
  }
}
