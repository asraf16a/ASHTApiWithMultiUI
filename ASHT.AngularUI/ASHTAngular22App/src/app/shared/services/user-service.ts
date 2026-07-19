import { Service } from '@angular/core';
import { Injectable, inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { User } from '../models/user';

import { environment } from '../../../environments/environment';

@Injectable({

  providedIn: 'root'

})
export class UserService {

  private http = inject(HttpClient);

  private apiUrl = `${environment.apiUrl}/users`;

  // Get All Users

  getUsers(): Observable<User[]> {

    return this.http.get<User[]>(this.apiUrl);

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
