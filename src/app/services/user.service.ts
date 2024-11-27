import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/users'; // Adjust based on your backend URL

  constructor(private http: HttpClient) {}

  // Register a new user
  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }
  
  // Login a user
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, credentials, {
      responseType: 'text', // Ensure response is interpreted as plain text
    });
    
  }
}
