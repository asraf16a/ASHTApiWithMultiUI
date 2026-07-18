import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Role } from '../../../shared/models/role';


@Component({
  selector: 'app-role',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './role.html',
  styleUrl: './role.css',
})
export class RoleComponent {

  roleForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.roleForm = this.fb.group({
      roleName: ['', [Validators.required, Validators.minLength(3)]],
      description: [''],
      isActive: [true]
    });
  }

  onSubmit(): void {
    if (this.roleForm.valid) {
      console.log(this.roleForm.value);
    }
  }
  search = '';

  roles: Role[] = [
    {
      id:1,
      roleName:'Administrator',
      description:'Full system access',
      isActive:true,
      isDeleted:false
    },
    {
      id:2,
      roleName:'Doctor',
      description:'Manage patients',
      isActive:true,
      isDeleted:false
    },
    {
      id:3,
      roleName:'Receptionist',
      description:'Appointment Management',
      isActive:false,
      isDeleted:false
    }
  ];

  get filteredRoles(){
    return this.roles.filter(x =>
      x.roleName.toLowerCase().includes(this.search.toLowerCase()));
  }

  addRole(){
    alert('Add Role');
  }

  edit(role:Role){
    alert(role.roleName);
  }

  delete(role:Role){
    if(confirm('Delete this role?')){
      this.roles=this.roles.filter(x=>x.id!=role.id);
    }
  }

}



