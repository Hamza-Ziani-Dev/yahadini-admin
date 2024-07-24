import { Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { ProductDetailComponent } from './products/components/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: 'products',
        component: AllProductsComponent
    },
    {
        path: 'cart',
        component: CartComponent
    },
    {
        path: 'productDetails/:id',
        component: ProductDetailComponent
    },
    {
        path:'', redirectTo: 'cart', pathMatch: 'full'
    },
    // Nesting Routes
    {
        path: 'auth', component: AuthComponent,
        children: [
            {
                path: 'login', component: LoginComponent
            },
            {
                path: 'register', component: RegisterComponent
            },
            {
                path:'', redirectTo: '/auth/login', pathMatch: 'full'
            },
        ]
    },
];
