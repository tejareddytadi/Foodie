import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService],
  imports: [CommonModule],
})
export class MenuComponent implements OnInit {
  menuItems: any[] = [];

  constructor(
    private menuService: MenuService,
    private cartService: CartService // Inject CartService
  ) {}

  ngOnInit() {
    this.menuService.getMenuItems().subscribe((data) => {
      this.menuItems = data;
    });
  }

  // Add item to the cart
  addToCart(item: any) {
    this.cartService.addToCart(item); // Use the service to add the item
    alert(`${item.name} has been added to the cart!`);
  }
}
