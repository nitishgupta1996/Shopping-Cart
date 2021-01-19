import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderSummaryModel } from '../models/shopping-cart.models';

@Injectable({
  providedIn: 'root'
})
export class OrderSummaryService {

  constructor(private http: HttpClient) { }

  // order summary details API
  getOrderSummary(): Observable<OrderSummaryModel> {
    const token = localStorage.getItem('token');
    return this.http.post('https://shopinggg.herokuapp.com/order', { token: token });
  }
}
