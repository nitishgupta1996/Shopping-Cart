import { ProductModel, ClearCartModel } from './../models/shopping-cart.models';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoveCartProductService {

  constructor(private http: HttpClient) { }

  // To delete a particular product in cart API
  getRemoveCartProducts(cartId: number): Observable<ProductModel> {
    return this.http.post('https://shopinggg.herokuapp.com/cart/clear', { cartId, token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pdGlzaDEyIiwiaWF0IjoxNjAwMzQ1MTM5fQ.5AtoUpjgeMqJH5ATSuBfDlXuuFH2zNqWE64gYFUCzcY' });
  }

  // To delete a whole cart API
  getRemoveCart(): Observable<ProductModel> {
    return this.http.post('https://shopinggg.herokuapp.com/cart/clear', { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pdGlzaDEyIiwiaWF0IjoxNjAwMzQ1MTM5fQ.5AtoUpjgeMqJH5ATSuBfDlXuuFH2zNqWE64gYFUCzcY' });
  }

  // To clear whole order summary API
  getRemoveSummary(): Observable<ClearCartModel> {
    return this.http.post('https://shopinggg.herokuapp.com/order/clear', { token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pdGlzaDEyIiwiaWF0IjoxNjAwMzQ1MTM5fQ.5AtoUpjgeMqJH5ATSuBfDlXuuFH2zNqWE64gYFUCzcY' });
  }
}
