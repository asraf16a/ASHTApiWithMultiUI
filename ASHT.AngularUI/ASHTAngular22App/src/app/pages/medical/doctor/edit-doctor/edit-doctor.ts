import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-doctor',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-doctor.html',
  styleUrl: './edit-doctor.css'
})
export class EditDoctorComponent implements OnInit {

  @Input() doctorIdInput!: number;

  doctorForm!: FormGroup;

  doctorId = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.doctorId = Number(this.route.snapshot.paramMap.get('id'));

    this.buildForm();

    // Demo Data
    // Replace with API Call

    this.doctorForm.patchValue({

      name: 'Dr. John Smith',

      email: 'johnsmith@gmail.com',

      specialization: 'Cardiology',

      qualifications: 'MBBS, MD',

      gender: 'Male',

      dateOfBirth: '1985-08-15',

      yearsOfExperience: '10 Years',

      licenseNumber: 'DOC-1001',

      department: 'Cardiology',

      workingHours: '09:00 AM - 05:00 PM',

      status: 'Active'

    });

  }

  buildForm(): void {

    this.doctorForm = this.fb.group({

      name: ['', Validators.required],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      specialization: ['', Validators.required],

      qualifications: ['', Validators.required],

      gender: ['', Validators.required],

      dateOfBirth: ['', Validators.required],

      yearsOfExperience: ['', Validators.required],

      licenseNumber: ['', Validators.required],

      department: ['', Validators.required],

      workingHours: ['', Validators.required],

      status: ['Active', Validators.required]

    });

  }

  update(): void {

    if (this.doctorForm.invalid) {

      this.doctorForm.markAllAsTouched();

      return;

    }

    console.log(this.doctorForm.value);

    alert('Doctor Updated Successfully');

  }

  cancel(): void {

    this.router.navigate(['/doctors']);

  }

}