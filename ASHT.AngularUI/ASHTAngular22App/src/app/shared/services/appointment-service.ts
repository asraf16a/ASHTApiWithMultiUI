import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiUrl = `${environment.apiUrl}/Appointment`;

  constructor(
    private http: HttpClient
  ) { }

  // Get All Appointments
  getAllAppointments(): Observable<Appointment[]> {

    return this.http
      .get<any>(`${this.apiUrl}/GetAll`)
      .pipe(
        map(response => response.data as Appointment[])
      );

  }

  // Get Appointment By Id
  getAppointmentById(id: number): Observable<Appointment> {

    return this.http
      .get<any>(`${this.apiUrl}/GetById/${id}`)
      .pipe(
        map(response => response.data as Appointment)
      );

  }

  // Create Appointment
  createAppointment(appointment: Appointment): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/AddAsync`,
      appointment
    );

  }

  // Update Appointment
  updateAppointment(appointment: Appointment): Observable<any> {

    return this.http.put(
      `${this.apiUrl}/UpdateAsync`,
      appointment
    );

  }

  // Delete Appointment
  deleteAppointment(id: number): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/DeleteAsync/${id}`
    );

  }

}