import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Role } from '../../../../shared/models/role';
import { RoleService } from '../../../../shared/services/role-service';

@Component({
  selector: 'app-role-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './role-list.html',
  styleUrl: './role-list.css'
})
export class RoleListComponent implements OnInit {

  @Output() addClicked = new EventEmitter<void>();
  @Output() editClicked = new EventEmitter<number>();

  searchText = '';
  roles: Role[] = [];

  constructor(
    private router: Router,
    private roleService: RoleService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadRoles();
  }

  loadRoles(): void {

    this.roleService.getAllRoleList().subscribe({

      next: (roles: Role[]) => {

        this.roles = roles;
        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error(err);
        this.roles = [];
      }

    });

  }

  get filteredRoles(): Role[] {
    if (!this.searchText) {
      return this.roles;
    }
    const search = this.searchText.toLowerCase();
    return this.roles.filter(r =>
      r.roleName?.toLowerCase().includes(search) ||
      r.description?.toLowerCase().includes(search)
    );
  }

  get totalRoles(): number {
    return this.roles.length;
  }

  get activeRoles(): number {
    return this.roles.filter(x => x.isActive).length;
  }

  get inactiveRoles(): number {
    return this.roles.filter(x => !x.isActive).length;
  }

  addRole(): void {
    this.addClicked.emit();
  }

  editRole(role: Role): void {
    this.editClicked.emit(role.id);
  }

  deleteRole(role: Role): void {
    console.log('Delete', role);
  }
}