import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoginRequest, RegisterRequest} from '../models/AuthRequestDTO';

const AUTH_API = 'http://localhost:8080/api/auth'

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private http = inject(HttpClient)

  public login(user: LoginRequest): Observable<any> {
    return this.http.post(`${AUTH_API}/signin`, {
      username: user.username,
      password: user.password
    })
  }

  public register(user: RegisterRequest): Observable<any> {
    return this.http.post(`${AUTH_API}/signup`, {
      email: user.email,
      username: user.username,
      firstname: user.firstname,
      lastname: user.lastname,
      bio: user.bio,
      password: user.password,
      confirmPassword: user.confirmPassword
    })
  }
}
