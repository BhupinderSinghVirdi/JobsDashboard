import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobItem } from '../models/jobitem.model';

@Injectable({
  providedIn: 'root'
})

export default class JobService {
  private readonly API_URL = 'https://jobs-dashboard-api.onrender.com/api/jobs';

  constructor(private httpClient: HttpClient) { }

  getJobs(): Observable<JobItem[]> {
    return this.httpClient.get<JobItem[]>(this.API_URL);
  }

  getJob(id: string): Observable<JobItem> {
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get<JobItem>(url);
  }
}