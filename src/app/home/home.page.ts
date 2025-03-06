import { Component, isStandalone, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';
import { CartService } from '../shared/services/cart.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,

})
export class HomePage implements OnInit {
  products: any[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  

  constructor(private productService: ProductService,private cartService: CartService) 
{}

  async ngOnInit() {
    this.products = await this.productService.getProducts();
    this.categories = await this.productService.getCategories();
  }

  async filterByCategory(category: string) {
    this.selectedCategory = category;
    this.products = await this.productService.getProductsByCategory(category);
  }
 
  async addToCart(product:any)
  {

    this.cartService.addToCart(product);
    
    console.log(`Producto agregado al carrito:`, product);
   alert("Producto agregado al carrito")
  }

 async removeFromCart(product: any, index: number) {
    product.removed = true; // Activa la animación
    setTimeout(() => {
      this.cartService.removeFromCart(product);
    }, 500); // Espera 500ms antes de eliminarlo realmente
  }


  
  async clearCart(product: any) {
    this.cartService.clearCart();

}


}