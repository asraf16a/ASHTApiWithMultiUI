import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout';

import { RoleComponent } from './pages/hrm/role/role';
import { UserComponent } from './pages/hrm/user/user';
import { RolePrivilegeComponent } from './pages/hrm/role-privilege/role-privilege';
import { CategoryComponent } from './pages/inventory/category/category';
import { SubcategoryComponent } from './pages/inventory/subcategory/subcategory';

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
        path:'rolePrivilege',
        component:RolePrivilegeComponent
      },
      {
        path:'category',
        component:CategoryComponent
      },
      {
        path:'subCategory',
        component:SubcategoryComponent
      }

    ]
  }

];