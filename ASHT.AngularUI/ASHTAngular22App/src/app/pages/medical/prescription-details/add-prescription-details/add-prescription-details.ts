import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { PrescriptionDetails } from '../../../../shared/models/prescription-details';
import { PrescriptionDetailsService } from '../../../../shared/services/prescription-details-service';

@Component({
  selector: 'app-add-prescription-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-prescription-details.html',
  styleUrl: './add-prescription-details.css'
})
export class AddPrescriptionDetailsComponent {

  prescriptionForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private prescriptionService: PrescriptionDetailsService
  ) { }

  ngOnInit(): void {

    this.buildForm();

  }

  buildForm(): void {

    this.prescriptionForm = this.fb.group({

      medicineName: ['', Validators.required],

      dosage: ['', Validators.required],

      startDate: ['', Validators.required],

      endDate: ['', Validators.required],

      notes: ['']

    });

  }

  save(): void {

    if (this.prescriptionForm.invalid) {

      this.prescriptionForm.markAllAsTouched();

      return;

    }

    const value = this.prescriptionForm.value;

    const prescription: PrescriptionDetails = {

      id: 0,

      medicineName: value.medicineName,

      dosage: value.dosage,

      startDate: value.startDate,

      endDate: value.endDate,

      notes: value.notes

    };

    this.prescriptionService.createPrescriptionDetails(prescription).subscribe({

      next: () => {

        alert('Prescription Details Saved Successfully');

        this.router.navigate(['/prescription-details']);

      },

      error: err => console.error(err)

    });

  }

  cancel(): void {

    this.router.navigate(['/prescription-details']);

  }

}