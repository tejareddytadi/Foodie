import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { OrdersService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
})
export class ViewCartComponent implements OnInit {
  cartItems: any[] = [];
  totalPrice: number = 0;
  deliveryForm: FormGroup;

  constructor(
    private cartService: CartService,
    private ordersService: OrdersService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // Initialize the reactive form
    this.deliveryForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      alternatePhone: [''],
      country: ['', Validators.required],
      instructions: [''],
    });
  }

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPrice = this.cartItems.reduce((sum, item) => sum + item.price, 0);
  }

  placeOrder() {
    if (this.cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
  
    // Mark all controls as touched to trigger validation
    this.deliveryForm.markAllAsTouched();
  
    // Check if the form is invalid
    if (this.deliveryForm.invalid) {
      const invalidFields = this.getInvalidFields();
      alert(`Please correct the following fields:\n${invalidFields.join('\n')}`);
      return;
    }
  
    // Original order placement logic remains intact
    this.ordersService.addOrder({
      items: [...this.cartItems],
      total: this.totalPrice,
      date: new Date().toLocaleString(),
      deliveryDetails: this.deliveryForm.value,
    });
  
    alert('Order placed successfully!');
    this.cartService.clearCart();
    this.cartItems = [];
    this.totalPrice = 0;
    this.router.navigate(['/view-orders']);
  }
  

  // Helper method to retrieve names of invalid fields
  private getInvalidFields(): string[] {
    const invalidFields: string[] = [];
    const controls = this.deliveryForm.controls;

    for (const name in controls) {
      if (controls[name].invalid) {
        // Push field name with custom readable labels
        switch (name) {
          case 'email':
            invalidFields.push('Email');
            break;
          case 'addressLine1':
            invalidFields.push('Address Line 1');
            break;
          case 'city':
            invalidFields.push('City');
            break;
          case 'state':
            invalidFields.push('State');
            break;
          case 'pincode':
            invalidFields.push('Pincode');
            break;
          case 'phone':
            invalidFields.push('Phone Number');
            break;
          case 'country':
            invalidFields.push('Country');
            break;
          default:
            invalidFields.push(name); // Default to the raw field name if no label is provided
        }
      }
    }

    return invalidFields;
  }
}
