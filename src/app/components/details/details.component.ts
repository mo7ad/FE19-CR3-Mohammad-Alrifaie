import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iproducts } from 'src/app/Iproducts';
import { CartService } from 'src/app/cart.service';
import { products } from 'src/app/products';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product: Iproducts = {} as Iproducts;
  index: number = 0;

  constructor(private route: ActivatedRoute,private cartService : CartService) {

  }
  addToCart(){
    alert("added to the card")
    this.cartService.addToCart(this.product)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
    this.index = +params['indexFromRouting'];
    this.product = products[this.index]
    });
  }
  }


