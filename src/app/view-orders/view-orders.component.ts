import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../services/order.service'; // Correct import

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ViewOrdersComponent implements OnInit {
  orders: any[] = []; // Array to hold all orders

  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    this.orders = this.ordersService.getOrders(); // Retrieve all orders
  }
}
