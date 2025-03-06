import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false,
})
export class CartPage implements OnInit {
  cart: any[] = [];
  total: any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.loadCart();
  }

  private loadCart() {
    this.cart = this.cartService.getCart();
    this.total = this.cartService.gettotal();
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.loadCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCart();
  }

  getCartItems() {
    return this.cart;
  }

  gettotal() {
    return this.cartService.gettotal();
  }
}
