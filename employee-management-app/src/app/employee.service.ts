import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviornment } from '../enviornments/enviornment';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private apiUrl = `${enviornment.apiUrl}/employee`

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
