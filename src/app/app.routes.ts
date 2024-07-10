import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { SellerAuthComponent } from './Components/seller-auth/seller-auth.component';
import { SellerHomeComponent } from './Components/seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerAddproductComponent } from './Components/seller-addproduct/seller-addproduct.component';
import { SellerUpdateComponent } from './Components/seller-update/seller-update.component';

export const routes: Routes = [
    {path:'',
        component:HomeComponent
        },
    {path:'home',
    component:HomeComponent
    },
    {
        path: 'seller-auth',
        component:SellerAuthComponent
    },
    {
        path: 'seller-home',
        component:SellerHomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'seller-addproduct',
        component:SellerAddproductComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'seller-update/:id',
        component:SellerUpdateComponent,
        canActivate: [AuthGuard]
    }


    
];
