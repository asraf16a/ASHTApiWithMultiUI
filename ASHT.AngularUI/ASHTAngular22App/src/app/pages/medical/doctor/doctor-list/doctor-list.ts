import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Doctor } from '../../../../shared/models/doctor';
import { DoctorService } from '../../../../shared/services/doctor-service';

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './doctor-list.html',
  styleUrl: './doctor-list.css'
})
export class DoctorListComponent implements OnInit {

  @Output() addClicked = new EventEmitter<void>();

  @Output() editClicked = new EventEmitter<number>();

  searchText = '';

  doctors: Doctor[] = [];

  constructor(
    private doctorService: DoctorService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.loadDoctors();

  }

  loadDoctors(): void {

    this.doctorService.getAllDoctors().subscribe({

      next: (doctors: Doctor[]) => {

        this.doctors = doctors;

        this.cdr.detectChanges();

      },

      error: err => {

        console.error(err);

        this.doctors = [];

      }

    });

  }

  get totalDoctors(): number {

    return this.doctors.length;

  }

  get activeDoctors(): number {

    return this.doctors.filter(x => x.status === 'Active').length;

  }

  get inactiveDoctors(): number {

    return this.doctors.filter(x => x.status === 'Inactive').length;

  }

  addDoctor(): void {

    this.addClicked.emit();

  }

  editDoctor(doctor: Doctor): void {

    this.editClicked.emit(doctor.id);

  }

  deleteDoctor(doctor: Doctor): void {

    if (!confirm('Delete this doctor?')) return;

    this.doctorService.deleteDoctor(doctor.id).subscribe({

      next: () => {

        this.loadDoctors();

      },

      error: err => console.error(err)

    });

  }

}