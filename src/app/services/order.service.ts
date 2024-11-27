import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private orders: any[] = []; // Array to store orders

  // Add a new order
  addOrder(order: any) {
    this.orders.push(order);
  }

  // Retrieve all orders
  getOrders() {
    return this.orders;
  }
}
