import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { NewUser } from '../entities/new-user';
import { JwtDto } from '../entities/jwt-dto';
import { LoginUser } from '../entities/login-user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  // authUrl = 'Http://localhost:8080/auth/';
  authUrl = 'https://backend-ap-yky6.onrender.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public new (newUser: NewUser) : Observable<any>{
    return this.httpClient.post<JwtDto>(this.authUrl + 'create', newUser);
  }

  public login (loginUser: LoginUser) : Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authUrl + 'login', loginUser);
  }
}
