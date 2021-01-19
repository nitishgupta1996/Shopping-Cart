import { ProductModel } from '../models/shopping-cart.models';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  // To Display products to user API
  getProducts(): Observable<ProductModel> {
    return this.http.get('https://shopinggg.herokuapp.com/product');
  }
}
