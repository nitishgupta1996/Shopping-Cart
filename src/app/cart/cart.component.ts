import { ProductModel, RootObjectModel, ProductAddModel } from './../models/shopping-cart.models';
import { PlaceOrderService } from './../services/place-order.service';
import { UpdateCartService } from './../services/update-cart.service';
import { RemoveCartProductService } from './../services/remove-cart-product.service';
import { ShowCartService } from './../services/show-cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartData: any; // property to store api result
  removeItems: any; // property to remove items & cart
  cartTotal = 0; // property to hide or show empty cart
  isLoading: boolean; // property to hide or show loader
  totalCartValue = 0; // property to display total item price of cart

  constructor(
    private showCartService: ShowCartService,
    private removeCartProductService: RemoveCartProductService,
    private updateCartService: UpdateCartService,
    private placeOrderService: PlaceOrderService,
    private route: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.showCartData();
  }

  // method to display cart data & loader
  showCartData(): void {
    this.isLoading = true;
    this.showCartService.getCartDetails().subscribe((result: RootObjectModel) => {
      this.cartData = result.cartItems;
      this.cartTotal = result.cartItems.length;
      this.totalCartValue = result.totalCartValue;
      this.isLoading = false;
    });
  }

  // method to add item & price of cart
  onIncreaseItem(productId: number): void {
    this.cartData.forEach((element: ProductAddModel, index: number) => {
      if (element.cartId === productId) {
        this.cartData[index].cartProductQuantity = element.cartProductQuantity + 1;
        this.updateCartService.getUpdateCart(element.cartProductQuantity, productId).subscribe(() => {
          this.showCartData();
        });
      }
    });
  }

  // method to subtract item & price of cart
  onDecreaseItem(productId: number): void {
    this.cartData.forEach((element: ProductAddModel, index: number) => {
      if (element.cartId === productId) {
        this.cartData[index].cartProductQuantity = element.cartProductQuantity - 1;
        this.updateCartService.getUpdateCart(element.cartProductQuantity, productId).subscribe(() => {
          this.showCartData();
        });
      }
    });
  }

  // method to delete a product from a cart
  onRemoveProductsFromCart(cartId: number): void {
    this.removeCartProductService.getRemoveCartProducts(cartId).subscribe((res: ProductModel) => {
      this.removeItems = res;
      this.toastr.success('Deleted Successfully', 'Item');
      this.showCartData();
    });
  }

  // method to delete all the products from cart
  onRemoveCart(): void {
    this.removeCartProductService.getRemoveCart().subscribe((res: ProductModel) => {
      this.removeItems = res;
      this.toastr.success('Deleted Successfully', 'Cart');
      this.showCartData();
    });
  }

  // method to place order of cart
  onPlaceOrder(): void {
    this.placeOrderService.getPlaceOrder().subscribe(() => {
      this.toastr.success('Placed Successfully', 'Order');
      this.showCartData();
      this.route.navigate(['/order-summary']);
    });
  }
}

