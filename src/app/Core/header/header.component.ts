import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoginPage = true;

  cartCount: number = 0;
  users: any;
  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.cartCount = cart?.items?.length ?? 0;
    });
  }

  constructor(private cartService: CartService) {
    if (localStorage.getItem('isLoggIN') == undefined) {
      this.isLoginPage = true;
    }
    else {
      this.isLoginPage = false;
      this.users = JSON.parse(localStorage.getItem('userprofile') || '{}');
      console.log('user', this.users);
    }
  }

}
