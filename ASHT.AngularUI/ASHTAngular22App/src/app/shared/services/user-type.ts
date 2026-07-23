import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response';
import { UserType } from '../models/user-type';

@Injectable({
  providedIn: 'root'
})
export class UserTypeService {

  private apiUrl = `${environment.apiUrl}/UserType`;

  constructor(private http: HttpClient) { }

  getAllUserTypes(): Observable<UserType[]> {

    return this.http
      .get<ApiResponse<UserType[]>>(`${this.apiUrl}/GetAllUserTypeList`)
      .pipe(
        map(response => {

          if (!response.status) {
            throw new Error(response.errors?.join(', ') || 'Failed to load user types.');
          }

          return response.data ?? [];

        })
      );
  }
}