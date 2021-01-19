import { LoginModel } from './../models/shopping-cart.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // User login API
  getLogin(username: string, password: string): Observable<LoginModel> {
    return this.http.post('https://shopinggg.herokuapp.com/login', { username: username, password: password });
  }
}
