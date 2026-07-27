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
  selector: 'app-edit-patient',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-patient.html',
  styleUrl: './edit-patient.css'
})
export class EditPatientComponent implements OnInit {

  @Input() patientIdInput!: number;

  patientForm!: FormGroup;

  patientId = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.patientId = Number(this.route.snapshot.paramMap.get('id'));

    this.buildForm();

    // Demo Data
    // Replace with API Call

    this.patientForm.patchValue({

      firstName: 'John',

      lastName: 'Doe',

      dateOfBirth: '1995-05-10',

      gender: 'Male',

      phoneNumber: '01712345678',

      email: 'john@gmail.com',

      address: 'Dhaka, Bangladesh',

      bloodType: 'A+',

      allergies: 'None',

      medicalHistory: 'Diabetes',

      currentMedications: 'Metformin',

      insuranceProvider: 'ABC Insurance',

      insuranceNumber: 'INS-1001',

      isActive: true

    });

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

  update(): void {

    if (this.patientForm.invalid) {

      this.patientForm.markAllAsTouched();

      return;

    }

    console.log(this.patientForm.value);

    alert('Patient Updated Successfully');

  }

  cancel(): void {

    this.router.navigate(['/patients']);

  }

}