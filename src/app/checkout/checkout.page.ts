import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../shared/services/cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
  standalone: false,
})
export class CheckoutPage {
  cart: any[] = [];

  constructor(private cartService: CartService, private router: Router) {
    this.cart = this.cartService.getCart();
  }

  completePurchase() {
    alert('Pago exitoso');
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }
  

  
}
