import { Service } from '@angular/core';
import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable,map } from 'rxjs';

import { User } from '../models/user';

import { environment } from '../../../environments/environment';
import { ApiResponse } from '../models/api-response';

@Injectable({

  providedIn: 'root'

})
export class UserService {

   private apiUrl = `${environment.apiUrl}/User`;

  constructor(private http: HttpClient) { }

  
  getAllUserList(): Observable<User[]> {

  return this.http.get<any>(`${this.apiUrl}/GetAllUserList`).pipe(

    map(res => {    
      return res.data;
    })

  );

}

  // Get User By Id

  getUserById(id: number): Observable<User> {

    return this.http.get<User>(`${this.apiUrl}/${id}`);

  }

  // Create User

  createUser(user: User): Observable<User> {

    return this.http.post<User>(this.apiUrl, user);

  }

  // Update User

  updateUser(id: number, user: User): Observable<User> {

    return this.http.put<User>(`${this.apiUrl}/${id}`, user);

  }

  // Delete User

  deleteUser(id: number): Observable<void> {

    return this.http.delete<void>(`${this.apiUrl}/${id}`);

  }

}
