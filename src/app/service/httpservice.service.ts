import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../User';
import { AuthConstants } from '../config/Auth-Constant';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  constructor(private http : HttpClient,private auth:AuthService) { }

  public getUserDetails(): Observable <any> {
    const token = localStorage.getItem('token')
    console.log(token,">>>>>>>>>>>")
    
      const httpOptions = {
      headers : new HttpHeaders({
        'Accept':'application/json',
        'Authorization': 'Bearer ' + window.localStorage.getItem('token') 
       
      })
    };
    
    return this.http.get<User[]>('https://demo.girofintech.cf/api/user', httpOptions)
  }
  // loginservice(postData : any): Observable <string> {
  //  return  this.auth.login(postData)
  // }
  public postWalletData(user :any): Observable<any>{
    const token = localStorage.getItem('token')
  //  console.log(token,">>>>>>>>>>>")
    const httpOptions = {
      headers : new HttpHeaders({
        'Accept':'application/json',
        'Authorization': 'Bearer ' + window.localStorage.getItem('token') 
      })
    };
    return this.http.post('https://demo.girofintech.cf/api/pay',user,httpOptions)
  }
  logoutUser(){
    return new Promise((resolve, reject) => {
      if(AuthConstants.AUTH){
        localStorage.removeItem('token')
        
      }else{
        
      }
    })
  }
}
