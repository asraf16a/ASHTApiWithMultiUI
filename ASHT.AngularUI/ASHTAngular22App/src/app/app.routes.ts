import { Routes } from '@angular/router';
import { User } from './pages/hrm/user/user';
import { Role } from './pages/hrm/role/role';
import { RolePrivilege } from './pages/hrm/role-privilege/role-privilege';
import { Category } from './pages/inventory/category/category';
import { Subcategory } from './pages/inventory/subcategory/subcategory';
import { Product } from './pages/inventory/product/product';

export const routes: Routes = [

    { path: '', redirectTo: 'app', pathMatch: 'full' },

    
    {
        path:'role',
        component:Role
    },
    {
        path:'rolePrivilege',
        component:RolePrivilege
    },
    {
       path:'category',
       component:Category
    },
    {
        path:'subCategory',
        component:Subcategory
    },
    {
        path:'product',
        component:Product
    }
];

