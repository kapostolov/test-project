import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SalesComponent } from './sales/sales.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ProductsSrvice } from './product/products.service';


const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', canActivate: [AuthGuard], component: HomeComponent},
  {path: 'new-product', canActivate: [AuthGuard], component: ProductComponent},
  {path: 'sales', canActivate: [AuthGuard], component: SalesComponent},
  {path: '**', redirectTo: '/login'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    SalesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [AuthService, ProductsSrvice, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
