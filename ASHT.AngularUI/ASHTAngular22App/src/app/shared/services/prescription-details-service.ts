import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { PrescriptionDetails } from '../models/prescription-details';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionDetailsService {

  private apiUrl = 'https://localhost:7241/api/PrescriptionDetails';

  constructor(
    private http: HttpClient
  ) { }

  // Get All
  getAllPrescriptionDetails(): Observable<PrescriptionDetails[]> {

    return this.http.get<any>(`${this.apiUrl}/GetAll`).pipe(

      map(response => response.data)

    );

  }

  // Get By Id
  getPrescriptionDetailsById(id: number): Observable<PrescriptionDetails> {

    return this.http.get<any>(`${this.apiUrl}/GetById/${id}`).pipe(

      map(response => response.data)

    );

  }

  // Create
  createPrescriptionDetails(
    prescription: PrescriptionDetails
  ): Observable<any> {

    return this.http.post(

      `${this.apiUrl}/AddAsync`,
      prescription

    );

  }

  // Update
  updatePrescriptionDetails(
    prescription: PrescriptionDetails
  ): Observable<any> {

    return this.http.put(

      `${this.apiUrl}/UpdateAsync`,
      prescription

    );

  }

  // Delete
  deletePrescriptionDetails(id: number): Observable<any> {

    return this.http.delete(

      `${this.apiUrl}/DeleteAsync/${id}`

    );

  }

}