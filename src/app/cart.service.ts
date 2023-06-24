import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Iproducts[] = [];

  constructor() { }

  addToCart(obj: Iproducts) {
    this.cart.push(obj);
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }

  calculateTotal() {
    let total: number = 0;
    for (let value of this.cart) {
      total = total + value.price;
    }
    return total;
  }
  calculateDiscount() {
    let discount: number = 0;
    let total: number = this.calculateTotal();
    discount = total + (total * 0.1);
    return discount;
  }
}
