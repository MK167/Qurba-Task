import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  readonly BaseUrl = environment.BaseUrl;
  apiUrlTable = 'products';
  constructor(private httpClient: HttpClient) { }


  // Get All
  // https://dummyjson.com/products?limit=100&skip=0
  // https://dummyjson.com/products/category/smartphones
  // https://dummyjson.com/products/categories

  GetAllCategory(category?: string[]): Observable<any> {
    if (category) {
      return this.httpClient.get(this.BaseUrl + this.apiUrlTable + '/category/' + category)
        .pipe(
          catchError(this.handleError)
        );
    }
    else {
      return this.httpClient.get(this.BaseUrl + this.apiUrlTable + '/categories')
        .pipe(
          catchError(this.handleError)
        );
    }
  }

  GetAllProducts(limit?: number): Observable<any> {
    if (limit) {
      let queryParams = new HttpParams();
      queryParams = queryParams.append("limit", limit);
      return this.httpClient.get(this.BaseUrl + this.apiUrlTable, { params: queryParams })
        .pipe(
          catchError(this.handleError)
        );
    }
    else {
      return this.httpClient.get(this.BaseUrl + this.apiUrlTable)
        .pipe(
          catchError(this.handleError)
        );
    }
  }




  // Handle API errors << You Can Add this Function as an Interceptor >>
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }


}
