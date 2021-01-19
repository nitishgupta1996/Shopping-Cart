import { OrderSummaryService } from './../services/order-summary.service';
import { RemoveCartProductService } from './../services/remove-cart-product.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderSummaryModel } from '../models/shopping-cart.models';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  orderData: OrderSummaryModel; // property to store order summary api data
  emptyCart: number; // property to hold length to show empty order summary

  constructor(
    private clearSummaryService: RemoveCartProductService,
    private orderSummaryService: OrderSummaryService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.orderSummary();
  }

  // method to display order summary details
  orderSummary(): void {
    this.orderSummaryService.getOrderSummary().subscribe((result: OrderSummaryModel) => {
      this.orderData = result;
      this.emptyCart = result.length;
    });
  }

  // method to clear order summary data
  onClearSummary(): void {
    this.clearSummaryService.getRemoveSummary().subscribe(() => {
      this.toastr.success('Cleared Successfully', 'Summary');
      this.orderSummary();
    });
  }

}
