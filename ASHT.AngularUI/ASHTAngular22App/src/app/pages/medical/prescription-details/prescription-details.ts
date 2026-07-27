import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrescriptionDetailsListComponent } from './prescription-details-list/prescription-details-list';
import { AddPrescriptionDetailsComponent } from './add-prescription-details/add-prescription-details';
import { EditPrescriptionDetailsComponent } from './edit-prescription-details/edit-prescription-details';

@Component({
  selector: 'app-prescription-details',
  standalone: true,
  imports: [
    CommonModule,
    PrescriptionDetailsListComponent,
    AddPrescriptionDetailsComponent,
    EditPrescriptionDetailsComponent
  ],
  templateUrl: './prescription-details.html',
  styleUrl: './prescription-details.css'
})
export class PrescriptionDetailsComponent {

  currentPage: 'list' | 'add' | 'edit' = 'list';

  selectedPrescriptionDetailsId = 0;

  addPrescriptionDetails(): void {

    this.currentPage = 'add';

  }

  editPrescriptionDetails(id: number): void {

    this.selectedPrescriptionDetailsId = id;

    this.currentPage = 'edit';

  }

  backToList(): void {

    this.currentPage = 'list';

  }

}