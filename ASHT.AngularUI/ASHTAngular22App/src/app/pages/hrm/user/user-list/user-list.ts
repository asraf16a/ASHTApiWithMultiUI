import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../../../shared/models/user';
import { UserService } from '../../../../shared/services/user-service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserListComponent implements OnInit {

  @Output() addClicked = new EventEmitter<void>();
  @Output() editClicked = new EventEmitter<number>();

  searchText = '';
  users: User[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private cdr:ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {

  this.userService.getAllUserList().subscribe({

    next: (users: User[]) => {
      console.log('Component Users:', users);
      console.log('Count:', users.length);
      this.users = users;
      this.cdr.detectChanges();
    },

    error: (err) => {
      console.error(err);
      this.users = [];
    }

  });

}

  get totalUsers(): number {
    return this.users.length;
  }

  get activeUsers(): number {
    return this.users.filter(x => x.isActive).length;
  }

  get inactiveUsers(): number {
    return this.users.filter(x => !x.isActive).length;
  }

  addUser(): void {
    this.addClicked.emit();
  }

  editUser(user: User): void {
    this.editClicked.emit(user.id);
  }

  deleteUser(user: User): void {
    console.log('Delete', user);
  }
}