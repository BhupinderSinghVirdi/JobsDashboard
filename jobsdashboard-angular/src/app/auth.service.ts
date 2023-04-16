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
    return this.http.post('http://localhost:3001/api/admins/login', user);
  }
  
}
