import { Component, OnInit } from '@angular/core';
import { PaginationInstance } from 'ngx-pagination';
import { Category } from 'src/app/Model/CategoryDTO';
import { Product } from 'src/app/Model/productsDTO';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  p: number = 1;
  total: number = 0;


  constructor(private productsService: ProductsService) {

  }


  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts() {
    this.productsService.GetAllProducts(100)
      .subscribe((product: any) => {
        this.products = product.products;
        this.total = product.total;
        console.log('data', product)
      })
  }

  getAllCategories() {
    this.productsService.GetAllCategory()
      .subscribe((category) => {
        this.categories = category;
        console.log('cat', this.categories)
      })
  }

  getProductsByCategoryID(category: string[]) {
    this.productsService.GetAllCategory(category)
      .subscribe((res) => {
        this.products = res.products;
        console.log('res', this.products)
      })
  }

  categoryFilter(category: any) {
    console.log('test', category)
    this.getProductsByCategoryID(category);
  }
}
