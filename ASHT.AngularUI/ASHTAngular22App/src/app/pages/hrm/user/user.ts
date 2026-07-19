
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list/user-list';
import { AddUserComponent } from './add-user/add-user';
import { EditUserComponent } from './edit-user/edit-user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    UserListComponent,
    AddUserComponent,
    EditUserComponent
  ],
  templateUrl: './user.html',
  styleUrl: './user.css'
})
export class UserComponent {

  currentPage: 'list' | 'add' | 'edit' = 'list';

  selectedUserId = 0;

  users = [
    { id: 1, isActive: true },
    { id: 2, isActive: true },
    { id: 3, isActive: false }
  ];

  get totalUsers() {
    return this.users.length;
  }

  get activeUsers() {
    return this.users.filter(x => x.isActive).length;
  }

  get inactiveUsers() {
    return this.users.filter(x => !x.isActive).length;
  }

  addUser() {
    this.currentPage = 'add';
  }

  editUser(id: number) {
    this.selectedUserId = id;
    this.currentPage = 'edit';
  }

  backToList() {
    this.currentPage = 'list';
  }

}