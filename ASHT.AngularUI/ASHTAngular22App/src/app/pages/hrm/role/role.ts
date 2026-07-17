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
}



