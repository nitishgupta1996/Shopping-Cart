import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductAddModel } from '../models/shopping-cart.models';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {

  constructor(private http: HttpClient) { }

  // Add a product to cart API
  addCart(cartProductimageUrl: string, cartProductName: string, cartProductPrice: number): Observable<ProductAddModel> {
    console.log(cartProductimageUrl, cartProductName, cartProductPrice);
    const token = localStorage.getItem('token');
    return this.http.post('https://shopinggg.herokuapp.com/cart/createCart', {
      token, cartProductimageUrl, cartProductName, cartProductPrice
    });
  }
}
