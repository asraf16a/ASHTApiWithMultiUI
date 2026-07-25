import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleListComponent } from './role-list/role-list';
import { AddRoleComponent } from './add-role/add-role';
import { EditRoleComponent } from './edit-role/edit-role';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [
    CommonModule,
    RoleListComponent,
    AddRoleComponent,
    EditRoleComponent
  ],
  templateUrl: './role.html',
  styleUrl: './role.css'
})
export class RoleComponent {

  currentPage: 'list' | 'add' | 'edit' = 'list';

  selectedRoleId = 0;

  // roles = [
  //   { id: 1, roleName: 'Admin', description: 'Full access', isActive: true, isDeleted: false },
  //   { id: 2, roleName: 'Editor', description: 'Can edit content', isActive: true, isDeleted: false },
  //   { id: 3, roleName: 'Viewer', description: 'Read-only access', isActive: false, isDeleted: false },
  //   { id: 4, roleName: 'Manager', description: 'Manages team', isActive: true, isDeleted: false }
  // ];

  // get totalRoles() {
  //   return this.roles.length;
  // }

  // get activeRoles() {
  //   return this.roles.filter(x => x.isActive).length;
  // }

  // get inactiveRoles() {
  //   return this.roles.filter(x => !x.isActive).length;
  // }

  addRole() {
    this.currentPage = 'add';
  }

  editRole(id: number) {
    this.selectedRoleId = id;
    this.currentPage = 'edit';
  }

  backToList() {
    this.currentPage = 'list';
  }

}