
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUserComponent {

  userForm: FormGroup;

  userTypes = [
    { id: 1, name: 'Administrator' },
    { id: 2, name: 'Doctor' },
    { id: 3, name: 'Receptionist' },
    { id: 4, name: 'Patient' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

    this.userForm = this.fb.group({

      username: ['', Validators.required],

      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],

      confirmPassword: ['', Validators.required],

      userTypeId: [null, Validators.required],

      isActive: [true]

    });

  }

  save() {

    if (this.userForm.invalid) {

      this.userForm.markAllAsTouched();

      return;

    }

    console.log(this.userForm.value);

    alert('User Saved Successfully');

  }

  cancel() {

    this.router.navigate(['/users']);

  }

}
