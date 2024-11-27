import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { RegisterComponent } from './register/register.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'view-cart', component: ViewCartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'view-orders', component: ViewOrdersComponent },

];
