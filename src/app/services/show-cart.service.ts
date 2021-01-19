import { RootObjectModel } from './../models/shopping-cart.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ShowCartService {

  constructor(private http: HttpClient) { }

  // To show cart data API
  getCartDetails(): Observable<RootObjectModel> {
    const token = localStorage.getItem('token');
    return this.http.post('https://shopinggg.herokuapp.com/cart', { token });
  }
}
