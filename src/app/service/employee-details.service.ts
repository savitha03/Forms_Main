import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeDetailsService {
  private appUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  getEmployeesDetails() {
    return this.http.get<any[]>(`${this.appUrl}/employees`).pipe(
      map((data: any) => data) // or safely access data.users if your API wraps the array
    );
  }

  saveEmployeesDetails(empData: any) {
    return this.http
      .post(`${this.appUrl}/employees`,empData)
      .pipe(map((data: any) => data));
  }

  deleteEmployeesDetails(empId: any) {
    return this.http.delete(`${this.appUrl}/employees/${empId}`);
  }

  updateEmployeesDetails(empId: any, empData: any) {
    return this.http
      .put(`${this.appUrl}/employees/${empId}`, empData)
      .pipe(map((data: any) => data));
  }
}
