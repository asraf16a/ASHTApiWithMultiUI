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
  selector: 'app-edit-prescription-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-prescription-details.html',
  styleUrl: './edit-prescription-details.css'
})
export class EditPrescriptionDetailsComponent implements OnInit {

  @Input() prescriptionDetailsIdInput!: number;

  prescriptionForm!: FormGroup;

  prescriptionId = 0;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.prescriptionId =
      Number(this.route.snapshot.paramMap.get('id'));

    this.buildForm();

    // Demo Data
    // Replace with API Call

    this.prescriptionForm.patchValue({

      medicineName: 'Paracetamol 500mg',

      dosage: '1 Tablet Twice Daily',

      startDate: '2025-07-20',

      endDate: '2025-07-27',

      notes: 'Take medicine after meals.'

    });

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

  update(): void {

    if (this.prescriptionForm.invalid) {

      this.prescriptionForm.markAllAsTouched();

      return;

    }

    console.log(this.prescriptionForm.value);

    alert('Prescription Details Updated Successfully');

  }

  cancel(): void {

    this.router.navigate(['/prescription-details']);

  }

}