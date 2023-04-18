import { LoginResponsePayload } from './../login/loginResponsePayload';
import { LoginRequestPayload } from './../login/LoginRequestPayload';
import { SignupRequestPayload } from './../signup/signup-request.payload';
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient:HttpClient,private localStorageService:LocalStorageService) { }

  signUp(signupRequestPayload:SignupRequestPayload):Observable<any>{
   return this.httpClient.post('http://localhost:8041/api/auth/signup'
    ,signupRequestPayload,{responseType:'text'})

  }

  login(loginRequestPayload:LoginRequestPayload): Observable<boolean> {
    return this.httpClient.post<LoginResponsePayload>('http://localhost:8041/api/auth/login',loginRequestPayload)
      .pipe(map(data => {
        this.localStorageService.store('authenticationToken', data.authenticationToken);
        this.localStorageService.store('username', data.username);
        this.localStorageService.store('refreshToken', data.refreshToken);
        this.localStorageService.store('expiresAt', data.expiresAt);
        return true;
      }));
  }

 }
  

