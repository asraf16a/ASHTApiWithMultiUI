import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { Patient } from '../../../../shared/models/patient';
import { PatientService } from '../../../../shared/services/patient-service';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-patient.html',
  styleUrl: './add-patient.css'
})
export class AddPatientComponent {

  patientForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private patientService: PatientService
  ) { }

  ngOnInit(): void {

    this.buildForm();

  }

  buildForm(): void {

    this.patientForm = this.fb.group({

      firstName: ['', Validators.required],

      lastName: ['', Validators.required],

      dateOfBirth: ['', Validators.required],

      gender: ['', Validators.required],

      phoneNumber: ['', Validators.required],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      address: ['', Validators.required],

      bloodType: ['', Validators.required],

      allergies: [''],

      medicalHistory: [''],

      currentMedications: [''],

      insuranceProvider: [''],

      insuranceNumber: [''],

      isActive: [true]

    });

  }

  save(): void {

    if (this.patientForm.invalid) {

      this.patientForm.markAllAsTouched();

      return;

    }

    const value = this.patientForm.value;

    const patient: Patient = {

      id: 0,

      firstName: value.firstName,

      lastName: value.lastName,

      dateOfBirth: value.dateOfBirth,

      gender: value.gender,

      phoneNumber: value.phoneNumber,

      email: value.email,

      address: value.address,

      bloodType: value.bloodType,

      allergies: value.allergies,

      medicalHistory: value.medicalHistory,

      currentMedications: value.currentMedications,

      insuranceProvider: value.insuranceProvider,

      insuranceNumber: value.insuranceNumber,

      createdDate: new Date(),

      createdBy: '00000000-0000-0000-0000-000000000000',

      isActive: value.isActive

    };

    this.patientService.createPatient(patient).subscribe({

      next: () => {

        alert('Patient Saved Successfully');

        this.router.navigate(['/patients']);

      },

      error: err => console.error(err)

    });

  }

  cancel(): void {

    this.router.navigate(['/patients']);

  }

}