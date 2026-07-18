import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-role',
  imports: [],
  templateUrl: './role.html',
  styleUrl: './role.css',
})
export class Role {

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
      createdDate:new Date()
    },
    {
      id:2,
      roleName:'Doctor',
      description:'Manage patients',
      isActive:true,
      createdDate:new Date()
    },
    {
      id:3,
      roleName:'Receptionist',
      description:'Appointment Management',
      isActive:false,
      createdDate:new Date()
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



