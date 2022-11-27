import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/Model/CartDTO';
import { Product, RootObject } from 'src/app/Model/productsDTO';
import { CartService } from 'src/app/Services/cart.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() product!: Product;
  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
  }

  addProductToCart() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: 1
    }
    console.log('car', cartItem)
    this.cartService.setCartItem(cartItem);
  }

}
