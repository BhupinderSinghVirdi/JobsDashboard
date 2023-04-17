import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authenticateUser(email: string, password: string): Observable<any> {
    const user = { email, password };
    return this.http.post('https://jobs-dashboard-api.onrender.com/api/admins/login', user);
  }
  
}
