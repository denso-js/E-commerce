import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({ providedIn: 'root' })
export class ProductService {
  apiUrl = 'https://fakestoreapi.com/products';

  async getProducts() {
    const response = await axios.get(this.apiUrl);
    return response.data;
  }

  async getCategories() {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    return response.data;
  }

  async getProductsByCategory(category: string) {
    const response = await axios.get(`${this.apiUrl}/category/${category}`);
    return response.data;
  }

}
