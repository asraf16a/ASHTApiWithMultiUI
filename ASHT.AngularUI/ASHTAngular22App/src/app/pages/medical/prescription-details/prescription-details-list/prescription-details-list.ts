import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrescriptionDetails } from '../../../../shared/models/prescription-details';
import { PrescriptionDetailsService } from '../../../../shared/services/prescription-details-service';

@Component({
  selector: 'app-prescription-details-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './prescription-details-list.html',
  styleUrl: './prescription-details-list.css'
})
export class PrescriptionDetailsListComponent implements OnInit {

  @Output() addClicked = new EventEmitter<void>();

  @Output() editClicked = new EventEmitter<number>();

  searchText = '';

  prescriptions: PrescriptionDetails[] = [];

  constructor(
    private prescriptionService: PrescriptionDetailsService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.loadPrescriptions();

  }

  loadPrescriptions(): void {

    this.prescriptionService.getAllPrescriptionDetails().subscribe({

      next: (data: PrescriptionDetails[]) => {

        this.prescriptions = data;

        this.cdr.detectChanges();

      },

      error: err => {

        console.error(err);

        this.prescriptions = [];

      }

    });

  }

  get totalPrescriptions(): number {

    return this.prescriptions.length;

  }

  addPrescription(): void {

    this.addClicked.emit();

  }

  editPrescription(item: PrescriptionDetails): void {

    this.editClicked.emit(item.id);

  }

  deletePrescription(item: PrescriptionDetails): void {

    if (!confirm('Delete this prescription?')) return;

    this.prescriptionService.deletePrescriptionDetails(item.id).subscribe({

      next: () => {

        this.loadPrescriptions();

      },

      error: err => console.error(err)

    });

  }

}