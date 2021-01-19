import { OrderPlaceModel } from './../models/shopping-cart.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlaceOrderService {

  constructor(private http: HttpClient) { }

  // Order placed item API
  getPlaceOrder(): Observable<OrderPlaceModel> {
    return this.http.post('https://shopinggg.herokuapp.com/order/create', { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pdGlzaDEyIiwiaWF0IjoxNjAwMzQ1MTM5fQ.5AtoUpjgeMqJH5ATSuBfDlXuuFH2zNqWE64gYFUCzcY' });
  }
}
