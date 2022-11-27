import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './Core/footer/footer.component';
import { HeaderComponent } from './Core/header/header.component';
import { LoginComponent } from './Auth/login/login.component';
import { ProductsComponent } from './Components/products/products.component';
import { CategoryListComponent } from './Components/category-list/category-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CartService } from './Services/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ProductsComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private cartService: CartService) {
    this.cartService.intialCartLocalStorage();
  }
}
