import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Automatically provides this service
})
export class MenuService {
  private baseUrl = 'http://localhost:8080/api/menu'; // Backend API endpoint

  constructor(private http: HttpClient) {}

  // Fetch menu items from the backend
  getMenuItems(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
