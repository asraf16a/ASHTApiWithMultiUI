import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout';

import { RoleComponent } from './pages/hrm/role/role';
import { UserComponent } from './pages/hrm/user/user';

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
      }

    ]
  }

];