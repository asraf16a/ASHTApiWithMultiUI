import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { Doctor } from '../../../../shared/models/doctor';
import { DoctorService } from '../../../../shared/services/doctor-service';

@Component({
  selector: 'app-add-doctor',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-doctor.html',
  styleUrl: './add-doctor.css'
})
export class AddDoctorComponent {

  doctorForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    this.buildForm();
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

  save(): void {

    if (this.doctorForm.invalid) {
      this.doctorForm.markAllAsTouched();
      return;
    }

    const value = this.doctorForm.value;

    const doctor: Doctor = {

      id: 0,

      name: value.name,

      email: value.email,

      specialization: value.specialization,

      qualifications: value.qualifications,

      gender: value.gender,

      dateOfBirth: value.dateOfBirth,

      yearsOfExperience: value.yearsOfExperience,

      licenseNumber: value.licenseNumber,

      department: value.department,

      workingHours: value.workingHours,

      status: value.status

    };

    this.doctorService.createDoctor(doctor).subscribe({

      next: () => {

        alert('Doctor Saved Successfully');

        this.router.navigate(['/doctors']);

      },

      error: err => console.error(err)

    });

  }

  cancel(): void {

    this.router.navigate(['/doctors']);

  }

}