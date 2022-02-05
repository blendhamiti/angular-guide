import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[];

  constructor(private http: HttpClient) {
    this.items = [];
  }

  getItems = () => this.items;

  addToCart(item: Product) {
    this.items.push(item);
  }

  clearCart() { this.items = []; }

  getShoppingPrices = () => this.http.get<{ type: string, price: number }[]>("/assets/shipping.json");

}
