import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-user.html',
  styleUrl: './edit-user.css'
})
export class EditUserComponent implements OnInit {

  userForm!: FormGroup;

  userId = 0;

  userTypes = [
    { id: 1, name: 'Administrator' },
    { id: 2, name: 'Doctor' },
    { id: 3, name: 'Receptionist' },
    { id: 4, name: 'Patient' }
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    this.userForm = this.fb.group({

      username: ['', Validators.required],

      password: [''],

      confirmPassword: [''],

      userTypeId: [null, Validators.required],

      isActive: [true]

    });

    // Demo Data
    // Replace with API Call

    this.userForm.patchValue({

      username: 'admin',

      userTypeId: 1,

      isActive: true

    });

  }

  update(): void {

    if (this.userForm.invalid) {

      this.userForm.markAllAsTouched();

      return;

    }

    console.log(this.userForm.value);

    alert('User Updated Successfully');

  }

  cancel(): void {

    this.router.navigate(['/users']);

  }

}