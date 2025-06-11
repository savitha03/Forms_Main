import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDetailsService {
  private appUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getUserDetails() {
    return this.http.get<any[]>(`${this.appUrl}/users`).pipe(
      map((data: any) => data) // or safely access data.users if your API wraps the array
    );
  }

  saveUserDetails(userData: any) {
    return this.http
      .post(`${this.appUrl}/users`, userData)
      .pipe(map((data: any) => data));
  }

  deleteUserDetails(userId: any) {
    return this.http.delete(`${this.appUrl}/users/${userId}`);
  }

  updateUserDetails(userId: any, userData: any) {
    return this.http
      .put(`${this.appUrl}/users/${userId}`, userData)
      .pipe(map((data: any) => data));
  }
}
