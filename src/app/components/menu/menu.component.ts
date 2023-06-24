// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Params } from '@angular/router';
// import { Iproducts } from 'src/app/Iproducts';
// import { CartService } from 'src/app/cart.service';
// import { products } from 'src/app/products';

// @Component({
//   selector: 'app-menu',
//   templateUrl: './menu.component.html',
//   styleUrls: ['./menu.component.css']
// })
// export class MenuComponent implements OnInit {
//   products:Iproducts[]= products
//    product: Iproducts = {} as Iproducts;
//   index: number = 0;

//   constructor(private route: ActivatedRoute,private cartService : CartService) {

//   }
//   addToCart(){
//     alert("added to the card")
//     this.cartService.addToCart(this.product)
//   }

//   ngOnInit(): void {
//     this.route.params.subscribe((params:Params)=>{
//     this.index = +params['indexFromRouting'];
//     this.product = products[this.index]
//     });
//   }




// }
 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/Iproducts';
import { CartService } from 'src/app/cart.service';
import { products } from 'src/app/products';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products: Iproducts[] = products;
  
  product: Iproducts = {} as Iproducts;
  index: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartService) {}

  addToCart(product: Iproducts) {
    // alert("Added to the cart");
    this.cartService.addToCart(product);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.index = +params['indexFromRouting'];
      this.product = this.products[this.index];
    });
  }
}
