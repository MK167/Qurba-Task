import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { CategoryListComponent } from './Components/category-list/category-list.component';
import { ProductsComponent } from './Components/products/products.component';
import { AuthguardGuard } from './Shared/guards/authguard.guard';

const routes: Routes = [{
  path: '', pathMatch: 'full', redirectTo: 'login'
},
{
 path: 'login', component: LoginComponent
},
{
 path: 'products', component: CategoryListComponent, canActivate: [AuthguardGuard]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
