
import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { User } from '../../../../shared/models/user';
import { EventEmitter } from 'stream';



@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserListComponent {

  searchText = '';

  @Output() addClicked = new EventEmitter<void>();

@Output() editClicked = new EventEmitter<number>();
  users: User[] = [

    {
      id:1,
      username:'admin',
      password:'********',
      passwordSalt:'SALT001',
      userTypeId:1,
      isActive:true,
      isDeleted:false,
      createdDate:new Date('2026-01-01'),
      modifiedDate:new Date('2026-07-01')
    },

    {
      id:2,
      username:'doctor',
      password:'********',
      passwordSalt:'SALT002',
      userTypeId:2,
      isActive:true,
      isDeleted:false,
      createdDate:new Date('2026-01-05'),
      modifiedDate:new Date('2026-07-02')
    },

    {
      id:3,
      username:'reception',
      password:'********',
      passwordSalt:'SALT003',
      userTypeId:3,
      isActive:false,
      isDeleted:false,
      createdDate:new Date('2026-02-01'),
      modifiedDate:new Date('2026-07-10')
    }

  ];

  get totalUsers(): number {

    return this.users.length;

  }

  get activeUsers(): number {

    return this.users.filter(x=>x.isActive).length;

  }

  get inactiveUsers(): number {

    return this.users.filter(x=>!x.isActive).length;

  }

  addUser(){

    alert('Add User');

  }

  editUser(user:User){

    alert('Edit : '+user.username);

  }

  deleteUser(user:User){

    alert('Delete : '+user.username);

  }

}
