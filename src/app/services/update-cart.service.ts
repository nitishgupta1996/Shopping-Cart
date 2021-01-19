import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductAddModel } from '../models/shopping-cart.models';

@Injectable({
  providedIn: 'root'
})
export class UpdateCartService {

  constructor(private http: HttpClient) { }

  // To update quantity and price of cart items API
  getUpdateCart(cartProductQuantity: number, cartId: number): Observable<ProductAddModel> {
    return this.http.post('https://shopinggg.herokuapp.com/cart/updateCart', {
      cartProductQuantity: cartProductQuantity,
      cartId: cartId
    });
  }
}
