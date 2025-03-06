import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartKey = 'cart';
  private cart: any[] = [];

  constructor() {
    this.loadCart();
  }

  private loadCart() {
    const cart = localStorage.getItem(this.cartKey);
    this.cart = cart ? JSON.parse(cart) : [];
  }

  private saveCart() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
  }

  getCart() {
    return this.cart;
  }

  addToCart(product: any) {
    this.cart.push(product);
    this.saveCart();
  }

  removeFromCart(product: any) {
    this.cart = this.cart.filter(item => item.id !== product.id);
    this.saveCart();
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }

  getCartItems() {
    return this.cart;
  }

  gettotal() {
    return this.cart.length;
  }
}
