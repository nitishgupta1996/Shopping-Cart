import { ProductModel, ProductAddModel } from './../models/shopping-cart.models';
import { AddCartService } from './../services/add-cart.service';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productItems: ProductModel; // property to store data of product api
  searchField: string; // property to filter data of products
  isLoading: boolean; // property to hide or show loader

  constructor(
    private productService: ProductService,
    private addCartService: AddCartService,
    private toastr: ToastrService,
    private route: Router) { }

  ngOnInit(): void {
    this.displayProducts();
  }

  // method to display products to user
  displayProducts(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe((result: ProductModel) => {
      this.productItems = result;
      this.isLoading = false;
    });
  }

  // method to add items in a cart
  onAddCart(items: ProductModel): void {
    const token = localStorage.getItem('token');
    this.addCartService.addCart(
      items.imageUrl, items.productName, items.productPrice).subscribe((result: ProductAddModel) => {
        console.log(result);
        if (result.message === 'Product already in cart' && token) {
          this.toastr.warning('Item is Already Exist', 'Exist');
        } else if (token) {
          this.toastr.success('Added Successfully', 'Item');
        } else if (!token) {
          this.toastr.info('Please login', 'First');
          this.route.navigate(['/login']);
        }
      });
  }

}
