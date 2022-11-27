import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { login } from '../Model/loginDTO';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

export class AuthService {


  isLoggedIn: any;

  readonly BaseUrl = environment.BaseUrl;
  apiUrlTable = 'auth';

  constructor(private httpClient: HttpClient) {
    if (sessionStorage.getItem('isLoggedIn')) {
      this.isLoggedIn = sessionStorage.getItem('isLoggedIn');
    }
    else {
      this.isLoggedIn = false;
    }
  }


  // POST
  loginAuth(data: login): Observable<any> {
    return this.httpClient.post(this.BaseUrl + this.apiUrlTable + '/login', JSON.stringify(data), httpOptions).pipe(
      catchError(this.handleError)
    );
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

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.clear();
    sessionStorage.clear();
    sessionStorage.removeItem('isLoggedIn');
    this.isLoggedIn = false;
  }
}


