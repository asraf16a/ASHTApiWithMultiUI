import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, map } from 'rxjs';

import { Role } from '../models/role';

import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response';

@Injectable({

  providedIn: 'root'

})
export class RoleService {

   private apiUrl = `${environment.apiBaseUrl}/Role`;

  constructor(private http: HttpClient) { }

  
  getAllRoleList(): Observable<Role[]> {

  return this.http.get<any>(`${this.apiUrl}/GetAllRoleList`).pipe(

    map(res => {    
      return res.data;
    })

  );

}

  // Get Role By Id

  getRoleById(id: number): Observable<Role> {

    return this.http.get<Role>(`${this.apiUrl}/${id}`);

  }

  // Create Role

  createRole(role: Role): Observable<Role> {

    return this.http.post<Role>(this.apiUrl, role);

  }

  // Update Role

  updateRole(id: number, role: Role): Observable<Role> {

    return this.http.put<Role>(`${this.apiUrl}/${id}`, role);

  }

  // Delete Role

  deleteRole(id: number): Observable<void> {

    return this.http.delete<void>(`${this.apiUrl}/${id}`);

  }

}