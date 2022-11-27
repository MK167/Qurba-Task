import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { login, user } from 'src/app/Model/loginDTO';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogin: boolean = false;
  currentRoute: any;
  authForm!: FormGroup;
  clicked = false;
  errorMessage: boolean = false;
  user!: user;

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
    localStorage.clear();
    this.loginForm();
  }

  loginForm() {
    this.authForm = this.fb.group({
      username: ['kminchelle', [Validators.required]],
      password: ['0lelplR', [Validators.required]]
    });
  }

  get f() {
    return this.authForm.controls;
  }

  authLogin(){
    let Data: login = {
      username: this.authForm.controls['username'].value,
      password: this.authForm.controls['password'].value
    }
    this.authService.loginAuth(Data).subscribe((data: any)=> {
      console.log('login Response:', data);
      this.user = data;
      localStorage.setItem('isLoggIN', 'false');
      sessionStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userprofile', JSON.stringify(this.user));
      this.router.navigateByUrl('/products');
    },
    error =>{
      console.log('error',error);
      this.clicked = false;
      this.errorMessage = true;
    })
  }

  ngOnInit(): void {
  }

}
