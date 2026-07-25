import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout';

import { RoleComponent } from './pages/hrm/role/role';
import { UserComponent } from './pages/hrm/user/user';

import { CategoryComponent } from './pages/inventory/category/category';
import { SubcategoryComponent } from './pages/inventory/subcategory/subcategory';
import { RolePrivilegeComponent } from './pages/hrm/roleprivilege/role-privilege/role-privilege';
import { ProductComponent } from './pages/inventory/product/product';

export const routes: Routes = [

  {
    path: '',
    component: AdminLayoutComponent,

    children: [

      {
        path: '',
        redirectTo: 'roles',
        pathMatch: 'full'
      },

      {
        path: 'roles',
        component: RoleComponent
      },

      {
        path: 'users',
        component: UserComponent
      },
      {
        path:'role-privilege',
        component:RolePrivilegeComponent
      },
      {
        path:'category',
        component:CategoryComponent
      },
      {
        path:'subcategory',
        component:SubcategoryComponent
      },
      {
        path:'product',
        component:ProductComponent
      }

    ]
  }

];